---
id: strategy-leadership.new-market-entry-strategy
name: New Market Entry Strategy
description: "A disciplined route into a new country or customer segment: screened options, real customer evidence, a chosen entry model, a funded pilot with kill criteria and the reviews that decide whether to scale."
category: business
version: 1.0.0
tags: [strategy-leadership, new-market-entry-strategy, manager, enterprise, founder, expansion, international, go-to-market]
author: Aurum Technology
starter_structure:
  templates:
    - board-meeting
    - vendor
    - trip
    - risk-register
    - metrics-log
    - operational-checklist
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: New Market Entry Strategy
          description: "Deciding whether and how to enter a new geography or customer segment, with research, entry models and a staged plan."
          projects:
            - name: Entry question, sponsor and decision owner charter
              description: |-
                ## Purpose
                Expansion talk drifts for months when nobody has written down the exact question, who decides and by when. A one-page charter that says, for example, "Should we sell our payroll software to mid-sized firms in Ghana within 18 months, and how?" turns a vague ambition into a piece of work with an owner and a date.

                ## Milestones
                1. The entry question written in one sentence naming the market, the offer and the time frame.
                2. One sponsor and one decision owner named and agreed with the chief executive or founder.
                3. A small core team of three to five people assigned with their time commitment stated.
                4. A decision date for the first go or no-go agreed and in the calendar.

                ## Notes
                Keep the question narrow. "Expand into Europe" is not a question; "Enter Germany with the self-serve plan" is.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page charter names the entry question, sponsor, decision owner, core team and the first decision date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the entry question in one sentence with market, offer and time frame"
                - "Agree the sponsor and decision owner with the chief executive"
                - "Name the core team and the hours each will give per week"
                - "Put the first go or no-go meeting in the decision owner's calendar"
            - name: Why this market, why now and why us memo
              description: |-
                ## Purpose
                Many entries start because a large customer asked, a competitor moved or a board member knows the country, and that reason quietly becomes the strategy. A two-page memo stating the strategic reason, the timing argument and the advantage you would carry across forces the team to check whether the logic holds before money is spent.

                ## Milestones
                1. The strategic reason for expanding stated in no more than three sentences.
                2. The timing argument written: what is lost by waiting twelve months.
                3. The advantages that travel to the new market listed separately from those that stay at home.
                4. The memo read and challenged by two leaders outside the core team.

                ## Notes
                If the honest answer to "why us" is "nobody else has tried", treat that as a warning rather than an opportunity.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page rationale memo exists with written challenges from two leaders outside the core team and the team's responses."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the event or request that started the expansion conversation"
                - "Draft the reason, timing and advantage sections in two pages"
                - "Send the memo to two leaders outside the core team for challenge"
                - "Revise the memo and note which challenges you could not answer"
            - name: Home business readiness check before expanding
              description: |-
                ## Purpose
                Expansion multiplies whatever is weak at home: a shaky product, thin cash or a stretched leadership team gets worse when attention splits. Scoring the core business on product stability, margins, cash runway and management bandwidth tells you whether to expand now, fix first or expand only in a lighter form.

                ## Milestones
                1. The home business scored on six readiness factors with evidence for each score.
                2. Cash runway calculated with and without the expansion spend.
                3. The leaders whose time the entry would consume named, with what they would stop doing.
                4. A readiness verdict recorded: go ahead, fix first or lighter entry only.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A readiness scorecard with six scored factors and a recorded verdict is attached to the entry charter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List six readiness factors such as churn, margin, runway and key-person load"
                - "Ask finance for runway figures with and without a year of expansion spend"
                - "Name each leader the entry needs and what they would drop to make time"
                - "Write the readiness verdict and share it with the sponsor"
            - name: Candidate market longlist and screening criteria
              description: |-
                ## Purpose
                Teams often compare two markets someone already likes and never look at the eight they did not think of. Building a longlist of ten to twenty geographies or segments and screening them against five agreed criteria, such as market size, regulatory difficulty and fit with the current product, makes the shortlist defensible to a board.

                ## Milestones
                1. A longlist of ten to twenty candidate markets or segments written down.
                2. Five screening criteria agreed with weights before any market is scored.
                3. Each candidate scored using public data, with sources noted.
                4. A shortlist of three markets chosen and the reasons for dropping the rest recorded.

                ## Notes
                Agree the criteria and weights before scoring. Changing them afterwards is the usual way a favourite sneaks back onto the list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored longlist of at least ten markets and a shortlist of three, with the weights fixed before scoring, is filed with the charter."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Brainstorm ten to twenty candidate countries or customer segments"
                - "Agree five screening criteria and their weights with the sponsor"
                - "Ask the agent to gather public figures for each candidate against the criteria"
                - "Score the longlist and choose a shortlist of three"
            - name: Deep attractiveness assessment of the three shortlisted markets
              description: |-
                ## Purpose
                A screening score is a first cut; the real choice needs a closer look at demand, competition, cost to serve and ease of doing business in each shortlisted market. Building a two-page profile per market on the same headings lets the leadership team compare like with like and pick a first market with eyes open.

                ## Milestones
                1. A two-page profile for each shortlisted market on identical headings.
                2. Cost to serve estimated for each market, including people, logistics and compliance.
                3. The top three risks for each market named.
                4. A ranked recommendation with a first, second and third market.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three market profiles on identical headings and a ranked recommendation have been presented to the decision owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the headings every market profile must cover"
                - "Draft the profile for the first shortlisted market"
                - "Estimate cost to serve for each market with finance"
                - "Present the ranked recommendation to the decision owner"
            - name: Serviceable market sizing for the first target
              description: |-
                ## Purpose
                Headline market figures from analyst reports are usually far larger than what you can actually reach with your offer, price and channels. Sizing from the bottom up, counting the customers who fit your profile and multiplying by a realistic price, gives a figure the business case can stand on and a check on the top-down number.

                ## Milestones
                1. A top-down market estimate recorded with its source.
                2. A bottom-up count of target customers built from registries, directories or panel data.
                3. Serviceable and obtainable market figures for years one to three, with assumptions listed.
                4. The gap between the top-down and bottom-up figures explained.

                ## Notes
                If the two methods differ by more than a factor of three, find out why before using either number.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sizing sheet shows top-down and bottom-up estimates, year one to three obtainable revenue and every assumption with its source."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record the best available top-down market figure and its source"
                - "Count target customers from a business registry or industry directory"
                - "Apply a realistic price and adoption rate for years one to three"
                - "Write a paragraph explaining the gap between the two estimates"
            - name: Entry budget envelope and maximum acceptable loss
              description: |-
                ## Purpose
                New markets almost always take longer and cost more than planned, and without a ceiling the spend creeps up one small approval at a time. Agreeing up front how much the organisation will invest before it must see results, and the most it is willing to lose, protects the core business and makes later stop decisions far easier.

                ## Milestones
                1. A total entry budget for the first 18 to 24 months agreed with finance.
                2. The maximum acceptable loss stated as a figure the board or owner has endorsed.
                3. The budget split into stages, each released only when a gate is passed.
                4. Monthly spend reporting against the envelope set up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A staged entry budget and a maximum acceptable loss figure are approved in writing by the board, owner or finance lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft an 18 to 24 month entry budget with finance"
                - "Propose a maximum acceptable loss figure to the sponsor"
                - "Split the budget into stages tied to decision gates"
                - "Record the approval and the approver in the entry log"
            - name: Kill criteria and stage gates for the entry
              description: |-
                ## Purpose
                Once a team has opened an office and hired locally, stopping feels like failure, so weak entries limp on for years. Writing the gates and the conditions that would stop or pause the entry before launch, while everyone is still objective, gives leaders permission to act on the evidence later.

                ## Milestones
                1. Three to four stage gates defined, from research to pilot to scale.
                2. For each gate, the evidence needed to pass written as measurable thresholds.
                3. Explicit kill criteria agreed, such as a customer count or cost per customer by a set month.
                4. The criteria signed off by the decision owner and shared with the core team.

                ## Notes
                Make kill criteria specific enough that two people would reach the same verdict from the same numbers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gate document lists each stage, its pass thresholds and at least two kill criteria, signed off by the decision owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the stages from research to scale on one page"
                - "Write the evidence threshold needed to pass each gate"
                - "Agree at least two kill criteria with numbers and dates"
                - "Get the decision owner to sign off the gate document"
            - name: Assumption log for the market entry
              description: |-
                ## Purpose
                Every entry plan rests on guesses about price, sales cycle, adoption and cost, and they quietly turn into facts in later slides. Keeping one log of the twenty or so assumptions that matter, each with its evidence level and the test that would confirm it, shows the team where to spend research effort first.

                ## Milestones
                1. The twenty most important assumptions listed in one place.
                2. Each assumption rated by evidence strength and by impact on the business case.
                3. A test or source named for every high-impact, low-evidence assumption.
                4. The log reviewed each month and updated as evidence arrives.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An assumption log with at least twenty entries, ratings and tests exists and shows a monthly review date for the last three months."
                cadence: rolling
              tasks:
                - "List every assumption behind the entry case in one sheet"
                - "Rate each assumption for evidence strength and impact"
                - "Name a test or source for each risky assumption"
                - "Update the evidence ratings in the assumption log @recurring(monthly:11)"
            - name: Customer discovery interviews in the target market
              description: |-
                ## Purpose
                What sold at home may solve a problem the new customers do not have, or solve it in a way they will not buy. Twenty structured interviews with potential customers in the target market, run before the product is adapted, reveal the real problem, the buying process and the words customers use.

                ## Milestones
                1. An interview guide written and tested on two friendly contacts.
                2. Twenty interviews completed with people who match the target customer profile.
                3. Notes coded into recurring problems, buying steps and objections.
                4. A summary of what was confirmed, what was disproved and what is still unknown.

                ## Notes
                Interview people who would sign the purchase order, not just users. In many markets the buyer and the user have very different concerns.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty interviews are logged with notes, and a findings summary maps each result to an assumption in the log."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write an interview guide of ten open questions"
                - "Book the first five interviews through local contacts or a panel"
                - "Code each interview into problems, buying steps and objections"
                - "Write the findings summary and update the assumption log"
            - name: Regulatory, licensing and data rules map with local counsel
              description: |-
                ## Purpose
                Licences, product registrations, data residency rules and foreign ownership limits can add a year to an entry or rule out an entry model altogether. Mapping what applies in the target market, with a local lawyer confirming the list, prevents the discovery six months in that the chosen structure is not allowed.

                ## Milestones
                1. A list of licences, registrations and approvals that may apply, drafted from official sources.
                2. Data protection, data transfer and consumer rules relevant to the offer noted.
                3. Any foreign ownership or local partner requirements identified.
                4. The map reviewed and corrected by qualified local counsel, with time and cost estimates.

                ## Notes
                This is a map for asking the right questions, not legal advice. Every conclusion should come from counsel qualified in that market.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A regulatory map reviewed by local counsel lists each required approval with an estimated time and cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the official regulator and trade ministry websites for the target market"
                - "Draft a list of licences and approvals your offer may need"
                - "Get quotes from two law firms qualified in the market"
                - "Record counsel's corrections, timelines and costs in the map"
            - name: Local competitors and substitutes in the target market
              description: |-
                ## Purpose
                Your global rivals may be absent while a local champion, a state provider or a spreadsheet habit owns the customer. Mapping who the target customers use today, and why, shows what you must beat on day one and where a newcomer can win.

                ## Milestones
                1. The five to ten main alternatives customers use today in the target market listed.
                2. Each alternative profiled on price, channel, strengths and weak points.
                3. The local champion's likely response to your entry described.
                4. Two or three openings where a newcomer can win written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A local alternatives map covers at least five options with price and channel, and names two openings for entry."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask interviewees which product or workaround they use today"
                - "Profile each alternative on price, channel and weak points"
                - "Write how the strongest local player is likely to respond"
                - "List the openings where you can win against them"
            - name: Pricing and willingness to pay in the new market
              description: |-
                ## Purpose
                Converting the home price at today's exchange rate rarely works: purchasing power, local norms, taxes and payment habits all differ. Testing price points with real buyers before launch avoids pricing so high that nobody converts, or so low that the unit economics never recover.

                ## Milestones
                1. Local reference prices for comparable offers collected.
                2. Two or three candidate price points tested with at least fifteen target buyers.
                3. Local taxes, payment methods and currency of invoicing confirmed.
                4. A launch price and discount policy agreed and recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A launch price and discount policy are recorded with willingness-to-pay evidence from at least fifteen target buyers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect published prices for five comparable local offers"
                - "Test three price points in interviews or a landing page test"
                - "Confirm local sales tax, invoicing currency and preferred payment methods"
                - "Write the launch price and discount rules in the entry log"
            - name: Route-to-market and channel map
              description: |-
                ## Purpose
                Customers in a new market may buy through distributors, marketplaces, resellers, government tenders or direct field sales, and the channel decides most of your cost structure. Mapping how buyers actually purchase today, and what each channel takes in margin and control, tells you which channel to enter through.

                ## Milestones
                1. The ways target customers buy comparable offers today mapped from interviews.
                2. Each channel costed for margin, time to first sale and control over the customer.
                3. Channel conflicts with existing home or regional partners checked.
                4. A primary and a fallback channel chosen for the pilot.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A channel map with costs per channel and a chosen primary and fallback channel for the pilot is approved by the decision owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask five buyers exactly how they bought a comparable product last time"
                - "List each channel with its typical margin and time to first sale"
                - "Check existing partner contracts for territory or exclusivity clauses"
                - "Choose a primary and fallback channel and record why"
            - name: Business culture briefing for the entry team
              description: |-
                ## Purpose
                Deals stall over things nobody wrote down: how decisions are made, how hierarchy works, how directly people say no, what a first meeting is for. A short, practical briefing for everyone who will deal with the market, ideally from someone who has done business there, saves months of misread signals.

                ## Milestones
                1. Two people with direct business experience in the market interviewed.
                2. A five-page briefing on meetings, negotiation, hierarchy, relationship building and holidays.
                3. The briefing discussed with the entry team in a one-hour session.
                4. A list of local holidays and business seasons added to the team calendar.

                ## Notes
                Avoid stereotype summaries from the internet. Ask practitioners what surprised them in their first year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-page briefing based on at least two practitioner interviews has been discussed with the whole entry team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find two people who have sold or worked in the market through your network"
                - "Interview each about what surprised them in their first year"
                - "Write the five-page briefing and circulate it to the entry team"
                - "Add local holidays and slow business periods to the team calendar"
            - name: Market immersion visit
              description: |-
                ## Purpose
                Desk research cannot show you how a customer's office runs, what a distributor's warehouse looks like or how long it takes to get across the capital. A planned one-week visit with customer meetings, partner conversations and time with officials or trade bodies tests the research against reality.

                ## Milestones
                1. A visit agenda with at least eight meetings across customers, partners and advisers.
                2. Travel, visas and local transport arranged.
                3. Notes from every meeting written up within 24 hours.
                4. A visit summary listing the assumptions that changed.

                ## Notes
                Start from the **Trip** template. Your home country's trade or embassy office can often arrange meetings with local firms.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A visit with at least eight meetings is completed and a summary of changed assumptions is filed within a week of return."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Contact your trade promotion agency or embassy commercial section"
                - "Book eight meetings across customers, partners and advisers"
                - "Write up each meeting within a day"
                - "Send the visit summary to the decision owner"
            - name: Entry mode options and their economics
              description: |-
                ## Purpose
                Exporting, licensing, franchising, distribution, joint ventures, a branch and a wholly owned subsidiary each trade cost against control, speed and risk. Studying how each mode works, and what it would mean for your specific offer, means the later choice is made from real options rather than habit.

                ## Milestones
                1. The main entry modes summarised on one page with control, cost, speed and risk.
                2. Two or three published case studies read per mode in your industry.
                3. The modes that are ruled out for your offer crossed off with reasons.
                4. A shortlist of two or three modes carried into the entry mode decision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of at least six entry modes and a shortlist of two or three with reasons is filed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page table of entry modes against control, cost, speed and risk"
                - "Read two case studies of firms in your industry for each mode"
                - "Cross off modes that do not fit your offer and note why"
                - "Write the shortlist for the entry mode decision"
            - name: Tax, currency and cash repatriation questions for advisers
              description: |-
                ## Purpose
                Permanent establishment, withholding tax, transfer pricing and currency controls can change the economics of an entry far more than price or volume. Preparing a clear question list and taking it to qualified tax advisers before the entity and contract decisions are made avoids expensive restructuring later.

                ## Milestones
                1. A question list on tax presence, withholding, transfer pricing, sales tax and currency controls.
                2. Two qualified international tax advisers asked for a scoped quote.
                3. Written advice received on the structures being considered.
                4. The business case updated with the tax and currency effects advisers identified.

                ## Notes
                Organisational only: the conclusions must come from qualified advisers in both countries.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written tax and currency advice covering each structure under consideration is filed and reflected in the business case."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the list of tax and currency questions for the target market"
                - "Request scoped quotes from two international tax advisers"
                - "Brief the chosen adviser on the entry modes under consideration"
                - "Update the business case with the effects in the written advice"
            - name: Adjacent customer segment needs analysis
              description: |-
                ## Purpose
                Entering a new segment at home, such as moving from small firms to large enterprises or from consumers to public bodies, can be as hard as a new country. Analysing how the new segment buys, what it needs that current customers do not, and what it would cost to serve, shows whether the current product and team can stretch.

                ## Milestones
                1. The new segment defined by size, sector and buyer role.
                2. Ten segment buyers interviewed about needs, procurement and deal size.
                3. The gaps in product, contracts, support and security listed.
                4. A cost estimate to close the gaps and a recommendation to enter, wait or decline.

                ## Notes
                Enterprise and public buyers often require security reviews, procurement registration and longer payment terms. Ask early.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A segment gap analysis based on ten buyer interviews ends with a costed recommendation recorded by the decision owner."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Define the new segment by company size, sector and buyer role"
                - "Interview ten buyers in the segment about needs and procurement"
                - "List the product, contract and support gaps the interviews revealed"
                - "Cost the gaps and write an enter, wait or decline recommendation"
            - name: Entry mode decision
              description: |-
                ## Purpose
                With the research done, the leadership team has to choose how it will enter: through a distributor, a licence, a joint venture, a branch or its own subsidiary. Scoring the shortlisted modes against control, speed, capital, risk and reversibility, and recording the choice, gives everyone downstream a fixed point to plan from.

                ## Milestones
                1. The two or three shortlisted modes scored on the same five criteria.
                2. The legal, tax and regulatory constraints for each mode confirmed by advisers.
                3. A preferred mode and a fallback chosen by the decision owner.
                4. The decision and its reasoning written in a one-page record.

                ## Notes
                Weight reversibility heavily for a first entry. A distributor or partner can be a stepping stone to your own entity later.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page decision record names the chosen entry mode, the fallback and the scored comparison behind them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score the shortlisted modes against control, speed, capital, risk and reversibility"
                - "Confirm each mode's constraints with counsel and tax advisers"
                - "Hold a decision meeting with the decision owner and core team"
                - "Write the one-page decision record and share it"
            - name: Offer localisation scope
              description: |-
                ## Purpose
                Language, units, payment methods, integrations, packaging, compliance features and service hours can all need changing, and trying to change everything delays launch by a year. Deciding the minimum localisation needed to win the first customers, and what can wait, keeps the pilot affordable.

                ## Milestones
                1. Every possible localisation item listed from interviews, regulation and channel needs.
                2. Each item marked as must have for launch, needed for scale or optional.
                3. Effort and cost estimated for the must-have items.
                4. A localisation scope agreed with product and operations leads.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A localisation scope lists must-have items with cost and owner, and has been agreed by the product and operations leads."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every localisation request from interviews, regulation and channels"
                - "Mark each item must have, needed for scale or optional"
                - "Estimate effort and cost for the must-have items with product leads"
                - "Record the agreed localisation scope and owners"
            - name: Local partner or distributor selection
              description: |-
                ## Purpose
                The wrong distributor can lock you out of a market for years through exclusivity and a stale reputation. Running a structured search with clear criteria, reference checks and a trial period before any exclusive terms protects the entry from a decision made over one good dinner.

                ## Milestones
                1. Partner criteria written: customer access, capability, financial health and conflicts.
                2. A longlist of at least six candidates and a shortlist of three after first calls.
                3. References and background checks completed on the final candidates.
                4. A partner chosen with a trial period and performance targets agreed in principle.

                ## Notes
                Start from the **Vendor** template for each candidate. Avoid long exclusivity until the partner has hit agreed targets.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A partner is chosen from a scored shortlist of three, with reference checks filed and trial targets agreed in principle."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the partner selection criteria and their weights"
                - "Build a longlist of six candidates from trade bodies and interviews"
                - "Call the shortlisted partners' current principals for references"
                - "Agree trial targets with the preferred partner and send them to counsel"
            - name: Legal entity and operating base set-up decision
              description: |-
                ## Purpose
                Where and how you incorporate, which city you base people in and whether you use an employer of record all shape cost, hiring speed and tax position. Making these choices with advisers, in the order they depend on each other, avoids an entity in the wrong place or staff hired under the wrong arrangement.

                ## Milestones
                1. Options listed: no entity, employer of record, branch or subsidiary.
                2. City or base location options compared on talent, cost and access to customers.
                3. Advisers' recommendations received in writing.
                4. The set-up route chosen with a timeline for registration, bank account and payroll.

                ## Notes
                Opening a local bank account can take longer than incorporation. Start that conversation early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded set-up decision names the legal form, base location and a dated timeline for registration, banking and payroll."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the set-up options from employer of record to subsidiary"
                - "Compare two or three base cities on talent, cost and customer access"
                - "Get written recommendations from legal and tax advisers"
                - "Draw up the timeline for registration, bank account and payroll"
            - name: Beachhead city or first customer segment selection
              description: |-
                ## Purpose
                Trying to cover a whole country from day one spreads sales and support too thin to learn anything. Choosing one city, region or tightly defined customer group as the beachhead, where wins can be concentrated and referrals spread, gives the pilot a fair chance of producing clear evidence.

                ## Milestones
                1. Two or three beachhead options defined by geography or customer type.
                2. Each option scored on reachable customers, reference value and cost to serve.
                3. A beachhead chosen and a target list of the first fifty prospects built.
                4. The criteria for expanding beyond the beachhead written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A chosen beachhead, a list of fifty named prospects in it and written expansion criteria are filed in the entry plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define two or three possible beachheads by city or customer type"
                - "Score each on reachable customers, reference value and cost to serve"
                - "Build a list of fifty named prospects in the chosen beachhead"
                - "Write the conditions for expanding beyond the beachhead"
            - name: Market entry business case and financial model
              description: |-
                ## Purpose
                Directors and owners need one document that brings the research, mode, price, channel and costs together into a view of investment, payback and downside. A three-year model with a base, upside and downside case, tied directly to the assumption log, makes the funding decision about evidence rather than enthusiasm.

                ## Milestones
                1. A three-year model with revenue, cost to serve, people and set-up costs.
                2. Base, upside and downside cases, each linked to named assumptions.
                3. Payback period and peak cash need shown for each case.
                4. A written business case of no more than ten pages reviewed by finance.
              priority: high
              deadlineOffsetDays: 110
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A finance-reviewed business case with base, upside and downside cases, peak cash need and payback is ready for the decision meeting."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Build the three-year model structure with finance"
                - "Link each driver in the model to an entry in the assumption log"
                - "Run base, upside and downside cases and note peak cash need"
                - "Ask the agent to draft the ten-page business case from the model and research"
            - name: Hiring the first country or segment lead
              description: |-
                ## Purpose
                Your first local leader sets the tone, the network and the early customer base, and a poor hire costs a year. Defining whether you need a builder, a seller or an operator, and testing candidates on a real problem from the entry plan, raises the odds of getting this one right.

                ## Milestones
                1. A role profile stating whether the job is mainly build, sell or operate.
                2. A search route chosen: network, local recruiter or internal transfer.
                3. Shortlisted candidates given a real case exercise from the entry plan.
                4. An offer accepted with a 90-day plan and reporting line agreed.

                ## Notes
                Many firms pair a trusted internal transfer with a strong local hire, so the market gets both context and connections.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first local lead has accepted an offer, with a written 90-day plan and a reporting line agreed."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write the role profile and decide if it is build, sell or operate"
                - "Brief a local recruiter or start network outreach"
                - "Set a case exercise based on the beachhead plan"
                - "Agree the 90-day plan with the successful candidate"
            - name: Go or no-go decision paper for the board
              description: |-
                ## Purpose
                Formal commitment to enter usually needs board or owner approval, and a paper that hides the risks invites either a rubber stamp or a stalled discussion. A short paper that sets out the recommendation, the evidence, the staged budget, the kill criteria and the alternatives lets directors ask the right questions and own the decision.

                ## Milestones
                1. A decision paper with recommendation, evidence, budget, risks and alternatives.
                2. The paper circulated to directors at least a week before the meeting.
                3. Pre-meetings held with the two directors most likely to challenge.
                4. The decision and any conditions recorded in the minutes.

                ## Notes
                Start from the **Board meeting** template. Show the do-nothing option honestly; directors trust papers that do.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board or owner has recorded a go, no-go or conditional decision on the entry in the minutes, with any conditions listed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the decision paper with recommendation, budget, risks and alternatives"
                - "Include the do-nothing option and its consequences"
                - "Brief the two most challenging directors before the meeting"
                - "Record the decision and conditions in the minutes and entry log"
            - name: Monthly market entry dashboard
              description: |-
                ## Purpose
                Leaders lose sight of a new market quickly once it is one line in a group report. A one-page dashboard covering pipeline, customers won, revenue, cost to date against the envelope and progress on gate thresholds, reviewed each month, keeps the entry honest and visible.

                ## Milestones
                1. Eight or fewer measures chosen, each linked to a gate threshold or kill criterion.
                2. A data owner named for each measure.
                3. The dashboard produced and reviewed every month.
                4. Actions from each review logged and checked the following month.

                ## Notes
                Start from the **Metrics log** template. Show spend against the approved envelope on the same page as results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page entry dashboard with eight or fewer measures has been reviewed for three consecutive months with actions logged."
                cadence: rolling
              tasks:
                - "Choose up to eight measures tied to gates and kill criteria"
                - "Name a data owner for each measure"
                - "Refresh the entry dashboard figures @recurring(monthly:5)"
                - "Review the dashboard with the sponsor and log actions @recurring(monthly:8)"
            - name: Weekly launch team stand-up for the first six months
              description: |-
                ## Purpose
                In the first months of an entry, problems such as a delayed licence, a stuck shipment or a silent partner need solving within days, not at the next monthly review. A 30-minute weekly stand-up between head office and the local team, with a short written blocker list, keeps both sides moving.

                ## Milestones
                1. A fixed weekly slot that works across both time zones.
                2. A shared blocker list with an owner and date for each item.
                3. Each meeting ending with blockers assigned and no item older than three weeks without escalation.
                4. The stand-up reviewed after six months and moved to fortnightly or stopped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly stand-up has run for at least twelve weeks, with a dated blocker list and no item older than three weeks without escalation."
                cadence: rolling
              tasks:
                - "Pick a weekly slot that suits both time zones"
                - "Set up a shared blocker list with owners and dates"
                - "Run the 30-minute launch stand-up and update blockers @recurring(weekly:tue)"
                - "Escalate any blocker older than three weeks to the sponsor"
                - "Send the sponsor a one-paragraph weekly launch note @recurring(weekly:fri)"
            - name: New market risk register
              description: |-
                ## Purpose
                Political change, currency moves, partner failure, key-person loss and regulatory shifts hit a small new operation harder than the home business. A dedicated register for the market, with owners and early warning signs, means risks are watched by someone rather than discovered by everyone.

                ## Milestones
                1. The top fifteen risks for the market recorded with likelihood and impact.
                2. An owner, early warning sign and response named for each.
                3. The register reviewed monthly and the top five reported to the sponsor.
                4. Any risk crossing its warning sign escalated within a week.

                ## Notes
                Start from the **Risk register** template. Include the risk of the home team losing interest; it is one of the most common causes of retreat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register with at least fifteen risks, owners and warning signs shows monthly review dates for three months running."
                cadence: rolling
              tasks:
                - "List the top fifteen risks for the market with likelihood and impact"
                - "Name an owner and early warning sign for each risk"
                - "Review the market risk register with the risk owners @recurring(monthly:19)"
                - "Send the top five risks to the sponsor after each review @recurring(monthly:20)"
            - name: Regulatory and political change watch
              description: |-
                ## Purpose
                Tariffs, data rules, licensing regimes and foreign investment policy can change with a budget or an election. A light monthly scan of official sources, trade association bulletins and your counsel's updates gives early warning so the entry plan can adjust before a deadline arrives.

                ## Milestones
                1. Five to eight sources chosen: the regulator, trade ministry, association and counsel bulletins.
                2. Alerts or subscriptions set up for each source.
                3. A monthly scan recorded in a short change log.
                4. Each material change assessed with counsel and reflected in the risk register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log shows a monthly scan for six months, and each material change links to a risk register update."
                cadence: rolling
              tasks:
                - "Choose five to eight official and industry sources for the market"
                - "Subscribe to alerts from the regulator and trade association"
                - "Scan the sources and add changes to the log @recurring(monthly:24)"
                - "Ask counsel to assess any change that affects licences or structure"
                - "Hold a short regulatory update call with local counsel @recurring(quarterly)"
            - name: Quarterly stage gate review
              description: |-
                ## Purpose
                Gates only work if they are actually held, on time, against the thresholds written before launch. A quarterly review where the decision owner checks the evidence against the gate document and decides to continue, adjust, pause or stop stops the entry from running on momentum alone.

                ## Milestones
                1. The gate review held each quarter with the decision owner present.
                2. Evidence presented against the thresholds in the gate document, not new measures.
                3. A continue, adjust, pause or stop decision recorded each time.
                4. Budget for the next stage released only after a pass.

                ## Notes
                Bring someone from outside the entry team to each review. Fresh eyes make it easier to say what the numbers show.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has a recorded gate decision against the original thresholds, and stage budgets were released only after a pass."
                cadence: cyclic
              tasks:
                - "Put the first gate review in the decision owner's calendar"
                - "Prepare evidence against the written thresholds for the gate review @recurring(quarterly)"
                - "Invite one leader from outside the entry team to each review"
                - "Record the decision and release or hold the next stage budget"
            - name: Early customer feedback loop in the new market
              description: |-
                ## Purpose
                First customers in a new market tell you what the localisation missed, what the partner is promising and why deals are lost, but only if someone asks and writes it down. A monthly call with a handful of early customers and a themed summary feeds product, pricing and partner decisions while they are still cheap to change.

                ## Milestones
                1. A panel of eight to twelve early customers who agree to monthly contact.
                2. Monthly calls or short surveys completed and notes kept.
                3. Feedback grouped into themes with counts each month.
                4. Each theme assigned to an owner with a response recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A customer panel of at least eight has been contacted monthly for three months, with themed feedback and an owner response for each theme."
                cadence: rolling
              tasks:
                - "Invite eight to twelve early customers to a monthly feedback panel"
                - "Call two or three panel customers and log their feedback @recurring(monthly:15)"
                - "Group the month's feedback into themes with counts"
                - "Assign each theme to an owner and record their response"
                - "Share the monthly themes with product and the partner @recurring(monthly:17)"
            - name: Head office and local team operating rhythm
              description: |-
                ## Purpose
                Local teams in a new market often feel either ignored or micromanaged by head office, and good local hires leave over it. Agreeing which decisions sit locally, how support requests are handled and when leaders visit gives the new team room to act while head office keeps the view it needs.

                ## Milestones
                1. A one-page list of decisions the local lead can make without approval.
                2. A named head office contact for finance, legal, product and people requests.
                3. A visit schedule for senior leaders agreed for the first year.
                4. A monthly one-to-one between the local lead and sponsor running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A local decision list and named head office contacts are agreed, and the monthly sponsor one-to-one has run for three months."
                cadence: rolling
              tasks:
                - "Draft the list of decisions the local lead can make alone"
                - "Name a head office contact for finance, legal, product and people"
                - "Hold the sponsor and local lead one-to-one @recurring(monthly:27)"
                - "Schedule senior leader visits for the first year"
            - name: Partner performance review
              description: |-
                ## Purpose
                Distributors and local partners juggle many principals, and attention drifts to whoever pushes hardest. A quarterly review against the agreed targets, joint pipeline and marketing commitments keeps the relationship productive and gives you the evidence for renewal, renegotiation or exit.

                ## Milestones
                1. Partner targets and commitments written into one scorecard.
                2. A quarterly review meeting held with the partner's senior contact.
                3. Agreed actions from each review followed up within a month.
                4. A renewal, renegotiate or exit recommendation written before the contract term ends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A partner scorecard has been reviewed quarterly with the partner, and a renewal recommendation exists before the term ends."
                cadence: cyclic
              tasks:
                - "Turn the partner's targets and commitments into a scorecard"
                - "Hold the partner scorecard review with their senior contact @recurring(quarterly)"
                - "Follow up each agreed action within a month"
                - "Write the renewal recommendation three months before term ends"
            - name: Launch readiness checklist for the new market
              description: |-
                ## Purpose
                Launch day in a new market fails on small things: invoices in the wrong currency, a support line nobody answers in the local time zone, a missing registration on the website. A single readiness checklist covering legal, finance, product, sales, support and marketing, checked two weeks before launch, catches them while they can still be fixed.

                ## Milestones
                1. A checklist with an owner for every item across six functions.
                2. A readiness review held two weeks before launch.
                3. Every red item either fixed or explicitly accepted by the sponsor.
                4. A launch date confirmed in writing to the team and partner.

                ## Notes
                Start from the **Operational checklist** template. Test a real order, invoice and support request end to end before launch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A readiness checklist with owners shows no unaccepted red items, and an end-to-end test order was completed before launch."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the readiness checklist across legal, finance, product, sales, support and marketing"
                - "Assign an owner to every checklist item"
                - "Run a test order, invoice and support request end to end"
                - "Hold the readiness review two weeks before launch"
            - name: Pilot launch in the beachhead
              description: |-
                ## Purpose
                Pilots are where the plan meets paying customers, and each needs a clear start, a set length and a defined question to answer. Launching in the beachhead with a fixed pilot period, usually three to six months, and the gate thresholds in view, makes the end-of-pilot decision straightforward.

                ## Milestones
                1. The pilot start date, length and question announced to the team and partner.
                2. Launch activity delivered to the fifty named prospects.
                3. First paying customers signed and onboarded.
                4. Pilot results compiled against the gate thresholds at the end of the period.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pilot ran for its agreed period, and its results against each gate threshold are compiled in a single report."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Announce the pilot start date, length and question to the team"
                - "Start outreach to the fifty named prospects in the beachhead"
                - "Onboard each new customer with the localised process"
                - "Compile pilot results against the gate thresholds"
            - name: First ten paying customers in the new market
              description: |-
                ## Purpose
                The first ten customers prove that someone will pay, show the real sales cycle and become the references every later prospect asks about. Treating them as a distinct milestone, with leadership involvement in each deal and a written case for each, turns early wins into the evidence and stories the scale stage needs.

                ## Milestones
                1. A target list of twenty prospects most likely to become the first ten.
                2. Ten paying customers signed in the new market.
                3. The sales cycle length and discount given recorded for each.
                4. At least three customers agreeing to act as references.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ten paying customers are signed, with sales cycle and discount recorded for each and at least three agreed references."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick the twenty prospects most likely to buy first"
                - "Join the first call of each of the first ten deals"
                - "Record cycle length and discount for every signed customer"
                - "Ask three happy customers to act as references"
            - name: Ninety-day post-launch review
              description: |-
                ## Purpose
                Three months after launch there is enough evidence to see which assumptions held and which did not, but the plan can still be changed cheaply. A structured review with the local team, partner and sponsor resets targets, budgets and priorities from fact rather than hope.

                ## Milestones
                1. Results gathered against the business case and the assumption log.
                2. A review held with the local lead, partner and sponsor.
                3. Three to five changes agreed to the plan, budget or targets.
                4. The revised plan circulated within a week of the review.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A post-launch review has produced three to five recorded changes, and a revised plan was circulated within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare results so far with the business case and assumption log"
                - "Hold the review with the local lead, partner and sponsor"
                - "Agree three to five changes to plan, budget or targets"
                - "Circulate the revised plan within a week"
            - name: Scale, hold or exit decision after the pilot
              description: |-
                ## Purpose
                At the end of the pilot the organisation faces its biggest entry decision: commit serious money, keep testing or withdraw. Bringing the pilot report, the gate thresholds and the revised model to a single decision meeting makes sure the choice is made on purpose, and recorded, rather than drifting into a default.

                ## Milestones
                1. The pilot report, revised model and gate thresholds assembled in one pack.
                2. A recommendation written by the core team with dissenting views included.
                3. A scale, hold or exit decision made by the decision owner or board.
                4. The next stage plan or the exit plan started within a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scale, hold or exit decision is recorded by the decision owner or board, with the next plan started within a month."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Assemble the pilot report, revised model and gate thresholds"
                - "Write the core team's recommendation including dissenting views"
                - "Hold the scale, hold or exit decision meeting"
                - "Start the next stage plan or the exit plan"
            - name: Yearly market entry retrospective
              description: |-
                ## Purpose
                Each entry teaches the organisation things that the next entry will otherwise relearn at full price. A yearly retrospective with everyone involved, covering what the research got right, where the plan was wrong and what to change in the process, turns one market's experience into a better playbook.

                ## Milestones
                1. A retrospective held with the core team, local lead and a partner representative.
                2. What went well, what went wrong and what surprised everyone recorded.
                3. Five lessons written as changes to the entry process.
                4. The lessons added to the entry playbook or charter template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written retrospective lists five process changes, and each is reflected in the entry playbook within a month."
                cadence: cyclic
              tasks:
                - "Invite the core team, local lead and a partner to the retrospective"
                - "Run the yearly entry retrospective and record lessons @recurring(yearly)"
                - "Turn the lessons into five changes to the entry process"
                - "Update the playbook with the agreed changes"
            - name: Founder's first international expansion on a lean budget
              description: |-
                ## Purpose
                A founder with a small team cannot fund a subsidiary and a country manager, and does not need to. Testing a foreign market with remote selling, a marketplace or one channel partner, a fixed spend cap and a 90-day review gives real evidence without betting the company or the founder's attention.

                ## Milestones
                1. A lean entry route chosen that needs no local entity or hire.
                2. A fixed spend cap and a 90-day evidence target written down.
                3. The founder's weekly hours on the market capped and protected.
                4. A continue or stop decision made at day 90 and shared with investors or co-founders.

                ## Notes
                Check with an accountant whether remote selling creates a tax presence in the target country before the first sale.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A lean entry ran within its spend cap for 90 days and ended with a recorded continue or stop decision shared with co-founders or investors."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a route that needs no local entity, such as a marketplace or one partner"
                - "Write the spend cap and the 90-day evidence target"
                - "Block the founder's weekly hours for the market in the calendar"
                - "Share the day-90 continue or stop decision with co-founders or investors"
            - name: Manager building an entry case for senior leadership
              description: |-
                ## Purpose
                Middle managers are often asked to look into a market with no budget, no team and a sceptical executive group. Framing a short, staged proposal that asks only for the next step, such as funding a discovery phase, is far more likely to get a yes than a full plan asking for the whole investment at once.

                ## Milestones
                1. The decision-makers and their likely objections listed.
                2. A five-page proposal asking for the next stage only, with its cost and question.
                3. Pre-reads shared with two sympathetic and one sceptical executive.
                4. A decision on the next stage recorded with any conditions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A five-page staged proposal has been presented, and a recorded decision on funding the next stage exists."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List each executive who will decide and their likely objection"
                - "Draft a five-page proposal for the next stage only"
                - "Share a pre-read with one sceptical and two supportive executives"
                - "Record the decision and any conditions they set"
            - name: Reusable market entry playbook for an enterprise
              description: |-
                ## Purpose
                Large organisations enter markets every year but often start from a blank page each time, with different templates, gates and approvals. A shared playbook with standard stages, templates, decision rights and lessons from past entries cuts set-up time and makes portfolio comparisons fair.

                ## Milestones
                1. Past entries reviewed for what each team built from scratch.
                2. A standard set of stages, gates and templates drafted.
                3. Decision rights for each stage agreed with the executive team.
                4. The playbook piloted on one live entry and revised.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved entry playbook with stages, gates, templates and decision rights has been used on at least one live entry."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect the plans and templates from the last three market entries"
                - "Draft standard stages, gates and templates"
                - "Agree decision rights per stage with the executive team"
                - "Pilot the playbook on one live entry and record changes"
            - name: Waterfall or sprinkler sequencing of several markets
              description: |-
                ## Purpose
                When several markets look attractive, leaders must choose between entering one after another, learning as they go, or many at once to claim position before rivals. Comparing the two approaches against your capital, team depth and how fast competitors move leads to an explicit sequence rather than a scramble.

                ## Milestones
                1. The candidate markets for the next three years listed in one view.
                2. Waterfall and sprinkler sequences modelled for capital, people and timing.
                3. Dependencies between markets noted, such as shared hubs or regulators.
                4. A sequence chosen with the trigger for starting each next market.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded market sequence for three years names each market's start trigger and the capital and people it needs."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every candidate market for the next three years"
                - "Model a one-at-a-time and an all-at-once sequence with finance"
                - "Note shared hubs, regulators and partners between markets"
                - "Write the chosen sequence with a start trigger for each market"
            - name: Expanding from a small home market into a regional bloc
              description: |-
                ## Purpose
                Firms from small economies, such as a Caribbean island or a small European state, often outgrow home quickly and look to a regional trade bloc next. Understanding how the bloc's rules on movement of goods, services and skilled people work in practice, and which neighbouring market to start with, makes regional expansion a planned step rather than an accident.

                ## Milestones
                1. The bloc's rules on goods, services, people and investment summarised from official sources.
                2. Gaps between the rules on paper and practice checked with firms that have expanded.
                3. Two neighbouring markets compared as the first regional step.
                4. A regional entry choice recorded with the first market named.

                ## Notes
                Examples include CARICOM's single market arrangements or other regional trade agreements. Confirm current rules with the trade ministry, as implementation varies by country.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A summary of the bloc's rules checked with at least two firms, and a recorded choice of first regional market, are filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the bloc's official guidance on goods, services and skilled people"
                - "Ask two firms that expanded regionally what worked in practice"
                - "Compare two neighbouring markets as the first step"
                - "Record the first regional market and the reasons"
            - name: Bringing the board along on a multi-year entry
              description: |-
                ## Purpose
                Market entries usually take three to five years to pay back, longer than most boards' patience. Agreeing how and how often the board hears about the entry, with honest early indicators rather than revenue alone, keeps support steady through the loss-making years and avoids a sudden withdrawal of funding.

                ## Milestones
                1. Early indicators agreed with the board that show progress before revenue.
                2. A reporting rhythm set for the entry within regular board papers.
                3. One director with relevant market experience asked to act as a sounding board.
                4. A yearly deep-dive on the entry scheduled in the board calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The board has agreed early indicators and a reporting rhythm, and a yearly entry deep-dive is in the board calendar."
                cadence: rolling
              tasks:
                - "Propose four early indicators the board will track before revenue"
                - "Add an entry update section to the regular board pack"
                - "Ask one experienced director to be the entry sounding board"
                - "Prepare the entry update for the board pack @recurring(quarterly)"
            - name: Joint venture governance and exit terms preparation
              description: |-
                ## Purpose
                Joint ventures are a common way into markets with ownership limits or strong incumbents, and many end in dispute over control, funding and exit. Preparing your positions on board seats, reserved matters, funding calls, deadlock and exit before negotiations start, and taking them to counsel, protects the relationship and your options.

                ## Milestones
                1. Your objectives for the venture and walk-away points written down.
                2. Positions drafted on governance, reserved matters, funding and deadlock.
                3. Exit routes listed, including buy-out rights and triggers.
                4. The term sheet positions reviewed by counsel experienced in joint ventures.

                ## Notes
                Organisational only. Agreements must be drafted and reviewed by qualified counsel in each jurisdiction.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A positions paper covering governance, funding, deadlock and exit has been reviewed by joint venture counsel before negotiations start."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write your objectives and walk-away points for the venture"
                - "Draft positions on board seats, reserved matters and funding calls"
                - "List exit routes and the events that would trigger them"
                - "Book a review of the positions paper with joint venture counsel"
            - name: Tariffs, trade agreements and rules of origin review
              description: |-
                ## Purpose
                For physical goods, duties, non-tariff barriers and rules of origin can wipe out a price advantage, while a trade agreement can create one. Reviewing the tariff classification of your products, the agreements that apply and the paperwork needed to claim preferences, with a customs broker, gives the business case its true landed cost.

                ## Milestones
                1. Tariff classifications confirmed for each product to be exported.
                2. Applicable trade agreements and preference conditions identified.
                3. Landed cost per product calculated with duties, freight and fees.
                4. Origin documentation and broker arrangements in place for the first shipment.

                ## Notes
                Ask a licensed customs broker or the customs authority to confirm classifications. Misclassification is a common and costly error.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A landed cost sheet per product, based on broker-confirmed classifications and applicable agreements, is used in the business case."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List each product to be exported with its likely tariff code"
                - "Ask a customs broker to confirm classifications and duty rates"
                - "Identify trade agreements and the origin rules for each product"
                - "Calculate the landed cost per product for the business case"
            - name: Planned market exit and wind-down
              description: |-
                ## Purpose
                Exiting a market badly damages customers, staff, partners and the brand in every other market. Preparing a wind-down plan in advance, covering contracts, employees, customer migration, regulators and the entity, means that if the kill criteria are met the exit is orderly and fast.

                ## Milestones
                1. Notice periods and termination terms listed for every contract and partner.
                2. Employee obligations and redundancy steps confirmed with local counsel.
                3. A customer transition plan drafted, including data return or migration.
                4. Steps and costs to close or dormant the entity estimated.

                ## Notes
                Keep the plan with the sponsor and counsel only. A wind-down plan shared widely can unsettle a team that is succeeding.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A confidential wind-down plan with notice periods, employee steps, customer transition and entity closure costs is held by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List termination terms and notice periods for every contract"
                - "Confirm employee obligations on closure with local counsel"
                - "Draft a customer transition and data return plan"
                - "Estimate the cost and time to close or dormant the entity"
---

# New Market Entry Strategy

This area is for the founder weighing a first move abroad, the manager asked to build the case for a new segment, and the enterprise leader sequencing several countries at once. It starts with the question, the rationale and a screen of candidate markets, moves through customer, regulatory and channel research, then the big choices on entry model, partners, offer and pilot, and ends with launch, the reviews that decide whether to scale, and the specialist work of joint ventures, trade rules and planned exits.

What repeats is the machinery of a live entry: a monthly dashboard and assumption review, a risk register and regulatory watch, a weekly launch stand-up in the first months, a quarterly stage gate and a yearly retrospective. The **Board meeting**, **Vendor**, **Trip**, **Risk register**, **Metrics log** and **Operational checklist** templates pair with the decision paper, partner selection, market visit, risk work, dashboard and launch readiness. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
