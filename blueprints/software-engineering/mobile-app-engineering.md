---
id: software-engineering.mobile-app-engineering
name: Mobile App Engineering
description: "A framework decision, signing keys and store accounts you actually own, crash triage and staged rollouts on a rhythm, offline data that syncs, and the yearly OS cycle handled before users notice."
category: business
version: 1.0.0
tags: [software-engineering, mobile-app-engineering, engineer, team, ios, android, app-store, crash-reporting, offline-first]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - remediation-plan
    - purchase-decision
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mobile App Engineering
          description: "Building and shipping native or cross-platform mobile apps, handling app store releases, device fragmentation, offline data and crash reporting."
          projects:
            - name: Native or cross-platform framework decision
              description: |-
                ## Purpose
                Picking between Swift and Kotlin, Flutter, React Native or a shared Kotlin Multiplatform core decides who you can hire, how fast you ship two platforms and how painful the next OS release will be. Writing the decision down against your team's real skills and the app's real needs (camera, Bluetooth, background audio, heavy animation) stops the question being reopened every quarter.

                ## Milestones
                1. The app's must-have native capabilities listed, each marked as easy, possible or painful in every candidate framework.
                2. A one-screen spike built in the top two candidates, including one hard native integration.
                3. Team skills, hiring market and long-term maintenance cost compared in a single table.
                4. A written decision with the reasons and the conditions that would make you revisit it.

                ## Notes
                Weigh the integrations you will need in year two, not just the first screens. Most regret comes from a single native feature the framework handles badly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded framework decision exists, backed by a spike in two candidates and a capability table the team has reviewed."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List the native capabilities the app needs in its first two years"
                - "Build the same login and camera screen in the two leading frameworks"
                - "Compare build times, app size and integration effort from the spikes"
                - "Write the decision and its revisit conditions in the repository docs"
            - name: Supported OS versions and device matrix
              description: |-
                ## Purpose
                Every extra OS version you support adds test time and blocks newer APIs, while every one you drop locks some users out. Setting a minimum version and a short list of reference devices from your own analytics, not from guesses, gives testing and design a fixed target.

                ## Milestones
                1. Current users broken down by OS version, screen size and device class from your analytics.
                2. A minimum iOS and Android version chosen, with the share of users it excludes stated.
                3. Six to ten reference devices named, covering small and large screens, low-end hardware and the newest flagships.
                4. The matrix published where design, QA and support can all find it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published device matrix names the minimum OS versions, the share of users excluded and at least six reference devices."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export last quarter's sessions by OS version and device model"
                - "Work out what share of users each candidate minimum version would exclude"
                - "Pick the reference devices that cover screen sizes and low-end hardware"
                - "Publish the matrix and link it from the README"
            - name: Developer and store accounts owned by the organisation
              description: |-
                ## Purpose
                App Store Connect and Google Play Console accounts registered to a departed employee's personal email are one of the most common reasons a team cannot ship a fix. Moving both accounts under an organisation-owned identity, with at least two admins and a recovery route, removes a single point of failure that has nothing to do with code.

                ## Milestones
                1. Both developer accounts registered to the organisation, with the legal entity details correct.
                2. At least two named admins on each account, using role-based access for everyone else.
                3. Account recovery details and two-factor devices documented in the team's password manager.
                4. Bank, tax and agreement status checked so paid features and payouts are not blocked.

                ## Notes
                Transferring an app between accounts is possible on both stores but slow. Do it before you need to ship urgently, not during an incident.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both store accounts belong to the organisation, each has two or more admins, and recovery details are stored in the shared password manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which identity owns each store developer account today"
                - "Add a second admin to both accounts with the least role that works"
                - "Record recovery and two-factor details in the team password manager"
                - "Review everyone with access to both store consoles @recurring(quarterly)"
            - name: Signing certificates and keystore custody
              description: |-
                ## Purpose
                Losing an Android upload key or letting an iOS distribution certificate lapse can stop releases for days, and a leaked signing key is worse. A short custody plan for every certificate, profile and keystore, with backups and named owners, makes signing boring.

                ## Milestones
                1. Every signing asset listed: iOS distribution certificates, provisioning profiles, push keys, the Android upload key and keystore.
                2. Play App Signing confirmed as enabled, so the upload key can be reset if lost.
                3. Keystores and private keys held in a secrets store or CI vault, never in the repository.
                4. Two people able to produce a signed build without the original author present.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signing asset register exists with owners and expiry dates, and a second engineer has produced a signed build from the stored keys."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the repository history for committed keystores or private keys"
                - "List every certificate, profile and key with its owner and expiry date"
                - "Move keystores and passwords into the CI secret store"
                - "Have a second engineer produce a signed build from the stored assets"
            - name: Reproducible local builds for both platforms
              description: |-
                ## Purpose
                If a new laptop takes two days and three Slack threads to produce a working build, every new joiner and every OS update costs the team that again. Pinning toolchain versions and scripting setup means anyone can clone, run one command and get a debug build on a simulator and an emulator.

                ## Milestones
                1. Xcode, Android Gradle Plugin, JDK, Node or Flutter versions pinned in files the build reads.
                2. One setup script that installs dependencies and checks versions, with clear errors.
                3. A clean machine producing debug builds for both platforms in under an hour.
                4. Known setup traps written in the README with their fixes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An engineer on a clean machine gets debug builds of both platforms running in under one hour using only the README and setup script."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down every tool and version your last working build used"
                - "Pin those versions in version files committed to the repository"
                - "Script the dependency install with a version check at the end"
                - "Time a fresh setup on a spare machine and fix what slowed it"
            - name: App architecture pattern and module layout
              description: |-
                ## Purpose
                Mobile codebases tend to collapse into giant view controllers or activities that mix networking, state and layout, which makes every change risky and every test hard. Agreeing one presentation pattern (MVVM or unidirectional data flow) and a module layout by feature keeps screens small and lets two people work on the same app without collisions.

                ## Milestones
                1. One presentation pattern chosen and shown in a reference screen everyone can copy.
                2. Feature modules or packages laid out so a feature can build and test on its own.
                3. Navigation, networking and persistence placed behind clear interfaces.
                4. The pattern documented in one page with the reference screen linked.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented pattern and a reference screen exist, and at least one feature module builds and runs its tests independently."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick the screen with the most logic as the first one to restructure"
                - "Rewrite it in the chosen pattern as the reference screen"
                - "Split one feature into its own module with its own tests"
                - "Write the one-page pattern guide and link it from the README"
            - name: Crash reporting and symbol upload from day one
              description: |-
                ## Purpose
                Without symbol files uploaded for every build, a crash report is a wall of memory addresses that tells you nothing. Wiring a crash reporter into every build type, with dSYM and mapping file upload automated, means the first crash from a real user arrives readable.

                ## Milestones
                1. A crash and ANR reporting tool installed in both apps, initialised before anything else at launch.
                2. dSYM files and Android mapping files uploaded automatically for every release build.
                3. A test crash from a release build showing a readable, symbolicated stack trace.
                4. Release version, build number and user-safe context attached to every report.

                ## Notes
                Check the reporter's data collection against your privacy labels. Do not attach emails or names to crash context.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliberate crash in a release build on each platform appears in the reporter with a symbolicated stack trace and build number."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add the crash reporting SDK to both apps behind a single wrapper"
                - "Automate dSYM and mapping file upload in the release build step"
                - "Trigger a test crash in a release build on a real device"
                - "Confirm the stack trace is readable and names the right build"
            - name: Build variants for development, staging and production
              description: |-
                ## Purpose
                Pointing a test build at production data, or shipping a store build that still talks to staging, are both mistakes that happen when environments are switched by editing a constant. Proper schemes and product flavours, each with its own bundle ID, icon badge and config, make the environment obvious from the home screen.

                ## Milestones
                1. Separate iOS schemes and Android product flavours for development, staging and production.
                2. Each variant installed side by side with a distinct app name and icon badge.
                3. API endpoints and keys read from per-variant config, none hard-coded in source.
                4. Release builds proven unable to point at non-production endpoints.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three variants install side by side on one device, each visibly labelled, and the production build contains no staging endpoints."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find every hard-coded URL and key in both codebases"
                - "Create the three schemes and flavours with distinct bundle IDs"
                - "Add a badge or name suffix to the non-production app icons"
                - "Inspect a production build to confirm no staging endpoint is inside"
            - name: Automated signed builds to the test tracks
              description: |-
                ## Purpose
                Signing a release on one engineer's laptop ties every release to that laptop and that person. A pipeline lane that builds, signs and uploads to TestFlight and the Play internal track on each merge to the release branch turns a fiddly afternoon into a button nobody has to think about.

                ## Milestones
                1. A build lane producing signed iOS and Android release builds from a clean runner.
                2. Builds uploaded automatically to TestFlight and the Play internal testing track.
                3. Build numbers incremented by the pipeline, never by hand.
                4. Testers notified with release notes taken from merged changes.

                ## Notes
                Tools such as fastlane or Gradle Play Publisher handle most of this. Keep the signing steps in one place so they are easy to audit.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A merge to the release branch produces signed builds on TestFlight and the Play internal track with no manual step."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down every manual step in today's release build"
                - "Script the signing and upload steps for one platform first"
                - "Move build number generation into the pipeline"
                - "Run a full release candidate through the lane without touching a laptop"
            - name: Weekly crash and ANR triage
              description: |-
                ## Purpose
                Crashes and app-not-responding events cost ratings and, on Google Play, visibility once they cross the store's bad behaviour thresholds. Half an hour every Monday spent ranking the top issues by users affected, assigning owners and closing fixed ones keeps the crash-free rate moving the right way.

                ## Milestones
                1. A standing Monday slot with a named triage owner for each platform.
                2. The top five crashes and ANRs each assigned an owner or marked as accepted.
                3. Crash-free users and ANR rate recorded weekly per platform.
                4. Issues fixed in a release confirmed as gone in the following week's data.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week the top five crashes and ANRs on each platform have an owner or a recorded decision, and crash-free users is logged."
                cadence: rolling
              tasks:
                - "Pick a triage owner for iOS and one for Android"
                - "Rank the top crashes and ANRs by users affected and assign owners @recurring(weekly:mon)"
                - "Read the full list of new crash types from the last month @recurring(monthly:8)"
                - "Close issues that have not reappeared since their fix shipped"
            - name: Store review and rating response routine
              description: |-
                ## Purpose
                Store reviews are the only bug report many users will ever write, and an unanswered one-star review keeps deterring new installs for months. A short weekly pass that tags reviews by theme, files real bugs and replies where it helps turns the review page into a feedback channel.

                ## Milestones
                1. Reviews from both stores collected in one place each week.
                2. Each review tagged by theme such as crash, login, performance or feature request.
                3. Bugs found in reviews filed with the app version and device named.
                4. Replies written for reviews where a fix shipped or help is available.

                ## Notes
                Keep replies short and specific. Promising a fix by a date is a promise you may not control, given store review times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week all new reviews are tagged by theme and every review describing a reproducible bug has a linked ticket."
                cadence: rolling
              tasks:
                - "Set up a feed of new reviews from both stores into one channel"
                - "Agree five theme tags and a reply tone with support"
                - "Tag new reviews, file bugs and reply where useful @recurring(weekly:thu)"
                - "Ask the agent to summarise the month's review themes for the team"
            - name: Release train for store builds
              description: |-
                ## Purpose
                Shipping whenever something feels ready means some releases carry three weeks of risk and others carry a typo fix, and store review times make every slip worse. A fixed train with a cut-off day, a QA window and a submission day lets product plan around dates and makes each release smaller.

                ## Milestones
                1. A train length chosen, typically one or two weeks, with cut-off, QA and submission days named.
                2. A rule for what may join a train after cut-off, and who decides.
                3. Release notes and store metadata prepared as part of the train, not after it.
                4. Lead time from merge to users' devices measured for each train.

                ## Notes
                Start from the **Operational checklist** template for the steps from cut-off to submission.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Releases ship on a published train with fixed cut-off and submission days, and merge-to-device lead time is recorded per release."
                cadence: cyclic
              tasks:
                - "Choose the train length and name the cut-off and submission days"
                - "Write the release checklist from cut-off to store submission"
                - "Agree who can approve a late change after cut-off"
                - "Review last month's trains for lead time, slips and rejections @recurring(monthly:3)"
            - name: Staged rollout monitoring for each release
              description: |-
                ## Purpose
                Phased release on the App Store and staged rollout on Google Play exist so a bad build reaches 1 percent of users, not all of them, but only if someone watches the numbers and acts. Setting halt thresholds in advance turns a rollout from a hope into a controlled experiment.

                ## Milestones
                1. Rollout steps agreed, for example 1, 5, 20, 50 and 100 percent on Android.
                2. Halt thresholds written down for crash-free users, ANR rate and key funnel events.
                3. A named person checking each live rollout on set days.
                4. At least one rollout halted or paused on purpose in a drill, so the steps are known.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every release has documented rollout steps and halt thresholds, and each rollout step is signed off against them before widening."
                cadence: rolling
              tasks:
                - "Write halt thresholds for crash-free users and ANR rate"
                - "Agree the percentage steps and minimum hours at each step"
                - "Check every build in rollout against the thresholds @recurring(weekly:fri)"
                - "Practise pausing a phased release in both store consoles"
            - name: Yearly OS beta compatibility cycle
              description: |-
                ## Purpose
                Each summer Apple and Google release developer betas of the next major OS, and the final versions reach millions of devices within weeks of autumn launch. Running your app on the betas from the first release, filing issues and adopting required changes early prevents the September scramble.

                ## Milestones
                1. Betas installed on dedicated test devices within two weeks of release.
                2. Every main user flow run on the beta and breakages logged.
                3. New permission prompts, privacy rules and deprecated APIs listed with owners.
                4. A compatible build in the store before the public OS release date.

                ## Notes
                Never install a beta on a device you rely on daily. Keep one older device on the current release for comparison.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A build tested against the new major OS is live in both stores before that OS reaches the public, with any known issues listed."
                cadence: cyclic
              tasks:
                - "Set aside one iOS and one Android device for beta testing"
                - "Install the first developer betas on the test devices @recurring(yearly)"
                - "Read the platform release notes for behaviour changes affecting the app"
                - "Run the main user flows on the beta and file what breaks"
            - name: Store policy and SDK requirement watch
              description: |-
                ## Purpose
                Both stores change their rules several times a year: privacy manifests, required reason APIs, account deletion, target API levels, new SDK minimums. Missing one can block an update with no warning on submission day, so a monthly read of policy announcements is cheap insurance.

                ## Milestones
                1. Official policy and developer news sources for both stores followed by a named person.
                2. Each new requirement logged with its enforcement date and the code it affects.
                3. Requirements due within 90 days scheduled into a release train.
                4. No submission rejected for a policy the team already knew about.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A requirements log lists every store policy change from the last year with its enforcement date and the release that met it."
                cadence: rolling
              tasks:
                - "Subscribe to developer news for both stores"
                - "Start a requirements log with columns for date, impact and owner"
                - "Read new store policy updates and log anything that applies @recurring(monthly:11)"
                - "Schedule each requirement due within 90 days into a train"
            - name: Certificate and provisioning profile expiry calendar
              description: |-
                ## Purpose
                An expired push certificate silently stops notifications and an expired distribution profile breaks enterprise and ad hoc builds, often on the day someone is on holiday. A calendar of every expiry with a reminder well ahead turns a recurring outage into a ten-minute chore.

                ## Milestones
                1. Every certificate, profile and key from the signing register given an expiry date in a shared calendar.
                2. Reminders set at least 30 days before each expiry.
                3. Push notification keys moved to token-based authentication where the platform allows it.
                4. A renewal procedure written for each asset type.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No certificate or profile has expired unnoticed in the last 12 months, and each has a calendar reminder 30 days ahead."
                cadence: rolling
              tasks:
                - "Add every signing asset expiry to a shared team calendar"
                - "Write a short renewal procedure for each asset type"
                - "Check for anything expiring in the next 60 days @recurring(monthly:27)"
                - "Renew the Apple developer programme membership before it lapses @recurring(yearly)"
            - name: Third-party mobile SDK audit
              description: |-
                ## Purpose
                An analytics, ads or attribution SDK can add megabytes, slow launch, collect data you never declared and become the reason a store rejects you. A quarterly audit of each SDK's purpose, size, data collection and owner keeps the app lighter and the privacy labels honest.

                ## Milestones
                1. Every third-party SDK listed with its purpose, owner and binary size contribution.
                2. Each SDK's data collection checked against your privacy labels and data safety form.
                3. SDKs with no current owner or use case marked for removal.
                4. At least one unused or duplicated SDK removed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current SDK register exists with size and data collection for each entry, reviewed in the last quarter."
                cadence: cyclic
              tasks:
                - "List every SDK in both apps from the dependency manifests"
                - "Note each SDK's size, purpose and data it collects"
                - "Review the SDK register for owners, size and data collection @recurring(quarterly)"
                - "Remove one SDK nobody can justify"
            - name: App size budget and tracking
              description: |-
                ## Purpose
                Download size affects install conversion, especially for users on prepaid data or older phones, and it grows a few hundred kilobytes at a time until it is suddenly too large for cellular download prompts. A size budget, measured per release, catches the growth when it is still one commit to reverse.

                ## Milestones
                1. Download and install size recorded for the current release on each platform.
                2. A size budget set with an alert threshold.
                3. Size reported per build in the pipeline, with the change from the previous release.
                4. The three largest contributors identified with a plan for each.

                ## Notes
                Start from the **Metrics log** template. Measure from the store's own size reports, since local build sizes differ from what users download.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each release's download size is logged per platform against a written budget, with any increase over 5 percent explained."
                cadence: rolling
              tasks:
                - "Record the current download size from both store consoles"
                - "Set a budget and a warning threshold for each platform"
                - "Log this month's release sizes and flag any jump @recurring(monthly:19)"
                - "Break down the largest build by assets, code and libraries"
            - name: Physical test device lab upkeep
              description: |-
                ## Purpose
                Emulators do not reproduce thermal throttling, cheap camera drivers, aggressive battery savers from some manufacturers or real network handoffs. A small shelf of real devices that are charged, updated and labelled means a bug report from a mid-range Android phone can be reproduced the same day.

                ## Milestones
                1. Reference devices from the matrix on hand, labelled with model and OS version.
                2. Devices kept charged in a safe place with a sign-out record.
                3. OS versions updated or deliberately held, with the reason noted.
                4. Swollen batteries and dead devices retired and replaced.

                ## Notes
                Swollen lithium batteries are a fire risk. Remove and recycle them properly rather than keeping the device on charge.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reference device is labelled, charged and on a recorded OS version, checked within the last month."
                cadence: rolling
              tasks:
                - "Label each device with model, OS version and asset number"
                - "Set up a charging spot and a simple sign-out sheet"
                - "Check charge, OS versions and battery condition on every device @recurring(monthly:24)"
                - "Buy the cheapest popular Android device your users own if you lack one"
            - name: App lifecycle and process death study
              description: |-
                ## Purpose
                Users switch apps, take calls and lock their phones, and the OS can kill your process in the background without warning, then restore it expecting the state to be there. Understanding the lifecycle on both platforms, and testing process death on purpose, removes a whole family of blank-screen and lost-form bugs.

                ## Milestones
                1. The iOS scene lifecycle and Android activity and process lifecycle explained in your own notes.
                2. Process death simulated with developer options and the debugger on a real screen.
                3. Saved state restored correctly on the three screens with the most user input.
                4. A process death check added to the release QA checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The three most input-heavy screens survive a simulated process death with their state intact on both platforms."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the official lifecycle guides for both platforms"
                - "Enable the do not keep activities developer option on a test phone"
                - "Kill the app in the background on a form screen and note what is lost"
                - "Fix state saving on the worst screen and add the check to QA"
            - name: Main thread discipline and mobile concurrency
              description: |-
                ## Purpose
                A frozen UI, dropped frames and ANRs nearly always trace back to disk, network or heavy parsing on the main thread. Learning Swift concurrency or Kotlin coroutines properly, including cancellation when a screen closes, makes the app feel fast and stops leaks that only show after long sessions.

                ## Milestones
                1. Structured concurrency, dispatchers or actors and cancellation explained with a worked example.
                2. Main thread checking enabled in debug builds on both platforms.
                3. Every network and database call on a sample screen moved off the main thread.
                4. Work tied to a screen cancelled when the user leaves it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Strict mode or the main thread checker runs clean on the three busiest screens, with screen-bound work cancelled on exit."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Turn on StrictMode and the main thread checker in debug builds"
                - "Work through one official concurrency tutorial for your platform"
                - "List every violation the checkers report on the busiest screen"
                - "Move those calls off the main thread and add cancellation"
            - name: Declarative UI with SwiftUI or Jetpack Compose
              description: |-
                ## Purpose
                Declarative UI is where both platforms are heading, and new APIs increasingly arrive there first. Building a real screen in SwiftUI or Compose, then mixing it with existing UIKit or View code, teaches state hoisting, recomposition costs and preview-driven work on code that ships.

                ## Milestones
                1. State, state hoisting and side effects understood well enough to explain to a colleague.
                2. One production screen rebuilt declaratively and embedded in the existing app.
                3. Previews set up for light, dark, large text and right-to-left layouts.
                4. Unnecessary recompositions or view updates found and removed with the platform tools.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One declarative screen is live in production with previews for four display variations and no excess recomposition in profiling."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a small, self-contained screen to rebuild"
                - "Complete the official SwiftUI or Compose pathway for state handling"
                - "Rebuild the screen and embed it in the existing navigation"
                - "Add previews for dark mode, large text and right-to-left"
            - name: Profiling with Instruments and Android Studio
              description: |-
                ## Purpose
                Guessing at performance problems wastes weeks on the wrong fix. Learning to record a trace in Instruments and the Android Studio profiler, read a flame chart and spot memory leaks gives you evidence before you touch code.

                ## Milestones
                1. A time profiler trace recorded on a real device for the slowest screen on each platform.
                2. One memory leak found with the allocations or memory profiler tools and fixed.
                3. Frame rendering measured on a scroll-heavy list, with janky frames counted.
                4. A short guide written for the team on taking and sharing a trace.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Traces from both platforms are saved with findings, and at least one leak or jank cause has been fixed with before and after numbers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Record a time profiler trace of app launch on a real device"
                - "Run a leak check after opening and closing a heavy screen ten times"
                - "Measure janky frames while scrolling the longest list"
                - "Write a one-page guide to recording and sharing a trace"
            - name: VoiceOver and TalkBack accessibility pass
              description: |-
                ## Purpose
                Screen reader users, people with large system text and those with motor impairments are a real share of any audience, and accessibility complaints increasingly carry legal risk. Testing the main user flows with VoiceOver, TalkBack and the largest text size finds the unlabelled buttons and clipped text that automated scans miss.

                ## Milestones
                1. Every main user flow completed with VoiceOver and TalkBack, eyes off the screen.
                2. All interactive elements given labels, roles and sensible focus order.
                3. Screens checked at the largest dynamic type and font scale with no clipped text.
                4. Touch targets meeting platform minimum sizes on the reference devices.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The sign-up, core task and payment flows can be completed with a screen reader on both platforms, with findings logged and fixed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Turn on VoiceOver and try to complete sign-up without looking"
                - "Run the platform accessibility scanners on the five main screens"
                - "Fix missing labels and focus order on the worst screen"
                - "Repeat the screen reader pass on the main user flows @recurring(quarterly)"
            - name: Push notifications end to end
              description: |-
                ## Purpose
                Push looks simple until tokens rotate, users reinstall, permission is denied on first launch and Android channels decide nothing is shown. Following one notification from your server through APNs or FCM to the device, including token refresh and permission timing, is the way to make delivery dependable.

                ## Milestones
                1. The path from server to APNs or FCM to device drawn with every failure point marked.
                2. Device tokens refreshed and deleted correctly on reinstall, logout and token rotation.
                3. The permission prompt shown after the user sees value, not at first launch.
                4. Android notification channels named and grouped so users can mute one kind only.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test notification reaches devices after reinstall and token rotation on both platforms, and the opt-in rate is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw the notification path from your server to the device"
                - "Test what happens to the token after reinstall and logout"
                - "Move the permission prompt to after the first useful moment"
                - "Define Android channels for each notification type"
            - name: Universal links and app links that open the right screen
              description: |-
                ## Purpose
                Links from email, marketing and password resets that open the app store, the website or the wrong screen lose users at exactly the moment they wanted to act. Setting up verified universal links and Android app links, with routing for logged-out and not-installed cases, makes every link land.

                ## Milestones
                1. Association files hosted and verified for iOS universal links and Android app links.
                2. A routing table mapping each link pattern to a screen.
                3. Logged-out, first-install and old-version cases handled with a sensible fallback.
                4. The top ten links tested from mail, messaging and browser apps on real devices.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most used links open the correct screen on both platforms from mail and browser apps, including when logged out."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the links marketing, email and support send most often"
                - "Host and validate the association files for both platforms"
                - "Build a routing table from link patterns to screens"
                - "Test the top links on a fresh install of both apps @recurring(quarterly)"
            - name: Reading crash reports and symbolicated stack traces
              description: |-
                ## Purpose
                A crash report holds more than the top frame: thread states, exception types, breadcrumbs and the device's memory pressure all point at a cause. Practising on ten real crashes until you can tell a race condition from an out-of-memory kill from a bad cast makes triage faster for everyone.

                ## Milestones
                1. Ten real crash reports read in full, with a suspected cause written for each.
                2. Common exception types on each platform listed with what they usually mean.
                3. Watchdog terminations and out-of-memory kills told apart from code crashes.
                4. A crash-reading guide shared with the team, using your own examples.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A guide with ten annotated crash examples from your own app exists and has been used by a second engineer to triage a new crash."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten crashes of different types from the reporter"
                - "Annotate each with thread, exception and likely cause"
                - "Reproduce two of them on a device to test your reading"
                - "Write the annotated examples into a team guide"
            - name: Offline-first local data store choice
              description: |-
                ## Purpose
                Choosing between SQLite with Room or GRDB, Core Data or SwiftData, Realm and a sync engine decides how hard offline mode, migrations and conflict handling will be for years. A short comparison on your real data shapes and sizes avoids picking whatever the last tutorial used.

                ## Milestones
                1. Data the app must hold offline listed with expected volumes and change rates.
                2. Three storage options compared for migrations, query speed, sync support and platform reach.
                3. A spike loading realistic data volume into the top choice on a low-end device.
                4. A decision written with the migration and encryption approach.

                ## Notes
                Start from the **Purchase decision** template if a paid sync service is one of the options.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded storage decision exists, supported by a spike on a low-end device with realistic data volume."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the records users need offline and how many of each"
                - "Compare three storage options against migration and sync needs"
                - "Load realistic volume into the leading option on a cheap phone"
                - "Write the decision including how schema migrations will run"
            - name: Sync and conflict handling for offline edits
              description: |-
                ## Purpose
                Two devices editing the same record offline, or a user editing on a train that loses signal halfway, will produce conflicts whether you design for them or not. Deciding the rules (last write wins, field-level merge or ask the user) and building a visible queue of pending changes stops silent data loss.

                ## Milestones
                1. A conflict rule chosen and written for each type of record.
                2. Local changes queued with retry and backoff when the network returns.
                3. Users shown which changes are pending and which failed.
                4. Conflict cases tested with two devices and airplane mode.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two devices editing the same record offline reconcile by the written rule with no lost edits in a scripted test."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the conflict rule for each record type with the backend team"
                - "Build the outgoing change queue with retry and backoff"
                - "Add a pending changes indicator to the UI"
                - "Script a two-device airplane mode test and run it"
            - name: Cold start time reduction
              description: |-
                ## Purpose
                Cold start is the first thing every user feels, and both stores surface slow startup in their vitals dashboards. Measuring time to first useful screen on a low-end device, then deferring SDK initialisation and heavy work, often removes a second or more.

                ## Milestones
                1. Cold start measured on a low-end and a flagship device, release build, several runs.
                2. Every piece of work before the first frame listed with its cost.
                3. Non-essential SDK initialisation and disk reads deferred until after first frame.
                4. Baseline profiles or equivalent startup optimisation applied on Android.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Median cold start on the low-end reference device is at least 30 percent faster than the recorded baseline, measured in release builds."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Measure cold start five times on a low-end device in a release build"
                - "Trace startup and list everything before the first frame"
                - "Defer the two most expensive initialisations"
                - "Re-measure and record the before and after numbers"
            - name: Crash-free session target as a release gate
              description: |-
                ## Purpose
                Crash-free rate is the closest thing mobile has to a shared reliability number, but it only changes behaviour when a release cannot go wider below the target. Agreeing a target per platform and wiring it into rollout decisions makes stability a release condition rather than a hope.

                ## Milestones
                1. Current crash-free users and sessions measured per platform over 30 days.
                2. A target agreed with product, for example 99.5 percent crash-free users.
                3. Rollouts held at the current step whenever a build falls below the target.
                4. The target reviewed after three releases and adjusted if it was unrealistic.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written crash-free target per platform is used as a rollout gate, and the last three releases record a pass or a halt against it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull 30 days of crash-free users and sessions per platform"
                - "Propose a target and agree it with the product owner"
                - "Add the target to the staged rollout halt thresholds"
                - "Review the target after the third release under it"
            - name: Forced update and minimum version policy
              description: |-
                ## Purpose
                Once an app version is installed it can live on a phone for years, still calling APIs you want to retire and carrying bugs you fixed long ago. A minimum supported version check, with a soft prompt and a hard block, gives the backend team a way to move forward and gives you a way out of a security problem.

                ## Milestones
                1. A remote minimum version setting the app reads at launch on both platforms.
                2. A soft update prompt and a hard block screen designed and tested.
                3. A policy for how long old versions stay supported, agreed with backend and product.
                4. The block tested end to end on an old build before it is ever needed.

                ## Notes
                Ship the check itself as early as possible. A version without it can never be forced to update.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The minimum version check is live in both apps and has been tested blocking an old build, with a written support window."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether any shipped version already reads a minimum version"
                - "Add the remote setting and the launch check to both apps"
                - "Design the soft prompt and the hard block screens"
                - "Agree the old version support window with backend and product"
            - name: Remote config and feature flags for mobile
              description: |-
                ## Purpose
                Because a store build cannot be rolled back and review can take a day, the ability to switch a feature off remotely is the main safety valve a mobile team has. A remote config service with sensible defaults, offline caching and a habit of removing old flags keeps that valve working.

                ## Milestones
                1. A remote config or flag service chosen with offline caching and safe defaults.
                2. Every new risky feature shipped behind a flag that can switch it off.
                3. Flags given an owner and a removal date when created.
                4. Stale flags removed from code within two releases of full rollout.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A flag service is in use, each live flag has an owner and removal date, and no flag older than six months remains unexplained."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare two or three remote config services on caching and defaults"
                - "Wrap flag access in one module so it is easy to remove later"
                - "Ship the next risky feature behind a kill switch"
                - "Remove flags that have been fully on for two releases @recurring(quarterly)"
            - name: Device farm choice for on-device UI tests
              description: |-
                ## Purpose
                Fragmentation across screen sizes, OS versions and manufacturer skins means a UI test passing on one simulator proves little. Choosing between a cloud device farm, a small in-house lab and emulators in the pipeline, based on cost and the devices your users really own, gives UI tests a place to run that reflects production.

                ## Milestones
                1. The five most common real devices from analytics confirmed as available in each option.
                2. Cost per month estimated for your expected test minutes.
                3. One XCUITest or Espresso suite run on a trial of the leading option.
                4. A decision recorded on which tests run on emulators and which on real devices.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A device farm decision is recorded with monthly cost, device coverage against analytics and a trial run of the existing UI suite."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the top ten devices your users own from analytics"
                - "Check device availability and pricing for two farms"
                - "Run the existing UI test suite on a free trial"
                - "Record which tests run on real devices and which on emulators"
            - name: Secure on-device storage for tokens and keys
              description: |-
                ## Purpose
                Tokens in plain shared preferences or user defaults can be read from backups, rooted devices and debug builds. Storing secrets in the iOS Keychain and Android Keystore, and keeping API secrets off the device altogether, closes the most common mobile security finding.

                ## Milestones
                1. Every secret the app stores located: tokens, refresh tokens, keys and personal data.
                2. Tokens moved into the Keychain and Keystore-backed storage with appropriate access flags.
                3. Server secrets removed from the app binary and replaced by short-lived tokens from the backend.
                4. Logout proven to clear every stored secret and cached personal data.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No secret or token is found in plain storage or in the app binary during an inspection of a release build on both platforms."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search both codebases for tokens written to plain preferences"
                - "Unpack a release build and look for embedded keys and secrets"
                - "Move tokens into Keychain and Keystore-backed storage"
                - "Test that logout clears every stored token and cache"
            - name: Privacy labels and data safety form that match the code
              description: |-
                ## Purpose
                The App Store privacy nutrition labels and Google Play's data safety section are public statements about what your app collects, and stores now reject updates when SDK behaviour contradicts them. Building the answers from an actual inventory of data flows, rather than memory, keeps them accurate and defensible.

                ## Milestones
                1. Every data type collected by the app and its SDKs listed with purpose and whether it is linked to the user.
                2. Privacy manifests and required reason API declarations present and accurate on iOS.
                3. Both store forms updated to match the inventory.
                4. In-app account deletion confirmed as available where the stores require it.

                ## Notes
                Check wording with whoever owns privacy or legal. This project prepares accurate answers; it does not replace their review.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data flow inventory exists, and both store privacy declarations match it, reviewed by the privacy owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a table of every data type the app and its SDKs collect"
                - "Compare the table with the current store privacy answers"
                - "Update the privacy manifest and both store forms"
                - "Recheck the declarations against the SDK register @recurring(yearly)"
            - name: First App Store and Google Play submission
              description: |-
                ## Purpose
                The first submission involves screenshots for every required size, age ratings, export compliance, review notes, demo accounts and a privacy policy URL, and missing any one sends you back a day. Treating it as a dated launch with a checklist gets both apps live in the same week.

                ## Milestones
                1. Store listings complete with screenshots, descriptions, categories and age ratings.
                2. A demo account and review notes ready for the store reviewers.
                3. Both builds submitted and approved, held for a manual release.
                4. Both apps released on the agreed day with links tested.

                ## Notes
                Start from the **Operational checklist** template. Submit at least a week before any public announcement date.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both apps are approved and publicly available in their stores on the agreed launch date."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List every listing asset and setting both stores require"
                - "Create a reviewer demo account with realistic data"
                - "Submit both builds for review with manual release selected"
                - "Release both apps and test the store links on real devices"
            - name: Responding to a store rejection
              description: |-
                ## Purpose
                Rejections usually arrive the evening before a planned release and cite a guideline number without much explanation. A calm routine (read the guideline, reproduce what the reviewer saw, fix or reply with evidence, resubmit) turns a rejection into a day's delay instead of a week's argument.

                ## Milestones
                1. The cited guideline read in full and the reviewer's screenshots or notes reproduced.
                2. A decision made to fix, reply with clarification or appeal.
                3. A resubmission or reply sent with specific evidence.
                4. The cause added to the release checklist so it does not recur.

                ## Notes
                Start from the **Remediation plan** template. Keep replies factual and polite; reviewers can see the history.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The rejected build is approved or the appeal is decided, and the root cause is a line in the release checklist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the cited guideline in full, not just its title"
                - "Reproduce exactly what the reviewer described on a real device"
                - "Fix the issue or reply with screenshots and a clear explanation"
                - "Add the cause to the release checklist"
            - name: Emergency hotfix through store review
              description: |-
                ## Purpose
                When a release corrupts data or crashes on launch for a large group, you cannot roll back a store build, so the path is a kill switch, a hotfix and an expedited review. Rehearsing that path before it is needed cuts hours off the worst day a mobile team has.

                ## Milestones
                1. A written hotfix path from branch to expedited review on iOS and a fast rollout on Android.
                2. Halting a rollout and requesting expedited review practised once on a harmless build.
                3. Support and status page messages drafted in advance.
                4. A post-hotfix review held and its actions tracked.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A documented hotfix path exists and has been rehearsed once, with time from decision to store submission recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the hotfix branch and build steps for both platforms"
                - "Find where to request an expedited review in App Store Connect"
                - "Draft holding messages for support and the status page"
                - "Rehearse halting a rollout on a low-risk build"
            - name: Launch readiness for a major app version
              description: |-
                ## Purpose
                A redesign or a major new feature brings new screenshots, a marketing date, a server load spike and support questions all at once. A dated readiness review two weeks out, covering store assets, feature flags, backend capacity and support notes, keeps launch day about users rather than surprises.

                ## Milestones
                1. Store screenshots, preview video and what's new text updated for the new version.
                2. Backend capacity and rate limits checked for the expected traffic.
                3. Every new feature behind a flag with a named person able to switch it off.
                4. Support given a short guide to the changes and known issues.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The major version ships on its planned date with updated store assets, flags in place and a support guide published."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set the launch date and a readiness review two weeks before it"
                - "Update screenshots and listing text for the new version"
                - "Confirm the backend team has checked capacity for launch traffic"
                - "Write a one-page support guide to the changes"
            - name: Target API level upgrade before the Play deadline
              description: |-
                ## Purpose
                Google Play requires updates to target a recent Android API level by a deadline each year, and apps that miss it cannot ship updates and become harder to find for new users. Each new target brings behaviour changes such as permission, background and notification rules, so starting months ahead leaves time to test properly.

                ## Milestones
                1. This year's required target API level and its deadline confirmed from the official policy.
                2. Behaviour changes for the new target read and mapped to affected code.
                3. The app built and tested against the new target on the reference devices.
                4. An update targeting the new level released before the deadline.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A release targeting the required API level is live on Google Play before the year's deadline, with behaviour changes tested."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Check the current target API requirement and deadline on the Play policy pages"
                - "Read the behaviour changes list for the new API level"
                - "Raise the target in a branch and run the full test suite"
                - "Test permissions, notifications and background work on real devices"
            - name: Dropping support for an old OS version
              description: |-
                ## Purpose
                Every few years the oldest supported OS version holds back too much: missing APIs, extra test time and workarounds nobody remembers the reason for. Planning the drop with data, warning users in advance and cleaning out the compatibility code makes it a one-off saving instead of a rushed decision forced by a dependency.

                ## Milestones
                1. The share of active users on the old version measured and accepted by product.
                2. Users on that version warned in the app at least one release ahead.
                3. The minimum OS raised and compatibility branches deleted from code.
                4. Test matrix and device lab updated to match.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The minimum OS is raised in a released build, users were warned beforehand, and the related compatibility code is removed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure active users on the oldest supported OS version"
                - "Agree the cut-off release with product and support"
                - "Add an in-app notice for users on that version"
                - "Delete the compatibility code once the new minimum ships"
            - name: Solo developer shipping one app to both stores
              description: |-
                ## Purpose
                Shipping to two stores alone means doing design, code, signing, store listings and support with no one to catch mistakes, often around a day job. A deliberately small first version, one cross-platform codebase and automation for the boring steps get the app into users' hands while motivation is still high.

                ## Milestones
                1. A first version cut to the one task the app must do well.
                2. Builds, signing and uploads scripted so a release takes under an hour.
                3. Crash reporting and a simple feedback link in place before launch.
                4. Version one live in both stores with a date set for the first update.

                ## Notes
                Store fees, a privacy policy and a support email are needed even for a free app. Budget for them before launch week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Version one is live on both stores, a release takes under an hour of hands-on time, and crash reporting is active."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Write the one sentence describing what version one does"
                - "Cut every screen that does not serve that sentence"
                - "Script the build and upload steps for both platforms"
                - "Set a date for the first update before you launch"
            - name: Web team taking on its first mobile app
              description: |-
                ## Purpose
                Web engineers are used to deploying in minutes and rolling back instantly, so store review, long-lived old versions and process death come as a shock. A short ramp covering the mobile-specific differences, paired with an experienced mobile engineer or contractor, avoids the expensive mistakes of the first year.

                ## Milestones
                1. The team briefed on store review, versioning, signing and why you cannot roll back.
                2. Each engineer has shipped one small change through TestFlight and the Play internal track.
                3. Minimum version checks and remote kill switches in place before the first public release.
                4. A list of web habits that do not carry over, written by the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every engineer on the team has shipped one change to a test track, and the first public release includes a minimum version check."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Run a one-hour session on how mobile release differs from web"
                - "Give each engineer a small ticket that ends on a test track"
                - "Pair each engineer with a mobile specialist for one week"
                - "Collect the web habits that caused trouble into a team note"
            - name: Inheriting a mobile codebase with no documentation
              description: |-
                ## Purpose
                Taking over an app whose authors have left often means unknown signing keys, store accounts in the wrong name, pinned toolchains nobody can install and SDKs no one remembers adding. A structured first month of discovery, before any feature work, finds the risks while there is still time to fix them calmly.

                ## Milestones
                1. Store accounts, signing assets and backend credentials located and moved to team ownership.
                2. A clean build produced on a current machine, with blockers recorded.
                3. Crash rate, ratings, OS spread and SDK list captured as a baseline.
                4. The top five risks written up with a proposed order of work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within one month a written baseline and top five risks exist, and the team has produced a signed release build without the previous authors."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find out who holds the store accounts and signing keys today"
                - "Try a clean build on a current machine and log every failure"
                - "Capture crash rate, ratings and OS spread as a baseline"
                - "Write the five biggest risks and share them with the team lead"
            - name: Handover of an agency-built app to an in-house team
              description: |-
                ## Purpose
                Agencies often build under their own developer accounts, signing keys and backend projects, so the handover is where ownership is won or lost. Running it as a checklist with the agency, from account transfers to a walkthrough recording, means the in-house team can ship the next release without calling anyone.

                ## Milestones
                1. Apps transferred to the client's store accounts, with push and signing keys handed over.
                2. Source, build scripts, backend projects and analytics accounts in client ownership.
                3. A recorded architecture walkthrough and build demonstration from the agency.
                4. The in-house team's first release shipped without agency help.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All store, signing, source and backend assets are in client ownership and the in-house team has shipped a release unaided."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Send the agency a list of every account and key to transfer"
                - "Start the app transfer process in both store consoles"
                - "Book a recorded walkthrough of the architecture and build"
                - "Ship a small release in-house to prove the handover worked"
            - name: Mobile platform support for several feature teams
              description: |-
                ## Purpose
                Once several squads ship into one app, someone has to own the build, the release train, shared UI components and the crash budget, or each team optimises for itself and the app gets slower. A small platform function with office hours, a request queue and clear ownership boundaries keeps one app coherent.

                ## Milestones
                1. Ownership of build, release, shared components and crash triage written down.
                2. A request queue and response time agreed with feature teams.
                3. Weekly office hours running for questions about builds and releases.
                4. Feature teams surveyed on the platform's usefulness twice a year.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Feature teams have a documented ownership map, a request queue with an agreed response time and weekly office hours that run."
                cadence: rolling
              tasks:
                - "Write the ownership map for build, release and shared components"
                - "Open a request queue and agree a response time"
                - "Hold office hours for feature teams @recurring(weekly:tue)"
                - "Survey feature teams on what slows them down"
            - name: Kotlin Multiplatform shared module for business logic
              description: |-
                ## Purpose
                Sharing validation, networking models and business rules between native iOS and Android apps avoids writing and testing the same logic twice, while keeping each UI native. Starting with one self-contained module tests the build, debugging and hiring costs before committing more.

                ## Milestones
                1. One self-contained piece of logic chosen, such as pricing rules or input validation.
                2. The module built for both platforms and consumed from Swift and Kotlin.
                3. Shared unit tests running in the pipeline for both targets.
                4. A review of build time, debugging experience and iOS team opinion written up.

                ## Notes
                Involve the iOS engineers from the start. A shared module the iOS team resents will be rewritten.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One shared module is live in both apps with tests in the pipeline, and a written review recommends expanding or stopping."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick the logic duplicated most often between the two apps"
                - "Build it as a shared module with its own tests"
                - "Replace the iOS and Android copies with the shared module"
                - "Ask the iOS engineers to write their review of the experience"
            - name: Over-the-air updates within store rules
              description: |-
                ## Purpose
                Over-the-air update tools for React Native and Expo can ship JavaScript and asset fixes without store review, which is powerful and easy to misuse. Setting rules for what may ship that way, keeping native changes in store builds and staying inside each store's guidelines protects the account as well as the users.

                ## Milestones
                1. Store guideline sections on downloaded code read and summarised for the team.
                2. A written rule for which changes may ship over the air and which need a store build.
                3. Updates tied to native build versions so incompatible bundles never install.
                4. A rollback of an over-the-air update rehearsed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written over-the-air update policy exists, bundles are pinned to native versions, and a rollback has been rehearsed once."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the store guidelines on downloaded and interpreted code"
                - "Write the rule for what may ship over the air"
                - "Pin update bundles to compatible native build versions"
                - "Rehearse rolling back an update on a test channel"
            - name: Background work within OS execution limits
              description: |-
                ## Purpose
                Both platforms cut background execution hard to protect battery, and some Android manufacturers go further with their own task killers. Moving sync, uploads and reminders onto WorkManager and the iOS background task APIs, with honest expectations about timing, makes background features dependable and keeps the app out of battery warnings.

                ## Milestones
                1. Every background task in the app listed with its trigger and how urgent it is.
                2. Deferrable work moved to WorkManager on Android and BGTaskScheduler on iOS.
                3. Battery and network use measured for a day of normal use on a real device.
                4. Behaviour checked on at least one manufacturer known for aggressive battery saving.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All background work runs through the platform schedulers, and a one-day battery measurement shows no background warnings on the reference devices."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every timer, service and background fetch in both apps"
                - "Move deferrable work onto the platform schedulers"
                - "Measure a day of battery and data use on a real device"
                - "Test background sync on a phone with aggressive battery saving"
---

# Mobile App Engineering

This area is for engineers and teams who build and ship mobile apps, whether that is one person with a cross-platform app in both stores or a team running separate native iOS and Android codebases. It starts with the foundations (the framework decision, the device matrix, store accounts, signing keys, reproducible builds and crash reporting), moves through the routines that keep a live app healthy, the skills behind lifecycle, concurrency, declarative UI, profiling and accessibility, the decisions about offline storage, forced updates and test devices, the dated events such as a first submission or a target API deadline, the situations a solo developer, a web team or an inheriting team faces, and finally specialist work on shared modules, over-the-air updates and background execution.

What repeats is a Monday crash and ANR triage, a Thursday pass over store reviews, a Friday staged rollout check, monthly looks at store policy, app size, the device lab and certificate expiry, quarterly SDK, accessibility, deep link and flag audits, and the yearly OS beta cycle. The Operational checklist, Metrics log, Remediation plan and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
