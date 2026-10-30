---
id: data-analytics.data-governance-ownership
name: Data Governance & Ownership
description: "A governance charter, named owners and stewards for every data domain, a classification scheme, access approval and recertification, retention schedules and a clear route for deciding what a dataset means."
category: business
version: 1.0.0
tags: [data-analytics, data-governance-ownership, enterprise, manager, team, data-stewardship, access-control, data-retention]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - compliance-control
    - risk-register
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Governance & Ownership
          description: "Assigning owners to data domains, setting access and retention rules, and making clear who decides what a dataset means."
          projects:
            - name: Data governance charter and scope
              description: |-
                ## Purpose
                Governance programmes that begin with a tool purchase and no mandate stall the first time an owner says no. A two-page charter that names the sponsor, the problems being solved (conflicting numbers, unclear access, data kept forever), what is in and out of scope for the first year, and who has the final word gives every later project something to point at. Write it before appointing anyone, because the people you ask to be owners will want to read it first.

                ## Milestones
                1. A charter of no more than two pages naming the executive sponsor, the first-year scope and three problems it exists to fix.
                2. An explicit out-of-scope list, so the programme is not expected to solve every data complaint in year one.
                3. The charter signed off by the sponsor and filed where every owner and steward can read it.
                4. A date set, six to twelve months out, to review the charter against what actually happened.

                ## Notes
                Keep the first scope small: two or three domains that cause the most pain usually teach more than an organisation-wide rollout that never finishes.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed governance charter, at most two pages, naming the sponsor, first-year scope and out-of-scope list, is published to all owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the three data problems that cost the organisation most in the last year"
                - "Ask the intended executive sponsor for thirty minutes to agree the mandate"
                - "Draft the charter with scope, out of scope and the final decision maker"
                - "Publish the signed charter in the governance space and link it from the intranet"
            - name: Map of data domains and current custodians
              description: |-
                ## Purpose
                Before anyone can be named an owner, someone has to draw the lines: which tables and reports belong to Customer, Finance, Product, People or Supply, and who in practice looks after each today. A domain map built from the warehouse schemas, the main source systems and the people who get the support questions usually shows a handful of domains with obvious homes and two or three that nobody will claim. Those orphans are where the first ownership conversations should start.

                ## Milestones
                1. A list of eight to fifteen data domains, each described in one sentence a business reader would recognise.
                2. Every production warehouse schema and major source system assigned to exactly one domain.
                3. The person who currently answers questions about each domain recorded, even where no one is formally responsible.
                4. Unclaimed or disputed domains flagged for the sponsor with a recommendation for each.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A domain map assigns every production schema and major source system to one named domain, with unclaimed domains listed for a decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the list of production schemas and their table counts from the warehouse"
                - "Group schemas and source systems into draft domains in one sheet"
                - "Ask the data team who they go to with questions about each domain"
                - "Flag every domain with no clear custodian for the sponsor to resolve"
            - name: Appointing a named owner for each data domain
              description: |-
                ## Purpose
                An owner who was never asked, has no time and does not know what the role involves is a name on a slide, not an owner. Appointing a senior business person per domain, with a one-page role description, an agreed time commitment of a few hours a month and the sponsor's backing, turns the domain map into real accountability. Owners decide who may access the data, how long it is kept and what it means; stewards do the daily work for them.

                ## Milestones
                1. A one-page data owner role description covering decisions, time commitment and escalation route.
                2. A named owner agreed for every domain in first-year scope, each a person and never a team or mailbox.
                3. Each owner's acceptance recorded in writing, with their line manager aware of the commitment.
                4. The owner list published in the catalogue or governance space where analysts actually look.

                ## Notes
                Choose the person who would be blamed if the data were wrong or leaked, not the most enthusiastic analyst. The owner can delegate the work to a steward but not the accountability.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every in-scope domain has one named owner who has accepted the role in writing, and the list is published."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page data owner role description with a monthly time estimate"
                - "Agree a shortlist of candidate owners per domain with the sponsor"
                - "Hold a twenty-minute conversation with each candidate before naming them"
                - "Record each owner's written acceptance in the ownership register"
            - name: Data steward roles and responsibility matrix
              description: |-
                ## Purpose
                Owners decide, but someone has to review access requests, answer definition questions, maintain the catalogue entries and chase quality issues every week. A responsibility matrix that splits these tasks between owner, steward, data engineering and the platform team stops work falling into the gap between business and technical people. It also gives stewards a written basis for asking for time in their objectives.

                ## Milestones
                1. A matrix listing the twelve or so recurring governance tasks against owner, steward, engineering and platform roles.
                2. Exactly one accountable role per task, with responsible and consulted roles marked.
                3. At least one business steward and one technical steward named for each in-scope domain.
                4. Steward duties added to each steward's objectives or job description.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility matrix with one accountable role per governance task is approved, and every in-scope domain has a business and a technical steward named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every recurring governance task that happens or should happen each month"
                - "Mark one accountable role per task in a simple matrix"
                - "Name a business and a technical steward for each domain with their managers"
                - "Ask each steward's manager to add the duties to their objectives"
            - name: Data classification scheme with four levels
              description: |-
                ## Purpose
                Without a shared scale for sensitivity, every access request becomes a fresh negotiation and the same salary table is treated as harmless by one team and secret by another. A short scheme, typically Public, Internal, Confidential and Restricted, with a plain example of each and the handling rule that goes with it, gives owners a fast way to decide and analysts a way to know what they are holding. Agree it with security, legal and privacy colleagues so it matches the information security policy rather than competing with it.

                ## Milestones
                1. Four classification levels defined, each with two real examples from your own data.
                2. A handling rule per level covering who may access, where it may be stored and whether it may leave the platform.
                3. The scheme reconciled with the existing information security classification so there is one scale, not two.
                4. The scheme approved by the governance sponsor and the security lead.

                ## Notes
                Resist adding a fifth or sixth level. More levels mean more arguments about the boundary and slower decisions.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved four-level classification scheme, aligned with the security policy and with handling rules and examples for each level, is published."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the existing information security classification policy, if one exists"
                - "Draft four levels with two examples from your own warehouse for each"
                - "Write the access, storage and export rule for each level"
                - "Review the draft with the security lead and the privacy or legal contact"
            - name: Classifying the fifty most-used datasets
              description: |-
                ## Purpose
                A scheme on paper protects nothing until datasets carry a label. Starting with the fifty tables that appear most in query logs and dashboards covers most of what people actually touch, and owners can classify that many in a couple of sittings. The labels then drive access rules, masking and retention instead of being decorative.

                ## Milestones
                1. The fifty most-queried tables identified from warehouse query history.
                2. Each table classified by its domain owner, with columns holding personal or financial data noted.
                3. The classification recorded as a tag in the catalogue or warehouse, not only in a spreadsheet.
                4. Any table classified Restricted checked against who can currently read it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The fifty most-queried tables each carry an owner-approved classification tag, and current access to every Restricted table has been checked."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull the top fifty tables by query count over the last ninety days"
                - "Group the tables by domain and send each owner their list"
                - "Hold a one-hour classification session with each owner"
                - "Apply the agreed classification as a tag on every table"
            - name: Access request and approval workflow
              description: |-
                ## Purpose
                When access is granted by whoever answers a chat message first, nobody can say later who approved what or why. A single request route, a ticket or form asking for the dataset, the purpose and the end date, with approval by the domain owner or their steward, creates the record auditors and owners need. Aim for a turnaround of two working days on Internal data, or people will route around it.

                ## Milestones
                1. One request form or ticket type capturing requester, dataset, business purpose, access level and end date.
                2. Approval routed automatically to the owner or steward of the domain, based on the classification.
                3. A target turnaround published for each classification level.
                4. Every grant from the last month traceable to an approved request.

                ## Notes
                Ask for an end date on every request. Access with an expiry is far easier to keep tidy than access that has to be found and removed later.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All warehouse access is requested through one form with owner approval recorded, and a month of grants can be traced to approved requests."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect every place people currently ask for data access today"
                - "Design one request form with purpose, access level and end date fields"
                - "Route approvals to the owner or steward named in the ownership register"
                - "Announce the single route and close the informal channels"
            - name: Retention schedule for analytics data
              description: |-
                ## Purpose
                Analytics platforms keep everything by default, so raw event logs, old customer extracts and staging copies pile up for years past any business need and any legal basis. A retention schedule that sets a keep period and an end-of-life action per data category, agreed by owners and checked by legal counsel, turns that pile into a manageable rule. It also cuts storage cost and narrows what a breach could expose.

                ## Milestones
                1. Every data category in the warehouse and lake listed, from raw events to finance ledgers.
                2. A keep period and end-of-life action (delete, aggregate or archive) proposed for each category by its owner.
                3. The schedule reviewed by legal or records management for any statutory minimum or maximum.
                4. The approved schedule published, with the date each rule takes effect.

                ## Notes
                Legal and regulatory retention periods vary by country and sector. Agree them with your legal team or records manager; this project organises the decision, it does not set the law.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A retention schedule covering every warehouse data category, with keep periods and end-of-life actions reviewed by legal, is approved and published."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the data categories held in the warehouse and data lake"
                - "Ask each owner to propose a keep period and end-of-life action"
                - "Send the draft schedule to legal or records management for review"
                - "Publish the approved schedule with an effective date per rule"
            - name: Data governance council terms of reference
              description: |-
                ## Purpose
                Questions that cross domains, such as whether Sales may see Support tickets or which system is the source of truth for a customer's region, need a forum that can decide and make it stick. Terms of reference set who sits on the council, how often it meets, what it decides versus what owners decide alone, and how disagreements are escalated to the sponsor. Without them the council becomes a discussion group.

                ## Milestones
                1. Membership fixed: the sponsor or a delegate, each domain owner, the data lead, and security and legal as standing guests.
                2. A list of the decision types the council owns and the ones left to individual owners.
                3. A quorum, a decision rule and an escalation route written down.
                4. The first meeting held with a recorded decision log.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved council terms of reference naming members, decision types, quorum and escalation route, with a first meeting held and minuted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the council membership and standing guest list"
                - "Write which decisions belong to the council and which stay with owners"
                - "Agree a quorum and what happens when owners disagree"
                - "Book the first council meeting and circulate the terms beforehand"
            - name: Decision rights over what a dataset means
              description: |-
                ## Purpose
                Arguments about whether the orders table includes cancelled orders, or whether a customer record is one person or one account, go round for months when nobody has the authority to settle them. Writing down that the domain owner decides the meaning of their datasets, how they consult consumers first, and how a cross-domain dispute reaches the council gives every such argument an end. Record each ruling where analysts will find it, next to the dataset itself.

                ## Milestones
                1. A written rule that the domain owner has final say on the meaning of datasets in their domain.
                2. A consultation step: affected consumers given a set number of working days to object before a ruling.
                3. An escalation path for disputes that cross domains, ending with the council.
                4. Three live disputes settled under the new rule, each ruling recorded on the dataset's catalogue entry.

                ## Notes
                This is about who decides. The detailed definitions of business metrics are a separate piece of work; here you only settle the authority and the record.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision-rights rule is approved by the council and three real disputes about dataset meaning have been settled and recorded under it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect three current disagreements about what a dataset contains or means"
                - "Draft the decision-rights rule with a consultation period and escalation path"
                - "Take the rule to the council for approval"
                - "Settle the three disputes under the rule and record each ruling"
            - name: Quarterly access recertification
              description: |-
                ## Purpose
                Access granted for a project in March is usually still there in December, long after the project ended and sometimes after the person changed team. A quarterly review where each owner confirms or removes every grant to their Confidential and Restricted datasets is the single control auditors ask about most. Keeping it short, with a pre-filled list and a two-week window, is what makes owners actually do it.

                ## Milestones
                1. A list per owner of every user and group with access to their Confidential and Restricted data.
                2. Each grant confirmed or marked for removal by the owner within two weeks.
                3. Removals carried out and the evidence filed with the date and approver.
                4. Four consecutive quarters completed with every owner responding.

                ## Notes
                Start from the **Compliance control** template. Send owners a list they can tick, not a raw export they have to interpret.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly recertifications completed, each with every owner's response and removal evidence filed."
                cadence: cyclic
              tasks:
                - "Export current grants to Confidential and Restricted datasets by owner"
                - "Send each owner their pre-filled recertification list with a two-week deadline @recurring(quarterly)"
                - "Remove every grant marked for removal and record who approved it"
                - "Chase any owner who has not responded by the end of the window"
            - name: Monthly governance council meeting
              description: |-
                ## Purpose
                A council that meets only when something has gone wrong spends its time on blame instead of decisions. A fixed monthly hour with a standing agenda (open disputes, exceptions due for renewal, the scorecard, policy changes) keeps decisions moving and gives owners a predictable place to raise issues. Publish the decisions within two days so people who were not there can act on them.

                ## Milestones
                1. A recurring monthly slot accepted by every council member.
                2. A standing agenda with papers sent three working days before.
                3. A decision log with owner and due date for every action.
                4. Six consecutive meetings held with decisions published within two working days.

                ## Notes
                Start from the **Meeting notes** template. Cancel the meeting when there is nothing to decide, but never two months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly council meetings held, each with papers sent in advance and a decision log published within two working days."
                cadence: rolling
              tasks:
                - "Send a recurring monthly invitation to all council members"
                - "Write the standing agenda and the papers deadline"
                - "Hold the council meeting and publish the decision log within two days @recurring(monthly:12)"
            - name: Joiners, movers and leavers access hygiene
              description: |-
                ## Purpose
                Leavers who keep warehouse logins and movers who carry their old team's access into the new one are the most common findings in any data access review. Matching the people system's leaver and mover lists against warehouse and BI accounts every week catches them within days instead of at the next audit. New joiners get role-based starter access on day one instead of a pile of copied grants.

                ## Milestones
                1. A weekly feed or export of leavers and internal movers from the people system.
                2. Leaver accounts disabled in the warehouse and BI tools within five working days.
                3. Movers' previous team access reviewed by their new manager within a month.
                4. A starter access bundle per role defined for new joiners.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, every leaver's data platform accounts are disabled within five working days of their leaving date."
                cadence: rolling
              tasks:
                - "Ask the people team for a weekly export of leavers and movers"
                - "Compare the leaver list against warehouse and BI accounts and disable any match @recurring(weekly:mon)"
                - "Send each mover's new manager the access they carried over for review @recurring(monthly:2)"
                - "Define a starter access bundle for the five most common roles"
            - name: Monthly retention and disposal run
              description: |-
                ## Purpose
                Retention rules on paper do nothing if nobody runs the deletions, and an unrun schedule can be worse than none because it promises something the organisation does not do. A monthly run that identifies data past its keep period, gets the owner's sign-off, applies the end-of-life action and logs it makes the schedule real. Check for legal holds before every run.

                ## Milestones
                1. A query or job that lists every table and partition past its keep period.
                2. Owner sign-off captured before anything is deleted or archived.
                3. A disposal log recording what was removed, when and on whose approval.
                4. Six consecutive monthly runs completed with no data removed while under legal hold.

                ## Notes
                Deletion is hard to undo. Confirm backups and archive copies follow the same schedule, and check the legal hold register before every run.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly disposal runs logged with owner sign-off and a legal hold check before each."
                cadence: rolling
              tasks:
                - "Build a query listing tables and partitions past their keep period"
                - "Check the legal hold register, get owner sign-off and run the disposal @recurring(monthly:21)"
                - "Record each disposal in the log with date, scope and approver"
                - "Confirm the retention schedule with legal counsel each year @recurring(yearly)"
            - name: Governance issue log and weekly triage
              description: |-
                ## Purpose
                Governance questions arrive by email, chat, tickets and corridor conversations, and the ones nobody writes down are the ones that resurface as complaints. A single issue log with a weekly half-hour triage, assigning each item to an owner, steward or the council, gives people a place to raise concerns and shows the backlog honestly. Most items close in a week; the rest go to the council.

                ## Milestones
                1. One issue log with fields for raiser, domain, type, assignee and status.
                2. A published way to raise an issue, linked from the governance space.
                3. A weekly triage held, with every new item assigned within a week.
                4. A median time to close of under three weeks over a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over one quarter, every logged governance issue is assigned within a week and the median time to close is under three weeks."
                cadence: rolling
              tasks:
                - "Create the governance issue log with the agreed fields"
                - "Publish a short form for raising governance issues"
                - "Triage new issues and assign each to an owner, steward or the council @recurring(weekly:wed)"
            - name: Orphaned dataset sweep
              description: |-
                ## Purpose
                People move on and their tables stay behind, still refreshed, still queried and owned by nobody. A monthly sweep that compares the ownership register with active warehouse objects finds tables whose owner has left or whose domain was never assigned, and gets each one adopted, deprecated or scheduled for removal. Left alone, orphans become the place where restricted data quietly leaks into reports.

                ## Milestones
                1. A monthly list of warehouse tables with no owner or an owner who has left.
                2. Each orphan assigned, deprecated or scheduled for removal within a month.
                3. The count of orphaned production tables tracked on the governance scorecard.
                4. Orphaned production tables reduced to zero for two consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Zero orphaned production tables in the warehouse for two consecutive monthly sweeps."
                cadence: rolling
              tasks:
                - "Write a query joining warehouse tables to the ownership register"
                - "Run the orphan sweep and send each unowned table to its likely domain owner @recurring(monthly:8)"
                - "Mark tables nobody claims after a month for deprecation"
            - name: Annual data owner attestation
              description: |-
                ## Purpose
                Ownership drifts over a year: domains grow, owners change roles and stewards quietly stop doing the work. A yearly attestation where each owner confirms in writing that they still own their domain, that its classification and retention rules are current, and that their stewards are active, keeps the register honest and gives the audit file a clean annual record.

                ## Milestones
                1. A short attestation form listing each owner's domains, stewards, classifications and retention rules.
                2. Every owner's signed attestation returned within a month of issue.
                3. Changes reported in the attestation applied to the ownership register.
                4. Owners who decline the role replaced before the next quarter's recertification.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every domain owner returns a signed annual attestation within a month, and all reported changes are applied to the register."
                cadence: cyclic
              tasks:
                - "Draft a one-page attestation form pre-filled from the ownership register"
                - "Issue the attestation to every owner with a one-month deadline @recurring(yearly)"
                - "Apply every change owners report to the register"
            - name: Annual governance policy refresh
              description: |-
                ## Purpose
                Policies written for last year's platform describe tools, roles and teams that no longer exist, and people stop trusting a policy the moment they spot one wrong detail. A yearly refresh of the governance, classification, access and retention policies against how the platform and the organisation now work keeps them credible. Track every change in a version table so owners can see what moved.

                ## Milestones
                1. Each governance policy compared against the current platform, tools and team structure.
                2. Changes drafted and reviewed by owners, security and legal.
                3. Revised policies approved by the council with a version table showing what changed.
                4. A short summary of changes sent to every owner and steward.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All governance policies are reviewed, approved by the council and republished with a version table within twelve months of their last review."
                cadence: cyclic
              tasks:
                - "List every governance policy with its last review date and author"
                - "Ask the agent to compare each policy against this year's platform and team changes"
                - "Take revised policies to the council and republish them with a version table @recurring(yearly)"
                - "Send owners and stewards a half-page summary of what changed"
            - name: Monthly governance scorecard
              description: |-
                ## Purpose
                Leaders asking whether governance is working need a few numbers, not a status essay. A one-page scorecard showing the share of production tables with an owner and a classification, overdue access requests, recertification completion, orphan count and open issues makes progress visible and tells the council where to push. Keep the measures stable for a year so the trend means something.

                ## Milestones
                1. Six to eight measures chosen, each with a definition and a data source.
                2. The scorecard produced automatically or in under an hour a month.
                3. The scorecard reviewed at every council meeting.
                4. Twelve months of trend shown for each measure.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page scorecard with six to eight defined measures is produced monthly and reviewed at the council for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Pick six to eight governance measures and write a definition for each"
                - "Build the scorecard queries against the register and access logs"
                - "Refresh the scorecard and send it with the council papers @recurring(monthly:3)"
            - name: Policy exceptions and waivers register
              description: |-
                ## Purpose
                Every policy needs a safe way to say not yet, or teams will simply ignore it. A register of approved exceptions, each with the policy it departs from, the risk, the compensating control, the approver and an expiry date, keeps departures visible and temporary. Reviewing expiring entries each month stops a six-month waiver from becoming permanent.

                ## Milestones
                1. A register with fields for policy, risk, compensating control, approver and expiry date.
                2. All known informal exceptions captured in the register.
                3. No exception granted without an expiry date of twelve months or less.
                4. Expiring exceptions renewed, closed or escalated each month.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active governance exception is in the register with an approver and an expiry no more than twelve months away, and none is past expiry."
                cadence: rolling
              tasks:
                - "Set up the exceptions register from the risk register template"
                - "Ask owners and the platform team for every informal exception they know of"
                - "Review exceptions expiring in the next thirty days and renew or close each @recurring(monthly:17)"
            - name: Data governance frameworks primer
              description: |-
                ## Purpose
                Most of the vocabulary in governance meetings (data owner, steward, custodian, data domain, critical data element) comes from a few widely used frameworks, and people use the words differently unless someone settles them. Reading the governance chapters of a recognised body of knowledge such as DAMA-DMBOK, and writing a one-page glossary of how your organisation uses each term, saves weeks of crossed wires.

                ## Milestones
                1. The governance and stewardship chapters of one recognised framework read.
                2. A one-page glossary of twelve to fifteen governance terms as your organisation uses them.
                3. The glossary reviewed by the data lead and one domain owner.
                4. The glossary linked from the charter and the steward training.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page governance glossary of at least twelve terms, reviewed by the data lead and an owner, is linked from the charter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get access to one recognised data management body of knowledge"
                - "Read its governance and stewardship chapters over two weeks"
                - "Write a one-page glossary of the terms your organisation will use"
                - "Ask an owner to check the glossary reads clearly to a non-specialist"
            - name: Data protection duties of a data owner
              description: |-
                ## Purpose
                Data owners are often the first person asked whether personal data may be used for a new analysis, and many have never been told what their organisation's privacy obligations mean for their role. A short study of your privacy policy, the lawful bases or purposes your organisation relies on, and how to spot when to involve the privacy team, lets owners answer routine requests and escalate the right ones. Laws such as the GDPR in Europe are examples; your privacy team says what applies to you.

                ## Milestones
                1. Your organisation's privacy policy and records of processing read for your own domain.
                2. A list of the personal data categories in your domain and the purposes they were collected for.
                3. A written list of request types you must refer to the privacy or legal team.
                4. A thirty-minute session with the privacy lead to check your understanding.

                ## Notes
                This is preparation for asking the right questions, not legal advice. When in doubt, refer to your privacy or legal team before approving.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An owner has a written list of their domain's personal data categories, their purposes and the request types they refer to the privacy team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read your organisation's privacy policy with your own domain in mind"
                - "List the personal data categories your domain holds and why each was collected"
                - "Write the request types you will always refer to the privacy team"
                - "Book thirty minutes with the privacy lead to check the list"
            - name: Steward training and community of practice
              description: |-
                ## Purpose
                New stewards are usually given the title and a link to the policy, then left to work out what good looks like. A ninety-minute induction on the access workflow, classification, the issue log and how to write a catalogue entry, followed by a monthly community call where stewards share hard cases, builds consistency across domains. It also gives stewards peers to ask before they escalate.

                ## Milestones
                1. A ninety-minute induction covering access approvals, classification, issues and catalogue entries.
                2. Every current steward through the induction within a quarter.
                3. A monthly community call with a hard case presented by a different steward each time.
                4. A shared page of worked examples from past calls.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "All current stewards have completed the induction, and six monthly community calls have been held with worked examples recorded."
                cadence: rolling
              tasks:
                - "Outline a ninety-minute steward induction using real requests from the log"
                - "Run the induction for the first cohort of stewards"
                - "Host the steward community call with one hard case presented @recurring(monthly:14)"
                - "Add each worked example to the shared steward page"
            - name: Writing governance policies people follow
              description: |-
                ## Purpose
                Long policies get skimmed once and forgotten, and vague ones invite every team to read them in its favour. Learning to write a policy as a short set of must and must-not statements, each with an owner, a reason and an example, makes it something people can follow without a meeting. Practise on one real policy and test it on three readers who were not involved.

                ## Milestones
                1. One existing governance policy rewritten as numbered must and must-not statements.
                2. Each statement given a one-line reason and an example.
                3. The rewrite tested on three people outside the data team, with their questions noted.
                4. The policy cut to under two pages after the reader test.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One governance policy has been rewritten as numbered statements under two pages and tested on three readers outside the data team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the governance policy people complain about most"
                - "Ask the agent to restate it as numbered must and must-not statements"
                - "Add a reason and an example to each statement in your own words"
                - "Ask three colleagues outside the data team what they would do differently after reading it"
            - name: Role-based and attribute-based access models
              description: |-
                ## Purpose
                Role-based access groups people by job and grants data to the role, while attribute-based access decides from tags on the user and the data, such as region and classification. Understanding where each fits, and what your warehouse and BI tools actually support, stops the organisation designing a scheme the platform cannot enforce. Spend a few hours with the platform documentation and a test schema before committing.

                ## Milestones
                1. A one-page comparison of role-based and attribute-based access with an example from your data.
                2. The access features of your warehouse and BI tool listed from their documentation.
                3. One role and one attribute rule tried on a test schema.
                4. A recommendation written for which model to use where.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written recommendation on role-based versus attribute-based access, backed by a test on your own platform, is shared with the platform team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read your warehouse's documentation on roles, row policies and tag-based access"
                - "Create a test schema with one role-based and one attribute-based rule"
                - "Write a one-page comparison using an example from your own data"
                - "Share the recommendation with the platform team for comment"
            - name: Chairing a dispute over dataset meaning
              description: |-
                ## Purpose
                Disputes over what a field means are rarely about the field: one team's targets or bonus depends on the answer. Learning to chair these conversations, by separating the facts about how the data is produced from each side's needs and offering a second, clearly named dataset where both are legitimate, lets owners settle them without lasting resentment. Practise on a low-stakes dispute first.

                ## Milestones
                1. A one-page meeting format: facts about the data, each side's need, options, decision.
                2. One low-stakes dispute chaired using the format.
                3. The outcome recorded and both sides asked whether the process felt fair.
                4. The format shared with other owners and the council.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An owner has chaired at least one dataset meaning dispute using a written format and recorded both the decision and the participants' feedback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page format for a meaning dispute meeting"
                - "Choose a low-stakes open dispute from the issue log to practise on"
                - "Chair the meeting and record the decision on the dataset"
                - "Ask both sides afterwards whether the process felt fair"
            - name: Legal holds and records management basics
              description: |-
                ## Purpose
                Retention schedules have one big exception: data under a legal hold for litigation, an investigation or a regulator must not be deleted, even when its keep period has passed. Learning how your legal team issues and lifts holds, and agreeing how a hold reaches the data platform, prevents a routine disposal run from destroying evidence. It is a short piece of learning with large consequences.

                ## Milestones
                1. The legal team's process for issuing and lifting holds understood and written down in a paragraph.
                2. A legal hold register the data team can check, or an agreed contact who can confirm holds.
                3. The disposal run updated to check for holds before any deletion.
                4. One test hold applied and lifted on a sample dataset end to end.

                ## Notes
                Your legal team decides what is under hold. The data team's job is to make sure a hold, once issued, actually stops deletion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written legal hold procedure for the data platform exists, the disposal run checks for holds, and one test hold has been applied and lifted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the legal team how holds are issued, recorded and lifted"
                - "Agree where the data team can check whether a dataset is under hold"
                - "Add a hold check to the disposal run"
                - "Run a test hold on a sample dataset with the legal team"
            - name: Central, federated or hybrid governance model
              description: |-
                ## Purpose
                Central governance teams become bottlenecks as data grows, while fully federated models leave each domain inventing its own rules. Choosing deliberately, often central policy and standards with domain owners and stewards doing the work, sets how many people the programme needs and where decisions are made. Make the choice explicit before the organisation grows past the point where it is easy to change.

                ## Milestones
                1. Three operating models described with what is decided centrally and what in domains.
                2. Each model scored against your size, regulatory exposure, data team structure and budget.
                3. A recommended model approved by the sponsor and the council.
                4. Headcount and role changes implied by the model written down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A governance operating model is chosen and approved by the sponsor, with the decision split and resourcing implications documented."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Describe central, federated and hybrid models in one paragraph each"
                - "Score each model against size, regulation, team structure and budget"
                - "Interview two domain owners on which model they could actually run"
                - "Present the recommendation to the sponsor and the council"
            - name: Choosing a governance and access management tool
              description: |-
                ## Purpose
                Vendors in this space sell catalogues, access management, policy engines and privacy scanning, often bundled, and the demo always looks better than the rollout. Writing down the three governance jobs you most need automated (perhaps access requests, classification tagging and recertification), then scoring two or three tools against those jobs on your own data, prevents buying a platform that solves problems you do not have. Price the people needed to run it, not just the licence.

                ## Milestones
                1. Three must-have governance jobs written down with today's manual effort for each.
                2. A shortlist of two or three tools that integrate with your warehouse and BI tool.
                3. Each tool tested on a sample of your own data against the three jobs.
                4. A decision recorded with total cost, including the people to run it.

                ## Notes
                Start from the **Purchase decision** template. A well-run spreadsheet and ticket workflow is a fair baseline to compare tools against.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool decision, or a decision to stay manual, is recorded with scores on three must-have jobs and a total cost including staff time."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the three governance jobs you most need automated"
                - "Shortlist tools that integrate with your warehouse and BI platform"
                - "Run a proof of concept on a sample of your own data"
                - "Record the decision with licence and staffing costs"
            - name: Replacing individual grants with access groups
              description: |-
                ## Purpose
                Individual grants accumulate until nobody can say why a particular analyst can read payroll data, and every recertification becomes hundreds of lines. Moving to a small set of access groups per domain and classification level, granted to people through roles, cuts the review to a few dozen decisions and makes leavers and movers easy to handle. Plan the migration domain by domain so nothing breaks on a Monday morning.

                ## Milestones
                1. A count of individual grants per domain as a starting baseline.
                2. A group design per domain, typically reader, analyst and steward at each classification level.
                3. Grants migrated to groups for every in-scope domain, with owners approving the group membership.
                4. Individual grants reduced by at least eighty percent from the baseline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Individual data grants in in-scope domains are reduced by at least eighty percent, with access now given through owner-approved groups."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Count the individual grants in each domain as a baseline"
                - "Design reader, analyst and steward groups for one pilot domain"
                - "Migrate the pilot domain and fix anything that breaks within a week"
                - "Repeat the migration for the remaining domains one at a time"
            - name: Cutting standing administrator access
              description: |-
                ## Purpose
                Standing administrator rights on the warehouse let a handful of engineers read every table, including Restricted ones, and every extra admin is another account that can be compromised. Reducing permanent admins to two or three named people, with time-limited elevation for everyone else, shrinks that exposure without slowing incident response. Review the admin list monthly, because it creeps back up.

                ## Milestones
                1. Every account with administrator or owner rights on the data platform listed.
                2. Permanent administrators reduced to an agreed small number of named people.
                3. A time-limited elevation process for occasional admin work, with each use logged.
                4. The admin list reviewed monthly for six months with no unexplained additions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Permanent data platform administrators are cut to the agreed number, and six monthly reviews show no unexplained additions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every account with administrator rights on the warehouse and BI tools"
                - "Agree with the platform lead how many permanent admins are needed"
                - "Set up time-limited elevation for occasional admin tasks"
                - "Review the administrator list and remove anything unexplained @recurring(monthly:25)"
            - name: Clean-up of spreadsheet and shared drive extracts
              description: |-
                ## Purpose
                Copies of restricted data exported to spreadsheets and shared drives escape every access rule, retention schedule and recertification the warehouse has. Finding the largest extracts of customer, employee and financial data, asking each owner whether it is still needed and moving the users onto a governed dataset or report closes the biggest gap in most governance programmes. Set an export rule so the pile does not regrow.

                ## Milestones
                1. The shared drives and folders most likely to hold data extracts identified with the IT team.
                2. Extracts containing Confidential or Restricted data listed with their owners and last-modified dates.
                3. Each extract deleted, moved to a governed location or replaced by a report.
                4. An export rule for Confidential and Restricted data added to the handling policy.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All identified Confidential and Restricted extracts on shared drives are removed or moved to governed locations, and an export rule is in the handling policy."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask IT which shared drives hold the most spreadsheets exported from the warehouse"
                - "List extracts with customer, employee or financial data and their owners"
                - "Agree with each owner whether to delete, move or replace each extract"
                - "Add an export rule for sensitive data to the handling policy"
            - name: Retention rules for sandboxes and scratch schemas
              description: |-
                ## Purpose
                Scratch schemas and personal sandboxes are where analysts copy production data to experiment, and they are rarely cleaned up, so restricted data lingers in places with looser access. A default rule, for example that sandbox tables expire after ninety days unless renewed, and a monthly reminder before removal, keeps experimentation easy while stopping the build-up.

                ## Milestones
                1. Every sandbox and scratch schema listed with its size and the age of its oldest table.
                2. A default expiry period for sandbox tables agreed with the data team and owners.
                3. Automatic expiry or a scheduled clean-up job in place.
                4. Sandbox storage down and no sandbox table older than the expiry period.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sandbox expiry rule is in force and no sandbox table is older than the agreed period at two consecutive monthly checks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List sandbox schemas with size and the age of their oldest table"
                - "Propose a default expiry period to the data team"
                - "Set up automatic expiry or a scheduled clean-up job"
                - "Send owners a list of sandbox tables due for removal next week @recurring(monthly:28)"
            - name: Ownership of service accounts and integrations
              description: |-
                ## Purpose
                Pipelines, BI tools, notebooks and reverse syncs all connect to the warehouse through service accounts, and many of these accounts have broad read access and no human owner. Giving each service account a named owner, a purpose, the narrowest access that works and a credential rotation date closes a gap that recertifications of human users miss. Review the list each quarter as new tools appear.

                ## Milestones
                1. Every service account on the data platform listed with what uses it.
                2. A named human owner and a written purpose recorded for each.
                3. Access for each account narrowed to the schemas it actually queries.
                4. Unused service accounts disabled after owner confirmation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every data platform service account has a named owner, a written purpose and access limited to the schemas it uses, with unused accounts disabled."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every service account on the warehouse and the tool that uses it"
                - "Assign a named human owner and a purpose to each account"
                - "Compare each account's grants with the schemas it actually queried in ninety days"
                - "Review service accounts for new, unused or over-privileged entries @recurring(quarterly)"
            - name: Approvals for sharing data with third parties
              description: |-
                ## Purpose
                Sending a dataset to a partner, agency, vendor or researcher is the moment data leaves every control the warehouse provides. A short approval route, covering purpose, the minimum fields needed, the receiving party's obligations, the owner's sign-off and a legal check of the agreement, makes each share deliberate and traceable. Keep a register of active shares with their end dates.

                ## Milestones
                1. A one-page sharing request covering purpose, recipient, fields, frequency and end date.
                2. Approval by the domain owner and review of the data sharing agreement by legal for every external share.
                3. A register of active external shares with their agreement and expiry.
                4. Every share in the register reviewed before its expiry date.

                ## Notes
                Ask for the minimum fields that meet the purpose. Aggregated or pseudonymised data often does the job and changes the risk entirely.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every external data share is in a register with owner approval, a reviewed agreement and an expiry date, and none has passed expiry."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each team which partners or vendors they currently send data to"
                - "Draft a one-page external sharing request and approval route"
                - "Build a register of active shares with agreement and expiry"
                - "Review active sharing agreements due to expire in the next quarter @recurring(quarterly)"
            - name: Launching the governance programme internally
              description: |-
                ## Purpose
                People follow rules they have heard explained and resent rules that arrive as a policy link. A launch with a short leadership message, a fifteen-minute talk at each department meeting, a one-page guide on how to request access and raise an issue, and named owners introduced by name makes governance feel like a service rather than a gate. Time it for when the access workflow and owner list are ready, not before.

                ## Milestones
                1. A launch date set after the access workflow and owner list are live.
                2. A sponsor message and a one-page how-to guide written.
                3. A fifteen-minute slot at each department's meeting booked and delivered.
                4. Access requests through the new route measured for the month after launch.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The programme is launched with a sponsor message, a one-page guide and a talk at every department meeting, with a month of request volumes recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a launch date after the access workflow goes live"
                - "Draft the sponsor's launch message and the one-page guide"
                - "Book fifteen minutes at each department's regular meeting"
                - "Count requests through the new route in the month after launch"
            - name: Preparing for an external audit of data access
              description: |-
                ## Purpose
                Auditors ask for evidence, not intentions: who approved this grant, when was access last reviewed, how quickly were leavers removed. Assembling an evidence pack ahead of a financial, security or certification audit, with recertification records, request logs, leaver timings and policies, turns a stressful scramble into a few days of walkthroughs. Findings then go into a remediation plan with owners and dates.

                ## Milestones
                1. The audit scope and the controls in scope for data access confirmed with the audit lead.
                2. An evidence pack with policies, recertification records, request logs and leaver timings.
                3. A dry run where someone outside the data team samples five grants and traces each to approval.
                4. Every finding recorded in a remediation plan with an owner and a date.

                ## Notes
                Start from the **Remediation plan** template for the findings.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit is completed with a prepared evidence pack, and every finding has an owner and a date in a remediation plan."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the audit lead which data access controls are in scope"
                - "Gather recertification records, request logs and leaver timings into one folder"
                - "Run a dry run sampling five grants back to their approvals"
                - "Log each audit finding in a remediation plan with an owner and date"
            - name: Answering a data handling due-diligence questionnaire
              description: |-
                ## Purpose
                Customers, insurers, investors and acquirers increasingly send long questionnaires on how data is owned, classified, accessed and retained, and answers written in a hurry can create promises the organisation cannot keep. Building a reusable answer bank from your actual policies and evidence, reviewed by security and legal, makes each new questionnaire faster and keeps answers consistent and true.

                ## Milestones
                1. The questionnaire's governance questions separated from security and privacy ones and assigned.
                2. Every answer drafted from an existing policy or piece of evidence, never from aspiration.
                3. Answers reviewed by security and legal before sending.
                4. A reusable answer bank saved for the next questionnaire.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A questionnaire is returned with every governance answer traced to a policy or evidence and reviewed by security and legal, and an answer bank is saved."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Split the questionnaire into governance, security and privacy questions"
                - "Ask the agent to draft first answers from the published governance policies"
                - "Check every draft answer against real evidence and remove anything aspirational"
                - "Save approved answers to a reusable answer bank"
            - name: Annual governance report to the executive team
              description: |-
                ## Purpose
                Executives fund what they can see working, and governance is mostly invisible when it goes well. A yearly report of four or five pages, covering the scorecard trend, incidents avoided or handled, audit results, costs and the next year's priorities, keeps sponsorship alive and makes the case for any extra resource. Present it in person rather than sending it.

                ## Milestones
                1. Twelve months of scorecard trend summarised in one page.
                2. Audit outcomes, notable incidents and the cost of the programme stated plainly.
                3. Three priorities for the next year with the resource each needs.
                4. The report presented to the executive team and their decisions recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual governance report is presented to the executive team, with their decisions on next year's priorities recorded."
                cadence: cyclic
              tasks:
                - "Book a slot at the executive meeting for the annual governance report @recurring(yearly)"
                - "Ask the agent to summarise the year's scorecards into a one-page trend"
                - "Write three priorities for next year with the resource each needs"
                - "Record the executive team's decisions in the council decision log"
            - name: Tabletop exercise for a data access incident
              description: |-
                ## Purpose
                The worst moment to discover that nobody knows who can revoke access, who tells the owner and who decides whether to notify customers is during a real incident. A ninety-minute tabletop where owners, security, legal and the platform team walk through a scenario, such as a contractor found downloading Restricted tables, exposes the gaps while they are cheap to fix.

                ## Milestones
                1. A realistic scenario written with three or four injects that change the picture.
                2. Owners, security, legal, communications and the platform team in the room for ninety minutes.
                3. Gaps found during the exercise listed with owners and dates.
                4. The incident contact list and escalation steps updated within two weeks.

                ## Notes
                Notification duties to regulators and individuals are decided by legal and privacy colleagues. The exercise checks that the right people are reached quickly enough to decide.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise is held with owners, security and legal, and every gap found has an owner and is closed or scheduled within a month."
                cadence: cyclic
              tasks:
                - "Write a data access incident scenario with three injects"
                - "Invite owners, security, legal and the platform team to a ninety-minute session"
                - "Run the tabletop exercise and list every gap it reveals @recurring(yearly)"
                - "Update the incident contacts and escalation steps within two weeks"
            - name: New manager inheriting a data domain
              description: |-
                ## Purpose
                Managers who take over a team often inherit ownership of its data without being told: the access approvals, the retention decisions and the disputes about what the numbers mean. A thirty-day handover routine, reading the domain's register entry, open issues, exceptions and recent grants and meeting the stewards, lets a new owner make decisions with context instead of rubber-stamping or blocking everything.

                ## Milestones
                1. The ownership register entry, classifications and retention rules for the domain read.
                2. Open issues, active exceptions and the last recertification reviewed.
                3. A meeting held with the domain's business and technical stewards.
                4. The new owner's acceptance recorded and the register updated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within thirty days of taking over, the new owner has reviewed the domain's register entry, issues and exceptions, met the stewards and accepted ownership in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the governance lead whether your new role includes data ownership"
                - "Read your domain's register entry, classifications and retention rules"
                - "Review open issues, exceptions and the last recertification for the domain"
                - "Meet your business and technical stewards for an hour"
            - name: Governance on one page for a small team
              description: |-
                ## Purpose
                Teams of five to fifteen people running their own warehouse or analytics stack do not need a council, but they do need to know who owns each source, who can see customer data and when old extracts are deleted. A single page naming an owner per source, three access levels, a retention default and one person to ask covers most of the risk at a fraction of the effort.

                ## Milestones
                1. A list of every data source the team holds with one owner each.
                2. Three access levels defined and every team member placed in one.
                3. A retention default and a deletion date for old extracts agreed.
                4. The page reviewed at the team meeting and pinned where everyone can find it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page governance summary with owners per source, access levels and a retention default is agreed at a team meeting and pinned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every data source and shared dataset the team holds"
                - "Name one owner per source in a team meeting"
                - "Agree three access levels and place each team member in one"
                - "Pin the one-page summary in the team's shared space"
            - name: Consolidating data ownership after a merger
              description: |-
                ## Purpose
                After an acquisition, two sets of owners, classifications and retention rules cover overlapping customers, products and employees, and nobody is sure whose rules apply to the combined warehouse. Mapping both organisations' domains, choosing one owner per merged domain and agreeing which policies apply during and after migration avoids months of contradictory access decisions.

                ## Milestones
                1. Both organisations' domain maps, owner lists and classification schemes laid side by side.
                2. One owner agreed per merged domain, with the other named as deputy for a transition period.
                3. A written statement of which policies apply to which data during the migration.
                4. A single ownership register for the combined organisation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The merged organisation has one ownership register with one owner per domain and a written statement of which policies apply during migration."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Collect both organisations' domain maps, owner lists and classification schemes"
                - "Lay the two maps side by side and mark overlapping domains"
                - "Agree one owner and one deputy per merged domain with both sponsors"
                - "Publish which policies apply to which data during the migration"
            - name: Handover when a data owner leaves
              description: |-
                ## Purpose
                Ownership that lives in one person's head walks out of the door with them, leaving pending approvals, half-settled disputes and exceptions nobody remembers granting. A handover note written in the owner's notice period, a named successor agreed with the sponsor and a joint meeting with the stewards keep the domain governed through the change.

                ## Milestones
                1. A successor named before the departing owner's last two weeks.
                2. A handover note covering open decisions, active exceptions, external shares and known disputes.
                3. A joint meeting of departing owner, successor and stewards held.
                4. The register and approval routing switched to the successor on the leaving date.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A successor is in place and the approval routing switched by the departing owner's leaving date, with a written handover note filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the sponsor to name a successor as soon as notice is given"
                - "Write the handover note of open decisions, exceptions and external shares"
                - "Hold a joint meeting with the successor and the stewards"
                - "Switch the register and approval routing on the leaving date"
            - name: Remapping domains after a reorganisation
              description: |-
                ## Purpose
                Reorganisations move people and teams but leave data ownership pointing at departments that no longer exist, and approvals start bouncing between managers who each think it is someone else's call. Re-running the domain map against the new structure within a month of the change, and confirming or reassigning each owner, keeps access and retention decisions flowing.

                ## Milestones
                1. The new organisation chart compared against the domain map and owner list.
                2. Every domain whose owner changed role or team flagged.
                3. Owners confirmed or reassigned for each flagged domain.
                4. Approval routing updated to match the new owners.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Within one month of a reorganisation, every affected domain has a confirmed owner and approval routing matches the new structure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the new organisation chart from the people team"
                - "Flag every domain whose owner moved or whose department was renamed"
                - "Confirm or reassign owners for the flagged domains with the sponsor"
                - "Update the approval routing to match the confirmed owners"
            - name: Governance checks for each new data system
              description: |-
                ## Purpose
                Each new tool that holds customer, employee or financial data, a CRM, a survey platform, a support desk, creates a new source that will feed the warehouse within months. A short checklist at procurement or set-up, naming the owner, classifying the data, setting retention and agreeing who may connect it to the warehouse, stops ungoverned sources appearing faster than governance can catch up.

                ## Milestones
                1. A ten-question governance checklist for new systems holding business data.
                2. The checklist added to the procurement or IT onboarding process.
                3. Every new system in the last quarter run through the checklist retrospectively.
                4. New systems appearing in the domain map with an owner before they connect to the warehouse.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A governance checklist is part of system onboarding, and every system added in the last quarter has an owner, classification and retention rule."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft ten governance questions for any new system holding business data"
                - "Ask procurement or IT to add the checklist to system onboarding"
                - "Run last quarter's new systems through the checklist"
                - "Add each new system to the domain map with its owner"
            - name: Access policies as code in the warehouse
              description: |-
                ## Purpose
                Hand-applied grants and masking rules drift from the policy, and nobody can review a change before it happens. Defining roles, row-level rules and column masking for classified data in version-controlled code, applied by the deployment pipeline and reviewed like any other change, makes the access policy auditable line by line. It suits teams that already manage their transformations in code.

                ## Milestones
                1. Current roles, grants and masking rules exported into version-controlled definitions.
                2. Masking applied by classification tag to every Restricted column.
                3. All access changes made through reviewed pull requests and applied by the pipeline.
                4. Manual grants outside the code detected and reported weekly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All warehouse roles, grants and masking rules are defined in version control and applied by a pipeline, with manual drift reported automatically."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export current roles, grants and masking policies from the warehouse"
                - "Choose a tool or framework for declaring access as code"
                - "Move one domain's access definitions into version control as a pilot"
                - "Set up a job that reports any grant made outside the code"
            - name: Data product ownership in a data mesh
              description: |-
                ## Purpose
                In a data mesh, domain teams publish data products for others to use, and ownership shifts from a governance office to each product's owner. Defining what a data product owner is accountable for (its meaning, access rules, retention and support), and which global policies every product must follow, keeps the mesh from fragmenting into incompatible islands. Pilot with one domain team before rolling it out.

                ## Milestones
                1. A data product owner role description, distinct from the domain data owner role where both exist.
                2. A short list of global policies every data product must meet, such as classification and retention tags.
                3. One pilot data product published with its owner, policies and support route.
                4. Lessons from the pilot written up before a second domain adopts the model.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A data product owner role and global policy list are approved, and one pilot data product meets them with a written lessons review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the accountabilities of a data product owner in one page"
                - "List the global policies every data product must meet"
                - "Pick one domain team to publish a pilot data product"
                - "Write up what the pilot taught before extending it"
            - name: Approvals for using data to train AI models
              description: |-
                ## Purpose
                Requests to use internal data, from support tickets to customer records, to train or fine-tune models or to build retrieval collections raise questions the original collection purpose never covered. A specific approval step, in which the owner checks the purpose, the privacy team confirms whether that use is permitted and the classification of the outputs is agreed, stops sensitive data ending up inside a model nobody can easily inspect.

                ## Milestones
                1. A request form for AI training or retrieval use covering dataset, purpose, model location and output classification.
                2. An approval route through the domain owner and the privacy or legal team.
                3. A register of approved AI data uses with review dates.
                4. Every existing AI use of internal data captured in the register.

                ## Notes
                Whether a given use is permitted depends on law, contracts and what people were told when data was collected. The privacy or legal team makes that call; the owner makes sure it is asked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An AI data use approval route is live, and every current use of internal data for model training or retrieval is in a register with owner and privacy approval."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask engineering and product teams which internal datasets feed any AI model"
                - "Draft an AI data use request form with purpose and output classification"
                - "Agree the approval route with the privacy or legal team"
                - "Record every existing AI data use in a register with a review date"
            - name: Data residency and cross-border transfer map
              description: |-
                ## Purpose
                Where data physically sits and which countries it passes through matters to regulators, customer contracts and some sector rules, and cloud platforms make it easy to copy data across regions without noticing. A map of each domain's storage regions, replicas, backups and the vendors that process it gives the privacy and legal teams what they need to judge transfers, and gives owners a check before approving a new region.

                ## Milestones
                1. Storage regions recorded for every warehouse, lake, backup and BI tool holding classified data.
                2. Vendors that process each domain's data listed with their processing locations.
                3. The map reviewed by the privacy or legal team, with any transfer they question flagged.
                4. A rule that new regions or vendors are checked against the map before use.

                ## Notes
                Transfer rules differ widely between countries. This project gathers the facts; the privacy or legal team decides what is acceptable.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A residency map covering every platform and vendor holding classified data is reviewed by privacy or legal and refreshed within the last twelve months."
                cadence: cyclic
              tasks:
                - "List the cloud regions used by the warehouse, lake, backups and BI tools"
                - "Ask procurement for the processing locations of each data vendor"
                - "Send the map to the privacy or legal team for review"
                - "Refresh the residency map and send it for review @recurring(yearly)"
---

# Data Governance & Ownership

This area is for the people who get asked who owns a table, who said that person could see it and how long it is meant to be kept: the data leader setting up governance in a larger organisation, the manager who has just been named owner of a domain and the team that wants sensible rules without a governance office. It starts with the foundations (a charter, a map of data domains, named owners and stewards, a classification scheme, an access process, a retention schedule, a council and written decision rights over meaning), then the routines that keep them true, the skills owners and stewards need, the decisions about operating model, tools and access design, dated events such as an audit and the programme launch, situations from inheriting a domain to a merger, and finally specialist work like policy as code, data mesh ownership and approvals for AI training data.

What repeats is a weekly check of leavers against warehouse accounts and a weekly triage of governance questions, a monthly council, scorecard, orphaned dataset sweep, exceptions review and retention run, quarterly access recertification and service account review, and a yearly owner attestation, policy refresh and executive report. The Meeting notes, Compliance control, Risk register, Purchase decision and Remediation plan templates pair with the council, the access recertification, the exceptions register, the tool choice and the audit findings. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
