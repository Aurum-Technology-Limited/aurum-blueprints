---
id: quant-finance.broker-exchange-api-integration
name: Broker and Exchange API Integration
description: "A broker shortlist, sandbox and secrets set up properly, an order state machine, FIX and REST skills, reconnection and reconciliation routines and a staged first live order, for engineers wiring research to real venues."
category: business
version: 1.0.0
tags: [quant-finance, broker-exchange-api-integration, engineer, fix-protocol, order-state, rate-limits, sandbox-testing, reconciliation]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - risk-register
    - compliance-control
    - onboarding-30-60-90
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Broker and Exchange API Integration
          description: "Connecting research to brokers and exchanges: API and FIX connectivity, order types, rate limits, reconnection logic and testing in a sandbox first."
          projects:
            - name: Broker and venue API shortlist against written requirements
              description: |-
                ## Purpose
                Picking a broker because a blog post had a Python example usually ends in a rewrite once you find it lacks the order types, markets or sandbox you need. Writing requirements first (asset classes, order types, protocols, rate limits, sandbox, account permissions, fees for API access) and scoring two or three candidates against them turns a hunch into a recorded decision.

                ## Milestones
                1. A one-page requirements list covering markets, order types, protocols, sandbox, rate limits and API fees.
                2. Two or three brokers or venues scored against the same list, with evidence links from their documentation.
                3. Terms of use checked for clauses on automated trading, API access and account types.
                4. A chosen broker recorded with the two reasons that decided it and the main risk accepted.

                ## Notes
                Start from the **Vendor** template. A sandbox that behaves differently from production is worth less than it looks, so ask other users how close it is.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated scoring sheet compares at least two brokers or venues against the same written requirements and names the one chosen with its reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the markets, order types and protocols your strategy needs on one page"
                - "Read the API documentation landing page of three candidate brokers"
                - "Score each candidate against the requirements with links to evidence"
                - "Record the chosen broker, the deciding reasons and the risk accepted"
            - name: Annotated notes on the broker's API documentation
              description: |-
                ## Purpose
                Most integration bugs trace back to a sentence in the documentation nobody read: an order type that is simulated rather than native, a rate limit counted per account rather than per key, or a field that means something different on cancel. Reading the docs end to end once and writing short annotated notes gives you a reference that answers questions faster than searching the vendor's site at 9 in the morning.

                ## Milestones
                1. Notes covering authentication, order entry, order status, fills, positions, errors and rate limits.
                2. A list of every behaviour the docs leave ambiguous, each with a question to test in the sandbox.
                3. Native versus broker-simulated order types identified for each market you trade.
                4. The notes stored in the repository beside the adapter code, with the doc version they describe.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notes file in the repository covers the seven core API topics and lists at least five open questions to test in the sandbox."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download or bookmark the current API reference and note its version"
                - "Write a one-paragraph summary of each core section as you read it"
                - "List every ambiguous behaviour as a question to test in the sandbox"
                - "Commit the notes beside the adapter code"
            - name: Sandbox account and test credentials set up
              description: |-
                ## Purpose
                Every mistake should happen first in a sandbox or paper environment, yet many people skip it because the sign-up takes a form and an email. Getting test credentials, confirming the sandbox endpoint and placing a single test order end to end proves the basic path works before any design work depends on it.

                ## Milestones
                1. A sandbox or paper account opened with the broker or venue.
                2. Test API credentials issued and stored in the secrets store, not in code.
                3. One test limit order placed, acknowledged and cancelled through the API.
                4. The sandbox's known differences from production written in the documentation notes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sandbox test order has been placed, acknowledged and cancelled through the API, with the request and response logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Apply for the broker's sandbox or paper trading account"
                - "Store the test credentials in your secrets store as soon as they arrive"
                - "Place and cancel one small limit order in the sandbox from a script"
                - "Note any sandbox behaviour that differs from the production docs"
            - name: API key permissions and secrets storage policy
              description: |-
                ## Purpose
                Any trading key pasted into a notebook or committed to a repository is one leak away from someone else placing orders, or worse, withdrawing funds. A short written policy (where keys live, which permissions each key gets, IP allowlists, who can read them and how they are revoked) closes the most common and most expensive hole in a personal or small-team setup.

                ## Milestones
                1. Every existing key listed with its permissions, environment and owner.
                2. Withdrawal and transfer permissions removed from every key used by code.
                3. All keys moved into a secrets manager or encrypted store, with none left in code, notebooks or shell history.
                4. IP allowlisting enabled where the broker supports it.
                5. A written revocation procedure that a second person could follow in under ten minutes.

                ## Notes
                Run a secrets scanner over the full git history, not just the current branch. A key deleted in a later commit is still exposed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A key inventory shows every trading key stored in a secrets manager, with no withdrawal permission and a tested revocation procedure."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every API key you hold with its permissions and where it is stored"
                - "Remove withdrawal and transfer rights from keys used by code"
                - "Run a secrets scanner across the full repository history"
                - "Write and test the steps to revoke a key in an emergency"
            - name: Connectivity architecture diagram with component owners
              description: |-
                ## Purpose
                Once fills stop arriving, the first ten minutes are often lost working out which process talks to the broker, which one holds order state and where the logs go. A single diagram of the path from strategy to venue, with each component's owner, host and failure behaviour, makes the system explainable to a colleague and debuggable under pressure.

                ## Milestones
                1. A diagram showing strategy, order manager, gateway, broker endpoints and every log or database in the path.
                2. Each component labelled with its owner, host and what happens to orders if it stops.
                3. Single points of failure marked, with a sentence on whether each is accepted or to be fixed.
                4. The diagram committed beside the code and linked from the runbook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed diagram shows every component between strategy and venue with owner, host and failure behaviour labelled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the path an order takes from signal to venue on paper"
                - "Label each box with owner, host and behaviour on failure"
                - "Mark single points of failure and decide which to accept"
                - "Commit the diagram and link it from the runbook"
            - name: Order state machine specification
              description: |-
                ## Purpose
                Pending, acknowledged, partially filled, cancel pending, filled, rejected, expired and unknown: if your code does not name every state and every legal transition, it will eventually treat a late fill on a cancelled order as impossible and drop it. Writing the state machine once, mapped to the broker's own status codes, is the foundation every other order-handling decision rests on.

                ## Milestones
                1. Every internal order state listed, including an explicit unknown state.
                2. Every legal transition drawn, with the broker message or event that triggers it.
                3. Broker status codes mapped one to one onto internal states, with gaps flagged.
                4. Illegal transitions defined as alerts rather than silent overwrites.
                5. Unit tests covering each transition, including a fill arriving after a cancel acknowledgement.

                ## Notes
                Fills after a cancel acknowledgement do happen on some venues because of message ordering. Your state machine should accept the fill and alert, never discard it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written state machine maps every broker status code to an internal state, and unit tests cover every legal and illegal transition."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every order status the broker can return from the docs"
                - "Draw internal states and legal transitions between them"
                - "Map each broker status onto exactly one internal state"
                - "Write a test for a fill that arrives after the cancel acknowledgement"
            - name: Client order ID and idempotency scheme
              description: |-
                ## Purpose
                Doubling a position by accident usually starts with a retry after a timeout that sends the same order twice. Unique client order IDs, generated once and reused on every retry, let the broker reject duplicates and let you match every acknowledgement and fill back to the decision that caused it.

                ## Milestones
                1. A client order ID format chosen that is unique across restarts, strategies and days, within the broker's length and character limits.
                2. The ID generated once per order intent and persisted before the request is sent.
                3. Retries reuse the same ID, and the broker's duplicate-ID behaviour confirmed in the sandbox.
                4. Cancel and replace requests carry their own IDs linked to the original order.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sandbox test shows that resending an order with the same client order ID is rejected as a duplicate and does not create a second order."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the broker's length and character limits for client order IDs"
                - "Choose an ID format that survives restarts and multiple strategies"
                - "Persist the ID before sending and reuse it on every retry"
                - "Send a duplicate ID in the sandbox and record what the broker does"
            - name: Instrument mapping table for order entry
              description: |-
                ## Purpose
                Your research data calls it one thing, the broker calls it a contract ID, and the exchange has its own symbol with a suffix for the share class. A maintained mapping table from internal instrument IDs to each broker's order-entry identifiers, tick sizes, lot sizes and trading hours stops orders being rejected, or worse, sent for the wrong line.

                ## Milestones
                1. A table mapping each traded instrument to its broker identifier, exchange, currency, tick size and lot size.
                2. Futures and options rows carrying expiry and multiplier, checked against the broker's contract details call.
                3. A validation step that refuses to send an order for any instrument missing from the table.
                4. A monthly refresh that flags changes since the last version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every instrument the strategy can trade appears in a versioned mapping table, and the gateway refuses orders for unmapped instruments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of instruments the strategy is allowed to trade"
                - "Fetch broker identifiers, tick sizes and lot sizes for each one"
                - "Block orders in the gateway for any instrument not in the table"
                - "Refresh the mapping table and review the differences @recurring(monthly:2)"
            - name: Clock synchronisation and timestamp conventions
              description: |-
                ## Purpose
                Signed REST requests fail when your clock drifts past the broker's tolerance, and latency numbers are meaningless if two hosts disagree by half a second. Choosing one time source, one time zone (UTC) and one timestamp precision for every log and message makes cross-system debugging possible.

                ## Milestones
                1. Every host in the order path synchronised to a named time source.
                2. All logs and stored messages using UTC with an agreed precision.
                3. The broker's allowed clock skew for signed requests recorded.
                4. A drift check that alerts before skew reaches half of that allowance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All order-path hosts log in UTC from a named time source, and a weekly drift check is recorded against the broker's skew limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which time source each order-path host uses today"
                - "Switch every log and message timestamp to UTC"
                - "Note the broker's allowed clock skew for signed requests"
                - "Check clock offset on each order-path host @recurring(weekly:tue)"
            - name: Raw message audit log for every request and response
              description: |-
                ## Purpose
                If a broker says an order was never received and your code says it was sent, the only thing that settles it is the raw message with a timestamp. Logging every outbound request and inbound response or FIX message, unmodified and append-only, is cheap to build and priceless the first time something goes wrong.

                ## Milestones
                1. Every request, response, stream event and FIX message written to an append-only log with a UTC timestamp.
                2. Secrets and signatures masked in the log while order fields stay intact.
                3. A search tool or query that finds every message for one client order ID in under a minute.
                4. A retention period set and a storage check scheduled.

                ## Notes
                Your regulator or broker may require you to keep order records for a set number of years. Check the rule that applies to you before choosing retention.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An append-only message log records every order-related message with secrets masked, and all messages for one order can be retrieved in under a minute."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add raw logging of every outbound request and inbound message"
                - "Mask keys and signatures without removing order fields"
                - "Write a query that returns every message for one client order ID"
                - "Check log storage use and retention settings @recurring(monthly:15)"
            - name: Start-of-session connectivity checklist
              description: |-
                ## Purpose
                Most bad trading days start quietly: an expired token, a stale instrument table or a sandbox flag left on from yesterday's test. A five-minute checklist before the session opens catches them while there is still time to fix them without orders in flight.

                ## Milestones
                1. A written checklist covering credentials, environment flags, session status, mapping table date, open orders and gateway limits.
                2. The checklist run before every session, with the result logged.
                3. A rule that the strategy does not start until every item passes.
                4. Items that never fail removed after a quarter, and items that caused incidents added.

                ## Notes
                Start from the **Operational checklist** template. Automate checks that can be scripted, but keep a human sign-off on the environment flag.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log shows the start-of-session checklist run and passed before every trading session for a full month."
                cadence: rolling
              tasks:
                - "Draft the start-of-session checklist from last month's incidents"
                - "Script the checks that can be automated"
                - "Run the start-of-session checklist before the market opens @recurring(daily)"
                - "Prune and update the checklist items once a quarter"
            - name: End-of-day order and fill reconciliation
              description: |-
                ## Purpose
                Your system thinks it holds one position, the broker's books say another, and the difference grows quietly until it matters. Matching every order and fill in your records against the broker's executions report at the end of each trading day catches dropped messages, duplicate fills and manual trades before they compound.

                ## Milestones
                1. A daily job that pulls the broker's executions for the day and matches them to internal fills by order ID.
                2. Breaks reported by type: missing internally, missing at broker, quantity or price mismatch.
                3. Every break explained and closed before the next session, with the reason logged.
                4. A month with zero unexplained breaks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reconciliation report exists for every trading day, and every break in the last month has a recorded cause and resolution."
                cadence: rolling
              tasks:
                - "Find the broker endpoint or report that lists the day's executions"
                - "Write a job that matches broker executions to internal fills by order ID"
                - "Reconcile the day's orders and fills and close every break @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Log the cause of each break in the incident log"
            - name: Position and cash reconciliation with broker statements
              description: |-
                ## Purpose
                Fills can reconcile perfectly while positions still drift, because of corporate actions, expiries, fees, interest and transfers that never pass through your order code. Comparing your positions and cash with the broker's statement weekly, and the full monthly statement line by line, keeps your books matching the ones that actually count.

                ## Milestones
                1. A weekly comparison of internal positions and cash balance with the broker's positions endpoint.
                2. A monthly line-by-line check against the broker's official statement.
                3. Non-trade adjustments (fees, dividends, splits, expiries, interest) booked internally with a reference.
                4. Differences above a stated tolerance escalated the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly position checks and a monthly statement reconciliation are on file for three consecutive months with every difference explained."
                cadence: rolling
              tasks:
                - "Set a tolerance for position and cash differences"
                - "Compare internal positions and cash with the broker's positions call @recurring(weekly:fri)"
                - "Reconcile the broker's monthly statement line by line @recurring(monthly:4)"
                - "Book fees, dividends and expiries internally with a statement reference"
            - name: Rate limit usage tracking and request budget
              description: |-
                ## Purpose
                Brokers throttle or ban keys that exceed request limits, and it tends to happen on the busiest day, when polling, cancels and retries all spike together. Tracking how much of each limit you use, and keeping a written budget with headroom for bursts, means the connection degrades predictably instead of locking you out mid-session.

                ## Milestones
                1. Every rate limit that applies (per key, per account, per endpoint, per order) listed from the docs.
                2. Usage measured per limit and charted against peak days.
                3. A written budget leaving at least a third of each limit free for cancels and recovery.
                4. Polling replaced by streams where the broker offers them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly report shows peak usage against every applicable rate limit, with headroom above the written budget for the last four weeks."
                cadence: rolling
              tasks:
                - "List every rate limit that applies to your keys and account"
                - "Count requests per limit window in the gateway"
                - "Review peak rate limit usage against the budget @recurring(weekly:wed)"
                - "Replace one polling loop with a stream subscription"
            - name: Credential and certificate rotation calendar
              description: |-
                ## Purpose
                OAuth refresh tokens, TLS client certificates and FIX passwords expire on their own schedules, and an expiry on a Monday morning looks exactly like an outage. A calendar of every expiry with rotation done well ahead of each one turns a recurring surprise into routine work.

                ## Milestones
                1. Every credential, token and certificate listed with its expiry date and renewal steps.
                2. Rotation done at least two weeks before each expiry.
                3. Each rotation tested in the sandbox before production where possible.
                4. Old credentials revoked once the new ones are confirmed working.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A credential calendar lists every expiry, and no connection has failed because of an expired credential in the past year."
                cadence: cyclic
              tasks:
                - "List every key, token, password and certificate with its expiry"
                - "Check the credential calendar for expiries in the next 90 days @recurring(quarterly)"
                - "Rotate every trading API key and revoke the old ones @recurring(yearly)"
                - "Write renewal steps for each credential type in the runbook"
            - name: Broker API changelog and deprecation watch
              description: |-
                ## Purpose
                Brokers change field names, retire endpoints and tighten limits with a notice buried in a developer newsletter. Reading the changelog monthly and logging anything that affects your adapter gives you months of warning instead of a morning of rejects.

                ## Milestones
                1. Every changelog, status page and developer mailing list for your brokers subscribed to.
                2. A monthly review that logs each relevant change with the affected code.
                3. Deprecations entered as dated tickets well before the sunset date.
                4. A record of which API version each adapter targets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log shows a monthly review of every broker's API changes for six months, with each deprecation tracked to a ticket."
                cadence: rolling
              tasks:
                - "Subscribe to each broker's developer changelog and status page"
                - "Record which API version each adapter targets"
                - "Review broker changelogs and log changes that affect you @recurring(monthly:12)"
                - "Open a dated ticket for every announced deprecation"
            - name: Weekly reject and error code review
              description: |-
                ## Purpose
                Rejects are the broker telling you something specific: a price off the tick grid, a market closed, insufficient margin, a short sale not located. Counting rejects by code each week, and fixing the cause of the most common one, steadily removes the noise that hides the reject that matters.

                ## Milestones
                1. Every reject and error code the broker returns mapped to a plain-language cause.
                2. A weekly count of rejects by code and strategy.
                3. The most frequent preventable reject fixed at the source each week.
                4. Unmapped or new codes treated as alerts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly reject report exists for two months and shows the count of preventable rejects falling over that period."
                cadence: rolling
              tasks:
                - "Map every documented reject code to a plain-language cause"
                - "Count last week's rejects by code and strategy @recurring(weekly:mon)"
                - "Fix the source of the most frequent preventable reject"
                - "Raise an alert for any reject code not yet in the map"
            - name: Connectivity incident log and risk register
              description: |-
                ## Purpose
                Disconnects, stuck orders and bad acknowledgements feel like one-offs until you write them down and see the same three causes repeating. Logging every connectivity incident with impact and cause, and keeping a short register of known risks, gives you the evidence to fix the right thing and a record a reviewer or broker will ask for.

                ## Milestones
                1. An incident log with date, duration, orders affected, cause and fix for every event.
                2. A risk register of known connectivity risks with likelihood, impact and owner.
                3. A short review after any incident that affected live orders.
                4. A monthly look at the log for repeating causes.

                ## Notes
                Start from the **Risk register** template. Record near misses too, such as a reconnect that worked only on the third try.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An incident log and risk register are kept, every live-order incident has a written review, and repeating causes are reviewed monthly."
                cadence: rolling
              tasks:
                - "Create the incident log and backfill last quarter's incidents"
                - "List known connectivity risks with an owner for each"
                - "Review the incident log for repeating causes @recurring(monthly:20)"
                - "Write a short review within two days of any live-order incident"
            - name: Trading session and maintenance calendar upkeep
              description: |-
                ## Purpose
                Exchange holidays, half days, daylight saving shifts and broker maintenance windows all change when an order can be accepted. Keeping one calendar the gateway reads, rather than hard-coded hours, stops strategies firing orders into a closed market or a broker restarting its servers.

                ## Milestones
                1. A machine-readable calendar of sessions, holidays, early closes and broker maintenance windows for every venue.
                2. The gateway refusing to send orders outside an open session.
                3. Daylight saving changes for every venue's time zone entered for the year.
                4. A monthly refresh against exchange and broker notices.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The gateway reads a session calendar covering the next twelve months for every venue, refreshed monthly, and blocks orders outside open sessions."
                cadence: cyclic
              tasks:
                - "Collect next year's holiday and early close lists for each venue"
                - "Add broker maintenance windows to the calendar"
                - "Refresh the session calendar from exchange and broker notices @recurring(monthly:26)"
                - "Test that the gateway blocks an order sent on a holiday"
            - name: Broker SDK and dependency update routine
              description: |-
                ## Purpose
                Vendor SDKs, TLS libraries and WebSocket clients age fast, and an update forced by a security fix is the worst time to discover three major versions of breaking changes. Updating dependencies on a monthly rhythm, in the sandbox first, keeps each step small.

                ## Milestones
                1. Every dependency in the order path pinned to an exact version.
                2. A monthly check for updates, with security fixes applied first.
                3. Each update run through the sandbox test suite before production.
                4. A one-line note per update in the change log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Order-path dependencies are pinned, and the change log shows monthly update checks with sandbox test results for six months."
                cadence: rolling
              tasks:
                - "Pin every order-path dependency to an exact version"
                - "Check order-path dependencies for updates and security fixes @recurring(monthly:8)"
                - "Run the sandbox test suite on each update before release"
                - "Note each update and its test result in the change log"
            - name: FIX protocol fundamentals study
              description: |-
                ## Purpose
                FIX is still the common language of institutional order entry, and engineers who only know REST tend to misread its session layer. Working through logon, heartbeats, sequence numbers, NewOrderSingle, OrderCancelReplaceRequest and ExecutionReport against a test acceptor builds the model you need before any broker certification.

                ## Milestones
                1. Notes on the session layer: logon, heartbeat, test request, sequence numbers, resend and logout.
                2. Notes on the application messages you will use, with the key tags for each.
                3. A local FIX initiator connected to an open-source test acceptor, sending and cancelling an order.
                4. The broker's FIX rules of engagement read and its custom tags listed.

                ## Notes
                Learn from the version your broker actually uses. Tag meanings and required fields differ between versions and between brokers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A local FIX session has sent, amended and cancelled an order against a test acceptor, with notes on every message type used."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find which FIX version and dialect your broker uses"
                - "Set up an open-source FIX engine with a local test acceptor"
                - "Send, amend and cancel one order and read every message exchanged"
                - "List the broker's custom tags from its rules of engagement"
            - name: REST and WebSocket patterns for trading APIs
              description: |-
                ## Purpose
                Retail and crypto venues mostly use REST for orders and WebSockets for updates, and the hard parts are not the HTTP calls but ordering, gaps and resubscription. Studying snapshot plus delta streams, sequence numbers, heartbeats and pagination on your broker's API means the adapter can tell when it has missed something.

                ## Milestones
                1. Notes on how the broker's order and account streams signal sequence, gaps and heartbeats.
                2. A small client that subscribes, detects a gap and rebuilds state from a snapshot.
                3. Pagination and cursor rules for order history documented.
                4. A written rule for which source wins when a REST response and a stream event disagree.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test client detects a deliberately forced stream gap and rebuilds order state from a snapshot without manual steps."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read how the broker's streams number messages and send heartbeats"
                - "Build a client that subscribes to order updates in the sandbox"
                - "Force a gap by pausing the client and rebuild state from a snapshot"
                - "Write down which source wins when REST and stream disagree"
            - name: Order types and time-in-force across venues
              description: |-
                ## Purpose
                On one broker a stop order is held on the venue, on another it lives on the broker's server, and on a third it is simulated in their app and never reaches the API at all. Building a table of the order types and time-in-force values each venue really supports, and testing each one in the sandbox, stops strategies relying on behaviour that does not exist.

                ## Milestones
                1. A table of order types (limit, market, stop, stop limit, post-only, reduce-only) and time-in-force values (day, IOC, FOK, GTC, GTD) per venue.
                2. Each entry marked as native to the venue or simulated by the broker.
                3. Each type the strategy uses placed and observed in the sandbox.
                4. Unsupported combinations rejected in your own gateway before they reach the broker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of supported order types and time-in-force values per venue exists, with every type the strategy uses tested in the sandbox."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the order types and time-in-force values your strategy uses"
                - "Check each against every venue's documentation"
                - "Place each used type in the sandbox and note what happens"
                - "Reject unsupported combinations in the gateway"
            - name: Request signing and token refresh mechanics
              description: |-
                ## Purpose
                HMAC signatures, nonces, timestamp windows and OAuth refresh flows each fail in their own confusing way, usually as a vague authentication error. Implementing the broker's scheme carefully, with tests for an expired token, a reused nonce and a skewed clock, means you recognise each failure on sight.

                ## Milestones
                1. The broker's signing or token scheme written up step by step.
                2. A signing function with unit tests against the broker's published example values.
                3. Token refresh handled before expiry, not after the first failed request.
                4. Tests for an expired token, a reused nonce and a clock outside the allowed window.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Signing code passes tests against the broker's published examples and handles expired tokens, reused nonces and clock skew with clear errors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write out the broker's signing or token flow step by step"
                - "Test your signing function against the documented example values"
                - "Refresh tokens on a timer before they expire"
                - "Add tests for expired tokens, reused nonces and skewed clocks"
            - name: Reconnection, backoff and resynchronisation logic
              description: |-
                ## Purpose
                Every connection drops eventually, and naive reconnect loops either hammer the broker until the key is banned or come back up believing stale state. Reconnecting with capped exponential backoff and jitter, then resubscribing and reconciling open orders before trading resumes, makes a disconnect an inconvenience rather than an incident.

                ## Milestones
                1. Reconnect logic with capped exponential backoff and jitter.
                2. After reconnecting, open orders, fills and positions queried and reconciled before any new order is sent.
                3. Subscriptions restored and confirmed, with gaps filled from snapshots.
                4. A maximum number of failed attempts after which the strategy stops and pages a human.

                ## Notes
                Write the stop rule down: after a set number of failed reconnects or a set time without confirmed state, the strategy halts and does not resume on its own.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test that kills the connection mid-session shows the adapter reconnecting with backoff, reconciling state and only then resuming orders."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Add capped exponential backoff with jitter to reconnects"
                - "Reconcile open orders and positions before resuming after reconnect"
                - "Set the maximum failed attempts before the strategy halts"
                - "Kill the connection in the sandbox mid-session and watch recovery"
            - name: Partial fills and cancel-replace race handling
              description: |-
                ## Purpose
                Cancels sent while a fill is in flight, an amend that arrives after the order filled, or a partial fill on an order you thought was dead: these races are where positions go wrong. Working through each race in the sandbox and writing the handling rule for each builds code that does the right thing when messages cross.

                ## Milestones
                1. A list of race conditions: cancel versus fill, amend versus fill, amend versus cancel and late partials.
                2. The broker's behaviour in each race observed or confirmed with support.
                3. A handling rule for each, implemented and unit tested.
                4. Remaining quantity always computed from confirmed fills, never from requested quantity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each listed race condition has a documented broker behaviour, a handling rule and a passing test."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the races between cancels, amends and fills"
                - "Reproduce a cancel racing a fill in the sandbox"
                - "Ask broker support how each race is resolved on their side"
                - "Write a test for each race and its handling rule"
            - name: Mock broker server for automated tests
              description: |-
                ## Purpose
                Sandboxes are slow, rate limited and cannot be told to reject the next order or drop the connection on cue. A small mock broker that speaks your broker's protocol and can script acknowledgements, partial fills, rejects, delays and disconnects lets you test every failure path in seconds on every commit.

                ## Milestones
                1. A mock server implementing the order entry and update messages your adapter uses.
                2. Scripted scenarios for rejects, partial fills, delayed acknowledgements, duplicates and disconnects.
                3. The adapter's test suite running against the mock in continuous integration.
                4. The mock checked against recorded sandbox sessions so it does not drift from reality.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The adapter test suite runs against a mock broker in continuous integration and covers at least five scripted failure scenarios."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the messages your adapter sends and receives"
                - "Build a mock server that answers them with scripted responses"
                - "Add scenarios for rejects, partials, delays and disconnects"
                - "Run the adapter test suite against the mock in continuous integration"
            - name: Recorded session replay tests
              description: |-
                ## Purpose
                The quickest way to catch a regression in message parsing is to replay real sessions through the new code and compare the resulting order states with the old. Capturing sandbox and, where allowed, production sessions as test fixtures turns every odd thing the broker once did into a permanent test.

                ## Milestones
                1. A capture format for raw sessions with timestamps.
                2. At least ten recorded sessions, including disconnects, rejects and partial fills.
                3. A replay harness that feeds sessions to the adapter and compares final order states.
                4. Every production incident added as a new replay fixture.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A replay harness runs at least ten recorded sessions on every change and fails if any final order state differs from the expected result."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a capture format for raw sessions"
                - "Record sandbox sessions that include rejects and disconnects"
                - "Build a harness that replays a session and compares order states"
                - "Add a fixture from the most recent connectivity incident"
            - name: Broker adapter interface for more than one broker
              description: |-
                ## Purpose
                Strategy code that calls one broker's SDK directly makes every broker change a rewrite and every backtest-to-live difference harder to find. A narrow adapter interface (place, amend, cancel, query, subscribe) with one implementation per broker keeps broker quirks in one place and lets the paper and live paths share the same strategy code.

                ## Milestones
                1. An interface with a small set of operations and a common order and fill model.
                2. The existing broker integration moved behind the interface with no change in behaviour.
                3. Broker-specific quirks documented in each implementation rather than in strategy code.
                4. A second implementation, even a mock, proving the interface is not shaped around one broker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Strategy code calls only the adapter interface, and at least two implementations pass the same contract test suite."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every broker call the strategy code makes today"
                - "Define a narrow interface with a common order and fill model"
                - "Move the current broker integration behind the interface"
                - "Write contract tests every implementation must pass"
            - name: Choosing FIX, vendor SDK or REST for a venue
              description: |-
                ## Purpose
                Many brokers offer two or three ways in: a FIX session, a vendor SDK that needs a running desktop gateway, and a REST or WebSocket API. Each trades certification effort, latency, operational fragility and fees differently, and choosing deliberately avoids building on the option that is easiest on day one and hardest to run.

                ## Milestones
                1. Each access method listed with setup effort, fees, supported order types, limits and operational needs.
                2. Hands-on notes from a short sandbox test of the two leading options.
                3. A decision recorded with what would make you revisit it.
                4. The losing option's main advantage noted so it is not forgotten.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least two access methods for the venue on cost, effort, order types and operations, with a revisit condition."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every access method the broker offers and their fees"
                - "Run a short sandbox test of the two leading options"
                - "Score each on effort, order types, limits and running cost"
                - "Record the decision and what would make you revisit it"
            - name: Gateway order validation and hard limits
              description: |-
                ## Purpose
                Any bug that sends a quantity in units instead of lots, or a price in the wrong currency, should die in your gateway, not at the exchange. Static checks on every outbound order (instrument allowed, quantity and notional caps, price within a band of the last trade, orders per second) are the last line between a code error and a real position.

                ## Milestones
                1. Written limits per instrument and per account for quantity, notional, price band and message rate.
                2. Every outbound order checked against the limits in the gateway, with rejects logged.
                3. Limits stored in configuration with a change record, not scattered in code.
                4. A test that fires an oversized order and a far-from-market price and sees both blocked.
                5. A written stop rule: repeated limit breaches halt the strategy until a human reviews them.

                ## Notes
                These checks complement, not replace, your account-level risk rules and kill switch. Keep them simple, fast and impossible to bypass from strategy code.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The gateway blocks a test order breaching each written limit, and the limits live in a versioned configuration file with a change record."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write quantity, notional, price band and rate limits for each instrument"
                - "Check every outbound order against the limits in the gateway"
                - "Test that oversized and off-market orders are blocked"
                - "Review gateway limits against current position sizing rules @recurring(monthly:17)"
            - name: Unknown order state policy after a disconnect
              description: |-
                ## Purpose
                The most dangerous moment in order handling is a timeout with no answer: the order may be live, filled or never received. A written policy that marks such orders unknown, blocks new orders on that instrument and queries the broker before doing anything else prevents the double order that a quick resend causes.

                ## Milestones
                1. An explicit unknown state for any order sent without a confirmed response.
                2. New orders on the affected instrument blocked while any order there is unknown.
                3. A resolution routine that queries open orders and executions by client order ID.
                4. A time limit after which unresolved orders page a human and the strategy halts.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A test that drops the connection after sending an order shows the order marked unknown, new orders blocked and state resolved by query before trading resumes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add an unknown state for orders without a confirmed response"
                - "Block new orders on an instrument while any order there is unknown"
                - "Resolve unknown orders by querying with the client order ID"
                - "Test the policy by cutting the connection right after an order is sent"
            - name: Separating research, paper and live environments
              description: |-
                ## Purpose
                Sending a live order that should have gone to the sandbox is a cliché because it is so easy: one environment variable, one copied config file. Separate credentials, accounts, config files and an unmistakable live flag make it hard to send a real order by accident and easy to see which environment a process is in.

                ## Milestones
                1. Separate credentials and accounts for research, paper and live, with no key shared between them.
                2. The live environment requiring an explicit flag and a startup confirmation.
                3. Every log line and dashboard showing which environment produced it.
                4. A test proving a sandbox process cannot load live credentials.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Research, paper and live use separate credentials and configs, and a test confirms a non-live process cannot load live credentials."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check whether any key or config is shared across environments"
                - "Issue separate credentials for research, paper and live"
                - "Require an explicit live flag and startup confirmation"
                - "Tag every log line with its environment"
            - name: Hosting and network path for the gateway
              description: |-
                ## Purpose
                Running the gateway on a laptop that sleeps, or on a cloud host whose IP changes on restart, breaks allowlists and sessions in ways that look like broker faults. Choosing a host with a stable address, a region near the broker's endpoints, monitoring and a restart policy suits most strategies that are not latency sensitive.

                ## Milestones
                1. Requirements written: uptime, static IP, region, cost and who can access the host.
                2. Two or three hosting options compared, including the cost of a standby.
                3. The gateway moved to the chosen host with a static IP registered with the broker.
                4. Round-trip time to the broker's endpoints measured and recorded as a baseline.

                ## Notes
                If your strategy's edge depends on milliseconds, this is the wrong project. Most personal and small-fund strategies need reliability, not speed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The gateway runs on a chosen host with a static IP registered with the broker, and a baseline round-trip time is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write uptime, address and cost requirements for the gateway host"
                - "Compare two or three hosting options and their standby costs"
                - "Register the chosen host's static IP with the broker"
                - "Measure and record round-trip time to the broker's endpoints"
            - name: Order throttling and request queue design
              description: |-
                ## Purpose
                When a strategy wants to send forty orders and the limit is ten a second, something has to decide what waits. A token bucket per limit, with cancels and risk-reducing orders allowed to jump the queue, keeps the connection inside its limits without trapping you in a position you are trying to exit.

                ## Milestones
                1. A queue in front of the broker connection that enforces each rate limit locally.
                2. Priorities defined: cancels and risk-reducing orders first, new entries last.
                3. Queue depth and wait times logged and alerted when they exceed a threshold.
                4. A burst test showing no request exceeds the broker's limit.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A burst test of at least twice the rate limit shows the queue staying within the limit while cancels are sent first."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Implement a token bucket for each applicable rate limit"
                - "Give cancels and risk-reducing orders priority in the queue"
                - "Log queue depth and wait time per request"
                - "Run a burst test at twice the rate limit in the mock broker"
            - name: Migrating from one broker to another
              description: |-
                ## Purpose
                Brokers change pricing, drop markets or shut down their API, and a forced migration under a deadline is where adapter design is tested. Running the new broker in parallel on paper, mapping every difference and moving positions in a planned order makes the switch boring, which is the goal.

                ## Milestones
                1. A list of every difference between the brokers in order types, limits, mappings and reports.
                2. The new adapter passing the same contract tests as the old.
                3. Both brokers run in parallel on paper for an agreed period with results compared.
                4. Positions and open orders moved in a planned sequence, and the old keys revoked.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new broker adapter passes the shared contract tests, a parallel paper run is compared, and the old broker's keys are revoked after cutover."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every difference between the old and new broker's APIs"
                - "Run the contract tests against the new broker adapter"
                - "Run both brokers in parallel on paper and compare results"
                - "Revoke the old broker's keys once positions have moved"
            - name: Broker FIX conformance certification
              description: |-
                ## Purpose
                Before a broker or exchange turns on a production FIX session, most will run you through a conformance test: logons, resends, order scenarios and rejects scripted by their onboarding team. Preparing each scenario in advance and running a dress rehearsal against your own test acceptor turns a stressful call into a single sitting.

                ## Milestones
                1. The broker's certification script obtained and every scenario mapped to your code.
                2. Each scenario rehearsed against a local acceptor and the broker's test environment.
                3. The certification session booked and passed.
                4. Production session details, IPs and sequence reset times recorded in the runbook.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The broker has confirmed in writing that FIX conformance testing passed, and production session details are in the runbook."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Ask the broker's onboarding team for the certification script"
                - "Map each scenario to the code path that handles it"
                - "Rehearse every scenario in the broker's test environment"
                - "Book the certification session with the onboarding team"
            - name: First live order with minimum size
              description: |-
                ## Purpose
                The first production order is the moment every assumption about environments, mappings and limits meets reality. Sending one deliberately small order, at a quiet time, with a checklist and a rollback ready, proves the live path end to end while the cost of being wrong is tiny.

                ## Milestones
                1. A go-live checklist covering credentials, environment flag, gateway limits, reconciliation and the stop rule.
                2. One minimum-size limit order sent, acknowledged and cancelled or filled in production.
                3. The order reconciled against the broker's records the same day.
                4. A written go or no-go for scaling up, based on the checklist results.

                ## Notes
                Start from the **Operational checklist** template. Use only capital you can afford to lose, and keep the first week at minimum size whatever the result.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One minimum-size production order is logged, reconciled with the broker the same day, and followed by a written go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the go-live checklist and the rollback steps"
                - "Pick a quiet time and the smallest order size the venue allows"
                - "Send one live limit order and watch every message"
                - "Reconcile the order with the broker and record the go or no-go"
            - name: API version migration before a sunset date
              description: |-
                ## Purpose
                When a broker announces that a version of its API will be switched off, the date does not move, and the work always takes longer than the notice suggests. Treating the migration as a dated project with a test plan and a cutover well before the sunset avoids a forced switch on the last day.

                ## Milestones
                1. The sunset date and every affected endpoint or message recorded.
                2. Code changes made behind a configuration switch.
                3. The new version run in the sandbox and then in parallel with the old where allowed.
                4. Cutover completed at least two weeks before the sunset date.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Production runs on the new API version at least two weeks before the published sunset date, with the old version switched off in config."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record the sunset date and every affected endpoint"
                - "Make the changes behind a configuration switch"
                - "Run the new version in the sandbox with the replay tests"
                - "Cut over in production and confirm with a reconciliation"
            - name: Broker outage and failover drill
              description: |-
                ## Purpose
                Outages happen at every broker, and the question is whether you can see your positions, cancel orders and flatten by another route when the API is down. A yearly drill (API unreachable, open orders, a position to manage) tests the phone desk number, the web platform login and the runbook while nothing is at stake.

                ## Milestones
                1. A runbook for a broker outage: phone desk, web platform, who calls and what to cancel.
                2. The drill run in the sandbox or on paper with the API deliberately cut off.
                3. Time to see positions and cancel orders by the fallback route recorded.
                4. Gaps found in the drill fixed and the runbook updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated drill record shows positions viewed and orders cancelled through a non-API route, with the time taken and runbook fixes noted."
                cadence: cyclic
              tasks:
                - "Find and save the broker's trading desk number and web platform address"
                - "Write the outage runbook with who calls and what gets cancelled"
                - "Run the broker outage drill with the API cut off @recurring(yearly)"
                - "Fix the gaps the drill found and update the runbook"
            - name: Exchange test weekend participation
              description: |-
                ## Purpose
                Exchanges and some brokers run test sessions before major changes: new matching engines, symbology changes, tick size regimes or failover to a backup site. Taking part, or at least running your adapter against the published test environment, finds breaking changes on a weekend rather than at the next open.

                ## Milestones
                1. The venue's test session calendar and registration process found.
                2. Your participation registered and test credentials obtained.
                3. The adapter run through the venue's published test scenarios.
                4. Any issues found fixed before the production change date.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The adapter has been run through a venue's test session or test environment before a production change, with results recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the venue's calendar of test sessions and production changes"
                - "Register for the next relevant test session"
                - "Run the adapter through the published test scenarios"
                - "Log and fix every issue before the production change date"
            - name: Year-end archive of order messages and API records
              description: |-
                ## Purpose
                Order records may have to be kept for years, for your regulator, your auditor or simply your own disputes with a broker, and logs on a running server are not an archive. Packing each year's raw messages, reconciliations and broker statements into a verified, read-only archive closes the year cleanly.

                ## Milestones
                1. The record-keeping duties that apply to you checked with the broker or a compliance adviser.
                2. A year's raw messages, reconciliation reports and broker statements packed into a read-only archive.
                3. Checksums recorded and a test restore done.
                4. The archive stored in two places with access limited to named people.

                ## Notes
                Start from the **Compliance control** template. Retention rules differ by country and account type, so confirm yours rather than guessing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A read-only archive of the year's order messages, reconciliations and statements exists in two places with checksums and a tested restore."
                cadence: cyclic
              tasks:
                - "Confirm the record retention period that applies to your account"
                - "Build the year-end archive of messages, reconciliations and statements @recurring(yearly)"
                - "Record checksums and test a restore from the archive"
                - "Store a second copy with access limited to named people"
            - name: Solo engineer connecting a personal broker account
              description: |-
                ## Purpose
                For an engineer trading their own account, the temptation is to wire a script straight to production on a Sunday afternoon. Following a small, staged plan (sandbox, gateway limits, paper period, minimum size live) with a monthly look at logs and costs keeps a side project from becoming an expensive one.

                ## Milestones
                1. A written note of the maximum capital at risk, using only money you can afford to lose.
                2. A trading-only key with no withdrawal rights and IP allowlisting.
                3. Gateway limits set to the smallest sizes the venue allows for the first month.
                4. A monthly review of fills, fees, rejects and incidents, with a decision to continue, change or stop.

                ## Notes
                Your broker's terms may restrict automated trading on retail accounts. Read them before you write any code.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A personal setup runs with a written capital cap, a trade-only key, minimum-size gateway limits and monthly review notes for three months."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down the maximum capital you are willing to lose"
                - "Read your broker's terms on automated trading for retail accounts"
                - "Create a trade-only key with no withdrawal rights"
                - "Review fills, fees, rejects and incidents for the month @recurring(monthly:28)"
            - name: First 90 days as a connectivity engineer
              description: |-
                ## Purpose
                Joining a trading team as the person who owns broker connections means inheriting sessions, quirks and undocumented fixes from whoever came before. A 30, 60 and 90 day plan that starts with reading logs and runbooks, then shadowing incidents, then owning one connection end to end, builds trust before you change anything.

                ## Milestones
                1. By day 30: every broker connection, its owner and its runbook listed, and one session shadowed live.
                2. By day 60: one on-call shift handled with a buddy and one runbook improved.
                3. By day 90: one connection owned end to end, including its next certification or migration.
                4. A list of the top three risks you would fix first, agreed with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Change nothing in production in the first month unless an incident forces it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 30, 60 and 90 day plan is agreed with your manager, and at day 90 you own one connection end to end with its runbook updated."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every broker connection with its owner and runbook"
                - "Shadow one live session and one incident with the current owner"
                - "Ask the agent to summarise last year's incident log into recurring themes"
                - "Agree the top three connectivity risks with your manager"
            - name: Open-source broker connector as a portfolio project
              description: |-
                ## Purpose
                Students and engineers moving into quant development need evidence that they understand order handling, not just pandas. A small, well-tested open-source connector for a broker or exchange sandbox, with a state machine, reconnection logic and a mock server, is a concrete thing to discuss in an interview.

                ## Milestones
                1. A public repository with a connector for one broker or exchange sandbox.
                2. An order state machine, reconnection logic and rate limiting, each with tests.
                3. A mock server and continuous integration running the test suite.
                4. A README explaining the design choices and known limits, with no keys in the history.

                ## Notes
                Start from the **Portfolio piece** template. Check the broker's API terms allow publishing a client before you make it public.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public repository holds a tested connector with a state machine, reconnection logic, a mock server and a design README, and no secrets in its history."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick one broker or exchange with a free public sandbox"
                - "Check the API terms allow publishing a client library"
                - "Build the state machine and reconnection logic with tests"
                - "Write a README on design choices and known limits"
            - name: Executing broker onboarding for a small fund
              description: |-
                ## Purpose
                A small fund connecting to its first executing or prime broker faces forms, legal agreements, FIX onboarding sheets, IP allowlists, drop copy set-up and allocation rules all at once. Running the onboarding as a phased plan with a tracker keeps the technical work moving while legal and operations do their parts.

                ## Milestones
                1. A tracker of every onboarding item across legal, operations and technology, each with an owner.
                2. FIX onboarding forms completed with session details, IPs and required tags.
                3. Drop copy and allocation set-up agreed with the broker.
                4. Conformance passed and the first production order reconciled.

                ## Notes
                Agreements and regulatory questions belong with the fund's lawyers and compliance officer. Engineering owns the technical sections only.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An onboarding tracker shows every item closed, conformance passed and the first production order reconciled with the broker."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Request the broker's technical onboarding pack"
                - "Build a tracker of legal, operations and technical items with owners"
                - "Complete the FIX onboarding forms with session and IP details"
                - "Agree drop copy and allocation set-up with the broker"
            - name: Connectivity handover pack before leave or departure
              description: |-
                ## Purpose
                When the one engineer who understands the broker connection goes on holiday, every quirk becomes an outage risk. A handover pack (diagram, runbooks, credential calendar, open issues and a walkthrough recorded with a colleague) means the connection survives your absence and keeps the team's trust.

                ## Milestones
                1. Runbooks for start of session, reconnection, outages and credential rotation reviewed and current.
                2. A walkthrough with a named colleague who then handles one session alone while you watch.
                3. Open issues and upcoming deadlines listed with their status.
                4. Access granted to the colleague through the normal process, not by sharing keys.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A named colleague has run one session alone using the handover pack, with access granted properly and no shared keys."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a handover outline from the runbooks and open tickets"
                - "Walk a named colleague through every runbook"
                - "Watch the colleague run one session alone"
                - "Review the handover pack with the colleague @recurring(quarterly)"
            - name: FIX session recovery, sequence resets and gap fills
              description: |-
                ## Purpose
                A FIX session that reconnects with mismatched sequence numbers can either recover cleanly through resend requests and gap fills, or replay stale orders and duplicate fills if handled carelessly. Mastering resend handling, PossDupFlag, sequence reset modes and the broker's daily reset schedule is the specialist core of FIX connectivity.

                ## Milestones
                1. Resend request, gap fill and sequence reset handling implemented and documented.
                2. Possible duplicates detected and never treated as new orders or new fills.
                3. The broker's sequence reset schedule and rules recorded in the runbook.
                4. Recovery scenarios rehearsed against a test acceptor, including a lost message store.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Tests show the session recovering from a sequence gap, a duplicate resend and a lost message store without duplicate orders or fills."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the broker's rules on resends and sequence resets"
                - "Implement handling for resend requests and gap fills"
                - "Reject possible duplicates as new orders or fills"
                - "Rehearse recovery from a deleted message store against a test acceptor"
            - name: Drop copy feed as an independent check
              description: |-
                ## Purpose
                A drop copy is a separate feed of every execution on your account, sent to a different session from the one that sent the orders. Comparing it with your order session in near real time catches fills your main session missed and trades made from another route, long before the end-of-day reconciliation.

                ## Milestones
                1. A drop copy session requested and connected separately from order entry.
                2. Drop copy executions matched to order session fills in near real time.
                3. Unmatched executions alerting within a set number of minutes.
                4. Weekly match statistics reviewed for drift.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A drop copy session runs separately from order entry, unmatched executions alert within a set time, and weekly match rates are recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the broker whether drop copy is available and at what cost"
                - "Connect the drop copy on a separate session and host"
                - "Alert on any execution not matched within a set time"
                - "Review drop copy match rates for the week @recurring(weekly:thu)"
            - name: Crypto exchange integration quirks and safeguards
              description: |-
                ## Purpose
                Crypto venues run around the clock, change precision and minimum notional rules without much notice, and often bundle trading and withdrawal on the same key. Handling their specifics (per-symbol precision filters, self-trade prevention modes, weight-based rate limits, maintenance pauses and withdrawal-disabled keys) is its own specialism.

                ## Milestones
                1. Per-symbol precision, minimum size and minimum notional rules fetched from the exchange and enforced before sending.
                2. Self-trade prevention mode chosen and set on every order.
                3. Weight-based rate limits tracked from response headers.
                4. Keys created with withdrawals disabled and IP allowlisting on, confirmed in the exchange's settings.
                5. A 24-hour operating plan covering who watches the connection when you sleep, or a rule that the strategy halts.

                ## Notes
                Counterparty risk on an exchange is real. Keep only the balance the strategy needs on the venue, and check the exchange's standing with the regulator in your country.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The adapter enforces each symbol's precision and minimum notional, sets self-trade prevention, tracks rate weight and uses withdrawal-disabled keys."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Fetch the exchange's per-symbol trading rules into the mapping table"
                - "Round prices and sizes to each symbol's precision before sending"
                - "Set a self-trade prevention mode on every order"
                - "Confirm withdrawals are disabled on every trading key"
---

# Broker and Exchange API Integration

Broker and exchange integration is the plumbing between a strategy's decision and an order a venue will accept: sessions, authentication, order types, acknowledgements, fills, rejects and the awkward moments when the connection drops with orders in flight. This area is for engineers building that link, whether for a personal account, a small fund or a trading team. It runs from foundations (a broker shortlist, a sandbox, secrets, an order state machine, client order IDs, symbol mapping, clocks and logs), through the daily and monthly routines that keep a connection healthy, the FIX, REST and WebSocket skills underneath, design decisions and improvements, dated events such as certification and the first live order, setups for different situations, and specialist work on session recovery, drop copies and crypto venues.

The rhythms are a start-of-session check and an end-of-day reconciliation on trading days, weekly reviews of rejects, rate limit headroom and clock drift, monthly checks of the broker's changelog, session calendars, mappings and dependencies, and quarterly and yearly credential rotation, recovery drills and log archives. Every connection carries hard order limits at the gateway and a written stop rule for connectivity faults, and since most strategies fail out of sample, the connection should make it cheap to stop, not easy to trade more. Nothing here is trading, investment or legal advice, so check broker terms and regulatory duties with the broker and a qualified adviser. The Vendor, Operational checklist, Risk register, Compliance control, Onboarding 30/60/90 and Portfolio piece templates pair with several projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
