---
id: family-office.multiple-residences-management
name: Multiple Residences Management
description: "Several homes run as one estate: a register of every residence, maintenance calendars, staff and suppliers at each property, budgets, security systems and the routines for opening and closing seasonal homes."
category: personal
version: 1.0.0
tags: [family-office, multiple-residences-management, parent, homeowner, estate-management, seasonal-homes, property-maintenance, second-homes]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - vendor
    - risk-register
    - purchase-decision
    - metrics-log
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Multiple Residences Management
          description: "Running several homes: estate managers, maintenance calendars, staff at each property, budgets, security and opening and closing seasonal homes."
          projects:
            - name: Register of every family residence
              description: |-
                ## Purpose
                Ask three family members how many homes the family owns and you often get three answers, because a ski flat sits in a company, a beach house belongs to a trust and a London pied-à-terre is rented. One register listing every residence, its address, how it is used and who looks after it is the page every later decision in this area starts from.

                ## Milestones
                1. Every owned, leased or shared residence listed with its full address and country.
                2. Each home tagged as main, seasonal, occasional or let, with the months it is normally used.
                3. The person responsible on the ground named for each property, with a phone number.
                4. The register saved in the family office vault and shared with the principal.

                ## Notes
                Include homes used by the family but owned by someone else, such as a parent's house the office now maintains. They carry the same risks and costs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single register lists every residence with address, use pattern and on-site contact, and the principal has confirmed nothing is missing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every home the family owns, leases or regularly uses"
                - "Note the months each home is normally occupied"
                - "Name the person responsible on site for each property"
                - "Ask the principal to confirm the register is complete"
            - name: Ownership and title check for each home
              description: |-
                ## Purpose
                Homes bought over thirty years end up held in a mix of personal names, companies and trusts, and the holder decides who signs contracts, who pays the local taxes and whose insurance applies. Confirming the legal owner of each residence and where its deeds sit prevents a staff contract or a building permit being signed by the wrong entity.

                ## Milestones
                1. The registered owner of each residence confirmed against a current title extract or deed.
                2. The original deeds or title documents located for every property.
                3. Any home where the paying entity differs from the owning entity flagged.
                4. Mismatches discussed with the family's lawyer and a correction plan recorded.

                ## Notes
                This is a records exercise, not legal advice. Where a home sits in a trust, the trustee may need to approve contracts and works, so note that in the register.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each residence in the register shows its confirmed legal owner and deed location, with mismatches referred to the family's lawyer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Order a current title extract for each property from the land registry"
                - "Record where the original deeds for each home are kept"
                - "Compare the owning entity with the entity paying each home's bills"
                - "Send any mismatch to the family lawyer with a short summary"
            - name: Family usage calendar across the homes
              description: |-
                ## Purpose
                Staff at a seasonal home cannot plan deep cleans, repairs or their own leave if they hear about a family arrival two days ahead. A shared calendar showing who expects to be at which house, and when, lets each property schedule works into the empty weeks and staff the busy ones.

                ## Milestones
                1. A shared calendar with one lane per residence set up.
                2. The coming twelve months of known family stays entered for every home.
                3. Planned works and staff leave added to the same calendar.
                4. Each estate or house manager given view access to their property's lane.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every residence has a calendar lane with family stays, works and staff leave for the next twelve months, visible to its manager."
                cadence: rolling
              tasks:
                - "Create a shared calendar with one lane for each residence"
                - "Enter every family stay already planned for the next year"
                - "Give each property manager view access to their lane"
                - "Update the usage calendar with newly confirmed family plans @recurring(weekly:mon)"
            - name: Operating model for each residence
              description: |-
                ## Purpose
                Every home needs someone in charge, but not every home needs a resident estate manager. Deciding for each property whether it is run by live-in staff, a part-time house manager, a local caretaker or a property management company sets the staffing, the budget and who the office calls when a pipe bursts at three in the morning.

                ## Milestones
                1. Each residence classed by size, occupancy and complexity.
                2. An operating model chosen for each home: resident staff, house manager, caretaker or management company.
                3. Reporting lines from each property to the family office drawn on one page.
                4. The model for each home approved by the principal.

                ## Notes
                Hiring and supervising an estate manager has its own area. Here the decision is which model each house gets, not how to recruit for it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page chart shows the operating model and reporting line for every residence, signed off by the principal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score each home for size, months occupied and building complexity"
                - "Match each home to one of four operating models"
                - "Draw the reporting lines from each property to the office"
                - "Present the chosen model for each home to the principal"
            - name: Building condition survey of every home
              description: |-
                ## Purpose
                Before a maintenance plan or capital budget means anything, the office needs to know the state of each roof, boiler, pool plant and electrical board. A condition survey by a building surveyor at each property, with remaining life estimates, turns a vague worry about old houses into a ranked list of what fails first.

                ## Milestones
                1. A qualified surveyor appointed for each property, or one firm covering several.
                2. A written condition report received for every residence.
                3. Urgent safety items from each report actioned or scheduled.
                4. Remaining life of major building elements entered in one portfolio sheet.

                ## Notes
                Ask for the survey to cover building services as well as fabric. A report that ignores the plant room misses the most expensive failures.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every residence has a condition survey dated within the last twelve months, and urgent items from each have an owner and a date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask two surveying firms to quote for condition surveys at each home"
                - "Brief the surveyor on each building's age and known problems"
                - "Schedule urgent safety items from each report with a contractor"
                - "Enter remaining life of roofs, plant and wiring in a portfolio sheet"
            - name: Keys, codes and access inventory
              description: |-
                ## Purpose
                Keys to five houses held by gardeners, former staff, a neighbour and a pool contractor are a security gap nobody can see. An inventory of every key, fob, alarm code and gate remote, and who holds each one, is what lets the office change access in an afternoon when someone leaves.

                ## Milestones
                1. Every physical key, fob, remote and digital code listed per residence.
                2. The current holder of each key or code recorded by name.
                3. Keys held by people who no longer need them recovered or locks changed.
                4. A secure master record stored where only named office staff can open it.

                ## Notes
                Do not keep codes in the same document as addresses. Store the code list in the office password manager and the key list separately.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A per-home record of every key and code and its holder exists, and no one outside the current authorised list holds access."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each property manager to list every key, fob and code they know of"
                - "Record the holder of each key against their name"
                - "Recover keys from former staff and contractors or change the locks"
                - "Audit key holders and change codes after any staff change @recurring(quarterly)"
            - name: Utility, service and contract register per home
              description: |-
                ## Purpose
                Each house quietly runs on twenty contracts: power, water, internet, alarm monitoring, gas, pool, garden, pest control, generator servicing and more. Gathering them into one register with renewal dates and notice periods ends the auto-renewals nobody reviewed and the outages caused by an expired card on a utility account.

                ## Milestones
                1. Every utility and service contract at each residence listed with supplier and account number.
                2. Renewal dates, notice periods and annual cost recorded for each contract.
                3. The paying entity and payment method noted per contract.
                4. Contracts with no clear owner assigned to a named person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each residence has a contract register with supplier, renewal date, notice period and cost for every service, and each contract has a named owner."
                cadence: rolling
              tasks:
                - "Pull twelve months of payments for each home to find every supplier"
                - "Enter each contract with its renewal date and notice period"
                - "Assign a named owner to each contract in the register"
                - "Check upcoming renewal dates and notice deadlines in the register @recurring(monthly:10)"
            - name: Running-cost baseline for each residence
              description: |-
                ## Purpose
                Running costs per home are usually hidden across household accounts, company cards and the principal's own bank, so nobody can say what the mountain chalet costs a year. Twelve months of real spending per property, split into staff, utilities, maintenance, insurance, taxes and supplies, gives each house an honest annual figure to budget from.

                ## Milestones
                1. Every account that paid costs for each residence in the last twelve months identified.
                2. Twelve months of payments gathered and tagged to a property.
                3. Each property's spending split into six or seven standard categories.
                4. An annual running cost per residence agreed with the principal.

                ## Notes
                Include costs paid personally, such as staff tips or a gardener paid in cash. They are the ones that never reach a budget.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet shows twelve months of categorised spending for each residence and an annual total the principal has accepted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every account and card that paid costs for any of the homes"
                - "Export twelve months of transactions from each account"
                - "Tag each payment to a residence and a cost category"
                - "Agree the annual running cost of each home with the principal"
            - name: House manual for each residence
              description: |-
                ## Purpose
                Staff turnover and long empty months mean the knowledge of where the water stopcock is, how the pool heater restarts and which breaker feeds the wine room usually lives in one person's head. A written house manual for each home, with photographs, keeps the house working when that person is away or gone.

                ## Milestones
                1. Shut-off points for water, gas and power photographed and located on a floor plan.
                2. Start-up and reset steps written for each major system in the house.
                3. Emergency contacts and approved contractors listed at the front.
                4. Family preferences for each room recorded, such as temperatures and bedding.
                5. A printed copy kept on site and a digital copy in the office vault.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every residence has a house manual covering shut-offs, systems, contacts and preferences, with a copy on site and in the vault."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Walk each house with its manager and photograph every shut-off point"
                - "Write reset steps for heating, cooling, pool and backup power"
                - "List emergency contacts and approved contractors at the front"
                - "Print a copy for the site and file the digital version in the vault"
            - name: Annual maintenance calendar for every property
              description: |-
                ## Purpose
                Gutters, chimneys, fire extinguishers, pool filters, septic tanks and roof inspections all have their own intervals, and across several homes they collide or get forgotten. One calendar that lists every recurring maintenance job by house and month means each manager knows what is due before the family arrives rather than after something fails.

                ## Milestones
                1. Every recurring maintenance job at each residence listed with its interval.
                2. Jobs placed into months that avoid the family's planned stays.
                3. A responsible person or contractor named for each job.
                4. Last completion date recorded for every job in the calendar.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month maintenance calendar covers every residence, with each job assigned, and at least nine in ten jobs completed in the month planned."
                cadence: cyclic
              tasks:
                - "List every recurring maintenance job at each home with its interval"
                - "Move jobs into months when each house is empty"
                - "Name a contractor or staff member for every job"
                - "Run the monthly maintenance checklist at each home and record completions @recurring(monthly:3)"
            - name: Monthly property report from each home
              description: |-
                ## Purpose
                Without a standard report, one house manager sends a cheerful message and another sends forty photographs, and the office still cannot tell which roof is leaking. A one-page monthly report from every residence, in the same format, covering works done, issues open, spending and upcoming needs, lets the principal read the whole portfolio in ten minutes.

                ## Milestones
                1. A one-page report format agreed with every property manager.
                2. The first round of monthly reports received from each residence.
                3. Open issues from the reports gathered into one portfolio summary.
                4. Reports filed by property and month in the office system.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every residence sends a monthly report in the agreed format by the fifth of the month, and open issues appear on one portfolio summary."
                cadence: rolling
              tasks:
                - "Draft a one-page monthly report format with five standard sections"
                - "Send the format to every property manager with a due date"
                - "Review the monthly report from each property and log open issues @recurring(monthly:6)"
                - "Send the principal a portfolio summary of the month's issues"
            - name: Planned preventive maintenance of building systems
              description: |-
                ## Purpose
                Air conditioning, boilers, water treatment, lifts, generators and pool plant fail expensively and usually at the worst moment, often in a house nobody has visited for weeks. Service contracts with scheduled visits and written service records for each system keep warranties valid and cut emergency call-out bills.

                ## Milestones
                1. Every major building system at each home listed with make, model and age.
                2. A service contract or scheduled visit in place for each system.
                3. Service records for the last two years gathered per system.
                4. Systems out of warranty or with no service history flagged for review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every major building system at each residence has a scheduled service and a service record no older than its interval."
                cadence: rolling
              tasks:
                - "List each home's major systems with make, model and installation year"
                - "Collect service records for the last two years from each contractor"
                - "Arrange service contracts for any system without one"
                - "Confirm the quarter's service visits are booked at every home @recurring(quarterly)"
            - name: Monthly budget against actual for each home
              description: |-
                ## Purpose
                Overspending at one property is easy to miss when the total looks fine, and by year end a pool rebuild or a staff overtime habit has eaten the reserve. Comparing each home's actual spending with its budget every month, category by category, catches drift while there is still time to act on it.

                ## Milestones
                1. An annual budget per residence set in the same categories as the baseline.
                2. Actual spending posted to each home's budget lines monthly.
                3. Variances above an agreed threshold explained by the property manager.
                4. A year-to-date view of every home available to the principal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each residence has a monthly budget-to-actual report, and every variance above the agreed threshold has a written explanation within ten days."
                cadence: rolling
              tasks:
                - "Set each home's annual budget using the baseline categories"
                - "Agree a variance threshold that needs a written explanation"
                - "Compare each home's spending with its budget and query variances @recurring(monthly:15)"
                - "Share the year-to-date view with the principal"
            - name: Approved contractor roster across the homes
              description: |-
                ## Purpose
                When the plumber who knows the house retires or a new manager starts, the office scrambles for someone trustworthy at short notice, often at emergency rates. A roster of approved contractors for each trade at each location, with insurance, licences and rates on file, means the next call goes to someone already vetted.

                ## Milestones
                1. Approved contractors listed for each trade at every residence.
                2. Insurance certificates and trade licences on file for each one.
                3. Agreed rates or call-out charges recorded.
                4. A backup contractor named for plumbing, electrical and roofing at each home.

                ## Notes
                Start from the **Vendor** template for each contractor. Background checks on people who work inside the house belong to the staff vetting area.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each residence has at least one approved and insured contractor, plus a backup, for plumbing, electrical, roofing, pool and garden."
                cadence: rolling
              tasks:
                - "Ask each property manager for the contractors they use and trust"
                - "Collect insurance certificates and licences from each contractor"
                - "Name a backup contractor for each critical trade at every home"
                - "Check that contractor insurance and licences are still current @recurring(yearly)"
            - name: Empty-house inspection routine
              description: |-
                ## Purpose
                Insurers often require an unoccupied home to be checked at set intervals, and an unnoticed leak in an empty house can run for weeks before anyone sees it. A written routine of walk-throughs for each house while the family is away, with a dated log, protects the building and keeps the insurance conditions met.

                ## Milestones
                1. The inspection interval required by each home's insurer confirmed.
                2. A standard checklist covering water, power, security, pests and weather damage.
                3. A named inspector for each empty residence, with a stand-in.
                4. A dated visit log kept for every inspection.

                ## Notes
                Ask the broker for the exact wording of any unoccupancy condition. Some policies define empty as thirty days, others as sixty.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every unoccupied residence is inspected at least as often as its insurer requires, with a dated log entry for each visit."
                cadence: rolling
              tasks:
                - "Ask the insurance broker for each home's unoccupancy conditions"
                - "Write a one-page inspection checklist for empty houses"
                - "Walk through each empty home and log the visit with photographs @recurring(weekly:wed)"
                - "File the month's inspection logs in the property folder @recurring(monthly:28)"
            - name: Arrival readiness standard for family stays
              description: |-
                ## Purpose
                The principal arriving at a house with a dead pool pump, stale linen and an empty fridge judges the whole office by it. A written readiness standard, worked through at each home in the days before every family arrival, means the house is aired, stocked and tested whichever manager is on duty.

                ## Milestones
                1. A readiness checklist agreed for each residence, covering systems, rooms, supplies and vehicles.
                2. Lead times set for each step, such as pool heating or grocery orders.
                3. A sign-off message from the house to the office before each arrival.
                4. Problems found at arrival logged and fed back into the checklist.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every family arrival in a twelve-month period is preceded by a completed readiness checklist and a sign-off message from the house."
                cadence: rolling
              tasks:
                - "Write the readiness checklist for one home with its manager"
                - "Add the lead time for each step to the checklist"
                - "Check next month's arrivals with each house and confirm readiness dates @recurring(monthly:20)"
                - "Log any arrival problem and update the checklist"
            - name: Staff rota and cover across the properties
              description: |-
                ## Purpose
                Staff at several houses need cover for leave, sickness and peak weeks, and a chef or driver often travels with the family from one home to the next. A monthly rota showing who works where, with cover named for every absence, prevents a house being left unattended or a team working twelve days straight.

                ## Milestones
                1. Every staff member listed with their base property and travelling role, if any.
                2. Minimum staffing levels set for each home when occupied and when empty.
                3. A monthly rota published showing cover for each absence.
                4. Hours checked against each person's contract and local working-time rules.

                ## Notes
                Contracts, payroll and leave entitlements sit in the household staff employment area. The rota here is about cover, not terms.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rota is published for every residence each month, meeting the minimum staffing level and naming cover for every planned absence."
                cadence: rolling
              tasks:
                - "List every staff member with their base home and any travelling role"
                - "Set minimum staffing for each home when occupied and when empty"
                - "Publish next month's staff rota for every home @recurring(monthly:24)"
                - "Check rota hours against each contract before publishing"
            - name: Capital replacement schedule and reserve
              description: |-
                ## Purpose
                Roofs, boilers, pool liners, kitchens and air conditioning systems all reach the end of their lives on a predictable curve, and across several homes those bills land in the same year more often than anyone expects. A replacement schedule with costs, and a reserve built ahead of it, turns a surprise into a planned line in the budget.

                ## Milestones
                1. Major building elements at each home listed with remaining life from the surveys.
                2. A replacement cost estimate for each element.
                3. A ten-year schedule showing which replacements fall in which year.
                4. An annual reserve contribution agreed with the principal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year capital schedule covers every residence, and an annual reserve figure based on it is agreed and in the budget."
                cadence: cyclic
              tasks:
                - "Copy remaining-life figures from each condition survey"
                - "Get rough replacement costs for each major element"
                - "Lay replacements out by year on a ten-year schedule"
                - "Update the replacement schedule with this year's surveys and repairs @recurring(yearly)"
            - name: Contents and consumables inventory per home
              description: |-
                ## Purpose
                Linen, glassware, kitchen equipment, toiletries and pantry stock get moved between homes and quietly run out, so the family arrives to find six towels and no coffee. A contents and consumables inventory for each house, counted on a regular cycle, lets staff restock in time and spot things going missing.

                ## Milestones
                1. A contents list per residence covering furniture, linen, kitchen and equipment.
                2. Par levels set for consumables at each home.
                3. A first full count completed at every property.
                4. Items moved between homes recorded in the inventory.

                ## Notes
                Art and collectibles have their own registrar process in the collection area. Keep this inventory to household contents and supplies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every residence has a contents list and par levels, with a completed count each quarter and transfers between homes recorded."
                cadence: rolling
              tasks:
                - "Ask each house manager to list contents room by room"
                - "Set par levels for linen, toiletries and pantry staples"
                - "Count consumables and linen at each home against par levels @recurring(quarterly)"
                - "Record items moved between houses in both inventories"
            - name: Reading a building condition survey
              description: |-
                ## Purpose
                Surveyors write in a code of condition ratings, remaining life bands and caveats, and principals often skim to the summary and miss the line that says the roof timbers were not inspected. Learning how these reports are structured makes the office a better client and spots the gaps worth a follow-up question.

                ## Milestones
                1. The rating system used in the family's surveys understood and written down.
                2. The scope and limitations section of one survey read in full.
                3. A list of follow-up questions sent to the surveyor.
                4. A short guide for future survey reviews saved in the office vault.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide explains the survey rating system and limitations, and follow-up questions on at least one report have been answered."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read one full condition survey including its limitations section"
                - "Write down what each condition rating means"
                - "Send the surveyor three follow-up questions about gaps"
                - "Save a one-page survey reading guide in the vault"
            - name: Climate and natural hazard risks by location
              description: |-
                ## Purpose
                A mountain chalet, a Caribbean villa and a city flat face completely different threats: freezing pipes, hurricanes, flash floods, wildfire or subsidence. Understanding the main hazards at each location, and when they peak, tells the office where preparation money should go and which homes need seasonal routines.

                ## Milestones
                1. The main natural hazards for each residence identified from public hazard maps.
                2. The peak season for each hazard recorded per home.
                3. Each hazard rated for likelihood and impact.
                4. Mitigation already in place at each home noted against its hazards.

                ## Notes
                Start from the **Risk register** template. Security threats to the family are covered by the security assessment area; this one is about the buildings and the weather.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A risk register lists the main natural hazards, peak seasons and current mitigation for every residence."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Look up flood, storm and wildfire hazard maps for each address"
                - "Note the peak months for each hazard at every home"
                - "Rate each hazard for likelihood and impact in the register"
                - "Record the mitigation already in place at each property"
            - name: Local rules that govern each property
              description: |-
                ## Purpose
                Owning in several places means living under several rulebooks: planning permission, heritage listings, condominium or strata by-laws, rules on short lets, tree protection and pool fencing. Knowing the rules that bite at each address before starting works avoids stop notices, fines and fallings-out with neighbours.

                ## Milestones
                1. Planning or heritage restrictions for each residence identified with a local adviser.
                2. Building association or strata rules collected for any home that has them.
                3. Rules on letting, pools, trees and noise noted where they apply.
                4. A one-page rules summary filed for each property.

                ## Notes
                Confirm every rule with a local architect, agent or lawyer. Rules change and online summaries are often out of date.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every residence has a one-page summary of its planning, association and local rules, checked by a local adviser."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a local architect or agent which rules apply at each home"
                - "Collect association or strata by-laws for each building"
                - "Note letting, pool and tree rules where they apply"
                - "File a one-page rules summary for each property"
            - name: Property tax and local charges calendar
              description: |-
                ## Purpose
                Each country and town bills property tax, rates, service charges and association fees on its own timetable, and a missed payment abroad can bring penalties or even a lien. One calendar of every local charge for every home, with amounts and payment routes, keeps them paid on time without relying on reminders by post to an empty house.

                ## Milestones
                1. Every property tax, rate and service charge listed per residence.
                2. Due dates, usual amounts and payment methods recorded.
                3. Correspondence addresses updated so bills reach the office.
                4. Any appeal or valuation deadline noted for the tax adviser.

                ## Notes
                This tracks deadlines only. Whether a valuation is worth appealing is a question for the local tax adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A calendar lists every local charge for every residence with due dates, and no charge is paid late over a twelve-month period."
                cadence: cyclic
              tasks:
                - "List every property tax, rate and service charge for each home"
                - "Redirect bills for each property to the family office address"
                - "Record due dates and payment methods in one calendar"
                - "Check the coming quarter's property tax and charge deadlines @recurring(quarterly)"
            - name: Water supply systems in island and rural homes
              description: |-
                ## Purpose
                Island villas and country houses often run on cisterns, wells, desalination units or septic systems, and few people in the family know how they work until the taps run dry or the drains back up. Learning the basics of each home's water and wastewater set-up lets the office ask the right questions of the specialists who maintain them.

                ## Milestones
                1. The water source and storage at each relevant home identified and diagrammed.
                2. Treatment and testing arrangements for drinking water recorded.
                3. Wastewater or septic system type and service interval noted.
                4. The local specialist for each system named in the house manual.

                ## Notes
                Drinking water testing and treatment levels are for a qualified water specialist to set. The office records the results and the dates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each home not on mains water and drainage has a diagram of its systems, a testing record and a named specialist in its house manual."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each house manager how their home gets and stores water"
                - "Sketch the water and wastewater system for each relevant home"
                - "Record the last drinking water test date and result"
                - "Add the water specialist's details to each house manual"
            - name: Running homes across time zones and languages
              description: |-
                ## Purpose
                Managing a villa seven hours ahead, with a manager who prefers Spanish or French, tests any office's patience and leads to instructions half understood. A simple protocol for when to call, how to write requests and which channel to use for what keeps each house informed without waking anyone at two in the morning.

                ## Milestones
                1. Working hours and time difference recorded for each property manager.
                2. Preferred language for written instructions agreed with each manager.
                3. One channel set for urgent issues and another for routine requests.
                4. A short protocol shared with every property team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written protocol sets contact hours, languages and channels for every residence, and each manager has confirmed it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record each property manager's working hours and time zone"
                - "Agree the language each manager prefers for written instructions"
                - "Choose one urgent channel and one routine channel for every house"
                - "Ask the agent to draft the communication protocol for the property teams"
            - name: Pools, spas and water features basics
              description: |-
                ## Purpose
                Pools and spas are among the most expensive and most neglected systems in a family's homes, and a green pool on arrival is the complaint every house manager dreads. Understanding filtration, heating, covers and safety fencing well enough to read a pool contractor's report makes it possible to hold them to a proper standard.

                ## Milestones
                1. Equipment at each pool or spa listed with age and service history.
                2. The pool contractor's visit routine and water test records reviewed.
                3. Safety barriers, alarms and covers checked against local rules.
                4. Opening and closing steps for seasonal pools written down.

                ## Notes
                Chemical levels and dosing are for the pool contractor to set. The office checks that tests happen and are recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pool and spa has an equipment list, a reviewed test record and a checked safety barrier, and seasonal steps are written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the pump, filter and heater at each pool with their ages"
                - "Ask the pool contractor for the last three months of test records"
                - "Check fencing, alarms and covers against local pool rules"
                - "Write opening and closing steps for each seasonal pool"
            - name: Keep, sell or let an underused home
              description: |-
                ## Purpose
                A house used for three weeks a year can cost as much to run as the main residence, and the conversation about it is often avoided because it carries family memories. Setting out usage, cost, condition and the family's attachment side by side gives the principal a fair basis for deciding whether to keep, sell or let it.

                ## Milestones
                1. Nights of family use for each home over the last three years counted.
                2. Full annual cost and upcoming capital needs set out per home.
                3. Views gathered from the family members who use the house.
                4. Keep, sell and let options compared, with tax and legal points flagged for advisers.
                5. A decision recorded by the principal with the reasons.

                ## Notes
                Tax on a sale or on rental income depends on the owner and the country. Ask the family's tax adviser before any option is chosen.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of keeping, selling and letting the home exists, and the principal's decision and reasons are recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Count nights of family use at each home over three years"
                - "Work out cost per night of use for every residence"
                - "Ask each family member who uses the house what it means to them"
                - "Send the comparison to the tax adviser before the decision meeting"
            - name: Consolidating suppliers across the homes
              description: |-
                ## Purpose
                Left alone, each house tends to acquire its own cleaning firm, gardener, pest controller and internet provider, chosen by whoever was there at the time. Where homes share a region, or a supplier operates in several countries, consolidating contracts can cut costs, simplify invoicing and give the office one account manager to call.

                ## Milestones
                1. Suppliers at every home grouped by service type.
                2. Services that more than one home buys identified.
                3. Quotes from regional or international suppliers obtained for those services.
                4. A consolidation decision made for each service, with notice given where switching.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every service bought by two or more homes has been reviewed for consolidation, and a keep or switch decision is recorded for each."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Group every home's suppliers by service type"
                - "Mark services bought by more than one residence"
                - "Ask two regional suppliers to quote for those shared services"
                - "Record a keep or switch decision for each service"
            - name: Standard systems and fittings across the homes
              description: |-
                ## Purpose
                Five houses with five different alarm panels, thermostats, Wi-Fi set-ups and lock brands mean five learning curves for the family and five sets of passwords for the office. Agreeing a standard for the systems people touch every day, and fitting it as old equipment is replaced, makes every house feel familiar.

                ## Milestones
                1. Current alarm, thermostat, network and lock systems listed per home.
                2. A preferred standard chosen for each type of system.
                3. A replacement timetable that moves each home to the standard as kit ages.
                4. A one-page guide to the standard systems given to the family.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written standard exists for alarms, thermostats, networks and locks, with a timetable to bring each residence onto it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the alarm, thermostat, network and lock systems at each home"
                - "Ask the family which systems they find easiest to use"
                - "Choose a standard for each type and write it down"
                - "Add standard replacements to the capital schedule"
            - name: Energy and water use across the homes
              description: |-
                ## Purpose
                Empty houses heated or cooled to full comfort, pool heaters left on and irrigation running in the rain are common and invisible in a big portfolio. Recording each home's energy and water use monthly, then fixing the worst offenders, cuts running costs and shows which house needs an efficiency survey.

                ## Milestones
                1. Twelve months of energy and water bills gathered per residence.
                2. Monthly use recorded per home in one log.
                3. Set-back temperatures agreed for when each house is empty.
                4. The two heaviest users given an efficiency survey.

                ## Notes
                Start from the **Metrics log** template, with one row per home per month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log of energy and water use covers every residence, and empty-house set-back settings are in place at each."
                cadence: rolling
              tasks:
                - "Gather twelve months of energy and water bills for each home"
                - "Agree set-back temperatures for empty periods with each manager"
                - "Record each home's energy and water use in the log @recurring(monthly:18)"
                - "Book an efficiency survey for the two heaviest users"
            - name: Backup power and resilience for each home
              description: |-
                ## Purpose
                Power cuts at an empty house can spoil a freezer of food, let a basement flood when the sump pump stops, or leave the alarm dead for days. Deciding which homes need a generator, battery storage or solar, and testing what is already installed, keeps the critical systems running through outages.

                ## Milestones
                1. Critical loads at each home listed, such as pumps, freezers, alarms and medical equipment.
                2. Existing backup power at each property checked and its run time known.
                3. Options compared for homes with no or weak backup.
                4. A purchase decision made and a test routine set for every unit.

                ## Notes
                Start from the **Purchase decision** template. Generators must be installed by a qualified electrician with the right changeover switch.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every residence has a recorded decision on backup power, and each installed unit is tested under load every month."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the critical loads that must keep running at each home"
                - "Check the size and run time of any existing backup power"
                - "Get two quotes for homes with no adequate backup"
                - "Test-run each generator under load and log the result @recurring(monthly:1)"
            - name: Letting a residence while the family is away
              description: |-
                ## Purpose
                Letting a seasonal home for the months the family does not use it can cover a large share of its running costs, but it brings guests, wear, local letting rules and tax. Working through the practical and advisory questions before the first booking avoids a rushed arrangement the family regrets.

                ## Milestones
                1. Local rules on short or long lets confirmed for the property.
                2. Tax and insurance effects reviewed with the family's advisers.
                3. Letting agents or platforms compared on fees and guest vetting.
                4. Private areas, family items and blackout dates agreed with the principal.

                ## Notes
                Any decision to let should come after the tax adviser and the broker have answered in writing. Some insurance policies exclude commercial letting.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on letting the home exists, backed by confirmed local rules and written replies from the tax adviser and broker."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the local rules on letting for the property"
                - "Ask the tax adviser and broker how letting would affect them"
                - "Compare two letting agents on fees and guest vetting"
                - "Agree locked areas and family blackout dates with the principal"
            - name: Governing a major renovation
              description: |-
                ## Purpose
                Renovations at a second home often run over time and budget because the family is far away, decisions are made by message, and the contractor fills the gaps. A simple governance set-up with an owner's representative, a budget with contingency, change approvals and fortnightly reports keeps the family in charge of the project.

                ## Milestones
                1. A written brief and budget with contingency approved by the principal.
                2. An owner's representative appointed to act for the family on site.
                3. A change approval rule with spending limits agreed.
                4. Fortnightly progress reports with photos and cost to date running.
                5. Completion signed off with a snagging list closed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The renovation finishes with a closed snagging list, a final cost reconciled against the approved budget and every change approved in writing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a one-page brief and budget for the principal to approve"
                - "Appoint an owner's representative for the site"
                - "Set spending limits above which a change needs family approval"
                - "Ask for fortnightly reports with photos and cost to date"
            - name: Alarm and monitoring arrangements at each home
              description: |-
                ## Purpose
                Each residence usually has its own alarm installer, monitoring centre and call list, some of them years out of date, so an alarm at the villa may ring a former manager's phone. Reviewing every home's alarm, cameras and monitoring contract, and aligning the call lists, means a real alert reaches someone who can act.

                ## Milestones
                1. Alarm, camera and monitoring contract details listed per home.
                2. Call lists at each monitoring centre checked and corrected.
                3. Response arrangements confirmed, such as a guard service or police link.
                4. A test alarm run at each home and the response time recorded.

                ## Notes
                A full threat assessment for the family is a separate area. Here the job is that the systems already installed work and call the right people.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every residence has a current monitoring contract, a corrected call list and a test alarm result recorded within the last twelve months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect alarm and monitoring contract details for each home"
                - "Ask each monitoring centre for its current call list"
                - "Correct the call lists and confirm in writing"
                - "Run a test alarm at each home and note the response time"
            - name: Opening a seasonal home for the season
              description: |-
                ## Purpose
                Closed for six months, a house needs more than a clean before the family arrives: water systems flushed, the pool brought back, pests dealt with, cars started and alarms retested. Working through an opening checklist two to three weeks ahead gives time to fix whatever the winter or the rains have broken.

                ## Milestones
                1. An opening checklist covering systems, pool, garden, vehicles and rooms agreed.
                2. Contractors booked for pool start-up, servicing and deep cleaning.
                3. Faults found on opening logged and repaired before arrival.
                4. The house signed off as ready to the office.

                ## Notes
                Start from the **Operational checklist** template and keep one version per house.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The seasonal home is signed off as ready at least three days before the family's arrival, with every fault found on opening closed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set the opening start date three weeks before the family arrives"
                - "Book the pool start-up, servicing and deep clean"
                - "Log every fault found on opening with a repair date"
                - "Send the ready sign-off to the office"
            - name: Closing a seasonal home for the off-season
              description: |-
                ## Purpose
                Most expensive surprises in a seasonal house start on the day it was closed: a fridge left on and failing, a tap dripping into a frozen pipe, perishables left out for rats. A closing checklist that drains, secures, protects and records the house, with photographs, gives the inspector and the insurer a clear starting point.

                ## Milestones
                1. A closing checklist for the house agreed, covering water, power, food, valuables and outdoor items.
                2. Water drained or heat kept on as the climate requires.
                3. Photographs of every room taken on the day of closing.
                4. The empty-house inspection schedule started.

                ## Notes
                In freezing climates the choice between draining down and keeping minimum heat is for the plumber and the insurer to agree. Record which method is used.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The house is closed against a completed checklist with dated photographs, and the first empty-house inspection is booked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the closing checklist with the house manager"
                - "Ask the plumber whether to drain down or keep minimum heat"
                - "Photograph every room on the day the house closes"
                - "Book the first empty-house inspection for the following week"
            - name: Hurricane season preparation for Caribbean homes
              description: |-
                ## Purpose
                Homes in the Caribbean and on the Gulf and Atlantic coasts face a hurricane season that runs through the second half of the year, and supplies and contractors vanish once a storm is forecast. Preparing shutters, generators, drainage, supplies and a staff plan before the season starts is far cheaper than repairing a house left exposed.

                ## Milestones
                1. Shutters, hurricane straps and drainage checked by a contractor.
                2. Generator serviced and fuel stored safely for an extended outage.
                3. A storm plan agreed with on-site staff, including when they go home to their own families.
                4. Photographs of the house and contents taken for insurance before the season.
                5. Contact routes agreed for after a storm when phones may be down.

                ## Notes
                Staff have their own homes to protect. A fair plan lets them leave in time and says clearly that no one stays in an unsafe building.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the season starts, shutters, generator and drainage are checked, a written storm plan is agreed with staff and pre-season photographs are filed."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Book a contractor to check shutters, straps and drainage"
                - "Service the generator and arrange safe fuel storage"
                - "Agree the storm plan with on-site staff and their own needs"
                - "Check hurricane supplies and shutters before each season @recurring(yearly)"
            - name: Hosting a large family gathering at one residence
              description: |-
                ## Purpose
                A milestone birthday, a wedding weekend or a reunion of every branch can triple the number of people a house is built for. Planning rooms, extra staff, catering, parking, neighbours and the house's water and power limits well ahead keeps the occasion about the family rather than the blocked drains.

                ## Milestones
                1. Guest numbers and dates confirmed with the host.
                2. The house's capacity for sleeping, parking, water and power checked.
                3. Extra staff, catering and rentals booked.
                4. Neighbours and any building association informed.
                5. A debrief held with the house team after the event.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The gathering takes place with every guest housed, extra staff and suppliers booked, and a debrief note filed within a week."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Confirm guest numbers and dates with the host"
                - "Ask the house manager about sleeping, water and power limits"
                - "Book extra staff, catering and any rentals needed"
                - "Hold a debrief with the house team and file a short note"
            - name: Handover when a property manager leaves
              description: |-
                ## Purpose
                The departure of a long-serving house manager can take with them the knowledge of every contractor, quirk and promise made to neighbours. A structured handover, with keys returned, accounts transferred and a walk-through with the successor, keeps the house running and the family's privacy intact.

                ## Milestones
                1. A handover list covering keys, codes, accounts, contractors and open issues completed.
                2. Every key and device returned and codes changed.
                3. Supplier and utility accounts updated with the new contact.
                4. A recorded walk-through with the successor or interim cover.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "On the manager's last day all keys and devices are returned, codes changed, accounts moved and the successor has walked the house."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send the departing manager the handover list to complete"
                - "Collect every key and device and change the codes"
                - "Update supplier accounts with the new contact person"
                - "Arrange a walk-through between the departing manager and successor"
            - name: Annual residences review with the principal
              description: |-
                ## Purpose
                Once a year the family should look at all its homes together: cost, use, condition, staff and plans, rather than reacting to whichever house had the latest problem. An annual review meeting with a short pack sets next year's budgets, capital works and any change in which homes the family keeps.

                ## Milestones
                1. A review pack with cost, use, condition and staff for each home prepared.
                2. The meeting held with the principal and the office lead.
                3. Next year's budget and capital works agreed for every residence.
                4. Decisions and actions recorded and sent to each property manager.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An annual review meeting is held with a written pack, and the agreed budgets and actions for each home are sent to its manager within two weeks."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Gather cost, use and condition figures for every home"
                - "Book the review meeting with the principal"
                - "Hold the annual residences review and record the decisions @recurring(yearly)"
                - "Send each property manager the decisions for their home"
            - name: Moving school-age children between homes
              description: |-
                ## Purpose
                Parents who spend school holidays in one country and term time in another find that each move means packing uniforms, medicines, devices and favourite toys, and something always stays behind. Duplicating the essentials at each home and keeping a short move list turns every transfer into a smaller job for the family and staff.

                ## Milestones
                1. A list of what each child needs at every home they use.
                2. Essentials duplicated at each house where it makes sense.
                3. A move list for items that must travel, such as medicines and school work.
                4. Staff at each house briefed on the children's routines and allergies.

                ## Notes
                Keep a copy of each child's medical information and any prescriptions at every home they stay in, kept private.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each child has an essentials list per home, duplicates in place and a travelling move list that staff use for every transfer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask each child what they miss most when they arrive at another home"
                - "List the essentials worth duplicating at every house"
                - "Write a short move list for medicines, devices and school work"
                - "Brief the staff at each home on routines and allergies"
            - name: House-use rules for adult children and branches
              description: |-
                ## Purpose
                Once children grow up and marry, the beach house becomes something three branches want for the same August fortnight. Clear rules on booking, guests, costs and leaving the house as found keep the homes a pleasure to share and avoid quiet resentment between siblings.

                ## Milestones
                1. Booking rules agreed, such as priority seasons and a fair rotation across branches.
                2. Guest rules covering friends, partners and house staff time.
                3. Costs charged to users, if any, agreed and written down.
                4. The rules shared with every adult family member and kept with the usage calendar.

                ## Notes
                Agree the rules with the family before the first clash, not during it. Wider family disputes belong in the conflict resolution area.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written house-use rules covering booking, guests and costs are agreed by the principal and shared with every adult family member."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each branch which weeks matter most to them"
                - "Draft booking, guest and cost rules on one page"
                - "Agree the rules with the principal and share them with the family"
                - "Open the next season's booking window for every branch @recurring(yearly)"
            - name: Adapting a home for an ageing parent
              description: |-
                ## Purpose
                When a parent spends more time at one of the family homes as they age, steps, slippery bathrooms and distant bedrooms become real hazards, and carers may need rooms of their own. Assessing the house with an occupational therapist and making a plan for adaptations lets them stay comfortable without the home feeling like a clinic.

                ## Milestones
                1. An accessibility assessment by an occupational therapist or similar specialist.
                2. Priority adaptations listed, such as rails, ramps, lighting and a ground-floor bedroom.
                3. Space and facilities for live-in or visiting carers planned.
                4. Works completed and the house manual updated.

                ## Notes
                Agree care needs with the parent's own doctor. The house plan follows the care plan, not the other way round.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An accessibility assessment is on file, the priority adaptations are complete and the house manual reflects them."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the parent which parts of the house have become hard to use"
                - "Book an occupational therapist to assess the home"
                - "Get quotes for the priority adaptations"
                - "Plan a bedroom and bathroom for a visiting or live-in carer"
            - name: Bringing a newly bought residence into the portfolio
              description: |-
                ## Purpose
                The first months after buying another home decide whether it joins the portfolio smoothly or becomes the house that always has a problem. A set onboarding plan covering keys, contracts, insurance, surveys, staff and the house manual brings the new home up to the same standard as the others within a season.

                ## Milestones
                1. Keys changed and alarm codes reset on completion.
                2. Utilities, services and insurance moved into the right owning entity.
                3. A condition survey and system review completed.
                4. The operating model and on-site contact chosen.
                5. The new home added to the register, calendar, budget and maintenance plan.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within 120 days of purchase the new home appears in the register, budget and maintenance calendar, with locks changed and insurance in place."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Change the locks and reset the alarm codes on completion"
                - "Transfer utilities and services into the owning entity"
                - "Book a condition survey of the new home"
                - "Add the property to the register, budget and maintenance calendar"
            - name: Shared homes inherited by siblings
              description: |-
                ## Purpose
                When parents die, a family villa or country house often passes to several siblings at once, with no agreement on who pays, who decides and who gets the summer. Setting out costs, use and decision rules early, and recording them with the family's lawyer, protects both the house and the relationships around it.

                ## Milestones
                1. The legal ownership after inheritance confirmed with the estate lawyer.
                2. Running costs and planned capital works shared out in writing.
                3. Rules agreed for use, works decisions and what happens if one sibling wants out.
                4. A named person appointed to run the house day to day.

                ## Notes
                Ownership shares, buy-outs and tax on inheritance are legal and tax questions. The office's job is to prepare the numbers and record what is agreed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The siblings have a written agreement on costs, use and decisions for the shared home, reviewed by the family's lawyer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the estate lawyer to confirm who now owns the house"
                - "Prepare a cost sheet showing running and capital costs"
                - "Hold a meeting with the siblings to agree use and decision rules"
                - "Appoint one person to run the house day to day"
            - name: First second home without staff
              description: |-
                ## Purpose
                Homeowners who have just bought a holiday flat or a lakeside cabin, with no estate manager and no office behind them, still face empty-house risks, distant repairs and bills in another town. A light set-up with a trusted local caretaker, a key holder, a few smart sensors and a small maintenance list gives most of the protection at a fraction of the cost.

                ## Milestones
                1. A local caretaker or key holder agreed with a written scope and rate.
                2. Insurance unoccupancy conditions understood and a visit routine set.
                3. Basic leak and temperature sensors installed.
                4. A short annual maintenance list kept for the home.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The second home has a named local caretaker, visits that meet the insurer's conditions, working sensors and an annual maintenance list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask neighbours or a local agent to recommend a caretaker"
                - "Agree the caretaker's visit routine and rate in writing"
                - "Fit leak and temperature sensors near the water heater and sinks"
                - "Write a ten-line annual maintenance list for the home"
            - name: Maintenance management software across the portfolio
              description: |-
                ## Purpose
                Past a certain size, spreadsheets and messages cannot track hundreds of jobs across several homes, and the office cannot see which work orders are overdue or which contractor is slow. A computerised maintenance management system, shared with property managers and key contractors, holds assets, schedules and work orders in one place.

                ## Milestones
                1. Requirements written, including multiple sites, mobile access and contractor logins.
                2. Two or three systems trialled with one residence.
                3. Assets, schedules and contractors loaded for every home.
                4. Property managers trained and raising all work orders in the system.

                ## Notes
                Check that the system lets you restrict what contractors see. Addresses and family schedules should stay with the office.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every residence's assets, schedules and work orders are held in one maintenance system that all property managers use."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page list of what the system must do"
                - "Trial two systems with one residence for a month"
                - "Load assets and schedules for every home"
                - "Close out overdue work orders and chase slow contractors @recurring(weekly:fri)"
            - name: Benchmarking running costs across residences
              description: |-
                ## Purpose
                Experienced offices compare homes on cost per square metre, staff per occupied night and maintenance as a share of replacement value, which shows which house is efficient and which is drifting. Benchmarking the portfolio against itself, and against published ranges where they exist, gives the annual review hard numbers to work with.

                ## Milestones
                1. Floor area, occupied nights and replacement value recorded for each home.
                2. Three or four ratios calculated per residence.
                3. Outliers investigated with their property managers.
                4. The ratios added to the annual residences review pack.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cost per square metre, cost per occupied night and maintenance spend ratios are calculated for every residence and explained where they stand out."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record floor area and occupied nights for each home"
                - "Calculate cost per square metre and per occupied night"
                - "Ask the managers of outlying homes what explains the figures"
                - "Add the ratios to the annual review pack"
            - name: Stewardship of a heritage or listed house
              description: |-
                ## Purpose
                Families who own a historic house often find that ordinary repairs need consent, specialist trades and materials that take months to source. A conservation management plan, prepared with a conservation architect, explains what matters about the building and how it should be cared for, so every manager after the current one inherits the same standard.

                ## Milestones
                1. The house's heritage status and the protections that apply confirmed.
                2. A conservation architect appointed and the building's significance described.
                3. A conservation management plan with repair principles adopted.
                4. Specialist trades for lime, stone, timber and roofing listed.

                ## Notes
                Works to a protected building without consent can be an offence in many countries. Check with the heritage authority before any change, however small.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conservation management plan prepared with a conservation architect is adopted, and specialist trades for the house are on the contractor roster."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the heritage status of the house with the local authority"
                - "Ask two conservation architects to quote for a management plan"
                - "Adopt the plan's repair principles in the house manual"
                - "Add specialist conservation trades to the contractor roster"
            - name: Remote monitoring network for unoccupied homes
              description: |-
                ## Purpose
                Leak, temperature, humidity and power sensors linked to the office can report a burst pipe at a distant chalet within minutes instead of at the next inspection. Building a monitoring network across the homes, with clear alert rules and a named responder at each property, catches failures while they are still small.

                ## Milestones
                1. Sensor locations chosen at each home, such as water heaters, plant rooms and wine cellars.
                2. Sensors installed on a secure network separate from family devices.
                3. Alert thresholds and a responder for each property agreed.
                4. A test alert sent and answered at every home.

                ## Notes
                Put the sensors on their own network and change default passwords. The cybersecurity area covers the wider set-up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every residence has working leak, temperature and power sensors with a named responder, and a test alert has been answered at each."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Mark sensor locations on each home's floor plan"
                - "Get a quote for installing sensors on a separate network"
                - "Agree alert thresholds and a responder for each property"
                - "Review sensor alerts, battery levels and offline devices @recurring(monthly:26)"
---

# Multiple Residences Management

This area is for the family that owns more than one home and wants each of them ready, safe and costed, whether the portfolio is a main house and a beach cottage or five residences across three countries with staff at each. It starts with foundations (a register of every property, title and ownership, the operating model for each home, condition surveys, keys and codes, contracts, running costs and house manuals), moves into the operating routines of maintenance calendars, property reports, empty-house checks, arrival readiness, staff rotas and capital reserves, then the knowledge of surveys, climate risk, local rules and island water systems, decisions such as keeping or selling an underused home, dated events like opening and closing a seasonal house and hurricane season, situations for parents, adult children, ageing parents and first-time second-home owners, and specialist work on maintenance software, benchmarking, heritage houses and remote monitoring.

What repeats is a weekly usage calendar update and empty-house walk-through, monthly property reports, budget checks, staff rotas and generator tests, quarterly service visits, consumables counts and key audits, and a yearly round of reserve updates, contractor checks, hurricane preparation and a residences review with the principal. The Operational checklist, Vendor, Risk register, Purchase decision and Metrics log templates pair with opening and closing a house, the contractor roster, climate risks, backup power and energy use. Tax, planning and letting questions stay organisational here: agree them with the family's tax adviser, lawyer and local agent in each country. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
