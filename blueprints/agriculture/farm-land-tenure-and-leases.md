---
id: agriculture.farm-land-tenure-and-leases
name: Farm Land Tenure and Leases
description: "Secure ground to farm on: every parcel and document accounted for, state and private leases read and kept in good standing, family land put on paper, renewals never missed and the land papers a lender will ask for ready to hand over."
category: business
version: 1.0.0
tags: [agriculture, farm-land-tenure-and-leases, small-business, founder, land-leases, state-land, family-land, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Land Tenure and Leases
          description: "Securing land to farm: state agricultural leases, private rentals, family land arrangements, lease terms, renewals and the documents lenders ask for."
          projects:
            - name: Tenure inventory of every parcel you farm
              description: |-
                ## Purpose
                Many farmers work three or four pieces of land under three or four different arrangements and could not say, on the spot, which ones they could lose next year. Listing every parcel with its size, owner, the kind of right you hold, the end date and the paper that proves it shows at a glance where the farm stands on firm ground and where it does not.

                ## Milestones
                1. Every parcel you use listed, including the small plot behind a relative's house and any land used only in the dry season.
                2. For each parcel: approximate acreage, owner or lessor, type of arrangement, start and end date and rent.
                3. The document that proves each arrangement named, or marked as missing.
                4. Each parcel rated secure, uncertain or at risk in one word.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page inventory lists every parcel farmed, with owner, arrangement type, end date, proving document and a security rating for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every piece of land you farmed in the last twelve months"
                - "Add the owner, acreage, rent and end date beside each parcel"
                - "Name the document that proves each arrangement, or write missing"
                - "Rate each parcel secure, uncertain or at risk"
            - name: Land document vault with certified copies
              description: |-
                ## Purpose
                Leases, deeds, survey plans, rent receipts and letters of offer get kept in a shoebox, a vehicle glovebox or a parent's cupboard, and the original is rarely there when a lender or the land agency asks for it. One fireproof place for originals, plus scanned and certified copies kept off the farm, means a flood, a fire or a hurricane does not also take away your proof of tenure.

                ## Milestones
                1. Originals of every lease, deed, survey plan, letter of offer and consent gathered in one waterproof, fireproof box or safe.
                2. Every document scanned and stored in two places off the farm, one of them a cloud folder.
                3. Certified copies made of the documents most often requested by banks and agencies.
                4. An index sheet listing each document, where the original is and the date it was last checked.

                ## Notes
                Keep the originals off the land itself if the farm floods or sits in a hurricane path; a relative's house in town or a bank safe deposit box is a common choice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All land documents are held in one secure box with an index, scanned to two off-farm locations, and certified copies exist for the lease and survey plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather every land paper from the house, vehicle and relatives into one box"
                - "Scan each document and save it to a cloud folder and a second drive"
                - "Ask an attorney or justice of the peace to certify copies of the lease and survey plan"
                - "Write an index of documents and where each original is kept"
                - "Add any new land papers to the vault and the index @recurring(quarterly)"
            - name: Parcel map with GPS boundary points
              description: |-
                ## Purpose
                Leases often describe land as 'five acres more or less, off the estate road', and that vagueness causes trouble when a neighbour plants over the line or an inspector asks which field is yours. Walking each boundary with a phone GPS, photographing the markers and putting the result on a simple map gives you a record to compare against the survey plan and to show a lender or officer.

                ## Milestones
                1. Each parcel's corners and markers walked and recorded as GPS points.
                2. Photos taken of every boundary marker, pin, tree or fence post used as a corner.
                3. A map showing each parcel, its access road, water sources and neighbours' names.
                4. Any difference between the walked boundary and the survey plan or lease description noted.

                ## Notes
                A phone GPS is good to a few metres, which is enough for a working map but not for a legal boundary. Only a licensed surveyor can fix a boundary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map of every parcel exists with GPS corner points, marker photos and a written note of any mismatch with the survey plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Install a free GPS mapping app and test it on one corner marker"
                - "Walk each parcel boundary and drop a point at every corner"
                - "Photograph each marker with the date showing"
                - "Lay the points over a satellite image and label neighbours and access"
            - name: Choosing an attorney and land surveyor for farm matters
              description: |-
                ## Purpose
                Land problems are urgent when they arrive: a notice to quit, a lender's deadline, a neighbour's fence going up. Choosing in advance an attorney who handles agricultural leases and conveyancing, and a licensed surveyor who works in your district, means you call someone you already trust instead of whoever is free that week.

                ## Milestones
                1. Two or three attorneys with land and lease experience in your area identified through farmer groups, the extension office or the bar association.
                2. Each asked about their fees for reviewing a lease, a title search and a lease registration.
                3. A licensed land surveyor identified, with a quote for a boundary survey on your main parcel.
                4. One attorney and one surveyor chosen, with contact details saved in the document vault index.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One attorney and one licensed surveyor are chosen, each with a written fee quote for common farm land work, and their details are stored with your land papers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three farmers nearby which attorney handled their lease or land purchase"
                - "Call two attorneys and ask their fee for reviewing an agricultural lease"
                - "Check that the surveyor you are considering is on the licensed surveyors list"
                - "Save the chosen attorney and surveyor in your phone and the vault index"
            - name: Clause by clause reading of your current lease
              description: |-
                ## Purpose
                Most tenants sign a lease once and never read it again, then learn about the clause on subletting or the ban on cutting trees when it is already a problem. Reading your lease slowly, noting every obligation, date and permission it mentions, and listing the clauses you do not understand for your attorney, turns a document in a drawer into a working guide to what you may and may not do.

                ## Milestones
                1. The lease read in full, with parties, parcel description, term, rent and review dates written on one summary page.
                2. Every obligation on you listed: permitted use, cultivation, upkeep, insurance, fencing, taxes, notice periods.
                3. Every thing you need consent for listed: buildings, wells, subletting, assignment, charging the lease, tree felling.
                4. Unclear clauses marked and answered by your attorney in writing.

                ## Notes
                Read the schedule and any plan attached at the back, not just the main pages. Development conditions on state leases often sit there.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page lease summary lists term, rent, obligations and consent requirements, and the attorney has answered every clause you marked as unclear."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the lease once through without stopping and mark unclear clauses"
                - "Write the term, rent, review dates and notice periods on a summary page"
                - "List every action the lease says needs the landlord's consent"
                - "Send the marked clauses to your attorney and ask for written answers"
            - name: Putting a verbal land rental in writing
              description: |-
                ## Purpose
                Handshake rentals between neighbours and relatives are common and often work for years, until the owner dies, sells or falls out with you, and then there is nothing to show you were ever more than a visitor. A short written agreement, signed by both of you and witnessed, protects the landowner as much as the farmer and is the first thing a lender or grant officer will ask for.

                ## Milestones
                1. The current terms agreed out loud with the owner: parcel, rent, how long, who pays land tax, notice to end.
                2. A draft written agreement covering those points prepared and reviewed by an attorney.
                3. The agreement signed by both parties in front of a witness, with each holding a copy.
                4. The signed original placed in the document vault.

                ## Notes
                Ask your attorney whether the agreement needs stamping or registration in your country to be relied on later; requirements differ and an unstamped lease can be hard to enforce.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed and witnessed written agreement with the landowner exists, reviewed by an attorney, with copies held by both parties."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Talk to the landowner about writing down what you already agreed"
                - "Ask the agent to draft a plain-language summary of the agreed terms for the attorney"
                - "Have the attorney turn the summary into a short lease or licence"
                - "Sign the agreement with the owner in front of a witness"
                - "Ask the attorney whether stamping or registration is needed and get it done"
            - name: Rent and land tax receipts trail
              description: |-
                ## Purpose
                If a landlord claims rent was not paid, or the state agency says the lease is in arrears, the farmer with a run of receipts wins the argument in five minutes. Paying by traceable means, asking for a receipt every time and filing it the same week builds a record that also proves continuous occupation if tenure is ever questioned.

                ## Milestones
                1. Every rent payment made by bank transfer, cheque or against a written receipt, never in loose cash with no record.
                2. Receipts for the past two years gathered or, where missing, replaced with a written acknowledgement from the landlord.
                3. Land tax or rates receipts for each parcel filed alongside rent receipts.
                4. A simple payment log showing date, amount, method and receipt number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A payment log covers at least two years of rent and land tax, with a receipt or written acknowledgement filed for every entry."
                cadence: rolling
              tasks:
                - "Start a payment log with date, amount, method and receipt number columns"
                - "Ask the landlord to acknowledge in writing any past payments without receipts"
                - "Switch rent payments to bank transfer or cheque where the landlord agrees"
                - "File the rent receipt and add it to the log @recurring(monthly:5)"
            - name: Land needs brief before looking for farm land
              description: |-
                ## Purpose
                People searching for land often take the first parcel offered and only later find the water is seasonal, the road washes out or the lease is too short for the crop. Writing down what your planned enterprise actually needs, acres, slope, soil, water, access, power, distance to market and the minimum term, gives you a checklist to measure every offer against.

                ## Milestones
                1. The enterprise you plan to run named, with the acreage it needs in year one and year five.
                2. Hard requirements written down: water source, road access in the wet season, slope limit, soil type.
                3. The minimum lease term needed, based on how long the crop or building takes to pay back.
                4. A budget for rent or purchase and for survey, legal and registration costs.

                ## Notes
                Tree crops such as cocoa, citrus and coconuts take years to bear, so a five-year lease rarely makes sense for them. Short-cycle vegetables can work on shorter terms.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page land brief states acreage, hard site requirements, minimum term and budget for the planned enterprise."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the enterprise you plan and the acres it needs now and in five years"
                - "List the site features you cannot do without, such as wet-season road access"
                - "Work out the minimum lease term the crop or building needs to pay back"
                - "Set a budget that includes survey, attorney and registration fees"
            - name: Tenure risk register for the farm
              description: |-
                ## Purpose
                The risks to a farmer's land are usually known but never written down: an elderly landlord with heirs abroad, a lease ending the year a loan matures, a parcel on a road reserve. Putting each one in a register with its likelihood, impact and the action that reduces it turns vague worry into a short list of things to do this year.

                ## Milestones
                1. Every tenure risk on every parcel listed, from expiry and sale to death of the owner and development conditions.
                2. Each risk scored for likelihood and impact on a simple three-point scale.
                3. One action and an owner named for each high or medium risk.
                4. The register reviewed with your attorney or a trusted adviser once.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tenure risk register lists every known risk by parcel, scored, with an action and an owner for each high or medium risk."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a tenure risk register from the risk register template"
                - "List the risks for each parcel using the tenure inventory"
                - "Score each risk for likelihood and impact"
                - "Pick one action for each high risk and put a date on it"
            - name: Lease renewal and expiry calendar
              description: |-
                ## Purpose
                State and private leases are lost every year simply because nobody applied to renew in time, and some leases set a short window for notice that closes months before the end date. A calendar of every end date, notice deadline and rent review, with reminders set well ahead, means you start renewal talks while you still have options.

                ## Milestones
                1. Every lease end date, notice deadline, option window and rent review date entered in one calendar.
                2. Reminders set at twelve, six and three months before each end date.
                3. The renewal procedure for each lease written beside its entry: who to write to and what to send.
                4. No lease has reached its notice deadline without action for a full year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lease date is in a shared calendar with reminders at twelve, six and three months, and no notice deadline has passed without a recorded action."
                cadence: rolling
              tasks:
                - "Enter every lease end date and notice deadline in your calendar"
                - "Set reminders at twelve, six and three months before each end date"
                - "Write the renewal procedure for each lease in the calendar entry"
                - "Check the calendar for anything falling due in the next twelve months @recurring(monthly:14)"
            - name: Yearly rent confirmation and land tax payment
              description: |-
                ## Purpose
                Rent that drifts unrecorded and land tax that nobody pays are two of the commonest reasons tenure is challenged, and unpaid land tax on a parcel can become your problem even when the owner was supposed to pay it. A fixed time each year to confirm the coming year's rent in writing and to pay or check the land tax keeps both clean.

                ## Milestones
                1. Who pays land tax or rates on each parcel confirmed from the lease or agreement.
                2. This year's land tax paid or proof of payment by the owner obtained.
                3. Next year's rent confirmed with each landlord in writing.
                4. Both receipts filed in the vault and entered in the payment log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each parcel, the year's land tax receipt and a written confirmation of next year's rent are filed by the same month every year."
                cadence: cyclic
              tasks:
                - "Check each lease to confirm who is responsible for land tax"
                - "Look up the land tax status of each parcel with the revenue office"
                - "Pay or confirm payment of this year's land tax and file the receipt @recurring(yearly)"
                - "Confirm next year's rent with each landlord in writing @recurring(yearly)"
            - name: Development conditions log for a state lease
              description: |-
                ## Purpose
                State agricultural leases usually come with conditions: a share of the land cultivated within a set time, a house or pen built, no subletting, and periodic inspections. Lessees lose leases for breaching them without knowing, so a log of each condition, its deadline and dated evidence of progress is the best defence when the officer visits.

                ## Milestones
                1. Every development condition copied from the lease or letter of offer, with its deadline.
                2. The current position against each condition measured: acres cleared, planted, structures built.
                3. Dated photos and receipts filed as evidence for each condition met.
                4. Any condition at risk raised with the agency in writing before its deadline.

                ## Notes
                If drought, flood or illness will stop you meeting a condition, write to the agency early and keep their reply. A late explanation is weaker than an early one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log lists every development condition with deadline and status, backed by dated photos and receipts, and any condition at risk has a written note to the agency."
                cadence: rolling
              tasks:
                - "Copy each development condition and its deadline from the lease"
                - "Measure how much of each condition is already met"
                - "Write to the agency early about any condition you may miss"
                - "Photograph the cultivated area and new works for the evidence file @recurring(quarterly)"
            - name: Quarterly boundary walk and marker check
              description: |-
                ## Purpose
                Boundary pins get buried by a tractor, survey trees get cut and a neighbour's fence creeps a metre a year. Walking the boundary every quarter, comparing it with your map and photos and dealing with a missing marker while it is still a small matter, stops a slow encroachment becoming a court case.

                ## Milestones
                1. A route for walking each parcel's boundary based on the parcel map.
                2. Each marker found, photographed and its condition noted at each walk.
                3. Missing or moved markers reported to the landlord and, if needed, the surveyor.
                4. Four walks completed in a year with notes filed.

                ## Notes
                Never move or replace a boundary marker yourself. In many countries only a licensed surveyor may do so and disturbing one can be an offence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four boundary walks a year are recorded with dated marker photos, and every missing marker has been reported to the landlord or surveyor."
                cadence: rolling
              tasks:
                - "Plan a boundary walking route from the parcel map"
                - "Walk the boundary, photograph every marker and note any change @recurring(quarterly)"
                - "Report any missing or moved marker to the landlord in writing"
                - "Ask the surveyor to reinstate markers that cannot be found"
            - name: Regular landlord check-ins
              description: |-
                ## Purpose
                Leases are renewed by people, and a landlord who has not heard from you for two years is more likely to accept the first outside offer for the land. A short visit or call each quarter, with news of what you planted and anything you fixed, keeps the relationship warm and surfaces plans to sell or pass the land on before they are final.

                ## Milestones
                1. The landlord's preferred way and time of contact agreed.
                2. A quarterly check-in held, with a short note of what was discussed.
                3. Any change in the landlord's plans, health or family situation noted in the tenure risk register.
                4. At least one visit a year with the landlord on the land itself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four landlord check-ins a year are logged, including one site visit, and any change in the landlord's plans is recorded in the risk register."
                cadence: rolling
              tasks:
                - "Ask the landlord how and when they prefer to hear from you"
                - "Call or visit the landlord with a short farm update @recurring(quarterly)"
                - "Note any sign of plans to sell, subdivide or pass on the land"
                - "Invite the landlord to walk the farm with you once a year"
            - name: Improvements register for end of lease claims
              description: |-
                ## Purpose
                Tenants drain fields, sink wells, build pens and plant trees on someone else's land, and some leases and laws allow compensation for improvements when the lease ends, but only if they can be proved. A register of each improvement with its date, cost, receipts, photos and any landlord consent is the evidence that claim depends on.

                ## Milestones
                1. Every improvement made since the lease started listed with date and approximate cost.
                2. Receipts, photos and landlord consent letters filed for each one.
                3. Improvements split into removable items and fixed ones that stay with the land.
                4. Your attorney asked what, if anything, the lease or local law allows you to claim.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An improvements register lists each improvement with date, cost, receipts, photos and consent status, and the attorney's view on compensation is recorded."
                cadence: rolling
              tasks:
                - "List every improvement made on rented land since the lease began"
                - "Find receipts and before and after photos for each improvement"
                - "Ask the attorney what the lease allows you to claim or remove at the end"
                - "Add new improvements with cost, receipt and photo @recurring(monthly:22)"
            - name: Correspondence log with landlords and land agencies
              description: |-
                ## Purpose
                Promises made on the phone or in a WhatsApp voice note are forgotten or denied, and state land agencies change officers often enough that your file may be the only record of what was agreed. Logging every letter, message and call about the land, and confirming important conversations in writing, gives you a timeline when it matters.

                ## Milestones
                1. A log with date, person, method, what was said and any follow-up for each contact.
                2. Past letters and saved messages about the land copied into the log.
                3. Important phone conversations confirmed by a short written message afterwards.
                4. A file reference number recorded for every agency case.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A correspondence log covers every contact about the land for twelve months, with written confirmation sent after each important phone call."
                cadence: rolling
              tasks:
                - "Start a correspondence log with date, person, method and summary columns"
                - "Copy past letters and saved messages about the land into the log"
                - "Send a short written confirmation after any important phone call"
                - "Copy the month's messages about the land into the log @recurring(monthly:28)"
            - name: Annual tenure review of the whole farm
              description: |-
                ## Purpose
                Once a year, the whole land picture should be looked at together: which leases are getting short, which parcels earn their rent, whether the farm needs more ground or less. A fixed review before planting decisions are made each year stops tenure being handled only in emergencies.

                ## Milestones
                1. The tenure inventory updated with every change in the year.
                2. Each parcel's rent compared with the gross margin it produced.
                3. The risk register re-scored and the year's top three land actions chosen.
                4. Notes of the review filed with the date.

                ## Notes
                Hold the review in the dry season before the main planting decisions, so a parcel you plan to give up is not planted with a long crop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated annual review note exists each year with an updated inventory, rent against margin by parcel and three chosen land actions."
                cadence: cyclic
              tasks:
                - "Update the tenure inventory with this year's changes"
                - "Compare each parcel's rent with what it earned"
                - "Re-score the tenure risk register"
                - "Hold the annual tenure review and choose three land actions @recurring(yearly)"
            - name: Land papers pack for lenders
              description: |-
                ## Purpose
                Agricultural banks and credit unions want proof that you will still be on the land when the loan is repaid, and loans stall for months waiting for a certified lease copy or a landlord's letter. Keeping a ready pack of tenure documents, refreshed each year, means a loan or grant application is not held up by land paperwork.

                ## Milestones
                1. The tenure documents your lender or development bank asks for confirmed by phone or from their checklist.
                2. Certified copies of the lease or title, survey plan and recent land tax receipt in one folder.
                3. A letter from the landlord confirming the tenancy and remaining term, if the lender accepts one.
                4. The pack checked for remaining lease term against the loan term.

                ## Notes
                Many lenders will not lend for longer than the lease has left to run. Check this before you plan a long loan on a short lease.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A lender pack holds certified tenure documents less than a year old and a note comparing remaining lease term with the planned loan term."
                cadence: rolling
              tasks:
                - "Ask your lender for their list of land documents for farm loans"
                - "Put certified copies of the lease, survey plan and land tax receipt in one folder"
                - "Ask the landlord for a letter confirming your tenancy and remaining term"
                - "Refresh the certified copies and landlord letter in the lender pack @recurring(yearly)"
            - name: Understanding the main types of farm tenure
              description: |-
                ## Purpose
                Freehold, registered leasehold, an unregistered lease, a licence, a crop share, a letter of permission and occupation of family land all feel the same when you are planting, but they give very different protection when something goes wrong. Learning what each type means in your country lets you tell which of your parcels is truly secure.

                ## Milestones
                1. Plain-language notes on freehold, leasehold, licence, crop share, permission letters and family land.
                2. The difference between a lease and a licence understood, and why it matters for notice to quit.
                3. Each of your parcels labelled with its tenure type.
                4. Questions about your own parcels answered by your attorney or the extension office.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A page of notes explains each tenure type in your country, and every parcel in your inventory is labelled with its type, checked by your attorney."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension office for any farmer guide on land tenure in your country"
                - "Write a one-line definition of each tenure type in your own words"
                - "Label each parcel in your inventory with its tenure type"
                - "Ask the attorney to check the labels at your next consultation"
            - name: Reading a survey plan and cadastral map
              description: |-
                ## Purpose
                A survey plan shows the bearings, distances, area and markers of a parcel, and it is the document that settles most boundary arguments, yet many farmers have never read theirs. Learning to read one, and to find your parcel on the national cadastral or land information map where one exists, lets you check what you are renting or buying.

                ## Milestones
                1. The parts of a survey plan understood: north point, bearings, distances, area, markers, adjoining owners, surveyor's certificate.
                2. Your own survey plan read and compared with your parcel map.
                3. Your parcel found on the land information or cadastral map if your country publishes one.
                4. Differences between the plan, the map and the ground noted for the surveyor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can point out bearings, area and markers on your own survey plan, and a written note compares it with your GPS map and any public cadastral map."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get a copy of the survey plan for your main parcel"
                - "Ask the surveyor or extension officer to walk you through the plan"
                - "Look for your parcel on the public land information map if one exists"
                - "Note where the plan, the map and your walked boundary disagree"
            - name: How land registration works in your country
              description: |-
                ## Purpose
                Some Caribbean countries run a registered title system, others still rely on deeds recorded in a registry, and many run both side by side, which changes what a title search shows and how a lease is protected. Knowing which system covers your land, and what has to be registered to bind a buyer, tells you what to check before you rent, buy or lend against it.

                ## Milestones
                1. The system covering your land identified: registered title, deeds, or a mix.
                2. What a title or deed search shows, how to request one and the fee noted.
                3. Which leases must be registered or stamped to be protected, as explained by your attorney.
                4. The registration status of each of your leases confirmed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes record which registration system covers each parcel and whether each lease is registered or stamped, confirmed by your attorney or the registry."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the land registry which system covers the district your farm is in"
                - "Find out how to request a title or deed search and what it costs"
                - "Ask the attorney which of your leases must be registered or stamped"
                - "Record the registration status of each lease in the tenure inventory"
            - name: Family land and inheritance basics
              description: |-
                ## Purpose
                Across the Caribbean, family land passed down without a will is held in common by every heir, often dozens of cousins at home and abroad, and no one heir can lease or sell it alone. Understanding how intestacy, letters of administration, probate and joint ownership work in your country explains why lenders hesitate over family land and what has to happen before the farm can rely on it.

                ## Milestones
                1. Notes on what happens to land when the owner dies with and without a will in your country.
                2. The difference between probate and letters of administration understood.
                3. The name the land is still registered in, and whether an estate was ever administered, found out.
                4. A list of questions for an attorney about your family's land.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains inheritance of land in your country and states whose name your family land is held in and whether the estate was administered."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the oldest relatives whose name the family land is in"
                - "Search the land registry or deeds office for that name and parcel"
                - "Read a public legal aid guide on inheritance without a will in your country"
                - "Write your questions for the attorney about the family land"
            - name: Access, rights of way and water on rented land
              description: |-
                ## Purpose
                Good soil is worthless if the only track crosses a neighbour's land by goodwill, or the stream you irrigate from is not part of the lease. Learning how rights of way and water use are granted, and checking whether your lease and title actually include them, avoids building a farm that depends on a favour.

                ## Milestones
                1. The route from the public road to each parcel traced and its legal status found out.
                2. Any right of way, easement or access clause in the lease or title noted.
                3. Whether water from wells, streams or drains on the land is covered by the lease confirmed.
                4. Gaps in access or water rights listed for discussion with the landlord and attorney.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For each parcel, the access route and water source are recorded with their legal basis, and any gap is written up for the attorney."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Trace the route from the public road to each parcel on your map"
                - "Check the lease and survey plan for any right of way or access clause"
                - "Ask the landlord whether water on the land is included in the lease"
                - "List any access or water gap for your attorney"
            - name: How agricultural rents are set and reviewed
              description: |-
                ## Purpose
                Farm rents are set in different ways: a fixed sum per acre, a rate set by the state, a share of the crop, or a review linked to inflation or a valuation. Knowing how rents for similar land around you are set, and what a fair review clause looks like, puts you on equal footing with a landlord who wants to raise the rent.

                ## Milestones
                1. The common ways rent is set for farm land in your district noted, with examples.
                2. Rents paid by at least three other farmers for comparable land gathered.
                3. The rent review clause in your own lease understood: when, how and with what limit.
                4. A view written down of what a fair rent for your parcel would be.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes compare your rent with at least three comparable local rents and explain your lease's review clause in plain terms."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask three farmers with similar land what rent they pay and how it is set"
                - "Ask the extension office or state agency for current state land rental rates"
                - "Read the rent review clause in your lease and write it in plain words"
                - "Write down what you think a fair rent for your parcel is and why"
            - name: Lease or buy decision for the next block of land
              description: |-
                ## Purpose
                Buying land ties up cash that could go into irrigation, stock or a packhouse, while leasing leaves the farm exposed at every renewal. Comparing the two for a specific parcel, with real prices, financing costs, lease terms and what the enterprise needs, gives you a decision based on numbers rather than the feeling that owning is always better.

                ## Milestones
                1. One specific parcel or offer chosen for the comparison.
                2. The full cost of buying set out: price, legal fees, stamp duty, survey, finance cost.
                3. The full cost of leasing set out over the same period: rent, reviews, renewal risk.
                4. A decision recorded with the reasons and the conditions that would change it.

                ## Notes
                Start from the **Purchase decision** template. Have your accountant check the finance figures and your attorney check the title before any deposit is paid.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of buying versus leasing one parcel over ten years exists, with a recorded decision and the accountant's check of the numbers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Open a purchase decision page for the parcel you are considering"
                - "Get a price, legal fee estimate and stamp duty figure for buying"
                - "Work out the rent and renewal risk over the same ten years"
                - "Ask your accountant to check the finance figures"
                - "Record the decision and what would make you change it"
            - name: Negotiating a longer term for tree crops
              description: |-
                ## Purpose
                Cocoa, citrus, coconut, nutmeg and fruit orchards take three to seven years to bear and decades to repay, so planting them on a five-year lease hands most of the value to the landlord. Asking for a term that matches the crop's life, or a renewal option written into the lease, is the condition that makes the planting worth doing.

                ## Milestones
                1. The years to first harvest and to pay back the planting cost estimated for your crop.
                2. The term you need, and a fallback such as a renewal option, written down before talks.
                3. The request put to the landlord with reasons, including the value the trees add to the land.
                4. A longer term or renewal option agreed and written into the lease by your attorney.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The lease for the tree crop parcel carries a term or renewal option at least as long as the crop's pay-back period, drafted by your attorney."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension officer how long your tree crop takes to repay its planting cost"
                - "Decide the term you need and the fallback you would accept"
                - "Put the request to the landlord with the reasons in writing"
                - "Have the attorney write the agreed term or option into the lease"
            - name: Written landlord consent for buildings and wells
              description: |-
                ## Purpose
                Most leases forbid permanent structures, wells, ponds and tree felling without the landlord's written consent, and a pen or packhouse built without it can be ordered removed at your cost. Asking first, in writing, with a sketch and an agreement on who owns it at the end, protects the investment.

                ## Milestones
                1. The lease checked for what needs consent and how it must be asked for.
                2. A written request sent with a sketch, location, size, cost and purpose.
                3. Ownership and removal of the structure at lease end agreed in the reply.
                4. The signed consent filed in the vault and the improvement added to the register.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed consent from the landlord covering the planned structure, including what happens to it at lease end, is filed before building starts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the lease for which works need consent and how to ask"
                - "Ask the agent to draft a consent request letter with the sketch details"
                - "Send the request and agree in writing who owns the structure at the end"
                - "File the signed consent and add the work to the improvements register"
            - name: Landlord consent to charge a lease for a loan
              description: |-
                ## Purpose
                Lenders that take the lease as security usually need the landlord's consent to the charge, and for state leases that means a letter from the land agency, which can take months. Starting the consent request as soon as the loan is discussed, not when the loan is approved, keeps the disbursement on time for the planting season.

                ## Milestones
                1. The lender's exact wording and form for the consent obtained.
                2. The lease checked for any clause on mortgaging or charging.
                3. The consent request lodged with the landlord or land agency with a file reference.
                4. The signed consent delivered to the lender and a copy kept in the vault.

                ## Notes
                Ask the lender whether it will accept the consent in a particular form; a letter in the wrong wording can mean starting again.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed consent to charge the lease, in the lender's required form, is delivered to the lender with a copy filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lender for its consent form or required wording"
                - "Check the lease clause on charging or mortgaging the lease"
                - "Lodge the consent request and note the file reference"
                - "Deliver the signed consent to the lender and file a copy"
            - name: Right of first refusal if the land is sold
              description: |-
                ## Purpose
                If your landlord decides to sell, a tenant without any agreed right can be the last to hear and the first to leave. A right of first refusal, written into the lease, gives you the chance to match an offer before the land goes to someone else, and many landlords agree to it because it costs them nothing.

                ## Milestones
                1. Your attorney's view on whether a right of first refusal is usual and enforceable where you farm.
                2. The landlord asked, with the reasons, at a calm moment rather than during a dispute.
                3. Clause wording agreed: notice period, how the price is set and the time to match.
                4. The clause added to the lease or a side letter and signed.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed clause or side letter gives you a right of first refusal with a defined notice period, or a recorded decision not to pursue it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your attorney whether a right of first refusal is usual where you farm"
                - "Raise the idea with the landlord at the next check-in"
                - "Agree the notice period and time to match an offer"
                - "Have the attorney add the clause or side letter and sign it"
            - name: Fair written crop-share agreement
              description: |-
                ## Purpose
                Crop sharing, where the landowner takes a share of the harvest instead of cash rent, often runs on memory and goodwill until a poor season or a disputed weighing. Writing down the share, who supplies what, how the crop is weighed and when it is settled keeps the arrangement fair and gives you proof of the tenancy.

                ## Milestones
                1. The current share and who supplies land, labour, seed, fertiliser and water agreed in plain words.
                2. How the harvest is weighed or counted and when the share is settled written down.
                3. What happens in a crop failure or hurricane year agreed.
                4. The agreement signed, witnessed and a copy given to the landowner.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed crop-share agreement sets the share, inputs, weighing method, settlement time and bad-year terms, with each party holding a copy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List who supplies each input under the current crop share"
                - "Agree with the landowner how the crop is weighed and settled"
                - "Agree what happens to the share in a failed or hurricane season"
                - "Sign the written agreement with a witness and give the owner a copy"
            - name: Regularising informal occupation of state land
              description: |-
                ## Purpose
                Many farmers have cultivated state land for years without a lease, and some governments run programmes to regularise long-standing occupation with a lease or certificate of comfort. Gathering the proof of how long and how you have farmed, and applying through the right channel, turns a position that could end with an eviction notice into a lease a bank can see.

                ## Milestones
                1. The agency and programme, if any, for regularising occupation of state agricultural land identified.
                2. Evidence of occupation gathered: dated photos, receipts, farmer registration, statements from neighbours.
                3. The application lodged with a file reference and copies of everything sent.
                4. A survey arranged if the agency requires one, and the outcome recorded.

                ## Notes
                Get legal advice before applying. In some places an application admits occupation, so the attorney should see the papers first. Never clear new state land while an application is pending.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An application to regularise occupation is lodged with the state land agency, with an evidence file and file reference, after attorney review."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the extension office which agency handles regularisation of farm occupation"
                - "Gather dated photos, receipts and farmer registration showing your years on the land"
                - "Have the attorney review the evidence before you apply"
                - "Lodge the application and record the file reference"
                - "Follow up with the agency on the application status @recurring(monthly:12)"
            - name: Consolidating scattered plots into fewer parcels
              description: |-
                ## Purpose
                Farming five small plots spread across a district costs hours of travel, multiplies theft risk and makes irrigation and machinery hard to justify. Weighing whether to swap, give up or replace outlying plots with one larger block can cut costs as much as any yield gain, but it means timing exits around lease ends.

                ## Milestones
                1. Travel time, rent and margin for each plot set out side by side.
                2. Plots that cost more than they earn once travel is counted identified.
                3. Options for a larger single block explored with landlords, neighbours or the state agency.
                4. A plan for which plots to keep, exit or swap, timed to their lease end dates.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan names which plots to keep, exit or swap, based on travel time, rent and margin, with exit dates matched to lease ends."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Time the round trip to each plot for a normal working week"
                - "Set rent, travel cost and margin side by side for each plot"
                - "Ask neighbours and the agency about larger blocks coming available"
                - "Write a keep, exit or swap plan timed to each lease end"
            - name: Scorecard for comparing parcels to rent
              description: |-
                ## Purpose
                When three parcels are on offer at once, the cheapest rent can hide the worst road, no water and a landlord with unclear title. Scoring each parcel against the same list, built from your land needs brief, and checking title before you commit, keeps the choice honest.

                ## Milestones
                1. A scorecard built from the land needs brief with weights for the most important factors.
                2. Each parcel visited in the wet season or after heavy rain, as well as in the dry.
                3. Each parcel scored, with the owner's title or authority to lease checked by a search.
                4. The chosen parcel and the reasons recorded.

                ## Notes
                Ask to see the landlord's title or proof of authority before paying anything. A relative leasing out family land may not have the right to do it alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least two parcels are scored on the same weighted scorecard, the chosen owner's title is checked by a search, and the choice is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Turn the land needs brief into a weighted scorecard"
                - "Visit each parcel after heavy rain to check drainage and road access"
                - "Ask each owner for proof of title or authority to lease"
                - "Order a title or deed search on the preferred parcel"
            - name: Applying for a state agricultural lease
              description: |-
                ## Purpose
                State agricultural land is often allocated through rounds of applications, with farmer registration, a farm plan and proof of experience required, and incomplete applications simply wait. Preparing a complete, neat application with a realistic plan, and following it up steadily, gives you a far better chance in a round where land is scarce.

                ## Milestones
                1. The agency, application form, eligibility rules and any current allocation round confirmed.
                2. Farmer registration, identification, references and a short farm plan prepared.
                3. The application lodged with copies kept and a file reference recorded.
                4. Every follow-up and agency request logged until a decision is received.

                ## Notes
                Agencies vary widely: some allocate through agro-parks or land distribution programmes, others through direct application. Ask the extension office which route is open now.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete state agricultural lease application, with farm plan and registration, is lodged with a file reference and every follow-up logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the extension office which agency allocates state farm land and how"
                - "Get the application form and the list of supporting documents"
                - "Write a two-page farm plan for the land you are requesting"
                - "Lodge the application and record the file reference"
                - "Follow up on the application status with the agency @recurring(monthly:8)"
            - name: Preparing for a state land inspection visit
              description: |-
                ## Purpose
                An inspection by the state land agency decides whether you are meeting your development conditions, and the officer may see the farm for less than an hour. Having the cultivated area marked, the evidence file printed and the boundaries clear makes that hour show the years of work rather than the weedy corner.

                ## Milestones
                1. The date, purpose and officer for the inspection confirmed in writing.
                2. The development conditions log, photos and receipts printed in one folder.
                3. Boundary markers visible and the access road passable on the day.
                4. Notes of what the officer said and any follow-up required written up the same day.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The inspection is attended with a printed evidence folder, and a written note of the officer's findings and any follow-up is filed within a day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the inspection date and purpose with the agency in writing"
                - "Print the development conditions log and evidence photos"
                - "Clear access and make every boundary marker visible"
                - "Write up the officer's comments the same day and file them"
            - name: Lease renewal negotiation meeting
              description: |-
                ## Purpose
                Renewal is the one moment when term, rent and conditions can all change, and tenants who arrive unprepared usually accept whatever is offered. Going into the meeting with your rent comparison, improvements register, payment record and a clear list of what you want and what you will accept, turns a renewal into a negotiation.

                ## Milestones
                1. The meeting booked at least three months before the notice deadline.
                2. A one-page brief with your record as tenant, improvements, rent comparison and requests.
                3. Your must-haves and fallbacks agreed with any business partner beforehand.
                4. Agreed points written up, confirmed by both sides and passed to the attorney to draft.

                ## Notes
                Start from the **Meeting notes** template to record what was agreed and by whom.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The renewal meeting is held before the notice deadline, and a written note of agreed terms confirmed by both sides is with the attorney for drafting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the renewal meeting at least three months before the notice deadline"
                - "Write a one-page brief with your payment record, improvements and requests"
                - "Decide your must-haves and the fallbacks you would accept"
                - "Send the agreed points to both sides and to the attorney after the meeting"
            - name: Signing, stamping and registering a new lease
              description: |-
                ## Purpose
                A lease is only as strong as its execution: wrong names, missing plans, unstamped copies and unregistered leases cause problems years later. Treating signing day as a checklist, with the attorney confirming duty, registration and copies, means the paper you file is the paper a court, buyer or lender will accept.

                ## Milestones
                1. The final draft checked for correct names, parcel description, plan, term and rent.
                2. The lease signed and witnessed by every required party.
                3. Stamp duty paid and the lease registered where required, with receipts.
                4. Certified copies placed in the vault and dates entered in the renewal calendar.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lease is signed, stamped and registered where required, with receipts, certified copies in the vault and all dates in the renewal calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check names, parcel description, plan, term and rent on the final draft"
                - "Sign the lease with every party and witness present"
                - "Have the attorney pay stamp duty and lodge registration where required"
                - "File certified copies and enter every lease date in the calendar"
            - name: Handing back land at the end of a lease
              description: |-
                ## Purpose
                Leaving land well is part of keeping a good name in a farming district, and a messy exit can bring claims for damage or lost improvements. Agreeing a handover date, removing what is yours, photographing the condition and getting a signed acknowledgement closes the lease cleanly.

                ## Milestones
                1. The end date, the condition required by the lease and any agreed removals confirmed in writing.
                2. Crops harvested or agreed for sale, and removable structures and equipment taken off.
                3. The land photographed on the last day and a joint walk held with the landlord.
                4. A signed handover note received confirming the lease ended with no outstanding claims.

                ## Notes
                Start from the **Operational checklist** template. Raise any improvements claim before the handover, not after.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The land is handed back on the agreed date with photos taken and a signed handover note from the landlord confirming no outstanding claims."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the handover date and required land condition in writing"
                - "Plan the last harvest so no crop is left in the ground"
                - "Remove your structures, irrigation and equipment as agreed"
                - "Walk the land with the landlord and get a signed handover note"
            - name: Founder's route to first farm land
              description: |-
                ## Purpose
                Founders starting a farm business without family land face the hardest step first: finding ground they can rely on with no track record and little cash. A staged approach, starting with a short written lease or an agro-park plot, building a record of rent paid and land used well, then moving to a longer lease or purchase, matches tenure to the business as it proves itself.

                ## Milestones
                1. The land needs brief and budget written for year one only.
                2. At least three routes explored: private rental, state allocation or agro-park, and farmer group land.
                3. A first written lease secured with a term that covers at least two crop cycles.
                4. A plan written for the move to longer tenure once the business has two years of records.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written first lease covering at least two crop cycles is signed, and a plan for moving to longer tenure is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a year-one land needs brief and budget"
                - "Ask the extension office about agro-park plots and state land rounds"
                - "Ask farmer groups and estate owners about land for rent"
                - "Sign a first written lease for at least two crop cycles"
                - "Write down what records you need to move to a longer lease in two years"
            - name: Written arrangement for farming family land
              description: |-
                ## Purpose
                Farming family land with the quiet agreement of siblings and cousins works until someone abroad wants their share, or a relative sells a corner without asking. A written family arrangement, agreed at a family meeting, saying who farms which part, what is paid or shared and how decisions are made, keeps the peace and the farm.

                ## Milestones
                1. All heirs or co-owners with an interest listed, including those overseas.
                2. A family meeting held, in person or by video, to agree who farms what and on what terms.
                3. The arrangement written down and signed by as many co-owners as possible, reviewed by an attorney.
                4. A yearly family land meeting agreed.

                ## Notes
                Start from the **Meeting notes** template for the family meeting. A family arrangement is not the same as a lease from all owners; ask the attorney what it can and cannot protect.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written family land arrangement, reviewed by an attorney, is signed by the co-owners who can be reached, and a yearly family meeting is set."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every relative with a share in the family land and how to reach them"
                - "Set a family meeting time that works for relatives overseas"
                - "Write up what the family agreed and send it to the attorney"
                - "Collect signatures from as many co-owners as possible"
                - "Hold the family land meeting and record any changes @recurring(yearly)"
            - name: Taking over a parent's farm and leases
              description: |-
                ## Purpose
                When a parent steps back or dies, a state lease in their name does not pass to the child automatically, and private landlords may treat it as a chance to end the tenancy. Planning the transfer while the parent is still farming, with the agency and landlords told in good time and the paperwork in the right order, keeps the farm working through the change.

                ## Milestones
                1. Every lease and land arrangement in the parent's name listed with its transfer or assignment rules.
                2. The agency and each landlord asked how a lease is transferred to a family member.
                3. The parent's will or estate plan checked by an attorney for how it treats the land and leases.
                4. Transfers or new leases in your name agreed, with dates.

                ## Notes
                The parent may want to keep a say in the farm. Write down what they will still decide, so the handover does not become a family quarrel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every lease held by the parent has an agreed transfer route or new lease in your name, with dates confirmed by the agency or landlord."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every lease and land agreement held in your parent's name"
                - "Ask the agency and each landlord how a lease transfers to a family member"
                - "Ask the attorney to check how the parent's will treats the land"
                - "Review handover progress with your parent @recurring(monthly:25)"
            - name: Returning from abroad to farm inherited land
              description: |-
                ## Purpose
                Returning nationals often come home from the UK, US or Canada to farm land a grandparent left, then discover the title is in a dead relative's name, the boundaries are disputed and a neighbour has been planting it for twenty years. Starting the paperwork from overseas, months before the move, means the first year at home is spent farming rather than in the land registry.

                ## Milestones
                1. A title or deed search done on the land while still abroad.
                2. Who occupies or farms the land now, and on what basis, found out through a trusted local contact.
                3. An attorney at home instructed on the estate, title and any occupier.
                4. A survey arranged and the land's position clear before shipping equipment or a barrel of tools.

                ## Notes
                A barrel is the shipping drum many returnees use for goods; do not send farm equipment until the land question is settled.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A title search, an attorney's written view on the estate and occupier, and a current survey exist before the move home."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask a relative at home for the parcel description and the owner's name"
                - "Instruct an attorney at home to run a title or deed search"
                - "Find out through a trusted contact who is farming the land now"
                - "Arrange a survey before shipping any equipment"
            - name: Buying farm land in instalments
              description: |-
                ## Purpose
                Many small farmers buy land from an estate or private seller over several years under an agreement for sale, farming it while they pay, and the deed only passes at the end. Keeping every instalment receipted, the agreement registered or noted where possible and the final transfer planned, protects years of payments if the seller dies or sells again.

                ## Milestones
                1. The agreement for sale reviewed by an attorney, including what happens on a missed payment or the seller's death.
                2. The agreement registered, noted or protected as the attorney advises.
                3. Every instalment paid by traceable means with a signed receipt filed.
                4. The final payment and transfer steps, costs and timing written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every instalment has a signed receipt, the agreement is protected as the attorney advised, and the transfer steps and costs are written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Have an attorney review the agreement for sale"
                - "Ask the attorney how to protect the agreement at the registry"
                - "Pay the instalment and file the signed receipt @recurring(monthly:10)"
                - "Write down the steps and costs for the final transfer"
            - name: Holding land personally or in the farm company
              description: |-
                ## Purpose
                Founders who incorporate the farm business often leave the lease in their own name, which can confuse lenders, buyers and heirs about who controls the land. Deciding, with your attorney and accountant, whether leases and land should sit with you or the company, and whether an assignment needs landlord consent, keeps the business and the land in step.

                ## Milestones
                1. The current name on each lease and title compared with the business structure.
                2. The attorney's and accountant's views on holding personally or in the company recorded.
                3. Landlord or agency consent requirements for assignment to the company confirmed.
                4. A decision made and, if moving, the assignment completed.

                ## Notes
                This is a legal and tax decision with lasting effects. Record what your attorney and accountant say; do not decide from a template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether each lease is held personally or by the company, with attorney and accountant views and any needed consents obtained."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List whose name is on each lease and title"
                - "Ask the attorney and accountant whether the company should hold them"
                - "Check whether assigning to the company needs landlord or agency consent"
                - "Record the decision and complete any assignment"
            - name: Partition or sale of family land among heirs
              description: |-
                ## Purpose
                Once so many heirs share family land that no one of them can farm or borrow against it, partition into separate parcels or a buy-out of the others may be the only way forward. It is slow, costly and emotional, so it needs an attorney, a surveyor, a valuation and patient family consent long before any court is involved.

                ## Milestones
                1. Every heir and their share identified with the attorney's help.
                2. A valuation and a draft partition plan from the surveyor prepared.
                3. Options put to the family: partition, buy-out, joint lease to the farming heir, or sale.
                4. An agreed route chosen and the attorney instructed to carry it out.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed route for the family land, partition, buy-out, joint lease or sale, is recorded with the attorney instructed and costs estimated."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the attorney to identify every heir and their share"
                - "Get a valuation and a draft partition plan from a surveyor"
                - "Put the options to the family in writing"
                - "Instruct the attorney on the route the family agrees"
            - name: Resolving a boundary dispute with a neighbour
              description: |-
                ## Purpose
                Most boundary disputes between farmers start with a fence or a row of trees a few metres out, and most can be settled without court if the facts are clear and tempers are kept down. Getting the survey evidence, talking first, then using mediation before litigation, saves money and keeps the neighbour you will live beside for decades.

                ## Milestones
                1. The disputed line marked on your map with photos and the relevant survey plans.
                2. A licensed surveyor's report on where the boundary lies.
                3. A calm meeting with the neighbour, or mediation through a community or court-annexed service.
                4. An agreed outcome written and signed, or the attorney instructed on the next step.

                ## Notes
                Do not pull down a neighbour's fence or crops, however sure you are. Self-help in a land dispute usually makes the legal position worse.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A surveyor's boundary report exists, and the dispute ends in a signed agreement or a documented referral to mediation or the attorney."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark the disputed line on your map and photograph it"
                - "Commission a licensed surveyor to report on the boundary"
                - "Meet the neighbour with the survey and offer mediation if needed"
                - "Write up and sign any agreed outcome"
            - name: Professional valuation of farm land or a lease
              description: |-
                ## Purpose
                Lenders, buyers, family partitions and compensation claims all need a figure for the land, and a guess will be challenged. A valuation by a qualified valuer, with a clear purpose and the improvements register to hand, gives a figure everyone can rely on and shows what your work on the land has added.

                ## Milestones
                1. The purpose of the valuation stated: loan, purchase, partition, lease renewal or compensation.
                2. A qualified valuer engaged with terms of reference and fee agreed.
                3. The valuer given the survey plan, lease, improvements register and recent rents.
                4. The valuation report received and filed with a note of its date and purpose.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A dated valuation report from a qualified valuer, for a stated purpose, is filed with the survey plan and improvements register used."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down why you need the valuation and who will rely on it"
                - "Get fee quotes from two qualified valuers"
                - "Send the valuer the survey plan, lease and improvements register"
                - "File the report with its date and purpose"
            - name: Group lease for an agro-park or farmer cluster
              description: |-
                ## Purpose
                Agro-parks and farmer clusters on large state or estate blocks often hold one head lease shared by many growers, with roads, drains and irrigation managed in common. Understanding who holds the head lease, what each member's plot agreement says and how shared costs are decided protects you from losing your plot when the group or the head lease runs into trouble.

                ## Milestones
                1. The head lease holder, its term and its main conditions found out.
                2. Your own plot agreement read and its link to the head lease understood.
                3. The rules for shared costs, maintenance and member exit written down.
                4. Your contributions and the group's decisions recorded month by month.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note records the head lease terms, your plot agreement and the group's cost and exit rules, with monthly meeting decisions logged."
                cadence: rolling
              tasks:
                - "Ask the park manager or group secretary who holds the head lease"
                - "Read your plot agreement and note where it depends on the head lease"
                - "Write down the group's rules on shared costs and leaving"
                - "Attend the group management meeting and note decisions @recurring(monthly:18)"
            - name: Responding to a land acquisition or road reserve notice
              description: |-
                ## Purpose
                Governments widen roads, build drains and acquire farmland for housing or industry, and a notice can land on a farm that has been worked for decades. Responding inside the deadline, with evidence of your tenure, crops and improvements and an attorney instructed, decides whether you are compensated fairly, relocated or simply told to leave.

                ## Milestones
                1. The notice read for what is being acquired, by whom, under what law and by when you must respond.
                2. Your tenure documents, improvements register, crop records and dated photos gathered into one file.
                3. An attorney and, where needed, a valuer instructed to prepare your response or claim.
                4. The response or compensation claim lodged before the deadline, with proof of delivery.

                ## Notes
                Do not cut down crops or remove structures before the attorney advises; standing crops and improvements are often part of what is valued.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A response or compensation claim, prepared with an attorney and backed by tenure and improvement evidence, is lodged before the notice deadline with proof of delivery."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Note the response deadline on the notice and put it in your calendar"
                - "Gather tenure papers, the improvements register and crop photos into one file"
                - "Instruct the attorney and ask whether a valuer is needed"
                - "Lodge the response or claim and keep proof of delivery"
            - name: Succession plan for the farm's land and leases
              description: |-
                ## Purpose
                A farmer who dies with leases in their own name, no will and no one briefed can leave the next generation fighting over family land while the state agency repossesses the lease. A written plan naming who takes over each parcel, how each lease can be passed on and where every document is, made with an attorney, is the last and most valuable land project.

                ## Milestones
                1. The successor for each parcel and lease named, after talking with family.
                2. The transfer rules for each lease confirmed with the agency or landlord.
                3. A will or estate plan prepared with an attorney that deals with the land.
                4. The successor shown the document vault, the inventory and the key contacts.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed will or estate plan deals with every parcel and lease, and the named successor has been shown the document vault and contacts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Talk with the family about who should take over each parcel"
                - "Ask the agency and landlords how each lease can pass on"
                - "Make or update a will with an attorney that covers the land"
                - "Show the successor the vault, inventory and contacts"
                - "Review the succession plan after any change in family or leases @recurring(yearly)"
---

# Farm Land Tenure and Leases

This area is for anyone farming land they need to hold on to, from a young grower renting two acres on a handshake to an established farmer with a state agricultural lease, a private rental and a share of family land. It starts with foundations (a list of every parcel and the right you hold over it, a document vault, a parcel map, the attorney and surveyor you will call, a close reading of the lease you have and getting verbal deals written down), then the machinery of renewal dates, rent and land tax, development conditions, boundary walks and landlord contact, the knowledge of tenure types, survey plans, title systems and family land, decisions on leasing or buying, longer terms, landlord consents and regularising informal occupation, dated events such as a state lease application, an inspection, a renewal meeting and handing land back, situations for founders, families, heirs and returnees, and finally specialist work on partition, boundary disputes, valuations, group leases, acquisition notices and succession.

What repeats is a monthly receipt filing and renewal calendar check, a monthly improvements entry and correspondence log, quarterly boundary walks, landlord check-ins, development photos and vault updates, and a yearly rent confirmation, land tax payment, tenure review and lender pack refresh. The Risk register, Purchase decision, Meeting notes and Operational checklist templates pair with the projects that keep those records. Everything here is organisational: legal conclusions about your land come from an attorney and the land registry, not from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
