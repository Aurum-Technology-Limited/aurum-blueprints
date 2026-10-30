---
id: software-engineering.cloud-infrastructure-provisioning
name: Cloud Infrastructure Provisioning
description: "A provider chosen on evidence, accounts and networks laid out properly, compute, storage and databases sized for the real workload, and the routines that keep a cloud estate reliable for engineers and founders."
category: business
version: 1.0.0
tags: [software-engineering, cloud-infrastructure-provisioning, engineer, founder, cloud, networking, managed-databases, compute]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - risk-register
    - operational-checklist
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cloud Infrastructure Provisioning
          description: "Choosing and setting up cloud services for compute, storage, networking and databases so applications run reliably at the right cost."
          projects:
            - name: Workload requirements sheet before provisioning
              description: |-
                ## Purpose
                Teams that open the cloud console before writing anything down end up sizing for a guess and paying for it twice. One page listing expected users, requests per second at peak, data volume after a year, latency targets, uptime promise, recovery point and recovery time, and any data location rules gives every later choice in this area something to be measured against.

                ## Milestones
                1. A one-page sheet with peak traffic, data size at twelve months, latency target and uptime promise filled in.
                2. Recovery point and recovery time objectives written as numbers, agreed with whoever owns the product.
                3. Data location, compliance and customer contract constraints listed, each with its source.
                4. The sheet stored in the repository and linked from the infrastructure README.

                ## Notes
                Rough numbers are fine. A peak of about 50 requests per second and 20 GB of data is far more useful than a blank, and you can revise it after the first month of real traffic.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A requirements sheet with numeric traffic, data, latency, uptime, recovery point and recovery time targets is committed to the repository."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down expected peak requests per second and active users for the first year"
                - "Estimate stored data after twelve months, including files and backups"
                - "Agree recovery point and recovery time targets with the product owner"
                - "List every data location or compliance rule that customers or regulators impose"
            - name: Choosing a cloud provider for the first workload
              description: |-
                ## Purpose
                Switching providers after launch costs months, so the choice deserves a week of evidence rather than whichever console someone used at a previous job. Scoring two or three providers against the requirements sheet, the team's existing skills, regional coverage, managed database options, support plans and startup credits turns a habit into a decision you can defend to investors and new hires.

                ## Milestones
                1. Two or three providers shortlisted, each with regions that meet the data location rules.
                2. A scoring table covering services needed, team familiarity, support tiers, estimated monthly cost and credits.
                3. A small proof of concept deployed on the leading option to test the console, CLI and documentation.
                4. The choice and the main reasons recorded in a short decision note.

                ## Notes
                Start from the **Purchase decision** template. Team familiarity usually matters more than a ten percent price difference at small scale.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision note naming the chosen provider, with a scoring table of at least two alternatives, is stored with the infrastructure docs."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the managed services the requirements sheet needs from any provider"
                - "Score two or three providers on services, regions, support, cost and team skills"
                - "Deploy a hello-world service on the front runner to test the tooling"
                - "Write a one-page decision note with the scores and the reasons"
            - name: Separate accounts for production, staging and sandboxes
              description: |-
                ## Purpose
                Running everything in one account means a mistyped command in a test can delete production data, and nobody can see which environment is costing what. Splitting into separate accounts or projects for production, staging, shared services and personal sandboxes, grouped under one organisation with consolidated billing, gives each environment its own blast radius and its own bill.

                ## Milestones
                1. An organisation created with consolidated billing and a named owner.
                2. Separate accounts or projects for production, staging, shared tooling and sandboxes.
                3. Single sign-on configured so engineers move between accounts without separate passwords.
                4. A diagram of the account structure stored with the infrastructure docs.

                ## Notes
                Create the structure before the first real workload. Moving live resources between accounts later is slow and sometimes impossible.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production, staging, shared and sandbox environments live in separate accounts under one organisation, reachable through single sign-on."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the account layout for production, staging, shared tooling and sandboxes"
                - "Create the organisation and turn on consolidated billing"
                - "Create each account and connect them to single sign-on"
                - "Draw the final structure and add it to the infrastructure README"
            - name: Root account lockdown and break-glass access
              description: |-
                ## Purpose
                The root or owner login of a cloud account can delete everything and close the account, and attackers know that founders often protect it with a reused password. Putting a hardware key on it, removing its access keys, storing the credentials in a sealed, recorded place and keeping one break-glass admin route closes the most damaging hole in a new account within an afternoon.

                ## Milestones
                1. Multi-factor authentication with a hardware key or authenticator app on every root or owner login.
                2. No programmatic access keys left on any root user.
                3. Root credentials stored in a shared password manager vault with two named people able to reach it.
                4. A break-glass procedure written down and tested once.

                ## Notes
                Use a group email address you control for the root login, not a personal inbox that leaves with an employee.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every root or owner login has multi-factor authentication, no access keys, and a written break-glass procedure that was tested once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn on multi-factor authentication for every root or owner login today"
                - "Delete any access keys attached to root users"
                - "Move root credentials into a shared vault that two named people can open"
                - "Rehearse the break-glass login and note how long it took @recurring(yearly)"
            - name: Budget alerts and spend guardrails from day one
              description: |-
                ## Purpose
                Cloud bills arrive a month after the mistake, so a forgotten GPU instance or a runaway log stream can cost more than the whole year's plan before anyone notices. Setting budgets with alerts at 50, 80 and 100 percent, plus anomaly alerts and a cap on sandbox spend, means a surprise reaches a person within a day instead of on the invoice.

                ## Milestones
                1. A monthly budget set for each account, based on the cost estimate from the provider choice.
                2. Alerts at 50, 80 and 100 percent of budget sent to a shared channel, not one inbox.
                3. Cost anomaly detection switched on where the provider offers it.
                4. A lower hard limit or automatic shutdown policy on sandbox accounts.

                ## Notes
                Alerts are a provisioning safety net. Working out how to cut the bill belongs to cost optimisation work later.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account has a budget with alerts at three thresholds delivered to a shared channel, and sandboxes have a spend limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a monthly budget for the production account at the estimated spend"
                - "Route budget and anomaly alerts to the team's shared channel"
                - "Add a lower spend limit to every sandbox account"
                - "Compare month-to-date spend with each budget and note any surprises @recurring(monthly:2)"
            - name: Region and availability zone selection
              description: |-
                ## Purpose
                Region decides latency for your users, which services you can use, what data location promises you can make and sometimes the price by twenty percent or more. Choosing a primary region and a fallback against the requirements sheet, and deciding how many availability zones production will span, settles a question that is very expensive to reopen once data is stored.

                ## Milestones
                1. Latency from your main user locations measured to two or three candidate regions.
                2. Each candidate checked for every managed service the workload needs.
                3. A primary region and a secondary region chosen, with data location rules confirmed.
                4. The number of availability zones for production agreed and written down.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the primary and secondary regions and the zone count for production, with latency measurements attached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure round-trip latency from your main user locations to three candidate regions"
                - "Check each region's service list for every managed service you need"
                - "Confirm the chosen region satisfies customer data location terms"
                - "Record the primary region, secondary region and zone count"
            - name: Resource naming and tagging convention
              description: |-
                ## Purpose
                Six months in, a console full of resources called test2 and new-db-final tells nobody who owns them, which environment they serve or whether they can be deleted. A short convention for names and a required set of tags (owner, environment, service, cost centre, expiry for temporary things) makes inventories, cost reports and clean-ups possible later.

                ## Milestones
                1. A naming pattern agreed that encodes environment, service and resource type.
                2. Four to six mandatory tags defined, each with allowed values.
                3. A policy or check that warns when a new resource is missing required tags.
                4. Existing resources renamed or tagged to match, with exceptions listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written naming and tagging convention exists, and at least 90 percent of production resources carry every mandatory tag."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a naming pattern covering environment, service and resource type"
                - "Choose the mandatory tags and the allowed values for each"
                - "Turn on a tag policy or rule that flags untagged resources"
                - "Tag or rename the existing production resources to match"
            - name: Network address plan for every environment
              description: |-
                ## Purpose
                Overlapping private address ranges are invisible until the day you need to peer two networks, connect an office VPN or merge with an acquired company, and then they block the whole project. Allocating non-overlapping ranges for each environment and region now, with room to grow, and splitting each into public, private and data subnets per zone, avoids a painful renumbering later.

                ## Milestones
                1. A table of address ranges for each account, region and environment, with no overlaps.
                2. Each network divided into public, private application and private data subnets in every zone used.
                3. Spare ranges reserved for future regions, partner links and on-premises networks.
                4. The plan stored where anyone creating a network will find it.

                ## Notes
                Give each network more space than seems necessary. Running out of addresses in a subnet is a common reason for failed scaling events.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An address plan covering every environment and region, with reserved spare ranges and no overlaps, is published with the infrastructure docs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every network you have now and every one you expect within two years"
                - "Allocate a non-overlapping private range to each environment and region"
                - "Split each range into public, private and data subnets per zone"
                - "Check the plan against any office or partner networks you may connect"
            - name: Compute model choice among VMs, containers and serverless
              description: |-
                ## Purpose
                Virtual machines, a managed container service and functions each suit different traffic shapes, team sizes and operating budgets, and mixing them by accident gives you three things to patch and monitor. Comparing them for your main service on cold starts, steady-state cost, deployment effort and the skills you have settles the default compute model and when an exception is allowed.

                ## Milestones
                1. The main service's traffic pattern described: steady, spiky, scheduled or event driven.
                2. Virtual machines, managed containers and functions compared on cost, operations effort and limits.
                3. A default compute model chosen, with written rules for when an exception is allowed.
                4. The first service provisioned on the chosen model.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record names the default compute model and exception rules, and the first service runs on it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Describe the traffic shape of the main service in two sentences"
                - "Price the service on VMs, managed containers and functions at expected load"
                - "Note the timeouts, memory caps and cold start behaviour of each option"
                - "Record the default model and the rules for exceptions"
            - name: Managed database engine and size selection
              description: |-
                ## Purpose
                The database is the hardest component to move later, so the engine, edition and instance size deserve their own decision. Matching the data model and query patterns to a relational, document or key-value service, then picking a starting size from the requirements sheet with storage autoscaling and automated backups switched on, avoids both an overpowered bill and a launch-day bottleneck.

                ## Milestones
                1. The data model and the five most frequent queries written down.
                2. A managed engine chosen, with version and support window noted.
                3. A starting instance size and storage allocation picked, with the reasoning recorded.
                4. Automated backups, retention period and encryption at rest configured on creation.

                ## Notes
                Detailed table and index design belongs with schema work. This project is about the service that will hold the data.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A managed database is provisioned with a recorded engine, version, size, backup retention and encryption choice."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the data model and the five most common queries"
                - "Compare two managed engines on fit, version support and price"
                - "Choose a starting instance size and storage with autoscaling limits"
                - "Turn on automated backups and encryption when creating the instance"
            - name: Monthly cloud resource inventory
              description: |-
                ## Purpose
                Resources multiply quietly: a load balancer left from a demo, a disk detached from a deleted server, a public bucket created for a one-off export. Walking through a generated inventory once a month, account by account, and asking who owns each unfamiliar item keeps the estate understood and stops security and cost surprises from accumulating.

                ## Milestones
                1. A script or provider report that lists every resource by account, region, type and owner tag.
                2. A monthly review slot in the calendar with a named reviewer.
                3. Every unowned resource either claimed, tagged or scheduled for removal.
                4. A short log of what changed in the estate each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An inventory review is logged every month for three months running, with no resource left without an owner."
                cadence: rolling
              tasks:
                - "Set up a report that lists resources by account, region and owner tag"
                - "Review the inventory and chase owners of unfamiliar resources @recurring(monthly:9)"
                - "Keep a one-line log of what was added or removed each month"
                - "Check every region, including ones you never meant to use"
            - name: Quarterly access review of cloud users and roles
              description: |-
                ## Purpose
                Contractors finish, engineers change teams and test roles get full admin rights just to unblock a Friday deploy, and none of it gets undone on its own. A quarterly pass over every user, group, role and long-lived key, removing what is no longer needed and narrowing what is too broad, is also the evidence a customer security review will ask for.

                ## Milestones
                1. An export of every human user, role, group and access key across all accounts.
                2. Each entry confirmed by its owner or removed.
                3. Admin rights limited to a named short list of people.
                4. The review date, reviewer and changes recorded for audit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly access reviews are recorded in a year, each listing users removed and permissions narrowed."
                cadence: rolling
              tasks:
                - "Export users, roles and access keys from every account"
                - "Review every user and role and remove what is no longer needed @recurring(quarterly)"
                - "Cut the list of full administrators to the people who truly need it"
                - "Record the reviewer, date and changes in the access review log"
            - name: Database backup restore tests
              description: |-
                ## Purpose
                Automated backups that have never been restored are a hope rather than a plan, and the usual surprise is a missing permission, a wrong region or a restore that takes six hours against a one-hour recovery target. Restoring the production database into an isolated account every month and timing it proves the recovery numbers on the requirements sheet are real.

                ## Milestones
                1. A written restore procedure for each production database.
                2. A first restore completed into an isolated account, with elapsed time recorded.
                3. Restored data checked against row counts or a checksum from production.
                4. Monthly restore results logged against the recovery time target.

                ## Notes
                Restore to a separate account so a mistake cannot overwrite production, and delete the copy after checking it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A production database restore is completed and timed every month, and every result meets the agreed recovery time target or has a fix logged."
                cadence: rolling
              tasks:
                - "Write a step-by-step restore procedure for the main database"
                - "Restore last night's backup into an isolated account and time it @recurring(monthly:17)"
                - "Compare row counts on key tables with production"
                - "Log the restore time against the recovery time target"
            - name: Machine image patching and refresh cycle
              description: |-
                ## Purpose
                Virtual machines launched from an image built a year ago carry a year of unpatched vulnerabilities, and patching servers in place by hand drifts each one away from the others. Rebuilding a base image every month with current operating system updates, then rolling instances onto it, keeps the fleet consistent and patched without anyone logging into servers.

                ## Milestones
                1. A base image definition stored in version control.
                2. A monthly image build that applies current operating system patches.
                3. Instance groups rolled onto the new image with health checks passing.
                4. Images older than three months retired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No production virtual machine runs an image older than 60 days, checked each month."
                cadence: rolling
              tasks:
                - "List every running virtual machine and the image date it was built from"
                - "Build a fresh base image with current patches and roll it out @recurring(monthly:12)"
                - "Retire images older than three months"
                - "Note any server that cannot be rebuilt and why"
            - name: Service quota and limit watch
              description: |-
                ## Purpose
                Every provider caps how many instances, addresses, load balancers or database connections an account may use, and hitting one usually happens during a launch or an incident when the increase takes days. Checking usage against the important quotas monthly and requesting increases ahead of need removes an avoidable outage cause.

                ## Milestones
                1. The ten quotas most likely to block the workload listed with current limits.
                2. Usage of each recorded as a percentage of the limit.
                3. An alert set where the provider supports quota usage alerts.
                4. Increase requests filed for anything above 70 percent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly quota check is recorded and no tracked quota exceeds 80 percent of its limit without an open increase request."
                cadence: rolling
              tasks:
                - "List the ten quotas most likely to block a launch or scale-up"
                - "Compare usage with limits and request increases above 70 percent @recurring(monthly:22)"
                - "Turn on quota usage alerts where the provider offers them"
                - "Raise quota increases two weeks before any planned launch"
            - name: Certificate and domain renewal register
              description: |-
                ## Purpose
                An expired TLS certificate or a lapsed domain takes a whole product offline, and it tends to happen to the certificate someone uploaded by hand three years ago. Keeping a single register of every domain, certificate, issuer and expiry date, with managed auto-renewal wherever possible, makes this an unremarkable monthly glance.

                ## Milestones
                1. Every domain and certificate listed with issuer, expiry date and renewal method.
                2. Managed, auto-renewing certificates used for every endpoint that supports them.
                3. Domain registrations set to auto-renew with registrar lock on.
                4. Expiry alerts set at 30 and 7 days for anything renewed by hand.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every domain and certificate with expiry dates, and nothing in it expires without at least 30 days of warning."
                cadence: rolling
              tasks:
                - "List every domain and certificate with its issuer and expiry date"
                - "Switch hand-uploaded certificates to managed auto-renewal where possible"
                - "Check the register for anything expiring within 45 days @recurring(monthly:4)"
                - "Confirm domain auto-renewal, payment card and registrar lock @recurring(yearly)"
            - name: Provider notices and deprecation triage
              description: |-
                ## Purpose
                Providers announce runtime end-of-life dates, database version retirements, forced maintenance windows and pricing changes by email to whichever address set up the account. Routing those notices to a shared place and spending fifteen minutes on them weekly turns a forced upgrade into a planned task instead of a weekend scramble.

                ## Milestones
                1. Account notification contacts pointed at a shared team address or channel.
                2. A weekly triage slot with a named owner and a backup.
                3. Each notice that affects you turned into a ticket with the provider's deadline.
                4. A running list of upcoming forced changes and their dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No provider-forced upgrade or retirement in a year arrives without a ticket opened at least 30 days before its deadline."
                cadence: rolling
              tasks:
                - "Point each account's operations and security contacts at a shared address"
                - "Triage new provider notices and open tickets for those that affect you @recurring(weekly:wed)"
                - "Keep a list of forced upgrades with their deadlines"
                - "Subscribe to the provider's status page for the regions you use"
            - name: Sandbox lifecycle with expiry dates
              description: |-
                ## Purpose
                Personal sandboxes are where engineers learn safely, and also where idle databases and forgotten clusters run for months. Giving every sandbox resource an expiry tag, sending a reminder before it lapses and sweeping expired items weekly keeps experimentation cheap and allowed instead of something managers start to restrict.

                ## Milestones
                1. One sandbox account or project per engineer, with a spend limit.
                2. An expiry tag required on every sandbox resource.
                3. An automatic reminder to the owner before expiry.
                4. A weekly sweep that stops or removes expired resources.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every sandbox resource carries an expiry tag, and the weekly sweep has run for eight weeks in a row."
                cadence: rolling
              tasks:
                - "Give each engineer a sandbox account with a spend limit"
                - "Require an expiry tag on every resource created in a sandbox"
                - "Sweep sandboxes and stop or remove anything past its expiry @recurring(weekly:fri)"
                - "Send owners a reminder three days before their resources expire"
            - name: Cloud credential and key rotation schedule
              description: |-
                ## Purpose
                Long-lived access keys pasted into a CI system, a laptop and a contractor's script are the most common way cloud accounts are breached. Replacing them with short-lived role credentials where possible and rotating the few keys that must remain on a fixed quarterly schedule shrinks the damage any leaked key can do.

                ## Milestones
                1. Every long-lived access key and service account key listed with owner and age.
                2. CI pipelines and workloads moved to short-lived role or identity federation credentials.
                3. Remaining keys rotated, with the old ones deleted after a grace period.
                4. No active key older than 90 days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No long-lived cloud access key in any account is older than 90 days, confirmed at each quarterly rotation."
                cadence: rolling
              tasks:
                - "Export every long-lived access key with its owner and age"
                - "Move the CI pipeline to short-lived federated credentials"
                - "Rotate remaining keys and delete the old ones after a week @recurring(quarterly)"
                - "Ask the agent to draft a one-page key handling rule for the team"
            - name: Virtual networks, routing and NAT fundamentals
              description: |-
                ## Purpose
                Most provisioning mistakes that cause outages or exposures are networking ones: a route table pointing the wrong way, a database in a public subnet, a missing NAT gateway that breaks outbound updates. Building a small network by hand in a sandbox, then breaking and fixing it, teaches what each piece does better than any diagram.

                ## Milestones
                1. A sandbox network built with public and private subnets across two zones.
                2. A private instance reaching the internet only through a NAT gateway.
                3. Route tables, security groups and network access lists explained in your own notes.
                4. Three deliberate faults introduced and diagnosed with flow logs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sandbox network with public and private subnets is built by hand, and notes explain how three deliberately introduced faults were found."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a network with one public and one private subnet in a sandbox"
                - "Add a NAT gateway and prove a private instance can reach the internet"
                - "Break a route table on purpose and find the fault using flow logs"
                - "Write a one-page summary of how traffic flows in and out"
            - name: Identity and access policies in practice
              description: |-
                ## Purpose
                Writing least-privilege policies is a skill most engineers skip by attaching an administrator policy and moving on. Working through roles, policy evaluation, resource policies and permission boundaries on real tasks, such as giving one service read access to one bucket, makes tight permissions quick to write instead of something postponed forever.

                ## Milestones
                1. The provider's policy evaluation order explained in your notes with one worked example.
                2. A role for one service with access to exactly one bucket and one queue.
                3. The provider's access analyser or policy simulator used to confirm what a role can do.
                4. One existing broad policy in your estate narrowed and tested.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one production role is narrowed from a broad managed policy to a tested least-privilege policy."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the provider's guide to how policies are evaluated"
                - "Write a role that can read one bucket and nothing else"
                - "Check the role with the policy simulator or access analyser"
                - "Replace one broad policy in production with a narrow one"
            - name: Object storage classes, lifecycle and access
              description: |-
                ## Purpose
                Buckets look simple, which is why so many data leaks begin with one set to public and so many bills include years of logs in the most expensive storage class. Learning the storage classes, lifecycle rules, versioning, encryption options and signed URLs lets you set up buckets that are private by default and priced for how often the data is read.

                ## Milestones
                1. Storage classes compared in a table by price, retrieval time and minimum storage duration.
                2. Account-level public access blocking switched on.
                3. A lifecycle rule moving old objects to a cheaper class and expiring them later.
                4. Signed URLs used in a test to share one object for a limited time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Public access blocking is on in every account and at least one bucket has a tested lifecycle rule and versioning configured."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Turn on account-wide public access blocking for object storage"
                - "Make a table of storage classes with price and retrieval time"
                - "Add a lifecycle rule to the log bucket and check it applies"
                - "Share a test file using a signed URL that expires in an hour"
            - name: Load balancers and DNS routing practice
              description: |-
                ## Purpose
                Health checks, listener rules, connection draining and DNS time-to-live settings decide whether a deploy is invisible to users or drops every open request. Setting up an application load balancer in front of two instances, then practising weighted and failover DNS records, builds the understanding needed to change traffic paths calmly in production.

                ## Milestones
                1. A load balancer serving two instances with health checks that remove a failed one.
                2. Connection draining tested by stopping an instance during traffic.
                3. Weighted and failover DNS records created and observed in a sandbox.
                4. Notes on sensible time-to-live and health check settings for your services.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sandbox load balancer and DNS setup has been tested for instance failure and failover, with written notes on the settings chosen."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Put a load balancer in front of two sandbox instances"
                - "Stop one instance under light traffic and watch the health check react"
                - "Create a failover DNS record and test it by failing the primary"
                - "Write down the time-to-live and health check values you would use"
            - name: Managed database replicas and failover drills
              description: |-
                ## Purpose
                A managed database hides a lot, but someone on the team still needs to know what happens during a failover, how long connections drop, how read replicas lag and which parameter changes need a reboot. Practising these on a staging copy means the first real failover is a known event rather than a mystery.

                ## Milestones
                1. A staging database with a standby and a read replica.
                2. A forced failover performed and the client reconnection time measured.
                3. Replica lag observed under a write-heavy test.
                4. Parameter changes that need a restart listed for your engine.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A forced failover of the staging database has been performed and timed, with notes on reconnection behaviour and replica lag."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create a standby and a read replica for the staging database"
                - "Force a failover and time how long the application loses connections"
                - "Run a write-heavy test and watch replica lag"
                - "List the parameter changes that need a restart on your engine"
            - name: Estimating cost with the provider pricing calculator
              description: |-
                ## Purpose
                Founders are often asked what the infrastructure will cost next year, and engineers are asked whether a design is affordable before it is built. Learning to model compute hours, storage, requests and especially data transfer in the provider's pricing calculator, then comparing the estimate with a real month's bill, makes those answers fast and close to right.

                ## Milestones
                1. The current architecture modelled in the pricing calculator, line by line.
                2. Data transfer between zones, regions and the internet included explicitly.
                3. The estimate compared with an actual monthly bill and the gaps explained.
                4. A saved estimate for twice and ten times today's traffic.

                ## Notes
                Data transfer and per-request charges are where estimates usually go wrong. Ongoing cost reduction is a separate piece of work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved pricing estimate of the current stack is within 15 percent of an actual monthly bill, with growth scenarios attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model every running component in the provider's pricing calculator"
                - "Add data transfer between zones, regions and the internet"
                - "Compare the estimate with last month's bill and explain the gap"
                - "Save scenarios for twice and ten times today's traffic"
            - name: Shared responsibility map for your services
              description: |-
                ## Purpose
                Each managed service draws the line differently between what the provider secures and what you must, and assumptions here are how teams discover unpatched engines or unencrypted backups during an audit. Mapping each service you use against patching, encryption, backup, access and network exposure shows exactly which duties are yours.

                ## Milestones
                1. Every service in use listed.
                2. For each service, who handles patching, encryption, backups, access and network exposure.
                3. Gaps where nobody on the team owns a duty identified.
                4. Each gap given an owner or a ticket in the risk register.

                ## Notes
                Start from the **Risk register** template to record the gaps and owners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A responsibility map covers every service in use, and every duty left to the customer has a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cloud service the production stack uses"
                - "Mark who patches, encrypts, backs up and controls access for each"
                - "Highlight duties that nobody on the team currently owns"
                - "Add each unowned duty to the risk register with an owner"
            - name: Serverless functions and event triggers practice
              description: |-
                ## Purpose
                Functions triggered by uploads, queue messages or schedules are ideal for glue work like thumbnailing images or nightly exports, but timeouts, retries, concurrency limits and cold starts catch people out. Building two small event-driven functions in a sandbox shows where they fit and where a container or a scheduled job would serve better.

                ## Milestones
                1. A function triggered by an object upload, with logs showing each run.
                2. A scheduled function that runs nightly and reports success.
                3. Retry and dead-letter behaviour tested with a deliberate failure.
                4. Notes on timeouts, memory settings and concurrency limits that apply.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two sandbox functions, one event triggered and one scheduled, have run successfully and their failure handling has been tested."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a function that runs when a file lands in a sandbox bucket"
                - "Add a nightly scheduled function and check its logs"
                - "Make one function fail on purpose and watch the retries"
                - "Note the timeout, memory and concurrency limits you hit"
            - name: Moving databases off public endpoints
              description: |-
                ## Purpose
                A database with a public address, even behind a password, is scanned within minutes of creation, and leaked credentials then go straight to your data. Placing databases in private subnets, allowing connections only from application security groups and giving engineers access through a bastion or session manager removes one of the most common causes of cloud data breaches.

                ## Milestones
                1. Every database, cache and search cluster checked for public accessibility.
                2. Data stores moved into private subnets with no public address.
                3. Security groups allowing database traffic only from named application groups.
                4. Engineer access provided through a session manager or bastion with logging.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No database, cache or search cluster in any account has a public endpoint, and engineer access is logged."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every data store and whether it has a public endpoint"
                - "Restrict database security groups to the application groups only"
                - "Move each public data store into a private subnet during a planned window"
                - "Set up logged engineer access through a session manager or bastion"
            - name: Multi-zone upgrade for the production database
              description: |-
                ## Purpose
                Single-zone databases turn a routine zone failure or provider maintenance event into an outage, and they are often left that way because launch day was rushed. Enabling a standby in a second zone, testing the failover and confirming the application reconnects cleanly is usually a few hours of work for a large gain in resilience.

                ## Milestones
                1. The current database availability setup and its cost recorded.
                2. A standby enabled in a second zone during a planned window.
                3. A failover tested in staging and then production, with reconnection time measured.
                4. Application connection settings adjusted if reconnection was slow.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The production database runs with a standby in a second zone and a measured failover time recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether the production database has a standby in another zone"
                - "Price the multi-zone option and get sign-off from the budget holder"
                - "Enable the standby in a planned window and test a failover"
                - "Repeat a production failover test and record the result @recurring(quarterly)"
            - name: Content delivery network for static assets
              description: |-
                ## Purpose
                Serving images, scripts and downloads straight from the application or a bucket makes pages slow for distant users and puts load on servers that have better things to do. Putting a content delivery network in front, with sensible cache headers, origin access restricted to the CDN and TLS at the edge, is one of the cheapest speed and resilience gains available.

                ## Milestones
                1. Static assets separated from dynamic routes with clear cache headers.
                2. A CDN distribution in front of the asset bucket and the application.
                3. The bucket readable only by the CDN, not the public.
                4. Cache hit ratio and page load time compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Static assets are served through a CDN with the origin bucket closed to the public, and the cache hit ratio is above 80 percent."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the static assets and set long cache headers on versioned files"
                - "Create a CDN distribution with the bucket and app as origins"
                - "Lock the bucket so only the CDN can read it"
                - "Compare page load time from a distant location before and after"
            - name: Managed secrets store instead of env files
              description: |-
                ## Purpose
                Database passwords and API keys in plain environment files end up in container images, chat messages and old laptops. Moving them into the provider's secrets manager, granting each service access only to its own secrets and turning on automatic rotation for database credentials makes secrets auditable and replaceable in minutes.

                ## Milestones
                1. Every secret used by production services listed with where it lives today.
                2. Secrets stored in a managed secrets service, scoped per service.
                3. Applications reading secrets at start-up through their role, not from files.
                4. Automatic rotation enabled for the database credentials.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No production secret lives in a plain environment file or image, and database credentials rotate automatically."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every production secret and where it is stored today"
                - "Create the secrets in the managed store with one path per service"
                - "Change one service to read its secrets through its role"
                - "Turn on automatic rotation for the main database password"
            - name: Instance type selection from measured load
              description: |-
                ## Purpose
                Launch sizes are guesses, and after a month of real traffic the numbers usually show one service starved of memory and another idling at five percent CPU. Reviewing CPU, memory, network and disk figures per service and choosing an instance family that matches the bottleneck gives better performance at the same spend, and settles whether newer processor families suit your workload.

                ## Milestones
                1. Four weeks of CPU, memory, disk and network figures gathered per service.
                2. Each service's limiting resource identified.
                3. A matching instance family and size chosen, including newer processor options where compatible.
                4. The change rolled out to one service and its latency compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each production service has a recorded limiting resource and an instance type chosen to match, with one change verified on latency."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull four weeks of CPU, memory, disk and network figures for each service"
                - "Note which resource limits each service first"
                - "Test the service on a better matching instance family in staging"
                - "Roll out the change to one service and compare latency"
            - name: Managed or self-hosted cache and message queue
              description: |-
                ## Purpose
                Running your own cache or message broker on a virtual machine looks cheaper on the price list until patching, failover and upgrades land on whoever set it up. Comparing a managed service against self-hosting on monthly cost, operations hours, version flexibility and failure handling gives an honest answer for your team's size.

                ## Milestones
                1. The cache and queue needs described: throughput, durability and latency.
                2. Managed and self-hosted options priced, including engineer hours per month.
                3. Failure and upgrade handling compared for each option.
                4. A decision recorded and the chosen option provisioned in staging.

                ## Notes
                Start from the **Purchase decision** template. Count engineer time at a real hourly rate, or self-hosting always looks free.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares managed and self-hosted options on cost including engineer time, and the choice runs in staging."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down required throughput, durability and latency for the cache and queue"
                - "Price the managed service and the self-hosted option with engineer hours"
                - "Compare how each handles node failure and version upgrades"
                - "Record the choice and provision it in staging"
            - name: Well-architected self-review of the production stack
              description: |-
                ## Purpose
                Providers publish architecture frameworks with question sets on reliability, security, cost, performance and operations, and working through them once a year finds the gaps that daily work hides. Answering the questions honestly for your production stack and turning the high-risk answers into tickets produces a prioritised improvement list in a couple of days.

                ## Milestones
                1. The provider's framework questions answered for the production workload.
                2. High and medium risk answers listed with a short explanation each.
                3. The top five risks turned into tickets with owners.
                4. A date set for the next review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A completed framework review exists for the production stack, with the top five risks ticketed and owned."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Download the provider's architecture framework questions"
                - "Answer each question for the production workload with the team"
                - "Ask the agent to summarise high risk answers into a ranked list"
                - "Repeat the review and compare against last year's answers @recurring(yearly)"
            - name: Outbound traffic and egress controls
              description: |-
                ## Purpose
                Most teams lock down inbound traffic carefully and leave outbound wide open, which lets a compromised server send data anywhere and lets services pay internet transfer rates to reach the provider's own APIs. Adding private endpoints for storage and other managed services, and restricting outbound traffic to known destinations, closes an exfiltration path and often lowers transfer charges.

                ## Milestones
                1. Outbound destinations from production listed from flow logs.
                2. Private endpoints created for object storage and other heavily used provider services.
                3. Outbound rules narrowed to the destinations that are actually needed.
                4. Flow logs checked for blocked traffic for a week after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production outbound traffic is limited to listed destinations, and object storage is reached through a private endpoint."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Turn on flow logs and list outbound destinations from production"
                - "Add a private endpoint for object storage"
                - "Narrow outbound security rules to required destinations"
                - "Check a week of flow logs for traffic the new rules blocked"
            - name: Storage design for user uploads
              description: |-
                ## Purpose
                User uploads sent through the application server tie up workers, fill local disks and leave files on machines that will be replaced. Having browsers upload directly to object storage with short-lived signed URLs, scanning or validating files on arrival and serving them through signed or CDN links keeps the application stateless and the files safe.

                ## Milestones
                1. A private bucket for uploads with versioning and encryption.
                2. Direct browser uploads using signed URLs that expire in minutes.
                3. File type, size and malware checks on arrival.
                4. A retention rule for deleted or abandoned uploads.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "User uploads go directly to a private bucket through expiring signed URLs, with checks on arrival and a retention rule."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a private, versioned bucket for user uploads"
                - "Generate short-lived signed upload URLs from the backend"
                - "Add size, type and malware checks when a file arrives"
                - "Set a lifecycle rule for abandoned uploads"
            - name: Production launch infrastructure readiness check
              description: |-
                ## Purpose
                Launch week is the worst time to find a missing quota increase, a single-zone database or an expiring certificate. Walking a written checklist two weeks before launch, covering capacity, backups, alerts, access, DNS and rollback, gives time to fix what fails and a calm go or no-go call on the day.

                ## Milestones
                1. A readiness checklist covering capacity, quotas, backups, DNS, certificates, access and rollback.
                2. Every item checked and signed off by a named person two weeks before launch.
                3. Failed items fixed or accepted as known risks in writing.
                4. A go or no-go decision recorded on launch day.

                ## Notes
                Start from the **Operational checklist** template. Request quota increases before the review, since some take days.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed-off readiness checklist and a recorded go or no-go decision exist for the launch date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the launch readiness checklist with the team"
                - "Request quota increases for expected launch traffic"
                - "Walk every checklist item two weeks before launch and assign fixes"
                - "Hold the go or no-go call and record the decision"
            - name: Database major version upgrade window
              description: |-
                ## Purpose
                Managed database providers retire old major versions on a published timetable, and an upgrade forced on their schedule can land in your busiest week. Planning the upgrade yourself, testing it on a restored copy, checking extensions and query plans, and booking a low-traffic window turns a forced change into a dull evening.

                ## Milestones
                1. The provider's end-of-support date for your current version noted.
                2. The upgrade rehearsed on a restored copy, with downtime measured.
                3. Extensions, drivers and slow queries checked on the new version.
                4. Production upgraded in a booked window with a tested rollback path.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The production database runs the target major version, upgraded in a planned window after a timed rehearsal."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Look up the end-of-support date for your current database version"
                - "Rehearse the upgrade on a restored copy and time the downtime"
                - "Check extensions, drivers and the slowest queries on the new version"
                - "Book a low-traffic window and tell customers if downtime is expected"
            - name: Startup cloud credits application
              description: |-
                ## Purpose
                Major providers and many accelerators offer startup credit programmes worth anything from a few thousand to six figures, but they have eligibility rules, expiry dates and sometimes require an investor or accelerator referral. Applying early and tracking the expiry means a founder runs the first year on credits instead of cash, without a nasty cliff when they end.

                ## Milestones
                1. Credit programmes you qualify for listed with eligibility and expiry rules.
                2. An application submitted, with any referral from an investor or accelerator.
                3. Credits applied to the right billing account and their expiry date in the calendar.
                4. A plan for monthly spend once credits run out.

                ## Notes
                Credits often exclude some services and marketplace purchases. Read the terms before choosing services on the strength of them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A credit application has been submitted, and any awarded credits are applied with their expiry date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List startup credit programmes from your provider and any accelerator"
                - "Ask an investor or accelerator for a referral code if one is needed"
                - "Submit the application with company details and a short usage plan"
                - "Put the credit expiry date and a spend review in the calendar"
            - name: Cloud support plan and contract renewal
              description: |-
                ## Purpose
                Support plans, committed spend agreements and marketplace subscriptions renew automatically, and the right support tier changes as the product grows. Reviewing tickets raised, response times received and spend commitments a month before each renewal keeps you on a plan that fits instead of one chosen in a panic during an incident.

                ## Milestones
                1. Current support tier, committed spend and renewal dates recorded.
                2. Support tickets from the past year reviewed for response time and usefulness.
                3. A decision on tier and commitments made a month before renewal.
                4. The account manager or sales contact briefed on the outcome.

                ## Notes
                Start from the **Vendor** template to keep contract dates, contacts and terms together.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A renewal decision on support tier and commitments is recorded at least 30 days before the contract renews."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Record the support tier, commitments and renewal dates in a vendor record"
                - "Review the past year's support tickets and response times"
                - "Decide the support tier a month before renewal @recurring(yearly)"
                - "Tell the account manager what you decided"
            - name: Founder's first production stack on a small budget
              description: |-
                ## Purpose
                Without an infrastructure engineer, a founder needs something that will survive the first thousand customers, costs under a few hundred a month and can be handed over later without a rewrite. Choosing managed services everywhere, one region, a multi-zone database, a CDN and automated backups gives that, as long as it is written down as you go.

                ## Milestones
                1. A one-page target stack chosen from managed services only.
                2. The stack provisioned in a production account with budget alerts.
                3. Backups, multi-factor authentication and a status page in place.
                4. A plain-language README explaining what each component does and costs.

                ## Notes
                Resist anything you would need to patch yourself. Managed services cost a little more and save the hours you do not have.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A production stack built from managed services runs under the agreed monthly budget, with a README covering every component."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sketch a target stack using only managed services"
                - "Set a monthly budget ceiling you can afford for the first year"
                - "Provision the stack in the production account with backups on"
                - "Write a README that explains each component and its monthly cost"
            - name: Handing infrastructure to a first hire or contractor
              description: |-
                ## Purpose
                When a founder or solo engineer hands the cloud estate to someone new, the risk is that passwords, quirks and one-off fixes live only in one head. Preparing a handover pack with the account map, access set up through roles, a list of everything running and the known oddities lets the new person work safely from week one.

                ## Milestones
                1. An account and resource map with what each part does.
                2. The new person's access granted through roles, never shared logins.
                3. Known oddities, manual steps and past incidents written down.
                4. A walkthrough session held and the questions it raised answered in the pack.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover pack exists and the new person can deploy and restore a backup unaided within their first two weeks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every account, service and manual step you rely on"
                - "Grant the new person access through their own role"
                - "Write down the oddities and past incidents only you remember"
                - "Run a walkthrough and add the answers to their questions to the pack"
            - name: Taking over an undocumented cloud account
              description: |-
                ## Purpose
                Engineers often inherit an account built by someone who has left: unknown regions in use, access keys with no owner, and a bill nobody can explain. Spending the first fortnight mapping what exists, securing the risky parts and writing down what you learn prevents the classic mistake of deleting something that turns out to be load-bearing.

                ## Milestones
                1. Every region scanned and every running resource listed.
                2. Root and admin access secured and unknown keys disabled, not deleted.
                3. Each resource traced to a service or marked as unknown.
                4. A written map of the estate and a list of open questions.

                ## Notes
                Disable and wait before deleting. Stopping an unknown resource for a week tells you whether anything depended on it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of the inherited account lists every resource with an owner or an unknown flag, and no unknown key remains active."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Scan every region for running resources, including unused ones"
                - "Disable access keys with no known owner"
                - "Trace each resource to a service using tags, names and logs"
                - "Write the estate map and a list of open questions"
            - name: Hosting answers for customer security questionnaires
              description: |-
                ## Purpose
                Founders selling to larger companies quickly meet security questionnaires asking where data lives, how it is encrypted, who has access and how backups are tested. Preparing a reusable set of accurate answers about your hosting, with evidence such as access review records and restore logs, cuts each questionnaire from days to hours.

                ## Milestones
                1. The twenty most common hosting questions collected from past questionnaires.
                2. An accurate answer for each, with the evidence that backs it.
                3. The provider's compliance reports downloaded for sharing where allowed.
                4. Answers reviewed every six months against the real setup.

                ## Notes
                Never claim a control you do not run. A gap with a dated plan is better received than an answer that fails the next audit.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A hosting answer library of at least twenty questions, each with linked evidence, is used for the next customer questionnaire."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect hosting questions from the last two customer questionnaires"
                - "Write an accurate answer for each with a link to its evidence"
                - "Download the provider's compliance reports you are allowed to share"
                - "Ask the agent to draft answers for a new questionnaire from the library"
            - name: Moving from a hosting platform to your own cloud account
              description: |-
                ## Purpose
                Platform-as-a-service hosts are perfect until the bill, a missing feature or a customer's data location demand says it is time for your own cloud account. Planning the move service by service, with the database migrated last and a rollback ready, keeps the product online while you gain the control you outgrew the platform for.

                ## Milestones
                1. The reason for moving written down, with the cost and features compared.
                2. Equivalent services provisioned in the new account and tested with staging traffic.
                3. The database migrated with replication or a short planned downtime.
                4. DNS switched and the old platform kept on standby for two weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All production traffic runs from your own cloud account, and the old platform has been decommissioned after a two-week standby."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down why you are moving and compare the monthly cost"
                - "Map each platform feature to a service in the new account"
                - "Rehearse the database migration on a copy and time it"
                - "Lower DNS time-to-live a week before the switch"
            - name: Multi-region active-passive design
              description: |-
                ## Purpose
                When a full region outage would breach customer contracts or recovery targets, a single region is no longer enough, but running two active regions is costly and complicated. An active-passive design with replicated data, a scaled-down standby stack and a rehearsed DNS failover meets most recovery targets at a fraction of the cost of active-active.

                ## Milestones
                1. The recovery targets that justify a second region written down and agreed.
                2. Database and object storage replicated to the secondary region.
                3. A minimal standby stack that can be scaled up in the secondary region.
                4. A full region failover rehearsed, with time to recover measured.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rehearsed failover to the secondary region meets the agreed recovery time and recovery point targets."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Confirm the recovery targets that require a second region"
                - "Set up cross-region replication for the database and object storage"
                - "Build a scaled-down standby stack in the secondary region"
                - "Rehearse a full region failover and time it @recurring(yearly)"
            - name: Hybrid connectivity to an on-premises network
              description: |-
                ## Purpose
                Factories, hospitals and older businesses often keep systems on site that cloud workloads must reach, and an ad hoc VPN on someone's firewall becomes a hidden single point of failure. Designing redundant site-to-site tunnels or a dedicated link, with routing, DNS and bandwidth planned, makes the connection something the team can monitor and trust.

                ## Milestones
                1. Traffic needs between cloud and site measured: bandwidth, latency and protocols.
                2. A choice between redundant VPN tunnels and a dedicated link recorded.
                3. Routing and DNS resolution working in both directions without overlapping ranges.
                4. Tunnel health monitored, with a tested failover between tunnels.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Redundant connectivity between cloud and site is in place, and failing one tunnel or link has been shown not to interrupt traffic."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Measure the bandwidth and latency the on-site systems need"
                - "Choose between redundant VPN tunnels and a dedicated link"
                - "Set up routing and DNS so both sides resolve each other"
                - "Review tunnel status and bandwidth use @recurring(monthly:27)"
            - name: Data residency and region requirements mapping
              description: |-
                ## Purpose
                Customers in regulated industries or certain countries increasingly require data to stay in a named jurisdiction, including backups, logs and support access. Mapping which data goes where, including copies made by replication, analytics and third-party tools, shows whether you can make the promise and what must change before you sign.

                ## Milestones
                1. Each data category listed with the regions where it is stored, processed and backed up.
                2. Hidden copies in logs, analytics, support tools and replicas identified.
                3. Gaps against each customer or legal requirement listed.
                4. Required changes reviewed with legal counsel before any contractual promise.

                ## Notes
                This is a map of facts, not a legal opinion. Ask your lawyer what a requirement actually obliges you to do.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A data location map covers every data category, including backups and third-party copies, and has been reviewed with legal counsel."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List each data category and the regions holding it, including backups"
                - "Check logs, analytics and support tools for copies in other regions"
                - "Compare the map with each customer data location requirement"
                - "Recheck the map against current services and contracts @recurring(yearly)"
            - name: Landing zone with organisation guardrail policies
              description: |-
                ## Purpose
                Once several teams create accounts, consistency through good intentions stops working. A landing zone gives every new account a baseline automatically: central audit logging, approved regions only, encryption required, no public buckets, and guardrail policies at the organisation level that even account administrators cannot switch off.

                ## Milestones
                1. Baseline controls agreed: audit logging, allowed regions, encryption and public access rules.
                2. Organisation-level guardrail policies applied and tested in a sandbox unit.
                3. Central audit logs collected in a locked log archive account.
                4. New accounts created from a vending process that applies the baseline.

                ## Notes
                Test every guardrail on a sandbox unit first. A deny policy applied to production by mistake can stop deployments instantly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account sits under organisation guardrails, sends audit logs to a locked archive, and new accounts receive the baseline automatically."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the baseline controls every account should have"
                - "Apply region and public access guardrails to a sandbox unit and test them"
                - "Send audit logs from every account to a locked archive account"
                - "Create the next new account through the vending process and check it"
            - name: Cloud exit and portability assessment
              description: |-
                ## Purpose
                Investors, enterprise customers and some regulators ask what would happen if you had to leave your provider, and the honest answer is usually unknown. Listing each proprietary service you depend on, its nearest alternative, the data export path and a rough effort estimate gives a credible exit plan without abandoning the managed services that make you fast.

                ## Milestones
                1. Every provider-specific service listed with its lock-in level.
                2. An alternative and a data export method noted for each.
                3. A rough effort and time estimate for a full exit.
                4. The plan recorded as a risk with an owner and a review date.

                ## Notes
                Start from the **Risk register** template. The aim is a credible plan, not avoiding every managed service.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An exit assessment lists every provider-specific dependency with an alternative, an export method and an effort estimate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each provider-specific service and how deeply you rely on it"
                - "Note an alternative and a data export method for each"
                - "Estimate the weeks a full exit would take"
                - "Record the plan in the risk register with an owner"
---

# Cloud Infrastructure Provisioning

Provisioning is where a workload stops being an idea and becomes a set of accounts, networks, machines, buckets and databases that someone has to keep running. These projects start with the foundations (a requirements sheet, the provider choice, account structure, root lockdown, budget alerts, regions, naming and an address plan), move through the monthly and quarterly routines that keep the estate healthy, then the networking, identity, storage and database skills behind good choices, the improvements and decisions worth making next, dated events such as launches and upgrades, situations for founders and engineers who inherit an account, and specialist work like multi-region failover, hybrid links and landing zones.

What repeats is a Wednesday scan of provider notices, a Friday sandbox expiry sweep, monthly checks on spend against budget, inventory, image patching, restore tests, certificates and quotas, quarterly access reviews and key rotation, and yearly break-glass, failover and contract reviews. The Purchase decision, Vendor, Risk register and Operational checklist templates pair with the projects that need a written record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
