---
id: software-engineering.desktop-app-engineering
name: Desktop App Engineering
description: "A framework decision, signing identities you control, notarised installers, auto-updates that roll out in stages, crash dumps you can read, and offline data that survives every upgrade on Windows, macOS and Linux."
category: business
version: 1.0.0
tags: [software-engineering, desktop-app-engineering, engineer, electron, tauri, code-signing, auto-update, installers, offline-first]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Desktop App Engineering
          description: "Building cross-platform desktop applications, handling installers, auto-updates, code signing, native integration and offline-first data."
          projects:
            - name: Desktop framework decision for Electron, Tauri, Qt or native
              description: |-
                ## Purpose
                The shell you choose fixes your download size, memory footprint, language, hiring pool and how close you can get to each operating system for years. Electron brings a whole Chromium per app, Tauri uses the system webview with a Rust core, Qt and .NET MAUI need C++ or C# skills, and fully native means two or three codebases. Deciding with written criteria now stops the question coming back every time someone complains about RAM.

                ## Milestones
                1. Five to seven weighted criteria agreed, such as install size, memory at idle, native API reach, team skills and licence terms.
                2. A spike of the same two screens built in the two strongest candidates.
                3. Idle memory, cold start time and installer size measured for each spike on Windows and macOS.
                4. A decision record naming the chosen framework, the runner-up and the conditions that would reopen the choice.

                ## Notes
                Check licence terms early: Qt has commercial and open source licences with different obligations, and some webview behaviour differs between WebView2 on Windows, WKWebView on macOS and WebKitGTK on Linux.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record exists with scored criteria, spike measurements for at least two frameworks and the chosen shell named."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List the native features the app must reach, such as tray, file system and notifications"
                - "Build the same two screens as a spike in the top two frameworks"
                - "Measure idle memory, cold start and installer size for each spike"
                - "Write the decision record with the reopen conditions"
            - name: Supported OS versions and CPU architecture matrix
              description: |-
                ## Purpose
                Windows on x64 and ARM64, macOS on Intel and Apple silicon, and a handful of Linux distributions multiply into a test burden that silently grows unless someone writes it down. A published matrix tells support what to promise, tells CI what to build and tells sales which customers are out of scope.

                ## Milestones
                1. Install base or target market data gathered for OS version and architecture.
                2. A matrix of supported OS versions, architectures and Linux distributions with a minimum for each.
                3. The minimum versions reflected in installer checks and the app's system requirements page.
                4. A rule written for when a version leaves the matrix, such as twelve months after the vendor ends support.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published support matrix lists every OS version and architecture the app supports, and the installer refuses anything below the minimum."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull OS version and architecture figures from telemetry or customer data"
                - "Draft the matrix of OS versions, architectures and Linux distributions"
                - "Add a minimum version check to each installer"
                - "Publish the system requirements page from the matrix"
            - name: Code signing certificates for Windows and macOS
              description: |-
                ## Purpose
                Unsigned Windows installers trigger SmartScreen warnings that scare most users away, and unsigned macOS apps are blocked by Gatekeeper by default. Buying a Windows code signing certificate, enrolling in the Apple Developer Program under the organisation and recording who holds each key is the first gate to any public release.

                ## Milestones
                1. An Apple Developer Program membership held by the organisation, with a Developer ID Application and Installer certificate issued.
                2. A Windows code signing certificate bought, with the private key on a hardware token, an HSM or a cloud signing service as current rules require.
                3. The legal entity name on both certificates matching what users will see in the publisher field.
                4. A custody note naming who can sign, where the keys live and who renews them.

                ## Notes
                Start from the **Purchase decision** template. Certificate authorities now issue Windows signing keys only on hardware or cloud HSMs, so plan how CI will reach the key before you buy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Valid Windows and Apple Developer ID signing identities exist in the organisation's name, with a written custody note for each key."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check whether the organisation already holds an Apple Developer account"
                - "Compare three certificate authorities or cloud signing services for Windows"
                - "Buy the Windows certificate and complete the organisation validation"
                - "Write the custody note for both signing identities"
            - name: Apple notarisation in the macOS build
              description: |-
                ## Purpose
                Since macOS Catalina, apps distributed outside the Mac App Store must be notarised by Apple or users see a warning they cannot easily click past. Wiring notarisation and stapling into the build means every DMG or pkg that leaves CI opens cleanly on a fresh Mac, rather than someone running notarytool by hand on release night.

                ## Milestones
                1. The hardened runtime enabled with only the entitlements the app actually needs.
                2. An App Store Connect API key stored as a CI secret for notarytool.
                3. Every release build submitted, notarised and stapled automatically.
                4. A clean Mac, with no developer tools, opening the downloaded app with no Gatekeeper warning.

                ## Notes
                Most notarisation failures come from unsigned nested binaries, such as helper processes or native modules inside the bundle. Sign from the inside out.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The CI release job produces a notarised, stapled macOS build that passes spctl assessment on a clean machine."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every binary inside the app bundle that needs its own signature"
                - "Trim the entitlements file to what the app uses"
                - "Add notarytool submission and stapling to the release job"
                - "Open the downloaded build on a clean Mac and check Gatekeeper accepts it"
            - name: Reproducible local builds on all three platforms
              description: |-
                ## Purpose
                Builds for the desktop pull in native toolchains, such as Visual Studio build tools, Xcode, a Rust toolchain or Python for node-gyp, and each new engineer loses a day finding the right versions. A pinned, documented build per platform means anyone can produce an identical installer from a clean checkout.

                ## Milestones
                1. Toolchain versions pinned in the repository for Windows, macOS and Linux.
                2. One command per platform that produces an unsigned installer from a clean checkout.
                3. A new engineer or a fresh virtual machine completing the build from the instructions alone.
                4. Build output compared between two machines and differences explained.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clean checkout builds an installer on each supported platform with one documented command, verified on a fresh machine."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Record the exact toolchain versions used on the current build machine"
                - "Pin the versions in the repository for each platform"
                - "Write the one command build instructions per platform"
                - "Run the build on a fresh virtual machine and fix what breaks"
            - name: Process model and IPC boundary design
              description: |-
                ## Purpose
                Every desktop framework splits work between a privileged process and a user interface, whether that is Electron's main and renderer, Tauri's Rust core and webview, or a Qt app with worker threads. Drawing the boundary deliberately, with a typed message contract, keeps file system and network access out of the UI layer and stops the IPC channel becoming an untyped grab bag.

                ## Milestones
                1. A diagram of each process or thread, what it owns and what it may access.
                2. A typed list of every IPC message or command, with its arguments and return shape.
                3. Privileged operations, such as file writes and shell calls, reachable only through named commands.
                4. A review rule that new IPC commands need a second engineer's sign-off.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A process diagram and a typed IPC contract are in the repository, and no renderer code calls privileged APIs directly."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draw the current processes and what each one can reach"
                - "Inventory every IPC message the app sends today"
                - "Replace untyped channels with named, typed commands"
                - "Add the IPC review rule to the contribution guide"
            - name: Crash reporting with minidumps and symbol upload
              description: |-
                ## Purpose
                Crashes on the desktop happen in native code, GPU drivers and webviews as well as your own code, and without minidumps and symbols the reports are just addresses. Capturing native and JavaScript crashes, uploading symbols from every release build and grouping them in one place is what makes a crash on someone else's laptop fixable.

                ## Milestones
                1. A crash reporting service chosen that accepts minidumps from Windows, macOS and Linux.
                2. Native crashes, renderer crashes and unhandled exceptions all reaching the service.
                3. Debug symbols or PDB files uploaded automatically by every release build.
                4. A deliberate test crash from a release build showing a readable, symbolicated stack.

                ## Notes
                Ask for consent where your users' jurisdictions require it, and scrub file paths that contain user names before upload.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test crash from a signed release build appears in the crash service with a fully symbolicated stack on each supported OS."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check which crash services accept minidumps from all three platforms"
                - "Wire the crash reporter into the main and UI processes"
                - "Add symbol upload to the release build job"
                - "Trigger a test crash on each OS and confirm the stack is readable"
            - name: Application data folders and settings layout per OS
              description: |-
                ## Purpose
                Users expect settings in AppData on Windows, Application Support on macOS and the XDG folders on Linux, and admins expect caches they can delete without losing work. Deciding once where settings, user data, caches and logs live, and what survives an uninstall, prevents the classic bug where an update wipes someone's local database.

                ## Milestones
                1. A table of settings, user data, cache and log locations for each OS.
                2. The app reading and writing only through one path helper that follows the table.
                3. Uninstall behaviour written down: what is removed, what is kept and why.
                4. A schema version stored with user data so future migrations know what they are upgrading.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All file locations come from one path helper that matches a documented per-OS table, and an upgrade test confirms user data survives."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the code for hard-coded file paths"
                - "Write the per-OS table of settings, data, cache and log folders"
                - "Route all file access through a single path helper"
                - "Add a schema version file beside the user data"
            - name: Signed installers for every platform from CI
              description: |-
                ## Purpose
                Building release installers on a developer's laptop means the signing key lives there too, and a release depends on one person being online. A CI matrix that builds, signs and notarises installers for each OS and architecture makes every release repeatable and keeps keys off personal machines.

                ## Milestones
                1. A CI matrix producing installers for every row of the support matrix.
                2. Signing performed in CI through the token, HSM or cloud signing service, with no key files in the repository.
                3. Artifacts named with version, OS and architecture and kept for at least ninety days.
                4. Nightly builds from the main branch signed the same way as releases.

                ## Notes
                Windows ARM64 and macOS universal builds often need their own runners or cross-compilation steps, so budget for them from the start.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tagged commit produces signed installers for every supported OS and architecture in CI without anyone touching a local machine."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Map each support matrix row to a CI runner or cross-compile step"
                - "Connect CI to the signing service without exporting the key"
                - "Set artifact naming and a ninety-day retention rule"
                - "Review failed nightly signed builds and fix the cause @recurring(weekly:fri)"
            - name: Auto-update service with stable and beta channels
              description: |-
                ## Purpose
                Few users ever download a new version by hand, so the update path is how fixes reach them at all. Running an update feed with a beta channel for volunteers and a stable channel for everyone else, using a tested updater such as Squirrel, Sparkle or the framework's own, lets you catch problems with a few hundred people before they reach thousands.

                ## Milestones
                1. An updater chosen per platform and an update feed hosted on infrastructure you control.
                2. Separate beta and stable channels, with an in-app setting to join the beta.
                3. Updates downloaded in the background and applied on restart, with a clear prompt.
                4. A written rule for how long a build sits in beta before promotion to stable.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every release reaches the beta channel first and is promoted to stable only after the agreed soak time with no blocking crash."
                cadence: rolling
              tasks:
                - "Check which updater each target platform's packaging supports"
                - "Host the update feed under the organisation's own domain"
                - "Add the beta channel option to the app's settings screen"
                - "Promote the soaked beta build to the stable channel @recurring(monthly:12)"
            - name: Weekly crash dump triage
              description: |-
                ## Purpose
                Crash dashboards fill with noise from GPU drivers, antivirus injection and one-off hardware faults, and real regressions hide among them. A short weekly triage that groups, assigns and closes crash clusters keeps the crash-free rate honest and catches a bad release while it is still in beta.

                ## Milestones
                1. The top ten crash clusters reviewed each week, by affected users not raw count.
                2. Each cluster labelled as ours, third party, driver or environment.
                3. Every cluster above the agreed threshold given an owner and a ticket.
                4. A monthly note of the crash-free session rate per OS and version.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top ten crash clusters are labelled and owned every week, and a monthly crash-free rate is recorded per OS."
                cadence: rolling
              tasks:
                - "Set the affected-users threshold that makes a cluster ticket-worthy"
                - "Triage the top ten crash clusters and assign owners @recurring(weekly:mon)"
                - "Record the crash-free session rate per OS and version @recurring(monthly:3)"
                - "Close clusters fixed in a released build"
            - name: Monthly desktop release train
              description: |-
                ## Purpose
                Releases that ship when a feature feels done drift into large, risky bundles that are hard to roll back. A fixed monthly cut, with a beta soak and a stable promotion date, gives users a predictable rhythm and keeps each update small enough to diagnose.

                ## Milestones
                1. A calendar with cut, beta and stable dates for the next six releases.
                2. A release branch cut on the agreed day with whatever is ready behind flags.
                3. Release notes drafted from merged changes before the beta goes out.
                4. A short retrospective note after each release on anything that slipped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly releases are cut on their scheduled day, each with release notes and a beta soak before stable."
                cadence: cyclic
              tasks:
                - "Publish the cut, beta and stable dates for the next six releases"
                - "Cut the release branch and tag the beta build @recurring(monthly:8)"
                - "Draft user-facing release notes from the merged changes"
                - "Note anything that slipped and why after each release"
            - name: Staged update rollout monitoring
              description: |-
                ## Purpose
                Pushing an update to every installed copy at once means a bad build bricks everyone before the first crash report arrives. Rolling stable updates out in stages, such as five, twenty-five and one hundred percent, with a check between each, turns a potential company-wide outage into a small, reversible problem.

                ## Milestones
                1. The update feed able to serve a build to a percentage of installations.
                2. Stage percentages and minimum hours between stages agreed.
                3. Halt criteria written, such as a crash rate rise or a spike in support tickets.
                4. Every stable release in the last quarter rolled out through all stages with a recorded check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stable release passes through at least three rollout stages, with a recorded go or halt decision at each."
                cadence: rolling
              tasks:
                - "Add percentage rollout support to the update feed"
                - "Write the halt criteria for crash rate and support tickets"
                - "Check the current rollout stage against the halt criteria @recurring(weekly:thu)"
                - "Record each go or halt decision in the release log"
            - name: Signing certificate and notarisation key expiry calendar
              description: |-
                ## Purpose
                An expired Windows certificate or Apple Developer ID stops releases on the day you most need one, and an expired Apple membership can stop new installs. A calendar of every certificate, API key and membership with renewal lead times makes renewal a routine task rather than a release-day emergency.

                ## Milestones
                1. Every signing certificate, notarisation API key, timestamp service and developer membership listed with expiry dates.
                2. Renewal reminders set at least sixty days before each expiry.
                3. Timestamping confirmed on all signed builds so they stay valid after the certificate expires.
                4. Renewal steps written for each item so anyone on the team can do it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar lists every signing credential with expiry, owner and renewal steps, and none has expired in the past year."
                cadence: rolling
              tasks:
                - "List every certificate, API key and membership with its expiry date"
                - "Confirm release builds are timestamped when signed"
                - "Check the calendar for anything expiring in the next ninety days @recurring(monthly:20)"
                - "Renew the Apple Developer Program membership and review all credentials @recurring(yearly)"
            - name: Yearly OS preview compatibility cycle
              description: |-
                ## Purpose
                Apple ships a macOS beta each June and a release in the autumn, and Windows previews arrive through the Insider channels, and both regularly break permissions, webviews and window behaviour. Testing on the previews early means your fixes ship before users upgrade, not after the support queue fills.

                ## Milestones
                1. A test machine or virtual machine enrolled in each OS preview programme.
                2. The core user workflows run on the first preview of each major release.
                3. Breaking changes logged with an owner and target release.
                4. A compatible build released before the new OS reaches general availability.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A build tested on the new macOS and Windows releases ships before their general availability each year, with issues logged."
                cadence: cyclic
              tasks:
                - "Enrol a spare machine or virtual machine in the OS preview programmes"
                - "Run the core workflows on the first macOS beta each June @recurring(yearly)"
                - "Check the latest Windows Insider build for regressions @recurring(quarterly)"
                - "Log each breaking change with an owner and target release"
            - name: Runtime and webview upgrade cadence
              description: |-
                ## Purpose
                Electron ships a new major roughly every eight weeks and supports only the latest few, Tauri tracks the system webview, and Qt has its own long-term support releases. Falling more than one supported version behind leaves known Chromium security holes in your app, so a standing upgrade slot keeps the runtime current without a crisis.

                ## Milestones
                1. The runtime's support window and release rhythm written down.
                2. A monthly slot to read release notes and test the next version on a branch.
                3. The app never more than one supported major behind the latest.
                4. Breaking changes from each upgrade recorded for the next person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The app's runtime has stayed within the vendor's supported versions for twelve consecutive months, with upgrade notes kept."
                cadence: rolling
              tasks:
                - "Write down the runtime's current support window"
                - "Test the next runtime version on a branch @recurring(monthly:15)"
                - "Record breaking changes met during each upgrade"
                - "Merge the upgrade once the core workflows pass on every OS"
            - name: Clean machine installer smoke test
              description: |-
                ## Purpose
                Developer machines already have runtimes, fonts and redistributables installed, so an installer that works there can fail on a fresh laptop with a missing Visual C++ runtime or WebView2. Running each release installer on clean virtual machine snapshots catches the failures your users would otherwise find first.

                ## Milestones
                1. Clean virtual machine snapshots for each OS in the support matrix.
                2. A checklist covering install, first launch, update from the previous version and uninstall.
                3. The checklist run against every stable release before promotion.
                4. Failures logged with the snapshot and installer version.

                ## Notes
                Start from the **Operational checklist** template. Include a standard user account without admin rights, because per-user installs behave differently.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stable release passes install, upgrade and uninstall on clean snapshots of each supported OS before promotion."
                cadence: rolling
              tasks:
                - "Create clean virtual machine snapshots for each supported OS"
                - "Write the install, upgrade and uninstall checklist"
                - "Run the checklist on the latest release candidate @recurring(monthly:25)"
                - "Log any failure with the snapshot name and installer version"
            - name: Memory, startup and installer size budget
              description: |-
                ## Purpose
                Over time an app grows heavier one dependency at a time until users notice the fan spinning or the download taking minutes. Setting budgets for idle memory, cold start time and installer size, and measuring them on the same reference machines each month, shows a regression in the release where it happened.

                ## Milestones
                1. Reference machines chosen, including one low-end Windows laptop.
                2. Budgets set for idle memory, cold start and installer size per OS.
                3. Measurements recorded for each release in one log.
                4. Any budget breach traced to a change and either fixed or the budget consciously raised.

                ## Notes
                Start from the **Metrics log** template. Measure cold start after a reboot, not a warm relaunch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds idle memory, cold start and installer size for every release over six months, with breaches explained."
                cadence: rolling
              tasks:
                - "Pick reference machines including one low-end Windows laptop"
                - "Set budgets for idle memory, cold start and installer size"
                - "Measure the latest build against the budgets @recurring(monthly:5)"
                - "Trace any breach to the change that caused it"
            - name: SmartScreen and antivirus false positive watch
              description: |-
                ## Purpose
                A new Windows certificate starts with no reputation, and heuristic antivirus engines sometimes flag Electron or packed binaries as malware, which can stop corporate installs overnight. Checking reputation and scan results for each release, and knowing how to submit false positives, keeps a detection from turning into a week of lost users.

                ## Milestones
                1. Each release installer scanned with a multi-engine scanning service before publishing.
                2. False positive submission links for the major antivirus vendors kept in one document.
                3. SmartScreen behaviour checked on a clean Windows machine for every new certificate.
                4. A support macro ready for users who see a warning.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every release is scanned before publishing and any detection is submitted to the vendor within two working days."
                cadence: rolling
              tasks:
                - "Collect the false positive submission pages for major antivirus vendors"
                - "Scan the latest installer with a multi-engine service @recurring(monthly:27)"
                - "Write a support reply for users who see a SmartScreen warning"
                - "Submit any detection to the vendor with the signed installer"
            - name: Event loop and UI thread blocking in desktop apps
              description: |-
                ## Purpose
                One synchronous file read or a heavy JSON parse on the main thread freezes every window, and on Windows the title bar shows Not Responding within seconds. Studying how your framework schedules work, and where blocking calls hide, is the skill behind an app that stays responsive with large files.

                ## Milestones
                1. The framework's threading model explained in a one-page note: main process, UI thread, workers.
                2. Three blocking calls found in the current code with a profiler.
                3. Those calls moved to a worker, a background thread or an async API.
                4. A lint rule or review check that flags synchronous file and network calls on the main thread.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A threading note exists and three main thread blocking calls have been found, moved and guarded by a review rule."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the framework's documentation on its threading model"
                - "Profile opening the largest realistic file the app handles"
                - "Move the three worst blocking calls off the main thread"
                - "Add a lint rule for synchronous file calls in the main process"
            - name: Native menus, shortcuts and platform conventions
              description: |-
                ## Purpose
                Mac users expect the app menu, Command shortcuts and Preferences under the app name, while Windows users expect a menu or ribbon in the window, Control shortcuts and Settings. Learning the platform guidelines and applying them makes a cross-platform app feel native on each OS instead of foreign on all of them.

                ## Milestones
                1. The Apple Human Interface Guidelines and Windows design guidance read for menus and shortcuts.
                2. A table of every menu item and shortcut per platform.
                3. Conflicting shortcuts, such as ones reserved by the OS, removed.
                4. Window close behaviour matching each platform, such as staying in the Dock on macOS.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A per-platform menu and shortcut table is implemented, with no shortcuts that clash with OS-reserved ones."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the menu and keyboard sections of each platform's design guidelines"
                - "List every menu item and shortcut the app has today"
                - "Map each shortcut to its correct modifier per platform"
                - "Test window close and quit behaviour on macOS and Windows"
            - name: File associations, custom URL schemes and single instance
              description: |-
                ## Purpose
                Double-clicking a document, clicking a link from a browser that opens your app, or launching it twice all route through OS mechanisms that differ on each platform. Getting registration, argument parsing and single-instance hand-off right is what makes an app feel integrated rather than bolted on.

                ## Milestones
                1. File types and a custom URL scheme registered by the installer on each OS.
                2. Opening a file or link while the app is closed and while it is open both landing on the right window.
                3. A second launch handing its arguments to the running instance and exiting.
                4. Incoming URLs validated so a malicious link cannot trigger an unsafe action.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "File and link opens work from a cold start and a running app on every OS, with incoming URLs validated against an allowed list."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read how each OS registers file types and URL schemes"
                - "Register the app's document type and URL scheme in each installer"
                - "Implement the single-instance lock and argument hand-off"
                - "Validate incoming URLs against a list of allowed actions"
            - name: Reading Windows and macOS crash reports
              description: |-
                ## Purpose
                Crash reports on Windows arrive as minidumps for WinDbg or Visual Studio, and on macOS as ips reports from the system, and many engineers have never opened either. Practising on real reports teaches you to tell your bug from a driver fault or an injected antivirus DLL.

                ## Milestones
                1. WinDbg or Visual Studio set up with the symbol server for your release builds.
                2. Three real Windows minidumps opened and their faulting module identified.
                3. Three macOS crash reports read, including the exception type and crashed thread.
                4. A short guide for the team on reading each format.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six real crash reports have been analysed across Windows and macOS and a team guide to reading them is published."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Install WinDbg and point it at your symbol store"
                - "Open three Windows minidumps and name the faulting module in each"
                - "Read three macOS crash reports and note the crashed thread"
                - "Ask the agent to draft a one-page team guide from your notes"
            - name: Profiling desktop CPU, memory and leaks
              description: |-
                ## Purpose
                Because sessions last for days on the desktop, a small leak per document becomes gigabytes by Friday. Learning the right profiler for each layer, such as Chrome DevTools for renderers, Instruments on macOS and Windows Performance Analyzer, lets you find leaks and hot paths instead of guessing.

                ## Milestones
                1. A heap snapshot comparison done before and after opening and closing ten documents.
                2. One leak found and fixed, with the before and after memory recorded.
                3. A CPU trace of the slowest user action read and its hot path named.
                4. A long-running soak test that records memory over eight hours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One memory leak has been found and fixed with measured results, and an eight-hour soak test records memory per build."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Take heap snapshots before and after opening ten documents"
                - "Find the retained objects that should have been freed"
                - "Record a CPU trace of the slowest user action"
                - "Set up an eight-hour soak test that logs memory"
            - name: Desktop screen reader and keyboard accessibility
              description: |-
                ## Purpose
                Desktop apps are used for work, and screen reader users on NVDA, Narrator and VoiceOver depend on correct roles, focus order and keyboard access, and some customers need it to buy. A first pass with each screen reader shows how far the app is from usable and gives a fix list ranked by workflow.

                ## Milestones
                1. The core workflows completed with keyboard only on Windows and macOS.
                2. Each workflow run with NVDA or Narrator and with VoiceOver, with failures noted.
                3. The worst five failures fixed, such as unlabelled buttons or focus traps in dialogs.
                4. Accessibility checks added to the release checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The core workflows can be completed with keyboard only and with a screen reader on Windows and macOS, checked each quarter."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Complete the main workflow using the keyboard only"
                - "Run the same workflow with NVDA and with VoiceOver"
                - "Fix the five worst failures you found"
                - "Repeat the screen reader pass on the current release @recurring(quarterly)"
            - name: High DPI, multiple monitors and window state restore
              description: |-
                ## Purpose
                Mixed-DPI setups, a laptop docked to two monitors and a window last seen on a screen that is no longer attached are everyday for desktop users and rare on developer desks. Understanding per-monitor DPI and saving window state safely prevents blurry text and windows that open off screen.

                ## Milestones
                1. Per-monitor DPI awareness enabled and text checked at 100, 150 and 200 percent scaling.
                2. Window size, position and maximised state saved and restored between launches.
                3. Restored windows clamped to a visible display when a monitor is missing.
                4. Behaviour checked when dragging a window between monitors with different scaling.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The app renders sharply at three scaling levels and always restores its window onto a connected display."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check the app at 100, 150 and 200 percent display scaling"
                - "Save window size, position and maximised state on close"
                - "Clamp restored windows to the displays currently attached"
                - "Drag a window between monitors with different scaling and fix glitches"
            - name: Native modules and FFI for platform APIs
              description: |-
                ## Purpose
                Sooner or later the app needs something the framework does not expose, such as a Windows credential API, a macOS share extension or a hardware SDK. Learning to write a small native module, through N-API, a Tauri plugin in Rust or a Qt platform class, and to ship it for every architecture, keeps you from being stuck at the framework's edge.

                ## Milestones
                1. One platform API the app needs chosen as the learning target.
                2. A native module or plugin calling it on Windows and macOS.
                3. The module built for every architecture in the support matrix by CI.
                4. Errors from native code surfaced to the UI instead of crashing the process.

                ## Notes
                Native modules must be rebuilt for each runtime and architecture, and prebuilt binaries in npm packages are a common source of crashes after an upgrade.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A native module calling one platform API runs on every supported architecture, built by CI, with errors handled in the UI."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick one platform API the framework does not expose"
                - "Write a minimal native module that calls it"
                - "Add the module to the CI build for each architecture"
                - "Return native errors to the UI as readable messages"
            - name: Installer format choice per platform
              description: |-
                ## Purpose
                Windows alone offers MSI, MSIX, NSIS and Squirrel, macOS has DMG and pkg, and Linux has deb, rpm, AppImage, Flatpak and Snap, and each choice changes updating, admin rights and enterprise deployment. Picking deliberately per platform, against your users and your updater, avoids reshipping installers a year in.

                ## Milestones
                1. Requirements written: per-user or per-machine install, admin rights, silent install and updater support.
                2. Two candidate formats per platform compared against the requirements.
                3. One format chosen per platform, plus any secondary format for enterprise customers.
                4. The choice recorded with the trade-offs accepted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record names one installer format per platform with requirements met and trade-offs stated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the install requirements: rights, scope, silent install, updater"
                - "Compare two formats per platform against them"
                - "Check which formats your updater supports"
                - "Record the chosen format per platform with its trade-offs"
            - name: Local database choice for offline-first data
              description: |-
                ## Purpose
                Desktop users expect to work on a plane and close the lid mid-edit without losing anything. Choosing an embedded store, such as SQLite, an embedded key-value store or plain files with a journal, against write safety, migration support and size decides whether data survives power loss and every future upgrade.

                ## Milestones
                1. Data shapes, expected sizes and query patterns listed.
                2. Two or three embedded stores compared on crash safety, migrations and tooling.
                3. A power-loss test run against the leading option.
                4. The store chosen and a schema migration approach agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An embedded store is chosen after a recorded comparison and a power-loss test, with a migration approach written down."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the data the app keeps locally and its expected size"
                - "Compare candidate stores on crash safety and migrations"
                - "Kill the process mid-write in a test and check the data"
                - "Write the schema migration approach for future versions"
            - name: Sync and conflict handling for offline edits
              description: |-
                ## Purpose
                Once a user edits on two laptops, or offline for a week, the server and the device disagree and someone's work is at risk. Deciding the conflict rule, whether last write wins, field-level merge or a CRDT, and showing conflicts honestly protects data that people cannot easily recreate.

                ## Milestones
                1. The conflict cases that matter written as concrete scenarios.
                2. A conflict strategy chosen per data type.
                3. A sync queue that survives restarts and retries with backoff.
                4. Conflicts that cannot be merged shown to the user rather than silently dropped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Scripted tests of the written conflict scenarios pass, and no unmergeable edit is lost without the user being told."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write five concrete conflict scenarios from real usage"
                - "Choose a conflict strategy for each data type"
                - "Make the sync queue persist across restarts"
                - "Build the screen that shows unmergeable conflicts"
            - name: Electron and webview security hardening
              description: |-
                ## Purpose
                A webview with Node integration or a broad IPC bridge turns any cross-site scripting bug into code execution on the user's machine. Turning on context isolation and the sandbox, setting a strict content security policy and blocking navigation to unknown origins closes the most common desktop attack paths.

                ## Milestones
                1. Node integration off and context isolation and sandbox on for every window.
                2. A strict content security policy applied to all local and remote content.
                3. Navigation and new window creation limited to an allowed list of origins.
                4. The framework's security checklist reviewed line by line with gaps ticketed.

                ## Notes
                Electron and Tauri both publish security checklists. Remote content loaded into a privileged window is the single riskiest pattern, so remove it first.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every window runs with isolation and sandbox enabled, a strict CSP and an origin allow list, reviewed against the framework checklist each quarter."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every window and webview with its current security settings"
                - "Turn on context isolation and the sandbox for each window"
                - "Restrict navigation and new windows to allowed origins"
                - "Review the framework security checklist against the app @recurring(quarterly)"
            - name: Cold start time reduction
              description: |-
                ## Purpose
                Desktop users judge an app in the seconds between double-click and a usable window, and a slow start on an older laptop is the most common performance complaint. Measuring each phase of startup and deferring what the first screen does not need often halves the time.

                ## Milestones
                1. Cold start timed on the low-end reference machine, broken into phases.
                2. Modules and services loaded at startup listed with their cost.
                3. Non-essential work deferred until after the first window is shown.
                4. Cold start reduced by an agreed percentage and recorded in the budget log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cold start on the low-end reference machine is reduced by the agreed percentage and the new figure is in the budget log."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Add timing marks for each startup phase"
                - "List everything loaded before the first window appears"
                - "Defer non-essential modules until after first paint"
                - "Measure the new cold start on the low-end machine"
            - name: Credentials in the OS keychain and credential store
              description: |-
                ## Purpose
                Tokens saved in a settings file can be copied by any process running as the user and end up in backups and support bundles. Storing secrets in the macOS Keychain, Windows Credential Manager or the Linux Secret Service keeps them protected by the OS and out of logs.

                ## Milestones
                1. Every secret the app stores listed with where it lives today.
                2. Secrets moved to the platform credential store through one wrapper.
                3. A fallback defined for Linux machines without a secret service.
                4. Old plaintext copies removed during the upgrade migration.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No token or password is stored in app files on any OS, and upgraded installations have had plaintext copies removed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search settings and data files for stored tokens"
                - "Wrap the OS credential stores behind one interface"
                - "Migrate existing secrets and delete plaintext copies on upgrade"
                - "Check support bundles and logs no longer contain secrets"
            - name: Update signature verification and rollback
              description: |-
                ## Purpose
                An update channel that does not check signatures is a remote code execution path for anyone who can tamper with the feed or the download. Verifying every update against a key you control, and keeping the previous version to fall back to, protects users from both attackers and your own bad builds.

                ## Milestones
                1. Every update package signed and verified by the client before it is applied.
                2. The update signing key stored separately from the code signing key, with custody recorded.
                3. A failed update leaving the previous version runnable.
                4. A tampered package test that the client rejects.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tampered update package is rejected by the client in a test, and a failed update leaves the previous version working."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check whether the updater verifies signatures today"
                - "Generate an update signing key and record its custody"
                - "Test that a modified package is rejected"
                - "Simulate a failed install and confirm the old version still starts"
            - name: Installer and download size reduction
              description: |-
                ## Purpose
                Every megabyte matters for users on metered connections and for the update servers that send each release to every installation. Auditing what goes into the bundle, such as unused locales, duplicate dependencies and debug symbols, usually removes a noticeable share without touching features.

                ## Milestones
                1. A breakdown of the installer by component and dependency.
                2. Unused locales, source maps and debug symbols excluded from the shipped bundle.
                3. Duplicate or oversized dependencies replaced or trimmed.
                4. The size reduction recorded against the budget log.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The installer for each OS is smaller by a recorded amount, with a component breakdown kept in the repository."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Unpack the installer and list its largest components"
                - "Exclude unused locales and debug symbols from the bundle"
                - "Replace one oversized dependency with a lighter one"
                - "Record the new installer size per OS"
            - name: Telemetry with consent and an off switch
              description: |-
                ## Purpose
                Usage data shows which features matter and which OS versions to keep, but desktop users and their employers are wary of apps that phone home. Collecting a small, documented set of events with clear consent and an easy off switch earns trust and still answers the questions that matter.

                ## Milestones
                1. The questions telemetry must answer written first, then the minimal events for each.
                2. A consent prompt on first run and a setting to turn telemetry off.
                3. A public list of every event and field collected.
                4. An admin policy key that disables telemetry for managed machines.

                ## Notes
                Check consent requirements with whoever handles privacy for your organisation, since rules differ between jurisdictions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Telemetry runs only with consent, every event is publicly documented, and an admin policy can disable it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the five product questions telemetry must answer"
                - "Define the minimal events and fields for each question"
                - "Add the consent prompt and the off switch"
                - "Review collected events against the public list @recurring(quarterly)"
            - name: First public release on Windows, macOS and Linux
              description: |-
                ## Purpose
                On first release day, signing, notarisation, the update feed, the download page and support all have to work at once, for strangers. Treating it as a dated event with a dry run catches the broken download link and the missing Linux dependency before users do.

                ## Milestones
                1. A release date set with a dry run one week earlier.
                2. Signed installers for every platform downloadable from the public page.
                3. The update feed tested by upgrading from a pre-release build.
                4. A support inbox and known issues page live on release day.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Signed installers for all supported platforms are public on the set date, and a pre-release build updates to them successfully."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Set the release date and the dry run date"
                - "Run the dry run release from tag to download page"
                - "Upgrade a pre-release install through the update feed"
                - "Publish the download page and known issues page"
            - name: Mac App Store and Microsoft Store submission
              description: |-
                ## Purpose
                Store distribution brings trust, payments and managed installs, but the Mac App Store requires the app sandbox and its own review, and the Microsoft Store expects MSIX or a registered installer. Planning the submission as an event, with sandbox changes made early, avoids weeks of rejection loops.

                ## Milestones
                1. Store accounts, listings, screenshots and privacy details prepared.
                2. The macOS build running under the app sandbox with only needed entitlements.
                3. A store-specific build that disables the self-updater.
                4. Both store submissions approved and live.

                ## Notes
                Store builds must not update themselves, so keep a build flag that removes the auto-updater.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The app is approved and listed in both the Mac App Store and the Microsoft Store, with the self-updater removed from store builds."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Read the current review guidelines for both stores"
                - "Run the macOS build under the app sandbox and log what breaks"
                - "Add a build flag that removes the auto-updater for store builds"
                - "Submit both builds and answer reviewer questions"
            - name: Native Apple silicon and Windows on ARM builds
              description: |-
                ## Purpose
                Running under Rosetta or Windows x64 emulation costs battery and speed, and native ARM laptops are now a large share of new machines. Shipping native ARM64 builds, as a universal Mac binary and a separate or combined Windows package, is a release with its own testing and launch date.

                ## Milestones
                1. Every native dependency confirmed to have an ARM64 build.
                2. A universal macOS build and a Windows ARM64 build produced by CI.
                3. The update feed serving the right architecture to each machine.
                4. The ARM builds tested on real hardware and released.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Native ARM64 builds for macOS and Windows are released and the update feed serves each architecture correctly."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List native dependencies and check each for ARM64 support"
                - "Add the ARM64 targets to the CI build matrix"
                - "Make the update feed pick the build by architecture"
                - "Test on real ARM hardware before release"
            - name: Recovering from a broken auto-update
              description: |-
                ## Purpose
                Sooner or later an update ships that crashes on launch, corrupts settings or cannot update itself, and the usual fix path is the thing that is broken. Having a written recovery plan, with a way to halt the feed, publish a fix and reach users stuck on the bad version, decides whether it costs an afternoon or a month.

                ## Milestones
                1. A halt switch on the update feed that anyone on the release rota can use.
                2. A recovery runbook covering crash on launch, data corruption and broken updater cases.
                3. A manual download path and support message ready for stuck users.
                4. A drill run against a deliberately broken beta build.

                ## Notes
                Start from the **Remediation plan** template. Keep the updater code path as small and stable as possible, because a bug there removes your way to ship the fix.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recovery runbook exists and a drill has halted the feed and moved a test machine off a broken beta build."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Add a halt switch to the update feed"
                - "Write the recovery runbook for the three failure cases"
                - "Prepare the manual download page and support message"
                - "Run a drill with a deliberately broken beta build"
            - name: Signing key move to a hardware token or cloud HSM
              description: |-
                ## Purpose
                Certificate authorities now require Windows code signing keys to sit on hardware, which breaks CI set-ups that used a file, and a renewal is often the moment it bites. Planning the move as a dated change, with the new signing path proven before the old certificate expires, avoids a frozen release pipeline.

                ## Milestones
                1. The current certificate's expiry date and renewal option confirmed.
                2. A hardware token or cloud signing service chosen that CI can reach.
                3. A test build signed through the new path and verified on a clean machine.
                4. The old key revoked or retired and the custody note updated.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Release builds are signed through the new hardware or cloud signing path before the old certificate expires."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the expiry date of the current Windows certificate"
                - "Choose between a hardware token on a build machine and a cloud signing service"
                - "Sign a test build through the new path"
                - "Update the custody note and retire the old key"
            - name: Dropping support for an old OS version
              description: |-
                ## Purpose
                Keeping Windows 10 builds or old macOS versions alive blocks runtime upgrades, because Electron, WebView2 and Xcode all drop old systems on their own schedule. Planning a dated end of support, with warnings and a final compatible build, lets you move on without stranding users.

                ## Milestones
                1. The share of active installs on the old version measured.
                2. An end of support date announced in the app and on the website.
                3. A final compatible build pinned for users who cannot upgrade.
                4. The minimum version raised in the installer and the support matrix.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old OS version is out of the support matrix on the announced date, with a final compatible build available."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure active installs on the OS version you want to drop"
                - "Announce the end of support date in the app"
                - "Pin a final compatible build on the download page"
                - "Raise the installer's minimum version"
            - name: Solo developer selling a paid desktop app
              description: |-
                ## Purpose
                Selling a desktop app alone means you are also the payments desk, the licence server and the support inbox, usually in evenings. A small licence key or account check, a payment provider that handles sales tax, and a weekly support slot keep revenue flowing without the app taking over your week.

                ## Milestones
                1. A payment provider chosen that issues licence keys and handles sales tax or VAT.
                2. Licence activation that works offline for a grace period.
                3. A refund and lost-key policy published on the website.
                4. A weekly support slot that answers every message within seven days.

                ## Notes
                Keep licence checks forgiving. Paying customers locked out by a failed check cost more than the occasional pirate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Customers can buy, activate offline and recover a lost key, and every support message is answered within seven days."
                cadence: rolling
              tasks:
                - "Compare two payment providers that issue licence keys and handle VAT"
                - "Add licence activation with an offline grace period"
                - "Publish the refund and lost-key policy"
                - "Answer the support inbox in one sitting @recurring(weekly:sat)"
            - name: Web team packaging its web app as a desktop app
              description: |-
                ## Purpose
                Web teams often wrap an existing app in Electron or Tauri for offline use, notifications or a dock icon, then discover signing, updates and native menus. Scoping what the desktop version adds, and what stays shared with the web build, keeps one codebase from turning into two.

                ## Milestones
                1. A short list of what the desktop app must do that the browser cannot.
                2. The shared web code loaded locally rather than from a remote URL in a privileged window.
                3. Platform checks kept behind one small adapter module.
                4. The first signed desktop build used by the team for two weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed desktop build sharing the web codebase through one adapter module has been used daily by the team for two weeks."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the desktop-only features the wrapper must justify"
                - "Bundle the web build locally instead of loading a remote URL"
                - "Put every desktop-specific call behind one adapter module"
                - "Give the team a signed build for two weeks of daily use"
            - name: Enterprise deployment for IT administrators
              description: |-
                ## Purpose
                Company IT teams install software silently across hundreds of machines with tools such as Intune, Jamf or Group Policy, and they reject apps that need admin prompts or update themselves unpredictably. Supporting per-machine installs, managed settings and an admin guide opens the door to larger customers.

                ## Milestones
                1. A per-machine installer with documented silent install and uninstall switches.
                2. Managed settings readable from Group Policy on Windows and configuration profiles on macOS.
                3. A policy to disable or defer auto-updates on managed machines.
                4. An administrator guide tested by someone outside the team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An IT administrator can silently deploy, configure and control updates using only the published admin guide."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask two customer IT teams which deployment tools they use"
                - "Build and document the silent per-machine installer"
                - "Add policy keys for updates, telemetry and default settings"
                - "Review the admin guide against the current release @recurring(quarterly)"
            - name: Inheriting a desktop codebase with no build notes
              description: |-
                ## Purpose
                Taking over a desktop app from a departed engineer or an agency often means nobody knows where the signing keys are, which toolchain built the last release or how the update feed is hosted. Recovering those facts first, before changing any code, protects your ability to ship a fix at all.

                ## Milestones
                1. The location and owner of every signing credential and the update feed confirmed.
                2. The last released version rebuilt from source and compared with what users have.
                3. Build steps written down from the recovered process.
                4. A list of risks, such as unsupported runtimes, ranked for the first quarter.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The last release has been rebuilt from source, all signing credentials are accounted for and build steps are written down."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the previous owner where signing keys and the update feed live"
                - "Rebuild the last released version from its tag"
                - "Write the build steps as you recover them"
                - "Rank the inherited risks for the first quarter"
            - name: Air-gapped and offline installs for regulated customers
              description: |-
                ## Purpose
                Customers in defence, health or finance sometimes run machines with no internet access, so online activation, auto-updates and crash upload all fail. Offering an offline installer, a file-based update package and local diagnostics lets them use the app within their rules.

                ## Milestones
                1. Every network call the app makes listed and each made optional or configurable.
                2. An offline installer and a signed update package that can be applied from a file.
                3. Licence activation that works through an offline file exchange.
                4. A diagnostics bundle users can export and send through their own channels.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The app installs, activates, updates from a file and exports diagnostics on a machine with no network connection."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Log every network call the app makes during a normal session"
                - "Make each call optional behind a setting or policy"
                - "Build the signed file-based update package"
                - "Test the full flow on a machine with networking disabled"
            - name: Migrating from Electron to Tauri or a native shell
              description: |-
                ## Purpose
                Teams that chose Electron for speed sometimes find memory use and installer size losing them customers, and a move to Tauri or native looks tempting. Migrating window by window, with the old shell still shipping, tests whether the gains are real before the whole app is committed.

                ## Milestones
                1. Measured reasons for the move, such as idle memory and installer size, written down.
                2. Webview differences across WebView2, WKWebView and WebKitGTK checked against the app's front end.
                3. One window running in the new shell behind a flag.
                4. A go or stop decision made from measurements of that window.

                ## Notes
                Tauri on Linux depends on WebKitGTK, which can lag behind Chromium on newer web features, so test on Linux early.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One window runs in the new shell and a recorded go or stop decision compares its memory, size and bugs with the Electron version."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down the measured problems the migration must solve"
                - "Test the front end in each target system webview"
                - "Port one window to the new shell behind a flag"
                - "Compare memory, size and bug count and record the decision"
            - name: Delta updates and differential downloads
              description: |-
                ## Purpose
                Shipping the full installer for every update wastes bandwidth when most releases change a few files, and large downloads stall on slow connections. Differential updates, such as blockmaps, binary diffs or MSIX delta packages, cut update size sharply but add a failure mode that needs a full download fallback.

                ## Milestones
                1. Average update size and changed bytes per release measured.
                2. A delta mechanism supported by the chosen updater enabled for one platform.
                3. A fallback to the full package when a delta fails to apply.
                4. Update size and failure rate compared over three releases.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Delta updates cut average update size on one platform by a measured amount, with fallback to full packages working."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure how many bytes change between the last three releases"
                - "Enable the updater's delta mechanism on one platform"
                - "Test the full package fallback with a corrupted delta"
                - "Compare update size and failure rate over three releases"
            - name: Shared Rust or C++ core across desktop platforms
              description: |-
                ## Purpose
                Experienced desktop teams often move file parsing, sync and heavy computation into one native core library, with thin UI shells on top. Designing that core with a stable C ABI or generated bindings lets you change UI frameworks later without rewriting the logic users depend on.

                ## Milestones
                1. The logic worth moving into the core identified, with its current language and size.
                2. A stable interface defined through a C ABI or a bindings generator.
                3. The core built and tested in CI for every OS and architecture.
                4. One UI shell calling the core in production.

                ## Notes
                Keep the interface coarse. Fine-grained calls across a language boundary cost speed and make memory ownership hard to reason about.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A native core library with a documented interface is built for every supported platform and used by one shipped UI shell."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List the modules that would gain most from a native core"
                - "Define the core's interface and memory ownership rules"
                - "Build and test the core for every architecture in CI"
                - "Call the core from one UI shell behind a flag"
---

# Desktop App Engineering

This area is for engineers who build and ship desktop applications, whether that is one person selling a Tauri app to a few hundred customers or a team running an Electron or Qt product installed on thousands of company laptops. It starts with the foundations (the framework decision, the platform matrix, signing and notarisation, reproducible builds, the process model and crash reporting), moves through the routines that keep a shipped app healthy, the skills behind the event loop, native conventions, file associations, crash reading, profiling and accessibility, the decisions about installers, local storage, sync, hardening and update integrity, the dated events such as a first public release or a store submission, the situations a solo seller, a web team, an IT-managed customer or an inheriting team faces, and finally specialist work on runtime migration, delta updates and shared native cores.

What repeats is a Monday crash dump triage, a Thursday look at the staged update rollout, a Friday check on nightly signed builds, monthly release cuts, runtime upgrades, clean machine installer tests, budget tracking and reputation checks on varied days, quarterly security, telemetry, accessibility and admin documentation reviews, and the yearly OS preview cycle and certificate renewal. The Purchase decision, Operational checklist, Metrics log and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
