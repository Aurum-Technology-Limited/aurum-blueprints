---
id: product-management.mobile-app-product-management
name: Mobile App Product Management
description: "A clear view of your app's health, release trains through both stores, OS support decisions, push permission, ratings and offline behaviour, and the routines that keep a mobile product shipping safely."
category: business
version: 1.0.0
tags: [product-management, mobile-app-product-management, team, engineer, app-store, ios, android, mobile-releases]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - feedback-themes
    - product-spec
    - onboarding-30-60-90
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mobile App Product Management
          description: "Managing a mobile app product, including app store releases, platform differences, push notifications, ratings and offline behaviour."
          projects:
            - name: Mobile app health baseline on one page
              description: |-
                ## Purpose
                Before changing anything, a mobile product manager needs the handful of numbers that describe the app today: active users by platform, crash-free users, store rating per platform, share of users on the latest version and cold start time. Pulling them onto one page from the store consoles, the crash tool and analytics gives every later decision a starting point and exposes any number nobody can currently find.

                ## Milestones
                1. Monthly active users split by iOS and Android, with the source of each figure noted.
                2. Crash-free users and sessions for the last 30 days recorded per platform.
                3. Current star rating and rating count captured from each store console.
                4. Share of active users on the latest two app versions written down.
                5. Median cold start time per platform taken from the performance dashboard.
                6. Every metric that could not be found listed with an owner to fix it.

                ## Notes
                Start from the **Metrics log** template. Store consoles and your own analytics will disagree on user counts; note which one you treat as the reference and stick to it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page baseline with users, crash-free rate, ratings, version share and start-up time per platform, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Open both store consoles and note this month's active devices per platform"
                - "Copy the 30-day crash-free users figure from the crash reporting tool"
                - "Record each store's current rating and the number of ratings"
                - "Ask the agent to draft the one-page baseline from the collected figures"
                - "List the missing metrics and name an owner for each"
            - name: Developer accounts, signing keys and access audit
              description: |-
                ## Purpose
                Apps are often published from a developer account opened years ago by someone who has since left, and losing control of an Android signing key or an Apple account can stop updates entirely. An audit of who owns each store account, where signing keys and certificates live and who can submit builds turns a single point of failure into a documented, shared arrangement.

                ## Milestones
                1. Each store developer account listed with its legal owner, account holder and renewal date.
                2. Signing keys, upload keys and push certificates located, with storage and expiry recorded.
                3. Access in both consoles reduced to named people with the least role they need.
                4. At least two people able to submit a release on each platform.

                ## Notes
                Keep keys in a company secrets manager, never on a personal laptop or in a chat thread. If Play App Signing is not enabled, find out why before anything else.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written register of store accounts, keys and certificates with owners and expiry dates, and two named people able to release on each platform."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down who holds the account owner role in each store console"
                - "Find where the Android upload key and the iOS distribution certificate are stored"
                - "Remove console access for anyone who has left or no longer needs it"
                - "Record the expiry date of every certificate and the push key"
                - "Review console access and certificate expiry dates @recurring(yearly)"
            - name: Supported devices and OS versions matrix
              description: |-
                ## Purpose
                Bugs on mobile cluster on particular devices and OS versions, and testing everything is impossible. A matrix of the devices and OS versions your users actually run, weighted by share, tells QA what to test on, tells engineering which old versions cost the most and tells support what is officially supported.

                ## Milestones
                1. OS version share for the last 90 days pulled for both platforms.
                2. Top 15 Android device models by active users listed, with screen size and memory class.
                3. A tiered matrix agreed: fully tested, smoke tested and best effort.
                4. The matrix published where QA, support and engineering can find it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A published device and OS matrix with three test tiers, built from 90 days of real usage data and refreshed each quarter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export OS version share for the last 90 days from analytics"
                - "List the top 15 Android device models by active users"
                - "Agree three test tiers with QA and engineering"
                - "Refresh the matrix with the latest OS and device share @recurring(quarterly)"
            - name: Minimum OS version support policy
              description: |-
                ## Purpose
                Every old OS version you support slows engineering, blocks newer platform features and widens the test matrix, yet dropping one strands real users. A written policy, for example supporting the versions that together cover an agreed share of active users, with a notice period, turns a yearly argument into a rule the team simply applies.

                ## Milestones
                1. Current minimum versions on both platforms recorded with their user share.
                2. The cost of keeping each old version estimated by engineering in plain terms.
                3. A rule agreed for when a version is dropped, with a user share threshold and notice period.
                4. The policy signed off by product and engineering leads and shared with support.

                ## Notes
                Check the stores' own rules too. Google Play sets a yearly target API level for updates, which is separate from the minimum version you choose to support.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed-off policy stating the share threshold and notice period for dropping OS versions on each platform."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the current minimum supported OS version on each platform"
                - "Ask engineering what the oldest supported version costs each release"
                - "Draft a drop rule with a share threshold and a notice period"
                - "Apply the policy to the coming year's OS versions @recurring(yearly)"
            - name: Release pipeline map from branch cut to store
              description: |-
                ## Purpose
                Most mobile teams cannot say how long a change takes to reach users, because the time hides in code freeze, QA, store review and phased rollout. Mapping every step from branch cut to full rollout, with who does it and how long it takes, shows where days are lost and what a realistic release date looks like.

                ## Milestones
                1. Every step from branch cut to 100 percent rollout drawn in order, for both platforms.
                2. Owner and typical duration noted for each step, using the last three releases.
                3. Manual steps that depend on one person flagged.
                4. Lead time from merge to full rollout stated as a single figure per platform.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A release map for each platform with owners, durations from three releases and a lead time figure, reviewed with engineering."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the steps of the last release from branch cut to full rollout"
                - "Pull dates from the last three releases to time each step"
                - "Mark the steps that are manual and depend on one person"
                - "Share the map with engineering and agree the first step to speed up"
            - name: Crash-free rate target and alerting
              description: |-
                ## Purpose
                A crash on a phone is often silent: the user simply leaves, and some never return. Agreeing a crash-free users target per platform, with alerts when a new release falls below it, means a bad build is caught in the first hours of a phased rollout instead of in the reviews a week later.

                ## Milestones
                1. Crash reporting running on both platforms, with symbol files uploaded for every build.
                2. A crash-free users target agreed per platform and written down.
                3. Alerts set for a release dropping below target or a new crash spiking.
                4. The alert route tested, reaching the release owner within an hour.

                ## Notes
                Without symbol or mapping files, crash reports are unreadable. Make their upload part of the build, not a manual step someone remembers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A crash-free target per platform is written down and an alert for a release below target has been tested end to end."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check that symbol files upload automatically for every build"
                - "Agree a crash-free users target per platform with engineering"
                - "Set an alert for any release falling below the target"
                - "Trigger a test crash on a staging build and confirm the alert arrives"
            - name: Store privacy labels and data safety form audit
              description: |-
                ## Purpose
                Both stores require you to declare what data the app collects and why, and those declarations must match what the app and its SDKs actually do. An audit comparing the published labels with the real data flows avoids a rejection or removal, and gives users an honest answer on the store page.

                ## Milestones
                1. Current App Store privacy labels and Google Play data safety answers exported.
                2. Data collected by the app and each SDK listed by type and purpose.
                3. Differences between declared and actual collection corrected in the consoles.
                4. An owner named to update the declarations whenever an SDK or data type changes.

                ## Notes
                This is a product records task, not legal advice. Have your privacy or legal lead review the final answers before they are published.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Both store privacy declarations match a written list of data collected by the app and its SDKs, reviewed by the privacy lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the current privacy declarations from both store consoles"
                - "List every SDK in the app and the data each one collects"
                - "Mark each mismatch between declaration and actual collection"
                - "Ask the privacy lead to review the corrected declarations"
                - "Re-check both declarations against the SDK list @recurring(yearly)"
            - name: Platform parity register across iOS, Android and web
              description: |-
                ## Purpose
                Features quietly drift apart between platforms: a filter exists on iOS but not Android, a setting only lives on the web. A register of which capabilities exist where, and whether each gap is deliberate, stops support giving wrong answers and lets the roadmap close gaps on purpose rather than by complaint.

                ## Milestones
                1. The 30 most used capabilities listed with their status on iOS, Android and web.
                2. Each gap marked as deliberate, planned or unknown.
                3. Unknown gaps resolved with a decision and a one-line reason.
                4. The register shared with support and sales.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A parity register covering at least 30 capabilities, with every gap marked deliberate or planned, shared with support."
                cadence: rolling
              tasks:
                - "List the 30 most used capabilities of the product"
                - "Check each capability on iOS, Android and web and mark its status"
                - "Decide whether each gap is deliberate or should be closed"
                - "Update the register with the last quarter's releases @recurring(quarterly)"
            - name: App version adoption dashboard
              description: |-
                ## Purpose
                Unlike the web, a mobile release only reaches users who update, and many run versions that are months old. A dashboard of active users by app version, and how fast each release climbs, shows how long old bugs stay in the wild and when an old API can safely be switched off.

                ## Milestones
                1. Active users by app version charted per platform for the last 90 days.
                2. Days for a release to reach half of active users measured for the last five releases.
                3. Versions still above an agreed share flagged for backend teams.
                4. The dashboard linked from the release channel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dashboard showing active users by version per platform, with time to half adoption measured for the last five releases."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm that every analytics event carries the app version and platform"
                - "Build a chart of active users by app version per platform"
                - "Measure how many days the last five releases took to reach half of users"
                - "Post the dashboard link in the release channel"
            - name: Weekly mobile release train
              description: |-
                ## Purpose
                Releasing whenever a feature is ready means unpredictable store reviews, rushed QA and features waiting on each other. A fixed train, with a weekly or fortnightly branch cut that leaves on time whether or not a feature makes it, gives engineers a rhythm, gives marketing dates and keeps each release small enough to debug.

                ## Milestones
                1. Train length, cut day and cut-off rules agreed and written down.
                2. Work not ready at the cut moved to the next train behind a flag rather than delaying it.
                3. Eight consecutive trains leaving on their planned day.
                4. Release size and lead time tracked per train.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive release trains have left on their planned day, with planned and actual dates recorded."
                cadence: rolling
              tasks:
                - "Agree the train length and branch cut day with engineering"
                - "Write the rule for what happens to work that misses the cut"
                - "Confirm the scope of this week's train before the branch cut @recurring(weekly:tue)"
                - "Record each train's planned and actual leave dates"
            - name: Pre-submission release checklist
              description: |-
                ## Purpose
                Store submissions fail for avoidable reasons: a missing screenshot size, an expired reviewer demo account, release notes in the wrong language, a debug flag left on. One checklist run before every submission by whoever is release captain takes ten minutes and saves days of rejection and resubmission.

                ## Milestones
                1. A checklist covering build, metadata, reviewer access, release notes and flags.
                2. The reviewer demo account tested before each submission.
                3. The checklist used for five consecutive releases.
                4. Items that caught a problem kept, items that never did trimmed.

                ## Notes
                Start from the **Operational checklist** template. Keep it to one screen; long checklists get skipped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The checklist has been completed and attached to five consecutive store submissions."
                cadence: rolling
              tasks:
                - "Create the checklist from the operational checklist template"
                - "Add a check that the store reviewer demo account still signs in"
                - "Add the What's New text and required screenshot sizes to the list"
                - "Trim the checklist after five releases based on what it caught"
            - name: Phased rollout watch for every store release
              description: |-
                ## Purpose
                Both stores let you release gradually: the App Store over a seven-day phased release and Google Play by a percentage you choose. Watching crash rate, key funnels and new reviews at each step, with a clear pause rule, means a bad release reaches a small slice of users instead of everyone.

                ## Milestones
                1. Phased release turned on by default for both platforms.
                2. A pause rule written: the metrics, thresholds and who may press pause.
                3. A watch routine run at each rollout step for five releases.
                4. Every paused release written up with cause and fix.

                ## Notes
                Pausing a rollout stops new users getting the update, but those who already have it keep it. Fixing it for them needs a new build or a server-side switch.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five releases rolled out in phases with the pause rule checked at every step and any pause written up."
                cadence: rolling
              tasks:
                - "Turn on phased release by default in both store consoles"
                - "Write the pause rule with thresholds and the person allowed to pause"
                - "Check crashes, funnels and reviews at each step of the current rollout"
                - "Write a short note on every paused rollout and its cause"
            - name: Weekly crash and ANR triage
              description: |-
                ## Purpose
                Crash reports pile up into thousands of groups, and without triage the team fixes whichever one someone happened to see. A short Monday session that ranks the top crashes and Android app-not-responding errors by users affected, assigns owners and checks last week's fixes keeps stability improving release by release.

                ## Milestones
                1. A 30-minute weekly slot held by the product manager and a mobile engineer.
                2. Top ten crash and ANR groups ranked by users affected each week.
                3. Each top group assigned, scheduled or deliberately ignored with a reason.
                4. Crash-free users at or above target for eight consecutive weeks.

                ## Notes
                Google Play's vitals flag apps above its bad behaviour thresholds, which can reduce store visibility, so watch those figures as well as your own target.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly triage sessions held, with each top-ten crash group assigned or dismissed and crash-free users at target."
                cadence: rolling
              tasks:
                - "Book a recurring 30-minute triage slot with a mobile engineer"
                - "Rank the top ten crash and ANR groups by users affected @recurring(weekly:mon)"
                - "Assign an owner or a reason to ignore for each top group"
                - "Check whether last week's fixes cut the affected user count"
            - name: Store review reading and reply routine
              description: |-
                ## Purpose
                Store reviews are the most public feedback a mobile product gets, and an unanswered one-star review sits under the install button for months. Reading new reviews weekly, replying to those with a fixable problem and routing bugs to the backlog shows users someone is listening, and some update their rating after a helpful reply.

                ## Milestones
                1. New review alerts set up in both consoles or a review tool.
                2. Reply guidelines and five reusable openings written with support.
                3. Every one and two star review with a specific problem answered within a week.
                4. Bugs found in reviews logged with a link to the review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For eight weeks, every one and two star review describing a specific problem has a reply within seven days."
                cadence: rolling
              tasks:
                - "Turn on new review notifications in both store consoles"
                - "Write reply guidelines and five openings with the support lead"
                - "Reply to new low-rated reviews that describe a fixable problem @recurring(weekly:thu)"
                - "Log every bug reported in a review in the backlog"
            - name: Monthly ratings and review themes report
              description: |-
                ## Purpose
                Individual reviews are noisy, but a month of them tagged by theme shows whether the latest release made login worse or battery complaints are growing. A one-page monthly report of rating trend per platform and top themes gives the roadmap mobile evidence that would otherwise stay buried in the console.

                ## Milestones
                1. A fixed set of eight to twelve review themes agreed.
                2. Each month's reviews tagged by theme and platform.
                3. Rating trend and top three themes reported on one page every month.
                4. At least one roadmap item each quarter traced to a review theme.

                ## Notes
                Start from the **Feedback themes** template. Watch the rating of the current version, not only the lifetime average, which moves very slowly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Three consecutive monthly reports with rating trend and top themes per platform, and one roadmap item linked to a theme."
                cadence: rolling
              tasks:
                - "Agree eight to twelve review themes with support and design"
                - "Ask the agent to tag the month's store reviews by theme"
                - "Publish the rating trend and top three themes @recurring(monthly:12)"
                - "Bring the top theme to the next roadmap discussion"
            - name: Monthly version adoption and upgrade review
              description: |-
                ## Purpose
                Old app versions keep calling old APIs, carry known bugs and cannot receive new features. A monthly look at how many users sit on each version, together with backend teams, decides when to show a soft update prompt, when a hard upgrade is justified and when an old endpoint can finally be retired.

                ## Milestones
                1. A monthly review slot held with backend and mobile leads.
                2. Versions below an agreed share marked for prompts or retirement.
                3. Soft and hard upgrade decisions recorded with dates.
                4. Share of users on the latest two versions improving over three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Three monthly reviews held with version decisions recorded, and the share on the latest two versions higher than at the start."
                cadence: rolling
              tasks:
                - "Invite backend and mobile leads to a monthly version review"
                - "Review active users by version and mark versions for prompts @recurring(monthly:19)"
                - "Record each upgrade prompt decision with its date and reason"
                - "Tell backend teams which old endpoints can be retired"
            - name: Annual OS release readiness cycle
              description: |-
                ## Purpose
                Apple and Google each announce a major OS version in the first half of the year and ship it in the second, often changing permissions, notifications, privacy and background limits. Treating this as a yearly cycle, testing betas early and choosing which new features to adopt, avoids broken behaviour on launch day.

                ## Milestones
                1. Developer betas installed on test devices within a month of announcement.
                2. Breaking changes and new requirements listed with owners.
                3. Regression testing on the betas finished before public release.
                4. A decision recorded on which new platform features to adopt this year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Core flows tested on the new OS betas before public release, with breaking changes owned and a feature adoption decision recorded."
                cadence: cyclic
              tasks:
                - "Install the new OS developer betas on two test devices @recurring(yearly)"
                - "List breaking changes from the platform release notes with owners"
                - "Run the core flow regression suite on the beta builds"
                - "Choose which new platform features, if any, go on the roadmap"
            - name: Quarterly store policy and guideline watch
              description: |-
                ## Purpose
                Store rules change several times a year, on payments, account deletion, target API levels, tracking and content, often with deadlines that block updates if missed. A quarterly read of both stores' policy updates, with a short list of what affects your app, turns surprises into scheduled work.

                ## Milestones
                1. Policy update sources for both stores subscribed to.
                2. Each quarter's changes summarised with their impact on your app.
                3. Required changes on the roadmap ahead of their deadlines.
                4. No update blocked by a missed policy deadline in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly policy summaries written, with every required change scheduled before its store deadline."
                cadence: rolling
              tasks:
                - "Subscribe to both stores' developer policy update announcements"
                - "Summarise the quarter's policy changes and their impact @recurring(quarterly)"
                - "Add each required change to the roadmap with its deadline"
                - "Share the summary with engineering and legal"
            - name: Third-party SDK inventory and review
              description: |-
                ## Purpose
                Analytics, ads, crash, chat and payment SDKs add size, start-up time, privacy obligations and security risk, and many stay in the app long after anyone uses them. A quarterly inventory with owner, purpose, data collected and version keeps the app lighter and the privacy declarations honest.

                ## Milestones
                1. Every SDK listed with owner, purpose, version and data collected.
                2. Unused or duplicate SDKs removed.
                3. SDKs more than a year out of date scheduled for update.
                4. A rule agreed that no new SDK ships without a product and privacy check.

                ## Notes
                Apple expects privacy manifests for many commonly used SDKs, so this list also feeds the privacy label audit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A current SDK inventory with owners and data collected, at least one unused SDK removed and a new-SDK check rule agreed."
                cadence: rolling
              tasks:
                - "Export the list of SDKs from each platform's dependency files"
                - "Name an owner and purpose for every SDK"
                - "Remove the SDKs nobody can name a current use for"
                - "Review SDK versions, owners and data collected @recurring(quarterly)"
            - name: Push token and delivery health check
              description: |-
                ## Purpose
                Push campaigns can look fine in the sending tool while a large share of messages never arrive: stale device tokens, an expired key, users who turned notifications off in settings, or aggressive Android battery savers. A monthly health check of opt-in, token validity and delivery per platform finds silent failures before a critical alert goes missing.

                ## Milestones
                1. Opt-in rate per platform measured from device settings, not only the in-app prompt.
                2. Invalid and expired tokens removed from the sending system automatically.
                3. Delivery and open rates per platform compared each month.
                4. A test message sent to staff devices after every release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly checks recorded with opt-in, delivery and open rates per platform, and invalid tokens removed automatically."
                cadence: rolling
              tasks:
                - "Measure the share of users with notifications enabled on each platform"
                - "Confirm invalid tokens are removed after a failed send"
                - "Compare push delivery and open rates by platform @recurring(monthly:24)"
                - "Send a test push to staff devices after each release"
            - name: App store review guidelines working knowledge
              description: |-
                ## Purpose
                Most rejections come from a few guideline areas: incomplete apps, misleading metadata, payments, login options, user-generated content and privacy. A product manager who has read both stores' rules with the current roadmap in hand can spot a rejection risk at the spec stage, when it costs a conversation rather than a week.

                ## Milestones
                1. Both stores' current review guidelines read in full once.
                2. The ten sections most relevant to your app summarised in plain words.
                3. Past rejections, if any, mapped to the guideline they cited.
                4. Upcoming roadmap items checked against the summary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the most relevant store rules, used to check the next quarter's roadmap for rejection risk."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the App Store Review Guidelines from start to finish"
                - "Read the Google Play policy sections that apply to your app type"
                - "Write a one-page summary of the ten most relevant rules"
                - "Check the next quarter's roadmap items against the summary"
            - name: Why mobile releases differ from web releases
              description: |-
                ## Purpose
                Product managers coming from the web expect to deploy, watch and roll back in minutes. On mobile a shipped binary cannot be recalled, review adds a delay, users update on their own schedule and several versions live side by side. Understanding these constraints changes how you scope, flag and sequence work, and avoids promises the platform cannot keep.

                ## Milestones
                1. The life of a build from merge to a user's device explained in your own words.
                2. Five recent features classified as binary changes or server-side changes.
                3. The team's options for fixing a live bug listed in order of speed.
                4. A short explainer shared with stakeholders who expect web speed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page explainer of mobile release constraints, checked by a mobile engineer and shared with stakeholders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shadow a mobile engineer through one release from merge to store"
                - "Classify five recent features as binary or server-side changes"
                - "List every way to fix a live bug, fastest first"
                - "Write a half-page explainer for stakeholders used to web releases"
            - name: Mobile performance metrics a product manager should read
              description: |-
                ## Purpose
                Slow starts, janky scrolling, heavy battery use and frozen screens drive uninstalls and low ratings, yet they rarely appear on product dashboards. Learning what cold start, slow frames, ANR rate, memory and battery figures mean, and where to read them in each platform's tools, lets you treat performance as a product requirement instead of an engineering complaint.

                ## Milestones
                1. Cold start, warm start, slow frames, ANR rate and battery drain defined in plain words.
                2. Where each metric appears in the Play Console, Xcode Organizer or your monitoring tool known.
                3. Current values for your app recorded beside each definition.
                4. Two performance targets proposed for the next quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of five performance metrics with your app's current values and two proposed targets."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a mobile engineer to walk you through the performance dashboards"
                - "Write a plain definition of each of the five core performance metrics"
                - "Record your app's current value for each metric per platform"
                - "Propose two performance targets for next quarter's plan"
            - name: Human Interface Guidelines and Material Design conventions
              description: |-
                ## Purpose
                iOS and Android users expect different navigation, back behaviour, sharing, dialogs and typography, and an app that ignores this feels foreign on at least one platform. Learning where Apple's Human Interface Guidelines and Google's Material Design genuinely differ helps you decide, with design, where to follow the platform and where one shared design is fine.

                ## Milestones
                1. Navigation, back, modal, sharing and settings patterns compared across both guidelines.
                2. Five places in your app where one platform feels non-native identified.
                3. A short rule agreed with design on when to follow platform convention.
                4. The most jarring non-native pattern fixed or scheduled.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written convention rule agreed with design and five non-native moments listed, with at least one scheduled."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the navigation sections of both platform design guidelines"
                - "Use the app on both platforms and note five non-native moments"
                - "Agree a convention rule with the design lead"
                - "Add the most jarring non-native pattern to the backlog"
            - name: Runtime permissions on iOS and Android
              description: |-
                ## Purpose
                Camera, location, contacts, photos, notifications and tracking all need the user's permission, and each platform asks differently, limits how often you may ask and offers partial grants such as approximate location or selected photos. Knowing the rules for every permission your app uses prevents features that silently break when access is limited or refused.

                ## Milestones
                1. Every permission the app requests listed per platform with the feature that needs it.
                2. Partial and one-time grant options noted for each permission.
                3. The behaviour of each feature when permission is refused checked on a device.
                4. Permissions no feature uses removed from the app's declarations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A permission table for both platforms with refused-permission behaviour tested for each, and unused permissions removed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every permission the app declares on each platform"
                - "Note which permissions allow partial or one-time grants"
                - "Deny each permission on a test device and record what the feature does"
                - "Remove any declared permission no feature still uses"
            - name: Offline-first and sync basics for product decisions
              description: |-
                ## Purpose
                Phones lose signal in lifts, trains and basements, and every app has offline behaviour whether or not anyone designed it. Understanding caching, queued writes, conflict resolution and what last-write-wins really means lets a product manager ask the right questions and make deliberate trade-offs when users edit the same thing on two devices.

                ## Milestones
                1. Caching, optimistic updates, queued writes and conflict resolution explained in your own words.
                2. The app's current sync approach described by an engineer and written down.
                3. Three real conflict scenarios from your product walked through.
                4. Open questions for an offline behaviour spec listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written description of the app's sync approach and three conflict scenarios, checked by an engineer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask an engineer to explain how the app stores and syncs data today"
                - "Write down what happens when one item is edited on two devices"
                - "Put a test phone in flight mode and use the core flows"
                - "List the questions an offline behaviour spec must answer"
            - name: Tracking consent and mobile privacy frameworks
              description: |-
                ## Purpose
                Apple's App Tracking Transparency prompt, limits on device identifiers and Android's privacy changes affect attribution, analytics and any feature that relies on cross-app data. Understanding what each framework allows lets you plan measurement and features that still work when most users decline tracking.

                ## Milestones
                1. The tracking consent rules on both platforms summarised on one page.
                2. Features and reports that depend on device identifiers listed.
                3. Current tracking consent rate recorded, if the app asks for it.
                4. A measurement plan agreed that does not depend on consent.

                ## Notes
                This is about understanding product constraints. Agree any consent wording and data use with your privacy lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of tracking rules per platform and a list of identifier-dependent features, with a consent-free measurement plan agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read both platforms' developer guidance on tracking and identifiers"
                - "List the reports and features that depend on an advertising identifier"
                - "Record the current share of users who allow tracking"
                - "Agree with analytics how measurement works without consent"
            - name: Native or cross-platform framework decision
              description: |-
                ## Purpose
                Choosing between fully native apps and a shared framework such as React Native, Flutter or Kotlin Multiplatform shapes hiring, speed, performance and access to new platform features for years. A structured comparison against your app's real needs, with a prototype of the hardest screen, replaces strongly held opinions with evidence before anyone commits to a rewrite.

                ## Milestones
                1. Decision criteria agreed and weighted: performance, platform feature access, team skills, speed and cost.
                2. Two or three options scored against the criteria.
                3. The most demanding screen or flow prototyped in the leading option.
                4. A written decision with its reasons and the cost of migrating.

                ## Notes
                Rewrites usually take longer than planned. If you already have working native apps, compare against adopting a framework screen by screen, not only a full switch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written framework decision with weighted scores, a prototype result and migration cost, signed off by engineering and product leads."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the five criteria that matter most for this app and weight them"
                - "Ask engineering to score each framework option against the criteria"
                - "Prototype the most demanding screen in the leading option"
                - "Write the decision record with reasons and migration cost"
            - name: Push permission request timing and pre-prompt
              description: |-
                ## Purpose
                iOS gives you one chance at the system notification prompt, and Android 13 and later ask too, so requesting it on first launch before a user has seen any value wastes it. Moving the request to a moment where notifications clearly help, with a short explanation screen first, usually lifts opt-in and keeps the channel for messages people want.

                ## Milestones
                1. Current opt-in rate per platform and the moment of asking recorded.
                2. Two or three value moments identified where notifications make obvious sense.
                3. A pre-prompt screen designed that explains what users will receive.
                4. The new timing shipped and opt-in compared after four weeks.

                ## Notes
                On iOS, provisional authorisation delivers quietly to the notification centre without a prompt. Consider it for low-urgency messages.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The permission request moved to a value moment with a pre-prompt, and opt-in rates compared four weeks before and after."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Record where in the app the notification permission is asked today"
                - "Pick the moment where a notification most clearly helps the user"
                - "Design a short pre-prompt screen with the design lead"
                - "Compare opt-in rates four weeks after the change ships"
            - name: Offline behaviour spec for the core flows
              description: |-
                ## Purpose
                Users judge an app harshly when it spins forever in a tunnel or loses a form they spent five minutes filling in. Writing down, for the three flows that matter most, what works offline, what is queued, what is blocked and what the user sees, gives engineering a clear target and gives QA something concrete to test.

                ## Milestones
                1. The three core flows chosen using usage evidence.
                2. Each flow's behaviour offline, on a slow network and on reconnect specified.
                3. Conflict rules and user messages written for each flow.
                4. Flight mode and slow network cases added to the release checklist.

                ## Notes
                Start from the **Product spec** template. Test on a throttled connection, not only with no signal; slow networks cause more failures than none.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An offline spec for three core flows, approved by engineering, with matching test cases in the release checklist."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose the three flows that matter most from usage data"
                - "Write what each flow does offline, on slow networks and on reconnect"
                - "Agree conflict rules and user messages with design and engineering"
                - "Add flight mode and slow network cases to the release checklist"
            - name: App download size reduction
              description: |-
                ## Purpose
                Large apps lose installs, especially on mobile data and storage-starved phones, and size creeps up with every SDK, font and image. Measuring what makes up the download and setting a size budget per release keeps the app quick to install and cuts the number of users who delete it to free space.

                ## Milestones
                1. Download and install size recorded per platform.
                2. Size broken down by code, assets, SDKs and other resources.
                3. The three biggest reductions delivered or scheduled.
                4. A size budget agreed and checked at each release.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Download size reduced by an agreed amount on both platforms, with a size budget checked at each release."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Record the current download size from both store consoles"
                - "Ask engineering for a size breakdown by component"
                - "Pick the three largest items that can be removed or slimmed"
                - "Add a size check against the budget to the release checklist"
            - name: Cold start time reduction
              description: |-
                ## Purpose
                The seconds between tapping the icon and seeing something useful shape a user's opinion of the app every single day, and cold start often grows as features add work at launch. Setting a target, finding what runs at start-up and deferring what can wait is one of the most noticed performance improvements a mobile team can ship.

                ## Milestones
                1. Median and slowest-decile cold start times recorded per platform.
                2. Work done at launch listed and sorted into needed now or can wait.
                3. Deferred work shipped in at least one release.
                4. Start time checked every month against the target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Cold start time below the agreed target on both platforms for two consecutive months."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Record median and slowest-decile cold start times per platform"
                - "List everything the app does before the first screen appears"
                - "Agree with engineering which start-up work can be deferred"
                - "Check cold start times against the target @recurring(monthly:8)"
            - name: Forced upgrade and minimum version mechanism
              description: |-
                ## Purpose
                Sooner or later a security issue, a broken payment flow or a retired API means users on an old version must update. Building a server-controlled minimum version with a soft prompt and a hard block before you need it makes that day a configuration change instead of an emergency release that old versions will never receive.

                ## Milestones
                1. A server-side setting for minimum and recommended version per platform.
                2. Soft update prompt and hard block screens designed and approved.
                3. The mechanism tested on an old build in staging.
                4. A written rule for when a hard block may be used, and who decides.

                ## Notes
                Use the hard block sparingly. Users who cannot update, for example because their OS is too old, need a clear message rather than a dead end.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A server-controlled soft prompt and hard block tested on an old build, with a written rule for using the hard block."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Check whether the app can already read a minimum version from the server"
                - "Design the soft prompt and hard block screens with design"
                - "Test both screens against an old build in staging"
                - "Write the rule for when a hard block is allowed and who approves it"
            - name: Deep links and universal links coverage
              description: |-
                ## Purpose
                Links from email, the web, social posts and other apps should open the right screen in the app, yet many land on the home screen, a store page or a broken web view. An inventory of link entry points, checked on both platforms with and without the app installed, fixes a quiet leak in every campaign and support message.

                ## Milestones
                1. Every link entry point listed: email, web, notifications, QR codes and partner apps.
                2. Each link tested on both platforms with the app installed and not installed.
                3. Broken or wrong-destination links fixed or scheduled.
                4. Three key link tests added to the release checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All listed link entry points tested on both platforms, with every wrong destination fixed or scheduled."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every place that sends users a link into the app"
                - "Test each link on both platforms with and without the app installed"
                - "Log each link that lands on the wrong screen"
                - "Add three key link tests to the release checklist"
            - name: In-app rating prompt placement
              description: |-
                ## Purpose
                Ratings come mostly from unhappy users unless happy ones are asked at the right time. The native review prompts on both platforms limit how often they appear, so placing the request after a success moment, never after an error or on first launch, lifts the rating fairly and within store rules.

                ## Milestones
                1. Store rules on rating prompts read for both platforms.
                2. Two or three success moments chosen as triggers.
                3. Prompt shown only to users past a minimum level of use.
                4. Rating of new versions compared before and after over six weeks.

                ## Notes
                Do not ask users whether they like the app and then send only the happy ones to the store; both stores discourage gating ratings this way.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The native review prompt fires only after chosen success moments, and the six-week rating of new versions is compared with the previous period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read both stores' rules on asking users for ratings"
                - "Choose success moments that follow a completed task"
                - "Set a minimum usage level before the prompt can appear"
                - "Compare the current version rating six weeks after shipping"
            - name: Mobile accessibility audit with screen readers and large text
              description: |-
                ## Purpose
                Screen readers, larger text sizes, reduced motion and high contrast are used by far more people than most teams assume, and inaccessible apps draw one-star reviews and formal complaints. Auditing the core flows with VoiceOver, TalkBack and the largest text setting finds the blockers that a visual design review misses.

                ## Milestones
                1. Core flows completed with VoiceOver and with TalkBack.
                2. Every core screen checked at the largest system text size.
                3. Blocking issues listed with severity and owners.
                4. Accessibility checks added to the definition of done for new screens.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Core flows audited on both platforms with screen readers and large text, with every blocking issue owned."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Turn on VoiceOver and complete the sign-up flow on an iPhone"
                - "Repeat the core flows with TalkBack on an Android device"
                - "Check every core screen at the largest system text size"
                - "Log each blocking issue with a severity and an owner"
            - name: In-app account deletion flow
              description: |-
                ## Purpose
                Both stores require apps that let users create an account to let them delete it from within the app, and Google Play also expects a web route. A clear deletion flow, stating what is deleted, what is kept for legal reasons and how long it takes, avoids rejection and treats people leaving with the same care as people joining.

                ## Milestones
                1. The current deletion route on each platform checked against both stores' requirements.
                2. Data deleted, data retained and the timeline agreed with legal and engineering.
                3. Deletion flow shipped in the app and a web route published.
                4. Store console declarations updated with the deletion route.

                ## Notes
                Your legal or privacy lead decides what must be retained and for how long. The product job is to make the flow honest and easy to find.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Users can delete their account in the app and on the web, and both store consoles show the deletion route."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Check how a user deletes their account in the app today"
                - "Agree with legal which data is deleted and which is kept"
                - "Ship the in-app flow and publish the web deletion page"
                - "Add the deletion route to the store console declarations"
            - name: First submission of a new app to both stores
              description: |-
                ## Purpose
                A first submission needs more than a finished build: store listings, screenshots for each device size, age ratings, privacy declarations, a reviewer account, test tracks and often a rejection or two. Planning it as an event with a date and a checklist means launch day is not decided by how long the first review happens to take.

                ## Milestones
                1. Store listings, screenshots and age rating questionnaires complete for both stores.
                2. Beta builds distributed through TestFlight and a Play testing track.
                3. First submission made at least two weeks before the public launch date.
                4. Approval received and the release timed manually for launch day.

                ## Notes
                New Google Play developer accounts may need a closed test with real testers for a set period before production access. Check the current requirement for your account type early.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both apps approved at least a week before launch and released manually on the planned day."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Set the public launch date and count back two weeks for submission"
                - "Prepare listings, screenshots and age ratings for both stores"
                - "Distribute a beta through TestFlight and a Play testing track"
                - "Submit both builds with manual release so launch day is your choice"
            - name: App store rejection response plan
              description: |-
                ## Purpose
                Getting rejected the day before a launch triggers panic, angry replies and rushed changes that cause a second rejection. A prepared plan covering who reads the notice, how to reply to the reviewer, when to appeal and how to ship a fix quickly turns a rejection into a routine piece of work.

                ## Milestones
                1. An owner for store communication named, with a backup.
                2. Steps written for reading, replying, fixing and appealing.
                3. Past rejections recorded with cause and how they were resolved.
                4. The plan rehearsed once using a past rejection.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page rejection plan with a named owner, plus a log of past rejections and their resolutions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the person who replies to store reviewers and a backup"
                - "Write the steps for reply, fix and appeal on one page"
                - "Record past rejections with their cited rule and resolution"
                - "Walk the team through the plan using a past rejection"
            - name: Emergency hotfix and expedited review drill
              description: |-
                ## Purpose
                When a release breaks login or payments, the team needs to know in advance how to pause rollout, flip a server switch, build a fix and ask for expedited review. Running a drill on a calm day finds the missing signing access, the unknown console login and the slow step before a real incident does.

                ## Milestones
                1. A hotfix runbook covering pause, server switch, fix, build and expedited review.
                2. A drill run end to end with a dummy fix on a test track.
                3. Time from decision to build ready for review recorded.
                4. Gaps found in the drill fixed within a month.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A hotfix drill run end to end and timed, with every gap it found fixed within a month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the hotfix runbook from pause through to expedited review"
                - "Agree who can pause rollout and request expedited review"
                - "Time the drill from decision to build ready for review"
                - "Run the hotfix drill on a calm week @recurring(yearly)"
            - name: Major redesign release on mobile
              description: |-
                ## Purpose
                Redesigns that change navigation or core screens on mobile cannot be quietly rolled back, and long-time users react in the reviews within hours. Planning one as a dated release, with a beta group, a server switch for the old experience where possible, support briefings and a ratings watch, keeps the change from turning into a ratings crisis.

                ## Milestones
                1. Release date set, with beta, phased rollout and support briefing dates.
                2. Beta feedback from at least 100 users reviewed before release.
                3. Support and store reply templates prepared for the change.
                4. Ratings and key funnels watched daily for two weeks after full rollout.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The redesign released on its planned date after a beta of 100 users, with two weeks of post-release ratings and funnels reviewed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set the release date and count back to beta and briefing dates"
                - "Recruit a beta group of at least 100 existing users"
                - "Brief support with screenshots and prepared replies"
                - "Watch ratings and core funnels for two weeks after full rollout"
            - name: Store editorial featuring nomination
              description: |-
                ## Purpose
                Editorial teams at both stores choose apps to feature around launches, seasonal moments and new platform features, and a nomination with good material helps them notice yours. Preparing one for a meaningful release, with the story, visuals and timing, costs a few hours and occasionally brings a large spike of installs.

                ## Milestones
                1. A release worth nominating chosen, ideally one that uses a new platform feature.
                2. Story, visuals and a short video prepared.
                3. Nomination submitted through each store's route ahead of the recommended lead time.
                4. Installs during any featuring period recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A featuring nomination submitted for one release ahead of the store's recommended lead time."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick an upcoming release that would interest store editors"
                - "Find the featuring nomination route in each store console"
                - "Write the story in three sentences with two strong visuals"
                - "Submit the nomination with the release date and lead time noted"
            - name: Engineer stepping into mobile product ownership
              description: |-
                ## Purpose
                Mobile engineers often end up owning the product side of the app because they know the platforms best, then find their week swallowed by builds. A 90-day plan that sets aside time for users, data and stakeholders, and hands some release duties to others, helps an engineer make the switch without losing the technical credibility that got them there.

                ## Milestones
                1. Decision rights agreed with the manager: what the new owner decides alone.
                2. Five user conversations held in the first 60 days.
                3. Release duties shared so the owner is not the only release captain.
                4. A plan for the first full quarter presented to the team.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Decision rights written down, five user conversations held and a first quarter plan presented within 90 days."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree with your manager which decisions are now yours"
                - "Book five conversations with app users over the next two months"
                - "Hand at least one release captain shift to another engineer"
                - "Present a plan for your first full quarter to the team"
            - name: Web-first team shipping its first mobile app
              description: |-
                ## Purpose
                Teams with a strong web product often assume the app is the website in a smaller frame, then hit store review, push, offline and platform conventions all at once. Deciding what the first app version is for, which features it leaves out and how the team will work in release trains sets expectations before the first build exists.

                ## Milestones
                1. The app's job written down: which user tasks it exists for that the web does badly.
                2. A first release scope with deliberate omissions agreed.
                3. Release train, QA and store ownership planned before the build starts.
                4. A success measure for the first 90 days after launch set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written app purpose, first release scope with omissions and a 90-day success measure, agreed before development starts."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the user tasks people try to do on the mobile website today"
                - "Choose the three tasks the first app must do better than the web"
                - "Agree what the first version deliberately leaves out"
                - "Name the store owner and the release captain before the build starts"
            - name: Taking over an inherited app with poor ratings
              description: |-
                ## Purpose
                Inheriting an app rated below three stars, with a backlog of crashes and angry reviews, is common after reorganisations and acquisitions. A focused recovery plan that fixes the top crashes, answers the reviews and ships a few visible fixes in quick releases can lift the current version rating within a quarter, before any bigger plans.

                ## Milestones
                1. Top complaints from the last 200 reviews tagged and counted.
                2. The five crashes affecting the most users fixed.
                3. Three small releases shipped, each fixing a top complaint.
                4. Current version rating improved by an agreed amount within 90 days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three releases shipped within 90 days and the current version rating has improved by the agreed amount."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Tag the last 200 store reviews by complaint"
                - "Pick the five crashes affecting the most users"
                - "Plan three small releases that each fix a visible complaint"
                - "Reply to the reviews whose problem each release fixes"
            - name: Small team running an app with one mobile engineer
              description: |-
                ## Purpose
                Many startups and small businesses run their app with a single mobile engineer, so a holiday, illness or resignation can freeze releases. A small team needs fewer ceremonies, a simpler cadence, outside help lined up and every account and key documented, so the app keeps working when that one person is away.

                ## Milestones
                1. A release cadence the one engineer can sustain agreed.
                2. Build, signing and submission steps documented well enough for a contractor.
                3. A contractor or agency lined up for cover.
                4. Someone other than the engineer able to pause a rollout.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Release steps documented, a cover contractor identified and a second person able to pause rollouts on both stores."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree a release cadence the engineer can keep up all year"
                - "Ask the engineer to record a screen video of one full release"
                - "Line up a contractor who could cover for a month"
                - "Show a second person how to pause a rollout in each console"
            - name: Building for low-end devices and patchy networks
              description: |-
                ## Purpose
                In many growing markets, including much of the Caribbean, Africa and South Asia, users have older Android phones with little storage, prepaid data and uneven coverage. Testing on a cheap device over a throttled network, and setting budgets for size, data use and memory, shows whether the app works for them at all.

                ## Milestones
                1. A low-end test device bought that matches the bottom tier of your device matrix.
                2. Core flows tested on it over a throttled slow network profile.
                3. Mobile data used in a typical session measured.
                4. Two fixes for the worst problems shipped or scheduled.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Core flows tested quarterly on a low-end device over a slow network, with data per session measured and two fixes scheduled."
                cadence: rolling
              tasks:
                - "Buy an entry-level Android phone typical of your lowest test tier"
                - "Test the core flows on it over a throttled slow network"
                - "Measure the mobile data used in a typical session"
                - "Repeat the low-end device test with the latest release @recurring(quarterly)"
            - name: Tablet, foldable and large-screen layouts
              description: |-
                ## Purpose
                Phone layouts stretched across a tablet or an unfolded screen look broken, and Google Play highlights large-screen app quality to users. Deciding whether large screens matter for your users, and then which layouts to adapt first, avoids both neglect and an expensive redesign nobody needed.

                ## Milestones
                1. Share of active users on tablets and foldables measured per platform.
                2. Core screens reviewed on a tablet and a foldable or its emulator.
                3. A decision recorded: full support, key screens adapted, or phone layout only.
                4. Adapted screens scheduled if the decision calls for them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded large-screen support decision based on measured tablet and foldable usage."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure active users on tablets and foldables per platform"
                - "Review the core screens on a tablet and a foldable emulator"
                - "Record a decision on the level of large-screen support"
                - "Schedule the first adapted screens if the decision calls for them"
            - name: Widgets, watch apps and other platform surfaces
              description: |-
                ## Purpose
                Home screen widgets, lock screen and live activity surfaces, watch apps and voice shortcuts can put the app's most useful moment one glance away, but each adds a surface to design, test and maintain. Evaluating which fit a real user need, rather than building whatever was announced last, keeps the team on the ones that earn their cost.

                ## Milestones
                1. Available surfaces on both platforms listed with what each is good for.
                2. Two candidate uses tested with users as sketches or prototypes.
                3. Maintenance cost estimated by engineering for each candidate.
                4. One surface chosen and built, or a clear decision to wait.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two surface ideas tested with five users and a written build or wait decision that includes maintenance cost."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the widget, watch and shortcut surfaces available on both platforms"
                - "Sketch two uses that save users a step they take daily"
                - "Show the sketches to five users and note their reactions"
                - "Record the chosen surface or the reason to wait"
            - name: Server-driven screens to ship without a store release
              description: |-
                ## Purpose
                Mature mobile teams move some screens, such as home feeds, promotions and settings, to layouts defined on the server so they can change content and order without waiting for store review and user updates. It speeds iteration a great deal but costs engineering effort, testing complexity and some native feel, so it suits only the screens that change most.

                ## Milestones
                1. Screens ranked by how often they change and how much review delay hurts.
                2. The approach, its limits and store rules on remote changes understood.
                3. One pilot screen built server-driven with a fallback for old versions.
                4. Speed of change on the pilot compared with a normal release.

                ## Notes
                Store rules do not allow changing the app's core purpose or downloading new executable code. Keep server-driven changes to layout and content.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One screen running server-driven with a fallback, and a written comparison of change speed against a store release."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank screens by how often they changed in the last year"
                - "Read both stores' rules on changing app behaviour remotely"
                - "Pilot one server-driven screen with a fallback for old versions"
                - "Compare time to change the pilot with a normal release"
---

# Mobile App Product Management

This area is for product managers and engineers who own a mobile app on iOS, Android or both, where every release passes store review, users update when they feel like it and the network cannot be trusted. It starts with the foundations (a health baseline, account and signing key ownership, the device matrix and a minimum OS policy), then the release and quality routines, the platform knowledge worth having, the decisions on frameworks, permissions, offline behaviour and performance, the dated events such as a first submission or a hotfix drill, the situations different teams find themselves in, and finally the specialist surfaces beyond the phone screen.

What repeats is a weekly release train, a Monday crash review and a Thursday pass through store reviews, monthly looks at ratings, version adoption, push delivery and start-up time, quarterly checks on store policy, SDKs, parity and the device matrix, and the yearly cycle of new OS versions. The Metrics log, Operational checklist, Feedback themes, Product spec and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
