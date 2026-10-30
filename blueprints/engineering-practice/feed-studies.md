---
id: engineering-practice.feed-studies
name: FEED Studies
description: "A FEED that holds up at final investment decision: a frozen basis of design, defined process and layout, controlled holds and changes, a defensible estimate basis and a clean handover to the EPC contractor."
category: business
version: 1.0.0
tags: [engineering-practice, feed-studies, engineer, feed, basis-of-design, front-end-loading, final-investment-decision, owners-engineer]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - reading-queue
    - operational-checklist
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: FEED Studies
          description: "Delivering front-end engineering design: basis of design, process and layout definition, equipment lists, cost estimates and the package behind a final investment decision."
          projects:
            - name: Where FEED sits between concept select and FID
              description: |-
                ## Purpose
                Engineers often join a FEED without knowing what the previous stage decided or what the next gate expects, so they rework settled questions and miss the ones the investment committee will ask. Mapping the owner's stage gate process, from appraise and select through FEED to final investment decision, shows which decisions are already closed, which must close in FEED, and what level of definition each deliverable needs to reach.

                ## Milestones
                1. A one-page map of the owner's stage gates with the purpose and decision of each gate.
                2. The decisions already closed at concept select listed, with the document that records each one.
                3. The gate requirements for FID written as a checklist the team can test the FEED against.
                4. The expected estimate class and schedule accuracy for the end of FEED confirmed with the project manager.

                ## Notes
                Owners name the stages differently (FEL 1 to 3, select and define, DG1 to DG4). Use the owner's names in every document, not your previous employer's.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stage gate map and an FID requirements checklist exist and the project manager has confirmed the target estimate class."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the project manager for the owner's stage gate procedure"
                - "Draw the gates on one page with the decision made at each"
                - "List the concept select decisions and where each is recorded"
                - "Write the FID gate requirements as a checklist for the team"
            - name: FEED scope of work and contract read-through
              description: |-
                ## Purpose
                Most FEED disputes trace back to a scope of work nobody read line by line: a missing tie-in, an unpriced survey, a licensor package assumed to be someone else's. Reading the FEED contract, scope of work and deliverables schedule against each other in the first two weeks, and raising every gap as a clarification, sets the boundary before the hours are spent.

                ## Milestones
                1. The scope of work, deliverables schedule and contract exhibits read and cross-checked.
                2. A list of scope gaps, overlaps and ambiguities, each with a proposed interpretation.
                3. Battery limits and owner-supplied items confirmed in writing with the client.
                4. Agreed clarifications filed against the contract so later change requests can refer to them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every scope gap found in the read-through has a written answer from the client within the first month of the FEED."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the FEED contract, scope of work and deliverables schedule"
                - "Mark every scope item that has no matching deliverable"
                - "Write the gap list with a proposed interpretation for each"
                - "Send the gap list to the client as formal clarifications"
            - name: Basis of design document
              description: |-
                ## Purpose
                Every discipline designs against one document, the basis of design, which sets capacity, turndown, feed and product specifications, design life, availability target, utility conditions and the governing codes. Writing it early, issuing it for client approval and putting it under revision control stops each discipline from inventing its own assumptions.

                ## Milestones
                1. A basis of design covering capacity, turndown, feed cases, product specifications, design life and availability.
                2. Design margins, sparing philosophy and the governing code families stated.
                3. Every value traced to a source document or marked as an assumption with an owner.
                4. The basis issued for client approval and placed under revision control.
                5. A comment response sheet closed with the client's sign-off.

                ## Notes
                Keep assumptions visible in the document rather than buried in a calculation. An assumption that is never written down cannot be closed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A basis of design with traced values and listed assumptions is approved by the client and issued at a controlled revision."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Gather the concept select report, owner standards and licensor data"
                - "Draft the basis sections for capacity, feeds, products and design life"
                - "Mark every untraced value as an assumption with a named owner"
                - "Issue the basis for client comment and log the responses"
            - name: Site conditions and feed data sheet
              description: |-
                ## Purpose
                Ambient temperature range, relative humidity, rainfall intensity, wind speed, seismic zone, soil data, cooling water temperature and the full feed composition with its contaminants set the size of almost every piece of equipment. Gathering them into one approved data sheet, with sources, avoids a cooler sized on last year's summer or a feed case missing the mercury that the licensor needs to know about.

                ## Milestones
                1. Meteorological design values agreed from a named long-term data source.
                2. Feed compositions for the design, rich, lean and future cases tabulated, including trace contaminants.
                3. Utility supply conditions confirmed for pressure, temperature and quality at the battery limit.
                4. The data sheet approved by the client and referenced from the basis of design.

                ## Notes
                Ask for the raw feed analysis behind any composition you are given. Averaged data hides the cases that size the equipment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An approved site and feed data sheet lists every design value with its source and is referenced from the basis of design."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Request long-term weather data for the site from the client"
                - "Ask for raw feed gas or crude analyses, not averaged values"
                - "Tabulate design, rich, lean and future feed cases side by side"
                - "Confirm utility conditions at the battery limit with operations"
            - name: FEED deliverables register by discipline
              description: |-
                ## Purpose
                Clients measure a FEED by its deliverables: PFDs, heat and material balances, P&IDs, the equipment list, datasheets, plot plans, philosophies, the estimate and the execution plan. A register that names each deliverable, its discipline owner, its planned issues and its weight in the progress measure turns a vague percent complete into something the client can audit.

                ## Milestones
                1. Every contracted deliverable listed with number, title, discipline, owner and planned issue dates.
                2. A progress weighting agreed for each deliverable and for each issue stage.
                3. The register reconciled against the contract deliverables schedule with no orphans.
                4. The register shared with the client and used as the basis of progress reports.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliverables register matching the contract schedule, with owners, dates and weightings, is agreed with the client."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the contract deliverables schedule into a register"
                - "Assign a discipline owner and planned issue dates to each line"
                - "Agree progress weightings with the project controls lead"
                - "Reconcile issued deliverables against the register @recurring(monthly:28)"
            - name: Project codes, standards and specifications list
              description: |-
                ## Purpose
                A FEED that designs to the wrong edition of a pressure vessel code, or ignores the owner's own engineering specifications, passes that error straight into the EPC price. Agreeing one list of applicable code families (for example ASME, API, IEC and ISO), owner specifications and the order of precedence when they conflict gives every discipline the same rulebook.

                ## Milestones
                1. A list of applicable codes, standards and owner specifications with editions.
                2. An order of precedence for conflicts agreed with the client.
                3. Local regulatory requirements identified and listed alongside the international codes.
                4. The list issued as a controlled project document and referenced in the basis of design.

                ## Notes
                Freeze editions at a stated date. A new edition published mid-FEED is assessed for impact, not adopted automatically.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled codes and standards list with editions and an order of precedence is approved and referenced in the basis of design."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the client for their engineering specification index"
                - "List the code families each discipline will apply, with editions"
                - "Agree the order of precedence when codes and specifications conflict"
                - "Check for new code editions and assess their impact @recurring(quarterly)"
            - name: Concept select report handover review
              description: |-
                ## Purpose
                Behind the chosen scheme, the concept select report carries the options rejected and the reasons, plus open issues the select team never closed. Reviewing it critically at the start of FEED, with one of the select team if possible, catches decisions made on thin data before the design is built on them.

                ## Milestones
                1. The concept select report and its supporting studies read in full.
                2. Each key decision listed with the evidence behind it rated as strong or weak.
                3. Open issues from the select stage transferred into the FEED holds or risk register.
                4. A short note of decisions to be revalidated in FEED agreed with the project manager.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every open issue from the concept select report appears in a FEED register, and the decisions to revalidate are agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the concept select report and the studies it refers to"
                - "Rate the evidence behind each key decision as strong or weak"
                - "Book an hour with someone from the select team to walk through it"
                - "Move the open select issues into the FEED holds and risk registers"
            - name: FEED kick-off and responsibility matrix
              description: |-
                ## Purpose
                Typical FEEDs involve the owner, the FEED contractor, one or more technology licensors and specialist consultants, and each assumes the others are covering something. A kick-off meeting that walks through a responsibility matrix, deliverable by deliverable, and records who prepares, checks, reviews and approves, removes the most common source of late surprises.

                ## Milestones
                1. A responsibility matrix covering every deliverable and interface with prepare, check, review and approve roles.
                2. The kick-off held with the owner, contractor and licensors present.
                3. Communication routes, document transmittal rules and review turnaround times agreed.
                4. Kick-off minutes with actions issued within two working days.

                ## Notes
                Start from the **Meeting notes** template for the kick-off minutes.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off is held, a responsibility matrix is agreed by all parties and minutes with actions are issued within two working days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the responsibility matrix from the deliverables register"
                - "Send the matrix to all parties a week before the kick-off"
                - "Agree client review turnaround times during the kick-off"
                - "Issue the kick-off minutes and action list within two days"
            - name: FEED execution plan and schedule to FID
              description: |-
                ## Purpose
                Every FEED schedule has a fixed end, the FID date, and a critical path that usually runs through licensor data, vendor quotes for major equipment and the estimate. An execution plan that shows the logic from basis freeze to estimate issue, with float visible, tells the team which late input really threatens the gate.

                ## Milestones
                1. An execution plan covering organisation, work sequence, reviews and key dates.
                2. A logic-linked schedule from kick-off to FID package with the critical path shown.
                3. Licensor, vendor and survey inputs entered as dated dependencies.
                4. The schedule baselined and agreed with the client.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baselined FEED schedule with logic links and a visible critical path to the FID package is agreed with the client."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the external inputs the FEED depends on and their promised dates"
                - "Build the schedule logic from basis freeze to estimate issue"
                - "Mark the critical path and the float on each external input"
                - "Review float on the critical path with the planner @recurring(monthly:3)"
            - name: Weekly FEED progress measurement
              description: |-
                ## Purpose
                Progress claimed by feel drifts to 80 percent and stays there for months. Measuring progress every Friday from the deliverables register, using agreed issue-stage weightings, gives an earned progress curve the client trusts and shows early which discipline is falling behind.

                ## Milestones
                1. Progress rules per issue stage written down and agreed.
                2. Each discipline lead reporting deliverable status every Friday.
                3. A planned versus actual progress curve updated weekly.
                4. Disciplines more than five percent behind plan named in the weekly report with a recovery action.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly planned versus actual progress curve, built from the deliverables register, is issued every Friday for the life of the FEED."
                cadence: rolling
              tasks:
                - "Write the progress rules for each deliverable issue stage"
                - "Collect deliverable status from each discipline lead @recurring(weekly:fri)"
                - "Plot planned against actual progress and flag slipping disciplines"
                - "Review the progress curve trend with the project manager @recurring(monthly:25)"
            - name: Technical query log with the client and licensors
              description: |-
                ## Purpose
                Unanswered technical queries are the quiet cause of most late FEED deliverables: a datasheet waits on a material choice, a layout waits on an access rule. A numbered query log, with a required response date and a weekly chase, turns open questions into visible schedule risk.

                ## Milestones
                1. A numbered technical query log with raiser, addressee, date raised and required date.
                2. A response target agreed with the client and each licensor.
                3. Overdue queries chased weekly and escalated when they reach the critical path.
                4. Every answered query reflected in the affected deliverables.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No technical query on the critical path is open past its required date without a recorded escalation."
                cadence: rolling
              tasks:
                - "Set up a numbered query log with required response dates"
                - "Agree response targets with the client and the licensors"
                - "Chase technical queries older than ten working days @recurring(weekly:tue)"
                - "Check that answered queries have reached the affected documents"
            - name: Holds and assumptions register
              description: |-
                ## Purpose
                Every FEED carries holds, such as a vendor's nozzle loads or an unconfirmed soil bearing value, and assumptions made to keep the work moving. A single register of both, with owners and closure dates, is what lets the estimate team state honestly what the FID price rests on.

                ## Milestones
                1. A register of holds and assumptions with owner, affected documents and target closure date.
                2. Holds marked on drawings and datasheets with a reference to the register.
                3. The register reviewed weekly with discipline leads.
                4. Open holds at FID listed in the estimate basis with their cost and schedule exposure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hold shown on a FEED drawing or datasheet has a register entry, owner and closure date, and open holds are listed in the estimate basis."
                cadence: rolling
              tasks:
                - "Create the register with owner, affected documents and closure date"
                - "Collect current holds from every discipline lead"
                - "Review the holds list with discipline leads @recurring(weekly:wed)"
                - "Copy the holds still open at estimate freeze into the estimate basis"
            - name: Weekly interface meeting with licensors and the owner
              description: |-
                ## Purpose
                Licensor packages, owner's existing facilities and specialist packages meet the FEED design at interfaces that nobody owns by default: a tie-in pressure, a shared flare load, a control system handshake. A weekly interface meeting working from an interface register keeps each interface open until both sides have confirmed the same data.

                ## Milestones
                1. An interface register listing every physical and data interface with both owners.
                2. A weekly meeting held with the owner, licensors and package engineers.
                3. Interface data confirmed in writing by both sides before it is used in design.
                4. Open interfaces at basis freeze listed as holds.

                ## Notes
                Start from the **Meeting notes** template so each week's actions carry over to the next agenda.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every interface in the register has confirmed data from both sides, or an open hold, by the basis of design freeze."
                cadence: rolling
              tasks:
                - "Build an interface register from the plot plan and package scopes"
                - "Run the interface meeting from the register @recurring(weekly:thu)"
                - "Ask both owners of each interface to confirm the data in writing"
                - "Turn unconfirmed interfaces into holds before the basis freeze"
            - name: FEED change notices and scope trend control
              description: |-
                ## Purpose
                A client who adds a spare compressor in week twelve, or a licensor who changes a column diameter, changes the FEED cost and the project estimate at the same time. Recording every change as a trend or change notice, with its effect on FEED hours and on the project capital cost, stops scope creep becoming an argument at the end.

                ## Milestones
                1. A change procedure agreed with the client covering trend, notice and approval.
                2. A change log with description, originator, FEED hours, capex impact and status.
                3. Open change notices reviewed weekly with the project manager.
                4. Approved changes reflected in the basis of design and the deliverables register.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scope change during the FEED is in the change log with an hours and capex estimate and a recorded client decision."
                cadence: rolling
              tasks:
                - "Agree the change procedure and approval levels with the client"
                - "Set up the change log with hours and capex impact columns"
                - "Review open change notices with the project manager @recurring(weekly:mon)"
                - "Update the basis of design after each approved change"
            - name: FEED risk and opportunity register
              description: |-
                ## Purpose
                Investment committees ask what could move the cost or the date, and a FEED that cannot answer gets sent back. A live register of technical, schedule, cost and permitting risks and opportunities, scored on the owner's matrix, feeds the contingency analysis and shows the gate reviewers the team has looked.

                ## Milestones
                1. Risks and opportunities identified in a facilitated session with all disciplines.
                2. Each entry scored, owned and given a response action.
                3. The top ten risks reviewed monthly and rescored.
                4. The register handed to the estimator for the contingency assessment.

                ## Notes
                Start from the **Risk register** template. Keep opportunities in the same register so they get the same follow-up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scored risk and opportunity register with owners is reviewed monthly and used as an input to the FID contingency assessment."
                cadence: rolling
              tasks:
                - "Book a two-hour risk identification session with every discipline"
                - "Score each risk on the owner's matrix and name an owner"
                - "Review and rescore the top ten risks @recurring(monthly:12)"
                - "Send the current register to the estimator for contingency"
            - name: FEED lessons learned register
              description: |-
                ## Purpose
                Next time a FEED runs on the same site, it will hit the same late soil data and the same licensor delays unless someone writes them down while they are fresh. Capturing lessons monthly, and reading the previous project's lessons at kick-off, is cheap and is one of the things assurance reviewers ask about.

                ## Milestones
                1. Lessons from a previous similar FEED read and the relevant ones listed.
                2. A register for this FEED with what happened, the effect and the recommendation.
                3. Lessons added monthly by discipline leads.
                4. A close-out lessons session held and the register handed to the owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A lessons register with at least one entry per month of the FEED is handed to the owner at close-out."
                cadence: rolling
              tasks:
                - "Ask the owner for lessons from their last comparable FEED"
                - "Set up the register with event, effect and recommendation columns"
                - "Ask discipline leads for the month's lessons @recurring(monthly:20)"
                - "Hold a one-hour lessons session at FEED close-out"
            - name: Monthly FEED report to the owner
              description: |-
                ## Purpose
                Most project sponsors read one document a month, and it should tell them progress, hours spent against budget, holds, changes, risks and the forecast to FID in a few pages. A fixed report structure, issued on the same day each month, saves time for both sides and builds the record a gate review will check.

                ## Milestones
                1. A report structure agreed with the owner covering progress, hours, holds, changes, risks and forecast.
                2. Data for the report drawn from the registers, not rewritten by hand.
                3. The report issued by the fifth of each month.
                4. Owner comments on each report recorded and answered in the next issue.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A monthly FEED report with progress, hours, holds, changes, risks and forecast is issued by the fifth of every month of the FEED."
                cadence: rolling
              tasks:
                - "Agree the monthly report contents with the owner's sponsor"
                - "Ask the agent to draft the monthly narrative from the registers"
                - "Issue the monthly FEED report to the owner @recurring(monthly:5)"
                - "Answer last month's owner comments in the new report"
            - name: Inter-discipline check cycle for FEED deliverables
              description: |-
                ## Purpose
                A P&ID issued without the instrument engineer seeing it, or a plot plan the piping lead never checked, comes back as rework in EPC. An inter-discipline check cycle, with a fixed circulation list per deliverable type and a turnaround target, catches clashes between disciplines before documents go to the client.

                ## Milestones
                1. A circulation list per deliverable type naming which disciplines must check it.
                2. A turnaround target of a few working days agreed for checks.
                3. Each issued deliverable carrying evidence of the check before release.
                4. The check queue cleared weekly so documents do not stall.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every FEED deliverable issued to the client has a recorded inter-discipline check from each discipline on its circulation list."
                cadence: rolling
              tasks:
                - "Write the circulation list for each deliverable type"
                - "Agree a check turnaround target with discipline leads"
                - "Clear the inter-discipline check queue @recurring(weekly:mon)"
                - "Refuse release of any document without its check record"
            - name: Reading PFDs and heat and material balances
              description: |-
                ## Purpose
                Whatever your discipline, the PFD and the heat and material balance tell you the flows, pressures, temperatures and compositions your design must take. Engineers who can read a stream table, follow the cases and spot a balance that does not close ask better questions and catch errors before they reach a datasheet.

                ## Milestones
                1. The project PFDs traced end to end with the main streams named.
                2. Stream tables for the design and one off-design case read and compared.
                3. A mass balance closed around one unit by hand to within one percent.
                4. Three questions on the balance raised with the process engineer and answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand mass balance around one unit closes within one percent of the issued heat and material balance, and three questions have been answered."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Print the PFDs and trace each main stream from inlet to product"
                - "Compare the design and turndown stream tables for one unit"
                - "Close a mass balance around one unit by hand"
                - "Take your three questions to the lead process engineer"
            - name: Equipment list to FEED definition
              description: |-
                ## Purpose
                Estimate, plot plan, electrical load list and long-lead procurement all hang off the equipment list, so every item needs a tag, type, size, design conditions, material and duty at FEED. Bringing the list to that level, and issuing it at controlled revisions, gives the estimator something to price and the layout team something to place.

                ## Milestones
                1. Every item tagged with type, duty, size, design pressure and temperature and material.
                2. Sparing and operating mode shown for each item.
                3. Package items listed with their contents and the vendor scope boundary.
                4. The list issued at controlled revisions with changes clouded.
                5. The estimate team confirming the list is complete enough to price.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled equipment list with duty, size, design conditions and material for every item is accepted by the estimator as priceable."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Export all tagged items from the PFDs and P&IDs into the list"
                - "Fill design conditions and materials from the sizing calculations"
                - "Mark sparing and package scope for each item"
                - "Issue an updated equipment list revision @recurring(monthly:22)"
            - name: Plot plan and layout principles for FEED
              description: |-
                ## Purpose
                Spacing between hazardous and occupied areas is fixed by the plot plan, along with access for maintenance and cranes, escape routes, pipe rack lengths and the area the estimate prices. Learning the spacing guidance in recognised industry and insurer references, and the owner's layout rules, lets you produce or challenge a layout with reasons rather than habit.

                ## Milestones
                1. The owner's layout specification and one recognised spacing guide read and summarised.
                2. A plot plan prepared or reviewed with spacing, access and escape routes checked.
                3. Prevailing wind, drainage and future expansion shown on the plot plan.
                4. Layout decisions and departures from spacing guidance recorded with their reasons.

                ## Notes
                Spacing tables are a starting point. Where the safety studies show a consequence distance, that distance governs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plot plan has been checked against written spacing, access and escape rules, with every departure recorded and justified."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the owner's layout specification and note the spacing rules"
                - "Check the plot plan distances between hazardous and occupied areas"
                - "Mark crane access, maintenance routes and escape routes on the plan"
                - "Record every spacing departure with its reason and approver"
            - name: Line sizing and hydraulics at FEED accuracy
              description: |-
                ## Purpose
                Line sizes set pipe rack loads, pump heads, relief loads and much of the bulk material cost, so a FEED with rough line sizes carries a soft estimate. Sizing every process line against agreed velocity and pressure drop criteria, and running hydraulics on the critical circuits, brings the bulk quantities to a level the estimate can stand on.

                ## Milestones
                1. Line sizing criteria for velocity and pressure drop agreed per service.
                2. Every process line on the P&IDs sized and recorded in a line list.
                3. Hydraulic calculations completed for pump suctions, two-phase lines and flare headers.
                4. Line sizes checked by a second engineer and frozen for the material take-off.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked line list with sizes for every process line and hydraulics for critical circuits is frozen before the material take-off."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree velocity and pressure drop criteria for each service"
                - "Size every process line from the heat and material balance"
                - "Run hydraulic checks on pump suctions and two-phase lines"
                - "Have a second engineer check the line list before freeze"
            - name: Datasheets and requisitions for major equipment
              description: |-
                ## Purpose
                Vendor quotes for compressors, heat exchangers, columns and power equipment drive the largest lines in the FEED estimate, and a vague datasheet gets a vague price. Writing process and mechanical datasheets complete enough for a budgetary quote, and issuing them as requisitions to at least two vendors, gives the estimate real numbers.

                ## Milestones
                1. Process datasheets for every major item completed with all operating cases.
                2. Mechanical datasheets and the applicable specifications attached.
                3. Requisitions for budgetary quotes issued to at least two vendors per item.
                4. Quotes received and their technical deviations listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every major equipment item has a completed datasheet and at least two budgetary quotes with deviations listed before estimate freeze."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List the major equipment items that need budgetary quotes"
                - "Complete the process datasheet for each with all operating cases"
                - "Issue requisitions to two or more vendors per item"
                - "Tabulate each vendor's technical deviations from the datasheet"
            - name: Material take-offs for the FEED estimate
              description: |-
                ## Purpose
                Bulk materials such as piping, steel, concrete, cable and instruments are priced from quantities the engineers produce, and a take-off built from typicals without allowances is one of the commonest reasons a Class 3 estimate comes in low. Producing take-offs per discipline, with stated growth allowances, gives the estimator quantities with a clear basis.

                ## Milestones
                1. A take-off method per discipline agreed with the estimator.
                2. Quantities produced from the FEED model, line list and layouts, not from ratios alone.
                3. Design growth allowances stated separately from the measured quantities.
                4. Take-offs checked against a comparable past project and differences explained.

                ## Notes
                Keep measured quantities and allowances in separate columns. Mixing them hides where the uncertainty is.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Discipline take-offs with measured quantities and separate growth allowances are issued to the estimator and benchmarked against a past project."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the take-off method and format with the estimator"
                - "Produce piping quantities from the line list and model"
                - "State growth allowances separately from measured quantities"
                - "Compare the take-offs with a similar completed project"
            - name: Utility balance and tie-in list
              description: |-
                ## Purpose
                Steam, cooling water, instrument air, nitrogen, power and fuel gas demands are often underestimated in FEED, and on a brownfield site the existing utility systems may not have the spare capacity. A utility balance for every operating case, and a tie-in list with location, size and isolation method, shows early whether the new plant needs its own utilities.

                ## Milestones
                1. Utility demands summed for normal, peak and start-up cases.
                2. Available spare capacity in existing utility systems confirmed with operations.
                3. A tie-in list with location, size, service and isolation method for each point.
                4. Utility shortfalls raised as scope items or holds.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A utility balance for all operating cases and a tie-in list with isolation method for every point are issued and reviewed by operations."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Collect utility demands from each discipline for every case"
                - "Ask operations for current spare capacity in each utility system"
                - "List every tie-in with size, location and isolation method"
                - "Raise utility shortfalls as change or hold items"
            - name: Electrical load list and power supply concept
              description: |-
                ## Purpose
                Large motors and new substations can decide whether a project needs a new grid connection or on-site generation, a decision that belongs in FEED, not in detailed design. A load list for every case and a power supply concept with the single-line arrangement give the estimate and the utility company what they need.

                ## Milestones
                1. An electrical load list with running, standby and peak loads per case.
                2. Large motor starting effects checked at concept level.
                3. A power supply concept and key single-line diagram agreed with the owner.
                4. Grid connection or generation requirements sent to the relevant utility for comment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A load list and an agreed power supply concept are issued, and the grid or generation requirement has been raised with the utility."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Collect motor and heater ratings from the equipment list"
                - "Build the load list with running, standby and peak cases"
                - "Draft the power supply concept and key single-line diagram"
                - "Send the grid connection requirement to the utility for comment"
            - name: Operating, control and safety philosophies
              description: |-
                ## Purpose
                Philosophies for operation, maintenance, control, shutdown, fire and gas and relief tell the EPC contractor how the plant is meant to run and fail safely, and they are hard to change once detailed design starts. Writing them in FEED with the owner's operators in the room captures staffing, manning levels, isolation needs and shutdown hierarchy while they are still cheap to change.

                ## Milestones
                1. Operating and maintenance philosophy covering manning, sparing, isolation and access.
                2. Control philosophy defining automation level, control room and system architecture.
                3. Emergency shutdown, fire and gas and relief philosophies drafted with the safety lead.
                4. Owner operations comments on each philosophy closed.

                ## Notes
                Operators who will run the plant usually spot the gaps in a philosophy in one reading. Get them to review it, not just approve it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Operating, control, shutdown and fire and gas philosophies are issued with all owner operations comments closed."
                cadence: phased
                effort_hours_estimate: "36"
              tasks:
                - "Ask the owner for their standard philosophy documents"
                - "Draft the operating and maintenance philosophy with an operator"
                - "Draft the control and shutdown philosophies with the safety lead"
                - "Close every operations comment on the philosophies"
            - name: Long-lead equipment and early procurement decision
              description: |-
                ## Purpose
                Large compressors, gas turbines, transformers and heavy-wall reactors can take well over a year to deliver, and waiting for FID to order them can set the whole project end date. Identifying long-lead items in FEED, with current lead times from vendors, lets the owner decide whether to fund early reservation or ordering ahead of the main decision.

                ## Milestones
                1. Every item with a lead time longer than the planned engineering period identified.
                2. Current lead times confirmed by at least two vendors per item.
                3. The schedule impact of ordering at FID against ordering early stated per item.
                4. A recommendation on early commitment presented to the owner and the decision recorded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A long-lead list with vendor-confirmed lead times and a recorded owner decision on early commitment exists before the FEED estimate freeze."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List equipment with lead times longer than the engineering period"
                - "Ask two vendors per item for current delivery times"
                - "Update vendor lead times on the long-lead list @recurring(monthly:15)"
                - "Present the early commitment options to the owner"
            - name: Process technology licensor selection
              description: |-
                ## Purpose
                Where a unit is licensed, the choice of licensor fixes yields, utilities, guarantees, royalties and much of the equipment list for the plant's whole life. A structured comparison of licensor offers on the same basis, including guarantees and their remedies, gives the owner a decision they can defend to their board.

                ## Milestones
                1. Licensor enquiry issued on one common design basis.
                2. Offers tabulated for yields, utilities, guarantees, fees and scope of the process design package.
                3. Technical and commercial clarifications closed with each licensor.
                4. A recommendation with weighted scoring presented and the owner's choice recorded.

                ## Notes
                Compare what each licensor's process design package actually contains. A cheaper package that leaves more for the FEED contractor is not cheaper.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A licensor comparison on a common basis with weighted scoring is presented, and the owner's selection is recorded with reasons."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a licensor enquiry on the common design basis"
                - "Tabulate yields, utilities, guarantees and fees from each offer"
                - "Close clarifications with each licensor in writing"
                - "Present the weighted comparison to the owner for decision"
            - name: Modular versus stick-built construction decision
              description: |-
                ## Purpose
                Modules built in a fabrication yard can cut site labour, which matters on a remote site or one with a thin local workforce, but they add transport limits, extra steel and an earlier design freeze. Deciding the build strategy during FEED, with real transport routes and yard options, lets the layout and the estimate reflect it.

                ## Milestones
                1. Candidate units for modularisation identified with weights and dimensions.
                2. Transport routes, port limits and heavy-lift options checked for the largest module.
                3. Cost and schedule of modular and stick-built options compared on the same basis.
                4. The build strategy decided and written into the basis of design.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of modular and stick-built options with transport checks is completed and the chosen build strategy is in the basis of design."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Identify the units that could be built as modules"
                - "Check the route and port limits for the largest module envelope"
                - "Compare cost and schedule for both build strategies"
                - "Record the chosen build strategy in the basis of design"
            - name: FEED value engineering workshop
              description: |-
                ## Purpose
                Two thirds of the way through FEED there is enough definition to see where money is going and still time to change it. A value engineering workshop with all disciplines and the owner, working down the largest cost items, typically finds a few changes worth making and many that are not, and records both.

                ## Milestones
                1. The top cost items from the current estimate listed for the workshop.
                2. Ideas generated, screened and the shortlist evaluated for cost, schedule and risk.
                3. Accepted ideas raised as change notices with owners.
                4. Rejected ideas recorded with reasons so they are not raised again in EPC.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A value engineering workshop is held and every idea has a recorded accept or reject decision, with accepted ideas raised as change notices."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pull the twenty largest cost items from the current estimate"
                - "Book a full-day workshop with all disciplines and the owner"
                - "Screen and evaluate the ideas for cost, schedule and risk"
                - "Raise change notices for the accepted ideas"
            - name: Design margins and overdesign review
              description: |-
                ## Purpose
                Process adds ten percent, the equipment engineer adds another, the vendor rounds up, and a plant ends up much larger than the basis needs. Reviewing where margins sit across the chain, and agreeing one margin policy in the basis of design, takes cost out without taking away the flexibility the owner actually asked for.

                ## Milestones
                1. Margins applied at each step for the major equipment traced and written down.
                2. Stacked margins identified where more than one party added allowance.
                3. A single margin policy per equipment type agreed with the owner.
                4. Affected datasheets revised to the agreed policy.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A margin policy per equipment type is in the basis of design and stacked margins on major equipment have been removed or justified."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Trace the margin added at each step for five major items"
                - "Flag items where two or more parties added allowance"
                - "Agree one margin policy per equipment type with the owner"
                - "Revise the affected datasheets to the agreed margins"
            - name: Construction and logistics strategy input
              description: |-
                ## Purpose
                Where the heavy lifts happen, how materials reach site, where laydown and temporary facilities sit and how construction works next to a running plant all affect the layout and the cost. Writing a construction and logistics strategy in FEED, with an experienced construction manager, puts those constraints into the design before it hardens.

                ## Milestones
                1. Heavy lifts listed with crane positions shown on the plot plan.
                2. Site access, laydown, temporary facilities and workforce camp needs defined.
                3. Constraints from working next to live plant recorded.
                4. The strategy reviewed by a construction manager and its cost included in the estimate.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A construction and logistics strategy with heavy lifts, laydown and live-plant constraints is reviewed by a construction manager and priced in the estimate."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the heavy lifts and mark crane positions on the plot plan"
                - "Define laydown, access and temporary facility areas"
                - "Ask operations which live-plant constraints apply to construction"
                - "Have a construction manager review the strategy"
            - name: Site surveys, geotechnical and as-built verification
              description: |-
                ## Purpose
                Designs drawn on an old topographic survey or decades-old as-built drawings will clash with what is really there, and foundations sized on assumed soil values can move the cost by a large margin. Scoping and commissioning the topographic, geotechnical and brownfield laser scan surveys early gets the data back before the layout freezes.

                ## Milestones
                1. Survey needs defined for topography, geotechnics, underground services and existing plant.
                2. Survey scopes issued and contractors appointed.
                3. Results received and incorporated into the layout and foundation design.
                4. Differences between as-built drawings and the survey listed and resolved.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Topographic, geotechnical and brownfield survey results are received and reflected in the layout before the basis of design freeze."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the surveys the layout and foundations depend on"
                - "Write a scope for each survey and get quotes"
                - "Book the surveys so results arrive before layout freeze"
                - "List every clash between old as-builts and the new survey"
            - name: Environmental and permitting inputs to FEED
              description: |-
                ## Purpose
                Emissions, effluent, noise and waste figures from the FEED feed the environmental impact assessment and the permit applications, and a permit timeline longer than the FEED can hold up FID. Producing those figures on time, and tracking the permit route alongside the engineering, keeps the regulator off the critical path.

                ## Milestones
                1. The permits and approvals needed for the project listed with lead times.
                2. Emissions, effluent, noise and waste estimates issued to the environmental team.
                3. Design changes required by the assessment fed back into the basis of design.
                4. Permit application status tracked monthly and reported to the owner.

                ## Notes
                The local environmental regulator sets the requirements. Confirm them with the owner's environmental lead rather than assuming another country's limits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Emissions, effluent and noise estimates are issued to the environmental team and permit status is reported monthly until FID."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the owner's environmental lead for the list of permits needed"
                - "Estimate emissions, effluent and noise from the current design"
                - "Feed assessment-driven changes back into the basis of design"
                - "Check permit application status with the environmental lead @recurring(monthly:8)"
            - name: Safety studies schedule across the FEED
              description: |-
                ## Purpose
                HAZID, HAZOP, layer of protection analysis, consequence modelling and the fire and explosion assessment each need inputs at a particular maturity, and studies run on immature P&IDs are wasted. Planning the safety studies against the FEED schedule, with the drawing revision each one needs, means the findings arrive in time to change the layout and the estimate.

                ## Milestones
                1. The safety studies required by the owner and regulator listed for this FEED.
                2. Each study placed in the schedule with the input documents and revision it needs.
                3. Study leaders and attendees booked.
                4. A route agreed for study actions to enter the holds and change registers.

                ## Notes
                The studies themselves are run under their own procedures. This project makes sure they happen at the right point in the FEED.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every required safety study is scheduled against a named input revision, with leaders booked and a route agreed for its actions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the safety lead which studies the owner and regulator require"
                - "Place each study in the schedule with the revision it needs"
                - "Book study leaders and key attendees"
                - "Agree how study actions enter the holds and change registers"
            - name: Basis of design freeze and sign-off
              description: |-
                ## Purpose
                After a certain point every change to capacity, feed cases or the build strategy costs rework across all disciplines. A formal freeze of the basis of design, signed by the owner and announced to the whole team, marks the point after which changes need a change notice and an hours estimate.

                ## Milestones
                1. Open items in the basis of design closed or moved to the holds register.
                2. The frozen basis issued at a controlled revision.
                3. Owner and FEED contractor signatures on the freeze record.
                4. The whole team told the freeze date and the change route that now applies.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed basis of design freeze record exists at a controlled revision, and every later basis change has a change notice."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the open items in the current basis of design"
                - "Close each open item or move it to the holds register"
                - "Get owner and contractor signatures on the freeze record"
                - "Tell the team the freeze date and the change route"
            - name: Independent technical assurance review before FID
              description: |-
                ## Purpose
                Owners and lenders often require an independent review of the FEED before the investment decision, by peers from outside the project. Preparing a clear evidence pack, hosting the review well and closing its findings with evidence is the difference between a conditional pass and a delayed gate.

                ## Milestones
                1. Review scope, reviewers and dates agreed with the owner.
                2. An evidence pack of the key deliverables and registers issued to reviewers in advance.
                3. Review findings recorded with owners and due dates.
                4. Findings closed or accepted by the owner before the FID submission.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent technical review is held and every finding is closed or formally accepted by the owner before the FID submission."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the review scope and reviewers with the owner"
                - "Assemble the evidence pack of key deliverables and registers"
                - "Record every review finding with an owner and date"
                - "Close the findings with evidence before the FID submission"
            - name: FID package and decision support
              description: |-
                ## Purpose
                The final investment decision rests on a small number of documents: the frozen design definition, the Class 3 or better estimate with its basis and contingency, the integrated schedule, the risk register, the execution plan and the assurance outcome. Assembling them into a consistent FID package, where every number agrees across documents, is the purpose the whole FEED serves.

                ## Milestones
                1. The FID package contents agreed with the owner's gate keeper.
                2. Estimate, schedule, risk register and execution plan checked for consistency.
                3. Open holds and their exposure stated plainly in the package.
                4. The package issued to the owner on the agreed date.
                5. Questions from the investment committee answered and the decision recorded.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A consistent FID package is issued on the agreed date and the investment committee's questions are answered in writing."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Confirm the FID package contents with the owner's gate keeper"
                - "Check that capex, schedule and quantities agree across documents"
                - "Write a plain statement of open holds and their exposure"
                - "Prepare answers to the questions the investment committee asked last time"
            - name: EPC invitation to tender package from the FEED
              description: |-
                ## Purpose
                For many owners the FEED's last product is the technical part of the EPC tender: the scope of work, the FEED deliverables issued for tender, specifications, the vendor list and the technical evaluation criteria. Preparing it so bidders all price the same thing reduces clarifications, deviations and later claims.

                ## Milestones
                1. The technical scope of work for the EPC contractor written from the FEED.
                2. FEED deliverables issued at a for-tender revision with known holds listed.
                3. Approved vendor list and technical evaluation criteria agreed with the owner.
                4. The technical package reviewed for consistency and issued to the owner's contracts team.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A technical tender package with scope, for-tender deliverables, vendor list and evaluation criteria is issued to the owner's contracts team."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Draft the EPC technical scope of work from the FEED deliverables"
                - "Issue the deliverables at a for-tender revision with holds listed"
                - "Agree the approved vendor list with the owner"
                - "Write the technical evaluation criteria for the bids"
            - name: FEED close-out and handover to EPC
              description: |-
                ## Purpose
                The EPC contractor inherits the FEED, and anything not handed over properly gets redone or, worse, assumed. A close-out with a final deliverables index, registers, native files, calculation records and a briefing session gives the next team a clean start and closes the FEED contract.

                ## Milestones
                1. A final index of FEED deliverables at their last revision.
                2. Holds, interfaces, change and lessons registers handed over in final form.
                3. Native model and calculation files transferred with a file index.
                4. A handover briefing held with the EPC contractor or the owner's next team.
                5. The FEED contract closed with all deliverables accepted.

                ## Notes
                Start from the **Operational checklist** template to track each close-out item to acceptance.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All FEED deliverables, registers and native files are accepted by the owner and a handover briefing with the next team is held."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Build the final deliverables index at last revisions"
                - "Collect native model and calculation files with an index"
                - "Hand over the holds, interfaces, change and lessons registers"
                - "Hold a handover briefing with the next project team"
            - name: Your first FEED as a graduate discipline engineer
              description: |-
                ## Purpose
                Graduates often find a first FEED feels like a blur of documents with no time to understand any of them. Choosing two deliverables to own end to end, reading the basis of design properly and keeping a weekly note of what you learned turns six months on a FEED into competence evidence for professional registration.

                ## Milestones
                1. Two deliverables agreed with your lead that you own from first draft to issue.
                2. The basis of design read and five questions about it answered by your lead.
                3. A weekly learning note kept for the length of the FEED.
                4. A short competence record written up from the notes at the end.

                ## Notes
                Start from the **Reading queue** template for the standards and reference books your lead points you to.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two deliverables are issued under your name and a competence record built from weekly notes exists at FEED close-out."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your lead for two deliverables to own from draft to issue"
                - "Read the basis of design and list five questions"
                - "Write what you learned on the FEED this week @recurring(weekly:thu)"
                - "Turn the notes into a competence record at close-out"
            - name: Owner's engineer overseeing a FEED contractor
              description: |-
                ## Purpose
                Owners often run a FEED with a small team checking a contractor's work, and the job is to steer the design to the owner's needs without doing it twice. A review plan that focuses on the deliverables that drive cost and operability, with a weekly review slot and clear comment rules, gives the owner control with a lean team.

                ## Milestones
                1. The deliverables the owner must review identified and prioritised by cost and operability impact.
                2. Comment rules agreed: mandatory, advisory and query, with turnaround times.
                3. A weekly review slot held for documents received that week.
                4. A short owner's engineer note issued at each gate summarising design quality.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every priority deliverable is reviewed within the agreed turnaround, and an owner's engineer note is issued at each gate."
                cadence: rolling
              tasks:
                - "Rank the FEED deliverables by cost and operability impact"
                - "Agree comment categories and turnaround times with the contractor"
                - "Review the contractor deliverables received this week @recurring(weekly:fri)"
                - "Write the owner's engineer note for the next gate"
            - name: Lean brownfield FEED for a local engineering firm
              description: |-
                ## Purpose
                Smaller firms win brownfield FEEDs for debottlenecks, tie-ins and package upgrades where the client expects a full FEED from a team of four or five. Scaling the method down, with a short deliverables list, combined registers and one weekly meeting, keeps the quality of definition without the overhead of a large project system.

                ## Milestones
                1. A scaled deliverables list agreed with the client, with what is excluded and why.
                2. One combined register for holds, queries, changes and risks.
                3. A site visit programme to verify existing conditions.
                4. The FEED delivered within the agreed hours with every exclusion stated in the report.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A brownfield FEED is delivered within its agreed hours, with a scaled deliverables list and every exclusion stated in the final report."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Agree a scaled deliverables list and its exclusions with the client"
                - "Set up one combined register for holds, queries, changes and risks"
                - "Plan site visits to check existing plant against drawings"
                - "State every exclusion clearly in the final FEED report"
            - name: Discipline lead on a FEED contractor team
              description: |-
                ## Purpose
                Discipline leads on a FEED answer for the hours, the quality and the schedule of every deliverable their engineers produce, while also being the person the client calls. Setting up a discipline plan, a checking regime and a weekly hours review keeps the discipline on budget and makes problems visible before month end.

                ## Milestones
                1. A discipline plan with deliverables, hours, engineers and checkers.
                2. Hours spent compared with progress earned each week.
                3. A checker named for every deliverable before it is started.
                4. Discipline hours forecast to complete updated monthly and shared with the project manager.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The discipline's hours forecast to complete is updated monthly and stays within ten percent of the budget or has an approved change."
                cadence: rolling
              tasks:
                - "Write the discipline plan with deliverables, hours and checkers"
                - "Compare hours spent against earned progress each week"
                - "Name a checker for each deliverable before work begins"
                - "Update the discipline hours forecast to complete @recurring(monthly:26)"
            - name: Moving from operations into a FEED team
              description: |-
                ## Purpose
                Operations engineers bring what FEED teams most often lack, which is knowing how plants are really started, isolated and maintained, but they can find the pace and the document culture strange. A short plan to learn the FEED deliverables and to put your operating knowledge into the philosophies and layout makes the move count.

                ## Milestones
                1. The main FEED deliverables and their purpose understood with one example of each read.
                2. Operating experience written into review comments on the philosophies and plot plan.
                3. Three examples from your plant of design choices that caused operating trouble shared with the team.
                4. A conversation with your manager on the role you want after the FEED.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your comments appear on the issued operating philosophy and plot plan, and three operating case examples have been shared with the FEED team."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read one example of each main FEED deliverable"
                - "List three design choices that caused trouble on your plant"
                - "Comment on the operating philosophy and plot plan from experience"
                - "Book a talk with your manager about the role after FEED"
            - name: Dual FEED competition and conversion to EPC
              description: |-
                ## Purpose
                Some owners run two FEED contractors in parallel and let each convert its FEED into an EPC bid, buying competition at the price of two FEEDs. Being on one of those teams changes the work: the FEED is also a sales document, the design must be priceable to a lump sum, and the owner compares two answers line by line.

                ## Milestones
                1. The dual FEED rules, evaluation basis and conversion terms understood from the contract.
                2. Design choices that affect the lump sum price flagged and decided deliberately.
                3. The FEED deliverables and the EPC price kept consistent at every update.
                4. A clarification and deviation list prepared for the conversion bid.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The FEED deliverables and the EPC conversion price match on quantities and scope, with a deviation list issued with the bid."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the dual FEED rules and conversion terms in the contract"
                - "Flag the design choices that move the lump sum price"
                - "Reconcile FEED quantities with the EPC price build-up"
                - "Prepare the deviation and clarification list for the bid"
            - name: Front-end loading index self-assessment
              description: |-
                ## Purpose
                Industry benchmarking has long shown that projects which reach FID with better definition overrun less on cost and schedule. Scoring your FEED against a front-end loading checklist, covering site factors, engineering definition and execution planning, shows the owner where definition is thin while there is still time to fix it.

                ## Milestones
                1. A front-end loading checklist chosen, from the owner or a published industry source.
                2. Each element scored with the evidence document named.
                3. Weak elements listed with an action and owner to raise them before FID.
                4. The final score and remaining gaps reported in the FID package.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scored front-end loading assessment with evidence for each element and actions for weak elements is reported in the FID package."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the owner which front-end loading checklist they use"
                - "Score each element and name the evidence document"
                - "List the weak elements with an owner and action"
                - "Put the final score and gaps into the FID package"
            - name: Weight and space control for offshore FEED
              description: |-
                ## Purpose
                On an offshore topside or an existing platform, every tonne and square metre of deck is constrained by the structure, the lift vessel and the installation method. A weight control procedure with a weight report by area and discipline, updated monthly against the FEED limits, is what stops a design outgrowing its platform.

                ## Milestones
                1. Weight and space limits agreed with the structural lead and installation contractor.
                2. A weight control procedure with weight classes and growth allowances.
                3. A weight report by area and discipline issued monthly.
                4. Trends against the limits reported with actions when margin falls.

                ## Notes
                Report weight with its confidence class. A tonne from a vendor drawing is worth more than a tonne from a ratio.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A monthly weight report by area and discipline is issued against agreed limits, with actions recorded whenever margin falls."
                cadence: rolling
              tasks:
                - "Agree the weight and deck space limits with the structural lead"
                - "Write the weight control procedure and growth allowances"
                - "Issue the weight report by area and discipline @recurring(monthly:18)"
                - "Raise actions when weight margin falls below the agreed level"
            - name: Replicating a FEED from a sister plant
              description: |-
                ## Purpose
                Reusing the design of a plant already built can save months, but sites differ in climate, feed, codes, utilities and regulator, and old designs carry their own lessons. A structured replication review, listing what changes and what the sister plant's operators would change, keeps the savings without importing old problems.

                ## Milestones
                1. The sister plant's design basis compared with this site, line by line.
                2. Every difference listed with its effect on the design.
                3. Operating and maintenance lessons gathered from the sister plant's team.
                4. A replication scope agreed: copied as is, adapted, or redesigned for each unit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A unit by unit replication scope, based on a basis comparison and the sister plant's operating lessons, is agreed with the owner."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Get the sister plant's basis of design and as-built documents"
                - "Compare its basis with this site line by line"
                - "Ask the agent to summarise the sister plant's incident and lessons reports"
                - "Agree copied, adapted or redesigned status for each unit"
---

# FEED Studies

Front-end engineering design is where a project's cost, schedule and safety are mostly decided, long before steel is ordered, and it is easy to finish a FEED with a thick stack of documents and a basis nobody can defend. These projects start with the foundations (the stage gate, the scope, the basis of design, site and feed data, the deliverables register, codes and the execution plan), move through the machinery that keeps a FEED under control, then the core technical skills, the big decisions on technology, layout, modules and long-lead items, the dated events from basis freeze to the FID package, the different seats an engineer sits in, and specialist work on dual FEEDs, front-end loading benchmarks and weight control.

The repeating rhythm is weekly: progress on Fridays, the holds list, technical queries, interface meetings, change notices and the inter-discipline check queue, with monthly reports, risk reviews, lead time updates and register reconciliations, and a quarterly look at code editions. The Risk register, Meeting notes, Reading queue and Operational checklist templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
