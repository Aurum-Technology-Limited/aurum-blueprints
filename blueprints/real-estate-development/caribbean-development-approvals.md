---
id: real-estate-development.caribbean-development-approvals
name: Caribbean Development Approvals
description: "Caribbean development approvals run as a managed programme: the agencies mapped, zoning checked, planning, environmental and building applications submitted complete, consultees chased, conditions logged and completion certificates secured."
category: business
version: 1.0.0
tags: [real-estate-development, caribbean-development-approvals, founder, small-business, caribbean, planning-approval, environmental-clearance, building-permits]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - vendor
    - compliance-control
    - risk-register
    - operational-checklist
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Caribbean Development Approvals
          description: "Getting development approvals in Caribbean jurisdictions: town and country planning applications, environmental clearances, building permits and agency timelines."
          projects:
            - name: Approval agency map for your territory
              description: |-
                ## Purpose
                Every Caribbean territory splits approvals differently. In Trinidad and Tobago, for example, the Town and Country Planning Division, the Environmental Management Authority and the municipal corporation each have a say, while Jamaica routes much of it through NEPA and the municipal corporations, and the OECS islands mostly use a single development control authority. A one-page map of who approves what, in which order, stops you discovering a missing agency six months in.

                ## Milestones
                1. A list of every agency that approves or comments on development in the territory, with its role in one line.
                2. The order in which approvals are normally sought, drawn as a simple sequence.
                3. A named contact, office address, phone number and online portal, if any, recorded for each agency.
                4. Any single window or online submission system identified, with what it does and does not cover.

                ## Notes
                Confirm the map with a local architect or planner who has submitted there in the last year. Agency names and responsibilities change after restructurings, and the published guidance is often older than practice.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page approval map naming each agency, its role, its contact and the usual sequence, checked by a local professional."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the agencies named on the planning authority's website or application form"
                - "Ask a local architect which agencies they actually submit to and in what order"
                - "Record a contact and portal link for each agency on one page"
                - "Recheck the agency map against current forms and portals @recurring(yearly)"
            - name: Zoning and land use check for the parcel
              description: |-
                ## Purpose
                Before paying for drawings, find out what the national physical development plan, local area plan or zoning map says the parcel is for. Land shown as agricultural, open space or a protected watershed can take years to change, while a parcel already zoned residential or commercial may need only a standard application. Getting this in writing early sets the price you pay and the scheme you design.

                ## Milestones
                1. The land use designation of the parcel taken from the current development plan or zoning map.
                2. Any overlays recorded: coastal zone, watershed, flood area, heritage area, airport height limits.
                3. Written or emailed confirmation of the designation from the planning office.
                4. A short note on what the designation allows and whether a change of use or rezoning is needed.

                ## Notes
                Many territories have plans that are old or still in draft. Ask which version the planning office is actually applying, and keep the reply.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written zoning note for the parcel, with the designation, overlays and the planning office's confirmation attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the current development plan or zoning map covering the parcel"
                - "Mark the parcel on the map and note its designation and overlays"
                - "Email the planning office asking them to confirm the designation in writing"
                - "Write a short note on whether the scheme fits the designation"
            - name: Outline or full permission route decision
              description: |-
                ## Purpose
                Most Caribbean planning systems allow an outline application that settles the principle of development before detailed drawings, or a full application that settles everything at once. Outline approval costs less up front and can support land finance or a sale, but adds a second round and more months. Choosing deliberately, with the agency's own guidance in hand, avoids paying for detail the authority may refuse in principle.

                ## Milestones
                1. The application types available in the territory listed with what each one decides.
                2. A comparison of cost, time and risk for outline then detailed against a single full application.
                3. The planning office's view on which route suits this parcel and scheme noted.
                4. A recorded decision on the route, with the reason in two sentences.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the approval route, with a cost and time comparison and the planning office's view attached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the planning authority's guidance on application types"
                - "Estimate the fees and months for outline then detailed versus full"
                - "Ask the planning office which route they suggest for this scheme"
                - "Record the chosen route and the reasons in the approvals file"
            - name: Approvals budget for fees, consultants and agency charges
              description: |-
                ## Purpose
                Approval costs in the region add up from many small lines: planning and building fees often scaled to floor area or project value, environmental application and assessment costs, survey plans, engineering certifications, consultee charges and the time of the person chasing files. A single budget, with a contingency for redesign after comments, keeps the appraisal honest and tells you when to stop spending on a site that will not get through.

                ## Milestones
                1. Every fee schedule that applies to the scheme found and the charges calculated.
                2. Consultant costs for architect, engineer, surveyor and any environmental specialist estimated.
                3. A contingency line for redesign and resubmission agreed.
                4. The approvals budget entered into the development appraisal as its own cost line.

                ## Notes
                Fee schedules are often printed in regulations that are revised without much notice. Phone the cashier's office to confirm the current figure before you pay.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approvals budget listing each fee, consultant cost and contingency, carried into the appraisal and dated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the published fee schedules for planning, environmental and building approvals"
                - "Get written fee quotes from the architect, engineer and surveyor"
                - "Add a redesign and resubmission contingency to the budget"
                - "Reconcile actual approval spend against the budget @recurring(monthly:28)"
            - name: Approvals programme with real agency timelines
              description: |-
                ## Purpose
                Published processing times and real ones are rarely the same, and a construction loan or a buyer's deposit can expire while a file sits in a consultee's in-tray. A programme built from what local architects and developers actually experienced, with float for the slowest agency, gives lenders and partners a date they can trust.

                ## Milestones
                1. Published target times collected for each approval and consultee.
                2. Actual recent timelines gathered from at least two people who submitted in the last year.
                3. A programme showing each approval in sequence or in parallel, with float on the slowest steps.
                4. The earliest realistic start on site date shared with partners and the lender.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated approvals programme built from published and actual timelines, with float shown and a start on site date shared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the published processing times for each agency"
                - "Ask two local developers how long their last approvals really took"
                - "Draw the approvals programme with float on the slowest agency"
                - "Update the programme with actual dates from the tracker @recurring(monthly:3)"
            - name: Registered professional to prepare and sign the drawings
              description: |-
                ## Purpose
                Many territories only accept drawings signed or stamped by an architect, engineer or draughtsperson registered with the local board, and some limit what a draughtsperson may sign by building size. Appointing someone who is registered, knows the local office and has a recent approval record is often the single biggest factor in how fast a file moves.

                ## Milestones
                1. The registration rules for who may sign submission drawings confirmed for the territory.
                2. Two or three candidates shortlisted, each with their registration checked with the board.
                3. Recent approvals by each candidate seen, ideally for similar schemes.
                4. A written appointment agreed covering scope, fees and who submits and chases the file.

                ## Notes
                Start from the **Vendor** template. Ask each candidate how many files they currently have waiting at the planning office; it tells you about capacity and relationships.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A registered professional appointed in writing, with their registration verified and submission responsibilities stated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check who is allowed to sign submission drawings in the territory"
                - "Verify each candidate's registration with the professional board"
                - "Ask each candidate for two recent approvals on similar schemes"
                - "Agree a written appointment that says who submits and follows up"
            - name: Ownership and survey evidence pack for applications
              description: |-
                ## Purpose
                Planning and building offices usually want proof that the applicant owns the land or has the owner's consent, plus a survey plan by a licensed land surveyor. Applications are regularly returned for a missing deed copy, an unsigned consent letter or a survey that does not match the site plan. Putting the evidence together once, certified where the office requires it, saves a lost month at the counter.

                ## Milestones
                1. The ownership documents each agency requires listed from its checklist.
                2. Certified copies of the deed or certificate of title and the survey plan obtained.
                3. A signed owner's consent letter prepared if the applicant is not the registered owner.
                4. The site plan checked against the survey plan for boundaries, area and bearings.

                ## Notes
                This pack proves ownership for the application. Whether the title is good enough to develop on is a separate check with your attorney.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete ownership and survey pack, certified as required, that matches the site plan and is ready to attach to every application."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ownership documents each agency's checklist asks for"
                - "Order certified copies of the deed or title and the survey plan"
                - "Draft the owner's consent letter if a company or relative owns the land"
                - "Ask the architect to check the site plan against the survey plan"
            - name: Approvals file and reference number register
              description: |-
                ## Purpose
                A single scheme can collect a planning reference, an environmental file number, a building permit number and separate references from the water authority, fire service and highways. When an officer phones, you need the right number and the latest letter in seconds. A register of every reference, submission date and document version keeps the file usable for you, your architect and a lender's monitoring surveyor.

                ## Milestones
                1. One shared folder holding every submission, receipt, letter and stamped drawing.
                2. A register listing each agency, its reference number, submission date and current status.
                3. A naming rule for drawing revisions that matches the revision letters on the drawings.
                4. Receipts for every fee paid scanned and linked to the register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register showing every agency reference, date and status for the scheme, linked to a shared folder holding all submissions and receipts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one shared folder for all approval documents for the scheme"
                - "Start a register with a row for each agency and reference number"
                - "Scan every fee receipt and link it to the register"
                - "Agree a drawing revision naming rule with the architect"
            - name: Pre-consultation meeting with the planning office
              description: |-
                ## Purpose
                Planners in most offices across the region will meet an applicant or their architect before submission, formally or informally, and a half-hour conversation can reveal setback rules, parking standards or consultee concerns that would otherwise come back as a refusal. Going in with a site plan, a massing sketch and specific questions turns that meeting into written guidance you can design to.

                ## Milestones
                1. A meeting booked with the planning office, with the site plan and sketch scheme sent ahead.
                2. A list of specific questions on use, density, height, setbacks, parking and access prepared.
                3. Notes of the officer's answers written up the same day and emailed back for confirmation.
                4. Design changes arising from the meeting listed for the architect.

                ## Notes
                Start from the **Meeting notes** template. Officers' informal views do not bind the authority, so treat them as guidance and keep your note of what was said.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A pre-consultation meeting held, with written notes confirmed by email and a list of design changes sent to the architect."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the planning office how to book a pre-consultation meeting"
                - "Send the site plan and massing sketch a week before the meeting"
                - "Write up the officer's answers and email them back the same day"
                - "Give the architect a list of changes arising from the meeting"
            - name: Weekly agency follow-up rhythm
              description: |-
                ## Purpose
                Files in Caribbean agencies move fastest when someone politely asks about them, and stall when nobody does. A fixed weekly slot to phone or email each agency holding a file, log what was said and send any missing document the same day replaces anxious chasing with a steady record that also helps if a complaint or escalation becomes necessary.

                ## Milestones
                1. A weekly follow-up slot in the diary for as long as any file is open.
                2. A call log noting the date, person spoken to, what they said and the next step.
                3. Missing documents identified on a call sent within two working days.
                4. Files with no movement for four weeks flagged for escalation.

                ## Notes
                Courtesy and persistence work better than pressure. Learn the names of the clerks and technical officers who handle your file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A call log with an entry for every open file each week, and any file stalled for four weeks flagged with an escalation step."
                cadence: rolling
              tasks:
                - "Block a weekly hour for agency follow-ups in the diary"
                - "Phone or email each agency holding an open file and log the reply @recurring(weekly:tue)"
                - "Send any missing document within two working days of the call"
                - "Flag files with no movement in four weeks for escalation"
            - name: Multi-agency application status tracker
              description: |-
                ## Purpose
                With four or five agencies and several consultees involved, it is easy to miss that the fire service has signed off but the drainage division has not even received the drawings. A one-page tracker with each approval's status, date and blocker gives you, your partners and your lender the same picture and shows which agency is holding up the programme.

                ## Milestones
                1. A tracker with one row per approval and consultee, showing status, last action and blocker.
                2. Status words agreed and used consistently: not submitted, submitted, comments, approved, refused.
                3. The tracker updated monthly and shared with partners and the lender.
                4. The slowest approval each month named and a plan to move it agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status tracker covering every approval and consultee, updated monthly and shared, with the slowest item and its next step named."
                cadence: rolling
              tasks:
                - "Build the tracker with a row for each approval and consultee"
                - "Agree five status words and use only those"
                - "Update the tracker and send it to partners and the lender @recurring(monthly:5)"
                - "Name the slowest approval and agree one action to move it"
            - name: Agency comments and requisitions log
              description: |-
                ## Purpose
                Comment letters from planning, environmental and building officers often arrive as a list of requisitions: a revised drainage plan, a fire escape width, a traffic letter, a soakaway test. Logging each requisition, who owns the reply and when it was answered stops the same point coming back on the next round and shows the agency you dealt with everything.

                ## Milestones
                1. Every comment letter broken down into numbered requisitions in one log.
                2. An owner and target date set for each requisition.
                3. A covering response letter that answers each requisition by number.
                4. Requisitions closed only when the agency confirms they are satisfied.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A requisitions log in which every agency comment has an owner, a response date and a closure status confirmed by the agency."
                cadence: rolling
              tasks:
                - "Split the latest comment letter into numbered requisitions"
                - "Assign an owner and target date to each requisition"
                - "Ask the agent to draft a numbered covering response from the log"
                - "Mark requisitions closed only after the agency confirms"
            - name: Conditions of approval register
              description: |-
                ## Purpose
                Planning permissions, environmental clearances and building permits in the region often carry dozens of conditions: drainage works before occupation, landscaping, monitoring reports, inspections at set stages. Breaching one can stop work or block the completion certificate. A register with each condition, its trigger, its owner and the evidence of compliance turns a long approval letter into a checklist the site team can follow.

                ## Milestones
                1. Every condition from every approval entered with its trigger point: before start, during works, before occupation, ongoing.
                2. An owner and the evidence needed named for each condition.
                3. Conditions due before start on site discharged or in hand before work begins.
                4. Compliance evidence filed against each condition as it is met.

                ## Notes
                Start from the **Compliance control** template. Read the conditions on the day the approval arrives; some must be satisfied before any site clearance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A conditions register covering every approval, each condition with a trigger, owner and filed evidence, reviewed monthly."
                cadence: rolling
              tasks:
                - "Enter every condition from each approval letter into the register"
                - "Mark each condition by trigger point and name its owner"
                - "Review conditions falling due with the site team @recurring(monthly:18)"
                - "File the evidence of compliance against each condition as it is met"
            - name: Approval expiry and renewal calendar
              description: |-
                ## Purpose
                Approvals lapse. Planning permissions, environmental clearances and building permits usually carry a period within which work must start or be completed, and a lapsed approval can mean applying again under newer, stricter rules. A calendar of every expiry date with a reminder well before it protects approvals that may be worth more than the land under them.

                ## Milestones
                1. The validity period of every approval read from the letter or regulations and an expiry date recorded.
                2. Reminders set six and three months before each expiry.
                3. The steps and evidence needed to extend or renew each approval written down.
                4. A decision recorded for each approval nearing expiry: start, extend or let lapse.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An expiry calendar listing every approval with its date, renewal steps and reminders, reviewed every quarter."
                cadence: rolling
              tasks:
                - "Read the validity period on every approval letter you hold"
                - "Enter each expiry date with reminders six and three months ahead"
                - "Write down how each approval is extended or renewed"
                - "Review approaching expiries and record a decision for each @recurring(quarterly)"
            - name: Building inspection booking log
              description: |-
                ## Purpose
                Once a building permit is granted, the building or local authority usually expects inspections at stages such as foundations, before pouring slabs, roofing and final completion, and pouring concrete before an inspection can mean breaking it out. A log of each required stage, the booking date, the inspector and the result keeps the contractor and the authority in step and builds the record the completion certificate needs.

                ## Milestones
                1. The required inspection stages listed from the permit and the building authority's guidance.
                2. A booking procedure agreed with the contractor, including notice periods.
                3. Each inspection logged with date, inspector, result and any defects raised.
                4. Defects from failed inspections closed and reinspected before the next stage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An inspection log with every required stage booked, inspected and passed, with any failed inspection closed and reinspected."
                cadence: rolling
              tasks:
                - "List the inspection stages required by the permit"
                - "Agree with the contractor who books inspections and how much notice to give"
                - "Check the inspection log against progress on site @recurring(monthly:22)"
                - "Get failed inspection defects fixed and reinspected before the next stage"
            - name: Planning law and fee change watch
              description: |-
                ## Purpose
                Legislation on planning and building across the region has been changing: new planning acts, national building codes, online application systems, environmental rules and revised fee schedules. A monthly fifteen-minute scan of agency notices, gazette items and professional association updates means a change in setback rules or fees reaches your scheme before it reaches your submission.

                ## Milestones
                1. A list of sources to watch: agency websites, the official gazette, professional associations and local news.
                2. A monthly scan habit with changes noted in one place.
                3. Each relevant change assessed for its effect on current and planned schemes.
                4. Architects and partners told of any change that affects a live file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log with a monthly entry, each relevant change assessed for its effect on live schemes and shared with the team."
                cadence: rolling
              tasks:
                - "List the agency sites, gazette and associations you will watch"
                - "Scan the sources for planning, building and fee changes @recurring(monthly:12)"
                - "Note which live schemes each change affects"
                - "Tell the architect and partners about changes that affect a live file"
            - name: Neighbour and community relations log
              description: |-
                ## Purpose
                In small island communities an objection from a neighbour, a village council or a church can carry real weight with a planning officer, and complaints about dust, noise or blocked drains during works can end up at the agency that granted the permit. Speaking to neighbours early and keeping a log of every contact and promise reduces surprises and shows good faith if a dispute arises.

                ## Milestones
                1. Immediate neighbours and community bodies listed with contact details.
                2. Neighbours told about the scheme before submission, with any concerns noted.
                3. A log of every contact, concern raised and promise made.
                4. Each promise kept or explained, with the outcome recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log of neighbour and community contacts with every concern and promise recorded and an outcome noted for each."
                cadence: rolling
              tasks:
                - "List neighbours and community groups within sight of the site"
                - "Visit the closest neighbours before the application goes in"
                - "Record every concern and promise in the relations log"
                - "Review open concerns and promises with the site lead @recurring(monthly:26)"
            - name: Quarterly approvals pipeline review
              description: |-
                ## Purpose
                A developer with more than one site needs to see the approvals position across all of them: which schemes are waiting, which approvals are at risk of lapsing, where money is tied up in land that cannot yet be built on. A quarterly review across the pipeline guides where to spend architect time and capital next, and when to sell or hold a site that is stuck.

                ## Milestones
                1. Every site listed with its approval status, expiry dates and money spent to date.
                2. Stuck files named with the reason and the next action.
                3. A decision recorded for each stuck site: push, redesign, sell or hold.
                4. The review shared with partners and filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly pipeline review on file with every site's status, spend and a recorded decision for each stuck site."
                cadence: cyclic
              tasks:
                - "List every site with its approval status and spend to date"
                - "Hold the pipeline review with partners and record decisions @recurring(quarterly)"
                - "Name the next action for each stuck file"
                - "File the review in the approvals folder"
            - name: Environmental clearance conditions monitoring
              description: |-
                ## Purpose
                Environmental clearances often require ongoing actions, not just a one-off approval: silt fencing during earthworks, water quality sampling, turtle nesting precautions on beaches, dust control or periodic monitoring reports to the regulator. Missing a report can lead to a stop order or a fine. A monitoring routine with the right specialist booked keeps the clearance in good standing through construction.

                ## Milestones
                1. Every monitoring and reporting duty in the environmental clearance listed with its frequency.
                2. A specialist or site lead assigned to each monitoring duty.
                3. Monitoring results filed and reports submitted to the regulator on time.
                4. Any exceedance or incident reported in the way the clearance requires.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monitoring duty in the environmental clearance assigned, carried out on schedule and reported, with submission receipts on file."
                cadence: rolling
              tasks:
                - "List each monitoring and reporting duty in the clearance"
                - "Book a specialist for any sampling the clearance requires"
                - "Check monitoring results and report dates are on track @recurring(monthly:9)"
                - "File each report with the regulator's receipt"
            - name: How town and country planning works in your territory
              description: |-
                ## Purpose
                Most Caribbean planning systems descend from the same town and country planning model, but each territory has adapted it: who decides, which matters go to a board or minister, what counts as development, and what rights of appeal exist. An evening with the planning act, the regulations and the agency's applicant guide turns opaque delays into a process you can predict and explain to partners.

                ## Milestones
                1. The main planning act and regulations for the territory found and their key sections read.
                2. A one-page summary of who decides, on what grounds and in what time frame.
                3. The types of works that need permission and those that do not noted.
                4. Rights of appeal and their time limits written down.

                ## Notes
                Ask your attorney or planner to check your summary. Acts are often amended, and older copies circulate online.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the territory's planning process, decision makers and appeal rights, checked by a local planner or attorney."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the current planning act and regulations for the territory"
                - "Read the sections on applications, decisions and appeals"
                - "Write a one-page summary of who decides and on what grounds"
                - "Ask a local planner to correct the summary"
            - name: Building code compliance for the drawings
              description: |-
                ## Purpose
                Building permit drawings in the region are checked against a national building code or a regional model such as the OECS building code, with requirements on structure, wind loads, fire safety, accessibility and plumbing. Knowing which code edition the building authority applies, and having the engineer confirm compliance on the drawings, avoids the most common reason for a permit coming back with requisitions.

                ## Milestones
                1. The building code and edition the building authority applies confirmed in writing.
                2. The chapters that apply to the scheme identified: structure, wind, fire, access, plumbing.
                3. The engineer's and architect's code compliance notes added to the drawings.
                4. A short list of code items the authority usually queries prepared from local experience.

                ## Notes
                Designing for hurricanes in depth belongs in its own resilience work; this project is about what the permit reviewer will check.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The applicable code edition confirmed and compliance notes shown on the permit drawings, with a list of commonly queried items."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the building authority which code and edition it applies"
                - "List the code chapters that apply to the scheme"
                - "Ask the engineer to add code compliance notes to the drawings"
                - "Check whether the applicable code edition has changed @recurring(yearly)"
            - name: When an environmental assessment is triggered
              description: |-
                ## Purpose
                Most territories list the kinds of development that need environmental clearance or an environmental impact assessment: hotels above a certain size, coastal works, quarrying, large subdivisions, projects near protected areas. Finding out early whether your scheme is on the list, and whether a lighter screening route exists, can change the programme by a year and the budget substantially.

                ## Milestones
                1. The regulator's list or designated activities order found and read.
                2. The scheme checked against each relevant category and threshold.
                3. A screening request or written view from the regulator obtained if the position is unclear.
                4. The likely environmental route recorded in the approvals programme.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written view, from the regulator or a qualified consultant, on whether the scheme needs clearance or a full assessment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the environmental regulator's list of activities that need clearance"
                - "Check the scheme's size, use and location against the thresholds"
                - "Ask the regulator for a screening view if the position is unclear"
                - "Add the environmental route to the approvals programme"
            - name: Reading an approval letter and its conditions
              description: |-
                ## Purpose
                Approval letters arrive with standard and special conditions, sometimes referenced to drawings by number and revision, sometimes with vague phrases such as to the satisfaction of the authority. Reading a few real letters closely, and practising turning each condition into an action, owner and evidence, makes the first approval on your own scheme far less likely to trip you up.

                ## Milestones
                1. Two or three past approval letters from local schemes read closely.
                2. Standard and special conditions told apart.
                3. Each condition turned into an action, owner and evidence in practice notes.
                4. Questions about unclear conditions listed for the architect or planning office.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Practice notes converting at least two real approval letters into actions, owners and evidence, with unclear points listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your architect for two anonymised approval letters from past schemes"
                - "Mark each condition as standard or special"
                - "Turn each condition into an action, owner and evidence"
                - "List the unclear wording to ask the planning office about"
            - name: Submission drawing set requirements
              description: |-
                ## Purpose
                Incomplete drawing sets are the most common reason files are returned at the counter or sit unprocessed. Agencies usually want a location plan, site plan with setbacks and levels, floor plans, elevations, sections, drainage and wastewater details and sometimes a landscape plan, at set scales and in a set number of copies or digital format. Learning the list once speeds every scheme after.

                ## Milestones
                1. Each agency's drawing checklist collected, with scales, copies and file formats.
                2. A master checklist combining all agencies' requirements.
                3. The current drawing set checked against the master checklist with gaps marked.
                4. Gaps closed by the architect before submission.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A master drawing checklist covering every agency, with the scheme's drawing set checked against it and all gaps closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect each agency's drawing checklist and copy requirements"
                - "Combine them into one master checklist"
                - "Check the current drawing set against the master checklist"
                - "Send the architect the list of missing drawings"
            - name: Working with statutory consultees
              description: |-
                ## Purpose
                Applications in the region are typically referred by the planning office to consultees such as the water and sewerage authority, fire service, highways or works ministry, drainage, public health, civil aviation and sometimes the electricity company. A consultee's silence can hold a decision for months. Knowing who each consultee is, what they look for and whether you can submit to them directly is a skill that shortens every approval.

                ## Milestones
                1. The consultees likely to be asked about the scheme listed.
                2. What each consultee checks noted: fire access, sight lines, drainage, water demand.
                3. Whether direct pre-submission to a consultee is allowed confirmed.
                4. A contact person at each consultee identified.

                ## Notes
                Some consultees accept a pre-submission meeting or a copy of the drawings in advance. Ask, because a consultee that has already seen the scheme replies faster.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A consultee list for the scheme with what each checks, a contact person, and whether direct submission is allowed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the planning office which consultees it will refer the scheme to"
                - "Note what each consultee usually checks on similar schemes"
                - "Ask each consultee whether they accept drawings before referral"
                - "Record a contact person for each consultee"
            - name: Coastal setbacks and high water mark rules
              description: |-
                ## Purpose
                Coastal parcels carry rules on how far buildings must sit from the high water mark or vegetation line, beach access, and sometimes Crown or state land along the foreshore. Setbacks vary by territory and coast, and a surveyor's line drawn in the wrong place can cost a row of units. Understanding the rule and getting the line fixed properly comes before any layout.

                ## Milestones
                1. The coastal setback rule and how it is measured confirmed with the planning or coastal agency.
                2. The high water mark or reference line surveyed by a licensed surveyor.
                3. The setback line drawn on the site plan with the buildable area shown.
                4. Any public access or foreshore requirements recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A site plan showing a surveyed reference line and the coastal setback confirmed by the relevant agency."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the coastal or planning agency how the setback is measured"
                - "Commission a licensed surveyor to fix the reference line"
                - "Have the architect draw the setback line on the site plan"
                - "Note any public beach access the agency requires"
            - name: Public health and wastewater sign-off
              description: |-
                ## Purpose
                Where a site is not on a public sewer, the public health department or water authority usually has to approve the septic tank, soakaway or package treatment plant, often after percolation tests and with separation distances from wells and boundaries. Without that sign-off the planning or building approval stalls. Planning the tests and design early keeps wastewater off the critical path.

                ## Milestones
                1. The agency that approves on-site wastewater for the scheme confirmed.
                2. Percolation or soil tests carried out by a qualified person.
                3. A wastewater design meeting the agency's separation distances drawn.
                4. Written public health approval for the wastewater system on file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written approval of the scheme's wastewater system from the public health or water authority, with test results on file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the public health office what it needs for on-site wastewater approval"
                - "Book percolation tests with a qualified engineer"
                - "Have the engineer design the system to the required distances"
                - "Submit the wastewater design and follow up for written approval"
            - name: Response to a deferral or request for more information
              description: |-
                ## Purpose
                Applications are often deferred rather than refused: the board wants a traffic note, a revised layout, a letter from the water authority or proof of access. A clear, complete response within the time allowed, answering each point by number, gets the file back on the agenda. A slow or partial reply sends it to the bottom of the pile.

                ## Milestones
                1. The deferral letter read and each point listed.
                2. Owners and a response date agreed for each point.
                3. Revised drawings and reports prepared and checked against every point.
                4. A numbered response submitted with a receipt, and the next meeting date confirmed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A numbered response answering every point in the deferral, submitted within the time allowed with a receipt on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every point raised in the deferral letter"
                - "Agree who answers each point and by when"
                - "Check the revised drawings answer every point before submitting"
                - "Confirm the date the file returns to the board or officer"
            - name: Redesign or appeal decision after a refusal
              description: |-
                ## Purpose
                A refusal is a decision point, not the end. Sometimes the reasons can be met with a redesign and a fresh application in a few months; sometimes they rest on a policy reading worth challenging; sometimes the site is wrong for the scheme. Comparing the routes on cost, time and odds, with a planner's view, stops you spending a year on the wrong one.

                ## Milestones
                1. The refusal reasons copied out and understood, with the officer's explanation sought.
                2. Options set out: redesign and resubmit, appeal, change the scheme, or sell.
                3. Each option costed with a likely timeline and a planner's view on prospects.
                4. A recorded decision with the appeal deadline noted in case it is needed.

                ## Notes
                Appeal time limits can be short. Note the deadline on the day the refusal arrives, even if you expect to redesign.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of redesign, appeal and exit options after a refusal, with a recorded decision and the appeal deadline noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note the appeal deadline on the day the refusal arrives"
                - "Ask the case officer to explain the refusal reasons in a meeting"
                - "Cost the redesign, appeal and exit options with a planner"
                - "Record the decision and the reasons in the approvals file"
            - name: Approvals expediter appointment decision
              description: |-
                ## Purpose
                In several territories developers use an approvals expediter or project facilitator to walk files between agencies, collect comments and pay fees. A good one saves months; a poor one adds cost and can create integrity risks. Deciding whether you need one, and choosing someone with a clean, checkable record and a written scope, is a real decision rather than a favour from a friend.

                ## Milestones
                1. The tasks an expediter would do listed and compared with what the architect already covers.
                2. Two or three candidates interviewed, with references from recent clients.
                3. A written scope and fee agreed, with all agency payments made only against official receipts.
                4. A decision recorded to appoint, not appoint or review after the first approval.

                ## Notes
                Pay agency fees only through official channels and keep every receipt. Any request for an unofficial payment is a reason to walk away and seek legal advice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on using an expediter, with a scope, fee and receipts-only payment rule if one is appointed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what the expediter would do that the architect does not"
                - "Interview two candidates and call one recent client each"
                - "Agree a written scope with a receipts-only rule for agency fees"
                - "Record whether to appoint and when to review"
            - name: Variation to an approved scheme
              description: |-
                ## Purpose
                Schemes change after approval: a buyer wants a larger unit, the contractor proposes a different structure, costs force a reduced footprint. Some changes are minor and can be agreed by letter; others need a fresh application and can reopen issues. Checking the route before work deviates from the approved drawings avoids enforcement action and a completion certificate that cannot be issued.

                ## Milestones
                1. The proposed changes listed and compared with the approved drawings.
                2. The planning and building offices asked whether the change is minor or needs a new application.
                3. Revised drawings submitted by the right route.
                4. Written approval of the variation on file before the changed work is built.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written approval for each change to the scheme on file before the changed work is built, through the route the agency confirmed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every change from the approved drawings"
                - "Ask the planning office whether the change counts as minor"
                - "Submit revised drawings by the route the office confirms"
                - "Hold the changed work until written approval arrives"
            - name: Phased approvals for a multi-stage scheme
              description: |-
                ## Purpose
                Larger schemes, such as townhouse clusters built in stages or a mixed project with a commercial block first, are often easier to finance and sell if approvals are phased. Phasing can let the first stage start while later stages are still being designed, but conditions must be written so phase one can be completed and occupied on its own. Agreeing the phasing with the authority up front avoids conditions that tie every phase together.

                ## Milestones
                1. A phasing plan showing what each phase includes, with its roads, drainage and services.
                2. The planning office's agreement in principle to phased approval or phased conditions.
                3. Conditions drafted or negotiated so each phase can be completed independently.
                4. The approvals programme updated phase by phase.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A phasing plan agreed with the planning office, with conditions that allow each phase to be completed and occupied separately."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a phasing plan with the services each phase needs"
                - "Ask the planning office whether phased approval is possible"
                - "Check draft conditions let each phase complete on its own"
                - "Update the approvals programme for each phase"
            - name: Approval delay risk register and contingency plan
              description: |-
                ## Purpose
                Approval delays are the most common reason small Caribbean developments overrun: a board that does not meet, a consultee that loses the file, an election that freezes decisions, a hurricane season that closes offices. A short register of those risks with their effect on finance and sales, and a pre-agreed response for each, means a delay is managed rather than discovered at the lender's next review.

                ## Milestones
                1. The ten most likely approval risks listed with likelihood and impact.
                2. The cost of each month of delay calculated: interest, holding costs, deposit deadlines.
                3. A response agreed for each major risk, including who escalates and how.
                4. The register reviewed monthly while approvals are open.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register of approval delays with the monthly cost of delay and a response for each major risk, reviewed monthly."
                cadence: rolling
              tasks:
                - "List the ten approval risks most likely on this scheme"
                - "Work out what one month of delay costs the project"
                - "Agree a response and escalation route for each major risk"
                - "Review the risk register while approvals are open @recurring(monthly:14)"
            - name: Planning application submission day
              description: |-
                ## Purpose
                The planning application is the file every other approval waits for. Submitting it complete, with forms signed, fees paid, ownership evidence attached and every drawing in the right number of copies, starts the clock on the right date and avoids the counter rejection that costs weeks. A checklist and a dry run the day before make submission a non-event.

                ## Milestones
                1. Forms completed and signed by the right people.
                2. The drawing set, reports and ownership pack checked against the agency checklist.
                3. Fees paid and the receipt filed.
                4. A stamped acknowledgement or reference number received and entered in the register.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete planning application submitted, fees paid and a reference number or stamped receipt recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the submission pack against the agency checklist with the architect"
                - "Collect signatures on every form the day before"
                - "Pay the fee and keep the official receipt"
                - "Enter the reference number in the approvals register"
            - name: Environmental clearance application submission
              description: |-
                ## Purpose
                Where the scheme needs environmental clearance, the application usually goes to the environmental regulator with a project description, site plans and sometimes baseline studies, and the regulator may ask for more or call for a full assessment. Submitting early and in parallel with planning, where the system allows, keeps the environmental file from becoming the last thing holding up start on site.

                ## Milestones
                1. The regulator's application form and required attachments confirmed.
                2. A clear project description and site plans prepared.
                3. The application submitted and the fee paid, with a file number received.
                4. The regulator's response logged, with any further information supplied on time.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An environmental clearance application submitted with a file number, and every regulator request answered within its deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download the regulator's application form and guidance"
                - "Write a project description covering site, works, drainage and waste"
                - "Submit the application and record the file number"
                - "Log each regulator request and answer it before its deadline"
            - name: Building permit application submission
              description: |-
                ## Purpose
                In many territories the building permit is a separate application to the building or local authority, made after or alongside planning, with structural drawings, calculations and code compliance notes. Submitting a complete set signed by the right professionals, and arranging any consultee stamps first, makes the permit a short step instead of a second planning saga.

                ## Milestones
                1. The building authority's requirements confirmed, including any approvals it needs to see first.
                2. Structural drawings, calculations and services drawings signed by registered professionals.
                3. The application submitted with fees paid and a reference recorded.
                4. The permit issued, with its conditions entered in the conditions register.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A building permit issued for the scheme, with its reference in the register and its conditions in the conditions register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the building authority which approvals it needs to see first"
                - "Collect signed structural and services drawings from the engineers"
                - "Submit the permit application and record the reference"
                - "Enter the permit conditions in the conditions register"
            - name: Public meeting for an environmental assessment
              description: |-
                ## Purpose
                Full environmental assessments in the region usually include public consultation, sometimes a formal public meeting with the regulator present. A meeting that is badly advertised, too technical or defensive can produce objections that delay the decision. Preparing plain-language material, choosing an accessible venue and time, and recording every question properly makes the consultation count.

                ## Milestones
                1. The regulator's consultation requirements confirmed, including notice periods.
                2. A venue, time and notices arranged so residents and fishers can attend.
                3. Plain-language boards and a short presentation prepared and rehearsed.
                4. Every question and answer recorded and included in the assessment report.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A public meeting held to the regulator's requirements, with a record of every question and answer included in the assessment."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Confirm the regulator's notice and consultation requirements"
                - "Book a venue at a time working residents can attend"
                - "Prepare plain-language display boards with the consultant"
                - "Record every question and answer for the assessment report"
            - name: Commencement notice and first site inspection
              description: |-
                ## Purpose
                Starting work usually means notifying the building authority, displaying the permit on site and passing a first inspection, often at setting out or foundations. Some approvals also require that pre-commencement conditions are discharged first. Getting this right protects the approvals you have spent months on and sets the tone with the inspector for the rest of the build.

                ## Milestones
                1. Every pre-commencement condition confirmed as discharged in writing.
                2. The commencement notice given in the form and time the authority requires.
                3. The permit and approved drawings displayed or kept on site.
                4. The first inspection passed and logged.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Commencement notified, pre-start conditions discharged in writing and the first inspection passed and logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check every pre-commencement condition is discharged in writing"
                - "Give the building authority notice of commencement"
                - "Put the permit and approved drawings in the site office"
                - "Book and attend the first inspection"
            - name: Completion certificate and occupancy approval
              description: |-
                ## Purpose
                Buyers' attorneys, lenders and insurers increasingly ask for a completion certificate or certificate of occupancy, and in some territories utilities will not connect permanently without one. Many finished Caribbean buildings never get one because the final inspection or a late condition was neglected. Planning for the certificate from the start of the build makes it a formality at the end.

                ## Milestones
                1. The documents and inspections needed for the certificate listed.
                2. Every condition required before occupation shown as met in the register.
                3. Final inspections by the building authority, fire service and any other agency passed.
                4. The completion certificate or certificate of occupancy issued and copies given to buyers' attorneys and the lender.
              priority: medium
              deadlineOffsetDays: 540
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completion certificate or certificate of occupancy issued for the scheme and copied to the lender and buyers' attorneys."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the building authority what it needs to issue the certificate"
                - "Check every pre-occupation condition is met in the register"
                - "Book final inspections with the building authority and fire service"
                - "Send copies of the certificate to the lender and buyers' attorneys"
            - name: Managing approvals from overseas through a local representative
              description: |-
                ## Purpose
                Diaspora developers in the UK, US and Canada often build back home, and approvals are where distance hurts most: offices want originals, signatures and in-person visits. A clear power of attorney or written authority, a trusted local representative with a defined scope, and a weekly reporting rhythm let you keep decisions while someone else stands in the queue.

                ## Milestones
                1. A local representative chosen and their scope written down.
                2. A power of attorney or letter of authority prepared with an attorney and accepted by the agencies.
                3. A weekly update call and a monthly written report with photos and receipts agreed.
                4. Original documents and signatures planned around your visits or by courier.

                ## Notes
                Limit the authority to the approvals work and the named property. Keep fee payments traceable, ideally paid directly to the agency.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A representative appointed with written authority accepted by the agencies, and weekly calls and monthly reports with receipts in place."
                cadence: rolling
              tasks:
                - "Write a one-page scope for the local representative"
                - "Ask an attorney to prepare a limited power of attorney or authority letter"
                - "Hold the weekly approvals call with your representative @recurring(weekly:sat)"
                - "Review the representative's report, photos and receipts @recurring(monthly:15)"
            - name: First small scheme approvals for a duplex or small block
              description: |-
                ## Purpose
                For a first development, such as a duplex, a fourplex or six apartments on a residential lot, the approvals process is the same in kind as for a large scheme but the margins are thinner and every month costs proportionally more. Walking one modest scheme through every agency, with a mentor or experienced architect, builds the relationships and records you will reuse on the next one.

                ## Milestones
                1. The scheme's approvals listed and sequenced from the agency map.
                2. An experienced architect or developer mentor agreed to review each submission.
                3. Planning, wastewater and building approvals in hand.
                4. A lessons note written after approval for the next scheme.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Planning, wastewater and building approvals in hand for a first small scheme, with a written lessons note."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the approvals this first scheme needs in order"
                - "Ask an experienced developer to review your submissions"
                - "Track each approval in the status tracker until all are granted"
                - "Write a lessons note for the next scheme"
            - name: Change of use for small business premises
              description: |-
                ## Purpose
                Small businesses often want to turn a house into offices, add a shop front, convert a warehouse into a restaurant or extend premises on a main road. Each of these may need change of use permission, parking and access checks, fire service approval and sometimes a trade or health licence. Knowing the full list before signing a lease or paying a contractor avoids trading from premises that cannot legally be used.

                ## Milestones
                1. The current approved use of the building confirmed with the planning office.
                2. The approvals needed for the new use listed: planning, fire, public health, signage.
                3. Parking, access and fire escape requirements checked against the building.
                4. Approvals granted before the lease becomes unconditional or works start.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All approvals for the new use in hand before the lease becomes unconditional or fit-out starts."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the planning office what the building is currently approved for"
                - "List the approvals the new use needs, including fire and health"
                - "Make the lease conditional on change of use approval"
                - "Check parking and fire escape needs against the building"
            - name: Approvals in a second Caribbean territory
              description: |-
                ## Purpose
                Developers who succeed on one island often look at the next, and assume the process transfers. It rarely does fully: agencies, fees, alien landholding rules, professional registration and the weight given to consultees differ. Treating the new territory as a fresh learning exercise, with a local partner and a pilot conversation with each agency, avoids importing the wrong assumptions.

                ## Milestones
                1. A new agency map and fee schedule for the second territory.
                2. Rules on foreign or non-resident ownership and any licence needed checked with an attorney.
                3. A local architect and attorney appointed.
                4. A list of differences from your home territory written for the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of the approval process in the second territory against your home territory, with local professionals appointed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build an agency map for the new territory"
                - "Ask a local attorney about non-resident landholding licences"
                - "Appoint a local architect who submits there regularly"
                - "Write a list of differences from your home territory"
            - name: Regularising an unapproved existing building
              description: |-
                ## Purpose
                Across the region many buildings were extended or built without full approval, and the problem surfaces when you try to sell, refinance, insure or redevelop them. Many authorities have a route to retrospective approval, sometimes with penalties or required works. Surveying what exists, comparing it with what was approved and applying properly turns a liability into a building a lender will accept.

                ## Milestones
                1. Measured drawings of the building as it stands.
                2. Any previous approvals found and compared with what was built.
                3. The authority's retrospective approval route, penalties and required works confirmed.
                4. A retrospective application submitted and the outcome recorded.

                ## Notes
                Take advice from an attorney before approaching the authority if enforcement action is possible. The order in which you act can matter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A retrospective approval application submitted with measured drawings, and the authority's decision recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Commission measured drawings of the building as built"
                - "Search the authority's records for any previous approval"
                - "Ask an attorney how to approach the authority safely"
                - "Submit the retrospective application with the measured drawings"
            - name: Development in a heritage area or historic town centre
              description: |-
                ## Purpose
                Historic districts such as old capital town centres, listed buildings and areas near world heritage sites carry extra controls on demolition, height, materials and facades, and often involve a heritage trust or national trust as consultee. Engaging the heritage body early and designing within its guidance can open grants or goodwill; ignoring it can halt a scheme.

                ## Milestones
                1. The heritage designation of the site and its neighbours confirmed.
                2. The heritage body's guidance on height, materials and facades obtained.
                3. An early meeting held with the heritage body, with notes confirmed.
                4. A heritage statement included with the planning application.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A heritage statement submitted with the application, reflecting written guidance from the heritage body."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check whether the site is listed or inside a heritage area"
                - "Request the heritage body's design guidance"
                - "Meet the heritage body before the design is fixed"
                - "Ask the agent to draft a heritage statement from the meeting notes"
            - name: Full environmental impact assessment management
              description: |-
                ## Purpose
                When a scheme triggers a full assessment, the developer usually commissions it, agrees terms of reference with the regulator, and pays for baseline studies on ecology, coastal processes, traffic, drainage and social effects. The assessment can take a year or more. Managing it as a project, with a qualified lead consultant, a fixed scope and the regulator kept informed, keeps the cost and timetable under control.

                ## Milestones
                1. Terms of reference agreed with the regulator in writing.
                2. A qualified lead consultant appointed with a fixed scope and fee.
                3. Baseline surveys scheduled around seasons such as turtle nesting or the rainy season.
                4. The draft report reviewed, submitted and the regulator's comments answered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An environmental impact assessment submitted to agreed terms of reference, with the regulator's comments answered and a decision recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Request draft terms of reference from the regulator"
                - "Shortlist assessment consultants with recent approvals in the territory"
                - "Schedule baseline surveys around the relevant seasons"
                - "Review progress against the assessment programme @recurring(monthly:20)"
            - name: Coastal and marine works permits
              description: |-
                ## Purpose
                Jetties, seawalls, revetments, beach nourishment and marinas usually need permits from the coastal zone or fisheries agency, the port or maritime authority and the environmental regulator, often with hydrographic surveys and modelling. These permits are slower and more technical than land approvals. Running them as a specialist workstream with a coastal engineer prevents them holding up the rest of a waterfront scheme.

                ## Milestones
                1. Every agency with authority over the marine works identified.
                2. A coastal engineer appointed with experience of the territory.
                3. Hydrographic and coastal process studies completed as required.
                4. Marine works permits granted, with their conditions in the register.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All permits for the marine works granted and their conditions entered in the conditions register."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every agency that controls works below the high water mark"
                - "Appoint a coastal engineer with local permit experience"
                - "Commission the hydrographic survey the agencies require"
                - "Enter the marine permit conditions in the conditions register"
            - name: Master plan approval for a large site
              description: |-
                ## Purpose
                Larger sites, such as a mixed residential and commercial estate or a resort with several phases, are often approved first as a master plan setting land uses, densities, roads and infrastructure, then phase by phase. The master plan becomes the framework every later application is measured against. Negotiating it carefully, with flexibility built in, protects the value of phases that may not start for years.

                ## Milestones
                1. A master plan with land uses, densities, roads, drainage and open space prepared.
                2. Infrastructure commitments and their triggers agreed with the authority.
                3. Flexibility clauses for later phases negotiated.
                4. Master plan approval granted and phase conditions tracked each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved master plan with infrastructure triggers agreed and a quarterly check of phase conditions in place."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Brief the master planner on uses, densities and phasing"
                - "List the infrastructure commitments the authority expects"
                - "Negotiate flexibility for later phases with the planning office"
                - "Check master plan phase conditions and triggers @recurring(quarterly)"
            - name: Planning appeal to the appeals body
              description: |-
                ## Purpose
                Appeals against a refusal or onerous conditions are allowed in most territories, made to a minister, tribunal or appeals board, within a fixed period. Appeals are slow and outcomes are never certain, but a well-argued case grounded in the development plan can succeed. Preparing the grounds with a planner and attorney, and keeping the redesign option open, gives the best chance at an acceptable cost.

                ## Milestones
                1. The appeal route, deadline and form confirmed.
                2. Grounds of appeal drafted with a planner and attorney, citing policy.
                3. The appeal lodged in time with a receipt on file.
                4. Hearing or written submissions prepared and the outcome recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An appeal lodged within the deadline with grounds prepared by a planner and attorney, and the outcome recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Confirm the appeal body, form and deadline"
                - "Brief a planner and attorney on the refusal reasons"
                - "Lodge the appeal and file the receipt"
                - "Prepare for the hearing or written stage"
            - name: Facilitation route for a project of national significance
              description: |-
                ## Purpose
                Several territories offer facilitation for larger investments, through an investment promotion agency, a development facilitation committee or a fast-track process that coordinates agencies. These routes can shorten approvals for qualifying schemes but come with eligibility tests and commitments on jobs, investment or timelines. Checking eligibility honestly and preparing the case properly is specialist work for an experienced developer.

                ## Milestones
                1. The facilitation programmes available in the territory and their eligibility tests listed.
                2. The scheme assessed against each test with an adviser.
                3. A facilitation application or briefing prepared with investment and timeline commitments.
                4. The outcome recorded and any commitments added to the conditions register.

                ## Notes
                Facilitation coordinates agencies; it rarely removes the need for each approval. Plan for the full process anyway.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to seek facilitation, with any application outcome and commitments logged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the investment promotion agency what facilitation it offers"
                - "Check the scheme against each eligibility test with an adviser"
                - "Prepare a briefing with the investment and timeline you can commit to"
                - "Add any facilitation commitments to the conditions register"
---

# Caribbean Development Approvals

Getting a scheme approved in the Caribbean means satisfying several agencies at once: the planning authority, the environmental regulator, the building or local authority, and a ring of consultees such as the water authority, fire service, highways, drainage and public health. This area is for founders and small developers taking their own projects through that process in territories from Trinidad and Tobago, Jamaica and Barbados to Guyana, the Bahamas and the OECS islands. It starts with foundations (the agency map, zoning, the approval route, a budget and a realistic programme), builds the recurring machinery of follow-ups, trackers and condition registers, then moves through the skills of reading codes and approval letters, the decisions that come up when an application stalls, the dated submissions and certificates, situations such as developing from abroad or regularising an existing building, and the specialist work of full environmental assessments, coastal permits and appeals.

What repeats is a weekly round of agency follow-ups while files are open, monthly updates to the status tracker, the programme, the conditions register and the policy watch, and quarterly reviews of approval expiry dates and the whole pipeline. The Meeting notes, Vendor, Compliance control, Risk register and Operational checklist templates suit the pre-consultation, professional, conditions, delay and submission projects. None of this is legal or planning advice: confirm procedure, fees and timelines with the agency itself and with a registered planner or attorney in the territory. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
