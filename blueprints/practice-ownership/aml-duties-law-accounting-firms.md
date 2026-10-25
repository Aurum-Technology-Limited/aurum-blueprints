---
id: practice-ownership.aml-duties-law-accounting-firms
name: AML Duties for Law and Accounting Firms
description: "A firm-wide risk assessment, a named reporting officer, client due diligence that happens before work starts, internal reporting, training and records a supervisor can inspect without surprises."
category: business
version: 1.0.0
tags: [practice-ownership, aml-duties-law-accounting-firms, small-business, anti-money-laundering, client-due-diligence, law-firm, accounting-firm, suspicious-activity-reporting]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - risk-register
    - purchase-decision
    - remediation-plan
    - training-program
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: AML Duties for Law and Accounting Firms
          description: "Meeting anti-money laundering duties as a law or accounting firm: client due diligence, registering with the financial intelligence unit where required, reporting and training."
          projects:
            - name: Map of services that bring the firm into AML scope
              description: |-
                ## Purpose
                Not every service a law or accounting firm offers is regulated for money laundering, but property transactions, company formation, trust work, handling client money, tax advice and bookkeeping usually are. Listing every service line against your country's definition of regulated activity tells you which teams, clients and matters the rest of this area applies to, and stops the common mistake of assuming litigation or payroll sits outside it.

                ## Milestones
                1. Every service line the firm offers listed, including occasional work done by one partner.
                2. Each service marked in scope, out of scope or unclear against the law's definitions.
                3. Unclear services checked with the supervisor's guidance or a compliance adviser and resolved.
                4. The scope map signed off by the managing partner and dated.

                ## Notes
                Where a service is borderline, treat it as in scope until you have written confirmation otherwise. Supervisors rarely accept "we thought it was excluded" as a defence.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated, signed list of every service line marked in or out of AML scope, with the reason for each borderline call recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every service the firm billed for in the last twelve months"
                - "Find your country's definition of regulated activities for lawyers and accountants"
                - "Mark each service in scope, out of scope or unclear"
                - "Get the managing partner to sign and date the scope map"
            - name: Registration with the AML supervisor or FIU
              description: |-
                ## Purpose
                Many countries require law and accounting firms to register with a named supervisor, a professional body or the financial intelligence unit before carrying out regulated work, and some make the beneficial owners and managers of the firm pass a fit and proper check. Confirming where the firm must register, and holding the confirmation, closes one of the simplest findings an inspector can make.

                ## Milestones
                1. The body the firm must register with identified from the law or the supervisor's website.
                2. Registration or renewal submitted, including any owner and manager approvals required.
                3. The confirmation, registration number and renewal date filed in the compliance folder.
                4. A named partner responsible for updating the registration when owners or services change.

                ## Notes
                In some Caribbean countries lawyers and accountants register with the FIU as listed businesses; in the UK the supervisor is usually the professional body. Check your own rule rather than copying another country's.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written confirmation of the firm's current AML registration is on file, with the number, renewal date and responsible partner recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up which body supervises lawyers or accountants for AML in your country"
                - "Check whether the firm is already registered and when it renews"
                - "Submit the registration or update with owner and manager details"
                - "File the confirmation and add the renewal date to the firm calendar"
            - name: Appointing the money laundering reporting officer
              description: |-
                ## Purpose
                Every report of suspicion in the firm should go to one person with the seniority to decide whether to make an external report, and the time to do it properly. Appointing a reporting officer and a deputy in writing, with a clear terms of reference, gives staff a name to go to and gives the supervisor a person to hold accountable.

                ## Milestones
                1. A partner or senior manager chosen as reporting officer, with a deputy for absences.
                2. A written terms of reference covering authority, access to files and reporting to partners.
                3. Protected time agreed for the role, recorded in the officer's annual plan.
                4. The appointment announced to all staff and notified to the supervisor where required.

                ## Notes
                The officer must be able to say no to a partner's client without fear for their position. If that is unrealistic in a small firm, note it in the risk assessment and agree an external adviser they can consult.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed appointment letter for the reporting officer and deputy exists, staff have been told, and the supervisor has been notified where the law requires it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide with the partners who will be reporting officer and deputy"
                - "Draft a one-page terms of reference for the role"
                - "Agree the hours a month the officer will spend on the role"
                - "Email all staff the officer's name and how to reach them"
            - name: Firm-wide money laundering risk assessment
              description: |-
                ## Purpose
                Supervisors expect a written assessment of how criminals could use your particular firm, built from your clients, services, countries, delivery channels and transactions, and they mark down generic documents copied from a template. A risk assessment that names your real exposures decides how hard every later check has to be.

                ## Milestones
                1. Data gathered on client types, service lines, client countries and how clients are onboarded.
                2. Each risk factor scored with a short reason drawn from the firm's own work.
                3. The national risk assessment and supervisor's sector risk report reflected in the scores.
                4. Controls listed against each high risk, with gaps marked for action.
                5. The assessment approved by the partners and dated, with a yearly review date set.

                ## Notes
                Start from the **Risk register** template. Keep the assessment short enough that partners read it: ten honest pages beat forty pages of borrowed wording.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated firm-wide risk assessment approved by the partners, scoring clients, services, geography and channels with reasons specific to the firm."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Download the latest national risk assessment and the supervisor's sector risk report"
                - "Pull a client list by service line and country from the practice system"
                - "Score each risk factor and write a reason for each score"
                - "Present the draft assessment to the partners for approval"
                - "Review and re-approve the firm-wide risk assessment @recurring(yearly)"
            - name: AML policies, controls and procedures manual
              description: |-
                ## Purpose
                Once the risk assessment exists, staff need one document that tells them exactly what to do: which checks apply to which clients, who approves high-risk work, how to report suspicion and how long to keep records. A manual written for your firm's systems and job titles turns the law into a set of steps a trainee can follow on a Friday afternoon.

                ## Milestones
                1. A manual covering due diligence, risk rating, approvals, reporting, training and records.
                2. Each procedure tied to a named role and a system or form the firm actually uses.
                3. The manual approved by the partners and published where staff can find it.
                4. Every member of staff has confirmed they have read it.

                ## Notes
                Start from the **Compliance control** template for each key control, so every control has an owner, a test and evidence.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved AML manual is published to all staff, with read confirmations from every person who works on in-scope matters."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect any existing AML policy, forms and checklists in one folder"
                - "Draft the manual section by section against the risk assessment"
                - "Ask the agent to turn the manual into a one-page staff quick guide"
                - "Collect read confirmations from every fee earner and support role"
                - "Review the AML manual against changes in law and guidance @recurring(yearly)"
            - name: Client due diligence procedure and checklist
              description: |-
                ## Purpose
                Due diligence is where most inspection findings land: identity documents missing, addresses unverified, purpose of the matter never recorded. A single checklist for individuals, companies, trusts and charities, with standard, simplified and enhanced levels, gives every fee earner the same bar and gives the file reviewer something to check against.

                ## Milestones
                1. Separate checklists for individuals, companies, partnerships, trusts and charities.
                2. Standard, simplified and enhanced levels defined, with the evidence each requires.
                3. Acceptable documents and verification sources listed for each check.
                4. A file note format for the purpose and intended nature of each matter.

                ## Notes
                Recording why the client wants the work and where the money comes from matters as much as the passport copy. Inspectors look for the reasoning, not just the documents.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Due diligence checklists for each client type and risk level are approved and in use on every new in-scope matter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the due diligence forms each team currently uses"
                - "Draft one checklist per client type with three risk levels"
                - "List acceptable identity and address documents for each check"
                - "Test the checklists on three recent new matters and adjust"
            - name: Beneficial ownership checks for companies and trusts
              description: |-
                ## Purpose
                Laundered money usually arrives through a company, a trust or a nominee rather than in the name of the person who controls it. A method for tracing ownership through layers to the real individuals, and for recording when a structure makes no commercial sense, is the check that matters most for corporate and private client work.

                ## Milestones
                1. A written threshold and method for identifying beneficial owners and controllers.
                2. A standard ownership chart format used on every corporate or trust client file.
                3. Public registers and company documents listed as verification sources by country.
                4. A rule for when a structure is escalated to the reporting officer before work starts.

                ## Notes
                If a register entry and the client's own account disagree, record the discrepancy and resolve it. Some countries also require you to report the mismatch to the registry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new corporate and trust client file holds an ownership chart naming the individuals behind it, verified against at least one independent source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three current corporate or trust clients with the most complex ownership"
                - "Draw an ownership chart for each down to the individuals"
                - "Write the method and threshold you used as a procedure"
                - "Add the chart format to the due diligence checklist"
            - name: Client and matter risk rating matrix
              description: |-
                ## Purpose
                A risk rating decides whether a client gets standard checks, enhanced checks and partner sign-off, or a polite refusal, so it has to be consistent across fee earners. A simple scored matrix of client, service, country, channel and transaction factors makes the rating repeatable and shows an inspector how you got to it.

                ## Milestones
                1. Risk factors and scores drawn from the firm-wide risk assessment.
                2. Thresholds set for low, medium and high, with automatic high triggers listed.
                3. The matrix built into the matter opening form or practice system.
                4. Ratings on twenty recent matters compared across fee earners for consistency.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk rating matrix is part of matter opening, and a test on twenty matters shows fee earners reaching the same rating for similar facts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the factors your risk assessment scored as high"
                - "Turn them into a scored matrix with three bands"
                - "Ask two fee earners to rate the same ten matters independently"
                - "Adjust the scoring where their ratings disagreed"
            - name: Sanctions screening set-up
              description: |-
                ## Purpose
                Acting for a sanctioned person, or moving money for one, is usually a strict liability offence with no need to prove suspicion. Choosing which lists the firm screens against, at what points in a matter, and how a possible match is resolved, protects the firm from the one breach that cannot be explained away.

                ## Milestones
                1. The sanctions lists relevant to the firm chosen, including UN and national lists.
                2. Screening points defined: onboarding, before payments out and when lists change.
                3. A procedure for resolving possible matches, with evidence kept on file.
                4. A route for freezing and reporting a true match to the relevant authority.

                ## Notes
                Screen the beneficial owners and the other side of a transaction where you are paying money to them, not only your own client.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written screening procedure is in use, naming the lists, the screening points and how a match is resolved and reported."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the official sanctions lists that apply in your country"
                - "Decide at which points in a matter screening must happen"
                - "Write how a possible match is checked and who decides"
                - "Screen the current client list once and record the result"
            - name: Politically exposed persons identification
              description: |-
                ## Purpose
                Politically exposed persons, their family and close associates need enhanced checks, senior approval and source of wealth evidence, and in small countries a surprising share of property and corporate clients qualify. A clear way to ask, screen and decide stops PEPs slipping through as ordinary clients because nobody asked the question.

                ## Milestones
                1. A definition of PEP, family member and close associate written in plain words.
                2. A PEP question added to the client intake form.
                3. Screening for PEP status built into onboarding alongside sanctions checks.
                4. A senior approval step and enhanced checklist for confirmed PEPs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new client is asked about and screened for PEP status, and confirmed PEPs carry partner approval and source of wealth evidence on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a plain definition of PEP for the intake form"
                - "Add a PEP question to the client onboarding questions"
                - "List the existing clients who may be PEPs or close associates"
                - "Draft the partner approval note for a PEP client"
            - name: No work before due diligence gate
              description: |-
                ## Purpose
                Fee earners under pressure start work, take money on account and promise to collect the passport later, and later never comes. A hard gate in the practice system, with a short list of permitted exceptions and a weekly check of matters opened without complete checks, is the control that most often separates a clean inspection from a bad one.

                ## Milestones
                1. The practice system blocks time recording or client account receipts until checks are marked complete.
                2. Permitted exceptions and the deadline for completing checks written into the manual.
                3. A weekly exception report reviewed by the reporting officer.
                4. Repeat offenders discussed with their supervising partner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly exception report shows no in-scope matter with work recorded or money received before due diligence was complete, outside the written exceptions."
                cadence: rolling
              tasks:
                - "Check whether the practice system can block matters without completed checks"
                - "Write the permitted exceptions into the AML manual"
                - "Review the list of matters opened without completed checks @recurring(weekly:mon)"
                - "Raise any matter more than ten days overdue with its partner"
            - name: Ongoing monitoring and due diligence refresh
              description: |-
                ## Purpose
                Due diligence goes stale: directors change, a client moves abroad, a modest family company starts sending large unexplained payments. A refresh cycle tied to risk rating, with high-risk clients rechecked every year and others on a longer interval or when something changes, keeps the file true to the client you actually have.

                ## Milestones
                1. Refresh intervals set for each risk level in the manual.
                2. A refresh due date stored against every in-scope client.
                3. A monthly list of refreshes due sent to the responsible fee earners.
                4. Trigger events that force an early refresh listed and taught.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fewer than five percent of in-scope clients are past their refresh date at any month end."
                cadence: rolling
              tasks:
                - "Set refresh intervals for low, medium and high risk clients"
                - "Add a refresh due date field to every in-scope client record"
                - "Send fee earners their list of due diligence refreshes due @recurring(monthly:12)"
                - "Record which trigger events require an early refresh"
            - name: Internal suspicion reporting channel
              description: |-
                ## Purpose
                Staff who notice something odd need a quick, confidential way to tell the reporting officer, and the assurance that raising it protects them rather than causing trouble. A short internal report form, a confidential inbox and an acknowledgement within one working day make it easy to report and give each report a clear starting record.

                ## Milestones
                1. A one-page internal report form covering who, what, when and why it seems wrong.
                2. A confidential channel only the officer and deputy can read.
                3. A target of acknowledging every internal report within one working day.
                4. Staff told that an internal report discharges their personal reporting duty where the law says so.

                ## Notes
                Never keep internal reports on the client's matter file. The client can request the file, and a report found there is a tipping-off risk.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every internal suspicion report in the year was acknowledged within one working day and stored outside the client file."
                cadence: rolling
              tasks:
                - "Draft a one-page internal suspicion report form"
                - "Set up a confidential inbox only the officer and deputy can open"
                - "Show staff where the form lives at the next team meeting"
                - "Remind all staff how to raise an internal report @recurring(quarterly)"
            - name: Reporting officer's decision log
              description: |-
                ## Purpose
                When the reporting officer decides whether to report externally, the reasoning has to be written down at the time, because years later a court or supervisor may ask why a report was or was not made. A confidential log of every internal report, the enquiries made, the decision and the date protects both the officer and the firm.

                ## Milestones
                1. A secure log recording each internal report, enquiries made and the decision.
                2. Every decision not to report supported by a written reason.
                3. External reports cross-referenced with their reference numbers.
                4. Open cases reviewed monthly until closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every internal report in the log has a dated decision and reason, and no case stays open longer than the time limit set in the manual."
                cadence: rolling
              tasks:
                - "Create a restricted-access decision log with fixed columns"
                - "Enter any internal reports already received this year"
                - "Review every open case in the decision log @recurring(monthly:20)"
                - "Write the reason against every decision not to report"
            - name: Monthly AML file review sample
              description: |-
                ## Purpose
                Policies only work if files match them, and the only way to know is to look. Sampling a handful of in-scope files each month, scoring them against the due diligence checklist and feeding the results back to fee earners, catches drift long before the supervisor's inspector picks the same files.

                ## Milestones
                1. A sampling rule weighted towards high-risk matters and new fee earners.
                2. A scoring sheet based on the due diligence checklist.
                3. Results fed back to each fee earner within two weeks of the review.
                4. A running pass rate tracked month by month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least five in-scope files are reviewed every month, with a pass rate tracked and failures corrected within thirty days."
                cadence: rolling
              tasks:
                - "Build a scoring sheet from the due diligence checklist"
                - "Pick and score five in-scope files @recurring(monthly:8)"
                - "Send each fee earner the result for their file with fixes needed"
                - "Note the monthly pass rate for the partners' report"
            - name: Sanctions list updates and rescreening
              description: |-
                ## Purpose
                Sanctions lists change without warning, sometimes several times a week when a conflict escalates, and a client screened clean at onboarding can be designated later. Watching for updates and rescreening the client base against them is what makes the original screening worth anything.

                ## Milestones
                1. Alerts set up from the official list publishers or the screening provider.
                2. A weekly check that any list changes have been screened against all clients.
                3. Every possible match resolved and evidenced within two working days.
                4. Rescreening results kept for the retention period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every published sanctions list change in the year was screened against the client base, with each possible match resolved and evidenced."
                cadence: rolling
              tasks:
                - "Subscribe to update alerts from the official sanctions list publishers"
                - "Check list changes have been screened against all clients @recurring(weekly:thu)"
                - "Resolve and evidence each possible match"
                - "Save the rescreening record to the compliance folder"
            - name: AML record keeping and retention schedule
              description: |-
                ## Purpose
                AML law usually requires due diligence records and transaction records to be kept for a set period after the relationship ends, often five years or more, and then deleted unless there is a reason to keep them. A schedule that says what to keep, where and until when, satisfies both the AML rule and data protection law.

                ## Milestones
                1. The retention period for AML records confirmed from the law in your country.
                2. Storage locations listed for due diligence, screening, training and reporting records.
                3. A rule for the end-of-relationship date that starts the retention clock.
                4. A yearly deletion review with records of what was deleted.

                ## Notes
                Reporting officer records and copies of external reports usually need separate, restricted storage with their own retention rule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written retention schedule for AML records is in force and a deletion review has been completed and recorded within the last year."
                cadence: rolling
              tasks:
                - "Confirm the AML record retention period for your country"
                - "List where each type of AML record is stored today"
                - "Define when a client relationship counts as ended"
                - "Run the yearly AML records deletion review @recurring(yearly)"
            - name: Source of funds and source of wealth checks
              description: |-
                ## Purpose
                Knowing who the client is says nothing about where the deposit for a house purchase, the share capital or the settlement money came from. Clear rules on when to ask for source of funds and source of wealth, what evidence is good enough, and how to record your view, are what turn due diligence from identity checking into real risk control.

                ## Milestones
                1. The difference between source of funds and source of wealth written in staff guidance.
                2. Triggers listed for when each is required, by matter type and risk rating.
                3. Examples of acceptable evidence such as bank statements, sale contracts and payslips.
                4. A file note format recording the evidence seen and whether it made sense.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high-risk matter and every property or corporate transaction above the firm's threshold carries a source of funds note supported by evidence."
                cadence: rolling
              tasks:
                - "Write a short explanation of source of funds versus source of wealth"
                - "Set the matter types and amounts that trigger each check"
                - "List acceptable evidence with two worked examples"
                - "Add a source of funds note to the matter opening form"
            - name: Annual reporting officer's report to partners
              description: |-
                ## Purpose
                Partners carry the liability but rarely see the detail, so supervisors expect a yearly report from the reporting officer on how the controls performed. A report covering internal and external reports, file review results, training completion, refresh backlogs and recommended changes gives the partners a decision to make rather than a document to file.

                ## Milestones
                1. Data collected for the year: reports made, file review pass rates, training and refreshes.
                2. Findings and recommended changes written in a report of a few pages.
                3. The report presented at a partners' meeting and actions agreed.
                4. Agreed actions recorded with owners and deadlines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly reporting officer's report has been presented to the partners, with agreed actions minuted and owners named."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the partners the month the yearly report is due"
                - "Collect the year's file review, training and reporting figures"
                - "Present the reporting officer's annual report to the partners @recurring(yearly)"
                - "Record the agreed actions with owners and deadlines"
            - name: Reliance and outsourced due diligence register
              description: |-
                ## Purpose
                Firms often rely on another regulated firm's checks, or outsource identity verification to a provider, but the responsibility stays with you if those checks were poor. A register of every reliance arrangement, with written consent from the other firm and a test that documents can be produced on request, keeps reliance legal and useful.

                ## Milestones
                1. Every reliance and outsourcing arrangement listed with the other party and the scope.
                2. Written agreement held for each, including a promise to provide documents promptly.
                3. A sample request made to each party to prove documents can be produced.
                4. Arrangements that fail the test ended or replaced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reliance arrangement is on the register with a written agreement, and each passed a document production test in the last year."
                cadence: rolling
              tasks:
                - "Ask fee earners which other firms' checks they rely on"
                - "List each arrangement and whether a written agreement exists"
                - "Request sample documents from each relied-on firm @recurring(yearly)"
                - "End any arrangement that cannot produce documents on request"
            - name: Knowing your country's AML law and supervisor guidance
              description: |-
                ## Purpose
                AML rules for lawyers and accountants differ sharply between countries in what is regulated, who supervises, reporting thresholds and offences, and guidance written for another country can mislead. Reading your own law, regulations and the supervisor's sector guidance once, with notes, gives the owner and the reporting officer a shared and accurate starting point.

                ## Milestones
                1. The primary AML law, regulations and sector guidance for your profession located.
                2. A summary of the firm's duties and the main offences written in plain words.
                3. Points of uncertainty listed and checked with the supervisor or a specialist adviser.
                4. The summary shared with the partners and reporting officer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain summary of the firm's legal AML duties and offences exists, with open questions answered by the supervisor or an adviser."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the AML law, regulations and your profession's sector guidance"
                - "Read the guidance chapter on due diligence and take notes"
                - "Write a two-page summary of duties and offences"
                - "Send open questions to the supervisor's helpline or an adviser"
            - name: Red flags for fee earners
              description: |-
                ## Purpose
                Most suspicion is spotted by the person doing the work, not by the compliance team, so fee earners need a feel for what wrong looks like in their own matters. Working through red flags by practice area, with real anonymised examples, gives them the confidence to stop and ask before a deal completes.

                ## Milestones
                1. A red flags list for each in-scope practice area, drawn from supervisor guidance.
                2. Three anonymised examples from the firm or published cases discussed by each team.
                3. Each team able to name the step they take when a red flag appears.
                4. A quarterly short case discussion in team meetings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each in-scope team has a red flags list for its own work and has discussed at least one case example in the last quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect red flags lists from the supervisor's guidance"
                - "Split the flags into lists for each practice area"
                - "Pick three anonymised examples for the first team discussion"
                - "Run a ten-minute red flags case in a team meeting @recurring(quarterly)"
            - name: Tipping off and prejudicing an investigation
              description: |-
                ## Purpose
                Once a report has been made, telling the client, or acting in a way that alerts them, can itself be an offence, yet the matter may have to carry on. Understanding what can and cannot be said, and practising how to handle a client chasing a delayed transaction, protects fee earners at the most stressful moment of a suspicion case.

                ## Milestones
                1. The tipping-off and prejudicing offences in your law summarised in plain words.
                2. Holding responses prepared for clients asking why a matter has paused.
                3. The rule on discussing reports internally and with other professionals written down.
                4. Fee earners in high-risk teams briefed and quizzed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fee earners in high-risk teams have been briefed on tipping off, and approved holding responses are stored with the reporting officer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the tipping-off sections of your AML law and guidance"
                - "Draft three neutral holding responses for a delayed matter"
                - "Agree the holding responses with the reporting officer"
                - "Brief the property and corporate teams with a short quiz"
            - name: Laundering patterns in property transactions
              description: |-
                ## Purpose
                Property is one of the most common routes for laundering, through cash deposits, rapid resales, undervalued or overvalued prices, third-party funding and buyers hidden behind companies. Conveyancing and real estate teams who know these patterns can spot them in a file before the money moves through the client account.

                ## Milestones
                1. Published property typologies from the FIU, supervisor or international bodies read.
                2. A list of the five patterns most relevant to the local property market.
                3. Two recent firm property files reviewed against the list.
                4. Specific property checks added to the due diligence checklist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The property team has a written list of local laundering patterns and the due diligence checklist includes property-specific checks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find your FIU's latest typologies report on property"
                - "Pick the five patterns most likely in your local market"
                - "Review two recent property files against those patterns"
                - "Add property-specific checks to the due diligence checklist"
            - name: Laundering patterns in accounting and tax work
              description: |-
                ## Purpose
                Accountants see money laundering from the inside of a business: invoices that do not match activity, payroll for staff who do not exist, cash takings far above the trade, company formations for clients with no visible business, and tax evasion that creates criminal proceeds. Knowing these patterns helps bookkeeping, payroll and tax teams recognise what they are processing.

                ## Milestones
                1. Typologies for bookkeeping, payroll, company formation and tax work collected.
                2. Patterns linked to the firm's own service lines.
                3. A briefing for each accounting team with anonymised examples.
                4. Trigger questions added to the yearly accounts and tax return checklists.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each accounting team has been briefed on patterns in its own service line, and accounts and tax checklists carry AML trigger questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect typologies for accountants from your professional body"
                - "Match each pattern to a service line the firm offers"
                - "Brief the bookkeeping and payroll team with two examples"
                - "Add AML trigger questions to the yearly accounts checklist"
            - name: Spotting shell companies and false trade
              description: |-
                ## Purpose
                Shell companies, round-tripping and invoices for goods that never moved are how larger sums are disguised, and corporate lawyers and auditors are often asked to paper them. Learning the signs, such as companies with no staff, circular payments and prices out of line with the market, helps senior fee earners decline work that would make them part of the scheme.

                ## Milestones
                1. Signs of shell companies and trade-based laundering summarised from published guidance.
                2. A list of questions to ask when a corporate structure lacks an obvious purpose.
                3. Two published enforcement cases involving lawyers or accountants studied.
                4. The findings presented to the corporate and audit partners.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Corporate and audit partners have discussed a written list of shell company and false trade warning signs drawn from published cases."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an international guidance paper on trade-based laundering"
                - "Write a list of questions for structures without a clear purpose"
                - "Summarise two enforcement cases involving professionals"
                - "Present the findings at a corporate and audit partners' meeting"
            - name: Writing a useful suspicious activity report
              description: |-
                ## Purpose
                A report the financial intelligence unit cannot use helps nobody, and many reports from professionals are vague about who, what and why. Practising how to write a clear, factual report, with identifiers, amounts, dates and the reason for suspicion in plain sentences, makes the reporting officer's work count.

                ## Milestones
                1. The FIU's guidance on report quality and its online form read.
                2. A structure for the narrative agreed: who, what, where, when, why.
                3. Two practice reports written from anonymised scenarios and reviewed.
                4. Registration for the FIU's online reporting system in place for officer and deputy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The reporting officer and deputy are registered on the FIU's reporting system and have each written a practice report using the agreed structure."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the FIU's guidance on writing a good report"
                - "Register the officer and deputy on the online reporting system"
                - "Write a practice report from an anonymised scenario"
                - "Compare the practice report with the FIU's quality checklist"
            - name: Terrorist and proliferation financing basics
              description: |-
                ## Purpose
                Terrorist financing often involves small, clean-looking sums, and proliferation financing hides behind trade and shipping clients, so the usual large-cash red flags miss both. A short study of how each works, and which of the firm's clients or services could be exposed, fills a gap most small firm risk assessments leave blank.

                ## Milestones
                1. The legal duties for terrorist and proliferation financing in your country summarised.
                2. Warning signs for each, drawn from FIU or international guidance, listed.
                3. Client sectors and countries in the firm's book that raise exposure identified.
                4. A paragraph on each added to the firm-wide risk assessment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The firm-wide risk assessment includes a reasoned section on terrorist and proliferation financing exposure."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your FIU's guidance on terrorist financing indicators"
                - "Read guidance on proliferation financing and dual-use goods"
                - "List clients in shipping, trade, charities or high-risk countries"
                - "Add a section on both to the firm-wide risk assessment"
            - name: Annual AML training programme with assessment
              description: |-
                ## Purpose
                Supervisors expect training that is regular, relevant to each role and recorded, not a video watched once at induction. A yearly programme with a short course for everyone, deeper sessions for high-risk teams and the reporting officer, and an assessed quiz with a pass mark gives you evidence that people know the procedures.

                ## Milestones
                1. A training plan by role: all staff, fee earners in high-risk teams, the reporting officer and partners.
                2. Induction training for new joiners completed within their first month.
                3. Yearly training delivered with an assessment and a pass mark.
                4. A training record showing who completed what and when.

                ## Notes
                Start from the **Training program** template. Include support staff who handle payments or identity documents, not only lawyers and accountants.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every in-scope member of staff completed and passed AML training in the last twelve months, and the training record proves it."
                cadence: cyclic
              tasks:
                - "List every role that needs AML training and at what depth"
                - "Choose or write the yearly course and a ten-question quiz"
                - "Run the yearly AML training and quiz for all in-scope staff @recurring(yearly)"
                - "Add AML training to the new joiner induction checklist"
            - name: Choosing ID verification and screening software
              description: |-
                ## Purpose
                Checking passports by hand and searching sanctions lists one name at a time is slow, inconsistent and hard to evidence. Comparing electronic identity verification and screening providers on accuracy, coverage of your clients' countries, ongoing monitoring, audit trail and cost lets you choose a tool that fits the firm's volume rather than the vendor's demo.

                ## Milestones
                1. Requirements written: countries covered, document checks, sanctions and PEP lists, monitoring and integration.
                2. Three providers compared on the same scorecard with prices.
                3. A trial run on twenty real onboarding cases.
                4. A provider chosen, contract signed and the procedure manual updated.

                ## Notes
                Start from the **Purchase decision** template. Check that the provider's data is held in a jurisdiction your data protection rules allow.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider has been chosen on a written scorecard of at least three options, tested on twenty cases and written into the procedures."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements for verification and screening software"
                - "Shortlist three providers that cover your clients' countries"
                - "Trial the leading option on twenty onboarding cases"
                - "Record the decision and update the due diligence procedure"
            - name: Remote onboarding of clients you never meet
              description: |-
                ## Purpose
                More clients now instruct by email and video, and many live in another country, which removes the comfort of seeing a person beside their passport. A procedure for non face-to-face onboarding, using certified copies, electronic verification, live video checks or a first payment from the client's own bank, keeps remote work possible without lowering the bar.

                ## Milestones
                1. Remote onboarding treated as a risk factor in the matrix, with the extra checks listed.
                2. Accepted methods defined: electronic verification, certified copies, video checks.
                3. Rules for who may certify documents in other countries written down.
                4. Three remote onboardings reviewed against the new procedure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written remote onboarding procedure is in use, and three recent remote clients have been checked against it with no gaps."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count how many new clients last year were never met in person"
                - "List the accepted remote verification methods and their limits"
                - "Write who may certify identity documents abroad"
                - "Review three recent remote onboardings against the procedure"
            - name: Declining and exiting high-risk clients
              description: |-
                ## Purpose
                Sometimes the right answer is not to act, or to stop acting, but ending a relationship carelessly can tip off a client who is already the subject of a report. A procedure for declining instructions and exiting existing clients, agreed with the reporting officer, protects the firm and keeps the decision consistent across partners.

                ## Milestones
                1. Circumstances listed where the firm must decline or cease acting.
                2. A standard neutral wording for declining or ending a relationship.
                3. A rule that the reporting officer is consulted before exiting any client under suspicion.
                4. A register of declined and exited clients for future screening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written decline and exit procedure is in the AML manual, with a register showing each declined or exited client and the officer's sign-off."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List when the firm must decline or stop acting for AML reasons"
                - "Draft neutral wording for declining and ending a relationship"
                - "Agree the consultation step with the reporting officer"
                - "Set up a register of declined and exited clients"
            - name: Cash and third-party payment acceptance policy
              description: |-
                ## Purpose
                Large cash deposits and payments from people who are not the client are classic signs of laundering, and a firm that accepts them freely becomes an easy place to clean money. A clear policy, with a cash limit, a ban or approval rule for third-party payers and a rule against returning funds to a different account, gives cashiers the backing to say no.

                ## Milestones
                1. A cash acceptance limit set and approved by the partners.
                2. Rules for third-party payments: when they are allowed and who approves.
                3. A rule that funds are returned only to the account they came from.
                4. The policy printed in client care letters and terms of business.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A partner-approved payment acceptance policy is in the terms of business, and the accounts team has refused or escalated every payment outside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how much cash the firm accepted in the last twelve months"
                - "Propose a cash limit and third-party payment rule to the partners"
                - "Add the policy wording to the terms of business"
                - "Brief the accounts team on refusing and escalating payments"
            - name: Gap analysis against current supervisor guidance
              description: |-
                ## Purpose
                Supervisors publish updated guidance, thematic reviews and lists of common failings every year, and each one is a free preview of what inspectors will look for. Comparing the firm's controls with the latest guidance and the supervisor's last thematic findings, then fixing the gaps on a plan, is far cheaper than fixing them after an inspection.

                ## Milestones
                1. The latest sector guidance and thematic review reports collected.
                2. Each requirement and common failing checked against the firm's controls.
                3. Gaps scored by risk and put on a dated remediation plan.
                4. The plan approved by the partners and progress reported monthly.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A gap analysis against the latest supervisor guidance is complete, with every gap on an approved remediation plan with owners and dates."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download the supervisor's latest guidance and thematic review reports"
                - "Check each listed failing against the firm's own controls"
                - "Put every gap on a remediation plan with an owner and date"
                - "Report remediation progress at the partners' meeting"
            - name: Independent review of the AML controls
              description: |-
                ## Purpose
                Many AML regimes require an independent audit of the firm's controls where it is proportionate, and even where it is not required, a fresh pair of eyes finds what the people who built the system cannot see. Commissioning a review by an external specialist or a partner from another team, with a written scope and report, gives the partners an honest grade.

                ## Milestones
                1. The legal requirement for an independent audit in your country confirmed.
                2. A reviewer chosen who did not design the controls, with a written scope.
                3. A review report with graded findings received.
                4. A response to each finding agreed and added to the remediation plan.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An independent review report of the AML controls has been received, and every finding has an agreed response with an owner and date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check whether your AML law requires an independent audit"
                - "Get quotes or nominate an internal reviewer outside the compliance role"
                - "Agree a written scope covering policy, files, training and reporting"
                - "Respond in writing to each finding in the review report"
            - name: Screening staff in AML-relevant roles
              description: |-
                ## Purpose
                A dishonest employee in the accounts team or a fee earner taking bribes can defeat every client check, which is why many AML laws require firms to screen staff in relevant roles. A proportionate check of identity, qualifications, references and conduct history at hiring and on a cycle closes the inside door.

                ## Milestones
                1. Relevant roles identified: fee earners on in-scope work, cashiers and compliance staff.
                2. Checks defined for each role, proportionate to its access and authority.
                3. Hiring checklist updated so checks happen before start date.
                4. Existing staff in relevant roles rechecked on a set cycle.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every member of staff in a relevant role has a screening record dated within the cycle set in the manual."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the roles that count as AML-relevant in the firm"
                - "Set the screening checks required for each role"
                - "Add the checks to the hiring checklist before the start date"
                - "Recheck staff in relevant roles against the screening list @recurring(yearly)"
            - name: Preparing for an AML supervisor inspection
              description: |-
                ## Purpose
                AML inspections often arrive with a few weeks' notice and a long information request: the risk assessment, policies, training records, a client list and files chosen by the inspector. Building an inspection pack in advance, and rehearsing the reporting officer's interview, turns a stressful visit into a demonstration of controls you already run.

                ## Milestones
                1. An inspection pack with the risk assessment, manual, training records and recent reviews.
                2. A client list by risk rating ready to export within a day.
                3. Ten files self-inspected using the supervisor's published inspection approach.
                4. A mock interview held with the reporting officer and one partner.
                5. Weak points found in the mock fixed or explained in writing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete inspection pack is ready, ten files have been self-inspected and a mock interview has been held, with findings fixed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Read the supervisor's published inspection approach and information request"
                - "Assemble the inspection pack in one folder"
                - "Self-inspect ten in-scope files using the supervisor's approach"
                - "Hold a mock interview with the reporting officer and a partner"
            - name: Annual AML return to the supervisor
              description: |-
                ## Purpose
                Many supervisors ask firms for a yearly return covering client numbers, risk profile, high-risk countries, reports made and training, and a late or careless return invites a closer look. Knowing the deadline, collecting the data through the year and checking it against the risk assessment makes the return quick and consistent.

                ## Milestones
                1. The return's deadline and questions confirmed with the supervisor.
                2. A data source identified for each question.
                3. The return completed, checked by a partner and submitted on time.
                4. A copy of the submitted return filed with the year's compliance records.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The yearly AML return was submitted before its deadline, checked by a partner and consistent with the firm-wide risk assessment."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Find the questions and deadline for the supervisor's yearly return"
                - "Map each question to the report or record that answers it"
                - "Complete and submit the yearly AML return @recurring(yearly)"
                - "File a copy of the submitted return in the compliance folder"
            - name: Responding to a law enforcement information request
              description: |-
                ## Purpose
                Production orders, account monitoring orders and FIU information requests arrive with tight deadlines and strict confidentiality, and they collide with client privilege and confidentiality duties. A prepared response procedure, with legal advice on privilege and a named handler, means the firm complies properly without disclosing more than it must or tipping off the client.

                ## Milestones
                1. A procedure naming who receives, logs and handles any order or request.
                2. An external adviser identified for privilege questions.
                3. Deadlines and confidentiality rules logged on receipt of each request.
                4. Every response recorded with what was disclosed and on what basis.

                ## Notes
                Do not tell the client about an order unless the reporting officer and your adviser confirm it is allowed. Privilege is a legal question for your adviser, not a judgement call for the fee earner.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written procedure for handling law enforcement and FIU requests exists, and every request received has a log entry showing what was disclosed and why."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name who receives and logs court orders and FIU requests"
                - "Identify an external adviser for privilege questions"
                - "Write the steps from receipt to response in the manual"
                - "Create a confidential log for orders and requests"
            - name: Updating controls after a new national risk assessment
              description: |-
                ## Purpose
                Every few years the government publishes a national risk assessment, and after each international mutual evaluation the rules and supervisor expectations often tighten. Reading the new assessment for findings about lawyers and accountants, and updating the firm's own risk assessment within a few months, shows the supervisor the firm is paying attention.

                ## Milestones
                1. The latest national risk assessment and mutual evaluation findings on the professions read.
                2. Changes in risk ratings for your sector and client types noted.
                3. The firm-wide risk assessment and matrix updated where the national view changed.
                4. Staff briefed on what changed and why.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The firm-wide risk assessment cites the current national risk assessment and reflects any changes it made to the sector's ratings."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Check whether a new national risk assessment has been published @recurring(yearly)"
                - "Read the sections on lawyers, accountants and your client types"
                - "Update the firm-wide risk assessment and matrix scores"
                - "Send staff a short note on what changed"
            - name: Remediating due diligence on the legacy client book
              description: |-
                ## Purpose
                Clients who joined before the current rules, or before anyone checked properly, often have thin or missing files, and an inspector will sample them. A dated programme to rate every existing in-scope client, fill the gaps on the highest risks first and exit those who will not provide information clears the backlog without stopping the firm's work.

                ## Milestones
                1. Every in-scope existing client listed with the state of their due diligence.
                2. Clients rated and the remediation order set, high risk first.
                3. High-risk gaps closed within the first ninety days.
                4. Remaining gaps closed or the clients exited by the programme end date.

                ## Notes
                Start from the **Remediation plan** template. Write to clients in plain language explaining that the law requires updated information; most comply quickly.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every existing in-scope client has complete due diligence on file or has been exited, by the programme end date."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export the list of existing in-scope clients with their onboarding dates"
                - "Mark each client complete, partial or missing for due diligence"
                - "Write a standard letter asking clients for updated information"
                - "Report the remediation count to the partners @recurring(monthly:28)"
            - name: Handling a consent request and the waiting period
              description: |-
                ## Purpose
                In some countries a firm that suspects laundering can ask the FIU for consent to carry on with a transaction, and must then wait for a set period without completing or alerting the client. Planning how a matter is paused, what the fee earner says and how the deadline is tracked prevents both an offence and an angry client walking away mid-deal.

                ## Milestones
                1. Whether your law has a consent or defence request regime, and its time limits, confirmed.
                2. A checklist for the reporting officer from request to decision.
                3. A deadline tracker for each pending request.
                4. Fee earners told exactly which steps they may and may not take while waiting.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A consent request checklist and deadline tracker exist, and every pending request in the year was handled within its legal time limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your AML law provides a consent or defence request"
                - "Note the waiting periods and what the firm may do meanwhile"
                - "Write a reporting officer checklist for a consent request"
                - "Set up a deadline tracker for pending requests"
            - name: AML for a sole practitioner
              description: |-
                ## Purpose
                Working alone, a sole practitioner is the owner, fee earner and reporting officer at once, with no colleague to challenge a decision and no compliance team to share the paperwork. Scaling the controls to one person, with a short manual, an external adviser to consult on suspicion and a peer to review files once a year, makes compliance realistic without pretending to be a large firm.

                ## Milestones
                1. A short AML manual written for one person, with simplified forms.
                2. An external adviser or peer agreed for confidential consultation on suspicion.
                3. A yearly self-review of ten files completed and recorded.
                4. Cover arranged for reporting duties during holidays or illness.

                ## Notes
                Check whether your regulator lets a sole practitioner appoint themselves reporting officer. Most do, but some require notification.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sole practitioner AML manual, a named consultation contact and a recorded file self-review exist within the year."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Cut the full AML manual down to the steps one person needs"
                - "Ask a trusted peer or adviser to act as a confidential sounding board"
                - "Arrange who covers reporting duties when you are away"
                - "Self-review ten files and record the findings"
            - name: AML checks when acquiring another firm's client book
              description: |-
                ## Purpose
                Buying a retiring practitioner's practice or merging with another firm means inheriting their clients and their due diligence, which may be thin or out of date. Building AML into the due diligence on the deal, and planning how the incoming clients are checked before work continues, avoids taking on someone else's compliance failure.

                ## Milestones
                1. AML questions added to the acquisition due diligence list.
                2. A sample of the selling firm's files reviewed for due diligence quality.
                3. A plan for rechecking incoming clients agreed before completion.
                4. Incoming clients rated and their checks completed within the agreed window.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Acquisition due diligence includes an AML file sample, and every incoming client has been risk rated and checked within the agreed window."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add AML questions to the acquisition due diligence request"
                - "Review ten of the selling firm's client files for due diligence"
                - "Agree in the deal terms how incoming client files will be handed over"
                - "Rate and recheck incoming clients against the firm's checklist"
            - name: AML for bookkeeping and payroll services
              description: |-
                ## Purpose
                Small accounting practices doing monthly bookkeeping and payroll see transactions in detail but often treat the work as routine data entry. Building simple AML checkpoints into the monthly cycle, such as unexplained cash, payments to unknown parties and staff who never appear in other records, makes the people closest to the numbers part of the control.

                ## Milestones
                1. AML checkpoints added to the bookkeeping and payroll monthly checklists.
                2. Bookkeepers trained to raise an internal report rather than correct the entry quietly.
                3. Clients with repeated unexplained items flagged for a risk rating review.
                4. One quarter of checkpoint results reviewed by the reporting officer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bookkeeping and payroll checklists include AML checkpoints, and the reporting officer has reviewed a quarter of their results."
                cadence: rolling
              tasks:
                - "Add three AML checkpoints to the monthly bookkeeping checklist"
                - "Brief the bookkeeping team on raising internal reports"
                - "Flag clients with repeated unexplained transactions for review"
                - "Share checkpoint results with the reporting officer @recurring(quarterly)"
            - name: Trust and company service work controls
              description: |-
                ## Purpose
                Forming companies, acting as registered office, providing nominee directors and administering trusts are high-risk services that can make the firm part of the structure itself. Setting stricter rules for this work, with partner approval, a register of every entity where the firm holds a role and a yearly review, keeps the firm from lending its name to a vehicle it does not understand.

                ## Milestones
                1. Every entity where the firm or its staff act as director, secretary, trustee or registered office listed.
                2. Partner approval required for any new appointment.
                3. Enhanced due diligence applied to every client using these services.
                4. Each entity reviewed yearly for activity, ownership and continued need.

                ## Notes
                Some countries license trust and company service providers separately from lawyers and accountants. Check whether this work needs its own licence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of every entity where the firm holds a role is complete, each has enhanced due diligence on file and each was reviewed within the year."
                cadence: rolling
              tasks:
                - "List every entity where the firm or staff hold an office"
                - "Check whether this work needs a separate licence in your country"
                - "Require partner sign-off for any new company or trust appointment"
                - "Review each entity on the register for activity and ownership @recurring(yearly)"
            - name: Clients from high-risk third countries
              description: |-
                ## Purpose
                Clients linked to countries on international grey or black lists, or to places with high corruption or secrecy, need enhanced checks and in some regimes mandatory extra measures. Knowing which lists the firm follows, how to spot a link to those countries, and what extra evidence to collect, lets the firm act for international clients with care rather than refusing everyone or checking no one.

                ## Milestones
                1. The high-risk country lists the firm follows named in the manual.
                2. Links that count listed: residence, nationality, company registration, source of funds.
                3. An enhanced checklist for these clients, with partner sign-off.
                4. Current clients with high-risk links identified and their files checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The manual names the high-risk country lists followed, and every current client with a link to them has enhanced due diligence and partner approval on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the current international list of high-risk jurisdictions"
                - "Write which links to those countries trigger enhanced checks"
                - "Search the client list for clients with those links"
                - "Check each linked client file for enhanced checks and approval"
            - name: Group-wide AML policy for a second office or country
              description: |-
                ## Purpose
                Opening an office in another town or another country, or joining an international network, means the rules may differ and staff may drift from head office practice. A group-wide policy that sets one minimum standard, applies the stricter local rule where they differ and names a local reporting route keeps the whole firm consistent.

                ## Milestones
                1. Differences between local AML law and the firm's current policy listed for the new office.
                2. A group minimum standard adopted, with local additions where the law is stricter.
                3. A local reporting officer or reporting route named.
                4. File reviews scheduled for the new office in its first six months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A group-wide AML policy with local annexes is approved, the new office has a named reporting route and its files have been reviewed in the first six months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare the new location's AML law with the firm's manual"
                - "Write a group minimum standard with a local annex"
                - "Name the local reporting officer or route"
                - "Book file reviews for the new office in its first six months"
            - name: Enhanced checks for cryptoasset-linked clients
              description: |-
                ## Purpose
                Clients whose wealth comes from cryptoassets, or who want to buy property or fund a company with them, raise source of funds questions that bank statements alone cannot answer. A specialist approach, covering wallet and exchange evidence, the history of gains and when to bring in a blockchain analysis provider, lets the firm take this work on with evidence rather than guesswork.

                ## Milestones
                1. The firm's appetite for cryptoasset-linked clients agreed by the partners.
                2. Acceptable evidence listed: exchange statements, wallet records, tax filings on gains.
                3. A threshold set for using an external blockchain analysis provider.
                4. One anonymised past or test case worked through using the approach.

                ## Notes
                Treat a refusal to show the history of the funds as a red flag in itself, not as a paperwork delay.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The partners have recorded their appetite for cryptoasset-linked work, and an evidence standard and analysis threshold are in the manual."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the partners whether the firm will act for cryptoasset-funded matters"
                - "Read your supervisor's guidance on cryptoasset source of funds"
                - "List the evidence the firm will accept for crypto gains"
                - "Get a quote from a blockchain analysis provider for occasional checks"
            - name: AML management information for partners
              description: |-
                ## Purpose
                Partners who see AML only once a year in the reporting officer's report cannot steer it. A one-page monthly dashboard of new high-risk clients, overdue due diligence, refresh backlog, file review pass rate, training completion and internal reports, without client names, turns compliance into a number the partnership watches like lockup or utilisation.

                ## Milestones
                1. Six or seven indicators chosen, with a target for each.
                2. Data sources identified so the dashboard takes under an hour to produce.
                3. The dashboard presented at each monthly partners' meeting.
                4. Two indicators trending the wrong way prompting an agreed action.

                ## Notes
                Keep suspicion report numbers aggregated and anonymous. Naming matters in the partners' pack is a tipping-off and confidentiality risk.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly AML dashboard with targets has been presented to the partners for six consecutive months."
                cadence: rolling
              tasks:
                - "Choose six AML indicators and a target for each"
                - "Find where the data for each indicator is held"
                - "Produce the AML dashboard for the partners' meeting @recurring(monthly:25)"
                - "Agree an action for any indicator off target two months running"
---

# AML Duties for Law and Accounting Firms

This area is for the owner or managing partner of a law or accounting firm who carries personal responsibility for the firm's anti-money laundering controls, and who would rather find the gaps before a supervisor or a prosecutor does. It starts with foundations (which services are in scope, registration, a reporting officer, the firm-wide risk assessment, policies and due diligence), moves to the operating routines that keep files clean, the knowledge fee earners need to spot and report suspicion, improvements to tools and policies, dated events such as inspections and annual returns, situations from sole practice to acquiring a client book, and finally specialist work on cryptoasset clients and partner reporting.

What repeats is a weekly check that no matter has started without due diligence, a weekly sanctions list check, monthly file samples and reviews of the reporting officer's log, quarterly refresher conversations, and yearly risk assessment, policy, training and return deadlines. The Compliance control, Risk register, Purchase decision, Remediation plan and Training program templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
