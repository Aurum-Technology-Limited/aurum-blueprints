---
id: real-estate-development.site-utilities-and-connections
name: Site Utilities and Connections
description: "Power, water, sewer and telecoms brought to your site on time: demand estimates, asset searches, capacity enquiries, offers compared, wayleaves secured, costs tracked and the connection dates that hold up completion managed."
category: business
version: 1.0.0
tags: [real-estate-development, site-utilities-and-connections, founder, small-business, utility-connections, wayleaves, grid-capacity, drainage]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - vendor
    - meeting-notes
    - metrics-log
    - purchase-decision
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Site Utilities and Connections
          description: "Getting power, water, sewer and telecoms to a site: capacity checks, utility applications, wayleaves, connection costs and the timelines that hold schemes up."
          projects:
            - name: Services schedule for the scheme
              description: |-
                ## Purpose
                Most connection delays start with a service nobody listed: the sprinkler supply, the landlord's lighting meter or the fibre duct to the bin store. A one-page schedule of every utility the scheme needs, who supplies it in your area and who on your team owns it turns a vague worry into a list of applications. Write it before the first enquiry so each provider is approached once, with the right information.

                ## Milestones
                1. Every service listed: electricity, potable water, fire water, foul drainage, surface water, gas if used, fibre and any district heat.
                2. The network operator or authority for each service in your area named, with its application route.
                3. One person on your team named as owner of each service.
                4. The schedule saved where the design team and contractor can see it.

                ## Notes
                Include services you plan to remove or divert as well as new ones. Removals often need the longest notice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page services schedule naming every utility, its provider and an owner, shared with the design team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every service the finished scheme will need, including fire water and fibre"
                - "Find the network operator or authority for each service at the site address"
                - "Name an owner on your team for each service"
                - "Share the schedule with the architect and services engineer"
            - name: Statutory asset records search
              description: |-
                ## Purpose
                Network operators hold maps of the cables, mains, sewers and ducts they own, and a high voltage cable or trunk sewer under your plot can move the building or kill the scheme. Ordering the records from every provider before design starts shows what is there, what can be built over and what needs a diversion. The search is cheap compared with finding a live cable with an excavator.

                ## Milestones
                1. Asset records requested from every electricity, water, sewer, gas and telecoms owner for the site and its frontage.
                2. All returned plans combined on one drawing over the site boundary.
                3. Easement or stand-off widths for each major asset noted.
                4. Assets that clash with the proposed layout flagged to the architect.

                ## Notes
                Start from the **Operational checklist** template. Records are indicative only; never dig on the strength of a map alone.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A combined asset drawing from every provider, with stand-off widths and clashes with the layout marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request asset plans from each utility owner or through a combined search service"
                - "Overlay the returned plans on the site boundary drawing"
                - "Note the build-over and stand-off rules for each major asset"
                - "Re-run the asset search on each active site before works start @recurring(quarterly)"
            - name: Utility survey with trial holes
              description: |-
                ## Purpose
                Asset maps are often metres out and miss private and abandoned services altogether. A utility survey using radar and cable location, confirmed by a few hand-dug trial holes at the points that matter, gives the designers real positions and depths. It is what turns a provisional sum for diversions into a priced item.

                ## Milestones
                1. A survey brief issued naming the quality level and the areas to cover, including the frontage.
                2. Located services drawn with positions and depths on the topographical survey.
                3. Trial holes dug at the proposed connection points and any clash locations.
                4. Unidentified services listed for the providers to confirm or disown.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A utility survey drawing with confirmed positions and depths at every connection point and clash location."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two survey firms to quote for a radar and electromagnetic utility survey"
                - "Mark the connection points and clash locations that need trial holes"
                - "Check the survey drawing against the combined asset records"
                - "Send any unidentified services to the providers for confirmation"
            - name: Utility demand estimate with the services engineer
              description: |-
                ## Purpose
                Every application asks the same question in different units: kilovolt amperes of electricity, litres per second of water and foul flow, cubic metres of gas. Agreeing one set of demand figures with your services engineer, with the assumptions written beside them, stops each provider quoting for a different scheme. Getting the electrical figure right matters most, because asking for too much triggers reinforcement charges and asking for too little leaves you short at handover.

                ## Milestones
                1. A demand schedule per service with peak and diversified figures.
                2. Assumptions recorded: unit numbers, heating type, EV charging, lifts, commercial units and fire pumps.
                3. The figures checked against a similar completed scheme.
                4. One signed-off version used for every application.

                ## Notes
                Heat pumps and EV chargers can double a residential electrical load. Decide heating and charging before the figures are fixed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One dated demand schedule for every service, with assumptions listed, used unchanged across all applications."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the services engineer the current unit mix and heating assumptions"
                - "Ask for peak and diversified demand for each service in the providers' units"
                - "Compare the electrical figure with a completed scheme of similar size"
                - "Issue the signed-off demand schedule to whoever files the applications"
            - name: Appointing a utilities connection consultant
              description: |-
                ## Purpose
                On a first or a complicated scheme, a utilities consultant who files applications, reads offers and chases operators every week often saves more than their fee in avoided reinforcement and weeks recovered. Choosing one with a fixed scope and a clear handover to the contractor avoids paying twice for the same work. Smaller schemes may only need them for the electricity application.

                ## Milestones
                1. A scope written covering searches, applications, offer review, wayleaves and programme.
                2. Fee proposals from two or three consultants compared on the same scope.
                3. References checked on a scheme of similar size in the same network area.
                4. An appointment signed with fees, deliverables and reporting frequency.

                ## Notes
                Start from the **Vendor** template. Ask who will actually attend calls with the operator, not only who wins the work.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed appointment with a written scope, fee and fortnightly reporting, chosen from at least two compared proposals."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page scope for the connections work"
                - "Request fee proposals from three utilities consultants"
                - "Call one reference for each shortlisted consultant"
                - "Sign the appointment and agree a reporting day"
            - name: Budget estimates from each network operator
              description: |-
                ## Purpose
                A budget estimate or pre-application capacity check from each operator costs little and tells you early whether the local network can take your load or needs reinforcement that could take years. Asking before the land deal is unconditional gives you a figure to negotiate with or a reason to walk away. Treat the answers as indicative, but treat a capacity warning as real.

                ## Milestones
                1. Capacity enquiries or budget estimate requests sent for electricity, water, sewer and gas.
                2. Each reply logged with the cost range, point of connection and any reinforcement noted.
                3. Capacity constraints summarised in a paragraph for the appraisal and the land negotiation.
                4. A decision recorded on whether any constraint changes the scheme or the offer.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Budget figures or capacity replies from every operator logged, with a written conclusion on whether any constraint changes the deal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "File a budget estimate request with the electricity network operator"
                - "Ask the water and sewerage provider for a capacity check at the site"
                - "Log each reply with the cost range and point of connection"
                - "Write the capacity conclusion into the appraisal notes"
            - name: Connection cost allowance in the appraisal
              description: |-
                ## Purpose
                Appraisals often carry one round number for utilities that was right for a different site in a different year. Building the allowance from the budget estimates, adding infrastructure charges, diversions, on-site distribution and a contingency sized to how firm each figure is gives a line you can defend to a lender. It also shows which service carries the most risk to profit.

                ## Milestones
                1. A cost line per service built from the latest estimate or quote.
                2. Infrastructure or capacity charges, diversions and on-site works shown separately.
                3. A contingency set for each service according to how firm its figure is.
                4. The total compared with the old allowance and the appraisal updated.

                ## Notes
                Point of connection charges are only part of the bill. Trenching on your own land and reinstating the road are often the larger sums.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An itemised utilities cost line per service with contingencies, entered in the current development appraisal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the latest figure for each service into one sheet"
                - "Add infrastructure charges, diversions and on-site trenching separately"
                - "Set a contingency for each line by how firm it is"
                - "Update the appraisal and note the change in profit on cost"
            - name: Utility lead times on the development programme
              description: |-
                ## Purpose
                Electricity connections needing a new substation can take a year or more from application, and a sewer requisition can take months before anyone digs. Putting every application, offer, acceptance, design approval and connection date on the main programme shows which service is on the critical path. It is usually electricity, and knowing that on day one changes when you apply.

                ## Milestones
                1. Typical lead times for each service in your area gathered from the operators and your consultant.
                2. Each service drawn on the programme as application, offer, acceptance, works and connection.
                3. The service on the critical path identified and its float noted.
                4. The latest safe application date for each service written down.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every utility shown on the programme in five stages, with the critical service and its latest safe application date marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each operator for its current quotation and delivery lead times"
                - "Add five stages for each service to the development programme"
                - "Mark the service with the least float as critical"
                - "Update connection dates on the programme from the latest operator replies @recurring(monthly:6)"
            - name: Utility contacts and application register
              description: |-
                ## Purpose
                Each operator gives you a reference number, a case officer and a portal login, and they change when staff move or an application is reissued. One register of contacts, references and status for every service on every site saves an hour each time someone asks where an application stands. It also survives the consultant leaving.

                ## Milestones
                1. A register with one row per service per site: operator, reference, case officer, portal and status.
                2. Escalation contacts recorded for each operator, not just the case officer.
                3. Portal logins held in your password manager, not in the register.
                4. The register checked against each portal and corrected.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register holding the reference, case officer, escalation contact and status for every live utility application."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one row per service per site in a shared register"
                - "Fill in references and case officers from the latest correspondence"
                - "Ask each operator for an escalation contact above the case officer"
                - "Check every contact and reference in the register is still current @recurring(quarterly)"
            - name: Weekly connections tracker review
              description: |-
                ## Purpose
                Applications stall quietly: an offer waits for a missing drawing, a design approval sits in an inbox, a payment is not received. Fifteen minutes each week going through every open item on the tracker, with one named next action and date per line, catches these while they cost days rather than months. It is the single routine that most protects the connection dates.

                ## Milestones
                1. A tracker listing every open utility item with status, next action, owner and date.
                2. A fixed weekly slot in the diary for the review.
                3. Every line with a next action dated within two weeks.
                4. Items stuck for three weeks or more escalated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker is reviewed every week for a quarter, with no open item lacking a dated next action."
                cadence: rolling
              tasks:
                - "Set up the tracker columns: item, status, next action, owner, date"
                - "Review every open utility item and set its next action @recurring(weekly:mon)"
                - "Escalate any item that has not moved in three weeks"
            - name: Monthly network operator chase round
              description: |-
                ## Purpose
                Operators work through queues, and the applicant who calls with a specific question and a reference number tends to move faster than one who waits. A monthly round of calls or emails to every case officer, asking what is outstanding and when the next step is due, keeps your schemes visible. Record each answer, because the dates given become your evidence if a delay is later disputed.

                ## Milestones
                1. A chase list drawn from the register with one question per application.
                2. A call or email made to every live case officer in the month.
                3. Each answer and promised date logged with the name of the person who gave it.
                4. Missed promises from the last round raised with the escalation contact.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live application has a logged contact and promised date each month for six months running."
                cadence: rolling
              tasks:
                - "Write one specific question for each live application"
                - "Contact every case officer on the chase list and log the answers @recurring(monthly:9)"
                - "Raise any broken promise from last month with the escalation contact"
                - "Send the logged dates to the project manager"
            - name: Utilities risk register kept live
              description: |-
                ## Purpose
                Utility risks are rarely one big event: a wayleave refusal, a reinforcement charge after a network change, an offer that lapses while the planning appeal runs. Keeping them in a register with likelihood, cost and time impact, an owner and a mitigation lets you price them in the appraisal and talk about them honestly with the lender. Review it monthly while applications are live.

                ## Milestones
                1. A register with at least the ten common utility risks for the scheme.
                2. Each risk scored for likelihood and for cost and programme impact.
                3. An owner and a mitigation recorded for every risk scored medium or above.
                4. The top three risks reported in the monthly project update.

                ## Notes
                Start from the **Risk register** template. Close risks when they are gone; a register that only grows stops being read.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scored utilities risk register with owners and mitigations, reviewed and updated every month while applications are live."
                cadence: rolling
              tasks:
                - "List ten utility risks specific to this scheme"
                - "Score each risk for likelihood, cost and programme impact"
                - "Review scores and close finished risks in the utilities register @recurring(monthly:16)"
                - "Walk through the register with the full project team @recurring(quarterly)"
            - name: Connection cost tracker against offers
              description: |-
                ## Purpose
                Utility costs move in steps: budget estimate, formal offer, revised offer after design, final invoice, then the reinstatement and attendances nobody priced. Tracking each step against the appraisal line shows where the money went and gives you the evidence to challenge a revised offer. It also feeds the cost report your lender's surveyor reads.

                ## Milestones
                1. A tracker per service with budget, offer, revised offer, committed and paid columns.
                2. Builder's work in connection and road reinstatement tracked as separate lines.
                3. Variance against the appraisal shown for each service.
                4. Any variance over an agreed threshold explained in writing.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cost tracker updated monthly showing budget, offer, committed and paid for every service, with variances explained."
                cadence: rolling
              tasks:
                - "Set up the tracker columns from budget estimate to final payment"
                - "Enter the current offer and committed figure for each service"
                - "Update committed and paid figures and explain variances @recurring(monthly:23)"
                - "Send the utilities lines to the quantity surveyor for the cost report"
            - name: Offer expiry and payment deadline watch
              description: |-
                ## Purpose
                Connection offers are usually valid for a limited period, often around three months, and an offer that lapses goes back into the queue, sometimes at a higher price or with capacity gone. Watching every acceptance date, staged payment and document deadline in one list stops a planning delay or a slow board decision from costing you the capacity. Accepting can also commit you to non-refundable payments, so check the terms before the date arrives.

                ## Milestones
                1. Every live offer listed with its validity date, acceptance requirements and payments due.
                2. A reminder set two weeks before each expiry.
                3. A decision rule written for offers that expire before planning or funding is certain.
                4. Any extension requests made in writing before expiry.

                ## Notes
                Some operators allow an offer to be accepted with a part payment. Ask what is refundable if the scheme does not proceed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No connection offer lapses unintentionally over the life of the scheme, with every expiry date logged and checked monthly."
                cadence: rolling
              tasks:
                - "List every live offer with its expiry date and payments due"
                - "Check upcoming offer expiry dates and staged payments @recurring(monthly:4)"
                - "Write the rule for accepting before planning or funding is certain"
                - "Ask the operator in writing what is refundable on each offer"
            - name: Temporary builders' supplies on site
              description: |-
                ## Purpose
                The contractor needs power and water from the first week, and a site running on diesel generators for months because nobody applied for a builders' supply costs money and annoys neighbours. Arranging the temporary supply early, deciding who pays the bills and checking the route regularly keeps the site running and the bills honest. Make sure the contract says who holds the account.

                ## Milestones
                1. Builders' power and water applications filed with dates that suit start on site.
                2. The contract clear on who holds the accounts and pays the bills.
                3. Meter readings recorded at start and each month.
                4. The temporary supplies removed or converted at the end of the build.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Temporary power and water live by start on site, with monthly meter readings logged and accounts closed at completion."
                cadence: rolling
              tasks:
                - "Confirm with the contractor who applies for and pays the builders' supplies"
                - "Record site meter readings and check the bills @recurring(monthly:27)"
                - "Ask the site manager to walk the temporary cable and pipe routes for damage @recurring(weekly:fri)"
                - "Plan the removal or conversion of temporary supplies at completion"
            - name: Wayleave and easement tracker
              description: |-
                ## Purpose
                A connection that crosses a neighbour's land, a private road or a railway needs a written right, and one reluctant landowner can stop an otherwise ready connection. Tracking each wayleave or easement from first approach to completed deed, with the lawyer and the landowner named, shows early which crossings are at risk. Ask whether the operator, you or your lawyer is leading each one, because it is often assumed to be someone else.

                ## Milestones
                1. Every third-party crossing on the cable, pipe and sewer routes identified.
                2. For each crossing, the landowner, the party leading and the stage recorded.
                3. Any payment or terms requested by landowners logged.
                4. Completed deeds filed and noted on the title or with the operator.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every third-party crossing on the utility routes has a named lead and a recorded stage, updated monthly until all deeds are complete."
                cadence: rolling
              tasks:
                - "Mark every third-party crossing on the route drawings"
                - "Record who is leading each wayleave or easement"
                - "Update the stage of each crossing with the lawyer @recurring(monthly:12)"
                - "File completed deeds with the title documents"
            - name: Utilities coordination slot in design team meetings
              description: |-
                ## Purpose
                Substation rooms, meter cupboards, riser sizes and drainage falls are decided by the architect and engineers, often weeks before the utility designs come back. A fixed ten-minute utilities slot in every design team meeting keeps those spaces and routes matched to what the operators will accept. It is cheaper to move a meter room on paper than on site.

                ## Milestones
                1. A standing utilities item on the design team agenda.
                2. Operator requirements for plant rooms, meter positions and access shared with the architect.
                3. Each clash between the utility designs and the building design logged with an owner.
                4. Coordinated drawings issued before the contractor's construction issue.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Utilities appear on every design team agenda, with clashes logged and closed before construction drawings are issued."
                cadence: rolling
              tasks:
                - "Add a standing utilities item to the design team agenda"
                - "Send the architect each operator's plant room and meter position rules"
                - "Bring the open utilities clash list to the design team meeting @recurring(monthly:19)"
                - "Confirm the coordinated drawings before construction issue"
            - name: Cross-scheme utilities lessons log
              description: |-
                ## Purpose
                The same lessons get learned on every scheme: apply earlier, check the frontage, ask about reinforcement before accepting. A short log of what happened on each scheme, with lead times and costs against what was expected, becomes your own benchmark for the next appraisal. Small developers who keep one quote and programme more accurately within three schemes.

                ## Milestones
                1. One page per completed scheme with actual lead times and costs per service.
                2. The three biggest surprises on each scheme recorded with what would have caught them.
                3. Benchmark lead times and costs per unit drawn from the log.
                4. Changes made to the services schedule and programme templates.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A lessons log with actual lead times and costs for each completed scheme and a benchmark sheet updated each year."
                cadence: cyclic
              tasks:
                - "Write the lessons page for the most recent scheme"
                - "Add lead times and costs from any newly connected scheme @recurring(quarterly)"
                - "Update benchmark lead times and costs per unit from the log @recurring(yearly)"
                - "Change one template based on the latest lessons"
            - name: Reading a connection offer letter
              description: |-
                ## Purpose
                A connection offer is a contract in disguise, with the price split into parts you can and cannot shop around, conditions about land rights and easements, and dates that can lapse. Learning to read one properly lets you spot reinforcement charges, assumptions that do not match your scheme and obligations you would be signing up to. Practise on a real offer before you need to accept one under pressure.

                ## Milestones
                1. The parts of a typical offer identified: scope, point of connection, contestable and non-contestable works, charges, conditions and validity.
                2. One real offer annotated line by line.
                3. Questions for the operator listed where the offer differs from the application.
                4. A one-page checklist for reviewing future offers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real offer annotated and a one-page offer review checklist written and used on the next offer received."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Get a recent connection offer from your consultant or a previous scheme"
                - "Ask the agent to list every charge, condition and date in the offer"
                - "Mark where the offer assumes something different from your application"
                - "Write a one-page checklist for reviewing offers"
            - name: Electrical load basics for developers
              description: |-
                ## Purpose
                Developers who cannot follow the conversation about kilovolt amperes, diversity and after diversity maximum demand end up accepting whatever the engineer or the operator says. A few hours on the basics, worked through on your own scheme, lets you ask why a figure is what it is and whether heat pumps, chargers or lifts have been counted twice. It is not about doing the engineering, only following it.

                ## Milestones
                1. The terms kW, kVA, power factor, diversity and maximum demand understood in plain words.
                2. Your scheme's demand figure traced back to its main loads.
                3. The effect of heating type and EV charging on the figure understood.
                4. Three questions prepared for the services engineer.

                ## Notes
                Agree all design figures with a qualified electrical engineer. This project is for understanding, not for setting loads.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your scheme's electrical demand traced to its main loads in a one-page note, with three questions answered by the engineer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a plain guide to kVA, diversity and maximum demand"
                - "Ask the engineer for the load breakdown behind the scheme figure"
                - "Mark which loads change if heating or charging choices change"
                - "Take three questions to the next engineer call"
            - name: Foul and surface water connection basics
              description: |-
                ## Purpose
                Drainage decides more layouts than people expect: the invert level of the public sewer, whether surface water can go to it at all, and how much it may discharge per second. Understanding gravity and pumped systems, separate and combined sewers and the discharge hierarchy lets you read the drainage strategy and spot where a pumping station or attenuation tank is coming. Those are the items that quietly add cost.

                ## Milestones
                1. Foul, surface and combined sewers distinguished and the local system identified.
                2. Invert levels and falls understood well enough to read a long section.
                3. The discharge hierarchy from infiltration to sewer understood and applied to the site.
                4. The main cost items in the drainage strategy listed.

                ## Notes
                Sustainable drainage design and approval sit with your drainage engineer; keep this project to the connections and what they cost.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining the scheme's foul and surface water route, discharge limits and main cost items."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the nearest public sewer and its invert level on the asset records"
                - "Read the drainage engineer's long section for the connection"
                - "Write down the allowed surface water discharge rate and where it comes from"
                - "List the drainage items that carry the most cost"
            - name: Water supply pressure and fire flow basics
              description: |-
                ## Purpose
                Taller buildings and schemes with sprinklers can need more pressure or flow than the local main delivers, which means booster pumps, storage tanks or a larger connection. Knowing how to read a pressure and flow test and what the fire strategy asks of the supply stops these items appearing late. Ask early, because water providers may need time to confirm what a main can give.

                ## Milestones
                1. Static pressure, residual pressure and flow understood in plain terms.
                2. A pressure and flow test result for the nearest main obtained or requested.
                3. The fire strategy's water requirements for sprinklers, hydrants or risers listed.
                4. The need for boosting or storage confirmed with the services engineer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pressure and flow result and the fire water requirements set side by side, with the boosting decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Request a pressure and flow test for the main serving the site"
                - "List the fire strategy's water demands for sprinklers and hydrants"
                - "Ask the services engineer whether boosting or storage is needed"
                - "Record the answer in the services schedule"
            - name: Wayleaves, easements and adoption explained
              description: |-
                ## Purpose
                Wayleaves, easements, leases of substation land and adoption agreements are different rights with different consequences for your title, your buyers and your lender. Understanding which the operators will ask for, and which are permanent, lets you brief your lawyer properly and avoid granting more than the connection needs. It also explains why some deeds take longer than the works.

                ## Milestones
                1. The difference between a personal wayleave, a permanent easement and a lease recorded in plain words.
                2. The rights each operator usually asks for on a scheme like yours listed.
                3. How adoption of sewers, water mains and roads works in your area summarised, including bonds.
                4. Questions for your lawyer prepared before any rights are granted.

                ## Notes
                This is background for briefing a lawyer. Do not sign any grant of rights without legal advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain summary of the rights operators will ask for on the scheme, reviewed by your lawyer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each operator for its standard form of easement or wayleave"
                - "Summarise which rights are permanent and which can end"
                - "Note how adoption and adoption bonds work for sewers and mains"
                - "Send the summary to your lawyer with your questions"
            - name: Reinforcement charges and who pays
              description: |-
                ## Purpose
                When your load needs the operator to upgrade cables, transformers or sewers beyond your site, part or all of that cost may be charged to you, and the rules differ by country and by operator. Knowing how your operator apportions reinforcement, and what triggers it, tells you whether trimming the load or phasing it could avoid a large charge. It is often the single largest unknown in the connection budget.

                ## Milestones
                1. Your operator's published charging statement or methodology found and read.
                2. The triggers for reinforcement charges on your scheme identified.
                3. The reinforcement element of any offer separated from the connection cost.
                4. Options to reduce the trigger, such as lower load or phasing, listed for the engineer.

                ## Notes
                Charging rules change. Check the operator's current statement rather than relying on a previous scheme.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The reinforcement element of each offer identified and a list of options to reduce it reviewed with the engineer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download the operator's current connection charging statement"
                - "Mark the reinforcement items in your latest offer"
                - "Ask the engineer which load changes would lower the reinforcement"
                - "Record the options and their likely savings"
            - name: Full fibre for new homes
              description: |-
                ## Purpose
                Buyers and tenants now expect fast broadband on the day they move in, and in some places new homes must be built ready for gigabit connections. Fibre providers often install for free on new schemes if you register early and lay their ducts, but miss the window and residents wait months. Learn how developer registration works in your area before the groundworks start.

                ## Milestones
                1. Any local rules on gigabit-ready new homes checked.
                2. The developer programmes of the main fibre providers in the area compared.
                3. Duct and chamber specifications obtained from the chosen provider.
                4. Fibre ducts shown on the external works drawings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fibre duct specifications from a provider shown on the external works drawings before groundworks begin."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether local rules require gigabit-ready new homes"
                - "Read the developer registration pages of two fibre providers"
                - "Ask the chosen provider for its duct and chamber specification"
                - "Send the specification to the civil engineer for the external works drawings"
            - name: Independent connection provider versus network operator quote
              description: |-
                ## Purpose
                In many markets the contestable part of a connection can be built by an accredited independent provider, and the network can even be owned by an independent operator, often at a lower price or faster. Comparing like for like with the incumbent operator, including who adopts the assets and any payments back to you, can change the budget materially. The comparison only works if both quotes cover the same scope.

                ## Milestones
                1. The contestable and non-contestable parts of the incumbent's offer separated.
                2. Quotes from two accredited independent providers on the same scope.
                3. Programme, adoption terms and any asset value payment compared.
                4. A choice recorded with the reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A like-for-like comparison of the incumbent and two independent quotes, with the chosen route and reasons written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Split the incumbent offer into contestable and non-contestable parts"
                - "Ask two accredited independent providers to quote the contestable scope"
                - "Compare price, programme and adoption terms in one table"
                - "Record the chosen route and tell the unsuccessful bidders"
            - name: Substation siting and land transfer
              description: |-
                ## Purpose
                Larger schemes usually need a new substation on site, and its position, access and the land rights the operator wants affect your layout, your landscaping and sometimes a sellable plot. Agreeing a position early with the operator, the architect and the planner avoids redesigning the scheme around a box that arrives late. The land is often transferred or leased to the operator, so involve your lawyer before agreeing.

                ## Milestones
                1. The operator's requirements for size, access, clearances and fire separation obtained.
                2. Two or three positions tested by the architect against layout and planning.
                3. A preferred position agreed in principle with the operator.
                4. Heads of terms for the land transfer or lease reviewed by your lawyer.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A substation position agreed in principle with the operator and the land terms reviewed by your lawyer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the operator for its substation size, access and clearance rules"
                - "Ask the architect to test three positions on the site plan"
                - "Agree a preferred position with the operator's designer"
                - "Send the land transfer terms to your lawyer"
            - name: Gravity drainage or pumping station decision
              description: |-
                ## Purpose
                When the site sits lower than the public sewer, or the route crosses land you cannot get rights over, the choice is between a longer gravity route and a pumping station that someone must adopt or maintain for ever. The difference shows up in capital cost, service charges, planning and buyer questions. Making the choice on a written comparison stops it being made by default late in design.

                ## Milestones
                1. Gravity and pumped options drawn by the drainage engineer with routes and levels.
                2. Capital cost, running cost and land rights compared for each.
                3. The adoption position for a pumping station confirmed with the sewerage provider.
                4. The decision recorded and the drainage strategy updated.

                ## Notes
                An unadopted pumping station becomes a long-term maintenance cost for residents or a management company. Ask early whether adoption is possible.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of gravity and pumped drainage, with the adoption position confirmed and the chosen option recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the drainage engineer to sketch gravity and pumped options"
                - "Price capital and running costs for both options"
                - "Confirm with the sewerage provider whether a pumping station can be adopted"
                - "Record the decision in the drainage strategy"
            - name: Gas or all-electric heating decision
              description: |-
                ## Purpose
                Whether a scheme has a gas supply changes the electricity load, the plant space, the connection budget and in many places whether the scheme meets current energy rules. Deciding early, with the effect on the electrical connection costed, avoids applying twice. Where gas is still allowed, an all-electric scheme can still be cheaper overall once a second utility, its meters and its trenches are removed.

                ## Milestones
                1. Local rules on gas in new buildings checked with the energy consultant.
                2. Electrical demand with and without gas worked out by the services engineer.
                3. Connection, plant and running costs compared for both routes.
                4. The heating route chosen and the services schedule updated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed comparison of gas and all-electric routes, with the chosen route recorded before connection applications are filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the energy consultant whether local rules allow gas in new homes"
                - "Get electrical demand figures for both heating routes"
                - "Compare connection and running costs in one table"
                - "Update the services schedule with the chosen route"
            - name: Self-lay water mains decision
              description: |-
                ## Purpose
                On larger sites the water mains and service pipes can often be laid by an accredited self-lay contractor rather than the water provider, which can bring the programme under your control and sometimes earn a payment back. It also moves design, testing and adoption obligations onto your side. Compare the routes on the same scope before the groundworks contractor is appointed.

                ## Milestones
                1. The water provider's quote and a self-lay contractor's quote on the same scope.
                2. Programme control, testing and adoption responsibilities compared.
                3. Any asset payment or discount from the provider confirmed in writing.
                4. The chosen route recorded and written into the groundworks package.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Self-lay and provider-laid options compared on one scope, with the chosen route written into the groundworks package."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the water provider for its quote for mains and services"
                - "Get a quote from an accredited self-lay contractor for the same scope"
                - "Compare price, programme and adoption duties side by side"
                - "Write the chosen route into the groundworks tender"
            - name: Fibre provider choice for the scheme
              description: |-
                ## Purpose
                Fibre providers differ in what they install free, how many homes they need before they will commit, whether they let other internet providers sell over their network and how long they take after build. Choosing on these terms, rather than taking the first offer, matters to buyers and tenants who will live with the choice. For build-to-rent and mixed-use, the wayleave terms for the building matter too.

                ## Milestones
                1. Two or three providers asked for their developer terms in writing.
                2. Cost to you, open access, install lead time and wayleave terms compared.
                3. A provider chosen and the developer agreement reviewed.
                4. The provider's programme dates added to the services tracker.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fibre provider chosen from at least two compared offers, with the developer agreement signed and dates on the tracker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request developer terms from three fibre providers"
                - "Compare cost, open access, lead time and wayleave terms"
                - "Sign the developer agreement with the chosen provider"
                - "Add the provider's install dates to the tracker"
            - name: Shared trench and service corridor layout
              description: |-
                ## Purpose
                Each utility digging its own trench across the site costs time, damages finished surfaces and creates clashes with trees and drainage. Agreeing a service corridor where operators allow shared trenching, with the separations each requires, saves groundworks cost and protects landscaping. It needs agreeing before the external works are drawn, not after the first trench is open.

                ## Milestones
                1. Each operator's separation and depth rules gathered.
                2. A service corridor drawn on the external works plan with cross-sections.
                3. Shared trench sections agreed with the operators that allow them.
                4. Tree root zones and drainage runs checked against the corridor.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A service corridor drawing with cross-sections, accepted by each operator, issued with the external works drawings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect separation and depth rules from each operator"
                - "Ask the civil engineer to draw a service corridor with cross-sections"
                - "Send the corridor drawing to each operator for comment"
                - "Check the corridor against tree protection and drainage plans"
            - name: EV charging capacity for the scheme
              description: |-
                ## Purpose
                Many places now require new homes or car parks to have EV chargers or the ducts for them, and twenty chargers at full power can exceed the load of the homes they serve. Planning load management from the start, so chargers share capacity rather than each drawing full power, can keep the connection within the existing network. The choice also affects the meter and cable layout in the car park.

                ## Milestones
                1. Local requirements for chargers or passive provision checked.
                2. Charger numbers and power ratings agreed with the services engineer.
                3. A load management approach chosen and its effect on demand calculated.
                4. Ducts and cable routes for future chargers shown on the drawings.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Charger numbers, load management and the resulting demand figure agreed and included in the electrical application."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the local rules for chargers and passive provision"
                - "Agree charger numbers and power ratings with the engineer"
                - "Ask for the demand figure with and without load management"
                - "Show future charger ducts on the car park drawings"
            - name: Solar and battery to ease grid capacity
              description: |-
                ## Purpose
                Where the network is short of capacity, on-site solar, batteries and controls that cap the import can reduce the connection you need or let you connect sooner on a limited offer. The engineering and the operator's agreement both matter, and the savings must be weighed against plant space and maintenance. Test it when the first capacity reply comes back with bad news.

                ## Milestones
                1. The capacity shortfall and the cost or delay it causes stated in figures.
                2. A solar, battery or export limitation option sketched by the services engineer.
                3. The operator asked whether a lower or flexible import would change the offer.
                4. A decision recorded with capital cost, saving and maintenance compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed comparison of a standard connection and an on-site generation or battery option, with the operator's response recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the capacity shortfall in kVA and its cost or delay"
                - "Ask the services engineer to sketch a solar and battery option"
                - "Ask the operator whether a capped import changes the offer"
                - "Compare cost, saving and maintenance and record the decision"
            - name: Diversion of services crossing the site
              description: |-
                ## Purpose
                Cables, mains and sewers running through the middle of a site often have to move before you can build, and diversions are slow because the operator designs and usually builds them on its own timetable. Starting the diversion application as soon as the layout is fixed, with costs and land rights agreed, can save months. On many schemes the diversion, not the new connection, is what holds up start on site.

                ## Milestones
                1. Every asset that clashes with the layout confirmed by survey.
                2. Diversion applications filed with the operators concerned.
                3. Diversion offers received, accepted and paid on time.
                4. Diversion works complete and the old assets confirmed dead or removed.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All clashing services diverted and the old assets confirmed dead or removed before the dependent works start."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every asset that must move before building starts"
                - "File a diversion application with each operator concerned"
                - "Accept and pay each diversion offer before it expires"
                - "Get written confirmation that each old asset is dead or removed"
            - name: Disconnections before demolition
              description: |-
                ## Purpose
                Demolition cannot safely start until every existing supply is cut off and confirmed dead by the operator, and disconnection requests have their own lead times. Booking them early, with written confirmation for the demolition contractor, prevents a stood-down crew and a serious safety risk. Keep any supply you need for the site welfare unit or hoardings.

                ## Milestones
                1. Every existing supply to the buildings identified, including old and redundant ones.
                2. Disconnection requests filed with each operator.
                3. Written confirmation of each disconnection received.
                4. The confirmations given to the demolition contractor before work starts.

                ## Notes
                Never rely on a building appearing empty. Old cables and gas services can remain live long after occupation ends.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written disconnection confirmations for every supply handed to the demolition contractor before demolition begins."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every supply to the existing buildings from meters and records"
                - "Request disconnection from each operator with the demolition date"
                - "Collect written confirmation for each disconnection"
                - "Give the confirmations to the demolition contractor"
            - name: Permanent connection and energisation day
              description: |-
                ## Purpose
                The day the permanent supplies go live depends on the operator's crew, your contractor's readiness, completed testing and paperwork all arriving together. A checklist and a confirmed date a few weeks ahead stop a missed slot that may not come round again for weeks. Without permanent power, commissioning, sales completions and occupation all slip.

                ## Milestones
                1. Readiness criteria from each operator listed and checked off.
                2. Energisation and connection dates confirmed in writing.
                3. Testing and commissioning certificates ready for inspection.
                4. Permanent supplies live and temporary supplies scheduled for removal.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Permanent supplies live on the confirmed date, with every operator readiness item signed off in advance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each operator for its readiness checklist before connection"
                - "Confirm connection dates in writing with each operator"
                - "Collect the testing certificates the operators will ask for"
                - "Book the removal of temporary supplies after energisation"
            - name: Road opening permits for off-site works
              description: |-
                ## Purpose
                Connections in the public road need permits, traffic management and sometimes road closures, and the highway authority can refuse dates or require notice measured in months on busy roads. Knowing who applies, whether the operator's or your contractor's permit covers the works, and how reinstatement is checked avoids crews turning up to dig with no permit. Coordinate several utilities into one occupation of the road where you can.

                ## Milestones
                1. Every off-site dig listed with location, operator and contractor.
                2. Who holds each permit and the notice period confirmed.
                3. Traffic management plans agreed and dates booked.
                4. Reinstatement inspected and signed off.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every off-site utility dig carried out under a valid permit, with reinstatement signed off by the highway authority."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every dig in the public road with its operator and contractor"
                - "Confirm who applies for each permit and the notice needed"
                - "Ask the operators whether two digs can share one road occupation"
                - "Get reinstatement sign-off for each dig"
            - name: Utility evidence for planning conditions
              description: |-
                ## Purpose
                Planning permissions often carry conditions about drainage, water capacity or energy that must be discharged before start or occupation, and the planning authority will want evidence from the operators. Gathering capacity letters, drainage approvals and energy calculations in one submission avoids conditions blocking start on site. Ask the operators for letters early, because some take weeks to issue.

                ## Milestones
                1. Every utility-related condition listed with its trigger point.
                2. The evidence each condition needs identified.
                3. Operator letters, approvals and calculations gathered.
                4. Discharge applications submitted and decisions logged.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every utility-related planning condition discharged before its trigger point, with decisions logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every planning condition that touches drainage, water or energy"
                - "Ask each operator for the capacity or approval letter needed"
                - "Ask the agent to draft the cover letter for the discharge submission"
                - "Log each condition decision and date"
            - name: Utilities pack for the lender's monitoring surveyor
              description: |-
                ## Purpose
                Construction lenders and their monitoring surveyors want to see that connections are applied for, accepted and programmed before they release money, and a weak answer can delay a drawdown. A short pack with offers, acceptances, payments, programme dates and risks answers their questions in one place. Update it before each monitoring visit rather than rebuilding it.

                ## Milestones
                1. A pack listing each service with its offer, acceptance, payment and connection date.
                2. Copies of offers and acceptances attached.
                3. Utility risks and mitigations summarised on one page.
                4. The pack updated before each monitoring visit.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A utilities pack covering every service, sent to the monitoring surveyor before each visit with no follow-up questions left open."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Summarise each service's offer, acceptance and connection date on one page"
                - "Attach copies of every accepted offer"
                - "Add the top utility risks from the register"
                - "Send the pack to the monitoring surveyor before the next visit"
            - name: Meter registration and handover to buyers
              description: |-
                ## Purpose
                Buyers and tenants who move in to find no meter registered, no supplier assigned or a landlord supply billed to the wrong account give a scheme a bad name fast. Registering every meter, recording serial numbers and readings at handover and giving each owner a page of supply details closes the connection work properly. It also stops you paying for energy used by occupied homes.

                ## Milestones
                1. Every meter registered with its unique reference and an initial supplier.
                2. Serial numbers and opening readings recorded for each unit at handover.
                3. Landlord and common area supplies placed in the correct name.
                4. A supply details page given to every buyer or tenant.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every unit handed over with a registered meter, recorded reading and supply details page, and common supplies in the right name."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every meter on the scheme with its reference number"
                - "Record serial numbers and readings at each unit handover"
                - "Move common area supplies into the management company's name"
                - "Give each buyer a page with their meter and supplier details"
            - name: First scheme connections for a small developer
              description: |-
                ## Purpose
                On a first scheme of a few homes, utilities are usually the part the small developer knows least and the contractor assumes someone else is handling. A simple plan covering who applies for what, when, and what it is likely to cost, written before the land is bought, avoids the classic finished homes with no power. It can be done in evenings with a services engineer on a small fee.

                ## Milestones
                1. The services schedule, demand figures and budget estimates done in a simplified form.
                2. Responsibilities between you, the contractor and any consultant written down.
                3. Applications filed early enough to meet the planned completion.
                4. Connection costs and dates checked against the appraisal before buying.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page utilities plan for the first scheme, with responsibilities, application dates and costs, agreed before purchase."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a services engineer for a fixed fee to cover demand figures and applications"
                - "Write who applies for each service: you, the contractor or the engineer"
                - "File applications to meet the planned completion date"
                - "Check the connection costs against the appraisal before exchange"
            - name: Infill plot connections for a builder
              description: |-
                ## Purpose
                Builders putting one to six homes on an infill plot usually connect into existing services in the street, often under a pavement and close to neighbours' supplies. Getting the connections, shared drains and road opening sorted early, and talking to neighbours before the road is dug, prevents delays and disputes. Small jobs still need the same applications as large ones, just fewer of them.

                ## Milestones
                1. Existing supplies on the plot and in the street confirmed.
                2. Connection applications for each home filed with the operators.
                3. Any shared or private drain checked for rights and condition.
                4. Neighbours told of road and pavement works with dates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Every home on the plot has connection applications filed and private drainage rights confirmed before groundworks begin."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check which supplies already serve the plot"
                - "File connection applications for each new home"
                - "Ask your lawyer whether any shared drain needs rights"
                - "Write to neighbours with the dates of street works"
            - name: Landowner services statement before a sale
              description: |-
                ## Purpose
                Landowners selling to developers get better offers when they can show what services reach the site and what the operators said about capacity. A short services statement with asset records, budget estimates and any known constraints answers the buyer's first questions and reduces the price chips that come later. It costs a few hundred in fees and a few hours.

                ## Milestones
                1. Asset records obtained for the site and frontage.
                2. Budget estimates or capacity checks requested from the main operators.
                3. A two-page statement of services, capacity and constraints written.
                4. The statement added to the sale pack.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page services statement with asset records and capacity replies included in the land sale pack."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Order asset records for the site and its frontage"
                - "Ask the main operators for a capacity check"
                - "Write a two-page services and constraints statement"
                - "Add the statement to the sale pack for the agent"
            - name: Commercial conversion utility upgrades
              description: |-
                ## Purpose
                Converting an office or shop into flats or a mixed-use building usually means splitting one large commercial supply into many domestic ones, adding water meters and reworking drainage. The existing supply rarely fits the new use, and the building may need new risers or a substation room. Surveying what is there before buying shows the true cost of the change of use.

                ## Milestones
                1. The existing supplies, meters and risers surveyed and their capacity recorded.
                2. The new demand for the converted building calculated.
                3. Upgrade, splitting and metering options costed with the services engineer.
                4. Riser and meter room space agreed with the architect.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed upgrade plan for the conversion, with new risers and meter positions agreed, before purchase or design freeze."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the services engineer to survey the existing supplies and risers"
                - "Calculate demand for the converted building"
                - "Price splitting, upgrading and metering options"
                - "Agree riser and meter room space with the architect"
            - name: Caribbean utility applications for a single building
              description: |-
                ## Purpose
                In many Caribbean jurisdictions power comes from one electricity company, water from a national authority, and sewers may not reach the site at all, so a single villa block or apartment building can need a transformer, a water storage tank and on-site wastewater treatment. Applications often need approved plans and inspections first, and timelines vary widely between islands. Asking the utilities early, in person where that is how things move, protects the opening date.

                ## Milestones
                1. The electricity company, water authority and any sewerage provider for the parcel identified.
                2. Each utility's application requirements and inspection steps listed.
                3. Water storage, any transformer and on-site wastewater needs agreed with the engineer.
                4. Applications filed with stamped drawings and progress logged.

                ## Notes
                Requirements differ across islands. Confirm the current process with each utility and your local engineer rather than relying on another island's rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Applications filed with every utility serving the parcel, with inspection steps and on-site storage and treatment needs recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Visit or call each utility office to confirm the application steps"
                - "Agree water storage and wastewater needs with the local engineer"
                - "File applications with the stamped drawings"
                - "Log each inspection date and result"
            - name: Rural site with no mains services
              description: |-
                ## Purpose
                Rural and island sites can be far from the nearest sewer, main or adequate cable, and the cost of bringing them can exceed the land value. Comparing mains extensions with boreholes, rainwater storage, packaged treatment and off-grid power, with running costs and approvals, shows whether the site works at all. Buyers and lenders will want the answer in writing.

                ## Milestones
                1. Distance and cost to the nearest mains for each service established.
                2. Off-grid options for each service listed with their approvals.
                3. Capital and running costs compared for mains and off-grid.
                4. A servicing route chosen and written into the appraisal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed comparison of mains and off-grid servicing for each utility, with the chosen route in the appraisal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the nearest mains for each service on the asset records"
                - "Ask each operator for the cost of extending to the site"
                - "List off-grid options and the approvals each needs"
                - "Compare costs and record the servicing route"
            - name: Private wastewater treatment plant
              description: |-
                ## Purpose
                Where there is no sewer, a packaged treatment plant serving a small scheme needs a discharge consent or permit, a design sized to the population, access for maintenance and someone responsible for it once the homes are sold. Getting these settled before planning avoids late redesigns and residents inheriting a problem. Plan the long-term maintenance as carefully as the plant itself.

                ## Milestones
                1. The discharge route and the permit or consent needed confirmed with the environmental regulator.
                2. The plant sized and specified by the drainage engineer.
                3. Long-term ownership and maintenance arrangements agreed and costed.
                4. A maintenance contract and log in place from handover.

                ## Notes
                Discharge rules are set by the environmental regulator. Confirm them before committing to a plant or layout.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A treatment plant with its discharge permit, sizing, ownership and maintenance contract agreed before handover."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the environmental regulator what permit the discharge needs"
                - "Ask the drainage engineer to size and specify the plant"
                - "Agree who will own and maintain the plant after sale"
                - "Log each treatment plant service visit and result @recurring(quarterly)"
            - name: Grid queue and phased load strategy
              description: |-
                ## Purpose
                In constrained grid areas, connections for larger schemes can be offered years away because of queues and upstream reinforcement. A strategy that phases the load to match the delivery of homes, accepts an interim or flexible offer and watches the queue lets the first phases complete on time. It needs early, informed conversations with the operator and a clear view of the programme.

                ## Milestones
                1. The queue position and upstream works blocking the full connection understood.
                2. Load per phase calculated and matched to the build programme.
                3. Interim, flexible or phased offers explored with the operator.
                4. The queue position checked regularly and any movement acted on.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A phased load plan agreed with the operator, with interim capacity in place for the first phase and the queue position checked each quarter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the operator which upstream works your connection depends on"
                - "Work out load per phase with the services engineer"
                - "Ask for interim, flexible or phased offers in writing"
                - "Check the queue position and upstream works dates with the operator @recurring(quarterly)"
            - name: Private wire and embedded generation export
              description: |-
                ## Purpose
                Larger and mixed-use schemes sometimes run their own private network or install generation that exports to the grid, which needs the operator's approval, metering arrangements and in some places a licence or exemption. Understanding the export application, the protection the operator requires and who will run the network after sale avoids building something that cannot be energised. Take regulatory advice early on any private network.

                ## Milestones
                1. The export application process and protection requirements confirmed with the operator.
                2. The licensing or exemption position for a private network reviewed with a specialist.
                3. A long-term operator for the private network identified.
                4. The export or private network agreement in place before energisation.

                ## Notes
                Private networks and resale of electricity are regulated in many jurisdictions. Do not proceed without specialist regulatory advice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved export application or private network agreement, with licensing reviewed by a specialist, in place before energisation."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the operator for its export application process and protection rules"
                - "Book a call with a specialist on private network licensing"
                - "Identify who would operate the private network after sale"
                - "Agree the export or private network terms before energisation"
---

# Site Utilities and Connections

Site utilities are the part of a development that nobody owns until it is late: getting electricity, water, foul and surface water drainage, gas where it is still used, and fibre from the public network onto your land and into every unit. This area is for founders and small developers running their own schemes and for builders and small firms who handle connections themselves. It starts with the foundations of a services schedule, asset searches, demand estimates and early enquiries, moves to the routines that keep applications and offers moving, then the skills of reading offers, loads and drainage, the decisions on independent providers, substations, pumping and heating, the dated moments from diversions to energisation, situations for different kinds of developer, and specialist work on private treatment, grid queues and private wire.

The rhythms are a weekly tracker review, a monthly chase round with each network operator, monthly checks on the risk register, costs, offer expiry dates, wayleaves and temporary supplies, quarterly refreshes of asset records, contacts and grid queue positions, and a yearly lessons review across schemes. Operational checklist suits the asset search and the energisation day, Risk register suits the utilities risk register, Vendor suits the connection consultant, Meeting notes suits the design team slot, Metrics log suits the cost tracker and Purchase decision suits the fibre provider choice. Nothing here is engineering, legal or regulatory advice: confirm loads and designs with a qualified services engineer, and land rights and charges with your lawyer and the network operator. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
