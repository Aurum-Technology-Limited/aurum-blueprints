---
id: practice-ownership.practice-equipment-finance
name: Practice Equipment Finance
description: "An equipment register and capital plan, specifications and quotes compared on whole-life cost, lease and loan terms you understand, maintenance contracts that are watched, and replacement decisions made before a breakdown makes them."
category: business
version: 1.0.0
tags: [practice-ownership, practice-equipment-finance, small-business, equipment-leasing, asset-finance, maintenance-contracts, medical-devices, capital-planning]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - compliance-control
    - risk-register
    - metrics-log
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice Equipment Finance
          description: "Buying or leasing clinical and professional equipment: specification, quotes, lease terms, maintenance contracts and replacement cycles."
          projects:
            - name: Practice equipment asset register
              description: |-
                ## Purpose
                Few practices can say, without a search through invoices, what equipment they own, what is leased, who services it and when it was bought. A single register with make, model, serial number, location, purchase date, cost, finance status and service provider is the base every later decision in this area reads from, and it is what an insurer, lender or buyer asks for first.

                ## Milestones
                1. Every item worth more than an agreed threshold listed with make, model, serial number and room.
                2. Each item marked as owned outright, on loan, on finance lease, on operating lease or rented.
                3. Purchase date, original cost and service provider recorded against each line.
                4. Asset tags or labels fixed to items so the register and the room match.

                ## Notes
                Set the threshold low enough to catch anything that would stop a session if it failed, even if it is cheap. A curing light or a label printer can halt a clinic as surely as a chair.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every item above the threshold with serial number, location, ownership status, cost and service provider exists and matches a room-by-room walk."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the value threshold above which equipment goes on the register"
                - "Walk each room and note make, model and serial number of every item"
                - "Match each item to its invoice or finance agreement in the files"
                - "Fix an asset tag to every registered item"
                - "Reconcile the register against a room walk and the fixed asset ledger @recurring(yearly)"
            - name: Condition and age audit of current equipment
              description: |-
                ## Purpose
                Equipment rarely fails without warning: repair bills climb, parts become hard to find and the manufacturer announces an end-of-support date. Grading every registered item for age, condition, repair history and support status shows which purchases are coming in the next three years, so they can be planned rather than forced by a breakdown in a full week.

                ## Milestones
                1. Each register line given a condition grade from one to four with a one-line reason.
                2. Repair costs over the last two years totalled per item from invoices.
                3. Manufacturer end-of-support or end-of-parts dates found for the older items.
                4. A list of items likely to need replacing within 36 months, ranked by risk to the practice.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every register item carries a condition grade, two-year repair cost and support status, and a ranked 36-month replacement list exists."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each clinician or team lead which items they distrust and why"
                - "Total two years of repair invoices for each registered item"
                - "Check manufacturer websites or ask suppliers for end-of-support dates"
                - "Grade each item and rank the ones due within 36 months"
            - name: Equipment spending approval rules among partners
              description: |-
                ## Purpose
                Disputes between partners often start with one person signing a seven-year lease for a device the others thought was a maybe. Written thresholds for who can commit the practice to what, and what evidence a proposal needs, prevent that and make the partnership or shareholder agreement's general wording usable day to day.

                ## Milestones
                1. Spending bands agreed, for example under one amount any partner, mid band two partners, above it all partners.
                2. Commitments over a set term or with a personal guarantee needing all-partner approval regardless of value.
                3. A one-page proposal format agreed for any item above the lowest band.
                4. The rules minuted and checked against the partnership or shareholder agreement by your lawyer if they conflict.

                ## Notes
                Count the total of all payments over the term, not the monthly figure, when deciding which band a lease falls into.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Minuted spending bands, a term and guarantee rule and a one-page proposal format are agreed by all partners and filed with the partnership papers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read what the partnership or shareholder agreement says about capital spending"
                - "Draft three spending bands with the approval each one needs"
                - "Write a one-page equipment proposal format with cost, term and payback lines"
                - "Put the rules to a partners' meeting and minute the decision"
            - name: Equipment finance affordability limit
              description: |-
                ## Purpose
                Each lease looks affordable on its own, but five of them signed over three years can quietly take more cash each month than the practice clears. Setting a ceiling for total equipment repayments as a share of revenue, agreed with your accountant, gives every new proposal a yes or no test before anyone falls for a demonstration.

                ## Milestones
                1. Current monthly equipment repayments totalled across all loans, leases and rentals.
                2. That total set against average monthly revenue and operating cash flow.
                3. A ceiling for total equipment repayments agreed with your accountant.
                4. Headroom under the ceiling shown in figures for the next twelve months.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ceiling for total monthly equipment repayments, agreed with the accountant, sits beside current commitments and twelve-month headroom."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every equipment repayment leaving the bank account each month"
                - "Pull twelve months of revenue and operating cash flow from the accounts"
                - "Ask your accountant what repayment ceiling suits the practice's margins"
                - "Write the ceiling and current headroom at the top of the capital plan"
            - name: Five-year equipment capital plan
              description: |-
                ## Purpose
                Replacing a panoramic X-ray, an autoclave and the server in the same year is survivable if it was seen coming and painful if it was not. A five-year plan that places every expected purchase in a year, with an estimated cost and a preferred funding route, turns equipment from a series of emergencies into a schedule the partners and the bank can see.

                ## Milestones
                1. Every item on the 36-month replacement list placed in a planned year.
                2. New equipment for planned services added with its target year.
                3. An estimated cost and preferred funding route, cash, loan or lease, against each line.
                4. Yearly totals checked against the affordability limit and smoothed where years bunch up.

                ## Notes
                Build in one unplanned failure a year. Something always breaks that the plan did not expect.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-year plan with every expected purchase dated, costed and given a funding route, within the affordability limit, is approved by the partners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy the ranked replacement list into a five-year grid by year"
                - "Add new equipment the practice plans for new services"
                - "Estimate a cost and funding route for each line"
                - "Move items between years until no year breaks the affordability limit"
                - "Roll the plan forward one year and re-cost the next two @recurring(yearly)"
            - name: Buy, lease or rent decision for practice equipment
              description: |-
                ## Purpose
                Paying cash keeps the cost lowest but drains the reserve, a loan or hire purchase builds ownership, a finance lease spreads the cost, and an operating lease or rental hands back the risk of obsolescence. Agreeing which route the practice prefers for each kind of equipment, rather than choosing whatever the salesperson offers, makes every later quote quicker to judge.

                ## Milestones
                1. Equipment grouped into types, such as long-life mechanical, fast-ageing digital and short-life consumable-linked.
                2. A preferred route recorded for each type with the reason in one sentence.
                3. The cash reserve the practice will not dip below for equipment agreed.
                4. The policy checked with your accountant for tax and accounting effects.

                ## Notes
                Fast-moving digital kit such as intraoral scanners or sensors often suits a shorter lease; a dental chair or a steriliser that lasts twelve years rarely does.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written policy naming the preferred finance route for each equipment type, with a minimum cash reserve, is reviewed by the accountant and agreed by partners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group the register into three or four equipment types by useful life"
                - "Write the case for cash, loan, lease and rental for each type"
                - "Agree a minimum cash reserve the practice keeps untouched"
                - "Send the draft policy to your accountant for comment"
            - name: Equipment finance terms and products explained
              description: |-
                ## Purpose
                Hire purchase, finance lease, operating lease, contract hire, rental and a term loan are sold as interchangeable, but they differ on who owns the item, who carries the residual value, what happens at the end and how they show in the accounts. An hour or two learning the vocabulary lets you read a quote as the lender meant it, not as the brochure presents it.

                ## Milestones
                1. A one-page glossary covering hire purchase, finance lease, operating lease, rental, term loan and vendor finance.
                2. Residual value, balloon payment, primary and secondary period and peppercorn rent each explained in a sentence.
                3. Ownership and end-of-term outcome noted for each product.
                4. Three questions written that you will ask of any new finance quote.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of six finance products and their end-of-term outcomes, plus three standard questions for quotes, is saved with the capital plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a plain-language glossary of equipment finance products"
                - "Check the glossary against an existing agreement in your files"
                - "Note who owns the item at the end of each product's term"
                - "Write three questions to ask before accepting any finance quote"
            - name: Tax and accounting treatment of equipment with the accountant
              description: |-
                ## Purpose
                Whether an item is bought, financed or leased changes what can be claimed against tax, when, and whether the asset and the debt sit on the balance sheet under the lease accounting standard your accounts follow. Agreeing the treatment with your accountant before signing avoids the surprise of a lease that does not reduce tax the way the supplier implied.

                ## Milestones
                1. The accountant's explanation of capital allowance or depreciation rules for purchased equipment recorded.
                2. How finance leases and operating leases appear in the practice accounts noted.
                3. Sales tax or VAT recovery on purchases and lease payments clarified for the practice's status.
                4. A short note on timing purchases around the year end, filed with the capital plan.

                ## Notes
                Many healthcare services are exempt from sales tax or VAT, which can mean the tax on equipment is not recoverable. Check how this applies to your practice before comparing gross and net quotes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note from or agreed with the accountant covers allowances, lease accounting, tax recovery and year-end timing for practice equipment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book thirty minutes with your accountant about equipment tax treatment"
                - "Ask how a purchase, a finance lease and an operating lease each show in the accounts"
                - "Ask whether tax on equipment and lease payments is recoverable for the practice"
                - "Write up the answers in a one-page note"
            - name: Equipment suppliers and finance contacts list
              description: |-
                ## Purpose
                When a steriliser fails on a Monday morning, the time lost looking for the engineer's number or the lessor's account reference is time patients wait. A single contact list of manufacturers, dealers, service engineers, finance companies, the bank's asset finance team and an independent biomedical or IT engineer saves those minutes and gives you alternatives when a supplier lets you down.

                ## Milestones
                1. Each registered item linked to its supplier, service provider and finance company.
                2. Emergency and account numbers recorded for every service provider.
                3. At least one independent engineer identified for major equipment types.
                4. Two or three asset finance providers, including the practice's bank, listed with a named contact.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact list naming supplier, service engineer and finance provider for every registered item, plus independent alternatives, is shared with the practice manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull supplier and engineer details from invoices and service reports"
                - "Add finance company account numbers from each agreement"
                - "Ask colleagues in other practices for an independent engineer they trust"
                - "Share the list with the practice manager and front desk"
            - name: User requirement specification for a major item
              description: |-
                ## Purpose
                Buying from a brochure leads to paying for features nobody uses and missing the one the clinician needed. A written specification of what the item must do, how often, in which room, with what software and with what service response, written before any supplier visits, gives every quote the same target and keeps the decision on the practice's terms.

                ## Milestones
                1. Must-have and nice-to-have functions listed by the people who will use the item.
                2. Expected volume of use per week and the room it will sit in recorded.
                3. Power, water, drainage, network and weight requirements checked against the room.
                4. Software compatibility with the practice systems and required service response time written down.

                ## Notes
                Ask the supplier for the installation requirements sheet early. A heavy unit or a dedicated circuit can add cost that the quote leaves out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off specification lists functions, volume, room services, software links and service response before any quote is requested."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the users of the item to list what it must do and what would be nice"
                - "Estimate weekly volume of use from the diary or job records"
                - "Check room power, water, network and floor loading against the likely models"
                - "Write the specification on one page and have the lead user sign it off"
            - name: Supplier demonstrations and hands-on trials
              description: |-
                ## Purpose
                Demonstrations run by a sales specialist in a showroom show the machine at its best; a week in your own room with your own staff shows it as it will be. Arranging trials of the two strongest candidates, scored against the specification by the people who will use them, catches the awkward workflow or slow software before it is locked in for seven years.

                ## Milestones
                1. Two shortlisted models demonstrated against the written specification.
                2. A loan or in-practice trial arranged for at least the front-runner.
                3. Each user's scores and comments collected on the same scoring sheet.
                4. References taken from two practices already using each model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two candidate models have been demonstrated, at least one trialled in the practice, and user scores and two references per model are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each supplier for a demonstration using your specification as the agenda"
                - "Request an in-practice loan or trial of the front-runner"
                - "Give every user the same scoring sheet during the trial"
                - "Call two existing users of each model and ask about breakdowns and service"
            - name: Medical device approval and electrical safety check
              description: |-
                ## Purpose
                Clinical equipment sold online or through grey importers sometimes lacks the approval your regulator requires, and an insurer can refuse a claim involving an unapproved device. Confirming that each candidate carries the registration or conformity marking your country recognises, and meets the IEC 60601 family for medical electrical equipment where relevant, protects patients and the practice's licence.

                ## Milestones
                1. The device approval or registration your regulator recognises identified, such as CE or UKCA marking or FDA clearance as examples.
                2. Each candidate's approval documents and declaration of conformity obtained from the supplier.
                3. Electrical safety standard compliance confirmed for medical electrical equipment.
                4. Any import or local registration step for the device noted with who is responsible.

                ## Notes
                For non-clinical professional equipment the same check applies more lightly: electrical safety certification and a supplier who will honour the warranty locally.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Approval documents and electrical safety evidence for every shortlisted clinical device are filed, with any local registration step assigned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your regulator's guidance on which device approvals it recognises"
                - "Ask each supplier for the declaration of conformity and approval certificate"
                - "Confirm the device meets the medical electrical safety standard"
                - "File the documents against the item in the asset register"
            - name: Request for quotation pack to three suppliers
              description: |-
                ## Purpose
                Quotes built on each supplier's own assumptions cannot be compared: one includes installation and training, another leaves out the software licence, a third quotes a shorter warranty. Sending the same pack, with the specification, the delivery window, the service response required and a fixed price breakdown, to three suppliers makes the answers line up.

                ## Milestones
                1. A quotation pack holding the specification, site details and required delivery window.
                2. A price breakdown template covering equipment, installation, training, software, warranty and first-year service.
                3. Packs sent to three suppliers with the same return date.
                4. Three complete quotes received or a reason recorded for any gap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three suppliers have returned quotes on the same breakdown template by the same date, or each missing quote has a recorded reason."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a price breakdown template with a line for every cost element"
                - "Attach the specification and site requirements to the pack"
                - "Send the pack to three suppliers with one return date"
                - "Chase any supplier who has not replied two days before the date"
            - name: Total cost of ownership comparison across quotes
              description: |-
                ## Purpose
                The cheapest purchase price often hides the dearest consumables, the most expensive service contract or a software subscription that rises every year. Adding up every cost over the expected life of each option, from installation and training to service, parts, licences and disposal, shows which choice is cheaper over seven years rather than on delivery day.

                ## Milestones
                1. Each quote's purchase price, installation and training entered in one comparison sheet.
                2. Service contract, consumables, software licences and expected parts costs projected over the useful life.
                3. Finance costs added for the route each option would use.
                4. A ranked total and a recommendation with the main reason recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask suppliers for the price of consumables and service in years four to seven in writing; first-year prices are often discounted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison sheet shows whole-life cost for each quote, including finance, service and consumables, with a written recommendation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a purchase decision record for the item from the template"
                - "Enter each quote's one-off costs on the same row headings"
                - "Project yearly service, consumable and licence costs over the useful life"
                - "Rank the options on total cost and write the recommendation"
            - name: Supplier due diligence and vendor records
              description: |-
                ## Purpose
                Choosing the low quote from a dealer who closes in two years leaves you with an orphaned machine, no parts and a warranty nobody will honour. Checking how long each shortlisted supplier has traded, whether they hold manufacturer authorisation, how many engineers they keep locally and how they handle loan units protects the practice before it signs.

                ## Milestones
                1. Trading history and company registration confirmed for each shortlisted supplier.
                2. Manufacturer authorisation for sales and service checked.
                3. Local engineer numbers, parts stock and loan unit policy recorded.
                4. A vendor record opened for the chosen supplier with contacts and terms.

                ## Notes
                Start from the **Vendor** template for the chosen supplier and keep it updated with every service visit and dispute.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each shortlisted supplier has a due diligence note covering registration, authorisation and local service, and the chosen one has a vendor record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up each supplier's company registration and trading history"
                - "Ask the manufacturer to confirm the dealer is authorised for sales and service"
                - "Ask how many engineers cover your area and what the loan unit policy is"
                - "Open a vendor record for the chosen supplier"
            - name: Negotiating price, warranty and training with suppliers
              description: |-
                ## Purpose
                List prices for equipment are rarely the final price, and the extras worth negotiating are often not money: a longer warranty, a loan unit during repairs, more training days, fixed consumable prices or a trade-in on the old machine. Preparing the asks in order and knowing your walk-away point turns a sales meeting into a negotiation you lead.

                ## Milestones
                1. A target price and a walk-away price written before the meeting.
                2. A ranked list of non-price asks such as warranty, loan unit, training and trade-in.
                3. Competing quotes ready to show where they are stronger.
                4. Every agreed concession confirmed in a revised written quote.

                ## Notes
                Suppliers often have month-end and year-end targets. Asking for a final offer near those dates can help, but never let a deadline bounce you into skipping the comparison.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A revised written quote records every concession agreed against a target price and ranked list of asks prepared beforehand."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your target and walk-away price for the item"
                - "Rank five non-price asks from most to least valuable to the practice"
                - "Meet the front-runner and work through the list in order"
                - "Get every concession confirmed in a revised written quote"
            - name: Reading an equipment lease agreement clause by clause
              description: |-
                ## Purpose
                Lease agreements run to many pages of small print, and the clauses that cost money are rarely on the first page: automatic renewal, notice windows, return condition, insurance duties, early termination sums and assignment restrictions. Reading one agreement slowly with a checklist teaches you where to look in every later one and what to send to your lawyer.

                ## Milestones
                1. One current or proposed agreement read with a clause checklist.
                2. Term, payment, any balloon and end-of-term options summarised in plain words.
                3. Notice periods, automatic extension and early settlement terms highlighted.
                4. Return condition, insurance and assignment clauses noted, with questions for your lawyer.

                ## Notes
                Secondary rental periods that roll on automatically are a common trap. Diary the notice window the day you sign.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language summary of one agreement covers term, payments, notice, settlement, return, insurance and assignment, with lawyer questions listed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick one current or proposed lease agreement to read in full"
                - "Summarise term, payments and end-of-term options in plain words"
                - "Highlight notice, automatic extension and early settlement clauses"
                - "List the clauses you want your lawyer to explain"
            - name: Comparing finance quotes on true cost
              description: |-
                ## Purpose
                Finance quotes are presented in different ways, as a flat rate, a monthly payment, an annual percentage rate or a factor per thousand, and fees, deposits, advance rentals and balloon payments move the real cost. Converting each quote to the total amount payable and a comparable rate shows which offer is cheapest and which is merely presented best.

                ## Milestones
                1. At least two finance quotes for the same item and term gathered.
                2. Each quote's deposit, advance payments, fees, balloon and final option fee listed.
                3. Total amount payable and the extra paid over cash price calculated for each.
                4. A comparable annual rate obtained in writing or checked with your accountant.

                ## Notes
                A flat rate looks about half the true annual rate on a repayment agreement. Always compare total payable, not the headline figure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or more finance quotes are compared on total payable and a comparable rate, and the chosen offer is recorded with its reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the bank and one other finance provider to quote for the same term"
                - "List every payment and fee in each quote"
                - "Calculate the total payable and the cost above cash price for each"
                - "Record which quote you accepted and why"
            - name: Personal guarantees and security in equipment finance
              description: |-
                ## Purpose
                Lenders to small practices often ask the owners to guarantee the debt personally, or take a charge over the equipment or the business, which can outlive the item and reach your home. Knowing what you have already guaranteed, and what you are being asked to sign now, matters most when a partner leaves or the practice is sold.

                ## Milestones
                1. Every existing guarantee and security listed with lender, amount and who signed.
                2. The terms of each guarantee read for limits, duration and release conditions.
                3. Your lawyer's explanation of the new guarantee or security recorded before signing.
                4. A rule agreed among partners on sharing guarantee exposure.

                ## Notes
                Ask for a cap on the guarantee and a release once the balance falls below a set level. Lenders sometimes agree when asked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of all guarantees and security with terms exists, and any new guarantee is reviewed by a lawyer before it is signed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search the finance files for every guarantee and charge signed"
                - "List lender, amount, signatory and release terms for each"
                - "Ask your lawyer to explain any new guarantee before you sign"
                - "Agree with partners how guarantee exposure is shared"
            - name: Lender application pack for equipment finance
              description: |-
                ## Purpose
                An asset finance application from a practice with two years of tidy accounts, a clear quote and a cash flow showing the repayments is usually quick; one assembled in a hurry from missing documents is slow and dearer. Keeping a ready pack means the next application takes a day, and gives you the confidence to ask two lenders at once.

                ## Milestones
                1. The last two years of accounts and recent management accounts collected.
                2. Recent bank statements, the supplier quote and the equipment specification ready.
                3. A one-page summary of the practice, its owners and how the item earns its keep.
                4. A twelve-month cash flow showing the new repayments within the affordability limit.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete application pack with accounts, statements, quote, summary and cash flow is filed and ready to send to two lenders."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your accountant for the last two years of signed accounts"
                - "Download the last six months of business bank statements"
                - "Write a one-page summary of the practice and the purpose of the item"
                - "Build a twelve-month cash flow that includes the new repayment"
            - name: Manufacturer finance and promotional offers
              description: |-
                ## Purpose
                Zero percent finance, deferred first payments and bundled packages from manufacturers can be good value, but the cost is often folded into a higher price, a tied consumables contract or a mandatory service plan. Testing a promotional offer against the cash price available elsewhere shows whether it is a real saving.

                ## Milestones
                1. The promotional offer's total payable and every tied condition listed.
                2. A cash price for the same item without the promotion requested.
                3. Tied consumables or service costs priced over the agreement term.
                4. A decision recorded on whether the offer beats bank finance on the cash price.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A promotional offer is compared with a cash price plus bank finance over the full term, including tied costs, and the decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the supplier for the cash price without the finance promotion"
                - "List every condition tied to the promotional offer"
                - "Price tied consumables and service over the full term"
                - "Compare the offer with bank finance on the cash price"
            - name: Buying used or refurbished equipment
              description: |-
                ## Purpose
                Refurbished chairs, microscopes and plotters can cost half the new price, and for a start-up or a second room that difference matters. The risk sits in unknown history, missing service records, lapsed software support and devices the regulator will not accept, so the purchase needs checks a new one does not.

                ## Milestones
                1. The item's age, service history and previous owner's reason for selling established.
                2. Manufacturer support, parts availability and software licence transfer confirmed.
                3. An independent engineer's inspection or a refurbisher's warranty in writing.
                4. Approval and safety documents for clinical items obtained, as for a new device.

                ## Notes
                Ask whether the software licence transfers with the hardware. Some manufacturers charge a relicensing fee that wipes out much of the saving.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A used or refurbished item is bought only with confirmed service history, support status, licence transfer and a warranty or independent inspection on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the seller for the full service history and reason for sale"
                - "Confirm with the manufacturer that parts and software support continue"
                - "Check whether the software licence transfers and at what cost"
                - "Book an independent engineer to inspect the item before payment"
            - name: Site readiness and installation day plan
              description: |-
                ## Purpose
                Installations go wrong on the day for avoidable reasons: the unit will not fit through the door, the dedicated circuit is not ready, the network port is dead or the room is still booked for patients. A plan that confirms every site requirement a week ahead and clears the diary for the installation window protects both the equipment and the clinic's income.

                ## Milestones
                1. The supplier's installation requirements checked off against the room a week before.
                2. Electrical, plumbing, network or structural work completed and signed off.
                3. Diary blocked for the installation and commissioning window.
                4. Access route, parking and removal of the old item arranged.

                ## Notes
                If building work is needed beyond connecting services, that belongs with the premises and fit-out plan, not here.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every installation requirement is confirmed in writing a week ahead and the item is installed on the planned day without cancelled appointments."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the supplier for the installation requirements sheet"
                - "Book the electrician or IT support for any service connections"
                - "Block the diary for the installation and commissioning window"
                - "Arrange removal or trade-in collection of the old item"
            - name: Acceptance testing and commissioning sign-off
              description: |-
                ## Purpose
                Once the delivery note is signed and the first lease payment taken, the practice's hold over the supplier weakens fast. Testing the item against the specification and quote, with the supplier present, and signing acceptance only when everything works, keeps faults, missing accessories and unfinished software links the supplier's problem, not yours.

                ## Milestones
                1. An acceptance checklist drawn from the specification, quote and installation sheet.
                2. Every function tested with the lead user, including links to practice software.
                3. Accessories, manuals, certificates and serial numbers checked against the order.
                4. Acceptance signed only when faults are cleared, or signed with a written list of outstanding items.

                ## Notes
                Many lease agreements start the moment you sign the acceptance certificate. Do not sign it on the supplier's behalf or in advance.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed acceptance checklist is signed with no faults outstanding, or with a dated list the supplier has agreed to clear."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw up an acceptance checklist from the specification and quote"
                - "Test every function with the lead user while the engineer is on site"
                - "Check accessories, manuals and certificates against the order"
                - "Sign acceptance only once faults are cleared or listed in writing"
            - name: Staff training and competency on new equipment
              description: |-
                ## Purpose
                An expensive device used by one confident clinician and avoided by everyone else earns half what the business case promised and breaks more often. Planning who is trained by the supplier, who trains the rest and how each person's competency is signed off makes the item part of how the practice works.

                ## Milestones
                1. Every user named with the training level they need.
                2. Supplier training sessions booked and attended by the lead users.
                3. A short in-house guide covering daily start-up, shutdown, cleaning and fault reporting.
                4. Each user's competency signed off and recorded in their training file.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every named user has a signed competency record for the new item within six weeks of installation, and a written daily-use guide is in the room."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every person who will use the item and the level they need"
                - "Book the supplier's training sessions for the lead users"
                - "Write a one-page daily-use and fault-reporting guide for the room"
                - "Sign off each user's competency and file it"
            - name: Insurance cover for financed and leased equipment
              description: |-
                ## Purpose
                Most finance and lease agreements require the practice to insure the equipment for full replacement value and often to note the lessor's interest on the policy. An item stolen or flooded while underinsured still has to be paid for in full, so checking cover each time something new arrives is part of buying it.

                ## Milestones
                1. The insurance clause in each finance agreement read and summarised.
                2. Each new item notified to the practice insurer with its replacement value.
                3. The lessor's or lender's interest noted on the policy where the agreement requires it.
                4. Breakdown or engineering cover for high-value items considered with the broker.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every financed item is on the practice policy at replacement value with lessor interests noted, confirmed in writing by the broker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the insurance clause in each current finance agreement"
                - "Send the broker a list of financed items with replacement values"
                - "Ask the broker to note each lessor's interest where required"
                - "Check equipment values on the policy against the register before renewal @recurring(yearly)"
            - name: Finance agreements and payment schedule register
              description: |-
                ## Purpose
                Practices with eight agreements across four lenders can easily miss a payment increase, a balloon or a secondary rental that should have stopped. A register of every agreement, with start and end dates, payment, balance, end-of-term option and notice deadline, checked against the bank each month, keeps the cash and the commitments visible.

                ## Milestones
                1. Every loan, lease, hire purchase and rental listed with lender and reference.
                2. Start date, end date, monthly payment, balloon and notice window recorded for each.
                3. Outstanding balance or settlement figure requested for each agreement.
                4. Monthly payments matched to the bank statement.

                ## Notes
                Add a column for the notice deadline and sort by it. That single date saves more money than any other field.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every finance agreement with dates, payments, balloon and notice deadline, and each month's direct debits are matched to it."
                cadence: rolling
              tasks:
                - "Gather every finance agreement into one folder"
                - "Record dates, payment, balloon and notice window for each"
                - "Request current settlement figures from each lender"
                - "Match equipment finance debits on the statement to the register @recurring(monthly:3)"
                - "Diary every notice deadline falling in the next six months @recurring(quarterly)"
            - name: Maintenance contracts and warranties register
              description: |-
                ## Purpose
                Service contracts renew automatically at rising prices, warranties expire quietly and the practice pays for repairs it was covered for. A register showing each contract's cover, price, response time, renewal date and each warranty's end date, checked monthly, lets you renegotiate, cancel or claim at the right moment.

                ## Milestones
                1. Every service contract listed with provider, cover, response time, price and renewal date.
                2. Warranty end dates recorded for every item still under warranty.
                3. Items with neither warranty nor contract identified and a decision made for each.
                4. Renewal dates in the next 90 days flagged for review.

                ## Notes
                Claim under warranty before calling for a paid repair. Engineers do not always check.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of every service contract and warranty with dates and cover exists, and no contract renews without a recorded review."
                cadence: rolling
              tasks:
                - "Collect every service contract and warranty certificate"
                - "Record cover, response time, price and renewal or end date for each"
                - "Decide what to do about items with no warranty or contract"
                - "Review contracts and warranties ending in the next 90 days @recurring(monthly:12)"
            - name: Planned preventive maintenance calendar
              description: |-
                ## Purpose
                Manufacturers set service intervals for sterilisers, compressors, suction units, imaging equipment and plotters, and missing them voids warranties and makes breakdowns likelier. A calendar that books every visit ahead, into quiet sessions, and records each service report, keeps equipment in warranty and evidence ready for an inspector.

                ## Milestones
                1. Service intervals for every registered item taken from manuals or contracts.
                2. A twelve-month calendar of service visits booked into low-activity sessions.
                3. Each completed service report filed against the item.
                4. Daily and weekly user checks, such as steriliser test cycles, assigned to named staff.

                ## Notes
                Daily and weekly decontamination checks themselves belong to the infection prevention routines; this calendar holds the engineer visits and the record that they happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month service calendar is booked for every item with a set interval, and each visit has a filed report."
                cadence: rolling
              tasks:
                - "List the manufacturer service interval for every registered item"
                - "Book the next twelve months of engineer visits into quiet sessions"
                - "Confirm the coming month's service visits with each engineer @recurring(monthly:5)"
                - "File each service report against the item within a week of the visit"
                - "Check no item has slipped past its service interval @recurring(quarterly)"
            - name: Electrical safety and calibration testing log
              description: |-
                ## Purpose
                Inspectors, insurers and the manufacturer's warranty may all expect evidence that equipment is electrically safe and that measuring devices, from scales and blood pressure monitors to lab analysers and survey instruments, read true. A log of each test, its due date and its result turns that evidence into a record you can produce on request.

                ## Milestones
                1. Every item needing electrical safety testing or calibration identified with its interval.
                2. A qualified tester or calibration service appointed.
                3. Test certificates filed and labels on each item showing the next due date.
                4. Failed items taken out of use and repaired or replaced, with the action recorded.

                ## Notes
                Start from the **Compliance control** template so each test has an owner, an interval and evidence attached.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every item needing testing or calibration has a current certificate on file and a due-date label, and any failure has a recorded action."
                cadence: cyclic
              tasks:
                - "List every item that needs electrical testing or calibration and its interval"
                - "Appoint a qualified tester or calibration service"
                - "Check which tests and calibrations fall due next quarter and book them @recurring(quarterly)"
                - "Confirm every failed item was taken out of use and fixed @recurring(monthly:20)"
            - name: Breakdown and downtime log
              description: |-
                ## Purpose
                Lost sessions from a broken chair or a dead plotter are the hidden cost that never shows on the service invoice. Recording each breakdown with the hours out of use, appointments moved, engineer response time and repair cost gives you the evidence for a repair or replace decision and for holding a service provider to its contract.

                ## Milestones
                1. A simple log with date, item, fault, hours out of use, appointments affected, response time and cost.
                2. Every breakdown since the log began entered within a day.
                3. Response times compared against the service contract each month.
                4. Repeat faults flagged for the repair or replace decision.

                ## Notes
                Start from the **Metrics log** template and keep it in the room where staff report faults.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every breakdown is logged with downtime, lost appointments, response time and cost, and repeat faults are reviewed monthly."
                cadence: rolling
              tasks:
                - "Set up a downtime log from the metrics log template"
                - "Tell staff where to record a breakdown and what to note"
                - "Review the month's breakdowns and response times against contracts @recurring(monthly:22)"
                - "Flag any item with three faults in six months for a replace review"
            - name: Consumables and running costs per device
              description: |-
                ## Purpose
                Some equipment costs more to feed than to finance: sensor covers, cartridges, test strips, reagents, filters and proprietary tips can double the lifetime cost. Tracking monthly spend on consumables by device shows which items are profitable to run, where a cheaper approved alternative exists and whether a tied supply contract is still worth it.

                ## Milestones
                1. Consumable lines in the purchasing records mapped to the device they serve.
                2. Monthly consumable spend totalled for each major device.
                3. Cost per use or per procedure worked out for the top five devices.
                4. Alternative approved consumables or suppliers priced where spend is high.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly consumable spend and cost per use are recorded for the five highest-spend devices, with alternatives priced for at least two."
                cadence: rolling
              tasks:
                - "Tag each consumable line in purchasing records with its device"
                - "Work out cost per use for the five highest-spend devices"
                - "Total consumable spend by device from last month's invoices @recurring(monthly:18)"
                - "Price an approved alternative for the highest-spend consumable"
            - name: Device recalls and field safety notices watch
              description: |-
                ## Purpose
                Manufacturers and regulators issue recalls and field safety notices for devices, sometimes requiring an item to be taken out of use the same day. A named person who checks the regulator's alert service and supplier notices, matches them against the asset register and records the action taken means the practice responds before an inspector or a patient finds the problem.

                ## Milestones
                1. The practice subscribed to the device regulator's alert service and key suppliers' notices.
                2. A named person and a deputy responsible for reviewing alerts.
                3. Each relevant alert matched to the register with the action and date recorded.
                4. A file of all alerts received and actions taken, ready for inspection.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every device alert received is logged with whether it applies, the action taken and the date, and a named person reviews alerts monthly."
                cadence: rolling
              tasks:
                - "Subscribe to your device regulator's safety alert service"
                - "Name a person and a deputy to review device alerts"
                - "Check new alerts and supplier notices against the register @recurring(monthly:9)"
                - "Record the action and date for every alert that applies"
            - name: Firmware and security updates for connected equipment
              description: |-
                ## Purpose
                Imaging units, analysers, scanners, printers and networked chairs run software that needs updates, and an unpatched device on the practice network is a common way in for attackers. Keeping a list of connected equipment, its software version and who applies updates closes a gap that neither the IT support firm nor the equipment engineer always owns.

                ## Milestones
                1. Every networked or software-driven device listed with its current firmware version.
                2. Responsibility for updates agreed between the supplier and IT support for each.
                3. Devices on unsupported operating systems identified with a plan to isolate or replace.
                4. Default passwords changed and remote access by suppliers logged.

                ## Notes
                Never update a clinical device's firmware without the supplier's approval. Some updates need re-validation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of connected devices shows firmware version, update owner and support status, and devices on unsupported systems have a recorded plan."
                cadence: rolling
              tasks:
                - "List every networked device with its firmware or operating system version"
                - "Agree with each supplier and IT support who applies updates"
                - "Check suppliers for new firmware and apply approved updates @recurring(monthly:25)"
                - "Change default passwords on every connected device"
            - name: Equipment utilisation and revenue per device review
              description: |-
                ## Purpose
                Paying finance on a laser used twice a month, or on a second surgery chair idle on Fridays, means paying for capacity nobody uses. Comparing each major device's use and the fees it supports against its monthly cost shows which items pay their way, which need marketing or diary changes, and which should not be replaced like for like.

                ## Milestones
                1. Use per month recorded for each high-value device from the diary or system logs.
                2. Fees linked to that use estimated from the billing system.
                3. Monthly finance, service and consumable cost set against those fees.
                4. Under-used items listed with a proposed action.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly table shows use, linked fees and monthly cost for each high-value device, with actions for any item that does not cover its cost."
                cadence: cyclic
              tasks:
                - "Pull last quarter's use counts for each high-value device"
                - "Estimate the fees linked to each device from billing reports"
                - "Compare fees with monthly finance, service and consumable cost @recurring(quarterly)"
                - "Propose an action for each device that does not cover its cost"
            - name: Service contract performance review
              description: |-
                ## Purpose
                Service contracts promise response times, first-time fix rates and loan units, and the practice rarely checks whether it got them. A yearly review of each contract's cost against the breakdowns, response times and visits actually delivered gives you the evidence to renegotiate, switch to an independent engineer or drop cover on items that never fail.

                ## Milestones
                1. Each contract's yearly cost set against its visits, repairs and parts supplied.
                2. Response times from the downtime log compared with the contracted standard.
                3. Pay-as-you-go repair costs estimated for comparison.
                4. A keep, renegotiate, switch or cancel decision recorded for each contract.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every service contract has a yearly review with cost, delivered performance and a recorded keep, renegotiate, switch or cancel decision."
                cadence: cyclic
              tasks:
                - "Total each contract's cost and the visits and parts it delivered last year"
                - "Compare actual response times with the contract standard"
                - "Ask an independent engineer to quote pay-as-you-go rates"
                - "Review every service contract's value before its renewal @recurring(yearly)"
            - name: Annual equipment review with the partners
              description: |-
                ## Purpose
                Equipment decisions drift when they are only discussed in a crisis. One meeting a year that walks through the register, condition grades, downtime, utilisation, finance commitments and the rolled-forward capital plan lets the partners agree next year's purchases together and in time to get quotes before the busy season.

                ## Milestones
                1. An updated pack holding the register, condition grades, downtime and utilisation summaries.
                2. Finance commitments and headroom under the affordability limit shown.
                3. Next year's purchases and replacements agreed and minuted.
                4. Owners and target dates set for each approved purchase.

                ## Notes
                Hold it a few months before the financial year end so purchases can be timed with your accountant's advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Minutes of a yearly partners' equipment review record next year's approved purchases, each with an owner and a target date."
                cadence: cyclic
              tasks:
                - "Choose a date for the review a few months before the year end"
                - "Prepare a pack from the register, downtime and utilisation records"
                - "Hold the partners' equipment review and minute the decisions @recurring(yearly)"
                - "Give each approved purchase an owner and a target date"
            - name: Equipment risk register
              description: |-
                ## Purpose
                Some equipment risks are rare but serious: the single steriliser that halts every procedure, the server holding images, the analyser no local engineer can fix, a supplier in financial trouble. A short risk register with a likelihood, impact, owner and fallback for each makes the practice decide its backup plans calmly rather than on the day.

                ## Milestones
                1. Single points of failure in the equipment list identified.
                2. Each risk scored for likelihood and impact, with an owner.
                3. A fallback recorded for the top five, such as a loan unit, a neighbouring practice or a rental supplier.
                4. Review dates set for each risk.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register names single points of failure, scores each with an owner, and records a tested fallback for the top five."
                cadence: rolling
              tasks:
                - "Create a risk register from the template"
                - "List items whose failure would stop a whole service"
                - "Agree a fallback for each of the top five risks"
                - "Review risk scores and fallbacks with the practice manager @recurring(quarterly)"
            - name: Replacement cycle policy by equipment category
              description: |-
                ## Purpose
                Without a policy, some items are replaced at the first fault and others are nursed along for fifteen years at growing cost. Setting a target life and replacement triggers for each category, such as age, repair cost as a share of new price, end of support or a change in standards, makes replacement a rule the partners agreed in advance.

                ## Milestones
                1. A target useful life set for each equipment category.
                2. Replacement triggers agreed, such as repair costs over a set share of new price or end of support.
                3. The policy linked to the capital plan so targets drive planned years.
                4. Exceptions recorded with a reason when the partners override the policy.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written policy gives every equipment category a target life and replacement triggers, and the capital plan uses it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask suppliers and engineers for typical useful lives by category"
                - "Set a target life and replacement triggers for each category"
                - "Update the capital plan years to match the policy"
                - "Check the policy still reflects actual equipment lives @recurring(yearly)"
            - name: Repair or replace decision for an ageing item
              description: |-
                ## Purpose
                Large repair quotes on an eight-year-old unit force a choice under time pressure, with patients waiting and an engineer pressing for an answer. A short structured comparison of repair cost, remaining life, downtime history, support status and the cost of a replacement, done in a day, keeps the decision sound and recorded.

                ## Milestones
                1. The repair quote and expected remaining life after repair obtained in writing.
                2. Downtime and repair history for the item pulled from the log.
                3. A replacement price and lead time obtained.
                4. A repair or replace decision recorded with the figures behind it.

                ## Notes
                A rental or loan unit can buy time to make the replace decision properly rather than accepting the first new quote.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares repair cost and remaining life with replacement cost and lead time for the item."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the engineer to put the repair cost and expected remaining life in writing"
                - "Pull the item's downtime and repair history from the log"
                - "Get a replacement price and lead time from two suppliers"
                - "Record the decision and the figures in the purchase file"
            - name: Early settlement or refinancing of an agreement
              description: |-
                ## Purpose
                When rates fall, cash builds up or a partner leaves, paying off or refinancing an equipment agreement can save money or simplify the books, but settlement terms vary widely and some charge most of the remaining interest. Getting the settlement figure, comparing it with the payments left and agreeing it with your accountant shows whether settling makes sense.

                ## Milestones
                1. A written settlement figure obtained with its expiry date.
                2. The figure compared with the total of remaining payments.
                3. The effect on cash reserves and the affordability limit shown.
                4. A settle, refinance or continue decision recorded with your accountant's view.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to settle, refinance or continue an agreement compares the settlement figure with remaining payments, with the accountant's view noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request a written settlement figure from the lender"
                - "Total the payments left on the agreement"
                - "Ask another lender to quote for refinancing the balance"
                - "Record the decision with your accountant's comments"
            - name: End-of-lease options for a maturing agreement
              description: |-
                ## Purpose
                As a lease nears its end the practice has to choose to return the item, continue in a secondary period, buy it for a final payment or upgrade, and the notice window for that choice is often months before the last payment. Starting six months ahead avoids drifting into a rolling secondary rental or a costly return condition dispute.

                ## Milestones
                1. The agreement's end date, notice window and end-of-term options confirmed.
                2. The item's condition and remaining usefulness assessed against the replacement policy.
                3. Return, extend, buy-out and upgrade options costed.
                4. Notice served in writing within the window and acknowledgement filed.

                ## Notes
                If returning the item, check the return condition clause and photograph the item before collection.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An end-of-lease decision is recorded and written notice was served within the agreement's window, with the lessor's acknowledgement filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the end date and notice window in the agreement"
                - "Assess the item against the replacement policy"
                - "Ask the lessor for buy-out and extension figures"
                - "Serve written notice within the window and file the reply"
            - name: Disposal, data wiping and resale of retired equipment
              description: |-
                ## Purpose
                Retired equipment often holds patient images, client files or network credentials, and clinical items may be classed as hazardous waste. Selling, trading in or disposing of each item with records wiped, a certificate obtained and the register and fixed asset ledger updated protects confidentiality and closes the asset properly in the accounts.

                ## Milestones
                1. Items to retire listed with any finance agreement settled or the lessor's consent obtained.
                2. Data storage on each item identified and wiped or destroyed, with a certificate.
                3. Resale, trade-in, donation or licensed waste disposal arranged for each item.
                4. The register and fixed asset ledger updated with disposal date and proceeds.

                ## Notes
                You cannot sell or dispose of an item still owned by a lessor. Check the agreement first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each retired item has a data destruction certificate where it held data, a disposal or sale record, and an updated register and ledger entry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List items to retire and check whether any are still under finance"
                - "Ask suppliers which items store patient or client data"
                - "Arrange certified data wiping before any item leaves the premises"
                - "Update the register and tell your accountant the disposal proceeds"
            - name: Equipping a new practice on a start-up budget
              description: |-
                ## Purpose
                A new practice has no trading history, so lenders want guarantees or larger deposits, and every repayment starts before the diary fills. Separating the equipment needed to open from what can wait for revenue, mixing refurbished and leased items, and asking for payment holidays or stepped payments keeps the opening months survivable.

                ## Milestones
                1. Equipment split into needed on day one, needed within six months and later.
                2. Day-one items costed with a mix of new, refurbished, leased and rented options.
                3. Start-up finance quotes requested, including deferred or stepped payment options.
                4. Total monthly repayments shown against the opening cash flow forecast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A day-one equipment list is costed and funded with monthly repayments that fit the opening cash flow forecast, agreed with the accountant."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sort the full equipment wish list into day one, six months and later"
                - "Price refurbished and rental options for the day-one items"
                - "Ask two lenders about stepped payments or payment holidays for a new practice"
                - "Check total repayments against the opening cash flow forecast"
            - name: Equipment finance when buying or selling a practice
              description: |-
                ## Purpose
                Equipment agreements do not pass automatically with a practice: lessors must consent to a transfer, some agreements must be settled at completion, and buyers often discover leases the seller never mentioned. Listing every agreement with its settlement figure and transfer terms early keeps the price negotiation honest and completion on time.

                ## Milestones
                1. A schedule of all equipment agreements with balances, settlement figures and transfer terms.
                2. Lessor consent or novation requirements confirmed for each.
                3. A decision for each agreement: settle at completion, transfer or replace.
                4. The schedule shared with both sides' lawyers and accountants.

                ## Notes
                Buyers should ask for the full finance register and bank statements, not a seller's summary. Unlisted leases are a common surprise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A schedule of every equipment agreement with settlement figures, transfer terms and an agreed treatment is shared with both sides' advisers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the finance agreements register as a sale schedule"
                - "Ask each lessor for a settlement figure and their transfer process"
                - "Agree with the other side which agreements are settled, transferred or replaced"
                - "Send the schedule to both sides' lawyers and accountants"
            - name: Partner-owned equipment used by the practice
              description: |-
                ## Purpose
                In some practices one partner buys a device personally and the firm uses it, which works until that partner leaves, disputes the rent or wants it back. A written arrangement for ownership, rent or usage charges, maintenance, insurance and what happens on exit avoids a dispute over a machine the whole practice depends on.

                ## Milestones
                1. Every partner-owned item used by the practice identified.
                2. A written arrangement for rent or usage charge, maintenance and insurance for each.
                3. Exit terms agreed: buy-out price basis or removal notice period.
                4. The arrangement checked with your accountant and lawyer and filed with partnership papers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each partner-owned item used by the practice has a signed arrangement covering charges, maintenance, insurance and exit terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List equipment owned personally by partners but used by the practice"
                - "Agree a rent or usage charge and who maintains and insures each item"
                - "Agree what happens to each item if the partner leaves"
                - "Have the arrangement reviewed by your accountant and lawyer"
            - name: Short-term rental for a pilot service or temporary need
              description: |-
                ## Purpose
                Before committing to a five-year lease for a new service, renting the equipment for three to six months tests whether demand is real. Rental also covers a long repair or a seasonal peak, and the right agreement credits some rental against a later purchase, so the trial is not wasted money.

                ## Milestones
                1. The pilot or temporary need defined with a start, end and success measure.
                2. Rental quotes obtained, including any rent-to-buy credit.
                3. Use and revenue tracked against the success measure through the rental.
                4. A buy, lease or return decision made before the rental ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rental runs against a written success measure and ends with a recorded buy, lease or return decision before the end date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the success measure for the pilot service"
                - "Ask rental suppliers whether any rent counts towards purchase"
                - "Track bookings and fees for the rented item each month"
                - "Make the buy, lease or return decision a month before the rental ends"
            - name: Power protection and storm plan for high-value equipment
              description: |-
                ## Purpose
                Power cuts, surges and lightning damage control boards in imaging units, chairs, analysers and servers, and in hurricane regions a single storm can write off a room of equipment. Surge protection, uninterruptible power supplies on sensitive items and a written shutdown and protection plan reduce the damage and the insurance claims that follow.

                ## Milestones
                1. High-value and power-sensitive items identified with the supplier's power protection advice.
                2. Surge protection and uninterruptible power supplies fitted where the supplier approves.
                3. A shutdown, unplug and cover procedure written for storms and planned outages.
                4. Equipment photographed and serial numbers stored off site for insurance claims.

                ## Notes
                Ask the supplier before fitting any protection device. Some clinical equipment must be connected in a specific way to keep its approval and warranty.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Power-sensitive items have supplier-approved surge or backup protection, and a written storm shutdown procedure is posted and tested once a year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask suppliers which items need surge protection or backup power"
                - "Fit approved surge protection and backup supplies to those items"
                - "Write a storm shutdown and protection procedure for each room"
                - "Walk staff through the shutdown procedure before storm season @recurring(yearly)"
            - name: Business case and payback model for a high-value device
              description: |-
                ## Purpose
                Buying a cone beam CT, a surgical laser, a digital lab scanner or a high-end survey instrument can take as much as a year's profit, and the decision deserves a model, not enthusiasm. Building cash flows from expected procedures, fees, referral changes, staff time and full running costs, with a cautious case, shows the payback period and what volume the device must reach.

                ## Milestones
                1. Expected monthly volume, fee per use and ramp-up period estimated from the practice's own data.
                2. Finance, service, consumables, staff time, training and room costs included.
                3. Payback period and break-even monthly volume calculated for base and cautious cases.
                4. The model reviewed by your accountant and presented to partners with the proposal.

                ## Notes
                Use the cautious case for the decision. Equipment business cases nearly always overestimate early volume.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payback model with base and cautious cases and a break-even volume is reviewed by the accountant and attached to the partners' decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate monthly volume and fees from referrals you currently send out"
                - "List every running cost the device brings, including staff time"
                - "Ask the agent to build base and cautious payback cases from your figures"
                - "Send the model to your accountant before the partners' meeting"
            - name: Sale and leaseback to release cash from equipment
              description: |-
                ## Purpose
                Owning valuable equipment outright lets a practice sell it to a finance company and lease it back, releasing cash for an acquisition, a fit-out or a difficult period. The arrangement is debt in another form, with tax, accounting and cost effects, so it needs the same scrutiny as any borrowing before it is signed.

                ## Milestones
                1. Owned items with a resale value confirmed from the register and an independent valuation.
                2. Sale and leaseback quotes from at least two providers obtained.
                3. Total lease cost compared with a term loan for the same cash.
                4. Tax, accounting and legal effects reviewed by your accountant and lawyer before signing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on sale and leaseback compares two quotes with a term loan and notes the accountant's and lawyer's views."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List owned equipment with a likely resale value"
                - "Get an independent valuation of the main items"
                - "Ask two asset finance providers for sale and leaseback quotes"
                - "Compare the total cost with a term loan for the same amount"
---

# Practice Equipment Finance

This area is for the owner or partner who signs for the chairs, scanners, lasers, sterilisers, plotters, servers and analysers a practice cannot work without, and who then lives with the repayments and service contracts for five to ten years. It runs from the foundations (an asset register, a condition audit, approval rules, an affordability limit, a capital plan and the buy, lease or rent question), through the knowledge and purchasing steps of specifying, trialling, quoting, negotiating and financing an item, the dated moments of installation, acceptance and insurance, the routines that keep finance agreements and maintenance under watch, and finally the replacement and end-of-lease decisions, the owner situations and the specialist work of payback models and sale and leaseback.

What repeats is a monthly check of finance payments, maintenance contract dates, service visits, consumable spend, downtime, device recalls and firmware updates, quarterly calibration, utilisation and risk reviews, and a yearly equipment review with the partners that rolls the capital plan forward. The Purchase decision, Vendor, Compliance control, Risk register and Metrics log templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
