---
id: data-analytics.master-data-management
name: Master Data Management
description: "One trusted version of customer, product and supplier records: a domain inventory and baseline, match, merge and survivorship rules, stewardship routines, a hub go-live and the controls that stop duplicates coming back."
category: business
version: 1.0.0
tags: [data-analytics, master-data-management, enterprise, team, golden-record, record-matching, data-stewardship, reference-data]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - operational-checklist
    - vendor
    - remediation-plan
    - risk-register
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Master Data Management
          description: "Keeping one accurate version of core records such as customers, products and suppliers across many systems, with matching and merge rules."
          projects:
            - name: Master data domain and system inventory
              description: |-
                ## Purpose
                Before anyone buys a hub or writes a match rule, someone has to say which records count as master data and where each copy lives. A single inventory of domains such as customer, product, supplier, location and employee, with every system that creates or stores them, usually reveals four to eight copies of the customer alone and shows where the pain really sits.

                ## Milestones
                1. Each candidate domain listed with a one-line definition of what a record represents.
                2. Every system holding a copy of each domain named, with its approximate record count.
                3. The systems that can create new records marked separately from those that only read them.
                4. The inventory reviewed by at least one person each from sales, finance, procurement and IT.

                ## Notes
                Keep transactional data such as orders and invoices out of the inventory. They point at master records but are not master data themselves.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A domain inventory lists every system that creates or stores each master data domain, with record counts, reviewed by four functions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the five or six entity types your teams argue about most often"
                - "Ask each system owner which master records their system creates or stores"
                - "Record approximate record counts per system and domain"
                - "Mark which systems can create records and which only read them"
                - "Refresh the domain inventory against new and retired systems @recurring(yearly)"
            - name: Costing the damage done by duplicate records
              description: |-
                ## Purpose
                Master data programmes stall when they are sold as tidiness. Putting a number on what duplicates and bad records already cost, from duplicate supplier payments and returned post to split credit limits and two sales reps chasing the same account, gives sponsors a reason to fund the work and gives you a baseline to beat.

                ## Milestones
                1. Five or more concrete incidents from the last year traced to duplicate or wrong master records.
                2. An estimated annual cost for each, with the assumptions written beside it.
                3. A one-page business case naming the sponsor, the first domain and the expected savings.
                4. A sponsor decision recorded: fund, pilot or defer.

                ## Notes
                Keep estimates conservative and sourced. A case built on three well-documented incidents survives finance review better than one built on a vendor's industry average.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page business case with at least five costed incidents and a recorded sponsor decision to fund, pilot or defer."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask accounts payable how many duplicate supplier payments they caught last year"
                - "Collect returned-mail and failed-delivery counts from operations"
                - "Ask sales operations how often two reps worked the same customer"
                - "Estimate an annual cost for each incident type with stated assumptions"
                - "Present the case to the sponsor and record the decision"
            - name: Choosing the first master data domain
              description: |-
                ## Purpose
                Trying to master customers, products and suppliers at once is the classic way these programmes run for three years and deliver nothing. Scoring each domain on business pain, number of systems, data volume and sponsor appetite picks the one where a first release within six months is realistic and visible.

                ## Milestones
                1. Each domain from the inventory scored from one to five on pain, complexity, volume and sponsorship.
                2. The top two domains compared in a short written note.
                3. One domain chosen, with the reasons and the domains deliberately deferred.
                4. The decision agreed by the sponsor and shared with the system owners.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One first domain chosen from a written scoring of all candidates, with the deferred domains and reasons recorded and agreed by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set four scoring criteria and agree them with the sponsor"
                - "Score every domain from the inventory against the criteria"
                - "Write a half-page note comparing the top two domains"
                - "Record the chosen domain and why the others were deferred"
            - name: Attribute-level system of record map
              description: |-
                ## Purpose
                Saying the ERP owns the customer hides the real arrangement, in which the CRM creates the account, finance sets credit terms and the web shop updates email addresses. Mapping which system creates, may update and must only read each critical attribute is the ground that later survivorship and sync rules are built on.

                ## Milestones
                1. Every critical attribute of the first domain listed in rows, with systems as columns.
                2. Each cell marked create, update, read or none.
                3. Conflicts where two systems both update the same attribute highlighted.
                4. Each conflict resolved or assigned to a named owner with a date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A create, update and read map covers every critical attribute of the first domain, with all conflicts resolved or owned."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build a grid of critical attributes against the systems that hold them"
                - "Walk each system owner through their column and mark create, update or read"
                - "Highlight attributes that two or more systems can update"
                - "Assign an owner and a date to each conflicting attribute"
            - name: Duplicate and completeness baseline
              description: |-
                ## Purpose
                Without a starting measure nobody can say whether the hub made things better. Profiling the first domain for exact duplicates, likely duplicates and empty critical fields, within each source and across sources, gives a figure such as 14 percent of supplier records with a probable twin, which becomes the headline number in every later report.

                ## Milestones
                1. Exact duplicates counted within each source on a normalised key.
                2. Probable duplicates across sources estimated from a reviewed sample of at least 200 pairs.
                3. Completeness measured for every critical attribute.
                4. A dated baseline sheet stored where the scorecard will later read from.

                ## Notes
                Normalise case, spacing and punctuation before counting exact duplicates, or the baseline will understate the problem.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline records duplicate rates and critical attribute completeness for each source of the first domain."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the first domain's records from each source system"
                - "Count exact duplicates after normalising case, spacing and punctuation"
                - "Review a sample of 200 candidate pairs to estimate probable duplicates"
                - "Measure how often each critical attribute is empty or invalid"
                - "Save the baseline with today's date for the scorecard"
            - name: Critical data elements for the customer master
              description: |-
                ## Purpose
                A customer record can carry two hundred fields, yet perhaps twenty decide whether an invoice reaches the right place and a credit check finds the right company. Agreeing that short list, with a definition, format and validation rule for each, points matching, stewardship and quality effort at the errors that actually cost money.

                ## Milestones
                1. A list of fifteen to twenty-five critical attributes, each with the business process that depends on it.
                2. A definition, allowed format and validation rule written for each.
                3. Attributes mandatory at creation separated from those that can follow later.
                4. The list agreed with sales, finance and service leads.

                ## Notes
                If the first domain is supplier or product, run the same exercise for that domain instead; the method is identical.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Between fifteen and twenty-five critical customer attributes are documented with definitions, formats and rules, agreed by three functions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the customer fields used by invoicing, credit checks and delivery"
                - "Cut the list to the twenty-five fields that cause the most rework when wrong"
                - "Write a definition, format and validation rule for each field"
                - "Mark which fields must be present before a record can be created"
                - "Ask the agent to draft plain-language field definitions for steward review"
            - name: Master data requester, approver and steward roles
              description: |-
                ## Purpose
                Records go wrong when anyone with system access can create a supplier and nobody answers for the result. Naming, for each domain, who may request a new record, who approves it and which steward creates and checks it turns master data from everyone's problem into a defined job with limited system rights.

                ## Milestones
                1. A requester, approver and steward named for the first domain in each region or business unit.
                2. The rights each role holds in each system written down.
                3. System access reduced so that only stewards can create or merge master records.
                4. Role holders confirmed with their managers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Named requesters, approvers and stewards exist for the first domain, with create and merge rights limited to stewards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List everyone who can currently create records in the first domain's systems"
                - "Name a requester, approver and steward for each business unit"
                - "Ask system admins to remove create rights from anyone who is not a steward"
                - "Recertify who holds each master data role and their system rights @recurring(yearly)"
            - name: Global master identifier and crosswalk design
              description: |-
                ## Purpose
                Every system already has its own customer number, and none of them can become the master key without dragging that system's quirks along. Designing a meaningless global identifier that is never reused, plus a crosswalk table linking it to every source key, gives reports and integrations one stable reference even when records merge or systems are replaced.

                ## Milestones
                1. A global identifier format agreed: meaningless, never reused, never edited.
                2. A crosswalk table design holding global ID, source system, source key and validity dates.
                3. Rules written for what happens to identifiers on merge and unmerge.
                4. The design reviewed by the integration and reporting teams.

                ## Notes
                Keep country, type or sequence meaning out of the identifier. Meaningful keys break the first time a customer moves or changes category.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written identifier and crosswalk design, including merge and unmerge behaviour, is approved by the integration and reporting teams."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the key formats used by every system in the first domain"
                - "Agree a meaningless, never-reused format for the global identifier"
                - "Design the crosswalk table with source system, source key and validity dates"
                - "Write what happens to identifiers and crosswalk rows when records merge or split"
            - name: Choosing the MDM architecture style
              description: |-
                ## Purpose
                Registry, consolidation, coexistence and centralised hubs differ in who may author records and how far the golden record flows back to source systems. Choosing the style deliberately, based on how much the source systems can change and how fast consumers need updates, stops a tool purchase from deciding the architecture by default.

                ## Milestones
                1. The four styles summarised on one page with what each demands of source systems.
                2. The first domain's constraints written down: who authors records, the latency needed and the systems that cannot change.
                3. One style chosen, with a planned path to a later style if needed.
                4. The decision recorded in an architecture decision note.

                ## Notes
                Many organisations start with consolidation for reporting and move towards coexistence later. Choosing centralised authoring on day one means every creating system must change at once.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An architecture decision note names the chosen hub style for the first domain, its constraints and the planned future state."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page summary of registry, consolidation, coexistence and centralised styles"
                - "List which source systems can and cannot be changed to read from a hub"
                - "Ask consumers how fresh golden records need to be for their processes"
                - "Record the chosen style and the reasons in a decision note"
            - name: Single front door for new and changed records
              description: |-
                ## Purpose
                When new customers and suppliers are keyed straight into whichever system someone has open, duplicates appear faster than any clean-up can remove them. One request route, with a form that searches for existing records first and a turnaround target such as two working days, makes creation deliberate without making it slow.

                ## Milestones
                1. One request form or portal for creating and changing records in the first domain.
                2. A search-before-create step that shows likely existing matches to the requester.
                3. A turnaround target published and measured.
                4. Direct creation in source systems closed off, or reported every week where it cannot be.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All new first-domain records arrive through one request route, with at least 90 percent completed inside the published turnaround target."
                cadence: rolling
              tasks:
                - "Choose where the request form will live and who receives it"
                - "Add a search-before-create step that lists likely matches"
                - "Publish the turnaround target to requesters"
                - "Review open and overdue master data requests @recurring(weekly:mon)"
                - "Report the share of requests completed inside the turnaround target @recurring(monthly:5)"
            - name: Clerical review queue for possible matches
              description: |-
                ## Purpose
                Matching engines sort candidate pairs into sure matches, sure non-matches and a grey band in between, and that grey band is where wrong merges come from. A steward working the queue twice a week, with written guidance on what evidence settles a pair, keeps the backlog small and produces labelled decisions that later improve the rules.

                ## Milestones
                1. Score thresholds for automatic merge, clerical review and no match agreed.
                2. Written guidance on which attributes settle a doubtful pair.
                3. The queue worked twice a week with the backlog under an agreed size.
                4. Each decision stored with the steward's name and the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The clerical review backlog stays under the agreed size for three consecutive months, with every decision recorded with a reason."
                cadence: rolling
              tasks:
                - "Agree the score bands for automatic merge, review and no match"
                - "Write a one-page guide on the evidence that settles a doubtful pair"
                - "Work the clerical review queue and record each decision @recurring(weekly:tue,fri)"
                - "Flag pairs the guide does not cover for the next stewardship session"
            - name: Monthly master data quality scorecard
              description: |-
                ## Purpose
                Stewards fix records every day, but sponsors only see the work if a few numbers move. A monthly scorecard showing duplicate rate, completeness of critical attributes, request turnaround and the open review backlog, set against the baseline, keeps funding and attention in place long after go-live.

                ## Milestones
                1. Four to six measures chosen and defined, each traceable to the baseline.
                2. The first scorecard produced with the baseline beside it.
                3. Twelve consecutive monthly scorecards published.
                4. Each measure that worsens two months running given an owner and an action.

                ## Notes
                Start from the **Metrics log** template. Keep definitions stable for at least a year; changing them midway destroys the trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly scorecards are published, each comparing duplicate rate, completeness and turnaround against the baseline."
                cadence: rolling
              tasks:
                - "Pick four to six measures that trace back to the baseline"
                - "Set up a metrics log with the baseline values as the first row"
                - "Publish the master data scorecard to the sponsor and stewards @recurring(monthly:9)"
                - "Assign an owner to any measure that has worsened for two months"
            - name: Monthly data stewardship working session
              description: |-
                ## Purpose
                Stewards in different regions and systems make the same judgement calls differently unless they compare notes. A monthly session to settle disputed merges, agree new rules and read the scorecard together turns individual habits into shared standards and gives stewards a place to escalate.

                ## Milestones
                1. A standing monthly session with stewards from every system that creates records.
                2. A running decisions log that every steward can read.
                3. Disputed cases from the review queue resolved within one session.
                4. Rule changes agreed in the session added to the steward guide within two weeks.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly stewardship sessions are held in a year, each with a decisions log entry and agreed rule changes added to the guide within two weeks."
                cadence: rolling
              tasks:
                - "Invite one steward from each creating system to a standing monthly session"
                - "Start a decisions log the whole group can read"
                - "Run the stewardship session on disputed merges and rule changes @recurring(monthly:14)"
                - "Update the steward guide with each agreed change"
            - name: Crosswalk and orphan key reconciliation
              description: |-
                ## Purpose
                Crosswalks decay quietly: a source system creates records the hub never heard of, or a merge leaves links pointing at a retired identifier. Reconciling source keys against the crosswalk every month catches orphans before reports double count them or integrations fail on them.

                ## Milestones
                1. A query listing source records with no crosswalk entry.
                2. A query listing crosswalk rows that point at retired or merged global identifiers.
                3. Both counts recorded monthly with the trend.
                4. Orphans older than one month fixed or explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly reconciliation runs for six months, with orphan source keys and dangling links each held below an agreed count."
                cadence: rolling
              tasks:
                - "Write a query for source records with no crosswalk entry"
                - "Write a query for crosswalk rows pointing at merged or retired identifiers"
                - "Run the crosswalk reconciliation and log both counts @recurring(monthly:21)"
                - "Fix or explain every orphan older than one month"
            - name: Dormant record review and blocking
              description: |-
                ## Purpose
                Suppliers unused for three years and customers who closed their accounts still sit in the master, still match against new records and, in the case of suppliers, can still be paid. Blocking dormant records each quarter shrinks the matching pool and closes a common route for payment fraud.

                ## Milestones
                1. A dormancy rule per domain, such as no transactions for 24 months.
                2. The first list of dormant records reviewed with the owning function.
                3. Dormant records blocked for new transactions rather than deleted.
                4. A quarterly run in place with counts recorded.

                ## Notes
                Block, do not delete. Records referenced by historical invoices and orders must stay for audit and retention rules.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written dormancy rule exists per domain and four quarterly sweeps are completed in a year, with counts of records blocked."
                cadence: rolling
              tasks:
                - "Agree a dormancy rule for each domain with the owning function"
                - "Produce the first list of dormant records for review"
                - "Block dormant records for new transactions instead of deleting them"
                - "Run the dormant record sweep and record the counts @recurring(quarterly)"
            - name: Supplier bank detail change controls
              description: |-
                ## Purpose
                A forged email asking to change a supplier's bank account is one of the commonest frauds against finance teams, and the supplier master is where it succeeds or fails. A fixed procedure for bank detail changes, with a call-back to a number already on file and a second person approving, closes the gap without slowing genuine changes much.

                ## Milestones
                1. A written procedure for bank detail changes, including a call-back to a number already held.
                2. Two-person approval enforced in the system for bank detail edits.
                3. A log of every bank detail change showing who verified it and how.
                4. A monthly review of the log by someone outside accounts payable.

                ## Notes
                Start from the **Operational checklist** template. Never verify a change using contact details supplied in the request itself.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every supplier bank detail change in a quarter has a logged call-back to a pre-existing number and a second approver."
                cadence: rolling
              tasks:
                - "Write the bank detail change procedure with a call-back to a number already held"
                - "Ask the system admin to enforce two-person approval on bank detail edits"
                - "Start a log of every bank detail change and how it was verified"
                - "Review the bank detail change log with someone outside accounts payable @recurring(monthly:3)"
            - name: Reference data code list upkeep
              description: |-
                ## Purpose
                Country, currency, unit of measure and industry code lists look settled until a new country code is issued, a currency changes or two systems use different codes for the same carton. Keeping each list in one managed place, checked quarterly against its published standard, prevents small mismatches that break matching and reporting.

                ## Milestones
                1. Each reference list identified with its source standard, such as the ISO country and currency codes.
                2. One managed copy of each list that systems read from or are reconciled to.
                3. Mappings recorded wherever a system uses its own codes.
                4. A quarterly check against the published standards completed and logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reference code list has one managed copy, recorded source mappings and a logged quarterly check against its standard."
                cadence: rolling
              tasks:
                - "List the reference code lists used in the first domain and their standards"
                - "Choose one managed copy for each list"
                - "Record mappings wherever a system uses its own codes"
                - "Check managed code lists against their published standards @recurring(quarterly)"
            - name: Quarterly match rule tuning
              description: |-
                ## Purpose
                Match rules that worked at launch drift as new sources, regions and data entry habits arrive. A quarterly look at the false merges stewards had to undo and the duplicates users reported, followed by small rule changes tested on a labelled sample, keeps precision and recall from sliding.

                ## Milestones
                1. False merges and missed duplicates from the quarter collected in one list.
                2. Each error grouped by cause, such as shared addresses or abbreviated names.
                3. Proposed rule changes tested against the labelled sample before release.
                4. Released changes and their measured effect recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly tuning cycles are completed in a year, each recording tested rule changes and their measured effect on precision and recall."
                cadence: cyclic
              tasks:
                - "Collect the quarter's unmerges and user-reported duplicates in one list"
                - "Group the errors by cause"
                - "Test proposed rule changes on the labelled sample before release"
                - "Hold the match rule tuning review with stewards @recurring(quarterly)"
            - name: Matching techniques for names and addresses
              description: |-
                ## Purpose
                Matching is where most MDM programmes succeed or fail, and the people tuning the rules are rarely taught the basics. Learning standardisation, blocking, phonetic codes, edit distance and token-based similarity, and trying each on a sample of your own records, makes vendor demos and rule debates far easier to judge.

                ## Milestones
                1. Standardisation, blocking and three similarity measures understood well enough to explain to a colleague.
                2. Each measure tried on 100 pairs of your own records.
                3. A short note on which measures suit names, addresses and identifiers.
                4. Common traps noted, such as blocking on a field that is often empty.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note compares at least three similarity measures tried on 100 of your own record pairs."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read an introduction to record matching covering blocking and similarity measures"
                - "Pull 100 known duplicate and non-duplicate pairs from your data"
                - "Score the pairs with edit distance, phonetic and token-based measures"
                - "Write which measures suit names, addresses and identifiers"
            - name: Survivorship rules for golden records
              description: |-
                ## Purpose
                Once two records are linked, someone has to decide which phone number, address and legal name the golden record carries. Writing survivorship rules attribute by attribute, such as most trusted source for legal name, most recent verified value for email and most complete for address, makes the result predictable and explainable to anyone who asks why a value changed.

                ## Milestones
                1. A trust ranking of sources for each critical attribute.
                2. A rule chosen per attribute from trust, recency, completeness or steward override.
                3. Tie-breaking rules written for when the main rule cannot decide.
                4. The rules tested on 50 merged groups and checked by stewards.

                ## Notes
                Steward overrides should beat automated rules and be protected from being overwritten by the next load.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written survivorship rules cover every critical attribute, tested on 50 merged groups and accepted by stewards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Rank sources by trust for each critical attribute"
                - "Pick a survivorship rule for each attribute"
                - "Write tie-breaking rules for cases the main rule cannot settle"
                - "Test the rules on 50 merged groups with stewards"
            - name: International address standardisation
              description: |-
                ## Purpose
                Addresses are the noisiest field in most customer and supplier masters, and formats change completely between countries: where the postcode sits, whether the building number comes before the street, and scripts other than Latin. Learning how postal formats differ and what validation services can confirm lets you set realistic standards instead of forcing every country into one template.

                ## Milestones
                1. Postal formats documented for your top five countries by record count.
                2. Your current address fields checked against those formats.
                3. Address validation service options understood, including what they cannot confirm.
                4. A standard address model proposed for the first domain.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Address formats for the top five countries are documented and a standard address model is proposed for the first domain."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count records by country to find your top five"
                - "Document the postal format for each of the five countries"
                - "Compare your address fields with those formats"
                - "Draft a standard address model that works for all five"
            - name: Legal entity names and registry identifiers
              description: |-
                ## Purpose
                Business customers and suppliers turn up as Acme Ltd, ACME Limited, Acme UK and a trading name, and only an external identifier settles which is which. Learning how legal suffixes, trading names and identifiers such as the Legal Entity Identifier or a national company registration number work turns organisation matching from guesswork into lookup.

                ## Milestones
                1. A suffix normalisation list for legal forms in your main countries.
                2. Legal names and trading names held as separate fields in the data model.
                3. Available registry identifiers for your main countries listed with how to look them up.
                4. Identifier coverage tested on 100 of your business records.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A legal suffix normalisation list exists, plus a coverage test showing what share of 100 business records can be tied to a registry identifier."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a list of legal form suffixes used in your main countries"
                - "Add separate legal name and trading name fields to the model proposal"
                - "List the registry identifiers available in your main countries"
                - "Test how many of 100 business records you can tie to a registry identifier"
            - name: Probabilistic record linkage fundamentals
              description: |-
                ## Purpose
                Deterministic rules such as exact email match are easy to explain but miss most real duplicates. Learning the probabilistic approach, in which each agreeing field adds weight according to how often it would agree by chance, explains how most matching engines score pairs and why a shared surname counts for less than a shared tax number.

                ## Milestones
                1. Agreement and chance-agreement probabilities understood and written up in a paragraph.
                2. Weights estimated by hand for four fields on your own data.
                3. An open-source linkage library run on a sample of a few thousand records.
                4. Its results compared with your current rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sample of your records is linked with an open-source probabilistic library, with results compared against existing rules in a short note."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read a primer on probabilistic record linkage and field weights"
                - "Estimate by hand how often four fields agree by chance in your data"
                - "Run an open-source linkage library on a few thousand records"
                - "Compare its matches with your current rules and note the differences"
            - name: Hierarchy modelling for customers and products
              description: |-
                ## Purpose
                Finance wants the legal ownership tree, sales wants territories and key accounts, and the product team wants category and brand, all over the same records. Learning to model several hierarchies side by side, each with effective dates, stops one team's view overwriting another's and makes roll-up reporting trustworthy.

                ## Milestones
                1. The hierarchies each team needs listed with their purpose.
                2. A model that holds several hierarchies over the same records, each with effective dates.
                3. One hierarchy built for a sample of 50 accounts or products.
                4. An annual recertification step agreed with each hierarchy owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A multi-hierarchy model is built for a 50-record sample, and each hierarchy owner has agreed an annual recertification."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask finance, sales and product which hierarchies they report on"
                - "Draft a model that holds several hierarchies with effective dates"
                - "Build one hierarchy for a sample of 50 records"
                - "Recertify each hierarchy with its owner @recurring(yearly)"
            - name: Labelled pair sample for match quality
              description: |-
                ## Purpose
                Vendors and engineers will both claim the matching is good, and without a labelled sample nobody can check. A set of around 500 record pairs labelled by stewards as match or non-match lets you measure precision and recall for any rule or tool, compare options fairly and catch regressions after changes.

                ## Milestones
                1. About 500 pairs drawn across score bands, including easy and hard cases.
                2. Each pair labelled independently by two stewards, with disagreements settled.
                3. Precision and recall measured for the current rules.
                4. The sample stored and refreshed yearly with new hard cases.

                ## Notes
                Sample from all score bands, not only the high ones. A sample of easy matches will flatter any rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A labelled sample of about 500 pairs with two-steward agreement exists, and precision and recall are recorded for the current rules."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Draw about 500 candidate pairs spread across all score bands"
                - "Have two stewards label each pair independently"
                - "Settle disagreements and record the final label"
                - "Measure precision and recall for the current match rules"
                - "Add newly found hard cases to the labelled sample @recurring(yearly)"
            - name: MDM platform selection
              description: |-
                ## Purpose
                MDM platforms differ widely in matching quality, domain support, workflow, licensing by record count and the configuration effort they need. Running a structured selection on your own data, including a proof of concept against the labelled sample, protects against buying the best demo rather than the best fit for a commitment of five to ten years.

                ## Milestones
                1. Requirements written from the architecture style, domains and volumes.
                2. A long list cut to three vendors or approaches, including a build option.
                3. A proof of concept run on your own records and labelled sample.
                4. Total cost over five years compared, including services and internal staff.
                5. A recommendation approved by the sponsor.

                ## Notes
                Start from the **Vendor** template. Ask for references from organisations of similar size that started with the same domain.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform recommendation is approved by the sponsor, based on a proof of concept with your own data and a five-year cost comparison."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write requirements from the chosen architecture style and first domain"
                - "Shortlist three vendors or approaches including a build option"
                - "Run a proof of concept using your labelled pair sample"
                - "Compare five-year total cost including services and internal staff"
                - "Ask the agent to summarise each proof of concept into one comparison table"
            - name: Point-of-entry controls in source systems
              description: |-
                ## Purpose
                Most bad master records are created bad. Mandatory critical fields, pick lists for coded values, format checks on tax numbers and postcodes, and a duplicate warning at the moment of creation stop errors at the cheapest possible point, long before a steward has to find them.

                ## Milestones
                1. The ten most frequent creation errors from the baseline listed by frequency.
                2. A control proposed for each: mandatory field, pick list, format check or duplicate warning.
                3. Controls switched on in the main creating system.
                4. The rate of those ten errors measured again after three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Controls are live for the ten most frequent creation errors, with error rates remeasured three months after release."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the ten most frequent creation errors from the baseline"
                - "Propose a field control for each error"
                - "Agree the changes with the system owner and schedule them"
                - "Remeasure the ten error rates three months after release"
            - name: Customer base duplicate clean-up
              description: |-
                ## Purpose
                Even with a hub on the way, years of accumulated duplicates will poison the first load unless they are tackled first. A planned clean-up, starting with high-confidence matches on the accounts that matter most, removes the bulk of the problem in weeks and gives the business visible proof that it can be done.

                ## Milestones
                1. Duplicate groups ranked by match confidence and by the value of the accounts.
                2. High-confidence groups merged, with source links and history preserved.
                3. Doubtful groups reviewed by stewards with account owners consulted.
                4. The duplicate rate remeasured against the baseline.

                ## Notes
                Start from the **Remediation plan** template. Tell account owners before merging their customers, and keep a reversible record of every merge.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The customer duplicate rate is cut by at least half from the baseline, with every merge recorded and reversible."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Rank duplicate groups by match confidence and account value"
                - "Tell account owners which of their customers will be merged"
                - "Merge the high-confidence groups and keep a reversible merge record"
                - "Review doubtful groups with stewards and account owners"
                - "Remeasure the duplicate rate against the baseline"
            - name: Unmerge and split procedure
              description: |-
                ## Purpose
                Every matching process eventually merges two different companies that share an address, and the damage spreads to the invoices, contacts and reports linked to that golden record. A rehearsed unmerge procedure that restores the original records, reassigns linked transactions and notifies downstream systems turns a wrong merge into an hour's work instead of a week's.

                ## Milestones
                1. The steps to split a golden record written, including crosswalk and downstream updates.
                2. The procedure tested end to end on a deliberately merged test pair.
                3. A log kept for every unmerge with its cause.
                4. Causes fed into the quarterly match rule tuning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written unmerge procedure has been tested end to end on a test pair, and an unmerge log is in use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the steps to split a golden record and restore source links"
                - "List which downstream systems must be told about an unmerge"
                - "Rehearse the procedure on a deliberately merged test pair"
                - "Start an unmerge log that records the cause of each case"
            - name: Golden record distribution to consuming systems
              description: |-
                ## Purpose
                A golden record that stays inside the hub fixes reports but not the invoice that went to the wrong address. Deciding how each consuming system receives updates, whether by event, scheduled batch or lookup at the moment of use, and watching for failed deliveries makes the hub change what happens in day-to-day operations.

                ## Milestones
                1. Every consuming system listed with how fresh its master data must be.
                2. A distribution method chosen for each: event, batch or real-time lookup.
                3. Delivery failures logged and alerted to a named owner.
                4. A monthly review of failed and delayed deliveries in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each consuming system receives golden record updates by an agreed method, with failures alerted and reviewed monthly."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List consuming systems and how fresh each needs master data to be"
                - "Choose event, batch or lookup distribution for each consumer"
                - "Set up alerts that send failed deliveries to a named owner"
                - "Review failed and delayed golden record deliveries @recurring(monthly:17)"
            - name: Product master attribute model
              description: |-
                ## Purpose
                Product records feed pricing, ordering, warehousing, e-commerce and compliance, and each team adds its own fields until nobody knows which weight is right. A shared attribute model, with trade item numbers where you sell through retail, consistent units of measure, a classification scheme and clear lifecycle statuses, gives every system the same product.

                ## Milestones
                1. Core product attributes agreed, each with its owning team.
                2. Units of measure and pack levels defined, such as each, inner and case.
                3. A classification scheme chosen and applied to a sample.
                4. Lifecycle statuses defined from new through to discontinued.

                ## Notes
                GS1 standards are the usual reference for trade item numbers and pack levels where products move through retail supply chains.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A product attribute model with units, pack levels, classification and lifecycle statuses is applied to a sample of 100 products."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List product attributes held in pricing, warehouse and e-commerce systems"
                - "Assign an owning team to each core attribute"
                - "Define units of measure and pack levels"
                - "Apply the classification scheme and lifecycle statuses to 100 products"
            - name: Customer account hierarchy for credit exposure
              description: |-
                ## Purpose
                Subsidiaries of one customer can each sit inside their credit limit while the group as a whole owes far more than finance would ever accept. Linking accounts to their legal parent in the master gives credit control a true group exposure figure and stops a parent company in difficulty slipping through as twenty small accounts.

                ## Milestones
                1. The top 200 business customers linked to their ultimate legal parent.
                2. The source of each link recorded, such as a registry or the account manager.
                3. Group exposure reported for the top 50 groups.
                4. A rule in place for how new subsidiaries are linked at creation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The top 200 business customers are linked to legal parents, with group credit exposure reported for the top 50 groups."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export the top 200 business customers by revenue or balance"
                - "Link each to its ultimate legal parent and record the source"
                - "Produce a group exposure report for the top 50 groups with credit control"
                - "Add a parent link step to the new customer request"
            - name: Third-party reference data subscription decision
              description: |-
                ## Purpose
                Commercial business registers, address files and product data pools can fill gaps and verify records faster than stewards can, but they are priced per record or per lookup and the bill grows quickly. Trialling a provider on a sample and comparing match rate and cost against steward time gives a clear yes or no.

                ## Milestones
                1. The gaps a provider would fill named, such as registry numbers or verified addresses.
                2. A sample of 1,000 records sent for a trial match.
                3. Match rate, accuracy and cost per record measured.
                4. A subscribe or decline decision recorded with the reasons.

                ## Notes
                Read the licence terms on whether enriched values can be stored permanently and passed to other systems.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial on 1,000 records has measured match rate and cost per record, and a subscribe or decline decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Name the attribute gaps an external provider could fill"
                - "Send a sample of 1,000 records for a trial match"
                - "Measure match rate, accuracy and cost per record"
                - "Check whether the licence allows storing and sharing enriched values"
                - "Record the subscribe or decline decision"
            - name: First domain go-live and cutover
              description: |-
                ## Purpose
                Go-live is when creating systems stop authoring records on their own and golden records start flowing, and it is where untested assumptions surface. Planning the cutover with a freeze on record creation, a rollback point and stewards on hand for the first fortnight keeps the business running while the change lands.

                ## Milestones
                1. A cutover plan with a creation freeze, run order and rollback point.
                2. The programme risk register reviewed in the two weeks before cutover.
                3. A dress rehearsal completed on a copy of production.
                4. Go-live completed with a steward rota for the first two weeks.
                5. A post go-live review held within 30 days.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first domain goes live on its planned date after a completed dress rehearsal, with no rollback and a post go-live review within 30 days."
                cadence: one-shot
                effort_hours_estimate: "80"
              tasks:
                - "Draft the cutover plan with freeze period, run order and rollback point"
                - "Review the programme risk register with the cutover team"
                - "Run a dress rehearsal on a copy of production"
                - "Book a steward rota for the two weeks after go-live"
                - "Hold the post go-live review and record the actions"
            - name: Initial hub load and reconciliation
              description: |-
                ## Purpose
                Loading years of records from several systems into the hub for the first time is a one-off job that sets the tone for everything after. Loading in waves by source, reconciling counts and matched groups after each wave, and having stewards check a sample of golden records catches mapping errors before users ever see them.

                ## Milestones
                1. Load order agreed by source, with the most trusted source first.
                2. Each wave reconciled: records in, records matched, records rejected.
                3. Rejected records triaged and either fixed or deliberately excluded.
                4. A sample of 100 golden records checked and signed off by stewards.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All sources are loaded in waves with reconciled counts, rejects triaged and 100 sampled golden records signed off by stewards."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the load order with the most trusted source first"
                - "Reconcile records loaded, matched and rejected after each wave"
                - "Triage rejected records into fix or exclude"
                - "Have stewards check and sign off 100 sampled golden records"
            - name: Master data readiness for an ERP replacement
              description: |-
                ## Purpose
                ERP migrations are the moment master data is either cleaned or copied, faults and all, into a system that will last fifteen years. Treating master data as its own workstream, with cleansing rules, mock loads and a clear decision on which legacy records do not migrate at all, avoids the familiar go-live where the new system inherits the old duplicates.

                ## Milestones
                1. Master data named as a separate workstream with its own lead.
                2. Rules agreed for which records migrate, such as active in the last 24 months.
                3. At least two mock loads completed, with error counts falling each time.
                4. Business sign-off on migrated records for each domain before go-live.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Master data for each domain is signed off by the business after at least two mock loads, with the migration rules recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask the ERP programme to name a master data workstream lead"
                - "Agree which legacy records will not migrate"
                - "Run the first mock load and record the error count by type"
                - "Run a second mock load and confirm the errors have fallen"
                - "Collect business sign-off per domain before go-live"
            - name: Annual master data audit sample
              description: |-
                ## Purpose
                Scorecards measure what is easy to count, and some errors only show when a person checks a record against a real document. Checking a random sample of golden records against contracts, registry entries and invoices once a year gives an honest accuracy figure and is the evidence auditors usually ask for.

                ## Milestones
                1. A random sample of 100 to 200 golden records drawn per domain.
                2. Each record checked against an independent source document.
                3. An accuracy rate recorded for each critical attribute.
                4. Findings fed into rule changes and steward training.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly audit checks at least 100 golden records per domain, with accuracy rates recorded for every critical attribute."
                cadence: cyclic
              tasks:
                - "Draw a random sample of golden records for each domain @recurring(yearly)"
                - "Check each sampled record against a contract, registry entry or invoice"
                - "Record accuracy for each critical attribute"
                - "Feed audit findings into rule changes and steward training"
            - name: First-year results readout to sponsors
              description: |-
                ## Purpose
                Twelve months after the first domain goes live, sponsors decide whether the programme extends to the next domain or quietly shrinks. A readout that sets the duplicate rate, turnaround and incidents avoided against the original business case, with an honest list of what did not work, gives them the evidence to choose.

                ## Milestones
                1. Year-one measures compared against the baseline and the business case.
                2. Three concrete incidents avoided or costs saved, documented.
                3. What did not work listed with a fix for each.
                4. A recommendation on the next domain presented and a decision recorded.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readout comparing year-one results with the business case is delivered to sponsors, with a recorded decision on the next domain."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull twelve months of scorecard results beside the baseline"
                - "Document three incidents avoided or costs saved"
                - "List what did not work and the planned fix for each"
                - "Ask the agent to draft the readout narrative from the scorecard and incident notes"
                - "Present the readout and record the decision on the next domain"
            - name: Lean master data for a team without a platform
              description: |-
                ## Purpose
                Plenty of teams cannot justify an MDM platform but still lose hours to three versions of every customer. A lean approach, matching in the warehouse or a spreadsheet, keeping a crosswalk table and giving one steward a few hours a week, delivers most of the value for a few hundred to a few thousand records.

                ## Milestones
                1. Records from every source combined in one table with a source column.
                2. Simple matching on normalised names, emails and postcodes producing candidate groups.
                3. A crosswalk table linking each source record to one chosen master.
                4. A weekly hour in the steward's diary for handling new records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single crosswalk links every source record to one master record and is kept current by a steward each week for two months."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Combine records from every source into one table with a source column"
                - "Match on normalised names, emails and postcodes to find candidate groups"
                - "Choose one master per group and record it in a crosswalk table"
                - "Match new records and add them to the crosswalk @recurring(weekly:thu)"
            - name: Merging customer and supplier masters after an acquisition
              description: |-
                ## Purpose
                After an acquisition the same customers and suppliers often appear in both companies' systems under different numbers, and the first combined revenue report double counts them. Matching the two masters early, before systems are consolidated, gives leadership a combined view of shared accounts within months instead of waiting years for one ERP.

                ## Milestones
                1. Both companies' customer and supplier masters extracted under the right data sharing approvals.
                2. Overlap between the two masters measured and shared accounts listed.
                3. A crosswalk linking acquired records to existing global identifiers.
                4. Combined reporting by shared customer and supplier available to leadership.

                ## Notes
                Check with legal before sharing customer data between the companies ahead of completion, as competition rules can restrict it.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A crosswalk links the acquired company's customers and suppliers to existing identifiers, with combined reporting live for leadership."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm with legal when customer and supplier data can be shared"
                - "Extract both companies' customer and supplier masters"
                - "Measure the overlap and list the shared accounts"
                - "Link acquired records to existing global identifiers in the crosswalk"
            - name: Rolling out across countries with local rules
              description: |-
                ## Purpose
                Designs that work in one country meet new scripts, address formats, tax identifiers, privacy rules and data residency limits in the next. Planning each country's rollout with a local steward, a checklist of local differences and match rules tuned for local names stops a global programme from producing poor matches everywhere outside head office.

                ## Milestones
                1. A checklist of local differences: scripts, address format, tax identifiers, privacy and residency.
                2. A local steward named in each country before rollout.
                3. Match rules tested on local data with the local steward.
                4. Each country signed off before the next begins.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each country is rolled out with a completed local checklist, a named steward and match rules tested on local data."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft a checklist of local differences for the next country"
                - "Name a local steward before rollout starts"
                - "Test match rules on local records with the local steward"
                - "Ask privacy colleagues whether records must stay in the country"
            - name: Master data operations team in shared services
              description: |-
                ## Purpose
                Large organisations often move record creation and changes into a shared services centre, which can raise quality sharply or turn into a slow ticket queue. Setting up the team with service levels per request type, work instructions, quality checks on a sample of completed work and a monthly service report keeps it fast and accurate.

                ## Milestones
                1. A catalogue of request types with a service level for each.
                2. Work instructions written for the ten most common request types.
                3. A sample of completed requests checked for errors every month.
                4. A monthly service report shared with the business units served.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A monthly service report for six months shows service level performance and error rates for each request type."
                cadence: rolling
              tasks:
                - "List request types and agree a service level for each"
                - "Write work instructions for the ten most common requests"
                - "Check a sample of completed requests for errors"
                - "Send the master data service report to business units @recurring(monthly:28)"
            - name: Erasure and consent requests across master records
              description: |-
                ## Purpose
                When a person asks to be erased or withdraws consent, the request has to reach every copy linked to their golden record, not just the system where they asked. Mapping how such requests travel through the crosswalk, and which records must be kept for legal retention, lets you answer them completely and on time.

                ## Milestones
                1. Every system linked to person records through the crosswalk listed.
                2. A procedure for carrying erasure and consent changes to each linked system.
                3. Retention exceptions, such as invoices kept for tax, agreed with legal.
                4. A quarterly check that recent requests reached every linked system.

                ## Notes
                Agree the legal basis and retention periods with your privacy or legal team. This project organises the process; it does not decide the law.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented erasure and consent procedure covers every linked system, with quarterly checks confirming recent requests reached them all."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every system linked to person records through the crosswalk"
                - "Write how an erasure or consent change reaches each linked system"
                - "Agree retention exceptions with the privacy or legal team"
                - "Check that recent erasure requests reached every linked system @recurring(quarterly)"
            - name: Onboarding a new data steward
              description: |-
                ## Purpose
                Stewards learn mostly by sitting beside someone experienced, which means the knowledge walks out when they leave. A four-week plan with the steward guide, shadowed review sessions, a practice set from the labelled sample and a sign-off before merge rights brings a new steward up to speed without risking production records.

                ## Milestones
                1. A four-week plan covering the guide, systems and request types.
                2. The new steward shadowing an experienced steward for two weeks.
                3. A practice set of 50 labelled pairs scored above an agreed accuracy.
                4. Merge rights granted only after sign-off.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A new steward completes four weeks of onboarding and scores above the agreed accuracy on 50 practice pairs before receiving merge rights."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a four-week onboarding plan for the new steward"
                - "Pair the new steward with an experienced one for two weeks"
                - "Give the new steward 50 labelled practice pairs to score"
                - "Grant merge rights only after the practice score passes"
            - name: Effective-dated history for golden records
              description: |-
                ## Purpose
                Auditors and analysts often need to know what the golden record said on a past date, not just today, for example which address an invoice went to last March. Keeping effective-dated and recorded-date history for critical attributes answers both what was true and what the system believed at the time.

                ## Milestones
                1. The critical attributes needing history chosen with their consumers.
                2. Valid-from, valid-to and recorded timestamps added for those attributes.
                3. Late corrections stored without rewriting what the system believed at the time.
                4. An as-of query tested for a past date on a sample of records.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Effective-dated history is live for the chosen critical attributes, with an as-of query returning correct values for a tested past date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree with consumers which attributes need full history"
                - "Add valid-from, valid-to and recorded timestamps to those attributes"
                - "Define how late corrections are stored"
                - "Test an as-of query for a date six months ago"
            - name: Machine learning assisted matching
              description: |-
                ## Purpose
                Once stewards have made thousands of review decisions, those decisions are training data. A model trained on them, with active learning that sends the most uncertain pairs to stewards first, can shrink the clerical queue sharply, provided it is measured on the labelled sample and every automated merge stays reversible.

                ## Milestones
                1. Steward decisions exported as labelled training pairs.
                2. A model trained and measured against current rules on a held-out sample.
                3. Active learning in place, routing the most uncertain pairs to stewards.
                4. A go or no-go decision recorded, based on precision at the auto-merge threshold.

                ## Notes
                Keep the auto-merge threshold conservative. A false merge usually costs more to undo than a missed duplicate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trained matching model is compared with current rules on a held-out sample, with a recorded go or no-go decision based on precision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export steward review decisions as labelled training pairs"
                - "Train a model and compare it with current rules on a held-out sample"
                - "Route the most uncertain pairs to stewards first"
                - "Record a go or no-go decision based on precision at the auto-merge threshold"
            - name: Multi-domain relationships between parties, products and sites
              description: |-
                ## Purpose
                Mature MDM moves beyond clean single domains to the links between them: which customer sites buy which products, which suppliers provide which items, which contacts belong to which accounts. Modelling these relationships in the hub answers questions no single domain can, such as every site affected by a supplier recall.

                ## Milestones
                1. The five most valuable cross-domain relationships chosen with business users.
                2. Relationship types modelled with their own owners and effective dates.
                3. One relationship populated and kept current from source systems.
                4. One business question answered that single domains could not.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One cross-domain relationship is populated in the hub and used to answer a named business question, such as recall impact by site."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask business users which cross-domain questions they cannot answer today"
                - "Pick the five most valuable relationships"
                - "Model each relationship type with an owner and effective dates"
                - "Populate one relationship and answer its business question"
            - name: Attribute-level source provenance
              description: |-
                ## Purpose
                When a golden record shows the wrong email, the first question is which source supplied it and when. Storing the source system, load time and survivorship rule behind each surviving attribute value makes that question a lookup and lets stewards fix the source rather than the symptom.

                ## Milestones
                1. Source system, timestamp and survivorship rule stored for each critical attribute value.
                2. A steward view showing where each value came from.
                3. Ten recent complaints traced to their source using the view.
                4. Repeatedly bad sources reported to their system owners.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Source, timestamp and rule are recorded for every critical attribute value, with ten complaints traced to their source using the steward view."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Add source system, timestamp and rule fields to critical attribute values"
                - "Build a steward view showing where each value came from"
                - "Trace ten recent complaints to their source"
                - "Report repeatedly bad sources to their system owners"
            - name: Supplier screening at onboarding and on a schedule
              description: |-
                ## Purpose
                Organisations with sanctions, anti-bribery or modern slavery obligations need to know who they are paying, and the supplier master is the natural checkpoint. Building screening into the supplier request and rescreening the active base on a set schedule makes compliance evidence a by-product of master data work rather than a scramble before an audit.

                ## Milestones
                1. Screening requirements agreed with compliance, including which lists and checks apply.
                2. Screening built into the new supplier request before approval.
                3. Active suppliers rescreened on the agreed schedule with results stored.
                4. Possible matches escalated to compliance with a recorded outcome.

                ## Notes
                Compliance decides what to screen against and what a hit means. This project makes sure the supplier master carries the check and its evidence.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new supplier in a quarter is screened before approval, and the active base is rescreened on schedule with results stored."
                cadence: rolling
              tasks:
                - "Ask compliance which screening lists and checks apply to suppliers"
                - "Add a screening step to the new supplier request before approval"
                - "Rescreen active suppliers and store the results @recurring(quarterly)"
                - "Escalate screening matches to compliance and record the outcome"
            - name: Master data service levels for consumers
              description: |-
                ## Purpose
                Once several systems and teams rely on the hub, it becomes a product with customers who need to know what to expect. Publishing service levels for freshness, accuracy and interface changes, with versioned interfaces and notice periods, lets consumers build on master data with confidence and gives the team a basis for saying no.

                ## Milestones
                1. Every consumer of golden records listed with what they rely on.
                2. Service levels published for freshness, accuracy and change notice.
                3. Interfaces versioned, with a notice period before breaking changes.
                4. Service level performance reviewed with consumers each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Published service levels for freshness, accuracy and change notice are reviewed with consumers in four consecutive quarters."
                cadence: rolling
              tasks:
                - "List every consumer of golden records and what they rely on"
                - "Publish service levels for freshness, accuracy and change notice"
                - "Version the interfaces and set a notice period for breaking changes"
                - "Review service level performance with consumers @recurring(quarterly)"
---

# Master Data Management

This area is for enterprise data teams and the cross-functional groups who live with three versions of every customer, product and supplier. It starts with the foundations (a domain inventory, a costed business case, the first domain, a system of record map, a baseline, identifiers and the hub style), then the operating rhythm of request intake, clerical review, scorecards and stewardship, the matching, survivorship, address and hierarchy skills, the decisions on platforms, entry controls, clean-up and distribution, the dated events from initial load to the first-year readout, situations from a team without a platform to an acquisition or a multi-country rollout, and finally history, machine learning matching, cross-domain relationships, provenance, screening and service levels.

What repeats is a Monday request review and a twice-weekly clerical queue, monthly scorecards, stewardship sessions, crosswalk reconciliation, bank detail checks and distribution reviews, quarterly match tuning, dormant record sweeps, reference data and supplier screening checks, and yearly audits and recertifications. The Metrics log, Meeting notes, Operational checklist, Vendor, Remediation plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
