---
id: real-estate-development.commercial-real-estate-acquisitions
name: Commercial Real Estate Acquisitions
description: "A disciplined route to buying office, retail and industrial property: a clear buy box, offering memoranda screened fast, rent rolls and leases read properly, bids that win on terms and closings that land on time."
category: business
version: 1.0.0
tags: [real-estate-development, commercial-real-estate-acquisitions, founder, small-business, knowledge-worker, offering-memorandum, rent-roll, lease-review]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - meeting-notes
    - risk-register
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Commercial Real Estate Acquisitions
          description: "Buying commercial property: office, retail and industrial targets, offering memoranda, rent rolls, lease reviews, bids and closing."
          projects:
            - name: Commercial acquisition buy box on one page
              description: |-
                ## Purpose
                Brokers send buyers dozens of deals a month, and a buyer with no written criteria either reads all of them badly or chases whatever looks cheapest. A one-page buy box naming sector, lot size, locations, lease profile and minimum return lets you reject most memoranda in minutes and tells brokers exactly what to send you first.

                ## Milestones
                1. Target sectors, lot size range and two or three locations written on one page.
                2. Lease profile limits recorded, for example minimum unexpired term and maximum vacancy at purchase.
                3. A minimum going-in yield and target return agreed with any partners and written down.
                4. The buy box sent to at least five brokers as a short email.

                ## Notes
                Keep it to one page. A buy box that tries to cover every sector tells brokers you have not decided yet.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page buy box with sector, size, location, lease and return limits exists and has been sent to at least five brokers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the three sectors and lot size range you would actually buy"
                - "List the towns or submarkets you can inspect within a day"
                - "Agree a minimum going-in yield and target return with partners"
                - "Email the finished buy box to five commercial brokers"
            - name: Proof of funds and capital readiness pack
              description: |-
                ## Purpose
                Sellers and their agents rank bids by certainty as much as price, and the first question on a competitive deal is where the money comes from. A ready pack with a proof of funds letter, the equity sources and an indicative debt term sheet means you can bid within days of a memorandum landing rather than losing a week assembling it.

                ## Milestones
                1. Equity available for the next purchase totalled, with each source and how fast it can be called.
                2. A proof of funds letter from your bank or equity partner dated within the last three months.
                3. An indicative lending appetite letter or term sheet from at least one lender.
                4. A one-paragraph funding statement written for use in offer letters.

                ## Notes
                Never send bank statements or account numbers to a broker. A dated letter from the bank or partner is what they need.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A funding pack with a current proof of funds letter, a lender appetite letter and a written funding statement is filed and ready to attach."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total the equity you could commit to one purchase this year"
                - "Ask your bank or equity partner for a dated proof of funds letter"
                - "Request an indicative lending appetite letter from one lender"
                - "Write a short funding statement for offer letters"
                - "Refresh the proof of funds letter so it is never older than three months @recurring(quarterly)"
            - name: Acquisition adviser bench of solicitor, surveyor and accountant
              description: |-
                ## Purpose
                A deal won on Friday needs a commercial property solicitor, a building surveyor and an accountant who can start on Monday, and choosing them under exclusivity pressure is how buyers end up with whoever is free. Lining up a bench now, with fee quotes and conflict checks done, protects the exclusivity period you will fight to get.

                ## Milestones
                1. A commercial property solicitor with acquisition experience in your sector engaged in principle.
                2. A building surveyor and an environmental consultant identified with indicative fees.
                3. An accountant or tax adviser briefed on the kind of purchases you plan.
                4. A bench sheet with names, rates, turnaround times and conflicts checked.

                ## Notes
                Start from the **Vendor** template, one record per adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Named solicitor, surveyor, environmental consultant and accountant are on a bench sheet with fees and confirmed availability."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two brokers which solicitors close commercial deals fastest"
                - "Request fee quotes from two solicitors and two building surveyors"
                - "Confirm none of them acts for the sellers you are likely to meet"
                - "Record each adviser on a vendor record with rates and turnaround"
                - "Check adviser rates and availability before the new year @recurring(yearly)"
            - name: Deal pipeline tracker for marketed opportunities
              description: |-
                ## Purpose
                Without a tracker, deals you passed on reappear six months later at a lower price and you cannot remember why you said no. A simple pipeline with every memorandum logged, its stage, the guide price and the reason for passing becomes your private record of the market and your fastest screening aid.

                ## Milestones
                1. A tracker with columns for property, broker, sector, guide price, stage, next action and reason for passing.
                2. Every memorandum received in the last three months back-filled.
                3. Stages defined once: received, screened, toured, offered, under contract, closed, passed.
                4. The tracker kept somewhere partners can read it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pipeline tracker with defined stages holds every memorandum received in the last three months with a stage and next action."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up the tracker columns and the seven fixed stages"
                - "Back-fill memoranda from your inbox for the last three months"
                - "Write a one-line reason against every deal you passed on"
                - "Update stage and next action on every live deal @recurring(weekly:mon)"
            - name: Submarket map for three target locations
              description: |-
                ## Purpose
                Pricing a shop parade or a multi-let industrial estate is guesswork until you know the local vacancy, the rents achieved on recent lettings and where occupiers are moving. A short map of three submarkets, built from agent research, council planning lists and your own walks, gives each memorandum a context before you open the numbers.

                ## Milestones
                1. Three submarkets chosen from the buy box, with boundaries marked on a map.
                2. Headline vacancy, typical rents and recent lettings noted for each from agent reports.
                3. Major planned schemes and infrastructure changes listed from planning records.
                4. A half-day walk of each submarket done with notes and photographs.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written profile of three submarkets with vacancy, rent evidence and planned schemes, backed by one site walk each."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Download the latest free market report from two large agencies"
                - "Search the planning register for large schemes in each submarket"
                - "Walk each submarket for half a day and photograph vacant units"
                - "Update vacancy and rent notes from new agent reports @recurring(quarterly)"
            - name: Buying entity agreed before the first offer
              description: |-
                ## Purpose
                Changing the buyer name after heads of terms are agreed delays the contract and can trigger extra tax or lender questions. Deciding with your solicitor and accountant which company or vehicle will buy, and opening its bank account early, means the offer letter names the right buyer from day one.

                ## Milestones
                1. The buying vehicle agreed in writing with your accountant and solicitor.
                2. The entity incorporated or confirmed, with directors and shareholders recorded.
                3. A bank account open in the entity's name and able to receive equity.
                4. Know-your-customer documents for the entity collected in one folder for solicitors and lenders.

                ## Notes
                This is a structuring question for your advisers. The project is about getting their answer early, not choosing a structure yourself.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The buying entity is named, incorporated, has a working bank account and a ready know-your-customer folder before any offer is submitted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a call with your accountant about the buying vehicle"
                - "Ask your solicitor what the buyer name must look like in offers"
                - "Open a bank account in the buying entity's name"
                - "Collect certificates, registers and ID for a know-your-customer folder"
                - "Diarise the entity's annual filings and accounts dates @recurring(yearly)"
            - name: Thirty-minute memorandum screening sheet
              description: |-
                ## Purpose
                Most offering memoranda should be rejected, and the cost of a slow no is missing the one deal that deserved a full day. A single screening sheet that pulls guide price, net income, yield, weighted unexpired lease term, largest tenant share and obvious capex into one place lets you decide in thirty minutes whether a deal goes further.

                ## Milestones
                1. A one-page screening sheet with the ten numbers you check on every deal.
                2. Pass and fail thresholds marked beside each number from the buy box.
                3. The sheet tested on five old memoranda, with timings noted.
                4. A rule written for what moves a deal from screened to toured.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page screening sheet with thresholds has been used on five memoranda, each screened in under forty-five minutes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten numbers you want from every memorandum"
                - "Mark pass and fail thresholds against each from the buy box"
                - "Screen five old memoranda with the sheet and time yourself"
                - "Write the rule that sends a deal on to a site tour"
            - name: Dead deal budget and abort cost rules
              description: |-
                ## Purpose
                Buyers who lose two deals after instructing surveys and solicitors can spend a meaningful share of a year's equity on nothing. Setting a dead deal budget, and rules for what you spend at each stage, keeps diligence costs proportionate and makes the decision to walk away easier to take.

                ## Milestones
                1. An annual dead deal budget agreed with partners.
                2. Spend limits set for each stage, from first tour to exchange or signing.
                3. Fee terms with advisers checked for abort or capped arrangements.
                4. A running log of abort costs per deal set up.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written dead deal budget with stage spend limits and a running abort cost log, agreed with partners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree an annual dead deal budget with partners"
                - "Set a spend limit for each stage of a deal"
                - "Ask each adviser whether they offer capped or abort fees"
                - "Reconcile abort costs spent against the budget @recurring(monthly:26)"
            - name: Total acquisition cost budget beyond the price
              description: |-
                ## Purpose
                Guide prices are quoted before purchase costs, and transfer taxes, legal fees, surveys, lender fees and any agent fee can add a noticeable share to what you actually pay. Building a standard purchase cost budget for your jurisdiction, checked with your solicitor and tax adviser, stops yields being calculated on the wrong number and equity running short at completion.

                ## Milestones
                1. A cost list covering transfer taxes, legal, survey, environmental, valuation, lender and any buyer agent fees.
                2. Typical amounts or rates for each confirmed with your solicitor and tax adviser for your jurisdiction.
                3. A purchase cost line added to the screening sheet and investment memo.
                4. Equity requirement per deal recalculated on price plus costs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A purchase cost budget confirmed by your solicitor and tax adviser is built into the screening sheet and memo template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost a buyer pays on top of the price"
                - "Ask your solicitor and tax adviser to confirm typical amounts"
                - "Add a purchase cost line to the screening sheet"
                - "Recalculate the equity needed per deal including costs"
            - name: Weekly broker call slot
              description: |-
                ## Purpose
                Brokers call the buyers they spoke to last week, and the best marketed deals often get an early preview to two or three of them. Holding a fixed weekly hour for broker calls, with a note of what each one is marketing and what you told them, keeps you on those preview lists without it eating the week.

                ## Milestones
                1. A list of fifteen brokers covering your sectors and submarkets.
                2. A fixed weekly hour in the calendar for calls.
                3. Notes kept on every call: what they have coming, what they asked, what you promised.
                4. At least one preview deal received before full marketing within three months.

                ## Notes
                Start from the **Meeting notes** template for each broker. Follow up every promise within two working days or the call does more harm than good.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes exist for at least four broker calls a month and at least one deal was previewed before full marketing within the first quarter."
                cadence: rolling
              tasks:
                - "List fifteen brokers active in your sectors and submarkets"
                - "Block a fixed weekly hour for broker calls"
                - "Call three brokers and log what they are bringing to market @recurring(weekly:tue)"
                - "Meet two brokers in person for coffee or a site tour @recurring(quarterly)"
            - name: Weekly offering memorandum triage session
              description: |-
                ## Purpose
                Memoranda that sit unread for a fortnight miss the call for offers. One weekly session where every new memorandum gets the screening sheet, a stage in the tracker and a reply to the broker turns a cluttered inbox into a steady flow of decisions.

                ## Milestones
                1. A weekly ninety-minute triage slot in the calendar.
                2. Every memorandum received that week screened and staged.
                3. A reply sent to each broker, even when the answer is a pass with a reason.
                4. Call for offers dates from live deals copied to the critical dates list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No memorandum in the inbox is more than seven days old without a screening sheet and a stage in the tracker."
                cadence: rolling
              tasks:
                - "Set up an email folder that catches incoming memoranda"
                - "Screen and stage every new memorandum in the tracker @recurring(weekly:thu)"
                - "Reply to each broker with a pass reason or next step"
                - "Copy every call for offers date into the critical dates list"
            - name: Monthly pipeline review and kill list
              description: |-
                ## Purpose
                Pipelines fill with deals nobody has the nerve to drop, and partners lose sight of what is actually live. A monthly review that confirms the three to five deals worth real time, kills the rest in writing and checks the dead deal budget keeps effort where it can win.

                ## Milestones
                1. Every live deal reviewed with its stage, next action and owner.
                2. A short kill list written with the reason each deal was dropped.
                3. Spend to date checked against the dead deal budget.
                4. A one-paragraph update sent to partners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly pipeline reviews a year, each with a kill list and a partner update on file."
                cadence: rolling
              tasks:
                - "Review every live deal for stage, next action and owner @recurring(monthly:8)"
                - "Write the kill list with a one-line reason per deal"
                - "Ask the agent to draft the monthly partner update from the tracker"
                - "Send the update to partners before the tenth"
            - name: Guide price versus achieved price log
              description: |-
                ## Purpose
                Guide prices are an agent's opening move, and buyers who never learn what deals actually sold for keep bidding against a phantom. Logging the guide, your bid and the reported sale price of every deal you saw builds your own evidence of how far prices move in each sector and submarket.

                ## Milestones
                1. A log with guide price, your bid if any, sale price where known and yield at each.
                2. Every deal from the pipeline tracker in the last year added.
                3. Sale prices filled in from brokers, press reports or land registry records where public.
                4. The average gap between guide and achieved price noted by sector.

                ## Notes
                Start from the **Metrics log** template. Record only what is public or what a broker has told you is fine to keep.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log with at least twenty deals showing guide and achieved prices, with the average gap calculated by sector."
                cadence: rolling
              tasks:
                - "Create the price log from the metrics log template"
                - "Add every deal from the last year's tracker"
                - "Ask brokers what each passed deal finally traded at @recurring(monthly:19)"
                - "Work out the average guide to achieved gap by sector"
            - name: Lost bid debrief and quarterly pattern review
              description: |-
                ## Purpose
                Most bids lose, and the loser who never asks why keeps losing for the same reason. A short debrief after every lost bid, asking the broker about price, terms and certainty, and a quarterly look across them, shows whether you are too cautious on price, too slow on diligence or simply bidding on the wrong deals.

                ## Milestones
                1. A debrief question list agreed for brokers after every loss.
                2. A debrief note on file for each lost bid with the winning price and terms where shared.
                3. A quarterly review naming the commonest reason for losing.
                4. One change to the bidding approach made from each quarterly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lost bid has a debrief note, and four quarterly reviews a year each record one change made to how you bid."
                cadence: rolling
              tasks:
                - "Write five debrief questions to ask brokers after a lost bid"
                - "Call the broker within a week of each lost bid"
                - "Review lost bid notes for patterns and pick one change @recurring(quarterly)"
                - "Record the change in the buy box or bid template"
            - name: Quarterly buy box refresh
              description: |-
                ## Purpose
                Interest rates, vacancy and sector sentiment move every quarter, and a buy box written last year may now exclude the only deals that make sense. A quarterly refresh against what you saw, what traded and what your lenders will fund keeps the criteria honest without changing them every week.

                ## Milestones
                1. The last quarter's screened deals compared with the buy box.
                2. Lender appetite and indicative terms checked with one lender.
                3. Changes agreed with partners and dated on the buy box.
                4. Brokers told of any material change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The buy box carries a dated revision note every quarter, agreed by partners, with brokers informed of material changes."
                cadence: cyclic
              tasks:
                - "Compare last quarter's deals with the buy box limits @recurring(quarterly)"
                - "Ask one lender whether its appetite or terms have moved"
                - "Agree any changes with partners and date the buy box"
                - "Email brokers if the target sectors or lot sizes changed"
            - name: Critical dates control for live deals
              description: |-
                ## Purpose
                Commercial deals are a chain of deadlines: offers due, exclusivity expiry, diligence end, deposit going hard, finance condition and completion. Missing one can cost the deposit or the deal, so a single critical dates list checked every Friday, with an owner for each date, is cheap protection.

                ## Milestones
                1. One critical dates list covering every live deal, with dates from heads of terms and the contract.
                2. An owner named against every date.
                3. Reminders set seven and two days before each deadline.
                4. Any date at risk raised with the solicitor and the other side in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live deal's deadlines sit on one list with owners, and no contractual date passes without a written decision."
                cadence: rolling
              tasks:
                - "Copy every date from live heads of terms into one list"
                - "Name an owner for each date"
                - "Check every live deal date and owner before the weekend @recurring(weekly:fri)"
                - "Ask your solicitor to confirm the dates in each signed contract"
            - name: Data room request list and document index
              description: |-
                ## Purpose
                Diligence stalls when nobody can say which documents have arrived and which are still missing. A standard request list, matched to an index of what the seller has uploaded, lets you chase gaps on day two rather than discovering on day twenty that the service charge accounts never came.

                ## Milestones
                1. A standard request list grouped by title, leases, service charge, building, environmental and contracts.
                2. An index template that records each document, date received and who has reviewed it.
                3. The list tested on one live or past data room.
                4. A gap report format for chasing the seller's agent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard request list and document index exist and have been used on one data room, producing a dated gap report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your solicitor for their standard commercial purchase request list"
                - "Group the list into six headings and add your own items"
                - "Index one data room against the list and note the gaps"
                - "Send the gap report to the seller's agent"
            - name: Yearly acquisitions look back
              description: |-
                ## Purpose
                Twelve months of deal flow says more about your strategy than any single closing: how many memoranda arrived, how many you toured, bid and won, and what each stage cost. Counting the funnel once a year shows whether to widen the buy box, change brokers or bid harder.

                ## Milestones
                1. Counts of deals received, screened, toured, bid, won and closed for the year.
                2. Abort costs and adviser fees totalled.
                3. The three deals you most regret passing on, with why.
                4. Goals for next year's funnel written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A one-page yearly funnel summary with counts, costs, regrets and next year's targets, shared with partners."
                cadence: cyclic
              tasks:
                - "Count deals at each pipeline stage for the year @recurring(yearly)"
                - "Total abort costs and adviser fees"
                - "Name the three passed deals you most regret"
                - "Set funnel targets for next year"
            - name: Reading an offering memorandum critically
              description: |-
                ## Purpose
                An offering memorandum is a sales document written to make the asset look its best, with headline yields that often assume full occupancy, ignore non-recoverable costs or count rent from leases not yet signed. Learning where memoranda flatter, by checking several against their own rent rolls, turns them from brochures into leads for questions.

                ## Milestones
                1. Three memoranda read side by side with their rent rolls.
                2. A list of the common flattering assumptions you found, such as rent from unsigned leases or ignored voids.
                3. A standard question list for brokers drawn from that list.
                4. One memorandum's headline yield recalculated on your own assumptions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of at least eight ways memoranda flatter an asset, with one headline yield recalculated and a broker question list."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three recent memoranda that came with rent rolls"
                - "Note every assumption behind each headline yield"
                - "Recalculate one yield on net income after voids and costs"
                - "Turn the findings into a broker question list"
            - name: Rent roll reconciliation to leases
              description: |-
                ## Purpose
                Rent rolls are the seller's summary, and errors in them, a missed break date, a rent review shown as settled when it is not, a tenant already in arrears, flow straight into your price. Learning to reconcile each line of a rent roll to the lease and recent rent receipts is the core skill of commercial buying.

                ## Milestones
                1. The fields of a commercial rent roll understood: passing rent, review dates, breaks, expiries, service charge, arrears.
                2. One rent roll reconciled line by line to its leases.
                3. Every discrepancy listed with the lease clause that shows it.
                4. Arrears and rent deposits checked against a recent aged debt report.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One rent roll fully reconciled to its leases and arrears report, with a written discrepancy list."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-line definition of each rent roll column"
                - "Reconcile one rent roll to its leases, tenant by tenant"
                - "List every discrepancy with the clause that shows it"
                - "Ask the seller's agent for the aged debt report"
            - name: Commercial lease abstracting practice
              description: |-
                ## Purpose
                Commercial leases run to dozens of pages, and the terms that change value sit in a few clauses: break options, rent review mechanisms, repairing obligations, service charge caps, alienation and any landlord obligations. Practising a one-page abstract on real leases teaches you to find those clauses fast and know which to hand to your solicitor.

                ## Milestones
                1. A one-page abstract template covering parties, term, rent, reviews, breaks, repair, service charge, use and alienation.
                2. Three leases abstracted, one each from office, retail and industrial if possible.
                3. Your abstracts compared with a solicitor's report on the same leases where available.
                4. A list of clause types that always go to the solicitor.

                ## Notes
                An abstract is a reading aid, not a legal opinion. Your solicitor's report on title and leases is what you rely on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three leases abstracted on a standard template and checked against a solicitor's report, with a referral list of clause types."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a one-page lease abstract template"
                - "Abstract one office, one retail and one industrial lease"
                - "Compare your abstracts with a solicitor's lease report"
                - "Abstract one lease from a live data room for practice @recurring(monthly:3)"
            - name: Service charge and recoverable costs review
              description: |-
                ## Purpose
                Whether costs sit with the landlord or pass through to tenants decides the real net income, and memoranda rarely show the shortfall on void units or capped items. Learning to read service charge budgets, year-end reconciliations and lease caps shows how much of the running cost you would actually carry.

                ## Milestones
                1. The difference between net, gross and capped service charge leases written in your own words.
                2. Two years of service charge budgets and reconciliations read for one property.
                3. Non-recoverable costs and void shortfalls totalled.
                4. Net income in the memorandum adjusted for those costs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For one property, non-recoverable costs and void shortfalls are totalled from service charge records and net income adjusted in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a plain note on net, gross and capped service charges"
                - "Request two years of service charge budgets and reconciliations"
                - "Total the costs the landlord cannot recover"
                - "Adjust the memorandum's net income for the shortfall"
            - name: Retail tenant trading and occupancy cost check
              description: |-
                ## Purpose
                Shop tenants paying rent they cannot afford are each a future void, whatever the lease length says. Learning to read the signals available at bid stage, such as rent as a share of turnover where it is disclosed, store closure news, footfall in the parade and the tenant's published accounts, helps you price retail income realistically.

                ## Milestones
                1. The main retail tenants' published accounts or credit reports checked.
                2. Any turnover data in the data room turned into an occupancy cost ratio.
                3. Footfall and neighbouring vacancies observed on a weekday and a Saturday.
                4. Each retail tenant rated as secure, watch or at risk with a reason.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every retail tenant in one target property is rated secure, watch or at risk, backed by accounts, footfall notes and any turnover data."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull published accounts or credit reports for the main tenants"
                - "Work out rent as a share of turnover where sales are disclosed"
                - "Visit the parade on a weekday and a Saturday"
                - "Rate each tenant secure, watch or at risk with a reason"
            - name: Site tour checklist for office, retail and industrial
              description: |-
                ## Purpose
                First tours usually last an hour with the seller's agent, and buyers who walk round without a plan come back remembering the reception and nothing about the roof. A checklist by sector, covering plant, roof, lifts, loading, eaves height, yard, parking and signs of tenant trouble, makes that hour count.

                ## Milestones
                1. A tour checklist with a common section and separate office, retail and industrial sections.
                2. Questions for the agent written in advance for each tour.
                3. The checklist used on one tour, with photographs filed against each item.
                4. Items for the building surveyor flagged from the tour notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A sector-specific tour checklist has been used on at least one tour and produced a written list of items for the surveyor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a common section covering roof, plant, access and parking"
                - "Add office, retail and industrial sections with their own checks"
                - "Write agent questions before the next tour"
                - "File tour photographs against each checklist item"
            - name: Negotiation call practice with a peer
              description: |-
                ## Purpose
                Price and terms are often settled in two or three phone calls with the seller's agent, and the buyer who has not rehearsed concedes more than they planned. Practising the key calls, pushing for exclusivity, defending a price, asking for a reduction after diligence, with a peer playing the agent builds the calm that wins terms.

                ## Milestones
                1. Three scripts written: exclusivity request, defending your price and renegotiating after diligence.
                2. Each script rehearsed with a peer playing the agent.
                3. Your walk-away point and one tradeable concession written before each real call.
                4. A short note after each real call on what worked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three negotiation scripts rehearsed with a peer, and notes kept on at least two real calls."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write three short call scripts with your opening and fallback"
                - "Ask a peer to play the seller's agent for each script"
                - "Write your walk-away point before every real call"
                - "Rehearse one negotiation call with a peer @recurring(monthly:14)"
            - name: Choosing a sector focus among office, retail and industrial
              description: |-
                ## Purpose
                Each sector asks for different knowledge: office buyers live with lease breaks and fit-out costs, retail buyers with tenant trading and parade health, industrial buyers with yard space, eaves height and power. Choosing a primary sector for the next two years, on evidence rather than headlines, lets you build broker relationships and pricing instinct where it counts.

                ## Milestones
                1. The three sectors compared on lot sizes you can afford, lender appetite, management intensity and your own knowledge.
                2. Two brokers per sector asked what buyers like you are winning.
                3. A primary sector and a secondary sector chosen with partners.
                4. The buy box updated to match.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of office, retail and industrial with a primary and secondary sector chosen and the buy box updated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare the three sectors on four criteria in a short table"
                - "Ask two brokers in each sector what small buyers are winning"
                - "Agree a primary and secondary sector with partners"
                - "Update the buy box with the chosen sectors"
            - name: Single-let or multi-let property decision
              description: |-
                ## Purpose
                Single-let buildings live or die with one tenant and one lease event, while multi-let estates spread the risk but need active management and service charge administration. Deciding which suits your capital, team and appetite for void risk stops you bidding on both and doing neither well.

                ## Milestones
                1. Income risk, management workload and exit market compared for single-let and multi-let.
                2. Your available management time and team written down honestly.
                3. A preference recorded, with the conditions under which you would buy the other kind.
                4. The buy box updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written preference for single-let or multi-let, with exceptions stated and reflected in the buy box."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the risks and workload of single-let and multi-let assets"
                - "Write how many hours a month you can give to management"
                - "Record your preference and the exceptions"
                - "Add the preference to the buy box"
            - name: Asset purchase or company purchase with advisers
              description: |-
                ## Purpose
                Some commercial properties are offered inside the company that owns them, and buying the company rather than the building can change transfer taxes, inherited liabilities and diligence scope. The decision belongs to your solicitor and tax adviser, but preparing the questions and costs for them means the choice is made before the offer, not halfway through the contract.

                ## Milestones
                1. The seller's preferred route confirmed with the broker.
                2. Questions for your solicitor and tax adviser written: liabilities, taxes, diligence and lender view.
                3. Their written advice on both routes received.
                4. The chosen route reflected in the offer letter.

                ## Notes
                This is a legal and tax question. Your advisers decide whether a company purchase suits you; the project is about asking early.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written advice from solicitor and tax adviser on asset versus company purchase is on file before the offer is submitted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the broker whether the seller prefers selling the company"
                - "Write questions for your solicitor and tax adviser"
                - "Ask your lender whether it will lend to a purchased company"
                - "Record the advisers' recommendation in the deal file"
            - name: Offer letter and heads of terms template
              description: |-
                ## Purpose
                Offers that arrive as a one-line email lose to offers that show price, buyer identity, funding, timetable and conditions on one clean page. A reusable offer letter and heads of terms template, checked by your solicitor once, lets you submit a strong bid in an evening and stops you forgetting exclusivity or the diligence period under pressure.

                ## Milestones
                1. An offer letter template covering price, buyer, funding, deposit, exclusivity, diligence period, conditions and completion date.
                2. A heads of terms template for the agreed deal.
                3. Both templates reviewed once by your solicitor.
                4. The funding statement and adviser names pre-filled.

                ## Notes
                Make clear in the letter that it is subject to contract unless your solicitor advises otherwise.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Solicitor-reviewed offer letter and heads of terms templates exist with funding and adviser details pre-filled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft an offer letter outline with the eight standard headings"
                - "Add a heads of terms template for agreed deals"
                - "Send both templates to your solicitor for one review"
                - "Pre-fill the funding statement and adviser names"
            - name: Investment memo template for partners
              description: |-
                ## Purpose
                Partners and lenders want the same story every time: the property, the income, the risks, the price and why now. A short investment memo template, filled in before every bid, forces the thinking to happen before the offer goes out and gives partners a fair chance to say no.

                ## Milestones
                1. A memo template with sections for asset, income, tenants, risks, price, returns, funding and recommendation.
                2. A sign-off rule agreed with partners for who approves a bid.
                3. One past deal written up in the template as a test.
                4. The template stored with the offer letter template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An investment memo template and a written bid approval rule exist, tested on one past deal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the eight sections every bid memo needs"
                - "Agree with partners who approves a bid and how fast"
                - "Write up one past deal in the template as a test"
                - "Save the template beside the offer letter template"
            - name: Sale contract negotiation priorities list
              description: |-
                ## Purpose
                Sale contracts, called a purchase and sale agreement in some countries, run long, and buyers who fight every clause slow the deal and spend goodwill on points that do not matter. A ranked list of the terms you care about, such as deposit release, diligence termination rights, warranties, rent arrears treatment and completion conditions, tells your solicitor where to hold firm.

                ## Milestones
                1. A ranked list of contract terms in three tiers: must have, want, can concede.
                2. The list discussed with your solicitor and adjusted for local practice.
                3. A note of what is market standard in your jurisdiction from the solicitor.
                4. The list attached to the investment memo template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-tier contract priorities list, reviewed by your solicitor, is attached to the investment memo template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write every contract term you have an opinion on"
                - "Sort them into must have, want and can concede"
                - "Ask your solicitor what is market standard locally"
                - "Attach the agreed list to the memo template"
            - name: Deposit, exclusivity and diligence period choices
              description: |-
                ## Purpose
                A large deposit going non-refundable on day one wins bids but leaves you exposed if diligence finds a problem, while a long diligence period with a refundable deposit protects you but loses to sharper buyers. Setting your standard positions, and how far you will move on each, lets you shape a bid on terms as well as price.

                ## Milestones
                1. Typical deposit sizes, exclusivity lengths and diligence periods for your sector confirmed with brokers and your solicitor.
                2. Your standard position and furthest concession written for each.
                3. The point at which the deposit becomes non-refundable defined in your template.
                4. The amount of deposit you can afford to lose agreed with partners.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written standard positions and limits for deposit, exclusivity and diligence period, with a loss limit agreed by partners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two brokers what deposits and periods are winning now"
                - "Ask your solicitor how deposits are usually held locally"
                - "Write your standard and furthest position for each term"
                - "Agree with partners how much deposit you could afford to lose"
            - name: Renegotiate or walk away after diligence findings
              description: |-
                ## Purpose
                Diligence nearly always finds something: a roof near the end of its life, a tenant planning to break, contamination, a title problem. Having a rule for which findings mean a price reduction, which mean a retention or indemnity and which mean walking away keeps the decision about numbers rather than sunk costs and fatigue.

                ## Milestones
                1. Every diligence finding logged with cost, likelihood and who flagged it.
                2. Each finding classed as accept, reprice, retain or walk away.
                3. A revised price or terms request written with evidence attached.
                4. A walk-away decision recorded in writing if limits are breached.

                ## Notes
                Start from the **Risk register** template for the findings log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A findings register with each item classed, and either a documented price change request or a written walk-away decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log every diligence finding in a risk register"
                - "Get a cost estimate for each physical or legal issue"
                - "Class each finding as accept, reprice, retain or walk away"
                - "Send the repricing request with the evidence attached"
            - name: First bid on a marketed commercial property
              description: |-
                ## Purpose
                The first real bid teaches more than months of reading, but it needs to be on a deal that fits the buy box and at a price you would genuinely pay. Running the whole sequence once, tour, screening, memo, partner sign-off and offer letter before the call for offers date, proves the machinery works.

                ## Milestones
                1. One marketed deal inside the buy box toured and screened.
                2. An investment memo signed off by partners.
                3. An offer letter submitted before the call for offers deadline.
                4. A debrief with the broker whatever the result.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offer letter on a buy box deal was submitted on time with a signed-off memo, followed by a broker debrief note."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick one live deal inside the buy box from the tracker"
                - "Book a tour with the seller's agent"
                - "Write the investment memo and get partner sign-off"
                - "Submit the offer letter before the deadline"
            - name: Best and final offer round
              description: |-
                ## Purpose
                When a marketed deal draws several close bids, the agent asks for best and final offers, often with forty-eight hours' notice. Preparing your maximum price, the terms you can sweeten and the evidence of certainty in advance stops a panicked overbid and gives you something other than price to compete on.

                ## Milestones
                1. Your absolute maximum price written and approved before the round opens.
                2. Non-price improvements listed: shorter diligence, larger deposit, faster completion, fewer conditions.
                3. A revised offer letter ready to send within twenty-four hours.
                4. The outcome and the winning terms recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A best and final offer was submitted inside the agent's deadline at or below the pre-approved maximum, with the result recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree your absolute maximum price with partners in writing"
                - "List non-price terms you could improve"
                - "Prepare the revised offer letter in advance"
                - "Record the outcome and winning terms in the price log"
            - name: Second visit with surveyor and agent
              description: |-
                ## Purpose
                Once heads of terms are agreed, a second visit with your building surveyor, and access to plant rooms, roofs and vacant units, turns a sales tour into evidence. Planning the day so the right people see the right spaces avoids a third visit in the middle of the exclusivity period.

                ## Milestones
                1. Access agreed with the seller's agent for roof, plant, vacant units and any tenant areas.
                2. Surveyor and environmental consultant briefed with tour notes and the memorandum.
                3. Tenant contact arranged through the agent where allowed.
                4. A written list of follow-up items within two days of the visit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A second visit was held with the surveyor and a dated follow-up list was sent within two working days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent for access to roof, plant and vacant units"
                - "Brief the surveyor with your tour notes and the memorandum"
                - "Ask whether you may meet the largest tenant"
                - "Send the follow-up list within two days of the visit"
            - name: Tenant estoppel and lender acknowledgement collection
              description: |-
                ## Purpose
                Tenant certificates, known in some markets as estoppels, confirm the rent, deposit and lease terms in the tenant's own words, and lenders often need agreements with tenants on what happens if the loan defaults. Collecting them takes weeks because tenants have no reason to hurry, so starting early and chasing politely protects the completion date.

                ## Milestones
                1. The certificates and lender documents required by the contract and the loan listed per tenant.
                2. Requests sent through the seller with a clear return date.
                3. Returned certificates checked against the rent roll and lease abstracts.
                4. Any discrepancies raised with the seller and your solicitor before completion.

                ## Notes
                Your solicitor and lender's solicitor decide which documents are needed and in what form.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every certificate required by the contract and lender is returned, checked against the rent roll, with discrepancies resolved before completion."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the certificates each tenant must return"
                - "Ask the seller to send requests with a return date"
                - "Check each returned certificate against the rent roll"
                - "Raise any mismatch with the seller's solicitor"
            - name: Completion day and funds flow
              description: |-
                ## Purpose
                Completion day brings together the equity, the loan, the deposit, apportioned rents and service charges, transfer taxes and fees, and a single wrong figure can delay the transfer by a day. Agreeing the funds flow and the completion statement with your solicitor in advance, with the equity already in the client account, makes the day uneventful.

                ## Milestones
                1. A completion statement agreed with apportionments of rent, service charge and deposits.
                2. A funds flow showing every source and payment, checked against the loan offer.
                3. Equity in the solicitor's client account at least one working day before completion.
                4. Building insurance on risk from the moment of completion.

                ## Notes
                Start from the **Operational checklist** template. Confirm any bank details by phone on a known number before sending money: completion is a favourite target for payment fraud.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Completion took place on the contract date with an agreed completion statement, funds flow and insurance in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your solicitor for the draft completion statement a week ahead"
                - "Check rent and service charge apportionments against the rent roll"
                - "Confirm the solicitor's bank details by phone before transferring equity"
                - "Put building insurance on risk from completion"
            - name: First thirty days after completion
              description: |-
                ## Purpose
                The month after completion is when rent can go to the wrong account, service contracts lapse and tenants decide what kind of landlord you are. A short handover plan, tenant letters, rent redirection, deposits transferred, contracts novated or replaced and the asset plan handed to whoever manages the building, closes the acquisition properly.

                ## Milestones
                1. Notice of change of landlord sent to every tenant with new payment details.
                2. Rent deposits and service charge balances received from the seller and reconciled.
                3. Service contracts kept, novated or replaced, with insurance and utilities in your name.
                4. A handover note passed to the asset or property manager.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Within thirty days of completion every tenant has written notice, deposits are reconciled and a handover note is with the manager."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Send change of landlord letters with new payment details"
                - "Reconcile rent deposits and service charge balances from the seller"
                - "Decide which service contracts to keep, novate or replace"
                - "Write the handover note for the asset manager"
            - name: First commercial purchase after residential lets
              description: |-
                ## Purpose
                Residential landlords moving into commercial property meet longer leases, tenant covenants, service charges and a professional seller's agent who expects formal offers. Planning a first purchase at a modest lot size, a small shop with flat above or a single industrial unit, with advisers chosen for commercial work, avoids paying to learn the differences.

                ## Milestones
                1. The main differences from residential letting written down: lease terms, repair, service charge, valuation and lending.
                2. A first-deal buy box at a modest lot size.
                3. Commercial-specialist solicitor and surveyor on the bench.
                4. One small commercial property toured and screened.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of residential versus commercial differences, a first-deal buy box and one toured and screened property."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List what changes from residential: leases, repair, lending, valuation"
                - "Write a first-deal buy box at a lot size you can absorb"
                - "Ask your residential solicitor to refer a commercial specialist"
                - "Tour and screen one small commercial property"
            - name: Buying your own business premises
              description: |-
                ## Purpose
                Owning your premises ends the rent cheque, but it ties capital into a building and brings the repair bills with it. Treating the purchase as a business decision, comparing owning with leasing over ten years, checking lender appetite for owner-occupiers and making sure the building suits the business as it grows, keeps the operating company's needs first.

                ## Milestones
                1. Space needs for the next five to ten years written down.
                2. Owning versus leasing compared over ten years with your accountant.
                3. Lender appetite for an owner-occupier loan checked.
                4. A shortlist of two or three buildings that fit, with the decision recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask your accountant whether the building should sit in the trading company or a separate one.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written own-versus-lease comparison reviewed by your accountant and a recorded decision on a shortlisted building."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the space your business needs now and in five years"
                - "Ask your accountant to compare owning and leasing over ten years"
                - "Ask your bank about owner-occupier lending terms"
                - "Shortlist two or three buildings from agents"
            - name: Acquisitions analyst track record log
              description: |-
                ## Purpose
                Acquisitions analysts and associates are hired and promoted on the deals they worked, yet few keep a record until they need a CV. A private log of your role on each deal, the skills used and the outcome, with no confidential figures or names your employer would object to, makes the next interview or promotion case straightforward.

                ## Milestones
                1. A log format with deal type, sector, size band, your role, skills used and outcome.
                2. Every deal from the last two years entered in anonymised form.
                3. Your employer's confidentiality policy read and the log checked against it.
                4. Three deal stories written for interviews.

                ## Notes
                Keep size bands, not exact prices, and no tenant or seller names. Your employment contract decides what you may keep.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An anonymised track record log covering two years of deals, checked against your employer's policy, with three interview stories."
                cadence: rolling
              tasks:
                - "Read your employer's confidentiality policy"
                - "Set up the log with size bands instead of exact prices"
                - "Add each deal you worked on to the track record log @recurring(monthly:28)"
                - "Write three deal stories for interviews"
            - name: Sale and leaseback purchase from an occupier
              description: |-
                ## Purpose
                Businesses sell their buildings and lease them back to release capital, giving a buyer a tenant who already knows the building and a fresh long lease. The price only makes sense if the rent is sustainable for that business and the building would let to someone else, so the work is checking the occupier and the building's second life.

                ## Milestones
                1. The occupier's published accounts and credit reports reviewed.
                2. Proposed rent compared with market rent for the building.
                3. Lease terms agreed in principle: length, reviews, repair, breaks.
                4. A view on how the building would relet if the occupier left.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written assessment of the occupier, the rent against market and the reletting case, with a bid or pass decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the occupier's last three years of published accounts"
                - "Ask a letting agent for the building's market rent"
                - "Draft proposed lease terms with your solicitor"
                - "Write how the building would relet to another occupier"
            - name: Buying a part-vacant building
              description: |-
                ## Purpose
                Part-vacant offices and estates trade at a discount because the buyer carries empty rates, service charge shortfalls and letting risk. Planning the letting before you bid, with a letting agent's view on rent, incentives, time to let and refurbishment cost, tells you whether the discount pays for the risk.

                ## Milestones
                1. A letting agent's written view on rent, incentive and time to let for each vacant unit.
                2. Refurbishment cost estimated for the vacant space.
                3. Holding costs during the void totalled: rates, service charge shortfall, insurance.
                4. The price adjusted for letting risk and the bid decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A letting plan and void cost estimate for every vacant unit, with the bid price adjusted and recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a letting agent for rent, incentive and time to let"
                - "Get a refurbishment estimate for the vacant space"
                - "Total holding costs for the expected void"
                - "Adjust the bid for the letting risk"
            - name: Cross-border commercial purchase preparation
              description: |-
                ## Purpose
                Buying commercial property in another country brings different contract customs, transfer taxes, foreign ownership rules, currency risk and lenders who may not lend to an overseas buyer. Preparing with local advisers before bidding stops a good deal falling over on a rule you could have checked in an hour.

                ## Milestones
                1. Foreign ownership rules and approvals checked with a local solicitor.
                2. Transfer taxes, annual taxes and tax on rental income outlined by a local tax adviser.
                3. Local lender appetite for non-resident buyers confirmed.
                4. Currency exposure and how equity will be moved discussed with your bank.

                ## Notes
                Rules for foreign buyers vary widely, and some countries need government approval before completion. Take local advice early.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written notes from a local solicitor, tax adviser and lender on ownership rules, taxes and lending, before any bid in that country."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find a local commercial property solicitor through a referral"
                - "Ask about foreign ownership approvals and timelines"
                - "Ask a local tax adviser for an outline of purchase and holding taxes"
                - "Talk to your bank about moving equity and currency exposure"
            - name: Portfolio purchase price allocation
              description: |-
                ## Purpose
                When several properties are sold as one portfolio, the headline price hides strong and weak assets, and lenders, tax advisers and future buyers will want a price for each. Allocating the price property by property, and knowing which assets you would sell on, keeps you from overpaying for the weak ones to win the good ones.

                ## Milestones
                1. Each property in the portfolio screened on its own sheet.
                2. A price allocated to each property with the reasoning noted.
                3. Assets marked as core hold or likely sale.
                4. The allocation reviewed with your tax adviser and lender.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A property-by-property price allocation, with hold or sell marked, reviewed by your tax adviser and lender."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Screen each portfolio property on its own sheet"
                - "Allocate a price to each property and note why"
                - "Mark each asset as core hold or likely sale"
                - "Ask the agent to summarise the allocation for your tax adviser and lender"
            - name: Forward purchase of a pre-let building
              description: |-
                ## Purpose
                Buying a building before it is finished, already let to a tenant, can secure new stock in a tight market, but the buyer then carries construction and completion risk. Understanding how forward purchases are paid, staged or on completion, and what protects you if the developer fails, makes the bid an informed one.

                ## Milestones
                1. The payment structure understood: on completion, staged against progress, or forward funded.
                2. The agreement for lease with the tenant reviewed by your solicitor.
                3. A monitoring surveyor's role and the protections against developer failure agreed in principle.
                4. Completion date risk and its effect on the deal written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note on payment structure, tenant agreement, monitoring and developer failure protections for one forward purchase."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the broker how the seller proposes to be paid"
                - "Ask your solicitor to review the tenant's agreement for lease"
                - "Get a quote from a monitoring surveyor"
                - "Write what happens to your money if the developer fails"
            - name: Rent guarantees, top-ups and retentions
              description: |-
                ## Purpose
                Where a building has rent-free periods running, vacant units or a short lease, sellers sometimes offer rent guarantees, rent top-ups or a retention from the price to close the gap. Knowing how these work, how they are secured and when they run out lets you accept them as real value rather than a promise.

                ## Milestones
                1. Each gap in income listed: rent-free periods, voids, upcoming expiries.
                2. The form of protection proposed for each, guarantee, top-up or retention, with amount and length.
                3. How each is secured, for example held by the solicitors or paid at completion, confirmed.
                4. The protections written into the heads of terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every income gap has a named protection with amount, length and security written into the heads of terms."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every rent-free period, void and short lease"
                - "Propose a guarantee, top-up or retention for each gap"
                - "Ask your solicitor how each should be secured"
                - "Write the agreed protections into the heads of terms"
            - name: Tax-deferred exchange and reinvestment deadlines
              description: |-
                ## Purpose
                Some countries let investors defer tax on a sale if the proceeds are reinvested in another property within strict time limits, a US like-kind exchange being one example. Where such a relief applies, the acquisition timetable is set by the tax deadline, so building the search around it with your tax adviser avoids a rushed purchase or a lost relief.

                ## Milestones
                1. Your tax adviser's written confirmation of whether a relief applies and its deadlines.
                2. Any intermediary or account the rules require arranged before the sale.
                3. The identification and completion deadlines put on the critical dates list.
                4. A shortlist of replacement properties ready before the identification deadline.

                ## Notes
                Rules differ completely between countries and missing a deadline usually loses the relief. Your tax adviser sets the plan; this project keeps the dates.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written tax advice on any relief, required intermediaries arranged and every deadline on the critical dates list before the sale completes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your tax adviser whether any reinvestment relief applies"
                - "Arrange any intermediary the rules need before the sale"
                - "Put every relief deadline on the critical dates list"
                - "Build a shortlist of replacement properties early"
            - name: Personal acquisitions playbook
              description: |-
                ## Purpose
                After a handful of closings, the lessons sit scattered across emails and memory: which brokers deliver, what diligence found, which terms mattered. Writing your own playbook, the buy box, screening sheet, templates, adviser bench and lessons from each deal in one place, makes the next acquisition faster and lets you hand the process to a colleague or partner.

                ## Milestones
                1. A playbook gathering the buy box, screening sheet, memo, offer letter and contract priorities.
                2. One page of lessons from each closed or lost deal.
                3. A step-by-step timeline from memorandum to thirty days after completion.
                4. The playbook read and challenged by a partner or colleague.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook combining templates, a timeline and lessons from each deal, reviewed by a partner or colleague."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Collect the buy box, screening sheet and templates in one folder"
                - "Write one page of lessons for each deal so far"
                - "Draft the timeline from memorandum to day thirty"
                - "Revise the playbook with the year's lessons @recurring(yearly)"
---

# Commercial Real Estate Acquisitions

This area is for founders, small property businesses and acquisitions professionals buying commercial property: offices, shops, retail parades and industrial units, from the first offering memorandum to the keys. It starts with the foundations (a buy box, money you can prove, an adviser bench and a buying entity), then the weekly and monthly machinery of broker calls and memorandum triage, the skills of reading rent rolls and leases, the decisions on sector, structure and contract terms, the dated moments from first bid to closing day, situations such as a first commercial purchase or buying your own premises, and specialist work like portfolio deals and forward purchases.

What repeats is a weekly broker call slot, a weekly memorandum triage session and a Friday critical dates check on live deals, a monthly pipeline review, monthly logs of guide prices and abort costs, quarterly buy box and lost bid reviews, and a yearly look back at every deal seen. Vendor suits the adviser bench, Meeting notes suits broker calls, Metrics log suits the price log, Risk register suits diligence findings, Purchase decision suits buying your own premises and Operational checklist suits closing day. None of this is legal, tax or investment advice: agree contracts, structures and tax treatment with your solicitor, accountant and a regulated adviser where your country requires one. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
