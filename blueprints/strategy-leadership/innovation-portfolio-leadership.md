---
id: strategy-leadership.innovation-portfolio-leadership
name: Innovation Portfolio Leadership
description: "A clear mandate, a ring-fenced pool, staged funding gates and a venture board, plus the review rhythm, evidence skills and protections that let new bets grow beside the core business."
category: business
version: 1.0.0
tags: [strategy-leadership, innovation-portfolio-leadership, manager, enterprise, innovation, venture-building, experimentation, stage-gate]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - metrics-log
    - reading-queue
    - board-meeting
    - product-spec
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Innovation Portfolio Leadership
          description: "Leading a portfolio of innovation bets, funding experiments in stages and protecting new ideas from the pressures of the core business."
          projects:
            - name: Innovation mandate and portfolio charter
              description: |-
                ## Purpose
                Innovation teams fail most often because nobody agreed what they were for: growth beyond the core, defence against a disruptor, or a showcase for the annual report. A one-page charter signed by the chief executive names the strategic purpose, the time horizon, the decision owner and what success looks like in three years, so every later funding argument starts from the same place.

                ## Milestones
                1. A one-page charter stating the strategic purpose of the innovation portfolio and the time horizon it is judged over.
                2. The executive sponsor, the decision owner for funding and the role of business unit heads written down.
                3. Three to five measures of success at three years agreed, including at least one that is not revenue.
                4. The charter signed off by the chief executive and shared with the executive team.

                ## Notes
                Avoid a charter that promises both quick wins for the core and big new businesses from the same budget. If both are wanted, say how the money splits between them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page charter names the portfolio's purpose, time horizon, decision owner and three-year success measures."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down in three sentences why the company wants an innovation portfolio"
                - "Draft the charter covering purpose, horizon, decision owner and success measures"
                - "Review the draft with the chief executive and agree any changes"
                - "Re-confirm the mandate with the chief executive before each planning cycle @recurring(yearly)"
            - name: Inventory of every innovation initiative in flight
              description: |-
                ## Purpose
                Most organisations run far more experiments, pilots and labs than anyone at the top can list, scattered across business unit, IT and marketing budgets. Counting them all, with owner, spend to date, stage and the decision each is waiting on, usually reveals duplicates, orphans and a few bets nobody remembers approving.

                ## Milestones
                1. A single list of every innovation initiative, pilot and lab project, with owner, budget line and spend to date.
                2. Each initiative tagged with its stage, from idea to scaling, and the next decision it needs.
                3. Duplicates and initiatives with no active sponsor flagged for the first venture board.
                4. Total innovation spend in the list reconciled to the finance system within an agreed margin.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An initiative register lists every innovation project with owner, stage and spend, and reconciles to recorded innovation spend."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask finance for every project code tagged as innovation, pilot or research and development"
                - "Email business unit heads asking for experiments run outside those codes"
                - "Record owner, stage, spend and next decision for each initiative"
                - "Flag duplicates and initiatives with no sponsor for the first venture board"
            - name: Horizon mix target for the innovation portfolio
              description: |-
                ## Purpose
                Without an explicit target, portfolios drift toward safe improvements to existing products, because those win every budget meeting. Agreeing the share of spend that goes to core, adjacent and transformational bets, as a ratio the executive team argues over and then commits to, gives you a yardstick for every later rebalancing decision.

                ## Milestones
                1. Definitions of core, adjacent and transformational bets written for this company, with an example of each.
                2. Every initiative in the inventory classified against those definitions.
                3. Current spend shown by horizon beside two or three possible target mixes.
                4. A target mix agreed by the executive team and recorded with the reasons.

                ## Notes
                Published ratios from other companies are a starting point for debate, not an answer. The right mix depends on how fast your core market is changing and how much the core still needs.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target split of innovation spend across core, adjacent and transformational bets is agreed by the executive team and recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write one-line definitions of core, adjacent and transformational for your company"
                - "Classify every initiative in the inventory by horizon"
                - "Chart current spend by horizon against two possible target mixes"
                - "Put the target mix to the executive team for a decision"
            - name: Ring-fenced innovation budget agreement
              description: |-
                ## Purpose
                Innovation money that sits inside business unit budgets is the first thing cut when a quarter goes badly, which teaches ventures to promise results too early. A separately held pool, with written rules on who can release it and what may not raid it mid-year, gives early bets the two or three years they usually need to prove anything.

                ## Milestones
                1. The size of the innovation pool for the coming year agreed with the finance director.
                2. Rules written on who can release money from the pool and who can claw it back.
                3. Treatment of unspent money at year end agreed, so teams are not pushed to spend for the sake of it.
                4. The pool and its rules approved as a separate line in the annual budget.

                ## Notes
                Ask for a multi-year commitment in principle even if money is released one year at a time. It changes how teams plan their experiments.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ring-fenced innovation pool with written release and clawback rules is approved in the annual budget."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Total last year's innovation spend across all budget lines"
                - "Propose a pool size and release and clawback rules to the finance director"
                - "Agree how unspent money is treated at year end"
                - "Confirm the pool appears as its own line in the approved budget"
            - name: Staged funding gates and evidence criteria
              description: |-
                ## Purpose
                Funding a new venture's full business plan up front invites big launches built on untested guesses. Metered funding releases money in small tranches, each tied to the evidence the next stage needs: proof that the problem exists, that customers will pay, and that the economics can work at scale.

                ## Milestones
                1. Four or five stages defined, from problem discovery to scaling, each with a typical tranche size and duration.
                2. The evidence required to pass each gate written as questions a team can answer with data.
                3. What happens at a failed gate written down: stop, pivot, or one more tranche with a narrower question.
                4. The gate criteria piloted on two current bets and adjusted.

                ## Notes
                Gates that ask for a five-year profit forecast at the idea stage reward storytelling. Ask early teams for customer evidence instead.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stage-gate framework with tranche sizes and evidence questions for each gate has been tested on two live bets."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the stages a typical bet passes through from idea to scale"
                - "Write three evidence questions for each gate"
                - "Set indicative tranche sizes for each stage with finance"
                - "Run two live bets through the draft gates and note what was unclear"
            - name: Venture board membership and terms of reference
              description: |-
                ## Purpose
                A small standing group that decides innovation funding every month moves faster and more consistently than sending bets to the full executive team one by one. Choosing members who include at least one sceptic from the core business and one person with start-up experience gives its decisions both credibility and range.

                ## Milestones
                1. Five to seven board members chosen, with a chair and a named finance representative.
                2. Terms of reference covering decision rights, quorum, conflicts of interest and spending limits.
                3. A standard one-page review pack agreed so every team presents the same way.
                4. The first meeting date set and the terms of reference circulated.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A venture board of five to seven named members has approved terms of reference and a date for its first meeting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a list of possible board members, including a core-business sceptic"
                - "Write terms of reference covering decision rights, quorum and spending limits"
                - "Agree a one-page review pack format for bets"
                - "Invite members and fix the first meeting"
            - name: Strategic search fields for new bets
              description: |-
                ## Purpose
                Open calls for ideas produce hundreds of submissions and very few that fit what the company can actually win at. Choosing three to five search fields, each a customer problem or market shift tied to the strategy, focuses scouting and lets you say no to good ideas that belong somewhere else.

                ## Milestones
                1. A long list of customer problems, technology shifts and regulatory changes relevant to the strategy.
                2. Three to five search fields chosen, each with a one-paragraph rationale.
                3. For each field, the assets the company brings and the gap it would need to fill.
                4. The search fields approved by the venture board and published to staff.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three to five search fields, each with a written rationale and asset assessment, are approved by the venture board."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the strategy's growth themes and main customer problems onto one page"
                - "Ask the agent to draft a long list of market shifts under each theme for you to check"
                - "Score candidate fields on fit with company assets and size of opportunity"
                - "Present the top three to five fields to the venture board"
            - name: Idea intake and triage route
              description: |-
                ## Purpose
                Staff ideas that disappear into a suggestion box teach people not to bother next time. A simple route, with one form, a named triage owner, a monthly sift against the search fields and a reply to every submitter within a month, keeps ideas coming and makes clear how one becomes a funded bet.

                ## Milestones
                1. A one-page intake form asking for the customer problem, the evidence so far and the ask.
                2. A named triage owner and written criteria used to sift submissions.
                3. A reply sent to every submitter within thirty days, with the reason for the outcome.
                4. The intake route announced to staff and linked from the intranet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every idea submitted in a quarter has a recorded triage outcome and a reply to the submitter within thirty days."
                cadence: rolling
              tasks:
                - "Draft a one-page intake form centred on the customer problem"
                - "Name the triage owner and write the sift criteria"
                - "Sift new submissions against the search fields and reply to each submitter @recurring(monthly:8)"
                - "Announce the route in the next staff update"
            - name: Stage-specific innovation metrics
              description: |-
                ## Purpose
                Judging a three-month-old venture on revenue kills it, and judging a scaling one on interviews completed lets it drift. Choosing two or three leading indicators per stage, from problem interviews and conversion rates to retention and unit margin, gives the venture board numbers it can compare across very different bets.

                ## Milestones
                1. Two or three metrics chosen for each funding stage, each with a written definition.
                2. Portfolio measures chosen, such as bets per stage, time in stage and the share of bets stopped.
                3. A data owner and a source agreed for every metric.
                4. The metric set approved by the venture board.

                ## Notes
                Keep counts like sign-ups or app downloads out unless they are tied to a conversion step. They rise easily and prove little.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metric set with definitions and data owners for each funding stage and for the portfolio is approved by the venture board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the metrics each live bet reports today"
                - "Choose two or three leading indicators for each funding stage"
                - "Add portfolio measures for time in stage and share of bets stopped"
                - "Agree a data owner and source for every metric"
            - name: Monthly venture board meeting
              description: |-
                ## Purpose
                The venture board earns trust by deciding things, not by hearing updates. A monthly meeting where two or three bets present against their gate questions, each leaving with a recorded fund, pivot or stop decision, keeps money moving toward the evidence and gives teams a predictable date to work toward.

                ## Milestones
                1. A monthly date fixed for the year with a standing agenda.
                2. Review packs circulated three working days before each meeting.
                3. Every bet reviewed leaves with a recorded decision and the reason for it.
                4. Decisions and next gate questions sent to teams within two days.

                ## Notes
                Start from the **Meeting notes** template. Cap status updates at ten minutes so the time goes on the decisions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly venture board meetings held in a year, each with a recorded fund, pivot or stop decision for every bet reviewed."
                cadence: rolling
              tasks:
                - "Fix twelve venture board dates in members' calendars"
                - "Circulate the review packs three working days ahead"
                - "Chair the venture board and record a decision for each bet @recurring(monthly:12)"
                - "Send each team its decision and next gate questions within two days"
            - name: Quarterly portfolio rebalancing review
              description: |-
                ## Purpose
                Individual bet decisions can each be sensible and still leave the portfolio lopsided, with too much money in one search field or nothing in the transformational horizon. Stepping back each quarter to compare actual spend with the target mix, and the pipeline by stage, shows where to source new bets and where to stop adding.

                ## Milestones
                1. Spend by horizon and search field compared with the target mix each quarter.
                2. Bets that have sat in one stage longer than the agreed limit listed.
                3. Gaps in the pipeline named, with a plan to source bets for them.
                4. A rebalancing note sent to the executive sponsor after each review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly rebalancing notes in a year compare spend with the target mix and record the actions agreed."
                cadence: cyclic
              tasks:
                - "Compare spend by horizon and search field with the target mix @recurring(quarterly)"
                - "List bets that have overstayed their stage limit"
                - "Agree where the next new bets should come from"
                - "Send a one-page rebalancing note to the executive sponsor"
            - name: Weekly learning review with venture leads
              description: |-
                ## Purpose
                Early ventures live or die on how fast they learn, and a month between board meetings is too long to notice a team running the wrong experiments. Thirty minutes a week with venture leads, asking what they tested, what they learned and what they will test next, catches drift early without turning into micromanagement.

                ## Milestones
                1. A weekly thirty-minute slot with venture leads in the calendar.
                2. A three-question format used every week: tested, learned, next.
                3. Experiments run without a written hypothesis flagged and coached.
                4. Twelve consecutive weekly reviews held.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly learning reviews held, each recording what every active venture tested and learned."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with venture leads"
                - "Share the tested, learned, next format with each lead"
                - "Run the weekly learning review and note one line per venture @recurring(weekly:tue)"
            - name: Assumption register for each funded bet
              description: |-
                ## Purpose
                Every business case rests on a handful of assumptions about customers, price, cost and channel, and the riskiest ones are often never written down. Keeping a register per bet, ranked by how much the case depends on each assumption and how little evidence exists for it, tells teams what to test first and tells the board what to ask.

                ## Milestones
                1. A register for each funded bet listing its ten most important assumptions.
                2. Each assumption scored for importance and for the strength of current evidence.
                3. The top three untested assumptions linked to planned experiments.
                4. Registers updated monthly and reviewed at each gate.

                ## Notes
                Start from the **Risk register** template, renaming the columns to assumption, importance, evidence and test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every funded bet has an assumption register updated within the last month, with its top three risks tied to experiments."
                cadence: rolling
              tasks:
                - "Set up a register from the template for each funded bet"
                - "Ask each team to list and score its ten main assumptions"
                - "Check that the top three untested assumptions have experiments planned"
                - "Review every register for changes since last month @recurring(monthly:20)"
            - name: Monthly innovation portfolio dashboard
              description: |-
                ## Purpose
                Executives who ask how innovation is going usually get anecdotes about the most exciting bet. A one-page dashboard refreshed each month, showing bets by stage, spend against budget, time in stage, bets stopped and each bet's lead metric, gives a factual answer and makes the portfolio comparable over time.

                ## Milestones
                1. A one-page dashboard layout agreed with the venture board.
                2. Figures from each venture collected by a fixed day each month.
                3. Twelve months of dashboards kept so trends are visible.
                4. The dashboard used as the first page of every venture board pack.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dashboard showing bets by stage, spend, time in stage and lead metrics has been published for six consecutive months."
                cadence: rolling
              tasks:
                - "Draft the dashboard layout from the agreed metric set"
                - "Collect each venture's figures and refresh the dashboard @recurring(monthly:5)"
                - "Put the dashboard at the front of the venture board pack"
            - name: Stop decisions and the stopped bets log
              description: |-
                ## Purpose
                Bets that should have ended linger for years as zombie projects, because stopping feels like admitting failure and nobody owns the decision. A protocol for stopping well, with a short post-mortem, a respectful wind-down for the team and a log of what each stopped bet taught, makes ending things normal and frees money for new bets.

                ## Milestones
                1. A written protocol for stopping a bet, covering who decides, how the team is told and how customers or partners are handled.
                2. A one-page post-mortem completed within two weeks of every stop.
                3. A stopped bets log kept with the cost, duration and main lesson of each.
                4. A yearly summary of stopped bets shared with the executive team.

                ## Notes
                Thank and redeploy the team visibly. If people lose standing when a bet stops, the next teams will hide bad news for as long as they can.
              priority: high
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every bet stopped in the year has a one-page post-mortem in the stopped bets log, and a yearly summary has been shared."
                cadence: rolling
              tasks:
                - "Write a one-page protocol for stopping a bet"
                - "Create the stopped bets log with cost, duration and lesson columns"
                - "Hold a post-mortem within two weeks of each stop decision"
                - "Share the yearly summary of stopped bets and their lessons @recurring(yearly)"
            - name: Annual innovation budget cycle
              description: |-
                ## Purpose
                The innovation pool still has to be argued for once a year alongside every business unit's plan, and it loses if it arrives late or reads as a cost line. Running its own short cycle, timed to finish before the company budget deadline, with last year's results, the planned pipeline and the money needed by stage, keeps the pool funded on its record.

                ## Milestones
                1. The company budget timetable obtained and the innovation submission date set two weeks earlier.
                2. A results summary of the past year: bets started, stopped and scaled, and what they cost.
                3. Next year's funding request built bottom up from the pipeline by stage.
                4. The request approved, with any cut matched by a named change to the pipeline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The innovation budget request, with a results summary and stage-by-stage pipeline, is submitted before the company deadline each year."
                cadence: cyclic
              tasks:
                - "Get the company budget timetable and set the innovation submission date @recurring(yearly)"
                - "Summarise last year's bets started, stopped and scaled with their cost"
                - "Build next year's request from the pipeline by stage"
                - "Agree in advance which bets drop out if the request is cut"
            - name: Monthly sponsor check-ins for each venture
              description: |-
                ## Purpose
                Ventures that sit inside a business unit need a senior sponsor who shields them from the core business's quarterly pressures, such as being asked to hit the unit's sales targets or lend their engineers to an urgent release. A short monthly check-in with each sponsor surfaces those pressures before they quietly starve the venture.

                ## Milestones
                1. A named sponsor for every venture housed in a business unit.
                2. A thirty-minute monthly check-in with each sponsor in the calendar.
                3. Requests to divert venture people or money logged and resolved or escalated.
                4. Sponsors attending at least half of their venture's gate reviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every business-unit venture has a named sponsor and at least ten monthly check-ins a year, with resource clashes logged."
                cadence: rolling
              tasks:
                - "Confirm a named sponsor for every venture inside a business unit"
                - "Hold a thirty-minute check-in with each sponsor @recurring(monthly:24)"
                - "Log any request to divert venture people or money to the core"
                - "Escalate unresolved clashes to the executive sponsor"
            - name: Leader's weekly hour in customer discovery
              description: |-
                ## Purpose
                Portfolio leaders who only see slides lose the instinct for which bets have real customer pull. Sitting in on one customer interview or test session a week, rotating through the ventures, keeps your judgement grounded in what customers actually said and shows teams that evidence matters more than presentation.

                ## Milestones
                1. A weekly hour protected in the calendar for customer sessions.
                2. A rotation that reaches every active venture each quarter.
                3. One observation from each session written down and shared with the team.
                4. Ten sessions attended in a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten customer interviews or test sessions attended in a quarter, covering every active venture, with notes shared."
                cadence: rolling
              tasks:
                - "Block one hour a week for customer sessions"
                - "Ask venture leads to offer a seat in their next interview or test"
                - "Sit in on one customer session and note one observation @recurring(weekly:thu)"
                - "Share the observation with the venture team the same day"
            - name: Quarterly innovation update to the executive team
              description: |-
                ## Purpose
                Support for innovation erodes quietly when the executive team hears about it only at budget time or through gossip about a failed pilot. A twenty-minute update each quarter, covering decisions made, money moved, lessons from stopped bets and one specific ask, keeps peers informed and turns them into sources of customers and talent.

                ## Milestones
                1. A standing twenty-minute slot on the executive agenda each quarter.
                2. A one-page update format: decisions, money, lessons and one ask.
                3. Each ask followed up and its outcome recorded.
                4. Four updates given in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly updates given to the executive team in a year, each with a recorded ask and its outcome."
                cadence: cyclic
              tasks:
                - "Request a standing quarterly slot on the executive agenda"
                - "Prepare and give the one-page innovation update @recurring(quarterly)"
                - "Follow up the update's ask and record the outcome"
            - name: Hypothesis-driven experiment design
              description: |-
                ## Purpose
                Many teams call any pilot an experiment, then cannot say what result would have changed their mind. Learning to write a falsifiable hypothesis, pick the cheapest test, set a pass mark before running it and read the result honestly lets you coach teams and challenge weak evidence at the venture board.

                ## Milestones
                1. One book or short course on lean experimentation completed, with notes.
                2. Ten current experiments rewritten as hypothesis, test, metric and pass mark.
                3. A one-page experiment card adopted by every venture team.
                4. Three finished experiments checked to confirm the pass mark was set in advance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An experiment card is in use by every venture team, and ten live experiments have been rewritten with pass marks set in advance."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one book or short course on lean experimentation and schedule it"
                - "Rewrite five live experiments with a hypothesis and a pass mark"
                - "Draft a one-page experiment card for venture teams"
                - "Review three finished experiments against their pre-set pass marks"
            - name: Real options and staged investment thinking
              description: |-
                ## Purpose
                Traditional net present value tends to undervalue early bets because it ignores your right to stop after each stage. Understanding staged funding as a series of options, where a bet's value depends on what you can learn cheaply first, lets you defend small exploratory spend to a finance director in their own terms.

                ## Milestones
                1. The basic logic of real options in corporate investment studied, with a worked example.
                2. One live bet modelled as staged decisions with costs and probability ranges at each gate.
                3. The model reviewed with someone in finance.
                4. A one-page explanation written for venture board members.

                ## Notes
                These models support judgement; they do not replace it. Probabilities at early gates are guesses and should be shown as ranges.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live bet has been modelled as a sequence of staged decisions and reviewed with finance, with a one-page explainer shared."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read an introduction to real options in corporate investment"
                - "Model one live bet as gates with costs and probability ranges"
                - "Walk a finance colleague through the model"
                - "Write a one-page explainer for the venture board"
            - name: Early-stage venture unit economics
              description: |-
                ## Purpose
                A venture can grow quickly and still lose more on every customer than it earns. Being able to read acquisition cost, payback period, contribution margin and retention for a young business, and to spot when the numbers rest on a handful of friendly early customers, is what lets a leader judge a scaling request.

                ## Milestones
                1. The core unit economics measures learned, with definitions written for this company.
                2. Unit economics calculated for two ventures past the pilot stage.
                3. The weakest assumption behind each calculation identified.
                4. Unit economics added as a required section of the scaling gate pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Unit economics have been calculated for two ventures and are a required section of the scaling gate pack."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the unit economics measures and write a definition for each"
                - "Calculate acquisition cost, margin and payback for two ventures"
                - "Find the assumption each calculation depends on most"
                - "Add a unit economics section to the scaling gate pack"
            - name: Business model design and testing
              description: |-
                ## Purpose
                Incumbents often wrap a good product idea in the wrong business model, such as a subscription where customers want to buy outright, or a direct channel where partners own the relationship. Practising how to map a model, generate alternatives and test the riskiest element helps you spot when a bet needs a different model rather than a better product.

                ## Milestones
                1. One business model mapping method learned and practised on the core business.
                2. Three alternative models sketched for one live bet.
                3. The riskiest element of the chosen model linked to an experiment.
                4. A short session run with venture leads on model alternatives.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three alternative business models have been sketched for one live bet and the riskiest element of the chosen model is under test."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map the core business on one page with a business model canvas"
                - "Sketch three alternative models for one live bet"
                - "Choose the riskiest element and agree a test with the team"
                - "Run a one-hour session with venture leads on model alternatives"
            - name: Reading list on ambidextrous organisations
              description: |-
                ## Purpose
                Running new ventures next to a profitable core is a well-studied problem, with research on separate units, shared assets and the leadership tensions in between. A reading queue of six to eight books, papers and case studies, worked through at one a month, gives you language and precedents for arguments you would otherwise make from scratch.

                ## Milestones
                1. A queue of six to eight readings on ambidexterity, corporate venturing and incumbent innovation.
                2. One reading finished each month, with three notes on what applies here.
                3. Two ideas from the reading tried in the portfolio.
                4. The queue shared with venture board members.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six readings on ambidexterity and corporate venturing finished, each with notes, and two ideas tried in the portfolio."
                cadence: rolling
              tasks:
                - "Build a reading queue of six to eight titles from the template"
                - "Finish one reading and write three notes on what applies here @recurring(monthly:15)"
                - "Pick two ideas from the reading to try in the portfolio"
            - name: Asking better questions as a venture board member
              description: |-
                ## Purpose
                Board members trained in core-business reviews tend to ask for forecasts and certainty, which pushes early teams into overclaiming. Learning a short set of questions about evidence, learning speed and the next riskiest assumption changes the tone of reviews and draws more honest answers from teams.

                ## Milestones
                1. A guide of ten to twelve questions for each stage drafted.
                2. The guide tried in two venture board meetings.
                3. Feedback gathered from venture teams on whether reviews felt fairer.
                4. The guide given to every new board member at induction.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stage-by-stage question guide has been used in two venture board meetings and is part of new member induction."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note the questions asked at the last two venture board meetings"
                - "Draft ten to twelve evidence-focused questions for each stage"
                - "Use the guide in the next two meetings"
                - "Ask two venture leads whether the reviews felt fairer"
            - name: Design sprint and rapid prototyping literacy
              description: |-
                ## Purpose
                Leaders who have never built a prototype tend to overestimate how long tests take and underestimate what a paper mock-up can reveal. Taking part in one five-day design sprint, from mapping the problem to testing a prototype with five customers, shows what fast learning looks like and what it really costs.

                ## Milestones
                1. One design sprint attended from start to finish with a venture team.
                2. The prototype tested with at least five real customers.
                3. A note written on what the sprint cost and what it proved or disproved.
                4. Two more venture teams encouraged to run their own sprints.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full design sprint attended, with five customer tests completed and a cost and findings note written."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask a venture team to schedule a design sprint you can join"
                - "Block five days in the calendar for the sprint"
                - "Watch all five customer tests on the final day"
                - "Write a one-page note on the sprint's cost and findings"
            - name: Build, partner or start-up client decision for a capability
              description: |-
                ## Purpose
                When a bet needs a capability the company lacks, the default is to build it internally, which is often the slowest route. Comparing building, partnering with an established firm and becoming the first paying client of a start-up, on time, cost, control and learning, gives the venture board a clear choice instead of an assumption.

                ## Milestones
                1. The capability needed described in a paragraph, with the date it is needed by.
                2. Each route costed and timed, with its main risks listed.
                3. Two or three potential partners or start-ups identified and contacted.
                4. A route chosen by the venture board and recorded with its reasons.

                ## Notes
                Taking an equity stake in a start-up or buying one belongs in a separate process with legal and corporate development advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded venture board decision on building, partnering or becoming a start-up's client, with costs and timing for each route."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Describe the capability needed and the date it is needed by"
                - "Cost and time the build, partner and start-up client routes"
                - "Contact two or three possible partners or start-ups"
                - "Bring the comparison to the venture board for a decision"
            - name: Choosing the innovation operating model
              description: |-
                ## Purpose
                Some companies run innovation from a central lab, some embed it in business units, and many end up with an unplanned mix of both. Deciding deliberately which bets sit centrally, which sit in units and how talent and money move between them settles turf disputes and matches each bet's distance from the core to the right home.

                ## Milestones
                1. Central, embedded and hybrid models described, with their trade-offs for this company.
                2. Current bets mapped to where they sit today and where they would sit under each model.
                3. Views gathered from business unit heads and venture leads.
                4. A model chosen by the executive team, with a transition plan for bets that move.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An innovation operating model is chosen by the executive team and every current bet has a recorded home under it."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write a page on the central, embedded and hybrid models for your company"
                - "Map where each current bet sits now and would sit under each model"
                - "Interview four business unit heads and four venture leads"
                - "Put a recommendation to the executive team"
            - name: Venture team incentives and career safety
              description: |-
                ## Purpose
                Strong people avoid new ventures when a stopped bet looks like a career setback and their bonus depends on core-business targets they cannot influence. Redesigning incentives, promotion criteria and a guaranteed route back for venture staff removes the main reason good talent stays away.

                ## Milestones
                1. Current bonus and promotion rules reviewed for how they treat venture staff.
                2. A proposal agreed with human resources covering incentives, review criteria and a route back.
                3. The route-back guarantee written into every venture assignment.
                4. Venture staff asked after a year whether they would join another bet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Venture assignments include written incentive terms and a guaranteed route back, agreed with human resources."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask human resources how bonuses and promotions treat venture staff today"
                - "Draft incentive, review and route-back terms with human resources"
                - "Add the route-back guarantee to every new venture assignment letter"
                - "Review venture incentives against staff feedback @recurring(yearly)"
            - name: Sandbox rules exempting ventures from core processes
              description: |-
                ## Purpose
                Procurement rules, brand guidelines, IT security reviews and pricing approvals written for a large business can take months, longer than an early experiment should run. Agreeing a sandbox, with lighter procedures for small tests under set limits on spend, customer numbers and data, keeps ventures fast without taking risks the company cannot accept.

                ## Milestones
                1. The core processes that slow experiments most listed, with typical delays.
                2. Sandbox limits agreed for spend, number of customers, data used and duration.
                3. Lighter procedures signed off by procurement, legal, IT security and brand.
                4. The sandbox rules published to venture teams with a named contact in each function.

                ## Notes
                Keep safety, privacy and legal compliance outside the sandbox. The lighter rules change how fast approvals happen, not whether the law applies.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Sandbox limits and lighter procedures are signed off by procurement, legal, IT security and brand, and published to venture teams."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask venture leads which core processes delayed their last experiment"
                - "Propose sandbox limits on spend, customers, data and duration"
                - "Agree lighter procedures with each function owner"
                - "Review sandbox exceptions with IT, legal and procurement @recurring(quarterly)"
            - name: Handover criteria from venture to business unit
              description: |-
                ## Purpose
                Scaling ventures often stall at handover, when a business unit is asked to absorb a new offer that dilutes its margin and was never in its plan. Agreeing in advance what a venture must show before transfer, who funds its first year in the unit and how the unit's targets adjust makes the handover a planned step rather than a fight.

                ## Milestones
                1. Transfer criteria written for customer numbers, unit economics and operational readiness.
                2. Funding for the first year after transfer agreed between the pool and the receiving unit.
                3. Target adjustments for the receiving unit agreed with finance.
                4. A named receiving manager for each venture approaching scale.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written transfer criteria and first-year funding rules are agreed with finance and applied to the next venture handed over."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the ventures likely to reach scale in the next eighteen months"
                - "Draft transfer criteria with the heads of the likely receiving units"
                - "Agree first-year funding and target adjustments with finance"
                - "Name a receiving manager for each of those ventures"
            - name: Rebalancing a portfolio of incremental bets
              description: |-
                ## Purpose
                After the first inventory, many leaders find that most bets are product improvements the core business would have funded anyway. Moving that work back to business unit budgets and putting the freed money into adjacent and transformational bets restores the portfolio's purpose without throwing away useful work.

                ## Milestones
                1. Incremental bets identified using the agreed horizon definitions.
                2. Each one given a business unit owner willing to fund it, or a stop decision.
                3. The freed money allocated to bets in under-funded horizons.
                4. The new spend mix compared with the target and reported.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Incremental bets have been moved to business unit budgets or stopped, and the freed money is reallocated toward the target horizon mix."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick out the bets that fit the core horizon definition"
                - "Ask business unit heads which they will fund from their own budgets"
                - "Decide stop or transfer for each incremental bet"
                - "Reallocate the freed money and report the new mix"
            - name: Intellectual property and data rules for experiments
              description: |-
                ## Purpose
                Experiments with customers, partners and start-ups raise questions nobody asked in the core business: who owns an idea co-developed in a pilot, which customer data a test may use, and what a start-up may say publicly about working with you. Agreeing standard terms with your legal team before the next pilot avoids weeks of negotiation and later disputes.

                ## Milestones
                1. The common intellectual property and data questions from recent pilots listed.
                2. Standard pilot terms drafted by the legal team for co-development, data use and publicity.
                3. Rules for using customer data in tests agreed with the privacy lead.
                4. The standard terms and data rules shared with every venture team.

                ## Notes
                These are questions for your legal and privacy teams to answer. The project is about getting the answers once, in writing, before they are needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Standard pilot terms and customer data rules approved by legal and privacy are available to every venture team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the ownership and data questions raised in the last year's pilots"
                - "Brief the legal team on the standard pilot terms you need"
                - "Agree customer data rules for experiments with the privacy lead"
                - "Share the approved terms with every venture team"
            - name: Start-up partnership pilot process
              description: |-
                ## Purpose
                Start-ups that could solve a venture's problem often give up on large companies after months of procurement and unanswered emails. A defined process, with scouting sources, a short standard pilot agreement, a named internal champion and a decision within ninety days, makes the company a client start-ups want and gets results to ventures faster.

                ## Milestones
                1. Scouting sources chosen for each search field, such as accelerators, universities and industry events.
                2. A standard pilot agreement and a paid pilot budget limit agreed.
                3. A named internal champion required for every pilot.
                4. Each pilot ending in a scale, extend or stop decision within ninety days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every start-up pilot started in the year has a named champion and a recorded decision within ninety days of starting."
                cadence: rolling
              tasks:
                - "Choose two scouting sources for each search field"
                - "Agree a standard pilot agreement and budget limit with procurement"
                - "Review the start-up pipeline and the pilot decisions due @recurring(monthly:27)"
                - "Record the outcome of each pilot in the initiative register"
            - name: Pitch day for the first funded cohort
              description: |-
                ## Purpose
                Launching the portfolio with a visible event signals to staff that new ideas get a fair hearing and real money. A pitch day where six to ten shortlisted teams present to the venture board, and three or four leave with a first tranche, makes the stage-gate system real and creates the first cohort to learn from.

                ## Milestones
                1. Six to ten teams shortlisted from the intake and the search fields.
                2. Each team coached on presenting the customer problem and first experiment, not a business plan.
                3. Three or four bets funded on the day, each with its first gate questions.
                4. Written feedback sent to every team that was not funded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pitch day held, with three or four bets funded on the day and written feedback sent to every unfunded team."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Set a date and book the venture board for pitch day"
                - "Shortlist six to ten teams from the intake"
                - "Run a coaching session on pitching a problem and a first test"
                - "Send written feedback to every unfunded team within a week"
            - name: Annual board session on the innovation portfolio
              description: |-
                ## Purpose
                Directors approve the innovation budget but rarely see the portfolio as a whole, so they judge it on the last failure they heard about. A yearly session with the board, showing the mix, the money, what was stopped and why, and the two or three bets that could matter most, builds patience for the long horizon.

                ## Milestones
                1. A slot on the board agenda agreed with the chair and company secretary.
                2. A board paper covering mix, spend, stopped bets and the most promising bets.
                3. One venture lead presenting directly to the board.
                4. The board's feedback and requests recorded and followed up.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual board session on the innovation portfolio has been held with a written paper, and the board's requests are recorded."
                cadence: cyclic
              tasks:
                - "Agree an annual board slot with the chair and company secretary @recurring(yearly)"
                - "Draft the board paper on mix, spend, stopped bets and top bets"
                - "Coach one venture lead to present to the board"
                - "Record the board's requests and assign an owner to each"
            - name: Quarterly demo day for the executive team
              description: |-
                ## Purpose
                Live demonstrations of a working prototype, or a customer telling their own story, do more for support than any status report. A ninety-minute demo day each quarter, with three ventures showing what they built and learned, lets executives see progress first hand and often produces offers of customers, data or people.

                ## Milestones
                1. A ninety-minute demo day booked each quarter.
                2. Three ventures selected each time, mixing early and later stages.
                3. Every demo showing something real: a prototype, a customer clip or live data.
                4. Offers of help from executives logged and followed up.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four demo days held in a year, each with three ventures showing working prototypes or customer evidence, and offers of help followed up."
                cadence: cyclic
              tasks:
                - "Book a ninety-minute demo day with the executive team @recurring(quarterly)"
                - "Choose three ventures at different stages to present"
                - "Check every demo shows a prototype, customer clip or live data"
                - "Log and follow up offers of help from executives"
            - name: First paying-customer pilot go or no-go
              description: |-
                ## Purpose
                The first time a venture asks customers to pay is the moment its business case meets reality, and the result decides whether it earns a scaling tranche. Preparing the pilot with a written scope, a price, success thresholds set in advance and the go or no-go meeting already booked keeps the decision honest when the results arrive.

                ## Milestones
                1. Pilot scope written, covering customers, price, duration and what is being tested.
                2. Success thresholds agreed with the venture board before the pilot starts.
                3. The pilot run with paying customers and results collected.
                4. A go or no-go decision made at a pre-booked venture board meeting.

                ## Notes
                Start from the **Product spec** template for the pilot scope.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A paying-customer pilot has finished against thresholds set in advance, with a recorded go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the pilot scope with the venture team from the template"
                - "Agree success thresholds with the venture board before launch"
                - "Book the go or no-go meeting for the week the pilot ends"
                - "Record the decision and the evidence behind it"
            - name: Two-year innovation portfolio look-back
              description: |-
                ## Purpose
                Two years is usually the first point where a portfolio can be judged on more than activity. Looking back at every bet funded, what it cost, what it returned in revenue, capability or learning, and how good the gate decisions look in hindsight, shows whether the system works and what to change before the next cycle.

                ## Milestones
                1. Every bet funded in the period listed with cost, outcome and stage reached.
                2. Gate decisions reviewed in hindsight: which stops were right and which continues were wrong.
                3. Changes to gates, metrics or budget rules proposed.
                4. The look-back presented to the executive sponsor.
              priority: medium
              deadlineOffsetDays: 730
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A look-back covering every bet funded over two years, with a hindsight review of gate decisions and proposed changes, is presented to the sponsor."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every bet funded in the past two years with cost and outcome"
                - "Ask the agent to summarise the venture board decision notes by bet for you to check"
                - "Mark which stop and continue decisions look right in hindsight"
                - "Present proposed changes to the executive sponsor"
            - name: First hundred days as a new head of innovation
              description: |-
                ## Purpose
                New innovation heads are often hired with a vague brief and high expectations, and the first hundred days decide whether they become a strategic leader or the person who runs hackathons. Spending them on listening, a quick inventory, two or three early decisions and an agreed mandate builds credibility before the first budget round.

                ## Milestones
                1. Twenty or more conversations held with executives, business unit heads and venture teams.
                2. A first view of the portfolio inventory and its biggest gaps.
                3. Two or three early decisions taken, such as stopping a zombie project.
                4. Hundred-day findings and a mandate agreed with the executive sponsor.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within one hundred days, twenty conversations are held, two early decisions taken and a mandate agreed with the executive sponsor."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List twenty people to meet in the first month"
                - "Ask each of them the same three questions about innovation here"
                - "Take two early decisions that show the portfolio will be run on evidence"
                - "Present hundred-day findings and a draft mandate to the sponsor"
            - name: Business unit manager sponsoring one venture
              description: |-
                ## Purpose
                Managers asked to sponsor a venture inside their unit carry two jobs: hitting this year's numbers and protecting something that will not pay back for years. Agreeing the sponsor's role, the time it takes and how the venture is shielded in the unit's planning lets a manager do both without the venture becoming the first casualty of a bad quarter.

                ## Milestones
                1. The sponsor's role written down: removing blockers, attending gates and protecting people and money.
                2. The venture's budget and staff kept outside the unit's targets, in writing.
                3. A monthly review with the venture lead held for six months.
                4. The sponsor's own objectives updated to include the venture.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The sponsor role is written down, the venture's budget sits outside unit targets, and six monthly reviews have been held."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the sponsor role in writing with the head of innovation"
                - "Confirm in the unit plan that the venture's budget and people are ring-fenced"
                - "Review progress and blockers with the venture lead @recurring(monthly:18)"
                - "Add the venture to your own objectives for the year"
            - name: Innovation portfolio in a regulated industry
              description: |-
                ## Purpose
                Banks, insurers, utilities and healthcare providers face rules that make many quick experiments impossible without approval, and a regulator surprised by a pilot is a lasting problem. Mapping which tests need sign-off, bringing compliance in as a design partner and using any regulator sandbox scheme available keeps the portfolio moving within the rules.

                ## Milestones
                1. Experiment types classified by the compliance approval each needs.
                2. A compliance partner named for the portfolio and attending gate reviews.
                3. Any regulator innovation or sandbox schemes in your jurisdiction identified.
                4. A fast route agreed for low-risk tests that use no customer data and no regulated activity.

                ## Notes
                What counts as regulated activity is for your compliance and legal teams to decide. Ask early rather than after a pilot launches.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Experiment types are mapped to approvals with a named compliance partner, and a fast route for low-risk tests is agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the experiment types your ventures run and the rules each may touch"
                - "Ask compliance to name a partner for the portfolio"
                - "Check whether your regulator runs an innovation or sandbox scheme"
                - "Agree a fast approval route for low-risk tests"
            - name: Innovation portfolio in a mid-sized company
              description: |-
                ## Purpose
                Companies with a few hundred staff rarely afford a lab or a full-time venture board, yet they need new products as much as larger rivals do. A lightweight version, with one leader giving a day a week, a small pool, three bets at a time and a quarterly review by the leadership team, delivers the discipline without the overhead.

                ## Milestones
                1. One leader given a set share of their time for the portfolio.
                2. A small pool agreed, with a limit of three active bets at a time.
                3. The leadership team acting as the venture board each quarter.
                4. The first three bets running with gate questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named leader, a small pool and three active bets with gate questions are in place, reviewed by the leadership team each quarter."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree with the chief executive who leads the portfolio and for how many days"
                - "Set a pool size and the three-bet limit"
                - "Choose the first three bets from the leadership team's ideas"
                - "Add a quarterly portfolio review to the leadership meeting calendar"
            - name: Protecting innovation spend in a cost-cutting year
              description: |-
                ## Purpose
                When the company cuts costs, innovation is an easy target because its payback is furthest away and its teams are small. Preparing a tiered plan in advance, showing what a ten, twenty or thirty per cent cut would stop and what it would cost in future options, turns a blunt cut into a choice the executive team makes knowingly.

                ## Milestones
                1. Three cut scenarios prepared, each with the bets it would stop.
                2. The future options lost under each scenario described.
                3. The bets that must be protected in any scenario named, with reasons.
                4. The executive team's chosen scenario recorded and explained to teams.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three cut scenarios with the bets stopped and options lost are presented, and the executive team's choice is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rank every bet by evidence and strategic importance"
                - "Draft ten, twenty and thirty per cent cut scenarios"
                - "Describe the options lost under each scenario"
                - "Tell affected teams the outcome directly and quickly"
            - name: Leading innovation across divisions or countries
              description: |-
                ## Purpose
                Groups with several divisions or country businesses often end up with each running its own small innovation effort, duplicating bets and never reaching scale. Agreeing which bets run once for the whole group, which stay local and how successful local bets spread avoids waste while keeping ideas close to local customers.

                ## Milestones
                1. Innovation activity in each division or country listed and compared.
                2. Rules agreed for which bets run group-wide and which stay local.
                3. A shared register so divisions can see each other's bets and results.
                4. One local success adopted by a second division or country.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Group-wide and local bet rules are agreed, a shared register is live, and one local success has been adopted elsewhere."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Collect each division's list of innovation initiatives"
                - "Mark overlaps and bets that could serve more than one division"
                - "Agree group-wide versus local rules with division heads"
                - "Pick one local success to trial in a second division"
            - name: Corporate venture stakes programme governance
              description: |-
                ## Purpose
                Some companies go beyond pilots and take minority stakes in start-ups to gain early access to technology and markets. Setting the strategic purpose, the decision process, conflict-of-interest rules and how information rights are used, with legal and finance advisers, keeps the programme tied to strategy rather than chasing financial returns it was not set up for.

                ## Milestones
                1. The strategic purpose of the stakes programme written and approved.
                2. An investment committee set up with external advice and conflict rules.
                3. A rule that every stake connects to a named business unit or venture.
                4. A quarterly review of each stake's strategic value, not only its valuation.

                ## Notes
                Whether to invest, at what price and on which terms are decisions for the committee with legal, tax and finance advisers. This project sets up the governance around those decisions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stakes programme has an approved strategic purpose, an investment committee with conflict rules, and quarterly strategic reviews of each stake."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page case for why the company would hold start-up stakes"
                - "Engage legal and finance advisers on governance and conflicts"
                - "Set up the investment committee and its terms"
                - "Review each stake's strategic value and information rights @recurring(quarterly)"
            - name: Spin-out decision for a venture that fits better outside
              description: |-
                ## Purpose
                Occasionally a venture proves promising but fits poorly with the core business, because of channel conflict, brand risk or a need for outside capital. Weighing a spin-out, licensing or a joint venture against keeping it inside, with advisers on structure and the team's interests in view, protects the value the venture has created.

                ## Milestones
                1. The reasons the venture does not fit inside written down clearly.
                2. Options compared: keep inside, license, joint venture or spin-out.
                3. Legal, tax and finance advice taken on the preferred structure.
                4. A decision recorded by the executive team, with the team's future roles settled.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A spin-out, licensing, joint venture or keep-inside decision is recorded by the executive team after professional advice."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Write down why the venture fits poorly inside the company"
                - "Compare keeping it, licensing, a joint venture and a spin-out"
                - "Brief legal, tax and finance advisers on the preferred option"
                - "Agree the venture team's roles under the chosen option"
            - name: Portfolio expected value model
              description: |-
                ## Purpose
                Once a portfolio holds fifteen or more bets, the venture board needs a view of total expected value, not just a list of hopefuls. A model combining each bet's potential size, probability ranges by stage and remaining cost shows how much value hangs on two or three bets and whether the pipeline is big enough to absorb normal failure rates.

                ## Milestones
                1. A model listing each bet's potential size, stage probability range and remaining funding.
                2. Portfolio value shown as a range, with the share coming from the top three bets.
                3. A check on whether enough bets are in early stages, given your own failure rates.
                4. The model reviewed with finance and updated at each rebalancing review.

                ## Notes
                Show the model's outputs as ranges. False precision on early bets does more harm than having no model at all.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A portfolio expected value model with ranges is reviewed by finance and updated at each quarterly rebalancing review."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Gather potential size and remaining cost for each bet"
                - "Set probability ranges for each stage from your stopped bets log"
                - "Build the model and show portfolio value as a range"
                - "Walk finance through the model and its weak points"
            - name: Venture studio partnership evaluation
              description: |-
                ## Purpose
                Venture studios offer to build new businesses with a corporate partner, bringing founders, methods and speed in exchange for fees and equity. Evaluating whether a studio would add to or replace part of your internal portfolio, with references from its past corporate partners, prevents an expensive arrangement that duplicates what your teams already do.

                ## Milestones
                1. The gap a studio would fill described: speed, founders, methods or capital.
                2. Two or three studios compared on model, fees, equity terms and track record.
                3. References taken from at least two past corporate partners of each studio.
                4. A recommendation made to the venture board, including the option of not proceeding.

                ## Notes
                Fee and equity terms need review by your legal and finance teams before anything is signed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three venture studios are compared with references from past partners, and a recommendation is recorded by the venture board."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down the gap a venture studio would fill"
                - "Shortlist two or three studios that have worked with similar companies"
                - "Call two past corporate partners of each studio"
                - "Present a recommendation, including not proceeding, to the venture board"
            - name: Measuring innovation's contribution to growth
              description: |-
                ## Purpose
                Ultimately the portfolio is judged on whether it changes the company's growth, which activity counts and pilot numbers cannot show. Defining a contribution measure, such as the share of revenue from offers launched in the last few years or the value of capabilities handed to units, and reporting it yearly, gives the executive team and board a long-run test of the whole programme.

                ## Milestones
                1. A contribution measure defined, with what counts as a new offer and the time window.
                2. Baseline figures calculated for the last three years.
                3. A target for three years out agreed with the executive team.
                4. The measure reported yearly in the annual planning pack.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A defined innovation contribution measure with a three-year baseline and target is reported yearly in the planning pack."
                cadence: cyclic
              tasks:
                - "Define what counts as a new offer and the time window for the measure"
                - "Calculate the measure for each of the last three years with finance"
                - "Agree a three-year target with the executive team"
                - "Report the contribution measure in the annual planning pack @recurring(yearly)"
---

# Innovation Portfolio Leadership

This area is for the head of innovation, chief strategy officer or business unit leader who runs several new bets at once and has to decide which get the next tranche of money, which stop, and how to keep them alive next to a demanding core business. It starts with the foundations (mandate, inventory, horizon mix, a ring-fenced pool, funding gates and a venture board), then the operating rhythm, the skills of evidence and staged investment, the design decisions that protect new ventures, the pitch days, pilots and board sessions, variants for new innovation heads, sponsors, regulated firms and mid-sized companies, and finally specialist work on venture stakes, spin-outs and portfolio value.

What repeats is a weekly learning review and a weekly hour with customers, a monthly venture board, dashboard, assumption register and sponsor check-ins, quarterly rebalancing, demo days and executive updates, and a yearly budget cycle, board session and mandate check. The **Meeting notes**, **Risk register**, **Metrics log**, **Reading queue**, **Board meeting** and **Product spec** templates pair with the venture board, the assumption registers, the dashboard, the reading list, the annual board session and the paying pilot scope. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
