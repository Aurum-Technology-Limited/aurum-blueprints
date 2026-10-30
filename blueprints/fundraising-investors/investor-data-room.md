---
id: fundraising-investors.investor-data-room
name: Investor Data Room
description: "A diligence-ready data room: a clear numbered index, the right documents in every section, tiered access, a Q&A routine that keeps a live process moving and monthly upkeep between rounds."
category: business
version: 1.0.0
tags: [fundraising-investors, investor-data-room, founder, manager, due-diligence, virtual-data-room, document-management, disclosure]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - remediation-plan
    - operational-checklist
    - meeting-notes
    - compliance-control
    - risk-register
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investor Data Room
          description: "Assembling and maintaining a data room of corporate, financial, legal and product documents so diligence moves quickly."
          projects:
            - name: Data room owner, scope and deadline
              description: |-
                ## Purpose
                Diligence stalls when nobody owns the data room and every request circles between the founders, the bookkeeper and the lawyer before anything is uploaded. Naming one owner, the round the room is for and the date it must be investor-ready turns a vague chore into a project with an end, and it belongs before the first partner meeting, not after a term sheet.

                ## Milestones
                1. One named owner and one deputy recorded, with the hours each can give per week.
                2. The purpose of the room written in a sentence: which round, which investor types and roughly what size.
                3. A ready-by date set at least two weeks before the planned process launch.
                4. Everyone who will supply documents listed by section and told what is coming.

                ## Notes
                A founder can own the room, but the day-to-day upload work usually sits better with an operations or finance lead. The owner runs it; the founders approve what goes in.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page note naming the data room owner, deputy, purpose and ready-by date has been shared with every document supplier."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write one sentence saying which round the data room is for"
                - "Name the owner and a deputy and agree their weekly hours"
                - "Set a ready-by date two weeks before the process launch"
                - "List who supplies documents for each section and brief them"
            - name: Virtual data room platform choice
              description: |-
                ## Purpose
                Shared drive folders are fine for a handful of angels, but once several funds and their lawyers are reading at once you need per-folder permissions, watermarks, view logs and a Q&A tool. Comparing three platforms on the same criteria, including the real cost over six months, stops you paying M&A rates for a seed round or outgrowing a free tool halfway through a process.

                ## Milestones
                1. Requirements written: expected users, permission depth, Q&A, watermarking, analytics and a full export at the end.
                2. Three options, from general cloud storage to a dedicated virtual data room, scored against those requirements.
                3. Total cost estimated for a six-month process, including per-user, per-page or storage charges.
                4. A platform chosen and admin accounts set up with two-factor sign-in.

                ## Notes
                Start from the **Purchase decision** template. Before signing, confirm you can export the whole room with its index and audit log when the round closes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform has been chosen against written requirements, with a six-month cost estimate and every admin account protected by two-factor sign-in."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the features you need: permissions, watermarks, Q&A, view logs and export"
                - "Shortlist three platforms and request six-month pricing"
                - "Score each platform against the same requirement list"
                - "Confirm the full room and audit log can be exported at close"
                - "Set up admin accounts with two-factor sign-in"
            - name: Numbered folder structure and master index
              description: |-
                ## Purpose
                Counsel for an investor work from an index, and a room whose folders follow the order of a typical request list gets read faster and draws fewer repeat questions. A numbered structure (1 Corporate, 2 Financial, 3 Tax and so on) with a live index spreadsheet means everyone can cite 6.2.4 instead of describing a file in an email.

                ## Milestones
                1. Top-level sections agreed, typically corporate, financial, tax, contracts, people, IP, product and technology, commercial, regulatory and insurance.
                2. Sub-folders numbered two levels deep, with no loose files sitting at the top level.
                3. An index spreadsheet listing every folder number, title, owner, tier and status.
                4. The structure checked against one real investor request list and empty numbered folders added for anything missing.

                ## Notes
                Keep numbers stable once investors are in. Add new items at the end of a section rather than renumbering, or every earlier reference in emails and Q&A breaks.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered folder structure two levels deep exists in the platform and is mirrored by an index spreadsheet with an owner and status for every folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the top-level sections on one page"
                - "Number the sub-folders two levels deep"
                - "Build the index with number, title, owner, tier and status columns"
                - "Compare the structure with one real investor request list"
            - name: Document inventory against a diligence request list
              description: |-
                ## Purpose
                Most founders discover what is missing when an investor's lawyer asks for it, which is the slowest and most awkward moment to find out. Walking a standard request list line by line before launch, and marking each item as held, unsigned, out of date or missing, produces a gap list weeks before anyone outside the company sees the room.

                ## Milestones
                1. A standard diligence request list for your stage obtained from your lawyer or a published model.
                2. Every line marked held, needs signature, out of date or missing.
                3. The current home of each held document noted, whether email, drive or the accountant's system.
                4. A gap list of every unsigned, out of date or missing item, with an owner against each.

                ## Notes
                Ask your lawyer for the list their firm sends when it acts for investors. It is the closest preview you will get of what actually arrives.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every line of a standard request list has a status and a location, and every gap has a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your lawyer for the diligence request list they use for investors"
                - "Mark each line as held, needs signature, out of date or missing"
                - "Note where each held document currently lives"
                - "Turn the gaps into a list with an owner for each"
            - name: File naming, versioning and format rules
              description: |-
                ## Purpose
                Three files called Final, Final v2 and Final signed tell an investor's counsel that the company is not sure which version governs. A short naming rule with folder number, plain title, date and an executed marker, plus a rule that signed documents go in as searchable PDFs, makes the room look as organised as you want the company to seem.

                ## Milestones
                1. A naming rule written, for example 4.1.3 Acme master services agreement 2025-03-14 EXECUTED.
                2. A rule that executed versions are searchable PDFs and drafts are never uploaded unless someone asks for them.
                3. Files already gathered renamed to the rule before upload.
                4. The rule pinned at the top of the index so every contributor follows it.

                ## Notes
                Run scanned signature pages through text recognition so the platform's search finds words inside them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written naming and format rule sits at the top of the index and every uploaded file follows it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the naming rule with folder number, title, date and status"
                - "Rename the files already gathered to match the rule"
                - "Run text recognition on scanned signed documents"
                - "Pin the rule at the top of the index"
            - name: Access tiers and permission groups
              description: |-
                ## Purpose
                Not every visitor should see everything on day one: a fund after a first meeting needs the deck and headline metrics, while the lead's lawyers in confirmatory diligence need customer contracts and payroll. Designing three or four access tiers up front lets you open the room in stages and change one group's rights without editing every user.

                ## Milestones
                1. Three or four tiers defined, such as overview, full commercial, confirmatory and internal only.
                2. Every folder mapped to the lowest tier allowed to see it.
                3. Permission groups created in the platform to match, with view, download and print set per group.
                4. A rule written for who may move an investor from one tier to the next.

                ## Notes
                Keep an internal-only tier for working drafts and papers you may never share, so they never sit in a shared folder by accident.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every folder is mapped to an access tier, permission groups in the platform match the tiers and a named person approves tier changes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define three or four access tiers in one table"
                - "Map every folder to the lowest tier that may see it"
                - "Create matching permission groups in the platform"
                - "Agree who can move an investor from one tier to the next"
            - name: Data room confidentiality and access terms
              description: |-
                ## Purpose
                Many venture funds will not sign a non-disclosure agreement at the early stages, yet you still want visitors to accept some terms before reading customer names or salaries. Deciding with your lawyer what click-through terms say, which tiers need a signed agreement and what stays out until one exists protects you without slowing every introduction.

                ## Milestones
                1. Your lawyer's view recorded on which tiers need a signed confidentiality agreement and which a click-through notice.
                2. Click-through access terms approved and switched on in the platform.
                3. A short list of items held back until a signed agreement is in place.
                4. A register of signed agreements linked from the index.

                ## Notes
                Corporate and strategic investors are the usual exception: expect to negotiate a full agreement before they enter the commercial tiers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Approved click-through terms are live, the tiers needing a signed agreement are written down and every signed agreement is logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lawyer which tiers need a signed confidentiality agreement"
                - "Get click-through access terms drafted and approved"
                - "List the documents held back until an agreement is signed"
                - "Start a register of signed agreements in the index"
            - name: Corporate records and minute book section
              description: |-
                ## Purpose
                Investors check that the company legally exists in the form the deck describes and that every past share issue was properly approved. Gathering the incorporation certificate, constitution or articles, statutory registers, board minutes, shareholder resolutions and registry filings in one numbered section answers a large part of the legal request list in one go.

                ## Milestones
                1. Incorporation documents and the current constitution or articles uploaded, with any amendments in date order.
                2. Registers of members, directors and charges up to date and matching the company registry's public record.
                3. Every board minute and written resolution since incorporation filed, signed and in date order.
                4. Missing approvals, such as an unratified share issue, listed and passed to your lawyer.

                ## Notes
                If the share register does not match the cap table export you plan to share, fix that before launch. The cap table lives in its own system; the room only holds a dated export.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The corporate section holds signed constitutional documents, registers matching the public record and every minute and resolution in date order."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Download the company's filing history from the company registry"
                - "Gather every signed board minute and written resolution in date order"
                - "Check the share register against the latest cap table export"
                - "Send any missing or unsigned approvals to your lawyer"
            - name: Financial section with accounts and bank evidence
              description: |-
                ## Purpose
                Financial diligence starts by checking that the numbers in the deck and model come from real books. A section holding filed or audited accounts, monthly management accounts, bank statements, a debt schedule and revenue by customer lets a fund's analyst tie the story to evidence in an afternoon rather than a fortnight of emails.

                ## Milestones
                1. Statutory or audited accounts for every completed year uploaded.
                2. Monthly management accounts for the last 24 months, or since trading began, in one consistent format.
                3. Bank statements and a reconciliation for the most recent quarter included.
                4. A schedule of all borrowing, guarantees and grants with their key terms.
                5. Revenue by customer by month exported from the accounting system.

                ## Notes
                The forward model and the deck belong in their own folders. This section is the historic record the model gets tested against.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The financial section holds annual accounts, at least 24 months of management accounts, a recent bank reconciliation, a debt schedule and revenue by customer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your accountant for every set of filed or audited accounts"
                - "Export monthly management accounts in one consistent format"
                - "Build a schedule of loans, guarantees and grants with key terms"
                - "Export revenue by customer by month from the accounting system"
            - name: Data room gap remediation plan
              description: |-
                ## Purpose
                The inventory always turns something up: a contractor who never signed an IP assignment, an option grant that was never minuted, a lease that expired last year. Treating the gaps as a dated plan with an owner and a fix for each, rather than a worry list, closes most of them before investors arrive and gives the rest a prepared explanation.

                ## Milestones
                1. Every gap from the inventory ranked by how much it would concern an investor.
                2. A fix, an owner and a target date set for each high-ranked gap.
                3. Each fixed item uploaded and its index line changed to complete.
                4. A short written explanation agreed for any gap that cannot be fixed before launch.

                ## Notes
                Start from the **Remediation plan** template. Ratifying resolutions and confirmatory assignments are common and unremarkable; let your lawyer draft them rather than improvising.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every high-ranked gap is either closed and uploaded or has a written explanation agreed with your lawyer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rank every gap by how much it would concern an investor"
                - "Give each high-ranked gap a fix, an owner and a target date"
                - "Ask your lawyer to draft ratifying resolutions or confirmatory assignments"
                - "Mark each closed gap as complete in the index"
            - name: Material contracts section and summary table
              description: |-
                ## Purpose
                Investors read your largest customer, supplier and partner contracts for terms that change what the company is worth: change of control, exclusivity, most favoured customer pricing, uncapped liability and termination for convenience. Uploading the material contracts with a one-row summary of each saves their counsel hours and lets you spot an awkward clause before they do.

                ## Milestones
                1. A threshold agreed for what counts as material, for example the top ten customers by revenue and anything above a set value.
                2. Every material contract uploaded in executed form with all amendments.
                3. A summary table covering parties, term, value, renewal, change of control, exclusivity, liability cap and termination rights.
                4. Clauses that could worry an investor flagged to the founders and your lawyer.

                ## Notes
                Check each contract's confidentiality clause before uploading it; some need the other party's consent or a redacted version first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every contract above the agreed threshold is uploaded with amendments and summarised in a table covering at least eight key terms."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the threshold for a material contract with the founders"
                - "Collect executed copies and amendments for every contract above it"
                - "Ask the agent to draft first-pass summary rows from the uploaded contracts"
                - "Check each summary row against the contract itself"
                - "Flag awkward clauses to your lawyer before launch"
            - name: People section with agreements and org chart
              description: |-
                ## Purpose
                People are much of what an investor is buying, and diligence checks that everyone on the org chart is engaged on proper terms, has assigned their work to the company and holds the options the cap table says. A people section with a current org chart, template agreements, a signing tracker and anonymised pay bands answers those questions without exposing anyone's personal file.

                ## Milestones
                1. A current org chart with roles, start dates and location, and no home addresses or dates of birth.
                2. Template employment, contractor and adviser agreements uploaded with a tracker of who signed which version.
                3. An anonymised payroll summary by role band, with benefits and bonus schemes described.
                4. Option plan rules and a grant summary that matches the cap table export.
                5. Any key person without a signed agreement passed to the remediation plan.

                ## Notes
                Share named salaries only in the confirmatory tier and only when asked. Most early investors are satisfied with bands.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The people section holds a current org chart, agreement templates with a signing tracker, anonymised pay bands and an option summary matching the cap table."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export a current org chart with roles and start dates"
                - "Build a tracker of who signed which agreement version"
                - "Prepare an anonymised payroll summary by role band"
                - "Refresh the org chart and signing tracker @recurring(quarterly)"
            - name: Intellectual property chain of title file
              description: |-
                ## Purpose
                For a software or deep tech company the IP is often most of the value, and the classic diligence finding is code or designs written before incorporation, or by a contractor, that the company never formally acquired. A chain of title file shows how each founder, employee and contractor's work came to belong to the company, and lists registered rights, domains and key licences.

                ## Milestones
                1. A list of everyone who has created code, designs or content for the company, with dates.
                2. A signed invention or IP assignment located for each person, or the gap passed to remediation.
                3. Founder assignments covering work done before the company was incorporated.
                4. Trademarks, patents and applications listed with numbers, owners and renewal dates.
                5. Domain names, code repositories and app store accounts confirmed as held in the company's name.

                ## Notes
                Domains and repositories registered to a founder's personal account are a frequent and easily fixed finding. Move them now, not during diligence.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every contributor has a located IP assignment or a remediation entry, and all registered rights, domains and accounts are listed in the company's name."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List everyone who has written code, designs or content for the company"
                - "Find the signed IP assignment for each person on the list"
                - "Check domains and code repositories are held by the company"
                - "List trademarks and patents with numbers and renewal dates"
            - name: Product and technology section
              description: |-
                ## Purpose
                Technical diligence ranges from a partner clicking through a demo to a specialist firm interviewing your engineers, and both go better with a prepared folder. An architecture overview, a dated roadmap, a list of hosting and third-party services, security policies and the latest penetration test summary let a reviewer form a view before the call and ask sharper questions during it.

                ## Milestones
                1. A two-page architecture overview with a diagram, hosting provider and main dependencies.
                2. The current roadmap with the next two quarters marked committed and the rest marked as intent.
                3. A list of critical third-party services and what happens if each one fails.
                4. Security policies, the latest penetration test summary and any certification reports in the confirmatory tier.

                ## Notes
                Upload the executive summary of a penetration test, not the full findings, unless a reviewer under a signed agreement asks for more.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The technology section holds an architecture overview, a dated roadmap, a third-party service list and current security evidence in the right tiers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the technical lead for a two-page architecture overview"
                - "Export the roadmap and mark committed versus intended items"
                - "List critical third-party services and the impact if each fails"
                - "Upload the latest penetration test summary @recurring(yearly)"
            - name: Commercial evidence on customers, cohorts and pipeline
              description: |-
                ## Purpose
                Commercial diligence tests whether the traction in the deck is real and repeatable, usually through customer lists, cohort retention, pipeline and a handful of reference calls. Dated customer data at the right tier, cohort tables and a pipeline export remove any suspicion that numbers were picked to flatter, and they let the analyst run their own cuts.

                ## Milestones
                1. A customer list with start date, plan, annual value and status, anonymised for the early tiers.
                2. Monthly cohort tables for retention and revenue expansion since launch.
                3. A dated pipeline export with written stage definitions.
                4. Three to five customers who have agreed to take a reference call, with their contact details kept internal until needed.

                ## Notes
                Never hand out reference customers by default. Ask them first and pace the calls so no customer hears from five funds in one week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Dated customer, cohort and pipeline files sit in the commercial section and at least three customers have agreed to take reference calls."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export a dated customer list with value and status"
                - "Build monthly cohort tables for retention and expansion"
                - "Ask three to five customers whether they will take a reference call"
                - "Refresh the cohort tables and pipeline export @recurring(quarterly)"
            - name: Deck-to-data reconciliation pack
              description: |-
                ## Purpose
                Nothing damages trust in diligence faster than a deck number that cannot be found in the room, or that differs from the accounts. A reconciliation pack lists every figure in the pitch deck and model summary, the file and cell it comes from and the definition used, so the analyst can tick each one off and your team gives the same answer every time.

                ## Milestones
                1. Every number in the current deck listed in one table.
                2. Each number traced to a source file and location in the data room.
                3. Definitions written for ambiguous metrics such as annual recurring revenue, active users and net retention.
                4. Every mismatch either corrected in the deck or explained in a note.

                ## Notes
                Redo the pack whenever the deck changes. A stale reconciliation does more harm than none.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every figure in the current deck is traced to a file in the room with a written definition, and no unexplained mismatch remains."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every number in the current pitch deck in a table"
                - "Trace each number to a source file and location in the room"
                - "Write definitions for recurring revenue, active users and retention"
                - "Correct or explain every mismatch you find"
            - name: Monthly management accounts upload
              description: |-
                ## Purpose
                Last quarter's figures in a room force an investor to ask for an update and make the company look slower than it is. Uploading each month's management accounts, bank reconciliation and KPI workbook within ten days of month end keeps the financial section current whether or not a raise is live, so a pre-emptive approach finds you ready.

                ## Milestones
                1. An upload day each month agreed with the bookkeeper or finance lead.
                2. Each month's accounts, reconciliation and KPI workbook uploaded under the naming rule.
                3. The index updated to show the latest month held.
                4. Twelve consecutive monthly uploads in place with no gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Management accounts, reconciliation and KPI workbook for each month appear in the room within ten days of month end for twelve months running."
                cadence: rolling
              tasks:
                - "Agree an upload day with your bookkeeper or finance lead"
                - "Upload last month's management accounts and bank reconciliation @recurring(monthly:8)"
                - "Update the KPI workbook and the latest-month column in the index @recurring(monthly:9)"
                - "Check year-to-date figures still agree with the deck reconciliation"
            - name: New contracts and new starters filing
              description: |-
                ## Purpose
                Every signed customer deal, supplier agreement and new hire changes what the room should hold, and leaving them to pile up means a frantic catch-up just before a process. A short monthly filing slot keeps the contract table and people tracker current, and catches an unsigned IP assignment while the new starter is still easy to reach.

                ## Milestones
                1. One folder or mailbox tag where signed documents land during the month.
                2. New executed contracts filed and added to the summary table each month.
                3. New starters' signed employment and IP agreements filed and the tracker updated.
                4. No signed document older than one month left unfiled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No executed contract or new starter agreement stays more than a month without being filed and recorded in its tracker."
                cadence: rolling
              tasks:
                - "Set up one folder where signed documents land during the month"
                - "File new executed contracts and add their summary rows @recurring(monthly:15)"
                - "File new starters' signed agreements and update the tracker @recurring(monthly:16)"
                - "Chase any new starter whose IP assignment is still unsigned"
            - name: Board minutes and resolutions filing rhythm
              description: |-
                ## Purpose
                Board approvals are what make option grants, share issues and large contracts valid, and an unsigned minute from eight months ago is one of the commonest diligence findings. Filing signed minutes and written resolutions every quarter, and checking that each approval referred to elsewhere in the room actually exists, keeps the corporate section clean.

                ## Milestones
                1. A rule that minutes are signed within a month of each board meeting.
                2. Signed minutes and resolutions filed each quarter in date order.
                3. Option grants made in the period matched to an approving resolution.
                4. Any missing signature chased with the chair or company secretary.

                ## Notes
                Preparing board packs is separate work. This project only makes sure the signed record reaches the room.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Signed minutes and resolutions for every board meeting in the last four quarters are filed, and every option grant has a matching approval."
                cadence: rolling
              tasks:
                - "Check the last four board meetings all have signed minutes"
                - "File the quarter's signed minutes and written resolutions @recurring(quarterly)"
                - "Match each option grant in the period to its approving resolution"
                - "Chase missing signatures with the chair or company secretary"
            - name: Quarterly evergreen data room review
              description: |-
                ## Purpose
                Between rounds a room quietly decays: insurance certificates expire, the org chart falls two hires behind and old drafts creep into shared folders. A quarterly review against the index keeps the room within a week of investor-ready, which matters when an unsolicited term sheet arrives with a ten-day deadline.

                ## Milestones
                1. Every index line checked for currency at least once a quarter.
                2. Out of date documents replaced or marked as superseded.
                3. Stray drafts and personal files moved to the internal-only tier or removed.
                4. A readiness score recorded each quarter as the share of index lines that are current.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A readiness percentage is recorded every quarter and stays above 90 percent of index lines current for four quarters running."
                cadence: cyclic
              tasks:
                - "Record today's readiness as the share of index lines that are current"
                - "Walk the index and mark out of date items @recurring(quarterly)"
                - "Replace or supersede each out of date document"
                - "Move stray drafts into the internal-only tier"
            - name: Permission audit and leaver access removal
              description: |-
                ## Purpose
                Access granted during a raise often outlives it: an associate who has moved firms, a fund that passed, a former employee still in the admin group. A monthly look at who can see what, with prompt removal for anyone who no longer needs it, keeps confidential documents with the people you meant them for.

                ## Milestones
                1. A full user list exported with group, last sign-in and who invited each person.
                2. Users from funds that passed or went quiet removed or downgraded.
                3. Former staff and advisers removed in the week they leave.
                4. Admin rights limited to two or three named people.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly audit leaves no user without a current reason for access and no more than three admins."
                cadence: rolling
              tasks:
                - "Export the user list with group and last sign-in date"
                - "Remove users from funds that passed and from departed staff @recurring(monthly:22)"
                - "Cut admin rights back to two or three named people"
                - "Add a data room step to the staff offboarding checklist"
            - name: Diligence Q&A log and response routine
              description: |-
                ## Purpose
                During a live process questions arrive from several funds and their advisers at once, and the same question answered two ways by two people becomes a credibility problem. One Q&A log with an owner, a reviewer and a target turnaround per question, triaged at least twice a week, keeps answers consistent and the process moving.

                ## Milestones
                1. One Q&A log in the platform or a shared sheet with question, asker, owner, reviewer, status and answer.
                2. A target turnaround agreed, such as two working days for routine questions.
                3. Every answer reviewed by a second person before release.
                4. Answers that rely on documents cite the index number.

                ## Notes
                Route anything legal, tax or employment related through your lawyer or accountant before it goes out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every diligence question in a live process has an owner and a reviewer and is answered within the agreed turnaround, with index numbers cited."
                cadence: rolling
              tasks:
                - "Set up the Q&A log with owner, reviewer and status columns"
                - "Agree a two working day turnaround for routine questions"
                - "Triage new questions and assign owners @recurring(weekly:mon,thu)"
                - "Have a second person review each answer before it is released"
            - name: Investor viewing activity review
              description: |-
                ## Purpose
                Platform analytics show which funds opened which folders and for how long, a useful if imperfect signal of interest during a live process. A short Friday review of activity by fund helps you decide whom to chase, who may need a call to clear a concern and when a fund has quietly stopped.

                ## Milestones
                1. An activity report by fund pulled each week of a live process.
                2. Each fund's pattern noted in the fundraising pipeline, for example legal folders opened after a partner meeting.
                3. Funds with two weeks of no activity followed up.
                4. A caution kept in mind that some readers download and read offline, so low activity is not proof of low interest.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A weekly activity note for each fund in process is recorded in the pipeline for the whole duration of the raise."
                cadence: rolling
              tasks:
                - "Find the activity report by group in the platform"
                - "Note each fund's viewing pattern in the pipeline @recurring(weekly:fri)"
                - "Ask the agent to summarise the week's activity report by fund"
                - "Follow up any fund with two silent weeks"
            - name: Year-end accounts and tax filings upload
              description: |-
                ## Purpose
                Annual accounts, corporate tax returns, payroll year-end returns and sales tax or VAT filings are among the first things tax diligence asks for, and they are filed at scattered points in the year. A yearly upload slot after the accounts are filed, built on a calendar of every filing the company makes, keeps the tax folder complete without relying on memory.

                ## Milestones
                1. A list of every recurring filing the company makes, with its usual month, agreed with the accountant.
                2. Each year's filed accounts and returns uploaded with filing receipts.
                3. Tax authority correspondence and any enquiry filed in the confirmatory tier.
                4. Research and development or similar tax credit claims filed with their supporting reports.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Filed accounts and every tax return for the last completed year, with receipts, are in the room within a month of filing."
                cadence: cyclic
              tasks:
                - "Ask your accountant for a list of every filing the company makes each year"
                - "Upload the year's filed accounts and returns with receipts @recurring(yearly)"
                - "File tax authority letters in the confirmatory tier"
                - "Add tax credit claims with their supporting reports"
            - name: Expiring documents and renewals watch
              description: |-
                ## Purpose
                Insurance certificates, office leases, licences, good standing certificates and key supplier contracts all expire, and an expired certificate in a data room reads like a lapsed policy. A simple register of expiry dates, checked at the start of each month, gives you time to renew before an investor notices.

                ## Milestones
                1. A register of every dated document with its expiry or renewal date.
                2. An owner named for each renewal.
                3. Renewed documents uploaded and old versions marked superseded.
                4. Insurance cover reviewed yearly with your broker against what investors usually expect.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No document in the room is past its expiry date at any monthly check for twelve months running."
                cadence: rolling
              tasks:
                - "List every dated document with its expiry or renewal date"
                - "Check the register for anything expiring in the next 60 days @recurring(monthly:3)"
                - "Upload renewed documents and mark old ones superseded"
                - "Review insurance cover with your broker before renewal @recurring(yearly)"
            - name: How diligence changes from pre-seed to growth
              description: |-
                ## Purpose
                Pre-seed angels may look at ten documents, while a growth fund can send a 300-line request list and appoint accountants, lawyers and technical reviewers. Knowing what each stage typically checks lets you build the room you need now, with space to grow, instead of over-preparing for a seed round or under-preparing for a Series A.

                ## Milestones
                1. Notes on what angels, seed funds, Series A funds and growth investors typically check, from at least three sources.
                2. Two founders who recently raised at your next stage asked what their diligence actually covered.
                3. A one-page table of must-have, nice-to-have and later items for your next round.
                4. The table compared with your index and any missing sections added.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page table of must-have, nice-to-have and later diligence items for your next round exists, informed by two founder conversations."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read three published guides to venture diligence at different stages"
                - "Ask two recent founders what their diligence actually covered"
                - "Write the must-have, nice-to-have and later table"
                - "Compare the table with your index and add missing sections"
            - name: Reading a legal diligence request list
              description: |-
                ## Purpose
                The first legal request list from an investor's counsel can run to dozens of pages, and founders often read every line as an accusation. Learning how these lists are built, which items are boilerplate, which are tailored to you and which can be answered with not applicable makes the response faster and calmer.

                ## Milestones
                1. One sample request list walked through item by item with your lawyer.
                2. Items sorted into standard, tailored to the company and not applicable.
                3. A glossary of unfamiliar terms such as encumbrances, related party transactions and change of control.
                4. Written not applicable answers drafted rather than leaving items blank.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sample request list is annotated as standard, tailored or not applicable, with a glossary of at least ten terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an hour with your lawyer to walk a sample request list"
                - "Sort the items into standard, tailored and not applicable"
                - "Build a glossary of the terms you did not know"
                - "Draft written not applicable answers for items that do not fit"
            - name: Personal data and redaction in diligence
              description: |-
                ## Purpose
                Data rooms often hold personal data about staff and customers, and data protection law in many countries still applies when you share it with investors. Learning what to anonymise, what to redact and when to rely on a signed agreement, then practising true redaction rather than black boxes over live text, stops a well meant upload turning into a breach.

                ## Milestones
                1. The data protection rules that apply to the company summarised with your lawyer or privacy lead.
                2. A list of document types that carry personal data, such as payroll, customer exports and employment files.
                3. A redaction method chosen that removes the underlying text, tested on a sample file.
                4. A rule written for when named data may enter the confirmatory tier.

                ## Notes
                A black shape drawn over text in a PDF often leaves the text searchable underneath. Use a proper redaction tool and test by searching the output.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule for personal data in the room exists and a test file proves the chosen redaction method removes the underlying text."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your lawyer or privacy lead which data protection rules apply"
                - "List the document types in the room that hold personal data"
                - "Redact a sample file and search it to prove the text is gone"
                - "Write the rule for when named data may be shared"
            - name: Financial diligence questions investors ask
              description: |-
                ## Purpose
                Financial diligence questions cluster around a few themes: how revenue is recognised, whether gross margin includes every delivery cost, how deferred revenue and accruals are treated and whether one-off items were taken out fairly. Working through those themes with your accountant before the process means the finance answers are ready, consistent and backed by the books.

                ## Milestones
                1. A list of the twenty financial questions most often asked at your stage, from your accountant or published checklists.
                2. A draft answer for each, with its source in the accounts noted.
                3. Revenue recognition and cost classification policies written down in plain language.
                4. One-off or adjusted items listed with the reason for each adjustment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Draft answers to twenty common financial diligence questions exist, each tied to a source in the accounts and reviewed by your accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your accountant which financial questions investors usually raise"
                - "Draft an answer and a source for each question"
                - "Write your revenue recognition policy in plain language"
                - "Have your accountant review the draft answers"
            - name: Technical and security diligence expectations
              description: |-
                ## Purpose
                Technical diligence asks whether the product can scale, whether the code is maintainable and whether customer data is safe, and the evidence expected rises sharply at Series A and beyond. Learning what reviewers usually ask for, from an architecture walk-through to security certifications, lets the technical lead prepare evidence instead of improvising on a call.

                ## Milestones
                1. A list of common technical diligence questions gathered with the technical lead.
                2. Each question mapped to an existing document or marked as a gap.
                3. A view on whether target investors and customers expect a security certification.
                4. A practice architecture walk-through given to someone outside the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Common technical diligence questions are each mapped to evidence or a gap, and the technical lead has given one practice walk-through."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather common technical diligence questions with the technical lead"
                - "Map each question to a document or mark it as a gap"
                - "Ask target customers and investors whether they expect a security certification"
                - "Run a practice architecture walk-through with an outside engineer"
            - name: Open source licence check for technical diligence
              description: |-
                ## Purpose
                Reviewers increasingly scan code for open source components under licences that could require you to publish your own source or restrict commercial use. Learning the main licence families and running a scan yourself turns a surprise late finding into a known list with a remediation note for each risky component.

                ## Milestones
                1. The difference between permissive and copyleft licence families understood well enough to explain to a founder.
                2. A software composition scan run across the main repositories.
                3. A list of components under licences that need attention, with how each is used.
                4. A remediation note or legal view recorded for every flagged component.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated licence scan of the main repositories exists, with a remediation note or legal view recorded for each flagged component."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain-language summary of permissive and copyleft licences"
                - "Run a software composition scan on the main repositories"
                - "List flagged components and how the product uses each one"
                - "Get a legal view on any component that could affect commercial use"
            - name: Cover notes for complex documents
              description: |-
                ## Purpose
                Long documents such as a 90-page credit agreement or a shareholders' agreement with three side letters are hard to read cold, and a reader left guessing what matters asks more questions. A half-page cover note for each of the ten most complex documents, stating what it is, its key terms and anything unusual, guides the reader and shows the team understands its own commitments.

                ## Milestones
                1. The ten most complex documents in the room chosen.
                2. A cover note of half a page or less written for each, in one consistent format.
                3. Each note checked by your lawyer for accuracy.
                4. Notes filed beside their documents and referenced in the index.

                ## Notes
                Keep cover notes factual. Describe what a clause says, not your legal conclusion about it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten complex documents each have a lawyer-checked cover note of half a page or less filed beside them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the ten most complex documents in the room"
                - "Agree a cover note format with purpose, key terms and unusual points"
                - "Ask the agent to draft first versions of the cover notes"
                - "Have your lawyer check each note for accuracy"
            - name: Staged disclosure decision
              description: |-
                ## Purpose
                Opening everything to every fund on day one exposes customer pricing and salaries to firms that may never invest, and some of which may back a competitor. Deciding which documents are released at which stage of the process, and what event triggers each release, balances the speed of diligence against the cost of oversharing.

                ## Milestones
                1. Each section assigned a release stage: before first meeting, after partner meeting or after term sheet.
                2. Triggers for moving a fund to the next stage written down.
                3. The plan checked against the access tiers already built in the platform.
                4. The founders and the room owner agreed on the plan in writing.

                ## Notes
                Competitive processes move faster when the second stage opens to all serious funds at once. Staging protects the most sensitive items; it should not slow everyone down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written release plan assigns every section to a stage and names the trigger for each move, agreed by the founders."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Assign each section to a release stage"
                - "Write the trigger for moving a fund to each next stage"
                - "Check the plan against the access tiers in the platform"
                - "Get the founders to agree the plan in writing"
            - name: Watermark, download and print settings
              description: |-
                ## Purpose
                Dynamic watermarks with the viewer's name, view-only access and disabled printing all deter casual forwarding, but they also frustrate advisers who need to read offline. Choosing settings folder by folder, rather than locking everything, protects what matters most and keeps the rest of the room easy to use.

                ## Milestones
                1. Folders sorted into open download, watermarked download and view only.
                2. Dynamic watermarks showing viewer name and date switched on where chosen.
                3. Settings tested by signing in as a test user in each group.
                4. The settings recorded in the index so you can explain them when asked.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every folder has a recorded download setting, and a test user in each group has confirmed watermarks and restrictions work."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort folders into open, watermarked and view-only"
                - "Switch on viewer-name watermarks where chosen"
                - "Sign in as a test user in each group to check the settings"
                - "Record the download settings in the index"
            - name: Clean team protocol for a strategic investor
              description: |-
                ## Purpose
                When a corporate investor competes with you or sells to the same customers, competition law and common sense both argue against its business teams seeing your pricing, customer names or roadmap. A clean team protocol agreed with your lawyer limits the most sensitive folders to named individuals outside the commercial teams, or to outside advisers only.

                ## Milestones
                1. Your lawyer's advice recorded on whether a clean team is needed and what it should cover.
                2. A list of competitively sensitive documents that only the clean team may see.
                3. Clean team members and their roles confirmed in writing by the investor.
                4. A separate permission group created and tested for the clean team.

                ## Notes
                Competition rules differ by country and by how closely you compete. Take advice before sharing anything sensitive with a competitor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A clean team protocol approved by your lawyer is in place, with named members and a tested permission group holding the sensitive folders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your lawyer whether the strategic investor needs a clean team"
                - "List the competitively sensitive documents to ring-fence"
                - "Get the investor to confirm clean team names and roles in writing"
                - "Create and test a separate clean team permission group"
            - name: Reusable diligence answer library
              description: |-
                ## Purpose
                Every round, and often every fund within a round, asks many of the same questions: how you define an active customer, why a large customer churned, what the option pool covers. Keeping approved answers in a library, dated and linked to evidence, cuts response time next time and keeps the story consistent across years and people.

                ## Milestones
                1. Answers from the last process exported from the Q&A log.
                2. Duplicates merged into one approved answer per question, with a date and approver.
                3. Each answer linked to the index number of its evidence.
                4. New approved answers added after each batch of questions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A library of dated, approved answers linked to evidence exists and grows after each batch of diligence questions."
                cadence: rolling
              tasks:
                - "Export answered questions from the last process"
                - "Merge duplicates into one approved answer each"
                - "Link each answer to the index number of its evidence"
                - "Add newly approved answers to the library @recurring(monthly:27)"
            - name: Lawyer pre-review of the data room
              description: |-
                ## Purpose
                Your own counsel reading the room as if they acted for the investor is the cheapest diligence you will ever buy, because they spot the same issues for a fraction of the cost of finding them mid-negotiation. A focused review of the corporate, contracts, people and IP sections before launch produces a short list of fixes and agreed explanations.

                ## Milestones
                1. A fixed-scope, fixed-fee review agreed with your lawyer before work starts.
                2. The review completed across the corporate, contracts, people and IP sections.
                3. A written list of findings ranked by seriousness.
                4. Each finding fixed, explained or accepted, and the list shared with the Q&A team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written lawyer review of four core sections exists, and every finding is fixed, explained or consciously accepted before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your lawyer for a fixed-fee quote to pre-review the room"
                - "Give them access to the corporate, contracts, people and IP sections"
                - "Go through the ranked findings with the founders"
                - "Fix, explain or accept each finding and record which"
            - name: Customer confidentiality checks before sharing contracts
              description: |-
                ## Purpose
                Many customer and supplier contracts forbid disclosing their terms, or even the relationship, without consent, and uploading them anyway can put you in breach before the round closes. Checking each contract's confidentiality clause and choosing to seek consent, redact the counterparty or summarise instead keeps the company within its promises.

                ## Milestones
                1. Confidentiality clauses read for every material contract.
                2. Each contract marked as share freely, share redacted, share with consent or summarise only.
                3. Consent requests sent where needed and the replies filed.
                4. Redacted versions prepared and checked before upload.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every material contract has a recorded sharing decision based on its confidentiality clause, with consents or redacted versions filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the confidentiality clause in each material contract"
                - "Mark each contract as share, redact, consent or summarise only"
                - "Send consent requests to the customers that need them"
                - "Prepare and check redacted versions before upload"
            - name: Data room launch for a priced round
              description: |-
                ## Purpose
                The day the first funds get access sets the tone for the whole process: a complete, well indexed room says the company is organised, while a half-empty one invites a slower and more sceptical diligence. A dated launch with a final checklist, test users and a short welcome note means every fund starts from the same finished room.

                ## Milestones
                1. A launch date fixed against the fundraising timetable.
                2. Every must-have index line marked complete, with the rest visibly marked as coming.
                3. Test users in each tier confirm what they can and cannot see.
                4. A welcome note uploaded explaining the structure, the Q&A route and who to contact.

                ## Notes
                Start from the **Operational checklist** template for the final launch check.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the launch date every must-have index line is complete, test users have confirmed permissions and a welcome note is live."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Fix the launch date against the fundraising timetable"
                - "Run the final checklist on every must-have index line"
                - "Test access with a dummy user in each tier"
                - "Upload a welcome note with the structure, Q&A route and contact"
            - name: Confirmatory diligence sprint after a term sheet
              description: |-
                ## Purpose
                After a term sheet the lead's lawyers and accountants usually want a great deal in a short window, and delays here push out closing or invite a renegotiation. Running confirmatory diligence as a dated sprint, with a named answerer per section, a short morning check of open requests and a standing call with investor counsel, protects the timetable.

                ## Milestones
                1. The lead investor's confirmatory request list mapped to index numbers within three working days.
                2. Open requests tracked with an owner and due date.
                3. A standing call with the investor's counsel held until the list closes.
                4. Every request answered, provided or formally declined before the target signing date.

                ## Notes
                Signing the legal documents and getting the money in are a separate job. This sprint ends when the diligence list is closed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every confirmatory request is answered, provided or formally declined before the target signing date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Map the confirmatory request list to index numbers"
                - "Name an answerer for each section of the list"
                - "Book a standing call with the investor's counsel"
                - "Review open requests at a short stand-up each morning of the sprint"
            - name: Investor counsel diligence call preparation
              description: |-
                ## Purpose
                Diligence calls with the investor's lawyers or accountants often decide whether an issue becomes a specific indemnity, a closing condition or a footnote. Preparing an agenda, the likely questions, the relevant index numbers and who answers what keeps the founders calm and means the record of the call is yours as well as theirs.

                ## Milestones
                1. An agenda agreed in advance with investor counsel.
                2. Likely questions listed with the answerer and evidence for each.
                3. Your own lawyer briefed and present where legal points are expected.
                4. Notes of the call written up within a working day, with follow-ups assigned.

                ## Notes
                Start from the **Meeting notes** template so every diligence call is recorded the same way.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each diligence call has an agreed agenda, a prepared answer sheet and written notes with follow-ups circulated within one working day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask investor counsel for an agenda before the call"
                - "List likely questions with the answerer and evidence for each"
                - "Brief your own lawyer on the points likely to come up"
                - "Write up the call notes and assign follow-ups within a day"
            - name: Disclosure letter cross-reference to the index
              description: |-
                ## Purpose
                In many priced rounds the company gives warranties and then discloses exceptions against them, often by reference to documents in the data room. Building a cross-reference between each warranty your lawyer drafts and the index numbers that bear on it, and fixing the room's contents at a dated snapshot, gives your lawyer what they need to draft disclosure properly.

                ## Milestones
                1. The draft warranty list obtained from your lawyer.
                2. Each warranty matched to the index numbers of documents that bear on it.
                3. Warranties with nothing in the room to support a disclosure passed back to your lawyer.
                4. A dated, read-only snapshot of the room archived for the disclosure record.

                ## Notes
                The disclosure letter is a legal document your lawyer drafts. Your part is making the evidence easy to find and fixed in time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every warranty has a list of supporting index numbers or a flagged gap, and a dated snapshot of the room is archived for disclosure."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your lawyer for the draft warranty list"
                - "Match each warranty to the index numbers that bear on it"
                - "Pass warranties with no supporting documents to your lawyer"
                - "Take a dated read-only snapshot of the room"
            - name: Post-completion archive and access close-out
              description: |-
                ## Purpose
                Once the round completes, the room still holds every fund's access and is the best record of what you disclosed. Archiving a complete export with its index and audit log, closing access for funds that did not invest and keeping a slimmed evergreen room for the new shareholders means you can prove what was shared and start the next round ahead.

                ## Milestones
                1. A full export of the room, its index, Q&A log and audit trail saved to company storage.
                2. Access removed for every fund and adviser that did not invest.
                3. New investors moved to an agreed post-round access level.
                4. The platform subscription reduced or cancelled in line with the evergreen plan.

                ## Notes
                Start from the **Operational checklist** template. Keep the archive for as long as your lawyer advises, often at least the warranty claim period.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete export with audit trail is archived, non-investors have no access and the subscription matches the post-round plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the full room with index, Q&A log and audit trail"
                - "Remove access for funds and advisers that did not invest"
                - "Set the new investors' post-round access level"
                - "Downgrade or cancel the platform plan as agreed"
            - name: Lean pre-seed data room for a first raise
              description: |-
                ## Purpose
                A first-time founder raising from angels does not need a 200-folder room, but a tidy folder of around fifteen documents makes cheques arrive faster and shows good habits early. A lean room built over a few evenings, with the deck, a one-page financial summary, incorporation documents, the cap table and founder IP assignments, is enough for most first raises.

                ## Milestones
                1. A single shared folder with no more than five sub-folders and around fifteen documents.
                2. Founder agreements and IP assignments signed and included.
                3. A one-page financial summary showing monthly burn and runway.
                4. View-only sharing with link expiry switched on.

                ## Notes
                If something in the lean room is missing, such as a founder IP assignment, fix it now. It only gets harder once outside money is in.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lean folder of about fifteen documents, including signed founder IP assignments and a one-page financial summary, is shared view-only."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create one shared folder with five sub-folders at most"
                - "Get founder agreements and IP assignments signed"
                - "Write a one-page financial summary with burn and runway"
                - "Share the folder view-only with link expiry switched on"
            - name: Running the data room for the CEO
              description: |-
                ## Purpose
                Often the person running the room day to day is a chief of staff, finance lead or operations manager, not the founder whose name is on the deck. Agreeing what you can upload and answer without asking, what needs the CEO's sign-off and how you report status keeps the CEO in investor meetings while you keep diligence moving.

                ## Milestones
                1. A written split of decisions: what the room manager approves alone and what needs the CEO.
                2. A status note format agreed, covering index completion, open questions and risks.
                3. Access granted to the finance, legal and people sources the manager needs.
                4. A handover note written so a deputy can run the room during an absence.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed-off decision split, a status note format and a deputy handover note exist, and status notes reach the CEO on the agreed rhythm."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the split between your approvals and the CEO's"
                - "Agree a status note covering completion, open questions and risks"
                - "Request access to the finance, legal and people sources you need"
                - "Write a handover note for a deputy"
            - name: Group structure room for multiple entities
              description: |-
                ## Purpose
                Companies with a holding company, overseas subsidiaries or a past move of domicile face extra questions about which entity owns the IP, employs the staff and signs the customer contracts. A group section with a structure chart, each entity's corporate records and the intercompany agreements lets investors see where value sits and that rights and money move between entities on paper.

                ## Milestones
                1. A group structure chart with ownership percentages and countries.
                2. Corporate records for each subsidiary in its own numbered sub-section.
                3. Intercompany agreements for services, IP licences and loans uploaded.
                4. A short note showing which entity holds the IP, employs staff and contracts with customers.

                ## Notes
                Transfer pricing and cross-border tax questions belong with your tax adviser. Upload their documents rather than summarising their conclusions yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A structure chart, records for each entity, intercompany agreements and a where-value-sits note are filed in the group section."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the group structure chart with ownership and countries"
                - "Create a numbered sub-section for each subsidiary's records"
                - "Upload intercompany service, licence and loan agreements"
                - "Write a note on which entity holds IP, staff and customer contracts"
            - name: Regulated business licences and compliance file
              description: |-
                ## Purpose
                Fintech, health, education, energy and other regulated companies face a regulatory diligence stream that can decide the whole round. A file holding every licence, registration, regulator letter, compliance policy and incident log, with renewal dates tracked, shows investors the company holds the permissions its business model depends on.

                ## Milestones
                1. Every licence and registration listed with issuer, scope, number and renewal date.
                2. Regulator correspondence and inspection reports filed in date order.
                3. Compliance policies and the most recent compliance review uploaded.
                4. Incidents, complaints and breaches logged with outcomes in the confirmatory tier.

                ## Notes
                Start from the **Compliance control** template to record each licence obligation and its owner. Check with your compliance adviser which regulator correspondence may be shared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every licence is listed with renewal date and owner, and regulator correspondence, policies and an incident log are filed in the right tiers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every licence and registration with issuer and renewal date"
                - "File regulator letters and inspection reports in date order"
                - "Ask your compliance adviser which regulator correspondence may be shared"
                - "Confirm next year's licence renewals are booked @recurring(yearly)"
            - name: Hardware and deep tech supply and certification file
              description: |-
                ## Purpose
                Hardware, medical device and deep tech investors look beyond software: who makes the parts, whether one supplier could halt production, what certifications the product needs and whether lab results support the claims. A file with a bill of materials summary, supplier agreements, certification status and test reports answers questions a software-style room never raises.

                ## Milestones
                1. A bill of materials summary showing critical components and the number of qualified suppliers for each.
                2. Supply and manufacturing agreements uploaded with minimum order and exclusivity terms noted.
                3. A certification tracker showing each required mark or approval, its status and expected date.
                4. Key test and lab reports filed with dates and who ran them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A component summary, supplier agreements, a certification tracker and dated test reports are filed in their own section."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the bill of materials with its critical components"
                - "Note single-source components and any second supplier"
                - "Build a certification tracker with status and expected dates"
                - "File key test reports with dates and who ran them"
            - name: Independent mock diligence red flag report
              description: |-
                ## Purpose
                Before a Series A or growth round some companies pay an adviser to run diligence on them as an investor would and write a short red flag report. Doing this a quarter before launch turns unknown problems into a managed list, and the report itself can shorten the investors' own work if you choose to share it.

                ## Milestones
                1. An adviser chosen with a defined scope, fee and timetable.
                2. The adviser given full room access and two working sessions with the team.
                3. A written red flag report ranked by seriousness.
                4. Each red flag entered in a risk register with an owner, response and status.

                ## Notes
                Record each finding in the **Risk register** template. Decide with your lawyer before launch whether the report is shared or kept internal.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written red flag report exists and every finding has an owner, response and status in the risk register before launch."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask two advisers for a scope and fee for a mock diligence review"
                - "Give the chosen adviser full room access and book two sessions"
                - "Enter each red flag in the risk register with an owner"
                - "Decide with your lawyer whether to share the report"
            - name: Litigation, disputes and contingent liabilities file
              description: |-
                ## Purpose
                Claims, disputes and threatened actions come up in every diligence, and an answer of none known is only credible if someone has actually checked. A file listing every current, threatened and settled dispute, regulatory investigation, warranty claim and guarantee given, with the documents behind each, gives a complete and honest answer.

                ## Milestones
                1. Founders, finance lead and lawyer each asked in writing for any disputes or threatened claims they know of.
                2. Every matter listed with parties, status, amount at stake and the lawyer handling it.
                3. Settlement agreements and key correspondence filed in the confirmatory tier.
                4. Guarantees, indemnities given and other contingent liabilities listed.

                ## Notes
                Settlement agreements often carry their own confidentiality terms. Check them before uploading.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of every current, threatened and settled matter and contingent liability, confirmed in writing by founders, finance and counsel, is filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the founders, finance lead and lawyer in writing about any claims"
                - "List each matter with parties, status and amount at stake"
                - "Check settlement agreements' confidentiality terms before uploading"
                - "List guarantees and indemnities the company has given"
---

# Investor Data Room

This area is for founders, and the finance, operations or legal leads who work beside them, who want an investor's diligence to take weeks rather than months. It starts with the foundations (an owner, a platform, a numbered index, an inventory and access tiers), builds each section from corporate records to IP, product and commercial evidence, then sets up the upkeep, the knowledge that makes request lists less alarming, the disclosure decisions, the dated events from launch to archive, the situations that change the shape of the room and finally the specialist checks an experienced counsel would run.

What repeats is a monthly refresh of accounts, contracts and new starters, a monthly permission audit and expiry check, quarterly board records, people and cohort files and an evergreen review, a twice-weekly Q&A triage and Friday activity review while a process is live, and a yearly filings and security evidence upload. The Purchase decision, Remediation plan, Operational checklist, Meeting notes, Compliance control and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
