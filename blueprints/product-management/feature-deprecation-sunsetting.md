---
id: product-management.feature-deprecation-sunsetting
name: Feature Deprecation & Sunsetting
description: "Usage evidence, a written deprecation policy, customer notice schedules, migration paths and exports, a calm removal day and an honest review afterwards, for product teams and managers retiring features or whole products."
category: business
version: 1.0.0
tags: [product-management, feature-deprecation-sunsetting, team, manager, deprecation, end-of-life, migration, customer-notice]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - product-spec
    - operational-checklist
    - meeting-notes
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Feature Deprecation & Sunsetting
          description: "Retiring features or products responsibly, with usage evidence, customer notice, migration paths and support for the people affected."
          projects:
            - name: Feature inventory with owners and usage
              description: |-
                ## Purpose
                Most products carry features nobody owns any more: a report built for one customer years ago, a legacy editor kept behind a setting, an integration with a tool that has since shut down. A single inventory listing every user-facing feature with its owner, monthly active accounts and last meaningful change is the raw material for every retirement decision that follows, and it usually turns up three or four candidates on its own.

                ## Milestones
                1. Every user-facing feature listed in one sheet, including settings-only and admin-only ones.
                2. Each row carrying a named owning team, or marked as unowned.
                3. Monthly active accounts and last release date filled in for at least 80 percent of rows.
                4. Features used by fewer than 2 percent of active accounts flagged for review.

                ## Notes
                Build the list from navigation, settings screens, the help centre and pricing pages, not only from the code. Features hidden behind old plan flags are the ones most often missed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory of every user-facing feature with owner, monthly active accounts and last release date, with low-use features flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every menu item and settings screen in the product in one sheet"
                - "Add the owning team for each feature from the engineering team list"
                - "Ask the analytics lead for monthly active accounts per feature"
                - "Flag every feature used by fewer than 2 percent of active accounts"
                - "Refresh owners and usage figures in the feature inventory @recurring(yearly)"
            - name: Written deprecation policy with notice periods
              description: |-
                ## Purpose
                When each retirement is negotiated from scratch, the loudest customer sets the notice period and sales promises exceptions nobody can keep. A short written policy stating minimum notice by feature type, who approves a retirement and what affected customers are always offered makes every later sunset faster and easier to defend.

                ## Milestones
                1. Minimum notice periods agreed for at least three categories, for example minor interface features, paid capabilities, and APIs or integrations.
                2. Approval rules written: who can propose a retirement, who signs it off and when leadership must be involved.
                3. Standard commitments listed, such as a data export, a migration guide and a named contact.
                4. The policy reviewed by support, sales, legal and engineering leads and published internally.
                5. Notice commitments already in customer contracts or public terms checked against the policy.

                ## Notes
                Contracts and public terms can override your policy for specific customers. Ask your legal team which commitments already exist before you publish any numbers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published deprecation policy with notice periods by feature category, approval rules and standard customer commitments, reviewed by four functions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the notice periods used in the last three retirements, if any"
                - "Draft minimum notice periods for three categories of feature"
                - "Ask legal which notice terms already appear in customer contracts"
                - "Circulate the draft policy to support, sales and engineering leads"
                - "Publish the agreed policy on the internal product wiki"
            - name: Lifecycle stages from announced to removed
              description: |-
                ## Purpose
                Words like deprecated, legacy, end of life and sunset mean different things to different teams, and customers hear them differently again. Defining four or five named stages, each with what still works, what support covers and what the product shows, lets everyone describe a retirement in the same terms.

                ## Milestones
                1. Named stages defined, such as announced, deprecated, read-only, removed and data deleted.
                2. For each stage, what users can still do, what support will help with and which fixes engineering will still ship.
                3. A label or banner style agreed for each stage shown inside the product.
                4. The stages added to the deprecation policy and the help centre glossary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four or five lifecycle stages defined with user capability, support and fix commitments for each, added to the policy and help centre."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every term your teams currently use for retiring features"
                - "Draft a one-line definition for each proposed lifecycle stage"
                - "Agree with support what help is offered at each stage"
                - "Add the stage definitions to the policy and the help centre glossary"
            - name: Usage evidence pack for a retirement candidate
              description: |-
                ## Purpose
                A retirement proposal built on a single number, such as three hundred users, falls apart the first time someone asks which three hundred. An evidence pack showing who uses the feature, how often, how much revenue those accounts carry and whether use is falling turns a hunch into a case that survives a leadership review.

                ## Milestones
                1. Twelve months of weekly active accounts charted, with the trend described in one sentence.
                2. Users split by plan, segment and region, with the top 20 accounts by revenue named.
                3. Seasonal or periodic use checked, such as year-end reports that run only once a year.
                4. Support tickets and feature requests mentioning the feature counted for the same period.
                5. A one-page summary written that a sceptical sales leader could check line by line.

                ## Notes
                Count accounts and revenue, not only users. Ten heavy users inside one large account can matter more than a thousand casual ones.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page evidence pack with twelve months of usage, a segment split, top accounts by revenue and ticket counts for one retirement candidate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the strongest retirement candidate from the feature inventory"
                - "Pull twelve months of weekly active accounts for that feature"
                - "Name the top 20 accounts by revenue that used it this year"
                - "Count support tickets mentioning the feature over the same period"
                - "Ask the agent to draft the one-page summary from the figures"
            - name: Carrying cost estimate for a legacy feature
              description: |-
                ## Purpose
                Old features rarely look expensive because their cost is spread across many small things: a security patch here, a broken test there, a help article nobody updates. Adding up engineering hours, infrastructure, support time and the work the feature blocks gives a yearly cost you can set against the value its users get.

                ## Milestones
                1. Engineering hours spent on the feature in the last twelve months estimated from tickets and commits.
                2. Infrastructure, licence and third-party costs attributed to it listed.
                3. Support hours spent on its tickets estimated.
                4. Work blocked or slowed by the feature, such as a framework upgrade or database migration, described.
                5. A yearly carrying cost, with its assumptions, added to the evidence pack.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly carrying cost for one legacy feature covering engineering, infrastructure, support and blocked work, with its assumptions written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search the issue tracker for tickets touching the feature in the last year"
                - "Ask engineering which upgrades or migrations the feature makes harder"
                - "Estimate support hours from the tickets tagged to the feature"
                - "Write the yearly cost and its assumptions into the evidence pack"
                - "Re-estimate the carrying cost of the three oldest features @recurring(yearly)"
            - name: Contract and promise check before retiring
              description: |-
                ## Purpose
                Features end up in order forms, security questionnaires, marketing pages and partner agreements, and removing one that a contract names can turn a product decision into a dispute. Checking every place the feature was promised, with legal and the account teams, before anything is announced is far cheaper than hearing about it from an angry procurement team.

                ## Milestones
                1. Contracts, order forms and statements of work searched for the feature's current and older names.
                2. Public pages, pricing tables and sales decks that mention it listed.
                3. Partner or reseller agreements that depend on it identified.
                4. Legal's view on notice or replacement obligations recorded for each affected contract.
                5. Contracts needing a specific conversation passed to their named account owners.

                ## Notes
                This is fact-finding for your legal team to interpret. Do not tell a customer what their contract allows until legal has said so.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of every contract, page and partner agreement naming the feature, with legal's view recorded for each affected contract."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask legal or the deal desk to search contracts for the feature name"
                - "List public pages, pricing tables and decks that mention the feature"
                - "Check partner agreements for integrations that depend on the feature"
                - "Record legal's view on obligations for each affected contract"
                - "Send each flagged contract to its account owner with a short summary"
            - name: Retire, keep or rebuild decision record
              description: |-
                ## Purpose
                Retirement is one of three honest answers; the others are keeping the feature as it is or rebuilding it properly, and the decision goes better when all three are costed. A short decision record comparing the options, with the chosen one signed off by the right people, stops the question being reopened every quarter.

                ## Milestones
                1. Three options described: retire, keep as it is, or rebuild or replace.
                2. Each option scored on cost, customer impact, revenue risk and strategic fit.
                3. A recommendation written with the evidence pack and contract check attached.
                4. Sign-off recorded from the product leader and the heads of engineering and customer success.
                5. The record stored where the next person to propose the same thing will find it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed decision record comparing retire, keep and rebuild for one feature, filed in the product decision log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one paragraph each for the retire, keep and rebuild options"
                - "Score each option on cost, customer impact, revenue risk and fit"
                - "Book a thirty-minute sign-off with product, engineering and success leads"
                - "File the signed decision record in the product decision log"
            - name: Affected account list by segment and exposure
              description: |-
                ## Purpose
                Every affected customer needs to hear about a retirement, but not in the same way: a free user can get an email and a banner, while an enterprise account with the feature in a daily workflow needs a call. Sorting affected accounts by how deeply they rely on the feature and how much they pay tells you where to spend scarce account manager time.

                ## Milestones
                1. Every account that used the feature in the last 90 days listed with plan, revenue and owner.
                2. Each account placed in one of three exposure levels, from light use to critical workflow.
                3. A contact approach chosen for each level, such as in-product only, email plus banner, or a call.
                4. Account managers sent their accounts to confirm or correct.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every account using the feature in the last 90 days listed with an exposure level and contact approach, confirmed by account managers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the accounts that used the feature in the last 90 days"
                - "Join plan, revenue and account owner to each row"
                - "Sort the accounts into light, regular and critical exposure"
                - "Send each account manager their accounts to confirm"
            - name: Named sunset owner and working group
              description: |-
                ## Purpose
                Retirements stall in the gap between teams: product announces, engineering waits for the date, support hears last and nobody chases the holdouts. Naming one owner for each sunset, with a small working group drawn from engineering, support, customer success and marketing, gives the work a home and a person to ask.

                ## Milestones
                1. One accountable owner named for the retirement, with time set aside in their plan.
                2. A working group of four to six people, each with a named role.
                3. A shared channel and decision document for status and decisions.
                4. A first meeting held that agrees the target removal date and the next three steps.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named sunset owner and a working group with roles, a shared channel and an agreed target removal date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your manager to confirm who owns this retirement end to end"
                - "Invite one person each from engineering, support, success and marketing"
                - "Create a shared channel and decision document for the retirement"
                - "Hold a first meeting and agree the target removal date"
            - name: Quarterly retirement candidate review
              description: |-
                ## Purpose
                Products accumulate features faster than they shed them, so without a standing review the inventory only grows. A quarterly half hour going through the lowest-use and highest-cost features, and choosing at most one or two to investigate, keeps retirement a normal part of product work rather than an occasional purge.

                ## Milestones
                1. A quarterly slot in the product leadership calendar.
                2. A shortlist of the five lowest-use or highest-cost features prepared before each review.
                3. At most two candidates chosen each quarter for an evidence pack.
                4. Four reviews held in a year, each with its decisions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews held in twelve months, each recording which features were shortlisted and which were chosen for investigation."
                cadence: rolling
              tasks:
                - "Book a recurring quarterly slot with product leadership"
                - "Prepare the five lowest-use and highest-cost features from the inventory @recurring(quarterly)"
                - "Record which candidates were chosen and why"
                - "Drop candidates rejected twice unless new evidence appears"
            - name: Monthly usage watch on deprecated features
              description: |-
                ## Purpose
                Once a feature is announced as deprecated, its usage curve tells you whether customers are actually moving. Recording active accounts on each deprecated feature every month, beside the replacement's adoption among the same accounts, shows early which retirements will hit their date and which need more help.

                ## Milestones
                1. A log with one row per deprecated feature per month.
                2. Active accounts on the old feature and on the replacement recorded side by side.
                3. A target curve drawn from announcement to removal date for each feature.
                4. Any feature more than 20 percent behind its curve raised with the working group.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly usage figures for every deprecated feature and its replacement logged for six months, with lagging features raised."
                cadence: rolling
              tasks:
                - "Create a usage log from the metrics log template"
                - "Add a target migration curve for each deprecated feature"
                - "Record active accounts on the old and new features @recurring(monthly:9)"
                - "Raise any feature 20 percent behind its curve with its owner"
            - name: Weekly sunset stand-up during active retirements
              description: |-
                ## Purpose
                During the months between announcement and removal, small things go wrong quietly: a reminder email misses a segment, a big account goes silent, a help article still says the feature is staying. A fifteen-minute weekly stand-up with the working group catches these while they are still cheap to fix.

                ## Milestones
                1. A recurring fifteen-minute slot for the working group.
                2. A standing agenda: usage this week, holdout accounts, support themes and the next dates.
                3. Actions captured with an owner and a date at every meeting.
                4. The stand-up ended or moved to monthly once removal is done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly stand-up held throughout each active retirement, with actions and owners recorded at every meeting."
                cadence: rolling
              tasks:
                - "Set up a fifteen-minute weekly slot for the sunset working group"
                - "Run the sunset stand-up and capture actions with owners @recurring(weekly:tue)"
                - "Stop or reduce the stand-up within two weeks of removal"
            - name: Register of active deprecations and dates
              description: |-
                ## Purpose
                Sales, support and marketing need to know what is going away and when, and they should not have to ask product every time. A single register of every active deprecation, with stage, key dates, replacement and owner, gives everyone the same answer and stops two retirements landing on the same customers in the same month.

                ## Milestones
                1. One register listing every feature in any stage from announced to removed.
                2. Columns for stage, announcement date, removal date, replacement, owner and help article.
                3. The register linked from the sales and support wikis.
                4. The register updated monthly and checked for clashing dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared register of every active deprecation with stage, dates, replacement and owner, updated monthly and linked from the sales and support wikis."
                cadence: rolling
              tasks:
                - "Create the deprecation register with stage, dates, replacement and owner"
                - "Link the register from the sales and support wikis"
                - "Update stages and dates in the deprecation register @recurring(monthly:17)"
                - "Check for retirements hitting the same customers in the same month"
            - name: Customer notice schedule for each retirement
              description: |-
                ## Purpose
                One announcement is never enough: people miss emails, change jobs and forget dates. A planned sequence of notices, for example at announcement, 90 days, 30 days, 7 days and on the day, across email, in-product banners and account calls, gives every affected customer several fair chances to act.

                ## Milestones
                1. A notice sequence written with dates, channels and audience for each step.
                2. Message drafts for each step approved by support and marketing.
                3. Every send scheduled or assigned to a named person.
                4. A log kept of what was sent to whom and when.

                ## Notes
                Keep the notice log. When a customer says they were never told, it is the only thing that settles the question.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated notice sequence for each active retirement, with every send logged by date, channel and audience."
                cadence: rolling
              tasks:
                - "Draft the notice sequence with dates, channels and audiences"
                - "Get each message draft approved by support and marketing"
                - "Check which customer notices are due in the coming month @recurring(monthly:3)"
                - "Record every sent notice in the notice log"
            - name: Support ticket tagging for deprecation contacts
              description: |-
                ## Purpose
                Support hears how a retirement is landing weeks before the usage data shows it. A consistent tag on every ticket about a deprecated feature, reviewed weekly for themes, shows which workflows the replacement does not cover and which messages are confusing people.

                ## Milestones
                1. A tag for each active retirement added to the help desk and explained to agents.
                2. Tagged tickets reviewed weekly and grouped into themes.
                3. The top three themes shared with the working group each week.
                4. At least one fix made to the migration guide or the replacement as a result.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every ticket about an active retirement tagged, with weekly themes shared and at least one fix made from them."
                cadence: rolling
              tasks:
                - "Add a help desk tag for each active retirement"
                - "Brief support agents on when to apply the tag"
                - "Group the week's tagged tickets into themes @recurring(weekly:thu)"
                - "Share the top three themes with the working group"
            - name: Monthly briefing for account teams
              description: |-
                ## Purpose
                Account managers are the people customers call first, and nothing damages trust faster than an account manager learning about a retirement from the customer. A short monthly briefing covering what is going away, which of their accounts are affected and what to say keeps the field ahead of the news.

                ## Milestones
                1. A one-page briefing format with dates, affected accounts and suggested wording.
                2. Each briefing sent before the customer notices it covers go out.
                3. Questions from account managers collected and answered in the next edition.
                4. Six consecutive monthly briefings sent.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six monthly briefings sent to account teams, each ahead of the customer notices it covers."
                cadence: rolling
              tasks:
                - "Write a one-page briefing format with dates and suggested wording"
                - "Send the account team briefing ahead of customer notices @recurring(monthly:24)"
                - "Collect account manager questions and answer them in the next briefing"
            - name: Internal dependency check on deprecated code paths
              description: |-
                ## Purpose
                Other internal teams often call the feature you are retiring through a shared service, a report, a data pipeline or an admin script, and they find out when it breaks. A monthly check of logs and code search for internal callers, with each one given an owner and a migration date, prevents the removal day surprise.

                ## Milestones
                1. Code search and logs used to list every internal caller of the deprecated feature.
                2. Each caller assigned to an owning team with a migration date.
                3. A monthly check confirming the list is shrinking.
                4. No internal callers left two weeks before removal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every internal caller of each deprecated feature listed with an owner and migration date, and none left two weeks before removal."
                cadence: rolling
              tasks:
                - "Ask engineering to search code and logs for internal callers"
                - "Assign each internal caller to an owning team with a date"
                - "Re-run the internal caller search and update the list @recurring(monthly:12)"
                - "Confirm zero internal callers two weeks before removal"
            - name: Annual review of the deprecation policy
              description: |-
                ## Purpose
                A policy written before your first enterprise contract or your first public API will not fit the company two years later. Reviewing notice periods, approvals and commitments once a year, against what actually happened in that year's retirements, keeps the policy honest and usable.

                ## Milestones
                1. Every retirement in the past year listed with its notice period and outcome.
                2. Cases where the policy was bent or ignored noted with the reason.
                3. Changes to notice periods, approvals or commitments proposed.
                4. The updated policy republished with a short change note.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The deprecation policy reviewed once a year against that year's retirements and republished with a change note."
                cadence: cyclic
              tasks:
                - "Book the yearly policy review with support, sales and legal leads @recurring(yearly)"
                - "List every retirement this year with its notice period and outcome"
                - "Note each case where the policy was bent and why"
                - "Republish the policy with a short change note"
            - name: Post-removal clean-up tracker
              description: |-
                ## Purpose
                Switching a feature off is not the end: dead code, old flags, orphaned database tables, help articles, sales decks, pricing pages and onboarding emails still point at it for months. A clean-up tracker with every leftover listed and closed off each month finishes the job and returns the engineering time the retirement was meant to save.

                ## Milestones
                1. A clean-up list for each removed feature covering code, flags, data, docs, marketing and billing.
                2. Each item assigned to an owner.
                3. Finished items checked off each month and overdue ones chased.
                4. Every list empty within three months of removal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each removed feature has a clean-up list covering code, flags, data, docs, marketing and billing, emptied within three months of removal."
                cadence: rolling
              tasks:
                - "Create a clean-up list for the most recently removed feature"
                - "Assign each leftover item to an owning team"
                - "Close finished clean-up items and chase overdue ones @recurring(monthly:28)"
                - "Search the help centre and website for remaining mentions"
            - name: Writing deprecation notices customers act on
              description: |-
                ## Purpose
                Notices fail when they bury the date, lead with the company's reasons or leave the reader unsure what to do. Practising a clear structure (what is changing, when, why, what you need to do and where to get help) on two or three real notices makes your next one shorter and far more likely to be read.

                ## Milestones
                1. Five public deprecation notices from other products collected and marked for what worked.
                2. A notice structure written: change, date, reason, action, help.
                3. One past notice from your own product rewritten in that structure.
                4. The rewrite tested on two colleagues outside product, who explain back what they must do.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rewritten notice that two colleagues outside product can explain back correctly, with the structure saved for future notices."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect five public deprecation notices from products you use"
                - "Mark what each notice does well and badly"
                - "Rewrite one of your own past notices in the new structure"
                - "Ask two colleagues outside product to explain back what they must do"
            - name: Reading usage data for retirement decisions
              description: |-
                ## Purpose
                Usage figures for low-use features are easy to misread: a weekly active count misses monthly reports, a user count hides one critical account, and a falling trend may only be a seasonal dip. Learning the handful of cuts that matter (frequency, depth, account weighting and seasonality) keeps you from retiring something that only looks unused.

                ## Milestones
                1. Daily, weekly, monthly and yearly active counts compared for one low-use feature.
                2. Usage weighted by account revenue as well as by user.
                3. A full year of data checked for seasonal or period-end peaks.
                4. A short note written on which cut changed the picture most.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One low-use feature analysed by frequency, account weighting and seasonality, with a note on which cut changed the conclusion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull daily, weekly, monthly and yearly active counts for one feature"
                - "Weight the same usage by account revenue"
                - "Check twelve months of data for period-end peaks"
                - "Write a short note on which view changed the picture most"
            - name: Handling hard conversations about a removed feature
              description: |-
                ## Purpose
                Someone on the team will have to tell a long-standing customer that a feature they rely on is going, and the call will be uncomfortable. Practising the conversation (acknowledging the impact, giving the reason in one sentence, offering the migration path and not promising what you cannot deliver) makes the real call calmer for both sides.

                ## Milestones
                1. Three likely objections written down from past tickets or calls.
                2. A short talk track covering impact, reason, migration path and help.
                3. Two role-play sessions held with a colleague playing the customer.
                4. A list of things never to promise, such as extensions, agreed with your manager.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A talk track and a list of things not to promise, practised in two role-plays and agreed with your manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three objections you expect, drawn from past tickets and calls"
                - "Draft a talk track covering impact, reason, migration path and help"
                - "Run two role-plays with a colleague playing the customer"
                - "Agree with your manager what must never be promised on these calls"
            - name: Case studies of well and badly handled sunsets
              description: |-
                ## Purpose
                Plenty of well-known products have retired features in public, some with months of notice and careful migration help, others overnight with a short blog post. Studying five of these, and noting notice period, migration help and the reaction, gives your team shared examples to point at when someone suggests cutting corners.

                ## Milestones
                1. Five public retirements chosen, mixing well handled and badly handled ones.
                2. Notice period, migration help, data export and customer reaction recorded for each.
                3. Three lessons written that apply to your own product.
                4. A twenty-minute session held with the team to share them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five public retirements compared on notice, migration help and reaction, with three lessons shared in a team session."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick five public feature or product retirements to study"
                - "Record notice period, migration help and customer reaction for each"
                - "Write three lessons that apply to your own product"
                - "Share the lessons in a twenty-minute team session"
            - name: Estimating customer migration effort
              description: |-
                ## Purpose
                Notice periods only make sense when you know how long a customer actually needs to move: a settings change takes minutes, while rebuilding fifty automated workflows or retraining a call centre takes months. Walking through the migration as three real customers would, and timing each step, gives you a defensible notice period and shows where tooling would help.

                ## Milestones
                1. Three representative customers chosen: a light user, a typical one and a heavy one.
                2. Each migration step listed and timed by doing it on a test account.
                3. Total effort per customer type estimated in hours and calendar weeks.
                4. The estimate compared with the planned notice period and any gap raised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Migration effort estimated for light, typical and heavy customers by timing each step, and compared with the planned notice period."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a light, a typical and a heavy customer to model"
                - "Run the migration on a test account and time each step"
                - "Estimate hours and calendar weeks for each customer type"
                - "Raise any gap between migration effort and the planned notice period"
            - name: Spotting sunk cost thinking in keep decisions
              description: |-
                ## Purpose
                Teams keep features alive because of how much they cost to build, who championed them or a reluctance to admit they did not work, and none of these says anything about future value. Learning to name sunk cost and loss aversion in a meeting, and to ask what you would decide if the feature did not exist yet, makes retirement discussions shorter and fairer.

                ## Milestones
                1. A short reading on sunk cost and loss aversion done.
                2. Two past decisions to keep a feature reviewed for these patterns.
                3. A single reframing question agreed for retirement discussions.
                4. The question used in at least one real decision meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two past keep decisions reviewed for sunk cost reasoning, and a reframing question used in one real retirement discussion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a short explainer on sunk cost and loss aversion"
                - "Review two past decisions to keep a feature for these patterns"
                - "Write one reframing question for retirement discussions"
                - "Use the question in the next retirement decision meeting"
            - name: Data retention and export basics for retirements
              description: |-
                ## Purpose
                Removing a feature often means deciding what happens to the data customers created in it: keep it, hand it back, convert it or delete it on a schedule. Learning what your privacy, security and legal colleagues need to know, and the questions to bring them, avoids retiring a feature in a way that breaks a retention commitment or a deletion request.

                ## Milestones
                1. The types of customer data stored by the retiring feature listed.
                2. Your company's retention and deletion commitments read, with questions noted.
                3. A meeting held with privacy or legal to agree what happens to each data type.
                4. The agreed approach written into the retirement plan.

                ## Notes
                Your privacy or legal team makes the call. This work is about bringing them a clear list early, not deciding for them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every data type in the retiring feature listed, with a keep, export, convert or delete approach agreed by privacy or legal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each type of customer data the retiring feature stores"
                - "Read the company's retention and deletion commitments"
                - "Book a meeting with privacy or legal to agree the approach"
                - "Write the agreed data approach into the retirement plan"
            - name: Migration path to the replacement feature
              description: |-
                ## Purpose
                Customers forgive a retirement far more readily when there is a clear place to go and a way to get there. Mapping each job the old feature does to how the replacement handles it, and closing or openly admitting the gaps, is usually the biggest single factor in whether usage moves before the removal date.

                ## Milestones
                1. Every job the old feature does listed from usage data, tickets and interviews.
                2. Each job mapped to how the replacement or an alternative handles it.
                3. Gaps marked as closing before removal, closing later or not planned.
                4. Gaps that will not close stated plainly in the migration guide.
                5. Two heavy users walked through the path and their feedback recorded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A job-by-job map from the old feature to the replacement, with gaps classified and the path tested with two heavy users."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every job the old feature does from tickets and usage data"
                - "Map each job to how the replacement handles it"
                - "Mark each gap as closing before removal, closing later or not planned"
                - "Walk two heavy users through the migration and note where they stall"
            - name: Self-serve data export for the retiring feature
              description: |-
                ## Purpose
                If customers cannot take their data with them, every retirement becomes a support queue of manual exports and a source of real anger. A self-serve export in a common format, available from announcement day, turns the hardest objection into a single help article.

                ## Milestones
                1. An export format agreed with support and two customers, for example CSV or JSON with documented fields.
                2. The export built and tested on the largest real account.
                3. The export available in the product from announcement day.
                4. A help article published explaining how to export and what is included.

                ## Notes
                Start from the **Product spec** template. Test with the largest account early: exports that work on test data often time out on real volumes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A self-serve export, tested on the largest account, available in the product from announcement day with a help article."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask support which export formats customers have requested before"
                - "Write a short export spec from the product spec template"
                - "Test the export on the largest real account's data"
                - "Publish the help article explaining what the export includes"
            - name: Migration guide in the help centre
              description: |-
                ## Purpose
                A migration guide is the document support, account managers and customers will all send each other, so it has to answer the real questions in order. One page covering what is changing, the dates, a step-by-step move to the replacement, known gaps and how to get help saves hundreds of individual replies.

                ## Milestones
                1. A guide drafted with dates, steps, screenshots, known gaps and contacts.
                2. The steps tested by someone who has never used the replacement.
                3. The guide linked from every notice, banner and the deprecation register.
                4. The guide updated within a week of any date or scope change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested migration guide linked from every notice and banner, updated within a week of each date or scope change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the migration guide with dates, steps and known gaps"
                - "Ask someone new to the replacement to follow the steps"
                - "Link the guide from every notice, banner and the register"
                - "Ask the agent to turn the top support questions into an FAQ section"
            - name: Choosing hard removal, read-only or hidden
              description: |-
                ## Purpose
                Retiring does not always mean deleting. A feature can become read-only so old work stays visible, be hidden from new accounts while existing ones keep it, or be removed outright, and each choice moves cost and risk around differently. Comparing the three for your case avoids defaulting to whichever one engineering prefers.

                ## Milestones
                1. Hard removal, read-only and hidden for new accounts described for this feature.
                2. Each option costed for engineering, support and ongoing maintenance.
                3. The customer impact of each described for light and heavy users.
                4. One option chosen and its reasoning added to the decision record.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Hard removal, read-only and hidden options costed and compared for one feature, with the choice recorded in the decision record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe what hard removal, read-only and hidden would each mean here"
                - "Ask engineering for the maintenance cost of each option"
                - "Describe the impact of each option on a heavy user"
                - "Record the chosen option and the reasons in the decision record"
            - name: Extension and exception rules for holdout accounts
              description: |-
                ## Purpose
                Near the removal date, a few important accounts will ask for more time, and without rules every request becomes an escalation to the most senior person available. Agreeing in advance who can grant an extension, for how long, on what conditions and how it is tracked keeps exceptions rare and visible.

                ## Milestones
                1. Criteria for granting an extension written, such as a documented migration blocker.
                2. A maximum extension length and an approver agreed.
                3. Conditions attached, such as a dated migration plan from the customer.
                4. Every extension tracked in the deprecation register with its end date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written extension rules with criteria, maximum length and approver, and every extension granted tracked with an end date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the criteria for when an extension can be granted"
                - "Agree the maximum extension and its approver with your manager"
                - "Add an extensions column with end dates to the deprecation register"
                - "Review open extensions and their end dates @recurring(monthly:20)"
            - name: Credit or concession decision for paying customers
              description: |-
                ## Purpose
                When a feature included in a paid plan goes away, some customers will reasonably feel they are getting less for the same price. Deciding with finance and customer success, before the announcement, whether any credit, discount or plan change is offered and to whom stops individual account managers improvising different deals.

                ## Milestones
                1. Affected paying accounts listed with plan and contract value.
                2. Options compared: no concession, a one-time credit, a plan change or a free add-on.
                3. A decision agreed with finance and customer success, with eligibility rules.
                4. Account managers briefed on what can and cannot be offered.

                ## Notes
                Keep this separate from wider pricing changes. Bundling a retirement with a price rise makes both harder to explain.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A concession decision with eligibility rules agreed by finance and customer success, and account managers briefed before the announcement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List affected paying accounts with plan and contract value"
                - "Compare no concession, a credit, a plan change and a free add-on"
                - "Agree the decision and eligibility rules with finance and success"
                - "Brief account managers on what they can and cannot offer"
            - name: Hiding the feature from new accounts first
              description: |-
                ## Purpose
                Every new account that starts using a feature you plan to retire is one more migration later. Removing the entry point for new sign-ups first, while existing users keep access, stops the problem growing and gives a cleaner picture of who really depends on it.

                ## Milestones
                1. New accounts and new users within existing accounts treated as separate decisions.
                2. Entry points for new accounts removed behind a flag.
                3. Usage among new accounts confirmed at zero after a month.
                4. Sales demos and onboarding materials updated to stop showing the feature.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The feature hidden from new accounts behind a flag, with zero new-account usage confirmed after one month and onboarding materials updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide whether new users in existing accounts also lose the entry point"
                - "Ask engineering to hide the entry point for new accounts behind a flag"
                - "Check new-account usage of the feature after one month"
                - "Remove the feature from onboarding emails and sales demos"
            - name: Deprecation announcement day
              description: |-
                ## Purpose
                The announcement is the moment a retirement becomes real to customers, and everything needed on that day should exist before it: the notice, the guide, the export, briefed account teams and support macros. Treating it as a dated event with a short checklist makes it a quiet day rather than a scramble.

                ## Milestones
                1. Notice, migration guide, export and in-product banner ready and reviewed two days before.
                2. Account teams and support briefed at least a week before.
                3. The announcement sent to each segment through its agreed channel.
                4. Day-one questions logged and answered within one working day.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The announcement sent on the planned date with guide, export and banner live, and every day-one question answered within one working day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the announcement date, avoiding holidays and big launches"
                - "Confirm the guide, export and banner are ready two days before"
                - "Brief support and account teams a week ahead of the announcement"
                - "Log every day-one question and the answer given"
            - name: Final reminder push a month before removal
              description: |-
                ## Purpose
                Most customers act in the last few weeks, whatever the notice period, so the final month needs extra effort. A last push 30 days out, targeting accounts still using the feature with direct emails, banners and calls for critical accounts, is where most of the remaining usage moves.

                ## Milestones
                1. Accounts still active on the feature listed 35 days before removal.
                2. A direct reminder sent to every one of them.
                3. Calls booked with every remaining critical account.
                4. Remaining active accounts recounted a week before removal.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every account still using the feature 30 days before removal reminded directly, with calls held with each critical account."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the accounts still using the feature 35 days before removal"
                - "Send a direct reminder to each remaining account"
                - "Book calls with every remaining critical account"
                - "Recount active accounts a week before removal"
            - name: Brownout test before switch-off
              description: |-
                ## Purpose
                Some users will ignore every email and only notice when the feature stops working. A planned brownout, switching the feature off for an announced hour or day and then restoring it, flushes out these users and the internal systems nobody listed, while there is still time to help them.

                ## Milestones
                1. A brownout window chosen and announced with at least a week's notice.
                2. The feature switched off for the window and restored on time.
                3. Every ticket, error and complaint during the window logged.
                4. Newly discovered users and systems added to the outreach list.

                ## Notes
                Brownouts are common for APIs and less so for interface features. Keep the window short and rehearse the restore step.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One announced brownout run and reversed on time, with every ticket and newly discovered dependency logged and followed up."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a short brownout window at a low-traffic time"
                - "Announce the brownout to affected accounts a week ahead"
                - "Rehearse the restore step with engineering before the window"
                - "Log every ticket and error raised during the brownout"
            - name: Sunset readiness review before removal
              description: |-
                ## Purpose
                Two weeks before removal there is still time to move the date, and moving it then is far better than rolling back on the day. A short readiness review against written criteria (remaining usage, internal callers, open extensions, support readiness) gives a clear go or delay decision.

                ## Milestones
                1. Readiness criteria written, such as remaining critical accounts and internal callers both at zero.
                2. Risks of going ahead listed with likelihood, impact and mitigation.
                3. A go or delay decision recorded with the names of those who made it.
                4. Any delay communicated to customers within two working days.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A go or delay decision taken two weeks before removal against written criteria, with risks logged and decision makers named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the readiness criteria for the removal decision"
                - "Log the risks of going ahead in the risk register"
                - "Hold the go or delay review with the working group"
                - "Tell customers within two working days if the date moves"
            - name: Removal day runbook and switch-off
              description: |-
                ## Purpose
                On removal day the work is small but the cost of a mistake is high: the wrong flag, a forgotten scheduled job or a deletion run too early. A written runbook with steps, owners, a rollback plan and a watch period makes the switch-off routine, and reversible for as long as you said it would be.

                ## Milestones
                1. A runbook listing each step, its owner and its rollback.
                2. The runbook walked through with engineering and support a week before.
                3. The feature switched off on the announced date.
                4. Errors, tickets and usage watched for 48 hours with a named person on call.
                5. Removal confirmed in the deprecation register and the notice log.

                ## Notes
                Start from the **Operational checklist** template. Separate switching off from deleting data, and keep data recoverable until the date your policy states.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The feature switched off on the announced date using a written runbook, with a 48-hour watch and no unplanned rollback."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the removal runbook from the operational checklist template"
                - "Walk through the runbook with engineering and support a week before"
                - "Name the person on call for the 48 hours after switch-off"
                - "Mark the feature as removed in the deprecation register"
            - name: Thirty-day post-removal review
              description: |-
                ## Purpose
                Thirty days after removal is the right time to see what really happened: how many accounts churned or downgraded, what support absorbed and what the team got back. A short written review with the working group is how the next retirement gets easier.

                ## Milestones
                1. Usage, churn, downgrades and ticket volume compared with the plan.
                2. Engineering time and cost saved estimated.
                3. Three things to keep and three to change written down.
                4. Actions assigned to owners and added to the playbook.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written review held within 30 days of removal comparing outcomes with the plan, with three keep and three change items and owners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book the review for 30 days after removal"
                - "Gather usage, churn, downgrade and ticket figures against the plan"
                - "Write three things to keep and three to change"
                - "Assign each change to an owner"
            - name: Retiring a feature your own team built
              description: |-
                ## Purpose
                Engineers and designers who built a feature often hear its retirement as a verdict on their work, and morale suffers if it is handled as a quiet deletion. Telling the team first, sharing the evidence, crediting what the feature achieved and giving them a hand in the removal makes it a finished piece of work rather than a failure.

                ## Milestones
                1. The team told before anyone outside it, with the evidence pack shared.
                2. What the feature achieved for customers written down and acknowledged.
                3. Team members offered roles in the migration or removal work.
                4. Concerns raised by the team captured and answered.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The building team told first with the evidence, the feature's achievements written up, and team concerns answered in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Share the evidence pack with the team before anyone outside it"
                - "Write a short note on what the feature achieved for customers"
                - "Offer team members roles in the migration or removal work"
                - "Answer the team's concerns in writing after the meeting"
            - name: Leadership case for retiring a revenue feature
              description: |-
                ## Purpose
                Retiring something attached to revenue needs a manager to argue for it at leadership level, where the first question is always what the company loses. A two-page case showing revenue at risk, likely churn, carrying cost and what the freed capacity would build lets leaders weigh it as a trade-off rather than a loss.

                ## Milestones
                1. Revenue at risk estimated from affected accounts and their exposure.
                2. A likely churn range agreed with customer success.
                3. Carrying cost and freed capacity stated in team weeks.
                4. The case presented to leadership and the decision recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A two-page case with revenue at risk, churn range, carrying cost and freed capacity presented to leadership, with the decision recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate revenue at risk from the affected account list"
                - "Agree a likely churn range with the customer success lead"
                - "State carrying cost and freed capacity in team weeks"
                - "Present the two-page case and record the decision"
            - name: Inheriting a half-finished deprecation
              description: |-
                ## Purpose
                Product managers move on, and their retirements often stall halfway: announced but not removed, with dates passed and customers unsure what is true. Taking one over means first establishing the facts (what was promised, to whom and by when) before deciding whether to continue, reset the dates or reverse it.

                ## Milestones
                1. Every notice sent so far found and listed with its date.
                2. Current usage and the promises made to individual accounts gathered.
                3. A decision taken to continue, reset dates or reverse, with reasons.
                4. Customers told the current plan in one clear message.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fact base of past notices, promises and usage gathered, and a continue, reset or reverse decision communicated to customers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find every notice sent so far and list the dates"
                - "Ask account managers what was promised to their accounts"
                - "Decide whether to continue, reset the dates or reverse"
                - "Send customers one clear message stating the current plan"
            - name: Small-team retirement without dedicated support
              description: |-
                ## Purpose
                In a team of five with no support desk or account managers, the product manager often writes the notices, answers the replies and makes the calls. Planning a lighter sunset, with fewer channels, a longer notice period, canned replies and a firm limit on custom help, keeps the retirement from eating a whole quarter.

                ## Milestones
                1. A notice plan using two channels at most.
                2. Five canned replies written for the most likely questions.
                3. A cap agreed on custom migration help per account.
                4. Time blocked in the team plan for replies in the final month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lightweight sunset plan with two channels, five canned replies and a cap on custom help, with reply time blocked for the final month."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose at most two channels for all retirement notices"
                - "Write five canned replies for the questions you expect"
                - "Agree a cap on custom migration help per account"
                - "Block reply time in the team plan for the final month"
            - name: Migration support for a critical enterprise account
              description: |-
                ## Purpose
                One large account with the feature built into a daily process can be worth more than every other affected customer combined, and it needs its own plan. Running a dedicated migration with their admin, an agreed timeline and a weekly check-in protects the relationship and gives early warning if the removal date is at risk.

                ## Milestones
                1. A named admin and executive sponsor identified on the customer side.
                2. A migration plan with dates agreed in writing with the customer.
                3. Weekly check-ins held until the migration is complete.
                4. Completion confirmed by the customer before the removal date.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A critical account's migration plan agreed in writing, weekly check-ins held, and completion confirmed by the customer before removal."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the account manager to set up a call with the customer admin"
                - "Agree a dated migration plan in writing with the customer"
                - "Hold the migration check-in with the customer admin @recurring(weekly:wed)"
                - "Get written confirmation of completion before removal"
            - name: Sequencing several retirements as a manager
              description: |-
                ## Purpose
                Managers running more than one retirement at a time risk hitting the same customers with two notices in a month, or pulling the same engineers onto three removals at once. A simple sequence across all retirements, checked against customer overlap and team capacity, spreads the load for customers and teams alike.

                ## Milestones
                1. All planned and active retirements listed with dates and affected accounts.
                2. Overlapping customers and teams identified.
                3. A sequence agreed that spaces notices and removals.
                4. The sequence reviewed each quarter with peer managers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A sequence across all retirements with no account receiving two notices in the same month, reviewed each quarter."
                cadence: cyclic
              tasks:
                - "List all planned and active retirements with their dates"
                - "Find accounts affected by more than one retirement"
                - "Agree a sequence that spaces notices and removals"
                - "Review the retirement sequence with peer managers @recurring(quarterly)"
            - name: API version sunset with deprecation headers
              description: |-
                ## Purpose
                API consumers are code, not people, and code does not read emails, so API retirements need signals in the responses themselves. Adding deprecation and sunset headers, warnings in the developer dashboard and per-client traffic tracking lets you contact the specific integrations still calling the old version.

                ## Milestones
                1. Deprecation and sunset headers added to responses from the old version.
                2. Traffic on the old version broken down by client or key owner.
                3. Every client still calling the old version contacted directly.
                4. Old version traffic below an agreed threshold before shutdown.

                ## Notes
                Standard headers for deprecation and sunset dates exist. Ask your platform team which ones your gateway supports.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Old version responses carry deprecation and sunset headers, every remaining client is contacted, and traffic is below the agreed threshold before shutdown."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the platform team to add deprecation and sunset headers"
                - "Break down old version traffic by client and key owner"
                - "Email each client still calling the old version"
                - "Check traffic on sunset API versions by client @recurring(monthly:6)"
            - name: Minimum app version for removed mobile features
              description: |-
                ## Purpose
                On mobile, users of old app versions keep calling features long after you removed them from the current release, and some never update. Setting a minimum supported version, with an in-app upgrade prompt and a forced upgrade only as a last resort, lets the server side retire cleanly.

                ## Milestones
                1. The share of active users on each app version measured.
                2. A minimum version chosen that no longer depends on the removed feature.
                3. A soft upgrade prompt shipped and its effect measured.
                4. A forced upgrade date set only once the remaining share is small.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A minimum supported app version set with a soft upgrade prompt, and the share of users below it tracked monthly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Measure the share of active users on each app version"
                - "Choose a minimum version that no longer calls the removed feature"
                - "Ship a soft upgrade prompt to users below the minimum"
                - "Check the share of users below the minimum app version @recurring(monthly:15)"
            - name: End-of-life plan for a whole product
              description: |-
                ## Purpose
                Shutting down an entire product combines every part of a feature retirement with refunds, contract terminations, data deletion and often a team moving on. A written end-of-life plan with phases, dates, customer commitments and an owner for each workstream keeps a difficult decision from becoming a reputational one.

                ## Milestones
                1. Phases defined: announcement, no new sales, read-only, shutdown and data deletion.
                2. Customer commitments written: export, refunds or credits, and migration partners if any.
                3. Workstream owners named for engineering, support, finance, legal and communications.
                4. The plan approved by leadership and its dates fixed.
                5. Data deletion completed and confirmed after the final date.

                ## Notes
                Refunds, contract terminations and data deletion need finance and legal sign-off for each country you sell in. The plan organises the work; they make those calls.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved end-of-life plan with dated phases, written customer commitments and named workstream owners, carried through to confirmed data deletion."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft the phases from announcement to data deletion with dates"
                - "Write the commitments customers will receive at shutdown"
                - "Name an owner for each of the five workstreams"
                - "Ask finance and legal to sign off refunds and terminations"
            - name: Retirement outcome scorecard across past sunsets
              description: |-
                ## Purpose
                After three or four retirements, patterns show up: which notice periods worked, which segments churned, how long clean-up really took. Keeping a scorecard with the same measures for every retirement turns anecdotes into numbers you can use to set targets and defend the next proposal.

                ## Milestones
                1. A fixed set of measures: notice period, migration rate at removal, churn, tickets, clean-up time and cost saved.
                2. Every completed retirement scored on the same measures.
                3. Averages and outliers reviewed with product leadership.
                4. Targets for the next retirement set from the averages.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every completed retirement scored on the same six measures, with targets for the next retirement set from the averages."
                cadence: rolling
              tasks:
                - "Agree six measures to score every retirement on"
                - "Score each completed retirement from the last two years"
                - "Add each newly completed retirement to the scorecard @recurring(quarterly)"
                - "Set targets for the next retirement from the averages"
            - name: Reusable deprecation playbook for the organisation
              description: |-
                ## Purpose
                Once your teams have run a few sunsets, the knowledge sits in old channels and in the heads of whoever ran them. A playbook bringing together the policy, stages, notice templates, runbook, scorecard targets and worked examples lets any product manager run a retirement to the same standard without starting from scratch.

                ## Milestones
                1. Policy, lifecycle stages, notice templates and runbook gathered in one place.
                2. Two worked examples from real retirements written up.
                3. The playbook tested by a product manager running their first retirement.
                4. The playbook reviewed and updated every year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook with policy, stages, templates, runbook and two worked examples, used by at least one product manager on a first retirement."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Gather the policy, stages, notice templates and runbook in one space"
                - "Write up two real retirements as worked examples"
                - "Ask a product manager new to retirements to use it and give feedback"
                - "Fold lessons from the latest retirements into the playbook @recurring(yearly)"
                - "Ask the agent to draft a one-page quick start from the playbook"
---

# Feature Deprecation & Sunsetting

This area is for product teams and managers who need to retire a feature, an API version or a whole product without losing the trust of the customers who relied on it. It starts with foundations (an inventory, a deprecation policy, lifecycle stages, usage evidence, carrying cost, contract checks and a signed decision), moves through the operating rhythm of candidate reviews, usage watches, notice schedules and clean-up, then covers skills, migration and export decisions, dated moments from announcement to removal day, situations such as inheriting a stalled sunset or supporting a critical account, and specialist work on API sunsets, mobile app versions, full product end of life and a reusable playbook.

The rhythm is weekly for the sunset stand-up, support ticket themes and critical account check-ins, monthly for usage figures, the deprecation register, notice dates, account team briefings, internal caller checks, extensions and clean-up, quarterly for the candidate review and the outcome scorecard, and yearly for the policy, the inventory and the playbook. The Metrics log, Feedback themes, Product spec, Operational checklist, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
