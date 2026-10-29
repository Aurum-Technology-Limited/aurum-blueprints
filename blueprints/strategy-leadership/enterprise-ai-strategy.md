---
id: strategy-leadership.enterprise-ai-strategy
name: Enterprise AI Strategy
description: "An AI ambition the executive team agrees, a scored use-case portfolio, guardrails the board approves, steering, value and risk rhythms, and the capability work that turns AI pilots into results."
category: business
version: 1.0.0
tags: [strategy-leadership, enterprise-ai-strategy, enterprise, manager, artificial-intelligence, generative-ai, ai-governance, ai-adoption]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - risk-register
    - metrics-log
    - compliance-control
    - skills-matrix
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Enterprise AI Strategy
          description: "Deciding where AI creates value for an organisation, setting priorities, guardrails and capability building, and leading adoption."
          projects:
            - name: AI ambition statement agreed by the executive team
              description: |-
                ## Purpose
                Executive teams often say yes to AI before agreeing what it is for, and then every function reads the mandate differently. A one-page ambition that names the two or three outcomes AI should move, such as cost to serve, cycle time or revenue per customer, and what the organisation will not use it for, gives every later choice a test to pass.

                ## Milestones
                1. Each executive's view of what AI should change in three years collected in their own words.
                2. A one-page ambition naming two or three business outcomes, with a rough size for each.
                3. An explicit list of uses the organisation will not pursue, at least for now.
                4. The statement approved at an executive meeting and recorded in the minutes.

                ## Notes
                Keep technology names out of the ambition. If the statement still makes sense with the word AI removed, it is about the business, which is the point.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page AI ambition with two or three sized business outcomes and a list of excluded uses, approved by the executive team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each executive for three sentences on what AI should change by year three"
                - "Group the answers into business outcomes and spot where executives disagree"
                - "Draft a one-page ambition with two or three sized outcomes and excluded uses"
                - "Table the ambition at the executive meeting and record the decision"
            - name: Inventory of AI already in use across the organisation
              description: |-
                ## Purpose
                Before any strategy exists, staff are already pasting documents into public chatbots and vendors are switching on AI features inside tools the organisation pays for. A short survey plus a review of software contracts shows where AI is already touching customer data, decisions and code, which is the real starting position for policy and priorities.

                ## Milestones
                1. An anonymous staff survey on AI tools used for work, with at least a third of staff responding.
                2. Every major software contract checked for AI features that are on, off or arriving.
                3. A list of AI uses grouped by function, data touched and whether a human reviews the output.
                4. The five highest-exposure uses flagged to the executive sponsor.

                ## Notes
                Make the survey anonymous and say clearly that nobody will be disciplined for honest answers. The aim is a true picture, not a crackdown.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated inventory of AI uses by function and data type, with the five highest-exposure uses flagged to the sponsor."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Write a ten-question anonymous survey on the AI tools staff use for work"
                - "Ask procurement for a list of software contracts renewed in the last two years"
                - "Check each major platform's admin settings for AI features already switched on"
                - "Group the findings by function, data touched and human review"
                - "Send the five highest-exposure uses to the executive sponsor"
            - name: AI use-case long list from every function
              description: |-
                ## Purpose
                Good AI opportunities usually sit in dull, high-volume work that executives never see: claims triage, contract review, call summaries, supplier queries. Running a structured workshop in each function, framed around tasks and pain rather than technology, produces a long list of fifty or more candidates that can be scored fairly.

                ## Milestones
                1. A workshop held with each major function, framed around repetitive and judgement-heavy tasks.
                2. Every candidate written in the same format: task, volume, current cost, data needed, who benefits.
                3. A long list of at least fifty candidates in one shared table.
                4. Duplicates across functions merged into shared use cases.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A long list of at least fifty AI use cases from every major function, each described in the same six-field format."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Book a ninety-minute workshop with each functional leadership team"
                - "Prepare a one-page format asking for task, volume, cost, data and beneficiary"
                - "Run the workshops and capture every candidate in the shared table"
                - "Merge duplicates that appear in more than one function"
            - name: Data readiness check for priority AI use cases
              description: |-
                ## Purpose
                Most AI pilots that stall do so because the data is missing, locked in a legacy system, poorly labelled or not legally usable for the purpose. Checking the data behind the top fifteen use cases before anything is funded saves months, and tells you which data fixes would open up several use cases at once.

                ## Milestones
                1. The data each of the top fifteen use cases depends on named, with its system and owner.
                2. Each data set rated for availability, quality, labelling and permission to use for this purpose.
                3. Use cases blocked by data marked as not ready, with the fix needed.
                4. The two or three data fixes that unblock the most use cases put forward for funding.

                ## Notes
                Ask your privacy and legal advisers whether existing consents and contracts cover the new use. Data collected for one purpose cannot always be reused for another.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A readiness rating for the data behind each of the top fifteen use cases, with the shared data fixes costed and put forward."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "Name the data set, system and owner behind each top use case"
                - "Rate each data set for availability, quality, labelling and permission"
                - "Ask legal whether current consents cover each proposed new use"
                - "Identify the data fixes that unblock more than one use case"
            - name: AI value and feasibility scoring model
              description: |-
                ## Purpose
                Without a shared scoring method, the loudest executive or the slickest vendor demo sets the AI agenda. A simple model scoring each use case on value, feasibility, risk and time to benefit, agreed before anyone scores, makes the shortlist defensible and repeatable for every future intake round.

                ## Milestones
                1. Four or five scoring criteria agreed, with a one-line definition and a one to five scale for each.
                2. Weights for each criterion agreed by the executive sponsor.
                3. The long list scored by a small cross-functional panel, not by the proposers.
                4. A ranked shortlist of ten to fifteen use cases with scores visible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written scoring model with weighted criteria, applied by a panel to the full long list to produce a ranked shortlist."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft four or five scoring criteria with a one-line definition each"
                - "Agree criterion weights with the executive sponsor before scoring starts"
                - "Ask three people from different functions to score the long list independently"
                - "Average the scores and publish the ranked shortlist"
            - name: Executive AI sponsor and accountable owner
              description: |-
                ## Purpose
                Programmes drift when ownership is split between the technology chief, the data team and every business unit at once. Naming one executive sponsor accountable for value and one owner accountable for risk, with written responsibilities, makes it clear who decides, who funds and who stops things.

                ## Milestones
                1. An executive sponsor named, accountable for the value AI delivers.
                2. A risk owner named, separate from the sponsor, accountable for guardrails.
                3. A one-page responsibilities note covering funding, approval and stop decisions.
                4. Both roles announced to the leadership group.

                ## Notes
                Keeping the value owner and the risk owner as different people gives you a built-in check. One person holding both tends to favour speed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named AI sponsor and a separate named risk owner, each with written responsibilities, announced to the leadership group."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the decisions an AI sponsor and an AI risk owner would each hold"
                - "Agree the two names with the chief executive"
                - "Write a one-page note on funding, approval and stop decisions"
                - "Announce both roles at the next leadership meeting"
            - name: Interim acceptable use policy for generative AI
              description: |-
                ## Purpose
                Staff will use generative AI tools whether or not a policy exists, so the first guardrail should arrive within weeks, not after a year of committee work. A two-page interim policy covering approved tools, data that must never be entered, human review of outputs and how to ask questions protects the organisation while the full governance is built.

                ## Milestones
                1. A list of approved and prohibited tools for the next six months.
                2. Clear rules on data that must never be entered, such as customer personal data, unreleased results and source code.
                3. A rule that a named person reviews any AI output before it reaches a customer or a decision.
                4. The policy published, with a contact for questions and a review date.

                ## Notes
                Ask your legal and information security advisers to review the draft. Short and clear beats complete: a policy nobody reads protects nothing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page interim AI use policy, reviewed by legal and security, published to all staff with a review date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a two-page interim generative AI use policy for review"
                - "List approved tools and the data types that must never be entered"
                - "Send the draft to legal and information security for comment"
                - "Publish the policy with a named contact and a six-month review date"
            - name: AI risk appetite statement for the board
              description: |-
                ## Purpose
                Boards are increasingly asked how AI risk is governed, and directors need to know which uses are welcome, which need extra review and which are off limits. A risk appetite statement, written in business terms and approved by the board, lets the executive move fast inside agreed limits instead of escalating every decision.

                ## Milestones
                1. AI uses grouped into tiers, for example internal productivity, customer-facing and decision-affecting.
                2. An appetite set for each tier, with the review each tier needs before launch.
                3. Uses the organisation will not pursue under any circumstances listed.
                4. The statement approved by the board and its review date set.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tiered AI risk appetite statement approved by the board, with the review required for each tier and a yearly review date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Sort the current AI inventory into three or four risk tiers"
                - "Write the appetite and required review for each tier"
                - "Walk the chair or risk committee chair through the draft before the board meeting"
                - "Review the risk appetite statement with the board @recurring(yearly)"
            - name: Baseline of AI spend and contracts
              description: |-
                ## Purpose
                Spending on AI hides in many budgets: software add-ons, cloud usage, consultancy, pilot licences and individual expense claims for chatbot subscriptions. Pulling them into one baseline shows the real current spend, exposes duplicate tools bought by different teams and gives the strategy a starting number to manage.

                ## Milestones
                1. AI-related spend for the last twelve months gathered from finance, procurement and expenses.
                2. Spend grouped by tool, team and type: licences, usage, services.
                3. Duplicate or overlapping tools identified.
                4. A single baseline figure agreed with finance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month AI spend baseline grouped by tool, team and type, with duplicates listed and the total agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance to pull twelve months of spend tagged to AI suppliers and cloud AI services"
                - "Search expense claims for chatbot and AI tool subscriptions"
                - "Group the spend by tool, team and type"
                - "Agree the baseline total with the finance business partner"
            - name: Monthly AI steering group
              description: |-
                ## Purpose
                Once the first pilots start, decisions pile up: funding the next stage, approving a new tool, handling a complaint about an AI output. A monthly steering group with the sponsor, risk owner, finance and two business leaders, deciding from a short pack, keeps the programme moving and gives every decision a record.

                ## Milestones
                1. A terms of reference naming members, decision rights and quorum.
                2. A standard pack: portfolio status, value, risks, spend and decisions requested.
                3. A decision log kept from the first meeting.
                4. Six consecutive meetings held, each ending with recorded decisions.

                ## Notes
                If a meeting ends with no decisions, the pack is reporting rather than asking. Put the decision requests on page one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly AI steering meetings held, each with a pack and at least one recorded decision."
                cadence: rolling
              tasks:
                - "Write a one-page terms of reference with members and decision rights"
                - "Design a four-page pack with decision requests on page one"
                - "Hold the AI steering group and update the decision log @recurring(monthly:9)"
                - "Circulate decisions to affected owners within two working days"
            - name: AI use-case intake and stage gates
              description: |-
                ## Purpose
                After launch, new AI ideas arrive every week through emails, vendor pitches and corridor conversations. A single intake form and three stage gates, from idea to pilot to production, mean every idea is scored the same way and nothing reaches customers without passing the checks its risk tier requires.

                ## Milestones
                1. One intake form, linked from the AI policy page, using the scoring model fields.
                2. Three stage gates defined, each with its entry evidence and approver.
                3. A weekly triage that responds to every submission within ten working days.
                4. A public list showing each use case and its current stage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every AI idea enters through one form, receives a triage response within ten working days and is tracked through three defined gates."
                cadence: rolling
              tasks:
                - "Build an intake form using the fields from the scoring model"
                - "Write the evidence each stage gate needs and who approves it"
                - "Triage new AI use-case submissions and reply to proposers @recurring(weekly:tue)"
                - "Publish the list of use cases and their current stage"
            - name: AI portfolio value tracking
              description: |-
                ## Purpose
                Benefits from AI are easy to claim and hard to prove: hours saved rarely turn into lower cost unless someone redeploys the time. Tracking each live use case against its pre-launch baseline, and separating time saved from money actually released, gives the steering group and the board numbers they can believe.

                ## Milestones
                1. A baseline recorded for every use case before it goes live.
                2. Value measured in three kinds: cost released, revenue gained and time freed.
                3. Each benefit signed off by the finance partner of the business unit that owns it.
                4. A monthly portfolio view showing value against plan for every live use case.

                ## Notes
                Time freed is real but it is not cash. Report it separately, with a note on what the time is now used for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live AI use case has a recorded baseline and a monthly value figure, with cash benefits signed off by finance."
                cadence: rolling
              tasks:
                - "Record a pre-launch baseline for each use case entering a pilot"
                - "Agree with finance how cost released and time freed will be counted"
                - "Update value against plan for every live AI use case @recurring(monthly:16)"
                - "Ask the business unit finance partner to sign off each cash benefit"
            - name: AI risk register and incident log
              description: |-
                ## Purpose
                Ordinary IT risk registers miss what AI brings: biased outcomes, confident wrong answers, leaked prompts, copyright claims, a supplier changing its model overnight. A dedicated register, reviewed monthly, plus a simple incident log for anything that went wrong, shows the board that risks are known and owned.

                ## Milestones
                1. A register with likelihood, impact, owner and controls for each AI risk.
                2. Risks linked to the use cases they affect.
                3. An incident log capturing date, use case, harm, response and lesson.
                4. The register reviewed monthly and the top five risks reported to the steering group.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An AI risk register and incident log, reviewed monthly, with the top five risks reported to every steering meeting."
                cadence: rolling
              tasks:
                - "Create the AI risk register from the risk register template"
                - "Add an incident log with date, use case, harm, response and lesson"
                - "Review AI risks, owners and controls with the risk owner @recurring(monthly:23)"
                - "Send the top five risks to the steering group pack"
            - name: Model and AI vendor inventory upkeep
              description: |-
                ## Purpose
                Regulators and auditors increasingly expect an organisation to know which AI models it uses, where, for what and supplied by whom. Keeping a living inventory of every model and AI-enabled product, with its version, data and owner, turns a frantic audit request into a ten-minute export.

                ## Milestones
                1. An inventory listing each model or AI product, supplier, version, use case, data used and owner.
                2. The risk tier from the appetite statement recorded for each entry.
                3. A rule that nothing goes live without an inventory entry.
                4. Four quarterly updates completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A model and AI product inventory with owner and risk tier for every entry, updated each quarter for a year."
                cadence: rolling
              tasks:
                - "Turn the AI inventory into a model register with supplier, version and owner"
                - "Add the go-live rule to the stage gate checklist"
                - "Confirm each model entry with its owner and record version changes @recurring(quarterly)"
            - name: Quarterly AI policy refresh
              description: |-
                ## Purpose
                Usage policy dates quickly: new tools appear, suppliers change their terms and regulators publish guidance. A short quarterly refresh of the use policy, the approved tools list and the review requirements keeps the rules credible, so staff keep following them instead of working around them.

                ## Milestones
                1. A list of changes since the last refresh: new tools, supplier terms, regulator guidance and incidents.
                2. The approved tools list updated.
                3. Policy changes reviewed by legal and security.
                4. A short what-changed note sent to staff after each refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The AI use policy and approved tools list refreshed every quarter, each time with a what-changed note sent to staff."
                cadence: rolling
              tasks:
                - "Collect new tools, supplier term changes and incidents since the last refresh"
                - "Refresh the AI policy and approved tools list with legal and security @recurring(quarterly)"
                - "Send staff a five-line note on what changed and why"
            - name: AI adoption and usage metrics
              description: |-
                ## Purpose
                Buying licences is not adoption: many organisations find that a fifth of seats are used weekly and the rest sit idle. A monthly look at active users, use by team and the tasks people actually use AI for shows where training or redesign is needed and where licences can be cut.

                ## Milestones
                1. Four or five adoption measures agreed, such as weekly active users and use by team.
                2. A monthly log of those measures for every enterprise AI tool.
                3. Low-adoption teams identified and offered help.
                4. Unused licences reclaimed at each renewal.

                ## Notes
                Start from the **Metrics log** template. Look at usage by team, not by named person, unless your works council or privacy advisers have agreed otherwise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly adoption log for every enterprise AI tool, with low-adoption teams contacted and idle licences reclaimed at renewal."
                cadence: rolling
              tasks:
                - "Set up an adoption log from the metrics log template"
                - "Choose four or five adoption measures that the tools can actually report"
                - "Record adoption by team for each AI tool @recurring(monthly:12)"
                - "Offer a working session to the three teams with the lowest use"
            - name: Human review sampling of AI outputs
              description: |-
                ## Purpose
                Once an AI system is trusted, people stop checking its work, which is exactly when quality slips unnoticed. Sampling a fixed number of outputs each month from every customer-facing or decision-affecting use case, and scoring them against a simple rubric, catches drift and gives you evidence that oversight is real.

                ## Milestones
                1. A sample size and a scoring rubric agreed for each higher-risk use case.
                2. A named reviewer for each use case who is not its owner.
                3. Monthly sample scores recorded, with errors categorised.
                4. A threshold set that triggers a pause or a fix when error rates rise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly scored samples for every higher-risk AI use case, with an agreed error threshold that triggers a pause or fix."
                cadence: rolling
              tasks:
                - "Write a five-point rubric for judging AI output quality in each higher-risk use case"
                - "Name an independent reviewer for each use case"
                - "Score the monthly sample of AI outputs and log the errors @recurring(monthly:5)"
                - "Agree the error rate that pauses a use case"
            - name: AI cost and usage spend review
              description: |-
                ## Purpose
                Usage-priced AI services can double in cost in a month when a popular feature launches or a workflow loops. A monthly review of spend by use case against forecast, with alerts on sudden jumps, keeps the run cost visible and stops a successful pilot from becoming an unbudgeted bill.

                ## Milestones
                1. Spend tagged by use case for every usage-priced AI service.
                2. A monthly forecast for each use case agreed with finance.
                3. An alert set for spend that jumps beyond an agreed amount in a week.
                4. Cost per transaction tracked for each scaled use case.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly AI spend reviewed by use case against forecast, with alerts in place and cost per transaction known for each scaled use case."
                cadence: rolling
              tasks:
                - "Ask the cloud or platform team to tag AI spend by use case"
                - "Set a spending alert for each usage-priced service"
                - "Compare AI spend by use case with forecast and explain any gap @recurring(monthly:20)"
                - "Work out cost per transaction for each scaled use case"
            - name: Quarterly AI briefing to the board
              description: |-
                ## Purpose
                Directors want to know three things about AI: is it creating value, is it under control and are competitors moving faster. A consistent quarterly briefing of four pages, covering portfolio value, risk and incidents, spend and one strategic question for discussion, builds board confidence and makes the board a source of challenge rather than surprise.

                ## Milestones
                1. A four-page briefing format agreed with the chair.
                2. Each briefing ending with one strategic question for the board to discuss.
                3. Board questions and requests logged and answered by the next meeting.
                4. Four briefings delivered in a year in the same format.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly AI board briefings delivered in a consistent format, with every board request answered by the following meeting."
                cadence: cyclic
              tasks:
                - "Agree a four-page AI briefing format with the chair"
                - "Prepare the quarterly AI briefing for the board pack @recurring(quarterly)"
                - "Log the board's questions and assign an owner to each"
                - "Choose one strategic AI question for directors to debate"
            - name: Executive AI literacy sessions
              description: |-
                ## Purpose
                Executives approve AI budgets and risks without always knowing what a model can and cannot do, which makes them easy to oversell and quick to panic. A short series of hands-on sessions, where each executive uses the tools on their own work, gives the team enough shared understanding to ask sharp questions.

                ## Milestones
                1. Four ninety-minute sessions planned: what models do, where they fail, what data they need, how to judge a proposal.
                2. Each executive bringing a real task from their own work to try.
                3. Every executive has used an approved tool on their own work at least five times.
                4. A one-page list of the questions executives will now ask of any AI proposal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All executives have attended four hands-on sessions and the team has agreed a written list of questions for AI proposals."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask each executive for one real task they would like AI to help with"
                - "Book four ninety-minute sessions in the executive calendar"
                - "Agree the executive team's standard questions for AI proposals"
                - "Run a short refresher on new AI capabilities for executives @recurring(quarterly)"
            - name: How large language models fail
              description: |-
                ## Purpose
                Leaders who only see polished demos underestimate how and when generative AI goes wrong. Learning the main failure modes, including invented facts, sensitivity to wording, prompt injection, stale knowledge and inconsistent answers to the same question, lets you design controls into processes instead of discovering problems through customers.

                ## Milestones
                1. Each major failure mode explained in one paragraph in your own words.
                2. Every failure mode reproduced at least once on an approved tool.
                3. For each live use case, the failure modes that matter most identified.
                4. One control proposed for each of those failure modes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covering the main failure modes, each reproduced once, mapped to live use cases with a proposed control for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the five failure modes of large language models you most need to understand"
                - "Reproduce an invented-fact answer on an approved tool and note how it looked"
                - "Ask a security colleague to demonstrate a prompt injection"
                - "Map each failure mode to the live use cases it threatens"
            - name: Judging AI vendor claims and benchmarks
              description: |-
                ## Purpose
                Vendors quote accuracy figures and leaderboard positions that rarely match your data, your languages or your processes. Learning to ask how a figure was measured, on what data and against what baseline, and insisting on a trial on your own examples, protects the organisation from buying a demo instead of a product.

                ## Milestones
                1. A list of ten questions to ask about any vendor performance claim.
                2. Two recent vendor pitches reviewed against those questions.
                3. A standard requirement for a trial on your own test set before purchase.
                4. The questions shared with procurement and the stage gate panel.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-question checklist for AI vendor claims, tested on two real pitches and adopted by procurement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write ten questions to ask about any AI accuracy or benchmark claim"
                - "Review two recent vendor pitches against the questions"
                - "Add an own-data trial requirement to the procurement checklist"
                - "Share the checklist with the stage gate panel"
            - name: AI regulation landscape briefing for leaders
              description: |-
                ## Purpose
                Rules on AI differ by country and sector and are changing fast, from broad laws such as the European Union's AI Act to sector guidance from financial and health regulators. A leader does not need to be a lawyer, but does need a clear map of which regimes apply where the organisation operates and sells, prepared with counsel.

                ## Milestones
                1. The countries and sectors where the organisation builds, buys or sells AI listed.
                2. Counsel asked which AI laws and guidance apply in each.
                3. A one-page map of obligations by use-case tier, written with counsel.
                4. A named person responsible for tracking regulatory change.

                ## Notes
                This is organisational preparation. Legal conclusions about what applies to you must come from your own counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of AI obligations by country and tier, prepared with counsel, and a named owner for regulatory tracking."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every country and sector where you build, buy or sell AI"
                - "Ask counsel which AI laws and guidance apply in each"
                - "Draft the obligations map with counsel by use-case tier"
                - "Name the person who will track AI regulatory change"
            - name: Reading an AI evaluation report
              description: |-
                ## Purpose
                Before a use case moves to production, someone should hand you an evaluation report: what was tested, on how many examples, with what error rates and failure cases. Knowing how to read one, and what a weak one looks like, is the difference between approving with evidence and approving on enthusiasm.

                ## Milestones
                1. The parts of a good evaluation report understood: test set, metrics, baseline, failure analysis.
                2. One real evaluation report from a pilot read and annotated.
                3. Three questions written that you will ask of every future report.
                4. A minimum evaluation standard agreed for the production stage gate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A minimum evaluation report standard agreed for the production gate, informed by reading and annotating one real report."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the data team for the evaluation report from the most advanced pilot"
                - "Annotate the test set size, metrics, baseline and failure cases"
                - "Write three questions to ask of every evaluation report"
                - "Agree the minimum evaluation standard for the production gate"
            - name: Workflow redesign practice for managers
              description: |-
                ## Purpose
                The biggest gains come from redesigning a workflow around AI, not from bolting a chatbot onto the old steps. A short practical programme where managers map one real process, decide which steps AI drafts, which a person checks and which disappear, builds the skill that turns licences into changed work.

                ## Milestones
                1. A cohort of ten to fifteen managers, each with one real workflow to redesign.
                2. Each manager's current workflow mapped step by step with time per step.
                3. A redesigned workflow showing AI steps, human checks and removed steps.
                4. At least half the redesigns trialled in the manager's team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "At least ten managers have mapped and redesigned one real workflow, and at least half have trialled the redesign in their team."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Invite ten to fifteen managers to bring one high-volume workflow each"
                - "Run a session where each manager maps their workflow with time per step"
                - "Run a second session redesigning each workflow around AI and human checks"
                - "Check back after six weeks on which redesigns were trialled"
            - name: AI economics for executives
              description: |-
                ## Purpose
                AI changes the cost structure of work: low build cost for a prototype, then ongoing run costs that rise with usage, plus monitoring and retraining that never stop. Understanding the full cost of one use case over three years, against the value it creates, stops the organisation scaling things that only looked cheap in a pilot.

                ## Milestones
                1. The cost elements of an AI use case listed: build, usage, integration, monitoring, review staff, retraining.
                2. A three-year cost model built for one real use case.
                3. The break-even volume for that use case calculated.
                4. A standard cost template adopted for future business cases.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-year total cost model with break-even volume for one real use case, adopted as the template for future AI business cases."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every cost element of an AI use case over three years"
                - "Build a three-year cost model for the most advanced pilot"
                - "Calculate the volume at which that use case breaks even"
                - "Share the model with finance as the standard business case template"
            - name: Build, buy or partner decision for AI capabilities
              description: |-
                ## Purpose
                For each priority use case there is a choice between using AI built into existing software, buying a specialist product, partnering, or building on a model platform. Deciding with explicit criteria, such as differentiation, data sensitivity, speed and total cost, avoids building what could be bought and buying what is actually your edge.

                ## Milestones
                1. Decision criteria agreed and weighted before options are assessed.
                2. Each shortlisted use case assessed against build, buy and partner options.
                3. A recommended route for each, with the main risk noted.
                4. The decisions approved by the steering group and recorded.

                ## Notes
                Start from the **Purchase decision** template. Build only where the capability is a genuine source of advantage or the data is too sensitive to share.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded build, buy or partner decision for every shortlisted use case, made against weighted criteria and approved by the steering group."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Agree weighted criteria for build, buy and partner choices"
                - "Check which shortlisted use cases existing software already covers"
                - "Assess each remaining use case against the three routes"
                - "Take the recommendations to the steering group for approval"
            - name: Choosing an enterprise generative AI platform
              description: |-
                ## Purpose
                Teams buying their own AI tools leads to scattered data, duplicate costs and uneven controls. Choosing one or two enterprise platforms with proper data protection, admin controls, audit logs and contract terms on training use gives staff a safe default and the organisation one place to govern.

                ## Milestones
                1. Requirements written: data residency, no training on your data, single sign-on, audit logs, admin controls.
                2. Three platforms trialled by a mixed group of staff on real tasks.
                3. Contract terms on data use, liability and model changes reviewed by legal.
                4. A platform chosen, contracted and announced as the approved default.

                ## Notes
                Start from the **Vendor** template. Ask how the supplier will notify you of model changes, since a silent model update can change output quality overnight.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An enterprise AI platform chosen after a three-way trial, with contract terms reviewed by legal and the platform announced as the approved default."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Write platform requirements covering data use, residency, sign-on and audit logs"
                - "Create a vendor record for each of three shortlisted platforms"
                - "Run a four-week trial with twenty staff on real tasks"
                - "Ask legal to review data use, liability and model change terms"
                - "Announce the chosen platform as the approved default"
            - name: First three AI pilots with measured baselines
              description: |-
                ## Purpose
                The first pilots set the organisation's view of AI for years, so choose three from the top of the shortlist with clear owners, real data and a baseline measured before work begins. Running them with fixed time boxes and success thresholds agreed up front makes the result a decision, not an opinion.

                ## Milestones
                1. Three pilots chosen from the top of the scored shortlist, each with a business owner.
                2. A baseline measured for each pilot before it starts.
                3. A success threshold and a twelve-week time box written for each.
                4. Each pilot ended with a go, change or stop decision recorded.

                ## Notes
                Pick at least one pilot that is internal and low risk. A quick, clear success buys patience for the harder ones.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three pilots completed within their time boxes, each measured against a pre-agreed baseline and ending in a recorded go, change or stop decision."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Pick three pilots from the shortlist and confirm a business owner for each"
                - "Measure each pilot's baseline before any build starts"
                - "Write the success threshold and twelve-week time box for each pilot"
                - "Hold the weekly pilot check-in and note blockers @recurring(weekly:thu)"
                - "Record a go, change or stop decision at the end of each pilot"
            - name: Scaling a successful AI pilot into production
              description: |-
                ## Purpose
                Many AI pilots succeed in a small team and then die in the gap before production: no budget line, no support team, no integration, no monitoring. Planning the move to production as its own project, with an operating owner, support model and monitoring in place, is what turns one good result into lasting value.

                ## Milestones
                1. An operating owner named who will run the use case after the project team leaves.
                2. Integration, security review and access controls completed.
                3. Monitoring of quality, cost and usage in place before launch.
                4. Training delivered to every user group and the old process retired.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One pilot running in production with a named operating owner, monitoring live and the old process formally retired."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Name the operating owner who will run the use case after launch"
                - "Book the security review and integration work"
                - "Set up quality, cost and usage monitoring before go-live"
                - "Agree the date the old process stops"
            - name: Stopping AI pilots that are not paying back
              description: |-
                ## Purpose
                Pilots rarely fail outright; they drift on with a small team, a little budget and a promising next phase. A deliberate review that applies the original success threshold, and stops anything that missed it twice, frees people and money for the use cases that are working.

                ## Milestones
                1. Every pilot older than six months listed with its original threshold.
                2. Each compared with its actual results.
                3. A stop, fix or continue decision recorded for each.
                4. Lessons from stopped pilots written up and shared.

                ## Notes
                Celebrate a clean stop. If stopping looks like failure, people will hide weak pilots instead of ending them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every pilot older than six months reviewed against its original threshold, with a recorded decision and lessons shared for those stopped."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every pilot older than six months with its original success threshold"
                - "Compare each pilot's results with its threshold"
                - "Record a stop, fix or continue decision for each"
                - "Write a one-page lessons note for every stopped pilot"
            - name: AI operating model decision
              description: |-
                ## Purpose
                Organisations organise AI work in a central centre of excellence, fully within business units, or a hub and spoke mix, and each choice changes speed, consistency and cost. Deciding the model deliberately, based on your size, data maturity and how different the business units are, avoids a slow central team or a hundred disconnected experiments.

                ## Milestones
                1. The three main models described with their trade-offs for your organisation.
                2. Business unit leaders asked what they need from a central team.
                3. A chosen model with the split of roles between centre and units.
                4. A staffing and funding plan for the first year of the model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen AI operating model with a written split of central and business unit roles and a funded first-year staffing plan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a page on central, federated and hub and spoke models"
                - "Interview four business unit leaders on what they need from the centre"
                - "Draft the split of roles between centre and units"
                - "Take the recommended model and staffing plan to the executive team"
            - name: Workforce impact assessment for AI-affected roles
              description: |-
                ## Purpose
                Staff hear about AI and assume job losses, and silence makes that fear worse. Assessing which roles will change, by how much and over what period, done with HR and before any announcement, lets leaders plan reskilling and redeployment and speak honestly about what will and will not happen.

                ## Milestones
                1. Roles affected by the shortlisted use cases listed with headcount.
                2. Each role rated for the share of tasks likely to change.
                3. Reskilling, redeployment and hiring implications set out with HR.
                4. A leadership position agreed on how affected staff will be treated.

                ## Notes
                Involve HR and employee relations from the start, and check any consultation duties with your employment advisers before plans are shared.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A role-by-role workforce impact assessment prepared with HR, with a leadership position agreed on reskilling and redeployment."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the roles and headcount touched by each shortlisted use case"
                - "Rate the share of each role's tasks likely to change"
                - "Work through reskilling and redeployment options with HR"
                - "Agree the leadership position on affected staff before any announcement"
            - name: Responsible AI review for high-risk uses
              description: |-
                ## Purpose
                Uses that affect customers, employees or decisions about people need a review that goes beyond security: fairness, explainability, recourse and human oversight. A standing review panel, with a checklist and the authority to require changes, gives high-risk uses a consistent bar and a documented record.

                ## Milestones
                1. A review checklist covering fairness, transparency, recourse, oversight and data use.
                2. A panel named with members from legal, risk, the business and data.
                3. Every high-risk use case reviewed before its production gate.
                4. Review outcomes and required changes recorded for each.

                ## Notes
                Start from the **Compliance control** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high-risk AI use case has a recorded responsible AI review with outcomes and required changes before its production gate."
                cadence: rolling
              tasks:
                - "Set up the review control from the compliance control template"
                - "Write the checklist for fairness, transparency, recourse and oversight"
                - "Name panel members from legal, risk, the business and data"
                - "Hold the responsible AI review panel for queued use cases @recurring(monthly:2)"
            - name: Enterprise AI strategy approved by the board
              description: |-
                ## Purpose
                Once the ambition, priorities, guardrails and operating model are clear, they belong in one document the board approves, with funding and measures attached. A short strategy paper, typically ten pages with appendices, gives the whole organisation one reference and the board a baseline to hold the executive to.

                ## Milestones
                1. A ten-page strategy covering ambition, priority use cases, guardrails, operating model, funding and measures.
                2. Each executive has reviewed the draft and their comments are resolved.
                3. The paper presented to the board with a clear funding request.
                4. Board approval recorded, with any conditions noted.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A board-approved enterprise AI strategy paper with funding and measures, and any board conditions recorded."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Outline the strategy paper in ten one-page sections"
                - "Ask the agent to draft the executive summary from the approved section notes"
                - "Collect and resolve comments from every executive"
                - "Book the strategy item and funding request on the board agenda"
            - name: AI strategy launch to the whole organisation
              description: |-
                ## Purpose
                Staff form their view of AI from rumours and headlines unless leaders explain the plan. A launch that says plainly what AI is for, what it is not for, how jobs will be treated, which tools to use and how to propose ideas reduces fear and channels energy into the intake process.

                ## Milestones
                1. Core messages agreed: purpose, limits, people commitment, approved tools, how to contribute.
                2. Managers briefed a week before the launch, with a question and answer sheet.
                3. The launch delivered by the chief executive, with live questions.
                4. Intake submissions and policy page visits measured in the following month.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An all-staff AI launch delivered after a manager briefing, with intake submissions and policy page visits measured the following month."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the five core messages for the AI launch"
                - "Draft a question and answer sheet covering jobs, data and tools"
                - "Brief all managers a week before the launch"
                - "Count intake submissions in the month after the launch"
            - name: AI use-case sprint week
              description: |-
                ## Purpose
                Running a focused week in which mixed teams of business staff and technical people build quick prototypes on real problems surfaces ideas the workshops missed and shows staff what is possible with approved tools. With clear rules on data and a judging panel tied to the scoring model, the week feeds the pipeline rather than producing forgotten demos.

                ## Milestones
                1. Eight to twelve problem statements chosen from the long list.
                2. Mixed teams formed with at least one business owner each.
                3. Prototypes built on approved tools and test data only.
                4. The best three entered into the intake process with an owner.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sprint week held with at least eight teams, and the best three prototypes entered into intake with named owners."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose eight to twelve problem statements from the long list"
                - "Publish rules on approved tools and test data for the week"
                - "Form mixed teams with a business owner in each"
                - "Enter the three best prototypes into the intake process"
            - name: AI incident tabletop exercise
              description: |-
                ## Purpose
                When an AI system gives harmful advice to a customer or leaks confidential data, the first hours decide the damage. A two-hour tabletop exercise with the executive, legal, communications and technology leads, walking through a realistic AI incident, tests who decides to switch a system off and how customers and regulators are told.

                ## Milestones
                1. A realistic scenario written, such as a customer chatbot giving harmful advice.
                2. The exercise run with executive, legal, communications, risk and technology leads.
                3. Gaps in decision rights, switch-off ability and communication recorded.
                4. Fixes assigned with owners and dates.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise run with all named leads, with gaps recorded and every fix assigned an owner and date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a realistic AI incident scenario with three escalating updates"
                - "Invite executive, legal, communications, risk and technology leads"
                - "Record each gap in decision rights, switch-off and communication"
                - "Repeat the AI incident tabletop with a new scenario @recurring(yearly)"
            - name: Annual AI strategy refresh
              description: |-
                ## Purpose
                AI capabilities and costs change more in a year than most technologies do in five, so last year's priorities may now be cheap, obsolete or newly possible. A yearly refresh that revisits the ambition, the portfolio results and the market, and feeds into the main planning cycle, keeps the strategy current without constant re-planning.

                ## Milestones
                1. A year-end review of value delivered, spend and incidents against the strategy.
                2. A scan of capability and cost changes in the market over the year.
                3. Priorities, guardrails and funding updated for the coming year.
                4. The refreshed strategy approved and fed into the organisation's planning cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A refreshed AI strategy approved each year, based on a written review of value, spend and incidents and fed into the planning cycle."
                cadence: cyclic
              tasks:
                - "Start the AI strategy refresh with a review of value, spend and incidents @recurring(yearly)"
                - "Ask the platform suppliers what changed in capability and pricing this year"
                - "Update the priorities and funding request for the coming year"
                - "Submit the refreshed strategy into the main planning cycle"
            - name: Line manager guide to AI in the team
              description: |-
                ## Purpose
                Managers are the people staff ask whether they are allowed to use AI, whether their job is safe and how good is good enough. A short practical guide, covering the policy in plain words, how to review AI-assisted work, how to talk about job worries and where to send ideas, means those conversations go well everywhere.

                ## Milestones
                1. A four-page manager guide covering policy, quality review, people conversations and ideas.
                2. Five common staff questions answered in the guide.
                3. The guide tested with six managers and revised.
                4. Every people manager has received the guide and a thirty-minute briefing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A four-page manager guide, tested with six managers, issued to every people manager with a thirty-minute briefing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the five questions staff most often ask managers about AI"
                - "Draft a four-page guide answering them in plain words"
                - "Test the guide with six managers and revise"
                - "Run thirty-minute briefings for every people manager"
            - name: Department AI adoption plan
              description: |-
                ## Purpose
                A department head who has been told to adopt AI needs a plan sized to their team: which tasks first, who needs which skills, how quality will be checked and how to show the result. Mapping the team's skills, picking three tasks and running a monthly sharing session gives visible progress within a quarter.

                ## Milestones
                1. Team skills with AI tools mapped person by person.
                2. Three team tasks chosen for AI assistance, each with a quality check.
                3. Two team members named as AI champions.
                4. A quarter of monthly sharing sessions held, with time saved recorded.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A team skills map, three tasks running with AI and quality checks, and three monthly sharing sessions held with time saved recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map the team's AI skills using the skills matrix template"
                - "Choose three team tasks for AI assistance and write a quality check for each"
                - "Name two AI champions in the team"
                - "Hold a team session sharing what worked with AI this month @recurring(monthly:14)"
            - name: AI strategy in a regulated enterprise
              description: |-
                ## Purpose
                Banks, insurers, health providers and utilities face model risk rules, supervisory expectations and record-keeping duties that change how AI is approved and monitored. Building the strategy around existing model risk and compliance frameworks, and engaging supervisors early, avoids having to rebuild controls after a regulator asks.

                ## Milestones
                1. Existing model risk, outsourcing and record-keeping frameworks reviewed for how they apply to AI.
                2. AI use cases mapped to those frameworks with gaps noted.
                3. Compliance and model risk teams agreeing the approval path for each tier.
                4. An approach agreed with counsel for engaging your supervisor about AI plans.

                ## Notes
                Your compliance team and counsel decide how rules apply. This project prepares the questions and the evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "AI use cases mapped to existing regulatory frameworks with gaps noted, an approval path per tier agreed with compliance, and a supervisor engagement approach set."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask compliance which existing frameworks already cover AI models"
                - "Map each AI use case to the frameworks and note gaps"
                - "Agree the approval path for each risk tier with model risk"
                - "Discuss with counsel how and when to brief your supervisor"
            - name: AI strategy without a data science team
              description: |-
                ## Purpose
                A mid-sized organisation can capture most of the value of AI without hiring data scientists, by using AI built into its existing software and one enterprise platform well. The strategy becomes about choosing suppliers, training staff and redesigning workflows, with a small budget for specialist help when a use case truly needs it.

                ## Milestones
                1. AI features in existing software listed and the useful ones switched on with controls.
                2. One enterprise AI platform adopted for general use.
                3. A specialist partner identified for occasional custom work.
                4. Three workflows redesigned by the business teams themselves.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Useful AI features in existing software enabled with controls, one platform adopted and three workflows redesigned by business teams."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List AI features in the software you already pay for"
                - "Switch on the useful features with admin controls set"
                - "Shortlist two specialist partners for occasional custom work"
                - "Pick three workflows for business teams to redesign themselves"
            - name: AI change with works councils and unions
              description: |-
                ## Purpose
                Where staff are represented by unions or works councils, introducing AI that changes roles or monitors work often triggers information and consultation duties. Engaging representatives early, with honest information on scope and safeguards, builds trust and avoids disputes that stall adoption for months.

                ## Milestones
                1. Consultation duties for AI changes confirmed with employment advisers.
                2. Representatives briefed on the AI strategy before staff announcements.
                3. Agreed principles on monitoring, job security and reskilling recorded.
                4. A regular forum set up for AI changes with representatives.

                ## Notes
                Consultation rules vary by country and agreement. Confirm what applies with your employment advisers before planning dates.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Representatives briefed before staff, written principles on monitoring and job security agreed, and a regular AI forum running."
                cadence: rolling
              tasks:
                - "Ask employment advisers what consultation AI changes require"
                - "Brief representatives on the AI strategy before staff hear it"
                - "Draft shared principles on monitoring, job security and reskilling"
                - "Hold the AI forum with staff representatives @recurring(quarterly)"
            - name: Taking over a stalled AI programme
              description: |-
                ## Purpose
                A new executive often inherits an AI programme with a dozen pilots, unclear value, a frustrated board and a tired team. A sixty-day reset, listening first, then auditing every pilot and contract, then narrowing to a few priorities, restores credibility faster than announcing a new strategy.

                ## Milestones
                1. Twenty listening conversations held across the programme, the business and the board.
                2. Every pilot and AI contract audited for value, cost and status.
                3. A shortlist of three to five priorities, with the rest paused or stopped.
                4. A reset plan presented to the executive team and the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reset plan based on twenty conversations and a full pilot audit, presented to executives and the board within sixty days."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book twenty listening conversations across the programme and the business"
                - "Audit every pilot and AI contract for value, cost and status"
                - "Choose three to five priorities and list what will pause"
                - "Present the reset plan to the executive team and board"
            - name: AI agent deployment controls and permissions
              description: |-
                ## Purpose
                AI agents that take actions, such as sending emails, updating records or making payments, carry different risks from tools that only draft text. Setting rules for what agents may do alone, what needs human approval and how their permissions are granted, logged and reviewed keeps automation safe as it spreads.

                ## Milestones
                1. Agent actions classified as read-only, reversible or irreversible.
                2. A rule that irreversible actions such as payments and external messages need human approval.
                3. Agent permissions granted through the identity system with least access.
                4. Every agent action logged and permissions reviewed monthly.

                ## Notes
                Treat an agent like a new employee with system access: named owner, minimum permissions, logged actions and a way to switch it off.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written agent action rules with approval requirements, least-access permissions through the identity system and monthly permission reviews."
                cadence: rolling
              tasks:
                - "Classify planned agent actions as read-only, reversible or irreversible"
                - "Write the rule for which actions need human approval"
                - "Ask security to grant agent permissions through the identity system"
                - "Review agent permissions and action logs with security @recurring(monthly:7)"
            - name: Evaluation suite for production AI systems
              description: |-
                ## Purpose
                Every model update, prompt change or new data source can quietly change an AI system's quality. A standing evaluation suite, a few hundred test cases with expected answers and run before every change, gives the organisation the same safety net that regression tests give software teams.

                ## Milestones
                1. A test set of real examples with expected answers for each production use case.
                2. Pass thresholds agreed with the business owner.
                3. The suite run before every model, prompt or data change.
                4. Results stored so quality trends can be shown over time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each production AI use case has a test set with agreed thresholds, run before every change, with results stored over time."
                cadence: rolling
              tasks:
                - "Ask each business owner for a hundred real examples with expected answers"
                - "Agree pass thresholds with each business owner"
                - "Add the evaluation run to the change approval checklist"
                - "Run the evaluation suite on every production use case @recurring(monthly:18)"
            - name: Proprietary data as an AI advantage
              description: |-
                ## Purpose
                When every competitor can buy the same models, the lasting difference lies in data nobody else has and in workflows built around it. Identifying which of your data is unique, valuable and lawful to use, and investing in capturing more of it, turns AI from a cost of doing business into a source of advantage.

                ## Milestones
                1. Data sets that competitors cannot easily obtain listed.
                2. Each rated for uniqueness, value to AI use cases and permission to use.
                3. Two or three data assets chosen for investment.
                4. Plans in place to capture more of that data through normal operations.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rated list of proprietary data assets, with two or three chosen for investment and capture plans approved."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the data sets competitors could not easily obtain"
                - "Rate each for uniqueness, value and permission to use"
                - "Choose two or three data assets for investment"
                - "Plan how normal operations can capture more of that data"
            - name: AI-enabled products and new revenue options
              description: |-
                ## Purpose
                Beyond internal efficiency, AI can change what you sell: faster service tiers, new advisory products or data services. Assessing a handful of revenue options with customer evidence, pricing logic and risk tier keeps the conversation on value customers will pay for, not on features competitors happen to announce.

                ## Milestones
                1. Five AI-enabled product or service options described.
                2. Each tested with at least five customer conversations.
                3. Pricing logic and the risk tier noted for each.
                4. One option chosen for a pilot with a business owner.

                ## Notes
                Ask the agent to summarise customer interview notes, then check the summary against the original notes before you rely on it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five AI-enabled revenue options assessed with customer evidence, pricing and risk tier, and one chosen for a pilot with a named owner."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Describe five AI-enabled product or service options in a paragraph each"
                - "Hold five customer conversations on each option"
                - "Ask the agent to summarise the customer interview notes by option"
                - "Choose one option for a pilot and name its owner"
            - name: Model concentration and exit plan
              description: |-
                ## Purpose
                Relying on one model supplier exposes the organisation to price rises, outages, policy changes and the supplier retiring the model you built on. A written exit plan, with an abstraction layer where it matters, a tested alternative model and contract terms on notice periods, keeps switching possible.

                ## Milestones
                1. Dependence on each model supplier mapped by use case.
                2. An alternative model identified and tested for the most critical use cases.
                3. Contract terms on model retirement notice and data return reviewed.
                4. A written exit plan with estimated switching time and cost.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written model exit plan with a tested alternative for critical use cases and known switching time and cost."
                cadence: cyclic
              tasks:
                - "Map which use cases depend on each model supplier"
                - "Test an alternative model on the evaluation suite for the most critical use case"
                - "Ask legal to check model retirement notice and data return terms"
                - "Test the model exit plan on one critical use case @recurring(yearly)"
---

# Enterprise AI Strategy

This area is for the executive who has been handed AI as a strategic question, and for the managers who have to make it work in real teams. It starts with the foundations (an agreed ambition, an honest inventory of the AI already in use, a scored use-case list, data readiness, an interim usage policy and a risk appetite), then the steering, value, risk and cost machinery, the knowledge a leader needs to judge models and vendors, the platform, pilot and operating model decisions, the dated approvals and exercises, the situations that bend the usual playbook, and finally the specialist work on agents, evaluation and differentiation.

What repeats is a monthly steering meeting and value update, a weekly intake triage and pilot check-in, monthly risk, cost, adoption, output-sampling and agent permission reviews, quarterly model inventory, policy and board briefings, and a yearly strategy refresh, tabletop exercise and exit-plan test. The Purchase decision, Vendor, Risk register, Metrics log, Compliance control and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
