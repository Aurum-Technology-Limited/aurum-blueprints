---
id: product-management.enterprise-feature-readiness
name: Enterprise Feature Readiness
description: "Enterprise readiness for product teams and founders: gap evidence from lost deals, single sign-on, SCIM, roles, audit logs and admin controls, plus questionnaire answers, contract commitments and renewal checks."
category: business
version: 1.0.0
tags: [product-management, enterprise-feature-readiness, team, enterprise, founder, single-sign-on, audit-logs, admin-controls]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - product-spec
    - metrics-log
    - risk-register
    - reading-queue
    - purchase-decision
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Enterprise Feature Readiness
          description: "Building the features large customers require before they can buy, such as single sign-on, permissions, audit logs and admin controls."
          projects:
            - name: Enterprise readiness gap assessment
              description: |-
                ## Purpose
                Before building anything for large customers, you need an honest picture of what the product lacks compared with what enterprise buyers routinely require. Scoring the product against a standard list (single sign-on, provisioning, roles, audit logs, admin console, data controls, uptime commitments, accessibility) turns a vague sense of not being ready into a ranked set of gaps that sales, engineering and leadership can all see. It also stops the loudest recent deal from setting the whole agenda.

                ## Milestones
                1. A checklist of around twenty enterprise capabilities, each defined in one sentence.
                2. Every capability scored as missing, partial or complete, with evidence for each score.
                3. The gaps ranked by how many deals or renewals each one has touched in the last year.
                4. The ranked gap list reviewed with sales and engineering leads and agreed as the starting point.

                ## Notes
                Score what a customer admin can actually do today, not what is on a branch or in a design file.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scored gap list covering at least twenty enterprise capabilities, ranked by deal impact and agreed with sales and engineering leads."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the enterprise capabilities your last three large prospects asked about"
                - "Score each capability as missing, partial or complete with a link to evidence"
                - "Rank the gaps by the number of deals and renewals each one touched"
                - "Walk sales and engineering leads through the ranked list and record changes"
                - "Re-score the gap list against the latest deal blockers @recurring(quarterly)"
            - name: Lost and stalled deal blocker review
              description: |-
                ## Purpose
                Closed-lost notes and stalled opportunities hold the clearest evidence of which missing features actually cost money, but the reasons are usually buried in vague fields such as security concerns or went with incumbent. Reading the last twelve months of large deals and interviewing two or three account executives separates genuine feature blockers from price, timing and champion problems. The result is a revenue figure next to each gap, which is what wins engineering time.

                ## Milestones
                1. Every large deal lost or stalled in the last twelve months listed with its stated reason.
                2. Each deal tagged as feature blocker, partial blocker or unrelated, after checking notes or asking the account owner.
                3. A total of blocked pipeline value calculated for each missing capability.
                4. Three deals written up as short case notes that show the blocker in the buyer's own words.

                ## Notes
                Sales notes overstate feature gaps because a missing feature is an easy reason to record. Ask the account owner what the buyer said, not what they suspect.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of lost and stalled large deals from the last twelve months, each tagged by blocker type, with blocked pipeline value totalled per missing capability."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export large deals lost or stalled in the last twelve months from the CRM"
                - "Tag each deal as feature blocker, partial blocker or unrelated"
                - "Interview three account executives about deals lost on security or admin needs"
                - "Total the blocked pipeline value for each missing capability"
                - "Pull newly closed-lost deals tagged security or admin into the list @recurring(monthly:16)"
            - name: Requirements matrix from past security questionnaires
              description: |-
                ## Purpose
                Security questionnaires and procurement checklists from prospects are long, repetitive and full of product requirements hidden among policy questions. Collecting every questionnaire from the last two years and pulling out the product questions (does the product support SAML, can admins export audit logs, can data be deleted on request) shows which requirements appear in nearly every deal and which are rare. That frequency is a better guide than any single customer's wish list.

                ## Milestones
                1. All security questionnaires and vendor assessments from the last two years gathered in one folder.
                2. Product capability questions separated from policy, legal and infrastructure questions.
                3. A matrix listing each product requirement with how many questionnaires asked it and the current answer.
                4. The top fifteen requirements marked as must have, with the current answer checked by engineering.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A requirements matrix built from at least ten past questionnaires, showing frequency and current answer for every product capability question."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask sales engineering for every security questionnaire completed in two years"
                - "Separate product capability questions from policy and legal ones"
                - "Count how often each product requirement appears across the questionnaires"
                - "Ask the agent to group near-duplicate questions into single requirements"
                - "Have engineering confirm the current answer for the top fifteen requirements"
            - name: Enterprise buyer and admin persona map
              description: |-
                ## Purpose
                Enterprise deals involve people who never use the product day to day: the IT administrator who rolls it out, the security reviewer who can veto it, procurement, and the executive sponsor. Each wants different evidence, and features designed only for end users leave the admin and the reviewer unconvinced. A one-page map of these roles, what they ask and what they fear, gives the team a shared picture of who enterprise features are really for.

                ## Milestones
                1. Four to six buying and administering roles described with their main question and their main risk.
                2. Each role linked to real people in at least two recent deals.
                3. The product capabilities each role checks listed beside their description.
                4. The map shared with design, engineering and sales and used in at least one spec review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A persona map of at least four enterprise buying and admin roles, each tied to named contacts in two real deals and referenced in a spec review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List everyone who joined the last two enterprise sales calls by role"
                - "Write one paragraph per role on what they need to see before saying yes"
                - "Ask two account executives which role most often stalls a deal"
                - "Share the map in the next design and engineering spec review"
            - name: Tenant and organisation data model review
              description: |-
                ## Purpose
                Single sign-on, provisioning, roles and audit logs all assume the product knows which organisation a user belongs to, and many products grown from self-serve sign-ups do not. Users with personal accounts, duplicate workspaces for one company and invoices tied to individuals make every later enterprise feature harder. Reviewing the account model with engineering before building anything else prevents a costly rebuild halfway through the SSO work.

                ## Milestones
                1. A diagram of how users, workspaces, organisations and billing accounts relate today.
                2. The problem cases listed: users in several organisations, duplicate workspaces for one company, orphaned accounts.
                3. A target model agreed with engineering, with the organisation as the owner of users and data.
                4. A migration approach for existing accounts written and sized.

                ## Notes
                Decide early whether one person can belong to more than one organisation. Changing that answer later touches almost every enterprise feature.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target organisation data model and a sized migration approach, both agreed in writing with the engineering lead."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw today's relationships between users, workspaces, organisations and billing"
                - "Query how many companies have more than one workspace in the product"
                - "Agree with engineering whether one person can belong to several organisations"
                - "Write the migration approach for existing accounts and get it sized"
            - name: Identity provider support order decision
              description: |-
                ## Purpose
                Customers sign in through different identity providers, commonly Microsoft Entra ID, Okta or Google Workspace plus a long tail of others, and each behaves slightly differently. Deciding which providers to test and document first, based on what current and target customers actually use, keeps the first SSO release focused. It also gives sales an honest answer to the question every prospect asks.

                ## Milestones
                1. The identity provider used by each of the top fifty accounts and open large deals recorded.
                2. A ranked list of providers by number of accounts and pipeline value.
                3. Two or three providers chosen for the first release, with the rest covered by generic standards support.
                4. The decision and its reasoning shared with sales and support.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision naming the identity providers tested in the first SSO release, based on provider data from at least fifty accounts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask account managers which identity provider each top account uses"
                - "Rank providers by account count and open pipeline value"
                - "Choose the providers the first release will be tested against"
                - "Publish the supported provider list to sales and support"
            - name: Enterprise readiness definition of done
              description: |-
                ## Purpose
                Enterprise gaps often reopen because each new feature ships without permissions, audit events or admin settings, and the platform team spends the next quarter retrofitting them. A short checklist every feature must pass before release (respects roles, writes audit events, has an admin switch where needed, appears in data export and deletion) keeps the product ready for large customers by default instead of by catch-up.

                ## Milestones
                1. A checklist of six to ten enterprise criteria, each with a yes or no test.
                2. The checklist added to the spec template and the release review.
                3. Three recently shipped features scored against it to calibrate the bar.
                4. Engineering and design leads signed up to apply it to every new feature.

                ## Notes
                Start from the **Operational checklist** template. Keep it short enough that teams use it; a forty-line checklist gets skipped.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A definition of done of no more than ten enterprise criteria, added to the release review and applied to every feature shipped in the following month."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft six to ten enterprise criteria every feature must meet"
                - "Score three recently shipped features against the draft"
                - "Add the checklist to the spec template and the release review"
                - "Agree with engineering and design leads that releases wait when it fails"
            - name: Enterprise feature ownership and capacity decision
              description: |-
                ## Purpose
                Ownership of enterprise features tends to fall between teams: product squads see them as someone else's platform work, and the platform team rarely has a product manager. Without a named owner and an agreed share of engineering capacity, SSO and audit logs get started before every big deal and abandoned after it. A written decision on who owns the enterprise roadmap, and what share of capacity it gets for the next two quarters, ends the stop and start.

                ## Milestones
                1. Current enterprise work and the people doing it listed across teams.
                2. Two or three ownership options compared: a dedicated team, a shared platform team or rotating squads.
                3. An owner and a capacity share agreed with the engineering lead and the head of product.
                4. The decision recorded and announced to sales leadership.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision naming the owner of enterprise features and the share of engineering capacity reserved for them for two quarters."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every enterprise task in flight and who is doing it"
                - "Compare a dedicated team, shared platform team and rotating squads"
                - "Agree an owner and capacity share with engineering and product leads"
                - "Check actual enterprise capacity against the agreed share @recurring(quarterly)"
            - name: Single sign-on with SAML and OIDC
              description: |-
                ## Purpose
                Single sign-on is the requirement that most often appears first in enterprise security reviews, because it lets the customer control access and remove leavers in one place. Shipping SAML and OIDC support with self-serve setup, clear error messages and tested configurations for your chosen providers removes the most common blocker. It also cuts the support load on every later deal.

                ## Milestones
                1. A spec covering setup flow, metadata exchange, just-in-time account creation, error states and test plan.
                2. SSO working end to end with each chosen identity provider in a test tenant.
                3. Self-serve setup completed by at least two design partner customers without engineering help.
                4. Setup guides published for each supported provider.
                5. SSO generally available and reflected in the questionnaire answers sales uses.

                ## Notes
                Start from the **Product spec** template. The error screen when SSO fails is where most support time goes, so design it before the happy path.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "SAML and OIDC single sign-on generally available, configured self-serve by at least two customers, with setup guides for every supported provider."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Write the SSO spec covering setup, metadata, account creation and errors"
                - "Recruit two design partner customers to test SSO setup"
                - "Test sign-in end to end with each chosen identity provider"
                - "Publish a setup guide for each supported provider"
            - name: Domain verification and enforced SSO
              description: |-
                ## Purpose
                Once SSO exists, security teams ask the next question: can staff still sign in with a password, or create personal accounts with the company email? Domain verification lets a customer prove they own their email domain, claim existing accounts and require SSO for everyone on it. Without it, the customer's control has gaps, and the security reviewer will notice them.

                ## Milestones
                1. Domain verification by DNS record working for customer admins.
                2. Existing accounts on a verified domain discoverable and claimable by the admin.
                3. An enforce SSO setting that blocks password sign-in for verified domains, with a break-glass admin account.
                4. Help documentation and an in-product notice for users affected by enforcement.

                ## Notes
                Always keep a recovery route for at least one admin when SSO is enforced. A misconfigured identity provider should never lock a whole company out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Customer admins can verify a domain, claim existing accounts on it and enforce SSO, with a tested recovery route for locked-out admins."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Specify how admins prove domain ownership with a DNS record"
                - "Design the flow for claiming existing accounts on a verified domain"
                - "Define the break-glass recovery route when enforced SSO fails"
                - "Draft the notice users see when their company enforces SSO"
            - name: SCIM user and group provisioning
              description: |-
                ## Purpose
                Customers with thousands of staff add and remove people every week, and they expect their identity provider to create, update and deactivate accounts in your product automatically. SCIM provisioning means leavers lose access the moment HR records them, which is often a hard requirement in security reviews and a large saving for the customer's IT team. Group sync also lets admins map directory groups to roles instead of managing people one by one.

                ## Milestones
                1. A spec covering user create, update, deactivate, group sync and the mapping of groups to roles.
                2. Provisioning passing tests with each chosen identity provider.
                3. Deactivation cutting off access, including active sessions and API tokens, within minutes.
                4. Two customers provisioning real users through SCIM for a month without manual fixes.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "SCIM provisioning live with each chosen identity provider, with deactivation ending sessions and tokens and two customers running it for a month."
                cadence: phased
                effort_hours_estimate: "70"
              tasks:
                - "Specify which user attributes and groups SCIM will sync"
                - "Decide what happens to a deactivated user's content and sessions"
                - "Test create, update and deactivate flows with each chosen provider"
                - "Run SCIM with two customers for a month and log every manual fix"
            - name: Default roles and role-based access control
              description: |-
                ## Purpose
                Most products start with two levels, admin and member, which breaks down the moment a customer has five hundred users and wants billing staff, team leads and read-only auditors. A small set of well-designed default roles, backed by a permission model the code checks consistently, covers most enterprise needs and lays the ground for custom roles later.

                ## Milestones
                1. Every action in the product listed with who can perform it today.
                2. Four to six default roles defined in a clear permission table.
                3. Permission checks enforced on the server for every listed action, not only hidden in the interface.
                4. Existing customers migrated to the new roles with nobody losing access they need.

                ## Notes
                Hiding a button is not a permission. Security reviewers and penetration testers will call the underlying endpoint directly.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Four to six default roles live, with server-side permission checks on every action in the permission table and existing customers migrated."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List every action in the product and who can perform it today"
                - "Draft four to six default roles and a permission table"
                - "Check with engineering that every action is enforced on the server"
                - "Plan the role migration for existing customers and their admins"
            - name: Custom roles and permission sets
              description: |-
                ## Purpose
                Larger customers soon ask for roles that match their own organisation: a regional manager who sees only their region, a contractor who can edit but not export. Custom roles let admins combine permissions themselves instead of filing a ticket for every edge case. Done well, they reduce the stream of one-off role requests; done badly, they create configurations nobody can audit.

                ## Milestones
                1. The ten most requested role variations from customers collected and grouped.
                2. A permission set design that admins can combine without creating contradictions.
                3. A view showing exactly what any given role can and cannot do.
                4. Custom roles in use by at least three customers, with role-related tickets counted before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Custom roles available to admins with a readable permission summary, used by at least three customers, with role tickets compared before and after."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect the ten most requested role variations from support tickets"
                - "Group permissions into sets an admin can combine safely"
                - "Design a view that shows what any role can and cannot do"
                - "Compare role-related support tickets before and after release"
            - name: Audit log events and admin viewer
              description: |-
                ## Purpose
                When something goes wrong, a customer's security team needs to answer who did what, when and from where, and audit logs are how they do it. Defining a consistent event format covering sign-ins, permission changes, data exports and setting changes, and giving admins a searchable viewer, turns a common questionnaire no into a confident yes.

                ## Milestones
                1. A list of auditable events with a standard format: actor, action, target, time, IP address and outcome.
                2. Events written for sign-ins, role changes, exports, deletions and admin setting changes.
                3. An admin viewer with filters by user, event type and date range.
                4. A retention period for audit events agreed and documented.

                ## Notes
                Start from the **Product spec** template. Audit events must be tamper resistant and written even when the attempted action fails.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Audit events in a standard format cover sign-ins, role changes, exports, deletions and admin settings, viewable and filterable by customer admins."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Define the standard audit event format with engineering"
                - "List the actions that must write an audit event in the first release"
                - "Design the admin viewer with filters by user, event and date"
                - "Agree how long audit events are kept and document it"
            - name: Audit log export and SIEM streaming
              description: |-
                ## Purpose
                Security operations teams at large companies do not want to log into every vendor's admin console; they want events flowing into their own monitoring tools. An export endpoint and streaming to common SIEM destinations let them correlate your events with everything else they watch. For security-minded buyers this is often a condition of approval rather than a nice extra.

                ## Milestones
                1. The SIEM and log destinations used by the top twenty accounts identified.
                2. An audit export endpoint with pagination and date filters documented.
                3. Streaming to at least two common destinations working in a test tenant.
                4. One customer receiving events in their own monitoring tool for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Audit events available by export endpoint and streamed to at least two common SIEM destinations, with one customer consuming them for a month."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the top twenty accounts which security monitoring tools they use"
                - "Document the audit export endpoint with paging and date filters"
                - "Build streaming to the two most requested destinations"
                - "Confirm with one customer that events arrive correctly in their tool"
            - name: Admin console structure and settings home
              description: |-
                ## Purpose
                As enterprise settings accumulate, they end up scattered across profile pages, hidden menus and toggles only support can reach, and customer admins cannot find what they paid for. A single admin console with a clear structure (people, access, security, data, billing, integrations) makes every enterprise feature discoverable and gives future settings an obvious home.

                ## Milestones
                1. Every admin setting in the product listed with where it lives today.
                2. A console structure tested with three customer admins using a card sort or prototype.
                3. All settings moved into the console, including any that only support could change.
                4. An admin search or index page that finds any setting by name.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every admin setting is reachable from one admin console whose structure was tested with at least three customer admins."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Inventory every admin setting and where it lives today"
                - "List settings that only support staff can change on request"
                - "Test a proposed console structure with three customer admins"
                - "Move scattered settings into the console in priority order"
            - name: Session, MFA and network access policies
              description: |-
                ## Purpose
                Reviewers routinely ask whether the customer can set session timeouts, require multi-factor authentication for users outside SSO and restrict access to company networks. These controls are individually small, but together they decide whether the product passes a review at a bank or a hospital group. Bundling them into one access policy page keeps them coherent and easy to demonstrate.

                ## Milestones
                1. Session length and idle timeout settings configurable by admins.
                2. Multi-factor authentication enforceable for users who do not sign in through SSO.
                3. An IP allowlist option with a safe way to avoid locking out the admin.
                4. All access policies shown together on one admin page, with audit events for every change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Admins can set session timeouts, enforce multi-factor authentication and restrict access by IP range from one policy page, with every change audited."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the access policy questions in the last ten questionnaires"
                - "Specify session length and idle timeout settings for admins"
                - "Design the IP allowlist so the admin cannot lock themselves out"
                - "Confirm every policy change writes an audit event"
            - name: Data retention and deletion settings for admins
              description: |-
                ## Purpose
                Large customers have their own records policies and ask how long your product keeps their data, whether they can shorten it and how deletion is confirmed. Giving admins retention settings for key data types and a documented deletion process answers questionnaires directly and reduces the back and forth over contract clauses. Agree the actual retention commitments with your legal and security colleagues before building anything.

                ## Milestones
                1. The main customer data types listed with how long each is kept today.
                2. Retention settings available for the data types customers ask about most.
                3. A deletion process with confirmation that covers backups within a stated period.
                4. The retention and deletion behaviour written up for the trust centre and agreed with legal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Admin-configurable retention for the most requested data types and a documented deletion process, both agreed with legal and published."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List each customer data type and how long it is kept today"
                - "Agree retention commitments with legal and security colleagues"
                - "Specify admin retention settings for the most requested data types"
                - "Write up how deletion is confirmed, including backups"
            - name: User offboarding and content ownership transfer
              description: |-
                ## Purpose
                When someone leaves a customer company, their account must stop working immediately, but their documents, projects and automations still matter to the team. Products that delete content with the user, or leave it orphaned, generate angry tickets and shaky renewals. An offboarding flow that suspends access, transfers ownership and frees the licence handles the most frequent admin task in any large account.

                ## Milestones
                1. Every object type a user can own listed with what happens to it today when they leave.
                2. A suspend action that ends access, sessions and tokens at once.
                3. An ownership transfer step that reassigns content to a chosen colleague.
                4. Licences released automatically on deactivation, with the change visible to the billing admin.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Admins can suspend a leaver, transfer all their content to a colleague and free the licence in one flow, tested with two customers."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List every object a user can own and what happens when they leave"
                - "Design the suspend action to end sessions and tokens at once"
                - "Specify ownership transfer to a colleague the admin chooses"
                - "Test the full offboarding flow with two customer admins"
            - name: External sharing and guest access controls
              description: |-
                ## Purpose
                Enterprises want their people to work with agencies and partners without sensitive material leaking out. Controls to restrict sharing to approved domains, label guests clearly and expire guest access after a set period let a security team say yes to collaboration instead of banning the product. These requests usually arrive after the first big rollout, so plan them before they become an escalation.

                ## Milestones
                1. Current sharing paths listed, including public links, guest invites and exports.
                2. An admin setting to allow, restrict to listed domains or block external sharing.
                3. Guests visibly labelled in the interface and in audit events.
                4. Guest access expiry available with a default the admin can change.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Admins can restrict external sharing to approved domains and set guest expiry, with guests labelled in the interface and audit log."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Map every path content can take outside the customer's organisation"
                - "Design domain allow and block settings for external sharing"
                - "Label guests clearly in the interface and audit events"
                - "Choose a default expiry period for guest access"
            - name: Accessibility conformance report for procurement
              description: |-
                ## Purpose
                Public sector bodies, universities and many large companies ask for an accessibility conformance report, often in the VPAT format against WCAG criteria, before they can sign. Producing one honestly, from an audit of the key flows and with a remediation plan for the gaps, satisfies procurement and gives the team a list of real usability fixes.

                ## Milestones
                1. The key user and admin flows chosen for the audit.
                2. An accessibility audit of those flows against the WCAG level customers ask for.
                3. A conformance report completed with honest support levels and remarks.
                4. A dated remediation plan for every criterion marked as not or partially supported.

                ## Notes
                Overstating conformance is worse than admitting gaps. Buyers test, and a false report can end the relationship.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conformance report based on an audit of the key flows, published to sales with a dated remediation plan for every gap."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose the user and admin flows the audit will cover"
                - "Book an accessibility audit with an internal or external specialist"
                - "Fill in the conformance report with honest support levels"
                - "Put dated fixes for each gap into the roadmap"
                - "Refresh the conformance report after the year's major interface changes @recurring(yearly)"
            - name: Sandbox tenants for enterprise customers
              description: |-
                ## Purpose
                Admins at big accounts want to test configuration changes, SSO setups and integrations somewhere other than the live account their staff depend on. A sandbox tenant with a copy of the production configuration and no real data lets them rehearse changes safely and makes them far more willing to roll out new features. Decide early whether sandboxes are a paid add-on or part of the enterprise plan.

                ## Milestones
                1. The tests customers want to run in a sandbox collected from five admins.
                2. A sandbox design that copies configuration without copying personal data.
                3. Sandbox creation and reset available to admins without a support ticket.
                4. Sandbox limits and refresh rules documented.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Customer admins can create and reset a sandbox tenant with copied configuration and no personal data, with limits documented."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask five customer admins what they would test in a sandbox"
                - "Decide which configuration copies across and which data never does"
                - "Specify sandbox creation and reset without a support ticket"
                - "Document sandbox limits and how often it can be refreshed"
            - name: Weekly enterprise deal requirements desk
              description: |-
                ## Purpose
                Account executives hear new requirements every week and, without a regular route to product, they either promise things or escalate to the CEO. A short weekly session where sales engineers bring active deal requirements, and product answers whether each is shipped, planned, a workaround or a no, keeps answers consistent. It also gives product a live view of enterprise demand.

                ## Milestones
                1. A fixed weekly thirty-minute slot with sales engineering and the enterprise product owner.
                2. Every requirement logged with the deal, its value and the answer given.
                3. Standard answers for common requests written and reused.
                4. Eight weeks of logged requirements reviewed for patterns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly sessions held, with every deal requirement logged alongside its deal value and the answer given."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with sales engineering"
                - "Create a log with deal, value, requirement and answer columns"
                - "Review new deal requirements and agree each answer @recurring(weekly:tue)"
                - "Write standard answers for the five most common requests"
            - name: Security questionnaire answer library
              description: |-
                ## Purpose
                Each enterprise deal brings a questionnaire with hundreds of questions, and without a maintained library sales engineers rewrite the same answers, sometimes contradicting last month's. A product-owned set of approved answers for every product capability question, refreshed as features ship, cuts turnaround from weeks to days and stops outdated claims reaching buyers.

                ## Milestones
                1. Approved answers written for the product capability questions in the requirements matrix.
                2. Each answer tagged with an owner and a last-reviewed date.
                3. A rule that answers change within a week of a related feature shipping.
                4. Questionnaire turnaround time measured before and after the library.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A library of approved product answers, each with an owner and a review date under three months old, used for every questionnaire."
                cadence: rolling
              tasks:
                - "Write approved answers for the top product capability questions"
                - "Tag each answer with an owner and a last-reviewed date"
                - "Update answers affected by features shipped this month @recurring(monthly:12)"
                - "Measure questionnaire turnaround before and after the library"
            - name: Monthly enterprise readiness scorecard
              description: |-
                ## Purpose
                Leadership attention on enterprise work fades between big deals, and progress is hard to see because each feature is a long build. A monthly scorecard showing gap list status, deals blocked, questionnaire answers that moved from no to yes and adoption of shipped enterprise features keeps the investment visible and honest.

                ## Milestones
                1. Five or six scorecard measures chosen and defined.
                2. A first scorecard filled in from current data.
                3. The scorecard sent to product, engineering and sales leaders each month.
                4. Six months of scorecards showing the trend in blocked deal value.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scorecards issued, each showing gap status, blocked deal value and adoption of shipped enterprise features."
                cadence: rolling
              tasks:
                - "Choose five or six measures for the enterprise scorecard"
                - "Fill in the first scorecard from current deal and usage data"
                - "Update and send the enterprise readiness scorecard @recurring(monthly:4)"
            - name: Identity provider regression test cycle
              description: |-
                ## Purpose
                Identity providers change their consoles, certificates expire and your own releases can quietly break SSO or SCIM for one provider while the others keep working. A quarterly test cycle against each supported provider, using dedicated test tenants, catches breakage before a customer's entire company is locked out on a Monday morning.

                ## Milestones
                1. A test tenant for each supported identity provider, with credentials stored safely.
                2. A written test script covering sign-in, account creation, deactivation and group sync.
                3. The script run every quarter with results recorded.
                4. Certificate expiry dates for customer SSO connections monitored with advance warnings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly regression runs completed against every supported identity provider, with results recorded and failures fixed."
                cadence: cyclic
              tasks:
                - "Set up a test tenant for each supported identity provider"
                - "Write the test script for sign-in, provisioning and deactivation"
                - "Run the identity provider test script and record results @recurring(quarterly)"
                - "Add warnings for SSO certificates expiring in the next sixty days"
            - name: Audit event coverage check on new features
              description: |-
                ## Purpose
                Audit logs lose value quickly if new features ship without writing events, and customers notice when an incident investigation hits a blind spot. A monthly check of everything released against the audit event list catches gaps while the code is fresh and the team still remembers how it works.

                ## Milestones
                1. The features released each month pulled from release notes.
                2. Each release checked for the audit events it should write.
                3. Missing events ticketed with an owner and a target release.
                4. Three months in a row with no new feature missing its audit events.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly coverage checks run for six months, with every missing audit event ticketed and three consecutive months at full coverage."
                cadence: rolling
              tasks:
                - "Pull the list of features shipped since the last check"
                - "Check each release against the audit events it should write @recurring(monthly:19)"
                - "Ticket every missing event with an owner and target release"
            - name: Quarterly IT admin feedback calls
              description: |-
                ## Purpose
                End users and economic buyers get plenty of attention, but the IT admins who configure and support the product inside customer companies are rarely asked anything. Talking to five admins a quarter about setup pain, missing controls and the internal tickets they field finds the friction that turns a renewal into a negotiation.

                ## Milestones
                1. A list of admin contacts at the top thirty accounts.
                2. Five admin conversations held each quarter, with notes kept in one place.
                3. Themes from each round shared with the enterprise feature owner.
                4. At least one fix shipped each quarter from admin feedback.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly rounds of five IT admin conversations completed, each producing a theme summary and at least one shipped fix."
                cadence: cyclic
              tasks:
                - "Ask account managers for the admin contact at each top account"
                - "Write five questions about setup pain and missing controls"
                - "Hold five conversations with customer IT admins @recurring(quarterly)"
                - "Share the themes with the enterprise feature owner"
            - name: Large tenant performance watch
              description: |-
                ## Purpose
                A product that feels fast with twenty users can crawl for a customer with twenty thousand, especially in member lists, permission checks, search and exports. Watching the largest tenants' load times and job durations each month spots scaling problems before the customer's executive sponsor raises them in a business review.

                ## Milestones
                1. The ten largest tenants by users and data volume identified.
                2. Load times for the slowest admin and user pages measured for those tenants.
                3. A monthly review of the measures held with engineering.
                4. Every regression above an agreed threshold ticketed with an owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly performance reviews of the ten largest tenants held for six months, with every regression above the agreed threshold ticketed."
                cadence: rolling
              tasks:
                - "Identify the ten largest tenants by users and data volume"
                - "Agree a slowdown threshold that triggers a ticket"
                - "Review load times and job durations for the largest tenants @recurring(monthly:23)"
            - name: Contractual product commitments register
              description: |-
                ## Purpose
                Contracts with large customers often contain product promises (a feature by a date, an uptime figure, a data location) agreed by sales and legal and then forgotten by product. Keeping a register of every commitment, with its date and owner, prevents a missed promise surfacing for the first time at renewal or in a dispute.

                ## Milestones
                1. Every active enterprise contract reviewed for product commitments with legal or deal desk help.
                2. Each commitment recorded with the customer, date, owner and status.
                3. Commitments due in the next ninety days flagged every month.
                4. No commitment passing its date without the customer having been contacted.

                ## Notes
                Start from the **Risk register** template. Ask legal to route new commitments to product before signature, not after.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register of every product commitment in active enterprise contracts, reviewed monthly, with no commitment passing its date without customer contact."
                cadence: rolling
              tasks:
                - "Ask legal for every active enterprise contract with product terms"
                - "Record each commitment with customer, date, owner and status"
                - "Flag commitments due in the next ninety days @recurring(monthly:8)"
                - "Agree with legal that new commitments reach product before signature"
            - name: Trust centre and security documentation refresh
              description: |-
                ## Purpose
                Buyers increasingly start their review on a vendor's trust centre page, reading about SSO, encryption, retention, subprocessors and uptime before they send a questionnaire. Keeping the product sections accurate each quarter, with security and legal owning their own parts, shortens reviews and stops a prospect discovering an outdated claim.

                ## Milestones
                1. The product capability sections of the trust centre listed with owners.
                2. Each section checked against what the product does today.
                3. Changes from shipped enterprise features added within the quarter.
                4. A review date shown on each section.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Product sections of the trust centre reviewed every quarter for a year, each showing a review date under three months old."
                cadence: cyclic
              tasks:
                - "List the trust centre sections that describe product capabilities"
                - "Agree owners for each section with security and legal"
                - "Check each product section against current behaviour @recurring(quarterly)"
            - name: How SAML and OIDC sign-in really works
              description: |-
                ## Purpose
                Product managers who own SSO without understanding assertions, metadata, certificates and redirect flows end up relying on engineers for every customer call. Learning enough to read a SAML response, explain identity provider and service provider initiated sign-in, and diagnose common errors makes you useful in security reviews and support escalations.

                ## Milestones
                1. Three or four plain-language guides to SAML and OIDC worked through.
                2. A test SSO connection set up personally between a free identity provider tier and a test app.
                3. A one-page explainer written for sales engineers in your own words.
                4. Three common SSO error messages explained with their usual causes.

                ## Notes
                Start from the **Reading queue** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test SSO connection set up personally and a one-page explainer of SAML and OIDC checked by an engineer for accuracy."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect three plain-language guides to SAML and OIDC"
                - "Set up a test SSO connection using a free identity provider tier"
                - "Write a one-page explainer for sales engineers"
                - "Ask an engineer to check the explainer for mistakes"
            - name: SCIM behaviour across identity providers
              description: |-
                ## Purpose
                SCIM is a standard, but each identity provider implements it differently: attribute names, group handling, how deactivation is signalled and how retries work. Knowing these differences before the build saves weeks of bug reports from the first customers and helps you set honest expectations with their admins.

                ## Milestones
                1. The SCIM documentation for each supported provider read and summarised.
                2. A table of differences in attributes, group handling and deactivation.
                3. Known issues reported on other vendors' public help pages collected.
                4. The difference table reviewed with engineering before the build starts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of SCIM behaviour differences across every supported identity provider, reviewed with engineering before provisioning work starts."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read each supported provider's SCIM documentation"
                - "Build a table of differences in attributes, groups and deactivation"
                - "Ask the agent to summarise known SCIM issues from public help pages"
                - "Review the difference table with engineering"
            - name: Authorisation models beyond simple roles
              description: |-
                ## Purpose
                Role-based access works until customers need access by region, project, record owner or data sensitivity, at which point teams bolt on exceptions that become impossible to reason about. Understanding attribute-based and relationship-based models, and when each fits, helps you make the right call before the permission system sets hard.

                ## Milestones
                1. Role-based, attribute-based and relationship-based access explained in your own notes.
                2. Current permission requests mapped to the model each would need.
                3. Two or three products with strong permission systems studied for patterns.
                4. A short recommendation on which model the product should grow towards, discussed with engineering.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written recommendation on the product's future authorisation model, based on mapped customer requests and discussed with the engineering lead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write notes on role, attribute and relationship based access"
                - "Map current permission requests to the model each one needs"
                - "Study the permission settings of two products customers praise"
                - "Discuss a recommended model with the engineering lead"
            - name: How enterprise procurement and security review runs
              description: |-
                ## Purpose
                Founders and product managers new to enterprise are often surprised that a verbal yes is followed by months of security review, legal redlines, procurement and vendor onboarding. Learning the usual stages, who runs each and what evidence they ask for, helps you time features around real deal cycles and spot where the product slows them down.

                ## Milestones
                1. The stages of three recent enterprise deals mapped from verbal yes to signature.
                2. The documents and evidence requested at each stage listed.
                3. The stage where product gaps cause the most delay identified.
                4. A one-page guide to the buying process shared with the product team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to the enterprise buying process, built from three real deals and naming the stage where product gaps cause most delay."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map three recent enterprise deals from verbal yes to signature"
                - "List the documents requested at each stage of those deals"
                - "Ask the deal desk where product gaps cause the longest delays"
                - "Share a one-page buying process guide with the product team"
            - name: Shadowing a customer IT admin rollout
              description: |-
                ## Purpose
                Watching a customer's IT admin configure SSO, provision users and set policies in your product teaches more in two hours than months of ticket reading. Sitting in on a real rollout, with permission, shows where the setup flow confuses, which documentation they actually open and what they had to ask support.

                ## Milestones
                1. A customer about to roll out to a large group agreed to let you observe.
                2. The setup session observed, with notes on every pause and question.
                3. A list of friction points ranked by how long each held the admin up.
                4. Three fixes or documentation changes raised from the session.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One customer admin rollout observed, with a ranked list of friction points and three fixes or documentation changes raised."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask customer success for an account about to roll out to many users"
                - "Request permission to observe the admin's setup session"
                - "Note every pause, question and documentation lookup during setup"
                - "Raise three fixes or documentation changes from the session"
            - name: Roadmap commitment policy for enterprise deals
              description: |-
                ## Purpose
                Pressure to promise a feature to close a deal is constant, and unmanaged promises wreck the roadmap and the trust of the customers who were promised. A written policy on when a deal can include a roadmap commitment, who approves it, what wording is allowed and what happens if the date slips protects both the product plan and the sales team.

                ## Milestones
                1. Past deal commitments reviewed for how many were delivered on time.
                2. A policy setting the approval route, permitted wording and maximum commitment horizon.
                3. The policy agreed by the heads of product, sales and legal.
                4. Every new commitment since adoption approved under the policy.

                ## Notes
                A common default is to commit only to items already planned for the next two quarters, in wording that names the capability rather than a detailed feature list.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A roadmap commitment policy signed off by product, sales and legal, with every new deal commitment after adoption approved under it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Review past deal commitments for how many shipped on time"
                - "Draft the approval route and permitted wording for commitments"
                - "Agree the policy with the heads of product, sales and legal"
                - "Review exceptions granted under the commitment policy @recurring(quarterly)"
            - name: Build or buy the identity layer
              description: |-
                ## Purpose
                SSO, SCIM and directory sync can be built in-house or bought from identity infrastructure vendors who handle provider quirks for a fee per connection. The choice affects time to the first enterprise deal, ongoing cost per customer and how much control you keep. Comparing the options with real numbers prevents a decision made by whichever engineer feels strongest.

                ## Milestones
                1. Requirements for SSO, SCIM and admin setup listed on one page.
                2. Build effort and ongoing maintenance estimated by engineering.
                3. Two or three vendor options priced at current and projected connection counts.
                4. A decision recorded with cost, time to market and lock-in risks.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded build or buy decision for SSO and provisioning, comparing in-house estimates with at least two priced vendor options."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write one page of identity layer requirements"
                - "Get a build and maintenance estimate from engineering"
                - "Price two identity vendors at current and projected connection counts"
                - "Record the decision with cost, timing and lock-in risks"
            - name: Admin-controlled release of new features
              description: |-
                ## Purpose
                Organisations with thousands of staff train people, update internal guides and brief help desks before changes reach their users, so surprise interface changes generate complaints and escalations. Letting admins preview new features, delay rollout for a set period or switch selected features off gives them control without freezing the product for everyone else.

                ## Milestones
                1. The types of change admins most want warning about collected from five customers.
                2. A preview setting that lets admins try new features before their users.
                3. A delay option with a maximum period agreed with engineering.
                4. Advance notice of significant changes sent to admins through the console.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Admins can preview new features and delay significant changes for an agreed maximum period, with advance notices delivered in the console."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask five customer admins which changes they need warning about"
                - "Design a preview setting admins can turn on for themselves"
                - "Agree the maximum delay period with engineering"
                - "Specify how advance change notices reach admins in the console"
            - name: Live security review call with a prospect
              description: |-
                ## Purpose
                Many large deals reach a call where the customer's security team questions your product and engineering leads directly. Preparing a demo of the security and admin features, answers to the likely hard questions and a clear split of who covers what turns a nervous hour into evidence that the product is ready.

                ## Milestones
                1. The prospect's questionnaire read and the hardest open questions listed.
                2. A demo path covering SSO, roles, audit logs and data controls rehearsed.
                3. Roles agreed: product for features, engineering for architecture, security for policy.
                4. Follow-up answers sent within three working days of the call.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A security review call held with a rehearsed demo and agreed roles, and all follow-up answers sent within three working days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the hardest open questions from the prospect's questionnaire"
                - "Rehearse a demo of SSO, roles, audit logs and data controls"
                - "Agree who answers feature, architecture and policy questions"
                - "Send follow-up answers within three working days of the call"
            - name: Enterprise pilot with written success criteria
              description: |-
                ## Purpose
                Pilots with large customers drift for months when nobody wrote down what success looks like, and a pilot without criteria usually ends in a polite no. Agreeing three to five measurable criteria with the customer champion, including the admin and security checks they must pass, and reviewing them weekly gives the pilot a clear finish and a decision.

                ## Milestones
                1. Three to five success criteria agreed in writing with the customer champion.
                2. Admin and security setup completed in the first week of the pilot.
                3. Weekly check-ins held with progress shown against each criterion.
                4. A final readout delivered with evidence for each criterion and a decision requested.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot completed against three to five written criteria, ending in a readout and a recorded buy or no-buy decision from the customer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft three to five measurable pilot success criteria"
                - "Agree the criteria in writing with the customer champion"
                - "Hold the weekly pilot check-in with the customer champion @recurring(weekly:thu)"
                - "Deliver a final readout with evidence against each criterion"
            - name: Enterprise feature enablement for sales engineers
              description: |-
                ## Purpose
                Shipping an enterprise feature does nothing for revenue if sales engineers cannot demo it, configure it in a trial or answer the follow-up questions. A focused enablement session for each major release, with a demo script, a test tenant and the updated questionnaire answers, turns engineering work into deal evidence within weeks.

                ## Milestones
                1. A demo script and a test tenant ready for the feature.
                2. A forty-five minute session delivered to sales engineers and account executives.
                3. Updated questionnaire answers and help articles linked in the session notes.
                4. Every sales engineer able to run the demo, checked in a short practice session.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An enablement session delivered for the latest enterprise release, with every sales engineer having run the demo once in practice."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a demo script for the newly shipped enterprise feature"
                - "Prepare a test tenant the sales engineers can use"
                - "Run the enablement session for sales engineers and account executives"
                - "Watch each sales engineer run the demo once"
            - name: Renewal readiness review for a top account
              description: |-
                ## Purpose
                A large renewal is where unmet enterprise needs surface, often as a security re-review or a competitor's offer. Reviewing the account three months ahead, checking promised features, open admin tickets, adoption of enterprise controls and the latest questionnaire, gives the account team time to fix problems instead of discounting.

                ## Milestones
                1. Contract commitments and their status confirmed for the account.
                2. Open admin and security tickets listed with owners.
                3. Adoption of SSO, SCIM and other enterprise controls measured for the account.
                4. A short readiness summary shared with the account team three months before renewal.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A readiness summary delivered for each top account at least three months before renewal, covering commitments, tickets and enterprise control adoption."
                cadence: cyclic
              tasks:
                - "List top accounts renewing in the next four months @recurring(monthly:27)"
                - "Check contract commitments and their status for the account"
                - "Measure the account's use of SSO, SCIM and admin controls"
                - "Share a readiness summary with the account team"
            - name: Founder's first enterprise deal sprint
              description: |-
                ## Purpose
                For a founder, the first large prospect often arrives before the product has SSO, audit logs or a security page, and the temptation is to build everything at once. A four to eight week sprint covering only what this buyer's review will check, plus honest written answers for the rest, can win the deal without derailing the roadmap or the small team.

                ## Milestones
                1. The buyer's security and procurement requirements obtained in writing.
                2. Requirements split into must have for signature, acceptable as a commitment, and not needed.
                3. The must-have items shipped or covered by a workaround the buyer has accepted.
                4. A short security overview and questionnaire answers sent to the buyer.

                ## Notes
                Buying an identity layer rather than building it is often the fastest route for a small team; compare the options before writing any SSO code.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first enterprise buyer's must-have requirements met or covered by an accepted workaround, and a security overview sent before their review deadline."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the buyer for their security and procurement requirements in writing"
                - "Sort the requirements into must have, can commit and not needed"
                - "Ship or find a workaround for each must-have item"
                - "Write a two-page security overview for the buyer"
            - name: Moving up-market from self-serve customers
              description: |-
                ## Purpose
                Teams whose growth came from self-serve sign-ups face a different set of needs when the company decides to sell to larger accounts: organisation ownership, invoicing, admin controls and slower, consensus-driven buying. Planning the shift deliberately, protecting the self-serve experience while adding enterprise layers, avoids a product that is too heavy for small teams and too light for large ones.

                ## Milestones
                1. The current self-serve experience documented as something enterprise work must not slow.
                2. The enterprise layers needed listed and sequenced against the gap assessment.
                3. A rule agreed for which enterprise settings are hidden from small accounts.
                4. Self-serve conversion and activation tracked through the first two enterprise releases.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sequenced plan for enterprise layers with a rule for hiding them from small accounts, and self-serve conversion tracked through two enterprise releases."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down the self-serve moments enterprise work must not slow"
                - "Sequence the needed enterprise layers against the gap list"
                - "Agree which enterprise settings small accounts never see"
                - "Compare self-serve conversion before and after each enterprise release"
            - name: Inheriting enterprise commitments as a new product manager
              description: |-
                ## Purpose
                Product managers joining an enterprise-facing team often inherit half-built SSO work, promises made by a predecessor and a queue of escalations from the largest accounts. Spending the first month learning what was promised, to whom and by when, before changing any plans, protects relationships and earns the credibility to reset expectations later.

                ## Milestones
                1. Every inherited commitment, escalation and in-flight enterprise project listed.
                2. Introductory calls held with the account managers of the five largest accounts.
                3. Each commitment marked as on track, at risk or needing renegotiation.
                4. A first-month summary shared with your manager, naming the commitments you propose to reset.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every inherited enterprise commitment with its status, and a first-month summary agreed with your manager."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask your manager and predecessor for every open enterprise promise"
                - "Meet the account managers of the five largest accounts"
                - "Mark each commitment on track, at risk or needing renegotiation"
                - "Write a first-month summary for your manager"
            - name: Merging admin models after an acquisition
              description: |-
                ## Purpose
                After an acquisition, customers of both products often end up with two admin consoles, two role models and two SSO setups, and their IT teams ask when that will be fixed. Mapping the two models, agreeing a target and planning the migration in customer-friendly stages turns a source of renewal risk into a reason to consolidate.

                ## Milestones
                1. Both products' roles, settings and identity setups mapped side by side.
                2. Customers using both products identified and their admins contacted.
                3. A target admin model agreed by both product teams.
                4. A staged migration plan with customer notice periods published internally.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target admin model agreed by both product teams and a staged migration plan covering every customer that uses both products."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Map both products' roles, settings and identity setups side by side"
                - "List customers using both products and their admin contacts"
                - "Agree a target admin model with both product teams"
                - "Draft a staged migration plan with customer notice periods"
            - name: Customer-managed encryption keys
              description: |-
                ## Purpose
                Some of the most security-conscious buyers, in finance, government and healthcare, ask to hold their own encryption keys so they can revoke your access to their data. Customer-managed keys are expensive to build and operate, so the work starts with evidence of demand, a clear scope for which data is covered and a plan for what happens when a customer revokes a key.

                ## Milestones
                1. Deals and accounts requesting customer-managed keys listed with their value.
                2. The data covered and not covered by customer keys defined in writing.
                3. Key revocation behaviour and customer communication designed with security and engineering.
                4. A go or no-go decision recorded, and if go, a pilot agreed with one customer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or no-go decision on customer-managed keys, backed by deal evidence and a written revocation design."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List deals and accounts that asked for customer-managed keys"
                - "Define which data customer keys would and would not protect"
                - "Design revocation behaviour with security and engineering"
                - "Record a go or no-go decision with the evidence behind it"
            - name: Parent organisations and delegated administration
              description: |-
                ## Purpose
                Global groups want one parent account with subsidiaries or regional divisions underneath, each with its own admins, policies and billing, while central IT keeps oversight. Supporting this hierarchy is one of the last big structural features enterprise buyers ask for, and it depends on the organisation model being right first.

                ## Milestones
                1. Three or four global customers interviewed about their structure and admin split.
                2. A hierarchy design showing which settings inherit from the parent and which divisions can override.
                3. Delegated admin roles defined for division admins.
                4. A cross-division reporting view specified for central IT.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A hierarchy design with inheritance rules and delegated admin roles, validated with at least three global customers."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Interview three global customers about their structure and admin split"
                - "Decide which settings inherit from the parent and which divisions override"
                - "Define the roles division admins need"
                - "Specify the cross-division reporting view for central IT"
            - name: Enterprise readiness across several product lines
              description: |-
                ## Purpose
                Companies with several products often discover that each one built its own SSO, roles and audit logs, so customers buying the suite face inconsistent controls. Coordinating shared standards, a common identity service and a joint readiness scorecard across product lines lets the suite pass one security review instead of several.

                ## Milestones
                1. Each product line scored against the same enterprise capability list.
                2. Shared standards agreed for roles, audit event format and admin console placement.
                3. A plan for a common identity service, or a decision not to build one, recorded.
                4. A monthly cross-product readiness review held with each product line's owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every product line scored on the same capability list, shared standards agreed and a monthly cross-product review running for six months."
                cadence: rolling
              tasks:
                - "Score each product line on the same enterprise capability list"
                - "Agree shared standards for roles, audit events and admin placement"
                - "Decide whether to build a common identity service"
                - "Hold the cross-product enterprise readiness review @recurring(monthly:15)"
---

# Enterprise Feature Readiness

This area is for product teams, founders and enterprise product managers building what large customers need before they can buy: single sign-on, provisioning, roles, audit logs and admin controls. It starts with the foundations (a gap assessment, evidence from lost deals, a requirements matrix, the organisation data model and clear ownership), then the core builds from SSO to an accessibility conformance report, the operating rhythms that keep readiness current, skills in identity standards and procurement, decisions on deal commitments and build or buy, dated moments such as security review calls, pilots and renewals, situations for founders, new product managers and acquisitions, and specialist work on customer-held keys, parent organisations and multi-product suites.

The rhythm is weekly for the deal requirements desk and pilot check-ins, monthly for the readiness scorecard, the answer library, the commitments register, the audit coverage check, the large tenant review and the renewal list, and quarterly for identity provider tests, IT admin calls, the trust centre and the commitment policy review. The Operational checklist, Product spec, Metrics log, Risk register, Reading queue and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
