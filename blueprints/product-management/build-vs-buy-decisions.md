---
id: product-management.build-vs-buy-decisions
name: Build vs Buy Decisions
description: "Build, buy or partner calls made on evidence: a decision register, total cost of ownership models, vendor shortlists and proofs of concept, renewal and exit plans, and reviews that check whether past choices still hold."
category: business
version: 1.0.0
tags: [product-management, build-vs-buy-decisions, manager, founder, team, sourcing, vendor-selection, total-cost-of-ownership]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - risk-register
    - metrics-log
    - compliance-control
    - meeting-notes
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Build vs Buy Decisions
          description: "Deciding whether to build a capability in-house, buy a tool or partner, weighing cost, time, differentiation and long-term maintenance."
          projects:
            - name: Build vs buy decision register
              description: |-
                ## Purpose
                Most teams cannot say when they chose to build their own billing, buy their search engine or partner for payments, or who agreed it and why. A single register listing each sourcing decision with the options considered, the reasoning, the owner and a review date stops the same argument being reopened every year and gives every later project in this area somewhere to record its outcome.

                ## Milestones
                1. A register with columns for capability, options considered, choice made, decision date, owner, main reasons and review date.
                2. At least five past decisions from the current product stack entered from memory, old documents and contracts.
                3. A review date set against every entry, no further out than two years.
                4. The register shared where product, engineering and finance leads can all read it.

                ## Notes
                Record the options you rejected as carefully as the one you chose. The rejected options are what a future team needs when circumstances change.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared register holds at least five sourcing decisions, each with options considered, owner, reasons and a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the register with columns for options, choice, owner, reasons and review date"
                - "List the bought tools and in-house components the product depends on today"
                - "Ask the longest-serving engineer why the three biggest components were built in-house"
                - "Check the register for decisions that have reached their review date @recurring(monthly:8)"
            - name: Core versus context capability map
              description: |-
                ## Purpose
                Every product depends on dozens of capabilities, from login and email delivery to the recommendation logic customers actually choose you for, and only a few of them deserve your own engineers. Mapping each capability as differentiating, important but standard, or commodity gives a default answer for most sourcing questions before anyone opens a vendor website.

                ## Milestones
                1. A list of the 15 to 40 capabilities the product relies on, from authentication to analytics.
                2. Each capability marked differentiating, standard or commodity, with one sentence on why.
                3. The differentiating list checked against what customers say they pay for in sales calls and reviews.
                4. The map agreed with the engineering lead and the head of product or founder.
                5. The default sourcing stance for each category written beside the map.

                ## Notes
                Be strict with the differentiating column. If more than a quarter of capabilities land there, the map is describing pride rather than advantage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A capability map marks every listed capability as differentiating, standard or commodity, with a default sourcing stance agreed by product and engineering leads."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every capability the product relies on in one sheet"
                - "Mark each one differentiating, standard or commodity with a one-line reason"
                - "Check the differentiating list against the reasons customers give for choosing you"
                - "Walk the engineering lead through the map and record where you disagree"
                - "Refresh the map after the annual strategy review @recurring(yearly)"
            - name: Decision rights for sourcing calls
              description: |-
                ## Purpose
                Without agreed decision rights, a product manager can sign a tool on a credit card while a six-month platform build sails through on one engineer's enthusiasm. Setting thresholds for who recommends, who decides and who must be consulted, by annual cost and engineering effort, means small calls move fast and large ones get proper scrutiny.

                ## Milestones
                1. Spend and effort thresholds agreed, for example under one month of engineering or a small annual licence, up to a quarter, and above.
                2. For each threshold, the people who recommend, decide, are consulted and are informed written down.
                3. Security, legal and finance consultation points named for each threshold.
                4. The decision rights page approved by the head of product and engineering and published.

                ## Notes
                Keep the bottom tier genuinely light. If a trial of a small tool needs three sign-offs, people will route around the process and the register will miss them.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published decision rights page sets at least three thresholds by cost and effort, each with named recommenders, deciders and required consultations."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three thresholds by annual cost and engineering weeks"
                - "Name who recommends, decides, is consulted and is informed at each threshold"
                - "Ask finance and security where they need to be consulted"
                - "Publish the agreed page next to the decision register"
            - name: Shared scoring criteria for build, buy or partner
              description: |-
                ## Purpose
                Comparing a build estimate with a vendor quote is meaningless when each side picks the criteria that flatter it. A fixed set of weighted criteria, covering time to value, total cost, differentiation, control over the roadmap, operational risk, data ownership and long-term maintenance, makes every option answer the same questions in the same order.

                ## Milestones
                1. Six to nine criteria written with a plain definition and what a low, middle and high score looks like.
                2. Default weights agreed, with a rule for when a decision may change them.
                3. A blank scoring sheet that holds build, buy and partner options side by side.
                4. The criteria tested on one past decision to check they would have produced a sensible answer.

                ## Notes
                Agree the weights before anyone sees vendor names or estimates. Weights set afterwards tend to rearrange themselves around the preferred answer.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scoring sheet with six to nine defined, weighted criteria exists and has been tested against at least one past decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write six to nine criteria with a one-line definition each"
                - "Describe what a low, middle and high score means for every criterion"
                - "Agree default weights with the engineering lead before the next decision"
                - "Score one past decision with the sheet and note where it surprised you"
            - name: Three-year total cost of ownership model
              description: |-
                ## Purpose
                Licence fees are the visible tip of a bought tool, and engineering salaries are the visible tip of a built one. A three-year model that adds integration, migration, training, support, hosting, maintenance, upgrades and the cost of leaving puts both options on the same footing and usually changes the answer at least once.

                ## Milestones
                1. A spreadsheet with year one, two and three columns for build, buy and partner options.
                2. Rows for licences, implementation, integration, hosting, maintenance engineering, support, training and exit costs.
                3. Assumptions such as user growth, price rises and engineer rate listed on their own tab.
                4. A low, expected and high case for each option.
                5. The model reviewed by someone in finance for missing cost lines.

                ## Notes
                Maintenance of a built component commonly runs to a sizeable share of its original build effort every year. Use your own history from the maintenance tracking project once you have it, rather than a rule of thumb.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable three-year cost model with low, expected and high cases for build, buy and partner options has been reviewed by finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Lay out year one to three columns for build, buy and partner options"
                - "Add rows for integration, maintenance, support, training and exit costs"
                - "Move every assumption onto a separate tab with its source"
                - "Ask finance to check the model for cost lines you have missed"
            - name: Fully loaded engineering cost rate
              description: |-
                ## Purpose
                Engineering time is the currency of every build estimate, yet many product managers price it at salary alone, or not at all. Agreeing a fully loaded cost per engineer week with finance, including benefits, equipment, management overhead and the share of time lost to meetings and support, stops builds looking free.

                ## Milestones
                1. A loaded weekly cost per engineer agreed with finance, with the components listed.
                2. A productive weeks per year figure agreed with the engineering lead.
                3. The rate entered into the total cost of ownership model.
                4. The date and owner of the rate recorded so it can be refreshed.

                ## Notes
                Finance may prefer not to share individual salaries. A blended rate by level, or one blended team rate, is enough for sourcing decisions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A loaded engineer week cost and productive weeks per year figure, agreed with finance and engineering, is recorded in the cost model."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask finance for a blended loaded cost per engineer, including overheads"
                - "Agree with the engineering lead how many weeks a year go to planned work"
                - "Enter the loaded weekly rate in the cost model"
                - "Refresh the rate with finance after annual pay changes @recurring(yearly)"
            - name: Retrospective on past sourcing decisions
              description: |-
                ## Purpose
                Past decisions are the cheapest evidence you have: the analytics tool that was replaced twice, the in-house scheduler that quietly needs half an engineer forever. Reviewing the last three years of build and buy choices against what actually happened shows where your team habitually underestimates and which vendors kept their promises.

                ## Milestones
                1. Six to ten past decisions listed with the original estimate or quote and the actual cost and time.
                2. Each decision rated as would choose again, would choose differently, or unclear.
                3. Three recurring patterns written down, such as integration always taking twice as long.
                4. The patterns shared with the product and engineering leads and added to the scoring sheet notes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least six past sourcing decisions are compared with their actual outcomes and three named patterns are shared with product and engineering leads."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick six to ten build or buy decisions from the last three years"
                - "Find the original estimate or quote for each in old documents or tickets"
                - "Ask the people involved what it really cost in time and money"
                - "Write the three patterns you see and share them with the leads"
            - name: Requirements brief before any vendor contact
              description: |-
                ## Purpose
                Teams who start with vendor demos end up choosing the best demo rather than the best fit. A one-page brief stating the problem, the users, the must-have and nice-to-have requirements, volumes, integration points and deal breakers, written before the first sales call, keeps every later comparison anchored to your needs.

                ## Milestones
                1. A one-page brief naming the problem, the users affected and the outcome expected.
                2. Must-have requirements separated from nice-to-haves, with no more than ten must-haves.
                3. Expected volumes, integration points and data sensitivity stated.
                4. Deal breakers listed, such as data residency or a missing single sign-on option.
                5. The brief approved by the decision owner before vendors are contacted.

                ## Notes
                If a requirement cannot be tested in a demo or proof of concept, rewrite it until it can.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved one-page requirements brief with at most ten testable must-haves and named deal breakers exists before any vendor is contacted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the problem and the outcome you need in three sentences"
                - "Split requirements into must-have and nice-to-have, capping must-haves at ten"
                - "Note expected volumes, integrations and the sensitivity of the data involved"
                - "Get the decision owner to approve the brief before any sales call"
            - name: Opportunity cost of using roadmap capacity
              description: |-
                ## Purpose
                Building a capability does not only cost engineer weeks, it also costs whatever those engineers would otherwise have shipped. Naming the specific roadmap items a build would delay, and what those delays mean for revenue, retention or a committed customer, turns an abstract estimate into a trade-off leaders can weigh.

                ## Milestones
                1. The roadmap items displaced by the build option listed with their expected delay.
                2. The expected impact of each delay described in revenue, retention or commitment terms.
                3. The opportunity cost added as a line in the decision scoring sheet.
                4. The trade-off reviewed with the roadmap owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The roadmap items a build would delay are listed with their expected impact and recorded in the scoring sheet for the decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask engineering which team would carry the build and for how long"
                - "List the roadmap items that team would push back"
                - "Estimate what each delay costs in revenue, retention or broken commitments"
                - "Add the opportunity cost line to the scoring sheet"
            - name: Monthly vendor scorecard review
              description: |-
                ## Purpose
                A bought tool that worked at signing can drift: support replies slow down, uptime slips, a promised feature never arrives. A short monthly scorecard for each important vendor, covering uptime, support response, open issues, adoption and spend against budget, catches decline while there is still time to escalate or plan a change.

                ## Milestones
                1. A scorecard for each vendor above an agreed spend or criticality line.
                2. Uptime, support response, open issues, adoption and spend recorded each month.
                3. A red, amber or green rating with a one-line reason for each vendor.
                4. Any vendor rated red for two months running escalated to the account manager.

                ## Notes
                Start from the **Vendor** template. Keep one page per vendor and add a dated line each month rather than rewriting it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every vendor above the agreed threshold has a scorecard updated monthly, and any vendor red for two months has a recorded escalation."
                cadence: rolling
              tasks:
                - "Set the spend or criticality line above which a vendor gets a scorecard"
                - "Create one vendor page per tool above the line"
                - "Update uptime, support, issues, adoption and spend for each vendor @recurring(monthly:12)"
                - "Raise a vendor rated red two months running with its account manager"
            - name: Renewal calendar and notice periods
              description: |-
                ## Purpose
                Auto-renewal clauses with 60 or 90 day notice periods turn a planned review into a locked-in year because nobody noticed the date. A renewal calendar listing every contract's renewal date, notice deadline, owner and current price gives you the window to renegotiate, downgrade or leave on your terms.

                ## Milestones
                1. Every software and partner contract listed with renewal date, notice deadline and annual value.
                2. An owner named for each renewal.
                3. Reminders set at least 30 days before each notice deadline.
                4. No renewal in the past year passed without a recorded decision to renew, change or exit.

                ## Notes
                Read the contract, not the vendor's portal. Notice periods and price escalators often sit in the order form or terms, not the billing page.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A renewal calendar covers every contract with notice deadlines and owners, and each renewal in the last year has a recorded decision."
                cadence: rolling
              tasks:
                - "Ask finance for every recurring software and partner charge"
                - "Find the renewal date and notice period in each contract or order form"
                - "Set a reminder 30 days before each notice deadline"
                - "Check the next 90 days of renewals and confirm each owner @recurring(monthly:3)"
            - name: Quarterly sourcing portfolio review
              description: |-
                ## Purpose
                Decisions age: a vendor you bought for speed may now be your bottleneck, and a component you built for differentiation may have become a commodity anyone can buy. A quarterly review of the register, the vendor scorecards and the maintenance figures asks whether each choice still holds and flags the two or three that need a fresh look.

                ## Milestones
                1. The register, scorecards and maintenance hours reviewed together each quarter.
                2. Each major capability marked keep, watch or revisit.
                3. No more than three capabilities flagged revisit, each with an owner and a date.
                4. A one-paragraph summary sent to the product and engineering leads after each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews a year mark every major capability keep, watch or revisit, with owners and dates on each revisit item."
                cadence: cyclic
              tasks:
                - "Book a 60-minute review with the product and engineering leads"
                - "Mark each major capability keep, watch or revisit"
                - "Run the review and send the summary paragraph @recurring(quarterly)"
                - "Give each revisit item an owner and a date to report back"
            - name: Maintenance hours for in-house components
              description: |-
                ## Purpose
                In-house components rarely show up as a cost line, so the half engineer who keeps the homegrown feature flag service alive stays invisible. Logging maintenance hours each month for every component you built, including upgrades, security patches and on-call incidents, gives the cost model real numbers and shows when a build has outlived its advantage.

                ## Milestones
                1. A list of in-house components with a named maintaining team.
                2. Monthly maintenance hours recorded for each component.
                3. Hours split into upgrades, bug fixes, security work and incidents.
                4. Twelve months of figures available to feed the cost model and portfolio review.

                ## Notes
                Start from the **Metrics log** template. Ask teams for an estimate from their ticket labels rather than timesheets; rough monthly figures are far better than none.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly maintenance hours, split by type, are logged for every in-house component, with twelve months of history available."
                cadence: rolling
              tasks:
                - "List every in-house component with the team that maintains it"
                - "Agree a ticket label teams can use for maintenance work"
                - "Record last month's maintenance hours for each component @recurring(monthly:20)"
                - "Flag any component whose hours rose three months in a row"
            - name: Vendor release and roadmap watch
              description: |-
                ## Purpose
                Vendors ship features you were about to build, deprecate endpoints you depend on and change pricing pages quietly. Reading each critical vendor's release notes monthly and asking for a roadmap briefing twice a year stops your team duplicating work and gives early warning of breaking changes.

                ## Milestones
                1. A list of the critical vendors whose changes affect the product, with their release note sources.
                2. A monthly note of relevant vendor releases, deprecations and pricing changes.
                3. Roadmap briefings booked with the top three vendors at least twice a year.
                4. Backlog items closed or changed where a vendor release made them unnecessary.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly vendor change note exists for each critical vendor, and the top three vendors give roadmap briefings at least twice a year."
                cadence: rolling
              tasks:
                - "Subscribe to release notes and status pages for each critical vendor"
                - "Read vendor release notes and log changes that affect you @recurring(monthly:15)"
                - "Ask the top three vendors for a roadmap briefing under NDA"
                - "Close backlog items a vendor release has made unnecessary"
            - name: Weekly triage of new sourcing requests
              description: |-
                ## Purpose
                Requests to build a quick internal version or trial a new tool arrive in chat threads, sprint planning and sales escalations. One intake form and a short weekly triage that sorts each request into fast approval, standard evaluation or decline means nothing is bought or built on impulse and nothing waits a month for an answer.

                ## Milestones
                1. One intake form asking for the problem, the users, the urgency and any tool or build already in mind.
                2. A weekly 20-minute triage slot with a named product and engineering reviewer.
                3. Every request sorted into fast approval, standard evaluation or decline within a week.
                4. The requester told the outcome and the reason in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every sourcing request arrives through one form and receives a triage outcome and written reason within seven days."
                cadence: rolling
              tasks:
                - "Create a short intake form for build or buy requests"
                - "Point the team's chat channel and planning notes at the form"
                - "Triage new requests into fast approval, evaluation or decline @recurring(weekly:tue)"
                - "Reply to each requester with the outcome and the reason"
            - name: Vendor viability and health check
              description: |-
                ## Purpose
                A smaller vendor that runs out of money, gets acquired or cuts its support team can strand a capability your customers rely on. A quarterly look at each critical vendor's funding news, ownership changes, outage history, support quality and staff signals gives you months of warning instead of an email announcing end of service.

                ## Milestones
                1. Critical vendors listed with the capability each supports and the impact if they disappeared.
                2. A quarterly note on funding, ownership, outages and support trends for each.
                3. A contingency option named for every vendor rated at risk.
                4. Concerns raised with the account manager and recorded.

                ## Notes
                Public signals are imperfect. Treat them as a prompt to ask the vendor directly and to keep the exit plan current, not as proof.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each critical vendor has a quarterly health note, and every vendor rated at risk has a named contingency option."
                cadence: cyclic
              tasks:
                - "List the vendors whose failure would stop a customer-facing capability"
                - "Check funding, ownership, outage and support news for each @recurring(quarterly)"
                - "Name a contingency option for each vendor rated at risk"
                - "Ask at-risk vendors directly about their plans and record the answers"
            - name: Seat and usage true-up against licences
              description: |-
                ## Purpose
                Seat-based and tiered licences drift away from reality as people leave, teams change and usage grows or falls. Comparing paid seats and tiers with actual active users and volumes each month finds the unused licences to cut and warns you before an overage bill or a forced tier upgrade.

                ## Milestones
                1. Paid seats, tiers and volume limits listed for each licensed tool.
                2. Actual active users and usage pulled from each tool's admin console.
                3. Unused seats removed or reassigned.
                4. Tools within 20 percent of a tier or volume limit flagged to their owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Paid seats and limits are compared with actual usage every month, unused seats are removed and tools near a limit are flagged."
                cadence: rolling
              tasks:
                - "List paid seats, tiers and limits for each licensed tool"
                - "Compare paid seats with active users and remove the unused ones @recurring(monthly:24)"
                - "Flag any tool within 20 percent of its tier or volume limit"
                - "Tell each tool owner what changed and why"
            - name: Sourcing assumptions tracker
              description: |-
                ## Purpose
                Each build or buy decision rests on assumptions: 50,000 users by next year, a price rise capped at 5 percent, two engineers available for maintenance. Writing those assumptions down at the time and checking them against actuals each quarter tells you when a decision has quietly become wrong, long before the next renewal.

                ## Milestones
                1. The three to five key assumptions behind each major decision recorded in the register.
                2. A threshold for each assumption beyond which the decision should be revisited.
                3. Actuals compared with assumptions every quarter.
                4. Any breached threshold raised at the next portfolio review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every major sourcing decision has its key assumptions and revisit thresholds recorded and checked against actuals each quarter."
                cadence: cyclic
              tasks:
                - "Add three to five key assumptions to each major decision in the register"
                - "Set a revisit threshold for each assumption"
                - "Compare assumptions with actual volumes, prices and staffing @recurring(quarterly)"
                - "Raise breached thresholds at the next portfolio review"
            - name: Reading software contracts as a product manager
              description: |-
                ## Purpose
                Product managers often own the vendor relationship but leave the contract to procurement, then discover the data export clause or the price escalator after it bites. Learning to read the commercial terms that shape product decisions, such as service levels, liability caps, data ownership, termination rights, price increases and change of control, lets you ask the right questions before legal sees the draft.

                ## Milestones
                1. A one-page glossary of the ten contract terms that most affect product decisions.
                2. Two existing vendor contracts read and annotated against the glossary.
                3. A list of standard questions to raise with legal and procurement for new contracts.
                4. One session with your legal or procurement colleague to check your reading.

                ## Notes
                This is about knowing what to ask, not interpreting the law. Contract and legal conclusions belong with your legal team or adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of ten product-relevant contract terms and two annotated contracts have been reviewed with a legal or procurement colleague."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask legal or procurement for two current vendor contracts to study"
                - "Write a glossary of ten terms such as SLA credits, liability caps and termination rights"
                - "Annotate both contracts against the glossary"
                - "Book 30 minutes with legal to check your reading and questions"
            - name: Estimating build effort without optimism
              description: |-
                ## Purpose
                Build estimates are almost always the happy path: the core feature, without admin screens, permissions, audit trails, migrations, monitoring or the second year of upkeep. Practising estimation with ranges, reference classes from your own past projects and an explicit list of the unglamorous work makes build options comparable with vendor quotes.

                ## Milestones
                1. A checklist of commonly forgotten build work, from admin tools to on-call runbooks.
                2. Three past projects compared with their original estimates to find your team's typical overrun.
                3. One current build option re-estimated as a low, likely and high range using the checklist.
                4. The overrun factor agreed with the engineering lead for use in future decisions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An agreed overrun factor from three past projects and a forgotten work checklist have been used to re-estimate one current build option as a range."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a checklist of build work estimates usually leave out"
                - "Compare three past projects with their original estimates"
                - "Re-estimate one current build option as a low, likely and high range"
                - "Agree an overrun factor with the engineering lead"
            - name: Open source licence basics for product use
              description: |-
                ## Purpose
                Open source is often the third option beside building and buying, and the licence decides what you may do with it. Learning the practical difference between permissive and copyleft licences, what triggers obligations in a hosted product and when to involve legal, keeps a free library from becoming an expensive surprise in due diligence.

                ## Milestones
                1. A short summary of permissive, weak copyleft and strong copyleft licence families and what each asks of you.
                2. The licences of the product's main open source dependencies listed.
                3. An agreed rule with legal for which licence families need review before use.
                4. A dependency licence check added to the engineering team's routine.

                ## Notes
                Licence obligations depend on how software is used and distributed. Use this to spot questions and take them to your legal team, not to reach legal conclusions yourself.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A licence family summary and a rule agreed with legal for which licences need review exist, with dependency licences checked monthly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask engineering for a list of the main open source dependencies and their licences"
                - "Write a half-page summary of the main licence families"
                - "Agree with legal which licence families need review before use"
                - "Review licences of dependencies added this month @recurring(monthly:27)"
            - name: Running scripted vendor demos
              description: |-
                ## Purpose
                Polished vendor demos show the product at its best on the vendor's data, which tells you little about your use case. Sending each shortlisted vendor the same script, built from your requirements brief and using your own sample data, and scoring every demo on the same sheet, turns sales presentations into evidence.

                ## Milestones
                1. A demo script of five to eight scenarios drawn from the requirements brief.
                2. Sample data prepared that reflects your real volumes and edge cases, with nothing sensitive.
                3. Every shortlisted vendor demo run against the same script.
                4. Scores and notes from each attendee collected on one sheet within a day of each demo.

                ## Notes
                Start from the **Meeting notes** template for each demo. Have at least one engineer and one end user in the room, not only the buyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every shortlisted vendor has run the same five to eight scenario script on your sample data, with attendee scores recorded on one sheet."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Turn the requirements brief into five to eight demo scenarios"
                - "Prepare anonymised sample data with your real edge cases"
                - "Send the script to each vendor a week before their demo"
                - "Collect attendee scores on one sheet within a day of each demo"
            - name: Technical due diligence on a vendor API
              description: |-
                ## Purpose
                An integration is only as good as the API underneath it, and sales teams rarely volunteer rate limits or versioning history. Having an engineer check documentation quality, authentication, rate limits, webhooks, sandbox access, uptime history and deprecation policy before signing reveals the hidden integration cost that the cost model needs.

                ## Milestones
                1. A checklist of API questions agreed with an engineer.
                2. Documentation, sandbox and SDKs tested by an engineer for half a day.
                3. Rate limits, webhook reliability and versioning policy confirmed in writing by the vendor.
                4. Integration effort estimate updated in the cost model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An engineer has tested the vendor sandbox against an agreed checklist and the integration estimate in the cost model reflects the findings."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree an API checklist with an engineer covering limits, webhooks and versioning"
                - "Request sandbox access from each shortlisted vendor"
                - "Ask vendors to confirm rate limits and deprecation policy in writing"
                - "Update the integration estimate with the engineer's findings"
            - name: Wardley mapping for sourcing choices
              description: |-
                ## Purpose
                Wardley maps place each component of a product on a line from novel and custom-built to commodity utility, which makes it obvious when a team is lovingly building something the market now sells by the hour. Learning to draw a simple map for one user need gives you a visual argument for sourcing decisions that leaders grasp quickly.

                ## Milestones
                1. The basic ideas of value chains and component evolution understood from a free guide or book.
                2. One map drawn for a single user need, with every component placed by evolution stage.
                3. Components that sit in commodity but are built in-house circled.
                4. The map walked through with a colleague and their challenges noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One Wardley map for a real user need has been drawn, with in-house commodity components identified and discussed with a colleague."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introductory guide to Wardley mapping"
                - "Pick one user need and list the components that serve it"
                - "Place each component on the evolution axis and circle in-house commodities"
                - "Walk a colleague through the map and note their challenges"
            - name: Negotiating with software vendors
              description: |-
                ## Purpose
                Software list prices are opening positions, and the terms that matter most, such as price increase caps, exit help and service credits, are often easier to win than a discount. Learning the levers vendors respond to, including timing near their quarter end, multi-year commitments, case studies and credible alternatives, saves real money at every purchase and renewal.

                ## Milestones
                1. A list of negotiable terms beyond price, with which ones matter most to you.
                2. Your credible alternatives written down, including building, a competitor or doing nothing.
                3. A negotiation plan for one upcoming purchase or renewal with targets and walk-away points.
                4. The outcome compared with the opening offer and recorded in the register.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written negotiation plan with targets and walk-away points was used on one purchase or renewal and its outcome recorded against the opening offer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List negotiable terms beyond price such as caps on increases and exit help"
                - "Write down your credible alternatives for the next purchase or renewal"
                - "Draft targets and walk-away points for that negotiation"
                - "Record the final terms against the opening offer in the register"
            - name: Vendor shortlist from longlist to three
              description: |-
                ## Purpose
                Long vendor lists waste weeks of demos, and a shortlist of one is a decision already made. Screening a longlist of eight to twelve options against the deal breakers in the requirements brief, then against public reviews, pricing and references, leaves three serious candidates worth your team's time.

                ## Milestones
                1. A longlist of eight to twelve vendors, open source projects and partners.
                2. Each option checked against the deal breakers, with eliminated ones noted and why.
                3. Pricing and reference customers gathered for the survivors.
                4. A shortlist of three agreed with the decision owner, with the build option kept as a fourth comparison.

                ## Notes
                Start from the **Purchase decision** template. Keep the build option on the sheet even when you expect to buy, so the comparison stays honest.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of three external options plus the build option, each screened against the brief's deal breakers, is agreed with the decision owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a longlist of vendors and open source options from the brief"
                - "Eliminate options that fail a deal breaker and record why"
                - "Gather pricing and two reference customers for each survivor"
                - "Agree the final three with the decision owner"
            - name: Time-boxed proof of concept
              description: |-
                ## Purpose
                Slides and demos cannot show how a tool behaves with your data, your users and your edge cases. A proof of concept of two to four weeks, with written exit criteria agreed before it starts, tests the riskiest requirements on the leading option and ends with a clear pass, fail or extend.

                ## Milestones
                1. Three to five exit criteria written from the riskiest requirements, agreed before work starts.
                2. A start date, end date and named participants from product, engineering and the user group.
                3. The proof of concept run on realistic data within its time box.
                4. A short results note scoring each exit criterion as pass or fail.

                ## Notes
                Ask the vendor for a free or credited trial period that matches the time box. Do not let a proof of concept drift into an unpaid pilot that becomes production by accident.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A proof of concept ran within its time box and a results note scores three to five pre-agreed exit criteria as pass or fail."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write three to five exit criteria from the riskiest requirements"
                - "Agree start and end dates and participants with the vendor"
                - "Run the proof of concept on realistic, anonymised data"
                - "Score each exit criterion and write the results note"
            - name: Scoping the build option with engineering
              description: |-
                ## Purpose
                The build option is usually described in a sentence while the vendor option arrives with a forty-page proposal. Giving the build option a proper scope, with a short technical spike, an architecture sketch, a phased plan and a range estimate including year-two maintenance, makes it a fair contender rather than a straw man or a fantasy.

                ## Milestones
                1. A one-to-three day spike completed on the hardest technical question.
                2. An architecture sketch and the list of components to build.
                3. A phased plan with a minimum usable version and a full version.
                4. A low, likely and high estimate, including ongoing maintenance, entered in the cost model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The build option has a spike result, architecture sketch, phased plan and range estimate with maintenance, all entered in the cost model."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the engineering lead to name the hardest technical question"
                - "Book a one-to-three day spike on that question"
                - "Agree an architecture sketch and phased plan with the engineers"
                - "Enter the range estimate and maintenance figure in the cost model"
            - name: Partner, white-label or revenue share option
              description: |-
                ## Purpose
                Between building and buying sits a third path: embedding a partner's product under your brand, reselling it, or sharing revenue with a specialist who owns the capability. Assessing a partner option properly, including brand control, customer ownership, support boundaries and what happens if the partnership ends, often finds a faster route for capabilities customers want but you should not own.

                ## Milestones
                1. Two or three potential partners identified for the capability.
                2. The commercial models on offer described, such as white-label fee, resale margin or revenue share.
                3. Customer ownership, support responsibilities and brand rules set out for each.
                4. Termination and transition terms compared and added to the scoring sheet.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three partner options are compared on commercial model, customer ownership, support split and termination terms in the scoring sheet."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List two or three companies that could partner on the capability"
                - "Ask each about white-label, resale and revenue share models"
                - "Compare who owns the customer and who handles support in each model"
                - "Add the partner options to the scoring sheet"
            - name: Buy the core, build the edge
              description: |-
                ## Purpose
                Wrapping a bought service in your own thin layer, so the product calls your interface rather than the vendor's, keeps the speed of buying while protecting your ability to switch later and to add the touches customers notice. Designing that boundary deliberately, and agreeing what lives on each side, avoids both vendor lock-in and an accidental rebuild of the vendor.

                ## Milestones
                1. The vendor capabilities you will use as-is listed separately from the parts you will build on top.
                2. An internal interface agreed so product code does not call the vendor directly.
                3. A rule written for when new work goes into the wrapper and when it goes back to the vendor as a request.
                4. The switching cost with the wrapper estimated and recorded in the exit plan.

                ## Notes
                A thin wrapper is cheap insurance. A thick one that duplicates vendor features is a build with a licence fee attached.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed internal interface separates product code from the vendor, with a written rule for what belongs in the wrapper and an estimated switching cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List what you will use from the vendor as-is and what you will build on top"
                - "Agree an internal interface with engineering for the vendor capability"
                - "Write the rule for what goes into the wrapper"
                - "Estimate the switching cost with the wrapper in place"
            - name: Exit plan and lock-in assessment
              description: |-
                ## Purpose
                Leaving a vendor is a decision you make at signing, whether you realise it or not. An exit plan covering data export formats, migration effort, contract termination terms, the replacement option and how long a switch would take, tested once a year with a real export, turns lock-in from a fear into a known cost.

                ## Milestones
                1. The data, configuration and integrations held by the vendor listed.
                2. Export formats and contract exit terms confirmed.
                3. A migration effort estimate and a named fallback option.
                4. A test export completed and checked for completeness.

                ## Notes
                Start from the **Risk register** template to record lock-in risks with their likelihood, impact and owner.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each critical vendor has a written exit plan with export formats, migration estimate and fallback, and a test export checked in the last year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the data, configuration and integrations each critical vendor holds"
                - "Find the export formats and termination terms in each contract"
                - "Estimate migration effort and name a fallback option"
                - "Run a test export and check it is complete @recurring(yearly)"
            - name: Security and privacy review of a shortlisted vendor
              description: |-
                ## Purpose
                Any vendor that touches customer data becomes part of your security posture and a question in your next enterprise deal. Running the shortlisted vendor through your security questionnaire, checking certifications such as SOC 2 or ISO 27001 reports, data location, subprocessors and breach notification terms before signing avoids a painful rip-out later.

                ## Milestones
                1. Data the vendor will access classified by sensitivity.
                2. The security questionnaire completed by the vendor and reviewed by your security lead.
                3. Certification reports, subprocessor list and data location confirmed.
                4. A data processing agreement or equivalent terms agreed where personal data is involved.
                5. Residual risks recorded with an owner.

                ## Notes
                Start from the **Compliance control** template. Your security and legal teams own the judgement; the product manager owns making sure the review happens before signing.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The shortlisted vendor has a completed questionnaire, confirmed certifications and data location, agreed data terms and recorded residual risks before signing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Classify the data the vendor will access by sensitivity"
                - "Send the security questionnaire and request certification reports"
                - "Ask security and legal to review the answers and data terms"
                - "Re-review the vendor's certifications and subprocessors @recurring(yearly)"
            - name: Sourcing recommendation memo for leadership
              description: |-
                ## Purpose
                Leadership needs a decision, not the full evaluation spreadsheet. A two-page memo stating the problem, the options, the cost of ownership range, the scores, the risks, the recommendation and any dissenting view gives a clear basis for the call and becomes the record in the register.

                ## Milestones
                1. A two-page memo with problem, options, cost ranges, scores, risks and recommendation.
                2. Dissenting views from engineering, finance or security included in their own words.
                3. The memo reviewed by the decision owner before the meeting.
                4. The decision, date and conditions recorded in the register.

                ## Notes
                Put the recommendation in the first paragraph. Readers who stop after it should still know what you are asking for.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-page recommendation memo with options, cost ranges, risks and dissent led to a decision recorded in the register with its date and conditions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft the memo structure from the scoring sheet and cost model"
                - "Collect dissenting views from engineering, finance and security"
                - "Send the memo to the decision owner two days before the meeting"
                - "Record the decision and its conditions in the register"
            - name: Contract signature and procurement handover
              description: |-
                ## Purpose
                Signature is where good evaluations lose their detail: the negotiated price cap lives in an email, the service level never reaches support and the renewal date never reaches the calendar. Treating signing as a small event with a handover checklist makes sure every promise in the deal is written down and owned.

                ## Milestones
                1. Final terms checked against the negotiation plan and the requirements brief.
                2. Contract signed by the person with authority under the decision rights.
                3. Renewal date, notice period, service levels and price caps entered in the renewal calendar and vendor page.
                4. Support, security and finance told what they need to know about the new vendor.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The signed contract's renewal date, notice period, service levels and price caps are recorded, and support, security and finance have been briefed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check final terms against the negotiation plan and requirements brief"
                - "Confirm the signer has authority under the decision rights"
                - "Enter the renewal date, notice period and price caps in the calendar"
                - "Brief support, security and finance on the new vendor"
            - name: First 90 days with a new vendor
              description: |-
                ## Purpose
                The value of a purchase is decided in the first three months: if the integration stalls or users never switch, the tool becomes shelfware with a renewal date. A 90-day plan with named owners, an implementation checklist, adoption targets and a review at day 90 holds both the vendor and your team to what the business case promised.

                ## Milestones
                1. A kickoff held with the vendor's implementation contact and your owners.
                2. An implementation checklist with dates for integration, data migration and training.
                3. Adoption targets set for day 30, 60 and 90.
                4. A day-90 review comparing results with the business case, recorded in the register.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day-90 review compares adoption and integration results with the business case, and the outcome is recorded in the register."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book the kickoff with the vendor's implementation contact"
                - "Write the implementation checklist with dates and owners"
                - "Set adoption targets for day 30, 60 and 90"
                - "Hold the day-90 review and record the result"
            - name: Migrating from an in-house component to a vendor
              description: |-
                ## Purpose
                Moving a homegrown capability, such as an email sender or a reporting engine, onto a vendor is a product change customers can feel if it goes wrong. Planning the cutover with a parallel run, a data migration rehearsal, a rollback plan and customer communication keeps the switch invisible to everyone except the engineers who get their evenings back.

                ## Milestones
                1. A migration plan covering data, integrations, feature gaps and rollback.
                2. A rehearsal migration completed on a copy of production data.
                3. A parallel run or staged switch with success measures agreed.
                4. The cutover completed, the old component switched off and its maintenance hours removed from the log.

                ## Notes
                List the small behaviours of the old component that users rely on, such as a particular email format or a report column order, before cutting over. These are what generate support tickets.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The in-house component is switched off after a rehearsed migration and parallel run, with no unplanned customer-facing incident during cutover."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the behaviours of the old component that users rely on"
                - "Write the migration and rollback plan with engineering"
                - "Rehearse the migration on a copy of production data"
                - "Switch off the old component once the parallel run passes"
            - name: Bringing a bought capability in-house
              description: |-
                ## Purpose
                At a certain scale, a usage-priced vendor can cost more than a team, or become the ceiling on a capability that is now core to your advantage. Planning an insourcing move with a clear trigger, a staffed team, a phased replacement and the vendor contract kept alive until the build is proven avoids trading a big bill for a bigger outage.

                ## Milestones
                1. The trigger for insourcing documented, such as annual vendor cost or a blocking limitation.
                2. A team and timeline agreed, including year-two maintenance.
                3. A phased replacement plan with the vendor kept as fallback until each phase is proven.
                4. The vendor contract reduced or ended only after the build meets agreed measures.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An insourcing plan with a documented trigger, staffed team, phased replacement and vendor fallback is approved, and the vendor is cut only after measures are met."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down the cost or limitation that triggers insourcing"
                - "Agree the team and timeline, including year-two maintenance"
                - "Plan the phases with the vendor kept as fallback"
                - "Check the vendor contract for downgrade and exit terms"
            - name: Major renewal negotiation
              description: |-
                ## Purpose
                Ninety days before a large renewal is the point of greatest bargaining power: you can still credibly switch, downgrade or build. Preparing with usage data, the vendor scorecard, an updated alternative and a clear ask turns a renewal from a price rise you absorb into a negotiation you plan.

                ## Milestones
                1. Usage, adoption and scorecard history gathered for the vendor.
                2. An updated alternative priced, whether a competitor, a downgrade or a build.
                3. Targets and walk-away points agreed with finance and the decision owner.
                4. Final renewal terms recorded in the register and renewal calendar.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The renewal closed before the notice deadline with terms compared against agreed targets and recorded in the register and calendar."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull 12 months of usage and scorecard history for the vendor"
                - "Price an updated alternative such as a competitor, downgrade or build"
                - "Agree targets and walk-away points with finance"
                - "Record the final terms in the register and calendar"
            - name: Responding to a vendor acquisition or end of life notice
              description: |-
                ## Purpose
                When a vendor is acquired, changes its pricing model or announces end of life, you usually have months, not years, to decide. A response plan that assesses the impact, reads the contract protections, reopens the shortlist and sets a decision date keeps the product steady while the market moves under it.

                ## Milestones
                1. The impact on customers, integrations and costs assessed within two weeks of the notice.
                2. Contract protections such as notice periods and price locks confirmed.
                3. Options reopened: stay, switch, build or partner, each with a rough cost.
                4. A decision date set and the outcome recorded in the register.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within two weeks of a vendor change notice, an impact assessment, contract check and options list exist, with a decision recorded by the set date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Assess the impact on customers, integrations and cost"
                - "Check the contract for notice periods and price locks"
                - "Reopen the options of staying, switching, building or partnering"
                - "Set a decision date and record the outcome"
            - name: Founder default of buying before product-market fit
              description: |-
                ## Purpose
                Founders before product-market fit have one scarce resource, engineering time on the thing customers might pay for, and every hour on login, billing or analytics plumbing is an hour not spent finding out. A written default to buy or use free tiers for everything outside the core, with a short list of conditions that justify an exception, protects that time without forbidding judgement.

                ## Milestones
                1. The one or two capabilities that are the product's reason to exist named.
                2. A buy-by-default rule written for everything else, with spending limits.
                3. Two or three conditions written that justify an exception, such as no vendor meeting a deal breaker.
                4. Current tools listed with their monthly cost and the plan they sit on.

                ## Notes
                Watch for free tiers that become expensive at modest scale. Note each tool's next price step so growth does not bring surprise bills.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written buy-by-default rule names the core capabilities, spending limits and exception conditions, with current tools and their next price step listed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Name the one or two capabilities that make the product worth paying for"
                - "Write the buy-by-default rule with a monthly spending limit"
                - "List current tools with their cost and next price step"
                - "Revisit the buy list and its costs with your co-founder @recurring(quarterly)"
            - name: Scale-up review when bought tools start to strain
              description: |-
                ## Purpose
                Growth exposes the tools chosen at ten customers: usage pricing that tracked revenue now outruns it, rate limits throttle peak traffic and admin features no longer fit a larger team. A structured review of cost per customer, limits and gaps for each major tool tells a scale-up manager which to renegotiate, which to replace and which to grow into.

                ## Milestones
                1. Cost per customer or per transaction tracked for each major tool over the last 12 months.
                2. Rate limits, plan limits and missing features listed against next year's expected volume.
                3. Each tool marked renegotiate, replace, build or keep.
                4. The top two actions given owners and added to the roadmap or renewal calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each major tool has 12 months of unit cost history and a renegotiate, replace, build or keep call, with owners for the top two actions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work out cost per customer for each major tool over 12 months"
                - "List limits and gaps against next year's expected volume"
                - "Mark each tool renegotiate, replace, build or keep"
                - "Check unit cost trends for the two fastest-growing tools @recurring(monthly:18)"
            - name: Inherited homegrown system decision
              description: |-
                ## Purpose
                Inherited systems arrive with a new role: a homegrown admin engine or reporting tool written by someone long gone, poorly documented and quietly critical. Before promising a rebuild, a manager needs a fair picture of what it does, what it costs to keep, what could replace it, and a clear choice between keep and stabilise, rebuild, or replace.

                ## Milestones
                1. What the system does, who depends on it and its known failures documented.
                2. Current maintenance cost and risk estimated.
                3. Keep and stabilise, rebuild, and replace options each costed with the cost model.
                4. A decision recorded in the register with a review date.

                ## Notes
                Stabilise first. Documentation, monitoring and a second person who understands the system reduce risk whatever you decide next.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The inherited system's users, failures and maintenance cost are documented, and a keep, rebuild or replace decision is recorded with a review date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Interview the two people who know the system best"
                - "Document what it does, who depends on it and how it fails"
                - "Cost keep and stabilise, rebuild, and replace options"
                - "Record the decision and review date in the register"
            - name: When engineers want to build it themselves
              description: |-
                ## Purpose
                Engineers often prefer building, for good reasons such as control, quality and interest, and for less good ones such as underestimating maintenance. A product team that hears those reasons properly, tests them against the criteria and cost model, and gives engineers a real stake in the outcome makes better calls and keeps trust whichever way the decision goes.

                ## Milestones
                1. The engineers' reasons for building written down in their words.
                2. Each reason tested against the scoring criteria and cost model.
                3. A joint session held where both cases are presented on the same sheet.
                4. The outcome explained to the team, including what would change the decision later.

                ## Notes
                If engineers want to build because the work is interesting, say so openly and look for interesting differentiating work to give them instead.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Engineers' reasons are recorded, tested against the criteria and cost model in a joint session, and the outcome is explained with conditions for revisiting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the engineers to write their case for building in their own words"
                - "Score their case and the buy option on the same sheet"
                - "Run a joint session where both cases are presented"
                - "Explain the outcome and what would change it later"
            - name: Sourcing under a fixed launch date
              description: |-
                ## Purpose
                Fixed launch dates, such as a trade show, a contractual go-live or a seasonal peak, change the maths: time to value outweighs almost everything else. A quick sourcing call that buys or partners for the launch, with a planned review after the date, avoids both a rushed build that ships half-finished and a permanent choice made under pressure.

                ## Milestones
                1. The launch date and the capabilities it depends on listed.
                2. For each, the fastest credible option identified with its lead time.
                3. A temporary or contract-light choice made where possible.
                4. A post-launch review date set to decide the long-term option.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each capability the launch depends on has a sourcing choice with lead time that fits the date, and a post-launch review is scheduled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the capabilities the launch date depends on"
                - "Find the lead time for the fastest credible option for each"
                - "Prefer monthly or short contracts where they exist"
                - "Book a post-launch review to decide the long-term option"
            - name: Tool consolidation after a merger or reorganisation
              description: |-
                ## Purpose
                After a merger, acquisition or reorganisation, teams often run two analytics tools, two support desks and two internal components doing the same job. Consolidating with a fair comparison, a migration order and a timeline tied to renewal dates cuts cost and confusion without forcing every team to switch in the same month.

                ## Milestones
                1. Overlapping tools and components listed with users, cost and renewal dates.
                2. A survivor chosen for each overlap using the scoring criteria.
                3. A migration order aligned with renewal dates and team calendars.
                4. Retired tools switched off and their contracts ended or allowed to lapse.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Every overlapping tool pair has a recorded survivor, a migration order tied to renewals, and retired tools switched off."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List overlapping tools with users, cost and renewal dates"
                - "Score each overlap with the shared criteria"
                - "Plan the migration order around renewal dates"
                - "Confirm retired tools are switched off and contracts ended"
            - name: Explaining build vs buy choices to the board
              description: |-
                ## Purpose
                Investors and board members ask why a large share of spend goes to engineering, why a vendor bill doubled or why you are building something that seems available off the shelf. A one-slide summary of your sourcing principles and the three biggest current choices, with costs and reasons, lets a founder answer in two minutes and shows judgement rather than habit.

                ## Milestones
                1. One slide stating the sourcing principles and default stance.
                2. The three largest build or buy choices summarised with cost and rationale.
                3. Likely board questions listed with short answers.
                4. Board feedback recorded and any agreed changes added to the register.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-slide sourcing summary with the three largest choices was presented to the board, and its feedback is recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft one slide with the sourcing principles and default stance"
                - "Summarise the three largest choices with cost and reasons"
                - "List the questions board members are likely to ask"
                - "Record board feedback and agreed changes in the register"
            - name: Sourcing choices for AI model capabilities
              description: |-
                ## Purpose
                Model providers, open-weight models, managed platforms and in-house training sit on a spectrum, and prices, quality and terms change month to month. Treating each AI capability as a sourcing decision, comparing hosted APIs, self-hosted open models and fine-tuning on cost per task, quality on your own test set, data terms and switching cost, keeps the product from being tied to one provider by accident.

                ## Milestones
                1. The AI capabilities in the product listed with current provider and monthly cost.
                2. A small test set of real tasks used to compare at least two sourcing options.
                3. Cost per task, quality score, latency and data use terms recorded for each option.
                4. An abstraction or plan agreed that would let you switch provider within a set time.

                ## Notes
                Check each provider's terms on whether your data may be used for training, and have legal confirm the reading for anything customer-facing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least two sourcing options for one AI capability are compared on cost per task, quality on a real test set, latency and data terms, with a switching plan agreed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List each AI capability with its provider and monthly cost"
                - "Build a test set of 30 to 50 real tasks with expected answers"
                - "Compare two options on cost per task, quality, latency and data terms"
                - "Agree with engineering how quickly you could switch provider"
            - name: Staged decisions with trigger thresholds
              description: |-
                ## Purpose
                Not every sourcing call has to be final. Buying now with a pre-agreed trigger to build, such as monthly vendor cost passing a set figure, volume reaching a limit or the capability becoming central to the roadmap, treats the choice as an option you can exercise, and spares the team a fresh argument every quarter.

                ## Milestones
                1. One or two decisions reframed as staged, with the current choice and the future option named.
                2. Measurable trigger thresholds written for each.
                3. The preparation needed to exercise the option listed, such as data export or a wrapper.
                4. Trigger metrics checked monthly and any crossing raised at the portfolio review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "At least one decision is recorded as staged with measurable triggers, preparation steps and a monthly check of the trigger metrics."
                cadence: rolling
              tasks:
                - "Pick one decision that could be staged rather than final"
                - "Write measurable trigger thresholds for switching"
                - "List the preparation needed to switch quickly"
                - "Check the trigger metrics against their thresholds @recurring(monthly:6)"
            - name: Written sourcing principles for the product organisation
              description: |-
                ## Purpose
                Once a team has made a dozen sourcing calls, the patterns are clear enough to write down: buy commodity, build what customers pay for, never adopt a vendor without an exit plan. Five to eight short principles, with examples from your own register, let new managers and teams make consistent choices without escalating every one.

                ## Milestones
                1. Five to eight principles drafted from patterns in the register and retrospective.
                2. Each principle illustrated with a real example from your own decisions.
                3. The principles reviewed by product, engineering, finance and security leads.
                4. The principles published and linked from the intake form and decision rights page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five to eight sourcing principles, each with a real example, are reviewed by four functions and published beside the intake form."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft five to eight principles from patterns in the register"
                - "Attach a real example from your own decisions to each"
                - "Ask product, engineering, finance and security leads to review them"
                - "Revise the principles after the annual decision audit @recurring(yearly)"
            - name: Annual audit of sourcing decision quality
              description: |-
                ## Purpose
                Few teams ever check whether their build estimates and vendor business cases came true, so the same optimism repeats. An annual audit comparing predicted cost, time and benefit with actuals for every decision made in the year calibrates future estimates and shows leadership that the process learns.

                ## Milestones
                1. Every decision from the past year listed with predicted and actual cost, time and benefit.
                2. The average gap between prediction and actual calculated for build and buy separately.
                3. Two or three changes to criteria, overrun factors or principles agreed.
                4. A one-page audit summary shared with leadership.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annual audit compares predicted and actual cost, time and benefit for every decision made in the year and leads to at least two agreed process changes."
                cadence: cyclic
              tasks:
                - "List every decision from the past year with its predictions"
                - "Gather actual cost, time and benefit for each"
                - "Calculate the average gap for build and buy separately"
                - "Run the audit and share the one-page summary @recurring(yearly)"
---

# Build vs Buy Decisions

This area is for product managers, founders and product teams who keep facing the same question in new clothes: should we build this ourselves, buy a tool or work with a partner? It starts with the foundations (a decision register, a core versus context map, decision rights, shared criteria, a cost of ownership model and an honest engineering rate), then the operating rhythm around vendors, renewals and in-house maintenance, the skills of estimating, reading contracts and running demos, the evaluation work from shortlist to recommendation, the dated events of signing, migrating and renegotiating, situations for early founders, scale-ups, inherited systems and fixed launch dates, and finally specialist work on staged decisions, AI capabilities and auditing your own track record.

The rhythm is weekly for triaging new sourcing requests, monthly for the vendor scorecard, renewal calendar, maintenance hours, vendor release notes, seat true-up, dependency licences and trigger volumes, quarterly for the portfolio review, vendor health check and assumption check, and yearly for the capability map, engineering rate, exit test, security re-review, sourcing principles and decision audit. The Purchase decision, Vendor, Risk register, Metrics log, Compliance control and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
