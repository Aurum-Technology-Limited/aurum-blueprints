---
id: software-engineering.secure-coding-practices
name: Secure Coding Practices
description: "Code that holds up against injection, broken access control and stolen sessions: a team standard, safe defaults for queries, output and secrets, and review habits that make security part of every change."
category: business
version: 1.0.0
tags: [software-engineering, secure-coding-practices, engineer, team, owasp, injection, access-control, threat-modelling]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - risk-register
    - training-program
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Secure Coding Practices
          description: "Writing code that resists common attacks such as injection and broken authentication, with security checks built into everyday development."
          projects:
            - name: Attack surface map of the code you own
              description: |-
                ## Purpose
                Most teams can list their public pages but not the admin routes, webhook receivers, file importers, queue consumers and debug endpoints that also accept input from outside. Mapping every place untrusted data enters your code tells you where the next six months of security effort should go, and it is the first thing a penetration tester will ask for.

                ## Milestones
                1. Every HTTP route, webhook, message consumer, file import and CLI entry point listed for the services you own.
                2. Each entry marked with who can reach it: anonymous, signed-in user, admin, internal service.
                3. Entry points that handle money, personal data or file uploads flagged as high risk.
                4. Any endpoint nobody expected, such as a forgotten debug route, ticketed for removal or protection.

                ## Notes
                Generate the route list from the framework's router rather than from memory or documentation. The forgotten endpoints are the ones that matter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared table lists every entry point of your services with its audience and risk level, and every unexpected endpoint has a ticket."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the full route list from each service's router"
                - "Add webhooks, queue consumers, file imports and scheduled jobs that read external data"
                - "Mark each entry point with its audience and whether it touches money or personal data"
                - "Raise tickets for endpoints that should not exist or lack authentication"
            - name: Two-page secure coding standard for the team
              description: |-
                ## Purpose
                Long security policies are written once and never read, while a short standard with ten concrete rules gets quoted in code review. Agreeing the rules your team will hold each other to, with a good and a bad code example for each in your own language, gives reviewers something specific to point at instead of a vague feeling.

                ## Milestones
                1. Ten or fewer rules agreed, each covering a real risk in your stack, such as queries, output, secrets and permission checks.
                2. A short correct and incorrect code sample under every rule, in the languages the team uses.
                3. The standard published next to the contributing guide and linked from the pull request template.
                4. Every engineer on the team has read it and raised any objections in one meeting.

                ## Notes
                Use a recognised list such as the OWASP Top 10 or the OWASP ASVS as the source, then cut hard. A rule nobody can check in review does not belong in the two pages.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team secure coding standard of no more than two pages, with code examples per rule, is published and linked from the pull request template."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the five worst security bugs your team has shipped or nearly shipped"
                - "Draft one rule per bug class with a correct and incorrect code sample"
                - "Review the draft with the team and cut any rule nobody can check in review"
                - "Publish the standard beside the contributing guide and link it from the PR template"
            - name: Hardcoded secrets removed and rotated
              description: |-
                ## Purpose
                Hardcoded API keys, database passwords and signing secrets in source code or committed config files end up in every clone, every CI log and every laptop backup. Finding them, moving them into a secret store or environment injection, and rotating each one that was ever committed closes one of the cheapest routes into your systems.

                ## Milestones
                1. The full repository history searched for keys, tokens, passwords and private key files.
                2. Every live secret found moved to the secret store or runtime environment, with code reading it from there.
                3. Each secret that was ever committed rotated, not only deleted from the latest commit.
                4. A short note in the README saying where secrets live and how a new one is added.

                ## Notes
                Deleting a secret from the current file does nothing for the copies in history and forks. Treat anything committed as exposed and rotate it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No live secret remains in the repository or its history, and every previously committed secret has a recorded rotation date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run a secret search across the whole git history of each repository"
                - "List each finding with its owner system and whether it is still valid"
                - "Move live secrets into the secret store and update the code to read them"
                - "Rotate every secret that was ever committed and log the rotation date"
            - name: Parameterised queries across every data access path
              description: |-
                ## Purpose
                String-built SQL is still the most common way attackers read or delete whole databases, and it hides in report builders, search filters and sort parameters long after the main models moved to an ORM. Replacing every concatenated query with bound parameters, and allow-listing the column and table names that cannot be bound, removes the whole class rather than individual bugs.

                ## Milestones
                1. Every raw query, query builder string and stored procedure call that includes request data found and listed.
                2. Each one rewritten with bound parameters or an ORM method that binds for you.
                3. Dynamic sort columns, table names and directions restricted to an explicit allow-list.
                4. A lint rule or review check that flags new string concatenation inside query calls.

                ## Notes
                Bound parameters cannot cover identifiers like ORDER BY columns. Those need an allow-list in code, never escaping by hand. NoSQL queries built from request objects have the same problem.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A search for string-built queries returns zero matches in production code, and dynamic identifiers pass through a documented allow-list."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search the codebase for raw query calls that concatenate or format strings"
                - "Rewrite the highest-risk query first, the one behind a public endpoint"
                - "Add an allow-list for sortable columns and directions in list endpoints"
                - "Add a review check that flags string-built queries in new code"
            - name: Input validation at every trust boundary
              description: |-
                ## Purpose
                Untrusted data that is checked in some handlers and not others leaves gaps that attackers find by trying every endpoint. Defining request schemas with types, lengths and allowed values, and rejecting anything that does not match before business logic runs, makes the safe path the default one and gives a single place to tighten later.

                ## Milestones
                1. A validation library or schema approach chosen for each service and documented.
                2. Every public endpoint validates body, query string, headers it uses and path parameters against a schema.
                3. Unknown fields rejected or stripped rather than passed through to models.
                4. Validation failures return a consistent error without echoing the raw input back.

                ## Notes
                Validation is not a substitute for encoding or parameterised queries. It narrows what reaches the dangerous sink; the sink still needs its own defence. Mass assignment through unchecked fields is a common account takeover route.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every public endpoint has a request schema enforced before business logic, and a test proves unknown fields are rejected."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the schema validation library each service will standardise on"
                - "Add schemas to the five endpoints with the most traffic or the most risk"
                - "Reject or strip unknown fields so they never reach model updates"
                - "Write a test that sends an extra role field and expects it to be ignored"
            - name: Output encoding to shut out cross-site scripting
              description: |-
                ## Purpose
                Cross-site scripting rarely comes from the main templates, which usually auto-escape, but from the escape hatches: raw HTML helpers, markdown rendering, innerHTML assignments and user data dropped into script blocks or URLs. Finding every place the auto-escaping is bypassed and replacing it with context-aware encoding or a sanitiser removes the bugs that survive framework defaults.

                ## Milestones
                1. Auto-escaping confirmed on in every template engine and frontend framework you use.
                2. Every raw HTML helper, dangerouslySetInnerHTML style call and innerHTML assignment listed with its data source.
                3. Each one that carries user data replaced with safe rendering or a maintained HTML sanitiser.
                4. User-supplied URLs checked to block javascript and data schemes before rendering as links.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every raw HTML sink in the codebase is either removed, fed only by trusted data, or passed through a named sanitiser, with the list kept in the repo."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search for raw HTML helpers and innerHTML assignments in templates and components"
                - "Trace the data source of each sink to see whether a user can control it"
                - "Replace user-fed sinks with safe rendering or a maintained sanitiser"
                - "Add a check that user-supplied links only allow http and https schemes"
            - name: Password storage and login flow check
              description: |-
                ## Purpose
                Weak password hashing turns a single database leak into every user's account on every other site where they reused the password. Checking that passwords are stored with a slow, salted algorithm such as Argon2id, bcrypt or scrypt, and that the login and reset flows do not leak which emails exist, fixes the parts of authentication that are hardest to repair after a breach.

                ## Milestones
                1. The hashing algorithm and work factor in use confirmed and written down.
                2. Any legacy hashes such as MD5 or unsalted SHA marked for rehash on next login.
                3. Login, sign-up and password reset responses give the same message whether or not the account exists.
                4. Reset tokens confirmed as single use, random, short lived and stored hashed.

                ## Notes
                If you can avoid storing passwords at all by using a managed identity provider, that is often the better answer. See the build or buy project later in this area.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written check confirms a recognised slow hashing algorithm, a rehash plan for legacy hashes and uniform responses on login and reset."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the code that hashes passwords and note the algorithm and work factor"
                - "Count how many stored hashes still use a legacy algorithm"
                - "Compare login and reset responses for a real and a made-up email address"
                - "Check reset token length, expiry and whether it is stored hashed"
            - name: Server-side permission check on every endpoint
              description: |-
                ## Purpose
                Broken access control has topped the OWASP Top 10 because the bug is so ordinary: an endpoint that checks you are signed in but not that the invoice with id 4512 belongs to you. Building a matrix of every endpoint against every role, and proving each one checks ownership on the server, closes the insecure direct object reference bugs that scanners almost never find.

                ## Milestones
                1. A matrix of every endpoint against each role and the expected allow or deny result.
                2. Every endpoint that loads a record by id confirmed to check the record belongs to the caller or their organisation.
                3. Permission checks moved into one shared policy layer instead of scattered if statements.
                4. Automated tests for at least the deny cases of the ten most sensitive endpoints.

                ## Notes
                Hiding a button in the interface is not access control. Every check that matters runs on the server, on every request.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A role by endpoint matrix exists, every id-based endpoint checks ownership server side, and deny-case tests cover the ten most sensitive routes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a sheet of every endpoint against each role with the expected result"
                - "Try loading another user's record by changing the id on five endpoints"
                - "Move ownership checks for the riskiest endpoints into a shared policy function"
                - "Write deny-case tests for the ten most sensitive endpoints"
            - name: Safe error handling and security event logging
              description: |-
                ## Purpose
                Stack traces, SQL errors and framework debug pages shown to users hand attackers a map of your internals, while silent failures on login and permission checks leave you blind to an attack in progress. Setting one error handler that shows users a generic message with a reference id, and logging security events in a consistent structure, fixes both at once.

                ## Milestones
                1. Debug mode and verbose error pages confirmed off in every production configuration.
                2. A single error handler returning a generic message and a correlation id to the user.
                3. Failed logins, permission denials, password changes and admin actions logged with user, time and source address.
                4. No passwords, tokens or full card numbers appear in any of those log lines.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production returns generic errors with correlation ids, and five named security events are logged in a structured format without secrets."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Trigger an unhandled error in staging and check what the user sees"
                - "Replace detailed error output with a generic message and correlation id"
                - "Add structured log lines for failed logins, denials and admin actions"
                - "Check those log lines contain no tokens or passwords"
            - name: Security checklist in the pull request template
              description: |-
                ## Purpose
                Reviewers catch security problems when they are prompted to look, and miss them when the template only asks about tests and screenshots. Adding five short questions to the pull request template, such as whether the change adds an endpoint, handles a file or changes a permission, puts the standard in front of people at the moment it matters.

                ## Milestones
                1. Five yes or no questions added to the pull request template, each linked to a rule in the team standard.
                2. A label or reviewer rule that routes changes answering yes to a security-aware reviewer.
                3. Three months of merged pull requests sampled to check the questions are being answered honestly.
                4. Questions that never catch anything replaced with ones drawn from recent bugs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pull request template carries a five-question security section, and a monthly sample of merged changes is recorded with its findings."
                cadence: rolling
              tasks:
                - "Draft five yes or no security questions tied to the team standard"
                - "Add the questions to the pull request template in each repository"
                - "Set a label that routes yes answers to a security-aware reviewer"
                - "Sample three merged pull requests against the checklist @recurring(monthly:9)"
            - name: Weekly review slot for high-risk changes
              description: |-
                ## Purpose
                Changes to login, payments, permission rules, file handling and cryptography deserve a second pair of eyes that knows what to look for, but asking for that ad hoc means it happens only when someone remembers. A fixed thirty-minute slot each week, where flagged pull requests are walked through by the author, makes the extra review predictable and teaches the whole room at the same time.

                ## Milestones
                1. A list of code paths that always count as high risk agreed and stored in the repository.
                2. A recurring thirty-minute slot booked with a named host and a rota of reviewers.
                3. Flagged changes reviewed in the slot within a week of being opened.
                4. Findings from the slot noted in one running document the team can search.

                ## Notes
                Use code owners rules to auto-flag pull requests that touch the high-risk paths, so nobody has to remember to ask.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly high-risk review slot runs with a named host, and every flagged change from the last month has a recorded review."
                cadence: rolling
              tasks:
                - "List the directories and files that always count as high-risk code"
                - "Add code owners rules so those paths request a security-aware reviewer"
                - "Host the thirty-minute review of flagged pull requests @recurring(weekly:thu)"
                - "Log each finding from the slot in the shared review notes"
            - name: Lightweight threat modelling for new features
              description: |-
                ## Purpose
                Fixing a design flaw in a whiteboard sketch takes ten minutes, while fixing it after launch can mean a data migration and a disclosure. A forty-five minute threat modelling session on each significant feature, asking what can go wrong at each trust boundary using a simple frame such as STRIDE, catches the access control and abuse problems that code review is too late to see.

                ## Milestones
                1. A one-page threat model format agreed: data flow sketch, trust boundaries, threats, mitigations.
                2. A rule for which features need a session, such as new data stores, new external inputs or new roles.
                3. At least one threat model completed and attached to a design document.
                4. Each mitigation from a session tracked as a ticket with an owner.

                ## Notes
                Start from the **Risk register** template to keep threats that are accepted rather than fixed, with who accepted them and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page threat model format is in use, and every qualifying feature in the last quarter has a completed model with tracked mitigations."
                cadence: rolling
              tasks:
                - "Write the one-page threat model format and save it beside the design doc template"
                - "Agree which kinds of feature always need a threat modelling session"
                - "Run a threat model on the next qualifying feature design @recurring(monthly:14)"
                - "Open a ticket with an owner for every mitigation the session agrees"
            - name: Security champion role on the team
              description: |-
                ## Purpose
                Teams without a named person who cares about security tend to leave it to whoever is most anxious, and that person burns out. Rotating a security champion role every quarter, with a small time allowance and a clear brief, spreads the knowledge, keeps the standard alive and gives the central security team one contact per squad.

                ## Milestones
                1. A written brief for the champion: review slot host, threat model facilitator, contact for the security team.
                2. A time allowance agreed with the manager, such as two hours a week.
                3. The first champion named and introduced to the security team or nearest equivalent.
                4. A handover note passed on at the end of each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A champion brief and time allowance are written down, a champion is named, and each quarter ends with a handover note."
                cadence: cyclic
              tasks:
                - "Write a half-page brief for the security champion role"
                - "Agree the weekly time allowance with the engineering manager"
                - "Share one security lesson or finding at a team meeting @recurring(monthly:20)"
                - "Hand the champion role to the next person with a written note @recurring(quarterly)"
            - name: Rotation schedule for keys used by your code
              description: |-
                ## Purpose
                Keys that never expire are keys that stay valid long after the laptop that held them was lost or the contractor who used them left. Keeping a list of every credential your code depends on, with its owner and last rotation date, and rotating on a schedule turns a panicked weekend after a leak into a routine Tuesday.

                ## Milestones
                1. Every API key, database credential, signing key and service token your code uses listed with its owner.
                2. A rotation interval set for each, based on how much damage a leak would do.
                3. At least one credential rotated end to end with no downtime, and the steps written as a runbook.
                4. Credentials that can be replaced with short-lived tokens or workload identity marked for change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A credential list with owners and rotation dates exists, and no credential is past its interval at the end of each quarter."
                cadence: rolling
              tasks:
                - "List every credential your services read with its owner and last rotation date"
                - "Write the runbook for rotating one database password without downtime"
                - "Check the list for credentials past their rotation date @recurring(monthly:3)"
                - "Rotate the credentials due this quarter and update the list @recurring(quarterly)"
            - name: Monthly review of security event logs
              description: |-
                ## Purpose
                Failed logins, permission denials and unusual admin actions are only useful if someone looks at them before an incident rather than after. A monthly hour reading the security events your code now logs shows credential stuffing, enumeration attempts and broken permission rules early, and tells you which alerts are worth automating.

                ## Milestones
                1. A saved query or dashboard for the five security events defined in the logging project.
                2. A baseline of normal monthly volumes for each event written down.
                3. Any spike or odd pattern traced to a cause and recorded.
                4. At least one alert proposed for a pattern seen twice.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A saved security event dashboard exists, monthly volumes are recorded, and every spike has a written cause."
                cadence: rolling
              tasks:
                - "Save a query that shows the five security events side by side"
                - "Note last month's volumes as the starting baseline"
                - "Read the security event dashboard and note anything unusual @recurring(monthly:12)"
                - "Propose an alert for any pattern you have seen in two reviews"
            - name: Permission matrix kept current as endpoints change
              description: |-
                ## Purpose
                An access control matrix that was right at launch drifts as soon as someone adds an endpoint, a role or a sharing feature. Checking the route list against the matrix every quarter, and refusing to merge new endpoints without a matrix entry and a deny-case test, keeps the work from the foundation project from quietly rotting.

                ## Milestones
                1. A check in review that every new endpoint has a matrix row and a deny-case test.
                2. A quarterly diff of the live route list against the matrix, with gaps closed.
                3. Any role added since the last check given a full column in the matrix.
                4. The matrix stored in the repository so changes to it are reviewed like code.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the live route list matches the permission matrix with no unexplained gaps, and every new endpoint has a deny-case test."
                cadence: cyclic
              tasks:
                - "Move the permission matrix into the repository as a reviewed file"
                - "Add a review question asking for a matrix row on every new endpoint"
                - "Diff the live route list against the permission matrix @recurring(quarterly)"
                - "Add deny-case tests for any endpoint found missing from the matrix"
            - name: Security bug backlog with fix-by dates
              description: |-
                ## Purpose
                Bugs from penetration tests, bug bounty reports, reviews and customer reports land in the same backlog as feature requests and lose every prioritisation argument. Labelling them, giving each severity a fix-by time and checking the list weekly makes the security debt visible and stops a critical finding sitting for a year.

                ## Milestones
                1. A security label and four severity levels defined with a fix-by time for each.
                2. Every open security bug from every source labelled and given a severity.
                3. A weekly check that surfaces any bug past its fix-by date to the team lead.
                4. Accepted risks recorded with who accepted them and when they will be reviewed.

                ## Notes
                Scanner findings and their triage belong to the Application Security Testing area. This backlog is for confirmed bugs, whatever their source.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open security bug carries a severity and fix-by date, and the weekly check shows no critical bug past its date without a recorded acceptance."
                cadence: rolling
              tasks:
                - "Define four severity levels with a fix-by time for each"
                - "Label and grade every open security bug in the tracker"
                - "Review open security bugs against their fix-by dates @recurring(weekly:mon)"
                - "Record accepted risks with an owner and a review date"
            - name: Monthly vulnerable code walkthrough for the team
              description: |-
                ## Purpose
                Engineers remember a bug they watched someone exploit far longer than a slide that described it. Spending thirty minutes a month walking through one real vulnerability, ideally from your own history or a public advisory in a library you use, builds the pattern recognition that makes reviews sharper.

                ## Milestones
                1. A list of ten candidate topics drawn from your own bugs and recent public advisories.
                2. A rota of presenters so the champion is not the only voice.
                3. Each session shows the vulnerable code, the exploit and the fix in under thirty minutes.
                4. Recordings or notes kept in one place for new joiners.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A walkthrough runs every month for six months with notes stored, and at least four different presenters have led one."
                cadence: rolling
              tasks:
                - "Collect ten candidate vulnerabilities from your own history and recent advisories"
                - "Set up a presenter rota for the next six sessions"
                - "Run a thirty-minute walkthrough of one vulnerability and its fix @recurring(monthly:24)"
                - "Store the notes or recording in the team's security folder"
            - name: Yearly revision of the secure coding standard
              description: |-
                ## Purpose
                A standard written two years ago still warns about the frameworks you have replaced and says nothing about the ones you adopted. Revising it once a year against your own incidents, the bug backlog and the latest version of the OWASP lists keeps it short, current and worth quoting.

                ## Milestones
                1. Every security bug and incident from the last twelve months mapped to a rule, or to a gap.
                2. Rules that no longer apply to your stack removed.
                3. New rules added for gaps, each with a code example.
                4. The revised standard announced with a one-paragraph summary of what changed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The standard carries a revision date within the last twelve months and a change summary mapped to the year's bugs."
                cadence: cyclic
              tasks:
                - "Map the last year's security bugs to the rule that should have caught them"
                - "Remove rules for frameworks or patterns you no longer use"
                - "Revise the secure coding standard and publish a change summary @recurring(yearly)"
                - "Walk the team through the changes in a regular team meeting"
            - name: OWASP Top 10 mapped to your own code
              description: |-
                ## Purpose
                Reading the OWASP Top 10 as an abstract list teaches little; finding where each category could appear in your own services teaches a lot. Working through the ten categories one by one, with a real file or endpoint from your codebase for each, turns industry vocabulary into knowledge you can use in review the same week.

                ## Milestones
                1. The current OWASP Top 10 read, with a one-line summary of each category in your own words.
                2. For each category, one place in your code where it could occur, or a note saying why it cannot.
                3. The three categories most relevant to your stack identified.
                4. Notes shared with the team as a short reference page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference page maps all ten current OWASP categories to specific files or endpoints in your codebase, shared with the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the current OWASP Top 10 and summarise each category in one line"
                - "Find one real file or endpoint in your code for each category"
                - "Pick the three categories that matter most for your stack"
                - "Share the mapping as a reference page with the team"
            - name: Practice lab with a deliberately vulnerable app
              description: |-
                ## Purpose
                Attacking code is the fastest way to learn how to defend it, and it is only safe and legal on software built for that purpose. Running an intentionally vulnerable training application locally, such as OWASP Juice Shop or a similar project in your stack, lets you exploit injection, XSS and broken access control yourself and then write the fix.

                ## Milestones
                1. A deliberately vulnerable application running locally or in an isolated container.
                2. At least one challenge solved in each of injection, XSS, broken access control and authentication.
                3. For each solved challenge, a note on how the same bug would look in your own code.
                4. The lab set-up documented so teammates can run it in under fifteen minutes.

                ## Notes
                Only test applications you own or that are built for practice. Trying these techniques on systems without written permission can be a criminal offence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A local vulnerable app is running, challenges in four categories are solved, and each has a note linking it to your own code."
                cadence: rolling
              tasks:
                - "Run a deliberately vulnerable training app in a local container"
                - "Solve one injection and one XSS challenge and note the fix"
                - "Solve one new challenge in the practice lab @recurring(monthly:29)"
                - "Write a fifteen-minute set-up guide for teammates"
            - name: Session and token handling fundamentals
              description: |-
                ## Purpose
                Session bugs let attackers skip the password entirely: a cookie missing the HttpOnly flag, a session id that survives login, a JSON web token accepted with the none algorithm or never expiring. Learning how your framework creates, stores, renews and ends sessions, and checking each step against good practice, closes the gaps that strong passwords cannot.

                ## Milestones
                1. The full lifecycle of a session in your app written down, from login to logout and expiry.
                2. Cookies confirmed as Secure, HttpOnly and with a deliberate SameSite value.
                3. Session ids regenerated on login and on privilege change, and invalidated server side on logout.
                4. If tokens are used, signature algorithm pinned, expiry short and revocation possible.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written session lifecycle for your app exists, and each of the four checks in it has been tested and passed or ticketed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draw the session lifecycle from login to logout for your main app"
                - "Inspect the session cookie in a browser and note its flags"
                - "Check whether the session id changes after login and after a role change"
                - "Confirm logout invalidates the session on the server, not only in the browser"
            - name: Using cryptography libraries correctly
              description: |-
                ## Purpose
                Homemade encryption, hardcoded initialisation vectors, ECB mode and Math.random for tokens appear in production code far more often than anyone admits. Learning the handful of safe choices, a high-level authenticated encryption API, a cryptographically secure random source, constant-time comparison for secrets, and where the keys live, prevents bugs that look fine in every test.

                ## Milestones
                1. Every use of encryption, hashing, signing and random token generation in your code listed.
                2. Each one checked against a short list of safe defaults for your language.
                3. Any non-cryptographic random source used for tokens or ids replaced.
                4. A one-page guide for the team naming the approved library and functions.

                ## Notes
                Prefer the highest-level API your platform offers, such as a sealed box or an AEAD helper, over assembling primitives yourself. If a design needs custom cryptography, get a specialist review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An inventory of cryptographic calls exists, every one matches the approved list or is ticketed, and a one-page team guide is published."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search the code for encryption, hashing, signing and random token calls"
                - "Compare each call with the safe defaults for your language"
                - "Replace any insecure random source used for tokens or reset codes"
                - "Write a one-page approved cryptography guide for the team"
            - name: Server-side request forgery defences
              description: |-
                ## Purpose
                Any feature that fetches a URL a user supplies, such as link previews, webhooks, image imports or PDF renderers, can be turned into a way to reach your internal network or the cloud metadata service. Understanding how SSRF works and building one guarded HTTP client for user-supplied URLs stops a bug class that has led to some of the largest cloud breaches.

                ## Milestones
                1. Every feature that fetches a user-supplied URL found and listed.
                2. A guarded client that resolves the host, blocks private, loopback and link-local ranges, and refuses redirects to them.
                3. Each listed feature switched to the guarded client.
                4. The cloud metadata endpoint requiring a session token or blocked from application workloads.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "All user-URL fetches go through one guarded client, and a test shows requests to private ranges and the metadata address are refused."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every feature that fetches a URL supplied by a user or partner"
                - "Build or adopt an HTTP client that blocks private and metadata addresses"
                - "Switch the riskiest feature to the guarded client first"
                - "Add a test that a redirect to an internal address is refused"
            - name: Safe file upload and parser handling
              description: |-
                ## Purpose
                Files from users are some of the most dangerous input a system takes: a renamed script, an XML file with external entities, a zip that expands to fifty gigabytes, an image library with a known parsing bug. Learning the failure modes and applying a standard upload pattern, with size limits, type checks by content, random storage names and parsing in isolation, keeps one feature from becoming a foothold.

                ## Milestones
                1. Every upload and file import path listed with the parser it uses.
                2. Size limits, content-based type checks and random storage names applied to each.
                3. XML parsers configured with external entities and DTDs disabled.
                4. Uploaded files served from a separate domain or with download headers, never executed.

                ## Notes
                Untrusted serialised objects, such as pickled data or native object streams, are a related risk: never deserialise them into live objects. Use plain data formats with a schema.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every upload path enforces size, content type and random naming, XML entity expansion is disabled, and uploads cannot be executed by the server."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every upload and import path with the library that parses it"
                - "Add size limits and content-based type checks to each path"
                - "Disable external entities in every XML parser configuration"
                - "Serve uploaded files with download headers from a separate origin"
            - name: Cross-site request forgery and SameSite cookies
              description: |-
                ## Purpose
                Forged requests let another site trigger actions as your signed-in user, and the defences have shifted as browsers changed cookie defaults. Learning which of your endpoints rely on cookies, how SameSite and anti-forgery tokens work together, and where APIs with bearer tokens are already immune, tells you exactly which forms and routes still need protection.

                ## Milestones
                1. Every state-changing endpoint marked as cookie-authenticated or token-authenticated.
                2. The framework's anti-forgery protection confirmed on for every cookie-authenticated form and route.
                3. No state change happens on a GET request anywhere in the app.
                4. A test proves a cross-origin form post to a sensitive action is rejected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every cookie-authenticated state change is protected by anti-forgery checks, no GET changes state, and a cross-origin test fails as expected."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each state-changing endpoint as cookie or token authenticated"
                - "Confirm anti-forgery protection is on for every cookie-based form"
                - "Search for GET handlers that create, update or delete data"
                - "Write a test that a cross-origin post to account settings is rejected"
            - name: Writing abuse-case tests alongside features
              description: |-
                ## Purpose
                Tests usually prove that a feature works for the person meant to use it, not that it fails for the person who should not. Learning to write abuse cases, such as another tenant's id, a negative quantity, a script in a name field or an expired token, puts security checks into the same suite that already runs on every change.

                ## Milestones
                1. A short list of abuse-case patterns written for your domain: wrong owner, wrong role, malformed input, replay, expired credential.
                2. Abuse-case tests added to three existing features.
                3. A helper in the test suite that makes calling an endpoint as a different user one line.
                4. The pull request template asks for at least one abuse case on new endpoints.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three features have abuse-case tests, a cross-user test helper exists, and new endpoints are expected to ship with one abuse case."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write five abuse-case patterns that fit your product's domain"
                - "Build a test helper that calls an endpoint as a different user"
                - "Add abuse-case tests to three existing features"
                - "Add an abuse-case question to the pull request template"
            - name: Content Security Policy and security headers rollout
              description: |-
                ## Purpose
                Content Security Policy is the strongest second line against cross-site scripting, but switching it on in enforcing mode on a mature app breaks pages on day one. Rolling it out in report-only mode, fixing inline scripts and third-party sources until reports go quiet, then enforcing, along with the other standard headers, gets the protection without the outage.

                ## Milestones
                1. A report-only policy deployed with violation reports collected.
                2. Inline scripts and event handlers moved to files or covered by nonces.
                3. The policy switched to enforcing once violations are down to known, accepted noise.
                4. Frame, content type sniffing, referrer and transport security headers set on every response.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An enforcing Content Security Policy without unsafe-inline for scripts is live, and the standard security headers appear on every response."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Deploy a report-only Content Security Policy and collect violation reports"
                - "Move the most common inline scripts into files or add nonces"
                - "Review CSP violation reports and fix the top source @recurring(weekly:fri)"
                - "Add frame, sniffing, referrer and transport security headers to all responses"
            - name: Build or buy decision for user authentication
              description: |-
                ## Purpose
                Building login, password reset, MFA, account recovery and session management yourself means owning every one of their security bugs forever. Comparing a managed identity provider, an open source identity server and your current in-house code on cost, lock-in, compliance needs and the security features you would otherwise have to build gives a decision you can defend to a reviewer or an auditor.

                ## Milestones
                1. The authentication features you need listed, including MFA, SSO, recovery and audit logs.
                2. Three options compared on cost at your user count, migration effort and security features.
                3. Password migration and user impact for each option estimated.
                4. A decision recorded with its reasons and the conditions that would reopen it.

                ## Notes
                Start from the **Purchase decision** template. Include the cost of the engineering time you spend maintaining in-house authentication, which is rarely counted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares three authentication options on cost, migration effort and security features, with reasons and a review trigger."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the authentication features you need now and within two years"
                - "Price two identity providers at your current and projected user count"
                - "Estimate the effort of migrating existing password hashes for each option"
                - "Write up the decision with reasons and what would reopen it"
            - name: Rate limiting and brute-force protection on login
              description: |-
                ## Purpose
                Login, password reset, sign-up and one-time code endpoints with no limits invite credential stuffing with leaked password lists and brute-forcing of six-digit codes. Adding limits per account and per source, with a progressive delay rather than a hard lockout that attackers can use to lock out real users, makes those attacks slow and visible.

                ## Milestones
                1. Login, reset, sign-up and code verification endpoints listed with their current limits, if any.
                2. Per-account and per-source limits applied to each, with progressive delays.
                3. One-time codes limited to a small number of attempts before a new code is needed.
                4. Limit hits logged as a security event and visible on the review dashboard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All four authentication endpoints enforce per-account and per-source limits, and a scripted test of a hundred attempts is slowed and logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the current request limits on each authentication endpoint"
                - "Add per-account and per-source limits with progressive delays"
                - "Cap attempts on each one-time code before a new one is required"
                - "Script a hundred failed logins in staging and confirm they are slowed and logged"
            - name: Multi-factor authentication for user accounts
              description: |-
                ## Purpose
                Passwords leak, and multi-factor authentication is the single change that stops most account takeovers from leaked passwords. Offering app-based codes or passkeys, requiring them for admin and staff accounts first, and designing recovery so it is not a back door, brings that protection to the users who need it most.

                ## Milestones
                1. Supported factors chosen, preferring passkeys or authenticator apps over SMS.
                2. MFA required for every admin, staff and support account.
                3. A recovery process that needs more than an email link, with recovery codes issued at enrolment.
                4. Enrolment rate for ordinary users measured and reported.

                ## Notes
                Account recovery is where most MFA schemes are bypassed. Test it as hard as the login itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "MFA is enforced for all privileged accounts, recovery codes are issued at enrolment, and user enrolment rate is reported monthly."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose the supported factors and write down why"
                - "Enforce MFA on every admin and support account"
                - "Design account recovery with recovery codes and a second check"
                - "Report the MFA enrolment rate for ordinary users @recurring(monthly:6)"
            - name: Banned dangerous functions list
              description: |-
                ## Purpose
                Dangerous functions such as eval, shell execution with string arguments, unsafe deserialisers and raw HTML setters keep reappearing because they are the shortest way to get something working. Writing a short list of banned calls for each language, with the safe alternative beside each, and making the linter fail on them stops the same bugs being reintroduced.

                ## Milestones
                1. A banned list for each language you use, with the safe alternative for every entry.
                2. Existing uses found and either replaced or given a reviewed, commented exception.
                3. The linter configured to fail the build on any new banned call.
                4. The list linked from the secure coding standard.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A per-language banned function list exists with safe alternatives, and the build fails on any new use without a reviewed exception."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the banned call list for each language with a safe alternative"
                - "Search for existing uses of every banned call"
                - "Replace or document each existing use with a reviewed exception"
                - "Turn on the lint rule so new banned calls fail the build"
            - name: Secure-by-default helpers for common tasks
              description: |-
                ## Purpose
                Building the safe version of a common task into a shared helper means engineers get it right without having to remember. A small internal package with a guarded HTTP client, a query helper that only takes parameters, a permission check wrapper and a safe redirect function turns the team standard into code that is easier to use than the unsafe way.

                ## Milestones
                1. The five tasks that most often go wrong in review identified.
                2. A helper for each, with tests that include abuse cases.
                3. The helpers documented with one example each and linked from the standard.
                4. Existing code in one service migrated to the helpers as proof they fit.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An internal package provides tested safe helpers for five common tasks, and one service uses all of them in production."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the five tasks that review comments most often correct"
                - "Write the safe redirect helper with tests for open redirect cases"
                - "Document each helper with a single example"
                - "Migrate one service to the helpers and note what did not fit"
            - name: Personal data and secrets kept out of logs
              description: |-
                ## Purpose
                Logs are copied to more places and read by more people than any database, so a token or a customer's address in a log line is a leak waiting to happen. Adding redaction at the logger level for known sensitive fields, and sampling real logs each month to catch what slipped through, protects users and keeps you out of awkward privacy conversations.

                ## Milestones
                1. A list of sensitive field names agreed: passwords, tokens, card numbers, government ids, addresses.
                2. Redaction applied in the logging library so those fields are masked wherever they appear.
                3. Request and response body logging switched off or redacted in production.
                4. A monthly sample of production logs checked for anything that slipped through.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Logger-level redaction masks the agreed sensitive fields, and each monthly log sample is recorded with any leak ticketed."
                cadence: rolling
              tasks:
                - "Agree the list of field names that must never appear in logs"
                - "Add redaction for those fields in the shared logging configuration"
                - "Turn off or redact request body logging in production"
                - "Sample a day of production logs for secrets and personal data @recurring(monthly:27)"
            - name: Preparing for an external penetration test
              description: |-
                ## Purpose
                Penetration tests booked without preparation spend half their days on access problems and findings you already knew about. Agreeing the scope in writing, giving testers test accounts for every role, a staging copy with realistic data and your attack surface map, and fixing the known issues first, means the paid days go on bugs you could not have found yourself.

                ## Milestones
                1. Scope agreed in writing: applications, environments, test dates and anything off limits.
                2. Test accounts created for every role, including two separate tenants.
                3. Known issues from the bug backlog fixed or listed for the testers so they are not reported again.
                4. A named contact and an emergency stop process agreed for the test window.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed scope, test accounts for every role, the attack surface map and a known issues list are handed to the testers before day one."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the written scope and test dates with the testing firm"
                - "Create test accounts for every role across two separate tenants"
                - "Fix or document the known issues so testers skip them"
                - "Name a contact and agree how to stop testing in an emergency"
            - name: Remediation sprint after a penetration test report
              description: |-
                ## Purpose
                Findings that are not fixed within a few weeks of the report tend to stay open until next year's test finds them again. Triaging every finding, fixing the critical and high ones in a dedicated sprint, and asking the testers to retest gives you a clean letter for customers and a list of root causes to feed back into the standard.

                ## Milestones
                1. Every finding confirmed, graded and assigned an owner within a week of the report.
                2. Critical and high findings fixed and deployed.
                3. A retest completed by the testers, with the results letter filed.
                4. Each finding mapped to a root cause and, where useful, a new rule in the standard.

                ## Notes
                Start from the **Remediation plan** template. Search for the same pattern elsewhere before closing a finding; testers sample, they do not find every instance.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "All critical and high findings are fixed and confirmed in a retest letter within sixty days of the report, with root causes recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the report and grade each finding with an owner"
                - "Plan a sprint for every critical and high finding"
                - "Search the codebase for other instances of each finding's pattern"
                - "Book the retest and file the results letter"
            - name: Pre-launch security review for a new product
              description: |-
                ## Purpose
                Launch week is when a new product gets its first real attackers and when the team has the least time to think about them. Running a structured review two to four weeks before launch, covering authentication, permissions, data handling, secrets and abuse cases, catches the shortcuts taken under deadline while there is still time to fix them.

                ## Milestones
                1. The threat model for the product reviewed and its mitigations confirmed done.
                2. The checklist covering authentication, permissions, input, output, secrets and logging worked through.
                3. Every blocking issue fixed and every non-blocking one ticketed with a date.
                4. A launch sign-off recorded with the names of who reviewed it.

                ## Notes
                Start from the **Operational checklist** template so the same review runs for every launch and gets better each time.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed pre-launch security checklist with no open blocking issues is signed off by two named reviewers before launch."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book a two-hour pre-launch review at least two weeks before launch"
                - "Work through the launch checklist with the feature team"
                - "Fix the blocking issues and ticket the rest with dates"
                - "Record the sign-off with the reviewers' names"
            - name: Vulnerability report response drill
              description: |-
                ## Purpose
                Someone outside the company will eventually email you saying they found a bug in your code, and the first hour decides whether it becomes a quiet fix or a public story. Writing a response plan, publishing a security contact, and rehearsing one invented report from receipt to fix and reply, means the real one meets people who know what to do.

                ## Milestones
                1. A security contact address and a security.txt file published.
                2. A one-page response plan: who acknowledges, who verifies, who fixes, who replies.
                3. One invented report run through the plan as a tabletop exercise in under ninety minutes.
                4. Gaps from the drill fixed in the plan.

                ## Notes
                Thank reporters and reply within a couple of working days, even before you have verified the bug. Silence is what pushes researchers to publish.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A security contact is published, a response plan exists, and one tabletop drill has been run with its gaps written up."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Publish a security contact address and a security.txt file"
                - "Write a one-page plan naming who acknowledges, verifies, fixes and replies"
                - "Run a ninety-minute tabletop drill with an invented report"
                - "Update the plan with the gaps the drill exposed"
            - name: Secure development answers for customer questionnaires
              description: |-
                ## Purpose
                Enterprise customers send security questionnaires that ask how you write, review and test code, and engineers end up answering the same fifty questions from scratch for every deal. Writing honest, reusable answers about your standard, review process, threat modelling and remediation times once, with evidence links, saves days per deal and shows where your practice has gaps.

                ## Milestones
                1. The secure development questions from the last three questionnaires collected in one place.
                2. An honest answer written for each, with a link to evidence such as the standard or review records.
                3. Answers that describe something you do not actually do flagged as gaps, not overstated.
                4. The answer bank handed to sales or the security owner with a review date.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A reusable bank of secure development answers with evidence links covers every question from three recent questionnaires."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the secure development questions from three recent questionnaires"
                - "Ask the agent to draft first answers from the standard and review records"
                - "Correct every answer that overstates what the team actually does"
                - "Hand the answer bank to the security owner with a review date"
            - name: Secure coding basics in a new engineer's first month
              description: |-
                ## Purpose
                New engineers copy the patterns they see in the first files they open, safe or not. A short first-month plan covering the team standard, the practice lab, the permission matrix and one shadowed high-risk review gives a new joiner the habits before the deadlines arrive, and costs the team a few hours.

                ## Milestones
                1. A first-month security plan written with three or four sessions and a reading list.
                2. The new engineer has read the standard and asked their questions.
                3. One practice lab challenge solved and one high-risk review shadowed.
                4. Their first pull request that touches a high-risk path reviewed with extra explanation.

                ## Notes
                Start from the **Training program** template so the same plan can be reused for every joiner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reusable first-month security plan exists, and each new joiner completes its sessions and shadowed review within thirty days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a four-session first-month security plan with a reading list"
                - "Walk the new engineer through the team standard in thirty minutes"
                - "Invite them to shadow the next weekly high-risk review"
                - "Pair on their first change to a high-risk code path"
            - name: Security assessment of an inherited codebase
              description: |-
                ## Purpose
                Inheriting a service from another team, an acquisition or a departed founder usually means inheriting its security debt with no list of where it is. Spending a focused two weeks on the attack surface, authentication, permission checks, secrets and query patterns gives you a ranked risk list before you start shipping features on top of it.

                ## Milestones
                1. Attack surface, authentication method and secret handling documented for the inherited code.
                2. Spot checks done on queries, output encoding and permission checks in the ten riskiest endpoints.
                3. A ranked list of risks with an estimated fix size for each.
                4. The top three risks agreed with your manager as work for the next cycle.

                ## Notes
                Start from the **Risk register** template. Record what you checked and found clean as well as what you found broken, so the next person does not repeat the work.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked risk register for the inherited code exists within thirty days, and the top three risks are scheduled with your manager."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the previous owners for known security issues and past incidents"
                - "Map the attack surface and authentication of the inherited code"
                - "Spot check the ten riskiest endpoints for query, output and permission bugs"
                - "Rank the risks and agree the top three with your manager"
            - name: Minimum security for a solo engineer at a startup
              description: |-
                ## Purpose
                Early-stage startups with one or two engineers cannot run a security programme, but a breach of an early customer's data can still end the company. Picking the handful of controls with the most protection per hour, a managed identity provider, parameterised queries, secrets in a store, MFA on every admin console and backups you have restored, and doing them first, is the realistic version of secure coding at that size.

                ## Milestones
                1. A list of no more than ten controls chosen for the next three months.
                2. MFA turned on for the code host, cloud console, domain registrar and email.
                3. Authentication handed to a managed provider or checked against the password storage project.
                4. One hour a month set aside for the next item on the list.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A ten-item control list exists, MFA is on for every admin console, and the monthly security hour has been kept for three months running."
                cadence: rolling
              tasks:
                - "Turn on MFA for the code host, cloud console, registrar and email today"
                - "Write the ten controls that matter most for your product right now"
                - "Check that every database query in the app uses bound parameters"
                - "Spend one hour on the next control on the list @recurring(monthly:2)"
            - name: Security in the team's definition of done
              description: |-
                ## Purpose
                Leads who say security matters but never ask about it in planning get the security their deadlines allow. Writing three security items into the definition of done, such as a threat model for new data flows, abuse-case tests for new endpoints and the checklist answered, and checking one finished ticket each month against it, makes the expectation concrete without adding a gate.

                ## Milestones
                1. Three security items added to the definition of done, agreed by the team.
                2. Planning includes a question about security impact for each significant ticket.
                3. One completed ticket checked against the definition of done each month.
                4. Items that never apply removed, and gaps found in incidents added.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The definition of done includes three security items, and a monthly check of one completed ticket is recorded for six months."
                cadence: rolling
              tasks:
                - "Propose three security items for the definition of done at the next retro"
                - "Add a security impact question to the planning ticket template"
                - "Check one recently closed ticket against the definition of done @recurring(monthly:18)"
                - "Remove items that never apply after a quarter"
            - name: Reviewing AI-generated code for security flaws
              description: |-
                ## Purpose
                AI coding assistants produce working code quickly, including string-built queries, missing permission checks, outdated crypto calls and imports of packages that do not exist. Agreeing how the team reviews generated code, what it is never used for without a second reviewer, and how suggested dependencies are verified, keeps the speed without importing a fresh set of old bugs.

                ## Milestones
                1. A short team rule on reviewing generated code to the same bar as hand-written code.
                2. High-risk paths, such as authentication and permissions, needing a second human reviewer when generated code is used.
                3. Every new dependency suggested by an assistant checked to exist, be maintained and match the intended package name.
                4. A monthly sample of generated changes reviewed for the patterns in the team standard.

                ## Notes
                Package names invented by assistants have been registered by attackers. Check the registry page and download history before installing anything unfamiliar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rule for generated code is in the standard, and a monthly sample of AI-assisted changes is reviewed with findings recorded."
                cadence: rolling
              tasks:
                - "Write a half-page rule for reviewing AI-generated code"
                - "Require a second reviewer for generated code in authentication and permission paths"
                - "Check each assistant-suggested package exists and is the one intended"
                - "Review a sample of AI-assisted changes against the standard @recurring(monthly:22)"
            - name: Security acceptance of code handed over by an agency
              description: |-
                ## Purpose
                Agency and contractor code usually arrives at the end of a contract, working, demoed and with nobody left to answer for its security. Running an acceptance review before the final invoice is paid, against your standard and with the agency still on hand to fix findings, is far cheaper than discovering the problems after the handover.

                ## Milestones
                1. Acceptance criteria based on the team standard shared with the agency before handover.
                2. A review of secrets, queries, output, permissions and dependencies completed.
                3. Findings sent to the agency with a date for fixes under the contract.
                4. Acceptance signed off only when blocking findings are closed.

                ## Notes
                Agree the security acceptance criteria when the contract is signed if you can. Asking for fixes after payment rarely works.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written acceptance review of the handed-over code is completed, and blocking findings are closed by the agency before final sign-off."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Send the agency the security acceptance criteria before handover"
                - "Search the delivered code for hardcoded secrets and string-built queries"
                - "Test permission checks on every endpoint the agency built"
                - "Send findings with a fix date and hold sign-off until blockers close"
            - name: Tenant isolation enforced in the data layer
              description: |-
                ## Purpose
                Tenant data leaking into another customer's account is the bug that ends B2B contracts, and it usually comes from one query that forgot a tenant filter. Moving tenant scoping from hand-written conditions into the data layer, using row-level security or a scoped repository that takes the tenant from the session, makes forgetting impossible rather than unlikely.

                ## Milestones
                1. Every table holding tenant data identified and confirmed to carry a tenant id column.
                2. Tenant scoping enforced in one place, through row-level security or a scoped data access layer.
                3. The tenant id taken only from the authenticated session, never from request parameters.
                4. Cross-tenant tests that try to read and write another tenant's data run in the suite.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tenant scoping is enforced in the data layer for every tenant table, and cross-tenant read and write tests pass every quarter."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every table with tenant data and confirm it has a tenant id"
                - "Choose between row-level security and a scoped repository for enforcement"
                - "Make the tenant id come only from the authenticated session"
                - "Run the cross-tenant read and write tests against staging @recurring(quarterly)"
            - name: Business logic abuse and race condition cases
              description: |-
                ## Purpose
                Race conditions and business logic flaws, such as redeeming one coupon twice in parallel, transferring a negative amount or skipping a step in checkout, pass every scanner because the code does exactly what it says. Thinking through how each money or quota feature could be abused, and testing concurrent requests deliberately, finds the bugs that cost real money.

                ## Milestones
                1. Every feature involving money, credits, quotas, invitations or limits listed.
                2. For each, the abuse cases written: replay, parallel requests, negative values, skipped steps.
                3. Concurrent request tests run against the riskiest three, with results recorded.
                4. Fixes in place using database constraints, idempotency keys or row locks where needed.

                ## Notes
                A unique constraint or a conditional update in the database is usually more reliable than a check in application code followed by a write.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Abuse cases are written for every money or quota feature, and parallel request tests on the riskiest three pass after fixes."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every feature that moves money, credits or quota"
                - "Write abuse cases for each: replay, parallel, negative and skipped steps"
                - "Fire twenty parallel requests at the coupon or credit redemption endpoint"
                - "Fix any double spend with a database constraint or idempotency key"
            - name: Security review of an OAuth or SSO integration
              description: |-
                ## Purpose
                OAuth and single sign-on integrations fail in small, specific ways: a loose redirect URI match, a missing state parameter, no PKCE on a public client, or an email claim trusted from a provider that does not verify it. Reviewing your integrations against the current best practice for the protocol prevents account takeover through the very feature meant to make login safer.

                ## Milestones
                1. Every OAuth, OpenID Connect and SAML integration listed with its role as client or provider.
                2. Redirect URIs matched exactly, with no wildcards or open redirects on allowed paths.
                3. State and PKCE used on every authorisation code flow, and ID token signatures and audience checked.
                4. Account linking confirmed to require a verified email or an explicit link step.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each OAuth and SSO integration passes a written check of redirect matching, state, PKCE, token validation and account linking."
                cadence: cyclic
              tasks:
                - "List every OAuth, OpenID Connect and SAML integration you run"
                - "Check each registered redirect URI is an exact match"
                - "Confirm state and PKCE are present on every authorisation code flow"
                - "Re-check every SSO integration against current best practice @recurring(yearly)"
            - name: Memory safety plan for native code components
              description: |-
                ## Purpose
                Native code that parses untrusted input, such as image decoders, protocol handlers and compression libraries, is where buffer overflows and use-after-free bugs turn into remote code execution. Listing your native components, fuzzing the ones that take outside input, and deciding where a memory-safe language or a sandbox should replace them is the work that removes whole classes of bug.

                ## Milestones
                1. Every C or C++ component and native extension in your stack listed with the input it parses.
                2. Compiler hardening flags and sanitiser builds confirmed for the code you compile.
                3. A fuzzing harness running against the component with the most exposed input.
                4. A recorded decision for each component: keep and harden, sandbox, or rewrite in a memory-safe language.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Native components are listed with their inputs, one has a running fuzz harness, and each has a recorded keep, sandbox or rewrite decision."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List native components and extensions with the input each one parses"
                - "Check compiler hardening flags in the build configuration"
                - "Write a fuzzing harness for the most exposed parser"
                - "Record a keep, sandbox or rewrite decision for each component"
            - name: Variant analysis after a vulnerability is fixed
              description: |-
                ## Purpose
                Fixing one reported bug and moving on leaves its siblings in place: the same unchecked id pattern usually sits in a dozen other handlers. After each confirmed vulnerability, describing the pattern precisely and searching the whole codebase for other instances, then encoding the pattern as a review rule or lint check, turns one report into a closed class.

                ## Milestones
                1. The root pattern of the vulnerability written in one or two sentences, independent of the file it was in.
                2. A search of all repositories for the same pattern, with every match reviewed.
                3. Other true instances fixed in the same release where possible.
                4. The pattern added to the standard, the review checklist or a custom lint rule.

                ## Notes
                Do this for near misses caught in review too, not only for bugs that shipped. They are cheaper lessons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each confirmed vulnerability, a written pattern, a codebase-wide search result and a new rule or check are recorded within two weeks."
                cadence: rolling
              tasks:
                - "Describe the root pattern of the latest vulnerability in two sentences"
                - "Search every repository for code matching the same pattern"
                - "Fix each true match or ticket it with an owner"
                - "Add the pattern to the review checklist or a custom lint rule"
---

# Secure Coding Practices

This area is for engineers and teams who want the code they write every day to resist the attacks that actually happen: injection, cross-site scripting, broken access control, leaked secrets and hijacked sessions. It starts with foundations (knowing your attack surface, a short team standard, secrets out of the code, parameterised queries, validation, encoding, password storage and server-side permission checks), moves through the review and threat modelling routines that keep those habits alive, then the skills worth practising, the hardening decisions, dated events such as a penetration test or a launch review, situations from an inherited codebase to a solo startup, and specialist work on tenant isolation, business logic abuse and variant analysis.

What repeats is a weekly look at risky pull requests and open security bugs, monthly threat modelling, log reviews, champion updates and practice, quarterly secret rotation and permission matrix checks, and a yearly revision of the standard. The Operational checklist, Risk register, Training program, Purchase decision and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
