---
id: real-estate-development.building-capex-reserves
name: Building Capex Reserves
description: "A capital plan you can defend: condition surveys, an asset register and lifecycle schedule, a funded reserve, a scoring matrix for roof, plant and facade works, and the yearly cycle that keeps it current."
category: business
version: 1.0.0
tags: [real-estate-development, building-capex-reserves, small-business, knowledge-worker, capital-planning, reserve-fund, condition-survey, lifecycle]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - meeting-notes
    - risk-register
    - remediation-plan
    - purchase-decision
    - metrics-log
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Building Capex Reserves
          description: "Planning capital works across buildings: condition surveys, lifecycle schedules, reserve funds and prioritising roof, plant and facade spending."
          projects:
            - name: Capital asset register for each building
              description: |-
                ## Purpose
                A capital plan is only as good as the list of things it plans for, and most small portfolios have never written that list down. One register per building, naming every roof section, plant item, lift, facade element and life safety system with its install year and quantity, turns vague worry into a schedule you can price.

                ## Milestones
                1. One register per building with each element listed by location, quantity and install year.
                2. Every major element tagged as roof, envelope, structure, mechanical, electrical, vertical transport or life safety.
                3. Unknown install years flagged for the condition surveyor to estimate.
                4. The register saved where owners, managers and surveyors can all find it.

                ## Notes
                Group small items into sensible components, such as all corridor lighting on one floor, rather than listing every fitting. A register with 60 to 150 lines per building is usual.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every building in the portfolio has a capital asset register listing major elements with location, quantity and install year or an estimate flag."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set up a register sheet with columns for element, location, quantity and install year"
                - "Walk the first building with drawings and list each roof, plant and facade element"
                - "Pull install dates from invoices, completion certificates and nameplates"
                - "Flag elements with unknown ages for the surveyor to estimate"
            - name: Capital versus repairs classification policy
              description: |-
                ## Purpose
                Without a written line between capital works and day-to-day repairs, the same job ends up in the reserve one year and the operating budget the next, and nobody can tell whether the building is being looked after. A one-page policy with a value threshold and clear examples keeps both budgets honest and gives your accountant a consistent basis.

                ## Milestones
                1. A value threshold and a minimum useful life agreed for treating spend as capital.
                2. Ten worked examples listed on each side of the line, from patch repairs to full replacements.
                3. The policy checked with your accountant against how the accounts and any tax returns treat capital spend.
                4. The policy shared with the property manager and anyone who approves invoices.

                ## Notes
                Tax treatment of repairs and improvements varies by country, so the accountant decides that part. The policy is about consistent budgeting.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page policy sets the capital threshold, the minimum useful life and twenty worked examples, reviewed by the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last twenty invoices over a modest value and mark each as repair or capital"
                - "Draft a threshold and minimum useful life for capital treatment"
                - "Send the draft policy to your accountant for comment"
                - "Circulate the final policy to everyone who approves invoices"
            - name: Building records and warranty archive
              description: |-
                ## Purpose
                Old condition surveys, roof guarantees, plant manuals and as-built drawings are often scattered across email, filing cabinets and a previous manager's laptop. Gathering them into one archive per building means the surveyor starts from facts, warranty claims are not missed and the next owner or manager inherits a working file.

                ## Milestones
                1. One folder per building with sections for surveys, drawings, warranties, manuals and works records.
                2. Every past condition survey and reserve study found and filed by date.
                3. Roof, window and plant guarantees filed with their expiry dates noted.
                4. A short list of records known to be missing, with who might hold them.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each building has a single archive holding past surveys, drawings, warranties and manuals, plus a written list of missing records."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a folder structure for one building with five standard sections"
                - "Search email and shared drives for past surveys and guarantees"
                - "Ask the previous manager or managing agent for handover files"
                - "Write a list of missing records and who to ask for each"
            - name: Baseline building condition survey
              description: |-
                ## Purpose
                Capital planning built on guesses about remaining life tends to miss the one element that fails first. A baseline condition survey by a chartered building surveyor or engineer gives each element a condition grade, a remaining life and an indicative cost, which is the foundation every later decision rests on.

                ## Milestones
                1. A scope agreed covering every element on the asset register, including roof access and plant rooms.
                2. Two or three fee proposals compared on scope, method and sample sizes.
                3. A surveyor appointed with a delivery date and a spreadsheet output, not just a PDF.
                4. A final report received with condition grade, remaining life and cost for each element.

                ## Notes
                Start from the **Vendor** template. Ask for the costed schedule in an editable spreadsheet so you can update it yourself between surveys.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A condition survey covering every register element is received, with a grade, remaining life and cost per element in editable form."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page survey scope based on the asset register"
                - "Request fee proposals from three building surveying or engineering firms"
                - "Arrange roof access, plant room keys and tenant notice for the survey day"
                - "Check the draft report against the register before accepting it"
            - name: Condition and criticality grading scale
              description: |-
                ## Purpose
                Surveyors, managers and board members each mean something different by poor or urgent. Agreeing one condition scale and one criticality scale for every building lets you compare a leaking roof in one block with a tired boiler in another on the same terms.

                ## Milestones
                1. A condition scale of four or five grades, each with a plain description and an example.
                2. A criticality scale covering safety, legal compliance, building damage and tenant impact.
                3. Both scales given to surveyors and managers as the required standard.
                4. Existing survey grades mapped onto the new scales.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One written condition scale and one criticality scale are in use across all buildings, with past survey grades mapped onto them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the grading scales used in your last two surveys"
                - "Draft a five-grade condition scale with examples for each grade"
                - "Draft a criticality scale for safety, compliance, damage and disruption"
                - "Map the current survey grades onto both scales"
            - name: Ten-year lifecycle replacement schedule
              description: |-
                ## Purpose
                Owners usually know the roof is old but not that it falls due the same year as the lifts and the boilers. A ten-year schedule placing every element's replacement in a year, at today's cost, shows the lumpy years early enough to smooth them or save for them.

                ## Milestones
                1. Every register element placed in a replacement or major repair year from the survey's remaining life.
                2. Costs entered at today's prices with fees, access and contingency allowances.
                3. A yearly total for each building and for the portfolio.
                4. The three peak years identified with the elements that drive them.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year schedule shows replacement year and cost for every element and a yearly total per building, with the peak years named."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Copy the survey's remaining life and cost for each element into the schedule"
                - "Add allowances for professional fees, scaffolding and contingency"
                - "Total each year by building and for the portfolio"
                - "Highlight the three peak years and the elements behind them"
            - name: Reserve fund target and contribution policy
              description: |-
                ## Purpose
                Reserves with no target drift, and a target with no contribution rule is only a wish. Setting a written funding target against the lifecycle schedule, and the yearly contribution needed to reach it, gives owners or board members a number to vote on and a way to measure progress.

                ## Milestones
                1. A funding approach chosen, such as full funding, a minimum balance or a percentage of upcoming works.
                2. A yearly contribution calculated that keeps the reserve above the chosen floor across the ten years.
                3. The policy checked against any lease, declaration or bylaw that governs reserves for the building.
                4. The target and contribution approved by the owners or board and minuted.

                ## Notes
                Some jurisdictions set minimum reserve rules for condominiums or strata schemes. Confirm what applies with your manager, lawyer or the regulator before setting the floor.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written reserve policy with a funding target and yearly contribution is approved and minuted by the owners or board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the lease, declaration or bylaws for any reserve requirements"
                - "Model the reserve balance year by year against the lifecycle schedule"
                - "Draft the funding target and contribution policy for approval"
                - "Review the contribution against the updated schedule @recurring(yearly)"
            - name: Dedicated reserve account and ledger
              description: |-
                ## Purpose
                Reserve money mixed into the operating account gets spent on the boiler callout and the legal bill, and then it is gone. A separate account with its own ledger, showing contributions in, works paid out and money already committed, makes the reserve visible and harder to raid.

                ## Milestones
                1. A separate bank account opened for each reserve, in the right entity's name.
                2. A ledger recording contributions, interest, works payments and commitments.
                3. Signatory and transfer rules written down, with two approvers for withdrawals.
                4. The opening balance agreed with the accountant.

                ## Notes
                Where money held for others is involved, such as tenant or owner contributions, client money rules may apply. Ask your accountant or the managing agent's regulator.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each reserve sits in its own account with a ledger, two-approver withdrawal rules and an opening balance agreed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the bank what it needs to open a reserve account for the entity"
                - "Set up a ledger with columns for contributions, payments and commitments"
                - "Write down signatories and the two-approver withdrawal rule"
                - "Agree the opening reserve balance with the accountant"
            - name: Capital works approval limits
              description: |-
                ## Purpose
                Capital jobs stall when nobody knows who can sign them, and they overspend when anyone can. A matrix setting who may approve works at each value band, and what paperwork each band needs, lets urgent repairs move fast while large replacements get proper scrutiny.

                ## Milestones
                1. Three or four value bands set, each with a named approver.
                2. The paperwork required at each band listed, such as quotes, a surveyor's specification or a board vote.
                3. An emergency route defined for safety failures, with a limit and a report-back rule.
                4. The matrix adopted and shared with managers and contractors.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approval matrix with value bands, named approvers, required paperwork and an emergency route is adopted in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List who currently approves capital jobs and at what amounts"
                - "Draft value bands with an approver and paperwork for each"
                - "Define the emergency spending route and its report-back rule"
                - "Send the matrix to owners or the board for adoption"
            - name: Annual capital plan refresh
              description: |-
                ## Purpose
                Every year some works finish early, some slip and prices move, so a capital plan left alone for three years is fiction. A fixed yearly cycle, timed before the budget is set, updates remaining lives, costs and the reserve forecast so the contribution decision uses current numbers.

                ## Milestones
                1. Completed works removed and their replacement cycles reset.
                2. Remaining lives adjusted from the year's inspections and repair history.
                3. Costs updated with an inflation index or fresh quotes.
                4. A refreshed ten-year plan and reserve forecast issued ahead of budget setting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A refreshed capital plan and reserve forecast is issued every year at least a month before the budget is set."
                cadence: cyclic
              tasks:
                - "Put the refresh date in the calendar a month before budget setting"
                - "Collect the year's inspection notes and completed works list"
                - "Update lives, costs and the reserve forecast in the plan @recurring(yearly)"
                - "Issue the refreshed plan with a one-page summary of what changed"
            - name: Monthly reserve reconciliation
              description: |-
                ## Purpose
                A reserve can look healthy on the statement while half of it is already promised to a contractor. Reconciling the bank balance against the ledger and open commitments each month shows the free balance, catches missing contributions and stops anyone spending money twice.

                ## Milestones
                1. Bank balance matched to the ledger every month.
                2. Open purchase orders and signed contracts deducted to show the free balance.
                3. Missing or late contributions listed with the owner or tenant responsible.
                4. A one-line monthly figure for free reserve sent to owners or the board.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reconciliations a year show bank balance, commitments and free reserve, each sent to owners or the board."
                cadence: rolling
              tasks:
                - "Download this month's reserve account statement"
                - "Reconcile the reserve account and commitments to the ledger @recurring(monthly:9)"
                - "Chase any contribution more than thirty days late"
                - "Send the free reserve figure to owners or the board"
            - name: Quarterly roof and drainage inspection round
              description: |-
                ## Purpose
                Roofs fail slowly and then all at once, usually because a blocked outlet or a split in a seam went unnoticed for a season. A quarterly round of every roof, gutter and outlet, with photos from the same points, extends roof life and gives the capital plan early warning.

                ## Milestones
                1. A route and checklist for each roof, covering outlets, gutters, seams, flashings and plant bases.
                2. Fixed photo points marked so each round can be compared with the last.
                3. Defects logged with a grade and sent for repair or added to the capital plan.
                4. Safe access arrangements confirmed for every roof.

                ## Notes
                Roof access is high-risk work. Use trained staff or a contractor with fall protection and a permit system, never an untrained volunteer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every roof is inspected four times a year against a checklist, with photos from fixed points and defects logged."
                cadence: rolling
              tasks:
                - "Draw up a roof checklist and mark fixed photo points on a plan"
                - "Confirm safe access and fall protection for each roof"
                - "Carry out the roof and drainage inspection round @recurring(quarterly)"
                - "Log each defect with a grade and an action"
            - name: Central plant condition log
              description: |-
                ## Purpose
                Boilers, chillers, pumps and lift motors tend to show their age in rising callouts, running hours and repair bills long before they stop. Logging those numbers monthly per item lets you predict replacement with evidence instead of waiting for a winter breakdown.

                ## Milestones
                1. A log per major plant item with running hours, callouts, repair spend and engineer notes.
                2. Monthly entries collected from the maintenance contractor's reports.
                3. A trigger set for each item, such as repair spend in a year passing a share of replacement cost.
                4. Items that hit a trigger moved up the capital plan.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each major plant item has a monthly log of hours, callouts and repair spend with a written replacement trigger."
                cadence: rolling
              tasks:
                - "List the major plant items from the asset register"
                - "Ask the maintenance contractor to include running hours in monthly reports"
                - "Enter hours, callouts and repair spend in the plant log @recurring(monthly:17)"
                - "Set a replacement trigger for each plant item"
            - name: Facade and balcony inspection programme
              description: |-
                ## Purpose
                Falling render, loose cladding fixings and corroded balcony supports are both a safety danger and some of the most expensive capital items a building has. A planned cycle of close inspections, often required by local ordinance for taller buildings, catches deterioration while it is still a repair.

                ## Milestones
                1. Any local facade inspection requirement for each building confirmed with the authority or an engineer.
                2. An inspection cycle set per elevation, with close access where needed.
                3. Each inspection report filed with defects graded and repair costs.
                4. Urgent safety defects made safe and recorded within days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every facade and balcony is inspected on a documented cycle, with reports filed and safety defects made safe within a week."
                cadence: cyclic
              tasks:
                - "Check whether local rules require periodic facade inspections for each building"
                - "Ask a facade engineer to propose an inspection cycle per elevation"
                - "Book the facade and balcony inspection for this year's elevations @recurring(yearly)"
                - "File each report and add repairs to the capital plan"
            - name: Capital works pipeline tracker
              description: |-
                ## Purpose
                Once a plan has twenty live jobs at different stages, from specification to defects period, things fall through the gap between surveyor, manager and contractor. A single tracker showing stage, budget, committed cost and next action for each job keeps the programme moving and the reserve forecast honest.

                ## Milestones
                1. Every approved capital job listed with stage, budget, commitment and owner.
                2. Stages defined from specification through tender, works, completion and defects release.
                3. Next action and date recorded against each job.
                4. Committed costs feeding the monthly reserve reconciliation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One tracker lists every approved capital job with stage, budget, commitment and next action, updated monthly."
                cadence: rolling
              tasks:
                - "List every approved capital job in one tracker"
                - "Define six stages from specification to defects release"
                - "Update stage, cost and next action for each capital job @recurring(monthly:23)"
                - "Pass committed costs to the reserve reconciliation"
            - name: Quarterly capex review with owners or board
              description: |-
                ## Purpose
                Capital decisions made by email in a hurry tend to favour whoever shouts loudest. A short quarterly review with a set agenda, covering free reserve, works in progress, new defects and upcoming decisions, gives owners or directors a regular place to decide and a record of why.

                ## Milestones
                1. A standing agenda covering reserve, pipeline, new defects and decisions needed.
                2. A two-page pack circulated a week before each meeting.
                3. Decisions and actions minuted with an owner and date.
                4. Four reviews held in the first year.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four capex reviews a year are held with a pre-circulated pack, and every decision is minuted with an owner and date."
                cadence: cyclic
              tasks:
                - "Draft a standing agenda for the capex review"
                - "Book the first review date with owners or directors"
                - "Prepare and circulate the capex review pack @recurring(quarterly)"
                - "Minute decisions with an owner and date for each"
            - name: Warranty and guarantee expiry calendar
              description: |-
                ## Purpose
                Roof membrane guarantees lapse when nobody books the required annual inspection, and a defect noticed a month after the window closes turns a free repair into a reserve draw. A calendar of every warranty, its conditions and its expiry lets you claim while you still can.

                ## Milestones
                1. Every warranty and guarantee listed with provider, coverage, conditions and expiry.
                2. Conditions such as annual inspections or approved installers noted.
                3. Inspections required to keep warranties valid booked in advance.
                4. A pre-expiry inspection arranged ahead of each major warranty ending.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A warranty calendar lists provider, conditions and expiry for every guarantee, and no warranty lapses unclaimed in a year."
                cadence: rolling
              tasks:
                - "List every warranty from the records archive with its expiry date"
                - "Note the conditions needed to keep each warranty valid"
                - "Check warranties expiring in the next six months @recurring(monthly:3)"
                - "Book a pre-expiry inspection for any major warranty ending soon"
            - name: Asset register updates after completed works
              description: |-
                ## Purpose
                If the register still shows the old boiler two years after it was replaced, the plan will budget to replace it again. Updating the register, warranty calendar and lifecycle schedule when each job completes keeps the plan matched to the building as it really is.

                ## Milestones
                1. A completion checklist that includes register, warranty and schedule updates.
                2. New install dates, models and expected lives entered for each replaced element.
                3. Handover documents filed in the records archive.
                4. Register, schedule and archive in agreement for every job completed this year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every capital job completed in the year has its register entry, warranty and lifecycle schedule line updated within a month."
                cadence: rolling
              tasks:
                - "Add register and warranty updates to the job completion checklist"
                - "Enter the latest replaced element with its new install date and model"
                - "Update the register for jobs completed this month @recurring(monthly:28)"
                - "File handover documents in the building's archive"
            - name: Term contractor and surveyor review
              description: |-
                ## Purpose
                Roofers, lift firms and building surveyors on long relationships can slip on price and response time without anyone noticing. A yearly review of each one, against response times, quote accuracy and defects, tells you who to keep, who to retender and where the plan's cost assumptions come from.

                ## Milestones
                1. A list of contractors and consultants used for capital works, with spend in the year.
                2. Each scored on response, quality, quote accuracy and safety record.
                3. A keep, watch or retender decision recorded for each.
                4. Retenders scheduled for any that fell short.

                ## Notes
                Start from the **Vendor** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each capital works contractor and consultant is scored yearly, with a keep, watch or retender decision recorded."
                cadence: cyclic
              tasks:
                - "List contractors and consultants used for capital works this year"
                - "Pull response times and final costs against quotes for each"
                - "Score and decide on each capital works supplier @recurring(yearly)"
                - "Schedule retenders for any supplier marked retender"
            - name: Reading a building condition survey report
              description: |-
                ## Purpose
                Survey reports are long, hedged and full of terms like remaining useful life and lifecycle cost that non-surveyors skim past. Learning how to read one critically lets you spot generic text, missing elements and cost assumptions that will distort your plan.

                ## Milestones
                1. The standard sections of a condition survey understood and named.
                2. Grading, remaining life and cost terms explained in your own notes.
                3. One past report reviewed with questions written for the surveyor.
                4. A short checklist for reviewing future survey drafts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal review checklist exists and has been used to send written questions on one real survey report."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Open your latest survey report and list its main sections"
                - "Write plain definitions for the grading and remaining life terms used"
                - "Draft five questions for the surveyor on unclear assumptions"
                - "Turn the questions into a checklist for future drafts"
            - name: Roof systems and their service lives
              description: |-
                ## Purpose
                Flat membranes, built-up felt, metal sheet, tile and slate all age differently and fail in different ways. Knowing the typical life range and warning signs of the roofs you own makes inspection rounds sharper and stops you replacing a roof that only needed its seams and flashings renewed.

                ## Milestones
                1. The roof types in your buildings identified from records or inspection.
                2. Typical life ranges and common failure modes noted for each type.
                3. The difference between overlay, partial and full replacement understood.
                4. Notes compared with the surveyor's remaining life estimates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note per roof type in the portfolio records life range, failure modes and repair options, checked against the survey."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the roof type on each building from the records archive"
                - "Read a manufacturer or trade body guide for each roof type"
                - "Note the signs that mean repair versus replacement"
                - "Compare your notes with the surveyor's remaining life figures"
            - name: Heating, cooling and plant lifecycle basics
              description: |-
                ## Purpose
                Mechanical plant is usually the largest and most frequent capital line after the roof, and decisions about it are often made under pressure in a breakdown. Understanding how boilers, chillers, heat pumps, pumps and controls age, and what a planned replacement involves, lets you plan rather than react.

                ## Milestones
                1. Each major plant type in the portfolio described with its function and typical life.
                2. Common warning signs listed, such as falling efficiency, parts obsolescence and rising callouts.
                3. The stages of a planned plant replacement understood, from survey to commissioning.
                4. Questions prepared for the maintenance contractor on each ageing item.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes cover the function, typical life and warning signs of every major plant type in the portfolio, with questions sent to the contractor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each plant type in the portfolio from the asset register"
                - "Ask the maintenance contractor which items have parts becoming obsolete"
                - "Read an industry guide on plant life expectancy"
                - "Write questions on each ageing plant item for the next contractor meeting"
            - name: Facade, window and cladding failure modes
              description: |-
                ## Purpose
                Envelope problems often show up first inside the building, as damp patches, draughts or stained ceilings, long after water got in. Knowing how render, brick, curtain walling, sealants and windows typically fail helps you read inspection reports and connect tenant complaints to the right capital item.

                ## Milestones
                1. The envelope types on each building identified.
                2. Typical failure modes listed, such as sealant breakdown, spalling, corroded fixings and failed glazing units.
                3. Internal signs of envelope failure linked to likely causes.
                4. Cladding safety concerns noted for specialist assessment where relevant.

                ## Notes
                Cladding fire safety is a specialist field with changing rules in many countries. Use a qualified fire engineer or facade specialist, not general notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note per building lists envelope types, their likely failure modes and the internal signs to watch for."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Photograph each elevation and note the main envelope materials"
                - "Read a guide on common facade and window failures"
                - "Match recent damp or draught complaints to likely envelope causes"
                - "List any cladding questions for a specialist to answer"
            - name: Lift modernisation essentials
              description: |-
                ## Purpose
                Lifts are expensive, slow to replace and the item residents and tenants notice most when they fail. Learning the difference between a controller upgrade, a partial modernisation and a full replacement, and the lead times involved, means you can plan the work years ahead instead of accepting the first quote after a long outage.

                ## Milestones
                1. Each lift's age, type and controller recorded.
                2. The options of component upgrade, partial modernisation and full replacement understood.
                3. Typical lead times and outage durations noted for each option.
                4. An independent lift consultant identified for future advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each lift has a recorded age and controller type, and the modernisation options with lead times are written up."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lift maintenance firm for each lift's age and controller model"
                - "Read a guide on lift modernisation options and lead times"
                - "Note expected outage length for each modernisation option"
                - "Find an independent lift consultant for a second opinion"
            - name: Reserve study methods compared
              description: |-
                ## Purpose
                Reserve studies use different methods, component by component or pooled cash flow, and different funding goals, and the method changes the contribution you are told to make. Understanding both lets you question a study, compare two of them fairly and explain the result to owners.

                ## Milestones
                1. Component and cash flow methods explained in a short note.
                2. Full, threshold and baseline funding goals understood with an example of each.
                3. Your current study's method and goal identified.
                4. A worked example showing how the contribution changes between methods.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explains both methods and three funding goals, with a worked example applied to your own reserve."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find which method and funding goal your current study uses"
                - "Read a professional body's guide to reserve study methods"
                - "Rework your plan's contribution under the other method"
                - "Ask the agent to draft a one-page explainer for owners from your notes"
            - name: Life safety systems in the capital plan
              description: |-
                ## Purpose
                Fire alarms, sprinklers, emergency lighting, smoke vents and fire doors have their own replacement cycles and their own legal duties, and they are easy to leave out of a plan built around roofs and boilers. Learning what each system is, how long it lasts and who must sign it off makes sure the most important spending is never deferred.

                ## Milestones
                1. Every life safety system in each building listed with age and maintenance firm.
                2. Typical service lives and obsolescence risks noted, such as discontinued alarm panels.
                3. The competent person or authority that signs off each system identified.
                4. Each system given its own line in the lifecycle schedule.

                ## Notes
                Fire safety duties depend on the country and building type. Confirm them with a fire risk assessor or the fire authority.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every life safety system has a register entry, a service life, a named sign-off party and its own lifecycle schedule line."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the latest fire risk assessment for each building"
                - "List each life safety system with its age and maintenance firm"
                - "Ask the alarm firm whether any panel is near end of support"
                - "Add each system as its own line in the lifecycle schedule"
            - name: Estimating capital costs with inflation and fees
              description: |-
                ## Purpose
                Plans priced at last decade's rates, or without scaffolding, design fees and contingency, are reliably short when the work comes due. Learning how to build a realistic cost for a capital item, and inflate it to the year it falls due, closes the most common gap between the plan and the tender.

                ## Milestones
                1. A standard cost build-up agreed: works, access, preliminaries, fees, contingency and tax where applicable.
                2. A construction cost index chosen to inflate future costs.
                3. Three plan items repriced with the full build-up.
                4. The difference between old and new estimates recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written cost build-up method and a chosen inflation index are applied to three plan items, with the change recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three items from the plan with costs older than two years"
                - "Ask your surveyor which construction cost index they use"
                - "Reprice each item with access, fees and contingency added"
                - "Record how far the old estimates were out"
            - name: Repair or replace decision for an ageing roof
              description: |-
                ## Purpose
                When a roof starts leaking, the choice between another round of patching, an overlay or a full strip and replace can swing the reserve by a large sum. Comparing the options over the same twenty years, with life gained, cost and disruption, gives a decision you can explain to owners.

                ## Milestones
                1. A roofing specialist's report on the roof's condition and options.
                2. Three options priced: targeted repair, overlay and full replacement.
                3. Cost per year of life gained calculated for each option.
                4. A decision recorded with the reasoning and the next review date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the roof compares three priced options by cost per year of life gained."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the roof's leak history and past repair invoices"
                - "Ask a roofing specialist to price repair, overlay and replacement"
                - "Work out cost per year of life gained for each option"
                - "Record the decision and the reasons in the capex review minutes"
            - name: Like-for-like or upgrade when replacing plant
              description: |-
                ## Purpose
                Replacing an old boiler with the same model is quick and familiar, but it can lock in high running costs and carbon for another twenty years. Comparing like-for-like with an efficient or electric alternative on whole-life cost, space, power supply and disruption gives a decision that holds up later.

                ## Milestones
                1. The plant item's load, space and power constraints confirmed by an engineer.
                2. Two or three options priced for capital cost and yearly running cost.
                3. Whole-life cost compared over the expected service life.
                4. A decision recorded, with any enabling works added to the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded plant replacement decision compares at least two options on whole-life cost, with enabling works added to the plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a building services engineer to confirm loads and constraints"
                - "Get capital and running cost estimates for each option"
                - "Compare whole-life cost over the expected service life"
                - "Add any power or space enabling works to the capital plan"
            - name: Single scaffold campaign for envelope works
              description: |-
                ## Purpose
                Scaffolding can be a large share of facade, window and roof edge costs, and paying for it three times in five years is common. Grouping envelope works due within a few years of each other into one access campaign can cut costs and disruption, at the price of spending some money early.

                ## Milestones
                1. Envelope and roof edge items due within five years listed by elevation.
                2. The cost of separate jobs compared with one combined campaign.
                3. The reserve impact of bringing work forward checked.
                4. A decision recorded on what to group and when.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of separate jobs versus one access campaign is completed and a grouping decision recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every envelope item due in the next five years by elevation"
                - "Ask the surveyor for access costs for separate and combined works"
                - "Model the reserve if grouped work is brought forward"
                - "Record which works to group and the target year"
            - name: Capex prioritisation scoring matrix
              description: |-
                ## Purpose
                When the reserve cannot cover everything due, someone has to choose, and without a method it becomes whichever building's manager argues best. A scoring matrix weighing safety, compliance, damage risk, tenant impact and cost of delay ranks every item the same way across the portfolio.

                ## Milestones
                1. Scoring criteria and weights agreed with owners or the board.
                2. Every item due in the next three years scored.
                3. A ranked list produced with a cut line at the available reserve.
                4. Items below the line given a deferral risk note.

                ## Notes
                Start from the **Risk register** template. Safety and legal compliance items should sit above the cut line regardless of score.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item due within three years is scored on agreed criteria and ranked, with a cut line at the available reserve."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft five scoring criteria with suggested weights"
                - "Agree the criteria and weights at the next capex review"
                - "Score and rank items due in the next three years"
                - "Rescore the whole list after the annual plan refresh @recurring(yearly)"
            - name: Closing a reserve fund shortfall
              description: |-
                ## Purpose
                Many buildings discover, usually at the first serious survey, that the reserve covers a fraction of what falls due in the next decade. Setting out the options, higher contributions, a one-off levy, phasing works, borrowing or a mix, with the effect of each on owners, turns a crisis into a plan people can vote on.

                ## Milestones
                1. The shortfall measured against the funding target, year by year.
                2. Four options modelled with their effect on contributions and works timing.
                3. Any governing document or regulatory limits on levies and borrowing checked.
                4. A chosen recovery plan approved and minuted.

                ## Notes
                Start from the **Remediation plan** template. Borrowing against a building or levying owners has legal and tax effects; take advice before proposing it.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved, minuted recovery plan states how the measured shortfall will be closed and by which year."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Calculate the shortfall against the funding target for each year"
                - "Model higher contributions, a levy, phasing and borrowing"
                - "Ask your lawyer what the governing documents allow for levies"
                - "Present the options and record the chosen plan"
            - name: Deferred maintenance backlog clearance
              description: |-
                ## Purpose
                Years of deferred work leave a backlog where small defects quietly turn into capital items. Listing the backlog, grading it and clearing it in a planned order stops the cheapest fixes becoming the most expensive ones.

                ## Milestones
                1. A full backlog list from surveys, inspections and tenant complaints.
                2. Each item graded and costed, with those likely to become capital flagged.
                3. A clearance order and budget agreed.
                4. The backlog shrinking each month against the starting count.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The backlog has a graded, costed list and an agreed clearance order, and its total falls each month."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Combine survey, inspection and complaint defects into one backlog list"
                - "Grade and cost each backlog item"
                - "Agree a clearance order and budget with owners"
                - "Count open backlog items and compare with last month @recurring(monthly:14)"
            - name: Choosing capital planning software or a spreadsheet
              description: |-
                ## Purpose
                Spreadsheets work well for one or two buildings, but past a handful of buildings version control and inflation updates become a weekend job. Comparing a well-built spreadsheet with dedicated capital planning tools on cost, data entry, reporting and handover lets you choose the right tool for your portfolio size.

                ## Milestones
                1. Requirements listed: number of buildings, users, reports and integrations.
                2. Two or three tools trialled alongside an improved spreadsheet.
                3. Each option scored on cost, effort and reporting.
                4. A choice made and data migration planned.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of capital planning tool is made after scoring at least three options, with a migration plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down what reports owners and lenders ask for"
                - "Book demos or trials of two capital planning tools"
                - "Score each tool and the spreadsheet on cost, effort and reports"
                - "Plan the data migration for the chosen tool"
            - name: Shifting spend from reactive to planned
              description: |-
                ## Purpose
                Buildings where most capital spend comes after breakdowns pay emergency rates, suffer outages and never build a reliable plan. Measuring the planned versus reactive split each quarter and setting a target ratio shows whether the capital programme is actually getting ahead of failure.

                ## Milestones
                1. Last year's capital spend split into planned and reactive.
                2. A target ratio agreed for the next two years.
                3. Causes of the largest reactive jobs identified.
                4. The ratio reported each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The planned versus reactive capital spend ratio is reported every quarter against an agreed two-year target."
                cadence: rolling
              tasks:
                - "Split last year's capital invoices into planned and reactive"
                - "Agree a target planned share for the next two years"
                - "Report the planned and reactive spend ratio @recurring(quarterly)"
                - "List causes of the three largest reactive jobs"
            - name: First capex budget and reserve contribution vote
              description: |-
                ## Purpose
                The first time a capital plan goes to owners or a board for a vote, the questions come fast: why so much, why now, what if we wait. Preparing a clear pack, the plan, the reserve forecast, the contribution and the cost of deferral, gives the meeting what it needs to decide.

                ## Milestones
                1. A capex budget for next year and a ten-year reserve forecast prepared.
                2. A one-page summary in plain language with the three biggest items.
                3. The cost of deferring each major item explained.
                4. The budget and contribution approved at the meeting and minuted.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Next year's capex budget and reserve contribution are approved at a minuted meeting after a pack was circulated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the budget meeting date with owners or the board"
                - "Draft the one-page summary of the capital plan"
                - "Prepare a deferral cost note for the three biggest items"
                - "Circulate the pack two weeks before the meeting"
            - name: Roof replacement in an occupied building
              description: |-
                ## Purpose
                Replacing a roof while people live or work below brings weather risk, noise, access and safety issues that a vacant building never has. Planning the works season, temporary protection, occupant communication and inspection points keeps the job on budget and the building dry.

                ## Milestones
                1. Specification, tender and contractor appointment complete, with a dry season start.
                2. Temporary weather protection and a leak response plan agreed.
                3. Occupants told about dates, noise and access in writing.
                4. Works completed, inspected and the new guarantee filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The roof replacement completes with no unplanned water ingress, a signed completion inspection and the guarantee filed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a works window in the driest season for the location"
                - "Ask the surveyor to include temporary protection in the specification"
                - "Write the occupant notice with dates, noise and access changes"
                - "File the completion inspection and roof guarantee"
            - name: Boiler or chiller replacement shutdown
              description: |-
                ## Purpose
                Swapping central plant usually means a planned outage, and timing it in the wrong month leaves a building without heat or cooling. Planning the shutdown window, temporary plant, occupant notice and commissioning sign-off turns a risky week into a controlled one.

                ## Milestones
                1. A shutdown window chosen in the mildest season for the plant concerned.
                2. Temporary plant hire arranged if the outage could exceed a few days.
                3. Occupants and any vulnerable residents notified with contingency arrangements.
                4. New plant commissioned and handover records received.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Central plant is replaced within the planned shutdown window, with commissioning records and handover documents received."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the shutdown window with the building services engineer"
                - "Get a quote for temporary plant hire as a fallback"
                - "Identify vulnerable occupants who need special arrangements"
                - "Collect commissioning certificates and the plant manual at handover"
            - name: Lift replacement with residents and tenants
              description: |-
                ## Purpose
                Weeks without a lift are a major problem for anyone with mobility needs, deliveries or upper-floor offices. Planning the replacement around occupants, with staged work where there are two lifts and help where there is one, protects people and the building's reputation.

                ## Milestones
                1. Occupants with mobility needs identified with their consent.
                2. A sequence agreed so at least one lift runs where there are two.
                3. Support arranged, such as carry-up help or temporary relocation, where only one lift exists.
                4. The new lift certified and its service contract in place.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lift is replaced and certified, with a written occupant support plan delivered throughout the outage."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask occupants who will need help during the lift outage"
                - "Agree the lift outage sequence with the lift contractor"
                - "Arrange support for residents who cannot use the stairs"
                - "File the lift certificate and new service contract"
            - name: Capex evidence pack for a sale or refinance
              description: |-
                ## Purpose
                Buyers and lenders discount buildings whose capital history is a mystery, and their surveyors find the gaps anyway. A tidy pack of the condition survey, capital plan, works history, warranties and reserve position answers their questions before they become price chips.

                ## Milestones
                1. The latest condition survey and capital plan included.
                2. Five years of capital works with costs and certificates listed.
                3. Live warranties and the reserve balance documented.
                4. The pack reviewed by your agent or broker before release.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A capex evidence pack with survey, plan, five-year works history, warranties and reserve balance is ready for release."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your agent or broker what buyers or lenders will request"
                - "Pull five years of capital works and certificates from the archive"
                - "Write a one-page summary of the reserve and planned works"
                - "Have the agent or broker review the pack before release"
            - name: Post-storm damage and reserve impact assessment
              description: |-
                ## Purpose
                After a hurricane, flood or severe storm, the damage that matters most for the capital plan is often hidden: wet insulation, shifted roof sheets, corroded fixings that fail a year later. A structured assessment separates insured damage from wear, records evidence for the insurer and resets the plan.

                ## Milestones
                1. A safe-to-enter check by a competent person completed.
                2. Damage photographed and logged by element against the asset register.
                3. Insured damage separated from existing wear with the loss adjuster.
                4. The capital plan and reserve forecast updated for brought-forward works.

                ## Notes
                Never send staff onto a damaged roof or facade before it has been declared safe. Contact your insurer before carrying out anything beyond emergency works.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A post-storm damage log by element is complete, agreed with the loss adjuster, and the capital plan is updated within sixty days."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a post-storm checklist that follows the asset register"
                - "Store the insurer and loss adjuster contacts in the building archive"
                - "Photograph and log damage by element after a storm"
                - "Update the capital plan for any works brought forward"
            - name: Capex planning for a small mixed portfolio
              description: |-
                ## Purpose
                Owners of four to fifteen buildings rarely have a capital manager, so capex planning competes with leasing, rent collection and everything else. A lighter system, one register template, one portfolio schedule and one quarterly hour, keeps the essentials in place without a full-time role.

                ## Milestones
                1. One register template used for every building.
                2. A portfolio schedule showing each building's capital needs by year.
                3. A quarterly hour blocked for capex, with a short checklist.
                4. The biggest single-year exposure across the portfolio known.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All buildings share one register template and a portfolio schedule, reviewed in a blocked capex hour every quarter."
                cadence: rolling
              tasks:
                - "Copy one register template into every building's folder"
                - "Combine building schedules into a single portfolio view"
                - "Hold the quarterly capex hour against the checklist @recurring(quarterly)"
                - "Identify the year with the largest portfolio capital need"
            - name: Reserve planning for a residents' or condominium board
              description: |-
                ## Purpose
                Volunteer directors on residents' associations and condominium boards are often handed a reserve fund with no training and owners who resist every increase. A plan written for that role, covering the governing documents, a reserve study, an owner communication and handover notes for the next board, protects owners and the directors themselves.

                ## Milestones
                1. The governing documents' rules on reserves, studies and levies summarised.
                2. A current reserve study in place or commissioned.
                3. An owner letter explaining the reserve, the plan and the contribution.
                4. Handover notes written for the next board.

                ## Notes
                Directors may have legal duties over reserves. Ask the association's lawyer or managing agent what applies where you are.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The board holds a current reserve study, has sent an owner letter on the plan and has written handover notes for successors."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the governing documents for reserve and levy rules"
                - "Check the date and method of the last reserve study"
                - "Draft a plain-language owner letter on the reserve plan"
                - "Update the board handover notes on the reserve @recurring(yearly)"
            - name: Analyst capex model for a portfolio
              description: |-
                ## Purpose
                Analysts asked to forecast capital spend across a portfolio often inherit inconsistent building schedules in different formats. A single model with standard inputs, inflation, scenarios and a clean summary gives owners and lenders one set of numbers they can trust and test.

                ## Milestones
                1. Building schedules mapped into one input structure with standard element categories.
                2. Inflation, contingency and timing assumptions held in one place.
                3. Base, early failure and deferral scenarios built.
                4. A one-page portfolio summary by year and category.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One portfolio capex model with standard inputs, an assumptions sheet and three scenarios produces a yearly summary by category."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect each building's capital schedule into one workbook"
                - "Map elements to a standard category list"
                - "Build base, early failure and deferral scenarios"
                - "Refresh the model inputs from the latest schedules @recurring(quarterly)"
            - name: Taking over a building with no capital history
              description: |-
                ## Purpose
                Newly acquired buildings, or ones inherited from another manager, often arrive with no surveys, no register and no idea what the reserve is for. A ninety-day takeover plan for capital, records, a walkround, an interim priority list and a commissioned survey, keeps the first winter from bringing surprises.

                ## Milestones
                1. Whatever records exist gathered and gaps listed.
                2. A walkround completed with obvious urgent issues logged.
                3. An interim list of the five most pressing capital items.
                4. A full condition survey commissioned.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within ninety days the building has a records gap list, an interim top five capital list and a commissioned survey."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the seller or previous manager for every survey and warranty"
                - "Walk the building with the maintenance contractor"
                - "Write an interim list of the five most pressing capital items"
                - "Commission a full condition survey"
            - name: Capital planning for a listed or heritage building
              description: |-
                ## Purpose
                Protected buildings need consent for many repairs, specialist trades and traditional materials, all of which change timing and cost. Planning capital works with the heritage constraints known up front avoids refused consents, wrong materials and repairs that damage the fabric.

                ## Milestones
                1. The building's protection status and what it covers confirmed with the authority.
                2. Elements needing consent or specialist trades flagged in the register.
                3. Costs and lead times adjusted for traditional materials.
                4. A conservation-accredited surveyor or architect identified.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The capital plan flags every element needing heritage consent or specialist trades, with adjusted costs and lead times."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check the building's heritage listing record with the authority"
                - "Flag elements needing consent or specialist trades in the register"
                - "Ask a conservation surveyor for traditional material costs"
                - "Add consent lead times to affected plan items"
            - name: Thirty-year capital forecast with scenarios
              description: |-
                ## Purpose
                Ten years hides the second roof, the second lift cycle and the structural repairs that often arrive between years fifteen and thirty. A thirty-year forecast with scenarios for inflation and early failure tests whether today's contribution is truly sustainable or simply deferring the problem.

                ## Milestones
                1. Every element's replacement cycles projected over thirty years.
                2. Inflation and interest scenarios set, low, central and high.
                3. An early failure case for the five most expensive elements.
                4. The lowest reserve point in each scenario identified.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A thirty-year forecast shows the reserve balance under three inflation scenarios and an early failure case, with the lowest point named."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Extend the lifecycle schedule to thirty years"
                - "Set low, central and high inflation and interest assumptions"
                - "Model early failure of the five most expensive elements"
                - "Rerun the thirty-year forecast after the plan refresh @recurring(yearly)"
            - name: Decarbonisation timing in the capital plan
              description: |-
                ## Purpose
                Energy rules and tenant expectations are pushing buildings towards electric heating, better insulation and efficient glazing, and the cheapest time to make those changes is when the old element is due anyway. Mapping efficiency upgrades onto existing replacement dates avoids paying twice.

                ## Milestones
                1. Elements with the largest energy impact identified with an energy assessor.
                2. Each one matched to its natural replacement year.
                3. The extra cost of the efficient option recorded against each.
                4. Any enabling works, such as power upgrades, added to the plan.

                ## Notes
                Energy performance rules and grants differ by country and change often. Check the current position with an energy assessor.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each high-energy element has an efficiency option, its extra cost and its natural replacement year recorded in the plan."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask an energy assessor which elements drive most energy use"
                - "Match each one to its replacement year in the schedule"
                - "Price the efficient option against like-for-like"
                - "Add power supply or other enabling works to the plan"
            - name: Capex benchmarking across buildings
              description: |-
                ## Purpose
                A building spending twice as much per square metre as its peers may be older, badly maintained or simply overcharged. Benchmarking capital spend and reserve levels per square metre or per unit across your buildings, and against published data where it exists, shows where to look first.

                ## Milestones
                1. Capital spend per square metre or per unit calculated for each building over five years.
                2. Reserve balance per unit compared across buildings.
                3. Outliers explained by age, type or condition.
                4. Questions raised for the two highest spenders.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly benchmark table shows capital spend and reserve per unit for every building, with outliers explained."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Collect floor area or unit counts for every building"
                - "Calculate five-year capital spend per square metre"
                - "Refresh the capex benchmark table @recurring(yearly)"
                - "Write questions for the two highest-spending buildings"
            - name: Independent review of capital plan assumptions
              description: |-
                ## Purpose
                Plans built and maintained by one person carry that person's blind spots, from optimistic lives to missing elements. A periodic review by a second surveyor or experienced peer, checking lives, costs and coverage, catches errors before they become shortfalls.

                ## Milestones
                1. A reviewer appointed who did not prepare the plan.
                2. Lives, costs, inflation and coverage checked against the register.
                3. Findings listed with the reserve effect of each.
                4. Agreed changes made and the review filed.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An independent reviewer's written findings on lives, costs and coverage are received and agreed changes made to the plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a reviewer who had no part in preparing the plan"
                - "Send the register, schedule and assumptions to the reviewer"
                - "List findings with the reserve effect of each"
                - "Make agreed changes and file the review"
---

# Building Capex Reserves

Building capex reserves is the work of knowing what every roof, boiler, lift and facade in your buildings will cost to replace, and when, and having the money set aside before the bill lands. It is written for small property owners and operators, the analysts who build their capital plans and the volunteer directors who sit on residents' and condominium boards. It starts with foundations, an asset register, a baseline condition survey, a lifecycle schedule and a reserve policy, then moves through the operating cycle of inspections, reconciliations and reviews, the knowledge of how building elements age and fail, the repair or replace decisions, the dated works and evidence packs, situations for different owners, and the specialist work of long-range forecasting and benchmarking.

The rhythms are a monthly reserve reconciliation, warranty check, plant log and pipeline update, quarterly roof rounds and capex reviews, and a yearly refresh of the capital plan, contributions, facade inspection and contractor review. Vendor suits surveyors and term contractors, Meeting notes suits the quarterly capex review, Risk register suits the prioritisation matrix, Remediation plan suits shortfalls and backlogs, Purchase decision suits planning software and Metrics log suits the plant log and benchmarks. Contribution levels, tax treatment of capital spend and building safety duties are organisational here: take those calls to your accountant, surveyor, engineer or the governing documents of the building. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
