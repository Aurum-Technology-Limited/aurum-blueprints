---
id: software-engineering.internal-developer-platform
name: Internal Developer Platform
description: "A platform run as a product: a service catalogue with owners, golden paths for new services, self-service environments and guardrails, and the adoption routines that let product teams ship without filing tickets."
category: business
version: 1.0.0
tags: [software-engineering, internal-developer-platform, engineer, enterprise, platform-engineering, golden-paths, developer-portal, self-service]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - product-spec
    - feedback-themes
    - compliance-control
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Internal Developer Platform
          description: "Building self-service paved roads for creating, deploying and operating services, so product teams ship safely without needing platform experts."
          projects:
            - name: Platform team charter and named customers
              description: |-
                ## Purpose
                A platform team without a charter becomes the place every unowned infrastructure job lands, and within a year it is a ticket queue rather than a product. Writing down who the customers are, which problems the platform solves first and what it will refuse to own gives the team a basis for saying no and gives leadership something to fund against.

                ## Milestones
                1. A one-page charter naming the customer teams, the problems in scope and the explicit non-goals.
                2. Three measurable outcomes the platform is accountable for in its first year.
                3. The charter reviewed by at least two product engineering leads and one executive sponsor.
                4. The charter published where every engineer can find it, with an owner and a review date.

                ## Notes
                Keep the non-goals list as long as the goals list. The most common failure is a platform that quietly absorbs on-call, cost reporting and security tooling because nobody else would.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published platform charter with named customer teams, non-goals and three first-year outcomes, signed off by an executive sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every team that deploys software and the person who leads each one"
                - "Draft the problems the platform will solve first and the ones it will not"
                - "Pick three outcomes with a number attached, such as days to first deploy"
                - "Review the draft with two product engineering leads and the sponsor"
                - "Publish the charter and set a review date six months out"
            - name: Map of every path to production today
              description: |-
                ## Purpose
                Before building a paved road you need to know how many dirt tracks already exist: hand-rolled pipelines, a deploy script on one laptop, a shared cluster nobody admits to running. Mapping how each team gets a change from merge to production shows where the duplication, waiting and risk really sit, and usually reveals that three or four patterns cover most teams.

                ## Milestones
                1. Every team's route from merged change to production drawn as a list of steps and handoffs.
                2. Waiting time between steps estimated for each route, with ticket handoffs marked.
                3. The routes grouped into a small number of common patterns.
                4. A short readout naming the two patterns worth paving first and why.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of the deployment route for every team, grouped into patterns, with the first two to pave chosen and justified."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a 30-minute walkthrough with one engineer from each delivery team"
                - "Record each step from merge to production and who has to approve it"
                - "Mark every step that needs a ticket to another team"
                - "Group the routes into patterns and count teams on each"
                - "Present the two patterns to pave first at the next engineering leads meeting"
            - name: Service catalogue with an owner for every service
              description: |-
                ## Purpose
                When an alert fires at night or a vulnerable library turns up in forty repositories, the first question is who owns this, and in most organisations nobody can answer quickly. A catalogue listing every running service with its owning team, repository, runtime and on-call route is the backbone the rest of the platform hangs from.

                ## Milestones
                1. An inventory of running services pulled from clusters, cloud accounts and repositories.
                2. Every service assigned to one owning team, with orphans listed separately.
                3. Each entry carrying repository, runtime, environments and on-call route.
                4. The catalogue searchable by any engineer, with orphaned services down to zero or each assigned a decision date.

                ## Notes
                Ownership belongs to a team, never a person. An entry that names an individual goes stale the week that person changes teams.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A searchable catalogue in which every running service has an owning team, repository and on-call route, with no unowned services left undecided."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export the list of running workloads from each cluster and cloud account"
                - "Match each workload to a repository and a likely owning team"
                - "Send each team lead their list to confirm or reject"
                - "Escalate the orphaned services to engineering leadership with a decision date"
            - name: Ownership metadata file in every repository
              description: |-
                ## Purpose
                Hand-maintained catalogues drift within weeks. Putting a small, versioned metadata file in each repository, declaring owner, lifecycle stage, system and dependencies, lets the portal build itself from source and makes ownership changes part of normal code review.

                ## Milestones
                1. A metadata schema agreed with required fields for owner, lifecycle and system.
                2. A pull request opened against every active repository adding the file.
                3. A CI check that fails when the file is missing or names an unknown team.
                4. The catalogue reading from the files, with manual entries retired.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least 90 percent of active repositories carry a valid ownership file and the catalogue is generated from those files."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the metadata schema with required and optional fields"
                - "Script a pull request that adds a prefilled file to each repository"
                - "Add a CI check that validates the file against the team directory"
                - "Switch the catalogue import to read from the files"
            - name: First golden path for a new backend service
              description: |-
                ## Purpose
                A golden path is the supported, opinionated way to create a service, and the first one sets the pattern for everything after it. Choosing the most common service shape from the path-to-production map and making it possible to go from template to a running, monitored service in production in under a day proves the platform's value faster than any slide.

                ## Milestones
                1. A written spec of what the path includes: repository, pipeline, runtime, logging, metrics, alerts and docs.
                2. A template that generates a working service with a passing pipeline on first push.
                3. One real team taking a new service from template to production using only the path.
                4. Time from template to first production deploy measured and under one working day.

                ## Notes
                Start from the **Product spec** template. Pave what teams already do most, not what the platform team finds most interesting.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pilot team takes a new backend service from the golden path template to monitored production in under one working day."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Pick the service shape that the most teams already build"
                - "Write the spec listing everything the path sets up and what it leaves out"
                - "Build the template and run it end to end on a scratch project"
                - "Recruit one product team with a real new service to pilot it"
                - "Time the pilot from template to first production deploy"
            - name: Developer portal build, adopt or buy decision
              description: |-
                ## Purpose
                The portal is the front door for the catalogue, templates and docs, and the choice between an open source framework, a commercial portal and a thin homegrown page decides years of maintenance. Comparing the options against your team size and the plugins you would need stops a two-person platform team from adopting something that needs five people to run.

                ## Milestones
                1. Requirements written: catalogue, scaffolding, docs, scorecards and identity integration.
                2. Three options compared on fit, running cost, staff time to maintain and lock-in.
                3. A proof of concept of the leading option loaded with real catalogue data.
                4. The decision recorded with the reasons and the conditions that would reopen it.

                ## Notes
                Start from the **Purchase decision** template. Count the engineering hours to keep an open source portal upgraded, not just the licence saving.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded portal decision comparing three options on cost and maintenance effort, backed by a proof of concept with real catalogue data."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List the five capabilities the portal must have in its first year"
                - "Shortlist one open source, one commercial and one homegrown option"
                - "Estimate yearly staff hours to maintain each option"
                - "Load real catalogue data into a proof of concept of the front runner"
                - "Record the decision and what would make you revisit it"
            - name: Responsibility split between platform and product teams
              description: |-
                ## Purpose
                Most friction between platform and product teams comes from unspoken assumptions about who patches the base image, who answers the page when the ingress fails and who pays for the database. A written split of responsibilities, capability by capability, ends the arguments before the first incident tests them.

                ## Milestones
                1. Each platform capability listed with who builds, who operates and who is paged.
                2. Grey areas such as base images, shared databases and certificates settled explicitly.
                3. The split agreed by product engineering leads and published next to the charter.
                4. The split linked from every golden path template's readme.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published responsibility table covering every platform capability, agreed by product engineering leads and linked from each template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every capability the platform offers or plans to offer"
                - "Mark who builds, operates and is paged for each one"
                - "Settle the three most disputed rows in a meeting with product leads"
                - "Publish the table and link it from each template readme"
            - name: Baseline of time to first production deploy
              description: |-
                ## Purpose
                Without a starting number the platform cannot show it has made anything better. Measuring how long it takes today to go from an approved idea for a new service to its first production deploy, and how long a new engineer takes to ship their first change, gives two numbers leadership understands.

                ## Milestones
                1. The last five new services traced from repository creation to first production deploy.
                2. The last five new engineers traced from start date to first merged production change.
                3. The median of each recorded with the main sources of delay.
                4. Both numbers published as the platform's starting baseline.

                ## Notes
                Start from the **Metrics log** template. Use calendar days, not working hours, because waiting is the thing the platform removes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Median days to first production deploy for new services and for new engineers recorded from at least five real cases each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the creation dates of the last five new service repositories"
                - "Find each service's first production deploy in the pipeline history"
                - "Ask managers for the start date and first production change of recent hires"
                - "Write the two medians and the main delays into the metrics log"
            - name: Paved road principles and the off-road policy
              description: |-
                ## Purpose
                Make the paved road mandatory and it breeds resentment; make it entirely optional and it is ignored. Deciding up front which parts are required for everyone (security, logging, ownership), which are recommended, and what a team must accept if it goes off road gives teams freedom without leaving the platform to support every variation.

                ## Milestones
                1. A short list of non-negotiable requirements every service meets, on or off the road.
                2. A clear statement of what support teams lose when they go off road.
                3. A lightweight way to register an off-road service and its reason.
                4. The principles published and referenced in the charter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Published paved road principles listing the mandatory controls, the off-road support terms and a registration route for exceptions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the controls that apply to every service regardless of path"
                - "Write what platform support covers on the road and off it"
                - "Add an off-road flag and reason field to the ownership file"
                - "Publish the principles beside the charter"
            - name: Weekly platform intake and request triage
              description: |-
                ## Purpose
                Requests arrive by chat, hallway and escalation, and the loudest team wins unless there is one intake route and a regular triage. A single request form and a weekly triage slot let the team see demand patterns, spot repeated asks that should become self-service, and tell requesters honestly when to expect an answer.

                ## Milestones
                1. One intake form replacing direct messages for platform requests.
                2. A weekly triage that labels each request as bug, feature, support or out of scope.
                3. Every request answered with a decision or a date within one week.
                4. Repeated requests tallied each month as candidates for self-service.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every platform request received through one intake route gets a triage decision within seven days, tracked over a full quarter."
                cadence: rolling
              tasks:
                - "Create a request form with fields for team, urgency and desired outcome"
                - "Triage new platform requests and reply to each requester @recurring(weekly:tue)"
                - "Tally repeated requests and flag the top three as self-service candidates @recurring(monthly:14)"
                - "Redirect direct messages to the form with a short standard reply"
            - name: Platform office hours for product teams
              description: |-
                ## Purpose
                Many product engineers will not file a ticket for a half-formed question, so they work around the platform instead. A fixed weekly hour where anyone can bring a problem, screen share a failing pipeline or ask how to use a template catches confusion early and shows the platform team where the docs are failing.

                ## Milestones
                1. A recurring open slot advertised in the engineering channel.
                2. A rota so the slot never depends on one person.
                3. Each session's questions logged in a shared note.
                4. Questions asked three times turned into a doc page or a template fix.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Office hours held at least 40 weeks a year, with every question logged and repeated questions turned into documentation."
                cadence: rolling
              tasks:
                - "Book a recurring open video call and post the link in the engineering channel"
                - "Run platform office hours and log every question asked @recurring(weekly:thu)"
                - "Set a four-person rota for hosting the slot"
                - "Turn any question asked three times into a doc page"
            - name: Monthly service catalogue accuracy sweep
              description: |-
                ## Purpose
                Teams reorganise, services are renamed and old workloads keep running long after their owners have moved on. A monthly sweep comparing what is actually running against what the catalogue claims keeps ownership trustworthy enough that incident responders and security teams rely on it.

                ## Milestones
                1. A report listing running workloads with no catalogue entry and entries with no running workload.
                2. Owners pointing at disbanded teams flagged automatically.
                3. Each mismatch assigned to a team with a fix date.
                4. Mismatches trending down month on month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly mismatch report is produced and the count of unowned or phantom services falls below five for three months running."
                cadence: rolling
              tasks:
                - "Write a script that diffs running workloads against catalogue entries"
                - "Run the catalogue mismatch report and send each team its list @recurring(monthly:12)"
                - "Flag entries owned by teams no longer in the directory"
                - "Chart the mismatch count in the monthly platform update"
            - name: Golden path template upkeep and drift updates
              description: |-
                ## Purpose
                Templates are snapshots, and every service generated from one starts drifting the day it is created. Updating templates on a schedule and pushing the changes to services already generated from them, as automated pull requests, keeps the old services on supported versions instead of only the new ones.

                ## Milestones
                1. Each template versioned, with a changelog of what changed and why.
                2. A record of which template version every generated service started from.
                3. An automated pull request raised on generated services when a template changes.
                4. The share of services within one template version of current measured monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Templates are updated monthly and at least 80 percent of generated services sit within one template version of current."
                cadence: rolling
              tasks:
                - "Add a template version stamp to every generated repository"
                - "Update template dependencies and base images and cut a new version @recurring(monthly:19)"
                - "Raise automated update pull requests against services built from the template"
                - "Report the share of services within one version of current"
            - name: Platform adoption and satisfaction numbers
              description: |-
                ## Purpose
                Technically excellent platforms still go unused. Tracking adoption (share of services on golden paths, self-service actions per week) alongside a short quarterly satisfaction survey tells the team whether it is building what people want, and gives the sponsor evidence rather than anecdotes.

                ## Milestones
                1. Three adoption measures chosen and pulled automatically from the portal and pipelines.
                2. A five-question satisfaction survey sent to product engineers each quarter.
                3. A one-page monthly dashboard shared with engineering leadership.
                4. One roadmap change each quarter traced back to the numbers.

                ## Notes
                Start from the **Metrics log** template. Ask the survey question that matters most first: would you recommend the platform to a new team, and why not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly adoption dashboard and a quarterly satisfaction score are published for a full year, with each quarter's roadmap citing them."
                cadence: rolling
              tasks:
                - "Pick three adoption measures that can be pulled without manual counting"
                - "Update the adoption dashboard and share it with engineering leads @recurring(monthly:5)"
                - "Send the five-question platform survey to product engineers @recurring(quarterly)"
                - "Note which roadmap item each quarter's results changed"
            - name: Quarterly roadmap review with customer teams
              description: |-
                ## Purpose
                Roadmaps written only by platform engineers drift towards interesting infrastructure and away from what product teams are stuck on. Reviewing the roadmap each quarter with representatives from the main customer teams, ranked against intake data and survey results, keeps priorities honest and visible.

                ## Milestones
                1. A roadmap showing now, next and later, readable by product engineers.
                2. A quarterly review with at least four customer team representatives.
                3. Priorities justified against intake tallies and adoption numbers.
                4. The updated roadmap published with what was dropped and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly roadmap reviews held in a year, each with at least four customer teams attending and a published outcome."
                cadence: cyclic
              tasks:
                - "Invite one engineer from each of the four largest customer teams"
                - "Run the platform roadmap review with customer teams and publish the result @recurring(quarterly)"
                - "Bring the intake tallies and survey results to each review"
                - "List what was dropped from the roadmap and tell the teams who asked"
            - name: Service level objectives for the platform itself
              description: |-
                ## Purpose
                When the pipeline, the portal or the shared cluster is down, every product team stops, so the platform needs reliability targets of its own. Setting objectives for the capabilities product teams depend on and publishing a status page turns vague complaints that the platform is flaky into a number both sides can act on.

                ## Milestones
                1. The four or five platform capabilities product teams depend on most listed.
                2. An objective and indicator agreed for each, such as pipeline success rate excluding test failures.
                3. A status page showing current state and recent incidents.
                4. A monthly report of objectives met and error budget used.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Published objectives for at least four platform capabilities, a live status page and twelve consecutive monthly reports."
                cadence: rolling
              tasks:
                - "Ask five product teams which platform outage hurts them most"
                - "Draft an objective and indicator for each of the top capabilities"
                - "Stand up a status page linked from the portal home"
                - "Publish the platform objectives report and error budget use @recurring(monthly:23)"
            - name: Service maturity scorecards in the portal
              description: |-
                ## Purpose
                Teams want to know what good looks like, and leadership wants to know where risk sits, without an audit. Scorecards that check each service automatically for things like an owner, an on-call route, a runbook link, a supported runtime and passing security scans make gaps visible and let teams fix them on their own schedule.

                ## Milestones
                1. Eight to ten checks agreed, each tied to a reason a team would accept.
                2. Checks computed automatically from metadata and pipeline data.
                3. Scores visible on each service page and rolled up by team.
                4. A monthly review of the lowest-scoring services with their owners.

                ## Notes
                Never rank teams publicly by score in the first quarter. Show each team its own gaps first, or scorecards become a blame tool and people game them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Automated scorecards cover every catalogued service and the count of services failing two or more checks falls quarter on quarter."
                cadence: rolling
              tasks:
                - "Draft ten candidate checks and the reason for each"
                - "Cut the list to the eight checks product leads agree with"
                - "Wire each check to metadata or pipeline data so it computes itself"
                - "Review the lowest-scoring services with their owners @recurring(monthly:27)"
            - name: Monthly internal platform changelog
              description: |-
                ## Purpose
                Product engineers miss platform improvements and are surprised by breaking changes when updates are only announced in chat. A short monthly changelog, written for users not for platform engineers, covering what is new, what is changing and what is going away, builds trust and cuts support questions.

                ## Milestones
                1. A changelog page with sections for new, changed and deprecated.
                2. Each entry written in terms of what the reader can now do or must do.
                3. The changelog sent to every engineering team on a fixed day each month.
                4. Breaking changes announced at least one changelog before they land.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve monthly changelogs published in a year and no breaking platform change lands without appearing in an earlier issue."
                cadence: rolling
              tasks:
                - "Set up a changelog page with new, changed and deprecated sections"
                - "Ask the agent to draft the changelog from merged platform pull requests"
                - "Edit and send the platform changelog to all engineering teams @recurring(monthly:8)"
                - "Add a required changelog line to the platform pull request template"
            - name: Deprecation and sunset process for platform features
              description: |-
                ## Purpose
                Platforms accumulate old template versions, legacy runtimes and abandoned plugins because removing things is harder than adding them. A standard deprecation process with notice periods, migration guides and a quarterly check of what is overdue keeps the platform small enough to support well.

                ## Milestones
                1. A written process with stages: announced, deprecated, read-only, removed.
                2. A minimum notice period agreed with product engineering leads.
                3. Every deprecated feature listed with remaining users and a removal date.
                4. A quarterly review that either removes, extends or escalates each overdue item.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deprecated platform feature has a named removal date and migration guide, and the overdue list is reviewed four times a year."
                cadence: cyclic
              tasks:
                - "Write the four deprecation stages and the notice period for each"
                - "List everything currently deprecated with its remaining users"
                - "Review overdue deprecations and remove, extend or escalate each @recurring(quarterly)"
                - "Write a migration guide template for deprecated features"
            - name: Product management basics for platform teams
              description: |-
                ## Purpose
                Platform engineers are usually strong infrastructure builders who have never written a problem statement, run a user interview or said no to a stakeholder on evidence. Learning the basics of product discovery, prioritisation and roadmapping changes how the team decides what to build next.

                ## Milestones
                1. Two recognised books or courses on product management worked through by at least two team members.
                2. One platform feature reframed as a problem statement with a target user and success measure.
                3. A prioritisation method chosen and applied to the current backlog.
                4. A short note on what the team will do differently, shared with the wider group.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two team members complete a product management course or two books, and the backlog is reprioritised with a named method."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick one book and one short course on product discovery"
                - "Rewrite the top backlog item as a problem statement with a user and measure"
                - "Score the backlog with the chosen prioritisation method"
                - "Share three changes the team will make at the next retrospective"
            - name: Cognitive load and team interaction modes study
              description: |-
                ## Purpose
                The case for a platform rests on reducing how much product teams must hold in their heads, yet few platform teams can explain which load they remove. Studying team interaction models (collaboration, facilitation, self-service) and applying them to your own teams shows where the platform should collaborate closely and where it should simply offer a service.

                ## Milestones
                1. The core ideas of team types and interaction modes summarised in a page.
                2. Each product team's current interaction with the platform classified.
                3. Two interactions identified that should move from collaboration to self-service.
                4. A plan to make those two moves within the next two quarters.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written classification of every team's interaction with the platform, with two interactions planned to move to self-service."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read a recognised book on team structures and interaction modes"
                - "Summarise the ideas that apply to your organisation in one page"
                - "Classify how each product team works with the platform today"
                - "Choose two interactions to move to self-service and name the blockers"
            - name: Writing service templates with a scaffolding engine
              description: |-
                ## Purpose
                Copying a repository and running find and replace is how most golden paths start, and it breaks the moment two teams need slightly different options. Learning a proper scaffolding engine, with parameters, conditional files and post-creation actions such as registering in the catalogue, makes templates maintainable as they multiply.

                ## Milestones
                1. One scaffolding engine chosen that fits the portal decision.
                2. A practice template with three parameters and one conditional file built.
                3. Post-creation steps added: repository creation, catalogue registration and first pipeline run.
                4. The practice template reviewed by a second engineer and the lessons written up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working practice template with parameters, a conditional file and automatic catalogue registration, reviewed by another engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Work through the scaffolding engine's official tutorial"
                - "Build a practice template with three parameters and one optional file"
                - "Add a step that registers the new service in the catalogue"
                - "Write up what you would do differently for the production template"
            - name: Policy as code for platform guardrails
              description: |-
                ## Purpose
                Guardrails written in a wiki get ignored, and guardrails enforced by a reviewer become a bottleneck. Expressing rules such as no public storage buckets, resource limits on every workload and approved base images only as code that runs at admission or in the pipeline gives teams fast, consistent answers.

                ## Milestones
                1. One policy engine chosen and running in audit mode on a test cluster or pipeline.
                2. Five policies written, each with a clear message telling the engineer how to fix the violation.
                3. Policies tested with passing and failing examples in CI.
                4. Audit results reviewed for false positives before any policy is set to block.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tested guardrail policies run in audit mode with helpful violation messages, and the false positive rate is reviewed before enforcement."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Install a policy engine in audit mode on a non-production cluster"
                - "Write five policies with a fix-it message for each violation"
                - "Add passing and failing test cases for every policy"
                - "Review two weeks of audit results with the teams that tripped them"
            - name: Platform API built on custom resources
              description: |-
                ## Purpose
                Exposing raw cloud and cluster resources to product teams hands them every sharp edge. Learning to define higher-level resources, such as an application or a database claim, that a controller turns into the underlying infrastructure lets the platform offer a small, stable interface while changing the implementation underneath.

                ## Milestones
                1. The controller pattern and reconciliation loop understood well enough to explain to a colleague.
                2. A prototype resource that creates a deployment, service and alert from a ten-line spec.
                3. Status fields reporting back to the user when provisioning fails.
                4. A note on which platform capabilities would suit this approach and which would not.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working prototype custom resource that provisions a service with alerting from a short spec and reports failures in its status."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Work through a tutorial on writing a controller for a custom resource"
                - "Design a ten-line application spec covering the common case"
                - "Build a prototype controller that reconciles the spec into real resources"
                - "Write a page on where this approach fits the platform and where it does not"
            - name: Docs as code for platform documentation
              description: |-
                ## Purpose
                Platform docs live in a wiki nobody updates, so engineers ask in chat instead. Moving docs into the repositories they describe, rendered in the portal and reviewed with code changes, keeps them current and puts the answer next to the service it explains.

                ## Milestones
                1. A docs folder convention and renderer chosen that plugs into the portal.
                2. The ten most-visited wiki pages moved into repositories and redirected.
                3. A pull request check reminding authors when code changes touch documented behaviour.
                4. Each golden path template generating a starter docs folder.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most-visited platform pages live in repositories and render in the portal, and every template generates a docs folder."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Pull wiki analytics to find the ten most-visited platform pages"
                - "Set up the docs renderer in the portal for one repository"
                - "Move the ten pages and leave redirects on the wiki"
                - "Add a starter docs folder to each golden path template"
            - name: User interviews with product engineers
              description: |-
                ## Purpose
                Survey scores tell you something is wrong; interviews tell you what. Talking each month to two or three product engineers about their last week of work, rather than about the platform, reveals the workarounds and frustrations nobody files a request for.

                ## Milestones
                1. A simple interview guide focused on recent real tasks.
                2. At least two interviews held each month across different teams.
                3. Notes tagged into themes in one shared place.
                4. A quarterly summary of the top themes fed into the roadmap review.

                ## Notes
                Start from the **Feedback themes** template. Ask about the last time something took longer than expected, not whether they like the platform.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least 24 product engineer interviews in a year, tagged into themes and summarised before each quarterly roadmap review."
                cadence: rolling
              tasks:
                - "Write a six-question interview guide about recent work"
                - "Interview two product engineers from different teams @recurring(monthly:17)"
                - "Tag each interview's notes against the theme list"
                - "Bring the top three themes to the next roadmap review"
            - name: Self-service ephemeral preview environments
              description: |-
                ## Purpose
                Shared staging environments become a queue, with teams waiting days for a slot and breaking each other's tests. Giving every pull request its own short-lived environment, created automatically and torn down on merge, lets reviewers and product managers see the change before it ships without asking anyone.

                ## Milestones
                1. A design for preview environments covering data, dependencies and cost limits.
                2. Preview environments created automatically for one pilot service's pull requests.
                3. Automatic teardown on merge or after a fixed idle period.
                4. Waiting time for shared staging measured before and after the rollout.

                ## Notes
                Start from the **Product spec** template. Decide early how previews get test data; copying production data into them is the mistake that ends these projects.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Pull requests on at least three services get an automatic preview environment that is torn down on merge, with staging wait time measured."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Record current waiting time for the shared staging environment"
                - "Design how previews get dependencies, test data and a cost ceiling"
                - "Build previews for one pilot service and teardown on merge"
                - "Extend to two more services and remeasure staging wait time"
            - name: Self-service databases and queues through the portal
              description: |-
                ## Purpose
                When a team needs a database it often waits a week for a ticket to reach the one person who knows the setup. A portal action that provisions a managed database or queue with backups, encryption, monitoring and ownership tags already set removes the wait and the variation at once.

                ## Milestones
                1. The two most-requested data services chosen from the intake tallies.
                2. Sensible defaults set for size, backups, encryption and alerts.
                3. A portal form that provisions each one in under thirty minutes.
                4. Ticket volume for these requests compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Teams can provision the two most-requested data services from the portal in under thirty minutes, and related tickets fall by at least half."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Count database and queue requests in the last quarter's intake"
                - "Write the default configuration for the two most requested services"
                - "Build the portal form and the automation behind it"
                - "Compare ticket counts for the quarter after launch"
            - name: Self-service DNS names, certificates and routes
              description: |-
                ## Purpose
                Getting a new service a hostname, a TLS certificate and a route through the edge often takes three tickets to three teams, and expired certificates remain a classic cause of outages. Letting teams declare a hostname in their service spec and having the platform create the record, issue and renew the certificate and wire the route removes the wait and the renewal risk together.

                ## Milestones
                1. Current hostname, certificate and routing requests counted with their median wait.
                2. Approved domains and naming rules agreed with the network and security owners.
                3. A declared hostname in the service spec creating the DNS record, certificate and route automatically.
                4. Certificate expiry alerts in place, with no manual renewals left on golden path services.

                ## Notes
                Keep public exposure a separate, explicit flag. A typo should never make an internal service reachable from the internet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Golden path services get a hostname, auto-renewing certificate and route from one line in their spec, with zero manual certificate renewals left."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Count hostname and certificate tickets from the last two quarters"
                - "Agree approved domains and naming rules with network and security owners"
                - "Automate record, certificate and route creation from the service spec"
                - "Add expiry alerts for any certificate not renewed automatically"
            - name: Self-service secrets with short-lived credentials
              description: |-
                ## Purpose
                Long-lived passwords pasted into pipeline settings are among the most common causes of serious breaches, and they persist because getting proper secrets access means a ticket. Letting teams request secrets and workload identities through the platform, with short-lived credentials by default, makes the secure option the easy one.

                ## Milestones
                1. An inventory of long-lived credentials in pipelines and configuration.
                2. Workload identity or short-lived tokens available on the golden path by default.
                3. A self-service flow for creating and rotating application secrets.
                4. Long-lived credentials reduced by at least three quarters, with a quarterly audit of the rest.

                ## Notes
                Work with your security team on the design. The platform owns the paved road; security owns the policy it enforces.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Golden path services use short-lived credentials by default and long-lived credentials fall by 75 percent, with a quarterly audit in place."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Scan pipelines and configuration for long-lived credentials"
                - "Agree the secrets design with the security team"
                - "Make workload identity the default in the golden path template"
                - "Audit remaining long-lived credentials and chase their owners @recurring(quarterly)"
            - name: Default telemetry built into the golden path
              description: |-
                ## Purpose
                Services created without logging, metrics and tracing get them added in a hurry after the first bad incident. Building structured logs, standard service metrics, tracing and a starter dashboard and alert into the golden path means every new service is observable from its first deploy.

                ## Milestones
                1. A standard set of signals defined: request rate, errors, latency and saturation.
                2. The template wiring logs, metrics and traces to the shared backend.
                3. A starter dashboard and two alerts generated per service.
                4. Every service created in the last quarter checked for working telemetry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every service generated from the golden path ships with logs, metrics, traces, a dashboard and two alerts on its first deploy."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree the standard signal set with the observability owners"
                - "Add telemetry libraries and configuration to the template"
                - "Generate a starter dashboard and two alerts per new service"
                - "Check that the last quarter's new services emit all signals"
            - name: Cost per service shown in the portal
              description: |-
                ## Purpose
                Product teams rarely see what their services cost, so nobody notices the idle cluster or oversized database. Showing an approximate monthly cost on each service page, built from ownership tags, gives teams the information to act without turning the platform team into the cost police.

                ## Milestones
                1. Ownership tags applied automatically to every resource created through the platform.
                2. A monthly cost figure computed per service from billing data.
                3. Cost displayed on each service page with a trend line.
                4. Untagged spend reported each month and shrinking.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every catalogued service page shows a monthly cost figure and untagged spend falls below 10 percent of the total."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Add owner and service tags to every resource the templates create"
                - "Join billing export data to the catalogue by tag"
                - "Show monthly cost and trend on each service page"
                - "Report untagged spend to the owning account leads @recurring(monthly:3)"
            - name: One deployment spec per service
              description: |-
                ## Purpose
                If every team writes its own deployment manifests, each one is slightly different and a platform change means editing hundreds of files. Agreeing a single, short workload spec that teams write once, with the platform generating environment-specific configuration from it, cuts the copy and paste and lets the platform evolve underneath.

                ## Milestones
                1. Current deployment configurations sampled and the common fields identified.
                2. A short workload spec format agreed, covering image, ports, resources and dependencies.
                3. A generator producing environment configuration from the spec.
                4. Three existing services converted and their configuration line count compared.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A workload spec format is agreed and three services are converted, each with at least half the configuration lines they had before."
                cadence: phased
                effort_hours_estimate: "36"
              tasks:
                - "Sample deployment configuration from ten services and list the common fields"
                - "Draft the workload spec and review it with two product teams"
                - "Build a generator for per-environment configuration"
                - "Convert three services and compare configuration size"
            - name: Removing ticket handoffs from the path to production
              description: |-
                ## Purpose
                Each ticket a team must file to another team on its way to production adds days of waiting for minutes of work. Auditing the handoffs found in the path-to-production map and replacing the most frequent ones with automation or pre-approved self-service is often the biggest single speed gain a platform delivers.

                ## Milestones
                1. Every ticket handoff on the main path listed with its yearly volume and median wait.
                2. The top three handoffs chosen for removal.
                3. Each one replaced with automation, a pre-approved change or a portal action.
                4. Median wait on the path to production remeasured afterwards.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The three highest-volume ticket handoffs on the path to production are removed and the median wait for each falls to under one hour."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Pull ticket counts and wait times for each handoff in the last year"
                - "Choose the three handoffs with the most total waiting"
                - "Agree with each owning team what a safe self-service version looks like"
                - "Remeasure wait time a month after each change goes live"
            - name: Second golden path for workers and scheduled jobs
              description: |-
                ## Purpose
                Once the first golden path works, teams building background workers and scheduled jobs are left on the old routes. A second path for queue consumers and cron-style jobs, sharing the same pipeline and telemetry, extends coverage to the services that most often fail silently.

                ## Milestones
                1. The worker and job patterns in use today listed from the catalogue.
                2. A template for a queue consumer and one for a scheduled job, both with retry and dead letter handling.
                3. Missed run and backlog alerts generated by default.
                4. Two teams using the new path for real services.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Templates for a queue worker and a scheduled job exist with default alerts for missed runs and backlog, and two teams use them in production."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List worker and scheduled job services from the catalogue"
                - "Build the queue worker template with retries and a dead letter queue"
                - "Build the scheduled job template with a missed run alert"
                - "Pilot each template with one product team"
            - name: Portal launch to three pilot teams
              description: |-
                ## Purpose
                A big bang launch to the whole organisation exposes every rough edge at once and burns goodwill. Launching the portal to three pilot teams with a fixed date, a feedback channel and a short list of things that must work gives you real usage and fixes before the wider rollout.

                ## Milestones
                1. Three pilot teams chosen with different service types and willing leads.
                2. A launch checklist covering catalogue, templates, docs and login completed.
                3. A launch session held and a feedback channel opened.
                4. Pilot feedback triaged and the go or wait decision for wider rollout recorded.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three pilot teams are using the portal by the launch date and a recorded decision on wider rollout follows within six weeks."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask three team leads with different service types to pilot the portal"
                - "Write the launch checklist of things that must work on day one"
                - "Run a 45-minute launch session with each pilot team"
                - "Review six weeks of pilot feedback and decide on wider rollout"
            - name: Golden path migration week for existing services
              description: |-
                ## Purpose
                New services adopt the golden path easily, but the existing fleet stays on old routes unless someone makes moving cheap. A dedicated migration week, with platform engineers pairing with product teams and a clear guide, can move a large batch of services in one push instead of a slow trickle.

                ## Milestones
                1. Services eligible for migration listed and grouped by effort.
                2. A step-by-step migration guide tested on two services beforehand.
                3. Pairing slots booked with each participating team.
                4. A count of services migrated during the week and the blockers for the rest.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least 15 existing services move to the golden path during the migration week, with blockers for the rest recorded."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "List services eligible for migration and rate each by effort"
                - "Test the migration guide on two services before the week"
                - "Book pairing slots with each team taking part"
                - "Publish the count of migrated services and the open blockers"
            - name: Internal platform demo day
              description: |-
                ## Purpose
                Product teams adopt what they have seen working, not what was announced in a document. A half-day demo where platform engineers and early-adopting product teams show real workflows, from template to production in minutes, gives the platform visible momentum and recruits the next wave of users.

                ## Milestones
                1. A date, room or call and agenda set with at least four demos.
                2. At least two demos given by product teams rather than the platform team.
                3. A recording and links posted for people who could not attend.
                4. Sign-ups for the next pilot or migration collected on the day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A demo day held with at least four demos, two from product teams, and a recording plus a sign-up list published afterwards."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a date and invite two product teams to present their workflow"
                - "Rehearse each demo so it runs in under ten minutes"
                - "Record the session and post it with links to the templates"
                - "Follow up with everyone who signed up to adopt"
            - name: Annual platform strategy review
              description: |-
                ## Purpose
                Twelve months of roadmap reviews can still leave the platform aimed at last year's problems. An annual review of the charter, adoption numbers, cost of running the platform and the organisation's plans for the coming year sets the few big bets and the things to stop.

                ## Milestones
                1. A year-in-review pack with adoption, satisfaction, reliability and running cost.
                2. Input gathered from engineering leadership on next year's product plans.
                3. Three bets for the coming year and two things to stop, agreed with the sponsor.
                4. The charter updated to match.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An annual review pack is produced, three bets and two stops are agreed with the sponsor, and the charter is updated within a month."
                cadence: cyclic
              tasks:
                - "Collect the year's adoption, survey, reliability and running cost figures"
                - "Run the annual platform strategy review with the sponsor @recurring(yearly)"
                - "Agree three bets and two things to stop"
                - "Update the charter and share it with all engineering teams"
            - name: Retiring the legacy deployment scripts
              description: |-
                ## Purpose
                As long as the old deployment scripts still work, some teams will keep using them, and the platform team will keep supporting two routes. Setting a public retirement date, tracking every remaining user and switching the scripts off on that date closes the old road for good.

                ## Milestones
                1. Every service still deploying through the legacy scripts identified.
                2. A retirement date announced at least three months ahead.
                3. Each remaining service migrated or granted a dated, approved exception.
                4. The scripts switched off and their credentials revoked on the date.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The legacy deployment scripts are disabled on the announced date with every remaining service migrated or under a dated exception."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Search pipeline logs for every service still using the legacy scripts"
                - "Announce the retirement date in the platform changelog"
                - "Check in monthly with each remaining team on its migration"
                - "Disable the scripts and revoke their credentials on the date"
            - name: First platform engineer at a scaling startup
              description: |-
                ## Purpose
                At thirty to eighty engineers the founders' original infrastructure stops scaling and someone is hired to sort it out, often alone. For a first platform engineer, the work is choosing the smallest platform that removes the worst pain, buying rather than building wherever possible, and resisting a portal before there are enough services to need one.

                ## Milestones
                1. The three biggest delivery pains named from conversations with every team lead.
                2. A written thinnest viable platform: a documented golden path and managed services, not a portal.
                3. Build versus buy decisions recorded for each capability.
                4. A six-month plan agreed with the CTO, including when to hire a second platform engineer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A six-month platform plan agreed with the CTO, built on recorded build versus buy decisions and a single documented golden path."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask every team lead which delivery problem costs them most each week"
                - "Write the thinnest platform that fixes the top three problems"
                - "Record a build or buy decision for each capability"
                - "Agree the six-month plan and the second hire trigger with the CTO"
            - name: Enterprise platform across business units
              description: |-
                ## Purpose
                In a large enterprise each business unit often has its own infrastructure team, tools and standards, and a central platform that ignores them will be routed around. Federating the platform, with a shared core and room for business units to contribute their own templates and plugins, gets reach without a turf war.

                ## Milestones
                1. Each business unit's platform capabilities and team mapped.
                2. A shared core agreed: identity, catalogue, pipelines and guardrails.
                3. A contribution model letting business units publish templates to the shared portal.
                4. A cross-unit platform forum meeting each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A federated platform model with an agreed shared core and contribution route, adopted by at least three business units."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map each business unit's platform team and the capabilities it runs"
                - "Propose the shared core and what stays local"
                - "Write the contribution rules for business unit templates and plugins"
                - "Hold the cross-unit platform forum and record decisions @recurring(quarterly)"
            - name: Compliance evidence from the paved road
              description: |-
                ## Purpose
                In regulated industries engineers lose weeks each year assembling evidence for auditors: change approvals, access reviews, vulnerability scans. If the golden path records that evidence automatically, every service on it is audit-ready by default, which becomes the strongest reason for teams to adopt it.

                ## Milestones
                1. The controls auditors ask engineering about mapped to platform capabilities.
                2. Evidence such as approvals, scan results and deploy records captured automatically.
                3. An evidence view per service that compliance staff can read without engineers.
                4. One audit or internal review completed using the platform's evidence.

                ## Notes
                Start from the **Compliance control** template. Agree the evidence format with your compliance team first; collecting the wrong thing perfectly is wasted work.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An audit or internal control review is completed using evidence the platform collected automatically for every golden path service."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Ask the compliance team for the controls engineering is tested on"
                - "Map each control to the platform step that can produce its evidence"
                - "Build an evidence view per service for compliance staff"
                - "Refresh the control mapping with the compliance team @recurring(quarterly)"
            - name: Merging two platforms after an acquisition
              description: |-
                ## Purpose
                After an acquisition the two engineering organisations usually run different clouds, pipelines and conventions, and forcing one onto the other overnight breaks delivery for months. A staged convergence plan, starting with shared identity and catalogue and moving deployment last, keeps both sides shipping.

                ## Milestones
                1. Both platforms compared capability by capability with the stronger option noted.
                2. Shared identity and a combined service catalogue in place first.
                3. A dated sequence for converging pipelines, runtimes and observability.
                4. Engineers from both sides on the convergence working group.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated convergence plan agreed by both engineering leads, with shared identity and a combined catalogue live within six months."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Compare the two platforms capability by capability in one table"
                - "Form a working group with engineers from both organisations"
                - "Combine the two service catalogues under shared identity"
                - "Write the dated convergence sequence for the remaining capabilities"
            - name: Moving an existing service onto the golden path
              description: |-
                ## Purpose
                For a product engineer, an older service on hand-rolled deployment means every platform improvement passes it by. Moving it onto the golden path, a step at a time, gets the team the defaults for telemetry, secrets and updates without a rewrite, and shows the platform team exactly where the migration guide falls short.

                ## Milestones
                1. The gaps between the service and the golden path listed.
                2. The service building and deploying through the standard pipeline.
                3. Telemetry, secrets and ownership metadata switched to platform defaults.
                4. Feedback on the migration guide sent to the platform team.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The service deploys through the golden path pipeline with platform telemetry and secrets, and written feedback reaches the platform team."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Compare your service's setup with the golden path template"
                - "Move the build and deploy onto the standard pipeline"
                - "Switch logging, metrics and secrets to the platform defaults"
                - "Send the platform team a list of where the guide was unclear"
            - name: Inner source contributions to the platform
              description: |-
                ## Purpose
                Even a well-staffed platform team cannot build every template and plugin that dozens of product teams need. Opening the platform repositories to contributions, with clear guidelines, review times and maintainers, lets product teams fix their own gaps and turns critics into co-owners.

                ## Milestones
                1. A contributing guide covering scope, review expectations and code ownership.
                2. Platform repositories labelled with good first issues.
                3. A review response target agreed and tracked.
                4. At least five merged contributions from product teams in a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Product teams merge at least five platform contributions in a quarter and first reviews arrive within two working days."
                cadence: rolling
              tasks:
                - "Write a contributing guide for the platform repositories"
                - "Label ten issues suitable for a first outside contribution"
                - "Review open outside contributions and reply to each author @recurring(weekly:mon)"
                - "Thank contributors by name in the monthly changelog"
            - name: Multi-tenant clusters with team isolation
              description: |-
                ## Purpose
                Shared clusters save money and effort, but one team's runaway job or misconfigured permissions can take down or expose another team's services. Designing isolation through namespaces, quotas, network policies and scoped access lets dozens of teams share infrastructure without sharing failures.

                ## Milestones
                1. A tenancy model chosen: namespace per team, per service or cluster per tier.
                2. Resource quotas and limit defaults applied to every tenant.
                3. Network policies denying cross-tenant traffic by default.
                4. A noisy neighbour and access escape test run and documented.

                ## Notes
                Start from the **Risk register** template. Record each way one tenant could affect another and the control that stops it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tenant has quotas, default-deny network policies and scoped access, and a documented isolation test shows no cross-tenant impact."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Write down the tenancy model options and choose one"
                - "Apply quotas and default limits to every tenant"
                - "Roll out default-deny network policies in audit mode first"
                - "Run a noisy neighbour test and record the results in the risk register"
            - name: Fleet-wide automated changes across repositories
              description: |-
                ## Purpose
                Upgrading a base image or rotating a shared config across three hundred repositories by hand takes a quarter and never quite finishes. A tool and process for raising automated changes across the fleet, tracking which teams have merged and following up on the rest, turns platform-wide changes into weeks of work.

                ## Milestones
                1. A tool chosen or built that applies a scripted change and opens pull requests at scale.
                2. A campaign view showing merged, open and failed changes by team.
                3. A first campaign run across at least fifty repositories.
                4. A follow-up rule for unmerged changes agreed with engineering leads.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fleet change campaign reaches at least fifty repositories with merge status tracked by team and 80 percent merged within a month."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick a recent cross-repository change that took too long as the first campaign"
                - "Choose or build a tool that opens scripted pull requests at scale"
                - "Build a campaign view of merge status by team"
                - "Agree with engineering leads how unmerged changes get followed up"
            - name: Supply chain provenance in the golden path
              description: |-
                ## Purpose
                Teams cannot easily prove what went into a running container or who built it, which matters for incident response and increasingly for customers' security questionnaires. Building signed artifacts, software bills of materials and provenance records into the golden path pipeline gives every service that proof by default.

                ## Milestones
                1. Build artifacts signed in the standard pipeline.
                2. A software bill of materials produced and stored for every build.
                3. Deploys checked so only signed artifacts from the standard pipeline run in production.
                4. A drill answering which services contain a named library, completed in under an hour.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Golden path builds are signed with stored bills of materials, and a drill finds every service containing a named library in under an hour."
                cadence: phased
                effort_hours_estimate: "36"
              tasks:
                - "Add artifact signing to the standard pipeline"
                - "Generate and store a bill of materials for every build"
                - "Enforce signed artifacts at deploy time in audit mode first"
                - "Run a drill to find every service containing a chosen library"
            - name: Platform return on investment for leadership
              description: |-
                ## Purpose
                Platform teams are an easy target in a budget round because their value shows up in other teams' numbers. A yearly case that links the platform to measurable gains, such as days saved per new service, tickets removed, incidents avoided and audit hours cut, set against the platform's own cost, protects the investment and guides where to grow it.

                ## Milestones
                1. The baseline numbers from the first year compared with today.
                2. Engineering hours saved estimated with a method stated plainly.
                3. The platform's own cost in people and tools totalled.
                4. A two-page case presented to leadership with the next year's ask.

                ## Notes
                Be conservative with estimates and show the method. One overstated number undermines the whole case.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-page return on investment case comparing hours saved with platform cost, using a stated method, is presented to leadership."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull the original baselines and today's figures side by side"
                - "Estimate hours saved per new service and per removed ticket"
                - "Total the platform team's people and tooling cost for the year"
                - "Ask the agent to draft the two-page case from the figures, then edit it"
---

# Internal Developer Platform

This area is for platform engineers and the enterprises that fund them: the people building the paved roads that let product teams create, deploy and run services without becoming infrastructure experts. It starts with the foundations (a charter, a map of how teams ship today, a service catalogue with owners, the first golden path and the portal decision), then the routines that keep the platform trusted, the skills behind platform product thinking and scaffolding, the improvements that replace tickets with self-service, the dated launches and migrations, the situations a startup, a large enterprise, a regulated firm or a merged company faces, and finally the specialist work of multi-tenancy, fleet-wide changes and proving the platform pays for itself.

What repeats is weekly intake triage and office hours, a monthly catalogue sweep, template upkeep, scorecard review and adoption numbers, a monthly internal changelog, quarterly roadmap reviews with customer teams and deprecation checks, and a yearly strategy review. The Purchase decision, Metrics log, Product spec, Feedback themes, Compliance control and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
