---
id: founding-startups.choosing-the-startup-tech-stack
name: Choosing the Startup Tech Stack
description: "Pick a language, framework, database, hosting and core services a small team can ship fast with, record why, keep the stack healthy month to month and know your exit routes before the company outgrows it."
category: business
version: 1.0.0
tags: [founding-startups, choosing-the-startup-tech-stack, founder, engineer, tech-stack, architecture, hosting, vendor-choice]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - vendor
    - risk-register
    - operational-checklist
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Choosing the Startup Tech Stack
          description: "Picking technology for an early product that a small team can build fast with, without boxing the company in later."
          projects:
            - name: Product constraints brief before picking any technology
              description: |-
                ## Purpose
                Stack debates go round in circles when nobody has written down what the product actually has to do in its first eighteen months. A one-page brief covering platforms, expected users, data sensitivity, real-time or offline needs and integrations turns taste arguments into a short list of hard requirements that rule options in or out.

                ## Milestones
                1. One page listing target platforms, expected users at twelve and eighteen months and peak load assumptions.
                2. Data sensitivity classified, with any personal, payment or health data named.
                3. Must-have integrations and real-time, offline or heavy file needs listed.
                4. Three non-requirements written down, such as global scale or native desktop, so nobody designs for them.

                ## Notes
                Write expected users as a range, not a hope. Most early products serve hundreds or a few thousand people, which almost any mainstream stack handles comfortably.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page constraints brief with platforms, user ranges, data sensitivity, integrations and three explicit non-requirements is agreed by every founder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the platforms the first version must run on"
                - "Estimate users at twelve and eighteen months as a low and high range"
                - "Classify the data the product will hold by sensitivity"
                - "Write three things the product deliberately does not need yet"
            - name: Founding team skills inventory for the stack
              description: |-
                ## Purpose
                The fastest stack for a three-person team is usually the one they already know well, not the one that tops a survey. Mapping each person's real depth in languages, frameworks, databases and operations shows where the team is strong, where one person is a single point of failure and which choices would mean learning on the critical path.

                ## Milestones
                1. Each founder and early engineer rated on languages, frameworks, databases, cloud and front end, from aware to expert.
                2. Areas with only one competent person flagged as concentration risks.
                3. The two or three technologies the team could ship in tomorrow named.
                4. Any skill gap the product constraints brief demands written as a hiring or learning need.

                ## Notes
                Start from the **Skills matrix** template. Rate by what someone has shipped to production, not what they have read about.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A completed skills matrix covers every technical person, with single points of failure flagged and the team's ship-tomorrow technologies named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each technical person to rate themselves on the same list of tools"
                - "Mark each rating with a shipped project as evidence"
                - "Flag every technology only one person can work in confidently"
                - "Write the gaps the constraints brief exposes as hiring or learning needs"
            - name: Innovation budget for the first product
              description: |-
                ## Purpose
                Every unfamiliar technology costs debugging time, thin documentation and fewer people to hire, and a startup can only afford a couple of those bets. Deciding up front where the team will spend its two or three allowed experiments, and that everything else will be boring and well trodden, keeps novelty where it creates an advantage for customers.

                ## Milestones
                1. A limit of two or three new or unproven technologies agreed for the first product.
                2. Each allowed experiment tied to a customer-facing reason it is worth the risk.
                3. Every other layer of the stack marked as boring, mature and widely used.
                4. The budget written into the stack decision record so later additions must spend from it.

                ## Notes
                A new database, a new language and a new deployment model in one product is three bets at once. Pick the one closest to your differentiation.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written innovation budget names at most three new technologies, each with the customer reason that justifies it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every technology in the draft stack the team has not shipped before"
                - "Write the customer benefit each unfamiliar choice would bring"
                - "Cut the list to the two or three with the strongest benefit"
                - "Replace the rest with the most widely used mature option"
            - name: Web, mobile or both as the first platform
              description: |-
                ## Purpose
                Building for web, iOS and Android at once roughly triples the surface a small team has to test and support. Choosing where the first users really are, from interviews and analytics rather than assumption, decides whether the first release is a responsive web app, a mobile app, or one platform with the other deliberately later.

                ## Milestones
                1. Evidence gathered on which devices and contexts target users would use the product in.
                2. Native device needs listed, such as camera, background location, push or offline.
                3. One primary platform chosen for the first release, with the reason recorded.
                4. A trigger written for when a second platform gets built.

                ## Notes
                A responsive web app or installable web app often covers early users while you learn. App store review adds days to every release.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One primary platform is chosen for the first release, with supporting evidence and a written trigger for adding the next platform."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Review discovery notes for where users said they would use the product"
                - "List features that genuinely need native device access"
                - "Pick the primary platform and write the reason in two sentences"
                - "Write the usage signal that would justify a second platform"
            - name: Primary language and framework choice
              description: |-
                ## Purpose
                Language and framework together decide hiring pool, library ecosystem, how fast a feature goes from idea to production and how painful the codebase is in three years. Comparing two or three mainstream candidates against the constraints brief and the skills inventory, rather than the newest option, usually produces a clear winner within a week.

                ## Milestones
                1. Two or three candidate language and framework pairs shortlisted.
                2. Each scored on team fluency, ecosystem maturity, hiring pool, hosting support and fit with the constraints brief.
                3. A short spike or reference app checked for each finalist where scores are close.
                4. One choice made and recorded with the main reason and the runner-up.

                ## Notes
                Weight team fluency heavily. A framework the founders know deeply will usually beat a theoretically better one for the first two years.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One language and framework is chosen from a scored shortlist, with the deciding reason and the runner-up written in the decision record."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist two or three mainstream framework options that fit the brief"
                - "Score each against fluency, ecosystem, hiring pool and hosting support"
                - "Check job listings in your hiring market for each finalist"
                - "Record the choice, the runner-up and the deciding reason"
            - name: Primary database for the first year
              description: |-
                ## Purpose
                Data outlives code, and moving it later is the most expensive migration a young company does. For most products a well-supported relational database covers documents, search and queues well enough for years, so the decision is mainly about confirming nothing in the product truly needs something else and choosing a managed provider with backups included.

                ## Milestones
                1. The product's main data shapes and relationships sketched on one page.
                2. Any need that a relational database handles poorly named with evidence, or ruled out.
                3. A database engine and managed provider chosen, with automated backups and point-in-time recovery confirmed.
                4. Rough storage and connection limits for the first year checked against the plan's tier.

                ## Notes
                Choosing a niche database because one feature might need it later is a common regret. Add a specialist store when a real workload proves the need.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A database engine and managed provider are chosen, with backups and point-in-time recovery confirmed on the selected plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the main entities and how they relate on one page"
                - "Write down any workload that would strain a relational database"
                - "Compare two managed providers on backups, recovery and pricing"
                - "Confirm the chosen plan's connection and storage limits"
            - name: Hosting and deployment platform choice
              description: |-
                ## Purpose
                Founders pick between a managed platform that deploys from a git push and a raw cloud account that offers everything but demands operations skill. Choosing on the basis of who will run it at two in the morning, what it costs at ten times today's load and how easy it is to leave avoids both an early operations burden and a surprise bill.

                ## Milestones
                1. Three hosting options compared, including at least one managed platform and one major cloud provider.
                2. Monthly cost estimated at launch load and at ten times launch load for each.
                3. Operations effort, regions, compliance offers and exit difficulty scored.
                4. One platform chosen and the founding environment created on it.

                ## Notes
                Start from the **Purchase decision** template. Check egress and bandwidth pricing, which is where hosting bills most often surprise people.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hosting platform is chosen from three compared options, with cost at launch and ten times launch load estimated and recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist one managed platform, one major cloud and one alternative"
                - "Estimate each option's monthly bill at launch and ten times launch"
                - "Read each provider's egress and bandwidth pricing page"
                - "Create the founding account under a company email, not a personal one"
            - name: Stack decision record for the founding choices
              description: |-
                ## Purpose
                Six months from now, a new engineer or an investor's adviser will ask why the company chose this database or that host, and memory will have rewritten the answer. Writing a short decision record for each major choice, with the options considered, the reason and what would make you revisit it, turns the stack from folklore into something the team can review calmly.

                ## Milestones
                1. One short record per major choice: platform, language and framework, database, hosting and auth.
                2. Each record lists the options considered, the decision, the reason and the revisit trigger.
                3. Records stored in the repository beside the code, not in a chat thread.
                4. Every founder has read and agreed the records.

                ## Notes
                Keep each record under a page. The revisit trigger is the most useful line: a cost, a load level or a hire that would reopen the question.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five decision records, each with options, choice, reason and revisit trigger, are committed to the repository."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a decisions folder in the main repository"
                - "Ask the agent to draft a record skeleton from your notes on each choice"
                - "Add a revisit trigger to every record"
                - "Ask each founder to read the records and note disagreements"
            - name: Founding repository and three environments
              description: |-
                ## Purpose
                Starting clean saves weeks later: one repository with a readme that gets a new laptop running in under an hour, plus separate development, staging and production environments. Getting this right before the first user means no one tests against live data and no deploy depends on one person's machine.

                ## Milestones
                1. A main repository owned by a company account, with branch protection on the main branch.
                2. A readme that takes a fresh machine from clone to running app in under an hour.
                3. Development, staging and production environments with separate databases and credentials.
                4. A second person has followed the readme from scratch and fixed what was missing.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A second person sets up the app from the readme in under an hour, and staging and production use separate databases and credentials."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Move the repository under a company organisation account"
                - "Write a setup readme from a freshly cloned copy"
                - "Create a staging environment with its own database"
                - "Ask a teammate to follow the readme and time it"
            - name: Automated test and deploy pipeline
              description: |-
                ## Purpose
                When deploying means one founder running commands from memory, releases get rarer and riskier. A pipeline that runs tests on every change and deploys the main branch automatically makes small, frequent releases normal, and a weekly glance at build time and flaky tests keeps it from quietly slowing everyone down.

                ## Milestones
                1. Tests and a linter run automatically on every pull request.
                2. Merging to the main branch deploys to staging, and production deploys with one approved step.
                3. Rollback to the previous release documented and tried once.
                4. Pipeline duration and flaky tests reviewed weekly and kept under an agreed limit.

                ## Notes
                Aim for a pipeline under ten minutes. Once it passes twenty, people start batching changes, which is what makes releases scary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every merge to main reaches staging automatically, rollback has been tried once and pipeline time stays under the agreed limit for a quarter."
                cadence: rolling
              tasks:
                - "Turn on automatic test runs for every pull request"
                - "Set main branch merges to deploy to staging automatically"
                - "Practise rolling back to the previous release on staging"
                - "Check pipeline duration and quarantine flaky tests @recurring(weekly:fri)"
            - name: Third-party service register and renewal calendar
              description: |-
                ## Purpose
                Within a year a startup quietly accumulates twenty or thirty services: hosting, email, error tracking, analytics, design tools, domains. Keeping one register of what each does, who owns it, what it costs, what data it holds and when it renews prevents surprise charges, orphaned accounts tied to a departed person and missed renewals that take the product down.

                ## Milestones
                1. Every paid and free service listed with owner, purpose, monthly cost and renewal date.
                2. Each service's data access noted, including any personal data it receives.
                3. All accounts registered to company emails with billing on a company card.
                4. A monthly look at renewals due in the next ninety days in place.

                ## Notes
                Start from the **Vendor** template. Domain registrations and certificates expiring are among the most common causes of avoidable outages.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every service with owner, cost, data held and renewal date, and no account is tied to a personal email."
                cadence: rolling
              tasks:
                - "Search the company card statements for every software charge"
                - "Add each service with owner, cost, data held and renewal date"
                - "Move any service on a personal email to a company address"
                - "Review renewals due in the next ninety days @recurring(monthly:14)"
            - name: Weekly dependency update routine
              description: |-
                ## Purpose
                Libraries left unpatched for a year turn into a week-long upgrade with security holes along the way. Merging small automated dependency updates every week, and checking once a month for major versions and end-of-life dates on the framework and runtime, keeps upgrades boring and keeps the company out of a forced rewrite.

                ## Milestones
                1. Automated dependency update pull requests switched on for the main repositories.
                2. A weekly slot where minor updates are reviewed and merged.
                3. Runtime, framework and database versions listed with their end-of-life dates.
                4. No component in production past its end-of-life date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Minor dependency updates are merged within two weeks of release and no production component runs past its published end-of-life date."
                cadence: rolling
              tasks:
                - "Switch on automated dependency update pull requests"
                - "List runtime, framework and database versions with end-of-life dates"
                - "Merge the week's minor dependency updates after tests pass @recurring(weekly:tue)"
                - "Check for major releases and end-of-life notices @recurring(monthly:9)"
            - name: Monthly backup restore test
              description: |-
                ## Purpose
                Backups that have never been restored are a hope, not a plan, and many founders discover a broken backup only on the worst day of the company's life. Restoring the production database to a scratch environment once a month proves the backups work, shows how long recovery really takes and catches a misconfigured retention setting before it matters.

                ## Milestones
                1. Automated database and file storage backups confirmed with retention periods written down.
                2. A first restore to a scratch environment completed and timed.
                3. A short restore runbook any engineer could follow.
                4. A monthly restore test logged with duration and any problems.

                ## Notes
                Delete the scratch copy after each test, since it contains real customer data and needs the same protection as production.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A restore of production data to a scratch environment succeeds every month for six months, with each duration logged."
                cadence: rolling
              tasks:
                - "Confirm backup frequency and retention for the database and file storage"
                - "Restore last night's backup to a scratch environment and time it"
                - "Write the restore steps as a one-page runbook"
                - "Run and log a restore test, then delete the copy @recurring(monthly:20)"
            - name: Quarterly stack fitness review
              description: |-
                ## Purpose
                Choices that were right at ten customers can become a drag at five hundred, and the opposite mistake is changing tools because something new appeared. A short quarterly review that reads each decision record's revisit trigger against real numbers gives the team a calm, scheduled place to change course, instead of a panic or a rewrite pitched on a Friday.

                ## Milestones
                1. Current load, cost, deploy frequency and incident counts gathered before each review.
                2. Every decision record's revisit trigger checked against the numbers.
                3. Each component marked keep, watch or change, with an owner for anything marked change.
                4. Outcomes added to the decision records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year each mark every stack component keep, watch or change, with outcomes added to the decision records."
                cadence: cyclic
              tasks:
                - "Collect load, spend, deploy and incident numbers for the quarter"
                - "Hold the stack fitness review and mark each component @recurring(quarterly)"
                - "Assign an owner to every component marked change"
                - "Update the decision records with the review outcome"
            - name: Error monitoring and small-team alert rota
              description: |-
                ## Purpose
                Customers of a young product rarely report bugs, they just leave. Error tracking and uptime checks wired to a simple rota mean the team hears about failures before customers do, and a regular prune of noisy alerts stops a two-person team learning to ignore every notification.

                ## Milestones
                1. Error tracking installed on front end and back end, with releases tagged.
                2. Uptime checks on the main pages and API, alerting a named person.
                3. A rota that says who watches alerts each week, including weekends.
                4. Noisy alerts removed or tuned each month so every alert means action.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Error tracking and uptime alerts reach a named person on a written rota, and each month's alert prune leaves no alert ignored more than twice."
                cadence: rolling
              tasks:
                - "Install error tracking on the front end and back end"
                - "Set uptime checks on the home page, sign-in and main API"
                - "Triage last week's new errors and assign the top three @recurring(weekly:mon)"
                - "Remove or retune alerts nobody acted on @recurring(monthly:27)"
            - name: Secrets manager and access sweep
              description: |-
                ## Purpose
                Early teams paste API keys into chat, share one admin login and forget to remove contractors. Moving secrets into a secrets manager, giving everyone their own account with two-factor sign-in and sweeping access every month closes the most common route to an early breach and makes offboarding a ten-minute job.

                ## Milestones
                1. All production secrets stored in a secrets manager, none in the repository or chat.
                2. Shared logins replaced by individual accounts with two-factor sign-in.
                3. A written offboarding list naming every system to remove a person from.
                4. A monthly access sweep logged across hosting, code, database and key services.

                ## Notes
                Search the repository history for keys, not just the current files. A key committed once and deleted is still exposed and must be rotated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No secret lives in the repository or chat, every account is individual with two-factor sign-in, and twelve monthly access sweeps are logged."
                cadence: rolling
              tasks:
                - "Scan the repository history for committed keys and rotate any found"
                - "Move production secrets into a secrets manager"
                - "Write the offboarding list of every system with user accounts"
                - "Remove anyone who no longer needs access to each system @recurring(monthly:3)"
            - name: Open-source licence check for dependencies
              description: |-
                ## Purpose
                Some open-source licences place obligations on how you distribute your product, and an acquirer's or investor's lawyers will look. A quarterly scan of dependency licences, with a short policy on which licence families need a second look, avoids an awkward finding in due diligence and a forced replacement under deadline.

                ## Milestones
                1. A licence scanning tool run against every repository.
                2. A one-paragraph policy on which licence families are fine and which need review.
                3. Any flagged dependency reviewed and kept, replaced or referred to a lawyer.
                4. A quarterly scan result saved for future due diligence.

                ## Notes
                This is housekeeping, not legal advice. Take any genuinely unclear licence question to a lawyer who works with software companies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A licence policy exists and four quarterly scan reports are saved, with every flagged dependency resolved."
                cadence: cyclic
              tasks:
                - "Run a licence scanner across the main repositories"
                - "Write which licence families need a second look before use"
                - "Resolve each flagged dependency as keep, replace or ask a lawyer"
                - "Rerun the licence scan and save the report @recurring(quarterly)"
            - name: Team technology radar
              description: |-
                ## Purpose
                Engineers will always want to try new tools, and banning that kills learning while allowing everything fragments the codebase. A simple radar that sorts technologies into adopt, trial, assess and hold, refreshed every quarter, gives curiosity a sanctioned outlet and tells a new hire at a glance what the house stack is.

                ## Milestones
                1. A one-page radar with adopt, trial, assess and hold rings.
                2. Every technology in production placed on it.
                3. A rule that anything in trial has an owner and an end date.
                4. The radar refreshed each quarter with what moved and why.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A radar covering every production technology is published to the team and refreshed four times in a year."
                cadence: cyclic
              tasks:
                - "Draw adopt, trial, assess and hold rings on one page"
                - "Place every production technology on the radar"
                - "Give each trial item an owner and an end date"
                - "Refresh the radar with the team and note what moved @recurring(quarterly)"
            - name: Learning the chosen framework's conventions
              description: |-
                ## Purpose
                Teams that fight their framework write twice the code for half the result. Spending two focused weeks on the framework's official guide, its recommended project layout and the way experienced users handle data access, testing and background jobs means the codebase starts idiomatic, which makes every later hire faster.

                ## Milestones
                1. The framework's official guide worked through end to end.
                2. A reference application from the framework's maintainers read for structure.
                3. House conventions for folders, naming, data access and tests written on one page.
                4. The first real feature reviewed against those conventions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page house conventions document exists and the first production feature passes review against it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Block two hours a day for ten days to work through the official guide"
                - "Read a maintainer-built reference app and note its structure"
                - "Write the house conventions for folders, naming and tests"
                - "Review the first real feature against the conventions"
            - name: Reading cloud and SaaS pricing models
              description: |-
                ## Purpose
                Usage-based pricing hides its surprises in bandwidth, per-seat charges, overage tiers and the moment a free plan ends. Learning how your main providers actually charge, and building a small sheet that predicts the bill from users and traffic, means growth shows up as a forecast rather than an invoice shock.

                ## Milestones
                1. Pricing pages for hosting, database and the three largest services read line by line.
                2. Each provider's main cost driver identified, such as compute hours, storage, egress or seats.
                3. A sheet that predicts monthly cost from active users and traffic.
                4. Spending alerts set at fifty and ninety percent of the monthly budget on every metered provider.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cost model predicts the next month's infrastructure bill within twenty percent, and budget alerts are set on every metered provider."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the hosting and database pricing pages and note every metered item"
                - "Find each provider's biggest cost driver from last month's invoice"
                - "Build a sheet that predicts cost from users and traffic"
                - "Set spending alerts at fifty and ninety percent of budget"
            - name: Database basics every founder should know
              description: |-
                ## Purpose
                Founders who understand indexes, transactions, migrations and connection limits can read an incident report, question an estimate and spot when a slow page is a missing index rather than a reason to rewrite. A few evenings of practical study against a copy of your own schema pays back the first time production slows down.

                ## Milestones
                1. Indexes, transactions, migrations and connection pooling explained back in your own words.
                2. The slowest five queries in the app found using the database's own tools.
                3. One migration written, applied to staging and rolled back.
                4. A one-page note on how the team changes the schema safely.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The five slowest queries are identified, one migration has been applied and rolled back on staging and a schema change note exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work through a practical tutorial on indexes and query plans"
                - "Find the five slowest queries using the database's statistics"
                - "Write, apply and roll back one migration on staging"
                - "Write the team's safe schema change steps on one page"
            - name: Vendor lock-in and exit cost map
              description: |-
                ## Purpose
                Some dependence on a provider is fine and buys speed, but founders should know which choices would take a weekend to undo and which would take a quarter. Mapping each major service by how proprietary it is and what leaving would cost lets you accept lock-in deliberately where it pays and avoid it where it does not.

                ## Milestones
                1. Each major service rated for how proprietary its interfaces and data formats are.
                2. A rough exit cost in engineer-weeks estimated for each.
                3. Data export tested for the services that hold customer or business data.
                4. The two highest exit costs recorded as accepted risks with a reason.

                ## Notes
                Start from the **Risk register** template. Proprietary authentication and database features usually carry the highest exit cost.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every major service has a lock-in rating and exit cost estimate, and data export has been tested for each service holding customer data."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every service whose removal would break the product"
                - "Estimate in engineer-weeks what leaving each would cost"
                - "Export a sample of data from each service holding customer data"
                - "Record the accepted lock-in risks with the reason for each"
            - name: Technical vocabulary for a non-technical founder
              description: |-
                ## Purpose
                Non-technical founders often defer every stack conversation and then cannot tell a reasonable estimate from a warning sign. Learning enough vocabulary to follow a discussion of front end, back end, APIs, databases, hosting and deploys lets you ask the right questions of engineers and contractors without pretending to be one.

                ## Milestones
                1. A personal glossary of twenty to thirty terms written in plain words.
                2. A one-page diagram of your own product's parts drawn with an engineer.
                3. Five questions prepared to ask about any proposed technology choice.
                4. One stack discussion followed and summarised back accurately to the engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary and a diagram of the product exist, and an engineer confirms your summary of a stack discussion is accurate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to explain your product's stack in plain words, term by term"
                - "Draw the product's parts on one page with an engineer"
                - "Write five questions to ask about any technology proposal"
                - "Summarise a stack discussion back to an engineer to check understanding"
            - name: Stacks of comparable startups studied
              description: |-
                ## Purpose
                Companies a few years ahead of you in a similar market have already hit the limits you are worried about. Reading their engineering blogs, conference talks and job listings shows what stacks they started on, what they changed and when, which is better evidence than a ranking of popular frameworks.

                ## Milestones
                1. Five comparable companies chosen by product type, not by fame.
                2. Each one's starting stack and later changes noted from public sources.
                3. Patterns written up: what they kept, what they replaced and at what size.
                4. Lessons that change your own decision records added to them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written comparison of five similar companies' stacks and changes exists, with at least one resulting update to the decision records."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick five companies a few years ahead in a similar product type"
                - "Read their engineering blogs and job listings for stack clues"
                - "Note what each changed and at roughly what company size"
                - "Add any lessons to the relevant decision records"
            - name: Modular monolith patterns for a small team
              description: |-
                ## Purpose
                Splitting into many services early gives a three-person team the operational load of a large company with none of the benefits. Learning to structure one deployable application into clear modules with firm boundaries keeps it simple to run today and makes it possible to pull out a service later if a real scaling need appears.

                ## Milestones
                1. Two or three sources on modular monolith design read and summarised.
                2. The product's main domains drawn as modules with allowed dependencies between them.
                3. A simple automated check that flags imports crossing module boundaries.
                4. Module boundaries agreed with every engineer and added to the conventions page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The application has named modules with documented allowed dependencies and an automated check that fails on boundary violations."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read two practical write-ups on modular monolith design"
                - "Draw the product's domains as modules with allowed arrows"
                - "Add an automated check for imports that cross module boundaries"
                - "Agree the boundaries with the engineers and record them"
            - name: Build or buy authentication and sign-in
              description: |-
                ## Purpose
                Sign-in looks simple until it needs password resets, two-factor, social login, single sign-on for business customers and breach protection. Comparing a hosted identity provider, your framework's built-in auth and a self-hosted open-source option against cost per active user and the features buyers will ask for prevents a painful swap after the first enterprise deal.

                ## Milestones
                1. Required sign-in features listed for now and for the first business customers.
                2. Three options compared on features, cost per active user and data export.
                3. One option chosen, with the way out documented in case pricing changes.
                4. Sign-in, reset and two-factor flows tested end to end on staging.

                ## Notes
                Start from the **Purchase decision** template. Check the price at the user count you hope to reach in two years, not just today.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An authentication approach is chosen from three compared options, and sign-in, reset and two-factor flows pass on staging."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the sign-in features business customers will ask for"
                - "Compare three auth options on cost per active user at two-year scale"
                - "Check how user records and password hashes can be exported"
                - "Test sign-in, reset and two-factor on staging"
            - name: Payments and billing provider choice
              description: |-
                ## Purpose
                Taking money touches tax, invoices, refunds, failed cards and subscription changes, and none of it is where a startup should innovate. Choosing a payments and billing provider that supports your countries, currencies and pricing model, and that keeps card data off your servers, removes a large compliance burden and lets pricing experiments happen without code changes.

                ## Milestones
                1. Required countries, currencies, payment methods and billing model listed.
                2. Two or three providers compared on coverage, fees, subscription features and payout timing.
                3. A provider chosen that keeps card details away from your own servers.
                4. A test purchase, refund and failed payment run in the provider's test mode.

                ## Notes
                Check payout support for your own country before anything else. Founders outside the largest markets sometimes find a provider will not pay out to their local bank.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payments provider is chosen that covers the required countries and currencies, and a test purchase, refund and failed payment all pass."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the countries, currencies and payment methods customers need"
                - "Confirm each provider pays out to your company's bank country"
                - "Compare fees and subscription features for your pricing model"
                - "Run a test purchase, refund and failed card in test mode"
            - name: Email and notification provider set-up
              description: |-
                ## Purpose
                Password resets that land in spam make a product look broken. Choosing a transactional email provider, setting up the domain authentication records correctly and keeping product email separate from marketing email protects deliverability, and a monthly look at bounce and complaint rates catches problems before sign-ups quietly fail.

                ## Milestones
                1. A transactional email provider chosen and connected for product emails.
                2. Domain authentication records published and verified.
                3. Product and marketing email sent from separate subdomains or streams.
                4. Bounce and complaint rates checked monthly against the provider's limits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Domain authentication passes verification, product and marketing email are separated and monthly bounce and complaint checks are logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a transactional email provider and connect the app"
                - "Publish and verify the domain authentication records"
                - "Send product and marketing email from separate subdomains"
                - "Check bounce and complaint rates against limits @recurring(monthly:11)"
            - name: Product analytics tool selection
              description: |-
                ## Purpose
                Analytics bolted on late leaves months of decisions with no data, while the wrong tool leaves the team exporting spreadsheets. Picking an analytics tool that handles events and funnels for your product type, respects the privacy rules where your users live and can send data to a warehouse later gives the founders numbers they trust from the first cohort.

                ## Milestones
                1. The questions the founders need answered in the first six months written down.
                2. Two or three tools compared on event tracking, funnels, privacy controls, pricing and data export.
                3. One tool chosen and installed with a consent approach suited to your users' regions.
                4. The first funnel built and checked against database counts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An analytics tool is installed with consent handling, and the first funnel matches database counts within five percent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five questions analytics must answer in six months"
                - "Compare tools on funnels, privacy controls and raw data export"
                - "Install the chosen tool with a consent banner where required"
                - "Check the first funnel's numbers against the database"
            - name: Monolith or services decision
              description: |-
                ## Purpose
                Engineers who joined from larger companies often arrive expecting many small services, queues and container orchestration. Making the call explicitly, with the team size, deploy needs and operational skill in front of you, usually lands on one application and one database for now, and writes down the specific conditions under which a piece gets split out.

                ## Milestones
                1. Team size, deploy frequency and operations skill written down honestly.
                2. The operational cost of each extra service listed: monitoring, deploys, data consistency.
                3. A decision recorded, most often one deployable application for now.
                4. Concrete split triggers written, such as a component needing different scaling or a separate team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record states the chosen architecture and at least two concrete, measurable triggers for splitting out a service."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down team size and who can run production infrastructure"
                - "List what each additional service would add to operations"
                - "Record the architecture decision with the reasons"
                - "Write the measurable triggers for splitting a component out"
            - name: Cross-platform or native mobile framework
              description: |-
                ## Purpose
                Once mobile is the chosen platform, the next call is one shared codebase or separate native apps. Weighing the team's skills, the device features the product needs, performance demands and how often you will ship gets you a framework a small team can maintain on both stores without doubling headcount.

                ## Milestones
                1. Device features and performance needs listed from the constraints brief.
                2. A cross-platform framework and native development compared on those needs and team skills.
                3. A small prototype of the hardest screen built in the leading option.
                4. A framework chosen and recorded with the reason.

                ## Notes
                Only relevant if the first platform decision chose mobile. Archive this project otherwise.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A mobile approach is chosen after a prototype of the hardest screen, and the decision is recorded with its reason."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the device features and performance needs for mobile"
                - "Compare cross-platform and native options against team skills"
                - "Build the hardest screen as a quick prototype"
                - "Record the mobile framework decision"
            - name: Managed or self-hosted for each component
              description: |-
                ## Purpose
                Running your own database, queue or search cluster saves money on paper and costs nights and weekends in practice. Going through each component and deciding whether the managed version's premium is worth the operations time saved, priced in founder hours, usually shows that early teams should self-host almost nothing.

                ## Milestones
                1. Each component listed with managed and self-hosted options.
                2. Monthly cost of each option set beside an estimate of hours to run it.
                3. Founder or engineer hours valued at a realistic rate.
                4. A choice recorded per component, with any self-hosting justified by more than price.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every infrastructure component has a recorded managed or self-hosted decision with cost and operations hours compared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every component that has a managed and self-hosted option"
                - "Estimate monthly hours to patch, monitor and back up each"
                - "Put a realistic hourly value on engineer time"
                - "Record the choice for each component"
            - name: AI model provider and switching layer
              description: |-
                ## Purpose
                Model prices, quality and terms change every few months, so a product wired directly to one provider's interface can be stuck with yesterday's choice. Choosing a provider on evaluation results for your actual prompts, and putting a thin internal layer between the product and the model, keeps switching a configuration change instead of a rewrite.

                ## Milestones
                1. A small evaluation set of real prompts and expected outputs built from the product's use cases.
                2. Two or three models scored on quality, latency and cost per thousand requests.
                3. A provider chosen and called through a single internal interface.
                4. Monthly model spend and quality reviewed against the evaluation set.

                ## Notes
                Check each provider's data retention and training terms before sending customer data. Strategy for an AI-first company belongs in its own area; this project is only about the stack.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model provider is chosen on a scored evaluation set and is called through one internal interface that can switch providers by configuration."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect thirty real prompts with the outputs you would accept"
                - "Score two or three models on quality, latency and cost"
                - "Route all model calls through one internal interface"
                - "Rerun the evaluation set and review model spend @recurring(monthly:23)"
            - name: File uploads and media storage choice
              description: |-
                ## Purpose
                Uploads stored on the application server vanish on the next deploy or fill the disk, and serving large images straight from the app makes every page slow. Choosing object storage with direct uploads from the browser, a content delivery network in front and a resizing step for images settles where files live before customers start adding thousands of them.

                ## Milestones
                1. File types, typical sizes and expected volume for the first year estimated.
                2. An object storage provider chosen, with uploads going direct from the browser rather than through the app server.
                3. Images resized and served through a content delivery network.
                4. Private files served only through short-lived signed links.

                ## Notes
                Decide early whether customer files must stay in a particular region. Moving millions of files later is slow and costly in transfer fees.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Uploads go direct to object storage, images are served resized through a delivery network and private files use short-lived signed links."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate file types, sizes and first-year upload volume"
                - "Compare two object storage providers on storage and transfer pricing"
                - "Set up direct browser uploads to the chosen bucket"
                - "Serve private files through short-lived signed links"
            - name: Two-day framework bake-off
              description: |-
                ## Purpose
                When two finalists score within a point of each other, more reading will not settle it. Building the same thin slice of the product, sign-in plus one core screen backed by the database, in each candidate over two fixed days gives the team first-hand evidence on speed, ergonomics and rough edges.

                ## Milestones
                1. One thin slice defined that both builds must deliver.
                2. Both builds completed within the two-day limit, or their blockers recorded.
                3. Each scored on time to working slice, code clarity and friction points.
                4. A winner chosen and both builds archived, not shipped.

                ## Notes
                Throw both builds away afterwards. A bake-off build carried into production carries every shortcut taken under the clock.
              priority: low
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Both candidate frameworks build the same slice within two days, are scored on the same criteria and a winner is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the thin slice both builds must deliver"
                - "Block two consecutive days with no meetings"
                - "Build the slice in each framework and log friction points"
                - "Score both builds and record the winner"
            - name: First production deploy day
              description: |-
                ## Purpose
                Launching to real users is the moment when DNS, certificates, environment variables and database migrations all have to work together. Treating it as a planned event with a checklist, a rehearsal on staging and a rollback plan turns a nervous evening into a routine first release.

                ## Milestones
                1. A full rehearsal of the deploy completed on staging.
                2. Domain, certificate, environment variables and migrations checked off a written list.
                3. Error tracking and uptime checks confirmed live before users arrive.
                4. A rollback plan written and the person who would run it named.

                ## Notes
                Start from the **Operational checklist** template. Deploy early in the week and early in the day, never just before a weekend.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first production deploy completes from a written checklist after a staging rehearsal, with monitoring live and a rollback owner named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the production deploy checklist step by step"
                - "Rehearse the whole deploy on staging"
                - "Confirm monitoring is reporting from production"
                - "Name the person who would run the rollback"
            - name: Load test before the public launch
              description: |-
                ## Purpose
                A launch post that works is the worst time to discover the database connection limit. Running a simple load test against staging at three to five times expected launch traffic shows where the stack breaks first, so the fix is a configuration change made calmly rather than an outage watched live.

                ## Milestones
                1. Expected launch traffic estimated and a test target set at three to five times it.
                2. The main user paths scripted in a load testing tool.
                3. The test run against staging and the first bottleneck identified.
                4. The bottleneck fixed or a limit agreed, and the test rerun.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Staging handles three times expected launch traffic on the main paths, with the first bottleneck found and fixed before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate launch day peak traffic from your channels"
                - "Script sign-up, sign-in and the core action in a load testing tool"
                - "Run the test on staging and note where it breaks first"
                - "Fix the bottleneck and rerun the test"
            - name: Technical due diligence pack for a funding round
              description: |-
                ## Purpose
                Investors in later seed and series A rounds increasingly ask an adviser to look at the code, architecture and security. A prepared pack with an architecture diagram, the decision records, key risks, backup and access practices and licence scans makes that review short and shows a stack chosen on purpose.

                ## Milestones
                1. An up-to-date architecture diagram showing services, data stores and providers.
                2. Decision records, licence scans and restore test logs gathered in one folder.
                3. Known technical debt and risks listed honestly with plans.
                4. A practice walkthrough of the pack done with an engineer from outside the company.

                ## Notes
                Share the pack through a data room with access logs, not as email attachments. Keep code access read-only and time-limited.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A due diligence folder with diagram, decision records, risk list, restore logs and licence scans is complete and reviewed by an outside engineer."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draw the current architecture with every service and data store"
                - "Gather decision records, restore logs and licence scans in one folder"
                - "Write the known debt and risk list with plans"
                - "Walk an outside engineer through the pack and note their questions"
            - name: Stack walkthrough for the first engineering hire
              description: |-
                ## Purpose
                The first engineer who did not choose the stack will question it, and that is useful if they understand the reasons first. A prepared walkthrough of the architecture, the decision records and the house conventions, followed by a first-week change shipped to production, gets them productive quickly and invites challenge through the proper channel.

                ## Milestones
                1. A one-hour architecture walkthrough prepared with diagram and decision records.
                2. The setup readme followed by the new hire on day one.
                3. A small change shipped to production in the first week.
                4. The new hire's questions and challenges captured for the next stack review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The first engineering hire ships a change to production in week one and their stack questions are logged for the quarterly review."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Prepare a one-hour walkthrough using the architecture diagram"
                - "Pick a small, real first-week change for the new hire"
                - "Ask them to follow the setup readme and fix any gaps"
                - "Log their stack challenges for the next fitness review"
            - name: Non-technical founder's stack with a freelance developer
              description: |-
                ## Purpose
                Hiring a freelancer or agency often leaves a founder with whatever that developer prefers, hosted on their account, in a niche framework no one else knows. Setting a few non-negotiables before work starts, such as a mainstream stack, company-owned accounts and code in your repository, keeps the product yours and makes the next developer's job possible.

                ## Milestones
                1. A short brief stating the stack must be mainstream, with a hiring pool you have checked.
                2. Repository, hosting, domain and service accounts owned by the company, with the developer invited.
                3. A clause on code ownership and handover in the contract, reviewed by a lawyer.
                4. A second developer's opinion on the proposed stack before the build starts.

                ## Notes
                Never let the domain or hosting sit on the developer's account. Recovering them after a dispute can take months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All accounts are company-owned, the contract covers code ownership and handover, and an independent developer has approved the proposed stack."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create company accounts for code, hosting and the domain"
                - "Write a one-page brief with the stack non-negotiables"
                - "Ask an independent developer to review the proposed stack"
                - "Ask a lawyer to check the code ownership and handover clause"
            - name: Low-maintenance stack for a solo engineer founder
              description: |-
                ## Purpose
                Solo engineer founders cannot afford a stack that needs weekly care, because every hour of maintenance is an hour not spent with customers. Picking managed services, one language across front and back end where sensible, and a single monthly maintenance hour keeps the product running while you sell.

                ## Milestones
                1. Every component reviewed for weekly maintenance burden.
                2. Anything needing regular hands-on care replaced with a managed alternative.
                3. Alerts set so that only real customer-facing failures wake you.
                4. A monthly maintenance hour in the calendar for updates, renewals and checks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "No component needs weekly manual care, and a monthly maintenance hour is held for six months in a row."
                cadence: rolling
              tasks:
                - "Note how many hours each component took to look after last month"
                - "Replace the most demanding component with a managed service"
                - "Cut alerts to customer-facing failures only"
                - "Hold the solo maintenance hour for updates and checks @recurring(monthly:6)"
            - name: Data residency and hosting for regulated products
              description: |-
                ## Purpose
                Products handling health, financial, children's or government data may face rules about where data is stored, who can access it and what certifications a host must hold. Mapping those requirements with a qualified adviser before choosing regions and providers avoids a migration forced by the first serious customer's security questionnaire.

                ## Milestones
                1. The categories of regulated data the product will hold listed.
                2. Residency, access and certification requirements confirmed with a qualified adviser.
                3. Hosting regions and providers chosen that meet them, with evidence saved.
                4. An annual check that providers still hold the required certifications.

                ## Notes
                This is preparation, not legal advice. The adviser confirms what applies; the project makes sure the stack can meet it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Regulated data categories and their residency requirements are confirmed by an adviser, and the chosen hosting regions are documented as meeting them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every category of regulated data the product will hold"
                - "Book a session with an adviser on residency and certification rules"
                - "Choose hosting regions and save the providers' compliance evidence"
                - "Check providers still hold the required certifications @recurring(yearly)"
            - name: Stack choice for a small local hiring market
              description: |-
                ## Purpose
                Founders building in smaller markets, including much of the Caribbean, Africa and smaller European cities, may find only a handful of local engineers in some frameworks. Checking local and remote hiring pools, salary ranges and time zones for your shortlisted stack keeps the first five hires possible without paying a large premium for scarce skills.

                ## Milestones
                1. Local job boards, meetups and university courses checked for each shortlisted technology.
                2. Remote hiring options in compatible time zones listed.
                3. Rough salary ranges noted for each technology locally and remotely.
                4. The hiring pool evidence added to the language and framework decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A hiring pool summary for each shortlisted technology, local and remote, is attached to the framework decision and refreshed yearly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count local job listings and meetups for each shortlisted framework"
                - "Ask two local technical leads which skills are easiest to hire"
                - "Note salary ranges locally and in compatible remote time zones"
                - "Refresh the hiring pool check before the year's hiring plan @recurring(yearly)"
            - name: Inheriting a prototype built by an agency or contractor
              description: |-
                ## Purpose
                Many startups raise money or win first customers on a prototype someone else built, then discover nobody on the team can safely change it. An honest assessment of the code, accounts and data before adding features tells you whether to stabilise it, rebuild parts or start again, and what each would cost.

                ## Milestones
                1. All repositories, hosting, domain and service accounts transferred to the company.
                2. The code run locally from scratch by a team engineer.
                3. An assessment of tests, security basics, dependencies and documentation written.
                4. A stabilise, partial rebuild or restart decision recorded with an estimate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All accounts are company-owned, the code runs locally for a team engineer and a stabilise, rebuild or restart decision is recorded with an estimate."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every account the contractor controls and request transfers"
                - "Have a team engineer run the code from a fresh clone"
                - "Ask the agent to summarise the codebase structure and obvious gaps"
                - "Record the stabilise, rebuild or restart decision with an estimate"
            - name: Student founder stack on free tiers and credits
              description: |-
                ## Purpose
                Student founders can often run a product for close to nothing using free tiers, student developer packs and startup credit programmes from cloud providers. Choosing a stack that fits within those limits, and knowing exactly when each credit or free tier expires, avoids a bill landing in the middle of exams.

                ## Milestones
                1. Student developer packs and startup credit programmes applied for.
                2. Each service's free tier limits and credit expiry dates written down.
                3. Spending alerts set on every account with a card attached.
                4. A plan for what costs look like once credits end.

                ## Notes
                Credits often expire after twelve months whether used or not. Avoid designing around a service you could not afford once they run out.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every credit and free tier is listed with its limit and expiry, spending alerts are on, and a post-credit cost estimate exists."
                cadence: rolling
              tasks:
                - "Apply for the student developer packs your university qualifies for"
                - "List each free tier limit and credit expiry date"
                - "Set spending alerts on every account with a card attached"
                - "Check credit balances and upcoming expiries @recurring(monthly:16)"
            - name: Multi-tenant data isolation design
              description: |-
                ## Purpose
                Any business product that shows one customer another customer's data can lose every customer at once. Deciding how tenants are separated, whether by a tenant column with enforced filters, separate schemas or separate databases, and testing that separation automatically, is far cheaper before the data model fills up than after.

                ## Milestones
                1. Isolation options compared for security, cost, migrations and enterprise customer demands.
                2. One model chosen and written into the conventions.
                3. Isolation enforced at the database or framework layer, not left to each query.
                4. Automated tests that prove one tenant cannot read another's records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tenant isolation model is documented, enforced below individual queries and covered by automated cross-tenant access tests."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare shared tables, separate schemas and separate databases"
                - "Write the chosen isolation model into the conventions"
                - "Enforce tenant filtering at the database or framework layer"
                - "Add tests that try to read another tenant's records"
            - name: Infrastructure cost per active customer
              description: |-
                ## Purpose
                Total cloud spend says little until it is divided by the customers it serves. Tracking infrastructure and third-party service cost per active account each month shows whether the stack gets cheaper or dearer as you grow, and flags a single heavy customer or a costly feature before it eats the margin.

                ## Milestones
                1. Monthly infrastructure and service costs split into fixed and per-usage.
                2. Cost per active account calculated for the last three months.
                3. The heaviest customers and most expensive features identified.
                4. A monthly figure tracked with a ceiling agreed with the founders.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Infrastructure cost per active account is tracked monthly for six months against an agreed ceiling."
                cadence: rolling
              tasks:
                - "Split last month's infrastructure bills into fixed and usage costs"
                - "Divide usage costs by active accounts for the last three months"
                - "Find the three customers or features driving the most cost"
                - "Update cost per active account and compare to the ceiling @recurring(monthly:25)"
            - name: Disaster recovery plan and yearly drill
              description: |-
                ## Purpose
                Restoring a database is one thing; losing a hosting region, an account or a key provider is another. Writing down recovery time and data loss targets the business can live with, how you would rebuild elsewhere, and running a yearly drill tells founders and customers honestly how long an outage could last.

                ## Milestones
                1. Recovery time and acceptable data loss targets agreed by the founders.
                2. Infrastructure defined as code or scripted well enough to rebuild in another region.
                3. Copies of backups stored in a separate account or provider.
                4. A yearly drill run with the time to recover recorded against the target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Recovery targets are written, backups exist in a separate account and a yearly drill records actual recovery time against the target."
                cadence: cyclic
              tasks:
                - "Agree recovery time and data loss targets with the founders"
                - "Copy backups to a separate account or provider"
                - "Script the infrastructure so it can be rebuilt in another region"
                - "Run the disaster recovery drill and record the time @recurring(yearly)"
            - name: Data warehouse once metrics outgrow the app
              description: |-
                ## Purpose
                Running reporting queries against the production database works until it slows down the product or the questions span analytics, billing and support data. Moving reporting into a small warehouse with scheduled syncs gives the founders a single place for numbers without risking the live app.

                ## Milestones
                1. The signal written down that triggered the move, such as slow reports or questions across tools.
                2. A warehouse and sync tool chosen to fit current data volume and budget.
                3. Production, billing and analytics data syncing on a schedule.
                4. The weekly founder metrics rebuilt from the warehouse and checked against source systems.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production, billing and analytics data sync to a warehouse on a schedule, and weekly founder metrics match source systems."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down which reports are slow or need data from several tools"
                - "Pick a warehouse and sync tool sized for current data volume"
                - "Set scheduled syncs from production, billing and analytics"
                - "Rebuild the weekly founder metrics from the warehouse"
            - name: Re-platforming plan when the stack stops fitting
              description: |-
                ## Purpose
                Sometimes a component genuinely stops working for the company: costs jump, a provider changes terms or the load outgrows it. Planning the move as a series of small, reversible steps with both systems running side by side, rather than a big-bang rewrite, keeps customers unaffected and the team shipping product while it happens.

                ## Milestones
                1. The evidence for the move written down against the decision record's revisit trigger.
                2. A step-by-step migration with both systems running in parallel during the change.
                3. Success checks and a rollback point defined for every step.
                4. The old component retired and the decision record updated.

                ## Notes
                If the case for re-platforming rests on taste rather than numbers, wait a quarter and look again. Full rewrites rarely finish on schedule.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The component is migrated in reversible steps with no customer-facing outage over five minutes, and the decision record is updated."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the numbers that justify moving off the component"
                - "Break the migration into steps that can each be rolled back"
                - "Run old and new systems side by side and compare results"
                - "Retire the old component and update the decision record"
---

# Choosing the Startup Tech Stack

This area is for founders and founding engineers who have to choose technology before they know how big the company will get. It starts with foundations (the product constraints, the team's real skills, the platform, language, database and hosting choices and a written decision record), moves through the routines that keep a young stack healthy, the knowledge a founder needs to judge trade-offs, the buy or build calls on auth, payments, email, analytics and AI models, dated moments like the first production deploy and a technical due diligence pack, variants for non-technical, solo and student founders, and ends with specialist work on tenancy, disaster recovery and re-platforming.

What repeats is the quiet maintenance most early teams skip: a weekly dependency merge and pipeline check, Monday error triage, monthly restore tests, access sweeps, spend and renewal reviews, and a quarterly look at whether each choice still fits. The Skills matrix, Purchase decision, Vendor, Risk register and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
