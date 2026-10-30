---
id: product-management.third-party-integration-priorities
name: Third-Party Integration Priorities
description: "Which integrations to build next and why: an inventory and demand evidence, a scoring model, routines that keep the portfolio and partners healthy, and the founder, enterprise and platform calls behind them."
category: business
version: 1.0.0
tags: [product-management, third-party-integration-priorities, team, founder, enterprise, integrations, partnerships, app-marketplace]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - purchase-decision
    - product-spec
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Third-Party Integration Priorities
          description: "Deciding which integrations with other tools to build or support, based on customer demand, deal impact and partner value."
          projects:
            - name: Live integration inventory and health snapshot
              description: |-
                ## Purpose
                Most products that have shipped for a few years carry more integrations than anyone can list: the native CRM sync, a chat app built in a hackathon, partner-built connectors on someone else's marketplace and a stack of automation platform templates. A single inventory of every integration, who built it, who owns it, how many accounts use it and how often it fails is the starting point for every priority call in this area, because you cannot rank new work against a portfolio you cannot see.

                ## Milestones
                1. Every native, partner-built and automation platform integration listed in one table.
                2. Builder, internal owner and support tier recorded against each entry.
                3. Connected accounts and sync error rate for the last 90 days noted where data exists.
                4. Integrations with no owner or under 1 percent adoption flagged for a decision.

                ## Notes
                Search the marketplace listings of your largest partners as well as your own code. Partner-built integrations that customers think are yours generate support tickets you will receive anyway.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory listing every live integration with builder, owner, connected accounts and error rate, shared with engineering and partnerships leads."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search your codebase, settings pages and partner marketplaces for every live integration"
                - "Record builder, internal owner and support tier for each one"
                - "Pull connected account counts and error rates for the last 90 days"
                - "Flag integrations with no owner or very low adoption for review"
                - "Refresh the integration inventory against live usage data @recurring(quarterly)"
            - name: Integration demand evidence log
              description: |-
                ## Purpose
                Integration requests arrive everywhere: a line in a sales call note, a support ticket asking whether you connect to a particular accounting tool, a churn survey saying the product did not talk to their CRM. Pulled into one log with the requesting account, its revenue, the use case and the source, those scattered mentions become evidence you can count instead of the loudest voice in the last meeting.

                ## Milestones
                1. One log with columns for tool requested, account, revenue, use case, source and date.
                2. Six months of past requests backfilled from the CRM, help desk and churn notes.
                3. Duplicate tool names merged, so two spellings of the same product count as one.
                4. Sales and support agreed on how to add a new request in under a minute.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A demand log holding at least six months of integration requests, each tied to an account, a revenue figure and a use case."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create the demand log with tool, account, revenue, use case, source and date columns"
                - "Search CRM notes and help desk tickets from the last six months for integration mentions"
                - "Ask the agent to merge duplicate tool names and group requests by use case"
                - "Agree a one-minute logging step with the sales and support leads"
            - name: Customer tech stack survey
              description: |-
                ## Purpose
                Requests show what vocal customers want, not what the whole base already uses. A short survey or sign-up question asking which CRM, accounting, messaging and storage tools each account runs, combined with any enrichment data you hold, shows where an integration would reach thousands of accounts and where it would reach a handful.

                ## Milestones
                1. Five or six tool categories chosen that matter to your product's workflow.
                2. A survey or onboarding question live, aiming for 200 responses or 20 percent of active accounts.
                3. Results weighted by account revenue as well as by count.
                4. A ranked table of tools by share of customers and share of revenue.

                ## Notes
                Ask about tools in use today, not tools people wish you connected to. The second question belongs in the demand log.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked table of the tools customers use in each chosen category, based on at least 200 responses or 20 percent of active accounts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the five or six tool categories closest to your product's workflow"
                - "Add a which-tools-do-you-use question to onboarding or a short survey"
                - "Weight the answers by account revenue as well as headcount"
                - "Repeat the tech stack survey with the same questions @recurring(yearly)"
            - name: Integration scoring model
              description: |-
                ## Purpose
                Without explicit criteria, integration priorities follow whichever deal is closing this quarter. A scoring model that weighs customer reach, revenue influenced, deal blockers, partner value and strategic fit against build and maintenance cost lets you rank twenty candidates in an afternoon and explain to sales exactly why their request sits at number nine.

                ## Milestones
                1. Five to seven criteria agreed, each with a written definition and a 1 to 5 scale.
                2. Weights agreed with product, sales and partnerships leads.
                3. Maintenance cost included as its own criterion, not folded into build effort.
                4. The model tested on ten past requests and adjusted where it ranked them badly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written scoring model with defined criteria and weights, tested against ten past requests and signed off by product and sales leads."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft five to seven scoring criteria with a one-line definition each"
                - "Agree weights with the sales and partnerships leads in one meeting"
                - "Score ten past integration requests and check the ranking holds up"
                - "Recalibrate the weights against what shipped integrations actually delivered @recurring(yearly)"
            - name: Integration strategy one-pager
              description: |-
                ## Purpose
                Teams build integrations for different reasons: to remove a deal blocker, to make the product stickier, to get distribution through a partner's marketplace, or to fill a gap in their own feature set. Writing down which of these reasons drive your strategy, which tool categories you will cover and which you will leave to automation platforms gives every later priority call a reference point.

                ## Milestones
                1. The two or three reasons integrations matter to your business ranked in writing.
                2. Tool categories marked as core, opportunistic or out of scope.
                3. A stated default for long-tail requests, such as pointing to an automation platform.
                4. The one-pager reviewed by leadership and linked from the roadmap.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page integration strategy naming the ranked reasons, the in-scope categories and the long-tail default, approved by leadership."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the reasons each existing integration was originally built"
                - "Rank retention, deal impact, distribution and feature gaps for your business"
                - "Mark each tool category as core, opportunistic or out of scope"
                - "Share the one-pager with leadership and record their changes"
            - name: Integration ownership and decision rights
              description: |-
                ## Purpose
                Integrations sit between product, engineering, partnerships, sales and support, which is why so many of them end up owned by nobody once the launch is over. Agreeing who decides what gets built, who maintains each integration, who talks to the partner and who answers the customer prevents the familiar pattern of a broken sync sitting in three queues for a fortnight.

                ## Milestones
                1. A decision rights table covering prioritisation, build, maintenance, partner contact and customer support.
                2. One named owner for each integration in the inventory.
                3. An escalation path for broken integrations agreed with engineering.
                4. The table published where sales and support can find it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published decision rights table and a named owner against every integration in the inventory."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five decisions every integration needs an owner for"
                - "Agree the decision rights table with engineering and partnerships leads"
                - "Assign a named owner to each integration in the inventory"
                - "Publish the table in the sales and support wiki"
            - name: Integration usage instrumentation
              description: |-
                ## Purpose
                Plenty of products track whether an integration was switched on and nothing after it. Events for connect, first successful sync, error, reconnect and disconnect, carried with the account and the integration name, are what let you say whether an integration is used, failing or quietly abandoned, and they feed every adoption and retention question later in this area.

                ## Milestones
                1. An event list covering connect, first sync, sync error, reconnect and disconnect.
                2. Account, plan and integration name attached as properties on every event.
                3. Events live in production for the five most used integrations.
                4. A dashboard showing connected, active and erroring accounts per integration.

                ## Notes
                Count an integration as active only if it synced data in the last 30 days. Connected but idle is a different and more worrying state.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Connect, sync, error and disconnect events are live for the five most used integrations and visible on one dashboard by account."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the integration lifecycle events and the properties each needs"
                - "Agree the event names with the engineer who owns analytics"
                - "Ship the events for the five most used integrations first"
                - "Build a dashboard of connected, active and erroring accounts per integration"
            - name: Integration depth levels and what supported means
              description: |-
                ## Purpose
                A sales rep who says yes, we integrate with that, may mean a link in the menu, a one-way export or a full two-way sync, and the customer hears the last one. Defining three or four depth levels, with a plain description of what data moves, in which direction and how often, stops overselling and makes it possible to compare integration requests on the same terms.

                ## Milestones
                1. Three or four depth levels defined, from link-out to two-way near real-time sync.
                2. Each existing integration labelled with its current level.
                3. Customer-facing wording for each level agreed with marketing.
                4. Sales material updated so reps describe integrations by level.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Written depth levels with customer-facing wording, applied to every integration in the inventory and used in sales material."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft three or four depth levels with what data moves and how often"
                - "Label every integration in the inventory with its current level"
                - "Agree customer-facing wording for each level with marketing"
                - "Walk the sales team through the levels at their weekly meeting"
            - name: Support policy for native and partner-built integrations
              description: |-
                ## Purpose
                Customers rarely know or care who built a connector, so a broken partner-built integration lands in your support queue anyway. A written policy saying which integrations you support fully, which you triage and hand to the partner, and which are automation platform recipes with best-effort help sets honest expectations and protects support time.

                ## Milestones
                1. Support tiers defined for native, certified partner, partner-built and automation platform integrations.
                2. Response expectations and handover steps written for each tier.
                3. A partner support contact recorded for every partner-built integration.
                4. The tier shown on each integration's help page.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A support policy with tiers and handover steps is published, and every integration's help page shows its tier."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft support tiers for native, partner-built and automation platform integrations"
                - "Collect a support contact from every partner whose connector you list"
                - "Agree the handover steps with the support lead"
                - "Add the support tier to each integration's help page"
                - "Review the support tiers against the past year's tickets @recurring(yearly)"
            - name: Ranked top ten integration backlog
              description: |-
                ## Purpose
                Once the inventory, demand log and scoring model exist, the first real output is a ranked list of the next ten integrations with the score, the evidence and a rough size beside each. Sharing that list openly, including what sits at eleven and below, usually does more to calm sales pressure than any individual yes.

                ## Milestones
                1. Every candidate with three or more independent requests scored with the model.
                2. The top ten listed with score, evidence, depth level and a rough size.
                3. The first two candidates agreed with engineering for discovery.
                4. The ranked list shared with sales, support and partnerships.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked list of ten integrations with scores and evidence, the top two in discovery and the list shared with sales and support."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull every tool with three or more requests from the demand log"
                - "Score each candidate using the integration scoring model"
                - "Ask engineering for a rough size on the top ten"
                - "Share the ranked list and the reasoning with sales and support leads"
            - name: Monthly integration request review
              description: |-
                ## Purpose
                New requests keep arriving after the first ranking, and a backlog ranked once goes stale within a quarter. A 45-minute monthly review of new requests, score changes and anything sales has escalated keeps the ranking current and gives requesters a predictable date when their ask will be looked at.

                ## Milestones
                1. A standing monthly slot with product, sales and support representatives.
                2. New requests from the month scored before the meeting.
                3. Changes to the top ten recorded with a one-line reason.
                4. Requesters told the outcome within a week of each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews held in a year, each recording score changes and closing the loop with requesters within a week."
                cadence: rolling
              tasks:
                - "Book a recurring 45-minute review with sales and support representatives"
                - "Score the month's new requests in the demand log @recurring(monthly:9)"
                - "Record any change to the top ten with a one-line reason"
                - "Reply to each requester with the outcome of the review"
            - name: Lost and stalled deal integration review
              description: |-
                ## Purpose
                Sales will tell you an integration cost them a deal; the CRM can tell you how often and how much. Reviewing every closed-lost and stalled opportunity that names a missing integration, with the rep, separates genuine blockers from convenient explanations and turns deal impact into a number you can put in the scoring model.

                ## Milestones
                1. A missing integration loss reason in the CRM, with a field for which tool.
                2. Each month's tagged losses reviewed with the rep involved.
                3. Losses classed as true blocker, contributing factor or excuse.
                4. A running total of revenue lost per missing integration fed into scoring.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of tagged lost deals reviewed with reps, with revenue per missing integration recorded in the scoring model."
                cadence: rolling
              tasks:
                - "Ask the sales operations lead to add a missing integration loss reason"
                - "Review the month's tagged closed-lost deals with each rep @recurring(monthly:16)"
                - "Class each loss as blocker, contributing factor or excuse"
                - "Add confirmed blocker revenue to the integration's score"
            - name: Quarterly integration portfolio review
              description: |-
                ## Purpose
                Every integration you ship is a permanent maintenance cost, and the portfolio drifts as partners change APIs and customers change tools. A quarterly look at adoption, errors, support load and revenue influence across all integrations decides which to invest in, which to hold and which to hand to a partner or retire.

                ## Milestones
                1. One page per quarter showing adoption, error rate, tickets and influenced revenue per integration.
                2. Each integration marked invest, hold, hand over or retire.
                3. Engineering maintenance time for the next quarter agreed against those marks.
                4. Decisions recorded and linked from the inventory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly reviews in a year, each marking every integration invest, hold, hand over or retire with maintenance time agreed."
                cadence: cyclic
              tasks:
                - "Build a one-page portfolio summary from the inventory and dashboard"
                - "Hold the integration portfolio review with engineering and partnerships @recurring(quarterly)"
                - "Mark each integration invest, hold, hand over or retire"
                - "Agree next quarter's maintenance time with the engineering lead"
            - name: Weekly integration health check
              description: |-
                ## Purpose
                Integrations fail quietly: an expired token, a partner rate limit, a renamed field, and customers notice days before you do. A 20-minute weekly look at sync errors, authentication failures and integration tickets catches breakages while they affect ten accounts rather than five hundred.

                ## Milestones
                1. Error rate, authentication failures and open tickets per integration visible on one screen.
                2. A threshold set for each integration that triggers an engineering ticket.
                3. Twelve consecutive weekly checks completed.
                4. Every threshold breach linked to a ticket and a fix date.

                ## Notes
                Start from the **Metrics log** template to keep the weekly numbers in one place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly health checks recorded, with every threshold breach linked to an engineering ticket."
                cadence: rolling
              tasks:
                - "Set an error rate threshold for each integration with engineering"
                - "Check sync errors, authentication failures and integration tickets @recurring(weekly:tue)"
                - "Open an engineering ticket for any integration over its threshold"
                - "Note the week's numbers in the integration metrics log"
            - name: Partner API change watch
              description: |-
                ## Purpose
                Partners deprecate endpoints, change rate limits and retire API versions on their own timetable, often with notice sent to a developer account nobody reads. Subscribing to every partner's changelog and status feed, and scanning them monthly, gives you months of warning instead of a weekend outage.

                ## Milestones
                1. Changelog, status page and developer newsletter subscriptions set up for every partner API you call.
                2. Notices routed to a shared inbox or channel, not one person's email.
                3. A monthly scan recorded with any change that needs work.
                4. Every required change ticketed with the partner's deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every partner API in the inventory has changelog and status subscriptions routed to a shared channel, scanned monthly for a year."
                cadence: rolling
              tasks:
                - "Subscribe a shared address to every partner's changelog and status page"
                - "Check which email address each partner developer portal sends notices to"
                - "Scan partner changelogs for deprecations and limit changes @recurring(monthly:3)"
                - "Ticket each required change with the partner's deadline attached"
            - name: Quarterly partner check-ins
              description: |-
                ## Purpose
                The partners behind your most important integrations have their own roadmaps, marketplace changes and co-marketing budgets, and you only hear about them if someone asks. A short quarterly call with each top partner covers API plans, shared customer issues and joint opportunities, and builds the relationship you need when something breaks.

                ## Milestones
                1. Top five partners identified by integration usage and revenue influence.
                2. A named contact on each side for product and technical issues.
                3. A quarterly call held with each, using a standing agenda.
                4. Actions from each call recorded and followed up before the next.

                ## Notes
                Start from the **Meeting notes** template so every partner call follows the same agenda.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly calls held with each of the top five partners for a year, with actions recorded and followed up."
                cadence: rolling
              tasks:
                - "Pick the five partners whose integrations matter most"
                - "Confirm a product and a technical contact at each partner"
                - "Hold a check-in call with each top partner @recurring(quarterly)"
                - "Record actions from each call and chase them before the next"
            - name: Monthly integration adoption review
              description: |-
                ## Purpose
                Launching an integration is not the same as customers using it. Looking monthly at how many eligible accounts connected each integration, how many are still syncing after 30 days and where setup is abandoned shows which integrations need better discovery, a simpler setup or an honest conversation about whether they were worth building.

                ## Milestones
                1. Eligible accounts defined for each integration, usually those using the partner tool.
                2. Connect rate and 30-day active rate tracked per integration.
                3. The setup step with the largest drop-off identified for the top five.
                4. One improvement action agreed each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Connect and 30-day active rates reviewed monthly for six months, with one improvement action recorded each month."
                cadence: rolling
              tasks:
                - "Define eligible accounts for each of the top five integrations"
                - "Review connect and 30-day active rates per integration @recurring(monthly:22)"
                - "Find the setup step where most accounts give up"
                - "Agree one adoption improvement action for the month"
            - name: Integration FAQ for sales and support
              description: |-
                ## Purpose
                Reps and support agents answer integration questions dozens of times a week, and wrong answers create churn later. A living FAQ covering what each integration does, its depth level, its limits and what is on the ranked list keeps every answer consistent and stops promises the product cannot keep.

                ## Milestones
                1. An FAQ entry for every integration in the inventory with depth level and known limits.
                2. A section listing integrations under consideration and their current rank.
                3. The FAQ linked from the CRM and help desk.
                4. A monthly update after each request review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An FAQ covering every live integration and the current ranked list, linked from the CRM and updated monthly."
                cadence: rolling
              tasks:
                - "Write an FAQ entry for each live integration with its known limits"
                - "Add a section on integrations under consideration and their rank"
                - "Link the FAQ from the CRM and the help desk"
                - "Update the FAQ after the monthly request review @recurring(monthly:28)"
            - name: Annual integration roadmap refresh
              description: |-
                ## Purpose
                Once a year the inputs to integration priorities shift together: customers move upmarket, a new tool takes over a category, a partner launches its own competing feature. A yearly refresh that brings in the latest survey results, revisits the category map and resets the themes keeps the integration roadmap from running on last year's assumptions.

                ## Milestones
                1. The year's demand, deal and adoption data summarised on one page.
                2. Categories moved between core, opportunistic and out of scope where the market changed.
                3. Next year's integration themes agreed with leadership.
                4. The refreshed roadmap shared with sales, support and key partners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A refreshed integration roadmap with updated categories and themes, agreed with leadership and shared with key partners."
                cadence: cyclic
              tasks:
                - "Summarise the year's demand, lost deal and adoption data on one page"
                - "Run the annual integration roadmap refresh with leadership @recurring(yearly)"
                - "Move categories between core, opportunistic and out of scope where needed"
                - "Share next year's integration themes with sales and key partners"
            - name: Integration patterns for product managers
              description: |-
                ## Purpose
                Decisions about integration scope go wrong when the product manager cannot tell a webhook from a nightly batch job. Learning the handful of patterns most integrations use, OAuth connection, webhooks, polling, batch import and two-way sync, is enough to ask engineering the right questions and spot when a request is really three integrations in disguise.

                ## Milestones
                1. OAuth, API keys, webhooks, polling and batch import explained in your own words.
                2. Each live integration labelled with the pattern it uses.
                3. One integration's data flow sketched end to end with an engineer.
                4. A one-page cheat sheet shared with the product team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page cheat sheet of integration patterns, with every live integration labelled by pattern, reviewed by an engineer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask an integration engineer for a 30-minute walk through one live integration"
                - "Write a one-line definition of each pattern in your own words"
                - "Label each integration in the inventory with the pattern it uses"
                - "Share the cheat sheet with the product team for corrections"
            - name: Reading partner API documentation for feasibility
              description: |-
                ## Purpose
                Half the cost of an integration is decided by the partner's API before you write a line of code: missing objects, harsh rate limits, no webhooks, or a partner programme that gates access behind an application. Learning to read API documentation for these signals lets you rate a candidate as easy, hard or blocked in an hour.

                ## Milestones
                1. A feasibility checklist covering auth, objects, webhooks, rate limits, sandbox access and terms.
                2. The checklist run against three candidates from the ranked list.
                3. Each candidate rated easy, hard or blocked with reasons.
                4. Findings checked with an engineer for anything missed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A feasibility checklist applied to three candidate partner APIs, each with an easy, hard or blocked rating confirmed by an engineer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a feasibility checklist of auth, objects, webhooks, limits and sandbox"
                - "Run the checklist against the top three candidates on the ranked list"
                - "Check each partner's API terms for use restrictions"
                - "Review your ratings with an engineer and correct what you missed"
            - name: Data mapping and sync conflict basics
              description: |-
                ## Purpose
                Two-way sync is where integrations earn their keep and where they break customer trust, usually through a field that means different things in each system or two edits made at the same moment. Understanding field mapping, source of truth, deduplication and conflict rules helps you write specs that prevent the support tickets nobody can reproduce.

                ## Milestones
                1. Source of truth, field mapping, deduplication and conflict resolution understood well enough to explain.
                2. The mapping for one live two-way sync documented field by field.
                3. Three real sync conflict tickets traced to their cause.
                4. Default conflict rules proposed for future specs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A field-by-field mapping for one live two-way sync, three conflict tickets traced to cause, and default conflict rules written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one live two-way sync and list every field it maps"
                - "Mark which system is the source of truth for each field"
                - "Trace three sync conflict support tickets to their cause"
                - "Propose default conflict rules for the next integration spec"
            - name: True cost of building and maintaining integrations
              description: |-
                ## Purpose
                Estimates usually cover the build and forget the tail: partner API changes, authentication migrations, support tickets and the engineer who becomes the only person who understands the sync. Looking back at what your existing integrations really cost each year gives you a maintenance multiplier to put beside every new estimate.

                ## Milestones
                1. Engineering hours on each live integration over the last 12 months gathered from tickets.
                2. Support tickets per integration counted for the same period.
                3. Yearly maintenance cost as a share of original build cost calculated.
                4. The multiplier added to the scoring model's cost criterion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly maintenance multiplier derived from twelve months of engineering and support data, added to the scoring model."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull engineering tickets tagged to each integration for the last year"
                - "Count support tickets per integration over the same period"
                - "Work out yearly maintenance as a share of original build effort"
                - "Add the maintenance multiplier to the cost criterion in the scoring model"
            - name: Partner programme and marketplace economics
              description: |-
                ## Purpose
                Partner marketplaces differ widely: some charge listing fees, some take a revenue share on paid apps, some require security reviews or minimum installs, and some send real traffic while others send none. Understanding how the programmes of your top candidate partners work tells you whether an integration is also a distribution channel or only a cost.

                ## Milestones
                1. Programme terms gathered for your five most important partners.
                2. Listing requirements, fees, revenue share and co-marketing benefits compared in one table.
                3. Traffic or install data requested from partners where they share it.
                4. Distribution value added as an input to the scoring model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of five partner programmes covering requirements, fees and benefits, with distribution value scored for each."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the partner programme page for each of your five top partners"
                - "Compare listing requirements, fees, revenue share and benefits in one table"
                - "Ask partner managers for marketplace traffic or install figures"
                - "Score each partner's distribution value in the scoring model"
            - name: Measuring the deal impact of an integration
              description: |-
                ## Purpose
                Influenced revenue is the most persuasive number in integration debates and the easiest to inflate. Learning to compare win rates, sales cycle length and deal size for opportunities where the integration mattered against those where it did not gives a more honest figure than adding up every deal a rep tagged.

                ## Milestones
                1. A definition of an integration-influenced deal agreed with sales operations.
                2. Win rate and cycle length compared for deals with and without one shipped integration.
                3. The difference explained with caveats about deal size and segment.
                4. A method note other product managers can reuse.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of win rate and cycle length for deals with and without one shipped integration, with method and caveats."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree with sales operations what counts as an integration-influenced deal"
                - "Pull won and lost deals for the segment where the integration matters"
                - "Compare win rate and cycle length with and without the integration"
                - "Write a short method note with the caveats"
            - name: Integration security and data privacy basics
              description: |-
                ## Purpose
                Every integration moves customer data into or out of another company's system, so security reviewers and enterprise buyers will ask what scopes you request, where tokens are stored and what the partner can see. Knowing the basics of OAuth scopes, token storage, data minimisation and data processing agreements lets you design integrations that pass review first time.

                ## Milestones
                1. OAuth scopes, token storage, data minimisation and processing agreements understood well enough to explain.
                2. The scopes each live integration requests listed and checked for excess.
                3. Questions buyers ask about integrations collected from past security questionnaires.
                4. A short checklist agreed with the security team for new integration specs.

                ## Notes
                Your security and legal teams decide what is acceptable. The product job is to ask early and record their answers.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A security checklist for integration specs agreed with the security team, and every live integration's scopes reviewed for excess."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the OAuth scopes each live integration requests"
                - "Flag scopes that ask for more access than the feature needs"
                - "Collect integration questions from the last five security questionnaires"
                - "Agree a short integration security checklist with the security team"
            - name: Native, embedded iPaaS or unified API decision
              description: |-
                ## Purpose
                Building every connector natively gives full control and the highest maintenance bill; an embedded integration platform or unified API vendor covers dozens of tools quickly but adds a dependency, per-connection fees and limits on depth. Choosing the delivery approach for each tier of your integration list is one of the largest cost decisions in this area, and it is cheap to get right before the backlog grows.

                ## Milestones
                1. Requirements written for depth, data volume, white-labelling and cost per connection.
                2. Native build compared with two or three embedded platform or unified API vendors.
                3. A proof of concept run on one real integration from the ranked list.
                4. A recorded choice of approach for core, mid-tier and long-tail integrations.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor what happens to your customers' connections if you leave.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded delivery approach for core, mid-tier and long-tail integrations, backed by a proof of concept on one real integration."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write requirements for depth, volume, white-labelling and cost per connection"
                - "Shortlist two or three embedded platform or unified API vendors"
                - "Run a proof of concept on one integration from the ranked list"
                - "Record the delivery approach for each tier of the integration list"
            - name: Automation platform listing for the long tail
              description: |-
                ## Purpose
                For every integration worth building natively there are fifty tools a few customers each want. Publishing your product on one or two general automation platforms, with triggers and actions for your core objects, covers much of that long tail for a fraction of the cost and shows which connections get used enough to deserve a native build.

                ## Milestones
                1. Two automation platforms chosen by where your customers already have accounts.
                2. Five to ten triggers and actions defined for your core objects.
                3. The app published and listed, with three ready-made templates.
                4. Monthly usage by connected tool reviewed to spot native candidates.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your product listed on at least one automation platform with five or more triggers and actions and three templates, with usage tracked."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check which automation platforms your customers already use"
                - "Define five to ten triggers and actions around your core objects"
                - "Publish the app with three ready-made templates for common workflows"
                - "Add automation platform usage by connected tool to the demand log"
            - name: Build, partner-built or certified partner decision
              description: |-
                ## Purpose
                Some integrations are best built by the partner, some by a specialist agency or certified partner, and some only by you because they touch your core workflow. Deciding who builds each candidate on the ranked list, with clear terms for quality and support, can double how many integrations reach customers without doubling engineering spend.

                ## Milestones
                1. Criteria written for when you build, when the partner builds and when a third party builds.
                2. Each top ten candidate assigned a proposed builder.
                3. Quality and support expectations written for partner-built integrations.
                4. At least one integration agreed with a partner or third party to build.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every top ten candidate has a recorded builder decision, and at least one partner or third-party build is agreed with written quality terms."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write criteria for building yourself versus partner or third-party builds"
                - "Assign a proposed builder to each of the top ten candidates"
                - "Draft quality and support terms for partner-built integrations"
                - "Ask one partner whether they would build and maintain their side"
            - name: Specification for the top-ranked integration
              description: |-
                ## Purpose
                An integration spec that says sync contacts with the CRM leaves engineering to decide direction, frequency, field mapping, error handling and what the customer sees when it breaks. Writing those down for the top-ranked candidate, with the use cases from the demand log, is what makes the build estimable and the result something customers can trust.

                ## Milestones
                1. The top three customer use cases taken from the demand log and confirmed with two customers.
                2. Direction, frequency, objects, field mapping and conflict rules written.
                3. Setup, error and disconnect experiences described for the end user and the admin.
                4. Success measures set for connect rate and 30-day active rate.

                ## Notes
                Start from the **Product spec** template.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed spec for the top-ranked integration covering use cases, data flow, error experience and success measures, accepted by engineering."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull the top three use cases for this integration from the demand log"
                - "Confirm the use cases on a call with two requesting customers"
                - "Write direction, frequency, field mapping and conflict rules"
                - "Review the spec with the integration engineer and partner contact"
            - name: Declining integration requests honestly
              description: |-
                ## Purpose
                Most integration requests will never be built, and a vague maybe later costs more trust than a clear no with an alternative. A short set of decline replies, each offering a workaround such as an automation platform template, an export or a partner-built option, lets sales and support say no without losing the customer.

                ## Milestones
                1. Three reply templates for not planned, not yet and covered another way.
                2. A workaround documented for each of the ten most requested missing integrations.
                3. Sales and support briefed on when to use each reply.
                4. Declined requests marked not planned in the demand log so they are not re-asked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three decline reply templates and ten documented workarounds in use by sales and support, with declined requests marked in the demand log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three decline replies for not planned, not yet and covered another way"
                - "Ask the agent to suggest workarounds for the ten most requested missing tools"
                - "Brief sales and support on when to use each reply"
                - "Mark declined requests as not planned in the demand log"
            - name: Retiring a low-value integration
              description: |-
                ## Purpose
                An integration used by 15 accounts that breaks with every partner release is costing more than it earns. Making a deliberate call on the weakest integration in the portfolio, whether to retire it, hand it to the partner or replace it with an automation platform recipe, frees maintenance time for something on the ranked list.

                ## Milestones
                1. The weakest integration chosen using adoption, cost and revenue data.
                2. Affected accounts listed with their revenue and how they use it.
                3. A replacement path offered: partner-built, automation recipe or export.
                4. Notice sent, the integration switched off and the inventory updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One low-value integration retired or handed over, with every affected account offered a replacement path before switch-off."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the weakest integration using the latest portfolio review"
                - "List affected accounts with revenue and how they use it"
                - "Agree a replacement path with the partner or automation platform"
                - "Name the next retirement candidate at the annual roadmap refresh @recurring(yearly)"
            - name: Integration setup flow improvement
              description: |-
                ## Purpose
                Half the eligible users of an integration are often lost in setup: an admin-only permission, a confusing field mapping screen, a first sync that takes an hour to show anything. Watching five customers connect your most important integration and fixing the worst two steps can raise connect rate more than any launch email.

                ## Milestones
                1. Five setup sessions observed or recorded for the most important integration.
                2. Drop-off by step measured from the integration events.
                3. The two worst steps redesigned and shipped.
                4. Connect rate compared for the month before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two setup steps redesigned for the most important integration, with connect rate measured for a month before and after the change."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Recruit five customers to connect the integration while you watch"
                - "Measure drop-off at each setup step from the integration events"
                - "Redesign the two steps where most people stop"
                - "Compare connect rate for the month before and after the change"
            - name: Integration placement across plans
              description: |-
                ## Purpose
                Whether integrations sit in every plan, only in higher tiers or as paid add-ons shapes both adoption and revenue, and moving one later upsets customers. Deciding the rule for which integrations are included where, based on who uses them and what they cost to run, prevents plan-by-plan improvisation each time something new ships.

                ## Milestones
                1. Current placement of every integration across plans listed.
                2. Usage of each integration by plan and account size analysed.
                3. A written rule for which integration types go in which plans.
                4. The rule agreed with the pricing owner and applied to the next launch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan placement rule for integrations, agreed with whoever owns pricing and applied to the next integration launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List which plans include each integration today"
                - "Analyse usage of each integration by plan and account size"
                - "Draft a rule for which integration types sit in which plans"
                - "Agree the rule with whoever owns pricing and packaging"
            - name: Co-launch of a new integration with the partner
              description: |-
                ## Purpose
                Launched alone, a new integration gets a changelog line; launched with the partner it can get a marketplace feature, a joint post and a slot in their customer newsletter. Planning the go-live with the partner six to eight weeks ahead, with a beta group of shared customers, turns a technical delivery into adoption and pipeline.

                ## Milestones
                1. A launch date and announcement plan agreed with the partner.
                2. Ten shared customers using the integration in beta before launch.
                3. Marketplace listing, help article and sales material ready on launch day.
                4. Connect rate and influenced pipeline reported 30 days after launch.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An integration launched on an agreed date with partner announcements, ten beta customers and a 30-day adoption report."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree a launch date and announcement plan with the partner manager"
                - "Invite ten shared customers into the beta"
                - "Prepare the listing, help article and sales material for launch day"
                - "Report connect rate and influenced pipeline 30 days after launch"
            - name: Marketplace listing and partner security review
              description: |-
                ## Purpose
                Major partner app marketplaces require an application, a security questionnaire, sometimes a penetration test summary, and a review that can take weeks. Preparing the listing copy, screenshots, support details and security evidence before submitting avoids the rejection cycle that pushes launch dates.

                ## Milestones
                1. The partner's listing and security requirements read in full and listed.
                2. Security evidence gathered with the security team.
                3. Listing copy, screenshots and support details prepared.
                4. The listing submitted, approved and live.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An approved and live listing on the partner's marketplace, with security evidence filed for the next review."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the partner's marketplace listing and security requirements"
                - "Ask the security team which evidence you can share with the partner"
                - "Prepare listing copy, screenshots and support details"
                - "Submit the listing and log each reviewer request"
                - "Check listing details and security evidence are still current @recurring(yearly)"
            - name: Integration commitment in an enterprise deal
              description: |-
                ## Purpose
                Large deals sometimes hinge on an integration that does not exist yet, and a promise made loosely on a sales call becomes a contractual obligation with penalties. Handling these as a deliberate decision, with scope, date, depth level and what happens if it slips written down, protects both the deal and the roadmap.

                ## Milestones
                1. The integration requirement confirmed with the customer's technical contact.
                2. The request scored and its effect on the ranked list made visible.
                3. Scope, depth level, target date and slip remedy written and reviewed by legal.
                4. Delivery tracked in a monthly update to the account team.

                ## Notes
                Product decides whether and what; legal and sales decide contract wording. Never let a delivery date into a contract without engineering agreeing it.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written integration commitment with scope, depth level, date and slip remedy, agreed by product, engineering and legal before signature."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Meet the customer's technical contact to confirm the exact requirement"
                - "Score the request and show sales what it would push down the list"
                - "Write scope, depth level, date and slip remedy for legal review"
                - "Send the account team a monthly delivery update"
            - name: Partner API version shutoff migration
              description: |-
                ## Purpose
                When a partner announces the shutdown of the API version your integration depends on, the date is theirs, not yours, and missing it breaks every connected account at once. Running the migration as a dated project, with the work sized early and customers told what to expect, turns an outage risk into a routine release.

                ## Milestones
                1. The shutoff date, required changes and affected accounts confirmed.
                2. Migration work sized and scheduled with a month of buffer before the date.
                3. Accounts that must reconnect or re-authorise told well in advance.
                4. The new version live and error rates back to normal before the shutoff.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The integration runs on the partner's new API version a month before shutoff, with error rates at or below their previous level."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the shutoff date and required changes in the partner documentation"
                - "Count the accounts that will need to reconnect or re-authorise"
                - "Schedule the migration to finish a month before the shutoff"
                - "Email affected accounts with what they need to do and by when"
            - name: Founder's first three integrations
              description: |-
                ## Purpose
                Before product-market fit, every integration is a bet that pulls a small team away from the core product. A founder choosing the first three should look for tools nearly every target customer uses daily, where the integration removes manual copying, and resist building for one prospect's stack.

                ## Milestones
                1. The tools used by at least half of your first 20 customers listed.
                2. The manual copying each integration would remove described with a customer quote.
                3. Three integrations chosen, with an automation platform covering everything else.
                4. Usage checked 60 days after each one ships.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three first integrations chosen from tools used by at least half of the first 20 customers, with usage checked 60 days after shipping."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your first 20 customers which tools they use every day"
                - "Write down the manual copying each candidate integration would remove"
                - "Choose three integrations and point every other request to an automation platform"
                - "Check usage of each integration 60 days after it ships"
            - name: Custom integration request from an enterprise customer
              description: |-
                ## Purpose
                Enterprise customers often ask for an integration with an in-house system or an old on-premise tool that nobody else uses. Choosing between a product build, a paid services engagement, a customer build against your public API, or a polite no needs a clear view of what the customer pays, what it costs to maintain and whether anyone else will ever use it.

                ## Milestones
                1. The system, data and use case documented with the customer's IT team.
                2. Options compared: product build, paid services, customer builds on your API, or decline.
                3. A recommendation agreed with sales and the account owner.
                4. Maintenance ownership written down if anything is built.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written recommendation for the custom request, agreed with sales, with maintenance ownership recorded for anything built."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Document the system, data and use case with the customer's IT team"
                - "Compare a product build, paid services, a customer build and declining"
                - "Agree a recommendation with the account owner"
                - "Record who maintains anything that gets built"
            - name: Integration pressure from a strategic partner or investor
              description: |-
                ## Purpose
                Strategic partners, resellers and investors with portfolio companies may push hard for an integration that scores poorly with customers. Running it through the same scoring model, pinning down the partner value on offer and making the trade-off visible to leadership keeps the decision a business call rather than a favour.

                ## Milestones
                1. The request scored on the same model as customer requests.
                2. The partner's offer, such as co-selling, distribution or funding, written down in specifics.
                3. The cost to the ranked list shown to leadership.
                4. A decision recorded with the reasoning.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded leadership decision on the partner's request, showing its score, the specific partner offer and the effect on the ranked list."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Score the partner's request with the same model as customer requests"
                - "Ask the partner to put their co-selling or distribution offer in writing"
                - "Show leadership which integrations would move down the list"
                - "Record the decision and the reasoning in the demand log"
            - name: Upmarket integration requirements
              description: |-
                ## Purpose
                Selling to larger companies changes the integration list: ERP and finance systems, HR platforms, data warehouses and IT service tools start appearing in RFPs and procurement checklists. Mapping which of these block enterprise deals, and in what order, prevents a rushed build after the first big deal stalls.

                ## Milestones
                1. Integration requirements extracted from the last ten enterprise RFPs and questionnaires.
                2. Requirements grouped into finance, HR, data warehouse and IT service categories.
                3. Each requirement marked as deal blocker or nice to have.
                4. An enterprise integration track added to the ranked list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An enterprise integration track on the ranked list, built from at least ten RFPs or questionnaires and marked by blocker status."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the last ten enterprise RFPs and procurement checklists"
                - "Extract every integration requirement into one list"
                - "Mark each requirement as deal blocker or nice to have"
                - "Add an enterprise track to the ranked integration list"
            - name: Integration maintenance for a small team
              description: |-
                ## Purpose
                In a small company the person who built an integration is often also on support, sales calls and the next feature, so maintenance happens only when something breaks. A protected weekly hour for partner notices, error fixes and credential renewals, plus a hard cap on new integrations until the existing ones are healthy, keeps a small portfolio from becoming a liability.

                ## Milestones
                1. A weekly maintenance hour in the calendar of whoever owns integrations.
                2. A cap agreed on how many integrations the team will run.
                3. A dated list of expiring credentials, certificates and partner app reviews.
                4. No integration over its error threshold for more than two weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly maintenance hour kept for three months with no integration over its error threshold for more than two weeks."
                cadence: rolling
              tasks:
                - "Book a weekly integration maintenance hour in the owner's calendar"
                - "Agree a cap on the number of integrations the team will run"
                - "List every expiring credential, certificate and partner app review"
                - "Work through partner notices and integration errors @recurring(weekly:fri)"
            - name: Inheriting an integration portfolio
              description: |-
                ## Purpose
                Taking over integrations after a reorganisation or an acquisition means inheriting connectors with no specs, partners who have not heard from anyone in a year and promises to customers that nobody wrote down. A 30-day review of what exists, what was promised and who to call gives you a footing before the first breakage.

                ## Milestones
                1. Every integration and its known issues listed from code, tickets and the previous owner.
                2. Customer commitments found in contracts and CRM notes.
                3. An introduction made to each partner contact.
                4. A 30-day summary of risks and first decisions shared with your manager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A 30-day summary listing every inherited integration, open commitments and partner contacts, shared with your manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the previous owner for an hour on each integration's history"
                - "Search contracts and CRM notes for integration commitments"
                - "Introduce yourself to each partner contact by email"
                - "Share a 30-day summary of risks and first decisions with your manager"
            - name: Workflow coverage map across the customer's stack
              description: |-
                ## Purpose
                Ranked lists treat integrations one at a time, but customers experience them as a workflow: a lead arrives in the CRM, the work happens in your product, the invoice goes to accounting. Mapping that end-to-end workflow and marking which handoffs are covered, partly covered or manual shows the gaps that hurt most and where a whole category is missing.

                ## Milestones
                1. The end-to-end workflow drawn for your two largest customer segments.
                2. Each handoff marked covered, partly covered or manual.
                3. Manual handoffs ranked by the time customers say they spend on them.
                4. Gaps fed into the ranked list and the strategy one-pager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A workflow map for two segments with every handoff marked covered, partly covered or manual, and gaps added to the ranked list."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw the end-to-end workflow for your two largest segments"
                - "Mark each handoff as covered, partly covered or manual"
                - "Ask five customers how long the manual handoffs take each week"
                - "Add the biggest gaps to the ranked integration list"
            - name: Integration-attributed retention analysis
              description: |-
                ## Purpose
                Accounts with integrations connected usually retain better, but part of that is because larger, more committed customers connect more tools. Comparing retention for similar accounts with and without each integration, within the same size and plan bands, tells you which integrations really reduce churn and deserve investment.

                ## Milestones
                1. Retention measured for accounts with and without each top integration.
                2. Comparisons made within the same size and plan bands.
                3. Integrations with a clear retention difference named, with caveats.
                4. Findings shared and the scoring model's retention input updated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A retention comparison by integration within size and plan bands, with findings added to the scoring model."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull 12-month retention for accounts with and without each top integration"
                - "Split the comparison by account size and plan"
                - "Write which integrations show a clear difference and the caveats"
                - "Rerun the integration retention comparison @recurring(yearly)"
            - name: Partner co-sell and integration-sourced pipeline
              description: |-
                ## Purpose
                Mature integrations can bring in deals as well as close them, when partner sales teams recommend you to their customers and you return the favour. Setting up a simple co-sell process with one or two partners, with referral rules and pipeline tracking, shows whether an integration pays back through new business.

                ## Milestones
                1. One or two partners chosen where shared customers and goodwill already exist.
                2. Referral rules, contacts and a shared tracking sheet agreed.
                3. Partner-sourced and partner-influenced pipeline tracked in the CRM.
                4. Results reviewed with the partner after two quarters.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Partner-sourced pipeline tracked in the CRM for two quarters with at least one partner, and reviewed jointly."
                cadence: rolling
              tasks:
                - "Choose one or two partners with many shared customers"
                - "Agree referral rules and contacts with each partner manager"
                - "Add a partner-sourced field to opportunities in the CRM"
                - "Review partner-sourced pipeline with the partnerships lead @recurring(monthly:12)"
            - name: Partner API access agreement terms
              description: |-
                ## Purpose
                Many partners require a formal agreement for API access or marketplace listing, covering data use, rate limits, branding, liability and termination notice. A product manager who reads these terms before building can spot clauses that make an integration fragile, such as termination at short notice, and raise them with legal while there is still room to negotiate.

                ## Milestones
                1. Current agreements for every partner API you depend on located and stored together.
                2. Termination notice, data use, rate limit and branding clauses summarised for each.
                3. Clauses that create product risk flagged for legal review.
                4. Renewal and review dates recorded.

                ## Notes
                This is a product summary for legal to act on, not legal advice. Your legal team decides what is acceptable.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A summary of key clauses for every partner agreement you depend on, with risky clauses reviewed by legal and renewal dates recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the current agreement or terms for every partner API you depend on"
                - "Summarise termination, data use, rate limit and branding clauses"
                - "Send clauses that create product risk to legal for review"
                - "Check partner agreement renewal dates and terms changes @recurring(yearly)"
            - name: Platform dependence risk assessment
              description: |-
                ## Purpose
                If one partner's integration drives a large share of your sign-ups or retention, a change in their API terms, pricing or own roadmap can hurt the business overnight. Assessing how dependent you are on each major platform, and what you would do if access changed, turns a vague worry into specific mitigations.

                ## Milestones
                1. Share of sign-ups, active accounts and revenue tied to each major partner calculated.
                2. Scenarios written for access withdrawn, terms changed and the partner launching a competing feature.
                3. A mitigation recorded for each scenario with an owner.
                4. The assessment reviewed with leadership.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dependence assessment for each major partner with three scenarios and owned mitigations, reviewed by leadership."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the share of sign-ups and revenue tied to each major partner"
                - "Write scenarios for access withdrawn, terms changed and a competing launch"
                - "Record a mitigation and owner for each scenario"
                - "Review platform dependence with leadership @recurring(yearly)"
            - name: AI assistant and agent connector priorities
              description: |-
                ## Purpose
                Customers increasingly want their AI assistants and agents to read from and act in your product, through connector standards such as the Model Context Protocol or the app directories of major assistant platforms. Deciding which assistant platforms to support, which actions to expose and what permissions they need is a new integration priority with its own demand signals and security questions.

                ## Milestones
                1. Requests for assistant or agent access collected from the demand log and sales notes.
                2. Assistant platforms ranked by how many customers use them at work.
                3. A first set of read-only and write actions chosen, with permission rules.
                4. A pilot connector live with a small group of customers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of assistant platforms and a chosen first set of actions with permission rules, piloted with a small customer group."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Search the demand log and sales notes for assistant or agent access requests"
                - "Ask customers which AI assistants their teams use at work"
                - "Choose a first set of read-only and write actions with permission rules"
                - "Pilot the connector with five customers and record what they use"
---

# Third-Party Integration Priorities

This area is for product teams, founders and enterprise product leaders who have to decide which integrations with other tools to build, support or decline. It starts with the foundations (an inventory of what exists, a demand evidence log, a stack survey, a scoring model, a strategy and clear ownership), then the routines that keep the portfolio and partner relationships healthy, the technical and commercial knowledge behind good calls, the delivery and packaging decisions, the launches and deadlines that need planning, the situations founders and enterprise teams face, and finally the workflow, retention, co-sell and platform risk work of an experienced integrations lead.

What repeats is a weekly health check, monthly reviews of requests, lost deals, partner changelogs, adoption and co-sell pipeline, quarterly portfolio reviews and partner calls, and a yearly roadmap refresh with its survey, recalibration and agreement checks. The Metrics log, Meeting notes, Purchase decision, Product spec and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
