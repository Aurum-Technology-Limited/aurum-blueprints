---
id: product-management.notifications-messaging-features
name: Notifications & Messaging Features
description: "An inventory of every message, channel rules, sensible defaults and a preference centre, then the routines and builds that keep in-app, email and push notifications useful rather than noisy."
category: business
version: 1.0.0
tags: [product-management, notifications-messaging-features, team, engineer, push-notifications, email-deliverability, in-app-messaging, preference-centre]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - product-spec
    - operational-checklist
    - feedback-themes
    - vendor
    - onboarding-30-60-90
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Notifications & Messaging Features
          description: "Designing in-app, email and push notifications that are useful rather than noisy, with sensible defaults and user controls."
          projects:
            - name: Inventory of every notification the product sends
              description: |-
                ## Purpose
                Most products send far more messages than anyone on the team can list: welcome emails written at launch, a push someone added for a growth test, receipts from the billing system, digests nobody remembers turning on. A single inventory with each message's trigger, channel, audience, owner and monthly volume is the starting point for every decision in this area, and it usually surfaces a few messages that should have been switched off a year ago.

                ## Milestones
                1. Every email, push, in-app, SMS and system message listed with its trigger event and channel.
                2. Each message assigned a named owning team, with unowned messages flagged.
                3. Monthly send volume for each message pulled from the delivery provider or the logs.
                4. Messages sent by third-party tools such as billing, support or marketing platforms included alongside product ones.
                5. A shortlist of messages that look redundant, broken or orphaned agreed for follow-up.

                ## Notes
                Search the codebase for calls to the send functions as well as reading provider dashboards: the code finds messages the dashboards group together, and the dashboards find messages sent by tools outside the codebase.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared inventory lists every message with trigger, channel, owner and monthly volume, and no row is left without an owner or a flag."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the list of active email templates from the delivery provider"
                - "Search the codebase for every call to the push, email and SMS send functions"
                - "Ask support, billing and marketing which tools send messages to users on their behalf"
                - "Ask the agent to merge the lists into one table with trigger, channel and owner columns"
                - "Re-run the inventory and reconcile it with the previous version @recurring(yearly)"
            - name: Notification volume and engagement baseline
              description: |-
                ## Purpose
                Without a baseline, every argument about whether users get too many messages is an opinion. Measuring sends per active user per week by channel, alongside open or tap rate, unsubscribes, push opt-outs and spam complaints, shows where the volume really sits and gives later changes something to be compared against.

                ## Milestones
                1. Median and 90th percentile messages per active user per week recorded for each channel.
                2. Open, click or tap rates captured for the 20 highest-volume messages.
                3. Email unsubscribe rate, spam complaint rate and push opt-out rate for the last 30 days written down.
                4. The share of active users who receive nothing at all in a typical week noted.
                5. The baseline dated and shared with design, engineering and marketing.

                ## Notes
                Start from the **Metrics log** template. Look at the 90th percentile as well as the median: the most heavily notified tenth of users is usually where complaints and opt-outs come from.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline of weekly sends per user by channel, engagement for the top 20 messages and opt-out and complaint rates is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last month's send counts by channel from the provider dashboards"
                - "Divide sends by weekly active users to get messages per user per channel"
                - "Record the 30-day unsubscribe, complaint and push opt-out rates"
                - "Refresh the baseline figures in the metrics log @recurring(monthly:4)"
            - name: Notification categories and the rules attached to each
              description: |-
                ## Purpose
                A password reset, a comment reply, a weekly summary and a promotion for a new plan should not live under the same rules, yet many products treat them identically. Sorting every message into a small set of categories, such as security and account, transactional, activity, product updates and marketing, decides which ones users can switch off, which respect quiet hours and which need marketing consent.

                ## Milestones
                1. Five to seven categories defined, each with a one-line description and an example message.
                2. Every message in the inventory assigned to exactly one category.
                3. A written rule for each category on whether users can opt out, whether quiet hours apply and whether consent is needed.
                4. Edge cases, such as a payment failure notice that also promotes an upgrade, resolved and recorded.

                ## Notes
                Keep the list short. Users see these categories in the preference centre, and more than seven turns a settings page into a form nobody reads. Check with your legal or privacy adviser which categories count as marketing where you operate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written category list with opt-out, quiet-hours and consent rules for each exists, and every inventoried message is assigned to one category."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft five to seven category names with one example message each"
                - "Tag every row in the notification inventory with a category"
                - "Write the opt-out, quiet-hours and consent rule for each category"
                - "Review the mixed-purpose messages with your privacy adviser"
            - name: Approval gate for adding a new notification
              description: |-
                ## Purpose
                Notification noise grows one reasonable request at a time: each team adds a message for its own feature and nobody sees the total. A short review step before any new message ships, with a named reviewer and a one-page request covering purpose, category, channel, audience and expected weekly volume, keeps the total visible without slowing teams to a crawl.

                ## Milestones
                1. A one-page notification request form agreed with the design and engineering leads.
                2. A named reviewer and a backup who approve or push back within two working days.
                3. The rule written into the team's definition of done for features that send messages.
                4. The first five requests through the gate reviewed to check the process is not just paperwork.

                ## Notes
                Ask every request to name the message it replaces or could be merged with. Most of the value of the gate comes from that one question.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written request form and approval rule are in use, with at least five new notifications reviewed through it and each decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the request form with purpose, category, channel, audience and volume fields"
                - "Agree who reviews requests and the two-day response rule"
                - "Add the review step to the definition of done for messaging features"
                - "Look back at the first five requests and adjust the form"
            - name: Channel rules for push, email, in-app and SMS
              description: |-
                ## Purpose
                Each channel costs the user something different: a push interrupts now, an email waits in a crowded inbox, an in-app message only reaches people already in the product, and SMS feels personal and costs money per send. Writing down which kinds of message belong in which channel, and which may use two, stops teams defaulting to push for everything because it gets the highest open rate.

                ## Milestones
                1. A one-page rule set naming the default channel for each notification category.
                2. Clear criteria for when a push is justified, such as time sensitivity or a direct action by another person.
                3. Rules for when a message falls back to a second channel, for example email if a push is not opened within 24 hours.
                4. Every existing message checked against the rules, with mismatches listed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written channel rule set covers every category, and every existing message has been checked against it with mismatches listed against owners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List what each channel costs the user in interruption and money"
                - "Write the default channel for each notification category"
                - "Define the fallback rule between push and email"
                - "Mark every inventory message that breaks the new channel rules"
            - name: Default notification settings for new accounts
              description: |-
                ## Purpose
                Few users ever open notification settings, so the defaults are effectively the product's real policy. Choosing them deliberately, category by category and channel by channel, with the reasoning written down, decides whether a new user's first fortnight feels helpful or like being shouted at.

                ## Milestones
                1. A default on or off state chosen for every category and channel pair.
                2. The reason for each default written in a sentence, including any legal constraint on marketing defaults.
                3. Defaults for users who arrive by invitation compared with those who sign up directly.
                4. The share of users who ever change a default measured, so the weight of the defaults is known.
                5. Defaults signed off by product, design and the privacy adviser.

                ## Notes
                Marketing messages often need an explicit opt-in rather than a pre-ticked default, depending on the country. Confirm the rule with your privacy adviser rather than copying a competitor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off table of default states for every category and channel, each with a written reason, is applied to new accounts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count how many users have ever changed a notification setting"
                - "Fill in a default for each category and channel in one table"
                - "Write one sentence of reasoning beside each default"
                - "Get sign-off on the defaults from design and the privacy adviser"
                - "Review the defaults against a year of opt-out data @recurring(yearly)"
            - name: Notification preference centre design
              description: |-
                ## Purpose
                Users who cannot turn off the one message that annoys them tend to turn off everything, or unsubscribe from all email at once. A preference centre with per-category controls for each channel, a pause option and plain-language descriptions gives people a way to reduce noise that does not cost the product its most useful messages.

                ## Milestones
                1. A spec covering categories, channels, pause and snooze options and what cannot be switched off.
                2. Designs for the web settings page, the mobile settings screen and the page reached from an email unsubscribe link.
                3. Category descriptions written so a user knows exactly what each toggle controls.
                4. Settings stored in one place and read by every sending service.
                5. Usability tested with five users, each asked to silence one specific message.

                ## Notes
                Start from the **Product spec** template. Offer a choice between less and none: a weekly digest option next to off keeps many users who would otherwise leave entirely.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A shipped preference centre on web and mobile offers per-category channel controls, and five test users each silenced a named message unaided."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the preference centre spec from the product spec template"
                - "Sketch the settings page with one row per category and one column per channel"
                - "Confirm with engineering that all senders read preferences from one store"
                - "Run a five-person test asking each to silence a specific message"
            - name: Unsubscribe and opt-out path audit
              description: |-
                ## Purpose
                Broken unsubscribe links, opt-outs that take days to apply and push settings buried four screens deep turn mild annoyance into spam complaints and app deletions. Testing every path a user has to stop a message, and timing how long each takes to take effect, finds the gaps before mailbox providers or regulators do.

                ## Milestones
                1. Every marketing and non-essential email confirmed to carry a working one-click unsubscribe.
                2. The time from unsubscribe to the last message received measured for each sending system.
                3. Push and in-app opt-out paths tested on each platform, with the number of taps recorded.
                4. Opt-outs confirmed to sync across every tool that sends, including the marketing platform.
                5. A list of failures with owners and fix dates.

                ## Notes
                Check the List-Unsubscribe header as well as the visible link. Large mailbox providers now expect one-click unsubscribe for bulk mail, and the visible link alone may not satisfy them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every opt-out path has been tested with its time to take effect recorded, and each failure has an owner and a fix date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Unsubscribe a test account from each email type and note the date"
                - "Check each marketing email for a List-Unsubscribe header"
                - "Count the taps needed to turn off push on iOS and Android"
                - "Test every unsubscribe path again with a fresh test account @recurring(quarterly)"
            - name: Notification pipeline architecture map
              description: |-
                ## Purpose
                When a message fails to arrive, engineers often discover that it passes through five systems nobody has drawn together: the triggering event, a rules or scheduling service, a template renderer, one or more delivery providers and a log somewhere. A diagram of that pipeline, with retry behaviour and where logs live at each step, makes failures traceable in minutes rather than days.

                ## Milestones
                1. A diagram showing each stage from triggering event to delivery receipt.
                2. Retry, timeout and dead-letter behaviour written down for each stage.
                3. The location of logs and delivery receipts at each stage recorded, with retention periods.
                4. Single points of failure and stages without monitoring highlighted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current pipeline diagram with retry behaviour and log locations for every stage has been checked by two engineers who did not draw it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Trace one password reset email from trigger to inbox through the logs"
                - "Draw each stage the message passes through, including providers"
                - "Note retry and dead-letter behaviour beside each stage"
                - "Ask two other engineers to check the diagram against the code"
            - name: Weekly notification health review
              description: |-
                ## Purpose
                Problems with notifications are quiet: a template breaks, a provider throttles, a bug sends a digest twice, and the first signal is a support ticket three days later. A 20-minute review every Tuesday of send volumes, failures, opt-outs and complaints against the baseline catches most of these within a week.

                ## Milestones
                1. A single dashboard showing weekly sends, delivery failures, opt-outs and complaints by channel.
                2. Alert thresholds agreed for sudden volume spikes or drops.
                3. A short running log of what each review found and what was done.
                4. Four consecutive weekly reviews held without skipping.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review has been held in at least 12 of the last 13 weeks, each with a dated log entry and the actions taken."
                cadence: rolling
              tasks:
                - "Build a dashboard with sends, failures, opt-outs and complaints by channel"
                - "Set a spike alert at double the usual daily volume for any message"
                - "Review the notification dashboard against the baseline @recurring(weekly:tue)"
                - "Write one line in the review log for each anomaly found"
            - name: Opt-out reasons and complaint review
              description: |-
                ## Purpose
                Every unsubscribe and every push disable is a user telling you something specific, but the signal is lost if nobody reads the reasons. Reviewing opt-out survey answers, spam complaints and the message that preceded each opt-out once a month shows which individual notifications are driving people away.

                ## Milestones
                1. An optional one-question reason prompt added to the unsubscribe page.
                2. Opt-outs joined to the last message each user received before opting out.
                3. A monthly ranking of the five messages most often followed by an opt-out.
                4. At least one change made each quarter as a result of the ranking.

                ## Notes
                Start from the **Feedback themes** template to group the free-text reasons.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly ranking of the five messages most linked to opt-outs exists, with at least one resulting change recorded each quarter."
                cadence: rolling
              tasks:
                - "Add a single optional reason question to the unsubscribe page"
                - "Join opt-out events to the last message each user received"
                - "Ask the agent to group this month's free-text opt-out reasons into themes @recurring(monthly:12)"
                - "Pick one high-opt-out message to rewrite, reduce or retire"
            - name: Email deliverability monitoring
              description: |-
                ## Purpose
                Emails that land in spam fail silently: the provider reports them as delivered and the password reset never reaches the user. Watching bounce rates, spam complaint rates, authentication results and domain reputation each month, with transactional and marketing mail on separate streams, protects the messages users actually need.

                ## Milestones
                1. Mailbox provider postmaster tools set up for each sending domain.
                2. Bounce and complaint rates tracked monthly against agreed warning thresholds.
                3. Transactional and marketing email sent from separate subdomains or streams.
                4. DMARC aggregate reports received and read, with unknown senders investigated.

                ## Notes
                Keep spam complaint rates well below the thresholds the large mailbox providers publish. Once a domain's reputation drops, recovery takes weeks of careful sending.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly bounce, complaint and reputation figures are recorded for each sending domain, and transactional mail runs on its own stream."
                cadence: rolling
              tasks:
                - "Register each sending domain with the major mailbox postmaster tools"
                - "Record bounce, complaint and reputation figures per domain @recurring(monthly:8)"
                - "Read the DMARC aggregate reports and chase unknown sending sources @recurring(quarterly)"
                - "Move transactional mail to its own subdomain if it shares one with marketing"
            - name: Push token hygiene and delivery failure handling
              description: |-
                ## Purpose
                Push tokens go stale when users reinstall, change phones or turn notifications off, and sending to dead tokens inflates volume figures and can slow delivery. Handling invalid-token responses from the push services, expiring stale tokens and tracking delivery failures by platform keeps push numbers honest and delivery fast.

                ## Milestones
                1. Invalid and unregistered token responses from both push services handled by removing the token.
                2. Tokens unused for a set period expired automatically.
                3. Delivery failure rates tracked monthly per platform and app version.
                4. Users signed in on several devices receiving each push on the right devices only.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Invalid tokens are removed automatically, and monthly push failure rates by platform have been recorded for at least three months."
                cadence: rolling
              tasks:
                - "Check how the sender handles an unregistered token response today"
                - "Add automatic removal of tokens the push services report as invalid"
                - "Record push failure rates by platform and app version @recurring(monthly:22)"
                - "Decide which devices get a push when a user is signed in on several"
            - name: Quarterly notification copy review
              description: |-
                ## Purpose
                Notification copy ages quickly: feature names change, links point at retired pages and the tone drifts as different teams write messages. Reading every live template once a quarter, on the devices and email clients users actually use, catches the broken, outdated and off-tone messages before users screenshot them.

                ## Milestones
                1. Every live template rendered and read, including push titles as they appear truncated on a small lock screen.
                2. Broken links, outdated feature names and missing personalisation fallbacks fixed.
                3. Tone checked against the product's voice guidelines.
                4. A dated record of what was changed in each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four dated quarterly reviews in a year each covered every live template, with the fixes logged."
                cadence: cyclic
              tasks:
                - "Render every live template with a test account and real sample data @recurring(quarterly)"
                - "Ask the agent to flag templates that mention retired feature names or pages"
                - "Check each push title fits on a small phone lock screen"
                - "Fix missing fallbacks where a first name or item title is empty"
            - name: Over-notified users report
              description: |-
                ## Purpose
                Averages hide the users who get hammered: the team admin copied on every change, the seller with 300 listings, the person in twelve busy group threads. A monthly report on the most-notified one percent of users, with what they received and whether they opted out, shows where caps, digests or smarter defaults are needed.

                ## Milestones
                1. A query listing the top one percent of users by messages received in the last 30 days.
                2. The messages that make up most of their volume identified.
                3. Their opt-out and churn rates compared with typical users.
                4. At least one fix, such as a digest or cap, proposed from each report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly top-one-percent volume report has been produced for three consecutive months, each with a proposed fix recorded."
                cadence: rolling
              tasks:
                - "Write the query for the most-notified one percent of users"
                - "Break their volume down by message and category"
                - "Compare their opt-out rate with the median user"
                - "Run the over-notified users report and log one proposed fix @recurring(monthly:16)"
            - name: Notification incident runbook and kill switch
              description: |-
                ## Purpose
                Sooner or later a bug sends a test push to every user, a digest goes out three times or a message shows another customer's data. A runbook with a kill switch per message and per channel, a named decision-maker, provider contacts and a holding statement for support turns an hour of panic into ten minutes of procedure.

                ## Milestones
                1. A kill switch that stops any single message or a whole channel without a deploy.
                2. A runbook naming who decides, how to stop sending and how to work out who was affected.
                3. Correction and apology templates for email and push, approved in advance.
                4. Support given a holding statement and a tag for related tickets.
                5. A drill completed in a staging environment, with the time to stop sending recorded.

                ## Notes
                Start from the **Operational checklist** template. A follow-up apology push is often worse than silence; decide in advance which incidents warrant one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested kill switch and written runbook exist, and a staging drill stopped all sending in under ten minutes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the three worst notification incidents the product could have"
                - "Confirm a single message can be stopped without a code deploy"
                - "Write the runbook with decision-maker, stop steps and support script"
                - "Run a staging drill that stops all sends and time it @recurring(yearly)"
            - name: Template library and version control
              description: |-
                ## Purpose
                When templates live in a provider's web editor, in code and in a marketing tool at once, nobody knows which version is live or who changed it last. Keeping every template in one library, with version history, a named owner, preview data and a review before publishing, makes copy changes safe and reversible.

                ## Milestones
                1. Every template stored in one source, either the codebase or one provider, with history.
                2. Each template tagged with its category, owner and last review date.
                3. Preview data sets that render each template with realistic and edge-case content.
                4. Unused templates archived each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All live templates sit in one versioned library with owners and preview data, and the archive step has run monthly for three months."
                cadence: rolling
              tasks:
                - "Count the templates held in each tool and where they overlap"
                - "Choose one source of truth for templates and move the rest into it"
                - "Create preview data with long names, empty fields and right-to-left text"
                - "Archive templates with no sends in the last 60 days @recurring(monthly:26)"
            - name: Quarterly notification pruning
              description: |-
                ## Purpose
                Messages are easy to add and almost never removed, so the inventory only grows. A quarterly pass that retires or merges the messages with the lowest engagement and highest opt-out rates keeps total volume flat even as features ship, and reminds the team that silence is a valid product decision.

                ## Milestones
                1. The bottom ten messages by engagement and the top ten by opt-outs listed each quarter.
                2. A keep, merge, reduce or retire decision recorded for each.
                3. Retired messages switched off and removed from the inventory.
                4. Total sends per user tracked quarter on quarter to confirm volume is not creeping up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A quarterly decision log shows at least three messages merged, reduced or retired each cycle, with sends per user flat or falling."
                cadence: cyclic
              tasks:
                - "Rank all messages by tap or click rate and by the opt-outs that follow"
                - "Mark each of the worst ten keep, merge, reduce or retire @recurring(quarterly)"
                - "Switch off the retired messages and update the inventory"
                - "Tell the owning teams what was retired and why"
            - name: Support tickets about missing and unwanted messages
              description: |-
                ## Purpose
                Support hears about notifications before dashboards do: the reset email that never came, the push about an order that was cancelled, the user who cannot stop a weekly email. A consistent tag for these tickets and a Friday look at the week's batch turns scattered complaints into a list of bugs and design problems with numbers attached.

                ## Milestones
                1. Two support tags agreed: one for messages not received, one for unwanted or wrong messages.
                2. Support given a short guide to applying them.
                3. A weekly count of tagged tickets with the messages they mention.
                4. Recurring problems filed as bugs or backlog items with a ticket count.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Tagged notification tickets have been counted every week for a quarter, with recurring problems filed as backlog items carrying ticket counts."
                cadence: rolling
              tasks:
                - "Agree the two notification ticket tags with the support lead"
                - "Write a three-line guide to when each tag applies"
                - "Read the week's tagged tickets and note the messages named @recurring(weekly:fri)"
                - "File each problem seen three times or more as a backlog item"
            - name: Push platform fundamentals for iOS and Android
              description: |-
                ## Purpose
                Many product decisions about push rest on platform mechanics that change every year: provisional and time-sensitive delivery on iOS, notification channels and the runtime permission on Android, collapse keys, priority and expiry. A product manager or engineer who knows these can design messages that behave as intended rather than discovering the limits in production.

                ## Milestones
                1. The current iOS options, including provisional delivery and interruption levels, summarised on one page.
                2. Android notification channels and the runtime permission explained, with what users can change per channel.
                3. Collapse, priority and expiry settings understood and mapped to the product's message categories.
                4. One test message of each type sent to real iOS and Android devices.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page platform summary is written and one test push of each type has been delivered to a real iOS and a real Android device."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the current notification sections of the Apple and Android developer documentation"
                - "Write a one-page summary of delivery options on each platform"
                - "Map each notification category to an Android channel and an iOS interruption level"
                - "Send a test push of each type to your own devices"
            - name: Email authentication and deliverability fundamentals
              description: |-
                ## Purpose
                SPF, DKIM and DMARC decide whether mailbox providers trust your mail, and the large providers now publish requirements for bulk senders that tie together authentication, complaint rates and unsubscribe handling. Understanding how they fit, and reading your own domain's records, lets you discuss deliverability with engineering and providers as an equal.

                ## Milestones
                1. SPF, DKIM, DMARC and alignment explained in your own words in a short note.
                2. Your sending domains' DNS records looked up and checked for each.
                3. The current bulk sender requirements of the largest mailbox providers summarised.
                4. Your DMARC policy and its planned path toward enforcement written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note explains SPF, DKIM and DMARC and records your own domains' current records and DMARC policy."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Look up the SPF, DKIM and DMARC records for each sending domain"
                - "Read the published bulk sender guidelines from two large mailbox providers"
                - "Write a one-page explainer of how the three records work together"
                - "Agree the next step toward a stricter DMARC policy with engineering"
            - name: Writing notification copy that earns the tap
              description: |-
                ## Purpose
                A push has roughly the length of a short sentence before it is cut off, and an email subject competes with forty others. Practising a few rules, such as leading with the specific thing that happened, naming the person or object involved and promising only what the tap delivers, makes messages useful even when they are only glanced at.

                ## Milestones
                1. A short style guide for push titles, push bodies, email subjects and in-app banners.
                2. Ten real messages rewritten against the guide, with before and after versions.
                3. The rewrites reviewed with a designer or writer.
                4. Two rewrites tested against the originals and the results recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written notification style guide and ten rewritten messages exist, two of them tested against the originals with results recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Screenshot ten real notifications from the product as they appear on a lock screen"
                - "Ask the agent to suggest three tighter versions of each title"
                - "Write a one-page notification style guide from what worked"
                - "Test two rewritten messages against the originals"
            - name: Send times, time zones and quiet hours research
              description: |-
                ## Purpose
                A digest sent at 9am in the server's time zone arrives at 3am for a third of users. Researching when your users are active, which time zones they live in and when messages are opened gives evidence for send-time rules and quiet hours, rather than copying a blog post's best time to send.

                ## Milestones
                1. Users' time zones known or inferred for at least 90 percent of active accounts.
                2. Open and tap rates by local hour of day charted for the main message types.
                3. Current scheduled messages listed with the time zone each one uses.
                4. Recommended send windows and quiet hours written up for each category.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written recommendation of send windows and quiet hours per category exists, backed by charts of engagement by local hour."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check what share of accounts have a stored time zone"
                - "Chart opens and taps by each user's local hour"
                - "List every scheduled message and the time zone it sends in"
                - "Write recommended send windows for each category"
            - name: Notification fatigue and attention reading
              description: |-
                ## Purpose
                Researchers and practitioners have written a great deal about interruptions, notification fatigue and why people disable alerts, and a few hours with it changes how a team argues about volume. Reading a small, chosen set and writing down the claims that apply to your product gives the team shared language and better questions for its own experiments.

                ## Milestones
                1. Six to eight sources chosen, mixing research on interruptions with practitioner writing on notification design.
                2. Each source summarised in three sentences with the claim most relevant to your product.
                3. Two claims turned into questions the team can test with its own data.
                4. A 20-minute share-out held with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six to eight sources are summarised, two testable questions are recorded and a share-out has been held with the team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick six to eight sources on interruptions and notification fatigue"
                - "Summarise each source in three sentences"
                - "Turn two findings into questions your own data can answer"
                - "Book a 20-minute share-out with the team"
            - name: Accessible notifications on screen and in email
              description: |-
                ## Purpose
                Toasts that vanish after three seconds are unreadable for some users, banners that steal focus disrupt screen reader users, and an email built from images says nothing to someone listening to it. Learning the accessibility patterns for each notification surface, and auditing your own, makes messages usable for everyone who receives them.

                ## Milestones
                1. Toasts and banners announced to screen readers through live regions without stealing focus.
                2. Auto-dismiss timing reviewed so messages that need action stay until dismissed.
                3. Email templates checked for real text, alt text, heading structure and colour contrast.
                4. Push and email content tested with a screen reader on at least one platform.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An accessibility audit of toasts, banners, push and email templates is complete, with each failure logged and the worst three fixed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Turn on a screen reader and trigger three in-app notifications"
                - "Check how long toasts stay visible and whether they can be paused"
                - "Run the main email templates through an accessibility checker"
                - "Fix the three worst accessibility failures found"
            - name: Messaging consent and privacy rules primer
              description: |-
                ## Purpose
                Email marketing, SMS and push are covered by consent and privacy rules that differ by country, for example the EU's electronic communications rules or CAN-SPAM in the US. A product person does not need to be a lawyer, but does need to know which questions to ask and to keep consent records that will stand up when someone asks for them.

                ## Milestones
                1. The countries where most users live listed, with the messaging rules that apply in each checked with a privacy adviser.
                2. The difference between transactional and marketing messages, as your adviser defines it, written down.
                3. Where and how consent is recorded, including time, source and the wording shown, documented.
                4. Open questions taken to the privacy adviser and their answers recorded.

                ## Notes
                This is organisational, not legal advice. Let your legal or privacy adviser make the calls; your job is to know the questions and keep the records.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written primer of the messaging rules for your main markets has been reviewed by a privacy adviser, with consent recording documented."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the five countries where most of your users live"
                - "Ask the agent to draft questions on messaging consent in those countries for your privacy adviser"
                - "Document where consent is stored and what is captured with it"
                - "Record the adviser's answers beside each question"
            - name: Choosing a notification delivery provider
              description: |-
                ## Purpose
                Teams outgrow the email service picked in week one, or find themselves running separate tools for email, push, SMS and in-app with no shared preferences. Comparing a few providers or orchestration platforms against the same criteria, such as channels covered, deliverability support, preference handling, pricing at your volume and data residency, leads to a choice the team can defend for years.

                ## Milestones
                1. Requirements listed and weighted, separating must-haves from nice-to-haves.
                2. Three providers shortlisted and scored against the same criteria.
                3. Pricing modelled at today's volume and at three times today's volume.
                4. A proof of concept run with the leading option.
                5. A decision recorded with reasons and the main risks.

                ## Notes
                Start from the **Vendor** template. Ask each provider how they handle a sudden reputation drop on shared sending infrastructure; the answer says more than the feature list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded provider decision includes three scored options, cost at current and triple volume and a proof of concept result."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the must-have and nice-to-have requirements for a provider"
                - "Shortlist three providers and request pricing at your volume"
                - "Score each provider against the same weighted criteria"
                - "Run a proof of concept sending real templates through the leader"
            - name: Frequency caps and quiet hours
              description: |-
                ## Purpose
                Even well-designed messages become noise when six arrive in an hour. A global cap per user per day, tighter caps for non-urgent categories and quiet hours in each user's local time give the product a ceiling on interruption, with clear exemptions for security alerts and messages the user explicitly asked for.

                ## Milestones
                1. Daily and weekly caps per channel decided and written down, with exempt categories listed.
                2. Quiet hours defined in local time, with a rule for what happens to held messages.
                3. Caps and quiet hours enforced in the sending pipeline rather than by each feature.
                4. The effect on opt-outs and engagement measured for four weeks after launch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Caps and quiet hours are enforced centrally for every non-exempt category, with four weeks of before and after opt-out figures recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Propose daily and weekly caps per channel from the baseline data"
                - "List the categories exempt from caps and quiet hours"
                - "Decide whether held messages are delayed, merged or dropped"
                - "Compare opt-outs for four weeks before and after the caps went live"
            - name: Digests and batching for activity notifications
              description: |-
                ## Purpose
                Fifteen separate pushes for fifteen likes, or an email for every comment on a busy document, are the commonest source of notification fatigue in social and collaborative products. Batching activity into one message after a short window, or into a daily or weekly digest, keeps users informed with a fraction of the interruptions.

                ## Milestones
                1. The activity messages most often sent in bursts identified from send data.
                2. Batching windows and digest schedules chosen for each.
                3. Digest content rules set, including ordering, item limits and what to do when there is nothing to report.
                4. A digest option offered in the preference centre alongside on and off.
                5. Sends per user and engagement compared before and after.

                ## Notes
                Do not send an empty digest. Skipping a week with nothing to report does more for trust than a message saying there was no activity.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Batching is live for the three most burst-prone activity messages, with sends per user and tap rate compared before and after."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Find the activity messages most often sent several times within an hour"
                - "Choose a batching window for each burst-prone message"
                - "Write the digest rules for ordering, item limits and empty weeks"
                - "Measure sends per user before and after batching"
            - name: In-app notification centre
              description: |-
                ## Purpose
                Users who switch off push still need somewhere to see what happened while they were away. An in-app inbox with an unread count, read state synced across devices, grouping and a sensible retention period gives every activity message a home, and lets push become an optional extra rather than the only channel.

                ## Milestones
                1. A spec covering which categories appear, grouping, retention period and read-state rules.
                2. Read state synced across web and mobile, so a message read on one is read on all.
                3. Badge rules defined, including what does not count toward the unread number.
                4. The inbox launched and its weekly opens measured.

                ## Notes
                Start from the **Product spec** template. An unread count that never reaches zero teaches users to ignore it; let users mark all as read and let old items age out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An in-app notification centre is live on web and mobile with synced read state, and its weekly open rate has been tracked for a month."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Decide which categories belong in the in-app inbox"
                - "Write the read-state and badge rules into the spec"
                - "Agree the retention period for old inbox items"
                - "Track weekly inbox opens for the first month after launch"
            - name: Deep links that land on the right screen
              description: |-
                ## Purpose
                Tapping a push about a specific comment and landing on the app's home screen wastes the tap and teaches users that notifications are not worth opening. Making every notification link land on the exact item, handle signed-out users and missing content gracefully, and work from email on both desktop and mobile is unglamorous work with a direct effect on tap-through.

                ## Milestones
                1. Every message type's destination listed and tested on web, iOS and Android.
                2. Signed-out users returned to the intended screen after signing in.
                3. Deleted or inaccessible content handled with a clear message instead of an error.
                4. Link tracking parameters standardised so destinations can be measured.
                5. A sample of live links checked every month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every notification type has been tested to land on its exact destination on all platforms, including after sign-in, with failures fixed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Tap through one live notification of each type on each platform"
                - "List every message whose link lands on the wrong screen"
                - "Fix the sign-in redirect so users return to the linked item"
                - "Spot-check ten live notification links on each platform @recurring(monthly:18)"
            - name: Cross-channel deduplication and suppression
              description: |-
                ## Purpose
                Someone who reads a comment in the app should not get a push about it a minute later and an email an hour after that. Rules that cancel pending messages once the user has seen the content, and that pick one channel rather than all three, cut duplicate interruptions without losing anything the user needs.

                ## Milestones
                1. Events that commonly trigger messages on more than one channel identified.
                2. Suppression rules written: what counts as seen, and how long to wait before sending on the next channel.
                3. Delayed sends cancelled when the content has been seen in the app.
                4. Duplicate sends per user measured before and after the rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Suppression rules are live for multi-channel messages, and duplicate sends per user are measured and lower than the baseline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count events that trigger messages on two or more channels"
                - "Define what counts as seen for each multi-channel message"
                - "Add a cancel step for queued sends when content has been seen"
                - "Measure duplicate sends per user after the change"
            - name: Security and transactional message reliability
              description: |-
                ## Purpose
                Password resets, sign-in codes, receipts and security alerts are the messages users cannot do without, and a reset email that takes ten minutes generates a support ticket every time. Giving them their own sending stream, priority in queues, speed targets and synthetic monitoring keeps them fast and separate from anything a marketing send could disrupt.

                ## Milestones
                1. Critical messages listed with a delivery speed target for each, such as under a minute for sign-in codes.
                2. Critical messages sent on a dedicated stream or queue, separate from bulk mail.
                3. Synthetic checks that send and receive a test reset email and code at regular intervals.
                4. Alerts raised when delivery time goes over target.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Critical messages run on a dedicated stream with speed targets, monitored by synthetic checks that alert when a target is missed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Time how long a password reset email takes to arrive today"
                - "Agree a delivery time target for each critical message"
                - "Move critical messages to a dedicated sending stream"
                - "Review synthetic check results for reset and code delivery times @recurring(monthly:3)"
            - name: SMS channel decision
              description: |-
                ## Purpose
                SMS reaches people without the app and without reliable email, but every message costs money, sender registration and consent rules vary by country, and fraudsters exploit sign-in codes to run up bills. Deciding whether, where and for which messages to use SMS, with costs and fraud controls modelled, avoids both an invoice surprise and a compliance problem.

                ## Milestones
                1. The candidate SMS use cases listed and compared with push and email for each.
                2. Cost per message modelled for the main countries at expected volume.
                3. Sender registration and consent requirements for those countries confirmed with the provider and the privacy adviser.
                4. Fraud controls such as rate limits and country restrictions for sign-in codes specified.
                5. A go, limited or no-go decision recorded.

                ## Notes
                Watch for artificially inflated traffic, where bots request codes to premium-rate numbers. Limit codes per number and per country before launch, not after the first bill.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded SMS decision includes per-country cost estimates, registration requirements and the fraud controls specified."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the messages that would genuinely benefit from SMS"
                - "Get per-message SMS prices for your top countries"
                - "Ask the provider what sender registration each country requires"
                - "Specify rate limits per number and per country for sign-in codes"
            - name: Lock screen previews and sensitive content
              description: |-
                ## Purpose
                Anyone glancing at a phone on a desk can read a push that shows an account balance, an appointment type or the text of a private message. Deciding which categories show full content, which show a generic line and which let users choose keeps notifications useful without exposing what users would not want shared.

                ## Milestones
                1. Every message reviewed for sensitive content in its title or preview.
                2. A rule written for each category: full content, generic text or user choice.
                3. A user setting to hide previews added where it is needed.
                4. Email subject lines checked against the same rule.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written preview rule covers every category and is applied to push and email subjects, with a hide-previews setting where needed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read every push preview as if a stranger were looking at the screen"
                - "Mark messages whose preview shows money, health or private text"
                - "Write a full, generic or user-choice rule for each category"
                - "Rewrite the email subjects that break the rule"
            - name: Preference centre launch and settings migration
              description: |-
                ## Purpose
                Launching new notification controls means mapping every user's old settings onto the new categories without silently turning anything back on. Planning the migration, testing it on real account data and announcing the change in plain language avoids the backlash of users who suddenly receive messages they had switched off.

                ## Milestones
                1. A mapping from every old setting to the new categories, with a rule for ambiguous cases.
                2. The migration dry-run on a copy of production data, with differences reviewed.
                3. No user receiving a message type they previously opted out of, verified after launch.
                4. A short in-app and email announcement explaining the new controls.
                5. Opt-outs and support tickets watched daily for the first two weeks.

                ## Notes
                When in doubt, map to the quieter setting. A user who misses a message can turn it on; a user who gets one they had turned off feels ignored.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new preference centre is live, a post-launch check confirms every prior opt-out was preserved and the announcement has been sent."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map each old setting to a new category and channel"
                - "Dry-run the migration on a copy of production data"
                - "Verify after launch that no prior opt-out was reversed"
                - "Watch opt-outs and tickets every day for the first two weeks"
            - name: Bulk sender requirements readiness check
              description: |-
                ## Purpose
                Large mailbox providers have tightened what they require from anyone sending bulk email: authenticated domains, aligned DMARC, one-click unsubscribe honoured quickly and spam complaint rates kept low. A dated readiness check against the current published requirements, before your volume or a provider's enforcement date makes it urgent, avoids rejected mail.

                ## Milestones
                1. The current published requirements of the largest mailbox providers listed as a checklist.
                2. Each requirement checked against every sending domain and stream.
                3. Gaps fixed or scheduled, each with an owner.
                4. A dated record of the check kept for the next review.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every sending domain has been checked against current bulk sender requirements, with all gaps fixed or scheduled by a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy the current bulk sender requirements into a checklist"
                - "Check each sending domain and stream against every line"
                - "Assign an owner and a date to each gap"
                - "Record the date and outcome of the check"
            - name: Peak season sending plan
              description: |-
                ## Purpose
                Year-end recaps, sale periods and big launches can triple email and push volume in a week, which is exactly when provider rate limits, reputation dips and support queues bite. Planning the peak, with volume forecasts, priority for transactional mail and a freeze on unrelated template changes, keeps critical messages flowing.

                ## Milestones
                1. Expected peak volume per channel forecast from last year or from launch plans.
                2. Provider rate limits and plan limits confirmed against the forecast.
                3. Transactional messages protected by priority or a separate stream during the peak.
                4. A change freeze agreed for templates and sending rules during the busiest days.
                5. A post-peak review of delivery, complaints and opt-outs held.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written peak plan with a volume forecast and confirmed provider limits exists, followed by a post-peak review of delivery and complaints."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Forecast the peak week's sends per channel"
                - "Confirm rate limits with each provider against the forecast"
                - "Agree the template change freeze dates with the team"
                - "Hold a post-peak review of delivery, complaints and opt-outs"
            - name: New sending domain warm-up
              description: |-
                ## Purpose
                New sending domains and dedicated IPs start with no reputation, and moving full volume onto one overnight is a reliable way to land in spam. A warm-up plan that starts with the most engaged recipients and raises volume over several weeks, watching bounces and complaints at each step, builds the reputation before it is needed.

                ## Milestones
                1. Authentication records set up and verified on the new domain.
                2. A warm-up schedule agreed, with volume steps over four to eight weeks.
                3. The first sends limited to recently engaged recipients.
                4. Bounce, complaint and placement figures reviewed before each volume increase.
                5. Full volume reached without a reputation drop.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new domain carries full planned volume after a documented warm-up, with complaint rates below the agreed threshold throughout."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm authentication passes on the new domain with a test send"
                - "Write the warm-up schedule with weekly volume steps"
                - "Build the first-week audience from recently engaged recipients"
                - "Check bounces and complaints before each volume increase"
            - name: Notification provider migration cutover
              description: |-
                ## Purpose
                Switching email or push providers touches every template, every webhook for bounces and opens, and every suppression list, and a lost suppression list means emailing people who unsubscribed. A phased cutover with templates ported, suppressions imported, traffic moved message by message and the old provider kept ready for rollback avoids lost or unwanted messages.

                ## Milestones
                1. Every template, webhook and suppression list on the old provider inventoried.
                2. Suppressions and unsubscribes imported and verified on the new provider before any send.
                3. Traffic moved in stages, starting with low-risk messages.
                4. Delivery and engagement compared between providers at each stage.
                5. The old provider decommissioned only after a full month without rollback.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All messages have moved to the new provider in stages with suppressions verified first, and the old provider was retired after a month without rollback."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Export every suppression and unsubscribe list from the old provider"
                - "Import suppressions and check the counts match before any send"
                - "Move one low-risk message to the new provider first"
                - "Keep the old provider configured for rollback for one month"
            - name: Notifications for B2B products with admins and members
              description: |-
                ## Purpose
                In a workplace product, an admin's settings, the organisation's policies and an individual's preferences all affect what a member receives, and the admin often gets every system alert by default. Designing who receives what at the organisation level, with admin-controlled defaults, role-based routing and an option to send alerts to a shared address rather than one person, fits how teams actually work.

                ## Milestones
                1. Roles listed with the messages each needs, such as billing alerts to billing admins only.
                2. Organisation-level defaults that admins can set, with what members can still override.
                3. Routing of operational alerts to a shared address or team chat channel offered as an option.
                4. A rule for what happens to messages when the person they were routed to leaves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written routing model by role, with admin-controlled defaults and a rule for departed recipients, has been reviewed with three customer admins."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List which roles need billing, security and usage alerts"
                - "Decide which defaults an organisation admin can set for members"
                - "Add routing of system alerts to a shared team address"
                - "Review the routing model with three customer admins"
            - name: Early-stage startup notification starter set
              description: |-
                ## Purpose
                Small teams with a handful of users do not need a rules engine or a preference centre with twelve toggles, but they do need the few messages that matter to work every time. Starting with a short list, such as sign-up confirmation, password reset, one key activity alert and a weekly summary, sent through one provider with an unsubscribe that works, gives a base that can grow without rework.

                ## Milestones
                1. No more than six messages chosen for the first version, each with a reason.
                2. One provider set up with authenticated sending.
                3. A single settings page with an on and off control per non-essential message.
                4. Each message tested end to end before the first real users arrive.

                ## Notes
                Resist adding a message for every event. Each early message is one more thing to keep working through every redesign.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Six or fewer messages are live through one authenticated provider, each tested end to end, with a working settings page."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the six messages a new user genuinely needs"
                - "Set up one provider with authenticated sending for your domain"
                - "Build a single settings page with a toggle per non-essential message"
                - "Send each message to yourself from a fresh account"
            - name: Engineer joining the notification platform team
              description: |-
                ## Purpose
                Notification systems hide a lot of history: odd suppression rules, provider quirks, templates that must never change. A new engineer who spends the first 90 days learning the pipeline, shadowing the weekly health review and shipping a small fix with a mentor becomes useful faster and is less likely to break a critical message.

                ## Milestones
                1. The pipeline map walked through with a senior engineer in week one.
                2. One weekly health review shadowed and one led.
                3. A small fix, such as a template bug, shipped through the full review and deploy path.
                4. A list of undocumented quirks written up for the next new joiner.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 90 days the new engineer has led a health review, shipped one notification fix and written up the undocumented quirks they found."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book a pipeline walkthrough with a senior engineer for week one"
                - "Shadow the next weekly notification health review"
                - "Pick a small template bug to fix with a mentor"
                - "Write up three undocumented quirks for the next joiner"
            - name: Taking over a noisy legacy notification system
              description: |-
                ## Purpose
                Inheriting a product with hundreds of templates, no owners and a reputation for spam is common after a reorganisation or acquisition. Triage comes before redesign: stop the worst offenders, assign owners, fix what is broken and only then plan the new system, so users feel a difference within weeks instead of after a long rebuild.

                ## Milestones
                1. The ten messages generating the most opt-outs and complaints paused or reduced in the first month.
                2. Every remaining message assigned an owner or scheduled for retirement.
                3. Known broken messages, such as dead links or wrong data, fixed.
                4. A written plan for the longer redesign, sequenced after the quick fixes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within one quarter the ten worst messages are paused or reduced, every remaining message is owned or scheduled for retirement and a redesign plan is written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank all inherited messages by opt-outs and complaints generated"
                - "Pause or reduce the ten worst after telling their teams"
                - "Ask the agent to draft an ownership request for each unowned message"
                - "Write the sequenced plan for the longer redesign"
            - name: Collaboration product mentions, assignments and replies
              description: |-
                ## Purpose
                In tools where people work together, the most valuable notifications come from other people: a mention, an assignment, a reply to your comment, an approval request. Treating these differently from system activity, with higher priority, threading so replies collapse together and a clear rule for when watching an item means hearing about every change, makes collaboration notifications something users rely on.

                ## Milestones
                1. Person-to-person messages separated from system activity in categories and channels.
                2. Thread and item-level grouping so a busy discussion becomes one message.
                3. Watch and unwatch rules defined, including automatic watching when a user comments.
                4. Notification text naming the person and the item, tested with three teams.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Mentions, assignments and replies are separated from system activity, with threading and watch rules live and tested with three teams."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Separate mentions, assignments and replies from system activity messages"
                - "Decide when commenting on an item makes a user watch it"
                - "Group replies in one thread into a single notification"
                - "Test the new mention and reply messages with three teams"
            - name: Relevance ranking for candidate notifications
              description: |-
                ## Purpose
                Once a product has dozens of possible messages for each user every day, the question shifts from whether to send to which few to send. A ranking model or scoring rule that estimates each candidate's value to the user, combined with a per-user budget, sends the most useful handful and drops the rest, but only works with clean engagement data and careful guardrails.

                ## Milestones
                1. A scoring rule or model that predicts tap or click likelihood for each candidate message.
                2. A per-user daily budget that the ranker fills in order of score.
                3. Guardrails exempting security and transactional messages from ranking.
                4. An experiment comparing ranked sending with the current rules on engagement and opt-outs.

                ## Notes
                Optimising only for taps rewards clickbait. Include opt-outs and longer-term retention in the evaluation, not just the immediate response.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An experiment comparing ranked sending with current rules reports taps, opt-outs and four-week retention for each group."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Collect candidate messages and their outcomes for a sample of users"
                - "Build a simple scoring rule before trying a learned model"
                - "List the categories that must never be ranked out"
                - "Design the experiment comparing ranked and rule-based sending"
            - name: Long-term notification holdout
              description: |-
                ## Purpose
                Short tests show that a new push gets taps, but not whether users who receive fewer messages stay longer. A small long-running holdout group that receives only essential notifications, compared with everyone else over three months or more, measures what the notification programme as a whole is worth and which messages earn their keep.

                ## Milestones
                1. A holdout group of a few percent of new users defined and excluded from non-essential messages.
                2. Primary measures agreed, such as 90-day retention and weekly active days.
                3. The holdout checked for leakage from tools that ignore the flag.
                4. A quarterly readout comparing the holdout and normal groups.

                ## Notes
                Agree the holdout's size and end date before starting. A holdout that keeps getting cut short to recover lost engagement never produces an answer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A holdout has run for at least 90 days, with a quarterly readout comparing retention and active days against the normal group."
                cadence: cyclic
              tasks:
                - "Agree the holdout size, essential message list and end date"
                - "Add the holdout flag to every sending system, including marketing tools"
                - "Check for messages leaking into the holdout group"
                - "Publish the holdout versus normal group readout @recurring(quarterly)"
            - name: Time-sensitive and critical alert design
              description: |-
                ## Purpose
                Some products send alerts that genuinely cannot wait: a fraud warning, a service outage, a medication reminder, a safety notice. Designing these with the platforms' time-sensitive or critical options where they qualify, escalation to a second channel when unacknowledged and strict rules on who can send them keeps their urgency credible.

                ## Milestones
                1. The messages that qualify as time-sensitive or critical listed, with the reason for each.
                2. Platform options for breaking through focus modes checked against platform policy for each.
                3. An escalation path to SMS, a call or a second contact when an alert is not acknowledged.
                4. A tested end-to-end path for each critical alert, repeated on a schedule.

                ## Notes
                Use urgent levels sparingly. Platforms can withdraw special entitlements, and users who see a routine message marked urgent stop trusting the real ones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written list of qualifying critical alerts exists, each with an escalation path and an end-to-end test passed in the last quarter."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every alert that genuinely cannot wait until morning"
                - "Check each against the platforms' rules for time-sensitive delivery"
                - "Design the escalation path when an alert is not acknowledged"
                - "Run an end-to-end test of every critical alert path @recurring(quarterly)"
            - name: Event-driven notification rules engine
              description: |-
                ## Purpose
                When every feature team hard-codes its own sends, caps, preferences and suppression are enforced unevenly or not at all. A central engine that takes product events, applies preferences, caps, deduplication and quiet hours, and hands rendered messages to providers with idempotency keys gives one place to change policy and one log of every decision.

                ## Milestones
                1. An event schema agreed for every message-triggering event, with required fields.
                2. Preferences, caps, quiet hours and deduplication applied in one service for all channels.
                3. Idempotency keys preventing duplicate sends on retries.
                4. Every send or suppression decision logged with its reason.
                5. Existing hard-coded sends moved onto the engine one team at a time.

                ## Notes
                Log suppressed messages as well as sent ones. When a user says they never got something, the reason it was held back is the answer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All channels send through one rules engine that logs every send and suppression with a reason, and no hard-coded sends remain."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Write the event schema for message-triggering events"
                - "List every hard-coded send that bypasses preferences or caps"
                - "Add idempotency keys to every provider call"
                - "Move one team's sends onto the engine as the pilot"
            - name: Notification audit trail and data retention
              description: |-
                ## Purpose
                Questions about what was sent arrive months later: a customer disputes being told about a price change, an auditor asks for consent evidence, a user requests their data. A searchable record of every message sent, with consent state at the time, kept for an agreed period and stripped of content that should not sit in logs, answers those questions without keeping more personal data than needed.

                ## Milestones
                1. Retention periods for send logs, message content and consent records agreed with the privacy adviser.
                2. A searchable record of what was sent to whom, when and on which channel.
                3. Personal data in message bodies and logs minimised or masked.
                4. A sample request answered within a set time using only the audit trail.

                ## Notes
                Decide retention with your privacy or legal adviser. Keeping everything forever is a risk of its own, not a safe default.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Agreed retention periods are in force for send logs and consent records, and a sample request was answered from the audit trail in under a day."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List where send logs and rendered message content are stored today"
                - "Agree retention periods for each with the privacy adviser"
                - "Mask personal data in logs where the full content is not needed"
                - "Review retention settings against the agreed periods @recurring(yearly)"
---

# Notifications & Messaging Features

This area is for product managers and engineers who decide what a product says to its users, through which channel and how often. It starts with the foundations (an inventory of every message, a volume baseline, categories, channel rules, defaults and a preference centre), then the weekly and monthly machinery that keeps volume, deliverability and complaints in check, the knowledge worth having about push platforms, email authentication, copy and consent, the build decisions such as caps, digests, an in-app inbox and deep links, dated events like a domain warm-up or a provider migration, the situations different teams find themselves in, and finally the specialist work of relevance ranking, holdouts, rules engines and audit trails.

What repeats is a Tuesday notification health review and a Friday pass through support tickets about missing or unwanted messages, monthly looks at the baseline, opt-out reasons, deliverability, push failures, over-notified users, templates, deep links and critical message speed, quarterly copy reviews, unsubscribe tests, pruning and alert tests, and a yearly re-inventory and incident drill. The Metrics log, Product spec, Operational checklist, Feedback themes, Vendor and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
