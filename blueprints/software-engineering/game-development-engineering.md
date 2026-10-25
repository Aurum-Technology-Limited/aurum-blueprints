---
id: software-engineering.game-development-engineering
name: Game Development Engineering
description: "An engine chosen on purpose, builds anyone can make, frame and memory budgets you check every week, playtests that change the game, and a launch and patch plan that survives first contact with players."
category: business
version: 1.0.0
tags: [software-engineering, game-development-engineering, engineer, creative, gameplay-programming, game-engines, indie-games, performance]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - metrics-log
    - feedback-themes
    - operational-checklist
    - purchase-decision
    - marketing-campaign
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Game Development Engineering
          description: "Building video games, from engine choice and gameplay programming to asset pipelines, performance on target platforms and publishing."
          projects:
            - name: Game engine decision for the next project
              description: |-
                ## Purpose
                Choosing between Unity, Unreal, Godot, a framework such as MonoGame or a custom engine fixes your language, your licence costs, which platforms you can reach and how much of the next two years goes on tooling rather than the game. A written decision tested against a small prototype of your hardest feature stops the choice being made by habit or by whichever forum thread you read last.

                ## Milestones
                1. The game's three hardest technical needs listed, such as large open levels, many physics bodies or console targets.
                2. Licence terms, revenue thresholds and platform export costs for each candidate engine summarised in one table.
                3. A two-day spike of the hardest feature built in the top two candidates.
                4. A written decision with the reasons and the conditions that would make you revisit it.

                ## Notes
                Read the current licence and royalty terms on each engine's own website before deciding; they have changed more than once in recent years. Familiarity counts for a lot on a small team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page engine decision exists, backed by a spike of the hardest feature in at least two engines and a licence cost comparison."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the three hardest technical needs of the game you want to make"
                - "Read the current licence and revenue share terms for each candidate engine"
                - "Build a two-day spike of the hardest feature in the top two engines"
                - "Write the engine decision with the conditions that would reopen it"
            - name: Design pillars and a scope you can finish
              description: |-
                ## Purpose
                Most unfinished games die of scope rather than bad code: one more mechanic, one more biome, one more boss. Three short design pillars and a written list of what the game will not contain give every later feature request a quick test, and make cutting features a decision rather than a defeat.

                ## Milestones
                1. Three design pillars written in a sentence each, such as "every fight is readable in under a second".
                2. A feature list sorted into must ship, should ship and cut, with the cut list kept visible.
                3. A content count for launch: levels, enemies, items and minutes of play.
                4. The scope document reviewed with everyone on the team and dated.

                ## Notes
                Start from the **Product spec** template. Halve your first content estimate; nearly every team overestimates how much content it can polish.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated scope document with three design pillars, a must, should and cut feature list and a launch content count is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write three design pillars in one sentence each"
                - "Sort every planned feature into must ship, should ship and cut"
                - "Set a launch content count for levels, enemies and items"
                - "Review the scope document with the team and date it"
            - name: Target platform and minimum spec matrix
              description: |-
                ## Purpose
                Your development machine flatters the game: what runs well there can be unplayable on a five-year-old laptop, a handheld PC or a last-generation console. Deciding the target platforms and a minimum spec now, and buying or borrowing one device at that spec, means every performance and memory budget later has something real to be measured against.

                ## Milestones
                1. Target platforms chosen for launch and for later, each with a reason.
                2. A minimum and recommended spec written for PC, or the lowest console model named.
                3. At least one test device at minimum spec available to the team.
                4. Frame rate and resolution targets agreed for each platform.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A platform matrix lists each target, its minimum spec and its frame rate target, and a minimum spec test device is on the team's desk."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose launch platforms and write one reason for each"
                - "Check a public hardware survey to set a realistic PC minimum spec"
                - "Buy, borrow or borrow time on one device at minimum spec"
                - "Agree frame rate and resolution targets per platform"
            - name: Version control that copes with large binary assets
              description: |-
                ## Purpose
                Textures, audio, models and engine scene files break ordinary Git workflows: repositories balloon, clones take hours and two people editing the same level silently overwrite each other. Setting up Git LFS with file locking, or a centralised system such as Perforce or Plastic, before the asset count grows saves the week of misery that a later migration costs.

                ## Milestones
                1. A version control system chosen with binary handling and locking in mind.
                2. Binary file types tracked by LFS or the equivalent, with a written list of extensions.
                3. File locking turned on for scenes, prefabs and other unmergeable files.
                4. A fresh clone timed and documented for a new team member.

                ## Notes
                Engine-generated folders such as Library, Intermediate and build output should be ignored from day one. Committing them is the most common cause of a bloated repository.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The repository tracks binary assets through LFS or an equivalent, locks unmergeable files, and a fresh clone completes in a documented time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add the engine's standard ignore file to the repository"
                - "Configure LFS or the equivalent for every binary asset extension"
                - "Turn on file locking for scenes and other unmergeable files"
                - "Time a fresh clone and write the steps in the readme"
            - name: Asset naming and folder conventions
              description: |-
                ## Purpose
                Six months in, a project without conventions has three folders called Enemies, textures named final_v3_REAL and nobody sure which files are still used. A short naming and folder guide, agreed between programmers and artists, makes assets findable, makes automated import rules possible and makes cleaning up before release a job of hours rather than weeks.

                ## Milestones
                1. A naming pattern agreed for each asset type, such as prefixes for textures, materials and meshes.
                2. A folder layout by feature or by type chosen and created.
                3. Existing assets renamed and moved to match, with references checked.
                4. The guide pinned where artists and programmers both look.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page naming and folder guide exists and every asset in the project follows it, with no broken references after the move."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a naming prefix for each asset type the project uses"
                - "Choose a folder layout by feature or by asset type"
                - "Rename and move existing assets inside the editor so references update"
                - "Pin the guide in the team channel and the repository readme"
            - name: Greybox vertical slice in six weeks
              description: |-
                ## Purpose
                Think of a vertical slice as one level or one encounter playable start to finish with the core loop working, built from grey boxes before any art budget is spent. It answers whether the game is fun, exposes the real technical risks and gives you something to show a publisher, a festival or a friend, all for a fraction of the cost of finding out later.

                ## Milestones
                1. The core loop playable from start to finish in one greybox level.
                2. Controls, camera and the main mechanic tuned until five testers can play without help.
                3. The two biggest technical risks found during the slice written down with a plan.
                4. A recorded play session of the slice saved for later comparison.

                ## Notes
                Resist adding final art to the slice. Polished visuals make a weak loop look better than it is and make it painful to throw away.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One greybox level with the full core loop is playable start to finish by five testers without help, and the top two technical risks are written down."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Block out one level with primitive shapes in the editor"
                - "Implement the core loop end to end, however rough"
                - "Run the slice with five testers and note where each one gets stuck"
                - "Record a full play session and save it with the date"
            - name: One-command builds for every target platform
              description: |-
                ## Purpose
                If only one person can make a build, and only on their machine, every playtest and every milestone waits on them. A scripted build that produces a numbered, signed or packaged build for each platform from a clean checkout, ideally on a build server, turns shipping a test build from an afternoon into a coffee break.

                ## Milestones
                1. A build script that produces a packaged build for each target from a clean checkout.
                2. Build numbers stamped into the executable and shown on the title screen.
                3. Builds running on a build server or CI runner, not a personal machine.
                4. Build output stored somewhere testers can download it, with the last ten kept.

                ## Notes
                Engine command-line build modes exist for Unity, Unreal and Godot. Headless builds often need a licence or a specific editor install on the build machine, so check that first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Any team member can trigger a numbered build for every target platform from a clean checkout with one command or one button."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down every manual step in the current build process"
                - "Script the build using the engine's command-line build mode"
                - "Stamp the build number into the game and show it on the title screen"
                - "Move the build onto a CI runner and store the last ten builds"
            - name: Crash reporting and log capture in every build
              description: |-
                ## Purpose
                Players rarely report crashes and almost never send logs, so without automatic capture you learn about a crash from a one-star review. Wiring a crash reporter that uploads call stacks with symbols, the build number and the player's hardware into every build, including test builds, makes the first week of any playtest far more useful.

                ## Milestones
                1. A crash reporting service or engine crash handler chosen and integrated.
                2. Debug symbols uploaded automatically for every build so stacks are readable.
                3. Each report carrying build number, platform, GPU and the last lines of the log.
                4. A deliberate test crash received and read end to end.

                ## Notes
                Tell players what is collected and offer an opt-out in the settings; some platforms and regions require it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliberate crash in a release build produces a symbolicated report with build number and hardware details within minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare two crash reporting options that support your engine and platforms"
                - "Integrate the crash handler and upload symbols from the build script"
                - "Add build number, GPU and recent log lines to every report"
                - "Trigger a test crash in a release build and read the report"
            - name: Input mapping and controller support baseline
              description: |-
                ## Purpose
                Hard-coded keys spread through gameplay scripts make rebinding, controller support and Steam Deck or console ports painful to add later. Routing all input through named actions from the start, with keyboard, mouse and one gamepad tested, costs a day now and saves a rewrite at the worst possible moment.

                ## Milestones
                1. All gameplay input read through named actions rather than raw keys.
                2. Keyboard and mouse plus one common gamepad mapped and tested.
                3. On-screen button prompts switching when the player changes device.
                4. Dead zones and stick sensitivity set to sensible defaults.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No gameplay script reads a raw key, and the vertical slice is fully playable on keyboard and mouse and on a gamepad with matching prompts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search the codebase for raw key reads and list every one"
                - "Replace them with named actions in the engine's input system"
                - "Map and test one common gamepad alongside keyboard and mouse"
                - "Swap on-screen prompts when the last used device changes"
            - name: Weekly playable build for the team and testers
              description: |-
                ## Purpose
                Editor-only play hides broken menus, missing assets and platform bugs until the week before a deadline. Cutting a playable build every Friday, smoke testing it for ten minutes and sending it to the team and a few trusted testers keeps the project shippable at all times and makes progress visible to everyone.

                ## Milestones
                1. A Friday build cut from the main branch every week.
                2. A ten-minute smoke test checklist covering boot, menus, one level and saving.
                3. Release notes of three to five lines sent with each build.
                4. A small group of external testers receiving builds regularly.

                ## Notes
                Start from the **Operational checklist** template for the smoke test. If the Friday build fails, fixing it is the first job on Monday.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A smoke-tested build has gone out with short release notes every Friday for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Write a ten-minute smoke test covering boot, menus, a level and a save"
                - "Cut, smoke test and send the playable build with short notes @recurring(weekly:fri)"
                - "Invite five trusted testers to a private build channel"
            - name: Frame time and memory budgets checked weekly
              description: |-
                ## Purpose
                Performance problems in games accumulate quietly: a few extra draw calls here, an uncompressed texture there, until the game misses its frame rate on every target at once. Splitting the 16.6 or 33.3 millisecond frame into budgets for gameplay, physics, rendering and audio, and checking a fixed benchmark scene every week, catches regressions while the cause is still one recent change.

                ## Milestones
                1. A frame time budget per system and a memory budget per platform written down.
                2. A repeatable benchmark scene or camera flythrough that runs from the command line.
                3. Weekly results recorded on the minimum spec device.
                4. Any regression over budget traced to a change and ticketed the same week.

                ## Notes
                Start from the **Metrics log** template. Measure in milliseconds, not frames per second; milliseconds add up across systems and frames per second do not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log shows weekly frame time and memory figures from the benchmark scene on the minimum spec device for at least two months."
                cadence: rolling
              tasks:
                - "Split the frame time budget across gameplay, physics, rendering and audio"
                - "Build a benchmark flythrough that runs from the command line"
                - "Run the benchmark on minimum spec and log frame time and memory @recurring(weekly:mon)"
                - "Ticket any system that goes over budget with the likely change"
                - "Review the benchmark trend and adjust budgets if targets changed @recurring(quarterly)"
            - name: Bug triage and crash bucket review
              description: |-
                ## Purpose
                A game's bug list grows faster than anyone can fix it, and without triage the team ends up fixing the easy cosmetic bugs while a progression blocker sits untouched. A short weekly triage that ranks bugs by severity and frequency, and reviews the top crash buckets from the reporter, keeps effort on what players would actually hit.

                ## Milestones
                1. Severity levels agreed, from crash and progression blocker down to cosmetic.
                2. Every new bug given a severity, an owner or a won't-fix decision within a week.
                3. The top five crash buckets reviewed weekly with an owner for each.
                4. Zero known progression blockers open at each milestone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bug older than a week has a severity and an owner or a won't-fix note, and the top five crash buckets each have an owner."
                cadence: rolling
              tasks:
                - "Write four severity levels with one example bug for each"
                - "Triage new bugs and review the top five crash buckets @recurring(weekly:tue)"
                - "Close or mark won't-fix every cosmetic bug older than three months @recurring(quarterly)"
            - name: Playtest feedback loop that changes the build
              description: |-
                ## Purpose
                Playtests generate pages of notes that often go nowhere because nobody turns them into decisions. Watching testers play without helping, grouping what they did and said into themes, and choosing one or two changes per round makes each playtest move the game rather than just confirm what the team already believed.

                ## Milestones
                1. A playtest script with the same three or four questions every round.
                2. Notes from each round grouped into themes with a count of testers per theme.
                3. One or two changes chosen per round and tracked to the next build.
                4. The following round checking whether those changes worked.

                ## Notes
                Start from the **Feedback themes** template. Watch what testers do more than what they say; players are good at finding problems and poor at prescribing fixes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive playtest rounds each have a themed summary and one or two changes that were shipped and rechecked in the next round."
                cadence: rolling
              tasks:
                - "Write a playtest script with three fixed questions"
                - "Group last round's notes into themes and pick two changes @recurring(weekly:wed)"
                - "Record each chosen change in the next build's notes"
                - "Run an external playtest with three players new to the game @recurring(monthly:9)"
            - name: Asset import pipeline health checks
              description: |-
                ## Purpose
                Import settings drift as artists add files: textures arrive uncompressed at 4K, audio lands as stereo WAV, meshes come in with ten times the polygons they need. Enforcing import presets with editor scripts and running a monthly report of oversized or misconfigured assets keeps build size and memory under control without policing anyone by hand.

                ## Milestones
                1. Import presets defined per asset type and folder, applied automatically.
                2. An editor report listing the largest textures, meshes and audio files.
                3. Asset validation run in the build so a misconfigured asset fails loudly.
                4. Build size per platform tracked month by month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Import presets apply automatically, the build fails on a misconfigured asset, and a monthly report shows build size and the twenty largest assets."
                cadence: rolling
              tasks:
                - "Define import presets for textures, audio and meshes by folder"
                - "Write an editor script that lists the twenty largest assets"
                - "Run the asset size report and fix the worst three offenders @recurring(monthly:12)"
                - "Record build size per platform in the metrics log @recurring(monthly:14)"
                - "Add asset validation to the build so bad settings fail the build"
            - name: Engine and plugin upgrade cadence
              description: |-
                ## Purpose
                Staying on an old engine version feels safe until a platform requires a newer SDK, a plugin drops support or a store mandates a new API level, and then the jump spans three years of breaking changes. Reviewing engine and plugin releases on a schedule, and upgrading on a branch at planned points, keeps each jump small and away from launch week.

                ## Milestones
                1. The current engine, plugin and platform SDK versions listed with their support dates.
                2. A rule agreed for when to upgrade, such as long-term support releases only.
                3. Each upgrade done on a branch and verified with the benchmark and smoke test.
                4. An engine freeze date set ahead of certification or launch.

                ## Notes
                Never upgrade the engine in the last two months before a launch or a certification submission unless a platform requires it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A version list with support dates is current, and every engine upgrade in the last year was done on a branch and passed the smoke test before merging."
                cadence: rolling
              tasks:
                - "List engine, plugin and platform SDK versions with their support dates"
                - "Review new engine and plugin releases against the upgrade rule @recurring(quarterly)"
                - "Set an engine freeze date ahead of the next submission or launch"
            - name: Save compatibility regression tests
              description: |-
                ## Purpose
                Corrupting players' save files with a patch is one of the few bugs that turns loyal players into angry ones overnight. Keeping a library of real save files from each released version and loading them automatically in every build proves that old saves still work before a patch reaches anyone.

                ## Milestones
                1. Save files collected from each released or tested version, at early, mid and late progress.
                2. An automated test that loads every stored save and checks key values.
                3. The test running in CI on each build.
                4. A new save captured into the library whenever the save format changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An automated test loads saves from every shipped version in CI, and the save library gained a new file at each format change."
                cadence: rolling
              tasks:
                - "Collect early, mid and late saves from the current build"
                - "Write a test that loads each stored save and checks player progress"
                - "Add a save from the latest build to the library @recurring(monthly:18)"
            - name: Milestone review at the end of each production phase
              description: |-
                ## Purpose
                Games move through phases, prototype, vertical slice, alpha, beta, release candidate, and each phase has a different definition of done. A short review at each phase gate, checking the build against written exit criteria, makes the team honest about where the game is and forces scope decisions early enough to matter.

                ## Milestones
                1. Exit criteria written for each phase, such as feature complete for alpha and content complete for beta.
                2. Each phase review held with a build and the criteria side by side.
                3. Missed criteria turned into a cut, a delay or an explicit risk.
                4. Review notes stored with the build number they covered.

                ## Notes
                Feature complete at alpha means every feature exists, however rough. Teams that keep adding features after alpha rarely hit their beta date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each completed phase has a review note against written exit criteria, with a recorded decision for every missed criterion."
                cadence: cyclic
              tasks:
                - "Write exit criteria for alpha, beta and release candidate"
                - "Book the next phase review against the current build"
                - "Record a cut, delay or risk for every missed criterion"
                - "Check progress against the current phase's exit criteria @recurring(monthly:15)"
            - name: Monthly devlog and build notes for players
              description: |-
                ## Purpose
                For an independent game, a steady devlog is often the cheapest marketing there is, and it forces the developer to look back at a month's progress. A short monthly post with a GIF of something new, a technical or design note and what is coming next builds a following and a record of how the game came together.

                ## Milestones
                1. A home for the devlog chosen, such as a store page, a community site or a newsletter.
                2. A repeatable format of one GIF, one note and one look ahead.
                3. A capture habit for clips and screenshots during the month.
                4. Six consecutive monthly posts published.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly devlog posts are published, each with at least one new clip and a note on what changed."
                cadence: rolling
              tasks:
                - "Pick one home for the devlog and write the first post"
                - "Set up a hotkey for recording short gameplay clips"
                - "Publish the monthly devlog with one clip and one note @recurring(monthly:26)"
                - "Ask the agent to draft the post from the month's commit messages and build notes"
            - name: Platform requirements checklist kept current
              description: |-
                ## Purpose
                Every console and storefront publishes technical requirements on save data, suspend and resume, user accounts, age ratings and error messages, and they change between SDK releases. Keeping your own checklist mapped to those requirements, and reviewing it each quarter, means certification is a confirmation rather than a surprise.

                ## Milestones
                1. The current requirement documents for each target platform downloaded from its developer portal.
                2. A checklist mapping each requirement to the feature or screen that satisfies it.
                3. Unmet requirements ticketed with an owner.
                4. The checklist re-checked against each new SDK or requirements release.

                ## Notes
                Platform requirement documents are usually under NDA. Keep the checklist inside your private project space and do not paste requirement text into public trackers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A checklist maps every current platform requirement to a feature or an open ticket, reviewed within the last quarter."
                cadence: rolling
              tasks:
                - "Download the current requirements for each target from its developer portal"
                - "Map each requirement to the screen or system that meets it"
                - "Review the checklist against the latest requirements release @recurring(quarterly)"
            - name: Game loop, frame timing and fixed timestep fundamentals
              description: |-
                ## Purpose
                Physics that explodes at high frame rates, movement that feels different on a slow laptop and timers that drift are almost always game loop mistakes. Understanding update versus fixed update, delta time, interpolation and the classic fixed timestep pattern lets you reason about every frame-dependent bug you will meet.

                ## Milestones
                1. The engine's update order written out, from input through physics to rendering.
                2. A small test scene where movement is identical at 30, 60 and 144 frames per second.
                3. Render interpolation working between fixed physics steps.
                4. One frame-dependent bug in your own project found and fixed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A test scene moves identically at three capped frame rates, and one frame-dependent bug in the project has been fixed with a note on the cause."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the classic Fix Your Timestep article and the engine's update order docs"
                - "Build a test scene that caps the frame rate at 30, 60 and 144"
                - "Add interpolation between fixed physics steps"
                - "Search the project for movement code that ignores delta time"
            - name: Vector maths and transforms for gameplay code
              description: |-
                ## Purpose
                Aiming, steering, cameras, line of sight and knockback all reduce to vectors, dot and cross products, matrices and quaternions. Working through them with small playable exercises, rather than copying snippets, makes gameplay code shorter and removes a whole class of bugs where something faces the wrong way.

                ## Milestones
                1. Dot product used to build a view cone and a front or behind check.
                2. Cross product used to find which side a target is on.
                3. Local and world space conversions explained in your own words.
                4. Quaternion rotation used for a smoothed turret or camera without gimbal problems.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four small exercises work in a test scene: a view cone, a side check, a space conversion and a smoothed quaternion rotation."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a view cone using the dot product in a test scene"
                - "Use the cross product to tell left from right of the player"
                - "Convert a point between local and world space and draw both"
                - "Rotate a turret smoothly towards a target with quaternions"
            - name: Entity component systems and data-oriented design
              description: |-
                ## Purpose
                When a game needs thousands of bullets, units or particles, object-per-thing designs hit cache misses and update overhead long before the GPU is busy. Learning how entity component systems lay out data, and when they are worth the extra complexity, lets you make that call for your own game rather than following a trend.

                ## Milestones
                1. The difference between array of structures and structure of arrays explained with a small benchmark.
                2. A prototype with ten thousand moving entities built in your engine's ECS or a library such as EnTT or Flecs.
                3. Frame time compared against the same prototype built with ordinary objects.
                4. A short note on which systems in your game would benefit and which would not.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-thousand-entity prototype exists in both styles with measured frame times and a written note on where ECS fits your game."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Benchmark updating ten thousand positions as objects versus flat arrays"
                - "Build the same swarm in your engine's ECS or an ECS library"
                - "Compare frame times on the minimum spec device"
                - "Write which of your game's systems would gain from ECS"
            - name: Physics, collision and character controllers
              description: |-
                ## Purpose
                Players notice physics bugs instantly: falling through floors, getting stuck on stair edges, bullets passing through thin walls. Understanding collision layers, continuous collision detection, raycasts versus rigidbodies and how kinematic character controllers handle slopes and steps lets you choose the right tool and fix the bugs players screenshot.

                ## Milestones
                1. A collision layer matrix that documents what hits what.
                2. Fast projectiles fixed for tunnelling with continuous detection or raycasts.
                3. A character controller that handles slopes, steps and moving platforms in a test level.
                4. A physics test level kept in the project for regression checks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A physics test level covers slopes, steps, moving platforms and fast projectiles, and the character and bullets behave correctly in all of them."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Draw the collision layer matrix for every layer in the game"
                - "Build a test level with slopes, stairs, thin walls and moving platforms"
                - "Fix projectile tunnelling with continuous detection or raycasts"
                - "Tune the character controller until it handles every test surface"
            - name: Shader programming for gameplay effects
              description: |-
                ## Purpose
                Hit flashes, dissolves, outlines, water and stylised lighting are often a few dozen lines of shader code, and being able to write them yourself frees a small team from asset store packs that never quite fit. Learning the vertex and fragment stages, UVs, noise and the engine's shader graph or language gives the game a look of its own.

                ## Milestones
                1. The rendering pipeline stages sketched from vertex input to final pixel.
                2. A hit flash and a dissolve effect written by hand.
                3. One effect rebuilt in the engine's node-based shader editor for comparison.
                4. The GPU cost of each effect measured on minimum spec.

                ## Notes
                The Book of Shaders and similar free resources are a good start for fragment shader thinking before engine specifics.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three working shader effects are in the project, each with its GPU cost on minimum spec recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sketch the pipeline from vertex input to final pixel on one page"
                - "Write a hit flash shader that tints a sprite or mesh for one frame"
                - "Write a noise-based dissolve effect"
                - "Measure each effect's GPU cost with the frame debugger"
            - name: Game AI with state machines and behaviour trees
              description: |-
                ## Purpose
                Enemies that feel clever are usually simple systems tuned well: a readable state machine, a behaviour tree, a bit of utility scoring and good navigation. Learning when each pattern fits, and building one enemy with each, stops AI code collapsing into a nest of if statements by the third enemy type.

                ## Milestones
                1. One enemy built as a finite state machine with patrol, chase and attack.
                2. The same enemy rebuilt as a behaviour tree.
                3. Navigation mesh pathfinding working around dynamic obstacles.
                4. A debug overlay showing each enemy's current state or tree node in play.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One enemy exists as both a state machine and a behaviour tree, with nav mesh pathfinding and an on-screen debug view of its decisions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a patrol, chase and attack enemy as a state machine"
                - "Rebuild the same enemy as a behaviour tree"
                - "Bake a nav mesh and test pathing around moving obstacles"
                - "Add a debug overlay that prints each enemy's current state"
            - name: Game feel with input buffering, coyote time and hit stop
              description: |-
                ## Purpose
                Two games with identical mechanics can feel sluggish or wonderful depending on tiny details: a jump pressed a few frames early still counting, a short grace period after leaving a ledge, a two-frame pause on impact, a little screen shake. Studying and building these techniques is where gameplay programmers and designers meet, and it is cheap to do well.

                ## Milestones
                1. Input buffering and coyote time added to the main jump or action.
                2. Hit stop, screen shake and a sound cue added to the main impact.
                3. Each tweak exposed as a tunable value with a toggle for comparison.
                4. A before and after clip recorded and shown to three testers.

                ## Notes
                Keep every feel value in data, not code. You will tune them dozens of times and designers should not need a programmer to do it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Buffering, coyote time, hit stop and screen shake are in the game as tunable values, and three testers preferred the after clip."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add a short input buffer to the main jump or attack"
                - "Add coyote time after the player leaves a ledge"
                - "Add hit stop and screen shake to the main impact"
                - "Record before and after clips and show them to three testers"
            - name: Animation state machines and root motion
              description: |-
                ## Purpose
                Animation bugs, sliding feet, attacks that cannot be cancelled, characters snapping between poses, usually come from a tangled animation graph rather than bad animation. Learning blend trees, transitions, animation events and the trade-off between root motion and code-driven movement lets programmers and animators build characters that respond as well as they look.

                ## Milestones
                1. A locomotion blend tree for idle, walk and run with no foot sliding.
                2. Attack animations firing gameplay events on the right frame.
                3. Root motion and code-driven movement compared for one character.
                4. Cancel windows agreed with design and enforced in the graph.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One character has a clean locomotion blend, frame-accurate attack events and documented cancel windows, with root motion chosen or rejected on record."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build an idle, walk and run blend tree and check for foot sliding"
                - "Fire a damage event from the exact frame of an attack swing"
                - "Try root motion and code-driven movement on the same character"
                - "Agree cancel windows with design and set them in the graph"
            - name: Profiling CPU and GPU frames on target hardware
              description: |-
                ## Purpose
                Guessing at performance problems wastes days; a single capture usually points straight at the cause. Learning the engine profiler, a GPU frame debugger and the platform's own tools such as PIX, RenderDoc or Xcode Instruments, and practising on your own game, turns performance work from superstition into measurement.

                ## Milestones
                1. A CPU capture read on the minimum spec device, with the top five costs named.
                2. A GPU frame captured and draw calls, overdraw and shader cost inspected.
                3. Garbage collection or allocation spikes found in a capture.
                4. One measured fix made and the before and after captures saved.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Before and after captures exist for one measured performance fix on minimum spec, with the top five CPU costs and GPU frame breakdown noted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Connect the engine profiler to a build running on minimum spec"
                - "Capture a GPU frame with RenderDoc, PIX or the platform equivalent"
                - "Find the largest allocation spike in a ten-second capture"
                - "Make one fix and save before and after captures side by side"
            - name: Data-driven tuning tables for designers
              description: |-
                ## Purpose
                When every damage number, spawn rate and cooldown lives in code, designers wait on programmers for each tweak and balance changes need a full build. Moving tuning values into data files or engine assets, with hot reload in the editor, lets designers balance the game themselves and lets you ship balance patches without code changes.

                ## Milestones
                1. Tuning values for weapons, enemies and economy listed and moved out of code.
                2. Data stored in spreadsheets, scriptable objects or data tables with validation.
                3. Hot reload working so changes show in a running game.
                4. A designer making a balance change without help from a programmer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Weapon, enemy and economy values live in validated data with hot reload, and a designer has shipped a balance change without touching code."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Search the code for hard-coded damage, speed and cooldown values"
                - "Choose a data format and move one system's values into it"
                - "Add validation so out-of-range values fail at import"
                - "Hand a designer one balance change to make on their own"
            - name: Removing allocation spikes with pooling
              description: |-
                ## Purpose
                Hitches every few seconds in an otherwise smooth game are often the garbage collector cleaning up bullets, particles and strings created every frame. Finding the per-frame allocations, pooling frequently spawned objects and caching the rest removes hitches that players feel as lag even when the average frame rate looks fine.

                ## Milestones
                1. Per-frame allocations measured in a typical combat scene.
                2. Projectiles, effects and enemies spawned from pools rather than created and destroyed.
                3. String building and boxing removed from hot update paths.
                4. Per-frame allocation in the combat scene reduced to near zero.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The combat benchmark shows near-zero per-frame allocation and no collector spikes over a five-minute capture."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Profile per-frame allocations in a busy combat scene"
                - "Pool the three most frequently spawned object types"
                - "Remove string formatting from every update loop"
                - "Capture five minutes of combat and confirm no collector spikes"
            - name: Load time and asset streaming improvements
              description: |-
                ## Purpose
                Long loading screens are among the most common complaints in reviews, and handheld and console players feel them most. Measuring where load time goes, then streaming levels in chunks, loading assets asynchronously and trimming what loads at boot, can turn a forty-second wait into a few seconds.

                ## Milestones
                1. Boot and level load times measured on minimum spec and logged.
                2. The largest contributors to load time identified from a capture.
                3. Asynchronous loading or level streaming in place for the largest level.
                4. Load time targets agreed per platform and met.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Boot and the largest level load within the agreed per-platform targets on minimum spec, with before and after timings recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Time boot and each level load on minimum spec hardware"
                - "Capture a load and list the five slowest assets or steps"
                - "Move the largest level to asynchronous or streamed loading"
                - "Agree load time targets for each platform"
            - name: Versioned save system with migrations
              description: |-
                ## Purpose
                Serialising whole objects to disk works until the first patch renames a field and every existing save breaks. A save system with an explicit version number, a schema you control, migration steps between versions and atomic writes that survive a power cut is one of the highest-stakes pieces of code in any game players invest hours in.

                ## Milestones
                1. A save format chosen and documented, separate from in-memory classes.
                2. A version number written in every save, with a migration path for each change.
                3. Atomic writes using a temporary file and rename, with a backup slot.
                4. Cloud save conflicts handled according to each platform's rules.

                ## Notes
                Never save during a crash handler or on the frame the player quits without a safe write path. Corrupted saves cost more goodwill than almost any other bug.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Saves carry a version number, old versions migrate in tests, and killing the game mid-save never leaves an unreadable file."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the save schema separately from gameplay classes"
                - "Add a version field and one migration test"
                - "Write saves to a temporary file and rename once complete"
                - "Kill the game mid-save fifty times and check every file loads"
            - name: Multiplayer networking model decision
              description: |-
                ## Purpose
                Adding multiplayer late is close to rewriting the game, and the networking model decides cost, cheating risk and how the game feels with 150 milliseconds of latency. Comparing peer-to-peer, client-server with a dedicated host, lockstep and rollback against your genre and budget before building gameplay means the code is shaped for it from the start.

                ## Milestones
                1. Player count, genre, latency tolerance and cheating risk written down.
                2. Peer-to-peer, listen server, dedicated server, lockstep and rollback compared in a table.
                3. Hosting and relay costs estimated per thousand concurrent players.
                4. A prototype of two players moving and shooting under simulated lag.
                5. A written decision on the model and the networking library.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written networking decision exists with a cost estimate and a two-player prototype tested under at least 150 milliseconds of simulated latency."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Write the player count, latency tolerance and cheating risk for your game"
                - "Compare networking models and two libraries in one table"
                - "Estimate hosting and relay costs at a thousand concurrent players"
                - "Prototype two players under simulated lag and packet loss"
            - name: Choosing audio, physics or UI middleware
              description: |-
                ## Purpose
                Middleware such as FMOD or Wwise for audio, a physics engine, or a UI framework can save months, but licence terms, platform support and lock-in matter once the game ships. Comparing two options against the same criteria and a small integration test avoids discovering at certification that a library does not support one of your platforms.

                ## Milestones
                1. The problem the middleware must solve stated in two sentences.
                2. Two or three options compared on licence cost, platform support, engine integration and team familiarity.
                3. A one-day integration spike done with the leading option.
                4. A decision recorded with licence terms saved alongside it.

                ## Notes
                Start from the **Purchase decision** template. Check that the licence tier you choose covers every platform and your expected revenue.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A middleware decision is recorded with a comparison of at least two options, a completed integration spike and the licence terms filed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the problem the middleware must solve in two sentences"
                - "Compare two options on licence, platforms and engine integration"
                - "Spend one day integrating the leading option into a test scene"
                - "File the licence terms with the decision"
            - name: Localisation-ready text and font pipeline
              description: |-
                ## Purpose
                Hard-coded strings, text baked into textures and fonts with only Latin characters make every later translation a programming job. Moving all player-facing text into string tables, testing with pseudo-localisation and choosing fonts with the character sets you will need means adding a language later is mostly a translator's job.

                ## Milestones
                1. Every player-facing string moved into string tables with keys.
                2. A pseudo-localised build showing longer, accented text everywhere.
                3. UI layouts surviving 30 percent longer text without clipping.
                4. Fonts chosen or fallback fonts set for the target languages.

                ## Notes
                German and French text often runs a third longer than English, and some languages need different fonts entirely. Test early, not when the translations arrive.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pseudo-localised build shows no hard-coded strings and no clipped text, and fonts cover every target language."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Search for hard-coded player-facing strings and move them to tables"
                - "Generate a pseudo-localised build with longer accented text"
                - "Fix every clipped or overflowing UI element"
                - "Ask the agent to draft a context note for translators on each tricky string"
            - name: Accessibility options players actually use
              description: |-
                ## Purpose
                Full input remapping, subtitles with speaker names and size options, colour-blind friendly cues, screen shake toggles and difficulty assists widen your audience and are increasingly expected by players and platform holders. Building them into the settings now is far cheaper than retrofitting them after the UI is locked.

                ## Milestones
                1. Full remapping for keyboard and gamepad, including the menus.
                2. Subtitles with size, background and speaker name options.
                3. Important information never carried by colour alone.
                4. Toggles for screen shake, flashing effects and camera motion.
                5. The options checked against a published game accessibility guideline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The settings menu offers full remapping, subtitle options and motion toggles, and the game has been checked against a published accessibility guideline."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Read a published game accessibility guideline and list the basic items"
                - "Add full input remapping to the settings menu"
                - "Add subtitle size, background and speaker name options"
                - "Play one level in greyscale to find colour-only cues"
            - name: Game jam entry in a weekend
              description: |-
                ## Purpose
                A 48 or 72 hour jam is the fastest way to practise finishing: scoping hard, cutting fast and shipping something people can play. For a creative or an engineer new to games, one jam teaches more about scope and polish than months of tutorials, and the result often becomes a portfolio piece or a seed for a bigger game.

                ## Milestones
                1. A jam chosen and registered for, with the theme announcement in the calendar.
                2. A template project ready with input, a menu and a build script before the start.
                3. A playable build submitted before the deadline.
                4. Feedback from other entrants read and three lessons written down.

                ## Notes
                Aim to be playable by the halfway point and spend the second half on polish and sound. Most failed jam games ran out of time adding features.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A playable jam entry was submitted before the deadline and three written lessons came from the feedback."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Pick a jam on a public jam listing site and register"
                - "Prepare a template project with input, a menu and a build script"
                - "Submit a playable build before the deadline"
                - "Write three lessons from the feedback you received"
            - name: Store page and wishlist campaign before launch
              description: |-
                ## Purpose
                On PC storefronts such as Steam, wishlists collected before launch strongly shape how visible a game is in its first week, and a store page needs months to gather them. Publishing a page with a strong capsule image, a short trailer and clear tags, then tracking wishlists monthly against announcements and events, gives launch a fighting chance.

                ## Milestones
                1. Capsule art, five screenshots and a trailer under a minute prepared.
                2. A store page live with accurate tags and a short description.
                3. Wishlist numbers tracked monthly alongside each announcement or event.
                4. A launch date chosen with the wishlist trend and competing releases in view.

                ## Notes
                Start from the **Marketing campaign** template. Show gameplay in the first five seconds of the trailer; most viewers decide almost immediately.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A store page with capsule art, screenshots and a trailer is live, and wishlists have been logged monthly against announcements for at least three months."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Commission or make capsule art in the storefront's required sizes"
                - "Cut a trailer under one minute that opens on gameplay"
                - "Publish the store page with accurate tags"
                - "Log wishlist numbers and note any announcement that moved them @recurring(monthly:5)"
            - name: Public demo for a games festival
              description: |-
                ## Purpose
                Online festivals and in-person showcases put a demo in front of thousands of players in a few days, but a demo that crashes or confuses wastes the slot. Building a focused twenty-minute demo, hardening it against the edge cases strangers find and preparing a booth or stream plan turns the event into wishlists and real feedback.

                ## Milestones
                1. A demo scope of fifteen to twenty minutes with a clear ending and a wishlist prompt.
                2. The demo played by five people who have never seen the game.
                3. Analytics or a short survey in place to learn where players stop.
                4. Festival submission made before its deadline, with a stream or booth plan.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A stable demo was submitted to a festival on time, played by five fresh testers beforehand, with drop-off data collected during the event."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Find the submission deadline for the festival you want to enter"
                - "Cut the demo to a twenty-minute route with a clear ending"
                - "Watch five fresh players try the demo without help"
                - "Add an end screen that asks players to wishlist"
            - name: Console certification submission readiness
              description: |-
                ## Purpose
                Console platform holders test every submission against their requirements, and a failed check can cost a week or more on the launch schedule. Running your own pre-certification pass against the platform checklist, with a dedicated build and a clean test pass on retail-equivalent hardware, gives the submission its best chance of passing first time.

                ## Milestones
                1. A submission timeline agreed with the platform contact or publisher.
                2. A full internal pass against the requirements checklist with every item marked.
                3. Suspend and resume, account switching, storage full and network loss tested.
                4. Age rating certificates and store assets ready before submission.
                5. The submission build sent with every known waiver documented.

                ## Notes
                Age ratings from bodies such as the IARC system, ESRB or PEGI can take time. Start them well before the submission build.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A submission build was sent on the agreed date with every requirement checked internally and age ratings in hand."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Confirm the submission window with the platform contact or publisher"
                - "Run every checklist item against a dedicated submission build"
                - "Test suspend, storage full and network loss on retail-equivalent hardware"
                - "Apply for age ratings in every region you will sell in"
            - name: Launch day build and first patch plan
              description: |-
                ## Purpose
                Launch week brings more players, hardware and play styles than every playtest combined, and something will break. Locking a release candidate early, preparing a day-one patch branch, agreeing who is on call and how hotfixes are approved, and watching crash rates by the hour lets a small team respond in hours rather than days.

                ## Milestones
                1. A release candidate locked with only critical fixes allowed after the lock.
                2. A hotfix branch and a tested patch pipeline for every platform.
                3. A launch week rota covering crash monitoring, community channels and builds.
                4. Crash-free session rate and top crash buckets watched hourly on launch day.
                5. The first patch shipped within a week with notes for players.

                ## Notes
                Start from the **Operational checklist** template for launch day. Console patches go through their own certification, so allow for it in the first patch date.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Launch went out from a locked release candidate, a rota covered launch week, and a first patch shipped within seven days."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Set the release candidate lock date and the rule for fixes after it"
                - "Do a dry run of a patch to every platform from the hotfix branch"
                - "Draw up a launch week rota for crashes, community and builds"
                - "Prepare a known issues post ready to publish on launch day"
            - name: Early access first update and public roadmap
              description: |-
                ## Purpose
                Early access players buy into a promise, and the first content update shows whether the game is alive. Publishing a realistic roadmap, shipping the first update on the date you said and reporting back on the feedback that shaped it builds the trust that carries a game to full release.

                ## Milestones
                1. A public roadmap with three or four themes and no exact dates beyond the next update.
                2. A feedback channel where players can report bugs and vote on suggestions.
                3. The first content update shipped on its announced date.
                4. Patch notes that name the player feedback behind each change.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A public roadmap is published and the first early access update shipped on its announced date with patch notes crediting player feedback."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write a roadmap with themes rather than exact dates"
                - "Open a bug report and suggestions channel for players"
                - "Ship the first update on the announced date"
                - "Post a monthly progress note to early access players @recurring(monthly:22)"
                - "Triage the top voted player suggestions with the team @recurring(weekly:thu)"
            - name: First small game shipped solo in six months
              description: |-
                ## Purpose
                Solo developers with a day job, often creatives teaching themselves to code or engineers building games at night, tend to start a dream project too large to finish. Choosing a game that takes one to two hours to play, timeboxing it to six months of evenings and weekends, and shipping it to a real storefront teaches the whole pipeline and gives you a finished game to show.

                ## Milestones
                1. A game concept small enough that a playable version exists in four weeks.
                2. A weekly hours budget that fits around work, family and rest.
                3. A content-complete build by month four and a polish-only month five.
                4. The game released on a storefront or a free distribution site by month six.

                ## Notes
                Your first commercial game is unlikely to earn much; treat it as tuition paid in hours. Finishing matters more than the idea.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete small game is released publicly within six months of starting, with a store or download page anyone can visit."
                cadence: phased
                effort_hours_estimate: "250"
              tasks:
                - "Write three tiny game ideas and pick the one with the fewest systems"
                - "Set a weekly hours budget you can keep for six months"
                - "Block four sessions a week in your calendar for the game @recurring(weekly:sun)"
                - "Mark content complete for month four and release for month six"
            - name: Gameplay scripting for artists and designers
              description: |-
                ## Purpose
                Artists and designers who can script interactions, triggers and simple mechanics stop waiting on programmers and prototype their own ideas. Learning visual scripting or the basics of the engine's language, focused on the things you actually want to make, is the quickest route from a level or a character to something playable.

                ## Milestones
                1. Variables, events and conditions understood through the engine's visual scripting or a beginner course.
                2. A door, a pickup and a simple trap scripted from scratch.
                3. One small mechanic of your own design prototyped and played by someone else.
                4. A short glossary of programming terms you met, in your own words.

                ## Notes
                Pair with a programmer for an hour a week if you can; ten minutes of help saves a day of searching.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A door, a pickup, a trap and one original mechanic are scripted by the learner and played by someone else."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose one beginner course for your engine's visual scripting or language"
                - "Script a door that opens when the player approaches"
                - "Script a pickup and a simple trap without help"
                - "Prototype one mechanic of your own and have someone play it"
            - name: Moving from web or app engineering into games
              description: |-
                ## Purpose
                Engineers from web, backend or mobile work bring strong habits, version control, testing, clean architecture, but games run on frames, mutable shared state and tight memory, and some of those habits work against you. A deliberate transition plan, with a small shipped project, an engine-native mindset and a few games-specific skills, makes the switch faster whether it is a career move or a serious hobby.

                ## Milestones
                1. The differences that bite web engineers written down: the frame loop, allocation, editor-driven workflows and mutable state.
                2. Two tutorials finished and one small original game built in the chosen engine.
                3. A portfolio entry with a playable build, a short video and a note on the hardest problem solved.
                4. Three game developers spoken to about the studio side of the job.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One small original game is playable from a portfolio page with a video and a technical note, and three working game developers have been consulted."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "List the web habits that may not transfer, such as heavy allocation per request"
                - "Finish two official tutorials in your chosen engine"
                - "Build and publish one small original game with a short video"
                - "Arrange three conversations with working game developers"
            - name: Porting a finished PC game to a handheld or console
              description: |-
                ## Purpose
                A game that runs well on a desktop GPU often struggles on a handheld PC or a lower-power console: memory is tighter, text is too small, load times are longer and controls must work without a mouse. A port plan that budgets for performance, UI scale, input and platform requirements avoids a port that sells badly because it feels like an afterthought.

                ## Milestones
                1. The target device profiled with the current build and the gaps listed.
                2. Memory and frame time budgets set for the new platform.
                3. UI text and touch or gamepad controls readable and usable at handheld size.
                4. Platform-specific requirements and store assets identified.
                5. A port build that holds its frame rate target for a full play session.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A port build holds the agreed frame rate target on the device through a full play session, with readable UI and full gamepad control."
                cadence: phased
                effort_hours_estimate: "200"
              tasks:
                - "Run the current build on the target device and list every gap"
                - "Set memory and frame time budgets for the new platform"
                - "Raise UI text size and test it at arm's length on the device"
                - "Play a full session on the device and log every frame drop"
            - name: Rollback netcode for a competitive game
              description: |-
                ## Purpose
                Fighting games and other fast competitive titles feel unplayable online with delay-based netcode, and rollback is now what players expect. Rollback requires a deterministic simulation that can save, restore and resimulate several frames in a single frame, so it touches every gameplay system and is far easier to build in than bolt on.

                ## Milestones
                1. Gameplay simulation separated from rendering and made deterministic across machines.
                2. Game state saving and restoring in well under a millisecond.
                3. Resimulation of up to eight frames within the frame budget.
                4. A desync detector comparing state checksums between peers.
                5. Matches tested under simulated latency, jitter and packet loss.

                ## Notes
                Floating point differences between compilers and CPUs are the usual cause of desyncs; many rollback games use fixed point maths for the simulation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two machines play a full match under 150 milliseconds of simulated latency with rollback, and the checksum desync detector reports no mismatches."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Separate gameplay simulation state from rendering state"
                - "Implement save and restore of the full simulation state"
                - "Add per-frame state checksums and a desync log"
                - "Test matches under simulated latency, jitter and packet loss"
            - name: Job system for multi-core gameplay work
              description: |-
                ## Purpose
                Modern consoles and PCs have six or more cores, yet many games run nearly everything on the main thread. Moving independent work such as animation, pathfinding, culling and particle updates onto a job system, the engine's own or a custom one, can halve main thread time, provided you handle dependencies and data races carefully.

                ## Milestones
                1. A main thread capture showing which systems are independent enough to move.
                2. One system moved to jobs with explicit read and write dependencies.
                3. Race detection or safety checks turned on in development builds.
                4. Main thread time on minimum spec measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one system runs on the job system with dependency checks on, and main thread time on minimum spec has dropped by a measured amount."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Capture the main thread and mark systems with no shared writes"
                - "Move one independent system onto jobs with explicit dependencies"
                - "Turn on the engine's job safety checks in development builds"
                - "Measure main thread time before and after on minimum spec"
            - name: Seeded procedural generation with repeatable results
              description: |-
                ## Purpose
                Procedural levels, loot and worlds let a small team ship far more content, but only if the same seed always produces the same result, otherwise bugs cannot be reproduced and players cannot share seeds. Designing generators around explicit seeded random streams, validation passes and a gallery of saved seeds keeps generation both surprising and debuggable.

                ## Milestones
                1. Every generator drawing from its own seeded random stream, never a global one.
                2. The same seed producing identical output across runs, builds and platforms.
                3. Validation that rejects unwinnable or broken layouts, with a reason logged.
                4. A gallery of a hundred seeds rendered for designers to review.
                5. Bug reports carrying the seed automatically.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hundred saved seeds regenerate identically on every platform, validation rejects broken layouts, and crash reports include the seed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Replace global random calls in generators with seeded streams"
                - "Write a test that generates twenty seeds twice and compares output"
                - "Add a validation pass that rejects unwinnable layouts"
                - "Include the current seed in every crash and bug report"
            - name: Draw call, LOD and occlusion budgets for large scenes
              description: |-
                ## Purpose
                Open levels and dense cities usually miss frame rate on the CPU side of rendering, with too many draw calls, too many objects drawn behind walls and full-detail meshes in the distance. Setting draw call and triangle budgets per scene, then applying batching, instancing, levels of detail and occlusion culling, is the core of rendering performance work for a shipping game.

                ## Milestones
                1. Draw call, triangle and texture memory budgets set per platform.
                2. The heaviest viewpoints in each large level captured and measured.
                3. Instancing or batching applied to repeated props and foliage.
                4. Levels of detail and occlusion culling set up and checked in captures.
                5. Every large level within budget at its worst viewpoint on minimum spec.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every large level stays within the per-platform draw call and triangle budget at its worst measured viewpoint on minimum spec."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Set draw call and triangle budgets for each platform"
                - "Find and capture the three worst viewpoints in the largest level"
                - "Instance repeated props and foliage in that level"
                - "Generate levels of detail and bake occlusion, then recapture"
---

# Game Development Engineering

This area is for engineers and creatives who build video games, from a solo developer finishing a first small title in the evenings to a programmer on a small studio team shipping to PC and consoles. It starts with the foundations (the engine decision, design pillars, a platform spec matrix, version control that copes with large assets, a greybox vertical slice, one-command builds and crash reporting), moves through the routines that keep a project shippable, the core skills of gameplay programming from the game loop and vector maths to physics, shaders, AI, game feel and profiling, then the decisions about tuning data, load times, saves, netcode, middleware, localisation and accessibility, the dated events such as a game jam, a festival demo, certification and launch, the situations an artist, a web engineer or a porting team faces, and finally specialist work on rollback netcode, job systems, procedural generation and rendering budgets.

What repeats is a Friday playable build and a Wednesday playtest review, Monday frame time and memory checks against the budget, Tuesday bug and crash triage, monthly passes over the asset pipeline, save compatibility, the devlog and wishlist numbers, quarterly engine upgrade and platform compliance reviews, and a milestone review at the end of every production phase. The Product spec, Metrics log, Feedback themes, Operational checklist, Purchase decision and Marketing campaign templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
