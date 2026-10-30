---
id: real-estate-development.hurricane-resilient-development
name: Hurricane-Resilient Development
description: "Developments designed and financed for hurricanes and flooding: site exposure mapped, wind and flood design set early, roofs and openings built right, insurance costs managed and resilience turned into a reason to buy."
category: business
version: 1.0.0
tags: [real-estate-development, hurricane-resilient-development, founder, small-business, hurricanes, flood-risk, building-codes, storm-insurance]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - operational-checklist
    - purchase-decision
    - vendor
    - metrics-log
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hurricane-Resilient Development
          description: "Designing and financing developments for hurricanes and flooding: building codes, site levels, roofing and openings, insurance costs and resilience as a selling point."
          projects:
            - name: Hurricane and flood exposure profile for the site
              description: |-
                ## Purpose
                Before a single drawing is paid for, you need to know which hazards the site actually faces: wind, storm surge, rainfall flooding, river flooding, landslip or all of them. A two-page exposure profile built from public maps, historical storm tracks and a walk of the site after rain tells you whether the land is a sensible buy and what the design will have to carry.

                ## Milestones
                1. The tracks of named storms passing within about 100 km of the site in recent decades listed from a public historical database.
                2. Flood, surge and landslip maps for the site checked and screenshots saved.
                3. Neighbours or long-term residents asked where water stood in the last major storm.
                4. A two-page profile ranking the hazards from most to least serious, filed with the site appraisal.

                ## Notes
                Local memory is often better than the maps. Ask the oldest shop owner nearby where the water reached; old flood lines on walls are evidence too.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page exposure profile ranking wind, surge, rainfall flood, river flood and landslip risk for the site, filed with the appraisal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search a public historical hurricane track database for storms near the site"
                - "Download the official flood and surge maps covering the parcel"
                - "Talk to two neighbours about water levels in the last big storm"
                - "Write the two-page exposure profile and attach it to the appraisal"
            - name: Storm surge and flood zone mapping check
              description: |-
                ## Purpose
                Coastal schemes are lost to water far more often than to wind, and flood maps can be years out of date or drawn at a scale that misses your plot. Getting a surveyor's levels tied to the same datum as the official flood and surge maps shows exactly how far the ground sits above or below the expected water level.

                ## Milestones
                1. A topographic survey of the site with levels tied to the national or chart datum.
                2. The official flood zone and surge inundation level for the site written down with their source and date.
                3. The difference between existing ground level and the expected flood level calculated for each corner of the site.
                4. A note of any watercourse, gully or low point that could channel water onto the site.

                ## Notes
                Check the datum. A survey in one datum and a flood map in another can hide a difference of half a metre or more.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A survey drawing showing ground levels against the official flood and surge levels on the same datum, with the gap recorded for each part of the site."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the land surveyor to tie all levels to the datum used by the flood maps"
                - "Find the surge and flood levels for the site from the official mapping agency"
                - "Mark the lowest corner of the site and its gap to the flood level"
                - "Note watercourses or gullies upstream that drain toward the site"
            - name: Wind speed design basis agreed with the structural engineer
              description: |-
                ## Purpose
                Every roof fixing, window and wall tie on the scheme follows from one number: the design wind speed and the exposure category the engineer chooses. Agreeing that basis in writing at concept stage, with the standard it comes from and any margin you want above the code minimum, stops it being quietly reduced later to save cost.

                ## Milestones
                1. The design wind speed, return period and exposure category stated by the structural engineer in writing.
                2. The standard and edition the figure comes from named, such as a regional code or an international wind loading standard.
                3. A decision recorded on whether to design above the code minimum, and by how much.
                4. The design basis issued to the whole design team as a single page.

                ## Notes
                Topography matters: a site on a ridge or headland can see much higher wind speeds than the flat-ground figure. Ask the engineer whether a topographic factor applies.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page wind design basis naming the wind speed, standard, exposure category and any margin above code, issued to the design team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the structural engineer for the design wind speed and its source in writing"
                - "Ask whether a hill, ridge or coastal exposure factor raises the figure"
                - "Decide with your partners whether to design above the code minimum"
                - "Issue the one-page wind design basis to every consultant"
            - name: Building code and wind standard confirmation
              description: |-
                ## Purpose
                Island jurisdictions vary widely: some enforce a national code closely, some adopt a regional or foreign standard by reference, and some leave much to the engineer. Knowing exactly which code edition and loading standard your scheme must meet, and how strictly it is inspected, sets the floor for design and tells you where your own standard has to sit above it.

                ## Milestones
                1. The building code and edition that applies to the site confirmed with the building authority.
                2. The wind loading and flood design standards it calls up identified.
                3. The inspection stages the authority carries out listed, with who signs each off.
                4. A note of where you will exceed the code because enforcement or the standard is weak.

                ## Notes
                Where the code is old or loosely enforced, insurers and lenders often expect more than the code asks. Ask both what they treat as acceptable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note naming the applicable building code, its edition, the wind and flood standards it calls up and the authority's inspection stages."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call the building authority to confirm which code edition applies"
                - "List the wind and flood standards the code calls up by reference"
                - "Ask which construction stages the authority inspects and certifies"
                - "Write down where your scheme will go beyond the code minimum"
            - name: Finished floor level and site level strategy
              description: |-
                ## Purpose
                Raising floors above the expected flood level is the single cheapest flood defence there is, but every extra step changes access, ramps, drainage falls and the look of the street. Setting finished floor levels early, with a freeboard margin above the flood level, lets the architect design around them instead of patching them in after planning.

                ## Milestones
                1. A freeboard margin above the design flood level agreed with the civil engineer.
                2. Finished floor levels set for every building and ground floor use.
                3. Access, ramps and parking levels checked against the raised floors.
                4. Site grading drawn so water falls away from every building.

                ## Notes
                Keep electrical panels, plant and lift machinery above the same raised level, not just the floors people live on.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A level strategy drawing showing finished floor levels for every building at or above the design flood level plus the agreed freeboard."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a freeboard margin above the flood level with the civil engineer"
                - "Ask the architect to set finished floor levels on the site plan"
                - "Check ramps and accessible routes still work at the raised levels"
                - "Confirm grading falls away from each building on the drawing"
            - name: Resilience brief for the design team
              description: |-
                ## Purpose
                Consultants design to the brief they are given, and most briefs say nothing about storms beyond meeting code. A short resilience brief setting your targets for wind, water, power, water supply and recovery time gives architects and engineers something definite to design to and to be measured against.

                ## Milestones
                1. Targets written for wind design, flood levels, roof and opening performance and backup services.
                2. A target recovery time stated, such as occupants back in within a set number of days of a major storm.
                3. The brief reviewed by the architect and structural engineer, with their comments resolved.
                4. The brief attached to every consultant appointment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed resilience brief with targets for wind, flood, openings, services and recovery time, attached to every consultant appointment."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a resilience brief from the exposure profile and wind basis"
                - "Set a target number of days for occupants to return after a major storm"
                - "Review the brief with the architect and structural engineer"
                - "Attach the final brief to every consultant appointment document"
            - name: Early insurance quotation on the outline design
              description: |-
                ## Purpose
                Insurance for coastal property can swing the operating budget or the buyer's monthly cost more than any design choice, and some sites cannot get cover at an acceptable price at all. Asking a specialist broker to indicate premiums and windstorm deductibles on the outline design, while it can still change, shows what insurers will reward and whether the scheme is viable.

                ## Milestones
                1. A broker with coastal and catastrophe experience chosen.
                2. The outline design, wind basis and floor levels sent to the broker.
                3. Indicative premium, named windstorm deductible and flood cover terms received in writing.
                4. A list of design features the broker says would improve terms.

                ## Notes
                Indications are not quotes, and the market can move sharply after a bad season. Record the date on every figure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written indicative insurance terms on the outline design, with premium, windstorm deductible, flood cover and improvement suggestions recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two developers on the island which broker places coastal cover well"
                - "Send the broker the outline design, wind basis and floor levels"
                - "Ask for indicative premium and windstorm deductible in writing"
                - "List the design changes the broker says would improve terms"
            - name: Resilience cost allowance in the appraisal
              description: |-
                ## Purpose
                Impact glazing, upgraded roof fixings, raised slabs and backup power all cost money, and appraisals copied from inland schemes leave them out. Putting a specific line for each resilience item into the appraisal, with the insurance saving beside it, shows the real profit on cost and stops resilience being the first thing cut.

                ## Milestones
                1. Each resilience item costed by the quantity surveyor as a separate line.
                2. The extra cost compared with a code-minimum version of the same scheme.
                3. Insurance, maintenance and sales effects estimated alongside the cost.
                4. The appraisal rerun with resilience costs in and the result recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An updated appraisal with resilience costs as separate lines and the profit on cost recorded with and without them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the quantity surveyor to price each resilience item separately"
                - "Price the same scheme at code minimum for comparison"
                - "Add the broker's indicated insurance saving beside the extra cost"
                - "Rerun the appraisal and record profit on cost both ways"
            - name: Hurricane risk register for the scheme
              description: |-
                ## Purpose
                Storm risk touches design, programme, finance, sales and insurance, and without one list each consultant sees only their slice. A risk register with an owner, a likelihood and a response for each hurricane and flood risk makes the gaps visible at every project meeting.

                ## Milestones
                1. At least fifteen storm and flood risks logged across design, construction, finance and sales.
                2. An owner and a response recorded for every risk.
                3. The top five risks agreed with the project manager.
                4. The register reviewed at the monthly project meeting.

                ## Notes
                Start from the **Risk register** template. Include the risks that are easy to forget: a storm during concrete pours, a contractor who stops work for the season, and a lender who will not release funds after damage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register with at least fifteen storm and flood risks, each with an owner and response, reviewed at monthly project meetings."
                cadence: rolling
              tasks:
                - "Log fifteen storm and flood risks across design, build, finance and sales"
                - "Give every risk an owner and a written response"
                - "Agree the top five risks with the project manager"
                - "Review the hurricane risk register at the monthly project meeting @recurring(monthly:14)"
            - name: Resilience check at every design stage
              description: |-
                ## Purpose
                Resilience gets designed out one small change at a time: a cheaper window, a lower slab, a plant room moved to the basement. A standing resilience item at each design team meeting, checked against the brief, catches those changes while they are still cheap to reverse.

                ## Milestones
                1. A resilience agenda item fixed on every design team meeting.
                2. Each design stage report checked against the resilience brief.
                3. Any departure from the brief recorded with the reason and who approved it.
                4. A sign-off at the end of each stage confirming the brief is still met.

                ## Notes
                Start from the **Meeting notes** template. Ask the architect to bring a one-line status for each brief target, not a presentation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every design team meeting minute contains a resilience item, and every stage ends with a recorded check against the brief."
                cadence: rolling
              tasks:
                - "Add a resilience item to the design team meeting agenda"
                - "Hold the resilience check at the monthly design team meeting @recurring(monthly:12)"
                - "Record any departure from the brief with the reason and approver"
                - "Sign off the brief at the end of each design stage"
            - name: Construction site hurricane season plan
              description: |-
                ## Purpose
                Half-built schemes are at their most vulnerable: loose sheets, unbraced walls, cranes and stacked materials all become projectiles in a storm. A written site season plan, agreed with the contractor before the season opens, sets who does what at each stage from a watch to the all-clear.

                ## Milestones
                1. Actions written for each stage: season open, storm watch, storm warning and all-clear.
                2. Crane, scaffold and hoarding securing methods confirmed by the contractor.
                3. A list of loose materials and how each will be stored or tied down.
                4. Contacts for the contractor, engineer, insurer and site security on one page.
                5. The plan signed by the contractor and posted in the site office.

                ## Notes
                Start from the **Operational checklist** template. The construction contract should say who pays for storm preparation time; check it before the season, not during a watch.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed site season plan with actions for watch, warning and all-clear, refreshed before each season and posted on site."
                cadence: cyclic
              tasks:
                - "Ask the contractor for their crane and scaffold storm procedure"
                - "Refresh the site hurricane plan with the contractor before the season opens @recurring(yearly)"
                - "Check the regional seasonal outlook every Monday during the season @recurring(weekly:mon)"
                - "Post the signed plan and contact sheet in the site office"
            - name: Storm warning site shutdown drill
              description: |-
                ## Purpose
                Plans fail on the day because nobody has timed them: securing a site properly can take two or three days, and warnings may give less. A timed shutdown drill each year before peak season shows how long the work really takes and what is missing.

                ## Milestones
                1. A drill date set before the peak of the season.
                2. The shutdown run against the season plan with a timer.
                3. Gaps found in tools, ties, labour or materials listed.
                4. The plan updated with the real time needed and the fixes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed drill completed before peak season, with the measured shutdown time and any gaps written into the updated site plan."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree a drill date with the contractor before peak season"
                - "Run a timed site shutdown drill against the season plan @recurring(yearly)"
                - "List the tools, ties and labour that ran short"
                - "Write the measured shutdown time into the site plan"
            - name: Roof and openings installation inspections
              description: |-
                ## Purpose
                Most hurricane damage starts where the roof meets the walls or where a window or door gives way, and both depend on workmanship the drawings cannot guarantee. Monthly inspections of fixings, straps, nailing patterns and window anchors during the build catch the shortcuts before they are covered up.

                ## Milestones
                1. An inspection checklist for roof straps, fixings, sheathing and window anchors agreed with the engineer.
                2. Hold points set so roof and openings are inspected before being covered.
                3. Photographs of each inspection filed by building and floor.
                4. Every failed item closed out and re-inspected.

                ## Notes
                Ask the engineer to inspect at least the first roof and first window installation in person. The rest of the site copies whatever passes then.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly inspection records with photographs for roof and opening installations, with every failed item closed out before it is covered."
                cadence: rolling
              tasks:
                - "Agree a roof and window installation checklist with the engineer"
                - "Set hold points before roof sheathing and window trims are covered"
                - "Inspect roof fixings and window anchors on site @recurring(monthly:8)"
                - "Close out and re-inspect every failed item"
            - name: Drainage and culvert maintenance routine
              description: |-
                ## Purpose
                Rainfall flooding during a storm often comes from drains blocked by silt, leaves and construction waste rather than from the sea. A simple routine of clearing site drains, culverts and outfalls, with a fuller survey before each season, keeps the drainage design working as it was intended.

                ## Milestones
                1. Every drain, culvert, soakaway and outfall on the site marked on a plan.
                2. A monthly clearing routine assigned to a named person.
                3. A yearly survey of the system before the season.
                4. Blockages and repairs logged with dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A drainage plan with every inlet and outfall marked, a monthly clearing log and a yearly pre-season survey on file."
                cadence: rolling
              tasks:
                - "Mark every drain, culvert and outfall on a site plan"
                - "Clear and check site drains and culverts @recurring(monthly:20)"
                - "Commission a pre-season survey of the drainage system @recurring(yearly)"
                - "Log each blockage found and how it was fixed"
            - name: Insurance renewal and market check cycle
              description: |-
                ## Purpose
                Catastrophe insurance is priced on a global market that can harden sharply after a bad season elsewhere, and renewals left to the last month leave no room to negotiate. Starting each renewal early, with evidence of the resilience features already built, gives the broker something to argue with.

                ## Milestones
                1. Renewal dates for every policy on one list.
                2. Each renewal started at least three months before expiry.
                3. A resilience evidence pack sent to the broker with each renewal.
                4. Premium, deductible and limits compared year on year.

                ## Notes
                Ask the broker whether parametric or layered cover would cut cost on the windstorm part. Insurance choices are for you and your broker; record the advice and the reasons.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A renewal list for all policies with each renewal started three months early and premiums and deductibles compared year on year."
                cadence: cyclic
              tasks:
                - "List every policy with its renewal date and broker"
                - "Start each insurance renewal three months before expiry @recurring(yearly)"
                - "Check market conditions and claims with the broker @recurring(quarterly)"
                - "Compare premium, deductible and limits against last year"
            - name: Resilience evidence file for buyers and lenders
              description: |-
                ## Purpose
                Buyers, valuers and insurers will pay for resilience only if they can see proof of it: test certificates, engineer sign-offs and photographs of what is hidden behind the finishes. A running evidence file, added to monthly during the build, turns that proof into a document you can hand over at sale.

                ## Milestones
                1. A folder structure set up by building and by resilience feature.
                2. Product test certificates for windows, doors and roofing filed.
                3. Engineer sign-offs and inspection photographs added as work progresses.
                4. A short summary page written for buyers and valuers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An evidence file holding test certificates, inspection photographs and sign-offs for every resilience feature, with a one-page summary."
                cadence: rolling
              tasks:
                - "Set up an evidence folder by building and by resilience feature"
                - "Collect test certificates for every window, door and roof product"
                - "File the month's inspection photographs and sign-offs @recurring(monthly:25)"
                - "Write a one-page summary of the evidence for buyers and valuers"
            - name: Post-storm damage assessment protocol
              description: |-
                ## Purpose
                After a storm passes, the first 72 hours decide how fast you recover: who can reach the site, what is safe, and whether the insurer has the evidence it needs. A written protocol for the morning after, with a photo order and a safe entry rule, avoids both injuries and weak claims.

                ## Milestones
                1. A safe entry rule written: no one enters until the engineer or a competent person clears the structure.
                2. A photograph order set: overall views, then each elevation, then close-ups of damage.
                3. Claim notification steps and deadlines from each policy noted.
                4. A contact list for engineer, broker, loss adjuster and contractor checked yearly.

                ## Notes
                Photograph before anything is moved or cleaned up, but never at the cost of safety. Downed power lines and weakened roofs injure people after storms every year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written post-storm protocol with a safe entry rule, photo order, claim steps and a contact list checked each year."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write a safe entry rule for the site after a storm"
                - "Set the order of photographs for an insurance claim"
                - "Note each policy's claim notification deadline"
                - "Re-check the post-storm contact list before the season @recurring(yearly)"
            - name: Pre-season inspection of completed buildings
              description: |-
                ## Purpose
                Once a scheme is finished, resilience slowly erodes: sealants crack, shutters go missing, roof fixings corrode in salt air and drains silt up. An inspection of every completed building you own or manage before each season finds those faults while there is still time to fix them.

                ## Milestones
                1. A pre-season checklist covering roof, openings, shutters, drainage and backup power.
                2. Each completed building inspected and photographed.
                3. Repairs ordered and finished before the peak of the season.
                4. Results shared with owners, the management company or the insurer as needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every completed building inspected before the season, with a repair list closed out before the peak months."
                cadence: cyclic
              tasks:
                - "Write a pre-season checklist for completed buildings"
                - "Book the pre-season inspection of each completed building @recurring(yearly)"
                - "Order repairs found in the inspection and set a finish date"
                - "Send the inspection results to owners or the management company"
            - name: Owner and occupant hurricane manual
              description: |-
                ## Purpose
                Homeowners and tenants decide whether the building's resilience works on the day: shutters left in storage or a generator never tested defeat the best design. A plain manual handed over with each unit explains what to close, store, test and switch off, and who to call.

                ## Milestones
                1. A manual covering shutters, openings, backup power, water storage and drainage for the scheme.
                2. Photographs or diagrams showing how each shutter and system works.
                3. The manual handed to every buyer or tenant at completion.
                4. A pre-season reminder sent to occupants each year.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A hurricane manual delivered to every unit at handover, with a yearly pre-season reminder sent to all occupants."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Photograph each shutter type and how it fits"
                - "Write the manual sections on power, water and drainage"
                - "Hand the manual to every buyer or tenant at completion"
                - "Send occupants the pre-season reminder from the manual @recurring(yearly)"
            - name: Reading wind load calculations as a developer
              description: |-
                ## Purpose
                You do not need to be an engineer, but you do need to read the summary of a wind calculation well enough to spot a low wind speed, a missing exposure factor or an uplift figure that does not match the fixings specified. A few evenings with a worked example and your engineer's calculations make design reviews far more useful.

                ## Milestones
                1. The terms basic wind speed, exposure category, internal pressure and uplift understood.
                2. One worked wind load example followed through from start to finish.
                3. Your scheme's calculation summary read and three questions raised with the engineer.
                4. A one-page glossary saved for future schemes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three specific questions on your own scheme's wind calculations raised with the engineer and answered, plus a one-page glossary saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a published worked example of a wind load calculation"
                - "Write a glossary of the wind loading terms you meet"
                - "Read the calculation summary for your scheme"
                - "Raise three questions on it with the structural engineer"
            - name: How surge, rainfall and river flooding differ
              description: |-
                ## Purpose
                Storm surge, intense rainfall and river flooding arrive differently, last for different lengths of time and call for different defences, and many site plans treat them as one. Understanding each well enough to ask the civil engineer which governs your site changes where money goes.

                ## Milestones
                1. Notes on how surge, rainfall and river flooding each behave and how long each lasts.
                2. Two recent storms in the region studied for which type caused the most damage.
                3. The governing flood type for your site confirmed with the civil engineer.
                4. Defence options matched to that flood type in a short note.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note naming the governing flood type for the site, confirmed by the civil engineer, with matching defence options."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain guide to surge, rainfall and river flooding"
                - "Study two regional storms and which flood type did the damage"
                - "Ask the civil engineer which flood type governs your site"
                - "Write a note matching defences to the governing flood type"
            - name: Impact-rated windows and doors explained
              description: |-
                ## Purpose
                A window labelled hurricane resistant may have passed a missile impact test, a pressure cycling test, both or neither, and the label alone rarely says which. Learning how openings are tested and certified lets you read a product approval or test report and tell whether it covers the wind pressures on your building.

                ## Milestones
                1. The difference between impact testing and cyclic pressure testing understood.
                2. The main test standards and product approval schemes used in the region listed.
                3. A real product approval document read and its pressure rating noted.
                4. That rating compared with the design pressures for your building.

                ## Notes
                Installation matters as much as the product. A tested window fixed with the wrong anchors or into weak blockwork has not been tested at all.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real product approval read, with its rated pressure compared in writing against your building's design pressures."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Learn the difference between impact and cyclic pressure tests"
                - "List the test standards suppliers in your market quote"
                - "Read one product approval document in full"
                - "Compare its pressure rating with your building's design pressures"
            - name: Roof failure modes and the load path
              description: |-
                ## Purpose
                Roofs fail in predictable ways: edges and corners peel first, then sheathing lifts, then the whole roof leaves the walls if the straps and ties are not continuous to the foundation. Learning the load path from roof to ground helps you see why small items like ridge fixings and strap nails decide whether a building survives.

                ## Milestones
                1. The continuous load path from roof covering to foundation sketched in your own words.
                2. The edge, corner and ridge zones and why they see higher uplift understood.
                3. Photographs from one post-storm survey matched to the failure modes.
                4. Your scheme's roof details checked at each link of the load path.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sketch of the load path for your building, with each link checked against the roof details on the drawings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the load path from roof covering down to the foundation"
                - "Mark the corner, edge and ridge zones on your roof plan"
                - "Match photographs from a post-storm survey to each failure mode"
                - "Check each link of the load path on your scheme's roof details"
            - name: Catastrophe insurance terms for developers
              description: |-
                ## Purpose
                Named windstorm deductibles set as a percentage of the sum insured, flood exclusions, builder's risk cover and parametric policies each change who pays after a storm, and a premium figure on its own says little. Learning the vocabulary lets you read a quote properly and ask your broker the right questions.

                ## Milestones
                1. Notes on named windstorm deductibles, flood cover, builder's risk and business interruption.
                2. The difference between indemnity and parametric cover understood.
                3. One real quote read line by line with the questions it raises listed.
                4. Those questions answered by your broker and the answers recorded.

                ## Notes
                A percentage deductible on a large sum insured can be a very large cash amount. Work out the actual figure for your scheme.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A quote annotated line by line, with the windstorm deductible worked out in cash and the broker's answers to your questions recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write short notes on each main catastrophe insurance term"
                - "Work out the windstorm deductible on your scheme as a cash figure"
                - "Annotate one real quote with the questions it raises"
                - "Record the broker's answer to each question"
            - name: Lessons from post-hurricane damage reports
              description: |-
                ## Purpose
                Engineering bodies and insurers publish detailed surveys after major hurricanes showing exactly which details failed and which held. Reading one report a quarter, and noting what applies to your schemes, builds a library of lessons learned on other people's buildings.

                ## Milestones
                1. A reading list of post-storm damage reports from the region and similar coasts.
                2. One report read each quarter with lessons noted.
                3. Lessons that apply to your current scheme passed to the design team.
                4. A running lessons file kept for future briefs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lessons file with notes from at least four post-storm damage reports, and relevant lessons sent to the current design team."
                cadence: rolling
              tasks:
                - "Build a reading list of post-storm damage surveys"
                - "Read one damage report and note its lessons @recurring(quarterly)"
                - "Send lessons that apply to the current scheme to the design team"
                - "Keep a running lessons file to use in future briefs"
            - name: Resilience rating schemes for buildings
              description: |-
                ## Purpose
                Voluntary resilience standards, such as programmes that certify roofs and openings beyond code, can lower insurance costs in some markets and give buyers something independent to trust. Researching which schemes exist, which insurers and lenders recognise them and what they cost tells you whether one is worth pursuing.

                ## Milestones
                1. The resilience rating schemes available to your market listed.
                2. Insurers and lenders asked which they recognise and what discount, if any, applies.
                3. Cost and evidence requirements of the most relevant scheme set out.
                4. A decision recorded on whether to pursue one for the current scheme.

                ## Notes
                These are separate from green building ratings. A scheme can carry both, but the evidence and assessors are different.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on pursuing a resilience rating, based on recognition by at least one insurer or lender and a cost estimate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the resilience rating schemes open to buildings in your market"
                - "Ask your broker which ratings insurers in the market recognise"
                - "Set out the cost and evidence required for the best candidate"
                - "Record whether the scheme will pursue a rating and why"
            - name: Roof system choice for high wind
              description: |-
                ## Purpose
                Concrete slab, hip roofs with metal sheeting, standing seam and tiled roofs perform very differently in hurricanes and differ just as much in cost, weight and maintenance. Comparing the realistic options on wind performance, cost, insurer view and the look buyers expect leads to a choice you can defend to partners and buyers.

                ## Milestones
                1. Three roof systems shortlisted with the structural engineer.
                2. Each scored on wind performance, cost, weight, maintenance and insurer view.
                3. Roof shape considered, including hip versus gable and overhang depth.
                4. A roof system chosen and the reason recorded.

                ## Notes
                Start from the **Purchase decision** template. Hip roofs with short overhangs generally see lower uplift than gables with wide eaves; ask the engineer to confirm for your design.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A roof system chosen from three scored options, with wind performance, cost and insurer view recorded in a decision note."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three roof systems with the structural engineer"
                - "Score each option on wind, cost, weight and maintenance"
                - "Ask the broker how insurers view each roof type"
                - "Write the decision note with the chosen roof and reason"
            - name: Shutters versus impact glazing decision
              description: |-
                ## Purpose
                Impact glazing protects every opening without anyone being on site, while shutters cost less to buy but depend on someone fitting them before each storm. The right answer differs for holiday homes, rental blocks and owner-occupied houses, so comparing them for the way your units will be used saves either cost or damage.

                ## Milestones
                1. The occupancy pattern of the scheme described: absent owners, tenants, or full-time residents.
                2. Impact glazing and two shutter types costed for the whole scheme.
                3. Who fits shutters, how long it takes and who pays considered.
                4. A choice made per building type and recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of impact glazing or shutter type for each building type, with costs and the fitting plan written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe how the units will be occupied during the season"
                - "Get prices for impact glazing and two shutter types"
                - "Time how long it takes to fit shutters on one sample unit"
                - "Record the choice for each building type"
            - name: Elevate, floodproof or move the footprint
              description: |-
                ## Purpose
                When a site sits low, there are three broad answers: raise the building, design the ground floor to let water through or keep it out, or move the footprint to higher ground on the plot. Each changes cost, planning, access and sales very differently, so a deliberate comparison is worth doing before the layout is fixed.

                ## Milestones
                1. The three options sketched for the site by the architect.
                2. Cost, saleable area, access and planning impact compared for each.
                3. The insurer's and lender's view of each option recorded.
                4. One option chosen and fed into the layout.

                ## Notes
                Wet floodproofing, where water is allowed in and drains out, suits parking and storage. Dry floodproofing of living space is hard to make reliable.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One flood response chosen from three sketched options, with cost, area and insurer view compared in a decision note."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the architect to sketch elevate, floodproof and relocate options"
                - "Compare cost and saleable area for each option"
                - "Ask the broker and lender how they view each one"
                - "Feed the chosen option into the site layout"
            - name: Backup power and water storage choice
              description: |-
                ## Purpose
                After a major storm, mains power and water can be out for weeks, and buildings with their own supply become the ones people want to buy and rent. Choosing between generators, solar with batteries, cisterns and tanks, sized to a target number of days, turns recovery time into a feature.

                ## Milestones
                1. A target number of days of independent power and water set.
                2. Essential loads listed: lighting, refrigeration, water pumps, communications.
                3. Generator, solar with battery and hybrid options costed.
                4. Water storage sized and located above flood level.
                5. A system chosen with its maintenance needs recorded.

                ## Notes
                Fuel storage, exhaust and noise rules apply to generators. Ask the services engineer and the fire authority before fixing a location.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen backup power and water system sized to a stated number of days, with costs and maintenance recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a target number of days without mains power and water"
                - "List the essential loads the backup must carry"
                - "Get costs for generator, solar with battery and hybrid options"
                - "Size water storage and place it above the flood level"
            - name: Structural frame choice for wind and water
              description: |-
                ## Purpose
                Reinforced concrete and blockwork dominate many Caribbean markets for good reason, but light steel and engineered timber can be faster and cheaper if they are detailed for uplift and salt air. A side-by-side comparison of frame types for your scheme, with local contractor skills in mind, keeps the choice from being habit alone.

                ## Milestones
                1. Two or three frame types compared on wind and flood performance.
                2. Cost, programme, corrosion protection and local skills weighed.
                3. The insurer's view of each frame type recorded.
                4. A frame chosen and the reason given to the design team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A frame type chosen from at least two compared options, with performance, cost and local skills set out in a decision note."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the engineer to compare two or three frame types for the scheme"
                - "Check which frame types local contractors build well"
                - "Note corrosion protection needs for salt air on each option"
                - "Give the chosen frame and reason to the design team"
            - name: Value engineering guardrails for resilience items
              description: |-
                ## Purpose
                When tenders come in over budget, the easiest savings look like cheaper windows, fewer straps and thinner roof sheeting, which are exactly the items storms test. A short list of resilience items that cannot be value engineered without your sign-off protects them when cost pressure peaks.

                ## Milestones
                1. A protected list of resilience items written and agreed with partners.
                2. The list included in tender documents and the contractor's appointment.
                3. A sign-off rule set for any proposed substitution on the list.
                4. Each proposed substitution checked by the engineer before approval.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A protected list of resilience items written into tender documents, with every substitution signed off by the engineer and you."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the list of resilience items that cannot be swapped freely"
                - "Add the protected list to the tender documents"
                - "Set a rule that substitutions need engineer and sponsor sign-off"
                - "Check each proposed substitution against the wind design basis"
            - name: Contractor selection weighted for storm workmanship
              description: |-
                ## Purpose
                Two contractors with the same price can deliver very different buildings in a hurricane, because roof fixing and window installation depend on supervision and crew habits. Weighting tender scoring for storm-relevant workmanship and asking to see their past buildings after a storm puts that difference into the decision.

                ## Milestones
                1. A scoring sheet giving real weight to roof and opening workmanship.
                2. Each shortlisted contractor's buildings visited, ideally ones that have been through a storm.
                3. Their site season plan from a past project reviewed.
                4. A contractor chosen with the scores recorded.

                ## Notes
                Start from the **Vendor** template. Ask what each contractor did on site during the last storm watch. The answer tells you a lot.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A contractor chosen using a scoring sheet weighted for storm workmanship, with site visits and past season plans recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Add storm workmanship weighting to the tender scoring sheet"
                - "Visit buildings each contractor finished that went through a storm"
                - "Ask each contractor for a season plan from a past project"
                - "Record the final scores and the chosen contractor"
            - name: Nature-based defences on the site
              description: |-
                ## Purpose
                Mangroves, dunes, reefs, coastal setbacks and planted retention areas can soften surge and rainfall flooding at lower cost than walls, and they often help with environmental approvals. Working out which natural defences the site already has, and which you could keep or add, adds a layer of protection that grows stronger over time.

                ## Milestones
                1. Existing natural features such as mangroves, dunes and vegetation mapped.
                2. A coastal or ecological specialist asked which to keep and which to add.
                3. Retention areas or swales placed on the site plan.
                4. A planting and protection plan with a named person responsible.

                ## Notes
                Clearing mangroves or dunes for views is a common mistake that raises flood risk and can breach environmental rules. Check before any clearance.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A site plan showing retained and new natural defences, with a planting and protection plan assigned to a named person."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map the mangroves, dunes and vegetation on and near the site"
                - "Ask a coastal specialist which features to keep and add"
                - "Place retention areas and swales on the site plan"
                - "Check new planting and natural defences are establishing @recurring(quarterly)"
            - name: Build programme timed around the hurricane season
              description: |-
                ## Purpose
                Starting on site in the wrong month can leave foundations open to rain or a roof unfinished at the peak of the season. Working the programme back from the season so that the riskiest stages fall in the drier, quieter months reduces both storm exposure and insurance cost.

                ## Milestones
                1. The local season dates and peak months marked on the programme.
                2. Excavation, roofing and glazing stages placed outside the peak where possible.
                3. Float added for storm watches and lost days.
                4. The timed programme agreed with the contractor and lender.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A programme with season dates marked, risky stages outside peak months where possible, and storm float agreed with contractor and lender."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark the season dates and peak months on the draft programme"
                - "Move roofing and glazing stages out of the peak where possible"
                - "Add float days for storm watches and recovery"
                - "Agree the timed programme with the contractor and lender"
            - name: Dry-in before the season deadline
              description: |-
                ## Purpose
                A building that has its roof on and openings closed before the season peaks can ride out a storm with modest damage, while an open shell can lose months of work. Treating dry-in as a dated milestone with its own tracking keeps everyone focused on the one date that matters most for storm risk.

                ## Milestones
                1. A target dry-in date set before the peak of the season.
                2. Roofing and window deliveries confirmed against that date.
                3. Weekly progress toward dry-in reported by the contractor.
                4. Dry-in reached and recorded with photographs.

                ## Notes
                Order long-lead impact windows early. Late window deliveries are the most common reason dry-in slips into the peak months.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Roof and all openings closed before the peak season date, recorded with dated photographs."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set the target dry-in date with the contractor"
                - "Confirm roofing and window delivery dates against it"
                - "Ask the contractor for a weekly dry-in progress line"
                - "Photograph and record the day dry-in is reached"
            - name: Pre-season lender and insurer site visit
              description: |-
                ## Purpose
                Lenders and insurers worry most about construction sites just before the season, and a visit where they see the site plan, tie-downs and drainage for themselves builds confidence that a report alone cannot. Hosting one visit each year before the season can ease drawdowns and renewals.

                ## Milestones
                1. A visit date agreed with the lender's monitoring surveyor and the insurer or broker.
                2. The site prepared to show the season plan in action.
                3. Questions raised during the visit answered in writing within a week.
                4. A short visit note filed with the project records.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-season site visit held with the lender's surveyor and insurer, with written answers to their questions sent within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Invite the monitoring surveyor and broker to a pre-season visit"
                - "Prepare the site to show tie-downs, storage and drainage"
                - "Answer every question raised in writing within a week"
                - "File a short note of the visit with project records"
            - name: Recovery after a named storm hits the site
              description: |-
                ## Purpose
                When a storm does strike, the order of the first few weeks decides cost and programme: safety, evidence, insurer notice, temporary protection, then repair. Running the recovery as a project of its own, with daily priorities and a cost log, keeps claims strong and the lender informed.

                ## Milestones
                1. The site made safe and the structure checked by the engineer.
                2. The insurer notified within the policy deadline with photographs.
                3. Temporary protection in place to stop further damage.
                4. A recovery programme and cost log shared with the lender.
                5. The claim settled and repairs signed off.

                ## Notes
                Keep every receipt for emergency work. Most policies cover reasonable steps to prevent further damage, but only with evidence.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Site made safe, insurer notified on time, temporary protection fitted and a recovery programme shared with the lender."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Ask the engineer to check the structure before anyone works on it"
                - "Notify the insurer with dated photographs within the deadline"
                - "Fit temporary protection to stop further water damage"
                - "Share a recovery programme and cost log with the lender"
            - name: Resilience story in the sales launch
              description: |-
                ## Purpose
                Buyers in hurricane regions ask about storms, but most marketing hides the subject and leaves sales agents guessing. Building the sales launch around clear, checkable resilience features, such as raised floors, tested windows and days of backup power, gives agents real answers and buyers a reason to choose your scheme.

                ## Milestones
                1. Three to five resilience features chosen that buyers can understand and verify.
                2. Plain sales wording written for each, with the evidence behind it.
                3. Sales agents briefed and given the evidence summary.
                4. Buyer questions on storms logged during the launch.

                ## Notes
                Never claim a building is hurricane proof. Say what it was designed and tested for, and let the evidence speak.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A launch pack with three to five evidenced resilience features, briefed to every sales agent, with buyer storm questions logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three to five resilience features buyers can verify"
                - "Write plain sales wording backed by the evidence file"
                - "Brief the sales agents on what to say and not say"
                - "Log every storm question buyers ask during the launch"
            - name: First coastal scheme for a small developer
              description: |-
                ## Purpose
                Founders moving from inland houses to a first coastal or island scheme often carry their old cost plan and contractor across unchanged. Setting out what changes, from wind basis and floor levels to insurance and season timing, before committing to land keeps the first scheme from becoming an expensive lesson.

                ## Milestones
                1. A list of what differs from your inland schemes for design, cost, programme and insurance.
                2. Two experienced coastal developers or consultants asked what they wish they had known.
                3. A contingency for storm-related cost and delay set in the appraisal.
                4. A go or no-go decision on the first coastal site recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written go or no-go decision on the first coastal site, with storm contingency set and advice from two experienced people recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List what changes from your inland schemes on a coastal site"
                - "Ask two coastal developers what they wish they had known"
                - "Set a storm cost and delay contingency in the appraisal"
                - "Record the go or no-go decision on the first coastal site"
            - name: Retrofitting an acquired building for storms
              description: |-
                ## Purpose
                Buying an older building in a hurricane zone often means inheriting weak roof connections, unprotected windows and plant at ground level. A retrofit plan that ranks upgrades by risk reduction per unit of cost lets you spend the first budget where it saves the most, and can bring insurance savings within a season or two.

                ## Milestones
                1. A resilience survey of the building by an engineer.
                2. Upgrades listed and ranked by risk reduction against cost.
                3. Insurance savings for the top upgrades checked with the broker.
                4. A phased retrofit programme fitted around occupants and the season.

                ## Notes
                Roof to wall connections and opening protection usually give the biggest gain for the money. Ask the engineer to confirm for your building.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked and phased retrofit programme based on an engineer's survey, with insurance savings for the top upgrades confirmed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Commission an engineer's resilience survey of the building"
                - "Rank each upgrade by risk reduction against cost"
                - "Ask the broker what the top three upgrades would save"
                - "Phase the retrofit around occupants and the season"
            - name: Condominium scheme storm obligations
              description: |-
                ## Purpose
                In a strata or condominium scheme, owners share roofs, facades and common systems, so the declaration and rules decide who fits shutters, who insures what and how storm repairs are paid. Setting those terms clearly as the developer, with your lawyer, avoids years of disputes after the first storm.

                ## Milestones
                1. Responsibility for roofs, openings, shutters and common systems set out in the scheme documents.
                2. Building insurance and deductible arrangements for the owners' body described.
                3. A storm reserve or contingency line set in the first service charge budget.
                4. The draft terms reviewed by your lawyer before sales begin.

                ## Notes
                Legal drafting and the rules for owners' bodies vary by jurisdiction. These are questions for your lawyer, not decisions to make alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Scheme documents assigning storm responsibilities, insurance and a storm reserve line, reviewed by your lawyer before sales begin."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List who is responsible for roofs, openings and shutters"
                - "Describe how building insurance and deductibles are shared"
                - "Ask your lawyer to review the storm terms before sales"
                - "Review the storm reserve line with the owners' board @recurring(yearly)"
            - name: Disclosing storm risk to investors
              description: |-
                ## Purpose
                Investors in a coastal scheme need a clear view of storm risk, insurance and what happens to their money after damage, and vague wording can create legal and relationship trouble later. A clear storm risk section in the offering materials and regular season updates keep expectations honest.

                ## Milestones
                1. A storm and flood risk section drafted for the offering materials.
                2. Insurance cover, deductibles and uninsured risks described plainly.
                3. The wording reviewed by your lawyer.
                4. Season status included in every quarterly investor update.

                ## Notes
                What must be disclosed to investors depends on securities rules where you raise money. Take that question to your lawyer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-reviewed storm risk section in the offering materials, and season status included in every quarterly investor update."
                cadence: rolling
              tasks:
                - "Draft a plain storm and flood risk section for the offering"
                - "Describe the deductible and any uninsured storm risk"
                - "Ask your lawyer to review the storm risk wording"
                - "Include season status in the quarterly investor update @recurring(quarterly)"
            - name: Rebuilding a storm-damaged scheme better
              description: |-
                ## Purpose
                After serious damage, the pressure is to put things back as they were, but a rebuild is the cheapest moment to raise floors, change roofs and fit impact openings. Planning the rebuild with an upgrade list and checking what the insurer will pay toward it means you come out stronger.

                ## Milestones
                1. The causes of the damage set out by the engineer.
                2. An upgrade list for the rebuild costed.
                3. The insurer's position on upgrades and code upgrade cover confirmed.
                4. A rebuild scope agreed that includes the upgrades that pay back.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed rebuild scope including costed upgrades, with the insurer's position on upgrade cover confirmed in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the engineer for a written account of why the damage happened"
                - "Cost an upgrade list for the rebuild"
                - "Ask the insurer what the policy pays toward code upgrades"
                - "Agree a rebuild scope with the upgrades that pay back"
            - name: Storm-ready house type for a small builder
              description: |-
                ## Purpose
                Small builders who repeat one or two house types can turn resilience into a product: a standard design with tested openings, a strapped roof and raised floors, sold at a known price. Developing one storm-ready house type with your engineer cuts design cost on every plot and gives buyers a clear offer.

                ## Milestones
                1. One house type redesigned to your resilience brief with the engineer.
                2. Standard details for roof, openings and floor levels drawn once.
                3. A fixed price and specification sheet prepared.
                4. The house type built on a first plot and the lessons recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A storm-ready house type with standard details, a fixed price and specification sheet, built on a first plot with lessons recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the house type you build most often"
                - "Redesign it to your resilience brief with the engineer"
                - "Prepare a fixed price and specification sheet"
                - "Record lessons from building it on the first plot"
            - name: Evidence of a resilience premium for valuers
              description: |-
                ## Purpose
                Valuers and buyers will reflect resilience in price only when there is market evidence that it matters, such as faster resales after storms or lower running costs. Gathering that evidence for your market, and presenting it to the valuer before they visit, can move a valuation that would otherwise ignore the features.

                ## Milestones
                1. Resale and rental evidence for resilient and ordinary buildings gathered from agents.
                2. Insurance and running cost differences quantified.
                3. A short evidence note prepared for the valuer.
                4. The valuer's response and any effect on value recorded.

                ## Notes
                Value is the valuer's professional judgement. Your job is to supply evidence, not to press for a figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An evidence note on resilience and value shared with the valuer, with their response recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask three agents about resale times for resilient buildings after storms"
                - "Quantify the insurance and running cost differences"
                - "Prepare a short evidence note for the valuer"
                - "Record the valuer's response to the evidence"
            - name: Parametric cover for a portfolio
              description: |-
                ## Purpose
                Parametric policies pay a set amount when a measured event happens, such as wind speed or storm track within a set distance, which gives fast cash for deductibles and recovery. For a developer with several sites, a parametric layer alongside traditional cover can fill gaps that indemnity policies leave.

                ## Milestones
                1. The gaps in current cover listed, such as deductibles and business interruption.
                2. Parametric options described by a broker, with their triggers.
                3. Basis risk, where the trigger and the actual loss do not match, understood and noted.
                4. A decision recorded on whether to add a parametric layer.

                ## Notes
                Governments in the region already use parametric cover through regional schemes, which can be useful reading. Insurance choices remain for you and your broker.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on adding parametric cover, with triggers, cost and basis risk set out by a broker."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the gaps your current policies leave after a storm"
                - "Ask a broker to describe parametric options and triggers"
                - "Note the basis risk for each trigger offered"
                - "Record whether to add a parametric layer"
            - name: Climate stress test of the development pipeline
              description: |-
                ## Purpose
                Rising sea levels and changing storm patterns mean a site that is safe today may flood regularly within the life of the building or the loan. Running each site in the pipeline against published sea level and storm scenarios for the coming decades shows which schemes need higher floors, a different use or a pass.

                ## Milestones
                1. Published sea level and storm scenarios chosen for the stress test.
                2. Each pipeline site checked against those scenarios at two future dates.
                3. Sites flagged where future flood levels exceed planned floor levels.
                4. Actions recorded for each flagged site.

                ## Notes
                Use published scenarios from recognised scientific bodies, and note which one you used so results can be compared year to year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every pipeline site tested against published scenarios at two future dates, with flagged sites and actions recorded."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Choose published sea level and storm scenarios to test against"
                - "Check each pipeline site's floor levels against two future dates"
                - "Flag sites where future flood levels exceed planned floors"
                - "Rerun the climate stress test across the pipeline @recurring(yearly)"
            - name: Resilience-linked finance from development lenders
              description: |-
                ## Purpose
                Development banks, some commercial lenders and climate funds offer better terms or grants for schemes that meet resilience and adaptation criteria. Finding out which programmes apply to your market and what evidence they need can bring cheaper money into the capital stack.

                ## Milestones
                1. Development banks, climate funds and lenders with resilience programmes listed for your market.
                2. Eligibility criteria and evidence requirements noted for each.
                3. One conversation held with the most promising programme.
                4. A decision recorded on whether to apply.

                ## Notes
                Terms and eligibility change often. Confirm every figure directly with the lender, and take any finance structuring to your adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of resilience finance programmes for your market, one conversation held and a decision on applying recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List development banks and funds with resilience programmes in your market"
                - "Note eligibility and evidence needs for each programme"
                - "Hold a call with the most promising programme"
                - "Record whether to apply and what it would take"
            - name: Portfolio hurricane exposure tracker
              description: |-
                ## Purpose
                A developer with several sites and completed buildings needs to see storm exposure in one place: where each asset sits, what it is insured for, its deductible and its floor level against flood level. A quarterly tracker of those figures shows where one storm could hit several assets at once.

                ## Milestones
                1. Every site and building listed with location, insured value and deductible.
                2. Flood level gap and wind design basis recorded for each.
                3. Assets within the same likely storm path grouped.
                4. The tracker updated quarterly and shared with partners.

                ## Notes
                Start from the **Metrics log** template. The figure that matters most is total deductibles in one storm path, because that is the cash you would need at once.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly tracker of every asset's insured value, deductible and flood gap, with total deductible per storm path shown."
                cadence: rolling
              tasks:
                - "List every site and building with insured value and deductible"
                - "Add flood level gap and wind design basis for each asset"
                - "Group assets that one storm path could hit together"
                - "Update the exposure tracker and share it with partners @recurring(quarterly)"
---

# Hurricane-Resilient Development

Hurricane-resilient development is the work of building schemes that stay standing, dry and insurable through the storms and floods of the region they sit in, and of paying for that resilience without breaking the appraisal. It is written for founders and small developers working on coastal and island sites, who carry the risk personally and cannot afford a scheme that is uninsurable or unsellable after the first big season. The projects run from the foundations (exposure mapping, the wind and flood design basis, floor levels, the brief and early insurance quotes), through the operating machinery for design reviews, site season plans and inspections, the knowledge a developer needs to question engineers and brokers, the big design and procurement choices, the dated events of a build around the season, situations such as a first coastal scheme, a retrofit or a rebuild, and finally the specialist work on value evidence, catastrophe cover, climate stress tests and portfolio exposure.

What repeats is a weekly look at the outlook during the season, monthly design and site inspections, monthly drain clearing and evidence filing, a quarterly broker check and investor update, and a yearly cycle of plan refreshes, shutdown drills, pre-season inspections and insurance renewals. Risk register suits the hurricane risk log, Meeting notes suits design reviews, Operational checklist suits the site season plan, Purchase decision suits the roof choice, Vendor suits contractor selection and Metrics log suits portfolio exposure. Design standards, insurance terms and finance are for your engineer, broker and lawyer to confirm; these projects organise the questions and the evidence. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
