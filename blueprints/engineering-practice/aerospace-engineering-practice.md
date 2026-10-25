---
id: engineering-practice.aerospace-engineering-practice
name: Aerospace Engineering Practice
description: "Your approvals and certification basis mapped, a controlled configuration baseline, and the directive, reliability, change board and compliance routines that keep aerospace design and maintenance evidence approvable."
category: business
version: 1.0.0
tags: [engineering-practice, aerospace-engineering-practice, engineer, airworthiness, certification, configuration-control, continuing-airworthiness, stress]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - metrics-log
    - meeting-notes
    - risk-register
    - remediation-plan
    - compliance-control
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Aerospace Engineering Practice
          description: "Working in aerospace engineering: design, stress or systems roles, airworthiness and certification evidence, configuration control and maintenance engineering."
          projects:
            - name: Role map across design, production and continued airworthiness
              description: |-
                ## Purpose
                Aerospace work sits inside approvals: a design organisation, a production organisation, a maintenance organisation and a continuing airworthiness organisation each hold different privileges, and an engineer's signature only counts inside the one they work for. Knowing which approval your team operates under, which authority oversees it and which documents you may sign stops you producing evidence nobody can use. It takes an afternoon and saves months of rework.

                ## Milestones
                1. The approvals your employer holds written down, with approval numbers and the overseeing authority (for example EASA, the FAA or a national civil aviation authority).
                2. Your own role placed in one of them: design, production, maintenance or continuing airworthiness.
                3. The documents you may author, check or approve listed from the exposition or procedures manual.
                4. The people who hold signatory or authorised privileges above you named.

                ## Notes
                On a military programme, the military airworthiness authority and its regulations take the place of the civil ones. The map is still worth drawing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map names each approval your employer holds, the authority behind it, your role within it and the documents you may sign."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your manager which approvals and approval numbers the organisation holds"
                - "Find the exposition or procedures manual on the company document system"
                - "List the documents your current role allows you to author, check or approve"
                - "Draw the one-page map and pin it beside your workstation"
            - name: Certification basis of the product you support
              description: |-
                ## Purpose
                Every type certificate rests on a certification basis: the airworthiness code at a fixed amendment, plus special conditions, equivalent safety findings and any elected compliance with later amendments. Engineers who design to the latest amendment instead of the one in the basis, or who miss a special condition, create findings late in the programme. Reading the type certificate data sheet and the basis puts the right requirements in front of every later calculation.

                ## Milestones
                1. The type certificate data sheet for your product downloaded from the authority's website and read.
                2. The certification basis listed: code, amendment, special conditions and equivalent safety findings.
                3. Requirements that apply to your work package marked, each paired with its guidance material or advisory circular.
                4. Questions about the basis raised with the airworthiness office and their answers recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of the certification basis marks the requirements for your work package, and every open question has an answer from the airworthiness office."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the type certificate data sheet for the product you work on"
                - "Copy the certification basis amendment levels into your notes"
                - "Mark the paragraphs that apply to your work package"
                - "Pair each marked paragraph with its acceptable means of compliance or advisory circular"
                - "Take your open questions to the airworthiness office"
            - name: Controlled library of airworthiness codes and guidance
              description: |-
                ## Purpose
                Working from a downloaded PDF of an old amendment is one of the commonest ways to produce non-compliant evidence. A personal index of the codes, guidance material, SAE and RTCA documents and company design manuals you use, each tied to the edition your project is certified against, makes it obvious when the latest copy is not the right copy.

                ## Milestones
                1. An index of every code, guidance document, industry standard and company manual you use, with the edition each project requires.
                2. Each entry linked to the controlled copy in the company library rather than a personal download.
                3. Documents the organisation does not hold flagged for the library to order.
                4. The index dated and checked against the library once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An index lists each document you use with the project's required edition and a link to the controlled copy, with no personal downloads left in use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every code, guidance document and standard you opened last month"
                - "Look up the edition each of your projects is certified against"
                - "Replace personal downloads with links to the controlled library copy"
                - "Ask the library to order any standard the organisation does not hold"
            - name: Design organisation procedures and signatory limits
              description: |-
                ## Purpose
                Inside an approved design organisation, who may classify a change, who may approve a minor repair and who must countersign a compliance document is written in the procedures, not left to custom. Reading the parts that touch your daily work, and confirming your own authorisation level in writing, keeps your signature valid and your manager's out of trouble.

                ## Milestones
                1. The procedures for design changes, repairs, compliance documents and independent checking read.
                2. Your authorisation level confirmed in writing, including any limits by discipline or product.
                3. The route for a document you cannot approve yourself drawn as a short flowchart.
                4. Two grey-area questions answered by the office of airworthiness.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your written authorisation level and a flowchart of the approval route for your documents are on file, confirmed by the office of airworthiness."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book an hour to read the design change and repair procedures"
                - "Ask for written confirmation of your authorisation level"
                - "Sketch the approval route for a document you cannot sign alone"
                - "Take two grey-area questions to the office of airworthiness"
            - name: Configuration baseline and effectivity map
              description: |-
                ## Purpose
                Two aircraft of the same type can carry different part numbers, software loads and modifications, and engineering that ignores effectivity puts the wrong repair or bulletin on the wrong airframe. A map of the current baseline for the products or tails you support, from the top drawing or delivery configuration down to embodied modifications, is the starting point for every change and every concession.

                ## Milestones
                1. The product structure or drawing tree for your work package exported from the PDM or PLM system.
                2. Effectivity ranges recorded by serial number, line number or tail.
                3. Embodied modifications, service bulletins and software part numbers listed for each configuration.
                4. Gaps between the records and the physical product raised with configuration management.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline lists part numbers, software loads and embodied modifications by effectivity for every configuration you support, with gaps raised."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the drawing tree for your work package from the PDM system"
                - "Record the serial or tail effectivity of each configuration"
                - "List embodied modifications and service bulletins for each configuration"
                - "Send any mismatch between records and product to configuration management"
            - name: Type familiarisation by ATA chapter
              description: |-
                ## Purpose
                Stress, systems and maintenance engineers all write better instructions once they have seen the hardware. Working through the aircraft by ATA chapter, with the maintenance manual open and a hangar visit for each major system, builds the picture of access, zones and interfaces that drawings alone never give.

                ## Milestones
                1. The ATA chapters relevant to your role listed and ranked by how often your work touches them.
                2. The description and operation sections of the maintenance manual read for the top five chapters.
                3. At least three hangar or line visits made with a technician, each tied to a chapter.
                4. A page of notes on access panels, zones and interfaces you did not expect.

                ## Notes
                Complete the hangar safety induction first. Never go onto the aircraft or the flight line without the escort and briefing your organisation requires.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes cover the five chapters most relevant to your role, with at least three logged hangar visits tied to them."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the ATA chapters your last ten work items touched"
                - "Read the description and operation section for the busiest chapter"
                - "Ask a licensed technician if you can shadow a task on that system"
                - "Write up the access panels and zones you met on each visit"
            - name: Approved materials data and allowables sources
              description: |-
                ## Purpose
                Allowables for metals and composites must come from statistically based, accepted sources such as MMPDS for metals or CMH-17 for composites, or from company test data the authority has accepted. A list of which sources your organisation accepts, at which revision and on which basis, prevents the classic finding of a margin built on a handbook typical value.

                ## Milestones
                1. The materials data sources your organisation accepts listed with revision and access route.
                2. The statistical basis used for each kind of structure confirmed with the stress lead.
                3. Company materials specifications for the alloys and systems you use located.
                4. One recent calculation traced back to its allowable source as a check.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of accepted allowables sources and bases is agreed with the stress lead, and one existing calculation has been traced back to them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the stress lead which allowables sources and bases are accepted"
                - "Locate the company materials specifications for your main alloys"
                - "Trace the allowable in one recent calculation back to its source"
                - "Note any calculation that used a typical value instead of a design value"
            - name: Competence record for design signatory authorisation
              description: |-
                ## Purpose
                Compliance verification and signatory authorisations are granted on evidence: documents authored and checked, training completed and experience on the product. Keeping that evidence as you go, against your organisation's written criteria, turns a nomination from a scramble into a short meeting.

                ## Milestones
                1. The criteria for the authorisation you want copied from the procedures.
                2. Every document you authored or checked in the past year logged with number and role.
                3. Required training listed with completion or booking dates.
                4. Gaps against the criteria agreed with your manager, with a target nomination date.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A competence record maps your logged documents and training against the authorisation criteria, with gaps and a nomination date agreed with your manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy the authorisation criteria from the design organisation procedures"
                - "Log each document you authored or checked this year with its number"
                - "Add the month's authored and checked documents to the record @recurring(monthly:28)"
                - "Agree the remaining gaps and a nomination date with your manager"
            - name: Hangar and flight line safety induction
              description: |-
                ## Purpose
                Engineers from an office background are most at risk on the flight line: propellers and intakes, jet blast, fuelling, towing, ground power and work at height on stands. Completing the induction, learning the local permit and aircraft isolation rules and knowing that anyone can stop a job they think is unsafe should all happen before the first hangar visit, not after it.

                ## Milestones
                1. The site's airside and hangar safety induction completed and an airside pass issued where required.
                2. Danger zones for engine running, propellers, jet blast and fuelling walked with a supervisor.
                3. The local permit to work, tag-out and aircraft isolation rules read.
                4. Your stop-work authority and how to use it confirmed with the hangar supervisor.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The airside and hangar induction is recorded on your training file and you have walked the danger zones with a supervisor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the hangar supervisor when the next safety induction runs"
                - "Read the local permit, tag-out and aircraft isolation rules"
                - "Walk the engine run and fuelling danger zones with a supervisor"
                - "Confirm how to stop a job you think is unsafe"
            - name: Weekly airworthiness directive and service bulletin screening
              description: |-
                ## Purpose
                Airworthiness directives are mandatory and their compliance times run from the effective date, not from the day someone notices them. Screening new directives and manufacturer bulletins against your fleet or product every week, and recording applicability and a decision for each, is the core routine of continuing airworthiness engineering.

                ## Milestones
                1. A screening log holds every new directive and bulletin since install, each with applicability and a decision.
                2. Applicable directives are in the maintenance planning system with their compliance limits.
                3. Bulletins are assessed as embody, defer or not applicable, each with a short reason.
                4. A monthly summary reaches the continuing airworthiness manager.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every directive and bulletin issued since install appears in the log with an applicability decision within seven days of release."
                cadence: rolling
              tasks:
                - "Subscribe to directive and bulletin notifications for your types and engines"
                - "Screen the week's new directives and bulletins for applicability @recurring(weekly:tue)"
                - "Enter applicable directives in the planning system with compliance limits"
                - "Send the monthly screening summary to the airworthiness manager @recurring(monthly:5)"
            - name: Monthly fleet reliability review
              description: |-
                ## Purpose
                Reliability programmes earn their keep when someone looks at the numbers every month: pilot reports per 1,000 flight hours by ATA chapter, unscheduled removals, mean time between unscheduled removals and dispatch reliability. Comparing them with alert levels and acting on the exceedances shows problems while they are still a trend, not an aircraft on the ground.

                ## Milestones
                1. Monthly figures for pilot reports, removals and dispatch reliability compiled by ATA chapter.
                2. Alert levels set from at least a year of history using the method the programme approves.
                3. Every chapter above its alert level given an investigation owner.
                4. Review minutes filed for the reliability committee and available to the authority.

                ## Notes
                Start from the **Metrics log** template. Removals that test serviceable in the shop are a signal in themselves; track them separately.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's reliability figures by ATA chapter are compared with alert levels and every exceedance has a named investigation owner."
                cadence: rolling
              tasks:
                - "Export last month's pilot reports and component removals"
                - "Compile reliability figures by ATA chapter against alert levels @recurring(monthly:8)"
                - "Assign an investigation owner to each alert level exceedance"
                - "File the review minutes for the reliability committee"
            - name: Configuration control board preparation
              description: |-
                ## Purpose
                Changes to an approved type design pass through a controlled board that checks classification, effectivity, interchangeability and the impact on certification evidence. Arriving at each board with change requests complete, impacts assessed and last time's actions closed keeps the meeting short and the baseline honest.

                ## Milestones
                1. Each change request for the next board checked for classification, effectivity and interchangeability.
                2. Impact on drawings, stress, systems, manuals and certification documents recorded per change.
                3. Actions from the previous board closed or carried forward with a reason.
                4. Board decisions and new effectivities reflected in the PDM system within a week.

                ## Notes
                Start from the **Meeting notes** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change request reaching the board has a completed impact assessment, and board decisions appear in the PDM system within seven days."
                cadence: rolling
              tasks:
                - "Get the change request list for the next board from configuration management"
                - "Check each request for classification, effectivity and interchangeability @recurring(weekly:thu)"
                - "Record the impact on manuals and certification documents per change"
                - "Update the PDM system with board decisions within the week"
            - name: Non-conformance and concession disposition log
              description: |-
                ## Purpose
                Parts that do not match the drawing turn up every week in production and maintenance, and each needs an engineering disposition: use as is, rework, repair or scrap, with substantiation. A log that follows every concession to closure, reviewed monthly for repeat offenders, keeps undocumented deviations out of the delivered configuration.

                ## Milestones
                1. A log of open non-conformances with part number, serial, defect, disposition and substantiation reference.
                2. Every use as is or repair disposition backed by a filed stress or systems check.
                3. Repeat non-conformances by part number reported monthly to quality and the supplier.
                4. No disposition left open beyond the agreed turnaround time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open non-conformance has a disposition with a substantiation reference, and repeat part numbers are reported to quality each month."
                cadence: rolling
              tasks:
                - "Pull the open non-conformance list from the quality system"
                - "Attach the substantiation reference to each disposition you signed"
                - "Report repeat non-conformances by part number to quality @recurring(monthly:15)"
                - "Chase any disposition past its turnaround time"
            - name: Technical query register for production and MRO
              description: |-
                ## Purpose
                Shop floor and maintenance teams stop work when a drawing, task card or manual cannot be followed, and an aircraft on the ground waits on the answer. A register with target response times, an AOG priority and a weekly sweep for queries that reveal a document error turns firefighting into feedback.

                ## Milestones
                1. A register of technical queries with date received, priority, owner and date answered.
                2. An AOG priority defined with a target response time agreed with operations.
                3. Queries caused by document errors sent back as change requests to the manual or drawing owner.
                4. Median response time reported monthly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every technical query is logged with priority and owner, AOG queries meet the agreed response time, and document errors become change requests."
                cadence: rolling
              tasks:
                - "Set up the register with date, priority, owner and answer columns"
                - "Agree an AOG response target with operations"
                - "Sweep the week's queries for document errors @recurring(weekly:mon)"
                - "Raise a change request for each manual or drawing error found"
            - name: Occurrence report and safety data review
              description: |-
                ## Purpose
                Mandatory and voluntary occurrence reports carry early signs of design and maintenance weaknesses, but only if an engineer reads them with the product in mind. Reviewing each month's reports for engineering causes, and feeding them into the safety management system and the continued airworthiness process, closes the loop between what happened on the line and what changes in design or maintenance.

                ## Milestones
                1. Monthly occurrence reports for your product or fleet received and read.
                2. Each report screened for a possible design, manufacturing or maintenance cause.
                3. Investigations opened for reports that suggest an unsafe condition, with the airworthiness office informed.
                4. Findings and actions presented to the safety review board.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's occurrence reports are screened for engineering causes, and any possible unsafe condition reaches the airworthiness office within the time the procedure sets."
                cadence: rolling
              tasks:
                - "Ask the safety office to add you to the occurrence report circulation"
                - "Screen the month's occurrence reports for engineering causes @recurring(monthly:20)"
                - "Pass any possible unsafe condition to the airworthiness office the same day"
                - "Present findings and actions at the safety review board"
            - name: Deferred defect and MEL watch
              description: |-
                ## Purpose
                Deferring defects under the minimum equipment list is legal, but repeated deferrals of the same item, extensions and defects sitting near their limits are where reliability and safety quietly slip. A weekly look at open deferrals from the engineering side, with a push on repeats and parts shortages, keeps the list short and the rectification intervals respected.

                ## Milestones
                1. Open deferred defects listed weekly with MEL category, date raised and limit.
                2. Repeat deferrals of the same item on the same aircraft flagged for troubleshooting help.
                3. Parts shortages behind deferrals escalated to materials with the aircraft impact stated.
                4. No item reaching its rectification limit without a plan in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly deferral review shows no item reaching its rectification limit without a plan, and repeat deferrals have a troubleshooting owner."
                cadence: rolling
              tasks:
                - "Get read access to the deferred defect list in the maintenance system"
                - "Review open deferrals against their rectification limits @recurring(weekly:fri)"
                - "Flag items deferred more than twice on the same aircraft"
                - "Escalate parts shortages behind deferrals to materials"
            - name: Annual maintenance programme amendment cycle
              description: |-
                ## Purpose
                The approved maintenance programme drifts out of date as the manufacturer revises its planning data, directives add tasks and reliability evidence supports changes. One deliberate amendment cycle a year, plus quarterly checks for mandatory changes, keeps the programme approved, current and defensible at audit.

                ## Milestones
                1. Manufacturer planning data revisions since the last amendment compared with the programme.
                2. Mandatory changes from directives and airworthiness limitations incorporated.
                3. Every interval change backed by reliability data or a manufacturer revision.
                4. The amendment approved by the authority or under indirect approval, and the revision issued.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "One programme amendment each year incorporates all manufacturer and mandatory changes and is approved and issued, with quarterly checks recorded."
                cadence: cyclic
              tasks:
                - "Note which revision of the manufacturer planning data the programme is based on"
                - "Check for mandatory changes needing a programme update @recurring(quarterly)"
                - "Draft the yearly amendment with a reason for every change @recurring(yearly)"
                - "Submit the amendment for approval and track the response"
            - name: Compliance document status tracker
              description: |-
                ## Purpose
                Programmes slip on the compliance documents nobody is watching: the test report waiting on a conformity, the analysis stuck in checking, the document returned by the authority with comments. A monthly status sweep of every compliance document your team owes, against the certification plan, shows which will be late while there is still time to act.

                ## Milestones
                1. Every compliance document your team owes listed with requirement, means of compliance, status and planned date.
                2. Documents held up by checking, conformity or authority comments identified with an owner.
                3. A monthly status note sent to the certification manager.
                4. Late documents given a recovery date agreed with their owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status list of every compliance document owed by your team is updated monthly and every late document has an agreed recovery date."
                cadence: rolling
              tasks:
                - "Copy your team's compliance documents from the certification plan"
                - "Update the status of each compliance document @recurring(monthly:25)"
                - "Ask the agent to draft the monthly status note from the tracker"
                - "Agree a recovery date with the owner of each late document"
            - name: Regulatory change watch for your product category
              description: |-
                ## Purpose
                Rule changes reach engineers years after they were proposed, and the consultation stage is the only time an engineer can comment or plan ahead. A quarterly look at proposed amendments, notices of proposed rulemaking and new guidance for your product category shows which changes will touch your programme, and when.

                ## Milestones
                1. Sources listed: the authorities' rulemaking pages and industry association bulletins for your category.
                2. Each quarter's proposals screened and the relevant ones summarised in a paragraph.
                3. Impacts on current programmes passed to the airworthiness office.
                4. Comments submitted through the company on at least one consultation that matters to you.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly note lists proposed rule and guidance changes relevant to your product, with programme impacts passed to the airworthiness office."
                cadence: rolling
              tasks:
                - "Bookmark the rulemaking pages of the authorities you work with"
                - "Screen new proposals and guidance for your category @recurring(quarterly)"
                - "Summarise each relevant proposal in one paragraph"
                - "Pass programme impacts to the airworthiness office"
            - name: Stress reports with clear margins of safety
              description: |-
                ## Purpose
                A stress report is read by a checker, a compliance verification engineer and sometimes the authority, and each wants to find the load case, method, allowable and margin without hunting. Learning the house format, free body diagrams, load path explanations and a consistent way of stating reserve factors and margins of safety turns a correct analysis into an approvable one.

                ## Milestones
                1. The company stress manual and report template read, including fitting factors and margin conventions.
                2. Three approved stress reports for similar parts studied for structure and method.
                3. A practice analysis of a simple bracket written in house format and checked by a senior.
                4. Checker comments on your first live report closed with no repeated comment type.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice bracket analysis in house format passes a senior's check, and your first live report closes with no repeated comment types."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the stress manual sections on factors and margin conventions"
                - "Pick three approved reports for similar parts to study"
                - "Write a bracket analysis in house format for a senior to check"
                - "Group the checker comments on your report by type"
            - name: Fatigue and damage tolerance fundamentals
              description: |-
                ## Purpose
                Primary structure on transport aircraft is certified against fatigue and damage tolerance requirements: cracks are assumed, grown to critical size and found by inspection before they get there. Understanding spectrum loading, crack growth, inspection thresholds and intervals, and the limit of validity is essential for anyone signing structural changes or repairs.

                ## Milestones
                1. The damage tolerance requirement and guidance for your product's code read.
                2. A worked crack growth example reproduced with the company's method or tool.
                3. The link between crack growth life, detectable crack size and inspection interval explained in your own words.
                4. One damage tolerance substantiation for a past repair reviewed with a specialist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have reproduced one crack growth example and reviewed a past repair's damage tolerance substantiation with a fatigue specialist."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the damage tolerance requirement and its guidance material"
                - "Reproduce one worked crack growth example with the company tool"
                - "Explain the inspection interval logic to a colleague in five minutes"
                - "Book an hour with a fatigue specialist to review a past repair"
            - name: Development assurance and safety assessment under ARP4754 and ARP4761
              description: |-
                ## Purpose
                Systems engineers on modern aircraft work within the SAE ARP4754 and ARP4761 family of guidance: functional hazard assessments, preliminary and final system safety assessments, and development assurance levels assigned to functions and items. Learning how failure conditions and their classifications flow down into requirements makes every systems review easier to follow and to defend.

                ## Milestones
                1. The aircraft and system functional hazard assessments for your system read.
                2. Failure condition classifications and their probability objectives explained in your own notes.
                3. The assignment of development assurance levels to your functions and items traced.
                4. One fault tree or dependence diagram from the safety assessment walked through with a safety engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your notes trace failure conditions to assurance levels for your system, and you have walked one fault tree through with a safety engineer."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get read access to the functional hazard assessments for your system"
                - "List the failure conditions and classifications that touch your functions"
                - "Trace how assurance levels were assigned to your items"
                - "Walk one fault tree through with a safety engineer"
            - name: Software and airborne electronic hardware assurance basics
              description: |-
                ## Purpose
                Avionics and flight control systems depend on software developed to DO-178C and complex electronic hardware developed to DO-254, and systems engineers write the requirements those teams verify. Knowing the plans, how objectives change with assurance level, requirements traceability and the authority's stages of involvement stops systems requirements arriving untestable or late.

                ## Milestones
                1. The plan for software aspects of certification, and its hardware equivalent, read for your system.
                2. The objectives that change with assurance level summarised on one page.
                3. A sample of your system requirements traced down to software or hardware requirements and tests.
                4. The authority's stages of involvement noted in your programme plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of objectives by level and a traced sample of your requirements down to tests are reviewed by the software assurance lead."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the software lead for the plan for software aspects of certification"
                - "Summarise how objectives change with assurance level"
                - "Trace five of your system requirements down to tests"
                - "Note the stages of involvement in your programme plan"
            - name: Composite structures and damage assessment
              description: |-
                ## Purpose
                Composite parts fail differently from metal: barely visible impact damage can hide delaminations, heat and moisture knock down strength, and bonded repairs depend on process control as much as on design. Engineers who disposition composite damage or design repairs need the material behaviour, inspection methods and repair limits clear before the first AOG call.

                ## Milestones
                1. Company guidance on composite allowables, environmental knockdowns and damage tolerance read.
                2. Barely visible impact damage, delamination and disbond explained with examples from your product.
                3. The nondestructive inspection methods approved for your structure listed with their limits.
                4. One composite repair scheme reviewed with a materials and processes engineer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on composite behaviour and inspection for your structure exist, and one repair scheme has been reviewed with a materials and processes engineer."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Read the composite design guidance in the company manuals"
                - "List the inspection methods approved for your composite parts"
                - "Collect three past composite damage cases from the fleet"
                - "Review one repair scheme with a materials and processes engineer"
            - name: Working from the structural repair manual
              description: |-
                ## Purpose
                Most structural damage found in service is handled within the manufacturer's structural repair manual, and only damage outside it needs a new repair design. Knowing how to read allowable damage limits and typical repairs, and when to stop and go to the manufacturer or a design organisation, is daily work for maintenance engineers.

                ## Milestones
                1. The general chapter of the repair manual read, including fastener, material and corrosion sections.
                2. Allowable damage limits located for the five most damaged areas in your fleet.
                3. Three past repairs traced from damage report to repair manual reference and records entry.
                4. The route for damage outside manual limits written down with contacts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can locate allowable damage limits for the five most damaged areas, and the route for damage outside manual limits is written down with contacts."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the general chapter of the structural repair manual"
                - "Find the allowable damage limits for your fleet's most damaged areas"
                - "Trace three past repairs from damage report to records entry"
                - "Write down the route for damage outside manual limits"
            - name: Weight and balance control
              description: |-
                ## Purpose
                Modifications, cabin changes and repairs all add or move mass, and a centre of gravity outside limits is a flight safety problem, not a paperwork one. Learning how your organisation calculates and records weight and balance, when a reweigh is due and how changes reach the operator's load sheet keeps that link intact.

                ## Milestones
                1. The weight and balance manual and the organisation's procedure read.
                2. A weight and balance change calculated for a recent modification and checked.
                3. Reweigh intervals and triggers for your fleet confirmed.
                4. The flow from engineering change to the operator's basic empty weight record mapped.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checked weight and balance calculation for a recent modification and a mapped flow to the basic empty weight record are on file."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the weight and balance procedure for your fleet"
                - "Calculate the weight and balance effect of a recent modification"
                - "Ask a checker to review your weight and balance calculation"
                - "Map how the change reaches the operator's basic empty weight record"
            - name: Environmental qualification of airborne equipment
              description: |-
                ## Purpose
                Airborne equipment is qualified against environmental test conditions such as those in RTCA DO-160: temperature, altitude, vibration, humidity, power input, lightning and electromagnetic categories. Systems and equipment engineers who can read a qualification report and match its test categories to the actual installation catch gaps before an item fails in service.

                ## Milestones
                1. The environmental qualification requirements in your equipment specification read.
                2. Test categories in a recent qualification report matched to the installation zone.
                3. Any category not tested, or covered by similarity, listed with its justification.
                4. The findings reviewed with the equipment qualification lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table matching qualification test categories to installation conditions for one item of equipment is reviewed by the qualification lead."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one item of equipment in your system with a recent qualification report"
                - "Match each test category to the installation zone conditions"
                - "List categories covered by similarity with their justification"
                - "Review the table with the qualification lead"
            - name: Compliance checklist with means of compliance for a change
              description: |-
                ## Purpose
                For every design change the authority wants to see each applicable requirement paired with how compliance is shown: a statement, calculation, test, inspection, simulation or similarity. Building the compliance checklist before analysis starts fixes the evidence plan and the documents everyone owes, and prevents the late surprise of a requirement nobody addressed.

                ## Milestones
                1. All applicable requirements for the change listed from the certification basis.
                2. A means of compliance chosen for each, using your organisation's codes.
                3. Each requirement assigned a compliance document number and author.
                4. The checklist agreed with the airworthiness office and, where needed, the authority.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A compliance checklist pairs every applicable requirement with a means of compliance, a document number and an author, and is agreed with the airworthiness office."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Start the checklist from the certification basis for the change"
                - "Choose a means of compliance for each requirement"
                - "Assign a document number and author to every line"
                - "Book the checklist review with the airworthiness office"
            - name: Classifying a change or repair as minor or major
              description: |-
                ## Purpose
                Whether a change or repair is minor or major decides who can approve it, how long it takes and whether the authority is involved. Applying the classification criteria in the regulations and your organisation's procedures, and writing the justification down, is a decision that has to be right the first time on every change.

                ## Milestones
                1. The classification criteria and guidance for your authority read and summarised.
                2. Three past classifications reviewed to see how the criteria were applied.
                3. A classification justification written for a current change.
                4. The classification agreed with the office of airworthiness and recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written classification justification for a current change is agreed with the office of airworthiness and filed with the change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the classification criteria and their guidance"
                - "Pull three past classification records from the change system"
                - "Write the justification for your current change against each criterion"
                - "Get the classification agreed and recorded by the airworthiness office"
            - name: Obsolescence plan for an ageing part
              description: |-
                ## Purpose
                Components and electronic parts go out of production long before the aircraft retires, and finding out at the next failure leaves a fleet waiting for a part that no longer exists. Picking one critical part with a supply warning and comparing a lifetime buy, an approved alternative, a redesign and a repair scheme gives the business a decision with cost and certification effort attached.

                ## Milestones
                1. Parts with end-of-life notices or a single source in your system listed.
                2. One critical part chosen and its fleet demand forecast over the remaining service life.
                3. Lifetime buy, alternative part, redesign and repair options compared on cost, lead time and certification effort.
                4. A recommendation approved and recorded in the obsolescence register.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for one critical obsolete part compares four options on cost, lead time and certification effort."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask supply chain for parts with end-of-life notices in your system"
                - "Forecast fleet demand for the chosen part over the remaining life"
                - "Compare buy, alternative, redesign and repair options in one table"
                - "Record the approved choice in the obsolescence register"
            - name: Supplemental type certificate or in-house route for a modification
              description: |-
                ## Purpose
                An operator wanting a cabin, avionics or connectivity modification can buy an existing supplemental type certificate, ask a design organisation to develop one or, if approved to do so, design it in-house. Comparing the routes on certification effort, cost, schedule and the ongoing duty to support the design avoids committing to the expensive one by default.

                ## Milestones
                1. The modification scope and the configurations it must cover written down.
                2. Existing supplemental type certificates for the type searched on the authorities' databases.
                3. Estimates for each route gathered.
                4. A decision recorded with continued airworthiness responsibilities assigned.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares the existing certificate, contracted and in-house routes on cost, schedule and support duties, with responsibilities assigned."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the modification scope and the tails it must cover"
                - "Search the authorities' databases for existing certificates for the type"
                - "Request an estimate from at least one approved design organisation"
                - "Record the chosen route and who holds continued airworthiness duties"
            - name: Eliminating a repeat pilot report defect
              description: |-
                ## Purpose
                Defects that are written up, cleared as could not duplicate and written up again cost delays and parts that test serviceable in the shop. Taking one repeat defect from the tech log through systematic troubleshooting with the line and the component shop, and closing it with a fix that holds for three months, is the most visible result a maintenance engineer can deliver.

                ## Milestones
                1. The worst repeat defect chosen from three months of tech log entries.
                2. Every write-up, action taken and part removed for it laid out on one timeline.
                3. A troubleshooting plan agreed with the line and the component shop.
                4. A fix embodied and no repeat write-up for three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The chosen repeat defect has a fix embodied and no repeat write-up for three months after it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the worst repeat defect from three months of tech log entries"
                - "Lay every write-up and removal for it on one timeline"
                - "Agree a troubleshooting plan with the line and component shop"
                - "Check the tech log for repeats of the fixed defect @recurring(monthly:12)"
            - name: Corrosion prevention for salt-air island operations
              description: |-
                ## Purpose
                Aircraft based on islands and coasts, from the Caribbean to the North Sea, corrode far sooner than inland fleets, and a corrosion prevention programme written for average conditions underestimates it. Reviewing findings by zone, adjusting wash and inhibitor intervals within the manufacturer's guidance and feeding the results back into the programme keeps structural repairs small.

                ## Milestones
                1. Corrosion findings from the last two years of checks sorted by zone and level.
                2. Current corrosion programme tasks compared with the manufacturer's guidance for severe environments.
                3. Wash and inhibitor intervals for the fleet proposed with evidence.
                4. Programme changes approved and their effect reviewed after the next round of checks.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Corrosion programme changes based on two years of findings are approved, with a review set for after the next round of checks."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Export two years of corrosion findings from the maintenance records"
                - "Sort the findings by zone and corrosion level"
                - "Compare the programme with the manufacturer's severe environment guidance"
                - "Propose wash and inhibitor intervals with the evidence attached"
                - "Review new corrosion findings against the plan @recurring(quarterly)"
            - name: Escalating a maintenance task interval with evidence
              description: |-
                ## Purpose
                Task intervals set before entry into service are often conservative, and an escalation backed by findings data can cut downtime without cutting safety margins. Building the case for one task, with inspection results, findings rates and the manufacturer's position, and taking it through the reliability committee is how intervals move legitimately.

                ## Milestones
                1. One task chosen with a long record of no-finding results.
                2. Findings data for the task gathered across the fleet with the sample size stated.
                3. An escalation case written using the method your programme approves.
                4. The case decided by the reliability committee and, if approved, the programme amended.

                ## Notes
                Airworthiness limitations and certification maintenance requirements are controlled by the type certificate holder and the authority, and are never escalated this way.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An escalation case for one task, with fleet findings data and sample size, is decided by the reliability committee and the decision recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick a task with a long record of no findings"
                - "Gather fleet findings data and count the sample"
                - "Write the escalation case using the approved method"
                - "Table the case at the next reliability committee"
            - name: Clearer engineering orders and task cards
              description: |-
                ## Purpose
                Many maintenance errors start with an instruction that was ambiguous, out of order or impossible to follow at the aircraft. Rewriting your engineering orders and task cards with human factors in mind, testing them with the technicians who use them and tracking the queries they generate reduces errors and query traffic together.

                ## Milestones
                1. Five recent engineering orders reviewed with the technicians who carried them out.
                2. Common problems listed: missing access steps, unclear values, steps out of order.
                3. A short writing checklist agreed with planning and quality.
                4. Queries per engineering order compared for three months before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A writing checklist is in use and queries per engineering order are compared for three months before and after it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask two technicians to talk you through a recent engineering order"
                - "List the problems they hit in the order they hit them"
                - "Agree a writing checklist with planning and quality"
                - "Ask the agent to check a draft order against the checklist"
            - name: Authority audit of the design or airworthiness organisation
              description: |-
                ## Purpose
                Authority audits of design, production, maintenance and continuing airworthiness organisations sample real work: a change, a repair, a directive decision, a competence record. Preparing the files you own, knowing where the evidence sits and closing your old findings means the audit tests the system rather than your memory.

                ## Milestones
                1. The audit scope and dates obtained from quality.
                2. The files you own in sampled areas checked for completeness and signatures.
                3. Your open findings from previous audits closed with evidence.
                4. Findings raised against your work answered with root cause and corrective action within the required time.

                ## Notes
                Start from the **Compliance control** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every file you own in the audit scope is complete on the day, and any finding against your work has an accepted corrective action within the required time."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask quality for the audit scope and dates"
                - "Check signatures and references on the files you own in scope"
                - "Close your open findings from previous audits with evidence"
                - "Answer any new finding with root cause and corrective action"
            - name: Witnessing a certification test
              description: |-
                ## Purpose
                Tests only count as certification evidence if the test article and set-up conform to the documented configuration, the test plan was agreed and the right people witnessed it. Running the conformity inspection, the pre-test briefing and the witness record in order, then issuing the report quickly, protects weeks of rig time from being spent on a test the authority will not accept.

                ## Milestones
                1. The test plan agreed with the airworthiness office and the authority's witnessing intent known.
                2. Conformity of the test article and instrumentation recorded before the test.
                3. A pre-test briefing held with stop criteria, exclusion zones and roles confirmed.
                4. The test witnessed and the report issued with every deviation explained.

                ## Notes
                Structural and pressure rigs store a lot of energy. Agree stop criteria and exclusion zones in the briefing and make clear that anyone may stop the test.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The test report is issued with a conformity record, a witness record and every deviation explained, and is accepted as compliance evidence."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Confirm whether the authority intends to witness the test"
                - "Book the conformity inspection of the test article"
                - "Hold the pre-test briefing with stop criteria and exclusion zones"
                - "Issue the test report with each deviation explained"
            - name: Preliminary and critical design review for a subsystem
              description: |-
                ## Purpose
                Programmes gate design maturity through a preliminary design review and a critical design review, and a subsystem that arrives without requirements traceability, agreed interfaces or a verification plan is sent back. Preparing the package against the programme's entry criteria turns the review into a decision instead of a discovery session.

                ## Milestones
                1. The entry and exit criteria for the review obtained from the programme office.
                2. Subsystem requirements traced to design features and to planned verification.
                3. Interface control documents agreed with neighbouring systems.
                4. The review held, actions logged with owners and the exit criteria signed off.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The review exit criteria are signed off and every review action has an owner and a due date in the action log."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get the review entry and exit criteria from the programme office"
                - "Trace subsystem requirements to design features and verification"
                - "Close open interface control document comments with neighbouring teams"
                - "Log every review action with an owner and due date"
            - name: First article inspection of a new part
              description: |-
                ## Purpose
                New parts, new suppliers and changed processes need a first article inspection, commonly to AS9102 in aerospace, before production parts are accepted. Engineering's role is to confirm every drawing characteristic is covered and to disposition anything that does not match, so the first article proves the process rather than one lucky part.

                ## Milestones
                1. Every drawing characteristic ballooned and listed on the first article forms.
                2. Material and special process certificates checked against the drawing call-outs.
                3. Each non-conforming characteristic dispositioned through the non-conformance process.
                4. The first article approved and filed with the part history.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete first article report covers every drawing characteristic, with any non-conformance dispositioned and the report approved."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the drawing revision the first article must match"
                - "Check the ballooned drawing covers every characteristic"
                - "Check material and special process certificates against the call-outs"
                - "Approve the first article report once every item is closed"
            - name: Engineering package for a heavy maintenance check
              description: |-
                ## Purpose
                Heavy checks open up the aircraft once every few years, and they are the only time to embody modifications, carry out deep inspections and fix structure without extra downtime. Freezing the engineering scope early, with directives, bulletins, repairs and engineering orders ready before induction, stops the check overrunning while engineering writes orders on the hangar floor.

                ## Milestones
                1. Directives, bulletins and modifications due before the following check identified for the tail.
                2. Engineering orders issued before induction, with parts on order.
                3. An engineering cover rota agreed for findings during the check.
                4. All findings dispositioned and records complete at release to service.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every planned engineering order is issued before induction and every finding is dispositioned, with records complete at release to service."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List directives and bulletins falling due before the following check for the tail"
                - "Set a scope freeze date with planning"
                - "Issue engineering orders and confirm parts are on order before induction"
                - "Agree an engineering cover rota for findings during the check"
            - name: Aircraft records audit for lease return or entry into service
              description: |-
                ## Purpose
                When an aircraft changes hands, its value depends on its records: back-to-birth traceability for life-limited parts, directive compliance status, repair approvals and maintenance history. Auditing the records before the handover meeting, not during it, finds the missing release certificates and unapproved repairs while there is time to fix them.

                ## Milestones
                1. The records requirements of the lease or purchase agreement listed.
                2. Life-limited parts traced back to birth with no gaps.
                3. Directive and modification status reconciled with the physical aircraft.
                4. Every repair matched to an approved repair data reference.
                5. A gap list closed or accepted in writing by the other party.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A records audit shows back-to-birth traceability for every life-limited part and approved data for every repair, with any remaining gaps accepted in writing."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Get the records requirements from the lease or purchase agreement"
                - "Trace each life-limited part back to birth"
                - "Reconcile directive status with the physical aircraft"
                - "Match each repair to its approved data reference"
                - "Send the gap list to the other party for written acceptance"
            - name: First six months as a stress engineer
              description: |-
                ## Purpose
                Graduates in stress roles often spend months on brackets and clips before they see primary structure, and that time pays off if it is used to learn the checking culture. A plan for the first six months, with a mentor, progressively harder analyses and a habit of logging checker comments, builds the speed and judgement seniors look for.

                ## Milestones
                1. A six-month plan agreed with your lead naming the kinds of analysis you will cover.
                2. A senior stress engineer named as your checker and mentor.
                3. Analyses completed for at least three kinds of part, each passing check.
                4. A personal log of checker comments and what you changed in response.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Analyses for three kinds of part have passed check within six months, backed by a log of checker comments and responses."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree a six-month analysis plan with your lead"
                - "Ask a senior stress engineer to act as your checker and mentor"
                - "Log the week's checker comments and your responses @recurring(weekly:wed)"
                - "Review the comment log with your mentor at the end of each month"
            - name: From licensed technician to maintenance engineering
              description: |-
                ## Purpose
                Licensed aircraft technicians who move into the engineering office bring knowledge of the aircraft that graduates lack, but meet a new world of reliability data, directives, programmes and approved data. Planning the move around the real gaps, such as technical writing, continuing airworthiness regulations and data tools, makes the first year productive instead of frustrating.

                ## Milestones
                1. Your strengths from line or base maintenance listed against the engineering role description.
                2. Gaps identified in regulations, writing, data tools or design basics.
                3. A course or mentored task chosen for each gap.
                4. Your first engineering order or reliability investigation completed and reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A gap plan built from the engineering role description is agreed with your manager, and your first engineering order or investigation has been reviewed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compare your maintenance experience with the engineering role description"
                - "List the gaps in regulations, writing and data tools"
                - "Choose a course or mentored task for each gap"
                - "Ask for a review of your first engineering order"
            - name: Moving into aerospace from another engineering industry
              description: |-
                ## Purpose
                Engineers from automotive, oil and gas, rail or civil backgrounds already know analysis and design, but aerospace adds certification, conformity, approvals and a much heavier paper trail. Mapping what transfers, what is different and who to learn from in the first three months avoids the newcomer error of producing good engineering that cannot be used as evidence.

                ## Milestones
                1. The methods and tools from your previous industry that transfer directly listed.
                2. The practices you must learn listed: certification basis, conformity, compliance documents, approvals.
                3. A colleague named for each new practice.
                4. Your first compliance document authored and checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your first compliance document is authored and passes check within three months, alongside a written list of transferable and new practices."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down the methods and tools you used in your last industry"
                - "Mark which ones the aerospace procedures accept as they are"
                - "Name a colleague to ask about each new practice"
                - "Agree a first compliance document to author with your lead"
            - name: Contract engineer between aerospace programmes
              description: |-
                ## Purpose
                Contract stress, systems and certification engineers move between programmes and companies every year or two, and each move resets authorisations and access. Keeping a record of authorisations held, a portfolio of work you are allowed to describe and a clear list of export control and confidentiality duties makes each new contract start faster and safer.

                ## Milestones
                1. A record of authorisations, training and programmes, with dates and referees.
                2. A portfolio of work described at a level your contracts and export rules allow.
                3. Export control and confidentiality obligations from past contracts listed so you keep to them.
                4. A shortlist of programmes and agencies matching your next availability date.

                ## Notes
                Never carry drawings, reports or models from one client to the next. Describe the type and scale of the work instead.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A portfolio and authorisation record that respects past confidentiality and export obligations is ready before your next availability date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the authorisations and training you held on each contract"
                - "Check past contracts for confidentiality and export control obligations"
                - "Describe each programme at a level those obligations allow"
                - "Refresh the record and portfolio before the contract renewal date @recurring(yearly)"
            - name: Sole engineer at a small regional operator
              description: |-
                ## Purpose
                At a small regional airline or MRO, one or two engineers may cover directives, reliability, repairs, records and the maintenance programme together, often with the manufacturer far away and parts days away by sea or air. A written split of what you handle, what you contract out and who to call for each kind of problem keeps a small team from becoming a single point of failure.

                ## Milestones
                1. Every engineering task the organisation needs listed with its frequency.
                2. Each task marked as in-house, contracted to a design organisation or supported by the manufacturer.
                3. Contact routes for manufacturer support, approved design organisations and the authority recorded.
                4. Cover in place for when you are on leave or ill.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written split of in-house and contracted engineering tasks, with contacts and leave cover, is agreed with the accountable manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every engineering task the organisation needs with its frequency"
                - "Mark each task as in-house, contracted or manufacturer supported"
                - "Record contact routes for manufacturer and design organisation support"
                - "Agree leave cover with the accountable manager"
            - name: Leading a small aerospace engineering team
              description: |-
                ## Purpose
                Becoming a lead means signing less of your own analysis and checking more of other people's, while owning the schedule, the authority interface and the competence of the team. A checking rota, a development action for each engineer and a weekly look at the work package keep quality and delivery visible.

                ## Milestones
                1. Each engineer's authorisations and development needs recorded.
                2. A checking rota in place that stops anyone checking their own work.
                3. A weekly view of documents due, in check and overdue.
                4. One development action agreed with every engineer each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engineer has recorded authorisations and a quarterly development action, and nobody checks their own work under the rota."
                cadence: rolling
              tasks:
                - "Record each engineer's authorisations and development needs"
                - "Set a checking rota so no one checks their own work"
                - "Review documents due, in check and overdue with the team @recurring(weekly:mon)"
                - "Agree one development action with each engineer @recurring(quarterly)"
            - name: Spacecraft requirements verification matrix
              description: |-
                ## Purpose
                Space programmes run under ECSS or NASA systems engineering processes, where each requirement is closed by test, analysis, review of design or inspection, often at several levels from unit to system. A verification matrix kept current from the first design review to launch is what the customer examines at qualification and acceptance.

                ## Milestones
                1. Requirements for your unit or subsystem imported with their verification method and level.
                2. Each requirement linked to the plan, procedure and report that closes it.
                3. Open requirements reviewed before each milestone review.
                4. The matrix closed at qualification and acceptance with waivers recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every requirement in the matrix links to its closing report or an approved waiver at the qualification and acceptance reviews."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Import your subsystem requirements with method and level"
                - "Link each requirement to its plan, procedure and report"
                - "Review open requirements before each milestone review"
                - "Record waivers and deviations against the requirement they affect"
            - name: Unmanned aircraft operational risk assessment
              description: |-
                ## Purpose
                Drones and other unmanned aircraft flying beyond the simplest categories are often approved on an operational risk assessment, such as the SORA method used in many jurisdictions, rather than a full type certificate. Engineers supporting these operations produce the ground and air risk analysis, the mitigations and the design and maintenance evidence behind them, and the quality of that file decides how fast the approval comes.

                ## Milestones
                1. A concept of operations written with the area, altitude and aircraft described.
                2. Ground and air risk classes worked out with the method your authority accepts.
                3. Mitigations listed with the evidence for each.
                4. The assessment submitted and the authority's questions answered.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A risk assessment with a concept of operations, risk classes and evidenced mitigations is submitted to the authority and every question answered."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the concept of operations for the planned flights"
                - "Check which risk assessment method your authority accepts"
                - "Work out the ground and air risk classes"
                - "List each mitigation with the evidence behind it"
            - name: Ageing aircraft and limit of validity programme
              description: |-
                ## Purpose
                Older transport aircraft face widespread fatigue damage, repairs that need damage tolerance reassessment and a limit of validity of the maintenance programme beyond which they cannot fly without new data. Knowing where each airframe stands against these limits lets the operator plan inspections, modifications or retirement years ahead.

                ## Milestones
                1. Each airframe's flight cycles and hours compared with the limit of validity.
                2. Repairs on each airframe checked for a damage tolerance assessment.
                3. Inspection and modification programmes for widespread fatigue damage identified and planned.
                4. A fleet table shared with planning and the accountable manager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fleet table shows cycles and hours against the limit of validity for every airframe, with repair assessments and inspections planned."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get flight cycles and hours for each airframe in the fleet"
                - "Compare each airframe with the limit of validity"
                - "Check every repair on the oldest airframes for a damage tolerance assessment"
                - "Review the fleet table against the limit of validity with planning @recurring(yearly)"
---

# Aerospace Engineering Practice

Aerospace engineering is good engineering plus evidence: every calculation, change, repair and maintenance decision has to fit inside an approval, a certification basis and a controlled configuration before it counts. These projects start with the foundations (your approvals and signatory limits, the certification basis, the configuration baseline, materials data and hangar safety), move through the operating routines of directive screening, reliability reviews, change boards and compliance tracking, then the skills of stress reporting, damage tolerance, safety assessment and repair manuals, the decisions on classification, obsolescence and modification routes, dated events such as audits, certification tests and heavy checks, situations from graduate stress engineer to sole engineer at a small operator, and specialist work on spacecraft verification, unmanned aircraft and ageing fleets.

What repeats is weekly directive screening, change board preparation, technical query and deferral sweeps, monthly reliability, concession, occurrence and compliance status reviews, and quarterly and yearly programme and regulation checks. The Skills matrix, Metrics log, Meeting notes, Risk register, Remediation plan and Compliance control templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
