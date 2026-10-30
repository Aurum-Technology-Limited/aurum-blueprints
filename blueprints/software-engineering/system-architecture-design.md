---
id: software-engineering.system-architecture-design
name: System Architecture Design
description: "A current map of your system, ranked quality attributes, trade-off decisions you can defend, and the review habits that keep the design honest as the build moves on."
category: business
version: 1.0.0
tags: [software-engineering, system-architecture-design, engineer, team, software-architecture, trade-offs, quality-attributes, diagrams]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - metrics-log
    - reading-queue
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: System Architecture Design
          description: "Designing how a software system is structured, from components and data flow to boundaries and trade-offs, before and during the build."
          projects:
            - name: Current-state architecture map of the system
              description: |-
                ## Purpose
                Most teams carry the architecture in two or three heads, and the diagram on the wiki shows the system as it was planned eighteen months ago. Drawing a context diagram and a container diagram of what actually runs in production today gives every later decision in this area a shared starting point and shows the surprises early: the cron job nobody owns, the second database, the service that calls back into its caller.

                ## Milestones
                1. A context diagram showing the system, its users and every external system it talks to.
                2. A container diagram showing each deployable unit, its data stores and the protocols between them.
                3. Both diagrams checked against deployment configuration rather than memory.
                4. Unknowns and disputed arrows listed beside the diagrams with an owner for each.
                5. The diagrams saved in the repository next to the code, with the date drawn.

                ## Notes
                Draw what exists, not what you wish existed. The target picture comes later, and mixing the two hides exactly the problems this map is meant to expose.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Context and container diagrams of the production system live in the repository, verified against deployment config, with open questions assigned."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every deployable unit from the deployment configuration or cloud console"
                - "Sketch the context diagram with users and external systems on one page"
                - "Draw the container diagram with data stores and protocols on each arrow"
                - "Walk the diagrams with two colleagues and mark every disputed arrow"
                - "Commit the diagrams to the repository with the date drawn"
            - name: Ranked quality attributes for the system
              description: |-
                ## Purpose
                Every design choice trades one quality for another, and a team that has not ranked availability, latency, cost, security and ease of change will argue the same trade-off from scratch every sprint. Agreeing a ranked top five, each with a number attached where one is real, turns those arguments into a short check against something already written down.

                ## Milestones
                1. A long list of candidate quality attributes gathered from engineers, product and support.
                2. The top five ranked in order, with the reason for the order in one sentence each.
                3. A measurable target attached to each attribute where a real number exists.
                4. The ranking signed off by the product owner and the technical lead.
                5. The ranked list pinned at the top of the architecture page.

                ## Notes
                If everything ranks first, nothing does. Force an order even when it feels uncomfortable, and note which attribute you would sacrifice first under pressure.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked list of five quality attributes with targets and reasons is agreed by product and engineering and published on the architecture page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask five colleagues to name the quality they would protect above all others"
                - "Merge the answers into a single list of candidate attributes"
                - "Run a forced-ranking session with product and engineering leads"
                - "Attach a measurable target to each of the top five attributes"
                - "Publish the ranked list at the top of the architecture page"
            - name: Architectural constraints and drivers register
              description: |-
                ## Purpose
                Constraints are the decisions already made for you: the cloud provider the company signed with, the language the team knows, the regulator's rules on where data lives, the launch date marketing announced. Writing them down separately from preferences stops the team designing an ideal system that cannot be built, and makes it obvious when a constraint has quietly expired.

                ## Milestones
                1. Technical, organisational, regulatory and commercial constraints listed in separate groups.
                2. Each constraint marked as fixed or negotiable, with the person who could change it.
                3. Business drivers such as the next funding milestone or a key customer deal noted beside them.
                4. Any constraint nobody can source flagged for confirmation or removal.

                ## Notes
                A constraint without an owner is often an old preference. Ask who would be upset if you ignored it; if nobody can answer, test it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register of constraints and drivers exists with each item marked fixed or negotiable and an owner named for every negotiable one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every rule the system must follow that the team did not choose"
                - "Sort the list into technical, organisational, regulatory and commercial groups"
                - "Mark each constraint fixed or negotiable and name who could change it"
                - "Confirm the three most limiting constraints with their owners"
            - name: External dependency and integration inventory
              description: |-
                ## Purpose
                Payment providers, identity services, email gateways, mapping APIs and partner feeds each bring their own rate limits, outages and contract terms, and they are usually the first thing to break at scale. An inventory with the criticality, failure behaviour and fallback for each one tells you where the architecture is only as strong as someone else's status page.

                ## Milestones
                1. Every third-party service and partner integration listed with its purpose.
                2. Criticality marked for each: the system stops, degrades or barely notices.
                3. Known limits, timeouts and retry behaviour noted per integration.
                4. Integrations with no fallback and high criticality highlighted for design work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory lists each external integration with criticality, limits and fallback, and the high-criticality ones without a fallback are flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search the codebase and secrets store for every outbound third-party endpoint"
                - "Record the purpose and owner of each integration in one table"
                - "Note what the system does today when each integration times out"
                - "Flag the critical integrations that have no fallback path"
            - name: Domain glossary and core entity map
              description: |-
                ## Purpose
                When engineers say account and the sales team means company, or one service calls it an order while another calls it a basket, boundaries get drawn in the wrong places. A shared glossary of twenty to forty terms, with a simple map of how the core entities relate, gives the architecture a vocabulary that matches the business and exposes the places where one word hides two concepts.

                ## Milestones
                1. Twenty to forty domain terms defined in plain language, agreed with product.
                2. Terms that mean different things in different parts of the business marked as ambiguous.
                3. A one-page map of the core entities and their relationships.
                4. The glossary linked from the architecture page and the repository readme.

                ## Notes
                The ambiguous terms are the valuable output. Two meanings for one word is often a sign of two contexts that deserve a boundary between them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A published glossary of at least twenty agreed terms and a core entity map exist, with ambiguous terms clearly marked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the nouns used most often in tickets, code and product documents"
                - "Draft a one-line definition for each and send it to a product manager"
                - "Mark every term that two teams define differently"
                - "Draw how the core entities relate on a single page"
            - name: Request walkthrough of the busiest user flow
              description: |-
                ## Purpose
                Following one real request from the browser or app through every hop to the database and back is the fastest way to see where latency, coupling and failure actually live. Choosing the flow with the most traffic or revenue, and drawing it as a sequence diagram with timings from production, often reveals a synchronous chain five services long that nobody designed on purpose.

                ## Milestones
                1. The busiest or most valuable user flow chosen using traffic or revenue data.
                2. A sequence diagram drawn showing every hop, call and data store touched.
                3. Typical and slow-end timings from production attached to each hop.
                4. Each point where one failure stops the whole flow circled on the diagram.

                ## Notes
                Use a trace from your observability tooling if you have one; it is more honest than reading code. If you have none, add request logging around each hop for a day.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sequence diagram of the busiest flow with measured timings per hop and its single points of failure circled is saved with the architecture docs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the user flow with the highest traffic or revenue from analytics"
                - "Capture one end-to-end trace of that flow from production"
                - "Draw the sequence diagram with a timing on every hop"
                - "Circle each hop whose failure would stop the whole flow"
            - name: Data flow map with sensitive data marked
              description: |-
                ## Purpose
                Personal data, payment details and credentials tend to spread: into logs, analytics exports, caches, support tools and backups nobody remembers. A map of where each class of data enters, is stored, is copied and leaves the system is the basis for every privacy, security and retention decision, and is the first thing a security reviewer or customer questionnaire will ask for.

                ## Milestones
                1. Data classes defined, for example public, internal, personal and highly sensitive.
                2. Every store, queue, log and export that holds each class marked on the map.
                3. Every point where sensitive data leaves the system to a third party drawn.
                4. Unexpected copies of sensitive data listed with an owner to remove or protect them.
                5. The map reviewed by whoever handles privacy or security in the organisation.

                ## Notes
                Logs and analytics pipelines are where most surprises turn up. Check them before the databases.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data flow map shows where every class of sensitive data is stored and sent, reviewed by the privacy or security owner, with unexpected copies assigned."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree three or four data classes with whoever owns privacy"
                - "Search logs and analytics exports for personal fields this week"
                - "Mark each store and outbound flow with the classes of data it holds"
                - "Assign an owner to every unexpected copy of sensitive data"
                - "Book a review of the map with the privacy or security owner"
            - name: Diagram notation and tooling agreed for the team
              description: |-
                ## Purpose
                Boxes and arrows with no legend mean something different to everyone who reads them, and diagrams drawn in a tool only one person can edit go stale the week that person is on leave. Picking one notation, such as the C4 model, and one tool, ideally diagrams kept as text in the repository, makes diagrams cheap enough to keep current.

                ## Milestones
                1. Two or three notations and tools compared against the team's real needs.
                2. One notation and one tool chosen, with a short legend for shapes and arrows.
                3. An example diagram drawn in the chosen style and committed as a reference.
                4. Old diagrams marked as superseded where they conflict with the new style.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The team has a written choice of diagram notation and tool, a legend, and one reference diagram committed to the repository."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the diagram tools the team already has access to"
                - "Try one diagrams-as-text tool on a small part of the system"
                - "Write a five-line legend for boxes, arrows and colours"
                - "Commit a reference diagram in the chosen notation"
            - name: One-page design proposal format for the team
              description: |-
                ## Purpose
                Big design documents get written once and never read, while no document at all means decisions happen in chat threads that vanish. A one-page proposal format covering the problem, the options considered, the chosen option, the trade-offs and what would make you change your mind gives medium-sized changes enough thought without slowing the team down.

                ## Milestones
                1. A one-page format with five or six fixed headings agreed by the team.
                2. A clear rule for which changes need a proposal and which do not.
                3. Two recent changes written up in the format as worked examples.
                4. The format stored where engineers start new work, such as the repository docs folder.

                ## Notes
                Include an Options considered heading that requires at least two options. A proposal with one option is a description, not a design.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page proposal format, a written threshold for when it is needed and two worked examples are published in the repository."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft five headings for a one-page proposal and share them with the team"
                - "Agree a threshold, such as more than a week of work or a new data store"
                - "Rewrite two recent changes in the format as examples"
                - "Save the format in the repository docs folder"
            - name: Monthly architecture map refresh
              description: |-
                ## Purpose
                Wrong diagrams are worse than none, because people trust them. Spending thirty minutes a month comparing the container diagram against what is deployed, and fixing the difference, keeps the map useful for onboarding, incidents and design discussions without ever needing a big documentation push.

                ## Milestones
                1. A fixed monthly slot in the calendar for the refresh.
                2. Each refresh compares the diagram with the deployment configuration, not memory.
                3. Changes since the last refresh noted in a short changelog under the diagram.
                4. Three consecutive monthly refreshes completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The architecture diagrams show a refresh date within the last five weeks and a changelog with at least three monthly entries."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot for the diagram refresh"
                - "Compare the container diagram with deployed services and fix any drift @recurring(monthly:12)"
                - "Add a one-line changelog entry under the diagram after each refresh"
                - "Ask whoever joined most recently which part of the diagram confused them"
            - name: Weekly design clinic for the team
              description: |-
                ## Purpose
                Design questions that wait for a formal review get answered by whoever is writing the code that afternoon. A standing forty-five minute clinic each week, where anyone can bring a half-formed idea, a tricky boundary or a trade-off they are stuck on, catches problems while they are still cheap and spreads design judgement across the team instead of concentrating it in one person.

                ## Milestones
                1. A weekly slot booked with a rotating host from the team.
                2. A shared list where people add topics before the session.
                3. Short notes kept for each session with the questions raised and any decisions.
                4. At least half the team has brought a topic within the first two months.

                ## Notes
                Start from the **Meeting notes** template. Cancel the session when the topic list is empty rather than filling the time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly design clinic has run for eight weeks with notes for each session and topics brought by at least half the team."
                cadence: rolling
              tasks:
                - "Book a weekly forty-five minute design clinic in the team calendar"
                - "Create a shared topic list and post the link in the team channel"
                - "Run the clinic and record questions and decisions in the notes @recurring(weekly:wed)"
                - "Rotate the host role to a different engineer each month"
            - name: Architecture risk register kept current
              description: |-
                ## Purpose
                Architectural risks, such as a database near its storage limit, a library with one maintainer, or a component only one engineer understands, rarely appear on a product roadmap until they cause an outage. A short register with likelihood, impact and a next step for each risk, reviewed monthly, gives you a list to argue from when you ask for time to fix something before it breaks.

                ## Milestones
                1. A register holding the ten most serious architectural risks, each with an owner.
                2. Likelihood, impact and the earliest warning sign recorded for every risk.
                3. A next step and target date attached to each of the top three.
                4. Monthly reviews recorded, with closed risks moved to a history section.

                ## Notes
                Start from the **Risk register** template. Keep it to architectural risk; project delivery risk belongs elsewhere.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register holds at least ten risks with owners and warning signs, and shows a review in each of the last three months."
                cadence: rolling
              tasks:
                - "List the five things most likely to cause a serious outage or rewrite"
                - "Score each risk for likelihood and impact and name an owner"
                - "Review the register and update scores and next steps @recurring(monthly:20)"
                - "Take the top three risks to the product owner for planning @recurring(quarterly)"
            - name: Architectural fitness functions in the pipeline
              description: |-
                ## Purpose
                Rules such as the web layer never imports the data layer directly, or no module depends on a module marked internal, erode one pull request at a time unless a machine checks them. Encoding five to ten structural rules as automated tests that fail the build turns the architecture from a diagram people forget into a constraint the code has to respect.

                ## Milestones
                1. Five to ten structural rules written in plain language and agreed by the team.
                2. Each rule implemented as an automated check that runs on every build.
                3. Existing violations recorded as a baseline so the build passes while they are fixed.
                4. The baseline shrinking month on month, with no new violations added.

                ## Notes
                Most languages have a dependency-rule or architecture-test library; start with dependency direction between layers or modules, which catches the most drift.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least five structural rules run as build checks, a violation baseline is recorded, and the baseline is smaller after three months."
                cadence: rolling
              tasks:
                - "Write down five structural rules the codebase is meant to follow"
                - "Implement the dependency-direction rule as a check in the build"
                - "Record existing violations as a baseline the build tolerates"
                - "Check the violation count and pick one to remove @recurring(monthly:3)"
                - "Review whether the rule set still matches the target design @recurring(quarterly)"
            - name: Architecture metrics log
              description: |-
                ## Purpose
                Whether an architecture is getting better or worse is hard to judge from inside it. Tracking a handful of numbers monthly, such as how many components a typical change touches, the number of cross-module dependencies, build time per component and how often two teams have to release together, gives an early signal of coupling creeping back in.

                ## Milestones
                1. Four or five metrics chosen, each with a written way to measure it.
                2. A first baseline measurement recorded for every metric.
                3. Monthly readings recorded for at least three months.
                4. One design change made because of a trend in the log.

                ## Notes
                Start from the **Metrics log** template. Changes touching many components is the single most telling number; most version control tools can produce it from commit history.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds at least four architecture metrics with a baseline and three monthly readings, and one design action is traced to it."
                cadence: rolling
              tasks:
                - "Choose four metrics that show coupling and independence of components"
                - "Write a short script or query that measures each one"
                - "Record this month's readings in the log @recurring(monthly:8)"
                - "Share any metric that moved more than ten percent with the team"
            - name: Quarterly architecture health review
              description: |-
                ## Purpose
                Systems drift from their design gradually, and nobody notices until a quarter of feature work goes into fighting the structure. A half-day review each quarter, scoring the system against the ranked quality attributes and the risk register, produces a short list of design work to put into the next quarter's plan rather than an annual crisis.

                ## Milestones
                1. A half-day review held with engineers from every team that owns a component.
                2. Each ranked quality attribute scored against its target with evidence.
                3. The three biggest gaps written up with a proposed piece of design work.
                4. At least one item accepted into the next quarter's plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a written health review scoring every ranked attribute, with at least one resulting item in the following quarter's plan."
                cadence: cyclic
              tasks:
                - "Book a half-day review with one engineer from each owning team"
                - "Gather evidence for each quality attribute before the session"
                - "Run the review and write up the three biggest gaps @recurring(quarterly)"
                - "Revisit the ranking of quality attributes with product @recurring(yearly)"
            - name: Assumptions log for load, team and growth
              description: |-
                ## Purpose
                Designs rest on assumptions: ten thousand users, one region, a team of six, reads outnumbering writes by a hundred to one. When those stop being true the design can be wrong while still looking fine on paper. Writing each assumption down with the number that would break it, and checking them quarterly, tells you when a redesign is due before the pager does.

                ## Milestones
                1. Every significant assumption behind the current design written down.
                2. A breaking threshold attached to each, such as the user count that would need a rethink.
                3. The current real value recorded beside each threshold.
                4. Quarterly checks recorded, with any assumption near its threshold escalated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An assumptions log lists each design assumption with a breaking threshold and current value, and shows quarterly checks."
                cadence: rolling
              tasks:
                - "List the assumptions about users, data volume and team size behind the design"
                - "Write the number at which each assumption would break the design"
                - "Compare current figures with each threshold @recurring(quarterly)"
            - name: Building blocks radar for approved technologies
              description: |-
                ## Purpose
                Without a shared list of preferred databases, queues, languages and frameworks, every new component brings a new technology, and the team ends up operating twelve kinds of storage. A simple radar sorting technologies into adopt, trial, hold and retire, reviewed each quarter, keeps choices deliberate while still leaving room to try something new.

                ## Milestones
                1. Every technology currently in production listed in one place.
                2. Each one placed in adopt, trial, hold or retire with a sentence of reasoning.
                3. A lightweight route agreed for proposing a new technology into trial.
                4. The radar reviewed and republished each quarter.

                ## Notes
                The retire ring matters most. A technology on hold that is still being added to new components means the radar is being ignored.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A technology radar with four rings and reasoning for every entry is published and shows a review in each of the last two quarters."
                cadence: rolling
              tasks:
                - "List every language, data store and framework running in production"
                - "Place each one in adopt, trial, hold or retire with a reason"
                - "Write a half-page route for proposing a new technology"
                - "Review and republish the radar with the team @recurring(quarterly)"
            - name: Design versus as-built retrospective
              description: |-
                ## Purpose
                Comparing what was designed with what was actually built is how a team calibrates its own judgement. A short monthly look at one recently shipped piece of work, asking where the build departed from the proposal and why, shows which kinds of decision you consistently get right and which you keep revisiting under pressure.

                ## Milestones
                1. One shipped change picked each month that had a design proposal.
                2. Departures from the proposal listed with the reason for each.
                3. Patterns across several retrospectives written up, such as underestimated data migration.
                4. One change made to the proposal format or review habit because of a pattern.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four monthly retrospectives are recorded and one change to the design process is traced to a pattern they revealed."
                cadence: rolling
              tasks:
                - "Pick the most recent shipped change that had a written proposal"
                - "Compare the proposal with the code and note each departure @recurring(monthly:26)"
                - "Ask the author which departure surprised them most"
                - "Write up a recurring pattern after four retrospectives"
            - name: Writing quality attribute scenarios that can be tested
              description: |-
                ## Purpose
                Should be fast and must be highly available are not requirements anyone can design against or test. Learning to write quality attribute scenarios, with a source, stimulus, environment, response and measure, turns vague wishes into statements such as when the payment provider times out during peak, checkout still accepts orders and queues them within two seconds.

                ## Milestones
                1. The six-part scenario structure understood and explained to a colleague.
                2. Two scenarios written for each of the top five ranked quality attributes.
                3. Each scenario reviewed for whether it could actually be tested.
                4. The scenarios linked from the ranked quality attributes page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten testable quality attribute scenarios, two per ranked attribute, are written in the six-part form and linked from the attributes page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short explanation of the six parts of a quality attribute scenario"
                - "Rewrite one vague requirement from the backlog as a full scenario"
                - "Write two scenarios for each of the top five quality attributes"
                - "Ask a tester whether each scenario could be verified as written"
            - name: Trade-off analysis with a utility tree
              description: |-
                ## Purpose
                Architecture trade-off methods such as ATAM look heavyweight, but their core idea is simple: map scenarios to the design decisions that affect them and find the sensitivity points, where one choice moves several qualities at once. Practising a cut-down version on your own system teaches you to see which decisions are carrying the most risk.

                ## Milestones
                1. A utility tree built from the ranked quality attributes and their scenarios.
                2. The six highest-priority scenarios traced to the design decisions that affect them.
                3. Sensitivity points and trade-off points named and written down.
                4. A one-page summary of the riskiest decisions shared with the team.

                ## Notes
                Run it in a single afternoon with three or four people. The full method is built for large programmes; the value for most teams is in the trace from scenario to decision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A utility tree, a scenario-to-decision trace for six scenarios and a list of sensitivity points are written up and shared."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a summary of the architecture trade-off analysis method"
                - "Build a utility tree from the ranked attributes and scenarios"
                - "Trace the top six scenarios to the decisions that affect them"
                - "Write a one-page summary of sensitivity and trade-off points"
            - name: Architecture katas with the team
              description: |-
                ## Purpose
                Design judgement grows by designing, and most engineers only get to shape a system from scratch once every few years. A monthly ninety-minute kata, where small groups design a system for an invented brief and then compare their answers, gives everyone practice at drawing boundaries and defending trade-offs with nothing at stake.

                ## Milestones
                1. A bank of six or more kata briefs collected or written.
                2. A monthly session format agreed: brief, group design, presentations, discussion.
                3. Three sessions run with at least two groups each.
                4. A short record of the recurring disagreements and what the team learned from them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three architecture kata sessions have run with at least two competing designs each, and the lessons are written down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect six kata briefs from a published kata collection or write your own"
                - "Book a ninety-minute session and split the team into groups of three"
                - "Run a kata and have each group present its design @recurring(monthly:18)"
                - "Write down the trade-off the groups disagreed on most"
            - name: Strategic domain-driven design and bounded contexts
              description: |-
                ## Purpose
                Where to draw a boundary is the hardest architectural question, and the strategic half of domain-driven design is the most practical answer to it. Studying bounded contexts and context maps, then sketching one for your own domain, gives you a principled way to decide what belongs together, separate from any choice about how it is deployed.

                ## Milestones
                1. Bounded contexts, subdomains and the main context mapping patterns understood.
                2. Core, supporting and generic subdomains identified for your own business.
                3. A context map drawn showing current contexts and the relationships between them.
                4. Two places where the code's structure disagrees with the context map written down.

                ## Notes
                Ignore the tactical patterns for now. The strategic ideas are what shape architecture; the tactical ones shape code inside a single context.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A context map of the business with core, supporting and generic subdomains marked is drawn, and two mismatches with the code are recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read an introduction to bounded contexts and context maps"
                - "Classify your business areas as core, supporting or generic"
                - "Draw a context map of the system as it exists today"
                - "List two places where the code structure contradicts the map"
            - name: Back-of-envelope estimation for design choices
              description: |-
                ## Purpose
                Many design debates end the moment someone does the arithmetic: two hundred requests a second at four kilobytes each is under a megabyte a second, and a single well-indexed database will be fine for years. Practising quick estimates of throughput, storage, memory and cost lets you rule options in or out in minutes instead of days.

                ## Milestones
                1. A personal sheet of reference numbers: latencies, throughput and storage costs.
                2. Ten practice estimates completed for real or invented systems.
                3. Three estimates checked against real production figures.
                4. An estimate used to settle a live design question on your own team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference sheet and ten worked estimates exist, three checked against production figures, and one estimate is cited in a real design decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a reference sheet of common latency and throughput numbers"
                - "Estimate peak requests and storage for your own system from usage data"
                - "Compare the estimate with real production figures"
                - "Work through nine more estimates for other systems you use"
            - name: Architecture styles compared on your own system
              description: |-
                ## Purpose
                Layered, hexagonal, pipeline, event-driven and microkernel styles are easier to understand when you sketch your own system in each one. Redrawing a real component in three styles and noting what gets easier and harder shows which style the system already resembles, and what the pressure to move to another would really buy.

                ## Milestones
                1. Five common architecture styles studied with their typical strengths and costs.
                2. One real component sketched in three different styles.
                3. A table comparing the sketches against the ranked quality attributes.
                4. A short note on which style the system follows today and where it breaks the pattern.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three sketches of one real component in different styles and a comparison table against the ranked attributes are written up."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a summary of layered, hexagonal, event-driven, pipeline and microkernel styles"
                - "Pick one real component that is causing friction"
                - "Sketch that component in three different styles"
                - "Score each sketch against the top five quality attributes"
            - name: Failure mode walkthrough of each component
              description: |-
                ## Purpose
                Asking what happens when this is slow, when it returns garbage, and when it is gone entirely, for every component on the map, finds more design problems than most load tests. A structured walkthrough borrowed from failure mode and effects analysis gives each component a short table of failure modes, effects on users and the design response.

                ## Milestones
                1. A simple table format agreed: component, failure mode, user effect, detection, response.
                2. Every container on the architecture map walked through for slow, wrong and absent.
                3. Failure modes with severe user effect and no detection highlighted.
                4. The top five design responses added to the risk register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A failure mode table covers every container on the architecture map, and the five worst undetected modes are on the risk register."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up a table with columns for failure mode, effect, detection and response"
                - "Walk the first three components with the engineers who own them"
                - "Complete the walkthrough for every container on the map"
                - "Move the five worst undetected failure modes onto the risk register"
            - name: Architecture reading list for the year
              description: |-
                ## Purpose
                Reading a short, chosen list of books, papers and talks steadily beats a pile of bookmarks. Picking eight to twelve sources across design fundamentals, trade-off thinking and case studies from companies at your scale, and reading one chapter or paper a fortnight, keeps your thinking fresh and gives the design clinic new material.

                ## Milestones
                1. Eight to twelve sources chosen, balanced across fundamentals, methods and case studies.
                2. A reading slot that survives busy weeks.
                3. A three-line note written for each source finished.
                4. Two ideas from the reading tried on the real system.

                ## Notes
                Start from the **Reading queue** template. Include at least two public post-incident or architecture write-ups from organisations at a similar scale to yours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least eight architecture sources are read within a year, each with a written note, and two ideas from them are applied to the system."
                cadence: cyclic
              tasks:
                - "Choose eight to twelve architecture books, papers and case studies"
                - "Read one chapter or paper and write a three-line note @recurring(monthly:15)"
                - "Bring one idea from the reading to the weekly design clinic"
            - name: Modular monolith boundaries in the existing codebase
              description: |-
                ## Purpose
                Most systems do not need splitting into services; they need clear modules inside the codebase they already have. Defining modules with public interfaces and private internals, aligned to the context map, gives most of the benefit of separate services, with independent change and clear ownership, at a fraction of the operational cost.

                ## Milestones
                1. Target modules defined from the context map, each with a named owner.
                2. A public interface written for each module, with everything else marked internal.
                3. A build check that fails when one module reaches into another's internals.
                4. Cross-module calls that bypass the interfaces reduced by at least half.

                ## Notes
                Move code in small steps behind the new interfaces. A big-bang reorganisation stalls feature work and usually gets abandoned halfway.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Modules with named owners and public interfaces exist, a build check enforces them, and interface-bypassing calls have fallen by half."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Propose module boundaries from the context map and share them for comment"
                - "Write the public interface for the first module"
                - "Add a build check that blocks calls into another module's internals"
                - "Count interface-bypassing calls and set a target to halve them"
            - name: Synchronous versus asynchronous integration for one flow
              description: |-
                ## Purpose
                Chaining synchronous calls means the slowest or least available step sets the experience for the whole flow, while making it asynchronous adds queues, eventual consistency and harder debugging. Choosing deliberately for one important flow, with the user-visible consequences of each option written out, gives the team a worked example for every similar choice that follows.

                ## Milestones
                1. One flow chosen where the integration style is causing latency or failures.
                2. Both options sketched, with what the user sees during a failure in each.
                3. The operational cost of each option estimated: queues, monitoring, replay.
                4. A decision recorded with the reason and the conditions that would reverse it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on sync or async integration for one named flow, with user impact and operational cost compared and reversal conditions stated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the flow from the request walkthrough with the longest synchronous chain"
                - "Sketch the synchronous and asynchronous versions side by side"
                - "Write what the user sees when each downstream step fails"
                - "Record the decision and the conditions that would reverse it"
            - name: Build versus buy for a non-core capability
              description: |-
                ## Purpose
                Search, notifications, authentication, billing and feature flags each look like a fortnight's work and then cost a team for years. Comparing building, buying a managed service and adopting an open-source component against the same criteria, including the cost of leaving later, keeps engineering time on the core subdomain where it makes a difference.

                ## Milestones
                1. One non-core capability chosen, with its requirements written as a short list.
                2. Three options compared: build, managed service and open-source component.
                3. Total cost over three years estimated for each, including people time.
                4. Exit cost and lock-in risk noted for each option.
                5. A decision recorded and shared with product and finance.

                ## Notes
                Start from the **Purchase decision** template. Price the engineering time to operate and upgrade, not only to build; that is where build estimates go wrong.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written build, buy or adopt decision for one capability compares three options on three-year cost and exit cost, shared with product and finance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the non-core capability taking the most engineering time this year"
                - "Write the must-have requirements as a list of eight or fewer"
                - "Estimate three-year cost for building, buying and adopting"
                - "Note the cost of leaving each option after two years"
            - name: Choosing the data store for a new component
              description: |-
                ## Purpose
                Adding a new kind of database is one of the most expensive decisions a team makes, because it brings backups, upgrades, monitoring and expertise that someone has to own forever. Choosing from access patterns, consistency needs and the building blocks radar, rather than from what looked interesting at a conference, keeps the estate small and the choice defensible.

                ## Milestones
                1. The component's read and write patterns, volumes and consistency needs written down.
                2. Options on the adopt ring of the radar tested against those needs first.
                3. A new technology considered only if no adopted option meets a stated need.
                4. The choice recorded with the access patterns that justified it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded data store choice for one component cites its access patterns and explains why adopted technologies did or did not fit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the five most frequent reads and writes the component will perform"
                - "Estimate data volume and growth for the first two years"
                - "Test whether the database already in use meets those needs"
                - "Record the choice and the access patterns that drove it"
            - name: Ports and adapters around one core module
              description: |-
                ## Purpose
                Business logic tangled with framework code, database calls and HTTP handling is hard to test and harder to move. Wrapping one core module in ports and adapters, so the domain logic depends on interfaces and the database or framework plugs in from outside, makes it testable in isolation and shows the rest of the team the pattern on real code.

                ## Milestones
                1. One core module chosen where framework and domain code are most tangled.
                2. Ports defined for each thing the module needs from outside.
                3. Adapters written for the database and external calls behind those ports.
                4. Domain tests running without a database or network in under a few seconds.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One core module depends only on its own ports, with adapters for infrastructure and a domain test suite that runs without database or network."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose the core module with the most framework code mixed into business rules"
                - "List everything the module needs from outside and define a port for each"
                - "Move database access behind an adapter that implements its port"
                - "Write domain tests that run with in-memory adapters"
            - name: Removing a single point of failure from the map
              description: |-
                ## Purpose
                The architecture map and the request walkthrough usually reveal at least one component whose failure stops everything: one database instance, one queue worker, one server holding session state. Removing the most serious one, by designing redundancy or a degraded mode, is a concrete improvement users will feel during the next bad day.

                ## Milestones
                1. The single points of failure on the map ranked by user impact.
                2. A design for the worst one written up, with at least two options considered.
                3. The chosen change built and released.
                4. A controlled test showing the system now survives that component failing.

                ## Notes
                A degraded mode, such as serving cached pages read-only, is often cheaper and safer than full redundancy. Consider it before duplicating infrastructure.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The highest-impact single point of failure has a released redundancy or degraded mode, proven by a controlled test of that component failing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Rank the single points of failure from the map by user impact"
                - "Write up two design options for removing the worst one"
                - "Build and release the chosen option behind a flag"
                - "Run a controlled test with that component switched off"
            - name: Where authentication and authorisation checks live
              description: |-
                ## Purpose
                When identity is checked at the edge in one place, inside each component in another and not at all in a third, security depends on which path a request happens to take. Deciding where authentication happens, where permission checks happen and how identity travels between components closes those gaps and makes new components secure by default.

                ## Milestones
                1. Every entry point mapped with where identity and permissions are checked today.
                2. Paths with no check or duplicated checks listed.
                3. A placement decided for authentication, coarse permissions and fine-grained permissions.
                4. The way identity passes between internal components documented.
                5. The decision reviewed by whoever owns security.

                ## Notes
                This is a structural decision, not a review of individual code. Keep fine-grained, data-level permission checks close to the data whatever you decide for the edge.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states where authentication and each level of authorisation happen, reviewed by the security owner, with unchecked paths listed for fixing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every public and internal entry point to the system"
                - "Mark where identity and permissions are checked on each path"
                - "Propose a placement for each level of check and share it with the team"
                - "Book a review of the proposal with the security owner"
            - name: Classifying pending decisions as reversible or one-way
              description: |-
                ## Purpose
                Teams spend weeks on decisions they could undo in a day and rush the ones they will live with for years. Sorting every open design question into reversible or one-way, and giving each an amount of analysis to match, frees time for the handful of choices, such as data models, public contracts and tenancy, that are genuinely hard to change.

                ## Milestones
                1. Every open design question on the team gathered in one list.
                2. Each marked reversible or one-way, with a sentence on the cost of undoing it.
                3. Reversible decisions given a deadline of days, not weeks.
                4. One-way decisions given a proposal, a reviewer and a deadline.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All open design questions are listed and classified, every reversible one is decided within two weeks and every one-way one has a proposal owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather every open design question from tickets, chat and proposals"
                - "Mark each reversible or one-way with the cost of undoing it"
                - "Decide the reversible ones this week and record the outcome"
                - "Assign a proposal owner to each one-way decision"
            - name: Design review of the next major feature
              description: |-
                ## Purpose
                Any feature that adds a new data store, a new integration or a new public interface deserves an hour of scrutiny before the first commit. Preparing a proposal, sending it two days ahead and running a focused review with the right people catches the expensive mistakes, such as a missing migration path or an unplanned dependency, while they are still lines on a page.

                ## Milestones
                1. A one-page proposal written with at least two options and their trade-offs.
                2. Reviewers chosen to include someone who will operate the result.
                3. The proposal circulated at least two working days before the review.
                4. The review held and its outcomes recorded under the proposal.
                5. Agreed changes reflected in the plan before building starts.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A design review for the next major feature has been held on a circulated proposal, with recorded outcomes reflected in the build plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the next feature that adds a store, integration or public interface"
                - "Write the proposal with two options in the team format"
                - "Ask the agent to list questions a sceptical reviewer would raise"
                - "Send the proposal to reviewers two working days ahead"
                - "Hold the review and record the outcomes under the proposal"
            - name: Target architecture for the next 18 months
              description: |-
                ## Purpose
                Without a picture of where the system is heading, each team improves its own corner and the whole drifts in several directions at once. A short target architecture document, with the current map, the intended map in eighteen months, the steps between them and what you will deliberately not change, gives every team a direction without dictating their sprints.

                ## Milestones
                1. The current-state map and the ranked quality attributes used as the starting point.
                2. A target container diagram for eighteen months out.
                3. Three to six transition steps, each delivering value on its own.
                4. A list of what will deliberately stay as it is.
                5. The document reviewed by engineering leads and the product owner.

                ## Notes
                Keep it under six pages. Every step should be safe to stop after, because priorities will change before the eighteen months are up.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A target architecture document of six pages or fewer, with a target diagram and independently valuable transition steps, is reviewed by leads and product."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the three biggest structural problems the next 18 months must address"
                - "Draw the target container diagram"
                - "Break the move into steps that each deliver value alone"
                - "Write the list of things that will deliberately not change"
                - "Circulate the draft to engineering leads and product"
            - name: Pre-launch architecture readiness check
              description: |-
                ## Purpose
                Launch day for a new product or major feature is the moment design shortcuts get tested by real traffic. Walking the launch architecture against a short readiness list, covering capacity assumptions, failure modes, data flows, dependencies and rollback, two to four weeks before launch leaves time to fix what turns up rather than discovering it on launch day.

                ## Milestones
                1. A readiness checklist agreed: capacity, failure modes, data flows, dependencies, rollback.
                2. The launch architecture walked against every item with evidence.
                3. Gaps classified as must fix before launch or accept with a stated risk.
                4. All must-fix gaps closed before the launch date.
                5. Accepted risks signed off by the product owner.

                ## Notes
                Start from the **Operational checklist** template if you want a reusable list. Book this at least two weeks before launch; a readiness check the day before only produces a list of regrets.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readiness check is completed at least two weeks before launch, all must-fix gaps are closed and accepted risks are signed off by the product owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book the readiness check three weeks before the launch date"
                - "Agree the checklist items with the engineers running the launch"
                - "Walk the launch architecture against each item and record evidence"
                - "Get sign-off from the product owner on each accepted risk"
            - name: Architecture pack for a customer security review
              description: |-
                ## Purpose
                Enterprise customers and their procurement teams send security questionnaires that ask how the system is built: where data lives, how tenants are separated, how traffic is encrypted, which third parties see what. Preparing a reusable architecture pack, with approved diagrams and plain answers, turns a fortnight of scrambling per deal into a day of tailoring.

                ## Milestones
                1. A customer-safe architecture diagram with no internal hostnames or secrets.
                2. A data flow summary showing where customer data is stored and processed.
                3. Standard answers written for the twenty most common architecture questions.
                4. The pack reviewed by security and whoever signs off customer commitments.
                5. A yearly refresh date set.

                ## Notes
                Only state what is true today. A promise in a questionnaire about future architecture can become a contractual commitment.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A reviewed customer architecture pack with a safe diagram, data flow summary and twenty standard answers is stored where the sales team can request it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the last three security questionnaires the business received"
                - "Draw a customer-safe version of the container diagram"
                - "Write standard answers to the twenty most common architecture questions"
                - "Get the pack reviewed by security and the commercial owner"
                - "Refresh the pack against the current system @recurring(yearly)"
            - name: Kick-off architecture workshop for a new product
              description: |-
                ## Purpose
                The first week of a new product sets boundaries that last for years, often by accident. A one-day workshop with engineers, product and a domain expert, covering the domain, the quality attributes, the constraints and two or three candidate structures, gives the build a deliberate starting shape and a shared vocabulary from day one.

                ## Milestones
                1. Attendees confirmed, including at least one person who knows the domain deeply.
                2. Domain events and key entities mapped on a wall or shared board.
                3. Quality attributes ranked for this product specifically.
                4. Two or three candidate structures sketched and compared.
                5. A first design proposal written within a week of the workshop.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off workshop has produced a ranked attribute list and compared candidate structures, followed by a written proposal within a week."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Book a full day with engineers, product and a domain expert"
                - "Prepare the product brief and known constraints as pre-reading"
                - "Run the workshop through domain, attributes, constraints and options"
                - "Write the first design proposal within a week of the workshop"
            - name: Taking over a system as the new tech lead
              description: |-
                ## Purpose
                A new tech lead inheriting a system is expected to have opinions within weeks, but changing structure before understanding why it looks the way it does is how good decisions get undone. A sixty-day plan of listening, mapping and small proofs of understanding, before proposing any large change, earns the credibility to change what actually needs changing.

                ## Milestones
                1. Conversations held with every engineer and the main stakeholders about what hurts.
                2. The current-state map drawn or verified personally.
                3. A list of the five decisions that most puzzle you, each with the history found behind it.
                4. One small structural fix delivered to prove the map is understood.
                5. A short written view of the architecture's strengths and top three problems.

                ## Notes
                Ask why before proposing what. Many odd structures were sensible answers to a constraint that has since gone, and knowing which ones is half the job.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within sixty days, a verified map, the history behind five puzzling decisions, one small fix and a written strengths and problems view are complete."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book thirty-minute conversations with every engineer on the team"
                - "Ask each person which part of the system they avoid changing and why"
                - "Write down the five design decisions that puzzle you most"
                - "Find the history behind each puzzling decision in commits or old proposals"
                - "Share a one-page view of strengths and top three problems at day sixty"
            - name: Keeping architecture simple in a small startup team
              description: |-
                ## Purpose
                Two to five engineers searching for product fit do not need service meshes, event buses or five databases, yet copying big-company architecture is one of the most common ways early teams slow themselves down. Agreeing a deliberately boring default stack and a rule for when complexity is allowed in keeps the team fast until there is real evidence it needs more.

                ## Milestones
                1. A default stack written down: one language, one database, one deployable, one cloud.
                2. A rule agreed for when a new component or technology is allowed, tied to real evidence.
                3. Every existing piece of infrastructure checked against that rule.
                4. A monthly check for complexity that crept in without passing the rule.

                ## Notes
                Scale problems are good problems and usually arrive slower than expected. A single well-structured codebase on a managed database carries most products a long way.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written default stack and complexity rule exist, every current component has been checked against them, and monthly checks are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the default stack on one page and share it with the team"
                - "Agree the evidence needed before adding a new component"
                - "List every piece of infrastructure running and check it against the rule"
                - "Review new dependencies and components added this month @recurring(monthly:28)"
            - name: Greenfield service design from a product brief
              description: |-
                ## Purpose
                Starting a new service with a blank repository is rare, and the temptation is to start coding on day one. Working from the product brief through scenarios, a context diagram, a container design, the data model outline and a walking skeleton deployed end to end produces a service whose shape was chosen rather than accreted.

                ## Milestones
                1. The brief turned into quality attribute scenarios and a list of constraints.
                2. Context and container diagrams for the new service drawn and reviewed.
                3. The service's responsibilities and what it explicitly does not do written down.
                4. A walking skeleton deployed to production with one thin path working end to end.

                ## Notes
                The does-not-do list is what keeps a new service from becoming a second monolith. Write it before the first line of code.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new service has reviewed diagrams, a written responsibilities and exclusions list, and a walking skeleton running in production."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Turn the product brief into five quality attribute scenarios"
                - "Write what the new service will and will not be responsible for"
                - "Draw and review the context and container diagrams"
                - "Deploy a walking skeleton with one thin path through every layer"
            - name: Design reviews across time zones
              description: |-
                ## Purpose
                Teams spread across five or more hours of time difference cannot rely on a whiteboard session, and design decisions end up made by whoever is awake. A written-first review process, with proposals posted, a fixed comment window and a short overlap call only for disagreements, lets everyone shape decisions without anyone joining calls at midnight.

                ## Milestones
                1. A written-first review process agreed with a fixed comment window, such as two working days.
                2. A rule for when disagreements go to a short call in the overlap hours.
                3. Three proposals taken through the process end to end.
                4. Feedback gathered from each time zone on whether they felt heard.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three proposals have completed a written-first review with comments from every time zone, and the process is written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map the working hours of everyone who reviews designs"
                - "Write the comment window and escalation rule on one page"
                - "Post open proposals and the comment deadline in the team channel @recurring(weekly:tue)"
                - "Ask one person in each time zone whether the process works for them"
            - name: Reconciling two architectures after a team merger
              description: |-
                ## Purpose
                When two teams or companies combine, they bring two architectures that solve overlapping problems in different ways: two identity systems, two ways of sending email, two deployment models. Mapping both side by side and deciding, capability by capability, which pattern becomes the standard turns a political argument into a structured comparison.

                ## Milestones
                1. Both architectures mapped in the same notation at the same level of detail.
                2. Overlapping capabilities listed side by side.
                3. Each overlap scored against the ranked quality attributes and cost to change.
                4. A standard chosen for each capability with a reason, agreed by both sets of leads.
                5. A sequence for converging written, leaving the migration detail to the teams doing it.

                ## Notes
                Choose per capability, not per company. Taking the better answer from each side matters more than either team winning.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both architectures are mapped in one notation and a standard is agreed for every overlapping capability, with reasons and a convergence sequence."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask each team to draw its container diagram in the agreed notation"
                - "List every capability both systems provide"
                - "Score each pair against quality attributes and cost to change"
                - "Agree a standard per capability with both sets of leads"
            - name: Architecture choices for a solo contractor build
              description: |-
                ## Purpose
                A freelance or contract engineer building a system that a client's own staff will run afterwards has different priorities from a product team: the client's skills, budget and hosting matter more than elegance. Choosing a structure the client can operate, and handing over a short architecture guide, protects your reputation and the client long after the contract ends.

                ## Milestones
                1. The client's in-house skills, hosting preferences and running budget written down.
                2. A structure chosen that a single engineer of their skill level could maintain.
                3. A handover guide with the map, how to deploy and what to watch.
                4. A walkthrough held with whoever will own the system next.

                ## Notes
                Fewer moving parts beats the newest tools here. Every technology you add is one the client must hire for.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client has a system built on technologies their staff know, a handover guide with diagram and deploy steps, and a completed walkthrough."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the client which languages and hosting their staff already use"
                - "Choose a structure a single engineer of that skill could maintain"
                - "Ask the agent to draft the handover guide from your diagrams and notes"
                - "Run a walkthrough with the person who will own the system"
            - name: Tenant isolation model for a multi-tenant product
              description: |-
                ## Purpose
                A business product serving many customers from one system has to decide how far apart their data and workloads sit: a shared schema with a tenant column, a schema per tenant, a database per tenant or separate stacks for the largest. The choice drives cost, noisy neighbour risk, compliance answers and how painful the first big customer's demands will be.

                ## Milestones
                1. The isolation options listed with their cost, risk and operational load.
                2. Customer requirements gathered, including any demands for dedicated infrastructure.
                3. A model chosen, with a defined path for tenants that outgrow it.
                4. Automated tests proving one tenant cannot read another's data.
                5. The model documented for sales and security questionnaires.

                ## Notes
                Many products use a mixed model: shared for most tenants, dedicated for a few large ones. Design the tenant identifier into every path early; retrofitting it is painful.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented tenant isolation model with a growth path is chosen, and automated tests prove cross-tenant data access is blocked."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List shared, schema, database and stack-per-tenant options with their costs"
                - "Ask sales which customers have asked for dedicated infrastructure"
                - "Choose the model and write the path for tenants that outgrow it"
                - "Write tests that try to read another tenant's data"
                - "Rerun the cross-tenant access tests against production config @recurring(quarterly)"
            - name: Event storming a core business process
              description: |-
                ## Purpose
                Event storming puts engineers and domain experts in front of a wall of sticky notes describing everything that happens in a business process, in order, as past-tense events. For a core process such as ordering, claims or onboarding, a session of three to four hours exposes hidden rules, natural boundaries and the events that other parts of the system will need to hear about.

                ## Milestones
                1. One core process chosen and domain experts booked for a half-day session.
                2. The full timeline of domain events mapped, including the unhappy paths.
                3. Hot spots, disagreements and unknown rules marked on the wall.
                4. Candidate boundaries drawn around clusters of events.
                5. The output photographed or exported and turned into a context map update.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A half-day event storming session for one core process has produced an event timeline, marked hot spots and an updated context map."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose the core process with the most unclear rules"
                - "Book two domain experts and three engineers for a half-day session"
                - "Run the session through events, hot spots and boundaries"
                - "Update the context map with the boundaries the session found"
            - name: Regional deployment and data residency architecture
              description: |-
                ## Purpose
                Customers or regulators in some markets require that data stays in a particular country or region, and users far from your servers notice the latency. Designing how the system runs in more than one region, which data is regional, which is global and how a user's home region is decided, is a structural change best planned before the first customer contract demands it.

                ## Milestones
                1. Residency and latency requirements gathered from customers, legal and product.
                2. Data classes split into regional, global and replicated.
                3. A routing design for sending each user to their home region.
                4. The global services that must stay single-region identified and justified.
                5. The design checked with legal counsel against the actual residency obligations.

                ## Notes
                Residency rules vary by country and contract. The architecture decision is yours; whether it satisfies a specific law is a question for legal counsel.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A regional architecture design classifies each data class, defines home-region routing and is checked by legal counsel against stated obligations."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect every residency requirement from contracts and legal"
                - "Classify each data class as regional, global or replicated"
                - "Sketch how a request finds its user's home region"
                - "Review the design with legal counsel"
                - "Check where each data class is actually stored against the design @recurring(yearly)"
            - name: Plugin and extension architecture for third parties
              description: |-
                ## Purpose
                Opening a product to outside developers, through plugins, webhooks or embedded apps, turns internal interfaces into promises that are very hard to break. Designing the extension points, the isolation between extensions and the core, and the permission model before the first partner builds on it avoids a decade of supporting an accidental contract.

                ## Milestones
                1. The extension use cases partners actually want written down from real requests.
                2. Extension points chosen and kept to the smallest set that serves those cases.
                3. An isolation design so a faulty extension cannot take down the core.
                4. A permission model stating what each extension can see and do.
                5. A prototype extension built by someone outside the core team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written extension architecture with isolation and permissions is proven by a prototype extension built by someone outside the core team."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the extension requests received from customers and partners"
                - "Choose the smallest set of extension points that covers them"
                - "Design how extensions are isolated from the core at runtime"
                - "Ask someone outside the core team to build a prototype extension"
            - name: Cell-based layout to limit blast radius
              description: |-
                ## Purpose
                Sharing one stack between every customer means one bad deploy or one runaway tenant can take everyone down. Splitting the system into independent cells, each a full copy serving a slice of customers, with a thin routing layer in front, caps the damage of any failure at one cell. It is advanced work worth it only when the cost of a full outage is very high.

                ## Milestones
                1. The cost of a full outage compared with the cost of running cells.
                2. A cell boundary chosen, such as a group of tenants or a geography.
                3. The routing layer designed to be as simple and stable as possible.
                4. Shared services that cross cells listed, with a plan to shrink them.
                5. A first cell running and receiving a small share of real traffic.

                ## Notes
                The routing layer becomes the new single point of failure. Keep it small, slow to change and heavily tested.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written cell design with a routing layer is in place, and one cell serves a share of real traffic independently of the rest."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Estimate the cost of one hour of full outage for the business"
                - "Choose how customers will be partitioned into cells"
                - "Design the routing layer and list every service shared across cells"
                - "Move a small slice of traffic onto the first independent cell"
---

# System Architecture Design

This area is for engineers and teams who shape how a system hangs together: which components exist, how data moves between them, where the boundaries sit and what each trade-off costs. It starts with foundations (an honest map of what you run today, ranked quality attributes and the constraints you cannot wish away), moves through the routines and skills that keep design thinking alive, then the concrete decisions and dated reviews, and ends with situations such as inheriting a system and specialist work like tenant isolation and cell-based layouts.

What repeats is a monthly map refresh, a weekly design clinic, a monthly look at the risk register and the architecture metrics, fitness checks that run on every build, and a quarterly health review against the quality attributes you ranked. The Meeting notes, Risk register, Metrics log, Reading queue, Purchase decision and Operational checklist templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
