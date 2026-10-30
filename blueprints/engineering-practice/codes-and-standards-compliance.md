---
id: engineering-practice.codes-and-standards-compliance
name: Codes and Standards Compliance
description: "A codes and standards register with the right editions, an applicability matrix, controlled deviations, vendor and inspector checks, and compliance dossiers that stand up to a regulator."
category: business
version: 1.0.0
tags: [engineering-practice, codes-and-standards-compliance, engineer, code-compliance, asme, api, iec, deviations]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - compliance-control
    - reading-queue
    - metrics-log
    - operational-checklist
    - risk-register
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Codes and Standards Compliance
          description: "Working to the codes and standards a design must meet: ASME, API, IEC, BS EN and local codes, keeping editions current, recording deviations and compliance records."
          projects:
            - name: Project codes and standards register
              description: |-
                ## Purpose
                Every design claims compliance with something, but on most projects the list of governing codes lives in five specifications, two contracts and somebody's memory. One register listing each code and standard, its edition, its scope on this project and the documents that invoke it is the base every later compliance statement depends on.

                ## Milestones
                1. Every code and standard invoked by the contract, the basis of design and the discipline specifications listed in one register.
                2. Each entry carries its number, title, edition or year, and the clause or document that invokes it.
                3. Duplicates and conflicting editions of the same standard flagged for a decision.
                4. The register issued as a controlled document with a revision number and an owner.

                ## Notes
                Include client specifications and statutory regulations in the same register, marked by type. A register that leaves out the client's own standards will miss half the conflicts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled register lists every invoked code, standard, client specification and regulation with its edition and invoking document."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the contract, basis of design and discipline specifications in one folder"
                - "List every code and standard each document names, with its edition"
                - "Flag any standard cited at two different editions"
                - "Issue the register at revision A with a named owner"
            - name: Fixing the edition and date of applicability
              description: |-
                ## Purpose
                Specification clauses that say "latest edition" sound safe and are a trap: ASME pressure vessel and piping codes are reissued about every two years, and an edition published mid-project can change allowable stresses or test rules. Freezing each code at a named edition on a stated contract date stops the target moving under the design.

                ## Milestones
                1. Every "latest edition" reference in the project documents found and listed.
                2. A cut-off date agreed with the client for fixing editions, usually contract award or design basis approval.
                3. Each register entry updated to a specific edition and year.
                4. The agreed edition rule recorded in the basis of design.

                ## Notes
                Where a code allows a grace period before a new edition becomes mandatory, write down which period you are relying on rather than assuming it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every register entry names a specific edition, and the edition cut-off date is written in the approved basis of design."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the specifications for latest edition wording and list each hit"
                - "Propose an edition cut-off date to the client's lead engineer"
                - "Update each register entry to the edition in force on that date"
                - "Add the edition rule to the next revision of the basis of design"
            - name: Order of precedence between law, codes and client specifications
              description: |-
                ## Purpose
                When a client specification asks for a thinner wall than the code allows, or two standards give different test pressures, someone has to know which one wins. Statutory law sits above everything, but the ranking between the contract, project specifications and international codes has to be written down before the first conflict, not argued during it.

                ## Milestones
                1. The precedence clause in the contract located and quoted in the basis of design.
                2. A ranked list from statutory requirements to recommended practices agreed with the client.
                3. A rule recorded for conflicts within the same level, such as taking the more stringent requirement.
                4. The precedence list briefed to every discipline lead.

                ## Notes
                A higher-ranking document can relax a recommended practice but never a statutory requirement. If a client asks you to go below the law, that is a stop and escalate moment, not a deviation.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written order of precedence, agreed with the client, appears in the basis of design and has been briefed to all discipline leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find and copy the precedence clause from the contract"
                - "Draft a ranked list from law down to recommended practices"
                - "Agree the tie-break rule for conflicts at the same level"
                - "Brief the discipline leads on the agreed order"
            - name: Standards library subscription decision
              description: |-
                ## Purpose
                Engineers working from an old PDF on a shared drive are the commonest source of edition errors, and buying single standards one at a time costs more than most teams realise. Comparing a subscription service, publisher memberships and single purchases against the standards you actually use gives everyone current, licensed copies.

                ## Milestones
                1. A list of the standards the team opened in the last year, with publisher.
                2. Two or three access options priced, including user count and update alerts.
                3. Licence terms checked for sharing with contractors and offline site use.
                4. An option chosen and the old uncontrolled copies removed from shared folders.

                ## Notes
                Start from the **Purchase decision** template. Check whether your professional body or university membership already includes access to some publishers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A standards access option is chosen with costs and licence terms recorded, and uncontrolled copies are removed from shared drives."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the standards the team used in the past twelve months"
                - "Get prices for a subscription service and for single copies"
                - "Check each licence for contractor sharing and offline use"
                - "Remove uncontrolled standard copies from shared folders"
            - name: Code applicability matrix by equipment item
              description: |-
                ## Purpose
                Knowing which codes exist on the project is not the same as knowing which ones apply to each tag. Mapping every equipment item, piping class and electrical assembly to its design code, material standard, inspection code and statutory regime shows the gaps, such as a skid nobody assigned a pressure code to.

                ## Milestones
                1. Equipment list, line list and electrical load list pulled into one matrix.
                2. Each item mapped to its design, fabrication, testing and statutory requirements.
                3. Items with no assigned code, or two competing codes, listed for decision.
                4. The matrix linked from each equipment datasheet or specification.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tagged item on the equipment list has an assigned design and testing code in the matrix, with no blank rows left unresolved."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export the current equipment list into a matrix spreadsheet"
                - "Add columns for design, material, testing and statutory codes"
                - "Fill the matrix for one equipment type and check it with the lead"
                - "List every item with a blank or disputed code assignment"
            - name: Deviation and concession register
              description: |-
                ## Purpose
                Deviations from codes and specifications are normal on real projects, but undocumented ones turn into findings at audit and arguments at handover. A single register with a reference number, the clause departed from, the technical justification and the approver for each one makes every departure visible and traceable.

                ## Milestones
                1. A register format agreed with fields for clause, reason, justification, risk and approver.
                2. Existing deviations found in emails and meeting notes entered with references.
                3. An approval route agreed, including when the client or a regulator must sign.
                4. Each approved deviation cross-referenced on the affected drawing or datasheet.

                ## Notes
                Keep deviations from statutory requirements out of this register entirely: those need the regulator, not the project. Separate permanent deviations from temporary concessions with an expiry.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deviation register exists with every known deviation numbered, justified and showing its approver, and each is referenced on the affected document."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up the register with clause, reason, justification and approver fields"
                - "Search project email for agreed deviations and enter each one"
                - "Agree with the client which deviations need their signature"
                - "Review temporary concessions due to expire and close or renew them @recurring(monthly:19)"
            - name: Statutory requirements map for the project location
              description: |-
                ## Purpose
                International codes are voluntary until a law, regulator or insurer makes them mandatory, and each country does that differently. Mapping which pressure equipment, electrical, building, fire and occupational safety rules apply at the site, and which body enforces each, tells you what has to be registered, inspected or approved before start-up.

                ## Milestones
                1. The regulators with authority over the site listed with their contact routes.
                2. Each regulation linked to the codes it calls up or accepts.
                3. Registrations, design approvals and inspections required before operation listed with lead times.
                4. The map reviewed by the client's regulatory or HSE lead.

                ## Notes
                Start from the **Compliance control** template. Confirm requirements with the regulator or local counsel rather than relying on a previous project in the same country, since rules change.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A statutory map lists every regulator, applicable regulation and required approval with lead times, reviewed by the client's regulatory lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the regulators with authority over the site and their websites"
                - "Note which codes each regulation calls up or accepts"
                - "List approvals needed before operation with their lead times"
                - "Check regulator websites for changes to the mapped rules @recurring(quarterly)"
            - name: Compliance responsibility split between owner, contractor and vendor
              description: |-
                ## Purpose
                A pressure vessel can be designed by the contractor, built by a vendor to a code stamp and registered by the owner, and each assumes another has checked compliance. A responsibility table for each type of compliance evidence closes the gaps that only show up when a certificate is missing at handover.

                ## Milestones
                1. Each type of compliance evidence listed, from design calculations to data reports and registrations.
                2. One responsible party and one verifying party named for each.
                3. The table checked against the contract scope and purchase order terms.
                4. Disagreements resolved and the table attached to the project execution plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility table names a responsible and a verifying party for every type of compliance evidence, attached to the execution plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the compliance evidence types the project must produce"
                - "Name a responsible and a verifying party for each type"
                - "Check the table against the contract and purchase order scopes"
                - "Attach the agreed table to the project execution plan"
            - name: Statement of compliance format for deliverables
              description: |-
                ## Purpose
                "Designed in accordance with ASME B31.3" on a drawing says nothing about edition, exceptions or who checked it. A standard statement block, used on calculations, datasheets and reports, names the code and edition, lists deviations by number and states the checker, so a reviewer can see the compliance claim in one place.

                ## Milestones
                1. A statement block drafted with code, edition, deviation references and checker.
                2. The block added to the calculation, datasheet and report templates.
                3. Three issued deliverables updated as worked examples.
                4. The format agreed with the client's document reviewers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Calculation, datasheet and report templates carry an agreed compliance statement block naming code, edition, deviations and checker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a compliance statement block with code, edition and deviations"
                - "Add the block to the calculation and datasheet templates"
                - "Update three issued deliverables as examples"
                - "Send the format to the client's document reviewers for agreement"
            - name: Monthly standards update watch
              description: |-
                ## Purpose
                Standards bodies publish new editions, amendments, errata and withdrawals all year, and the first a project usually hears is when a vendor quotes a newer edition. A short monthly check of the publishers behind your register catches changes early enough to decide on them calmly.

                ## Milestones
                1. Update alerts set up for every publisher in the register.
                2. A monthly check that logs new editions, amendments and withdrawals against register entries.
                3. Each relevant change passed to the discipline lead with a note on likely impact.
                4. Twelve months of checks logged without a gap.

                ## Notes
                Start from the **Reading queue** template to hold the changes waiting to be read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log shows every publisher in the register checked for changes, with relevant changes passed to discipline leads."
                cadence: rolling
              tasks:
                - "Sign up for update alerts from each publisher in the register"
                - "Check publishers for new editions, amendments and withdrawals @recurring(monthly:9)"
                - "Send each relevant change to the discipline lead with a short note"
                - "Review the reading queue with the team and clear read items @recurring(monthly:27)"
            - name: New edition impact assessment routine
              description: |-
                ## Purpose
                New editions are not automatically a problem: most changes are editorial, a few relax requirements, and one or two can alter a wall thickness or a test. Assessing each new edition clause by clause against live designs, with a recorded decision to adopt or stay, turns code changes into managed decisions instead of surprises.

                ## Milestones
                1. An assessment form covering changed clauses, affected items and cost or schedule effect.
                2. Each new edition in the register assessed within a quarter of publication.
                3. A decision to adopt, partly adopt or stay recorded with the client's agreement.
                4. Adopted changes passed to the design teams with the affected documents listed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every new edition published during the project has a recorded assessment and an adopt or stay decision agreed with the client."
                cadence: rolling
              tasks:
                - "Draft an edition impact form with clause, item and effect columns"
                - "Ask the agent to list the changed clauses from the publisher's summary of changes"
                - "Review new editions against live designs and record a decision @recurring(quarterly)"
                - "Send adopted changes to design leads with affected documents listed"
            - name: Vendor deviation request review routine
              description: |-
                ## Purpose
                Vendors routinely take exception to specifications in their quotes and data books, and buried exceptions accepted by silence become the purchaser's problem. A weekly review of every vendor deviation request, answered within an agreed time with a reason, keeps procurement moving without accepting non-compliance by default.

                ## Milestones
                1. A single inbox or log for vendor deviation requests across all purchase orders.
                2. A target response time agreed with procurement, such as ten working days.
                3. Each request answered with accept, reject or accept with conditions, and a reason.
                4. Accepted requests copied into the deviation register.

                ## Notes
                Read the exceptions page of every quote and every vendor document cover sheet. Silence in a technical bid evaluation is often treated as acceptance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every vendor deviation request has a recorded answer with a reason, and accepted ones appear in the deviation register."
                cadence: rolling
              tasks:
                - "Set up one log for vendor deviation requests on all orders"
                - "Agree a target response time with the procurement lead"
                - "Review and answer open vendor deviation requests @recurring(weekly:tue)"
                - "Copy accepted requests into the deviation register and report overdue ones @recurring(monthly:4)"
            - name: Compliance matrix upkeep for each specification
              description: |-
                ## Purpose
                Clients often ask for a clause-by-clause compliance matrix against their specifications, and one built once at bid stage goes stale within weeks. Keeping the matrix current as designs change means the final compliance statement is a review, not a reconstruction from memory.

                ## Milestones
                1. A matrix for each governing specification with comply, deviate or not applicable for each clause.
                2. Each deviate entry linked to a deviation register number.
                3. The matrix reviewed against design changes every month.
                4. A final matrix issued with the as-built documents.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each governing specification has a current compliance matrix, reviewed monthly, with every deviation linked to the register."
                cadence: rolling
              tasks:
                - "Build a clause list for the first governing specification"
                - "Mark each clause comply, deviate or not applicable with evidence"
                - "Review the matrices against design changes @recurring(monthly:16)"
                - "Link every deviate entry to its deviation register number"
            - name: Material certificate and traceability checks
              description: |-
                ## Purpose
                Pressure parts are only as compliant as their materials, and a wrong grade or an inspection certificate of the wrong type can mean cutting out a weld after hydrotest. Checking mill certificates against the material standard, the specified certificate type such as EN 10204 3.1 or 3.2, and heat number markings as material arrives keeps traceability intact.

                ## Milestones
                1. A checklist of what to verify on each certificate: grade, heat number, chemistry, properties and certificate type.
                2. Every incoming certificate for pressure and structural parts checked before release to fabrication.
                3. Rejected certificates logged with the non-conformance raised.
                4. Heat numbers traced from certificate to the item in the data book.

                ## Notes
                For sour service, also check the hardness and heat treatment requirements of NACE MR0175 or ISO 15156 where the specification calls them up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pressure and structural material certificate is checked against its standard before fabrication, with rejections logged as non-conformances."
                cadence: rolling
              tasks:
                - "Write a certificate checklist covering grade, heat, chemistry and type"
                - "Check incoming mill certificates against the checklist @recurring(weekly:thu)"
                - "Raise a non-conformance for each rejected certificate"
                - "Trace a sample of five heat numbers from certificate to item @recurring(monthly:7)"
            - name: Code interpretation and query log
              description: |-
                ## Purpose
                Teams answer the same code question three times on one project because the first answer lived in an email. A log of every code query, the clause, the published interpretation or the agreed project position, and who agreed it, stops repeated debate and gives later reviewers the reasoning.

                ## Milestones
                1. A query log with clause, question, answer, source and approver fields.
                2. Published interpretations from the code body checked before any project position is agreed.
                3. Open queries reviewed monthly and closed with a recorded answer.
                4. The log searchable by code and clause for the whole team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A searchable query log holds every code question raised on the project with its answer, source and approver."
                cadence: rolling
              tasks:
                - "Create the query log with clause, answer, source and approver fields"
                - "Enter new code questions from the week's emails and meetings @recurring(weekly:fri)"
                - "Review and close open code queries with the discipline leads @recurring(monthly:23)"
                - "Search the code body's published interpretations before each new answer"
            - name: Quarterly project compliance status report
              description: |-
                ## Purpose
                Project managers hear about compliance only when it threatens the schedule. A one-page quarterly report on open deviations, unanswered vendor requests, outstanding certificates and regulator approvals shows the trend early, while there is still time to fix it without delaying start-up.

                ## Milestones
                1. Four measures defined: open deviations, overdue vendor requests, missing certificates and pending approvals.
                2. Baseline values recorded for the current quarter.
                3. A one-page report issued to the project manager each quarter.
                4. Actions from each report given owners and dates.

                ## Notes
                Start from the **Metrics log** template and keep the same four measures for the whole project, so the trend means something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly compliance reports are issued with the same measures, and each action has an owner and date."
                cadence: cyclic
              tasks:
                - "Define the four compliance measures and how each is counted"
                - "Record this quarter's baseline for each measure"
                - "Issue the one-page compliance report to the project manager @recurring(quarterly)"
                - "Give each report action an owner and a due date"
            - name: Annual register audit and withdrawn standards sweep
              description: |-
                ## Purpose
                Standards get withdrawn, merged or replaced, and company specifications keep citing them for years: specs still calling up long-superseded British Standards are common. A yearly audit of the register and the specifications behind it catches withdrawn references and dead links before a vendor or auditor does.

                ## Milestones
                1. Every register entry checked against the publisher's current status.
                2. Withdrawn or superseded standards listed with their replacements.
                3. Specifications citing withdrawn standards flagged for revision.
                4. The register reissued at a new revision with the audit date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The register is reissued yearly with every entry status-checked and every withdrawn reference flagged for revision."
                cadence: cyclic
              tasks:
                - "Check each register entry's current status with its publisher @recurring(yearly)"
                - "List withdrawn standards with their replacements"
                - "Confirm standards subscription renewals and user licences @recurring(yearly)"
                - "Reissue the register with the audit date on the cover"
            - name: Third-party inspector and notified body coordination
              description: |-
                ## Purpose
                Code work often needs an independent party: an Authorized Inspector for ASME stamped vessels, a notified body for European pressure equipment, or a certifying authority for offshore work. Holding their hold points, document reviews and visit dates in one schedule stops fabrication waiting for an inspector nobody booked.

                ## Milestones
                1. Each item needing third-party involvement listed with the body and the type of approval.
                2. Hold and witness points from each inspection and test plan entered in one schedule.
                3. Visit requests sent with the notice period each body requires.
                4. Inspector reports and release notes filed against each item.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single schedule holds every third-party hold point and visit, and each visit has a filed report or release note."
                cadence: rolling
              tasks:
                - "List items needing an inspector or notified body and the approval type"
                - "Enter hold points from each inspection and test plan in one schedule"
                - "Check the next three weeks of inspector visits and notices @recurring(weekly:mon)"
                - "File inspector reports and chase missing release notes @recurring(monthly:12)"
            - name: Reading a code's scope, definitions and mandatory language
              description: |-
                ## Purpose
                Many compliance errors start with misreading the code itself: missing a scope exclusion, using an everyday meaning for a defined term, or treating a non-mandatory appendix as binding. Learning how codes are built, and the difference between shall, should and may, makes every later code faster and safer to use.

                ## Milestones
                1. Scope, exclusions and definitions sections read for one code you use often.
                2. Mandatory and non-mandatory appendices told apart in that code.
                3. The meaning of shall, should and may in that publisher's drafting rules noted.
                4. Three clauses you had misread corrected in your own notes or work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes for one code cover its scope, exclusions, defined terms, appendix status and mandatory language, with three corrected misreadings."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the scope and exclusions section of your most used code"
                - "List the defined terms that differ from their everyday meaning"
                - "Mark which appendices are mandatory and which are not"
                - "Note the publisher's meaning of shall, should and may"
            - name: ASME Boiler and Pressure Vessel Code structure
              description: |-
                ## Purpose
                The BPVC is a set of sections that only work together: Section VIII for vessel rules, Section II for materials and allowable stresses, Section V for examination methods and Section IX for welding qualification. Knowing how they reference each other, and where code cases fit, stops engineers pulling a stress value from the wrong table or the wrong edition.

                ## Milestones
                1. A one-page map of the BPVC sections you use and how they cross-reference.
                2. An allowable stress found in Section II for a common material and checked against a colleague's value.
                3. The difference between Division 1 and Division 2 of Section VIII written in a paragraph.
                4. One worked vessel calculation traced to every clause and table it relies on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A section map and one fully referenced vessel calculation show which BPVC clauses and tables each step relies on."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draw a one-page map of the BPVC sections you use"
                - "Look up an allowable stress in Section II for a common plate grade"
                - "Write a paragraph comparing Section VIII Division 1 and Division 2"
                - "Trace one vessel calculation to every clause and table it uses"
            - name: Comparing piping codes B31.3, B31.1 and EN 13480
              description: |-
                ## Purpose
                Process plants, power plants and European projects use different piping codes, and engineers moving between them carry over assumptions that do not hold, such as test pressure rules or allowable stress basis. A side-by-side comparison of the clauses you use most makes the switch deliberate rather than accidental.

                ## Milestones
                1. The scope boundaries of each code written down, including where B31.1 and B31.3 meet.
                2. Allowable stress basis, wall thickness formula and test pressure rule compared in one table.
                3. Examination and weld acceptance differences noted for one fluid service category.
                4. The table checked by a senior piping engineer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of scope, stress basis, wall thickness, testing and examination across the three codes is checked by a senior piping engineer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write down the scope boundary of each piping code"
                - "Compare the wall thickness formula in each code in one table"
                - "Compare the hydrostatic test pressure rules side by side"
                - "Ask a senior piping engineer to check the comparison"
            - name: API standards for oil, gas and petrochemical equipment
              description: |-
                ## Purpose
                API standards cover the equipment that fills refineries and gas plants: storage tanks, pumps, compressors, relief systems and air coolers. Knowing which API document governs each, which are standards and which are recommended practices, and how they sit beside ASME and ISO equivalents makes datasheets and vendor reviews quicker and more accurate.

                ## Milestones
                1. A list of the API standards used on your projects with the equipment each governs.
                2. Standards and recommended practices told apart in the list.
                3. ISO equivalents noted where API and ISO publish adopted or parallel versions.
                4. One datasheet reviewed clause by clause against its API standard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference list maps each API document used to its equipment and status, and one datasheet has been reviewed against its standard."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the API documents used on your current project"
                - "Mark each one as a standard or a recommended practice"
                - "Note any ISO equivalent for each document"
                - "Review one pump or tank datasheet against its API standard"
            - name: IEC and BS EN electrical standards family
              description: |-
                ## Purpose
                Electrical work outside North America runs on IEC standards, often adopted as BS EN or other national versions with local amendments: low-voltage installations, switchgear assemblies, rotating machines and equipment for explosive atmospheres. Learning how an IEC standard becomes a national standard, and where the national foreword adds requirements, avoids missing a local clause.

                ## Milestones
                1. The IEC and national adopted versions of the standards you use listed side by side.
                2. National forewords and annexes checked for added or changed requirements.
                3. The relationship between IEC and North American electrical codes noted for one equipment type.
                4. A short briefing note shared with the electrical team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A briefing note lists the IEC standards used with their national adoptions and any national additions found in forewords or annexes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List each IEC standard you use and its national adopted version"
                - "Read the national foreword of each for added requirements"
                - "Compare IEC and North American rules for one equipment type"
                - "Share a short briefing note with the electrical team"
            - name: European conformity under PED, ATEX and CE marking
              description: |-
                ## Purpose
                Equipment placed on the European or UK market needs conformity assessment under product laws such as the Pressure Equipment Directive, the ATEX equipment directive and the machinery rules, and the code you designed to is only part of the evidence. Understanding categories, conformity modules, harmonised standards and the declaration of conformity lets you buy or supply equipment that can actually be installed.

                ## Milestones
                1. The product laws that apply to your equipment types identified.
                2. The PED category worked out for one vessel and the conformity module options noted.
                3. The role of harmonised standards in presumption of conformity explained in your own words.
                4. A declaration of conformity and technical file contents list reviewed for one item.

                ## Notes
                UK and EU marking rules have diverged since 2021 and continue to change. Check the current position with the relevant government guidance before relying on a past project.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes identify the product laws, PED category and conformity module for one real item, with its declaration of conformity reviewed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List which product laws apply to your equipment types"
                - "Work out the PED category for one vessel on your project"
                - "Read the conformity module options for that category"
                - "Review a vendor's declaration of conformity against the technical file list"
            - name: Welding and NDE code requirements
              description: |-
                ## Purpose
                Welding procedure specifications, procedure qualification records and welder qualifications are compliance evidence in their own right, and so is the extent of radiography or ultrasonic testing the code requires. Knowing what ASME Section IX or ISO 15614 asks for, and what essential variables mean, lets you review a fabricator's welding documents with confidence.

                ## Milestones
                1. The welding qualification standard for each fabricator on the project identified.
                2. Essential variables for one process listed and checked against a real WPS and PQR.
                3. The examination extent required by the design code for one weld category noted.
                4. A fabricator's welding document package reviewed with comments returned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One fabricator welding package has been reviewed against its qualification code, with essential variable checks recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Identify the welding qualification code each fabricator works to"
                - "List the essential variables for one welding process"
                - "Check a real WPS against its supporting PQR"
                - "Return review comments on one welding document package"
            - name: Using code cases, interpretations and errata
              description: |-
                ## Purpose
                Codes are supplemented between editions by code cases, formal interpretations and errata, and each has different standing. A code case may need the owner's agreement and a note on the data report, while an interpretation explains intent without changing rules. Knowing which is which keeps you from relying on something that does not apply to your edition.

                ## Milestones
                1. The publisher's sources for code cases, interpretations and errata bookmarked.
                2. The standing of each type written down for the codes you use.
                3. Errata for every edition in the register checked and noted.
                4. Any code case used on the project recorded with owner acceptance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Errata for every register edition are checked, and every code case used on the project is recorded with owner acceptance."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Bookmark the code case, interpretation and errata pages for each publisher"
                - "Write down the standing of each type for your main codes"
                - "Check published errata for every edition in the register"
                - "Record each code case in use with the owner's acceptance"
            - name: Choosing a design code when the client leaves it open
              description: |-
                ## Purpose
                Some clients specify only "an internationally recognised code", leaving the team to choose between, say, ASME and EN for a vessel package. The choice affects material availability, wall thickness, fabricator pool, inspection costs and local acceptance, so it deserves a short documented comparison rather than habit.

                ## Milestones
                1. Two candidate codes compared on materials, thickness, fabricator availability and inspection route.
                2. Local regulatory acceptance of each candidate confirmed.
                3. Cost and schedule effects estimated for the main equipment.
                4. A choice agreed with the client and written into the basis of design.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written code selection comparing two candidates on at least four criteria is agreed with the client and recorded in the basis of design."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick two candidate codes and the criteria to compare them on"
                - "Ask two fabricators which codes they hold certification for"
                - "Confirm the local regulator accepts each candidate code"
                - "Present the comparison and record the client's choice"
            - name: Equivalence justification for an alternative standard
              description: |-
                ## Purpose
                A vendor offers equipment built to its home national standard instead of the one specified, and it may be perfectly safe or quietly weaker. A structured equivalence check, comparing scope, design margins, materials, testing and certification clause by clause, gives a defensible answer either way.

                ## Milestones
                1. The specified and offered standards compared clause by clause on design, materials, testing and inspection.
                2. Every area where the offered standard is less stringent listed.
                3. Additional requirements proposed to close each gap, or the offer rejected.
                4. The decision recorded in the deviation register with the reviewer's signature.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clause-by-clause equivalence comparison is completed and the accept, accept with conditions or reject decision is signed in the deviation register."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the vendor's offered standard and edition in writing"
                - "Compare design margins and testing clause by clause"
                - "List each area where the offered standard is less stringent"
                - "Record the equivalence decision in the deviation register"
            - name: Bringing company specifications up to current editions
              description: |-
                ## Purpose
                Company engineering specifications age faster than anyone revises them, and a specification citing a twenty-year-old edition forces a deviation on every new project. A planned revision programme, prioritised by how often each specification is used, brings the library current without stopping project work.

                ## Milestones
                1. All company specifications listed with the editions they cite and how often each is used.
                2. A priority order agreed for revision, most used and most outdated first.
                3. The first five specifications revised, reviewed and reissued.
                4. A revision cycle set so no specification goes more than five years without review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five priority company specifications are reissued citing current editions, and a review cycle is set for the rest."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List company specifications with their cited editions"
                - "Rank them by use on recent projects and age"
                - "Revise the top-ranked specification and send it for review"
                - "Set a five-year review date for every specification"
            - name: Cutting duplication between client specs and international standards
              description: |-
                ## Purpose
                Many client specifications repeat whole clauses from the international standard, then change a few words, which makes it hard to see what is actually extra. Rewriting a specification as an addendum, stating only the additions and modifications to the base standard, makes the client's real requirements visible and edition updates simpler.

                ## Milestones
                1. One heavily used specification compared clause by clause with its base standard.
                2. Repeated, modified and genuinely extra clauses marked.
                3. A draft addendum-style specification written with only modifications and additions.
                4. The draft reviewed and accepted by the specification owner.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One specification is rewritten as an addendum to its base standard and accepted by its owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose one specification that repeats its base standard heavily"
                - "Mark each clause as repeated, modified or extra"
                - "Draft an addendum version with only modified and extra clauses"
                - "Send the draft to the specification owner for review"
            - name: Choosing a standards management tool
              description: |-
                ## Purpose
                Once a team works across several projects, spreadsheets of standards and editions drift apart. Tools exist that track editions, alert on changes and link standards to documents, but they vary widely in cost and fit, so a short comparison against real needs avoids buying more than the team will use.

                ## Milestones
                1. Requirements listed: edition tracking, change alerts, document links and user count.
                2. Two or three tools trialled or demonstrated with the current register loaded.
                3. Costs compared with the time spent maintaining the spreadsheets.
                4. A decision recorded, including staying with spreadsheets if that wins.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least two tools against listed requirements and current spreadsheet effort."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the features the team actually needs from a tool"
                - "Book demonstrations of two standards management tools"
                - "Estimate hours spent each month maintaining the spreadsheets"
                - "Record the tool decision with costs and reasons"
            - name: Code compliance check before issuing deliverables
              description: |-
                ## Purpose
                Compliance problems are cheapest to catch before a document leaves the office, yet checkers focus on the numbers and skip the compliance claims. A short checklist used at each issue, covering edition, applicability, deviations referenced and statutory requirements, catches the claims that would otherwise fail at client review.

                ## Milestones
                1. A checklist of six to ten compliance questions for issued deliverables.
                2. The checklist added to the document issue workflow.
                3. Ten deliverables checked with findings recorded.
                4. The checklist revised after the first month of use.

                ## Notes
                Start from the **Operational checklist** template. Keep it short enough to finish in five minutes, or it will be signed without being read.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A compliance checklist is part of the issue workflow and has been used on ten deliverables with findings recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft six to ten compliance questions for issued deliverables"
                - "Add the checklist to the document issue workflow"
                - "Use the checklist on the next ten deliverables issued"
                - "Review a sample of issued deliverables against the checklist @recurring(monthly:21)"
            - name: Hazardous area classification compliance review
              description: |-
                ## Purpose
                Area classification drawings decide which electrical and mechanical equipment must be certified for explosive atmospheres, and an out-of-date drawing makes every equipment certificate questionable. Reviewing the classification basis against the standard it was done to, such as IEC 60079-10-1 or API RP 505, and checking equipment certificates against the zones, closes that gap.

                ## Milestones
                1. The classification standard and edition used for the drawings identified.
                2. Release sources and zone extents checked against the current process data.
                3. Equipment certificates checked for zone, gas group and temperature class.
                4. Mismatches raised as actions with owners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The classification basis is checked against its standard and every equipment certificate in classified zones is checked for zone, gas group and temperature class."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Find which standard and edition the classification drawings used"
                - "Check release sources against current process conditions"
                - "Compare equipment certificates against zone, gas group and temperature class"
                - "Raise each mismatch as an action with an owner"
            - name: Preparing for an Authorized Inspector shop visit
              description: |-
                ## Purpose
                For ASME stamped equipment, the Authorized Inspector must accept the design, witness key points and sign the data report before the Certification Mark goes on. A visit where the calculations, material certificates, welding records and examination reports are ready and indexed takes hours; an unprepared one takes another trip and another week.

                ## Milestones
                1. The inspector's hold points from the inspection and test plan confirmed.
                2. Design calculations, certificates, WPS and PQR, welder records and NDE reports indexed.
                3. A pre-visit walk of the job with the fabricator's quality lead done.
                4. The visit held and any inspector comments closed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The Authorized Inspector visit is completed with all hold points signed and any comments closed in writing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the inspector's hold points with the fabricator"
                - "Index calculations, certificates and welding records for the visit"
                - "Walk the job with the fabricator's quality lead beforehand"
                - "Close each inspector comment in writing after the visit"
            - name: Code pressure test witnessed and recorded
              description: |-
                ## Purpose
                The hydrostatic or pneumatic test is the code's final proof of a pressure system, and it is also one of the most hazardous activities on site, pneumatic tests especially. Preparing the test pack to the code's pressure, hold time and gauge requirements, with a safety plan and exclusion zone, gives a test that is both compliant and safe.

                ## Milestones
                1. Test pressure, medium, hold time and gauge requirements taken from the governing code and edition.
                2. A test pack with isometrics, limits, calibrated gauge certificates and relief arrangement approved.
                3. A safety plan with exclusion zone, permit and stop-work triggers agreed.
                4. The test witnessed, the record signed and the system released.

                ## Notes
                Never pressurise under a verbal agreement. A pneumatic test needs a specific risk assessment and approval because stored energy is far higher than in a hydrotest; anyone can stop the test.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed test record shows code test pressure and hold time achieved with calibrated gauges, under an approved permit and safety plan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Take the test pressure and hold time from the governing code edition"
                - "Assemble the test pack with limits and gauge calibration certificates"
                - "Agree the exclusion zone and permit with the site safety lead @priority(high)"
                - "Sign the test record and release the system after the test"
            - name: Regulator or certifying authority design submission
              description: |-
                ## Purpose
                Many jurisdictions require pressure equipment, structures, fire systems or electrical installations to be registered or approved before use, and late submissions delay start-up regardless of how good the design is. Preparing the submission to the regulator's format, with the compliance evidence they ask for, keeps approval off the critical path.

                ## Milestones
                1. The regulator's current submission requirements and fees obtained in writing.
                2. A submission index matched to each requirement.
                3. The package reviewed internally and submitted with proof of receipt.
                4. Regulator questions answered and the approval or registration certificate filed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The submission is lodged with proof of receipt, and the approval or registration certificate is filed before planned start-up."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the regulator for current submission requirements in writing"
                - "Build a submission index matched to each requirement"
                - "Submit the package and keep proof of receipt"
                - "Answer regulator questions and file the approval certificate"
            - name: Code compliance dossier at handover
              description: |-
                ## Purpose
                Years after start-up, the operator will need the manufacturer's data reports, certificates of conformity, test records and deviation approvals to repair, rerate or defend an item. Assembling a compliance dossier per item at handover, indexed to the applicability matrix, is far cheaper than chasing a vendor who has moved on.

                ## Milestones
                1. A dossier index agreed with the operator, by tag and by type of evidence.
                2. Data reports, conformity declarations, test records and deviations collected for each item.
                3. Gaps listed and chased with vendors and contractors before final payment.
                4. The dossier accepted by the operator and lodged in their document system.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The operator signs acceptance of a compliance dossier covering every tag in the applicability matrix, with gaps closed or formally listed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the dossier index with the operator's document lead"
                - "Collect data reports and conformity declarations by tag"
                - "List missing evidence and chase it before final payments"
                - "Get the operator's signed acceptance of the dossier"
            - name: Preparing for a client or insurer compliance audit
              description: |-
                ## Purpose
                Clients, insurers and certification bodies audit compliance by sampling: they pick a few items and ask you to show the chain from code to evidence. Running your own sample trace a month ahead finds the broken links while there is time to fix them.

                ## Milestones
                1. The audit scope, dates and sampling approach confirmed with the auditor.
                2. Five items traced from register and matrix to certificates and test records.
                3. Broken links fixed or explained before the audit.
                4. Audit findings recorded with owners and close-out dates.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit is held with a pre-audit trace of five items completed, and every finding has an owner and a close-out date."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Confirm audit scope, dates and sampling with the auditor"
                - "Trace five items from register to test records yourself"
                - "Fix or explain each broken link before the audit"
                - "Record findings with owners and close-out dates"
            - name: Working to an unfamiliar national code overseas
              description: |-
                ## Purpose
                Engineers sent to a project in another country often find a national building, electrical or pressure code they have never used, sometimes only in the local language. A focused plan to obtain the code, find a local reviewer and map it against the codes you know reduces the risk of designing to habit.

                ## Milestones
                1. The national codes that apply obtained in an official version, with a reliable translation if needed.
                2. A local engineer or consultant engaged to review compliance.
                3. Key differences from your familiar codes listed for the team.
                4. The first design deliverable reviewed against the national code by the local reviewer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The applicable national codes are obtained, a local reviewer is engaged, and the first deliverable is reviewed against them."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Buy the official version of each applicable national code"
                - "Find a local engineer who can review compliance"
                - "List the key differences from the codes you know"
                - "Send the first deliverable for local code review"
            - name: Standards compliance for a small consultancy
              description: |-
                ## Purpose
                A two to ten person consultancy cannot buy every standard or run a document control department, but its signature carries the same weight as a large firm's. A lean set-up of the standards actually used, licensed copies, a simple register and a peer check arrangement gives defensible compliance on a small budget.

                ## Milestones
                1. The standards used in the last two years listed and licensed copies confirmed.
                2. A simple register kept in one shared location.
                3. A peer check arrangement with another engineer or firm for work outside core expertise.
                4. Professional indemnity insurer requirements on standards and checking noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A small-firm register of licensed standards and a written peer check arrangement are in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the standards your firm used in the last two years"
                - "Confirm a licensed copy exists for each one"
                - "Agree a peer check arrangement for work outside core expertise"
                - "Check your indemnity policy for checking and standards conditions"
            - name: Vendor compliance documentation that buyers accept
              description: |-
                ## Purpose
                Engineers at equipment vendors spend weeks answering the same buyer questions about codes, certificates and exceptions on every order. A standard compliance package, with code certifications held, typical exceptions stated plainly and a template compliance matrix, shortens technical bid evaluation and reduces rejected documents.

                ## Milestones
                1. Code certifications, accreditations and authorisations held by the company listed with expiry dates.
                2. Standard exceptions to common client specifications written with technical reasons.
                3. A template compliance matrix and certificate package ready for quotes.
                4. Rejection reasons from the last ten document submissions reviewed and the package fixed.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A ready compliance package with certifications, standard exceptions and a template matrix is used on new quotes."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the code certifications your company holds with expiry dates"
                - "Write your standard exceptions with a technical reason for each"
                - "Build a template compliance matrix for quotes"
                - "Review rejection reasons from the last ten document submissions"
            - name: Owner's engineer verification of contractor compliance
              description: |-
                ## Purpose
                As the owner's engineer, you are not doing the design but you are accountable for knowing it complies. A risk-based verification plan, sampling the contractor's register, matrix, deviations and certificates rather than re-checking everything, finds systemic problems without duplicating the contractor's work.

                ## Milestones
                1. A verification plan with sample sizes based on item criticality.
                2. The contractor's register, matrix and deviation register reviewed.
                3. Sampled items traced to evidence and findings issued.
                4. Systemic findings escalated to the contractor's management with a response date.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A verification report traces sampled items to evidence and records the contractor's response to every finding."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write a sampling plan weighted by item criticality"
                - "Review the contractor's register and deviation register"
                - "Trace the sampled items to their certificates and records"
                - "Issue findings with a requested response date"
            - name: Modifying plant built to superseded code editions
              description: |-
                ## Purpose
                Brownfield work means tying new design into equipment built to editions decades old, and the question of which edition governs the repair, alteration or new tie-in has to be answered clause by clause. Getting a documented position with the owner's integrity team and, where needed, the inspector, avoids both over-designing and illegal shortcuts.

                ## Milestones
                1. Original design codes and editions for the affected equipment found in the records.
                2. The rules for repairs and alterations under the applicable inspection code or regulation identified.
                3. A written position on which edition governs each part of the modification.
                4. The position accepted by the owner's integrity lead and inspector.

                ## Notes
                Where original records are missing, do not guess the design edition. Treat it as a gap and agree a basis with the integrity team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written edition basis for each part of the modification is accepted by the owner's integrity lead and inspector."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the original design code and edition in the equipment records"
                - "Identify the repair and alteration rules that apply"
                - "Write the edition basis for each part of the modification"
                - "Get the edition basis accepted by the integrity lead"
            - name: Code literacy plan for a new team member
              description: |-
                ## Purpose
                Graduates and engineers joining from another sector usually know the theory but not the codes this team lives in, and they learn bad habits from old PDFs. A short structured plan with the five codes that matter, guided exercises and a checked first task gets them working to code within their first two months.

                ## Milestones
                1. The five codes and standards the new engineer will use most chosen.
                2. Guided reading with one exercise per code set.
                3. A first real compliance check done by the new engineer and reviewed.
                4. Feedback recorded and the plan updated for the next joiner.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new engineer completes guided exercises on five codes and one reviewed compliance check within two months."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the five codes the new engineer will use most"
                - "Write one short exercise for each code"
                - "Assign a real compliance check and review it together"
                - "Update the plan with the new engineer's feedback"
            - name: Writing a company engineering standard
              description: |-
                ## Purpose
                When a company keeps adding the same requirements to every project, those lessons belong in a company standard that sits on top of the international codes. Writing one well means stating only what the base code does not, giving the reason for each requirement and setting an owner and review date, so it does not become another stale specification.

                ## Milestones
                1. The base standard and edition chosen and the need for each extra requirement recorded.
                2. A draft with numbered requirements, each with a short reason.
                3. Review comments from discipline leads and operations resolved.
                4. The standard issued with an owner and review date.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A company standard is issued with each requirement justified, comments resolved, and a named owner and review date."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect the extra requirements added on the last three projects"
                - "Draft numbered requirements, each with a short reason"
                - "Ask the agent to compare the draft with the base standard for duplicated clauses"
                - "Issue the standard with an owner and review date"
            - name: Joining a standards committee or working group
              description: |-
                ## Purpose
                Codes are written by volunteers from industry, and engineers who sit on committees understand the intent behind clauses and see changes years before publication. Joining a national mirror committee or a code body working group is a long commitment, so it is worth choosing one that matches your work and your employer's support.

                ## Milestones
                1. Committees relevant to your work identified through the national standards body or code publisher.
                2. Time commitment and employer support agreed in writing.
                3. An application or nomination submitted.
                4. The first meeting attended and a first comment or ballot response submitted.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "You are a member of one standards committee and have submitted at least one comment or ballot response."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find committees that match your work at the national standards body"
                - "Agree time and travel support with your manager"
                - "Submit an application or ask for a nomination"
                - "Read open ballots and draft comments before each deadline @recurring(monthly:14)"
            - name: Submitting a formal code interpretation request
              description: |-
                ## Purpose
                When a clause is genuinely ambiguous and the project position would rest on a guess, many code bodies will answer a formal inquiry. The question has to be framed as a yes or no about the code's requirements, not a request for design advice, and it takes months, so it suits recurring questions rather than urgent ones.

                ## Milestones
                1. Published interpretations searched to confirm the question is unanswered.
                2. The inquiry drafted in the publisher's required format with the edition and clause.
                3. The inquiry submitted and an interim project position agreed.
                4. The reply recorded in the query log and shared with the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A formal inquiry is submitted in the publisher's format, and the reply is recorded in the query log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search published interpretations for the same question"
                - "Read the publisher's rules for submitting inquiries"
                - "Draft the question as a yes or no about one clause"
                - "Agree an interim position while the reply is pending"
            - name: Compliance strategy for modules built abroad
              description: |-
                ## Purpose
                Modular plants are often fabricated in one country, shipped through another and installed in a third, each with its own product, pressure and electrical rules. A compliance strategy agreed before the fabrication contract is placed decides which codes, certifications and inspectors satisfy all three, and avoids re-certifying a finished module at the quay.

                ## Milestones
                1. Requirements of the fabrication, transit and installation jurisdictions listed.
                2. A single set of codes and certifications chosen that satisfies the installation regulator.
                3. Inspector and certifying body roles fixed in the fabrication contract.
                4. The strategy accepted by the installation country regulator before fabrication starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written compliance strategy for the modules is accepted by the installation regulator before fabrication starts."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List rules in the fabrication, transit and installation countries"
                - "Choose codes and certifications that satisfy the installation regulator"
                - "Write inspector and certifying roles into the fabrication contract"
                - "Present the strategy to the installation regulator"
            - name: Performance-based alternative to a prescriptive code
              description: |-
                ## Purpose
                Sometimes a prescriptive rule cannot be met, such as a fire separation distance on a tight brownfield site, and the code or regulator allows an engineered alternative. A performance-based case needs a clear objective, credible analysis, independent review and the regulator's acceptance, which is a far higher bar than a normal deviation.

                ## Milestones
                1. The prescriptive requirement and the code's underlying objective written down.
                2. The alternative analysed with a recognised method and stated assumptions.
                3. An independent reviewer's report on the analysis obtained.
                4. The alternative accepted in writing by the authority having jurisdiction.

                ## Notes
                If no route for alternatives exists in the code or the law, there is no performance-based option: redesign instead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A performance-based alternative with independent review is accepted in writing by the authority having jurisdiction."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Write down the prescriptive rule and its underlying objective"
                - "Confirm the code or law allows an engineered alternative"
                - "Commission an independent review of the analysis"
                - "Submit the alternative to the authority having jurisdiction"
            - name: Compliance basis for technology with immature codes
              description: |-
                ## Purpose
                New services such as high-pressure hydrogen, carbon dioxide pipelines or large battery storage often run ahead of the codes, which may cover only part of the hazard. Building a compliance basis means combining the nearest applicable codes, recent guidance and explicit risk assessment, and stating openly where no code applies.

                ## Milestones
                1. The nearest applicable codes, guidance and research identified for the technology.
                2. Coverage gaps listed where no recognised code addresses a hazard.
                3. Each gap given a risk assessment and an engineered safeguard.
                4. The compliance basis reviewed by a specialist and accepted by the regulator.

                ## Notes
                Start from the **Risk register** template for the gaps. Revisit the basis each time a relevant standard is published.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A compliance basis lists applicable codes, every uncovered hazard with its safeguard, and specialist and regulator acceptance."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List codes and guidance nearest to the new technology"
                - "Mark each hazard with no recognised code coverage"
                - "Enter each gap in the risk register with a safeguard"
                - "Book a specialist review of the compliance basis"
---

# Codes and Standards Compliance

Codes and Standards Compliance is for engineers who have to prove a design meets ASME, API, IEC, BS EN or local codes, and keep proving it as editions change and vendors push back. It starts with foundations (the project register, editions, order of precedence, an applicability matrix, deviations and the statutory map), then the operating routines that keep compliance current, the skills of reading the main code families, improvements and decisions such as choosing a design code or justifying an equivalent, dated events from shop inspections to handover dossiers, situations from overseas projects to small consultancies, and finally specialist work on company standards, committees and novel technology.

The rhythm is weekly for vendor deviation requests and certificate checks, monthly for the standards update watch, the interpretation log and the compliance matrix, quarterly for edition impact assessments and the project compliance report, and yearly for the register audit and withdrawn standards sweep. The Purchase decision, Compliance control, Reading queue, Metrics log, Operational checklist and Risk register templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
