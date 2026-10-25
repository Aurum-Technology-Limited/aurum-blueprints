---
id: software-engineering.backend-services-engineering
name: Backend Services Engineering
description: "Server-side services built to be correct and easy to run: clear business rules, safe error handling and timeouts, background jobs and integrations that retry without harm, and the routines that keep them healthy."
category: business
version: 1.0.0
tags: [software-engineering, backend-services-engineering, engineer, backend, background-jobs, integrations, idempotency, business-logic]
author: Aurum Technology
starter_structure:
  templates:
    - onboarding-30-60-90
    - development-plan
    - purchase-decision
    - vendor
    - operational-checklist
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Backend Services Engineering
          description: "Building server-side services, business logic, background jobs and integrations that are correct, secure and easy to operate."
          projects:
            - name: Inventory of the backend services you own
              description: |-
                ## Purpose
                Most engineers can name the main service they work on but not the cron jobs, queue workers and small integration services that also page them. Listing every deployable, what it does, what it depends on and who answers for it turns vague ownership into a page you can plan from.

                ## Milestones
                1. Every service, worker and scheduled job you own listed with a one-line purpose.
                2. Each entry shows its datastore, its queues and the external providers it calls.
                3. An owner and a backup owner named for each entry.
                4. Anything nobody owns flagged to your lead with a proposal for who should.

                ## Notes
                Start from what is actually deployed, not from the repository list. Old workers often keep running long after their code stopped being edited.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared inventory lists every service, worker and scheduled job you own with purpose, dependencies, owner and backup owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every deployable process from the deployment platform, not the repo list"
                - "Note the datastore, queues and external providers each one uses"
                - "Name an owner and backup owner beside every entry"
                - "Send the list of unowned processes to your lead with a proposal"
            - name: Trace of one request from edge to database
              description: |-
                ## Purpose
                Reading code file by file rarely shows how a request really moves: middleware that rewrites headers, an auth layer that loads the user twice, a hidden retry in the HTTP client. Following one important request end to end, with a debugger or a trace, gives you the mental model every later change depends on.

                ## Milestones
                1. One business-critical endpoint chosen, such as checkout or sign-up.
                2. Every layer it passes through written down in order, from load balancer to commit.
                3. Each database query and outbound call it makes listed with its timeout.
                4. At least one surprise found and recorded as a ticket or a note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written walkthrough of one endpoint lists every layer, query and outbound call in order, with at least one finding ticketed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the endpoint whose failure would cost the business most"
                - "Step through one request locally with breakpoints at each layer"
                - "List each query and outbound call with its configured timeout"
                - "Raise a ticket for the most surprising thing you found"
            - name: Fail-fast configuration and secrets loading
              description: |-
                ## Purpose
                A service that starts with a missing payment key and only fails on the first real order is worse than one that refuses to boot. Loading every setting into one typed configuration object at startup, validating it and reading secrets from the secret store rather than files in the repository, catches mistakes at deploy time instead of in front of customers.

                ## Milestones
                1. All environment variables and settings read in one place into a typed object.
                2. The service exits at startup with a clear message when a required value is missing or malformed.
                3. Secrets come from the platform's secret store, with none committed to the repository.
                4. A table of every setting, its default and which environments override it.

                ## Notes
                Log the names of the settings loaded, never their values. A startup line that prints the database URL with its password is a common leak.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Removing any required setting makes the service refuse to start with a message naming that setting, and no secrets remain in the repository."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the codebase for every place an environment variable is read"
                - "Move them into one typed configuration module validated at startup"
                - "Scan the repository history for committed secrets and rotate any found"
                - "Write the settings table with defaults and per-environment overrides"
            - name: Error taxonomy and consistent failure responses
              description: |-
                ## Purpose
                When every handler invents its own errors, callers cannot tell a bad request from a bug, and logs fill with stack traces for things that were never faults. A small set of error types, each mapped to one response status and one log level, makes failures predictable for clients and readable for whoever is on call.

                ## Milestones
                1. Five to eight error categories agreed, such as validation, not found, conflict, dependency failure and internal.
                2. Each category mapped to one response status, one log level and whether it is retryable.
                3. One central handler turning exceptions into responses, with no stack traces sent to clients.
                4. The three most-used endpoints converted and their error responses checked by a test.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented error taxonomy is enforced by one central handler, and tests confirm the top three endpoints return the agreed status for each category."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Group last month's logged exceptions into rough categories"
                - "Agree the category list and status mapping with your team"
                - "Write the central error handler and remove ad hoc try and catch blocks"
                - "Add tests for each error category on the three busiest endpoints"
            - name: Input validation at every service boundary
              description: |-
                ## Purpose
                Bad data that slips past the edge ends up as a corrupt row, a crashed job three hours later or a confusing support ticket. Validating every request body, queue message and webhook payload against a schema as it arrives, and rejecting it with a precise message, keeps the core business logic free of defensive checks.

                ## Milestones
                1. Every entry point listed: HTTP routes, queue consumers, webhook receivers and file imports.
                2. A schema in place for each entry point, checking types, ranges, lengths and required fields.
                3. Rejected input returns or logs which field failed and why, without echoing sensitive values.
                4. Business logic no longer repeats checks the boundary already makes.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every HTTP route, consumer and webhook receiver validates input against a schema, and a test sends malformed input to each one."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every route, consumer, webhook receiver and import job"
                - "Pick one schema validation library and add it to the busiest route"
                - "Add schemas to queue consumers, which are usually the least protected"
                - "Write a malformed-input test for each entry point"
            - name: Timeouts and deadlines on every outbound call
              description: |-
                ## Purpose
                Default HTTP client and database driver settings often wait forever, so one slow provider can tie up every worker until the whole service stops answering. Setting an explicit connect and read timeout on each outbound call, shorter than the caller's own deadline, is the cheapest reliability fix most services are missing.

                ## Milestones
                1. Every outbound call listed with its current connect and read timeout.
                2. No call left on an infinite or library-default timeout.
                3. Timeouts set so the sum of a request's calls fits inside its own deadline.
                4. A test or staging check proving a hung dependency fails fast instead of piling up workers.

                ## Notes
                Check the database driver, the cache client and the queue client as well as HTTP calls. Each has its own timeout settings and most default to waiting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table shows an explicit timeout for every outbound call, and a staging test with a hung dependency returns an error within the agreed deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Grep for every HTTP, database, cache and queue client the service creates"
                - "Record each client's current connect and read timeout in a table"
                - "Set explicit timeouts and a per-request deadline budget"
                - "Point one dependency at a deliberately hanging stub in staging and test"
                - "Review the timeout table against new outbound calls @recurring(quarterly)"
            - name: Health checks, readiness and graceful shutdown
              description: |-
                ## Purpose
                Deploys that drop requests mid-flight, or a load balancer sending traffic to an instance still warming its caches, usually come down to missing readiness checks and a process that dies on the first signal. Separating liveness from readiness and draining in-flight work before exit makes every deploy and scale-down invisible to users.

                ## Milestones
                1. A liveness endpoint that answers only whether the process is alive.
                2. A readiness endpoint that checks the database and other hard dependencies.
                3. On shutdown the service stops taking new work, finishes in-flight requests and jobs, then exits.
                4. A deploy during a load test completes with zero failed requests.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deploy run during steady test traffic completes with no failed requests and no jobs lost or duplicated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check what your health endpoint does today and what the platform calls"
                - "Split it into separate liveness and readiness endpoints"
                - "Handle the termination signal by draining requests and in-flight jobs"
                - "Run a deploy under steady test traffic and count failed requests"
            - name: Transaction boundaries and connection pool settings
              description: |-
                ## Purpose
                Transactions that stay open across an outbound HTTP call, or a pool of five connections shared by forty workers, cause the lock waits and timeouts that look random in production. Mapping where each unit of work begins and commits, and sizing the pool against the database's real connection limit, removes a whole class of intermittent failures.

                ## Milestones
                1. Each write path's transaction start and commit points identified.
                2. No transaction held open while calling an external service or waiting on a queue.
                3. Pool size per instance multiplied by maximum instances checked against the database's connection limit.
                4. Pool wait time visible on a dashboard or in logs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No write path holds a transaction across an external call, and total pool connections at maximum scale stay below the database limit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find where your framework opens and commits transactions by default"
                - "Move outbound calls out of any transaction that wraps them"
                - "Work out total connections at maximum instance count"
                - "Expose pool wait time as a metric or log field"
            - name: Domain glossary and written business rules
              description: |-
                ## Purpose
                Business rules scattered across controllers and SQL get re-implemented slightly differently each time someone touches them, so a refund is calculated three ways in three places. Writing the core terms and rules in plain language, agreed with the product owner and linked to the one function that implements each, gives the service a single source of truth.

                ## Milestones
                1. Twenty to forty core terms defined in one sentence each, such as order, account, credit and cancellation.
                2. The ten most important business rules written as plain statements with their edge cases.
                3. Each rule linked to the one function or module that enforces it.
                4. Duplicate implementations of the same rule listed for consolidation.

                ## Notes
                Use the words the business uses. If sales says subscription and the code says plan, either rename the code or record the mapping here.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A glossary and rule list reviewed by the product owner, with every rule pointing to exactly one implementing function."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a glossary from the service's model and table names"
                - "Correct the drafted terms with the product owner in a 30-minute session"
                - "Link each core business rule to the function that implements it"
                - "Refresh the glossary after the quarter's new features land @recurring(quarterly)"
            - name: Weekly dead-letter and failed job review
              description: |-
                ## Purpose
                Background jobs fail quietly: a welcome email never sent, an invoice never generated, a sync that stopped on Tuesday. A fixed weekly look at the dead-letter queue and failed job counts, with each failure either fixed, retried or consciously discarded, stops silent backlogs growing into customer complaints.

                ## Milestones
                1. One place shows failed and dead-lettered jobs by job type and error.
                2. A weekly review held, with every dead-lettered job retried, fixed or discarded with a reason.
                3. Recurring failure causes ticketed rather than retried by hand each week.
                4. The dead-letter queue empty or explained at the end of each review.

                ## Notes
                Never bulk-retry a dead-letter queue before reading a sample. If the failure was a bug, retrying a thousand jobs can repeat the damage a thousand times.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks the dead-letter queue is cleared or every remaining job has a written reason."
                cadence: rolling
              tasks:
                - "Build a saved query or view of failed jobs grouped by type and error"
                - "Review dead-lettered jobs and retry, fix or discard each one @recurring(weekly:mon)"
                - "Ticket any failure cause that appears in two consecutive weeks"
                - "Chart the monthly failed job rate per job type @recurring(monthly:12)"
            - name: Third-party provider changelog watch
              description: |-
                ## Purpose
                Payment, email and identity providers deprecate fields, retire API versions and change rate limits with a few months' notice, usually in an email to whoever signed up years ago. Keeping one record per provider and reading their changelogs monthly turns surprise breakages into planned tickets.

                ## Milestones
                1. One record per external provider with the API version in use, the account owner and the support contact.
                2. Every provider's changelog, status page and deprecation notices subscribed to by a team inbox, not a person.
                3. A monthly read of changelogs with any relevant change ticketed and dated.
                4. No provider running on a version past its announced end-of-life.

                ## Notes
                Start from the **Vendor** template for each provider record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every external provider has a record with version and contacts, and each monthly changelog review produces dated tickets or a note that nothing applies."
                cadence: rolling
              tasks:
                - "List every external API the services call with the version pinned"
                - "Move provider account notifications to a shared team inbox"
                - "Read each provider's changelog and deprecation page @recurring(monthly:9)"
                - "Ticket any change that affects a pinned version with its sunset date"
            - name: Scheduled job register and missed-run alerts
              description: |-
                ## Purpose
                Cron jobs are the backend's blind spot: nobody notices when the nightly export stops, because nothing errors, it simply never runs. A register of every scheduled job with its expected run time, plus an alert when a run is missed rather than only when it fails, catches the silence.

                ## Milestones
                1. Every scheduled job listed with its schedule, time zone, owner and expected duration.
                2. Each job reports a heartbeat on success, and a missed heartbeat raises an alert.
                3. Jobs that must not overlap protected by a lock.
                4. A weekly check of the register against the scheduler's actual configuration.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scheduled job has a heartbeat alert, and deliberately skipping one run of a test job raises that alert within its window."
                cadence: rolling
              tasks:
                - "Export the scheduler configuration and list every scheduled job"
                - "Add a success heartbeat and a missed-run alert to each job"
                - "Add a lock to any job that would cause harm if two runs overlapped"
                - "Compare the register with the scheduler for new or missed runs @recurring(weekly:wed)"
            - name: Top exceptions triage each week
              description: |-
                ## Purpose
                Error trackers fill up until the real new bug hides among two hundred known ones nobody fixes. Taking the five noisiest exceptions each week and fixing, downgrading or deliberately ignoring each one keeps the list short enough that a new error stands out the day it appears.

                ## Milestones
                1. The error tracker grouped so one root cause shows as one issue.
                2. A weekly triage of the top five exceptions by count and by users affected.
                3. Expected conditions, such as a client disconnect, downgraded so they no longer count as errors.
                4. Total unresolved exception groups falling month on month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The count of unresolved exception groups is lower after three months than at the first triage, with each weekly session recorded."
                cadence: rolling
              tasks:
                - "Record today's count of unresolved exception groups as the baseline"
                - "Fix, downgrade or ignore the five noisiest exceptions @recurring(weekly:tue)"
                - "Merge exception groups that share one root cause"
                - "Note the unresolved count at the end of each month"
            - name: Webhook delivery failure review
              description: |-
                ## Purpose
                Webhooks fail in both directions: providers give up on your endpoint after a few retries, and partners stop accepting the events you send. Reviewing delivery failures weekly, and replaying the ones that matter from the provider's dashboard or your own log, keeps orders, payments and status changes from going missing.

                ## Milestones
                1. Inbound webhook receipts logged with provider, event type, event ID and outcome.
                2. Outbound webhook deliveries logged with attempts, response codes and final status.
                3. A weekly review with failed deliveries replayed or explained.
                4. Endpoints that fail for one partner repeatedly raised with that partner.

                ## Notes
                Answer inbound webhooks quickly and do the work in a background job. Slow handlers are the main reason providers mark an endpoint as failing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review record shows every failed inbound and outbound webhook replayed or explained for two months running."
                cadence: rolling
              tasks:
                - "Log event ID, type and outcome for every inbound webhook"
                - "Check provider dashboards for endpoints marked as failing"
                - "Replay or explain each failed webhook delivery @recurring(weekly:thu)"
                - "Email partners whose endpoints fail more than three times a week"
            - name: Integration credential and certificate expiry calendar
              description: |-
                ## Purpose
                API keys with fixed lifetimes, OAuth refresh tokens that lapse, signing certificates and partner mTLS certificates all expire on a date somebody once knew. One calendar of every credential the services hold, with a renewal owner and a 30-day warning, prevents the classic outage where everything worked yesterday.

                ## Milestones
                1. Every API key, token, signing secret and certificate listed with its issuer and expiry date.
                2. A renewal owner and a 30-day warning set for each entry.
                3. Credentials with no expiry flagged for a rotation plan.
                4. The last renewal of each credential recorded with its date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A credential calendar lists every key and certificate with expiry and owner, and no credential expires without a renewal logged beforehand."
                cadence: rolling
              tasks:
                - "List every credential in the secret store with its issuer"
                - "Find and record the expiry date of each key and certificate"
                - "Check for anything expiring in the next 45 days @recurring(monthly:3)"
                - "Agree a rotation plan for credentials that never expire"
            - name: Monthly reconciliation against provider records
              description: |-
                ## Purpose
                Your database says 1,204 payments succeeded last month and the payment provider says 1,209, and nobody knows until finance asks. A monthly reconciliation that compares your records with each provider's export, and explains every difference, catches lost webhooks and double charges while they are still cheap to fix.

                ## Milestones
                1. A script that compares internal records with the provider's export for a given month.
                2. Every mismatch classified: missing internally, missing at the provider or amounts differ.
                3. Each mismatch fixed or explained in writing.
                4. Finance or operations receives the reconciliation result each month.

                ## Notes
                Reconcile on the provider's own IDs, not on amounts and timestamps, which collide.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month a reconciliation report shows zero unexplained differences between internal records and the provider's export."
                cadence: rolling
              tasks:
                - "Download last month's export from your main payment or billing provider"
                - "Write a script matching provider IDs to internal records"
                - "Run the reconciliation and explain every mismatch @recurring(monthly:18)"
                - "Send the result to finance with any open items"
            - name: Dead endpoint and stale flag sweep
              description: |-
                ## Purpose
                Old endpoints keep their attack surface and their tests long after the last client stopped calling them, and feature flags left on for a year become permanent branches nobody dares delete. A quarterly sweep using real traffic data removes code that only costs time.

                ## Milestones
                1. Endpoints with no traffic in 90 days listed from access logs.
                2. Flags fully on or fully off for more than 60 days listed with their owners.
                3. Each candidate removed, scheduled for removal or kept with a reason.
                4. Lines of code and tests removed recorded for the quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a sweep record lists unused endpoints and stale flags, each removed, scheduled or kept with a written reason."
                cadence: cyclic
              tasks:
                - "Query access logs for endpoints with no calls in 90 days"
                - "List flags that have not changed state in 60 days"
                - "Sweep unused endpoints and stale flags @recurring(quarterly)"
                - "Open removal pull requests for the three easiest candidates"
            - name: Backend support escalation queue
              description: |-
                ## Purpose
                Support teams escalate a stuck refund or a missing account as a message to whichever engineer replied last time, and the same engineer becomes the bottleneck. A single queue, a weekly sweep and a short note on each fix turn repeat escalations into either self-serve admin tools or real bug fixes.

                ## Milestones
                1. One channel or ticket queue for backend escalations, agreed with support.
                2. Each escalation tagged with its cause, such as data fix, bug or missing admin tool.
                3. A weekly sweep with nothing older than five working days unanswered.
                4. The most common manual data fix turned into an admin action support can run.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "No escalation waits more than five working days, and one repeat manual fix has become a self-serve admin action within three months."
                cadence: rolling
              tasks:
                - "Agree one escalation queue and its tags with the support lead"
                - "Tag last month's escalations by cause to find repeats"
                - "Sweep the queue and answer anything older than three days @recurring(weekly:fri)"
                - "Build an admin action for the most repeated manual data fix"
            - name: Idempotency keys and safe retries in practice
              description: |-
                ## Purpose
                Clients retry, load balancers retry, queues redeliver, and a handler that is not idempotent turns each retry into a second charge or a duplicate email. Building idempotency keys into a small practice service, then into one real write endpoint, teaches the pattern where it matters most.

                ## Milestones
                1. The difference between naturally idempotent and non-idempotent operations written in your own words.
                2. A practice endpoint that stores an idempotency key with its first response and replays it on repeats.
                3. Concurrent duplicate requests handled, so two arriving together still produce one effect.
                4. One real create or charge endpoint converted, with a test sending the same request twice.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A real write endpoint returns the same response and creates one record when the same idempotency key is sent twice at once."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read how one major payment provider documents its idempotency keys"
                - "Build a practice endpoint that stores and replays responses by key"
                - "Send two identical requests in parallel and check for one effect"
                - "Convert one real create endpoint and add a duplicate-request test"
            - name: Race conditions and locking in business logic
              description: |-
                ## Purpose
                Two requests reading a balance of 100 and both spending 80 is the classic backend bug, and it never appears in single-user testing. Learning optimistic versioning, row locks and unique constraints, and practising each on a failing test, lets you spot the read-then-write patterns hiding in your own code.

                ## Milestones
                1. A failing test that reproduces a lost update with two concurrent requests.
                2. The same bug fixed three ways: a version column, a row lock and an atomic conditional update.
                3. The trade-offs of each approach written down in a short note.
                4. Three read-then-write paths in your own service reviewed and fixed where needed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note compares three locking approaches, and three read-then-write paths in the service have been reviewed with fixes merged where needed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a test that runs two concurrent withdrawals against one balance"
                - "Fix it with a version column and record what changed"
                - "Fix it again with a row lock and then with a conditional update"
                - "Search your service for reads followed by writes on the same row"
            - name: Transactional outbox for reliable events
              description: |-
                ## Purpose
                Saving an order and then publishing an order-created event in two steps means a crash between them leaves other systems never knowing. The outbox pattern writes the event in the same database transaction and publishes it afterwards, and building it once makes the dual-write problem obvious everywhere else.

                ## Milestones
                1. The dual-write problem explained in a paragraph with one example from your own code.
                2. An outbox table written in the same transaction as the business change.
                3. A relay process that publishes outbox rows and marks them sent, safe to restart.
                4. Consumers tolerating the occasional duplicate the relay will produce.

                ## Notes
                An outbox gives at-least-once delivery, not exactly once. Pair it with idempotent consumers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Killing the service between commit and publish in a test still results in the event being published once the relay restarts."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find one place in your code that saves data then publishes an event"
                - "Add an outbox table written in the same transaction"
                - "Write a relay that publishes and marks rows, then kill it mid-run"
                - "Check that consumers ignore the duplicate published on restart"
            - name: Money and currency handling in code
              description: |-
                ## Purpose
                Floating-point totals that are a cent out, rounding applied per line in one place and per invoice in another, and currencies with no minor unit cause disputes and failed reconciliations. Learning to store money as integer minor units or decimals with an explicit currency, and to round in one agreed place, removes a long tail of billing bugs.

                ## Milestones
                1. Every money field in the service listed with its type and currency handling.
                2. A single money type or helper used for arithmetic, with currency always attached.
                3. The rounding rule and the point where it applies agreed with finance and written down.
                4. Tests covering a zero-decimal currency, a three-decimal currency and a split that does not divide evenly.

                ## Notes
                Rounding and tax rules are business and legal decisions. Confirm them with finance or your accountant rather than choosing them in code.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All money arithmetic goes through one tested helper with currency attached, and the rounding rule is written down and confirmed by finance."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search the code for money fields stored or computed as floats"
                - "Introduce one money helper that carries amount and currency together"
                - "Ask finance where rounding should happen and record the answer"
                - "Add tests for uneven splits and currencies with different minor units"
            - name: Time zones, timestamps and calendar logic
              description: |-
                ## Purpose
                Subscriptions that renew a day early, reports that miss the last hour of the month and reminders sent at 3am all come from mixing local time with stored time. Learning to store instants in UTC, keep the user's zone separately and do calendar arithmetic in that zone fixes them at the root.

                ## Milestones
                1. Every timestamp column checked for whether it stores an instant or a local date.
                2. A rule written down: instants in UTC, user-facing dates computed in the user's zone.
                3. Tests for a daylight saving change, a month end and a leap day.
                4. One existing date bug found and fixed using the new rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written time rule exists, and tests covering daylight saving, month end and leap day pass for the service's date logic."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every timestamp and date column and what it is meant to hold"
                - "Write the team's rule for instants, local dates and user zones"
                - "Add tests around a daylight saving change for any scheduled feature"
                - "Fix one existing date bug using the rule"
            - name: Domain modelling of invariants and aggregates
              description: |-
                ## Purpose
                When any code can update any column, rules such as an order total must equal its lines or a cancelled order cannot ship get broken by whichever endpoint forgot to check. Practising domain modelling, where a few objects own their invariants and expose only valid changes, makes the rules impossible to bypass by accident.

                ## Milestones
                1. One core entity chosen and its invariants listed in plain language.
                2. The entity's state changes moved behind methods that enforce those invariants.
                3. Direct updates to its fields from other modules removed or blocked.
                4. Unit tests for each invariant that run without a database.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One core entity enforces all its listed invariants through its own methods, with a database-free unit test for each."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the entity with the most bug reports and list its rules"
                - "Read one short introduction to aggregates and invariants"
                - "Move its state changes behind methods that check the rules"
                - "Write a unit test for each invariant without touching the database"
            - name: Queue delivery semantics and message ordering
              description: |-
                ## Purpose
                Most queues deliver at least once, some reorder messages, and visibility timeouts shorter than the job cause the same message to run twice in parallel. Understanding the exact guarantees of the queue you use, and testing them, stops you writing consumers that assume a promise the broker never made.

                ## Milestones
                1. The queue's delivery guarantee, ordering guarantee and redelivery rules written down from its documentation.
                2. Visibility or acknowledgement timeouts compared with each job's real run time.
                3. A test showing what happens when a consumer crashes mid-message.
                4. Consumers that depend on ordering identified and given a sequence check or a partition key.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note records the queue's guarantees, and every consumer's timeout exceeds its 99th percentile run time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your queue's documentation on delivery and ordering guarantees"
                - "Compare each consumer's timeout with its slowest recent runs"
                - "Crash a consumer mid-message in a test and watch the redelivery"
                - "Add a sequence check to any consumer that relies on order"
            - name: Authorisation rules for business resources
              description: |-
                ## Purpose
                Authentication answers who someone is, but the bugs that leak data are usually about what they may do: a user reading another account's invoice by changing an ID. Writing the permission model as a table of roles, resources and actions, then enforcing it in one policy layer, makes every endpoint answer the question the same way.

                ## Milestones
                1. A table of roles, resource types and permitted actions agreed with the product owner.
                2. One policy function or layer that every endpoint calls before acting.
                3. Every endpoint that loads a resource by ID checks ownership through that layer.
                4. Tests that try each role against each resource it should not reach.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A permissions table is enforced by one policy layer, and tests confirm each role is refused on resources outside its rights."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Draft the roles, resources and actions table with the product owner"
                - "Find every endpoint that loads a record by an ID from the request"
                - "Route those endpoints through a single policy check"
                - "Write cross-account access tests for each role"
            - name: Choosing a background job framework
              description: |-
                ## Purpose
                Teams often start with a homemade loop polling a table, then discover they need retries, scheduling, priorities and visibility. Comparing two or three job frameworks against your real needs, before the homemade one grows further, is a decision you make once and live with for years.

                ## Milestones
                1. Requirements listed: retries with backoff, scheduling, priorities, concurrency limits, visibility and hosting.
                2. Two or three options scored, including the database-backed and broker-backed kinds.
                3. One option tried with a real job from your service.
                4. A recorded decision with the reasons and the migration path from the current approach.

                ## Notes
                Start from the **Purchase decision** template. A database-backed queue is often enough below a few thousand jobs a minute and saves running a broker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names one job framework, scored against listed requirements, with a working prototype job and a migration plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the requirements list from the jobs you run today"
                - "Shortlist two or three frameworks that fit your language and hosting"
                - "Port one real job to the strongest option as a prototype"
                - "Record the decision and migration path for the team"
            - name: Moving slow work out of the request path
              description: |-
                ## Purpose
                Sign-up that waits for a welcome email, or checkout that waits for a PDF invoice, makes users wait on work they do not need to see finish. Moving those steps into background jobs, with the request returning as soon as the essential write commits, cuts response times and stops a slow provider blocking the core action.

                ## Milestones
                1. The five slowest synchronous steps inside requests identified from traces or timings.
                2. Each step classified as must-finish-before-response or can-run-later.
                3. Can-run-later steps moved into jobs enqueued after commit.
                4. Response time for the affected endpoints measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three slow steps run as background jobs, with before-and-after response times recorded for each affected endpoint."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find the slowest synchronous steps inside your busiest requests"
                - "Decide which ones the user actually needs to see finish"
                - "Enqueue the rest as jobs only after the main write commits"
                - "Compare endpoint response times before and after the change"
            - name: Retries, backoff and circuit breaking for a flaky dependency
              description: |-
                ## Purpose
                Every service has one provider that fails a few times a day, and naive retries in a tight loop turn its bad minute into your outage. Adding capped retries with jittered backoff, only for errors that are safe to retry, plus a circuit breaker that fails fast while it is down, contains the damage.

                ## Milestones
                1. The flakiest dependency chosen from error data, with its failure modes listed.
                2. Retries limited to retryable errors, with a cap and jittered exponential backoff.
                3. A circuit breaker that opens after repeated failures and returns a clear fallback or error.
                4. Behaviour during a simulated provider outage tested in staging.

                ## Notes
                Retry only operations that are idempotent, or carry an idempotency key. Retrying a non-idempotent payment call is how double charges happen.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "During a simulated outage of the chosen dependency, the service stays responsive and the circuit opens and closes as configured."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the dependency with the most errors in the last 30 days"
                - "List which of its errors are safe to retry and which are not"
                - "Add capped jittered retries and a circuit breaker around its client"
                - "Simulate an outage in staging and record what users would see"
            - name: Outbound rate limits and quota budgeting
              description: |-
                ## Purpose
                Partner and provider APIs limit how fast you may call them, and a backfill or a busy day can burn the whole quota and break the live product. Knowing each provider's limits, throttling your own calls below them and keeping bulk work in a separate lane protects customer-facing traffic.

                ## Milestones
                1. Each provider's rate limits and quotas recorded from its documentation or contract.
                2. A client-side limiter keeping calls below each limit with headroom.
                3. Bulk and backfill calls routed through a lower-priority lane than live traffic.
                4. Quota usage visible, with an alert at 80 percent of any daily or monthly limit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every rate-limited provider has a client-side limiter and an 80 percent usage alert, and a backfill run causes no rate-limit errors on live traffic."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record each provider's published rate limit and quota"
                - "Add a client-side limiter set below each limit"
                - "Send backfill and bulk calls through a separate low-priority queue"
                - "Review quota usage against limits for each provider @recurring(monthly:22)"
            - name: Audit log of business-critical actions
              description: |-
                ## Purpose
                A customer asks who changed their plan, or finance asks who issued a refund, and application logs that rotate after two weeks have no answer. A dedicated audit log of sensitive actions, recording who, what, when and the before and after values, settles those questions and is often a customer or regulatory requirement.

                ## Milestones
                1. A list of actions that must be audited, such as refunds, role changes, data exports and price changes.
                2. An append-only audit record written in the same transaction as each action.
                3. Each record holds actor, action, target, time, request ID and changed fields.
                4. Support or admins can search the audit log without database access.

                ## Notes
                Keep personal data in audit records to what the question needs, and agree the retention period with whoever handles privacy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every action on the agreed list writes an audit record in the same transaction, and a support user can find any refund's actor in under a minute."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the list of audited actions with support and finance"
                - "Write audit records in the same transaction as each listed action"
                - "Add a search screen or command for support to query the log"
                - "Sample ten audit records for completeness and accuracy @recurring(quarterly)"
            - name: Build or buy for email, search or notifications
              description: |-
                ## Purpose
                Running your own email delivery, search cluster or push notification service looks cheap until deliverability, relevance tuning and device tokens arrive. Comparing a managed provider with building it yourself, on total cost including on-call time, gives a decision you can defend and revisit.

                ## Milestones
                1. One capability chosen and its real requirements listed, such as volume, latency and data residency.
                2. A managed option and a self-built option costed over two years, including engineering and on-call time.
                3. Lock-in and exit costs written down for the managed option.
                4. A decision recorded with the conditions that would make you revisit it.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for one capability compares two-year costs of building and buying and lists the triggers for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the capability where the build or buy question is live"
                - "List volume, latency, residency and support requirements"
                - "Cost both options over two years including on-call time"
                - "Write the decision and the conditions for revisiting it"
            - name: Replacing provider polling with webhooks
              description: |-
                ## Purpose
                Polling a provider every minute for status changes wastes quota, adds up to a minute of delay and still misses fast transitions. Switching to the provider's webhooks, with signature checks and a nightly catch-up poll as a safety net, gives faster updates at a fraction of the calls.

                ## Milestones
                1. The polling jobs listed with their call volume and the delay they add.
                2. A webhook receiver that verifies signatures, records the event and enqueues processing.
                3. Duplicate and out-of-order events handled by event ID and timestamp checks.
                4. Polling reduced to a daily catch-up that reports how many events webhooks missed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Status updates arrive by verified webhook, and the daily catch-up job reports missed events, with polling calls down by at least 90 percent."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure how many calls the current polling jobs make each day"
                - "Build a receiver that checks signatures and enqueues each event"
                - "Handle duplicate and out-of-order events by ID and timestamp"
                - "Cut polling to a daily catch-up that counts missed events"
            - name: Direct-to-storage file uploads with signed URLs
              description: |-
                ## Purpose
                Streaming large uploads through your application servers ties up workers, hits request size limits and makes timeouts hard to set. Issuing short-lived signed upload URLs so clients send files straight to object storage, then processing them in a job, keeps the service light and the files scanned and checked.

                ## Milestones
                1. An endpoint that issues a signed upload URL limited by size, content type and expiry.
                2. A job triggered on upload that validates type, scans the file and records metadata.
                3. Files stored with private access, served through signed download URLs.
                4. Orphaned uploads that never completed cleaned up automatically.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Clients upload straight to private object storage through signed URLs, and every completed file is validated by a job before it is usable."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure upload sizes and durations passing through the app today"
                - "Add an endpoint issuing signed upload URLs with size and type limits"
                - "Process each completed upload in a validation job"
                - "Add a lifecycle rule that removes incomplete uploads after a day"
            - name: Personal data export and deletion handling
              description: |-
                ## Purpose
                Privacy laws in many countries give people the right to a copy of their data and to have it deleted, and a request that takes an engineer two days of ad hoc queries each time does not scale. A service-level job that finds every record tied to a person, across tables, files and providers, makes each request routine.

                ## Milestones
                1. A map of where personal data lives: tables, object storage, logs, caches and providers.
                2. An export job producing a person's data in a readable format.
                3. A deletion or anonymisation job that covers internal stores and calls provider deletion APIs.
                4. Each request logged with dates, without storing the deleted data itself.

                ## Notes
                What must be deleted, what may be kept and how fast are legal questions. Agree them with your privacy lead or lawyer before writing the job.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Export and deletion jobs cover every store on the personal data map, and a test account's data is fully exported and removed by them."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the agent to list columns that look like personal data from the schema"
                - "Confirm retention and deletion rules with your privacy lead"
                - "Build export and deletion jobs and run them on a test account"
                - "Check that every request was completed within the agreed time @recurring(monthly:26)"
            - name: Payment provider integration go-live
              description: |-
                ## Purpose
                Taking real money is where backend mistakes become refunds, chargebacks and angry emails. Treating the go-live as a dated event, with sandbox scenarios passed, webhooks verified, reconciliation ready and a small first cohort, means the first real payment is boring.

                ## Milestones
                1. Sandbox tests pass for success, decline, authentication challenge, refund and dispute.
                2. Payment webhooks verified, idempotent and recorded with provider IDs.
                3. Reconciliation script run against sandbox data with zero differences.
                4. Live keys in the secret store, a small first cohort enabled and the first live payments checked by hand.

                ## Notes
                Start from the **Operational checklist** template. Test with the provider's published test card numbers only.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The integration goes live on the planned date with all sandbox scenarios passed and the first 20 live payments reconciled by hand."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "List the sandbox scenarios the provider documents and copy them into a checklist"
                - "Run every scenario in sandbox and record the result"
                - "Enable live payments for a small first cohort only"
                - "Reconcile the first 20 live payments against the provider dashboard"
            - name: Launch readiness for a new backend service
              description: |-
                ## Purpose
                New services usually ship with the code finished and everything around it missing: no alerts, no runbook, no backup restore tested, nobody else able to deploy it. A readiness review two weeks before launch, against a fixed checklist, catches those gaps while there is still time to close them.

                ## Milestones
                1. A readiness checklist covering config, timeouts, health checks, alerts, backups, runbook and access.
                2. Every item marked done or accepted as a known risk by the owner.
                3. A second engineer has deployed and rolled back the service unaided.
                4. Launch held on the planned date with the owner and a backup on hand.

                ## Notes
                Start from the **Operational checklist** template, then trim it to what a service of this size needs.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The service launches on its planned date with every readiness item done or signed off as a known risk, and a second engineer has deployed it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Copy the readiness checklist and set the launch date"
                - "Walk the checklist with the service owner two weeks before launch"
                - "Have a second engineer deploy and roll back the service unaided"
                - "Hold a 15-minute check-in the morning after launch"
            - name: Migration before a provider API version sunset
              description: |-
                ## Purpose
                When a provider announces that the API version you depend on will stop working on a set date, the work always looks small until the payload changes reach every caller. Planning the migration as a dated project, with a compatibility layer and a staged switch, avoids the scramble in the final week.

                ## Milestones
                1. Every call to the old version listed with the fields it reads and writes.
                2. Differences between versions mapped field by field.
                3. One client adapter supporting both versions behind a switch.
                4. Traffic moved to the new version in stages, finished at least four weeks before the sunset.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All calls use the new API version at least four weeks before the provider's sunset date, with the old code path removed."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write the provider's sunset date and your own finish date on the project"
                - "List every call site of the old version and the fields each uses"
                - "Build an adapter that can call either version behind a switch"
                - "Move traffic in stages and delete the old path once all calls have moved"
            - name: Bulk data import for a new large customer
              description: |-
                ## Purpose
                A new enterprise customer arrives with 400,000 records in a spreadsheet and a go-live date, and the normal create endpoint was never built for that. Running the import as a planned event, with a dry run, validation report and resumable batches, keeps it from corrupting data or slowing the product for everyone else.

                ## Milestones
                1. The customer's file mapped to your fields, with rejected rows and reasons listed.
                2. A dry run on a staging copy producing a validation report the customer has accepted.
                3. The import running in resumable batches at off-peak times, throttled to protect live traffic.
                4. Counts checked against the source file and signed off by the customer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Imported record counts match the accepted source file, with every rejected row reported, and live latency stays normal during the run."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Get a sample of the customer's file and map its columns to your fields"
                - "Run a dry import on staging and send the validation report"
                - "Run the real import in resumable throttled batches off-peak"
                - "Send the customer final counts and the list of rejected rows"
            - name: Large notification send for an announcement
              description: |-
                ## Purpose
                Sending an email or push notification to every user at once is a backend event: provider throughput limits, unsubscribe rules, bounce handling and the traffic spike when people click. Planning the send with batches, a seed list and a stop switch turns a risky blast into a controlled release.

                ## Milestones
                1. The audience query reviewed, excluding unsubscribed and suppressed addresses.
                2. A seed send to internal addresses checked on several clients.
                3. Batches sized to the provider's throughput, with a stop switch that halts remaining batches.
                4. Bounces, complaints and click-through traffic watched for the first hours.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The announcement reaches the agreed audience in batches with no sends to suppressed addresses and a tested stop switch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Review the audience query against the suppression and unsubscribe lists"
                - "Send to the internal seed list and check rendering"
                - "Configure batches and test the stop switch on a small batch"
                - "Watch bounces and app traffic for the first two hours"
            - name: First ninety days owning an inherited service
              description: |-
                ## Purpose
                Inheriting a service from someone who has left, with thin docs and a pager attached, is one of the most common backend situations and one of the most stressful. A 90-day plan that moves from learning to stabilising to improving lets you take ownership without either freezing it or breaking it.

                ## Milestones
                1. By day 30: the service runs locally, you have deployed it and you know its top three failure modes.
                2. By day 60: alerts, runbook and the dependency list are current, and one recurring failure is fixed.
                3. By day 90: an improvement plan for the next two quarters agreed with your lead.
                4. Questions for the previous owner asked while they are still reachable.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Resist rewriting anything in the first month; most odd code has a reason someone forgot to write down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A two-quarter improvement plan for the service is agreed with your lead by day 90, with the runbook and alerts updated."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book an hour with the previous owner and bring a written question list"
                - "Run the service locally and do one deploy with supervision"
                - "Read the last six months of incidents and support escalations"
                - "Draft the two-quarter improvement plan for your lead"
            - name: Solo backend engineer at an early-stage startup
              description: |-
                ## Purpose
                As the only backend engineer, you are also the database administrator, the on-call rota and the integration team, with no one to review your work. Choosing boring defaults, automating backups and the deploy, and keeping a short decision log protects the company from the day you are ill or on leave.

                ## Milestones
                1. Managed services chosen for database, queue and email so you run as little as possible.
                2. Automated daily backups with a restore tested on a fresh environment.
                3. A one-command deploy and rollback that a founder could run from a written note.
                4. A decision log of the main technical choices with one line of reasoning each.

                ## Notes
                Write the note the founder would need if you were unreachable for a week, and keep it current.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested backup restore, a written one-command deploy and rollback and a decision log exist, and a founder has followed the deploy note once."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every piece of infrastructure you run by hand today"
                - "Restore last night's backup into a fresh environment and time it"
                - "Write the deploy and rollback note and have a founder follow it"
                - "Restore a backup to check it still works @recurring(monthly:5)"
            - name: Frontend engineer moving into backend work
              description: |-
                ## Purpose
                Frontend engineers moving to backend already know HTTP and async code, but data integrity, transactions, background work and operating a service are new. A three-month plan with a mentor, a guided first feature and on-call shadowing builds the habits that are hardest to learn from tutorials.

                ## Milestones
                1. Gaps listed against backend basics: SQL, transactions, queues, error handling and production debugging.
                2. A mentor agreed and a fortnightly session booked.
                3. One backend feature shipped end to end, including a migration and a background job.
                4. Two on-call shifts shadowed, with one incident followed from alert to fix.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within three months one backend feature with a migration and a job has shipped, and two on-call shifts have been shadowed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Rate yourself on SQL, transactions, queues and production debugging"
                - "Ask a senior backend engineer to mentor you fortnightly"
                - "Pick a first feature that needs a migration and a background job"
                - "Shadow two on-call shifts and write up one incident"
            - name: Freelance integration build for a client
              description: |-
                ## Purpose
                Clients hiring a freelancer to connect their shop to a warehouse, CRM or accounting system usually describe the happy path and nothing else. Pinning down the scope, failure handling, credentials ownership and handover in writing before coding keeps the job profitable and the client able to run what you leave.

                ## Milestones
                1. A written scope listing systems, data flows, sync direction, frequency and what happens on failure.
                2. Credentials created in the client's own accounts, never yours.
                3. The integration delivered with logging, retry handling and an alert the client receives.
                4. A handover document and a recorded walkthrough accepted by the client.

                ## Notes
                Contracts, liability and tax for freelance work are for your own adviser. Keep this project to the engineering scope and handover.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client signs off the integration against the written scope and has received a handover document and walkthrough recording."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the scope with data flows and failure behaviour for the client to approve"
                - "Ask the client to create API credentials in their own accounts"
                - "Send the client a short progress update @recurring(weekly:fri)"
                - "Record a walkthrough and deliver the handover document"
            - name: Taking over integrations from a departing colleague
              description: |-
                ## Purpose
                Integrations live in the heads of the people who built them: which partner needs a phone call when their endpoint breaks, which job must never run twice. When a colleague hands in notice, the few weeks before they leave are the only chance to capture that knowledge first hand.

                ## Milestones
                1. Every integration they own listed with partner contacts and known quirks.
                2. Credentials and provider accounts moved from their name to a team account.
                3. Each integration's failure modes and manual fixes written down.
                4. You have handled at least one real failure while they are still available to ask.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Before the colleague leaves, every integration they own has a written handover, and all provider accounts are under team ownership."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book three handover sessions before their last week"
                - "List each integration with partner contacts and quirks"
                - "Move provider accounts and credentials to team ownership"
                - "Handle the next failure yourself while they watch"
            - name: Backend work in a regulated domain
              description: |-
                ## Purpose
                Health, finance, insurance and education data bring rules about retention, access, location and evidence that change how ordinary backend code must be written. Working with your compliance contact to turn each obligation into a concrete engineering control, recorded in a risk register, keeps audits from becoming emergencies.

                ## Milestones
                1. The obligations that apply to your service listed with your compliance or legal contact.
                2. Each obligation mapped to an engineering control, such as encryption, access logging or data location.
                3. Gaps recorded in a risk register with owners and dates.
                4. Evidence for each control collected where an auditor would look for it.

                ## Notes
                Start from the **Risk register** template. Which rules apply and what satisfies them is for your compliance team or lawyer to decide, not the engineering team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every applicable obligation is mapped to a control or a dated gap in the risk register, reviewed by the compliance contact."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your compliance contact which obligations apply to the service"
                - "Map each obligation to an engineering control in a table"
                - "Record every gap in the risk register with an owner"
                - "Collect evidence for each control in one shared folder"
            - name: Durable workflows for long-running processes
              description: |-
                ## Purpose
                Processes that span days, such as onboarding with document checks, a loan application or a subscription trial ending, get built as chains of cron jobs and status columns that nobody can follow. A durable workflow engine or a state machine with persisted steps makes each process visible, resumable after a crash and testable.

                ## Milestones
                1. One long-running process drawn as states and transitions, including timeouts and cancellation.
                2. Options compared: a hand-built state machine with persisted steps or a workflow engine.
                3. The process rebuilt so each step is persisted, retryable and resumes after a restart.
                4. An admin view showing where every instance is and why it is waiting.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One long-running process runs as a persisted workflow that survives a restart mid-step, with every instance visible in an admin view."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draw the states and transitions of your longest-running process"
                - "Compare a hand-built state machine with one workflow engine"
                - "Rebuild the process with persisted, retryable steps"
                - "Restart the service mid-step in staging and confirm it resumes"
            - name: Double-entry ledger for balances and credits
              description: |-
                ## Purpose
                Storing a balance as one number that code adds to and subtracts from loses the history and drifts with every bug. A double-entry ledger, where every movement is an immutable pair of entries and balances are derived, makes credits, wallets and prepaid usage auditable and correctable.

                ## Milestones
                1. Accounts and entry types designed for one balance, such as customer credit.
                2. Every movement written as balanced immutable entries, with corrections as new entries.
                3. Derived balances checked against the old stored balances, with differences explained.
                4. A scheduled check that all entries sum to zero and balances match.

                ## Notes
                How credits and balances must be treated in the accounts is a question for your finance team or accountant. Agree the account structure with them first.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One balance type runs on a double-entry ledger, and the monthly zero-sum check passes with no unexplained difference."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose one balance type and list every way it changes today"
                - "Design accounts and entry types and review them with finance"
                - "Migrate history into entries and compare derived balances"
                - "Run the zero-sum and balance match check @recurring(monthly:28)"
            - name: Duplicate-safe event consumers with a processed log
              description: |-
                ## Purpose
                With at-least-once delivery, the question is never whether a consumer sees a message twice but what happens when it does. Recording processed message IDs in the same transaction as the effect gives an exactly-once effect even when delivery is not, and is the advanced step after basic idempotency.

                ## Milestones
                1. Consumers listed with whether a duplicate message would cause harm.
                2. A processed-messages table written in the same transaction as each consumer's effect.
                3. A retention rule for the table that outlasts the broker's redelivery window.
                4. A test that delivers every message twice and checks for single effects.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every harmful-on-duplicate consumer records processed IDs transactionally, and a double-delivery test shows single effects."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Mark each consumer as harmless or harmful on duplicate delivery"
                - "Add a processed-messages table and write to it in the same transaction"
                - "Set the table's retention longer than the broker's redelivery window"
                - "Write a test that delivers every message twice"
            - name: Tenant isolation in service logic
              description: |-
                ## Purpose
                In a multi-tenant service, one missing tenant filter in one query shows a customer another company's data, and that is the incident that loses contracts. Carrying tenant context explicitly through requests, jobs and caches, and enforcing it below the business code, turns isolation from a convention into a guarantee.

                ## Milestones
                1. Every path that touches tenant data listed: requests, jobs, caches, exports and search.
                2. Tenant context set once at the edge and carried into jobs and cache keys.
                3. Queries scoped by a repository layer or database policy rather than by each caller.
                4. A test suite that tries to read across tenants on every path.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tenant scoping is enforced below business code on every listed path, and a cross-tenant test suite passes on each release."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every code path that reads or writes tenant data"
                - "Carry tenant context into background jobs and cache keys"
                - "Move tenant filtering into a repository layer or database policy"
                - "Run the cross-tenant access tests on every path @recurring(quarterly)"
---

# Backend Services Engineering

This area is for engineers who write and own server-side code: the services that hold business rules, run background jobs and talk to payment providers, email platforms and partner APIs. It starts with foundations (knowing what you own, configuration, errors, validation, timeouts and clean shutdown), moves through the weekly and monthly routines that catch failed jobs, missed schedules, broken webhooks and drifting balances, then the skills worth practising, such as idempotency, concurrency, money and time. After that come improvements and decisions, dated go-lives and migrations, situations from an inherited service to working solo at a startup, and specialist work on durable workflows, ledgers and tenant isolation.

What repeats is a weekly pass over dead-lettered jobs, top exceptions, webhook failures, missed scheduled runs and support escalations, monthly checks on provider changelogs, credential expiry, reconciliation, quotas and privacy requests, and quarterly sweeps for dead endpoints, timeouts and tenant isolation. The Onboarding 30/60/90, Development plan, Purchase decision, Vendor, Operational checklist and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
