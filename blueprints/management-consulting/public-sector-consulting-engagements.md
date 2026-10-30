---
id: management-consulting.public-sector-consulting-engagements
name: Public Sector Consulting Engagements
description: "A working system for consulting to government: procurement routes and compliance packs, bid gates, value for money and business cases, contract reporting, approval tracking, transparency habits and the political calendar."
category: business
version: 1.0.0
tags: [management-consulting, public-sector-consulting-engagements, knowledge-worker, freelancer, public-procurement, value-for-money, business-case, government]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - risk-register
    - meeting-notes
    - metrics-log
    - remediation-plan
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Public Sector Consulting Engagements
          description: "Consulting to governments and public bodies: procurement rules, value for money, stakeholder politics, transparency and long approval cycles."
          projects:
            - name: Public body decision map for each target client
              description: |-
                ## Purpose
                In a public body the person who asked for help, the budget holder, the accounting officer who signs off spending and the commercial team who runs the contract are rarely the same person. A one-page map for each target client stops you pitching to someone who cannot buy and missing the official who can veto the work.

                ## Milestones
                1. A one-page map for each of your top three target bodies naming the minister or elected lead, senior official, budget holder and commercial lead.
                2. The body's governance chain written down, from the programme board to the department board or council cabinet.
                3. The central finance or treasury approvals that apply above certain spending levels noted for each body.
                4. Gaps in the map marked with a named contact who could fill them.

                ## Notes
                Organisation charts, annual reports and published board minutes usually give you most of this before any meeting.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Decision maps for three target public bodies exist, each naming the budget holder, the accounting officer route and the commercial lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the latest annual report and organisation chart of your first target body"
                - "Name the budget holder and commercial lead for the work you want to do"
                - "Trace the approval chain from programme board to accounting officer"
                - "Mark each unknown on the map with a contact who might know"
            - name: Procurement route check for consulting opportunities
              description: |-
                ## Purpose
                Public bodies can only buy consulting through the routes their procurement rules allow: open or restricted tenders, call-offs from framework agreements, competitive quotes below a threshold, or rare direct awards. Knowing which route a piece of work will take tells you whether you can bid at all and how long the buying process will run.

                ## Milestones
                1. The procurement rules that apply to your main target bodies identified, with the value thresholds that trigger each route.
                2. A one-page summary of the routes, from low-value quotes to full open tenders, with typical timelines.
                3. Each live opportunity tagged with its likely route and whether you are eligible.
                4. Questions about the rules checked with a procurement adviser or the body's commercial team.

                ## Notes
                Thresholds and rules change with new legislation and differ between national, regional and local bodies, so always check the current published version.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of procurement routes and current thresholds for your target bodies, with every live opportunity tagged by route."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the current procurement rules and thresholds published for your main target body"
                - "Summarise each route with its threshold and typical timeline on one page"
                - "Tag every live opportunity in your pipeline with its likely route"
                - "Ask a procurement adviser to check your reading of the thresholds"
            - name: Supplier portal registrations and framework listings
              description: |-
                ## Purpose
                Most public tenders and framework call-offs are only visible, or only open, to suppliers registered on the right portal or appointed to the right framework lot. Registering properly and recording which frameworks you sit on, and under whose name, means you do not discover a perfect opportunity two days before it closes.

                ## Milestones
                1. Profiles complete on the national tender portal and the regional or local portals your clients use.
                2. Category codes and alert keywords set to match the services you actually sell.
                3. A list of frameworks and lots you are on, directly or through a partner, with expiry dates.
                4. Frameworks you are not on but should be identified, with their next reopening date.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Registrations on every relevant portal are complete and a framework list with lots, routes and expiry dates is saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the tender portals your three target bodies publish on"
                - "Complete your supplier profile and category codes on each portal"
                - "Record every framework and lot you can access with its expiry date"
                - "Review portal profiles and framework expiry dates @recurring(yearly)"
            - name: Public tender compliance pack
              description: |-
                ## Purpose
                Selection questionnaires ask for the same evidence every time: company details, accounts, insurance certificates, tax compliance, and policies on data protection, anti-bribery, equality, health and safety and labour standards in supply chains. Holding a current, signed pack turns a two-day scramble into an hour and stops bids failing on a pass or fail question.

                ## Milestones
                1. A folder holding current versions of every standard selection document, each with an owner and renewal date.
                2. Insurance levels recorded against the minimums commonly asked for by your target bodies.
                3. Policies that do not yet exist drafted and approved, with any gap in cover flagged.
                4. A standard answer bank for selection questions, checked by a second reader.

                ## Notes
                Start from the **Compliance control** template. Policies must be real and followed, not written for the bid; evaluators and auditors may ask for evidence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A compliance pack with current accounts, insurance certificates, tax evidence and all standard policies is filed with renewal dates."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download a recent selection questionnaire from a target body and list every document it asks for"
                - "Gather current insurance certificates and the latest filed accounts"
                - "Draft any missing policy and get it approved by whoever runs the business"
                - "Check expiry dates in the compliance pack and renew anything due @recurring(quarterly)"
            - name: Declarations of interest and conflict register
              description: |-
                ## Purpose
                Conflicts are taken seriously by public bodies because procurement challenges and audit findings follow when they are missed: a relative in the commissioning team, a past role advising a competing bidder, shares in a supplier. A register of your interests, updated before every bid, lets you complete declarations honestly and quickly.

                ## Milestones
                1. A register of your directorships, shareholdings, family links to public bodies and recent clients that could conflict.
                2. A standard declaration wording that matches what public tenders usually ask.
                3. A rule for when a conflict means declaring and when it means not bidding.
                4. The register reviewed against every live bid before submission.

                ## Notes
                When a potential conflict is unclear, declare it and let the authority decide. Hidden conflicts do far more damage than declared ones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated interests register exists and a declaration has been checked against it for every bid submitted since."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your directorships, shareholdings and family links to public bodies"
                - "Add clients from the last three years that could conflict with public work"
                - "Write your rule for declaring versus declining a bid"
                - "Refresh the interests register with any new roles or clients @recurring(yearly)"
            - name: Fiscal year and budget calendar for target bodies
              description: |-
                ## Purpose
                Government money arrives on a fixed cycle: budget statements, spending reviews, estimates and year-end, with a rush to commit funds before the year closes and a freeze while new budgets are set. A calendar of these dates for each target body tells you when to start conversations, when tenders tend to appear and when nothing will move.

                ## Milestones
                1. The financial year, budget statement and spending review dates for each target body written in one calendar.
                2. The months when approvals typically slow down or freeze identified.
                3. The window when unspent budgets are usually committed noted.
                4. Business development effort planned around these windows for the coming year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twelve-month budget calendar for target bodies exists, with freeze and year-end windows marked and outreach planned around them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the financial year start date and budget statement date for each target body"
                - "Mark the spending review and estimates dates in your calendar"
                - "Note the months when new approvals usually stall"
                - "Rebuild the budget calendar for the new financial year @recurring(yearly)"
            - name: Security vetting and government data handling
              description: |-
                ## Purpose
                Some engagements need staff with security clearance, or access to systems and data with protective markings, and clearance can take months to obtain. Knowing which clearances your work needs, which you hold and how classified information must be stored keeps you eligible and keeps you out of a data incident.

                ## Milestones
                1. The clearance levels typically required for your target work identified.
                2. Current clearances for you and any associates recorded with expiry or review dates.
                3. A short handling standard for marked information: storage, devices, printing, email and disposal.
                4. Any device or storage practice that would breach a client's requirements fixed.

                ## Notes
                Clearance is sponsored by the client or contracting authority, not applied for privately. Ask the commercial team early if a role will need it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A record of required and held clearances plus a one-page handling standard for marked information is written and followed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your main public client which clearance level their work requires"
                - "Record your current clearance and its review date"
                - "Write a one-page standard for storing, sending and destroying marked information"
                - "Confirm clearance status and handling standard are still current @recurring(yearly)"
            - name: Drafting standard that assumes publication
              description: |-
                ## Purpose
                Freedom of information requests, audit reviews, select committee inquiries and court disclosure mean almost anything written on a public engagement could be read by journalists or opponents. A short drafting standard for emails, notes and slides keeps the work frank but professional and protects both you and your client.

                ## Milestones
                1. A one-page standard covering tone, opinions about named people, speculation and labelling of draft material.
                2. The client's rules on information requests and exemptions read and summarised.
                3. Team members briefed on the standard before their first client meeting.
                4. A check of recent emails and notes against the standard, with any habits corrected.

                ## Notes
                The test is simple: would you be comfortable seeing this sentence in a newspaper beside your client's name?
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written drafting standard exists, every team member has been briefed on it and a sample of past emails has been checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your client's published guidance on information requests"
                - "Write a one-page drafting standard for emails, notes and slides"
                - "Brief everyone on the engagement team on the standard"
                - "Review ten of your recent client emails against it"
            - name: Government roles and governance basics
              description: |-
                ## Purpose
                Consultants new to government often confuse the political and official sides: who sets policy, who is accountable for spending, what a board or cabinet decides and what officials can agree alone. A clear grasp of these roles prevents embarrassing mistakes such as asking an official to commit a minister, or briefing a politician without the department knowing.

                ## Milestones
                1. Notes on the roles of elected leaders, senior officials, accounting officers, boards and audit bodies in your target jurisdiction.
                2. The difference between policy decisions and spending approvals written in your own words.
                3. Rules on contact between consultants and politicians recorded.
                4. Three questions you still have answered by a former official or experienced colleague.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on political and official roles in your target jurisdiction exist and have been checked by someone with government experience."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the published guide to how your target government department or council is run"
                - "Write a page on who decides policy and who approves spending"
                - "Note any rules on consultants contacting elected politicians"
                - "Ask a former official to check your notes over coffee"
            - name: Weekly public tender watch
              description: |-
                ## Purpose
                Tender notices appear on portals with fixed deadlines, often four to six weeks, and missing the first week leaves too little time for a good response. A weekly scan of portals, prior information notices and framework call-offs gives you an early view of what is coming and a steady flow into the bid gate.

                ## Milestones
                1. Saved searches and email alerts set on every relevant portal.
                2. A pipeline sheet with each opportunity's body, value, route, deadline and fit score.
                3. Prior information and pre-market notices tracked alongside live tenders.
                4. The watch running weekly for at least two months, with every relevant notice logged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tender pipeline sheet shows a weekly scan for eight consecutive weeks with every relevant notice logged and scored."
                cadence: rolling
              tasks:
                - "Set saved searches for your service keywords on each tender portal"
                - "Create the pipeline sheet with body, value, route, deadline and fit columns"
                - "Scan portals and log new public notices in the pipeline @recurring(weekly:mon)"
                - "Add prior information notices to the pipeline with expected tender dates"
            - name: Bid or no-bid gate for public tenders
              description: |-
                ## Purpose
                Public bids are long and costly to write, and win rates on open tenders where you have no relationship are often low. A short gate before any writing starts, scored against fit, relationship, evaluation criteria and capacity, saves effort for the bids you can actually win.

                ## Milestones
                1. A scoring sheet with six to eight criteria, including prior contact with the buyer and match to the scored questions.
                2. A threshold score below which you do not bid unless a named reason is recorded.
                3. Every tender in the pipeline put through the gate before writing starts.
                4. Win rates by gate score reviewed after the first ten decisions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every public tender considered in the last quarter has a recorded gate score and bid or no-bid decision with a reason."
                cadence: rolling
              tasks:
                - "Write six to eight bid criteria with a score scale for each"
                - "Set the minimum score needed to bid"
                - "Score the next live tender before anyone starts writing"
                - "Compare win rates against gate scores once ten decisions are logged"
            - name: Monthly contract performance returns to the authority
              description: |-
                ## Purpose
                Regular performance reports against agreed indicators are a standard requirement of public contracts, and late or thin returns are what contract managers remember at renewal. A monthly return built from the same template, sent on a fixed day, keeps the record clean and gives you evidence for the next bid.

                ## Milestones
                1. The contract's indicators, reporting deadlines and any service credit terms listed in one place.
                2. A return template matching the authority's format.
                3. Returns sent on time for three consecutive months.
                4. Each return filed with the evidence behind its numbers.

                ## Notes
                Start from the **Metrics log** template. Report bad months honestly with a recovery plan; a surprise found by the authority later costs far more trust.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three consecutive monthly performance returns have been sent on or before the contractual deadline, each with filed evidence."
                cadence: rolling
              tasks:
                - "List every reporting obligation and indicator in the contract"
                - "Build a return template in the authority's required format"
                - "Prepare and send the monthly performance return @recurring(monthly:5)"
                - "File the evidence behind each figure with the return"
            - name: Audit-ready timesheets and invoice evidence
              description: |-
                ## Purpose
                Auditors test public spending, and consulting invoices are a favourite place for internal and external auditors to test controls. Timesheets that tie to deliverables, invoices that tie to purchase orders and approvals, and expenses within the client's policy mean an audit sample is a non-event rather than a dispute.

                ## Milestones
                1. A timesheet format that records days, the deliverable worked on and the approving client officer.
                2. Every invoice matched to a purchase order number and approved timesheets.
                3. The client's expenses policy summarised and applied to all claims.
                4. A folder per month holding timesheets, approvals and invoices together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every invoice raised on the contract is filed with its purchase order, approved timesheets and policy-compliant expenses."
                cadence: rolling
              tasks:
                - "Get a copy of the client's expenses policy and summarise its limits"
                - "Submit timesheets with deliverable references for approval @recurring(weekly:fri)"
                - "Raise the monthly invoice against the purchase order with approvals attached @recurring(monthly:28)"
                - "Set up a folder per month for timesheets, approvals and invoices"
            - name: Political and parliamentary calendar tracker
              description: |-
                ## Purpose
                Government work bends around events consultants do not control: budget statements, legislative sessions, committee hearings, party conferences, recesses and elections. A shared calendar of these dates, reviewed monthly, lets you plan workshops, readouts and approvals for the weeks when people will actually be available.

                ## Milestones
                1. A calendar holding session dates, recesses, budget events and known committee hearings for your client's government.
                2. Dates when your client's minister or elected lead is likely to be unavailable flagged.
                3. Engagement milestones checked against the calendar and moved where they clash.
                4. The calendar shared with the engagement team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared political calendar covering the next six months exists and every engagement milestone has been checked against it."
                cadence: rolling
              tasks:
                - "Add legislative session and recess dates to a shared calendar"
                - "Add budget events and scheduled committee hearings"
                - "Check engagement milestones against the calendar and flag clashes"
                - "Update the political calendar with newly announced dates @recurring(monthly:20)"
            - name: Approvals chase across the governance chain
              description: |-
                ## Purpose
                Long approval cycles are the defining feature of public work: a recommendation can sit with a programme board, then finance, then a minister's office for months. Tracking each decision you are waiting on, who holds it and when it is next due, lets you chase politely and warn the team before a delay hits the plan.

                ## Milestones
                1. A list of every pending decision with its owner, the meeting or office it sits with and the expected date.
                2. The papers each approver needs identified and ready.
                3. A weekly chase routine run with the client lead.
                4. Slipped approvals reflected in the engagement plan within a week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An approvals tracker shows owner, forum and expected date for every pending decision and has been updated weekly for a month."
                cadence: rolling
              tasks:
                - "List every decision the engagement is waiting on"
                - "Add owner, forum and expected date to each pending approval"
                - "Review pending approvals with the client lead @recurring(weekly:wed)"
                - "Move any slipped approval into the engagement plan and tell the team"
            - name: Change control log for public contracts
              description: |-
                ## Purpose
                Scope drift on a public contract is risky in a specific way: work outside the contract may not be payable, and changes above certain limits can need a fresh procurement. A change log, with every request put through formal change control before work starts, protects both the authority and you.

                ## Milestones
                1. The contract's change control clause and any value limits summarised.
                2. A log recording each change request, its cost, the approving officer and status.
                3. No out-of-scope work started without an approved change note.
                4. Risks and issues on the contract logged beside the changes.

                ## Notes
                Start from the **Risk register** template for the risks and issues side.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change to scope, fee or timeline since contract start appears in the log with an approved change note."
                cadence: rolling
              tasks:
                - "Summarise the contract's change control clause and value limits"
                - "Create the change log with request, cost, approver and status"
                - "Review new requests and open risks in the change log @recurring(weekly:thu)"
                - "Pause any work that lacks an approved change note"
            - name: Records retention for public engagements
              description: |-
                ## Purpose
                Records on a government contract often have to be kept for years, returned to the authority or destroyed securely at the end, and information requests can arrive long after the work closes. A simple filing structure and retention schedule means you can produce or delete the right records on request.

                ## Milestones
                1. The contract's records, retention and data return clauses summarised.
                2. A folder structure for drafts, finals, data received and correspondence.
                3. Personal data from the engagement listed with its lawful retention period.
                4. A quarterly check that files are in the right place and expired data has been dealt with.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retention schedule exists for each public contract and the last quarterly check has been recorded."
                cadence: rolling
              tasks:
                - "Read the records and data clauses in your current public contract"
                - "Set up the folder structure for drafts, finals, data and correspondence"
                - "List personal data held and its retention period"
                - "Check filing and delete or return expired data as the contract requires @recurring(quarterly)"
            - name: Social value commitments delivery tracker
              description: |-
                ## Purpose
                Many public tenders now score social value: local employment, apprenticeships, small business spend, volunteering or environmental commitments, and those promises become contract obligations. Tracking delivery each quarter turns a bid answer into evidence and avoids an awkward contract review.

                ## Milestones
                1. Every social value commitment from the winning bid listed with its measure and target.
                2. An owner named for each commitment.
                3. Quarterly progress recorded with evidence.
                4. Shortfalls raised with the contract manager with a recovery plan.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A tracker shows quarterly progress with evidence against every social value commitment made in the winning bid."
                cadence: rolling
              tasks:
                - "Copy every social value commitment from the winning bid into a tracker"
                - "Name an owner and a measure for each commitment"
                - "Record progress and evidence on social value commitments @recurring(quarterly)"
                - "Agree a recovery plan with the contract manager for any shortfall"
            - name: Quarterly contract review with the commercial lead
              description: |-
                ## Purpose
                On public contracts the commercial or contract manager, not the policy team you work with day to day, often decides renewals, extensions and whether you are invited to the next call-off. A short quarterly review with them, covering performance, spend against the contract value and upcoming needs, builds a relationship most consultants neglect.

                ## Milestones
                1. The commercial lead for each contract named and a quarterly meeting agreed.
                2. A standard agenda covering performance, spend to date, changes and forward needs.
                3. Notes and agreed actions from each review circulated within two working days.
                4. Spend against the contract ceiling checked so it is never breached by surprise.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Quarterly reviews with the commercial lead have been held and minuted for each active public contract, with spend against ceiling recorded."
                cadence: cyclic
              tasks:
                - "Ask your client lead who manages the contract commercially"
                - "Draft a four-point agenda for the first review"
                - "Hold the contract review and circulate notes within two days @recurring(quarterly)"
                - "Check spend to date against the contract ceiling"
            - name: Value for money assessment fundamentals
              description: |-
                ## Purpose
                Every public body must show that spending gives value for money, usually judged on economy, efficiency, effectiveness and increasingly equity, and audit bodies test recommendations on exactly these terms. Learning to frame every option and finding this way makes your work easier for officials to defend.

                ## Milestones
                1. Notes on the value for money criteria used by your client's audit body, in your own words.
                2. Two published audit reports read and their value for money conclusions summarised.
                3. A one-page value for money checklist for your own recommendations.
                4. The checklist applied to a current or recent piece of your work.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A value for money checklist exists, built from two audit reports, and has been applied to one of your own recommendations."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download two recent value for money reports from your client's national audit body"
                - "Summarise how each report judged economy, efficiency and effectiveness"
                - "Write a one-page value for money checklist"
                - "Test a current recommendation against the checklist"
            - name: Business case writing in the five-case structure
              description: |-
                ## Purpose
                Many governments ask for spending proposals in a structured business case, often covering strategic, economic, commercial, financial and management cases, and consultants are frequently hired to draft one. Practising the structure on a real or past decision teaches you what approvers look for and where cases usually fail.

                ## Milestones
                1. Your client government's official business case guidance read and summarised.
                2. A practice outline business case written for one real decision, with each case covered.
                3. The case reviewed by someone who has sat on an approvals panel.
                4. A list of the five weaknesses reviewers most often find, drawn from that feedback.

                ## Notes
                The UK Green Book is a widely used example of this structure; follow whatever your client's treasury or finance ministry publishes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A practice outline business case covering every case in the client's guidance has been reviewed by an experienced approver."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Download your client government's business case guidance"
                - "Pick a real decision to practise on and draft the strategic case"
                - "Draft the economic, commercial, financial and management cases"
                - "Ask a former approvals panel member to review the draft"
            - name: Options appraisal with cost-benefit analysis
              description: |-
                ## Purpose
                The heart of most public business cases is an options appraisal: a long list filtered to a short list, each costed and valued over time against a do-minimum option, using the discount rate and methods the finance ministry publishes. Getting this right is what separates a defensible recommendation from a preferred answer dressed up.

                ## Milestones
                1. A long list of options generated against clear criteria and filtered to a short list with reasons.
                2. A do-minimum or business-as-usual option included as the baseline.
                3. Costs and benefits for each short-listed option over the appraisal period, discounted using the official rate.
                4. Sensitivity tests run on the two or three assumptions that matter most.

                ## Notes
                Check the current discount rate and optimism bias guidance from your client's finance ministry. Never invent a monetised benefit without a cited source.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A worked options appraisal with a long list, short list, baseline option, discounted costs and benefits and sensitivity tests is complete."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Find the official discount rate and appraisal guidance for your client"
                - "Write a long list of options and filter it against stated criteria"
                - "Build a simple discounted model for the short list and a do-minimum option"
                - "Run sensitivity tests on the three riskiest assumptions"
            - name: Answering scored quality questions in tenders
              description: |-
                ## Purpose
                Scoring panels mark tenders against a published method, question by question, with word limits and scoring descriptors. Answers that mirror the evaluation criteria, give evidence and stay within limits score well; elegant prose that ignores the descriptors does not.

                ## Milestones
                1. The scoring descriptors from three past tenders collected and the top-score language noted.
                2. A standard answer structure that addresses each sub-criterion in order.
                3. A library of evidence: case studies, CVs and outcomes with client permission to cite.
                4. One practice answer marked by a colleague using the published descriptors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice tender answer has been marked against published descriptors and an evidence library of at least five case studies exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect scoring descriptors from three past tenders in your field"
                - "Write a standard answer structure that follows each sub-criterion"
                - "Build an evidence library of case studies you have permission to cite"
                - "Ask a colleague to mark a practice answer against the descriptors"
            - name: Writing briefings for ministers and senior officials
              description: |-
                ## Purpose
                Officials will often take your analysis and turn it into a submission or briefing for a minister or elected lead, and the closer your material is to that format, the more of it survives. Learning the conventions, a clear recommendation, the decision sought, options, risks and handling, makes your work usable at the top.

                ## Milestones
                1. The client's briefing or submission format obtained and its sections understood.
                2. A practice two-page briefing written on a current issue in your engagement.
                3. Feedback from a client official on what would change before it went up.
                4. A reusable briefing outline saved for future work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A two-page briefing in the client's format has been reviewed by a client official and a reusable outline saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your client lead for a blank briefing or submission template"
                - "Draft a two-page briefing on a current engagement issue"
                - "Ask a client official what they would change before sending it up"
                - "Save the corrected structure as a reusable outline"
            - name: Public consultation design and response analysis
              description: |-
                ## Purpose
                Policy changes often require a formal public consultation, and consultants are hired both to design the questions and to analyse thousands of responses fairly. A well-designed consultation gets usable answers, and a transparent analysis method withstands challenge from groups who feel unheard.

                ## Milestones
                1. The legal or policy requirements for consultation in the client's jurisdiction noted.
                2. Consultation questions drafted so they are neutral, answerable and linked to decisions.
                3. A coding frame and analysis method agreed before responses arrive.
                4. A summary of responses that reports volume and themes separately, with campaign responses identified.

                ## Notes
                Report what people said, not what you think of it. Weighting or dismissing responses is the client's decision, and it must be explained.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A consultation question set and a written analysis method are agreed with the client before the consultation opens."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check the consultation requirements that apply to the policy"
                - "Draft neutral questions tied to the decisions the client must make"
                - "Agree a coding frame and analysis method with the client"
                - "Test the questions with five people outside the project"
            - name: Theory of change and policy evaluation design
              description: |-
                ## Purpose
                Governments increasingly ask whether programmes worked, and an evaluation can only answer that if the logic was set out before delivery began. Building a theory of change and an evaluation plan with the client means outcomes can be measured, not asserted, when the funding is reviewed.

                ## Milestones
                1. A theory of change linking inputs, activities, outputs, outcomes and impacts, with assumptions stated.
                2. Evaluation questions agreed with the client and the evaluation type chosen: process, impact or economic.
                3. Indicators and data sources named for each outcome, including baseline data.
                4. An evaluation plan with timings and responsibilities signed off.

                ## Notes
                Many finance ministries publish evaluation guidance, such as the UK Magenta Book; use your client's own.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A theory of change and evaluation plan with indicators, baselines and timings is signed off by the client before delivery starts."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Run a two-hour session with the client to draft the theory of change"
                - "Write the evaluation questions and choose the evaluation type"
                - "Name an indicator and data source for each outcome"
                - "Get the evaluation plan signed off by the programme owner"
            - name: Benefits realisation tracking for public programmes
              description: |-
                ## Purpose
                Government programmes are approved on promised benefits, and audit bodies regularly report that those benefits were never measured. Helping a client set up benefit profiles, owners and a monthly tracking routine gives them evidence for their board and gives you a record of impact.

                ## Milestones
                1. Benefits from the approved business case listed, each with a measure, baseline and owner.
                2. Benefit profiles showing when each benefit is expected to appear.
                3. A monthly benefits report presented to the programme board.
                4. Benefits that are not on track raised with a cause and action.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every benefit in the business case has an owner, baseline and profile, and three monthly benefits reports have gone to the programme board."
                cadence: rolling
              tasks:
                - "Extract every promised benefit from the approved business case"
                - "Agree a measure, baseline and owner for each benefit"
                - "Update benefit measures and report to the programme board @recurring(monthly:15)"
                - "Raise any benefit behind its profile with a cause and proposed action"
            - name: Equality and accessibility impact assessments
              description: |-
                ## Purpose
                Many public bodies have legal duties to consider how decisions affect people with protected characteristics, and to make services and documents accessible. Building these assessments into your recommendations, rather than leaving them to the end, avoids challenges and produces better policy.

                ## Milestones
                1. The client's equality duty and assessment template obtained.
                2. Groups likely to be affected by your recommendations identified with available data.
                3. Mitigations proposed for any adverse impact found.
                4. Client deliverables checked against the accessibility standard the body uses.

                ## Notes
                The legal judgement on whether a duty is met belongs to the client's lawyers; your role is evidence and a clear record.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An equality impact assessment in the client's template is completed for the main recommendation and deliverables pass the client's accessibility check."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the client for their equality impact assessment template"
                - "List the groups your recommendation could affect and the data available"
                - "Draft mitigations for any adverse impact"
                - "Run the final report through the client's accessibility checks"
            - name: Choosing a public sector segment to focus on
              description: |-
                ## Purpose
                Central government, local government, health, education, police and regulators buy consulting in very different ways, and trying to serve all of them spreads credentials thin. Choosing one or two segments where your experience and network are strongest makes your case studies and contacts count.

                ## Milestones
                1. Five candidate segments scored on your credentials, contacts, typical contract size and procurement route.
                2. Annual spend on consulting in each segment estimated from published contract data.
                3. One or two segments chosen with the reasoning written down.
                4. A list of twenty target bodies in the chosen segments.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming one or two target segments, supported by a scored comparison of five, and a list of twenty target bodies."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List five public sector segments you could plausibly serve"
                - "Search published contract award data for consulting spend in each"
                - "Score each segment on credentials, contacts and contract size"
                - "Write down the chosen segments and twenty target bodies"
            - name: Prime, consortium or partner decision for a large tender
              description: |-
                ## Purpose
                Larger public tenders often ask for capabilities or turnover that one firm cannot show alone, so the choice is to lead a consortium, join one as a partner or let it pass. Making that choice deliberately, with liability, workshare and who owns the client relationship agreed in writing, avoids disputes after award.

                ## Milestones
                1. The tender's minimum requirements compared with what you can show alone.
                2. Two or three potential partners assessed on fit, reputation and conflicts.
                3. A teaming agreement covering workshare, liability, exclusivity and who leads the client relationship.
                4. A decision recorded with legal review of the teaming agreement.

                ## Notes
                Have a lawyer review any teaming or consortium agreement. Joint and several liability clauses deserve particular attention.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to lead, join or decline a consortium for a named tender, with a lawyer-reviewed teaming agreement if proceeding."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare the tender's turnover and capability tests with your own evidence"
                - "Shortlist two or three partners and check them for conflicts"
                - "Draft heads of terms for workshare, liability and client ownership"
                - "Send the teaming agreement to a lawyer for review"
            - name: Price submission under price-quality evaluation
              description: |-
                ## Purpose
                Evaluation of a tender combines a quality score and a price score using a published formula, and the formula decides whether cutting price or adding quality wins more points. Modelling the evaluation before setting your price avoids both losing on cost and being rejected as an abnormally low tender.

                ## Milestones
                1. The tender's price-quality weighting and price scoring formula modelled in a spreadsheet.
                2. Likely competitor price ranges estimated from published past awards.
                3. Points gained from a price cut compared with points gained from a stronger quality answer.
                4. A price chosen that covers your costs and is explainable if the authority queries it.

                ## Notes
                Framework rate cards often cap day rates; check the cap before modelling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pricing model for a live tender shows total evaluated score at three price points, and the chosen price is recorded with its rationale."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the tender's price scoring formula into a spreadsheet"
                - "Look up published award values for three similar past contracts"
                - "Model total evaluated score at three price points"
                - "Record the chosen price and why it is sustainable"
            - name: Tender debrief and bid lessons log
              description: |-
                ## Purpose
                Unsuccessful bidders usually receive scores and reasons from the public body, and the debrief is the richest feedback you will ever get on your writing. Requesting it every time and logging the lessons turns each loss into a better next bid.

                ## Milestones
                1. A debrief requested within the standstill period for every lost tender.
                2. Scores by question compared with the winner where disclosed.
                3. A lessons log with the three changes each debrief suggests.
                4. Changes applied to the answer library and bid gate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every lost public tender in the past year has a recorded debrief and at least one change applied to the answer library."
                cadence: rolling
              tasks:
                - "Request a written debrief for your most recent lost tender"
                - "Log scores by question beside the winner's where given"
                - "Write three changes the debrief suggests"
                - "Review the year's bid lessons and update the answer library @recurring(yearly)"
            - name: Response to a disputed procurement outcome
              description: |-
                ## Purpose
                Occasionally a tender outcome looks wrong: a scoring error, criteria applied that were never published, or a winner who seems ineligible. The standstill period after award is short, so knowing in advance how to ask clarifying questions, and when to take legal advice, prevents both rash challenges and missed rights.

                ## Milestones
                1. The standstill period and challenge process for your target bodies noted.
                2. A calm clarification letter template asking for specific scoring explanations.
                3. A procurement lawyer identified whom you could call at short notice.
                4. A decision rule on when a concern is worth formal action, weighed against the relationship.

                ## Notes
                Whether you have grounds is a legal question for a procurement lawyer. Time limits can be very short, so act within days, not weeks.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note on standstill periods and challenge steps exists, with a clarification letter template and a named procurement lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the standstill period and challenge process for your main target body"
                - "Draft a template letter asking for scoring clarification"
                - "Find a procurement lawyer and note their contact details"
                - "Write your rule for when to escalate beyond clarification"
            - name: Cash flow plan for slow public payment cycles
              description: |-
                ## Purpose
                Once an invoice is approved most government clients pay reliably, but approval can wait on purchase orders, milestone sign-offs and year-end freezes. For a freelancer or small firm, planning for the gap between work and cash protects you on a contract that may run for a year or more.

                ## Milestones
                1. Payment terms, milestone triggers and invoice approval steps for each public contract written down.
                2. A twelve-week cash forecast showing expected receipts by contract.
                3. A named accounts payable contact at each client.
                4. A monthly chase of any invoice past its terms.

                ## Notes
                Many governments set prompt payment targets for suppliers; know yours and quote it politely when chasing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-week cash forecast by public contract exists and overdue invoices have been chased on a set day each month."
                cadence: rolling
              tasks:
                - "Write down payment terms and approval steps for each public contract"
                - "Build a twelve-week forecast of expected receipts"
                - "Find the accounts payable contact at each client"
                - "Chase any public invoice past its payment terms @recurring(monthly:10)"
            - name: Intellectual property and reuse rights in public contracts
              description: |-
                ## Purpose
                Contracts with the state frequently assign deliverables to the authority, or require open licences so other bodies can reuse them, which can catch out consultants who bring their own frameworks and tools. Reading the IP clauses before bidding, and listing your existing materials as background IP, keeps your methods yours.

                ## Milestones
                1. The IP and licensing clauses of standard contracts used by your target bodies summarised.
                2. A list of your existing frameworks, tools and data defined as background IP.
                3. A standard bid clarification or schedule entry protecting background IP.
                4. Each new public contract checked for IP terms before signature.

                ## Notes
                Interpreting IP clauses is a legal matter; get advice on anything unusual.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A background IP list exists and the IP terms of each new public contract have been checked before signing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the IP clauses in a standard contract from your main target body"
                - "List the frameworks and tools you already own"
                - "Draft a background IP schedule for future bids"
                - "Ask a lawyer about any clause that assigns your existing materials"
            - name: Pre-market engagement and supplier day
              description: |-
                ## Purpose
                Before a significant tender, public bodies often hold supplier days or publish market engagement questionnaires, and this is the last legitimate chance to shape the requirement and meet the buyers. Arriving prepared, with thoughtful written answers, puts you on the commissioning team's radar without breaching fairness rules.

                ## Milestones
                1. The engagement notice, questions and any published draft requirement read in full.
                2. Written responses submitted that address feasibility, risks and realistic timelines.
                3. Notes from the event capturing the buyer's priorities and concerns.
                4. A bid gate score updated with what was learned.

                ## Notes
                Everything said in pre-market engagement may be shared with all bidders. Ask useful questions, not ones that reveal your solution.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written pre-market responses were submitted and event notes are filed against the opportunity with an updated gate score."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Register for the supplier day and download the engagement pack"
                - "Draft written answers to the market engagement questions"
                - "Attend and note the buyer's stated priorities"
                - "Update the opportunity's gate score with what you learned"
            - name: Clarification questions during a live tender
              description: |-
                ## Purpose
                Live tenders run a clarification window when bidders can ask questions, with every answer published to all bidders. Asking precise questions early about scope, evaluation and pricing clears up ambiguity without giving away your approach to competitors.

                ## Milestones
                1. The tender read in full by two people and ambiguities listed.
                2. Questions drafted so they clarify without revealing your solution.
                3. Questions submitted before the clarification deadline.
                4. Every published answer from the authority read and reflected in the bid.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Clarification questions were submitted before the deadline and every published answer has been checked against the draft bid."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the clarification deadline in your calendar"
                - "Have two people read the tender and list ambiguities"
                - "Submit neutral clarification questions through the portal"
                - "Check every published answer against the draft response"
            - name: Tender submission week
              description: |-
                ## Purpose
                Public portals close to the minute and do not accept late uploads, and the final week is when formatting, declarations and file sizes cause disasters. A submission plan with an internal deadline two days before the real one turns the last week into checking rather than writing.

                ## Milestones
                1. An internal deadline set at least 48 hours before the portal closes.
                2. All answers checked against word limits, descriptors and mandatory requirements.
                3. Declarations, pricing schedules and attachments signed and in the required format.
                4. Submission uploaded and the portal receipt saved.

                ## Notes
                Upload a draft early if the portal allows replacement; it proves the files go through.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tender was submitted at least a day before the portal deadline, with a saved receipt and a completed compliance checklist."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set an internal deadline 48 hours before the portal closes"
                - "Check every answer against its word limit and scoring descriptors"
                - "Sign declarations and convert attachments to the required formats"
                - "Upload the submission and save the portal receipt"
            - name: Shortlist presentation and clarification interview
              description: |-
                ## Purpose
                Shortlisted bidders are often invited to present or answer panel questions, and these sessions are usually scored against the same published criteria as the written bid. Preparing the team you actually proposed, with rehearsed answers to the panel's likely concerns, can move the score more than any page of the bid.

                ## Milestones
                1. The invitation, scoring criteria and time limit understood.
                2. A presentation built around the scored criteria, delivered by the named team.
                3. Two rehearsals held with a colleague playing a sceptical panel member.
                4. Answers prepared for likely concerns about risk, cost and capacity.

                ## Notes
                Send only the people named in the bid. Panels notice when a senior partner presents and never appears again.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The named bid team delivered a rehearsed presentation within the time limit, with prepared answers to at least five likely panel questions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the invitation and note the scoring criteria and time limit"
                - "Build the presentation around the scored criteria"
                - "Run two rehearsals with a sceptical colleague as panel"
                - "Write answers to five likely panel concerns"
            - name: Audit body or public accounts committee scrutiny
              description: |-
                ## Purpose
                A programme you supported may be examined by the national audit office or a legislature's accounts committee, sometimes years later, and consultants' fees and advice are often part of the story. Being ready to give the client accurate records quickly helps them answer well and protects your reputation.

                ## Milestones
                1. The scope of the review and what the client needs from you understood.
                2. Contracts, deliverables, change notes and invoices for the engagement gathered.
                3. A factual chronology of your involvement prepared for the client.
                4. Any request to appear or give evidence discussed with your own legal adviser first.

                ## Notes
                Your role is to support the client with facts. Do not comment publicly on the review.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete records pack and factual chronology were given to the client within the timescale the review required."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the client what the review covers and what they need from you"
                - "Gather contracts, deliverables, change notes and invoices"
                - "Write a factual chronology of your involvement"
                - "Talk to your own legal adviser before agreeing to give evidence"
            - name: Pre-election period and change of government
              description: |-
                ## Purpose
                In the weeks before an election, public bodies usually follow rules that restrict new announcements, contracts and politically sensitive activity, and a new government may stop or reshape programmes. Planning for the pre-election period and a possible change of direction keeps your engagement useful and your pipeline realistic.

                ## Milestones
                1. The client's pre-election guidance read and its effect on your engagement noted.
                2. Engagement milestones moved or paused where the guidance requires.
                3. Party manifestos read for commitments that would affect your work.
                4. A plan for the first month after the election, covering briefings for incoming leaders.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Engagement plans have been adjusted to the pre-election guidance and a post-election plan referencing manifesto commitments exists."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the client for their pre-election period guidance"
                - "Mark milestones that must pause during the restricted period"
                - "Read each major party's manifesto for commitments touching your work"
                - "Draft a plan for briefing incoming leaders after the election"
            - name: Freelancer's first public sector contract
              description: |-
                ## Purpose
                Independent consultants often reach government through a framework partner, a staffing agency or a small direct award, each with its own rules on day rates, contractor status and insurance. Getting the first contract right, with the paperwork and tax status checked, sets you up for a steady line of public work.

                ## Milestones
                1. The route to market chosen: direct award, framework partner or agency.
                2. Your contractor or employment status for the role checked with an accountant against local rules.
                3. Insurance, vetting and supplier onboarding completed.
                4. A first deliverable agreed in writing with clear acceptance criteria.

                ## Notes
                Many countries have specific rules on whether a contractor working inside government is treated as an employee for tax; take advice before signing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed first public sector contract exists with tax status checked by an accountant and a first deliverable agreed in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose between a direct approach, a framework partner or an agency"
                - "Ask an accountant to check your status for the role"
                - "Complete insurance, vetting and the client's supplier onboarding"
                - "Agree the first deliverable and its acceptance criteria in writing"
            - name: Moving from government service into consulting
              description: |-
                ## Purpose
                Former officials bring real insight into how decisions get made, but most governments have rules on business appointments, lobbying and contact with former colleagues for a set period after leaving. Checking those rules before accepting work protects your reputation and keeps clients out of trouble.

                ## Milestones
                1. The business appointment or post-employment rules that apply to you read and summarised.
                2. Any required approval or advice sought from the relevant body before taking a role.
                3. A clear list of restrictions: former departments, contacts and information you cannot use.
                4. A one-page story of your public sector experience framed for clients, without confidential material.

                ## Notes
                Information you learned in office remains confidential after you leave, whatever your contract says.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Post-employment restrictions are written down, any required approval has been obtained and a client-ready experience summary exists."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the post-employment rules that apply to your former grade"
                - "Seek any approval or advice the rules require before accepting a role"
                - "List the departments and contacts you must avoid and for how long"
                - "Write a one-page experience summary without confidential detail"
            - name: Private sector consultant's first government engagement
              description: |-
                ## Purpose
                Consultants used to corporate clients often find government slower, more consultative and more cautious about risk, and they misread caution as indifference. A deliberate first month, learning how decisions are made and adjusting pace and tone, earns trust that a corporate style can lose.

                ## Milestones
                1. A conversation with an experienced public sector consultant about common mistakes.
                2. The client's governance, approval steps and political context mapped in week one.
                3. Language in decks adjusted: public value, citizens and services rather than customers and profit.
                4. Feedback from the client lead at the end of month one, with changes made.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By the end of the first month a governance map exists and the client lead's feedback has been recorded and acted on."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask an experienced public sector consultant for their three biggest lessons"
                - "Map the client's governance and approval steps in week one"
                - "Rewrite one deck in the language of public value and services"
                - "Ask the client lead for feedback at the end of month one"
            - name: Engagement manager on a multi-year public programme
              description: |-
                ## Purpose
                Large programmes in government can run for several years through changes of minister, senior official and policy, with turnover on both sides. Managing such an engagement well means keeping a written decision record, renewing sponsorship after every change and planning for contract break points and re-procurement.

                ## Milestones
                1. A decision log recording every major decision with date, forum and approver.
                2. A sponsor renewal routine triggered by any change of minister or senior official.
                3. Contract break points, extension options and re-procurement dates in the plan.
                4. A handover file that a new team member could use in a day.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A current decision log, a dated plan of contract break points and a handover file exist for the programme."
                cadence: rolling
              tasks:
                - "Start a decision log with date, forum and approver for each decision"
                - "Plot contract break points and extension options on the programme plan"
                - "Review the decision log and team handover file @recurring(weekly:tue)"
                - "Book a briefing for any new minister or senior official within a month of their arrival"
            - name: Local government and municipal client engagements
              description: |-
                ## Purpose
                Councils and municipalities combine elected members, officers and statutory duties on tight budgets, with decisions made in public committee meetings. Consulting to them needs fewer slides, more practical delivery and close attention to committee timetables and local politics.

                ## Milestones
                1. The council's committee structure, meeting calendar and report deadlines mapped.
                2. The relationship between the cabinet or lead member and senior officers understood.
                3. Recommendations written in the council's committee report format.
                4. Costs and savings expressed in terms of the council's budget gap.

                ## Notes
                Committee reports are usually public, so the drafting standard matters more here than anywhere.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A committee timetable and report format are in hand and a recommendation has been drafted in the council's report format."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the council's committee calendar and report deadlines"
                - "Map the lead member and senior officer for your engagement"
                - "Draft your recommendation in the committee report format"
                - "Express costs and savings against the council's published budget gap"
            - name: Small consultancy meeting framework entry thresholds
              description: |-
                ## Purpose
                Framework and tender selection stages often set minimum turnover, insurance levels, accreditations and years of trading that small firms struggle to meet. Planning over a year or two to meet the thresholds for your target frameworks, or finding a partner route, opens work otherwise out of reach.

                ## Milestones
                1. Entry criteria for three target frameworks listed side by side.
                2. Gaps against each criterion identified with a cost and time to close.
                3. A plan to close the gaps or a chosen partner route for each framework.
                4. The next framework reopening date in the calendar with the plan due before it.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A gap analysis against three frameworks exists with a dated plan or partner route for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the selection criteria for three target frameworks"
                - "Score your firm against each criterion"
                - "Cost the steps needed to close each gap"
                - "Diary the next reopening date for each framework"
            - name: Independent assurance review of a major programme
              description: |-
                ## Purpose
                Governments commission independent reviews at key decision points of major programmes, rating delivery confidence and making recommendations, and experienced consultants are often asked to sit on review teams. Doing one well means rapid document review, frank interviews and a clear rating backed by evidence.

                ## Milestones
                1. The assurance framework, review stage and rating scale understood.
                2. Key documents read and an interview plan agreed with the programme.
                3. Interviews completed and findings tested against evidence.
                4. A report with a delivery confidence rating and prioritised recommendations delivered on time.

                ## Notes
                Start from the **Remediation plan** template to help the programme turn recommendations into actions. Independence matters: decline if you have worked on the programme.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An assurance report with an evidenced delivery confidence rating and prioritised recommendations was delivered by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Read the assurance framework and the rating scale it uses"
                - "Confirm you have no prior involvement with the programme"
                - "Agree the document list and interview schedule with the programme office"
                - "Draft findings and test each against the evidence before rating"
            - name: Regulatory impact assessment for a proposed rule
              description: |-
                ## Purpose
                New regulations usually need an impact assessment estimating costs and benefits for businesses, the public sector and citizens, and these are scrutinised by oversight bodies and opponents. Producing one requires evidence on who is affected and how, honest uncertainty ranges and options including not regulating.

                ## Milestones
                1. The problem, objectives and rationale for intervention written clearly.
                2. Options set out, including a do-nothing and a non-regulatory option.
                3. Costs and benefits estimated by affected group, with sources and ranges.
                4. Impacts on small businesses and other specific groups addressed as the guidance requires.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A draft impact assessment with options, sourced costs and benefits by group and uncertainty ranges is accepted by the client policy team."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the client's impact assessment guidance and template"
                - "Write the problem statement and rationale for intervention"
                - "Estimate costs and benefits by affected group with sources"
                - "Ask the agent to draft a plain summary of the assessment for consultation"
            - name: Spending review submission support for a department
              description: |-
                ## Purpose
                When the finance ministry runs a spending review, departments must justify their budgets against priorities, often under tight deadlines and with demanding templates. Helping a department prepare its submission draws on everything in this area: value for money, options, evidence of outcomes and an understanding of what the centre will challenge.

                ## Milestones
                1. The finance ministry's commissioning letter, templates and deadlines understood.
                2. Baseline spending and outcomes for each programme assembled.
                3. Options for savings and investment prepared with value for money evidence.
                4. A submission reviewed by the department's finance director before deadline.

                ## Notes
                The department owns the submission and its numbers; your role is analysis and drafting under its direction.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A spending review submission with baselines, options and value for money evidence was reviewed by the finance director before the deadline."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Read the finance ministry's commissioning letter and templates"
                - "Assemble baseline spend and outcomes for each programme"
                - "Prepare savings and investment options with evidence"
                - "Book a review slot with the finance director a week before deadline"
---

# Public Sector Consulting Engagements

Government clients buy differently, decide slowly and publish more than private clients ever would, and consultants who treat a ministry like a corporate account lose bids and goodwill in equal measure. This area starts with foundations (the client map, procurement routes, supplier registration, the compliance pack, declarations, the budget year, vetting and a drafting standard that assumes publication), then the operating machinery of tender watch, bid gates, contract returns, audit-ready evidence and approval tracking, the skills of value for money, business cases, options appraisal, scored tender answers, ministerial briefings, consultation and evaluation, decisions on segments, consortia, price and intellectual property, the dated events from supplier days to elections, variants for freelancers, former officials, private sector converts and managers, and finally specialist work on assurance reviews, impact assessments and spending submissions.

The rhythm is weekly for the tender watch, the approvals chase and the change log, monthly for contract returns, invoices, benefits and the political calendar, and quarterly for records, social value and the contract relationship review. The Compliance control, Risk register, Meeting notes, Metrics log and Remediation plan templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
