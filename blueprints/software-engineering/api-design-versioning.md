---
id: software-engineering.api-design-versioning
name: API Design & Versioning
description: "An API inventory, a style guide, one error format and a written versioning policy, plus the checks, deprecation routines and design skills that let your APIs change without breaking clients."
category: business
version: 1.0.0
tags: [software-engineering, api-design-versioning, engineer, team, rest, openapi, versioning, deprecation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - purchase-decision
    - remediation-plan
    - risk-register
    - meeting-notes
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: API Design & Versioning
          description: "Designing clean, consistent APIs with good error handling and documentation, and evolving them without breaking the clients that depend on them."
          projects:
            - name: Inventory of every API endpoint and its consumers
              description: |-
                ## Purpose
                Nobody can evolve an API safely without knowing who calls it, and most teams discover forgotten clients only when a change breaks them. A single list of every endpoint, its owner, its authentication method and the clients seen calling it in the last 30 days turns guesswork into a map. It is also the list every later project in this area works from.

                ## Milestones
                1. Every public, partner and internal endpoint listed with method, path, owning team and current version.
                2. Callers for each endpoint identified from gateway or access logs over the last 30 days.
                3. Endpoints with no traffic in 30 days flagged as retirement candidates.
                4. The inventory stored in the repository or wiki with a named owner and a last-updated date.

                ## Notes
                Group callers by API key or client identifier, not by IP address. One partner can call from dozens of addresses.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated inventory lists every endpoint with its owner, version and the named clients seen calling it in the last 30 days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the route table from each service or the gateway configuration"
                - "Pull 30 days of access logs and group calls by client identifier"
                - "Mark endpoints with zero traffic as retirement candidates"
                - "Publish the inventory with an owner and a last-updated date"
            - name: API style guide for resources and naming
              description: |-
                ## Purpose
                Inconsistent APIs cost every client developer time: one endpoint uses camelCase, the next snake_case, one returns a bare array and another wraps it. A short style guide that fixes resource naming, plural nouns, casing, date formats, identifier types and envelope shape means new endpoints look as if one person designed them. Adopting a published guide as a base and recording only your differences is far faster than writing from scratch.

                ## Milestones
                1. Two or three published API style guides compared and one chosen as the base.
                2. House rules written for casing, plural resource names, timestamps in ISO 8601 with time zone, and identifier format.
                3. A worked example of one well-formed resource with list, read, create, update and delete calls.
                4. The guide agreed by the engineers who build APIs and linked from the repository readme.

                ## Notes
                Write rules as examples of good and bad requests. Engineers copy examples far more reliably than they follow prose.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team-agreed API style guide with worked request and response examples is committed and linked from every API repository."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read two published API style guides and pick one as the base"
                - "List the five inconsistencies most visible in your current endpoints"
                - "Ask the agent to draft house rules with good and bad examples for each"
                - "Agree the guide with the API builders and commit it"
            - name: One error response format for all endpoints
              description: |-
                ## Purpose
                Client code that handles errors well needs to know where to find a machine-readable code, a human message and the field that failed, every time. Standardising on one shape, such as the problem details format from the IETF, with a stable catalogue of error codes, lets clients write one error handler instead of one per endpoint. It also stops stack traces and database messages leaking to the outside world.

                ## Milestones
                1. One error body format chosen, with fields for type, title, status, detail and per-field validation errors.
                2. A catalogue of stable error codes, each with its HTTP status and a one-line meaning.
                3. Shared middleware or a library that produces the format in every service.
                4. A check that no response body contains stack traces or internal exception names.

                ## Notes
                Error codes are part of the contract. Renaming one is a breaking change, even if the HTTP status stays the same.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every service returns the agreed error format from shared code, and a published catalogue lists each error code with its status."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect ten real error responses from different endpoints and compare their shapes"
                - "Write the chosen error format and the first twenty error codes"
                - "Build shared middleware that emits the format and add it to one service"
                - "Add a test that fails if a stack trace appears in any response body"
            - name: Written versioning and compatibility policy
              description: |-
                ## Purpose
                Clients need to know what you promise: how long a version lives, which changes you will make without warning and how much notice a breaking change gets. A one-page policy that answers those three questions turns arguments in every pull request into a lookup. Publishing it also sets expectations with partners before the first deprecation, not during it.

                ## Milestones
                1. A list of change types classed as compatible, such as adding an optional field, and breaking, such as removing one.
                2. A minimum support period for each major version and a minimum notice period for deprecations.
                3. The channels used to announce deprecations written down.
                4. The policy published where external and internal consumers can read it.

                ## Notes
                Promise only what you can keep. A twelve-month notice period you honour beats a three-year promise you break once.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published versioning policy states the compatible and breaking change lists, the support period and the deprecation notice period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every change made to the API in the last year and mark which broke a client"
                - "Draft the compatible and breaking change lists from that history"
                - "Agree support and notice periods with product and partner managers"
                - "Publish the policy on the developer portal or internal wiki"
            - name: OpenAPI description as the contract
              description: |-
                ## Purpose
                Almost everything else in this area depends on a machine-readable description of the API, which gives you reference docs, client generation, mock servers, linting and automatic breaking change detection. Whether you write the OpenAPI file first or generate it from code, it has to match what the service actually does. Getting one service there end to end shows the team the pattern before rolling it out.

                ## Milestones
                1. A decision recorded on design-first or code-first for producing the OpenAPI file.
                2. A complete, valid OpenAPI document for one service committed beside its code.
                3. A test or CI step proving the running service matches the document.
                4. Reference documentation generated from the document and published.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One service has a valid OpenAPI document in its repository, checked against the running service in CI and published as reference docs."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Decide design-first or code-first for the pilot service and note why"
                - "Produce a complete OpenAPI document for the pilot service"
                - "Add a CI step that validates responses against the document"
                - "Generate and publish reference docs from the document"
            - name: Breaking change definition checklist
              description: |-
                ## Purpose
                Some breaking changes are obvious, like deleting an endpoint, but many are not: tightening validation, adding a required field to a request, changing a default sort order or adding a new value to an enum that strict clients reject. A checklist of these quieter breaks, kept next to the pull request template, catches them while they are still cheap to rethink.

                ## Milestones
                1. A checklist of at least fifteen change types that break clients, each with a short example.
                2. Enum additions, validation tightening, default changes and ordering changes explicitly covered.
                3. The checklist linked from the pull request template for API repositories.
                4. Two recent pull requests reviewed against the checklist as a trial.

                ## Notes
                Behaviour is contract too. If clients rely on a field being present, making it optional in responses breaks them even though the schema still validates.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist of at least fifteen breaking change types with examples is linked from the pull request template of every API repository."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the obvious breaking changes first: removals, renames and type changes"
                - "Add the quiet ones: enum values, validation, defaults, ordering and nullability"
                - "Link the checklist from the pull request template"
                - "Trial it on two recent API pull requests and adjust the wording"
            - name: Pagination, filtering and sorting conventions
              description: |-
                ## Purpose
                List endpoints are where APIs drift most, with offset paging in one place, cursors in another and five ways to spell a filter. Choosing one convention, cursor-based paging for large or changing collections, a fixed filter syntax and a default maximum page size, prevents slow queries and gives clients one loop to write. Changing these later is a breaking change, so decide before the next list endpoint ships.

                ## Milestones
                1. A paging method chosen with the response fields for the next cursor and any total count.
                2. A default and maximum page size set and documented.
                3. A filter and sort parameter syntax written with three examples.
                4. One existing list endpoint brought into line as the reference implementation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The style guide records one paging, filtering and sorting convention, and one list endpoint implements it as the reference."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List how each current list endpoint pages, filters and sorts"
                - "Choose the paging method and the default and maximum page size"
                - "Write the filter and sort syntax with three examples"
                - "Convert one list endpoint as the reference implementation"
            - name: Authentication and scopes in the API contract
              description: |-
                ## Purpose
                Clients need to know how to authenticate and which permission each endpoint needs before they write a line of code. Writing the scheme, the token or key format and a named scope per operation into the OpenAPI document makes permissions reviewable and documentation honest. Scope names are hard to change once issued, so design them as carefully as resource names.

                ## Milestones
                1. The authentication schemes the API accepts declared in the OpenAPI document.
                2. A scope or permission name assigned to every operation, following a resource and action pattern.
                3. The response for missing and insufficient permissions documented with its error code.
                4. A test that fails if a new operation is added without a declared scope.

                ## Notes
                Keep the security implementation itself with your security team. This project is about making the requirement visible in the contract.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every operation in the OpenAPI document declares its authentication scheme and scope, enforced by a CI test."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Declare the accepted authentication schemes in the OpenAPI document"
                - "Draft scope names using a resource and action pattern"
                - "Assign a scope to every operation and review the list with the security lead"
                - "Add a CI test that rejects operations with no declared scope"
            - name: Consumer contact list and API announcements channel
              description: |-
                ## Purpose
                Deprecation notices only work if it reaches the person who maintains the client code, and that is rarely the account holder who signed up two years ago. Collecting a technical contact per consumer and setting up one announcements channel, such as a mailing list, status page or changelog feed, gives every later change a route to the people it affects.

                ## Milestones
                1. A technical contact recorded for every consumer in the inventory.
                2. One announcements channel chosen and every contact subscribed.
                3. A sample announcement sent to confirm delivery.
                4. A step added to client onboarding that collects the technical contact.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every consumer in the inventory has a technical contact subscribed to one announcements channel that has delivered a test notice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add a technical contact column to the consumer inventory"
                - "Ask account managers or team leads for missing contacts"
                - "Set up the announcements channel and subscribe every contact"
                - "Add contact collection to the client onboarding steps"
            - name: Breaking change detection in CI
              description: |-
                ## Purpose
                People miss breaking changes in review; a diff of the old and new OpenAPI documents does not. Running an OpenAPI diff tool on every pull request and failing the build on a breaking change, unless a named override is given, makes compatibility the default rather than a matter of reviewer attention. The weekly look at overrides keeps the escape hatch honest.

                ## Milestones
                1. An OpenAPI diff tool running on every pull request that touches an API document.
                2. Builds failing on breaking changes, with a documented override label that needs a second approver.
                3. Every override in the first month traced to a planned new version or a deliberate exception.
                4. False positives recorded and the tool configuration tuned.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every API pull request runs a contract diff, and every merged breaking change in the last quarter has an approved override with a reason."
                cadence: rolling
              tasks:
                - "Choose an OpenAPI diff tool and run it against the last ten merged changes"
                - "Add the diff as a required check on API pull requests"
                - "Review the week's breaking change overrides and their reasons @recurring(weekly:thu)"
                - "Document the override label and who may approve it"
            - name: Weekly API design review slot
              description: |-
                ## Purpose
                Most API mistakes are cheap to fix on a whiteboard and expensive once a client depends on them. A standing 45-minute slot where new endpoints and contract changes are reviewed against the style guide, before implementation, catches naming, shape and compatibility problems while they cost minutes. Keeping it weekly and short stops it becoming a bottleneck.

                ## Milestones
                1. A weekly slot booked with a rotating set of two or three reviewers.
                2. A short submission format: the proposed OpenAPI change, the use case and the expected clients.
                3. Decisions and requested changes recorded for every item reviewed.
                4. Median wait from submission to review under five working days.

                ## Notes
                Start from the **Meeting notes** template. Cancel the slot when nothing is submitted; an empty review is not a failure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "API changes are reviewed in a weekly slot with recorded decisions, and the median wait from submission to review stays under five working days."
                cadence: rolling
              tasks:
                - "Book a 45-minute weekly slot and name the first three reviewers"
                - "Write the one-page submission format and share it"
                - "Run the API design review and record the decisions @recurring(weekly:tue)"
                - "Track the wait from submission to review for each item"
            - name: Monthly traffic report by API version and client
              description: |-
                ## Purpose
                Retiring a version is a negotiation with the clients still using it, and that starts with knowing who they are and how much they call. A monthly count of requests by version, endpoint and client shows whether migrations are actually happening and which consumers need a personal nudge. It also shows which endpoints nobody uses, which are the easiest to remove.

                ## Milestones
                1. Every request tagged with API version and client identifier in logs or metrics.
                2. A saved query or dashboard showing requests by version and client for the last month.
                3. The first monthly figures recorded as the baseline.
                4. Clients still on old versions listed with their share of traffic.

                ## Notes
                Start from the **Metrics log** template. Record request counts and distinct clients; a version with one huge client needs a different plan from one with fifty small ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record shows requests and distinct clients per API version, with clients on deprecated versions listed by name."
                cadence: rolling
              tasks:
                - "Check that every request log carries the API version and client identifier"
                - "Build a saved query of requests by version, endpoint and client"
                - "Record the month's traffic by version and list clients on old versions @recurring(monthly:9)"
                - "Send the old-version client list to the deprecation owner"
            - name: Deprecation register and sunset calendar
              description: |-
                ## Purpose
                Deprecations fail quietly when nobody owns the date: the notice goes out, the sunset slips and the old code lives for years. A register of every deprecated endpoint, field and version, with its announcement date, sunset date, owner and remaining traffic, makes each one a tracked commitment. Returning the Deprecation and Sunset HTTP headers lets client tooling see the dates too.

                ## Milestones
                1. Every current deprecation recorded with announcement date, sunset date, owner and replacement.
                2. Deprecated endpoints returning Deprecation and Sunset response headers.
                3. Each sunset date on a shared calendar with reminders at 90, 30 and 7 days.
                4. Monthly status recorded for every open deprecation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deprecated endpoint is in a register with owner and sunset date, returns sunset headers, and has a status entry from the last month."
                cadence: rolling
              tasks:
                - "List every deprecated endpoint, field and version with its replacement"
                - "Add Deprecation and Sunset headers to the deprecated endpoints"
                - "Put each sunset date on the team calendar with 90, 30 and 7 day reminders"
                - "Update the status and remaining traffic of each open deprecation @recurring(monthly:16)"
            - name: Public API changelog kept current
              description: |-
                ## Purpose
                Client developers read the changelog to decide whether an upgrade is safe, so a changelog that lags behind the API is worse than none. Writing one dated entry per released change, tagged as added, changed, deprecated or removed, and linking migration notes for anything breaking, lets consumers plan instead of react. A short fortnightly sweep catches anything that shipped without an entry.

                ## Milestones
                1. A changelog page with dated entries and the four change tags.
                2. Every change in the last three months back-filled.
                3. A pull request template line asking for the changelog entry.
                4. No released change older than two weeks missing an entry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every API change released in the last quarter has a dated, tagged changelog entry published within two weeks of release."
                cadence: rolling
              tasks:
                - "Create the changelog page with added, changed, deprecated and removed tags"
                - "Back-fill entries for the last three months from merged pull requests"
                - "Add a changelog line to the API pull request template"
                - "Compare merged API changes against the changelog and fill any gaps @recurring(monthly:3)"
            - name: API lint ruleset kept in line with the style guide
              description: |-
                ## Purpose
                Style guides enforced only by reviewers drift within months. Encoding its rules in an OpenAPI linter, such as a Spectral ruleset shared across repositories, checks casing, naming, error format and required descriptions on every change. Reviewing the ruleset each quarter keeps it matched to decisions the design review has made since.

                ## Milestones
                1. A shared lint ruleset covering the ten most important style guide rules.
                2. The linter running on every pull request in every API repository.
                3. Existing violations either fixed or listed as known exceptions.
                4. The ruleset version and change history kept in its own repository.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared OpenAPI lint ruleset runs on every API pull request, and its rules were reviewed against the style guide in the last quarter."
                cadence: cyclic
              tasks:
                - "Translate the ten most important style guide rules into lint rules"
                - "Add the linter as a check in every API repository"
                - "List existing violations as fixes or known exceptions"
                - "Review the ruleset against recent design review decisions @recurring(quarterly)"
            - name: Client error patterns review
              description: |-
                ## Purpose
                Steady streams of 400 and 422 responses on one endpoint usually mean the design confuses people, not that clients are careless. Looking monthly at the most common client errors by endpoint and error code shows where a field name misleads, a validation rule surprises or the docs are wrong. Fixing the top one each month makes the API easier to use without any new features.

                ## Milestones
                1. A saved query of 4xx responses grouped by endpoint, error code and client.
                2. The top five client error patterns recorded with a likely cause for each.
                3. One fix chosen each month: clearer docs, a better error message or a design change.
                4. The effect of last month's fix checked in the following month's numbers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the top five client error patterns are recorded with causes, and at least one has a fix shipped and its effect measured."
                cadence: rolling
              tasks:
                - "Build a query of 4xx responses by endpoint, error code and client"
                - "Record the top five client error patterns and their likely causes @recurring(monthly:21)"
                - "Pick one pattern and ship a docs, message or design fix"
                - "Check whether last month's fix reduced that error"
            - name: Integrator feedback themes from support and forums
              description: |-
                ## Purpose
                The developers who integrate with your API tell you what is confusing every day, in support tickets, forum posts and chat threads, but the signal is scattered. Tagging API-related tickets and summarising the themes monthly turns those complaints into a ranked list of design and documentation problems. It is the cheapest user research an API team can do.

                ## Milestones
                1. An API tag agreed with the support team and applied to new tickets.
                2. A monthly summary of the top themes with counts and example quotes.
                3. Each theme linked to an owner and a proposed fix.
                4. Themes that recur three months running escalated to the design review.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly summary of API feedback themes with counts and owners exists for each of the last three months."
                cadence: rolling
              tasks:
                - "Agree an API tag with the support team for new tickets"
                - "Summarise the month's tagged tickets and forum posts into themes @recurring(monthly:12)"
                - "Assign an owner and a proposed fix to each top theme"
                - "Raise any theme seen three months running at the design review"
            - name: Consumer-driven contract tests with key clients
              description: |-
                ## Purpose
                Your own tests prove the API does what you think it does; contract tests prove it still does what each client actually relies on. With a tool that records consumer expectations, such as a Pact-style broker, every provider build checks those expectations before release. Starting with the two clients whose breakage would hurt most gives most of the value for little effort.

                ## Milestones
                1. Two high-value consumers publishing their expectations to a shared broker.
                2. The provider pipeline verifying those contracts before every deploy.
                3. A rule for what happens when a contract fails: block, or talk to the consumer first.
                4. Contract results checked weekly for failures and stale contracts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two consumers have contracts verified on every provider deploy, with no unexplained failures in the last month."
                cadence: rolling
              tasks:
                - "Choose the two consumers whose breakage would cost most"
                - "Set up a contract broker and have both consumers publish expectations"
                - "Add contract verification to the provider deploy pipeline"
                - "Check contract results for failures and stale contracts @recurring(weekly:wed)"
            - name: Documentation drift check against the live API
              description: |-
                ## Purpose
                Reference docs drift from reality in small ways: an example that no longer runs, a field documented as optional that is now required, a new error code nobody wrote up. Running every documented example against a test environment each month, and comparing the published docs to the current OpenAPI document, finds the drift before an integrator does.

                ## Milestones
                1. Every code example in the docs extracted into a runnable test.
                2. The examples run against a test environment, with failures listed.
                3. Published docs confirmed to match the latest OpenAPI document version.
                4. A monthly record of failing examples and fixes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All documented API examples run against a test environment monthly, and no failing example stays unfixed for more than one cycle."
                cadence: rolling
              tasks:
                - "Extract every code example in the docs into a runnable script"
                - "Run the examples against the test environment and list failures @recurring(monthly:26)"
                - "Confirm the published docs match the latest OpenAPI document"
                - "Fix or remove each failing example"
            - name: Quarterly style guide and versioning policy review
              description: |-
                ## Purpose
                Standards that are never revisited either fossilise or get quietly ignored. A quarterly look at design review decisions, lint exceptions, consumer feedback and recent incidents caused by API changes shows which rules need adding, loosening or removing. Keeping the documents current is what keeps people following them.

                ## Milestones
                1. Last quarter's design decisions, lint exceptions and feedback themes gathered.
                2. Proposed changes to the style guide and versioning policy drafted.
                3. Changes agreed with the API builders.
                4. Both documents updated with a dated change note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The style guide and versioning policy each carry a dated change note from a review held within the last quarter."
                cadence: cyclic
              tasks:
                - "Gather the quarter's design decisions, lint exceptions and feedback themes"
                - "Review the style guide and versioning policy against them @recurring(quarterly)"
                - "Agree the changes with the API builders"
                - "Publish both documents with a dated change note"
            - name: Practising REST resource modelling
              description: |-
                ## Purpose
                Good REST design starts with the nouns: what the resources are, how they nest and which actions deserve their own resource rather than a verb in the URL. Modelling three real domains on paper, a shop, a booking system and your own product, and comparing your designs with a peer's, builds the instinct faster than reading about it. Expect to redo the first one.

                ## Milestones
                1. Three domains modelled as resource lists with relationships and URLs.
                2. Each design checked for verbs in paths, deep nesting and chatty access patterns.
                3. One design reviewed with a peer and the disagreements noted.
                4. A one-page summary of the rules of thumb you now follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three domains are modelled as resources with URLs, one peer-reviewed, and a one-page set of rules of thumb is written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Model a small shop as resources, relationships and URLs"
                - "Model a booking system with cancellations and refunds as resources"
                - "Model your own product's core domain and review it with a peer"
                - "Write the rules of thumb you will apply to the next design"
            - name: HTTP methods, status codes and caching semantics
              description: |-
                ## Purpose
                Many API bugs come from misusing HTTP itself: POST where PUT is idempotent, 200 with an error body, 404 where 403 should apply, or responses no cache can reuse. Working through the current HTTP semantics specification on methods, status codes and conditional requests, and checking your own API against it, gives you a shared vocabulary with every client library and proxy in the path.

                ## Milestones
                1. Notes on safe and idempotent methods and which status codes your API uses for what.
                2. Cache-Control, ETag and Vary behaviour understood and tried against a test endpoint.
                3. Five endpoints in your API audited for method and status code misuse.
                4. Findings shared with the team with a proposed fix for each.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five endpoints are audited against HTTP method, status and caching semantics, with findings and fixes shared with the team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the sections of the HTTP semantics specification on methods and status codes"
                - "Experiment with Cache-Control and ETag on a test endpoint"
                - "Audit five of your endpoints for method and status misuse"
                - "Share the findings with a proposed fix for each"
            - name: Idempotency keys and safe retries
              description: |-
                ## Purpose
                Networks fail mid-request, so clients retry, and without care a retried payment or order creation happens twice. Learning how idempotency keys work, storing the key with the first response and replaying it for duplicates, and adding them to one creating endpoint protects clients that do the right thing by retrying. This matters most for anything involving money, messages or stock.

                ## Milestones
                1. The idempotency key pattern understood, including key scope, expiry and handling of concurrent duplicates.
                2. One POST endpoint accepting an idempotency key header and replaying stored responses.
                3. Tests proving a retried request creates one record and returns the same response.
                4. Retry guidance for clients written into the API docs.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One creating endpoint supports idempotency keys, proven by tests that a retried request produces exactly one record."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read how two well-known payment APIs document idempotency keys"
                - "Pick the creating endpoint where a duplicate would cost most"
                - "Implement key storage and response replay for that endpoint"
                - "Write tests for retries and concurrent duplicate requests"
            - name: GraphQL schema design and evolution
              description: |-
                ## Purpose
                GraphQL avoids URL versioning but not breaking changes: removing a field or making it non-null still breaks clients, and schemas grow messy without conventions. Learning nullability defaults, connection-style paging, input types and the deprecated directive, then measuring field usage before removal, is what keeps a GraphQL schema evolvable. Worth it if your team runs or is considering a GraphQL API.

                ## Milestones
                1. Notes on nullability, paging connections, mutations with input and payload types, and error handling.
                2. A small practice schema built with deprecated fields and their replacements.
                3. Field-level usage tracking understood and tried on the practice schema.
                4. A short list of GraphQL rules for the team style guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice schema with deprecations and usage tracking is built, and a list of GraphQL rules is proposed for the style guide."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Work through a GraphQL schema design guide on nullability and paging"
                - "Build a practice schema with one deprecated field and its replacement"
                - "Turn on field usage tracking and query it"
                - "Draft GraphQL rules for the team style guide"
            - name: Protocol Buffers field evolution rules
              description: |-
                ## Purpose
                For gRPC and other Protocol Buffers APIs, compatibility lives in field numbers: reuse a number or change a type and old clients silently misread data. Learning the evolution rules, reserving removed numbers and names, and adding a breaking change checker for proto files makes these APIs as safe to change as a well-run REST API.

                ## Milestones
                1. The rules on field numbers, reserved fields, type changes and enum defaults written down.
                2. A proto breaking change checker running in CI on one repository.
                3. Removed fields in existing protos marked as reserved.
                4. Package versioning for proto APIs agreed, such as a v1 suffix in the package name.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Proto evolution rules are written, removed fields are reserved, and a breaking change checker runs in CI on at least one proto repository."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the official Protocol Buffers guidance on updating message types"
                - "Add a proto breaking change checker to one repository"
                - "Mark every removed field number and name as reserved"
                - "Agree how proto packages carry their major version"
            - name: Writing reference docs and examples people copy
              description: |-
                ## Purpose
                Integrators copy the first example they find and adapt it, so the quality of your examples decides the quality of their code. Learning to write reference docs with a realistic request, a full response, every error the call can return and a working snippet in two languages turns the docs from a list of fields into something developers can ship from. Practise on your three most-used endpoints.

                ## Milestones
                1. A doc page pattern agreed: summary, auth, parameters, example request, example response, errors.
                2. The three most-used endpoints rewritten to the pattern.
                3. Working snippets in two languages tested against a test environment.
                4. A new integrator asked to complete a task from the docs alone, with their sticking points noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The three most-used endpoints have reference pages with tested examples in two languages, validated by one new integrator."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the reference page pattern with the team"
                - "Rewrite the most-used endpoint's page to the pattern"
                - "Ask the agent to draft snippets in two languages, then test each one"
                - "Watch a new integrator use the docs and note where they get stuck"
            - name: Webhook and event payload design
              description: |-
                ## Purpose
                Webhooks are an API in reverse, and they break clients just as easily: a renamed field in an event payload or a change in delivery order can stop a partner's integration overnight. Learning to design versioned event types, signed deliveries, retry with backoff and payloads clients can process out of order makes outbound events as dependable as inbound calls.

                ## Milestones
                1. Event naming and payload versioning rules written, with one example event.
                2. Signature verification and timestamp checking documented for receivers.
                3. Retry schedule and the behaviour after final failure documented.
                4. Guidance for receivers on duplicate and out-of-order events published.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written rules cover event naming, payload versions, signatures, retries and duplicate handling, with one example event published."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Study how two public APIs version and sign their webhook events"
                - "Write event naming and payload versioning rules with one example"
                - "Document signature checks and the retry schedule for receivers"
                - "Publish guidance on duplicate and out-of-order delivery"
            - name: REST, GraphQL or gRPC for a new API
              description: |-
                ## Purpose
                Protocol choice shapes clients, tooling, caching and versioning for years, and teams often choose by fashion. Comparing the options against your actual clients, browsers, mobile apps, partners or internal services, and your team's experience, gives a decision you can explain. A mixed answer, such as gRPC between services and REST at the edge, is often the right one.

                ## Milestones
                1. The clients of the new API listed with their platforms and constraints.
                2. REST, GraphQL and gRPC scored against client needs, caching, tooling, team skills and versioning effort.
                3. A small spike built for the top two options.
                4. The decision and its reasons written as a decision record.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record names the chosen protocol for the new API, with scores against at least five criteria and spike results."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the clients of the new API and their platform constraints"
                - "Score REST, GraphQL and gRPC against five criteria"
                - "Build a one-day spike for the top two options"
                - "Write the decision record with the reasons and trade-offs"
            - name: Choosing a versioning scheme
              description: |-
                ## Purpose
                Path versions like v1 and v2, a version header, media type versioning and dated versions pinned per client each trade simplicity against flexibility. Choosing one deliberately, based on how often you break things, how many clients you have and how your gateway routes, avoids the common mess of several schemes in one API. Record it in the versioning policy so nobody reopens it per endpoint.

                ## Milestones
                1. The four common schemes described with an example request for each.
                2. Each scheme assessed against caching, routing, client effort and your rate of breaking changes.
                3. One scheme chosen, with the rule for what triggers a new version.
                4. The choice added to the versioning policy and style guide.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One versioning scheme is chosen and recorded in the versioning policy, with the rule for when a new version is created."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write an example request for path, header, media type and dated versioning"
                - "Count how many breaking changes you shipped last year"
                - "Assess each scheme against routing, caching and client effort"
                - "Record the chosen scheme and its trigger rule in the policy"
            - name: Choosing an API gateway or management platform
              description: |-
                ## Purpose
                Once you have several APIs and external clients, a gateway or management platform can handle keys, rate limits, version routing, analytics and a developer portal in one place. The options range from open source proxies to managed cloud services and full commercial platforms, with very different costs and lock-in. A structured comparison against your real needs stops you buying a portal you never use.

                ## Milestones
                1. Requirements listed and ranked: auth, rate limits, version routing, analytics, portal, cost.
                2. Three options shortlisted across open source, cloud and commercial.
                3. A trial of the top option routing one real API in a test environment.
                4. A decision recorded with year-one and year-three cost estimates.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gateway decision is recorded with ranked requirements, three scored options, a trial result and a three-year cost estimate."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List and rank gateway requirements with the team"
                - "Shortlist one open source, one cloud and one commercial option"
                - "Trial the top option with one real API in a test environment"
                - "Record the decision with year-one and year-three costs"
            - name: Generated SDKs or hand-written client libraries
              description: |-
                ## Purpose
                Client libraries lower the barrier for integrators but each one is another product to version and support. Generators produce libraries from the OpenAPI document cheaply and consistently; hand-written ones feel better to use but drift. Deciding per language, based on where your integrators actually are, sets a sustainable level of support.

                ## Milestones
                1. Integrator languages counted from user agents or sign-up data.
                2. A generated library produced for the top language and reviewed for usability.
                3. Support cost estimated for generated and hand-written options.
                4. A decision recorded on which languages get which kind of library, and how they are versioned.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision names the supported SDK languages, whether each is generated or hand-written, and how SDK versions map to API versions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count integrator languages from user agent strings or sign-up data"
                - "Generate a client for the top language from the OpenAPI document"
                - "Write a small app with it and note what feels awkward"
                - "Record which languages get generated or hand-written libraries"
            - name: Rate limits and quotas clients can work with
              description: |-
                ## Purpose
                Rate limits protect the service, but undocumented or surprising limits break integrations in ways that look like outages. Designing limits per client and per endpoint class, returning 429 with a Retry-After header and remaining-quota headers, and publishing the numbers lets well-behaved clients slow down before they fail. Agree the numbers with whoever runs capacity, not by guesswork.

                ## Milestones
                1. Current traffic per client used to propose limits for each endpoint class.
                2. Limits returning 429 with Retry-After and remaining-quota headers.
                3. Limits and headers documented, with retry guidance.
                4. Clients near their limit identified and contacted before enforcement starts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Published rate limits return 429 with Retry-After and quota headers, and every client above 80 percent of its limit was contacted first."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Measure peak requests per minute for each client and endpoint class"
                - "Propose limits and agree them with whoever runs capacity"
                - "Return 429 with Retry-After and remaining-quota headers"
                - "Contact clients above 80 percent of their limit before enforcing"
            - name: Retrofitting the error format onto legacy endpoints
              description: |-
                ## Purpose
                Old endpoints often return errors in their own shapes, and changing them can break clients that parse those shapes. A staged plan moves each legacy endpoint to the standard format behind a new version or an opt-in header, measures who still depends on the old shape, and retires it on a published date. It is slow, so plan it as a series of small batches.

                ## Milestones
                1. Every endpoint with a non-standard error shape listed with its traffic and clients.
                2. An opt-in mechanism for the new error format, such as a request header or new version.
                3. Endpoints migrated in batches, highest traffic first.
                4. The old error shapes retired on a published date with clients notified.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All legacy endpoints return the standard error format, and the old shapes were retired on a published date with clients notified."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List endpoints with non-standard error shapes and their traffic"
                - "Build an opt-in header that returns the standard format"
                - "Migrate the first batch of high-traffic endpoints"
                - "Announce the retirement date for the old error shapes"
            - name: Field naming and casing clean-up
              description: |-
                ## Purpose
                Years of separate teams leave an API with userId beside user_id, created beside createdAt, and amounts as strings in one place and integers in another. Fixing these without breaking anyone means adding the correct field, returning both for a deprecation period, then removing the old one. Doing the worst offenders first gives clients the most relief for the least churn.

                ## Milestones
                1. Every field that breaks the style guide listed with its endpoint and usage.
                2. The ten worst offenders chosen by client confusion and traffic.
                3. Correct fields added alongside the old ones, which are marked deprecated.
                4. Old fields removed in the next major version with a migration note.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The ten worst naming inconsistencies have correct replacement fields live, with the old fields deprecated and a removal version set."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Run the lint ruleset against every API document and export naming violations"
                - "Pick the ten worst offenders by traffic and support tickets"
                - "Add the correct fields and mark the old ones deprecated"
                - "Schedule removal of the old fields for the next major version"
            - name: Expand and contract change for a renamed resource
              description: |-
                ## Purpose
                Renaming or reshaping a resource is the classic breaking change, and expand and contract is the classic safe way to do it: add the new form, migrate clients, then remove the old one. Running the full sequence once on a real change, with dates and traffic checks at each step, teaches the team a pattern they will reuse for every awkward change.

                ## Milestones
                1. The new resource or field shape live alongside the old one.
                2. Writes and reads through either form kept consistent.
                3. Traffic on the old form tracked down to an agreed threshold.
                4. The old form removed and the removal announced.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A real rename completes all expand, migrate and contract steps, with the old form removed after its traffic fell below the agreed threshold."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose one real rename or reshape that clients have asked for"
                - "Ship the new form alongside the old and keep both consistent"
                - "Check old-form traffic against the threshold @recurring(weekly:mon)"
                - "Remove the old form and announce it in the changelog"
            - name: Sunsetting an old major API version
              description: |-
                ## Purpose
                Running two major versions forever doubles testing, security patching and support. Retiring the old one on a published date means a sequence of notices, personal outreach to the last heavy users, brownouts that briefly return errors to flush out forgotten clients, and finally switching it off. Most of the work is communication, not code.

                ## Milestones
                1. A sunset date published at least as far ahead as the versioning policy requires.
                2. The ten heaviest remaining clients contacted personally with a migration guide.
                3. Scheduled brownouts run and the clients they surfaced contacted.
                4. The old version switched off and its code removed.

                ## Notes
                Start from the **Risk register** template. Keep a rollback path for the first week after switch-off, in case a critical client was missed.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old major version is switched off on its published date with no unannounced client outage, and its code is removed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Publish the sunset date and migration guide to every consumer"
                - "Contact the ten heaviest remaining clients by name"
                - "Schedule two short brownouts and announce them in advance"
                - "Check remaining traffic on the old version @recurring(weekly:fri)"
                - "Switch off the old version and remove its code after the rollback week"
            - name: Launching a public API v1
              description: |-
                ## Purpose
                Whatever you ship as version 1 of a public API you will support for years, so the launch is when design mistakes are cheapest to fix. A private beta with a handful of real integrators, a design freeze, complete reference docs and a published versioning policy before general availability gives you a v1 you can live with.

                ## Milestones
                1. A private beta with at least three external integrators building real integrations.
                2. Design changes from the beta made, then a design freeze declared.
                3. Reference docs, quick-start guide, changelog and versioning policy published.
                4. General availability announced with a support channel staffed for the first two weeks.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The v1 public API reaches general availability after a beta with three or more integrators, with docs and versioning policy published on launch day."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Recruit three external integrators for a private beta"
                - "Collect beta design feedback and decide which changes to make before freeze"
                - "Publish docs, quick-start, changelog and versioning policy"
                - "Staff a support channel for the first two weeks after launch"
            - name: Migration guide and office hours for a v2 release
              description: |-
                ## Purpose
                New major versions only succeed if clients move to them, and they move when it is easy. A migration guide that maps every v1 call to its v2 equivalent, with before and after examples, plus a few open office hours sessions for integrators, removes most of the friction. Measure the move rather than assuming it.

                ## Milestones
                1. A migration guide mapping every changed endpoint and field with examples.
                2. Three office hours sessions scheduled and announced to consumers.
                3. Questions from the sessions turned into guide updates.
                4. The share of traffic on v2 recorded at 30, 60 and 90 days.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A complete v1 to v2 migration guide is published, three office hours sessions are held, and v2 traffic share is recorded at 30, 60 and 90 days."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every endpoint and field that changes between v1 and v2"
                - "Write before and after examples for each change"
                - "Schedule and announce three office hours sessions"
                - "Update the guide with every question asked in the sessions"
            - name: API design for a new product feature
              description: |-
                ## Purpose
                When a new feature needs new endpoints, designing the contract before writing the service lets front end, mobile and partner teams build in parallel against a mock. Writing the OpenAPI change, getting it through the design review and publishing a mock server turns the API into the first deliverable rather than the last.

                ## Milestones
                1. Use cases and clients for the feature written in a short design note.
                2. The OpenAPI change drafted and passing the lint ruleset.
                3. The design approved at the weekly design review.
                4. A mock server published that client teams build against.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The feature's OpenAPI change is approved at design review and a mock server is live before service implementation starts."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the feature's use cases and clients in a short design note"
                - "Draft the OpenAPI change and run it through the linter"
                - "Submit the design to the weekly design review"
                - "Publish a mock server from the approved document"
            - name: Annual API consumer survey
              description: |-
                ## Purpose
                Support tickets show what breaks; a survey shows what integrators wish were different but never bothered to report. A short yearly survey of technical contacts on docs, errors, versioning pace and missing capabilities gives the API roadmap a direct voice from the people who depend on it. Keep it under ten questions so busy developers actually finish it.

                ## Milestones
                1. A survey of no more than ten questions sent to every technical contact.
                2. Responses summarised with scores compared to last year.
                3. Three improvements chosen from the results and added to the roadmap.
                4. A short summary of results and planned changes sent back to respondents.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "The yearly survey is sent to every technical contact, and a results summary with three planned improvements is shared back with them."
                cadence: cyclic
              tasks:
                - "Write ten or fewer questions on docs, errors, versioning and gaps"
                - "Send the API consumer survey to every technical contact @recurring(yearly)"
                - "Summarise responses and compare scores with last year"
                - "Share results and three planned improvements with respondents"
            - name: First public API as a solo engineer
              description: |-
                ## Purpose
                A solo engineer or tiny team shipping an API for a product or side business cannot run review boards and contract brokers, but a few cheap habits prevent most of the pain. Version the path from day one, write the OpenAPI document, use one error format and keep a changelog. These cost a few hours now and save a forced breaking change later.

                ## Milestones
                1. The API path carries a version from the first release.
                2. An OpenAPI document generated or written and committed.
                3. One error format used by every endpoint.
                4. A changelog started and linked from the docs.

                ## Notes
                Resist adding endpoints nobody has asked for. Every public endpoint is something you must support alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The first public release has a versioned path, a committed OpenAPI document, one error format and a published changelog."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Put a version in the API base path before the first client signs up"
                - "Generate an OpenAPI document from your framework and commit it"
                - "Make every endpoint return the same error shape"
                - "Start a changelog and link it from the docs"
            - name: Shared API standards across several teams
              description: |-
                ## Purpose
                When five teams each build APIs, clients see five dialects unless someone owns the shared standard. A small cross-team API guild with one representative per team, a shared style guide and lint ruleset, and a quarterly session on proposed changes keeps the dialects converging without a central gatekeeper slowing everyone down.

                ## Milestones
                1. One representative per API-owning team named to the guild.
                2. The style guide and lint ruleset adopted by every team.
                3. A process agreed for proposing and approving changes to the standard.
                4. A quarterly guild session held with decisions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every API-owning team has a guild representative and uses the shared ruleset, and the guild held a session with recorded decisions last quarter."
                cadence: cyclic
              tasks:
                - "Ask each API-owning team to name a guild representative"
                - "Agree how changes to the shared standard are proposed and approved"
                - "Hold the guild session on proposed standard changes @recurring(quarterly)"
                - "Publish the session decisions and update the style guide"
            - name: Taking over an undocumented API
              description: |-
                ## Purpose
                Inheriting an API from another team, a contractor or a departed colleague often means no spec, unknown clients and behaviour nobody remembers designing. Before changing anything, capture what it actually does: record real traffic, generate a description from it, list the clients and write characterisation tests. Then you can change it without guessing.

                ## Milestones
                1. Real requests and responses captured from a week of traffic or a test environment.
                2. An OpenAPI document reconstructed and checked against the captured traffic.
                3. Every client identified and a contact found for each.
                4. Characterisation tests that pin current behaviour, including its oddities.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The inherited API has a reconstructed OpenAPI document, a list of clients with contacts and characterisation tests in CI."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Capture a week of real requests and responses from the inherited API"
                - "Reconstruct an OpenAPI document from the captured traffic"
                - "Identify every client and find a contact for each"
                - "Write characterisation tests that pin today's behaviour"
            - name: Supporting mobile app versions that never upgrade
              description: |-
                ## Purpose
                A browser client updates on the next deploy; a mobile app on someone's phone may run a two-year-old build forever. APIs serving mobile apps need longer support windows, a minimum supported app version the API can enforce politely, and tracking of which app versions still call which endpoints. Getting this in place before the next breaking change avoids stranding users.

                ## Milestones
                1. Requests tagged with app version and platform.
                2. A report of active app versions and the endpoints each one calls.
                3. A minimum supported version mechanism that returns a clear upgrade message.
                4. A support window for app versions agreed with the mobile team and product.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Requests carry app version, a report shows endpoint use by app version, and a minimum supported version rule with an upgrade message is live."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the mobile team to send app version and platform on every request"
                - "Report which app versions call which endpoints"
                - "Agree a support window for old app versions with product"
                - "Build a minimum version check that returns a clear upgrade message"
            - name: Partner integration support for a launch partner
              description: |-
                ## Purpose
                A launch partner building against your API is effectively part of your team for a few weeks, and their experience becomes your reference story. A dedicated sandbox, a named engineering contact, a shared channel and a weekly check-in until they go live surface design gaps early and stop small blockers becoming missed dates.

                ## Milestones
                1. A sandbox environment and test credentials issued to the partner.
                2. A named engineering contact and a shared channel set up.
                3. Weekly check-ins held, with blockers and design gaps recorded.
                4. The partner live in production, with lessons fed back to the design review.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The launch partner is live in production, with weekly check-in notes and a list of design gaps passed to the design review."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Issue the partner a sandbox and test credentials"
                - "Name an engineering contact and open a shared channel"
                - "Hold a weekly check-in and log blockers until go-live"
                - "Pass the design gaps found to the weekly design review"
            - name: Long-running operations as resources
              description: |-
                ## Purpose
                Exports, reports, video processing and bulk imports take longer than any client should hold a connection open. Modelling them as an operation resource, return 202 with a status location, let the client poll or receive a webhook, and expose progress, result and failure, gives clients one reliable pattern instead of timeouts and duplicate submissions.

                ## Milestones
                1. One operation resource shape defined with status, progress, result location and error.
                2. One long-running endpoint converted to return 202 and an operation location.
                3. Polling guidance and an optional completion webhook documented.
                4. Expiry and clean-up of finished operations defined.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One long-running endpoint returns 202 with an operation resource that reports status, progress and result, documented with polling guidance."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List endpoints that regularly take more than ten seconds"
                - "Define the operation resource shape and status values"
                - "Convert one endpoint to return 202 with an operation location"
                - "Document polling intervals, completion webhooks and expiry"
            - name: Bulk endpoints with partial failure reporting
              description: |-
                ## Purpose
                Clients sending thousands of records one call at a time waste both sides' capacity, but a bulk endpoint that fails the whole batch for one bad record is just as painful. Designing batch requests with a size limit, per-item results and clear rules on atomicity lets integrators sync large data sets efficiently and fix only the records that failed.

                ## Milestones
                1. Batch size limit and atomicity rule decided and documented.
                2. A response format with a result and error per item, matched by client reference.
                3. One bulk endpoint built and load tested at the size limit.
                4. Guidance published on retrying only the failed items.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One bulk endpoint returns per-item results and errors, enforces a documented size limit and has published retry guidance."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Find the client making the most single-record calls in a row"
                - "Decide the batch size limit and whether batches are all or nothing"
                - "Build the bulk endpoint with per-item results"
                - "Publish guidance on retrying only failed items"
            - name: Optimistic concurrency with ETags
              description: |-
                ## Purpose
                Two clients updating the same record can silently overwrite each other's changes, which users report as data randomly reverting. Returning an ETag on reads and requiring If-Match on updates, with 412 when the version is stale, prevents lost updates without locking. Add it to the resources most often edited by more than one person or system.

                ## Milestones
                1. Resources at risk of concurrent edits identified from logs or support history.
                2. ETags returned on reads of those resources.
                3. Updates honouring If-Match and returning 412 on a stale version.
                4. Client guidance documented and an opt-in period agreed before If-Match becomes required.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The most concurrently edited resources return ETags and reject stale updates with 412, documented for clients."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the resources most often edited by two clients at once"
                - "Return an ETag on reads of those resources"
                - "Honour If-Match on updates and return 412 for stale versions"
                - "Document the behaviour and set an opt-in period for clients"
            - name: Dated version pinning with request transformers
              description: |-
                ## Purpose
                APIs that change often can pin each client to the dated version they first integrated against, and transform requests and responses between versions in a thin layer. The core code then only knows the latest shape, while old clients keep working until they choose to upgrade. It is powerful but adds a layer to test, so it suits teams shipping many small breaking changes.

                ## Milestones
                1. A design for storing each client's pinned version and overriding it per request.
                2. A transformer layer that converts between adjacent versions.
                3. Tests running the same scenarios across every supported version.
                4. A rule for how many dated versions are kept and when old transformers are deleted.

                ## Notes
                Write each transformer to convert only between neighbouring versions. Chaining small steps stays understandable; jumping directly between distant versions does not.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Clients are pinned to dated versions, a transformer layer handles at least two version steps, and tests cover every supported version."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Study how one public API documents its dated versions and upgrades"
                - "Store a pinned version per client with a per-request override header"
                - "Build transformers for the two most recent version steps"
                - "Run the same test scenarios against every supported version"
            - name: API governance scorecard across the organisation
              description: |-
                ## Purpose
                In a large organisation it is hard to tell which of dozens of APIs follow the standards and which are drifting. A scorecard that checks each API automatically for an OpenAPI document, lint results, error format, versioning policy, changelog and contract tests gives leaders a fair picture and teams a clear list of what to fix, without manual audits.

                ## Milestones
                1. Six to eight checks defined, each measurable automatically.
                2. A scorecard generated for every API in the inventory.
                3. Results shared with each owning team with their top two gaps.
                4. The scorecard regenerated each quarter and trends recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every API in the inventory has an automated scorecard on at least six checks, regenerated last quarter with trends recorded."
                cadence: cyclic
              tasks:
                - "Define six to eight automatically measurable governance checks"
                - "Script the checks against every API repository in the inventory"
                - "Send each team its score and top two gaps"
                - "Regenerate the scorecard and record the trend @recurring(quarterly)"
---

# API Design & Versioning

An API is a promise to code you do not control, so the work here is half design and half keeping that promise while the system underneath keeps changing. These projects start with the foundations (an inventory of endpoints and consumers, a style guide, one error format, a versioning policy and a machine-readable contract), move through the routines that catch breaking changes and retire old versions on schedule, then the design skills worth practising, the big choices such as protocol and versioning scheme, launches and sunsets, situations like inheriting an undocumented API or supporting mobile apps that never upgrade, and specialist patterns such as long-running operations and dated version pinning.

What repeats is a weekly design review slot and contract test check, monthly looks at traffic by version, the deprecation calendar, consumer feedback and documentation drift, and a quarterly refresh of the lint ruleset and style guide. The Metrics log, Feedback themes, Purchase decision, Remediation plan, Risk register and Meeting notes templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
