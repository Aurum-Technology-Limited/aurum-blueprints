---
id: founding-startups.b2b-saas-startup-building
name: B2B SaaS Startup Building
description: "Build an early business software company on solid ground: account model, billing, onboarding, honest MRR reporting, account health, churn and renewals, and the security and admin features that teams expect."
category: business
version: 1.0.0
tags: [founding-startups, b2b-saas-startup-building, founder, saas, recurring-revenue, churn, customer-onboarding, subscription-billing]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - feedback-themes
    - meeting-notes
    - product-spec
    - compliance-control
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: B2B SaaS Startup Building
          description: "Building an early business software company, from first paying teams and onboarding to recurring revenue and early churn."
          projects:
            - name: Buyer, admin and end-user map for the product
              description: |-
                ## Purpose
                In business software the person who signs, the person who configures and the people who use it every day are often three different people with three different reasons to care. Mapping those roles for your product tells you who the onboarding, the admin screens, the invoices and the renewal email are each written for.

                ## Milestones
                1. The economic buyer, the workspace admin and the daily end user described in a sentence each, with job title and what they are judged on.
                2. For each role, the moment in the product or contract where they matter most identified.
                3. At least five current accounts checked to confirm who actually fills each role there.
                4. The map shared with everyone who builds, sells or supports the product.

                ## Notes
                In small teams one person often holds two roles. Note it, but keep the roles separate on the map, because they split again as accounts grow.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map of buyer, admin and end-user roles, checked against at least five real accounts, is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List who signed, who set up and who uses the product at your five biggest accounts"
                - "Write one sentence on what each role is measured on at work"
                - "Mark the screen or document where each role first meets the product"
                - "Share the map and ask the team which role they design for most"
            - name: Workspace, seat and account data model
              description: |-
                ## Purpose
                Retrofitting organisations into a product built around single users is one of the most expensive rewrites a SaaS team can face. Deciding early how companies, workspaces, users, roles and seats relate, and what happens when someone leaves a company or belongs to two, saves months of migration later.

                ## Milestones
                1. A diagram of organisation, workspace, user and role entities with their relationships.
                2. Rules written for invitations, removing a user, transferring ownership and a user in two organisations.
                3. Every table holding customer data carrying an account identifier, checked in the schema.
                4. A test proving one account cannot read another account's records.

                ## Notes
                Even if you sell to small teams today, assume one customer will one day want several workspaces under one bill.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written account model with membership rules exists and an automated test confirms tenant isolation between two accounts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draw the current relationship between users, accounts and data"
                - "Write the rule for what happens when an admin leaves a customer company"
                - "Audit every table for a missing account identifier"
                - "Add an automated test that tries to read another tenant's records"
            - name: Subscription billing set-up with a billing provider
              description: |-
                ## Purpose
                Founders who invoice the first customers by hand often find, a year in, that nobody can say which plan each account is on or when it renews. Putting every paying account into a subscription billing tool with plans, billing intervals, tax settings and invoice emails makes revenue countable and collections automatic.

                ## Milestones
                1. A billing provider chosen and connected to the product's account records.
                2. Every live plan created with its price, interval and trial rules.
                3. All existing customers moved onto subscriptions with correct renewal dates.
                4. Sales tax or VAT collection settings reviewed with your accountant.
                5. A test upgrade, downgrade and cancellation run end to end in test mode.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every paying account is on a subscription in the billing tool with the right plan and renewal date, and plan changes work in test mode."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Export a list of every paying customer with plan, price and renewal date"
                - "Create each live plan and interval in the billing provider"
                - "Ask your accountant which tax settings apply to your sales"
                - "Run an upgrade, downgrade and cancel in test mode and check the invoices"
            - name: MRR and ARR definitions written down
              description: |-
                ## Purpose
                Monthly recurring revenue looks simple until someone asks whether a discounted annual deal, a one-off set-up fee or a trial counts. A short written definition, applied the same way every month, stops the number drifting and keeps investor updates comparable over time.

                ## Milestones
                1. A one-page definition of MRR, ARR, new, expansion, contraction and churned MRR.
                2. Decisions recorded on annual contracts, discounts, set-up fees, usage charges and paused accounts.
                3. Last month's MRR recalculated by the written rules and the difference from the old figure explained.
                4. The definition stored with the metrics log and reviewed once a year.

                ## Notes
                Normalise annual contracts to a monthly figure and leave one-off fees out. Whatever you choose, never change the rule silently.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written MRR definition covering at least five edge cases exists, and last month's MRR has been recalculated by it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every revenue type you bill today, including fees and discounts"
                - "Decide in writing which of them count towards MRR"
                - "Recalculate last month's MRR using the written rules"
                - "Reread the MRR definition and record any rule change @recurring(yearly)"
            - name: Privacy policy, DPA and sub-processor list
              description: |-
                ## Purpose
                Business customers hand you their staff and client data, and their legal or IT teams will ask for a data processing agreement and a list of every service that touches it. Having a privacy policy, a standard DPA and a current sub-processor list ready turns a two-week stall into a same-day reply.

                ## Milestones
                1. Every third-party service that stores or processes customer data listed with its location and purpose.
                2. A privacy policy and a standard data processing agreement reviewed by a lawyer familiar with data protection law.
                3. A public sub-processor page with a way for customers to be told about changes.
                4. A folder holding signed DPAs for each customer that requested one.

                ## Notes
                This is paperwork to prepare and keep current, not legal advice. Get the documents themselves reviewed by a qualified lawyer.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed privacy policy, standard DPA and public sub-processor list exist and signed DPAs are filed per customer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every tool that stores or processes customer data and where it is hosted"
                - "Book a lawyer to review the privacy policy and a standard DPA"
                - "Publish the sub-processor list with a change notification sign-up"
                - "Check the sub-processor list against the tools actually in use @recurring(yearly)"
            - name: Terms of service and subscription agreement
              description: |-
                ## Purpose
                Without clear terms, every question about auto-renewal, notice periods, refunds, liability caps and what happens to data after cancellation becomes a negotiation. One subscription agreement for self-serve customers and one order form for larger deals, reviewed by a lawyer, sets the defaults before the first dispute does.

                ## Milestones
                1. Online terms covering renewal, cancellation notice, payment, acceptable use and data on termination.
                2. A short order form for invoiced customers that points to the main terms.
                3. Both documents reviewed by a lawyer and dated.
                4. Signup and checkout flows showing the terms with acceptance recorded per account.

                ## Notes
                Write down the redlines you will and will not accept from bigger customers, so you are not drafting policy under deal pressure.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Reviewed online terms and an order form are live, and acceptance is recorded against every new account."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the questions customers have already asked about renewals and refunds"
                - "Brief a lawyer on the subscription terms you need drafted"
                - "Add a recorded terms acceptance step to signup and checkout"
                - "Write a list of contract changes you will accept from larger customers"
            - name: Account-level product analytics events
              description: |-
                ## Purpose
                Consumer analytics counts people, but a SaaS business lives or dies by accounts: one team using the product daily matters more than fifty lone trial users. Tagging every event with the account, plan and role lets you see which companies are active, which features stick and which accounts are going quiet.

                ## Milestones
                1. A tracking plan of no more than twenty named events tied to real value moments.
                2. Every event carrying user, account, plan and role properties.
                3. A report showing weekly active accounts, not just weekly active users.
                4. Internal and test accounts excluded from every report.

                ## Notes
                Ten well-named events you trust beat two hundred auto-captured clicks nobody can interpret.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written tracking plan is implemented, and a weekly active accounts report excludes internal and test accounts."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the five moments that show a team is getting value"
                - "Draft a tracking plan with event names and required properties"
                - "Add account and plan properties to every tracked event"
                - "Audit the tracking plan against what the product now does @recurring(quarterly)"
            - name: Help centre and support inbox first version
              description: |-
                ## Purpose
                Teams paying for software expect to find answers without emailing the founder, and admins especially want written instructions they can forward to colleagues. A shared support inbox and twenty short help articles cover most first questions and give you a record of what confuses people.

                ## Milestones
                1. One support address routed to a shared inbox or help desk tool, with an auto-reply stating response hours.
                2. The twenty most common questions written up as short articles with screenshots.
                3. A help link inside the product on every main screen.
                4. Each ticket tagged by topic so gaps in the help centre show up.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared support inbox and at least twenty help articles are live, with a help link on every main product screen."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search your email for the questions customers ask most often"
                - "Set up a shared support inbox with stated response hours"
                - "Ask the agent to draft help articles from the ten most common questions"
                - "Update the help articles that tickets show are out of date @recurring(monthly:28)"
            - name: Time to first value baseline for new teams
              description: |-
                ## Purpose
                A new account that has not reached its first real result within a few days rarely becomes a paying one. Measuring how long new teams take from signup to that first value moment, and where they stall, gives you the baseline every onboarding improvement is judged against.

                ## Milestones
                1. The first value moment defined in one sentence, such as first report shared or first invoice sent.
                2. Median days from signup to that moment measured for the last thirty new accounts.
                3. The three steps where most accounts stall identified from analytics and session recordings.
                4. The baseline figure recorded with the date measured.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The median time to first value for the last thirty accounts and the top three stall points are recorded with a date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the first value moment for a new team in one sentence"
                - "Pull signup and first value dates for the last thirty accounts"
                - "Watch five recordings of accounts that stalled before first value"
                - "Record the median and the three biggest stall points"
            - name: Monthly SaaS metrics close
              description: |-
                ## Purpose
                Recurring revenue only tells you something if it is broken into its movements: new, expansion, contraction and churn. Closing the numbers on the same day each month, from the billing tool rather than memory, gives you an MRR bridge you can trust in a board meeting and spot problems in early.

                ## Milestones
                1. An MRR bridge from opening to closing MRR with new, expansion, contraction and churned lines.
                2. Logo count, average revenue per account and gross and net revenue retention calculated.
                3. Any number that moved more than ten percent explained in a sentence.
                4. The month's figures added to a running metrics log.

                ## Notes
                Start from the **Metrics log** template. Reconcile MRR with cash received at least quarterly, because they drift apart quietly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly MRR bridges exist in the metrics log, each closed within five days of month end."
                cadence: rolling
              tasks:
                - "Export last month's subscriptions and invoices from the billing tool"
                - "Build the MRR bridge and retention figures for the month @recurring(monthly:3)"
                - "Write one sentence explaining each figure that moved more than ten percent"
                - "Reconcile MRR with cash received in the bank @recurring(quarterly)"
            - name: Weekly account health review
              description: |-
                ## Purpose
                Churn in B2B software is usually visible weeks before the cancellation: logins fall, the champion leaves, tickets turn sharp. A short weekly look at every paying account against a few health signals gives you time to call, fix or rescue an account before the renewal is lost.

                ## Milestones
                1. Three to five health signals chosen, such as weekly active seats, key feature use, open tickets and champion contact.
                2. Every paying account scored green, amber or red each week.
                3. A named next action and owner for every red account.
                4. A record showing which reds recovered and which churned, to test the signals.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every paying account has a weekly health colour, and every red account has a dated next action and owner."
                cadence: rolling
              tasks:
                - "Pick the four signals that best showed trouble in accounts you lost"
                - "Score every paying account green, amber or red @recurring(weekly:mon)"
                - "Book a call with the admin at each red account"
                - "Compare health scores with actual churn to check the signals hold up"
            - name: New account onboarding checklist
              description: |-
                ## Purpose
                Each new paying team goes through the same steps, invite colleagues, import data, connect a tool, reach first value, yet founders often handle them from memory and miss some. A standard checklist run for every new account makes onboarding repeatable and shows exactly where each account is stuck.

                ## Milestones
                1. A checklist of the six to ten steps a new account must complete, each with an owner.
                2. A welcome email, a kickoff call option and a day seven check-in built into the checklist.
                3. Every account in its first thirty days visible with its checklist progress.
                4. Accounts that miss a step by day fourteen flagged for a personal follow-up.

                ## Notes
                Start from the **Operational checklist** template. Keep the checklist short enough that you actually run it for a fifty-pound account as well as a big one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account signed in the last quarter has a completed or in-progress onboarding checklist with dated steps."
                cadence: rolling
              tasks:
                - "Write the steps your best onboarded customer went through"
                - "Draft the welcome email and the day seven check-in message"
                - "Review every account in its first thirty days against the checklist @recurring(weekly:wed)"
                - "Message the admin of any account stuck on the same step for a week"
            - name: Cancellation and churn reason log
              description: |-
                ## Purpose
                Without a record, every cancellation gets explained away as a one-off: budget, a reorganisation, a bad fit. Logging the reason, the account's size and its last months of usage for every churned or downgraded account turns anecdotes into patterns you can act on.

                ## Milestones
                1. A short cancellation survey in the product with five fixed reasons and a free-text box.
                2. A log entry for every churned or downgraded account with reason, MRR lost and tenure.
                3. Reasons grouped monthly into avoidable and unavoidable churn.
                4. The top avoidable reason assigned to someone to fix each quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every churned or downgraded account in the last six months has a log entry with reason, MRR lost and tenure."
                cadence: rolling
              tasks:
                - "Add a five-option cancellation survey to the cancel flow"
                - "Backfill the log with every account lost in the last six months"
                - "Group the month's churn reasons into avoidable and unavoidable @recurring(monthly:12)"
                - "Name one owner for the biggest avoidable reason this quarter"
            - name: Renewal calendar for annual contracts
              description: |-
                ## Purpose
                Annual contracts feel safe until one renews automatically into an angry invoice dispute or lapses because nobody noticed the notice window. A renewal calendar that starts conversations ninety days out gives you time to show value, handle price changes and spot accounts at risk.

                ## Milestones
                1. Every annual contract listed with renewal date, notice period, value and admin contact.
                2. A ninety, sixty and thirty day touchpoint planned for each renewal.
                3. Any planned price change agreed and communicated before the notice window closes.
                4. Renewal outcomes recorded as renewed, expanded, downgraded or lost.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every annual contract has a renewal date, notice period and logged ninety-day touchpoint before its renewal."
                cadence: rolling
              tasks:
                - "List every annual contract with its renewal date and notice period"
                - "Check which renewals fall in the next ninety days @recurring(monthly:20)"
                - "Send a usage summary to each admin renewing within sixty days"
                - "Record each renewal outcome and the reason behind it"
            - name: Daily support triage and response times
              description: |-
                ## Purpose
                For a small SaaS company support is often the main point of contact with customers, and slow replies to admins quietly erode renewals. A short daily triage, sorting bugs, how-to questions and account issues, keeps first replies within your stated hours and routes real defects to the build queue.

                ## Milestones
                1. A stated first response target for paying customers published in the help centre.
                2. Every new ticket tagged as bug, question, billing or request each working day.
                3. Bugs linked to the issue tracker with the affected account named.
                4. Weekly median first response time recorded and compared with the target.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Median first response time for paying customers is recorded weekly for three months and meets the published target."
                cadence: rolling
              tasks:
                - "Publish a first response target in the help centre"
                - "Tag and route every new support ticket @recurring(daily)"
                - "Record the week's median first response time @recurring(weekly:fri)"
                - "Link each bug ticket to an issue with the affected accounts listed"
            - name: Feature request log linked to accounts
              description: |-
                ## Purpose
                The loudest customer is rarely the most valuable one, and a roadmap built from the last call drifts. Logging every request against the account, its MRR and its health score shows which requests come from the customers you most want to keep and which would win new segments.

                ## Milestones
                1. A single log where every feature request is recorded with account, MRR and the problem behind it.
                2. Duplicate requests merged into themes with total requesting MRR.
                3. The top themes reviewed monthly alongside the roadmap.
                4. Requesting customers told when their request ships or is declined.

                ## Notes
                Start from the **Feedback themes** template. Record the problem the customer described, not just the feature they suggested.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feature request from the last quarter is logged against an account, grouped into themes with total requesting MRR."
                cadence: rolling
              tasks:
                - "Collect feature requests from email, calls and tickets into one log"
                - "Merge duplicates into themes and total the MRR behind each"
                - "Review the top request themes against the roadmap @recurring(monthly:15)"
                - "Tell requesting customers when their theme ships"
            - name: Weekly changelog and release notes
              description: |-
                ## Purpose
                Customers who never hear about improvements assume the product has stalled, and admins cannot train colleagues on features they do not know exist. A short weekly changelog, written for users rather than engineers, shows momentum and cuts how-to tickets after each release.

                ## Milestones
                1. A public changelog page linked from inside the product.
                2. Release notes written in plain language with a screenshot for anything visible.
                3. A monthly digest email to admins summarising the changes.
                4. Customers who asked for a shipped feature named and thanked privately.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The changelog has an entry for at least ten of the last twelve weeks, and admins receive a monthly digest."
                cadence: rolling
              tasks:
                - "Set up a public changelog page and link it inside the product"
                - "Write the week's release notes in user language @recurring(weekly:thu)"
                - "Send a digest of the month's changes to every workspace admin"
                - "Email each customer whose request shipped this month"
            - name: Failed payment recovery and dunning
              description: |-
                ## Purpose
                Involuntary churn from expired cards and failed payments can quietly account for a large share of lost subscriptions in self-serve SaaS. A dunning sequence of retries, clear emails and in-app banners recovers much of it without a single sales conversation.

                ## Milestones
                1. Smart retries switched on in the billing provider.
                2. A three-email failed payment sequence written in a helpful tone with a direct update link.
                3. An in-app banner shown to admins with a failed payment.
                4. Monthly recovered and lost MRR from failed payments recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dunning sequence is live, and recovered versus lost MRR from failed payments is recorded each month for six months."
                cadence: rolling
              tasks:
                - "Check how many subscriptions failed payment in the last three months"
                - "Turn on payment retries and card updater in the billing provider"
                - "Write the three failed payment emails with an update link"
                - "Record recovered and lost MRR from failed payments @recurring(monthly:8)"
            - name: Uptime, incidents and status page
              description: |-
                ## Purpose
                Teams that run their work on your product notice an outage before you do, and silence during one does more damage than the outage itself. Monitoring, a public status page and a simple incident routine show customers you are on it and give you the uptime record that larger buyers ask for.

                ## Milestones
                1. External uptime monitoring on the app, API and login, alerting a named person.
                2. A public status page with subscribe options for customers.
                3. An incident routine covering who posts updates, how often and when to email admins.
                4. Monthly uptime and incident count recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A public status page and external monitoring are live, and monthly uptime and incident counts are recorded for six months."
                cadence: rolling
              tasks:
                - "Set up external monitoring on login, the app and the API"
                - "Publish a status page and add the link to the help centre"
                - "Write a one-page incident routine with update intervals"
                - "Record the month's uptime figure and incidents @recurring(monthly:25)"
            - name: Quarterly business reviews with top accounts
              description: |-
                ## Purpose
                Your largest accounts carry a big share of MRR, and their executives rarely log in to see the value their teams get. A quarterly review that shows usage, outcomes and what is coming next keeps the economic buyer engaged and surfaces expansion or risk long before renewal.

                ## Milestones
                1. The accounts making up the top fifth of MRR listed with buyer and admin contacts.
                2. A short review deck template showing usage, outcomes, open issues and roadmap.
                3. A review held with each top account every quarter.
                4. Agreed actions from each review logged and followed up.

                ## Notes
                Start from the **Meeting notes** template. Lead with the customer's results in their numbers, not a tour of new features.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each account in the top fifth of MRR has a logged quarterly review with agreed actions for the last two quarters."
                cadence: cyclic
              tasks:
                - "List the accounts that make up the top fifth of MRR"
                - "Build a review deck template with usage and outcome slides"
                - "Book quarterly reviews with each top account's buyer @recurring(quarterly)"
                - "Log the agreed actions from each review with an owner"
            - name: Reading net and gross revenue retention
              description: |-
                ## Purpose
                Net revenue retention is the number SaaS investors ask about first, and founders often calculate it in a way that flatters the business. Learning how gross and net retention, logo churn and revenue churn differ, and practising on your own data, lets you explain your retention honestly and see what drives it.

                ## Milestones
                1. Written definitions of gross revenue retention, net revenue retention, logo churn and revenue churn in your own words.
                2. Each figure calculated for your last twelve months by hand from the billing export.
                3. Your figures compared with published benchmarks for your segment and contract size.
                4. A one-paragraph explanation of what drives your retention, ready for investors.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gross and net revenue retention for the last twelve months are calculated by hand and explained in a written paragraph."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read two explanations of gross versus net revenue retention"
                - "Calculate both figures for the last twelve months from the billing export"
                - "Find published retention benchmarks for your segment"
                - "Write a paragraph explaining what drives your retention"
            - name: Running a customer onboarding call
              description: |-
                ## Purpose
                Forty minutes on a kickoff call with a new team can decide whether the account ever reaches first value. Practising a structured call, agreeing goals, configuring with the admin live and booking the next step, turns onboarding from a demo repeat into the first piece of delivered value.

                ## Milestones
                1. A call agenda covering goals, success measures, set-up done live and next steps.
                2. Five onboarding calls run with the agenda and notes kept.
                3. A follow-up email template that restates goals and the next step.
                4. Changes to the agenda made after reviewing what worked on the five calls.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five onboarding calls have been run from a written agenda, each followed by a goals and next-step email within a day."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a forty-minute onboarding call agenda"
                - "Ask the next new account's admin what success looks like in ninety days"
                - "Send the goals and next-step email within a day of each call"
                - "Revise the agenda after the fifth call"
            - name: Writing help articles that cut tickets
              description: |-
                ## Purpose
                Most help centres are written by builders who already know the answer, so customers still email. Learning to write task-based articles with one goal, numbered steps and the exact button labels measurably reduces repeat questions and helps admins train their teams.

                ## Milestones
                1. A short style guide for articles: one task per article, numbered steps, exact labels, one screenshot per tricky step.
                2. The ten most viewed articles rewritten to the guide.
                3. Ticket counts for those ten topics compared before and after the rewrite.
                4. Search terms that return no article listed for new writing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten articles are rewritten to a written style guide and ticket counts on those topics are compared over two months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page style guide for help articles"
                - "Rewrite the most viewed help article to the guide"
                - "Note ticket counts on the ten rewritten topics for two months"
                - "List help centre searches that returned no article"
            - name: Product-led versus sales-led motion study
              description: |-
                ## Purpose
                Some SaaS products are bought by a user swiping a card, others by a committee after three demos, and running the wrong motion wastes a year. Studying how comparable companies at your price point acquire teams, and how your own signups actually convert, tells you which motion fits before you hire for it.

                ## Milestones
                1. Five comparable SaaS companies studied for signup flow, pricing visibility and sales involvement.
                2. Your own last twenty paying accounts split by self-serve and sales-assisted, with contract value.
                3. A written view of which motion fits each segment, with a price threshold where sales starts.
                4. The decision shared with the team and reflected in the website's main call to action.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written motion decision per segment, with a price threshold for sales involvement, is reflected on the website."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sign up to five comparable products and note where sales gets involved"
                - "Split your last twenty paying accounts into self-serve and assisted"
                - "Write the contract value above which a person should help close"
                - "Update the website's main call to action to match the decision"
            - name: Enterprise security review and SOC 2 basics
              description: |-
                ## Purpose
                The first larger customer will send a security questionnaire, and the second will ask for a SOC 2 report or an ISO 27001 certificate. Learning what these frameworks cover, what auditors look for and what a small company can put in place now stops security from becoming a surprise blocker on a big deal.

                ## Milestones
                1. A plain-language summary of what SOC 2 Type I, Type II and ISO 27001 each prove.
                2. A gap list of your current controls against a typical security questionnaire.
                3. Quick wins in place: enforced two-factor login for staff, a password manager, laptop encryption and access reviews.
                4. A rough cost and timeline for formal certification noted from two providers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written gap list against a standard security questionnaire exists and the four staff security quick wins are in place."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a plain-language overview of SOC 2 and ISO 27001"
                - "Answer a sample security questionnaire honestly and mark the gaps"
                - "Enforce two-factor login on every staff account"
                - "Ask two compliance providers for a certification cost and timeline"
            - name: Cohort retention by signup month
              description: |-
                ## Purpose
                One blended churn rate hides whether recent customers stay better than early ones. Grouping accounts by the month they started paying and tracking what share of each cohort, and its revenue, is still there months later shows whether product and onboarding changes are actually working.

                ## Milestones
                1. A cohort table of logo retention by month started for at least the last twelve cohorts.
                2. A matching table of revenue retention including expansion.
                3. The month most cohorts flatten out identified.
                4. A sentence written each month on whether newer cohorts are retaining better.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Logo and revenue cohort tables for at least twelve cohorts are updated monthly with a written trend sentence."
                cadence: rolling
              tasks:
                - "Export start and end dates for every paying account"
                - "Build logo and revenue retention tables by start month"
                - "Update the cohort tables and write the trend sentence @recurring(monthly:5)"
                - "Mark onboarding and product changes on the cohort timeline"
            - name: Interviewing customers who cancelled
              description: |-
                ## Purpose
                Survey checkboxes say budget; a twenty-minute conversation reveals the missing integration, the champion who left or the competitor that bundled you away. Learning to run exit interviews without defensiveness, and doing one a month, gives you the real churn story behind the log.

                ## Milestones
                1. A short interview guide focused on what changed, what they use now and what would have kept them.
                2. One exit interview a month held with a churned admin or buyer.
                3. Findings added to the churn reason log against the account.
                4. One product, onboarding or contract change traced to these interviews.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six exit interviews are logged against churned accounts, and at least one change is traced to them."
                cadence: rolling
              tasks:
                - "Write a six-question exit interview guide"
                - "Invite a recently churned admin to a twenty-minute call @recurring(monthly:18)"
                - "Add each interview's findings to the churn reason log"
                - "Share the three most surprising exit findings with the team"
            - name: Free trial, freemium or demo-only decision
              description: |-
                ## Purpose
                How a team first gets into the product shapes everything downstream: signup volume, support load, sales capacity and how fast you learn. Comparing a time-limited trial, a free plan and demo-only access against your buyer, set-up effort and contract size gives you an entry model you can defend.

                ## Milestones
                1. The three entry models compared on set-up effort, support cost, conversion evidence and contract size.
                2. Trial length or free plan limits chosen with a reason.
                3. The conversion event that ends the trial or free use defined.
                4. The decision recorded with a date to review against conversion data.

                ## Notes
                If a new team needs data imports and admin set-up before seeing value, a short unassisted trial often converts worse than a guided one.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated written decision on the entry model, with trial length or free limits and a review date, is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull trial or signup to paid conversion for the last three months"
                - "Score trial, freemium and demo-only against set-up effort and deal size"
                - "Write the decision and the reason in one paragraph"
                - "Set a date to compare conversion after the change"
            - name: Annual versus monthly billing terms
              description: |-
                ## Purpose
                Annual upfront billing strengthens cash and reduces churn events, but it can slow signups and adds refund and renewal work. Deciding which plans offer annual terms, whether invoiced customers must commit annually and how prepayment shows up in cash planning makes billing terms a deliberate choice rather than a habit.

                ## Milestones
                1. The current split of monthly and annual subscriptions and their churn rates recorded.
                2. A rule for which plans and contract sizes are offered annual billing.
                3. Refund, mid-term upgrade and early cancellation rules written for annual plans.
                4. The effect of annual prepayment on cash and deferred revenue explained by your accountant.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written annual billing rules, including refunds and mid-term upgrades, exist and the cash effect is explained by an accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare churn between monthly and annual subscribers"
                - "Write the rule for which accounts are offered annual billing"
                - "Draft refund and mid-term upgrade rules for annual plans"
                - "Ask your accountant how annual prepayment affects deferred revenue"
            - name: Plan limits and feature gating in the product
              description: |-
                ## Purpose
                Plans that differ on paper but not in the product leak revenue and confuse customers. Building entitlements into the code, so each plan's seats, usage limits and features are enforced and visible, makes upgrades a natural prompt instead of an awkward email.

                ## Milestones
                1. An entitlements table listing every limit and feature per plan.
                2. Limits enforced in the product from the billing plan, not hard-coded per customer.
                3. Clear in-product messages when an account approaches or hits a limit, with an upgrade path.
                4. A report of accounts at or near their limits each month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every plan limit is enforced from a single entitlements table and accounts near limits see an upgrade prompt."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every limit and feature that differs between plans"
                - "Find customers with hand-made exceptions to their plan"
                - "Build a single entitlements check the product reads from"
                - "Write the in-product message shown when a limit is reached"
            - name: Single sign-on and role-based permissions
              description: |-
                ## Purpose
                Once accounts pass a few dozen seats, IT teams expect to manage access through their identity provider and to restrict who can export data or change billing. SAML or OIDC single sign-on, automatic deprovisioning and a few clear roles often decide whether a mid-market deal closes.

                ## Milestones
                1. A product spec covering SSO protocols, provisioning, roles and which plans include them.
                2. SSO working with at least two major identity providers in testing.
                3. Admin, member and read-only roles enforced, with billing and export restricted to admins.
                4. Removing a user in the identity provider revoking product access.

                ## Notes
                Start from the **Product spec** template. Decide early whether SSO sits on a higher plan; many buyers expect it there.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "SSO works with two identity providers, three roles are enforced and deprovisioning revokes access in testing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your three largest accounts which identity provider they use"
                - "Write a spec for SSO, provisioning and the three roles"
                - "Test login and deprovisioning with two identity providers"
                - "Restrict billing and data export to the admin role"
            - name: Admin console for account owners
              description: |-
                ## Purpose
                Workspace admins are the people who renew, and they spend their time in settings, not in the main product. A clear console for seats, invoices, usage, security settings and audit history cuts support tickets and gives admins the evidence they need to justify the spend internally.

                ## Milestones
                1. Admins able to add and remove seats, change plan and download invoices without contacting support.
                2. A usage page showing active seats and key activity over time.
                3. An audit log of logins, permission changes and exports.
                4. Billing and seat tickets compared before and after release.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Admins can manage seats, plans and invoices themselves, and an audit log records logins, permission changes and exports."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Count last quarter's tickets that an admin console would have prevented"
                - "Sketch the console pages for seats, billing, usage and audit"
                - "Build self-serve seat changes and invoice downloads first"
                - "Compare billing tickets for the quarter after release"
            - name: Choosing the first three integrations
              description: |-
                ## Purpose
                Business software rarely lives alone, and the integration a team needs most is often the reason a trial stalls. Ranking requested integrations by requesting MRR, deal blockers and build effort lets you build the three that matter rather than the ten that are easy.

                ## Milestones
                1. Every requested integration listed with the accounts and lost deals that mentioned it.
                2. Each candidate scored on revenue behind it, build effort and maintenance cost.
                3. Three integrations chosen and the rest declined in writing.
                4. Each shipped integration's adoption measured among the accounts that asked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored integration list exists, three are chosen with reasons, and adoption is measured for each one shipped."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search tickets, calls and lost deals for integration mentions"
                - "Score each integration on MRR behind it and build effort"
                - "Write the three chosen integrations and why the rest wait"
                - "Measure adoption among requesting accounts after each launch"
            - name: Public API and webhooks first version
              description: |-
                ## Purpose
                Technical customers and partners will build on your product if they can, and an API often turns a tool into infrastructure that is hard to replace. A small, documented, versioned API with API keys per workspace and a few webhooks covers most early needs without a platform team.

                ## Milestones
                1. The ten most requested read and write operations chosen for the first version.
                2. API keys scoped per workspace, with rate limits and revocation.
                3. Public documentation with examples and a stated versioning policy.
                4. Webhooks for the three events customers ask for most.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented, versioned API with per-workspace keys and at least three webhooks is live and used by one customer."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List what customers have asked to automate or export"
                - "Choose the ten operations for the first API version"
                - "Write the documentation and versioning policy before building"
                - "Invite one technical customer to build against the API"
            - name: Cutting time to first value in onboarding
              description: |-
                ## Purpose
                With a baseline in hand, each day removed between signup and first value tends to lift trial conversion and early retention. Working through the biggest stall points one at a time, with sample data, templates or guided import, makes the product show its worth before the team loses interest.

                ## Milestones
                1. The single biggest stall point from the baseline chosen as the first target.
                2. A change shipped, such as sample data, a template gallery or guided import.
                3. Median time to first value remeasured for the next thirty accounts.
                4. The next stall point chosen based on the result.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median time to first value for thirty new accounts is lower than the recorded baseline after at least one shipped change."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the biggest stall point from the baseline"
                - "Prototype sample data or a template that skips that step"
                - "Ship the change to all new accounts"
                - "Remeasure median time to first value after thirty signups"
            - name: In-app onboarding checklist and empty states
              description: |-
                ## Purpose
                An empty dashboard on day one tells a new user nothing about what to do next. A short in-product checklist for the first user and helpful empty states on each main screen guide teams to invite colleagues and set up the product without waiting for a call.

                ## Milestones
                1. A checklist of four to six set-up steps shown to the first user in each workspace.
                2. Every main screen's empty state rewritten to explain the screen and offer one action.
                3. An invite colleagues step placed early, since multi-user accounts retain better.
                4. Checklist completion rates measured by step.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An in-app set-up checklist and rewritten empty states are live, with completion measured for each checklist step."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Screenshot every empty screen a brand new workspace sees"
                - "Write the four to six steps for the in-app checklist"
                - "Rewrite each empty state with one clear action"
                - "Track completion for each checklist step"
            - name: First ten thousand in MRR review
              description: |-
                ## Purpose
                Crossing a round MRR figure is a natural point to stop and look at what built it before chasing the next one. Reviewing which segments, channels and plans make up the revenue, and which accounts are most at risk, sets the plan for the next stage with evidence rather than momentum.

                ## Milestones
                1. MRR broken down by segment, plan, acquisition channel and contract type.
                2. The ten largest accounts reviewed for health and concentration risk.
                3. A written page on what got the company here and what will not get it further.
                4. Three priorities for reaching the next MRR milestone agreed by the founders.

                ## Notes
                Ten thousand is a placeholder. Use the round figure that marks a real step for your business, in your currency.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written MRR breakdown and three agreed priorities for the next milestone are recorded within a month of crossing the figure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Break current MRR down by segment, plan and channel"
                - "Review concentration in the ten largest accounts"
                - "Write one page on what worked and what will not scale"
                - "Agree three priorities for the next milestone with your co-founders"
            - name: First SOC 2 Type I audit
              description: |-
                ## Purpose
                When security reviews start blocking deals, a formal SOC 2 report becomes worth its cost. Preparing for a Type I audit, choosing an auditor and often a compliance platform, writing policies and putting controls in place, is a multi-month effort best run as a dated project.

                ## Milestones
                1. An auditor and, if used, a compliance automation platform chosen.
                2. Required policies written and approved, from access control to incident response.
                3. Controls in place and evidence collected for the audit date.
                4. A Type I report received and shared under NDA with prospects who ask.
                5. Quarterly access reviews running ahead of a later Type II period.

                ## Notes
                Start from the **Compliance control** template. Scope the audit tightly to the production product to keep cost and effort down.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A SOC 2 Type I report covering the production product is received and available to prospects under NDA."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Count deals in the last year that asked for a SOC 2 report"
                - "Request quotes from two auditors and two compliance platforms"
                - "Write and approve the policies the auditor requires"
                - "Review who has access to production systems @recurring(quarterly)"
            - name: Moving early customers onto current plans
              description: |-
                ## Purpose
                Early customers often sit on handshake prices, custom limits or plans that no longer exist, which complicates billing, entitlements and reporting. Migrating them onto current plans, with notice, a fair grandfathering period and a personal message, cleans up the base without souring loyal accounts.

                ## Milestones
                1. Every account on a legacy plan or custom price listed with its current terms.
                2. A grandfathering rule and migration date agreed by the founders.
                3. Each affected admin told personally with at least the notice your terms require.
                4. All accounts on current plans by the migration date, with any exceptions recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every legacy account has been notified and moved onto a current plan by the migration date, with exceptions written down."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every account on a legacy plan or custom price"
                - "Agree the grandfathering period and migration date"
                - "Write a personal migration email for each affected admin"
                - "Record any account left on special terms and why"
            - name: First enterprise customer go-live
              description: |-
                ## Purpose
                The first large customer brings data migration, SSO, training for many users and a project team on their side with its own deadlines. Running their go-live as a dated project with a joint plan protects the relationship and teaches you what an enterprise rollout really needs.

                ## Milestones
                1. A joint go-live plan with dates, owners on both sides and success measures.
                2. Data imported and checked with the customer's admin.
                3. SSO configured and admins trained, with user training sessions held.
                4. A thirty-day post-launch review held with usage against the success measures.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The customer is live by the agreed date, and a thirty-day review compares usage with the agreed success measures."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Book a kickoff with the customer's project lead and admin"
                - "Write a joint go-live plan with owners and dates"
                - "Run a test import of the customer's data and check it with them"
                - "Hold a thirty-day review against the success measures"
            - name: SaaS metrics pack for a funding round
              description: |-
                ## Purpose
                Investors in SaaS companies look for a familiar set of numbers and will rebuild them from your billing export if your pack looks thin. Assembling MRR history, retention cohorts, churn reasons and customer concentration in one consistent pack before the first meeting avoids weeks of follow-up requests.

                ## Milestones
                1. Monthly MRR bridge for at least the last twelve months.
                2. Logo and revenue cohort retention, plus gross and net revenue retention.
                3. Customer concentration and a list of top accounts with contract terms.
                4. Every figure traceable to the billing export, with the MRR definition attached.

                ## Notes
                Consistency matters more than impressive figures: one number that changes between meetings costs more trust than a modest one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A metrics pack with twelve months of MRR bridges, cohorts, retention and concentration, traceable to the billing export, is ready."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Gather the last twelve monthly MRR bridges from the metrics log"
                - "Build cohort and retention tables from the billing export"
                - "Calculate customer concentration in the top ten accounts"
                - "Ask the agent to check every figure in the pack for inconsistencies"
            - name: Post-incident review after a major outage
              description: |-
                ## Purpose
                A serious outage or data incident is the moment customers judge whether they can trust you with their work. A blameless review, a clear written account sent to affected admins and fixes actually shipped turn a bad day into evidence of maturity.

                ## Milestones
                1. A timeline of the incident from first alert to full recovery.
                2. Root causes and contributing factors written without blame.
                3. A customer-facing summary sent to affected admins within a few days.
                4. Every agreed fix tracked to completion with an owner.

                ## Notes
                If personal data may have been exposed, involve your lawyer early, as notification duties and deadlines can apply.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written post-incident review and customer summary exist, and every agreed fix is closed with an owner and date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the incident timeline from logs and chat history"
                - "Hold a blameless review with everyone involved"
                - "Send a plain-language summary to affected admins"
                - "Track each agreed fix to completion"
            - name: Vertical SaaS for a traditional industry
              description: |-
                ## Purpose
                Building software for dentists, builders, logistics firms or accountants means customers who are not software buyers, slow adoption and trade bodies that matter more than online ads. Shaping onboarding, sales and support around that industry's calendar and habits is what separates vertical SaaS that spreads by word of mouth from one that stalls.

                ## Milestones
                1. The industry's buying calendar, regulations and trade events written down.
                2. Onboarding adapted to the least technical user, including phone or in-person options.
                3. Industry language used throughout the product and help centre.
                4. Two industry associations, trade shows or suppliers engaged as channels.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written industry calendar exists, onboarding has a non-technical option, and two industry channels are engaged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Map the industry's busy seasons and when budgets are set"
                - "Replace software jargon in the product with industry terms"
                - "Offer a phone onboarding option to the next five accounts"
                - "Contact two trade associations about member partnerships"
            - name: Solo technical founder running a micro SaaS
              description: |-
                ## Purpose
                A one-person SaaS business can reach a comfortable income, but only if support, billing and infrastructure do not eat every evening. Designing the product and operations for one person, self-serve signup, few plans, automated dunning and boring infrastructure, keeps it sustainable.

                ## Milestones
                1. Support, billing and infrastructure tasks timed for a typical month.
                2. Plans reduced to the fewest that serve the customers.
                3. Each recurring manual task automated, outsourced or removed.
                4. A written limit on support hours and response times published to customers.

                ## Notes
                Resist custom work for single customers. Each one becomes a permanent maintenance cost for a team of one.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Monthly operations time is measured, at least three manual tasks are removed or automated, and support hours are published."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Log every operations task and its time for one month"
                - "Remove or merge plans that fewer than five customers use"
                - "Automate or drop the three most time-consuming manual tasks"
                - "Publish your support hours and expected reply times"
            - name: SaaS for small businesses with high churn
              description: |-
                ## Purpose
                Small business customers sign up fast and leave fast: they close, change owner or cut costs in a bad month. Accepting that some churn is structural, and focusing on what you can change, onboarding, annual options and win-back campaigns, makes the business work on realistic numbers.

                ## Milestones
                1. Churn split into business closures, budget cuts and product reasons.
                2. Monthly churn targets set separately for structural and product churn.
                3. A pause option offered in place of cancellation for seasonal businesses.
                4. A win-back email sent to accounts that left ninety days ago.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Churn is reported in structural and product categories, and a pause option and win-back email are live."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Tag the last fifty cancellations as closure, budget or product"
                - "Add a pause option to the cancellation flow"
                - "Write a win-back email for accounts that left ninety days ago"
                - "Set separate churn targets for structural and product reasons"
            - name: Moving from consulting work to a SaaS product
              description: |-
                ## Purpose
                Many SaaS companies start as an agency or consultancy that keeps building the same tool for clients. Moving from project fees to subscriptions means standardising the product, turning clients into subscribers and surviving the dip in cash while services revenue falls.

                ## Milestones
                1. The parts of past client work that repeat identified as the core product.
                2. A cash plan showing how long services revenue funds the transition.
                3. Existing clients offered a subscription in place of custom work.
                4. A date set after which no new custom projects are accepted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A transition cash plan exists, at least three clients are on subscriptions and a no-new-custom-work date is set."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the features you rebuilt for more than one client"
                - "Model how long services revenue can fund the transition"
                - "Offer three current clients a subscription instead of a project"
                - "Set the date you stop accepting new custom work"
            - name: Selling SaaS to customers in several countries
              description: |-
                ## Purpose
                Software sells across borders from day one, but taxes on digital services, currencies, data residency and local contract expectations follow each customer. Setting this up deliberately, with professional advice on tax registration, avoids surprise liabilities when an accountant finally looks.

                ## Milestones
                1. Revenue by customer country listed for the last year.
                2. Advice taken from an accountant on digital services tax or VAT registration in each relevant country.
                3. Prices and invoices offered in the main customer currencies.
                4. A position on data hosting location documented for customers who ask.

                ## Notes
                Rules on taxing digital services differ widely and change often. Treat this as preparation for a professional conversation, not a self-assessment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Revenue by country is listed, tax registration advice is recorded for each relevant country, and a hosting location statement exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export last year's revenue by customer country"
                - "Book an accountant to review tax registration duties by country"
                - "Write a short statement on where customer data is hosted"
                - "Review country revenue against tax registration thresholds @recurring(yearly)"
            - name: Usage-based or hybrid billing infrastructure
              description: |-
                ## Purpose
                Charging by API calls, documents processed or active records aligns price with value, but it needs metering you can trust, invoices customers can understand and forecasting that copes with variable revenue. Building that infrastructure properly avoids billing disputes that damage the accounts you most want to grow.

                ## Milestones
                1. The usage metric defined and metered with an auditable record per account.
                2. Customers able to see current usage and projected bill in the product.
                3. Alerts sent to admins before usage crosses thresholds they set.
                4. Committed and variable revenue reported separately in the metrics close.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Usage is metered with an auditable record, admins see projected bills and thresholds, and variable revenue is reported separately."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Write down the usage metric and how it is counted"
                - "Compare metered usage with invoices for three accounts by hand"
                - "Build a usage and projected bill page for admins"
                - "Add committed and variable lines to the MRR bridge"
            - name: Seat and plan expansion inside existing accounts
              description: |-
                ## Purpose
                Strong SaaS companies grow as much from existing customers as from new ones, through more seats, more teams and higher plans. A deliberate expansion routine, spotting accounts near limits, teams that could adopt the product and admins ready to upgrade, is what pushes net revenue retention above one hundred percent.

                ## Milestones
                1. Monthly list of accounts near seat or plan limits.
                2. Adjacent teams identified at the ten largest accounts.
                3. An expansion conversation held with each account near a limit.
                4. Expansion MRR tracked as its own line in the metrics close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Expansion MRR is tracked monthly and every account near its plan limit gets an expansion conversation within the month."
                cadence: rolling
              tasks:
                - "Pull the accounts at over eighty percent of their seat or plan limit @recurring(monthly:22)"
                - "Ask admins at the ten largest accounts which other teams could use it"
                - "Offer an upgrade conversation to each account near its limit"
                - "Report expansion MRR separately in the monthly close"
            - name: Customer success function at a hundred accounts
              description: |-
                ## Purpose
                Around a hundred paying accounts, founders can no longer know every customer, and renewals, onboarding and health reviews start to slip. Designing a customer success function, what it owns, how accounts are segmented and how it is measured, before hiring for it gives the first hire a real job rather than a vague one.

                ## Milestones
                1. Accounts segmented into tiers with a defined service level for each.
                2. Customer success scope written: onboarding, health reviews, renewals and expansion.
                3. Success measures agreed, such as gross revenue retention and time to first value.
                4. Founder-held accounts and routines handed over with written context.

                ## Notes
                Customer success measured on retention and expansion behaves very differently from one measured on ticket closure. Choose deliberately.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written customer success scope, account tiers and success measures exist, and founder-held accounts are handed over with notes."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Sort accounts into three tiers by MRR and complexity"
                - "Write the service level each tier receives"
                - "Agree the two numbers customer success will be measured on"
                - "Write handover notes for each founder-held account"
---

# B2B SaaS Startup Building

B2B SaaS Startup Building is for founders turning business software into a company that teams pay for every month: getting the account model, billing, contracts and analytics right, then running the machinery that keeps recurring revenue recurring. It starts with foundations (buyer and user roles, workspaces, billing, MRR definitions, terms and a first help centre), moves through the monthly metrics close, account health, onboarding, churn and renewal routines, then the skills of reading retention and running onboarding calls, product decisions such as trial model, SSO and integrations, dated moments like the first SOC 2 audit and the first enterprise go-live, variants for vertical, micro and cross-border SaaS, and finally usage-based billing, expansion and a real customer success function.

The rhythm is a daily support triage, a Monday account health review, midweek onboarding checks and a weekly changelog, with monthly closes for MRR, churn reasons, renewals, failed payments, feature requests, uptime and cohorts, and quarterly business reviews with the largest accounts. The Metrics log, Operational checklist, Feedback themes, Meeting notes, Product spec and Compliance control templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
