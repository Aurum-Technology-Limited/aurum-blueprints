---
id: software-engineering.software-release-management
name: Software Release Management
description: "A versioning scheme, branching model and written release process, go or no-go reviews, honest changelogs, rehearsed rollbacks and the communication that tells people what changed."
category: business
version: 1.0.0
tags: [software-engineering, software-release-management, engineer, team, enterprise, versioning, changelogs, rollbacks]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - metrics-log
    - compliance-control
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Software Release Management
          description: "Planning and running software releases, versioning, release branches, changelogs, rollbacks and the communication around each release."
          projects:
            - name: Inventory of every component you release
              description: |-
                ## Purpose
                Most teams can name their main app but not the worker image, the CLI, the SDK on a package registry and the database migration bundle that ship alongside it, each with its own version and owner. Listing everything that leaves the building as a release, where it goes and who can publish it is the starting point for every rule later in this area.

                ## Milestones
                1. A list of every releasable component: apps, services, libraries, CLIs, mobile builds, migration bundles and infrastructure modules.
                2. For each one, the place it is published to and the person or team who can publish it.
                3. The current version of each component recorded from the live system, not from memory.
                4. Components with no owner or no version flagged for a decision.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared inventory lists every releasable component with its destination, owner and current live version, and unowned items are flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every repository that produces something users or other teams install"
                - "Record where each component is published, from registries to app stores to servers"
                - "Check the live version of each component in production and write it down"
                - "Flag components with no clear owner and raise them at the next team meeting"
            - name: Choosing semantic or calendar versioning
              description: |-
                ## Purpose
                Version numbers are a promise to the people who depend on you: semantic versioning promises that a major bump means breaking changes, while calendar versioning promises nothing about compatibility but tells everyone how old a build is. Libraries and APIs usually need the first, products shipped on a train often suit the second, and mixing them by accident confuses everyone. Deciding per component type now prevents a 3.0 that breaks nothing or a 2.4 that breaks everything.

                ## Milestones
                1. The audience for each component type named: other developers, end users or internal teams.
                2. A versioning scheme chosen for each component type, with the reason in one sentence.
                3. A written rule for what counts as a breaking change for libraries and public APIs.
                4. Pre-release labels agreed, such as alpha, beta and release candidate suffixes.
                5. The decision published where every engineer will find it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published versioning decision names the scheme for each component type, defines a breaking change and lists the allowed pre-release labels."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the semantic versioning specification and one calendar versioning example"
                - "Group your components by who consumes them"
                - "Write the breaking change rule for libraries and public APIs"
                - "Publish the versioning decision in the engineering handbook"
            - name: Release branching model decision
              description: |-
                ## Purpose
                Whether you release straight from trunk with tags, cut a short-lived release branch, or keep long-running maintenance branches decides how hotfixes flow, how often merge conflicts appear and how many versions you can patch at once. Teams that never chose usually end up with a half-remembered GitFlow nobody follows. Picking one model, drawing it and writing down where fixes land first saves arguments during every urgent patch.

                ## Milestones
                1. Two or three branching models compared against how often you release and how many versions you support.
                2. One model chosen, with the rule for where a fix is merged first and how it reaches other branches.
                3. A simple diagram of branches, tags and the path of a hotfix.
                4. Branch protection settings matched to the model on every releasable repository.

                ## Notes
                A sensible default for teams releasing weekly or faster: trunk-based development, a release branch cut only when stabilisation is needed, and fixes merged to trunk first then cherry-picked.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One branching model is documented with a diagram and fix-flow rule, and branch protection on every releasable repository matches it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch how your team actually branches and tags today"
                - "Compare trunk with tags, short release branches and maintenance branches"
                - "Write the rule for where a fix is merged first"
                - "Update branch protection on each releasable repository to match"
            - name: Release roles and responsibilities charter
              description: |-
                ## Purpose
                Releases stall when nobody knows who may say no, who writes the notes and who tells support. A one-page charter naming the release captain, the approver, the communicator and the on-call contact for each release turns a group chat argument into a two-minute decision, and it gives new engineers a clear way to take part.

                ## Milestones
                1. The release captain, approver, communicator and on-call contact defined in a sentence each.
                2. The authority to stop or roll back a release written down, including who may do it out of hours.
                3. A named person or rotation for each role on every product line.
                4. The charter agreed by the engineering lead and the product owner.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off one-page charter names each release role, its holder and who has authority to stop or roll back a release."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every decision made during your last three releases and who made it"
                - "Draft one sentence for each release role"
                - "Write down who may halt or roll back a release, day and night"
                - "Get the charter agreed with the engineering lead and product owner"
            - name: Changelog file and commit message convention
              description: |-
                ## Purpose
                Changelogs written from memory on release day misses half the fixes and all the small breaking changes. Keeping a human-readable changelog grouped by added, changed, deprecated, removed, fixed and security, fed by a light commit or pull request convention, means the release notes are mostly written by the time the release is cut.

                ## Milestones
                1. A changelog file in each releasable repository with an Unreleased section at the top.
                2. A commit or pull request title convention agreed, such as conventional commits.
                3. A pull request checklist item asking authors to update the changelog or label the change.
                4. The last released version's changelog entry back-filled as a worked example.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every releasable repository has a changelog with an Unreleased section and a pull request checklist item that keeps it current."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add a changelog file with an Unreleased section to the main repository"
                - "Agree a pull request title convention with the team"
                - "Add a changelog line to the pull request template checklist"
                - "Back-fill the entry for the last release as an example"
            - name: Written release runbook from merge to announcement
              description: |-
                ## Purpose
                If the release only works when one particular engineer runs it, you do not have a process, you have a dependency on that engineer's holiday dates. Writing every step from the final merge through tagging, building, deploying, verifying and announcing, with the exact commands and links, lets anyone on the rota run a release and shows which steps are still manual.

                ## Milestones
                1. Every step of a normal release written in order, with commands, links and expected output.
                2. Each step marked as automated or manual, with the manual ones listed for later work.
                3. A second engineer has run a real release using only the runbook.
                4. Gaps found during that run fixed in the runbook the same week.

                ## Notes
                Start from the **Operational checklist** template. Keep the runbook beside the code so it is reviewed when the pipeline changes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A release runbook exists in the repository and a second engineer has shipped a production release using only that document."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shadow the next release and write down every step taken"
                - "Mark each step as automated or manual"
                - "Ask a second engineer to run a release from the runbook alone"
                - "Fix every gap the second engineer hit"
            - name: Rollback plan for each release type
              description: |-
                ## Purpose
                Rolling back an app server takes a minute, rolling back a database migration or a mobile build may be impossible, and teams usually discover the difference during an incident. Writing how each kind of release is undone, how long it takes and when you would fix forward instead turns the worst hour of a bad release into a known procedure.

                ## Milestones
                1. Release types listed: stateless services, database changes, client apps, libraries, configuration and infrastructure.
                2. For each type, the rollback method, the time it takes and who can run it.
                3. Release types that cannot be rolled back marked, with the fix-forward approach written instead.
                4. The trigger conditions for a rollback agreed, such as error rate or failed health checks after release.
                5. The plan linked from the release runbook.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every release type has a documented rollback or fix-forward method with a time estimate, an owner and agreed trigger conditions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each kind of change you release and how it is undone today"
                - "Time a rollback of a stateless service in a staging environment"
                - "Write the fix-forward approach for changes that cannot be reversed"
                - "Agree the rollback trigger conditions with the on-call lead"
            - name: Build once and promote the same artefact
              description: |-
                ## Purpose
                Rebuilding for each environment means the thing tested in staging is not quite the thing running in production, and a dependency that moved overnight can slip in between. Mapping each artefact from build to repository to environment, with immutable version tags, makes it possible to say with certainty which bytes are live and to redeploy an old version exactly.

                ## Milestones
                1. A map of where each artefact is built, stored and promoted through environments.
                2. Every environment deploying the same artefact by version or digest rather than rebuilding.
                3. Artefact tags made immutable in the registry, with no reuse of a version number.
                4. A retention rule that keeps enough old versions to roll back to.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each releasable component is built once and promoted by immutable version or digest, with a retention rule covering rollback targets."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Trace one release from build to production and note every rebuild"
                - "Switch environments to deploy by version or image digest"
                - "Turn on immutable tags in the artefact registry"
                - "Set a retention rule that keeps the last ten production versions"
            - name: Release cadence and calendar decision
              description: |-
                ## Purpose
                Releasing whenever someone feels ready produces long gaps, then big risky bundles. Choosing a cadence per product, whether continuous, weekly train or monthly, and publishing a calendar with cut-off times and blackout periods lets product, support and customers plan around releases instead of being surprised by them.

                ## Milestones
                1. Current release frequency measured for the last three months.
                2. A target cadence chosen per product with the reason recorded.
                3. A shared release calendar with cut-off times, release days and known blackout periods.
                4. The calendar sent to product, support and customer-facing teams.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target cadence per product is recorded and a shared release calendar with cut-offs and blackout periods is visible to non-engineering teams."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count the releases of each product over the last three months"
                - "Choose a target cadence for each product and note why"
                - "Create a shared calendar with cut-off times and blackout dates"
                - "Send the calendar link to product, support and sales leads"
            - name: Weekly go or no-go release review
              description: |-
                ## Purpose
                Fifteen minutes before each release, with the same five questions every time, catches the unfinished migration, the open critical bug and the support team that has not been told. Having the captain, a tester and a product voice in the room is cheaper than any rollback and leaves a written record of why the release went ahead.

                ## Milestones
                1. A standing slot in the week before the release cut-off.
                2. A fixed agenda: scope, open critical bugs, test results, risky changes, communication readiness.
                3. Each decision recorded as go, no-go or go with conditions, with the reason.
                4. A month of recorded decisions reviewed for patterns.

                ## Notes
                Start from the **Meeting notes** template. Keep it to fifteen minutes; anything that needs longer becomes a no-go with an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every release in a quarter has a recorded go, no-go or conditional decision with reasons from the weekly review."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute slot before the release cut-off"
                - "Write the five standing questions into the meeting notes"
                - "Run the go or no-go review and record the decision @recurring(weekly:wed)"
                - "Read back the month of decisions and note repeat blockers @recurring(monthly:28)"
            - name: Release notes for every version
              description: |-
                ## Purpose
                A changelog is for developers; release notes are for the people who use the product and the colleagues who support it. Turning the changelog into plain-language notes with what is new, what changed, what to do and known issues, for every version, cuts support tickets after each release and gives sales something accurate to say.

                ## Milestones
                1. A release notes format with new, improved, fixed, action required and known issues sections.
                2. Notes published for every release in a single findable place.
                3. Support reviewing the notes before publication.
                4. Breaking or behaviour changes always appearing at the top with the action required.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production release in a quarter has published notes with an action-required section, reviewed by support before going out."
                cadence: rolling
              tasks:
                - "Agree the release notes sections with support and product"
                - "Ask the agent to draft plain-language notes from the changelog for the next release"
                - "Send draft notes to support for review before each release"
                - "Publish the notes and link them in the release announcement @recurring(weekly:thu)"
            - name: Release captain rotation
              description: |-
                ## Purpose
                If one person always runs releases, they become a bottleneck and the knowledge leaves with them. A rotation where each engineer captains releases for a week or a sprint spreads the skill, exposes unclear steps in the runbook and makes the team care about release quality, not just merging.

                ## Milestones
                1. A rota covering every engineer who is comfortable with production access.
                2. A short handover note passed from one captain to the next.
                3. Each new captain paired with an experienced one for their first turn.
                4. Runbook improvements suggested by each captain logged and acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four different engineers have captained a production release in a quarter, each leaving a handover note."
                cadence: rolling
              tasks:
                - "Draft a rota of engineers who can captain releases"
                - "Write a one-page handover note template for captains"
                - "Hand over the captain role with a short note @recurring(weekly:mon)"
                - "Pair each first-time captain with an experienced one"
            - name: Hotfix lane and emergency release procedure
              description: |-
                ## Purpose
                Picture a production bug at four in the afternoon on a Friday tests whether your process bends or breaks. A separate hotfix lane, with a smaller set of checks, a named approver and a rule for getting the fix back into trunk, means urgent fixes ship in hours without skipping the steps that matter or leaving the next release to reintroduce the bug.

                ## Milestones
                1. A definition of what qualifies as a hotfix and what waits for the next release.
                2. The minimum checks a hotfix must pass, written down.
                3. The approver for hotfixes named, including out of hours.
                4. A rule and check that every hotfix is merged back to trunk within a working day.
                5. One hotfix shipped using the procedure and reviewed afterwards.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written hotfix procedure defines qualifying issues, minimum checks and approver, and one real hotfix has shipped and been merged back using it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-paragraph definition of what counts as a hotfix"
                - "List the checks a hotfix must pass and the ones it may skip"
                - "Name the out-of-hours hotfix approver in the release charter"
                - "Add a check that flags hotfix branches not merged back to trunk"
            - name: Code freeze and stabilisation window
              description: |-
                ## Purpose
                Teams on a release branch often keep merging features until the last hour, so the release candidate never settles. A short, clearly announced stabilisation window where only fixes for release blockers go in, with a person who approves exceptions, gives testers a stable target and makes the release date believable.

                ## Milestones
                1. The length of the stabilisation window agreed for each release type.
                2. The rule for what may merge during the window written down.
                3. An exception approver named and an exception log kept.
                4. Freeze start and end announced automatically in the team channel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each release branch in a quarter has a defined stabilisation window, with every exception merged during it logged and approved."
                cadence: rolling
              tasks:
                - "Agree how long the stabilisation window lasts for each release type"
                - "Write the merge rule for the window into the runbook"
                - "Start an exception log with approver and reason columns"
                - "Announce the freeze start in the team channel before each cut @recurring(weekly:tue)"
            - name: Backport and patch release routine
              description: |-
                ## Purpose
                Once more than one version is in use, every security or data fix raises the question of which older versions get it too. A regular sweep of fixes merged to trunk, a label that marks backport candidates and a clear patch release step keep supported versions safe without anyone keeping a list in their head.

                ## Milestones
                1. A backport label used on pull requests that need to reach older versions.
                2. A list of the versions currently receiving patches.
                3. A regular sweep that cherry-picks labelled fixes and cuts patch releases.
                4. Each patch release noted in the changelog of the branch it belongs to.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No labelled backport candidate remains unshipped to a supported version for more than one sweep cycle."
                cadence: rolling
              tasks:
                - "Create a backport label and add it to the pull request template"
                - "Write down which versions currently receive patches"
                - "Sweep labelled fixes and cut patch releases for supported branches @recurring(monthly:12)"
                - "Review whether each supported version still needs patches @recurring(quarterly)"
            - name: Post-release verification checklist
              description: |-
                ## Purpose
                Most bad releases show themselves in the first thirty minutes, but only if someone is looking. A short checklist run straight after each release, covering health checks, error rates, key user journeys and background jobs, catches problems while the captain is still at the keyboard and the rollback is still cheap.

                ## Milestones
                1. A checklist of five to ten checks to run within thirty minutes of each release.
                2. A link to the dashboard or query for each check.
                3. The checklist signed off by the captain in the release record each time.
                4. Any problem the checklist missed added as a new check.

                ## Notes
                Start from the **Operational checklist** template. A synthetic check of the sign-in and payment journeys is worth more than ten graphs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production release in a month has a completed post-release checklist recorded within thirty minutes of going live."
                cadence: rolling
              tasks:
                - "List the five checks that would have caught your last bad release"
                - "Link each check to its dashboard or saved query"
                - "Add a sign-off line for the checklist to the release record"
                - "Add a check for anything that slipped past after each incident"
            - name: Live versions dashboard
              description: |-
                ## Purpose
                During an incident the first question is usually which version is running where, and the answer is often spread across three consoles and a chat thread. One page showing the deployed version of every component in every environment, with the time it went live and a link to its release notes, ends that hunt and makes drift between environments obvious.

                ## Milestones
                1. A page listing every component from the inventory with its live version in each environment.
                2. Versions read automatically from the running systems, not typed in.
                3. The release time and a link to the release notes beside each version.
                4. Environment drift, such as staging two versions behind, highlighted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dashboard shows the automatically reported live version, release time and notes link for every component in every environment."
                cadence: rolling
              tasks:
                - "Pick the components from the inventory that matter most during incidents"
                - "Expose a version endpoint or label on each running component"
                - "Build one page that reads and lists the live versions"
                - "Check the dashboard for components missing or drifting between environments @recurring(monthly:15)"
            - name: Release health log
              description: |-
                ## Purpose
                Without numbers, release quality is argued from the most recent bad week. Logging each release with its size, any rollback, hotfixes that followed and issues reported by users gives the team a monthly picture of whether releases are getting safer and which kind of change causes the trouble.

                ## Milestones
                1. A log with one row per release: date, version, changes included, rollback, follow-up hotfixes and user-reported issues.
                2. Three months of releases recorded.
                3. A monthly summary of rollback and hotfix rates.
                4. One improvement chosen each quarter from what the log shows.

                ## Notes
                Start from the **Metrics log** template. Keep the log for learning, not for ranking people.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The release health log has a row for every release over three months and a monthly summary of rollback and hotfix rates."
                cadence: rolling
              tasks:
                - "Set up the release health log with the agreed columns"
                - "Back-fill the last month of releases from tags and incident notes"
                - "Summarise rollback and hotfix rates from the log @recurring(monthly:3)"
                - "Pick one improvement from the log for the coming quarter"
            - name: Monthly release retrospective
              description: |-
                ## Purpose
                Release pain is easy to forget once the fix is out, so the same problems come back each month. Thirty minutes each month on what slowed releases down, what nearly went wrong and one change to try produces a steady stream of small improvements to the runbook and the pipeline.

                ## Milestones
                1. A monthly slot with the captains from that month and a product representative.
                2. Input gathered beforehand from the release health log and captain handover notes.
                3. One or two actions agreed each time, each with an owner and a date.
                4. Last month's actions checked at the start of each retrospective.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly retrospectives in a year each produce at least one owned action, and each action is reviewed the following month."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute release retrospective"
                - "Collect the month's captain notes and health log summary beforehand"
                - "Run the retrospective and record one or two owned actions @recurring(monthly:26)"
                - "Open the next retrospective by checking last month's actions"
            - name: Release communication to support, sales and customers
              description: |-
                ## Purpose
                Support learns about a change when the first angry ticket arrives, sales demo a feature that was renamed last week, and customers find a breaking change in production. A fixed communication rhythm, with an internal heads-up before the release and an external note after it, keeps the people around engineering informed in the right order.

                ## Milestones
                1. A list of audiences for release news: support, sales, account managers, customers and partners.
                2. For each audience, the channel, the timing and who sends the message.
                3. An internal preview sent before every release with notable changes.
                4. Customer-facing announcements published within a day of release.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For a full quarter, every release with user-visible changes had an internal preview before release and a customer note within a day."
                cadence: rolling
              tasks:
                - "Map each audience to a channel, a timing and a sender"
                - "Write a short internal preview template"
                - "Send the internal release preview to support and sales @recurring(weekly:tue)"
                - "Ask support each month which release messages were missing or late"
            - name: Semantic versioning rules in practice
              description: |-
                ## Purpose
                Knowing that a major version means a breaking change is easy; deciding whether a new required field, a changed default or a tightened validation is breaking is not. Working through real examples from your own APIs and libraries builds the judgement to bump versions honestly, so consumers can trust a minor upgrade.

                ## Milestones
                1. Twenty real changes from your history classified as major, minor or patch.
                2. Disagreements discussed and the reasoning written down.
                3. A short list of tricky cases added to the versioning decision.
                4. An automated API or type compatibility check tried on one library.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty historical changes are classified with reasoning, and the tricky cases are added to the published versioning decision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull twenty merged changes from a library or public API history"
                - "Classify each as major, minor or patch on your own"
                - "Compare classifications with a colleague and settle disagreements"
                - "Try an API compatibility checker on one library"
            - name: Tags, signed tags and release branch mechanics
              description: |-
                ## Purpose
                Lightweight tags pushed by hand, tags moved after release and cherry-picks that land on the wrong branch cause more release confusion than any tool. Practising annotated and signed tags, cherry-picking with traceable references and recovering from a bad tag in a scratch repository makes the captain's hands steady when it matters.

                ## Milestones
                1. Annotated and signed tags created and verified in a practice repository.
                2. A fix cherry-picked to a release branch with the original commit referenced.
                3. A mistaken tag recovered without rewriting a published one.
                4. A one-page cheat sheet of the commands added to the runbook.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet covering signed tags, traceable cherry-picks and bad-tag recovery is in the runbook after practice in a scratch repository."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a scratch repository for release practice"
                - "Create and verify an annotated signed tag"
                - "Cherry-pick a fix to a release branch with the source commit referenced"
                - "Write the commands into a cheat sheet in the runbook"
            - name: Writing release notes people actually read
              description: |-
                ## Purpose
                Release notes that list ticket numbers and internal code names get skipped, and the one line about a required action gets missed with them. Studying a handful of well-regarded products' notes and rewriting three of your own past notes teaches the habits that matter: lead with impact, say what the reader must do, and keep internal detail out.

                ## Milestones
                1. Release notes from five products you admire collected and compared.
                2. A short style guide for your notes with voice, structure and banned internal jargon.
                3. Three past release notes rewritten using the guide.
                4. Feedback on the rewrites gathered from support or a friendly customer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page release notes style guide exists and three past notes have been rewritten with it and reviewed by support."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect release notes from five products you use"
                - "Note what each does well and badly in a short table"
                - "Write a one-page release notes style guide"
                - "Rewrite three of your past release notes with the guide"
            - name: Sequencing database changes across releases
              description: |-
                ## Purpose
                Schema changes and the code that depends on them rarely ship safely in the same release, because old and new versions run side by side during a rollout and rollbacks bring the old code back. Learning the expand, migrate and contract pattern as a release sequence, spread over two or three versions, removes the most common reason a release cannot be rolled back.

                ## Milestones
                1. The expand, migrate and contract sequence written out for one real upcoming change.
                2. Each step assigned to a specific release version.
                3. The rollback position checked at each step.
                4. A release checklist item added that asks whether a change needs multi-release sequencing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real schema change has shipped across separate expand, migrate and contract releases, with rollback safe at every step."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a worked example of the expand and contract pattern"
                - "Pick an upcoming schema change and split it into release steps"
                - "Check that each step can be rolled back on its own"
                - "Add a multi-release sequencing question to the release checklist"
            - name: Staged rollouts and halt criteria
              description: |-
                ## Purpose
                Sending a release to one percent, then ten, then everyone only helps if you decided in advance what would make you stop. Learning how canary, percentage and ring rollouts work in your platform, and writing halt criteria for each stage, turns progressive delivery from a dashboard into a decision rule.

                ## Milestones
                1. The rollout options available in your platform listed: canary, percentage, rings or regions.
                2. A stage plan for a typical release with the percentage and wait time at each stage.
                3. Halt and rollback criteria written for each stage.
                4. One release run through the stages with the criteria applied.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written stage plan with halt criteria per stage exists and one real release has been rolled out through it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the rollout controls your platform already supports"
                - "Draft a three-stage rollout plan with wait times"
                - "Write halt criteria for each stage using real metrics"
                - "Run the next release through the stages and note what happened"
            - name: Lessons from public release failures
              description: |-
                ## Purpose
                Some of the best release lessons are already written up in public postmortems: bad configuration pushed everywhere at once, a version bump that broke thousands of builds, a rollback that made things worse. Reading a set of them and mapping each to your own process shows where you are exposed before you find out the hard way.

                ## Milestones
                1. Eight public postmortems about release or deployment failures read.
                2. For each, the root release mistake summarised in a sentence.
                3. Each mistake checked against your own process as covered, partly covered or exposed.
                4. The two biggest exposures raised as actions in the release retrospective.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Eight public release failures are mapped against your process, and the two largest gaps are logged as owned actions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect eight public postmortems about release or deployment failures"
                - "Summarise the release mistake behind each in one sentence"
                - "Mark each as covered, partly covered or exposed in your process"
                - "Raise the two biggest gaps at the next release retrospective"
            - name: Change management frameworks for releases
              description: |-
                ## Purpose
                Enterprise teams are often asked to follow a change management framework such as ITIL change enablement without anyone explaining its terms. Learning what standard, normal and emergency changes mean, and how they map to a modern pipeline, lets engineers argue for lighter controls in the framework's own language instead of fighting it.

                ## Milestones
                1. Standard, normal and emergency change types understood and summarised.
                2. Each type mapped to a kind of release your team actually ships.
                3. Controls the framework expects matched to automated checks you already run.
                4. A one-page explainer shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explainer maps each change type to your release kinds and shows which framework controls are already met by automation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read an introduction to ITIL change enablement or your organisation's change policy"
                - "Map standard, normal and emergency changes to your release kinds"
                - "List which expected controls your pipeline already provides"
                - "Share a one-page explainer with the team"
            - name: Automated changelog and version bump
              description: |-
                ## Purpose
                Once commit or pull request titles follow a convention, a release tool can propose the next version number and draft the changelog for you. Automating this removes the most error-prone manual step of a release and makes the version bump a reviewed pull request rather than a judgement call at the last minute.

                ## Milestones
                1. A release automation tool chosen that reads your commit convention.
                2. The tool opening a release pull request with a proposed version and changelog.
                3. A human reviewing and merging that pull request to cut the release.
                4. The manual version bump step removed from the runbook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Releases are cut by merging a tool-generated release pull request that sets the version and changelog, with no manual bump step left."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check how consistently recent pull request titles follow the convention"
                - "Try a release automation tool on a non-critical repository"
                - "Review the generated release pull request with the team"
                - "Remove the manual version bump step from the runbook"
            - name: Moving from monthly releases to a weekly train
              description: |-
                ## Purpose
                Monthly releases bundle so many changes that any failure is hard to trace and every release feels like an event. Moving to a weekly train, where whatever is ready leaves on a fixed day, shrinks each release, makes rollbacks simpler and takes the pressure off squeezing a feature in before the big date.

                ## Milestones
                1. The blockers to weekly releases listed, such as manual testing or approvals.
                2. The biggest blocker reduced enough to try a weekly cycle.
                3. Four weekly releases shipped in a row on the fixed day.
                4. Rollback and hotfix rates compared with the monthly period.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Four consecutive weekly releases ship on the fixed day, and their rollback and hotfix rates are compared with the monthly baseline."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List what currently stops you releasing every week"
                - "Pick the largest blocker and agree a fix with its owner"
                - "Announce the weekly train day to product and support"
                - "Compare four weekly releases with the last four monthly ones"
            - name: Choosing a release orchestration tool
              description: |-
                ## Purpose
                Spreadsheets and chat threads work for one team, but once several teams release on a shared calendar, approvals, evidence and status scatter everywhere. Comparing a few release orchestration or release management tools against your real needs, including what your existing CI and ticketing already do, prevents buying a platform you only use for a calendar.

                ## Milestones
                1. Requirements written: calendar, approvals, evidence capture, integrations and audit needs.
                2. What your current CI, ticketing and chat tools already cover noted.
                3. Three options, including doing nothing new, scored against the requirements.
                4. A decision recorded with cost and the reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three options including staying with current tools, scored against written release requirements."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the five release management needs your teams feel most"
                - "Check what your existing CI and ticketing tools already provide"
                - "Score three options, including no new tool, against the needs"
                - "Record the decision and its cost in the engineering decisions log"
            - name: Separating deploy from release with feature flags
              description: |-
                ## Purpose
                When deploying code and turning a feature on are the same act, every release carries the risk of every feature in it. Shipping new work dark behind flags lets you deploy on schedule and release to users when product is ready, and switch a feature off without a rollback. The cost is flag debt, so retirement has to be part of the plan from the start.

                ## Milestones
                1. A flagging approach chosen, whether a service or a simple in-house mechanism.
                2. One feature shipped dark and released to users later by flag.
                3. Flag naming, ownership and an expiry date required for every new release flag.
                4. A recurring review that removes flags fully rolled out for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One feature has been deployed dark and released by flag, and every release flag has an owner and expiry date with stale flags removed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a feature flag approach for release toggles"
                - "Ship one upcoming feature dark behind a flag"
                - "Require an owner and expiry date on every new release flag"
                - "Remove release flags fully rolled out for a month @recurring(monthly:18)"
            - name: Shortening the time from release cut to production
              description: |-
                ## Purpose
                Many teams measure how long code takes to merge but not how long a cut release waits before it reaches users. Timing each stage between cut and production, from build to sign-off to deploy, usually shows one queue, often a manual approval or a shared test environment, that holds releases for days.

                ## Milestones
                1. Each stage from release cut to production timed for five releases.
                2. The longest wait identified and its cause understood.
                3. One change made to shorten that wait.
                4. The same five-release measurement repeated afterwards.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The median time from release cut to production falls between two five-release measurements after one targeted change."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record timestamps for each stage of the next five releases"
                - "Find the stage with the longest wait"
                - "Agree one change to shorten that wait with its owner"
                - "Measure five more releases after the change"
            - name: Pre-approved standard changes for routine releases
              description: |-
                ## Purpose
                Approval boards that review every release spend most of their time on changes that have shipped safely a hundred times. Defining a class of standard, pre-approved release, with the automated evidence that qualifies it, frees reviewers for the risky changes and lets routine releases go out on time.

                ## Milestones
                1. Release types that have never caused an incident listed with their history.
                2. Criteria for a standard change written, with the automated evidence required.
                3. The approver group agreeing the standard change class.
                4. The first month of standard changes reviewed for any problems.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A standard change class is agreed with the approvers, and routine releases ship under it for a month with any problems reviewed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pull a year of release history for routine change types"
                - "Draft criteria and required evidence for a standard change"
                - "Present the proposal to the approval group"
                - "Review the first month of standard changes with the approvers"
            - name: First major version launch
              description: |-
                ## Purpose
                Version 1.0 or 2.0 is a promise about stability or a warning about breaking changes, and it gets more attention than any other release. Planning the scope freeze, release candidates, migration guide, announcement and support cover weeks ahead turns a major version into a launch rather than a scramble.

                ## Milestones
                1. The scope of the major version frozen, with breaking changes listed.
                2. At least one release candidate tested by real users or internal teams.
                3. A migration guide covering every breaking change.
                4. Announcement, documentation and support cover ready for launch day.
                5. The major version shipped and the first week of feedback logged.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The major version ships on its planned date with a migration guide for every breaking change and a logged first week of feedback."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every breaking change planned for the major version"
                - "Set dates for scope freeze, release candidates and launch"
                - "Draft the migration guide alongside the code changes"
                - "Book support cover and an announcement slot for launch day"
            - name: Deprecating and sunsetting an old version
              description: |-
                ## Purpose
                Old versions and endpoints left running forever cost security patches, test time and support. Announcing a deprecation with a clear date, tracking who still uses the old version and helping the stragglers move lets you switch it off on the planned day without breaking a customer you forgot about.

                ## Milestones
                1. Current users of the old version identified from telemetry or download data.
                2. A deprecation notice published with a sunset date and a migration path.
                3. Reminders sent at agreed intervals before the sunset date.
                4. Remaining users contacted directly before the switch-off.
                5. The old version switched off on the planned date.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The old version is switched off on its announced sunset date with every known remaining user contacted beforehand."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Measure who still uses the version you want to retire"
                - "Publish a deprecation notice with a sunset date"
                - "Schedule reminders at three months, one month and one week"
                - "Contact remaining users directly in the final month"
            - name: Peak-season change freeze plan
              description: |-
                ## Purpose
                Retail at year end, tax filing season, a ticket launch or a payroll run are the wrong moments for a surprise release. Agreeing the freeze dates, what may still ship, how emergency fixes are approved and when the backlog of held changes is released keeps the busiest weeks quiet without a messy flood of changes afterwards.

                ## Milestones
                1. The peak period and freeze dates agreed with the business.
                2. Rules for what may ship during the freeze, including emergency fixes.
                3. Risky changes moved earlier or later in the calendar.
                4. A thaw plan that releases held changes in small batches.
                5. A short review after the freeze ends.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The freeze runs on agreed dates with every exception approved and logged, and held changes ship in batches during the thaw."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the business which weeks must be free of releases"
                - "Write the freeze and emergency exception rules"
                - "Move risky changes out of the freeze window"
                - "Plan the thaw as a series of small releases"
            - name: Coordinated multi-team launch release
              description: |-
                ## Purpose
                A feature that needs a backend change, a web update, a mobile build and a marketing announcement on the same morning fails when one team ships a day late. A launch plan with a dependency order, a dress rehearsal in staging and a single launch channel gives every team the same clock.

                ## Milestones
                1. Every component and team involved listed with its release order.
                2. A launch timeline down to the hour, including flag switches and announcements.
                3. A full rehearsal in a staging environment.
                4. A launch channel with a single coordinator and a go or no-go point.
                5. The launch delivered and a short review held within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The launch follows a rehearsed hour-by-hour timeline with one coordinator, and a review is written within a week."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List every team and component the launch depends on"
                - "Draft an hour-by-hour launch timeline"
                - "Run a full rehearsal in staging"
                - "Open a launch channel and name the coordinator"
            - name: Rollback drill
              description: |-
                ## Purpose
                A rollback plan that has never been run is a guess. Rolling back a real release on purpose, in staging or during a quiet production window, shows whether the old artefact still exists, whether the migrations allow it and how long it truly takes, so the first real rollback is not also the first try.

                ## Milestones
                1. A drill scope chosen: which service, which environment and which version to return to.
                2. The rollback run and timed by someone other than the plan's author.
                3. Every surprise written down during the drill.
                4. The rollback plan updated with the real timing and fixes.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed rollback drill has been run by someone other than the plan's author, with the rollback plan updated afterwards."
                cadence: cyclic
              tasks:
                - "Choose the service and environment for the drill"
                - "Ask an engineer who did not write the plan to run it"
                - "Time the drill and note every surprise"
                - "Repeat the rollback drill on a different service @recurring(quarterly)"
            - name: Releasing as a solo engineer
              description: |-
                ## Purpose
                On your own, nobody else will notice the release you forgot to tag or the changelog you skipped, and you are also the on-call. A lightweight version of the process, with a single checklist, automated tags and a rule about not releasing late in the day, keeps your releases safe without the ceremony a team needs.

                ## Milestones
                1. A one-page personal release checklist.
                2. Tagging and changelog generation automated in the pipeline.
                3. A personal rule for release times that leaves you awake to watch the result.
                4. Five releases shipped using the checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five releases in a row are shipped from a one-page personal checklist with automated tags and changelog entries."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page checklist for your own releases"
                - "Automate tagging and changelog generation in your pipeline"
                - "Set a rule for the latest time of day you will release"
                - "Ship the next five releases with the checklist"
            - name: Taking over release management from a departing owner
              description: |-
                ## Purpose
                When the person who always ran releases leaves or changes team, a lot of knowledge is about to walk out of the door: which credentials are needed, which step always fails, which customer must be told first. A structured handover in their last weeks, with you running releases while they watch, captures what the runbook does not.

                ## Milestones
                1. Every credential, account and permission the releaser uses transferred or reissued.
                2. Two releases run by you with the departing owner watching.
                3. Undocumented steps and known quirks added to the runbook.
                4. Customer and partner contacts for release communication handed over.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two releases have been run by the new owner under observation, and all release credentials and contacts have been transferred."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book handover sessions with the departing owner this week"
                - "List every account and credential used during a release"
                - "Run the next two releases yourself while they watch"
                - "Add every undocumented quirk to the runbook"
            - name: First repeatable release process for a startup team
              description: |-
                ## Purpose
                Early teams usually deploy from a laptop whenever something is done, which works until the first customer contract mentions uptime or the second engineer joins. Putting in the smallest repeatable process, with tags, a changelog, a pipeline deploy and a rollback step, gives a small team release discipline in a week without slowing it down.

                ## Milestones
                1. Deploys from laptops replaced by a pipeline that deploys tagged versions.
                2. A changelog kept and shared with early customers.
                3. A documented rollback step tested once.
                4. Every engineer on the team has shipped a release through the process.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All releases go through a pipeline from tagged versions, a rollback has been tested once and every engineer has shipped a release."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Stop laptop deploys and agree that every release starts from a tag"
                - "Set the pipeline to deploy only tagged versions"
                - "Test the rollback step once in staging"
                - "Have every engineer ship one release through the pipeline"
            - name: Change advisory board submissions
              description: |-
                ## Purpose
                In large organisations a release often needs approval from a change advisory board that meets weekly and rejects anything with a missing field. Preparing submissions with a clear risk statement, test evidence, rollback plan and business contact gets releases through first time and builds the trust that later earns lighter controls.

                ## Milestones
                1. The board's submission requirements, deadlines and meeting rhythm written down.
                2. A submission template filled from the release record with as little retyping as possible.
                3. Rejections from the last quarter reviewed for common causes.
                4. A first-time approval rate tracked for each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Change submissions for a quarter are tracked, with the first-time approval rate recorded and above the previous quarter's."
                cadence: rolling
              tasks:
                - "Write down the board's submission fields, deadline and meeting day"
                - "Build a submission template that pulls from the release record"
                - "Submit the week's change requests before the board deadline @recurring(weekly:mon)"
                - "Review the month's rejections for common causes @recurring(monthly:22)"
            - name: Releasing to on-premise and self-hosted customers
              description: |-
                ## Purpose
                Customers who run your software themselves upgrade on their schedule, skip versions and run it on infrastructure you have never seen. Clear upgrade guides, a supported upgrade path, a compatibility matrix and advance notice of releases are what stand between a smooth customer upgrade and a weekend escalation.

                ## Milestones
                1. A supported upgrade path stated, including which versions can be skipped.
                2. An upgrade guide published with each release, covering prerequisites and rollback.
                3. A compatibility matrix of supported platforms, databases and dependencies.
                4. Advance release notice sent to customer administrators.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each release for self-hosted customers ships with an upgrade guide, an updated compatibility matrix and advance notice to administrators."
                cadence: rolling
              tasks:
                - "Write down which versions customers may upgrade from directly"
                - "Draft an upgrade guide template with prerequisites and rollback"
                - "Publish a compatibility matrix of supported platforms"
                - "Email customer administrators ahead of each release @recurring(monthly:8)"
            - name: Release controls in a regulated environment
              description: |-
                ## Purpose
                Finance, health and public sector systems often need evidence that every production change was approved, tested and made by someone other than its author. Building those controls into the pipeline, with linked tickets, recorded approvals and separation of duties, satisfies auditors with exported evidence instead of a fortnight of screenshots.

                ## Milestones
                1. The release-related controls your auditors or regulators expect listed.
                2. Each control mapped to an automated record in the pipeline or ticketing system.
                3. Separation of duties enforced so authors cannot approve their own production release.
                4. A sample evidence export produced for one quarter of releases.

                ## Notes
                Start from the **Compliance control** template. Confirm the exact control wording with your compliance or audit team rather than guessing it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each expected release control maps to an automated record, and a quarter's evidence export has been accepted by the compliance team."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your compliance team for the release controls they test"
                - "Map each control to an automated record you already have"
                - "Block authors from approving their own production releases"
                - "Export a quarter of release evidence and send it for review"
            - name: Long-term support branch policy
              description: |-
                ## Purpose
                Enterprise customers and downstream projects often need a version that receives fixes for years while the main line moves on. Deciding which releases become long-term support, how long each is supported, what kinds of fixes it gets and what it costs the team turns open-ended support promises into a published policy.

                ## Milestones
                1. The rule for which versions become long-term support releases.
                2. Support length and fix types for each tier written down.
                3. The engineering cost of maintaining each long-term branch estimated.
                4. A public support policy page with dates for every supported version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published support policy lists every supported version with its tier, fix types and end date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the versions customers rely on and for how long"
                - "Decide the rule for choosing long-term support releases"
                - "Estimate the hours each maintained branch costs per month"
                - "Publish a support policy page with end dates"
            - name: Version compatibility matrix across services
              description: |-
                ## Purpose
                When a release spans several services, clients and libraries, the question is no longer whether version 4.2 works but whether 4.2 of one service works with 3.9 of another and the mobile app that users have not updated. A tested compatibility matrix and a rule for release order keep multi-component releases from breaking each other.

                ## Milestones
                1. Components that must stay compatible with each other listed.
                2. A matrix of which versions are known to work together.
                3. A rule for release order when changes span components.
                4. A contract or compatibility test added for the riskiest pair.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A maintained compatibility matrix and release-order rule exist, and the riskiest component pair has an automated compatibility test."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map which components call or depend on each other"
                - "Record which versions are currently known to work together"
                - "Write the release order rule for cross-component changes"
                - "Add a compatibility test for the riskiest pair"
            - name: Signed release artefacts and provenance
              description: |-
                ## Purpose
                Customers and security teams increasingly ask how they know a release came from your build system and has not been tampered with. Signing artefacts, publishing checksums, generating a software bill of materials for each release and recording build provenance answers that question with evidence.

                ## Milestones
                1. Release artefacts signed in the pipeline, with keys held outside engineers' laptops.
                2. Checksums and signatures published alongside every release.
                3. A software bill of materials generated and attached to each release.
                4. Verification steps documented for customers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every release ships with a signature, checksums and a software bill of materials, and customer verification steps are published."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose a signing approach that keeps keys in the pipeline"
                - "Sign the next release artefacts and publish the checksums"
                - "Generate a software bill of materials for each release"
                - "Write customer verification steps in the release documentation"
            - name: Release candidate and beta channel programme
              description: |-
                ## Purpose
                Some problems only appear on customers' data, devices or integrations. Offering a beta or release candidate channel to a group of willing users, with a simple way to report issues and a fixed soak time before general release, finds those problems while they are still cheap to fix.

                ## Milestones
                1. A group of willing beta users or internal teams signed up.
                2. Release candidates delivered to them on a fixed schedule.
                3. A simple way to report issues with the version number attached.
                4. A minimum soak time before a candidate is promoted to general release.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Release candidates go to a named beta group for a fixed soak time, and issues they report are triaged before promotion."
                cadence: rolling
              tasks:
                - "Invite a small group of willing users to a beta channel"
                - "Set a minimum soak time before general release"
                - "Add a feedback form that captures the version number"
                - "Triage beta feedback before promoting each candidate @recurring(weekly:fri)"
            - name: Release risk scoring for each change set
              description: |-
                ## Purpose
                Treating every release the same means routine copy changes get as much scrutiny as a payment flow rewrite, and reviewers burn out. A simple score built from what a release touches, such as schema changes, authentication code, the number of services and the size of the change, routes risky releases to more checks and slower rollouts while routine ones move fast.

                ## Milestones
                1. Risk factors agreed from your own incident history.
                2. A scoring rule that sorts releases into low, medium and high risk.
                3. Extra checks and rollout speed defined for each risk level.
                4. The score calculated automatically on each release candidate.
                5. Scores compared with release outcomes after a quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every release candidate gets an automatic risk level, and a quarter of scores has been compared with actual release outcomes."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the change types behind your last ten release incidents"
                - "Draft a scoring rule with three risk levels"
                - "Define the checks and rollout speed for each level"
                - "Compare a quarter of scores with release outcomes"
            - name: End-of-life policy and yearly support review
              description: |-
                ## Purpose
                Without a written end-of-life policy, every version is supported until a customer complains loudly enough. A policy that states how long each release line is supported, and a yearly review that retires lines past their date, keeps the support burden matched to what the team can carry.

                ## Milestones
                1. An end-of-life policy stating the support length for each release line.
                2. Every version currently in use placed against the policy.
                3. Versions past end of life announced and retired.
                4. A yearly review date set in the release calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A published end-of-life policy exists and the yearly review has retired every version past its date with notice given."
                cadence: cyclic
              tasks:
                - "Draft an end-of-life policy with support lengths per release line"
                - "Place every version still in use against the policy"
                - "Announce retirement dates for versions past end of life"
                - "Review supported versions against the end-of-life policy @recurring(yearly)"
---

# Software Release Management

This area is for the engineers, teams and enterprise release managers who turn merged code into a version that people can install, use and trust. It starts with foundations (an inventory of what you ship, a versioning scheme, a branching model, named roles, a written process and a rollback plan), moves through the operating routines and skills that keep each release calm, then the improvements and dated events such as a first major version or a peak-season freeze, and ends with situations like a change advisory board or on-premise customers and specialist work such as long-term support branches and signed artefacts.

What repeats is a weekly go or no-go review, release notes for every version, a rotating release captain, a monthly look at the release health log and a retrospective, quarterly rollback drills and backport sweeps, and a yearly look at which versions you still support. The Operational checklist, Meeting notes, Metrics log and Compliance control templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
