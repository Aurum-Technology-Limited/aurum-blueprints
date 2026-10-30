---
id: real-estate-development.site-finding-and-land-acquisition
name: Site Finding and Land Acquisition
description: "A land buying brief, target areas, a land agent network and owner outreach, fast site screening, site reports, heads of terms and the legal steps to a binding contract."
category: business
version: 1.0.0
tags: [real-estate-development, site-finding-and-land-acquisition, founder, small-business, land-acquisition, site-sourcing, heads-of-terms, landowners]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - risk-register
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Site Finding and Land Acquisition
          description: "Finding and securing development land: target areas, land agents and owners, site reports, heads of terms and the legal steps to a binding contract."
          projects:
            - name: Land buying brief for your next scheme
              description: |-
                ## Purpose
                Agents and owners take you seriously when you can say in one sentence what you buy: site size, use, location, price band and whether you need planning in place. Without a written brief every listing looks possible, and weeks go on sites you could never fund or build. One page now saves dozens of wasted viewings.

                ## Milestones
                1. A one-page brief stating site size range, intended use and unit count range.
                2. Target price band and maximum deposit you can commit, agreed with any partner.
                3. Planning position you will accept written down: allocated, consented, or unconsented with conditions.
                4. Deal-breakers listed, such as flood zone, no vehicle access or listed buildings.
                5. The brief saved as a PDF ready to send to agents.

                ## Notes
                Keep it short enough to read on a phone. Agents file long briefs and forget them.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page land buying brief with size, use, location, price band and deal-breakers exists as a PDF and has been sent to at least one agent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the site size, use and unit range you want in three lines"
                - "Set the price band and the deposit you can commit without new funding"
                - "List five deal-breakers that rule a site out immediately"
                - "Export the brief as a one-page PDF with your contact details"
            - name: Target area shortlist from local market data
              description: |-
                ## Purpose
                Looking everywhere means knowing nowhere well enough to price land. Picking two or three target areas from sale prices, rents, transport links and housing need lets you learn the agents, the planners and the land values in depth. Founders who narrow early usually make their first offer months sooner.

                ## Milestones
                1. Five candidate areas compared on new-build sale prices, rents and build activity.
                2. Each area scored on transport, schools and employment within a set distance.
                3. Two or three target areas chosen with the reasons written down.
                4. A boundary for each target area drawn on a map you can share.

                ## Notes
                Choose areas you can reach in under an hour. You will visit sites there many times before buying one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three target areas are chosen, each with a scored comparison and a mapped boundary saved in the acquisition folder."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List five areas within an hour of where you live or work"
                - "Pull recent new-build sale prices and rents for each from public data"
                - "Score each area on transport, schools and jobs on the same scale"
                - "Draw the chosen area boundaries on a shared online map"
                - "Revisit the target areas against fresh price data @recurring(yearly)"
            - name: Local plan and land allocation map
              description: |-
                ## Purpose
                The local plan tells you where the council expects homes and commercial space to go, which sites are already allocated and where development is resisted. Reading it for each target area, together with any brownfield or housing land register, turns policy documents into a map of where to hunt first.

                ## Milestones
                1. The adopted local plan and any emerging plan for each target area downloaded.
                2. Allocated sites, settlement boundaries and protected land marked on one map.
                3. Any brownfield or housing land register entries for the areas listed.
                4. Policy points that affect density, affordable housing or design noted for each area.

                ## Notes
                Emerging plans matter as much as adopted ones: land values move when a draft allocation is published.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map for each target area shows allocated sites, settlement boundaries and register entries, with key policy notes attached."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download the adopted and emerging local plan for your first target area"
                - "Mark allocated sites and settlement boundaries on your area map"
                - "List entries from any brownfield or housing land register for the area"
                - "Note the density, affordable housing and design policies in a short table"
                - "Check the council website for local plan updates @recurring(yearly)"
            - name: Site sourcing budget and abortive cost fund
              description: |-
                ## Purpose
                Most sites you chase will not complete, and each one can cost legal fees, surveys and a planning consultant's opinion before it falls away. Setting a yearly sourcing budget and a separate fund for abortive costs stops a failed deal from draining the deposit you need for the next one.

                ## Milestones
                1. A yearly sourcing budget covering data subscriptions, mailings and travel.
                2. An abortive cost fund sized for at least two failed deals at your typical site size.
                3. A rule written for how much may be spent on a site before heads of terms.
                4. The budget shared with any partner or co-founder and agreed.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sourcing budget, an abortive cost fund amount and a spend-before-heads-of-terms limit are agreed and recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate legal, survey and consultant costs for one deal that fails late"
                - "Set the abortive cost fund at two times that figure"
                - "Write the maximum spend allowed on a site before heads of terms"
                - "Compare actual sourcing spend against the budget @recurring(quarterly)"
            - name: Land agent register for target areas
              description: |-
                ## Purpose
                In most markets a handful of land and new homes agents see the majority of sites before they are widely marketed. Knowing who they are, what they sell and how they prefer to be contacted is the difference between receiving a site the day it comes in and reading about it once it has sold.

                ## Milestones
                1. Every land, new homes and commercial agent active in each target area listed.
                2. Each entry noting the named contact, typical site size and recent land sales.
                3. Agents ranked by how often they handle sites that fit your brief.
                4. A first contact date recorded for each of the top ten.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register lists at least ten land agents across the target areas with named contacts, typical site sizes and a first contact date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search land listings portals for agents selling in each target area"
                - "Add each agent's named land contact and typical site size to the register"
                - "Rank agents by how many recent sites fit your brief"
                - "Refresh the register with new agents and departures @recurring(quarterly)"
            - name: Acquisition team of solicitor, surveyor and planner
              description: |-
                ## Purpose
                When an owner accepts your offer, the clock starts, and finding a property solicitor and a planning consultant then costs you days and credibility. Agreeing terms in advance with a solicitor who handles land, a surveyor and a planning consultant means you can name your team in every offer letter.

                ## Milestones
                1. A property solicitor with land and development experience engaged on agreed rates.
                2. A planning consultant willing to give quick opinions on sites for a fixed fee.
                3. A surveyor or valuer for land values and measured surveys identified.
                4. Contact details and fee terms for all three saved in one note.

                ## Notes
                Ask each for two recent land deals they worked on. General conveyancers often miss overage, access and title points.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A land solicitor, planning consultant and surveyor have each agreed fee terms in writing and are named in a team contact note."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two local developers which land solicitor they use"
                - "Request fee quotes for a site opinion from two planning consultants"
                - "Agree hourly or fixed rates in writing with your chosen solicitor"
                - "Save the team's contact details and fee terms in one note"
            - name: Site tracker for every lead
              description: |-
                ## Purpose
                Sites you rejected eighteen months ago can come back at a lower price or with a new planning position, and only a record will tell you. One tracker holding every site, its source, owner, status and reason for rejection stops duplicate effort and protects you when two agents claim the same introduction.

                ## Milestones
                1. A spreadsheet or database with columns for address, source, owner, size, status and next action.
                2. Introduction date and introducing agent recorded for every site.
                3. Status values fixed: new, screened, visited, offered, agreed, dead.
                4. All current leads entered.

                ## Notes
                The introduction date matters: it decides who is owed a fee if two agents send the same site.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every current site lead sits in one tracker with its source, introduction date, status and next action filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the tracker with address, source, owner, size, status and next action columns"
                - "Enter every site lead currently in your inbox or notebook"
                - "Add the introduction date and agent for each site"
                - "Update statuses and next actions for every live lead @recurring(weekly:fri)"
            - name: Credentials pack for landowners and agents
              description: |-
                ## Purpose
                Owners selling land worry most about buyers who agree a price and then fail to complete. A short pack showing who you are, what you have built or bought, how you fund deals and who your advisers are answers that worry before it is asked. New developers without a track record can show their team and funding route instead.

                ## Milestones
                1. A two-page pack covering your company, track record or team, and funding route.
                2. Photos and short summaries of any past schemes, or of your partners' schemes.
                3. A proof of funds letter or a lender's or investor's letter of support ready to attach.
                4. The pack sent to every agent on the register.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page credentials pack with funding evidence attached has been sent to every agent on the land agent register."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a two-page credentials pack from your notes"
                - "Gather photos and figures from past schemes or partners' schemes"
                - "Request a letter of support from your lender, investor or bank"
                - "Update the pack with new schemes and funding letters @recurring(quarterly)"
            - name: Fast site screening checklist
              description: |-
                ## Purpose
                You will see far more sites than you can visit, so the first look must take minutes, not days. A fixed checklist covering flood risk, access, planning designations, title and obvious constraints lets you kill weak sites early and spend your time on the few that might work.

                ## Milestones
                1. A screening checklist of ten to fifteen yes or no questions.
                2. Free public map sources for flood risk, designations and title noted beside each question.
                3. Pass, park or reject rules written for the answers.
                4. Five current leads screened with the checklist to test it.

                ## Notes
                Feasibility and massing come later. Screening only asks whether the site deserves that work.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written screening checklist with source links and pass, park or reject rules has been used on at least five leads."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten constraints that have killed sites in your area before"
                - "Find the free online map for flood risk and planning designations"
                - "Write pass, park and reject rules for the checklist answers"
                - "Screen five current leads and record the result in the tracker"
            - name: Weekly land listings scan
              description: |-
                ## Purpose
                Sites on land portals, agent websites and auction catalogues can go under offer within days in busy markets. A fixed weekly scan, done at the same time, means you see every marketed site in your target areas and can call the agent before the viewing list fills.

                ## Milestones
                1. A saved search on each land portal for each target area and size range.
                2. A list of agent websites that are not on the portals.
                3. A weekly slot of under an hour blocked in your calendar.
                4. Every new listing that passes screening entered in the tracker within a day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Saved searches and a weekly scan slot are set up, and four consecutive weeks of scans are logged in the tracker."
                cadence: rolling
              tasks:
                - "Save searches on two land portals for each target area"
                - "List agent websites that do not syndicate to the portals"
                - "Scan new land listings and log any that pass screening @recurring(weekly:mon)"
                - "Call the agent the same day on any listing that passes screening"
            - name: Monthly land agent call rota
              description: |-
                ## Purpose
                Agents send sites first to buyers they have spoken to recently and who have bought before or bid seriously. A monthly round of short calls to your top agents, with a note of what each said, keeps you in their minds without becoming a nuisance.

                ## Milestones
                1. Your top ten agents split into a rota of two or three calls a week.
                2. A short script: what you are buying now, what you have recently bid on.
                3. Notes of each call saved against the agent in the register.
                4. Feedback on rejected bids collected and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the top ten agents has been called at least once a month for three months, with notes saved in the register."
                cadence: rolling
              tasks:
                - "Split your top ten agents into weekly call groups"
                - "Write a three-line update on what you are buying now"
                - "Call this month's agents and save notes in the register @recurring(monthly:8)"
                - "Ask each agent what the winning bid looked like on sites you lost"
            - name: Planning application and refusal watch
              description: |-
                ## Purpose
                Refused applications, lapsed consents and outline approvals that never progressed often point to owners who want to sell or a developer who has given up. Watching the weekly planning lists in your target areas turns public records into leads that no agent has marketed yet.

                ## Milestones
                1. Weekly planning list alerts set up for each target area.
                2. A filter for applications refused, withdrawn or about to lapse.
                3. Each promising application logged in the tracker with the applicant and agent named.
                4. A short note of why it failed, taken from the decision notice.

                ## Notes
                Read the officer's report, not just the decision. It often says what would be acceptable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Planning alerts run for every target area and at least one refused or lapsing site per month is logged with the reason for refusal."
                cadence: rolling
              tasks:
                - "Sign up for weekly planning list alerts for each target area"
                - "Review the weekly list for refusals, withdrawals and lapsing consents @recurring(weekly:thu)"
                - "Read the officer's report for each promising refusal"
                - "Log the applicant, agent and refusal reason in the tracker"
            - name: Direct-to-owner letter campaign
              description: |-
                ## Purpose
                Many good sites belong to owners who have never thought of selling: a yard behind shops, a large garden, a disused garage court. A monthly batch of plain, honest letters to owners of parcels you have identified from maps and title records reaches them before anyone else does.

                ## Milestones
                1. A list of parcels that pass screening and are not on the market.
                2. Owner names and addresses taken from title records.
                3. A one-page letter explaining who you are and inviting a conversation.
                4. Batches of letters sent monthly and responses logged in the tracker.

                ## Notes
                Check the rules on direct marketing and personal data in your country, and keep a record of anyone who asks not to be contacted again.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three monthly batches of owner letters have been sent, with every response and opt-out logged in the tracker."
                cadence: rolling
              tasks:
                - "Pick twenty unmarketed parcels from your maps that pass screening"
                - "Buy title records to confirm the owner names and addresses"
                - "Write a plain one-page letter with a direct phone number"
                - "Send this month's batch of owner letters and log them @recurring(monthly:15)"
            - name: Monthly site pipeline review
              description: |-
                ## Purpose
                Without a fixed review, sites sit at "waiting to hear back" for months and real decisions slip. A monthly hour going through every live lead, with a next action and a kill date for each, keeps the pipeline honest and tells you whether sourcing effort is producing offers.

                ## Milestones
                1. A standing monthly review slot with any partner invited.
                2. Every live site given a next action, owner and date.
                3. Sites with no progress for three months moved to dead or parked.
                4. Count of sites screened, visited, offered and agreed recorded each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly reviews have been held, each ending with a next action for every live site and the funnel counts recorded."
                cadence: rolling
              tasks:
                - "Book a recurring one-hour pipeline review with your partner"
                - "Review every live site and set a next action and kill date @recurring(monthly:3)"
                - "Move stalled sites to parked or dead with a reason"
                - "Record this month's screened, visited, offered and agreed counts"
            - name: Auction catalogue review for land lots
              description: |-
                ## Purpose
                Land auctions sell plots with problems and plots with hidden value side by side, and the catalogue is often out only a few weeks before the sale. Reviewing every catalogue that covers your target areas, and screening the land lots quickly, gives you a second channel of sites with fixed timetables.

                ## Milestones
                1. A list of auction houses selling land in your target areas, with catalogue alert sign-ups.
                2. Each month's land lots screened with the checklist.
                3. Legal packs downloaded for any lot that passes screening.
                4. A decision to bid or pass recorded for each shortlisted lot.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Catalogue alerts are active for every relevant auction house and each month's land lots have a recorded bid or pass decision."
                cadence: rolling
              tasks:
                - "Sign up for catalogue alerts from auction houses selling local land"
                - "Screen this month's land lots against your checklist @recurring(monthly:20)"
                - "Download the legal pack for any lot that passes screening"
                - "Record a bid or pass decision for each shortlisted lot"
            - name: Land price comparables log
              description: |-
                ## Purpose
                Owners anchor on what a neighbour got, and agents quote land values loosely. Keeping your own log of land sales in target areas, priced per acre, per plot and per consented unit, lets you test asking prices and explain your offer with evidence rather than opinion.

                ## Milestones
                1. A log with address, date, size, planning status, price and price per unit.
                2. At least ten land sales entered per target area.
                3. Sources noted for each entry: title record, agent, auction result.
                4. A monthly entry routine so the log stays current.

                ## Notes
                Start from the **Metrics log** template. Always note whether planning was in place; it changes the price more than anything else.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A land comparables log holds at least ten sales per target area with planning status and price per unit, updated monthly."
                cadence: rolling
              tasks:
                - "Set up the log with price per acre, per plot and per consented unit"
                - "Pull recent land sale prices from title records and auction results"
                - "Ask agents for sold prices on land they have handled recently"
                - "Add this month's land sales and auction results to the log @recurring(monthly:25)"
            - name: Abortive cost tracking per site
              description: |-
                ## Purpose
                Legal fees, surveys and consultant opinions on sites that never complete are a real cost of doing business, and they add up quietly. Tracking them per site, against the fund you set, shows which kind of site burns money and when to stop spending on a deal that is going nowhere.

                ## Milestones
                1. A cost column for every site in the tracker.
                2. Every invoice for a site allocated to it within a week.
                3. Abortive costs totalled monthly against the fund.
                4. A note of the stage each failed deal reached before it died.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every site invoice is allocated in the tracker and a monthly abortive cost total is compared with the fund for three months running."
                cadence: rolling
              tasks:
                - "Add spend and stage-reached columns to the site tracker"
                - "Allocate this month's site invoices and total abortive costs @recurring(monthly:28)"
                - "Flag any site whose spend has passed your limit before heads of terms"
                - "Note the stage each failed deal reached when it fell away"
            - name: Follow-up with owners who said not yet
              description: |-
                ## Purpose
                "Not now" from a landowner usually means not yet: a death in the family, a retirement, a tax year or a planning change can turn a refusal into a sale. A quarterly, polite touch with every owner who has declined keeps you first in line when circumstances change.

                ## Milestones
                1. A list of every owner who declined, with their reason and preferred contact.
                2. A short, personal follow-up note or call scheduled each quarter.
                3. Any change in the owner's position logged in the tracker.
                4. Owners who ask not to be contacted again removed and recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every owner who declined has a logged follow-up each quarter for a year, with any change in position recorded."
                cadence: rolling
              tasks:
                - "List every owner who has declined, with their stated reason"
                - "Contact each declined owner with a short personal note @recurring(quarterly)"
                - "Log any change in an owner's circumstances or price expectations"
                - "Remove and record owners who ask not to be contacted"
            - name: Introducer and finder's fee network
              description: |-
                ## Purpose
                Architects, builders, solicitors handling probate and local estate agents hear about land long before it is marketed. A small network of introducers who know your brief and know you will pay a fair, written finder's fee brings sites to you rather than to the next developer.

                ## Milestones
                1. A standard introducer agreement drafted by your solicitor, with fee and the introduction rules.
                2. Ten introducers who have received your brief.
                3. A monthly contact routine with the most active introducers.
                4. Every introduction logged with its date to settle any later dispute.

                ## Notes
                Agree the fee in writing before any site details are shared. Disputes over who introduced a site are common and expensive.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed-off introducer agreement exists, ten introducers hold your brief and every introduction is logged with its date."
                cadence: rolling
              tasks:
                - "Ask your solicitor for a short standard introducer agreement"
                - "Send your brief to ten architects, builders and local agents"
                - "Contact your three most active introducers with an update @recurring(monthly:12)"
                - "Log every introduction with its date and introducer"
            - name: Reading a title register and title plan
              description: |-
                ## Purpose
                The title shows who owns the land, what it is subject to and what rights benefit it, and a two-minute read can reveal a covenant against building or a missing access right. Learning to read registers and plans yourself means you can screen sites without paying a solicitor for each one.

                ## Milestones
                1. The sections of a title register understood: property, proprietorship and charges, or your registry's equivalent.
                2. Restrictive covenants, easements and charges identified on three sample titles.
                3. A title plan compared against a site boundary on the ground or on aerial imagery.
                4. A list of title points you will always refer to your solicitor.

                ## Notes
                This is for screening. Your solicitor's report on title is still what you rely on before exchange.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three title registers have been read and annotated with covenants, easements and charges, and a list of referral points is written."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download three titles for sites in your tracker from the land registry"
                - "Mark covenants, easements and charges on each register"
                - "Overlay each title plan on aerial imagery to check the boundary"
                - "Write the title points you will always send to your solicitor"
            - name: Tracing owners of unregistered land
              description: |-
                ## Purpose
                Some of the best overlooked sites sit outside the land register, held by old companies, estates or families who have forgotten them. Knowing how to trace an owner through neighbours, old deeds, probate records, company registers and local knowledge opens up land other buyers give up on.

                ## Milestones
                1. The sources for tracing owners in your country listed: registry searches, probate, company records, electoral roll or equivalent.
                2. One unregistered parcel in a target area chosen to practise on.
                3. A trace log recording every source checked and what it showed.
                4. An owner or a confirmed dead end identified.

                ## Notes
                Some parcels have no traceable owner at all. Ask your solicitor before putting money into one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A trace log for one unregistered parcel shows each source checked and ends with an identified owner or a documented dead end."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the public sources for tracing landowners in your country"
                - "Pick one unregistered parcel from your area map"
                - "Speak to two neighbours about who has used or owned the land"
                - "Record every source checked in a trace log"
            - name: Desktop site review from maps and aerial imagery
              description: |-
                ## Purpose
                Before driving to a site you can learn most of its story from aerial photos, historic maps, street-level imagery and public data on flood, levels and protected trees. A desk review done well cuts wasted visits and means you arrive knowing what to look for.

                ## Milestones
                1. A list of free and paid map sources you will use, with logins saved.
                2. Historic maps checked for past uses such as fuel stations, tips or works.
                3. Access points, levels and neighbouring windows noted from imagery.
                4. A one-page desk review written for three sites in your tracker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-page desk reviews covering past use, access, levels and neighbours exist for three sites in the tracker."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the map, imagery and historic map sources you will use"
                - "Check historic maps of one site for past industrial uses"
                - "Note access, levels and overlooking from street and aerial imagery"
                - "Write a one-page desk review for three tracker sites"
            - name: Back-of-envelope land bid check
              description: |-
                ## Purpose
                Agents expect a view on price within days, long before a full appraisal is built. A simple one-page check, using sale values, a build cost per square metre, fees, finance and profit to give a rough maximum land price, tells you whether a site is worth the cost of a proper appraisal.

                ## Milestones
                1. A one-page calculator with rough sale value, build cost, fees, finance and profit lines.
                2. Build costs per square metre for your scheme type sourced from a cost guide or a quantity surveyor.
                3. The check run on three recent land sales to see if it lands near the sold price.
                4. A rule that any site passing the check goes to a full appraisal before an offer.

                ## Notes
                This is a filter, not a valuation. Your full development appraisal sets the bid.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page land bid check has been tested on three known land sales and a written rule links it to the full appraisal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a one-page sheet with sale value, cost, fees, finance and profit lines"
                - "Get a current build cost per square metre from a cost guide or surveyor"
                - "Run the check on three land sales from your comparables log"
                - "Write the rule for when a site moves to a full appraisal"
            - name: First meetings with landowners
              description: |-
                ## Purpose
                A landowner is often selling a family asset, a business yard or a retirement fund, and the first meeting decides whether they trust you with it. Preparing what you will ask, listening for what they really want and leaving with a clear next step wins sites that a higher bidder sometimes loses.

                ## Milestones
                1. A meeting plan covering the owner's goals, timing, tax worries and family views.
                2. Three practice questions that uncover why they might sell and when.
                3. Notes written within a day of each meeting.
                4. A follow-up letter sent within a week confirming what was discussed.

                ## Notes
                Start from the **Meeting notes** template. Never promise a price at the first meeting; promise a written proposal by a date.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two landowner meetings have been held with a written plan, notes within a day and a follow-up letter within a week."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five questions about the owner's goals, timing and family"
                - "Rehearse the meeting with a partner or mentor"
                - "Write your notes within a day of each owner meeting"
                - "Send a follow-up letter confirming what was agreed and the next step"
            - name: Land sale methods and how to bid in each
              description: |-
                ## Purpose
                Land is sold by private treaty, informal tender, formal tender, best and final offers and auction, and each rewards a different approach. Knowing the rules of each, and what agents mean by "best and final", stops you losing a site on a technicality or overpaying in a contest you misread.

                ## Milestones
                1. The main sale methods in your market written up with how bids are made and accepted.
                2. When a bid becomes binding noted for each method, confirmed with your solicitor.
                3. Two agents asked how they run tenders and what wins them.
                4. A one-page cheat sheet saved for future bids.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page cheat sheet sets out each local land sale method, how bids are made and when they bind, checked with your solicitor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the sale methods used for land in your target areas"
                - "Ask your solicitor when a bid becomes binding under each method"
                - "Ask two agents what usually wins their informal tenders"
                - "Write the one-page cheat sheet and save it with the brief"
            - name: Overage and clawback clauses explained
              description: |-
                ## Purpose
                Sellers of land often ask for overage: a share of extra value if you get a better planning consent or sell above a set price later. Understanding how overage is triggered, measured and secured lets you agree a clause you can live with instead of one that blocks your finance or your exit.

                ## Milestones
                1. The common overage triggers listed: planning uplift, sale uplift, change of use.
                2. How overage is calculated and the usual time limits explained by your solicitor.
                3. The ways overage is secured on title understood, and what a lender thinks of each.
                4. Your own acceptable overage terms written down.

                ## Notes
                Lenders dislike open-ended overage secured by a charge. Ask your solicitor how your likely lender treats it before you agree terms.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note setting out overage triggers, calculation methods, security and your own acceptable terms has been reviewed with your solicitor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your solicitor for examples of overage clauses in recent land deals"
                - "List the triggers and time limits you have seen"
                - "Ask a development lender how they treat overage on title"
                - "Write the overage terms you would accept and those you would refuse"
            - name: Reading a site report pack
              description: |-
                ## Purpose
                Serious sales come with a pack of title, searches, topographical survey, ground and utility reports, and buyers who read it properly bid with fewer conditions and fewer surprises. Working through a real pack, report by report, teaches you what matters and what to send to specialists.

                ## Milestones
                1. One real site pack obtained from an agent or auction legal pack.
                2. Each report summarised in two or three lines.
                3. Questions for the seller and for your advisers listed.
                4. Costs or risks found in the pack reflected in your bid check.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full site report pack has been summarised report by report with a written list of questions for the seller and advisers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request the information pack for a site currently on the market"
                - "Summarise each report in the pack in two or three lines"
                - "List the questions you would ask the seller before bidding"
                - "Adjust your bid check for any cost the pack reveals"
            - name: Unconditional or subject to planning offer
              description: |-
                ## Purpose
                On each site you must choose whether to offer unconditionally at a lower price or subject to planning at a higher one, and sellers weigh certainty against price differently. Deciding with a written comparison of risk, timing and cost, site by site, avoids defaulting to whatever the last deal did.

                ## Milestones
                1. Both offer routes priced for the site, with the planning risk stated.
                2. Time to a planning decision estimated with your planning consultant.
                3. The seller's priorities on certainty and timing understood from the agent.
                4. A recorded decision on which route to offer, and why.

                ## Notes
                Detailed option and conditional contract structures belong in their own work. This decision is about which kind of offer to make on a specific site.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For one live site, both offer routes are priced side by side and the chosen route is recorded with its reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price an unconditional and a conditional offer for one live site"
                - "Ask your planning consultant how long a decision would take"
                - "Ask the agent whether the seller values certainty or price more"
                - "Record the chosen offer route and your reasons in the tracker"
            - name: Marketed or off-market land focus
              description: |-
                ## Purpose
                Marketed sites are easy to find but fought over, while off-market sites are slower to find and often cheaper to secure. Deciding how to split your hours between the two, using your own funnel numbers, puts effort where it is producing agreed deals.

                ## Milestones
                1. Three months of funnel numbers split by marketed and off-market sources.
                2. Hours spent on each source estimated.
                3. Offers and agreed deals per hundred hours compared.
                4. A decision on how to split time for the next six months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written split of sourcing time between marketed and off-market land is agreed, based on three months of funnel numbers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tag every tracker site as marketed or off-market"
                - "Estimate hours spent on each source over three months"
                - "Compare offers and agreed deals from each source"
                - "Write the time split you will use for the next six months"
            - name: Site investigation before exchange decision
              description: |-
                ## Purpose
                Ground conditions, contamination and buried services can wipe out a profit, yet paying for intrusive surveys on a site you may not secure feels wasteful. Deciding per site what to investigate before exchange, and who pays, balances the cost of surveys against the cost of a nasty surprise.

                ## Milestones
                1. Known risks from the desk review and pack listed for the site.
                2. Quotes for a ground investigation and any contamination survey obtained.
                3. Whether the seller will allow access and share or fund surveys agreed.
                4. A recorded decision on what to investigate before exchange.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For one live site, survey quotes are in hand and a written decision records what will be investigated before exchange and who pays."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ground and contamination risks from the desk review"
                - "Get two quotes for a ground investigation on the site"
                - "Ask the seller's agent about access for surveys before exchange"
                - "Record what will be investigated before exchange and who pays"
            - name: Exclusivity agreement decision
              description: |-
                ## Purpose
                Once heads of terms are agreed, you will spend real money on legal work and surveys, and a seller who keeps marketing can sell to someone else. Deciding whether to ask for a lock-out period, how long and whether to pay for it protects that spend.

                ## Milestones
                1. Expected spend between heads of terms and exchange estimated.
                2. A lock-out period length proposed to match legal and survey timelines.
                3. Your solicitor's view on making the exclusivity binding obtained.
                4. A decision recorded on whether to offer a fee for exclusivity.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on exclusivity, with period length and any fee, is recorded for a site at heads of terms stage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate your spend from heads of terms to exchange for the site"
                - "Propose a lock-out period that covers searches and surveys"
                - "Ask your solicitor how to make the exclusivity binding"
                - "Decide whether to offer a fee and record the decision"
            - name: Buying entity confirmed before heads of terms
              description: |-
                ## Purpose
                Heads of terms and contracts name the buyer, and changing the buying entity later can cause delay, extra tax or a lender's objection. Confirming with your accountant and solicitor which company will buy the site, before you agree terms, keeps the paperwork clean from the start.

                ## Milestones
                1. The proposed buying entity discussed with your accountant and solicitor.
                2. Tax and lender points noted from that conversation.
                3. The entity name and registration details ready to put in heads of terms.
                4. Any partner's agreement to the entity recorded.

                ## Notes
                Tax and structure are for your accountant and solicitor to advise on. This project only makes sure the question is asked in time.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The buying entity for the next site is confirmed in writing after advice from an accountant and solicitor, before heads of terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a short call with your accountant about the buying entity"
                - "Ask your solicitor whether the entity can be changed after heads of terms"
                - "Note any lender requirements on the buying entity"
                - "Save the entity's full name and registration details with the brief"
            - name: Walk-away rules for land bids
              description: |-
                ## Purpose
                Competitive tenders and charming owners both push buyers past the price their appraisal supports. Writing walk-away rules before you bid, a maximum price, conditions you will not drop and a minimum profit, keeps the decision with the numbers and not with the excitement of the room.

                ## Milestones
                1. A maximum price rule linked to your appraisal's residual land value.
                2. Conditions you will never drop listed, such as satisfactory title or access.
                3. A minimum profit on cost or margin agreed with any partner.
                4. The rules signed off by every decision maker.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written walk-away rules for price, conditions and minimum profit are signed off by every decision maker before the next bid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the maximum price rule as a share of residual land value"
                - "List the conditions you will never drop in any offer"
                - "Agree the minimum profit on cost with your partner"
                - "Pin the rules to the front of the site tracker"
            - name: Ransom strip and access risk review
              description: |-
                ## Purpose
                Access decides whether a site can be built at all, and a narrow strip owned by someone else between your land and the road can hold a scheme to ransom. Checking access rights, visibility splays and adoption status before you bid means you price the risk or walk away early.

                ## Milestones
                1. The legal access route from the site to an adopted road traced on the title plan.
                2. Any third-party strips, gaps or unregistered land on the route identified.
                3. Highways adoption status checked with the highway authority.
                4. Each access risk scored for likelihood and cost in a register.

                ## Notes
                Start from the **Risk register** template. Ask your solicitor to confirm access rights in writing before exchange.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register entry for each access risk on one live site exists, with the route traced and adoption status confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Trace the route from the site to the nearest adopted road on the title plan"
                - "Check the title of every strip of land along the access route"
                - "Ask the highway authority whether the road is adopted"
                - "Score each access risk in the risk register"
            - name: First site visit and walkover
              description: |-
                ## Purpose
                Maps miss slopes, smells, noise, overlooking windows and the neighbour who will object to everything. A planned walkover with a checklist, photos and a sketch turns a pleasant visit into evidence you can use in your bid and your planning strategy.

                ## Milestones
                1. A walkover checklist covering access, levels, boundaries, trees, services, noise and neighbours.
                2. Photos taken from every boundary and the access point.
                3. Overhead lines, manholes and substations marked on a sketch plan.
                4. A visit note filed in the tracker within a day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One site has been walked with the checklist, photographed from every boundary and written up in the tracker within a day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page walkover checklist from your screening list"
                - "Arrange access with the agent or owner for a site in the tracker"
                - "Photograph every boundary and mark services on a sketch plan"
                - "File the visit note in the tracker within a day"
            - name: Making a first written offer on a site
              description: |-
                ## Purpose
                A first offer is the moment the site work becomes real, and a vague email loses to a clear letter. A written offer stating price, conditions, timetable, deposit, your team and your funding, backed by your credentials pack, shows the seller you can deliver.

                ## Milestones
                1. The bid price checked against your walk-away rules.
                2. An offer letter stating price, conditions, timetable, solicitor and funding.
                3. Credentials pack and funding letter attached.
                4. The offer submitted and logged in the tracker with the date.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written offer with price, conditions, timetable, solicitor and funding evidence has been submitted on one site and logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the bid price against your walk-away rules"
                - "Write the offer letter with price, conditions, timetable and team"
                - "Attach your credentials pack and funding letter"
                - "Submit the offer and log the date and terms in the tracker"
            - name: Heads of terms agreed for a site
              description: |-
                ## Purpose
                Heads of terms are the bridge from an accepted price to a contract, and gaps in them become arguments later. Agreeing a clear set of terms covering price, deposit, conditions, overage, timetable, exclusivity and who pays which costs gives your solicitor a firm brief and the seller a clear picture.

                ## Milestones
                1. Draft heads of terms covering parties, price, deposit and conditions.
                2. Overage, exclusivity, timetable and cost responsibilities included.
                3. Comments from your solicitor taken into the draft.
                4. Heads of terms marked subject to contract and agreed by both sides.
                5. Instructions sent to both solicitors.

                ## Notes
                Heads of terms are normally not binding, apart from any exclusivity or confidentiality clauses your solicitor makes binding.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Heads of terms marked subject to contract are agreed by both sides for one site and both solicitors are instructed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft heads of terms from your accepted offer"
                - "Add overage, exclusivity, timetable and cost clauses to the draft"
                - "Send the draft to your solicitor for comment"
                - "Instruct your solicitor once both sides agree the terms"
            - name: Informal tender bid submission
              description: |-
                ## Purpose
                Informal tenders close on a fixed date and are judged on price, conditions, certainty and credibility together. Preparing a complete bid in good time, rather than the night before, lets you make a clean offer with fewer conditions than rivals and answer the agent's questions with confidence.

                ## Milestones
                1. The tender instructions read and every required item listed.
                2. Bid price, conditions and timetable agreed with your partner.
                3. Supporting evidence assembled: funding, team, track record.
                4. The bid submitted before the deadline and receipt confirmed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete informal tender bid with funding evidence has been submitted before the deadline and receipt confirmed by the agent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every item the tender instructions ask for"
                - "Agree the bid price and conditions with your partner"
                - "Assemble funding, team and track record evidence"
                - "Submit the bid a day early and get written confirmation of receipt"
            - name: Land auction day plan
              description: |-
                ## Purpose
                At most land auctions the hammer falling creates a binding contract, often with a deposit due on the day and completion weeks later. Bidding without the legal pack reviewed, the funding confirmed and a top price written down is how buyers end up owning land they cannot use.

                ## Milestones
                1. Legal pack reviewed by your solicitor before the sale.
                2. Funding for deposit and completion confirmed in writing.
                3. A maximum bid written down and agreed.
                4. Registration, identity checks and deposit payment method arranged with the auction house.

                ## Notes
                Check the auction's special conditions for buyer's fees and the completion period. They vary between houses.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One land auction has been attended with the legal pack reviewed, funding confirmed and a written maximum bid kept to."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send the lot's legal pack to your solicitor two weeks before the sale"
                - "Confirm in writing how you will fund the deposit and completion"
                - "Write your maximum bid and agree it with your partner"
                - "Register with the auction house and arrange the deposit payment"
            - name: Exchange and completion of a land purchase
              description: |-
                ## Purpose
                Exchange is the point of no return: the contract binds, the deposit is paid and conditions start to run. Working through your solicitor's report on title, the final contract, the deposit and the completion funds in order makes sure nothing is signed that the team has not checked.

                ## Milestones
                1. Your solicitor's report on title and searches read and questions answered.
                2. The final contract checked against the agreed heads of terms.
                3. Deposit funds in place and insurance for the land from exchange arranged.
                4. Contracts exchanged and the completion date fixed.
                5. Completion funds transferred, completion confirmed and registration applied for.

                ## Notes
                Send money only on your solicitor's instructions, confirmed by phone on a known number. Payment fraud around completion is common.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Contracts have exchanged and completed on one site, with the report on title signed off and registration applied for."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read your solicitor's report on title and send back your questions"
                - "Check the final contract against the agreed heads of terms"
                - "Arrange insurance for the land to start at exchange"
                - "Confirm the completion bank details by phone before sending funds"
            - name: First infill plot for a new developer
              description: |-
                ## Purpose
                A first-time founder usually starts with a single infill plot or a small gap site for one to four homes, where mistakes are survivable and lessons are cheap. Running the whole acquisition on one modest plot, end to end, builds the agent relationships and the team you will need for larger sites.

                ## Milestones
                1. A brief scaled to one to four homes and a price you can fund.
                2. Ten infill plots screened in your nearest target area.
                3. Three plots visited and one taken to a written offer.
                4. A short lessons note written after the offer, win or lose.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Ten infill plots screened, three visited and one written offer made, with a lessons note filed afterwards."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Scale your brief down to one to four homes"
                - "Screen ten infill plots in your nearest target area"
                - "Visit the three best plots with the walkover checklist"
                - "Write a lessons note after your first offer, whatever the result"
            - name: Backland and garden plots for a small builder
              description: |-
                ## Purpose
                Small builders often find their best sites behind existing houses: long gardens, garage blocks and yards with rear access. These sites depend on access width, neighbours' views and sometimes several owners agreeing, so the approach is closer to diplomacy than to bidding.

                ## Milestones
                1. Streets with long rear gardens or garage courts in target areas mapped.
                2. Access widths checked from imagery for each candidate.
                3. Owners of three or more adjoining gardens identified where joint sale could work.
                4. A letter tailored to homeowners sent to the most promising group.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Candidate backland streets are mapped with access widths checked, and a tailored letter has gone to one group of adjoining owners."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map streets with long rear gardens or garage courts"
                - "Measure access widths from aerial imagery for each candidate"
                - "Identify the owners of adjoining gardens from title records"
                - "Write a homeowner letter explaining how a joint sale would work"
            - name: Buying from an elderly owner or an estate
              description: |-
                ## Purpose
                Plenty of land comes up when an owner moves into care or dies, and the sellers may be grieving relatives, executors or an attorney. Patience, plain explanations and an understanding of probate timing matter more than price, and handling it badly can lose the site and your reputation locally.

                ## Milestones
                1. Who has authority to sell confirmed: owner, attorney, executors or administrators.
                2. Probate or court timelines understood from the family's solicitor.
                3. An offer timetable that fits the estate's process agreed.
                4. Every family member's concerns recorded and answered in writing.

                ## Notes
                Encourage the family to take independent advice, and never press an elderly owner to decide quickly.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Authority to sell is confirmed and an offer timetable matching the estate's probate process is agreed in writing with the family's solicitor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask who has legal authority to sell the land"
                - "Ask the family's solicitor how long probate is expected to take"
                - "Agree an offer timetable that fits the estate's process"
                - "Answer each family member's questions in a short written note"
            - name: Buying surplus land from a public body
              description: |-
                ## Purpose
                Councils, health bodies, utilities and transport agencies sell surplus land through formal processes with published criteria, and sometimes value social outcomes alongside price. Learning how a public disposal works, and building a bid around what the body wants, opens sites that private buyers often overlook.

                ## Milestones
                1. Public bodies with land in target areas and their disposal pages listed.
                2. Alerts set up for disposal notices and surplus land lists.
                3. One disposal brief read in full, including scoring criteria.
                4. A bid or a written reason not to bid recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Disposal alerts are set for every relevant public body and one disposal brief has a recorded bid or no-bid decision against its criteria."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List public bodies that own land in your target areas"
                - "Sign up for each body's surplus land or disposal notices"
                - "Read one disposal brief and note its scoring criteria"
                - "Record a bid or no-bid decision with reasons"
            - name: Buying from a farmer or rural estate
              description: |-
                ## Purpose
                Edge-of-settlement land is usually owned by farmers or estates who think in decades, worry about tax and tenancies and talk to their land agent first. Understanding their position, including agricultural tenancies and the farm's future, helps you shape an offer that works for the family and the business.

                ## Milestones
                1. The owner's land agent identified and an introductory meeting held.
                2. Any agricultural tenancy, grazing licence or subsidy scheme on the land noted.
                3. The family's priorities on timing, tax and retained land understood.
                4. A proposal shaped around those priorities sent for discussion.

                ## Notes
                Farm owners will need their own tax advice. Ask your solicitor how any agricultural tenancy affects vacant possession.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A meeting with a farm owner's land agent is held and a written proposal reflecting tenancies and family priorities has been sent."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find the land agent who acts for the farm or estate"
                - "Ask whether any tenancy or grazing licence covers the land"
                - "Note the family's priorities on timing and retained land"
                - "Send a written proposal shaped around those priorities"
            - name: Buying from a church, club or charity
              description: |-
                ## Purpose
                Churches, sports clubs and charities often hold well-located land but must follow their own rules and sometimes a regulator's before they sell, including taking advice and showing best value. Knowing their process and decision dates lets you fit your offer to their timetable instead of waiting months for a committee.

                ## Milestones
                1. The decision-making body and its meeting dates identified.
                2. Any regulator or governing body consent the seller needs understood from their adviser.
                3. Your offer framed to address best value and any community concerns.
                4. A timetable agreed that matches the seller's meeting cycle.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The seller's decision body, consent requirements and meeting dates are recorded and an offer timetable matching them is agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask who in the organisation decides on the sale and when they meet"
                - "Ask the seller's adviser what consents they need before selling"
                - "Write how your offer meets best value and community concerns"
                - "Agree a timetable that fits the seller's meeting dates"
            - name: Multi-owner site assembly
              description: |-
                ## Purpose
                Some of the most valuable sites only exist once three, five or ten neighbouring parcels are combined, and every owner knows the last one holds the power. Assembling land in a planned order, with linked conditional deals and a clear story for each owner, is slow, specialist work with a large reward.

                ## Milestones
                1. Every parcel in the assembly mapped with owner, title and motivation.
                2. An acquisition order set, with the critical parcels identified.
                3. Linked conditions agreed with your solicitor so no parcel binds you alone.
                4. Agreements or heads of terms in place with at least half the owners.
                5. A fallback scheme drawn for a smaller assembly if one owner refuses.

                ## Notes
                Keep each owner's terms confidential and consistent. Owners talk, and visible differences in price sink assemblies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An assembly map, acquisition order and fallback scheme exist and heads of terms are agreed with at least half of the owners."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Map every parcel with owner, title number and likely motivation"
                - "Rank the parcels by how critical each is to the scheme"
                - "Ask your solicitor how to link conditions across the deals"
                - "Sketch a fallback scheme for a smaller assembly"
            - name: Brownfield and contaminated land terms
              description: |-
                ## Purpose
                Former garages, workshops and industrial yards are often well placed but carry contamination, demolition and liability risks that can outlast your ownership. Agreeing in heads of terms who investigates, who pays for remediation and what indemnities are given turns an unknown liability into a priced one.

                ## Milestones
                1. Past uses and likely contaminants listed from historic maps and records.
                2. A specialist's outline view on investigation and remediation costs obtained.
                3. Price adjustment, retention or indemnity options compared with your solicitor.
                4. Contamination terms written into the heads of terms.

                ## Notes
                Liability for contamination can stay with the owner of the land. Get your solicitor's advice before accepting any liability clause.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For one brownfield site, contamination terms on investigation, remediation cost and indemnity are written into agreed heads of terms."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the site's past uses from historic maps and records"
                - "Ask an environmental consultant for an outline cost range"
                - "Compare price reduction, retention and indemnity options with your solicitor"
                - "Write the agreed contamination terms into the heads of terms"
            - name: Land with tenants, licences or rights of way
              description: |-
                ## Purpose
                Land is rarely empty in law: grazing licences, short leases, allotments, footpaths and neighbours' rights can all stand between you and vacant possession. Identifying every occupier and right early, and agreeing who will deal with each before completion, prevents a purchase of land you cannot build on.

                ## Milestones
                1. Every lease, licence, occupier and public or private right on the site listed.
                2. Notice periods and termination routes noted with your solicitor.
                3. Responsibility for securing vacant possession agreed with the seller.
                4. Any diversion or release of rights scheduled into the programme.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A schedule of every occupier and right on one site exists, with termination routes and the seller's possession obligations agreed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the seller for every lease, licence and occupier on the land"
                - "Check public rights of way maps for paths crossing the site"
                - "Note the notice period and route to end each occupation with your solicitor"
                - "Agree in writing who secures vacant possession before completion"
            - name: Yearly land acquisition record review
              description: |-
                ## Purpose
                Once a year the numbers tell you whether your sourcing works: how many sites you screened, visited, offered on and won, what each won site cost to find and which channels delivered. Reviewing the record with your partner sets next year's target areas, budget and channels on evidence.

                ## Milestones
                1. The year's funnel counts by channel totalled from the tracker.
                2. Abortive costs and cost per acquired site calculated.
                3. Win and loss reasons grouped into themes.
                4. Next year's target areas, budget and channel split agreed in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review records funnel counts by channel, cost per acquired site and a written plan for next year's areas, budget and channels."
                cadence: cyclic
              tasks:
                - "Total the year's screened, visited, offered and won sites by channel"
                - "Calculate abortive costs and cost per acquired site"
                - "Group the reasons you won and lost sites into themes"
                - "Hold the yearly acquisition review with your partner @recurring(yearly)"
---

# Site Finding and Land Acquisition

Site Finding and Land Acquisition is the front end of every development: knowing what land you want, where to look, who controls it and how to turn a conversation with an owner into a contract that binds. It is written for founders starting a development business and small builders who need a steady supply of sites, and it runs from a buying brief, target areas and an acquisition team, through the weekly and monthly sourcing machinery, the skills of reading titles, maps and sale methods, to offers, heads of terms, exchange and the awkward specialist sites with many owners, tenants or contamination.

The rhythms are a weekly listings scan and planning watch, monthly agent calls, owner letters, auction catalogues, a pipeline review and a land price log, quarterly follow-ups with owners who said not yet, and a yearly look at your hit rate. The Meeting notes, Metrics log and Risk register templates pair with the landowner meetings, the comparables log and the access risk review. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
