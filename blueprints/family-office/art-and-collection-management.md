---
id: family-office.art-and-collection-management
name: Art and Collection Management
description: "A family collection run like a small museum: a full inventory with provenance and title papers, condition and environment checks, valuations for insurance, safe storage and moves, museum loans and a plan for the heirs."
category: personal
version: 1.0.0
tags: [family-office, art-and-collection-management, parent, retiree, art-collection, provenance, conservation, registrar]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - meeting-notes
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Art and Collection Management
          description: "Caring for a family's art or collection: inventory and provenance, registrar duties, conservation, insurance valuations, loans to museums and storage."
          projects:
            - name: Collection ownership map by person and entity
              description: |-
                ## Purpose
                Works bought over decades end up owned by a mix of individuals, a holding company, a trust or a foundation, and nobody can say which without checking invoices. Insurance, lending, gifting and probate all depend on knowing the legal owner of each piece, so this map comes before any other record.

                ## Milestones
                1. Every owning person and entity listed, with the lawyer or trustee responsible for each.
                2. Each known work or group of works assigned to one owner, with the document that shows it.
                3. Works with unclear ownership flagged on a separate list for the family lawyer.
                4. The map agreed by the head of the family and filed with the collection records.

                ## Notes
                Ownership questions are legal ones. The map records what the papers say; the family lawyer decides what they mean.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated ownership map assigns every known work to one person or entity, with unclear cases listed for the family lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every person, company, trust and foundation that might own a work"
                - "Match the twenty most valuable works to the name on their invoice"
                - "Send the list of unclear cases to the family lawyer"
                - "File the agreed ownership map with the collection records"
            - name: First room-by-room inventory of every work
              description: |-
                ## Purpose
                Most family collections have never been counted in one go, and the first full walk-through usually finds works nobody remembered, pieces lent to a relative years ago and gaps where something should be. A complete inventory across every home and store is the base for insurance, care and the heirs' plans.

                ## Milestones
                1. Every home, office, storage unit and lender's premises listed as a location.
                2. Each work recorded with artist or maker, title, date, medium, dimensions and location.
                3. Works held by others, such as galleries, framers or relatives, recorded with who holds them.
                4. Missing or unaccounted works listed separately and reported to the head of the family.

                ## Notes
                Record what you see, not what the old list says. A tape measure, a camera and one person writing while another reads labels is twice as fast as working alone.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory lists every work in every location with core details, and any missing works are reported in writing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every place the family keeps or has lent works"
                - "Book a two-day block to inventory the main residence first"
                - "Ask framers, galleries and relatives to confirm works they still hold"
                - "Write up any works that cannot be found and share the list"
            - name: Object numbering and labelling convention
              description: |-
                ## Purpose
                Without a unique number per object, records drift: two Picasso prints with the same title, a pair of chairs counted as one, a photograph that could be any of three works. A simple accession number scheme, applied with archival labels in a consistent place, ties every photo, invoice and report to exactly one object.

                ## Milestones
                1. A numbering format agreed, for example year of acquisition plus a running number.
                2. Rules written for sets, pairs, multi-part works and frames.
                3. Every inventoried work given a number in the records.
                4. Physical labels placed by a conservator's method that does not damage the object.

                ## Notes
                Never write directly on a work or stick tape to it. Ask a conservator which labelling method suits paintings, paper, ceramics and textiles.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every inventoried work carries a unique number in the records, and a written numbering rule covers sets and multi-part works."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a numbering format and write it on one page"
                - "Decide how pairs, sets and multi-part works are numbered"
                - "Ask a conservator for safe labelling methods by material"
                - "Assign numbers to every work on the inventory"
            - name: Photography standard for collection records
              description: |-
                ## Purpose
                After a theft, a flood or a dispute with a shipper, a clear photograph of the front, back, signature and any damage is often the only proof of what the work looked like. Setting one standard and photographing every work to it means the images are useful to police, insurers, conservators and heirs alike.

                ## Milestones
                1. A shot list agreed: front, back, signature, labels, frame and any existing damage.
                2. Images named with the object number and stored in one secure folder.
                3. Every work above an agreed value photographed to the standard.
                4. A backup copy of the images kept off site.

                ## Notes
                A good phone camera with even daylight and a scale bar is enough for records. Hire a professional photographer for reproduction quality images if a loan or catalogue needs them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every work above the agreed value has front, back and detail photographs named by object number, with an off-site backup."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write a one-page shot list for collection photographs"
                - "Buy a small scale bar and colour card for record shots"
                - "Photograph the most valuable twenty works first"
                - "Copy the image folder to the off-site backup"
            - name: Provenance file for each significant work
              description: |-
                ## Purpose
                Provenance, the chain of ownership from the artist to the family, decides whether a work can be sold, lent or insured without awkward questions. Buyers, museums and auction houses now expect it, especially for works that changed hands in Europe between 1933 and 1945 or left their country of origin. Building the file while the people who bought the works are alive is far easier than doing it after.

                ## Milestones
                1. A list of works significant enough to need a provenance file, agreed with the family.
                2. Each file holding every known previous owner, sale, exhibition and publication.
                3. Gaps in the ownership chain marked with dates and what is missing.
                4. Family members who remember the purchase interviewed and their accounts written down.

                ## Notes
                Gaps are normal. Record them honestly; an unexplained gap discovered by a buyer later costs more than one disclosed now.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each agreed significant work has a provenance file listing known owners, sales and exhibitions, with gaps marked by date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree which works need a full provenance file"
                - "Collect old auction catalogues, gallery letters and labels from the backs of works"
                - "Interview the family member who bought each major work"
                - "Mark every gap in each ownership chain with its date range"
            - name: Title and purchase document gathering
              description: |-
                ## Purpose
                Invoices, bills of sale, import papers and export licences prove the family owns a work and that it moved legally. They are usually scattered across offices, email and a dealer's archive, and a missing import record can stop a sale or a museum loan at the last minute.

                ## Milestones
                1. Invoices or bills of sale found for every work above the agreed value.
                2. Import, export and customs papers matched to each work that crossed a border.
                3. Copies requested from dealers and auction houses for missing invoices.
                4. All papers scanned, named by object number and stored in the collection records.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every work above the agreed value has a scanned purchase document, and each cross-border work has its customs papers on file."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search the office files and email for art invoices and bills of sale"
                - "Write to dealers and auction houses asking for copy invoices"
                - "Match customs and export papers to works bought abroad"
                - "Scan every document and name it by object number"
            - name: Choosing a collection management database
              description: |-
                ## Purpose
                Spreadsheets work for forty objects and fail at four hundred, once images, condition reports, loans, valuations and locations all need linking. Comparing a few collection management systems built for private collectors, against the family's real needs and data security standards, prevents an expensive switch later.

                ## Milestones
                1. Needs written down: number of objects, users, images, reports and access by family branch.
                2. Three systems shortlisted and demonstrated with a sample of real records.
                3. Data security, export format and cost compared on one page.
                4. A system chosen and the inventory imported.

                ## Notes
                Start from the **Purchase decision** template. Make sure the family can export all records and images in a standard format if the provider closes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A collection database is chosen against written needs, the inventory is imported and a full export has been tested."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the list of what the database must hold and who may see it"
                - "Book demonstrations of three systems built for private collections"
                - "Test an import of twenty real records in the preferred system"
                - "Download a full export of the collection database @recurring(monthly:28)"
            - name: Condition baseline survey with a conservator
              description: |-
                ## Purpose
                Flaking paint, foxing on paper, a loose frame or active woodworm spread quietly until they become expensive treatments. A conservator's survey of the collection records each work's condition today and ranks what needs attention, which also gives the insurer and any future borrower a starting point.

                ## Milestones
                1. A conservator with the right specialisms engaged, with scope and fee agreed.
                2. A short condition note and photographs recorded for each surveyed work.
                3. Works ranked as urgent, watch or stable.
                4. A treatment list with estimated costs agreed for the urgent works.

                ## Notes
                Paintings, paper, objects and textiles are separate conservation specialisms. One lead conservator can coordinate colleagues for the rest.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A conservator's written survey ranks every surveyed work as urgent, watch or stable, with costed treatment for the urgent ones."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask a museum registrar or professional body for conservator recommendations"
                - "Agree the survey scope, fee and timetable in writing"
                - "Walk the conservator through every room and store"
                - "Approve the treatment list for urgent works"
            - name: Written collection policy for the family
              description: |-
                ## Purpose
                Families often buy on instinct for one generation and then argue about what the collection is for. A short policy saying what the family collects, why, who may buy or sell, and what happens to works nobody wants gives buyers and heirs one reference point.

                ## Milestones
                1. The collection's purpose written in two or three sentences.
                2. Acquisition rules set: who may buy, spending limits and checks before purchase.
                3. Disposal rules set: when a work may be sold, gifted or donated, and who decides.
                4. The policy approved by the family and dated for review.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed collection policy sets out purpose, acquisition and disposal rules, with a review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each adult family member what the collection means to them"
                - "Draft acquisition and disposal rules on two pages"
                - "Circulate the draft for comments with a deadline"
                - "Present the final policy for family approval"
            - name: Registrar role and authority to move works
              description: |-
                ## Purpose
                A work goes to a framer, a gallery borrows a painting, a housekeeper rehangs a room, and later nobody knows who allowed it. Naming one registrar, whether a family member, an office employee or an outside service, and listing who may authorise a move or a loan closes that gap.

                ## Milestones
                1. One person named as registrar, with a deputy for absences.
                2. A written list of who may approve moves, loans, treatment and sales.
                3. Value thresholds set above which the head of the family must sign.
                4. Household staff, the office and outside advisers told who the registrar is.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named registrar and deputy are in place, with a written approval list and value thresholds shared with staff and advisers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide who will act as registrar and who will deputise"
                - "Write who may approve moves, loans, treatment and sales"
                - "Set the value above which the head of the family signs"
                - "Brief household staff and advisers on the new approval rules"
            - name: Location register and movement log
              description: |-
                ## Purpose
                The commonest loss in a private collection is not theft but a work moved to storage, a framer or another home and never recorded. Logging every movement with date, reason and who authorised it keeps the inventory true without another full count.

                ## Milestones
                1. A movement form or database entry with date, from, to, reason and approver.
                2. Every move since the inventory logged.
                3. Works out of the family's hands listed with expected return dates.
                4. A monthly check that the register matches what is on the walls.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every move is logged within a week with date, reason and approver, and the monthly check finds no unrecorded moves."
                cadence: rolling
              tasks:
                - "Set up the movement form in the collection database"
                - "Log every move made since the inventory was finished"
                - "Check works due back from framers, conservators or lenders"
                - "Update the location register and spot check one room @recurring(monthly:12)"
            - name: Light, humidity and temperature monitoring
              description: |-
                ## Purpose
                Sun through a window fades watercolours and textiles for good, and swings in humidity crack panels and lift paint, a real risk in tropical homes with air conditioning switched off when the family is away. Small data loggers in the main display rooms and stores show where conditions sit outside the range a conservator recommends.

                ## Milestones
                1. Target ranges agreed with the conservator for each room and material.
                2. Data loggers placed in the main display rooms and stores.
                3. A monthly reading summary kept for each room.
                4. Rooms outside range fixed or the most sensitive works moved.

                ## Notes
                Ask the conservator for ranges rather than copying a museum standard: what matters most is avoiding fast swings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every main display room and store has a logger, a monthly summary and a written fix for any room outside the agreed range."
                cadence: rolling
              tasks:
                - "Ask the conservator for target ranges by room and material"
                - "Buy and place data loggers in display rooms and stores"
                - "Download the logger readings and note any swings @recurring(monthly:3)"
                - "Check logger batteries and recalibrate sensors @recurring(yearly)"
            - name: Housekeeping and handling rules for household staff
              description: |-
                ## Purpose
                Well meaning cleaning does more harm than burglars: spray polish on gilt frames, a damp cloth on a pastel, a sculpture lifted by its arm. Clear written rules for housekeepers and a short practical session with a conservator protect the works that live in everyday rooms.

                ## Milestones
                1. One-page rules written for dusting, handling and what never to touch.
                2. Approved cleaning materials listed and unsafe ones removed.
                3. Household staff trained by a conservator, with attendance recorded.
                4. A monthly walk of the display rooms with the head housekeeper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written handling rules are posted, every housekeeper has attended training, and a monthly walk-through is recorded."
                cadence: rolling
              tasks:
                - "Ask the conservator to list safe and unsafe cleaning materials"
                - "Write one page of handling rules in plain language"
                - "Book a practical handling session for the household team"
                - "Walk the display rooms with the head housekeeper @recurring(monthly:20)"
            - name: Insurance schedule and valuation refresh
              description: |-
                ## Purpose
                Art markets move, and a schedule valued five years ago can leave the family badly underinsured or paying for cover it does not need. Refreshing values for the most important works on a rolling cycle, and sending an updated schedule to the broker every year, keeps the policy matched to the collection.

                ## Milestones
                1. The current insurance schedule reconciled against the inventory.
                2. Works missing from the schedule added, and sold or gifted works removed.
                3. Values refreshed by a qualified appraiser for the top works on a rolling cycle.
                4. The updated schedule sent to the broker and confirmed in writing.

                ## Notes
                Ask the broker whether the policy is scheduled, blanket or a mix, and what single item limit applies to unscheduled works.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year the broker confirms in writing an updated schedule that matches the inventory, with top works valued within the agreed cycle."
                cadence: cyclic
              tasks:
                - "Compare the insurance schedule with the inventory line by line"
                - "List works missing from the schedule or no longer owned"
                - "Book an appraiser to revalue this year's share of top works"
                - "Send the updated schedule to the broker for confirmation @recurring(yearly)"
            - name: Fine art storage oversight
              description: |-
                ## Purpose
                Works in a specialist store are out of sight, and storage statements, access logs and condition notes pile up unread. Reviewing the store's inventory statement each quarter and visiting once a year confirms what is there, in what condition and at what cost.

                ## Milestones
                1. The storage facility's inventory reconciled with the family's records.
                2. Access permissions at the store matched to the family's approval list.
                3. A yearly visit made with photographs of stored works.
                4. Works that no longer need storing listed for a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the store's statement matches the family's records, and a dated visit report exists for the past year."
                cadence: rolling
              tasks:
                - "Ask the store for its current inventory and access list"
                - "Remove anyone from the access list who is no longer authorised"
                - "Reconcile the storage statement with the location register @recurring(quarterly)"
                - "Book a yearly visit to photograph stored works"
            - name: New acquisition intake routine
              description: |-
                ## Purpose
                New purchases often arrive with an invoice in one inbox, a condition report in another and nobody telling the broker. A fixed intake routine means every acquisition is numbered, photographed, documented, insured and placed before it is hung.

                ## Milestones
                1. An intake checklist written for every new work.
                2. Checks before purchase listed: provenance, title, condition and any export restrictions.
                3. The broker told of each acquisition within the policy's notice period.
                4. Every work acquired since the inventory taken through the checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every acquisition since the inventory has a completed intake checklist, including broker notification within the policy's notice period."
                cadence: rolling
              tasks:
                - "Write the intake checklist from purchase to hanging"
                - "Ask the broker how quickly new works must be notified"
                - "Run the checklist on the last three works bought"
                - "Check for acquisitions missing an intake record @recurring(monthly:26)"
            - name: Quarterly collection review with the family
              description: |-
                ## Purpose
                Decisions about treatment, loans, sales and purchases drift when they are only raised over dinner. A short quarterly review, with a written pack from the registrar, gives the family one place to hear what happened and decide what is next.

                ## Milestones
                1. A standing agenda: moves, condition issues, loans, costs and decisions needed.
                2. A one-page pack sent to attendees a week before each review.
                3. Decisions and owners recorded in minutes.
                4. Open actions checked at the start of the next review.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four reviews a year are held with a pack sent in advance and minutes recording each decision and owner."
                cadence: cyclic
              tasks:
                - "Draft the standing agenda for the collection review"
                - "Agree who attends and when the review is held"
                - "Prepare and send the review pack and agenda @recurring(quarterly)"
                - "Record decisions and owners in the minutes"
            - name: Annual collection inventory audit
              description: |-
                ## Purpose
                Records go wrong slowly: a mislabelled photograph, a work recorded in the wrong home, a sale never removed. A yearly audit that checks a sample of works against the records, and every work above a set value, catches errors before an insurer or an heir does.

                ## Milestones
                1. Audit scope agreed: every work above a set value plus a random sample of the rest.
                2. Each audited work checked for location, number, photograph and condition.
                3. Errors corrected in the database and the cause noted.
                4. A short audit note filed with the year's collection records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated audit note shows every high-value work and a random sample checked, with each error corrected."
                cadence: cyclic
              tasks:
                - "Set the value above which every work is checked"
                - "Pick a random sample of the remaining works"
                - "Run the yearly audit and correct any record errors @recurring(yearly)"
                - "File the audit note with the year's records"
            - name: Collection costs log and yearly budget
              description: |-
                ## Purpose
                Storage, insurance, conservation, framing, shipping and appraisals can quietly add up to a meaningful share of the collection's value each year. Logging every invoice by category and setting a yearly budget shows the family the true cost of owning the collection and which works carry most of it.

                ## Milestones
                1. Cost categories agreed and every invoice for the past year logged.
                2. Costs linked to individual works where possible.
                3. A yearly budget set and approved by the family.
                4. Actual costs compared with the budget at each quarterly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every collection invoice is logged by category within the month, and a family-approved yearly budget is compared with actuals each quarter."
                cadence: rolling
              tasks:
                - "List cost categories for storage, insurance, care, shipping and advice"
                - "Log the past twelve months of collection invoices"
                - "Log this month's collection invoices by category @recurring(monthly:8)"
                - "Draft next year's collection budget for family approval @recurring(yearly)"
            - name: Pest monitoring for textiles, paper and wood
              description: |-
                ## Purpose
                Clothes moth, carpet beetle, silverfish, termites and woodworm destroy textiles, books, works on paper and furniture, and in warm climates they work year round. Sticky traps checked on a schedule show an infestation early, while it is still one rug and not a whole room.

                ## Milestones
                1. Traps placed in stores and rooms holding textiles, paper and wooden objects.
                2. A trap map and catch record kept for each location.
                3. A rule agreed for quarantining new textiles and wooden objects before they join the collection.
                4. Any catch above normal reported to the conservator.

                ## Notes
                Never spray insecticide near works of art. Treatment, such as controlled freezing or low oxygen, is a decision for the conservator.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Traps are checked and recorded every quarter in each relevant location, and any unusual catch is reported to the conservator."
                cadence: rolling
              tasks:
                - "Buy insect monitoring traps and mark their locations on a floor plan"
                - "Write the quarantine rule for new textiles and wooden objects"
                - "Check and replace traps and record the catch @recurring(quarterly)"
                - "Send any unusual catch photos to the conservator"
            - name: Display rotation for light-sensitive works
              description: |-
                ## Purpose
                Watercolours, drawings, photographs and textiles fade with cumulative light, and the damage cannot be reversed. Rotating them on and off display on a planned cycle lets the family enjoy them while keeping total exposure within what the conservator advises.

                ## Milestones
                1. Light-sensitive works identified and listed with the conservator.
                2. A rotation plan set for how long each may hang and how long it rests.
                3. Resting works stored flat or in archival boxes.
                4. Each rotation logged in the movement register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rotation plan covers every light-sensitive work, and each change of display is logged."
                cadence: cyclic
              tasks:
                - "List light-sensitive works with the conservator"
                - "Agree display and rest periods for each group"
                - "Swap works due for rest and log the change @recurring(quarterly)"
                - "Order archival boxes for works on paper in storage"
            - name: Reading a conservator's condition report
              description: |-
                ## Purpose
                Condition reports use a vocabulary of craquelure, cupping, foxing, abrasion and inpainting that can make a stable painting sound ruined or hide a real problem. Learning to read one lets the family question a borrower's report, spot damage in transit and follow the conservator's advice.

                ## Milestones
                1. A glossary of the twenty commonest condition terms written for the family.
                2. Three existing condition reports read alongside the works they describe.
                3. The difference between old stable damage and active deterioration understood.
                4. Questions about one report answered by the conservator.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A family glossary of condition terms exists, and three reports have been compared with their works and questions answered."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three condition reports from the survey or past loans"
                - "Look at each work with its report in hand"
                - "Write down the terms you did not know"
                - "Ask the conservator to explain anything still unclear"
            - name: Provenance research methods and red flags
              description: |-
                ## Purpose
                Families selling, lending or donating works now meet hard questions about wartime looting, stolen art registers and cultural objects removed from their country of origin. Understanding how provenance is researched, and which gaps worry buyers and museums, helps the family brief a specialist researcher and avoid surprises.

                ## Milestones
                1. The main sources understood: auction catalogues, dealer archives, exhibition records and stolen art databases.
                2. The periods and categories that draw scrutiny listed, such as 1933 to 1945 and antiquities.
                3. Each significant work checked against at least one stolen art register.
                4. A decision made on which works need a professional provenance researcher.

                ## Notes
                A search of a stolen art register is a basic step, not a clearance. Serious gaps need a professional researcher and, if a claim is possible, the family lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every significant work has a recorded stolen art register search, and works needing a professional researcher are listed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read one museum's published provenance research guidelines"
                - "List the works bought from sources with little paperwork"
                - "Search each significant work on a stolen art register"
                - "Shortlist works for a professional provenance researcher"
            - name: Insurance, market and probate valuations compared
              description: |-
                ## Purpose
                One painting can carry three very different numbers: a replacement value for insurance, a fair market value for tax or probate, and an auction estimate. Families that confuse them overpay premiums or file the wrong figure, so understanding which valuation serves which purpose matters before commissioning any.

                ## Milestones
                1. The purpose of each valuation type written in plain language.
                2. Existing valuations on file labelled by type, date and appraiser.
                3. The qualifications to look for in an appraiser noted.
                4. A plan agreed for which valuation each future need requires.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every valuation on file is labelled by type, date and appraiser, and a written note explains which type each future need requires."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather every valuation the family holds"
                - "Label each one as insurance, market, probate or estimate"
                - "Ask the appraiser which type each upcoming need requires"
                - "Write a one-page note on valuation types for the family"
            - name: How auctions, galleries and private sales work
              description: |-
                ## Purpose
                Buyer's premiums, seller's commissions, guarantees, reserves and consignment terms decide how much of a hammer price the family keeps or pays. Learning how the primary and secondary markets work makes every later decision to buy or sell clearer and harder to exploit.

                ## Milestones
                1. The roles of artist, primary gallery, dealer, auction house and private adviser understood.
                2. Buyer's premium, seller's commission, reserve and guarantee explained in a family note.
                3. One recent auction followed from catalogue to published results.
                4. Questions to ask any dealer or auction specialist listed.

                ## Notes
                This is about how the market works, not what to buy. Prices are never a forecast of future value.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A family note explains the main sale channels and their fees, and one auction has been followed through to its results."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the conditions of sale of one major auction house"
                - "Follow one sale from catalogue to published results"
                - "Write a one-page note on fees and terms"
                - "List questions to ask a dealer before any purchase"
            - name: Safe handling and packing basics
              description: |-
                ## Purpose
                Most damage happens in the few minutes a work is moved: a frame knocked on a door, a canvas pressed by a thumb, a bronze lifted by its patina. A family member or office employee who knows the basics can supervise movers and stop a careless lift before it happens.

                ## Milestones
                1. Basic rules learnt: gloves or clean hands by material, two people for large works, clear route first.
                2. One handling session attended with a conservator or fine art shipper.
                3. The family's rules for when to call professional art handlers written down.
                4. A small kit of padding, gloves and corner protectors kept at the main residence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one family or office member has attended a handling session, and written rules say when professional handlers are required."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a fine art shipper whether they run handling sessions"
                - "Attend the session with whoever usually supervises moves"
                - "Write the rule for when professional handlers must be called"
                - "Assemble a basic handling kit at the main residence"
            - name: Copyright and image rights in owned works
              description: |-
                ## Purpose
                Owning a painting does not mean owning the right to reproduce it, and families are often surprised when a book, a website or a holiday card needs the artist's or estate's permission. Knowing where copyright sits, and where artist resale royalties apply, avoids awkward letters from an artist's estate.

                ## Milestones
                1. Works still in copyright identified, with the artist or estate contact noted.
                2. The family's own photographs separated from licensed reproduction images.
                3. A rule agreed for asking permission before publishing images.
                4. Artist resale royalty rules noted for any jurisdiction where the family sells.

                ## Notes
                Copyright terms vary by country. Confirm anything that matters with an intellectual property lawyer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list marks which works are in copyright with rights holder contacts, and a written rule governs publishing images."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark works by living artists or recently deceased artists"
                - "Find the rights contact for each artist or estate"
                - "Write the rule for using collection images in public"
                - "Note where artist resale royalties may apply to a future sale"
            - name: Authenticity records and artist catalogues
              description: |-
                ## Purpose
                Gaps in the paperwork, such as a work missing from the artist's catalogue raisonné or an artist foundation that has stopped issuing opinions, can sharply limit what a work is worth and who will buy it. Recording each significant work's catalogue reference, certificates and expert opinions now saves a crisis at the moment of sale.

                ## Milestones
                1. Each significant work checked for a catalogue raisonné entry and reference number.
                2. Certificates, letters of opinion and authentication records filed by object number.
                3. Works with no catalogue entry or a contested status listed.
                4. Artists with catalogues in preparation noted, with a decision on submitting works.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every significant work has a recorded catalogue raisonné status and filed authentication papers, with uncatalogued works listed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the artists whose works have a catalogue raisonné"
                - "Record the catalogue number for each matching work"
                - "File certificates and expert letters by object number"
                - "Ask which artists have a catalogue in preparation"
            - name: Fine art policy wording check with the broker
              description: |-
                ## Purpose
                Two fine art policies with the same premium can differ sharply on transit, works at a framer's, mechanical breakage, flood, earthquake, hurricane deductibles and how a loss in value after restoration is paid. Going through the wording with a specialist broker shows the gaps before a claim does.

                ## Milestones
                1. The current policy wording and schedule read in full.
                2. Questions listed on transit, works away from home, natural catastrophe and depreciation after damage.
                3. Answers recorded from the specialist broker in writing.
                4. A decision made to keep, amend or remarket the policy.

                ## Notes
                The wider family insurance programme sits in its own area. This project covers only the collection's policy terms.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of policy questions has the broker's answers attached, and a decision to keep, amend or remarket is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the broker for the full policy wording, not only the summary"
                - "List questions on transit, works away and storm deductibles"
                - "Meet the broker to go through each question"
                - "Record the decision to keep, amend or remarket the policy"
            - name: Choosing a fine art storage facility
              description: |-
                ## Purpose
                Ordinary self storage has none of the climate control, security, insurance acceptance or trained handlers that works of art need. Comparing two or three specialist stores on the same criteria, and visiting them, means the family chooses on facts rather than a brochure.

                ## Milestones
                1. Criteria written: climate control, fire and flood protection, security, access, insurance acceptance and cost.
                2. Two or three specialist stores visited and scored.
                3. The insurer's view of the preferred store obtained in writing.
                4. A contract signed and the storage terms filed.

                ## Notes
                Start from the **Vendor** template. Ask where the building sits relative to flood zones and how the store handles a hurricane or power cut.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist store is chosen from a scored comparison of at least two, approved by the insurer, with a signed contract on file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the criteria for a fine art store"
                - "Book visits to two or three specialist stores"
                - "Send the preferred store's details to the insurer"
                - "Sign the contract and file the storage terms"
            - name: Display room lighting, glazing and hanging upgrade
              description: |-
                ## Purpose
                Old picture lights cook canvases, unfiltered windows fade paper and frames hung on a single nail fall in the first knock. A room-by-room upgrade, with UV filtering, suitable lighting, security fixings and the right glazing, is often the single best protection for works in daily view.

                ## Milestones
                1. Each display room assessed for light, glazing, hanging and security fixings.
                2. Upgrades ranked by risk and cost with the conservator's advice.
                3. The highest-risk rooms upgraded by a contractor who works with collections.
                4. Before and after notes filed with the room records.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every display room has a written assessment, and the highest-risk rooms have upgraded lighting, filtering or fixings with notes filed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Walk each display room noting light, glass and fixings"
                - "Ask the conservator to rank the risks"
                - "Get quotes from a contractor experienced with collections"
                - "Complete upgrades in the two highest-risk rooms"
            - name: Deciding whether to sell a work
              description: |-
                ## Purpose
                Families sell for good reasons, such as tastes changing, liquidity needs, a work that no heir wants or one that costs more to keep than it gives. Running a sale decision through the collection policy, with valuation, tax and family views gathered first, avoids a hasty sale that someone later regrets.

                ## Milestones
                1. The reason for selling written down and checked against the collection policy.
                2. A current market valuation and the work's provenance file reviewed.
                3. Tax and legal questions answered by the family's advisers.
                4. Each adult family member with an interest consulted and the decision recorded.

                ## Notes
                Sale proceeds and their tax treatment are matters for the family's tax adviser. This project prepares the decision; it does not judge the timing of the market.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written sale decision cites the collection policy, a current valuation, adviser input and family consultation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write why this work might be sold"
                - "Ask an appraiser for a current market view"
                - "Send the tax and legal questions to the family's advisers"
                - "Record the decision and who was consulted"
            - name: Auction versus private sale for a chosen work
              description: |-
                ## Purpose
                Once the family has decided to sell, the channel matters: a public auction gives price transparency and exposure, a private sale gives discretion and control over the buyer. Comparing written proposals from two auction houses and one private dealer on the same terms makes the trade-off visible.

                ## Milestones
                1. Proposals requested from two auction houses and one dealer.
                2. Estimates, fees, guarantees, marketing and timing compared on one page.
                3. Privacy and buyer approval needs weighed by the family.
                4. A consignment or sale agreement reviewed by the family lawyer and signed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of at least three proposals exists, and the chosen agreement was reviewed by the family lawyer before signing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send the work's photos and provenance to two auction houses"
                - "Ask one private dealer for a written proposal"
                - "Compare estimates, fees and terms on one page"
                - "Send the chosen agreement to the family lawyer before signing"
            - name: Consolidating works spread across several homes
              description: |-
                ## Purpose
                A collection divided between a city flat, a country house and an island villa means three sets of conditions, three insurance locations and works hung where nobody sees them most of the year. Deciding what lives where, based on climate, security and how often each home is used, can cut risk and cost at once.

                ## Milestones
                1. Each home rated for climate, security and months of family use.
                2. Works at risk in their current home identified.
                3. A target location agreed for each significant work.
                4. Moves scheduled through professional art shippers and logged.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every significant work has an agreed target home based on a written rating of each property, with moves scheduled."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rate each home for climate, security and use"
                - "List works at risk where they hang now"
                - "Agree a target home for each significant work"
                - "Book art shippers for the agreed moves"
            - name: Hurricane season preparation for the collection
              description: |-
                ## Purpose
                Homes in the Caribbean and other storm regions face wind, flying glass, roof leaks and long power cuts every season. A written collection storm plan, agreed with the house manager before the season starts, decides which works come down, where they go and who acts if the family is away.

                ## Milestones
                1. A priority list of works to protect or move first.
                2. A safe interior room or off-site store identified for each home.
                3. Staff briefed on who moves what, with packing materials on site.
                4. The insurer's storm conditions and deductibles noted on the plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each storm season, each exposed home has a written collection storm plan, briefed staff and packing materials in place."
                cadence: cyclic
              tasks:
                - "List the works to protect first in each exposed home"
                - "Choose a safe interior room or store for each home"
                - "Brief the house manager and staff on the storm plan @recurring(yearly)"
                - "Stock packing materials and plastic sheeting before the season"
            - name: Collection emergency plan and salvage priorities
              description: |-
                ## Purpose
                Fire, a burst pipe or an earthquake gives minutes, not hours, and the people present are usually staff, not family. An emergency plan with a ranked salvage list, floor plans and a conservator on call means the right works are saved and wet or smoke-damaged pieces are handled correctly afterwards.

                ## Milestones
                1. A ranked salvage list with photographs and locations for each home.
                2. Floor plans marked and shared with staff and, where appropriate, the fire service.
                3. An emergency kit stocked and a conservator's emergency number on the plan.
                4. Risks for each home recorded with owners and controls.

                ## Notes
                Start from the **Risk register** template. People come first in every emergency; the salvage list applies only once everyone is safe.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each home has a ranked salvage list, marked floor plans, a stocked kit and a conservator's emergency contact, with risks recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Rank the top ten works to save in each home"
                - "Mark their locations on a floor plan for staff"
                - "Agree an emergency call-out arrangement with a conservator"
                - "Check the emergency kit and update the salvage list @recurring(yearly)"
            - name: Lending a work to a museum exhibition
              description: |-
                ## Purpose
                Museum loan requests are both a compliment and a risk: the work travels, hangs for months and returns changed or not at all if the paperwork is weak. Working through the loan agreement, insurance, condition reporting, courier and credit line in order protects the work and the family's privacy.

                ## Milestones
                1. The borrower's facility report reviewed and the loan agreed in principle.
                2. A loan agreement covering insurance, transport, display, credit line and photography signed.
                3. Condition reports completed at departure and on return.
                4. The work's exhibition and publication added to its provenance file.

                ## Notes
                Ask how the credit line will read. Many families choose a private collection credit to keep their name out of the catalogue.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed loan agreement, departure and return condition reports and an updated provenance file exist for the loan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the museum for its facility report and draft loan agreement"
                - "Check the insurance terms with the broker"
                - "Agree the credit line wording with the family"
                - "Book a conservator for the departure condition report"
            - name: Moving works between homes or countries
              description: |-
                ## Purpose
                Shipping art across borders brings crating, climate-controlled transport, customs entries, temporary import rules and sometimes permits for materials such as ivory, tortoiseshell or rare woods. Planning the move with a fine art shipper and a customs broker, months ahead, keeps works out of a warehouse at the border.

                ## Milestones
                1. A move list with dimensions, values and materials for every work.
                2. Quotes from two fine art shippers compared, including crating and couriers.
                3. Customs, export licences and any endangered species permits confirmed with the broker.
                4. Condition reports and photographs taken at packing and unpacking.

                ## Notes
                Materials such as ivory, coral and some woods can need permits under endangered species rules. Check before the move, not at the border.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every moved work arrives with permits and customs papers on file and condition reports at both ends."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write the move list with sizes, values and materials"
                - "Ask two fine art shippers for quotes and timelines"
                - "Ask a customs broker which permits each work needs"
                - "Book condition reports at packing and at arrival"
            - name: Commissioning a work from a living artist
              description: |-
                ## Purpose
                Commissions, whether a portrait, a garden sculpture or a work for a new home, are exciting and easy to get wrong without a written brief. Agreeing scope, fee stages, timing, approval points and who owns the copyright protects the relationship with the artist as well as the money.

                ## Milestones
                1. A brief written with size, site, budget and any constraints.
                2. A commission agreement signed covering fee stages, timing, approvals and rights.
                3. Stage approvals recorded as the work develops.
                4. The finished work taken through the intake routine.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed commission agreement and recorded stage approvals exist, and the finished work has a completed intake record."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the brief for the site and budget"
                - "Meet the artist or their gallery to discuss the brief"
                - "Ask the family lawyer to review the commission agreement"
                - "Record each stage approval with photographs"
            - name: Preparing to bid at an auction
              description: |-
                ## Purpose
                Auction rooms reward preparation and punish impulse: a condition report requested late, a buyer's premium forgotten or an export restriction found after the hammer. Preparing a bid with a written ceiling, inspection and checks makes an auction purchase as disciplined as a private one.

                ## Milestones
                1. The lot's condition report, provenance and catalogue entry reviewed.
                2. The work viewed in person or by a trusted adviser.
                3. A ceiling price set including buyer's premium, taxes and shipping.
                4. Registration and bidding method confirmed with the auction house.

                ## Notes
                Write the ceiling down before the sale and give it to whoever bids. The ceiling is the family's own decision; no one should predict a work's future value.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written ceiling price including all fees, a reviewed condition report and confirmed registration exist before the sale."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the auction house for the lot's condition report"
                - "Arrange a viewing in person or by an adviser"
                - "Write the ceiling price including premium and shipping"
                - "Register to bid and confirm the bidding method"
            - name: Downsizing a collection in retirement
              description: |-
                ## Purpose
                Moving to a smaller home or a single residence in retirement forces choices about works that will no longer fit. Planning which works stay, which go to children now, which are sold and which are stored, before the move date, avoids decisions made in a rush with movers waiting.

                ## Milestones
                1. The new home's wall space and conditions measured.
                2. Works sorted into keep, give to family, sell, donate and store.
                3. Children or heirs consulted on works offered to them.
                4. Each decision carried through and recorded in the database.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every work has a recorded keep, give, sell, donate or store decision before the move date, with heirs consulted."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure the wall space and rooms in the new home"
                - "Sort the inventory into keep, give, sell, donate and store"
                - "Invite children to say which works they would like"
                - "Book shippers and storage for the agreed moves"
            - name: Heirs' wishes and a collection letter of wishes
              description: |-
                ## Purpose
                Children often care about the painting from the hall they grew up with more than the most valuable work, and unspoken assumptions turn into disputes after a death. Asking each heir what they love, and writing the collector's own wishes in a letter for the lawyer and executors, gives the estate plan something real to work with.

                ## Milestones
                1. Each adult child or heir asked privately which works matter to them.
                2. Overlaps and conflicts noted for the collector to consider.
                3. A letter of wishes for the collection drafted by the collector.
                4. The letter given to the family lawyer to align with the will and any trusts.

                ## Notes
                A letter of wishes usually guides executors and trustees but may not bind them. The family lawyer decides how it fits the will.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every adult heir has been asked about the works they value, and a letter of wishes has been passed to the family lawyer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each adult child which three works matter most to them"
                - "Note where wishes overlap"
                - "Draft the collector's letter of wishes for the collection"
                - "Send the letter to the family lawyer"
            - name: Living with art when the children are small
              description: |-
                ## Purpose
                Toddlers, ball games and birthday parties are the most ordinary threat to works hung at child height. A few household rules, a rehang of the most vulnerable pieces and an early habit of looking at the works together keeps both the children and the collection safe, and raises children who care about it.

                ## Milestones
                1. Works within reach of children identified in each room.
                2. Vulnerable works moved higher or swapped for sturdier pieces.
                3. Simple house rules agreed with nannies and staff.
                4. A regular family moment of looking at and talking about one work.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Vulnerable works in children's reach have been moved, and house rules are shared with every carer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the house at a child's eye level"
                - "Rehang or swap the most vulnerable works"
                - "Write three house rules for nannies and staff"
                - "Pick one work to talk about with the children this week"
            - name: Collection estate inventory after a death
              description: |-
                ## Purpose
                When the collector dies, executors need a date-of-death inventory, probate valuations and a clear picture of what belongs to the estate rather than a trust or a spouse. A family that has kept good records can deliver this in weeks; one that has not may take a year and face disputes.

                ## Milestones
                1. The inventory checked against the ownership map at the date of death.
                2. A qualified appraiser engaged for probate valuations.
                3. Works held by others, such as loans or consignments, confirmed.
                4. The estate inventory pack delivered to the executors and lawyer.

                ## Notes
                Executors and the estate lawyer lead this. Nothing should be moved, given away or sold until they agree.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The executors receive a dated estate inventory with probate valuations and confirmed locations for every work."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the executors what they need and by when"
                - "Check the inventory against the ownership map"
                - "Engage an appraiser for probate valuations"
                - "Confirm every work on loan or consignment"
            - name: Lifetime gifts of works to children
              description: |-
                ## Purpose
                Giving a work to a child during life can be a joy for both, but it needs a written deed of gift, a valuation, and advice on tax in every country involved. Without them, the gift may not be recognised, may be taxed unexpectedly or may be challenged by other heirs later.

                ## Milestones
                1. The works and recipients chosen and checked against the collection policy.
                2. Tax and legal advice obtained in each relevant country.
                3. A deed of gift signed and a valuation filed for each work.
                4. The database, insurance schedule and ownership map updated.

                ## Notes
                Some countries tax gifts or treat a giver who keeps enjoying a work as never having given it. Ask the tax adviser before handing anything over.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each gifted work has a signed deed of gift, a filed valuation, adviser sign-off and updated ownership and insurance records."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the works the collector wants to give and to whom"
                - "Send the plan to the tax adviser in each relevant country"
                - "Ask the family lawyer to prepare deeds of gift"
                - "Update the ownership map and insurance schedule after each gift"
            - name: Family catalogue of the collection
              description: |-
                ## Purpose
                Printed or digital catalogues, with good photographs, short essays and the story of how each work came into the family, turn a list of objects into something the next generation reads. Done privately, one also becomes a strong record for insurers, scholars and heirs.

                ## Milestones
                1. Scope agreed: which works, who writes and print or digital.
                2. Photographs commissioned for works without reproduction quality images.
                3. Entries written and checked against the provenance files.
                4. The catalogue produced and copies given to each branch.

                ## Notes
                Clear image rights for works still in copyright before printing. Keep the catalogue private if security or privacy matters.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A finished family catalogue covering the agreed works exists, with entries checked against provenance files and copies distributed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree which works the catalogue will include"
                - "Commission photographs for works without good images"
                - "Ask the agent to draft entries from the provenance files for review"
                - "Send the proofs to the family for corrections"
            - name: Donating a work or collection to a museum
              description: |-
                ## Purpose
                Museums decline far more offers than they accept, and a gift with weak provenance, heavy conditions or no fit with the museum's collection will be turned down. Approaching the right institution with a well documented offer, flexible terms and tax advice in hand makes a donation more likely to be welcomed and remembered.

                ## Milestones
                1. Two or three museums identified whose collections the work fits.
                2. A documented offer prepared with images, provenance and condition.
                3. Terms agreed: display expectations, credit, restrictions and any promised gift timing.
                4. Tax treatment and a qualified appraisal arranged with the family's advisers.

                ## Notes
                Grant-making strategy and foundations have their own areas. This project covers only the gift of works themselves.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed deed of gift with a museum exists, with agreed terms, an appraisal and the tax adviser's sign-off on file."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List museums whose collections fit the work"
                - "Prepare an offer pack with images, provenance and condition"
                - "Ask a curator for an informal conversation"
                - "Send the proposed terms to the tax adviser and lawyer"
            - name: Questions before borrowing against the collection
              description: |-
                ## Purpose
                Some private banks and specialist lenders offer loans secured on art, which can raise cash without selling but may require works to move to a lender's store, revaluations and covenants on insurance and location. Gathering the questions and terms before any conversation lets the family and its advisers judge an offer clearly.

                ## Milestones
                1. The family's reason for considering a loan written down.
                2. Lender requirements listed: valuation, title checks, storage, insurance and default terms.
                3. Effects on display, family use and estate plans noted.
                4. The family's advisers asked to review any term sheet before it is signed.

                ## Notes
                This is a borrowing decision for the family and its advisers. The project gathers questions; it does not recommend borrowing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of lender requirements and family consequences exists, and any term sheet has been reviewed by the family's advisers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write why the family is considering a loan against art"
                - "List what lenders usually require on title and storage"
                - "Note how a loan would affect display and estate plans"
                - "Send any term sheet to the family's advisers before replying"
            - name: Cultural property and export rules check
              description: |-
                ## Purpose
                Antiquities, works of national importance and objects made from protected species can be blocked from export, seized on import or impossible to sell. Checking which works fall under cultural property or endangered species rules, before any sale, loan or move abroad, keeps the family on the right side of the law.

                ## Milestones
                1. Works in sensitive categories listed: antiquities, ethnographic objects, older works of national importance and protected materials.
                2. Export and import papers for each sensitive work located or found missing.
                3. Questions for a specialist art lawyer listed for works with missing papers.
                4. A note added to each sensitive work's record stating any restriction.

                ## Notes
                Rules differ by country and change. The specialist art lawyer gives the answer; this project gathers the facts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every work in a sensitive category is flagged in the database with its papers or a recorded question for the art lawyer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Flag antiquities, ethnographic objects and protected materials in the database"
                - "Match export and import papers to each flagged work"
                - "List missing papers as questions for an art lawyer"
                - "Add any known restriction to each flagged work's record"
            - name: Scholarly cataloguing of a focused collection
              description: |-
                ## Purpose
                A collection with a clear theme, such as one artist, one region's painters or Caribbean modernism, can become a reference for scholars when it is catalogued to museum standards. Working with an independent curator or academic to research and publish entries adds to knowledge of the artists and to the collection's standing.

                ## Milestones
                1. The collection's focus and the works in scope agreed.
                2. An independent curator or scholar engaged with a written scope and fee.
                3. Entries researched to a museum cataloguing standard, including bibliography and exhibition history.
                4. A decision made on publishing, sharing with a museum or keeping the research private.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Researched catalogue entries to a museum standard exist for every work in scope, with a recorded decision on publication."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a paragraph defining the collection's focus"
                - "Ask a university art department or museum for curator suggestions"
                - "Agree the scope, fee and timetable in writing"
                - "Decide how and whether the research will be shared"
---

# Art and Collection Management

This area is for the family that owns paintings, works on paper, sculpture, furniture, silver, books, wine or any collection valuable enough that losing track of one piece would hurt, and for the parent or retiree who has quietly been its only registrar. It starts with foundations (ownership, a first inventory, numbering, photography, provenance and title files, a database, a condition baseline, a collection policy and clear roles), then the routines that keep works safe and records right, the knowledge needed to read condition reports, provenance and valuations, decisions about storage, display, insurance wording and selling, dated events such as a museum loan or an international move, situations for parents, retirees and heirs, and finally specialist work on donations, art-secured lending, cultural property rules and a scholarly catalogue.

What repeats is a monthly location update, environment readings and housekeeping walk, a monthly cost log, quarterly pest checks, display rotation, storage statements and family reviews, and a yearly insurance schedule refresh, inventory audit and hurricane season preparation. The Purchase decision, Vendor, Meeting notes and Risk register templates pair with the database choice, the storage facility, the quarterly review and the emergency plan. Nothing here is valuation, tax or legal advice: the projects gather and organise the facts so the family's appraiser, conservator, broker and lawyers can do their work. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
