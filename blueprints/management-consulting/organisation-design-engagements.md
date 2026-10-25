---
id: management-consulting.organisation-design-engagements
name: Organisation Design Engagements
description: "A delivery method for organisation design work: the question and scope, a clean people baseline, design principles, options, spans and layers, role definitions, selection and a transition plan that holds up on day one."
category: business
version: 1.0.0
tags: [management-consulting, organisation-design-engagements, knowledge-worker, organisation-design, spans-and-layers, operating-model, role-design, transition-planning]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - meeting-notes
    - metrics-log
    - purchase-decision
    - risk-register
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Organisation Design Engagements
          description: "Delivering organisation design work: current state analysis, design principles, options, spans and layers, role definitions and transition plans."
          projects:
            - name: The organisation design question and its trigger
              description: |-
                ## Purpose
                Clients rarely ask for an organisation design for its own sake: a new strategy, a merger, a cost target, a new chief executive or a failing matrix sits behind the request. Writing the trigger and the question in one sentence each, such as how should the commercial function be organised to sell solutions rather than products, stops the work drifting into a chart redraw that solves nothing.

                ## Milestones
                1. The trigger for the redesign named, with the date it became urgent.
                2. The design question written in one sentence that a sponsor could repeat.
                3. Two or three outcomes the new organisation must deliver, stated as results, not structures.
                4. Any hidden objective, such as a cost figure or a person to accommodate, surfaced and recorded.
                5. The question and outcomes confirmed by the sponsor in writing.

                ## Notes
                If the sponsor answers with a structure (we need three regions), ask what problem three regions would solve. The structure they arrive with is a hypothesis, not the brief.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence design question, its trigger and up to three outcome statements, confirmed by the sponsor by email."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the sponsor what event made the redesign necessary now"
                - "Draft the design question in one sentence and send it for comment"
                - "List the outcomes the new organisation must deliver in measurable terms"
                - "Ask directly whether there is a cost or headcount figure behind the request"
            - name: Design scope, levels and boundaries agreement
              description: |-
                ## Purpose
                An organisation design without boundaries expands until it reaches the board. Agreeing which units, legal entities, countries and levels are in scope, which are only touched at the interface and which topics are out (pay, location, outsourcing), gives the team a finish line and protects the sponsor from promising reviews nobody has funded.

                ## Milestones
                1. A list of units and entities in scope, at the interface and out of scope.
                2. The levels to be designed agreed, for example the top three layers in detail and the rest in principle.
                3. Excluded topics such as pay, office locations or outsourcing written down.
                4. The handover point stated: what the client's HR team owns after detailed design.
                5. The scope note signed off by the sponsor and the HR director.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page scope note naming in-scope units, design depth by level, excluded topics and the handover point, signed off by sponsor and HR director."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every unit and legal entity the sponsor has mentioned so far"
                - "Mark each one as in scope, interface only or out of scope"
                - "Agree with the sponsor how many levels will be designed in detail"
                - "Send the scope note to the sponsor and HR director for sign-off"
            - name: Current state organisation chart rebuilt from HR data
              description: |-
                ## Purpose
                Intranet organisation charts are usually months out of date and drawn by hand, with dotted lines nobody can explain. Rebuilding the chart from a position-level extract of the HR system, with every employee, contractor and vacancy tied to a manager, gives a current state that the client recognises and that every later analysis can rest on.

                ## Milestones
                1. A position-level extract from the HR system with manager identifiers received.
                2. Contractors, vacancies and secondees added from separate sources and flagged.
                3. Broken reporting lines, such as people reporting to leavers, fixed with HR.
                4. A generated chart for each in-scope unit checked by its head.
                5. The extract date recorded as the baseline date for the whole engagement.

                ## Notes
                Ask for the data by position, not only by person. Vacant positions and roles held by contractors are where much of the real structure hides.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data-generated current state chart covering every in-scope position, with a stated baseline date and each unit head's confirmation."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Send HR a request for a position-level extract with manager IDs"
                - "Ask procurement or finance for the list of long-term contractors"
                - "List every reporting line that points to a leaver or an empty position"
                - "Send each unit head their generated chart to confirm or correct"
            - name: Headcount and people cost baseline by unit and level
              description: |-
                ## Purpose
                HR counts people, finance counts cost centres and the two rarely agree. A baseline that reconciles headcount, full-time equivalents and fully loaded people cost by unit and level, with the gap to the finance ledger explained, is what any later claim about the cost of an option will be measured against.

                ## Milestones
                1. Headcount and FTE by unit and level from the HR extract.
                2. Fully loaded cost per position, including on-costs, agreed with finance.
                3. The total reconciled to the finance ledger with every gap over two percent explained.
                4. Contractor and agency spend shown separately beside employee cost.
                5. The baseline frozen and version-numbered.

                ## Notes
                Agree the on-cost assumption once, in writing. Arguments about whether pension and benefits are included can stall an options paper for a week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A frozen baseline of headcount, FTE and loaded cost by unit and level that reconciles to the ledger within two percent, with gaps explained."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask finance for people cost by cost centre for the last full year"
                - "Agree the on-cost percentage or method with the finance lead"
                - "Reconcile HR headcount cost to the ledger and list the gaps"
                - "Freeze the baseline and note its version and date on the cover tab"
            - name: Confidentiality protocol for named people data
              description: |-
                ## Purpose
                Named salary data, performance ratings and a draft chart with empty boxes are the most sensitive files on any engagement. Agreeing who can see named data, where it is stored, how files are labelled and what goes into slides before the work starts prevents the leak that ends an engagement and damages people who have not yet been told anything.

                ## Milestones
                1. A named list of people allowed to see personal data, agreed with HR.
                2. A single restricted storage location set up, with no copies on laptops or email.
                3. Slides and drafts using position codes or role titles rather than names until appointments are final.
                4. A file naming and labelling rule in place for restricted documents.
                5. The protocol checked against the client's data protection policy with their privacy lead.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written protocol with an access list, one restricted storage location and a no-names rule for drafts, agreed by HR and the client's privacy lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR who on the client side may see named people data"
                - "Set up one restricted folder and move any named files into it"
                - "Replace names with position codes in every draft chart"
                - "Audit who has access to the restricted folder and remove anyone off the list @recurring(monthly:26)"
            - name: Strategy to capability map for the new organisation
              description: |-
                ## Purpose
                Structures are only right or wrong relative to what the organisation has to be good at. Translating the strategy into eight to fifteen capabilities, each rated for strategic importance and current strength, shows where the design has to concentrate expertise, where it can share and what can be bought in, before anyone draws a box.

                ## Milestones
                1. Eight to fifteen capabilities named in plain language from the strategy documents.
                2. Each capability rated for importance to the strategy and for current strength.
                3. The differentiating capabilities, high importance and low strength, highlighted.
                4. The map tested with three or four executives and adjusted.
                5. The map adopted as an input to the design principles.

                ## Notes
                Start from the **Skills matrix** template. Name capabilities as things the organisation does (price complex deals, run plants safely), not as departments.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A capability map of eight to fifteen items with importance and strength ratings, tested with at least three executives."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the strategy documents and list every capability they imply"
                - "Group the list into eight to fifteen capabilities with plain names"
                - "Rate each capability for importance and current strength"
                - "Test the map with three executives and record their changes"
            - name: Stakeholder map of who gains and loses in the redesign
              description: |-
                ## Purpose
                Every organisation design moves power: budgets, headcount and direct lines to the chief executive. Mapping each senior stakeholder by influence, what they stand to gain or lose and how they are likely to react lets the sponsor plan conversations before the options paper lands, rather than discovering opposition in the steering meeting.

                ## Milestones
                1. Every executive and head of unit in scope listed with their current span and budget.
                2. For each, a note on what the likely options would do to their role.
                3. Each stakeholder rated for influence and likely stance.
                4. A named owner and timing for a private conversation with each high-influence opponent.
                5. The map kept in the restricted folder and refreshed as options change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A restricted stakeholder map covering every in-scope executive, with a stance rating and a planned conversation for each high-influence opponent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every in-scope executive with their current span and budget"
                - "Note what each likely option would change for each person"
                - "Agree with the sponsor who will speak to each likely opponent"
                - "Revisit the stakeholder map with the sponsor @recurring(monthly:8)"
            - name: Employee consultation and legal requirements check
              description: |-
                ## Purpose
                In many countries a change that affects jobs triggers duties to inform or consult employee representatives, works councils or unions, sometimes before the design is final. Getting the client's employment counsel and HR to set out the requirements for each country in scope, early, decides what the timeline can be and what can be said to whom.

                ## Milestones
                1. Every country and collective agreement in scope listed with HR.
                2. The client's employment counsel asked for the consultation duties in each, in writing.
                3. Points in the timeline where consultation must start or finish marked on the plan.
                4. Rules on what may be shared before consultation recorded for the team.
                5. Any open legal question logged with an owner on the client side.

                ## Notes
                This is the client's legal call, not the consultant's. Your job is to ask early, record the answers and build the timeline around them, never to advise on employment law.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of consultation duties per country from the client's employment counsel, with the resulting dates marked on the engagement plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask HR for every country, union and works council in scope"
                - "Request a written note on consultation duties from employment counsel"
                - "Mark the consultation start and end points on the engagement plan"
                - "Brief the team on what may not be shared before consultation"
            - name: Weekly organisation design decision log
              description: |-
                ## Purpose
                Design choices are made in corridors, sponsor calls and workshops, and three weeks later nobody remembers why the planning team moved under operations. A log of every design decision, who made it, on what grounds and what it replaced keeps the design traceable when an executive reopens a settled question.

                ## Milestones
                1. A log with columns for decision, date, decision maker, reason and what it superseded.
                2. Every decision from the week entered by Friday.
                3. Reopened decisions marked rather than overwritten.
                4. The log shared with the sponsor in a short weekly summary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log updated every week of the design phase, with a named decision maker and reason for every entry."
                cadence: rolling
              tasks:
                - "Set up the decision log with decision, owner, reason and superseded columns"
                - "Enter last week's decisions from notes and emails"
                - "Update the decision log and send the sponsor the week's entries @recurring(weekly:fri)"
                - "Mark any reopened decision with the date and who reopened it"
            - name: Organisation data change control
              description: |-
                ## Purpose
                People join, leave and move every week, so a baseline frozen in month one drifts from reality by the time the design is approved. A simple change control routine, a monthly HR extract compared with the baseline and every difference logged, means the transition plan starts from the organisation as it is, not as it was.

                ## Milestones
                1. A monthly HR extract arranged with the same fields as the baseline.
                2. Joiners, leavers and moves since the baseline listed each month.
                3. Changes that affect the design, such as a new hire into a role being removed, flagged to the sponsor.
                4. The working model updated while the frozen baseline stays untouched.

                ## Notes
                Ask HR to pause or route through the sponsor any new senior hires in scope while the design is live. One well-meant appointment can pre-empt a whole option.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly change log comparing the HR extract with the baseline, with every design-relevant change flagged to the sponsor."
                cadence: rolling
              tasks:
                - "Agree a monthly extract date and field list with HR"
                - "Compare the new extract with the baseline and log differences @recurring(monthly:4)"
                - "Flag hires into roles under review to the sponsor"
                - "Ask HR to route senior hires in scope through the sponsor"
            - name: Weekly sponsor check-in on people issues
              description: |-
                ## Purpose
                Sponsors carry the hardest part of an organisation design: knowing which named people may not fit the new roles. A short private weekly conversation on people issues, separate from the project status meeting, keeps those topics off slides and email and stops them surfacing for the first time in a steering committee.

                ## Milestones
                1. A standing thirty-minute slot with the sponsor, separate from status reporting.
                2. A short restricted agenda: people issues, stakeholder moves and decisions needed.
                3. Notes kept only in the restricted folder.
                4. Actions from each conversation followed up before the next one.

                ## Notes
                Start from the **Meeting notes** template. Keep these notes factual and brief: they may be disclosable later.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A private weekly sponsor conversation held throughout design, with restricted notes and every action closed or carried forward."
                cadence: rolling
              tasks:
                - "Ask the sponsor for a standing private thirty-minute slot"
                - "Draft a three-item agenda for people issues, stakeholders and decisions"
                - "Hold the private people check-in with the sponsor @recurring(weekly:tue)"
                - "File the notes in the restricted folder within the day"
            - name: Rumour and leak response routine
              description: |-
                ## Purpose
                Word that consultants are redrawing the organisation spreads within days, and silence is read as confirmation of the worst. A routine that logs what people are hearing, agrees holding lines with HR and communications, and acts quickly on any real leak keeps anxiety contained and protects the people whose roles are under discussion.

                ## Milestones
                1. A short holding statement agreed with HR and communications.
                2. A rumour log fed by HR business partners and the client team.
                3. A named person who decides on the response to a real leak within hours.
                4. Each rumour answered, corrected or deliberately left, with the reason noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An agreed holding statement, a rumour log reviewed every week and a named leak response owner, in place before interviews start."
                cadence: rolling
              tasks:
                - "Agree a three-sentence holding statement with HR and communications"
                - "Ask HR business partners to pass on what staff are hearing"
                - "Name one person who decides on any leak response"
                - "Review the rumour log with HR and communications @recurring(weekly:thu)"
            - name: Open design questions tracker
              description: |-
                ## Purpose
                Detailed design throws up hundreds of small questions: who owns pricing approvals, where the data team sits, whether a regional role keeps its title. A tracker with an owner and a due date for each, reviewed every week, stops the small questions piling up until they block role profiles and the transition plan.

                ## Milestones
                1. Every open question logged with an owner, a due date and the decision it blocks.
                2. Questions sorted into those the team can close and those the sponsor must decide.
                3. Overdue questions raised at the weekly sponsor check-in.
                4. Closed questions moved into the decision log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker in which every open design question has an owner and date, reviewed every week, with fewer than ten overdue at any point."
                cadence: rolling
              tasks:
                - "Collect open questions from workshop notes into one tracker"
                - "Assign each question an owner and a due date"
                - "Review the open questions tracker and chase overdue items @recurring(weekly:wed)"
                - "Move each closed question into the decision log"
            - name: Weekly role mapping progress check
              description: |-
                ## Purpose
                Mapping every current position to a role in the new design is slow, unglamorous and the place where transition plans slip. A Monday check on how many positions are mapped, unmapped or disputed, by unit, shows the sponsor where the bottlenecks are and which unit heads have not done their part.

                ## Milestones
                1. A count of positions mapped, unmapped and disputed for each unit.
                2. A weekly target for mapped positions agreed with HR.
                3. Disputed mappings listed with the two views and who will decide.
                4. Units behind target named to the sponsor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly mapping status by unit, against an agreed target, sent to the sponsor until every in-scope position is mapped."
                cadence: rolling
              tasks:
                - "Agree a weekly mapping target per unit with HR"
                - "Count mapped, unmapped and disputed positions by unit @recurring(weekly:mon)"
                - "List disputed mappings with both views and a decision owner"
                - "Name units behind target in the sponsor note"
            - name: Monthly spans and layers refresh after go-live
              description: |-
                ## Purpose
                Within a year of a redesign, layers creep back in as people are promoted into new manager roles and teams of two appear. Refreshing the spans and layers numbers every month after go-live, against the targets in the design, shows the client where the structure is drifting while it is still cheap to correct.

                ## Milestones
                1. The design targets for average span, minimum span and maximum layers written down.
                2. A monthly calculation from the HR extract set up and checked.
                3. Managers with fewer than three direct reports listed by unit.
                4. A quarterly drift summary sent to the HR director.

                ## Notes
                Start from the **Metrics log** template. Hand this routine to the client's HR analytics team within six months; it should not depend on the consultants.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly spans and layers figures against design targets for the first year after go-live, with a quarterly drift summary to the HR director."
                cadence: rolling
              tasks:
                - "Write the design targets for spans and layers on the first tab"
                - "Calculate spans and layers from the latest HR extract @recurring(monthly:12)"
                - "List managers with fewer than three direct reports"
                - "Send the HR director a drift summary @recurring(quarterly)"
            - name: Organisation design reading and case habit
              description: |-
                ## Purpose
                Organisation design has a thin but useful literature, from star models and design criteria to research on spans and decision rights, and most consultants learn only what their last project needed. An hour a month on a book chapter, a practitioner article or a past case from the firm's library builds the judgement to push back when a client wants a fashionable structure.

                ## Milestones
                1. A short list of three books and two practitioner sources chosen.
                2. One reading or past case covered each month, with a three-line note.
                3. The notes kept in one place and tagged by topic.
                4. One idea from the reading tried on a live engagement.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve monthly reading notes in a single tagged file within a year, with at least one idea applied on an engagement."
                cadence: rolling
              tasks:
                - "Choose three organisation design books and two practitioner sources"
                - "Read one chapter or past case and write a three-line note @recurring(monthly:20)"
                - "Tag each note by topic such as spans, matrix or decision rights"
                - "Pick one idea to test on your current engagement"
            - name: Quarterly organisation health pulse after go-live
              description: |-
                ## Purpose
                Even a design that looks clean on paper can leave people unsure who decides what. A short quarterly pulse of eight to ten questions on clarity of roles, decision speed and collaboration across the new boundaries, compared with a pre-change baseline, shows whether the design is working and where it needs a fix.

                ## Milestones
                1. Eight to ten pulse questions agreed with HR, run once before go-live as a baseline.
                2. The pulse sent each quarter to the affected population.
                3. Results compared with the baseline by unit and level.
                4. Two or three fixes agreed with the HR director after each round.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline pulse and at least three quarterly rounds after go-live, each with results by unit and a list of agreed fixes."
                cadence: cyclic
              tasks:
                - "Draft eight to ten pulse questions on role clarity and decisions"
                - "Run the baseline round before the new structure goes live"
                - "Send the quarterly pulse and compare with the baseline @recurring(quarterly)"
                - "Agree two or three fixes with the HR director after each round"
            - name: Spans and layers analysis method
              description: |-
                ## Purpose
                Spans and layers is the most requested organisation analysis and one of the easiest to get wrong: counting assistants as reports, ignoring dotted lines or comparing a call centre with a research lab. Learning the method properly, from layer counting to span distribution by type of work, lets you present findings a sceptical chief operating officer cannot pick apart.

                ## Milestones
                1. Layers counted from the chief executive down for every position in scope.
                2. Spans calculated with clear rules on assistants, vacancies and contractors.
                3. Span distributions shown by unit and type of work, not only as averages.
                4. Managers of one or two people identified with the reason for each.
                5. A one-page method note explaining every counting rule.

                ## Notes
                Average span hides almost everything. Show the distribution and the share of managers below an agreed minimum, and judge spans against the type of work being managed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A spans and layers analysis of one real or sample organisation with distributions by work type and a written counting method."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write counting rules for assistants, vacancies and contractors"
                - "Calculate layers and spans for every position in the baseline"
                - "Chart span distributions by unit and type of work"
                - "List every manager with one or two reports and the reason"
            - name: Design principles that separate the options
              description: |-
                ## Purpose
                Most design principle lists say customer focus, accountability and agility, which every option satisfies and none can be scored against. Learning to write six to eight principles that force real choices, such as one owner for each customer segment's profit, gives the top team a fair way to compare options and a reason to reject their favourite.

                ## Milestones
                1. Draft principles derived from the design question and capability map.
                2. Each principle written so that at least one plausible option would fail it.
                3. Principles ranked, so the team knows which wins when two conflict.
                4. The list cut to six to eight and agreed with the sponsor.
                5. A test showing the principles separate at least three sample options.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Six to eight ranked design principles, each of which at least one realistic option fails, agreed with the sponsor."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft ten candidate principles from the question and capability map"
                - "Check each principle against three sample options and drop any all pass"
                - "Rank the remaining principles in order of importance"
                - "Agree the final six to eight with the sponsor"
            - name: Operating model archetypes and their trade-offs
              description: |-
                ## Purpose
                Functional, divisional by product or region, matrix, front-back and platform models each solve one problem and create another. Knowing the archetypes well, with real examples and the conditions under which each works, means you can explain to a client why their competitor's structure will not suit them and what the matrix will cost in management time.

                ## Milestones
                1. A one-page summary of five archetypes with what each optimises.
                2. For each, the typical failure mode and the coordination cost it brings.
                3. Two public examples of each archetype in your client's broad sector.
                4. A short note on which archetypes fit the current client's strategy and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page archetype comparison with failure modes and two examples each, plus a written fit note for the current client."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise five archetypes and what each optimises on one page"
                - "Write the typical failure mode for each archetype"
                - "Find two public examples of each in the client's sector"
                - "Ask the agent to draft a fit note against the client's design principles for you to edit"
            - name: Decision rights mapping with accountability charts
              description: |-
                ## Purpose
                Many organisation problems are really decision problems: three people think they own pricing, or nobody can approve a hire under a certain grade. Mapping the twenty or thirty decisions that matter most, and who recommends, decides, agrees and is informed for each, often fixes more than moving boxes and is the part clients use longest.

                ## Milestones
                1. Twenty to thirty critical decisions listed with the sponsor.
                2. Current decision rights for each captured from interviews and policies.
                3. Future decision rights drafted for each, with one decider only.
                4. Conflicts between the chart and the authority matrix flagged to finance.
                5. The decision rights chart agreed in a session with the decision owners.

                ## Notes
                One decision, one decider. If a draft has two names in the decide column, the conflict has been deferred, not solved.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A decision rights chart for twenty to thirty critical decisions with exactly one decider each, agreed by the decision owners."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List twenty to thirty critical decisions with the sponsor"
                - "Capture who decides each one today from interviews and policy"
                - "Draft future decision rights with a single decider for each"
                - "Check the draft against the delegated authority matrix with finance"
            - name: Activity analysis and time allocation survey
              description: |-
                ## Purpose
                Charts show who reports to whom, not what people spend their days doing. A short activity survey, where staff allocate their time across a standard activity list, shows duplicated work across units, managers who spend most of their time doing rather than managing and the effort behind each capability, which is the evidence options need.

                ## Milestones
                1. A standard activity list of twenty to forty items agreed with unit heads.
                2. A survey built, tested on five people and adjusted.
                3. Responses from at least eighty percent of the in-scope population.
                4. FTE by activity calculated and duplicated activities highlighted.
                5. Results shared with unit heads before any option uses them.

                ## Notes
                Keep the survey under fifteen minutes and explain why it is being run. A poor explanation turns an activity survey into a rumour about job cuts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Activity data from at least eighty percent of in-scope staff, converted to FTE by activity, with duplications reviewed by unit heads."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft an activity list of twenty to forty items with unit heads"
                - "Test the survey on five people and fix confusing items"
                - "Track response rates by unit and chase below eighty percent"
                - "Convert responses into FTE by activity and flag duplicates"
            - name: Writing role profiles and accountability statements
              description: |-
                ## Purpose
                A new box on a chart means nothing until the role has a purpose, accountabilities, decision rights and measures. Learning to write a one-page role profile that a candidate, a manager and an HR grading panel can all use, without the usual list of thirty duties, is the skill that turns a design into something people can be appointed to.

                ## Milestones
                1. A one-page role profile format agreed with HR, including grade inputs.
                2. Five to seven accountabilities per role, written as outcomes.
                3. Key decisions and measures added from the decision rights chart.
                4. Three draft profiles reviewed by the future line manager and HR.
                5. A profile writing guide handed to the client's HR team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A role profile format and at least three finished profiles reviewed by line managers and HR, plus a guide for the client team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree a one-page role profile format with HR"
                - "Draft three profiles with five to seven outcome accountabilities each"
                - "Add decisions and measures from the decision rights chart"
                - "Review the drafts with the future line managers and HR"
            - name: Position-level organisation model in a spreadsheet
              description: |-
                ## Purpose
                Options, headcount impacts and transition plans all depend on a model where every position has a current unit, a future role, a grade and a cost. Building that model carefully, with checks that totals tie back to the baseline, saves days each time the sponsor asks what an option costs or how many people change manager.

                ## Milestones
                1. One row per position with current and future unit, role, grade and cost.
                2. Check cells that tie the model totals to the frozen baseline.
                3. Scenario columns for each option under consideration.
                4. Summary outputs for headcount, cost and number of people changing manager.
                5. Access restricted under the confidentiality protocol.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A position-level model whose totals tie to the baseline, producing headcount, cost and manager change counts for each option."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Lay out one row per position with current and future fields"
                - "Add check cells that compare totals with the frozen baseline"
                - "Build summary outputs for headcount, cost and manager changes"
                - "Reconcile the model total with the latest HR headcount @recurring(monthly:2)"
            - name: Structural options long list to shortlist
              description: |-
                ## Purpose
                Clients expect to see real alternatives, and a design team that brings one option plus two straw men loses trust quickly. Generating a long list of eight to twelve structural options, from light-touch changes to a new archetype, then cutting to three serious ones against the principles, shows the sponsor that their preferred answer survived a fair contest.

                ## Milestones
                1. Eight to twelve options described on one page each, including a minimal change option.
                2. Each option screened against the must-have principles.
                3. Three serious options taken forward, with reasons for dropping the rest.
                4. The shortlist and reasons agreed with the sponsor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented long list of at least eight options and a shortlist of three, with written reasons for each option dropped."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch eight to twelve options including a minimal change option"
                - "Screen each option against the must-have principles"
                - "Write one sentence on why each dropped option failed"
                - "Present the shortlist of three to the sponsor"
            - name: Scoring shortlisted options against the principles
              description: |-
                ## Purpose
                Without a visible scoring method, the option with the most senior supporter wins. Scoring the three shortlisted options against the ranked principles, with evidence for each score and the headcount and cost impacts from the model beside them, gives the top team a structured choice and a record of why it was made.

                ## Milestones
                1. Each shortlisted option scored against every principle, with a line of evidence per score.
                2. Cost, headcount and number of people changing manager shown for each option.
                3. The key risks of each option listed with possible mitigations.
                4. A recommended option with the main trade-off stated plainly.
                5. The scoring reviewed by two people outside the core team before it is shown.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scoring table for three options with evidence per score, model impacts and a recommendation, reviewed by two people outside the team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Score each option against every principle with one line of evidence"
                - "Add cost, headcount and manager change figures from the model"
                - "Write the main trade-off of the recommended option in one sentence"
                - "Ask two colleagues outside the team to challenge the scores"
            - name: Choosing an organisation charting and modelling tool
              description: |-
                ## Purpose
                Hand-drawn charts in slides break the moment one position moves, and a large redesign can need dozens of versions. Deciding early whether a spreadsheet and slide generator is enough or whether a dedicated org modelling tool is worth the licence, security review and data upload saves rework and late nights before every steering meeting.

                ## Milestones
                1. Requirements written: position count, scenarios, chart output, access control and data residency.
                2. Two or three tools or approaches compared, including the spreadsheet option.
                3. The client's information security requirements checked for any tool holding people data.
                4. A choice recorded with cost, set-up time and who will maintain it.

                ## Notes
                Start from the **Purchase decision** template. Under about five hundred positions, a well-built spreadsheet and a chart generator are usually enough.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool choice comparing at least two approaches against written requirements, cleared by the client's information security team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the requirements for positions, scenarios, outputs and security"
                - "Compare two tools with the spreadsheet approach against the list"
                - "Ask the client's information security team about holding people data"
                - "Record the choice with cost and the named maintainer"
            - name: Centralise or embed decision for support functions
              description: |-
                ## Purpose
                Finance, HR, IT, procurement and analytics teams are often split between a centre and the business units, and every redesign reopens the question. Deciding function by function what is centralised, what sits in a centre of expertise and what stays embedded, using activity data and service needs rather than habit, settles the most contested boundary in the design.

                ## Milestones
                1. Each support function's current split between centre and units shown in FTE.
                2. Activities classed as transactional, expert or business partnering.
                3. A proposed home for each activity class with the reason.
                4. Service expectations the business units need written down for each function.
                5. The proposal agreed with the function heads and the unit heads.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A function-by-function decision on central, expertise centre or embedded homes, with service expectations, agreed by function and unit heads."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Show each support function's centre and unit FTE from the activity data"
                - "Class activities as transactional, expert or partnering"
                - "Propose a home for each activity class with a one-line reason"
                - "Agree service expectations with the business unit heads"
            - name: Span and layer targets for the new design
              description: |-
                ## Purpose
                Targets such as no more than seven layers and an average span of eight are often copied from a benchmark without asking what kind of work is being managed. Setting targets by type of work, with explicit exceptions for specialist teams and new units, gives the design a discipline that line managers accept instead of resisting.

                ## Milestones
                1. Types of work in scope classified, for example routine operations, specialist and leadership.
                2. A target span range set for each type of work.
                3. A maximum number of layers from the chief executive to the front line.
                4. Allowed exceptions listed with the reason for each.
                5. Targets agreed with the sponsor and written into the design principles.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Span ranges by type of work, a maximum layer count and a written list of exceptions, agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Classify the in-scope work into three or four types"
                - "Propose a span range for each type with a reason"
                - "Set a maximum number of layers and list exceptions"
                - "Agree the targets with the sponsor and add them to the principles"
            - name: Top team structure for levels one and two
              description: |-
                ## Purpose
                The chief executive's direct reports and the layer below them decide most of what follows, and they are also the roles the most powerful people want. Designing levels one and two first, with clear mandates and interfaces, and getting the chief executive to commit to them, lets detailed design start from something stable.

                ## Milestones
                1. A level one structure with a one-paragraph mandate for each role.
                2. The main interfaces between level one roles mapped, with handoffs named.
                3. Level two roles drafted under each level one role.
                4. The structure tested against the principles and the critical decisions.
                5. The chief executive's sign-off recorded before names are discussed.

                ## Notes
                Design the roles before discussing who fills them. If names enter the conversation too early, the structure bends around individuals.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off level one and two structure with a mandate per role and mapped interfaces, agreed before any appointment discussion."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft a one-paragraph mandate for each level one role"
                - "Map the handoffs between level one roles"
                - "Draft level two roles under each level one role"
                - "Book the chief executive sign-off before any naming discussion"
            - name: Detailed design below level two
              description: |-
                ## Purpose
                Once the top is settled, the work moves to the hundreds of roles where people actually sit. Running detailed design unit by unit with each new level two leader, against the span targets and role profile format, produces team structures that leaders own and HR can grade, rather than charts imposed by the consultants.

                ## Milestones
                1. A detailed design plan with one slot per unit and its new leader.
                2. Team structures drafted for each unit within the span and layer targets.
                3. Role profiles drafted for every new or materially changed role.
                4. Exceptions to the targets logged with the reason.
                5. Each unit design signed off by its leader and HR.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed-off detailed structures and role profiles for every in-scope unit, within targets or with logged exceptions."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Schedule a detailed design slot with each new level two leader"
                - "Give each leader the targets, principles and profile format beforehand"
                - "Draft team structures with each leader in the session"
                - "Log any exception to the targets with the leader's reason"
            - name: Position-to-role mapping and impact assessment
              description: |-
                ## Purpose
                People need to know whether their job is unchanged, changed or at risk, and HR needs the numbers for the consultation and selection processes. Mapping every current position to a future role, classing the change and counting the impact by unit gives the client the facts it needs to plan fairly and lawfully.

                ## Milestones
                1. Every current position mapped to a future role or marked as having no direct match.
                2. Each mapping classed, for example unchanged, changed, new or no match.
                3. Impact counts by unit, grade and location produced from the model.
                4. Disputed mappings resolved by the agreed decision owner.
                5. The impact assessment handed to HR and employment counsel.

                ## Notes
                The consultants map and count; the client decides on any individual's outcome with HR and legal advice. Keep that line clear in every document.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every in-scope position mapped and classed, with impact counts by unit, grade and location delivered to HR and employment counsel."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree the mapping classes with HR before mapping starts"
                - "Map each current position to a future role in the model"
                - "Produce impact counts by unit, grade and location"
                - "Hand the assessment to HR and employment counsel"
            - name: Current state diagnostic readout
              description: |-
                ## Purpose
                The diagnostic is the moment the top team agrees, or refuses to agree, that the current organisation has a problem worth fixing. A readout that leads with three or four findings tied to the design question, backed by spans, activity and decision rights evidence, and that ends with the design principles to be agreed, earns the right to propose change.

                ## Milestones
                1. Three or four findings, each linked to the design question.
                2. Evidence pages from the baseline, spans and layers and activity analysis.
                3. Interview themes included without identifying individuals.
                4. Pre-meetings held with the two most sceptical executives.
                5. Findings accepted or amended and recorded after the readout.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A diagnostic readout delivered to the top team, with findings accepted or amended and the outcome recorded within two days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the three or four findings as full sentences first"
                - "Build one evidence page for each finding"
                - "Book pre-meetings with the two most sceptical executives"
                - "Record which findings were accepted and which were changed"
            - name: Design principles sign-off with the executive team
              description: |-
                ## Purpose
                Principles agreed in a meeting are far harder to argue against later than principles written by consultants. A session where the executive team debates, ranks and signs off the six to eight principles, with the span targets and capability map in front of them, gives the options work its legitimacy and gives the sponsor a reference point when someone pushes their own structure.

                ## Milestones
                1. The draft principles and their rationale sent to executives a week ahead.
                2. A session held in which the principles are debated and ranked.
                3. Changes agreed in the room captured and read back before the close.
                4. The final principles circulated with a note of who agreed them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Ranked design principles signed off by the executive team in a session, circulated within two days with a record of who agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send the draft principles and rationale a week before the session"
                - "Prepare one example option that fails each principle"
                - "Read back the agreed changes before the session closes"
                - "Circulate the final principles with the list of who agreed"
            - name: Leadership appointments announcement plan
              description: |-
                ## Purpose
                Leaders remember for years the order in which they learned about their new roles, or about not having one. An announcement plan for level one and two appointments that sets who is told first, by whom, in person or by call, and what goes to the wider organisation the same day, protects both the appointees and the people who missed out.

                ## Milestones
                1. A sequence listing every affected leader, who tells them and when.
                2. Conversations with unsuccessful candidates scheduled before any public announcement.
                3. Talking points prepared for each conversation, agreed with HR.
                4. The organisation-wide announcement drafted and approved.
                5. A follow-up check with every affected leader within a week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every affected leader told in person or by call in the planned order before the organisation-wide announcement, with a follow-up within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every affected leader and who will tell each one"
                - "Schedule conversations with unsuccessful candidates first"
                - "Draft talking points for each conversation with HR"
                - "Book a follow-up check with each affected leader for the week after"
            - name: Manager briefing pack for announcement day
              description: |-
                ## Purpose
                On announcement day, staff ask their own manager what it means for them, not the chief executive. A briefing pack and a session the day before, with the new structure, the reasons, the timeline, what is known and not yet known, and the answers to the twenty questions people will ask, keeps the message consistent across hundreds of conversations.

                ## Milestones
                1. A pack with the structure, the reasons and the timeline in plain language.
                2. A question and answer list of at least twenty likely questions.
                3. Clear guidance on what managers must not speculate about.
                4. A briefing session for all managers held the day before.
                5. A channel for managers to send questions they could not answer.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A manager pack with at least twenty answered questions, briefed to all managers the day before the announcement, with a question channel open."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft twenty likely staff questions from the design summary"
                - "Agree answers to each question with HR and communications"
                - "Write a short list of topics managers must not speculate on"
                - "Book the manager briefing for the day before the announcement"
            - name: Day one readiness for the new structure
              description: |-
                ## Purpose
                On the day the new organisation goes live, payroll, system access, approval limits and reporting lines in the HR system all have to change at once, or people spend the first week unable to approve an invoice. A readiness checklist owned jointly with HR, IT and finance catches the mechanical failures that make a good design look bad.

                ## Milestones
                1. A checklist covering HR system changes, approval limits, access rights, cost centres and payroll.
                2. An owner and a completion date for every item.
                3. A go or no-go review held a week before day one.
                4. A day one issues line staffed for the first two weeks.
                5. Issues logged and closed, with a summary after two weeks.

                ## Notes
                Delegated authority limits are the item most often missed. Check that every new role that must approve spend can do so in the finance system on day one.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A go or no-go review held a week before go-live, every checklist item closed and a two-week issues summary delivered."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the day one checklist with HR, IT and finance leads"
                - "Assign an owner and date to every checklist item"
                - "Hold the go or no-go review a week before go-live"
                - "Staff a day one issues line for the first two weeks"
            - name: Six-month post-implementation design review
              description: |-
                ## Purpose
                Six months after go-live is late enough to see how the design works and early enough to fix it before the next budget round. A review that compares spans, layers, decision speed, pulse results and the outcomes set at the start against the original targets tells the client what to adjust and gives you an honest case study.

                ## Milestones
                1. The original design outcomes and targets pulled into one page.
                2. Current figures for spans, layers, cost and pulse results gathered.
                3. Interviews with eight to ten leaders on what works and what does not.
                4. Three to five recommended adjustments with owners.
                5. A short review report accepted by the sponsor.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A post-implementation review comparing results with the original targets, with three to five adjustments accepted by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull the original outcomes and targets onto one page"
                - "Gather current spans, layers, cost and pulse figures"
                - "Interview eight to ten leaders about the new structure"
                - "Write three to five adjustments with named owners"
            - name: Transition plan from current to future organisation
              description: |-
                ## Purpose
                Most organisation designs fail between the approved chart and the working organisation. A transition plan that sequences consultation, selection, announcements, system changes and handovers of work, with a risk register and a named owner on the client side, turns the design into dates and responsibilities the client can run after the consultants step back.

                ## Milestones
                1. A sequenced plan from approval to day one and the first ninety days.
                2. Consultation and selection steps placed as advised by HR and employment counsel.
                3. Handovers of work between old and new units listed with dates.
                4. A risk register with the top ten transition risks and mitigations.
                5. A named client owner for the plan and a weekly review in place.

                ## Notes
                Start from the **Risk register** template. Plan for the business to keep running: name who covers critical work while people are in selection.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved transition plan with dated steps, work handovers, a ten-item risk register and a named client owner."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Sequence the steps from design approval to ninety days after day one"
                - "Place consultation and selection steps as HR and counsel advise"
                - "List every handover of work between old and new units"
                - "Name the client owner and set up a weekly plan review"
            - name: Fair selection process for new and changed roles
              description: |-
                ## Purpose
                Where roles are new, fewer or materially changed, people will ask how appointments were made, and some will challenge them. A selection process designed with HR and approved by employment counsel, with published criteria, assessment steps and records for every decision, protects the client and treats candidates with respect.

                ## Milestones
                1. Selection pools defined for each new or changed role with HR.
                2. Selection criteria drawn from the role profiles and published to candidates.
                3. Assessment steps and panels agreed and panel members briefed.
                4. A record kept for each decision with scores and reasons.
                5. The process approved by employment counsel before it starts.

                ## Notes
                Consultants can design the process and brief panels, but should not sit on panels or decide on individuals. That keeps the decisions with the client, where they belong.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A selection process approved by employment counsel, with published criteria per role and a scored record for every appointment decision."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Define selection pools for each new or changed role with HR"
                - "Draft criteria for each role from its profile"
                - "Brief every panel member on criteria and record keeping"
                - "Check selection progress and records with HR @recurring(weekly:thu)"
            - name: Communication sequence for affected employees
              description: |-
                ## Purpose
                People affected by a redesign deserve to hear it from their leader, before the rumour mill and before customers do. A sequenced communication plan, by audience and channel, from the first announcement through consultation to day one, agreed with HR and communications and aligned with any legal requirements, keeps the messages honest, timely and consistent.

                ## Milestones
                1. Audiences listed: directly affected staff, wider staff, unions, customers and suppliers.
                2. For each audience, the message, messenger, channel and timing set out.
                3. Legal constraints on timing and content checked with employment counsel.
                4. Feedback channels and question routes open from the first announcement.
                5. The plan reviewed every week until day one.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A communication plan covering every audience with message, messenger and timing, checked by employment counsel and reviewed weekly until day one."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every audience affected by the redesign"
                - "Set a message, messenger, channel and timing for each audience"
                - "Check timing and content constraints with employment counsel"
                - "Review the communication plan with HR and communications @recurring(weekly:wed)"
            - name: First organisation design project as an analyst
              description: |-
                ## Purpose
                Analysts on organisation design work mostly handle data: HR extracts, the position model, spans calculations and dozens of chart versions, all under strict confidentiality. Setting yourself a plan for the first four weeks, with the analyses you will own and the habits that keep people data safe, makes you trusted with the sensitive work quickly.

                ## Milestones
                1. The confidentiality protocol read and your access confirmed.
                2. Ownership agreed with your manager for the baseline, model or spans analysis.
                3. A checks routine in place for every number you send out.
                4. One piece of feedback asked for and acted on in the first two weeks.
                5. A short note of what you learned at the end of the project.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Named ownership of at least one core analysis, a checks routine for every output and two pieces of feedback recorded during the project."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the confidentiality protocol and confirm your folder access"
                - "Agree with your manager which analysis you will own"
                - "Write a five-point check you run before sending any number"
                - "Ask your manager for feedback at the end of week two"
            - name: Leading an organisation design engagement as manager
              description: |-
                ## Purpose
                Managing an organisation design means holding three things at once: the analysis, the sponsor's confidence on people issues and the client HR team's capacity. A plan for how you will run the phases, the private conversations and the handoffs to HR, with a weekly note to the partner, keeps the engagement on track when the politics heat up.

                ## Milestones
                1. A phase plan from diagnostic to transition with owners on both sides.
                2. Standing slots with the sponsor, HR director and partner.
                3. A view of the client HR team's capacity and where it will be stretched.
                4. Escalation rules for leaks, legal questions and disputed appointments.
                5. A weekly partner note sent throughout the engagement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A phase plan with client and team owners, agreed escalation rules and a partner note sent every week of the engagement."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft the phase plan with owners on the client and consulting side"
                - "Ask the HR director where their team will be stretched"
                - "Write escalation rules for leaks, legal questions and disputes"
                - "Send the partner a one-page note on progress and people risks @recurring(weekly:fri)"
            - name: Organisation design for a founder-led scale-up
              description: |-
                ## Purpose
                Companies growing from fifty to two hundred people usually have every senior person reporting to the founder and no layer of managers. Designing the first management layer, clear functional leaders and a decision rights chart that frees the founder, with far less process than a large company needs, is a common and rewarding engagement for smaller firms and independents.

                ## Milestones
                1. The founder's current direct reports and decisions listed.
                2. A first management layer designed with three to six functional leaders.
                3. Decisions the founder will hand over written down and agreed.
                4. A plan for hiring or promoting into the new leader roles.
                5. A check-in after three months on whether the founder actually let go.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A first management layer, a list of decisions handed over by the founder and a hiring or promotion plan, reviewed after three months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the founder's direct reports and the decisions they hold"
                - "Draft three to six functional leader roles with mandates"
                - "Agree with the founder which decisions move to each leader"
                - "Check how many people report to the founder directly @recurring(monthly:22)"
            - name: Post-merger organisation integration design
              description: |-
                ## Purpose
                After a merger, two organisations with different structures, grades and cultures need one design, often under cost savings targets announced to investors. Working out the combined structure, the selection of leaders from both sides and the timing of each layer, while keeping the two businesses running, is organisation design at its most visible and contested.

                ## Milestones
                1. The two current structures mapped side by side at the same level of detail.
                2. Any announced savings figures and their people component confirmed with the sponsor.
                3. A combined level one and two structure agreed by the new leadership.
                4. A selection approach seen to be fair to both legacy organisations.
                5. A layer-by-layer timeline aligned with legal and regulatory steps.

                ## Notes
                Before completion, competition rules may limit what information the two companies can share. Check with the client's legal team before handling the other side's people data.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A combined top two layers, a cross-legacy selection approach and a layer-by-layer timeline, approved by the merged leadership team."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the client's legal team what people data may be shared before completion"
                - "Map both current structures side by side to level three"
                - "Confirm the people component of any announced savings figure"
                - "Draft a selection approach that both legacy sides can see is fair"
            - name: Organisation design as an independent consultant
              description: |-
                ## Purpose
                Independents are often hired for organisation design by mid-sized companies that cannot afford a large firm, and they work without an analyst team or a firm's tools. Building a light, reusable kit of baseline templates, a position model, a principles method and a transition checklist lets you deliver in weeks and price with confidence.

                ## Milestones
                1. A reusable position model template with check cells.
                2. A standard diagnostic and principles session format.
                3. A transition checklist adapted for clients without large HR teams.
                4. Clear contract wording on who decides on individuals and who holds legal responsibility.
                5. A case study from one completed engagement, with client permission.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable kit of model, session formats and transition checklist, plus contract wording on decision responsibility, used on at least one engagement."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Strip a past position model into a blank template with checks"
                - "Write a standard agenda for the diagnostic and principles sessions"
                - "Add contract wording that keeps decisions on individuals with the client"
                - "Review the kit after each engagement and update one part @recurring(monthly:15)"
            - name: Job architecture with families, levels and titles
              description: |-
                ## Purpose
                Many redesigns stall because roles cannot be graded consistently: the same title means three different levels across units. Building a job architecture of families, sub-families and levels with standard titles, aligned with the client's grading and reward teams, makes role mapping faster and gives the new organisation a career structure people can see.

                ## Milestones
                1. Job families and sub-families defined for the in-scope population.
                2. Level descriptors written for each level, from entry to executive.
                3. A standard title convention tied to family and level.
                4. Every future role placed in a family and level.
                5. The architecture handed over to the reward team, who own grading and pay.

                ## Notes
                Keep pay out of the architecture discussion until the reward team takes over. Levels describe work; grades and pay are a separate, owned decision.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A job architecture with defined families, level descriptors and a title convention, with every future role placed and accepted by the reward team."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft job families and sub-families from the activity data"
                - "Write level descriptors from entry level to executive"
                - "Propose a title convention tied to family and level"
                - "Place every future role in a family and level with HR"
            - name: Product and platform team operating model design
              description: |-
                ## Purpose
                Clients moving to cross-functional product teams often copy a well-known technology company's model and end up with a matrix nobody can manage. Designing the team types, the line management home for engineers and specialists, the funding model and the decision rights between product and functional leaders makes the model work for this client's size and culture.

                ## Milestones
                1. Team types defined, for example product, platform and enabling teams.
                2. A line management home chosen for each specialist group, with career paths.
                3. Funding and prioritisation rules agreed with finance.
                4. Decision rights between product owners and functional leaders mapped.
                5. A pilot of two or three teams with review criteria.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A team-type model with line management homes, funding rules and decision rights, piloted with two or three teams against written review criteria."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Define the team types the client needs and their missions"
                - "Choose a line management home for each specialist group"
                - "Agree funding and prioritisation rules with finance"
                - "Set review criteria for a pilot of two or three teams"
            - name: Global matrix and regional structure design
              description: |-
                ## Purpose
                For a multinational, the hardest question is how much power sits with global business lines, regions and countries, and every matrix makes some managers serve two masters. Designing the axes, which one holds profit and loss, which holds people and how disputes are resolved, is senior work where clear decision rights matter more than the chart.

                ## Milestones
                1. The axes of the matrix named and the primary axis for profit and loss chosen.
                2. Country and regional roles defined as full, light or representative presence.
                3. Solid and dotted line rules written for each dual-reporting role.
                4. A dispute resolution route for conflicts between axes.
                5. The design tested against three real decisions from the last year.

                ## Notes
                Test the matrix with real cases: a pricing exception, a hire in a small country and a product launch. If the answer to who decides is unclear in each, the design is not finished.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A matrix design with a named primary axis, country role types, reporting rules and a dispute route, tested against three real past decisions."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Name the matrix axes and propose which holds profit and loss"
                - "Class each country as full, light or representative presence"
                - "Write solid and dotted line rules for dual-reporting roles"
                - "Run three real decisions from last year through the new design"
            - name: Organisational network analysis of real collaboration
              description: |-
                ## Purpose
                Formal charts miss the people everyone goes to for answers and the units that never talk despite sharing customers. A network analysis from a short survey or anonymised collaboration data shows the hidden brokers, overloaded individuals and missing links, which helps a design avoid cutting the connections the business actually runs on.

                ## Milestones
                1. The purpose and privacy approach agreed with HR and the privacy lead.
                2. Data gathered from a short survey or aggregated collaboration metadata.
                3. Key brokers, overloaded nodes and weak links between units identified.
                4. Findings presented at group level, without exposing individuals beyond agreed limits.
                5. Design options checked for connections they would break.

                ## Notes
                Network data is personal data. Agree aggregation levels and who sees named results before collecting anything, and tell participants how it will be used.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A network analysis run under an agreed privacy approach, with group-level findings and a check of each design option against key connections."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the purpose and privacy limits with HR and the privacy lead"
                - "Draft a five-question collaboration survey or data request"
                - "Identify brokers, overloaded people and weak links between units"
                - "Check each design option for connections it would break"
---

# Organisation Design Engagements

Organisation design engagements touch people's jobs, so they go wrong loudly: a chart drawn before the strategy is understood, a headcount baseline nobody trusts, or a leak before the top team is appointed. This area starts with foundations (the design question, scope, a clean organisation chart and cost baseline, confidentiality and the consultation rules), then the operating routines that run while the design is live, skills such as spans and layers analysis, design principles, archetypes and decision rights, the big design decisions from options to detailed roles, the dated events from diagnostic readout to day one, variants for analysts, managers, independents, scale-ups and mergers, and finally specialist work on job architecture, product-team models, global matrices and network analysis.

While a design is in flight the rhythm is a Monday role mapping check, a Tuesday sponsor conversation on people issues, a Wednesday open questions and communications review, a Thursday rumour check and a Friday decision log, with monthly data refreshes, access audits and stakeholder reviews and a quarterly organisation health pulse after go-live. The Skills matrix, Meeting notes, Metrics log, Purchase decision and Risk register templates pair with the capability map, the sponsor check-ins, the spans refresh, the modelling tool choice and the transition plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
