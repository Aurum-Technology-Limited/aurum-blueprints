---
id: data-analytics.data-contracts-schemas
name: Data Contracts & Schemas
description: "Written contracts between the teams that produce data and the teams that use it, with compatibility rules, CI checks, versioning and deprecation, so upstream schema changes stop breaking reports."
category: business
version: 1.0.0
tags: [data-analytics, data-contracts-schemas, engineer, enterprise, schema-evolution, schema-registry, breaking-changes, producer-consumer]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - purchase-decision
    - remediation-plan
    - operational-checklist
    - vendor
    - compliance-control
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Contracts & Schemas
          description: "Agreeing formal contracts between data producers and consumers about schemas and guarantees, so upstream changes stop breaking reports."
          projects:
            - name: Upstream producer and consumer inventory
              description: |-
                ## Purpose
                Most broken reports trace back to a handful of upstream sources: an application database replicated raw, a product event stream, a finance export. Mapping which systems produce the data, which tables and reports consume it and who owns each end gives you the list of relationships a contract would actually protect. In a mid-sized company expect fifteen to forty producer and consumer pairs, not hundreds.

                ## Milestones
                1. A list of every upstream system feeding the warehouse, with its owning team and how the data arrives.
                2. The main consumers of each source recorded: models, dashboards, exports and machine learning features.
                3. A named engineering owner on the producing side for each source, or a gap marked where none exists.
                4. Each producer and consumer pair rated by business impact if it broke tomorrow.

                ## Notes
                Start from the sources, not the dashboards. A report has many inputs, but a contract sits on one boundary between two teams.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory of producer and consumer pairs, each with an owner on both sides and an impact rating, is stored in the contract repository."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every source system that lands data in the warehouse today"
                - "Record how each one arrives: replica, event stream, API pull or file"
                - "Name the producing team and one engineer contact for each source"
                - "Rate each producer and consumer pair high, medium or low by impact"
            - name: Twelve-month history of upstream breaking changes
              description: |-
                ## Purpose
                Twelve months of incidents caused by upstream changes is the strongest argument for contracts and the best guide to what they must cover. Counting how often a dropped column, a changed enum, a type change or a silent unit switch broke something, and how many hours each cost, turns frustration into evidence a producing team will listen to.

                ## Milestones
                1. Every known incident in the last year caused by an upstream schema or meaning change listed.
                2. Each incident tagged by change type: removed field, renamed field, type change, new enum value, semantic change.
                3. Detection delay and hours lost estimated for each incident.
                4. A one-page summary of the top three change types and the sources that caused them.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary covering at least the last twelve months of upstream-caused breakages, grouped by change type with hours lost, is shared with the data team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search incident notes and chat channels for upstream schema breakages"
                - "Tag each incident with the type of change that caused it"
                - "Estimate how long each break went unnoticed and the hours it cost"
                - "Ask the agent to draft a one-page summary from the tagged incident list"
            - name: Choosing the pilot contract pair
              description: |-
                ## Purpose
                Starting with one producer and one consumer who both want the problem solved is how contract programmes survive their first quarter. Pick a source that has broken things before, a producing team with a sympathetic tech lead and a consumer whose report matters, and leave the hardest politics for later.

                ## Milestones
                1. Three candidate pairs shortlisted from the inventory and the breakage history.
                2. Each candidate scored on past breakage, business impact and producer willingness.
                3. The producing tech lead for the chosen pair agreed to take part.
                4. A pilot scope written: which dataset, which fields and which guarantees.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One pilot producer and consumer pair is chosen and recorded, with the producing tech lead's agreement and a written scope."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist three producer and consumer pairs from the inventory"
                - "Score each on past breakage, impact and producer willingness"
                - "Book thirty minutes with the producing tech lead of the top pair"
                - "Write the pilot scope as one paragraph in the contract repository"
            - name: Contract specification format decision
              description: |-
                ## Purpose
                Several open formats now exist for writing data contracts, including the Open Data Contract Standard and the Data Contract Specification, and many teams also lean on JSON Schema, Avro or Protobuf for the structural part. Choosing one format, with a clear split between the machine-checkable schema and the human sections on meaning and guarantees, avoids every team inventing its own YAML.

                ## Milestones
                1. Two or three candidate formats compared on tooling, readability and fit with the existing schema languages in use.
                2. The pilot contract drafted in the top two formats to compare them honestly.
                3. A format chosen and the reasons written down in a short decision record.
                4. The tools that will parse and validate the format identified.

                ## Notes
                Whatever you choose, keep the structural schema in the language your producers already use. A contract that duplicates an Avro schema by hand will drift from it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record names the contract format, the schema language for structure and the validation tooling, with the reasons for each choice."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the current versions of two open data contract formats"
                - "Draft the pilot contract in both formats side by side"
                - "Check which validators and CI plugins exist for each format"
                - "Write a decision record with the chosen format and why"
            - name: Data contract template with required sections
              description: |-
                ## Purpose
                A contract that covers only column names and types leaves out what breaks reports most often: meaning, units, nullability, freshness and who to call. A template with required sections means every new contract answers the same questions, and reviewers can spot a missing guarantee in seconds.

                ## Milestones
                1. A template with sections for ownership, schema, field semantics, guarantees, versioning, support and change process.
                2. Each section marked required or optional with one example entry.
                3. The pilot contract written from the template without gaps.
                4. The template stored in the contract repository with a short how-to.

                ## Notes
                Start from the **Product spec** template and treat the dataset as a product with users. Guarantees should be specific: "loaded by 06:00 UTC on business days", not "timely".
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contract template with required sections and examples exists in the repository and the pilot contract has been written from it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the sections every contract must answer, from owner to support route"
                - "Write one example entry for each section using the pilot dataset"
                - "Mark each section required or optional"
                - "Publish the template in the contract repository with a short how-to"
            - name: Schema naming and type conventions guide
              description: |-
                ## Purpose
                Inconsistent names and types multiply the cost of every contract: one source sends created_at as a string, another as epoch milliseconds, a third as a local time with no zone. A short conventions guide on field naming, timestamps, money, identifiers and booleans gives producers a default to follow and reviewers something to point at.

                ## Milestones
                1. Rules written for field naming case, plurals, abbreviations and prefixes.
                2. Standard types agreed for timestamps with time zone, money as decimal with currency, and identifiers.
                3. Rules for nullability and default values stated with examples.
                4. The guide linked from the contract template and the producer CI checks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conventions guide covering names, timestamps, money, identifiers and nulls is published and linked from the contract template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect ten real field names from different sources that disagree"
                - "Write the naming rule that would have made them consistent"
                - "Agree the standard timestamp, money and identifier types"
                - "Link the guide from the contract template"
            - name: Producer and consumer roles and sign-off rules
              description: |-
                ## Purpose
                Contracts fail when nobody on the producing side feels they signed anything. Writing down who owns a contract, who must approve a change, who can register as a consumer and what notice a consumer is owed turns a document into an agreement between named people.

                ## Milestones
                1. Roles defined: contract owner, producing approver, registered consumer and platform steward.
                2. Sign-off rules stated for new contracts, compatible changes and breaking changes.
                3. Minimum notice periods for breaking changes agreed by data tier.
                4. The rules accepted by the pilot producing team and the data team lead.

                ## Notes
                Keep ownership with the producing team. If the data team owns every contract, producers will treat them as someone else's paperwork.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A roles and sign-off document with notice periods by tier is agreed in writing by the pilot producer and the data team lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the four roles and what each is responsible for"
                - "Write who signs off new, compatible and breaking changes"
                - "Propose notice periods for breaking changes by data tier"
                - "Get written agreement from the pilot producer and the data lead"
            - name: Compatibility policy by data tier
              description: |-
                ## Purpose
                Not every table needs the same protection: a revenue feed used in board reporting deserves full compatibility and a long deprecation window, while an exploratory event can change with a week's notice. A policy that sets the compatibility mode and notice period per tier lets producers move fast where it is safe and slow where it is not.

                ## Milestones
                1. Three or four data tiers defined with examples from the inventory.
                2. A compatibility mode set for each tier: backward, forward, full or none, and whether it is transitive.
                3. A list of changes that always count as breaking, with examples.
                4. Every contracted dataset assigned a tier.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written policy sets a compatibility mode and notice period for each tier, and every contracted dataset carries a tier label."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define three or four data tiers with one example dataset each"
                - "Choose the compatibility mode and notice period for each tier"
                - "List the changes that are always breaking, such as removal or type narrowing"
                - "Revisit tiers and modes against the past year's changes @recurring(yearly)"
            - name: Contract repository in version control
              description: |-
                ## Purpose
                Contracts kept in a wiki drift from reality within months because nothing checks them. Putting them in a version-controlled repository, next to or inside the producer's code, gives every change a pull request, a reviewer, a history and a hook for automated checks.

                ## Milestones
                1. A repository or folder layout agreed: one contract file per dataset, grouped by domain.
                2. Branch protection requiring review from the contract owner and a data reviewer.
                3. The pilot contract committed with its first version tag.
                4. A README explaining how to propose a new contract or a change.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Contracts live in a protected repository with required reviewers, and the pilot contract is committed with a version tag."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether contracts live with producer code or in a central repository"
                - "Create the folder layout with one file per dataset"
                - "Turn on branch protection with the owner and a data reviewer required"
                - "Commit the pilot contract and tag version 1.0.0"
            - name: Contract version numbering rules
              description: |-
                ## Purpose
                Consumers need to know at a glance whether a new contract version is safe to ignore or demands work. Semantic versioning applied to contracts, with a major bump for breaking changes, minor for added optional fields and patch for documentation, makes that signal automatic and lets tooling enforce it.

                ## Milestones
                1. Rules written for which changes bump major, minor and patch.
                2. Edge cases decided: new enum values, tightened nullability, renamed descriptions.
                3. A rule for how long the previous major version stays available.
                4. The rules added to the contract repository README and the CI checks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Versioning rules covering major, minor and patch changes and their edge cases are published, and CI rejects a breaking change without a major bump."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write which change types trigger a major, minor or patch bump"
                - "Decide how a new enum value is versioned and why"
                - "Set how long a previous major version stays published"
                - "Add a CI rule that blocks breaking changes without a major bump"
            - name: Contract checks in the producer CI pipeline
              description: |-
                ## Purpose
                The cheapest place to catch a breaking change is in the producing team's pull request, before it merges. A CI step that compares the proposed schema with the published contract and fails on an incompatible change moves the conversation to the person making the change, while it is still a one-line fix.

                ## Milestones
                1. A CI job in the pilot producer's repository that validates the schema against the contract.
                2. Incompatible changes fail the build with a message naming the field and the rule.
                3. An override path that needs approval from the contract owner and is logged.
                4. Overrides reviewed weekly and fed back into the policy.

                ## Notes
                Make the failure message useful: name the field, the rule broken and the link to the change process. A cryptic failure gets disabled within a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pilot producer's CI blocks incompatible schema changes, and every override in the last month has a logged approval."
                cadence: rolling
              tasks:
                - "Add a schema compatibility check to the pilot producer's CI pipeline"
                - "Write failure messages that name the field, the rule and the next step"
                - "Set up an approved override path that writes to a log"
                - "Review last week's CI overrides with the contract owners @recurring(weekly:tue)"
            - name: Schema registry compatibility enforcement
              description: |-
                ## Purpose
                Event streams change faster than warehouse tables, and a producer can publish an incompatible message long before anyone downstream notices. A schema registry with the right compatibility mode on each subject rejects bad schemas at publish time, but only if the modes are set deliberately and checked against the tier policy.

                ## Milestones
                1. Every production subject in the registry mapped to a contract and a data tier.
                2. Compatibility modes set to match the tier policy, including transitive modes where needed.
                3. Producers prevented from changing a subject's mode without platform approval.
                4. A monthly audit comparing registry settings with the policy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All production registry subjects carry a compatibility mode that matches their tier, confirmed by the latest monthly audit."
                cadence: rolling
              tasks:
                - "Export the list of production subjects and their compatibility modes"
                - "Map each subject to its contract and data tier"
                - "Restrict who can change a subject's compatibility mode"
                - "Audit registry modes against the tier policy @recurring(monthly:9)"
            - name: Weekly contract change review
              description: |-
                ## Purpose
                Change requests that sit in pull requests for weeks teach producers to route around the process. A short weekly review where proposed breaking changes, new contracts and new consumer registrations are decided keeps the process faster than the workaround and gives every change a recorded outcome.

                ## Milestones
                1. A fixed thirty-minute slot with the platform steward and rotating producer representatives.
                2. A standing agenda: breaking changes, new contracts, consumer registrations, overdue deprecations.
                3. Every decision recorded against the pull request it concerns.
                4. Median time from proposal to decision under one week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly review has met for eight consecutive weeks, with every decision linked to a pull request and median decision time under seven days."
                cadence: rolling
              tasks:
                - "Book a weekly thirty-minute contract review slot"
                - "Write the standing agenda into the repository README"
                - "Run the contract change review and record each decision @recurring(weekly:wed)"
                - "Post a summary of approved breaking changes in the data announcements channel"
            - name: Monthly contract violation review
              description: |-
                ## Purpose
                Violations pile up quietly: a producer sends nulls in a field promised as required, an enum gains an undeclared value, a load misses its promised hour. Reviewing them monthly by contract and by cause shows which producers need help, which contracts promise too much and which need a fix in code.

                ## Milestones
                1. A monthly list of violations by contract, with type, count and duration.
                2. Each repeated violation assigned an owner and a fix or a contract amendment.
                3. Producers sent their own violation summary.
                4. Repeated violations falling quarter on quarter.

                ## Notes
                Start from the **Remediation plan** template for any contract with three or more violations in a month. Sometimes the right fix is to loosen the promise, not to chase the producer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly violation reviews held, each repeated violation with an owner and a dated fix or contract amendment."
                cadence: rolling
              tasks:
                - "Pull last month's contract violations grouped by contract and type @recurring(monthly:14)"
                - "Assign an owner to each violation that happened more than once"
                - "Send each producing team its own violation summary"
                - "Decide for each repeat whether to fix the code or amend the contract"
            - name: Deprecation register and sunset tracking
              description: |-
                ## Purpose
                Deprecations that are announced and never finished leave old fields and versions alive for years, doubling the surface every producer must support. A register of everything deprecated, its sunset date and the consumers still using it makes each sunset a tracked commitment instead of a hope.

                ## Milestones
                1. A register listing each deprecated field, table or version with its sunset date.
                2. Remaining consumers listed against each entry, with an owner for their migration.
                3. Reminders sent to remaining consumers at fixed intervals before sunset.
                4. Completed sunsets marked with the date the old version was removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deprecation has a sunset date and a list of remaining consumers, and no sunset in the last six months slipped without a recorded reason."
                cadence: rolling
              tasks:
                - "Create the deprecation register with sunset dates and remaining consumers"
                - "Check usage logs for anyone still reading deprecated fields"
                - "Update the register and chase consumers due within sixty days @recurring(monthly:3)"
                - "Record the removal date when each sunset completes"
            - name: Kept and broken contract guarantees report
              description: |-
                ## Purpose
                Every contract promises something beyond its schema: a delivery hour, a completeness level, a maximum duplicate rate. Reporting each month how often each promise was kept, measured from the checks the contract itself declares, shows producers their track record in the terms they agreed and shows consumers which guarantees they can lean on.

                ## Milestones
                1. Each guarantee in each contract linked to the automated check that measures it.
                2. A monthly report of promises kept as a percentage, per contract.
                3. Contracts below their agreed level discussed with the producer.
                4. Guarantees that are never met renegotiated rather than ignored.

                ## Notes
                Measure only what the contract promises. General data quality monitoring belongs to its own area; this report is about whether agreements are honoured.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly report shows the percentage of guarantees kept for every contract, and any contract below target has a recorded follow-up."
                cadence: rolling
              tasks:
                - "Link each contract guarantee to the check that measures it"
                - "Build a monthly view of guarantees kept per contract"
                - "Publish the guarantees report to producers and consumers @recurring(monthly:20)"
                - "Open a renegotiation for any guarantee missed three months running"
            - name: Quarterly consumer re-registration
              description: |-
                ## Purpose
                Consumer lists go stale: a dashboard is retired, a team switches to a newer table, an export stops running. Asking each registered consumer once a quarter to confirm they still depend on a contract keeps the notice list accurate and tells producers which old versions can finally go.

                ## Milestones
                1. A list of registered consumers per contract with a contact for each.
                2. A quarterly confirmation request sent with a two-week reply window.
                3. Unconfirmed consumers checked against query logs before removal.
                4. Contracts with no remaining consumers flagged for retirement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The last quarterly re-registration reached every registered consumer, and stale entries were removed or confirmed against query logs."
                cadence: cyclic
              tasks:
                - "Export registered consumers and contacts for every contract"
                - "Send the consumer confirmation request with a two-week deadline @recurring(quarterly)"
                - "Check query logs for consumers who did not reply"
                - "Flag contracts with no confirmed consumers for retirement"
            - name: Declared versus actual schema drift scan
              description: |-
                ## Purpose
                Declared schemas and the data that actually lands can part ways without any pull request: a database migration run by hand, a vendor adding a column, a JSON field that starts arriving as a string. A weekly scan comparing contracts with what is really in the tables and topics catches drift that CI never saw.

                ## Milestones
                1. A scan that compares each contract's declared fields and types with the live table or topic.
                2. Differences reported as undeclared field, missing field or type mismatch.
                3. Each finding routed to the contract owner with a suggested action.
                4. Open drift findings reviewed until none are older than a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly drift scan runs across all contracted datasets and no drift finding is older than thirty days."
                cadence: rolling
              tasks:
                - "List where each contracted dataset lives: table, topic or file path"
                - "Write a scan that compares declared and live fields and types"
                - "Review new drift findings and route them to owners @recurring(weekly:fri)"
                - "Close or escalate any drift finding older than thirty days"
            - name: New field request intake from consumers
              description: |-
                ## Purpose
                Analysts and data scientists often need a field the producer already has but does not publish, and without a route they scrape it from a raw replica instead. A simple intake where consumers request additions to a contract, with a business reason and a sponsor, turns those workarounds into planned changes.

                ## Milestones
                1. A request form or issue template asking for the field, meaning, reason and sponsor.
                2. A weekly triage that routes each request to the producing team.
                3. Every request answered within two weeks with yes, no or later.
                4. Approved additions shipped as minor versions of the contract.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Field requests arrive through one intake, and every request in the last quarter was answered within fourteen days."
                cadence: rolling
              tasks:
                - "Create an issue template for new field requests"
                - "Triage new field requests and route them to producers @recurring(weekly:mon)"
                - "Reply to each requester with a decision within two weeks"
                - "Ship approved additions as a minor contract version"
            - name: Annual contract portfolio review
              description: |-
                ## Purpose
                Once a year the whole set of contracts deserves a step back: which ones protect something valuable, which promise more than anyone needs, which lost their owner in a reorganisation. A yearly review with producing leads keeps the portfolio small enough to maintain and honest about what it covers.

                ## Milestones
                1. Every contract listed with its tier, owner, consumers and violation record.
                2. Contracts without an active owner reassigned or retired.
                3. Guarantees adjusted where they are never tested or never needed.
                4. A short annual note to engineering leadership on coverage and gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review covered every contract, with ownerless contracts resolved and a written note sent to engineering leadership."
                cadence: cyclic
              tasks:
                - "Book the annual contract portfolio review with producing leads @recurring(yearly)"
                - "Prepare a table of each contract's tier, owner, consumers and violations"
                - "Reassign or retire every contract without an active owner"
                - "Write a one-page note on coverage and gaps for leadership"
            - name: Avro and Protobuf schema evolution rules
              description: |-
                ## Purpose
                Avro and Protobuf each have their own rules for safe change: Avro resolves fields by name and needs defaults for added fields, while Protobuf resolves by field number and must never reuse a retired number. Learning these rules with small experiments stops you approving a change that looks harmless in review and corrupts reads downstream.

                ## Milestones
                1. Notes on which field changes are safe in Avro and in Protobuf, with reasons.
                2. A small test project that serialises with one schema version and reads with another.
                3. Experiments run for adding, removing and renaming fields and changing types.
                4. A checklist of format-specific review questions added to the contract README.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test project demonstrates at least six evolution cases in each format, and a review checklist based on them is in the repository."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the official schema resolution rules for Avro"
                - "Read the Protobuf guidance on updating message types and reserved fields"
                - "Build a test that writes with one schema version and reads with another"
                - "Turn the findings into review questions for each format"
            - name: JSON Schema for event and API payloads
              description: |-
                ## Purpose
                JSON payloads from product events and partner APIs are where untyped data most often enters the warehouse. Learning JSON Schema well enough to express required fields, formats, enums, nested objects and the difference between open and closed objects lets you write contracts for those sources that tools can actually check.

                ## Milestones
                1. A working knowledge of types, required, enum, format and additionalProperties.
                2. Schemas written for three real event or API payloads from your sources.
                3. Each schema tested against a sample of real payloads, with failures explained.
                4. A note on how open versus closed objects affect compatibility.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real payload schemas pass validation against sampled production payloads, with a written note on open and closed objects."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work through the core JSON Schema keywords with small examples"
                - "Pull a sample of a hundred real payloads from one event source"
                - "Write a schema for it and validate the sample"
                - "Write up why closing an object changes compatibility"
            - name: Compatibility modes worked through by example
              description: |-
                ## Purpose
                Compatibility modes sound simple until you have to decide whether a change is backward but not forward compatible, or why transitive matters when consumers lag three versions behind. Working through a dozen concrete changes and classifying each one builds the judgement reviewers need on a busy week.

                ## Milestones
                1. Definitions of backward, forward, full and transitive compatibility written in your own words.
                2. Twelve realistic schema changes classified under each mode.
                3. The upgrade order each mode implies for producers and consumers written down.
                4. The examples shared as a training page for reviewers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A training page classifies twelve concrete changes under each compatibility mode and states the upgrade order each implies."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-line definition of each compatibility mode"
                - "Draft twelve realistic schema changes from your own sources"
                - "Classify each change under every mode and note the upgrade order"
                - "Publish the examples as a reviewer training page"
            - name: Consumer-driven contract testing
              description: |-
                ## Purpose
                Producer-side checks only catch what the contract declares; they cannot know which fields a given consumer really relies on. Consumer-driven tests, where each consumer publishes the fields and values it depends on and the producer runs those expectations in CI, catch the change that is technically compatible but still breaks someone.

                ## Milestones
                1. The idea of consumer-driven contracts understood from one worked example.
                2. Two consumers of the pilot dataset write their expectations as tests.
                3. The producer's CI runs those consumer tests on every change.
                4. A judgement recorded on whether to extend the approach to other contracts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The pilot producer's CI runs expectation tests published by at least two consumers, with a written decision on extending them."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Study one worked example of consumer-driven contract testing"
                - "Ask two pilot consumers to list the fields and values they depend on"
                - "Turn those expectations into tests the producer CI can run"
                - "Record whether the approach is worth extending and why"
            - name: Expand and contract migrations for shared tables
              description: |-
                ## Purpose
                Renaming a column in one step breaks every consumer the instant it deploys. The expand and contract pattern, where the new column is added and populated alongside the old one, consumers move over, and only then the old one is removed, turns a breaking change into a sequence of compatible ones.

                ## Milestones
                1. The steps of expand, migrate, contract written as a runbook with timings.
                2. One real rename or type change carried out using the pattern.
                3. Consumers confirmed on the new column before the old one was dropped.
                4. The runbook linked from the breaking change process.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real column change completed through expand and contract with no consumer breakage, and the runbook is linked from the change process."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the expand, migrate and contract steps as a runbook"
                - "Pick one pending rename or type change to run through the pattern"
                - "Track each consumer's move to the new column"
                - "Drop the old column only after every consumer has confirmed"
            - name: What change data capture means for contracts
              description: |-
                ## Purpose
                Change data capture copies an application's internal tables straight into the warehouse, which quietly turns every private schema decision into a public interface. Understanding how capture tools handle added columns, type changes, deletes and table rewrites tells you which sources need a contract at the boundary and which should stop being replicated raw.

                ## Milestones
                1. Notes on how your capture tool behaves on added, removed and retyped columns.
                2. A list of replicated tables that consumers read directly.
                3. Each of those tables marked: contract it, wrap it in a view, or replace with events.
                4. A short guide for application teams on what their migrations do downstream.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A guide explains how schema changes flow through change data capture, and every directly read replicated table has a recorded decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Test how the capture tool handles an added and a dropped column in staging"
                - "List replicated tables that consumers query directly"
                - "Decide for each: contract it, wrap it or replace it with events"
                - "Ask the agent to draft a one-page guide for application teams"
            - name: Field semantics for units, time zones and nulls
              description: |-
                ## Purpose
                Two fields can share a name and a type and still mean different things: amount in cents or in pounds, a date in UTC or the shop's local time, null meaning unknown or meaning zero. Learning to spot and write down these semantic details is what separates a contract that prevents wrong numbers from one that only prevents crashes.

                ## Milestones
                1. A checklist of semantic questions to ask about every field.
                2. The checklist applied to the pilot contract and its gaps filled.
                3. Three semantic mismatches found in existing sources and documented.
                4. A semantics section made required in the contract template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A semantic checklist exists, the pilot contract answers it for every field, and the template now requires a semantics section."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a checklist covering units, currency, time zone, null meaning and grain"
                - "Apply it to every field in the pilot contract"
                - "Find three fields in existing sources whose meaning differs from their name"
                - "Make the semantics section required in the contract template"
            - name: Transactional outbox for domain events
              description: |-
                ## Purpose
                Writing to the database and publishing an event in two separate steps means some events are lost and some describe changes that rolled back. The outbox pattern, where the event is written in the same transaction and published from there, gives consumers a contracted event stream that matches the database instead of a raw replica of it.

                ## Milestones
                1. The outbox design agreed with the pilot producing team, including the relay process.
                2. Event schemas for the outbox written as contracts before any code ships.
                3. The outbox running in production with publish lag measured.
                4. At least one consumer moved from the raw replica to the contracted events.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A transactional outbox publishes contracted events in production, and at least one consumer has moved off the raw replica onto them."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Walk the pilot producing team through the outbox pattern"
                - "Write the event contracts before implementation starts"
                - "Measure lag between the database commit and the published event"
                - "Move one consumer from the raw replica onto the new events"
            - name: Moving consumers off raw replica tables
              description: |-
                ## Purpose
                Dozens of reports reading an application's raw tables mean the application team cannot change anything without risk. Moving those consumers onto contracted interfaces, one source at a time, gives the producer back its freedom to refactor and gives consumers a promise in return.

                ## Milestones
                1. Every model and report reading the raw replica of one source listed.
                2. A contracted interface published that covers what those consumers need.
                3. Each consumer migrated and checked for matching results.
                4. Direct read access to the raw replica removed for analytics users.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All consumers of one source's raw replica have moved to a contracted interface and direct raw access has been removed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Use query logs to list everything that reads the source's raw tables"
                - "Define the contracted interface that covers those needs"
                - "Migrate each consumer and compare results before and after"
                - "Remove analytics read access to the raw replica"
            - name: Versioned interface views for warehouse consumers
              description: |-
                ## Purpose
                Pointing consumers at a stable, versioned view rather than the underlying table lets the producer restructure storage without touching anyone. A v1 view that keeps its shape while a v2 view adds the new design gives consumers time to move and makes the contract something the warehouse can enforce.

                ## Milestones
                1. A naming scheme for versioned views agreed, such as a version suffix or schema per major version.
                2. The pilot dataset published as a versioned view that matches its contract.
                3. Consumers granted access to the view and not the base table.
                4. A second major version run alongside the first for a full deprecation window.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Contracted datasets are published as versioned views, consumers read only the views, and two major versions have run side by side once."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the naming scheme for versioned interface views"
                - "Publish the pilot dataset as a v1 view that matches the contract"
                - "Move consumer permissions from the base table to the view"
                - "Test the scheme by publishing a v2 view alongside v1"
            - name: Rejected record handling at the contract boundary
              description: |-
                ## Purpose
                Records that fail the contract need somewhere to go other than silently into a table or silently into the bin. A dead-letter queue or rejected records table at the boundary, with the failing rule attached, keeps bad data out of reports while giving the producer exactly what they need to fix it.

                ## Milestones
                1. A rejected records destination for each contracted stream or load.
                2. Each rejected record stored with the rule it broke and the time.
                3. Producers able to see and replay their own rejected records.
                4. A volume threshold that alerts the producer when rejections spike.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every contracted stream sends failing records to a rejected records store with the broken rule attached, and producers can replay them."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose where rejected records are stored for each contracted source"
                - "Attach the failing rule and timestamp to every rejected record"
                - "Give producers a way to view and replay their rejected records"
                - "Clear or replay the week's rejected records with producers @recurring(weekly:thu)"
            - name: Contract-first versus code-first decision
              description: |-
                ## Purpose
                Teams argue about whether the contract should be written first and code generated from it, or the schema derived from code and the contract checked against it. Both work; mixing them does not. Deciding once, per kind of source, ends the argument and fixes where the source of truth lives.

                ## Milestones
                1. The two approaches compared on the pilot source with their tooling.
                2. Effects on producer workflow and review effort written down.
                3. A decision recorded per source type: events, database tables, files and APIs.
                4. The chosen approach reflected in the template and CI checks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record states contract-first or code-first for each source type, and the template and CI follow it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Prototype generating code from the pilot contract"
                - "Prototype deriving the schema from code and checking it against the contract"
                - "Ask two producing engineers which they would rather maintain"
                - "Record the decision per source type"
            - name: Schema registry tool selection
              description: |-
                ## Purpose
                Choosing a registry decides which serialisation formats you support, how compatibility is enforced and what it costs to run for years. Comparing a managed registry, an open-source one you host, and the registry bundled with your streaming platform against the same criteria avoids a choice made by whoever set up the first topic.

                ## Milestones
                1. Requirements written: formats, compatibility modes, access control, cost and support.
                2. Three options compared against the same requirements.
                3. The top option trialled with the pilot event schemas.
                4. A choice recorded with costs and an exit plan.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A registry is chosen after a scored comparison of three options and a trial, with costs and an exit plan recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the registry requirements as a short scored list"
                - "Compare a managed, a self-hosted and a bundled registry"
                - "Trial the top option with the pilot event schemas"
                - "Record the choice, its yearly cost and how you would leave it"
            - name: Enum and reference value management in contracts
              description: |-
                ## Purpose
                Status codes, country codes and plan names change more often than schemas, and a new order status nobody declared can drop revenue out of a report filtered on the old list. Declaring allowed values in the contract, with a rule for how new values are announced, turns that silent change into a reviewed one.

                ## Milestones
                1. Every enum field in contracted datasets listed with its allowed values.
                2. A rule agreed on whether a new value is a minor or major change for each field.
                3. Producers announcing new values through the change review before shipping.
                4. Consumers' reports checked to handle an unknown value safely.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All enum fields in contracts declare allowed values and a change rule, and no undeclared value reached a report in the last quarter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every enum field across contracted datasets"
                - "Declare allowed values and the change rule in each contract"
                - "Check that key reports have an explicit bucket for unknown values"
                - "Compare live enum values with declared ones @recurring(quarterly)"
            - name: Retiring a legacy CSV feed onto a contracted interface
              description: |-
                ## Purpose
                Nightly CSV drops with no header guarantees, shifting column orders and a date format that changes with the exporter's locale cause a steady drip of failures. Replacing one such feed with a contracted file format or table, with a declared schema and a delivery promise, removes a whole category of overnight pages.

                ## Milestones
                1. The legacy feed's real behaviour documented, including its known quirks.
                2. A replacement agreed with the producer: typed file format or direct table.
                3. Both feeds run in parallel with outputs compared for a month.
                4. The old feed switched off and its parsing code removed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One legacy CSV feed has been replaced by a contracted interface after a month of parallel running, and its old parser deleted."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Document the legacy feed's columns, quirks and past failures"
                - "Agree a typed replacement format with the producer"
                - "Run old and new feeds in parallel and compare outputs"
                - "Switch off the old feed and delete its parser"
            - name: First contract go-live with the pilot producer
              description: |-
                ## Purpose
                The pilot contract going live is the moment the programme becomes real: the CI check blocks merges, the consumer list is official and the guarantees start being measured. Treating it as a dated launch, with both teams briefed and a rollback plan, makes the first blocked pull request feel like the system working rather than an obstacle.

                ## Milestones
                1. The contract, CI check and guarantee checks ready and tested on a branch.
                2. Producer and consumer teams briefed on what changes on go-live day.
                3. Go-live completed with the check enforcing on the main branch.
                4. A review one month later recording blocked changes, overrides and lessons.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pilot contract is enforced on the producer's main branch from a set date, with a one-month review written up."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set the go-live date with the pilot producer's tech lead"
                - "Run the CI check in warning mode for two weeks before go-live"
                - "Brief both teams on what is enforced from go-live day"
                - "Hold a one-month review of blocked changes and overrides"
            - name: Contract workshop for a producing team
              description: |-
                ## Purpose
                Application engineers rarely see the reports their data feeds, so a schema change looks harmless from their side. A ninety-minute workshop that shows them the downstream uses of their data, walks through the contract and lets them write one change through the process builds the empathy no policy document can.

                ## Milestones
                1. Downstream uses of the team's data gathered into a few concrete examples.
                2. A ninety-minute workshop delivered with a hands-on contract change exercise.
                3. Questions and objections captured and answered in writing.
                4. One volunteer named as the team's contract owner.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A workshop has been delivered to one producing team, with written answers to their questions and a named contract owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three reports or features that depend on the team's data"
                - "Prepare a hands-on exercise that changes a field through the process"
                - "Run the ninety-minute workshop with the producing team"
                - "Send written answers to every question raised"
            - name: Major event schema version cutover
              description: |-
                ## Purpose
                Moving every consumer from version one to version two of a core event, such as an order or a sign-up, is the riskiest thing a contract programme does. A planned cutover with dual publishing, a consumer checklist, a fixed date and a rollback route keeps the switch boring.

                ## Milestones
                1. Version two published alongside version one, with both validated.
                2. Each consumer's migration tracked to done on a checklist.
                3. The cutover date agreed and announced with the notice the tier requires.
                4. Version one publishing stopped after the window, with no unplanned breakage.

                ## Notes
                Start from the **Operational checklist** template for the cutover day. Keep version one publishing until the last consumer has confirmed, even if the date slips.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All consumers have moved to version two of the event and version one publishing has stopped on a planned date without an unplanned incident."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Publish version two alongside version one and validate both"
                - "Build a checklist of every consumer and its migration status"
                - "Announce the cutover date with the required notice"
                - "Stop version one publishing after the last consumer confirms"
            - name: Sunset day for a deprecated dataset version
              description: |-
                ## Purpose
                Sunset dates that pass without the old version disappearing teach everyone that deprecation notices are optional. Running one sunset properly, with final reminders, a last usage check, the removal itself and a note afterwards, sets the precedent every later deprecation relies on.

                ## Milestones
                1. Final reminders sent to remaining consumers two weeks and two days before.
                2. Usage checked on the day and any late consumer contacted directly.
                3. The old version removed or access revoked on the published date.
                4. A short note confirming the sunset posted to the announcements channel.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One deprecated version was removed on its published sunset date, with reminders sent and a confirmation posted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the two-week and two-day sunset reminders"
                - "Check query logs for any reader of the old version on the day"
                - "Remove the old version or revoke access on the published date"
                - "Post a confirmation that the sunset is complete"
            - name: Contract programme readout to engineering leadership
              description: |-
                ## Purpose
                Leadership funds what it can see, and a contract programme's benefit is mostly incidents that did not happen. A readout six months in, with breakages before and after, blocked breaking changes, contracts live and producer feedback, earns the time and headcount the next stage needs.

                ## Milestones
                1. Before and after figures for upstream-caused breakages gathered.
                2. Counts of contracts live, consumers registered and breaking changes caught in CI.
                3. Quotes from producing and consuming teams collected.
                4. A twenty-minute readout delivered with a clear ask for the next six months.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A readout with before and after breakage figures and a specific next-stage ask has been presented to engineering leadership."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare upstream-caused breakages before and after the pilot"
                - "Count contracts live and breaking changes caught in CI"
                - "Collect two quotes each from producers and consumers"
                - "Ask the agent to draft the readout slides from the figures"
            - name: Contracts as the only data engineer at a startup
              description: |-
                ## Purpose
                As the only data person at a small company, you cannot run review boards or registries, but you can still stop the product team breaking the metrics deck every sprint. A lightweight version, with one contract file per critical source, a CI check in the main app repository and a standing slot in the engineering stand-up, gives most of the benefit for a few hours a month.

                ## Milestones
                1. The three sources that would hurt most if they broke chosen.
                2. One short contract file for each, kept in the application repository.
                3. A CI check in the app repository that fails on removed or retyped fields.
                4. A monthly ten-minute check-in with the engineering lead on upcoming changes.

                ## Notes
                Skip anything that needs a second person to run. Contracts at this size are mostly about being told before a change ships.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three critical sources have contracts checked in the application CI, and monthly check-ins have run for three months."
                cadence: rolling
              tasks:
                - "Pick the three sources that would hurt most if they broke"
                - "Write a short contract file for each in the application repository"
                - "Add a CI check that fails on removed or retyped fields"
                - "Ask the engineering lead about upcoming schema changes @recurring(monthly:5)"
            - name: Owning your first contract as an application developer
              description: |-
                ## Purpose
                If you build the service that produces the data, the contract is yours, even if the data team wrote the first draft. Learning what you have promised, how the CI check works, how to propose a breaking change and who to tell turns contracts from a blocker in your pull request into a short, predictable step.

                ## Milestones
                1. The contract for your service read end to end, with questions answered by the data team.
                2. Every guarantee mapped to the code or job that delivers it.
                3. One compatible change shipped through the contract process.
                4. A note in your service's README pointing to the contract and its consumers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have shipped one change through the contract process and your service's README links to its contract and consumers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your service's data contract and list your questions"
                - "Map each guarantee to the code or job that delivers it"
                - "Ship one compatible change through the contract process"
                - "Link the contract and consumer list from your service README"
            - name: Enterprise contract rollout across domains
              description: |-
                ## Purpose
                Large organisations cannot introduce contracts one team at a time forever; with hundreds of sources, the rollout needs waves, a central platform team and domain champions. Planning it as a programme with tiers covered first and adoption measured per domain keeps it from stalling after the enthusiastic early teams.

                ## Milestones
                1. A rollout plan in waves, starting with the highest tier sources in each domain.
                2. A contract champion named in every participating domain.
                3. Shared tooling for templates, CI checks and the registry offered as a platform service.
                4. A monthly steering update on coverage by domain.
                5. All tier one sources under contract by the end of the plan.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every tier one source across participating domains is under an enforced contract within twelve months, tracked in monthly steering updates."
                cadence: phased
                effort_hours_estimate: "200"
              tasks:
                - "Draft the rollout waves by domain and tier"
                - "Ask each domain head to name a contract champion"
                - "Package templates, CI checks and registry access as a platform offer"
                - "Send the steering group coverage by domain @recurring(monthly:17)"
            - name: Contracts for third-party vendor data feeds
              description: |-
                ## Purpose
                Vendor files and APIs change on the vendor's schedule, not yours, and the contract you need is often already half in the commercial agreement. Writing a data contract for each important feed, and getting the vendor to commit to change notice in writing, turns surprise format changes into planned ones.

                ## Milestones
                1. Every vendor data feed listed with its format, delivery schedule and business use.
                2. A data contract written for each important feed, based on what arrives today.
                3. Change notice terms requested from each vendor and recorded.
                4. Vendor release notes checked on a schedule for upcoming changes.

                ## Notes
                Start from the **Vendor** template to keep each supplier's contacts, terms and notice commitments together. Commercial terms are for your procurement or legal team to negotiate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each important vendor feed has a data contract and a recorded change notice commitment, and release notes are checked quarterly."
                cadence: rolling
              tasks:
                - "List every vendor data feed with its format and business use"
                - "Write a data contract for each important feed from current samples"
                - "Ask procurement to request change notice terms from each vendor"
                - "Check vendor release notes and changelogs for schema changes @recurring(quarterly)"
                - "Review each vendor feed contract before renewal @recurring(yearly)"
            - name: Schema reconciliation after an acquisition
              description: |-
                ## Purpose
                After an acquisition, two sets of customer, order and product schemas meet, each with its own names, keys and meanings. Mapping them field by field and agreeing contracted interfaces for the combined reporting avoids months of reports that disagree depending on which company's data they started from.

                ## Milestones
                1. The acquired company's core schemas inventoried against your own.
                2. A field-by-field mapping with semantic differences called out.
                3. Contracted interfaces agreed for combined customer, order and product reporting.
                4. Both companies' producers committed to the new contracts.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A field mapping between both companies' core schemas exists, and contracted interfaces for combined reporting are agreed by both producing sides."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Collect the acquired company's core schemas and data dictionaries"
                - "Map customer, order and product fields one to one"
                - "Flag fields with the same name but a different meaning"
                - "Agree the combined contracted interfaces with both producing teams"
            - name: Contracts for regulated reporting data
              description: |-
                ## Purpose
                Regulatory returns and audited financial figures need more than compatibility: the regulator or auditor may ask who approved a change to a feed, when and why. Adding approval evidence, retention of contract versions and a controlled change route to the contracts behind regulated reports gives you that answer in minutes.

                ## Milestones
                1. Every dataset feeding a regulated report identified and placed in the top tier.
                2. Change approvals for those contracts captured with approver, date and reason.
                3. Every past version of each regulated contract retained and retrievable.
                4. A quarterly evidence pack ready for internal audit or compliance.

                ## Notes
                Start from the **Compliance control** template. Your compliance team decides what the regulation requires; this project makes the contract evidence easy to produce.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All datasets behind regulated reports have top-tier contracts with recorded approvals, and the latest quarterly evidence pack was accepted by compliance."
                cadence: rolling
              tasks:
                - "List every dataset that feeds a regulated or audited report"
                - "Ask compliance what change evidence they need for those feeds"
                - "Require recorded approver, date and reason on those contracts"
                - "Assemble the contract change evidence pack for compliance @recurring(quarterly)"
            - name: Consumer impact report on schema pull requests
              description: |-
                ## Purpose
                Producers rarely know who reads their fields, so even a careful reviewer cannot judge a change's reach. A bot that comments on every schema pull request with the registered consumers, the models and dashboards touching each changed field and the tier involved puts the downstream cost in front of the person making the change.

                ## Milestones
                1. Field-level usage gathered from consumer registrations and warehouse query logs.
                2. A pull request comment listing affected consumers for each changed field.
                3. Breaking changes to tier one fields automatically requesting a data reviewer.
                4. Producers surveyed on whether the comment changed their decisions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Schema pull requests in contracted repositories receive an automated comment listing affected consumers by field."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Combine consumer registrations and query logs into field-level usage"
                - "Build a pull request comment that lists consumers per changed field"
                - "Auto-request a data reviewer on tier one breaking changes"
                - "Ask five producers whether the comment changed what they did"
            - name: Data product contracts in a domain mesh
              description: |-
                ## Purpose
                In a data mesh each domain publishes data products for others to use, and the contract is the product's public interface. Defining what every data product contract must contain, how products are discovered and how cross-domain dependencies are approved stops a mesh turning into many small warehouses that cannot be joined.

                ## Milestones
                1. A minimum contract standard for data products agreed across domains.
                2. Shared identifiers and conformed fields declared for cross-domain joins.
                3. Cross-domain dependencies registered and visible to producing domains.
                4. A quarterly review of data products that no other domain uses.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A data product contract standard with conformed identifiers is agreed across domains, and cross-domain dependencies are registered."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft the minimum contract standard for a data product"
                - "Agree the shared identifiers every domain must publish"
                - "Register cross-domain dependencies against each product contract"
                - "Review data products with no cross-domain consumers @recurring(quarterly)"
            - name: Type mapping between serialisation formats and the warehouse
              description: |-
                ## Purpose
                Protobuf, Avro and warehouse SQL do not share a type system: unsigned integers, nanosecond timestamps, decimals with a declared scale and nested repeated fields all need deliberate mapping. A documented, tested mapping applied the same way by every loader stops values being truncated, rounded or shifted by a time zone on the way in.

                ## Milestones
                1. A mapping table from each source format type to the warehouse type.
                2. Lossy mappings identified, such as precision or range loss, with a rule for each.
                3. Round-trip tests that load sample values and compare them exactly.
                4. Every loader using the shared mapping instead of its own defaults.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested type mapping covers every format in use, and round-trip tests pass for decimals, timestamps and large integers."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every type used across contracted schemas in each format"
                - "Map each to a warehouse type and mark any lossy mapping"
                - "Write round-trip tests for decimals, timestamps and large integers"
                - "Point every loader at the shared mapping"
            - name: Contract adoption and coverage metrics
              description: |-
                ## Purpose
                Without numbers, a contract programme cannot tell whether it is spreading or quietly shrinking. Tracking the share of tier one and tier two sources under contract, breaking changes caught before merge, upstream-caused incidents and median change decision time each month shows where to push and when the programme has done its job.

                ## Milestones
                1. Four or five adoption metrics defined with exact calculations.
                2. A baseline recorded for each metric.
                3. A monthly metrics page updated and shared with the platform steward.
                4. Targets set for the next two quarters based on the baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly metrics page tracks contract coverage by tier, breaking changes caught and upstream incidents against a recorded baseline."
                cadence: rolling
              tasks:
                - "Define four adoption metrics with exact calculations"
                - "Record a baseline for each from the current state"
                - "Update the contract adoption metrics page @recurring(monthly:28)"
                - "Set two-quarter targets from the baseline"
---

# Data Contracts & Schemas

This area is for data engineers, platform teams and the application developers upstream of them who are tired of finding out about a renamed column from a broken board report. It starts with foundations (an inventory of producers, a pilot contract, a specification format, compatibility and versioning rules and a contract repository), moves through the operating routines that enforce contracts in CI and the schema registry, then covers the schema skills worth learning properly, improvements such as the outbox pattern and versioned interface views, dated cutovers and sunsets, situations from a lone startup engineer to an enterprise rollout, and specialist work on impact analysis, data products and type mapping.

The rhythms are a weekly contract change review, weekly drift scans and request triage, monthly reviews of violations, deprecations, kept promises and adoption, a quarterly check of who still consumes each contract and a yearly portfolio and policy review. The Product spec, Purchase decision, Remediation plan, Operational checklist, Vendor and Compliance control templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
