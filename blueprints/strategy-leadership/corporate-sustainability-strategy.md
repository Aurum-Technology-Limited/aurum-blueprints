---
id: strategy-leadership.corporate-sustainability-strategy
name: Corporate Sustainability Strategy
description: "Double materiality, an agreed ambition and target set, board oversight and claims control, then the transition plan, capital tests and pay links that put sustainability into the core business."
category: business
version: 1.0.0
tags: [strategy-leadership, corporate-sustainability-strategy, enterprise, manager, esg, materiality, climate-targets, sustainability-governance]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - risk-register
    - compliance-control
    - training-program
    - board-meeting
    - onboarding-30-60-90
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Corporate Sustainability Strategy
          description: "Setting an organisation's environmental and social strategy, with targets, accountability and integration into the core business."
          projects:
            - name: Sustainability starting-point audit
              description: |-
                ## Purpose
                Most organisations already have scattered commitments before anyone writes a strategy: a net zero pledge in an old annual report, a supplier code, a diversity target and three different emissions figures. Gathering every existing commitment, metric, policy and public claim into one table shows what has been promised, what is measured and where the gaps and contradictions sit, so the strategy starts from fact rather than memory.

                ## Milestones
                1. Every public sustainability commitment of the last five years listed with its source, date and owner.
                2. Current environmental and social metrics listed with who produces them and how often.
                3. Policies, certifications and memberships in force recorded in the same table.
                4. Contradictions and orphaned commitments, with no owner or no data, flagged for the executive sponsor.

                ## Notes
                Search annual reports, tender responses and investor presentations, not just the sustainability web page. Commitments made in sales documents count too.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A single table of existing commitments, metrics, policies and memberships, with gaps and contradictions flagged, is shared with the executive sponsor."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Search the last five annual reports for sustainability commitments"
                - "Ask sales and procurement for recent tender answers that mention sustainability"
                - "List every environmental and social metric currently reported and its producer"
                - "Flag commitments with no owner, no data or a conflicting figure"
            - name: Sustainability disclosure obligations map
              description: |-
                ## Purpose
                Disclosure rules now differ by country, listing venue, size and sector, and some reach a company through its customers, lenders or parent before any law names it directly. A map of which rules apply to which legal entities, from which reporting year, sets the floor the strategy must meet and the timetable it has to keep.

                ## Milestones
                1. Each legal entity and listing set against the disclosure regimes that could apply.
                2. Applicability confirmed with legal counsel or the external auditor for each regime.
                3. First reporting year and required content noted for every regime that applies.
                4. Indirect requirements arriving through customers, lenders or a parent company recorded separately.

                ## Notes
                Treat this as a planning map, not a legal opinion. Legal and finance own the conclusions; this project makes sure the strategy team knows them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated obligations map, checked by legal counsel, shows each applicable disclosure regime, the entities in scope and the first reporting year."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every legal entity, listing and country of operation in one sheet"
                - "Ask legal counsel which disclosure regimes apply to each entity"
                - "Record the first reporting year and required content for each regime"
                - "Check for new or changed disclosure rules in each country of operation @recurring(quarterly)"
            - name: Double materiality assessment with stakeholder input
              description: |-
                ## Purpose
                A double materiality assessment asks two questions about every sustainability topic: how the organisation affects people and the environment, and how the topic could affect the organisation's finances. Done with real stakeholder input and scored against written thresholds, it decides which topics the strategy covers and which it deliberately leaves out, and several reporting standards expect to see the method behind it.

                ## Milestones
                1. A long list of 30 to 60 candidate topics drawn from standards, peers and the starting-point audit.
                2. Interviews or surveys completed with at least six stakeholder groups, including employees and affected communities.
                3. Impact and financial scores assigned to each topic against written thresholds.
                4. A shortlist of material topics signed off by the executive sponsor, with the method documented.

                ## Notes
                Agree the scoring thresholds before scoring, or the ranking drifts toward the topics people already care about. Keep the evidence, because assurance providers ask for it.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented double materiality assessment with stakeholder evidence, scoring thresholds and a signed-off list of material topics exists."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Draft a long list of sustainability topics from standards and peer reports"
                - "Choose the stakeholder groups to consult and how to reach each one"
                - "Write impact and financial materiality thresholds before scoring begins"
                - "Run stakeholder interviews and record the evidence for each topic"
                - "Present the material topics and method to the executive sponsor for sign-off"
            - name: Sustainability governance charter and sponsor
              description: |-
                ## Purpose
                Strategies without a named executive owner and a board committee that asks about them quietly turn into communications exercises. A short charter that says who sponsors the strategy, which board committee oversees it, what the steering group decides and how often each meets gives the work authority inside the organisation.

                ## Milestones
                1. An executive sponsor named and a board committee given sustainability oversight in its terms of reference.
                2. Steering group membership agreed, with finance, operations, procurement, HR and legal represented.
                3. Decision rights written down: what the steering group decides, what goes to the executive team and what goes to the board.
                4. The charter approved by the chief executive and filed with the company secretary.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved governance charter names the sponsor, the overseeing board committee, the steering group members and their decision rights."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the chief executive who sponsors the sustainability strategy"
                - "Ask the company secretary which committee terms of reference need changing"
                - "Draft the steering group membership and decision rights on one page"
                - "Get the charter approved and filed with the company secretary"
            - name: Sustainability metric ownership map
              description: |-
                ## Purpose
                Emissions sit with facilities, workforce data with HR, supplier data with procurement and waste figures with a contractor, and nobody owns the whole picture. Naming an owner, a source system, a frequency and the known quality issues for every metric the strategy will rely on is what makes later targets measurable and later assurance possible.

                ## Milestones
                1. Every metric needed for the material topics listed with its definition.
                2. An accountable owner and source system recorded for each metric.
                3. Data quality rated as measured, estimated or missing for each one.
                4. A remediation owner named for the five weakest metrics.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metric map lists every strategic sustainability metric with owner, source, frequency and quality rating, plus remediation owners for the five weakest."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the metrics each material topic will need"
                - "Name an owner and source system for each metric"
                - "Rate each metric as measured, estimated or missing"
                - "Agree remediation owners for the five weakest metrics"
            - name: Sustainability ambition and priorities statement
              description: |-
                ## Purpose
                Before targets come choices: whether the organisation aims to comply, to match its peers, or to lead in two or three topics where it has real influence. A one-page statement of ambition and three to five strategic priorities, tied to the material topics and the business strategy, gives leaders something to test every later proposal against.

                ## Milestones
                1. Three ambition options written up, from compliance-led to leadership in chosen topics, with costs and risks.
                2. The executive team's chosen level recorded with its reasons.
                3. Three to five strategic priorities named, each linked to a material topic and a business goal.
                4. A one-page statement circulated to the board committee for comment.

                ## Notes
                Leading on everything is not an ambition. Pick the few topics where the organisation's scale, products or supply chain give it genuine influence.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page ambition statement with three to five priorities, chosen by the executive team from written options, is shared with the board committee."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft three ambition options with indicative cost and risk for each"
                - "Ask the agent to summarise how five peers frame their sustainability ambition"
                - "Hold an executive session to choose the ambition level"
                - "Write the priorities on one page and send it to the board committee"
            - name: Target architecture across climate, nature and social goals
              description: |-
                ## Purpose
                Targets set one at a time, in response to whichever stakeholder asked last, end up inconsistent: an absolute emissions target beside an intensity water target, different base years, social targets with no baseline. Designing the whole set together, with consistent base years, a mix of outcome and input measures and a named owner for each, makes the targets credible to investors and usable by managers.

                ## Milestones
                1. A target sheet covering each strategic priority, with metric, base year, target year and level.
                2. Climate targets checked against a recognised science-based method, with the decision on external validation recorded.
                3. Each target given an accountable executive and an interim milestone.
                4. Targets stress-tested with finance for cost and with operations for feasibility.

                ## Notes
                Targets nobody in the business plan can reach are worse than modest ones, because they invite accusations of greenwashing later. Detailed decarbonisation project planning belongs in a separate net zero programme.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A complete target sheet with consistent base years, owners and interim milestones has been reviewed by finance and operations and approved by the sponsor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List a candidate target for each strategic priority with metric and base year"
                - "Check climate targets against a recognised science-based method"
                - "Ask finance to cost the three most expensive targets"
                - "Agree an accountable executive and interim milestone for every target"
            - name: Multi-year sustainability budget and team case
              description: |-
                ## Purpose
                Ambition without a budget line becomes a list of favours asked of other departments. A three-year case covering the central team, data systems, external assurance and the capital and operating costs of the first initiatives lets the finance director weigh the strategy alongside every other claim on money.

                ## Milestones
                1. Central team roles and costs set out for three years.
                2. Data system, assurance and advisory costs estimated from quotes or benchmarks.
                3. First-wave initiative costs and savings drawn from the business units' own estimates.
                4. A funding decision recorded in the annual budget round.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A three-year sustainability budget case is submitted in the budget round and the funding decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set out the central team roles needed for the next three years"
                - "Get two quotes each for sustainability data software and external assurance"
                - "Collect first-wave initiative costs from each business unit"
                - "Submit the case to the finance director before the budget round closes"
            - name: Written sustainability strategy and one-page summary
              description: |-
                ## Purpose
                Once materiality, ambition and targets are settled, they need to live in one document the organisation can read: why these priorities, what will change, who owns it, what it costs and how progress will be shown. A full strategy paper for the executive team and board, with a one-page summary for managers, stops each department retelling the strategy in its own words.

                ## Milestones
                1. A strategy paper of 10 to 20 pages covering context, materiality, priorities, targets, governance and resourcing.
                2. A one-page summary with the priorities, headline targets and owners.
                3. Comments gathered from every steering group member and resolved.
                4. Final versions stored where the board pack and intranet can link to them.

                ## Notes
                Write the reasoning, not only the conclusions. A manager two levels down should be able to explain why a topic was left out.
              priority: high
              deadlineOffsetDays: 210
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A finished strategy paper and one-page summary, reviewed by every steering group member, are ready for the board approval session."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Outline the strategy paper with a section for each decision already taken"
                - "Write the one-page summary before the full paper"
                - "Circulate the draft to the steering group with a ten-day comment window"
                - "Resolve comments and store the final versions in the board pack folder"
            - name: Sustainability steering group operating rhythm
              description: |-
                ## Purpose
                A steering group that meets only when a report is due spends its time approving text. A monthly working session for blockers and a quarterly decision meeting with the sponsor, each with a fixed agenda and a decision log, keeps cross-functional owners moving between board cycles.

                ## Milestones
                1. A standing monthly session and quarterly decision meeting in every member's diary.
                2. A fixed agenda in use: target status, blocked initiatives, decisions needed, risks.
                3. A decision log kept, with owner and date for each decision.
                4. Attendance and decisions reviewed after the first two quarters.

                ## Notes
                Start from the **Meeting notes** template for each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly sessions and quarterly decision meetings have run for two quarters, with every decision recorded in the log with an owner."
                cadence: rolling
              tasks:
                - "Book the standing monthly and quarterly meetings for the next year"
                - "Write the fixed agenda and share it with members"
                - "Run the monthly steering working session and update the decision log @recurring(monthly:9)"
                - "Hold the quarterly decision meeting with the executive sponsor @recurring(quarterly)"
            - name: Monthly sustainability performance review
              description: |-
                ## Purpose
                Annual numbers arrive too late to change the year. Pulling the handful of indicators that move monthly, such as energy use, waste, safety incidents, employee turnover and supplier coverage, into one review lets owners correct course while there is still time.

                ## Milestones
                1. Eight to twelve monthly indicators chosen from the target sheet.
                2. A one-page monthly view showing actual, plan and trend for each.
                3. Owners commenting on any indicator off plan by more than an agreed margin.
                4. The view feeding the steering group pack every month.

                ## Notes
                Start from the **Metrics log** template. Some metrics, such as value chain emissions, will only ever be annual, so do not force them into a monthly view.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly sustainability view of eight to twelve indicators, with owner comments on variances, has been produced for six consecutive months."
                cadence: rolling
              tasks:
                - "Pick eight to twelve indicators from the target sheet that move monthly"
                - "Set the variance margin that triggers an owner comment"
                - "Build the monthly view from the metrics log template"
                - "Collect the monthly figures and owner comments for the steering pack @recurring(monthly:14)"
            - name: Board committee sustainability reporting cycle
              description: |-
                ## Purpose
                Directors are increasingly expected to show that they oversee sustainability risks and targets, and a slide at the back of the pack does not show that. A quarterly report to the overseeing committee, with progress against targets, the top risks and one discussion item, gives the board something real to challenge.

                ## Milestones
                1. A report format agreed with the committee chair: progress, risks, decisions, upcoming disclosures.
                2. A forward plan of focus topics for four quarterly meetings.
                3. One focus topic per meeting, chosen with the chair, covered in depth.
                4. Committee questions and actions logged and answered by the next meeting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly sustainability reports have gone to the overseeing committee, with every committee action answered by the following meeting."
                cadence: cyclic
              tasks:
                - "Agree the report format with the committee chair"
                - "Draft a forward plan of focus topics for the next four meetings"
                - "Prepare the quarterly sustainability report for the committee @recurring(quarterly)"
                - "Log committee questions and assign an owner to each answer"
            - name: Glide path tracking for each target
              description: |-
                ## Purpose
                A target for a year seven years away tells nobody whether this year is on track. Drawing an expected path from base year to target year, and plotting actuals against it each quarter, shows early which targets are slipping and whether a gap is about timing or a real shortfall.

                ## Milestones
                1. A glide path drawn for every quantified target, with the assumptions behind its shape.
                2. Actuals plotted quarterly, or annually where data only arrives once a year.
                3. A status of on track, at risk or off track agreed for each target.
                4. A written rule for when base years are recalculated after acquisitions or method changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quantified target has a glide path with actuals plotted and a current status agreed with its owner."
                cadence: rolling
              tasks:
                - "Draw the expected path from base year to target year for each target"
                - "Write the recalculation rule for acquisitions, disposals and method changes"
                - "Plot actuals against each glide path and agree status with owners @recurring(quarterly)"
                - "Check whether any base year needs recalculating under the rule @recurring(yearly)"
            - name: Sustainability risks in the enterprise risk register
              description: |-
                ## Purpose
                Climate, supply chain labour, water and regulatory risks often sit in a separate sustainability spreadsheet the risk committee never sees. Putting them into the enterprise register, scored on the same scale as every other risk with an owner and controls, means they compete for attention and money on equal terms.

                ## Milestones
                1. Sustainability risks identified from the materiality assessment and climate risk work.
                2. Each risk scored on the enterprise scale with owner, controls and actions.
                3. The risks entered into the enterprise register, not a parallel list.
                4. The chief risk officer confirming they are reviewed in the normal cycle.

                ## Notes
                Start from the **Risk register** template if the enterprise register cannot yet hold these risks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sustainability risks sit in the enterprise risk register, scored on its scale with owners and controls, and are reviewed in the normal quarterly cycle."
                cadence: rolling
              tasks:
                - "Pull candidate risks from the materiality and climate risk work"
                - "Score each risk with the chief risk officer on the enterprise scale"
                - "Enter the risks with owners and controls into the enterprise register"
                - "Review sustainability risk scores and actions with risk owners @recurring(quarterly)"
            - name: Sustainability questionnaire and tender answer library
              description: |-
                ## Purpose
                Large customers, lenders and rating agencies send long sustainability questionnaires, and answering each from scratch takes weeks and produces inconsistent figures. A maintained library of approved answers, evidence and current numbers, with one owner, lets sales and investor relations respond quickly and say the same thing everywhere.

                ## Milestones
                1. The last twelve months of questionnaires collected and their common questions grouped.
                2. Approved standard answers written for the 50 most common questions.
                3. Each answer linked to its evidence and its owner.
                4. A request route in place so new questionnaires arrive in one inbox.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An approved answer library covering the 50 most common questions, with evidence links, is used for every new questionnaire."
                cadence: rolling
              tasks:
                - "Collect every sustainability questionnaire answered in the last twelve months"
                - "Group the questions and draft standard answers for the 50 most common"
                - "Ask the agent to compare a new questionnaire with the library and draft the gaps"
                - "Refresh library figures and clear the queue of open questionnaires @recurring(monthly:5)"
            - name: Environmental and social claims sign-off control
              description: |-
                ## Purpose
                Regulators and courts in several countries now act against vague or unsupported green claims, and the claim that causes trouble is usually written at short notice for a campaign or a pack. A sign-off control for every public sustainability claim, checked for evidence, scope and wording before publication, protects the strategy's credibility.

                ## Milestones
                1. A claims policy listing words that need evidence before use, such as carbon neutral or eco-friendly.
                2. A sign-off route covering marketing, product, sustainability and legal.
                3. A claims log holding each approved claim, its evidence and its review date.
                4. Existing website and packaging claims checked against the policy.

                ## Notes
                Start from the **Compliance control** template. Legal counsel decides whether a claim is lawful; this control makes sure the question is asked every time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every public sustainability claim since the control began has a log entry with evidence and sign-off, and legacy claims have been checked."
                cadence: rolling
              tasks:
                - "Draft a claims policy naming the words that need evidence before use"
                - "Agree the sign-off route with marketing and legal"
                - "Check existing website and packaging claims against the policy"
                - "Review the claims log for expiring evidence and new claims @recurring(monthly:22)"
            - name: Annual sustainability strategy refresh
              description: |-
                ## Purpose
                Regulation, technology costs, customer demands and the organisation itself shift every year, and a strategy left untouched for three years drifts out of date. A yearly refresh, timed to finish before the business planning round, tests whether the material topics, targets and priorities still hold and feeds any changes into budgets.

                ## Milestones
                1. A refresh timetable set to finish before the annual planning round starts.
                2. Material topics checked against new stakeholder input and regulation.
                3. Targets and priorities confirmed, raised or reset, with reasons recorded.
                4. Changes reflected in business plan and budget submissions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly refresh note, completed before the planning round, records which topics, targets and priorities changed and why."
                cadence: cyclic
              tasks:
                - "Set this year's refresh dates against the planning round calendar"
                - "Gather new stakeholder input and regulatory changes since the last refresh"
                - "Run the annual strategy refresh workshop with the steering group @recurring(yearly)"
                - "Send agreed changes to finance for the business plan"
            - name: Assurance readiness evidence files
              description: |-
                ## Purpose
                External assurance of sustainability data is becoming a requirement in more places, and assurers ask for the same things: definitions, calculations, source documents, controls and sign-offs. Building an evidence file for each reported metric through the year, rather than in the fortnight before reporting, cuts assurance cost and avoids late restatements.

                ## Milestones
                1. An evidence file for each reported metric, with definition, method and source documents.
                2. The key control over each metric written down and tested once.
                3. A mock assurance walkthrough held with internal audit on three metrics.
                4. Findings from the walkthrough closed before external assurance begins.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reported metric has an evidence file with method and controls, and internal audit's mock walkthrough findings are closed."
                cadence: cyclic
              tasks:
                - "Create an evidence file for each metric due for external assurance"
                - "Write the key control over each metric and who performs it"
                - "Ask internal audit to walk through three metrics as an assurer would"
                - "Check evidence files are complete for the quarter just closed @recurring(quarterly)"
            - name: Executive team climate and transition briefings
              description: |-
                ## Purpose
                Executives asked to approve targets and capital plans often lack shared basics: what scope 1, 2 and 3 emissions mean, why absolute and intensity targets differ, how carbon prices and physical risks could hit the business. A short series of briefings built around the organisation's own numbers gives the team a common language before the big decisions.

                ## Milestones
                1. Four 60-minute briefings planned: emissions basics, targets, climate risk, regulation and markets.
                2. Each briefing built around the organisation's own data and sector.
                3. A one-page glossary circulated to the executive team.
                4. Remaining questions collected and answered in writing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four briefings have been delivered to the executive team, a glossary circulated and outstanding questions answered in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask each executive what they most need to understand before approving targets"
                - "Plan four briefings using the organisation's own emissions and risk data"
                - "Write a one-page glossary of the terms used in the briefings"
                - "Answer the questions left over from the briefings in writing"
            - name: Working knowledge of ISSB, GRI and ESRS
              description: |-
                ## Purpose
                The main reporting frameworks overlap but ask different questions: the ISSB standards focus on financial effects for investors, GRI on impacts for a wide audience, and the European ESRS on both. Knowing what each requires, and which the organisation must or chooses to use, stops the strategy team designing metrics that no framework asks for and missing ones that several do.

                ## Milestones
                1. A summary page per framework covering audience, materiality lens and main disclosure areas.
                2. A comparison table mapping material topics to the relevant disclosures in each.
                3. The frameworks the organisation must use, and those it chooses to use, recorded.
                4. Gaps between current metrics and required disclosures listed.

                ## Notes
                Read the standard setters' own summaries and guidance first, because secondary digests vary in accuracy and date quickly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table maps each material topic to ISSB, GRI and ESRS disclosures, with the frameworks in use recorded and metric gaps listed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the standard setters' own overview of each framework"
                - "Write a one-page summary of each framework's audience and focus"
                - "Map each material topic to the disclosures each framework requires"
                - "List metrics required by the chosen frameworks that are not yet collected"
            - name: How ESG ratings are built and read
              description: |-
                ## Purpose
                ESG ratings from different providers often disagree sharply about the same company, because each weighs different issues and relies on different data. Understanding how the two or three ratings that matter to your investors and customers are built shows which scores reflect real performance, which reflect missing disclosure, and where effort would and would not change the outcome.

                ## Milestones
                1. The ratings that investors, lenders and key customers actually use identified.
                2. Each provider's method summarised: issues weighted, data sources, update cycle.
                3. The organisation's latest report from each provider read and factual errors noted.
                4. A short note separating disclosure gaps from performance gaps.

                ## Notes
                Chasing a score for its own sake pulls effort away from material topics. Correct factual errors, but do not rewrite the strategy to suit a methodology.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note covers the two or three ratings that matter, how each is built, the factual errors raised with providers and the disclosure versus performance gaps."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask investor relations which ESG ratings investors mention most"
                - "Summarise each provider's published method on one page"
                - "Send corrections for factual errors in the latest rating reports"
                - "Read the new rating reports from each provider when they arrive @recurring(yearly)"
            - name: Physical and transition climate risk literacy
              description: |-
                ## Purpose
                Climate risk reaches a business in two ways: physical damage from floods, heat and storms at sites and in supply chains, and transition effects from carbon prices, regulation, technology and shifting demand. Learning how each is identified, scored and expressed in financial terms prepares the team for the scenario analysis that disclosure standards and lenders increasingly expect.

                ## Milestones
                1. Acute and chronic physical risks, and policy, market, technology and reputation transition risks, written up with sector examples.
                2. Three public climate scenario sets reviewed, with their main assumptions noted.
                3. A first list of the organisation's most exposed sites, suppliers and products.
                4. Questions for the specialist scenario work recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written primer on physical and transition risk with sector examples, a review of three scenario sources and a first exposure list exist."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the climate risk categories set out in the main disclosure guidance"
                - "Review three public climate scenario sets and note their assumptions"
                - "List the sites, suppliers and products most exposed to each risk type"
                - "Write the questions the scenario analysis will need to answer"
            - name: Internal carbon pricing fundamentals
              description: |-
                ## Purpose
                An internal carbon price puts a cost on emissions inside decisions that otherwise ignore them, but the term covers very different tools: a shadow price used only in investment appraisal, an internal fee charged to business units, or an implicit price derived from what reduction projects cost. Understanding the options and how peers set their levels prepares the executive team for the decision itself.

                ## Milestones
                1. Shadow price, internal fee and implicit price approaches each described with their pros and cons.
                2. Internal carbon prices disclosed by five sector peers collected.
                3. Effects on two recent investment decisions worked through as examples.
                4. A briefing note ready for the carbon price decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A briefing note compares the three internal carbon pricing approaches, peer price levels and two worked examples from recent investment decisions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read two practical guides on internal carbon pricing approaches"
                - "Collect the internal carbon prices that sector peers have disclosed"
                - "Rework two recent investment cases with a shadow carbon price"
                - "Write a briefing note for the executive team"
            - name: Human rights due diligence for executives
              description: |-
                ## Purpose
                The UN Guiding Principles on Business and Human Rights and the OECD guidelines expect companies to identify and address human rights harms in their operations and value chains, and some countries now make this law. Executives who understand what due diligence involves, from risk mapping to grievance mechanisms and remedy, can judge whether the organisation's approach is credible.

                ## Milestones
                1. The core steps of human rights due diligence summarised from the UN Guiding Principles.
                2. The highest-risk operations, sourcing countries and worker groups identified.
                3. Current policies, audits and grievance channels compared with the expected steps.
                4. Gaps presented to the executive team with suggested owners.

                ## Notes
                Detailed supplier auditing sits with procurement. This project is about leaders understanding the duty and where the organisation falls short of it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The executive team has received a gap analysis comparing current practice with the UN Guiding Principles steps, with an owner suggested for each gap."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the summary of the UN Guiding Principles on Business and Human Rights"
                - "List high-risk operations, sourcing countries and worker groups"
                - "Compare current policies and grievance channels with the expected steps"
                - "Present the gaps and suggested owners to the executive team"
            - name: Sustainability programme for senior managers
              description: |-
                ## Purpose
                The managers who run plants, product lines and sales regions make most of the decisions that move the targets, and many have only read the press release. A short programme for the top hundred or so managers, covering the strategy, their unit's targets and the tools they will use, turns the strategy into something they can apply in budgets and plans.

                ## Milestones
                1. A programme of three sessions designed with HR learning: the case, the targets, the tools.
                2. Unit-specific examples and data prepared for each cohort.
                3. At least 80 percent of the target managers through the programme.
                4. Feedback collected and a shorter version ready for new joiners.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least 80 percent of the named senior managers have completed the three-session programme and feedback has shaped a version for new joiners."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the list of managers and cohort sizes with HR learning"
                - "Design three sessions covering the case, the targets and the tools"
                - "Prepare unit-specific data and examples for each cohort"
                - "Track completion and collect feedback after each cohort"
            - name: Climate transition plan tied to the business plan
              description: |-
                ## Purpose
                Investors and regulators increasingly look past targets to the transition plan: the actions, capital, technology assumptions and dependencies that will get the organisation there, and whether they appear in the financial plan. A transition plan the finance director recognises, with costed levers and decision points, is what separates a credible commitment from a pledge.

                ## Milestones
                1. Decarbonisation levers listed with the emissions they address, cost, timing and owner.
                2. Capital and operating costs of the levers reflected in the medium-term financial plan.
                3. Dependencies outside the organisation's control, such as grid decarbonisation or supplier action, stated openly.
                4. Decision points and the triggers for revisiting the plan written down.
                5. The plan approved by the board, with the disclosure approach agreed.

                ## Notes
                Follow the structure of a recognised transition plan framework so readers can compare it with peers. Engineering detail for individual projects belongs in the net zero programme.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board-approved transition plan lists costed levers, owners and dependencies, and its costs appear in the medium-term financial plan."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List the decarbonisation levers each business unit has identified"
                - "Ask finance to place lever costs in the medium-term plan"
                - "Write down the external dependencies and what happens if they slip"
                - "Set decision points and review triggers for the plan"
                - "Take the plan to the board for approval"
            - name: Internal carbon price decision
              description: |-
                ## Purpose
                With the options understood, the executive team has to choose whether to use a carbon price at all, which form, at what level, how it rises over time and which decisions it applies to. Recording that choice, and testing it on a live investment case, turns a policy idea into something finance can apply consistently.

                ## Milestones
                1. A decision on whether to use an internal carbon price, and in which form.
                2. A price level and escalation path set, with the reasons recorded.
                3. The decisions and thresholds it applies to written into the investment appraisal guidance.
                4. The price applied to one live investment case as a test.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The executive team's decision on an internal carbon price, its level, escalation and scope, is recorded and written into appraisal guidance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Present the carbon pricing briefing note to the executive team"
                - "Record the chosen form, level and escalation path"
                - "Update the investment appraisal guidance with the carbon price"
                - "Review the carbon price level against market and peer prices @recurring(yearly)"
            - name: Sustainability tests in capital investment cases
              description: |-
                ## Purpose
                New plants, fleets and buildings can lock in emissions and social impacts for twenty years, and if the investment template does not ask about them nobody does. Adding a few required questions to every capital case above a threshold, covering emissions, alignment with targets, climate exposure and community effects, puts the strategy into the decisions that matter most.

                ## Milestones
                1. A capital value threshold agreed above which the sustainability section is required.
                2. Five to seven required questions added to the capital case template.
                3. Investment committee members briefed on how to weigh the answers.
                4. The first three cases through the new template reviewed for usefulness.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The capital case template carries a required sustainability section above an agreed threshold, and three cases have been reviewed through it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the capital threshold for the sustainability section with finance"
                - "Draft five to seven required questions for the capital case template"
                - "Brief investment committee members on the new section"
                - "Review the first three cases that used the section"
            - name: Sustainability measures in executive pay
              description: |-
                ## Purpose
                Linking part of executive bonuses or long-term incentives to sustainability targets signals priority, but poorly chosen measures pay out for things that would have happened anyway. Choosing a small number of measurable, material targets, with stretch levels set from the glide path and verified data behind them, makes the link defensible to shareholders.

                ## Milestones
                1. Options compared: annual bonus measures, long-term incentive measures or none.
                2. Two or three candidate measures chosen from the target sheet, each with verified data.
                3. Threshold, target and stretch levels set against the glide path.
                4. A recommendation taken to the remuneration committee and its decision recorded.

                ## Notes
                The remuneration committee and its advisers own the pay decision. This project prepares the sustainability side of it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The remuneration committee has decided on sustainability measures in executive pay from a written recommendation with verified measures and levels."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Compare how five peers link sustainability targets to executive pay"
                - "Shortlist two or three measures that have verified data"
                - "Set threshold, target and stretch levels against the glide path"
                - "Check that pay measures still match the current targets @recurring(yearly)"
            - name: Low-carbon exposure and opportunity review of the product range
              description: |-
                ## Purpose
                Some products will lose demand or margin as carbon costs, regulation and customer preferences shift, while others will gain. Sorting the range into exposed, neutral and advantaged groups, and sizing the revenue in each, tells the strategy where the commercial case for sustainability is real and where it is wishful.

                ## Milestones
                1. Each product line classed as exposed, neutral or advantaged, with the reasoning.
                2. Revenue and margin in each group sized from the latest accounts.
                3. The three biggest opportunities described with customer evidence.
                4. Recommendations passed into the business planning round.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review classes every product line by low-carbon exposure, sizes revenue in each group and sends three evidenced opportunities into planning."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List product lines with their latest revenue and margin"
                - "Class each line as exposed, neutral or advantaged with a reason"
                - "Interview five key customers about how their requirements are changing"
                - "Write up the three biggest opportunities for the planning round"
            - name: Sustainability-linked financing options
              description: |-
                ## Purpose
                Green bonds, sustainability-linked loans and similar instruments tie the use or cost of debt to environmental or social outcomes, and lenders now ask about targets in ordinary refinancing too. Working through the options with the treasurer, before a refinancing forces the question, shows whether the targets and data are strong enough to support one and what reporting it would commit the organisation to.

                ## Milestones
                1. Instrument types described with their reporting and verification demands.
                2. The organisation's targets checked for suitability as financing performance indicators.
                3. The treasurer's view on timing against upcoming refinancing recorded.
                4. A decision to pursue, wait or decline, with the reasons.

                ## Notes
                Treasury and the organisation's financial advisers own the financing decision. This project makes sure the sustainability evidence is ready if they proceed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to pursue, wait on or decline sustainability-linked financing, made with the treasurer and based on the target and data review."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the treasurer when the next refinancing or new borrowing is planned"
                - "Summarise the reporting demands of green and sustainability-linked instruments"
                - "Check which targets could serve as financing performance indicators"
                - "Record the decision and the evidence needed to proceed"
            - name: Coalition and pledge membership decision
              description: |-
                ## Purpose
                Industry coalitions, pledges and initiatives multiply quickly, and each adds reporting, fees and public commitments that someone has to keep. Reviewing current memberships and new invitations against the strategy, and keeping the few that genuinely advance the priorities, stops the organisation signing up to more than it can deliver.

                ## Milestones
                1. Every current membership, pledge and initiative listed with its cost and obligations.
                2. Each scored against the strategic priorities and the effort it demands.
                3. Memberships to keep, join or leave decided by the steering group.
                4. A written rule for how new invitations are assessed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The steering group has decided which coalitions and pledges to keep, join or leave, and a written rule governs new invitations."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every coalition, pledge and initiative the organisation belongs to"
                - "Record the fees, reporting and public commitments each involves"
                - "Take a keep, join or leave recommendation to the steering group"
                - "Review memberships and their obligations against the strategy @recurring(yearly)"
            - name: Community investment strategy linked to material topics
              description: |-
                ## Purpose
                Charitable giving, volunteering and community programmes often grow by request, spread thinly across dozens of causes with no link to the business. Focusing community investment on two or three themes tied to the material social topics and the places where the organisation operates makes it measurable and much easier to explain.

                ## Milestones
                1. Current giving, volunteering and sponsorship mapped with amounts and partners.
                2. Two or three focus themes chosen and linked to material social topics.
                3. Outcome measures agreed with the main community partners.
                4. A wind-down plan for causes outside the themes, with fair notice given.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A community investment strategy names two or three themes linked to material topics, with outcome measures agreed with partners."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map last year's giving, volunteering and sponsorships with amounts"
                - "Choose two or three themes linked to material social topics"
                - "Agree outcome measures with the main community partners"
                - "Review community investment outcomes with partners @recurring(yearly)"
            - name: Board approval session for the sustainability strategy
              description: |-
                ## Purpose
                Approval by the board gives the strategy weight, and directors who approve it become accountable for overseeing it. A dedicated session, with the strategy paper sent out early and a clear set of decisions asked for, gives directors room to challenge the ambition and the costs rather than nodding it through at the end of a long agenda.

                ## Milestones
                1. A session date agreed with the chair, with papers due ten days before.
                2. The decisions requested set out plainly: ambition, targets, resourcing, governance.
                3. Likely director challenges anticipated, with answers prepared.
                4. The board's decision and any conditions recorded in the minutes.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board has debated the strategy at a dedicated session and its approval, with any conditions, is recorded in the minutes."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the session date and paper deadline with the board chair"
                - "Write the decisions requested on the cover paper"
                - "Brief two directors in advance to hear their concerns"
                - "Share the board's decision and conditions with the steering group"
            - name: Internal launch of the sustainability strategy
              description: |-
                ## Purpose
                Staff usually hear about a sustainability strategy from the press release, which says nothing about their own work. A planned launch, with the chief executive explaining the reasons, managers briefed first and each unit told what changes for them, turns board approval into something people act on.

                ## Milestones
                1. Managers briefed a week before the all-staff launch, with a script and question bank.
                2. A launch session led by the chief executive, recorded for those who cannot attend.
                3. Unit-level sessions held on local targets and actions.
                4. Staff questions collected and answers published within two weeks.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Managers were briefed before launch, the chief executive's session was held and recorded, and staff questions were answered within two weeks."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Draft the manager briefing script and question bank"
                - "Book the chief executive's launch session and its recording"
                - "Schedule unit-level follow-up sessions with each unit leader"
                - "Publish answers to staff questions within two weeks of launch"
            - name: Investor stewardship briefing on sustainability
              description: |-
                ## Purpose
                Investors increasingly ask for a dedicated conversation on sustainability, and stewardship teams ask questions the regular investor relations script does not cover. A prepared briefing, with the chief financial officer present and the transition plan's costs explained, shows that sustainability is part of the investment case rather than a side document.

                ## Milestones
                1. The top 20 shareholders' sustainability priorities and voting policies summarised.
                2. A briefing deck and question bank agreed with investor relations and finance.
                3. Briefings held with stewardship teams, with the chief financial officer at one or more.
                4. Investor feedback written up for the steering group and board committee.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Briefings with the main shareholders' stewardship teams have been held and their feedback is written up for the board committee."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask investor relations for the top 20 shareholders' stewardship contacts"
                - "Summarise each investor's published sustainability voting policy"
                - "Prepare the briefing deck and question bank with finance"
                - "Write up investor feedback for the board committee"
            - name: Annual climate disclosure questionnaire submission
              description: |-
                ## Purpose
                Many companies submit to an annual climate and environment disclosure platform at the request of investors or customers, and the resulting score is read by procurement teams worldwide. Treating the submission as a dated event, with data owners booked months ahead and last year's feedback applied, avoids the scramble that produces weak answers.

                ## Milestones
                1. Last year's scoring feedback reviewed and improvement points assigned.
                2. Data owners booked with deadlines working back from the submission date.
                3. Answers drafted from the answer library and reviewed by the sponsor.
                4. The submission made before the deadline and a copy archived.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "This year's disclosure questionnaire is submitted before the deadline, with last year's feedback points addressed and a copy archived."
                cadence: cyclic
              tasks:
                - "Read last year's scoring feedback and assign improvement points"
                - "Book data owners with deadlines working back from submission"
                - "Draft answers from the questionnaire library for sponsor review"
                - "Start this year's disclosure plan when the platform opens @recurring(yearly)"
            - name: First reporting year under a new disclosure standard
              description: |-
                ## Purpose
                First years under a mandatory standard are harder than any later one: new metrics, new controls, possibly first-time assurance and no prior-year comparison. Planning it as a dated milestone, working back from the publication date through a dry run, makes sure the strategy's targets and the published disclosure tell the same story.

                ## Milestones
                1. A timetable working back from the publication date, with a dry run at the half year.
                2. Every required disclosure assigned an owner and a data source.
                3. A dry-run report produced and reviewed by internal audit and the assurance provider.
                4. The final disclosure published on time, with assurance where required.

                ## Notes
                Writing the narrative report belongs with the reporting team. This project keeps the strategy and the disclosure consistent.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first disclosure under the new standard is published on time, after a half-year dry run reviewed by internal audit and the assurance provider."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Set the publication date and work back to a half-year dry run"
                - "Assign an owner and data source to every required disclosure"
                - "Produce the dry-run report for internal audit review"
                - "Close dry-run findings before the year-end data close"
            - name: Preparing for a shareholder climate resolution
              description: |-
                ## Purpose
                Shareholder groups now file resolutions asking companies for transition plans, lobbying disclosure or stronger targets, and some boards put their own climate plan to an advisory vote. Preparing before a resolution arrives, with the board's position, investor soundings and a response timetable, avoids a rushed and defensive reply in the notice period.

                ## Milestones
                1. Resolutions filed at sector peers in the last two seasons reviewed.
                2. The board's likely position on the three most probable requests agreed in principle.
                3. A response timetable agreed with the company secretary.
                4. Key investors' voting intentions sounded out through investor relations.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The board's position on the three likeliest climate resolutions and a response timetable are agreed with the company secretary before the AGM season."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Review climate resolutions filed at sector peers in the last two seasons"
                - "Agree the board's position in principle on the three likeliest requests"
                - "Set a response timetable with the company secretary"
                - "Check for new climate resolutions at peers before each AGM season @recurring(yearly)"
            - name: Chief sustainability officer's first hundred days
              description: |-
                ## Purpose
                New chief sustainability officers usually inherit commitments made by others, a small team and colleagues unsure what the role can ask of them. A plan for the first hundred days, built on listening to every executive, reading what has been promised and agreeing two or three early results with the chief executive, establishes the role's authority before the first budget fight.

                ## Milestones
                1. One-to-one conversations held with every executive and the board committee chair.
                2. Inherited commitments and their status understood and summarised.
                3. Two or three early results agreed with the chief executive.
                4. A hundred-day readout presented to the executive team.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A hundred-day readout covering inherited commitments, executive conversations and agreed early results has been presented to the executive team."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book one-to-one conversations with every executive in the first month"
                - "Read every inherited commitment and note its status"
                - "Agree two or three early results with the chief executive"
                - "Present the hundred-day readout to the executive team"
            - name: Business unit plan for its share of group targets
              description: |-
                ## Purpose
                Group targets mean little to a business unit until someone works out its share: which emissions, which sites, which suppliers and which social measures it owns. A unit leader who turns the group targets into a unit plan with actions, costs and owners can defend the budget and avoid having an allocation handed down from the centre.

                ## Milestones
                1. The unit's share of each relevant group target agreed with the central team.
                2. Actions listed with cost, timing and owner within the unit.
                3. The plan built into the unit's annual budget submission.
                4. Progress reported to the steering group each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A unit sustainability plan, agreed with the central team, carries the unit's share of each target and is reflected in its budget submission."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the central team for the unit's share of each group target"
                - "List the unit's actions with cost, timing and owner"
                - "Add the plan's costs to the unit's budget submission"
                - "Report unit progress against its target share to the steering group @recurring(quarterly)"
            - name: Sustainability strategy without a dedicated team
              description: |-
                ## Purpose
                Mid-size enterprises often face the same customer and lender questions as large groups, with one part-time person to answer them. A pared-back approach, with a short materiality exercise, five to eight targets, a quarterly management slot and outside help bought only for emissions calculation and assurance, gets a credible strategy in place without building a department.

                ## Milestones
                1. A part-time owner named, with time protected in their role.
                2. A short materiality exercise completed with input from customers and staff.
                3. Five to eight targets set with owners from the existing management team.
                4. External support budgeted only for specialist tasks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A part-time owner, five to eight targets with management owners and a budget for specialist support are agreed by the managing director."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree with the managing director who owns sustainability and for how many hours"
                - "Run a half-day materiality workshop with customer and staff input"
                - "Set five to eight targets owned by existing managers"
                - "Get quotes for emissions calculation and assurance support"
            - name: Meeting a major customer's supplier sustainability requirements
              description: |-
                ## Purpose
                When a large customer writes emissions targets, audits or disclosure into its supplier requirements, the contract can depend on the answer. Treating the requirement as a strategic project, with a gap analysis, a plan the customer can see and a decision on whether to go beyond it, can turn a compliance demand into a commercial advantage over slower competitors.

                ## Milestones
                1. The customer's requirements and deadlines listed in full.
                2. A gap analysis against current performance and data.
                3. A response plan shared with the customer's procurement team.
                4. A decision recorded on whether to meet, exceed or negotiate each requirement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A gap analysis and plan against the customer's sustainability requirements have been shared with its procurement team, with a recorded decision per requirement."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the customer's sustainability requirements and their deadlines"
                - "Compare each requirement with current performance and data"
                - "Share the response plan with the customer's procurement lead"
                - "Scan other major customers' supplier codes for new demands @recurring(quarterly)"
            - name: Bringing an acquired company onto group commitments
              description: |-
                ## Purpose
                An acquisition can change the emissions baseline, add sites in higher-risk countries and bring its own pledges that conflict with the group's. Folding the acquired company into group targets, reporting and policies within its first year, and recalculating base years under the agreed rule, keeps the strategy honest.

                ## Milestones
                1. The acquired company's commitments, data and policies reviewed against the group's.
                2. Base years recalculated where the group's recalculation rule requires it.
                3. Conflicting pledges resolved, with any public change explained.
                4. The acquired company's data included in the group's next reporting cycle.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within the first year, the acquired company's data is in group reporting, base years are recalculated as required and conflicting pledges are resolved."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Request the acquired company's sustainability commitments, data and policies"
                - "Apply the base year recalculation rule to the enlarged group"
                - "Decide how to handle any conflicting public pledges"
                - "Add the acquired company's metrics to the next reporting cycle"
            - name: Protecting sustainability commitments through a cost squeeze
              description: |-
                ## Purpose
                When revenue falls, sustainability budgets are often the first to be cut, and public targets quietly become impossible. Deciding in advance which commitments are protected, which can be slowed and how any change will be disclosed avoids a credibility crisis two years later.

                ## Milestones
                1. Each initiative classed as protected, slowable or deferrable, with cost and target impact.
                2. The executive team's choices recorded with the effect on each target.
                3. A disclosure approach agreed for any target that will now be missed or reset.
                4. The protected list reviewed at each budget reforecast.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded executive decision classes each initiative as protected, slowable or deferrable, with its target effect and a disclosure approach for any change."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Class each initiative as protected, slowable or deferrable"
                - "Estimate the target impact of slowing or deferring each one"
                - "Take the options to the executive team and record the choice"
                - "Agree how any missed or reset target will be disclosed"
            - name: Climate scenario analysis of the strategy and financial plan
              description: |-
                ## Purpose
                Lenders and disclosure standards increasingly expect organisations to show how resilient their strategy is under different climate futures, such as a fast policy-led transition and a high-warming world. Running two or three scenarios through the financial plan, with specialist help where needed, shows which assets, products and markets are exposed and which strategic options hold up.

                ## Milestones
                1. Two or three scenarios chosen from public sources, with their key assumptions recorded.
                2. Material physical and transition risks quantified, at least roughly, for each scenario.
                3. Effects on revenue, costs and asset values estimated over two time horizons.
                4. Strategic responses and resilience conclusions written up for the board committee.

                ## Notes
                Approximate numbers with stated assumptions are more useful than precise ones built on hidden guesses. General scenario planning method sits elsewhere; this applies it to climate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A climate scenario analysis covering two or three scenarios, with estimated financial effects and resilience conclusions, has gone to the board committee."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose two or three public climate scenarios and record their assumptions"
                - "Ask finance which plan lines are most sensitive to carbon and energy prices"
                - "Estimate effects on revenue, costs and asset values for each scenario"
                - "Write the resilience conclusions for the board committee"
            - name: Nature dependencies and impacts at priority sites
              description: |-
                ## Purpose
                Many businesses depend on water, soils, pollination or stable ecosystems near their sites and suppliers, and affect them in turn. Applying the TNFD's LEAP approach (locate, evaluate, assess, prepare) to the highest-risk locations shows where nature-related risks are concentrated and which responses belong in the strategy.

                ## Milestones
                1. Sites and key sourcing regions located against sensitive ecosystems and water stress data.
                2. Dependencies and impacts evaluated for the five highest-priority locations.
                3. Material nature-related risks and opportunities assessed and scored.
                4. Responses and possible metrics prepared for the next strategy refresh.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A LEAP assessment of the five highest-priority locations, with scored nature-related risks and proposed responses, is ready for the strategy refresh."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map sites and sourcing regions against public water stress and biodiversity data"
                - "Pick the five highest-priority locations for evaluation"
                - "Record each location's main dependencies and impacts on nature"
                - "Propose responses and metrics for the next strategy refresh"
            - name: Just transition plan for affected workers and communities
              description: |-
                ## Purpose
                Closing a high-emitting plant or retiring a product line can cost jobs in towns that depend on them. Planning how affected workers will be retrained, redeployed or supported, and how worker representatives and local communities are consulted, protects people and the organisation's licence to operate.

                ## Milestones
                1. Workers and communities affected by transition plan actions identified.
                2. Worker representatives and local stakeholders consulted on the timetable.
                3. Retraining, redeployment and support options costed for each affected group.
                4. The plan approved alongside the transition actions it accompanies.

                ## Notes
                Employment law and consultation duties vary by country, so HR and legal counsel lead on those obligations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved just transition plan names the affected groups, records the consultation held and costs the support for each group."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the transition plan actions that affect jobs or communities"
                - "Ask HR and legal counsel which consultation duties apply"
                - "Consult worker representatives and local stakeholders on timing"
                - "Cost retraining, redeployment and support options for each group"
            - name: Circular business model pilot
              description: |-
                ## Purpose
                Some of the largest cuts in materials and emissions come from changing how products are sold and returned: leasing, refurbishment, take-back, or selling an outcome instead of a unit. Running one bounded pilot with a willing customer group tests whether the model works commercially before it is written into the strategy.

                ## Milestones
                1. One circular model chosen for one product and customer group, with success measures.
                2. Pilot economics modelled, including returns, refurbishment and residual value.
                3. The pilot run with a defined customer group for an agreed period.
                4. A scale, change or stop recommendation made from the results.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A circular model pilot has run for its agreed period and a recommendation to scale, change or stop is recorded with the results."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Choose one product and customer group for a circular pilot"
                - "Model the pilot economics with finance, including residual value"
                - "Recruit the pilot customers and agree the pilot period"
                - "Write the scale, change or stop recommendation from the results"
            - name: Sustainability controversy response protocol
              description: |-
                ## Purpose
                Campaign group reports, supplier labour scandals and regulators' investigations into claims can land without warning, and a slow or defensive answer damages the strategy more than the issue itself. A protocol naming the response team, the facts to establish in the first 24 hours and the principles for public statements lets the organisation respond quickly and honestly.

                ## Milestones
                1. A response team named across sustainability, communications, legal and the relevant business.
                2. A first 24-hour checklist of facts to establish and people to inform.
                3. Principles for public statements agreed: acknowledge, correct, commit only to what is funded.
                4. The protocol tested once on a realistic scenario.

                ## Notes
                General crisis leadership sits elsewhere. This covers sustainability allegations, where the evidence trail behind each past claim matters most.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A protocol naming the response team, a 24-hour checklist and statement principles has been tested on one realistic scenario."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Name the response team and a deputy for each function"
                - "Write the first 24-hour fact-gathering checklist"
                - "Agree principles for public statements with communications and legal"
                - "Run a scenario exercise on a sustainability allegation @recurring(yearly)"
---

# Corporate Sustainability Strategy

This area is for the executives and managers who set an organisation's environmental and social strategy and then have to make it hold inside budgets, pay, capital decisions and the board agenda. It runs from the foundations (a starting-point audit, disclosure obligations, double materiality, governance, ambition and targets) through the operating machinery, the knowledge leaders need, the decisions that put sustainability into the core business and the dated events of approval, launch and first disclosure, to situations for a new chief sustainability officer, a business unit leader or a mid-size enterprise, and finally specialist work on climate scenarios, nature, just transition and circular models.

What repeats is the governance rhythm: a monthly steering session and performance review, a monthly claims log check and questionnaire library refresh, quarterly board committee reports with glide path and risk reviews, and a yearly strategy refresh timed before business planning. The **Meeting notes**, **Metrics log**, **Risk register**, **Compliance control**, **Training program**, **Board meeting** and **Onboarding 30/60/90** templates pair with the steering group, the performance review, the risk register, the claims control, the manager programme, the board approval session and a new chief sustainability officer's first months. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
