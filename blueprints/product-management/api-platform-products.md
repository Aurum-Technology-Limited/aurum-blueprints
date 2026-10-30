---
id: product-management.api-platform-products
name: API & Platform Products
description: "APIs run as products: an inventory and design rules, versioning and auth decisions, a developer portal people succeed with, routines that keep the platform healthy, and the partners and enterprises building on it."
category: business
version: 1.0.0
tags: [product-management, api-platform-products, team, engineer, enterprise, developer-experience, api-versioning, developer-portal]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - product-spec
    - meeting-notes
    - risk-register
    - purchase-decision
    - operational-checklist
    - development-plan
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: API & Platform Products
          description: "Managing APIs and developer platforms as products, with documentation, versioning, developer experience and partners treated as real customers."
          projects:
            - name: API product inventory and ownership map
              description: |-
                ## Purpose
                Most companies that have shipped APIs for a few years cannot say how many they run: the public REST API, two partner endpoints built for one deal, a webhook service and a dozen internal APIs other teams quietly depend on. A single inventory listing every API, its owner, its audience and who actually calls it is the foundation for every versioning, security and roadmap decision that follows.

                ## Milestones
                1. Every public, partner and internal API listed, taken from gateway and traffic logs rather than memory.
                2. A named product owner and engineering owner recorded against each API.
                3. Audience, authentication method and current version noted for every entry.
                4. APIs with no owner or no traffic in 90 days flagged for a decision.

                ## Notes
                Start from gateway logs, not the documentation site. Undocumented endpoints with live traffic are the ones that cause surprises.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory covering every API with live traffic, each with a named owner, audience and version, shared with engineering leads."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the list of hosts and routes seen by the API gateway in the last 90 days"
                - "Match each route to a documented API or mark it undocumented"
                - "Ask each engineering lead to confirm the owner of their APIs"
                - "Flag APIs with no owner or no recent traffic for a keep or retire decision"
                - "Refresh the inventory against gateway traffic @recurring(quarterly)"
            - name: Developer personas and top integration use cases
              description: |-
                ## Purpose
                Developers who call your API are not one audience: an integration engineer at a large customer, a solo developer at an agency building for clients, a partner company shipping a connector and an internal team on a deadline all want different things. Writing down who they are and the five jobs they most often use the API for gives docs, SDKs and the roadmap a shared target.

                ## Milestones
                1. Three to five developer personas written from support tickets, sign-up data and interviews.
                2. The top five integration use cases ranked by number of active apps.
                3. Each persona's biggest current frustration recorded in their own words.
                4. Personas and use cases reviewed by support, sales engineering and developer relations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page set of developer personas and a ranked list of five integration use cases, reviewed by support and sales engineering."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the job titles and company sizes of the last 200 API key sign-ups"
                - "Interview five developers who built a live integration in the last six months"
                - "Rank integration use cases by count of active apps"
                - "Write a one-page persona for each distinct type of developer"
                - "Revisit the personas against the year's sign-up data @recurring(yearly)"
            - name: Developer experience metrics baseline
              description: |-
                ## Purpose
                Teams that run an API without numbers end up arguing from anecdotes about whether the docs are good or onboarding is slow. Measuring a small set of baselines now, such as time to first successful call, weekly active apps, the share of keys that never make a call and error rate by endpoint, turns every later improvement into something you can prove.

                ## Milestones
                1. Definitions agreed for time to first successful call, active app and activated developer.
                2. Current values measured for at least six metrics and written down with their date.
                3. The data source and query behind each metric recorded so the number can be rebuilt.
                4. Two metrics chosen as the ones the team will move this half.

                ## Notes
                Start from the **Metrics log** template. Measure time to first call from key creation to the first 2xx response, not from the first sign-up page view.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metrics log holding dated baseline values and definitions for at least six developer experience metrics, with two chosen as targets."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write one-sentence definitions for time to first call, active app and activated developer"
                - "Ask engineering for a query that returns the first 2xx response per new key"
                - "Record the current value and source of each metric in the log"
                - "Agree with the team which two metrics to move this half"
            - name: API design guidelines for every team
              description: |-
                ## Purpose
                Without written rules, each team invents its own naming, pagination, date formats and error shapes, and developers have to relearn the API at every endpoint. A short guidelines document, with examples of good and bad requests, makes the API feel like one product and turns design reviews into checks against agreed rules rather than taste.

                ## Milestones
                1. Rules written for resource naming, casing, pagination, filtering, dates, money and errors.
                2. A good and a bad example request shown for every rule.
                3. Idempotency and retry behaviour defined for write operations.
                4. Each rule marked as must or should, so reviewers know what blocks a release.
                5. The guidelines approved by engineering leads and linked from the internal developer wiki.

                ## Notes
                Borrow from published style guides by large API providers rather than starting blank, then cut anything your team will not enforce.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published API design guideline with must and should rules and examples, approved by engineering leads."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect three public API style guides from large providers to compare"
                - "List the ten places where your current endpoints disagree with each other"
                - "Ask the agent to draft rules for naming, pagination, dates and errors from your notes"
                - "Review the draft with two engineering leads and mark each rule must or should"
                - "Review the guidelines against the year's design review decisions @recurring(yearly)"
            - name: Contract-first API specification workflow
              description: |-
                ## Purpose
                When code is written first and the spec is generated afterwards, design mistakes reach customers before anyone outside the team has seen them. Making a machine-readable specification, such as OpenAPI, the reviewed source of truth before implementation starts lets docs, mocks, SDKs and tests come from the same file and catches problems while they are still cheap to fix.

                ## Milestones
                1. One specification format chosen and stored in version control beside the code.
                2. A rule agreed that new endpoints are reviewed as a spec change before implementation.
                3. Mock servers generated from the spec for early consumer testing.
                4. Docs and at least one SDK built from the spec in the release pipeline.

                ## Notes
                Start from the **Product spec** template for the problem, consumers and success measures, then attach the API specification itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three consecutive new endpoints shipped from a spec reviewed before implementation, with docs generated from the same file."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find where the current API specification lives and how it is produced"
                - "Agree a specification format and repository location with engineering"
                - "Run the next new endpoint through a spec review before any code is written"
                - "Generate a mock server from the spec for one consumer to try"
            - name: Authentication and authorisation model decision
              description: |-
                ## Purpose
                How developers prove who they are shapes onboarding, security and enterprise sales for years. Choosing deliberately between API keys, OAuth 2.0 client credentials and the authorisation code flow, and defining scopes that match real use cases, avoids the common pattern of a key with full account access that customers' security teams refuse to approve.

                ## Milestones
                1. The authentication methods each persona needs listed, including server to server and user-delegated access.
                2. A decision recorded on API keys, OAuth flows and when each is allowed.
                3. A first set of scopes defined around use cases rather than individual endpoints.
                4. Key rotation, expiry and revocation behaviour written down.
                5. The decision reviewed by security and by one enterprise customer's security team.

                ## Notes
                Least privilege matters more than the protocol. Keys with every permission are the usual reason a security review stalls a deal.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written authentication decision with scopes, rotation and revocation rules, signed off by the security lead."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List how each developer persona needs to authenticate today"
                - "Count how many existing keys have full account permissions"
                - "Draft a scope list grouped by integration use case"
                - "Review the decision with the security lead and record the outcome"
            - name: Versioning and breaking change policy
              description: |-
                ## Purpose
                Developers build businesses on your API, and a renamed field can break a customer's billing run overnight. A written policy that defines what counts as breaking, how versions are named, how long old versions are supported and how much notice consumers get is what lets the team keep shipping without losing the trust of the people who integrate.

                ## Milestones
                1. A definition of breaking and non-breaking changes with examples, including new enum values and stricter validation.
                2. A versioning scheme chosen, such as URL path, header or date-based versions.
                3. Minimum support and notice periods agreed for each audience.
                4. The policy published in the developer portal and linked from every changelog entry.

                ## Notes
                Adding a required field, tightening validation and changing the default sort order are breaking even though they look small. List them explicitly.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A published versioning policy with a breaking change definition, a named scheme and minimum notice periods."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every breaking change shipped in the last two years and what it cost consumers"
                - "Compare URL, header and date-based versioning against how your consumers deploy"
                - "Draft notice periods for public, partner and internal consumers"
                - "Publish the policy in the developer portal"
            - name: Rate limits and quota policy
              description: |-
                ## Purpose
                Limits decide whether one runaway script can slow the API for everyone, and whether a large customer can run their nightly sync at all. Setting per-key limits, burst allowances and clear 429 responses with retry guidance, and publishing them, protects the platform while giving developers numbers they can design around.

                ## Milestones
                1. Current traffic per key analysed, including the top 20 consumers and their peaks.
                2. Limits set per audience or plan, with a burst allowance and a documented reset window.
                3. Rate limit headers and a Retry-After value returned on every throttled response.
                4. A process for customers to request a temporary or permanent limit increase.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Published rate limits for each audience, rate limit headers on every response, and a written route for requesting higher limits."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull peak requests per minute for the top 20 API keys"
                - "Draft limits per audience that leave headroom for the top consumers"
                - "Ask engineering to return limit and remaining headers on every response"
                - "Write the process customers follow to request a higher limit"
            - name: Developer portal first release
              description: |-
                ## Purpose
                Developers judge an API in the first fifteen minutes, mostly on the portal: can they find a getting-started guide, get a key and make a call without talking to anyone. Shipping a small portal with those pieces done well beats a large one with every page half written.

                ## Milestones
                1. A getting-started guide that takes a new developer from nothing to a successful call.
                2. Self-service key creation available to the public audience without a sales conversation.
                3. A complete reference generated from the API specification.
                4. Links to the status page, changelog and support route on every page.
                5. Three developers outside the team complete the getting-started guide unaided.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A live developer portal where three outside developers each made a first successful call unaided, timed and recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List what a new developer needs in their first fifteen minutes"
                - "Write the getting-started guide around your most common integration use case"
                - "Agree with engineering how keys will be issued self-service"
                - "Watch three outside developers try the guide and note where they stall"
            - name: Weekly API health review
              description: |-
                ## Purpose
                Latency creeping up on one endpoint, or a client library sending malformed requests, rarely trips an alert, but developers notice. A thirty-minute weekly look at error rates, p95 and p99 latency, 4xx patterns and the biggest consumers keeps product and engineering looking at the API the way developers experience it.

                ## Milestones
                1. A dashboard showing 5xx and 4xx rates, latency percentiles and top consumers by endpoint.
                2. A weekly slot held with the engineering lead.
                3. One action recorded each week, even if it is no change.
                4. Twelve consecutive weekly reviews completed.

                ## Notes
                Rising 4xx rates are a product signal, not only a client problem. They often point to confusing docs or a misleading error message.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews held, each with error, latency and consumer figures and one recorded action."
                cadence: rolling
              tasks:
                - "Ask engineering for a dashboard of error rates and latency by endpoint"
                - "Agree a thirty-minute weekly slot with the engineering lead"
                - "Review errors, latency and top consumers and log one action @recurring(weekly:tue)"
            - name: API design review routine
              description: |-
                ## Purpose
                Once the guidelines exist, someone has to apply them before endpoints ship, or they drift into a document nobody reads. A short weekly review where proposed spec changes are checked against the rules, with decisions written down, keeps the API consistent and builds a record of why each choice was made.

                ## Milestones
                1. A standing weekly review with product, an API-minded engineer and a technical writer.
                2. A simple intake where teams submit spec changes a week ahead.
                3. Decisions and exceptions recorded for every change reviewed.
                4. No new public endpoint shipped in a quarter without a recorded review.

                ## Notes
                Start from the **Meeting notes** template. Keep the review about the contract developers see, not the implementation behind it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter in which every new public endpoint has a recorded design review decision."
                cadence: rolling
              tasks:
                - "Invite one engineer and one technical writer to a standing review"
                - "Set up an intake where teams submit spec changes a week ahead"
                - "Review submitted spec changes and record each decision @recurring(weekly:thu)"
                - "Add any repeated exception to the guidelines as a new rule"
            - name: Developer support triage and pain point themes
              description: |-
                ## Purpose
                Developer questions arrive through support tickets, community forums, public code repositories and account managers, and the same confusion often appears in all four. Triaging them weekly by cause, such as docs gap, bug, missing capability or limits, and summarising the themes monthly, turns support load into a ranked list of fixes.

                ## Milestones
                1. Every channel where developers ask for help listed with an owner.
                2. A fixed set of tags agreed: docs gap, bug, missing capability, limits, authentication, other.
                3. A weekly triage where new questions are tagged and routed.
                4. A monthly summary of the top five pain points shared with the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly pain point summaries published, each ranking the top five causes of developer questions with counts."
                cadence: rolling
              tasks:
                - "List every channel where developers ask questions and who watches each"
                - "Agree six tags for the cause of each question"
                - "Tag and route the week's new developer questions @recurring(weekly:mon)"
                - "Publish the month's top five developer pain points with counts @recurring(monthly:28)"
            - name: Deprecation calendar for endpoints and versions
              description: |-
                ## Purpose
                Deprecations announced and then forgotten leave old versions running for years, costing maintenance and security effort. A single calendar of every deprecated endpoint, field and version, with announcement, brownout and shutoff dates, and a monthly check of who is still calling them, keeps retirements on schedule.

                ## Milestones
                1. Every deprecated endpoint, field and version listed with its announcement date.
                2. Deprecation and Sunset response headers returned on deprecated endpoints.
                3. A shutoff date set for each item, in line with the versioning policy.
                4. Remaining callers of each deprecated item counted monthly and contacted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deprecation calendar where every deprecated item has a shutoff date and a monthly count of remaining callers."
                cadence: rolling
              tasks:
                - "List every endpoint, field and version already marked deprecated"
                - "Ask engineering to add Deprecation and Sunset headers to those endpoints"
                - "Count remaining callers of each deprecated item and contact the largest @recurring(monthly:12)"
            - name: Monthly developer experience metrics review
              description: |-
                ## Purpose
                Baselines only matter if someone watches them move. Reviewing the developer experience metrics each month, with the funnel from key created to first call to active app, shows whether docs and onboarding changes are working and where developers give up.

                ## Milestones
                1. The baseline metrics updated monthly in the same log.
                2. The funnel from key created to first call to active app charted for each month's new developers.
                3. One hypothesis for the biggest drop recorded each month.
                4. Six monthly reviews completed with actions recorded.

                ## Notes
                Start from the **Metrics log** template, using the same definitions as the baseline so months compare cleanly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews completed, each with updated metrics, a funnel chart and a recorded hypothesis."
                cadence: rolling
              tasks:
                - "Add a monthly row for each baseline metric to the log"
                - "Chart the funnel from key created to active app for last month's sign-ups"
                - "Update the metrics and write one hypothesis for the biggest drop @recurring(monthly:8)"
            - name: Documentation testing against the live API
              description: |-
                ## Purpose
                Docs go stale quietly: an example using a field since renamed, a code sample that no longer compiles, a getting-started guide that skips a new required step. Running the documented examples against the live API each month, ideally automatically, catches these before a developer does.

                ## Milestones
                1. Every code sample in the docs tagged with the endpoint it calls.
                2. Samples from the getting-started guide running automatically in the release pipeline.
                3. A monthly manual walkthrough of the most visited guides.
                4. Broken examples fixed within a week of being found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All getting-started samples run in the pipeline, and three monthly walkthroughs are logged with every broken example fixed."
                cadence: rolling
              tasks:
                - "Find the ten most visited documentation pages in the portal analytics"
                - "Ask engineering to run the getting-started samples in the release pipeline"
                - "Walk through the most visited guides against the live API and log breaks @recurring(monthly:20)"
            - name: Quarterly reviews with top API partners
              description: |-
                ## Purpose
                A handful of partners and large integrators often account for most API traffic and much of the revenue it influences, yet they usually hear about changes the same day as everyone else. A quarterly review with each, covering their usage, problems and your upcoming changes, catches breaking surprises early and turns them into a source of roadmap input.

                ## Milestones
                1. The top ten consumers by traffic or influenced revenue identified, with a named contact at each.
                2. A standard agenda covering usage, incidents, upcoming changes and their requests.
                3. A review held with each top partner within the quarter.
                4. Requests from the reviews added to the backlog with the partner named.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A review held with each of the top ten API partners in one quarter, with their requests logged against the backlog."
                cadence: cyclic
              tasks:
                - "Rank consumers by traffic and influenced revenue and pick the top ten"
                - "Find a named technical contact at each of the ten"
                - "Draft a one-page agenda covering usage, incidents and upcoming changes"
                - "Hold the review with each top partner and log their requests @recurring(quarterly)"
            - name: Consumer contract tests in the release pipeline
              description: |-
                ## Purpose
                Most accidental breaking changes are discovered by consumers, in production. Running contract tests that compare each build's spec and responses against the published version, and failing the build on a breaking difference, moves that discovery to before release.

                ## Milestones
                1. A tool chosen that compares spec versions and flags breaking differences.
                2. The comparison running on every pull request that changes the API.
                3. Contract tests for the five most used endpoints, based on real consumer requests.
                4. A monthly review of failures and any overrides granted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Breaking change detection runs on every API pull request, with a monthly log of failures and overrides."
                cadence: rolling
              tasks:
                - "Ask engineering how breaking changes are currently caught before release"
                - "Choose a spec comparison tool and trial it on the last three releases"
                - "Add contract tests for the five most used endpoints"
                - "Review contract test failures and any overrides granted @recurring(monthly:24)"
            - name: API status page and uptime reporting
              description: |-
                ## Purpose
                When the API is slow, developers first check whether the problem is theirs or yours. A status page with component-level health, honest incident updates and a monthly uptime figure against the published target saves support load during incidents and gives enterprise customers the evidence their vendor reviews ask for.

                ## Milestones
                1. A public status page with separate components for the API, webhooks, portal and sandbox.
                2. Incident update wording and timing agreed with on-call engineering.
                3. Developers able to subscribe to updates by email or feed.
                4. A monthly uptime figure published against the target.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status page with component health and subscriptions live, and three monthly uptime figures published."
                cadence: rolling
              tasks:
                - "List the components developers depend on separately"
                - "Agree incident update timing with the on-call engineering lead"
                - "Publish the month's uptime against the target and note any breaches @recurring(monthly:3)"
            - name: API security review against common risks
              description: |-
                ## Purpose
                APIs fail in particular ways: one customer reading another's records by changing an ID, endpoints returning more fields than the client shows, missing limits on expensive queries. Reviewing the API each quarter against a recognised list of API security risks, such as the OWASP API Security Top 10, and tracking findings in a register, finds these before an attacker or a customer's penetration test does.

                ## Milestones
                1. A security risk register for the API, with an owner and severity for each finding.
                2. Object-level authorisation checked on every endpoint that takes an ID.
                3. Responses checked for fields the consumer does not need.
                4. A quarterly review held with the security team and findings tracked to closure.

                ## Notes
                Start from the **Risk register** template. Broken object level authorisation tops most API risk lists for a reason, so test it on every endpoint.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly API security reviews completed, with every high severity finding closed or accepted in writing."
                cadence: cyclic
              tasks:
                - "Create an API security risk register from the template"
                - "List every endpoint that accepts an object ID in the path or body"
                - "Ask security to test cross-account access on those endpoints"
                - "Hold the API security review with the security team @recurring(quarterly)"
            - name: REST resource modelling and HTTP semantics
              description: |-
                ## Purpose
                Product managers who cannot tell a resource from an action, or PUT from PATCH, leave design decisions entirely to whoever writes the code. A few weeks of focused study, applied to your own API, gives you the vocabulary to review specs, push back on awkward designs and explain choices to developers.

                ## Milestones
                1. Resources, collections, methods, status codes and headers explained in your own words.
                2. Your API's ten most used endpoints redrawn as a resource model.
                3. Three design problems in the current API identified and written up.
                4. One design review led using the new vocabulary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written resource model of your ten most used endpoints and three documented design issues, reviewed by an engineer."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one well-regarded book or course on HTTP API design and schedule it"
                - "Write the meaning of each common status code in one line"
                - "Redraw your ten most used endpoints as resources and relationships"
                - "Ask an engineer to check your resource model for mistakes"
            - name: Hands-on first hundred calls to your own API
              description: |-
                ## Purpose
                Many API product managers have never used their product the way their customers do. Signing up as a new developer, getting a key and making a hundred real calls with a command-line client or API tool, across the main use cases, gives first-hand knowledge of the friction that metrics only hint at.

                ## Milestones
                1. A fresh account and key created through the public sign-up path.
                2. Calls made for each of the top five use cases using only the public docs.
                3. Every point of confusion written in a friction log with timestamps.
                4. The friction log shared with engineering and docs owners.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated friction log from a hundred real calls across the top five use cases, shared with engineering and docs owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sign up as a new developer using a separate test account"
                - "Install a command-line HTTP client or API tool"
                - "Complete each top use case using only the public docs"
                - "Write every confusing moment in a friction log with the time it took"
            - name: Webhooks and event delivery fundamentals
              description: |-
                ## Purpose
                Webhooks look simple until a customer asks why they received the same event twice, or out of order, or not at all during an outage. Learning delivery semantics, such as at-least-once delivery, retries with backoff, signature verification and replay, prepares you to design and support event features honestly.

                ## Milestones
                1. At-least-once, at-most-once and ordering guarantees explained in writing.
                2. Your current webhook retry schedule, timeout and signing method documented.
                3. Three common customer webhook questions answered from the docs.
                4. Gaps in your webhook guarantees listed for the roadmap.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of your webhook guarantees, retries and signing, with gaps listed and reviewed by an engineer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read two public webhook guides from large API providers"
                - "Ask engineering for the current retry schedule, timeout and signing method"
                - "Write what your webhooks guarantee and what they do not"
                - "List the gaps that generate support questions"
            - name: GraphQL, gRPC and REST trade-offs
              description: |-
                ## Purpose
                Teams periodically propose a new API style, often because one team likes it, and the choice outlives everyone in the room. Understanding what each style is good at, from caching and tooling to client flexibility and streaming, lets you judge proposals on consumer needs rather than fashion.

                ## Milestones
                1. Strengths and costs of REST, GraphQL and gRPC written in a comparison table.
                2. Consumer requirements for your API mapped against the table.
                3. Two public APIs that offer more than one style studied for how they manage it.
                4. A position recorded on when a new style would be worth adding.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of three API styles mapped to your consumers' needs, with a recorded position on adding a new style."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read one balanced comparison of REST, GraphQL and gRPC"
                - "List what your consumers need, such as caching, streaming, partial responses and tooling"
                - "Study how two public APIs run more than one style side by side"
                - "Write a one-page position on when a new style would be justified"
            - name: Idempotency, pagination and concurrency patterns
              description: |-
                ## Purpose
                Duplicate payments from a retried request, missing records when a list changes during paging and lost updates when two clients edit the same object are among the costliest API bugs for customers. Learning the standard patterns, such as idempotency keys, cursor pagination and conditional requests with ETags, lets you specify them before they become incidents.

                ## Milestones
                1. Idempotency keys, cursor versus offset pagination and optimistic concurrency explained in your notes.
                2. Every write endpoint in your API checked for safe retry behaviour.
                3. List endpoints checked for stable pagination under concurrent changes.
                4. Gaps added to the design guidelines or the backlog.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checked list of write and list endpoints showing retry and pagination behaviour, with gaps added to the backlog."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read how a large payments provider documents idempotency keys"
                - "List every write endpoint and whether a retry can create a duplicate"
                - "Check which list endpoints still use offset pagination"
                - "Add the gaps found to the design guidelines or the backlog"
            - name: OAuth 2.0 flows for product people
              description: |-
                ## Purpose
                Enterprise buyers, partners and security reviewers will ask about grant types, scopes, token lifetimes and consent screens, and a product manager who cannot answer slows every deal. Learning the main flows well enough to draw them, and walking through your own consent screen as a user, makes those conversations short.

                ## Milestones
                1. Client credentials, authorisation code with PKCE and refresh tokens drawn as sequence diagrams.
                2. Your own consent screen reviewed as a first-time user would see it.
                3. Token lifetimes and refresh behaviour for your API written down.
                4. Five common security reviewer questions answered in a reusable note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Sequence diagrams of three OAuth flows and a reusable note answering five security questions, checked by the security lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draw the client credentials and authorisation code flows by hand"
                - "Walk through your own consent screen with a test app"
                - "Ask security for current token lifetimes and refresh rules"
                - "Write answers to the five questions security reviewers ask most"
            - name: Reading API traffic data yourself
              description: |-
                ## Purpose
                Questions like which customers still call version one, how many apps use a field or what a typical request mix looks like should not wait for an analyst. Learning enough of your logging or analytics tool's query language to answer them yourself makes deprecation, packaging and design decisions faster and better evidenced.

                ## Milestones
                1. Access granted to the API traffic logs or analytics warehouse.
                2. Ten saved queries covering the questions you ask most.
                3. One decision this quarter backed by a query you wrote.
                4. The queries shared with the team in a common folder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten saved traffic queries shared with the team, with one decision this quarter backed by your own query."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Request read access to the API traffic logs or warehouse"
                - "Ask an engineer for three example queries to start from"
                - "Write a query counting distinct apps per endpoint per version"
                - "Save and share the ten queries you use most"
            - name: Cutting time to first successful call
              description: |-
                ## Purpose
                Every extra step between sign-up and a 200 response loses developers, especially those evaluating several providers in one afternoon. Removing steps one at a time, such as instant test keys, copy-paste examples with the key filled in and a sandbox that needs no setup, is usually the highest-return work on an API platform.

                ## Milestones
                1. Every step from sign-up to first successful call mapped with its median time.
                2. The three slowest or most abandoned steps chosen for change.
                3. Changes shipped for each of the three.
                4. Median time to first successful call measured again and compared with the baseline.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median time to first successful call reduced against the recorded baseline, measured over a full month of new sign-ups."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map every step from sign-up to first successful call with median times"
                - "Pick the three steps where most developers stall"
                - "Write a short spec for removing or shortening each step"
                - "Measure time to first call for a month after the changes ship"
            - name: Error responses developers can act on
              description: |-
                ## Purpose
                A 400 with the body 'invalid request' sends developers to support, while a response that names the field, the rule broken and a link to the docs lets them fix it alone. Moving to one consistent error format, such as the problem details standard, with stable error codes, reduces support load and makes client error handling simpler.

                ## Milestones
                1. One error format chosen and documented with stable machine-readable codes.
                2. The 20 most frequent error responses rewritten to name the field and the fix.
                3. Each error code linked to a docs page explaining causes and fixes.
                4. Support tickets about the rewritten errors compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The 20 most frequent errors return a consistent format with codes and docs links, with ticket volume compared before and after."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the 20 most frequent error responses from the last 30 days"
                - "Choose one error format and a scheme for stable error codes"
                - "Rewrite each message to name the field, the rule and the fix"
                - "Compare support tickets on those errors a month after release"
            - name: SDK and client library strategy
              description: |-
                ## Purpose
                Some developers expect an official library in their language, but every library is another product to maintain, version and secure. Deciding which languages to support, whether to generate libraries from the spec or write them by hand, and what support level each gets keeps the promise realistic.

                ## Milestones
                1. Traffic and sign-ups broken down by client language from user agent data.
                2. A decision on generated versus handwritten libraries recorded with reasons.
                3. A list of officially supported languages with a support level for each.
                4. A release process that ships library updates within a set time of API changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded SDK decision naming supported languages, generation approach and update timing, agreed with engineering."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Break down API traffic by client language from user agent strings"
                - "List community libraries already in use and their maintenance state"
                - "Compare generated and handwritten libraries for your top two languages"
                - "Record the supported languages and the support level for each"
            - name: API gateway and management platform choice
              description: |-
                ## Purpose
                The gateway decides how keys, limits, analytics and the portal work, and moving off one later is a long migration. Comparing a small shortlist against your actual needs, such as authentication methods, rate limiting, analytics export, portal flexibility and cost at your traffic, avoids choosing on features nobody will use.

                ## Milestones
                1. Requirements written from the authentication, limits and portal decisions already made.
                2. Three platforms or build options shortlisted and scored against the same criteria.
                3. Cost modelled at current traffic and at three times current traffic.
                4. A decision recorded with its reasons and the migration effort estimated.

                ## Notes
                Start from the **Purchase decision** template. Include keeping what you have as one of the options.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three gateway options with costs at two traffic levels and a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write requirements from the authentication, limits and portal decisions"
                - "Shortlist three options, including keeping the current setup"
                - "Score each option against the same criteria with engineering"
                - "Model cost at current and three times current traffic"
            - name: Sandbox environment developers can trust
              description: |-
                ## Purpose
                A sandbox that behaves differently from production teaches developers wrong habits and produces integrations that fail on go-live day. Designing a test environment with the same contract, realistic sample data, test values for edge cases and a way to trigger webhooks on demand lets developers finish integrations without touching real data.

                ## Milestones
                1. Differences between sandbox and production listed, and the unintended ones removed.
                2. Realistic sample data loaded for each main use case.
                3. Documented test values that trigger errors, limits and edge cases.
                4. A way to trigger each webhook event on demand.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A sandbox with documented test values and on-demand webhook triggers, with no unintended differences from production."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every known difference between sandbox and production"
                - "Ask three recent integrators what the sandbox failed to prepare them for"
                - "Write a spec for test values that trigger errors and limits"
                - "Plan a way to fire each webhook event on demand"
            - name: Use-case recipes and code samples library
              description: |-
                ## Purpose
                Reference docs explain each endpoint, but developers want to know how to do the thing they came for, such as syncing customers nightly or creating an order and listening for payment. A library of short recipes, each solving one use case end to end in the top languages, shortens integrations more than any amount of extra reference detail.

                ## Milestones
                1. Ten recipes chosen from the top integration use cases and support questions.
                2. Each recipe written end to end with working code in two languages.
                3. Recipes tested as part of the documentation pipeline.
                4. Recipe page views and time to first call compared for developers who used them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten tested use-case recipes published in two languages, with usage tracked in portal analytics."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Pick ten recipe topics from use cases and support themes"
                - "Ask the agent to draft the first recipe from the reference and a support thread"
                - "Have an engineer test and correct each recipe's code"
                - "Publish the recipes and track their page views"
            - name: Webhooks product specification
              description: |-
                ## Purpose
                Polling an API every minute to detect changes wastes the customer's effort and your capacity, so developers ask for events. Treating webhooks as a product, with an event catalogue, signing, retries, replay and a delivery log customers can see, prevents the support load that half-built webhooks create.

                ## Milestones
                1. An event catalogue listing each event, its trigger and its payload.
                2. Signing, retry schedule, timeout and ordering behaviour specified.
                3. A delivery log and manual replay available to customers in the portal.
                4. Three design partners using the webhooks before general release.

                ## Notes
                Start from the **Product spec** template. Delivery logs visible to customers cut webhook support tickets more than any other single feature.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved webhook spec covering catalogue, signing, retries, replay and delivery logs, trialled by three design partners."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the polling patterns in traffic logs that events could replace"
                - "Draft the event catalogue with triggers and payloads"
                - "Specify signing, retries, timeouts and replay"
                - "Recruit three design partners to trial the events"
            - name: Public, partner and internal exposure decisions
              description: |-
                ## Purpose
                Not every internal API should be public, and exposing one publicly commits you to supporting it for years under your versioning policy. Deciding per API whether it stays internal, opens to selected partners or becomes public, with criteria agreed in advance, stops one-off deal promises from turning into permanent obligations.

                ## Milestones
                1. Criteria agreed for exposure, such as stability, security review, demand and support cost.
                2. Every API in the inventory assigned an exposure level.
                3. A route for teams to request a change in exposure.
                4. Commitments in partner contracts checked against the exposure levels.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every API in the inventory carries an agreed exposure level, with written criteria and a request route."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft five criteria an API must meet before going public"
                - "Assign an exposure level to every API in the inventory"
                - "Check partner contracts for promises about unpublished APIs"
                - "Publish the request route for changing an API's exposure"
            - name: Public API launch readiness and go decision
              description: |-
                ## Purpose
                Launching a public API is a one-way door: once outside developers build on it, the contract is hard to change. Working through a readiness checklist covering docs, keys, limits, security review, support routes, the status page and pricing, ending in an explicit go or no-go meeting, makes sure nothing that matters is discovered by the first customers.

                ## Milestones
                1. A readiness checklist with an owner for each item.
                2. Security review and load test completed with results recorded.
                3. Docs, support route and status page live before the announcement.
                4. A go or no-go meeting held and its decision recorded.
                5. A two-week post-launch watch with daily error and sign-up figures.

                ## Notes
                Start from the **Operational checklist** template. Treat the spec at launch as frozen, because any change afterwards falls under the versioning policy.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A go or no-go decision recorded against a completed readiness checklist, followed by a two-week launch watch report."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Create the launch readiness checklist and assign an owner to each item"
                - "Book the security review and load test with dates"
                - "Schedule the go or no-go meeting with engineering, support and security"
                - "Write the two-week launch watch report"
            - name: Major version migration programme
              description: |-
                ## Purpose
                Moving consumers from one major version to the next is the hardest event in an API's life, and most migrations stall at the last 20 percent of traffic. Running it as a programme, with a migration guide, tooling, outreach by consumer size and a weekly traffic count, gets old versions switched off rather than supported forever.

                ## Milestones
                1. A field-by-field migration guide with before and after examples.
                2. Every consumer of the old version listed and ranked by traffic.
                3. Outreach completed to the largest consumers, with a named contact at each.
                4. Old version traffic below an agreed threshold before shutoff is scheduled.
                5. The old version switched off on the announced date.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Old version traffic reduced below the agreed threshold and the version switched off on the announced date."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write the migration guide with before and after examples"
                - "Rank every consumer of the old version by traffic"
                - "Contact the twenty largest consumers with their migration steps"
                - "Check the share of traffic still on the old version @recurring(weekly:wed)"
            - name: Planned brownouts before a version shutoff
              description: |-
                ## Purpose
                Notice emails go unread, and some consumers only notice a retired version when it stops working. Scheduled brownouts, short announced windows when the old version returns errors, flush out forgotten integrations while there is still time to fix them, and make shutoff day quiet.

                ## Milestones
                1. A brownout schedule announced, with windows growing from minutes to hours.
                2. Error responses during brownouts that explain the shutoff and link to the migration guide.
                3. Support briefed and staffed for each window.
                4. Callers seen during brownouts contacted directly before the final shutoff.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three announced brownouts completed and every consumer seen during them contacted before shutoff day."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft a brownout schedule that grows from minutes to hours"
                - "Write the error message returned during brownouts"
                - "Brief support on each brownout window"
                - "List callers seen during each brownout and contact them"
            - name: Developer conference or hackathon
              description: |-
                ## Purpose
                Whether it is a half-day online workshop or an in-person hackathon, a developer event puts the team in the room with the people building on the platform. Planning it around one clear goal, such as new integrations started or feedback on a beta, keeps it from becoming an expensive marketing day with nothing to show.

                ## Milestones
                1. One goal and two measures chosen for the event.
                2. Format, date, budget and venue or platform fixed.
                3. Sandbox keys, starter code and support staff ready before the day.
                4. A follow-up report with attendance, projects started and feedback themes.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An event held against a written goal, with a follow-up report on attendance, integrations started and feedback."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the event's one goal and two measures"
                - "Choose between an online workshop and an in-person hackathon"
                - "Prepare sandbox keys and starter code for attendees"
                - "Send the follow-up report to the team within two weeks"
            - name: Annual developer survey
              description: |-
                ## Purpose
                Metrics show what developers do; a survey shows what they think, what they compare you against and what nearly made them give up. Running the same core questions every year, plus a few on current themes, builds a trend that roadmap and docs work can be judged against.

                ## Milestones
                1. A core set of ten questions fixed so results compare year to year.
                2. The survey sent to active developers and partners with a response target.
                3. Results summarised with comparisons to the previous year.
                4. Three actions chosen from the results and added to the roadmap.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly developer survey with a fixed core question set, a written summary and three actions added to the roadmap."
                cadence: cyclic
              tasks:
                - "Draft ten core questions to keep the same every year"
                - "Send the developer survey to active developers and partners @recurring(yearly)"
                - "Summarise the results against last year's"
                - "Add three actions from the results to the roadmap"
            - name: Engineer moving into API product management
              description: |-
                ## Purpose
                Engineers often move into API product roles because they understand the technology, then find the hard parts are elsewhere: saying no, writing for developers unlike themselves, and measuring outcomes rather than shipping endpoints. A deliberate first 90 days with a development plan focuses on those gaps instead of the comfortable technical work.

                ## Milestones
                1. A development plan naming three product skills to build in 90 days.
                2. Ten conversations held with developers who use the API, none of them colleagues.
                3. One decision written up with options, trade-offs and evidence.
                4. Feedback gathered from your manager and one engineering lead at day 90.

                ## Notes
                Start from the **Development plan** template. The usual trap is reviewing pull requests instead of talking to customers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 90-day development plan completed, with ten external developer conversations and one written decision reviewed by your manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write three product skills you want to build in 90 days"
                - "Book ten conversations with developers who use the API"
                - "Write up one pending decision with options and evidence"
                - "Ask your manager and an engineering lead for feedback at day 90"
            - name: Taking over an API nobody owns
              description: |-
                ## Purpose
                Reorganisations leave APIs behind: still serving traffic, undocumented, with consumers nobody can name. Inheriting one calls for a first month of finding out who calls it, what it promises and what is about to break, before changing anything.

                ## Milestones
                1. Every consumer of the API identified from traffic logs, with a contact where possible.
                2. The current behaviour, limits and known issues documented.
                3. Open incidents, security findings and pending deprecations listed.
                4. A keep, improve, merge or retire recommendation written and agreed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written keep, improve, merge or retire recommendation for the inherited API, based on identified consumers and agreed with your manager."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pull the list of keys calling the API in the last 90 days"
                - "Find whoever last changed the code and ask what they know"
                - "Document current behaviour and known issues on one page"
                - "Write a keep, improve, merge or retire recommendation"
            - name: Internal API platform for other engineering teams
              description: |-
                ## Purpose
                Platform teams whose customers are other engineering teams face the same problems as public APIs, minus the revenue that makes anyone care. Treating internal consumers as customers, with docs, a support route, adoption targets and a quarterly satisfaction survey, is how a platform avoids being bypassed by teams building their own.

                ## Milestones
                1. Internal consuming teams listed with their main use of the platform.
                2. Docs and a support route that work without asking the platform team directly.
                3. An adoption target agreed with engineering leadership.
                4. A quarterly satisfaction survey run and its results shared with consumers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two quarterly satisfaction surveys of internal consuming teams completed, with adoption measured against an agreed target."
                cadence: rolling
              tasks:
                - "List every internal team consuming the platform and what for"
                - "Agree an adoption target with engineering leadership"
                - "Survey internal consuming teams on satisfaction and blockers @recurring(quarterly)"
                - "Share survey results and the next three fixes with consuming teams"
            - name: Enterprise customer API onboarding
              description: |-
                ## Purpose
                Large customers arrive with requirements that self-service developers never raise: security questionnaires, IP allowlists, mutual TLS, separate keys per environment, higher limits and a named contact. A repeatable onboarding package for enterprise integrations shortens deals and stops each one being handled from scratch by whichever engineer is free.

                ## Milestones
                1. The enterprise API requirements from the last five deals listed.
                2. Standard answers prepared for the API sections of common security questionnaires.
                3. An onboarding checklist covering keys, environments, limits, network controls and contacts.
                4. The next enterprise integration onboarded using the checklist, with time taken recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An enterprise API onboarding checklist and standard security answers used for one new enterprise customer, with time taken recorded."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Collect API requirements raised in the last five enterprise deals"
                - "Draft standard answers to the API sections of security questionnaires"
                - "Write the enterprise onboarding checklist with owners"
                - "Use the checklist with the next enterprise customer and time it"
            - name: Partner programme for companies building on the API
              description: |-
                ## Purpose
                Once other companies build products on your API, they need more than docs: a technical contact, early warning of changes, a way to be listed and a clear set of expectations. A small partner programme with tiers based on what partners build and what they get makes those relationships deliberate instead of a favour list kept by one account manager.

                ## Milestones
                1. Partner tiers defined with entry criteria and benefits for each.
                2. Technical requirements for listing, such as security review and support commitments, written.
                3. Existing informal partners invited into the right tier.
                4. A partner directory page listing approved partners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A partner programme with written tiers and requirements, with existing partners placed in tiers and a directory published."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List companies already building products on the API"
                - "Draft two or three partner tiers with criteria and benefits"
                - "Write the technical requirements for a partner listing"
                - "Invite existing partners into their tier"
            - name: First public API at a small company
              description: |-
                ## Purpose
                Startups opening a first public API usually have one or two engineers and no platform team, so the full apparatus of large providers would sink them. Picking the minimum that protects you, a versioning rule, a key system, basic limits, a getting-started guide and a status page, lets a small team ship an API without promising more than it can support.

                ## Milestones
                1. A one-page set of API rules covering versioning, errors and naming.
                2. Keys, limits and logs provided by a managed service rather than built.
                3. A getting-started guide and reference published.
                4. A support route and response time stated that the team can actually meet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first public API live with a one-page rule set, managed keys and limits, a getting-started guide and a stated support time."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a one-page rule set for versioning, errors and naming"
                - "Pick a managed service for keys, limits and logs"
                - "Publish a getting-started guide and generated reference"
                - "State a support response time the team can keep"
            - name: API ecosystem health metrics
              description: |-
                ## Purpose
                Beyond uptime and call counts lies the question leadership eventually asks: is the ecosystem worth investing in. Measuring apps in production, integrations built by partners, retention for accounts with an integration and how concentrated traffic is among a few consumers gives a defensible answer each quarter.

                ## Milestones
                1. Definitions agreed for app in production, partner integration and integrated account.
                2. Retention compared for accounts with and without an active integration.
                3. Traffic concentration among the top ten consumers measured.
                4. A quarterly ecosystem report shared with leadership.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two quarterly ecosystem reports delivered, with retention by integration status and traffic concentration figures."
                cadence: cyclic
              tasks:
                - "Define app in production and integrated account with the data team"
                - "Compare retention for accounts with and without an active integration"
                - "Measure the share of traffic from the top ten consumers"
                - "Send the quarterly ecosystem report to leadership @recurring(quarterly)"
            - name: API governance across many teams
              description: |-
                ## Purpose
                Design reviews by one group cannot keep up once ten or more teams publish APIs. Automated linting of specs against the guidelines in every pipeline, an API catalogue listing every API and owner, and human review only for exceptions keeps consistency without creating a bottleneck.

                ## Milestones
                1. Guideline rules encoded as automated spec lint checks.
                2. Linting running in every team's pipeline, warning first, then blocking on must rules.
                3. An internal API catalogue with every API, owner, version and lint score.
                4. Human review reserved for exceptions and new patterns.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Spec linting runs in every API team's pipeline, with a catalogue showing each API's owner and lint score."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Turn the must rules in the guidelines into lint checks"
                - "Run the linter across every spec in warning mode"
                - "Publish an internal API catalogue with owners and lint scores"
                - "Review lint scores and exceptions across teams @recurring(monthly:17)"
            - name: Regional endpoints and data residency
              description: |-
                ## Purpose
                Customers in some regions, and in regulated sectors, increasingly require their data to be processed and stored in a named region. Deciding whether to offer regional API endpoints, what stays global, and how keys, webhooks and docs work across regions is a long-lived architecture and product choice best made before a large deal forces it.

                ## Milestones
                1. Residency requirements from deals and customer questions collected by region.
                2. Options compared: single region, regional endpoints or separate regional deployments.
                3. Effects on keys, limits, webhooks, sandbox and docs listed for the preferred option.
                4. A decision recorded with legal and security input.

                ## Notes
                Residency rules differ by country and sector. Confirm requirements with your legal team rather than relying on customer summaries.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on regional API endpoints, with requirements by region and input from legal and security."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Collect residency requirements raised in deals, grouped by region"
                - "Compare three architecture options with engineering"
                - "List the effects on keys, webhooks, sandbox and docs"
                - "Record the decision after legal and security review"
            - name: API abuse, scraping and leaked key defence
              description: |-
                ## Purpose
                Public APIs attract misuse that is not quite an attack: scraping through many free accounts, keys pasted into public code repositories, resold access and expensive queries run in loops. Watching for these patterns and having agreed responses protects paying customers' performance and your costs.

                ## Milestones
                1. Abuse patterns seen so far listed with their cost or impact.
                2. Secret scanning for your key format enabled with public code hosting services where offered.
                3. Signals defined for suspicious accounts, such as many free keys from one source.
                4. Agreed responses for each pattern, from a warning to key revocation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Secret scanning is in place for your key format and three monthly abuse reviews are held, each with actions recorded."
                cadence: rolling
              tasks:
                - "List abuse incidents from the last year and their cost"
                - "Make your key format recognisable to secret scanning services"
                - "Write the agreed response for each abuse pattern"
                - "Review abuse signals and revoked keys @recurring(monthly:26)"
            - name: API readiness for AI agents and assistants
              description: |-
                ## Purpose
                AI agents and coding assistants now make a growing share of API calls, reading docs and specs directly and failing differently from human developers. Making the API legible to them, with a complete machine-readable spec, consistent descriptions, clear errors, scoped credentials and, where it fits, an agent tool interface such as an MCP server, opens a new consumer group without weakening security.

                ## Milestones
                1. The share of traffic and sign-ups from agent and assistant clients estimated.
                2. Spec descriptions and examples complete for every operation.
                3. A test where a coding assistant builds an integration from the docs alone, with failures recorded.
                4. A decision recorded on offering an agent tool interface and the scopes it would allow.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on agent support, based on a test of a coding assistant building from the docs and a check of spec completeness."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check user agent data for traffic from agent and assistant clients"
                - "Find operations in the spec with missing descriptions or examples"
                - "Ask a coding assistant to build a sample integration from the docs alone"
                - "Record the decision on offering an agent tool interface"
---

# API & Platform Products

This area is for product managers, platform engineers and enterprise teams who run APIs and developer platforms as products, with developers treated as the customers they are. It starts with the foundations (an inventory of every API, developer personas, a metrics baseline, design guidelines, a contract-first workflow and the authentication, versioning, limits and portal decisions), then the operating routines that keep the platform healthy, the technical knowledge a product owner needs, the improvements to onboarding, errors, SDKs and sandboxes, the launches and migrations that need planning, the situations engineers, small companies and enterprise customers bring, and finally the governance, ecosystem and AI agent work of an experienced platform lead.

What repeats is a weekly health review, design review and support triage, monthly checks on developer experience metrics, docs, contract tests, uptime, deprecations, abuse and governance, quarterly partner, security, internal platform and ecosystem reviews, and a yearly developer survey. The Metrics log, Product spec, Meeting notes, Risk register, Purchase decision, Operational checklist and Development plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
