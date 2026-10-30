---
id: real-estate-development.development-project-delivery
name: Development Project Delivery
description: "Run a development from start on site to completion: a locked baseline programme, design team and progress meetings, contractor oversight, monthly cost and project reports and a live risk register."
category: business
version: 1.0.0
tags: [real-estate-development, development-project-delivery, founder, small-business, manager, construction-programme, contract-administration, site-management]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - meeting-notes
    - remediation-plan
    - purchase-decision
    - onboarding-plan
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Development Project Delivery
          description: "Delivering a development from start on site to completion: programme, design team meetings, contractor oversight, cost reports and a risk register."
          projects:
            - name: Delivery roles and decision authority matrix
              description: |-
                ## Purpose
                Most delivery problems on small schemes start with nobody being sure who can instruct the contractor, approve a design change or sign a payment notice. A one-page matrix naming the contract administrator or employer's agent, the project manager, the cost consultant and the funder's monitoring surveyor, with instruction and spending limits for each, stops verbal instructions turning into disputed variations. Agree it before the contractor's first day.

                ## Milestones
                1. Every role on the scheme listed with a named person and their contracted scope.
                2. Instruction, approval and spending limits written against each role.
                3. The contractor told in writing who may issue instructions under the contract.
                4. The matrix signed off by the company's directors or joint venture partners.

                ## Notes
                Keep instructions to the contractor flowing through the one person the contract names. A director chatting to the site manager about tile choices is how unrecorded variations begin.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page matrix names who can instruct, approve and spend on the scheme, and the contractor has acknowledged it in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every party on the scheme with the name of their lead person"
                - "Pull the instruction clauses from the build contract and appointments"
                - "Set a spending limit for each role that can approve changes"
                - "Send the contractor a letter confirming who may issue instructions"
            - name: Start-on-site readiness gate
              description: |-
                ## Purpose
                Starting on site with the contract unsigned, the insurance unchecked or a pre-commencement planning condition still open exposes the company to enforcement, uninsured loss and a contractor working on a letter of intent with no agreed price. A single gate checklist, cleared item by item before the start date, turns the start into a decision rather than a drift.

                ## Milestones
                1. A checklist covering contract execution, bonds, insurances, planning conditions, building control, neighbour notices and the first funding drawdown.
                2. Each item marked cleared with the evidence filed in the project folder.
                3. Any open item given an owner and a decision on whether start can proceed without it.
                4. A dated go decision recorded by the directors.

                ## Notes
                Start from the **Operational checklist** template. If the contractor must start on a letter of intent, cap its value and expiry date in writing and push hard for the full contract.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every item on the start-on-site gate checklist is cleared with filed evidence, or formally accepted by the directors, before the first day on site."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the start-on-site gate checklist from the contract and planning consent"
                - "Confirm with the planning consultant which pre-commencement conditions are discharged"
                - "Collect signed copies of the build contract, bonds and any parent company guarantee"
                - "Record the go decision and start date in the board minutes"
            - name: Baseline construction programme sign-off
              description: |-
                ## Purpose
                The contractor's tender programme is often a sales document: optimistic, lightly linked and silent on the design information it needs from you. Reviewing it properly before it becomes the contract baseline means every later delay is measured against something both sides accepted. Check the logic, the float and the dates on which the contractor needs your information.

                ## Milestones
                1. A contractor programme received in its native scheduling format, not only as a PDF.
                2. Critical path, key dates and float reviewed with the project manager.
                3. Client-side dates such as design information, finish selections and access listed separately.
                4. The baseline accepted in writing and saved as a locked copy that is never edited.

                ## Notes
                A programme of unlinked bars cannot show what a delay does to completion. Ask for linked logic and the native file before you accept anything.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An accepted baseline programme with a reviewed critical path is saved as a locked copy and acknowledged in writing by the contractor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the programme from the contractor in its native scheduling format"
                - "Walk the critical path with the project manager and mark doubtful durations"
                - "Extract every date where the contractor needs information or a decision from you"
                - "Save the accepted version as a locked baseline copy"
            - name: Project document control and filing structure
              description: |-
                ## Purpose
                Disputes, warranty claims and lender queries are won or lost on whether you can find the right revision of a drawing, instruction or certificate in minutes. A fixed folder structure and naming rule, agreed with the design team and contractor on day one, saves hours every month and builds the eventual handover file as you go.

                ## Milestones
                1. One shared project folder with fixed sections for contract, design, programme, cost, health and safety, correspondence and photos.
                2. A file naming rule covering project code, discipline, document type and revision.
                3. Every consultant and the contractor given access and told the rule.
                4. Superseded drawings moved to an archive so nobody builds from an old revision.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared project folder with an agreed naming rule is in use by every consultant and the contractor, with superseded drawings archived."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the folder sections the project will need from start to completion"
                - "Write a one-line naming rule with an example file name"
                - "Share access with the design team and contractor and explain the rule"
                - "Check that superseded drawings have been archived @recurring(monthly:28)"
            - name: Build-phase project risk register
              description: |-
                ## Purpose
                Every scheme carries the same handful of risks that sink small developers: ground conditions, late utility connections, design gaps, a contractor in trouble and sales slowing before completion. Writing them down with a likelihood, an impact in money and weeks, an owner and a mitigation turns vague worry into a list someone is working through. Lenders and partners will ask to see it.

                ## Milestones
                1. A register with at least fifteen live risks covering ground, design, contractor, utilities, planning, sales and finance.
                2. Each risk scored for likelihood and for cost and time impact.
                3. An owner and a dated mitigation for every high scoring risk.
                4. Contingency in the cost plan compared against the total of the priced risks.

                ## Notes
                Start from the **Risk register** template. A risk with no owner is a note, not a managed risk.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A build-phase risk register with fifteen or more scored risks, each high risk carrying an owner and a dated mitigation, is shared with the project team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run a one-hour risk session with the project manager and cost consultant"
                - "Score each risk for likelihood, cost impact and weeks of delay"
                - "Name an owner and a mitigation date for every high scoring risk"
                - "Compare the priced risks with the contingency left in the cost plan"
            - name: Client health and safety duties on site
              description: |-
                ## Purpose
                In many jurisdictions the developer, as client, carries legal duties on a construction project: appointing competent people, providing pre-construction information and making sure a construction phase plan exists before work starts. In the UK these sit in the CDM Regulations; other countries have their own versions. Knowing which duties are yours, and keeping evidence that you met them, protects the people on site and the company.

                ## Milestones
                1. The client duties under your local construction safety rules confirmed with a health and safety adviser.
                2. Pre-construction information issued to the design team and contractor.
                3. The contractor's construction phase plan received and reviewed before start.
                4. Any notification the safety regulator requires made and filed.

                ## Notes
                This project organises your duties; it is not legal advice. Agree what applies to your scheme with a qualified health and safety adviser.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of the client's safety duties, confirmed by an adviser, is filed with the issued pre-construction information and the reviewed construction phase plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a call with a health and safety adviser about client duties on this scheme"
                - "Compile the pre-construction information pack from surveys and drawings"
                - "Review the contractor's construction phase plan before the start date"
                - "Read the contractor's monthly health and safety report @recurring(monthly:26)"
            - name: Site insurance and contractor cover verification
              description: |-
                ## Purpose
                A fire, flood or theft on a half-built scheme can wipe out the profit, and the cover a contractor says it holds is not always the cover the contract requires. Checking the contract works, public liability, employer's liability and professional indemnity certificates against the contract clauses, and confirming who insures any existing structure, closes gaps before something goes wrong.

                ## Milestones
                1. Insurance clauses from the build contract and consultant appointments summarised in a table.
                2. Current certificates for every required policy collected with limits and expiry dates.
                3. Questions on joint names, existing structures and excluded perils answered by the broker.
                4. Expiry dates added to the project calendar for renewal checks.

                ## Notes
                Ask your broker to read the contract clauses alongside the certificates. Insurance terms are specialist ground; this project prepares the questions and the evidence.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Certificates for every policy the contract requires are on file, checked by the broker against the contract, with each expiry date diarised."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the insurance clauses from the contract and consultant appointments"
                - "Request current certificates from the contractor and each consultant"
                - "Send the clauses and certificates to your broker for a gap check"
                - "Diarise each policy expiry date with a reminder a month before"
            - name: Project execution plan on a single document
              description: |-
                ## Purpose
                When the project manager is off sick, the funder asks how the scheme is run or a new director joins, the answer should be one document, not a tour of inboxes. A short execution plan sets out scope, team, contract route, programme, reporting, change control and the risk approach, and it becomes the rulebook everyone points to.

                ## Milestones
                1. A plan of no more than ten pages covering scope, team, contracts, programme, cost reporting, change control, risk and communications.
                2. Reporting dates and meeting rhythms written into it.
                3. The plan reviewed by the design team leads and the contractor.
                4. Version one issued and stored in the project folder with a review date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A project execution plan of ten pages or fewer is issued to the team, stored in the project folder and carries a review date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft an execution plan outline from your contract and team list"
                - "Fill in the reporting dates, meeting rhythm and change control steps"
                - "Circulate the draft to the design team leads and contractor for comment"
                - "Issue version one and set a review date three months out"
            - name: Neighbour and community liaison plan
              description: |-
                ## Purpose
                Neighbours who learn about the scheme from a skip outside their window become complainants, and complaints become noise conditions, stopped deliveries and councillors on the phone. A named contact, a starting letter, working hours on display and a short monthly update keep the street on side for the whole build.

                ## Milestones
                1. A list of adjoining owners and occupiers, including any needing party wall or boundary notices.
                2. A starting letter sent with working hours, the site contact and the expected programme.
                3. A complaint log with response times agreed with the contractor.
                4. A monthly update issued for the duration of the works.

                ## Notes
                Boundary and party wall notices carry legal time limits in some countries; check with your surveyor or solicitor well before start.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every adjoining occupier has received a starting letter, complaints are logged with response times, and an update has gone out each month of the build."
                cadence: rolling
              tasks:
                - "Map the adjoining owners and occupiers on a site plan"
                - "Agree working hours and a site contact number with the contractor"
                - "Send the starting letter to every neighbour on the map"
                - "Send the monthly neighbour update @recurring(monthly:3)"
            - name: Design team meeting rhythm
              description: |-
                ## Purpose
                During the build, design questions do not stop; they arrive faster, and each unanswered one is a potential delay claim. A regular design team meeting with a fixed agenda covering open queries, information release, changes, coordination and risks, ending in actions with owners and dates, keeps the architect, engineers and contractor answering the same list.

                ## Milestones
                1. A standing agenda agreed with the lead designer.
                2. A meeting held every week, or every fortnight in quieter stages, with minutes out within two working days.
                3. An action list carried from meeting to meeting until each item closes.
                4. Overdue design actions flagged in the monthly project report.

                ## Notes
                Start from the **Meeting notes** template. Minutes record decisions and actions, not conversation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Minutes with a dated action list are issued within two working days of every design team meeting, and no action passes four weeks without escalation."
                cadence: rolling
              tasks:
                - "Agree a standing agenda with the lead designer"
                - "Chair the design team meeting and issue minutes @recurring(weekly:wed)"
                - "Carry open actions forward with owners and due dates"
                - "Escalate any action open longer than four weeks to a director"
            - name: Monthly progress meeting with the contractor
              description: |-
                ## Purpose
                The monthly progress meeting is where the contract is actually managed: progress against programme, delays notified, quality issues, health and safety, payments and early warnings. Running it from the contractor's written report, read beforehand, turns a chat into a record that will matter if time or money is ever disputed.

                ## Milestones
                1. A contractor report format agreed and received five working days before each meeting.
                2. A meeting held each month with programme, safety, quality, change, payment and risk on the agenda.
                3. Formal minutes agreed by both parties within a week.
                4. Every notified delay or early warning carried into the risk register.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month of the build has a contractor report, agreed minutes and a risk register entry for every notice raised at the meeting."
                cadence: rolling
              tasks:
                - "Agree the contents of the contractor's monthly report"
                - "Read the contractor's report and mark questions before the meeting"
                - "Chair the monthly progress meeting and agree minutes @recurring(monthly:8)"
                - "Copy every delay notice raised into the risk register"
            - name: Weekly site walk and photo record
              description: |-
                ## Purpose
                Photos taken from the same points every week are the cheapest evidence a developer can own: they show progress to the lender, prove what was covered up and settle arguments about when work happened. A short weekly walk with the site manager also catches quality and safety problems while they are cheap to fix.

                ## Milestones
                1. Eight to twelve fixed photo points marked on a site plan.
                2. A dated photo set filed every week in the project folder.
                3. Observations from each walk sent to the site manager in writing.
                4. Hidden work such as drainage, insulation and fire stopping photographed before it is covered.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated photo set from the fixed points is filed every week, with written observations sent to the site manager after each walk."
                cadence: rolling
              tasks:
                - "Mark eight to twelve fixed photo points on a site plan"
                - "Walk the site with the site manager and photograph each point @recurring(weekly:tue)"
                - "Email the site manager a short note of what you saw"
                - "Ask for notice before drainage, insulation or fire stopping is covered"
            - name: Monthly project report to directors and funder
              description: |-
                ## Purpose
                Directors, equity partners and the lender all want the same answers: are we on time, are we on budget, what has changed and what worries you. A monthly report on two or three pages, with progress against programme, the cost forecast, top risks and decisions needed, saves a dozen separate emails and builds trust before bad news ever has to be shared.

                ## Milestones
                1. A fixed report layout covering progress, programme forecast, cost forecast, risks, health and safety and decisions needed.
                2. The report issued on the same working day each month.
                3. Each reader's standing questions answered in the layout, not in follow-up calls.
                4. An archive of every issued report in the project folder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two to three page report in the fixed layout has gone to directors and the funder on the agreed day every month since start on site."
                cadence: rolling
              tasks:
                - "List the questions directors, partners and the lender ask most often"
                - "Build a fixed report layout that answers each one"
                - "Issue the monthly project report @recurring(monthly:12)"
                - "Ask the agent to summarise the month's minutes into the report narrative"
            - name: Monthly risk and issue review
              description: |-
                ## Purpose
                A risk register written at start on site and never reopened is worse than none, because it gives false comfort. Reviewing it every month, closing risks that have passed, adding new ones from site and moving anything that has happened into an issues log keeps it a working tool. A quarterly workshop with the whole team catches what monthly reviews miss.

                ## Milestones
                1. The register reviewed every month with scores, owners and mitigations updated.
                2. A separate issues log for risks that have happened, each with an action and a cost.
                3. Closed risks kept on file with the date and reason they closed.
                4. A quarterly risk workshop held with the designers, cost consultant and contractor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register shows a review date in every month of the build, and the issues log records an action and cost for each risk that has happened."
                cadence: rolling
              tasks:
                - "Review scores, owners and mitigations in the risk register @recurring(monthly:5)"
                - "Move any risk that has happened into the issues log with a cost"
                - "Hold a risk workshop with the whole project team @recurring(quarterly)"
                - "Close passed risks with a date and a one-line reason"
            - name: Programme progress tracking against the baseline
              description: |-
                ## Purpose
                Contractors tend to report progress as percentages that creep upward until the last month, when the real date appears. Updating the programme monthly against the locked baseline, with actual start and finish dates and a forecast completion, shows slippage while there is still time to recover it.

                ## Milestones
                1. Actual start and finish dates recorded for every activity on the critical path.
                2. A forecast completion date compared with the baseline each month.
                3. A simple chart of forecast completion over time kept in the project report.
                4. Any slippage over two weeks triggering a written request for a recovery plan.

                ## Notes
                Keep the locked baseline untouched. Compare each update with it, never with last month's version alone, or slippage hides in small monthly steps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly entry records forecast completion against the baseline, and every slip of more than two weeks has a written recovery request."
                cadence: rolling
              tasks:
                - "Ask the contractor for actual start and finish dates on critical activities"
                - "Record the forecast completion date against the baseline @recurring(monthly:10)"
                - "Plot forecast completion month by month in the project report"
                - "Request a recovery plan in writing when slippage passes two weeks"
            - name: Technical query and RFI log
              description: |-
                ## Purpose
                Each request for information from the contractor carries a clock: answer late and the contractor has grounds for delay. A single log of every query, with date raised, who must answer, date needed and date answered, shows the design team's response times and protects you in any delay discussion.

                ## Milestones
                1. One shared RFI log used by the contractor and the design team.
                2. Target response times agreed for routine and urgent queries.
                3. Every open query reviewed weekly with its owner chased.
                4. Average and longest response times reported monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All contractor queries sit in one log with raised, needed and answered dates, and response times appear in each monthly project report."
                cadence: rolling
              tasks:
                - "Set up a shared RFI log with raised, needed and answered dates"
                - "Agree response times for routine and urgent queries with the lead designer"
                - "Chase every overdue query with its owner @recurring(weekly:thu)"
                - "Report average and longest response times each month"
            - name: Information release schedule
              description: |-
                ## Purpose
                Design information reaching the contractor late is one of the commonest grounds for extension of time on traditional contracts. An information release schedule lists each package of drawings and specifications, the date the contractor needs it and the date it was issued, so late information is spotted months ahead rather than claimed for afterwards.

                ## Milestones
                1. A schedule of design packages with required dates taken from the baseline programme.
                2. Each package owned by a named designer.
                3. Issue dates recorded and late packages highlighted.
                4. The schedule reviewed at every design team meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every design package has a required date, an owner and an issue date in the schedule, with late packages reported to a director each month."
                cadence: rolling
              tasks:
                - "List every outstanding design package with the date the contractor needs it"
                - "Assign each package to a named designer"
                - "Update issue dates and flag late packages @recurring(monthly:20)"
                - "Raise any package at risk at the next design team meeting"
            - name: Monthly cost report review
              description: |-
                ## Purpose
                The cost consultant's monthly report is only useful if someone reads it critically: anticipated final cost, contingency drawn, pending changes and risks not yet priced. Spending an hour on it each month, with three standing questions, catches the creeping overspend that otherwise surfaces at the final account.

                ## Milestones
                1. A cost report layout agreed with the cost consultant, showing budget, committed, forecast and contingency.
                2. Three standing questions put to the consultant each month.
                3. Forecast final cost and remaining contingency carried into the project report.
                4. A contingency level agreed below which the issue goes straight to the directors.

                ## Notes
                Detailed variation pricing and final account work belong with your cost control process. This project is about reading and challenging the report as the delivery lead.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly cost report has been reviewed with questions answered in writing, and its forecast final cost appears in the project report."
                cadence: rolling
              tasks:
                - "Agree the cost report layout with the cost consultant"
                - "Review the cost report against your three standing questions @recurring(monthly:15)"
                - "Set the contingency level that triggers escalation to the directors"
                - "Copy forecast final cost and contingency into the monthly project report"
            - name: Quality inspections and hold points
              description: |-
                ## Purpose
                Defects found at handover cost far more to fix than defects found the week they were built, and some, like missing fire stopping or poor waterproofing, are invisible once covered. Agreeing hold points where work stops until inspected, and a monthly quality walk with a checklist, catches them while the scaffold is still up.

                ## Milestones
                1. A list of hold points agreed with the contractor, such as foundations, drainage, waterproofing, fire stopping and first fix services.
                2. An inspection checklist written for each hold point.
                3. Every hold point signed off with photos before work proceeds.
                4. A monthly quality walk with findings tracked to close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every agreed hold point has a dated sign-off with photos, and each monthly quality walk has its findings closed or carried forward."
                cadence: rolling
              tasks:
                - "Agree the list of hold points with the contractor and designers"
                - "Write a short checklist for each hold point"
                - "Carry out the monthly quality walk with the site manager @recurring(monthly:22)"
                - "Track each finding until the contractor confirms it is closed"
            - name: Contractor payment cycle and notice dates
              description: |-
                ## Purpose
                Construction payment rules in many countries set strict dates for payment notices and pay less notices, and missing one can mean paying the full amount applied for. Mapping the contract's payment cycle onto a calendar, with who certifies, who issues each notice and when, protects cash and keeps the contractor paid on time.

                ## Milestones
                1. The payment cycle from application to final payment date mapped from the contract.
                2. Responsibility for each notice assigned to a named person.
                3. Every monthly application tracked from receipt to payment on one sheet.
                4. No notice deadline missed across the build.

                ## Notes
                Payment legislation differs by country, for example the Construction Act in the UK. Confirm the rules for your contract with your contract administrator or solicitor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated payment calendar exists for the whole build, and the tracking sheet shows every notice issued within its contractual deadline."
                cadence: rolling
              tasks:
                - "Map the application, notice and final payment dates from the contract"
                - "Name who issues each payment notice and any pay less notice"
                - "Log the contractor's application and the notice dates @recurring(monthly:25)"
                - "Check each notice date against the contract before it is sent"
            - name: Reading a construction programme and critical path
              description: |-
                ## Purpose
                A founder who cannot read a Gantt chart has to take the contractor's word on whether a delay matters. Learning to read activity links, float, the critical path and the difference between a baseline and a forecast takes a weekend, and it changes every programme conversation that follows.

                ## Milestones
                1. Activity links, float and critical path explained in your own words.
                2. The current project programme read and its critical path traced by hand.
                3. Three activities identified where a two-week delay would or would not move completion.
                4. Your reading checked with the project manager.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can trace the critical path on your scheme's programme, and your explanation of three delay scenarios has been checked by the project manager."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a short course or guide on reading construction programmes"
                - "Trace the critical path on your own scheme's programme with a highlighter"
                - "Test three delay scenarios and note whether completion moves"
                - "Talk through your reading with the project manager"
            - name: Construction sequence from groundworks to finishes
              description: |-
                ## Purpose
                Knowing what follows what on site, from enabling works and foundations through frame, envelope, first fix, plastering, second fix and finishes, lets you spot an unrealistic programme and ask sharper questions in progress meetings. It also explains why one late window delivery can stall the whole interior.

                ## Milestones
                1. The main stages of a build for your scheme's construction type written as a sequence.
                2. The trades and inspections at each stage noted.
                3. The dependencies that most often cause knock-on delays listed.
                4. Site visits made during at least two different stages to see the sequence in practice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written sequence of your scheme's build stages, with trades, inspections and key dependencies, has been checked against two site visits."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write out the build stages for your scheme's construction type"
                - "Note which trades and inspections belong to each stage"
                - "List the dependencies that most often cause knock-on delays"
                - "Ask the site manager to walk you through the next stage before it starts"
            - name: Reading drawings and specifications as the client
              description: |-
                ## Purpose
                Many site disputes come down to what the drawings and specification actually said. Being able to read plans, sections and elevations, cross-reference door and window schedules and find the specification clause that covers a finish lets you check what is being built against what you are paying for.

                ## Milestones
                1. Plan, section, elevation and detail drawings read with their scales and revision boxes.
                2. A door, window or finishes schedule cross-checked against the plans.
                3. The specification structure understood well enough to find any named product.
                4. One discrepancy found and raised through the proper channel.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have cross-checked one schedule against the plans and raised any discrepancy found through the RFI log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one unit and gather every drawing that shows it"
                - "Read the revision box on each drawing and note the current revision"
                - "Cross-check the window schedule against the plans and elevations"
                - "Raise any discrepancy you find through the RFI log"
            - name: Contract notices and time bars under the build contract
              description: |-
                ## Purpose
                Standard building contracts, whether JCT, NEC, FIDIC or a local form, run on notices: early warnings, delay notices, compensation events and claims, many with strict time limits. Knowing which notices you must give, which the contractor must give and what happens when a deadline is missed protects the company's position without needing a lawyer every week.

                ## Milestones
                1. A one-page table of every notice in your contract with who gives it and the time limit.
                2. The consequence of a missed notice summarised for each.
                3. The table checked by the contract administrator or solicitor.
                4. A notice register started for the project.

                ## Notes
                This is an organisational summary, not legal advice. Have your contract administrator or solicitor check the table against the signed contract.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A notice table for the signed contract, checked by the contract administrator, sits in the project folder beside a live notice register."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every notice clause in the signed build contract"
                - "Write the time limit and consequence of each notice in a table"
                - "Send the table to the contract administrator for a check"
                - "Start a notice register and log every notice given or received"
            - name: Contract administrator and employer's agent roles
              description: |-
                ## Purpose
                Under a traditional contract the contract administrator certifies impartially between the parties; under design and build the employer's agent acts for you. Mixing the two up leads developers to expect the wrong thing from their consultant and to give instructions that bypass the contract. Understanding the role your consultant holds keeps each decision with the right person.

                ## Milestones
                1. The role your consultant holds under the build contract identified.
                2. Their duties and limits written in plain language.
                3. The decisions you keep for yourself as employer listed.
                4. Any overlap with the project manager's appointment resolved in writing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note of the consultant's duties under the contract, and the employer's own decisions, has been agreed with that consultant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the clauses in the build contract that describe the consultant's role"
                - "Write their duties and limits in plain language"
                - "List the decisions the employer keeps for itself"
                - "Agree the note with the consultant at the next meeting"
            - name: Chairing site and design meetings well
              description: |-
                ## Purpose
                Meetings that overrun, wander and end without actions waste the most expensive hours on a project. Running to an agenda, closing each item with a decision or an owned action and issuing short minutes quickly is a skill developers and project managers can practise deliberately over a few months.

                ## Milestones
                1. Three meeting habits chosen to practise, such as timed agenda items and closing every item with an owner.
                2. Five meetings chaired with those habits and timed against the agenda.
                3. Feedback asked from two regular attendees.
                4. Minutes turnaround brought within two working days on average.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five meetings have been chaired to a timed agenda with minutes issued within two working days, and feedback from two attendees is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose three meeting habits to practise over the next month"
                - "Time each agenda item in the next five meetings you chair"
                - "Ask two regular attendees what would make the meeting better"
                - "Record how long minutes take to issue after each meeting"
            - name: Progress measurement and earned value basics
              description: |-
                ## Purpose
                Money spent is not progress made. Earned value compares the value of work actually done with what the programme planned and what has been paid, so a scheme that is 60% paid but 45% built shows up early. Even a simple version, run on the cost plan's main elements, gives the lender and partners a straighter answer than a percentage complete.

                ## Milestones
                1. Planned value, earned value and actual cost explained in your own words.
                2. A simple tracker set up on the cost plan's main elements.
                3. One month's figures worked through and compared with the contractor's percentage complete.
                4. A decision made on whether to include the measure in the monthly report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month of planned value, earned value and actual cost has been calculated for the scheme and compared with the contractor's reported progress."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short guide to planned value, earned value and actual cost"
                - "Set up a tracker on the main elements of the cost plan"
                - "Work through one month's figures and compare them with reported progress"
                - "Decide whether to add the measure to the monthly report"
            - name: Design change request gate
              description: |-
                ## Purpose
                Changes requested after the contract is signed are the biggest source of overspend and delay on small schemes, and most start as a casual remark on site. A simple gate, where each change gets a written request, a cost and programme impact from the team and a yes or no from the named approver, makes every change a choice someone signed.

                ## Milestones
                1. A one-page change request form covering reason, cost, programme, planning and warranty impact.
                2. A rule in force that no change is instructed without an approved form.
                3. A change log showing requested, approved, rejected and pending items.
                4. A design freeze date agreed for each package, after which only essential changes are considered.

                ## Notes
                Pricing and valuing approved changes sits with your cost consultant. The gate decides whether a change happens at all.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No change has been instructed without an approved request form, and the change log matches the contractor's list of instructions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page change request form"
                - "Agree design freeze dates for each package with the lead designer"
                - "Tell the team that no change is instructed without an approved form"
                - "Reconcile the change log with the contractor's instructions list"
            - name: Programme recovery plan after slippage
              description: |-
                ## Purpose
                Once forecast completion slips by more than a few weeks, sales completions, loan expiry and interest costs all start to move with it. A recovery plan asks the contractor to show, activity by activity, how lost time will be won back through resequencing, extra labour or longer hours, and who pays for it.

                ## Milestones
                1. The cause of slippage agreed or disputed in writing.
                2. A recovery programme from the contractor showing resequenced activities and resources.
                3. The cost of acceleration and who bears it settled.
                4. Recovery progress checked every week for the next two months.

                ## Notes
                Start from the **Remediation plan** template. Work out the cost of a later completion, including interest and loan extension fees, before agreeing to pay for acceleration.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recovery programme is accepted in writing with acceleration costs allocated, and progress against it has been checked every week for two months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the contractor in writing for the cause of slippage and a recovery plan"
                - "Work out the cost of a later completion including interest and fees"
                - "Review the recovery programme with the project manager"
                - "Check recovery progress at each site walk for eight weeks"
            - name: Six-week lookahead with the site team
              description: |-
                ## Purpose
                Master programmes are too coarse to manage the coming month, and site managers often plan week to week in their heads. A rolling six-week lookahead, refreshed every Monday with the site manager, shows which materials, information, inspections and trades must be ready, and where the next bottleneck is forming.

                ## Milestones
                1. A six-week lookahead format agreed with the site manager.
                2. Constraints such as information, materials, access and inspections marked against each activity.
                3. The lookahead refreshed weekly and filed.
                4. Constraints cleared before their activities start in most weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A refreshed six-week lookahead is on file for every week of the build, with each constraint listed and owned."
                cadence: rolling
              tasks:
                - "Agree a lookahead format with the site manager"
                - "Mark information, material, access and inspection constraints"
                - "Refresh the six-week lookahead with the site manager @recurring(weekly:mon)"
                - "Clear or escalate any constraint due within two weeks"
            - name: Clerk of works or independent inspector decision
              description: |-
                ## Purpose
                On design and build contracts nobody on the client side may be checking workmanship day to day, and the warranty inspector visits only at key stages. Deciding whether to appoint a clerk of works, buy periodic independent inspections or rely on the existing consultants is a cost against risk choice best made before start.

                ## Milestones
                1. The inspection already provided by the warranty provider, building control and consultants listed.
                2. Two or three options priced, from a full-time clerk of works to periodic visits.
                3. A decision recorded with the reasons.
                4. If someone is appointed, their scope and reporting line set out in writing.

                ## Notes
                A clerk of works reports to you, not to the contractor; make sure the appointment says so.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on independent site inspection, with options priced, is filed, and any appointed inspector has a written scope."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the inspections already provided by warranty, building control and consultants"
                - "Get prices for a clerk of works and for periodic inspection visits"
                - "Record the decision and the reasons in the board minutes"
                - "Write the inspector's scope and reporting line if you appoint one"
            - name: Long-lead items procurement tracker
              description: |-
                ## Purpose
                Lifts, windows, curtain walling, switchgear and specialist plant can take months to manufacture, and one late order can idle the site. A tracker of long-lead items, with design sign-off, order, manufacture and delivery dates, shows which decisions you must make now to protect dates many months away.

                ## Milestones
                1. Every item with a lead time over eight weeks listed with its supplier.
                2. The design approval needed before each order identified.
                3. Order and delivery dates tracked against the programme.
                4. Any item at risk raised in the monthly project report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A long-lead tracker lists every item over eight weeks' lead time with order and delivery dates set against the programme."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the contractor for every item with a lead time over eight weeks"
                - "Note the design approvals needed before each item can be ordered"
                - "Track order and delivery dates against the programme"
                - "Raise any long-lead item at risk in the monthly project report"
            - name: Delay event and extension of time assessment
              description: |-
                ## Purpose
                When the contractor claims more time, the answer affects liquidated damages, loan dates and sales completions, and a weak or late response can lose the argument by default. Assessing each claim against the programme, the contract's notice rules and the records you hold, and answering within the contract's time limit, keeps your position sound.

                ## Milestones
                1. Each extension of time claim logged with the date received and the response deadline.
                2. The claimed delay tested against the baseline and updated programme.
                3. Site records, minutes and photos that support or contradict the claim gathered.
                4. A reasoned response issued by the contract administrator within the time limit.

                ## Notes
                Extension of time decisions have contractual and legal consequences. Your contract administrator makes the assessment; this project gets the evidence ready and the deadlines met.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every extension of time claim has a logged response deadline, an evidence pack and a reasoned response issued within the contractual time limit."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Log each extension of time claim with its response deadline"
                - "Test the claimed delay against the baseline programme"
                - "Gather minutes, photos and site diaries relevant to the claim"
                - "Agree the response with the contract administrator before the deadline"
            - name: Choosing project management software for delivery
              description: |-
                ## Purpose
                Spreadsheets and email cope with one small scheme but break down with two sites, a lender's reporting demands and a dozen consultants. Comparing construction project tools on document control, RFIs, site diaries, photos, programme links and cost, and testing two on a live scheme, avoids buying something the contractor will refuse to use.

                ## Milestones
                1. Requirements written down, with essentials separated from nice-to-haves.
                2. Three tools shortlisted and scored against the requirements.
                3. Two tools trialled for a month with the design team and contractor.
                4. A decision recorded with the annual cost.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool has been chosen after a trial of two shortlisted options, with the scoring and the annual cost recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write your essential and nice-to-have requirements"
                - "Shortlist three tools and score them against the requirements"
                - "Trial two tools on a live scheme with the contractor and designers"
                - "Record the decision and the annual cost"
            - name: Start-on-site day and first week
              description: |-
                ## Purpose
                First impressions on a building site are set in week one: hoarding up, welfare in place, deliveries agreed, neighbours told and the first progress photos taken. Planning the day itself, with a pre-start meeting with the contractor and a site walk with the design team, avoids the scramble that sets a poor tone for the next eighteen months.

                ## Milestones
                1. A pre-start meeting held with the contractor covering programme, contacts, communication and safety.
                2. Hoarding, signage, welfare and site access in place on day one.
                3. The design team's site walk completed in the first week.
                4. The first photo set and site diary entry filed.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Pre-start meeting minutes, the first photo set and the first site diary entry are filed within the first week on site."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the agenda for the pre-start meeting with the contractor"
                - "Confirm hoarding, signage and welfare are in place for day one"
                - "Book a design team site walk for the first week"
                - "File the first photo set and site diary entry"
            - name: Lender monitoring surveyor visit preparation
              description: |-
                ## Purpose
                Each drawdown on a development loan usually depends on the lender's monitoring surveyor confirming progress and cost, and a poor visit can hold up funds for weeks. Preparing the cost report, programme update, photos and certificates before the visit, and walking the site beforehand, keeps drawdowns on time.

                ## Milestones
                1. A standard visit pack agreed with the monitoring surveyor.
                2. The pack issued three working days before the visit.
                3. The site walked the day before to check what will be seen.
                4. Questions raised at the visit answered in writing within a week.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first monitoring visit has a pack issued three working days ahead, and every question it raised has been answered in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the monitoring surveyor what they want to see at each visit"
                - "Assemble the visit pack from the cost report, programme and photos"
                - "Walk the site the day before the visit"
                - "Answer every question raised at the visit in writing"
            - name: Weathertight milestone sign-off
              description: |-
                ## Purpose
                Getting the building weathertight, with roof on and openings closed, is the milestone that frees internal trades to start and protects work already done from rain. Treating it as a dated event with a definition, an inspection and a programme check makes sure it is real rather than simply declared.

                ## Milestones
                1. A weathertight definition agreed with the contractor, such as roof covering complete, openings closed and temporary protection in place.
                2. An inspection by the contract administrator or inspector against that definition.
                3. Outstanding items listed with close-out dates.
                4. The actual date compared with the baseline in the monthly report.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Weathertight has been inspected against an agreed written definition, with the actual date recorded against the baseline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree in writing what counts as weathertight on this scheme"
                - "Book an inspection against the definition with the contract administrator"
                - "List outstanding items with close-out dates"
                - "Record the actual weathertight date against the baseline"
            - name: Mid-build reforecast and topping out
              description: |-
                ## Purpose
                Halfway through the structure, enough is known to replace hopeful assumptions with real ones: ground risk has passed, most packages are let and the true pace of the site is visible. A formal reforecast of programme, cost and risk, marked by a topping out for the team, resets expectations with partners and lenders while there is still room to act.

                ## Milestones
                1. Forecast completion, final cost and remaining risk reforecast from actual data.
                2. The reforecast compared with the original appraisal assumptions.
                3. A short paper to directors and the funder setting out any decisions needed.
                4. A topping out held to thank the site team.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A reforecast paper comparing actual programme, cost and risk with the appraisal has gone to directors and the funder by the topping out date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather actual progress, committed cost and live risks at the midpoint"
                - "Compare the reforecast with the original appraisal assumptions"
                - "Write a two-page reforecast paper for directors and the funder"
                - "Organise a topping out lunch for the site team"
            - name: Final ninety days completion runway
              description: |-
                ## Purpose
                Schemes rarely finish late because of the last brick; they finish late because commissioning, statutory sign-offs, utility energisation and warranty inspections were left until the end. Starting a completion runway three months out, with every certificate and test on one dated list, gives the team time to clear them before the target date.

                ## Milestones
                1. A dated list of every test, certificate, inspection and sign-off needed for completion.
                2. Each item assigned to the contractor, a consultant or the developer.
                3. A weekly runway meeting held through the final ninety days.
                4. The sales and handover teams told the realistic completion date.

                ## Notes
                Snagging, the handover file and the defects period belong to practical completion and handover work. This project makes sure the build is ready to get there.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every certificate and test needed for completion is on a dated list with an owner, reviewed weekly through the last ninety days."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every test, certificate and inspection needed before completion"
                - "Assign each item an owner and a target date"
                - "Hold a weekly runway meeting for the final ninety days"
                - "Tell the sales team the realistic completion date in writing"
            - name: Statutory and warranty key-stage inspections
              description: |-
                ## Purpose
                Building control and the structural warranty provider usually inspect at set stages, such as foundations, drainage, frame and pre-completion, and a missed inspection can mean opening up finished work. Putting every required inspection in the programme, with a person responsible for booking it, keeps the scheme certifiable.

                ## Milestones
                1. The inspection stages required by building control and the warranty provider listed.
                2. Each stage linked to an activity in the programme.
                3. A named person booking each inspection with enough notice.
                4. Every inspection result filed with any conditions closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every required building control and warranty inspection is linked to the programme, booked by a named person and has its result filed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask building control and the warranty provider for their inspection stages"
                - "Link each inspection stage to an activity in the programme"
                - "Name who books each inspection and how much notice is needed"
                - "File each inspection result and close any conditions"
            - name: First scheme alongside a day job
              description: |-
                ## Purpose
                Founders delivering a first scheme while still employed can visit site perhaps once a week and take calls only at lunch. Designing delivery around that limit, with a capable project manager, a fixed weekly call, written reports and clear authority limits, avoids decisions waiting for evenings and weekends while the site stands idle.

                ## Milestones
                1. The hours you can realistically give the scheme each week written down.
                2. A project manager or employer's agent appointed with authority to cover the gaps.
                3. A fixed weekly call and a regular weekend site visit pattern agreed.
                4. No more than two decisions a month left waiting over three days for you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly call is in the diary, the project manager holds written authority for routine decisions, and no decision has waited more than three days for you."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the hours you can give the scheme each week"
                - "Agree which routine decisions the project manager can make without you"
                - "Hold the weekly call with the project manager @recurring(weekly:fri)"
                - "Log any decision that waited more than three days for you"
            - name: Acting as your own main contractor
              description: |-
                ## Purpose
                Small builder-developers often skip the main contractor and let trade packages directly, saving the contractor's margin but taking on coordination, site safety, programme and the risk of gaps between trades. Doing it deliberately means a package list with clear scope boundaries, a site manager with authority, and the principal contractor's safety duties understood and covered.

                ## Milestones
                1. A package list where every scope boundary between trades is written down.
                2. A site manager appointed with a clear role and authority.
                3. The principal contractor's health and safety duties confirmed and covered.
                4. A master programme sequencing every package with handover points between trades.

                ## Notes
                Taking the main contractor's role usually brings its legal safety duties too. Confirm what applies with a health and safety adviser before start.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A package list with written scope boundaries, a sequenced master programme and confirmed principal contractor safety arrangements are in place before start."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every trade package and write the scope boundary between each pair"
                - "Appoint a site manager and put their authority in writing"
                - "Confirm the principal contractor's safety duties with an adviser"
                - "Sequence every package in a master programme with handover points"
            - name: Development manager running several sites
              description: |-
                ## Purpose
                Managers in a development company running three or four schemes at different stages cannot attend every meeting or read every report in full. A standard set of measures across all sites, a fixed weekly diary pattern and a quarterly portfolio review let you spend time where the risk is highest rather than where the noise is loudest.

                ## Milestones
                1. A one-line status per site covering programme, cost, safety and top risk.
                2. A weekly diary pattern giving each site a fixed slot.
                3. Every project manager reporting in the same format.
                4. A quarterly portfolio review held with the directors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every site reports in the same one-line format each week, and a portfolio review with the directors has been held every quarter."
                cadence: rolling
              tasks:
                - "Define the one-line status every site will report"
                - "Block a fixed weekly slot in your diary for each site"
                - "Ask each project manager to report in the common format"
                - "Hold the portfolio review with the directors @recurring(quarterly)"
            - name: Delivering a scheme from overseas
              description: |-
                ## Purpose
                Diaspora developers and investors building on another island or in another country often learn about problems weeks late, from photos that show only the good side. Remote delivery needs a trusted local representative, fixed photo points, regular video walk-throughs and payment approvals that cannot happen without evidence.

                ## Milestones
                1. A local representative appointed with a written scope and reporting line.
                2. A monthly video walk-through of the site held with the representative.
                3. Payments released only against an inspection report and photos.
                4. At least one in-person visit planned for a key stage.

                ## Notes
                Keep payment approval with you, not the representative, and always pay the contracted company's account, never a personal one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A local representative reports monthly with a video walk-through, and every payment released has a matching inspection report and photo set."
                cadence: rolling
              tasks:
                - "Appoint a local representative and agree their scope in writing"
                - "Agree fixed photo points and a monthly report format"
                - "Hold a video walk-through of the site @recurring(monthly:18)"
                - "Release payments only against an inspection report and photos"
            - name: Taking over a stalled development
              description: |-
                ## Purpose
                Buying or inheriting a half-built scheme after a previous developer or contractor failed means taking on unknown work quality, missing records, lapsing consents and unhappy neighbours. A structured takeover establishes what has been built, what is approved, who is owed money and what it will cost and take to finish, before any new contract is signed.

                ## Milestones
                1. A condition survey of the completed work, with opening up where records are missing.
                2. The status of planning consent, building control and warranty confirmed.
                3. A schedule of outstanding claims and unpaid creditors relating to the site.
                4. A cost and programme to complete prepared by a cost consultant.
                5. A go or no-go decision recorded.

                ## Notes
                Start from the **Remediation plan** template. Ask your solicitor about any claims that may attach to the site before committing money.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A condition survey, consents status, creditor schedule and cost to complete are on file, with a recorded go or no-go decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Gather every drawing, certificate and report the previous team left"
                - "Commission a condition survey with opening up where records are missing"
                - "Confirm the status of planning, building control and warranty"
                - "Get a cost and programme to complete from a cost consultant"
            - name: Onboarding a new project manager mid-scheme
              description: |-
                ## Purpose
                Project managers change mid-build more often than anyone plans, through resignation, illness or a consultant losing the appointment. A structured handover, with the execution plan, live registers, open notices and a joint site walk, stops knowledge walking out of the door and avoids the costly weeks when nobody is sure what was promised.

                ## Milestones
                1. A handover pack containing the execution plan, programme, risk register, RFI log, notice register and open issues.
                2. A joint site walk and introductions to the contractor and designers.
                3. A thirty-day review of what the new manager has found.
                4. The authority matrix updated with the new name.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handover pack has been issued, the authority matrix updated, and a thirty-day review held with the new project manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Assemble the handover pack from the live project registers"
                - "Introduce the new manager to the contractor and design team on site"
                - "Update the authority matrix and notify the contractor in writing"
                - "Hold a thirty-day review of what the new manager has found"
            - name: Contractor insolvency contingency plan
              description: |-
                ## Purpose
                Contractor failures rise whenever margins are squeezed, and a developer who notices too late can lose materials, site security and months of programme. Watching for warning signs, knowing what the contract and bonds allow and having a plan to secure the site and re-procure the works shortens the stall from months to weeks.

                ## Milestones
                1. A list of warning signs tracked monthly, such as unpaid subcontractors, thinning labour and late material deliveries.
                2. The contract's termination, bond and parent company guarantee terms summarised.
                3. A step plan for securing the site, materials and records on the day of failure.
                4. A shortlist of contractors who could complete the works.

                ## Notes
                Termination and bond calls are legal steps; take advice from your solicitor before acting on any of them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written insolvency plan with warning signs, contract remedies, site-securing steps and a replacement contractor shortlist is filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the warning signs you will watch for each month"
                - "Summarise the termination, bond and guarantee terms with your solicitor"
                - "Draft the steps to secure the site, materials and records on the day"
                - "Shortlist two contractors who could take over the works"
            - name: Phased delivery on a part-occupied site
              description: |-
                ## Purpose
                Larger schemes often hand over early phases while later ones are still being built, so residents, tenants or buyers live beside an active site. Separating access, services and safety between phases, and sequencing works so occupied areas are never cut off, needs planning long before the first phase completes.

                ## Milestones
                1. Phase boundaries, separate access routes and temporary services agreed with the contractor.
                2. A safety plan for the interface between occupied areas and the site.
                3. Utility and fire strategies checked for partial occupation.
                4. A communication plan for occupants covering noise, access and service outages.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phasing plan covering access, services, fire strategy and occupant communication is agreed with the contractor before the first phase completes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Mark phase boundaries and access routes on a site plan"
                - "Ask the fire engineer to confirm the strategy for partial occupation"
                - "Agree temporary services arrangements with the contractor"
                - "Draft the notice occupants will receive about noise and access"
            - name: Delay analysis readiness for a disputed claim
              description: |-
                ## Purpose
                When an extension of time dispute is large enough to reach adjudication or arbitration, the outcome depends on a delay analysis that a specialist will test hard. Preparing for that means keeping native programme updates, site diaries and correspondence in order from day one, and knowing the main analysis methods well enough to brief an expert.

                ## Milestones
                1. Every programme update saved in native format with its data date.
                2. Site diaries, labour returns and weather records filed by date.
                3. The main delay analysis methods summarised in a briefing note.
                4. A delay expert identified in case a dispute arises.

                ## Notes
                Dispute strategy is a legal matter; involve your solicitor before appointing an expert or starting any formal process.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Native programme updates, dated site records and a delay methods briefing note are filed, with a delay expert identified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check that every programme update is saved in native format with its data date"
                - "File site diaries, labour returns and weather records by date"
                - "Write a one-page note on the main delay analysis methods"
                - "Ask your solicitor to name a delay expert they would be content to appoint"
            - name: Post-project delivery review and lessons log
              description: |-
                ## Purpose
                Developers who never look back repeat the same delays on the next scheme. A structured review after completion, comparing actual programme, cost, quality and safety with the baseline and asking each party what they would change, turns one scheme's pain into the next scheme's checklist.

                ## Milestones
                1. Actual against baseline compared for programme, cost, quality and safety.
                2. Short interviews held with the contractor, lead designer, cost consultant and site manager.
                3. Ten or fewer lessons written as changes to your standard documents.
                4. The lessons log reviewed at the start of every new scheme.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lessons log of ten or fewer items, each tied to a change in a standard document, exists for the completed scheme."
                cadence: cyclic
              tasks:
                - "Compare actual programme, cost, quality and safety with the baseline"
                - "Interview the contractor, lead designer, cost consultant and site manager"
                - "Write each lesson as a change to a standard document"
                - "Add new lessons from live schemes to the log @recurring(quarterly)"
---

# Development Project Delivery

Development project delivery is the stretch between the contractor arriving on site and the building being ready to complete: keeping the programme honest, the design information flowing, the contractor accountable and the money and risks visible. It is written for founders delivering their own schemes, small developers and builder-developers, and development managers running several sites. The projects start with foundations such as decision authority, the start-on-site gate, the baseline programme and insurance, then move through the operating rhythm of meetings, site walks, logs and reports, the skills that make a client sharper on site, decisions and improvements, dated milestones from the first week to the completion runway, situations for different kinds of developer, and specialist work on insolvency, phasing, delay analysis and lessons learned.

The rhythms are a weekly site walk, design team meeting, lookahead and query chase, a monthly progress meeting, cost report review, project report, risk review, quality walk and payment notice check, and a quarterly risk workshop and portfolio review. The Operational checklist template suits the start-on-site gate, Risk register the build-phase risks, Meeting notes the design team meetings, Remediation plan a programme recovery or a stalled scheme, Purchase decision a software choice and Onboarding plan a new project manager. Contract, insurance, safety and dispute questions are organised here, not answered: take them to your contract administrator, broker, safety adviser or solicitor. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
