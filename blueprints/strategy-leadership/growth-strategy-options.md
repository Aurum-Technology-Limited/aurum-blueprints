---
id: strategy-leadership.growth-strategy-options
name: Growth Strategy Options
description: "A clear growth ambition, an honest read of where growth comes from today, a long list of routes scored against agreed criteria, cheap tests and one coherent growth path the team can fund and follow."
category: business
version: 1.0.0
tags: [strategy-leadership, growth-strategy-options, manager, founder, small-business, growth, ansoff, adjacency]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - meeting-notes
    - board-meeting
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Growth Strategy Options
          description: "Generating and evaluating ways to grow, from new products and markets to partnerships and acquisitions, and choosing a coherent path."
          projects:
            - name: Growth ambition and time horizon statement
              description: |-
                ## Purpose
                Growth conversations go in circles when one person means doubling revenue in three years and another means a steady ten percent with better margins. Writing down how much growth, of what kind (revenue, profit, customers, reach) and by when gives every later option a test to pass and stops the team comparing ideas against different goals.

                ## Milestones
                1. A one-page statement naming the growth measure that matters most, the target level and the date.
                2. The minimum acceptable outcome and the stretch outcome both written as numbers.
                3. Any limits the owners or board will not cross, such as giving up control or doubling debt, listed.
                4. The statement read and agreed by the owners, founders or sponsoring executive.

                ## Notes
                Pick one headline measure. A statement with four equal measures will not settle any trade-off later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off one-page growth ambition with a headline measure, minimum and stretch targets, a date and listed limits."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down in one sentence what growth you want and by when"
                - "Ask each owner or senior leader separately for their growth number and horizon"
                - "Draft minimum and stretch targets for the headline measure"
                - "List the lines the owners will not cross to get there"
                - "Agree the final statement in a short meeting and file it"
            - name: Revenue bridge showing where growth comes from
              description: |-
                ## Purpose
                Most leaders can quote last year's growth rate but not how much of it came from price rises, new customers, existing customers buying more, or simply fewer losses. A revenue bridge from last year to this year, split into those parts, shows which engine is actually running and which one the growth plan is quietly assuming will start.

                ## Milestones
                1. Revenue for the last two full years split into new customers, expansion, price, churn and contraction.
                2. A bridge chart from year one to year two with each part shown as a bar.
                3. The one or two parts that drove most of the change named in a short commentary.
                4. The bridge updated with the latest quarter and kept with the growth dashboard.

                ## Notes
                If your systems cannot split revenue by customer, start with your top fifty customers by value. That usually covers most of the movement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A revenue bridge for the last two years, split into at least four sources of change, with a written commentary on the main drivers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export revenue by customer and month for the last two full years"
                - "Tag each customer as new, retained, expanded, contracted or lost"
                - "Separate the effect of price changes from volume with the finance lead"
                - "Build the bridge chart and write three sentences on what drove it"
                - "Refresh the revenue bridge with the latest quarter's figures @recurring(quarterly)"
            - name: Core business health check before chasing growth
              description: |-
                ## Purpose
                New products and markets are often pursued to escape problems in the core: falling retention, eroding margins or a stalled sales team. Checking the core first tells you whether the best growth option is actually fixing what you already have, and it stops a weak core from being starved further by a shiny new venture.

                ## Milestones
                1. Retention, gross margin, sales win rate and customer satisfaction trends for three years set side by side.
                2. Each trend marked as improving, flat or declining, with the likely cause noted.
                3. A short list of core fixes that would add more growth than a new venture, with rough value.
                4. A decision recorded on whether core repair is part of the growth path.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written core health check covering four trends over three years, ending in a recorded decision on core repair."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather three years of retention, margin and win rate figures"
                - "Ask the sales and service leads where the core is weakest"
                - "Estimate the revenue value of fixing the top two weaknesses"
                - "Write the health check and the core repair decision on two pages"
            - name: Customer and segment profitability baseline
              description: |-
                ## Purpose
                Growing the wrong segment faster is a quick way to grow revenue and shrink profit. A baseline of contribution margin by customer segment, product and channel shows where growth adds money and where it adds work, and often reveals that one segment quietly carries the business.

                ## Milestones
                1. Customers grouped into four to eight segments by size, sector or need.
                2. Revenue, direct costs and cost to serve estimated for each segment.
                3. Contribution margin by segment ranked from highest to lowest.
                4. The segments worth growing, holding and reshaping named in a one-page summary.

                ## Notes
                Cost to serve is where the surprises hide: support time, discounts, custom work and late payment. Estimates are fine if the method is written down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked table of contribution margin for at least four segments, with the method written down and a grow, hold or reshape call for each."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose the segment definitions with the sales lead"
                - "Pull revenue and direct costs by segment for the last year"
                - "Estimate cost to serve from support, delivery and discount records"
                - "Rank segments by contribution margin and mark each grow, hold or reshape"
            - name: Capacity to grow check on people and operations
              description: |-
                ## Purpose
                Capacity breaks growth plans more often than demand does: the one engineer who knows the system, a warehouse at ninety percent, a founder who approves every quote. Naming the constraints that would bite first at one and a half and two times current volume shows what has to be built before, not after, the growth arrives.

                ## Milestones
                1. The ten people, systems or assets the business depends on most listed.
                2. Each one rated for how it would cope at 1.5 times and 2 times current volume.
                3. The three tightest constraints named with the cost and lead time to relieve each.
                4. Constraint relief added as a precondition in the growth plan.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A capacity check rating ten key dependencies at two volume levels, with the three tightest constraints costed and timed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the people, systems and assets the business could not run without"
                - "Ask each team lead what would break first if volume doubled"
                - "Cost the fix and lead time for the three tightest constraints"
                - "Add constraint fixes as preconditions to the growth plan draft"
            - name: Growth funding sources and limits
              description: |-
                ## Purpose
                Every growth option needs money before it returns any, and the options open to a business funded from its own cash flow are very different from those open to one with investors or a parent company. Knowing how much can be spent, from which sources and at what cost or dilution, keeps the option list realistic from the start.

                ## Milestones
                1. Cash that can be committed to growth over the next two years stated without touching the operating reserve.
                2. External sources open to the business (bank debt, investors, grants, supplier terms, customer prepayment) listed with rough cost.
                3. A ceiling on total growth spending and on any single option agreed with the finance lead or accountant.
                4. The funding envelope written into the evaluation criteria.

                ## Notes
                Talk to your accountant or finance adviser before assuming any external funding. This project records what is available, it does not choose a lender or investor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written funding envelope stating the internal cash available, external sources considered and a ceiling per option, reviewed by a finance professional."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Work out the operating cash reserve the business must keep"
                - "List each external funding source you could realistically use"
                - "Ask your accountant or finance lead to check the cost of each source"
                - "Set a total growth budget ceiling and a per-option ceiling"
            - name: Growth options team and decision owner
              description: |-
                ## Purpose
                When growth is everyone's job, option analysis drifts and the final choice gets made in a corridor. Naming one decision owner, a small working team of three to five people and a timetable gives the work an end date and makes it clear who will recommend and who will decide.

                ## Milestones
                1. A decision owner named, with the authority to recommend a growth path.
                2. A working team of three to five people chosen across sales, finance and operations.
                3. A timetable from long list to decision, with the decision date fixed.
                4. The team's remit and time commitment agreed with their managers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page team charter naming the decision owner, three to five team members, their time commitment and a fixed decision date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the person who will own the growth recommendation"
                - "Pick three to five team members from different functions"
                - "Agree the hours each member will give with their managers"
                - "Put the decision date and key review dates in everyone's calendar"
            - name: Evaluation criteria for growth options
              description: |-
                ## Purpose
                Without agreed criteria, the option with the most enthusiastic sponsor wins. Five or six criteria (size of prize, fit with strengths, time to revenue, investment needed, risk and reversibility) weighted and agreed before any option is scored make the final choice explainable and much harder to relitigate.

                ## Milestones
                1. Five or six criteria defined, each with a plain description of high, medium and low.
                2. Weights agreed by the decision owner and leadership, adding to one hundred.
                3. Any hard filters (options that fail regardless of score) written separately.
                4. The criteria tested on two past growth moves to check they would have scored sensibly.

                ## Notes
                Agree the weights before anyone sees a scored option. Weights set afterwards tend to drift towards the favourite.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weighted criteria sheet with level descriptions and hard filters, agreed by the decision owner before scoring starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft six candidate criteria and a description of high, medium and low for each"
                - "Ask each leader to allocate one hundred points across the criteria"
                - "Settle the final weights and the hard filters in one meeting"
                - "Score two past growth moves to sense-check the criteria"
            - name: Growth assumption register
              description: |-
                ## Purpose
                Every growth option rests on a handful of beliefs: customers will pay more, a partner will promote you, a new segment buys the same way as the old one. Writing those beliefs down, with how confident you are and what evidence would change your mind, turns a debate about opinions into a list of things to test.

                ## Milestones
                1. A register listing each shortlisted option's top five assumptions.
                2. Each assumption rated for confidence and for how much the option depends on it.
                3. The riskiest assumptions, high dependence and low confidence, each linked to a planned test.
                4. The register reviewed and updated each quarter as evidence comes in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An assumption register covering every shortlisted option, with confidence ratings and a test linked to each high-risk assumption."
                cadence: rolling
              tasks:
                - "Write the five beliefs each shortlisted option most depends on"
                - "Rate each belief for confidence and for dependence"
                - "Link a test or evidence source to every high-risk assumption"
                - "Review assumption ratings against new evidence @recurring(quarterly)"
            - name: Monthly growth dashboard
              description: |-
                ## Purpose
                Leaders judge a growth strategy on a few numbers, and if they arrive late or in different formats each month nobody notices a trend until it is a problem. A single page with the headline growth measure, its drivers and the leading indicators for each active option, reviewed on the same day each month, keeps the path honest.

                ## Milestones
                1. Eight to twelve measures chosen, covering the headline target, revenue bridge drivers and option-specific indicators.
                2. Each measure with an owner, a data source and a target line.
                3. The dashboard produced on a fixed day each month for six months running.
                4. One action recorded each month for any measure off target.

                ## Notes
                Start from the **Metrics log** template. Fewer measures reviewed every month beat a long dashboard nobody reads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page growth dashboard produced on the same day for six consecutive months, each with recorded actions on off-target measures."
                cadence: rolling
              tasks:
                - "Choose the eight to twelve measures and name an owner for each"
                - "Set up the dashboard page with targets and data sources"
                - "Update the growth dashboard and note one action per off-target measure @recurring(monthly:9)"
            - name: Growth idea intake and option backlog
              description: |-
                ## Purpose
                Good growth ideas come from sales calls, supplier conversations and late-night founder thinking, then vanish because there is nowhere to put them. A simple intake form and a backlog, with each idea tagged by growth route and given a one-line rationale, means the next options review starts with a full list rather than a blank page.

                ## Milestones
                1. A short intake form asking for the idea, the customer it serves and why now.
                2. A backlog where every idea is tagged by route: existing customers, new product, new segment, new channel, partner or acquisition.
                3. Ideas triaged monthly into test, park or drop, with a reason.
                4. At least twenty ideas logged within the first three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A growth idea backlog holding at least twenty tagged ideas within three months, each triaged as test, park or drop with a reason."
                cadence: rolling
              tasks:
                - "Create a five-question growth idea form and share it with the team"
                - "Set up the backlog with a column for growth route"
                - "Triage new growth ideas into test, park or drop @recurring(monthly:16)"
                - "Tell each idea's author what happened to it"
            - name: Quarterly growth options review
              description: |-
                ## Purpose
                The growth path chosen in January can look wrong by June as tests report back and the market moves. A quarterly review that looks at test results, the assumption register and the backlog lets the team double down, adjust or stop options on evidence, without waiting for the annual plan.

                ## Milestones
                1. A standing ninety-minute review in the calendar for each quarter of the year.
                2. A pre-read with test results, dashboard trends and backlog changes sent three days ahead.
                3. Each active option given a continue, adjust or stop call, recorded with the reason.
                4. Resource changes from the review reflected in budgets within two weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews held in a year, each with a pre-read and a recorded continue, adjust or stop call for every active option."
                cadence: cyclic
              tasks:
                - "Book four ninety-minute review slots for the year"
                - "Build a one-page pre-read template for test results and trends"
                - "Hold the growth options review and record a call on each option @recurring(quarterly)"
                - "Send budget changes from the review to the finance lead"
            - name: Customer signal sweep for growth ideas
              description: |-
                ## Purpose
                Customers say where you could grow all the time: the extra service they keep asking for, the competitor they use for the bit you do not do, the colleague in another department who wants the same thing. A monthly sweep of sales notes, support tickets and lost-deal reasons turns those scattered remarks into evidence for or against each option.

                ## Milestones
                1. Three sources agreed for the sweep, such as sales call notes, support tickets and lost-deal reasons.
                2. A monthly summary of the five strongest growth signals, each with a count or quote.
                3. Signals linked to existing options in the backlog or logged as new ideas.
                4. Six monthly summaries completed and filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly signal summaries filed, each naming five growth signals linked to backlog options or new ideas."
                cadence: rolling
              tasks:
                - "Agree the three sources you will scan each month"
                - "Sweep the sources and write the five strongest growth signals @recurring(monthly:21)"
                - "Link each signal to a backlog option or log it as a new idea"
            - name: Weekly growth experiment check-in
              description: |-
                ## Purpose
                Cheap tests only work if they run fast, and a test that is checked once a quarter quietly becomes a six-month project. A fifteen-minute weekly check on every live experiment (what was learned, what is blocked, whether the stop rule has been hit) keeps tests short and cheap.

                ## Milestones
                1. A list of live experiments, each with an owner, a hypothesis and a stop date.
                2. A fifteen-minute weekly check-in held with no slides.
                3. Blocked tests unblocked or stopped within two weeks.
                4. A monthly note of what was learned across all experiments shared with leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly check-ins held for three months with every live experiment carrying an owner and stop date, plus three monthly learning notes."
                cadence: rolling
              tasks:
                - "List every live growth experiment with its owner and stop date"
                - "Run the fifteen-minute experiment check-in @recurring(weekly:tue)"
                - "Write the monthly learning note across all experiments @recurring(monthly:3)"
                - "Stop any experiment that has passed its stop date without a result"
            - name: Expansion revenue and retention tracking
              description: |-
                ## Purpose
                For many businesses the cheapest growth sits in the customers they already have, yet few track what share of revenue growth comes from them. Tracking net revenue retention, the revenue kept and grown from last year's customers, shows whether existing customers are a growth engine or a leak that new sales must keep filling.

                ## Milestones
                1. Net revenue retention calculated for the last twelve months with the method written down.
                2. Gross churn, contraction and expansion shown separately.
                3. The figure tracked monthly on a rolling twelve-month basis.
                4. The top ten expanding and top ten shrinking customers reviewed with account owners each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Net revenue retention, split into churn, contraction and expansion, is updated monthly for at least six months with a written method."
                cadence: rolling
              tasks:
                - "Agree the net revenue retention formula with the finance lead"
                - "Calculate the last twelve months' figure and its three parts"
                - "Update net revenue retention on a rolling twelve-month basis @recurring(monthly:5)"
                - "Review the top expanding and shrinking customers with account owners"
            - name: Growth risk register
              description: |-
                ## Purpose
                New growth brings risks the core business never carried: a partner who controls your new channel, a product line that drains support, a debt covenant tied to forecasts. A register that names those risks, their owner and the early warning sign for each lets the team act while the problem is still small.

                ## Milestones
                1. Each active growth option's top three risks recorded with likelihood and impact.
                2. An owner and an early warning indicator named for every high risk.
                3. Mitigations agreed for the five highest-rated risks.
                4. The register reviewed monthly and closed risks archived with a note.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A growth risk register with owners and warning indicators for every high risk, reviewed monthly for six months."
                cadence: rolling
              tasks:
                - "List the top three risks for each active growth option"
                - "Name an owner and an early warning sign for each high risk"
                - "Review growth risks and update ratings and mitigations @recurring(monthly:27)"
            - name: Annual growth strategy refresh
              description: |-
                ## Purpose
                Picked once and never revisited, a growth path ends up defended out of habit. Once a year, ahead of budgeting, the team should rebuild the revenue bridge, rescore the shortlist with a year of evidence and confirm or change the path, so next year's money follows what was learned.

                ## Milestones
                1. The revenue bridge and segment profitability updated for the year just ended.
                2. The option shortlist rescored against the same criteria with new evidence.
                3. A written confirm or change decision on the growth path, timed before the budget is set.
                4. Changes to the path reflected in next year's budget and targets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A refreshed growth path decision, based on a rescored shortlist and updated revenue bridge, recorded before the annual budget is finalised."
                cadence: cyclic
              tasks:
                - "Find the budget deadline and book the refresh six weeks before it"
                - "Rebuild the revenue bridge for the year just ended"
                - "Rescore the shortlist and decide whether the growth path holds @recurring(yearly)"
                - "Hand the confirmed path and targets to the budget owner"
            - name: Partner conversation pipeline
              description: |-
                ## Purpose
                Partnerships take months to form, and the ones that work usually start as informal conversations long before any agreement. Keeping a small pipeline of potential partners (distributors, complementary providers, referral sources) and touching each regularly means the partnership option is ready when the strategy calls for it.

                ## Milestones
                1. Ten to fifteen potential partners listed with what each could bring.
                2. A first conversation held with at least five of them.
                3. Each partner rated for strategic fit and their own appetite.
                4. Two partners progressed to a scoped joint test.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A partner pipeline of at least ten names with five first conversations held and two scoped joint tests agreed."
                cadence: rolling
              tasks:
                - "List fifteen organisations that serve your customers but do not compete with you"
                - "Book first conversations with the five best fits"
                - "Update the partner pipeline and book the next touchpoints @recurring(monthly:12)"
                - "Rate each partner for fit and appetite after the first meeting"
            - name: Ansoff matrix and adjacency distance
              description: |-
                ## Purpose
                The classic grid of existing and new products against existing and new markets is simple, but its useful lesson is distance: each step away from the core lowers the odds of success. Learning to place options on the grid and count how many things change (customer, product, channel, capability, competitor) gives the team a shared language for risk.

                ## Milestones
                1. The four Ansoff routes explained in your own words with an example from your sector for each.
                2. An adjacency distance scale written, counting how many dimensions differ from the core.
                3. Every backlog option placed on the grid and given a distance score.
                4. A one-page explainer shared with the working team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every backlog option has a grid position and adjacency distance score, explained in a one-page note shared with the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short primer on the Ansoff matrix and adjacency moves"
                - "Write a sector example for each of the four routes"
                - "Define a distance scale across five dimensions of change"
                - "Place every backlog option on the grid with a distance score"
            - name: Unit economics for comparing growth options
              description: |-
                ## Purpose
                Two options with the same revenue forecast can have wildly different economics once acquisition cost, contribution margin and payback period are counted. Learning to build a simple unit economics view for each option shows which growth pays for itself quickly and which needs a long runway of cash.

                ## Milestones
                1. Customer acquisition cost, contribution margin, lifetime value and payback period defined for your business.
                2. Current core business unit economics calculated as a benchmark.
                3. A one-page unit economics sheet built for each shortlisted option.
                4. Options ranked by payback period alongside their scores.

                ## Notes
                Lifetime value estimates are fragile. Prefer payback period as the main comparison and treat lifetime value as a sense check.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Core unit economics benchmarked and a payback period calculated for every shortlisted option, with assumptions written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write definitions of acquisition cost, contribution margin and payback for your business"
                - "Calculate unit economics for the current core with the finance lead"
                - "Build a one-page unit economics sheet for each shortlisted option"
                - "Rank the options by payback period"
            - name: Bottom-up sizing of a growth opportunity
              description: |-
                ## Purpose
                Top-down market sizes, a percentage of a huge industry figure, flatter every option equally. Learning to size bottom-up, counting reachable customers, likely conversion and realistic spend per customer, produces smaller numbers that are far better for choosing between options and setting first-year targets.

                ## Milestones
                1. The difference between total, serviceable and obtainable market written down with your own examples.
                2. A bottom-up model for one option: reachable customers, conversion rate and average spend.
                3. The model checked against one real data point, such as a competitor's size or a test result.
                4. The same method applied to every shortlisted option.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Bottom-up first three-year revenue estimates exist for every shortlisted option, each checked against at least one real data point."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one option and count the customers you could actually reach"
                - "Estimate conversion and spend per customer from your own sales data"
                - "Check the result against a competitor or test figure"
                - "Repeat the sizing for each option on the shortlist"
            - name: Designing cheap tests for growth options
              description: |-
                ## Purpose
                Building the whole thing before finding out whether anyone wants it is the expensive mistake in growth. Learning to design tests that cost days and small sums (a landing page, a pre-sale, a manual service delivered by hand, a pilot with three customers) lets you kill weak options before they consume a year.

                ## Milestones
                1. Five test types listed with typical cost, time and what each can and cannot prove.
                2. A test plan template with hypothesis, measure, pass mark and stop date.
                3. A test designed for each of the three riskiest assumptions in the register.
                4. At least one test run to completion and its result recorded.

                ## Notes
                Set the pass mark before the test starts. A result judged afterwards nearly always looks promising.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three test plans written with pass marks set in advance, and at least one test completed with its result recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List five cheap test types and what each can prove"
                - "Write a one-page test plan template with a pass mark field"
                - "Design tests for the three riskiest assumptions"
                - "Run the first test and record the result against the pass mark"
            - name: Pricing and packaging as a growth route
              description: |-
                ## Purpose
                Price is the growth lever leaders reach for last, though a small price or packaging change often adds more profit than a new product. Learning how good, better and best tiers, usage-based pricing, bundles and annual terms work, and testing one change, puts pricing on the option list where it belongs.

                ## Milestones
                1. The main pricing and packaging models in your sector summarised with examples.
                2. Current price realisation measured: list price against what customers actually pay.
                3. One pricing or packaging change proposed with its expected effect on revenue and churn.
                4. The change tested with a segment or new customers and the result recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Price realisation measured and one pricing or packaging test completed with its effect on revenue and churn recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare list prices with the prices customers actually paid last year"
                - "Summarise three packaging models competitors use"
                - "Propose one pricing or packaging change with expected impact"
                - "Test the change with new customers and record what happened"
            - name: Mapping the growth model and its loops
              description: |-
                ## Purpose
                Every business grows through a few loops: customers refer others, content brings visitors who become customers, revenue funds sales hires who bring more revenue. Drawing your own growth model shows which loop is strongest, where it leaks, and which options would feed it rather than start a new one from nothing.

                ## Milestones
                1. The main ways customers find, buy from and stay with the business drawn as one diagram.
                2. Conversion rates or volumes added at each step from real data.
                3. The biggest leak and the strongest loop marked.
                4. Each shortlisted option noted as feeding an existing loop or needing a new one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A growth model diagram with real conversion data at each step, its strongest loop and biggest leak marked, and each option mapped to it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch how a customer finds you, buys and comes back"
                - "Add real volumes or conversion rates to each step"
                - "Mark the strongest loop and the biggest leak"
                - "Note which shortlisted options feed the strongest loop"
            - name: Long list of growth options across every route
              description: |-
                ## Purpose
                Teams usually consider the two or three options someone senior already likes. Building a deliberately wide long list, at least twenty options across existing customers, new products, new segments, new channels, partnerships, replication and acquisition, makes sure the eventual choice beat real alternatives.

                ## Milestones
                1. At least twenty options drawn from the backlog, customer signals, staff and competitor moves.
                2. At least two options under each of the seven growth routes.
                3. Each option written in one consistent line: offer, customer, route and why now.
                4. Duplicates merged and the long list frozen for scoring.

                ## Notes
                Include one option that looks too bold and one that looks too dull. Both often teach the team something during scoring.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A frozen long list of at least twenty growth options, at least two per route, each written in the same one-line format."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull every idea from the backlog and customer signal summaries"
                - "Run a forty-minute idea session with staff from the front line"
                - "Fill any empty growth route with at least two options"
                - "Rewrite every option in the same one-line format and merge duplicates"
            - name: Scoring the long list to a shortlist of five
              description: |-
                ## Purpose
                Cutting a long list down fairly is what makes it useful. Scoring every option against the agreed criteria, first individually then together, and keeping notes on why scores differed, produces a shortlist of about five that the team can defend and invest proper analysis in.

                ## Milestones
                1. Every long-list option scored individually by each team member.
                2. Options with the widest score differences discussed and rescored together.
                3. Hard filters applied and failing options removed with a reason.
                4. A shortlist of four to six options agreed, with a paragraph on why each made it.

                ## Notes
                Scores are a tool for discussion, not the decision. If the top-scoring option feels wrong, find out which criterion is missing.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of four to six growth options agreed after individual and joint scoring, with written reasons for each inclusion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send the long list and criteria sheet to each team member to score alone"
                - "Combine the scores and find the widest disagreements"
                - "Discuss and rescore the disputed options together"
                - "Write the shortlist with a paragraph on each option"
            - name: Growing with existing customers option case
              description: |-
                ## Purpose
                Selling more to customers who already trust you is usually the closest and cheapest growth route, through more seats, more sites, add-on services or higher tiers. A proper case for this option, built on account-by-account potential rather than a hopeful percentage, often shows it can carry a large share of the growth ambition.

                ## Milestones
                1. The top fifty accounts reviewed for products or services they buy elsewhere.
                2. Expansion potential estimated per account and summed.
                3. The sales and service changes needed to capture it listed with cost.
                4. A two-page option case scored against the criteria.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page option case with account-level expansion potential for the top fifty customers and the cost of capturing it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask account owners what each top customer buys from others"
                - "Estimate expansion potential account by account"
                - "List the sales and service changes needed and their cost"
                - "Hold a monthly expansion review on the top accounts @recurring(monthly:18)"
            - name: New product or service line option case
              description: |-
                ## Purpose
                Launching a new offer for existing customers keeps the relationship but asks the business to build and support something it has not done before. A focused case covering the customer problem, evidence of demand, build cost and what it does to the support load shows whether the new line strengthens the core or distracts from it.

                ## Milestones
                1. The customer problem written in the customer's words, with at least ten interviews or signals behind it.
                2. Build or sourcing cost and time to first sale estimated.
                3. Effect on support, delivery and sales attention described.
                4. A two-page option case scored against the criteria.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page new product or service case backed by at least ten customer conversations, with build cost and time to first sale."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Interview ten customers about the problem the new line would solve"
                - "Estimate build or sourcing cost and time to first sale"
                - "Describe what the new line would add to support and delivery work"
                - "Write and score the option case"
            - name: New channel or distribution route option case
              description: |-
                ## Purpose
                Some businesses grow fastest not by changing what they sell but where and how it is bought: online, through wholesalers, marketplaces, resellers or a direct sales team. A channel option case weighs reach against margin given away, channel conflict and the control you lose over the customer relationship.

                ## Milestones
                1. Three candidate channels described with how customers would buy through each.
                2. Margin, cost to serve and volume potential estimated per channel.
                3. Conflict with existing channels and sales staff described honestly.
                4. A two-page option case for the strongest channel scored against the criteria.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Three channels compared on margin, volume and conflict, with a two-page scored case for the strongest."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List three channels your target customers already buy through"
                - "Find typical margins or fees for each channel"
                - "Ask the sales team where a new channel would clash with them"
                - "Write and score the case for the strongest channel"
            - name: New customer segment option case
              description: |-
                ## Purpose
                Selling the same offer to a new type of customer, a different sector, size of organisation or age group, is often the next step after saturating the first segment. A case that checks whether the new segment has the same problem, buys the same way and can be reached through channels you already use shows how much of the offer and sales approach must change.

                ## Milestones
                1. One or two candidate segments described by their problem, buying process and budget holder.
                2. At least eight conversations held with people in the segment.
                3. Changes needed to the offer, pricing and sales approach listed.
                4. A two-page option case scored against the criteria.

                ## Notes
                If the new segment needs a new country, new regulation or a local team, treat it as a market entry decision with its own deeper plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page new segment case backed by at least eight conversations, listing required changes to offer, price and sales approach."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick one or two segments that resemble your best current customers"
                - "Hold eight conversations with buyers in the new segment"
                - "List what would change in the offer, price and sales process"
                - "Write and score the segment option case"
            - name: Partnership and alliance option case
              description: |-
                ## Purpose
                Partnering can bring customers, capability or credibility far faster than building them, but it also makes growth depend on another organisation's priorities. An option case that sets out what each side gives and gets, the exit terms and what happens if the partner is acquired keeps the partnership route honest.

                ## Milestones
                1. The partnership type chosen: referral, reseller, co-delivery, co-development or joint venture.
                2. What each side contributes and gains written in a simple give and get table.
                3. Dependence risks and exit options listed, with legal review flagged where needed.
                4. A two-page option case scored against the criteria.

                ## Notes
                Any binding agreement needs review by a lawyer. This project builds the business case, not the contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page partnership option case with a give and get table, dependence risks and exit options, scored against the criteria."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the partnership type that fits the growth goal"
                - "Draft a give and get table for both sides"
                - "List what happens if the partner changes strategy or is sold"
                - "Check in with each live partnership against its give and get table @recurring(quarterly)"
            - name: Organic versus inorganic growth comparison
              description: |-
                ## Purpose
                Buying a business can get you to a market or capability in months rather than years, at a price and with integration risk that organic growth avoids. Comparing the build and buy routes for the same growth goal, on time, cost and risk, tells you whether acquisition belongs on the path at all before anyone starts looking at targets.

                ## Milestones
                1. One or two growth goals where buying might be faster stated clearly.
                2. Organic route estimated for time to reach the goal and total cost.
                3. Acquisition route estimated for likely price range, integration effort and risk, with an adviser's sense check.
                4. A recorded recommendation on whether acquisition stays on the growth path.

                ## Notes
                If acquisition stays on the path, the work of screening and targeting belongs in a dedicated acquisition strategy, not here.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side build and buy comparison for at least one growth goal, ending in a recorded recommendation on acquisition."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Name the growth goal where buying might be faster than building"
                - "Estimate time and cost of the organic route"
                - "Ask an adviser for a rough price and integration range for the buy route"
                - "Record the build or buy recommendation"
            - name: Replication through franchising, licensing or new sites
              description: |-
                ## Purpose
                Businesses with a format that works in one place, a café, clinic, training course or service model, can grow by copying it rather than inventing something new. An option case for replication checks whether the format can be written down and taught, what each new site or licensee earns, and how quality will be protected.

                ## Milestones
                1. The format's essential elements written as a short operating manual outline.
                2. Economics of one additional site or licensee estimated for both you and them.
                3. Owned sites, franchising and licensing compared on control, capital and speed.
                4. A two-page option case scored, with legal and franchise specialist questions listed.

                ## Notes
                Franchising is regulated in many countries. Get advice from a franchise specialist before talking to any prospective franchisee.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page replication case comparing owned sites, franchising and licensing, with single-site economics and specialist questions listed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the ten things that make your format work in one place"
                - "Estimate the economics of one more site for you and an operator"
                - "Compare owned, franchised and licensed models on control and capital"
                - "List the questions for a franchise or licensing specialist"
            - name: Choosing the coherent growth path
              description: |-
                ## Purpose
                A growth strategy is a combination, not a single option: perhaps expanding with existing customers this year, a new channel next year and one partnership test running alongside. Choosing two or three options that share capabilities and do not compete for the same scarce people, then sequencing them, turns a shortlist into a path the whole business can follow.

                ## Milestones
                1. Shortlisted options checked in pairs for shared capabilities and clashes over people or cash.
                2. Two or three options chosen that fit together and stay within the funding envelope.
                3. A sequence agreed, with what starts now and what waits for a trigger.
                4. The choice and its reasons recorded in a decision log, including options rejected and why.

                ## Notes
                If the chosen options need different leaders, different customers and different capabilities all at once, the path is probably three strategies pretending to be one.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded growth path of two or three sequenced options within the funding envelope, with rejected options and reasons logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check each pair of shortlisted options for shared capabilities and clashes"
                - "Pick two or three options that fit within the funding envelope"
                - "Agree what starts now and what trigger starts each later option"
                - "Write the decision, including rejected options, in the decision log"
            - name: Sales and delivery capacity plan for the growth path
              description: |-
                ## Purpose
                Revenue targets without the people to win and deliver them are wishes. Working back from the chosen path's targets to the number of salespeople, account managers and delivery staff needed, with realistic ramp-up times for new hires, shows when hiring must start and whether the targets themselves need to move.

                ## Milestones
                1. First and second year revenue targets for each chosen option broken into deals or customers per month.
                2. Productivity per salesperson and delivery person taken from your own history.
                3. A hiring timeline that allows for recruitment time and ramp-up before full productivity.
                4. Targets or hiring plans adjusted until the two agree, and signed off by the decision owner.

                ## Notes
                New salespeople rarely reach full productivity in their first months. Use your own ramp-up history rather than an optimistic guess.
              priority: medium
              deadlineOffsetDays: 135
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A capacity plan linking each chosen option's targets to a dated hiring timeline with ramp-up, signed off by the decision owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Break each option's revenue target into customers per month"
                - "Pull past productivity and ramp-up figures for sales and delivery staff"
                - "Draft a hiring timeline that allows for recruitment and ramp-up"
                - "Reconcile targets with the hiring plan and get sign-off"
            - name: Parked options list with revisit triggers
              description: |-
                ## Purpose
                Options that were not chosen are rarely bad; they were wrong for now. Writing down each parked option with the specific trigger that would bring it back (a competitor exits, a partner approaches, cash reaches a level) stops the same ideas being argued about every quarter and makes them easy to pick up when the moment comes.

                ## Milestones
                1. Every shortlisted option not chosen listed with the main reason it was parked.
                2. A specific, observable revisit trigger written for each.
                3. Triggers added to the quarterly options review agenda.
                4. Options with no plausible trigger moved to dropped, with a note.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A parked options list where each option has a reason and an observable revisit trigger, linked to the quarterly review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every shortlisted option that was not chosen"
                - "Write the reason each was parked"
                - "Write one observable trigger that would bring each back"
                - "Add the triggers to the quarterly options review agenda"
            - name: Leadership workshop to choose growth options
              description: |-
                ## Purpose
                Shortlists and analysis only become a decision when the leadership team argues it out together. A half-day or full-day workshop with a clear pre-read, a facilitator who is not the decision owner and a rule that the session ends with a recommended path gives the decision weight and shared ownership.

                ## Milestones
                1. A pre-read of no more than ten pages sent five days ahead.
                2. An agenda moving from evidence to debate to a recommended path.
                3. A facilitator agreed who will not argue for any option.
                4. A recommended path and dissenting views recorded before people leave the room.

                ## Notes
                Start from the **Meeting notes** template. Ask each leader to write their preferred path on paper before discussion starts, so the loudest voice does not set the anchor.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A workshop held with a pre-read sent five days ahead, ending with a recorded recommended path and dissenting views."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Book a half day with the leadership team and a neutral facilitator"
                - "Ask the agent to draft a ten-page pre-read from the option cases"
                - "Ask each leader to write their preferred path before discussion"
                - "Record the recommended path and any dissent before closing"
            - name: Customer panel session on proposed new offers
              description: |-
                ## Purpose
                Customers cannot design your strategy, but a session with eight to twelve of them reacting to concrete proposals catches the fatal flaw before launch. Showing two or three new offer concepts, with prices, and listening to which they would buy and what puts them off is cheap evidence for the options that depend on customer demand.

                ## Milestones
                1. Eight to twelve customers recruited across the segments the options target.
                2. Two or three concepts prepared as one-page offers with prices.
                3. The session held with reactions and objections recorded verbatim.
                4. Findings added to the assumption register and option cases.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A customer panel of at least eight people has reacted to priced concepts, with findings logged against the relevant assumptions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Invite twelve customers from the target segments to a ninety-minute session"
                - "Prepare one-page concepts with prices for two or three offers"
                - "Run the session and capture objections in customers' own words"
                - "Update the assumption register with what the panel said"
            - name: Board or investor presentation of the growth path
              description: |-
                ## Purpose
                Boards and investors are asked to fund growth paths all the time and quickly spot one that has not considered alternatives. Presenting the ambition, the options considered, why the chosen path won, what it costs and how progress will be judged earns real approval rather than polite nodding, and sets the measures you will be held to.

                ## Milestones
                1. A presentation of no more than twelve slides covering ambition, options, choice, cost, risks and measures.
                2. Questions anticipated with a page of answers, including why rejected options lost.
                3. Approval or requested changes recorded in the board minutes.
                4. The agreed measures added to the growth dashboard.

                ## Notes
                Start from the **Board meeting** template. Send the pack a week ahead so directors arrive with questions rather than first impressions.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The growth path presented to the board or investors and approved or amended, with the decision minuted and measures added to the dashboard."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book the growth path onto the board or investor agenda"
                - "Draft the twelve-slide pack from the workshop outputs"
                - "Write answers to the ten hardest questions you expect"
                - "Add the approved measures to the growth dashboard"
            - name: Pilot launch of the first growth option
              description: |-
                ## Purpose
                Bounded pilots are the right way to launch the first option on the path, with one segment, one region or a handful of customers, a fixed budget and a date to judge it. A well-run pilot shows whether the option works in real conditions while it is still small enough to change or stop.

                ## Milestones
                1. Pilot scope, budget, owner and judgement date written on one page.
                2. Success and stop measures agreed before launch.
                3. The pilot launched to its first customers.
                4. Weekly results logged for the length of the pilot.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot launched with a one-page scope, pre-agreed success and stop measures, and weekly results logged until the judgement date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write the one-page pilot scope with budget and judgement date"
                - "Agree success and stop measures with the decision owner"
                - "Launch the pilot to the first customers"
                - "Log pilot results and issues @recurring(weekly:fri)"
            - name: Six-month review of the chosen growth path
              description: |-
                ## Purpose
                Six months in, there is enough evidence to see whether the path is working and not so much sunk cost that changing course feels impossible. A dedicated review, separate from the quarterly options check, looks at pilot results, dashboard trends and capacity strain, and decides whether to scale, adjust or replace the lead option.

                ## Milestones
                1. Pilot results compared with the success and stop measures set before launch.
                2. Dashboard trends and capacity strain summarised on two pages.
                3. A scale, adjust or replace decision recorded with reasons.
                4. Any change to the path communicated to the team and the board.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A six-month review held with pilot results judged against pre-set measures and a recorded scale, adjust or replace decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the six-month review with the decision owner and team"
                - "Compare pilot results with the measures set before launch"
                - "Summarise capacity strain from the team leads"
                - "Record and communicate the scale, adjust or replace decision"
            - name: Founder finding a second growth engine
              description: |-
                ## Purpose
                After early product-market fit, founders often find the first engine (one channel, one customer type, one product) starts to slow just as investors expect acceleration. Finding the second engine early, while the first still funds the search, means running two or three small tests alongside the core rather than betting the company on one pivot.

                ## Milestones
                1. The first engine's growth curve plotted and the signs of slowing named.
                2. Three candidate second engines chosen from the long list.
                3. A small test running for each, with a fixed founder time budget.
                4. One engine chosen to invest in, explained to the team and investors.

                ## Notes
                Protect the first engine. The commonest mistake is moving the best people onto the shiny second engine while the core quietly stalls.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three second-engine tests run within a fixed founder time budget, ending in one chosen engine explained to the team and investors."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Plot monthly growth of the first engine over the last eighteen months"
                - "Pick three candidate second engines from the long list"
                - "Set a weekly founder time budget for the second-engine tests"
                - "Check second-engine tests against the time budget @recurring(weekly:mon)"
            - name: Small business growth without heavy borrowing
              description: |-
                ## Purpose
                Owners of small firms often want to grow but not to stake the house or take on a loan that keeps them up at night. Choosing options that fund themselves (price changes, selling more to regulars, prepaid packages, partnerships and one extra product) lets the business grow at the pace its cash allows.

                ## Milestones
                1. A personal limit on borrowing and risk written down by the owner.
                2. Options filtered to those that pay back within the owner's chosen period.
                3. One self-funding option started with a monthly cash check.
                4. Six months of growth and cash results recorded.

                ## Notes
                Talk to your accountant before committing savings or personal guarantees. Self-funded growth is slower, so set expectations with yourself and any family in the business.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A self-funding growth option running for six months within the owner's written borrowing limit, with monthly cash and growth recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down how much you are willing to borrow or risk personally"
                - "Pick the options that pay back within your chosen period"
                - "Start one self-funding option this month"
                - "Check cash in and out from the growth option @recurring(monthly:24)"
            - name: Manager proposing a growth option to senior leadership
              description: |-
                ## Purpose
                Managers inside larger organisations often see growth opportunities first but struggle to get attention for them among competing requests. A short, well-argued proposal that ties the option to the organisation's stated strategy, sizes it honestly and asks for a small first step is far more likely to be funded than a big ask.

                ## Milestones
                1. The option linked in one sentence to a goal in the organisation's current strategy.
                2. A two-page proposal with size, evidence, cost of a first step and measures.
                3. A senior sponsor identified and their feedback built in.
                4. The proposal submitted to the right forum with a decision date.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-page growth proposal linked to stated strategy, endorsed by a senior sponsor and submitted to the deciding forum."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the strategy goal your option would serve"
                - "Draft a two-page proposal with a small first-step ask"
                - "Ask a senior sponsor to review the draft"
                - "Submit the proposal and note the decision date"
            - name: Growing past the owner's personal capacity
              description: |-
                ## Purpose
                In many owner-run firms the real ceiling on growth is the owner: every quote, hire and big customer runs through one person. Before choosing any growth option, the owner needs to see which of their tasks block growth and hand two or three to others, or the new option will simply join the queue.

                ## Milestones
                1. Two weeks of the owner's time logged by task.
                2. Tasks marked as only I can do, could teach, or should stop.
                3. Two or three tasks handed over with a written guide.
                4. Hours freed for growth work measured after one month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least three owner tasks handed over with written guides, and the owner's freed hours for growth work measured after one month."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Log your working time by task for two weeks"
                - "Mark each task as only me, could teach, or stop"
                - "Write a one-page guide for the first task to hand over"
                - "Measure the hours freed for growth work after a month"
            - name: Growth options when the core market is flat
              description: |-
                ## Purpose
                When the core market stops growing or begins to shrink, the usual options look different: taking share costs more, adjacencies matter more and some growth may come from consolidating weaker rivals. Facing a flat market honestly, with a forecast and a list of options that work in it, keeps the business from planning growth the market cannot give.

                ## Milestones
                1. A five-year core market forecast agreed, using at least two independent sources.
                2. Share gain, adjacency and consolidation options separated on the long list.
                3. A plan for managing the core for cash where growth is not realistic.
                4. A quarterly check of whether the market forecast still holds.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A core market forecast from two sources, options split by type and a written plan for the core, checked quarterly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find two independent forecasts for your core market"
                - "Split the long list into share gain, adjacency and consolidation options"
                - "Write how the core will be run if it stops growing"
                - "Check the core market forecast against actual sales @recurring(quarterly)"
            - name: Platform or ecosystem growth option
              description: |-
                ## Purpose
                Some businesses can grow by letting others build on them: opening an integration programme, a marketplace of third-party add-ons or a supplier network where partners sell to your customers. This route can grow faster than any single product team, but only once enough partners and customers are on both sides, which takes patience and governance.

                ## Milestones
                1. The two sides of the potential platform named, with what each wants from the other.
                2. The starting problem addressed: which side to attract first and how.
                3. Rules for partner quality, revenue share and data access drafted.
                4. A small platform test with five partners designed and scored as an option.

                ## Notes
                Platforms fail more often from too few partners than from bad technology. Plan the first fifty participants by name before building anything.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A platform option case naming both sides, the first-side strategy, draft partner rules and a five-partner test design."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Name the two groups a platform would connect and what each wants"
                - "Decide which side you would attract first and how"
                - "Draft rules for partner quality and revenue share"
                - "Design a test with five named partners"
            - name: Capability-led adjacency map
              description: |-
                ## Purpose
                The strongest adjacencies grow out of something the business is unusually good at, such as a logistics network, a regulatory skill or a trusted brand in one community, rather than from market attractiveness alone. Mapping distinctive capabilities and the markets where each would give an edge produces options competitors find hard to copy.

                ## Milestones
                1. Three to five distinctive capabilities named, each with evidence that it outperforms rivals.
                2. For each capability, two or three markets or offers where it would give an advantage.
                3. Adjacencies scored on how much of the advantage transfers.
                4. The best two added to the long list or used to rescore existing options.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of at least three evidenced capabilities, each linked to scored adjacencies, with the best two fed into the option list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask five customers what you do better than anyone else"
                - "Name three to five capabilities with evidence for each"
                - "List markets where each capability would give an edge"
                - "Score how much advantage transfers to each adjacency"
            - name: Repeatable growth formula from past expansions
              description: |-
                ## Purpose
                Businesses that grow well over decades usually repeat one move many times, a new city, a new vertical, a new product on the same platform, getting better at it each time. Studying your own past expansions to find what the successful ones shared turns growth from a series of one-off bets into a formula the team can run again.

                ## Milestones
                1. Every expansion of the last ten years listed with its outcome.
                2. The successful and unsuccessful ones compared on five or six factors.
                3. A written formula of the conditions and steps the successes shared.
                4. The formula used to rescore the current shortlist.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written growth formula drawn from at least five past expansions, used to rescore the current shortlist."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every expansion of the last ten years and its result"
                - "Interview two people who led a success and two who led a failure"
                - "Compare the expansions on five or six common factors"
                - "Write the formula and rescore the shortlist with it"
            - name: Network effects and data advantage assessment
              description: |-
                ## Purpose
                Some growth options get stronger the bigger they get, because each customer adds value for the others or because usage data improves the product. Assessing honestly whether any option has a real network or data effect, rather than a claimed one, tells you which growth could compound and justify investing ahead of revenue.

                ## Milestones
                1. Each shortlisted option checked for a direct network effect, indirect network effect or data advantage.
                2. Evidence gathered for any effect claimed, such as retention by cohort size.
                3. Effects rated as real, possible or absent.
                4. The rating reflected in each option's score and investment pace.

                ## Notes
                Most businesses do not have strong network effects. Treat any claim of one as an assumption to test, not a fact.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every shortlisted option rated real, possible or absent for network and data effects, with evidence recorded for each claim."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check each option for network effects or data advantages"
                - "Gather evidence such as retention by cohort or usage"
                - "Rate each effect as real, possible or absent"
                - "Adjust option scores and investment pace to the ratings"
---

# Growth Strategy Options

This area is for the founder, owner or manager who knows the business needs to grow and has more ideas than money, people or time to pursue them. It starts with foundations (a written growth ambition, a revenue bridge that shows where growth really comes from, a core health check, segment profitability, capacity and funding limits, and the criteria every option will be judged by), then the routines that keep a pipeline of options and evidence alive, the skills of sizing, unit economics and cheap testing, the work of building and scoring a long list of routes, the events where the path is chosen and presented, situations for founders, small business owners and managers, and finally specialist work on platforms, capability-led adjacencies and repeatable growth formulas.

What repeats is the evidence: a weekly experiment check, monthly reviews of the growth dashboard, expansion revenue, customer signals, partner conversations and growth risks, a quarterly review of the option backlog and assumptions, and a yearly refresh of the whole growth strategy. The **Metrics log**, **Risk register**, **Meeting notes** and **Board meeting** templates pair with the growth dashboard, the risk register, the leadership workshop and the board presentation. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
