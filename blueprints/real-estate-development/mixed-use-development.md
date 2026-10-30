---
id: real-estate-development.mixed-use-development
name: Mixed-Use Development
description: "Mixed-use schemes that work as one building: a use mix backed by demand, separate cores and servicing, a clear ownership split, commercial units leased well and homes sold or held with confidence."
category: business
version: 1.0.0
tags: [real-estate-development, mixed-use-development, founder, small-business, ground-floor-retail, workspace, service-charges, active-frontage]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - vendor
    - meeting-notes
    - purchase-decision
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mixed-Use Development
          description: "Developing schemes with homes, shops and workspace together: layouts, separate cores and services, leasing the commercial units and selling or holding the homes."
          projects:
            - name: Use mix brief for a mixed-use site
              description: |-
                ## Purpose
                Every later drawing, appraisal and lender conversation depends on one early answer: how much of the building is homes, how much is shops and how much is workspace, and why. A one-page brief that states the floor area for each use, the reason for it and what would make you change it stops the architect designing around a guess. Write it before the first massing study.

                ## Milestones
                1. Gross and net floor area set out for each use, with the residential unit count and commercial unit sizes.
                2. A sentence for each use explaining why it is in the scheme: policy, demand, value or placemaking.
                3. The minimum and maximum commercial floor area you would accept recorded.
                4. The brief shared with the architect and agreed as the design starting point.

                ## Notes
                Many first schemes include commercial space only because planning asks for it. That is a valid reason, but say so, because it changes how much you should spend on that space.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off one-page use mix brief with floor areas, reasons and limits for each use, issued to the architect."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the uses you are considering and the floor area each might take"
                - "Write one sentence on why each use belongs in this scheme"
                - "Set the smallest and largest commercial area you would accept"
                - "Send the brief to the architect and agree it as the starting point"
            - name: Demand evidence for ground-floor commercial space
              description: |-
                ## Purpose
                Empty shop units under new flats are the most common sight in failed mixed-use schemes, and they drag down the value of the homes above. Before committing to a commercial ground floor, gather real evidence: vacancy on the nearest parades, recent lettings and rents, footfall, and named businesses that would take space. Two or three letters of interest are worth more than any agent's general comment.

                ## Milestones
                1. Vacancy on the three nearest shopping streets counted and recorded.
                2. Recent commercial lettings within walking distance listed with size, rent and incentives.
                3. At least three local commercial agents asked for their view of demand by unit size.
                4. A short list of named businesses that have expressed interest, with any letters of interest filed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A demand note covering local vacancy, at least five comparable lettings, three agent views and any named interested occupiers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Walk the nearest parades and count empty and let units"
                - "Ask three commercial agents which unit sizes are letting and at what rent"
                - "List recent lettings nearby with size, rent and rent-free period"
                - "Approach local businesses that might want space and note their interest"
            - name: Commercial floorspace policy check
              description: |-
                ## Purpose
                Local plans often require a minimum amount of commercial space on town centre sites, protect existing shop frontages or demand active uses at street level, and those rules shape the scheme before design starts. Reading the policies that apply to the mixed-use elements, and asking the planning officer how they are applied in practice, tells you which commercial space is compulsory and which is a choice.

                ## Milestones
                1. The local plan policies on town centre uses, frontages and employment space for the site identified.
                2. Any requirement to replace existing commercial floorspace recorded with the figure.
                3. The planning officer's view on acceptable ground-floor uses noted from a call or meeting.
                4. A list of compulsory commercial elements and optional ones handed to the design team.

                ## Notes
                Your planning consultant should lead the full application. This project is only about how policy fixes the use mix.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note listing each planning policy that fixes commercial space on the site, with the officer's interpretation recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the local plan policies covering town centre and employment uses"
                - "Check whether the site has existing commercial space that must be replaced"
                - "Ask the planning officer which ground-floor uses they would support"
                - "Write the compulsory and optional commercial elements on one page"
            - name: Split appraisal by use
              description: |-
                ## Purpose
                One blended appraisal hides the truth that residential and commercial space are valued, financed and sold in completely different ways. Homes are valued on sales prices per unit, while shops and workspace are valued on rent, yield, void periods and incentives. Separating the two shows whether the commercial element adds value or quietly costs you money that the flats are paying for.

                ## Milestones
                1. Residential value built up from unit-by-unit pricing evidence.
                2. Commercial value built up from rent, yield, void period, rent-free and letting fees.
                3. Build cost split between uses, including a share of cores, structure and podium.
                4. Profit on cost shown for each use and for the scheme as a whole.

                ## Notes
                Ask your quantity surveyor how to share common costs such as the transfer structure. The split you choose decides which use looks profitable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An appraisal with separate value and cost lines for residential and commercial space, showing profit on cost for each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Separate the residential and commercial lines in the current appraisal"
                - "Add void, rent-free and letting fee assumptions to the commercial value"
                - "Ask the quantity surveyor to split shared structure and cores between uses"
                - "Compare profit on cost for each use and note which one carries the scheme"
            - name: Stacking and layout options for the uses
              description: |-
                ## Purpose
                Shops below flats is only one arrangement: workspace can sit on the first floor, uses can sit side by side in separate blocks, or the commercial space can wrap a corner while homes face the quiet street. Testing three arrangements on the same site, scored on value, buildability and how the uses will live together, avoids locking in the first sketch.

                ## Milestones
                1. Three layout options drawn at block level with floor areas for each use.
                2. Each option scored on value, structure, servicing and noise between uses.
                3. The transfer structure needed between commercial and residential grids noted for each.
                4. A preferred option chosen with the reasons written down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between at least three stacking options, each scored on the same four criteria."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the architect for three block-level stacking options"
                - "Score each option on value, structure, servicing and noise"
                - "Note where each option needs a transfer structure"
                - "Record the preferred option and why it won"
            - name: Separate cores and entrances strategy
              description: |-
                ## Purpose
                Residents expect a secure front door that is not shared with a gym or a takeaway, and commercial tenants want their own frontage, signage and out-of-hours access. Deciding early how many cores, entrances and lift shafts each use gets, and where they land on the ground floor, protects both the sales value of the homes and the lettability of the shops.

                ## Milestones
                1. The number of cores and entrances for each use fixed on a ground-floor plan.
                2. Residential entrances placed where they will not be blocked by deliveries or queues.
                3. Commercial units given their own entrances, with any shared back-of-house routes identified.
                4. The ground-floor area lost to cores and entrances measured and fed into the appraisal.

                ## Notes
                Every core takes frontage away from the shops. Tight sites often trade one residential core for a better commercial unit.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ground-floor plan showing each core and entrance by use, with the frontage and area they take recorded in the appraisal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark every residential and commercial entrance on the ground-floor plan"
                - "Check that no residential entrance shares a route with deliveries"
                - "Measure the frontage each core takes from the commercial units"
                - "Update the appraisal with the net commercial area that remains"
            - name: Servicing, deliveries and refuse plan
              description: |-
                ## Purpose
                Bins, deliveries and plant are where mixed-use buildings fall out with themselves: a restaurant's waste stored beside the residents' bike store, or a supermarket lorry blocking the residential entrance at seven in the morning. A written servicing plan that gives each use its own bin store, delivery times and collection route solves these on paper while they are still cheap to fix.

                ## Milestones
                1. Separate refuse stores sized for residential and commercial waste, shown on the plan.
                2. Delivery bays or loading arrangements agreed with the highways officer.
                3. Delivery and collection hours set for each commercial unit.
                4. The servicing plan written into the commercial lease heads of terms.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A servicing and refuse plan showing separate stores, delivery arrangements and agreed hours for every use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate weekly waste volumes for the homes and each commercial unit"
                - "Locate separate bin stores for residential and commercial waste"
                - "Ask the highways officer where deliveries can be made"
                - "Write delivery and collection hours into the commercial heads of terms"
            - name: Ownership and title structure for the building
              description: |-
                ## Purpose
                Any building holding homes and shops needs a decision on who owns what: whether flats are sold on long leases, whether the commercial units are kept in the freehold or let on separate leases, and who owns the common parts. Getting this structure agreed with your solicitor before marketing starts avoids rewriting every lease when a buyer's lender asks questions.

                ## Milestones
                1. A diagram showing the freehold, any head lease, the residential leases and the commercial leases.
                2. The owner of common parts, structure and roof agreed.
                3. Residents' statutory rights that could affect the commercial parts identified by your solicitor.
                4. The structure confirmed in writing before the first reservation or letting.

                ## Notes
                Rules on resident management rights and enfranchisement differ by country and can depend on the share of non-residential floor area. This is a question for your solicitor, not a guess.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A title and lease structure diagram agreed in writing with your solicitor before any unit is reserved or let."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch who will own the freehold, the homes and the commercial units"
                - "Ask your solicitor which resident rights could touch the commercial parts"
                - "Agree who owns and repairs the roof, structure and common areas"
                - "File the agreed structure diagram with the scheme documents"
            - name: Mixed-use risk register
              description: |-
                ## Purpose
                Mixed-use schemes carry risks a pure residential scheme never meets: unlet shops, a noisy tenant, conflicting fire strategies, buyers' lenders refusing flats above food uses, and a valuer marking down the commercial element. A risk register that names these specifically, with an owner and a response, gives you and your lender one place to see what could go wrong between the uses.

                ## Milestones
                1. At least twelve risks specific to the mix of uses listed, each with likelihood and impact.
                2. An owner and a response recorded for every risk.
                3. The register reviewed with the design team and lender.
                4. A monthly review habit in place, with closed risks kept for the record.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A live risk register of at least twelve mixed-use risks, each with owner and response, reviewed every month."
                cadence: rolling
              tasks:
                - "List the risks that come from combining homes and commercial space"
                - "Give each risk a likelihood, impact, owner and response"
                - "Walk the design team through the register at the next meeting"
                - "Review and update the mixed-use risk register @recurring(monthly:24)"
            - name: Commercial unit leasing pipeline
              description: |-
                ## Purpose
                Letting the ground floor is a sales process with long lead times: a café may take six months from first viewing to signed lease, and a regional operator longer. A pipeline that tracks every enquiry, viewing, offer and heads of terms by unit shows early whether the commercial space will be let by practical completion or sitting empty.

                ## Milestones
                1. Every commercial unit listed with size, quoting rent and target use.
                2. Each enquiry logged with source, stage and next step.
                3. Heads of terms agreed for at least one unit before practical completion.
                4. A conversion rate from viewing to offer calculated after the first three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A leasing pipeline updated weekly, showing every live enquiry by unit and stage, with no enquiry left without a next step."
                cadence: rolling
              tasks:
                - "Set up a tracker with a row per commercial unit and per enquiry"
                - "Update the stage and next step for every live enquiry @recurring(weekly:mon)"
                - "Ask the letting agents for a written enquiry report @recurring(monthly:9)"
                - "Chase any enquiry with no contact for three weeks"
            - name: Service charge budget split between uses
              description: |-
                ## Purpose
                Residents and commercial tenants share some costs, such as roof repairs, building insurance and the estate, while others belong to one use alone, such as the residential lift or a commercial loading bay. A service charge budget built in schedules, with a clear apportionment for each, is what lets buyers' solicitors and tenants' advisers accept the figures without months of argument.

                ## Milestones
                1. Costs grouped into schedules: whole building, residential only, commercial only and estate.
                2. An apportionment method chosen and written for each schedule.
                3. A first-year budget agreed with the managing agent.
                4. The budget refreshed each year before the new charge year starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scheduled service charge budget with a written apportionment method for each schedule, refreshed every year."
                cadence: cyclic
              tasks:
                - "List every running cost and assign it to a schedule"
                - "Choose how each schedule is apportioned between units"
                - "Ask the managing agent to price the first-year budget"
                - "Refresh the service charge budget before the new charge year @recurring(yearly)"
            - name: Monthly mixed-use scheme dashboard
              description: |-
                ## Purpose
                Lenders and partners want one view of how the scheme is doing across all its uses: homes reserved and exchanged, commercial units under offer and let, cost to complete and the programme. A monthly dashboard on one page shows when residential sales are carrying a slow commercial letting campaign, or the reverse, before it shows up in the cash flow.

                ## Milestones
                1. A one-page dashboard with residential sales, commercial leasing, cost and programme lines.
                2. Targets set for each line from the appraisal and programme.
                3. The first three months filled in and shared with partners or the lender.
                4. Any line off target by more than an agreed margin flagged with an action.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page dashboard covering sales, leasing, cost and programme, issued every month with off-target lines flagged."
                cadence: rolling
              tasks:
                - "Choose the six to eight numbers the dashboard will show"
                - "Set a target for each number from the appraisal"
                - "Fill in and issue the scheme dashboard @recurring(monthly:5)"
                - "Write one action against every number that is off target"
            - name: Fit-out and base build interface log
              description: |-
                ## Purpose
                Commercial tenants often start their fit-out while the contractor is still finishing the homes above, and that overlap creates disputes about access, drainage connections, extract routes and who damaged what. An interface log that records every point where tenant works meet base build works, with an owner and a date, keeps both programmes moving.

                ## Milestones
                1. Every interface point listed: drainage, extract, power, fire alarm, shopfront and signage.
                2. An owner and a required date set for each interface.
                3. A weekly check held while fit-out and base build overlap.
                4. Every interface closed and signed off before residential handover.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An interface log with every tenant and base build connection point owned and dated, all closed before residential handover."
                cadence: rolling
              tasks:
                - "List each point where tenant fit-out connects to the base build"
                - "Agree an owner and a date for every interface item"
                - "Review open interface items with the contractor @recurring(weekly:thu)"
                - "Sign off each closed item with a photo and date"
            - name: Noise, odour and nuisance log for commercial uses
              description: |-
                ## Purpose
                Once residents move in above a bar, a gym or a takeaway, complaints about noise, smells and late deliveries can sour sales, trigger enforcement and damage the commercial tenant's business. A simple log that records every complaint, checks it against the lease and planning conditions, and closes it with the tenant, shows residents they are heard and gives you evidence if a dispute escalates.

                ## Milestones
                1. One channel set up for residents to report nuisance from commercial uses.
                2. Each complaint logged with date, unit, type and outcome.
                3. Complaints checked against the relevant lease clause and planning condition.
                4. A monthly summary shared with the managing agent and repeat issues raised with the tenant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every nuisance complaint from residents logged and closed with an outcome, with repeat issues raised with the tenant in writing."
                cadence: rolling
              tasks:
                - "Give residents one email address or form for nuisance reports"
                - "Note the lease clauses and planning conditions that cover noise and hours"
                - "Review the nuisance log and raise repeat issues with tenants @recurring(monthly:20)"
                - "Write to any tenant with three complaints in a month"
            - name: Managing agent oversight for a mixed-use block
              description: |-
                ## Purpose
                Many managing agents are strong on residential blocks or on commercial property, but few are good at both under one roof. Choosing one with real mixed-use experience, and then checking their work against an agreed scope every quarter, is what keeps service charges accounted for correctly between residents and tenants.

                ## Milestones
                1. A managing agent appointed with named experience of mixed-use buildings.
                2. A scope of services covering both the residential and commercial schedules.
                3. Quarterly reviews held against agreed service levels.
                4. Monthly checks of the client account statements in place.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A managing agent with mixed-use experience appointed against a written scope, reviewed every quarter."
                cadence: rolling
              tasks:
                - "Ask three agents for examples of mixed-use buildings they manage"
                - "Agree a scope covering residential and commercial schedules"
                - "Hold a review of the managing agent against service levels @recurring(quarterly)"
                - "Check the client account statement for the block @recurring(monthly:12)"
            - name: Quarterly hold or sell review of the commercial parts
              description: |-
                ## Purpose
                Developers often hold the ground floor after selling the homes, sometimes by plan and sometimes because no buyer appeared. A quarterly review of the commercial income, the likely sale value, the cost of holding and what the money could do elsewhere turns an accidental investment into a choice you make on purpose.

                ## Milestones
                1. Current rent, voids and running costs for the commercial parts set out.
                2. An estimate of sale value obtained from an agent or valuer.
                3. The return from holding compared with recycling the equity into the next scheme.
                4. A hold or sell decision recorded each quarter with the reasons.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A hold or sell decision on the commercial parts recorded every quarter, with income, value and alternative use of capital set out."
                cadence: cyclic
              tasks:
                - "Total the rent, voids and costs of the commercial parts"
                - "Ask an agent for an estimate of what the commercial parts would sell for"
                - "Run the hold or sell review for the commercial parts @recurring(quarterly)"
                - "Record the decision and what would change it"
            - name: Commercial tenant relationship check-ins
              description: |-
                ## Purpose
                Small independent tenants on a new scheme can struggle in the first two years, and a landlord who only hears from them when the rent is late finds out too late. Regular short conversations about trading, problems with the building and plans let you spot trouble early, agree help such as a rent deferral, and keep the ground floor open.

                ## Milestones
                1. A contact sheet for every commercial tenant with the decision maker's name.
                2. A check-in held with each tenant every quarter.
                3. Building issues raised by tenants passed to the managing agent and closed.
                4. Any tenant at risk flagged early with options discussed with your adviser.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every commercial tenant spoken to at least once a quarter, with issues and risks recorded after each conversation."
                cadence: rolling
              tasks:
                - "Build a contact sheet for each commercial tenant"
                - "Hold a short check-in with every commercial tenant @recurring(quarterly)"
                - "Pass building issues raised by tenants to the managing agent"
                - "Note any tenant showing signs of trading difficulty"
            - name: Building insurance schedule for mixed uses
              description: |-
                ## Purpose
                Insurers price a block with a restaurant very differently from one with offices, and some will not cover residential floors above certain commercial uses at all. Keeping an up-to-date schedule of every use in the building, telling the broker when a tenant changes, and renewing with time to spare avoids a gap in cover or a premium that wrecks the service charge.

                ## Milestones
                1. A schedule of every unit and its use sent to the broker.
                2. The policy checked for exclusions linked to commercial uses.
                3. A rule in place that any new commercial tenant is notified to the broker before opening.
                4. Renewal started at least eight weeks before expiry each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current use schedule held by the broker, and the policy renewed each year with no unnotified change of commercial use."
                cadence: cyclic
              tasks:
                - "Send the broker a schedule of every unit and its current use"
                - "Ask the broker which commercial uses would change the premium or cover"
                - "Start the building insurance renewal with the broker @recurring(yearly)"
                - "Tell the broker before any new commercial tenant opens"
            - name: How investors value commercial ground floors
              description: |-
                ## Purpose
                Residential developers used to pricing flats per square metre are often caught out by how commercial space is valued: rent divided by a yield, then reduced for voids, rent-free periods, letting costs and tenant strength. Learning the method well enough to check an agent's figures means you will not overpay for land on the back of an optimistic commercial value.

                ## Milestones
                1. The investment method worked through by hand on one example unit.
                2. The effect of a one point yield change on value calculated.
                3. The difference between a let unit with a strong tenant and an empty shell explained in your own words.
                4. Your scheme's commercial value rechecked using the method.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked valuation of one commercial unit by the investment method, used to recheck the scheme's commercial value."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work through the investment method on one example unit"
                - "Calculate how much value moves with a one point yield change"
                - "Compare the value of a let unit and an empty shell"
                - "Recheck the commercial value in your appraisal with the method"
            - name: Use classes and permitted changes explained
              description: |-
                ## Purpose
                The planning system in most countries groups uses into classes, and some changes between classes need no permission while others need a full application. Knowing which changes your ground floor units could make without permission tells you how flexible the space is for future tenants, and which conditions to ask for or resist.

                ## Milestones
                1. The use classes that apply in your country set out in a one-page summary.
                2. The changes that are permitted without an application noted.
                3. Any planning conditions on the scheme that restrict use recorded.
                4. A view formed with your planning consultant on how flexible the commercial units should be.

                ## Notes
                Rules differ widely between countries and change often. Treat your summary as a prompt for questions to your planning consultant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of use classes and permitted changes relevant to the scheme, checked with your planning consultant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the current use class rules for your country"
                - "Note which changes between uses need no application"
                - "List the planning conditions on your scheme that restrict use"
                - "Ask your planning consultant how flexible the units should be"
            - name: Fire strategy basics for buildings with mixed uses
              description: |-
                ## Purpose
                Fire safety is where mixed-use design gets hardest: commercial units need compartmentation from the homes above, separate escape routes, and alarm systems that do not wake every resident when a kitchen sets one off. Understanding the principles well enough to ask the fire engineer the right questions keeps the strategy from being settled late and redrawn at cost.

                ## Milestones
                1. The principles of compartmentation, escape and alarm zoning between uses understood.
                2. A fire engineer appointed or engaged with mixed-use experience.
                3. Questions on commercial fit-out rules and kitchen extract fire stopping put to the fire engineer.
                4. The agreed fire strategy written into the tenant fit-out guide.

                ## Notes
                Fire safety design is for a qualified fire engineer and the building control body. This project is about knowing what to ask and making sure tenants are bound by the answer.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fire strategy prepared by a fire engineer that covers separation between uses, written into the tenant fit-out guide."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a plain guide to compartmentation and escape in mixed-use buildings"
                - "Ask the fire engineer how commercial units are separated from the homes"
                - "Check how kitchen extract ducts will be fire stopped through residential floors"
                - "Add the fire strategy rules to the tenant fit-out guide"
            - name: Acoustic separation between homes and commercial units
              description: |-
                ## Purpose
                Dropped weights in a gym or the bass line from a bar can travel through a concrete slab into the flat above, and the complaints follow straight away. Learning how acoustic separation works, what the acoustic consultant will test and which tenant types need extra measures lets you set the right standard in the base build and in the leases.

                ## Milestones
                1. The difference between airborne and impact sound explained in your own words.
                2. An acoustic consultant's advice obtained on slab and ceiling build-ups between uses.
                3. A list of high-noise uses that need extra measures written into the leasing brief.
                4. Acoustic requirements included in the tenant fit-out guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Acoustic standards between commercial and residential floors agreed with an acoustic consultant and written into the fit-out guide."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read how airborne and impact sound travel between floors"
                - "Ask the acoustic consultant for the slab and ceiling standard between uses"
                - "List tenant types that would need extra acoustic measures"
                - "Write the acoustic standards into the tenant fit-out guide"
            - name: Commercial lease terms for residential developers
              description: |-
                ## Purpose
                Developers who have only sold flats often sign their first commercial heads of terms without understanding repair obligations, service charge caps, break clauses or rent reviews, and those terms decide what the space is worth. Learning the ten clauses that matter most, in the context of a building shared with homes, lets you brief your solicitor and negotiate with confidence.

                ## Milestones
                1. The main clauses of a commercial lease listed with a plain summary of each.
                2. The clauses that interact with residents identified: hours, use, nuisance and access.
                3. A sample heads of terms reviewed against the list.
                4. Your standard positions written for your solicitor to use.

                ## Notes
                Your solicitor drafts and advises on the lease. This is about knowing which points are commercial choices for you to make.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of standard landlord positions on the key lease clauses, including those that protect residents, given to your solicitor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the main clauses of a commercial lease in plain words"
                - "Mark the clauses that affect residents living above"
                - "Review a sample heads of terms against your list"
                - "Write your standard positions and send them to your solicitor"
            - name: Service charge apportionment methods
              description: |-
                ## Purpose
                Whether costs are shared by floor area, by rateable value, by unit count or by weighted area changes what each resident and tenant pays, and a poor choice can leave the landlord paying for unrecoverable costs. Comparing the methods on your own scheme before the leases are drafted lets you pick one that is fair, explainable and recoverable.

                ## Milestones
                1. Three apportionment methods tested on the scheme's unit schedule.
                2. The share paid by residents and by commercial tenants under each method compared.
                3. Any costs the landlord would bear itself identified.
                4. A method chosen and written into the lease instructions to your solicitor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A chosen apportionment method, tested against two alternatives on the scheme's own unit schedule, sent to your solicitor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the unit schedule into a sheet with areas and unit types"
                - "Test floor area, unit count and weighted area apportionment"
                - "Compare what residents and tenants pay under each method"
                - "Send the chosen method to your solicitor for the leases"
            - name: Visits to completed mixed-use schemes
              description: |-
                ## Purpose
                Walking round a finished scheme shows things no drawing does: where the bins really go, whether the shops are open, how the residential entrance feels at night and what the managing agent struggles with. Visiting a few completed schemes, and talking to their developers or agents where you can, is the cheapest design review you will get.

                ## Milestones
                1. A list of completed mixed-use schemes within reach compiled.
                2. At least three schemes visited at different times of day.
                3. Notes made on entrances, servicing, shopfronts and vacancy.
                4. Lessons from the visits added to your design brief.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes from at least three completed mixed-use schemes, with specific lessons added to the design brief."
                cadence: rolling
              tasks:
                - "List five completed mixed-use schemes you could visit"
                - "Visit one completed mixed-use scheme and take notes @recurring(quarterly)"
                - "Ask the scheme's agent what they would change"
                - "Add each lesson to the design brief"
            - name: Shell and core or fitted commercial units
              description: |-
                ## Purpose
                Handing over commercial units as bare shells is cheapest for you but slows letting, while a fitted Category A finish attracts smaller tenants and costs more up front. Comparing cost, rent, void period and incentives for each option on your actual units turns a default habit into a decision.

                ## Milestones
                1. The specification for shell, shell with services capped and fitted options written.
                2. Costs for each option priced by the quantity surveyor.
                3. Agents' views on rent and letting time for each option recorded.
                4. A chosen delivery standard for each commercial unit written into the specification.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A delivery standard chosen for each commercial unit after comparing cost, rent and void period for at least two options."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a short specification for shell, capped services and fitted options"
                - "Ask the quantity surveyor to price each option per unit"
                - "Ask two agents how each option changes rent and letting time"
                - "Record the chosen standard for each unit in the specification"
            - name: Sell or hold the commercial element
              description: |-
                ## Purpose
                Selling the commercial units on completion releases capital and removes landlord work; keeping them gives income and a say in what happens on your ground floor. The right answer depends on your capital, your appetite for management and the value an investor will pay, and deciding before practical completion lets the leasing strategy match the exit.

                ## Milestones
                1. The likely sale value of the commercial parts let and unlet set out.
                2. The income and costs of holding for five years modelled.
                3. Your capital needs for the next scheme compared with both routes.
                4. A sell or hold decision recorded and the leasing brief adjusted to match.

                ## Notes
                Investors pay more for long leases to strong tenants. If you plan to sell, let to suit an investor; if you plan to hold, let to suit the place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded sell or hold decision on the commercial parts, made before practical completion, with the leasing brief updated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask an investment agent what the commercial parts would sell for"
                - "Model five years of holding income and costs"
                - "Compare both routes against the capital the next scheme needs"
                - "Record the decision and update the leasing brief"
            - name: Choosing an anchor use for the ground floor
              description: |-
                ## Purpose
                One well-chosen anchor, such as a small food store, a nursery, a café or a clinic, can bring daily footfall that lets the smaller units and sells the homes. The wrong anchor brings deliveries, noise or blank frontage. Comparing three candidate anchors on footfall, covenant, rent and fit with residents makes the choice before the agent starts marketing.

                ## Milestones
                1. Three anchor uses shortlisted with the unit size each would need.
                2. Each scored on footfall, rent, tenant strength and impact on residents.
                3. Named operators of the preferred type approached.
                4. An anchor strategy written into the leasing brief.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred anchor use chosen from at least three scored options, with named operators approached."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist three anchor uses that suit the area"
                - "Score each on footfall, rent, tenant strength and resident impact"
                - "Contact two operators of the preferred anchor type"
                - "Write the anchor strategy into the leasing brief"
            - name: Flexible workspace operator or direct leases
              description: |-
                ## Purpose
                Upper-floor workspace in a mixed-use scheme can be let floor by floor on conventional leases, or handed to a flexible workspace operator on a lease or management agreement. Each route changes your income, risk and the life of the building. Comparing operator terms with direct letting on your space gives a clear choice.

                ## Milestones
                1. Two or three workspace operators approached with the floor plans.
                2. Operator terms compared: lease, management agreement or revenue share.
                3. Expected income and risk of direct letting set out on the same basis.
                4. A preferred route chosen and recorded.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a workspace operator and direct letting, based on at least two operator proposals."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send the workspace floor plans to three flexible workspace operators"
                - "Put each operator's terms side by side"
                - "Estimate income and voids from direct floor-by-floor letting"
                - "Record the preferred route and the reasons"
            - name: Parking, cycle and delivery space allocation
              description: |-
                ## Purpose
                Limited parking and cycle space has to serve residents, commercial staff, customers and delivery riders, and each group will claim it. Deciding who gets which spaces, at what times and on what terms, and writing that into leases and sales packs, prevents the first winter of arguments over the car park.

                ## Milestones
                1. Every parking, cycle and loading space counted and mapped.
                2. Allocation set for residents, commercial tenants and visitors.
                3. Any time-sharing of spaces between day and evening users agreed.
                4. The allocation written into sales packs and lease heads of terms.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A parking and cycle allocation plan covering every space and user group, included in sales packs and leases."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count and map every parking, cycle and loading space"
                - "Allocate spaces to residents, commercial tenants and visitors"
                - "Decide whether any spaces are shared between day and evening users"
                - "Add the allocation to the sales pack and heads of terms"
            - name: Future-proofing ground floors for food and drink
              description: |-
                ## Purpose
                Restaurants and cafés need extract routes to roof level, grease traps, larger drainage and more power, and adding these after the flats are sold is nearly impossible. Building in risers and capacity for at least one food unit keeps a valuable tenant type open to you without committing to it.

                ## Milestones
                1. The units that could suit food and drink identified with the agent.
                2. A riser route for kitchen extract to roof level agreed with the architect.
                3. Drainage and power capacity for a food unit confirmed with the services engineer.
                4. The cost of the provisions added to the cost plan.

                ## Notes
                Extract discharge near bedroom windows causes many complaints. Agree discharge points with the services engineer early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one commercial unit with a designed extract route, drainage and power capacity for food use, costed in the cost plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent which units could suit a café or restaurant"
                - "Agree an extract riser route to roof level with the architect"
                - "Check drainage and power capacity with the services engineer"
                - "Add the cost of these provisions to the cost plan"
            - name: Buyer mortgage lending checks for flats above shops
              description: |-
                ## Purpose
                Some mortgage lenders restrict lending on flats above certain commercial uses, such as takeaways, bars or launderettes, and that can shrink the pool of buyers and the price they pay. Checking lender criteria early, and steering the commercial use mix accordingly, protects residential sales values.

                ## Milestones
                1. The lending criteria of several mainstream mortgage lenders checked through a broker.
                2. Commercial uses that limit lending listed.
                3. Use restrictions written into commercial leases to protect mortgageability.
                4. A broker's confirmation obtained that the scheme is acceptable to mainstream lenders.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A broker's written note on mainstream lender acceptance of the flats, with any restricted commercial uses excluded in the leases."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a mortgage broker which commercial uses limit lending on flats above"
                - "List the uses to exclude from the commercial leases"
                - "Send the exclusions to your solicitor for the lease drafts"
                - "Get the broker's written note on lender acceptance of the scheme"
            - name: Meanwhile uses for unlet ground-floor units
              description: |-
                ## Purpose
                A dark shopfront under occupied flats hurts sales and invites vandalism, while a pop-up shop, gallery or community use on a short licence keeps the street alive and may become a tenant. Setting up a simple meanwhile licence and a list of candidate occupiers means an empty unit can be in use within weeks.

                ## Milestones
                1. A short-term licence agreed with your solicitor for meanwhile occupiers.
                2. A list of local makers, charities and pop-up operators compiled.
                3. At least one empty unit occupied on a meanwhile basis.
                4. Meanwhile occupiers reviewed monthly, with any that could become tenants approached.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No commercial unit left dark for more than three months, with meanwhile occupiers on short licences where needed."
                cadence: rolling
              tasks:
                - "Ask your solicitor for a short meanwhile licence"
                - "List local makers, charities and pop-up operators who might use a unit"
                - "Offer one empty unit on a meanwhile licence"
                - "Review meanwhile occupiers and their prospects as tenants @recurring(monthly:14)"
            - name: Commercial marketing launch for the ground floor
              description: |-
                ## Purpose
                Commercial units let faster when marketing starts well before completion with proper particulars, CGIs of the shopfronts and a clear statement of what the landlord will contribute. Planning a dated launch, with the agent's materials ready and the target occupier list contacted, gives the ground floor its best chance of being let on opening day.

                ## Milestones
                1. Particulars, floor plans and shopfront images prepared for each unit.
                2. A quoting rent and incentive policy agreed with the agent.
                3. A target list of at least twenty occupiers contacted on launch day.
                4. A launch report from the agent with enquiries and viewings after four weeks.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A commercial marketing launch held on a set date, with twenty target occupiers contacted and a four-week enquiry report received."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree a launch date with the commercial agent"
                - "Approve particulars, plans and shopfront images for each unit"
                - "Agree the quoting rents and incentive limits"
                - "Ask the agent for a four-week enquiry and viewing report"
            - name: First commercial tenant opening day
              description: |-
                ## Purpose
                The first shop or café to open sets the tone for the scheme: residents notice, buyers notice and so do other prospective tenants. Helping the tenant open well, with the shopfront finished, signage approved, the public realm clean and residents told, is a small effort with an outsized effect on the place.

                ## Milestones
                1. Shopfront, signage and public realm around the unit finished and clean.
                2. Any signage consent and landlord approvals issued.
                3. Residents told about the opening through the managing agent.
                4. Photographs of the open unit taken for marketing the remaining units.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first commercial tenant opens on the agreed date with finished frontage, approved signage and photos taken for marketing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the opening date with the first tenant"
                - "Check signage approvals and the shopfront finish"
                - "Ask the managing agent to tell residents about the opening"
                - "Arrange photographs of the open unit for marketing"
            - name: Phased occupation with commercial fit-out ongoing
              description: |-
                ## Purpose
                Residents often move in while the ground floor is still a building site of tenant fit-outs, and that brings dust, noise, blocked entrances and safety risks. Planning the handover of the homes around the commercial works, with protected routes, working hours and clear communication, keeps the first months from turning into complaints and claims.

                ## Milestones
                1. A plan showing protected residential routes during commercial fit-out.
                2. Working hours for tenant contractors agreed and written into fit-out licences.
                3. A welcome letter to residents explaining the works and who to contact.
                4. Fire alarm and escape routes confirmed safe for residents during fit-out.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Residents move in with protected routes, agreed contractor hours and a named contact, with no fit-out safety incident affecting them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark protected resident routes on the ground-floor plan"
                - "Write tenant contractor working hours into every fit-out licence"
                - "Send residents a letter explaining the works and the contact"
                - "Confirm with the fire engineer that escape routes stay clear"
            - name: Lender and investor tour of the scheme
              description: |-
                ## Purpose
                Lenders and investors who visit a mixed-use scheme ask harder questions than they do of flats: how the commercial units will let, how servicing works and who manages the building. A planned tour that walks them through the uses in order, with answers ready, builds confidence for refinancing, a sale of the commercial parts or the next scheme.

                ## Milestones
                1. A route through the building planned to show each use and the servicing.
                2. A one-page fact sheet on sales, leasing, cost and programme prepared.
                3. Likely questions answered in advance with the agent and managing agent.
                4. Follow-up points from the tour recorded and answered within a week.

                ## Notes
                Start from the **Meeting notes** template for the follow-up points.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tour held for lenders or investors with a fact sheet issued and every follow-up question answered within seven days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Plan a route showing each use, the cores and the servicing"
                - "Prepare a one-page fact sheet on sales, leasing, cost and programme"
                - "List likely questions and agree answers with the agents"
                - "Answer every follow-up point within a week of the tour"
            - name: First year-end service charge reconciliation meeting
              description: |-
                ## Purpose
                The first reconciliation of actual costs against the budget is when residents and tenants find out whether the service charge was realistic, and when disputes about apportionment surface. Holding a clear meeting with the managing agent, showing each schedule, explaining variances and recording questions, starts the relationship with owners on firm ground.

                ## Milestones
                1. Actual costs reconciled against budget for each schedule.
                2. Variances above an agreed threshold explained in writing.
                3. A meeting held with residents and commercial tenants invited.
                4. Questions and actions recorded and answered after the meeting.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reconciliation meeting held with written variance explanations for each schedule and every question answered afterwards."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the managing agent for actual costs against budget by schedule"
                - "Write a short explanation for every large variance"
                - "Invite residents and commercial tenants to the meeting"
                - "Send the meeting record and answers to everyone invited"
            - name: First mixed-use scheme for a residential developer
              description: |-
                ## Purpose
                Developers moving from pure housing into their first scheme with a commercial ground floor usually underestimate the letting time, the design complexity and the management after completion. A short plan that names the gaps in your knowledge and team, and who will fill each, avoids learning on the most expensive scheme you have done.

                ## Milestones
                1. A list of the skills and advisers a mixed-use scheme needs that your past schemes did not.
                2. A commercial agent, fire engineer and acoustic consultant identified.
                3. A conversation held with a developer who has completed a mixed-use scheme.
                4. The appraisal adjusted for realistic commercial letting time and voids.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written gap plan naming each new adviser and skill a first mixed-use scheme needs, with the appraisal adjusted for commercial voids."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List what this scheme needs that your residential schemes did not"
                - "Identify a commercial agent, fire engineer and acoustic consultant"
                - "Ask a developer with a completed mixed-use scheme for an hour of advice"
                - "Lengthen the commercial void and letting period in the appraisal"
            - name: Flats over shops on a high street building
              description: |-
                ## Purpose
                Empty upper floors above high street shops are one of the most common small mixed-use opportunities, but access, fire escape and the existing shop tenant often make them harder than they look. Testing whether a separate entrance can be created, what the shop lease allows and what building regulations demand tells you quickly whether the conversion stacks up.

                ## Milestones
                1. The existing shop lease checked for rights over the upper floors and access.
                2. A route for a separate residential entrance identified.
                3. A building control and fire escape view obtained on the conversion.
                4. A simple appraisal showing whether the upper floors are worth converting.

                ## Notes
                Where the shop tenant controls the only staircase, negotiating a new access route with them is usually the deal, not a detail.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go decision on converting upper floors to flats, based on access, lease rights, fire escape and a simple appraisal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the shop lease for rights over the upper floors"
                - "Find a route for a separate front door to the flats"
                - "Ask building control about fire escape for the conversion"
                - "Run a simple appraisal and record go or no-go"
            - name: Shop owner building homes above the premises
              description: |-
                ## Purpose
                Owning your own shop means you can add value by building flats above or behind it, but you have to keep trading through construction and keep the business finances separate from the development. Planning how the shop stays open, how the development is funded and owned, and what happens if trading suffers protects the business that pays the bills.

                ## Milestones
                1. A plan for keeping the shop open during works, with any closure period costed.
                2. Advice from your accountant on holding the development separately from the business.
                3. Funding for the homes arranged without putting the business at risk.
                4. Customers and staff told about the works and the timetable.

                ## Notes
                Talk to your accountant and solicitor before signing anything. How the property is held can change the tax position of both the business and the homes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan covering trading during works, ownership of the homes and funding, reviewed by your accountant before works start."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate how long the shop could be disrupted and what it would cost"
                - "Ask your accountant how to hold the new homes separately"
                - "Check funding options that do not secure debt on the business"
                - "Tell staff and regular customers the works timetable"
            - name: Town centre site with a public sector landowner
              description: |-
                ## Purpose
                Councils and public bodies often own the town centre car parks and empty department stores that suit mixed-use schemes, and they expect more than a land price: public realm, workspace for local firms or a civic use. Understanding what the landowner wants, how its decisions are made and how long they take lets a small developer bid credibly.

                ## Milestones
                1. The landowner's published objectives for the site gathered.
                2. The decision process and timetable understood, including any committee dates.
                3. The scheme's public benefits, such as workspace or civic space, set out.
                4. A first meeting held with the landowner's property team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note setting out the public landowner's objectives, decision timetable and your proposed public benefits, discussed at a first meeting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the landowner's regeneration plans and committee reports for the site"
                - "Map the decision process and the dates of key committees"
                - "Draft the public benefits your scheme would offer"
                - "Request a first meeting with the landowner's property team"
            - name: Shop and apartment building in a Caribbean town
              description: |-
                ## Purpose
                Main streets across the Caribbean, from Port of Spain and Bridgetown to Castries and Kingston, are lined with buildings that put a store at street level and apartments above, and new schemes of this kind remain one of the most practical forms of small development. Getting the mix right means matching local retail demand, providing secure separate access for residents, and planning for hurricane shutters and backup water and power that serve both uses.

                ## Milestones
                1. Local demand for the ground-floor store checked with nearby traders and agents.
                2. A separate, secure residential entrance designed.
                3. Shared resilience items such as water storage, a generator and shutters allocated between uses.
                4. Costs for shared resilience items split between the store and the apartments.

                ## Notes
                Local approvals and building permit rules differ by island. Check them with your local planning authority and an architect who works there.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scheme brief for a store with apartments above, covering demand, separate access and shared resilience costs split between uses."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Talk to three nearby traders about demand for a store at street level"
                - "Ask the architect to design a secure separate entrance for the apartments"
                - "List shared resilience items such as tanks, generator and shutters"
                - "Split the cost of shared resilience items between the store and apartments"
            - name: Live-work units for makers and small firms
              description: |-
                ## Purpose
                Live-work units combine a home with a workshop or studio, and they suit makers, designers and small trades who cannot afford separate premises. They are also hard to finance, value and control, because mortgage lenders and planners treat them differently. Researching demand, lender appetite and the planning approach before including them avoids units that sit empty or drift into plain flats.

                ## Milestones
                1. Demand from local makers and small firms gathered through workspace providers or trade groups.
                2. Lender and valuer views on live-work units obtained.
                3. The planning approach to live-work use confirmed with the planning officer.
                4. A design brief for the units with the work and living areas defined.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on including live-work units, backed by demand evidence, lender views and the planning approach."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask local workspace providers about demand from makers"
                - "Ask a mortgage broker and a valuer how they treat live-work units"
                - "Check with the planning officer how live-work use is controlled"
                - "Record whether to include live-work units and how many"
            - name: Resident management rights and the commercial parts
              description: |-
                ## Purpose
                In some countries, flat owners can take over management of their building or buy the freehold collectively, and the share of the building in commercial use can decide whether they qualify. For a developer holding the ground floor, that is a long-term risk to control of the asset. Understanding the rules that apply, and structuring the scheme with legal advice, is specialist work worth doing before the leases are signed.

                ## Milestones
                1. The resident management and enfranchisement rules in your country summarised by your solicitor.
                2. The commercial share of floor area measured on the scheme's legal definitions.
                3. The likely effect on control of the commercial parts set out.
                4. An agreed structure recorded with the reasons.

                ## Notes
                This is legal ground. Your solicitor gives the answer; your job is to ask early and measure accurately.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A solicitor's written summary of resident rights affecting the scheme, with floor areas measured and the chosen structure recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your solicitor for a summary of resident rights that could apply"
                - "Measure commercial and residential floor areas as the rules define them"
                - "Set out how those rights could affect your control of the ground floor"
                - "Record the chosen structure and why"
            - name: Phasing a large mixed-use scheme
              description: |-
                ## Purpose
                On a larger site, the order in which blocks are built decides cash flow, the character of the place for early residents and whether the shops open to any footfall. Delivering commercial space too early leaves it empty; too late, and early buyers live on a street with nothing on it. A phasing plan that tests two or three sequences on cash flow and place answers the question with numbers.

                ## Milestones
                1. Two or three phasing sequences drawn with the uses delivered in each phase.
                2. Peak debt and equity need modelled for each sequence.
                3. The ground-floor offer available to early residents described for each.
                4. A preferred sequence chosen and reviewed monthly against sales and leasing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen phasing sequence, compared with at least one alternative on peak funding need and early ground-floor offer, reviewed monthly."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw two or three phasing sequences for the site"
                - "Model peak funding need for each sequence"
                - "Describe what early residents would find on the ground floor in each"
                - "Check the phasing plan against sales and leasing progress @recurring(monthly:27)"
            - name: Placemaking programme for the ground floor and public realm
              description: |-
                ## Purpose
                On larger schemes, the streets and squares between buildings sell the homes and let the shops as much as the buildings do. A placemaking programme, with seasonal events, a curated mix of independent tenants and a public realm that is cleaned and planted, turns a development into a place people choose. It needs a budget and an owner to last.

                ## Milestones
                1. An annual placemaking budget agreed, with how it is funded through the service charge or by you.
                2. A calendar of at least four events a year planned.
                3. A tenant mix plan that names the independent operators you want.
                4. Footfall or feedback measured after each event.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An annual placemaking budget and calendar of at least four events, with footfall or feedback recorded after each."
                cadence: cyclic
              tasks:
                - "Agree an annual placemaking budget and how it is funded"
                - "Plan the next quarter's event with tenants @recurring(quarterly)"
                - "List the independent operators you would like on the ground floor"
                - "Record footfall or feedback after each event"
            - name: Community and civic uses on the ground floor
              description: |-
                ## Purpose
                A nursery, health clinic, library or community hall can fill ground-floor space that would not let to retail, satisfy planning policy and make the homes more attractive to families. These occupiers come with their own rules on outdoor space, opening hours and funding. Understanding what each needs and how they are funded lets you plan the space and the deal.

                ## Milestones
                1. Local demand for nursery, health or community space checked with providers or the council.
                2. Each candidate use's needs for space, outdoor area and access recorded.
                3. Typical lease terms and rents for community occupiers gathered.
                4. A preferred civic or community use included in the leasing brief.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note on demand, space needs and lease terms for at least two community uses, with a preferred use added to the leasing brief."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask local nursery and health providers whether they need space"
                - "Record each candidate's space, outdoor and access needs"
                - "Find typical lease terms for community occupiers"
                - "Add the preferred community use to the leasing brief"
            - name: Podium and tower stacking for tall mixed-use blocks
              description: |-
                ## Purpose
                Taller mixed-use buildings usually put commercial uses in a podium and homes in a tower above, and the transfer structure, plant floors, separate lift banks and fire strategy between them add real cost. Understanding where these costs fall and how they change with the commercial floor plate lets you challenge a design that loses value at the podium.

                ## Milestones
                1. The cost of the transfer structure between podium and tower priced by the quantity surveyor.
                2. Lift, plant and core requirements for each use set out.
                3. Two podium sizes compared on cost and value.
                4. A podium size chosen with its effect on the appraisal recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A podium size chosen after comparing two options on transfer structure cost, cores and value, with the appraisal updated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the quantity surveyor to price the transfer structure"
                - "List lifts, plant and cores needed for each use"
                - "Compare two podium sizes on cost and value"
                - "Record the chosen podium size in the appraisal"
            - name: Long-term stewardship plan for a mixed-use estate
              description: |-
                ## Purpose
                Mixed-use places decline when nobody owns the long view: shopfronts go shabby, planting dies and the tenant mix drifts to whatever pays. A stewardship plan that sets standards for the public realm, the commercial frontages and the tenant mix, with a yearly review and a funded body to carry it out, keeps the place, and the value of what you hold, intact for decades.

                ## Milestones
                1. Standards for public realm, shopfronts and signage written down.
                2. A body responsible for stewardship identified: you, a management company or an estate trust.
                3. A funding source for stewardship agreed and written into leases or sales documents.
                4. A yearly stewardship review held with residents and tenants represented.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written stewardship plan with standards, a responsible body and a funding source, reviewed every year with residents and tenants."
                cadence: cyclic
              tasks:
                - "Write the standards for public realm, shopfronts and signage"
                - "Decide who will carry the stewardship role and how it is funded"
                - "Ask your solicitor to reflect the stewardship funding in the leases"
                - "Hold the yearly stewardship review with residents and tenants @recurring(yearly)"
---

# Mixed-Use Development

Mixed-use development is the craft of stacking homes, shops and workspace so each use helps the others instead of getting in their way. This area is for founders and small developers taking on their first scheme with a commercial ground floor, and for shop owners and builders adding homes above their own premises. It starts with the use mix, demand evidence, split appraisal, cores, servicing and the ownership structure, moves through the running machinery of leasing, service charges and building management, then covers the technical knowledge of fire, acoustics and leases, the big decisions on fit-out, holding and anchors, the dated launches and openings, situations for different kinds of developer and the specialist work of phasing, placemaking and long-term stewardship.

The rhythms are a weekly leasing pipeline and fit-out interface check, a monthly scheme dashboard, risk review and complaints log, quarterly reviews of the managing agent, tenants and the hold or sell case, and yearly service charge budgets, insurance renewals and stewardship reviews. Risk register suits the mixed-use risk log, Metrics log suits the scheme dashboard, Vendor suits the managing agent, Meeting notes suits the service charge meeting and Purchase decision suits choosing a workspace operator. None of this is legal, tax or valuation advice: agree leases, structures and valuations with your solicitor, accountant and a qualified valuer. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
