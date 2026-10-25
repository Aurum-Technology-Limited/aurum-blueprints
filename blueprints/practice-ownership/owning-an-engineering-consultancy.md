---
id: practice-ownership.owning-an-engineering-consultancy
name: Owning an Engineering Consultancy
description: "Run an engineering consultancy as a business: disciplines and sign-off authority set, fee bids that price the real hours, indemnity in place, staff on the right jobs and cash that holds steady between commissions."
category: business
version: 1.0.0
tags: [practice-ownership, owning-an-engineering-consultancy, small-business, founder, engineer, fee-bids, professional-sign-off, resourcing]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - risk-register
    - metrics-log
    - compliance-control
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning an Engineering Consultancy
          description: "Running an engineering consultancy: disciplines offered, fee bids, professional sign-off, indemnity insurance, project staffing and steady cash between projects."
          projects:
            - name: Discipline and service line map of the firm
              description: |-
                ## Purpose
                Ask ten clients what your consultancy does and you will get ten answers, which is how firms drift into work nobody in the office is competent or insured to deliver. A one-page map of disciplines (structural, civil, building services, process, geotechnical) against services (feasibility, concept, detailed design, site supervision, inspections, reports) shows what you sell, who can deliver it and where you rely on a single person.

                ## Milestones
                1. A grid of disciplines against service types, each cell marked offered, subcontracted or declined.
                2. The named engineer able to lead each offered cell written beside it.
                3. Every cell that depends on one person flagged as a key-person risk.
                4. Last year's fee income split across the grid, even roughly.
                5. The map shared with directors and used as the reference for bid and no-bid calls.

                ## Notes
                Declining a service on paper is as useful as offering one. It gives staff a clear reason to say no to the client who asks for a quick drainage design from a structural-only office.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page grid of disciplines and services, with a named lead per offered cell and key-person risks flagged, is filed with the directors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every discipline and service the firm invoiced for last year"
                - "Draw the grid and mark each cell offered, subcontracted or declined"
                - "Name the lead engineer for every offered cell"
                - "Flag cells with only one competent person and note a backup plan"
            - name: Register of who can sign and seal what
              description: |-
                ## Purpose
                Professional sign-off is personal: a drawing or calculation stamped by someone not registered in that jurisdiction or discipline can void the approval, the insurance and the engineer's own standing with the regulator. A register of each engineer's registration number, discipline, jurisdictions, expiry date and any conditions makes it impossible to sign by accident outside someone's authority.

                ## Milestones
                1. Every registered engineer in the firm listed with registration number, body, discipline and expiry date.
                2. Jurisdictions where each person may seal drawings recorded, including any provisional or temporary licences.
                3. A rule written that no document leaves the office sealed unless the signatory appears in the register for that discipline and place.
                4. Copies of current certificates filed alongside the register.
                5. Expiry dates set as reminders at least three months ahead.

                ## Notes
                Rules on who may seal, and whether a firm needs its own authorisation, differ by country and sometimes by state or province. Check with each engineering regulator rather than assuming one country's rule applies elsewhere.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every signatory with number, discipline, jurisdictions and expiry, and certificates for each are filed with it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect registration certificates from every chartered or licensed engineer"
                - "Record discipline, jurisdiction and expiry for each in one sheet"
                - "Write the one-line sealing rule and send it to all staff"
                - "Verify each registration on the regulator's public register @recurring(yearly)"
            - name: Firm permit to practise as an engineering company
              description: |-
                ## Purpose
                Some regulators license the individual engineer only, while others also require the company offering engineering services to hold a certificate of authorisation, name a responsible engineer and display its number on drawings. Finding out which rules apply in each place you work, before a client's approvals officer asks, avoids rejected submissions and a possible offence.

                ## Milestones
                1. Each jurisdiction where the firm offers services listed with whether a firm-level permit is required.
                2. The firm's permit, or the regulator's written confirmation that none is needed, filed for each one.
                3. The responsible or designated engineer named for each permit, with their written acceptance.
                4. Title blocks and letterheads updated with any number the regulator requires.
                5. Permit renewal dates entered in the firm's compliance calendar.

                ## Notes
                Company and engineering registrations are separate from the business licence and the tax registration. Keep all four on the same compliance sheet so one renewal does not hide another.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For every jurisdiction worked in, a firm permit or written confirmation that none is needed is on file, with a named responsible engineer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the countries, states or provinces where the firm has active projects"
                - "Check each engineering regulator's rules on firms offering services"
                - "Apply for any missing firm permit or request written confirmation"
                - "Update title block templates with required permit numbers"
            - name: Standard terms of appointment for engineering services
              description: |-
                ## Purpose
                Signing whatever the client sends means accepting unlimited liability, fitness-for-purpose duties, copyright transfers and payment terms of ninety days, often for a fee that cannot carry any of them. A set of standard terms reviewed by a construction lawyer, with a short schedule for scope and fees, gives you a starting position and a clear list of clauses you will not accept.

                ## Milestones
                1. A standard terms document covering scope, fee basis, payment, liability cap, copyright and licence of drawings, suspension and termination.
                2. A one-page scope and fee schedule that attaches to the terms for each commission.
                3. A red-line list of clauses the firm will not accept without director approval, such as fitness for purpose or uncapped liability.
                4. The terms reviewed by a lawyer who works in construction and professional services.
                5. The terms sent with every fee proposal from a set date.

                ## Notes
                Industry model forms exist, such as the FIDIC client and consultant agreement or a professional services contract from the NEC family. Many firms use one as the base rather than drafting from scratch. Your broker can tell you which clauses your indemnity policy does not cover.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lawyer-reviewed standard terms, a fee schedule and a red-line clause list exist, and every proposal sent after a stated date includes them."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Gather the last five client appointments the firm signed"
                - "Mark every clause on liability, copyright, payment and fitness for purpose"
                - "Brief a construction lawyer to review or draft the standard terms"
                - "Ask your broker which red-line clauses the indemnity policy excludes"
                - "Add the terms to the fee proposal template"
            - name: Cash runway and monthly overhead floor
              description: |-
                ## Purpose
                Engineering fees arrive in lumps tied to design stages, while salaries, software subscriptions and rent leave every month, so a gap of six weeks between commissions can empty the account. Knowing the exact monthly overhead floor and how many months of it the firm holds in cash tells you when to chase work hard and when you can afford to turn down a poor job.

                ## Milestones
                1. Every fixed monthly cost listed: salaries and employer costs, rent, software, insurance premium spread monthly, loan repayments.
                2. The overhead floor, the cash needed per month with zero fee income, calculated.
                3. Runway in months worked out from cash at bank plus invoices due within thirty days.
                4. A minimum runway target agreed by the directors, for example three months.
                5. The figures dated and shared with your accountant.

                ## Notes
                Spread annual costs such as indemnity premiums and software renewals into monthly amounts. They are the bills that catch firms out in a quiet quarter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated sheet shows the monthly overhead floor, runway in months and the directors' agreed minimum runway target."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the last twelve months of outgoings from the accounting software"
                - "Total fixed monthly costs and spread annual bills across the year"
                - "Divide current cash plus near-term receipts by the monthly floor"
                - "Agree a minimum runway target at the next directors' meeting"
            - name: Cost rates and charge-out rates by grade
              description: |-
                ## Purpose
                Charge-out rates copied from a competitor's tender, or unchanged for four years, are the most common reason a busy consultancy makes no money. Building each grade's cost rate from salary, employer costs, overhead share and realistic chargeable hours, then adding margin, gives rates you can defend in a fee negotiation and know you can afford to discount.

                ## Milestones
                1. Each grade's annual employment cost calculated, including employer taxes, pension and benefits.
                2. Realistic chargeable hours per grade set, after leave, training, bidding and admin.
                3. Overhead per chargeable hour worked out and added to each grade's cost rate.
                4. Charge-out rates set at a stated margin above cost and approved by the directors.
                5. A floor rate per grade written down, below which discounts need director sign-off.

                ## Notes
                Directors rarely bill more than half their hours once bidding and management are counted. Pricing them as if they bill full time hides a loss in every lump-sum fee.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rate sheet shows cost rate, charge-out rate and discount floor for every grade, approved by the directors with a review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull salary and employer cost figures for each staff grade"
                - "Estimate chargeable hours per grade from last year's timesheets"
                - "Build the cost rate and charge-out rate table with a margin column"
                - "Review charge-out rates against cost and inflation before the new financial year @recurring(yearly)"
            - name: Drawing numbering and document control system
              description: |-
                ## Purpose
                Two engineers issuing revision C of the same drawing with different content, or a contractor building from a superseded sketch, is how a small office ends up in a claim. One numbering convention, a revision and status code system, a single issue register per project and a rule that nothing leaves except through it closes that gap for very little effort.

                ## Milestones
                1. A numbering convention covering project, discipline, document type and sequence number.
                2. Revision and status codes defined, separating preliminary, for comment, for approval and for construction.
                3. A transmittal and issue register template saved in every new project folder.
                4. A rule agreed that drawings leave only by transmittal, never as loose email attachments.
                5. Existing live projects moved onto the system.

                ## Notes
                Align with the information management standard your larger clients ask for, such as one from the ISO 19650 family, rather than inventing a parallel scheme you will have to translate later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written numbering and status code convention is in use, and every live project has an issue register that matches what was sent out."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the numbering convention on one page with three worked examples"
                - "Define revision and status codes and add them to title blocks"
                - "Create the transmittal and issue register template"
                - "Spot check two live projects' issue registers against sent emails @recurring(quarterly)"
            - name: Professional indemnity cover for design work
              description: |-
                ## Purpose
                Clients on larger jobs will ask for a stated indemnity limit, often each and every claim, plus collateral warranties to funders and tenants, and a policy bought on price alone may not match either. Setting the cover with a broker who places engineering risks, against the kind of work you actually do, protects the firm from the one design error that could close it.

                ## Milestones
                1. The firm's work profile written up: disciplines, project types, largest contract value, any design and build or overseas work.
                2. Typical limits and terms demanded by current and target clients listed.
                3. Quotes obtained through a broker familiar with engineering consultancies.
                4. A policy in place with the limit basis, excess and key exclusions noted in plain words.
                5. A one-page summary staff can check before agreeing indemnity terms in a contract.

                ## Notes
                Ask the broker plainly about fitness-for-purpose obligations, net contribution clauses, work in other countries and run-off cover if the firm ever closes. Do not agree contract terms that go beyond the policy without telling them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A professional indemnity policy matched to the firm's work profile is bound, with a one-page summary of limit, basis, excess and exclusions filed for staff."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a half-page profile of the firm's work types and largest projects"
                - "List indemnity limits required in the last ten appointments or tenders"
                - "Ask a specialist broker for quotes against that profile"
                - "Summarise the bound policy on one page for project leads"
            - name: Site visit safety rules for the office
              description: |-
                ## Purpose
                Engineers visit live construction sites, plant rooms, roofs, culverts and process facilities, often alone and often at short notice, and a consultancy owes its staff the same care a contractor does. Written rules on personal protective equipment, site inductions, lone working, confined spaces and the right to walk away turn safety from personal habit into a firm standard.

                ## Milestones
                1. A site visit procedure covering booking in, induction, protective equipment and leaving the site.
                2. A lone working rule with a check-in and check-out arrangement.
                3. A list of activities staff must never do without specific training and a permit, such as confined space entry or work at height.
                4. A written statement that any engineer may stop or leave a visit they judge unsafe, without blame.
                5. Every engineer briefed and kitted, with a signed record kept.

                ## Notes
                Stop-work authority means little if a director grumbles about a wasted trip. Say in the procedure that an abandoned unsafe visit is the correct outcome and will be billed or rebooked like any other.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written site visit procedure with lone working and stop-work rules exists, and every engineer who visits sites has signed to say they were briefed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the types of site staff visited in the last six months"
                - "Draft the site visit and lone working procedure"
                - "Buy or replace protective equipment for every site-going engineer"
                - "Review near misses and site visit incidents with the team @recurring(quarterly)"
            - name: Monday resourcing meeting and staffing plan
              description: |-
                ## Purpose
                In most consultancies the same three engineers are overloaded while a graduate waits for work, and nobody sees it until a deadline is missed. A thirty-minute Monday meeting over a simple eight-week staffing chart, person by project by week, catches clashes early and shows when the firm needs to bid harder or hire.

                ## Milestones
                1. A staffing chart showing each person's planned hours per project for the next eight weeks.
                2. Project leads updating their rows before the meeting each week.
                3. Overloads above an agreed level and gaps below it highlighted automatically.
                4. Decisions from each meeting, such as reassignments or overtime approvals, recorded in two lines.
                5. Staff told by Monday lunchtime what they are working on that week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An eight-week staffing chart is updated every week and each Monday meeting leaves a short written record of reassignments."
                cadence: rolling
              tasks:
                - "Build an eight-week staffing chart with one row per person"
                - "Ask each project lead to fill in their team's planned hours"
                - "Run the thirty-minute resourcing meeting over the chart @recurring(weekly:mon)"
                - "Tell each engineer their priorities for the week by lunchtime"
            - name: Monthly fee burn review on every live project
              description: |-
                ## Purpose
                Lump-sum engineering fees are usually lost slowly, a few unplanned hours a week, and the overrun is only discovered when the fee is spent and the drawings are half done. Comparing hours and fee spent against percentage complete on every live project each month gives the project lead time to raise a variation, change approach or warn the client.

                ## Milestones
                1. Each live project showing fee agreed, fee spent to date and the lead's honest estimate of percentage complete.
                2. Projects where spend runs ahead of progress by more than an agreed margin flagged.
                3. A recovery note for each flagged project: a variation, a resourcing change or an accepted loss.
                4. The month's figures kept in one log so trends are visible across the year.

                ## Notes
                Start from the **Metrics log** template. Ask the lead for percentage complete before they see the spend figure, or the two will quietly agree.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live project has fee spent and percentage complete logged each month, with a recovery note against any project overrunning."
                cadence: rolling
              tasks:
                - "Export hours and cost to date per project from the timesheet system"
                - "Ask each project lead for percentage complete before sharing spend @recurring(monthly:8)"
                - "Flag projects where spend outruns progress by the agreed margin"
                - "Write a recovery note for each flagged project"
            - name: Bid pipeline and bid or no-bid decisions
              description: |-
                ## Purpose
                Small consultancies often bid for everything that arrives and win one in six, spending more on unpaid proposals than on marketing. A weekly pipeline of every opportunity with its value, deadline, win probability and a quick bid or no-bid score lets directors spend proposal time where the firm actually wins.

                ## Milestones
                1. A pipeline log with client, project, discipline, estimated fee, deadline and stage for every opportunity.
                2. A bid or no-bid score sheet with five or six criteria, such as client relationship, fit with the service map and competition.
                3. Each opportunity scored and decided within a week of arrival.
                4. Win rate and proposal hours tracked by client type over the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every opportunity received is in the pipeline log with a recorded bid or no-bid decision, and win rate is reported at least quarterly."
                cadence: rolling
              tasks:
                - "List every enquiry and tender from the last three months in one log"
                - "Write a six-criterion bid or no-bid score sheet"
                - "Score new opportunities and record the decision @recurring(weekly:thu)"
                - "Calculate win rate by client type from last year's bids"
            - name: Stage invoicing tied to design milestones
              description: |-
                ## Purpose
                Engineers finish a design stage, move straight on to the next and forget to invoice, so fees earned in March are billed in June and paid in August. Linking every invoice to a defined stage or monthly percentage in the appointment, and raising it on a fixed day, shortens the gap between work done and cash received.

                ## Milestones
                1. Every live appointment's payment basis summarised: stages, monthly percentages or time charge.
                2. A fixed monthly invoicing day agreed, with project leads confirming stage completion beforehand.
                3. Invoices that reference the appointment, the stage and any purchase order the client requires.
                4. Overdue invoices chased in a set sequence, with suspension rights noted where the contract gives them.

                ## Notes
                Many clients reject invoices without their purchase order number or approved form. Collect those details at appointment, not when the invoice bounces.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All live projects are invoiced on the agreed day each month against a named stage or percentage, and overdue invoices follow a recorded chasing sequence."
                cadence: rolling
              tasks:
                - "Summarise payment terms for every live appointment on one sheet"
                - "Ask project leads to confirm stages reached @recurring(monthly:22)"
                - "Raise all stage and time-charge invoices @recurring(monthly:25)"
                - "Collect purchase order numbers for every live project that needs one"
            - name: Independent design check and sign-off procedure
              description: |-
                ## Purpose
                Most design errors that become claims would have been caught by a second engineer reading the calculation with fresh eyes. A written procedure that sets the level of check by risk category, from a self-check on a lintel to an independent analysis on a long-span structure, and records who checked what before sign-off, is the core of a consultancy's quality.

                ## Milestones
                1. Design check categories defined by risk, with the checker's minimum grade and independence for each.
                2. A check record form for calculations and drawings, signed by designer and checker.
                3. A rule that no document is issued for construction without a completed check record.
                4. A monthly sample of issued packages audited against the procedure, with findings logged.

                ## Notes
                For high-risk categories the checker should not use the designer's software model. An independent check repeats the key load paths by a different method.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written check procedure with risk categories is in force, and a monthly sample of issued packages is audited with results logged."
                cadence: rolling
              tasks:
                - "Draft check categories with the minimum checker grade for each"
                - "Create a one-page check record form for calculations and drawings"
                - "Brief all engineers that construction issues need a completed check record"
                - "Audit two issued packages against the check procedure @recurring(monthly:12)"
            - name: Scope change and variation log for every commission
              description: |-
                ## Purpose
                Clients add a basement, swap the roof form or ask for a third design option, and engineers absorb it to be helpful until the fee is gone. A variation log on every job, with each change recorded the week it happens and a short notice to the client, turns goodwill into either paid work or an explicit, recorded favour.

                ## Milestones
                1. A variation log template in every project folder: date, instruction, who gave it, estimated hours and status.
                2. A short variation notice the project lead can send within a week of any change.
                3. Every live project's log reviewed weekly by its lead.
                4. Agreed variations added to the next invoice, and declined ones recorded as such.

                ## Notes
                Notify before doing the work where you can. A notice sent after the design is issued is far harder to get paid.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live project has a variation log reviewed weekly, and each recorded change has a notice sent and a status of agreed, declined or pending."
                cadence: rolling
              tasks:
                - "Create the variation log and notice templates"
                - "Back-fill logs for live projects with changes from the last two months"
                - "Review each project's variation log with its lead @recurring(weekly:wed)"
                - "Ask the agent to draft variation notices from the log entries"
            - name: Thirteen-week cash forecast for the consultancy
              description: |-
                ## Purpose
                A profit and loss account tells you last quarter was good; it does not tell you whether payroll clears in seven weeks when two large clients pay late. A rolling thirteen-week forecast of expected receipts by invoice and committed outgoings by week, updated every Friday, gives early warning of a gap while there is still time to chase, draw on a facility or delay a hire.

                ## Milestones
                1. A thirteen-week sheet with expected receipts per invoice and fixed outgoings per week.
                2. Receipts dated by each client's real payment habit, not the contract terms.
                3. A minimum cash line drawn from the runway target.
                4. Any week projected below the line triggering a named action.

                ## Notes
                Keep a column for each large client. When one slips, the whole forecast shifts, and you want to see it at once.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A thirteen-week forecast is updated every week, and any projected dip below the minimum cash line has a named action recorded."
                cadence: rolling
              tasks:
                - "List every unpaid invoice with the date each client usually pays"
                - "Set out fixed weekly outgoings for the next thirteen weeks"
                - "Roll the forecast forward and compare with actual cash @recurring(weekly:fri)"
                - "Record an action for any week projected below the minimum line"
            - name: Technical query and RFI response turnaround
              description: |-
                ## Purpose
                During construction, contractors' requests for information land on the design engineer daily, and a slow answer becomes a delay claim with your name on it. A register of every query, its date in, the person answering and the date out, with a target turnaround, keeps the site moving and gives you evidence if delays are later disputed.

                ## Milestones
                1. An RFI and technical query register on every project in construction.
                2. A target response time agreed with each client or contractor and written into the register.
                3. Queries that need a design change routed through the variation log.
                4. Monthly turnaround figures reviewed and slow responses traced to a cause.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every project on site has a query register with dates in and out, and monthly turnaround against target is reviewed and recorded."
                cadence: rolling
              tasks:
                - "Set up a query register on each project currently on site"
                - "Agree a target response time with each contractor or client"
                - "Link design-change queries to the project's variation log"
                - "Review query turnaround figures across all sites @recurring(monthly:15)"
            - name: Design software and spreadsheet validation register
              description: |-
                ## Purpose
                Analysis packages, in-house spreadsheets and code-checking tools all produce numbers that end up sealed, and an unvalidated macro or an expired licence can quietly corrupt a whole season's designs. A register of every tool, its version, owner, licence renewal and the validation evidence behind it is what a reviewer or insurer will ask for after an incident.

                ## Milestones
                1. Every analysis package, design spreadsheet and calculation tool listed with version and owner.
                2. Validation evidence for each in-house spreadsheet: hand-checked example, reviewer and date.
                3. Licence renewal dates and seat counts recorded.
                4. A rule that unregistered spreadsheets are not used for issued calculations.
                5. The register reviewed each quarter, including after software updates.

                ## Notes
                Lock formula cells in validated spreadsheets and put the version number in the printout footer, so a reviewer can tell which version produced a calculation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every design tool with version, owner and validation evidence, and has a recorded review each quarter."
                cadence: rolling
              tasks:
                - "Ask every engineer to list the spreadsheets and packages they use for design"
                - "Record version, owner and licence renewal date for each tool"
                - "Hand-check one worked example for each in-house spreadsheet"
                - "Review the register after updates and renewals @recurring(quarterly)"
            - name: Order book and weeks of secured work
              description: |-
                ## Purpose
                Partners in a consultancy feel busy right up until the month the work runs out, because current workload hides an empty pipeline behind it. Measuring the order book, the unearned fee on signed commissions, and converting it to weeks of work for the current team gives a leading figure that tells you when to sell, hire or slow down.

                ## Milestones
                1. Unearned fee on every signed commission totalled on the first working days of each month.
                2. The order book converted to weeks of work at the team's current chargeable capacity.
                3. A target band agreed, for example twelve to twenty-six weeks.
                4. Three months of readings plotted to show the trend.

                ## Notes
                Count only signed or formally instructed work. Verbal promises belong in the bid pipeline, weighted by probability, not in the order book.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The order book in fee and in weeks of work is recorded every month against an agreed target band."
                cadence: rolling
              tasks:
                - "List every signed commission with fee agreed and fee earned to date"
                - "Work out the team's chargeable hours per week at full staffing"
                - "Calculate order book weeks and record them in the log @recurring(monthly:3)"
                - "Agree a target band for weeks of secured work with the directors"
            - name: Writing fee proposals that win on quality
              description: |-
                ## Purpose
                Quality-scored tenders are won on methodology, programme and named team, yet many engineering proposals are a generic firm brochure with a price stapled on. Learning to write a proposal that restates the client's problem, sets out a specific approach and risks, names the people and shows a believable programme lifts win rates more than cutting fees.

                ## Milestones
                1. Three won and three lost proposals reread, with any evaluator feedback collected.
                2. A proposal structure saved: understanding of the brief, methodology, risks and how you will manage them, programme, team and fee.
                3. A library of current CVs and project sheets tailored by discipline and sector.
                4. Two live proposals written to the new structure and reviewed by a second director.
                5. Evaluator scores from those bids recorded against the old average.

                ## Notes
                Ask for a debrief on every lost public tender. Evaluators often say exactly which section lost marks.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A proposal structure and CV library exist, two proposals have been written to it, and their scores are compared with the previous average."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Reread three won and three lost proposals with any feedback"
                - "Write the six-section proposal structure as a template"
                - "Update CVs and project sheets for every senior engineer"
                - "Request a debrief on the most recent lost tender"
            - name: Estimating design hours from a deliverables list
              description: |-
                ## Purpose
                Fees guessed as a percentage of construction cost or by gut feel ignore the real driver of effort: the number of drawings, calculations, reports and meetings the commission needs. Building estimates bottom-up from a deliverables list, with hours per item taken from your own past projects, produces fees you can explain line by line when a client pushes back.

                ## Milestones
                1. Hours per typical deliverable gathered from timesheets on five completed projects.
                2. A standard estimating sheet listing deliverables, meetings, site visits and checks with default hours.
                3. Contingency and risk allowance shown as a separate line, not buried in the rates.
                4. Three new fee bids estimated on the sheet and compared with the old method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An estimating sheet with default hours per deliverable, built from at least five past projects, has been used on three bids."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull timesheet hours by deliverable from five completed projects"
                - "Build the estimating sheet with default hours per item"
                - "Add separate contingency and risk lines to the sheet"
                - "Estimate the next three bids on the sheet and note differences"
            - name: Reading consultancy contracts before signing
              description: |-
                ## Purpose
                Directors who sign appointments without reading the liability, indemnity, warranty and payment clauses carry risks their insurer will not cover. Learning to read an appointment against your standard terms and red-line list, and knowing which points need a lawyer, makes contract review a routine thirty-minute check rather than an expensive afterthought.

                ## Milestones
                1. A checklist of the clauses to read in every appointment: scope, standard of care, liability cap, indemnities, warranties, copyright, payment, suspension and termination.
                2. Three recent appointments marked up against the checklist for practice.
                3. A rule on which deviations need lawyer or broker review before signature.
                4. Every new appointment over an agreed fee checked against the list before signing.

                ## Notes
                This is organisational, not legal advice. The checklist tells you what to look for and when to call your lawyer; it does not replace them on unusual terms.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clause checklist exists, three appointments have been marked up against it, and new appointments above an agreed fee are checked before signing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the clause checklist on one page"
                - "Mark up three recent appointments against it"
                - "Agree with your lawyer which deviations need their review"
                - "Ask the agent to compare a new appointment with your standard terms"
            - name: Design responsibility matrix and interface coordination
              description: |-
                ## Purpose
                On multi-consultant projects the costliest gaps sit between disciplines: who sizes the plant room openings, who designs the temporary works, who checks the precast connections. A design responsibility matrix agreed at the start, then a weekly coordination slot that walks the open interfaces, keeps those gaps from becoming site problems blamed on the engineer.

                ## Milestones
                1. A matrix for each multi-consultant project listing elements against designers, with lead and contributing roles.
                2. Elements nobody owns raised with the client in writing before design starts.
                3. A weekly interface coordination slot with open items tracked to closure.
                4. Changes to responsibility recorded and reflected in the variation log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each multi-consultant project has an agreed design responsibility matrix and a weekly interface list with every open item dated and owned."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a responsibility matrix for the largest current multi-consultant job"
                - "Send unowned elements to the client in writing"
                - "Walk open interface items with the design team @recurring(weekly:tue)"
                - "Save the matrix as a template for future projects"
            - name: Reading the consultancy's own financial ratios
              description: |-
                ## Purpose
                Engineering firm owners usually know their turnover and little else, yet a handful of ratios decide whether the firm is healthy: utilisation, net multiplier on salary cost, overhead rate, debtor days and profit per head. Learning what each means, how to calculate it from your accounts and what a sensible range looks like lets you ask your accountant better questions.

                ## Milestones
                1. Five ratios defined in plain words with the formula for each.
                2. Each ratio calculated from last year's accounts and timesheets.
                3. Any ratio far outside your expectations explained in a sentence, with your accountant's input.
                4. Two ratios chosen as targets for the coming year.

                ## Notes
                Industry surveys of design consultancies publish typical ranges; your accountant or a professional association can usually point to one. Use them as context, not as targets to copy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five consultancy ratios are defined, calculated from last year's figures and discussed with the accountant, with two chosen as targets."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write definitions for utilisation, net multiplier, overhead rate, debtor days and profit per head"
                - "Calculate each ratio from last year's accounts"
                - "Ask your accountant to sense-check the results"
                - "Pick two ratios to improve this year"
            - name: Delegating technical work as a director
              description: |-
                ## Purpose
                Founders who still run every calculation become the bottleneck, the single point of failure and the most expensive hour on every job. Learning to delegate a defined design package with a clear brief, agreed check points and a review rather than a rewrite frees director time for clients, bids and staff without lowering the technical standard.

                ## Milestones
                1. A list of the technical tasks the director did last month, marked by who else could do them.
                2. Three packages delegated with written briefs and agreed review points.
                3. Reviews done against the brief and the check procedure, with comments returned for the engineer to fix.
                4. Hours the director saved recorded and moved to business development or management.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three design packages have been delegated with written briefs, reviewed at agreed points, and the director's freed hours recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every technical task you did in the last month"
                - "Mark which could be done by someone else with a brief"
                - "Write a one-page brief for the first delegated package"
                - "Return review comments for the engineer to fix rather than redoing the work"
            - name: Choosing the fee basis for each commission
              description: |-
                ## Purpose
                Lump sums, time charges, percentage of construction cost and capped time charges each move risk between the firm and the client, and choosing one by habit means carrying risk you have not priced. A short decision guide on which basis suits which kind of job, such as time charge for investigations and lump sum for well-defined detailed design, makes the choice deliberate.

                ## Milestones
                1. The four common fee bases described in a paragraph each, with who carries the risk.
                2. A guide matching project types to a preferred basis.
                3. Last year's projects reviewed for which basis lost or made money.
                4. The guide adopted by the directors and referred to in the bid process.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fee basis guide, informed by last year's project margins, is approved by the directors and referenced in bids."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List last year's projects with fee basis and final margin"
                - "Note which fee bases lost money and on which project types"
                - "Write the one-page fee basis guide"
                - "Add the guide to the bid or no-bid score sheet"
            - name: Adding a new engineering discipline
              description: |-
                ## Purpose
                Clients increasingly want one consultancy for structures, civils and building services, and adding a discipline can lift fee per project and win rate. It also brings new indemnity exposure, a senior hire who must be registered and able to sign, and months before the new team pays for itself, so the case needs testing first.

                ## Milestones
                1. Demand evidence gathered: how many lost or subcontracted jobs needed the discipline last year.
                2. A cost model for the first two years, including a senior hire, software and insurance changes.
                3. Your broker's view on the effect on cover and premium.
                4. A go, wait or no decision recorded by the directors, with the conditions for revisiting it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-year cost and demand case for the new discipline exists and the directors' decision is recorded with conditions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count last year's jobs lost or subcontracted for lack of the discipline"
                - "Model two years of costs for a senior hire and support"
                - "Ask your broker how adding the discipline changes the policy"
                - "Present the case and record the directors' decision"
            - name: Subconsultant appointments for specialist work
              description: |-
                ## Purpose
                Geotechnical investigation, surveying, fire engineering and acoustics are often bought in, and a subconsultant on a handshake leaves the firm carrying their liability under its own appointment. Placing specialists on written terms that mirror the head appointment, with their indemnity checked, protects the firm when a site investigation proves wrong.

                ## Milestones
                1. A list of regular subconsultants with their discipline, indemnity limit and expiry.
                2. A standard subconsultant agreement that passes down the head appointment's key obligations.
                3. Indemnity certificates collected and dated for every active subconsultant.
                4. Performance notes kept on each after every job.

                ## Notes
                Start from the **Vendor** template. Your lawyer can advise how far the subconsultant terms should mirror the head appointment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active subconsultant is on written terms that mirror the head appointment and has a current indemnity certificate on file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every subconsultant used in the last two years"
                - "Request current indemnity certificates from each"
                - "Ask your lawyer for a back-to-back subconsultant agreement"
                - "Record a short performance note after each subconsultant job"
            - name: Choosing the BIM and design software stack
              description: |-
                ## Purpose
                Analysis, drafting and modelling licences can cost more per engineer than the office rent, and the wrong choice locks the firm out of clients who require a particular model format. Comparing two or three stacks against the file formats your clients demand, your staff's skills and the total cost over three years avoids a purchase you regret at renewal.

                ## Milestones
                1. Client file format and information requirements gathered from current and target clients.
                2. Two or three candidate stacks compared on capability, interoperability, training need and three-year cost.
                3. A trial run on a real small project with the leading option.
                4. A purchase or subscription decision recorded with the reasons.

                ## Notes
                Start from the **Purchase decision** template. Price the training time as well as the licences; a new modelling package can cost a team weeks of slower output.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the software stack, based on a comparison of at least two options and a trial on a live project."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the model formats current clients require"
                - "Compare two or three software stacks on a three-year cost sheet"
                - "Run a trial on one small live project"
                - "Record the decision and renewal dates"
            - name: Getting onto public sector frameworks
              description: |-
                ## Purpose
                Government agencies, utilities and large estates buy much of their engineering through frameworks and prequalified lists, and a firm that is not on them cannot even be invited. Preparing the standard evidence once, such as accounts, insurance, quality, safety and case studies, then targeting the frameworks that fit your service map, opens a steady pipeline of call-off work.

                ## Milestones
                1. Frameworks and approved lists relevant to your disciplines and region identified, with renewal dates.
                2. A prequalification pack assembled: accounts, insurance certificates, policies, case studies and CVs.
                3. Applications submitted to the two or three best-fit frameworks.
                4. Results and evaluator feedback recorded for the next round.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete prequalification pack exists and applications to at least two frameworks have been submitted, with outcomes recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Search public procurement portals for engineering frameworks in your region"
                - "List each framework's renewal date and entry requirements"
                - "Assemble the standard prequalification evidence pack"
                - "Submit applications to the two best-fit frameworks"
            - name: Quality management certification decision
              description: |-
                ## Purpose
                Larger clients and frameworks often ask whether the firm holds certification to a quality management standard such as ISO 9001, and saying no can cost points or entry. Certification also takes months of documentation and an annual audit fee, so deciding with evidence, and building the system on what you already do, matters more than a rush to get the badge.

                ## Milestones
                1. Tenders and clients that asked for certification in the last two years counted.
                2. Existing procedures, such as design checks, document control and complaints, mapped against the standard's main clauses.
                3. Quotes from two certification bodies obtained.
                4. A decision recorded and, if yes, a gap closure plan with a target audit date.

                ## Notes
                Start from the **Compliance control** template. A small firm's quality manual can be short; auditors look for evidence that you follow your own procedures.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded certification decision based on client demand and a gap analysis, with a dated plan if the answer is yes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count recent tenders that asked about quality certification"
                - "Map current procedures against the standard's main clauses"
                - "Request quotes from two certification bodies"
                - "Record the decision and any gap closure plan"
            - name: Post-project review of lump-sum overruns
              description: |-
                ## Purpose
                Every consultancy has a handful of projects that ran far past their fee, and the same causes usually repeat: vague briefs, too many design options, late architect changes. Reviewing the five worst overruns of the last two years for root causes, then changing proposals and contracts to match, stops the firm funding the same mistake again.

                ## Milestones
                1. The five largest fee overruns of the last two years identified with hours over budget.
                2. A root cause recorded for each, separating estimate error, scope creep and inefficiency.
                3. Three changes agreed to proposals, terms or project start-up as a result.
                4. The changes added to the estimating sheet and proposal template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Root causes for the five worst overruns are recorded, and three resulting changes have been made to estimating or proposal templates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rank last two years' projects by hours over fee budget"
                - "Interview each project lead about the cause of the overrun"
                - "Group causes into estimate error, scope creep and inefficiency"
                - "Update the estimating sheet with the three agreed changes"
            - name: Safety in design and designer's risk register
              description: |-
                ## Purpose
                In many countries the designer has legal duties to eliminate or reduce construction, maintenance and demolition hazards where reasonably practicable, and to tell others about the risks that remain. A designer's risk register on every project, and a habit of reviewing it at each design stage, meets those duties and shows the regulator or a court that the firm thought about the people who build and maintain its work.

                ## Milestones
                1. The firm's understanding of designer duties in each jurisdiction written up, confirmed with a safety adviser.
                2. A designer's risk register template with hazard, design response and residual risk columns.
                3. A register opened on every live project and reviewed at each stage gate.
                4. Residual risks passed to the client and contractor in writing.

                ## Notes
                Start from the **Risk register** template. Record significant, unusual risks; a register full of generic warnings about working at height helps nobody.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live project has a designer's risk register reviewed at its latest stage, with residual risks issued in writing to the client and contractor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check designer duties in each jurisdiction with a safety adviser"
                - "Create the designer's risk register template"
                - "Open a register on each live project with its lead"
                - "Issue residual risk information to clients on projects at tender stage"
            - name: Annual indemnity insurance renewal submission
              description: |-
                ## Purpose
                Renewal proposal forms ask for fee income by discipline and project type, overseas work, the largest contracts, claims and circumstances, and vague answers cost premium or leave the policy open to dispute. Preparing the submission from your own records six weeks before expiry, with every circumstance properly notified, gives your broker room to negotiate and keeps cover continuous.

                ## Milestones
                1. Fee income for the year split by discipline, project type and country.
                2. Any claims, complaints or circumstances that could become claims listed and checked as notified.
                3. Changes in the firm, such as new disciplines, design and build work or overseas projects, described.
                4. The proposal form submitted to the broker at least six weeks before expiry.
                5. The renewed policy summary updated and reissued to project leads.

                ## Notes
                Notify circumstances when you become aware of them, not at renewal. A late notification is one of the most common reasons claims are disputed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The renewal proposal is with the broker six weeks before expiry, every known circumstance is notified, and the new policy summary is reissued."
                cadence: cyclic
              tasks:
                - "Split the year's fee income by discipline, project type and country"
                - "List complaints and circumstances and confirm each was notified"
                - "Send the renewal proposal to the broker six weeks before expiry @recurring(yearly)"
                - "Reissue the one-page policy summary to project leads"
            - name: Major tender submission and interview
              description: |-
                ## Purpose
                A commission large enough to change the firm's year usually comes through a formal tender with a quality submission, a fee schedule and a shortlist interview, all on fixed dates. Running it as a dated project, with a bid manager, a writing plan, a review deadline two days before submission and a rehearsed interview team, avoids the all-nighter that loses marks on careless errors.

                ## Milestones
                1. A bid plan with every section owner, word limit and an internal deadline two working days before submission.
                2. A fee build-up checked by a second director against the estimating sheet.
                3. The full submission reviewed against the evaluation criteria and submitted early.
                4. The interview team rehearsed at least twice with likely questions.
                5. A debrief requested and the lessons recorded, win or lose.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tender is submitted before the deadline after an internal review, the interview is rehearsed twice, and a debrief is recorded."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the bid plan with section owners and internal deadlines"
                - "Build and second-check the fee on the estimating sheet"
                - "Book two interview rehearsals with a colleague playing the panel"
                - "Request the evaluator debrief after the result"
            - name: Year-end close-out and design archive
              description: |-
                ## Purpose
                Claims against engineers can arrive many years after completion, and the defence depends on finding the issued calculations, check records and correspondence for that exact revision. Closing out finished projects once a year, archiving the final design record in a format that will still open in a decade and noting the retention date, protects the firm long after the team has moved on.

                ## Milestones
                1. Projects completed in the year listed with their final issued revisions.
                2. Calculations, check records, transmittals and key correspondence archived per project in a long-lasting format.
                3. A retention date set for each, based on the limitation advice from your lawyer or insurer.
                4. Working folders tidied or removed so only the archive is the record.

                ## Notes
                Archive calculation outputs as PDF alongside the native files. Software versions change and native models may not reopen years later.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every project completed in the year has a final design record archived with a retention date, and working folders are closed."
                cadence: cyclic
              tasks:
                - "List projects completed this year with final revision numbers"
                - "Export calculations and check records to PDF for each"
                - "Ask your lawyer or insurer how long design records should be kept"
                - "Archive completed projects and set retention dates @recurring(yearly)"
            - name: Client or certification audit of the practice
              description: |-
                ## Purpose
                Framework clients, certification bodies and large asset owners audit their consultants against quality, safety and information management requirements, and a poor audit can suspend call-off work. Preparing as a dated event, with evidence gathered against the audit scope and a mock walk-through, turns it from an ordeal into a confirmation of what the firm already does.

                ## Milestones
                1. The audit scope, criteria and date confirmed in writing.
                2. Evidence for each criterion gathered in one folder: procedures, sample check records, training records, registers.
                3. A mock audit run by a director not involved in the evidence.
                4. Findings from the real audit logged with owners and close-out dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit is completed with every finding logged, owned and given a close-out date within two weeks of the visit."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the audit scope and criteria with the auditor"
                - "Gather evidence for each criterion into one folder"
                - "Run a mock audit with a director outside the preparation"
                - "Log every finding with an owner and close-out date"
            - name: Kick-off for a new major commission
              description: |-
                ## Purpose
                The first two weeks of a large commission decide whether it runs to fee: a clear brief, an agreed programme, named contacts and a confirmed scope prevent most of the later disputes. A structured internal and client kick-off, held before any design starts, sets those foundations and gives the project lead a record to point to when the brief moves.

                ## Milestones
                1. An internal kick-off held with the fee estimate, scope, programme and risk register in front of the team.
                2. A client kick-off held, with brief, programme, information needed and communication routes confirmed.
                3. Minutes issued to the client within two working days.
                4. Missing information listed with dates by which the client will supply it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Internal and client kick-offs are held before design starts, and minutes listing scope, programme and missing information are issued within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the internal kick-off with the project team"
                - "Prepare a one-page scope and programme summary for the client meeting"
                - "Hold the client kick-off and agree information dates"
                - "Issue kick-off minutes to the client within two working days"
            - name: Leaving an employer to start your own consultancy
              description: |-
                ## Purpose
                Most engineering consultancies begin when a senior engineer leaves a larger firm with a few loyal clients and a clause in their contract they have never read. Planning the exit around notice periods, restrictive covenants, your own registration, indemnity cover from day one and the first two or three commissions avoids a dispute with the old employer and an empty first quarter.

                ## Milestones
                1. Your employment contract's notice period, non-solicitation and non-compete clauses reviewed with an employment lawyer.
                2. Personal registration, firm registration and indemnity cover arranged to start on the first trading day.
                3. Six months of personal and business costs saved or financed.
                4. Two or three prospective clients identified who you may lawfully approach.
                5. A trading start date set and the resignation timed to match.

                ## Notes
                Do not take drawings, calculation templates or client lists from your employer. They are usually the employer's property, and copying them is the quickest route to an injunction.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated exit plan exists with lawyer-reviewed covenants, registrations and indemnity in place for day one, and six months of costs covered."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find and reread the restrictive covenants in your employment contract"
                - "Book an hour with an employment lawyer to review them"
                - "Get indemnity quotes for a start-up consultancy in your discipline"
                - "List prospective clients you may lawfully approach after leaving"
            - name: Sole practitioner peer review and cover arrangement
              description: |-
                ## Purpose
                A one-engineer consultancy has no second pair of eyes for design checks and nobody to answer site queries if the owner is ill or abroad. A reciprocal arrangement with another independent engineer, covering independent checks on higher-risk work and emergency cover with client consent, closes both gaps without hiring.

                ## Milestones
                1. One or two trusted independent engineers in compatible disciplines identified.
                2. A written reciprocal agreement covering checks, fees, confidentiality and indemnity.
                3. Clients told who provides cover and how to reach them.
                4. Higher-risk designs checked by the peer and the check records filed.

                ## Notes
                Confirm with your broker that work done by and for the peer engineer is covered, and record client consent before passing any confidential information.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written reciprocal agreement with a peer engineer is signed, and every higher-risk design since then has a filed peer check record."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List independent engineers you trust in compatible disciplines"
                - "Draft a reciprocal check and cover agreement"
                - "Ask your broker to confirm cover for peer checking and cover work"
                - "Meet your peer engineer to review the arrangement and any checks @recurring(quarterly)"
            - name: Growing from five to twenty engineers
              description: |-
                ## Purpose
                At five people the founder knows every job; at twenty they cannot, and firms that grow without a middle layer of project leads see quality and margin fall together. Planning the move, with defined project lead roles, delegated authority limits, a recruitment sequence and the systems that must exist first, makes growth deliberate rather than accidental.

                ## Milestones
                1. A target structure for twenty staff with discipline leads and project leads named or to be hired.
                2. Authority limits written: who may sign appointments, issue drawings and approve fees at each level.
                3. A hiring sequence tied to order book thresholds.
                4. Resourcing, check and fee burn systems in place before headcount passes ten.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A target structure, written authority limits and a hiring sequence tied to order book thresholds are approved by the directors."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Sketch the structure for twenty staff on one page"
                - "Write authority limits for signing, issuing and fee approval"
                - "Link each planned hire to an order book threshold"
                - "Ask the agent to draft role profiles for the first project lead hires"
            - name: Supervising graduates towards professional registration
              description: |-
                ## Purpose
                Graduate engineers choose employers that can get them to chartered or licensed status, and the regulator expects documented, supervised experience across set competences. A firm scheme with a named supervisor, monthly reviews against the competence framework and a planned spread of project experience keeps graduates on track and keeps them from leaving at year three.

                ## Milestones
                1. The relevant regulator's or institution's competence framework and experience requirements noted for each graduate.
                2. A named supervisor or mentor agreed for every graduate.
                3. A rotation plan giving each graduate design, site and client experience.
                4. Monthly supervision notes recorded against the competences.
                5. Each graduate's application readiness reviewed once a year.

                ## Notes
                Requirements differ by country and institution. Check with the relevant body before promising a graduate a timeline.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every graduate has a named supervisor, a rotation plan and monthly supervision notes recorded against the competence framework."
                cadence: rolling
              tasks:
                - "Download the competence framework each graduate is working to"
                - "Assign a supervisor to every graduate engineer"
                - "Plan each graduate's design, site and client rotations for the year"
                - "Hold and record monthly supervision meetings @recurring(monthly:28)"
            - name: Technical director stepping up to managing director
              description: |-
                ## Purpose
                Engineers promoted to run the firm often keep their technical workload and try to manage in the evenings, which shortchanges both. Agreeing a written split of time, handing technical lead roles to named engineers and building the management habits a managing director needs makes the change real rather than nominal.

                ## Milestones
                1. A target split of hours between technical, management and business development work agreed with fellow directors.
                2. Technical lead roles on current projects handed to named engineers.
                3. A management calendar with the fixed weekly and monthly reviews blocked in.
                4. Progress against the time split reviewed after three months.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written time split is agreed, technical lead roles are reassigned, and a three-month review of actual hours against the split is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record how your hours split across a typical fortnight"
                - "Agree a target split with fellow directors"
                - "Hand current technical lead roles to named engineers"
                - "Block fixed management reviews in your calendar for the next quarter"
            - name: Shareholding and director roles among engineer owners
              description: |-
                ## Purpose
                Two or three engineers who start a consultancy together often split shares equally on a handshake, then disagree years later about who brings in work, who signs drawings and what happens when one wants out. Agreeing director roles, voting and the basics of a shareholders' agreement while relations are good, with a lawyer drafting, prevents that dispute.

                ## Milestones
                1. Each owner's role written down: technical lead, business development, operations.
                2. Questions for the lawyer listed: share transfers, leaver terms, deadlock and death or disability.
                3. A shareholders' agreement drafted by a lawyer and signed.
                4. A date set to review roles every two years.

                ## Notes
                Detailed partnership and profit-share design sits in its own areas. This project is about getting the engineer owners' basic roles and agreement in place.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed shareholders' agreement and a written statement of each owner's role exist, with a review date set."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a paragraph on each owner's role in the firm"
                - "List the questions to put to a company lawyer"
                - "Instruct the lawyer to draft the shareholders' agreement"
                - "Sign and file the agreement with the company records"
            - name: Smoothing cash through quiet months
              description: |-
                ## Purpose
                Design consultancies see seasonal and cyclical gaps, such as public budgets freezing at year end or developers pausing in a downturn, and owners often respond by cutting staff they later struggle to rehire. A playbook for quiet months, with a cash reserve target, an overdraft or facility agreed in good times, short-turnaround services to sell and a hiring freeze trigger, keeps the team intact.

                ## Milestones
                1. The last three years' monthly fee income plotted to show seasonal dips.
                2. A cash reserve target set to cover the deepest typical dip.
                3. A working capital facility agreed with the bank while trading is strong.
                4. A list of quick-turnaround services, such as condition surveys, to promote in quiet periods.
                5. Triggers written for hiring freezes and cost cuts based on order book weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written quiet-month playbook with a reserve target, an agreed facility and order book triggers is approved by the directors."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Plot three years of monthly fee income"
                - "Set a reserve target from the deepest typical dip"
                - "Ask your bank about a working capital facility"
                - "Write the order book triggers for freezes and cuts"
            - name: Expert witness and forensic engineering service
              description: |-
                ## Purpose
                Experienced engineers are often asked to investigate failures or give expert evidence in disputes, work that pays well but carries duties to the court or tribunal that override duties to the client. Setting it up as a distinct service, with conflict checks, separate terms, training in expert duties and clear limits on who may act, protects the firm's reputation and indemnity.

                ## Milestones
                1. Engineers suitable to act as experts named, with their fields and any expert witness training completed.
                2. A conflict check procedure covering past and current clients and the other parties.
                3. Separate terms of engagement for expert and forensic work, reviewed by a lawyer.
                4. Your broker's confirmation that expert work is covered.
                5. A first instruction completed with lessons recorded.

                ## Notes
                An expert's duty is to the court or tribunal, not to the client paying the fee. Make that clear in your terms and in the first conversation.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Expert work runs under its own terms, a conflict check is recorded for every instruction, and the broker has confirmed cover."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List engineers with the seniority and experience to act as experts"
                - "Write a conflict check procedure for forensic instructions"
                - "Ask a lawyer to draft expert engagement terms"
                - "Confirm with your broker that expert work is covered"
            - name: Contractor design and novation risk on design and build jobs
              description: |-
                ## Purpose
                On design and build projects the consultant is often appointed by the client, then novated to the contractor, whose priorities are cost and programme rather than the client's brief. Understanding the novation terms, the conflict of loyalties and how fitness-for-purpose duties may flow down lets the firm price and accept these jobs with its eyes open.

                ## Milestones
                1. Recent design and build appointments reviewed for novation terms and liability changes.
                2. A short guide on what to check before accepting novation, written with your lawyer and broker.
                3. Fees for the contractor-side stage priced separately to reflect redesign and value engineering.
                4. A rule on which changes to an issued design need written instruction from the contractor.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written novation checklist, reviewed by the firm's lawyer and broker, is used on every design and build appointment."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the last three design and build appointments"
                - "Mark novation clauses and any fitness-for-purpose wording"
                - "Write the novation checklist with your lawyer and broker"
                - "Price the contractor-side stage separately on the next bid"
            - name: Technical knowledge base and standard details
              description: |-
                ## Purpose
                Every consultancy redraws the same connection details, rewrites the same specification clauses and relearns the same lessons from site, because knowledge lives in the heads of senior engineers. A curated library of approved standard details, calculation templates and short lessons learned notes, reviewed monthly, speeds design and keeps quality up when people leave.

                ## Milestones
                1. The twenty most reused details and calculation templates collected and approved by a senior engineer.
                2. A lessons learned note format of half a page with problem, cause and changed practice.
                3. The library stored in one place with version control and an owner.
                4. A monthly slot where one lesson is presented and added to the library.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An approved library of at least twenty standard details and templates exists, and a lessons learned note is added each month."
                cadence: rolling
              tasks:
                - "Ask each senior engineer for their five most reused details"
                - "Approve and version the first twenty items"
                - "Write the half-page lessons learned format"
                - "Present one lesson learned at the team meeting @recurring(monthly:18)"
            - name: Joint venture with another consultancy for a large bid
              description: |-
                ## Purpose
                Some commissions are too big or too broad for a small firm alone, and teaming with another consultancy can win work neither would get on its own. A joint venture or lead consultant arrangement needs agreed scope splits, fee shares, liability and insurance positions and an exit if the bid fails, all settled before the tender is submitted.

                ## Milestones
                1. A partner firm chosen with complementary disciplines and a compatible approach to risk.
                2. A teaming agreement signed covering scope, fee split, liability, insurance and exclusivity.
                3. A combined bid team with one bid manager and one programme.
                4. A post-bid review held, with the relationship continued or wound up in writing.

                ## Notes
                Ask your lawyer whether a lead consultant with a subconsultant, or a true joint venture, suits the bid. They carry very different liability positions.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed teaming agreement is in place before the bid deadline, and a post-bid review records whether the arrangement continues."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List consultancies whose disciplines complement yours for this bid"
                - "Meet the preferred partner to agree scope and fee split in outline"
                - "Instruct a lawyer to draft the teaming agreement"
                - "Hold a post-bid review with the partner firm"
            - name: Taking on engineering work in another country
              description: |-
                ## Purpose
                An overseas commission can look like straightforward export of design hours, until the client's approvals officer asks for a locally registered engineer's seal, the indemnity policy excludes that territory and the fee arrives in a currency that has fallen twelve percent. Checking registration, local partner needs, insurance, tax and currency before accepting turns an attractive job into a properly priced one.

                ## Milestones
                1. The host country's rules on who may seal designs established with its engineering regulator.
                2. A local registered engineer or partner firm identified where required.
                3. Your broker's written confirmation of cover for that territory, or an extension arranged.
                4. Tax, permanent establishment and currency questions answered by your accountant.
                5. A fee priced with travel, local partner costs and a currency allowance.

                ## Notes
                Tax and registration questions here are for your accountant and the host regulator. This project organises the questions; it does not answer them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before accepting the overseas commission, sealing rules, local partner needs, insurance territory and tax questions each have a recorded answer."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the host country's engineering regulator who may seal designs"
                - "Confirm with your broker whether the policy covers that territory"
                - "Ask your accountant about tax and permanent establishment risk"
                - "Price the fee with a currency and local partner allowance"
---

# Owning an Engineering Consultancy

This area is for the engineer who owns or co-owns a consultancy, whether a sole practitioner sealing drawings from a spare room or a director of a forty-person civil, structural, building services or process firm. It starts with foundations (the service map, who can sign what, the firm's registration, standard terms, cash runway, cost rates and indemnity), moves through the operating machinery of resourcing, project financial reviews, bids, invoicing, design checks and change control, then the commercial skills of estimating and contract reading, the bigger decisions about fee basis, new disciplines and software, the dated events of the consultancy year, variants for founders, sole practitioners and growing firms, and finally specialist work such as expert witness commissions, joint ventures and overseas projects.

What repeats is a Monday resourcing meeting, a weekly bid pipeline, change log and thirteen-week cash forecast, monthly project financial reviews, stage invoicing, order book and sign-off sampling, quarterly checks of software, document control and site safety, and a yearly round of rate setting, registration checks, indemnity renewal and archiving. The Vendor, Purchase decision, Risk register, Metrics log and Compliance control templates pair with the projects that name them. Legal, insurance, tax and registration questions go to your lawyer, broker, accountant or engineering regulator; these projects organise the work around them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
