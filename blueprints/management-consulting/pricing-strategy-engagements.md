---
id: management-consulting.pricing-strategy-engagements
name: Pricing Strategy Engagements
description: "A delivery method for client pricing work: the pricing decision framed, a price waterfall from list to pocket, willingness-to-pay research, discount leakage closed, controlled pilots and a sales rollout that holds."
category: business
version: 1.0.0
tags: [management-consulting, pricing-strategy-engagements, knowledge-worker, pricing, price-waterfall, willingness-to-pay, discount-leakage, price-architecture]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - meeting-notes
    - purchase-decision
    - training-program
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pricing Strategy Engagements
          description: "Delivering pricing work for clients: price architecture, willingness-to-pay research, discount leakage, pilot tests and sales team rollout."
          projects:
            - name: The pricing decision the client has to take
              description: |-
                ## Purpose
                Clients often ask for a pricing review when what they need is one decision: whether to push a list increase through this year, how to stop margin erosion in one channel, or what to charge for a new product. Writing that decision in one sentence, with the date it will be taken and who takes it, tells you which analyses matter and stops the work drifting into a general pricing audit.

                ## Milestones
                1. The decision written in one sentence, with the owner and the date it will be taken.
                2. The profit or margin outcome the sponsor expects, stated as a range rather than a promise.
                3. Three to five questions the engagement must answer to support that decision.
                4. The decision statement confirmed by the sponsor in writing.

                ## Notes
                If the sponsor names a target such as two points of margin before any analysis, record it as their ambition, not as the engagement's commitment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence pricing decision with owner, date and up to five supporting questions, confirmed by the sponsor by email."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor which pricing decision this work must support and by when"
                - "Draft the decision statement and the supporting questions on one page"
                - "Separate the sponsor's margin ambition from what the team will commit to"
                - "Send the page to the sponsor for written confirmation"
            - name: Pricing engagement scope and phase plan
              description: |-
                ## Purpose
                Pricing engagements usually run in three phases: a diagnostic of where money is lost, design of the new architecture and rules, and a pilot with rollout. Agreeing which products, regions and channels are in scope, and what each phase delivers, protects the team from a late request to cover every business unit for the same fee and timeline.

                ## Milestones
                1. Products, customer segments, regions and channels in scope listed, with exclusions named.
                2. Diagnostic, design and pilot phases each defined by a deliverable and an end date.
                3. Client counterparts named for finance, sales operations and each business unit in scope.
                4. The scope note signed off by the sponsor before data collection starts.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed scope note listing in-scope products, segments and channels and the deliverable and end date of each of three phases."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every product line, region and channel the client sells through"
                - "Mark each one in or out of scope with the sponsor"
                - "Write the deliverable and end date for the diagnostic, design and pilot phases"
                - "Name a client counterpart in finance and in sales operations"
            - name: Transaction data request for pricing analysis
              description: |-
                ## Purpose
                Almost every pricing insight comes from invoice lines, and most client systems store list price, on-invoice discounts and year-end rebates in different places. A precise request for two to three years of line-level transactions, with customer, product, quantity, list price, net price and every rebate and allowance, saves weeks of back and forth and decides how deep the diagnostic can go.

                ## Milestones
                1. A field-by-field request listing invoice lines, customer and product masters and rebate accruals.
                2. The period, currency handling and unit of measure agreed with the client's finance team.
                3. A sample extract received and checked for missing fields before the full pull.
                4. The full dataset reconciled to reported revenue within an agreed tolerance.

                ## Notes
                Ask for off-invoice items such as rebates, marketing funds, payment terms and free freight explicitly. Clients rarely send them unless named, and they are often where the largest leakage sits.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Line-level transaction data for the agreed period received and reconciled to reported revenue within the tolerance agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the field list for invoice lines, masters and rebate accruals"
                - "Agree the period, currency and unit of measure with client finance"
                - "Request a one-month sample extract and check it for gaps"
                - "Reconcile the full extract to reported revenue by year"
            - name: Price waterfall from list to pocket price
              description: |-
                ## Purpose
                Between the list price and the money that actually stays with the client sit on-invoice discounts, promotions, rebates, payment terms, freight and co-marketing funds. Building the waterfall for the business in scope shows how much of list is given away, in which elements, and is usually the single slide that earns the engagement its credibility in the first steering committee.

                ## Milestones
                1. Every element between list and pocket price defined and sourced from the data.
                2. An average waterfall for the business with each element as a percentage of list.
                3. Waterfalls for the three largest segments or channels side by side.
                4. The total leakage reconciled to the profit and loss account and agreed with finance.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A price waterfall for the in-scope business and its three largest segments, each element sourced and the total agreed with client finance."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every discount, rebate and allowance the client offers"
                - "Map each element to a field or accrual in the transaction data"
                - "Build the average waterfall and the three segment waterfalls"
                - "Walk the finance lead through the reconciliation to the accounts"
            - name: Current price architecture map
              description: |-
                ## Purpose
                Before redesigning anything, the team needs to see what exists: how many price lists, tiers, pack sizes and customer-specific prices are in use, and how they relate. A one-page map of the current architecture often reveals that the same product sells at eleven different list prices with no logic anyone can explain.

                ## Milestones
                1. Every active price list and its intended customer group catalogued.
                2. Products grouped by family with their price points and pack or tier steps.
                3. Customer-specific and contract prices counted and sized by revenue.
                4. A one-page architecture map reviewed with the head of sales operations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page map of current price lists, tiers and contract prices, with revenue attached to each and reviewed by sales operations."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request every active price list from sales operations"
                - "Group products into families and lay out their price steps"
                - "Count customer-specific prices and the revenue they carry"
                - "Review the draft map with the head of sales operations"
            - name: Competition law guardrails for pricing work
              description: |-
                ## Purpose
                Of all consulting work, pricing is where a careless email can create real legal exposure: sharing one client's prices with another, collecting competitor price intentions, or advising on prices to resellers. Agreeing written guardrails with the client's legal counsel at the start protects the client, the firm and you personally.

                ## Milestones
                1. The client's legal counsel briefed on the work and their rules for pricing data recorded.
                2. A written list of what the team may and may not collect about competitors.
                3. Rules for resale price discussions with distributors or retailers confirmed by counsel.
                4. Every team member briefed and the guardrails stored with the engagement files.

                ## Notes
                Start from the **Risk register** template. This project is about agreeing rules with counsel, not about forming a legal view yourself. Public competitor prices are usually fine to collect; private price intentions from competitors are not.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written competition law guardrails agreed with the client's counsel and acknowledged by every team member before competitor data is collected."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a short call with the client's legal counsel about pricing data"
                - "Draft the list of permitted and forbidden competitor information"
                - "Ask counsel how resale price discussions with resellers should be handled"
                - "Brief every team member and record their acknowledgement"
            - name: Margin and cost-to-serve by customer segment
              description: |-
                ## Purpose
                Two customers paying the same net price can be worth very different amounts once order size, delivery frequency, returns and payment days are counted. A cost-to-serve view by segment turns price discussions into margin discussions, and usually shows a tail of small, frequent, heavily discounted customers that lose money.

                ## Milestones
                1. The main cost-to-serve drivers chosen with finance, such as orders, drops, returns and payment days.
                2. Each driver costed with a simple activity rate agreed by finance.
                3. Pocket margin calculated for every customer and grouped into segments.
                4. A chart of customers ranked by pocket margin showing where value is lost.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Pocket margin after cost-to-serve calculated for every in-scope customer, with activity rates agreed by client finance."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Agree three to five cost-to-serve drivers with client finance"
                - "Collect order, delivery and returns counts by customer"
                - "Apply the activity rates and calculate pocket margin per customer"
                - "Draw the ranked pocket margin curve for the steering pack"
            - name: Pricing decision rights and discount authority map
              description: |-
                ## Purpose
                Leakage rarely comes from bad prices; it comes from who is allowed to give discounts and how easily. Mapping who sets list prices, who approves deal discounts at each level and how often approvals are actually requested shows where the governance has gaps before any redesign starts.

                ## Milestones
                1. Owners of list price setting, deal discounts, rebates and payment terms named.
                2. The written discount authority levels set beside actual approval behaviour from the data.
                3. Deals above authority without recorded approval counted and sized.
                4. A one-page decision rights map agreed with the commercial director.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A decision rights map naming owners of each pricing lever, with the share of discount value granted outside written authority calculated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask sales operations for the written discount authority policy"
                - "Interview two sales managers about how approvals happen in practice"
                - "Compare policy levels with actual discounts in the transaction data"
                - "Draft the decision rights map and review it with the commercial director"
            - name: Customer and product segmentation for pricing
              description: |-
                ## Purpose
                Segment pricing only works if the segments differ in what customers value and how they buy, not just in size. Agreeing a segmentation that sales can recognise, such as by buying behaviour, need and channel, gives every later analysis, from waterfalls to price bands, a common frame.

                ## Milestones
                1. Two or three candidate segmentations tested against differences in price paid and margin.
                2. One segmentation chosen, with rules simple enough for sales to apply to a new customer.
                3. Every customer in the dataset assigned to a segment.
                4. Products grouped into roles such as traffic builders, core and specialist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One customer segmentation and one product role grouping chosen, with every customer and product in the data assigned."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch three possible customer segmentations with the sales lead"
                - "Test which one shows the widest real differences in price and margin"
                - "Write the assignment rules for the chosen segmentation"
                - "Tag every product with a role such as traffic builder or specialist"
            - name: Early pricing hypotheses after two weeks
              description: |-
                ## Purpose
                By the end of week two the team has enough data and interviews to state where it thinks the money is: an undisciplined rebate programme, list prices that lag value, or a channel with uncontrolled discounting. Writing those hypotheses down, each with the analysis that would prove or kill it, keeps the diagnostic focused.

                ## Milestones
                1. Five to eight hypotheses written as testable statements with a rough value each.
                2. The analysis, data source and owner named for each hypothesis.
                3. The hypotheses reviewed with the manager and ranked by value and ease of proof.
                4. A dated note recording which hypotheses were confirmed or dropped at the end of the diagnostic.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of five to eight pricing hypotheses, each with an analysis and owner, and its final status recorded at the end of the diagnostic."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write each emerging pricing hypothesis as a testable sentence"
                - "Attach a rough value and the analysis that would test it"
                - "Rank the list with the manager by value and ease of proof"
                - "Record the confirmed or dropped status of each at diagnostic close"
            - name: Weekly discount leakage tracker
              description: |-
                ## Purpose
                Once the waterfall shows where leakage sits, the client needs to see it every week, otherwise the conversation slides back to anecdotes about one big account. A simple Monday update of discount depth by segment, region and sales rep, against last week and the target, keeps attention on the numbers that pay for the engagement.

                ## Milestones
                1. A tracker showing average discount and leakage by segment, region and rep.
                2. The tracker refreshed from new transaction data every Monday.
                3. Movements above an agreed threshold explained in one line each.
                4. The tracker handed to a named client analyst before the engagement ends.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The leakage tracker refreshed every Monday through the engagement, with large movements explained, and owned by a named client analyst at handover."
                cadence: rolling
              tasks:
                - "Build the tracker layout with segment, region and rep views"
                - "Refresh the tracker from new invoices and note large moves @recurring(weekly:mon)"
                - "Send a monthly leakage summary to the commercial director @recurring(monthly:3)"
                - "Train the client analyst who will run it after handover"
            - name: Deal desk exception review routine
              description: |-
                ## Purpose
                When new discount rules go live, the first test is what happens to the deals that ask for more. A short twice-weekly review of exception requests with the deal desk or sales operations shows whether the rules are holding, which ones are too tight, and which reps need coaching rather than more authority.

                ## Milestones
                1. A log of every exception request with customer, size, discount asked and decision.
                2. Exceptions reviewed twice a week with sales operations.
                3. Patterns written up monthly, such as one rule that triggers most requests.
                4. Rule changes proposed from the evidence rather than from the loudest complaint.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every discount exception logged and reviewed within four working days, with a monthly pattern note and any rule changes backed by the log."
                cadence: rolling
              tasks:
                - "Set up the exception log with the deal desk"
                - "Review new exception requests with sales operations @recurring(weekly:tue,fri)"
                - "Write the monthly pattern note on which rules trigger exceptions @recurring(monthly:24)"
                - "Propose one evidence-based rule change if the log supports it"
            - name: Monthly price realisation dashboard
              description: |-
                ## Purpose
                Price realisation, the share of planned increase that actually reaches pocket price, is the number a chief financial officer will judge the engagement by. A monthly dashboard that splits revenue change into price, volume and mix stops a good volume month being mistaken for pricing success, or a mix shift for failure.

                ## Milestones
                1. A price, volume and mix bridge agreed with finance on method and definitions.
                2. Realisation against the planned increase shown by segment each month.
                3. The dashboard issued within ten working days of month end.
                4. The method written down so the client can reproduce it after the engagement.

                ## Notes
                Start from the **Metrics log** template. Agree the bridge method with finance once and do not change it mid-year; changing the method is the quickest way to lose the chief financial officer's trust.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A price, volume and mix dashboard issued monthly within ten working days of month end, using a method written down and agreed with finance."
                cadence: rolling
              tasks:
                - "Agree the price, volume and mix bridge method with finance"
                - "Issue the monthly realisation dashboard to the sponsor @recurring(monthly:10)"
                - "Write a one-page method note for the client team"
                - "Flag segments below half of planned realisation to the sponsor @recurring(monthly:12)"
            - name: Public competitor price monitoring log
              description: |-
                ## Purpose
                Sales teams always say competitors are cheaper, and they are sometimes right. A log of competitor prices taken only from public sources, such as websites, published catalogues and tenders, gives the team evidence instead of anecdote, inside the guardrails agreed with counsel.

                ## Milestones
                1. Five to ten comparable products chosen with matching specifications.
                2. Public sources for each competitor price recorded with date and link.
                3. The log updated monthly and price index charts drawn against the client.
                4. Sales claims of being undercut checked against the log before action.

                ## Notes
                Only public prices go in this log. Never ask customers, distributors or former employees for competitors' non-public prices, and follow the guardrails agreed with counsel.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated, sourced log of public competitor prices for at least five matched products, updated monthly through the engagement."
                cadence: rolling
              tasks:
                - "Choose five matched products with comparable specifications"
                - "Record public competitor prices with source and date @recurring(monthly:17)"
                - "Redraw the price index of client against competitors @recurring(quarterly)"
                - "Check the latest undercutting claim from sales against the log"
            - name: Friday pilot results readout
              description: |-
                ## Purpose
                During a price pilot the sponsor and the sales director want to know every week whether volumes are holding. A short Friday note comparing test and control groups on price, volume and margin, with the caveats stated, prevents a nervous early cancellation after one bad week.

                ## Milestones
                1. A one-page readout format agreed with the sponsor before the pilot starts.
                2. Test and control results issued every Friday of the pilot.
                3. Early noise separated from real effects using the confidence agreed in the pilot design.
                4. A cumulative view kept so the final pilot readout needs no new analysis.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A test versus control readout issued every Friday of the pilot, with caveats stated and a cumulative view maintained."
                cadence: rolling
              tasks:
                - "Agree the one-page readout format with the sponsor"
                - "Issue the test versus control readout to the sponsor @recurring(weekly:fri)"
                - "Add each week to the cumulative pilot view"
                - "Note any outside events such as a competitor promotion that week"
            - name: Sales feedback loop on new price lists
              description: |-
                ## Purpose
                A price list can be right on paper and still fail because reps cannot explain it or a key account reacts badly. A fortnightly call with a small panel of reps and sales managers during rollout surfaces those problems while they can still be fixed with a script or a rule tweak.

                ## Milestones
                1. A panel of six to eight reps and managers across regions recruited.
                2. Fortnightly calls held through the rollout with notes kept.
                3. Recurring objections turned into answers in the sales guide.
                4. Issues that need a rule change passed to the pricing owner with evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fortnightly panel calls held through the rollout, with each recurring objection answered in the sales guide or escalated with evidence."
                cadence: rolling
              tasks:
                - "Recruit six to eight reps and managers across regions for the panel"
                - "Run the panel call and note objections and workarounds @recurring(weekly:wed)"
                - "Add answers to recurring objections to the sales guide @recurring(monthly:20)"
                - "Send rule change requests to the pricing owner with examples"
            - name: Pricing assumptions and evidence log
              description: |-
                ## Purpose
                Pricing recommendations rest on assumptions such as how much volume will be lost, how competitors will react and what customers will tolerate, and these get challenged hard in the steering committee. Logging each assumption with its source and confidence means every number on the final slide can be defended.

                ## Milestones
                1. Every assumption used in the business case listed with its value and source.
                2. A confidence level and a sensitivity range attached to each.
                3. The log reviewed weekly and updated as pilot evidence arrives.
                4. The final business case linked to the log line by line.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An assumptions log covering every input in the pricing business case, each with source, confidence and range, reviewed weekly."
                cadence: rolling
              tasks:
                - "List every assumption in the current pricing business case"
                - "Add source, confidence and a low and high value for each"
                - "Review and update the log with the team @recurring(weekly:thu)"
                - "Link each line of the final case to its log entry"
            - name: Quarterly price review cycle for the client
              description: |-
                ## Purpose
                Gains from a pricing engagement decay within a year unless someone owns a regular review. Designing a quarterly cycle for the client, covering realisation, leakage, competitor moves and cost changes, with a decision meeting at the end, is the difference between a one-off project and a capability that lasts.

                ## Milestones
                1. A quarterly calendar with data cut-off, analysis and decision meeting dates.
                2. A standard pack of five to eight pages agreed with the commercial director.
                3. The first quarterly review run jointly with the client pricing owner.
                4. The second review run by the client with the team only observing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two quarterly price reviews completed, the second run by the client's pricing owner using the standard pack."
                cadence: cyclic
              tasks:
                - "Draft the quarterly calendar and the standard review pack"
                - "Agree the pack contents with the commercial director"
                - "Prepare the quarterly price review pack with the client owner @recurring(quarterly)"
                - "Hand the second review to the client and observe only"
            - name: Annual list price increase cycle
              description: |-
                ## Purpose
                Many clients raise list prices once a year by a flat percentage set late in the budget process, leaving value on high-differentiation lines and losing volume on commodity ones. Building a yearly cycle with differentiated increases by product role, a customer notice period and a sales briefing turns the annual increase into a planned event.

                ## Milestones
                1. A yearly timeline running from cost and inflation inputs to customer notice dates.
                2. Increase guidelines set by product role and segment rather than one flat rate.
                3. Customer notice letters and sales briefing materials prepared on time.
                4. Realisation of the increase measured three months after it takes effect.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A differentiated annual list increase delivered on the agreed timeline, with realisation measured three months after the effective date."
                cadence: cyclic
              tasks:
                - "Map the client's budget calendar and contract notice periods"
                - "Start the annual increase cycle with cost and inflation inputs @recurring(yearly)"
                - "Set increase ranges by product role and segment"
                - "Measure realisation three months after the increase takes effect"
            - name: Price elasticity basics and their limits
              description: |-
                ## Purpose
                Elasticity is the most quoted and most misused number in pricing. Learning how it is estimated from transaction data, why historic price changes are often confounded by promotions and mix, and when a cross-sectional estimate is meaningless, lets you use elasticities with the right caveats and spot a bad one in a client's own model.

                ## Milestones
                1. Own price and cross price elasticity explained in your own words with an example.
                2. A simple log-log regression run on a sample dataset with promotions controlled for.
                3. Three common traps written down, such as endogeneity and stock-piling around promotions.
                4. One client elasticity estimate reviewed and its reliability judged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked elasticity estimate on sample data with promotions controlled, and a written review of one client estimate's reliability."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read a practitioner chapter on price elasticity estimation"
                - "Run a log-log regression on a sample sales dataset"
                - "Write down three traps that bias elasticity estimates"
                - "Review one existing elasticity figure from a client model"
            - name: Van Westendorp price sensitivity survey
              description: |-
                ## Purpose
                For a new product with no transaction history, the four Van Westendorp questions give a quick, cheap view of acceptable price ranges. Knowing how to design, field and read one, and its weakness of measuring stated rather than revealed behaviour, makes it a useful first step rather than a final answer.

                ## Milestones
                1. The four questions and the resulting curves understood, including the acceptable range.
                2. A survey draft written for a real or practice product with screening questions.
                3. Results from a pilot sample charted and the range read off.
                4. The limits of the method written into the readout so the client does not over-read it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed Van Westendorp analysis on a pilot sample, with the acceptable price range charted and the method's limits stated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the four Van Westendorp questions for a practice product"
                - "Add screening questions so only real buyers answer"
                - "Chart the four curves from a pilot sample"
                - "Write the caveats paragraph for the readout"
            - name: Conjoint analysis for willingness to pay
              description: |-
                ## Purpose
                Conjoint forces respondents to trade features against price, so it reveals what customers will actually pay for each element of an offer far better than asking directly. Learning to design attributes and levels, read part-worths and build a simple market simulator is what separates a pricing specialist from a generalist on these engagements.

                ## Milestones
                1. The difference between choice-based and adaptive conjoint understood.
                2. Attributes and levels drafted for a real offer, with price levels spanning a realistic range.
                3. Part-worth utilities from a sample study converted into willingness to pay per feature.
                4. A simple share-of-preference simulator built and tested on three scenarios.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A conjoint design for a real offer and a working share-of-preference simulator tested on three price scenarios."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Study a worked choice-based conjoint example end to end"
                - "Draft attributes and levels for a real client offer"
                - "Convert sample part-worths into willingness to pay per feature"
                - "Build a share-of-preference simulator in a spreadsheet"
            - name: Value-based pricing and economic value to the customer
              description: |-
                ## Purpose
                In business markets the strongest price argument is the customer's own economics: the cost of the next best alternative plus the value of what makes your client's product different. Building an economic value to the customer model for one product gives sales a reason for the price, not just a number.

                ## Milestones
                1. The next best alternative and its full cost identified for one target customer type.
                2. Differentiating features quantified in money terms with customer evidence.
                3. The economic value calculated and compared with the current price.
                4. A one-page value story drafted that a rep could use in a negotiation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An economic value model for one product with every value driver evidenced, and a one-page value story reviewed by a sales manager."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one product and its main customer type"
                - "Name the next best alternative and cost it fully"
                - "Quantify each differentiating feature with customer evidence"
                - "Draft the one-page value story and test it on a sales manager"
            - name: Pocket price band analysis
              description: |-
                ## Purpose
                Plotting pocket price against deal size for the same product almost always shows a wide band, and the customers at the bottom are often not the largest. Learning to build, read and explain these bands, and to separate justified variation from history and habit, is the core diagnostic skill in a pricing engagement.

                ## Milestones
                1. A pocket price band built for one product family with outliers checked.
                2. Pocket price plotted against volume to test whether size explains the discount.
                3. Customers below the band floor listed with the reasons sales gives.
                4. A recovery estimate made by moving the lowest decile to a defined floor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pocket price band for one product family with a volume scatter and a sized recovery estimate for the lowest decile."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one product family with enough transactions"
                - "Build the pocket price band and check outliers with the data owner"
                - "Plot pocket price against customer volume"
                - "Size the recovery from moving the lowest decile to the floor"
            - name: Price, volume and margin break-even maths
              description: |-
                ## Purpose
                Every pricing debate eventually turns on how much volume can be lost before a price rise stops paying, or how much must be gained for a cut to pay. Being able to work this out quickly from contribution margin, in the room and on a whiteboard, keeps the conversation grounded when someone says the customers will all leave.

                ## Milestones
                1. The break-even volume formula for price rises and cuts derived from contribution margin.
                2. A one-page table of break-even volume changes for common margins and price moves.
                3. The table checked against two real client products.
                4. Ten timed practice questions answered correctly without a spreadsheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A break-even table for common margins and price moves, checked on two client products, and ten timed practice questions answered correctly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Derive the break-even volume change from contribution margin"
                - "Build a table for margins of 20 to 60 percent and moves of 2 to 10 percent"
                - "Check the table on two real client products"
                - "Answer ten timed break-even questions without a spreadsheet"
            - name: Behavioural pricing effects in offer design
              description: |-
                ## Purpose
                Customers do not judge prices in isolation: anchors, decoy options, price endings and how a price is framed all change what they choose. Knowing the well-evidenced effects, and the ones that do not replicate, helps you design price pages, menus and quotes that work without crossing into misleading practice.

                ## Milestones
                1. Anchoring, decoy, compromise and framing effects summarised with a source each.
                2. Two effects that are weaker than popular claims noted with the evidence.
                3. One client offer page or quote reviewed against the effects.
                4. Consumer protection limits on reference prices and drip pricing noted for the client's counsel to confirm.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of behavioural pricing effects with sources, and one client offer reviewed against it with legal points passed to counsel."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two review papers on behavioural pricing effects"
                - "Summarise the effects that hold up, with a source each"
                - "Review one client price page or quote against the summary"
                - "List reference price and drip pricing questions for counsel"
            - name: Customer and sales rep pricing interviews
              description: |-
                ## Purpose
                The data shows what happened; interviews explain why. Ten to fifteen conversations with customers and reps about how prices are negotiated, what alternatives customers weigh and what they would pay more for supply the stories that make the waterfall believable and often the best hypotheses.

                ## Milestones
                1. A separate interview guide for customers and for reps, reviewed by the manager.
                2. Ten to fifteen interviews completed across segments and regions.
                3. Notes coded for themes such as value drivers, negotiation tactics and switching triggers.
                4. A synthesis page linking interview themes to the quantitative findings.

                ## Notes
                Start from the **Meeting notes** template for each interview. Never ask a customer what competitors charge them in private terms; stay inside the guardrails agreed with counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten or more pricing interviews completed across segments, with coded notes and a synthesis page tied to the data findings."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Draft separate guides for customer and sales rep interviews"
                - "Ask the client sales lead for a list of customers to approach"
                - "Code interview notes by value driver and negotiation tactic"
                - "Ask the agent to draft a synthesis page from the coded notes"
            - name: Good, better and best tier redesign
              description: |-
                ## Purpose
                Selling a single product at one price leaves money with customers who would pay more and loses those who want less. Designing a three-tier line-up with clear fences between tiers, built on the willingness-to-pay evidence, lets the client serve price-sensitive buyers without dragging down the whole range.

                ## Milestones
                1. Features assigned to tiers based on willingness-to-pay evidence, not internal preference.
                2. Fences defined so customers cannot easily get best-tier value at the good-tier price.
                3. Price points set with step sizes tested against the research.
                4. Expected migration between tiers estimated with a revenue and margin impact.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A three-tier line-up with features, fences and price points, and an estimated revenue and margin impact from expected migration."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every feature and service and its willingness-to-pay evidence"
                - "Assign features to good, better and best tiers"
                - "Define the fences that stop customers trading down"
                - "Model tier migration and the revenue and margin effect"
            - name: Discount authority matrix redesign
              description: |-
                ## Purpose
                Most discount policies have levels that were set years ago and are now either ignored or so tight that every deal escalates. Redesigning the matrix around deal size, customer segment and margin, with fast approval for justified cases, cuts leakage without slowing the sales cycle.

                ## Milestones
                1. Current approval behaviour analysed by level, time to approve and outcome.
                2. A new matrix drafted with levels tied to pocket margin rather than list discount.
                3. Turnaround standards for each approval level agreed with sales leadership.
                4. The new matrix signed off by the commercial director with a go-live date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new discount authority matrix tied to pocket margin, with approval turnaround standards, signed off with a go-live date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Analyse approval levels, turnaround and outcomes from the last year"
                - "Draft matrix levels based on pocket margin and deal size"
                - "Agree approval turnaround standards with sales leadership"
                - "Present the matrix to the commercial director for sign-off"
            - name: Rebate and off-invoice programme rationalisation
              description: |-
                ## Purpose
                Rebate programmes pile up over years: growth rebates that pay out without growth, loyalty rebates to customers with no alternative, and marketing funds with no proof of spend. Reviewing each programme for what behaviour it buys, and replacing the ones that buy nothing, is often the largest single source of value in the diagnostic.

                ## Milestones
                1. Every rebate and off-invoice programme listed with its cost and conditions.
                2. Each programme tested for whether it changes customer behaviour.
                3. Programmes sorted into keep, redesign and phase out, with value per group.
                4. A transition plan respecting contract terms agreed with sales and legal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every rebate programme classified as keep, redesign or phase out, with value sized and a contract-aware transition plan agreed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List every rebate, allowance and marketing fund with its annual cost"
                - "Check whether customers on each programme actually changed behaviour"
                - "Sort programmes into keep, redesign and phase out"
                - "Ask client legal which contract terms limit the transition"
            - name: Choosing the pricing research method
              description: |-
                ## Purpose
                Teams often run the research method they know rather than the one the question needs. Matching the question, such as setting a new product price, testing a tier structure or measuring reaction to an increase, to interviews, Van Westendorp, conjoint, in-market tests or transaction analysis saves budget and produces evidence the sponsor will believe.

                ## Milestones
                1. The pricing questions written out with the decision each one feeds.
                2. Candidate methods compared on cost, time, sample needed and reliability.
                3. One method chosen per question, with the reasoning recorded.
                4. A research budget and timeline agreed with the sponsor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A method chosen for each pricing question with cost, timeline and reasoning recorded and the research budget approved by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write each pricing question with the decision it feeds"
                - "Compare candidate methods on cost, time and reliability"
                - "Pick one method per question and record why"
                - "Agree the research budget and timeline with the sponsor"
            - name: Cost inflation pass-through options
              description: |-
                ## Purpose
                Sharp input cost rises force clients to choose between a list increase, a temporary surcharge, index-linked contracts or absorbing the cost, and each has different effects on customers, contracts and future flexibility. Laying out the options with margin effects and customer reaction risk lets the leadership team choose deliberately rather than by default.

                ## Milestones
                1. The cost increase sized by product family and its margin effect calculated.
                2. Four pass-through options described with pros, cons and contract constraints.
                3. Margin and volume risk estimated for each option under two cost scenarios.
                4. A recommendation and the leadership decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four pass-through options compared under two cost scenarios, with a recommendation and the leadership team's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Size the cost increase by product family with client finance"
                - "Describe list increase, surcharge, indexation and absorb options"
                - "Model margin and volume risk under two cost scenarios"
                - "Record the leadership decision and the reasons given"
            - name: Subscription and usage-based model options
              description: |-
                ## Purpose
                Software and equipment clients increasingly ask whether to move from licences or one-off sales to subscriptions or usage-based pricing. Comparing the models on value metric, revenue predictability, customer adoption and the transition hit to cash flow gives the board a fair view before it commits to a change that is hard to reverse.

                ## Milestones
                1. Candidate value metrics listed, such as seats, transactions or outcomes, and tested with customers.
                2. Two or three models compared on revenue, predictability and customer fit.
                3. The transition effect on revenue and cash modelled over three years.
                4. A recommendation with the conditions under which it should be revisited.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three pricing models compared on a chosen value metric, with a three-year transition model and a recommendation for the board."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List candidate value metrics and how each scales with customer value"
                - "Test the two strongest metrics in five customer conversations"
                - "Model the three-year revenue and cash effect of the transition"
                - "Write the recommendation with its revisit conditions"
            - name: Small order and cost-to-serve surcharges
              description: |-
                ## Purpose
                When the cost-to-serve analysis shows a tail of tiny, frequent orders that lose money, the fix is often a minimum order value, a small order fee or delivery charges rather than a list increase. Designing these fees with clear thresholds and customer communication recovers margin while nudging customers toward cheaper ways to buy.

                ## Milestones
                1. The loss-making order profile defined with order value and frequency thresholds.
                2. Fee options designed, such as a minimum order, small order fee or delivery charge.
                3. The expected recovery and customer behaviour change estimated.
                4. Customer communication and sales exceptions rules drafted.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A small order fee or minimum order design with thresholds, expected recovery and agreed exception rules, ready for pilot."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define the loss-making order profile from cost-to-serve results"
                - "Draft two or three fee designs with thresholds"
                - "Estimate recovery and likely change in ordering behaviour"
                - "Draft the customer notice and the sales exception rules"
            - name: Choosing pricing software for the client
              description: |-
                ## Purpose
                Clients often ask whether to buy price optimisation or configure-price-quote software at the end of an engagement. Comparing a short list of vendors against the client's actual needs, data maturity and budget, and being clear about whether spreadsheets will do for now, keeps them from buying a tool that sits unused.

                ## Milestones
                1. Requirements written from the new pricing process, not from vendor brochures.
                2. Three vendors or approaches shortlisted, including a spreadsheet option.
                3. Each option scored on fit, data needs, cost and time to value.
                4. A recommendation and the client's decision recorded.

                ## Notes
                Start from the **Purchase decision** template. Declare any relationship your firm has with the vendors to the client before scoring.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three pricing tool options scored against written requirements, with the firm's vendor relationships disclosed and the client's decision recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements from the redesigned pricing process"
                - "Shortlist three options including a spreadsheet approach"
                - "Score each option on fit, data needs, cost and time to value"
                - "Disclose any firm relationship with shortlisted vendors to the client"
            - name: Willingness-to-pay survey fieldwork launch
              description: |-
                ## Purpose
                Survey fieldwork has hard dependencies: sample sourcing, screening, translation, legal review of the questionnaire and a soft launch. Treating the launch as a dated event with a checklist means results land in time for the design phase rather than a week after the steering committee.

                ## Milestones
                1. The questionnaire signed off by the sponsor and reviewed by client legal.
                2. A panel or customer sample sourced with screening quotas set.
                3. A soft launch of about fifty responses checked for errors and speeders.
                4. Full fieldwork completed and clean data delivered by the agreed date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Clean willingness-to-pay survey data delivered by the agreed date after a checked soft launch and signed-off questionnaire."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Get questionnaire sign-off from the sponsor and client legal"
                - "Brief the panel provider on sample size and screening quotas"
                - "Check the soft launch responses for errors and speeders"
                - "Confirm the clean data delivery date with the panel provider"
            - name: Controlled price pilot in test regions
              description: |-
                ## Purpose
                A pilot with a proper control group is the only way to show the board that new prices hold volume in the real market. Choosing matched test and control regions or customer groups, fixing the measures before launch and agreeing stop rules gives a result that cannot be dismissed as luck or seasonality.

                ## Milestones
                1. Test and control groups matched on history, size and mix, with the matching shown.
                2. Primary measures, pilot length and the result that would count as success fixed in writing.
                3. Stop rules agreed with the sales director for a severe volume drop.
                4. The pilot launched on the agreed date with sales briefed in test regions only.
                5. A final pilot readout with the measured effect and its confidence range.

                ## Notes
                Start from the **Risk register** template to track pilot risks such as competitor reactions and leakage of new prices into control regions.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot run with matched test and control groups and pre-agreed measures, ending in a readout stating the measured effect and confidence range."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Select and match test and control groups from historical data"
                - "Write the success measure and pilot length before launch"
                - "Agree stop rules with the sales director"
                - "Brief test-region sales teams on the pilot prices and scripts"
            - name: Pricing recommendation steering committee
              description: |-
                ## Purpose
                The steering committee that approves new prices is where finance worries about volume, sales worries about key accounts and the chief executive wants the profit number. Pre-wiring each of them with the evidence that answers their own concern, and asking for specific decisions, turns the meeting into approval rather than a request for more analysis.

                ## Milestones
                1. Each committee member pre-wired one to one with the evidence for their concern.
                2. A deck with the recommendation, profit impact range and pilot evidence on the first pages.
                3. Specific decisions requested in writing, such as approve architecture and approve rollout date.
                4. Decisions and actions minuted and sent within one working day.

                ## Notes
                Start from the **Meeting notes** template for the pre-wire conversations and the minutes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The steering committee records decisions on the price architecture and rollout date, with minutes issued within one working day."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List each committee member's main concern about the new prices"
                - "Hold a one-to-one pre-wire with each member"
                - "Write the decisions requested on the second page of the deck"
                - "Send minutes and actions within one working day"
            - name: Sales force rollout and pricing training
              description: |-
                ## Purpose
                Most pricing engagements that fail, fail in the sales force: reps who do not believe the new prices will discount back to the old ones. Training every rep on the why, the new rules, the value story and the objection answers, then checking adoption, is what makes the designed value appear in the accounts.

                ## Milestones
                1. Training materials covering rationale, rules, value story and objection handling.
                2. Every in-scope rep and manager trained, with attendance recorded.
                3. Sales managers given a coaching guide and the leakage tracker for their teams.
                4. Adoption checked at thirty days against discount levels by rep.

                ## Notes
                Start from the **Training program** template. Train sales managers first so they can run sessions for their own teams and answer questions afterwards.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every in-scope rep and manager trained before go-live, with discount levels by rep reviewed thirty days after launch."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft the rollout training outline with the sales director"
                - "Ask the agent to draft objection answers from the panel notes"
                - "Train sales managers before their teams"
                - "Review discount levels by rep thirty days after go-live"
            - name: Customer price increase communication wave
              description: |-
                ## Purpose
                How a price increase is communicated affects how much of it sticks. Planning the sequence, from key account conversations in person to letters for the long tail, with consistent reasons and notice periods that meet contract terms, avoids a flood of escalations in the first week.

                ## Milestones
                1. Customers grouped by how they will be told: in person, by call or by letter.
                2. Notice periods checked against contracts for every key account.
                3. Letters, call scripts and a reasons document approved by the commercial director.
                4. The wave delivered on schedule with escalations logged and answered.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All in-scope customers notified within contract notice periods, using approved materials, with escalations logged and answered."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Group customers by in-person, call or letter notification"
                - "Check notice periods for every key account contract"
                - "Draft letters, call scripts and the reasons document"
                - "Log and answer every escalation during the wave"
            - name: Ninety-day post-launch realisation review
              description: |-
                ## Purpose
                Three months after new prices go live is the moment of truth: realisation by segment, volume against forecast, exception rates and any customer losses. Running a formal review, with the client team presenting, confirms the value, catches leakage creeping back and sets the agenda for the client's own quarterly reviews.

                ## Milestones
                1. Realisation, volume and margin measured against the business case by segment.
                2. Exception rates and lost customers analysed with reasons.
                3. Corrective actions agreed for segments below plan.
                4. The review presented by the client pricing owner to the sponsor.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ninety-day review presented by the client pricing owner, comparing realisation with the business case and agreeing corrective actions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the ninety-day review date with the sponsor at go-live"
                - "Measure realisation and volume against the business case"
                - "Analyse exceptions and lost customers with their reasons"
                - "Coach the client pricing owner to present the review"
            - name: First pricing project as an analyst
              description: |-
                ## Purpose
                Analysts on a pricing engagement usually own the transaction data, the waterfall and the price bands, which means they see the numbers before anyone else. Learning the data structure early, building checks into every step and knowing when a result looks too good to be true makes you the person the manager trusts with the steering committee numbers.

                ## Milestones
                1. The client's invoice, customer and product data structure documented in one page.
                2. Reconciliation checks built into the waterfall and price band workbooks.
                3. Every chart traceable to a query or tab someone else could rerun.
                4. Feedback from the manager collected at mid-point and at the end of the project.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A data structure note, reconciliation checks in every workbook and two rounds of written manager feedback collected."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page note on the client's invoice data structure"
                - "Add a reconciliation check tab to each analysis workbook"
                - "Label every chart with its source query or tab"
                - "Ask the manager for mid-point feedback on the analysis"
            - name: Leading a pricing engagement as manager
              description: |-
                ## Purpose
                Managers on pricing work balance a sponsor who wants a big margin number, a sales director who fears losing accounts and a team buried in invoice data. Planning the storyline from the waterfall to the rollout, protecting time for the sales relationships and keeping the business case honest are what decide whether the value is delivered.

                ## Milestones
                1. A ghost deck of the final recommendation written in week one.
                2. Weekly one-to-ones held with the sales director as well as the sponsor.
                3. The business case challenged internally by someone outside the team before it goes to the client.
                4. A handover plan agreed with the client pricing owner a month before the end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A week-one ghost deck, weekly sales director meetings through delivery, an internal challenge of the business case and a dated handover plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the ghost deck from waterfall to rollout in week one"
                - "Hold a one-to-one with the sales director @recurring(weekly:mon)"
                - "Ask a partner outside the team to challenge the business case"
                - "Agree the handover plan with the client pricing owner"
            - name: Industrial distributor pricing engagement
              description: |-
                ## Purpose
                Distributors and industrial suppliers carry tens of thousands of product lines, most sold at cost-plus or by rep judgement, with prices on slow movers that nobody has looked at in years. A pricing engagement here focuses on product classification by price sensitivity, contract price review and matrix pricing, rather than consumer research.

                ## Milestones
                1. Products classified by price sensitivity, for example known value items versus the long tail.
                2. A pricing matrix set by product class and customer segment.
                3. Contract prices below the matrix listed and sized for renegotiation.
                4. Price updates loaded in the client's system for one branch or region as a first wave.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A matrix covering every product class and segment, with below-matrix contract prices sized and a first wave of updates loaded for one region."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Classify products by sales velocity and price visibility"
                - "Draft the matrix of target margins by class and segment"
                - "List contract prices sitting below the matrix with their revenue"
                - "Plan the first-wave system update with the client's IT team"
            - name: Consumer retail promotions and pricing engagement
              description: |-
                ## Purpose
                In consumer retail and packaged goods, much of the price question is promotional: depth, frequency, mechanics and whether promotions build volume or just shift it. Evaluating promotion effectiveness with baseline and uplift analysis, and resetting everyday price points by role, is the usual core of the work.

                ## Milestones
                1. Baseline sales estimated so each promotion's real uplift can be measured.
                2. Promotions ranked by incremental margin, with loss-makers identified.
                3. Everyday price points reviewed by category role and key price thresholds.
                4. A revised promotion calendar and guidelines agreed with the commercial team.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every promotion in the last year ranked by incremental margin, with a revised promotion calendar and guidelines agreed by the commercial team."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Build baseline sales estimates for promoted products"
                - "Rank last year's promotions by incremental margin"
                - "Review everyday price points against category roles"
                - "Draft the revised promotion calendar with the commercial team"
            - name: Pricing work for an in-house strategy team
              description: |-
                ## Purpose
                Internal strategy and commercial excellence teams run pricing projects without an outside firm's licence to challenge sales leadership. Building sponsorship from finance, using the client's own data as the authority and phasing changes so early wins fund credibility are the adjustments that make in-house pricing work succeed.

                ## Milestones
                1. A finance sponsor and a sales sponsor both named for the project.
                2. A quick win of modest size identified that can be delivered in the first quarter.
                3. The quick win delivered and its result reported by finance, not by the project team.
                4. A larger phase two scoped using the credibility from the first result.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A first-quarter quick win delivered and reported by finance, with named finance and sales sponsors and a scoped phase two."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the finance director to co-sponsor the pricing work"
                - "Pick one quick win deliverable within a quarter"
                - "Have finance report the quick win result to leadership"
                - "Scope phase two using the first result as evidence"
            - name: Pricing diagnostic for a mid-sized company
              description: |-
                ## Purpose
                Mid-sized companies rarely afford a full pricing transformation, but a four to six week diagnostic covering the waterfall, price bands and the top three leakage sources can be delivered by a small team or an independent consultant. Packaging this as a repeatable diagnostic, with a fixed set of outputs, makes pricing expertise usable for clients outside the largest firms.

                ## Milestones
                1. A standard diagnostic outline with five to seven fixed outputs.
                2. A minimum data list that a company without a data team can provide.
                3. One diagnostic delivered in six weeks or less.
                4. A short client feedback note collected on what was most useful.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A standard pricing diagnostic outline and minimum data list, used to deliver one diagnostic in six weeks or less with client feedback recorded."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Write the five to seven fixed outputs of the diagnostic"
                - "Draft the minimum data list for a company without a data team"
                - "Deliver one diagnostic within six weeks"
                - "Collect a short feedback note from the client sponsor"
            - name: Segment-level price optimisation model
              description: |-
                ## Purpose
                Once elasticities, cost-to-serve and competitor positions are known by segment, a price optimisation model can recommend prices that maximise margin within guardrails set by the business. Building one transparently, with constraints the commercial team understands, avoids the black-box output that sales simply refuses to use.

                ## Milestones
                1. Segment elasticities estimated with confidence ranges and documented assumptions.
                2. Business guardrails set, such as maximum move per period and price ladder rules.
                3. The model's recommended prices compared with current prices and explained line by line for a sample.
                4. A back test on historical data showing how the model would have performed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A documented optimisation model with guardrails, a back test on historical data and sample recommendations explained to the commercial team."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Collect segment elasticities with their confidence ranges"
                - "Agree price movement and ladder guardrails with the commercial team"
                - "Back test the model on two years of history"
                - "Explain twenty sample recommendations line by line to sales"
            - name: Pricing in a private equity value creation plan
              description: |-
                ## Purpose
                Private equity owners often ask for a pricing workstream in the first hundred days after an acquisition, because realised price moves earnings quickly and supports the exit story. Delivering pricing in that setting means a sharper timeline, a board that wants a number with evidence, and care that short-term increases do not damage the customer base the next buyer will look at.

                ## Milestones
                1. The pricing opportunity sized from diligence data and agreed with the operating partner.
                2. Two or three initiatives chosen that can show results within two quarters.
                3. A monthly realisation report built into the board pack.
                4. Customer retention measured alongside price so the exit story is not undermined.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two or three pricing initiatives in the value creation plan, with realisation and customer retention reported in the monthly board pack."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Review the diligence pricing findings with the operating partner"
                - "Choose initiatives that can show results within two quarters"
                - "Add price realisation and retention to the board pack @recurring(monthly:6)"
                - "Check retention by segment before recommending further increases"
            - name: Pricing capability handover to the client
              description: |-
                ## Purpose
                The engagement only creates lasting value if the client can run pricing without the consultants: a named pricing owner, clear processes, tools they can maintain and governance that keeps discounting disciplined. Planning the handover from the start, with the client doing more each month, is what separates a pricing transformation from a price increase.

                ## Milestones
                1. A pricing owner and, where justified, a small pricing team appointed by the client.
                2. Process documents for quarterly reviews, deal approval and annual increases written.
                3. Every tool and workbook handed over with a maintenance guide and trained users.
                4. A capability check run by the client one month after the team leaves.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A named client pricing owner running the documented processes and tools, confirmed in a capability check one month after the team leaves."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree with the sponsor who will own pricing after the engagement"
                - "Write process notes for reviews, deal approval and annual increases"
                - "Review handover progress with the pricing owner @recurring(weekly:thu)"
                - "Book the one-month capability check with the sponsor"
---

# Pricing Strategy Engagements

Pricing work pays back faster than almost any other consulting engagement, because a one percent improvement in realised price usually drops straight to operating profit, but it also fails quietly when the sales team ignores the new price list. This area starts with foundations (the pricing decision, scope, the transaction data request, the price waterfall, the current architecture and competition law guardrails), then the operating routines that run during delivery, skills such as elasticity, Van Westendorp and conjoint research and value-based pricing, decisions about tiers, discount authority, rebates, increases and new models, the dated events from survey fieldwork to the ninety-day review, variants for analysts, managers and different industries, and finally specialist work such as price optimisation models and private equity value creation plans.

During an engagement the rhythm is a Monday discount leakage check, a twice-weekly deal desk exception review, a Friday pilot readout and a monthly price realisation update, with quarterly price reviews and a yearly list price cycle for clients who keep you on. The Risk register, Metrics log, Meeting notes, Purchase decision and Training program templates pair with the competition law guardrails, the realisation dashboard, customer pricing interviews, the pricing software choice and the sales rollout. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
