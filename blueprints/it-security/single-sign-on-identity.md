---
id: it-security.single-sign-on-identity
name: Single Sign-On & Identity
description: "One identity provider for every staff login: a clean directory, apps connected through SAML or OIDC, automated provisioning, and the routines that keep accounts consistent and sign-in working."
category: business
version: 1.0.0
tags: [it-security, single-sign-on-identity, enterprise, small-business, engineer, sso, saml, scim]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
  pillars:
    - name: IT & Security
      emoji: "🔐"
      description: "Keeping an organisation's technology working and safe: devices and identity, access control, backups and recovery, security programmes and audits, vendors, incident response and user support."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Single Sign-On & Identity
          description: "Centralising staff identities and logins in one identity provider, connecting apps through single sign-on and keeping accounts consistent."
          projects:
            - name: Map of every login and account store in use
              description: |-
                ## Purpose
                Most organisations that think they have one directory actually have five: a Microsoft or Google tenant, an old on-premises Active Directory, the HR system, and dozens of apps holding their own usernames and passwords. Writing down every place an account can live, and how people sign in to each, is the map every later identity decision is drawn on.

                ## Milestones
                1. A list of every directory, tenant and app that holds staff accounts, with its admin owner.
                2. Each entry tagged with how people sign in today: local password, social login, existing SSO or shared account.
                3. Staff headcount compared with the account count in each of the five largest systems.
                4. The ten apps holding the most sensitive data marked for early SSO connection.

                ## Notes
                Expense reports and card statements reveal apps that no admin knows about. Pull a year of software charges before declaring the list complete.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written inventory of every account store in use, each with an owner and sign-in method, and the ten most sensitive apps flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the directories and tenants you already administer, with their admin URLs"
                - "Export a year of software charges from finance and add every app found"
                - "Record the sign-in method and admin owner for each app on the list"
                - "Flag the ten apps that hold customer, financial or HR data"
            - name: Choosing a workforce identity provider
              description: |-
                ## Purpose
                The identity provider becomes the front door to every app, so switching later is a multi-month migration nobody wants. Comparing two or three serious candidates against your real app list, directory, device estate and budget, rather than a feature grid, means the choice holds for the next five years.

                ## Milestones
                1. Requirements written: app count, protocols needed, existing directory, device platforms, provisioning needs and budget per user.
                2. Two or three providers shortlisted, including the one bundled with your office suite.
                3. Each candidate scored against the same criteria, with your three hardest apps tested in a trial tenant.
                4. A decision recorded with the price per user, contract length and the reasons the others lost.

                ## Notes
                Start from the **Purchase decision** template. Check which features sit in which pricing tier: provisioning, lifecycle automation and advanced policies are often in the top tier only.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off provider decision naming the tier, per-user price and contract length, with trial results for the three hardest apps attached."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements list from the account store map"
                - "Shortlist three providers and request trial tenants"
                - "Connect your three hardest apps to each trial tenant"
                - "Record the decision with pricing tier and reasons the others lost"
            - name: Deciding the authoritative source for staff records
              description: |-
                ## Purpose
                Accounts drift when two systems both think they own a person's name, title and manager. Deciding that the HR system creates people and the identity provider creates logins, or the reverse for a small team without HR software, settles every later argument about which record is right.

                ## Milestones
                1. One system named as the source for each core field: legal name, preferred name, title, department, manager, start and end date.
                2. The direction of sync between HR system, directory and identity provider drawn on one page.
                3. A rule for who corrects a wrong field and in which system.
                4. The decision agreed by the HR lead and the IT lead in writing.

                ## Notes
                Preferred names matter: a login built from a legal name the person never uses causes a support ticket on day one and an awkward conversation every day after.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page source of truth diagram naming the owning system for each core identity field, signed by HR and IT."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the core identity fields and where each one is edited today"
                - "Book a 45-minute session with the HR lead to agree field ownership"
                - "Draw the sync direction between HR, directory and identity provider"
                - "Write the correction rule and get both leads to sign it"
            - name: Username and sign-in name convention
              description: |-
                ## Purpose
                Inconsistent usernames break provisioning matches, create duplicate accounts and leak into email addresses customers see. A written convention for sign-in names, email aliases, duplicate names and name changes means the hundredth hire gets the same treatment as the first.

                ## Milestones
                1. A format chosen for sign-in names and primary email addresses.
                2. A rule for duplicate names and for names with accents, apostrophes or more than two parts.
                3. A rule for what happens on marriage, transition or any other name change, including keeping the old address as an alias.
                4. Existing accounts checked against the convention and exceptions listed.

                ## Notes
                Never reuse a departed person's sign-in name. Apps that match on email will hand the new hire the old person's data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published naming convention covering format, duplicates, special characters and name changes, with existing exceptions listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export current sign-in names and spot the formats already in use"
                - "Write the convention including duplicates and name changes"
                - "List existing accounts that break the convention"
                - "Add a no-reuse rule for sign-in names of people who have left"
            - name: Identity attribute dictionary
              description: |-
                ## Purpose
                Apps make access decisions from attributes such as department, cost centre, employee type and location, so a blank or misspelt value quietly grants or denies the wrong thing. A short dictionary listing each attribute, its allowed values and its source keeps every app mapping honest.

                ## Milestones
                1. Every attribute used for access or provisioning listed with a plain description.
                2. Allowed values fixed for picklist fields such as department, employee type and office.
                3. The source system and sync direction recorded for each attribute.
                4. The dictionary linked from the identity provider admin notes so app owners can find it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published attribute dictionary with descriptions, allowed values and source for every attribute used in access rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the attribute list from the identity provider user profile"
                - "Mark which attributes any app mapping or group rule uses"
                - "Fix the allowed values for department, employee type and office"
                - "Ask the agent to draft plain descriptions for each attribute from the export"
            - name: Group model for app assignment
              description: |-
                ## Purpose
                Assigning apps person by person works for twenty staff and collapses at two hundred. Designing groups up front, with rule-based groups driven by attributes and a small number of requestable groups for exceptions, means access follows role automatically and an auditor can read it.

                ## Milestones
                1. A naming pattern for groups that shows purpose and owner at a glance.
                2. Rule-based groups defined for department, location and employee type.
                3. App assignments moved from individuals to groups for every connected app.
                4. Each manual group given a named owner who approves membership.

                ## Notes
                Keep app access groups separate from email distribution lists. Mixing them means someone joining a mailing list silently gains an app.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All connected apps assigned through groups only, with rule-based groups for department and location and an owner on every manual group."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count how many app assignments are currently made to individuals"
                - "Write the group naming pattern and the list of rule-based groups"
                - "Build the rule-based groups and check their membership counts"
                - "Move individual app assignments onto the new groups"
            - name: Break-glass accounts for the identity provider
              description: |-
                ## Purpose
                When the identity provider is misconfigured, a federation link breaks or the only admin is on a plane, someone still has to sign in and fix it. Two emergency admin accounts, excluded from the policies that could lock everyone out and stored under dual control, are the difference between a bad hour and a lost week.

                ## Milestones
                1. Two cloud-only emergency admin accounts created, not tied to any person or federated domain.
                2. Both excluded from conditional rules that could block them, with strong phishing-resistant sign-in.
                3. Credentials sealed and stored in two separate places under dual control.
                4. An alert sent to the security team whenever either account signs in.
                5. A tested sign-in recorded with date and the two people present.

                ## Notes
                Break-glass accounts that are never tested fail on the day. The quarterly test is the point of the project.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two emergency admin accounts exist with sign-in alerts, stored under dual control, and a successful test sign-in is logged within the last quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create two cloud-only admin accounts on the provider's own domain"
                - "Exclude both from conditional sign-in rules and add hardware keys"
                - "Set an alert on any sign-in by either account"
                - "Test a break-glass sign-in with two people present and log it @recurring(quarterly)"
            - name: Identity provider administrator roles and delegation
              description: |-
                ## Purpose
                Whoever holds super admin in the identity provider can sign in as anyone to anything, so that role should belong to two or three people, not the whole IT team. Splitting duties into help desk, app admin and read-only auditor roles shrinks the damage from one phished admin.

                ## Milestones
                1. Every current admin listed with the role they hold and why.
                2. Super admin limited to three people or fewer, plus the break-glass accounts.
                3. Help desk staff moved to a role that can reset sign-in but not change policy.
                4. Admins using separate admin accounts rather than their everyday ones.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No more than three named super admins, help desk on a limited role, and every admin using a dedicated admin account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the list of identity provider admins and their roles"
                - "Remove super admin from anyone who does not need it weekly"
                - "Create a limited help desk role for sign-in resets"
                - "Review the admin list with the security lead @recurring(yearly)"
            - name: Pilot wave of five apps on single sign-on
              description: |-
                ## Purpose
                The first apps connected set expectations for every user and teach the team the provider's quirks before the critical ones move. Picking five apps that matter but will not halt the business if sign-in breaks for an afternoon gives a real test with a safe failure mode.

                ## Milestones
                1. Five pilot apps chosen with a mix of SAML and OIDC, and at least one with provisioning.
                2. A pilot group of ten to twenty volunteers across two or three departments.
                3. All five apps connected and tested by the pilot group for two weeks.
                4. A lessons note written covering setup steps, user confusion and anything to change before the next wave.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five apps signed in through the identity provider by a pilot group for two weeks, with a written lessons note."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose five pilot apps that matter but can tolerate an afternoon outage"
                - "Recruit ten to twenty pilot volunteers across departments"
                - "Connect and test each app with a test account before inviting the pilot"
                - "Write the lessons note at the end of the two weeks"
            - name: Single sign-on app catalogue with named owners
              description: |-
                ## Purpose
                Every app connected to the identity provider needs someone who answers when it breaks, renews its certificate and approves who gets it. A living catalogue with owner, protocol, provisioning method and data sensitivity turns a pile of integrations into something the team can actually run.

                ## Milestones
                1. Every connected app listed with business owner, technical owner, protocol and provisioning method.
                2. Data sensitivity and the access group recorded for each app.
                3. Apps with no business owner flagged and chased.
                4. The catalogue reconciled with the identity provider's app list each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A catalogue entry with a named business owner exists for every app in the identity provider, reconciled within the last month."
                cadence: rolling
              tasks:
                - "Export the identity provider's connected app list into the catalogue"
                - "Add business owner, technical owner and protocol for each app"
                - "Chase owners for any app still marked unowned"
                - "Reconcile the catalogue against the provider's app list @recurring(monthly:12)"
            - name: Monthly directory data quality sweep
              description: |-
                ## Purpose
                Blank managers, stale titles and misspelt departments break group rules, approval flows and the org chart, and nobody notices until something important routes to the wrong person. A short monthly report of missing and inconsistent fields, fixed at the source, keeps the directory trustworthy.

                ## Milestones
                1. A saved report showing accounts with blank manager, department, title or employee type.
                2. A second check for values outside the allowed lists in the attribute dictionary.
                3. Fixes made in the source system, not overwritten in the directory.
                4. The count of bad records tracked so the trend is visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly data quality count recorded for six months, with the number of incomplete records falling or held under 2 percent."
                cadence: rolling
              tasks:
                - "Build a saved report of accounts with blank core fields"
                - "Add a check for values outside the allowed department list"
                - "Send each fix back to the owner of the source system"
                - "Run the sweep and record the count of bad records @recurring(monthly:8)"
            - name: SAML certificate and secret expiry calendar
              description: |-
                ## Purpose
                A SAML signing certificate or OIDC client secret that expires on a Saturday locks the whole company out of that app until someone notices on Monday. A calendar of every certificate and secret, with owners warned sixty days ahead, turns a recurring outage into a routine rotation.

                ## Milestones
                1. Every signing certificate and client secret listed with app, expiry date and owner.
                2. Alerts or reminders set sixty and fourteen days before each expiry.
                3. A rotation runbook written for the three most common app types.
                4. No outage from an expired certificate in the last twelve months.

                ## Notes
                Some apps need the new certificate uploaded before the old one expires and some cannot hold two at once. Note which kind each app is in the calendar.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SAML certificate and OIDC secret has a recorded expiry and owner, and none has expired unrotated in twelve months."
                cadence: rolling
              tasks:
                - "Export certificate and secret expiry dates from the identity provider"
                - "Set reminders sixty and fourteen days before each expiry"
                - "Write a rotation runbook for SAML and OIDC apps"
                - "Check the next ninety days of expiries and warn owners @recurring(monthly:3)"
            - name: Weekly sign-in log review
              description: |-
                ## Purpose
                Identity provider sign-in logs are where account takeover shows up first: impossible travel, repeated push denials, sign-ins from hosting providers, new devices on admin accounts. Fifteen minutes each week with a fixed set of saved searches catches what automated alerts miss and teaches the team what normal looks like.

                ## Milestones
                1. Five saved searches covering failed admin sign-ins, unusual locations, repeated push denials, legacy protocol use and new admin devices.
                2. A short note format for anything followed up.
                3. Suspicious findings handed to incident response with the evidence attached.
                4. The saved searches tuned after a month to cut noise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly review notes exist for twelve consecutive weeks, each recording the saved searches run and any follow-up raised."
                cadence: rolling
              tasks:
                - "Create the five saved sign-in log searches in the identity provider"
                - "Write a three-line note template for each weekly review"
                - "Review the saved searches and note any follow-up @recurring(weekly:mon)"
                - "Tune the searches after the first four weeks"
            - name: Change control for identity provider configuration
              description: |-
                ## Purpose
                One careless policy edit in the identity provider can block every user or open a door nobody meant to open. A light change process, with a peer check for policy, federation and admin changes and a log of what changed and why, gives the team a way back when something breaks.

                ## Milestones
                1. A list of change types that need a second pair of eyes: sign-in policies, federation settings, admin roles and app-wide assignment.
                2. A change log recording what changed, who approved it and how to undo it.
                3. Risky policy changes tested on a pilot group before the whole organisation.
                4. The provider's own audit log checked against the change log once a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every policy, federation and admin role change in the last quarter appears in the change log with an approver and an undo step."
                cadence: rolling
              tasks:
                - "List the identity provider change types that need peer review"
                - "Set up a change log with what, why, approver and undo columns"
                - "Create a pilot group for testing sign-in policy changes"
                - "Compare the provider audit log with the change log for last month"
            - name: Provisioning sync error triage
              description: |-
                ## Purpose
                When automated provisioning fails, the error sits quietly in a log while a new hire cannot get into the CRM or a leaver keeps access to the file store. Checking sync errors twice a week and fixing the cause, not just retrying, keeps provisioning trustworthy enough that people stop doing it by hand.

                ## Milestones
                1. A view or alert showing provisioning failures across all connected apps.
                2. The five most common error causes documented with their fix.
                3. Failures older than three working days down to zero.
                4. Repeat failures traced to their root cause, such as a bad attribute mapping or a full licence pool.

                ## Notes
                A licence pool that has run out is the most common silent cause. Check seat counts before blaming the integration.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No provisioning error older than three working days for eight consecutive weeks, with common causes documented."
                cadence: rolling
              tasks:
                - "Find where the identity provider reports provisioning failures"
                - "Set an alert for failures on apps that hold sensitive data"
                - "Document the five most common sync errors and their fixes"
                - "Clear or escalate every open provisioning error @recurring(weekly:thu)"
            - name: Sweep for accounts that bypass single sign-on
              description: |-
                ## Purpose
                Connecting an app to SSO does not remove the local accounts created before it, and those keep working with old passwords after people leave. A monthly comparison of each app's user list against the identity provider finds local logins, shared accounts and stragglers before an attacker does.

                ## Milestones
                1. The ten most sensitive apps checked for local, non-SSO accounts.
                2. Each local account either linked to a directory identity, documented as an approved exception or disabled.
                3. Shared accounts listed with an owner and a plan to replace them.
                4. The count of unlinked accounts tracked month by month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ten most sensitive apps show no unlinked local accounts except documented exceptions, checked monthly for six months."
                cadence: rolling
              tasks:
                - "Export the user list from the most sensitive SSO app"
                - "Compare it with the identity provider's assigned users"
                - "Disable or link every unexplained local account"
                - "Repeat the comparison across the ten sensitive apps @recurring(monthly:19)"
            - name: Identity provider release notes watch
              description: |-
                ## Purpose
                Identity providers ship changes monthly: retired legacy protocols, new default policies, renamed features and security fixes that need an admin to switch them on. Reading the release notes on a set day, and logging what applies to you, stops a vendor deprecation from becoming a Monday outage.

                ## Milestones
                1. The provider's release notes, status page and deprecation notices subscribed to by two admins.
                2. A short log of changes that affect your tenant, with the action and date.
                3. Upcoming deprecations listed with the apps they would break.
                4. New security features evaluated within a month of release.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A release notes log with an entry each month for six months, and every announced deprecation linked to an action."
                cadence: rolling
              tasks:
                - "Subscribe two admins to the provider's release notes and status page"
                - "Start a log for changes that affect your tenant"
                - "Read the month's release notes and log any actions @recurring(monthly:24)"
                - "List announced deprecations and the apps they would affect"
            - name: Quarterly identity health report
              description: |-
                ## Purpose
                Leadership funds identity work when they can see it moving: SSO coverage, provisioning automation, stale accounts and admin counts. A one-page quarterly report with the same six numbers each time shows progress, exposes stalls and makes the case for the next tier or the next hire.

                ## Milestones
                1. Six metrics chosen, such as share of apps on SSO, share with automated provisioning, unlinked local accounts, stale accounts, super admin count and certificate near misses.
                2. A baseline quarter recorded.
                3. A one-page report sent to the IT lead and security lead each quarter.
                4. One improvement chosen from each report and tracked to the next.

                ## Notes
                Start from the **Metrics log** template. Keep the six metrics fixed for at least a year so the trend means something.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly reports issued with the same six metrics, each naming one improvement and its result."
                cadence: cyclic
              tasks:
                - "Choose the six identity metrics and where each is measured"
                - "Record the baseline numbers for this quarter"
                - "Send the one-page health report to IT and security leads @recurring(quarterly)"
                - "Pick one improvement from the report and assign an owner"
            - name: SAML 2.0 for administrators
              description: |-
                ## Purpose
                Half the support tickets after an SSO rollout come down to a wrong entity ID, an audience mismatch, a clock skew or a NameID format the app did not expect. Learning how a SAML assertion is built and what each field means turns a guess-and-retry afternoon into a ten-minute fix.

                ## Milestones
                1. The difference between service-provider-initiated and identity-provider-initiated flows explained in your own words.
                2. Entity ID, ACS URL, NameID, audience and signing certificate identified in a real app configuration.
                3. A test app connected from scratch in a sandbox using only metadata files.
                4. A one-page cheat sheet of the five most common SAML errors and their causes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test SAML app connected from metadata in a sandbox and a one-page error cheat sheet saved for the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the provider's SAML overview and draw the redirect flow"
                - "Find each SAML field in one existing app configuration"
                - "Connect a free SAML test app in a sandbox tenant"
                - "Write the five common SAML errors cheat sheet"
            - name: OpenID Connect and OAuth flows for app owners
              description: |-
                ## Purpose
                Newer apps and internal tools use OpenID Connect, and app owners keep asking for client secrets, redirect URIs and scopes without knowing why. Understanding the authorisation code flow with PKCE, the difference between ID and access tokens, and when a client secret is safe lets you configure apps correctly and spot a risky request.

                ## Milestones
                1. The authorisation code flow with PKCE traced step by step in a browser.
                2. ID token, access token and refresh token told apart, with what each is for.
                3. Public and confidential clients explained, and which internal apps are which.
                4. A checklist for reviewing a new OIDC app request: redirect URIs, scopes, grant types and secret storage.

                ## Notes
                The implicit flow is outdated. Push back on any app that still asks for it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An OIDC app request checklist exists and has been used to review at least two real app requests."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Trace an OIDC sign-in using the browser developer tools network tab"
                - "Decode an ID token and an access token and compare the claims"
                - "List internal apps as public or confidential clients"
                - "Draft the OIDC app request review checklist"
            - name: SCIM provisioning in a test tenant
              description: |-
                ## Purpose
                SCIM is how the identity provider creates, updates and deactivates accounts in apps, and most provisioning surprises come from not knowing what the app does with each call. Practising against a test app, watching the requests and changing mappings shows exactly what happens when someone changes department or leaves.

                ## Milestones
                1. A test app with a SCIM endpoint connected to a sandbox tenant.
                2. Create, update, deactivate and group push operations observed in the provisioning log.
                3. The difference between deactivate and delete confirmed for that app.
                4. Notes on attribute mapping, matching rules and what happens on a re-hire.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Create, update, deactivate and group push calls observed in a test tenant, with written notes on matching and re-hire behaviour."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up a sandbox tenant and a test app that accepts SCIM"
                - "Create and update a test user and read the provisioning log"
                - "Deactivate the test user and check what the app kept"
                - "Write notes on matching rules and re-hire behaviour"
            - name: Troubleshooting a failed SSO login with browser tools
              description: |-
                ## Purpose
                When a user says single sign-on is broken, the answer is almost always visible in the browser in under five minutes if you know where to look. Practising with a SAML tracer extension and the network tab on a deliberately broken test app gives the team a repeatable diagnosis instead of a support ticket bounced to the vendor.

                ## Milestones
                1. A SAML tracer extension installed and used to capture a working sign-in.
                2. Three deliberately broken test configurations diagnosed: wrong ACS URL, wrong audience and expired certificate.
                3. A troubleshooting runbook written for help desk staff.
                4. The runbook used on a real ticket and corrected afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A browser-based SSO troubleshooting runbook exists, tested against three broken configurations and one real ticket."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Install a SAML tracer browser extension on an admin profile"
                - "Capture and annotate one working SSO sign-in"
                - "Break a test app three ways and diagnose each from the capture"
                - "Write the troubleshooting runbook for the help desk"
            - name: Active Directory essentials for cloud-first admins
              description: |-
                ## Purpose
                Plenty of admins who grew up on cloud identity inherit an on-premises Active Directory still running file shares, printers and an old line-of-business app. Knowing forests, domains, organisational units, group policy and Kerberos well enough to read what is there prevents a well-meant cleanup from breaking something nobody documented.

                ## Milestones
                1. The forest, domains, trusts and organisational unit structure drawn from the live environment.
                2. Kerberos ticket flow and the role of domain controllers explained in your own words.
                3. Group policies listed with what each one does.
                4. Apps and services that still depend on the domain identified.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A diagram of the live directory structure and a list of every service still depending on the domain, reviewed by a second admin."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export the organisational unit structure and draw it"
                - "Read an introduction to Kerberos and sketch the ticket flow"
                - "List every group policy object and what it configures"
                - "Find services and apps that authenticate against the domain"
            - name: Sessions, token lifetimes and single logout
              description: |-
                ## Purpose
                Signing out of the identity provider rarely signs people out of the apps behind it, because each app keeps its own session and refresh tokens can last for weeks. Understanding which session lives where, and what single logout really does, is the only way to set expectations for a lost laptop or a dismissal.

                ## Milestones
                1. Identity provider session, app session and refresh token lifetimes listed for five key apps.
                2. Single logout tested on two apps and its real behaviour recorded.
                3. The fastest way to end all sessions for one user documented and timed.
                4. Findings shared with the people who handle leavers and lost devices.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Session and token lifetimes recorded for five key apps, with a timed procedure for ending every session for one user."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Look up the session and refresh token lifetimes for five key apps"
                - "Test what single logout actually ends in two apps"
                - "Time the steps to revoke all sessions for a test user"
                - "Share the revoke procedure with whoever handles leavers"
            - name: How attackers abuse identity providers
              description: |-
                ## Purpose
                The identity provider is now the most valuable target in most organisations, and the attacks look nothing like old password guessing: session cookie theft, push fatigue, help desk impersonation, malicious OAuth consent and forged SAML tokens. Studying recent public incident write-ups and mapping each technique to your own setup shows where your defences are thin.

                ## Milestones
                1. Five public incident write-ups involving identity providers read and summarised.
                2. Each attack technique mapped to the control that would stop or detect it in your tenant.
                3. Gaps listed where no control exists today.
                4. A short briefing given to the IT team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A technique-to-control map covering at least six identity attack techniques, with gaps listed and briefed to the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect five public incident reports that involved identity providers"
                - "Ask the agent to summarise each report's attack steps in one paragraph"
                - "Map each technique to a control in your tenant or mark it a gap"
                - "Brief the IT team on the gaps in a 30-minute session"
            - name: Automated provisioning for the ten largest apps
              description: |-
                ## Purpose
                Manual account creation is where access drifts: someone forgets a group, a leaver's licence stays assigned, a mover keeps the old team's data. Turning on SCIM or directory-sync provisioning for the ten apps with the most users removes most of that manual work and makes access follow the directory.

                ## Milestones
                1. The ten apps with the most users checked for SCIM or sync support and the pricing tier it needs.
                2. Attribute mappings and matching rules agreed with each app owner.
                3. Existing accounts matched to directory identities before provisioning is switched on.
                4. Provisioning live for each supported app, with deactivation tested.

                ## Notes
                Match existing accounts first. Switching on provisioning against an unmatched app can create duplicates or deactivate people you meant to keep.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Automated provisioning live and deactivation tested on every one of the ten largest apps that supports it."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank connected apps by user count and check each for SCIM support"
                - "Agree attribute mappings with the owner of the first app"
                - "Match existing app accounts to directory identities"
                - "Switch on provisioning and test a deactivation with a test user"
            - name: Session length and re-authentication policy
              description: |-
                ## Purpose
                Sessions that last a month are convenient until a laptop is stolen or a cookie is lifted, and sessions that end every hour drive people to sticky notes. Choosing session lengths by app sensitivity and device trust, and writing down why, balances the two in a way you can defend.

                ## Milestones
                1. Apps grouped into two or three sensitivity tiers.
                2. A session length and re-authentication rule set for each tier and device type.
                3. The policy tested on a pilot group for two weeks.
                4. The decision and its reasons recorded and the policy applied to everyone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written session policy with lengths per sensitivity tier, applied in the identity provider after a two-week pilot."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group connected apps into sensitivity tiers"
                - "Propose session lengths for each tier on managed and unmanaged devices"
                - "Pilot the policy with the pilot group for two weeks"
                - "Record the final policy and the reasons behind it"
            - name: Self-service password reset that resists takeover
              description: |-
                ## Purpose
                Password resets are a large share of help desk tickets, and a weak self-service flow becomes the easiest way into someone else's account. A reset process that relies on enrolled strong factors, not security questions or a personal email, cuts tickets without opening a new door.

                ## Milestones
                1. Current reset volume measured from the help desk.
                2. A self-service reset flow configured using enrolled authenticators only.
                3. Security questions and personal email removed as reset methods.
                4. Reset events alerting the user by a second channel.

                ## Notes
                Reset flows inherit the strength of their weakest method. One SMS option undoes the rest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Self-service reset live using enrolled authenticators only, with no security questions, and help desk reset tickets measured before and after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count last quarter's password reset tickets"
                - "Configure self-service reset with enrolled authenticators only"
                - "Remove security questions and personal email as reset options"
                - "Turn on reset notifications to the user"
            - name: Help desk identity check before resets
              description: |-
                ## Purpose
                Several of the largest recent breaches began with a phone call to the help desk from someone claiming to be a locked-out employee. A verification step the help desk must complete before any reset or authenticator change, with a callback or manager confirmation, closes the cheapest route into the identity provider.

                ## Milestones
                1. A written verification procedure for resets, authenticator changes and admin account requests.
                2. A callback to a number from the directory or a live video check with ID required for high-risk requests.
                3. Help desk staff trained and the procedure built into the ticket form.
                4. A test call made by the security team and the result recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A verification step is mandatory in the ticket form for every reset and authenticator change, and a test call has been run and recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the verification steps for resets and authenticator changes"
                - "Add a mandatory verification field to the help desk ticket form"
                - "Train help desk staff on the procedure in one session"
                - "Run an unannounced test call and record the outcome @recurring(yearly)"
            - name: Options for legacy apps without SAML or OIDC
              description: |-
                ## Purpose
                Some apps that matter will never support modern single sign-on: an on-premises finance tool, a supplier portal, an old line-of-business system. Comparing an identity-aware proxy, password vaulting through the identity provider, LDAP integration and retirement for each one gives every straggler a decision instead of an exception nobody owns.

                ## Milestones
                1. Every app without SAML or OIDC listed with its user count and data sensitivity.
                2. The realistic options compared for each, with cost and effort.
                3. A decision recorded for each app: proxy, vault, directory bind, replace or accept.
                4. Accepted exceptions given an owner and a review date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every app without modern SSO has a recorded decision, and accepted exceptions have owners and review dates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List apps without SAML or OIDC from the account store map"
                - "Check which ones support LDAP, headers or a proxy in front"
                - "Compare options and record a decision for each app"
                - "Give each accepted exception an owner and review date"
            - name: Negotiating SSO pricing with SaaS vendors
              description: |-
                ## Purpose
                Many SaaS vendors put SAML and SCIM only in an enterprise tier that can cost double, which is why smaller teams leave important apps on passwords. Treating single sign-on as a purchase requirement, raised before renewal with usage and security arguments ready, often gets it included or discounted.

                ## Milestones
                1. Apps where SSO or SCIM sits in a higher tier listed with the price difference.
                2. Renewal dates for those apps added to the identity calendar.
                3. A standard request written for vendors asking for SSO in the current tier.
                4. Outcomes recorded: included, discounted, upgraded or declined.

                ## Notes
                Ask procurement to add SSO and provisioning to the requirements for every new software purchase. Negotiating before signature is far easier than after.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every app with SSO behind a higher tier has a recorded outcome from a negotiation raised before its renewal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List apps that charge extra for SAML or SCIM and the price gap"
                - "Add their renewal dates to the identity calendar"
                - "Draft a standard SSO request to send before each renewal"
                - "Check which renewals in the next year need the SSO request @recurring(yearly)"
            - name: Turning off password login once SSO is enforced
              description: |-
                ## Purpose
                An app connected to single sign-on but still accepting a username and password is only half protected, because the old login path skips every policy in the identity provider. Enforcing SSO-only sign-in app by app, with a documented exception for the break-glass admin, closes that back door.

                ## Milestones
                1. Each connected app checked for whether it still accepts password login.
                2. SSO-only enforcement switched on where the app supports it.
                3. One local admin per app kept as a documented, alerted exception.
                4. A monthly check that nobody has re-enabled password login.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every app that supports it enforces SSO-only sign-in, with a single documented local admin exception per app."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check each connected app's settings for a password login option"
                - "Turn on SSO enforcement for the first five apps"
                - "Document one local admin per app as the only exception"
                - "Check that password login is still off in each app @recurring(monthly:21)"
            - name: Hybrid directory sync design
              description: |-
                ## Purpose
                Organisations with an on-premises Active Directory usually need it to sync with the cloud identity provider for years, and a careless sync design brings old junk accounts into the cloud and makes the on-premises server a single point of failure. Choosing the sync scope, the authentication method and the source of authority deliberately keeps the hybrid period safe.

                ## Milestones
                1. The sync scope limited to the organisational units that hold real staff and groups.
                2. Password hash sync, pass-through or federation chosen with reasons recorded.
                3. The sync server treated as a top-tier asset with restricted admin access.
                4. A test of what happens to sign-in if the sync server is offline.

                ## Notes
                Federating sign-in to on-premises servers adds a dependency most small and mid-sized teams do not need. Prefer the simplest method your provider supports.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hybrid sync design document recording scope, authentication method and server protection, with a sync outage test result."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the organisational units that hold real staff and active groups"
                - "Choose the authentication method and record the reasons"
                - "Restrict admin access to the sync server"
                - "Test sign-in behaviour with the sync service stopped"
            - name: Retiring the old directory after cutover
              description: |-
                ## Purpose
                After a move to a cloud identity provider, the old directory or previous provider often lingers for years, still holding enabled accounts and still trusted by something. Planning its retirement, with a dependency hunt and a read-only period, removes a forgotten attack surface and a licence bill.

                ## Milestones
                1. Every remaining dependency on the old directory found and listed.
                2. Each dependency moved to the new provider or retired.
                3. The old directory set read-only or disabled for a thirty-day watch period.
                4. The old system decommissioned and its trust relationships removed.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The old directory or provider is decommissioned after a thirty-day watch with no dependency failures recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Review the old directory's sign-in logs for any remaining users or apps"
                - "List each dependency with an owner and a move date"
                - "Disable the old directory for a thirty-day watch period"
                - "Remove trusts and decommission the old system"
            - name: Identity provider migration cutover
              description: |-
                ## Purpose
                Moving from one identity provider to another touches every app at once, and a cutover without a rehearsed sequence leaves people unable to work on a Monday morning. A dated cutover plan with app waves, rollback steps and a support desk staffed for the first day keeps the move boring.

                ## Milestones
                1. Apps sorted into waves, with the least critical first and finance and HR last.
                2. A rollback step written for every app in each wave.
                3. A rehearsal completed in a test tenant with a timed run-through.
                4. Cutover day staffed with a support channel and extra help desk cover.
                5. All apps signing in through the new provider and the old one set to read-only.

                ## Notes
                Start from the **Operational checklist** template. Change DNS records and app metadata in the order written, and keep the old provider running until the watch period ends.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every app signs in through the new identity provider by the planned date, with no wave rolled back for more than one working day."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Sort connected apps into cutover waves by criticality"
                - "Write a rollback step for each app in the first wave"
                - "Rehearse the first wave in a test tenant and time it"
                - "Book extra help desk cover for each cutover day"
            - name: Company email domain change across identities
              description: |-
                ## Purpose
                A rebrand or merger that changes the email domain also changes the sign-in name for every account, and apps that match users by email can create duplicates or lock people out. Planning the domain change as an identity event, with aliases, app-by-app matching checks and a dated switch, avoids a week of broken logins.

                ## Milestones
                1. Every app's user matching key identified: email, immutable ID or username.
                2. The new domain verified in the identity provider and old addresses kept as aliases.
                3. A test group switched first and checked across all key apps.
                4. All accounts switched on a set date with a support channel open.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All staff sign in with the new domain on the planned date, with no duplicate accounts created in the key apps."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find out how each key app matches users to the identity provider"
                - "Verify the new domain and plan aliases for old addresses"
                - "Switch a test group and check every key app"
                - "Set and announce the switch date for all staff"
            - name: Identity provider outage rehearsal
              description: |-
                ## Purpose
                Every app behind the identity provider goes down with it, and teams discover too late that nobody knows how to reach the vendor or which apps have a local fallback. A yearly tabletop exercise using a realistic outage scenario tests the contacts, fallbacks and communications before the real thing.

                ## Milestones
                1. A scenario written: the provider unavailable for four hours during the working day.
                2. Apps with and without a local admin fallback listed.
                3. Vendor support contacts, status page and escalation route confirmed.
                4. A tabletop run with IT, security and a business lead, and actions recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop exercise held with IT, security and a business lead, with written actions and owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a four-hour identity provider outage scenario"
                - "List which critical apps have a local admin fallback"
                - "Confirm the vendor support contract number and escalation route"
                - "Run the outage tabletop with IT, security and a business lead @recurring(yearly)"
            - name: Staff launch of the new sign-in experience
              description: |-
                ## Purpose
                People judge single sign-on by their first morning with it: a new sign-in page, an app dashboard and a prompt they have never seen. A short, dated launch with a one-page guide, a known date and a place to ask questions turns confusion into a smaller help desk queue and fewer people falling for fake sign-in pages.

                ## Milestones
                1. A launch date chosen and announced a week ahead by the IT lead.
                2. A one-page guide with screenshots of the real sign-in page and its exact web address.
                3. A drop-in session or chat channel staffed for the first two days.
                4. Help desk tickets in the first week counted and the top three questions answered in the guide.

                ## Notes
                Show the real sign-in address prominently. Staff who know the genuine page are harder to phish with a copy.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The launch went ahead on the announced date with a guide and support channel, and first-week tickets were counted and answered."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the launch date and draft the announcement"
                - "Write the one-page guide with the real sign-in address"
                - "Set up a chat channel staffed for the first two days"
                - "Add answers to the top three first-week questions to the guide"
            - name: Small business SSO with the office suite you already pay for
              description: |-
                ## Purpose
                A business of five to fifty people rarely needs a separate identity provider: the Microsoft or Google account everyone already has can sign people into most other apps. Using that suite as the identity provider, and moving the main apps onto it, gets most of the benefit for no extra licence.

                ## Milestones
                1. The suite's built-in SSO features checked against your current licence.
                2. The five most used apps switched to sign in with the company account.
                3. Staff told to stop using personal accounts or separate passwords for those apps.
                4. A list of apps that would need a paid upgrade to join, kept for later.

                ## Notes
                Choose the suite sign-in button, not social login with a personal account. The second gives the person, not the business, control of the account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five most used apps sign in with the company Microsoft or Google account, and no staff member uses a personal account for them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check which SSO features your current suite licence includes"
                - "List the five apps the team uses most"
                - "Switch each app to sign in with the company account"
                - "Ask staff to move off personal logins for those five apps"
            - name: Contractor and agency identities with sponsors and end dates
              description: |-
                ## Purpose
                Contractors, agency staff and temps often never appear in the HR system, so their accounts are created by hand and outlive the engagement by months. Giving them a distinct identity type, a named employee sponsor and a mandatory end date in the identity provider makes them visible and makes expiry automatic.

                ## Milestones
                1. A separate employee type and naming marker for non-employees.
                2. A required sponsor and end date on every non-employee account.
                3. Automatic suspension on the end date, with a warning to the sponsor beforehand.
                4. Existing contractor accounts found and brought into the new model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every non-employee account carries a sponsor and end date, and accounts past their end date are suspended automatically."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Add a non-employee type, sponsor and end date to the user profile"
                - "Find existing contractor accounts and fill in sponsor and end date"
                - "Set automatic suspension on the end date with a sponsor warning"
                - "Send sponsors the list of contractor accounts ending next month @recurring(monthly:15)"
            - name: Partner and guest access through federation
              description: |-
                ## Purpose
                Creating full accounts for partners, auditors and client staff fills the directory with people you cannot vouch for. Letting them sign in with their own organisation's identity through guest or federated access, limited to specific apps and reviewed regularly, keeps your directory for your people.

                ## Milestones
                1. Current external accounts in the directory listed with the organisation they belong to.
                2. A guest or federation method chosen and limited to named apps.
                3. Guest invitations restricted to approved people and allowed partner domains.
                4. Guests with no sign-in for ninety days removed on a schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "External users sign in through guest or federated access only, limited to named apps, with inactive guests removed quarterly."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List external accounts in the directory and their organisations"
                - "Restrict who can invite guests and which domains are allowed"
                - "Limit guest access to the specific apps each partner needs"
                - "Remove guests with no sign-in for ninety days @recurring(quarterly)"
            - name: Merging identity directories after an acquisition
              description: |-
                ## Purpose
                An acquisition brings a second directory, a second identity provider and hundreds of people who need access to shared apps from day one. A phased plan, starting with a trust between the two and ending with one directory, keeps both companies working while the real merge happens at a sensible pace.

                ## Milestones
                1. Both directories, their apps and their admin owners documented.
                2. Day-one access to shared apps given through a trust or guest access.
                3. A target state and timeline agreed: which provider survives and when.
                4. Accounts migrated in waves with matching checked before each wave.
                5. The acquired company's identity provider decommissioned.

                ## Notes
                Check the acquired directory for stale admin accounts and old federation trusts before connecting it to yours. You inherit whatever was already compromised.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Staff from both companies sign in through one identity provider and the acquired provider is decommissioned."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Get admin access to the acquired directory and export its users and apps"
                - "Audit the acquired directory for stale admins and old trusts"
                - "Set up day-one guest or trust access to the shared apps"
                - "Agree the surviving provider and migration timeline with both IT leads"
            - name: Engineers into cloud consoles through SSO
              description: |-
                ## Purpose
                Cloud console users created one by one, each with long-lived access keys, are among the most common causes of serious breaches. Routing engineers into each cloud account through the identity provider with role-based permission sets and short-lived credentials means a leaver loses console access the moment their directory account is disabled.

                ## Milestones
                1. Every cloud account and the human users inside it listed.
                2. The cloud provider's SSO feature connected to the identity provider with groups mapped to roles.
                3. Engineers using short-lived credentials from the command line instead of stored access keys.
                4. Old individual console users and their long-lived keys removed.

                ## Notes
                Keep one root or owner account per cloud account outside SSO as break-glass, with hardware-key sign-in and an alert on use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All human access to cloud accounts goes through the identity provider, and no individual console user with long-lived keys remains."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every cloud account and the individual users inside it"
                - "Connect the cloud provider's SSO service to the identity provider"
                - "Map engineering groups to permission sets in each account"
                - "Remove individual console users and their long-lived access keys"
            - name: Enforcing SSO on code hosting and CI tools
              description: |-
                ## Purpose
                Code repositories and build pipelines hold source code, deploy keys and production secrets, yet engineers often reach them with personal accounts that the company cannot disable. Enforcing organisation-level SSO, linking every account to a directory identity and controlling personal access tokens closes a gap attackers keep using.

                ## Milestones
                1. SAML or OIDC enforcement switched on for the code hosting organisation.
                2. Every member account linked to a directory identity, with unlinked ones removed.
                3. Personal access tokens required to be SSO-authorised with expiry dates.
                4. CI tools and package registries signing in through the identity provider.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Code hosting enforces SSO, every member is linked to a directory identity, and all personal access tokens have expiry dates."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether code hosting SSO enforcement is on and who is unlinked"
                - "Turn on SSO enforcement and remove unlinked members"
                - "Set a maximum lifetime for personal access tokens"
                - "Review tokens without expiry or older than ninety days @recurring(monthly:27)"
            - name: Frontline and shared-device worker identities
              description: |-
                ## Purpose
                Shop floor, warehouse, clinic and hospitality staff often share tablets, have no company email and work shifts that make phone-based sign-in awkward. Designing identities for them, with badge or PIN sign-in on shared devices and a simple account recovery path, gets them into the apps they need without shared passwords taped to the counter.

                ## Milestones
                1. Frontline roles and the apps and devices they use listed.
                2. A sign-in method chosen for shared devices, such as badge tap, PIN or a fast user switch.
                3. Accounts created for frontline staff even without an email mailbox.
                4. Shared logins on frontline devices replaced by individual sign-in.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Frontline staff sign in individually on shared devices with a chosen method, and no shared password remains on those devices."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Visit one frontline site and note how staff sign in today"
                - "List frontline roles, their apps and the shared devices used"
                - "Choose a shared-device sign-in method and pilot it at one site"
                - "Replace shared logins at the pilot site with individual accounts"
            - name: Identity provider configuration as code
              description: |-
                ## Purpose
                Clicking through an admin console leaves no review, no history and no way to rebuild the tenant after a mistake. Managing apps, groups and policies through an infrastructure-as-code tool with pull request review gives engineering teams a change history, peer review and drift detection for the most critical system they run.

                ## Milestones
                1. An infrastructure-as-code provider for the identity provider chosen and tested in a sandbox.
                2. Groups, app assignments and sign-in policies imported into code.
                3. Changes made only through reviewed pull requests with a pipeline applying them.
                4. A scheduled drift check that reports console changes made outside code.

                ## Notes
                Keep the code pipeline's identity provider token tightly scoped and stored as a secret. It can change everything, so treat it like a super admin.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Groups, app assignments and sign-in policies are managed in code through reviewed pull requests, with a drift check running."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Test the identity provider's infrastructure-as-code provider in a sandbox"
                - "Import existing groups and sign-in policies into code"
                - "Set up a pipeline that applies only reviewed pull requests"
                - "Run the drift check and investigate any console change @recurring(monthly:5)"
            - name: Service accounts and API tokens in the identity provider
              description: |-
                ## Purpose
                Integrations, scripts and provisioning connectors run on service accounts and API tokens that never sign in through a browser, so they skip every human control and are rarely reviewed. Inventorying them, giving each an owner and the narrowest scope, and rotating their tokens removes one of the quietest ways into the tenant.

                ## Milestones
                1. Every service account and API token in the identity provider listed with its purpose.
                2. An owner and expiry or rotation date recorded for each.
                3. Scopes reduced to what each integration actually uses.
                4. Unused tokens and orphaned service accounts removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every identity provider service account and token has an owner, a narrowed scope and a rotation date, reviewed each quarter."
                cadence: rolling
              tasks:
                - "Export the identity provider's API tokens and service accounts"
                - "Record the owner and purpose of each one"
                - "Revoke tokens with no owner or no use in ninety days"
                - "Review service account owners and scopes @recurring(quarterly)"
            - name: Short-lived SSH and Kubernetes credentials from SSO
              description: |-
                ## Purpose
                Static SSH keys and long-lived cluster credentials spread across laptops and outlive the people who made them. Issuing short-lived SSH certificates and Kubernetes tokens through an OIDC login to the identity provider means server and cluster access ends when the directory account does.

                ## Milestones
                1. Current SSH key and cluster credential practices documented.
                2. A certificate authority or access broker issuing short-lived credentials after an identity provider login.
                3. Kubernetes clusters configured to accept OIDC tokens with groups mapped to roles.
                4. Static authorised keys and shared kubeconfig files removed from production.

                ## Notes
                Plan the break-glass path for servers and clusters before removing static keys, and test it.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Production SSH and Kubernetes access uses credentials lasting no more than a working day, issued after an identity provider login."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Count static SSH keys and kubeconfig files in use for production"
                - "Pilot short-lived SSH certificates on one non-production server group"
                - "Configure one cluster to accept OIDC tokens from the identity provider"
                - "Remove static keys from production once the pilot is stable"
            - name: Monitoring federation trusts for tampering
              description: |-
                ## Purpose
                Attackers who reach admin level in an identity provider often add a federated domain, a new signing certificate or a rogue external identity provider, giving themselves a way to mint tokens that bypass every sign-in control. Watching for any change to federation trusts and signing keys catches one of the most damaging persistence techniques in identity attacks.

                ## Milestones
                1. Every federation trust, external identity provider and signing certificate listed as a baseline.
                2. Alerts on any added, changed or removed trust, domain or signing key.
                3. A response step written for an unexpected trust change.
                4. The baseline compared with live configuration each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A federation trust baseline exists, change alerts are live, and weekly comparisons are recorded for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Record the current federation trusts, domains and signing certificates"
                - "Create alerts for changes to trusts, domains and signing keys"
                - "Write the response step for an unexpected trust change"
                - "Compare live federation settings with the baseline @recurring(weekly:wed)"
            - name: Hub federation across several identity providers
              description: |-
                ## Purpose
                Groups with several subsidiaries, regions or a parent company often end up with three or four identity providers that cannot simply be merged. A hub design, where one provider brokers trust to the others and apps connect once to the hub, avoids every app maintaining four integrations and gives one place for policy.

                ## Milestones
                1. All identity providers in the group mapped with their users, apps and owners.
                2. A hub provider chosen and the trust model to each spoke documented.
                3. Shared apps connected once to the hub instead of to each spoke.
                4. Consistent claims and attribute names agreed across all providers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded hub federation design, with at least three shared apps connected only to the hub and consistent claims across providers."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map every identity provider in the group with users and apps"
                - "List the apps connected separately to more than one provider"
                - "Draft the hub and spoke trust model with claim names"
                - "Move the first shared app onto the hub only"
---

# Single Sign-On & Identity

Single sign-on is the plumbing behind every staff login: one identity provider, one clean directory, and every app trusting it rather than keeping its own passwords. The projects run from mapping today's account sprawl and choosing a provider, through the routines that keep certificates, sync and sign-in logs healthy, into protocol skills, the decisions that close the gaps, cutover events, situations for small businesses, contractors, acquisitions and engineering teams, and finally the specialist work of configuration as code and federation hardening.

The steady rhythms are a weekly look at sign-in logs and provisioning errors, a monthly pass over the app catalogue, directory data, expiring certificates and accounts that bypass single sign-on, and a quarterly health report and break-glass test. The **Purchase decision** template pairs with choosing a provider, **Metrics log** with the health report and **Operational checklist** with a migration cutover. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
