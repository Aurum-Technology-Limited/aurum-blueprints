---
id: strategy-leadership.strategic-scenario-planning
name: Strategic Scenario Planning
description: "Scenario work that changes decisions: a sharp focal question, driving forces and critical uncertainties, four plausible futures, a strategy stress test, signposts to watch and options ready if the world turns."
category: business
version: 1.0.0
tags: [strategy-leadership, strategic-scenario-planning, manager, enterprise, scenarios, foresight, uncertainty, contingency-planning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - meeting-notes
    - risk-register
    - vendor
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Strategic Scenario Planning
          description: "Building plausible future scenarios, testing the strategy against each and preparing options in case the world turns out differently."
          projects:
            - name: Focal question for the scenario exercise
              description: |-
                ## Purpose
                Scenario projects that start with "what will the world look like in 2035" produce interesting stories and no decisions. A focal question tied to a real choice, such as whether to build a second plant or how far to depend on one channel, keeps every later step pointed at something the leadership team must actually decide.

                ## Milestones
                1. Three candidate focal questions drafted, each linked to a pending strategic decision.
                2. One question chosen with the sponsor and written in a single sentence with its decision deadline.
                3. The decision makers who will use the answer named alongside the question.
                4. The question tested on two senior colleagues who confirm it matters to them.

                ## Notes
                A good focal question is about your organisation, not the whole world. If nobody would change a budget or a plan because of the answer, the question is too broad.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence focal question linked to a named strategic decision and its deadline, agreed in writing with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the three biggest strategic decisions due in the next two years"
                - "Draft one focal question for each of those decisions"
                - "Agree the chosen focal question and its decision deadline with the sponsor"
                - "Test the question on two senior colleagues and refine the wording"
            - name: Time horizon and scope of the scenarios
              description: |-
                ## Purpose
                Too short a horizon turns scenarios into forecasts, and too long a horizon loses the people who run the budget. Matching the horizon to the life of the assets or commitments behind the focal question, often seven to fifteen years for capital-heavy businesses and three to five for fast-moving ones, gives scenarios that feel distant enough to stretch thinking and close enough to matter.

                ## Milestones
                1. The lifespan of the main commitments behind the focal question written down.
                2. A scenario horizon chosen and justified in two sentences.
                3. The geographic, market and business unit scope stated, with what is deliberately excluded.
                4. Scope and horizon signed off by the sponsor before any research starts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written horizon and scope statement, including explicit exclusions, approved by the sponsor before research begins."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how long the assets, contracts or capabilities behind the question will last"
                - "Choose a horizon year and write two sentences explaining why"
                - "List the markets and units in scope and those deliberately left out"
                - "Send the scope statement to the sponsor for sign-off"
            - name: Sponsor, core team and scenario governance
              description: |-
                ## Purpose
                Scenario work without a senior sponsor ends up as a strategy team side project that the executive committee politely ignores. Securing a sponsor who owns the focal decision and a core team of five to eight people from different functions, with a clear timetable, makes the output something leaders feel they built rather than received.

                ## Milestones
                1. A sponsor from the executive team confirmed, with the time they will commit.
                2. A core team of five to eight people named, drawn from at least four functions.
                3. A timetable from interviews to final scenarios agreed, typically eight to twelve weeks.
                4. Roles written down: lead, facilitator, researcher, note taker and executive liaison.

                ## Notes
                Include at least one person known for disagreeing with the prevailing view. Homogeneous teams build scenarios that all look like the current plan.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page team charter naming the sponsor, five to eight core members from four or more functions, roles and a dated timetable."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book thirty minutes with the intended sponsor to agree their role"
                - "Draft a list of candidate team members across at least four functions"
                - "Ask each candidate's line manager to release the time required"
                - "Write a one-page charter with roles and a dated timetable"
            - name: Inventory of assumptions behind the current strategy
              description: |-
                ## Purpose
                Every strategy quietly assumes things about demand, prices, regulation, technology and competitors, and most of those assumptions were never written down. Pulling them out of the plan, the budget model and board papers shows which ones the strategy depends on most, and those become the raw material the scenarios must challenge.

                ## Milestones
                1. The current strategy document, financial model and last two board papers read for embedded assumptions.
                2. At least twenty explicit or implied assumptions listed, each with its source.
                3. Each assumption rated for how much the strategy depends on it and how confident leaders are.
                4. The top eight load-bearing assumptions agreed with the sponsor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An assumptions list of twenty or more items with source, dependency and confidence ratings, and the top eight load-bearing assumptions agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the strategy document, the budget model and the last two board papers"
                - "Extract every stated or implied assumption into a single list with its source"
                - "Rate each assumption for dependency and confidence on a five-point scale"
                - "Review the top eight load-bearing assumptions with the sponsor"
            - name: Strategic conversation interviews with senior leaders
              description: |-
                ## Purpose
                Interviewing fifteen to twenty leaders and outside voices before any workshop surfaces the hopes, fears and blind spots the organisation carries about the future. The classic question set, including what an oracle would tell you and what would keep you awake in ten years, draws out uncertainties that a desk scan would miss and builds early ownership of the work.

                ## Milestones
                1. An interview guide of seven open questions agreed with the core team.
                2. At least fifteen interviews completed, including two or three people outside the organisation.
                3. Notes from every interview anonymised and stored in one place.
                4. A synthesis of recurring themes, disagreements and surprises circulated to the core team.

                ## Notes
                Promise anonymity and keep it. Senior people say far more about what worries them when they know comments will not be attributed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fifteen or more interviews completed with anonymised notes and a written synthesis of themes shared with the core team."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Draft a seven-question interview guide including the oracle question"
                - "Send interview requests to twenty internal and external contacts"
                - "Write up anonymised notes within a day of each interview"
                - "Ask the agent to draft a synthesis of themes from the anonymised notes"
            - name: Long list of driving forces from an external scan
              description: |-
                ## Purpose
                No scenario set is wider than the forces fed into it, and teams left to themselves list the trends they already read about. Working through social, technological, economic, environmental, political, legal and industry forces in a structured way produces a long list of fifty or more, which is the right size before ranking cuts it down.

                ## Milestones
                1. A scan covering each of the seven categories, with at least five forces per category.
                2. Each force written as a short statement with direction, for example "ageing workforce in core markets".
                3. Sources noted for every force so later challenges can be checked.
                4. Duplicates merged and a clean long list of fifty or more forces circulated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sourced long list of at least fifty driving forces spread across seven categories, circulated to the core team."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set up a shared sheet with columns for category, force, direction and source"
                - "Assign each core team member one or two categories to scan"
                - "Merge duplicate forces and tidy the wording into short statements"
                - "Circulate the long list a week before the ranking session"
            - name: Predetermined elements and critical uncertainties
              description: |-
                ## Purpose
                Some forces are already locked in, such as demographics for the next decade or infrastructure under construction, while others could genuinely go either way. Separating the two stops the team building scenarios around things that are not uncertain, and puts the predetermined elements into every scenario where they belong.

                ## Milestones
                1. Every force on the long list tagged as predetermined, uncertain or unclear.
                2. Evidence written beside each predetermined element explaining why it is locked in.
                3. A list of ten to fifteen genuine critical uncertainties, each with two plausible end states.
                4. Disputed items noted for discussion at the ranking session.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written split of the long list into predetermined elements with evidence and ten to fifteen critical uncertainties with two end states each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag each force on the long list as predetermined, uncertain or unclear"
                - "Write one line of evidence beside each predetermined element"
                - "Describe two plausible end states for each critical uncertainty"
                - "Mark disputed items for the ranking session agenda"
            - name: Impact and uncertainty ranking session
              description: |-
                ## Purpose
                Plotting every critical uncertainty on impact against uncertainty, in a two-hour core team session, is where the shape of the scenarios is decided. Doing it with individual votes before discussion avoids the loudest voice setting the axes, and the two or three forces in the top right corner become the candidates for scenario logic.

                ## Milestones
                1. Each core team member's individual scores collected before the session.
                2. A combined impact and uncertainty chart produced and discussed.
                3. Two to four high-impact, high-uncertainty forces chosen as candidate scenario drivers.
                4. The reasoning for the choice and any minority views recorded.

                ## Notes
                Collect scores anonymously first, then discuss the biggest disagreements. The disagreements are often more useful than the averages.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An impact and uncertainty chart with two to four candidate scenario drivers chosen, with reasoning and minority views written up."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send a scoring form for impact and uncertainty to each core team member"
                - "Combine the scores into a single chart before the session"
                - "Run the two-hour session starting with the largest disagreements"
                - "Write up the chosen drivers and any dissenting views"
            - name: Choosing the scenario method
              description: |-
                ## Purpose
                Two crossed axes giving four scenarios is the familiar default, but it suits some questions far better than others. Comparing the two-axis matrix with inductive storylines, cone of plausibility, or a single baseline with variants, against the focal question and the time available, means the method fits the decision rather than habit.

                ## Milestones
                1. At least three scenario methods described in a short comparison note.
                2. Each method scored against the focal question, team time and how leaders prefer to read material.
                3. A method chosen, with the number of scenarios it will produce.
                4. The choice and its trade-offs explained to the sponsor in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three scenario methods with the chosen method, the number of scenarios and its trade-offs approved by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a half-page description of three candidate scenario methods"
                - "Score each method against the focal question and available team time"
                - "Recommend one method and the number of scenarios it will produce"
                - "Send the recommendation to the sponsor for agreement"
            - name: Signpost and early-warning dashboard
              description: |-
                ## Purpose
                Scenarios lose their value the day they are filed, unless someone watches for which one is unfolding. A short dashboard of ten to fifteen signposts, each with a source, an owner and a threshold that points towards one scenario, turns the scenario set into a live instrument the executive team can glance at monthly.

                ## Milestones
                1. Two to four signposts defined for each scenario, each measurable from a named source.
                2. An owner and a threshold set for every signpost.
                3. A one-page dashboard showing current readings and the scenario each reading favours.
                4. The dashboard reviewed at a monthly leadership meeting for three months running.

                ## Notes
                Start from the **Metrics log** template. Prefer signposts that move early, such as order books or regulatory consultations, over lagging ones like annual market share.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard of ten to fifteen owned signposts with thresholds, updated monthly and reviewed by leadership for three consecutive months."
                cadence: rolling
              tasks:
                - "Draft two to four measurable signposts for each scenario"
                - "Assign an owner and a threshold to every signpost"
                - "Update signpost readings and the favoured scenario @recurring(monthly:8)"
                - "Flag any signpost that crossed its threshold to the sponsor @recurring(monthly:9)"
            - name: Horizon scanning rota and reading habit
              description: |-
                ## Purpose
                Weak signals rarely arrive in the industry press first; they show up in patents, regulatory consultations, start-up funding rounds and conference talks at the edges of the sector. A rota where each core team member scans one source category for an hour a week, with a short monthly note, keeps fresh material flowing into the scenarios without becoming anyone's full-time job.

                ## Milestones
                1. Eight to twelve scanning sources listed, with at least half outside the core industry.
                2. Each source category assigned to a named person on the rota.
                3. A monthly scanning note template agreed, no longer than one page.
                4. Six monthly notes produced and filed.

                ## Notes
                Start from the **Reading queue** template. Rotate source categories every six months so nobody goes stale on the same feeds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named scanning rota of eight or more sources and six consecutive one-page monthly scanning notes on file."
                cadence: rolling
              tasks:
                - "List eight to twelve scanning sources, half from outside your sector"
                - "Assign each source category to a person on the rota"
                - "Spend an hour scanning your assigned sources @recurring(weekly:fri)"
                - "Write and circulate the one-page monthly scanning note @recurring(monthly:22)"
            - name: Quarterly scenario check-in with the executive team
              description: |-
                ## Purpose
                Executives absorb scenarios once at a workshop and then return to the single forecast in the budget. Forty-five minutes on the executive agenda each quarter, covering signpost movements, which scenario the evidence currently favours and whether any option should be triggered, keeps the alternatives in leaders' heads when decisions are made.

                ## Milestones
                1. A standing forty-five minute slot on the quarterly executive agenda.
                2. A two-page pre-read format covering signposts, favoured scenario and option status.
                3. Decisions and actions from each check-in recorded and followed up.
                4. Four consecutive check-ins held with actions closed.

                ## Notes
                Start from the **Meeting notes** template. End each check-in with one explicit question: does anything we saw this quarter change a decision we are about to make?
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly scenario check-ins held, each with a two-page pre-read and recorded decisions and actions."
                cadence: cyclic
              tasks:
                - "Ask the chief of staff for a standing quarterly agenda slot"
                - "Design the two-page pre-read format and test it with the sponsor"
                - "Prepare the pre-read and run the scenario check-in @recurring(quarterly)"
                - "Send the recorded actions to owners within two working days"
            - name: Living assumption register
              description: |-
                ## Purpose
                The load-bearing assumptions found at the start drift out of date as markets move, and nobody notices until a plan fails. Keeping a register where each assumption has an owner, a latest evidence note and a status of holding, weakening or broken means the strategy team can see erosion months before it shows in results.

                ## Milestones
                1. The top assumptions moved into a register with owner, evidence and status columns.
                2. Each owner briefed on what evidence would weaken or break their assumption.
                3. Monthly status updates recorded for six months.
                4. Any assumption marked broken escalated to the sponsor with a recommended response.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An assumption register with owners and evidence, updated monthly for six months, with every broken assumption escalated in writing."
                cadence: rolling
              tasks:
                - "Move the top load-bearing assumptions into a register with owners"
                - "Brief each owner on what would weaken or break their assumption"
                - "Collect status and evidence updates from every owner @recurring(monthly:14)"
                - "Escalate any broken assumption to the sponsor with a proposed response"
            - name: Weak signals log open to the whole organisation
              description: |-
                ## Purpose
                Sales staff, engineers and procurement teams see odd customer requests, supplier behaviour and competitor experiments long before the strategy team does. A simple channel where anyone can post a weak signal, reviewed monthly and linked to the scenario it hints at, widens the scan to hundreds of observers at almost no cost.

                ## Milestones
                1. A shared channel or form set up with three fields: what you saw, where, and why it seems odd.
                2. The channel announced to at least three front-line teams with examples of useful signals.
                3. Monthly review of submissions with each signal tagged to a scenario or discarded.
                4. Contributors thanked and told what happened to their signal.

                ## Notes
                Closing the loop with contributors matters more than the tool. Signals dry up within two months if people never hear back.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weak signals channel open to front-line staff, with submissions reviewed monthly and contributors given feedback for six months."
                cadence: rolling
              tasks:
                - "Set up a shared form with three fields for weak signals"
                - "Announce the channel to three front-line teams with worked examples"
                - "Tag new submissions to scenarios and reply to contributors @recurring(monthly:27)"
                - "Feature the most useful signal in the next quarterly check-in pre-read"
            - name: Annual scenario set refresh
              description: |-
                ## Purpose
                Storylines built two years ago may still be plausible, but the world has moved and some now read as dated. A yearly refresh, timed before the planning cycle opens, tests whether the axes still hold, rewrites narratives with new evidence and retires a scenario if events have closed it off.

                ## Milestones
                1. The refresh timed to finish four weeks before the annual planning cycle starts.
                2. Each scenario reviewed against twelve months of signpost and scanning evidence.
                3. Axes confirmed or changed, with the reason written down.
                4. Updated narratives and a change log issued to the leadership team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An updated scenario set and a written change log issued to leadership at least four weeks before annual planning opens."
                cadence: cyclic
              tasks:
                - "Find the annual planning start date and work back four weeks"
                - "Gather twelve months of signpost readings and scanning notes"
                - "Book a half-day refresh session with the core team @recurring(yearly)"
                - "Issue the updated narratives with a one-page change log"
            - name: Trigger points and contingency decision rules
              description: |-
                ## Purpose
                Knowing which scenario is unfolding is useless if nobody agreed in advance what to do about it. Writing decision rules of the form "if signpost X passes threshold Y, we will review option Z within thirty days" means the organisation acts while there is still time, instead of debating whether the evidence is conclusive.

                ## Milestones
                1. A trigger point defined for each contingent option, linked to one or more signposts.
                2. Each decision rule written in an if, then, by when form and agreed with the option owner.
                3. The rules approved by the executive team and stored with the scenario set.
                4. Monthly checks recorded against every trigger.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of if, then, by when decision rules for every contingent option, approved by the executive team and checked monthly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every contingent option and the signposts that relate to it"
                - "Draft an if, then, by when rule for each option with its owner"
                - "Take the decision rules to the executive team for approval"
                - "Check every trigger against the latest signpost readings @recurring(monthly:3)"
            - name: Scenario-linked strategic risk review
              description: |-
                ## Purpose
                Most risk registers list risks against a single expected future, so a threat that is minor in one scenario and existential in another gets an average score that hides both. Scoring the top strategic risks separately under each scenario shows where exposure concentrates and gives the risk committee a far sharper conversation.

                ## Milestones
                1. The top fifteen strategic risks scored for likelihood and impact under each scenario.
                2. Risks whose score changes sharply between scenarios highlighted.
                3. Mitigations reviewed for whether they work across scenarios or only in one.
                4. Findings presented to the risk committee or audit committee.

                ## Notes
                Start from the **Risk register** template, adding one score column per scenario.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top fifteen strategic risks scored under every scenario, reviewed quarterly and presented to the risk committee at least once."
                cadence: cyclic
              tasks:
                - "Ask the risk team for the current top fifteen strategic risks"
                - "Add one score column per scenario and rescore each risk"
                - "Highlight risks whose scores swing sharply between scenarios"
                - "Rescore the risks against the latest signposts @recurring(quarterly)"
            - name: Scenario library and archive
              description: |-
                ## Purpose
                Five years on, nobody remembers which scenarios were built, what they assumed or how they compared with what happened. A tidy archive of every scenario set, the evidence behind it and the decisions it informed becomes an organisational memory that makes each new round faster and more honest.

                ## Milestones
                1. One folder structure agreed for scenario sets, research, workshop outputs and decisions.
                2. All existing scenario material moved into it with dates and authors.
                3. A short index page listing each scenario set and the decisions it fed.
                4. Archive reviewed yearly and outdated working files cleared into a dated subfolder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A single indexed archive holding every scenario set, its evidence and the decisions it informed, reviewed at least once a year."
                cadence: rolling
              tasks:
                - "Agree a folder structure for scenario sets, research and decisions"
                - "Move all existing scenario material into the archive with dates"
                - "Write a one-page index of scenario sets and the decisions they fed"
                - "Review the archive and update the index @recurring(yearly)"
            - name: Learning the intuitive logics scenario method
              description: |-
                ## Purpose
                Intuitive logics, the approach developed at Shell and popularised by the Global Business Network, is still the method most practitioners use, yet many strategy teams run it from a half-remembered slide. Studying the classic texts and a few worked cases gives the lead enough grounding to explain each step to sceptical executives and adapt it with confidence.

                ## Milestones
                1. Two classic books on scenario planning read and summarised in a page each.
                2. Three published corporate or public sector scenario sets studied for structure and use.
                3. A personal step-by-step method note written in your own words.
                4. The method note reviewed by someone who has run scenarios before.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-page summaries of two scenario planning books, notes on three published scenario sets and a personal method note reviewed by a practitioner."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose two classic scenario planning books and order them"
                - "Find three published scenario sets from companies or governments"
                - "Summarise each book and scenario set in a page"
                - "Write a step-by-step method note and send it to a practitioner for comment"
            - name: Writing scenario narratives people remember
              description: |-
                ## Purpose
                Any scenario that reads like a list of trend statements is forgotten by the end of the meeting. Narratives with a memorable name, a plausible chain of events from today, a few headlines from the future and a clear picture of daily life for a customer or employee are what leaders quote back months later.

                ## Milestones
                1. A narrative structure agreed: name, path from today, end state, headlines and implications.
                2. Each scenario drafted at 800 to 1,200 words with a distinct, neutral name.
                3. Every narrative checked that it starts from today's known facts and stays internally consistent.
                4. Drafts read aloud to a small group, and the weakest passages rewritten.

                ## Notes
                Avoid names that sound good or bad, such as Boom or Collapse. Leaders anchor on the hopeful one and dismiss the others.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A narrative of 800 to 1,200 words for each scenario, with a neutral name and future headlines, reviewed in a read-aloud session."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree the narrative structure with the core team"
                - "Draft a timeline of events from today to the horizon for each scenario"
                - "Write three future news headlines per scenario"
                - "Run a read-aloud session and rewrite the weakest passages"
            - name: Practising scenario workshop facilitation
              description: |-
                ## Purpose
                Workshops are where scenarios either catch fire or die, and the difference is usually facilitation: keeping senior people out of forecast mode, protecting quiet voices and moving from divergence to choice on time. Practising the core exercises on a low-stakes group first lets the facilitator find out which instructions confuse and where the timing slips.

                ## Milestones
                1. A facilitation plan written for the main exercises, with timings and instructions.
                2. A practice run held with a team of six to ten people on a smaller question.
                3. Feedback collected from participants and an observer.
                4. The plan revised, with timings adjusted and unclear instructions rewritten.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice workshop run with six to ten people, written feedback from participants and an observer, and a revised facilitation plan."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a facilitation plan for driver ranking, axis building and storylines"
                - "Find a team willing to try a two-hour practice session"
                - "Ask a colleague to observe and note where energy dropped"
                - "Revise the plan with the feedback and adjusted timings"
            - name: Spotting cognitive biases in strategic forecasts
              description: |-
                ## Purpose
                Overconfidence, anchoring on last year's numbers and the tendency to see the future as a slightly better present are the reasons single-point forecasts fail. Learning to name these biases, and running a short calibration exercise with the leadership team, makes the case for scenarios better than any lecture on uncertainty.

                ## Milestones
                1. Notes on the six biases most damaging to strategic forecasting, each with a business example.
                2. A ten-question calibration quiz built using facts relevant to your industry.
                3. The quiz run with the leadership team and results shared anonymously.
                4. Two or three debiasing habits chosen for future planning meetings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calibration quiz run with the leadership team, results shared and two or three debiasing habits written into planning meeting guidance."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write notes on six forecasting biases with an example from your sector"
                - "Build a ten-question calibration quiz with ninety percent confidence ranges"
                - "Run the quiz at a leadership meeting and share results anonymously"
                - "Agree two debiasing habits for future planning meetings"
            - name: Simple financial model for each scenario
              description: |-
                ## Purpose
                Leaders who think in numbers will not take a scenario seriously until they see what it does to revenue, margin and cash. A light model that translates each scenario's key drivers, such as volumes, prices and input costs, into a five-year profit and cash range is enough to compare scenarios without pretending to precision.

                ## Milestones
                1. Five to eight key drivers chosen that link scenario narratives to financial outcomes.
                2. Driver values set for each scenario, with the reasoning noted.
                3. A five-year revenue, margin and cash range produced per scenario.
                4. The model reviewed by finance and the assumptions log attached.

                ## Notes
                Keep it to one workbook a finance colleague can audit in an hour. A model that needs its builder to explain it will not survive the first budget meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finance-reviewed workbook showing five-year revenue, margin and cash for every scenario, driven by five to eight documented drivers."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Pick five to eight drivers that connect the narratives to the numbers"
                - "Set each driver's value per scenario and note the reasoning"
                - "Build a five-year profit and cash view for every scenario"
                - "Ask finance to review the workbook and the assumptions log"
            - name: Critical reading of published global scenarios
              description: |-
                ## Purpose
                Energy agencies, central banks, consultancies and multinational firms publish scenario sets that can save months of research, but each has its own assumptions and agenda. Reading three or four with a critical eye shows which forces they agree on, where they disagree, and which of their work you can borrow honestly.

                ## Milestones
                1. Three or four published scenario sets relevant to your focal question collected.
                2. Each summarised by axes, horizon, sponsor and key assumptions.
                3. Points of agreement and disagreement across the sets listed.
                4. A note on what to borrow, adapt or ignore circulated to the core team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison note on three or four published scenario sets, with a clear list of what to borrow, adapt or ignore."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect three or four published scenario sets relevant to your sector"
                - "Summarise each by axes, horizon, sponsor and key assumptions"
                - "List where the sets agree and where they contradict each other"
                - "Circulate a note on what to borrow, adapt or ignore"
            - name: Building the scenario framework
              description: |-
                ## Purpose
                Once the drivers are chosen, the framework is where they turn into a small number of distinct, plausible and challenging futures. Testing several candidate axis pairs or storyline logics before committing avoids the common failure of four scenarios that differ only in degree, with one obviously the official forecast.

                ## Milestones
                1. At least three candidate frameworks sketched from the top-ranked drivers.
                2. Each candidate tested for distinctness, plausibility and relevance to the focal question.
                3. One framework chosen with three or four scenario skeletons.
                4. Predetermined elements written into every skeleton.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chosen framework of three or four scenario skeletons, selected from at least three tested candidates, with predetermined elements included in each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch three candidate frameworks from the top-ranked drivers"
                - "Score each candidate for distinctness, plausibility and relevance"
                - "Write a one-paragraph skeleton for each scenario in the chosen framework"
                - "Check every skeleton includes all predetermined elements"
            - name: Wind tunnel test of the current strategy
              description: |-
                ## Purpose
                The point of scenarios is to test the strategy, yet many organisations stop once the stories are written. Running each strategic initiative through every scenario, asking whether it thrives, survives or fails, shows which parts of the plan are resilient and which are quiet bets on one future.

                ## Milestones
                1. The current strategic initiatives listed, typically eight to fifteen.
                2. Each initiative rated as thrive, survive or fail in every scenario, with a one-line reason.
                3. Initiatives that fail in two or more scenarios flagged for review.
                4. A one-page summary of strategic resilience presented to the executive team.

                ## Notes
                Rate initiatives as a group but write the reasons individually first. Group discussion tends to drift towards the official plan.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A thrive, survive or fail matrix for every strategic initiative under every scenario, with flagged initiatives presented to the executive team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every current strategic initiative with its owner"
                - "Rate each initiative as thrive, survive or fail in every scenario"
                - "Flag initiatives that fail in two or more scenarios"
                - "Present the one-page resilience summary to the executive team"
            - name: No-regret moves list
              description: |-
                ## Purpose
                Some actions make sense whichever scenario unfolds, such as building data capability, reducing a single-supplier dependency or strengthening the balance sheet. Pulling these out of the wind tunnel results gives leaders a short list they can fund now with confidence, which is often the most concrete payoff of the whole exercise.

                ## Milestones
                1. Actions that pay off in every scenario identified from the wind tunnel results.
                2. Each no-regret move given an owner, a rough cost and a start date.
                3. The list agreed by the executive team and added to the strategy plan.
                4. Progress on each move reviewed every quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of no-regret moves with owners, costs and start dates, approved by the executive team and reviewed quarterly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull actions that pay off in every scenario from the wind tunnel results"
                - "Give each move an owner, a rough cost and a start date"
                - "Take the list to the executive team for approval"
                - "Review progress on every no-regret move @recurring(quarterly)"
            - name: Capability gaps across the scenarios
              description: |-
                ## Purpose
                Each scenario quietly demands different skills, systems and partners, and an organisation strong in one future can be badly short in another. Listing the capabilities every scenario would require, and comparing them with what exists today, turns abstract futures into concrete hiring, training and partnership choices.

                ## Milestones
                1. The five to eight capabilities each scenario would demand listed.
                2. Current strength in each capability rated with the function heads who own it.
                3. Gaps that appear in two or more scenarios highlighted as priorities.
                4. Build, hire, partner or accept decisions recorded for each priority gap.

                ## Notes
                Rate today honestly with the people closest to the work. Leaders tend to overrate capabilities they once built themselves.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A capability gap table across every scenario, with a recorded build, hire, partner or accept decision for each gap found in two or more scenarios."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the capabilities each scenario would demand"
                - "Rate current strength in each capability with its function head"
                - "Highlight gaps that appear in two or more scenarios"
                - "Record a build, hire, partner or accept decision for each priority gap"
            - name: Portfolio of core and contingent options
              description: |-
                ## Purpose
                Beyond no-regret moves, a sound response to uncertainty mixes commitments that hold up across futures with options prepared for specific scenarios. Sorting possible responses into core commitments, hedges and contingent plays shows leaders exactly what they are betting on and what they are holding in reserve.

                ## Milestones
                1. Candidate strategic responses gathered for each scenario.
                2. Each response classed as core commitment, hedge or contingent play.
                3. Contingent plays matched to the scenario and trigger that would activate them.
                4. The portfolio approved and the contingent plays documented to a two-page outline each.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved option portfolio separating core commitments, hedges and contingent plays, with a two-page outline for each contingent play."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Collect candidate responses for each scenario from the core team"
                - "Class each response as a core commitment, hedge or contingent play"
                - "Match every contingent play to its scenario and trigger"
                - "Write a two-page outline for each contingent play"
            - name: Small bets that buy strategic flexibility
              description: |-
                ## Purpose
                Waiting to see which scenario unfolds can leave the organisation years behind, while committing fully is reckless. Small, deliberate bets, such as a pilot in a new segment, a minority stake, a land option or a technology partnership, buy the right to scale up later if a scenario arrives, at a fraction of the full cost.

                ## Milestones
                1. Three to five candidate small bets identified, each tied to a scenario.
                2. Each bet costed, with the decision it keeps open and when it expires.
                3. Two or three bets approved and funded.
                4. Every bet reviewed quarterly for scale up, hold or exit.

                ## Notes
                Set an exit date for every bet at the start. Options that are never exercised or closed become permanent cost.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three funded small bets, each linked to a scenario with a written exit date and a quarterly scale up, hold or exit decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Brainstorm small bets that keep a scenario-specific door open"
                - "Cost each bet and write down the decision it keeps open"
                - "Seek funding approval for the two or three strongest bets"
                - "Decide scale up, hold or exit for each bet @recurring(quarterly)"
            - name: Outside scenario facilitator or in-house team
              description: |-
                ## Purpose
                Outside facilitators bring method and the freedom to challenge senior people, but cost money and walk away with the know-how. Deciding deliberately, with two or three proposals compared against an in-house plan, avoids both the expensive report that nobody owns and the internal effort that never challenges the chief executive.

                ## Milestones
                1. The skills and independence the exercise needs written down.
                2. Two or three external proposals gathered against the same brief.
                3. An in-house option costed in staff time.
                4. A decision recorded, including how know-how will stay in the organisation if outsiders are used.

                ## Notes
                Start from the **Vendor** template. Ask every external provider for a reference from a client who used their scenarios for at least two years.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between external facilitation and an in-house team, based on two or three proposals compared with a costed internal option."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a two-page brief of the skills and independence needed"
                - "Request proposals from two or three scenario facilitators"
                - "Cost the in-house option in staff days"
                - "Record the decision and the knowledge transfer plan"
            - name: Scenario ranges in the annual budget
              description: |-
                ## Purpose
                Budgets built on one forecast train managers to treat that forecast as the future. Adding a high and low case drawn from the scenarios, with pre-agreed spending levers for each, gives finance and business units a shared view of how far results could swing and what will be done if they do.

                ## Milestones
                1. A high and low case for revenue and costs drawn from the scenario models.
                2. Three to five spending levers agreed for each case, with owners.
                3. The ranges included in the budget pack approved by the executive team.
                4. Actual results compared with the ranges at the half-year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Scenario-based high and low cases with agreed spending levers included in the approved budget pack and compared with actuals at half-year."
                cadence: cyclic
              tasks:
                - "Agree with the finance director how scenario ranges will appear in the budget"
                - "Derive high and low cases from the scenario financial models"
                - "Agree three to five spending levers for each case with owners"
                - "Add scenario ranges to the budget pack before approval @recurring(yearly)"
            - name: Wild cards and discontinuities session
              description: |-
                ## Purpose
                Two-axis frameworks rarely include the low-probability, high-impact events that end up mattering most, such as a pandemic, a major cyber attack on a sector or the sudden collapse of a key supplier country. A dedicated session on ten to fifteen wild cards checks whether the scenarios and options would cope, without pretending to predict them.

                ## Milestones
                1. A list of ten to fifteen wild cards relevant to the organisation drafted.
                2. Each wild card tested against the scenarios and current options.
                3. Gaps where no option would help written down.
                4. Two or three gaps handed to the risk or resilience owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tested list of ten to fifteen wild cards with identified gaps, and two or three gaps formally handed to the resilience owner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft ten to fifteen wild cards relevant to your organisation"
                - "Run a ninety-minute session testing each against the scenarios"
                - "List the gaps where no current option would help"
                - "Hand the top gaps to the risk or resilience owner in writing"
            - name: Two-day scenario building workshop
              description: |-
                ## Purpose
                The core workshop is where fifteen to twenty-five leaders turn the research into scenarios they own. Two days, with the first on drivers and framework and the second on narratives and implications, held off-site with no laptops, produces a far stronger result than a series of short meetings squeezed between other work.

                ## Milestones
                1. Dates, venue and participant list confirmed at least six weeks ahead.
                2. A pre-read pack covering the focal question, interview themes and driver rankings sent a week before.
                3. Framework and draft scenario skeletons agreed by the end of day one.
                4. Narrative outlines and first implications captured by the end of day two.
                5. Outputs written up and circulated within five working days.

                ## Notes
                Ask the sponsor to open and close but not to steer the middle. Participants defer when the most senior person speaks first.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-day workshop held with fifteen or more leaders, producing agreed scenario skeletons and implications written up within five working days."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Confirm workshop dates and a venue away from the office"
                - "Send invitations to fifteen to twenty-five participants"
                - "Prepare and send the pre-read pack a week before"
                - "Circulate the written-up outputs within five working days"
            - name: Scenario launch to the wider leadership group
              description: |-
                ## Purpose
                Scenarios known only to the executive team cannot shape the hundreds of decisions made by the next two layers of management. A launch session for the top hundred or so managers, with short narrative readings, a discussion of what each future means for their unit and a simple guide to signposts, spreads the thinking where decisions are made.

                ## Milestones
                1. A sixty to ninety minute launch session designed with the sponsor.
                2. A four-page scenario summary written for managers who were not in the workshop.
                3. The session held, with each table discussing implications for their own unit.
                4. Feedback collected and questions answered in a follow-up note.
              priority: medium
              deadlineOffsetDays: 140
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch session held for the wider leadership group with a four-page scenario summary issued and a follow-up note answering questions."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree a launch date and audience with the sponsor"
                - "Write a four-page scenario summary for managers"
                - "Design table discussions on implications for each unit"
                - "Send a follow-up note answering questions raised at the session"
            - name: Board session on scenarios and strategic resilience
              description: |-
                ## Purpose
                Directors are often more comfortable with uncertainty than executives expect, and a well-framed session lets them test the strategy rather than the forecast. Presenting the scenarios, the wind tunnel results and the option portfolio, then asking the board two or three specific questions, uses their experience where it counts.

                ## Milestones
                1. Board time agreed with the chair and company secretary.
                2. A board paper covering scenarios, resilience findings and options, with clear questions for directors.
                3. The session held and directors' challenges recorded.
                4. Changes made in response reported back to the board at the next meeting.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A board session on scenarios held with a written paper, directors' challenges recorded and resulting changes reported at the following meeting."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask the chair and company secretary for scenario time on the board agenda"
                - "Draft the board paper with two or three questions for directors"
                - "Record each director's challenge during the session"
                - "Report the resulting changes at the next board meeting"
            - name: Competitor war game within one scenario
              description: |-
                ## Purpose
                Scenarios describe the environment, but competitors, regulators and customers will react inside it. A half-day war game where teams play your organisation, two rivals and a regulator through two or three rounds in the most threatening scenario reveals moves nobody had considered and tests your options under pressure.

                ## Milestones
                1. The most threatening scenario chosen and briefing packs written for each team.
                2. Four teams formed, each playing an organisation or regulator.
                3. Two or three rounds played with moves and counter-moves recorded.
                4. Lessons and new options written up for the executive team.

                ## Notes
                Give rival teams real information and a strong player. War games where competitors are played weakly simply confirm the plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A war game of two or more rounds played by four teams in one scenario, with lessons and new options written up for the executive team."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "Choose the scenario and write a briefing pack for each team"
                - "Recruit four teams, putting strong players on rival teams"
                - "Run two or three rounds and record every move"
                - "Write up lessons and new options for the executive team"
            - name: Tabletop rehearsal of a contingency plan
              description: |-
                ## Purpose
                A contingent option written on two pages has never met the real organisation. Walking the responsible leaders through the first ninety days of activating it, in a three-hour tabletop exercise, exposes missing approvals, unclear owners and lead times that would otherwise surface when it is already too late.

                ## Milestones
                1. One contingent play chosen for rehearsal and its outline updated.
                2. A tabletop scenario script written covering the trigger and the first ninety days.
                3. The exercise held with every leader who would own part of the response.
                4. Gaps fixed in the plan and a revised version issued.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-hour tabletop rehearsal of one contingent play held with its owners, and a revised plan issued with the gaps closed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose one contingent play to rehearse with its owner"
                - "Write a script covering the trigger and the first ninety days"
                - "Hold the three-hour tabletop with every response owner"
                - "Issue a revised plan closing each gap found"
            - name: Scenarios for a single business unit
              description: |-
                ## Purpose
                Unit managers often inherit group scenarios that are too broad to guide their own product, pricing or capacity decisions. Translating the group set into unit-level implications, adding one or two forces specific to the unit's market, gives a manager scenarios they can use in their own plan without starting from scratch.

                ## Milestones
                1. The group scenario set read and each scenario summarised for the unit's market.
                2. One or two unit-specific forces added and tested with the unit team.
                3. Implications for the unit's top three decisions written for each scenario.
                4. Unit signposts added to the group dashboard and reviewed quarterly.

                ## Notes
                Keep the group scenario names and logic. Unit variants that rename everything make the group conversation impossible.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Unit-level implications for the top three decisions under each group scenario, with unit signposts added to the group dashboard."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Summarise each group scenario for your unit's market in a paragraph"
                - "Add one or two forces specific to your unit and test them with your team"
                - "Write the implications for your top three decisions in each scenario"
                - "Review unit signposts with your team @recurring(quarterly)"
            - name: Group scenarios with regional variants
              description: |-
                ## Purpose
                Multinational groups face the same tension every round: one global scenario set keeps the conversation coherent, but regional leaders rightly say their markets behave differently. A global frame with regional overlays, built with each region's own interviews and signposts, keeps the logic shared while letting each region own its implications.

                ## Milestones
                1. A global scenario frame agreed with the group executive.
                2. A regional lead appointed in each major region.
                3. Regional overlays written, describing how each global scenario plays out locally.
                4. Regional signposts consolidated into the group dashboard.
                5. Regional overlays refreshed alongside the annual global refresh.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A global scenario frame with written overlays for each major region and regional signposts in the group dashboard."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the global frame with the group executive team"
                - "Appoint a regional scenario lead in each major region"
                - "Brief regional leads on writing overlays and choosing signposts"
                - "Refresh regional overlays with the global set @recurring(yearly)"
            - name: Lean scenario exercise for a mid-sized firm
              description: |-
                ## Purpose
                A firm with a few hundred staff and no strategy department can still get most of the value of scenario planning in a few weeks. A slimmed-down version, with eight interviews, one day of workshop, three scenarios and a short options list, fits the time a busy leadership team can genuinely give.

                ## Milestones
                1. A focal question and a three-week timetable agreed by the leadership team.
                2. Eight interviews completed with leaders, a major customer and a supplier.
                3. A one-day workshop producing three scenarios and implications.
                4. A short options list and three signposts per scenario adopted.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three scenarios, an options list and three signposts per scenario produced within six weeks from eight interviews and a one-day workshop."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the focal question and a three-week timetable with leaders"
                - "Book eight interviews including one customer and one supplier"
                - "Run a one-day workshop to build three scenarios"
                - "Adopt a short options list and three signposts per scenario"
            - name: Scenarios for a regulated or publicly funded organisation
              description: |-
                ## Purpose
                Utilities, health bodies, universities and agencies face futures shaped heavily by policy, funding settlements and public expectation, and their scenarios must be discussable in front of regulators or ministers. Building scenarios that treat policy as an uncertainty without appearing to predict political outcomes keeps the work useful and safe to share.

                ## Milestones
                1. Policy, funding and regulatory uncertainties identified and worded neutrally.
                2. Scenarios checked by the governance or legal team for sensitivity before circulation.
                3. Implications for service delivery and funding written for each scenario.
                4. A version suitable for sharing with regulators or funders prepared.

                ## Notes
                Name scenarios after conditions, not political parties or people. Neutral wording keeps the work usable whoever holds office.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scenario set with neutrally worded policy uncertainties, cleared by governance, with a shareable version for regulators or funders."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the policy, funding and regulatory uncertainties in neutral terms"
                - "Ask the governance team to review the scenarios for sensitivity"
                - "Write service and funding implications for each scenario"
                - "Prepare a shareable version for regulators or funders"
            - name: Taking over scenario work as a new strategy lead
              description: |-
                ## Purpose
                A new head of strategy often inherits scenarios built by a predecessor, half-trusted by the executive team and loosely connected to current decisions. Auditing what exists, who used it and what it got right, in the first sixty days, lets the new lead decide whether to refresh, rebuild or retire the set rather than defending someone else's work.

                ## Milestones
                1. All existing scenario material collected and read.
                2. Five executives asked whether and how they used the scenarios.
                3. A short assessment of what the scenarios got right and wrong since they were built.
                4. A recommendation to refresh, rebuild or retire agreed with your boss.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written assessment of the inherited scenario set and an agreed refresh, rebuild or retire decision within sixty days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Gather every inherited scenario document and workshop output"
                - "Ask five executives how they used the scenarios"
                - "Compare what each scenario expected with what has happened since"
                - "Agree a refresh, rebuild or retire recommendation with your boss"
            - name: Rapid scenarios after a sudden shock
              description: |-
                ## Purpose
                When a shock has already hit, such as a new tariff regime or the loss of a major market, leaders need a view of how the next eighteen months could unfold, not a full scenario cycle. Three quick scenarios built in a week, focused on duration and severity, give the recovery plan a range to work within.

                ## Milestones
                1. Two key uncertainties about the shock chosen, usually how long it lasts and how deep it goes.
                2. Three short scenarios of a page each written within a week.
                3. Recovery decisions tested against all three.
                4. Weekly signposts set and a date fixed to rebuild the full scenario set.

                ## Notes
                Rapid scenarios support the recovery plan; they do not replace the incident response, which needs its own command structure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three one-page scenarios built within a week of the shock, used to test recovery decisions, with weekly signposts set."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Name the two biggest uncertainties about the shock"
                - "Write three one-page scenarios on duration and severity"
                - "Test the recovery decisions against each scenario"
                - "Set weekly signposts and a date to rebuild the full scenario set"
            - name: Quantified scenario ranges with probabilistic modelling
              description: |-
                ## Purpose
                For capital-heavy decisions, leaders often want more than four stories: they want to see the spread of outcomes. Layering probabilistic simulation on top of the scenario drivers, with each scenario defining a different distribution, shows the range of cash outcomes while keeping the scenarios as the structure rather than one blended average.

                ## Milestones
                1. Distributions defined for the main drivers within each scenario.
                2. A simulation run producing outcome ranges for each scenario separately.
                3. Results checked for sense by finance and one sceptical executive.
                4. A two-page explanation written for non-technical readers.

                ## Notes
                Do not average the scenarios into one distribution. Doing so hides exactly the differences the scenarios exist to show.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Per-scenario outcome ranges from a probabilistic simulation, reviewed by finance, with a two-page plain-language explanation."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Define a distribution for each main driver within every scenario"
                - "Run the simulation separately for each scenario"
                - "Ask finance and one sceptical executive to check the results"
                - "Write a two-page plain-language explanation of the ranges"
            - name: Climate scenario analysis for strategic resilience
              description: |-
                ## Purpose
                Investors, lenders and some regulators now expect organisations to show how their strategy holds up under different climate pathways, from fast policy-led transition to severe physical impacts. Using published reference pathways as a starting point and testing your own assets, markets and supply chain against them gives a disclosure-ready view that also informs real decisions.

                ## Milestones
                1. Two or three published climate reference pathways chosen and documented.
                2. Transition and physical risks mapped to the organisation's assets, markets and suppliers.
                3. Financial effects estimated for each pathway in ranges.
                4. Findings fed into the strategy and reviewed with the people who prepare disclosures.

                ## Notes
                Check current disclosure requirements in your jurisdiction with your reporting advisers before deciding the format.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A climate scenario analysis using two or three published pathways, with financial ranges and findings reviewed by the disclosure team."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Choose two or three published climate pathways to use"
                - "Map transition and physical risks to assets, markets and suppliers"
                - "Estimate financial effects in ranges for each pathway"
                - "Update the climate scenario analysis with new pathway data @recurring(yearly)"
            - name: Geopolitical and supply chain scenario stress test
              description: |-
                ## Purpose
                Trade disputes, sanctions and regional conflict have shown how quickly a supply chain built for cost can fail. Building three or four geopolitical scenarios for your critical inputs, and tracing which suppliers, routes and customers each would disrupt, gives procurement and operations a clear list of where to diversify or hold buffer stock.

                ## Milestones
                1. The twenty most critical inputs mapped to supplier countries and shipping routes.
                2. Three or four geopolitical scenarios written for the regions involved.
                3. Disruption to each critical input estimated under every scenario.
                4. A prioritised list of diversification or buffer actions agreed with operations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Critical inputs mapped against three or four geopolitical scenarios, with a prioritised diversification and buffer action list agreed with operations."
                cadence: phased
                effort_hours_estimate: "28"
              tasks:
                - "Map the twenty most critical inputs to countries and routes"
                - "Write three or four geopolitical scenarios for those regions"
                - "Estimate disruption to each input under every scenario"
                - "Rerun the stress test with procurement and operations @recurring(yearly)"
            - name: Technology disruption scenarios ten years out
              description: |-
                ## Purpose
                Technology shifts tend to be overestimated over two years and underestimated over ten. Scenarios built specifically around the pace of adoption and who captures the value, for example incumbents, platforms or new entrants, help leaders decide which capabilities to build, buy or partner for before the window closes.

                ## Milestones
                1. Five to eight technologies relevant to the business shortlisted with evidence of their maturity.
                2. Two axes chosen, usually adoption pace and who captures value.
                3. Four scenarios written showing the business model in each future.
                4. Capability decisions of build, buy, partner or wait recorded for each technology.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four technology scenarios with a recorded build, buy, partner or wait decision for each of five to eight shortlisted technologies."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Shortlist five to eight technologies with evidence of maturity"
                - "Choose two axes and sketch the four scenarios"
                - "Describe how the business model works in each scenario"
                - "Record a build, buy, partner or wait decision for each technology"
            - name: Scenario tests in capital investment approvals
              description: |-
                ## Purpose
                Large investments are still usually approved on a single business case with a sensitivity table that varies one number at a time. Requiring every proposal above a threshold to show its return under each scenario, and say what would trigger a pause, makes scenario thinking part of how capital is actually spent.

                ## Milestones
                1. An investment threshold agreed above which scenario tests are required.
                2. A one-page scenario test section added to the business case template.
                3. Finance and the investment committee briefed on reading it.
                4. Every qualifying proposal checked for a completed scenario section.

                ## Notes
                Keep the section to one page. Long scenario appendices get skipped by investment committees.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A scenario test section in the business case template, required above an agreed threshold, with every qualifying proposal checked monthly."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree the investment threshold with the finance director"
                - "Draft a one-page scenario test section for the business case template"
                - "Brief the investment committee on reading the new section"
                - "Check new proposals for a completed scenario section @recurring(monthly:18)"
            - name: Scenario practice maturity review
              description: |-
                ## Purpose
                After two or three rounds, it is worth asking honestly whether scenarios changed any decision, or only produced attractive documents. Reviewing the decisions they informed, the signposts that worked and the surprises they missed, against a simple maturity scale, shows where to invest next and whether the practice still earns its cost.

                ## Milestones
                1. Every decision the scenarios informed in the last two years listed.
                2. Signposts that gave early warning and those that did not identified.
                3. Major surprises the scenarios missed analysed for why.
                4. A maturity rating and three improvements agreed with the sponsor.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written maturity review listing decisions informed, signpost performance and missed surprises, with three improvements agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every decision the scenarios informed in the last two years"
                - "Mark which signposts gave early warning and which did not"
                - "Analyse the biggest surprises the scenarios missed"
                - "Agree a maturity rating and three improvements with the sponsor"
---

# Strategic Scenario Planning

This area is for strategy directors, executives and business unit leaders who need their plans to survive a future nobody can forecast. It starts with the foundations (a focal question, a sponsor and team, the assumptions already baked into the plan, interviews and the split between what is known and what is truly uncertain), moves through the recurring machinery of signposts, scanning and refreshes, then the skills of building, writing and facilitating scenarios, the decisions about options and no-regret moves, the workshops and board sessions themselves, variants for business units, groups and regulated bodies, and finally specialist work on quantified, climate, supply chain and technology scenarios.

What repeats is a weekly scanning hour and a monthly scanning note, monthly signpost, assumption, weak signal and trigger reviews on different days, quarterly scenario check-ins with the executive team, risk and option reviews, and a yearly refresh of the scenario set, the archive and the budget ranges. The Metrics log, Reading queue, Meeting notes, Risk register and Vendor templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
