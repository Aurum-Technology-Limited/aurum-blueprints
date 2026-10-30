---
id: product-management.regulated-product-requirements
name: Regulated Product Requirements
description: "Regulated product work for teams and founders in finance, health and education: classification, obligations turned into testable requirements, release sign-off, audits, submissions and partner reviews."
category: business
version: 1.0.0
tags: [product-management, regulated-product-requirements, team, enterprise, founder, compliance, fintech, healthtech]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - compliance-control
    - risk-register
    - reading-queue
    - remediation-plan
    - product-spec
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Regulated Product Requirements
          description: "Building products in regulated sectors such as finance, health or education, where compliance requirements shape features, timelines and launch approvals."
          projects:
            - name: Regulatory landscape map for the product
              description: |-
                ## Purpose
                Teams building for finance, health or education often discover a relevant rule only when a partner, customer or auditor mentions it, and by then the design is fixed. Listing every regime that could touch the product (financial services licensing, anti-money laundering, health data protection, medical device rules, student privacy, consumer protection, general data protection) with the trigger that brings each one into play gives the team one shared starting picture. Counsel or your compliance lead then confirms which apply, rather than the team guessing.

                ## Milestones
                1. Every regime that could plausibly apply listed with the product feature or activity that triggers it.
                2. Each regime marked as applies, may apply or does not apply, with the reason in one sentence.
                3. The map reviewed by counsel or the compliance lead, with their corrections recorded.
                4. The confirmed map stored where the whole product team can read it.

                ## Notes
                Name regimes by family and give country examples (HIPAA in the US or the GDPR in Europe for health data, say) and let counsel decide what applies. The map is a briefing document, not a legal opinion.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of candidate regulatory regimes, each marked applies, may apply or does not apply, reviewed and corrected by counsel or the compliance lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the product's activities that touch money, health information or student records"
                - "Draft a table of candidate regimes with the trigger for each one"
                - "Book an hour with counsel or the compliance lead to mark each regime"
                - "Publish the confirmed map in the product team's shared space"
            - name: Regulatory classification of the product
              description: |-
                ## Purpose
                Whether software counts as a medical device, whether a feature moves customer money as a regulated activity, or whether an app collects data from children usually decides cost, timeline and who can sign off a launch. Those answers depend on intended use and exact wording, so product has to describe the product precisely and let qualified advisers reach the conclusion. A recorded classification early on stops the team building toward a launch date that a regulator's process cannot meet.

                ## Milestones
                1. An intended use statement for the product, written in plain language and agreed by product leadership.
                2. A feature list showing which capabilities drive the classification question.
                3. A written classification view from counsel or a regulatory adviser, with the reasoning attached.
                4. A list of features or claims that would change the classification if added later.

                ## Notes
                Marketing copy, sales decks and help articles count toward intended use. A single line promising to detect a condition or guarantee returns can move the product into a stricter category.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A classification view from counsel or a regulatory adviser is recorded with the intended use statement it was based on and the features that would change it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-paragraph intended use statement for the product as it is sold today"
                - "Gather the website, sales deck and help centre wording that describes what it does"
                - "Send the statement and wording to counsel with a request for a written classification view"
                - "List planned features that could change the classification and share it with the team"
            - name: Product and compliance decision rights
              description: |-
                ## Purpose
                Arguments about whether compliance can block a release, or whether product can ship with an open finding, are easier to settle before a deadline than during one. A one-page agreement naming who is consulted, who approves and who can stop work for each kind of decision (new features, copy changes, vendor additions, incident disclosure) turns a recurring standoff into a routine. Founders need this as much as large firms, because the first compliance hire otherwise inherits an unspoken expectation to say yes.

                ## Milestones
                1. Six to ten recurring decision types listed, from copy changes to new uses of customer data.
                2. Each decision type assigned a person who approves, people who are consulted and people who are told.
                3. An escalation route agreed for disagreements, with a named tiebreaker.
                4. The agreement signed off by the heads of product and compliance and linked from the team handbook.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision rights table covering at least six decision types, approved by the heads of product and compliance, is published in the team handbook."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last ten decisions where product and compliance disagreed or waited on each other"
                - "Group them into decision types and draft who approves each type"
                - "Agree the escalation route and tiebreaker with the heads of product and compliance"
                - "Publish the decision rights table and walk the team through it at the next all-hands"
            - name: Data inventory for regulated data types
              description: |-
                ## Purpose
                Rules attach to kinds of data, so a team that cannot say where card numbers, health details, identity documents or student records live cannot say which rules it meets. Tracing each regulated field from the screen where it is collected through storage, analytics, logs and vendors usually turns up copies nobody planned, such as a diagnosis in a support ticket or a passport scan in a crash report. Classification, retention and vendor reviews all depend on this inventory.

                ## Milestones
                1. Every regulated data category the product handles named with its source screen or integration.
                2. Each category traced to its storage locations, including logs, analytics tools, backups and support systems.
                3. Unplanned copies flagged and given an owner to remove or justify.
                4. The inventory reviewed by engineering and compliance and stored beside the requirements register.

                ## Notes
                Search logs and analytics events for field names as well as reading the schema. The surprises are almost always in the tools nobody thinks of as a database.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data inventory lists every regulated data category with its storage locations and vendors, and each unplanned copy has a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the regulated data categories the product collects, starting with sign-up and payment"
                - "Trace each category through databases, logs, analytics and support tools with an engineer"
                - "Flag every unplanned copy and assign an owner to remove or justify it"
                - "Ask the agent to turn the trace notes into a one-page inventory table"
            - name: Obligations to requirements register
              description: |-
                ## Purpose
                Regulations are written as duties on the company, not as user stories, so someone has to translate each relevant clause into something a team can build and test. A register that links each obligation to its source text, the product requirement it creates, the owning team and the evidence that proves it is met becomes the single list auditors, engineers and partners all ask for. Without it, the same clause gets interpreted three different ways by three squads.

                ## Milestones
                1. Each applicable obligation entered with a citation to the regulation, guidance or contract clause.
                2. Every obligation paired with at least one product requirement written as a testable statement.
                3. An owning team and an evidence type recorded for every requirement.
                4. The register approved by the compliance lead as an accurate reading of the obligations.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A requirements register links every applicable obligation to a cited source, a testable product requirement, an owner and an evidence type, approved by the compliance lead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Create the register with columns for source, obligation, requirement, owner and evidence"
                - "Enter the obligations from the confirmed regulatory map, one clause per row"
                - "Draft a testable requirement for each obligation with the owning engineering lead"
                - "Review the register line by line with the compliance lead and record approvals"
            - name: Compliance screening questions for new epics
              description: |-
                ## Purpose
                Most features in a regulated product carry no new obligations, and sending every ticket to compliance teaches both teams to ignore the queue. Eight to twelve yes or no questions at epic creation (does it collect new data, change a disclosure, alter money movement, touch a clinical output, affect minors) route only the work that needs review. Product managers answer them in minutes, and compliance sees the risky work while it is still a sketch.

                ## Milestones
                1. A list of eight to twelve screening questions agreed with the compliance lead.
                2. The questions added as required fields on the epic template in the work tracker.
                3. A routing rule so any yes answer adds the epic to the compliance review queue.
                4. Two months of epics checked to confirm the questions caught what compliance would have wanted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Screening questions are a required part of every new epic, and a two-month check shows no epic needing compliance review went unflagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft ten screening questions from the last year's compliance review requests"
                - "Agree the final wording and the routing rule with the compliance lead"
                - "Add the questions as required fields on the epic template"
                - "Review screening answers with compliance and adjust the wording @recurring(quarterly)"
            - name: Compliance checks in the definition of done
              description: |-
                ## Purpose
                Work that passes product review can still fail an audit because the consent screen was not versioned, the disclosure was edited after approval, or nobody saved the test evidence. Adding three to five compliance checks to the team's definition of done makes that evidence a normal part of finishing a ticket rather than a scramble before the auditor arrives. Engineers tend to welcome it once the checks are specific instead of a vague request to be compliant.

                ## Milestones
                1. Three to five compliance checks written as specific yes or no statements.
                2. The checks added to the definition of done for every ticket flagged as regulated.
                3. The pull request or ticket template updated with a place to link evidence.
                4. One sprint run with the new checks and the friction points written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The team's definition of done includes three to five specific compliance checks, and one full sprint has closed regulated tickets with evidence linked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the last three audit or partner findings about missing product evidence"
                - "Write three to five done checks that would have prevented those findings"
                - "Add an evidence link field to the ticket template for regulated work"
                - "Collect engineers' feedback on the checks at the end of the first sprint"
            - name: Audit evidence store and naming rules
              description: |-
                ## Purpose
                Auditors and partner banks ask for proof that a control worked on a date months ago, and a screenshot in someone's chat history does not count. One evidence location with folders by requirement, a naming pattern that includes the date and release, and a retention period agreed with compliance means anyone can answer an evidence request in an afternoon. Setting it up is dull; rebuilding a year of evidence after a request is far worse.

                ## Milestones
                1. A single evidence location chosen with access limited to the product, engineering and compliance teams.
                2. A folder structure that mirrors the requirements register.
                3. A file naming pattern with requirement reference, release and date.
                4. A retention period for evidence agreed with the compliance lead and noted in the store.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared evidence store mirrors the requirements register, follows a written naming pattern and has a retention period agreed with compliance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree with compliance where audit evidence should live and who can see it"
                - "Create folders that match the requirement references in the register"
                - "Write the naming pattern and pin it at the top of the evidence store"
                - "Spot-check last month's evidence for missing approvals or misnamed files @recurring(monthly:2)"
            - name: Approval lead times on the roadmap
              description: |-
                ## Purpose
                Regulated launches wait on things product does not control: a partner bank's change review, a notified body's audit slot, a regulator's notification period, a school district's privacy approval. Recording the real lead time for each kind of approval and drawing it onto the roadmap stops quarterly plans promising dates that a review queue makes impossible. Leadership also sees why a feature that takes six weeks to build can take five months to launch.

                ## Milestones
                1. Every external approval the product has needed in the last two years listed with its actual elapsed time.
                2. A lead time range agreed for each approval type with the people who manage those relationships.
                3. Each roadmap item that needs an approval shown with its approval window as well as its build window.
                4. The roadmap reviewed with leadership with approval windows visible.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The current roadmap shows an approval window beside every item that needs external sign-off, based on recorded lead times for each approval type."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List past external approvals with the date requested and the date granted"
                - "Agree a realistic lead time range for each approval type with compliance and partnerships"
                - "Add approval windows to every affected roadmap item"
                - "Update the lead time table with approvals that came back @recurring(quarterly)"
            - name: Weekly compliance review of upcoming work
              description: |-
                ## Purpose
                Thirty minutes a week between the product lead and the compliance partner, looking two sprints ahead, catches most problems while they are cheap to fix. The agenda is short: flagged epics, copy awaiting approval, open questions to counsel and anything a partner has asked for. Teams that skip it end up holding the same conversation in a release meeting with the clock running.

                ## Milestones
                1. A standing thirty-minute slot in both calendars with a shared agenda document.
                2. Flagged epics for the next two sprints reviewed each week, with outcomes recorded against each one.
                3. Open questions to counsel tracked with owners and dates.
                4. Fewer than one release a quarter delayed by a compliance question raised late.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly review runs in at least ten of every twelve weeks, with recorded outcomes for every flagged epic in the following two sprints."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with the compliance partner"
                - "Create the shared agenda with flagged epics, copy approvals and open questions"
                - "Review flagged epics for the next two sprints with the compliance partner @recurring(weekly:wed)"
                - "Close or reassign questions to counsel that are more than two weeks old"
            - name: Regulatory change watch
              description: |-
                ## Purpose
                Rules move constantly through consultations, new guidance, enforcement actions and court decisions, and the product often has to change months before an effective date. A monthly scan of the regulator's publications, an industry body's newsletter and the compliance team's own tracker, with each item sorted into no impact, monitor or act, keeps the roadmap ahead of the deadline. Enforcement notices against other firms are especially useful, because they show what the regulator actually checks.

                ## Milestones
                1. Four to six sources chosen, covering each regulator and one industry body per sector.
                2. A change log with each item rated no impact, monitor or act.
                3. Every act item linked to a backlog entry or a register update with an owner.
                4. A quarterly summary of upcoming effective dates shared with product leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The change log is updated every month, and every item rated act has a linked backlog entry or register update with an owner."
                cadence: rolling
              tasks:
                - "Pick four to six regulator and industry sources and subscribe to their updates"
                - "Set up a change log with columns for source, summary, rating, owner and effective date"
                - "Scan the sources and rate each new item for product impact @recurring(monthly:12)"
                - "Send product leadership a summary of upcoming effective dates @recurring(quarterly)"
            - name: Requirements traceability upkeep
              description: |-
                ## Purpose
                A register that was accurate at launch drifts within months as features change, tests are renamed and evidence moves. Checking monthly that every requirement still links to a live test and current evidence, and that every new regulated feature has entries, keeps the trace intact for the day an auditor picks a requirement at random. Medical device and payments audits in particular expect to follow a line from obligation to test result without gaps.

                ## Milestones
                1. A monthly traceability check that lists requirements with broken or missing links.
                2. Every requirement linked to at least one current test and one piece of dated evidence.
                3. New regulated features from the month added to the register before the next release.
                4. The gap count reported to the compliance lead each month and trending down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly check finds fewer than five requirements without a current test or dated evidence, and each gap has an owner."
                cadence: rolling
              tasks:
                - "Export the register and mark requirements with missing tests or evidence"
                - "Assign each gap to the owning team with a date to close it"
                - "Run the traceability check and send the gap count to compliance @recurring(monthly:20)"
                - "Add register entries for regulated features shipped since the last check"
            - name: Release change classification and sign-off
              description: |-
                ## Purpose
                In regulated products, some changes need a fresh approval, a notice to a partner or regulator, or new validation, while most need nothing. Classifying each release's changes against written significance criteria, then getting a recorded sign-off for anything above the line, is what lets a team keep shipping often without drifting outside its approvals. The criteria come from compliance; product's job is applying them consistently and keeping the record.

                ## Milestones
                1. Written significance criteria for changes, agreed with compliance or the regulatory lead.
                2. Each release's change list classified as routine, significant or needs notification.
                3. Sign-off recorded for every significant change before it reaches customers.
                4. A release log showing classification and sign-off for every release in the last quarter.

                ## Notes
                Medical device rules and many partner bank agreements define a significant change in their own terms. Copy those definitions into the criteria rather than paraphrasing them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every release in a quarter has a recorded change classification, and every significant change has sign-off dated before it went live."
                cadence: rolling
              tasks:
                - "Ask compliance for the written definition of a significant change"
                - "Add a classification field to the release checklist"
                - "Classify the coming release's changes and route significant ones for sign-off @recurring(weekly:thu)"
                - "Review the quarter's release log for any change shipped without classification"
            - name: Regulated complaints and incident signal review
              description: |-
                ## Purpose
                In financial services a complaint may have to be handled within a set period and reported, and in health products a user report can be a possible adverse event with its own process. Product does not own those processes but it owns the fixes, so a monthly look at categorised complaints, incident reports and near misses tells the team which flows are causing harm. It also gives compliance evidence that root causes are being addressed, which regulators ask about.

                ## Milestones
                1. A monthly extract of complaints and incidents, categorised by product area, from the team that handles them.
                2. The top three product causes named each month with a linked backlog item.
                3. Repeat causes tracked across months so persistent problems are visible.
                4. A short note back to compliance on what product changed in response.

                ## Notes
                Product teams should not reclassify or close complaints themselves. Read the data, fix causes and leave the regulated handling to the owning team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the top three product causes of complaints or incidents are named with a linked backlog item, and a note goes back to compliance."
                cadence: rolling
              tasks:
                - "Ask the complaints team for a monthly categorised extract by product area"
                - "Review the extract and name the top three product causes @recurring(monthly:8)"
                - "Create or update a backlog item for each cause with the complaint count attached"
                - "Send compliance a short note on fixes shipped since the last review"
            - name: Regulated vendor and partner oversight
              description: |-
                ## Purpose
                Identity checks, card processing, cloud hosting, messaging and analytics vendors all carry part of the product's regulated duties, and the company stays accountable when one of them fails. A quarterly look at each critical vendor's certifications, incidents, contract terms and sub-processors, recorded in one place, means the product team learns about a vendor problem before a partner or auditor raises it.

                ## Milestones
                1. A list of vendors that process regulated data or perform a regulated function, with an owner for each.
                2. Current certifications, audit reports and data processing terms on file for every critical vendor.
                3. Incidents and sub-processor changes for the quarter recorded against each vendor.
                4. An exit plan sketched for the two vendors the product depends on most.

                ## Notes
                Start from the **Vendor** template for each critical supplier.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every critical vendor has current certifications and data terms on file, reviewed in the last quarter, and the two most critical have a written exit plan."
                cadence: cyclic
              tasks:
                - "List vendors that touch regulated data or carry out a regulated step"
                - "Request current certifications and audit reports from each critical vendor"
                - "Review each critical vendor's incidents, terms and sub-processors @recurring(quarterly)"
                - "Draft an exit plan for the two vendors the product could least do without"
            - name: Quarterly product control testing
              description: |-
                ## Purpose
                Controls built into the product (age gates, transaction limits, consent checks, access restrictions on health records) can quietly break during unrelated work. Testing a sample of them each quarter with the compliance team, using written steps and saved results, shows they still work and gives auditors something better than an assurance. Pick the controls with the highest consequence first rather than trying to test everything.

                ## Milestones
                1. A list of in-product controls, each with written test steps and an expected result.
                2. A quarterly sample of at least five controls chosen by consequence.
                3. Test results saved to the evidence store with date, tester and outcome.
                4. Any failed control logged as a defect with a fix date agreed with compliance.

                ## Notes
                Start from the **Compliance control** template to document each control's test steps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter at least five in-product controls are tested with saved results, and every failure has a logged defect and agreed fix date."
                cadence: cyclic
              tasks:
                - "List the controls built into the product and write test steps for each"
                - "Choose this quarter's sample of five controls by consequence"
                - "Run the control tests with compliance and save the results @recurring(quarterly)"
                - "Log each failed control as a defect with an agreed fix date"
            - name: Disclosure and consent copy register
              description: |-
                ## Purpose
                Fee disclosures, risk warnings, consent wording and privacy notices are regulated text, and a designer tweaking a line for clarity can undo an approval. Keeping every piece of regulated copy in a register with its approved version, approver, date and the screens it appears on lets the team change it deliberately and prove what a customer saw on a given day. Content updates get faster too, because approved text can be reused instead of redrafted.

                ## Milestones
                1. Every piece of regulated copy in the product listed with the screens where it appears.
                2. Approved versions stored with approver and date.
                3. A rule that regulated copy changes only through the register, written into the design and content process.
                4. A monthly check that live copy matches the approved version.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The register lists all regulated copy with approved versions, and a monthly check finds live copy matching the approved text on every listed screen."
                cadence: rolling
              tasks:
                - "Capture screenshots of every screen with disclosures, consent or risk warnings"
                - "Record the approved version, approver and date for each piece of copy"
                - "Add a regulated copy step to the design review checklist"
                - "Compare live copy against approved versions and log any drift @recurring(monthly:24)"
            - name: Product compliance risk register review
              description: |-
                ## Purpose
                Risks such as a disclosure missing on one platform, a vendor without a current audit report or a feature that might change classification need an owner and a date, or they sit in meeting notes forever. A product-level risk register, reviewed monthly with compliance, keeps likelihood, impact and the mitigation plan visible beside the roadmap. Leadership can then accept a risk on purpose rather than by default.

                ## Milestones
                1. A product compliance risk register with likelihood, impact, owner and mitigation for each risk.
                2. Every risk above the agreed threshold linked to a mitigation item on the roadmap.
                3. Accepted risks recorded with who accepted them and until when.
                4. Twelve monthly reviews held across the year with the register updated each time.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register is reviewed monthly, every risk above the threshold has a roadmap mitigation, and each accepted risk names who accepted it and its expiry."
                cadence: rolling
              tasks:
                - "Seed the register with risks from the change watch, vendor reviews and findings"
                - "Agree the threshold above which a risk needs a roadmap mitigation"
                - "Review the register with the compliance partner and update scores @recurring(monthly:4)"
                - "Record who accepted each risk and the date the acceptance expires"
            - name: Annual regulatory requirements refresh
              description: |-
                ## Purpose
                Once a year the whole picture deserves a fresh look: the product has changed, new rules have arrived and some old requirements no longer apply. Re-confirming the regulatory map and classification, pruning the register and re-baselining approval lead times gives the next year's planning an accurate starting point. Scheduling it a month before annual planning means the results shape the budget instead of arriving after it.

                ## Milestones
                1. The regulatory map and classification re-confirmed or updated by counsel.
                2. The requirements register pruned of obsolete entries and extended for new obligations.
                3. Approval lead times updated from the year's actual experience.
                4. A one-page summary of regulatory work needed next year handed to annual planning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A refreshed map, a pruned register and a one-page summary of next year's regulatory work are delivered before annual planning starts."
                cadence: cyclic
              tasks:
                - "Book the annual refresh a month before planning season @recurring(yearly)"
                - "Send counsel the updated product description for a classification check"
                - "Prune and extend the requirements register with the compliance lead"
                - "Write the one-page summary of next year's regulatory work for planning"
            - name: Reading regulation as a product manager
              description: |-
                ## Purpose
                Product managers in regulated sectors are more useful to compliance when they can read primary text themselves: the regulation, the regulator's guidance and the relevant enforcement cases. Learning to tell a binding requirement from guidance, a definition from an example, and an outcome rule from a prescriptive one makes conversations with counsel shorter and specs more accurate. Reading one rulebook for your sector closely, with a lawyer's annotations, beats skimming summaries of ten.

                ## Milestones
                1. One primary regulation for the product's sector read in full with notes.
                2. The regulator's main guidance on that regulation read and linked to the relevant clauses.
                3. Two enforcement cases from the sector summarised in a paragraph each.
                4. A thirty-minute session with counsel held to check your reading of the five clauses that matter most.

                ## Notes
                Start from the **Reading queue** template to line up the texts. Your reading builds understanding; conclusions about what the company must do stay with counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on one primary regulation, its guidance and two enforcement cases exist, and counsel has checked your reading of the five most relevant clauses."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the compliance lead which single regulation matters most for the product"
                - "Read the regulation in full and note every clause that touches a product decision"
                - "Summarise two recent enforcement cases from your sector"
                - "Book thirty minutes with counsel to check your reading of the key clauses"
            - name: Writing testable requirements from legal text
              description: |-
                ## Purpose
                A clause saying information must be clear, fair and not misleading, or that access must be limited to those with a need to know, cannot be handed to an engineer as it stands. Practising the translation into concrete, testable statements, with the open interpretation questions flagged for compliance, is the core craft of this area. Ten worked examples reviewed by your compliance partner teach more than any course.

                ## Milestones
                1. Ten clauses from the register rewritten as testable requirements with acceptance criteria.
                2. Interpretation questions for each clause written separately rather than buried in the requirement.
                3. All ten reviewed by the compliance partner, with their changes noted.
                4. A short guide of patterns that worked, shared with other product managers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten clauses are rewritten as testable requirements and reviewed by compliance, and a short patterns guide is shared with the product team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick ten clauses from the register that are still vague in the backlog"
                - "Rewrite each clause as requirements with acceptance criteria and open questions"
                - "Review the ten rewrites with the compliance partner and note their changes"
                - "Write a one-page patterns guide from what changed in review"
            - name: Data protection impact assessments in practice
              description: |-
                ## Purpose
                Many data protection laws expect an impact assessment before processing that is likely to be high risk, such as health data at scale, tracking children or automated decisions about people. Product managers usually hold the facts the assessment needs (what is collected, why, who sees it, how long it is kept), so learning the format and completing one for a real feature with the privacy lead is time well spent. The second one takes half as long.

                ## Milestones
                1. The company's assessment template and the privacy lead's guidance on when one is needed read.
                2. One assessment drafted for a real upcoming feature, covering purpose, necessity, risks and mitigations.
                3. The draft reviewed and signed off or returned by the privacy lead.
                4. Mitigations from the assessment added to the feature's requirements.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One impact assessment for a real feature is completed and signed off by the privacy lead, and its mitigations are in the feature's requirements."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the privacy lead for the assessment template and when one is required"
                - "Pick an upcoming feature that uses health, financial or children's data"
                - "Ask the agent to draft the assessment's description section from the feature spec"
                - "Complete the risks and mitigations with the privacy lead and get sign-off"
            - name: Medical device software rules for product teams
              description: |-
                ## Purpose
                Health products that diagnose, monitor or guide treatment can fall under medical device rules, which bring design controls, risk management files, software lifecycle standards and post-market duties. Product managers in health technology need a working grasp of intended use, risk classes, the software lifecycle standard (IEC 62304) and risk management (ISO 14971), even when a regulatory affairs specialist owns the detail. That grasp changes how features are scoped and how evidence is kept from the first sprint.

                ## Milestones
                1. Notes on how your target markets define a medical device and software as a medical device.
                2. A one-page summary of design controls and what they ask of product documents.
                3. The structure of a risk management file understood and sketched for one feature.
                4. A conversation held with a regulatory affairs specialist about how your team's work feeds their files.

                ## Notes
                Classification and conformity routes differ by country. Use what you learn to ask better questions, and leave the regulatory strategy to a qualified specialist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover device definitions, design controls and risk management, with a sketched risk file for one feature reviewed by a regulatory specialist."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the regulator's guidance on software as a medical device for one target market"
                - "Summarise design controls and the documents they expect from product"
                - "Sketch a hazard, cause and control table for one existing feature"
                - "Review the sketch with a regulatory affairs specialist and record their corrections"
            - name: Payments and financial services rules for product teams
              description: |-
                ## Purpose
                Fintech product managers make daily choices that regulation has opinions about: when to verify identity, how to screen against sanctions lists, where card data can flow, how strong authentication works and how customer money is held. A grounding in know your customer, anti-money laundering, card data security standards (PCI DSS), strong customer authentication and safeguarding means fewer surprises in partner bank reviews. The aim is fluency in the questions, not becoming the compliance officer.

                ## Milestones
                1. A one-page glossary of the financial services terms your compliance team uses most.
                2. The customer onboarding flow annotated with which checks happen where and why.
                3. A diagram of where card or account data flows, reviewed by the security lead.
                4. One session held with the compliance officer on the questions partner banks ask most.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated onboarding flow, a reviewed data flow diagram and a glossary exist, and one session with the compliance officer has been held."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the compliance officer for the ten terms product managers get wrong most"
                - "Annotate the onboarding flow with each identity and screening check"
                - "Draw where card or account data flows and have the security lead check it"
                - "Book a session on the questions partner banks raise in reviews"
            - name: Student and child data rules for education products
              description: |-
                ## Purpose
                Selling to schools brings student record rules, children's privacy laws, parental consent requirements and data agreements that districts or ministries negotiate hard. Examples include FERPA and COPPA in the US and age-appropriate design codes elsewhere, and many school buyers add their own clauses on top. Knowing what these typically ask for (consent, limits on advertising, deletion on request, data location) shapes sign-up, analytics and sharing features before a school's privacy review rejects them.

                ## Milestones
                1. Notes on the student and child data rules in your main markets, checked by counsel.
                2. Three recent school data agreements read and their common clauses listed.
                3. The product's sign-up, analytics and sharing features checked against those clauses.
                4. Gaps logged in the requirements register with owners.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on student and child data rules are checked by counsel, and every gap against common school agreement clauses is logged in the register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the sales team for three recent school or district data agreements"
                - "List the clauses that appear in all three agreements"
                - "Check sign-up, analytics and sharing against each common clause"
                - "Log the gaps in the requirements register with owners"
            - name: How audits and regulatory inspections run
              description: |-
                ## Purpose
                Audits often pull a product manager in with a day's notice to explain how a feature works and where its approvals are. Understanding how auditors sample, what counts as evidence, how interviews run and why a confident wrong answer is worse than saying you will check makes those sessions calm and short. Sitting in on one audit interview as an observer is the fastest way to learn.

                ## Milestones
                1. Notes on how the company's last two audits or inspections ran, from the compliance team.
                2. A list of the evidence types auditors accepted and rejected.
                3. One audit or partner review interview observed.
                4. Personal rules for answering auditor questions written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on two past audits, a list of accepted evidence types and personal answering rules exist, and one audit interview has been observed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask compliance for the reports from the last two audits or inspections"
                - "List the evidence types auditors accepted and those they pushed back on"
                - "Ask to observe the next audit or partner review interview"
                - "Write your rules for answering auditor questions accurately"
            - name: Identity verification and screening provider choice
              description: |-
                ## Purpose
                Choosing how to verify customers' identity and screen them against sanctions and politically exposed persons lists affects conversion, fraud, cost per check and what the partner bank will accept. Comparing three providers on match accuracy, coverage of your customers' countries and documents, audit trail, data location and price per check, with compliance setting the minimum standard, gives a choice that holds up in review.

                ## Milestones
                1. Minimum requirements for verification and screening set by compliance in writing.
                2. Three providers compared on accuracy, document coverage, audit trail, data location and price.
                3. A test run of each shortlisted provider on the same sample of synthetic applicants.
                4. A recommendation agreed by product, compliance and finance, with the reasons recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider is chosen against written compliance minimums after a test on sample applicants, with the decision signed by product, compliance and finance."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask compliance for the minimum verification and screening standards in writing"
                - "Shortlist three providers that cover your customers' countries and documents"
                - "Run each provider on the same sample of synthetic test applicants"
                - "Write the recommendation with pass rates, cost per check and data location"
            - name: Regulated partner versus own licence decision
              description: |-
                ## Purpose
                Founders in payments, lending or insurance often face a choice between launching on a licensed partner's permissions and applying for their own. A partner gets you to market sooner but adds fees, dependency and the partner's own product rules; an own licence takes longer and costs more in capital and staff but gives control. Laying out both routes with real timelines from advisers, costs and the product limits each imposes turns a gut call into a board-level decision.

                ## Milestones
                1. Both routes described with timelines and costs from at least one regulatory adviser.
                2. Product limits under each route listed, such as features the partner will not allow.
                3. Dependency risks of the partner route written down, including what happens if the partner exits.
                4. A decision taken by the founders or board and recorded with the reasons.

                ## Notes
                Licence requirements, capital rules and timelines differ by country and activity. Treat adviser estimates as the source, not blog posts from other founders.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision between partner and own licence is recorded by the founders or board, based on adviser timelines and costs and a list of product limits for each route."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the regulated activities the product needs to perform at launch"
                - "Ask a regulatory adviser for timelines and costs of the own licence route"
                - "Ask two candidate partners for their fees and product restrictions"
                - "Present both routes to the founders or board and record the decision"
            - name: Data residency and hosting location decision
              description: |-
                ## Purpose
                Customers in health, finance and education increasingly ask where their data is stored and processed, and some rules or contracts require it to stay in a particular country. Deciding the regions to support, what must stay in region (backups, logs, support access, analytics) and the cost of each option is a product decision with legal inputs. Settling it before the next big regional deal avoids promising something the architecture cannot keep.

                ## Milestones
                1. Data location requirements gathered from counsel, customer contracts and recent deals.
                2. Each data store and vendor mapped to the region where it processes data.
                3. Two or three hosting options costed with engineering.
                4. A decision on supported regions and scope recorded, with what sales can promise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states which regions are supported, which data stays in region, and the exact wording sales may use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect data location clauses from recent contracts and counsel's notes"
                - "Map each data store, backup and vendor to the region where it processes data"
                - "Cost two or three hosting options with the engineering lead"
                - "Write the supported regions decision and the approved wording for sales"
            - name: Record retention schedule built into the product
              description: |-
                ## Purpose
                Retention pulls in two directions: anti-money laundering, clinical and education rules can require records to be kept for years, while data protection law expects data to be deleted when no longer needed. Turning the schedule compliance agrees into product behaviour (what is kept, for how long, when it is deleted or anonymised, and how legal holds pause it) is how the policy becomes true. Most teams discover the gap when a customer asks for deletion and nobody can say what will happen.

                ## Milestones
                1. A retention period for every regulated record type agreed with compliance and counsel.
                2. Deletion or anonymisation jobs built for each record type, including backups and vendor copies.
                3. A legal hold flag that pauses deletion for named accounts.
                4. A monthly report showing what was deleted and what was held.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every regulated record type has an agreed retention period enforced by an automated job, with legal holds and a monthly deletion report."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get the agreed retention period for each record type from compliance"
                - "Specify the deletion and anonymisation behaviour with the engineering lead"
                - "Add a legal hold flag that pauses deletion for named accounts"
                - "Check the deletion report and confirm scheduled purges ran @recurring(monthly:10)"
            - name: Fair treatment review of sign-up and cancellation flows
              description: |-
                ## Purpose
                Regulators in finance and consumer protection increasingly look at outcomes: whether customers understood what they bought, could cancel easily and were not steered by design. Walking the sign-up, upgrade, cancellation and complaint flows as a customer in a hurry, a customer with low confidence and a customer in financial difficulty finds pressure points that a usability test misses. Fixing them is cheaper before a regulator's thematic review than after.

                ## Milestones
                1. Sign-up, upgrade, cancellation and complaint flows recorded step by step.
                2. Each flow walked through for three customer situations, including a customer in difficulty.
                3. Pressure points listed, such as pre-ticked options, hidden cancellation or unclear fees.
                4. Fixes for the top five agreed with compliance and scheduled.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Four key flows are reviewed for three customer situations, and fixes for the top five pressure points are agreed with compliance and scheduled."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record every step of the sign-up, upgrade, cancellation and complaint flows"
                - "Walk each flow as a hurried, a low-confidence and a struggling customer"
                - "List the pressure points and rank them with the compliance partner"
                - "Repeat the flow review after a year of pricing and onboarding changes @recurring(yearly)"
            - name: Marketing and in-app claims approval route
              description: |-
                ## Purpose
                Promotional statements about returns, savings, health benefits or learning outcomes are regulated in most sectors, and they appear in places compliance rarely sees: app store listings, push notifications, onboarding screens and sales decks. One approval route for claims, a library of approved phrases and a monthly sweep of live channels stop a growth experiment from making a promise the company cannot support.

                ## Milestones
                1. Every channel where the product makes claims listed, from app store pages to push messages.
                2. An approval route for new claims agreed with compliance and marketing.
                3. A library of approved claims with conditions for their use.
                4. A monthly sweep of live channels with any unapproved claim removed or approved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All claims channels are listed, an approved claims library exists, and unapproved claims found in each monthly sweep are removed or approved within a week."
                cadence: rolling
              tasks:
                - "List every channel where the product describes benefits to customers"
                - "Agree the claims approval route with compliance and marketing"
                - "Build a library of approved claims with the conditions for each one"
                - "Sweep live channels for unapproved claims @recurring(monthly:16)"
            - name: Automating a manual compliance check
              description: |-
                ## Purpose
                Many regulated teams still rely on someone checking a spreadsheet, a queue or a report by hand: sanctions rescreening, transaction limits, consent expiry or access reviews for health records. Picking the manual check with the most volume or the worst error history and building it into the product cuts mistakes and frees compliance staff for judgement work. The automation must keep or improve the evidence trail, or auditors will treat it as a new risk.

                ## Milestones
                1. Manual compliance checks listed with weekly volume, time spent and past errors.
                2. One check chosen for automation with compliance agreeing the logic.
                3. The automated check live, with alerts routed to the right reviewer.
                4. Evidence from the automated check accepted by compliance as at least as good as before.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One manual compliance check is automated with logic agreed by compliance, and compliance confirms the new evidence trail is at least as good."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask compliance to list manual checks with volume and time spent"
                - "Choose the check with the highest volume or worst error history"
                - "Write the automation spec with the agreed logic and alert routing"
                - "Run the automated and manual checks side by side for two weeks"
            - name: Audit finding remediation plan
              description: |-
                ## Purpose
                An audit, partner review or regulator visit that ends with findings against the product needs a credible plan within days, not a promise to look into it. Breaking each finding into root cause, fix, owner, date and evidence of closure, and reporting progress on a fixed rhythm, turns findings into a closed file rather than a repeat finding next year.

                ## Milestones
                1. Each finding restated in the team's own words with its root cause.
                2. A fix, owner, target date and closure evidence agreed for every finding.
                3. The plan accepted by the auditor, partner or compliance lead.
                4. Every finding closed with evidence filed, or a revised date agreed in writing.

                ## Notes
                Start from the **Remediation plan** template. Fix the cause, not only the instance the auditor sampled.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every finding has an accepted fix, owner and date, and each is closed with evidence or has a revised date agreed in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Restate each finding and agree its root cause with the owning team"
                - "Set a fix, owner, date and closure evidence for each finding"
                - "Send the plan to the auditor or compliance lead for acceptance"
                - "Report progress on open findings to compliance every two weeks"
            - name: Regulatory submission for a new product or feature
              description: |-
                ## Purpose
                Some launches need a formal submission: a medical device file to a notified body or regulator, a new product notification to a financial regulator, or a filing with a partner bank's oversight team. Product owns much of the content (intended use, feature description, risk analysis inputs, test summaries and labelling), so planning backwards from the submission date with a document list and owners keeps the build and the file in step.

                ## Milestones
                1. The submission's required contents listed by the regulatory lead, with product's sections marked.
                2. Each product section drafted, reviewed and placed in the submission folder.
                3. Test summaries and evidence referenced from the traceability register.
                4. The submission sent and acknowledged, with the reviewer's questions logged.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The submission is sent with every product section complete and referenced to evidence, and the reviewer's acknowledgement is filed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get the list of required submission contents from the regulatory lead"
                - "Mark the sections product owns and set a draft date for each"
                - "Link each test summary to its entry in the traceability register"
                - "Log every reviewer question with an owner and a reply date"
            - name: Certification audit readiness for the product
              description: |-
                ## Purpose
                Certifications such as an information security standard (ISO 27001), a service controls report (SOC 2) or a card data assessment (PCI DSS) include controls that live inside the product, and the audit date is usually fixed months ahead. Working back from that date, product checks that its controls exist, are documented and have evidence for the whole audit period, so the auditor's sample does not turn into findings.

                ## Milestones
                1. The audit scope and the controls product owns listed with the compliance lead.
                2. Each product control documented with its evidence for the full audit period.
                3. A dry run of evidence requests completed two weeks before fieldwork.
                4. Audit fieldwork finished with no product evidence request left unanswered.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every product-owned control in audit scope has evidence for the whole period, and fieldwork closes with no unanswered product evidence request."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the audit dates and the product-owned controls with compliance"
                - "Gather evidence for each control across the full audit period"
                - "Run a dry run of evidence requests two weeks before fieldwork"
                - "Staff an audit desk during fieldwork to answer product questions"
            - name: Regulatory sandbox or innovation hub application
              description: |-
                ## Purpose
                Several regulators run sandboxes or innovation offices where a firm can test a new model with real customers under agreed limits, or get informal views before applying for permissions. Applications ask for a clear description of the innovation, the consumer benefit, the risks and safeguards and a test plan with exit criteria. Preparing one forces the team to state its case precisely, which is useful even if the application is not accepted.

                ## Milestones
                1. The regulator's sandbox criteria and application window confirmed.
                2. A draft application covering innovation, consumer benefit, risks, safeguards and test plan.
                3. The draft reviewed by counsel and the compliance lead.
                4. The application submitted, or a decision not to apply recorded with reasons.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An application is submitted or a decision not to apply is recorded, after counsel and compliance have reviewed the draft."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Read the regulator's sandbox or innovation hub criteria and dates"
                - "Draft the innovation and consumer benefit sections"
                - "Write the test plan with customer limits, safeguards and exit criteria"
                - "Review the draft with counsel and decide whether to submit"
            - name: Partner bank due diligence review
              description: |-
                ## Purpose
                Fintechs that run on a sponsor bank or licensed partner face periodic due diligence, and a weak review can mean new product restrictions or the end of the relationship. The partner will ask about complaints, monitoring, onboarding controls, vendor oversight and changes since the last review. Assembling the product's part of the pack early, with a named person for each question, makes the review a conversation rather than an interrogation.

                ## Milestones
                1. The partner's question list or last review report obtained.
                2. Product answers drafted for every question about features, controls and changes.
                3. Supporting evidence attached from the evidence store.
                4. The review completed with any follow-up actions logged in the risk register.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The partner's review is completed with every product question answered from filed evidence, and follow-up actions are logged with owners."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the partnerships lead for the partner's question list or last report"
                - "Draft answers to every product question with links to evidence"
                - "List product changes since the last review and their sign-offs"
                - "Log the partner's follow-up actions in the risk register with owners"
            - name: Compliance go or no-go for a regulated launch
              description: |-
                ## Purpose
                Launch checklists in regulated products need a compliance line that is more than a tick: approvals obtained, disclosures live and matching the register, monitoring switched on, support trained on regulated scripts, and a rollback plan. A dedicated compliance readiness check a week before launch, with the compliance lead holding a real veto, avoids discovering on launch day that a partner never approved the final copy.

                ## Milestones
                1. A compliance readiness checklist drafted for the launch from the register and decision rights.
                2. Each item marked ready, not ready or waived, with a named approver for any waiver.
                3. A go or no-go meeting held a week before launch with the compliance lead present.
                4. The decision and any conditions recorded in the launch record.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A go or no-go decision with compliance present is recorded a week before launch, with every checklist item marked ready or waived by a named approver."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the launch's compliance readiness checklist from the register"
                - "Mark each item ready, not ready or waived with an approver"
                - "Hold the go or no-go meeting one week before launch"
                - "Record the decision and conditions in the launch record"
            - name: Mock inspection walk-through
              description: |-
                ## Purpose
                Rehearsing with a colleague playing the inspector, picking requirements at random and asking for the evidence, shows how the product team would cope with a real visit. It finds the missing approval, the out-of-date diagram and the engineer who explains a control differently from the documentation. Two hours every year or so is enough, and the fixes are usually small.

                ## Milestones
                1. Ten requirements picked at random from the register by someone outside the team.
                2. Evidence for each produced within the hour, or the gap recorded.
                3. Two team members interviewed on how a control works.
                4. Gaps logged with owners and fix dates.
              priority: low
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mock inspection of ten random requirements is held, and every gap found has an owner and a fix date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask someone from compliance to play the inspector for two hours"
                - "Have them pick ten requirements at random from the register"
                - "Produce evidence for each within the hour and note any gap"
                - "Log every gap from the walk-through with an owner and a fix date"
            - name: Founder's first compliance budget and hire
              description: |-
                ## Purpose
                Early founders in fintech, health or education often carry compliance themselves until a partner, investor or customer insists on more. Deciding what to outsource (counsel, a fractional compliance officer, a monitoring vendor), what to hire for and what the founder keeps, with a budget for the next eighteen months, makes regulated growth plannable. It also gives investors a straight answer to a question they will ask.

                ## Milestones
                1. Compliance tasks the founder does today listed with hours per month.
                2. Options priced for counsel, a fractional compliance officer and specialist vendors.
                3. An eighteen-month compliance budget with a trigger for the first full-time hire.
                4. The plan shared with the board or lead investor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An eighteen-month compliance budget with a named trigger for the first full-time hire is written and shared with the board or lead investor."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the compliance tasks you do now and the hours each takes"
                - "Get prices from two firms for counsel and fractional compliance support"
                - "Set the trigger for the first full-time compliance hire"
                - "Share the eighteen-month budget with the board or lead investor"
            - name: First ninety days as a regulated product manager
              description: |-
                ## Purpose
                Product managers joining a bank, insurer, health system or exam board often find that the hardest part is not the product but the approval culture. Spending the first ninety days learning the regulatory map, meeting the compliance, risk and legal people by name, reading past findings and shipping one small change through the full approval path builds the credibility to move faster later.

                ## Milestones
                1. The regulatory map, requirements register and last two audit reports read.
                2. One-to-one meetings held with compliance, risk, legal and the regulatory lead.
                3. One small change shipped through the full approval path, with notes on each step.
                4. A list of three approval steps to simplify, agreed with compliance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days one change has shipped through the full approval path, and three agreed simplifications are recorded with compliance."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your manager for the regulatory map and the last two audit reports"
                - "Book introductions with compliance, risk, legal and the regulatory lead"
                - "Ship one small change through the full approval path and note each step"
                - "Propose three approval steps to simplify to the compliance lead"
            - name: Meeting regulated customers' outsourcing requirements
              description: |-
                ## Purpose
                Banks, insurers and hospitals that buy your product are regulated themselves, and their rules on outsourcing land on you as contract terms: audit rights, exit assistance, incident notice times, continuity tests and sub-processor approval. Turning those recurring terms into product and operational capabilities, and tracking which customer holds which commitment, keeps the company from signing promises it cannot keep. These terms go further than a security questionnaire, because they come from the customer's own regulator.

                ## Milestones
                1. Outsourcing clauses from the last ten regulated customer contracts listed and grouped.
                2. Each recurring clause mapped to a product or operational capability, existing or missing.
                3. A tracker of which customer holds which commitment, with notice periods.
                4. Missing capabilities, such as data export for exit, added to the roadmap.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every outsourcing commitment in regulated customer contracts is tracked by customer, and each missing capability has a roadmap item."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull the outsourcing and third-party clauses from the last ten regulated contracts"
                - "Group the clauses and map each group to an existing or missing capability"
                - "Build a tracker of commitments by customer with notice periods"
                - "Review the commitments tracker with legal and customer success @recurring(quarterly)"
            - name: Moving a wellness product into health claims
              description: |-
                ## Purpose
                Wellness apps that start by tracking sleep, mood or activity often reach a point where customers, investors or clinicians want them to say more: detect, predict, treat. That step can turn the product into a regulated medical device or health service, with very different evidence and timelines. Mapping which claims sit on which side of the line, with regulatory advice, lets the founders choose deliberately rather than drift across it in a marketing update.

                ## Milestones
                1. Current and proposed claims listed with the feature behind each.
                2. Each claim marked by a regulatory adviser as wellness, likely regulated or unclear.
                3. The evidence, cost and time needed for the regulated claims estimated.
                4. A decision on which claims to pursue, recorded with guardrails for marketing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every current and proposed claim is classified by a regulatory adviser, and a decision on which to pursue is recorded with marketing guardrails."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every current and proposed health claim with the feature behind it"
                - "Ask a regulatory adviser to mark each claim's likely status"
                - "Estimate the evidence, cost and time for the claims that would be regulated"
                - "Record the decision and send marketing the guardrails"
            - name: Compliance due diligence on an acquired product
              description: |-
                ## Purpose
                Buying a product or company in a regulated sector means inheriting its approvals, its findings, its complaints history and its gaps. Product's part of the diligence is comparing the acquired product's features, data flows and claims with your own requirements register, and estimating the work to bring it in line. Findings that surface after close are the expensive ones.

                ## Milestones
                1. The target's approvals, recent audit reports and open findings reviewed.
                2. Its data flows and claims compared with your requirements register.
                3. Gaps listed with an estimate of engineering and compliance effort.
                4. A summary for the deal team on product compliance risk and integration cost.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A product compliance diligence summary lists the target's gaps against your register with effort estimates, delivered to the deal team before signing."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Request the target's approvals, audit reports and open findings"
                - "Compare the target's data flows and claims with your requirements register"
                - "Estimate effort to close each gap with engineering and compliance"
                - "Ask the agent to draft the diligence summary from the gap list"
            - name: Regulator inquiry response from the product side
              description: |-
                ## Purpose
                When a regulator writes asking how a feature works, why customers were treated a certain way or what changed after an incident, legal and compliance lead the response but product holds many of the facts. Preparing accurate, dated, evidence-backed answers about product behaviour, without speculation, and logging everything provided, protects the company and the people answering. Speed matters, and so does saying only what is known.

                ## Milestones
                1. A named product contact appointed to work with legal on the inquiry.
                2. Every product question answered in writing with dates, versions and evidence.
                3. All material sent to legal logged with what was provided and when.
                4. Product changes arising from the inquiry tracked to completion.

                ## Notes
                Route every communication with the regulator through legal or compliance. Do not contact the regulator directly or delete anything once an inquiry is open.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every product question in the inquiry is answered in writing with evidence through legal, and a log records all material provided."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree with legal who the product contact is and how material is shared"
                - "Answer each product question with dates, release versions and evidence"
                - "Log every document sent to legal with the date provided"
                - "Track product changes arising from the inquiry to completion"
            - name: Explainable automated decisions for credit and eligibility
              description: |-
                ## Purpose
                Products that approve loans, set limits, assess insurance or decide eligibility for a service automatically are often required to explain adverse decisions and offer a human review. Building that in means the decision logic records its main reasons, the customer notice states them plainly, and a reviewer can override with a record. Retrofitting explanations onto a model that never stored its reasons is slow, so specify them before the logic is built.

                ## Milestones
                1. The notice and review obligations for automated decisions confirmed by counsel.
                2. Decision logic that stores the main reasons for each outcome.
                3. Customer notices that state the reasons in plain language, approved by compliance.
                4. A human review route with override records and response times.

                ## Notes
                Start from the **Product spec** template so reason codes, notices and the review route sit in one specification.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every automated adverse decision stores its main reasons, sends an approved plain-language notice and offers a human review with recorded outcomes."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Ask counsel to confirm notice and review duties for automated decisions"
                - "Specify the reason codes the decision logic must store"
                - "Draft plain-language notices for each reason code and get them approved"
                - "Design the human review route with override records"
            - name: Post-market surveillance for medical device software
              description: |-
                ## Purpose
                Once regulated health software is on the market, the manufacturer has to watch how it performs in real use: complaints, incidents, field data and trends that might change the risk picture. Product's part is feeding usage data, defect trends and user reports into the surveillance plan the regulatory lead owns, and acting on what it shows. A monthly data pull and a yearly summary keep the plan alive rather than a document written for the submission.

                ## Milestones
                1. The surveillance plan read and product's data inputs listed.
                2. A monthly pull of usage, defect and user report data delivered to the regulatory lead.
                3. Trends that touch identified hazards raised within a week.
                4. The yearly surveillance summary supplied with product's section complete.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Product delivers the surveillance data pull every month and its section of the yearly summary on time, with hazard-related trends raised within a week."
                cadence: cyclic
              tasks:
                - "Read the surveillance plan and list the data product is expected to supply"
                - "Deliver the usage, defect and user report data pull @recurring(monthly:27)"
                - "Raise any trend touching an identified hazard with the regulatory lead"
                - "Write product's section of the yearly surveillance summary @recurring(yearly)"
            - name: One control set for several regulatory regimes
              description: |-
                ## Purpose
                Products sold across sectors or countries can end up with five overlapping control lists for privacy, security, financial and health rules, each tested separately. Mapping them to one common set of product controls, each tagged with every obligation it satisfies, cuts duplicate testing and makes it clear what a new market adds. Compliance and audit teams increasingly expect this kind of mapping.

                ## Milestones
                1. Control lists from each regime the product is subject to gathered in one place.
                2. Overlapping controls merged into a common set with plain-language descriptions.
                3. Each common control tagged with every obligation it satisfies.
                4. The mapping reviewed by compliance and used for the next quarter's control testing.

                ## Notes
                Start from the **Compliance control** template for each common control.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A common product control set is tagged with every obligation it satisfies, reviewed by compliance and used in the next quarterly control test."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Gather the control lists from every regime the product is subject to"
                - "Merge overlapping controls into a common set with plain descriptions"
                - "Tag each common control with the obligations it satisfies"
                - "Review the mapping with compliance before the next control test"
            - name: Three-year regulatory strategy for the product line
              description: |-
                ## Purpose
                Experienced product leaders in regulated sectors treat regulation as part of strategy: which approvals to seek, which markets to enter in which order, where to invest in controls as a differentiator, and which coming rules could reshape the market. A short strategy paper written with compliance and the executive team, refreshed yearly, aligns the roadmap with the licences and approvals the business will need.

                ## Milestones
                1. Upcoming rules and approvals relevant to the next three years listed with likely dates.
                2. Two or three sequences for markets and approvals compared.
                3. A strategy paper of no more than six pages agreed with compliance and the executive team.
                4. The paper's commitments reflected in the roadmap.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A strategy paper of six pages or fewer is agreed by compliance and the executive team, and its commitments appear on the roadmap."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the rules and approvals likely to matter over the next three years"
                - "Compare two or three sequences for markets and approvals"
                - "Draft the strategy paper and review it with compliance and the executive team"
                - "Refresh the strategy paper before annual planning @recurring(yearly)"
---

# Regulated Product Requirements

This area is for product teams, enterprise product managers and founders building in finance, health or education, where rules shape what can be built, how fast and who signs off. It opens with foundations (the regulatory map, classification, decision rights, the data inventory and the requirements register), then the operating rhythms that keep compliance current, skills such as reading regulation and writing testable requirements, decisions on providers, licences and data location, dated events from submissions to audits, situations for founders, new product managers and acquisitions, and specialist work on automated decisions, post-market surveillance and regulatory strategy.

The rhythm is weekly for the compliance review and release classification, monthly for the change watch, traceability, complaints, regulated copy, claims, risk and evidence checks, quarterly for vendor oversight and control testing, and yearly for the requirements refresh and strategy paper. The Vendor, Compliance control, Risk register, Reading queue, Remediation plan and Product spec templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
