---
id: founding-startups.consumer-app-startup-growth
name: Consumer App Startup Growth
description: "A consumer app growth engine you can read: an activation moment and retention cohorts you trust, store listings that convert, lifecycle messaging, referral loops and paid acquisition that pays back."
category: business
version: 1.0.0
tags: [founding-startups, consumer-app-startup-growth, founder, consumer-app, retention, app-store-optimisation, virality, user-acquisition]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - feedback-themes
    - purchase-decision
    - content-pipeline
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Consumer App Startup Growth
          description: "Growing a consumer app from launch, with retention, virality, app store presence and the economics of acquiring users."
          projects:
            - name: Consumer app growth baseline audit
              description: |-
                ## Purpose
                Most founders a few months after launch can quote downloads but not where those users came from, how many came back on day seven, or which step loses half of them. A two-week audit of installs, activation, retention, ratings and spend gives one honest starting picture that every later project is measured against.

                ## Milestones
                1. Installs for the last 90 days split by source: organic search, browse, referral, paid and web.
                2. Day 1, day 7 and day 30 retention written down for the last three monthly cohorts.
                3. The biggest single drop-off in the first session identified from funnel data.
                4. Store rating, review count and the three most common complaints recorded.
                5. A one-page baseline shared with co-founders and dated.

                ## Notes
                Use whatever numbers you have, even rough ones from the store consoles. A baseline with gaps marked is far more useful than waiting for perfect analytics.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page baseline showing install sources, day 1, 7 and 30 retention, the main funnel drop and rating themes, shared with the founding team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the last 90 days of installs from App Store Connect and the Play Console"
                - "Pull day 1, 7 and 30 retention for the last three monthly cohorts"
                - "Find the step in the first session where the most users drop out"
                - "Write the baseline on one page and share it with your co-founders"
            - name: Analytics event plan for the core loop
              description: |-
                ## Purpose
                Consumer apps often ship with dozens of auto-tracked events and none that answer the questions growth depends on. A short tracking plan that names the ten to twenty events of the core loop, with consistent names and user properties, means retention, funnels and experiments can be trusted rather than argued about.

                ## Milestones
                1. The core loop written as a sentence: what a user does, gets and comes back for.
                2. A tracking plan listing each event, its trigger, its properties and its owner.
                3. Events implemented on both iOS and Android with identical names.
                4. A test account's session checked event by event in the analytics tool.
                5. Unused or duplicate legacy events marked for removal.

                ## Notes
                Name events as object and action in the past tense (photo_shared, plan_started) and never rename one without a migration note. Renamed events silently break every saved chart.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written tracking plan of the core loop events exists and a test session shows every planned event firing with the same names on both platforms."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the core loop of the app as one plain sentence"
                - "List the ten to twenty events that describe that loop, with their properties"
                - "Ask an engineer to implement the plan on iOS and Android with identical names"
                - "Run a test session and tick off each event as it appears in analytics"
            - name: Defining the activation moment
              description: |-
                ## Purpose
                Retention usually hinges on whether a new user reaches one specific experience early, such as the first saved workout, the first message answered or three friends followed. Finding that moment from your own data, and agreeing a time window for it, gives onboarding, notifications and experiments a single target.

                ## Milestones
                1. Three to five candidate actions listed from interviews and the event data.
                2. Day 30 retention compared for users who did and did not take each action in their first days.
                3. One activation definition chosen, with a count and a time window.
                4. The current activation rate measured and added to the weekly numbers.

                ## Notes
                Correlation is a starting point, not proof. Confirm the moment later by testing an onboarding change that pushes more people to it and watching retention move.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written activation definition with an action, a count and a time window, plus the current activation rate, is recorded in the growth doc."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List five actions that retained users seem to take early"
                - "Compare day 30 retention for users who did each action in week one"
                - "Pick one definition with a count and a time window"
                - "Add the activation rate to the weekly metrics log"
            - name: Retention curves for day 1, 7 and 30
              description: |-
                ## Purpose
                Whether a consumer app survives comes down to whether its retention curve flattens. Building cohort curves by install week, for each platform, shows whether a stable base of users is forming and gives you a realistic benchmark to compare with what is typical for your category.

                ## Milestones
                1. Weekly install cohorts plotted from day 0 to day 30 or beyond.
                2. Separate curves for iOS and Android, and for organic and paid users.
                3. The point where each curve starts to flatten, if it does, marked.
                4. A short note comparing your curves with published category benchmarks.

                ## Notes
                Choose whether you count a user as retained on exactly day N or at any point in a window, write the choice down, and never change it quietly.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cohort retention curves by install week, split by platform and by organic versus paid, are saved with the retention definition written beside them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide and write down how you define a retained user"
                - "Build weekly cohort curves to day 30 in the analytics tool"
                - "Split the curves by platform and by organic versus paid"
                - "Find two published retention benchmarks for your app category"
            - name: Store listing first pass for both stores
              description: |-
                ## Purpose
                For most consumer apps the store page is the last thing a person sees before deciding to install, and many founders leave the screenshots they made the week of launch. Rewriting the title, subtitle or short description and the first three screenshots around the main benefit is often the cheapest conversion gain in the whole area.

                ## Milestones
                1. Current store page conversion rate noted from both consoles.
                2. Title, subtitle and short description rewritten around one clear benefit and the main keywords.
                3. First three screenshots redesigned to show the outcome, not the menus.
                4. Updated listings live on both stores, with the date recorded.

                ## Notes
                Most visitors never scroll past the first screenshots, so put the strongest message there. Keep the old assets so you can compare and roll back.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "New titles, descriptions and first three screenshots are live on both stores, with the before conversion rate recorded for comparison."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Note the current product page conversion rate in each store console"
                - "Rewrite the title and subtitle around one benefit and your main keyword"
                - "Redesign the first three screenshots to show the result a user gets"
                - "Refresh store screenshots and preview video with what you learned @recurring(quarterly)"
            - name: Install attribution under privacy rules
              description: |-
                ## Purpose
                Since mobile platforms restricted device-level tracking, many founders spend on ads without knowing which campaigns drove installs that stayed. Setting up the platforms' privacy-preserving attribution, such as Apple's SKAdNetwork and AdAttributionKit and the Google Play install referrer, alongside a measurement partner if you need one, gives you a defensible read on paid and owned channels.

                ## Milestones
                1. A list of every channel that sends installs and how each is currently measured.
                2. Platform attribution configured, with conversion values mapped to early activation events.
                3. Deep links with campaign parameters used on every owned link: web, email and social.
                4. A first channel report that reconciles attributed installs with store totals within a known gap.

                ## Notes
                Expect attribution to be incomplete. Decide in advance how you will treat the unattributed share rather than letting it quietly flatter the channel you like.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Platform attribution is configured with conversion values tied to activation, and a channel report reconciles to store install totals with the gap stated."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List every source of installs and how you measure it today"
                - "Map attribution conversion values to your activation events"
                - "Add campaign parameters to every owned link to the app"
                - "Compare attributed installs with store totals and write down the gap"
            - name: Crash rate and app speed floor
              description: |-
                ## Purpose
                Crashes, slow launches and battery drain drive one-star reviews and uninstalls faster than any missing feature, and stores weigh technical quality in how they rank apps. Agreeing a floor for crash-free sessions and cold start time, and checking it monthly, keeps stability from sliding while the team chases growth.

                ## Milestones
                1. Crash-free session rate and cold start time measured on both platforms.
                2. A written floor for each metric agreed with the engineering lead.
                3. The three most frequent crashes fixed or scheduled.
                4. Stability warnings in the store consoles checked and cleared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Crash-free sessions and cold start time stay at or above the written floor for three consecutive monthly checks."
                cadence: rolling
              tasks:
                - "Look up the crash-free session rate for the latest release"
                - "Agree a stability floor with your engineering lead"
                - "Schedule fixes for the three most frequent crashes"
                - "Check crash-free sessions and store stability warnings @recurring(monthly:15)"
            - name: One-page consumer growth model
              description: |-
                ## Purpose
                Growth in a consumer app is the sum of new users, retained users and resurrected users minus those who churn, and seeing it that way shows which lever matters most this quarter. A simple growth accounting sheet built from your own numbers stops the team defaulting to more installs when the real gap is week two retention.

                ## Milestones
                1. Monthly active users broken into new, retained, resurrected and churned for the last six months.
                2. The quick ratio of gained to lost users calculated for each month.
                3. The lever with the largest effect on next quarter's active users identified.
                4. The model shared and used to choose the quarter's growth focus.

                ## Notes
                Keep this about user flows, not money. Revenue per user and acquisition cost belong in your unit economics work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A growth accounting sheet for six months exists and the quarter's single growth focus is recorded with the lever it targets."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export monthly active users for the last six months"
                - "Split each month into new, retained, resurrected and churned users"
                - "Calculate the gained to lost ratio for every month"
                - "Pick the lever that would move next quarter's active users most"
            - name: Choosing the first scalable acquisition channel
              description: |-
                ## Purpose
                Early consumer founders often spread a small budget across ads, influencers, content and stores at once and learn nothing about any of them. Comparing four or five channels on cost, speed of learning and fit with your audience, then committing to one for a quarter, turns scattered effort into a readable test.

                ## Milestones
                1. Five candidate channels listed with what each would cost to test properly.
                2. Each channel scored on audience fit, cost, speed of feedback and your team's skills.
                3. One channel chosen for a quarter with a budget and a stop rule.
                4. The two runners-up written down for the following quarter.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One acquisition channel is chosen for a quarter with a written budget, success threshold and stop rule."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List five channels where your audience already spends time"
                - "Score each on fit, cost, speed of feedback and team skill"
                - "Write a budget and a stop rule for the winning channel"
                - "Note the two runners-up for next quarter"
            - name: Privacy, consent and permissions review
              description: |-
                ## Purpose
                Consumer apps collect location, contacts, photos and health data more casually than they should, and store rejections, regulator letters and press stories follow. Mapping what you collect, why, and how consent is asked, then checking it with a privacy lawyer, protects both users and the company before growth multiplies the exposure.

                ## Milestones
                1. A data map of every personal data field, its purpose and every third-party SDK that receives it.
                2. Store privacy labels and the data safety form checked against the map.
                3. Permission prompts and consent screens reviewed for clarity and timing.
                4. Open questions taken to a privacy lawyer and their answers recorded.

                ## Notes
                This is organisational preparation, not legal advice. Rules differ by country and by user age, so the lawyer's view decides what changes.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A data map matching the store privacy declarations exists and a privacy lawyer's answers to the open questions are recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every third-party SDK in the app and what data it receives"
                - "Compare the data map with your store privacy labels"
                - "Book a review of the open questions with a privacy lawyer"
                - "Recheck the data map and privacy labels against the current SDK list @recurring(yearly)"
            - name: Monday growth meeting
              description: |-
                ## Purpose
                Without a fixed slot, growth work in a small team becomes whatever the loudest metric suggested on Tuesday. A 45-minute Monday meeting that reviews last week's numbers and experiments, then commits to this week's tests, gives the team one place where growth decisions are made and remembered.

                ## Milestones
                1. A standing agenda: numbers, experiment results, decisions, this week's tests.
                2. An owner named for every experiment that starts.
                3. Decisions written in the meeting notes the same day.
                4. Eight meetings held in a row with notes kept.

                ## Notes
                Start from the **Meeting notes** template. Keep the meeting to people who will run tests that week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Monday growth meetings are held, each with written notes naming results, decisions and experiment owners."
                cadence: rolling
              tasks:
                - "Write a four-part agenda for the growth meeting"
                - "Invite only the people who run growth tests"
                - "Run the growth meeting and file the notes @recurring(weekly:mon)"
                - "Name an owner for each experiment before the meeting ends"
            - name: Weekly growth numbers log
              description: |-
                ## Purpose
                Five numbers written down every week beat a dashboard nobody opens. Logging installs, activation rate, day 7 retention, weekly active users and paid cost per activated user each Tuesday builds a record that shows trends before they become crises.

                ## Milestones
                1. Five weekly numbers chosen with exact definitions.
                2. A log with at least twelve weeks of history back-filled where possible.
                3. Each week's entry carrying one line on what changed.
                4. The log used as the first item of the growth meeting.

                ## Notes
                Start from the **Metrics log** template. Choosing the company's single top metric belongs to north star work; this log is the growth team's working numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log of five defined growth numbers has an entry every week for twelve weeks, each with a one-line comment."
                cadence: rolling
              tasks:
                - "Write exact definitions for the five weekly growth numbers"
                - "Back-fill the log for as many past weeks as the data allows"
                - "Record this week's numbers with one line on what changed @recurring(weekly:tue)"
                - "Flag any number that moved more than a set threshold"
            - name: Monthly retention cohort review
              description: |-
                ## Purpose
                Retention changes slowly and is easy to miss week to week, yet it decides whether paid growth is affordable at all. Reviewing the newest monthly cohorts against older ones, with the releases and campaigns that landed in between, tells you whether product work is actually keeping people.

                ## Milestones
                1. The latest monthly cohort's day 30 retention set beside the previous five.
                2. Releases, experiments and campaigns of the month annotated on the chart.
                3. One hypothesis written for any cohort that is clearly better or worse.
                4. Follow-up tests added to the experiment backlog.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly cohort reviews are completed, each with an annotated chart and at least one hypothesis added to the backlog."
                cadence: rolling
              tasks:
                - "Run the cohort review and annotate releases on the chart @recurring(monthly:5)"
                - "Write one hypothesis for the best and worst recent cohort"
                - "Add follow-up tests to the experiment backlog"
                - "Share the annotated chart with the whole team"
            - name: Store review and rating replies
              description: |-
                ## Purpose
                Ratings shape both ranking and the install decision, and an unanswered one-star review about a bug you fixed last week keeps costing installs. A weekly half hour reading and replying to reviews, and prompting happy users at the right moment, lifts the average and feeds the product team real complaints.

                ## Milestones
                1. Reply templates written for bugs, feature requests, billing and praise.
                2. Every review from the last month read and the useful ones answered.
                3. An in-app rating prompt shown only after a success moment.
                4. Rating trend recorded monthly for both stores.

                ## Notes
                Use the platforms' own review prompt APIs and never offer rewards for ratings, which store rules forbid.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Reviews in both stores are answered within seven days for two months and the in-app rating prompt fires only after a defined success moment."
                cadence: rolling
              tasks:
                - "Write four short reply templates for common review types"
                - "Read and reply to new reviews in both stores @recurring(weekly:thu)"
                - "Move the rating prompt to just after a success moment"
                - "Send recurring complaints to the product backlog with review counts"
            - name: Growth experiment backlog and test pipeline
              description: |-
                ## Purpose
                Small teams run few tests, so each one has to count. A ranked backlog with a hypothesis, expected effect and sample size for every idea, and a simple rule for when a test is finished, stops tests being stopped early on a good day or left running for months.

                ## Milestones
                1. A backlog where every idea has a hypothesis, target metric and expected effect.
                2. Ideas ranked by expected impact, confidence and effort.
                3. A sample size or run-time calculated before each test starts.
                4. A results archive with the decision taken after each test.

                ## Notes
                Most consumer app tests will show no clear effect. Record those too, because they stop the same idea coming back every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked backlog and results archive exist, and every test run in a quarter had its sample size set before launch."
                cadence: rolling
              tasks:
                - "Rewrite the top ten ideas as hypotheses with a target metric"
                - "Rank the backlog by impact, confidence and effort"
                - "Calculate the sample size needed for the next test"
                - "Re-rank the backlog and archive finished tests @recurring(monthly:12)"
            - name: Lifecycle push and email calendar
              description: |-
                ## Purpose
                Push notifications and emails are the main way a consumer app brings people back, and also the fastest way to get notifications switched off for good. Planning lifecycle messages by user stage, with a frequency cap and a monthly look at opt-outs, keeps messaging useful rather than noisy.

                ## Milestones
                1. Messages mapped to stages: new, activated, at risk, lapsed and power user.
                2. A frequency cap per user per week written and enforced in the messaging tool.
                3. Every message carrying a clear reason a user would want it.
                4. Opt-out and notification disable rates tracked monthly.

                ## Notes
                Start from the **Content pipeline** template to plan copy and send dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stage-based message calendar with a weekly frequency cap is live, and opt-out rates are reviewed every month for a quarter."
                cadence: rolling
              tasks:
                - "Map current push and email messages to user stages"
                - "Set a weekly frequency cap in the messaging tool"
                - "Cut any message you cannot explain the user benefit of"
                - "Review opt-out rates and plan next month's messages @recurring(monthly:18)"
            - name: Store keyword and ranking tracking
              description: |-
                ## Purpose
                Store search is the largest free channel for many consumer apps, and rankings drift as competitors change their listings. Tracking twenty to thirty target keywords monthly, and updating metadata on a regular rhythm, keeps organic installs from quietly eroding.

                ## Milestones
                1. Twenty to thirty keywords chosen by relevance, volume and difficulty.
                2. Current rankings recorded for each keyword on both stores.
                3. Metadata updated with the next release where rankings slipped.
                4. Monthly ranking and organic install trend noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A keyword list with monthly rankings is kept for six months and metadata is updated at least once a quarter based on it."
                cadence: rolling
              tasks:
                - "Pick twenty keywords your users would actually type"
                - "Record today's ranking for each keyword in both stores"
                - "Update the ranking sheet and note organic install changes @recurring(monthly:9)"
                - "Queue metadata changes for the next app release"
            - name: Paid acquisition spend and payback check
              description: |-
                ## Purpose
                Paid campaigns can burn a month's budget in days, and cost per install hides whether those users ever activate or pay. A Friday check of spend against cost per activated user, and a monthly payback review, catches bad campaigns early and gives you a reason to scale the good ones.

                ## Milestones
                1. Cost per install, cost per activated user and early revenue tracked per campaign.
                2. A ceiling for cost per activated user written down.
                3. Campaigns above the ceiling for two weeks paused or reworked.
                4. A monthly payback estimate by channel shared with co-founders.

                ## Notes
                Set the ceiling from your own unit economics, not from industry averages. Early cohorts from a new channel often look worse before the algorithm learns.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active campaign is checked weekly against a written cost per activated user ceiling for eight weeks, with pauses recorded."
                cadence: rolling
              tasks:
                - "Write the maximum cost per activated user you can accept"
                - "Check spend and cost per activated user by campaign @recurring(weekly:fri)"
                - "Estimate payback by channel and share it @recurring(monthly:26)"
                - "Pause any campaign above the ceiling for two straight weeks"
            - name: User feedback inbox and in-app survey loop
              description: |-
                ## Purpose
                Support emails, reviews, social replies and survey answers usually sit in four places and get read only when something breaks. One feedback inbox, tagged weekly into themes, with a short in-app survey after key moments, tells you why people leave and what keeps the ones who stay.

                ## Milestones
                1. All feedback sources routed into one inbox or board.
                2. A two-question in-app survey shown after activation and after cancellation.
                3. Feedback tagged into themes every week with counts.
                4. The top three themes presented at the growth meeting monthly.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feedback from all sources lands in one place and is tagged weekly, with theme counts kept for at least two months."
                cadence: rolling
              tasks:
                - "Route support email, reviews and social replies into one board"
                - "Write a two-question survey for after activation and cancellation"
                - "Tag this week's feedback into themes with counts @recurring(weekly:wed)"
                - "Bring the top three themes to the growth meeting"
            - name: Release rhythm and what's new notes
              description: |-
                ## Purpose
                Regular updates signal a living app to both stores and users, and the release notes are one of the few places a returning visitor reads what improved. A predictable release rhythm with plain-language notes and staged rollouts reduces the risk that a bad build reaches everyone at once.

                ## Milestones
                1. A release rhythm agreed, such as every two weeks.
                2. Staged rollouts used for every release on both platforms.
                3. Release notes written in user terms, naming one improvement clearly.
                4. A release calendar kept four weeks ahead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six releases in a row ship on the agreed rhythm with staged rollouts and user-facing notes naming a specific improvement."
                cadence: rolling
              tasks:
                - "Agree a release rhythm with the engineering lead"
                - "Turn on staged rollouts in both store consoles"
                - "Rewrite the last release note in plain user terms"
                - "Plan the release calendar four weeks ahead @recurring(monthly:2)"
            - name: Learning retention analysis properly
              description: |-
                ## Purpose
                Founders who can read a cohort table, separate a curve's shape from its starting point and spot survivorship bias make far better calls on where to spend effort. A few weeks of focused study using your own data, alongside a respected course or book on product analytics, builds that judgement.

                ## Milestones
                1. One course or book on product analytics chosen and finished.
                2. Your own cohorts rebuilt by hand once in a spreadsheet.
                3. Unbounded and bounded retention explained in your own words.
                4. A note of three mistakes you were making before.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One product analytics course or book is completed and your own cohorts have been rebuilt by hand in a spreadsheet with notes."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one product analytics course or book to finish"
                - "Rebuild last month's cohorts by hand in a spreadsheet"
                - "Write how bounded and unbounded retention differ"
                - "List three analysis mistakes you will stop making"
            - name: Studying viral loops and the k-factor
              description: |-
                ## Purpose
                Virality in consumer apps is rarely one magic feature: it is how many invitations each user sends and how many of those convert, repeated quickly. Studying how successful apps built sharing into the product, and calculating your own invite rate and conversion, shows whether viral growth is realistic for you at all.

                ## Milestones
                1. Five apps' sharing mechanics written up: what is shared, by whom, and why.
                2. Your own invitations per user and invite conversion rate measured.
                3. Your k-factor and cycle time calculated with the formula written out.
                4. A judgement recorded on whether virality can be a primary channel for your app.

                ## Notes
                A k-factor below one still matters: it lowers the effective cost of every paid user.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your app's invite rate, invite conversion, k-factor and cycle time are calculated, with a written view on virality's role."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write up the sharing mechanics of five apps you admire"
                - "Measure invitations sent per active user last month"
                - "Calculate your k-factor and viral cycle time"
                - "Decide whether virality should be a primary or a support channel"
            - name: App store optimisation fundamentals
              description: |-
                ## Purpose
                Store optimisation has its own rules: how each store indexes keywords, what custom product pages and listing experiments allow, and how ratings, retention and update frequency feed ranking. Learning them once saves months of guessing and makes the monthly keyword work sharper.

                ## Milestones
                1. The keyword fields each store indexes, and their limits, written down.
                2. Product page optimisation on iOS and store listing experiments on Google Play understood and tried once.
                3. Custom product pages or custom store listings set up for one audience.
                4. A short internal guide written for whoever handles the stores next.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written internal store optimisation guide exists and at least one listing experiment has been run in each store."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read each store's own guidance on search and metadata"
                - "Run one listing experiment in each store"
                - "Create a custom product page for your largest audience"
                - "Ask the agent to draft an internal store optimisation guide from your notes"
            - name: Paywall placement and trial design study
              description: |-
                ## Purpose
                For subscription apps, where and when the paywall appears, and whether there is a free trial, often matters more to revenue than the price itself. Studying paywall teardowns and your own conversion at each placement prepares you to test changes without guessing.

                ## Milestones
                1. Ten paywalls from apps in or near your category screenshotted and compared.
                2. Your current trial start, trial conversion and cancellation rates recorded.
                3. Three placement options written: onboarding, after activation, at a feature limit.
                4. One placement or trial test designed and added to the backlog.

                ## Notes
                Choosing price levels and tiers belongs to pricing work. Keep this on placement, timing, trial length and the paywall screen itself.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of ten paywalls and your own trial funnel numbers is written up, with one placement test added to the backlog."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Screenshot ten paywalls from apps near your category"
                - "Record your trial start and trial to paid conversion rates"
                - "Write three paywall placement options with their trade-offs"
                - "Design one placement test and add it to the backlog"
            - name: Creative testing for app install ads
              description: |-
                ## Purpose
                On the major ad networks, targeting is largely automated, so creative is the main lever left to the advertiser. Learning to brief, produce and test short videos and statics in batches, with a clear read on hook rate and cost per activated user, turns ad spend into a source of learning.

                ## Milestones
                1. A creative brief template with hook, problem, payoff and call to action.
                2. A first batch of six to ten variants produced cheaply.
                3. Variants compared on hook rate and cost per activated user, not clicks.
                4. Winning concepts noted for store screenshots and onboarding copy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least six ad creatives have been tested and compared on cost per activated user, with the winning concept written up."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a one-page creative brief with hook, problem and payoff"
                - "Produce six short video or static variants on a small budget"
                - "Compare variants on cost per activated user after a fixed spend"
                - "Reuse the winning message in your store screenshots"
            - name: Onboarding teardowns of ten consumer apps
              description: |-
                ## Purpose
                Seeing how ten good apps handle the first five minutes, including sign-up, permissions, personalisation and the first win, gives a team a shared vocabulary and a stock of ideas. Recording each screen and timing the path to value makes the comparison concrete.

                ## Milestones
                1. Ten apps chosen, at least half from outside your category.
                2. Each onboarding recorded and timed to the first meaningful result.
                3. Patterns written up: what is asked, when, and what is deferred.
                4. Five ideas added to the experiment backlog.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten onboarding flows are recorded and timed, and five ideas from them are added to the backlog as hypotheses."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten apps with onboarding you admire"
                - "Record each first session on a fresh account and time it"
                - "Write up the patterns you saw across all ten"
                - "Add five onboarding ideas to the experiment backlog"
            - name: Ethical habit design for daily use
              description: |-
                ## Purpose
                Consumer apps that people return to daily usually pair a trigger, an easy action and a reward, and the same techniques can slide into manipulation that users and regulators resent. Studying habit design together with dark pattern guidance helps you build return visits you would be comfortable explaining to a user.

                ## Milestones
                1. One book or course on habit-forming product design completed.
                2. Published guidance on dark patterns read and noted.
                3. Each streak, badge and reminder in your app checked against a short ethics test.
                4. Any pattern that fails the test redesigned or removed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every engagement mechanic in the app has been checked against a written ethics test and failures have a redesign ticket."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one book or course on habit-forming design"
                - "Read a regulator's guidance on dark patterns in apps"
                - "List every streak, badge and reminder in your app"
                - "Open a redesign ticket for any mechanic that fails your ethics test"
            - name: Store review guidelines and platform policy
              description: |-
                ## Purpose
                Rejected updates and removed apps can halt growth for days, and many rejections come from rules founders never read: subscription disclosures, account deletion, user-generated content moderation and data use. Reading both stores' policies and checking your app against them avoids surprises at the worst moment.

                ## Milestones
                1. Both stores' review guidelines read, with sections relevant to you highlighted.
                2. A checklist of the rules your app touches, such as subscriptions, accounts and content.
                3. The current app checked against the checklist and gaps ticketed.
                4. A rejection response plan written for the release team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written policy checklist for your app exists, the current build has been checked against it and every gap has a ticket."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the App Store and Google Play guidelines sections that apply to you"
                - "Build a checklist of rules your app touches"
                - "Check the current build against the checklist"
                - "Write a short plan for responding to a rejection"
            - name: Onboarding rebuild toward the activation moment
              description: |-
                ## Purpose
                Once you know the activation moment, most onboarding flows turn out to put sign-up, tours and permission prompts in its way. Rebuilding the first session so new users reach that moment faster, and testing it against the old flow, is often the single biggest retention gain available to a young app.

                ## Milestones
                1. The current first session mapped step by step with drop-off at each.
                2. Every step that does not help reach activation cut, deferred or merged.
                3. The new flow shipped as a test against the old one.
                4. Activation and day 7 retention compared and the winner kept.

                ## Notes
                Defer account creation until the user has something worth saving, where your product allows it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rebuilt onboarding flow has been tested against the old one and the version with higher activation and day 7 retention is live."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map every step of the first session with its drop-off rate"
                - "Mark each step as keep, cut, defer or merge"
                - "Ship the new flow to half of new users"
                - "Compare activation and day 7 retention between the two flows"
            - name: Referral programme design and launch
              description: |-
                ## Purpose
                Referral programmes work when sharing is natural to the product and the reward suits both sides, and fails when it is a banner nobody taps. Designing the moment of the ask, the reward and the fraud checks before building, then launching to a slice of users, gives a fair test of whether referrals can become a real channel.

                ## Milestones
                1. The best moment to ask for a referral chosen from user behaviour data.
                2. A two-sided reward chosen and costed per converted referral.
                3. Deep links, attribution and basic fraud limits built and tested.
                4. The programme launched to a test group with invite rate and conversion measured.

                ## Notes
                Check store rules on incentives before you build. Rewards for installs or reviews are often restricted.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A referral programme is live for a test group and its invite rate and referral conversion are reported after four weeks."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Find the moment when users are happiest with the app"
                - "Cost a two-sided reward per converted referral"
                - "Build referral deep links with a cap per user"
                - "Launch to a test group and report results after four weeks"
            - name: Notification permission prompt timing test
              description: |-
                ## Purpose
                On iOS especially, the system permission prompt can be shown only once, and asking on the first screen means many users say no before they know why notifications would help. Testing a pre-prompt explaining the benefit, shown after a meaningful action, can raise opt-in rates that every later message depends on.

                ## Milestones
                1. Current notification opt-in rate recorded by platform.
                2. A pre-permission screen written that states the specific benefit.
                3. The prompt moved to just after a meaningful action for a test group.
                4. Opt-in and day 30 retention compared between groups.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Opt-in rates for early and delayed permission prompts are compared on a test group and the better timing is shipped to everyone."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record your current notification opt-in rate on each platform"
                - "Write a pre-permission screen naming one clear benefit"
                - "Move the prompt after a meaningful action for a test group"
                - "Ship the timing with the higher opt-in and retention"
            - name: Winning back lapsed users
              description: |-
                ## Purpose
                After a year in the stores, most consumer apps have several times more lapsed users than active ones, and some left for reasons you have since fixed. A resurrection campaign by segment, telling each group what changed, is cheaper than acquiring new users and shows whether the product has really improved.

                ## Milestones
                1. Lapsed users segmented by how long ago they left and how far they got.
                2. A message for each segment naming what has changed since they left.
                3. The campaign sent by email and push to a test group with a holdout.
                4. Reactivation and 30-day retention of returners compared with the holdout.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A segmented win-back campaign runs against a holdout group and the reactivation rate difference is reported."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Segment lapsed users by time since last use and progress reached"
                - "Ask the agent to draft a win-back message for each segment"
                - "Send to a test group and keep a holdout"
                - "Compare reactivation and 30-day retention with the holdout"
            - name: Web-to-app funnel and deep links
              description: |-
                ## Purpose
                Links shared on social media, search results and content all land on the web, and a clumsy hop to the store loses most of those visitors. Building deferred deep links and web landing pages that carry the user straight to the right screen after install makes every shared link and campaign work harder.

                ## Milestones
                1. Every inbound web path to the app listed with its current drop-off.
                2. Deferred deep links working on both platforms, tested on fresh devices.
                3. Landing pages for the top three sources built and linked.
                4. Web to install to activation conversion measured for each source.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Deferred deep links take a new user from three web sources to the right in-app screen, with conversion measured per source."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every web page that sends people to the app"
                - "Test deferred deep links on a fresh device for each platform"
                - "Build landing pages for the top three sources"
                - "Measure web to activation conversion for each source"
            - name: Choosing subscription and paywall tooling
              description: |-
                ## Purpose
                Building in-app purchases, receipt validation, entitlements and paywall tests by hand can take a small team months and break on every store change. Comparing a few subscription management and paywall vendors on cost, features and lock-in lets you decide whether to buy or build with the trade-offs written down.

                ## Milestones
                1. Requirements listed: platforms, web purchases, paywall testing, analytics and integrations.
                2. Three vendors and an in-house option compared on cost at your expected scale.
                3. Data export and switching cost checked for each vendor.
                4. A decision recorded with the reasons and a review date.

                ## Notes
                Start from the **Purchase decision** template. Fees often scale with revenue, so model the cost at two or three times today's size.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three vendors and an in-house option ends in a recorded decision with costs modelled at future scale."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what you need from subscription tooling"
                - "Compare three vendors and building it yourself"
                - "Model each option's cost at three times today's revenue"
                - "Record the decision and set a date to review it"
            - name: Localising for the next two markets
              description: |-
                ## Purpose
                Translated store listings alone can lift installs in markets where your app already gets organic traffic, and full localisation follows if those users stay. Choosing two markets from your own data, then localising listings first and the app second, tests international growth without a big bet.

                ## Milestones
                1. Two markets chosen from organic install, retention and revenue data.
                2. Store listings and screenshots localised by native speakers.
                3. Installs and conversion in those markets compared before and after.
                4. A decision made on full in-app localisation for each market.

                ## Notes
                Check local pricing tiers and payment habits as part of the market choice, but leave price levels to your pricing work.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Localised store listings are live in two markets and a recorded decision on full localisation is made after eight weeks of data."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Rank countries by organic installs and day 30 retention"
                - "Hire native speakers to localise listings for two markets"
                - "Compare installs and conversion before and after localisation"
                - "Decide on full in-app localisation for each market"
            - name: Creator partnership pilot
              description: |-
                ## Purpose
                Short video creators can introduce a consumer app to an audience that trusts them, but results vary wildly and flat fees are easy to waste. A small pilot with five to ten creators, tracked with unique links or codes and judged on activated users, shows whether creators deserve a real budget.

                ## Milestones
                1. Five to ten creators shortlisted whose audience matches your users.
                2. A simple brief and agreement covering disclosure rules and usage rights.
                3. Each creator given a unique link or code.
                4. Cost per activated user compared with paid ads.

                ## Notes
                Advertising disclosure rules apply to paid creator posts in most countries. Put the disclosure requirement in the brief.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least five creator posts are tracked with unique links and their cost per activated user is compared with paid ads in a written note."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Shortlist ten creators whose followers match your users"
                - "Write a one-page brief with disclosure and usage terms"
                - "Give each creator a unique tracked link or code"
                - "Compare cost per activated user with your paid campaigns"
            - name: Pitching for store featuring
              description: |-
                ## Purpose
                Editorial featuring can bring a burst of installs and lasting credibility, and both stores accept submissions from developers. A well-timed pitch around a meaningful update, with polished assets and a clear story, gives the editors something to say yes to.

                ## Milestones
                1. A feature-worthy update or story chosen, with a date six to eight weeks out.
                2. Featuring nominations or submissions filed through each store's developer console.
                3. High-quality artwork, a short pitch and accessibility details prepared.
                4. In-app events or promotional content set up for the launch window.

                ## Notes
                Editors favour apps with strong ratings, good design and care for accessibility and localisation. Fix those first if they are weak.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A featuring nomination is submitted in each store at least six weeks before a dated update, with artwork and pitch attached."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose an update worth featuring and fix its release date"
                - "Write a short pitch on why the update matters to users"
                - "Submit featuring nominations through each developer console"
                - "Set up an in-app event or promotional content for the window"
            - name: Seasonal growth moment plan
              description: |-
                ## Purpose
                Many consumer categories have predictable peaks: New Year for fitness and finance, back to school for study apps, December for gifting and photos. Planning store assets, campaigns and capacity for your one or two biggest moments a quarter ahead means you catch the demand instead of watching competitors take it.

                ## Milestones
                1. Your category's peak weeks identified from last year's data and search trends.
                2. Store assets, in-app events and messaging prepared for the peak.
                3. Paid budget and server capacity planned for the spike.
                4. Results compared with the previous year after the peak.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The year's biggest seasonal moment has prepared assets, budget and capacity ready two weeks before it starts, and a results note after it."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Find your category's peak weeks in last year's installs"
                - "Prepare store assets and an in-app event for the peak"
                - "Agree paid budget and capacity for the spike"
                - "Start planning next year's peak moment @recurring(yearly)"
            - name: Major version relaunch in the stores
              description: |-
                ## Purpose
                Redesigns and major new features are a rare chance to re-engage lapsed users, refresh press interest and reset the store listing. Treating it as a relaunch with a date, assets, messages to existing users and a rollback plan gets far more from it than a quiet update.

                ## Milestones
                1. A relaunch date set with a staged rollout plan and rollback criteria.
                2. New store listing, preview video and screenshots ready.
                3. Messages drafted for active users, lapsed users and press contacts.
                4. Day 1 to day 14 numbers compared with the previous version.

                ## Notes
                Your first public launch belongs to launch day work. This project is for a later, major version of an app already in the stores.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The major version ships on its planned date with refreshed listings and user messaging, and a 14-day comparison with the old version is written."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Set the relaunch date and the rollback criteria"
                - "Prepare the new listing, preview video and screenshots"
                - "Draft messages for active users, lapsed users and press"
                - "Write a 14-day comparison against the previous version"
            - name: Consumer growth data pack for investors
              description: |-
                ## Purpose
                Investors in consumer apps look hard at retention curves, organic share of installs, engagement depth and paid payback, and they distrust vanity download totals. Preparing a clean, consistent growth data pack before a round starts saves weeks of scrambling and answers the questions before they are asked.

                ## Milestones
                1. Cohort retention, engagement ratio and organic versus paid share charted consistently.
                2. Definitions for every metric written on one page.
                3. Paid channel payback presented with its assumptions.
                4. The pack reviewed by an investor-minded advisor before it goes out.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A growth data pack with retention, engagement, channel mix and payback, plus a definitions page, is reviewed by an advisor before the round."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Chart cohort retention and daily to monthly active user ratio"
                - "Write a one-page definitions sheet for every metric"
                - "Show paid payback by channel with the assumptions"
                - "Send the pack to an advisor for a hard review"
            - name: Preparing for a viral spike
              description: |-
                ## Purpose
                One celebrity mention, a trending video or a store feature can bring a week's normal installs in an hour, and apps that crash or run out of capacity lose most of that wave. A short preparedness plan covering servers, costs, support and onboarding means a lucky break turns into retained users.

                ## Milestones
                1. Load tested to a stated multiple of normal peak traffic.
                2. Spending alerts and caps set on infrastructure and third-party services.
                3. A spike runbook naming who does what in the first two hours.
                4. Support replies and an in-app status message drafted in advance.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A spike runbook exists, a load test to a stated multiple of peak has passed and spending alerts are set on every metered service."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the engineering lead to load test at ten times normal peak"
                - "Set spending alerts on hosting and metered services"
                - "Write a two-hour spike runbook with named owners"
                - "Draft support replies and a status message in advance"
            - name: Solo founder growth on four hours a week
              description: |-
                ## Purpose
                A solo founder building and supporting an app alone cannot run a growth team's rhythm, but four protected hours a week, used on the one lever that matters most, still compounds. A pared-back routine with one metric, one experiment at a time and one channel keeps growth moving without stealing all the build time.

                ## Milestones
                1. Four hours a week blocked in the calendar for growth only.
                2. One metric and one experiment chosen for each four-week block.
                3. Reviews, keywords and messaging batched into a single monthly session.
                4. Three four-week blocks completed with a short note on each.

                ## Notes
                Automate review alerts and weekly numbers where you can, so the four hours go on experiments rather than reporting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive four-week blocks are completed, each with one metric, one finished experiment and a written note."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Block four hours a week in your calendar for growth"
                - "Choose one metric and one experiment for the next four weeks"
                - "Protect the Saturday morning growth block @recurring(weekly:sat)"
                - "Write a short note at the end of each four-week block"
            - name: First growth hire for a consumer app
              description: |-
                ## Purpose
                The first growth hire in a consumer app shapes the whole function, and founders often hire a paid media specialist when the gap is retention, or the reverse. Writing down which problem the hire must solve, testing candidates on your real data and planning their first 90 days makes the role succeed.

                ## Milestones
                1. The main growth problem for the next year stated, with the profile that fits it.
                2. A work sample built from your own anonymised data.
                3. Candidates assessed on the work sample and on past results they can explain.
                4. A 90-day plan agreed with the new hire.

                ## Notes
                Start from the **Onboarding 30/60/90** template once the hire is made.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A growth hire is made against a written problem statement and work sample, with an agreed 90-day plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the growth problem the hire must solve in year one"
                - "Build a work sample from anonymised retention and channel data"
                - "Assess candidates on the work sample and their past results"
                - "Agree a 90-day plan with the new hire"
            - name: Age and safety design for teen and family users
              description: |-
                ## Purpose
                Apps used by children and teenagers face stricter rules on data, advertising, messaging and age checks in many countries, and the stores add their own. Founders whose users skew young need age-appropriate design, parental controls and moderation planned in, with legal advice, before growth makes retrofitting expensive.

                ## Milestones
                1. The likely age range of users estimated from data and research.
                2. Applicable children's privacy and online safety rules listed with a lawyer.
                3. Defaults for messaging, discoverability and data use reviewed for younger users.
                4. A moderation and reporting process written and tested.

                ## Notes
                This is planning, not legal advice. Store age ratings and children's categories carry their own requirements, so check those too.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written age and safety review, informed by a lawyer, sets defaults for younger users and a tested moderation process."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Estimate your users' age range from data and surveys"
                - "Book a lawyer to list the children's privacy rules that apply"
                - "Review messaging and discoverability defaults for younger users"
                - "Review age defaults and moderation reports with a lawyer @recurring(yearly)"
            - name: Breaking a subscription app plateau
              description: |-
                ## Purpose
                Subscription apps often reach a point where new subscribers just replace those who cancel, and revenue flattens for months. Separating new trial volume, trial conversion, renewal rates and involuntary churn from failed payments shows which of them is actually holding growth back.

                ## Milestones
                1. Subscriber growth split into new, renewed, cancelled and failed payment churn.
                2. Renewal rates by plan length and cohort charted.
                3. Billing retry and grace period settings checked in both stores.
                4. A cancellation flow with a reason survey and one save offer tested.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Subscriber movements are split into four parts and the largest leak has a test running with a dated result."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Split last quarter's subscriber change into four movements"
                - "Chart renewal rates by plan length and cohort"
                - "Turn on billing grace periods and retries in both stores"
                - "Add a cancellation reason survey with one save offer"
            - name: Seeding the first network for a social app
              description: |-
                ## Purpose
                Social and community apps are empty for the first user and lively only when friends or peers are already there. Founders usually succeed by filling one tight group completely, such as one school, team or city, before widening, and by giving early users something to do alone until the network arrives.

                ## Milestones
                1. One tight starting group chosen, with a target share of its members.
                2. A single-player reason to use the app before friends join.
                3. Contact import and invites tested for clarity and consent.
                4. The starting group's density and weekly activity measured before expanding.

                ## Notes
                For apps matching buyers and sellers, use the marketplace launch area instead; this is for apps where users connect with each other.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One starting group reaches the target share of members using the app weekly before any wider launch, with density measured."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose one tight group to fill first"
                - "Design one reason to open the app before friends arrive"
                - "Test the invite and contact import flow for consent"
                - "Measure the group's weekly activity before expanding"
            - name: Post-seed consumer growth plan
              description: |-
                ## Purpose
                After a seed round, consumer founders feel pressure to buy installs and hire quickly, and many spend the round before retention is ready to hold the users. A written 12-month growth plan that sets retention gates before paid scale, with budget by quarter, keeps the money working.

                ## Milestones
                1. Retention gates written that must be met before each step up in paid spend.
                2. A quarterly budget across product, channels and hires.
                3. Milestones for the next round stated in growth terms.
                4. The plan agreed with co-founders and shared with the board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 12-month growth plan with retention gates, quarterly budgets and next-round milestones is agreed and shared with the board."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the retention gates for each step up in paid spend"
                - "Split the growth budget by quarter and category"
                - "State the next round's milestones in growth numbers"
                - "Present the plan to your board for comment"
            - name: Incrementality testing for paid channels
              description: |-
                ## Purpose
                Attributed installs overstate what paid channels add, because some of those users would have arrived anyway. Running geographic or time-based holdout tests on your biggest channels shows the real incremental lift and often changes where the budget goes.

                ## Milestones
                1. The largest paid channel chosen for a holdout test.
                2. A test design with matched regions or periods and a pre-registered success measure.
                3. The holdout run for long enough to reach the planned sample.
                4. Incremental installs and activated users reported and the budget adjusted.

                ## Notes
                Incrementality tests need volume. Below a few thousand installs a month, a simple on-off test over alternating weeks is more realistic.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One holdout test on the largest paid channel is completed with incremental lift reported and a budget decision recorded."
                cadence: cyclic
              tasks:
                - "Pick the paid channel with the largest spend"
                - "Design matched regions or periods for a holdout"
                - "Write the success measure before the test starts"
                - "Run a holdout test on the largest paid channel @recurring(quarterly)"
            - name: Engagement ladder and power user programme
              description: |-
                ## Purpose
                In most consumer apps a small share of users create most of the activity, content and word of mouth. Defining the steps from casual to power user, and talking to power users every month, tells you what deeper engagement looks like and how to move more people up the ladder.

                ## Milestones
                1. Users grouped into casual, regular and power by weekly activity.
                2. The actions that separate each step identified.
                3. A group of power users invited to early access and monthly calls.
                4. One feature or nudge shipped to move regular users up a step.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An engagement ladder with three levels is defined and a power user group has had monthly calls for three months."
                cadence: rolling
              tasks:
                - "Group last month's users into casual, regular and power"
                - "Find the actions that separate each level"
                - "Invite twenty power users to early access"
                - "Hold the power user call and log what you heard @recurring(monthly:28)"
            - name: Platform dependency and store risk plan
              description: |-
                ## Purpose
                Every consumer app depends on two store owners who set fees, review rules, ranking and payment options, and on one or two ad platforms for paid growth. Mapping those dependencies, watching policy changes and preparing alternatives such as web purchases where allowed, or owned channels like email, limits the damage when a platform changes the rules.

                ## Milestones
                1. Every platform dependency listed with its likely impact and your fallback.
                2. Rules on external payment links and web checkout checked for your markets with advice.
                3. An owned channel, such as an email list, growing alongside the stores.
                4. Policy changes reviewed every quarter and the plan updated.

                ## Notes
                Start from the **Risk register** template. Store payment rules have changed in several regions recently, so confirm what applies with a lawyer before acting.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A platform risk register with impact and fallback for each dependency exists and has been reviewed in two consecutive quarters."
                cadence: rolling
              tasks:
                - "List every store and ad platform dependency with its impact"
                - "Write a fallback for the three biggest risks"
                - "Start collecting email addresses from consenting users"
                - "Review store and ad platform policy changes @recurring(quarterly)"
---

# Consumer App Startup Growth

This area is for founders growing a consumer app after it is live in the stores, when the question shifts from whether anyone wants it to whether people stay, tell friends and arrive at a cost the business can carry. It starts with foundations (a growth audit, an event plan, the activation moment, retention cohorts, store listings, attribution, stability and privacy), then the weekly and monthly machinery of experiments, reviews, lifecycle messaging and spend checks, the skills behind retention, virality and store optimisation, the bigger changes to onboarding, referrals and paywalls, dated moments such as featuring pitches and relaunches, variants for solo, subscription, social, family and post-seed founders, and finally specialist work on incrementality, power users and platform risk.

What repeats is a Monday growth meeting, a weekly metrics log, weekly review replies and feedback triage, a Friday paid spend check, monthly cohort, keyword, crash and messaging reviews, and a quarterly look at store listings, holdout tests and platform policy. The **Meeting notes**, **Metrics log**, **Feedback themes**, **Purchase decision**, **Content pipeline**, **Risk register** and **Onboarding 30/60/90** templates pair with the growth meeting, the weekly numbers, user feedback, tooling choices, lifecycle messages, platform dependency and the first growth hire. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
