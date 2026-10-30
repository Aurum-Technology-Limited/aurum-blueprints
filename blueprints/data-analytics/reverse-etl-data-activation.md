---
id: data-analytics.reverse-etl-data-activation
name: Reverse ETL & Data Activation
description: "Activation-ready warehouse models, stable matching keys and clear field ownership, synced into CRM, marketing, ad and support tools with alerts, audits, consent rules and routines that keep teams trusting the data."
category: business
version: 1.0.0
tags: [data-analytics, reverse-etl-data-activation, engineer, team, crm-sync, audience-sync, data-activation, revenue-operations]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - risk-register
    - vendor
    - onboarding-30-60-90
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Reverse ETL & Data Activation
          description: "Syncing modelled warehouse data back into CRM, marketing and support tools so teams act on trusted data where they work."
          projects:
            - name: Activation use case inventory with business owners
              description: |-
                ## Purpose
                Most reverse ETL programmes stall because the first sync is chosen by whoever asks loudest, not by what changes a decision. Listing every request for warehouse data inside an operational tool, with the team that will act on it, the field or audience it needs and the action it should trigger, gives you a ranked backlog and a reason to say no to the rest.

                ## Milestones
                1. A list of at least ten activation requests, each naming the destination tool, the record type and the field or audience wanted.
                2. Every request paired with a named business owner and the action their team will take when the data arrives.
                3. Each use case scored on value, data readiness and destination effort using the same three scales.
                4. A top three agreed with the business owners and written at the head of the list.

                ## Notes
                A use case with no action attached, the kind that ends with it would be nice to see it in the CRM, is a dashboard request in disguise. Send it to the BI backlog instead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list of activation use cases exists, each with a destination, a business owner and a stated action, and the top three are agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every request you have heard for warehouse data inside the CRM, marketing or support tools"
                - "Ask each requester what their team will do differently when the field appears"
                - "Score each use case on value, data readiness and destination effort"
                - "Agree the top three with the business owners and record the decision"
            - name: Reverse ETL tool or in-house sync decision
              description: |-
                ## Purpose
                Buying a reverse ETL product, using the activation features of a tool you already own, or writing sync scripts against destination APIs are all reasonable choices with very different running costs. Comparing them against your top three use cases, your destinations and the hours your team can spare for maintenance stops the decision being made from a vendor demo.

                ## Milestones
                1. Three options compared: a dedicated reverse ETL product, an activation feature in an existing tool, and in-house scripts.
                2. Each option tested against the top three use cases and every destination they need.
                3. Pricing modelled on your expected synced rows or records and destination count for two years.
                4. A decision recorded with the reasons, the owner and the date it will be revisited.

                ## Notes
                Start from the **Purchase decision** template. Count the hidden cost of in-house syncs honestly: retries, rate limits, schema changes in the destination and someone on call for all of them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the sync approach, compares at least three options on cost and fit, and records who owns the choice and when it is reviewed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write down every destination tool the top three use cases need"
                - "Shortlist two vendors and one build option and request pricing on your row volumes"
                - "Run a trial sync from a test model into a sandbox destination for each vendor"
                - "Record the decision and the review date in the purchase decision page"
            - name: Destination field and object audit
              description: |-
                ## Purpose
                CRMs and marketing tools collect years of custom fields, duplicated properties and picklists nobody remembers creating, and syncing into the wrong one quietly breaks a workflow someone else depends on. An audit of the objects, fields, validation rules and automations in each destination shows where synced data can land safely and where it will collide.

                ## Milestones
                1. Every custom field on the objects you plan to sync exported with its type, creation date and fill rate.
                2. Fields already written by native integrations, forms or automation flows marked as such.
                3. Validation rules, required fields and workflows that fire on update listed per object.
                4. A short list of target fields agreed with the destination's admin, plus the fields still to create.

                ## Notes
                Ask the admin for the automation list, not just the field list. A workflow that emails the account owner on every update will fire on every sync run.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each destination object in scope has a field inventory, a list of automations triggered on update and admin-agreed target fields."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the field list for the account, contact and lead objects in the CRM"
                - "Ask the CRM admin for the workflows and validation rules that fire on record update"
                - "Mark which fields are already written by forms, native integrations or automation"
                - "Agree target fields and new fields to create with the admin"
            - name: Matching keys between warehouse and destination records
              description: |-
                ## Purpose
                Updating the right record depends on both sides sharing a key, and email addresses and company names make poor keys: they change, duplicate and differ in case. Storing the destination's own record IDs in the warehouse, or writing a stable warehouse ID into an external ID field in the destination, is what makes upserts safe rather than a source of duplicates.

                ## Milestones
                1. A chosen matching key per destination object, with the reason it beats the alternatives.
                2. Destination record IDs landed in the warehouse and joined to warehouse entities.
                3. An external ID field created in the destination where the tool supports one, marked unique.
                4. A match rate measured, with unmatched warehouse rows counted and explained.

                ## Notes
                Normalise emails, trimmed and lower case, before matching on them. Even then, treat email as a fallback key, not the primary one.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every synced object matches on a documented stable key, with a measured match rate above an agreed threshold and unmatched rows explained."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether each destination supports an external ID or unique custom key field"
                - "Confirm the destination record IDs already land in the warehouse through ingestion"
                - "Build a mapping model joining warehouse entities to destination IDs"
                - "Measure the match rate and list the main reasons rows fail to match"
            - name: Activation-ready sync models in the warehouse
              description: |-
                ## Purpose
                Pointing a sync at a wide reporting table invites trouble: columns change for dashboard reasons and the destination gets unexpected nulls or renamed values. A dedicated model per destination object, one row per record with the matching key, typed columns named after the destination fields and a tested grain, gives syncs a stable interface that analysts know not to touch.

                ## Milestones
                1. A separate schema or folder for activation models, with a naming convention per destination.
                2. One model per destination object with exactly one row per matching key.
                3. Uniqueness, not-null and accepted-value tests on the key and every synced field.
                4. Each model documented with its destination, sync owner and refresh schedule.

                ## Notes
                Cast values to the destination's types in the model, including picklist labels, date formats and booleans, so the sync tool does no hidden conversion.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live sync reads from a dedicated, tested activation model with one row per key, and no sync points at a reporting or dashboard table."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Create an activation schema and agree its naming convention"
                - "Build the first activation model for the top use case with one row per key"
                - "Add uniqueness and accepted-value tests to the key and synced fields"
                - "Document the destination, owner and schedule in the model's description"
            - name: Field ownership rules for synced fields
              description: |-
                ## Purpose
                Two writers on one field is how a rep's careful edit gets reverted at 2am by a sync they did not know existed. Deciding for each synced field whether the warehouse or the tool owns it, and making warehouse-owned fields read-only to users, removes the most common source of distrust in activated data.

                ## Milestones
                1. Every synced field labelled warehouse-owned or tool-owned in one table.
                2. Warehouse-owned fields set read-only for users or removed from edit layouts in the destination.
                3. Help text on each warehouse-owned field saying where the value comes from and how often it updates.
                4. A rule written for the rare case where both sides must write, naming which one wins.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A field ownership table covers every synced field, warehouse-owned fields are read-only in the destination, and each carries help text naming its source."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every field your syncs write and who else can edit it today"
                - "Label each field warehouse-owned or tool-owned with the destination admin"
                - "Ask the admin to make warehouse-owned fields read-only on page layouts"
                - "Add help text naming the source model and refresh time to each field"
            - name: Integration users and API permissions per destination
              description: |-
                ## Purpose
                Syncs often run under an admin's personal login, which means full write access to everything and a broken pipeline the day that person leaves. A dedicated integration user per destination, with permissions limited to the objects and fields the syncs touch and credentials kept in a secrets store, limits the damage a bad mapping can do.

                ## Milestones
                1. One integration user per destination, not tied to any person.
                2. Permissions limited to the objects and fields listed in the sync catalogue.
                3. API tokens or OAuth connections stored in the team's secrets manager, never in a script.
                4. Audit trail entries in each destination showing changes made under the integration user.

                ## Notes
                Many CRMs charge a licence per user. Check whether an integration licence type exists before buying a full seat.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every destination is written by a named integration user with scoped permissions, and no sync runs under a personal account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List which login each current sync uses to write to its destination"
                - "Ask each destination admin to create an integration user with scoped permissions"
                - "Move the tokens into the secrets manager and reconnect the syncs"
                - "Review each integration user's permissions against the sync catalogue @recurring(yearly)"
            - name: Sandbox destination for testing syncs
              description: |-
                ## Purpose
                Testing a new mapping in the production CRM means real reps see half-finished fields and real automations fire on test data. A sandbox or developer instance for each main destination, refreshed from production on a schedule and wired to a development copy of the activation models, lets you run a full sync and inspect the result before anyone else does.

                ## Milestones
                1. A sandbox or test account available for the CRM and the main marketing tool.
                2. A development sync connection pointing at the sandbox and a development schema.
                3. A written test step in the release process: run in the sandbox, then check twenty records by hand.
                4. The sandbox refresh schedule known and noted in the sync catalogue.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each main destination has a sandbox connected to development activation models, and every new mapping is tested there before production."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the CRM admin whether a sandbox exists and when it was last refreshed"
                - "Create a development connection in the sync tool pointing at the sandbox"
                - "Run a test sync and inspect twenty records by hand"
                - "Add the sandbox test step to the release checklist"
            - name: First production sync of a high-value field
              description: |-
                ## Purpose
                Shipping one narrow sync end to end, such as a product usage score on the account record, teaches the team more than designing ten. Taking the top use case from model to production with a sandbox test, a staged rollout to a few accounts and a check-in with the people using it proves the plumbing and builds the trust the next requests need.

                ## Milestones
                1. The top use case live in production for a pilot group of records.
                2. Twenty pilot records checked by hand against the warehouse values.
                3. Feedback from at least three users of the field recorded after two weeks.
                4. The sync expanded to all records with failure alerting switched on.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first production sync runs on schedule for all records, with a pilot check, user feedback recorded and failure alerts in place."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the pilot group of accounts or contacts with the business owner"
                - "Run the sync for the pilot group only and compare twenty records with the warehouse"
                - "Ask three users what they did with the field after two weeks"
                - "Expand to all records and switch on failure alerts"
            - name: Sync failure and rejected record alerts
              description: |-
                ## Purpose
                Reverse ETL runs can report success while rejecting thousands of rows for a picklist value the destination does not accept. Alerts on failed runs, on rejected row counts above a threshold and on syncs that have not run at all, sent to the owner's channel with the error text, catch these before a sales manager does.

                ## Milestones
                1. Alerts configured for failed runs, missed runs and rejected rows above a set percentage.
                2. Each alert routed to a named owner's channel with the destination error message included.
                3. A weekly triage of rejected rows with the top error cause fixed at source.
                4. Rejected rows under one percent of synced rows for four consecutive weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production sync alerts its owner on failure, missed run or high rejection rate, and weekly triage keeps rejected rows under one percent."
                cadence: rolling
              tasks:
                - "Set rejected-row thresholds for each production sync in the sync tool"
                - "Route alerts to the owner's channel with the destination error text"
                - "Glance at the overnight sync run summary for failures and missed runs @recurring(daily)"
                - "Group the week's rejected rows by error and fix the top cause @recurring(weekly:tue)"
            - name: Sync catalogue with owners and consumers
              description: |-
                ## Purpose
                Six months after launch nobody can say which syncs write to which fields, who asked for them or what breaks if one is paused. A catalogue listing every sync with its source model, destination object, fields, schedule, technical owner and business consumer answers those questions in one place and makes clean-up possible.

                ## Milestones
                1. Every production sync listed with source model, destination, object and fields.
                2. Each entry naming a technical owner and a business consumer.
                3. The schedule, sync mode and matching key recorded for each sync.
                4. The catalogue reviewed each quarter, with new syncs added and retired ones removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A catalogue covers every production sync with owners, fields and schedule, and has been reviewed in each of the last two quarters."
                cadence: rolling
              tasks:
                - "Export the list of syncs from the sync tool with their models and destinations"
                - "Add the technical owner and business consumer for each sync"
                - "Record schedule, sync mode and matching key per entry"
                - "Reconcile the catalogue with the sync tool and update owners @recurring(quarterly)"
            - name: Change review for sync models and mappings
              description: |-
                ## Purpose
                Renaming a column in an activation model or remapping a field can wipe values across every record in a destination within one run. A short checklist on every pull request that touches a sync, covering destination impact, a sandbox run and sign-off from the destination owner, makes those changes deliberate.

                ## Milestones
                1. A pull request template section for changes to activation models and mappings.
                2. CI tests that fail when a synced column is removed or renamed without a matching mapping change.
                3. Destination owner sign-off recorded on changes that alter values users see.
                4. No unreviewed change to a production mapping in a full quarter.

                ## Notes
                Start from the **Operational checklist** template. Mappings edited in the sync tool's interface bypass code review, so turn on its change history or move mappings into version control where the tool allows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change to an activation model or mapping in the last quarter went through the checklist, with sandbox evidence and destination owner sign-off."
                cadence: rolling
              tasks:
                - "Write a sync change checklist from the operational checklist template"
                - "Add the checklist to the pull request template for the activation folder"
                - "Add a CI test that fails when a synced column disappears"
                - "Turn on change history for mappings edited in the sync tool"
            - name: API quota and rate limit budget per destination
              description: |-
                ## Purpose
                Destination APIs share a daily call allowance between your syncs, native integrations and every other app connected to them, and one large sync can starve the rest. Knowing each destination's limits, what each sync consumes and how close you run to the ceiling lets you schedule big syncs at quiet hours and move to bulk endpoints before the limit is hit.

                ## Milestones
                1. Each destination's API limits written down with the source of the figure.
                2. Calls per run measured for every sync and summed per day.
                3. Large syncs moved to off-peak hours or bulk endpoints where available.
                4. Daily consumption kept below an agreed share of the limit, such as seventy percent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every destination has a documented API limit and daily consumption figure, and no sync has hit a limit in the last month."
                cadence: rolling
              tasks:
                - "Look up the API limits for each destination in its developer documentation"
                - "Measure API calls per run for each sync from the sync tool's logs"
                - "Move the largest sync to off-peak hours or a bulk endpoint"
                - "Check API consumption against each destination's limit @recurring(monthly:11)"
            - name: Monthly synced field usage review
              description: |-
                ## Purpose
                A synced field that nobody filters, reports on or builds a workflow from is cost and clutter, however good the model behind it. Checking each month whether reps, marketers and agents actually use the fields you sync, through report usage, list filters and conversations with a few users, shows what to improve and what to retire.

                ## Milestones
                1. A usage measure chosen per field: reports, list views, workflows or segments that reference it.
                2. A monthly table of synced fields with their usage counts.
                3. Two users interviewed for every field with no usage.
                4. Unused fields either fixed, explained to users or scheduled for retirement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly usage table exists for every synced field, and each field with no usage for two months has a recorded decision."
                cadence: rolling
              tasks:
                - "Ask the destination admin how to list reports and workflows that reference a field"
                - "Build a table of synced fields and their usage counts"
                - "Talk to two users about any field with no usage"
                - "Update field usage counts and flag fields unused for two months @recurring(monthly:18)"
            - name: Destination schema change watch
              description: |-
                ## Purpose
                CRM admins rename fields, change picklist values and add required fields as part of normal work, and each change can make a sync reject every row overnight. A standing check of the destination's setup audit trail, plus a heads-up agreement with the admins, turns those changes from surprises into planned updates.

                ## Milestones
                1. Read access to each destination's setup or admin audit trail.
                2. An agreement with each admin to flag changes to synced objects before they ship.
                3. A monthly check of the audit trail for changes to synced fields.
                4. Sync mappings updated before, or on the same day as, any destination change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly audit trail checks run for each destination, and no sync failure in the last quarter was caused by an unannounced destination change."
                cadence: rolling
              tasks:
                - "Ask each destination admin for read access to the setup audit trail"
                - "Share the list of synced fields with the admins and ask for a heads-up on changes"
                - "Read the destination audit trails for changes to synced fields @recurring(monthly:4)"
            - name: Deletion and opt-out propagation through syncs
              description: |-
                ## Purpose
                When a customer asks to be erased or unsubscribes, a reverse ETL sync can recreate them in a marketing tool the next morning from stale warehouse rows. Building suppression into every activation model, and checking monthly that erased and opted-out people are absent from every destination, keeps activation from undoing privacy work.

                ## Milestones
                1. A suppression table in the warehouse holding erasure requests and marketing opt-outs.
                2. Every activation model joined against it so suppressed people never sync.
                3. Sync modes reviewed so warehouse deletions do not leave orphans in mirrored lists.
                4. A monthly reconciliation showing zero suppressed people present in any destination.

                ## Notes
                Agree the rules with your privacy lead or data protection officer. This project organises how the rules are applied; it does not decide what the law requires.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every activation model filters on a suppression table, and monthly reconciliations show no erased or opted-out person in any destination."
                cadence: rolling
              tasks:
                - "Ask the privacy lead where erasure requests and opt-outs are recorded"
                - "Build a suppression table in the warehouse from those sources"
                - "Add the suppression filter to every activation model and test it"
                - "Check each destination for suppressed people and report the count @recurring(monthly:25)"
            - name: Synced row volume and tool spend tracking
              description: |-
                ## Purpose
                Reverse ETL tools commonly price on synced rows, records or destinations, so a model that switches from small incremental changes to a full resync on each run can multiply the bill. Tracking rows synced per sync each month next to the invoice shows which syncs drive spend and whether a change in model design or sync mode would cut it.

                ## Milestones
                1. Rows or records synced per sync per month pulled from the tool's usage page or API.
                2. Spend per sync estimated from the pricing model.
                3. The three most expensive syncs reviewed for unnecessary full resyncs or churned rows.
                4. A monthly spend figure tracked against the contracted allowance.

                ## Notes
                Start from the **Metrics log** template. A sync that changes the same rows every run, often because of a timestamp column in the model, is usually the culprit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly synced row volumes and estimated cost per sync are logged for six months, with the top three spenders reviewed."
                cadence: rolling
              tasks:
                - "Create a metrics log for synced rows and spend per sync"
                - "Find which sync changes the most rows per run and why"
                - "Remove volatile columns such as last-updated timestamps from that sync's model"
                - "Log the month's synced rows and spend against the allowance @recurring(monthly:8)"
            - name: Quarterly sync pruning
              description: |-
                ## Purpose
                Syncs are cheap to create and nobody remembers to switch them off, so after a year the destination fills with stale fields and the tool bill with dead syncs. A quarterly pass over the catalogue that pauses syncs with no consumer, archives their fields with the admin and removes their models keeps activation lean.

                ## Milestones
                1. Every sync checked against its business consumer and the latest usage review.
                2. Syncs with no consumer paused for a month before deletion.
                3. Retired fields hidden or archived in the destination with the admin's agreement.
                4. Retired activation models removed from the warehouse code.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pruning review has run each quarter for a year, with every retired sync paused, its fields archived and its model removed."
                cadence: cyclic
              tasks:
                - "List syncs with no named consumer or no field usage in the last two months"
                - "Pause syncs whose business consumer confirms they no longer need them @recurring(quarterly)"
                - "Agree with the admin which retired fields to hide or archive"
                - "Delete the retired activation models in a single reviewed change"
            - name: Sync audit trail in the warehouse
              description: |-
                ## Purpose
                When a manager asks why an account's tier changed last Tuesday, you need to know which sync wrote what value and when. Landing the sync tool's run logs and per-record change history in the warehouse, joined to the activation models, gives a queryable audit trail and the raw material to restore values after a bad run.

                ## Milestones
                1. Sync run metadata, including start, end, rows changed and rows rejected, landed in the warehouse.
                2. Per-record changes, or snapshots of each activation model before every run, kept for at least ninety days.
                3. A query that answers which value was sent to a given record on a given date.
                4. The retention period for the audit data agreed with the privacy lead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "For any synced record you can query what value was sent and when for the last ninety days, using data held in the warehouse."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether the sync tool exposes run logs or record-level change history"
                - "Land run metadata in the warehouse after each run"
                - "Snapshot each activation model before every sync run"
                - "Write the audit query and test it on three real records"
            - name: Sync modes and when to use each
              description: |-
                ## Purpose
                Upsert, update-only, insert-only and mirror modes behave very differently when a row appears, changes or disappears, and picking the wrong one is how duplicates or mass deletions happen. Learning what each mode does to the destination, and choosing one per sync with the reason written down, prevents the commonest reverse ETL accidents.

                ## Milestones
                1. A one-page note on each sync mode and what it does to new, changed and removed rows.
                2. Each production sync's mode reviewed against that note.
                3. Mirror or delete-capable modes restricted to syncs where the warehouse owns the full list.
                4. The chosen mode and reason recorded in the sync catalogue.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every production sync has a recorded mode and reason, and no mirror mode runs against a destination list the warehouse does not fully own."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the sync tool's documentation on each sync mode"
                - "Write a one-page note on what each mode does to new, changed and removed rows"
                - "Review every production sync's mode against the note"
                - "Record each sync's mode and reason in the catalogue"
            - name: How reverse ETL tools detect changes
              description: |-
                ## Purpose
                Most reverse ETL tools compare each run's model output with the previous one and send only the differences, which is why a model that rewrites a timestamp column on every run can trigger what amounts to a full resync. Understanding diffing, snapshots and what forces a resync lets you design models that send small, cheap, predictable changes.

                ## Milestones
                1. Your tool's change detection method understood: snapshot diff, cursor or full resend.
                2. The actions that trigger a full resync listed for your tool.
                3. Volatile columns identified in each activation model.
                4. One model rewritten so its run-to-run change rate drops measurably.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains your tool's change detection, and at least one model has a lower change rate per run after applying it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read how your sync tool computes the rows to send on each run"
                - "List the actions that force a full resync, such as changing the key or mapping"
                - "Find columns in each activation model that change on every run"
                - "Rewrite one model to remove volatile columns and compare rows sent"
            - name: Destination APIs, batching and bulk endpoints
              description: |-
                ## Purpose
                Sending fifty thousand records one call at a time can take hours and burn a day's API allowance, while the same destination's bulk endpoint handles it in a few jobs. Learning how your main destinations batch writes, report partial failures and throttle callers pays off whether you buy a tool or write the syncs yourself.

                ## Milestones
                1. Batch and bulk options documented for each main destination.
                2. Partial failure behaviour understood: which rows fail and how errors are returned.
                3. Throttling responses and retry guidance noted for each API.
                4. A test load of a large batch run in the sandbox and timed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note per main destination covers batch sizes, bulk endpoints, partial failure handling and throttling, and a sandbox bulk load has been timed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the bulk and batch sections of the CRM's API documentation"
                - "Note how each destination reports errors for individual rows in a batch"
                - "Write down the throttling response codes and the advised retry delay"
                - "Time a large batch load into the sandbox"
            - name: CRM data model basics for data engineers
              description: |-
                ## Purpose
                Data engineers often meet the CRM as a source system and only learn its rules when a sync fails: leads that convert into contacts and accounts, ownership and sharing rules, lookups that must exist before a child record can, and picklists that reject unknown values. A few hours learning the destination's data model saves weeks of trial and error.

                ## Milestones
                1. The main standard objects, and how records move between them, explained in your own notes.
                2. Lookup and parent-child dependencies mapped for the objects you sync.
                3. Ownership, record types and picklist restrictions understood for each target object.
                4. An hour spent with the CRM admin walking through a real record.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover the objects, relationships, ownership and picklist rules of every CRM object you sync, checked by the CRM admin."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book an hour with the CRM admin to walk through a real account record"
                - "Map how leads, contacts, accounts and opportunities relate in your CRM"
                - "Note which lookups must exist before a child record can be written"
                - "List the restricted picklists on each target object"
            - name: Hashing and matching for ad platform audiences
              description: |-
                ## Purpose
                Ad platforms match uploaded audiences on hashed identifiers, and a stray space or capital letter before hashing means a person silently fails to match. Learning each platform's normalisation rules, the hashing standard it expects and how it reports match rates turns audience syncs from guesswork into something you can check.

                ## Milestones
                1. Each ad platform's normalisation rules for email and phone written down.
                2. A warehouse function that normalises and hashes identifiers to the expected standard.
                3. The function tested against the platform's published examples.
                4. Typical match rates per platform recorded as a baseline.

                ## Notes
                Most platforms expect SHA-256 of the normalised value. Check each one's current guidance rather than assuming they agree on phone number formats.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested normalise-and-hash function produces values matching each platform's published examples, and baseline match rates are recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read each ad platform's guidance on normalising and hashing customer data"
                - "Write a warehouse function that trims, lower-cases and hashes emails"
                - "Test the function against the platform's published sample values"
                - "Record the match rate for the first uploaded audience"
            - name: Consent rules for activation syncs
              description: |-
                ## Purpose
                Data that is fine to report on is not always fine to push into an ad platform or email tool: marketing consent, the purpose people were told about and regional rules all apply. Learning from your privacy team which fields and audiences may go to which destinations, and recording it next to each sync, keeps activation inside the promises the company has made.

                ## Milestones
                1. A session held with the privacy lead on consent and purpose rules for activation.
                2. Each destination classed by the processing it does: sales, service, marketing or advertising.
                3. Consent fields in the warehouse mapped to the destinations they gate.
                4. The rule for each sync recorded in the catalogue and reviewed yearly.

                ## Notes
                This is organisational, not legal advice. Your privacy lead or data protection officer decides the rules; your job is to apply them consistently in the models.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every sync in the catalogue has a consent rule agreed with the privacy lead, and consent fields gate every marketing and advertising sync."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a session with the privacy lead on consent rules for activation"
                - "Class each destination as sales, service, marketing or advertising"
                - "Map warehouse consent fields to the destinations they gate"
                - "Review the consent rule for each sync with the privacy lead @recurring(yearly)"
            - name: Nulls, types and time zones in destination fields
              description: |-
                ## Purpose
                A null in the warehouse can blank a field a rep filled in by hand, a UTC timestamp can show as yesterday in the CRM, and a number sent as text breaks every report that sums it. Learning how each destination treats nulls, dates, booleans and picklist values, and setting a rule for each, prevents a whole class of quiet data damage.

                ## Milestones
                1. Each destination's handling of nulls, empty strings and missing columns tested in the sandbox.
                2. Date and datetime fields checked for the time zone the destination displays.
                3. A rule per sync on whether nulls overwrite existing values.
                4. Type casts added to activation models for every field with a mismatch.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Sandbox tests document null, date and type behaviour for each destination, and every activation model follows the written rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send a null, an empty string and a missing column to a sandbox record"
                - "Check how a UTC timestamp displays in each destination"
                - "Decide per sync whether nulls should overwrite existing values"
                - "Add explicit casts to activation models where types differ"
            - name: Product usage signals in the CRM for sales
              description: |-
                ## Purpose
                Sales teams selling a product with a free tier or trial want to know who is using it, and the evidence lives in event tables the CRM never sees. Syncing a handful of account-level signals, such as active users in the last fourteen days, key features adopted and seats near the plan limit, gives reps a reason to call and a sentence to open with.

                ## Milestones
                1. Five or fewer usage signals agreed with sales leadership, each with a written definition.
                2. An account-level activation model computing them daily.
                3. Fields on the account record with help text and a last-updated timestamp.
                4. A saved list view or report in the CRM that reps use weekly.

                ## Notes
                Resist sending raw event counts. Reps act on a few clear signals, not a dozen numbers they have to interpret.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Up to five agreed usage signals refresh daily on the CRM account record, and a rep-facing list view built on them is used weekly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask three account executives which product behaviour would make them call"
                - "Agree up to five signal definitions with sales leadership"
                - "Build the account-level activation model and test its grain"
                - "Create a CRM list view filtered on the new signals with the sales manager"
            - name: Account health score in the support tool
              description: |-
                ## Purpose
                Support agents treat a frustrated customer on a large contract the same as a free user because the help desk knows nothing about the account. Syncing plan, contract value band, renewal date and a health score into the help desk lets agents and routing rules prioritise without opening three other systems.

                ## Milestones
                1. The fields agents need agreed with the support lead, kept to five or fewer.
                2. Organisation or company records in the help desk matched to warehouse accounts.
                3. Fields synced, visible in the agent view and usable in routing rules.
                4. One routing or priority rule using the synced data live for a month.

                ## Notes
                Contract value is sensitive. Send a band such as small, medium or large rather than the figure, unless the support lead needs the exact amount.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Help desk organisations show synced plan, value band, renewal date and health score, and at least one routing rule uses them."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the support lead which account facts agents look up most often"
                - "Match help desk organisations to warehouse accounts and measure coverage"
                - "Sync the agreed fields and add them to the agent view"
                - "Set up one routing or priority rule with the support lead"
            - name: Warehouse lead score written to the CRM
              description: |-
                ## Purpose
                Lead scores built inside the CRM can only see CRM data, while the warehouse also holds product usage, billing and web behaviour. Writing a warehouse-computed score to a read-only CRM field, with its top reasons alongside, gives sales one score built on everything you know and lets marketing retire the old points rules.

                ## Milestones
                1. The score's definition and its owner agreed with sales and marketing.
                2. A score and its top three contributing reasons synced to lead and contact records.
                3. The old points-based CRM score hidden once the new one is trusted.
                4. Conversion rates by score band reviewed after one quarter.

                ## Notes
                Building the scoring model itself belongs with predictive modelling work. This project is about getting a trusted score into the CRM and retiring the old one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A warehouse score with reasons is live on CRM lead and contact records, the old score is hidden and conversion by band has been reviewed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree with sales and marketing who owns the score definition"
                - "Add the score and three reason fields to the lead and contact objects"
                - "Sync the score to a pilot team and gather their feedback"
                - "Compare conversion rates by score band after a quarter"
            - name: Replacing hand-uploaded CSV lists with scheduled syncs
              description: |-
                ## Purpose
                Many marketing and sales ops teams still export a query to a spreadsheet each week and upload it to a tool, which means stale lists, mistakes in the upload mapping and personal data sitting in download folders. Finding these manual uploads and replacing the regular ones with scheduled syncs is often the quickest win reverse ETL offers.

                ## Milestones
                1. Every recurring manual upload into an operational tool listed with its owner and frequency.
                2. The top three converted into scheduled syncs from activation models.
                3. Old exports deleted from shared drives and downloads with the owners' help.
                4. Time saved per month estimated and reported to the owners' managers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The three most frequent manual list uploads are replaced by scheduled syncs, and their old export files are deleted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask marketing, sales and support ops which lists they upload by hand"
                - "Rank the uploads by frequency and number of records"
                - "Rebuild the top three as activation models with scheduled syncs"
                - "Help each owner delete the old export files from shared drives"
            - name: Retiring native integrations that conflict with syncs
              description: |-
                ## Purpose
                Billing, product and support tools often have native connectors that write into the CRM directly, and when a reverse ETL sync writes the same field the two fight. Deciding field by field whether the native integration or the warehouse sync should own the value, and switching the loser off, ends the flip-flopping values reps complain about.

                ## Milestones
                1. Every native integration writing to synced objects listed with the fields it writes.
                2. Overlapping fields identified where both a native integration and a sync write.
                3. A decision per overlap on which writer stays, agreed with the destination admin.
                4. Losing writers switched off and field history showing a week of stable values.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "No field is written by both a native integration and a warehouse sync, and each overlap's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the CRM admin for the list of connected apps and the fields they write"
                - "Compare that list with the fields in the sync catalogue"
                - "Agree which writer owns each overlapping field"
                - "Switch off the losing writer and watch field history for a week"
            - name: Marketing audiences synced to the email platform
              description: |-
                ## Purpose
                Segments built by hand in an email tool rely on whatever data reaches it, usually form fills and opens. Defining audiences in the warehouse, such as trial users who have not invited a teammate or customers approaching renewal, and syncing them as lists or properties, lets marketing target on behaviour and billing data with the same definitions analysts use.

                ## Milestones
                1. Three audiences defined with marketing, each with a written rule and expected size.
                2. Each audience built as a model with consent and suppression filters applied.
                3. Audiences syncing to the email platform as lists or contact properties on a schedule.
                4. Audience sizes and send results compared with the hand-built segments they replaced.

                ## Notes
                Syncing properties and letting marketing build segments in the tool keeps them in control; syncing finished lists keeps the logic in the warehouse. Agree which before you build.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three warehouse-defined audiences sync to the email platform on schedule with consent filters applied, and marketing has used each in a send."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree three behaviour-based audiences and their rules with marketing"
                - "Decide with marketing whether to sync lists or contact properties"
                - "Build each audience model with consent and suppression filters"
                - "Compare each audience's size with the hand-built segment it replaces"
            - name: Paid media audiences with customer suppression
              description: |-
                ## Purpose
                Paying to show acquisition ads to existing customers is one of the commonest wastes in paid media, and lookalike audiences are only as good as the seed list behind them. Syncing current customers as a suppression audience and high-value customers as a seed to each ad platform, with hashing and consent rules applied, puts warehouse knowledge where the budget is spent.

                ## Milestones
                1. A customer suppression audience syncing daily to each ad platform in use.
                2. A seed audience of high-value customers defined with the paid media team.
                3. Consent rules for advertising applied before any identifier leaves the warehouse.
                4. Match rates recorded for each audience and platform every month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A daily customer suppression audience and a seed audience sync to each ad platform under the advertising consent rule, with monthly match rates logged."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the paid media team which platforms and campaigns need exclusions"
                - "Build the suppression and seed audience models with the consent filter"
                - "Sync both audiences to each ad platform using hashed identifiers"
                - "Record match rates per audience and platform @recurring(monthly:21)"
            - name: Sync frequency matched to business need
              description: |-
                ## Purpose
                Hourly syncs feel better than daily ones, but they cost more API calls, more synced rows and more warehouse compute, and most CRM fields are read a few times a day at best. Setting each sync's schedule from when its users actually act on the data, and triggering syncs from model completion rather than the clock, cuts cost without anyone noticing a delay.

                ## Milestones
                1. Each sync's current schedule listed beside the time its users act on the data.
                2. A target freshness agreed per sync with its business consumer.
                3. Syncs triggered by upstream model completion where the tools support it.
                4. API calls and synced rows compared before and after the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every sync has an agreed freshness target, schedules match those targets and the before-and-after change in API calls is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each sync's schedule beside when its users act on the data"
                - "Agree a freshness target per sync with its consumer"
                - "Trigger syncs from model completion in the orchestrator where possible"
                - "Compare API calls and synced rows before and after"
            - name: Chat alerts to account owners from warehouse signals
              description: |-
                ## Purpose
                Some signals matter only at the moment they happen: a large customer's usage dropping by half, a trial account inviting ten colleagues, a payment failing on an enterprise plan. Posting these to the account owner in team chat with the context to act, and tracking whether anyone does, reaches people faster than a CRM field they may not open today.

                ## Milestones
                1. Three alert-worthy signals agreed with sales and customer success leads.
                2. Each alert sent to the account owner with account name, the change and a link to the record.
                3. A cap on alerts per person per day so the channel does not get muted.
                4. Acted-on rates reviewed after a month, with weak alerts dropped.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three warehouse signals post to account owners with context and a daily cap, and a one-month review of acted-on rates is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree three alert-worthy signals with sales and customer success leads"
                - "Ask the agent to draft the alert message with account, change and record link"
                - "Set a daily cap on alerts per account owner"
                - "Review which alerts were acted on after a month and drop the weakest"
            - name: Measuring whether an activation changed outcomes
              description: |-
                ## Purpose
                A field appearing in the CRM proves the sync works, not that it helped anyone sell or retain more. Holding back a random group of accounts or reps from a new signal, or comparing before and after with care, gives an honest answer about which activations are worth the upkeep and which only look busy.

                ## Milestones
                1. One activation chosen for measurement with an outcome agreed in advance, such as meetings booked.
                2. A holdout group of accounts or reps defined before launch.
                3. Outcomes compared after an agreed period, with the method's limits written down.
                4. A decision recorded to keep, change or retire the activation.

                ## Notes
                Agree the outcome and the comparison before launch. Choosing them afterwards almost always finds a win.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One activation has a pre-agreed outcome, a holdout comparison and a written keep, change or retire decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one upcoming activation and agree the outcome to measure"
                - "Define a random holdout group before the sync goes live"
                - "Compare outcomes for synced and held-out groups after the agreed period"
                - "Write up the result with its limits and the decision taken"
            - name: Team launch session for new synced fields
              description: |-
                ## Purpose
                New fields appearing on a record without explanation get ignored or distrusted. Launching each significant activation with a short session for the team that will use it, covering what the field means, how fresh it is, where it comes from and what to do with it, decides whether the work gets used at all.

                ## Milestones
                1. A fifteen-minute walkthrough prepared with one real account as the example.
                2. The session delivered at the team's regular meeting with the business owner present.
                3. A one-page guide linked from the field's help text.
                4. Questions from the session answered in writing within a week.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The session has been delivered to the using team with its business owner present, and a one-page guide is linked from the field help text."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the team manager for fifteen minutes at the next team meeting"
                - "Prepare a walkthrough using one real account as the example"
                - "Write a one-page guide and link it from the field help text"
                - "Answer the session's open questions in writing within a week"
            - name: CRM migration cutover for existing syncs
              description: |-
                ## Purpose
                Moving to a new CRM, or merging two instances after an acquisition, changes every object name, field ID and matching key your syncs depend on. Planning the cutover for activation explicitly, with remapped models, new destination IDs landed, a parallel run and a pause on the old syncs, avoids a launch week where the new CRM fills with duplicates.

                ## Milestones
                1. Every sync remapped to the new CRM's objects and fields on paper.
                2. New destination record IDs landed in the warehouse and joined to entities.
                3. A parallel run into the new CRM's sandbox checked against the old CRM.
                4. Old syncs paused at cutover and new ones switched on in a planned order.

                ## Notes
                Start from the **Risk register** template and log every sync that could create duplicates or overwrite migrated values.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All syncs run against the new CRM within a week of cutover, with no duplicate records created and the old syncs paused."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get the new CRM's object and field list from the migration team"
                - "Remap each sync in the catalogue to the new objects and fields"
                - "Run all syncs in parallel into the new CRM's sandbox and compare"
                - "Pause old syncs and switch on new ones in the agreed cutover order"
            - name: Quarter-end sync freeze with sales operations
              description: |-
                ## Purpose
                Territory changes, ownership reassignments and commission calculations at quarter end make the CRM unusually sensitive, and a sync changing account tiers in the last week can move deals between reps. Agreeing a freeze window with sales operations, in which only critical syncs run and no mappings change, protects the close.

                ## Milestones
                1. A freeze window agreed with sales operations, such as the last five working days of each quarter.
                2. Syncs classed as critical, which keep running, or deferrable, which pause.
                3. No mapping or model changes deployed to production syncs during the window.
                4. Deferred syncs resumed and checked on the first working day of the new quarter.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each quarter-end freeze in the last year was agreed in advance, no mapping changed inside it and deferred syncs resumed the next working day."
                cadence: cyclic
              tasks:
                - "Agree the freeze window dates with sales operations"
                - "Class each sync as critical or deferrable for the freeze"
                - "Announce the freeze and pause deferrable syncs before quarter end @recurring(quarterly)"
                - "Resume deferred syncs and check their first runs after the quarter closes"
            - name: Reverse ETL vendor contract renewal
              description: |-
                ## Purpose
                Renewal notices tend to arrive shortly before the auto-renewal date, often after the window to negotiate or cancel has closed. Preparing each year with actual usage, the syncs that matter, a comparison with alternatives and a decision on tier lets you renew on terms that match how you really use the tool.

                ## Milestones
                1. The renewal date and notice period recorded in the vendor record.
                2. Twelve months of synced rows, destinations and support tickets summarised.
                3. At least one alternative priced, or the reason none is credible written down.
                4. A renewal decision and negotiated terms recorded before the notice deadline.

                ## Notes
                Start from the **Vendor** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The renewal decision was recorded before the notice deadline, backed by a year of usage figures and at least one priced alternative."
                cadence: cyclic
              tasks:
                - "Record the renewal date and notice period in a vendor page"
                - "Summarise twelve months of synced rows and destinations from usage data"
                - "Price one alternative tool or a tier change"
                - "Start renewal preparation ninety days before the notice deadline @recurring(yearly)"
            - name: Mass overwrite recovery drill
              description: |-
                ## Purpose
                Sooner or later a bad mapping or a broken model will write wrong values to thousands of records, and the first time should not be in production at month end. Rehearsing the recovery in a sandbox, from spotting the damage to pausing the sync and restoring values from the audit trail or a destination backup, shows how long it takes and what is missing.

                ## Milestones
                1. A realistic failure scenario written, such as a null tier overwriting ten thousand accounts.
                2. The scenario run in the sandbox with the people who would respond.
                3. Values restored from the audit trail or destination backup, and the time taken recorded.
                4. Gaps found during the drill fixed or logged as risks.

                ## Notes
                Start from the **Risk register** template to log what the drill finds. Check whether each destination offers backups or record history; some keep field history only for a limited period.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A sandbox drill restored overwritten values within an agreed time, with every gap it exposed fixed or entered in the risk register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a failure scenario based on a real near miss or a plausible one"
                - "Run the scenario in the sandbox with the people who would respond"
                - "Restore the values from the audit trail and time the recovery"
                - "Log the gaps found in the risk register"
                - "Rerun the drill with a fresh scenario @recurring(yearly)"
            - name: First syncs for a startup on one CRM and one email tool
              description: |-
                ## Purpose
                Early-stage teams with a single analyst or engineer, one CRM and one email platform do not need a full activation programme; they need two syncs that work. Starting with account usage into the CRM and trial behaviour into the email tool, on a free or starter tier, keeps the effort to days and the bill small.

                ## Milestones
                1. Two use cases chosen: one for sales, one for marketing.
                2. A starter or free tier of a sync tool, or the email tool's own warehouse connector, chosen.
                3. Both syncs live from simple activation models with failure emails switched on.
                4. A one-page note of what was built, for whoever joins next.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two syncs, one to the CRM and one to the email tool, run daily from activation models with failure alerts, and a one-page note describes them."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick one sales and one marketing use case with the founders"
                - "Check whether the CRM or email tool has a built-in warehouse connector"
                - "Build two small activation models and connect the syncs"
                - "Write a one-page note on what syncs where and who to ask"
            - name: Working agreement with marketing ops and CRM admins
              description: |-
                ## Purpose
                Data teams own the models while marketing operations and CRM admins own the tools those models write into, and without an agreement each side changes things that break the other. A short written agreement on who requests, who approves, how changes are announced and how incidents are handled, kept alive by a monthly sit-down, makes the partnership workable.

                ## Milestones
                1. Named contacts on each side for every destination.
                2. A request and approval path for new synced fields and audiences.
                3. Change notice periods agreed in both directions.
                4. A monthly sit-down held for three months, with actions recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An agreed working agreement names contacts, request paths and notice periods for each destination, and three monthly sit-downs are recorded."
                cadence: rolling
              tasks:
                - "Draft a one-page working agreement and ask the agent to tighten the wording"
                - "Review the draft with marketing ops and the CRM admin"
                - "Publish the agreement where both teams can find it"
                - "Hold the activation sit-down with marketing ops and the CRM admin @recurring(monthly:14)"
            - name: Inheriting undocumented syncs from a departed engineer
              description: |-
                ## Purpose
                Taking over syncs from someone who has left usually means credentials under their name, mappings that exist only in the tool's interface and business users who assume it all just works. A structured first thirty days, cataloguing what runs, moving it to integration users and meeting each consumer, turns inherited risk into owned work.

                ## Milestones
                1. Every running sync found and listed, including scripts outside the main tool.
                2. Syncs running under the departed person's login moved to integration users.
                3. Each business consumer met and their expectations noted.
                4. A list of the riskiest syncs with a fix order agreed with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Do not delete anything in the first month; pause and watch who complains.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within forty-five days every inherited sync is catalogued, none runs under a departed person's login, and a prioritised fix list is agreed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Search the sync tool, orchestrator and scheduled scripts for anything writing to destinations"
                - "Move syncs off the departed person's credentials to integration users"
                - "Meet each business consumer and note what they rely on"
                - "Agree the fix order for the riskiest syncs with your manager"
            - name: Enterprise CRM release process for sync changes
              description: |-
                ## Purpose
                Large organisations change their CRM through release trains, change boards and several sandboxes, and a data team that ships mappings on its own schedule will eventually break a release. Fitting sync changes into that process, with tickets, sandbox promotion and release notes, keeps the data team welcome in a heavily governed tool.

                ## Milestones
                1. The CRM release calendar and change process understood and written down.
                2. Sync changes raised as change tickets with impact and rollback notes.
                3. New fields promoted through the same sandbox path as the CRM team's own changes.
                4. Planned sync changes submitted to the CRM release calendar every month.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every sync change in the last quarter went through the CRM change process with a ticket, sandbox promotion and rollback note."
                cadence: rolling
              tasks:
                - "Ask the CRM platform team for the release calendar and change process"
                - "Write a change ticket template for sync changes with impact and rollback"
                - "Promote the next new field through the CRM team's sandbox path"
                - "Submit next month's planned sync changes to the CRM release calendar @recurring(monthly:2)"
            - name: Activation set-up for a client as a consultant
              description: |-
                ## Purpose
                Consultants and agencies setting up reverse ETL for a client have to leave behind something the client can run, in the client's own accounts, with the client's people trained. Scoping the work around the client's top use cases, building in their warehouse and tool accounts and handing over with a runbook avoids becoming the permanent owner of someone else's syncs.

                ## Milestones
                1. Scope agreed in writing: destinations, use cases and what is out of scope.
                2. All work built in the client's warehouse and sync tool accounts, under their integration users.
                3. A runbook covering each sync, its alerts and how to recover from failure.
                4. A handover session held with the client's owner and the runbook accepted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client owns every account and credential, has accepted a runbook for each sync and has a named internal owner after handover."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree scope, destinations and exclusions in writing with the client"
                - "Confirm all accounts and credentials are in the client's name"
                - "Write a runbook for each sync with alerts and recovery steps"
                - "Hold the handover session and get the runbook accepted"
            - name: Event-triggered syncs for near-real-time activation
              description: |-
                ## Purpose
                Batch syncs every hour are too slow for a few actions, such as routing a high-intent sign-up to sales within minutes or pausing ads the moment someone buys. Triggering syncs from events or small incremental models, with ordering, retries and duplicate handling designed in, gets minutes-level latency for the cases that justify it.

                ## Milestones
                1. Up to three use cases with a written reason why hourly is too slow.
                2. An event-triggered or micro-batch sync path built for one of them.
                3. Duplicate and out-of-order delivery handled with idempotent writes.
                4. Latency from event to destination measured and reported against the target.

                ## Notes
                Keep this to cases with a real minutes-level need. Building it for everything multiplies cost and on-call load.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One use case syncs from event to destination within its latency target, with idempotent writes and measured latency over a month."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List cases where an hourly delay loses value and say why"
                - "Choose one case and set its latency target"
                - "Build the triggered sync with idempotent writes and retries"
                - "Measure event-to-destination latency for a month"
            - name: Custom destination built on a vendor API
              description: |-
                ## Purpose
                Niche tools in your stack, such as an in-house admin panel, a regional SMS provider or a partner portal, rarely have a ready-made connector. Building a custom destination, through your sync tool's extension point or a small service, with batching, retries, error reporting and a contract test, gives those teams the same warehouse data without a fragile one-off script.

                ## Milestones
                1. The destination's API reviewed for authentication, batching, limits and error responses.
                2. A custom destination built with batching, retries with backoff and per-row error reporting.
                3. A contract test run in CI against the vendor's sandbox or a recorded mock.
                4. The vendor's API deprecation notices checked every quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A custom destination syncs on schedule with per-row error reporting and passes a contract test in CI."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Read the destination's API reference for auth, batching and limits"
                - "Check whether your sync tool supports custom destinations or webhooks"
                - "Build the destination with batching, retries and per-row errors"
                - "Read the vendor's API changelog for deprecations @recurring(quarterly)"
            - name: Offline conversion uploads to ad platforms
              description: |-
                ## Purpose
                Bidding algorithms optimise towards whatever conversions they are told about, and for a business that closes deals offline that is usually a form fill, not revenue. Uploading qualified opportunities and closed revenue back to each platform with the click identifier or hashed contact data lets bidding favour the campaigns that produce customers.

                ## Milestones
                1. Click identifiers captured at sign-up and stored against leads in the warehouse.
                2. Conversion stages agreed with paid media: qualified, opportunity and closed.
                3. Uploads running on schedule within each platform's lookback window.
                4. Upload match rates and rejected conversions reviewed weekly.

                ## Notes
                Each platform accepts conversions only within a window after the click. Uploads that arrive late are dropped with little warning.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Qualified and closed conversions upload to each ad platform within its lookback window, with weekly match rates recorded for two months."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Check that click identifiers are captured at sign-up and stored on leads"
                - "Agree which conversion stages to upload with the paid media team"
                - "Build the conversion model and schedule uploads per platform"
                - "Review upload match rates and rejected conversions @recurring(weekly:mon)"
            - name: Two-way sync conflict resolution
              description: |-
                ## Purpose
                Certain fields genuinely need edits from both sides: a rep corrects a company's industry in the CRM, and the warehouse should learn it rather than overwrite it. Designing a two-way pattern, ingesting destination edits, applying a precedence rule with timestamps and syncing the resolved value back, stops the overwrite loop without making either side read-only.

                ## Milestones
                1. The fields that need two-way editing listed, kept to a small set.
                2. Destination edits ingested with the editor and timestamp.
                3. A precedence rule per field, such as the most recent human edit winning for ninety days.
                4. No ping-pong updates between systems for a month, checked in field history.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented precedence rule governs each two-way field, and field history shows no repeated overwrites between systems for a month."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "List fields where users' corrections should flow back to the warehouse"
                - "Ingest field history with editor and timestamp from the destination"
                - "Write and implement a precedence rule for each field"
                - "Check field history for overwrite loops after a month"
---

# Reverse ETL & Data Activation

This area is for engineers and data teams who send modelled warehouse data back into the tools where people work: the CRM, the email and ad platforms, the help desk and team chat. It runs from foundations (use cases, the tool decision, destination audits, matching keys, activation models, field ownership and permissions), through the routines that keep syncs healthy and the sync mechanics worth learning properly, to improvements such as usage signals and audiences, dated events, team situations and specialist work like event-triggered syncs, offline conversions and two-way fields.

The rhythms are a daily glance at overnight sync runs, weekly rejected-row triage and conversion match checks, monthly reviews of API consumption, field usage, destination changes, suppression, spend and ad match rates, a monthly sit-down with marketing ops, quarterly catalogue, pruning and freeze work, and yearly renewal, consent and recovery drill reviews. The Purchase decision, Operational checklist, Metrics log, Risk register, Vendor and Onboarding 30/60/90 templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
