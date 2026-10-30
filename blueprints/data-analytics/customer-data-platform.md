---
id: data-analytics.customer-data-platform
name: Customer Data Platform
description: "A customer data platform that earns its licence: use cases first, a tracking plan and identity rules, consent that follows the profile, governed audiences and destinations, and measured personalisation."
category: business
version: 1.0.0
tags: [data-analytics, customer-data-platform, team, enterprise, identity-resolution, segmentation, personalisation, consent]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - operational-checklist
    - vendor
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Customer Data Platform
          description: "Collecting customer events and profiles into one platform for segmentation, personalisation and consistent identity across channels."
          projects:
            - name: Customer data use case inventory
              description: |-
                ## Purpose
                Most CDP programmes that disappoint were bought for a capability rather than a problem, and end up as an expensive event pipe. Writing down the ten to twenty things marketing, product, service and analytics teams would do with unified profiles, each with an owner and a rough value, gives every later decision on vendors, identity and tracking something to be measured against.

                ## Milestones
                1. At least ten use cases listed, each with a one-line description, a requesting team and the channel it acts in.
                2. Each use case scored for expected value and for the data it needs that you do not yet collect.
                3. Two or three launch use cases chosen and signed off by their business owners.
                4. Use cases that need no CDP at all, such as a one-off list export, marked and set aside.

                ## Notes
                Write use cases as outcomes in a channel, for example "stop showing acquisition ads to people who bought in the last 30 days", not as features like "real-time segmentation".
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored list of at least ten customer data use cases exists, with two or three launch use cases signed off by named business owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book thirty-minute interviews with the leads of marketing, product, service and analytics"
                - "Write each use case as an outcome in a named channel with a requesting owner"
                - "Score each use case for value and for data you do not yet collect"
                - "Get sign-off on the two or three launch use cases from their owners"
                - "Rescore the use case list against what has launched and what was learned @recurring(yearly)"
            - name: Customer data source and touchpoint map
              description: |-
                ## Purpose
                Customer data usually sits in eight to fifteen places: the website, apps, the email platform, the e-commerce or billing system, the CRM, support desk, point of sale and ad platforms. A single map of every source, the identifiers each holds and how often it can send data shows which launch use cases are realistic and which need new collection first.

                ## Milestones
                1. Every system that creates or holds customer data listed with its owner.
                2. The identifiers each system holds noted: email, phone, customer number, device ID, cookie ID.
                3. For each source, the available connection method and refresh speed recorded.
                4. The data needed by each launch use case traced to a source or flagged as missing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A source map names every customer data system, its identifiers, its connection method and refresh speed, and links each launch use case to its sources."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every tool your teams log into that holds customer names, emails or IDs"
                - "Ask each system owner which identifiers their records carry"
                - "Record whether each source offers a native connector, an API, a file drop or a warehouse table"
                - "Mark the data each launch use case needs that no source provides yet"
                - "Update the source map for added and retired tools @recurring(yearly)"
            - name: Packaged versus composable CDP decision
              description: |-
                ## Purpose
                A packaged CDP stores its own copy of profiles and comes with collection, identity and audiences built in, while a composable setup keeps profiles in your warehouse and adds collection and activation tools around it. The right answer depends on whether you already have a well-modelled warehouse, the engineers to run it and use cases that need sub-second updates, so it deserves a written decision before anyone sits through a demo.

                ## Milestones
                1. The current warehouse maturity, team skills and latency needs of each launch use case written down.
                2. Both architectures sketched for your launch use cases, with the components each would need.
                3. A three-year cost range for each option, including people as well as licences.
                4. A decision recorded with the reasons and the conditions that would make you revisit it.

                ## Notes
                Hybrids are common: a warehouse as the system of record with a packaged tool for real-time collection and web personalisation. Name which component owns the profile, or you will end up with two that disagree.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written architecture decision chooses packaged, composable or a named hybrid, with three-year costs and the conditions for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the data team how many customer tables in the warehouse are tested and documented"
                - "Note which launch use cases need profile updates within seconds rather than hours"
                - "Sketch the components each architecture needs for the launch use cases"
                - "Estimate three-year licence, infrastructure and staffing costs for both options"
                - "Write the decision and the triggers that would reopen it"
            - name: CDP vendor shortlist and proof of concept
              description: |-
                ## Purpose
                Vendor demos run on clean sample data, and the differences that matter only show up with your own messy events and duplicate customers. Shortlisting three vendors against your use cases and running a time-boxed proof of concept on a real slice of data shows how each handles your identity rules, connectors and audience logic before you sign a multi-year contract.

                ## Milestones
                1. A scoring sheet with weighted criteria drawn from the launch use cases.
                2. Three vendors shortlisted and asked the same written questions.
                3. A two to four week proof of concept run on a sample of real events and profiles with at least two vendors.
                4. A recommendation with scores, references taken and the contract terms to negotiate.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor how pricing scales with profiles, events and destinations, and model your volume three years out, not today.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommended vendor is chosen from a proof of concept on real data with at least two vendors, scored on weighted criteria and backed by two references."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Turn the launch use cases into eight to twelve weighted scoring criteria"
                - "Send the same written question set to three shortlisted vendors"
                - "Prepare a pseudonymised sample of events and profiles for the proof of concept"
                - "Run the proof of concept and score each vendor against the sheet"
                - "Call two reference customers of similar size for the leading vendor"
            - name: Customer event tracking plan
              description: |-
                ## Purpose
                Without a tracking plan, three teams will send "Order Completed", "purchase" and "checkout_success" for the same thing, and every audience built on them will be wrong in a different way. A plan listing each event, its properties, their types and where they fire, plus the identify calls that attach events to people, is the single document the CDP's quality depends on.

                ## Milestones
                1. A naming convention for events and properties agreed, such as object then past-tense action.
                2. Every event needed by the launch use cases listed with properties, types and the platforms that send it.
                3. Identify and alias calls specified: when they fire and which identifiers they carry.
                4. The plan reviewed by engineering, marketing and analytics and stored where developers will find it.

                ## Notes
                Keep the first version small. Twenty well-defined events that power the launch use cases beat two hundred that nobody checks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed tracking plan defines every launch event with typed properties and source platforms, plus the identify calls, and is linked from the engineering wiki."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Export a list of events currently sent from the website and apps"
                - "Agree an event and property naming convention with engineering"
                - "Specify each launch event with its properties, types and sending platforms"
                - "Define when identify calls fire and which identifiers they carry"
                - "Hold a review session with engineering, marketing and analytics"
            - name: Identity resolution rules and identifier priority
              description: |-
                ## Purpose
                Identity rules decide whether a logged-in app user, a newsletter subscriber and an in-store loyalty card become one profile or three. Choosing which identifiers can merge profiles, their priority order and limits such as "no more than one email per profile" prevents both missed matches and the far worse problem of strangers collapsed into one record.

                ## Milestones
                1. Every identifier the CDP will receive listed with how reliable and how unique it is.
                2. A priority order agreed, for example customer ID, then verified email, then phone, then device ID.
                3. Merge limits written for each identifier, including how many of each a single profile may hold.
                4. Rules tested on a sample of real data, with false merges and missed matches counted.

                ## Notes
                Shared and generic values such as test@ addresses, store-default phone numbers or a call centre's email will merge thousands of people. Block-list them before the first load, not after.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written identity rules give a priority order and merge limits for every identifier, tested on sample data with false merge and missed match counts recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every identifier sources will send with a note on how unique it is"
                - "Agree the identifier priority order with data and marketing leads"
                - "Set a per-profile limit for each identifier type"
                - "Build a block-list of shared and placeholder emails and phone numbers"
                - "Test the rules on a sample and count false merges and missed matches"
            - name: Consent signals mapped to profiles and destinations
              description: |-
                ## Purpose
                A CDP makes it very easy to send a profile to an ad platform that the person never agreed to, because consent is collected in one tool and audiences are built in another. Mapping each consent purpose, where it is captured and which destinations it gates, means the platform can enforce what your privacy team has already decided rather than relying on marketers remembering.

                ## Milestones
                1. Every consent purpose and channel preference you collect listed with where it is captured.
                2. Each purpose stored as a profile trait with its timestamp and source.
                3. Each destination mapped to the purposes it requires before data can flow to it.
                4. The mapping reviewed and approved by your privacy lead or data protection officer.

                ## Notes
                This project organises decisions; it does not make them. Which lawful basis applies to which use is a call for your privacy lead or legal adviser, under the rules of the countries you operate in.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consent map links every purpose to a timestamped profile trait and every destination to the purposes it needs, approved in writing by the privacy lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the privacy lead for the current list of consent purposes and channel preferences"
                - "Find where each purpose is captured: banner, sign-up form, preference centre or store"
                - "Map each planned destination to the purposes it requires"
                - "Specify the consent traits, with timestamp and source, in the tracking plan"
                - "Send the mapping to the privacy lead for written approval"
            - name: CDP ownership and operating roles
              description: |-
                ## Purpose
                Sitting between marketing, engineering, analytics and privacy, a CDP that nobody owns breaks quietly while audiences pile up. Naming a platform owner, who approves tracking changes, who can build and activate audiences, and who signs off new destinations turns a shared tool into a run service.

                ## Milestones
                1. A platform owner named, with time in their role set aside for it.
                2. A responsibility chart covering tracking changes, identity rules, audiences, destinations and consent.
                3. User roles in the CDP set to match the chart, with activation rights limited.
                4. The chart published to every team that uses the platform.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published responsibility chart names the owner of each CDP activity, and user permissions in the platform match it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the ten recurring CDP activities from tracking changes to destination approval"
                - "Name a responsible and an approving person for each activity"
                - "Limit the right to activate audiences to the people the chart names"
                - "Publish the chart on the team wiki and link it from the CDP"
                - "Review roles and remove leavers from the CDP @recurring(quarterly)"
            - name: Profile trait naming and schema conventions
              description: |-
                ## Purpose
                Within a year a busy CDP can hold hundreds of traits, and without conventions you get "ltv", "LTV_2024" and "lifetime_value_new" side by side with nobody sure which is current. Agreeing how traits are named, typed, described and marked as computed or imported keeps audience builders from guessing.

                ## Milestones
                1. A naming pattern for traits agreed, including prefixes for computed, imported and predicted traits.
                2. Required fields for every trait: description, owner, source and refresh frequency.
                3. Existing traits renamed or documented to the convention.
                4. A rule that new traits are not created without a description and owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every trait in the CDP follows the agreed naming pattern and has a description, owner, source and refresh frequency filled in."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the current list of profile traits with their types"
                - "Draft a naming pattern with prefixes for computed, imported and predicted traits"
                - "Fill in description, owner, source and refresh frequency for each trait"
                - "Rename or retire traits that break the convention"
            - name: Identifiable customer share baseline
              description: |-
                ## Purpose
                Before go-live, nobody knows what share of website visitors, app users or buyers the CDP can tie to a known person, yet this one number sets the ceiling on every personalisation use case. Measuring it now, along with duplicate rates and profile completeness, gives you the starting line to show progress against.

                ## Milestones
                1. The share of sessions and of purchases tied to a known identifier measured per channel.
                2. Profiles per real customer estimated from a sample.
                3. Completeness measured for the five traits the launch use cases need most.
                4. The baseline written down with the date and method so it can be repeated.

                ## Notes
                Start from the **Metrics log** template. Keep the method identical each quarter, or the trend will measure your method changes rather than the platform.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline records the identifiable share of sessions and purchases per channel, profiles per customer and completeness of five key traits."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a metrics log for identifiable share, duplicates and trait completeness"
                - "Measure the share of last month's purchases tied to a known customer"
                - "Sample two hundred profiles to estimate profiles per real customer"
                - "Repeat the baseline measures with the same method @recurring(quarterly)"
            - name: Weekly audience request queue
              description: |-
                ## Purpose
                Once marketers find they can ask for segments, requests arrive by chat, email and corridor, and the CDP owner spends their week on them. One intake form and a weekly triage, with each request tied to a use case, a destination and an end date, keeps audience building planned and stops near-duplicate segments multiplying.

                ## Milestones
                1. An intake form asking for the goal, the definition in plain words, the destination and an end date.
                2. A weekly triage slot where requests are accepted, merged with an existing audience or declined.
                3. Every live audience tagged with its requester and end date.
                4. Eight weeks of triage run with turnaround times recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly triage sessions are recorded, and every audience built in that time has a requester, destination and end date."
                cadence: rolling
              tasks:
                - "Create an audience request form with goal, definition, destination and end date"
                - "Triage new audience requests and check for an existing match @recurring(weekly:tue)"
                - "Tag each new audience with its requester and end date"
                - "Note the turnaround time for each completed request"
            - name: Weekly tracking plan violation review
              description: |-
                ## Purpose
                Every app release and website change can rename an event, drop a property or send a number as text, and the CDP will often accept it without complaint. Reviewing the violation report each week, and sending each one to the team that caused it, catches broken tracking before an audience silently empties.

                ## Milestones
                1. Schema enforcement or violation reporting switched on for every source.
                2. A weekly review of violations by source, event and volume.
                3. Each violation assigned to an engineering owner with a fix date.
                4. Violations per week tracked and falling over two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly violation reviews run for eight weeks, every violation has an owner, and weekly violation counts fall over the period."
                cadence: rolling
              tasks:
                - "Switch on schema violation reporting for every event source"
                - "Review the week's tracking violations by source and event @recurring(weekly:mon)"
                - "Raise a ticket for each new violation with the team that owns the source"
                - "Record the weekly violation count in the metrics log"
            - name: Monthly identity graph health check
              description: |-
                ## Purpose
                Identity graphs degrade slowly: a new form starts sending a placeholder email, a shared tablet in a shop logs everyone in as one person, and a single profile grows to hold four hundred devices. A monthly look at merge rates, the largest profiles and identifiers over their limits finds these collapses before they reach a campaign.

                ## Milestones
                1. A short list of graph health measures: merges per day, profiles over identifier limits, the twenty largest profiles.
                2. Expected ranges noted for each measure.
                3. A monthly review held, with any oversized or suspicious profile investigated.
                4. The block-list updated whenever a new shared identifier is found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly graph health reviews are recorded, each listing the largest profiles checked and any block-list changes made."
                cadence: rolling
              tasks:
                - "Write a query or report for the twenty profiles with the most identifiers"
                - "Note the expected range for daily merges and oversized profiles"
                - "Review merge rates and the largest profiles for collapses @recurring(monthly:9)"
                - "Add newly found shared identifiers to the block-list"
            - name: Destination sync failure triage
              description: |-
                ## Purpose
                Audiences fail to reach email, ad and support tools for dull reasons: an expired token, a field mapping broken by an admin change, an ad platform's minimum audience size. A weekly scan of sync errors, with a short runbook for the common ones, means campaign owners hear about a failure from you rather than from a flat result.

                ## Milestones
                1. Alerts for failed or partial syncs sent to a shared channel.
                2. A runbook covering the five most common failure causes and their fixes.
                3. A weekly triage of sync errors with each one resolved or assigned.
                4. Campaign owners told within one working day when their audience failed to send.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Failed syncs alert a shared channel, a runbook covers the top five causes, and two months of weekly triage are recorded."
                cadence: rolling
              tasks:
                - "Route failed and partial sync alerts to a shared team channel"
                - "Write a runbook for the five commonest destination sync failures"
                - "Triage the week's destination sync errors and tell affected owners @recurring(weekly:thu)"
                - "Check token and credential expiry dates for every destination"
            - name: Monthly consent reconciliation across destinations
              description: |-
                ## Purpose
                Someone who unsubscribes or withdraws ad consent should drop out of every destination, but deletions and suppressions often fail to propagate, especially to tools fed by older batch syncs. Comparing consent status in the CDP with what each destination actually holds, once a month, is how you find out before a regulator or a complaint does.

                ## Milestones
                1. A list of destinations that receive personal data, with how withdrawals reach each.
                2. A monthly sample of recently withdrawn profiles checked in each destination.
                3. Any mismatch traced to a cause and fixed.
                4. Six months of reconciliations recorded for the privacy lead.

                ## Notes
                Share the monthly record with your privacy lead. It is the evidence they will ask for if consent handling is ever questioned.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reconciliations are recorded, each checking a sample of withdrawn profiles in every destination, with mismatches fixed."
                cadence: rolling
              tasks:
                - "List each destination that receives personal data and how withdrawals reach it"
                - "Check a sample of last month's consent withdrawals in every destination @recurring(monthly:18)"
                - "Trace each mismatch to its cause and log the fix"
                - "Send the reconciliation record to the privacy lead"
            - name: Quarterly audience and trait pruning
              description: |-
                ## Purpose
                Audiences built for last spring's campaign keep syncing to ad platforms, computing on every event and confusing new users who cannot tell which segment is current. A quarterly sweep that retires expired audiences and unused traits lowers compute and licence costs and makes the platform easier to use.

                ## Milestones
                1. A report of audiences and traits with their last use and end dates.
                2. Expired audiences disconnected from destinations and archived.
                3. Traits unused by any audience for two quarters retired after checking with their owners.
                4. The count of live audiences and traits recorded each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly sweeps are completed, each archiving expired audiences and recording the count of live audiences and traits."
                cadence: rolling
              tasks:
                - "Export audiences and traits with last-used and end dates"
                - "Archive expired audiences and retire unused traits @recurring(quarterly)"
                - "Ask owners before retiring any trait used in the last two quarters"
                - "Record the count of live audiences and traits after each sweep"
            - name: Tracked profile volume and licence cost review
              description: |-
                ## Purpose
                CDP pricing is usually tied to monthly tracked users, profiles, events or API calls, and a bot spike, an anonymous visitor flood or a chatty mobile SDK can push you into the next tier without anyone deciding to spend more. A monthly look at usage against the contracted allowance keeps the bill predictable and gives you facts for the renewal.

                ## Milestones
                1. The contracted allowances and overage rates written down.
                2. A monthly usage report broken down by source.
                3. Bot traffic and noisy events identified and filtered where they add no value.
                4. Usage forecast to the end of the contract year updated each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly usage is compared with contracted allowances for six months, with a year-end forecast updated each time and no unplanned overage."
                cadence: rolling
              tasks:
                - "Write down the contract's allowances and overage rates"
                - "Compare this month's tracked users and events with the allowance by source @recurring(monthly:23)"
                - "Filter known bot traffic and events no use case needs"
                - "Update the forecast to the end of the contract year"
            - name: Tracking plan change control for releases
              description: |-
                ## Purpose
                Most tracking breaks arrive with a product release, because event changes are made by developers who never saw the tracking plan. Building a tracking check into the release process, with a plan update, a test in a staging source and a published changelog, means downstream audiences and reports change on purpose.

                ## Milestones
                1. A tracking checklist added to the definition of done for front-end and app work.
                2. A staging source in the CDP where new tracking is tested before release.
                3. A changelog of event and property changes published to CDP users.
                4. Three releases shipped through the process with no unplanned tracking breaks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive releases include tracking plan updates tested in staging, with each change listed in the published changelog."
                cadence: rolling
              tasks:
                - "Add a tracking plan check to the engineering definition of done"
                - "Set up a staging source in the CDP for testing new events"
                - "Publish the tracking changelog to CDP users @recurring(monthly:3)"
                - "Review the last three releases for tracking changes that skipped the process"
            - name: Access and erasure requests across the CDP
              description: |-
                ## Purpose
                When a customer asks for their data or asks to be deleted, a CDP holds copies in its own store and has pushed more copies to every destination. A written procedure that finds every profile linked to the person, exports or deletes it, and passes the request on to destinations makes a statutory deadline routine instead of a scramble.

                ## Milestones
                1. A procedure for finding all profiles linked to a requester across identifiers.
                2. Export and deletion steps written for the CDP and each destination.
                3. Every request logged with dates received, actioned and confirmed.
                4. Requests closed inside the deadline your privacy lead sets, checked monthly.

                ## Notes
                Statutory deadlines and exemptions differ between countries. Agree them with your privacy lead and record the rule in the procedure.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written procedure covers the CDP and every destination, and the request log shows all requests closed within the agreed deadline for three months."
                cadence: rolling
              tasks:
                - "Ask the privacy lead for the request deadline and the intake route"
                - "Write lookup, export and deletion steps for the CDP and each destination"
                - "Log each request with received, actioned and confirmed dates"
                - "Check that every open request is on course for its deadline @recurring(monthly:12)"
            - name: Quarterly CDP stakeholder review
              description: |-
                ## Purpose
                Teams that fund a CDP lose interest when they hear about it only at renewal. A quarterly review with the business owners of each use case, covering what launched, what it achieved, what broke and what comes next, keeps the roadmap tied to the people who benefit and surfaces new use cases early.

                ## Milestones
                1. A standing quarterly meeting with use case owners, engineering and privacy.
                2. A one-page update covering launches, results, incidents and the next quarter's plan.
                3. Decisions and new requests written up and sent within two days.
                4. Four reviews held in a year with attendance from each use case owner.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four quarterly reviews are held in twelve months, each with a written update and decisions sent to attendees within two days."
                cadence: cyclic
              tasks:
                - "Book a quarterly hour with use case owners, engineering and privacy"
                - "Prepare the one-page CDP update on launches, results and incidents @recurring(quarterly)"
                - "Send decisions and new requests to attendees within two days"
            - name: Deterministic and probabilistic identity stitching
              description: |-
                ## Purpose
                Vendors describe identity resolution in glossy terms, but underneath it is either exact matching on shared identifiers or statistical guessing from signals such as IP address and device. Understanding how each works, where each fails and how your vendor combines them lets you set rules with your eyes open and explain match rates to sceptical stakeholders.

                ## Milestones
                1. Deterministic matching, probabilistic matching and identity graph concepts explained in your own words.
                2. Your CDP's documentation on identity read, with its merge logic summarised.
                3. Three worked examples traced: an anonymous visitor who logs in, a shared device and an email change.
                4. A one-page explainer written for marketers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explainer of how your CDP stitches identity, with three worked examples, is reviewed by the platform owner and shared with marketers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read your CDP's identity resolution documentation end to end"
                - "Trace how an anonymous visitor's events attach to a profile at login"
                - "Work through what happens when a customer changes their email address"
                - "Ask the agent to draft a one-page identity explainer for marketers from your notes"
            - name: Writing computed traits and audience logic
              description: |-
                ## Purpose
                Audience builders who mix up "has ever done" with "did in the last 30 days", or who chain conditions with the wrong and or or, send campaigns to the wrong people with total confidence. Practising computed traits, time windows and nested conditions on real examples gives marketers and analysts the precision the platform assumes they have.

                ## Milestones
                1. Event counts, sums, most-recent values and time windows each used in a practice trait.
                2. Five audiences built from plain-language briefs and checked against a warehouse query.
                3. Common logic traps written down, such as or conditions across events.
                4. A shared library of reusable trait and audience patterns.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five practice audiences match an independent warehouse count within five percent, and a pattern library is published for the team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build one practice trait each for count, sum, most recent value and time window"
                - "Write five plain-language audience briefs from real past campaigns"
                - "Build each audience and compare its size with a warehouse query"
                - "Publish the patterns and logic traps you found to the team wiki"
            - name: Client-side versus server-side collection
              description: |-
                ## Purpose
                Events collected in the browser are easy to add but are blocked, lost and slowed by ad blockers, cookie limits and page performance, while server-side events are reliable but need engineering and lose some context. Knowing which events belong where lets you defend the right split instead of following the last vendor pitch.

                ## Milestones
                1. The trade-offs of browser, mobile SDK and server-side collection written down.
                2. Your current events classified by where they are collected.
                3. The share of events lost to blockers estimated by comparing browser and server counts for one event.
                4. A recommended collection method recorded for each event family.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every event family in the tracking plan has a recommended collection method, supported by a measured browser versus server count comparison."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read your CDP's guidance on browser, mobile and server sources"
                - "Classify each tracked event by where it is collected today"
                - "Compare browser and server counts for completed orders over one week"
                - "Record a recommended collection method per event family"
            - name: Browser tracking prevention and first-party identifiers
              description: |-
                ## Purpose
                Browser privacy features shorten cookie lifetimes, strip link parameters and block third-party scripts, so a returning visitor may look brand new after a week. Learning what current browsers do, and what first-party, consented approaches remain open, explains drops in identifiable traffic and stops the team chasing workarounds that would breach user trust.

                ## Milestones
                1. The main tracking prevention behaviours of the browsers your customers use summarised.
                2. Your own site's cookie lifetimes checked in each major browser.
                3. The effect on returning-visitor recognition estimated from your data.
                4. A short list of consented first-party measures, such as login incentives, agreed with the privacy lead.

                ## Notes
                Fingerprinting and other covert identification techniques are off the table. They undermine consent and are restricted in many jurisdictions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of browser tracking limits on your own site, with measured cookie lifetimes and agreed first-party measures, is shared with marketing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check your browser share by customer from the web analytics tool"
                - "Inspect your site's cookie lifetimes in the two most-used browsers"
                - "Estimate how many returning visitors are recognised after seven days"
                - "Agree a list of consented first-party measures with the privacy lead"
            - name: Consent and lawful basis basics for CDP users
              description: |-
                ## Purpose
                Marketers with audience-building rights make privacy decisions every day without noticing, such as reusing service data for advertising or uploading emails to an ad platform. A short course on consent purposes, data minimisation and what your own policy allows gives everyone with activation rights the judgement to ask before they act.

                ## Milestones
                1. A one-hour session written with the privacy lead using examples from your own platform.
                2. Everyone with audience or destination rights attending it.
                3. A one-page "ask first" list of activities that need privacy sign-off.
                4. Completion recorded and repeated for new users.

                ## Notes
                Your privacy lead or legal adviser owns the content. This session explains your organisation's rules; it does not interpret the law.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every CDP user with activation rights has completed the privacy session, and the \"ask first\" list is published inside the platform workspace."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the privacy lead to co-write a one-hour session for CDP users"
                - "Collect five real examples from your platform for the session"
                - "Run the session for everyone with audience or destination rights"
                - "Publish the one-page ask first list in the CDP workspace"
            - name: Querying CDP event and profile tables in the warehouse
              description: |-
                ## Purpose
                Most CDPs can land raw events, identity mappings and profile snapshots in the warehouse, but the tables are wide, nested and easy to double-count. Learning their structure lets analysts check audience sizes, build reports on unified customers and answer questions the CDP's own interface cannot.

                ## Milestones
                1. The CDP's warehouse tables and their grain documented.
                2. Queries written to join events to resolved profiles without duplicating rows.
                3. One audience size reproduced in the warehouse within a small margin.
                4. Starter queries saved where the analytics team keeps shared queries.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Documented starter queries join CDP events to resolved profiles correctly, and one live audience is reproduced in the warehouse within two percent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the CDP tables in the warehouse and note the grain of each"
                - "Write a query joining events to resolved profile IDs"
                - "Reproduce one live audience size in the warehouse"
                - "Save the starter queries in the team's shared query folder"
            - name: Testing an audience before it goes live
              description: |-
                ## Purpose
                An audience that looks right in the builder can still be empty in the ad platform, include staff and test accounts, or hold customers who opted out yesterday. A short, repeatable test routine before activation, covering size, sample profiles, exclusions and consent, catches the errors that would otherwise be found by a customer.

                ## Milestones
                1. A pre-activation test routine of five or six checks written down.
                2. Staff, test and seed accounts identified by a shared exclusion trait.
                3. The routine practised on three existing audiences, with any errors found noted.
                4. The routine made part of the audience request process.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pre-activation routine is applied to three existing audiences, and it is required for every new audience in the request process."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a six-point audience test covering size, samples, exclusions and consent"
                - "Create a shared trait that marks staff, test and seed accounts"
                - "Run the test on three live audiences and note the problems found"
                - "Add the test to the audience request form as a required step"
            - name: Server-side event forwarding migration
              description: |-
                ## Purpose
                Pages that load a dozen marketing scripts are slow, leak data to vendors you never chose and lose events to blockers. Moving key events to server-side forwarding through the CDP, so the browser sends one stream and the CDP passes it on under consent rules, improves page speed and data control at once.

                ## Milestones
                1. The vendors currently receiving data from browser scripts listed.
                2. Priority events chosen for server-side forwarding, starting with purchases and sign-ups.
                3. Each forwarded event checked against the old browser counts for two weeks.
                4. The replaced browser scripts removed and page load measured before and after.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Purchase and sign-up events reach their vendors through server-side forwarding, the old scripts are removed, and page load time is measured before and after."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every vendor script on the site and the data it receives"
                - "Choose the first events to forward server-side"
                - "Run old and new forwarding side by side and compare counts for two weeks"
                - "Remove the replaced browser scripts and measure page load"
            - name: Mobile app SDK instrumentation
              description: |-
                ## Purpose
                Apps often carry tracking added years ago by a different team, with events that differ from the website for the same action. Instrumenting the CDP's mobile SDK to the shared tracking plan, with identify calls at login and consent respected on device, makes app customers first-class profiles rather than a separate island.

                ## Milestones
                1. The app's existing events mapped to the tracking plan, with gaps listed.
                2. The CDP SDK added to both platforms with consent handling in place.
                3. Identify calls firing at sign-up and login with the agreed identifiers.
                4. App and web events for the same action verified as identical in name and properties.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Both app platforms send tracking plan events through the CDP SDK with identify calls at login, verified against web events for the same actions."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Map the app's current events against the tracking plan"
                - "Agree the SDK release with the mobile engineering lead"
                - "Test identify calls at sign-up and login in a staging build"
                - "Compare app and web events for the same five actions"
            - name: Offline and in-store purchase ingestion
              description: |-
                ## Purpose
                For retailers, restaurants and service businesses, the biggest share of revenue may happen at a till or by phone, invisible to a CDP fed only by digital events. Bringing in point of sale and call centre transactions, matched on loyalty number, email or phone, completes the profile and makes "bought in store last week" a usable audience.

                ## Milestones
                1. Offline sources and the identifiers captured at each listed.
                2. A daily or near-real-time feed of offline transactions into the CDP.
                3. Match rates of offline transactions to known profiles measured by store or channel.
                4. One audience in use that depends on offline purchases.

                ## Notes
                Low match rates usually come from tills that never ask for an identifier. Fixing capture at the counter often beats any amount of matching logic.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Offline transactions load into the CDP daily, match rates are reported by store or channel, and one live audience uses offline purchase data."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every offline sales channel and the identifiers it captures"
                - "Agree a daily transaction feed format with the point of sale team"
                - "Measure the share of offline transactions matched to a profile by store"
                - "Build one audience that uses in-store purchases"
            - name: Support tickets and CRM history in profiles
              description: |-
                ## Purpose
                Marketing that cheerfully promotes an upgrade to someone with three open complaints damages trust fast. Adding support and CRM signals to profiles, such as open tickets, recent satisfaction scores and account manager, lets audiences exclude unhappy customers and lets service agents see recent behaviour.

                ## Milestones
                1. The support and CRM fields useful for audiences chosen with both teams.
                2. Those fields syncing into profile traits on an agreed schedule.
                3. An exclusion rule for customers with open high-severity tickets applied to promotional audiences.
                4. Agents able to see recent web and app activity in the support tool, where wanted.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Open ticket and satisfaction traits sync to profiles, and every promotional audience excludes customers with open high-severity tickets."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the support lead which ticket fields marketing should respect"
                - "Map the chosen support and CRM fields to profile traits"
                - "Add an open-complaint exclusion to every promotional audience"
                - "Ask agents whether recent activity in the support tool would help them"
            - name: Existing customer suppression in paid media
              description: |-
                ## Purpose
                Paying to show acquisition ads to people who already bought is one of the commonest and most measurable wastes in marketing. Syncing recent purchasers and active subscribers to ad platforms as exclusion lists is usually the fastest CDP use case to pay back, and it gives a clean before and after number.

                ## Milestones
                1. Suppression audiences defined for recent purchasers and active subscribers.
                2. Each audience syncing to the ad platforms with match rates noted.
                3. Acquisition campaigns set to exclude them, confirmed with the paid media team.
                4. Spend previously reaching existing customers estimated before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Purchaser and subscriber suppression lists sync to every ad platform, all acquisition campaigns exclude them, and the spend saved is estimated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the paid media team which acquisition campaigns lack exclusions"
                - "Build suppression audiences for recent purchasers and active subscribers"
                - "Connect them to each ad platform and record the match rates"
                - "Estimate spend reaching existing customers before and after the change"
            - name: Website personalisation from live traits
              description: |-
                ## Purpose
                Showing a returning customer the same first-visit offer as a stranger wastes the most valuable space on the site. Using a handful of live profile traits, such as customer status, last category browsed or loyalty tier, to change one or two page areas is a contained first step into personalisation, and easy to test.

                ## Milestones
                1. Two page areas and three audiences chosen for personalisation.
                2. Content variants written for each audience with a default for unknown visitors.
                3. Traits available to the site within the latency the page needs.
                4. The change tested against a control group with results written up.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two page areas show audience-specific content from live traits, tested against a control group with a written readout."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose two page areas and three audiences to personalise"
                - "Write content variants plus a default for unknown visitors"
                - "Check trait lookups return quickly enough for page rendering"
                - "Set up a control group and write up the results after four weeks"
            - name: Retiring legacy tags and duplicate pixels
              description: |-
                ## Purpose
                Years of campaigns leave tag managers full of pixels for agencies long gone, duplicate analytics tags and scripts that fire before consent. Auditing and removing them once the CDP sends the same data cuts page weight and stops data leaving for vendors you no longer use.

                ## Milestones
                1. Every tag in the tag manager and hard-coded on the site listed with its vendor and purpose.
                2. Each tag marked keep, replace with CDP forwarding or remove.
                3. Removed tags taken out with marketing sign-off.
                4. Tags firing before consent fixed or removed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every site tag is listed with a decision, unused tags are removed, and no tag fires before the visitor's consent choice."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export every tag and trigger from the tag manager"
                - "Scan the site for hard-coded scripts outside the tag manager"
                - "Mark each tag keep, replace or remove and get marketing sign-off"
                - "Test that no tag fires before a consent choice is made"
            - name: Trait retention and expiry rules
              description: |-
                ## Purpose
                Profiles that keep every event and trait forever grow costly and hold personal data long past its purpose. Deciding how long raw events, computed traits and inactive profiles are kept, and what happens to dormant anonymous profiles, keeps storage and licence volumes in check and matches your retention policy.

                ## Milestones
                1. Retention periods for events, traits and inactive profiles agreed with the privacy lead.
                2. Anonymous profiles with no activity for an agreed period set to expire.
                3. Retention settings configured in the CDP and in its warehouse tables.
                4. The rules recorded in the retention schedule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Retention periods for events, traits and profiles are agreed, configured in the CDP and warehouse, and recorded in the retention schedule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the privacy lead for the retention policy covering customer data"
                - "Propose retention periods for events, traits and inactive profiles"
                - "Configure expiry for anonymous profiles with no recent activity"
                - "Review retention settings against the policy @recurring(yearly)"
            - name: Historical customer data backfill
              description: |-
                ## Purpose
                Switched on today, a CDP knows nothing about the customer who bought ten times last year, so lifetime and recency traits start empty. A planned backfill of order history, past subscriptions and key events, loaded in the right order for identity rules, means the first audiences are useful on day one.

                ## Milestones
                1. The history to load chosen, with how many years and which sources.
                2. Load order planned so identifiers arrive before events that depend on them.
                3. A test load of one month reviewed for match rates and duplicate profiles.
                4. The full backfill loaded and trait values spot-checked against source systems.

                ## Notes
                Check whether historic loads count towards your event or profile allowance. Some contracts charge for them, and vendors will often waive it if asked before signing.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The agreed years of history are loaded, and twenty sampled profiles show traits matching the source systems."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree how many years of history each launch use case needs"
                - "Ask the vendor whether historic loads count against the allowance"
                - "Run a one-month test load and check match rates"
                - "Spot-check twenty profiles against the source systems after the full load"
            - name: CDP go-live for the first two use cases
              description: |-
                ## Purpose
                Going live is the moment the platform stops being a project and starts sending data to customers' inboxes and ad feeds, so mistakes become visible. A dated go-live for two use cases, with a checklist, named owners and a rollback plan, gets real value out the door without betting everything on a big launch.

                ## Milestones
                1. A go-live checklist covering tracking, identity, consent, audiences, destinations and monitoring.
                2. Owners named for each checklist item and a go or no-go meeting held.
                3. Both use cases live, with a rollback step written for each.
                4. A two-week review of results and issues sent to sponsors.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two launch use cases are live by the go-live date, with a signed checklist and a two-week review sent to sponsors."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Create the go-live checklist and assign an owner to each item"
                - "Write a rollback step for each launch use case"
                - "Hold a go or no-go meeting the week before launch"
                - "Send sponsors a two-week review of results and issues"
            - name: First personalised campaign launch with a holdout
              description: |-
                ## Purpose
                The first triggered campaign built on unified profiles, such as browse abandonment or a post-purchase sequence, is where sponsors expect to see the CDP pay off. Launching it with a randomised holdout group from day one means you can show the extra revenue or retention it produced rather than claiming credit for customers who would have bought anyway.

                ## Milestones
                1. A campaign chosen with its trigger, audience, messages and success measure.
                2. A holdout group of around ten percent agreed and set up before launch.
                3. The campaign live with sends, conversions and unsubscribes tracked.
                4. A readout comparing the treated group with the holdout after the agreed period.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A triggered campaign runs with a randomised holdout, and a readout compares conversion between treated and holdout groups after the agreed period."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the first triggered campaign and its success measure"
                - "Agree the holdout size and how long it runs with the campaign owner"
                - "Launch the campaign with sends and conversions tracked"
                - "Write up treated versus holdout results at the end of the period"
            - name: Annual CDP contract renewal
              description: |-
                ## Purpose
                CDP renewals often arrive with price rises tied to volume growth, and your bargaining position weakens once the notice period passes. Starting four to six months before renewal with a usage history, a value summary and a clear view of alternatives turns the conversation from a quote into a negotiation.

                ## Milestones
                1. The renewal date, notice period and price change clauses recorded.
                2. Twelve months of usage and a forecast for the next term prepared.
                3. Unused modules and seats identified for removal.
                4. Terms agreed and signed before the notice deadline.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The renewal is signed before the notice deadline, with a usage forecast prepared and unused modules removed or repriced."
                cadence: cyclic
              tasks:
                - "Write the renewal date and notice period into the vendor record"
                - "Start renewal preparation six months before the renewal date @recurring(yearly)"
                - "List modules, seats and destinations nobody used this year"
                - "Prepare twelve months of usage and a forecast for the next term"
            - name: Annual CDP value readout to sponsors
              description: |-
                ## Purpose
                Sponsors approve a CDP on promised use cases and then hear little about whether they delivered. A yearly readout that sets measured outcomes, such as holdout-tested revenue, media saved through suppression and hours saved on list pulls, against total cost decides whether the platform grows, holds or shrinks.

                ## Milestones
                1. Every live use case listed with its measured outcome and how it was measured.
                2. Total cost of ownership calculated, including licence, engineering and data team time.
                3. A two-page readout with results, lessons and next year's proposed use cases.
                4. A sponsor decision on next year's scope recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly readout sets measured outcomes against total cost, and the sponsor decision on next year's scope is recorded."
                cadence: cyclic
              tasks:
                - "Collect measured outcomes for every live use case"
                - "Calculate total cost including licence, engineering and data team time"
                - "Present the CDP value readout and record the sponsor decision @recurring(yearly)"
            - name: Starter CDP for a marketing team without engineers
              description: |-
                ## Purpose
                Smaller teams often want unified profiles but have no data engineer and a tight budget. Starting with the CDP features of tools you may already own, or a lightweight CDP with no-code connectors, a short tracking plan and two use cases, gets most of the value while keeping the work inside marketing's skills.

                ## Milestones
                1. The CDP-like features of your existing email, e-commerce and analytics tools listed.
                2. A decision between those features and a lightweight CDP, with monthly cost.
                3. A tracking plan of no more than fifteen events set up with no-code connectors.
                4. Two use cases live, such as welcome and win-back emails.

                ## Notes
                Ask an agency or freelance developer to check identify calls and consent handling once, even if you build everything else yourselves.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A marketing-run setup with fifteen or fewer events has two live use cases, at a recorded monthly cost."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the segmentation and profile features of tools you already pay for"
                - "Price one lightweight CDP with no-code connectors"
                - "Write a tracking plan of fifteen events or fewer"
                - "Launch welcome and win-back emails from unified profiles"
            - name: Multi-brand and multi-region CDP rollout
              description: |-
                ## Purpose
                Groups with several brands or countries must decide whether customers are shared across them, which consent applies where, and whether each region gets its own space or shares one. Settling the space design, data residency needs and local consent before the second brand joins avoids rebuilding the platform later.

                ## Milestones
                1. A decision on shared or separate customer profiles across brands, with the privacy reasoning recorded.
                2. Data residency requirements for each region confirmed with legal.
                3. Workspace, naming and permission patterns that every brand follows.
                4. The second brand or region onboarded to the pattern.

                ## Notes
                Whether profiles can be shared across brands depends on what customers were told and local law. Get the privacy lead's written view first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written multi-brand design covers profile sharing, residency and permissions, and a second brand or region is live on it."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask legal which regions have data residency requirements"
                - "Decide with the privacy lead whether profiles are shared across brands"
                - "Write workspace, naming and permission patterns for every brand"
                - "Onboard the second brand to the agreed pattern"
                - "Compare tracking plans across brands for drift @recurring(monthly:27)"
            - name: Migrating from one CDP to another
              description: |-
                ## Purpose
                Switching CDPs means rewiring every source, rebuilding audiences and keeping campaigns running throughout, usually against a contract end date. Inventorying everything the old platform does, running both in parallel and cutting over destination by destination keeps customers from noticing the change.

                ## Milestones
                1. An inventory of sources, traits, audiences and destinations in the old platform, marked keep or drop.
                2. A migration plan with a parallel run period ending before the old contract does.
                3. Audience sizes in old and new platforms compared within an agreed tolerance.
                4. Destinations cut over one at a time and the old platform switched off.

                ## Notes
                Ask the old vendor early how you can export identity mappings and historic events. Contracts rarely make this easy, and it sets your timeline.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All kept audiences and destinations run on the new platform with sizes within tolerance, and the old platform is switched off before its contract ends."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Export the old platform's lists of sources, traits, audiences and destinations"
                - "Ask the old vendor how identity mappings and history can be exported"
                - "Compare audience sizes between platforms during the parallel run"
                - "Cut over destinations one at a time and record each switch"
            - name: Account-level profiles for B2B buying groups
              description: |-
                ## Purpose
                Business buyers rarely act alone: a deal involves five to ten people at one company, and person-level profiles miss that a whole account is warming up. Adding account objects to the CDP, linked to people and to the CRM account, lets marketing build audiences such as "accounts where three people viewed pricing this month".

                ## Milestones
                1. The account identifier chosen, usually the CRM account ID, with matching rules for email domains.
                2. People linked to accounts and account traits computed from their activity.
                3. Two account-level audiences built and synced to sales or ad tools.
                4. Sales feedback collected on whether account signals were useful.

                ## Notes
                Free email domains such as webmail providers must never be used to group people into accounts.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "People are linked to CRM accounts, two account-level audiences are live, and sales feedback on them is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the account identifier and domain matching rules with sales operations"
                - "Exclude free webmail domains from account matching"
                - "Build two account-level audiences from combined activity"
                - "Ask three account executives whether the signals helped"
            - name: Loyalty programme members in the CDP
              description: |-
                ## Purpose
                Loyalty members are the most identifiable customers you have, yet their tier, points balance and redemption history often sit in a separate platform. Bringing loyalty data into profiles turns points and tiers into audience criteria and lets every channel recognise a member, not just the loyalty app.

                ## Milestones
                1. Loyalty fields to bring in chosen: member ID, tier, points balance, last redemption.
                2. Loyalty member ID added to the identity rules at the right priority.
                3. Loyalty traits refreshing on a schedule that fits the use cases.
                4. One audience in use built on tier or points, such as members close to the next tier.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Loyalty traits refresh into profiles on an agreed schedule, member ID is in the identity rules, and one loyalty-based audience is live."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the loyalty team which member fields they can share"
                - "Add loyalty member ID to the identity priority order"
                - "Schedule the loyalty trait refresh"
                - "Build an audience of members within reach of the next tier"
            - name: Onboarding a new CDP user
              description: |-
                ## Purpose
                New marketers and analysts given CDP access tend to build a fresh audience rather than find the existing one, and nobody tells them which traits to trust. A short onboarding with the platform owner covering conventions, testing, privacy rules and the request process gets them productive in a week and keeps the platform tidy.

                ## Milestones
                1. An onboarding plan covering roles, conventions, audience testing and privacy.
                2. Access granted at the right level for the person's role.
                3. The privacy session and audience test routine completed.
                4. A first audience built with the platform owner reviewing it.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new user has role-appropriate access, has completed the privacy session and built one reviewed audience within two weeks of starting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create an onboarding plan from the template for the new user"
                - "Grant access at the level the responsibility chart sets for the role"
                - "Walk the new user through naming conventions and the audience test"
                - "Review the first audience they build before it is activated"
            - name: Real-time profile lookups for in-session decisions
              description: |-
                ## Purpose
                Some use cases, such as changing a homepage banner, deciding a support routing or suppressing an offer during checkout, need a profile answer within tens of milliseconds while the customer is still there. Designing profile API lookups with latency budgets, caching and a safe default keeps a slow CDP from becoming a slow website.

                ## Milestones
                1. In-session use cases listed with the latency each can tolerate.
                2. The traits each lookup needs kept to a minimal set.
                3. Caching and a default response defined for when the lookup is slow or fails.
                4. Latency and error rates monitored against the budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every in-session lookup has a latency budget, a cached minimal trait set and a default response, with latency monitored against the budget."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List in-session use cases and the latency each can tolerate"
                - "Reduce each lookup to the fewest traits it needs"
                - "Define the default response when the profile lookup times out"
                - "Review profile lookup latency and error rates against the budget @recurring(monthly:15)"
            - name: Incrementality testing for CDP audiences
              description: |-
                ## Purpose
                Audiences built from engaged customers always look successful, because those customers were going to buy anyway. A standing programme of holdout tests across the main audiences and channels separates the lift the CDP creates from the credit it collects, and points spend at the audiences that truly move behaviour.

                ## Milestones
                1. A standard holdout method with randomisation, size and duration rules written down.
                2. Holdouts in place for the five highest-spend audiences.
                3. Each test read out with lift and its uncertainty, not just conversion rate.
                4. Audience spend changed where tests show little or no lift.

                ## Notes
                Small audiences need long tests to show anything. Pool similar audiences or run fewer, longer tests rather than declaring winners on noise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The five highest-spend audiences each have a completed holdout test with lift and uncertainty reported, and at least one spend decision follows."
                cadence: rolling
              tasks:
                - "Write the standard holdout method with the analytics lead"
                - "Set up holdouts on the five audiences with the highest spend"
                - "Read out audience holdout results with lift and uncertainty @recurring(quarterly)"
                - "Change spend on audiences that show little or no lift"
            - name: Data clean room collaboration with partners
              description: |-
                ## Purpose
                Retail media networks, publishers and brand partners increasingly offer clean rooms, where both sides' customer data is matched and analysed without either seeing the other's records. Running a first clean room project with a clear question, consent checks and agreed output rules shows whether it is worth more than a standard audience upload.

                ## Milestones
                1. One partner and one question chosen, such as overlap or campaign reach.
                2. Consent and contract terms for the data you would contribute checked with the privacy lead.
                3. Output rules agreed, including minimum group sizes in results.
                4. The analysis run and its value compared with a normal audience upload.

                ## Notes
                A clean room does not make data sharing lawful by itself. The purposes your customers agreed to still apply.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One clean room analysis is completed with a partner under privacy-approved terms, and a written comparison with a standard audience upload is recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose one partner and one question for a first clean room test"
                - "Ask the privacy lead to review the contract and consent basis"
                - "Agree minimum group sizes for any result that leaves the clean room"
                - "Write up the result and compare it with a standard audience upload"
            - name: Household and shared-device identity
              description: |-
                ## Purpose
                Families share a tablet, a smart TV account or a delivery address, and treating them as one person sends a child's browsing to a parent's ads, while ignoring the link misses that the household is the buying unit. Modelling households as a separate layer above individual profiles, with rules on when not to merge, lets you use both views safely.

                ## Milestones
                1. Household signals chosen, such as shared address or account, with their reliability noted.
                2. Households modelled as a group linked to individuals rather than merged profiles.
                3. Rules written for shared devices so their events do not merge separate people.
                4. One household-level use case tested, such as frequency capping per address.

                ## Notes
                Do not infer sensitive facts about household members, such as children or relationships, for targeting without explicit privacy approval.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Households exist as a linked layer above individual profiles with written shared-device rules, and one household use case has been tested."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List household signals you hold and rate each for reliability"
                - "Design households as a group object linked to individual profiles"
                - "Write rules that stop shared devices merging different people"
                - "Test frequency capping per household on one campaign"
---

# Customer Data Platform

This area is for marketing, product and data teams, and the enterprise programmes behind them, who want one place where customer events and profiles come together and flow out to the tools that act on them. It starts with foundations (use cases, a source map, the packaged or composable decision, vendor selection, the tracking plan, identity and consent rules, roles and a baseline), then the operating rhythm of audience requests, violation reviews, identity and destination checks, the skills behind stitching, audience logic and collection methods, the improvements from server-side forwarding to suppression and personalisation, the dated backfill, go-live and renewal, situations from a team without engineers to a multi-brand rollout or a vendor migration, and finally real-time lookups, incrementality, clean rooms and household identity.

What repeats is a Monday tracking plan review, a Tuesday audience queue and a Thursday look at failed syncs, monthly identity graph, consent, cost and request checks on varied days, quarterly pruning and stakeholder reviews, and a yearly renewal and value readout. The Purchase decision, Metrics log, Meeting notes, Operational checklist, Vendor and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
