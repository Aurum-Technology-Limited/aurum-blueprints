---
id: software-engineering.infrastructure-as-code
name: Infrastructure as Code
description: "Cloud resources defined in reviewed, version-controlled code: a safe state backend, plan review on every change, drift checks, tested modules, policy guardrails and environments you can rebuild from scratch."
category: business
version: 1.0.0
tags: [software-engineering, infrastructure-as-code, engineer, team, terraform, opentofu, state-management, policy-as-code]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - remediation-plan
    - operational-checklist
    - skills-matrix
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Infrastructure as Code
          description: "Defining servers, networks and cloud resources in version-controlled code so environments are reproducible, reviewable and easy to change."
          projects:
            - name: Inventory of hand-built cloud resources
              description: |-
                ## Purpose
                Before writing a line of infrastructure code, you need to know what already exists and who made it. Most teams find resources created in the console years ago, test buckets nobody remembers and security groups with no owner. A single inventory grouped by account, region and service tells you what to import first, what to delete and where the risk sits.

                ## Milestones
                1. A list of every account or subscription and the regions in use, exported from the provider's resource listing or asset inventory.
                2. Each resource marked as managed by code, hand-built, or unknown.
                3. An owner or owning team named for every production resource.
                4. A short list of the ten resources that would hurt most if they were changed by accident.

                ## Notes
                Use the provider's own inventory or resource explorer rather than clicking through each service page. You will miss far less.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A spreadsheet or document lists every resource in every active account and region, each marked managed, hand-built or unknown, with an owner for production."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every cloud account, subscription or project the team can sign in to"
                - "Export a resource inventory for each account and active region"
                - "Mark each resource as managed by code, hand-built or unknown"
                - "Name an owner for every production resource and flag the ten riskiest"
            - name: Choosing an infrastructure as code tool
              description: |-
                ## Purpose
                Terraform, OpenTofu, Pulumi, the provider's native templates and the cloud development kits all work, but they differ in licence, language, state handling and how much of your stack they cover. Picking one deliberately, against the clouds and services you actually run and the languages your team already writes, avoids a costly migration two years in.

                ## Milestones
                1. Requirements written down: clouds and SaaS providers to cover, team languages, licence constraints and where state will live.
                2. Three candidate tools scored against the same criteria.
                3. A small proof of concept in the leading candidate that creates and destroys one real resource.
                4. A decision recorded with the reasons and the option rejected second.

                ## Notes
                Start from the **Purchase decision** template. Provider coverage for your second and third most used services matters more than how the language feels in a demo.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the chosen tool, the scoring of three candidates and the result of a proof of concept that created and destroyed a real resource."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the list of clouds, SaaS providers and languages the tool must cover"
                - "Check each candidate's licence terms and provider coverage for those services"
                - "Build a proof of concept that creates and destroys one storage bucket"
                - "Record the decision and the runner-up in the team's decision log"
            - name: Remote state backend with locking and encryption
              description: |-
                ## Purpose
                State on a laptop is one lost disk away from an environment nobody can safely change, and two people applying at once can corrupt it. A remote backend with locking, encryption at rest, versioning and tight access turns state into shared infrastructure rather than a personal file. Set it up before the second engineer touches the code.

                ## Milestones
                1. A dedicated storage location for state with versioning and encryption at rest switched on.
                2. State locking tested by running two plans at once and watching the second wait.
                3. Access limited to the pipeline role and a small group of named engineers.
                4. Existing local state migrated and the local copies deleted.

                ## Notes
                Keep the backend itself out of the stacks it stores, usually in a small bootstrap stack applied once by hand and documented. Never commit state files to the repository.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All state lives in a versioned, encrypted remote backend with working locks, and no state file exists on laptops or in the repository."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the state storage with versioning and encryption in a bootstrap stack"
                - "Configure locking and test it with two simultaneous plans"
                - "Restrict access to the pipeline role and named engineers"
                - "Migrate local state to the backend and add state files to the ignore list"
            - name: Repository layout for infrastructure code
              description: |-
                ## Purpose
                Where files live decides how big a mistake can get. A layout that separates reusable modules from the live stacks that call them, and keeps each environment and component in its own directory, means a change to staging networking cannot quietly touch production databases. Agree the shape early, while moving files is still cheap.

                ## Milestones
                1. A written layout separating modules from live stacks, with one directory per environment and component.
                2. A decision on one repository or several, with the reason.
                3. A README at the root explaining where to add a new stack and a new module.
                4. Existing code moved into the agreed structure with state addresses preserved.

                ## Notes
                Small stacks are easier to plan and safer to apply. If a single plan takes more than a few minutes, the stack is probably too big.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The repository follows a documented layout with modules and live stacks separated, and a README explains where new stacks and modules go."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the directory tree for modules, environments and components"
                - "Decide between one infrastructure repository and several and note why"
                - "Write the root README with steps for adding a stack and a module"
                - "Move existing code into the new layout and confirm plans show no changes"
            - name: Pinned tool and provider versions
              description: |-
                ## Purpose
                An unpinned provider can upgrade itself between Tuesday's plan and Wednesday's apply, and a different tool version on two laptops can rewrite state in a format the other cannot read. Pinning the tool version, the providers and every module source makes a plan reproducible on any machine and in the pipeline.

                ## Milestones
                1. The tool version pinned in a version file and enforced in the pipeline.
                2. Provider versions constrained in every stack and the dependency lock file committed.
                3. Every module source pinned to a tag or commit rather than a branch.
                4. A one-line note in the README on how to upgrade a pin on purpose.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stack pins its tool version, provider versions and module sources, and the lock files are committed and used by the pipeline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a version file that pins the infrastructure tool version"
                - "Set provider version constraints in every stack"
                - "Commit the dependency lock files and stop ignoring them"
                - "Replace branch references in module sources with tags or commits"
            - name: Environment separation for dev, staging and production
              description: |-
                ## Purpose
                Workspaces, separate directories, separate state files and separate cloud accounts all isolate environments to different degrees. The choice decides whether a typo in staging can ever reach production and how much duplication you live with. Make it once, write it down, and stop each new stack inventing its own pattern.

                ## Milestones
                1. The options compared: workspaces, per-environment directories, per-environment accounts, and a wrapper tool.
                2. A chosen pattern with how variables differ between environments.
                3. Production in its own state and, ideally, its own account or subscription.
                4. One existing stack converted to the pattern as the worked example.

                ## Notes
                Workspaces share a backend and credentials, which makes accidental production applies easier than most teams expect. Separate accounts give the strongest boundary.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on environment separation exists, production has its own state, and one stack follows the pattern as an example."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List how each environment is separated today, stack by stack"
                - "Compare workspaces, directories, accounts and wrapper tools on blast radius"
                - "Record the chosen pattern and how environment variables are supplied"
                - "Convert one stack to the pattern and link it as the example"
            - name: Short-lived credentials for plans and applies
              description: |-
                ## Purpose
                Long-lived access keys stored as pipeline secrets are the most common way infrastructure tooling leaks broad cloud access. Federated identity from the pipeline to the cloud, with separate roles for planning and applying, means nothing permanent can be copied and a plan job can never change anything.

                ## Milestones
                1. The pipeline authenticating to the cloud through identity federation with no stored keys.
                2. A read-only role for plans and a separate role for applies, scoped per environment.
                3. Production apply permission limited to the protected branch.
                4. Old access keys for infrastructure automation revoked.

                ## Notes
                Engineers running plans locally should use their own short-lived sign-in, not a shared key copied from the pipeline.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No long-lived cloud keys exist for infrastructure automation, and plan and apply jobs use separate federated roles scoped per environment."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every stored cloud key the infrastructure pipeline uses today"
                - "Set up identity federation between the pipeline and each cloud account"
                - "Create separate plan and apply roles and restrict apply to the main branch"
                - "Revoke the old keys and review both roles @recurring(quarterly)"
            - name: Naming and tagging conventions enforced in code
              description: |-
                ## Purpose
                Resources named by whoever created them, with tags applied when someone remembers, make cost reports, access policies and incident triage slower than they need to be. A short convention for names and a required tag set, applied through provider default tags or a shared module, makes every resource say what it is, which environment it belongs to and who owns it.

                ## Milestones
                1. A naming pattern agreed covering environment, component and resource type.
                2. A required tag set defined: owner, environment, service, cost centre and managed-by.
                3. Default tags configured at the provider level in every stack.
                4. A monthly report of resources missing required tags.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stack applies the agreed required tags by default, and a monthly report shows the share of resources missing any of them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the naming pattern and the five required tags on one page"
                - "Configure provider default tags in every stack"
                - "Add a check that fails a plan when required tags are missing"
                - "Review the missing-tag report and fix the worst offenders @recurring(monthly:16)"
            - name: First production resource brought under code
              description: |-
                ## Purpose
                Importing a big, tangled production system as the first exercise is how teams lose confidence in infrastructure code. Pick one low-risk, high-value resource, such as a DNS zone or a storage bucket, import it, get the plan to show zero changes and change it once through a pull request. The whole team sees the loop work on something real.

                ## Milestones
                1. One production resource chosen with a clear owner and low blast radius.
                2. The resource imported into state with code that matches it exactly.
                3. A plan against production showing no changes.
                4. One small, real change made to it through a reviewed pull request.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One production resource is imported, its plan shows no changes, and a real change has been made to it through a merged pull request."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one low-risk production resource from the inventory"
                - "Write the matching code and import the resource into state"
                - "Adjust the code until a production plan shows no changes"
                - "Make one small change to it through a reviewed pull request"
            - name: Infrastructure change rules for the team
              description: |-
                ## Purpose
                Code only protects you if changes go through it. A one-page set of rules says that every change starts as a pull request, who must approve which paths, when a console change is allowed in an emergency and how it gets written back into code within two working days. Without the rules, drift returns within weeks.

                ## Milestones
                1. A one-page change policy covering pull requests, approvals, emergencies and reconciliation.
                2. Code owners set for each environment and module directory.
                3. Branch protection requiring an approved review before infrastructure merges.
                4. The rules walked through with every engineer who has cloud access.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written change policy is committed, code owners and branch protection enforce it, and every engineer with cloud access has seen it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the change policy, including the emergency console exception"
                - "Set code owners for each environment and module directory"
                - "Turn on branch protection requiring an approved review"
                - "Review code owners for infrastructure paths after team changes @recurring(quarterly)"
            - name: Plan review on every infrastructure pull request
              description: |-
                ## Purpose
                Reviewing infrastructure code without its plan is like reviewing a database migration without knowing which table it touches. Posting the plan as a comment on every pull request, and having reviewers read the replacements and deletions first, catches the change that would recreate a database before anyone types apply.

                ## Milestones
                1. Plans posted automatically to every infrastructure pull request.
                2. A reviewer checklist that starts with destroys, replacements and permission changes.
                3. Applies only allowed from the exact plan that was reviewed.
                4. A weekly check that no apply ran without a reviewed plan.

                ## Notes
                Saving the plan and applying that saved file, rather than planning again at apply time, closes the gap where the world changes between review and apply.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every merged infrastructure pull request for a month has a posted plan and an approving review, and every apply used the reviewed plan."
                cadence: rolling
              tasks:
                - "Configure the pipeline to post the plan output on each pull request"
                - "Write a five-line reviewer checklist that starts with destroys and replacements"
                - "Apply only from the saved plan file that was reviewed"
                - "Check the week's applies against reviewed plans @recurring(weekly:fri)"
            - name: Automated plan and apply pipeline for infrastructure
              description: |-
                ## Purpose
                Running applies from laptops means the result depends on whose machine, which credentials and which local version. A pipeline that formats, validates, plans on every pull request and applies on merge, one environment at a time with a manual gate before production, makes every change traceable to a commit and a reviewer.

                ## Milestones
                1. Format, validate and plan running on every infrastructure pull request.
                2. Apply running on merge for non-production environments.
                3. A manual approval gate before any production apply.
                4. Laptop applies to production stopped, apart from the documented emergency route.

                ## Notes
                Promote the same commit through environments in order. Different commits in staging and production defeat the point of staging.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All infrastructure changes for a month were applied by the pipeline, with production applies behind a recorded manual approval."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Add format, validate and plan jobs to infrastructure pull requests"
                - "Add apply on merge for development and staging"
                - "Add a manual approval gate for production applies"
                - "Review pipeline run times and failure causes @recurring(monthly:8)"
            - name: Weekly drift detection run
              description: |-
                ## Purpose
                Drift happens when someone changes a resource in the console, an autoscaler adjusts a setting or a provider changes a default. Left alone, the next unrelated apply quietly reverts it, sometimes in production. A scheduled plan against every stack, with any differences logged and assigned, finds drift while it is still small and still explainable.

                ## Milestones
                1. A scheduled job that plans every stack and reports differences.
                2. Drift results posted to the team channel or ticket queue.
                3. Each drift item resolved by updating the code or reverting the resource.
                4. Four consecutive weeks with every drift item closed within five working days.

                ## Notes
                Some fields always drift because something else manages them. Tell the tool to ignore those specific fields rather than training everyone to ignore the report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scheduled drift check covers every stack, and four consecutive weekly reports show every drift item resolved within five working days."
                cadence: rolling
              tasks:
                - "Schedule a read-only plan for every stack outside working hours"
                - "Send any drift found to the team's ticket queue with the stack name"
                - "Triage this week's drift report and assign each item @recurring(weekly:mon)"
                - "Add ignore rules for fields that another system legitimately manages"
            - name: Monthly provider and module upgrade window
              description: |-
                ## Purpose
                Providers release often, and skipping a year of versions turns a routine bump into a week of breaking changes. A fixed monthly slot to read release notes, raise one pull request per stack and check the plans keeps every stack within a minor version or two of current, so major upgrades stay manageable.

                ## Milestones
                1. A list of every provider and module version in use, by stack.
                2. A monthly upgrade pull request raised for each stack that is behind.
                3. Upgrade plans showing no unintended changes before merge.
                4. No stack more than two minor versions behind the current provider release.

                ## Notes
                A dependency bot can open the pull requests, but a person still has to read the plan. An upgrade that changes a default can show up as a real change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, every stack received an upgrade pull request when behind, and none is more than two minor provider versions out of date."
                cadence: rolling
              tasks:
                - "Generate a table of provider and module versions per stack"
                - "Read release notes and raise upgrade pull requests @recurring(monthly:12)"
                - "Check each upgrade plan for changes not mentioned in the notes"
                - "Configure a dependency bot to open provider bump pull requests"
            - name: State file health and backup checks
              description: |-
                ## Purpose
                State is the map between your code and real resources, and a corrupted or deleted state file can leave you unable to change production safely. Versioned storage is a start, but only a tested restore proves you can recover. A short monthly check and a quarterly restore drill keep that confidence real.

                ## Milestones
                1. Every state file listed with its size, last change and backend location.
                2. Backend versioning and deletion protection confirmed on every state bucket or container.
                3. A restore of a past state version tested into a scratch location.
                4. A written recovery procedure stored next to the bootstrap stack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A restore from a previous state version has been completed within the last quarter, and a written recovery procedure is committed."
                cadence: rolling
              tasks:
                - "List every state file with its backend, size and last modified date"
                - "Confirm versioning and deletion protection on each backend @recurring(monthly:20)"
                - "Restore an old state version into a scratch location @recurring(quarterly)"
                - "Write the state recovery procedure beside the bootstrap stack"
            - name: Sweep for resources living outside code
              description: |-
                ## Purpose
                Even with good rules, resources appear that no stack owns: a debugging instance, a snapshot made during an incident, a bucket a vendor asked for. A monthly comparison between what the cloud holds and what state knows about turns these into an explicit choice: import, delete or document as intentionally unmanaged.

                ## Milestones
                1. A repeatable query comparing the cloud resource inventory with resources in state.
                2. Each unmanaged resource tagged with a decision: import, delete or keep outside code.
                3. A short register of resources intentionally kept outside code, with the reason.
                4. The count of unmanaged production resources falling month on month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly list compares cloud inventory against state, and every unmanaged production resource has a recorded decision."
                cadence: rolling
              tasks:
                - "Write a script that lists cloud resources missing from any state file"
                - "Run the comparison and record a decision for each new item @recurring(monthly:25)"
                - "Keep a register of resources deliberately left outside code"
                - "Raise import tickets for production resources marked import"
            - name: Static checks for infrastructure code
              description: |-
                ## Purpose
                Formatting, validation, linting and security scanning catch open storage buckets, unencrypted volumes and invalid instance types before a plan even runs. Running the same checks locally through pre-commit hooks and in the pipeline means reviewers spend their attention on design, not on spotting a missing encryption flag.

                ## Milestones
                1. Format and validate running in pre-commit hooks and the pipeline.
                2. A linter and a security scanner for infrastructure code added to the pipeline.
                3. Existing findings either fixed or suppressed with an inline reason.
                4. The pipeline failing on new high-severity findings.

                ## Notes
                Every suppression should carry a reason and, ideally, an expiry. A suppression with no reason is a finding you have hidden.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Format, validate, lint and security scanning run on every infrastructure pull request, and new high-severity findings block the merge."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add format and validate checks to the pre-commit configuration"
                - "Add an infrastructure linter and security scanner to the pipeline"
                - "Fix or suppress existing findings with an inline reason for each"
                - "Review every suppressed finding and remove stale ones @recurring(quarterly)"
            - name: Follow-up on failed applies and stale locks
              description: |-
                ## Purpose
                An apply that fails halfway leaves some resources created and others not, and a cancelled pipeline job can leave a lock that blocks everyone the next morning. A monthly look at failed and abandoned applies, with each one traced to a cause, shows whether the problem is flaky provider APIs, missing permissions or stacks that are simply too large.

                ## Milestones
                1. A record of every failed or cancelled apply in the past month with its stack and cause.
                2. A documented procedure for clearing a stale lock safely, including who may do it.
                3. Partially applied stacks re-planned until they show no unexpected changes.
                4. The most frequent cause of failure addressed with a specific fix.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's failed applies are logged with causes, no partially applied stack is left unreconciled, and the top cause has a fix in progress."
                cadence: rolling
              tasks:
                - "Write the procedure for checking and clearing a stale state lock"
                - "Pull last month's failed and cancelled applies from the pipeline history @recurring(monthly:5)"
                - "Re-plan each partially applied stack until it shows no surprises"
                - "Raise one ticket for the most common failure cause"
            - name: Secrets kept out of infrastructure code and state
              description: |-
                ## Purpose
                Database passwords and API keys passed as variables end up in plain text in state files, plan logs and sometimes the repository history. Generating or fetching secrets from a secrets manager at run time, marking outputs as sensitive and scanning the repository closes the leaks that infrastructure code opens most often.

                ## Milestones
                1. A search of the repository, its history and state files for secret values.
                2. Any secret found rotated and moved to a secrets manager.
                3. Sensitive variables and outputs marked so they are hidden in plan output.
                4. A secret scanner running on every pull request and quarterly over history.

                ## Notes
                Marking a value sensitive hides it in output but it can still sit in state. Treat read access to state as read access to secrets.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scan finds no plain-text secrets in the infrastructure repository or its history, and every secret is read from a secrets manager at run time."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Scan the repository history and state files for secret values"
                - "Rotate every secret found and store it in the secrets manager"
                - "Mark sensitive variables and outputs in every stack"
                - "Run a full history secret scan of the infrastructure repo @recurring(quarterly)"
            - name: Sandbox account for learning Terraform or OpenTofu
              description: |-
                ## Purpose
                Reading documentation does not teach you what happens when you rename a resource or change a field that forces replacement. A personal sandbox account with a spending alert, where you build a small network, an instance and a bucket, then change and destroy them, teaches the plan and apply cycle with nothing at stake.

                ## Milestones
                1. A sandbox account or subscription with a low spending alert and no production access.
                2. A small stack built: network, one instance, one bucket and outputs.
                3. Variables, locals, outputs and a data source used and understood.
                4. The stack destroyed and rebuilt from code in under ten minutes.

                ## Notes
                Set the spending alert before creating anything. A forgotten instance in a sandbox is the classic first lesson.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A small stack in a sandbox account has been built, changed, destroyed and rebuilt from code, with variables, outputs and a data source in use."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Create a sandbox account and set a low spending alert first"
                - "Build a network, an instance and a bucket in one small stack"
                - "Rename a resource and change a forcing field to see what the plan does"
                - "Destroy the stack and rebuild it from code, timing the rebuild"
            - name: Reading a plan output with confidence
              description: |-
                ## Purpose
                Most infrastructure outages caused by code were visible in the plan, as a replacement or deletion nobody read carefully. Learning to read a plan, from update in place to forces replacement to values known only after apply, is the single most useful review skill in this area, and it can be practised on past plans in an afternoon.

                ## Milestones
                1. The plan symbols and summary line understood: create, update, replace and destroy.
                2. Five past plans from your own repository read and annotated.
                3. Two examples found where a small code change forced a replacement.
                4. A personal checklist of what to look at first in any plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five past plans have been annotated, two forced replacements explained, and a short plan reading checklist is written and shared."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect five recent plan outputs from merged pull requests"
                - "Annotate each with what would be created, changed, replaced or destroyed"
                - "Find two cases where a small edit forced a resource replacement"
                - "Write a five-line checklist for reading any plan and share it"
            - name: Writing reusable infrastructure modules
              description: |-
                ## Purpose
                Copying the same fifty lines for every service bucket or database works until a security fix has to be made in twelve places. A good module has a narrow purpose, a small set of documented inputs, sensible secure defaults and outputs other stacks can use. Write one, use it twice and you will see what makes a module pleasant or painful.

                ## Milestones
                1. One repeated pattern in the codebase chosen for a module.
                2. A module with typed and validated inputs, secure defaults and documented outputs.
                3. A generated README listing inputs, outputs and an example call.
                4. The module used in at least two stacks, replacing the copied code.

                ## Notes
                Resist adding a flag for every case. A module with forty inputs is a second copy of the provider, not an abstraction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A module with validated inputs, secure defaults and a generated README is used by at least two stacks in place of copied code."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a block of infrastructure code copied into three or more stacks"
                - "Write a module with typed inputs, validation rules and secure defaults"
                - "Generate the module README with inputs, outputs and an example"
                - "Replace the copied code in two stacks and confirm plans show no changes"
            - name: State surgery practice in a sandbox
              description: |-
                ## Purpose
                Moving a resource between modules, importing something hand-built or removing a resource from state without deleting it are routine tasks that feel dangerous the first time. Practising each in a sandbox, using moved and import blocks where your tool supports them and the command line otherwise, means the first time you do it in production is not the first time you do it.

                ## Milestones
                1. A resource moved into a module with a moved block and no replacement in the plan.
                2. A hand-built resource imported with an import block.
                3. A resource removed from state while the real resource survives.
                4. A short guide written on when to use each approach.

                ## Notes
                Always take a copy of the state before manual state commands, and prefer declarative moved and import blocks because they go through review like any other change.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A move, an import and a state removal have each been completed in a sandbox without unintended replacement, and a one-page guide is written."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Move a sandbox resource into a module using a moved block"
                - "Create a resource by hand and import it with an import block"
                - "Remove a resource from state and confirm the real resource still exists"
                - "Write a one-page guide on choosing between move, import and removal"
            - name: Testing infrastructure code
              description: |-
                ## Purpose
                Static checks tell you the code is valid, not that it builds what you meant. The native test framework in Terraform and OpenTofu, Terratest for real deployments and unit tests for Pulumi programs let you assert that a module produces an encrypted bucket or a private subnet. Start with plan-only tests that cost nothing, then add a few real deployment tests for the modules that matter most.

                ## Milestones
                1. Plan-level tests written for one shared module, checking key attributes.
                2. One end-to-end test that deploys the module to a sandbox, checks it and destroys it.
                3. Tests running in the pipeline when the module changes.
                4. A note on which modules need deployment tests and which need only plan tests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One shared module has plan-level tests and one deployment test that run in the pipeline whenever the module changes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the shared module whose failure would hurt most"
                - "Write plan-level tests asserting encryption and network settings"
                - "Add one test that deploys to a sandbox, checks and destroys"
                - "Run the module tests in the pipeline on every module change"
            - name: Server configuration with Ansible
              description: |-
                ## Purpose
                Provisioning tools create servers; configuration tools decide what runs on them. For teams still running virtual machines, Ansible playbooks for packages, users, hardening and service configuration replace hand-run setup scripts and make two servers built months apart identical. Learn it on one server role before converting a fleet.

                ## Milestones
                1. An inventory of hosts grouped by role, generated from the cloud where possible.
                2. A playbook and role for one server type covering packages, users and service configuration.
                3. The playbook run twice with the second run reporting no changes.
                4. Playbook runs added to the pipeline in check mode for pull requests.

                ## Notes
                Idempotence is the test: a second run that changes something means a task is not describing a state, it is running a command.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One server role is fully configured by an Ansible playbook whose second run reports no changes, and pull requests run it in check mode."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a dynamic inventory of hosts grouped by role"
                - "Write a role for one server type covering packages, users and services"
                - "Run the playbook twice and fix any task that changes on the second run"
                - "Add a check-mode run to infrastructure pull requests"
            - name: Machine images built with Packer
              description: |-
                ## Purpose
                Servers that install half their software at boot are slow to scale and break when a package mirror is down. Baking a base image with Packer, versioned and built in the pipeline, moves that work to build time and gives every instance the same starting point. The infrastructure code then refers to an image version rather than a script.

                ## Milestones
                1. A Packer template for one base image with hardening and agents installed.
                2. Images built in the pipeline and tagged with a version and source commit.
                3. Infrastructure code selecting the image by version, not by latest.
                4. A retention rule for old images agreed and applied.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A versioned base image is built by the pipeline from a Packer template, and production stacks reference it by explicit version."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a Packer template for the most common server base image"
                - "Build the image in the pipeline and tag it with version and commit"
                - "Point one stack at the image by explicit version"
                - "Agree how many old image versions to keep and remove the rest"
            - name: Team skills matrix for infrastructure code
              description: |-
                ## Purpose
                Infrastructure code often has one person who understands state and two who are nervous to approve a plan. Mapping who can review plans, write modules, perform state surgery and handle an emergency change shows where the team has a single point of failure and who should pair with whom next.

                ## Milestones
                1. A matrix of six infrastructure skills against every team member, self-rated and peer-checked.
                2. Any skill with only one confident person flagged.
                3. A pairing plan to get a second person confident on each flagged skill.
                4. The matrix refreshed and compared after a quarter.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A skills matrix covers every team member, and each flagged skill has a named second person paired up to learn it."
                cadence: cyclic
              tasks:
                - "List six infrastructure skills, from plan review to emergency changes"
                - "Ask each engineer to rate themselves and one peer to check"
                - "Pair a second person with the only expert on each flagged skill"
                - "Refresh the matrix and compare it with last time @recurring(quarterly)"
            - name: Importing hand-built production resources into code
              description: |-
                ## Purpose
                Once the inventory and the first import are done, the real work is bringing the rest of production under code without changing it by accident. Working service by service, importing, matching code to reality and proving a zero-change plan, turns a frightening migration into a sequence of small, reviewable steps.

                ## Milestones
                1. Production resources grouped into import batches, lowest risk first.
                2. Each batch imported with code matched until the plan shows no changes.
                3. Drift detection switched on for each batch once imported.
                4. Console write access for imported services removed for everyone but break-glass roles.

                ## Notes
                Start from the **Remediation plan** template. Code generation from existing resources gives a rough first draft, but it always needs tidying into your conventions before merge.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every production resource marked import in the inventory is in state with a zero-change plan, and console write access to those services is removed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Group the hand-built production resources into batches by risk"
                - "Ask the agent to draft code for the first batch from exported resource settings"
                - "Import each batch and adjust code until the plan shows no changes"
                - "Remove console write access once a service is fully under code"
            - name: Splitting a monolithic state into smaller stacks
              description: |-
                ## Purpose
                One state holding the network, every database and every service means a twenty minute plan, constant lock contention and a blast radius of everything. Splitting it along lines that change at different speeds, such as networking, data and applications, with outputs passed between stacks, makes plans fast and reviews focused.

                ## Milestones
                1. A proposed split with each new stack's contents and owner.
                2. Dependencies between the new stacks passed through outputs or data lookups.
                3. Resources moved between states with no replacements in any plan.
                4. Plan time for the largest stack cut by at least half.

                ## Notes
                Prefer data lookups by tag or name over reading another stack's state directly. Reading remote state gives the reader access to every value in it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The former single state is split into agreed stacks, all plans show no changes after the move, and the largest plan takes half the previous time."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Time the current plan and list which resources change most often"
                - "Propose a split by layer and owner and review it with the team"
                - "Move resources into the new states one layer at a time"
                - "Confirm every new stack plans with no changes and record new plan times"
            - name: Refactoring with moved blocks instead of recreation
              description: |-
                ## Purpose
                Renaming a resource or wrapping it in a module looks harmless in code but plans as destroy and create, which for a database or load balancer means an outage. Using moved blocks for every rename and module extraction lets you tidy the codebase while the plan proves nothing real changes.

                ## Milestones
                1. A list of resource names and structures the team wants to tidy.
                2. Each rename or extraction done with a moved block in the same pull request.
                3. Plans for every refactor showing moves only, with no replacements.
                4. A review rule that any rename without a moved block is sent back.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All planned renames and module extractions are merged with moved blocks, and none of their plans showed a destroy or replacement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List resources whose names or structure no longer match conventions"
                - "Rename each one with a moved block in the same pull request"
                - "Check that every refactor plan shows moves and no replacements"
                - "Add the moved block rule to the reviewer checklist"
            - name: Policy as code guardrails in the pipeline
              description: |-
                ## Purpose
                Some rules should never depend on a reviewer noticing: no public storage, no open SSH to the internet, no production database without backups. Writing them as policies with Open Policy Agent, Sentinel or your scanner's custom rules, evaluated against every plan, turns those rules into a gate that explains itself when it fails.

                ## Milestones
                1. Ten organisation-wide rules written in plain language and agreed with security.
                2. Each rule expressed as a policy with a test showing a pass and a fail.
                3. Policies evaluated against every plan, warning first, then blocking.
                4. An exception process with an owner and an expiry date for every exception.

                ## Notes
                Run new policies in warning mode for two weeks before making them blocking. You will find legitimate cases you did not think of.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least ten policies with tests run against every plan in blocking mode, and every exception has an owner and an expiry date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write ten guardrail rules in plain language with the security lead"
                - "Express each rule as a policy with a passing and a failing test"
                - "Run the policies in warning mode for two weeks, then switch to blocking"
                - "Review policy exceptions and close any past their expiry @recurring(monthly:27)"
            - name: Choosing a runner for infrastructure applies
              description: |-
                ## Purpose
                Running plans and applies in a general CI system works, but dedicated runners such as HCP Terraform, Spacelift, env0 or a self-hosted Atlantis add state management, policy checks, drift detection and approval flows. Comparing them against what your pipeline already does stops you paying for features you have built or building features you could buy.

                ## Milestones
                1. Current gaps listed: locking, approvals, drift, policy, audit trail and cost visibility.
                2. Three options, including staying on the current pipeline, compared against the gaps.
                3. Pricing estimated for the team's real number of runs and users.
                4. A decision recorded with the reasons and a review date.

                ## Notes
                Start from the **Purchase decision** template. Check how each option handles your state backend, because moving state is the most disruptive part of switching.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three runner options, including the current pipeline, with costs estimated for actual usage."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the gaps in today's infrastructure pipeline"
                - "Compare three runner options, including staying put, against those gaps"
                - "Estimate yearly cost for each option using last quarter's run count"
                - "Record the decision with a date to revisit it"
            - name: Evaluating a move from Terraform to OpenTofu
              description: |-
                ## Purpose
                Licence changes, feature differences such as state encryption, and provider registry questions have pushed many teams to consider OpenTofu. A migration is usually simple for small codebases and fiddly for ones using a managed runner or newer language features. Testing it on one stack gives you facts instead of opinions.

                ## Milestones
                1. The licence and support position for your use recorded, with legal input if needed.
                2. Features, providers and runner integrations you rely on checked against both tools.
                3. One non-production stack planned and applied with the alternative tool.
                4. A decision to migrate, wait or stay, with the reasons written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One non-production stack has been planned and applied with the alternative tool, and a migrate, wait or stay decision is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the language features, providers and integrations you depend on"
                - "Ask legal or procurement whether the licence position affects you"
                - "Run plan and apply on one non-production stack with the other tool"
                - "Record the decision to migrate, wait or stay"
            - name: Private module registry with versioned releases
              description: |-
                ## Purpose
                Shared modules pulled straight from a branch give every consumer every change at once, including the breaking ones. Publishing modules to a private registry or tagged repository with semantic versions and a changelog lets teams upgrade when they are ready and see what changed.

                ## Milestones
                1. Shared modules published to a private registry or as tagged releases.
                2. Semantic versioning rules written: what counts as a breaking change.
                3. A changelog kept for every module.
                4. All consumers referencing modules by version constraint.

                ## Notes
                Renaming an input or changing a default that recreates a resource is a breaking change, even if the code still validates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every shared module is published with semantic versions and a changelog, and no stack references a module by branch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose between a private registry and tagged repositories for modules"
                - "Write the versioning rules, including what counts as breaking"
                - "Tag a first release of each shared module with a changelog"
                - "Triage open module issues and release requests @recurring(weekly:wed)"
            - name: Deletion protection on stateful resources
              description: |-
                ## Purpose
                A plan that destroys a database, a storage bucket full of customer files or a DNS zone is the one mistake infrastructure code makes worse, because it happens fast and cleanly. Lifecycle rules that prevent destroy, provider deletion protection and backups taken outside the stack mean a bad merge produces an error, not data loss.

                ## Milestones
                1. A list of every stateful resource: databases, buckets, queues, key stores and DNS zones.
                2. Prevent-destroy lifecycle rules and provider deletion protection set on each.
                3. Backups or snapshots confirmed to live outside the stack that owns the resource.
                4. A tested plan showing that an attempted destroy is refused.

                ## Notes
                Prevent-destroy in code does not stop someone deleting the block and the rule together. Provider-side deletion protection is the second lock.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stateful production resource has both a prevent-destroy rule and provider deletion protection, and a test destroy plan has been refused."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every stateful production resource across all stacks"
                - "Add prevent-destroy lifecycle rules to each one"
                - "Switch on provider deletion protection where the service offers it"
                - "Run a test destroy plan in staging and confirm it is refused"
            - name: Environment rebuild from code drill
              description: |-
                ## Purpose
                Claiming an environment is fully defined in code is easy; proving it means building a copy from an empty account. A rebuild drill of staging, timed and written up, exposes the manual steps, hidden dependencies and bootstrap secrets that would otherwise surface during a real disaster.

                ## Milestones
                1. A date set and an empty account or subscription prepared.
                2. Staging rebuilt from code alone, with every manual step written down.
                3. Time to a working environment recorded.
                4. Each manual step turned into code or a documented runbook step.

                ## Notes
                Start from the **Operational checklist** template. Expect the first drill to take far longer than you think. That is the point.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Staging has been rebuilt in an empty account from code, with the elapsed time and a list of manual steps recorded and assigned for automation."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book a drill date and prepare an empty account for the rebuild"
                - "Rebuild staging from code and note every manual step taken"
                - "Record the time to a working environment and write it up"
                - "Schedule the next rebuild drill with the manual steps removed @recurring(yearly)"
            - name: Major provider version upgrade
              description: |-
                ## Purpose
                Major provider releases can rename resources, change defaults and remove deprecated arguments across hundreds of lines. Treating it as a planned event, with the upgrade guide read, deprecation warnings cleared on the current version first and stacks upgraded in order from development to production, keeps it from becoming an unplanned week.

                ## Milestones
                1. The upgrade guide read and every affected resource type listed.
                2. Deprecation warnings on the current version cleared in all stacks.
                3. Development and staging upgraded with plans showing no unintended changes.
                4. Production upgraded and the version pin updated everywhere.

                ## Notes
                Clear deprecation warnings before upgrading. Most breaking changes in a major release were warnings in the previous one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All stacks run the new major provider version, with deprecation warnings cleared and no unintended resource changes in any upgrade plan."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the provider upgrade guide and list affected resource types"
                - "Clear deprecation warnings on the current version in every stack"
                - "Upgrade development and staging and review the plans"
                - "Upgrade production and update the version pin in every stack"
            - name: Infrastructure code evidence for a compliance audit
              description: |-
                ## Purpose
                Auditors for frameworks such as SOC 2 or ISO 27001 want to see that infrastructure changes are reviewed, approved and traceable. Infrastructure code produces most of that evidence automatically, if you know where to find it. Preparing the evidence pack ahead of the audit turns change management from a scramble into a set of links.

                ## Milestones
                1. The audit controls that relate to infrastructure changes listed.
                2. Evidence mapped to each control: pull requests, approvals, pipeline logs and policy results.
                3. A sample of changes from the audit period traced from commit to apply.
                4. Gaps found in the sample fixed or explained before the audit begins.

                ## Notes
                Start from the **Risk register** template to log each gap with an owner and a date.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An evidence pack maps each infrastructure change control to links, and a sample of at least twenty changes is traced from commit to apply."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the compliance lead which controls cover infrastructure changes"
                - "Map pull requests, approvals and pipeline logs to each control"
                - "Trace twenty changes from the audit period from commit to apply"
                - "Log each gap found with an owner and a fix date"
            - name: Infrastructure code day for the whole team
              description: |-
                ## Purpose
                If only the platform engineer ever touches infrastructure code, every small change queues behind one person. A single day where every engineer makes one real change, guided and paired, from writing the code to reading the plan to watching the apply, lowers the barrier for good and spreads the review load.

                ## Milestones
                1. A list of small, real infrastructure tickets, one per engineer.
                2. A short walk-through of the repository, pipeline and plan review.
                3. Every engineer's change merged and applied through the normal process.
                4. Feedback gathered on what was confusing and the README updated.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every engineer on the team has merged and applied one infrastructure change through the normal pipeline on the day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect one small, real infrastructure ticket for each engineer"
                - "Prepare a thirty minute walk-through of the repo and pipeline"
                - "Pair each engineer with a reviewer for their change on the day"
                - "Update the README with the questions people asked"
            - name: Solo engineer running a startup's infrastructure
              description: |-
                ## Purpose
                As the only engineer, you are author, reviewer and on-call for every change, and there is no one to catch a bad plan. A lighter setup suits you: one repository, small stacks, a pipeline that plans on every push, deletion protection on anything with data and a written note of how to rebuild. The aim is that a future hire or contractor can pick it up in a day.

                ## Milestones
                1. All infrastructure in one repository with a README covering setup and rebuild.
                2. Plans running automatically on every push, even with no reviewer.
                3. Deletion protection and off-stack backups on every database and bucket.
                4. A handover note a new engineer could follow without you in the room.

                ## Notes
                Read your own plans the next morning before applying anything that replaces or destroys. A night's distance is the cheapest reviewer you have.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single repository holds all infrastructure, plans run on every push, stateful resources are protected and a handover note is committed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Move all infrastructure code into one repository with a README"
                - "Set the pipeline to plan on every push to any branch"
                - "Protect every database and bucket from deletion"
                - "Write the handover note as if you were leaving next week"
            - name: Taking over infrastructure code from a departing engineer
              description: |-
                ## Purpose
                When the person who wrote the infrastructure code leaves, they take with them the bootstrap steps, the reason for that odd ignore rule and the password to the state bucket. A structured handover in their last few weeks, covering every stack, every manual step and every credential, keeps the team from discovering the gaps during an incident.

                ## Milestones
                1. Every stack walked through by the departing engineer, recorded or written up.
                2. Bootstrap steps, manual steps and unusual ignore rules documented.
                3. Credentials, accounts and registry ownership transferred to the team.
                4. A successful plan and apply by the receiving engineer on every stack.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The receiving engineer has planned and applied every stack, and all bootstrap steps, credentials and ownerships are transferred and documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Book recorded walk-throughs of each stack with the departing engineer"
                - "Ask the agent to turn the walk-through notes into a handover document"
                - "Transfer account, registry and state backend ownership to the team"
                - "Run a plan and apply on every stack as the receiving engineer"
            - name: Shared module support for many product teams
              description: |-
                ## Purpose
                A platform team publishing modules for dozens of product teams has a support job as much as a coding one. Clear module contracts, a deprecation policy, regular office hours and a view of which teams use which versions let the platform team change modules without breaking everyone, and let product teams get help without opening a ticket into a void.

                ## Milestones
                1. A list of every consumer of each shared module and the version they use.
                2. A deprecation policy with notice periods for breaking changes.
                3. A weekly office hours slot for module questions.
                4. No consumer more than one major version behind on any module.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Module consumers and versions are tracked, a deprecation policy is published, and weekly office hours have run for two months."
                cadence: rolling
              tasks:
                - "Generate a list of module consumers and their versions"
                - "Publish a deprecation policy with notice periods"
                - "Hold module office hours for product teams @recurring(weekly:thu)"
                - "Contact every team more than one major version behind"
            - name: Separation of duties for regulated infrastructure changes
              description: |-
                ## Purpose
                In regulated settings such as payments or health data, the person who writes an infrastructure change usually may not be the one who approves and applies it to production. Building that rule into branch protection, pipeline approvals and role permissions makes it automatic and leaves an audit trail without slowing everyday work in lower environments.

                ## Milestones
                1. The separation rule written: who may author, approve and apply in each environment.
                2. Branch protection preventing authors approving their own production changes.
                3. Pipeline approval steps restricted to a named group, with the approver recorded.
                4. A quarterly export of production approvals for the compliance team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No production infrastructure change can be applied without approval from someone other than its author, and approvals are exported quarterly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write who may author, approve and apply changes in each environment"
                - "Block self-approval on production infrastructure paths"
                - "Restrict production pipeline approvals to the named approver group"
                - "Export production apply approvals for the compliance team @recurring(quarterly)"
            - name: Emergency infrastructure change runbook for on-call
              description: |-
                ## Purpose
                At three in the morning with production down, nobody waits for a pull request review, and that is fine if there is a known route. A break-glass runbook says how to get elevated access, what to record while making a console or local change, and how to write it back into code the next working day, so emergencies do not become permanent drift.

                ## Milestones
                1. A break-glass role with elevated access that alerts the team when used.
                2. A runbook covering access, what to record and how to reconcile afterwards.
                3. A rule that every emergency change is back in code within two working days.
                4. The runbook rehearsed once by an on-call engineer in staging.

                ## Notes
                Start from the **Operational checklist** template. The alert on break-glass use matters more than the runbook itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A break-glass role that alerts on use and a reconciliation runbook exist, and one on-call engineer has rehearsed the runbook in staging."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a break-glass role that alerts the team whenever it is assumed"
                - "Write the runbook for access, recording and reconciliation"
                - "Add the two working day reconciliation rule to the change policy"
                - "Rehearse the runbook in staging with an on-call engineer"
            - name: Handing infrastructure code to a client
              description: |-
                ## Purpose
                Consultants and agencies often build a client's infrastructure in their own accounts and tools, then struggle to hand it over cleanly. Planning the handover from the start, with state, pipelines and registries in the client's accounts and documentation written for their team, means the client owns what they paid for and you are not their permanent operator by accident.

                ## Milestones
                1. State, pipelines and module sources moved into accounts the client owns.
                2. Your personal and company credentials removed from every client system.
                3. A handover document covering architecture, stacks, upgrades and rebuild.
                4. A client engineer completing a plan and apply unaided.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All state and pipelines sit in client-owned accounts, your access is removed, and a client engineer has applied a change without help."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every system where the client's state, code or modules live"
                - "Move state, pipelines and module sources into client-owned accounts"
                - "Write the handover document for the client's engineers"
                - "Watch a client engineer apply a change, then remove your access"
            - name: Landing zone of accounts defined in code
              description: |-
                ## Purpose
                Organisations with many teams outgrow a handful of shared accounts. A landing zone defines the account structure, organisation-level guardrails, central logging, network hub and baseline roles in code, and lets a new account be created through a pull request. Each new team then starts from the same secure baseline instead of a blank account.

                ## Milestones
                1. An account structure designed: security, logging, shared network and workload accounts.
                2. Organisation guardrails and baseline roles applied from code.
                3. A new account created end to end from a single pull request.
                4. Existing accounts brought under the baseline or scheduled for it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new account with guardrails, logging and baseline roles can be created from one merged pull request, and existing accounts are scheduled for the baseline."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draw the target account structure and get security sign-off"
                - "Code the organisation guardrails and baseline roles"
                - "Create one new account entirely through a pull request"
                - "Plan the order for bringing existing accounts under the baseline"
            - name: GitOps reconciliation for cloud resources
              description: |-
                ## Purpose
                Pipeline-driven applies only fix drift when someone runs them. Controllers such as Crossplane or the cloud providers' own operators keep reconciling declared resources continuously, so drift is corrected within minutes. It suits teams already running Kubernetes and comfortable with controllers, and it brings new failure modes that need watching.

                ## Milestones
                1. A controller chosen and installed in a non-production cluster.
                2. One resource type, such as buckets or queues, managed through it.
                3. Reconciliation errors visible in the team's alerting.
                4. A written comparison with the pipeline approach after a month.

                ## Notes
                Keep stateful, high-risk resources in the pipeline approach until the team trusts the controller. Continuous reconciliation also reconciles mistakes continuously.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One resource type has been managed by a reconciling controller for a month, and a written comparison with pipeline applies records the decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Install a reconciling controller in a non-production cluster"
                - "Move one low-risk resource type under the controller"
                - "Review reconciliation errors and stuck resources @recurring(weekly:tue)"
                - "Write up the comparison with pipeline applies after a month"
            - name: Ephemeral preview environments from infrastructure code
              description: |-
                ## Purpose
                When infrastructure is fully parameterised, a pull request can get its own short-lived environment for testing, then have it destroyed on merge. Done well, this catches integration problems before staging; done carelessly, it leaves dozens of forgotten environments running. A time to live and an automatic teardown are part of the design, not an afterthought.

                ## Milestones
                1. The stacks needed for a preview environment parameterised by a short identifier.
                2. Preview environments created on pull request open and destroyed on close.
                3. A time to live tag and a sweeper that removes anything past it.
                4. Typical creation time and running cost per environment recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pull requests create and destroy their own preview environments automatically, and a sweeper removes any environment past its time to live."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Parameterise the preview stacks by a short environment identifier"
                - "Create a preview environment when a pull request opens"
                - "Destroy it on close and add a time to live sweeper"
                - "Check for preview environments past their time to live @recurring(weekly:fri)"
            - name: Custom provider for an internal platform
              description: |-
                ## Purpose
                Internal services, such as a feature flag system or an identity platform, configured by hand while everything else lives in code become the drift nobody can see. Writing a small provider or a Pulumi component against its API brings it into the same review, plan and apply cycle as the cloud.

                ## Milestones
                1. The internal API's resources and operations mapped, including read and import.
                2. A provider or component supporting create, read, update, delete and import for one resource.
                3. Acceptance tests running against a test instance of the service.
                4. The provider published to the private registry and used in one stack.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A custom provider or component manages at least one internal resource type with tests, and one production stack uses it."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map the internal API's resources and check it supports reading state"
                - "Build create, read, update, delete and import for one resource type"
                - "Write acceptance tests against a test instance of the service"
                - "Publish the provider privately and use it in one stack"
            - name: Supply chain checks for modules and providers
              description: |-
                ## Purpose
                Every public module and provider you pull in runs with your cloud credentials. Verifying provider checksums and signatures, mirroring approved versions, restricting module sources to an allowlist and reviewing third-party module code before adoption reduces the chance that a compromised dependency rewrites your infrastructure.

                ## Milestones
                1. Every third-party provider and module in use listed with its source.
                2. Provider checksums verified through committed lock files and, where possible, a mirror.
                3. An allowlist of permitted module and provider sources enforced in the pipeline.
                4. Third-party modules reviewed and pinned to commits before use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All providers and modules come from an enforced allowlist, lock files verify provider checksums, and third-party modules are pinned to reviewed commits."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every third-party provider and module with its source"
                - "Set up a provider mirror or confirm lock file checksums are enforced"
                - "Enforce an allowlist of module and provider sources in the pipeline"
                - "Review the source allowlist and remove unused entries @recurring(quarterly)"
---

# Infrastructure as Code

Infrastructure as code turns the servers, networks, permissions and managed services your software runs on into files that can be reviewed, versioned and replayed, so an environment is something you can read and rebuild rather than remember. These projects begin with the foundations (an inventory of what exists, a tool choice, a locked and encrypted state backend, repository layout, environment separation and pipeline credentials), move into the operating routines that keep code and cloud in agreement, then the skills of reading plans, writing modules and handling state, the improvements and decisions that follow, rebuild drills and upgrade events, situations such as a solo engineer, an inherited codebase or a regulated team, and specialist work like landing zones, preview environments and supply chain checks.

What repeats is a Monday drift check, a Friday look at whether every apply had a reviewed plan, monthly windows for provider upgrades, state backups, unmanaged resources, failed applies, tag compliance and pipeline health, and quarterly reviews of secrets, roles, policy exceptions and code owners. The Purchase decision, Remediation plan, Operational checklist, Skills matrix and Risk register templates pair with the projects that need a written record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
