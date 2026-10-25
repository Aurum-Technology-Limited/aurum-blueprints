---
id: real-estate-development.caribbean-land-subdivision-projects
name: Caribbean Land Subdivision Projects
description: "A lot count brief, surveys and a constraint map, subdivision approval, roads, drains, water and power, a cost-to-complete routine, lot sales and separate titles for every lot."
category: business
version: 1.0.0
tags: [real-estate-development, caribbean-land-subdivision-projects, founder, small-business, caribbean, subdivision, serviced-lots, infrastructure]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - vendor
    - marketing-campaign
    - risk-register
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Caribbean Land Subdivision Projects
          description: "Turning a parcel into serviced lots in the Caribbean: surveys, subdivision approval, roads, drainage, water and power connections, and selling the lots."
          projects:
            - name: Lot count and target buyer brief for the parcel
              description: |-
                ## Purpose
                Before paying a surveyor or engineer, write down what you think the parcel becomes: how many lots, what size, for whom and at roughly what price. A ten-acre parcel can be forty quarter-acre house lots for local first-time buyers or twelve larger view lots for returning nationals, and the two need different roads, services and sales plans. One page now stops consultants designing a scheme you cannot sell.

                ## Milestones
                1. A one-page brief stating gross parcel area, target lot sizes and an indicative lot count range.
                2. The target buyer described in two sentences, with the price band they can realistically pay or borrow.
                3. Serviced or unserviced sale intention recorded, with the services you expect to provide.
                4. Three deal-breakers listed that would make you stop, such as no legal access or a slope over a set limit.
                5. The brief shared with any partner or co-owner and their agreement noted.

                ## Notes
                Gross area is not saleable area. Roads, drains, reserves and open space commonly take a quarter to a third of the parcel, so start your lot count from the net figure.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief with net saleable area, lot count range, target buyer and price band, agreed in writing by every co-owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the gross parcel area and your first guess at lot sizes on one page"
                - "Deduct a quarter to a third for roads and reserves to get a net saleable area"
                - "Ask two local realtors what lot sizes and prices are moving in the district"
                - "Share the brief with every co-owner and record their agreement"
            - name: Boundary and topographic survey commission
              description: |-
                ## Purpose
                Every later drawing, from the layout plan to the drain levels, sits on the survey, so a cheap or partial one costs far more later. A commissioned land surveyor fixes the true boundary against the deed or title plan, and a topographic survey shows the levels, watercourses, trees and structures your engineer must design around. Order both together so the field crew walks the land once.

                ## Milestones
                1. A licensed or commissioned land surveyor appointed with a written scope and fee.
                2. Boundary survey completed with markers checked or replaced at every corner.
                3. Topographic survey delivered with spot levels and contours at an interval your engineer agreed.
                4. Any difference between the surveyed area and the deed area explained in writing.
                5. Digital survey files received in a format the engineer and planner can use.

                ## Notes
                Ask the engineer to specify the contour interval and the features to pick up before the surveyor quotes. Re-surveying because a gully or a neighbour's wall was missed is a common delay.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed boundary survey and a topographic survey in digital form are on file, with any area discrepancy explained by the surveyor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the civil engineer which contour interval and features the topo survey must show"
                - "Get written quotes from two licensed land surveyors for boundary and topo work"
                - "Walk the corners with the surveyor and photograph each boundary marker"
                - "Request the survey in CAD format as well as the signed paper plan"
            - name: Owner and mortgagee consents for subdivision
              description: |-
                ## Purpose
                Subdivision authorities usually want proof that everyone with an interest in the land agrees to it being cut up, and a bank holding a mortgage over the whole parcel will have its own conditions for releasing individual lots. Sorting these consents early, with your attorney, avoids an approval you cannot use and lot sales that cannot complete. It assumes the title itself has already been checked.

                ## Milestones
                1. A list of every registered owner, co-owner and charge holder confirmed by your attorney.
                2. Signed owner consents in the form the subdivision authority requires.
                3. The mortgagee's written terms for releasing individual lots from the charge, including any release price per lot.
                4. A note of any caveat, lease or right of way that the layout must respect.

                ## Notes
                Lot release prices set by a lender can wipe out the margin on early sales. Negotiate them before the first agreement for sale, not after.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed consents from every owner and written lot release terms from any mortgagee are on the project file before the application is lodged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your attorney for a list of every owner and charge holder on the title"
                - "Get the consent form or wording the subdivision authority accepts"
                - "Write to the mortgagee asking for its partial release terms per lot"
                - "File every signed consent in one folder named for the application"
            - name: Land use zoning and agricultural status check
              description: |-
                ## Purpose
                Many Caribbean parcels offered for subdivision are zoned or classed as agricultural, and some jurisdictions protect prime farmland or require a change of use before house lots are approved. Finding out the current land use designation, any development plan for the area and whether a conversion is needed takes a few visits or calls and decides whether the scheme is a year away or five.

                ## Milestones
                1. The parcel's land use designation in the current development plan or zoning map recorded.
                2. Any agricultural protection, forest reserve or watershed designation noted.
                3. Whether a change of use or rezoning is needed before subdivision written down, with the route.
                4. A rough timeline for that route from the planning office or your planner.

                ## Notes
                Ask for the designation in writing where you can. A verbal yes at the counter is not something you can rely on when you buy or borrow.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of the parcel's land use designation, any protection on it and the change of use route if one is needed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the development plan or zoning map that covers the parcel"
                - "Ask the planning office whether residential subdivision is permitted there"
                - "Check whether the land sits in a watershed, forest or agricultural reserve"
                - "Write down the change of use route and its likely timeline"
            - name: Subdivision standards summary for your jurisdiction
              description: |-
                ## Purpose
                Minimum lot sizes, road reserve widths, open space dedications, drain standards and whether the developer must build roads to adoption standard all differ between islands and even between local authorities. A two-page summary of the rules that apply to your parcel, from the regulations and the planning office, is what you design and price against. Without it you will redraw the layout after the first refusal.

                ## Milestones
                1. The current subdivision regulations or planning standards obtained from the official source.
                2. A two-page summary covering minimum lot size and frontage, road reserve and carriageway widths, and open space.
                3. Drainage, water and power standards the developer must meet listed.
                4. Which works the authority expects you to build before lots can be sold, and which can be bonded, noted.
                5. The summary checked with your planner or engineer.

                ## Notes
                Some authorities let you sell lots before roads are finished if you lodge a bond or guarantee. Find out early, because it changes your cash flow completely.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page standards summary, sourced from the current regulations and checked by your planner, is saved with the project file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get the current subdivision regulations from the planning authority"
                - "Note minimum lot size, frontage, road reserve and open space rules"
                - "Ask whether infrastructure can be bonded so lots sell before completion"
                - "Have your planner mark anything you misread or missed"
                - "Check for amended regulations or new planning standards @recurring(yearly)"
            - name: Infrastructure cost per lot first pass
              description: |-
                ## Purpose
                Roads, drains, water mains and power lines are where subdivision margins disappear, and a scheme that looks rich at land value can lose money once infrastructure is spread across the lots. A rough cost per lot from your engineer or a quantity surveyor, using road length and recent rates, tells you within weeks whether the parcel is worth designing properly.

                ## Milestones
                1. Total road length and drain length measured from a sketch layout.
                2. Rates per metre or per item gathered for road, drain, water main and power works.
                3. A first-pass infrastructure total, with a contingency of at least fifteen percent shown separately.
                4. Infrastructure cost per saleable lot calculated and compared with the target lot price.

                ## Notes
                Road length per lot is the single biggest driver. Long frontage lots on a single loop road can cost far more to service than a tighter layout with a cul-de-sac.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A first-pass infrastructure estimate with contingency, expressed as a cost per lot and set against the target lot price."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the road and drain lengths on the sketch layout"
                - "Ask the engineer for recent per-metre rates for roads, drains and mains"
                - "Add a separate contingency line of at least fifteen percent"
                - "Divide the total by the net lot count and compare it with the lot price"
            - name: Subdivision feasibility and lot pricing model
              description: |-
                ## Purpose
                Modelling land cost, consultant fees, approvals, infrastructure, finance, sales costs and lot revenue, phased over the two to four years a subdivision really takes, is how you decide whether to proceed and how much you can pay for land. It also shows how many lots must sell before the cash turns positive, which is the number your lender and partners will ask for first.

                ## Milestones
                1. A spreadsheet with every cost line, lot revenue by lot type and a month-by-month cash flow.
                2. Lot prices supported by at least three recent comparable lot sales in the district.
                3. Profit on cost and peak cash need calculated for the base case.
                4. Sensitivities run for slower sales, a ten percent price cut and a twenty percent infrastructure overrun.
                5. A proceed, renegotiate or walk away decision recorded with the reasons.

                ## Notes
                Lot sales in many Caribbean markets are slow and paid in instalments. Model the cash as it arrives, not the agreement price on signing.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A phased feasibility model with three sensitivities and a recorded go or no-go decision, shared with any partner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every cost line from land to sales commissions in one sheet"
                - "Collect three recent lot sale prices in the district from realtors or valuers"
                - "Model a sales pace and instalment pattern based on local experience"
                - "Run slow sales, price cut and cost overrun cases side by side"
                - "Record the go or no-go decision and the numbers behind it"
            - name: Infrastructure funding and cash plan
              description: |-
                ## Purpose
                Few lenders in the region fund a raw subdivision the way they fund a building, so the infrastructure phase is often paid from equity, early lot deposits, a partner or a staged facility. Mapping where each dollar of road and drain work comes from, and when, avoids the common stall where half the roads are built and the money stops until more lots sell.

                ## Milestones
                1. Peak cash need from the feasibility model confirmed.
                2. Sources listed with amounts and timing: own equity, partner money, lender facility, buyer deposits.
                3. Conversations held with at least two banks or credit unions about lot-development finance.
                4. A phasing or bonding fallback written down in case one source does not arrive.
                5. The funding plan agreed with any partner.

                ## Notes
                Deposits from off-plan lot buyers may need to be held by an attorney until conditions are met. Ask before you count them as working capital.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written funding plan covering peak cash need, with named sources, timing and a fallback, agreed by every partner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Take the peak cash figure from the feasibility model"
                - "Book meetings with two lenders that finance lot developments"
                - "Ask your attorney how buyer deposits must be held before completion"
                - "Write a fallback plan using phasing or a smaller first release"
            - name: Subdivision consultant team appointments
              description: |-
                ## Purpose
                Compared with a building, a subdivision needs a smaller team, but the roles must be covered: land surveyor, civil engineer for roads and drains, a planner or architect to prepare the layout, an attorney for consents and lot sales, and someone pricing the works. Appointing them with written scopes means no one assumes another is doing the drainage report or the utility applications.

                ## Milestones
                1. Roles listed with who covers each, including utility applications and the drainage report.
                2. Fee quotes from at least two firms for the engineer and the planner roles.
                3. Signed appointment letters with scopes, fees and deliverables for each consultant.
                4. A kick-off meeting held with actions, owners and dates recorded.

                ## Notes
                Start from the **Meeting notes** template for the kick-off. Make one consultant responsible for coordinating the application package, or it will drift.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed appointments covering survey, civil design, layout, legal and costing, plus kick-off notes with owners and dates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every role the scheme needs and who will cover it"
                - "Request fee quotes from two civil engineers and two planners"
                - "Send appointment letters with written scopes and deliverables"
                - "Hold the kick-off meeting and circulate the action list"
            - name: Site walkover and constraint map
              description: |-
                ## Purpose
                Gullies, ravines, rock outcrops, springs, mangrove edges, high voltage lines, old graves, occupied houses and informal footpaths all shape where lots and roads can go. Walking the parcel with the survey in hand and marking every constraint on one plan is a day's work that saves the layout from being drawn on paper and fought on the ground.

                ## Milestones
                1. A full walkover done with the topo survey, photographing every feature of note.
                2. One constraint plan showing watercourses, steep ground, existing structures and occupation.
                3. Neighbours' access, drainage outfalls and any shared tracks recorded.
                4. Areas marked as no-build, build with care, or clear to develop.

                ## Notes
                Note any people living or farming on the land without disturbing them. How occupation is dealt with is a legal question for your attorney, not something to settle on site.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A single constraint plan marking no-build, careful and clear zones, backed by dated photographs of each feature."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Print the topo survey and walk the whole boundary and interior"
                - "Photograph and pin every watercourse, structure and sign of occupation"
                - "Ask neighbours where water leaves their land and enters yours"
                - "Shade the plan into no-build, careful and clear zones"
            - name: Monthly subdivision project dashboard
              description: |-
                ## Purpose
                Once approvals, civil works and sales run at the same time, it is easy to lose sight of the three numbers that matter: cash in the bank against cost to complete, lots sold against plan, and days until the next approval or utility milestone. A one-page dashboard updated on the same day each month keeps you, partners and the lender looking at the same facts.

                ## Milestones
                1. A one-page dashboard layout agreed with cash, cost to complete, lots sold and key dates.
                2. The first month's figures filled from the bank, cost report and sales ledger.
                3. The dashboard sent to partners or the lender on a fixed day.
                4. Three months of history kept so trends are visible.

                ## Notes
                Start from the **Metrics log** template. Keep it to one page; the detail lives in the cost report and sales ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page dashboard has been updated and circulated on the same day for three consecutive months."
                cadence: rolling
              tasks:
                - "Choose the six figures the dashboard will always show"
                - "Ask the agent to draft a one-page dashboard layout from those figures"
                - "Update and circulate the subdivision dashboard @recurring(monthly:8)"
                - "Add a short note on anything that moved more than ten percent"
            - name: Subdivision approval and agency follow-up tracker
              description: |-
                ## Purpose
                At any one time a subdivision file can sit with the planning office, the drainage authority, the water utility, the power company, the fire service and the lands department at once, and each one stalls quietly unless someone asks. A tracker showing who has the file, since when and what they asked for, with a weekly round of calls, is how small developers keep approval times from doubling.

                ## Milestones
                1. Every agency that must sign off the subdivision listed with a named contact.
                2. Submission date, reference number and current status recorded for each.
                3. A weekly follow-up round under way, with each contact logged.
                4. Every agency query answered within ten working days of receipt.

                ## Notes
                Visit in person when a file has not moved for a month. Many offices still work from the physical file, and a polite visit with a copy of what is missing often unblocks it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows every agency's status, reference and last contact date, with no agency query left unanswered for more than ten working days."
                cadence: rolling
              tasks:
                - "List every agency that must sign off and find a named contact at each"
                - "Record reference numbers and submission dates in one sheet"
                - "Call or email each agency with an open item @recurring(weekly:tue)"
                - "Visit any office where the file has not moved in a month @recurring(monthly:12)"
            - name: Weekly civil works site inspection
              description: |-
                ## Purpose
                Road base thickness, drain falls, culvert sizes and pipe bedding are buried within days, and faults found after the asphalt goes down are paid for twice. A weekly walk with the engineer's drawings, the contractor's programme and a camera catches the shortcuts while they can still be fixed and builds the photo record the road authority may ask for at handover.

                ## Milestones
                1. An inspection checklist built from the drawings for roads, drains, mains and ducts.
                2. A weekly inspection held with dated photographs of work about to be covered.
                3. Defects logged with the contractor and closed out before the next layer goes on.
                4. Engineer sign-offs collected for each road and drain section.

                ## Notes
                Ask the engineer which hold points need their sign-off, such as subgrade before base, or base before surfacing, and do not let the contractor pass them without it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly inspection records with photos exist for the whole civil works period, and every logged defect is closed before covering."
                cadence: rolling
              tasks:
                - "Ask the engineer to list the hold points that need their sign-off"
                - "Turn the drawings into a one-page inspection checklist"
                - "Walk the works with the checklist and photograph covered items @recurring(weekly:fri)"
                - "Send the defect list to the contractor the same day"
            - name: Rainy season drainage and erosion watch
              description: |-
                ## Purpose
                Bare earth on a subdivision site washes into neighbours' land, public drains and the sea during the first heavy rains, bringing complaints, enforcement and lost road base. Before and through each rainy season, temporary silt traps, cleared drains and stabilised slopes protect the works and your standing with the authorities. It repeats every year until the last lot is built on.

                ## Milestones
                1. Temporary erosion controls installed before the rainy season starts.
                2. All open drains and culverts cleared and inspected.
                3. A post-storm check routine agreed with the contractor or caretaker.
                4. Any damage or neighbour complaint recorded with photos and the fix made.

                ## Notes
                Grass or cover bare slopes as early as you can. Exposed soil on a slope is the most common cause of complaints from downstream neighbours.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Erosion controls are in place before each rainy season and every heavy rain event has a dated check recorded."
                cadence: cyclic
              tasks:
                - "Mark the rainy season start on the project calendar"
                - "Install silt fences or traps where runoff leaves the site"
                - "Clear drains and culverts and photograph them clear @recurring(monthly:2)"
                - "Check the site within a day of any heavy rain warning"
            - name: Weekly lot sales pipeline review
              description: |-
                ## Purpose
                Lot buyers in the region often take months from first enquiry to signed agreement, juggling a mortgage, a family decision or money from abroad. A weekly look at every enquiry, viewing and reservation, with a next step and date beside each, turns a list of names into sales and shows early whether the price or the product needs to change.

                ## Milestones
                1. One pipeline sheet with every enquiry, its stage and a next action date.
                2. Stages defined: enquiry, site visit, reservation, agreement signed, deposit paid.
                3. A weekly review held with the realtor or sales person.
                4. Conversion between stages measured after three months.

                ## Notes
                Track where each enquiry came from. A roadside sign and a diaspora WhatsApp group often outperform paid listings for lots.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live enquiry has a stage and a next action date, reviewed weekly, with stage conversion rates calculated after three months."
                cadence: rolling
              tasks:
                - "Set up a pipeline sheet with five stages and a source column"
                - "Enter every current enquiry with its next action date"
                - "Review the pipeline with the sales lead @recurring(weekly:mon)"
                - "Calculate stage conversion rates once three months of data exist"
            - name: Lot buyer payment and instalment ledger
              description: |-
                ## Purpose
                Many lots are sold on deposit plus monthly instalments over one to five years, and the developer becomes, in effect, a small lender with dozens of accounts. A ledger showing each buyer's agreement, payments received, balance and arrears protects both sides, makes the attorney's completion statements quick and shows lenders real cash collection rather than paper sales.

                ## Milestones
                1. A ledger with one row per lot, agreement date, price, deposit and instalment terms.
                2. Every payment received entered within a week, matched to the bank statement.
                3. Arrears over thirty days flagged with a contact made.
                4. Statements sent to each buyer at least once a year.

                ## Notes
                What you can do when a buyer stops paying depends on the agreement and local law. Agree the arrears process with your attorney before you need it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ledger reconciles to the bank each month and every account more than thirty days in arrears has a recorded contact."
                cadence: rolling
              tasks:
                - "Build a ledger with one row per lot and its payment terms"
                - "Reconcile buyer payments to the bank statement @recurring(monthly:5)"
                - "Send reminders to buyers more than thirty days behind @recurring(monthly:9)"
                - "Agree an arrears process with your attorney in writing"
            - name: Monthly infrastructure cost-to-complete report
              description: |-
                ## Purpose
                Subdivision overruns usually come from small things: extra rock in a road cut, a longer outfall drain, a transformer the power company now requires. A monthly report of budget, committed, spent and forecast to complete for each infrastructure item, built with the engineer or quantity surveyor, shows the drift while there is still time to phase, value engineer or reprice lots.

                ## Milestones
                1. A cost report with budget, committed, paid and forecast for each work package.
                2. Contractor valuations checked against work actually done on site.
                3. Contingency used and remaining shown on the first line.
                4. Any forecast overrun over five percent explained with a response.

                ## Notes
                Keep utility contributions and authority fees as their own lines. They are often invoiced late and in one lump.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cost-to-complete report is produced every month of the works, with contingency shown and every overrun over five percent explained."
                cadence: rolling
              tasks:
                - "Split the infrastructure budget into work packages in one sheet"
                - "Ask the quantity surveyor to check each valuation against site progress"
                - "Update the cost-to-complete report @recurring(monthly:20)"
                - "Write a response for any package forecast to overrun by five percent"
            - name: Unsold lot security and encroachment patrol
              description: |-
                ## Purpose
                Vacant serviced lots attract dumping, sand and gravel mining, livestock, informal farming and, in time, people building on them. Regular visits that check markers, photograph each lot and deal with the first sign of occupation are far cheaper than the long and uncertain process of removing an established occupier.

                ## Milestones
                1. A patrol route covering every unsold lot, with a photo point for each.
                2. Monthly dated photographs of each unsold lot on file.
                3. Any encroachment, dumping or damage reported to your attorney or the police within days.
                4. Signage stating private property and the developer's contact on every road entry.

                ## Notes
                Do not confront occupiers yourself. Record, report and take your attorney's advice on the steps the law allows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every unsold lot has a dated photograph from each month, and every encroachment found has a report on file within a week."
                cadence: rolling
              tasks:
                - "Map a patrol route with a photo point on each unsold lot"
                - "Put private property signs with a contact number at each road entry"
                - "Walk the route and photograph every unsold lot @recurring(monthly:14)"
                - "Report any encroachment to your attorney within a week"
            - name: Unsold lot upkeep and boundary marker checks
              description: |-
                ## Purpose
                Overgrown lots hide what buyers came to see: a buyer walking that site cannot see the lot, the view or the road frontage, and missing boundary pins turn a sale into a re-survey. Keeping unsold lots bushed, the verges cut and every marker visible costs little each month and is one of the cheapest sales tools a subdivision has.

                ## Milestones
                1. A grass cutting contract or caretaker agreed for verges and unsold lots.
                2. Every lot's boundary markers located and painted or flagged.
                3. Lost or disturbed markers replaced by the surveyor.
                4. Lot numbers displayed on a post at each frontage.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unsold lots and verges are cut on a fixed schedule and every unsold lot has visible, numbered boundary markers."
                cadence: rolling
              tasks:
                - "Agree a monthly cutting price with a local caretaker or contractor"
                - "Check cutting is done before the month's viewings @recurring(monthly:25)"
                - "Check and repaint boundary markers on every unsold lot @recurring(quarterly)"
                - "Send a list of missing markers to the surveyor for replacement"
            - name: Lot inventory and price list control
              description: |-
                ## Purpose
                Two salespeople promising the same corner lot, or an old price list still circulating on social media, is a quick way to lose a buyer and invite a dispute. One master list of lots with status, size, price and any hold, updated before every price list goes out, keeps the sales team, the attorney and the website saying the same thing.

                ## Milestones
                1. One master lot list with number, area, frontage, price and status.
                2. Holds and reservations given an expiry date.
                3. A dated price list issued only from the master list.
                4. Old price lists withdrawn from every channel when prices change.

                ## Notes
                Corner, view and level lots usually justify a premium. Set the premium once in the master list rather than negotiating it lot by lot.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated price list matches the master lot list, and no reservation on the list is past its expiry date."
                cadence: rolling
              tasks:
                - "Build the master lot list from the approved layout plan"
                - "Give every hold and reservation an expiry date"
                - "Reconcile the master list with the attorney's signed agreements @recurring(monthly:3)"
                - "Remove old price lists from listings and social media pages"
            - name: Reading subdivision layout and survey plans
              description: |-
                ## Purpose
                Layout plans, cadastral survey plans and engineering drawings use bearings, distances, reserves, easements and level notation that most first-time developers nod through. Learning to read them properly lets you spot a lot below minimum frontage, a drainage reserve through a sales lot or a road that does not meet the boundary, before the plan is lodged.

                ## Milestones
                1. The meaning of bearings, distances, areas and reserve labels on a survey plan understood.
                2. Easements, rights of way and drainage reserves identified on your own layout.
                3. Contours and spot levels read well enough to see where water flows.
                4. Five questions about your layout written down and answered by the surveyor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five specific questions about your own layout plan have been asked and answered by the surveyor, with the answers noted on the plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the surveyor for a sample approved subdivision plan to study"
                - "Mark every bearing, distance and reserve label on your own layout"
                - "Trace the direction of water flow from the contours"
                - "Write five questions about your layout and book time to go through them"
            - name: Subdivision road design basics
              description: |-
                ## Purpose
                Road reserve width, carriageway width, camber, gradient, base and surfacing, kerbs and turning heads decide both cost and whether the authority will take the road over. Understanding the basics lets you have a real conversation with the engineer about where cost can come out, and where cutting it means a road that fails in its first rainy season.

                ## Milestones
                1. The road cross-section on your drawings explained: subgrade, sub-base, base and surface.
                2. Maximum gradient and minimum turning head size in your standards noted.
                3. The cost difference between two road widths or surfaces understood.
                4. Three cost questions put to the engineer and the answers recorded.

                ## Notes
                Water is what destroys roads. Ask how the cross-fall and side drains get water off the surface before asking how thick the asphalt is.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain your road cross-section layer by layer and have a written note of three cost questions answered by the engineer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the engineer to walk you through one road cross-section drawing"
                - "Note the maximum gradient and turning head size in your standards"
                - "Compare the cost of two carriageway widths with the engineer"
                - "Visit an older subdivision road nearby and note where it has failed"
            - name: Stormwater drainage on sloping tropical sites
              description: |-
                ## Purpose
                Short, intense tropical downpours on hillside parcels produce far more runoff than a cleared site produced as bush, and a subdivision that passes that water to its neighbours invites complaints, claims and refused approvals. Learning how your engineer sizes drains, culverts and any detention pond helps you understand the largest hidden cost on many Caribbean schemes.

                ## Milestones
                1. The design storm your engineer uses and why understood in plain terms.
                2. Every outfall point on your scheme identified, with who owns the receiving drain or watercourse.
                3. The need for detention or soakaways on site explained.
                4. The drainage report summary read and its main assumptions noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note in your own words explaining the design storm, the outfalls and any detention required on your scheme."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the engineer which design storm and rainfall data they are using"
                - "Mark every outfall on the layout and note who owns each receiving drain"
                - "Ask whether a detention pond or soakaways are needed and why"
                - "Write a one-page plain summary of the drainage report"
            - name: Water supply options for the lots
              description: |-
                ## Purpose
                Some parcels can connect to a public main a few hundred metres away, while others need a booster pump, a storage tank, a private well or a requirement that each house harvests rainwater. Comparing the options with the water utility and your engineer before the layout is fixed avoids promising buyers piped water the utility will not supply for years.

                ## Milestones
                1. The nearest main, its size and available pressure confirmed with the water utility.
                2. Options listed: main extension, on-site storage and pumping, wells, rainwater harvesting.
                3. Capital cost, ongoing cost and who owns each option compared.
                4. The chosen approach and what buyers will be told recorded in writing.

                ## Notes
                Get the utility's capacity answer in writing. A verbal assurance at an early meeting is not a connection approval.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of water options with the utility's written capacity response and the chosen approach recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write to the water utility asking for the nearest main and its capacity"
                - "List each supply option with capital and running cost"
                - "Ask the engineer who would own and maintain a private system"
                - "Record the chosen option and the wording buyers will be given"
            - name: Wastewater and septic suitability for each lot
              description: |-
                ## Purpose
                Most rural and suburban Caribbean lots rely on septic tanks and soakaways, and a lot on rock, clay or a high water table may not take one at all, or may need a larger area than the lot allows. Percolation tests and the health or environmental authority's rules, checked early, decide minimum lot sizes on some parcels and protect buyers from lots they cannot build on.

                ## Milestones
                1. The authority's rules on septic systems and minimum distances to wells and boundaries noted.
                2. Percolation or soil tests carried out at representative points across the parcel.
                3. Any lots unsuitable for on-site wastewater identified and the layout adjusted.
                4. The option of a shared treatment plant considered where lots are small.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Soil or percolation results cover the parcel and every lot on the layout is shown to meet the wastewater rules, or is changed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the health or environmental authority for its septic system rules"
                - "Have the engineer pick test points across each soil type"
                - "Commission percolation tests at those points"
                - "Mark any lot that cannot meet the rules and redraw it"
            - name: Lot sale agreements and the attorney's role
              description: |-
                ## Purpose
                Selling a lot involves a reservation, an agreement for sale, deposits, sometimes instalments, and finally a conveyance or transfer of the new separate title. Knowing what each document does, who holds the deposit, what happens if titles are late and how costs are split lets you brief your attorney properly and answer buyers' questions without guessing.

                ## Milestones
                1. The sequence from reservation to transfer written as a simple flow.
                2. Your attorney's standard agreement for sale read, with questions noted.
                3. Deposit holding, completion timing and default terms understood.
                4. A one-page buyer guide drafted and approved by the attorney.

                ## Notes
                Be careful what you promise on titles and services. Delivery dates you do not control, such as a utility connection, belong in the agreement as conditions, not promises, and your attorney should word them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page buyer guide to the sale process, approved by your attorney, is ready to hand to every lot buyer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your attorney for their standard lot agreement for sale"
                - "Note every question you have about deposits, default and completion"
                - "Ask the agent to draft a plain buyer guide from the agreed sequence"
                - "Have the attorney approve the buyer guide before use"
            - name: Pricing civil works from a bill of quantities
              description: |-
                ## Purpose
                Contractor tenders for roads and drains arrive as bills of quantities: excavation in cubic metres, base course, asphalt, kerbs, pipes and culverts by the metre. Learning to read and compare them line by line shows where a low tender has left work out, where quantities are guessed and where provisional sums hide future claims.

                ## Milestones
                1. The main units and items in a civil works bill understood.
                2. A sample bill priced against recent local rates.
                3. Provisional sums and rates for rock excavation identified as risk items.
                4. A comparison layout ready for when real tenders arrive.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A blank tender comparison sheet built from the scheme's bill of quantities, with risk items such as rock excavation flagged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the quantity surveyor or engineer for the draft bill of quantities"
                - "Price five main items using rates from a recent local job"
                - "Highlight every provisional sum and rock excavation rate"
                - "Build a tender comparison sheet with one column per bidder"
            - name: Three lot layout options compared
              description: |-
                ## Purpose
                The first layout is rarely the best. Testing three, such as a loop road, a spine with cul-de-sacs and a layout that follows the contours, against lot count, road length, earthworks, drainage and views often finds several extra lots or a large saving in infrastructure. The comparison also gives the planning office a reasoned scheme rather than a first sketch.

                ## Milestones
                1. Three distinct layouts drawn on the same survey base.
                2. Each scored on lot count, road length, earthworks, drain length and lots with views.
                3. Infrastructure cost per lot estimated for each.
                4. A preferred layout chosen and the reasons written down.

                ## Notes
                Ask the engineer to look at earthworks early. A layout that fights the slope can double the cost of roads and retaining walls.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three layouts scored on the same six measures, with a preferred layout chosen and the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Brief the planner to draw three layouts on the same survey"
                - "Score each on lot count, road length, earthworks and views"
                - "Ask the engineer for a cost per lot on each layout"
                - "Record the chosen layout and why the others lost"
            - name: Phased release plan for the subdivision
              description: |-
                ## Purpose
                Building every road at once ties up the most cash and leaves lots unsold for years, while releasing the scheme in two or three phases lets early sales fund later works. Phasing has to follow the drainage and access logic, though, so the first phase works on its own and later phases do not dig up finished roads.

                ## Milestones
                1. Phase boundaries drawn so each phase has its own access and drainage outfall.
                2. Cost and lot count per phase calculated.
                3. Sales targets that trigger the start of each next phase agreed.
                4. The phasing plan agreed with the planning authority where approval needs it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A phasing plan with phase boundaries, costs, lot counts and the sales trigger for each next phase, accepted by the authority where needed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the engineer where phase boundaries work for drainage and access"
                - "Calculate cost and lot count for each phase"
                - "Agree the lots-sold trigger for starting the next phase"
                - "Review sales against the next phase trigger @recurring(quarterly)"
            - name: Civil works contractor tender and selection
              description: |-
                ## Purpose
                The civil works contract is usually the largest cheque in a subdivision, and the cheapest road contractor is often the one with the longest list of claims later. Inviting three to five contractors who have built subdivision roads, comparing their bills line by line and checking their past jobs gives a contract you can manage.

                ## Milestones
                1. A tender list of three to five contractors with local subdivision work to visit.
                2. A tender package issued with drawings, bill of quantities, programme and contract form.
                3. Returned tenders compared line by line and clarified.
                4. Two past jobs of the preferred bidder visited and references taken.
                5. A contract signed with retention, completion date and a performance bond where obtainable.

                ## Notes
                Start from the **Vendor** template for each bidder. Ask your attorney or quantity surveyor which standard contract form suits local civil works.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed civil works contract with a contractor chosen from at least three compared tenders, with retention and a completion date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List five contractors who have built subdivision roads locally"
                - "Issue the tender package with a fixed return date"
                - "Compare returned bills line by line and send clarification questions"
                - "Visit two finished jobs of the preferred bidder"
            - name: Serviced versus unserviced lot sale decision
              description: |-
                ## Purpose
                Some developers sell lots with roads, water and power complete at a higher price, while others sell earlier and cheaper with services to follow or left to buyers. The choice changes cash flow, approval conditions, buyer finance, since many banks will not lend on lots without services, and your legal exposure if services are late.

                ## Milestones
                1. Both options modelled with cash flow, price and sales pace.
                2. The approval authority's rules on selling before services are complete confirmed.
                3. Two lenders asked whether they would mortgage each type of lot.
                4. A decision recorded and reflected in the sales documents.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between serviced and unserviced sales, backed by both cash flows and the authority's and lenders' written positions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Model serviced and unserviced sales side by side"
                - "Ask the authority whether lots can be sold before services are complete"
                - "Ask two lenders whether they mortgage unserviced lots"
                - "Record the decision and brief the attorney and sales team"
            - name: Road surface choice for the subdivision
              description: |-
                ## Purpose
                Asphalt, chip seal, concrete and compacted gravel each carry a different first cost, life, maintenance burden and chance of being adopted by the road authority. Choosing with the engineer, against the gradients on site, the authority's adoption standard and what buyers in your price band expect, avoids paying for asphalt nobody required or laying gravel that washes out on the first steep bend.

                ## Milestones
                1. The road authority's adoption standard for surfacing confirmed.
                2. First cost and expected life of each surface on your gradients compared.
                3. Concrete sections considered for steep stretches.
                4. A surface specification chosen and written into the tender package.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A surfacing choice for each road section, matched to the adoption standard and gradients, is written into the tender specification."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the road authority what surface it needs before adoption"
                - "Get first cost and life estimates for each surface from the engineer"
                - "Mark steep sections where concrete may be the only option"
                - "Write the chosen surface into the tender specification"
            - name: Power distribution layout and utility contribution
              description: |-
                ## Purpose
                The power company may require transformers, poles or underground ducts and charge the developer a contribution before connecting a single lot, and its lead times can be the longest on the project. Settling overhead or underground, pole positions and the contribution early stops a finished subdivision sitting dark for months.

                ## Milestones
                1. An application for subdivision supply lodged with the power utility.
                2. The utility's design, contribution and lead time received in writing.
                3. Overhead and underground options compared on cost and buyer appeal.
                4. Pole and transformer positions coordinated with the road and drain layout.

                ## Notes
                Underground ducts must go in before the road base. If you might go underground later, lay empty ducts now.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written utility design and contribution quote is on file, and the chosen power layout is coordinated with the road drawings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Lodge the subdivision supply application with the power utility"
                - "Chase the utility for a written design, quote and lead time"
                - "Compare overhead and underground cost with the engineer"
                - "Check pole and transformer positions against the road plan"
            - name: Entrance, streetlights and lot finishing upgrades
              description: |-
                ## Purpose
                Gated or landscaped entrances, streetlights, a paved footpath or a cut and levelled pad can lift lot prices well beyond their cost, or add cost no buyer pays for. Testing each upgrade against what comparable subdivisions offer and what buyers in your band say they value keeps the spend where it sells lots.

                ## Milestones
                1. Upgrades priced: entrance feature, streetlights, footpaths, pad levelling, landscaping.
                2. Three competing subdivisions visited and their features noted.
                3. Five recent buyers or enquirers asked which features matter to them.
                4. Upgrades chosen with expected price uplift per lot noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each upgrade has a cost and an expected price uplift per lot, and only those with uplift above cost are approved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Price each possible upgrade with the contractor"
                - "Visit three competing subdivisions and note their features"
                - "Ask five enquirers which features would change their decision"
                - "Approve only upgrades whose uplift beats their cost"
            - name: Restrictive covenants and design guidelines
              description: |-
                ## Purpose
                Buyers paying for a quiet residential subdivision want to know the next lot will not become a scrapyard, a bar or a half-built shell for fifteen years. Covenants drafted by your attorney, and simple design guidelines on use, setbacks, fencing and build-start periods, protect lot values and give later owners a reason to pay more.

                ## Milestones
                1. The protections you want listed: use, minimum house size, setbacks, fences, animals, build start.
                2. Your attorney's advice on what can be enforced locally and how.
                3. Covenants drafted and attached to the sale documents.
                4. A two-page design guide for buyers and their builders.

                ## Notes
                Covenants nobody enforces are worthless. Decide who will enforce them, often a homeowners' association, before drafting.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Attorney-drafted covenants attached to every agreement for sale and a two-page design guide issued to buyers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the protections buyers in your band would value"
                - "Ask your attorney what covenants are enforceable locally"
                - "Draft a two-page design guide for buyers and builders"
                - "Attach the covenants to the standard agreement for sale"
            - name: Subdivision approval application package
              description: |-
                ## Purpose
                Complete first submissions are the quickest route to approval, and thin ones go to the back of the queue each time something is missing. Assembling the layout plan, survey, ownership proof, consents, drainage report, utility letters and fees into one checked package, with your planner, gives the application its best start.

                ## Milestones
                1. The authority's checklist for subdivision applications obtained.
                2. Every item on the checklist gathered, signed and copied the required number of times.
                3. A cover letter summarising the scheme, lot count and services prepared.
                4. The package lodged, the fee paid and a stamped receipt and reference number held.

                ## Notes
                Keep a full digital copy of exactly what was lodged. Queries months later often refer to page numbers in the original package.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete application lodged against the authority's checklist, with a stamped receipt and reference number on file."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Get the authority's current subdivision application checklist"
                - "Tick off each item with the planner and chase anything missing"
                - "Write a one-page cover letter summarising the scheme"
                - "Lodge the package and file the stamped receipt and reference"
            - name: Final survey and lot pegging after works
              description: |-
                ## Purpose
                Roads and drains are rarely built exactly where they were drawn, so the final survey records what was actually built and sets the lot boundaries against it. Pegging every lot from that survey, before buyers walk the site, means the plan lodged for titles matches the ground and no lot loses frontage to a road that moved a metre.

                ## Milestones
                1. As-built survey of roads, drains and reserves completed.
                2. Any difference from the approved layout reviewed with the planner.
                3. Every lot pegged with permanent markers.
                4. The final survey plan signed and lodged for approval or registration.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed final survey matching the built roads is lodged, and every lot has permanent markers on the ground."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the surveyor for an as-built survey once road works finish"
                - "Compare the as-built plan with the approved layout"
                - "Have every lot pegged with permanent markers"
                - "Lodge the final survey plan for approval"
            - name: Road and services handover to the authorities
              description: |-
                ## Purpose
                Until the road authority takes over the roads and the utilities take over the mains, the developer is responsible for repairs, lighting and any accident on them, sometimes for years. Planning the handover, with as-built drawings, test certificates and the engineer's completion certificate, is how a subdivision is finally finished.

                ## Milestones
                1. Each authority's handover requirements obtained in writing.
                2. As-built drawings, pressure test results and compaction tests compiled.
                3. Joint inspections held and the defect lists closed out.
                4. Written acceptance received from the road authority and each utility.

                ## Notes
                Some authorities in the region are slow to adopt roads at all. Budget for maintaining them yourself for a period and say so in the sales documents.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written acceptance of the roads and each service network has been received from the relevant authority or utility."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the road authority and each utility for their handover requirements"
                - "Collect as-built drawings and every test certificate in one file"
                - "Book joint inspections and log the resulting defects"
                - "Chase written acceptance once defects are closed"
            - name: First phase lot sales launch weekend
              description: |-
                ## Purpose
                A well-run launch, with the roads cut, lots pegged and numbered, a price list, a realtor on site and attorneys ready to take reservations, can sell a large share of a first phase in days and sets the price for later phases. It needs eight to twelve weeks of preparation and advertising in the island and the diaspora at the same time.

                ## Milestones
                1. Launch date set once lots are pegged and the site is passable.
                2. Price list, site plan, buyer guide and reservation forms ready.
                3. Advertising running locally and in diaspora channels for at least four weeks.
                4. Launch held with every enquiry captured in the pipeline.
                5. Reservations converted to signed agreements within thirty days.

                ## Notes
                Start from the **Marketing campaign** template. Do not launch before you can legally take reservations; check with your attorney.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The launch has been held, every enquiry is logged, and the reservations taken are counted against the target set beforehand."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm with your attorney that reservations can legally be taken"
                - "Set a reservations target and a launch date"
                - "Book advertising locally and in diaspora groups four weeks ahead"
                - "Prepare price lists, site plans and reservation forms for the day"
            - name: Separate titles issued for every lot
              description: |-
                ## Purpose
                Buyers, their banks and their attorneys all wait for one thing: a separate title or registered deed for their lot. Getting from final approval to individual titles involves the lands or registry department, survey plan approval and fees, and it is often the step that delays mortgage-funded sales by months.

                ## Milestones
                1. The registry's steps and fees for issuing separate titles confirmed by your attorney.
                2. Final approval, signed survey plans and discharge of any mortgage over each lot obtained.
                3. Applications lodged for every lot or each phase.
                4. Every separate title received and matched to the buyer ledger.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every sold lot has a separate title or registered deed received and recorded against the buyer ledger."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your attorney for the registry's steps and fees for separate titles"
                - "Collect final approval and signed survey plans for each phase"
                - "Arrange partial releases from the mortgagee for each lot"
                - "Tick each title off against the buyer ledger as it arrives"
            - name: Civil works completion and retention release
              description: |-
                ## Purpose
                When the contractor says the roads and drains are finished, an inspection with the engineer decides what is complete, what goes on a snag list and when the defects period starts. Holding the retention until defects have been fixed through at least one rainy season is the developer's main protection against failed road edges and blocked culverts.

                ## Milestones
                1. A completion inspection held with engineer, contractor and developer.
                2. A snag list issued and the completion date certified.
                3. Defects period recorded with its end date.
                4. Retention released only after a final inspection shows defects fixed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A certified completion date, a closed snag list and a final inspection record exist before any retention is released."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book the completion inspection with engineer and contractor"
                - "Issue the snag list with a close-out date"
                - "Put the defects period end date in the project calendar"
                - "Inspect after the first heavy rains before releasing retention"
            - name: Subdividing family land for heirs and sale lots
              description: |-
                ## Purpose
                Many Caribbean families hold land that several generations have rights to, and subdividing it can give each branch a lot of its own while selling the rest to pay for roads and titles. It works only if the family agrees in writing who gets which lot, how costs and proceeds are shared and who signs, before any surveyor is paid.

                ## Milestones
                1. Every person with a claim identified with the attorney's help.
                2. A family meeting held with the layout options and the cost of servicing explained.
                3. A written family agreement on lot allocation, costs, sale lots and decision making.
                4. One family member or a company given authority to sign applications and contracts.

                ## Notes
                Agreement among heirs is a legal matter. Have an attorney draft it, and keep minutes of every family meeting.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A signed family agreement on lot allocation, cost sharing and signing authority is held by the attorney."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the attorney to list everyone with a claim to the land"
                - "Prepare a simple layout showing family lots and sale lots"
                - "Hold a family meeting and take minutes"
                - "Have the attorney draft the family agreement for signature"
            - name: Running a subdivision from overseas
              description: |-
                ## Purpose
                Diaspora owners in London, New York or Toronto often hold land back home and want to develop it without living there. It can work with the right local team, a clear reporting rhythm and controls on money, but schemes run on trust and occasional visits are where funds vanish and works stall.

                ## Milestones
                1. A local project manager or trusted representative appointed with a written scope.
                2. A limited power of attorney drafted by an attorney for specific acts only.
                3. Payments to contractors made only against certified valuations and photos.
                4. A monthly video call and written report in place.
                5. At least two site visits a year planned around key milestones.

                ## Notes
                Never give an open-ended power of attorney. Limit it to named acts and a fixed period.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A local representative with a written scope, a limited power of attorney and monthly reports against certified payments are all in place."
                cadence: rolling
              tasks:
                - "Interview two local project managers who have run subdivisions"
                - "Ask an attorney to draft a limited power of attorney"
                - "Agree that payments go only against certified valuations"
                - "Hold the monthly project call and file the report @recurring(monthly:17)"
            - name: Converting a farm or estate into house lots
              description: |-
                ## Purpose
                Former sugar, cocoa, banana or citrus estates are a large source of subdivision land, and owners often want to release part for lots while keeping farming on the rest. Doing that well means confirming the change of use, keeping access to the farmed land, dealing with tenant farmers fairly and planning around old estate drains and roads.

                ## Milestones
                1. The area to release for lots and the area to keep farming mapped.
                2. Change of use or agricultural release requirements confirmed.
                3. Existing farm tenants or workers and their arrangements listed with the attorney.
                4. Old estate drains, roads and water sources assessed by the engineer for reuse.

                ## Notes
                Estate drains and tracks often carry water from neighbouring farms too. Closing or diverting them without agreement causes flooding disputes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A map separating lots from retained farmland, with the change of use route confirmed and every farm tenancy listed with advice."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the split between lots and retained farmland on the survey"
                - "Ask the planning office about agricultural release requirements"
                - "List every farm tenant and arrangement for the attorney"
                - "Have the engineer assess old estate drains and roads"
            - name: Landowner partnership paid in serviced lots
              description: |-
                ## Purpose
                A common Caribbean deal is a landowner who contributes the land, a developer who funds approvals and infrastructure, and a split of the finished lots rather than cash. It needs clear terms on which lots each side gets, who pays overruns, what happens if approvals fail and when the land is transferred, or the friendship ends with the first price argument.

                ## Milestones
                1. The lot split agreed, with lots allocated by schedule or by drawing.
                2. Overrun, delay and approval failure terms agreed.
                3. Land transfer timing and security for both sides agreed.
                4. A partnership agreement drafted by an attorney and signed.

                ## Notes
                Allocate lots by mixing good and less good lots, or by alternate picks. A split by area alone gives one side all the corners and views.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed agreement with a lot allocation schedule and terms for overruns, delay and approval failure."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft heads of terms on the lot split and costs"
                - "Agree how the best lots are shared between the parties"
                - "Set out what happens if approval is refused"
                - "Ask an attorney to draft the agreement for both sides"
            - name: First ten-lot scheme for a small builder
              description: |-
                ## Purpose
                Builders and small contractors moving into development can start with a modest scheme of eight to twelve lots on a short road, using their own plant and crew for the works. The scale keeps the cash need and approval risk manageable and builds the track record lenders and landowners want before a larger site.

                ## Milestones
                1. A small parcel with short road frontage and simple drainage shortlisted.
                2. Own plant and crew costed against hiring a contractor.
                3. The scheme taken through approval with a lean consultant team.
                4. All lots sold and a lessons note written for the next scheme.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A scheme of eight to twelve lots taken from approval to sale, with a written lessons note on cost, time and sales pace."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Shortlist parcels that need only one short road"
                - "Cost your own crew and plant against a contractor quote"
                - "Appoint a surveyor and engineer on a fixed-fee basis"
                - "Write a lessons note when the last lot sells"
            - name: Mortgage-ready lots and house packages
              description: |-
                ## Purpose
                First-time buyers often cannot buy a lot and then finance a house separately, so lots that come with an approved house design, a builder price and a lender who will fund the whole package sell faster. Setting this up with a bank, a credit union or a housing agency widens the market well beyond cash buyers.

                ## Milestones
                1. Two or three lenders asked what they need to fund lot and house packages.
                2. Two standard house designs priced by a builder for typical lots.
                3. A package price and payment route agreed with at least one lender.
                4. The package offered on the price list.

                ## Notes
                Check whether any government first-time buyer scheme or tax relief applies to the packages, and ask the agency directly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one lender has agreed in writing to fund lot and house packages, and the packages appear on the price list."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask three lenders what they need to fund a lot and house package"
                - "Get two standard house designs priced by a builder"
                - "Agree the package route with one lender"
                - "Check in with the package lender on approvals in progress @recurring(monthly:10)"
            - name: Hillside subdivision on steep ground
              description: |-
                ## Purpose
                View lots on steep hillsides sell at a premium across the islands, but they bring cut and fill, retaining walls, landslip risk, difficult drainage and roads near the maximum gradient. A specialist approach, with a geotechnical investigation and a layout that follows the contours, decides whether the premium survives the extra cost.

                ## Milestones
                1. A geotechnical investigation with boreholes or trial pits and a slope stability view.
                2. A contour-following layout with road gradients inside the standard.
                3. Retaining wall lengths and heights costed.
                4. A risk review of slope, drainage and access recorded.

                ## Notes
                Start from the **Risk register** template. Landslips usually follow water, so the drainage design matters as much as the walls.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A geotechnical report, a costed contour-following layout and a written risk review support a go or no-go on the hillside scheme."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Commission a geotechnical investigation of the slopes"
                - "Brief the planner to draw lots along the contours"
                - "Cost every retaining wall shown on the layout"
                - "Record slope, drainage and access risks in a register"
            - name: Coastal and wetland edge subdivision layout
              description: |-
                ## Purpose
                Parcels near beaches, mangroves or rivers carry setbacks, public access rights to the shore, protected habitat and higher flood levels that cut the lot count and shape the layout. Designing around them from the start, with the coastal or environmental agency's requirements in hand, avoids a layout that is refused or needs costly mitigation.

                ## Milestones
                1. Coastal, river and wetland setbacks that apply confirmed with the agency.
                2. Any public access to the shore and protected habitat mapped.
                3. Lots and roads kept out of setbacks and low-lying ground.
                4. Environmental conditions likely on approval listed and costed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A layout that keeps every lot and road out of the confirmed setbacks, with likely environmental conditions costed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the environmental or coastal agency for setback rules"
                - "Map mangroves, beach access and flood-prone ground on the survey"
                - "Redraw any lot that falls into a setback"
                - "List and cost the conditions likely on approval"
            - name: Homeowners' association and common area management
              description: |-
                ## Purpose
                If the roads, lights, drains or open spaces will not be adopted by the authorities, someone must maintain them after the last lot sells, and buyers want to know who and at what cost. A homeowners' association with clear rules, a fee and a handover from the developer protects values and ends your liability for the shared areas.

                ## Milestones
                1. Common areas and services the association will maintain listed and costed.
                2. Constitution or rules drafted by an attorney and annual fee set.
                3. Membership and fees written into every agreement for sale.
                4. The developer's control handed over to an elected committee at an agreed point.

                ## Notes
                Set fees from a real maintenance budget. Fees set too low to win sales leave the roads and lights failing within a few years.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An association with attorney-drafted rules and a costed budget exists, membership is in every sale agreement and a handover date is set."
                cadence: rolling
              tasks:
                - "List every common area and service and cost its upkeep"
                - "Ask your attorney to draft the association rules"
                - "Send owners a quarterly update on fees and works @recurring(quarterly)"
                - "Hold the association's annual general meeting @recurring(yearly)"
---

# Caribbean Land Subdivision Projects

Caribbean Land Subdivision Projects is for founders and small developers turning one parcel into serviced, saleable lots, whether that is a former estate in Trinidad, family land in St Elizabeth or a hillside in St Lucia. It runs from the lot count brief, surveys, consents and first cost checks, through the operating routines that keep approvals, civil works and sales moving, the skills of reading plans and designing roads, drains and water, the big choices on layout, phasing and contractors, the dated events from application to separate titles, and finally the variants for heirs, diaspora owners and farm conversions and the specialist sites on steep or coastal land.

The rhythms are a weekly approvals chase, site inspection and sales pipeline review, a monthly dashboard, cost-to-complete report, buyer ledger and patrol of unsold lots, a quarterly phase release review and a yearly check of the regulations. The Meeting notes, Metrics log, Vendor, Marketing campaign and Risk register templates pair with the team kick-off, the dashboard, the contractor tender, the sales launch and the hillside risk review. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
