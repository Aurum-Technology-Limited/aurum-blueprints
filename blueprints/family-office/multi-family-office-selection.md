---
id: family-office.multi-family-office-selection
name: Multi-Family Office Selection
description: "A careful route to choosing a multi-family office: what the family needs, fee models and conflicts understood, a proper RFP and due diligence, a negotiated agreement, a trial period and a yearly review."
category: personal
version: 1.0.0
tags: [family-office, multi-family-office-selection, parent, retiree, multi-family-office, due-diligence, fee-models, adviser-selection]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Multi-Family Office Selection
          description: "Choosing a multi-family office instead of building one: services compared, fee models, conflicts of interest, references and a trial period."
          projects:
            - name: Written reasons for looking at a multi-family office
              description: |-
                ## Purpose
                Families usually start looking after something goes wrong: a missed tax deadline, a banker who left, or a parent who can no longer hold every thread. Writing down, in a page, what has gone wrong and what a good outcome looks like in two years stops the search from being steered by whichever firm calls first.

                ## Milestones
                1. A one-page note listing the three to five problems the family wants solved.
                2. A short description of what good looks like two years after an office is appointed.
                3. The things the family does not want to hand over, such as the family business, written down.
                4. The note read and agreed by everyone who will take part in the decision.

                ## Notes
                Keep the note in plain words. It becomes the first page of the request for proposal later, so candidates answer the family's problems rather than pitch their standard brochure.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page statement of problems and desired outcomes exists and has been agreed by every member of the decision group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the last three moments when family affairs felt out of control"
                - "Write what a well-run arrangement would look like in two years"
                - "Note which matters the family will keep in its own hands"
                - "Share the draft with the decision group and collect changes"
            - name: Inventory of services the family needs
              description: |-
                ## Purpose
                Multi-family offices sell bundles: investment oversight, consolidated reporting, bill pay, tax coordination, trust administration, philanthropy support, concierge. Listing which of these the family actually needs, and how often, lets you compare offices on the same basis and avoid paying for a full bundle when half of it goes unused.

                ## Milestones
                1. A list of every service the family receives today and who provides it.
                2. Each service marked as essential, useful or not needed.
                3. Rough volumes noted, such as bills paid a month or entities needing accounts.
                4. Services the family lacks today but wants added flagged separately.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A services inventory marks every service as essential, useful or not needed, with a volume estimate for each essential one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every service the family receives today and from whom"
                - "Mark each service as essential, useful or not needed"
                - "Estimate monthly volumes for bill pay, entities and reports"
                - "Add the services the family is missing at the bottom of the list"
            - name: Map of current advisers and what each costs
              description: |-
                ## Purpose
                Before any office quotes a fee, the family needs to know what it spends today across private banks, investment managers, accountants, trust companies and lawyers, much of it buried in fund charges and custody fees. A map of every adviser with an annual cost is the yardstick against which every proposal will be judged.

                ## Milestones
                1. Every current adviser listed with the entity or account they serve.
                2. Direct fees for the last twelve months gathered from invoices and statements.
                3. Indirect costs such as fund charges and custody fees estimated and labelled as estimates.
                4. A single annual total and a cost per service written at the foot of the map.

                ## Notes
                Ask each bank for an ex-post cost and charges statement where one is available. It often shows fees nobody remembered agreeing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cost map shows every adviser, last year's direct fees and estimated indirect costs, with an annual total."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every bank, manager, accountant, trustee and lawyer the family uses"
                - "Request a twelve-month cost and charges statement from each bank"
                - "Total the direct invoices paid in the last year by adviser"
                - "Estimate indirect fund and custody charges and label them as estimates"
            - name: Decision group and sign-off rule for the selection
              description: |-
                ## Purpose
                A search can stall for a year when nobody knows whether the patriarch, the spouses or the adult children have the final word. Naming a small decision group, a lead who runs the process and the rule for the final vote keeps the search moving and makes the result easier for every branch to accept.

                ## Milestones
                1. A decision group of three to five people named, with one process lead.
                2. The voting or consensus rule for the final choice written down.
                3. Family members outside the group told how and when they will be consulted.
                4. Any adviser with a stake in the outcome, such as an outgoing banker, kept off the group.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written note names the decision group, the process lead and the rule for the final decision, circulated to the whole family."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose three to five names for the selection decision group"
                - "Agree whether the final choice is by consensus or majority"
                - "Name one process lead to run calls and keep the file"
                - "Send the whole family a short note on how they will be consulted"
            - name: Selection criteria and scoring weights
              description: |-
                ## Purpose
                Without agreed criteria, the firm with the best lunch and the glossiest deck tends to win. Fixing six to eight criteria and their weights before meeting anyone, such as independence, service fit, team stability, reporting quality, fees and jurisdictional reach, gives every candidate the same test.

                ## Milestones
                1. Six to eight criteria written, each with a one-line definition.
                2. A weight given to each criterion, adding up to one hundred.
                3. A one to five scoring scale described for each criterion.
                4. The criteria and weights signed off by the decision group before any meeting.

                ## Notes
                Put independence and conflicts as a pass or fail gate as well as a scored line. An office that fails it should not reach the shortlist however good its service looks.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scoring sheet with six to eight weighted criteria and a defined scale is agreed before the first candidate meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft six to eight selection criteria from the services inventory"
                - "Assign weights that add up to one hundred"
                - "Describe what a score of one, three and five means for each"
                - "Ask the agent to turn the criteria into a blank scoring sheet"
                - "Get the decision group to sign off the sheet"
            - name: Build or buy check against a single-family office
              description: |-
                ## Purpose
                Building a dedicated office makes sense only at a scale of complexity and assets where its fixed cost of staff, systems and premises is justified, while a multi-family office shares those costs across many families. A short comparison on the family's own numbers confirms that buying services is the right route now, and records the point at which the question should be asked again.

                ## Milestones
                1. A rough annual cost for a lean in-house office estimated with an adviser.
                2. That cost compared with the current adviser total and typical multi-family office fees.
                3. Non-cost factors listed, such as privacy, control and continuity if a key person leaves.
                4. A recorded decision to buy services, with a trigger for revisiting it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of in-house and shared office costs ends in a recorded decision and a named trigger for review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask an independent adviser for a rough cost of a lean in-house office"
                - "Set that figure beside the current adviser cost map"
                - "List the control and privacy factors that money does not capture"
                - "Write the decision and the asset or complexity level that would reopen it"
            - name: Confidential information pack for candidates
              description: |-
                ## Purpose
                Offices cannot quote sensibly without knowing the family's structure, but sending full statements to six firms spreads sensitive data widely. A redacted pack, released only after a confidentiality agreement is signed, gives candidates enough to propose while keeping names, account numbers and addresses back until the final stage.

                ## Milestones
                1. A structure chart with entities, jurisdictions and approximate asset bands, without names.
                2. A summary of services needed and volumes taken from the inventory.
                3. A standard confidentiality agreement reviewed by the family lawyer.
                4. A rule written for what is released at each stage of the search.

                ## Notes
                Share the pack through a secure data room or encrypted link, not email attachments, and keep a log of who opened it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A redacted information pack and a lawyer-reviewed confidentiality agreement are ready before any candidate receives family data."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draw a structure chart using asset bands and no family names"
                - "Ask the family lawyer to review a standard confidentiality agreement"
                - "Set up a secure data room or encrypted sharing folder"
                - "Write down what each search stage is allowed to see"
            - name: Long list of multi-family offices from trusted referrals
              description: |-
                ## Purpose
                Good offices often do not advertise, and the ones that do are not always the right fit. Building a long list of ten to fifteen names from accountants, lawyers, other families and industry directories, with a line on each office's size, ownership and client type, gives the shortlist something real to choose from.

                ## Milestones
                1. Ten to fifteen offices listed with the source of each referral.
                2. Ownership, approximate client numbers and main locations noted for each.
                3. Offices owned by product providers marked clearly.
                4. Obvious mismatches on size or geography struck off with a reason.

                ## Notes
                Start from the **Vendor** template so each office gets its own file that grows as the search goes on.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A long list of at least ten offices, each with referral source, ownership and size, with mismatches struck off and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the family accountant and lawyer for three names each"
                - "Ask two trusted families which office they use and why"
                - "Record ownership, size and locations for each name"
                - "Strike off clear mismatches and note the reason"
            - name: How multi-family offices are owned and run
              description: |-
                ## Purpose
                Some offices are independent partnerships, some were founded by a single family and opened to others, some belong to banks or trust companies, and some are backed by private equity with a plan to sell. Ownership shapes incentives, stability and what happens to the family if the office changes hands, so it is worth understanding before the first meeting.

                ## Milestones
                1. The main ownership models described in your own words with one example of each.
                2. The incentive each model creates for selling products or growing assets noted.
                3. Three questions about ownership written for every candidate.
                4. Each long-list office tagged with its ownership model.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the main ownership models and every long-list office is tagged with one."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two industry guides on how family office providers are structured"
                - "Summarise each ownership model and the incentive it creates"
                - "Write three ownership questions to ask every candidate"
                - "Tag each long-list office with its ownership model"
            - name: Fee models compared, asset-based, retainer and hourly
              description: |-
                ## Purpose
                Charged as a fraction of a percent on assets, a fee can look small and still be the largest bill the family pays, while a fixed retainer can look high and turn out cheaper. Working through asset-based, flat retainer, hourly and hybrid models on the family's own figures shows what each would cost and what behaviour each rewards.

                ## Milestones
                1. Each fee model described with what it does and does not cover.
                2. An illustrative annual cost of each model worked out on the family's asset bands.
                3. The behaviour each model rewards noted, such as gathering assets or billing hours.
                4. Extras that sit outside most fees, such as third-party manager charges, listed.

                ## Notes
                Ask whether the fee applies to assets the office does not manage, such as property or the family business. Some offices charge on everything they report on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked comparison shows the annual cost of at least three fee models on the family's own numbers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a short description of each common fee model"
                - "Work out an annual cost for each model on the family's asset bands"
                - "List the costs that usually sit outside the headline fee"
                - "Note which model fits the family's mix of liquid and illiquid assets"
            - name: Conflicts of interest in multi-family office models
              description: |-
                ## Purpose
                The quiet risk in a shared office is that it earns money from the products it recommends, through in-house funds, placement fees, retrocessions or revenue sharing with banks. Learning where these conflicts usually sit lets the family ask precise questions and read the disclosure documents for what they actually say.

                ## Milestones
                1. A list of the common conflict types with a plain example of each.
                2. The difference between open architecture and proprietary products explained in a paragraph.
                3. A set of written conflict questions ready for the request for proposal.
                4. A rule agreed that any undisclosed income from family assets ends the candidacy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of conflict types and a question set exists, and the family's no undisclosed income rule is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the ways an office can earn money beyond the client fee"
                - "Write one plain example of each conflict type"
                - "Draft the conflict questions for the request for proposal"
                - "Record the family rule on undisclosed income from its assets"
            - name: Regulatory status and licences of an office
              description: |-
                ## Purpose
                Depending on the country, an office giving investment advice, holding client money or acting as trustee may need a licence from the securities or financial services regulator, and some services sit outside any regulation at all. Knowing which services need which permission, and how to check a firm's status on the regulator's public register, protects the family from an office working beyond its licence.

                ## Milestones
                1. The regulated and unregulated services an office may offer listed for the family's main jurisdictions.
                2. The public register for each relevant regulator found and bookmarked.
                3. A check method written for confirming a firm's licence and any disciplinary history.
                4. Questions on licences and supervisory inspections added to the request for proposal.

                ## Notes
                Confirm what needs a licence with a regulatory lawyer in each jurisdiction. Rules differ, and an office licensed in one country may not be permitted to serve clients in another.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists which services need a licence in each relevant jurisdiction and links to each regulator's public register."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the services the family wants that may need a licence"
                - "Find the public register of each relevant financial regulator"
                - "Ask a regulatory lawyer which permissions matter for the family"
                - "Add licence and inspection questions to the proposal request"
            - name: Custody, client money and who holds the assets
              description: |-
                ## Purpose
                Well-run offices coordinate the family's wealth without holding it: assets sit with independent custodian banks in the family's or the trustees' names, and the office has limited authority to view and instruct. Understanding custody, segregation and powers of attorney means the family can insist on a set-up where a failure at the office does not put the assets at risk.

                ## Milestones
                1. The difference between custody, client money and reporting access explained in a paragraph.
                2. The family's preferred arrangement written, such as independent custodian and view-only access.
                3. The authority levels an office might ask for listed, from view-only to payment instructions.
                4. Custody and authority questions added to the due diligence checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The family's preferred custody and authority arrangement is written down and included in the due diligence checklist."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a custodian bank's guide to client asset segregation"
                - "Write the custody arrangement the family prefers"
                - "List the authority levels an office may request and which you accept"
                - "Add custody questions to the due diligence checklist"
            - name: First calls and a shortlist of four
              description: |-
                ## Purpose
                A thirty-minute introductory call with each long-list office, using the same questions, sorts the serious candidates from the poor fits quickly. Cutting to four offices before sending the request for proposal keeps the work manageable and shows the finalists that the family is a considered buyer.

                ## Milestones
                1. An introductory call held with every remaining long-list office.
                2. The same ten questions asked on each call and answers noted.
                3. Each office scored roughly against the selection criteria.
                4. A shortlist of four agreed by the decision group, with reasons for each exclusion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every long-list office has had a call on the same questions and a shortlist of four is recorded with exclusion reasons."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the ten questions every introductory call will cover"
                - "Book thirty-minute calls with each long-list office"
                - "Score each office roughly on the agreed criteria after the call"
                - "Agree a shortlist of four with the decision group"
            - name: Request for proposal sent to the shortlist
              description: |-
                ## Purpose
                Sending a written request for proposal makes every shortlisted office answer the same questions in the same format, so their replies can be scored side by side. It should cover services, team, fees on the family's numbers, conflicts, regulation, custody, technology, security and exit terms, with a firm return date.

                ## Milestones
                1. A request for proposal drafted from the reasons note, services inventory and criteria.
                2. Questions on fees, conflicts, licences, custody and exit terms included.
                3. The redacted information pack attached after confidentiality agreements are signed.
                4. Requests sent to all four offices with the same return date.

                ## Notes
                Ask for fees as a worked figure on the family's asset bands, not a rate card. It is the only way to compare like with like.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A request for proposal with a fixed return date has been sent to every shortlisted office under a signed confidentiality agreement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft the request for proposal from the reasons note and criteria"
                - "Add the fee, conflict, custody and exit questions"
                - "Collect signed confidentiality agreements from all four offices"
                - "Send the request with the information pack and a return date"
            - name: Scoring the written proposals
              description: |-
                ## Purpose
                Proposals arrive at different lengths and with different blind spots, and the most persuasive writing is not always the best service. Scoring each reply independently, by at least two members of the decision group, against the agreed sheet keeps the comparison fair and shows quickly where answers were vague.

                ## Milestones
                1. Each proposal scored by at least two people working separately.
                2. Scores combined and large differences between scorers discussed.
                3. Unanswered or vague questions listed for each office.
                4. Two or three finalists chosen to present to the family.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every proposal has two independent scores on the agreed sheet and two or three finalists are named in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send each proposal and the blank scoring sheet to two scorers"
                - "Combine the scores and flag any gap of more than one point"
                - "List the vague or missing answers in each proposal"
                - "Agree the finalists and tell the other offices promptly"
            - name: Sample reporting pack from each finalist
              description: |-
                ## Purpose
                The quarterly report is what the family will actually see from its office, and a poor one hides problems for years. Asking each finalist for an anonymised sample pack, and ideally a demonstration built on the family's redacted structure, shows whether private holdings, property and liquidity are reported clearly or squeezed into a bank-style statement.

                ## Milestones
                1. An anonymised sample quarterly pack received from every finalist.
                2. Each pack checked for consolidated net worth, liquidity, private holdings and fees paid.
                3. A demonstration of the client portal seen by at least two family members.
                4. A short note on which pack the family would read and which it would not.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each finalist's sample report has been reviewed against the same checklist and a written preference recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request an anonymised sample quarterly pack from each finalist"
                - "Check each pack for net worth, liquidity, private assets and fees"
                - "Book a portal demonstration with two family members present"
                - "Write which pack the family would actually read and why"
            - name: Finalist presentations to the family
              description: |-
                ## Purpose
                Meeting the people who would serve the family, not only the founder who wins business, is the point of the finalist round. A structured ninety-minute session with each finalist, run to the same agenda and attended by the same family members, gives a fair comparison of chemistry, clarity and honesty.

                ## Milestones
                1. A common agenda sent to every finalist in advance.
                2. Each finalist asked to bring the named relationship lead and day-to-day team.
                3. Every presentation attended by the same family members and scored straight after.
                4. Notes from each session filed in that office's candidate file.

                ## Notes
                Start from the **Meeting notes** template for each session, and score before discussing, so one strong voice does not set the room's view.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every finalist has presented to the same family members on the same agenda, with scores and notes filed the same day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write and send a common agenda to every finalist"
                - "Ask each finalist to bring the people who would serve the family"
                - "Book a room and confirm which family members will attend"
                - "Score each presentation before the group discusses it"
            - name: Reference calls with current and former clients
              description: |-
                ## Purpose
                Every office supplies its happiest clients as references, so the useful calls are with families who have been clients for five years or more and, where possible, a family that left. Asking about errors, staff turnover, fee changes and how complaints were handled tells you more than any pitch.

                ## Milestones
                1. At least two references per finalist, including one client of five years or more.
                2. At least one former client per finalist found through the family's own network.
                3. The same question set used on every call, with notes filed.
                4. Any pattern of concern, such as repeated staff changes, written up for the decision group.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each finalist has at least three reference calls on file, including one long-standing and one former client."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each finalist for two references who have been clients five years or more"
                - "Ask the family's lawyer and accountant for a former client of each finalist"
                - "Write the reference question set covering errors, turnover and fee changes"
                - "Hold the calls and file a note for each one"
            - name: Operational due diligence on the finalists
              description: |-
                ## Purpose
                Behind a charming team there can sit weak controls: one person who can both set up and approve payments, no tested backup, no professional indemnity cover. A structured review of controls, cyber security, insurance, staff turnover and business continuity, ideally with an independent reviewer, catches the risks that service quality hides.

                ## Milestones
                1. A due diligence questionnaire returned by every finalist.
                2. Payment controls, cyber security, insurance and continuity plans reviewed against the checklist.
                3. Any independent controls report the office holds read and its exceptions noted.
                4. A risk rating and list of open issues written for each finalist.

                ## Notes
                Start from the **Risk register** template. Ask specifically how a fraudulent change of payee bank details would be caught, since email payment fraud is the most common loss in this sector.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each finalist has a completed due diligence questionnaire, a risk rating and a written list of open issues."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Send the operational due diligence questionnaire to each finalist"
                - "Ask for any independent controls report and the insurance certificates"
                - "Review payment approval and bank detail change procedures"
                - "Rate each finalist and list the issues still open"
            - name: Team and key-person review
              description: |-
                ## Purpose
                In a shared office, the family's experience depends on two or three named people, and many families find the senior partner disappears after signing. Checking who will actually serve the family, their experience, their client load and what happens if they leave turns a promise of attention into something written down.

                ## Milestones
                1. Names, roles and experience of the proposed team recorded for each finalist.
                2. The number of families each named person currently serves noted.
                3. Staff turnover over the last three years asked for and recorded.
                4. A key-person clause drafted, letting the family review terms if the lead leaves.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each finalist the named team, their client loads and recent turnover are recorded, with a key-person clause drafted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each finalist to name the lead and day-to-day team in writing"
                - "Ask how many families each named person serves today"
                - "Request staff turnover figures for the last three years"
                - "Draft a key-person clause to raise in negotiation"
            - name: Fee proposals compared on the family's numbers
              description: |-
                ## Purpose
                Proposals quote fees in different ways, and the only fair comparison is a full annual cost on the family's own structure, including third-party charges the office will pass through. Setting every offer against the current adviser cost map shows whether the change saves money, costs more for better service, or simply moves the same costs around.

                ## Milestones
                1. Each finalist's fee turned into a total annual figure on the family's asset bands.
                2. Pass-through costs such as custody, manager fees and systems added to each figure.
                3. Every total compared with the current adviser cost map.
                4. Fee increases at asset thresholds or after the first year identified.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table shows every finalist's full annual cost beside the current cost, with threshold and year-two changes marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Convert each fee proposal into a full annual figure"
                - "Add pass-through costs that sit outside the headline fee"
                - "Set each total beside the current adviser cost map"
                - "Mark any step-ups at asset thresholds or after year one"
            - name: Fee negotiation and a written fee schedule
              description: |-
                ## Purpose
                Most offices will move on fees, minimums or scope for a family that has done its homework, especially on illiquid assets and fixed retainers. A short negotiation with the preferred finalist, ending in a written fee schedule attached to the agreement, removes later arguments about what was included.

                ## Milestones
                1. A list of three to five negotiation points prepared from the fee comparison.
                2. A negotiation meeting held with the preferred finalist.
                3. A written fee schedule agreed, covering included services, extras and review dates.
                4. A rule agreed on how fees change if assets rise or fall sharply.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written fee schedule listing included services, extras, thresholds and a review date is agreed with the preferred office."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick three to five points to negotiate from the fee comparison"
                - "Hold the negotiation meeting and note what was agreed"
                - "Ask for the agreed fees as a schedule to attach to the agreement"
                - "Check the schedule says what happens if assets change sharply"
            - name: Final choice and recorded reasons
              description: |-
                ## Purpose
                Recording why the family chose an office, with the scores, references and open risks, means it can explain the choice to every branch and judge the office against its own promises later. The record also helps the next generation when they review the relationship in five years.

                ## Milestones
                1. Final scores for every finalist set out on one page.
                2. The decision group's choice made by the agreed rule.
                3. Reasons, open risks and conditions of appointment written down.
                4. The decision shared with the wider family in a short note.

                ## Notes
                Start from the **Purchase decision** template so the reasons and the alternatives sit together in one record.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed decision record names the chosen office, the scores, the reasons and the open risks, and the family has been told."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put every finalist's final scores on one page"
                - "Hold the decision meeting and apply the agreed voting rule"
                - "Write the reasons, open risks and conditions of appointment"
                - "Send the wider family a short note on the decision"
            - name: Service agreement review with the family lawyer
              description: |-
                ## Purpose
                The engagement letter decides what the office must do, what it can do on its own authority, who is liable when something goes wrong and how the family can leave. Having the family's own lawyer review it, rather than relying on the office's standard terms, is the single most protective step in the whole selection.

                ## Milestones
                1. The draft agreement sent to the family's independent lawyer.
                2. Scope, authority limits, liability caps, data ownership and termination terms reviewed.
                3. The fee schedule, service levels and key-person clause attached.
                4. A signed agreement filed with a summary of the main terms.

                ## Notes
                Check that the family owns its data and documents and can take them, in a usable format, at the end of the relationship. Exit is much harder when this is missing.
              priority: high
              deadlineOffsetDays: 170
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A service agreement reviewed by the family's own lawyer is signed and filed, with a one-page summary of key terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send the draft agreement to the family's independent lawyer"
                - "List the lawyer's changes on scope, liability and termination"
                - "Attach the fee schedule, service levels and key-person clause"
                - "File the signed agreement with a one-page summary of terms"
            - name: Service level schedule with response times
              description: |-
                ## Purpose
                Vague promises of responsiveness are the first thing to slip once the office is busy with newer clients. A short schedule of what is delivered and when, such as quarterly reports within a set number of weeks, bills paid by their due date and urgent calls returned the same day, gives both sides a measurable standard.

                ## Milestones
                1. Report delivery dates agreed for monthly, quarterly and annual packs.
                2. Response times agreed for routine requests and for urgent ones.
                3. Named backup contacts listed for when the lead is away.
                4. The schedule attached to the agreement and copied into the family's service log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A service level schedule with report dates, response times and backup contacts is attached to the signed agreement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree delivery dates for each regular report"
                - "Agree response times for routine and urgent requests"
                - "List backup contacts for holidays and absences"
                - "Compare report delivery dates with the schedule @recurring(quarterly)"
            - name: Trial period with defined checkpoints
              description: |-
                ## Purpose
                A trial period of six to twelve months, written into the agreement with a short notice period, lets the family judge real service rather than the sales process. Agreeing checkpoints at the start, such as the first quarterly report, the first tax deadline and the first urgent request, makes the end-of-trial decision a matter of record.

                ## Milestones
                1. The trial length and the shorter notice period during it written into the agreement.
                2. Four or five checkpoints agreed, each tied to a real event in the family's calendar.
                3. Each checkpoint reviewed and noted when it happens.
                4. A trial summary prepared for the end-of-trial decision.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each agreed trial checkpoint has a written review, and a trial summary is ready before the trial period ends."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the trial length and notice period with the office"
                - "Pick four or five checkpoints from the family's real calendar"
                - "Write a short review after each checkpoint"
                - "Check progress against the trial checkpoints @recurring(monthly:12)"
            - name: Onboarding documents and KYC to the new office
              description: |-
                ## Purpose
                Onboarding is where months are lost: identity documents, source of wealth, trust deeds and entity papers requested piecemeal by several teams. Assembling one complete, current pack and handing it over through a secure channel gets the office working in weeks, not quarters.

                ## Milestones
                1. The office's full onboarding checklist received in a single list.
                2. Identity, address, source of wealth and entity documents gathered and checked for expiry.
                3. Trust deeds, letters of wishes and structure charts shared under agreed access rules.
                4. Written confirmation from the office that onboarding is complete.
              priority: medium
              deadlineOffsetDays: 200
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The office confirms in writing that every onboarding document has been received and accepted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the office for its full onboarding checklist in one list"
                - "Check every passport and proof of address for expiry dates"
                - "Share deeds and entity papers through the secure portal only"
                - "Get written confirmation that onboarding is complete"
            - name: Account and authority changeover plan
              description: |-
                ## Purpose
                Moving reporting feeds, bill payment and adviser instructions to a new office touches every bank, manager and trustee the family uses. A changeover plan that sets what moves, in what order, with what authority and who confirms each step, avoids missed payments and the risk of two parties both thinking the other is in charge.

                ## Milestones
                1. Every account, feed and standing instruction listed with its current owner.
                2. A changeover order agreed, with dates and the person confirming each step.
                3. Letters of authority signed at the agreed level for each institution.
                4. Old access removed and new access tested for every account.

                ## Notes
                Keep payment authority with the family or trustees until the trial is complete. View-only access is enough for reporting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account in the changeover list shows a completed move, a tested new access and confirmed removal of old access."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every account, data feed and standing instruction to move"
                - "Agree the order of changeover with the new office"
                - "Sign letters of authority at the agreed level"
                - "Test each new access and confirm old access is removed"
                - "Confirm access levels at every institution are still as agreed @recurring(yearly)"
            - name: Introduction meeting between the family and the office team
              description: |-
                ## Purpose
                Many family members will only ever meet the office at the quarterly review, so the first meeting sets the tone for years. A relaxed introduction, covering who does what, how to ask for help, what the office will not do and how privacy is protected, helps spouses and adult children use the office properly from the start.

                ## Milestones
                1. A date set when most adult family members can attend in person or by video.
                2. A one-page who-to-call sheet prepared by the office.
                3. Privacy and request rules explained, including what needs the decision group's approval.
                4. Questions raised in the meeting answered in writing within two weeks.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An introduction meeting has been held, a who-to-call sheet circulated and every open question answered in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a date most adult family members can make"
                - "Ask the office to prepare a one-page who-to-call sheet"
                - "Explain which requests need the decision group's approval"
                - "Collect open questions and chase written answers"
            - name: End-of-trial review and continue decision
              description: |-
                ## Purpose
                Ending the trial is the family's last easy exit, and it passes quietly unless someone puts it in the diary. A formal review, using the checkpoint notes, the service log and a short family survey, ends in a written decision to continue, renegotiate or leave.

                ## Milestones
                1. Checkpoint reviews, service log and invoices gathered in one file.
                2. A short survey of family members who used the office completed.
                3. A review meeting held with the decision group, then with the office.
                4. A written decision to continue, renegotiate or give notice.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written continue, renegotiate or exit decision is recorded before the trial notice period expires."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Diary the last date to give notice under the trial terms"
                - "Gather the checkpoint notes, service log and invoices"
                - "Send a five-question survey to family members who used the office"
                - "Record the decision and tell the office in writing"
            - name: Monthly service log of requests and responses
              description: |-
                ## Purpose
                Memory is a poor judge of service: one bad week sticks, and months of quiet good work vanish. A simple log of each request, the date it was made, when it was done and whether it met the service level gives the quarterly review and the annual scorecard real evidence.

                ## Milestones
                1. A shared log set up with date, request, owner, response time and outcome columns.
                2. Every family member who makes requests shown how to add to it.
                3. A monthly summary of late or unresolved items produced.
                4. Patterns flagged to the relationship lead before they become complaints.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The service log has entries every month and a monthly summary of late items goes to the relationship lead."
                cadence: rolling
              tasks:
                - "Set up the service log with the agreed columns"
                - "Show family members how to log a request"
                - "Summarise late and open requests from the log @recurring(monthly:5)"
                - "Send the monthly summary to the relationship lead"
            - name: Invoice check against the fee schedule
              description: |-
                ## Purpose
                Fee creep rarely arrives as a price rise: it comes as an extra line for a project, a charge on a newly reported asset or a pass-through cost nobody approved. Checking each invoice against the written fee schedule as it arrives catches errors while they are small and easy to reverse.

                ## Milestones
                1. A checklist made from the fee schedule for checking each invoice.
                2. Every invoice checked and marked approved or queried before payment.
                3. Queries sent in writing and their outcomes recorded.
                4. A running total of fees paid kept for the annual fee audit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every office invoice in the year has been checked against the fee schedule and marked approved or queried."
                cadence: rolling
              tasks:
                - "Turn the fee schedule into a short invoice checklist"
                - "Check the latest office invoice against the schedule @recurring(monthly:20)"
                - "Query any unexplained line in writing"
                - "Add the approved amount to the running fee total"
            - name: Quarterly review meeting with the relationship lead
              description: |-
                ## Purpose
                Each quarterly meeting is where the family holds the office to account and where the office learns what has changed in the family. A fixed agenda covering the report, the service log, open requests, upcoming events and fees keeps it from drifting into a market commentary the family did not ask for.

                ## Milestones
                1. A standing agenda agreed with the office.
                2. The quarterly report received and read before each meeting.
                3. Actions from each meeting written with owners and dates.
                4. Last quarter's actions checked off at the start of the next meeting.

                ## Notes
                Start from the **Meeting notes** template and keep every quarter in one place, so trends over two or three years are easy to see.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four review meetings a year are held on the standing agenda, each with written actions that are checked the next quarter."
                cadence: rolling
              tasks:
                - "Agree a standing agenda for the quarterly review"
                - "Read the quarterly report and service log before the meeting @recurring(quarterly)"
                - "Write actions with owners and dates after each meeting"
                - "Open each meeting by checking last quarter's actions"
            - name: Annual fee audit against the agreement
              description: |-
                ## Purpose
                Once a year the family should see, on one page, everything the office cost, including pass-through and third-party charges, and compare it with the fee schedule and the original cost map. It is the moment to ask whether the fee still matches the service and the family's current assets.

                ## Milestones
                1. All office fees and pass-through costs for the year totalled.
                2. The total compared with the fee schedule and with the original adviser cost map.
                3. Any difference explained by the office in writing.
                4. A note on whether to renegotiate filed for the annual scorecard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page annual fee audit compares actual costs with the fee schedule and records any differences and their explanation."
                cadence: cyclic
              tasks:
                - "Request a full annual statement of fees and pass-through costs"
                - "Run the annual fee audit against the schedule @recurring(yearly)"
                - "Ask the office to explain any difference in writing"
                - "Note whether the fee needs renegotiating"
            - name: Yearly conflicts and disclosure refresh
              description: |-
                ## Purpose
                Offices change: they launch funds, take on new owners, sign referral deals with banks. Asking for a signed annual statement of all income the office earns connected to the family's assets, and any new conflicts, keeps the independence the family paid for from eroding quietly.

                ## Milestones
                1. A standard annual disclosure request written.
                2. A signed statement received covering all income linked to family assets.
                3. Changes in ownership, products or referral deals noted.
                4. Any new conflict discussed and its handling agreed in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed annual conflicts and income disclosure from the office is on file for every year of the relationship."
                cadence: cyclic
              tasks:
                - "Write the standard annual disclosure request"
                - "Ask the office for its signed conflicts statement @recurring(yearly)"
                - "Compare it with last year's statement"
                - "Agree in writing how any new conflict will be handled"
            - name: Family feedback round across branches
              description: |-
                ## Purpose
                Those who complain loudest are not always the ones being served worst, and quieter branches may simply have stopped asking for help. A short structured feedback round each year, by survey or a call, shows whether the office is serving every branch fairly and which people it rarely hears from.

                ## Milestones
                1. A five-question feedback form written in plain words.
                2. The form sent to every adult family member who uses the office.
                3. Responses summarised by branch without naming individuals.
                4. Findings shared with the office and the family council.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year a feedback summary by branch is produced from responses and shared with the office and family council."
                cadence: cyclic
              tasks:
                - "Write a five-question feedback form"
                - "Send the feedback form to every adult family member @recurring(yearly)"
                - "Summarise the replies by branch without names"
                - "Share the summary with the office and the family council"
            - name: Annual scorecard for the office
              description: |-
                ## Purpose
                Once a year a scorecard, using the same criteria the office was chosen on, turns twelve months of service logs, invoices, feedback and quarterly notes into a clear view of whether the appointment is working. It also makes a later decision to renegotiate or leave a matter of record, not of mood.

                ## Milestones
                1. The original selection criteria reused as scorecard lines.
                2. Evidence from the service log, fee audit and feedback round attached to each line.
                3. A score and a short comment written for each criterion.
                4. The scorecard discussed with the office and three improvement points agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scorecard on the original criteria, with evidence and three agreed improvement points, is completed each year."
                cadence: cyclic
              tasks:
                - "Copy the original selection criteria into a scorecard"
                - "Complete the annual scorecard with the decision group @recurring(yearly)"
                - "Attach evidence from the log, fee audit and feedback"
                - "Agree three improvement points with the office"
            - name: Watchlist for ownership changes and departures
              description: |-
                ## Purpose
                Most of the big risks to a shared office relationship arrive as news: a sale to a bank or private equity buyer, the departure of the relationship lead, a regulatory sanction. Keeping a light watch on the office, and agreeing in advance what each event triggers, lets the family respond in days rather than finding out at the next meeting.

                ## Milestones
                1. News and regulator alerts set up for the office's name and its owners.
                2. A list of trigger events and the family's response to each agreed.
                3. The office's duty to notify the family of key changes confirmed in the agreement.
                4. Each alert reviewed and either closed or escalated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Alerts are active for the office and its owners, and a written list of trigger events and responses is on file."
                cadence: rolling
              tasks:
                - "Set up news alerts on the office and its owners"
                - "Check the regulator's register entry for the office @recurring(quarterly)"
                - "Write the trigger events and the family response to each"
                - "Confirm the agreement requires notice of key staff and ownership changes"
                - "Review open alerts and close or escalate each one @recurring(monthly:15)"
            - name: Data and document copies the family keeps itself
              description: |-
                ## Purpose
                Families who hand everything to an office can find, on leaving, that the records of their own lives sit in someone else's system. Keeping a regular export of reports, entity documents and the asset register in a family-controlled vault makes the family independent of any one provider.

                ## Milestones
                1. A list of the records the family must hold its own copy of.
                2. An export format and frequency agreed with the office.
                3. A family-controlled vault set up with access rules.
                4. Each export checked to open properly and be complete.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Exports of reports, entity papers and the asset register arrive on the agreed schedule and are stored in a family-controlled vault."
                cadence: rolling
              tasks:
                - "List the records the family must always hold itself"
                - "Agree an export format and schedule with the office"
                - "Check the latest export opens and is complete @recurring(quarterly)"
                - "Restrict vault access to the agreed family members"
            - name: Choosing an office as a retiree simplifying affairs
              description: |-
                ## Purpose
                Many retirees reach the point where managing six advisers, three banks and a filing cabinet of trust papers is no longer how they want to spend their days, and they want one trusted coordinator. A selection built around simplicity, clear reporting in large print or by phone, and a smooth handover to children later fits this stage far better than an office built for active investors.

                ## Milestones
                1. The services that would remove the most day-to-day effort identified.
                2. Candidates asked how they serve older clients, including capacity and fraud safeguards.
                3. A trusted family member or adviser named to sit in on meetings.
                4. A plan agreed for how the office will work with children after the retiree.

                ## Notes
                Ask each office how it handles a lasting power of attorney and what it does if it suspects a client is being pressured. Good offices have a written answer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The chosen office has given written answers on older-client safeguards and a handover plan to the next generation is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the tasks that take the most of your time each month"
                - "Ask candidates how they protect older clients from fraud and pressure"
                - "Name a family member or adviser to join the meetings"
                - "Agree how the office will work with your children later"
            - name: Selecting an office after selling the family business
              description: |-
                ## Purpose
                Selling the family business turns a family whose wealth sat in one company into one with a large pile of cash, new tax questions and a queue of bankers at the door. Pausing for a few months, parking the proceeds safely with professional advice, and then running a proper selection avoids the common mistake of signing with whoever was closest to the deal.

                ## Milestones
                1. A rule agreed that no long-term appointment is made for a set period after completion.
                2. Proceeds held in a simple interim arrangement agreed with the family's advisers.
                3. Banks and firms that approached the family logged, not answered on the spot.
                4. The full selection process started once the interim period ends.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An interim period with no long-term appointment is recorded and the selection begins only after it ends."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree with the family how long to wait before appointing anyone"
                - "Ask your independent advisers to set up a simple interim arrangement"
                - "Log every firm that approaches the family after the sale"
                - "Start the long list once the waiting period is over"
            - name: Taking over the office relationship after a bereavement
              description: |-
                ## Purpose
                When the family member who chose and managed the office dies, a spouse or child can inherit a relationship they never understood, at the hardest possible moment. Learning the agreement, the people and the fee schedule over a few calm months, rather than renewing or firing in grief, protects both the family and the estate.

                ## Milestones
                1. The agreement, fee schedule and last two quarterly reports gathered.
                2. A meeting held with the relationship lead to explain the current arrangement.
                3. Any decisions not needed now postponed for an agreed period.
                4. A review of the relationship scheduled once the estate is settled.

                ## Notes
                The office will be working with the executors on the estate. Make sure the executors and the family both know who instructs the office during that time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The new family contact has read the agreement and reports, met the relationship lead and set a date for a full review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the agreement, fee schedule and latest reports"
                - "Ask the relationship lead for an introductory meeting"
                - "Agree with the executors who instructs the office for now"
                - "Set a date for a full review after the estate is settled"
            - name: Involving adult children in the selection
              description: |-
                ## Purpose
                Whichever office is chosen today will probably serve the children for longer than the parents, so leaving them out produces a relationship they never accepted. Giving adult children a defined role, such as running reference calls or scoring the reporting packs, builds their understanding and makes them co-owners of the choice.

                ## Milestones
                1. Each adult child offered a specific role in the selection.
                2. A short briefing given on the reasons note, criteria and conflicts.
                3. Their scores and comments included in the final decision record.
                4. At least one child invited to the quarterly reviews after appointment.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Each willing adult child has completed a named part of the selection and their scores appear in the decision record."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each adult child which part of the selection they would like to own"
                - "Brief them on the reasons note and the criteria"
                - "Include their scores in the final decision record"
                - "Invite one child to join the quarterly reviews"
            - name: Office reach for a family across several countries
              description: |-
                ## Purpose
                Spread across Trinidad, Toronto and London, with assets in the Cayman Islands and Florida, a family needs an office that can work across time zones, currencies and tax systems without pretending to be expert in all of them. Testing each candidate's real reach, its partner firms and who it calls when a question falls outside its home market, avoids an office out of its depth.

                ## Milestones
                1. Every country where family members live or assets sit listed.
                2. Each candidate asked which of those countries it serves directly and which through partners.
                3. Partner firms named and checked for at least the two most important countries.
                4. Licensing to serve clients resident in each country confirmed with the family's lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows each candidate's direct and partner coverage for every country the family touches, with licensing checked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every country where family members live or hold assets"
                - "Ask each candidate which countries it serves directly"
                - "Get the names of partner firms in the two most important countries"
                - "Ask the family lawyer to confirm licensing for each country"
            - name: Office or wealth manager for a smaller fortune
              description: |-
                ## Purpose
                Many multi-family offices set minimum fees or asset levels, and a family just below them may be better served by a private bank or wealth manager with family office services plus a good independent accountant. Comparing the two routes honestly, on cost and on independence, keeps a family from paying for a service level it does not need.

                ## Milestones
                1. The minimums of each long-list office recorded.
                2. Two wealth managers offering family office services added for comparison.
                3. The cost and conflict profile of each route set side by side.
                4. A choice recorded, with the asset level at which to revisit it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of a multi-family office and a wealth manager route ends in a recorded choice and review trigger."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the minimum fee or asset level of each long-list office"
                - "Add two wealth managers that offer family office services"
                - "Compare cost and conflicts for each route"
                - "Write the choice and when to revisit it"
            - name: Telling the advisers who were not chosen
              description: |-
                ## Purpose
                Appointing an office usually means ending or reducing some long relationships, with a banker, an accountant or a trust officer who has served the family for years. Telling them early, personally and with clear handover dates keeps goodwill, avoids gaps in service and makes it easy to return if needed.

                ## Milestones
                1. Every adviser affected by the change listed with what changes for them.
                2. Each told personally by the family before the new office contacts them.
                3. Handover dates and records to transfer agreed with each.
                4. Final invoices received and any notice periods respected.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every affected adviser has been told personally, given a handover date and has issued a final invoice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each adviser whose role changes and how"
                - "Call each one personally before the new office contacts them"
                - "Agree handover dates and the records to transfer"
                - "Check notice periods and pay final invoices"
            - name: Hybrid model with an in-house controller
              description: |-
                ## Purpose
                Some families keep one trusted employee, such as a controller or family secretary, and buy the rest from a shared office. The model works well when the boundary is clear, and badly when the controller and the office both think they own the bill pay or the reporting.

                ## Milestones
                1. A split of duties between the in-house person and the office written down.
                2. Who approves payments and who prepares them fixed in the split.
                3. A monthly handoff between the two agreed.
                4. The split reviewed after six months and adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written duty split between the in-house controller and the office exists and has been reviewed after six months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every duty and mark it in-house or office"
                - "Fix who prepares and who approves payments"
                - "Hold a monthly handoff between controller and office @recurring(monthly:25)"
                - "Review the split after six months"
            - name: Exit plan for moving to another office
              description: |-
                ## Purpose
                Without a planned exit, families tend to stay too long with an office that has stopped serving them. A written exit plan, prepared quietly while things are going well, sets out the notice terms, the data to take, the authorities to revoke and the order of handover, so leaving is a process rather than a crisis.

                ## Milestones
                1. Notice periods and termination fees in the agreement summarised.
                2. Records, data and documents to retrieve listed with formats.
                3. Every authority and access to revoke listed.
                4. An exit sequence written, ready to use with any successor office.

                ## Notes
                Review the plan with the family lawyer once, then keep it with the agreement. Most of its value is in knowing it exists.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written exit plan covers notice, data retrieval, authority removal and handover order and is filed with the agreement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise notice periods and termination fees from the agreement"
                - "List records to retrieve and the format for each"
                - "List every authority and login to revoke on exit"
                - "Write the exit order and file it with the agreement"
                - "Update the exit plan after any change to the agreement @recurring(yearly)"
            - name: Market re-test of the office every few years
              description: |-
                ## Purpose
                Even a good office drifts on price and attention once a relationship is comfortable, and the market moves on in reporting technology and fees. A light re-test every three to five years, with two or three other offices asked for indicative proposals, either confirms the incumbent or opens a real conversation about change.

                ## Milestones
                1. A re-test year agreed and recorded in the family calendar.
                2. Two or three alternative offices asked for indicative proposals.
                3. The incumbent's last scorecards and fees compared with the alternatives.
                4. A recorded decision to stay, renegotiate or run a full selection.

                ## Notes
                Tell the incumbent a re-test is happening. A good office will welcome it, and the conversation it starts is often worth more than the proposals.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every three to five years a re-test compares the incumbent with at least two alternatives and records a decision."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Agree the re-test year and put it in the family calendar"
                - "Check whether the market re-test is due this year @recurring(yearly)"
                - "Ask two or three offices for indicative proposals"
                - "Compare their proposals with the incumbent's scorecards and fees"
---

# Multi-Family Office Selection

This area is for the parent or retiree whose affairs have outgrown a private banker and an accountant, but who does not want to build and staff a family office of their own. It starts with foundations (why the family is looking, the services it needs, what the current advisers cost and who decides), moves through the knowledge that protects a buyer (ownership, fee models, conflicts, regulation and custody), then the selection itself from long list and RFP to references, due diligence, fees and the service agreement, the trial period and onboarding, the operating routine once an office is appointed, situations such as a business sale or a bereavement, and finally specialist work on hybrid models, switching offices and re-testing the market.

What repeats once an office is appointed is a monthly service log and invoice check, a quarterly review meeting with the relationship lead, and a yearly cycle of fee audit, conflicts refresh, family feedback and a scorecard, with a full market re-test every few years. The Vendor, Risk register, Purchase decision and Meeting notes templates pair with candidate files, operational due diligence, the final choice and the quarterly reviews. None of this is investment, tax or legal advice: take those calls to the family's own independent lawyer and tax adviser. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
