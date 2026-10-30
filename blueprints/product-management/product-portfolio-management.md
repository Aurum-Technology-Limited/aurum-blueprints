---
id: product-management.product-portfolio-management
name: Product Portfolio Management
description: "Run several products as one portfolio: an inventory with real costs and revenue, lifecycle stages, investment guardrails, quarterly reviews and rebalancing, and clear calls on which products to grow, sustain or retire."
category: business
version: 1.0.0
tags: [product-management, product-portfolio-management, manager, enterprise, portfolio-strategy, investment-allocation, product-lifecycle, governance]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - risk-register
    - board-meeting
    - onboarding-30-60-90
    - skills-matrix
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Portfolio Management
          description: "Managing several products or product lines together, allocating investment between them and deciding which to grow, maintain or retire."
          projects:
            - name: Product portfolio inventory with owners and revenue
              description: |-
                ## Purpose
                Most organisations with more than three products cannot produce, on demand, a single list of what they sell, who owns each product and what it earns. A one-sheet inventory with owner, customers, revenue, team size and stage for every product, add-on and white-label variant is the base every later portfolio decision stands on.

                ## Milestones
                1. Every product, product line, add-on and white-label variant listed once, including the ones nobody talks about.
                2. A named accountable owner recorded against each entry, with gaps marked as unowned.
                3. Last full year's revenue and active customer count filled in from finance and the billing system.
                4. Team size and main code repositories noted for each product.
                5. The inventory reviewed and corrected by each product owner in writing.

                ## Notes
                Expect to find two or three products that still bill customers but have no owner. Mark them rather than hiding them; they are often the first rationalisation candidates.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single inventory lists every billable product with an owner, revenue, customer count and team size, signed off by each owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every product you know of from the price book and billing system"
                - "Ask finance for last year's revenue split by product or SKU"
                - "Send each owner their row and ask for corrections within a week"
                - "Mark every product with no accountable owner in a separate colour"
            - name: Lifecycle stage for every product in the portfolio
              description: |-
                ## Purpose
                A product in its first year and a product in its twelfth need different goals, budgets and metrics, yet portfolio reviews often judge them on the same growth target. Placing each product in a lifecycle stage (introduction, growth, maturity or decline) with stated evidence stops new bets being starved and old ones being overfed.

                ## Milestones
                1. Written definitions for each lifecycle stage, with two or three evidence signals per stage.
                2. Every product in the inventory assigned a stage with the evidence noted beside it.
                3. Disagreements between product owners and leadership on a stage recorded and settled.
                4. One success measure per stage agreed, so a declining product is not judged on new-logo growth.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each product carries an agreed lifecycle stage with written evidence and a stage-appropriate success measure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-line definition and evidence signals for each lifecycle stage"
                - "Pull three years of revenue and active usage trend for each product"
                - "Assign each product a stage and note the evidence in the inventory"
                - "Re-check every product's lifecycle stage before annual planning @recurring(yearly)"
            - name: Headcount and engineering allocation baseline by product
              description: |-
                ## Purpose
                Ask leaders where engineering effort goes and the answers rarely match the payroll. Mapping every engineer, designer and product manager to the product they mostly work on, including shared platform teams, shows the real investment mix before anyone argues about changing it.

                ## Milestones
                1. Every product and engineering role mapped to one primary product or to a named shared team.
                2. Shared platform and infrastructure effort shown separately rather than spread invisibly.
                3. The share of total capacity going to each product calculated as a percentage.
                4. The baseline compared with each product's share of revenue in a single table.

                ## Notes
                Use the last full quarter, not plans. Ask team leads for an honest split for people who straddle two products, and cap the split at two products per person to keep it usable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table shows the percentage of product and engineering capacity spent on each product last quarter beside its share of revenue."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the current team roster from the HR or resourcing system"
                - "Ask each engineering manager to split their team's time by product"
                - "Separate platform and shared service teams into their own rows"
                - "Set capacity share beside revenue share for every product"
            - name: Product-level P&L built with finance
              description: |-
                ## Purpose
                Revenue alone hides the product that earns plenty and costs more. Working with finance to build a simple profit and loss view per product, with direct costs, allocated shared costs and contribution margin, turns portfolio debates from opinion into arithmetic.

                ## Milestones
                1. An agreed list of cost lines with finance: people, hosting, third-party licences, support and sales effort.
                2. Direct costs attributed to each product for the last full year.
                3. A written allocation rule for shared costs that finance and product leaders both accept.
                4. Contribution margin calculated for every product and checked against the general ledger total.
                5. The method and its known weaknesses written down for future readers.

                ## Notes
                A rough but agreed allocation beats a precise one nobody trusts. Keep the method simple enough to rerun every year without a consultant.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A per-product P&L for the last full year, reconciled to the company total and with a written allocation method agreed by finance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book an hour with the finance business partner to agree the cost lines"
                - "Collect hosting and licence invoices tagged to each product"
                - "Draft a shared cost allocation rule and circulate it to product leads"
                - "Reconcile the per-product totals with the company's annual figures"
            - name: One-page portfolio strategy
              description: |-
                ## Purpose
                Teams working on six products need to know how their product fits with the other five: which one leads acquisition, which protects the core, which is a bet. A one-page portfolio strategy that names each product's role, the customer segments the portfolio serves and the two or three things it will not do keeps roadmaps from pulling in different directions.

                ## Milestones
                1. A role statement of one sentence for every product, such as core earner, entry point, retention anchor or new bet.
                2. The target customer segments for the portfolio named, with which product serves each.
                3. Two or three explicit choices about what the portfolio will not pursue this year.
                4. The page reviewed by the leadership team and published where every product team can read it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A published one-page strategy assigns a role to every product and states at least two things the portfolio will not pursue."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a draft role sentence for each product in the inventory"
                - "Ask the agent to draft a one-page strategy from the inventory and role notes"
                - "Review the draft with two product leads before leadership sees it"
                - "Revisit the portfolio strategy page after each annual plan is approved @recurring(yearly)"
            - name: Grow, sustain, harvest or retire call for each product
              description: |-
                ## Purpose
                Without an explicit posture, every product team quietly assumes it is in growth mode and plans accordingly. Giving each product one of four postures (grow, sustain, harvest or retire) with reasons and the investment that follows makes the portfolio's intent visible and stops teams planning against budgets that will never arrive.

                ## Milestones
                1. Definitions of the four postures, each with what it means for headcount, roadmap and metrics.
                2. A proposed posture for every product, backed by its lifecycle stage, P&L and strategic role.
                3. Each product owner briefed on the proposed posture and given a chance to argue the case.
                4. Final postures approved by the leadership team and recorded in the inventory.

                ## Notes
                Harvest is not a failure label. A well-run harvested product often funds the bets, and its team deserves to hear that plainly.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every product has an approved posture of grow, sustain, harvest or retire, with reasons recorded and owners briefed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write what each posture means for team size, roadmap and targets"
                - "Propose a posture for every product using stage, margin and role"
                - "Hold a thirty-minute session with each owner on their proposed posture"
                - "Record the approved postures in the inventory with a one-line reason"
            - name: Investment mix guardrails for core, adjacent and new
              description: |-
                ## Purpose
                Left alone, investment drifts towards whichever product shouts loudest or brought in last quarter's big deal. Agreeing a target split of capacity between core products, adjacent extensions and new bets, for example something close to 70, 20 and 10 percent, gives the leadership team a guardrail to test every funding request against.

                ## Milestones
                1. Each product and major initiative tagged as core, adjacent or new.
                2. The current split calculated from the allocation baseline.
                3. A target split and a tolerance band agreed by the leadership team.
                4. A rule written for what happens when a funding request would push the mix outside the band.

                ## Notes
                The 70, 20, 10 pattern is a common starting point, not a law. A company defending a shrinking core may need more in adjacent bets; a young company may need far more in new.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target investment split with a tolerance band is approved and written into the portfolio governance charter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag every product and funded initiative as core, adjacent or new"
                - "Calculate today's split from the allocation baseline"
                - "Propose a target split and tolerance band to the leadership team"
                - "Write the out-of-band rule into the governance charter"
            - name: Portfolio governance charter and decision rights
              description: |-
                ## Purpose
                Moving five engineers from one product to another should not take three escalations and a month. A short charter that says who decides funding shifts, product starts and retirements, at what thresholds, and on what cadence lets the portfolio change direction without a political campaign each time.

                ## Milestones
                1. The portfolio decisions listed: start, stop, fund, shift capacity, change posture.
                2. A decision owner and threshold set for each, such as product leads moving up to two people, the portfolio group anything larger.
                3. Membership and meeting rhythm of the portfolio group written down.
                4. The charter approved by the executive sponsor and shared with every product owner.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved charter names a decision owner and threshold for every portfolio decision type and is shared with all product owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last ten portfolio decisions and who actually made each one"
                - "Draft decision owners and thresholds for each decision type"
                - "Get the executive sponsor's sign-off on the charter"
                - "Review the charter's thresholds against the year's decisions @recurring(yearly)"
            - name: Product dependency and shared platform map
              description: |-
                ## Purpose
                Products in a portfolio rarely stand alone: they share an identity service, a billing engine, a data pipeline or a mobile shell. Mapping which products depend on which shared components shows where a cut to one product hurts three others, and where a platform team is quietly carrying the whole portfolio.

                ## Milestones
                1. Every shared component listed with its owning team.
                2. Each product's dependencies on shared components drawn on one diagram.
                3. Components with a single point of failure or no clear owner marked.
                4. The map attached to the inventory and referenced in funding decisions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dependency map links every product to the shared components it relies on, with unowned components flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each tech lead to list the shared services their product calls"
                - "Draw the products and shared components on one diagram"
                - "Mark components with no owner or a single maintainer"
                - "Add a dependency column to the portfolio inventory"
            - name: Monthly portfolio health scorecard
              description: |-
                ## Purpose
                Waiting for the quarterly review to discover a product's churn doubled wastes ten weeks. A one-page scorecard with the same five or six measures for every product (revenue, margin, active customers, retention, delivery confidence and team health), updated monthly, lets leaders spot trouble while there is still time to act.

                ## Milestones
                1. Five or six scorecard measures agreed, with a stage-appropriate target for each product.
                2. Data sources and an owner named for every measure.
                3. A red, amber and green rule written for each measure.
                4. Six consecutive monthly scorecards published to the leadership group.

                ## Notes
                Start from the **Metrics log** template. Resist adding measures each month; a scorecard nobody can read in two minutes stops being read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scorecards covering every product, each with red, amber or green ratings and named follow-ups."
                cadence: rolling
              tasks:
                - "Create the scorecard from the metrics log template"
                - "Agree red, amber and green thresholds with each product owner"
                - "Update the portfolio scorecard and flag any product turning red @recurring(monthly:9)"
                - "Send a two-line note to owners of any product that turned amber or red"
            - name: Quarterly portfolio review meeting
              description: |-
                ## Purpose
                Once a quarter, the people who fund products should look at all of them together, not one at a time in separate meetings. A ninety-minute review with the scorecard, each product's posture and the top three asks produces decisions on capacity, posture and bets that a series of product-by-product updates never would.

                ## Milestones
                1. A standing agenda: scorecard, posture check, funding asks, decisions.
                2. Pre-reads sent to attendees at least three working days before the meeting.
                3. Every decision recorded with an owner and a date.
                4. Four quarterly reviews held in a year with decisions followed up at the next one.

                ## Notes
                Start from the **Meeting notes** template. Ban status updates from the meeting itself; the pre-read covers status so the room can spend its time on choices.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four quarterly reviews held in twelve months, each with a pre-read and a written list of decisions and owners."
                cadence: cyclic
              tasks:
                - "Draft a standing ninety-minute agenda from the meeting notes template"
                - "Book the quarterly portfolio review and request owners' pre-reads @recurring(quarterly)"
                - "Circulate the decision list within one working day of the meeting"
                - "Open each review by checking last quarter's decisions were carried out"
            - name: Quarterly capacity rebalancing between products
              description: |-
                ## Purpose
                Postures and guardrails mean little if the same people sit on the same products year after year. A short rebalancing step after each quarterly review, moving a small number of people or a team towards grow products and away from harvest ones, keeps the allocation in line with the strategy without disruptive reorganisations.

                ## Milestones
                1. The gap between target and actual allocation calculated after each review.
                2. A rebalancing proposal of named moves agreed with the engineering leaders affected.
                3. People moving teams told in person before any announcement.
                4. Allocation within the agreed tolerance band for two consecutive quarters.

                ## Notes
                Moving whole teams usually costs less than moving individuals; a stable team with a new mission is productive sooner than a reshuffled one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After two consecutive quarterly reviews, actual capacity allocation sits inside the agreed tolerance band."
                cadence: cyclic
              tasks:
                - "Compare actual capacity per product with the target mix @recurring(quarterly)"
                - "Draft named team moves with the engineering directors"
                - "Brief anyone changing product in person before it is announced"
                - "Update the allocation baseline once moves take effect"
            - name: Portfolio risk register
              description: |-
                ## Purpose
                Cross-product risks look different from project risks: a key customer that buys three of your products, a shared platform with one maintainer, a regulation that would hit every product at once. Keeping them in one register with likelihood, impact and an owner means they get reviewed rather than rediscovered in a crisis.

                ## Milestones
                1. A register holding at least ten portfolio-level risks with likelihood, impact and owner.
                2. Each high risk paired with a mitigation and a trigger for escalation.
                3. The register reviewed monthly and changes noted.
                4. The top five risks presented at every quarterly portfolio review.

                ## Notes
                Start from the **Risk register** template. Keep product-specific delivery risks with the product teams; this register is for risks that cross products.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of at least ten cross-product risks, each with an owner, reviewed monthly for six months."
                cadence: rolling
              tasks:
                - "Set up the register from the risk register template"
                - "Ask each product owner for the two risks that would hurt other products"
                - "Review likelihood, impact and owners of portfolio risks @recurring(monthly:17)"
                - "Pull the top five risks into the quarterly review pre-read"
            - name: Intake process for new product bet proposals
              description: |-
                ## Purpose
                Ideas for new products arrive through hallway chats, sales escalations and executive enthusiasm, and the loudest one gets funded. A single intake form asking for the problem, target customer, riskiest assumption and the first small amount of funding wanted lets the portfolio group compare proposals on the same terms each month.

                ## Milestones
                1. A one-page proposal form covering problem, customer, evidence, riskiest assumption and first ask.
                2. One place where every proposal lands, visible to the portfolio group.
                3. A monthly triage that sorts proposals into fund a test, park or decline.
                4. Every proposer told the outcome and reason within a month of submitting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new product proposal in the last six months went through the intake form and received a recorded triage outcome."
                cadence: rolling
              tasks:
                - "Draft the one-page proposal form with five required sections"
                - "Announce the intake form to product, sales and leadership teams"
                - "Triage new product proposals into test, park or decline @recurring(monthly:3)"
                - "Reply to every proposer with the outcome and the reason"
            - name: Stage gates and kill criteria for new product bets
              description: |-
                ## Purpose
                New bets rarely die on their own; they shrink, linger and keep a team busy for years. Agreeing for each bet, before funding, what evidence would justify the next round and what would end it, then checking at fixed points, turns hope into a series of honest decisions.

                ## Milestones
                1. Three or four stage gates defined, each with the evidence needed to pass.
                2. Written kill criteria agreed for every funded bet at the moment it is funded.
                3. Each bet checked against its gate on a fixed schedule.
                4. At least one bet stopped or redirected on evidence within the first year.

                ## Notes
                Write the kill criteria while people are still excited and objective. Agreeing them later, when the team is attached, rarely works.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every funded bet has written gate evidence and kill criteria, and each has been checked at its scheduled gate."
                cadence: cyclic
              tasks:
                - "Define the evidence needed to pass each of three or four gates"
                - "Write kill criteria with each bet's team before its next funding"
                - "Check each new bet's progress against its current gate @recurring(monthly:21)"
                - "Record every gate outcome and its reason in the decision log"
            - name: Annual portfolio planning cycle
              description: |-
                ## Purpose
                Annual planning in a multi-product company often turns into each product submitting its own wish list, which then gets cut evenly. Running a portfolio-first cycle (strategy and guardrails, then postures, then funding, then product roadmaps) means the cuts and the bets are deliberate.

                ## Milestones
                1. A planning calendar published with dates for strategy, postures, funding and roadmaps.
                2. Portfolio guardrails and postures confirmed before any product submits its plan.
                3. Funding decided at portfolio level and communicated to each product as a number.
                4. Every product roadmap checked against its funding and posture before sign-off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The annual plan was built in the published sequence, and every product roadmap matches its approved funding and posture."
                cadence: cyclic
              tasks:
                - "Publish the portfolio planning calendar eight weeks before budgets are due @recurring(yearly)"
                - "Confirm guardrails and postures with the leadership team first"
                - "Send each product owner their funding envelope in writing"
                - "Check each roadmap against its envelope before final sign-off"
            - name: Monthly written digest from product leads
              description: |-
                ## Purpose
                Portfolio leaders who rely on meetings for news end up with seven different stories in seven different formats. A monthly written digest where each product lead answers the same four questions (what moved, what is at risk, what decision is needed, what we learned) gives a comparable view in ten minutes of reading.

                ## Milestones
                1. Four fixed questions agreed with all product leads.
                2. A shared document or page where each month's answers are collected.
                3. The digest compiled and sent to leadership within three working days of month end.
                4. Six consecutive digests published with every product represented.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly digests published, each with answers to the same four questions from every product lead."
                cadence: rolling
              tasks:
                - "Agree the four digest questions with the product leads"
                - "Ask the agent to compile the leads' answers into a one-page digest"
                - "Collect product leads' answers and send the monthly digest @recurring(monthly:24)"
            - name: Portfolio decision log
              description: |-
                ## Purpose
                Two years on, nobody remembers why the analytics product was put into harvest or why the mobile bet got a second round. A log recording each portfolio decision, its date, the evidence and the expected result makes it possible to learn which calls were right and stops settled debates being reopened every quarter.

                ## Milestones
                1. A log with columns for date, decision, owner, evidence, expected result and review date.
                2. All decisions from the last two quarterly reviews entered.
                3. Each decision revisited on its review date and the actual result written beside it.
                4. One pattern from past decisions shared with the portfolio group.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds every portfolio decision for a year, with expected and actual results recorded for those past their review date."
                cadence: rolling
              tasks:
                - "Create the decision log with six columns"
                - "Back-fill decisions from the last two quarterly reviews"
                - "Compare due decisions' expected and actual results @recurring(monthly:28)"
            - name: Shared cost allocation refresh with finance
              description: |-
                ## Purpose
                Shared costs such as platform teams, cloud discounts and the support centre grow faster than any single product, and an allocation rule set three years ago can make a healthy product look loss-making. Refreshing the rule with finance each year keeps the per-product P&L believable.

                ## Milestones
                1. Last year's shared cost lines and totals obtained from finance.
                2. The allocation drivers checked against current usage, headcount or ticket volumes.
                3. Any change to the rule agreed with finance and product leaders before planning starts.
                4. The P&L restated under the new rule with the effect on each product shown.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The shared cost allocation rule is reviewed with finance each year before planning, with any change and its effect on each product documented."
                cadence: cyclic
              tasks:
                - "Ask finance for last year's shared cost totals by line"
                - "Review shared cost allocation drivers with finance @recurring(yearly)"
                - "Show each product owner how the refresh changes their margin"
            - name: Portfolio matrix frameworks applied to your products
              description: |-
                ## Purpose
                The growth-share matrix and the GE-McKinsey attractiveness and strength grid are taught everywhere and used badly almost as often. Learning what each framework assumes, then plotting your own products on both and noting where they disagree, gives you a shared language for portfolio debates without letting a two-by-two make the decision.

                ## Milestones
                1. A one-page summary of each framework's axes, assumptions and known weaknesses.
                2. Every product plotted on both matrices using your own data.
                3. Products that land in different places on the two matrices listed with an explanation.
                4. A short note on which framework suits your portfolio and why.

                ## Notes
                Market share means little in fragmented software markets; many teams swap it for growth in active customers or a competitive position score.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both matrices drawn for your real products, with a written note explaining where they disagree and which suits the portfolio."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a reputable explanation of the growth-share matrix and its critiques"
                - "Read how the GE-McKinsey nine-box grid scores attractiveness and strength"
                - "Plot every product on both matrices using last year's figures"
                - "Write a page on where the two pictures disagree"
            - name: Three horizons model for core, adjacent and new
              description: |-
                ## Purpose
                Horizon one defends and extends the core, horizon two builds emerging businesses, horizon three seeds options that may matter in five years. Studying the model well enough to sort your initiatives into horizons, and to see why each needs different metrics and leaders, makes the investment guardrails easier to explain and defend.

                ## Milestones
                1. The model's origin, purpose and common misreadings summarised in a page.
                2. Every funded initiative placed in a horizon with a sentence of reasoning.
                3. Metrics suited to each horizon listed, such as margin for one, growth for two, learning milestones for three.
                4. One initiative identified that is being judged on the wrong horizon's metrics.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All funded initiatives sorted into three horizons with suitable metrics, and at least one mis-measured initiative identified."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an original or well-regarded source on the three horizons model"
                - "Sort every funded initiative into a horizon with one line of reasoning"
                - "List the metrics each horizon should be judged on"
                - "Raise any mis-measured initiative at the next portfolio review"
            - name: Reading a product P&L and its unit economics
              description: |-
                ## Purpose
                Product leaders who cannot read a P&L leave the hardest portfolio arguments to finance. Learning gross margin, contribution margin, customer acquisition cost, payback and lifetime value well enough to explain them using your own products means you can defend a harvest call or a new bet in the language the budget holders use.

                ## Milestones
                1. Plain-language definitions written for six core measures, each with your product's real figure.
                2. One product's P&L walked through line by line with a finance colleague.
                3. The three biggest drivers of margin for that product identified.
                4. A five-minute explanation of one product's economics given to a peer without notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain gross and contribution margin, acquisition cost and payback for one of your products, checked in a walkthrough with finance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write definitions of six unit economics measures in your own words"
                - "Book a P&L walkthrough of one product with a finance colleague"
                - "Name the three line items that move that product's margin most"
                - "Explain the product's economics to a peer in five minutes"
            - name: Cost of delay across competing product initiatives
              description: |-
                ## Purpose
                When a big initiative on one product competes with a big initiative on another, effort and value estimates alone rarely settle it. Learning to estimate cost of delay, the value lost for each month an initiative waits, and dividing it by duration gives a way to sequence work across products that both product leads can follow.

                ## Milestones
                1. Cost of delay and its urgency profiles understood and summarised.
                2. The six largest cross-product initiatives each given a rough monthly cost of delay.
                3. Initiatives ranked by cost of delay divided by duration.
                4. The ranking compared with current sequencing and differences discussed with the portfolio group.

                ## Notes
                The estimates will be rough. Their value is in making assumptions visible, not in the second decimal place.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The six largest initiatives across products ranked by cost of delay divided by duration, with the result discussed at a portfolio review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read an introduction to cost of delay and its urgency profiles"
                - "Estimate monthly cost of delay for the six largest initiatives"
                - "Rank them by cost of delay divided by expected duration"
                - "Present the ranking and its assumptions at the portfolio review"
            - name: Business case skills for product investments
              description: |-
                ## Purpose
                Funding requests for a new product line or a big replatforming land on a finance desk that expects net present value, payback period and a sensitivity range. Practising these on one real request, with honest best, expected and worst cases, makes your cases faster to approve and harder to pick apart.

                ## Milestones
                1. Net present value, payback period and sensitivity analysis understood and summarised.
                2. Your organisation's required business case format and discount rate obtained from finance.
                3. One real investment request modelled with three scenarios.
                4. The model reviewed by finance and its feedback applied.

                ## Notes
                Keep assumptions on one visible tab. Reviewers trust a simple model with clear assumptions more than a sophisticated one they cannot follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A business case for one real product investment with three scenarios, reviewed and accepted as sound by finance."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask finance for the standard business case template and discount rate"
                - "Model one real investment request with best, expected and worst cases"
                - "Put every assumption on a single visible tab"
                - "Book a review of the model with a finance colleague"
            - name: Staged funding and real options thinking
              description: |-
                ## Purpose
                Funding a new product for three years up front buys commitment and very little learning. Studying staged funding, where each round buys the right to make the next decision, helps you size first rounds small, set clear milestones and treat stopping as a normal result rather than a failure.

                ## Milestones
                1. The idea of investments as options, and how venture-style staging applies inside a company, summarised in a page.
                2. One current bet's funding restated as stages with a milestone for each.
                3. The expected value of stopping early compared with full funding up front for that bet.
                4. A proposal to stage the next new bet presented to the portfolio group.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A current bet's funding restated as at least three stages with milestones, and a staged proposal tabled for the next new bet."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an accessible source on real options in corporate investment"
                - "Restate one current bet as three funding stages with milestones"
                - "Compare staged and up-front funding for that bet in a short note"
                - "Table a staged funding proposal for the next new bet"
            - name: Presenting portfolio trade-offs to executives
              description: |-
                ## Purpose
                Portfolio leaders are often right on the analysis and lose in the room because the trade-off arrives as forty slides. Practising a short structure (the decision needed, two or three options, what each costs and gives up, a recommendation) gets funding shifts approved in one meeting instead of three.

                ## Milestones
                1. A one-page decision brief format written and agreed with your manager.
                2. One live trade-off presented to executives using the format.
                3. Feedback collected from two attendees on clarity and what was missing.
                4. The format revised and used for the next three portfolio decisions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three portfolio decisions presented with the one-page brief format, each settled in a single meeting."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page decision brief with options and what each gives up"
                - "Rehearse the brief in five minutes with a trusted peer"
                - "Ask two executives afterwards what was unclear or missing"
                - "Revise the format before the next portfolio decision"
            - name: Product overlap and rationalisation review
              description: |-
                ## Purpose
                Growth by acquisition, separate business units and old pilots leave many portfolios with two or three products doing the same job for the same customers. Comparing products by customer need, feature coverage and cost shows where consolidation would free a team, and where the overlap is actually serving distinct segments.

                ## Milestones
                1. Products grouped by the customer need they serve.
                2. Overlapping pairs compared on customers, revenue, cost and feature coverage.
                3. A recommendation for each overlap: keep both, merge, or move customers to one.
                4. Recommendations taken to the portfolio group with the expected savings stated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every overlapping product pair has a written keep, merge or migrate recommendation with expected savings, decided by the portfolio group."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Group every product in the inventory by the customer need it serves"
                - "Compare each overlapping pair on customers, revenue and cost"
                - "Interview two account managers who sell both products in a pair"
                - "Write a keep, merge or migrate recommendation for each overlap"
            - name: Cannibalisation analysis between products
              description: |-
                ## Purpose
                Launching a cheaper or newer product can pull customers from your own core rather than from competitors. Measuring how many of a new product's customers came from an existing one, and at what revenue difference, tells you whether the portfolio is growing or just reshuffling.

                ## Milestones
                1. Customers of the newer product matched against current and former customers of the older one.
                2. The share of new customers who downgraded or switched from the older product calculated.
                3. The net revenue effect of those switches worked out.
                4. A recommendation on positioning or packaging taken to the portfolio group.

                ## Notes
                Some cannibalisation is healthy when the alternative is losing the customer to a competitor. Record which case you think applies and why.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis states the share of a newer product's customers who came from an older one and the net revenue effect."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the data team to match customer lists across the two products"
                - "Calculate the share of new customers who switched from the older product"
                - "Work out the net revenue change for switched customers"
                - "Present the finding and a positioning recommendation to the portfolio group"
            - name: Customer overlap and multi-product adoption analysis
              description: |-
                ## Purpose
                Customers who use two or three of your products usually stay longer and spend more, but most portfolios have never measured it. Counting how many accounts use more than one product, and comparing their retention with single-product accounts, shows whether the portfolio is more valuable than the sum of its parts.

                ## Milestones
                1. The number of accounts using one, two and three or more products counted.
                2. Retention and revenue per account compared across those groups.
                3. The most common product combinations listed.
                4. Findings shared with sales and customer success leaders.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A report shows account counts, retention and revenue for single and multi-product customers, shared with sales and success leaders."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull an account list showing which products each account uses"
                - "Compare twelve-month retention for single and multi-product accounts"
                - "List the five most common product combinations"
                - "Share the findings with sales and customer success leaders"
            - name: Retire or keep decision for a declining product
              description: |-
                ## Purpose
                Declining products often survive on inertia, a handful of loyal customers and an engineer who knows the code. Assembling the facts (revenue trend, cost to run, customers affected, contract terms and dependencies) into a single decision paper lets leadership make the retire or keep call once, instead of drifting for years.

                ## Milestones
                1. Five years of revenue and active customer trend for the product.
                2. Full cost to run, including people, hosting, support and security patching.
                3. Customers affected and their contract end dates listed.
                4. A decision paper with keep, harvest and retire options taken to the portfolio group.
                5. The decision recorded and, if retiring, the sunsetting work handed to a named owner.

                ## Notes
                Check contracts with legal before anyone mentions retirement outside the room; some agreements require long notice periods or guaranteed support.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision paper with three options was decided by the portfolio group and the outcome recorded with a named owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull five years of revenue and usage for the declining product"
                - "Calculate full running cost including support and security patching"
                - "Ask legal to list contracts with notice or support obligations"
                - "Write the decision paper with keep, harvest and retire options"
            - name: Maintenance mode operating model for harvested products
              description: |-
                ## Purpose
                Putting a product into harvest usually means a smaller team, but nobody writes down what that team still promises customers. A maintenance mode model stating the minimum team, security and bug-fix commitments, what new work is refused, and how customers are told keeps harvested products safe and profitable.

                ## Milestones
                1. Minimum team size and skills for a harvested product agreed with engineering.
                2. Commitments written for security patches, critical bugs and platform upgrades.
                3. A list of request types the team will decline, shared with sales and support.
                4. A quarterly check that each harvested product still meets its commitments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every harvested product has a written maintenance model with team size, commitments and declined request types, checked each quarter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the minimum team for a harvested product with engineering"
                - "Write the security, bug and upgrade commitments in one page"
                - "Brief sales and support on the request types that will be declined"
                - "Check each harvested product against its commitments @recurring(quarterly)"
            - name: Shared platform consolidation decision
              description: |-
                ## Purpose
                Several products each running their own login, billing or notification service costs the portfolio twice: in duplicated engineering and in an inconsistent customer experience. Deciding which duplicated capabilities to consolidate, in what order and who pays, turns a long-running engineering complaint into a funded plan.

                ## Milestones
                1. Duplicated capabilities across products listed with the cost of each copy.
                2. Candidates ranked by savings, customer impact and migration risk.
                3. A funding model agreed for the consolidation work.
                4. The first consolidation approved with an owner and target quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of consolidation candidates exists, and the first one is approved with funding, an owner and a target quarter."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Use the dependency map to list capabilities built more than once"
                - "Estimate the yearly cost of running each duplicate"
                - "Rank candidates by savings, customer impact and migration risk"
                - "Propose a funding model for the first consolidation"
            - name: Revenue concentration check across the portfolio
              description: |-
                ## Purpose
                A portfolio of eight products can still depend on one product for 80 percent of revenue, or on five customers who buy several of them. Measuring concentration by product and by customer each year makes the exposure visible and gives the strategy a reason to fund diversification, or to accept the risk knowingly.

                ## Milestones
                1. Share of total revenue by product calculated for the last full year.
                2. Share of revenue held by the top ten customers across all products calculated.
                3. Thresholds agreed with leadership above which concentration is treated as a risk.
                4. Any breach added to the portfolio risk register with a response.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Revenue concentration by product and by top ten customers measured yearly against agreed thresholds, with breaches in the risk register."
                cadence: cyclic
              tasks:
                - "Ask finance for revenue by product and by customer for the last year"
                - "Calculate revenue concentration by product and top ten customers @recurring(yearly)"
                - "Agree concentration thresholds with the leadership team"
            - name: Zombie product sweep
              description: |-
                ## Purpose
                Every portfolio collects products with flat usage, no roadmap and a team quietly assigned elsewhere: still running, still billed for hosting, still a security surface. A yearly sweep using simple criteria (no release in a year, falling usage, no owner) finds them before an incident or an auditor does.

                ## Milestones
                1. Criteria for a zombie product written and agreed.
                2. Every product checked against the criteria.
                3. Each zombie given a named owner and a decision date.
                4. Zombies found in the previous sweep confirmed as revived, harvested or retired.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly sweep checks every product against written criteria and every zombie found has an owner and a decision date."
                cadence: cyclic
              tasks:
                - "Write three or four criteria that mark a product as a zombie"
                - "Sweep the portfolio for products matching the zombie criteria @recurring(yearly)"
                - "Assign an owner and decision date to every zombie found"
                - "Confirm what happened to last year's zombies"
            - name: Moving from project funding to persistent product teams
              description: |-
                ## Purpose
                Funding work as time-boxed projects means teams disband at the end and products lose the people who understand them. Shifting the portfolio to fund long-lived teams per product, with budgets set yearly and work chosen by outcomes, makes rebalancing simpler and ownership real, but it needs finance and HR on board.

                ## Milestones
                1. The current funding model and its effects on teams described in a page.
                2. A proposed model of persistent team funding agreed with finance.
                3. One product line piloting persistent team funding for two quarters.
                4. Pilot results compared with project-funded products and a rollout decision made.

                ## Notes
                Capitalisation of software costs often depends on project-style tracking. Ask finance early how a change would affect their reporting.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A two-quarter pilot of persistent team funding completed on one product line, with a recorded rollout decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Describe how funding works today and what it does to teams"
                - "Ask finance how persistent team funding would affect cost reporting"
                - "Choose one product line for a two-quarter pilot"
                - "Compare pilot results with project-funded products"
            - name: Annual portfolio budget submission
              description: |-
                ## Purpose
                The annual budget is where the portfolio strategy either becomes real or gets averaged away. Preparing a single portfolio submission (total ask, split by product and horizon, the bets, the harvest savings and the risks) gives finance one coherent request instead of eight competing ones.

                ## Milestones
                1. Each product's funding need gathered in a common format.
                2. The total checked against the investment mix guardrails.
                3. Harvest savings and new bet requests shown side by side.
                4. A single portfolio submission delivered to finance by the deadline.
                5. Final approved amounts communicated to every product owner.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "One portfolio budget submission, consistent with the guardrails, delivered to finance on time and approved amounts sent to every owner."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Ask finance for the budget calendar and submission format"
                - "Send product owners a common template for their funding needs"
                - "Check the combined ask against the investment mix guardrails"
                - "Submit the portfolio budget and confirm receipt with finance"
            - name: Board or executive committee portfolio review
              description: |-
                ## Purpose
                Boards and executive committees usually see products one at a time, through revenue lines. A yearly session that presents the whole portfolio (postures, investment mix, the bets and their gates, what was stopped and why) builds the trust needed for bigger shifts later.

                ## Milestones
                1. A slot on the board or executive agenda agreed with the chief executive's office.
                2. A board pack covering postures, investment mix, bets and stopped work.
                3. The session held and the questions and decisions minuted.
                4. Follow-up actions completed before the next session.

                ## Notes
                Start from the **Board meeting** template. Show at least one thing the portfolio stopped; it signals discipline better than any growth chart.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A portfolio session held with the board or executive committee, with a pack, minutes and completed follow-up actions."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the chief executive's office for a portfolio slot on the agenda"
                - "Prepare the board pack from the board meeting template"
                - "Rehearse the session with your executive sponsor"
                - "Schedule the yearly portfolio session with the board @recurring(yearly)"
            - name: Mid-year portfolio reset
              description: |-
                ## Purpose
                Six months into the year, at least one assumption behind the annual plan has usually broken: a market shift, a lost anchor customer, a bet that passed its gate early. A mid-year reset that revisits postures and funding, without reopening the whole plan, keeps the portfolio from running on stale assumptions until next budget season.

                ## Milestones
                1. The three to five assumptions behind the annual plan listed and checked against reality.
                2. Postures confirmed or changed for every product.
                3. Funding shifts agreed within the year's total budget.
                4. Changes communicated to affected teams within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-year reset held, with plan assumptions checked, postures confirmed and any funding shifts communicated within a week."
                cadence: cyclic
              tasks:
                - "List the assumptions the annual portfolio plan rests on"
                - "Hold the mid-year reset of postures and funding @recurring(yearly)"
                - "Tell affected teams about funding changes within a week"
            - name: Portfolio offsite for product leaders
              description: |-
                ## Purpose
                Product leaders who only meet in review meetings defend their own product and rarely think about the whole. A yearly offsite of one or two days, focused on the portfolio strategy, shared customers and cross-product bets, builds the relationships that make rebalancing less painful.

                ## Milestones
                1. Goals for the offsite agreed with the head of product.
                2. An agenda balancing strategy work, customer evidence and relationship time.
                3. The offsite held with every product lead attending.
                4. Three cross-product commitments made and tracked afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly offsite held with every product lead present, ending in three tracked cross-product commitments."
                cadence: cyclic
              tasks:
                - "Agree two or three offsite goals with the head of product"
                - "Book the product leaders' portfolio offsite @recurring(yearly)"
                - "Ask each lead to bring one customer story that crosses products"
                - "Track the three cross-product commitments at quarterly reviews"
            - name: Investment committee pitch for a new product bet
              description: |-
                ## Purpose
                A new product bet that has passed early tests needs a proper funding decision, not a favour from a sympathetic executive. Preparing a pitch with the evidence so far, the size of the next round, the gate it buys and the kill criteria gives the committee what it needs to say yes or no cleanly.

                ## Milestones
                1. Evidence from early tests summarised on one page.
                2. The funding ask sized to reach the next gate, not the full vision.
                3. Kill criteria and the next gate's evidence stated.
                4. The pitch delivered and the committee's decision recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A funding pitch with evidence, a sized ask and kill criteria was presented and the committee's decision recorded in the decision log."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Summarise early test evidence on one page"
                - "Size the ask to reach the next gate only"
                - "Ask the agent to challenge the pitch with the five hardest committee questions"
                - "Record the committee's decision and conditions in the decision log"
            - name: First 90 days running a product portfolio
              description: |-
                ## Purpose
                Stepping up from owning one product to running several changes the job from making product calls to making investment calls through other people. A 90-day plan of listening, building the inventory, meeting finance and making one visible portfolio decision gives a new group product manager or head of product credibility early.

                ## Milestones
                1. One-to-one conversations held with every product lead and their engineering counterpart.
                2. The inventory and allocation baseline drafted by day 45.
                3. Relationships set up with finance, sales leadership and the executive sponsor.
                4. One portfolio decision proposed and made by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Resist changing postures in the first month; ask why each product is where it is first.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day plan completed with every product lead met, the inventory drafted and one portfolio decision made."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Create a 30/60/90 plan from the onboarding template"
                - "Book a one-to-one with every product lead in the first two weeks"
                - "Meet the finance business partner before day 30"
                - "Choose the one portfolio decision you will make by day 90"
            - name: Inheriting a portfolio after a reorganisation
              description: |-
                ## Purpose
                Reorganisations hand portfolio leaders products they did not choose, teams loyal to a previous leader and commitments made by someone else. Auditing the inherited promises, budgets and team morale before changing anything avoids breaking commitments to customers you did not know existed.

                ## Milestones
                1. Every inherited customer commitment, roadmap promise and contract obligation listed.
                2. Budgets and headcount confirmed with finance and HR.
                3. Each inherited team's concerns heard in a session with you and the team lead.
                4. Commitments sorted into keep, renegotiate and retire, with owners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of inherited commitments, each marked keep, renegotiate or retire with an owner, completed within the first quarter."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the previous owner for a handover of open commitments"
                - "Check inherited budgets and headcount with finance and HR"
                - "Hold a listening session with each inherited team"
                - "Sort every commitment into keep, renegotiate or retire"
            - name: Folding an acquired company's products into the portfolio
              description: |-
                ## Purpose
                After an acquisition, the bought products overlap with yours, run on different platforms and come with customers promised continuity. A structured integration plan that maps overlaps, sets postures for the acquired products and commits to customer communication protects the deal's value and the acquired team's trust.

                ## Milestones
                1. Acquired products added to the inventory with revenue, customers and teams.
                2. Overlaps with existing products identified and a direction set for each.
                3. Postures assigned to acquired products and shared with the acquired leadership.
                4. A customer communication plan agreed with sales, success and legal.
                5. A twelve-month integration roadmap approved by the portfolio group.

                ## Notes
                Check what the deal documents promise customers and staff before setting postures. Ask legal; some promises bind for years.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved twelve-month integration roadmap sets a posture for every acquired product and a direction for every overlap."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Add the acquired products to the portfolio inventory"
                - "Ask legal what the deal promised customers and staff"
                - "Map overlaps between acquired and existing products"
                - "Draft a twelve-month integration roadmap with the acquired leaders"
            - name: Portfolio plan for a 20 percent budget cut
              description: |-
                ## Purpose
                When leadership asks for a 20 percent cut, spreading it evenly across products is the fastest answer and almost always the worst. Building cut scenarios that follow the postures (protect grow products, harvest harder, retire earlier) lets you show leadership the consequences of each option before the decision is made.

                ## Milestones
                1. Two or three cut scenarios built from the postures and the P&L.
                2. Revenue, customer and team effects estimated for each scenario.
                3. Commitments that cannot be broken listed, with legal and sales input.
                4. A recommended scenario presented and the decision recorded.

                ## Notes
                Handle people decisions with HR from the start; never let names appear in a scenario file before HR has seen it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least two cut scenarios with estimated effects were presented and a recorded decision chose one."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the size and timing of the cut with finance"
                - "Build two or three cut scenarios that follow product postures"
                - "Estimate revenue and customer impact for each scenario"
                - "Bring HR in before any scenario names roles or people"
            - name: Becoming a multi-product company
              description: |-
                ## Purpose
                Companies adding a second or third product usually keep the single-product habits: one roadmap, one team, the founder deciding everything. Setting up the minimum portfolio machinery (separate goals, a funding split, a protected team for the new product and a review rhythm) stops the core from swallowing the new product's people.

                ## Milestones
                1. Separate goals agreed for the core and the new product.
                2. A capacity split decided and the new product's team protected from core escalations.
                3. A lightweight monthly review covering both products in place.
                4. The split and goals revisited after two quarters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Separate goals and a protected capacity split for the new product held for two quarters, then reviewed and recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write separate goals for the core and the new product"
                - "Agree which people are protected for the new product"
                - "Set up a monthly review covering both products"
                - "Review the capacity split after two quarters"
            - name: Carve-out readiness for a product line
              description: |-
                ## Purpose
                When a product line may be sold, spun out or transferred to another business unit, it suddenly needs to stand alone: its own customers, costs, people and code. Preparing a readiness pack of what the line depends on and what would need separating saves months when the corporate development team calls.

                ## Milestones
                1. Customers, contracts and revenue of the line listed separately from the rest.
                2. Shared platforms, data and people the line depends on mapped.
                3. Separation work estimated with the engineering leads.
                4. A readiness pack reviewed by corporate development and finance.

                ## Notes
                Work under whatever confidentiality the corporate development team sets. Keep the circle small and the pack factual; legal and tax questions go to the right professionals.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A readiness pack listing the line's customers, dependencies and separation estimate, reviewed by corporate development and finance."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the confidentiality rules with corporate development"
                - "List the line's customers, contracts and revenue separately"
                - "Map the shared platforms and people the line depends on"
                - "Estimate separation work with the engineering leads"
            - name: Lean portfolio management with a portfolio kanban
              description: |-
                ## Purpose
                Large organisations that run many teams on many products often need a visible flow for big initiatives, from idea to funded to done. A portfolio kanban with explicit stages, work-in-progress limits and a lightweight business case per initiative shows what the portfolio is really working on and where it is stuck.

                ## Milestones
                1. Kanban stages defined, such as funnel, reviewing, analysing, ready, implementing and done.
                2. Every major cross-product initiative placed on the board.
                3. Work-in-progress limits set for the implementing stage.
                4. A weekly flow review held for two months and the limits adjusted.

                ## Notes
                Lean portfolio management comes from scaled agile practice, but you can take the kanban and work-in-progress limits without adopting the whole framework.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A portfolio kanban holds every major initiative with work-in-progress limits, reviewed weekly for two months."
                cadence: rolling
              tasks:
                - "Define the kanban stages and entry criteria for each"
                - "Place every major cross-product initiative on the board"
                - "Set a work-in-progress limit for the implementing stage"
                - "Review flow and blocked initiatives on the portfolio board @recurring(weekly:tue)"
            - name: Portfolio scenario model for investment mixes
              description: |-
                ## Purpose
                Experienced portfolio leaders test funding choices before making them. A simple model that projects revenue, margin and headcount for the portfolio under three or four investment mixes shows leadership the trade-off between near-term margin and longer-term growth in numbers rather than adjectives.

                ## Milestones
                1. A model linking each product's funding to projected revenue and margin, with assumptions visible.
                2. Three or four investment mixes modelled over three years.
                3. The model reviewed by finance for soundness.
                4. Results used in the annual planning discussion.

                ## Notes
                Projections are only as good as the assumptions. Show ranges, not single numbers, and say plainly which assumptions are guesses.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scenario model with at least three investment mixes over three years, reviewed by finance and used in annual planning."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the assumptions linking funding to revenue for each product"
                - "Build the model with assumptions on one visible tab"
                - "Model three or four investment mixes over three years"
                - "Ask finance to review the model before planning starts"
            - name: Internal venture board for horizon three bets
              description: |-
                ## Purpose
                Early bets judged by the same group that runs the core products tend to be cut whenever the core has a bad quarter. An internal venture board with its own small budget, its own members and venture-style staged funding gives horizon three bets a fair hearing and a disciplined path to stopping.

                ## Milestones
                1. A venture board charter with members, budget, decision rules and meeting rhythm.
                2. A ring-fenced budget agreed with finance for the year.
                3. The first bets reviewed and staged funding decisions recorded.
                4. A year-end report on bets funded, stopped and graduated into the main portfolio.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A venture board with a ring-fenced budget meets monthly for a year and reports on bets funded, stopped and graduated."
                cadence: rolling
              tasks:
                - "Draft a venture board charter with members and decision rules"
                - "Agree a ring-fenced yearly budget with finance"
                - "Hold the venture board review of horizon three bets @recurring(monthly:12)"
                - "Write a year-end report on funded, stopped and graduated bets"
            - name: Portfolio team roles and skills matrix
              description: |-
                ## Purpose
                As a portfolio grows, the work splits into roles: portfolio analyst, product line leads, a finance partner, someone who runs the review rhythm. Mapping who covers which portfolio skills (financial analysis, facilitation, strategy writing, data) shows the gaps to hire or develop for before they slow decisions down.

                ## Milestones
                1. The portfolio roles and the skills each needs listed.
                2. Every member of the portfolio group rated against those skills.
                3. The two largest skill gaps named.
                4. A development or hiring step agreed for each gap.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A skills matrix for the portfolio group with the two largest gaps named and an agreed step for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List portfolio roles and their skills in the skills matrix template"
                - "Rate each member of the portfolio group with them in a short session"
                - "Name the two largest skill gaps"
                - "Agree a development or hiring step for each gap"
---

# Product Portfolio Management

Product portfolio management is the work of running several products or product lines as one set of bets, written for heads of product, group product managers and portfolio leads in larger organisations. It starts with foundations (an inventory, lifecycle stages, where people and money actually go, a product-level P&L and a grow, sustain, harvest or retire call for each product), then the routines that keep the portfolio honest, the skills behind portfolio frameworks and business cases, decisions on overlap, cannibalisation and maintenance mode, dated events such as the annual budget and the board review, situations from a first portfolio role to an acquisition or a budget cut, and finally specialist work like lean portfolio management and an internal venture board.

What repeats is a monthly health scorecard, risk review, intake triage and written digest from product leads, a quarterly portfolio review followed by capacity rebalancing, and a yearly cycle of planning, cost allocation, concentration and zombie checks, the board review and a leadership offsite. The Metrics log, Meeting notes, Risk register, Board meeting, Onboarding 30/60/90 and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
