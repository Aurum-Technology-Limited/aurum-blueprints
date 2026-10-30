---
id: practice-ownership.owning-an-accounting-firm
name: Owning an Accounting Firm
description: "Service lines mapped, engagement letters and a deadline calendar in place, a quality system that survives a monitoring visit, a busy season you plan for, and the decisions that shape an accounting firm you own."
category: business
version: 1.0.0
tags: [practice-ownership, owning-an-accounting-firm, small-business, founder, accounting, audit, tax-practice, quality-control]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - skills-matrix
    - onboarding-plan
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning an Accounting Firm
          description: "Running an accounting or audit firm: service lines, the client portfolio, seasonal workload, engagement letters, quality control and practising certificate rules."
          projects:
            - name: Service line map of the firm
              description: |-
                ## Purpose
                Most small firms drift into offering everything a client asks for, from payroll to probate accounts, without knowing which lines pay. Writing down each service line with its client count, fee total, the people who deliver it and the regulation it falls under shows where the firm really earns and where it carries risk for little reward.

                ## Milestones
                1. A list of every service the firm currently delivers, grouped into five to eight lines such as tax compliance, year-end accounts, bookkeeping, payroll, audit and advisory.
                2. Fee income for the last full year attached to each line from the billing records.
                3. The staff member who delivers and the person who reviews each line named.
                4. Lines that need a specific licence, registration or audit qualification marked.
                5. Two or three lines flagged for growth and any line flagged for review.

                ## Notes
                Count fees by service, not by client. A single client often buys three lines, and lumping them together hides which work is profitable.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page service line map showing fees, deliverer, reviewer and regulatory status for every line the firm offers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export last year's invoices with a service code or description"
                - "Group every service into five to eight named lines"
                - "Total fee income per line and note the client count"
                - "Name the preparer and reviewer for each line"
                - "Mark lines that need a licence or audit registration"
            - name: Client portfolio census by fee and risk
              description: |-
                ## Purpose
                An owner usually knows the twenty biggest clients by heart and very little about the other three hundred. A census of every client, with annual fee, services bought, year-end, entity type and a simple risk rating, is the base for pricing, capacity, quality and any future sale of the firm.

                ## Milestones
                1. One spreadsheet or practice system report listing every active client with fee, services, year-end and entity type.
                2. Each client rated low, medium or high risk on agreed criteria such as complexity, cash handling and record quality.
                3. Clients ranked by fee, with the share of income from the top ten shown.
                4. Dormant or lapsed clients marked for disengagement or reactivation.

                ## Notes
                If any one client is more than about a tenth of total fees, note it. Concentration matters for independence on audit work and for anyone valuing the firm.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A complete client census with fee, services, year-end, entity type and risk rating for every active client, and a fee concentration figure."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull a list of all clients billed in the last eighteen months"
                - "Add fee, services, year-end and entity type columns"
                - "Agree three or four criteria for a low, medium or high risk rating"
                - "Calculate the share of fees from the ten largest clients"
                - "Refresh the census after the year's billing closes @recurring(yearly)"
            - name: Practising certificate and firm registration check
              description: |-
                ## Purpose
                Professional accountancy bodies typically require anyone offering public practice services to hold a practising certificate, and some work, such as statutory audit or insolvency, needs a separate firm registration. Confirming exactly what each principal holds, what it covers and when it renews avoids the serious position of signing work the firm is not licensed to do.

                ## Milestones
                1. Each principal's membership, practising certificate and any audit or other licence listed with its renewal date.
                2. The firm's own registration with the professional body or audit regulator confirmed, where one is needed.
                3. Every service line checked against the licences held, with any gap written down.
                4. Professional indemnity cover confirmed as meeting the minimum your body sets for practising certificate holders.
                5. Renewal dates entered in the firm calendar with a reminder six weeks ahead.

                ## Notes
                Rules differ by body and country. Read the current practice regulations of your own institute rather than relying on what a colleague in another body does.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A licence register listing every principal's practising certificate and firm registrations, matched to service lines, with renewal reminders set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current practice regulations from your professional body"
                - "List each principal's certificate, licences and renewal dates"
                - "Match every service line to the licence that permits it"
                - "Submit the practising certificate renewal and annual return @recurring(yearly)"
            - name: Engagement letter set for every service line
              description: |-
                ## Purpose
                Many disputes and indemnity claims against small firms start with a client who believed the firm was doing something it was not, such as checking a VAT position or filing a return the client was meant to approve. A standard letter for each service line, with a clear scope, client responsibilities and fee basis, and a signed copy on every file, closes that gap.

                ## Milestones
                1. Template letters for each service line, built from your professional body's current model wording.
                2. A schedule of services for each letter listing what is included and what is excluded.
                3. Every active client matched to a signed letter that reflects what they buy today.
                4. Clients without a current signed letter listed with a date to send one.
                5. A rule that no new work starts before the letter is signed.

                ## Notes
                Ask your professional indemnity insurer or professional body whether they offer reviewed model letters. Using them often costs nothing and keeps wording in line with current rules.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed engagement letter matching current services exists on file for at least nine in ten active clients, with the rest scheduled."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Download the model engagement letters from your professional body"
                - "Draft one schedule of services for each service line"
                - "Run a report of clients with no signed letter on file"
                - "Send letters to the twenty largest clients first"
                - "Add a letter check to the new client checklist"
            - name: Statutory deadline calendar for the client base
              description: |-
                ## Purpose
                Late filing penalties land on clients, but the blame and often the cost land on the firm. A single calendar that holds every client's filing, payment and registration deadline, generated from the client census rather than from memory, lets the whole team see what is due weeks before it is due.

                ## Milestones
                1. Every deadline type the firm handles listed, from company accounts and corporate tax to sales tax, payroll and personal returns.
                2. Each client's deadlines generated from their year-end and registrations.
                3. Each deadline assigned an owner inside the firm.
                4. A view showing everything due in the next sixty days.
                5. A monthly check that new clients and changed year-ends have flowed into the calendar.

                ## Notes
                Build the calendar inside your practice or workflow system where you can. A separate spreadsheet drifts out of date the first time a client changes their year-end.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deadline calendar covering every active client and filing type, with an owner on each item and a sixty-day view in use."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every filing and payment deadline type the firm handles"
                - "Generate deadlines for each client from year-end and registrations"
                - "Assign an owner to each deadline"
                - "Reconcile new clients and year-end changes into the calendar @recurring(monthly:3)"
            - name: Client acceptance and continuance procedure
              description: |-
                ## Purpose
                Taking on the wrong client costs a firm more than turning away a fee: unpaid bills, poor records, ethical pressure and, at worst, a role in someone else's wrongdoing. A written procedure covering identity, integrity, competence to do the work and independence, applied to every new client and repeated yearly for existing ones, is what regulators and insurers expect to see.

                ## Milestones
                1. A one-page acceptance form covering identity checks, ownership, the work requested, competence and any conflicts.
                2. Clear reasons for declining a client written down, so staff can say no consistently.
                3. An annual continuance review for higher risk clients built into the year's work.
                4. Every new client in the last year checked against the form, with gaps filled.
                5. Partner sign-off recorded on each acceptance decision.

                ## Notes
                Keep the anti-money laundering due diligence steps in the same form but run them to your country's rules. The detailed AML work sits in its own area.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written acceptance and continuance procedure in use, with signed forms on file for every client taken on in the last twelve months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page client acceptance form"
                - "Write the five reasons the firm will decline a client"
                - "Check last year's new clients against the form"
                - "Add a continuance review step to high risk clients' year-end work"
            - name: Professional clearance for incoming clients
              description: |-
                ## Purpose
                Accountancy ethics codes generally expect a firm taking over a client to contact the previous accountant and ask whether there is any professional reason not to accept the work. A standard clearance letter, a log of requests and replies, and a habit of handing over promptly when clients leave the other way, keeps the firm on the right side of its peers and its rules.

                ## Milestones
                1. A standard professional clearance request letter and a client authority to contact the previous adviser.
                2. A matching letter for responding when another firm asks about a departing client.
                3. A log showing each clearance sent, the reply and the date work started.
                4. A handover pack checklist for clients who leave, listing what the firm releases and when.

                ## Notes
                Fees owed by a departing client are generally not a reason to withhold records that belong to the client. Check your body's current guidance on what you may and may not hold back.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Clearance request and response letters exist, and a log shows clearance obtained for every client taken on since the procedure started."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your professional body's guidance on changes in professional appointment"
                - "Draft the outgoing clearance request and client authority"
                - "Draft the reply letter for departing clients"
                - "Start a clearance log in the practice system"
            - name: New client onboarding pack and first ninety days
              description: |-
                ## Purpose
                New clients judge the firm in the first three months, and the firm judges how much the client will really cost. A standard onboarding pack that sets up agent authorisations, collects prior year returns and accounts, confirms tax registrations and agrees the first deadlines turns a signed letter into a working relationship without surprises.

                ## Milestones
                1. An onboarding checklist covering authorisations, prior year filings, registrations, bank feeds and key dates.
                2. A welcome message explaining how the firm works, who to contact and how to send records.
                3. Prior year returns and accounts reviewed for errors or open enquiries within the first month.
                4. The client's deadlines entered in the firm calendar with owners.
                5. A ninety-day check-in held and any scope or fee mismatch raised.

                ## Notes
                Problems found in prior year filings belong to the client and the previous adviser. Tell the client in writing and agree what, if anything, the firm will do about them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every client taken on in a quarter has a completed onboarding checklist and a recorded ninety-day check-in."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the new client onboarding checklist"
                - "Write the welcome message with contacts and records instructions"
                - "Review prior year filings for each new client in the first month"
                - "Book a ninety-day check-in when each new client signs"
            - name: Written quality management system for the firm
              description: |-
                ## Purpose
                International and national quality management standards for firms that perform audits, reviews and related services ask the firm itself to identify quality risks and design responses, not just to have checklists. Even a two-person firm needs a written system: who is responsible for quality, how work is reviewed, how staff are trained and how problems are found and fixed.

                ## Milestones
                1. One partner named as responsible for the quality system, with the role written down.
                2. Quality objectives and the main risks to them listed for each component the standard covers.
                3. A response recorded against each risk, such as a review rule, a checklist or a training step.
                4. A yearly evaluation of whether the system works, signed by the responsible partner.
                5. Staff told where the system lives and what it asks of them.

                ## Notes
                Start from the **Compliance control** template, one control per risk response. Check which quality standard your professional body or audit regulator currently applies and whether firms with no audit clients have a lighter version.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written quality management system naming the responsible partner, risks and responses, with the first annual evaluation signed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Download the quality management standard your body applies"
                - "Name the partner responsible for quality in writing"
                - "List the main quality risks for each component of the standard"
                - "Record a response to each risk as a control"
                - "Sign the annual evaluation of the quality system @recurring(yearly)"
            - name: Client records collection standard and portal
              description: |-
                ## Purpose
                Half the delay in a tax or accounts job is waiting for records that arrive as a carrier bag of receipts, a forwarded email chain and a missing bank statement. One standard list of what each service needs, a secure portal for uploads and a fixed reminder sequence cuts the chasing and stops sensitive documents arriving by unprotected email.

                ## Milestones
                1. A records checklist per service line, written in plain language for clients.
                2. A secure client portal or file request link chosen and tested with five clients.
                3. A three-step reminder sequence with dates relative to each deadline.
                4. Email attachments of identity and bank documents replaced by portal uploads as the default.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Records checklists exist for every service line and at least half of clients have uploaded through the secure portal in a season."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a plain-language records checklist for personal tax returns"
                - "Repeat the checklist for accounts, bookkeeping and payroll clients"
                - "Test the secure portal with five friendly clients"
                - "Set the three-step reminder sequence in the practice system"
            - name: Monday deadline and capacity huddle
              description: |-
                ## Purpose
                Firms rarely miss deadlines because nobody knew; they miss them because a job sat in the wrong person's queue for three weeks. A fifteen-minute Monday huddle on the sixty-day deadline view, jobs waiting on clients and who is overloaded keeps work moving and makes problems visible while there is still time.

                ## Milestones
                1. A fixed fifteen-minute slot every Monday with every fee earner present.
                2. A standing agenda: deadlines in the next fortnight, jobs stuck on clients, overloaded people.
                3. Stuck jobs given a named chaser and a date.
                4. Work moved between people when someone is overloaded, with the change recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Monday huddle has run in at least four of five weeks for a quarter, with no deadline missed for lack of visibility."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute Monday slot for all fee earners"
                - "Write the three-item standing agenda"
                - "Run the deadline and capacity huddle @recurring(weekly:mon)"
                - "Note any job reassigned and the reason"
            - name: Review and sign-off workflow for returns and accounts
              description: |-
                ## Purpose
                A return that goes out unreviewed because the reviewer was busy is the firm's biggest everyday risk. A defined workflow, where every job passes preparer, reviewer and, for higher risk work, partner sign-off before release, with the evidence kept on file, protects clients and the practising certificate alike.

                ## Milestones
                1. Review levels defined by job type and client risk rating.
                2. Review checklists for tax returns, accounts and payroll year-ends.
                3. A rule that nothing is filed or sent without a recorded reviewer sign-off.
                4. Review points cleared on file before release, not by conversation.
                5. A weekly look at the sign-off queue so reviews do not bottleneck.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every return and set of accounts released in a quarter shows a recorded reviewer sign-off, with partner sign-off on high risk jobs."
                cadence: rolling
              tasks:
                - "Write the review level rule for each job type and risk rating"
                - "Adopt review checklists for returns, accounts and payroll"
                - "Configure the workflow so filing needs a reviewer sign-off"
                - "Clear the sign-off queue before the weekend @recurring(weekly:fri)"
            - name: Monthly close routine for bookkeeping and payroll clients
              description: |-
                ## Purpose
                Retained bookkeeping and payroll clients pay every month and expect the work every month, which means a slipped close is felt straight away. A routine that sets the order of bank feeds, reconciliations, payroll runs, sales tax and a short monthly report keeps recurring clients on time and makes the work easy to hand to a junior.

                ## Milestones
                1. A standard close checklist used for every retained client.
                2. Bank reconciliation, payroll and sales tax steps given fixed days in the month.
                3. A short monthly report or message sent to each client with three numbers and any questions.
                4. Clients whose records arrive late flagged and spoken to, not silently worked around.

                ## Notes
                Start from the **Compliance control** template if you want each close step evidenced. Keep the checklist short enough that people use it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every retained client's monthly close is completed by the agreed day for three consecutive months, with a client report sent."
                cadence: rolling
              tasks:
                - "Write the standard monthly close checklist"
                - "Set fixed days for reconciliations, payroll and sales tax"
                - "Start the monthly close for retained clients @recurring(monthly:5)"
                - "Draft a three-number monthly report format for clients"
            - name: Year-end records chase cycle
              description: |-
                ## Purpose
                Personal tax and small company year-ends tend to cluster, so the firm spends the last month before the deadline chasing records it asked for months earlier. A planned cycle that requests records soon after year-end, chases on fixed dates and escalates to a partner call keeps the workload spread across the year instead of jammed into the final weeks.

                ## Milestones
                1. Records requests sent within a month of each client's year-end.
                2. Fixed chase dates set for thirty, sixty and ninety days after request.
                3. A partner call to any client still missing records at ninety days.
                4. A count of jobs received by each chase point, compared with last season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two thirds of personal tax and accounts clients have supplied records more than sixty days before their filing deadline."
                cadence: cyclic
              tasks:
                - "Draft the records request message for each service line"
                - "Set the thirty, sixty and ninety day chase dates"
                - "Send the season's records requests @recurring(yearly)"
                - "Record how many jobs arrived by each chase point"
            - name: Annual engagement letter refresh and fee increase
              description: |-
                ## Purpose
                Fees that are not reviewed each year fall behind salaries and software costs, and engagement letters drift away from what clients actually buy. One yearly round that updates each client's scope, applies a reasoned fee change and collects a fresh signature keeps both in step.

                ## Milestones
                1. A fee review rule agreed by partners, such as a general increase plus individual changes for scope creep.
                2. Every client's scope checked against the last twelve months of work.
                3. Updated letters with the new fee sent at least a month before it takes effect.
                4. Signed letters back from nine in ten clients, with the rest followed up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly fee and scope review is completed, with updated signed letters on file for at least nine in ten active clients."
                cadence: cyclic
              tasks:
                - "Agree the fee review rule with the partners"
                - "List clients whose work grew beyond their scope this year"
                - "Send refreshed engagement letters with the new fees @recurring(yearly)"
                - "Follow up unsigned letters after three weeks"
            - name: Annual independence and conflicts declarations
              description: |-
                ## Purpose
                Independence rules bite hardest on audit and assurance work, but any firm can face a conflict between two clients, a staff member's shares or a family link to a client's director. A yearly declaration from every partner and staff member, checked against the client list, gives the firm evidence it looked and catches problems before an engagement starts.

                ## Milestones
                1. A declaration form covering financial interests, family and business links, loans and gifts.
                2. Signed declarations from every partner and staff member.
                3. Declarations checked against the client census and any matches resolved.
                4. Fee dependence on any single assurance client calculated and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Signed independence declarations exist for every person in the firm for the current year, checked against the client list with outcomes recorded."
                cadence: cyclic
              tasks:
                - "Draft the independence and conflicts declaration form"
                - "Collect signed declarations from everyone in the firm @recurring(yearly)"
                - "Check declared interests against the client census"
                - "Record how each match was resolved"
            - name: Monthly cold file review
              description: |-
                ## Purpose
                A sample of completed files reviewed after the work is released, by someone who did not do it, is how a firm finds out whether its quality system works before a monitoring visit tells it. Reviewing two or three files a month across service lines and people turns quality from a once-a-year scramble into a steady habit.

                ## Milestones
                1. A rota choosing files across every service line, preparer and reviewer over a year.
                2. A short cold review checklist for each file type.
                3. Findings recorded per file with a rating and actions.
                4. Common findings fed back to the team each quarter.

                ## Notes
                Small firms can swap cold reviews with another practitioner. Agree confidentiality terms in writing first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twenty completed files are cold reviewed in a year, covering every service line and fee earner, with findings recorded."
                cadence: rolling
              tasks:
                - "Draw up a year's rota of files to review"
                - "Adapt a cold review checklist for each file type"
                - "Review the month's sampled files @recurring(monthly:18)"
                - "Summarise common findings for the team"
            - name: Tax authority correspondence and penalty log
              description: |-
                ## Purpose
                Letters and portal messages from the tax authority arrive for hundreds of clients, and the one that matters can sit unread until the appeal window has closed. A single log of every notice, enquiry and penalty, with an owner and a response date, protects clients and shows the firm's own error rate.

                ## Milestones
                1. One inbox or queue where all tax authority correspondence lands.
                2. Every notice logged with client, type, date received, owner and response deadline.
                3. Penalties tagged by cause: client delay, firm error or authority error.
                4. A quarterly count of firm-caused penalties reported to partners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every piece of tax authority correspondence for a quarter is logged with an owner and response date, and no response deadline is missed."
                cadence: rolling
              tasks:
                - "Route all tax authority correspondence to one queue"
                - "Create the log with owner and response deadline columns"
                - "Log and assign the week's tax authority notices @recurring(weekly:wed)"
                - "Tag each penalty by its cause"
            - name: Quarterly service line profitability review
              description: |-
                ## Purpose
                Fees per line tell only half the story; payroll clients may bill well and lose money once the hours are counted. A quarterly look at recorded time, fees and write-offs per service line shows which work subsidises which and gives partners facts for pricing and staffing decisions.

                ## Milestones
                1. Time and fees per service line reported for the quarter.
                2. Effective hourly rate calculated for each line.
                3. Lines below the firm's target rate listed with a likely reason.
                4. One action agreed per weak line, such as a fee change, a process fix or a decision to exit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly service line reviews are completed in a year, each with an effective rate per line and a recorded action for any line below target."
                cadence: rolling
              tasks:
                - "Set the firm's target effective hourly rate"
                - "Build a report of time and fees by service line"
                - "Run the service line profitability review @recurring(quarterly)"
                - "Record one action for each line below target"
            - name: Agent authorisations and tax portal access register
              description: |-
                ## Purpose
                Accounting firms hold agent authorisations, filing credentials and online banking or payroll access for many clients, and each one is a route to serious harm if a former employee keeps it. A register of who holds which access, reviewed every quarter and cleared the day someone leaves, keeps client systems safe and authorisations current.

                ## Milestones
                1. A register of every agent authorisation and client system login the firm holds.
                2. Each access tied to a named person, never a shared login where the portal allows individual users.
                3. Multi-factor authentication switched on wherever the portal offers it.
                4. A leaver checklist that removes access the same day.
                5. Authorisations for departed clients withdrawn.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete access register is reviewed each quarter, with every leaver's access removed within one working day of leaving."
                cadence: rolling
              tasks:
                - "List every agent authorisation and client login the firm holds"
                - "Switch on multi-factor authentication where available"
                - "Write a same-day leaver access checklist"
                - "Review the access register against current staff and clients @recurring(quarterly)"
            - name: Learning the firm's audit methodology end to end
              description: |-
                ## Purpose
                Partners and seniors often know their part of the audit file well and the rest only by habit, which shows when a monitoring reviewer asks why a sample size was chosen. Working through the methodology from planning and risk assessment to completion, with one real file as the example, builds the understanding that turns a file into evidence.

                ## Milestones
                1. The methodology manual or software guidance read section by section.
                2. Planning, materiality, risk assessment, sampling and completion each explained in your own notes.
                3. One closed audit file traced against the methodology with gaps noted.
                4. Three questions you could not answer taken to your methodology provider or a technical adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover each stage of the methodology, and one closed audit file has been traced through it with gaps listed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book four two-hour study slots over the next month"
                - "Read the planning and materiality sections and write a summary"
                - "Trace one closed audit file against each stage"
                - "Send your three open questions to the methodology provider"
            - name: Monthly standards and tax law update briefing
              description: |-
                ## Purpose
                Reporting standards, tax rules and filing systems change through the year, and a small firm has no technical department to tell it. A monthly half hour where one person summarises what changed and what it means for the client base keeps the whole team current and counts towards continuing professional development.

                ## Milestones
                1. Three or four reliable update sources chosen, such as your professional body's bulletins and the tax authority's announcements.
                2. A rota of who prepares each month's briefing.
                3. A one-page summary of each briefing filed with attendance.
                4. Clients affected by a change identified and contacted where needed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A briefing has been held and minuted in at least ten months of the year, with affected clients identified for each relevant change."
                cadence: rolling
              tasks:
                - "Subscribe to your professional body's technical bulletins"
                - "Set a rota of briefing presenters for six months"
                - "Hold the standards and tax update briefing @recurring(monthly:24)"
                - "List clients affected by each change discussed"
            - name: Technical training programme for junior staff
              description: |-
                ## Purpose
                Trainees and junior bookkeepers learn most from the work in front of them, which in busy season means learning shortcuts. A short planned programme of topics, worked examples and reviewed practice files, timed before the busy months, gives juniors the basics and saves reviewers hours of corrections.

                ## Milestones
                1. A list of the eight to ten topics a junior needs before busy season.
                2. A worked example file for each topic.
                3. Each junior's practice files reviewed with written feedback.
                4. Progress recorded against each topic so the next step is clear.

                ## Notes
                Start from the **Skills matrix** template to track each junior against the topics.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Every junior has completed the topic programme with a reviewed practice file for each topic before busy season begins."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the ten topics juniors need before busy season"
                - "Build a worked example file for each topic"
                - "Schedule one session a week for ten weeks"
                - "Record each junior's progress in a skills matrix"
            - name: Advisory conversation skills for compliance clients
              description: |-
                ## Purpose
                Accountants see the numbers that would help a client most, then send the accounts with a covering email and move on. Learning to run a short structured conversation about margins, cash and tax planning, framed as questions rather than advice, turns compliance relationships into advisory ones without overselling.

                ## Milestones
                1. A simple conversation structure written down, such as three questions on goals, cash and the next year.
                2. The structure practised with a colleague on two real client files.
                3. Ten accounts or tax return meetings run with the structure.
                4. Notes from each meeting filed, with any follow-up work quoted separately.

                ## Notes
                Keep advice inside the firm's competence and licences. If a conversation turns to investments, insurance or legal structure, refer to the right professional.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten client meetings have been run using a written conversation structure, with notes filed and any extra work quoted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a three-question conversation structure for accounts meetings"
                - "Practise it with a colleague on two client files"
                - "Use it in the next ten client meetings"
                - "File meeting notes and quote any follow-up work"
            - name: Cloud ledger platform certification for the team
              description: |-
                ## Purpose
                Most small business clients now keep their books in one of a handful of cloud ledger platforms, and the partner programmes usually offer free certification, client discounts and directory listings. Getting the team certified on the platforms your clients use speeds up the work and makes the firm findable by new clients already on that software.

                ## Milestones
                1. The two or three ledger platforms most used by your clients identified from the census.
                2. The firm enrolled in each platform's accountant or partner programme.
                3. Each fee earner certified on at least the main platform.
                4. The firm's directory listing completed with services and niches.

                ## Notes
                Start from the **Skills matrix** template to see who is certified on what.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every fee earner holds the current certification for the firm's main client ledger platform, and the firm's partner directory listing is live."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Count which ledger platforms your clients use"
                - "Enrol the firm in the main platforms' partner programmes"
                - "Book certification study time for each fee earner"
                - "Complete the firm's partner directory listing"
            - name: Pricing compliance work by complexity
              description: |-
                ## Purpose
                Many firms still price a set of accounts from last year's fee plus a bit, so a client who doubled in size pays the same as before. Learning to price from the drivers of the work, such as transaction volume, number of bank accounts, payroll headcount, sales tax and record quality, gives a fee you can explain and defend.

                ## Milestones
                1. The five or six drivers that most affect hours identified from recorded time.
                2. A pricing grid or calculator built from those drivers for each main service.
                3. Twenty existing clients repriced on the grid and compared with their current fee.
                4. A rule for when a client's fee must be recalculated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A pricing grid for each main service is in use for all new quotes, tested against twenty existing clients."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Compare recorded hours with client size for thirty jobs"
                - "Pick the drivers that best explain the hours"
                - "Build a pricing grid for accounts and tax returns"
                - "Reprice twenty existing clients on the grid"
            - name: Writing management letters clients act on
              description: |-
                ## Purpose
                Management letters and post-year-end reports often list twenty control weaknesses in technical language that the owner never reads. Learning to write a short letter that ranks the three issues that matter, explains the cost in plain words and suggests a practical fix makes the firm's findings useful and its follow-up work easier to propose.

                ## Milestones
                1. Three old management letters reread and rated on clarity.
                2. A house format with a ranked summary, plain explanations and suggested fixes.
                3. Five letters written in the new format and reviewed by a partner.
                4. Client responses tracked to see which points were acted on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five management letters have been issued in a ranked plain-language format, and client action on each point recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Reread three past management letters as if you were the client"
                - "Draft a house format with a ranked top three"
                - "Ask the agent to rewrite one technical finding in plain language"
                - "Track which points each client acted on"
            - name: Fixed-fee monthly packages for small businesses
              description: |-
                ## Purpose
                Small business clients dislike surprise bills, and firms dislike chasing a large year-end invoice. Packaging bookkeeping, payroll, sales tax, year-end accounts and tax returns into two or three fixed monthly tiers smooths cash flow for both sides and makes scope easier to manage, if the boundaries are written clearly.

                ## Milestones
                1. Two or three package tiers defined with what each includes and excludes.
                2. Each tier priced from the complexity grid with a margin target.
                3. Packages offered to fifteen existing clients and the take-up recorded.
                4. A rule for handling work outside the package, with an extra fee agreed in advance.

                ## Notes
                Collect monthly fees by direct debit or card on file where your clients and rules allow. It removes most of the chasing.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Package tiers are written and priced, offered to at least fifteen clients, with take-up and margins recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draft two or three package tiers with inclusions and exclusions"
                - "Price each tier from the complexity grid"
                - "Offer the packages to fifteen suitable clients"
                - "Write the rule for out-of-scope work"
            - name: Pruning the bottom tenth of the client list
              description: |-
                ## Purpose
                The smallest tenth of clients by fee usually takes far more than a tenth of the firm's time, through late records, constant queries and slow payment. Deciding deliberately which clients to reprice, move to a package or hand on to another firm frees capacity for the clients the firm wants to grow with.

                ## Milestones
                1. The bottom tenth of clients by fee listed with hours, write-offs and payment record.
                2. Each client put into reprice, repackage, keep or release.
                3. Repricing letters sent and release letters sent with a handover offer.
                4. Hours freed estimated and recorded.

                ## Notes
                Release clients with notice, in good time before their next deadline, and offer the name of another practitioner. A clumsy exit can become a complaint.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every client in the bottom tenth by fee has a recorded decision, with repricing or release letters sent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the bottom tenth of clients with hours and write-offs"
                - "Sort each client into reprice, repackage, keep or release"
                - "Send release letters well before the next filing deadline"
                - "Repeat the bottom tenth review after the season @recurring(yearly)"
            - name: Deciding whether to keep or drop audit work
              description: |-
                ## Purpose
                Audit carries registration costs, monitoring visits, methodology fees and higher insurance, and a firm with a handful of audit clients can find it loses money on them. Weighing the true cost against the fees, the client relationships and the firm's identity gives partners a clear decision to keep, grow or exit audit.

                ## Milestones
                1. The full annual cost of audit registration, methodology, training, insurance and monitoring added up.
                2. Audit fees and recorded hours compared with that cost.
                3. Clients who would need another auditor identified, with the impact on other services they buy.
                4. A partner decision recorded with reasons and, if exiting, a timetable.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to keep, grow or exit audit work, supported by a full cost and fee comparison, is recorded by the partners."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Add up the full annual cost of being an audit firm"
                - "Compare it with audit fees and hours"
                - "List audit clients who also buy other services"
                - "Record the partner decision with its reasons"
            - name: Outsourcing or offshoring preparation work
              description: |-
                ## Purpose
                Firms facing a shortage of qualified staff increasingly send bookkeeping and first-draft preparation to outsourcing providers in other countries. The model can free local staff for review and advice, but it raises questions about confidentiality, quality, client consent and your professional body's rules that need answering before the first file leaves.

                ## Milestones
                1. The work types suitable for outsourcing listed, with their volume.
                2. Two or three providers compared on cost, security, quality controls and references.
                3. Confidentiality, data protection and client consent requirements checked with your professional body and engagement letters.
                4. A pilot of twenty jobs run and its review time measured.
                5. A decision recorded to proceed, adjust or stop.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on outsourcing is recorded after a measured pilot of at least twenty jobs, with confidentiality and consent requirements met."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the work types and volumes you might outsource"
                - "Shortlist three providers and request security documents"
                - "Check your body's rules on outsourcing and client consent"
                - "Run a pilot of twenty jobs and measure review time"
            - name: Smoothing the busy season with staggered year-ends
              description: |-
                ## Purpose
                When most corporate clients share the same year-end, the firm works weekends for three months and sits half idle for two. Where the law allows a company to change its accounting date, and it suits the client, moving some year-ends and bringing personal tax work forward spreads the load across the year.

                ## Milestones
                1. A chart of fee hours by month showing the peaks.
                2. Clients for whom a different year-end could genuinely suit their trade listed.
                3. Those clients spoken to, with the tax and filing effects explained by the firm and agreed in writing.
                4. Early-bird incentives for personal tax records tested with one client group.
                5. The next year's monthly hours compared with the old peak.

                ## Notes
                A change of year-end has tax and filing consequences for the client. Only propose it where it serves the client, and record the reasons on file.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The peak month's share of annual hours falls by at least a tenth compared with the year before."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Chart last year's fee hours by month"
                - "List clients for whom another year-end would suit their trade"
                - "Offer an early-bird discount for personal tax records"
                - "Compare next year's monthly hours with the old peak"
            - name: Standard workpaper templates and checklists
              description: |-
                ## Purpose
                When each preparer builds files their own way, reviewers spend their time finding things instead of reviewing them. A standard file structure, lead schedules and completion checklists for each service line make files predictable, reviews faster and new staff productive sooner.

                ## Milestones
                1. A standard folder and index structure for each service line.
                2. Lead schedule and reconciliation templates for accounts jobs.
                3. Completion checklists for accounts, tax returns and payroll year-ends.
                4. Templates stored in one place with a version date.
                5. Twenty jobs prepared on the new templates and reviewer feedback gathered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every service line has a standard file structure and completion checklist, and twenty jobs have been completed on them."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "Agree a standard file index for accounts jobs"
                - "Build lead schedule and reconciliation templates"
                - "Write completion checklists for each service line"
                - "Collect reviewer feedback after twenty jobs"
            - name: Choosing a niche industry to specialise in
              description: |-
                ## Purpose
                Being known as the accountant for dentists, farmers, restaurants or charities brings referrals, lets a firm price with confidence and makes reusable templates worth building. Choosing a niche from the clients you already serve well, rather than one that sounds attractive, gives the firm a head start.

                ## Milestones
                1. Clients grouped by industry from the census, with fees and margins per group.
                2. Two or three candidate niches scored on fee potential, firm expertise and how easy the clients are to reach.
                3. One niche chosen and written into a short positioning statement.
                4. Three niche-specific assets planned, such as a guide, a checklist or a package.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One niche industry is chosen on recorded scores, with a positioning statement written and three niche assets planned."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Group your clients by industry with fees and margins"
                - "Score two or three candidate niches"
                - "Write a two-sentence positioning statement for the chosen niche"
                - "Plan three niche-specific guides or packages"
            - name: Busy season readiness plan
              description: |-
                ## Purpose
                Busy season goes wrong in predictable ways: records late, a key reviewer off sick, the software update that breaks a filing link. A readiness plan finished six weeks before the peak, covering capacity, cover, records chasing, systems and client expectations, makes those risks smaller and the season survivable.

                ## Milestones
                1. Expected jobs per week for the peak compared with staff hours available.
                2. Temporary staff or overtime agreed to close any gap.
                3. Cover arranged for each reviewer and for the person who files.
                4. Filing software, portal access and agent credentials tested before the peak.
                5. Clients told the last date for records to guarantee filing on time.

                ## Notes
                Start from the **Risk register** template to list what could go wrong in the season and who owns each response.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written busy season plan with capacity, cover, systems checks and a client records cut-off is agreed six weeks before the peak."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Estimate jobs per week for the peak months"
                - "Compare the estimate with staff hours available"
                - "Arrange cover for every reviewer and the filer"
                - "Test filing software and agent credentials"
                - "Email clients the last date for records"
            - name: Post-busy season debrief and lessons log
              description: |-
                ## Purpose
                Two weeks after the deadline, everyone remembers what went wrong; three months later, nobody does and the same problems recur. A short structured debrief with the whole team, recorded as a lessons log with owners, turns each season's pain into next season's fixes.

                ## Milestones
                1. A debrief held within three weeks of the main deadline.
                2. Penalties, late filings, write-offs and overtime hours for the season summarised.
                3. What went well and what failed recorded from every team member.
                4. Three to five fixes chosen, each with an owner and a date before the next season.

                ## Notes
                Start from the **Risk register** template so lessons feed straight into next year's readiness plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A season debrief is held within three weeks of the deadline, with a lessons log of three to five owned fixes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the debrief for two weeks after the deadline"
                - "Summarise penalties, late filings and overtime for the season"
                - "Collect what went well and what failed from everyone"
                - "Assign an owner and date to each chosen fix"
            - name: Monitoring visit preparation
              description: |-
                ## Purpose
                Professional bodies and audit regulators visit firms to review files and the quality system, and the outcome can range from a clean letter to conditions on the firm's registration. Preparing calmly, from a self-review of files to a tidy quality manual and a named contact, makes the visit a check of real practice rather than a scramble to fill gaps.

                ## Milestones
                1. The visit scope, date and documents requested confirmed in writing.
                2. A self-review of a sample of files against the checklist the reviewer is likely to use.
                3. Quality manual, licences, declarations and training records gathered in one place.
                4. Any weaknesses already found listed with the action taken, before the reviewer finds them.
                5. Visit findings recorded with a remediation plan and dates.

                ## Notes
                Answer reviewers factually and keep a note of each request. If findings are serious, consider asking your professional body's practitioner support service for guidance.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The monitoring visit is completed with all requested documents ready on the day, and a remediation plan with dates is filed for any findings."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read the visit letter and list every document requested"
                - "Self-review five files using the regulator's published checklist"
                - "Gather the quality manual, licences and training records"
                - "Write a remediation plan for each finding"
            - name: Pre-year-end tax planning meeting round
              description: |-
                ## Purpose
                Clients most often discover a large tax bill after the year has closed, when nothing can be done. A round of short planning meetings with the clients most likely to benefit, held while there is still time before their year-end, produces better outcomes for them and paid advisory work for the firm.

                ## Milestones
                1. Clients with higher profits, rising income or recent changes chosen for a meeting.
                2. A one-page projection prepared for each from management figures.
                3. Meetings held with the main options and their trade-offs explained within the firm's competence.
                4. Agreed actions and fees recorded in writing after each meeting.

                ## Notes
                Keep planning within the law and your profession's standards on tax planning. Record the client's decisions in writing and refer legal or investment questions to the right professional.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Planning meetings are held before year-end with every client on the shortlist, each followed by written notes of decisions and fees."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Shortlist clients most likely to benefit from planning"
                - "Prepare a one-page projection for each shortlisted client"
                - "Book meetings at least two months before each year-end"
                - "Send written notes of decisions and fees after each meeting"
            - name: Budget day and law change client briefing
              description: |-
                ## Purpose
                When a national budget or major tax change lands, clients call within the hour asking what it means for them. A prepared response, a short plain-language summary sent within two days and a list of clients who need a personal call positions the firm as the first trusted source.

                ## Milestones
                1. The date of the next budget or major tax announcement noted.
                2. A summary template ready with sections for business owners, employers and individuals.
                3. A plain-language summary sent to clients within two working days.
                4. Clients directly affected identified and called or emailed personally.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A plain-language summary of the budget or tax change is sent to clients within two working days, with directly affected clients contacted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the date of the next budget announcement"
                - "Prepare a summary template with three client sections"
                - "Send the summary within two working days of the announcement"
                - "Call the clients most directly affected"
            - name: Annual partners' planning day
              description: |-
                ## Purpose
                Owners of accounting firms spend so much time on client work that the firm's direction gets decided by default. A day away each year to review the numbers, service lines, people and risks, and to agree three priorities for the coming year, keeps the partners steering the firm rather than reacting to it.

                ## Milestones
                1. A date fixed outside the busy season, away from the office.
                2. A pack prepared with the service line map, client census, profitability figures and quality findings.
                3. Three priorities for the year agreed, each with an owner.
                4. Minutes circulated within a week and priorities added to the monthly partner agenda.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A partners' planning day is held each year with a prepared pack, three owned priorities and minutes circulated within a week."
                cadence: cyclic
              tasks:
                - "Fix a planning day date outside the busy season"
                - "Assemble the pack of numbers, service lines and quality findings"
                - "Hold the partners' planning day @recurring(yearly)"
                - "Circulate minutes and the three priorities within a week"
            - name: Opening a new firm with a first ten clients
              description: |-
                ## Purpose
                Founders setting up an accounting firm often take any work offered in the first year and end up with a scattered, low-fee client base that is hard to change later. Deciding the first service lines, a minimum fee and a target client type before the doors open, and winning a first ten clients that fit, sets the shape of the firm from day one.

                ## Milestones
                1. Two or three starting service lines chosen and the practising certificate and insurance in place.
                2. A minimum annual fee set and written into the pricing grid.
                3. A target client profile written in two sentences.
                4. Ten clients signed with engagement letters who fit the profile.
                5. A cash runway figure for the first twelve months calculated and reviewed.

                ## Notes
                Check your professional body's rules for new practices, which can include supervised experience, specific insurance and a named alternate before a certificate is issued.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The firm holds its practising certificate and insurance and has ten signed clients who fit the written target profile."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose the two or three service lines to start with"
                - "Set a minimum annual fee for new clients"
                - "Write the two-sentence target client profile"
                - "Work out the cash needed for the first twelve months"
                - "Ask ten people in your network for one introduction each"
            - name: Leaving a larger firm to set up on your own
              description: |-
                ## Purpose
                Many accounting firms are founded by a manager or partner who leaves a larger firm, and the exit terms decide what the new firm can do in its first years. Reading your contract or partnership agreement carefully, taking legal advice on any restrictions, and planning a clean departure protects your reputation and avoids a dispute that could swallow the new firm.

                ## Milestones
                1. Your employment contract or partnership agreement read for notice, non-solicitation and confidentiality terms.
                2. Legal advice taken on what the terms mean for approaching clients and staff.
                3. A departure plan agreed with the firm, covering handover of your files.
                4. A list of who you may and may not contact, and when, written from the advice.
                5. Your practising certificate, insurance and registrations ready for the first day.

                ## Notes
                Do not take client lists or files belonging to your current firm. Clients are free to choose their adviser, but how you approach them matters.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written departure plan exists, based on legal advice about your contract, with the new firm's certificate and insurance ready for the first day."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Reread your contract or partnership agreement for restrictions"
                - "Book an employment lawyer to review the restrictive terms"
                - "Draft a handover plan for your current files"
                - "Apply for your own practising certificate and insurance"
            - name: Alternate arrangement for a sole practitioner
              description: |-
                ## Purpose
                If a sole practitioner falls ill or dies, clients are left with deadlines looming and nobody authorised to act. Many professional bodies require or strongly encourage a named alternate, another practitioner who will step in, and a written arrangement with access to the deadline calendar and client list makes it real rather than nominal.

                ## Milestones
                1. Your professional body's rules on alternates or continuity arrangements read.
                2. A trusted practitioner agreed as alternate, with you acting as theirs if wanted.
                3. A written agreement covering when it is triggered, fees, confidentiality and client consent.
                4. A sealed instructions pack with system access, the deadline calendar and key contacts.
                5. Clients told in engagement letters that an alternate arrangement exists.

                ## Notes
                Ask your professional body for a model alternate agreement if it offers one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed alternate agreement with another practitioner is on file, with an instructions pack they can reach, checked each quarter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read your professional body's rules on alternates"
                - "Ask a trusted practitioner to act as your alternate"
                - "Sign a written alternate agreement"
                - "Check the alternate's instructions pack is current @recurring(quarterly)"
            - name: First employee for a one-person firm
              description: |-
                ## Purpose
                A sole practitioner usually hires only when already overloaded, then has no time to train the new person and does the work twice. Deciding the first role from the work you most need to hand over, bookkeeping or tax preparation for example, and preparing the files and checklists before the start date makes the hire pay back within a season.

                ## Milestones
                1. Your own time for a month logged and the work that does not need you identified.
                2. A role chosen with clear duties, hours and the qualifications needed.
                3. A pay range and the cost of employing checked against the fees the role frees.
                4. An induction plan for the first six weeks written.
                5. The new person preparing jobs to the firm's checklists within a month of starting.

                ## Notes
                Start from the **Onboarding plan** template for the first six weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first employee is in post with a written induction plan and is preparing jobs to the firm's checklists within a month."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Log your own time for a month by task type"
                - "Choose the role from the work you can hand over"
                - "Cost the role against the fees it frees"
                - "Write the six-week induction plan"
            - name: Growing from sole practitioner to a team of five
              description: |-
                ## Purpose
                Between one person and five, an accounting firm changes from a practitioner with help into a small business that needs roles, review rules and someone managing the workflow. Planning the order of hires, the point at which you stop preparing and start reviewing, and the systems that must exist first avoids the common stall at three people.

                ## Milestones
                1. A target team shape for two years ahead, with roles and qualifications.
                2. The order of hires agreed, each tied to a fee level that pays for it.
                3. Review responsibilities written so you are no longer the only reviewer.
                4. Workflow, review and deadline systems in place before the third hire.
                5. Your own time split between client work, review and management tracked each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written two-year team plan with hire triggers exists, and a second qualified reviewer is signing off work."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Sketch the team you want in two years"
                - "Tie each hire to the fee level that pays for it"
                - "Train a second person to review returns"
                - "Track your split of client, review and management time"
            - name: Running the firm part-time around caring duties
              description: |-
                ## Purpose
                Owners caring for young children, an ageing parent or their own health often keep the firm going by working nights through the season. Redesigning the firm around fewer, steadier hours, with a smaller client list, more recurring work, firm deadlines for records and clear cover, keeps it viable without burning out the person it depends on.

                ## Milestones
                1. The hours you can reliably work each week written down, including during the season.
                2. The client list trimmed or repriced to fit those hours.
                3. Records cut-off dates set and communicated to every client.
                4. A colleague or alternate arranged to cover planned and unplanned absence.
                5. A weekly check that the workload still fits.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly hours stay within the written limit for a full season, with no deadline missed and cover in place."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down the hours you can reliably give the firm"
                - "Trim or reprice clients to fit those hours"
                - "Set a firm records cut-off date for every client"
                - "Check the week's hours against your limit @recurring(weekly:fri)"
            - name: Engagement quality review for higher risk audits
              description: |-
                ## Purpose
                For listed or other public interest audits, and for audits the firm rates as high risk, quality standards generally require or recommend an independent engagement quality review before the report is signed. Setting up who can review, when they get involved and what they document makes the review a real challenge to key judgements rather than a late tick.

                ## Milestones
                1. Criteria written for which engagements need a quality review.
                2. A suitably experienced reviewer identified, inside the firm or appointed from outside.
                3. The reviewer involved at planning, not only at completion.
                4. Review documentation completed and cleared before the audit report is dated.

                ## Notes
                Small firms often appoint an external reviewer from another firm or a technical provider. Check independence and confidentiality terms before engaging them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every engagement meeting the written criteria has a documented quality review cleared before the audit report date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the criteria for engagements needing a quality review"
                - "Identify an internal or external quality reviewer"
                - "Book the reviewer in at the planning stage"
                - "Confirm review sign-off before any report is dated"
            - name: Root cause analysis of quality findings
              description: |-
                ## Purpose
                Fixing a finding on one file stops it once; finding why it happened stops it across the firm. Running a short root cause analysis on each significant finding from cold reviews, monitoring visits or complaints, asking whether the cause was training, time pressure, methodology or supervision, is what current quality standards expect and what mature firms do.

                ## Milestones
                1. A definition of which findings count as significant enough to analyse.
                2. A simple root cause template asking what happened, why, and why again.
                3. Each significant finding of the last year analysed.
                4. Remedial actions tied to causes, not symptoms, with owners and dates.
                5. A follow-up check that the actions worked.

                ## Notes
                Start from the **Compliance control** template to record each remedial action as a control and its evidence.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every significant quality finding in the year has a recorded root cause and a remedial action with an owner and a follow-up check."
                cadence: rolling
              tasks:
                - "Define which findings count as significant"
                - "Draft a root cause template with repeated why questions"
                - "Analyse each significant finding from the last year"
                - "Follow up remedial actions three months later"
            - name: Launching a specialist forensic or valuation service
              description: |-
                ## Purpose
                Established firms often add a specialist line such as forensic accounting, business valuation, insolvency or expert witness work, which pays well but carries different standards and liability. Checking the extra qualifications, insurance and independence rules, and testing demand with existing referrers, before announcing the service avoids an expensive false start.

                ## Milestones
                1. The specialist service chosen and the qualifications or licences it needs listed.
                2. Professional indemnity cover confirmed or extended for the new work.
                3. Demand tested with five referrers such as lawyers or banks.
                4. A separate engagement letter and quality procedure written for the service.
                5. A first engagement completed and reviewed by an experienced practitioner.

                ## Notes
                Insolvency work in many countries needs a personal licence, and expert witness work brings duties to the court. Check the rules with your professional body before taking instructions.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision to launch or not is recorded after checking qualifications, insurance and demand, and any launch has its own letter and quality procedure."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the qualifications and licences the specialist service needs"
                - "Ask your insurer whether current cover extends to it"
                - "Interview five referrers about demand"
                - "Draft a separate engagement letter for the service"
            - name: Exploring a merger with another small accounting firm
              description: |-
                ## Purpose
                Two small firms with ageing partners, overlapping clients or complementary service lines can each be stronger merged than apart. Exploring a merger properly means comparing client bases, quality records, systems, cultures and the partners' plans before any talk of terms, with legal and tax advice taken once it becomes serious.

                ## Milestones
                1. A confidentiality agreement signed before any client or financial information is shared.
                2. Client bases, service lines, fees per partner and quality findings compared side by side.
                3. Systems, methodology and staff terms compared, with the cost of combining them estimated.
                4. The partners' plans for the next five to ten years discussed openly.
                5. A decision recorded to proceed to terms with advisers, or to stop.

                ## Notes
                Professional indemnity history, outstanding claims and monitoring findings are as important as fees. Take legal and tax advice before agreeing any structure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to proceed to terms or stop, based on a written comparison of clients, quality, systems and partner plans."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Sign a confidentiality agreement with the other firm"
                - "Compare client bases, service lines and fees per partner"
                - "Compare quality findings and indemnity history"
                - "Discuss each partner's five to ten year plans"
---

# Owning an Accounting Firm

This area is for the owner of an accounting, tax or audit firm, from the sole practitioner with eighty clients to the partner group running a dozen staff, and for the founder about to open the doors. It starts with the foundations (a map of service lines, a census of the client portfolio, practising certificate rules, engagement letters, the deadline calendar, client acceptance and a written quality system), then the operating routines that move work through review and out of the door, the technical and client skills the firm depends on, the decisions about fees, audit work, outsourcing and niches, the dated events of the accounting year, the situations owners find themselves in, and finally the specialist work of an established firm.

What repeats is a Monday deadline huddle, a Friday sign-off queue check, a monthly cold file review, a monthly bookkeeping close for retained clients, a quarterly service line profitability review and the yearly cycle of records chasing, engagement letter refreshes, independence declarations and the practising certificate renewal. The Compliance control, Skills matrix, Onboarding plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
