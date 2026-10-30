---
id: data-analytics.data-anonymisation-privacy
name: Data Anonymisation & Privacy
description: "A personal data inventory, pseudonymisation and masking that hold up, minimised pipelines, erasure that reaches the warehouse, small-number suppression and tested anonymisation, so analytics stays useful without exposing people."
category: business
version: 1.0.0
tags: [data-analytics, data-anonymisation-privacy, engineer, enterprise, researcher, pseudonymisation, data-masking, re-identification]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - compliance-control
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Anonymisation & Privacy
          description: "Protecting personal data in analytics through minimisation, pseudonymisation, aggregation and access controls while keeping it useful."
          projects:
            - name: Personal data inventory of the warehouse
              description: |-
                ## Purpose
                Most analytics platforms hold more personal data than anyone thinks: email addresses in event payloads, phone numbers in support exports, birth dates in a CRM sync nobody uses. Before any masking or pseudonymisation can be prioritised, someone has to list which schemas, tables and columns hold personal data and where each came from. A first-pass inventory built from column names, sampled values and knowledge of the source systems usually takes a week and shapes every later decision in this area.

                ## Milestones
                1. Every schema in the warehouse and lake listed with its source system and owner.
                2. Columns holding personal data flagged by name pattern and by sampled values.
                3. Each flagged column tagged with the kind of personal data it holds.
                4. The inventory stored where engineers and the privacy team can both read it.

                ## Notes
                Column names mislead. A field called notes, metadata or properties often holds emails and phone numbers, so sample the values as well as reading the names.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory lists every warehouse and lake table that holds personal data, with column-level tags, and has been reviewed by the privacy lead."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the list of schemas, tables and columns from the warehouse information schema"
                - "Search column names for patterns such as email, phone, address, dob and ip"
                - "Sample 100 rows from each unclear free-text or JSON column"
                - "Tag each personal data column with its data type and source system"
                - "Ask the agent to summarise the inventory into a one-page view by source system"
            - name: Identifier taxonomy for direct, quasi and sensitive fields
              description: |-
                ## Purpose
                Removing names and emails does not make a dataset safe, because postcode, birth date and sex together can single out most people in a population. Sorting every personal column into direct identifiers, quasi-identifiers, sensitive attributes and non-identifying fields gives engineers a default rule for each class instead of a fresh debate for every column.

                ## Milestones
                1. Four classes defined in plain words, with three examples from your own data for each.
                2. Every column in the personal data inventory assigned to exactly one class.
                3. A default treatment agreed for each class, such as drop, tokenise, generalise or keep.
                4. The class applied as a tag or label on each column in the warehouse or catalogue.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every inventoried personal column carries one of four identifier class tags, and each class has a written default treatment."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write one-line definitions of direct identifiers, quasi-identifiers and sensitive attributes"
                - "Assign each inventoried column to a class and flag the disputed ones"
                - "Agree a default treatment per class with the privacy lead"
                - "Apply the class as a tag or label on each column in the warehouse"
            - name: Analytics purpose register for personal data
              description: |-
                ## Purpose
                Privacy law in most places ties personal data to a stated purpose, and analytics teams are where purposes quietly stretch: data collected to deliver orders ends up feeding a churn model. A register of each analytical use, the fields it needs and the basis your privacy team has recorded for it lets you answer 'why do you have this' in one lookup, and catches new uses before they ship.

                ## Milestones
                1. Each recurring analytical use of personal data listed with a named owner.
                2. The fields each use needs written beside it.
                3. The basis or permission for each use confirmed and recorded by the privacy team.
                4. A rule agreed that new uses are added before the first query runs on production data.

                ## Notes
                Deciding the basis is the privacy team's call, not the analyst's. Your part is to describe the use precisely enough for them to decide.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A purpose register covers every recurring analytical use of personal data, each with a basis recorded by the privacy team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the dashboards, models and reports that use personal data"
                - "Write the fields and purpose for each use in one sentence"
                - "Send the register to the privacy team to record a basis for each use"
                - "Review the register for new and retired uses with the privacy team @recurring(yearly)"
            - name: Data minimisation at the point of extraction
              description: |-
                ## Purpose
                Every column loaded into the warehouse becomes something to protect, mask, document and eventually delete. Pipelines often copy whole source tables because it is easier, so passport numbers and home addresses arrive for analyses that only ever needed a region. Changing extraction jobs to select named columns, and dropping identifiers nobody queries, removes risk at the cheapest point in the flow.

                ## Milestones
                1. Each ingestion job listed with the personal columns it loads.
                2. Access history checked to find personal columns not queried in the last 90 days.
                3. Unused identifiers removed from the extraction config of at least the five largest sources.
                4. A rule written that new sources load an explicit column list, never every column by default.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five largest sources load explicit column lists, and personal columns unused for 90 days are no longer extracted."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every ingestion job and the personal columns it loads"
                - "Query the warehouse access history for personal columns unused in 90 days"
                - "Remove unused identifiers from the five largest extraction configs"
                - "Add an explicit column list requirement to the pipeline code review checklist"
            - name: Keyed pseudonymisation token design
              description: |-
                ## Purpose
                Analysts need to join a customer's events across tables without seeing who the customer is. A keyed hash or a token vault, with the secret held outside the warehouse, gives a stable pseudonymous key; a plain hash of an email does not, because anyone can hash a list of emails and match them. Designing the scheme once, before teams roll their own, avoids five incompatible versions of the same customer.

                ## Milestones
                1. A choice made between a keyed hash, such as HMAC, and a token vault, with the reasons written down.
                2. The secret key stored in a secrets manager the warehouse cannot read directly.
                3. One pseudonymous customer key generated and documented for all analytics joins.
                4. Reversal limited to a named role, with every use logged.

                ## Notes
                Pseudonymised data is still personal data under most privacy laws, because whoever holds the key can reverse it. Treat it as protected, just less exposed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A documented pseudonymisation scheme is in use, its key is held in a secrets manager, and reversal is limited to one logged role."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down which identifiers need a stable pseudonymous key and why"
                - "Compare a keyed hash with a token vault on reversibility, speed and cost"
                - "Store the pseudonymisation key in the secrets manager with restricted access"
                - "Publish the token format and join rules for analysts"
            - name: Privacy escalation route with the data protection officer
              description: |-
                ## Purpose
                Analysts and engineers meet privacy questions every week: can I join these two sources, can this extract go to a vendor, is this sample safe to email. Without a known person and a quick way to ask, people either guess or stall. Agreeing a contact, a response time and a short question format with your data protection officer or privacy counsel removes both failures.

                ## Milestones
                1. A named privacy contact for analytics agreed, with a backup.
                2. A four-field question format published: data, purpose, recipients and duration.
                3. Expected response times agreed for routine and urgent questions.
                4. Answers to past questions kept in a searchable log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named privacy contact, a published question format and a log holding at least ten answered questions exist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the data protection officer who should answer analytics privacy questions"
                - "Draft a four-field question format for the team"
                - "Agree response times for routine and urgent questions"
                - "Start a shared log of questions asked and answers given"
            - name: Personal data out of development and test environments
              description: |-
                ## Purpose
                Copies of production in development schemas, laptops and staging databases are where personal data leaks most often, because access there is loose and nobody watches it. Replacing those copies with masked or synthetic data, and blocking unmasked refreshes, closes one of the largest gaps in many analytics platforms.

                ## Milestones
                1. Every non-production environment holding production personal data found and listed.
                2. A masked refresh process built for the environments that need realistic data.
                3. Unmasked copies deleted, with each deletion recorded.
                4. A control in place that blocks unmasked production data from loading into development.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A scan confirms no development or test environment holds unmasked production personal data, and a control prevents new copies."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Scan development schemas and staging databases for production personal data"
                - "Build a masked refresh job for the environments that need realistic rows"
                - "Delete the unmasked copies and record what was removed"
                - "Scan non-production environments for unmasked personal data @recurring(quarterly)"
            - name: Privacy impact assessment for the analytics platform
              description: |-
                ## Purpose
                Large-scale profiling, combining datasets and new technology are the kinds of processing many regulators expect to be assessed before they start, and an analytics platform usually does all three. Working through a privacy impact assessment with your privacy team records the risks to individuals, the controls already in place and the gaps, and the gaps become the backlog for much of this area.

                ## Milestones
                1. The platform's data flows drawn from sources through the warehouse to dashboards and models.
                2. Risks to individuals listed with likelihood and severity.
                3. Existing controls and remaining gaps recorded against each risk.
                4. The assessment signed off by the privacy team, with an owner for each gap.

                ## Notes
                Start from the **Risk register** template. Your privacy team will have its own assessment form; use theirs for the record and keep the register as the engineering view.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A privacy impact assessment for the analytics platform is signed off by the privacy team, and every gap has a named owner."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the privacy team for their impact assessment form"
                - "Draw the data flow from sources through the warehouse to outputs"
                - "List each risk to individuals with the controls that address it"
                - "Revisit the assessment after major platform changes and at least once a year @recurring(yearly)"
            - name: Shared definitions of anonymised and pseudonymised
              description: |-
                ## Purpose
                Teams call data anonymised when they mean the names were removed, and that one word then justifies sharing it with vendors or keeping it forever. Agreeing written definitions with the privacy team, illustrated with examples from your own datasets, stops the label from doing work it has not earned.

                ## Milestones
                1. Definitions of anonymised, pseudonymised, aggregated and de-identified agreed with the privacy team.
                2. Two examples from your own datasets attached to each term.
                3. The definitions published in the data catalogue glossary or team wiki.
                4. Existing dataset labels checked against the definitions and corrected.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Written definitions of four privacy terms, approved by the privacy team and illustrated with internal examples, are published in the glossary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the places where datasets are described as anonymised"
                - "Draft definitions of the four terms with the privacy team"
                - "Add two examples from your own data to each definition"
                - "Relabel datasets that use the wrong term"
            - name: Monthly scan for new personal data columns
              description: |-
                ## Purpose
                The inventory starts going stale the day a new source or schema change lands. A scheduled scan of new and changed columns, using name patterns and value checks, catches personal data before it spreads into downstream models and dashboards where it is far harder to pull back.

                ## Milestones
                1. A scan job that lists columns added or changed since the last run.
                2. Pattern checks for emails, phone numbers, card-like numbers and national ID formats.
                3. Hits routed to the table owner with a deadline to tag or remove them.
                4. Six monthly scans completed with every hit resolved.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scans have run, with every personal data hit tagged or removed within the month it was found."
                cadence: rolling
              tasks:
                - "Write a query that lists columns added since a given date"
                - "Add value checks for email, phone and card-like number formats"
                - "Run the scan and send hits to the table owners @recurring(monthly:9)"
                - "Chase hits that are still untagged at month end"
            - name: Quarterly review of unmasked column access
              description: |-
                ## Purpose
                Masking policies usually exempt a few roles, and those exemptions grow: a contractor during an incident, a whole team for one project, an old service account. Reviewing each quarter who can see raw identifiers, and removing anyone without a current reason, keeps the exemption list as short as the day it was written.

                ## Milestones
                1. A query that lists every user and role able to read unmasked personal columns.
                2. Each exemption linked to a reason and an approver.
                3. Exemptions without a current reason removed.
                4. Four quarterly reviews recorded in a year.

                ## Notes
                This is narrower than general access recertification: it covers only the right to see raw identifiers, which is the access that matters most here.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year each list every unmasked access grant with a reason, and stale grants have been removed."
                cadence: rolling
              tasks:
                - "Write the query listing roles exempt from masking policies"
                - "Ask each exempt user's manager to confirm the reason still applies"
                - "Review and trim the unmasked access list @recurring(quarterly)"
            - name: Masking policy coverage check
              description: |-
                ## Purpose
                Dynamic masking only protects columns that have a policy attached, and every new table is unprotected until someone remembers. A monthly check comparing tagged personal columns with attached policies turns the gap into a single number that should read zero.

                ## Milestones
                1. Masking policies written for each identifier class.
                2. Policies attached automatically from column tags where the platform allows it.
                3. A monthly coverage figure: the percentage of tagged personal columns with a policy.
                4. Coverage at 100 percent for three consecutive months.

                ## Notes
                Start from the **Compliance control** template, and save the coverage query as the evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Masking coverage of tagged personal columns has been 100 percent for three consecutive months, with the evidence query saved."
                cadence: rolling
              tasks:
                - "Write one masking policy per identifier class"
                - "Attach policies to columns from their tags where the platform supports it"
                - "Run the coverage query and fix any unprotected column @recurring(monthly:16)"
            - name: Erasure requests carried through to analytics tables
              description: |-
                ## Purpose
                When a person asks for their data to be erased, the operational system deletes the record, but the warehouse, snapshots, extracts and model training sets often keep it. A repeatable erasure process that follows the pseudonymous key through every derived table makes the reply to that person true rather than partial.

                ## Milestones
                1. Every warehouse table, snapshot and extract holding a person's data mapped from their key.
                2. An erasure job that removes or irreversibly scrubs those rows.
                3. A log of each request processed, with the date and the tables touched.
                4. The handling of backups and model training sets agreed with the privacy team.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every erasure request reaches the warehouse within the time the privacy team sets, with one log entry per request."
                cadence: rolling
              tasks:
                - "Map which tables, snapshots and extracts hold data for one customer key"
                - "Build an erasure job that takes a list of keys and logs what it removed"
                - "Agree with the privacy team how backups and training sets are handled"
                - "Process the week's erasure requests through the warehouse @recurring(weekly:tue)"
            - name: Pseudonymisation key custody and rotation
              description: |-
                ## Purpose
                The key behind your pseudonymous identifiers is the one thing that turns protected data back into names, so who holds it and how it is rotated matter more than most warehouse settings. A written custody arrangement and a rehearsed rotation mean a leaked key or a departing engineer triggers a planned procedure rather than an emergency.

                ## Milestones
                1. The key's holders, storage location and access logs documented.
                2. A rotation procedure that versions keys without breaking historical joins.
                3. The rotation rehearsed once in a non-production environment.
                4. A yearly custody review in the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Key custody is documented and the rotation procedure has been rehearsed at least once outside production."
                cadence: cyclic
              tasks:
                - "List every person and service that can read the pseudonymisation key"
                - "Write a rotation procedure that preserves historical joins"
                - "Rehearse the rotation in a non-production environment"
                - "Review key custody and rotate if the procedure calls for it @recurring(yearly)"
            - name: Privacy review gate for new datasets and dashboards
              description: |-
                ## Purpose
                Many privacy problems in analytics arrive through ordinary pull requests and dashboard launches: a new model that joins location to health signals, a report scheduled to email a vendor. A short checklist in code review and in dashboard publishing, with a weekly slot to clear flagged items, catches these while they are still cheap to change.

                ## Milestones
                1. A five-question privacy checklist in the pull request template for transformation code.
                2. The same questions asked before any dashboard with personal data is shared outside the team.
                3. A weekly triage slot that clears flagged items.
                4. Three months of flagged items and their outcomes recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The privacy checklist appears on every transformation pull request, with three months of flagged items and outcomes logged."
                cadence: rolling
              tasks:
                - "Write five privacy questions for the pull request template"
                - "Add the questions to the dashboard publishing steps"
                - "Triage the week's privacy-flagged changes @recurring(weekly:wed)"
            - name: Query logs and BI extracts scrubbed of personal data
              description: |-
                ## Purpose
                Personal data hides where masking does not reach: query history with email addresses typed into filters, cached BI extracts on laptops, CSV downloads in shared drives. Tightening who can read query logs and how long they are kept, and sweeping exports each month, removes copies nobody meant to keep.

                ## Milestones
                1. Query history kept for the shortest period the platform team can work with.
                2. Access to query history limited to platform administrators.
                3. BI export settings changed so personal columns cannot be downloaded by default.
                4. A monthly sweep of shared drives for analytics exports holding personal data.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Query history access and retention are restricted, and six monthly export sweeps are recorded with stray copies removed."
                cadence: rolling
              tasks:
                - "Check how long query history is kept and who can read it"
                - "Turn off default export of personal columns in the BI tool"
                - "Sweep shared drives for analytics exports with personal data @recurring(monthly:4)"
            - name: Break-glass access to raw identifiable data
              description: |-
                ## Purpose
                Sometimes someone genuinely needs raw identifiers: debugging a broken join, answering a regulator, investigating a complaint. A break-glass role that grants time-limited access against a stated reason, with a monthly look at every use, stops that need from turning into a permanent standing grant.

                ## Milestones
                1. A break-glass role whose access expires after a set number of hours.
                2. Each request captured with requester, reason, tables and approver.
                3. A monthly review of every break-glass use.
                4. Standing raw-data grants replaced by the break-glass route.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All raw identifier access goes through a time-limited break-glass role, and every use has been reviewed monthly for six months."
                cadence: rolling
              tasks:
                - "Create a break-glass role whose grants expire automatically"
                - "Write the request fields: requester, reason, tables and duration"
                - "Replace standing raw-data grants with the break-glass route"
                - "Review every break-glass use from the past month @recurring(monthly:27)"
            - name: Small number suppression rule for reports
              description: |-
                ## Purpose
                A dashboard showing a count of 2 for one department in one month can reveal who took sick leave or who raised a grievance. A minimum cell size applied in the BI layer, with secondary suppression so hidden cells cannot be worked out from totals, protects people in small groups without withdrawing the report.

                ## Milestones
                1. A minimum cell size agreed with the privacy team for each kind of sensitive report.
                2. The rule applied in the semantic layer or shared report queries.
                3. Secondary suppression or rounding added where totals would expose hidden cells.
                4. A quarterly audit of reports that slice personal data finely.

                ## Notes
                Thresholds of 5 or 10 are common starting points, but the right number depends on sensitivity and population size, so agree it rather than copy it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written minimum cell size is applied in the reporting layer, and each quarterly audit records no report showing cells below it."
                cadence: rolling
              tasks:
                - "Agree a minimum cell size for sensitive reports with the privacy team"
                - "Apply the threshold in the semantic layer or shared report queries"
                - "Check totals and subtotals so suppressed cells cannot be recalculated"
                - "Audit finely sliced reports against the threshold @recurring(quarterly)"
            - name: How linkage attacks re-identify people
              description: |-
                ## Purpose
                Well-known public cases have shown that a handful of ordinary attributes, such as postcode, birth date and sex, or a few film ratings with dates, can single out individuals in datasets released as anonymous. Studying how those attacks worked, then measuring uniqueness on a sample of your own data, changes how a team judges what is safe to share.

                ## Milestones
                1. Three published re-identification cases summarised in a paragraph each.
                2. The quasi-identifiers that made each attack work listed.
                3. A uniqueness count run on one internal table: how many rows are unique on three quasi-identifiers.
                4. A short note shared with the team on what the result means for your data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team note summarises three re-identification cases and reports the uniqueness result from one internal table."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read summaries of three published re-identification cases"
                - "List the quasi-identifiers each attack relied on"
                - "Count how many rows in one internal table are unique on three quasi-identifiers"
                - "Share a one-page note on the result with the team"
            - name: k-anonymity, l-diversity and t-closeness in practice
              description: |-
                ## Purpose
                These three models are the vocabulary of most anonymisation tools and guidance, and each patches a weakness of the one before: k-anonymity hides people in groups, l-diversity stops a whole group sharing one sensitive value, and t-closeness limits how far a group's values drift from the whole. Working each through on a small table makes tool settings and reviewers' questions make sense.

                ## Milestones
                1. Each model explained in two sentences in your own words.
                2. A sample table generalised until every group has at least five rows on the chosen quasi-identifiers.
                3. An example found where k-anonymity holds but the sensitive value still leaks.
                4. The cost to usefulness recorded as rows suppressed and categories merged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked notebook applies k-anonymity and l-diversity to a sample table and records the usefulness cost of each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read an introductory explanation of k-anonymity and its two successors"
                - "Generalise a sample table until every group has at least five rows"
                - "Find a group where everyone shares the same sensitive value"
                - "Record how many rows and categories the generalisation cost"
            - name: Differential privacy fundamentals for analysts
              description: |-
                ## Purpose
                Differential privacy adds calibrated noise to results so that no single person's presence changes the output much, and it is the only common method that comes with a mathematical guarantee. Analysts who understand epsilon, sensitivity and the privacy budget can tell when a vendor's claim of differential privacy means something, and when the noise would swamp the answer.

                ## Milestones
                1. Epsilon, sensitivity and composition explained in plain words.
                2. A noisy count and a noisy mean computed with an open-source library on sample data.
                3. Accuracy compared at three epsilon values.
                4. A note on which recurring reports could tolerate that noise.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook computes differentially private counts at three privacy levels, with an accuracy comparison and a note on usable reports."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through an introductory tutorial on differential privacy"
                - "Install an open-source differential privacy library in a sandbox"
                - "Compute a noisy count at three epsilon values and compare the errors"
                - "Note which recurring reports could carry that level of noise"
            - name: Why hashing an email is not anonymisation
              description: |-
                ## Purpose
                Hashing identifiers with a common algorithm and no secret is still one of the most frequent mistakes in analytics, because the output looks random. Anyone holding a list of emails or phone numbers can hash them and match the results. A short exercise matching your own unkeyed hashes against a made-up list is the quickest way to retire the practice for good.

                ## Milestones
                1. Places in the warehouse where identifiers are hashed without a secret key found.
                2. A demonstration matching hashed test emails or phone numbers to their originals.
                3. The demonstration shown to the engineers who own those pipelines.
                4. Each unkeyed hash scheduled for replacement with the keyed token.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every unkeyed identifier hash in the warehouse is listed and scheduled for replacement after a demonstration to its owners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search transformation code for hash functions applied to emails or phones"
                - "Hash a made-up list of test emails and match it against sample output"
                - "Show the demonstration to the engineers who own those pipelines"
                - "Schedule each unkeyed hash for replacement with the keyed token"
            - name: Synthetic data, what it can and cannot do
              description: |-
                ## Purpose
                Synthetic data generators promise realistic rows with no real people in them, but models can memorise rare records and reproduce them, and synthetic rows can distort the relationships an analysis depends on. Testing one generator on a known table, for leakage and for fidelity, gives an evidence-based answer on whether it is fit for test environments, model training or sharing.

                ## Milestones
                1. One generator chosen from open-source or vendor options for a trial.
                2. Synthetic data produced from one moderately sized table.
                3. Fidelity checked by comparing distributions and two key correlations with the source.
                4. Leakage checked by counting synthetic rows that exactly or nearly match real records.
                5. A written view on which uses the synthetic data is fit for.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial report compares synthetic and real data on fidelity and leakage, and records a decision on approved uses."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one table and one synthetic data generator to trial"
                - "Generate a synthetic copy and compare distributions with the source"
                - "Count synthetic rows that closely match real records"
                - "Write a recommendation on which uses the output is fit for"
            - name: Privacy-enhancing technologies landscape review
              description: |-
                ## Purpose
                Secure enclaves, multi-party computation, federated learning and homomorphic encryption appear in vendor pitches and partner requests long before most teams can say what each is for. A short review that maps each technology to a problem you actually have, with maturity and cost, means the next pitch meets a sharper question.

                ## Milestones
                1. Five privacy-enhancing technologies described in a paragraph each.
                2. Each matched to a real use case or marked as not relevant today.
                3. Maturity, typical cost and skills needed noted for each.
                4. The review shared with the platform and privacy leads.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review covers five privacy-enhancing technologies, each mapped to a current use case or marked not relevant."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the privacy technologies vendors and partners have mentioned to you"
                - "Write a paragraph on each covering the problem it solves"
                - "Match each to a current use case or mark it not relevant"
                - "Ask the agent to draft a one-page comparison table from your notes"
            - name: Reading your regulator's anonymisation guidance
              description: |-
                ## Purpose
                Regulators and standards bodies publish guidance on when data counts as anonymous, for example European data protection board opinions, national regulators' anonymisation codes, or the US health de-identification routes of safe harbour and expert determination. Reading the guidance that applies to you, alongside the privacy team, replaces folklore with the tests they will actually apply.

                ## Milestones
                1. The guidance that applies to your jurisdictions and sector identified with the privacy team.
                2. The key tests from each document summarised on one page.
                3. Two internal datasets assessed against the summary.
                4. Open questions listed and answered by the privacy team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the applicable anonymisation guidance, agreed with the privacy team, has been applied to two internal datasets."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the privacy team which anonymisation guidance applies to your organisation"
                - "Read the guidance and note the tests it sets"
                - "Assess two internal datasets against those tests"
                - "Send the open questions to the privacy team"
            - name: Privacy training for the analytics team
              description: |-
                ## Purpose
                Generic annual privacy training covers phishing and clear desks, not how to spot a quasi-identifier or why a CSV download matters. A ninety-minute session built from your own platform's near-misses, run for new joiners and once a year for everyone, gives analysts and engineers the habits the rest of this area depends on.

                ## Milestones
                1. A ninety-minute session built around five real examples from your platform.
                2. The session run for the whole analytics team.
                3. A short exercise showing what people retained.
                4. New joiners booked onto the session within their first month.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every analytics team member has attended the session within the last year, with exercise results recorded."
                cadence: cyclic
              tasks:
                - "Collect five real privacy near-misses or questions from your platform"
                - "Build a ninety-minute session and a short exercise around them"
                - "Book new joiners onto the next session within their first month"
                - "Run the privacy session for the team and recent joiners @recurring(yearly)"
            - name: Choosing a tokenisation or data masking tool
              description: |-
                ## Purpose
                Built-in warehouse masking, standalone tokenisation services and data security platforms differ in reversibility, query-time performance, coverage across tools and price. Comparing three options against your real identifier classes and data volumes avoids buying a product that protects the warehouse but not the lake, or the other way round.

                ## Milestones
                1. Requirements written: identifier classes, platforms covered, reversibility, latency and budget.
                2. Three options shortlisted, including the warehouse's own features.
                3. A proof of concept run on one real table for the top two.
                4. A decision recorded with cost, known gaps and an exit plan.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision compares three options and is backed by a proof of concept on one real table."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write requirements covering identifier classes, platforms and budget"
                - "Shortlist three options including the warehouse's own masking features"
                - "Run a proof of concept on one table with the top two options"
                - "Record the decision with costs, gaps and an exit plan"
            - name: Aggregated reporting layer for business users
              description: |-
                ## Purpose
                Many business users have row-level access to customer tables only because nobody built them anything else. Publishing a layer of pre-aggregated tables at the grain their dashboards actually need lets you withdraw row-level personal data from most of the company without slowing anyone down.

                ## Milestones
                1. The dashboards business users rely on listed with the grain each needs.
                2. Aggregated tables built at those grains with no direct identifiers.
                3. Dashboards repointed to the aggregated layer.
                4. Row-level personal data access removed for users who no longer need it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least 80 percent of business dashboards run on aggregated tables, and row-level personal access is removed for their users."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List business dashboards that read row-level customer tables"
                - "Note the lowest grain each dashboard really needs"
                - "Build aggregated tables at those grains and repoint the dashboards"
                - "Remove row-level access for users now served by the aggregated layer"
            - name: Replacing email joins with a pseudonymous customer key
              description: |-
                ## Purpose
                Joining tables on email address spreads a direct identifier into every model and dashboard that touches the join. Moving joins to the pseudonymous customer key, then dropping email from downstream models, shrinks the number of places a direct identifier lives from dozens to one or two.

                ## Milestones
                1. Every model that joins on email, phone or name listed.
                2. The pseudonymous key added to each source table.
                3. Joins rewritten on the key, with row counts checked before and after.
                4. Email removed from downstream models that no longer need it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A search of transformation code finds no downstream analytics model joining on email or phone."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Search transformation code for joins on email, phone or name"
                - "Add the pseudonymous customer key to each source table"
                - "Rewrite the joins on the key and compare row counts"
                - "Drop email from downstream models that no longer need it"
            - name: Free-text redaction before loading
              description: |-
                ## Purpose
                Support tickets, survey comments and sales notes are full of names, phone numbers, addresses and sometimes health details typed in by customers. Running a redaction step on free text before it reaches the warehouse, and measuring what it misses, makes text analysis possible without importing every secret customers ever wrote down.

                ## Milestones
                1. Free-text fields loaded into analytics listed by source.
                2. A redaction step for names, emails, phones and addresses added to the pipeline.
                3. A sample of 200 redacted records checked by hand for misses.
                4. The miss rate recorded, with the riskiest fields held back until it is acceptable.

                ## Notes
                No redaction model catches everything. Measure the miss rate and set access to redacted text to match it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Free text passes through redaction before loading, and a hand-checked miss rate on 200 sampled records is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every free-text field that lands in the warehouse"
                - "Add a redaction step for emails, phones, names and addresses"
                - "Hand-check 200 redacted records and count what was missed"
                - "Hold back the riskiest fields until the miss rate is acceptable"
            - name: Coarsening location data and IP addresses
              description: |-
                ## Purpose
                Precise coordinates reveal homes and workplaces within a few days of points, and full IP addresses are treated as personal data in many places. Agreeing a precision level for each use, such as a postcode district, a grid cell or a truncated IP, and applying it on load keeps geographic analysis working without tracking anyone to their front door.

                ## Milestones
                1. Location and IP fields listed with the precision each analysis truly needs.
                2. A coarsening rule agreed for each field.
                3. Coarsening applied at ingestion, with raw values dropped or held separately.
                4. Two key location analyses rerun to confirm they still work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every location and IP field is coarsened at load to an agreed precision, and two analyses are confirmed still usable."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every coordinate and IP address field in the warehouse"
                - "Agree the precision each analysis needs with its owner"
                - "Apply coarsening at ingestion and drop or isolate raw values"
                - "Rerun two location analyses on the coarsened data"
            - name: Date of birth and timestamp generalisation
              description: |-
                ## Purpose
                Exact birth dates and to-the-second timestamps are strong quasi-identifiers, yet most analysis needs only an age band or a day. A generalisation scheme in the modelling layer, birth date to age band and event time to hour or day where precision is not needed, cuts uniqueness sharply at almost no analytical cost.

                ## Milestones
                1. Birth date and fine timestamp fields listed with their analytical uses.
                2. Age bands and time grains agreed with the main users.
                3. Generalised fields built in the modelling layer and raw ones retired from shared models.
                4. Uniqueness on quasi-identifiers measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Generalised age and time fields replace raw values in shared models, with a before and after uniqueness measure recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List birth date and fine timestamp fields used in shared models"
                - "Agree age bands and time grains with the main users"
                - "Build generalised fields and retire raw ones from shared models"
                - "Measure uniqueness on quasi-identifiers before and after"
            - name: Motivated intruder test before calling data anonymous
              description: |-
                ## Purpose
                Before a dataset is labelled anonymous and released outside the controls that apply to personal data, someone should try to re-identify people in it the way a determined outsider would, using public sources and reasonable effort. Recording that test, and the privacy team's decision on it, turns a label into a defensible judgement.

                ## Milestones
                1. The dataset, its intended recipients and use described in half a page.
                2. A re-identification attempt made by someone outside the team that prepared it, using public and plausibly available data.
                3. Findings and residual risk written up.
                4. A decision recorded by the privacy team: anonymous, pseudonymous or not ready.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written intruder test and a recorded privacy team decision exist for the dataset before any release."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Describe the dataset, recipients and use in half a page"
                - "Ask a colleague outside the team to attempt re-identification"
                - "Write up what they found and the risk that remains"
                - "Get the privacy team to record their decision on the label"
            - name: Analytics event payloads cleared of personal data
              description: |-
                ## Purpose
                Product and web events often carry personal data by accident: emails in URL query strings, names in page titles, whatever users type into search boxes. Auditing the event stream and stripping these fields at collection stops them being copied into every analytics vendor and warehouse table downstream.

                ## Milestones
                1. A week of raw events searched for emails, phone numbers and names.
                2. Each leaking field traced to the code or tag that sends it.
                3. Stripping rules added at the collector or tag manager.
                4. An automated monthly check for new leaks in place.

                ## Notes
                This covers what travels inside events. Consent for tracking itself belongs with your web and app analytics setup.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An automated monthly check confirms a week of events contains no email addresses or phone numbers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Search a week of raw events for email and phone patterns"
                - "Trace each leaking field to the page, app screen or tag that sends it"
                - "Add stripping rules at the collector or tag manager"
                - "Run the automated event payload leak check @recurring(monthly:12)"
            - name: Privacy audit and regulator inquiry readiness pack
              description: |-
                ## Purpose
                When an auditor, a regulator or a large customer's due diligence team asks how personal data is protected in analytics, the answer is needed within days and has to be backed by evidence. Assembling a pack in advance, with the inventory, purpose register, impact assessment, control evidence and incident log, makes that request a matter of forwarding a folder.

                ## Milestones
                1. A list of the evidence an auditor would ask for, agreed with the privacy team.
                2. Each item gathered into one controlled folder with dates.
                3. A practice walkthrough of the pack held with the privacy team.
                4. Gaps found in the walkthrough closed or scheduled.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A dated evidence pack covering inventory, purposes, assessment, controls and incidents has been walked through once with the privacy team."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the privacy team what evidence auditors usually request"
                - "Gather the inventory, register, assessment and control evidence into one folder"
                - "Run a practice walkthrough of the pack with the privacy team"
                - "Schedule fixes for the gaps the walkthrough found"
            - name: Releasing a de-identified dataset to a research partner
              description: |-
                ## Purpose
                Universities and partners regularly ask for data for a study, and the request usually arrives as a long list of fields. Delivering it well means cutting fields to the research question, applying and testing de-identification, putting a data sharing agreement in place through your legal team, and agreeing in writing what happens to the data afterwards.

                ## Milestones
                1. The research question and the minimum fields needed agreed with the partner.
                2. De-identification applied and checked with an intruder test.
                3. A data sharing agreement signed through your legal team.
                4. The dataset delivered by a secure route with an access log.
                5. Return or deletion at the end of the study confirmed in writing.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The partner receives a tested de-identified dataset under a signed agreement, and deletion is confirmed in writing at the end of the study."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the partner for the research question and the fields they believe they need"
                - "Cut the field list to the minimum the question needs"
                - "Request a data sharing agreement from your legal team"
                - "Deliver the dataset through a secure transfer with access logging"
            - name: Re-identification red team exercise
              description: |-
                ## Purpose
                Controls look sound on paper until someone tries to break them. Giving a small internal team or an outside specialist a few days to re-identify individuals from your pseudonymised and aggregated outputs shows where the real weak points are, and produces a ranked list of fixes instead of a general worry.

                ## Milestones
                1. Scope, rules and in-bounds datasets agreed in writing with the privacy and security teams.
                2. The exercise run, with findings logged as they happen.
                3. Each finding rated and assigned an owner.
                4. Fixes for the highest-rated findings completed.

                ## Notes
                Start from the **Remediation plan** template for the findings. Run the exercise on copies, never against production systems.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red team exercise is complete, every finding is rated and assigned, and the top-rated fixes are done."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree scope, rules and in-bounds datasets with privacy and security"
                - "Brief the red team and give them copies of the in-bounds outputs"
                - "Log and rate each finding with an owner"
                - "Complete fixes for the highest-rated findings"
            - name: Analytics privacy incident tabletop exercise
              description: |-
                ## Purpose
                A shared dashboard exposing raw emails, a leaked export, a token key pushed to a public repository: the first hour decides how bad each of these becomes. A ninety-minute tabletop with engineering, privacy, security and communications, on a realistic analytics scenario, tests who gets called, who decides on notification and how fast access can be cut.

                ## Milestones
                1. A realistic scenario written from your own platform.
                2. The exercise run with engineering, privacy and security present.
                3. Gaps in contacts, permissions and runbooks listed.
                4. The incident runbook updated with the fixes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise has been held in the last twelve months, and the runbook has been updated from its findings."
                cadence: cyclic
              tasks:
                - "Write a scenario based on a plausible leak from your platform"
                - "Invite engineering, privacy, security and communications leads"
                - "Note every point in the exercise where people hesitated"
                - "Hold the analytics privacy tabletop exercise @recurring(yearly)"
            - name: Annual analytics privacy report to leadership
              description: |-
                ## Purpose
                Leaders fund privacy work when they can see it moving: coverage up, exposure down, incidents handled. A yearly two-page report with a few consistent numbers, such as masking coverage, unmasked access grants, erasure turnaround and open findings, keeps the work resourced and the trend visible.

                ## Milestones
                1. Five measures chosen that can be produced the same way every year.
                2. This year's figures gathered with last year's beside them.
                3. A two-page report written with three priorities for the coming year.
                4. The report presented and the agreed priorities recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page report with five consistent measures has been presented to leadership, and next year's priorities are recorded."
                cadence: cyclic
              tasks:
                - "Choose five privacy measures you can produce the same way each year"
                - "Gather this year's figures beside last year's"
                - "Write the two-page report with three priorities"
                - "Present the analytics privacy report to leadership @recurring(yearly)"
            - name: Ethics approval and data plan for a study with personal data
              description: |-
                ## Purpose
                Researchers using personal data usually need ethics approval and a data management plan before analysis starts, and both ask how data will be minimised, stored, pseudonymised and destroyed. Drafting those answers from the controls you actually have, rather than the ones the form seems to expect, avoids approvals the project then cannot keep.

                ## Milestones
                1. The approvals your institution or funder requires identified.
                2. A data management plan covering collection, storage, pseudonymisation, access and destruction.
                3. Ethics or review board approval received.
                4. Each commitment in the plan set up as a check or control in the project.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ethics approval is received and a data management plan is in place, with each commitment matched to a control in the project."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Check which ethics and data plan approvals your institution requires"
                - "Draft the data management plan from controls you already have"
                - "Submit the ethics application with the plan attached"
                - "Turn each commitment in the plan into a project task or control"
            - name: Statistical disclosure control for published tables
              description: |-
                ## Purpose
                Researchers and statistics teams publishing tables, charts or model outputs from sensitive data have to check outputs as well as inputs, because a regression on a tiny subgroup or a table with a cell of 1 can reveal individuals. An output checking routine, of the kind secure research environments use, applied before anything leaves the analysis environment protects participants and the publication.

                ## Milestones
                1. Output checking rules written for minimum cell counts, dominance and differencing between tables.
                2. Every output in the draft paper or report checked against the rules.
                3. Problem outputs suppressed, rounded or regrouped.
                4. A second person signing off outputs before release.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every published table and chart passes a written output check and is signed off by a second person before release."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write output checking rules for cell counts, dominance and differencing"
                - "Check each table and chart in the draft against the rules"
                - "Suppress, round or regroup the outputs that fail"
                - "Ask a second person to sign off outputs before release"
            - name: Privacy by design checklist for a new pipeline
              description: |-
                ## Purpose
                Engineers building a new pipeline make the decisions that matter most for privacy in its first week: which columns to extract, where tokenisation happens, how long raw data sits in landing, who can read staging. A design checklist run at kickoff and recorded in the design document costs an hour and saves a retrofit later.

                ## Milestones
                1. A checklist covering minimisation, tokenisation point, raw landing period, access and logging.
                2. The checklist completed in the design document for the next new pipeline.
                3. Raw landing data set to expire after the agreed period.
                4. The privacy contact's sign-off recorded before go-live.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new pipeline's design document contains a completed privacy checklist and a sign-off recorded before go-live."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a ten-question privacy checklist for pipeline design documents"
                - "Complete the checklist for the next pipeline being built"
                - "Set raw landing data to expire after the agreed period"
                - "Record the privacy contact's sign-off before go-live"
            - name: Cross-border analytics and data residency map
              description: |-
                ## Purpose
                Enterprises with customers in several jurisdictions often find their analytics copies personal data to a cloud region, a vendor or an offshore team in another country without anyone checking whether transfer rules allow it. Mapping where data is stored and accessed from, and having the privacy team record a mechanism for each flow, keeps the platform's geography deliberate.

                ## Milestones
                1. Storage regions of the warehouse, lake, BI tool and analytics vendors listed.
                2. Countries from which teams and vendors access personal data listed.
                3. Each cross-border flow reviewed by the privacy team, with its transfer mechanism recorded.
                4. A quarterly check for new regions or vendor locations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every cross-border flow of analytics personal data is mapped and has a transfer mechanism recorded by the privacy team."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the storage regions of every analytics platform and vendor"
                - "List the countries from which people and vendors access the data"
                - "Send the flow map to the privacy team to record transfer mechanisms"
                - "Check vendor and platform regions for changes @recurring(quarterly)"
            - name: Bringing an acquired company's analytics under your privacy rules
              description: |-
                ## Purpose
                After an acquisition, the bought company's warehouse arrives with its own privacy notices, identifiers and habits, and merging its customer data with yours can break promises made to its customers. Treating the integration as a privacy project, with an inventory, a purpose check and a consent review before any join, keeps a merger from becoming an incident.

                ## Milestones
                1. The acquired platform's personal data inventoried using your identifier taxonomy.
                2. Original privacy notices and consents reviewed by the privacy team for compatible use.
                3. Joins with your customer data approved or blocked on the basis of that review.
                4. The acquired data moved under your masking, access and erasure processes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The acquired company's analytics data sits under your masking, access and erasure processes, and every join is approved by the privacy team."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Inventory the acquired platform's personal data with your taxonomy"
                - "Send the acquired company's privacy notices to your privacy team for review"
                - "Hold any join with your customer data until the review is complete"
                - "Apply your masking and erasure processes to the acquired data"
            - name: Special category data in a restricted analytics zone
              description: |-
                ## Purpose
                Health, biometric, ethnicity, religion and similar data usually carry stricter rules and greater harm if exposed, and they reach analytics through wellness features, HR systems or inferred segments. Separating them into a restricted zone with tighter access, logging and output checks keeps the rest of the platform usable for everyone else.

                ## Milestones
                1. Special category fields and inferred segments identified, including proxies such as pharmacy purchases.
                2. A restricted schema with separate access roles and logging created.
                3. Those fields moved out of general schemas.
                4. Output rules for reports that use them agreed with the privacy team.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All special category fields sit in a restricted schema with separate access and logging, and none remain in general schemas."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Search the inventory for health, biometric and other special category fields"
                - "Look for inferred segments that act as proxies for sensitive traits"
                - "Create a restricted schema with its own access roles and logging"
                - "Move the fields out of general schemas and update dependent models"
            - name: Children's data in product analytics
              description: |-
                ## Purpose
                Products used by children face tighter rules in many countries on profiling, tracking and retention, and analytics events rarely know a user's age. Identifying where under-age users may appear, and switching their events to a minimal, non-profiling configuration agreed with the privacy team, avoids building behavioural profiles of children by default.

                ## Milestones
                1. Products and features likely to have under-age users identified.
                2. Age signals available to analytics listed.
                3. A minimal analytics configuration for those users agreed with the privacy team.
                4. The configuration applied and confirmed in a sample of live events.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A minimal analytics configuration for under-age users is agreed with the privacy team and confirmed in a sample of live events."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List products and features where under-age users are likely"
                - "Find which age signals reach the analytics events"
                - "Agree a minimal event configuration for those users with the privacy team"
                - "Check a sample of live events to confirm the configuration applies"
            - name: Privacy budget ledger for a recurring private release
              description: |-
                ## Purpose
                Publishing the same statistics every month with differential privacy spends privacy budget each time, and without a ledger the cumulative guarantee quietly erodes. Setting a budget per period with the privacy team, allocating it across queries and logging every release keeps the guarantee honest over years rather than months.

                ## Milestones
                1. The statistics in the release listed with the accuracy each requires.
                2. A total budget per period approved in writing by the privacy team.
                3. Budget allocated across queries, with accuracy tested at that allocation.
                4. A ledger recording the spend for every release.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written privacy budget exists, and the ledger shows spend for every release over six months without exceeding the agreed total."
                cadence: rolling
              tasks:
                - "List the statistics in the recurring release and the accuracy each needs"
                - "Agree a budget per period with the privacy team"
                - "Allocate the budget across queries and test the accuracy"
                - "Record the month's privacy budget spend in the ledger @recurring(monthly:20)"
            - name: Training data privacy for machine learning models
              description: |-
                ## Purpose
                Models trained on personal data can memorise and leak it: language models repeat rare strings, and membership inference can reveal whether a person was in the training set. For models trained on customer records or text, removing direct identifiers, testing for memorisation and considering differentially private training are now part of delivering a model responsibly.

                ## Milestones
                1. Models trained on personal data listed with their training sources.
                2. Direct identifiers removed or tokenised in each training set.
                3. A membership inference or canary test run on one model.
                4. A decision recorded on whether the riskiest model needs differentially private training.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One model has been tested for memorisation, and a decision on differentially private training for the riskiest model is recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List production models trained on personal data and their sources"
                - "Remove or tokenise direct identifiers in each training set"
                - "Run a membership inference or canary test on one model"
                - "Record whether the riskiest model needs differentially private training"
            - name: Data clean room pilot with a measurement partner
              description: |-
                ## Purpose
                Advertisers, retailers and media partners increasingly ask to match customer lists for campaign measurement. A clean room lets both sides run approved aggregate queries on matched data without either seeing the other's rows, but only if query rules, minimum thresholds and output checks are set with care. Piloting one use case under strict rules shows whether the approach delivers before it becomes the default.

                ## Milestones
                1. One use case, the partner and the allowed outputs agreed.
                2. Contracts and the privacy team's review completed before any upload.
                3. Clean room rules set: approved query templates, minimum aggregation thresholds and no row-level export.
                4. Pilot results reviewed for both usefulness and leakage.
                5. A go or no-go decision recorded for wider use.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A clean room pilot has run under written query rules, and a go or no-go decision on wider use is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree one measurement use case and the allowed outputs with the partner"
                - "Get the privacy team's review before any customer list is uploaded"
                - "Set approved query templates and minimum aggregation thresholds"
                - "Record a go or no-go decision on wider use after the pilot"
            - name: Automated re-identification risk scoring
              description: |-
                ## Purpose
                For teams releasing many datasets and extracts, a manual intruder test for each one does not scale. A scoring job that computes uniqueness, smallest group size and sensitive value diversity on chosen quasi-identifiers, run on every candidate release and on standing outputs each month, turns risk into a number reviewers can set thresholds on.

                ## Milestones
                1. Risk measures chosen: uniqueness rate, minimum group size and diversity of sensitive values.
                2. A scoring job that runs on any table given its quasi-identifiers.
                3. Thresholds agreed with the privacy team for automatic pass, review and block.
                4. Standing shared outputs scored monthly, with results logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scoring job with agreed thresholds runs on every candidate release and on standing outputs monthly, with results logged."
                cadence: rolling
              tasks:
                - "Choose the risk measures and write down how each is calculated"
                - "Build a scoring job that takes a table and its quasi-identifier list"
                - "Agree pass, review and block thresholds with the privacy team"
                - "Score standing shared outputs and log the results @recurring(monthly:2)"
---

# Data Anonymisation & Privacy

This area is for the engineers, enterprise data and privacy leads, and researchers who need personal data to be useful for analysis without being exposed by it. It starts with the foundations (an inventory of personal data, an identifier taxonomy, a purpose register, minimisation at extraction, a keyed pseudonymisation scheme, clean non-production environments and an impact assessment), then the routines that keep them true, the skills behind anonymisation from linkage attacks to differential privacy, decisions on tools, aggregation, redaction and generalisation, dated events such as an audit pack, a partner data release and a red team exercise, situations from ethics approval to an acquisition or children's data, and finally specialist work on privacy budgets, model training data, clean rooms and automated risk scoring.

What repeats is a weekly run of erasure requests and a weekly privacy triage of new changes, monthly scans for new personal columns, masking coverage, export sweeps, event payload checks and break-glass reviews, quarterly reviews of unmasked access, small-number suppression and non-production copies, and a yearly key custody review, team training, tabletop exercise and leadership report. The Risk register, Compliance control, Purchase decision and Remediation plan templates pair with the impact assessment, the masking coverage check, the tool choice and the red team findings. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
