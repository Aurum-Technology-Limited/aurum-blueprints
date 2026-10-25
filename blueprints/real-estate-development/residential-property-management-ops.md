---
id: real-estate-development.residential-property-management-ops
name: Residential Property Management Operations
description: "The daily machinery of residential property management: fair tenant screening, rent collection and a firm arrears ladder, maintenance triage, inspections, compliance renewals and landlord statements that arrive on time."
category: business
version: 1.0.0
tags: [real-estate-development, residential-property-management-ops, small-business, property-management, tenant-screening, rent-arrears, maintenance, inspections]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - compliance-control
    - vendor
    - metrics-log
    - feedback-themes
    - meeting-notes
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Residential Property Management Operations
          description: "Running day-to-day property management: tenant screening, rent collection and arrears, maintenance requests, inspections and landlord reporting."
          projects:
            - name: Managed property register and unit files
              description: |-
                ## Purpose
                Every other process in this area depends on knowing exactly which homes you manage, who owns them, who lives in them and what you are allowed to spend without asking. A single register with one row per unit, linked to a tidy digital file for each property, ends the hunt through email threads when a tenant rings about a leak at 9pm.

                ## Milestones
                1. A register listing every managed unit with address, landlord, tenant names, rent, tenancy start and end dates and the agreed repair spending limit.
                2. One digital folder per unit holding the tenancy agreement, inventory, certificates, deposit record and landlord authority.
                3. Every gap in a unit file marked in the register with an owner and a date to fix it.
                4. The register checked against the rent ledger so the number of units and rents match.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register covers 100 percent of managed units and each unit file holds the tenancy, inventory, certificates and deposit record, or a dated gap."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every managed address with landlord and tenant names in one sheet"
                - "Add rent, tenancy dates and the repair spending limit for each unit"
                - "Create one folder per unit with the same subfolder names"
                - "Mark every missing document in the register with a fix-by date"
            - name: New property takeover checklist
              description: |-
                ## Purpose
                The first fortnight after a landlord instructs you on a home decides whether you inherit their problems or fix them. A fixed takeover checklist covering keys, meter readings, safety certificates, the existing tenancy, deposit status and the condition of the home makes sure nothing slips through because the instruction arrived on a busy Friday.

                ## Milestones
                1. A written checklist of every item to collect or verify when taking on a property.
                2. Each item marked with who collects it and within how many days.
                3. The checklist completed for the next property you take on, with gaps chased in writing.
                4. A takeover summary sent to the landlord listing what was received and what is outstanding.

                ## Notes
                Start from the **Operational checklist** template. The two items most often missed are proof the deposit was protected and the current gas or electrical certificate.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A takeover checklist exists and has been completed for at least one new property, with a summary of outstanding items sent to its landlord."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every document, key and reading you need from a new landlord"
                - "Set a number of days for each item to be collected"
                - "Run the checklist on the next property you take on"
                - "Send the landlord a summary of received and outstanding items"
            - name: Safety certificate and licence tracker
              description: |-
                ## Purpose
                Expired gas safety records, electrical reports, smoke alarm checks or rental licences can expose landlords and their agent to fines and can block a possession claim later. A tracker listing every certificate per unit with its expiry date, and a lead time to book the renewal, turns a legal risk into a calendar.

                ## Milestones
                1. Every certificate and licence your jurisdiction requires for residential lettings listed, confirmed with your professional body or a housing solicitor.
                2. The expiry date of each certificate recorded for every managed unit.
                3. A booking lead time set for each certificate type, such as eight weeks before expiry.
                4. No unit showing an expired certificate without a booked appointment.

                ## Notes
                Start from the **Compliance control** template. Record the date the tenant was given a copy as well as the expiry date; in many places the service date matters as much as the certificate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker shows the expiry date of every required certificate for every unit, with zero expired items lacking a booked renewal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm which certificates and licences residential lets need where you operate"
                - "Record each certificate's expiry and the date the tenant got a copy"
                - "Set a booking lead time for each certificate type"
                - "Book renewals for anything expiring in the next eight weeks @priority(high)"
            - name: Standard letter and notice library
              description: |-
                ## Purpose
                Most disputes start with a badly worded letter: a rent reminder that sounds like a threat, an access notice with too little warning, or a formal notice served on the wrong form. A library of approved letters for the twenty situations you meet most often, checked once by a housing solicitor, means staff send the right words every time.

                ## Milestones
                1. A list of the twenty letters and notices your team sends most often.
                2. A standard version of each written in plain language with fields for names, dates and amounts.
                3. Formal notices reviewed by a housing solicitor and marked with the date of review.
                4. The library stored in one shared place with a rule that formal notices are never edited freehand.

                ## Notes
                Keep prescribed statutory forms separate from your own letters, and always download the current version rather than reusing an old copy.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty standard letters are stored in one shared folder, and every formal notice carries a solicitor review date from the last 12 months."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the twenty letters your team sent most in the last six months"
                - "Draft a plain-language standard version of each with fill-in fields"
                - "Send the formal notices to a housing solicitor for review"
                - "Re-check formal notices against current law and forms @recurring(yearly)"
            - name: Written tenant screening criteria
              description: |-
                ## Purpose
                Screening by instinct is slow, inconsistent and exposes you to discrimination claims. Written criteria for affordability, references, credit history, right to rent where it applies and guarantor rules, applied identically to every applicant, let you decide quickly and explain any refusal calmly.

                ## Milestones
                1. Criteria written for income-to-rent ratio, previous landlord references, credit checks, identity and any legal right-to-rent checks.
                2. Rules set for when a guarantor or larger upfront payment is acceptable, within local legal limits.
                3. The criteria checked against fair housing and equality rules by a solicitor or professional body.
                4. Every applicant in the next month assessed against the written criteria with the result recorded.

                ## Notes
                Agree the criteria with each landlord before marketing; a landlord who overrides them case by case is a common source of complaints.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Screening criteria are written, legally reviewed and applied to every applicant for 30 days, with each decision recorded against them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write your income, reference, credit and identity requirements on one page"
                - "Set the rules for guarantors and upfront payments"
                - "Ask a solicitor to check the criteria against equality and housing law"
                - "Record each applicant's result against the criteria for the next month"
            - name: Rent ledger and client account reconciliation
              description: |-
                ## Purpose
                Rent arrives by transfer, card, standing order and sometimes cash, and a ledger that is a day behind makes arrears look worse or better than they are. Setting up a ledger with one line per tenancy, matched to the client bank account, gives you the true position before you call anyone about money.

                ## Milestones
                1. A rent ledger with expected rent, due date, received amount and balance for every tenancy.
                2. Each tenant given a unique payment reference so receipts match automatically or quickly.
                3. The ledger reconciled to the client account bank statement to the penny.
                4. A written rule for unmatched receipts: who investigates and within how many days.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The rent ledger reconciles to the client account statement with zero unexplained difference at the end of one full month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export last month's client account statement"
                - "Set up one ledger line per tenancy with rent and due date"
                - "Give every tenant a unique payment reference and tell them in writing"
                - "Reconcile the ledger to the bank statement and note any differences"
            - name: Maintenance request intake and priority bands
              description: |-
                ## Purpose
                Repair requests arrive by text, phone, email and conversations on the doorstep, and anything not logged is forgotten. One intake route with clear priority bands, for example emergency within 24 hours, urgent within 3 days and routine within 28 days, tells tenants what to expect and tells contractors how fast to move.

                ## Milestones
                1. One logging route for every repair request, with a reference number given to the tenant.
                2. Priority bands written with examples of what falls into each and the target response time.
                3. The bands shared with tenants and contractors in a one-page guide.
                4. Every request in the next month logged with a band and a completion date.

                ## Notes
                Put no heating in winter, no water, gas smells, serious leaks and insecure doors in the emergency band. Never ask a tenant to wait for a quote on a gas smell: they call the gas emergency line first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All repair requests for 30 days are logged with a reference, a priority band and a completion date against the written response targets."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose one route for logging every repair request"
                - "Write three or four priority bands with examples and response times"
                - "Send tenants and contractors a one-page repairs guide"
                - "Log every request for a month with a band and completion date"
            - name: Out-of-hours emergency procedure
              description: |-
                ## Purpose
                Burst pipes, lockouts and electrical failures rarely happen at 11am on a Tuesday. A written out-of-hours procedure, with a call rota or answering service, a list of emergency contractors who answer at night and a spending limit for the person on call, protects tenants and the building and stops one person from being on call forever.

                ## Milestones
                1. An out-of-hours number tenants can reach, published in every tenancy welcome pack.
                2. A rota or service covering every night, weekend and public holiday.
                3. Named emergency contractors for plumbing, electrics, locks and boarding up, with night rates agreed.
                4. A spending limit and decision guide for the person on call.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every night and weekend for the next quarter has a named person or service on call, with four trades of emergency contractor listed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether to run an in-house rota or use an answering service"
                - "Agree night call-out rates with an emergency plumber, electrician and locksmith"
                - "Write a one-page on-call guide with the spending limit"
                - "Publish the out-of-hours number to every tenant"
                - "Set next month's on-call rota @recurring(monthly:22)"
            - name: Approved contractor panel
              description: |-
                ## Purpose
                Using whoever is free leads to uneven work, missing insurance and invoices nobody can query. A panel of two or three vetted contractors per trade, each with insurance, qualifications and agreed rates on file, lets you dispatch a job in minutes and defend the cost to a landlord.

                ## Milestones
                1. At least two contractors per core trade: plumbing and heating, electrics, general building, locks, cleaning and gardening.
                2. Proof of insurance and any required trade registration held for each.
                3. Agreed call-out and hourly rates and target response times written down.
                4. Panel members briefed on how to accept jobs, report completion and invoice.

                ## Notes
                Start from the **Vendor** template, one record per contractor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six core trades each have at least two contractors with current insurance, registration and agreed rates on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the trades you called out in the last 12 months"
                - "Request insurance and registration proof from current contractors"
                - "Agree rates and response times with two contractors per trade"
                - "Check every contractor's insurance has not lapsed @recurring(quarterly)"
            - name: Twice-weekly rent receipt matching
              description: |-
                ## Purpose
                Arrears caught on day two are a reminder; arrears caught on day twenty are a dispute. Matching receipts against the ledger twice a week means you know who has not paid within days of the due date and can start the arrears ladder while the amount is still small.

                ## Milestones
                1. Two fixed weekly slots blocked for rent matching.
                2. Every receipt matched to a tenancy or listed as unmatched within the session.
                3. A list of tenancies with any unpaid balance produced at the end of each session.
                4. Unmatched receipts cleared within seven days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Rent is matched twice a week for a full quarter, with no unmatched receipt older than seven days."
                cadence: rolling
              tasks:
                - "Block two fixed weekly slots for rent matching"
                - "Match bank receipts to the rent ledger @recurring(weekly:mon,thu)"
                - "Send the unpaid balance list to whoever runs arrears"
                - "Chase the source of any receipt still unmatched after a week"
            - name: Rent arrears ladder
              description: |-
                ## Purpose
                Tenants respond better to a predictable sequence than to silence followed by a formal notice. A written ladder, with a friendly reminder on day one, a call on day five, a letter on day ten, a payment plan offer and a landlord decision point, keeps arrears small and makes later legal steps defensible.

                ## Milestones
                1. Each step of the ladder written with the day it happens, the channel and the standard letter used.
                2. A payment plan template with clear instalments and what happens if one is missed.
                3. A threshold at which the landlord is told and asked for instructions in writing.
                4. Every tenancy in arrears for the next quarter moved through the ladder with each step dated.

                ## Notes
                Record every contact attempt, its date and what was said. A complete contact log matters if the case ever reaches a court or tribunal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every arrears case for a quarter has dated ladder steps recorded, and the landlord decision point was reached in writing on each case that passed the threshold."
                cadence: rolling
              tasks:
                - "Write the arrears steps with day numbers and channels"
                - "Draft a payment plan template with instalments and missed-payment terms"
                - "Review every tenancy in arrears and its next ladder step @recurring(weekly:tue)"
                - "Tell landlords in writing once arrears pass the agreed threshold"
            - name: Weekly maintenance job board review
              description: |-
                ## Purpose
                Repair jobs drift when a contractor goes quiet or parts are on order, and the tenant is the first to notice. A short weekly review of every open job, sorted by age and band, catches stuck jobs before they become complaints or disrepair claims.

                ## Milestones
                1. One list of all open jobs with band, date raised, contractor and status.
                2. Every job older than its target time given a named action and a new date.
                3. Tenants with delayed jobs told what is happening and when.
                4. The number of overdue jobs recorded each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For 12 consecutive weeks, every open job older than its target has a named action, and the overdue count is recorded."
                cadence: rolling
              tasks:
                - "Sort open jobs by age and priority band"
                - "Review every overdue job and set a next action @recurring(weekly:wed)"
                - "Text tenants with delayed jobs a new expected date"
                - "Record the weekly overdue job count"
            - name: Quarterly periodic inspection programme
              description: |-
                ## Purpose
                Periodic inspections spot leaks, damp, unreported damage, overcrowding and smoke alarms with no batteries before they become expensive. A programme that visits every home on a fixed cycle, with proper notice to the tenant and a standard report, also gives landlords evidence that their property is being looked after.

                ## Milestones
                1. An inspection frequency agreed for each property, such as every three or six months.
                2. A standard inspection form covering each room, safety devices and tenant concerns.
                3. Written notice given to tenants within the legal minimum before each visit.
                4. Every report with photos filed and sent to the landlord within five working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every managed unit has an inspection report on file dated within its agreed cycle, and each report reached the landlord within five working days."
                cadence: cyclic
              tasks:
                - "Agree an inspection frequency with each landlord"
                - "Plan next quarter's inspection routes by area @recurring(quarterly)"
                - "Send tenants written notice of each visit"
                - "File each report with photos and send it to the landlord"
            - name: Monthly landlord statement run
              description: |-
                ## Purpose
                Landlords judge their agent by the statement more than by anything else: late, confusing or wrong statements lose instructions. A fixed monthly run that reconciles rent, deducts fees and approved repairs with invoices attached and pays out on a set date builds trust that is hard to win back once lost.

                ## Milestones
                1. A fixed statement and payment date agreed and published to every landlord.
                2. Each statement showing rent received, fees, repairs with invoices and the net payment.
                3. The total paid to landlords reconciled to the client account before release.
                4. Queries from landlords answered within three working days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Statements go out on the published date for six months running, each reconciled to the client account with invoices attached."
                cadence: rolling
              tasks:
                - "Choose and publish a fixed monthly statement date"
                - "Run landlord statements and payments @recurring(monthly:5)"
                - "Attach every repair invoice to the statement it is deducted on"
                - "Log each landlord query and the date it was answered"
            - name: Tenancy renewal and rent review pipeline
              description: |-
                ## Purpose
                Tenancies that roll on unnoticed often sit at rents well below market, while rushed renewals give the tenant too little notice. A pipeline that looks three months ahead at every expiry, with a market rent check and the landlord's instruction recorded, keeps renewals calm and legal.

                ## Milestones
                1. A list of every tenancy ending or due a rent review in the next 90 days.
                2. A market rent check for each, using recent comparable lets.
                3. The landlord's instruction recorded: renew, review rent, or end the tenancy.
                4. Renewal or rent change notices served on time using the correct form.

                ## Notes
                Rent increase rules, notice periods and caps vary widely; confirm the correct procedure locally before serving anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No tenancy reaches its end or review date without a recorded landlord instruction and a correctly served notice, for six consecutive months."
                cadence: rolling
              tasks:
                - "Pull every tenancy ending or due a review in the next 90 days @recurring(monthly:12)"
                - "Check three recent comparable lets for each unit"
                - "Send each landlord a renewal recommendation and get a written instruction"
                - "Serve renewal or rent notices using the approved forms"
            - name: Void turnaround from check-out to re-let
              description: |-
                ## Purpose
                Every empty week costs a landlord a week's rent, and voids stretch because cleaning, repairs, photos and viewings happen one after another instead of together. A standard turnaround with target days for each step, started as soon as notice is received, can cut voids from weeks to days.

                ## Milestones
                1. A turnaround checklist from notice received to new tenant moving in, with a target day for each step.
                2. Pre-check-out visits booked so repairs and marketing start before the tenant leaves.
                3. Void days recorded for every turnover.
                4. The average void length for the next six turnovers compared with the last six.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The next six turnovers follow the checklist and their average void days are recorded and compared with the previous six."
                cadence: rolling
              tasks:
                - "Write the turnaround steps with a target day for each"
                - "Book a pre-check-out visit as soon as notice arrives"
                - "Record the void days for each turnover"
                - "Compare average void days with the previous six turnovers"
            - name: Deposit protection and return process
              description: |-
                ## Purpose
                Mishandled deposits are one of the most common sources of fines and complaints in residential lettings. A process that registers each deposit on time where a scheme is required, serves any prescribed information, and returns money promptly with itemised deductions keeps you on the right side of the rules and of your tenants.

                ## Milestones
                1. The legal deposit rules where you operate written down, including deadlines and caps.
                2. Every current deposit checked as protected or held correctly, with proof on file.
                3. A return procedure with the number of days to propose deductions and pay out.
                4. Deduction proposals always itemised with check-in and check-out evidence.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every current deposit has proof of correct protection on file, and the return procedure is written with day targets."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the deposit rules and deadlines where you operate"
                - "Check proof of protection for every current deposit"
                - "Write a return procedure with day targets for each step"
                - "Audit new deposits taken last month for protection proof @recurring(monthly:8)"
            - name: Monthly compliance renewal sweep
              description: |-
                ## Purpose
                A tracker only protects you if someone reads it. A monthly sweep of every certificate, licence and alarm test due in the next 60 days, with bookings made and tenants given access notice, means renewals happen before expiry rather than after a letter from the council.

                ## Milestones
                1. A fixed monthly date for the compliance sweep.
                2. Every item due in the next 60 days booked with a contractor.
                3. Tenants given written access notice for each booking.
                4. New certificates filed and copies given to tenants within the required time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive months, no certificate or licence expired without a booking made at least 30 days ahead."
                cadence: rolling
              tasks:
                - "Filter the tracker for items due in the next 60 days @recurring(monthly:20)"
                - "Book each renewal and send the tenant access notice"
                - "File new certificates and give tenants their copies"
                - "Record any failed access attempts with dates and letters sent"
            - name: Tenant contact and complaints log
              description: |-
                ## Purpose
                When a tenant says they reported damp three times, you need to know whether they did. A single log of tenant contacts and formal complaints, with a published complaints procedure and response times, protects you in disputes and shows patterns such as one contractor or one building generating most of the trouble.

                ## Milestones
                1. One log recording date, tenant, channel, subject and outcome for every significant contact.
                2. A written complaints procedure with acknowledgement and response times.
                3. Each formal complaint closed with a written response.
                4. A monthly review of complaint themes with one action agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every formal complaint for six months is logged, acknowledged and answered in writing within the published times."
                cadence: rolling
              tasks:
                - "Set up a single contact and complaints log"
                - "Publish a complaints procedure with response times to tenants"
                - "Review complaint themes and agree one fix @recurring(monthly:26)"
                - "Check the redress or ombudsman scheme your business must belong to"
            - name: Operations KPI sheet
              description: |-
                ## Purpose
                Without a handful of numbers, you only learn the business is slipping when a landlord leaves. Tracking arrears as a percentage of rent due, average void days, jobs completed within target, inspections done on time and statement punctuality each month shows where to put effort before it shows up as churn.

                ## Milestones
                1. Five or six KPIs chosen with a clear definition for each.
                2. Twelve months of history filled in where the data exists.
                3. A target set for each KPI.
                4. The sheet updated monthly and shared with the team.

                ## Notes
                Start from the **Metrics log** template. Measure arrears as a percentage of the month's rent roll so a growing portfolio does not hide a worsening rate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A KPI sheet with six defined measures and targets has been updated monthly for six consecutive months."
                cadence: rolling
              tasks:
                - "Choose five or six operations KPIs and define each in a sentence"
                - "Back-fill as much history as the records allow"
                - "Set a target for each KPI"
                - "Update the KPI sheet and share it with the team @recurring(monthly:28)"
            - name: Landlord and tenant law essentials
              description: |-
                ## Purpose
                Most expensive mistakes in management come from not knowing a rule: entering without notice, serving the wrong form or withholding a deposit without grounds. Working through the core law where you operate, covering tenancy types, notice rules, repair duties, deposits, entry rights and possession, gives you the judgement to know when to call a solicitor.

                ## Milestones
                1. A reliable source chosen, such as a professional body course, a recognised handbook or a solicitor's training session.
                2. Notes on tenancy types, notice periods, repair duties, deposits, entry and possession.
                3. A one-page cheat sheet for the team with the rules they apply weekly.
                4. A list of situations that always go to a solicitor.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page cheat sheet of core tenancy rules and a list of solicitor-only situations are written and shared with the team."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one course or handbook on residential tenancy law where you operate"
                - "Make notes on notice, repairs, deposits, entry and possession"
                - "Write a one-page cheat sheet for the team"
                - "List the situations that must always go to a solicitor"
            - name: Fair housing and anti-discrimination practice
              description: |-
                ## Purpose
                Discrimination in lettings is often unintended: an advert saying no benefits, a landlord preference passed on without question, or reasonable adjustments refused. Learning the rules on protected characteristics and reasonable adjustments, and checking your adverts and processes against them, protects tenants and your business.

                ## Milestones
                1. The protected characteristics and lettings rules where you operate summarised.
                2. Current adverts, screening criteria and letters checked for discriminatory wording.
                3. A script for declining a landlord's unlawful instruction.
                4. A process for handling requests for reasonable adjustments, such as accessible formats.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All live adverts and screening documents have been checked against written fair housing rules, and a script for refusing unlawful instructions exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the equality or fair housing rules for lettings where you operate"
                - "Check every live advert and screening document for unlawful wording"
                - "Write a script for refusing a landlord's unlawful instruction"
                - "Set out how tenants can request reasonable adjustments"
            - name: Reading referencing reports and affordability
              description: |-
                ## Purpose
                A referencing report is only useful if you can read past the pass or fail. Learning to interpret credit files, income evidence, previous landlord references and signs of fabricated documents helps you approve good applicants faster and spot the ones that need a closer look.

                ## Milestones
                1. The sections of your referencing provider's report understood, with notes on each.
                2. Your affordability calculation written, including how irregular or self-employed income is treated.
                3. A checklist of common signs of fabricated payslips or references.
                4. Five past reports reviewed against the checklist to test it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An affordability method and a fraud warning checklist are written and tested against five past referencing reports."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Go through one referencing report section by section and note what each shows"
                - "Write how you assess irregular and self-employed income"
                - "List warning signs of altered payslips and false references"
                - "Test the checklist on five past applications"
            - name: Damp, mould and condensation diagnosis
              description: |-
                ## Purpose
                Damp and mould complaints are rising, and some jurisdictions now set strict response times because of the health risks. Learning to tell condensation from rising or penetrating damp, and what evidence to record, helps you send the right contractor first time and treat tenant reports seriously instead of blaming lifestyle by default.

                ## Milestones
                1. The signs of condensation, penetrating damp, rising damp and plumbing leaks noted with photos.
                2. A damp report form covering location, extent, moisture readings and likely cause.
                3. A response timetable for damp and mould reports, checked against any local rules.
                4. A list of surveyors or specialists for cases needing diagnosis.

                ## Notes
                Treat mould reports in homes with babies, older people or anyone with breathing conditions as urgent, and record each step.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A damp report form and a written response timetable are in use, and every damp report for three months follows them."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a recognised guide on the types of damp and their signs"
                - "Create a damp report form with location, extent and likely cause"
                - "Set a response timetable for damp and mould reports"
                - "Find two damp specialists or surveyors for difficult cases"
            - name: Inspection and inventory reporting craft
              description: |-
                ## Purpose
                An inventory that says the carpet is fair proves nothing at check-out. Learning to write precise condition notes, take dated photos in a consistent order and describe wear and tear separately from damage turns inspections and inventories into evidence that holds up in a deposit dispute.

                ## Milestones
                1. A standard room order and photo sequence for every inspection.
                2. A vocabulary list for condition, separating fair wear and tear from damage.
                3. Three past reports rewritten to the new standard as examples.
                4. Every new inventory signed or acknowledged by the tenant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three example reports at the new standard exist, and every inventory for the next quarter follows the standard photo order and vocabulary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set a fixed room order and photo sequence for inspections"
                - "Write a condition vocabulary that separates wear from damage"
                - "Rewrite three past reports to the new standard"
                - "Get tenants to acknowledge every new inventory in writing"
            - name: Arrears conversations with tenants
              description: |-
                ## Purpose
                Tenants in arrears are often embarrassed, frightened or dealing with job loss or illness, and a hard opening shuts them down. Practising calm, specific conversations that find out what happened, agree an affordable plan and point to debt advice services recovers more rent than letters alone.

                ## Milestones
                1. A call guide with opening, questions, plan options and close.
                2. A list of local free debt advice and benefit support services to share.
                3. Three practice calls role-played with a colleague.
                4. Every arrears call for a month logged with the agreed outcome.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A call guide and a list of advice services exist, and every arrears call for a month is logged with an agreed outcome."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a short call guide for arrears conversations"
                - "List free debt and benefit advice services near your properties"
                - "Role-play three arrears calls with a colleague"
                - "Log the outcome of every arrears call for a month"
            - name: Deposit dispute evidence and adjudication
              description: |-
                ## Purpose
                Adjudicators decide on evidence, not on who is right, and agents lose cases they should win because the check-in report is thin or the invoices are missing. Learning what an adjudicator expects, and preparing your claims in that shape, raises your success rate and makes landlords less likely to blame you for a lost claim.

                ## Milestones
                1. The evidence rules of the deposit or dispute scheme you use summarised.
                2. A claim pack template: tenancy, check-in, check-out, photos, quotes and invoices, correspondence.
                3. A rule for apportioning costs on items with a useful life, such as carpets and paint.
                4. The last two disputes reviewed to see what evidence was missing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A claim pack template and an apportionment rule are written, and the last two disputes have been reviewed for missing evidence."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the dispute guidance published by your deposit scheme"
                - "Build a claim pack template with the documents adjudicators expect"
                - "Write an apportionment rule for carpets, paint and appliances"
                - "Review your last two disputes for missing evidence"
            - name: Planned preventative maintenance calendar
              description: |-
                ## Purpose
                Reactive repairs cost more and annoy tenants more than planned ones. A preventative calendar for boiler servicing, gutter clearing, drain checks, tree work and smoke alarm tests, agreed with landlords at the start of the year, cuts emergency call-outs and spreads the cost across the year.

                ## Milestones
                1. A list of preventative tasks per property type with a frequency for each.
                2. Each landlord's agreement and budget for their preventative tasks recorded.
                3. The tasks spread across the year so contractors are not overloaded in one month.
                4. Completion recorded against each property.

                ## Notes
                Keep this to routine servicing. Roof replacements, plant renewals and other capital works belong in a separate lifecycle plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A preventative maintenance calendar covers every managed property, with landlord agreement recorded and tasks spread across 12 months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List routine servicing tasks for each property type with a frequency"
                - "Send landlords the plan with costs and get written agreement"
                - "Spread the tasks across the year by contractor"
                - "Book next month's preventative jobs @recurring(monthly:15)"
            - name: Annual contractor performance review
              description: |-
                ## Purpose
                Contractors who were excellent two years ago may now be slow, expensive or sending untrained staff. A yearly review of each panel contractor against response time, first-time fix rate, tenant feedback and price keeps the panel sharp and gives you facts when you need to drop someone.

                ## Milestones
                1. A score for every panel contractor on response time, first-time fix, tenant feedback and price.
                2. A conversation held with any contractor scoring below your threshold.
                3. At least one new contractor trialled in the weakest trade.
                4. The panel list updated and rates confirmed for the coming year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every panel contractor has a yearly score on four measures, and the panel list and rates are updated within a month of scoring."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's jobs by contractor with dates and costs"
                - "Score each contractor on four measures @recurring(yearly)"
                - "Meet any contractor below the threshold to agree changes"
                - "Trial one new contractor in the weakest trade"
            - name: Cutting average void days
              description: |-
                ## Purpose
                Once void days are measured, the delays usually cluster in two or three places: waiting for keys, slow cleaners or viewings that only start after the tenant leaves. A focused improvement on the worst step, measured over the next ten turnovers, often saves landlords a week of rent per let.

                ## Milestones
                1. The last ten turnovers broken down by step, showing where days were lost.
                2. One or two causes chosen to fix, with a change agreed.
                3. The change applied for the next ten turnovers.
                4. Average void days before and after compared and reported to landlords.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Average void days for ten turnovers after the change are compared with the ten before, and the result is reported to landlords."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Break down the last ten turnovers by step and days taken"
                - "Pick the one or two steps that lose the most days"
                - "Agree and apply a fix with the team and contractors"
                - "Compare void days for the next ten turnovers with the last ten"
            - name: Video check-in and inventory standard
              description: |-
                ## Purpose
                Photo inventories miss things and are slow to compile; walk-through video with a timestamp, combined with a written schedule, is harder to dispute. Deciding on a standard for equipment, file naming and storage, and trialling it on five check-ins, gives you better evidence for the same time on site.

                ## Milestones
                1. Equipment and app choice made for timestamped video and photos.
                2. A file naming and storage rule so any video can be found by unit and date.
                3. The standard trialled on five check-ins.
                4. A decision recorded on whether to roll it out to all check-ins.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five check-ins have been recorded on the new standard and a written decision on rollout is filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a device and app that timestamps video and photos"
                - "Set a file naming and storage rule by unit and date"
                - "Trial the standard on five check-ins"
                - "Record the decision on rolling it out"
            - name: Tenant satisfaction survey
              description: |-
                ## Purpose
                Tenants who feel ignored stay shorter, report problems later and complain more formally. A short yearly survey on repairs, communication, value and the home itself, with the themes acted on and reported back, lowers turnover and gives landlords proof the homes are well run.

                ## Milestones
                1. A survey of no more than ten questions sent to every tenant.
                2. A response rate of at least 25 percent.
                3. Themes grouped and the top three issues identified.
                4. A short note sent to tenants saying what will change.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly survey reached a 25 percent response rate and a note listing three changes was sent to tenants."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Write a survey of no more than ten questions"
                - "Send the tenant survey with a two-week closing date @recurring(yearly)"
                - "Group the answers into themes and pick the top three"
                - "Tell tenants what will change as a result"
            - name: Rent guarantee and landlord insurance checks
              description: |-
                ## Purpose
                When a tenancy goes badly wrong, landlords expect the agent to have known what their policy covered. Recording each landlord's buildings, contents and rent guarantee cover, including conditions such as referencing standards, lets you meet the insurer's conditions and advise the landlord to speak to their broker where cover is missing.

                ## Milestones
                1. Each landlord's insurer, policy type, renewal date and key conditions recorded.
                2. Policies with referencing or inspection conditions flagged in the property file.
                3. Landlords without rent guarantee or suitable buildings cover told in writing to speak to a broker.
                4. Claim procedures noted for the insurers you deal with most.

                ## Notes
                Do not recommend specific policies unless you are authorised to; your job is to record cover and refer the landlord to a broker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every landlord's insurance details and conditions are recorded, and each landlord without key cover has a dated written referral to a broker."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each landlord for their buildings and rent guarantee policy details"
                - "Flag policy conditions that affect how you reference or inspect"
                - "Write to landlords lacking key cover suggesting they speak to a broker"
                - "Note the claim process for your three most common insurers"
            - name: Annual landlord review meeting
              description: |-
                ## Purpose
                Once a year, a conversation with each landlord about rent, condition, compliance, upcoming works and their plans for the property catches problems such as a planned sale or a refinance before they surprise you. It is also the moment to agree next year's preventative maintenance and repair limit.

                ## Milestones
                1. A one-page annual review pack per landlord: rent history, arrears, repairs spend, compliance and inspection findings.
                2. A meeting or call held with each landlord.
                3. Decisions on rent, works, repair limit and plans recorded.
                4. Actions added to the relevant property files.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every landlord has had a recorded annual review in the last 12 months, with decisions on rent, works and repair limit filed."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Build a one-page review pack template for each landlord"
                - "Schedule annual review calls with every landlord @recurring(yearly)"
                - "Record decisions on rent, works and the repair limit"
                - "Add agreed actions to each property file"
            - name: Year-end landlord income and expense statements
              description: |-
                ## Purpose
                Landlords need a clean annual summary of rent, fees and expenses to complete their tax returns, and a scramble in the last fortnight before the filing deadline generates errors and anger. Producing statements from reconciled monthly data, with invoices available, makes the busiest week for their accountants a quiet one for you.

                ## Milestones
                1. The tax year end and any agent reporting duties where you operate confirmed with an accountant.
                2. Annual statements for every landlord generated from reconciled monthly data.
                3. Supporting invoices available on request.
                4. Overseas landlord tax withholding, if required, reconciled.

                ## Notes
                Provide figures only. Tax treatment of repairs and improvements is for the landlord's own accountant.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every landlord receives an annual income and expense statement reconciled to the monthly statements within 30 days of the tax year end."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the tax year end and any agent reporting duties with an accountant"
                - "Check every monthly statement for the year is reconciled"
                - "Generate annual statements for every landlord @recurring(yearly)"
                - "Reconcile any tax withheld for overseas landlords"
            - name: Winter readiness for managed homes
              description: |-
                ## Purpose
                Heating failures, frozen pipes and condensation peak in the cold months, and every one is an emergency in a home with children or older people. A pre-winter round of boiler services, lagging checks, stopcock location and tenant advice on heating and ventilation cuts winter emergencies sharply.

                ## Milestones
                1. Boiler or heating services completed for every unit before the cold season.
                2. Exposed pipes and loft tanks checked for insulation.
                3. Stopcock location recorded for every unit and shown to tenants.
                4. A winter advice note sent to tenants on heating, ventilation and what to do if pipes freeze.

                ## Notes
                In warm climates swap this for a rainy or storm season check of gutters, drains, roofs and shutters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Before the cold season every unit has a completed heating service, a recorded stopcock location and a winter advice note sent to the tenant."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Book heating services for every unit before the cold season @recurring(yearly)"
                - "Check lagging on exposed pipes and loft tanks during inspections"
                - "Record the stopcock location for every unit"
                - "Send tenants a winter heating and ventilation advice note"
            - name: New regulation rollout plan
              description: |-
                ## Purpose
                Lettings rules change often, from new safety standards to notice reforms and licensing schemes, and each change touches letters, processes and every tenancy at once. A rollout plan for each change, with what it affects, the effective date and who updates what, stops new duties from being discovered after the first breach.

                ## Milestones
                1. One reliable source of regulatory updates followed, such as a professional body bulletin.
                2. For the next change, a one-page impact note listing letters, processes and units affected.
                3. Owners and dates set for each update.
                4. Staff briefed and landlords told before the effective date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The next regulatory change has a one-page impact note, owners and dates, and all updates are done before its effective date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Subscribe to one professional body or regulator update bulletin"
                - "Read the bulletin and note any change affecting your homes @recurring(monthly:3)"
                - "Write a one-page impact note for the next change"
                - "Brief staff and write to landlords before the effective date"
            - name: Possession case file from notice to hearing
              description: |-
                ## Purpose
                Possession cases fail on detail: once a landlord decides to seek possession, a single error in the notice, the deposit record or the certificates served can send the case back to the start months later. Building a complete case file, checked by a solicitor before anything is served, keeps the process lawful and as short as it can be.

                ## Milestones
                1. The landlord's written instruction and grounds recorded.
                2. A pre-service check of tenancy, deposit, certificates and arrears records completed with a solicitor.
                3. Notice served on the correct form with proof of service filed.
                4. A case timeline kept up to date through to hearing or resolution.

                ## Notes
                Never change locks, remove belongings or cut services to pressure a tenant to leave. That is unlawful eviction in most places.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The next possession case has a solicitor-checked file, a proof of service and a dated timeline before any hearing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Get the landlord's instruction and grounds in writing"
                - "Gather tenancy, deposit, certificate and arrears records into one file"
                - "Ask a housing solicitor to check the file before serving"
                - "Keep a dated timeline of every step to hearing"
            - name: Managing for an overseas landlord
              description: |-
                ## Purpose
                Landlords living abroad cannot pop round, often sit in different time zones and may have tax withholding rules applied to their rent. A tailored service routine, with wider repair authority, agreed decision windows, scanned post and any tax registration confirmed, prevents a burst pipe waiting three days for an email reply.

                ## Milestones
                1. The landlord's time zone, preferred channel and decision window recorded.
                2. A higher emergency repair limit agreed in writing.
                3. Any non-resident landlord tax registration or withholding confirmed with an accountant.
                4. Post for the property redirected or scanned and forwarded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every overseas landlord has a recorded decision window, a written emergency limit and their tax withholding position confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every landlord living abroad and their time zone"
                - "Agree a higher emergency repair limit in writing"
                - "Confirm each one's tax withholding position with an accountant"
                - "Set up scanning or forwarding of property post"
            - name: Supporting vulnerable tenants
              description: |-
                ## Purpose
                Some tenants are older, disabled, unwell, experiencing domestic abuse or struggling with their mental health, and a standard process can fail them badly. Knowing how to spot vulnerability, adapt communication and make referrals to local support services protects them and reduces the crises that end in emergency calls or abandoned tenancies.

                ## Milestones
                1. A short guide for staff on signs of vulnerability and what to do.
                2. A list of local adult and child safeguarding contacts and support services.
                3. A way to record agreed adjustments, such as a preferred contact method, with tenant consent.
                4. A rule for when a concern is passed to safeguarding services.

                ## Notes
                If someone is in immediate danger, call the emergency services first. Record adjustments only with consent and keep the record confidential.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A staff guide and local safeguarding contact list exist, and every recorded adjustment has written tenant consent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page guide on signs of vulnerability for staff"
                - "List local safeguarding contacts and support services"
                - "Set up a consent-based record of tenant adjustments"
                - "Write the rule for escalating a safeguarding concern"
            - name: Tenant death or abandoned property procedure
              description: |-
                ## Purpose
                A tenant's death or a home that appears abandoned raises legal questions about possession, belongings and rent that are easy to get wrong in the moment. A written procedure, checked with a solicitor, covering welfare checks, next of kin, securing the property and handling belongings, means the situation is managed with care and within the law.

                ## Milestones
                1. A procedure for welfare checks when a tenant cannot be contacted.
                2. Steps for a tenant's death: contacting next of kin or executors, securing the home and handling rent.
                3. A process for suspected abandonment, including evidence and notices, checked by a solicitor.
                4. Rules for storing and disposing of belongings recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A solicitor-checked procedure covering welfare checks, tenant death, abandonment and belongings is on file and known to staff."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the steps for a welfare check when a tenant goes silent"
                - "Draft the procedure after a tenant's death"
                - "Ask a solicitor to check the abandonment and belongings steps"
                - "Brief staff on where the procedure is kept"
            - name: Taking over tenancies from another agent
              description: |-
                ## Purpose
                When a landlord switches to you mid-tenancy, the previous agent's records are often incomplete and the tenant is unsure who to pay. A transfer routine that collects the deposit, tenancy, inventory, certificates and arrears history and tells the tenant in writing, prevents rent going to the wrong place and deposits going missing.

                ## Milestones
                1. A transfer request list sent to the outgoing agent.
                2. The deposit transferred or its protection updated, with proof.
                3. The tenant told in writing of the new payment details and contacts.
                4. Arrears and open repairs confirmed with the outgoing agent and the landlord.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The next transferred tenancy has its deposit, tenancy, inventory and certificates on file within 30 days and the tenant has new payment details in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the outgoing agent a list of records and money to transfer"
                - "Confirm the deposit has moved or its protection is updated"
                - "Write to the tenant with new payment details and contacts"
                - "Agree the arrears and open repairs position with the landlord"
            - name: Shared house and multi-let management
              description: |-
                ## Purpose
                Shared houses with several unrelated tenants carry extra licensing, fire safety and communal area duties, and more people means more disputes and more wear. A dedicated routine for room lets, covering licence conditions, fire safety checks, communal cleaning and house rules, keeps these homes safe and lawful.

                ## Milestones
                1. Licensing requirements for each shared house confirmed with the local authority.
                2. Fire safety items such as alarms, fire doors and escape routes checked against the licence or fire risk assessment.
                3. A communal area cleaning and inspection schedule.
                4. House rules issued to every occupant and a route for neighbour complaints.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each shared house has licensing confirmed, a fire safety check against its licence and a running communal area inspection schedule."
                cadence: rolling
              tasks:
                - "Confirm the licensing position of each shared house"
                - "Check fire doors, alarms and escape routes against the licence"
                - "Inspect communal areas and fire safety in shared houses @recurring(monthly:10)"
                - "Issue house rules to every occupant"
            - name: Major leak, fire or flood incident response
              description: |-
                ## Purpose
                Serious leaks, fires and floods move fast: tenants may need emergency accommodation, the insurer needs notifying, and the building must be made safe and dry. A written incident plan with contacts, first-hour actions and a record sheet means the response is calm and the insurance claim has the evidence it needs.

                ## Milestones
                1. First-hour actions written: safety, emergency services, isolation of water, gas or power, and securing the property.
                2. Contacts listed for emergency contractors, insurers, loss adjusters and temporary accommodation.
                3. An incident record sheet capturing times, photos, decisions and costs.
                4. A post-incident review held after any real incident.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An incident plan with first-hour actions, contacts and a record sheet is on file and known to every staff member on call."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the first-hour actions for leaks, fires and floods"
                - "List emergency contractors, insurers and temporary accommodation contacts"
                - "Create an incident record sheet for times, photos and costs"
                - "Walk the on-call team through the plan"
            - name: Arrears trend and early warning analysis
              description: |-
                ## Purpose
                Arrears rarely arrive without warning: partial payments, payment date changes and slow replies to inspection requests usually come first. Analysing a year of payment history for these patterns, and setting early warning triggers, lets you call tenants before a missed month rather than after.

                ## Milestones
                1. Twelve months of payment history analysed by tenancy, showing late, partial and missed payments.
                2. Three or four early warning signs identified from the data.
                3. Triggers set in the ledger or a weekly report for those signs.
                4. Arrears rate in the six months after compared with the six months before.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Early warning triggers based on 12 months of payment data are running, and the arrears rate six months later is compared with the baseline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export 12 months of payment history by tenancy"
                - "Ask the agent to summarise late and partial payment patterns from the export"
                - "Choose three or four early warning signs from the data"
                - "Set a weekly report that flags tenancies showing those signs"
            - name: Small apartment block management routine
              description: |-
                ## Purpose
                Managing a whole block of flats adds communal areas, shared plant, fire safety for the building, bin stores and lift or door entry contracts to the work of individual tenancies. A block routine with a building log, communal inspections and fire risk assessment actions tracked keeps residents safe and the landlord's insurer satisfied.

                ## Milestones
                1. A building log with plant, contracts, keys, fire safety equipment and emergency contacts.
                2. A current fire risk assessment with every action given an owner and date.
                3. A communal area inspection schedule covering lighting, fire doors, bins and access.
                4. Service contracts such as lifts, door entry and cleaning listed with renewal dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each managed block has a building log, a fire risk assessment with dated actions and a running communal inspection schedule."
                cadence: rolling
              tasks:
                - "Create a building log for each block you manage"
                - "Check the fire risk assessment is current and list its actions"
                - "Walk communal areas, fire doors and bin stores in each block @recurring(monthly:17)"
                - "List service contracts with renewal dates"
            - name: Internal tenancy file audit
              description: |-
                ## Purpose
                Gaps in tenancy files only surface when a landlord complains or a case goes to court, by which time they are expensive. A sample audit of ten files every quarter, scored against a checklist of documents, notices and deposit proof, finds the weak spots in your processes and shows which staff need support.

                ## Milestones
                1. An audit checklist covering tenancy, deposit, certificates, notices, inventory and correspondence.
                2. Ten files sampled and scored each quarter.
                3. Each failure traced to the process step that caused it.
                4. Fixes agreed and the next audit used to check they worked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten tenancy files are scored against the checklist every quarter for a year, with each failure linked to a process fix."
                cadence: cyclic
              tasks:
                - "Write a file audit checklist from your compliance and deposit rules"
                - "Sample and score ten tenancy files @recurring(quarterly)"
                - "Trace each failure to the step that caused it"
                - "Agree one process fix per recurring failure"
            - name: Maintenance cost per unit benchmarking
              description: |-
                ## Purpose
                Owners increasingly ask whether their repair bills are normal. Calculating reactive and planned maintenance cost per unit per year by property type and age, and comparing across your portfolio, shows which homes, contractors or job types are driving cost and gives you a basis for advice at annual reviews.

                ## Milestones
                1. Twelve months of maintenance invoices categorised by unit, job type and contractor.
                2. Cost per unit per year calculated by property type and age band.
                3. The top ten most expensive units and the reasons identified.
                4. Findings added to each affected landlord's annual review pack.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cost per unit per year is calculated for the whole portfolio, and the top ten cost drivers are explained in landlord review packs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export 12 months of maintenance invoices"
                - "Categorise invoices by unit, job type and contractor"
                - "Calculate cost per unit by property type and age band"
                - "Write up the top ten cost drivers for landlord reviews"
            - name: Staff handbook for daily operations
              description: |-
                ## Purpose
                Small teams run on what one or two people remember, and holidays, illness or a resignation expose it. Writing the daily routines, from rent matching and arrears steps to job dispatch, inspections and statement runs, into a short handbook lets a new or covering colleague run the desk in their first week.

                ## Milestones
                1. Each recurring routine written as a short step list with links to letters and forms.
                2. A cover map showing who backs up whom on each routine.
                3. A new or covering colleague walked through the handbook and their questions captured.
                4. A yearly review date set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handbook covers every recurring routine with a named backup, and a colleague has used it to cover the desk for at least one day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every routine your team runs each week and month"
                - "Write each routine as a short step list"
                - "Name a backup person for each routine"
                - "Ask a colleague to cover one day using only the handbook"
            - name: Lettings season capacity plan
              description: |-
                ## Purpose
                In many markets, lettings peak in late summer or around the academic year, and that is when check-ins, check-outs, inventories and deposit returns all collide. Planning the peak in advance, with contractor bookings, inventory clerks, temporary help and a calendar of known move dates, keeps standards from slipping when volume doubles.

                ## Milestones
                1. Known move-in and move-out dates for the peak season listed.
                2. Cleaners, inventory clerks and handypeople booked for the peak weeks.
                3. Staff holidays agreed around the peak.
                4. A post-season note on what to change next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Peak move dates are listed and every check-in and check-out in the season has a booked cleaner and inventory slot."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List every tenancy ending or starting in the peak months"
                - "Book cleaners and inventory clerks for peak weeks"
                - "Agree staff holidays around the peak"
                - "Write a post-season note on what to change @recurring(yearly)"
---

# Residential Property Management Operations

Residential property management operations is the work that happens after a landlord signs: screening applicants, collecting rent and chasing arrears, triaging repair requests, inspecting homes, renewing certificates and telling owners what happened to their money. It is written for small management businesses and operators running anywhere from a dozen to a few hundred homes without a large back office. The projects start with the foundations of a property register, compliance tracker, letter library and screening criteria, then the operating rhythms of rent, arrears, maintenance and statements, the skills of tenancy law, referencing and damp diagnosis, the improvements worth making, dated moments such as year-end statements and winter readiness, situations such as overseas landlords and vulnerable tenants, and specialist work on block management and file audits.

The rhythms are twice-weekly rent matching, a weekly arrears and maintenance review, monthly landlord statements, compliance sweeps and a KPI capture, quarterly inspections and a yearly cycle of contractor reviews, landlord meetings and tax statements. Operational checklist suits property takeovers and void turns, Compliance control suits the certificate tracker, Vendor suits the contractor panel, Metrics log suits the KPI sheet, Feedback themes suits the tenant survey and Meeting notes suits the annual landlord review. Nothing here is legal advice: notices, possession steps and deposit rules differ by jurisdiction, so check letters and procedures with a housing solicitor or your professional body. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
