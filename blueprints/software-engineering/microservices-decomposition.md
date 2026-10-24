---
id: software-engineering.microservices-decomposition
name: Microservices Decomposition
description: "An honest decision on whether to split at all, boundaries drawn from the domain, data ownership settled, services extracted one at a time and the communication and failure patterns that keep them independent."
category: business
version: 1.0.0
tags: [software-engineering, microservices-decomposition, engineer, enterprise, domain-driven-design, bounded-contexts, strangler-fig, event-driven]
author: Aurum Technology
starter_structure:
  templates:
    - course
    - reading-queue
    - skills-matrix
    - risk-register
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Microservices Decomposition
          description: "Deciding whether and how to split a system into services, drawing service boundaries and handling communication, data ownership and failure."
          projects:
            - name: Module and dependency map of the current system
              description: |-
                ## Purpose
                Before anyone argues about services, someone needs to draw what actually exists: the modules, the database tables each one touches and the calls between them. Most monoliths turn out to have three or four clean regions and one tangled core, and knowing which is which decides where any split could start.

                ## Milestones
                1. Every top-level module or package listed with its owning team and approximate size in lines of code.
                2. The database tables each module reads and writes recorded, with shared tables highlighted.
                3. A dependency diagram generated from the code, not drawn from memory, showing calls between modules.
                4. The most tangled region and the two cleanest regions named in a short summary.

                ## Notes
                Use a static analysis or dependency graph tool for your language rather than asking people. The diagram that surprises the team is the useful one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A generated dependency diagram and a table-to-module list exist in the repository, with the tangled core and the clean regions named."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run a dependency graph tool over the main codebase and save the output"
                - "List which modules read and write each database table"
                - "Highlight tables written by more than one module"
                - "Write a one-page summary naming the tangled core and the clean regions"
            - name: Written case for or against splitting into services
              description: |-
                ## Purpose
                Microservices trade in-process calls for network calls, one deploy for many and one database for several, and that price only pays off when independent deployment or scaling solves a problem you really have. A written case, with the specific pain it would fix and what it would cost in people and tooling, stops the split happening because it is fashionable or blocked because it is scary.

                ## Milestones
                1. The three concrete problems the split is meant to solve stated with evidence, such as deploy queue times or a scaling hotspot.
                2. A modular monolith, a partial split and a full split compared against those problems.
                3. The extra operational cost of each option estimated: pipelines, on-call, tracing, platform work.
                4. A recorded decision with the triggers that would reopen it.

                ## Notes
                Staying with a well-structured monolith is a legitimate outcome. Write down the trigger, such as a third team blocked on the same deploy, that would change your mind.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record names the problems, compares three options on cost and benefit, states the choice and lists the triggers for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the three problems the split should solve, each with a number behind it"
                - "Compare a modular monolith, a partial split and a full split against them"
                - "Estimate the extra pipelines, on-call load and platform work for each option"
                - "Record the decision and the triggers that would reopen it"
            - name: Change coupling analysis from version control history
              description: |-
                ## Purpose
                Files that always change together belong together, whatever the folder structure says. Mining a year of commit history for files and modules that move in the same commits shows the real seams of the system and exposes boundaries that look clean on a diagram but would force coordinated releases the moment they became services.

                ## Milestones
                1. Twelve months of commit history analysed for files changed in the same commits.
                2. The top twenty module pairs by change coupling listed with their coupling percentage.
                3. Each proposed boundary checked against the list for pairs that would straddle it.
                4. Boundaries that cut through high-coupling pairs flagged for redesign.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A change coupling report covering twelve months lists the top twenty coupled module pairs and marks any proposed boundary that splits one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export twelve months of commit history with the files touched per commit"
                - "Calculate how often each pair of modules changes in the same commit"
                - "List the twenty most tightly coupled module pairs"
                - "Mark any proposed boundary that would separate a tightly coupled pair"
            - name: Event storming workshop for the core domain
              description: |-
                ## Purpose
                Service boundaries drawn by engineers alone tend to mirror the database or the org chart, not the business. A few hours with domain experts placing business events on a timeline, then grouping them by the language and rules they share, produces candidate boundaries that the people who run the business recognise.

                ## Milestones
                1. Domain experts from at least two business functions booked alongside engineers.
                2. The end-to-end flow captured as a timeline of business events, commands and policies.
                3. Points where the vocabulary changes, such as an order becoming a shipment, marked as candidate boundaries.
                4. Photos and a typed summary of the board shared with everyone who attended.

                ## Notes
                Keep the first session to one core flow, such as order to cash. Trying to storm the whole business in a day produces a wall nobody can read.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A typed event storming summary for one core flow, with candidate boundaries marked where vocabulary changes, is shared with all attendees."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick one core business flow and invite two domain experts who know it"
                - "Book a room or virtual board and four uninterrupted hours"
                - "Run the session and photograph the board at each stage"
                - "Type up the events, commands and candidate boundaries within two days"
            - name: Bounded context map with relationship types
              description: |-
                ## Purpose
                A context map turns workshop sticky notes into a design: each bounded context named, its responsibilities stated, and every relationship labelled as partnership, customer and supplier, conformist or anticorruption layer. Teams then know which boundaries they may change freely and which ones another team depends on.

                ## Milestones
                1. Each bounded context named with a two-sentence statement of what it owns and what it does not.
                2. Every relationship between contexts labelled with its type and its upstream and downstream side.
                3. Places where a translation layer is needed to protect a context's model marked.
                4. The map reviewed with each owning team and stored beside the architecture records.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A context map with every context described and every relationship typed is agreed by the owning teams and stored with the architecture records."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Name each candidate context from the event storming summary"
                - "Write two sentences on what each context owns and excludes"
                - "Label every relationship with its type and direction"
                - "Walk each owning team through the map and record their changes"
            - name: Data ownership matrix for core business entities
              description: |-
                ## Purpose
                The quickest way to build a distributed monolith is to let three services write the same customer table. Deciding, entity by entity, which context is the single writer and how everyone else gets a copy settles the arguments that otherwise surface during every extraction.

                ## Milestones
                1. The twenty most important business entities listed, from customer and order to invoice and stock level.
                2. One owning context recorded for each entity as the only writer.
                3. For each other context that needs the data, the access route chosen: API call, event-fed copy or none.
                4. Entities currently written by more than one module flagged as extraction risks.

                ## Notes
                An entity can look shared when it is really two concepts with one name. A customer in billing and a customer in support often deserve separate models.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A matrix names a single writing context for each of the top twenty entities and the access route for every other consumer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the twenty business entities that matter most to the system"
                - "Agree one writing context for each entity with the teams involved"
                - "Record how every other context will read each entity"
                - "Re-check the ownership matrix against new tables and services @recurring(yearly)"
            - name: Modular monolith boundaries enforced in code
              description: |-
                ## Purpose
                Extracting a service is far easier when the module already talks to the rest of the system through a narrow interface and owns its own tables. Enforcing those boundaries inside the monolith first, with build-time checks that fail on forbidden imports, proves the boundary before any network call is added.

                ## Milestones
                1. Each candidate context given its own module with a single public interface.
                2. An architecture test that fails the build when one module imports another's internals.
                3. Cross-module table access removed or routed through the owning module's interface.
                4. A month of builds passing with the rule switched on and no exceptions added.

                ## Notes
                This step alone often removes the pressure that started the split. Many teams stop here, and that is a good result.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Architecture tests in CI block cross-module imports and table access, and have passed for a month with no new exceptions."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose an architecture testing library for your language"
                - "Write a rule that forbids imports of another module's internal packages"
                - "List every current violation and assign each to its owning team"
                - "Switch the rule to fail the build once the violation list is empty"
            - name: Team agreement on what a service must own
              description: |-
                ## Purpose
                Without a shared definition, one team ships a service per database table while another builds a service that does half the business. A short written agreement on service size and responsibility, such as one business capability, its own data store and deployable by one team, gives every later boundary argument a reference point.

                ## Milestones
                1. A one-page definition of a service agreed: capability, data, team and deploy rules.
                2. Explicit anti-patterns listed, such as a service with no data of its own or one that needs another to deploy first.
                3. Three existing or proposed services checked against the definition as worked examples.
                4. The agreement published where design reviews will find it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page service definition with anti-patterns and three worked examples is published and referenced in the design review template."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page definition of what a service must own"
                - "List the anti-patterns the team has seen or wants to avoid"
                - "Test the definition against three real or proposed services"
                - "Add a link to the definition in the design review template"
            - name: Minimum production bar for any new service
              description: |-
                ## Purpose
                Every new service adds a pipeline, an alert route, a dashboard and a person who gets paged. A short checklist that each service must pass before it takes real traffic keeps the estate operable as it grows from five services to fifty.

                ## Milestones
                1. A checklist covering owner, health endpoint, logs with a request ID, alerts, runbook and rollback.
                2. The checklist tested against the two most recent services and gaps recorded.
                3. Sign-off against the checklist added as a step before production traffic.
                4. Existing services that fail the bar listed with owners and dates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A production readiness checklist exists, is required before new services take traffic, and every existing service has a recorded pass or a dated gap."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the checklist items a service needs before production traffic"
                - "Score the two newest services against the checklist"
                - "Add checklist sign-off to the service launch process"
                - "List existing services that fall short with an owner for each gap"
            - name: Service catalogue with owners and dependencies
              description: |-
                ## Purpose
                Once there are more than a dozen services, nobody can hold the estate in their head, and incidents stall while people search for who owns the thing that broke. A catalogue entry per service, with owner, purpose, data owned, upstream and downstream dependencies and runbook link, is the map everyone works from.

                ## Milestones
                1. Every running service has a catalogue entry with an owning team and on-call route.
                2. Each entry lists the data it owns and the services it calls and is called by.
                3. Services with no clear owner escalated and assigned.
                4. A monthly check that new services appear and retired ones are removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every running service has a catalogue entry with owner, data and dependencies, and the catalogue matches the deployed estate at each monthly check."
                cadence: rolling
              tasks:
                - "Export the list of deployed services from your platform"
                - "Create a catalogue entry for each with owner, data and dependencies"
                - "Assign an owner to every service that has none"
                - "Compare the catalogue with the deployed services list @recurring(monthly:9)"
            - name: Monthly cross-service call graph review
              description: |-
                ## Purpose
                Services that were independent at launch quietly acquire new synchronous calls to each other until one slow service drags down five. Reviewing the real call graph from tracing data each month catches new dependencies, cycles and long chains while they are still easy to undo.

                ## Milestones
                1. The live call graph exported from tracing data for the past month.
                2. New edges since last month listed with the team that added them.
                3. Any call cycle or synchronous chain deeper than three hops flagged.
                4. Each flagged item given an owner and a decision: accept, redesign or make asynchronous.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly note lists new call graph edges, cycles and deep chains, each with an owner and a recorded decision."
                cadence: rolling
              tasks:
                - "Export last month's service call graph from the tracing tool"
                - "Diff it against the previous month and list new edges"
                - "Review new edges, cycles and deep chains with the owning teams @recurring(monthly:17)"
                - "Record a decision and owner for every flagged dependency"
            - name: Consumer contract tests kept green
              description: |-
                ## Purpose
                Independent deployment only works if a provider can tell, before releasing, that it has not broken any consumer. Consumer-driven contract tests, run in the provider's pipeline against every published consumer expectation, replace the shared staging environment where everyone waits for everyone else.

                ## Milestones
                1. A contract testing tool chosen and a broker or shared store for contracts set up.
                2. The three busiest service-to-service integrations covered by consumer contracts.
                3. Provider pipelines failing when a change breaks a published contract.
                4. A weekly look at failing or stale contracts, with owners chasing each one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The three busiest integrations have consumer contracts verified in provider pipelines, and failing contracts are reviewed every week."
                cadence: rolling
              tasks:
                - "Pick a contract testing tool and set up somewhere to publish contracts"
                - "Write consumer contracts for the three busiest integrations"
                - "Add contract verification to each provider's pipeline"
                - "Review failing and stale contracts with their owners @recurring(weekly:wed)"
            - name: Event schema registry and compatibility checks
              description: |-
                ## Purpose
                Events are an API that nobody versions until a consumer crashes on a renamed field. A schema registry with compatibility rules, checked in CI before a producer can publish a changed event, makes asynchronous integration as safe as a reviewed API.

                ## Milestones
                1. Every published event type registered with an owner and a schema.
                2. A compatibility rule set per topic, such as backward compatible only.
                3. Producer pipelines rejecting schema changes that break the rule.
                4. A monthly review of schema changes and deprecated fields due for removal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All published event types are registered with owners and compatibility rules enforced in CI, and schema changes are reviewed monthly."
                cadence: rolling
              tasks:
                - "List every event type your services publish and who owns it"
                - "Register each schema and set its compatibility rule"
                - "Add a schema compatibility check to every producer pipeline"
                - "Review schema changes and fields due for removal @recurring(monthly:23)"
            - name: Dead letter queue triage routine
              description: |-
                ## Purpose
                Messages that fail repeatedly land in a dead letter queue, and an unwatched queue is lost orders, missed refunds or stock that never updates. A short weekly triage, with a clear rule for replay, fix or discard, keeps asynchronous failures from turning into silent data loss.

                ## Milestones
                1. Every consumer has a dead letter queue with an alert on depth and age.
                2. A written rule for each queue saying when to replay, fix and replay, or discard.
                3. Weekly triage held with counts and causes recorded.
                4. Repeat causes turned into fixes rather than repeated replays.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every consumer has an alerted dead letter queue with a written handling rule, and weekly triage notes show counts, causes and fixes."
                cadence: rolling
              tasks:
                - "Confirm every consumer has a dead letter queue with depth and age alerts"
                - "Write a replay, fix or discard rule for each queue"
                - "Triage dead letter queues and log counts and causes @recurring(weekly:tue)"
                - "Open a fix ticket for any cause seen three weeks running"
            - name: Quarterly boundary health review
              description: |-
                ## Purpose
                Boundaries decay: a field gets added to the wrong service, two teams start sharing a table again, or a feature needs changes in four services every time. Once a quarter, checking each boundary against a few hard signals tells you whether the design still holds or needs adjusting.

                ## Milestones
                1. For each service, the share of last quarter's features that also needed changes elsewhere measured.
                2. Shared tables, shared caches and lockstep deploys counted per boundary.
                3. The three weakest boundaries named with evidence.
                4. One boundary fix committed to next quarter's plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a review note scores every boundary on cross-service changes and shared resources, names the three weakest and commits one fix."
                cadence: cyclic
              tasks:
                - "Count last quarter's features that touched more than one service"
                - "List shared tables, caches and lockstep deploys per boundary"
                - "Hold the boundary health review with service owners @recurring(quarterly)"
                - "Add one boundary fix to next quarter's plan"
            - name: Service sprawl and running cost review
              description: |-
                ## Purpose
                Each service carries a fixed cost in compute, pipelines, dashboards and on-call attention, whether it serves ten requests a day or ten thousand. Reviewing the estate every quarter for tiny, idle or orphaned services shows where merging or retiring would cut cost and cognitive load without losing anything.

                ## Milestones
                1. Every service listed with traffic, monthly running cost and number of deploys last quarter.
                2. Services with very low traffic or no deploys in ninety days flagged.
                3. A merge, retire or keep decision recorded for each flagged service.
                4. Retired services removed from the catalogue, pipelines and alerting.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly table shows traffic, cost and deploys per service, with a recorded decision for every low-traffic or dormant one."
                cadence: cyclic
              tasks:
                - "Pull traffic, cost and deploy counts for every service"
                - "Flag services with very low traffic or no recent deploys"
                - "Decide merge, retire or keep for each flagged service @recurring(quarterly)"
                - "Remove retired services from pipelines, alerts and the catalogue"
            - name: Shared library and client SDK drift review
              description: |-
                ## Purpose
                Shared internal libraries are the easiest way to couple services back together: one change can force twenty redeploys, or twenty services run twenty versions. Watching which shared libraries each service depends on, and keeping them to stable, thin utilities, protects independent deployment.

                ## Milestones
                1. Every internal shared library listed with the services and versions that use it.
                2. Libraries containing business logic or domain models flagged for removal or slimming.
                3. A version policy agreed, such as no more than two major versions in use at once.
                4. A monthly drift report shared with library and service owners.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly report lists shared library versions per service, and no library containing domain models remains without a removal plan."
                cadence: rolling
              tasks:
                - "List internal shared libraries and the services that import them"
                - "Flag libraries that carry domain models or business rules"
                - "Agree a version policy with library owners"
                - "Publish the shared library version drift report @recurring(monthly:12)"
            - name: Extraction programme progress tracker
              description: |-
                ## Purpose
                Decomposition programmes stall quietly: the first service ships, the second gets half done, and two years later the monolith and five services both need maintaining. A tracker with a short weekly update and a monthly summary keeps the programme honest about what is finished, what is stuck and what has been dropped.

                ## Milestones
                1. Every planned extraction listed with stage, owner and target quarter.
                2. A definition of done for an extraction agreed, including old code deleted.
                3. Weekly status updated in under fifteen minutes by each owner.
                4. A monthly summary sent to stakeholders with finished, stuck and dropped items.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows every extraction's stage and owner, updated weekly, with a monthly summary sent to stakeholders."
                cadence: rolling
              tasks:
                - "List every planned extraction with stage, owner and target quarter"
                - "Write the definition of done for an extraction"
                - "Update extraction stages with each owner @recurring(weekly:fri)"
                - "Send the monthly decomposition summary to stakeholders @recurring(monthly:28)"
            - name: Strategic domain-driven design study
              description: |-
                ## Purpose
                Most of the value of domain-driven design for decomposition sits in its strategic half: subdomains, bounded contexts, ubiquitous language and context mapping. Six weeks of structured study, with each idea applied to your own system as you go, gives engineers the vocabulary to argue about boundaries precisely.

                ## Milestones
                1. A course or book on strategic design chosen and a six-week schedule set.
                2. Your system's subdomains classified as core, supporting or generic.
                3. The ubiquitous language for one context written as a short glossary.
                4. A one-page summary of what you would change in your current boundaries.

                ## Notes
                Start from the **Course** template. Skim the tactical patterns such as aggregates and repositories on the first pass; they matter inside a service, not between them.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Subdomains are classified, one context glossary is written and a one-page boundary review is shared with the team within ninety days."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose one course or book on strategic domain-driven design"
                - "Block two hours a week for six weeks in your calendar"
                - "Classify your subdomains as core, supporting or generic"
                - "Write a glossary of terms for one bounded context"
            - name: Microservices patterns reading list
              description: |-
                ## Purpose
                Only a small canon of books and papers is needed to cover most of what goes wrong in decomposition: the fallacies of distributed computing, sagas, the outbox, strangler fig and the case for the modular monolith. Reading them in order, a chapter at a time, and noting what applies to your system builds judgement faster than conference talks.

                ## Milestones
                1. A list of eight books, papers or essays on decomposition agreed.
                2. One chapter or paper read each fortnight with a short note on what applies.
                3. Three ideas from the reading proposed as changes to your own design.
                4. The list and notes shared for the next engineer to pick up.

                ## Notes
                Start from the **Reading queue** template. Include at least one source arguing against microservices; it sharpens the case either way.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight sources are listed with notes on each, and three resulting design proposals are recorded for the team."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Draft a list of eight sources, including one sceptical of microservices"
                - "Read the next chapter or paper and write a short note @recurring(monthly:15)"
                - "Turn three ideas from the reading into design proposals"
                - "Share the list and notes in the team's engineering space"
            - name: Strangler fig practice on a sandbox application
              description: |-
                ## Purpose
                Strangler fig extraction sounds simple until you need to route a fraction of traffic, keep two implementations in step and roll back mid-flight. Practising on a small sandbox application, with a routing layer in front, lets the team make those mistakes where they cost nothing.

                ## Milestones
                1. A small sandbox monolith running with a routing layer in front.
                2. One endpoint reimplemented as a separate service behind the router.
                3. Traffic shifted from five percent to one hundred percent with rollback tested at each step.
                4. The old code path deleted and lessons written down for the real extraction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sandbox extraction is completed from five to one hundred percent traffic with rollback tested, and a lessons note exists."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Set up a small sandbox monolith with a reverse proxy in front"
                - "Reimplement one endpoint as a separate service"
                - "Shift traffic in steps and practise rolling back at each one"
                - "Write the lessons that apply to your real system"
            - name: Synchronous and asynchronous communication trade-offs
              description: |-
                ## Purpose
                Calls between services can be request and response, fire-and-forget commands or published events, and each choice changes availability, latency and how failures show up. Working through the trade-offs against your own flows means engineers stop defaulting to an HTTP call for everything.

                ## Milestones
                1. The three styles summarised with their effect on coupling, latency and failure.
                2. Ten real cross-service interactions in your system classified by which style suits them.
                3. Interactions currently using the wrong style listed with the reason.
                4. A one-page guide for choosing a style added to the design review template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real interactions are classified by communication style and a one-page selection guide is linked from the design review template."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise request and response, commands and events on one page"
                - "Classify ten real cross-service interactions by the style that fits"
                - "List interactions using the wrong style and explain why"
                - "Add the selection guide to the design review template"
            - name: Saga choreography versus orchestration practice
              description: |-
                ## Purpose
                Once an order, a payment and a stock reservation live in three services, there is no database transaction to roll back when step three fails. Building one business flow both ways, as a choreographed chain of events and as an orchestrated workflow, shows which style your team can debug at three in the morning.

                ## Milestones
                1. One multi-step business flow chosen with its compensating action for each step.
                2. A choreographed version built in a sandbox using events.
                3. An orchestrated version built with a central coordinator.
                4. A recorded team preference with the conditions for using the other style.

                ## Notes
                Compensation is not undo. A refund after a charge is a new business action with its own rules, so agree each compensation with the business owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One flow is built both ways in a sandbox, compensations are agreed with the business owner and a team preference is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a multi-step flow and list each step's compensating action"
                - "Agree the compensations with the business owner of the flow"
                - "Build the flow with events and then with a central coordinator"
                - "Record which style the team prefers and when to use the other"
            - name: Transactional outbox and idempotent consumers
              description: |-
                ## Purpose
                Writing to the database and publishing an event as two separate steps guarantees that one day the second step fails and other services never hear about a change. The outbox pattern, paired with consumers that can safely process a message twice, closes that gap and is worth practising before the first extraction depends on it.

                ## Milestones
                1. An outbox table written in the same transaction as the business change in a sandbox.
                2. A relay publishing outbox rows to the broker and marking them sent.
                3. A consumer that records processed message IDs and ignores duplicates.
                4. A failure test showing no lost and no doubled effects after killing the relay mid-batch.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sandbox demonstrates outbox publishing and idempotent consumption with no lost or duplicated effects after a forced relay failure."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Add an outbox table written in the same transaction as the change"
                - "Build a relay that publishes outbox rows and marks them sent"
                - "Make the consumer store processed message IDs and skip repeats"
                - "Kill the relay mid-batch and check for lost or doubled effects"
            - name: Failure handling kata for service calls
              description: |-
                ## Purpose
                Network calls can be slow, fail, succeed twice or succeed without the caller knowing. A short series of exercises on timeouts, retries with backoff and jitter, circuit breakers and bulkheads, each run against a deliberately flaky dependency, gives engineers reflexes they will need the first time a downstream service degrades.

                ## Milestones
                1. A sandbox dependency that can be made slow, flaky or down on command.
                2. A client with timeouts and capped retries with jitter that survives the flaky mode.
                3. A circuit breaker that opens under failure and recovers when the dependency returns.
                4. A bulkhead that keeps one slow dependency from exhausting the caller's threads.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each engineer in the group completes the four exercises against the flaky dependency and shares a short write-up."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a sandbox dependency with slow, flaky and down modes"
                - "Add timeouts and capped retries with jitter to a client"
                - "Add a circuit breaker and watch it open and close"
                - "Isolate the slow dependency with a bulkhead and measure the effect"
            - name: Team skills matrix for distributed systems work
              description: |-
                ## Purpose
                Any decomposition plan that assumes everyone can debug a message flow across four services will fail in its first incident. Mapping who is confident with domain modelling, messaging, tracing, contract testing and data migration shows where pairing and study are needed before the extraction schedule is set.

                ## Milestones
                1. Eight skills listed that decomposition work depends on.
                2. Each engineer self-rated on each skill and checked in a short conversation.
                3. Skills with fewer than two confident people highlighted.
                4. A pairing or study plan set for each highlighted gap.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills matrix rates every engineer on eight decomposition skills, and each skill with fewer than two confident people has a plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the eight skills your decomposition work depends on"
                - "Ask each engineer to self-rate and talk through the scores"
                - "Highlight skills with fewer than two confident people"
                - "Pair a confident and a learning engineer on each gap"
            - name: Extracting the first service with a strangler fig
              description: |-
                ## Purpose
                The first extraction sets the pattern for every one after it, so pick a context with clear data ownership, modest traffic and a team keen to own it. Routing traffic gradually from the monolith to the new service, with rollback at each step, proves the platform, the pipeline and the operating model on something that can fail safely.

                ## Milestones
                1. A first candidate chosen against criteria: clean boundary, owned data, moderate risk.
                2. The new service live behind the router with its own pipeline and alerts.
                3. Traffic moved in stages to one hundred percent, with rollback rehearsed.
                4. The service meeting the minimum production bar and listed in the catalogue.

                ## Notes
                Avoid the most important or most tangled context for the first attempt. Success on a modest one buys the credibility for the hard ones.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first extracted service serves all of its traffic in production, meets the production bar and has a rehearsed rollback."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Score three candidate contexts on boundary, data ownership and risk"
                - "Stand up the new service with its own pipeline, logs and alerts"
                - "Route traffic to it in stages, rehearsing rollback at each stage"
                - "Check the service against the production bar before full traffic"
            - name: Splitting a shared database by service ownership
              description: |-
                ## Purpose
                Services that still share one database are not independent: a schema change in one breaks another, and a heavy query in one slows them all. Moving each service's tables into a store it alone writes, with others reading through APIs or event-fed copies, is the slowest and most valuable step in decomposition.

                ## Milestones
                1. Every table assigned to one owning service using the data ownership matrix.
                2. Cross-service joins and foreign keys listed with a replacement for each.
                3. One service's tables moved to its own schema or database with no other writers.
                4. Remaining shared tables tracked with an owner and a target quarter.

                ## Notes
                Start from the **Risk register** template. Move one service at a time, and keep a tested way back for each move until it has run cleanly for a few weeks.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one service's data lives in a store only it writes, and every remaining shared table has an owner and a target quarter."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Assign every table to an owning service from the ownership matrix"
                - "List cross-service joins and foreign keys with a replacement for each"
                - "Move one service's tables to a store only it writes"
                - "Track the remaining shared tables with owners and target quarters"
            - name: Choosing between a message broker and an event log
              description: |-
                ## Purpose
                Queue-based brokers and log-based streaming platforms both move messages, but they differ on replay, ordering, retention and operating effort. Choosing deliberately, against your actual message volumes and replay needs, avoids running a streaming platform for a few thousand messages a day or a broker where consumers need to rebuild state from history.

                ## Milestones
                1. Current and expected message volumes, ordering needs and replay needs written down.
                2. Two or three options compared, including a managed cloud service.
                3. Operating effort and cost estimated for each over two years.
                4. A recorded choice with the use cases it does not cover.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares at least two messaging options on replay, ordering, cost and effort, and names the choice and its gaps."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate message volumes and list ordering and replay needs"
                - "Compare a queue broker, a streaming log and a managed cloud option"
                - "Estimate two years of running cost and operating effort for each"
                - "Record the choice and the use cases it leaves uncovered"
            - name: Workflow engine decision for long-running processes
              description: |-
                ## Purpose
                Onboarding, claims and fulfilment flows can run for days across several services, and hand-written state machines spread across event handlers are hard to follow. Deciding whether a durable workflow engine is worth adopting, or whether a simpler orchestrator service will do, settles the question before each team invents its own.

                ## Milestones
                1. The long-running flows in the system listed with their steps and typical duration.
                2. Two workflow engines and a hand-built orchestrator compared on visibility, retries and operating cost.
                3. One flow prototyped on the leading option.
                4. A recorded decision on which flows will use it and which will not.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record lists long-running flows, compares three approaches with one prototype, and states which flows adopt the choice."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List flows that span several services and run longer than a minute"
                - "Compare two workflow engines with a hand-built orchestrator"
                - "Prototype one flow on the leading option"
                - "Record which flows will adopt it and which will not"
            - name: Merging two over-chatty services back together
              description: |-
                ## Purpose
                Some boundaries turn out to be wrong: two services that call each other on every request, deploy together and are owned by the same people are one service paying a network tax. Recognising that and merging them is a design improvement, not a failure, and it removes latency and failure points at once.

                ## Milestones
                1. A candidate pair identified from call volume, joint deploys and shared ownership.
                2. Latency, error rate and joint change counts measured for the pair.
                3. A merge plan with data consolidation and a rollback route agreed.
                4. The merged service live and the measurements repeated.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One chatty service pair is merged, with before and after latency and error measurements recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find service pairs with heavy mutual calls and joint deploys"
                - "Measure latency, errors and joint changes for the top candidate"
                - "Agree a merge plan with a way back"
                - "Repeat the measurements a month after the merge"
            - name: Event-fed read models instead of cross-service queries
              description: |-
                ## Purpose
                Screens that need data from four services either make four calls and fail when any one is down, or someone adds a cross-service database join. Building a read model fed by events, owned by the service that needs it, keeps the screen fast and available while each source service stays the single writer.

                ## Milestones
                1. One screen or report identified that fans out to three or more services.
                2. A read model designed with the events that feed it and acceptable staleness agreed.
                3. The read model built, backfilled and serving the screen.
                4. Lag between source change and read model update monitored.

                ## Notes
                Agree the acceptable staleness with the product owner in seconds or minutes before building. Without a number, every delay becomes a bug report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One fan-out screen is served from an event-fed read model with an agreed staleness limit, and lag is monitored monthly."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find a screen that calls three or more services to render"
                - "Agree an acceptable staleness limit with the product owner"
                - "Build and backfill the read model from source events"
                - "Check read model lag against the agreed limit @recurring(monthly:6)"
            - name: Timeout and retry budget across a call chain
              description: |-
                ## Purpose
                When every service in a chain of four retries three times, one slow database can turn a single user request into eighty-one calls. Setting timeouts and retries as a budget across the whole chain, with only one layer retrying, stops retry storms and keeps user-facing latency predictable.

                ## Milestones
                1. The busiest user-facing call chain mapped with each hop's current timeout and retry setting.
                2. A total latency budget agreed for the user request.
                3. Timeouts set so inner hops expire before outer ones, and retries limited to one layer.
                4. A load test showing no retry amplification when the deepest dependency slows.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The busiest call chain has documented, nested timeouts and single-layer retries, verified by a slow-dependency test."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Map the busiest call chain with every hop's timeout and retries"
                - "Agree a total latency budget for the user-facing request"
                - "Set nested timeouts and remove retries from all but one layer"
                - "Slow the deepest dependency in a test and count the calls"
            - name: Gateway or backend-for-frontend for client aggregation
              description: |-
                ## Purpose
                Mobile and web clients that call six services directly become coupled to every boundary change behind them. Deciding whether a shared gateway, a backend-for-frontend per client or plain composition in one service fits your clients keeps internal boundaries free to move.

                ## Milestones
                1. Each client listed with the services it calls directly today.
                2. A shared gateway, per-client backends and in-service composition compared.
                3. Ownership of the chosen layer agreed, so it does not become a new monolith.
                4. A recorded decision and a migration order for the clients.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record names the aggregation approach, its owning team and the order in which clients will move to it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the services each client calls directly"
                - "Compare a shared gateway, per-client backends and in-service composition"
                - "Agree who owns the aggregation layer and what it may not contain"
                - "Record the decision and the order clients will migrate"
            - name: Decomposition proposal to leadership
              description: |-
                ## Purpose
                Splitting a system takes quarters of engineering time with little visible feature output, so it needs explicit sponsorship. A short proposal with the problems, the target boundaries, the first two extractions, the cost and the stop conditions gets a clear yes or no instead of drifting as a side project.

                ## Milestones
                1. A proposal of no more than six pages with problem, target design, plan, cost and risks.
                2. Explicit stop conditions stated, such as no improvement in deploy lead time after two extractions.
                3. The proposal reviewed by an architecture forum or senior engineers before the meeting.
                4. A recorded decision and named sponsor after the meeting.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The proposal is presented, and a decision with a named sponsor and agreed stop conditions is recorded within forty-five days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book the decision meeting with the people who fund engineering time"
                - "Ask the agent to draft a six-page proposal from the decision record and context map"
                - "Add stop conditions and the cost of the first two extractions"
                - "Get senior engineers to review the proposal before the meeting"
            - name: Production cutover of the first extracted service
              description: |-
                ## Purpose
                The moment the monolith stops handling a capability is the one most likely to surprise you, usually through a batch job, report or integration nobody listed. A planned cutover day, with a checklist, a watch rota and a rehearsed rollback, makes it uneventful.

                ## Milestones
                1. Every caller of the old code path found, including batch jobs, reports and partner integrations.
                2. A cutover checklist and rollback steps rehearsed in a pre-production environment.
                3. A watch rota agreed for the cutover window and the following forty-eight hours.
                4. Cutover completed and a short note of anything that surprised you written.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The cutover is completed on the planned date with a rehearsed rollback ready, and a note of surprises is recorded within a week."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Search logs and code for every caller of the old code path"
                - "Rehearse the cutover and rollback in pre-production"
                - "Agree the watch rota for the window and the next two days"
                - "Write a note of surprises within a week of cutover"
            - name: Data migration day for a split database
              description: |-
                ## Purpose
                Moving a service's tables to their own store is the riskiest single event in a decomposition, because data mistakes outlive code mistakes. Treating it as a dated event with a dry run, reconciliation counts and a go or no-go call protects the records the business depends on.

                ## Milestones
                1. A full dry run completed on a copy of production data with timings recorded.
                2. Reconciliation checks defined: row counts, checksums and a sample of business records.
                3. A go or no-go meeting held with named decision makers.
                4. Migration completed and reconciliation passed, with the old tables made read-only.

                ## Notes
                Reuse the risk register from the database split, and keep the old tables read-only rather than dropped until the new store has run cleanly for weeks.
              priority: medium
              deadlineOffsetDays: 200
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The migration completes after a timed dry run, reconciliation checks all pass and the old tables are read-only."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Run a full dry run on a copy of production data and time it"
                - "Write row count, checksum and sample record reconciliation checks"
                - "Hold a go or no-go meeting with named decision makers"
                - "Make the old tables read-only once reconciliation passes"
            - name: Deleting the old monolith code path
              description: |-
                ## Purpose
                An extraction is not finished while the old implementation still sits in the monolith, because someone will fix a bug in the wrong place or a forgotten caller will revive it. Deleting the code, its tables and its configuration, with a celebration, is the milestone that actually reduces what the team maintains.

                ## Milestones
                1. Usage of the old code path confirmed at zero for at least thirty days.
                2. Code, tests, feature flags and configuration for the old path removed.
                3. Old tables archived according to retention rules and dropped.
                4. Lines of code removed recorded and shared with the team.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old code path, its flags and its tables are removed after thirty days of zero usage, and the lines removed are reported."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Add a usage counter to the old code path and wait thirty days"
                - "Remove the code, tests, flags and configuration in one change"
                - "Archive the old tables under retention rules, then drop them"
                - "Share the number of lines removed with the team"
            - name: First-year decomposition retrospective
              description: |-
                ## Purpose
                Twelve months in, the original case for splitting can be tested against reality: did deploy lead time fall, did incidents get smaller, did teams really ship independently? A dated retrospective with the same measures used in the original decision decides whether to continue, slow down or stop.

                ## Milestones
                1. The measures from the original decision record collected for the past year.
                2. Engineers and on-call staff surveyed on what got easier and what got harder.
                3. A retrospective held with sponsors and service owners.
                4. A continue, adjust or stop decision recorded with next year's targets.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A retrospective compares the original measures with a year of results and records a continue, adjust or stop decision."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Collect the original decision's measures for the past year"
                - "Survey engineers and on-call staff on what changed"
                - "Hold the decomposition retrospective with sponsors @recurring(yearly)"
                - "Record the decision and next year's targets"
            - name: Staying on a modular monolith as a small team
              description: |-
                ## Purpose
                A team of five with one product rarely gains from microservices, and the platform work can eat a third of its capacity. Committing to a modular monolith on purpose, with clean internal boundaries and a written list of triggers for revisiting, gives a small team most of the benefit and keeps the option to split later.

                ## Milestones
                1. The team's reasons for staying with one deployable written down.
                2. Internal module boundaries defined and checked by an architecture test.
                3. Triggers for revisiting listed, such as team size, a scaling hotspot or a compliance boundary.
                4. A quarterly check against the triggers in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written decision to stay modular exists with enforced module boundaries and named triggers, checked every quarter."
                cadence: rolling
              tasks:
                - "Write why the team is staying with one deployable for now"
                - "Add an architecture test that checks module boundaries"
                - "List the triggers that would justify a split"
                - "Check the system against the split triggers @recurring(quarterly)"
            - name: Decomposing an enterprise core shared by many teams
              description: |-
                ## Purpose
                In a large organisation the core system is touched by a dozen teams, several business units and outside vendors, so decomposition is as much negotiation as engineering. Agreeing boundaries, sequencing and funding across those groups before code moves prevents half-extracted capabilities owned by nobody.

                ## Milestones
                1. Every team and vendor changing the core listed with the capabilities they touch.
                2. A target ownership map agreed with the heads of each team.
                3. An extraction sequence set that avoids two teams moving the same capability.
                4. A cross-team steering rhythm and escalation route agreed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A target ownership map and extraction sequence are signed off by every team lead touching the core, with an escalation route."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every team and vendor that changes the core system"
                - "Draft a target ownership map and review it with each team lead"
                - "Sequence extractions so no two teams move the same capability"
                - "Agree a steering rhythm and an escalation route"
            - name: Rescuing an inherited distributed monolith
              description: |-
                ## Purpose
                Many teams inherit forty services that must deploy in a fixed order, share a database and fail together. Diagnosing which services are really one, which boundaries are worth keeping and what to fix first turns a frightening estate into a prioritised plan.

                ## Milestones
                1. Services that always deploy together or share tables grouped into clusters.
                2. Each cluster labelled keep, merge or redraw, with evidence.
                3. The three changes that would most reduce lockstep deploys prioritised.
                4. The first of those changes delivered.

                ## Notes
                Start from the **Remediation plan** template. Resist rewriting everything; merging a few tightly bound services often gives the biggest relief.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A remediation plan groups the inherited services into clusters with keep, merge or redraw decisions, and the first priority change is delivered."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Group services that deploy together or share tables"
                - "Label each group keep, merge or redraw with the evidence"
                - "Pick the three changes that would cut lockstep deploys most"
                - "Deliver the first change and measure deploy independence"
            - name: Audit and data residency across service boundaries
              description: |-
                ## Purpose
                In regulated enterprises, splitting a system scatters personal and financial data across many stores and makes audit evidence harder to assemble. Mapping which services hold regulated data, where it is stored and how an audit trail survives the split keeps the decomposition from creating a compliance finding.

                ## Milestones
                1. Every service holding personal, payment or regulated data identified.
                2. Storage location and retention rule recorded for each.
                3. An audit trail approach agreed that follows a record across services.
                4. The map reviewed with the compliance or data protection lead.

                ## Notes
                Requirements differ by jurisdiction and sector. Agree what counts as sufficient evidence with your compliance lead rather than assuming.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A map of regulated data by service, location and retention, with an agreed audit trail approach, is reviewed by the compliance lead."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "List services that hold personal, payment or regulated data"
                - "Record storage location and retention for each one"
                - "Agree an audit trail approach that spans services"
                - "Review the regulated data map with the compliance lead @recurring(yearly)"
            - name: Tech lead's first sixty days owning a set of services
              description: |-
                ## Purpose
                Taking over five services from another team means inheriting their boundaries, their consumers and their unwritten promises. A sixty-day plan to learn the contracts, the data owned, the failure history and the consumers' expectations lets a new tech lead make boundary decisions from knowledge rather than guesswork.

                ## Milestones
                1. Every inherited service's contracts, events and data stores listed.
                2. Each consuming team met and their expectations noted.
                3. Six months of incidents for the services read and summarised.
                4. A short list of boundary changes proposed to the team at day sixty.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "By day sixty the tech lead has documented contracts, consumer expectations and incident history, and proposed boundary changes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List each inherited service's APIs, events and data stores"
                - "Book thirty minutes with each consuming team"
                - "Read six months of incident notes for the services"
                - "Propose boundary changes to the team at day sixty"
            - name: Aligning team structure with service boundaries
              description: |-
                ## Purpose
                Systems tend to copy the communication structure of the organisation that builds them, so services owned across team lines drift towards coupling. Aligning teams with bounded contexts, or deliberately redrawing boundaries to match stable teams, makes ownership clear and independent delivery realistic.

                ## Milestones
                1. Each service mapped to the team or teams that change it most.
                2. Services changed by more than one team listed with the cause.
                3. A proposal agreed with engineering managers to move ownership or redraw boundaries.
                4. A quarterly check that service ownership still matches team structure.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Every service has one owning team, multi-team services have an agreed fix, and alignment is checked each quarter."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Map each service to the teams whose commits change it"
                - "List services changed by more than one team and why"
                - "Agree ownership moves or boundary changes with engineering managers"
                - "Check service ownership against team structure @recurring(quarterly)"
            - name: Consistency model for invariants that span services
              description: |-
                ## Purpose
                Some business rules, such as never sell stock you do not have or never pay an invoice twice, used to be enforced by one database transaction and are now split across services. Listing those invariants and deciding which need strong consistency inside one service and which can be eventually consistent with compensation is where decomposition designs succeed or fail.

                ## Milestones
                1. Every business invariant touching more than one service listed with its business owner.
                2. Each invariant labelled strong or eventual, with the reason.
                3. Strong invariants placed inside a single service or aggregate.
                4. Eventual invariants given a detection check and a compensation route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each cross-service invariant is recorded as strong or eventual, with strong ones inside one service and eventual ones given checks and compensation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List business rules that depend on data in more than one service"
                - "Ask each rule's business owner what a breach would cost"
                - "Label each invariant strong or eventual and record why"
                - "Add detection checks and compensation for eventual invariants"
            - name: Architecture fitness functions for service boundaries
              description: |-
                ## Purpose
                Boundary rules written in a document erode; rules checked on every build hold. Fitness functions that fail when a service reads another's database, imports its domain package or adds a synchronous call outside an allow-list turn the context map into something the pipeline enforces.

                ## Milestones
                1. Three boundary rules chosen that matter most for your estate.
                2. Each rule implemented as an automated check in CI.
                3. Existing violations recorded in an exception list with owners and expiry dates.
                4. A monthly review of the exception list.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three boundary rules run in CI on every build, and each exception has an owner and an expiry date reviewed monthly."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose the three boundary rules most often broken in your estate"
                - "Implement each rule as an automated pipeline check"
                - "Record existing violations with owners and expiry dates"
                - "Review the boundary rule exception list @recurring(monthly:4)"
            - name: Event sourcing for one high-audit context
              description: |-
                ## Purpose
                For a context where the history of changes matters as much as the current state, such as ledgers, entitlements or claims, storing events as the source of truth gives a complete audit trail and lets other services rebuild their views. It also adds real complexity, so it belongs in one well-chosen context, never the whole estate.

                ## Milestones
                1. One context chosen where change history is a business requirement.
                2. The event model designed and reviewed with the domain expert.
                3. A prototype rebuilding current state and one projection from the event store.
                4. A decision recorded on adopting it, with snapshotting and schema evolution plans.

                ## Notes
                Plan for changing event schemas from day one. Stored events live forever, so versioning and upcasting are not optional.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A prototype for one high-audit context rebuilds state from events, and a recorded decision covers snapshotting and schema evolution."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick one context where change history is a business requirement"
                - "Design the event model with the domain expert"
                - "Prototype rebuilding state and one projection from stored events"
                - "Record the adoption decision with snapshot and versioning plans"
            - name: Service mesh adoption decision
              description: |-
                ## Purpose
                A service mesh can add mutual TLS, retries, traffic shifting and per-call telemetry without touching application code, at the cost of another control plane to upgrade and debug. Deciding against your service count and the problems you have today avoids adopting one because a conference talk made it look free.

                ## Milestones
                1. The specific problems a mesh would solve listed, with how you handle each today.
                2. Library-based alternatives and at least one mesh compared on effort and risk.
                3. A pilot on two non-critical services measured for latency and operating load.
                4. A recorded adopt, defer or reject decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares a mesh with library-based options, includes pilot measurements and states adopt, defer or reject."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the problems a mesh would solve and how you solve them now"
                - "Compare at least one mesh with library-based alternatives"
                - "Pilot the mesh on two non-critical services and measure latency"
                - "Record an adopt, defer or reject decision"
            - name: Independent deployability scorecard
              description: |-
                ## Purpose
                Letting teams ship without waiting for each other is the whole point of services, yet few organisations measure it. A scorecard per service, counting deploys that needed another service to deploy first, shared test environments queued for and cross-team approvals, shows whether decomposition is delivering its promise.

                ## Milestones
                1. Three measures of independence defined and agreed.
                2. A baseline scorecard produced for every service.
                3. The five least independent services named with causes.
                4. A quarterly scorecard shared with service owners and sponsors.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scorecard rates every service on three independence measures each quarter and names the five least independent with causes."
                cadence: cyclic
              tasks:
                - "Define three measures of independent deployability"
                - "Produce a baseline scorecard for every service"
                - "Name the five least independent services and why"
                - "Publish the deployability scorecard to owners and sponsors @recurring(quarterly)"
---

# Microservices Decomposition

This area is for engineers and enterprise teams deciding whether a system should become several services, and for those already part way through the split. It starts with the foundations (a map of what exists, a written case for or against splitting, change coupling, event storming, a context map and data ownership), then the routines that keep a service estate coherent, the skills behind sagas, outboxes and failure handling, the decisions about brokers, gateways and merging services back, the dated cutovers and code deletions, the situations a startup, an enterprise or an inheritor of a distributed monolith faces, and finally the specialist work of consistency models, fitness functions and event sourcing.

What repeats is a weekly look at dead letter queues and broken consumer contracts, monthly catalogue, dependency, schema and shared library reviews on varied days, quarterly boundary health and service sprawl reviews, and a yearly data ownership and audit check. The Course, Reading queue, Skills matrix, Risk register and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
