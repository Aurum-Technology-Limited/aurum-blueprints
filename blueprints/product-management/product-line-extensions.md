---
id: product-management.product-line-extensions
name: Product Line Extensions
description: "Deciding when and how to extend a product line: the line map and extension thesis, cannibalisation and fence checks, new editions, tiers and add-ons, pilots and launch readiness, and the reviews that scale or stop them."
category: business
version: 1.0.0
tags: [product-management, product-line-extensions, manager, founder, team, editions, add-ons, product-line]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - meeting-notes
    - reading-queue
    - product-spec
    - operational-checklist
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product Line Extensions
          description: "Planning new editions, tiers, add-ons or adjacent products that extend an existing product line into new segments or use cases."
          projects:
            - name: Current product line map with revenue by edition
              description: |-
                ## Purpose
                Before adding anything to a product line, write down what the line already is: every edition, tier, add-on and standalone product, who buys each one and what share of revenue it brings. Most teams discover at least one plan nobody can explain and one add-on that sells only because sales bundles it in for free. A single map makes every later extension debate start from the same facts.

                ## Milestones
                1. Every edition, tier, add-on and standalone product listed with its launch year and owner.
                2. Customer count, revenue share and twelve-month growth recorded for each item.
                3. The main buyer and primary use case written beside each item in one sentence.
                4. Gaps and overlaps marked, such as two tiers that differ by a single feature.

                ## Notes
                Pull the numbers from billing, not from the pricing page. The page shows what you intended; billing shows what customers actually hold, including legacy plans.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page line map lists every edition, tier and add-on with customer count, revenue share, main buyer and marked overlaps, shared with the product leads."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of active plans and add-ons from the billing system"
                - "Count customers and revenue on each plan, including legacy ones"
                - "Write the main buyer and use case beside every item"
                - "Mark overlaps and gaps on the map and share it with the product leads"
            - name: One-page extension thesis on why to extend now
              description: |-
                ## Purpose
                Line extensions often start as a sales request or a reaction to a competitor's announcement rather than a strategy. A one-page thesis that states the growth gap, the segment or use case in view, the evidence and why the core product cannot simply absorb the need forces the argument into the open before any engineering time is spent. It is also the document leadership will ask for first.

                ## Milestones
                1. The growth gap stated with a number, such as new-logo growth slowing from 30 to 12 percent a year.
                2. The target segment or use case named, with the reason the current line does not serve it.
                3. Three pieces of evidence cited, each with its source.
                4. The alternative of improving the core product instead argued honestly in a paragraph.
                5. The thesis challenged by one sceptic outside the product team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page thesis naming the growth gap, target segment, three sourced pieces of evidence and the core-product alternative has been reviewed by a sceptic."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the growth gap the extension would close in one sentence with a number"
                - "Name the segment or use case and why the current line misses it"
                - "Argue the case for improving the core product instead, in one paragraph"
                - "Send the draft thesis to one sceptical colleague for challenge"
            - name: Adjacent segment candidate list
              description: |-
                ## Purpose
                The segments closest to your current customers are where extensions usually succeed: a smaller or larger company size, a neighbouring industry, a different role in the same account or a new kind of use. Listing five to eight candidates and describing each by size, current workaround and distance from your core keeps the team from chasing the one segment a single loud prospect happens to represent.

                ## Milestones
                1. Five to eight candidate segments listed, each defined by who buys and what they are trying to do.
                2. Each candidate described by rough size, current workaround and distance from the core customer.
                3. Two or three candidates marked as worth further research, with the reason.
                4. The list corrected by sales and customer success before shortlisting.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of five to eight adjacent segments, each scored on distance from the core, with two or three shortlisted and reviewed by sales and success."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the deal types sales loses or turns away most often"
                - "Describe each candidate segment's current workaround in a sentence"
                - "Score each candidate on distance from the core customer, one to five"
                - "Ask sales and customer success to correct the list before shortlisting"
            - name: Choosing between an edition, tier, add-on or new product
              description: |-
                ## Purpose
                One customer need can be met as a new edition, an extra tier, a paid add-on or a separate product, and each choice brings different costs in billing, brand, support and sales training. Deciding the type deliberately, against written criteria, avoids launching a separate product for what customers see as a missing feature, or burying a new market inside a tier nobody in that market will ever find.

                ## Milestones
                1. The four extension types described with their costs and consequences for this product.
                2. Criteria agreed, such as buyer overlap, need for separate branding, engineering reuse and sales motion.
                3. The leading idea scored against each type.
                4. A recorded decision on the type, with the runner-up and why it lost.

                ## Notes
                A rough rule many teams use: same buyer and a narrow need suggests an add-on; same buyer and a broad need, a tier; a different buyer, an edition or a new product.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The decision log records the chosen extension type, the scores against agreed criteria and the runner-up with the reason it lost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one paragraph on what each extension type would mean for this product"
                - "Agree four or five decision criteria with the engineering and sales leads"
                - "Score the leading idea against each extension type"
                - "Record the chosen type and the runner-up in the decision log"
            - name: Customer evidence file for the extension idea
              description: |-
                ## Purpose
                Extension ideas collect anecdotes quickly and evidence slowly. One file that pulls together lost-deal reasons, support tickets, workaround stories, interview quotes and usage data for the idea shows whether demand is broad or rests on three customers and one enthusiastic account manager.

                ## Milestones
                1. Lost-deal notes from the last twelve months searched for the need, with matches counted.
                2. Support tickets and feature requests mentioning the need tagged and counted.
                3. At least eight customer or prospect conversations summarised with direct quotes.
                4. A one-paragraph verdict on breadth of demand, with the number of distinct accounts behind it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An evidence file counts matching lost deals and tickets, summarises at least eight conversations and states how many distinct accounts show the need."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search the CRM for lost deals that mention the missing capability"
                - "Tag and count support tickets that describe the same need"
                - "Book eight conversations with customers or prospects in the target segment"
                - "Ask the agent to summarise the evidence into themes with account counts"
            - name: Success measures and kill criteria for the extension
              description: |-
                ## Purpose
                Extensions are rarely killed; they linger, eating support time and cluttering the plan page long after it is clear they missed. Writing the success measures and the conditions under which you would stop, before anything is built, turns the six-month review into a check against a promise rather than a debate about feelings.

                ## Milestones
                1. Three to five success measures chosen, such as new-logo share, attach rate, net revenue and support cost per account.
                2. A target and a floor set for each measure at six and twelve months.
                3. Kill criteria written as specific conditions, for example attach rate under 3 percent after two quarters.
                4. Measures and criteria signed off by the sponsor and stored with the business case.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five measures with six and twelve-month targets and floors, plus written kill criteria, are signed off by the sponsor before build starts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick three to five measures that show whether the extension worked"
                - "Set a six-month and a twelve-month target and floor for each measure"
                - "Write the kill criteria as conditions anyone could check"
                - "Get the sponsor to sign off the measures before build starts"
            - name: Cannibalisation risk assessment for the new offer
              description: |-
                ## Purpose
                Cheaper editions can pull existing customers down, and a premium tier can leave the old top plan empty. Estimating how many current customers would move, and what that does to revenue, tells you whether the extension grows the line or just reshuffles it, and which feature fences have to hold.

                ## Milestones
                1. Current customers grouped by how closely they match the new offer's profile.
                2. Low, middle and high estimates of customers who would switch, each with its revenue effect.
                3. The fences that would discourage switching listed, such as seat caps, support level or feature limits.
                4. Each risk logged with an owner and an early warning signal to watch after launch.

                ## Notes
                Start from the **Risk register** template. Some cannibalisation is healthy if a competitor would otherwise take those customers; say so plainly if that is your bet.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A risk register holds low, middle and high switching estimates with revenue effects, the fences that limit switching and an owner for each risk."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the list of current customers who would fit the new offer's profile"
                - "Estimate low, middle and high switching rates with the finance partner"
                - "List the fences that would make switching less attractive"
                - "Log each cannibalisation risk with an owner and warning signal"
            - name: Platform reuse audit for the extension
              description: |-
                ## Purpose
                How much an extension costs depends mostly on how much of the existing product it can reuse: accounts, billing, permissions, data model, integrations and support tooling. A short audit with the engineering lead, done before anyone quotes a timeline, separates the parts that are configuration from the parts that are genuinely new build.

                ## Milestones
                1. Each capability the extension needs listed and marked as reuse, adapt or new build.
                2. Rough effort ranges agreed with engineering for the adapt and new build items.
                3. Hidden dependencies noted, such as a billing system that cannot hold a second plan family.
                4. A total effort range written into the business case.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every capability the extension needs is marked reuse, adapt or new build, with an effort range agreed by the engineering lead in the business case."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every capability the extension needs, from accounts to support tooling"
                - "Mark each capability as reuse, adapt or new build with the engineering lead"
                - "Check whether billing and entitlements can hold the new offer as they are"
                - "Write the agreed effort range into the business case"
            - name: Owning team and sponsor for the extension
              description: |-
                ## Purpose
                Extensions that belong to everyone get worked on by nobody once the core roadmap gets busy. Naming the accountable product manager, the executive sponsor, the share of engineering capacity and the decisions each can take alone keeps the extension from becoming a backlog line that slips every quarter.

                ## Milestones
                1. An accountable product manager and an executive sponsor named.
                2. A fixed share of engineering and design capacity agreed for at least two quarters.
                3. Decision rights written down: what the owner decides alone and what goes to the sponsor.
                4. The arrangement announced to the teams whose roadmaps will feel it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named owner and sponsor, a capacity share for two quarters and a written decision rights list are announced to the affected team leads."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose an accountable product manager and executive sponsor"
                - "Agree the share of engineering capacity for the next two quarters"
                - "Write a short decision rights list for the owner and sponsor"
                - "Announce the arrangement to the affected team leads"
            - name: Extension idea intake and scoring log
              description: |-
                ## Purpose
                Ideas for new tiers, add-ons and adjacent products arrive from sales calls, board meetings and competitor launches, and without a home they get decided by whoever asks loudest. A single log where every idea gets the same short write-up and the same monthly scoring gives you a pipeline to show leadership and a polite answer for every requester.

                ## Milestones
                1. A log with fields for source, target segment, extension type, evidence and score.
                2. A scoring rubric of four or five criteria agreed with the product leads.
                3. Every extension idea from the last six months entered and scored.
                4. A monthly scoring session held, with each requester told the outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every extension idea raised in the last six months sits in one log with a score, and each month's new ideas are scored with requesters told the result."
                cadence: rolling
              tasks:
                - "Set up the idea log with source, segment, type, evidence and score fields"
                - "Enter the extension ideas raised in the last six months"
                - "Score new extension ideas and tell each requester the result @recurring(monthly:9)"
                - "Retire ideas that have scored low for three months running @recurring(quarterly)"
            - name: Attach rate and add-on uptake review
              description: |-
                ## Purpose
                Add-ons and higher tiers live or die on attach rate: the share of eligible customers who buy them. Reviewing attach rate, time to attach and add-on churn every month, by segment, shows early whether the offer is landing, whether sales is pitching it and whether buyers keep it past the first renewal.

                ## Milestones
                1. Attach rate defined precisely, including which customers count as eligible.
                2. A monthly view of attach rate, time to attach and add-on churn by segment.
                3. Three months of history in the log, with trends noted.
                4. One action agreed from each month's numbers, such as a sales play or an in-product prompt.

                ## Notes
                Start from the **Metrics log** template. Count eligibility carefully: customers on plans that cannot buy the add-on make the rate look worse than it is.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds at least three consecutive months of attach rate, time to attach and add-on churn by segment, each with one agreed action."
                cadence: rolling
              tasks:
                - "Write the attach rate definition, including who counts as eligible"
                - "Update attach rate, time to attach and add-on churn by segment @recurring(monthly:14)"
                - "Agree one action from the numbers with the sales or growth lead"
                - "Flag any segment where attach rate has fallen two months in a row"
            - name: Plan migration watch for cannibalisation
              description: |-
                ## Purpose
                Once an extension is live, real cannibalisation shows up in plan changes: upgrades, downgrades and cross-grades between editions. A monthly look at who moved where, and why, catches a cheaper edition pulling customers down before it appears as a revenue miss at quarter end.

                ## Milestones
                1. A monthly report of plan changes between every pair of editions.
                2. Downgrades into the new edition reviewed against the reasons customers gave.
                3. The fence that failed identified for each cluster of unwanted downgrades.
                4. Fence changes proposed and tracked whenever downgrades pass the agreed threshold.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A plan change report between every pair of editions is reviewed monthly, and any downgrade cluster above the threshold has a proposed fence change."
                cadence: rolling
              tasks:
                - "Build a report of plan changes between every pair of editions"
                - "Review last month's plan changes and the reasons given @recurring(monthly:20)"
                - "Group unwanted downgrades by the fence that failed"
                - "Propose a fence change when downgrades pass the agreed threshold"
            - name: Sales and success feedback loop on the new line
              description: |-
                ## Purpose
                Account executives and customer success managers hear objections to a new edition or add-on weeks before they show up in any metric. A standing monthly session with a short structured form, covering objections, confusions, discount requests and wins, turns their hallway comments into changes in packaging, messaging and the product.

                ## Milestones
                1. A five-question feedback form for sales and success on the new offer.
                2. A monthly thirty-minute session with two sales and two success representatives.
                3. Feedback themes logged with counts and the deals or accounts behind them.
                4. At least one change a quarter made from the feedback and reported back to the field.

                ## Notes
                Start from the **Meeting notes** template. Ask for named deals, not impressions; a theme with no account behind it rarely survives scrutiny.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly field sessions run with a logged theme list tied to named deals, and at least one change per quarter is reported back to sales and success."
                cadence: rolling
              tasks:
                - "Draft a five-question form on objections, confusions, discounts and wins"
                - "Hold the thirty-minute field feedback session on the new offer @recurring(monthly:6)"
                - "Log feedback themes with the deals or accounts behind each one"
                - "Report back to the field on changes made from their feedback @recurring(quarterly)"
            - name: Extension profit and loss tracking
              description: |-
                ## Purpose
                Revenue from an extension can look healthy while it quietly loses money on support, infrastructure, partner fees or the discounts used to sell it. A quarterly profit and loss view for the extension, built with finance, shows contribution margin rather than headline revenue and keeps the investment case honest.

                ## Milestones
                1. Revenue, direct costs and allocated support and infrastructure costs defined with finance.
                2. A first quarterly profit and loss view for the extension produced.
                3. Contribution margin compared with the business case assumptions.
                4. Variances explained in a short note to the sponsor each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the sponsor receives an extension profit and loss view with contribution margin and a note explaining variance from the business case."
                cadence: cyclic
              tasks:
                - "Agree with finance which costs belong to the extension"
                - "Produce the extension's profit and loss view and margin @recurring(quarterly)"
                - "Compare margin with the business case and note the variances"
                - "Send the sponsor a short variance note"
            - name: Quarterly product line coherence review
              description: |-
                ## Purpose
                Every release nudges features between plans, and after a year the line can stop making sense: two tiers that differ by one obscure feature, an add-on that duplicates part of a higher edition, names nobody can explain. A quarterly coherence review with sales, marketing and support keeps the line legible to a buyer comparing plans in five minutes.

                ## Milestones
                1. The plan comparison page read cold by someone outside the product team, with confusions noted.
                2. Overlaps, orphaned features and naming clashes listed.
                3. Fixes agreed and assigned for the next quarter.
                4. A short record of each review kept, so drift can be tracked over time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coherence review is recorded each quarter, listing overlaps and naming clashes found and an owner and target quarter for every agreed fix."
                cadence: cyclic
              tasks:
                - "Ask someone outside product to read the plan comparison page cold"
                - "Run the line coherence review with sales, marketing and support @recurring(quarterly)"
                - "List overlaps, orphaned features and naming clashes"
                - "Assign each agreed fix an owner and a target quarter"
            - name: Edition feature fence register
              description: |-
                ## Purpose
                Sales, support and engineering all need one answer to which features sit in which edition or add-on, and the pricing page is never detailed enough. A maintained register of every gated feature, its edition, the reason it sits there and the entitlement flag that controls it stops accidental giveaways and support arguments.

                ## Milestones
                1. Every gated feature listed with its edition or add-on and entitlement flag.
                2. The reason for each placement written in a phrase, such as admin control or usage scale.
                3. The register checked against the live entitlement configuration with no mismatches.
                4. A rule agreed that no release ships a new gated feature without a register entry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A fence register lists every gated feature with edition, reason and flag, and the monthly check against live entitlements shows no mismatches."
                cadence: rolling
              tasks:
                - "List every gated feature with its edition and entitlement flag"
                - "Note the reason each feature sits in its edition"
                - "Check the fence register against live entitlement settings @recurring(monthly:24)"
                - "Add a register check to the release checklist"
            - name: Pilot customer check-ins for the extension
              description: |-
                ## Purpose
                Your first ten to twenty customers of a new edition or add-on are the cheapest research you will ever get, but only if someone talks to them on a schedule. A light rhythm of monthly calls, with the same few questions each time, shows whether they are getting the value promised and what nearly made them cancel.

                ## Milestones
                1. Ten to twenty pilot customers named, with an owner for each.
                2. A standing list of five questions used on every call.
                3. Notes from each call logged against the account.
                4. A monthly summary of value delivered, gaps and churn risk shared with the extension team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pilot account has a named owner and a logged call each month, and a monthly summary of value, gaps and churn risk reaches the team."
                cadence: rolling
              tasks:
                - "Name the pilot customers and assign an owner to each"
                - "Write the five questions every pilot call will cover"
                - "Call each pilot customer and log the answers @recurring(monthly:11)"
                - "Share a pilot summary of value, gaps and churn risk @recurring(monthly:16)"
            - name: Annual product line strategy review
              description: |-
                ## Purpose
                Once a year the whole line deserves a fresh look rather than a quarterly tidy: which editions and add-ons are growing, which serve a segment that has moved on, and which ideas on the extension log now deserve investment. Running it before the annual planning cycle means its conclusions reach budgets instead of a slide nobody reads.

                ## Milestones
                1. Growth, margin and customer count for every item in the line compiled for the year.
                2. Each item marked invest, hold or simplify, with the reason.
                3. The top two candidates from the extension idea log taken forward to a business case.
                4. Conclusions presented to leadership before annual budgets are set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Before annual budgets are set, leadership sees every edition and add-on marked invest, hold or simplify, with two extension candidates named for a business case."
                cadence: cyclic
              tasks:
                - "Book the line review a month before annual planning begins"
                - "Compile growth, margin and customer counts for every edition and add-on @recurring(yearly)"
                - "Mark each item invest, hold or simplify with a one-line reason"
                - "Present the review conclusions to the leadership team"
            - name: Target segment incumbent watch
              description: |-
                ## Purpose
                When you extend into a neighbouring segment you meet incumbents who already serve it well and will respond. A monthly scan of what those incumbents change, such as new editions, price moves, bundles and partnerships, gives the extension team early notice instead of learning about it from a lost deal.

                ## Milestones
                1. Three to five incumbents in the target segment named.
                2. Sources listed for each, such as changelogs, pricing pages and review sites.
                3. A monthly note of changes kept in one place.
                4. Any move that threatens the extension's positioning raised with the owner within a week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A running note records monthly changes by three to five target-segment incumbents, with threatening moves raised to the owner within a week."
                cadence: rolling
              tasks:
                - "Name the three to five incumbents already serving the target segment"
                - "List the changelog, pricing and review pages to check for each"
                - "Scan incumbents for new editions, price moves and bundles @recurring(monthly:27)"
                - "Raise any threatening move with the extension owner within a week"
            - name: Lessons from successful and failed line extensions
              description: |-
                ## Purpose
                Product line extensions have a long history across software, consumer goods and hardware, and the failures rhyme: diluted brands, confused buyers, editions built for a segment nobody had checked. Reading ten well-documented cases and writing down the pattern in each gives you a list of mistakes to avoid that no framework will.

                ## Milestones
                1. Ten cases chosen, at least three of them failures, from software and at least one other industry.
                2. A half-page note on each: what was extended, for whom, what happened and why.
                3. Five recurring patterns drawn out across the cases.
                4. The patterns turned into review questions for your own extension plan.

                ## Notes
                Start from the **Reading queue** template. Business school case collections, founders' published retrospectives and books on packaging and brand strategy are good sources.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten written case notes, at least three on failures, produce five patterns that appear as review questions in your extension plan."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick ten line extension cases, including at least three failures"
                - "Write a half-page note on what happened in each case"
                - "Draw out five patterns that recur across the cases"
                - "Turn the patterns into review questions for your extension plan"
            - name: Fence design for a new edition beside existing ones
              description: |-
                ## Purpose
                Most software lines settle into three or four editions, and adding one means deciding what separates it from its neighbours: usage, sophistication, control or service level. Learning how experienced packaging designers build those fences, and practising on your own line, is the difference between an edition buyers can place in seconds and one they need a sales call to understand.

                ## Milestones
                1. The main fence types written in your own words with an example of each.
                2. Five peer product lines analysed for how their editions are separated.
                3. The new edition's fences sketched against the current line.
                4. The sketch walked through with the pricing or packaging owner, with objections noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written sketch places the new edition's fences against the current line, using named fence types, and records the pricing owner's objections."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read two practitioner guides on packaging and edition fences"
                - "Analyse how five peer product lines separate their editions"
                - "Sketch where the new edition's fences would sit against the current line"
                - "Walk the pricing owner through the sketch and note their objections"
            - name: Willingness-to-pay methods for a new segment
              description: |-
                ## Purpose
                Pricing a segment you do not yet serve cannot rely on your own sales data. Learning the common research methods, such as the Van Westendorp price sensitivity questions, Gabor-Granger and simple conjoint studies, and knowing which suits a sample of twenty versus two hundred, lets you test what the new segment would pay before committing to an edition.

                ## Milestones
                1. Three willingness-to-pay methods understood, with when to use each.
                2. One method chosen for the target segment, with the sample size it needs.
                3. A draft survey or interview guide written for the segment.
                4. A pilot run with five respondents to catch confusing questions.

                ## Notes
                Stated willingness to pay runs higher than what people actually pay. Treat the results as a range to test in the pilot, not a price.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chosen willingness-to-pay method, a draft guide for the target segment and notes from a five-person pilot of that guide are saved together."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read an introduction to Van Westendorp, Gabor-Granger and conjoint methods"
                - "Choose a method that fits the sample you can realistically reach"
                - "Draft the survey or interview guide for the target segment"
                - "Pilot the guide with five people and fix the confusing questions"
            - name: Adjacency analysis methods
              description: |-
                ## Purpose
                Not every neighbouring market is equally close. Adjacency analysis, which measures distance from your core along customer, need, channel, capability and competitor dimensions, explains why some extensions feel natural and others fail despite looking obvious. Learning one or two methods properly gives the team a shared language for arguing about where to go next.

                ## Milestones
                1. Two adjacency frameworks studied, such as the Ansoff matrix and a step-out distance score.
                2. Five dimensions of distance defined for your product.
                3. Each candidate segment scored on those dimensions.
                4. A short teach-back given to the product team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every candidate segment has a score on five defined distance dimensions, and the method has been taught back to the product team in one session."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read about the Ansoff matrix and step-out distance scoring"
                - "Define five distance dimensions that fit your product"
                - "Score each candidate segment on the five dimensions"
                - "Give the product team a twenty-minute teach-back"
            - name: Brand architecture for a growing product line
              description: |-
                ## Purpose
                Naming the third product forces a choice many teams have avoided: one master brand with descriptive editions, endorsed sub-brands, or separately branded products. Understanding these brand architecture options, and what each costs in marketing spend and buyer clarity, lets a product manager hold a useful conversation with marketing before the naming argument starts.

                ## Milestones
                1. The branded house, endorsed and house of brands models understood with examples.
                2. Your current line described in those terms.
                3. The implications of each model for the planned extension written down.
                4. A recommendation discussed with the marketing lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note describes the current line's brand architecture, the effect of each model on the planned extension and the marketing lead's response."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a primer on branded house, endorsed and house of brands models"
                - "Describe your current product line in brand architecture terms"
                - "Write what each model would mean for the planned extension"
                - "Discuss the recommendation with the marketing lead"
            - name: Unit economics of editions and add-ons
              description: |-
                ## Purpose
                An add-on that sells for a fifth of the core price can still cost as much to support, and a new segment can cost three times as much to acquire. Learning to build unit economics for an extension, covering acquisition cost, gross margin, support load, payback and expansion, means the business case you write survives a finance review.

                ## Milestones
                1. Acquisition cost, gross margin, payback period and net revenue retention understood for the current product.
                2. A simple model built for the extension, with each assumption labelled.
                3. The model reviewed by someone in finance.
                4. The three assumptions that most change the answer identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-sheet unit economics model for the extension, reviewed by finance, labels every assumption and names the three that swing the result most."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance for current acquisition cost, margin and retention figures"
                - "Build a one-sheet unit economics model for the extension"
                - "Label every assumption with its source or mark it as a guess"
                - "Test which three assumptions swing the answer most"
            - name: Entitlements and plan configuration for product managers
              description: |-
                ## Purpose
                How plans are configured in code decides how cheap the next extension will be. Product managers who understand entitlements, plan flags, SKUs and how billing maps to them can ask engineering the right questions, spot when a packaging idea needs a rebuild, and avoid promising sales a bundle the system cannot hold.

                ## Milestones
                1. A walkthrough with an engineer of how a customer's plan becomes access to features.
                2. Entitlement, SKU, plan flag and price ID defined in a team glossary.
                3. The path a new add-on would take from billing to feature access drawn as a diagram.
                4. Two current packaging limits identified, such as no way to sell an add-on to a single workspace.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary and a diagram showing how an add-on travels from billing to feature access exist, along with two named limits of the current setup."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book an hour with an engineer to trace a plan through to feature access"
                - "Write glossary entries for entitlement, SKU, plan flag and price ID"
                - "Draw how a new add-on would travel from billing to feature access"
                - "List two packaging ideas the current setup could not support"
            - name: Lite edition scope and limits for smaller customers
              description: |-
                ## Purpose
                Small teams and solo buyers often want the core job done without the admin, integrations and price of the full product. Designing a lite edition means deciding the few things it must do brilliantly, the limits that keep larger customers on the main plan, and how it will sell without a salesperson involved.

                ## Milestones
                1. The core job the lite edition serves written in one sentence and tested with five small customers.
                2. Included features, limits and exclusions agreed with design and engineering.
                3. The fences checked against the cannibalisation assessment.
                4. A spec ready for design and engineering to start.

                ## Notes
                Start from the **Product spec** template. Limits on seats or volume usually hold better than removing features users expect to find.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A lite edition spec names its core job, included features, limits and exclusions, and has been checked against the cannibalisation estimates."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the single job the lite edition must do in one sentence"
                - "Test that sentence with five small customers or prospects"
                - "Agree included features, limits and exclusions with design and engineering"
                - "Check the lite edition's fences against the cannibalisation estimates"
            - name: Premium tier above the current top plan
              description: |-
                ## Purpose
                When your biggest and most demanding customers all sit on the top plan, there is often value they would pay more for: higher limits, advanced controls, faster support or dedicated environments. Defining a premium tier from what those accounts already ask for raises the ceiling of the line without inventing features in a vacuum.

                ## Milestones
                1. The twenty largest accounts reviewed for requests, custom deals and support escalations.
                2. Candidate premium features grouped and ranked by how many of those accounts want them.
                3. A premium tier proposal naming its contents and target customers.
                4. Five top accounts consulted on the proposal before it goes further.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A premium tier proposal built from the twenty largest accounts' requests has been tested with five of them and their responses recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List requests and custom terms from the twenty largest accounts"
                - "Group the candidate premium features and count accounts behind each"
                - "Draft a premium tier proposal with contents and target customers"
                - "Test the proposal with five top accounts"
            - name: Paid add-on for a high-demand capability
              description: |-
                ## Purpose
                Some capabilities are wanted intensely by a minority of customers, such as advanced reporting, extra storage or a compliance pack, and putting them in every plan raises the price for everyone else. Packaging one as a paid add-on lets the customers who value it pay for it, but only if it is self-contained enough to sell and support on its own.

                ## Milestones
                1. Three candidate capabilities compared on intensity of demand, share of customers wanting it and self-containment.
                2. One capability chosen, with the plans that can buy it named.
                3. The buying path defined: self-serve purchase, sales-assisted or both.
                4. A support and documentation plan agreed with the support lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One capability is chosen as a paid add-on, with eligible plans, buying path and a support plan agreed and written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List three capabilities that a minority of customers want intensely"
                - "Score each on demand, reach and how self-contained it is"
                - "Decide which plans the chosen add-on can be bought on"
                - "Agree support and documentation needs with the support lead"
            - name: Vertical edition for one industry
              description: |-
                ## Purpose
                General products often win a cluster of customers in one industry who all bend them the same way, with the same templates, terms and workarounds. A vertical edition packages that bending: industry templates, vocabulary, integrations and reports, sold with a message in the industry's own language. The risk is building a second product for a market too small to pay for it.

                ## Milestones
                1. Current customers in the industry counted, with their shared workarounds documented.
                2. The industry segment's size estimated from two independent sources.
                3. Edition contents limited to configuration, templates and a small number of new features.
                4. A go or no-go recommendation stating the minimum customer count that would justify it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go recommendation for a vertical edition cites current industry customers, a sourced segment size and a minimum customer count."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Count current customers in the industry and list their shared workarounds"
                - "Estimate the industry segment size from two independent sources"
                - "Draft the edition contents, keeping new build to a minimum"
                - "Write a go or no-go recommendation with a minimum customer count"
            - name: Unbundling a core feature into a standalone product
              description: |-
                ## Purpose
                Sometimes one feature is valued by people who never need the rest, such as a scheduling tool inside a practice management suite. Spinning it out as a standalone product can open a new market and feed leads back to the core, but it splits attention, data and brand, so the case needs to be strong before anyone commits.

                ## Milestones
                1. Usage data showing how many accounts rely on the feature without touching the rest.
                2. Five people outside the customer base interviewed who would buy it alone.
                3. The costs of separation identified for accounts, billing, support and brand.
                4. A recorded decision to unbundle, keep inside or revisit, with the trigger for revisiting.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded unbundling decision cites usage data, five non-customer interviews and separation costs, and names what would reopen it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull usage for accounts that use the feature but little else"
                - "Interview five non-customers who would buy the feature on its own"
                - "List the separation costs for accounts, billing, support and brand"
                - "Record the unbundling decision and what would reopen it"
            - name: Extension naming and SKU structure
              description: |-
                ## Purpose
                Names and SKUs outlive the strategy that created them. Agreeing a naming scheme for the new edition or add-on that fits the existing line, and a SKU structure finance and billing can report on, avoids a rename in year two and the spreadsheet of legacy codes nobody can decode.

                ## Milestones
                1. Naming principles agreed with marketing, such as descriptive edition names under the master brand.
                2. Three name candidates checked for clashes with existing plans and competitors.
                3. A SKU structure that lets finance report revenue by edition, add-on and billing period.
                4. The final name and SKUs recorded in the fence register and the billing system.

                ## Notes
                Ask your legal adviser to run the trademark check on the favourite name. A quick web search is not a clearance.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A final name with a completed trademark check and a SKU structure that reports by edition, add-on and period are recorded in billing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree naming principles for the line with the marketing lead"
                - "Shortlist three names and check them against plans and competitors"
                - "Ask the legal adviser to run a trademark check on the favourite"
                - "Design SKU codes with finance so revenue reports by edition and add-on"
            - name: Bundle with the core or sell separately
              description: |-
                ## Purpose
                New capabilities can be bundled into existing plans to raise their value, or sold separately to earn their own revenue. Bundling helps retention and simplicity; selling separately shows whether anyone will actually pay. Deciding with numbers on both sides, and a view of how customers will react, beats letting the first big deal set the precedent.

                ## Milestones
                1. Two-year revenue estimates for the bundled and separate options.
                2. The retention and win-rate effect of bundling estimated from a comparable past change.
                3. Existing customers' reaction to each option tested with five accounts.
                4. A recorded decision, including which customers, if any, receive it at no charge.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded bundle or separate decision compares two-year revenue for both options, cites five account reactions and states who gets it free."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate two-year revenue for the bundled and separate options"
                - "Find a past bundling change and check what it did to retention"
                - "Test both options with five existing accounts"
                - "Record the bundle decision and who, if anyone, gets it free"
            - name: Go-to-market motion for the extension
              description: |-
                ## Purpose
                An extension aimed at a new segment rarely sells through the same motion as the core. A lite edition for small teams usually needs self-serve sign-up, a premium tier needs account executives and a vertical edition may need partners in that industry. Choosing the motion early changes what you build: checkout flows, trials, sales collateral or partner terms.

                ## Milestones
                1. The target segment's buying process mapped, including who signs and how they evaluate.
                2. Self-serve, sales-led and partner-led motions compared for that segment.
                3. The chosen motion and the product changes it requires written down, such as in-app checkout.
                4. Sales or growth leadership committed to the motion and its targets.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of self-serve, sales-led or partner-led motion lists the product changes it needs and has a named leader committed to its targets."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map how the target segment discovers, evaluates and buys tools"
                - "Compare self-serve, sales-led and partner-led motions for that segment"
                - "List the product changes the chosen motion requires"
                - "Get sales or growth leadership to commit to the motion and targets"
            - name: Upgrade and cross-sell paths between editions
              description: |-
                ## Purpose
                A line with several editions and add-ons only grows revenue if customers can see and take the next step. Mapping the upgrade paths, the customer triggers behind each one and the owners of the prompts and sales plays for each transition makes the line work as a ladder rather than a set of disconnected boxes.

                ## Milestones
                1. Every upgrade and cross-sell path between items in the line drawn.
                2. The customer trigger for each path identified, such as hitting a limit or adding a team.
                3. Owners named for in-product prompts and sales plays on the top three paths.
                4. Conversion along each of the top three paths measured as a baseline.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A path map shows every upgrade and cross-sell route with its trigger, and the top three paths have owners and a measured baseline conversion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draw every upgrade and cross-sell path between items in the line"
                - "Note the customer trigger behind each path"
                - "Name owners for prompts and sales plays on the top three paths"
                - "Measure current conversion on the top three paths as a baseline"
            - name: Extension business case review with leadership
              description: |-
                ## Purpose
                Most extensions need money, people and a share of the roadmap, which means a formal decision from leadership. Preparing the business case as a short memo covering thesis, evidence, economics, risks and kill criteria, and booking the review date now, gives everyone a deadline and the sponsor time to read before the meeting.

                ## Milestones
                1. A review date booked with the leadership team.
                2. A memo of no more than six pages covering thesis, evidence, economics, risks and kill criteria.
                3. The memo pre-read by the sponsor and finance, with their questions answered in it.
                4. The decision and any conditions recorded after the meeting.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The leadership review has taken place on a six-page memo pre-read by the sponsor and finance, and the decision and conditions are recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book the business case review with the leadership team"
                - "Draft the memo from the thesis, evidence and unit economics"
                - "Ask the agent to list the hardest questions leadership is likely to ask"
                - "Record the decision and its conditions after the meeting"
            - name: Pilot cohort launch for the new edition
              description: |-
                ## Purpose
                Launching an extension to a small, chosen cohort before general availability tests the product, the packaging and the buying path together. A dated pilot with ten to twenty customers, clear terms and an end date gives you real usage and real objections while changes are still cheap.

                ## Milestones
                1. Ten to twenty pilot customers recruited from the target segment.
                2. Pilot terms written, including price, duration and what happens at the end.
                3. The edition switched on for the cohort with billing and entitlements working.
                4. A first-week check confirming every pilot account is active.

                ## Notes
                Agree in writing what pilot customers pay after the pilot ends. Leaving it open makes the conversion conversation awkward and the pilot data hard to read.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least ten target-segment customers are live on the new edition under written pilot terms, with billing tested and all accounts active in week one."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Draft pilot terms covering price, length and what happens at the end"
                - "Invite twenty target-segment customers and confirm at least ten"
                - "Switch the edition on for the cohort and test billing end to end"
                - "Check in the first week that every pilot account is active"
            - name: Sales and support enablement session on the new line
              description: |-
                ## Purpose
                New editions and add-ons change what sales pitches, what support answers and what billing explains, and teams who learn it from a customer question look unprepared. A dated enablement session, with a one-page guide to who the offer is for, how it differs from existing plans and the five objections to expect, gets everyone ready before customers ask.

                ## Milestones
                1. A one-page guide covering who the offer is for, how it differs and the main objections.
                2. A session held with sales, support and billing, recorded for anyone who misses it.
                3. A short role-play confirming each team can explain the fences between editions.
                4. Support macros and sales collateral updated before the launch date.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The enablement session has run and been recorded, and support macros and sales collateral for the new offer are updated before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page guide to the new offer and its main objections"
                - "Book the enablement session with sales, support and billing"
                - "Run a role-play on explaining the fences between editions"
                - "Update support macros and sales collateral before launch"
            - name: Plan page and catalogue readiness for the extension
              description: |-
                ## Purpose
                The day an extension goes on sale, every place a buyer meets the line must agree: the pricing page, the plan comparison table, in-app upgrade screens, the billing catalogue, sales quotes and the help centre. A dated readiness check across all of them catches the edition that can be bought in the app but is missing from the quote tool.

                ## Milestones
                1. Every customer-facing surface that shows plans listed.
                2. Each surface updated and checked against the fence register.
                3. A test purchase made through every buying path, including sales quotes.
                4. Sign-off recorded the day before the extension goes on sale.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every plan surface matches the fence register, a test purchase has succeeded on each buying path and sign-off is recorded before sale opens."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every surface that shows plans, from pricing page to quote tool"
                - "Check each surface against the fence register"
                - "Make a test purchase through each buying path"
                - "Record sign-off the day before the extension goes on sale"
            - name: Six-month extension review to scale, fix or stop
              description: |-
                ## Purpose
                Six months after launch there is enough data to judge an extension against the measures and kill criteria set before it was built. A dated review with the sponsor, finance and sales ends in one of three decisions: scale it, fix a named problem by a date, or stop and move its customers. Skipping it is how lines fill up with zombie editions.

                ## Milestones
                1. Each success measure reported against its six-month target and floor.
                2. Kill criteria checked one by one, with results stated plainly.
                3. A scale, fix or stop decision recorded, with owners and dates.
                4. Customers and internal teams told the outcome within two weeks.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A scale, fix or stop decision is recorded against every success measure and kill criterion, and affected customers are told within two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the six-month review with the sponsor, finance and sales"
                - "Report each success measure against its target and floor"
                - "Check every kill criterion and state the result plainly"
                - "Tell customers and internal teams the outcome within two weeks"
            - name: Debut of the extension at an industry event
              description: |-
                ## Purpose
                For a vertical or segment-specific extension, the target segment's own conference or trade show is often where buyers first take it seriously. Treating the debut as a dated milestone, with a demo built for that audience, two pilot customers willing to speak and a way to capture leads, turns event spending into pipeline you can trace.

                ## Milestones
                1. The event chosen for the target segment, with dates and costs approved.
                2. A demo built around that segment's daily work rather than the general product.
                3. Two pilot customers agreed to speak or be quoted.
                4. Leads from the event logged and followed up within ten days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The extension has been shown at a target-segment event with a segment-specific demo, and every lead captured is followed up within ten days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the target segment's main industry event and check its dates"
                - "Script a demo around the segment's daily work"
                - "Ask two pilot customers to speak or be quoted"
                - "Follow up every event lead within ten days"
            - name: Second product decision for a single-product founder
              description: |-
                ## Purpose
                Founders with one product that works face the second-product question with a small team, investors asking about growth and a core product that still needs them. Running the decision as a short, staged process, with a fixed time box for discovery and a rule that the core keeps most of engineering, protects the business that pays the bills while you test the next one.

                ## Milestones
                1. A time box of six to eight weeks set for discovery on the second product.
                2. A rule agreed for how much engineering the core keeps, such as 80 percent.
                3. Discovery findings written up with a go, wait or no decision.
                4. The decision explained to the team and investors with the reasoning.

                ## Notes
                Most founders find that the second product's first customers are their existing ones. If none of them want it, treat that as strong evidence.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go, wait or no decision on a second product, based on time-boxed discovery and a fixed engineering split, is shared with the team and investors."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set a six to eight week time box for second-product discovery"
                - "Agree the share of engineering the core product keeps"
                - "Write up discovery findings with a go, wait or no decision"
                - "Explain the decision to the team and investors"
            - name: Inheriting a sprawling product line as a new manager
              description: |-
                ## Purpose
                Product managers who take over a mature line often find editions launched by predecessors, legacy plans still billing and add-ons nobody owns. In the first ninety days, finding out why each piece exists and proposing a simpler line, without breaking customer contracts, sets up every later extension decision you will make.

                ## Milestones
                1. Every edition, legacy plan and add-on traced to its origin and original rationale.
                2. Contractual commitments to customers on legacy plans listed with account management.
                3. A proposed simplified line, with the migration impact on customers estimated.
                4. The proposal reviewed with the head of product and finance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Within ninety days a simplified line proposal, with every item's origin traced and legacy contract commitments listed, is reviewed by product and finance."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Interview three long-serving staff about why each edition exists"
                - "Trace every legacy plan back to its launch document or decision"
                - "List contractual commitments on legacy plans with account management"
                - "Draft a simpler line and estimate the customer migration impact"
            - name: Running an extension with a small team beside the core
              description: |-
                ## Purpose
                In small companies the extension is usually built by the same team that maintains the core, and it loses every capacity argument. Ring-fencing a fixed slice of time, giving the extension its own short weekly planning slot and agreeing in advance what happens when the core has an emergency keeps both moving.

                ## Milestones
                1. A fixed capacity slice agreed, such as one engineer or two days a week.
                2. A weekly thirty-minute planning slot for the extension in the team calendar.
                3. A written rule for when core emergencies may borrow extension time and how it is paid back.
                4. Capacity actually spent on the extension tracked against the agreement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The team runs a weekly extension planning slot and a monthly comparison shows actual extension capacity within the agreed slice or the payback logged."
                cadence: rolling
              tasks:
                - "Agree the fixed capacity slice for the extension with the team"
                - "Run the thirty-minute extension planning slot @recurring(weekly:tue)"
                - "Write the rule for borrowing extension time during core emergencies"
                - "Compare capacity spent on the extension with the agreement @recurring(monthly:3)"
            - name: Folding an acquired product into the line
              description: |-
                ## Purpose
                After an acquisition, the acquired product has to find its place: a new edition, an add-on to the core, a standalone product under the brand or a migration target. Deciding its position within months, with customer overlap and contract terms in hand, prevents two sales teams pitching competing products to the same account.

                ## Milestones
                1. Customer overlap between the acquired product and the core measured.
                2. The four placement options compared, with migration and contract implications.
                3. A placement decision recorded and shared with both sales teams.
                4. A twelve-month plan for naming, billing and packaging changes.

                ## Notes
                Check customer contracts before promising any migration; some acquired customers will have terms that fix their product or price for years.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded placement for the acquired product, based on measured customer overlap, is shared with both sales teams alongside a twelve-month change plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure customer overlap between the acquired product and the core"
                - "Compare edition, add-on, standalone and migration options"
                - "Record the placement decision and brief both sales teams"
                - "Draft a twelve-month plan for naming, billing and packaging changes"
            - name: Moving downmarket from larger customers to small teams
              description: |-
                ## Purpose
                Companies that grew up selling to large organisations often hit a wall of small teams who want the product without procurement, onboarding calls or annual contracts. Moving downmarket is less about removing features than rebuilding the path to value so a team of five can succeed without anyone from your company in the room.

                ## Milestones
                1. Ten small teams observed trying the product without help, with blockers listed.
                2. The onboarding, contract and support changes a downmarket offer needs listed.
                3. Economics checked: a support cost per account the lower price can carry.
                4. The downmarket proposal reconciled with the lite edition spec.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Blockers from ten unassisted small-team trials and a support cost per account check are written into the lite edition spec."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Watch ten small teams try the product without any help"
                - "List the onboarding, contract and support changes small teams need"
                - "Check that the support cost per account fits the lower price"
                - "Merge the findings into the lite edition spec"
            - name: Extension for a new role inside existing accounts
              description: |-
                ## Purpose
                Inside your existing customers there is often a second group of people, such as finance, legal or field staff, who touch the same work but are not served by the product. An extension for that role grows revenue in accounts you already have, with a buyer who may already trust you, but only if the new role's daily work is understood rather than assumed.

                ## Milestones
                1. The adjacent role identified in at least five existing accounts.
                2. Five people in that role interviewed about their daily work and current tools.
                3. The value proposition for that role written separately from the core user's.
                4. An expansion target set, such as the share of accounts adding the role within a year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five interviews with the adjacent role produce a two-sentence value proposition and an expansion target agreed with account management."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask account managers which other roles touch the work in their accounts"
                - "Interview five people in the adjacent role about their day"
                - "Write the value proposition for that role in two sentences"
                - "Set an expansion target for accounts adding the new role"
            - name: Three-year product line architecture plan
              description: |-
                ## Purpose
                Experienced product leaders plan the line, not just the next extension: which editions will exist in three years, which add-ons will graduate into plans or retire, and which adjacent products the platform must be ready to carry. A line architecture plan refreshed each year turns a series of opportunistic launches into a deliberate structure.

                ## Milestones
                1. Today's line and a target line in three years drawn side by side.
                2. The moves between them sequenced by year, with dependencies.
                3. Platform requirements implied by the target line handed to engineering.
                4. The plan reviewed by leadership and folded into the annual line review.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A three-year line architecture plan shows current and target lines, year-by-year moves and platform requirements, reviewed by leadership."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draw today's line and the line you want in three years side by side"
                - "Sequence the moves between them by year"
                - "Hand the implied platform requirements to the engineering lead"
                - "Add the plan to the agenda of the annual line review"
            - name: Entitlements model for flexible editions and add-ons
              description: |-
                ## Purpose
                If every new edition needs code changes in a dozen places, the line will stop growing because extensions cost too much. Working with engineering on an entitlements model, where plans are bundles of named capabilities and limits held in configuration, lets the team launch the next tier or add-on in days and run packaging tests safely.

                ## Milestones
                1. Current plan checks in the codebase counted and catalogued with engineering.
                2. A target model agreed in which plans are bundles of named capabilities and limits.
                3. A migration plan that moves existing plans to the model with no visible change for customers.
                4. The next add-on launched on the new model, with its effort recorded.

                ## Notes
                Migrate one plan family at a time and compare access before and after for a sample of accounts. Entitlement bugs show up as customers losing features they paid for.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Existing plans run on a configuration-based entitlements model with no customer-visible change, and the next add-on launched on it with effort recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask engineering to count the places plan checks live in code"
                - "Agree a target model of named capabilities and limits"
                - "Plan the migration of existing plans with no customer-visible change"
                - "Launch the next add-on on the new model and record the effort"
            - name: Edition mix and migration analysis across cohorts
              description: |-
                ## Purpose
                Once a line has several editions, the mix tells a story averages hide: which signup cohorts land on which edition, how they move over two years and where revenue per account levels off. A cohort analysis of edition mix and migration, repeated each year, shows whether extensions are pulling the line up, down or sideways.

                ## Milestones
                1. Quarterly signup cohorts tracked by edition held at months 1, 6, 12 and 24.
                2. Migration flows between editions charted for each cohort.
                3. Revenue per account compared by cohort and edition.
                4. Three findings written up, each with a recommended change to the line.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly cohort analysis charts edition mix and migration at months 1, 6, 12 and 24 and ends in three written findings with recommendations."
                cadence: cyclic
              tasks:
                - "Ask the data team for edition history by signup cohort"
                - "Chart migration flows between editions for each cohort"
                - "Compare revenue per account by cohort and edition"
                - "Rerun the cohort mix analysis and write three findings @recurring(yearly)"
---

# Product Line Extensions

Product line extensions are the new editions, tiers, add-ons and adjacent products that carry an existing product into a new segment or use case, written for founders, product managers and the teams who build and sell them. The projects run from foundations (a line map, the extension thesis, segment candidates, cannibalisation and success measures) through the routines that keep a line healthy, the skills of fence design, willingness-to-pay research and unit economics, concrete extension decisions, dated reviews and launches, situations such as a founder's second product or an acquisition, and finally line architecture and entitlements work.

What repeats is weekly extension planning on a small team, monthly idea scoring, attach rate, plan migration, field feedback, pilot calls, fence register checks and incumbent scans, quarterly profit and loss and coherence reviews, and a yearly line strategy review and cohort analysis. The Risk register, Metrics log, Meeting notes, Reading queue, Product spec and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
