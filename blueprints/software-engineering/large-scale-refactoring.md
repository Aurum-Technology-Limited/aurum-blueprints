---
id: software-engineering.large-scale-refactoring
name: Large-Scale Refactoring
description: "A one-page target design, a safety net of tests, thin shippable slices behind flags, and the weekly routines that move a big restructuring forward without freezing feature delivery."
category: business
version: 1.0.0
tags: [software-engineering, large-scale-refactoring, engineer, team, refactoring, codemods, feature-flags, incremental-change]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - reading-queue
    - meeting-notes
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Large-Scale Refactoring
          description: "Restructuring significant parts of a codebase safely and incrementally, with tests, feature flags and a plan that never stalls delivery for months."
          projects:
            - name: One-page target design for the refactor
              description: |-
                ## Purpose
                Big refactors drift when nobody can say in two sentences what the code should look like at the end. Writing a single page with the current structure, the target structure, the reason for the change and what is explicitly out of scope gives every later slice a direction to point in, and gives reviewers a way to say no to scope creep.

                ## Milestones
                1. A diagram of the current module structure and one of the target structure, side by side.
                2. Two sentences stating the problem the refactor solves in terms of change cost, defects or speed.
                3. A list of at least five things the refactor will deliberately not change.
                4. The page reviewed by two engineers who work in the affected code and linked from the repository.

                ## Notes
                Keep it to one page. If the target design needs ten pages, the refactor is probably two or three refactors and should be split.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page target design with before and after diagrams, a problem statement and a non-goals list is reviewed by two engineers and linked from the repository."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the current structure of the affected modules on one sheet"
                - "Write the two-sentence problem statement in terms of change cost"
                - "List five things the refactor will not touch"
                - "Ask two engineers from the affected code to review the page"
            - name: Scope map of every file and caller the refactor touches
              description: |-
                ## Purpose
                Teams routinely underestimate refactors by a factor of three because nobody counted the call sites before starting. Searching the codebase for every import, call and reflection-based use of the code being restructured turns a guess into a number, and shows which teams own the code you will have to change.

                ## Milestones
                1. A count of files, call sites and packages that use the code being restructured.
                2. Dynamic uses such as reflection, string-based lookups and configuration-driven wiring listed separately.
                3. Each affected directory tagged with its owning team.
                4. The scope numbers added to the target design page.

                ## Notes
                Static search misses dynamic dispatch, serialised class names and code generated at build time. Grep for the string names too, and check the logs for runtime uses.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written scope map gives the number of affected files and call sites, lists dynamic uses separately and names the owner of every affected directory."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run a code search for every import of the module being restructured"
                - "Search for string references to its class and function names"
                - "Tag each affected directory with its owner from the code owners file"
                - "Add the call site count to the target design page"
            - name: Test coverage audit of the code being restructured
              description: |-
                ## Purpose
                Refactoring without tests is just editing with your fingers crossed. Before moving anything, find out which parts of the affected code are covered by tests that would actually fail if behaviour changed, as opposed to tests that only execute lines, so you know where the safety net has holes.

                ## Milestones
                1. Line and branch coverage reported for each affected module.
                2. A mutation testing run or a manual spot check on the three most critical modules.
                3. A ranked list of untested behaviours that the refactor will touch.
                4. A decision recorded on which gaps must be closed before the first slice ships.

                ## Notes
                High line coverage with weak assertions is common. Mutation testing, even on a small sample, tells you whether the tests would notice a broken refactor.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Coverage and a mutation or spot check result exist for every affected module, with a ranked gap list and a recorded decision on which gaps block the first slice."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Generate a coverage report filtered to the affected directories"
                - "Run a mutation testing tool on the most critical module"
                - "Rank the untested behaviours by how much the refactor touches them"
                - "Agree with the team which gaps block the first slice"
            - name: Behaviour-pinning harness for the refactor zone
              description: |-
                ## Purpose
                Once the gaps are known, the fastest way to close them is often not hand-written unit tests but a harness that records real inputs and the current outputs, then fails when the outputs change. Pinning behaviour this way, including the odd behaviour nobody would design on purpose, means the refactor can move code freely and still prove it changed nothing.

                ## Milestones
                1. A set of recorded inputs drawn from production logs or fixtures, with personal data removed.
                2. Approved output snapshots stored alongside the tests for each entry point being restructured.
                3. The harness running in continuous integration on every pull request.
                4. Known quirks in the current behaviour listed so nobody fixes them by accident mid-refactor.

                ## Notes
                Strip or synthesise personal data before recording anything from production. Fix quirks in a separate, labelled change after the refactor, never inside it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approval-test harness covering every entry point in the refactor zone runs in continuous integration and fails on any change to recorded outputs."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick the entry points that every slice of the refactor will pass through"
                - "Capture fifty representative inputs with personal data removed"
                - "Record current outputs as approved snapshots"
                - "Add the harness to the pull request pipeline"
            - name: Slicing plan of independently shippable steps
              description: |-
                ## Purpose
                The refactors that stall are the ones planned as one big bang merged after four months. Breaking the work into steps that each ship to production on their own, leave the system working and could be the last step if priorities change, is what keeps a refactor compatible with delivery.

                ## Milestones
                1. A numbered list of slices, each small enough to merge within a week.
                2. Every slice described with what ships, how it is verified and how it is rolled back.
                3. Dependencies between slices drawn so parallel work is visible.
                4. A point identified after which stopping would still leave the code better than today.

                ## Notes
                A good test of a slice: if the refactor were cancelled the day after it merged, would anyone need to revert it? If yes, the slice is too big or in the wrong order.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan lists every slice with its verification and rollback, no slice takes more than a week, and a safe stopping point is marked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to propose a first cut of slices from the target design page"
                - "Rewrite any slice that cannot ship to production on its own"
                - "Mark the earliest point where stopping still leaves the code better"
                - "Revisit the slice order against what actually shipped @recurring(monthly:5)"
            - name: Refactor charter agreed with product
              description: |-
                ## Purpose
                Refactors die when the product manager learns about them from a slipped feature date. Agreeing up front how much capacity the refactor gets, which features it might delay, and what product gets in return (faster changes in a named area, fewer incidents) turns it from a side project into a commitment both sides can defend.

                ## Milestones
                1. A capacity share agreed, such as one engineer full time or twenty percent of the team.
                2. The features most likely to be affected named, with the expected impact on each.
                3. One measurable payoff product can see, tied to the baseline metrics.
                4. The charter signed off by the engineering lead and product manager and revisited each quarter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written charter states the capacity share, the features at risk and one measurable payoff, and is approved by the engineering lead and product manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the capacity ask and the features it could delay"
                - "Pick one payoff product will notice, such as faster checkout changes"
                - "Walk the product manager through the charter in a thirty-minute meeting"
                - "Revisit the capacity share with product @recurring(quarterly)"
            - name: Feature flag and rollback design for each slice
              description: |-
                ## Purpose
                Every slice that changes runtime behaviour needs a way back that takes minutes, not a revert, rebuild and redeploy. Designing the flag strategy once (which slices sit behind a toggle, who can flip it, how traffic is split and when the toggle is removed) means a bad slice is an inconvenience rather than an incident.

                ## Milestones
                1. Each runtime-affecting slice marked as flagged, shadowed or safe to ship unflagged.
                2. A flag naming convention and an owner field for every refactor toggle.
                3. A tested rollback for the first flagged slice, timed from decision to recovery.
                4. A removal date set for every toggle at the moment it is created.

                ## Notes
                Purely structural changes with identical behaviour, such as moving a file, rarely need a flag. Anything that swaps an implementation does.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every runtime-affecting slice has a named toggle with an owner and removal date, and one rollback has been rehearsed and timed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark each slice in the plan as flagged, shadowed or unflagged"
                - "Agree a naming convention for refactor toggles"
                - "Rehearse flipping the first toggle off in staging and time it"
                - "Add a removal date to every toggle you create"
            - name: Baseline metrics before the restructuring starts
              description: |-
                ## Purpose
                Six months in, someone will ask whether the refactor was worth it, and without a before picture the answer is a feeling. Recording build time, test time, coupling between the affected modules, defect counts and the lead time for changes in that area now makes the payoff visible later.

                ## Milestones
                1. Build and test times for the affected packages recorded.
                2. Coupling measured, such as the number of imports crossing the planned boundaries.
                3. Defects and incidents traced to the affected code over the last six months counted.
                4. Median lead time for changes touching the area recorded from version control.

                ## Notes
                Start from the **Metrics log** template. Measure only what the charter promised to improve, plus one guard metric such as defect rate.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A metrics log holds dated baseline values for build time, cross-boundary imports, defects and lead time in the affected area."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record current build and test times for the affected packages"
                - "Count imports that cross the boundaries in the target design"
                - "Count defects tagged to the affected code in the last six months"
                - "Re-measure the baseline numbers and log them @recurring(quarterly)"
            - name: Choosing the technique for each component
              description: |-
                ## Purpose
                Not every part of a big refactor should be done the same way. Some components suit branch by abstraction, some suit parallel change on an interface, some are small enough for an automated IDE move, and a few are better deleted and rebuilt. Deciding per component stops the team forcing one technique onto code it does not fit.

                ## Milestones
                1. Each component in the scope map assigned a technique with a one-line reason.
                2. Components needing a shadow comparison or dual run identified.
                3. Mechanical changes suitable for a codemod separated from those needing hand edits.
                4. The choices recorded in the slicing plan.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every component in the scope map has a recorded technique and reason, and codemod candidates are separated from manual work."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the components from the scope map in a table"
                - "Assign a technique and a one-line reason to each"
                - "Flag the components that need old and new running side by side"
                - "Copy the technique column into the slicing plan"
            - name: Weekly slice merge rhythm
              description: |-
                ## Purpose
                Momentum is the scarcest resource in a long refactor, and a fixed weekly merge keeps it visible. Landing at least one slice on trunk every week, however small, stops work piling up on a branch and gives the team a heartbeat they can see in the commit history.

                ## Milestones
                1. A standing day each week when at least one refactor slice merges.
                2. Every refactor pull request labelled so the weekly count is easy to read.
                3. Weeks with no merge noted with a one-line reason.
                4. Eight consecutive weeks with at least one slice merged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one labelled refactor slice merges to trunk in eight consecutive weeks, with any missed week explained."
                cadence: rolling
              tasks:
                - "Create a refactor label in the repository"
                - "Merge the week's refactor slice to trunk @recurring(weekly:tue)"
                - "Note the reason in the tracker when a week passes without a merge"
            - name: Daily integration of refactor work to trunk
              description: |-
                ## Purpose
                Refactor branches rot faster than feature branches because they touch so many files that every other merge conflicts with them. Integrating refactor work into trunk every day, with incomplete parts hidden behind abstractions or flags, keeps conflicts small and stops the refactor becoming a merge nightmare in week six.

                ## Milestones
                1. No refactor branch older than two working days.
                2. Incomplete work hidden behind an abstraction or toggle rather than kept on a branch.
                3. Conflicts reported by feature developers tracked and falling over time.
                4. The practice written into the refactor charter.

                ## Notes
                If daily integration feels impossible, the slices are too large. Go back to the slicing plan rather than accepting a long-lived branch.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a month, no refactor branch lives longer than two working days and conflicts caused by refactor work are logged and trending down."
                cadence: rolling
              tasks:
                - "List every open refactor branch and its age"
                - "Rebase and merge the day's refactor work to trunk @recurring(daily)"
                - "Log any merge conflict a feature developer hit because of refactor code"
            - name: Migration progress tracker by call site
              description: |-
                ## Purpose
                Nothing kills support for a refactor like the sense that it is always eighty percent done. A tracker that counts remaining uses of the old structure, generated by a script rather than by hand, shows real progress, highlights where it has stalled and gives the weekly update a number instead of a mood.

                ## Milestones
                1. A script that counts remaining uses of the old API or structure, run in continuous integration.
                2. A chart of the remaining count over time, broken down by owning team.
                3. The count shared in the weekly update.
                4. A monthly summary with the trend and a projected finish date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An automated count of remaining old-structure uses is charted weekly by team and summarised monthly with a projected finish date."
                cadence: rolling
              tasks:
                - "Write a script that counts remaining uses of the old structure"
                - "Post the remaining count by team in the team channel @recurring(weekly:fri)"
                - "Write the monthly trend and projected finish date @recurring(monthly:3)"
                - "Add the script output as a pipeline artefact"
            - name: Refactor risk register
              description: |-
                ## Purpose
                Long refactors carry risks that are invisible on any single day: a silent behaviour change, a performance cliff, a key person leaving, a product deadline colliding with the riskiest slice. Keeping them in one register with an owner and a trigger for each means they get looked at monthly instead of discovered in an incident review.

                ## Milestones
                1. At least eight risks listed with likelihood, impact, owner and an early warning sign.
                2. A mitigation or acceptance recorded for every high risk.
                3. The register reviewed monthly with closed risks moved to a history section.
                4. Each risk that materialised linked to what was learned.

                ## Notes
                Start from the **Risk register** template. Include people risks such as the one engineer who understands the old code.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register with owners and warning signs for at least eight risks is reviewed monthly for six months, with mitigations for every high risk."
                cadence: rolling
              tasks:
                - "List the eight biggest risks to the refactor with an owner each"
                - "Write the early warning sign for every high risk"
                - "Review and update the refactor risk register @recurring(monthly:9)"
            - name: Monthly stakeholder update on the refactor
              description: |-
                ## Purpose
                Product managers, other team leads and the engineering manager need to know the refactor is alive, roughly where it is, and what it will ask of them next month. A short update on a fixed day, with the remaining count, slices shipped and the next asks, heads off the quarterly question of whether to cancel it.

                ## Milestones
                1. A five-line update format agreed: progress number, slices shipped, payoff so far, next asks, risks.
                2. The update sent on the same day each month for three months.
                3. Asks of other teams named with a date, not left implicit.
                4. Replies and concerns from stakeholders logged and answered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-line refactor update with a progress number and named asks goes to stakeholders on a fixed day for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the five-line update format with the engineering manager"
                - "Send the monthly refactor update to stakeholders @recurring(monthly:14)"
                - "Log each stakeholder concern and the answer given"
            - name: Refactor toggle lifecycle and removal
              description: |-
                ## Purpose
                Each flag added to make a refactor safe is a second code path that has to be tested and understood. Without a monthly sweep, a refactor can leave behind thirty dead toggles and two implementations of everything, which is worse than where it started. Removing toggles on schedule is part of finishing.

                ## Milestones
                1. A list of every refactor toggle with owner, state and removal date.
                2. Toggles at one hundred percent for two weeks or more scheduled for removal.
                3. The losing code path deleted in the same change that removes each toggle.
                4. No refactor toggle older than its removal date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every refactor toggle has an owner and removal date, and for three months none survives past its date."
                cadence: rolling
              tasks:
                - "Export the list of refactor toggles from the flag tool"
                - "Remove toggles that have been fully on for two weeks @recurring(monthly:20)"
                - "Delete the dead code path in the same pull request as the toggle"
            - name: Deprecation guard against new uses of the old structure
              description: |-
                ## Purpose
                Refactors lose ground when feature work keeps adding fresh calls to the API being replaced. A lint rule or architecture test that blocks new uses, with an allow list for the existing ones that shrinks as they are migrated, turns the remaining count into a ratchet that can only go down.

                ## Milestones
                1. The old API or import path marked deprecated with a pointer to the replacement.
                2. A lint rule or test that fails on new uses outside an allow list.
                3. The allow list generated from current uses and checked into the repository.
                4. The allow list shrinking every week as call sites move.

                ## Notes
                Make the failure message say exactly what to use instead, with a link to an example. A guard that only says no makes people suppress it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline check blocks new uses of the old structure, and the checked-in allow list has shrunk in at least six of eight weeks."
                cadence: rolling
              tasks:
                - "Mark the old API as deprecated with a pointer to its replacement"
                - "Add a lint rule that fails on new uses outside the allow list"
                - "Regenerate the allow list and commit the smaller version @recurring(weekly:mon)"
            - name: Old versus new mismatch review
              description: |-
                ## Purpose
                When a slice runs the new implementation alongside the old one and compares results, the comparison is only useful if someone reads the mismatches. A weekly look at the mismatch log, sorted by count, finds the edge cases that tests missed before traffic is moved to the new path.

                ## Milestones
                1. Mismatches from every dual-running slice logged with input, old output and new output.
                2. A weekly review that classifies each mismatch type as bug, intended change or noise.
                3. Bugs fixed and noise filtered so the log trends towards zero.
                4. No slice switched over while it has unexplained mismatches.

                ## Notes
                Run comparisons only on read paths or with side effects suppressed in the new path. Writing twice can corrupt data.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dual-running slice has a mismatch log reviewed weekly, and no slice is switched over with unexplained mismatches outstanding."
                cadence: rolling
              tasks:
                - "Make sure each dual-running slice logs input, old and new outputs"
                - "Classify the week's mismatch types as bug, intended or noise @recurring(weekly:wed)"
                - "Open a ticket for every mismatch classified as a bug"
            - name: Monthly refactor retrospective
              description: |-
                ## Purpose
                Big restructurings teach the team a lot about its own code, but the lessons evaporate unless they are written down while the work is still going. A thirty-minute monthly retrospective focused only on the refactor catches slices that were too big, techniques that did not fit and friction with feature work while there is still time to change course.

                ## Milestones
                1. A thirty-minute retrospective held each month with everyone who worked on the refactor.
                2. One change to the process agreed and owned each time.
                3. Agreed changes checked at the next retrospective.
                4. Recurring themes collected for the completion write-up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly refactor retrospectives are held for four months, each producing one owned process change that is checked the following month."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with the refactor contributors"
                - "Run the refactor retrospective and record one owned change @recurring(monthly:26)"
                - "Check whether last month's change actually happened"
            - name: Heads-up to feature teams before disruptive changes
              description: |-
                ## Purpose
                Renaming something across four hundred files is trivial to merge and miserable for the colleague who has a week-old branch in the same area. Telling feature teams each week which mechanical changes are about to land, and when, lets them merge first or rebase calmly instead of finding out from a wall of conflicts.

                ## Milestones
                1. A weekly note listing the refactor changes landing in the next seven days and the directories affected.
                2. A rule that repo-wide mechanical changes land at a fixed, announced time.
                3. Feature teams able to ask for a delay of up to two days.
                4. Fewer conflict complaints in the second month than the first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly heads-up names upcoming refactor changes and affected directories, and logged conflict complaints fall between the first and second month."
                cadence: rolling
              tasks:
                - "Pick a fixed weekly slot for landing repo-wide mechanical changes"
                - "Post next week's disruptive refactor changes to feature teams @recurring(weekly:thu)"
                - "Log each conflict complaint with the change that caused it"
            - name: Practising the refactoring catalogue on katas
              description: |-
                ## Purpose
                Extract function, move field, replace conditional with polymorphism and the other named refactorings are only safe at scale when they are second nature in small. Working through the catalogue on short katas, one move at a time with tests green after each step, builds the habit of tiny, reversible steps that big refactors depend on.

                ## Milestones
                1. Twenty named refactorings from a standard catalogue practised on katas.
                2. Each practised with tests passing after every single step.
                3. Commits kept to one refactoring each during practice.
                4. Three moves you found hardest repeated on a real file in your codebase.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty named refactorings are practised on katas with one commit per move and green tests after every step, and three are reapplied to real code."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick a refactoring kata such as Gilded Rose or Tennis"
                - "Practise two named refactorings on a kata @recurring(monthly:17)"
                - "Commit after each single move during practice"
                - "Apply your hardest move to a real file in the codebase"
            - name: Mikado method on a real dependency knot
              description: |-
                ## Purpose
                Some changes cannot be made directly because each one breaks something else, and attempting them head on ends with a branch of a hundred broken files. The Mikado method has you try the change, note what breaks, revert, and fix the prerequisites first, producing a graph of small safe steps. Trying it on a real knot in your code teaches it far better than reading about it.

                ## Milestones
                1. A real change chosen that fails when attempted directly.
                2. A Mikado graph drawn with the goal at the top and prerequisites below it.
                3. Every leaf prerequisite completed as its own small commit.
                4. The original goal merged after the prerequisites, with the graph kept in the pull request.

                ## Notes
                The revert is the point. Resist the urge to keep the broken attempt and fix forward.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real change is delivered using a Mikado graph, with every prerequisite merged as its own commit and the graph attached to the final pull request."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a change that breaks the build when tried directly"
                - "Try it, note what breaks, then revert everything"
                - "Draw the Mikado graph and start from a leaf"
                - "Merge the goal and attach the graph to the pull request"
            - name: Branch by abstraction on a contained component
              description: |-
                ## Purpose
                Branch by abstraction lets you replace an implementation on trunk without a long-lived branch: introduce an interface, move callers onto it, build the new implementation behind it, switch, then remove the old one. Doing it once end to end on a small component, such as a caching layer or a report generator, makes it the default for larger swaps.

                ## Milestones
                1. An interface introduced in front of the existing implementation with no behaviour change.
                2. All callers moved onto the interface in small commits.
                3. The new implementation built behind the interface and switched on with a toggle.
                4. The old implementation and, where it adds nothing, the interface removed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One component is replaced via branch by abstraction entirely on trunk, ending with the old implementation deleted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick a small component with a clear boundary to practise on"
                - "Introduce an interface in front of it with no behaviour change"
                - "Move callers onto the interface one package at a time"
                - "Switch to the new implementation and delete the old one"
            - name: Parallel change for interfaces and data shapes
              description: |-
                ## Purpose
                Changing a function signature, an event payload or a configuration format used in hundreds of places is safest in three phases: expand to support both forms, migrate every user, then contract by removing the old form. Practising expand, migrate and contract on one real interface shows how to keep the code deployable at every point.

                ## Milestones
                1. One interface or data shape chosen that has many users.
                2. The expand step merged, with both old and new forms supported.
                3. All users migrated with the remaining count at zero.
                4. The contract step merged, removing the old form.

                ## Notes
                Persisted data and messages already in queues outlive deploys. Keep the expand step until every stored copy of the old shape has been rewritten or expired.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One interface with many users completes expand, migrate and contract as three separate merges with the system deployable throughout."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose an interface or payload shape used in many places"
                - "Merge an expand change that accepts both old and new forms"
                - "Migrate users and watch the remaining count fall to zero"
                - "Merge the contract change that removes the old form"
            - name: Writing codemods with an AST transformation tool
              description: |-
                ## Purpose
                Hand-editing two thousand call sites is slow and error-prone, and regular expressions break on the first multi-line call. Learning to write codemods that parse code into a syntax tree, transform it and print it back, using the tool that fits your language, turns a month of mechanical edits into an afternoon plus review.

                ## Milestones
                1. An AST codemod tool for your main language installed and its tutorial completed.
                2. A first codemod written with test fixtures for input and expected output.
                3. The codemod run on one directory, reviewed and merged.
                4. Edge cases it could not handle listed for manual follow-up.

                ## Notes
                Keep the codemod in the repository with its tests. You will run it again on code merged after the first pass.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tested codemod lives in the repository, has been run and merged on at least one directory, and its unhandled cases are listed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Install an AST codemod tool for your main language"
                - "Write input and expected output fixtures for one transformation"
                - "Run the codemod on a single directory and review the diff"
                - "List the cases the codemod skipped for manual edits"
            - name: Automated IDE refactorings and their limits
              description: |-
                ## Purpose
                Rename, extract and move refactorings in a good IDE are safe in statically typed code and quietly unsafe around reflection, templates, configuration files and dynamic languages. Testing exactly where your tools stop being trustworthy, on your own codebase, tells you which changes can be clicked through and which need a codemod or careful review.

                ## Milestones
                1. Rename, extract method, move class and change signature tried on real code.
                2. Each checked for misses in configuration files, templates, string references and tests.
                3. A short team note listing which automated refactorings are safe in your codebase.
                4. One gap in tooling covered by a test or lint rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team note lists which IDE refactorings are safe in this codebase, based on tests of four refactorings against real code."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rename a widely used class with the IDE and search for what it missed"
                - "Try move class across packages and check configuration and templates"
                - "Write the team note on safe and unsafe automated refactorings"
            - name: Reading list on refactoring at scale
              description: |-
                ## Purpose
                Only a handful of books and talks explain most of what teams relearn painfully on their first big refactor: small steps, seams, parallel change and how large companies ship changes across millions of lines. Working through a short list, one item a month, and noting what applies to your codebase gives the team a shared vocabulary.

                ## Milestones
                1. A list of six books, chapters or talks on refactoring and large-scale change.
                2. One item finished each month with a short note on what applies here.
                3. Two ideas from the list tried on the current refactor.
                4. The notes shared in the team wiki.

                ## Notes
                Start from the **Reading queue** template. Good anchors are the standard refactoring catalogue, a book on working with legacy code and published accounts of large-scale changes at big engineering organisations.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six items on refactoring at scale are read or watched with a written note each, and two of their ideas are tried on the current refactor."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the agent to suggest six books and talks on large-scale code change"
                - "Finish one item and write what applies to your code @recurring(monthly:22)"
                - "Try one idea from the list on the current refactor"
            - name: Reviewing large mechanical diffs well
              description: |-
                ## Purpose
                A two-thousand-line codemod diff gets either rubber-stamped or abandoned, and both are dangerous. Learning to review generated changes properly, by reviewing the codemod and its fixtures, sampling the output, and splitting hand edits into a separate commit, keeps review meaningful without asking someone to read every line.

                ## Milestones
                1. A rule that generated changes and hand edits never share a commit.
                2. A review checklist for codemod pull requests: the script, fixtures, a sample and the skipped cases.
                3. Three mechanical pull requests reviewed using the checklist.
                4. The checklist added to the pull request template for refactor changes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A codemod review checklist exists in the pull request template and has been used on three mechanical pull requests with hand edits in separate commits."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a four-point checklist for reviewing codemod pull requests"
                - "Split hand edits from generated changes in the next refactor pull request"
                - "Use the checklist on three mechanical pull requests"
                - "Add the checklist to the refactor pull request template"
            - name: Finding seams in tightly coupled code
              description: |-
                ## Purpose
                A seam is a place where you can change behaviour without editing the code in that place, such as a constructor parameter, an interface or a module boundary. Tightly coupled code seems impossible to refactor until you learn to spot and create seams, which is what lets you get the first tests and the first slice in.

                ## Milestones
                1. The main seam types listed with an example of each from your own code.
                2. Three seams created in the refactor zone without changing behaviour.
                3. A test written through each new seam.
                4. A short guide to seams in this codebase shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three new seams exist in the refactor zone, each exercised by a test, and a short guide to seams in this codebase is shared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find one example each of object, link and preprocessing seams in your code"
                - "Create a seam in the refactor zone with no behaviour change"
                - "Write a test that uses the new seam"
                - "Share a one-page guide to seams with the team"
            - name: Splitting a god class into cohesive units
              description: |-
                ## Purpose
                Most codebases have one class or module of several thousand lines that half of all changes pass through. Splitting it by responsibility, guided by which methods use which fields and which change together in version control, turns the area every engineer dreads into a handful of units that can be changed and reviewed separately.

                ## Milestones
                1. A map of methods grouped by the fields and collaborators they use.
                2. Change coupling from version control used to confirm the groups.
                3. Each group extracted into its own unit in a separate merged slice.
                4. The original class reduced to a thin facade or removed.

                ## Notes
                Extract the group with the fewest dependencies first. The first extraction is the hardest, and the rest go faster once the pattern is set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The largest class in the refactor zone is split into cohesive units through separate merged slices, leaving a thin facade or nothing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Group the methods of the largest class by the fields they touch"
                - "Check the groups against which methods change together in history"
                - "Extract the group with the fewest dependencies first"
                - "Reduce what remains to a facade or delete it"
            - name: Renaming a core domain concept everywhere
              description: |-
                ## Purpose
                When the business has called something a subscription for years and the code still calls it an account plan, every conversation needs translation and every new engineer gets it wrong. Renaming a core concept across code, database, events and documentation is a large change done in safe stages, and pays off every day afterwards.

                ## Milestones
                1. The old and new names agreed with product and written in the glossary.
                2. Code identifiers renamed by codemod in a single announced change.
                3. Database columns, event names and public fields renamed through parallel change.
                4. Documentation, dashboards and log fields updated and the old name blocked by a lint rule.

                ## Notes
                Rename internal code first in one sweep, then external names such as columns and payloads in expand and contract stages. External names are the slow part.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The old name of the concept appears nowhere in code, schema, events or docs except in a lint rule that blocks it."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree the new name with product and add it to the glossary"
                - "Rename internal identifiers with a codemod in one announced change"
                - "Plan expand and contract steps for columns and event fields"
                - "Add a lint rule that rejects the old name"
            - name: Breaking a package dependency cycle
              description: |-
                ## Purpose
                Two packages that import each other cannot be built, tested or understood separately, and cycles tend to spread until the whole codebase is one tangle. Breaking the worst cycle, usually by inverting one dependency through an interface or moving shared types into a third package, is often what makes every other part of a restructuring possible.

                ## Milestones
                1. All package cycles in the refactor zone listed by a dependency analysis tool.
                2. The cycle with the most edges chosen and the edges causing it identified.
                3. The cycle broken through dependency inversion or by moving shared types.
                4. A check in continuous integration that fails if the cycle returns.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The largest package cycle in the refactor zone is broken and a pipeline check fails on its reintroduction."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Run a dependency analysis tool and list cycles in the refactor zone"
                - "Pick the cycle with the most edges and find the edges causing it"
                - "Invert one dependency through an interface or move the shared types"
                - "Add a pipeline check that fails if the cycle comes back"
            - name: Replacing a global singleton with injected dependencies
              description: |-
                ## Purpose
                Global database handles, config objects and service locators reachable from everywhere make code impossible to test in isolation and hide who depends on what. Passing it in explicitly, one layer at a time from the edges inwards, makes dependencies visible and is usually the step that makes the rest of a refactor testable.

                ## Milestones
                1. Every access to the singleton counted and grouped by layer.
                2. Constructors or function parameters added at the outermost layer first.
                3. Direct global access removed layer by layer, with the count tracked.
                4. The global accessor deleted or restricted to the composition root.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Direct access to the chosen singleton is confined to the composition root, confirmed by a lint rule or search returning zero other uses."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count every direct access to the singleton by layer"
                - "Inject it into the outermost layer and pass it inwards"
                - "Remove direct access one layer per slice"
                - "Restrict the global accessor to the composition root"
            - name: Incremental strict typing migration
              description: |-
                ## Purpose
                Moving a large dynamically typed codebase to static types, or turning on strict null checks in an existing typed one, is impossible in one go and very achievable file by file. A per-file opt-in, an error count that only goes down, and a rule that new files start strict make the migration steady and visible.

                ## Milestones
                1. The type checker configured so strict files and legacy files can coexist.
                2. All new files required to be strict from the first day.
                3. Strict file count and remaining error count tracked weekly.
                4. The legacy allowance removed once the remaining count reaches zero.

                ## Notes
                Convert leaf modules with no internal dependencies first. Types flow outwards, so converting core modules early creates a flood of errors elsewhere.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The type checker runs in strict mode on every file with no legacy allowance left, and the weekly error count reached zero."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Configure the type checker to allow strict and legacy files side by side"
                - "Require strict mode for every new file in the lint config"
                - "Post the strict file and remaining error counts @recurring(weekly:fri)"
                - "Convert the leaf modules with no internal dependencies first"
            - name: Moving a service layer from blocking to async code
              description: |-
                ## Purpose
                Converting blocking or callback-based code to async calls ripples upwards through every caller, which is why half-finished async migrations are so common. Planning the order from the leaves upwards, with adapters at the boundary between converted and unconverted code, lets the migration happen in slices without a big bang.

                ## Milestones
                1. The call graph from blocking I/O up to the entry points mapped.
                2. An adapter pattern agreed for calling async code from sync code and back.
                3. Leaf I/O functions converted first, then callers layer by layer.
                4. Adapters removed once each path is async end to end.

                ## Notes
                Watch for blocking calls hidden inside async code, which can stall the whole event loop. Add a check or log warning for them during the migration.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The chosen service layer is async from entry point to I/O with no remaining sync and async adapters on its paths."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map the call chain from blocking I/O up to the entry points"
                - "Agree one adapter for crossing between sync and async code"
                - "Convert the leaf I/O functions first"
                - "Remove each adapter once its path is fully async"
            - name: Consolidating error handling into one pattern
              description: |-
                ## Purpose
                Codebases that grew over years often handle errors four ways at once: exceptions, return codes, result types and silent logging. Choosing one pattern and moving the affected code to it makes failures predictable, logs consistent and reviews simpler, and is a good refactor for a team to practise slicing on.

                ## Milestones
                1. The error handling styles in use counted by module.
                2. One pattern chosen and documented with examples for the common cases.
                3. Modules migrated one per slice, with error behaviour pinned by tests.
                4. A lint rule or review check rejecting the retired styles.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All modules in the refactor zone use the one documented error handling pattern, and a check rejects the retired styles."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count the error handling styles in use in each module"
                - "Write the chosen pattern with three worked examples"
                - "Migrate one module per slice with error paths pinned by tests"
                - "Add a check that flags the retired styles"
            - name: Rewrite or refactor decision for the worst module
              description: |-
                ## Purpose
                Every big refactor has a module where someone says it would be faster to rewrite it from scratch. Sometimes that is true, often it is not, because rewrites lose years of undocumented edge cases. Making the call deliberately, with estimates for both paths and the risks of each, stops the argument recurring every sprint.

                ## Milestones
                1. The module's size, test coverage, change frequency and known edge cases summarised.
                2. Effort and risk estimated for incremental refactor and for rewrite.
                3. The decision recorded with reasons and the conditions under which it would be revisited.
                4. The decision shared with the team and product manager.

                ## Notes
                A rewrite still needs the behaviour-pinning harness and a dual run. If you cannot afford those, you cannot afford the rewrite.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rewrite or refactor decision for the worst module includes estimates and risks for both paths and the conditions for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the module's size, coverage and change frequency"
                - "List the undocumented edge cases the module handles"
                - "Estimate effort and risk for both refactor and rewrite"
                - "Record the decision and when you would revisit it"
            - name: Refactor kickoff session with the whole team
              description: |-
                ## Purpose
                Engineers who were not in the planning meetings will otherwise learn the refactor exists when their pull request is blocked by a deprecation rule. A ninety-minute kickoff that walks through the target design, the slicing plan, the guard rules and how to get help gets everyone pulling the same way from week one.

                ## Milestones
                1. A ninety-minute session held with every engineer who works in the affected code.
                2. The target design, slicing plan and new rules presented with time for questions.
                3. Questions and objections recorded with an owner for each answer.
                4. A short how-to page published for feature developers working near the refactor.

                ## Notes
                Start from the **Meeting notes** template. Invite at least one person from each team that owns affected code, not just your own team.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff is held with all engineers in the affected code, questions are logged with owners and a how-to page for feature developers is published."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book ninety minutes with every engineer in the affected code"
                - "Prepare a ten-minute walkthrough of the target design and slices"
                - "Record each question and objection with an owner"
                - "Publish a one-page how-to for feature developers near the refactor"
            - name: Landing a repo-wide codemod in one announced change
              description: |-
                ## Purpose
                Some changes, such as a package rename or an import path move, are best landed everywhere at once so nobody lives with two names. Preparing the codemod in advance, announcing a time, freezing merges for an hour and running it on fresh trunk turns a frightening change into a non-event.

                ## Milestones
                1. The codemod tested on a full copy of trunk the day before, with build and tests green.
                2. A date and time announced to every team at least a week ahead.
                3. A merge freeze of one hour or less while the change is regenerated and merged.
                4. Open branches given a script to apply the same change to themselves.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A repo-wide codemod lands at the announced time with a merge freeze under one hour and a script published for open branches."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run the codemod on a fresh copy of trunk and check build and tests"
                - "Announce the landing time to every team a week ahead"
                - "Regenerate the change on fresh trunk during a short merge freeze"
                - "Publish the script for open branches to apply themselves"
            - name: Mid-point go or no-go checkpoint
              description: |-
                ## Purpose
                Halfway through, the refactor has cost real time and the payoff is only partly visible, which is exactly when to decide on purpose whether to finish, narrow or stop at the safe point. A dated checkpoint with the progress number, metric changes and remaining estimate makes that decision honest rather than political.

                ## Milestones
                1. Progress, remaining estimate and metric changes since the baseline summarised on one page.
                2. Options laid out: finish as planned, narrow the scope, or stop at the safe point.
                3. A decision taken with the engineering lead and product manager.
                4. The slicing plan and charter updated to match the decision.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated checkpoint records a finish, narrow or stop decision based on progress and metrics, and the plan and charter are updated to match."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the progress count and remaining estimate onto one page"
                - "Compare current metrics to the baseline"
                - "Present finish, narrow and stop options to the lead and product"
                - "Update the slicing plan and charter to match the decision"
            - name: Deleting the old code path for good
              description: |-
                ## Purpose
                A refactor that never deletes the old code has only added a second way of doing things. The contract step, removing the old implementation, its toggles, adapters, allow lists and tests once nothing uses them, is the moment the codebase actually becomes simpler, and deserves to be planned and celebrated as an event.

                ## Milestones
                1. The remaining use count at zero and confirmed by runtime logs for two weeks.
                2. Old implementation, adapters, toggles and their tests removed in clearly labelled changes.
                3. Deprecation allow lists deleted and the guard rule turned into a permanent ban.
                4. Lines of code removed announced to the team.

                ## Notes
                Check runtime logs, not just static search, before deleting. A scheduled job or an old mobile client can still call the old path weeks after the last code reference disappears.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old implementation, its toggles, adapters and tests are deleted after two weeks of zero runtime use, and the guard rule is a permanent ban."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm two weeks of zero runtime calls to the old path in logs"
                - "Delete the old implementation and its tests in a labelled change"
                - "Remove adapters, toggles and allow lists that only served the old path"
                - "Announce the lines of code removed to the team"
            - name: Refactor completion review and write-up
              description: |-
                ## Purpose
                Once the old path is gone, the team is ready to move on and the lessons are at risk of being lost. A completion review that compares the result with the target design and the baseline metrics, and records what to do differently next time, is what makes the second big refactor faster than the first.

                ## Milestones
                1. Final metrics compared with the baseline in the metrics log.
                2. The finished structure compared with the original target design, with differences explained.
                3. Five lessons recorded, drawn from the monthly retrospectives.
                4. The write-up shared with engineering and linked from the architecture docs.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A write-up compares final metrics with the baseline and the result with the target design, lists five lessons and is linked from the architecture docs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Re-measure the baseline metrics one last time"
                - "Compare the finished structure with the target design page"
                - "Ask the agent to summarise themes from the retrospective notes"
                - "Share the write-up and link it from the architecture docs"
            - name: Refactoring a codebase with almost no tests
              description: |-
                ## Purpose
                In many real codebases the first refactor is the one that has to create its own safety net, with coverage in single digits and nobody sure what the code is meant to do. Starting with the smallest safe moves, adding tests at the outer edges first and refusing to change behaviour until it is pinned, is slower at first and far faster than recovering from a broken release.

                ## Milestones
                1. End-to-end or API-level tests covering the three most important user paths through the affected code.
                2. Only tool-assisted, behaviour-preserving moves made until those tests exist.
                3. Unit tests added through new seams as each slice is touched.
                4. Coverage in the refactor zone higher at every monthly check than the last.

                ## Notes
                Resist writing a full test suite before starting. Test what each slice touches, just before it touches it.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The three most important paths through the affected code have outer tests, and coverage in the refactor zone rises at every monthly check."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Name the three user paths that matter most through the affected code"
                - "Write one API or end-to-end test for each path"
                - "Limit early changes to tool-assisted renames and extractions"
                - "Add unit tests through a new seam before each slice"
            - name: Refactoring alone alongside feature work
              description: |-
                ## Purpose
                On a small team the refactor is often one engineer's half day a week, squeezed between features and support. Protecting a fixed block, keeping slices tiny enough to finish inside it and parking work cleanly at the end of each block lets a solo refactor make real progress over months without a dedicated team.

                ## Milestones
                1. A fixed half-day block each week on the calendar for refactor work.
                2. Slices sized to finish and merge within one block.
                3. A parking note written at the end of each block saying where to restart.
                4. Ten blocks completed with at least one merged slice each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly refactor blocks are held, each ending with a merged slice and a parking note for the next one."
                cadence: rolling
              tasks:
                - "Block a half day each week on your calendar for refactor work"
                - "Finish and merge one small slice in the refactor block @recurring(weekly:wed)"
                - "Write a three-line parking note at the end of each block"
            - name: Refactoring code owned by several teams
              description: |-
                ## Purpose
                When the code being restructured spans other teams' directories, every slice needs reviews and goodwill from people with their own roadmaps. Agreeing up front who changes what, how reviews will be turned around and when each team's share will happen avoids weeks of pull requests sitting unreviewed.

                ## Milestones
                1. Each owning team's share of the work listed from the scope map.
                2. An agreement per team on whether you change their code or they do, and the review turnaround.
                3. A named contact in every owning team.
                4. A monthly sync with the contacts to unblock stalled slices.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every owning team has a named contact and an agreed split of work and review turnaround, and a monthly sync has run for three months."
                cadence: rolling
              tasks:
                - "List each owning team's share of call sites from the scope map"
                - "Agree with each team who makes the change and the review turnaround"
                - "Run the cross-team refactor sync with team contacts @recurring(monthly:11)"
            - name: Restarting a refactor that stalled halfway
              description: |-
                ## Purpose
                Many codebases carry the remains of an abandoned refactor: two ways of doing everything, a half-used abstraction and toggles nobody dares to flip. Before starting anything new, deciding whether to finish it, roll it back or freeze it at a documented halfway point stops the next effort adding a third layer.

                ## Milestones
                1. The stalled refactor's original goal, remaining uses and leftover toggles recorded.
                2. The reason it stalled identified from people and history.
                3. A decision to finish, roll back or freeze, with an owner.
                4. Either a new slicing plan or a documented frozen state with guard rules.

                ## Notes
                Start from the **Remediation plan** template. Rolling back is a legitimate choice when the new structure turned out to be wrong.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The stalled refactor has a recorded finish, roll back or freeze decision with an owner, and a plan or documented frozen state to match."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count remaining uses of the old and new structures"
                - "Ask the people involved why the original effort stalled"
                - "Decide to finish, roll back or freeze, and name an owner"
                - "Write the new slicing plan or document the frozen state"
            - name: Bringing new engineers into an in-flight refactor
              description: |-
                ## Purpose
                New joiners land in a codebase that is visibly mid-change, with two patterns everywhere and rules they do not understand. A short orientation on which structure is the future, where the guard rules are and which slices are good first contributions stops them copying the old pattern and turns them into helpers instead.

                ## Milestones
                1. A one-page orientation explaining old versus new structure with examples.
                2. A list of small refactor slices tagged as suitable for new engineers.
                3. Each new engineer merging one refactor slice in their first month.
                4. Questions from new joiners used to improve the orientation page.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An orientation page and a list of starter slices exist, and each engineer joining during the refactor merges one slice in their first month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page old versus new structure guide with examples"
                - "Tag five small slices as good first refactor contributions"
                - "Pair with each new engineer on their first refactor slice"
            - name: Handing over a refactor when its lead moves on
              description: |-
                ## Purpose
                Long refactors outlast the people who started them, and a refactor whose lead leaves without a handover usually stalls within weeks. A deliberate handover with the plan, the open slices, the risks, the unwritten reasons behind key choices and a period of overlap keeps the work alive under a new owner.

                ## Milestones
                1. A new lead named and agreed with the engineering manager.
                2. A handover document covering the plan, open slices, risks and decisions not yet written down.
                3. Two weeks of overlap in which the new lead merges slices with the old lead reviewing.
                4. Stakeholders told who now owns the refactor.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A named new lead has a written handover, merges slices during two weeks of overlap and is announced to stakeholders as the owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the new refactor lead with the engineering manager"
                - "Write down the reasons behind the three biggest design choices"
                - "Run two weeks of overlap with the new lead merging slices"
                - "Tell stakeholders who now owns the refactor"
            - name: Property-based equivalence tests for old and new code
              description: |-
                ## Purpose
                Recorded examples only cover the inputs you thought to record. For pure functions or well-bounded components, property-based tests that generate thousands of random inputs and assert the old and new implementations agree will find the strange edge cases that a rewrite of logic, such as a pricing or permissions rule, is most likely to break.

                ## Milestones
                1. Components with pure or easily isolated logic identified in the refactor zone.
                2. A generator written for realistic inputs, including edge values and malformed data.
                3. An equivalence property running old against new in continuous integration.
                4. Every disagreement found reduced to a minimal case and resolved.

                ## Notes
                Keep the old implementation available as a test oracle until the equivalence tests have run clean for a few weeks, then delete both together.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Old and new implementations of at least one component are checked for equivalence by property-based tests in continuous integration, with every disagreement resolved."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a component with pure logic that the refactor rewrites"
                - "Write an input generator that includes edge and malformed values"
                - "Assert old and new outputs match for generated inputs in the pipeline"
                - "Shrink each disagreement to a minimal case and resolve it"
            - name: Performance parity benchmarks for the new structure
              description: |-
                ## Purpose
                Restructured code often adds layers of indirection, extra allocations or chattier database access that nobody notices until a busy day. Benchmarking the hot paths through the old and new structure, and checking monthly while traffic moves across, catches regressions while the old path is still available to fall back to.

                ## Milestones
                1. The three hottest paths through the refactor zone identified from production profiles.
                2. Repeatable benchmarks for each path through both old and new code.
                3. An agreed tolerance, such as no more than five percent slower at the median.
                4. Benchmark results reviewed monthly until the old path is deleted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Benchmarks for the three hottest paths compare old and new code monthly against an agreed tolerance until the old path is deleted."
                cadence: rolling
              tasks:
                - "Find the three hottest paths through the refactor zone in profiles"
                - "Write a repeatable benchmark for each through old and new code"
                - "Agree the slowdown tolerance with the team"
                - "Run the parity benchmarks and log the results @recurring(monthly:28)"
            - name: Sharded codemod pipeline for very large changes
              description: |-
                ## Purpose
                In a codebase of millions of lines, a single repo-wide diff is unreviewable and blocks every team at once. The approach used at large engineering organisations is to generate the change by script, split it automatically into shards by owner, open one small pull request per shard, run each through normal tests and merge them as they pass. Building that pipeline once makes every later large change routine.

                ## Milestones
                1. A script that runs a codemod and splits the result into shards by code owner.
                2. One pull request opened per shard, with a shared description linking to the codemod.
                3. Shards that pass tests and owner review merged automatically or in batches.
                4. A dashboard of open, failed and merged shards for each large change.

                ## Notes
                Keep shards small enough that an owner can review one in ten minutes. Rerun the codemod on failed shards against fresh trunk instead of hand-fixing stale diffs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pipeline splits a codemod into owner-based shards, opens one pull request each and tracks them on a dashboard, used for at least one real change."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a script that groups codemod output by code owner"
                - "Open one pull request per shard with a shared description"
                - "Rerun failed shards on fresh trunk rather than hand-fixing them"
                - "Build a dashboard of open, failed and merged shards"
---

# Large-Scale Refactoring

Large-scale refactoring is the work of changing the shape of a big piece of code while it keeps running in production and the rest of the team keeps shipping on top of it. These projects start with the foundations (a one-page target design, a scope map, a safety net of tests, a slicing plan, a charter with product and a rollback design), then the routines that keep a long refactor moving, the techniques worth learning properly, the specific restructurings teams most often need, the dated moments such as the kickoff and the day the old path is deleted, situations like a codebase with no tests or a stalled effort, and specialist work such as sharded codemod pipelines and equivalence testing.

What repeats is a daily merge to trunk, a Monday deprecation count, a Tuesday slice merge, Wednesday checks of old versus new mismatches, a Thursday heads-up to other teams, a Friday progress update, and monthly reviews of risks, toggles, stakeholders and the retrospective. The Metrics log, Risk register, Reading queue, Meeting notes and Remediation plan templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
