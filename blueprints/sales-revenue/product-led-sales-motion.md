---
id: sales-revenue.product-led-sales-motion
name: Product-Led Sales Motion
description: "Product usage signals in the CRM, a clear product qualified lead definition, helpful outreach to trial and free users, and the rules and tests that turn self-serve accounts into paid and larger contracts."
category: business
version: 1.0.0
tags: [sales-revenue, product-led-sales-motion, team, founder, enterprise, product-qualified-leads, free-trial, self-serve]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - product-spec
    - feedback-themes
    - purchase-decision
    - onboarding-30-60-90
    - operational-checklist
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product-Led Sales Motion
          description: "Spotting high-intent free or trial users from product data and converting them into paid or larger contracts with timely, helpful sales outreach."
          projects:
            - name: Product usage data audit for the sales team
              description: |-
                ## Purpose
                Before anyone can call a user about their usage, someone has to know which product events are tracked, where they live and how fresh they are. Most teams discover their tracking plan has gaps, renamed events and no link between a user and a company. An honest inventory of what exists today stops the sales motion being designed around data nobody can actually get.

                ## Milestones
                1. A list of the tracked product events that matter for buying, each with a name, a definition and an owner.
                2. The system each event lives in recorded, with how many hours it takes to reach a place sales can see.
                3. Gaps named: events not tracked, users without a company, accounts without a plan field.
                4. A short agreed list of the ten signals worth piping to sales first.

                ## Notes
                Sit with whoever owns product analytics for an hour rather than reading the tracking plan alone. The documented plan and what actually fires in the product are often different.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A signed-off inventory of tracked product events, their freshness and their gaps exists, with ten priority signals chosen for sales."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book an hour with the product analytics owner to walk the tracking plan"
                - "List the events tied to setup, collaboration, usage limits and billing"
                - "Note how many hours each event takes to reach a reporting tool"
                - "Write down every gap that would stop a rep linking a user to a company"
                - "Agree the first ten signals to send to sales"
            - name: Activation moment that predicts paid conversion
              description: |-
                ## Purpose
                Signups are cheap and most never come back, so the useful question is which early actions separate users who go on to pay from those who drift away. Comparing converted and lapsed cohorts on their first fourteen days usually points to one or two actions, such as inviting a teammate or connecting a data source, that matter more than everything else. That moment becomes the backbone of scoring, outreach timing and onboarding.

                ## Milestones
                1. Two cohorts pulled: users who converted to paid in the last six months and a matched group who did not.
                2. The first fourteen days of actions compared for both cohorts.
                3. One to three candidate activation actions written down with their conversion rates.
                4. An activation definition agreed with product and growth, including the time window it must happen within.

                ## Notes
                Correlation is not cause. Treat the activation moment as a hypothesis to test through the outreach programme, not a law.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written activation definition, with the conversion rate of users who reach it compared with those who do not, is agreed by sales, product and growth."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the data owner for converted and non-converted cohorts from the last six months"
                - "Compare the first fourteen days of actions for each cohort"
                - "Shortlist the actions with the biggest gap in conversion rate"
                - "Agree one activation definition with the product and growth leads"
            - name: First product qualified lead definition
              description: |-
                ## Purpose
                A product qualified lead, or PQL, is a user or account whose behaviour in the product shows they are likely to buy, and without a written definition every rep invents their own. Combining the activation moment with fit, such as company size, and intent, such as pricing page visits or hitting a limit, gives a first version the whole team can work from. Start simple: a rule a person can explain in one sentence beats a model nobody trusts.

                ## Milestones
                1. A one-sentence PQL rule combining usage, fit and intent signals.
                2. The rule applied to the last ninety days of signups, with a count of how many would have qualified.
                3. The conversion rate of those historical PQLs compared with all signups.
                4. The definition published where reps and product can find it, with a version number and date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A versioned PQL definition is published, with a back-test showing how many past signups it would have flagged and how they converted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a draft PQL rule in one sentence using usage, fit and intent"
                - "Back-test the rule against the last ninety days of signups"
                - "Compare the conversion rate of flagged users with all signups"
                - "Publish the definition with a version number and date"
                - "Revisit the PQL definition against recently closed deals @recurring(quarterly)"
            - name: Self-serve and sales-assist routing thresholds
              description: |-
                ## Purpose
                Not every paying user should talk to a salesperson: a five-seat team on a monthly card plan is often happier, and cheaper to serve, buying on its own. Writing down the thresholds that move an account from pure self-serve to sales-assisted, such as seat count, company size, plan requested or expected contract value, protects the margin of the self-serve channel and points reps at accounts where a conversation changes the outcome.

                ## Milestones
                1. Two or three thresholds chosen, each with a number, such as twenty seats or a contract value above an agreed figure.
                2. A middle band defined where light-touch help, not a full sales cycle, is offered.
                3. Sample accounts from last quarter sorted into the bands to test the rules.
                4. The thresholds signed off by the heads of sales and growth.

                ## Notes
                Revisit the thresholds after the pilot. The first numbers are educated guesses and the data will move them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written routing thresholds place every account into self-serve, light-touch or sales-assisted, signed off by sales and growth leaders."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull last quarter's paid accounts with seats, plan and contract value"
                - "Draft thresholds for self-serve, light-touch and sales-assisted bands"
                - "Sort twenty sample accounts into the bands and check the results make sense"
                - "Get sign-off on the thresholds from the sales and growth leaders"
            - name: Product signals on the CRM account record
              description: |-
                ## Purpose
                Reps will not open a separate analytics tool before every call, so the signals that matter have to sit on the account and contact records they already live in. A handful of fields, such as active users this week, current plan, last activation event and limit reached, synced daily, turns the CRM into the place where product-led selling actually happens.

                ## Milestones
                1. Eight to twelve product fields defined with names, sources and refresh frequency.
                2. The fields created on account and contact records and populated by a daily sync.
                3. Data spot-checked on twenty accounts against the live product.
                4. A sync error report that a named person owns.

                ## Notes
                Fewer fields that are right every morning beat fifty that are stale. Agree field names with whoever administers the CRM so they fit existing conventions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Product usage fields refresh daily on CRM accounts and contacts, and a spot check of twenty accounts matches the live product."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the product fields reps would check before a call"
                - "Agree field names and refresh times with the CRM administrator"
                - "Spot-check twenty synced accounts against the live product"
                - "Review the sync error report and assign fixes @recurring(weekly:mon)"
            - name: Matching workspaces and users to companies
              description: |-
                ## Purpose
                Product data arrives as email addresses and workspace names, while sales works in companies, and the join between them is messier than it looks. Users sign up with personal email, one company runs six separate workspaces, and contractors appear under a client's domain. Clear matching rules mean an account view reflects every team in a company, not one lonely user.

                ## Milestones
                1. Rules written for company domains, personal email domains and agencies or contractors.
                2. Personal-domain users given their own review queue rather than dropped.
                3. Multiple workspaces from one company rolled up to a single CRM account.
                4. A monthly count of unmatched active workspaces, with a target to reduce it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Matching rules are documented and applied, and unmatched active workspaces are counted monthly, with the count falling over three months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export the hundred most active workspaces and check how each maps to a company"
                - "Write matching rules for company, personal and contractor domains"
                - "Roll up companies with several workspaces into one account"
                - "Review unmatched active workspaces and fix the largest @recurring(monthly:12)"
            - name: Rules of engagement for self-serve accounts
              description: |-
                ## Purpose
                Few things annoy a happy self-serve customer like three reps emailing in the same week, and few things annoy a rep like finding a growth campaign already in front of their prospect. Written rules about who owns a user or account, when sales may reach out, and which accounts are never contacted keep the customer experience calm and the credit disputes short.

                ## Milestones
                1. Ownership rules for users, workspaces and accounts written down.
                2. A list of triggers that allow sales contact, and of situations where sales must not reach out.
                3. Agreed handling for marketing emails and in-app messages once a rep is engaged.
                4. A simple process for disputes, with one named decider.

                ## Notes
                Keep a do-not-contact flag in the product data for users who have said they only want self-serve, and respect it everywhere.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A rules of engagement page covering ownership, contact triggers, exclusions and disputes is published and acknowledged by sales and growth."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down who owns a user, workspace and account at each stage"
                - "List the triggers that permit sales contact and the ones that forbid it"
                - "Agree how marketing and in-app messages pause when a rep engages"
                - "Name one person who settles ownership disputes"
                - "Review the rules of engagement with sales and growth @recurring(yearly)"
            - name: Consent and privacy check on product data outreach
              description: |-
                ## Purpose
                Using what someone does inside a product to start a sales conversation is common, but it still has to fit your privacy notice, the consent users gave and the rules in the countries you sell into. A short review with whoever handles privacy, before the first outreach goes out, avoids messages that feel invasive and data uses you cannot defend.

                ## Milestones
                1. The current privacy notice and terms checked for how product data may be used for sales contact.
                2. Questions on consent, opt-outs and regional rules taken to your privacy lead or legal adviser.
                3. Guidance recorded on what outreach may reference, such as features used, and what it must not, such as content users created.
                4. An opt-out that actually stops sales contact, tested end to end.

                ## Notes
                This project organises the questions and records the answers. The decisions belong to your privacy lead or legal adviser.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written privacy guidance on which product signals outreach may reference is recorded, and a working opt-out has been tested end to end."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the privacy notice sections that cover product data and marketing"
                - "List the questions about consent and opt-outs for your privacy lead"
                - "Record what outreach may and may not reference from product usage"
                - "Test that an opt-out stops sales emails within one working day"
                - "Recheck the outreach guidance against the current privacy notice @recurring(yearly)"
            - name: Free-to-paid conversion baseline
              description: |-
                ## Purpose
                Without a baseline, nobody can say whether sales outreach to free and trial users made a difference or just took credit for upgrades that would have happened anyway. Measuring signup to activation, activation to paid and time to convert for the last two quarters, split by company size, gives the numbers every later experiment is judged against.

                ## Milestones
                1. Signup, activation and paid counts for each of the last two quarters.
                2. Conversion rates and median days to convert, split by company size band.
                3. Self-serve upgrades separated from upgrades that involved a salesperson.
                4. The baseline saved with its definitions so it can be rerun the same way.

                ## Notes
                Freeze the definitions now. Changing how activation is counted later makes every comparison meaningless.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-quarter baseline of signup, activation and paid conversion rates by size band is saved together with its definitions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull signup, activation and paid counts for the last two quarters"
                - "Split conversion rates and days to convert by company size"
                - "Separate self-serve upgrades from upgrades a salesperson touched"
                - "Ask the agent to write a one-page summary of the baseline and its definitions"
            - name: Daily product qualified lead queue
              description: |-
                ## Purpose
                PQLs go cold fast: a team that hit its seat limit this morning is choosing a plan, or a competitor, by Friday. A short daily pass over the new PQL queue, with each lead accepted, routed to light-touch help or rejected with a reason, keeps response times in hours and gives the scoring rules honest feedback.

                ## Milestones
                1. A single queue view in the CRM showing new PQLs with the signal that triggered each.
                2. Every PQL worked or dispositioned within one business day.
                3. Rejection reasons chosen from a short fixed list.
                4. A weekly count of PQLs created, accepted, rejected and converted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least nine in ten new PQLs are accepted, routed or rejected with a reason within one business day, measured over a month."
                cadence: rolling
              tasks:
                - "Build a CRM view of new PQLs sorted by trigger time"
                - "Agree five rejection reasons reps must choose from"
                - "Work the new PQL queue before mid-morning @recurring(daily)"
                - "Send PQL disposition counts to the sales lead @recurring(weekly:mon)"
            - name: Weekly PQL scoring calibration
              description: |-
                ## Purpose
                Scoring rules drift as the product changes: a new feature shows up in every trial and suddenly half of all signups look qualified. A thirty-minute weekly review of PQLs that reps rejected, and of paid accounts that never triggered a PQL, catches false positives and misses while they are still small.

                ## Milestones
                1. A weekly list of rejected PQLs with reasons, alongside paid accounts that never qualified.
                2. Each mismatch tagged as a scoring, data or process problem.
                3. Rule changes logged with the date and the reason.
                4. PQL acceptance rate tracked week by week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change log shows weekly calibration reviews held for a full quarter, and the rep acceptance rate of PQLs is tracked every week."
                cadence: rolling
              tasks:
                - "Pull rejected PQLs and unflagged paid accounts from the past week"
                - "Tag each mismatch as a scoring, data or process problem"
                - "Log every scoring rule change with its date and reason"
                - "Hold the thirty-minute scoring calibration review @recurring(weekly:fri)"
            - name: Helpful outreach sequence for product qualified leads
              description: |-
                ## Purpose
                A user who is mid-trial does not want a cold pitch, but many do want a quick answer, a setup tip or someone to explain the plans to their manager. A short sequence built around the signal that fired, offering one concrete piece of help in each step, earns replies where generic sales email gets ignored.

                ## Milestones
                1. Three or four message templates, each tied to a specific trigger such as a limit reached or a teammate invited.
                2. Every step offering one concrete help item, such as a setup guide, a short call or a plan comparison.
                3. Reply and meeting rates tracked for each template.
                4. The weakest template rewritten at least once based on the numbers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A set of trigger-specific PQL messages is live, with reply and meeting rates recorded per template over at least six weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the three most common PQL triggers to write for"
                - "Draft one helpful message per trigger with a single clear offer"
                - "Set up reply and meeting tracking for each template"
                - "Review reply rates and rewrite the weakest message @recurring(monthly:26)"
            - name: In-app talk to sales and hand-raise prompts
              description: |-
                ## Purpose
                Some of the strongest buying signals are users asking for help: clicking contact sales on the pricing page, requesting a quote, or asking about security in the help widget. Designing where those prompts appear, what they ask and where the answers go, together with the product team, makes hand-raisers visible within minutes instead of buried in a support inbox.

                ## Milestones
                1. An inventory of every place in the product where a user can already ask for sales or billing help.
                2. A short spec for prompts on the pricing page, at usage limits and in admin settings.
                3. Each hand-raise routed straight into the PQL queue with its context.
                4. Hand-raise volume and conversion tracked separately from scored PQLs.

                ## Notes
                Start from the **Product spec** template. Keep the form to two or three fields, because every extra question loses hand-raisers.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "In-app hand-raise prompts are live in at least three places, and every submission lands in the PQL queue with its context."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every place users can currently ask for sales or billing help"
                - "Write a product spec for hand-raise prompts with the product team"
                - "Route hand-raise submissions into the PQL queue with their page and plan"
                - "Track hand-raise volume and conversion apart from scored PQLs"
            - name: Usage limit and upgrade moment alerts
              description: |-
                ## Purpose
                Hitting a seat cap, storage limit or feature paywall is the moment a free or entry-tier account decides whether to pay more or work around the limit. Alerts that tell the owning rep when a team reaches about eighty percent of a limit, with the context of who is affected, let them offer the right plan before the workaround becomes a habit.

                ## Milestones
                1. The limits that most often come before an upgrade identified from past data.
                2. Alert thresholds set, with qualifying accounts filtered by the routing rules.
                3. Alerts delivered to the owning rep with account context and a suggested next step.
                4. A month of alerts reviewed for noise and the thresholds adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Limit alerts reach the owning rep for qualifying accounts, and a review after one month records noise rates and any threshold changes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find which limits most often come just before an upgrade"
                - "Set alert thresholds for the top three limits"
                - "Send each alert to the owning rep with account context attached"
                - "Review a month of alerts and switch off the noisy ones"
            - name: Trial expiry outreach rhythm
              description: |-
                ## Purpose
                Trials end on a date everyone can see coming, yet many teams only notice an engaged trial once it has lapsed. A fixed rhythm of check-ins early in the trial, a few days before expiry and the day after, aimed only at trials above the fit threshold, catches buying conversations while the user still has momentum.

                ## Milestones
                1. A list of fit trials ending in the next fourteen days, refreshed weekly.
                2. Check-in points agreed: early in the trial, three days before expiry and one day after.
                3. Extension rules written so reps offer extra time consistently.
                4. Expired-trial conversions measured against the baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every qualifying trial gets the agreed check-ins, extensions follow written rules, and trial conversion is reported against the baseline each month."
                cadence: rolling
              tasks:
                - "Build a list of fit trials ending in the next fourteen days"
                - "Write extension rules covering length and who may approve them"
                - "Work the list of fit trials ending this week @recurring(weekly:tue)"
                - "Compare this quarter's trial conversion with the baseline"
            - name: Guided trials for larger prospects
              description: |-
                ## Purpose
                Departments of two hundred people evaluating against two competitors rarely succeed with a self-serve trial alone. A guided trial with agreed success criteria, a named contact on each side, a kick-off and a midpoint check gives the buyer evidence for their business case and gives the rep a clear point to ask for the decision.

                ## Milestones
                1. Entry criteria for a guided trial written and tied to the routing thresholds.
                2. A one-page trial plan with success criteria, dates and owners on both sides.
                3. Kick-off and midpoint calls held for each guided trial.
                4. A decision meeting booked before every guided trial ends.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every guided trial has written success criteria, a kick-off, a midpoint review and a decision meeting booked before it ends."
                cadence: rolling
              tasks:
                - "Write the entry criteria for a guided trial"
                - "Draft a one-page trial plan with success criteria and owners"
                - "Book the decision meeting during the trial kick-off call"
                - "Check progress on every active guided trial @recurring(weekly:wed)"
            - name: Light-touch assist for mid-sized self-serve accounts
              description: |-
                ## Purpose
                Accounts in the middle band, too big to ignore but too small for a full sales cycle, are where many product-led teams lose money either way. A pooled assist model, with live chat, a weekly group onboarding session and short calls the user can book, gives these teams a human when they want one without dedicating a rep to each.

                ## Milestones
                1. The middle band from the routing thresholds turned into a live list of accounts.
                2. Two assist channels chosen from chat, group sessions or bookable short calls.
                3. A weekly group session running, with attendance tracked.
                4. Conversion of assisted mid-band accounts compared with the baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Mid-band accounts can reach a person through at least two assist channels, and their conversion is compared with the baseline each quarter."
                cadence: rolling
              tasks:
                - "Pull the list of accounts in the middle routing band"
                - "Choose two assist channels the team can actually staff"
                - "Run the group onboarding session for mid-band users @recurring(weekly:thu)"
                - "Compare mid-band conversion with the baseline after a quarter"
            - name: Monthly product-led sales funnel review
              description: |-
                ## Purpose
                Once PQLs, trials and hand-raises are flowing, leaders need one view that shows where accounts stall: too few PQLs, poor acceptance, slow response or weak conversion. A monthly review of the same six numbers, compared with the baseline, keeps the motion honest and decides where next month's effort goes.

                ## Milestones
                1. Six funnel numbers chosen: signups, activation, PQLs, acceptance, meetings and paid conversions.
                2. A dashboard showing each number monthly against the baseline.
                3. A monthly meeting that ends with one change to try.
                4. A record of the changes tried and what moved.

                ## Notes
                Start from the **Metrics log** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A funnel dashboard with six fixed numbers is reviewed every month, and each review records one change to try and its later result."
                cadence: rolling
              tasks:
                - "Choose the six funnel numbers and write their definitions"
                - "Build the dashboard against the baseline figures"
                - "Run the monthly funnel review and pick one change @recurring(monthly:9)"
                - "Log each change tried and its result the following month"
            - name: Sales to product feedback loop
              description: |-
                ## Purpose
                Reps talking to trial users hear things the product team never sees in dashboards: the missing integration that blocked a purchase, the confusing permissions screen, the security question nobody could answer. A monthly digest of themes, with counts and the pipeline attached, gives product something to prioritise and shows users their feedback went somewhere.

                ## Milestones
                1. A tag or field in the CRM for product feedback heard in PLS conversations.
                2. A monthly digest of the top themes with counts and pipeline affected.
                3. A named product contact who responds to each digest.
                4. At least one theme closed with a change and reported back to the users who raised it.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly feedback digest with counts and affected pipeline goes to product, and at least one theme per quarter is closed and reported back."
                cadence: rolling
              tasks:
                - "Add a product feedback field to PLS call notes"
                - "Agree a named product contact for the digest"
                - "Send the monthly feedback themes digest to product @recurring(monthly:16)"
                - "Tell users when a theme they raised has shipped"
            - name: Reading product usage before a call
              description: |-
                ## Purpose
                Ten minutes in the product data before a call changes the conversation: you know who invited whom, which features stuck, what was tried and abandoned, and who the admin is. Practising a fixed pre-call routine on real accounts builds the habit of opening with the user's situation instead of a generic agenda.

                ## Milestones
                1. A one-page pre-call checklist of the usage facts to look up.
                2. The checklist used on ten real calls, with notes on what helped.
                3. Two example call openers that reference usage naturally.
                4. Prep time for a typical PLS call down to about ten minutes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pre-call usage checklist has been used on ten real calls, with notes and two written openers saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a pre-call checklist of the usage facts to look up"
                - "Use the checklist before your next ten PLS calls"
                - "Write two openers that mention usage without quoting numbers back"
                - "Time your prep and trim the checklist to what actually helped"
            - name: Writing outreach that sounds like help
              description: |-
                ## Purpose
                The line between a useful nudge and an unsettling one is mostly tone: 'I saw you exported 400 rows at 2am' alarms people, while 'teams your size usually hit this next' invites a reply. Practising rewrites of real messages, and testing them on colleagues, builds a voice that mentions behaviour without making users feel watched.

                ## Milestones
                1. Ten past outreach messages collected and scored for helpfulness and tone.
                2. Each message rewritten with one specific offer and no exact usage figures.
                3. The rewrites read by two colleagues who are not in sales.
                4. A short style guide of phrases to use and phrases to avoid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page outreach style guide exists, built from ten rewritten messages reviewed by two colleagues outside sales."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect ten recent PQL messages from the team's sent folders"
                - "Rewrite each with one offer and no exact usage numbers"
                - "Ask two colleagues outside sales which versions feel intrusive"
                - "Write a one-page list of phrases to use and avoid"
            - name: Discovery calls with users who already know the product
              description: |-
                ## Purpose
                Product-led buyers have often used the product for weeks, so a standard discovery script that explains what it does wastes their time. The skill is different: confirm what they already do, find the wider problem behind their usage, and work out who else needs to agree before the team moves to a paid plan.

                ## Milestones
                1. A discovery guide adapted for existing users that starts from their current usage.
                2. Questions on the wider problem, team rollout and approval path written out.
                3. Five calls recorded and reviewed against the guide.
                4. One change made to the guide based on what the recordings showed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A user-focused discovery guide has been tried on five recorded calls and revised once from what they showed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Rewrite your discovery opening to start from what the user already does"
                - "Add questions about team rollout and who approves spend"
                - "Record five calls with active users and review them against the guide"
                - "Change one part of the guide based on the recordings"
            - name: Finding the budget holder behind a bottom-up account
              description: |-
                ## Purpose
                The person using the product every day is rarely the one who signs a twenty-seat annual contract. Learning to map from an active user to their manager, the admin who controls tools and the budget holder, and asking your user champion for an introduction without making them feel used, is the core skill that turns usage into contracts.

                ## Milestones
                1. The user, the admin and the likely budget holder identified for three live accounts.
                2. An introduction request that gives the champion something useful to forward.
                3. A one-page summary champions can share internally, showing their team's usage and the case for a paid plan.
                4. At least one budget holder meeting secured through a champion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Budget holders are identified for three live bottom-up accounts, and at least one meeting has been booked through a user champion."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three active accounts with no budget holder identified"
                - "Identify the admin and the likely budget holder for each"
                - "Write an introduction request your champion can forward as it is"
                - "Ask the agent to draft a forwardable usage summary for one champion"
            - name: Self-serve querying of product analytics
              description: |-
                ## Purpose
                Sellers who must ask the data team for every answer wait days for things they could check in minutes. Learning the product analytics tool well enough to build a funnel, filter by account and save a cohort makes a PLS team faster and frees analysts for harder questions.

                ## Milestones
                1. Access to the analytics tool at a permission level suitable for sales.
                2. Five saved queries for common questions, such as active users by account.
                3. One cohort built and shared with the team.
                4. A weekly habit of answering one question yourself.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five saved product analytics queries are in use by the team, and one shared cohort has been built without help from the data team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Request read access to the product analytics tool"
                - "Build and save five queries for common account questions"
                - "Create and share one cohort of accounts close to a limit"
                - "Answer one sales question with your own query @recurring(weekly:thu)"
            - name: Selling to developers without putting them off
              description: |-
                ## Purpose
                Developers and technical users are often the first adopters of product-led tools and the quickest to block a vendor who sends pushy email. Learning how they evaluate, through docs, API limits and community answers, and offering technical help instead of meetings, earns the trust that later carries a purchase through their team.

                ## Milestones
                1. The documentation, pricing and API limit pages read as a new developer would read them.
                2. Outreach rewritten to offer technical help, such as a solutions engineer reply or a code sample.
                3. Three conversations with technical users reviewed for what they valued.
                4. A short list of things the team will never do in developer outreach.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Developer-specific outreach guidance, including a never-do list, is written and based on at least three reviewed conversations with technical users."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the docs, pricing and API limits pages as a new developer would"
                - "Rewrite one outreach template to offer technical help instead of a meeting"
                - "Review three conversations with technical users for what they valued"
                - "Write a never-do list for developer outreach"
            - name: Pricing and packaging mechanics for product-led selling
              description: |-
                ## Purpose
                Reps in a product-led team need to know exactly what happens at each plan boundary: what a seat costs, how usage meters work, what is gated behind each tier and how prorating behaves mid-term. Fluency here prevents wrong answers in front of buyers and helps reps spot which accounts are about to outgrow their plan.

                ## Milestones
                1. A one-page cheat sheet of plans, limits, prices and gated features.
                2. Proration, downgrade and annual switch rules written in plain words.
                3. Five tricky pricing questions answered and checked by finance.
                4. The cheat sheet updated after each pricing change.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A finance-checked one-page pricing cheat sheet covers every plan boundary, proration rule and gated feature."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every plan, limit and gated feature from the pricing page"
                - "Ask finance how proration and mid-term upgrades work"
                - "Answer five tricky pricing questions and have finance check them"
                - "Share the cheat sheet in the team's sales channel"
            - name: Choosing a product data to CRM sync tool
              description: |-
                ## Purpose
                Moving product data into the CRM can be done with a reverse ETL tool, a dedicated product-led sales platform, the analytics tool's own sync or a script your engineers maintain. Each has different costs, upkeep and limits on what reps see, so a short structured comparison saves a year of fighting the wrong tool.

                ## Milestones
                1. Requirements listed: data sources, refresh time, fields, scoring and alert needs.
                2. Three options compared on cost, setup time and who maintains them.
                3. The strongest option tested with real data on a handful of accounts.
                4. A decision recorded with the reasons and a named owner.

                ## Notes
                Start from the **Purchase decision** template. Include the build option and price engineering time honestly.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares three ways of syncing product data to the CRM and names the chosen option, its cost and its owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the sources, fields and refresh times the sync must cover"
                - "Compare three options on cost, setup time and maintenance"
                - "Test the strongest option on ten real accounts"
                - "Record the decision, its cost and its owner"
            - name: Free plan limits that open sales conversations
              description: |-
                ## Purpose
                If the free plan does everything a team needs, there is nothing to sell, and if it does too little, nobody activates. Working with product to review which limits, such as seats, history, admin controls or single sign-on, push growing teams towards a conversation gives sales natural moments to help without crippling the free experience.

                ## Milestones
                1. Current free and entry plan limits listed with how often each is hit.
                2. Upgrade rates after each limit compared.
                3. Proposed changes written with the expected effect on activation and upgrades.
                4. A decision from product and growth leaders, recorded.

                ## Notes
                Sales proposes; product and growth decide. Plan changes have effects far beyond the sales team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposal on free plan limits, with hit rates and upgrade effects, has been decided by product and growth leaders and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each free plan limit and how often accounts hit it"
                - "Compare upgrade rates in the thirty days after each limit"
                - "Write a proposal for one or two limit changes"
                - "Present the proposal to the product and growth leaders"
            - name: Rescue plan for trials that stall before activation
              description: |-
                ## Purpose
                Many trial accounts from good-fit companies sign up, look around and stop before reaching the activation moment. A targeted rescue, such as a setup call, a starter template or a data import service for fit accounts stuck at a known step, recovers some of those trials for a fraction of the cost of finding new ones.

                ## Milestones
                1. The two or three steps where fit trials most often stall identified.
                2. A rescue offer designed for each stall point.
                3. The offer sent to fit accounts stuck for more than three days.
                4. Activation of rescued accounts compared with similar accounts that got nothing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Rescue offers run for the top stall points, and activation of rescued fit trials is compared with an untouched group after six weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find where fit trial accounts most often stop before activation"
                - "Design one rescue offer for each stall point"
                - "Send the offer to fit accounts stuck for three days or more"
                - "Compare activation of rescued accounts with an untouched group"
            - name: Annual plan offer for monthly self-serve customers
              description: |-
                ## Purpose
                Monthly card-paying teams that have used the product steadily for six months are prime candidates for an annual plan, which lowers churn and brings cash forward. A clear offer, a target list built from usage and a simple way to switch without a long sales cycle make this one of the cheapest revenue gains a product-led team has.

                ## Milestones
                1. A target list of monthly accounts with six months of steady usage.
                2. An annual offer agreed with finance, with any discount inside approved limits.
                3. A one-click or one-call path to switch plans.
                4. Switch rate and cash collected tracked each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved annual offer has gone to every qualifying monthly account, and switch rate and cash collected are reported each quarter."
                cadence: cyclic
              tasks:
                - "Build a list of monthly accounts with six months of steady usage"
                - "Agree the annual offer and discount limits with finance"
                - "Set up the simplest possible path to switch plans"
                - "Refresh the target list and send the annual offer @recurring(quarterly)"
            - name: Consolidating scattered workspaces in one company
              description: |-
                ## Purpose
                Bottom-up adoption often leaves one company with several small, separately billed workspaces, none big enough for sales attention on its own. Bringing them together under one contract, with central admin and better pricing, solves real problems for the company's IT and finance teams and turns scattered spend into a single larger account.

                ## Milestones
                1. Companies with three or more separate workspaces listed with their combined spend.
                2. A consolidation offer covering admin, billing and price.
                3. The IT or finance contact identified for the top five companies.
                4. At least one consolidation agreed and the workspaces merged.

                ## Notes
                Get each workspace owner's agreement before any merge. Moving data between workspaces without the teams knowing destroys trust quickly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A consolidation offer exists, the top five multi-workspace companies have been approached, and at least one has signed and been merged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List companies running three or more separate workspaces"
                - "Draft a consolidation offer covering admin, billing and price"
                - "Find the IT or finance contact at the top five companies"
                - "Confirm each workspace owner agrees before any merge"
            - name: Procurement-ready pack for self-serve buyers
              description: |-
                ## Purpose
                Teams that want to move from a card to an invoice suddenly need a security questionnaire, supplier tax forms, a data processing agreement and purchase order support. Having these ready as a downloadable pack, with a simple invoice path, stops small upgrades turning into month-long procurement exercises.

                ## Milestones
                1. The documents growing self-serve buyers ask for most listed from past tickets.
                2. A pack holding the security overview, standard terms, data processing agreement and supplier forms.
                3. An invoice and purchase order option available above an agreed contract size.
                4. Average days from upgrade request to payment measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A procurement pack and invoice option are available to self-serve buyers, and days from upgrade request to payment are measured before and after."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search past tickets for the documents upgrading buyers asked for"
                - "Gather the security overview, terms and data processing agreement"
                - "Agree the contract size above which invoices and purchase orders are offered"
                - "Measure days from upgrade request to payment before and after"
            - name: Pruning PQL signals that do not predict revenue
              description: |-
                ## Purpose
                Scoring models collect signals the way attics collect boxes, and after a year many add noise rather than accuracy. A quarterly check of each signal against closed revenue, removing the ones that do not separate buyers from non-buyers, keeps the queue short and the reps trusting it.

                ## Milestones
                1. Every active scoring signal listed with its weight.
                2. Conversion to paid compared for accounts with and without each signal.
                3. Signals with no meaningful difference removed or down-weighted.
                4. PQL volume and acceptance rate compared before and after the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each quarter, every scoring signal is tested against paid conversion, weak signals are removed, and before and after acceptance rates are recorded."
                cadence: cyclic
              tasks:
                - "List every scoring signal and its current weight"
                - "Compare paid conversion with and without each signal"
                - "Remove or reduce signals that make no difference"
                - "Repeat the signal review against closed revenue @recurring(quarterly)"
            - name: Product-led sales team roles and structure
              description: |-
                ## Purpose
                As the motion grows, one generalist rep cannot work the PQL queue, run guided trials, answer technical questions and close enterprise consolidations. Deciding which roles you need, such as assist reps, product specialists, solutions engineers and account executives, and how accounts move between them, avoids hiring the wrong mix in a hurry.

                ## Milestones
                1. Current PLS work broken into tasks with the hours each takes per week.
                2. Two or three team designs sketched with roles and account handoffs.
                3. One design chosen, with the trigger point for each new hire.
                4. The design shared with recruiting and finance for planning.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen PLS team design with roles, handoffs and hiring triggers is documented and shared with recruiting and finance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the weekly PLS tasks and the hours each takes"
                - "Sketch two or three team designs with roles and handoffs"
                - "Choose a design and set the trigger for each new hire"
                - "Share the chosen design with recruiting and finance"
            - name: One-quarter product-led sales pilot
              description: |-
                ## Purpose
                Rolling out a full PLS motion on day one risks annoying self-serve customers and confusing reps, so a time-boxed pilot with two reps, one segment and a clear target is safer. After one quarter the team has real numbers on response rates, conversion and deal size to decide whether to expand, change or stop.

                ## Milestones
                1. Pilot scope written: two reps, one segment, the PQL definition and success targets.
                2. A comparison group of similar accounts left to self-serve.
                3. Weekly pilot check-ins held for the full quarter.
                4. A go, change or stop decision recorded with the numbers behind it.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A one-quarter pilot ends with conversion, deal size and response numbers compared to a self-serve group, and a recorded go, change or stop decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the pilot scope with segment, reps and success targets"
                - "Set aside a comparison group of similar accounts"
                - "Agree a standing weekly check-in slot with both pilot reps"
                - "Present the results and record the go, change or stop decision"
            - name: First enterprise contract from a bottom-up account
              description: |-
                ## Purpose
                The first time a free team inside a large company becomes an enterprise contract is a milestone, and the lessons are worth more than the deal. Preparing for it deliberately, with a security review pack, a champion plan and pricing approved in advance, makes the first one smoother and creates the template for the next ten.

                ## Milestones
                1. The best-placed bottom-up enterprise account chosen, with its usage, champion and budget holder.
                2. Security, legal and pricing approvals lined up before the proposal goes out.
                3. The contract signed and existing users moved onto it without disruption.
                4. A written retrospective of what worked, shared with the team.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An enterprise contract is signed with a company that started on the free or self-serve plan, and a retrospective is shared with the team."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick the bottom-up account with the most active users and a known champion"
                - "Line up security, legal and pricing approvals before the proposal"
                - "Plan how existing users move onto the contract without losing data"
                - "Write a retrospective and share it with the team"
            - name: Pricing change rollout across self-serve and sales
              description: |-
                ## Purpose
                When plans or prices change, self-serve customers see a banner while sales-assisted accounts expect a conversation, and mixed messages create churn and support tickets. A dated rollout plan covering grandfathering rules, rep talk tracks, in-app notices and an FAQ means everyone hears the same thing in the right order.

                ## Milestones
                1. Grandfathering and migration rules confirmed with finance and product.
                2. A talk track and FAQ for reps covering the five hardest questions.
                3. In-app notices and emails sequenced with sales outreach to key accounts.
                4. Ticket volume, downgrades and churn tracked for sixty days after launch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pricing change launches on a dated plan with rep talk tracks and an FAQ, and downgrades and churn are reported for sixty days afterwards."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm grandfathering rules with finance and product"
                - "Write the rep talk track and FAQ for the change"
                - "Sequence in-app notices with rep outreach to key accounts"
                - "Track tickets, downgrades and churn for sixty days"
            - name: Quarterly product-led sales review with product and growth
              description: |-
                ## Purpose
                Product-led sales sits across three teams, and without a regular shared review each one tunes its own numbers. A quarterly meeting that looks at the funnel, programme results, the feedback digest and the rules of engagement keeps product, growth and sales pulling in the same direction.

                ## Milestones
                1. A standing quarterly slot with sales, product and growth leaders.
                2. A pre-read with funnel numbers, top feedback themes and open disputes.
                3. Three agreed actions with owners from each review.
                4. Last quarter's actions reported on at the start of each meeting.

                ## Notes
                Keep it to sixty minutes of decisions, not status updates. The pre-read carries the numbers.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each quarter a joint review is held with a pre-read, three owned actions are recorded, and last quarter's actions are reported on."
                cadence: cyclic
              tasks:
                - "Book a standing quarterly slot with sales, product and growth leaders"
                - "Send the pre-read with funnel numbers and top themes @recurring(quarterly)"
                - "Agree three actions with owners before the meeting ends"
                - "Open each review with progress on last quarter's actions"
            - name: Sales-assist launch of a new paid tier
              description: |-
                ## Purpose
                Launching a new tier or add-on to an existing free base is a rare moment when thousands of users have a reason to hear from you. Picking the accounts most likely to benefit from their usage, briefing reps and timing outreach with the launch announcement turns a feature release into pipeline.

                ## Milestones
                1. The accounts most likely to benefit identified from their usage.
                2. Reps briefed with a one-page launch sheet and a short demo.
                3. Outreach timed to follow the in-app and email announcement.
                4. Launch pipeline and conversions reported at thirty and ninety days.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Launch outreach reaches the usage-selected target list alongside the announcement, with pipeline and conversions reported at thirty and ninety days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Identify accounts whose usage suggests they need the new tier"
                - "Brief reps with a one-page launch sheet and a short demo"
                - "Time rep outreach to land after the in-app announcement"
                - "Report launch pipeline at thirty and ninety days"
            - name: Founder working the signup list by hand
              description: |-
                ## Purpose
                Before any scoring or tooling, a founder who personally emails and calls promising signups learns more about why people buy than any dashboard can show. A few sessions a week on the newest signups, with notes in one simple sheet, finds the first paying customers and the signals worth automating later.

                ## Milestones
                1. A simple sheet listing each signup worth contacting, with company, role and what they did.
                2. A personal note sent to promising signups within a day or two.
                3. Notes from at least twenty conversations, including what made people pay.
                4. A first list of signals worth turning into a PQL rule.

                ## Notes
                Keep it personal and plain. Founders get replies a sales rep would not, so use that while it lasts.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "At least twenty founder conversations with signups are logged, and a first list of signals worth automating has been written."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set up a sheet of new signups with company, role and actions taken"
                - "Email the newest promising signups personally @recurring(weekly:mon,wed,fri)"
                - "Record what made each paying customer decide to pay"
                - "Write a first list of signals worth turning into a PQL rule"
            - name: First product-led sales hire and their first ninety days
              description: |-
                ## Purpose
                A first PLS hire is a hybrid of seller, support and analyst, and hiring a classic outbound rep for it often fails. Writing the role around the motion, working queues of warm users, short cycles and heavy use of product data, and planning their first ninety days, gives the hire a fair chance and the founder a clear way to judge it.

                ## Milestones
                1. A role description focused on warm queues, short cycles and product data.
                2. A ninety-day plan with weekly goals for the first month.
                3. Access to product data, the CRM fields and the PQL queue ready on day one.
                4. Success measures for day ninety agreed before the start date.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A role description and a ninety-day plan with agreed day-ninety measures exist before the first PLS hire starts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the role around warm queues, short cycles and product data"
                - "Draft the first thirty days of the ninety-day plan"
                - "Set up CRM, product data and PQL queue access before day one"
                - "Agree day-ninety success measures with the new hire"
            - name: Adding a free tier to a sales-led company
              description: |-
                ## Purpose
                Enterprise companies that launch a free tier or trial often find their account executives either ignore the new users or chase every one of them. Clear rules on which free accounts reps work, how revenue that starts self-serve is credited and how existing named accounts are protected, agreed before launch, prevent both the neglect and the stampede.

                ## Milestones
                1. Named-account protection rules for free signups inside existing customers and prospects.
                2. Criteria for which free accounts go to which sales team.
                3. Credit rules for revenue that starts self-serve, agreed with sales leadership.
                4. A launch briefing given to every account executive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Named-account protection, routing and credit rules for free users are agreed and briefed to every account executive before the free tier opens."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Decide how free signups inside named accounts will be flagged"
                - "Write routing criteria for free accounts by segment"
                - "Agree credit rules for revenue that starts self-serve"
                - "Brief every account executive before the free tier opens"
            - name: Unmanaged usage inside large enterprises
              description: |-
                ## Purpose
                Large companies often have hundreds of employees using a product on personal or team plans that IT has never approved. For enterprise sellers this unmanaged usage is both a risk the customer's security team will care about and the strongest possible case for a managed agreement, if it is raised carefully.

                ## Milestones
                1. A monthly report of large companies with unmanaged usage above a set number of users.
                2. A short, factual brief for the customer's IT or security team, with no personal user details.
                3. A managed agreement offer with admin controls and single sign-on.
                4. Outreach made to the top three companies on the report.

                ## Notes
                Share counts and trends, not lists of named employees, unless your privacy guidance says otherwise.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A monthly unmanaged usage report exists, and the top three companies on it have received a factual brief and a managed agreement offer."
                cadence: rolling
              tasks:
                - "Build a report of large companies with many unmanaged users"
                - "Write a factual usage brief for an IT or security audience"
                - "Prepare a managed agreement offer with admin controls and single sign-on"
                - "Refresh the unmanaged usage report and pick the next targets @recurring(monthly:20)"
            - name: Commercial conversion for an open source or developer tool
              description: |-
                ## Purpose
                Companies built on an open source project or a free developer tool have huge communities and very few buyers, and the signals look different: repository activity, self-hosted installs, support questions about scale. Finding which organisations run the tool in production, and what they would pay for, such as hosting, support or governance, starts a commercial motion that does not alienate the community.

                ## Milestones
                1. Signals of production use listed, such as opted-in install telemetry, community questions and company email domains.
                2. A monthly list of organisations showing production use.
                3. A paid offer defined around hosting, support or governance.
                4. Five organisations contacted with a help-first message.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A monthly list of organisations using the tool in production exists, a paid offer is defined, and five organisations have been contacted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the signals that show an organisation runs the tool in production"
                - "Define a paid offer around hosting, support or governance"
                - "Contact five organisations with a help-first message"
                - "Refresh the list of organisations showing production use @recurring(monthly:5)"
            - name: Handoff from growth to sales to customer success
              description: |-
                ## Purpose
                An account that converted with sales help can fall between teams: growth stops nurturing, the rep moves on and success does not know what was promised. A short handoff checklist for each stage change, triggered automatically, makes sure the new owner knows the usage, the promises and the next renewal date.

                ## Milestones
                1. The stage changes that trigger a handoff defined.
                2. A checklist covering usage summary, promises made, contacts and renewal date.
                3. The handoff task created automatically by the CRM.
                4. A quarterly sample of ten handoffs checked for completeness.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every PLS conversion triggers a handoff checklist, and at least nine of a sample of ten handoffs reviewed after a quarter are complete."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define which stage changes trigger a handoff"
                - "Write the handoff checklist with usage, promises, contacts and renewal date"
                - "Set the CRM to create the handoff task automatically"
                - "Check ten recent handoffs for missing items"
            - name: Conversion propensity model with the data team
              description: |-
                ## Purpose
                Once rule-based scoring has run for a few quarters, there is enough history to train a model that predicts which accounts will convert. Building one with the data team, and comparing it fairly against the existing rules, tells you whether the extra complexity earns its keep.

                ## Milestones
                1. Training data agreed: features, outcome definition and time window.
                2. A model built and tested on accounts it did not learn from.
                3. Precision of its top-scored accounts compared with the current rules.
                4. A decision to adopt, blend or shelve the model, recorded with the reasons.

                ## Notes
                Reps need to know why an account scored highly. A model that cannot show its top reasons will be ignored, however accurate it is.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A propensity model is tested on held-out accounts against the rule-based score, and the adopt, blend or shelve decision is recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the outcome, features and time window with the data team"
                - "Test the model on held-out accounts"
                - "Compare precision of the top hundred accounts with the current rules"
                - "Record whether to adopt, blend or shelve the model"
            - name: Product qualified account scoring across workspaces
              description: |-
                ## Purpose
                Individual user scores miss the bigger picture when a company has twelve teams each using a little: no single user qualifies, but the account clearly should. Rolling usage, breadth of teams and seniority of users up to company level gives a product qualified account, or PQA, score that points enterprise sellers at the right companies.

                ## Milestones
                1. Account-level signals defined: active users, teams, growth rate and seniority.
                2. A PQA score calculated monthly for every matched company.
                3. The top twenty accounts reviewed by sellers for sense.
                4. PQA-sourced pipeline tracked separately from user-level PQLs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly PQA score covers every matched company, and PQA-sourced pipeline is reported separately from user-level PQLs."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Define the account-level signals and their weights"
                - "Calculate a first PQA score for every matched company"
                - "Ask sellers to review the top twenty accounts for sense"
                - "Recalculate PQA scores and share the biggest movers with sellers @recurring(monthly:23)"
            - name: Holdout test of sales outreach impact
              description: |-
                ## Purpose
                Whether reps create revenue or simply attach themselves to upgrades that were coming anyway is the hardest question in product-led sales. Holding back a random share of PQLs from outreach for a quarter, and comparing conversion and contract size, is the cleanest way to answer it and to justify the team's cost.

                ## Milestones
                1. A random holdout share of PQLs agreed with leadership, with the expected cost of lost deals.
                2. Holdout accounts excluded from outreach for a full quarter.
                3. Conversion, contract size and time to convert compared between the groups.
                4. Results presented with a decision on where reps add value.

                ## Notes
                Keep the holdout honest: reps must not quietly contact held-out accounts, but hand-raisers should always get a reply.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarter-long randomised holdout compares conversion and contract size for contacted and untouched PQLs, with results and a decision presented to leadership."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the holdout share and its expected cost with leadership"
                - "Set up random assignment so reps cannot see held-out accounts"
                - "Compare conversion and contract size between the groups after the quarter"
                - "Present the results with a decision on where reps add value"
            - name: Committed contracts from pay-as-you-go spend
              description: |-
                ## Purpose
                Usage-based products often have customers spending large amounts month to month with no contract, no discount and no commitment. Spotting accounts with steady or rising spend and offering a committed-use agreement, with a better rate in exchange for a minimum, gives the customer predictability and the business revenue it can forecast.

                ## Milestones
                1. Accounts with three months of steady or rising pay-as-you-go spend listed.
                2. A committed-use offer agreed with finance, with rate bands and minimums.
                3. Outreach to the top ten accounts with a spend summary.
                4. Committed revenue signed and later usage tracked against each commitment.

                ## Notes
                Size commitments to real usage. Overcommitted customers become unhappy renewals.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A finance-approved committed-use offer has gone to the top ten pay-as-you-go accounts, with signed commitments and later usage tracked."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List accounts with three months of steady or rising usage spend"
                - "Agree rate bands and minimum commitments with finance"
                - "Send each of the top ten accounts a spend summary and an offer"
                - "Track usage after signing to check commitments were sized well"
            - name: Self-serve versus sales-assisted revenue economics
              description: |-
                ## Purpose
                Salaries, tools and discounts make product-led sales expensive, and every so often someone should check that it pays. Comparing acquisition cost, discount levels, contract size, payback and retention for self-serve and sales-assisted accounts shows where reps are worth their cost and where they are giving away margin.

                ## Milestones
                1. Costs allocated to the self-serve and sales-assisted channels with finance.
                2. Contract size, discount, payback and twelve-month retention compared by channel.
                3. Segments where sales involvement loses money identified.
                4. Recommendations on routing thresholds presented to leadership.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly analysis compares payback, discounting and retention for self-serve and sales-assisted accounts and leads to recorded threshold recommendations."
                cadence: cyclic
              tasks:
                - "Agree with finance how to split sales and growth costs by channel"
                - "Compare contract size, discount and retention by channel"
                - "Find the segments where sales involvement loses money"
                - "Rerun the channel economics analysis before annual planning @recurring(yearly)"
---

# Product-Led Sales Motion

This area is for sales teams, founders and enterprise sellers whose customers try the product before they talk to anyone, and who want to find the free and trial users worth a conversation. It starts with the foundations (product data, the activation moment, a PQL definition, routing thresholds, CRM signals and privacy), moves through the routines that work the queue and the trials, then the skills of usage-led outreach and discovery, the decisions about tools, plan limits and offers, the pilots and launches, situations from a founder working signups by hand to a sales-led company adding a free tier, and finally propensity models, account scoring and holdout tests.

What repeats is a daily pass over the PQL queue, weekly scoring calibration, trial expiry, guided trial and group assist sessions, a monthly funnel review and feedback digest, monthly account scoring and unmanaged usage reports, quarterly signal pruning, annual plan offers and joint reviews with product and growth, and a yearly look at channel economics and the rules of engagement. The Metrics log, Product spec, Feedback themes, Purchase decision, Onboarding 30/60/90 and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
