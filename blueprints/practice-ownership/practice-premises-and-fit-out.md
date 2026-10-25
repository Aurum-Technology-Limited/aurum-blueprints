---
id: practice-ownership.practice-premises-and-fit-out
name: Practice Premises and Fit-Out
description: "A space brief and budget, zoning and lease checks, a layout that meets your regulator's room rules, a fit-out delivered on cost, and the maintenance, safety and lease dates that keep practice premises working."
category: business
version: 1.0.0
tags: [practice-ownership, practice-premises-and-fit-out, small-business, premises, fit-out, commercial-lease, accessibility, zoning]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - operational-checklist
    - compliance-control
    - risk-register
    - remediation-plan
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice Premises and Fit-Out
          description: "Finding and fitting out practice premises: zoning and permitted use, accessibility, clinical or professional layout, regulator rules for rooms and lease terms."
          projects:
            - name: Space requirements schedule for the practice
              description: |-
                ## Purpose
                Most owners start by viewing buildings and only later discover the unit is two rooms short or the waiting area seats eight when the diary needs fifteen. A written schedule of every room, its size, its fittings and who uses it turns a vague wish into a brief that agents, designers and landlords can work to, and it stops the first attractive unit from setting the plan.

                ## Milestones
                1. A list of every room the practice needs, with a target floor area and the number of people using it at peak.
                2. Clinical or professional rooms separated from support space such as storage, staff room, toilets and a comms cupboard.
                3. A total net floor area with a 15 to 20 percent allowance for corridors and walls.
                4. A short list of must-haves and nice-to-haves agreed with any partners.

                ## Notes
                Size the schedule for the practice you expect in five years, not the one you run today. Moving twice inside a lease term is expensive.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated room schedule with areas, occupancy and fittings for every space, signed off by all owners, exists before any viewing is booked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every room the practice uses today and how many people use each at peak"
                - "Add the rooms you will need in five years with a target floor area for each"
                - "Note the fixed fittings each room needs, such as sinks, couches or secure storage"
                - "Agree the must-haves and nice-to-haves with your partners in writing"
            - name: Premises budget for rent, fit-out and running costs
              description: |-
                ## Purpose
                Rent is only the visible part of what a building costs a practice: service charges, local property taxes, insurance, utilities, maintenance and the fit-out itself often add half again. A budget that sets the total occupancy cost against expected revenue tells you what rent you can afford before an agent tells you what the market wants.

                ## Milestones
                1. A target total occupancy cost as a share of revenue, agreed with your accountant.
                2. A yearly running cost estimate covering rent, service charge, property tax, insurance, utilities, cleaning and maintenance.
                3. A fit-out budget range per square metre, with a contingency line.
                4. The source of fit-out funding identified: savings, a bank loan, landlord contribution or a mix.

                ## Notes
                Ask your accountant what occupancy cost looks like for practices of your type. Lenders often judge the same ratio.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A premises budget showing maximum affordable rent, yearly running costs and a funded fit-out range is reviewed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull last year's revenue and current occupancy costs from the accounts"
                - "Estimate yearly running costs line by line for a building of the size you need"
                - "Ask your accountant what occupancy cost ratio is sensible for the practice"
                - "Write down the maximum rent and fit-out spend you will accept"
            - name: Regulator room standards checklist for your profession
              description: |-
                ## Purpose
                Health and professional regulators often set rules for the rooms a practice works from: minimum room sizes, a hand-wash basin in each treatment room, a separate decontamination area, secure record storage or a private space for consultations. Collecting those rules into one checklist before you choose a building means the layout is designed to pass, rather than altered after an inspector's visit.

                ## Milestones
                1. The current premises guidance from your regulator and any licensing authority downloaded and dated.
                2. A checklist of every room-level requirement, with the source clause for each.
                3. Requirements sorted into those a building must already have and those a fit-out can add.
                4. Any unclear rule written as a question and sent to the regulator.

                ## Notes
                Start from the **Compliance control** template. Rules differ by country and profession; quote the regulator's own wording rather than a summary.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A checklist of every premises requirement from your regulator, each with its source, is attached to the space brief."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the regulator's current premises or registration guidance"
                - "Copy each room requirement into a checklist with its clause number"
                - "Mark which requirements the building must already meet"
                - "Email the regulator any rule that needs interpreting for your layout"
                - "Check the regulator's premises guidance for changes @recurring(yearly)"
            - name: Leasing versus buying practice premises
              description: |-
                ## Purpose
                Buying the building gives control and an asset but ties up capital the practice may need for equipment, partners and working cash, while leasing keeps flexibility but leaves you exposed at every renewal. Setting the two side by side over ten years, with your accountant and lender, turns a gut feeling into a recorded decision the partners can live with.

                ## Milestones
                1. Ten-year cash costs of leasing and of buying a comparable building set side by side.
                2. Deposit, borrowing terms and the effect on the practice's cash position confirmed with a lender.
                3. Tax and ownership structure questions answered by your accountant.
                4. A decision recorded with the reasons and the conditions that would change it.

                ## Notes
                Start from the **Purchase decision** template. This is a comparison to take to professionals, not advice; your accountant and lender decide the numbers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written lease or buy decision, with a ten-year cost comparison reviewed by your accountant, is filed and agreed by all owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a commercial agent for typical rents and sale prices for your size of unit"
                - "Get indicative borrowing terms for a building purchase from your bank"
                - "Book an hour with your accountant to compare the two options over ten years"
                - "Record the decision and the reasons in the partners' minutes"
            - name: Catchment map for the premises search
              description: |-
                ## Purpose
                Patients and clients rarely travel far past a familiar landmark, and a move of two kilometres can lose a third of a list. Mapping where current and target clients live or work, along with parking, transport and competitors, draws a search boundary before an agent shows you something cheap in the wrong place.

                ## Milestones
                1. Current client or patient addresses grouped by postcode or district, with no names in the map.
                2. Public transport, parking and main roads marked on the same map.
                3. Competing practices and referral sources plotted.
                4. A search boundary drawn and shared with your agent.

                ## Notes
                Strip names and use counts per district only. Client lists are confidential even inside the practice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An anonymised catchment map with transport, competitors and a drawn search boundary is shared with the agent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export client or patient counts by postcode or district from the practice system"
                - "Plot the counts on a map with bus routes, parking and main roads"
                - "Mark competing practices and your main referral sources"
                - "Draw the search boundary and send it to your agent"
            - name: Premises advisers, from agent and lawyer to surveyor and designer
              description: |-
                ## Purpose
                Your first lease or fit-out is usually the largest contract a practice signs after its partnership agreement, and the landlord's side will have advisers who do this every week. Appointing your own agent, property lawyer, building surveyor and a designer who has worked on practice premises, each with a written scope and fee, keeps you from relying on the landlord's people.

                ## Milestones
                1. Two names for each role gathered from other practice owners or your professional body.
                2. A fee quote and a written scope from each adviser chosen.
                3. Each adviser's experience with your type of practice confirmed.
                4. Contact details, fees and scopes kept in one adviser record.

                ## Notes
                Start from the **Vendor** template. A designer who has never laid out a clinical room will learn on your budget.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agent, property lawyer, surveyor and designer are appointed, each with a signed scope and fee on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask three practice owners who advised them on their last premises"
                - "Request scopes and fee quotes from two candidates per role"
                - "Check each designer's past projects for practices like yours"
                - "Sign engagement letters and file them in the adviser record"
            - name: Site viewing scorecard and shortlist of three
              description: |-
                ## Purpose
                After the fifth viewing every unit blurs together and the decision drifts toward whichever landlord was friendliest. Scoring each site on the same criteria during the visit, from step-free access and ceiling height to parking and drainage routes, produces a defensible shortlist of three to take forward.

                ## Milestones
                1. A scorecard with eight to twelve weighted criteria taken from the space brief and regulator checklist.
                2. Every viewing scored on the day, with photographs and a rough floor sketch.
                3. Rent, service charge and lease length recorded for each site.
                4. Three sites shortlisted with their scores and the reasons the others fell out.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least six sites have been scored on the same weighted scorecard and a ranked shortlist of three is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Turn the space brief and regulator checklist into a weighted scorecard"
                - "Score each viewing on the day and take photographs of entrances and toilets"
                - "Ask the agent for rent, service charge and lease terms for every site"
                - "Rank the sites and write one line on why each rejected site failed"
            - name: Zoning and permitted use check on the preferred site
              description: |-
                ## Purpose
                Converted shops and offices may not be allowed to host a clinic or a professional practice without a change of use, and some planning or zoning authorities limit healthcare uses, signage or opening hours in certain districts. Confirming the permitted use before signing anything avoids paying rent on a unit you cannot legally open.

                ## Milestones
                1. The current permitted or zoned use of the building confirmed from the planning or zoning authority's records.
                2. Your intended use checked against it, including any opening hours or parking conditions.
                3. A written view from your lawyer or planning consultant on whether consent is needed.
                4. Any application, its likely timescale and cost, built into the lease conditions.

                ## Notes
                Ask for the lease to be conditional on consent where one is needed. Never rely on the landlord's word that the use is fine.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written confirmation that the intended practice use is permitted, or a costed consent route, is on file before heads of terms are signed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the planning or zoning authority's records for the building's permitted use"
                - "List your intended use, opening hours and parking needs in one paragraph"
                - "Ask your lawyer or planning consultant whether consent is needed"
                - "Add a consent condition to the draft heads of terms if it is"
            - name: Building survey and services condition report
              description: |-
                ## Purpose
                Under many commercial leases the tenant takes on repairs, so a failing roof, an undersized electrical supply or a drain that cannot take extra sinks becomes your bill. A survey before you commit shows what the building can carry and gives you evidence to negotiate rent, repairs or a schedule of condition.

                ## Milestones
                1. A building surveyor's report covering structure, roof, damp and fabric.
                2. Electrical supply capacity, water, drainage and ventilation checked against the fit-out you plan.
                3. Defects priced and sorted into landlord work, tenant work and items to exclude from your repair duty.
                4. A photographic schedule of condition prepared for attaching to the lease.

                ## Notes
                A schedule of condition limits what you can be asked to put right when you leave, so take it seriously.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A survey and services report for the preferred site is received, with defects priced and a schedule of condition ready for the lease."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Instruct the surveyor with your space brief and planned room list"
                - "Ask an electrician to confirm the supply capacity for your equipment load"
                - "Sort the defects into landlord, tenant and exclusion lists with costs"
                - "Send the schedule of condition to your lawyer for the lease"
            - name: Commercial lease terms glossary for practice owners
              description: |-
                ## Purpose
                Lease negotiations move fast and use terms such as full repairing, upward only rent review, break option, alienation and dilapidations that sound routine but carry years of cost. Learning these terms in the context of a practice, and writing them down in plain words, lets you ask the right question before your lawyer bills for the answer.

                ## Milestones
                1. A one-page glossary of twenty common lease terms in your own words.
                2. Each term marked with why it matters to a practice, for example assignment when you sell.
                3. Three sample leases or precedents read with the glossary beside them.
                4. A list of questions for your lawyer built from what you could not explain.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page lease glossary of at least twenty terms, with a practice-specific note against each, is written and shared with partners."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a plain-language guide to commercial leases from a property body in your country"
                - "Write each key term and its practice impact in one sentence"
                - "Read a sample lease with the glossary open and mark unclear clauses"
                - "Ask the agent to draft a question list for your lawyer from the marked clauses"
            - name: Heads of terms for a practice lease
              description: |-
                ## Purpose
                Heads of terms set rent, length, breaks, rent-free period, repair duties and permitted use before lawyers draft anything, and changing them later is hard and costly. Negotiating them with your agent against your budget and survey findings secures the commercial deal while you still hold the choice to walk away.

                ## Milestones
                1. Target and walk-away positions written for rent, term, break, rent-free period and landlord contribution.
                2. Permitted use worded to cover your profession and likely added services.
                3. A tenant break option and an assignment route that would work on a sale of the practice.
                4. Signed heads of terms marked subject to contract and any consents needed.

                ## Notes
                A rent-free period or landlord contribution is often traded against lease length. Know which you value more before the first call.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Heads of terms marked subject to contract are agreed, with each term within the walk-away positions the owners set in advance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write target and walk-away positions for each commercial term"
                - "Brief your agent with the survey findings and budget ceiling"
                - "Check the permitted use wording covers services you may add later"
                - "Sign heads of terms only once marked subject to contract"
            - name: Lease review with your property lawyer
              description: |-
                ## Purpose
                The draft lease is where the heads of terms become binding obligations, and clauses on repair, service charges, personal guarantees and assignment often arrive harsher than agreed. Working through the draft with your lawyer clause by clause, against a list of what matters to a practice, makes sure the signed lease is the deal you negotiated.

                ## Milestones
                1. The draft lease compared with the heads of terms, with every difference listed.
                2. Repair duty limited by the schedule of condition and service charge capped or itemised.
                3. Personal guarantees, rent deposit and assignment conditions agreed at a level the owners accept.
                4. A signed lease with all critical dates copied into the practice's records.

                ## Notes
                Ask your lawyer to explain in writing any clause they would not sign themselves. Lease terms are a legal matter for them to advise on.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed lease that matches the agreed heads of terms is signed, with a lawyer's report on the main obligations filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Send your lawyer the heads of terms, survey and schedule of condition"
                - "List every clause where the draft differs from the agreed terms"
                - "Agree the guarantee and deposit position with all partners"
                - "Ask your lawyer for a short written report on the signed lease"
            - name: Landlord licence for alterations
              description: |-
                ## Purpose
                Partition walls, new sinks, extra sockets and signage usually need the landlord's written consent, and work started without it can breach the lease or have to be ripped out at the end. A licence for alterations, agreed early, records exactly what you may build and what you must remove when you leave.

                ## Milestones
                1. Outline drawings and a scope of works sent to the landlord.
                2. Landlord conditions on contractors, working hours and insurance understood.
                3. A signed licence stating which alterations must be removed at lease end.
                4. Landlord sign-off on the final drawings before work starts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed licence for alterations covering every planned change, with reinstatement duties stated, is on file before works begin."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the landlord the outline drawings and a written scope of works"
                - "Ask which alterations they will require removed at lease end"
                - "Have your lawyer check the licence wording before signing"
                - "File the signed licence with the lease"
            - name: Reading architectural drawings and floor plans
              description: |-
                ## Purpose
                Owners often approve a layout from a pretty 3D image and only find the narrow corridor or the door that swings into a couch once walls go up. Learning to read scale, door swings, sections and services drawings lets you catch those problems on paper, where they cost nothing to change.

                ## Milestones
                1. Plan, section, elevation and reflected ceiling drawings recognised and explained in your notes.
                2. A scale rule used to measure three rooms and a corridor on a real plan.
                3. Symbols for doors, sinks, sockets, data points and lights identified.
                4. One marked-up plan returned to your designer with at least five questions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have measured rooms on a scaled plan and returned a marked-up drawing to the designer with written questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Buy a scale rule and ask your designer for a key to their drawing symbols"
                - "Measure each room and corridor width on the draft plan"
                - "Walk the plan as a patient or client from entrance to exit"
                - "Mark up the plan and send your questions to the designer"
            - name: Room layout and patient or client flow plan
              description: |-
                ## Purpose
                Layout decides how a practice feels: whether clients pass the staff room, whether confidential calls are overheard at reception and whether a clinician walks forty metres between rooms each hour. Planning the flow of people, records and clean and used equipment before walls are fixed gives you a layout that works on a busy Monday.

                ## Milestones
                1. Routes for clients, staff, deliveries and waste drawn on the plan.
                2. Public, semi-private and private zones marked, with confidential areas away from the waiting room.
                3. Clinical or working rooms grouped to cut walking distance.
                4. A final layout signed off by the owners and the lead of each team.

                ## Notes
                Ask a receptionist and a junior professional to walk the plan. They see the pinch points owners miss.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off layout with marked zones and flow routes for clients, staff and supplies is issued to the designer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw the routes clients, staff and supplies take on the draft plan"
                - "Mark public, semi-private and private zones in different colours"
                - "Ask a receptionist and a junior professional to walk the plan with you"
                - "Sign off the revised layout with all owners"
            - name: Accessibility audit and step-free access plan
              description: |-
                ## Purpose
                Disability and equality laws in many countries require a practice to make reasonable adjustments, and a client who cannot get through the front door or use the toilet will go elsewhere. Auditing the route from car park to consulting room and building the fixes into the fit-out costs far less than retrofitting after a complaint.

                ## Milestones
                1. An access audit covering parking, entrance, doors, corridors, counters, toilets and signage.
                2. Step-free access to every client-facing room, or a recorded alternative where it is not possible.
                3. An accessible toilet, a lowered section of reception counter and a hearing loop specified.
                4. The access plan and any limits stated on the practice website.

                ## Notes
                Check your country's accessibility standard for door widths and ramp gradients. An access consultant can audit in a morning.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An access audit is complete and every client-facing room has step-free access or a documented alternative built into the fit-out."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find your country's accessibility standard for public buildings"
                - "Walk the route from car park to consulting room with a tape measure"
                - "List each barrier with a fix and add it to the fit-out scope"
                - "Re-walk the access route with a wheelchair user or access adviser @recurring(yearly)"
            - name: Acoustic privacy for consulting and meeting rooms
              description: |-
                ## Purpose
                Thin stud walls and gaps above suspended ceilings let conversations carry, and a client who overhears another's diagnosis or divorce will never trust the practice's confidentiality again. Specifying sound-rated walls, sealed doors and background sound in the right places protects privacy that rules on confidentiality assume you already have.

                ## Milestones
                1. Rooms where confidential conversations happen listed and marked on the plan.
                2. Wall build-ups taken to the structural ceiling, with an acoustic rating agreed with the designer.
                3. Solid-core doors with seals and no transfer grilles specified for those rooms.
                4. A speech test done after completion, with any leaks fixed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every confidential room has a specified acoustic rating and passes a post-completion speech test from the adjoining room."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every room used for confidential conversations on the plan"
                - "Ask the designer for wall and door specifications with acoustic ratings"
                - "Check that walls run to the structural ceiling, not just the tiles"
                - "Test speech privacy from each neighbouring room after handover"
            - name: Reception, waiting area and front desk design
              description: |-
                ## Purpose
                Reception is where clients form their view of the practice and where most confidentiality slips happen, from screens visible over the counter to phone calls taken in front of a full waiting room. Designing the desk, seating and sightlines around how the front team really works makes the first two minutes of every visit calmer.

                ## Milestones
                1. Peak waiting numbers from the diary used to set seat count and spacing.
                2. A desk design with screens out of client view and a separate spot for private conversations.
                3. Sightlines from the desk to the entrance and waiting area confirmed on the plan.
                4. Seating, lighting and finishes chosen for cleaning and durability.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reception design with seat count from diary data, hidden screens and a private conversation point is approved by the front-desk lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count peak waiting numbers over two weeks from the diary"
                - "Sketch the desk with the front-desk lead, marking screens and phones"
                - "Choose seating with arms and wipe-clean finishes"
                - "Confirm sightlines from desk to door on the final plan"
            - name: Data cabling, comms room and connectivity specification
              description: |-
                ## Purpose
                Practice software, imaging, phones, card terminals and door access all depend on cabling that is cheap to install before ceilings close and expensive afterwards. A specification for data points, a ventilated comms cupboard and two internet connections avoids extension leads across floors and a practice that stops when one line fails.

                ## Milestones
                1. Data and power points listed for every desk, clinical device, printer, screen and access reader.
                2. A lockable, ventilated comms cupboard with its own power circuit on the plan.
                3. Primary and backup internet connections ordered with lead times confirmed.
                4. A labelled cabling schedule and test certificate received at handover.

                ## Notes
                Internet lines can take weeks to install. Order them the day the lease is signed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cabling schedule with every point labelled and tested, plus two live internet connections, is in place before move-in."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the devices in each room that need data or power"
                - "Ask your IT provider to specify the comms cupboard and network kit"
                - "Order the primary and backup internet lines and note lead times"
                - "Request the labelled cabling schedule and test results at handover"
            - name: Ventilation, cooling and water services for clinical rooms
              description: |-
                ## Purpose
                Treatment rooms, labs and kitchens put demands on air and water that an ordinary office does not, from air change rates and temperature control to hand-wash basins, hot water and drainage falls. Agreeing these services with a building services engineer early stops a fit-out stalling when the plumber finds the drain runs the wrong way.

                ## Milestones
                1. Air change, temperature and humidity targets for each room type taken from the regulator checklist and guidance.
                2. Sink, basin and drainage positions confirmed against existing drain routes.
                3. Cooling and ventilation plant sized and its noise and outdoor unit position agreed with the landlord.
                4. Commissioning records for ventilation and water systems received at handover.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A services design meeting the room targets is issued, and commissioning records for ventilation and water are filed at handover."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the air, temperature and water needs for each room type"
                - "Brief a building services engineer with the layout and survey"
                - "Check basin positions against the existing drainage drawings"
                - "Collect commissioning records for ventilation and water at handover"
            - name: Fit-out cost plan with a contingency
              description: |-
                ## Purpose
                Fit-outs in existing buildings almost always uncover something, from asbestos in a ceiling to an electrical board that cannot take the load. A cost plan built line by line from the drawings, with a 10 to 15 percent contingency held by the owners, gives you a figure to fund and a way to see overspend early.

                ## Milestones
                1. A cost plan by element: strip-out, partitions, services, finishes, joinery, signage, IT, fees and permits.
                2. A contingency of 10 to 15 percent held as a separate line.
                3. Funding confirmed for the total including contingency and value added or sales tax.
                4. A change control rule agreed: who approves any variation and up to what amount.

                ## Notes
                Keep furniture and loose equipment in a separate budget so they are not squeezed when the build runs over.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An itemised fit-out cost plan with a separate contingency and a written change approval limit is funded and agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a quantity surveyor or the designer for an elemental cost estimate"
                - "Add a separate contingency line of 10 to 15 percent"
                - "Confirm the funding covers the total including tax"
                - "Write the change approval limit into the owners' decision rules"
            - name: Building code occupancy rules for practice premises
              description: |-
                ## Purpose
                Building and fire codes treat healthcare, offices and mixed uses differently, with rules on exits, corridor widths, fire separation and toilets that drive your layout and your permit. Knowing the basics of how your building is classified lets you follow the designer's reasoning and spot a requirement before a building inspector does.

                ## Milestones
                1. The occupancy class your building and use fall under identified with your designer.
                2. Rules on exits, travel distances, fire separation and toilet numbers summarised for your size of practice.
                3. The parts of your plan driven by code, not preference, marked on a copy.
                4. Questions on any grey areas put to the building control officer or inspector.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the code rules that apply to your premises, checked by your designer, is filed with the drawings."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your designer which occupancy class applies and why"
                - "Read the code sections on exits, fire separation and toilets"
                - "Summarise the rules that shape your plan on one page"
                - "List grey areas to raise with the building inspector"
            - name: Building permit and change-of-use applications
              description: |-
                ## Purpose
                Fit-out works usually need a building permit or approval, and a change of use or new signage may need separate consent, each with its own fees and waiting times. Mapping every application, who submits it and how long it takes stops the contractor standing idle while a form sits unsent.

                ## Milestones
                1. Every consent needed listed: change of use, building permit, fire approval, signage and any heritage consent.
                2. Each application assigned to an owner or adviser with a submission date.
                3. Fees paid and submissions acknowledged by the authority.
                4. Approvals received and filed before the relevant works start.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every required permit and consent has been applied for, approved and filed before the works it covers begin."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every permit and consent with your designer and lawyer"
                - "Assign each application to a named person with a submission date"
                - "Chase any application without an acknowledgement after two weeks"
                - "File each approval and its conditions with the project records"
            - name: Fit-out contractor tender and appointment
              description: |-
                ## Purpose
                Three quotes on loose drawings produce three prices for three different jobs, and the cheapest often recovers its margin through variations. Tendering on a full scope, with the same drawings, programme and contract terms for each bidder, gives prices you can compare and a contractor bound to deliver what you priced.

                ## Milestones
                1. A tender pack with drawings, specification, programme and the chosen contract form.
                2. Three to five contractors with practice or healthcare fit-out experience invited.
                3. Bids compared line by line, with exclusions and assumptions listed.
                4. A signed contract with a fixed price, programme, retention and defects period.

                ## Notes
                Ask each bidder for two references from practices they fitted out in the last three years, and call them.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A contractor is appointed on a signed contract after comparing at least three bids on the same tender pack."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Assemble the tender pack with your designer"
                - "Invite at least three contractors with practice fit-out references"
                - "Compare bids line by line and list every exclusion"
                - "Call two references for the preferred contractor before signing"
            - name: Fit-out site meetings and progress tracking
              description: |-
                ## Purpose
                Most fit-out overruns grow quietly from small decisions left unanswered for a week. A short weekly site meeting with the contractor and designer, with actions, variations and the programme reviewed each time, keeps the owners deciding on time and the cost plan current.

                ## Milestones
                1. A weekly meeting slot agreed with the contractor and designer.
                2. An action log, variation register and programme updated at each meeting.
                3. Every variation approved in writing within the change approval limit.
                4. A final account agreed within the budget plus contingency.

                ## Notes
                Start from the **Operational checklist** template for the meeting agenda. Never approve a variation verbally on site.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly site meeting with written actions and an up-to-date variation register runs from start of works to practical completion."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book a recurring weekly site meeting with the contractor and designer"
                - "Set up an action log and variation register shared with both"
                - "Review actions, variations and programme at the site meeting @recurring(weekly:tue)"
                - "Compare committed spend with the cost plan after each meeting"
            - name: Fire safety systems and means of escape sign-off
              description: |-
                ## Purpose
                On any given day a practice may hold clients who move slowly, are sedated or do not know the building, which makes a working alarm, clear exits and a tested evacuation plan essential. Getting the fire strategy, alarm, emergency lighting and extinguishers designed, installed and signed off before opening is a condition of most occupancy approvals and insurance.

                ## Milestones
                1. A fire risk assessment for the new layout carried out by a competent person.
                2. Alarm, emergency lighting, signage and extinguishers installed with commissioning certificates.
                3. Escape routes and fire doors checked against the approved drawings.
                4. An evacuation plan written, including clients who need help to leave.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fire risk assessment, commissioning certificates and an evacuation plan for the premises are filed before opening day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a competent fire risk assessor for the new layout"
                - "Collect commissioning certificates for alarm and emergency lighting"
                - "Write the evacuation plan including help for clients with limited mobility"
                - "Review the fire risk assessment with the assessor @recurring(yearly)"
            - name: Security, access control and alarm system
              description: |-
                ## Purpose
                Practices hold records, drugs, cash, laptops and equipment worth stealing, and staff working late need to feel safe. An intruder alarm, controlled access to private areas and a simple key and fob register protect people and property and are often required by insurers and regulators for record and drug storage.

                ## Milestones
                1. Zones defined: public, staff only and restricted rooms such as records, drugs or server.
                2. Intruder alarm and access control installed with a monitoring contract.
                3. A register of who holds which keys, codes and fobs.
                4. A leaver process that removes access the same day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An alarm with monitoring, access control on restricted rooms and a current key and fob register are in place before opening."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark public, staff and restricted zones on the plan"
                - "Get two quotes for alarm, access control and monitoring"
                - "Set up a register of keys, codes and fobs by person"
                - "Check the access log and remove fobs for leavers @recurring(monthly:15)"
            - name: Signage and wayfinding inside and out
              description: |-
                ## Purpose
                Clients who cannot find the entrance or the right room arrive late and anxious, and signage on a building often needs landlord and planning consent and must fit your profession's rules on how you describe services. A signage plan covering the street, entrance, reception and room doors solves both at once.

                ## Milestones
                1. External sign wording checked against your profession's advertising rules.
                2. Landlord and planning consent for external signs obtained.
                3. Internal wayfinding with room numbers, toilets and exits, readable for people with low vision.
                4. All signs installed before the opening week.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "External and internal signs are consented, installed and checked against professional advertising rules before opening."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the external sign wording and check it against your profession's rules"
                - "Ask the landlord and planning authority what consent signs need"
                - "Plan internal signs for rooms, toilets and exits with large lettering"
                - "Walk the building as a first-time visitor once signs are up"
            - name: Snagging inspection and practical completion
              description: |-
                ## Purpose
                Practical completion is the point when the building becomes yours to insure and the contractor's incentive to fix small defects drops sharply. A room-by-room snagging inspection with the designer, before signing completion, captures every chipped door, missing socket and unlabelled valve while the contractor is still on site.

                ## Milestones
                1. A room-by-room snag list with photographs, agreed with the contractor.
                2. Safety and services items closed before completion is certified.
                3. Operation and maintenance manuals, warranties and as-built drawings received.
                4. Completion certified with the defects period and retention release date noted.

                ## Notes
                Start from the **Remediation plan** template for the snag list.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed completion certificate, a closed safety snag list and a full set of manuals and as-built drawings are filed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the snagging walk with the designer and contractor"
                - "Photograph and number every snag room by room"
                - "Refuse completion until safety and services snags are closed"
                - "Collect manuals, warranties and as-built drawings in one folder"
            - name: Regulator premises inspection before opening
              description: |-
                ## Purpose
                Many regulators inspect or register new premises before a practice can see clients there, and a failed visit can push opening back by weeks while rent runs. Walking the building against the room standards checklist a fortnight before, with evidence ready, turns the inspection into a confirmation.

                ## Milestones
                1. A self-inspection against the room standards checklist two weeks before the visit.
                2. Evidence pack ready: drawings, certificates, policies and photographs.
                3. Any gaps fixed or a dated plan for each.
                4. Registration or approval of the new premises received in writing.
              priority: high
              deadlineOffsetDays: 200
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The regulator has approved or registered the new premises in writing before the first client is seen there."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm with the regulator whether a pre-opening visit or registration is needed"
                - "Walk every room against the standards checklist and note gaps"
                - "Assemble drawings, certificates and policies into an evidence pack"
                - "File the regulator's written approval with the premises records"
            - name: Move-in and opening week
              description: |-
                ## Purpose
                Moving a working practice means records, equipment, phones and the diary have to arrive and work on the same weekend, and clients booked for Monday will not wait. A run sheet for the move and a lighter diary for the first week give the team room to fix what only shows up once people are in the building.

                ## Milestones
                1. A move run sheet with every task, owner and time, from IT cutover to records transfer.
                2. Phones, internet, practice software and card terminals tested before the first client.
                3. The diary reduced for the first three to five days.
                4. Clients, referrers, suppliers and the regulator notified of the new address.

                ## Notes
                Keep confidential records under staff control during the move. Do not leave boxes in corridors or vans overnight.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The practice sees its first clients at the new premises with all systems tested and address changes sent to every stakeholder."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the agent to draft a move run sheet from the room list and suppliers"
                - "Book the removals firm and the IT cutover for the same weekend"
                - "Reduce the diary for the first week in the new premises"
                - "Send the new address to clients, referrers, suppliers and the regulator"
            - name: Lease critical dates register
              description: |-
                ## Purpose
                Missing a break notice by a day can lock a practice into five more years, and a rent review left unanswered can be settled on the landlord's figure. A register of every date the lease and licences set, checked monthly, means notices are sent on time and reviews are prepared for, not discovered.

                ## Milestones
                1. Every date from the lease and licences listed: rent reviews, breaks, expiry, insurance and repair duties.
                2. Each date paired with the action needed and a reminder six to twelve months ahead.
                3. One owner named as responsible for the register.
                4. The register reconciled with your lawyer's report on the lease.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of all lease dates with reminders and a named owner is checked every month, with no notice date missed."
                cadence: rolling
              tasks:
                - "Copy every date from the lease and licences into the register"
                - "Set a reminder six to twelve months before each break and review"
                - "Name the owner responsible for the register in the partners' minutes"
                - "Check the register for anything due in the next 90 days @recurring(monthly:3)"
            - name: Planned maintenance calendar for the building
              description: |-
                ## Purpose
                Air conditioning that fails in the hottest week or a water heater that stops on a clinic day costs more in cancelled appointments than the service visit ever would. A calendar of every system's service interval, with the contractor named, turns maintenance from emergency calls into booked visits.

                ## Milestones
                1. An asset list of every building system with its service interval and contractor.
                2. Service contracts in place for cooling, ventilation, water heating, alarms and lifts where present.
                3. A calendar of visits for the year ahead.
                4. Service reports filed against each asset.

                ## Notes
                Start from the **Operational checklist** template. Check the lease to see which systems the landlord maintains.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every building system has a named contractor, a booked service date for the year and a filed report from its last visit."
                cadence: rolling
              tasks:
                - "List every building system with its service interval from the manuals"
                - "Check the lease for which systems the landlord must maintain"
                - "Confirm this month's service visits with each contractor @recurring(monthly:12)"
                - "Have the cooling and ventilation filters serviced @recurring(quarterly)"
            - name: Monthly premises walk-round and defects log
              description: |-
                ## Purpose
                Small faults pile up unnoticed in a busy practice: a flickering light in a corridor, a loose handrail, a stained ceiling tile hinting at a leak. A monthly walk-round with a defects log catches them early, shows whether the landlord or the practice must fix each one, and gives evidence if a repair dispute arises.

                ## Milestones
                1. A walk-round route and checklist covering every room, exit and external area.
                2. A defects log recording date, location, photo, who must fix it and when it was fixed.
                3. Landlord repairs reported in writing as the lease requires.
                4. No safety defect left open longer than an agreed number of days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A walk-round is done every month and each defect is logged with a photo, a responsible party and a closure date."
                cadence: rolling
              tasks:
                - "Write a walk-round checklist covering every room and exit"
                - "Set up a defects log with columns for photo, responsibility and closure"
                - "Walk the premises with the checklist and log defects @recurring(monthly:20)"
                - "Report landlord repairs by email and note the date sent"
            - name: Statutory building safety certificates log
              description: |-
                ## Purpose
                Electrical installation tests, portable appliance checks, gas safety, water hygiene, lift inspections and fire equipment servicing each come with a certificate and an expiry date that insurers and inspectors ask to see. One log of every certificate and a weekly fire alarm test keep the evidence current without a scramble before an inspection.

                ## Milestones
                1. Every safety certificate the building needs listed, with its expiry date and the contractor who issues it.
                2. Current certificates scanned and filed against each entry.
                3. A weekly fire alarm test recorded with the call point used.
                4. Renewals booked at least a month before expiry.

                ## Notes
                Start from the **Compliance control** template. Which tests apply, and how often, depends on your country and the building; confirm with your fire and electrical contractors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log with every safety certificate current and a weekly fire alarm test entry for each of the last four weeks is ready for inspection."
                cadence: rolling
              tasks:
                - "List every safety test the building needs with its interval"
                - "Scan and file each current certificate against its entry"
                - "Test the fire alarm from a different call point and record it @recurring(weekly:mon)"
                - "Book any certificate renewal due in the next two months @recurring(monthly:8)"
            - name: Service charge, rent and utilities review
              description: |-
                ## Purpose
                Service charges in multi-tenant buildings often include items the lease does not allow, and utility tariffs drift upward unless someone looks. A quarterly review of rent, service charge and utility bills against the lease and last year catches overcharges and gives you grounds to query the landlord's year-end account.

                ## Milestones
                1. Each quarter's rent, service charge and utility bills checked against the lease and budget.
                2. Service charge items tested against what the lease permits.
                3. Year-end service charge reconciliation requested and reviewed.
                4. Queries sent in writing within the lease's time limit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Rent, service charge and utility costs are reviewed every quarter against the lease and budget, with any query sent in writing."
                cadence: rolling
              tasks:
                - "Note the service charge items the lease allows the landlord to recover"
                - "Set up a sheet comparing each bill with the budget and last year"
                - "Review rent, service charge and utility bills against the lease @recurring(quarterly)"
                - "Request the landlord's year-end service charge reconciliation"
            - name: Room utilisation review
              description: |-
                ## Purpose
                A consulting room that sits empty two afternoons a week is rent paid for nothing, while professionals elsewhere in the practice queue for space. Measuring how each room is used from the diary shows whether to add sessions, share rooms, sublet or give space back at the next break.

                ## Milestones
                1. Booked hours per room per week pulled from the diary for a month.
                2. Utilisation calculated against the opening hours for each room.
                3. Rooms below a set threshold flagged with a reason.
                4. A change agreed: new sessions, room sharing, a sublet or a smaller footprint at renewal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Utilisation for every room is calculated each quarter and any room below the agreed threshold has a recorded action."
                cadence: rolling
              tasks:
                - "Export booked hours per room for the last month from the diary"
                - "Calculate each room's utilisation against opening hours"
                - "Agree a utilisation threshold with your partners"
                - "Rerun the room utilisation figures and act on low rooms @recurring(quarterly)"
            - name: Premises and contents insurance renewal
              description: |-
                ## Purpose
                Leases usually say who insures the building, but the practice still needs cover for its fit-out, equipment, records and the income lost if the premises are closed by fire or flood. Reviewing sums insured and business interruption cover every year, after a fit-out or new equipment, avoids finding out you were underinsured after a claim.

                ## Milestones
                1. The lease's insurance obligations confirmed: who insures the building and what the practice must insure.
                2. Sums insured for fit-out, equipment and contents updated to replacement cost.
                3. Business interruption cover set at a period long enough to fit out elsewhere.
                4. The renewed policy schedule filed and the landlord's interest noted where required.

                ## Notes
                This is property and interruption cover. Professional indemnity is a separate policy with its own renewal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The premises, contents and business interruption policy is renewed each year with sums insured updated to current replacement cost."
                cadence: cyclic
              tasks:
                - "Check the lease for who insures the building and what you must cover"
                - "List fit-out, equipment and contents at replacement cost"
                - "Ask your broker how long a fit-out elsewhere would take for interruption cover"
                - "Review sums insured and renew the premises policy @recurring(yearly)"
            - name: Storm and hurricane readiness for the premises
              description: |-
                ## Purpose
                In hurricane and flood zones a practice can lose weeks of income to water in the records room or a roof that lifts in a storm. Preparing shutters, backup power, raised storage and a closure routine before each season protects the building, the equipment and the records, and lets you reopen sooner than practices that did not prepare.

                ## Milestones
                1. The building's exposure to wind, flood and power loss assessed with the landlord.
                2. Shutters or board-up materials, raised storage and a backup power option in place.
                3. A pre-storm closure checklist covering records, equipment, fridges and IT.
                4. Insurance and landlord contacts and a post-storm inspection plan written down.

                ## Notes
                Even outside storm zones, the same routine works for flood, heat waves and long power cuts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-storm closure checklist, backup power and protected storage are in place and reviewed before each storm season."
                cadence: cyclic
              tasks:
                - "Ask the landlord what storm protection the building has and who fits it"
                - "Write a pre-storm closure checklist for records, equipment and IT"
                - "Review the storm checklist and supplies before the season starts @recurring(yearly)"
                - "Run the backup generator under load and log the result @recurring(monthly:27)"
            - name: Premises risk register
              description: |-
                ## Purpose
                The biggest premises risks for a practice are rarely the obvious ones: a landlord in financial trouble, a lease expiring in the year you planned to sell, a single water main feeding every sink. A short register of these risks with an owner and a response each, reviewed quarterly, keeps them visible at partner meetings.

                ## Milestones
                1. Ten to fifteen premises risks listed, from lease and landlord to building services and access.
                2. Each risk scored for likelihood and impact.
                3. An owner and a response recorded for every high risk.
                4. The register reviewed at partner meetings each quarter.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scored premises risk register with an owner for each high risk is reviewed at a partner meeting every quarter."
                cadence: rolling
              tasks:
                - "List the premises risks that would stop the practice opening tomorrow"
                - "Score each risk and name an owner for the high ones"
                - "Add the register to the partner meeting agenda"
                - "Review and rescore the premises risk register @recurring(quarterly)"
            - name: Home-based or shared-space practice premises
              description: |-
                ## Purpose
                Sole practitioners, therapists and some consultants start from a home office or rented rooms in a shared centre, which keeps costs low but raises questions about permitted use, insurance, client safety and confidentiality. Setting the rules for a home or shared space properly lets you practise professionally without a full lease.

                ## Milestones
                1. Permitted use, mortgage or tenancy terms and local rules for seeing clients at home checked.
                2. Home or room insurance updated for business use and client visits.
                3. A separate entrance or waiting arrangement, a lockable records store and a private room confirmed.
                4. Rules agreed with household members or other tenants on noise, access and privacy.

                ## Notes
                Your regulator may set rules for practising from home. Check them before the first client visit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Permitted use, insurance and regulator rules are confirmed in writing and a private room with locked records storage is ready."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your mortgage, tenancy or local rules for seeing clients at home"
                - "Ask your insurer to cover business use and client visits"
                - "Fit a lock to the records store and test privacy in the room"
                - "Agree household or co-tenant rules for client hours"
            - name: Sharing premises or subletting rooms to another practice
              description: |-
                ## Purpose
                Spare rooms can be let to another professional, or your practice can rent sessions in someone else's building, but the lease may forbid it and a casual handshake leaves confidentiality, insurance and rent unclear. A written room licence or sublease, with landlord consent where needed, turns the arrangement into income or capacity you can rely on.

                ## Milestones
                1. The lease checked for subletting or sharing rules and landlord consent obtained where needed.
                2. A written licence or sublease setting rooms, sessions, fee, notice and shared costs.
                3. Separate records storage and confidentiality rules agreed between the practices.
                4. Each practice's insurance confirmed to cover its own work and visitors.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed room licence or sublease, with landlord consent where required and agreed confidentiality rules, governs every shared room."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the lease's rules on subletting and sharing occupation"
                - "Ask your lawyer for a room licence or sublease draft"
                - "Agree separate records storage and confidentiality rules in writing"
                - "Invoice the room licence fee and shared costs @recurring(monthly:25)"
            - name: Lease assignment when buying or selling a practice
              description: |-
                ## Purpose
                A practice sale can stall for months because the lease cannot be assigned without landlord consent, has only two years left, or carries a personal guarantee the seller wants released. Checking the premises position early in a sale or purchase, and agreeing what the landlord needs, keeps the building from becoming the last obstacle to completion.

                ## Milestones
                1. The lease's assignment conditions, remaining term and guarantees summarised.
                2. Landlord requirements for consent, references and any new guarantee established.
                3. Any repair or dilapidations liability on assignment priced.
                4. A consent or new lease timetable agreed and built into the sale timetable.

                ## Notes
                Valuers and buyers discount a practice with a short or unassignable lease. Start this before the practice goes on the market or before you make an offer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The landlord's consent conditions and a premises timetable are agreed in writing before contracts for the practice sale or purchase are exchanged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your lawyer to summarise the assignment clause and remaining term"
                - "Ask the landlord what they need to consent to an assignment"
                - "Price any repair liability the buyer or seller would take on"
                - "Add the landlord consent steps to the sale or purchase timetable"
            - name: Expanding into extra rooms or the next unit
              description: |-
                ## Purpose
                When the diary is full and every room is booked, taking the unit next door or reconfiguring a storeroom can add capacity without the cost of moving. Testing the extra space against utilisation figures, the lease and the cost of works shows whether expansion pays back before the next break or expiry.

                ## Milestones
                1. Utilisation data showing sustained demand for more rooms.
                2. Options costed: reconfigure, take adjoining space or add a second floor.
                3. Lease terms for the extra space aligned with the main lease end date.
                4. A decision recorded with the payback period and the funding source.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written expansion decision comparing at least two options, with payback inside the lease term, is agreed by the owners."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull six months of room utilisation and waiting list data"
                - "Ask the landlord about adjoining or upstairs space and its terms"
                - "Get a designer's rough cost for each option"
                - "Record the expansion decision and its payback in the partners' minutes"
            - name: Lease renewal and rent review negotiation
              description: |-
                ## Purpose
                Renewals and rent reviews are where long-term occupancy cost is set, and landlords rely on tenants who start late and fear moving. Starting twelve to eighteen months ahead with market evidence, a credible relocation option and your lawyer's view of your renewal rights puts the practice in a stronger position.

                ## Milestones
                1. Renewal or review date, notice rules and any statutory renewal rights confirmed with your lawyer.
                2. Comparable rents gathered from your agent.
                3. A relocation option costed so you know your walk-away point.
                4. New terms agreed and documented, with the critical dates register updated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Renewal or review terms are agreed in writing at or below the walk-away rent set from market evidence, with the dates register updated."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your lawyer to confirm notice dates and renewal rights under the lease"
                - "Ask your agent for comparable rents for similar premises nearby"
                - "Cost a relocation to set your walk-away rent"
                - "Update the critical dates register with the new terms"
            - name: Relocating the practice to new premises
              description: |-
                ## Purpose
                A practice outgrows its building, loses its lease or finds its clients have moved, and a relocation has to be run without losing the list. Treating the move as a planned project, with a new site chosen against the catchment, overlapping lease dates and a client communication plan, protects revenue through the change.

                ## Milestones
                1. Reasons for moving and the latest date to vacate written down.
                2. A new site chosen against the catchment map and space brief.
                3. Lease end and new lease start dates overlapping by enough time for the fit-out.
                4. Clients, referrers and the regulator told in advance, with the move completed.

                ## Notes
                Plan the old premises exit and dilapidations at the same time; they compete for the same cash.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The practice reopens at the new site with an overlap between leases and client numbers in the first quarter within 10 percent of the previous one."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down why the practice is moving and the latest vacate date"
                - "Refresh the catchment map and space brief for the new search"
                - "Plan an overlap between the old lease end and the new fit-out"
                - "Draft the client and referrer announcement for three months before the move"
            - name: Dilapidations and handing back the premises
              description: |-
                ## Purpose
                At lease end the landlord can claim for repairs and for removing alterations, and the claim often lands after you have spent the cash on a new building. Getting a surveyor's view of likely dilapidations a year or two ahead, and comparing doing the work against paying a settlement, keeps the exit bill under control.

                ## Milestones
                1. The repair covenant, licence for alterations and schedule of condition read together.
                2. A surveyor's estimate of likely dilapidations eighteen to twenty-four months before lease end.
                3. A choice recorded between doing the works and negotiating a cash settlement.
                4. Keys returned with a signed record of the premises' condition.

                ## Notes
                Your lawyer and surveyor advise on what the landlord can actually claim; do not accept a first schedule without review.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A surveyor's dilapidations estimate and a recorded strategy exist at least eighteen months before lease end, and the exit is signed off."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Gather the lease, licence for alterations and schedule of condition"
                - "Instruct a surveyor for a dilapidations estimate"
                - "Compare doing the works with a cash settlement"
                - "Photograph the premises on the day you return the keys"
            - name: Imaging room shielding and radiation protection survey
              description: |-
                ## Purpose
                Dental, medical, veterinary and chiropractic practices that use X-ray equipment need rooms designed so staff, clients and neighbours are protected, and many countries require a radiation protection adviser's input and registration before use. Building shielding and warning systems into the fit-out avoids lead-lining a finished wall.

                ## Milestones
                1. A radiation protection adviser appointed and the regulator's notification or registration rules confirmed.
                2. Shielding specified for walls, doors and floors from the equipment and room layout.
                3. Warning lights, signage and controlled area rules in place.
                4. A critical examination or acceptance test completed and its report filed before first use.

                ## Notes
                This is specialist work. Follow the adviser and your radiation regulator; the fit-out contractor installs to their specification.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A radiation protection adviser's acceptance report is filed and the imaging room is registered or notified before the first exposure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Appoint a radiation protection adviser before the layout is fixed"
                - "Check registration or notification rules with the radiation regulator"
                - "Give the adviser's shielding specification to the designer and contractor"
                - "Book the periodic radiation protection survey of the room @recurring(yearly)"
            - name: Decontamination room and clean utility layout
              description: |-
                ## Purpose
                Practices that reprocess instruments need a room where used items move one way, from dirty to clean, with separate sinks, a washer or steriliser and enough bench length to stop clean and used items meeting. Designing that layout and its services during the fit-out is far cheaper than reworking a cramped room once the regulator points it out.

                ## Milestones
                1. The regulator's guidance on decontamination room layout and services identified.
                2. A one-way dirty to clean flow drawn with separate zones and sinks.
                3. Power, water, drainage and ventilation for washers and sterilisers specified with the equipment supplier.
                4. The finished room checked against the guidance before first use.

                ## Notes
                This project covers the room. Running the decontamination process day to day belongs with your infection prevention routines.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The decontamination room is built to a one-way flow layout with services matching the equipment supplier's specification and checked before use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the regulator's guidance on decontamination room design"
                - "Draw the dirty to clean flow with the lead nurse or technician"
                - "Get the equipment supplier's services requirements for washers and sterilisers"
                - "Check the finished room against the guidance before first use"
            - name: Owning the practice building through a separate company
              description: |-
                ## Purpose
                Owners who buy their building often hold it outside the practice, in a property company or a personal holding, and rent it back, which can protect the asset and simplify a later sale of the practice. The structure carries tax, lending and partnership consequences, so the work is setting the questions out clearly and acting on professional advice.

                ## Milestones
                1. The ownership options and their effect on a future practice sale listed for discussion.
                2. Tax, legal and lending advice obtained from your accountant, lawyer and bank.
                3. A formal lease between the property owner and the practice at a documented rent.
                4. A yearly review of the rent and the arrangement with your accountant.

                ## Notes
                This is organisational, not tax or legal advice. Your accountant and lawyer decide the structure; partners who do not share in the building need a fair lease.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ownership decision based on professional advice and a formal lease between the owning entity and the practice are on file."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the questions on ownership structure for your accountant and lawyer"
                - "Book advice meetings with your accountant, lawyer and lender"
                - "Put a formal lease in place between the owning entity and the practice"
                - "Review the rent and ownership arrangement with your accountant @recurring(yearly)"
---

# Practice Premises and Fit-Out

This area is for the owner of a clinic, surgery, firm or studio who has to find, lease and fit out the rooms the practice works from, and then keep them working for the length of the lease. It runs from the foundations (a space brief, a budget, your regulator's room standards, the lease or buy question and a site search), through the lease, layout, building services and fit-out works, the dated moments of handover, inspection and opening week, the routines that keep a building safe and the lease under control, and finally the situations and specialist work: shared rooms, assignment on a sale, relocation, imaging rooms and owning the building separately.

What repeats is a monthly check of lease critical dates, a planned maintenance calendar, a monthly walk-round, weekly fire alarm tests and expiring safety certificates, quarterly service charge, utilisation and risk reviews, and yearly insurance, accessibility and storm readiness checks. The Vendor, Purchase decision, Operational checklist, Compliance control, Risk register and Remediation plan templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
