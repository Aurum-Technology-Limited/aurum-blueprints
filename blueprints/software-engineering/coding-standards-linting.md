---
id: software-engineering.coding-standards-linting
name: Coding Standards & Linting
description: "A formatter and linter in every repo, a short style guide for what tools cannot check, CI gates, a ratchet for legacy warnings and the habits that keep the rules earning their keep."
category: business
version: 1.0.0
tags: [software-engineering, coding-standards-linting, engineer, team, linting, code-formatting, style-guide, static-analysis]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Coding Standards & Linting
          description: "Agreeing style rules and conventions, then enforcing them automatically with formatters and linters so reviews focus on substance."
          projects:
            - name: Inventory of linters and formatters in every repository
              description: |-
                ## Purpose
                Most teams discover they run three different formatter versions and a linter nobody has configured since the repo was created. A one-page inventory of what each repository actually runs, locally and in CI, shows where the gaps and contradictions are before anyone proposes new rules.

                ## Milestones
                1. Every active repository listed with its languages and the formatter, linter and type checker it uses, including versions.
                2. Each tool marked as enforced in CI, run only locally, or configured but never run.
                3. Conflicting settings between repos noted, such as line length or quote style.
                4. The three biggest gaps written at the top of the inventory as candidate next projects.

                ## Notes
                Read the CI configuration as well as the config files. A config file that no pipeline runs is not a standard, it is a suggestion.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared inventory covers every active repository, showing each tool, its version and whether CI enforces it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the active repositories your team owns in a shared document"
                - "Record each repo's formatter, linter and type checker with versions from the lockfile"
                - "Check each CI pipeline for which of those tools actually run"
                - "Mark the three biggest gaps and contradictions at the top of the inventory"
            - name: Named owner for the lint and format configuration
              description: |-
                ## Purpose
                Rules without an owner drift: someone disables a check to unblock a release and nobody turns it back on. Naming one person or a small rota as owner of the configuration, with a clear route for proposing changes, stops the config file becoming a battleground edited in passing.

                ## Milestones
                1. One owner or a rota of two named for the shared lint and format configuration.
                2. A code owners entry routing changes to the configuration files to that owner for review.
                3. A one-paragraph statement of how anyone proposes a rule change.
                4. The owner and the proposal route announced in the team channel and linked from the README.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The configuration files have a named owner enforced through code owners, and the proposal route is written in the README."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree with the team who owns the lint and format configuration"
                - "Add the configuration files to the code owners file under that owner"
                - "Write a short paragraph in the README on how to propose a rule change"
                - "Announce the owner and the route in the team channel"
            - name: Choosing one code formatter per language
              description: |-
                ## Purpose
                Formatting arguments about spacing, wrapping and quotes end when the answer is whatever the tool prints. Choosing one per language, with as few options changed from its defaults as possible, removes a whole category of review comments for good.

                ## Milestones
                1. A formatter chosen for each language in use, for example Prettier or Biome for web code, Black or Ruff for Python, gofmt for Go and rustfmt for Rust.
                2. Every non-default option justified in one line, or dropped.
                3. The formatter added as a pinned development dependency in each repo.
                4. The choice recorded in the style guide with a sentence on why.

                ## Notes
                Resist tuning. Each changed default is a future argument and a reason a newcomer's editor disagrees with CI.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each language in use has one named formatter with its non-default options listed and justified in the style guide."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the languages that make up most of the code you own"
                - "Note the de facto standard formatter for each and what it leaves configurable"
                - "Run each candidate on a sample directory and read the diff"
                - "Record the chosen formatter and any changed defaults in the style guide"
            - name: Shared editor settings and format on save
              description: |-
                ## Purpose
                When every editor formats on save with the same settings, the CI format check almost never fails and nobody commits a file full of whitespace noise. An EditorConfig file plus recommended workspace settings for the two or three editors the team uses gets everyone there in minutes.

                ## Milestones
                1. An EditorConfig file committed covering indentation, line endings, final newline and trailing whitespace.
                2. Recommended editor extensions and format-on-save settings committed for the main editors in use.
                3. Format on save confirmed working on at least two different engineers' machines.
                4. A short setup section in the README pointing to these files.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An EditorConfig file and editor workspace settings are committed, and two engineers have confirmed format on save matches CI."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Commit an EditorConfig file with indentation, line endings and final newline rules"
                - "Add recommended extensions and format-on-save settings for the team's main editors"
                - "Ask a colleague on a different editor to confirm saving a file produces no diff"
                - "Add a setup paragraph to the README linking the editor files"
            - name: Baseline lint rule set from a recommended preset
              description: |-
                ## Purpose
                Writing a rule set from scratch takes weeks and produces something idiosyncratic. Starting from the linter's recommended preset, such as eslint recommended with typescript-eslint, Ruff's defaults or Clippy's default lints, and adding only rules that catch real bugs gives a sound baseline in an afternoon.

                ## Milestones
                1. The recommended preset for each linter enabled in one config file per repo.
                2. Rules that conflict with the formatter turned off, so the two tools never fight.
                3. Up to five extra rules added, each tied to a bug or review comment the team has actually seen.
                4. The full lint run produces a count of findings recorded as the starting baseline.

                ## Notes
                Formatting belongs to the formatter. Any stylistic lint rule that overlaps it should be off.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each repo has a config extending the recommended preset, with formatter conflicts disabled and the starting finding count recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Enable the linter's recommended preset in a single config file"
                - "Disable stylistic rules that overlap the formatter"
                - "Add at most five rules that would have caught a recent real bug"
                - "Run the linter across the repo and record the finding count as the baseline"
            - name: Team style guide for what tools cannot check
              description: |-
                ## Purpose
                Formatters and linters cannot judge whether a name is clear, whether an error is handled at the right layer or when a comment is worth writing. A style guide of two or three pages that covers only those judgement calls, with a short example of each, gives reviewers something to point at instead of personal taste.

                ## Milestones
                1. A list of the judgement calls that come up most in review, drawn from recent pull requests.
                2. A draft guide of no more than three pages covering naming, error handling, comments, logging and test layout.
                3. Each rule paired with a short good and bad example from your own codebase.
                4. The guide reviewed by the team and merged into the repository as a Markdown file.

                ## Notes
                Anything a tool can enforce does not belong here. If the guide says it, the linter should already check it, or the guide should not say it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A merged style guide of three pages or fewer, with an example for every rule and team sign-off recorded in the pull request."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect ten recurring style comments from the last month of pull requests"
                - "Ask the agent to group the comments into themes and draft one rule per theme"
                - "Add a good and a bad example from your own code to each rule"
                - "Open the guide as a pull request and give the team a week to comment"
            - name: Pre-commit hooks for fast local checks
              description: |-
                ## Purpose
                Catching a format or lint failure before the commit saves a round trip through CI and a fix-up commit. Hooks that run the formatter and linter only on staged files, finishing in a few seconds, give fast feedback without making anyone want to skip them.

                ## Milestones
                1. A hook manager chosen, such as the pre-commit framework or husky with lint-staged.
                2. Hooks running the formatter and linter on staged files only.
                3. Typical hook runtime under five seconds on a normal commit.
                4. Installation of the hooks documented as one command in the README.

                ## Notes
                Hooks are a convenience, not the enforcement point. Anyone can skip them, so CI must still run the same checks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hooks format and lint staged files in under five seconds and are installed by a single documented command."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a hook manager that fits the repo's main language"
                - "Configure hooks to format and lint staged files only"
                - "Time the hook on three typical commits and trim anything slow"
                - "Document the one-line install command in the README"
            - name: Lint and format check as a required CI status
              description: |-
                ## Purpose
                Standards that only run locally are optional in practice. Making the format check and the linter a required status on the main branch means no change merges without passing them, and the team stops having to police style by hand in review.

                ## Milestones
                1. A CI job running the formatter in check mode and the linter with the same config used locally.
                2. The job reporting findings as inline annotations on the pull request where the platform supports it.
                3. The job marked as a required status in branch protection for the main branch.
                4. One deliberately badly formatted test pull request shown to fail and then pass.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main branch cannot accept a merge unless the format and lint job passes, proven by a test pull request."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a CI job that runs the formatter in check mode and the linter"
                - "Turn on inline annotations so findings appear on the changed lines"
                - "Mark the job as required in the main branch protection settings"
                - "Open a test pull request with a formatting error and confirm it is blocked"
            - name: Pinned versions for every lint and format tool
              description: |-
                ## Purpose
                An unpinned formatter can change its output in a minor release and turn every open pull request red overnight. Pinning exact versions in the lockfile or tool manifest, and running the same version in CI, in hooks and in editors, keeps results identical everywhere.

                ## Milestones
                1. Exact versions pinned for the formatter, linter, plugins and type checker.
                2. CI and pre-commit hooks reading those versions from the repo rather than installing the latest.
                3. Editor settings pointed at the project's installed tool rather than a bundled copy where possible.
                4. A check that the same file formats identically locally and in CI.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every lint and format tool is pinned to an exact version used identically by editors, hooks and CI."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Replace version ranges for lint and format tools with exact versions"
                - "Point hooks and CI at the repo's installed tools instead of global installs"
                - "Set editor extensions to use the workspace version of each tool"
                - "Format the same file locally and in CI and confirm the output matches"
            - name: Monthly lint warning count review
              description: |-
                ## Purpose
                Warnings that nobody counts only ever grow. A five-minute monthly look at the total warnings and suppressions per repository shows whether the codebase is getting cleaner or quietly sliding, and gives the rule set review real numbers to work from.

                ## Milestones
                1. A log with one row per month per repository: warnings, errors, suppressions and lines of code.
                2. Three months of entries recorded so the trend is visible.
                3. Any repo where warnings rose for two months running flagged to its owners.
                4. The log linked from the quarterly rule set review notes.

                ## Notes
                Start from the **Metrics log** template. Normalise by lines of code if the codebase is growing fast, or a rising count may just mean more code.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly warning, error and suppression counts are logged for every repo, with any two-month rise flagged to its owners."
                cadence: rolling
              tasks:
                - "Write a script that prints warning, error and suppression counts per repo"
                - "Run the count script and add this month's row to the log @recurring(monthly:9)"
                - "Flag any repo whose warnings rose two months running to its owners"
            - name: Quarterly lint rule set review
              description: |-
                ## Purpose
                Rule sets accumulate: rules added after one incident, rules nobody remembers enabling, rules everyone suppresses. A quarterly hour with the team, looking at which rules fire most, which get suppressed and which proposals are waiting, keeps the set short and trusted.

                ## Milestones
                1. A list of the ten most frequently triggered and most frequently suppressed rules.
                2. A decision recorded for each: keep, change severity, configure differently or remove.
                3. Pending rule proposals accepted or declined with a reason.
                4. The resulting config change merged within a week of the meeting.

                ## Notes
                Start from the **Meeting notes** template. A rule suppressed more often than it is fixed is usually wrong for your codebase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has recorded notes with a decision for the top triggered and suppressed rules and a merged config change."
                cadence: cyclic
              tasks:
                - "Book a one-hour rule set review with the team each quarter @recurring(quarterly)"
                - "Pull the most triggered and most suppressed rules before the meeting"
                - "Record keep, change or remove for each rule discussed"
                - "Merge the agreed config change within a week"
            - name: Suppression comment audit
              description: |-
                ## Purpose
                Every disable comment is a small exception, and unexplained ones pile up until the linter is mostly switched off by hand. Requiring a reason on each suppression and reviewing new ones monthly keeps exceptions honest and shows which rules need rethinking.

                ## Milestones
                1. A lint rule or CI check that rejects suppressions with no explanation, such as eslint-comments rules or Ruff's unused noqa check.
                2. Suppressions that disable a whole file or every rule replaced with targeted ones.
                3. Unused suppressions removed automatically.
                4. A monthly list of new suppressions reviewed, with any pattern sent to the rule set review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every suppression carries a reason, unused ones fail CI, and new suppressions are reviewed each month."
                cadence: rolling
              tasks:
                - "Enable the check that requires a description on every disable comment"
                - "Turn on reporting of unused suppressions in CI"
                - "Search for file-wide or blanket suppressions and narrow them"
                - "Review suppressions added in the last month and note repeat offenders @recurring(monthly:17)"
            - name: Linter release notes and new rules watch
              description: |-
                ## Purpose
                Linters and their plugins ship new rules, deprecations and config format changes several times a year, and a skipped major version becomes a painful upgrade. Reading the release notes monthly, separate from general dependency upgrades, catches useful new rules and breaking changes early.

                ## Milestones
                1. A list of every lint and format tool and plugin the team depends on, with the link to its changelog.
                2. A monthly note of new rules worth trying and deprecations affecting your config.
                3. Deprecated options replaced before the next major release removes them.
                4. Promising new rules sent as proposals to the rule set review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly note on lint tool releases exists, deprecated options are replaced before removal and new rules are proposed."
                cadence: rolling
              tasks:
                - "List each lint and format tool and plugin with a link to its changelog"
                - "Read the changelogs and note new rules and deprecations @recurring(monthly:23)"
                - "Replace any deprecated config option the notes mention"
                - "File promising new rules as proposals for the next rule review"
            - name: Rule proposal and trial process
              description: |-
                ## Purpose
                Without a process, rules arrive by whoever edits the config last, and the team learns about them when CI goes red. A lightweight proposal format, a trial as a warning for a few weeks and a decision on evidence lets anyone suggest a rule while protecting everyone from surprise.

                ## Milestones
                1. A short proposal template: the rule, the bug or review comment it prevents, expected findings and autofix availability.
                2. New rules introduced as warnings for a trial period before becoming errors.
                3. Each proposal closed with accepted, declined or needs changes, and a reason.
                4. A list of accepted and declined rules kept so the same debate does not recur.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written proposal template is in use, and every proposal in the last quarter has a recorded decision and reason."
                cadence: rolling
              tasks:
                - "Write a one-page rule proposal template and add it to the repo"
                - "Add a decision log listing accepted and declined rules with reasons"
                - "Triage open rule proposals and move each one forward @recurring(monthly:3)"
                - "Promote rules that finished a clean trial from warning to error"
            - name: New repository conformance checklist
              description: |-
                ## Purpose
                New repositories are usually created in a hurry and skip the formatter, hooks or CI gate, and nobody notices for months. A checklist, or better a template repository with everything already wired, makes the standard the default rather than a follow-up chore.

                ## Milestones
                1. A checklist covering formatter, linter config, shared config package, hooks, EditorConfig, CI gate and code owners.
                2. A template repository or project generator that passes the checklist out of the box.
                3. Every repository created in the last six months checked against the list.
                4. Gaps in existing repositories opened as issues with an owner.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A conformance checklist and a passing template repository exist, and all recent repositories have been checked against it."
                cadence: rolling
              tasks:
                - "Write the conformance checklist from the foundations already in place"
                - "Build or update a template repository that passes every item"
                - "Check each new repository from the past quarter against the checklist @recurring(quarterly)"
                - "Open an issue with an owner for each gap found"
            - name: Style guide changelog and upkeep
              description: |-
                ## Purpose
                A style guide that silently changes leaves reviewers quoting old rules and newcomers confused by code that follows neither version. Keeping a dated changelog at the top and pruning anything the tools now enforce keeps the guide short and believable.

                ## Milestones
                1. A changelog section at the top of the style guide with dated entries.
                2. Rules now enforced by a linter removed from the prose and replaced with a pointer to the rule.
                3. Examples refreshed where the code they quote has moved or been deleted.
                4. Each quarter's changes announced to the team in a few lines.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The style guide has a dated changelog, no rule duplicated by a linter and a quarterly announcement of changes."
                cadence: rolling
              tasks:
                - "Add a dated changelog section to the top of the style guide"
                - "Remove guide rules that a linter now enforces and link the rule instead"
                - "Publish a short summary of style guide changes to the team @recurring(quarterly)"
            - name: Lint job duration budget
              description: |-
                ## Purpose
                Lint steps that creep from twenty seconds to four minutes become the reason people batch changes and resent the rules. Setting a time budget for the lint job and checking it monthly catches the slow plugin or the type-aware rule run across the whole repo before it hurts.

                ## Milestones
                1. A time budget agreed for the lint and format job, for example under one minute on a typical pull request.
                2. Lint caching enabled where the tool supports it.
                3. Changed-files-only linting on pull requests with a full run on the main branch.
                4. The slowest rules or plugins identified with the linter's timing output.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The lint job has a written time budget, caching is on, and the median pull request run stays inside the budget each month."
                cadence: rolling
              tasks:
                - "Agree a time budget for the lint job on a typical pull request"
                - "Turn on the linter's cache in CI and locally"
                - "Run the linter with rule timing enabled and note the five slowest rules"
                - "Check the median lint job duration against the budget @recurring(monthly:12)"
            - name: Turning repeated review nits into rules
              description: |-
                ## Purpose
                Every style nit a human types in review is a rule the linter could have enforced for free. Noting the nits you leave or receive each week, then turning the repeat offenders into rule proposals, steadily moves style out of review and into tooling.

                ## Milestones
                1. A running list of style nits from code review, with the pull request each came from.
                2. Nits grouped monthly and any appearing three or more times marked as rule candidates.
                3. At least one existing or custom rule proposed for each candidate.
                4. A visible drop in style comments on pull requests after the rules land.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A nit log is kept weekly, and every nit seen three or more times has a rule proposal filed."
                cadence: rolling
              tasks:
                - "Start a shared list for style nits seen in code review"
                - "Add the style nits you left or received this week to the list @recurring(weekly:fri)"
                - "Group the list and file rule proposals for repeat nits @recurring(monthly:28)"
            - name: Understanding your linter's configuration model
              description: |-
                ## Purpose
                Most lint confusion comes from not knowing which config applies to a file: cascading directories, overrides by glob, shared presets and ignore files all interact. An afternoon learning exactly how your linter resolves configuration, for example ESLint's flat config or Ruff's per-file settings, makes every later change faster and safer.

                ## Milestones
                1. A written explanation of how your linter finds and merges configuration for a given file.
                2. The command that prints the resolved config for one file tried on three different files.
                3. Overrides for tests, scripts and generated code understood and documented.
                4. One confusing or redundant override in your config removed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note explains config resolution for your linter, with the resolved config printed for three files."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the configuration section of your linter's official documentation"
                - "Print the resolved config for a source file, a test file and a script"
                - "Write a half-page note on how overrides and ignores apply"
                - "Remove one override that the resolved output shows is redundant"
            - name: Writing a first custom lint rule
              description: |-
                ## Purpose
                Some of your most valuable rules exist in no public plugin: banning a deprecated internal helper, enforcing a logging call shape or requiring a feature flag check. Learning to write one rule against the syntax tree, with tests, turns recurring team knowledge into something enforced on every change.

                ## Milestones
                1. The syntax tree for a sample snippet explored in an AST viewer such as AST Explorer.
                2. A rule written that reports one specific pattern from your codebase.
                3. Valid and invalid test cases for the rule, run with the linter's rule tester.
                4. The rule running locally against the real codebase with its findings reviewed.

                ## Notes
                Many linters offer simpler routes first, such as ESLint's no-restricted-syntax with a selector or Ruff's banned-api setting. Try those before writing code.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A custom rule with passing valid and invalid test cases runs against the real codebase and its findings have been reviewed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one pattern from the nit log that no existing rule covers"
                - "Paste a sample into an AST viewer and find the node types involved"
                - "Write the rule and its valid and invalid test cases"
                - "Run the rule across the codebase and review every finding"
            - name: Type-aware linting and what it costs
              description: |-
                ## Purpose
                Rules that use type information, such as flagging floating promises or unsafe any values, catch real bugs that syntax-only rules cannot, but they can make linting several times slower. Understanding which type-aware rules are worth their cost lets you enable them deliberately rather than all or nothing.

                ## Milestones
                1. The type-aware rules available for your stack listed, for example typescript-eslint's type-checked presets.
                2. Lint time measured with and without type information on the main repo.
                3. Three type-aware rules chosen for the bugs they would have caught in your history.
                4. A decision recorded on where type-aware rules run: every pull request, main branch only or editors only.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Lint timings with and without type information are recorded, and a decision on which type-aware rules run where is written down."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the type-aware rules your linter offers"
                - "Time a full lint run with and without type information"
                - "Match three type-aware rules to bugs found in the past year"
                - "Write down where type-aware rules will run and why"
            - name: Reading and acting on complexity warnings
              description: |-
                ## Purpose
                Cyclomatic and cognitive complexity warnings are easy to silence and hard to act on well. Learning what each metric measures, and practising a few refactors that reduce it honestly, turns these rules from noise into a prompt for code that is easier to test and change.

                ## Milestones
                1. The difference between cyclomatic and cognitive complexity written in your own words.
                2. A threshold chosen for your codebase from the current distribution, not a default copied from a blog.
                3. Three high-complexity functions refactored using guard clauses, extraction or lookup tables.
                4. A monthly glance at the most complex functions added to your routine.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A complexity threshold based on your own distribution is set, and three functions above it have been refactored below it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run a complexity report and sort functions by score"
                - "Choose a threshold that flags roughly the worst five percent"
                - "Refactor three functions above the threshold with tests in place"
                - "Look at the ten most complex functions and pick one to simplify @recurring(monthly:14)"
            - name: Safe and unsafe autofixes
              description: |-
                ## Purpose
                Running every autofix across a codebase can change behaviour, not just style, for example reordering imports with side effects or rewriting a loose equality. Learning which fixes your linter marks as safe and which as suggestions or unsafe stops a cleanup commit from becoming an incident.

                ## Milestones
                1. The linter's categories of fixes understood, such as fixes versus suggestions or safe versus unsafe.
                2. Safe fixes applied automatically in editors and hooks.
                3. Unsafe fixes applied only in reviewed, separate commits with tests run.
                4. A note in the style guide on which fix levels run automatically.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The team's policy on which autofix levels run automatically is written in the style guide and reflected in hook settings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read how your linter classifies fixes and which flag applies unsafe ones"
                - "Configure editors and hooks to apply only safe fixes"
                - "Try an unsafe fix on one module and review the diff with tests"
                - "Write the autofix policy into the style guide"
            - name: Import ordering and unused code rules
              description: |-
                ## Purpose
                Unused imports, variables and exports hide what code actually depends on and slow down every reader. Learning the rules and tools that sort imports and find dead code, such as isort rules in Ruff, eslint-plugin-import or knip, gives the team a tidy dependency surface with almost no effort once on.

                ## Milestones
                1. Import sorting handled by one tool only, with any overlapping rule switched off.
                2. Unused imports and variables reported as errors.
                3. A dead export or unused file scan run once and its findings reviewed.
                4. Confirmed dead code deleted in a single reviewed pull request.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Import sorting runs from a single tool, unused imports fail lint, and one dead code cleanup pull request has merged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether the formatter or linter already sorts imports and pick one"
                - "Turn unused import and variable rules up to error"
                - "Run a dead code scanner and review its findings with the owners"
                - "Delete confirmed dead code in one pull request"
            - name: Type checker strictness levels
              description: |-
                ## Purpose
                Type checkers such as TypeScript, mypy and pyright offer a ladder of strictness options, and teams often run the loosest setting without knowing what the others catch. Understanding what each flag adds, and how many errors it would surface in your code today, lets you plan how far up the ladder to climb.

                ## Milestones
                1. Each strictness flag your checker offers listed with a one-line description of what it catches.
                2. The error count for each flag measured on your codebase.
                3. Flags ordered by value against effort.
                4. A recommended target strictness written for the team.

                ## Notes
                Turning on strict mode in one go on a large codebase usually produces thousands of errors. Per-flag or per-directory adoption is the norm.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of strictness flags with error counts on your code and a recommended target is shared with the team."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the strictness flags your type checker supports"
                - "Enable each flag on its own and record the error count"
                - "Rank the flags by bugs prevented against effort to fix"
                - "Share a recommended target strictness with the team"
            - name: Naming conventions practice session
              description: |-
                ## Purpose
                Naming is the part of style no tool fully checks, and it is where most readability lives. A one-hour team session renaming real snippets, agreeing patterns for booleans, collections, units and abbreviations, builds a shared ear that the style guide alone cannot.

                ## Milestones
                1. Eight real snippets with unclear names gathered from the codebase.
                2. The team's proposed renames compared and the reasoning discussed.
                3. Patterns agreed for booleans, collections, units in names and allowed abbreviations.
                4. The agreed patterns added to the style guide, with naming lint rules enabled where a tool can check them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team naming session has run, and its agreed patterns are in the style guide with any checkable ones enforced by lint."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick eight snippets with unclear names from recent code"
                - "Run a one-hour session where everyone proposes renames"
                - "Write the agreed naming patterns into the style guide"
                - "Enable naming lint rules for any pattern a tool can check"
            - name: Ratchet plan for legacy lint warnings
              description: |-
                ## Purpose
                Switching on a good rule set in an old codebase can produce thousands of findings, and nobody can fix them all before shipping anything else. A ratchet records today's findings as a baseline, fails only on new ones and lowers the baseline steadily, so the codebase improves every month without a freeze.

                ## Milestones
                1. Current findings captured in a baseline file, using the linter's built-in support or a tool such as betterer.
                2. CI failing on any finding not in the baseline.
                3. A target agreed for reducing the baseline, for example ten percent per month.
                4. A boy scout rule in the style guide: touched files leave cleaner than they arrived.
                5. The baseline at half its starting size.

                ## Notes
                Start from the **Remediation plan** template. Never let the baseline grow: regenerate it only when it shrinks.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "CI fails on new findings outside a committed baseline, and the baseline has fallen to half its starting count."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Generate a baseline file of current lint findings and commit it"
                - "Configure CI to fail on findings outside the baseline"
                - "Agree a monthly reduction target with the team"
                - "Fix a batch of baseline findings and regenerate the smaller baseline @recurring(monthly:5)"
            - name: All-in-one toolchain or separate linter and formatter
              description: |-
                ## Purpose
                Newer tools such as Biome for web code and Ruff for Python combine linting and formatting in one fast binary, while the older pairings such as ESLint with Prettier have more plugins and a longer track record. Comparing them on your own repo, against the rules you actually depend on, gives an answer based on evidence rather than benchmarks on someone else's code.

                ## Milestones
                1. The rules and plugins your current setup depends on listed, with the must-haves marked.
                2. Coverage of those rules checked in the all-in-one candidate.
                3. Run times and output differences measured on your largest repository.
                4. A decision recorded with what you would lose and gain.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison on your own repo covers rule coverage and run times, ending in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of rules and plugins your current config enables"
                - "Check which of those rules the all-in-one tool supports"
                - "Run both setups on your largest repo and record timings"
                - "Write up the decision with what you lose and gain"
            - name: Migrating to a faster linter
              description: |-
                ## Purpose
                Once a decision to switch tools is made, the migration needs care: rule names differ, some rules have no equivalent and suppression comments in the old syntax stop working. Running both tools side by side for a short period and migrating config and comments mechanically avoids a week of red builds.

                ## Milestones
                1. A mapping from each old rule to its new equivalent or a note that none exists.
                2. Both tools running in CI for two weeks, with only the old one blocking.
                3. Suppression comments converted to the new syntax by script.
                4. The old tool, its config and its plugins removed.
                5. Lint job time before and after recorded.

                ## Notes
                Many tools publish a migration command or rule mapping, such as Biome's migrate command or Ruff's flake8 plugin equivalents. Use it before writing your own.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The old linter and its plugins are removed, the new tool blocks CI, and before and after lint times are recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Run the new tool's migration command and review the generated config"
                - "Write a mapping for rules that did not migrate automatically"
                - "Run both tools in CI with only the old one required"
                - "Convert suppression comments to the new syntax with a script"
                - "Remove the old tool and record the new lint job time"
            - name: Severity policy for warnings and errors
              description: |-
                ## Purpose
                A linter full of warnings that never fail the build teaches everyone to ignore its output. Agreeing what warning and error mean for your team, typically error for anything blocking and warning only for rules on trial, makes every message on screen something to act on.

                ## Milestones
                1. A one-paragraph definition of error, warning and off for your team.
                2. Every rule currently at warning reviewed and moved to error, trial or off.
                3. CI configured to fail on warnings, or warnings reserved for time-limited trials.
                4. The policy written into the style guide.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written severity policy is in the style guide, and no rule sits at warning outside a dated trial."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft definitions of error, warning and off for the team"
                - "List every rule currently set to warning"
                - "Move each warning to error, a dated trial or off"
                - "Add the severity policy to the style guide"
            - name: Shared lint config package across repositories
              description: |-
                ## Purpose
                Copying config files between repositories means ten slightly different standards within a year. Publishing the team's rules as a versioned internal package, which each repo extends, lets one change reach every repository through a normal version bump.

                ## Milestones
                1. A shared config package containing the lint and format settings each repo currently copies.
                2. The package published to your internal registry with semantic versioning.
                3. At least three repositories extending the package with only local overrides left in place.
                4. Release notes for each version listing rule changes and whether they need a fix.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned shared config package is published and extended by at least three repositories with minimal local overrides."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Diff the lint configs across repos and extract the common settings"
                - "Publish the common settings as a versioned internal package"
                - "Switch three repositories to extend the package"
                - "Release a new version of the shared config with notes on rule changes @recurring(quarterly)"
            - name: Excluding generated and vendored code from lint
              description: |-
                ## Purpose
                Linting generated API clients, migrations, build output and vendored libraries wastes time and buries real findings under thousands you cannot fix. A clear, commented ignore list, kept in one place, keeps lint focused on code people write.

                ## Milestones
                1. Every generated, vendored and build output directory identified.
                2. Those paths excluded in the linter and formatter ignore settings with a comment explaining each.
                3. Generated files marked so code review tools collapse them, for example through gitattributes.
                4. The finding count and lint time recorded before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All generated and vendored paths are excluded with commented ignore entries, and the drop in findings and lint time is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the repo for generated, vendored and build output directories"
                - "Add each path to the lint and format ignore settings with a comment"
                - "Mark generated files in gitattributes so reviews collapse them"
                - "Record lint findings and time before and after the change"
            - name: Commit message and branch name conventions
              description: |-
                ## Purpose
                Consistent commit messages make history searchable and can drive changelogs and version bumps automatically. Adopting a convention such as Conventional Commits and checking it with a tool like commitlint, on pull request titles if you squash merge, keeps it consistent without anyone policing it.

                ## Milestones
                1. A commit message convention agreed, with the allowed types listed.
                2. A branch naming pattern agreed if the team uses branch names in tooling.
                3. A check running on commit messages or pull request titles in CI.
                4. Three good example messages added to the contributing guide.

                ## Notes
                If the team squash merges, lint the pull request title rather than every commit. It is the only message that reaches the main branch.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A commit or pull request title convention is enforced in CI and documented with examples in the contributing guide."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree a commit message convention and its allowed types"
                - "Add a CI check on pull request titles or commit messages"
                - "Write three example messages into the contributing guide"
                - "Agree a branch naming pattern if any tooling depends on it"
            - name: Linting shell scripts, Dockerfiles and config files
              description: |-
                ## Purpose
                Shell scripts, Dockerfiles, YAML and Markdown often cause more production surprises than application code and get no checks at all. Adding linters such as shellcheck, hadolint, yamllint and markdownlint closes the gap with modest effort.

                ## Milestones
                1. Every non-application file type in the repo listed with the number of files.
                2. A linter chosen and configured for each type that matters.
                3. Existing findings fixed or added to a baseline.
                4. The new linters running in hooks and the CI lint job.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Shell, container, YAML and Markdown files are linted in CI with existing findings fixed or baselined."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the shell, Dockerfile, YAML and Markdown files in the repo"
                - "Run shellcheck on every script and fix the errors it reports"
                - "Add hadolint, yamllint and markdownlint where those files exist"
                - "Wire the new linters into the hooks and the CI lint job"
            - name: Style guide kick-off workshop
              description: |-
                ## Purpose
                Standards imposed by one person are resented, while standards a team argued about for an hour are defended. A single workshop to agree the formatter, the baseline preset, severity and the handful of judgement calls for the guide settles the big questions and gives everyone ownership.

                ## Milestones
                1. A pre-read sent with the inventory findings and two or three concrete proposals.
                2. Decisions recorded on formatter, preset, severity policy and the style guide topics.
                3. Contested points parked with an owner and a date rather than argued indefinitely.
                4. A follow-up message summarising decisions sent within two days.

                ## Notes
                Start from the **Meeting notes** template. Time-box each topic; formatting debates expand to fill the room.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The workshop has run with recorded decisions on formatter, preset and severity, and a summary was sent within two days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a 90-minute workshop with the whole team"
                - "Send a pre-read with the inventory and concrete proposals"
                - "Run the session with a time box for each topic"
                - "Send a summary of decisions and parked points within two days"
            - name: Whole-codebase reformat cutover
              description: |-
                ## Purpose
                Applying a new formatter to an existing codebase touches nearly every file, conflicts with every open branch and pollutes blame if done carelessly. Planning a single cutover day, with the reformat in one commit listed in a blame ignore file, keeps history useful and spares everyone a week of merge conflicts.

                ## Milestones
                1. A cutover date announced at least a week ahead, with a request to merge or park open branches.
                2. The reformat applied in one commit containing no other changes.
                3. That commit's hash added to a .git-blame-ignore-revs file, with the hosting platform and local git configured to use it.
                4. Instructions shared for rebasing remaining branches by reformatting them first.
                5. The CI format check switched on the same day.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The codebase was reformatted in one isolated commit listed in the blame ignore file, with the CI format check live the same day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Announce the cutover date and ask for open branches to merge first"
                - "Reformat the whole codebase in a single commit with nothing else in it"
                - "Add the commit hash to the blame ignore file"
                - "Share rebase instructions for any branches still open"
                - "Switch on the CI format check straight after the merge"
            - name: Lint-clean milestone for the flagship repository
              description: |-
                ## Purpose
                A ratchet improves everything slowly, but reaching zero findings in the repository everyone works in most proves the rules are achievable and gives a clean slate for stricter ones. A dated push, with findings split by owner and a short weekly fix session, gets there without halting features.

                ## Milestones
                1. Remaining findings in the flagship repo split by directory and owner.
                2. A weekly fix session held with progress posted afterwards.
                3. Rules with large finding counts fixed by autofix or codemod where safe.
                4. Zero findings in the main branch, with the baseline file deleted.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The flagship repository's main branch has zero lint findings and its baseline file has been deleted."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Break remaining findings down by directory and code owner"
                - "Apply safe autofixes in one reviewed pull request"
                - "Hold a one-hour fix session and post the new count @recurring(weekly:wed)"
                - "Delete the baseline file once the count reaches zero"
            - name: Annual coding standards retrospective
              description: |-
                ## Purpose
                Once a year, it is worth asking whether the standards still serve the team: which rules prevented bugs, which only generated friction, and what newcomers found confusing. A short survey and one meeting give the next year's changes a clear mandate.

                ## Milestones
                1. A five-question survey sent to every engineer, including recent joiners.
                2. The year's lint metrics, suppression trends and rule decisions summarised.
                3. Three changes agreed for the coming year.
                4. The retrospective notes and decisions linked from the style guide.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly retrospective with survey results and three agreed changes is recorded and linked from the style guide."
                cadence: cyclic
              tasks:
                - "Schedule the annual standards retrospective and survey @recurring(yearly)"
                - "Ask the agent to summarise the year's metrics log and rule decisions"
                - "Send a five-question survey to every engineer"
                - "Agree and record three changes for the coming year"
            - name: Strict type checking switch-on for one package
              description: |-
                ## Purpose
                Turning on strict type checking everywhere at once rarely survives contact with a real codebase. Picking one well-tested package, fixing its errors and switching strict mode on there with a dated target proves the path and gives a pattern to repeat across the rest.

                ## Milestones
                1. One package chosen with good tests and a manageable error count under strict mode.
                2. Errors fixed in small pull requests rather than one giant change.
                3. Strict mode enabled for that package in its own config and enforced in CI.
                4. A short write-up of the error types and fixes, to guide the next package.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "One package passes strict type checking in CI, and a write-up of the common fixes is shared for the next package."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Count strict mode errors per package and choose the best first candidate"
                - "Fix strict mode errors in small pull requests and note the remaining count @recurring(weekly:mon)"
                - "Enable strict mode for the package and enforce it in CI"
                - "Write up the common error types and how they were fixed"
            - name: Minimum standards for a solo developer's repos
              description: |-
                ## Purpose
                Working alone, it is tempting to skip tooling because nobody else will read the code, but you in six months are the other reader. A formatter, a recommended lint preset and a single CI check, set up once in a starter you copy to every new project, costs an hour and saves arguing with past you.

                ## Milestones
                1. A personal starter config with formatter, lint preset and EditorConfig.
                2. Format on save and safe autofix on in your editor.
                3. A single CI job running format check and lint on push.
                4. The starter applied to your two most active personal repos.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal starter config exists and your two most active personal repos run format and lint checks on every push."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a starter folder with formatter, lint preset and EditorConfig"
                - "Turn on format on save and safe fixes in your editor"
                - "Add a single CI job that checks formatting and lint on push"
                - "Copy the starter into your two most active personal repos"
            - name: Joining a codebase with conventions you disagree with
              description: |-
                ## Purpose
                New joiners often arrive with strong habits from a previous team and find conventions here that look wrong. Following the house style first, collecting specific evidence for a month and then proposing changes through the proper route earns credibility and gets better results than fighting in review.

                ## Milestones
                1. The style guide, lint config and decision log read in your first week.
                2. Your editor set up to match the repo's tools exactly.
                3. A private list of conventions you would change, each with a concrete example of the problem it causes.
                4. One well-evidenced proposal submitted after a month, if one still stands.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "After a month of following house style, you have an evidence list and have submitted or dropped each proposal through the rule process."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the style guide and the accepted and declined rules log"
                - "Set your editor to use the repo's formatter and linter versions"
                - "Keep a private list of conventions you would change, with examples"
                - "Submit at most one evidenced proposal after your first month"
            - name: Rolling out standards to a sceptical team
              description: |-
                ## Purpose
                Team leads who switch on fifty rules on a Friday get a revolt on Monday. Introducing standards in small steps, starting with the formatter, explaining the bug or review time each rule saves and making it easy to get help, wins over sceptics instead of creating workarounds.

                ## Milestones
                1. A rollout plan with three to five steps, starting with the formatter and the least controversial rules.
                2. Each step announced with its reason and the date it becomes blocking.
                3. A weekly drop-in slot for lint questions during the rollout.
                4. Concerns logged and answered, with at least one rule changed in response.
                5. Every step blocking in CI and the drop-in retired.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All rollout steps are blocking in CI, team concerns were logged and answered, and at least one rule changed in response."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a stepwise rollout plan starting with the formatter"
                - "Announce each step with its reason and its blocking date"
                - "Hold a 30-minute drop-in for lint questions @recurring(weekly:tue)"
                - "Log every concern raised and reply to each one"
            - name: Merging two teams' conventions after a reorganisation
              description: |-
                ## Purpose
                When teams merge or a codebase is acquired, two sets of rules collide and every shared file becomes a style dispute. Comparing the configs line by line, agreeing defaults where they differ and migrating the smaller codebase gives one standard instead of a permanent truce.

                ## Milestones
                1. Both teams' formatter and lint configs compared, with every difference listed.
                2. Each difference resolved by picking the tool default where possible.
                3. A merged config agreed by a representative from each team.
                4. The codebase with fewer changes migrated first, with a reformat cutover.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A single merged config is agreed by both teams and applied to at least one of the two codebases."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Diff the two teams' formatter and lint configs"
                - "List each difference with the tool default beside it"
                - "Agree the merged config with one representative from each team"
                - "Plan the reformat cutover for the codebase with fewer changes"
            - name: Polyglot repository with several linters
              description: |-
                ## Purpose
                Mixed repositories with a web frontend, Python services and infrastructure code end up with several formatters and linters, each with its own config, ignore file and CI step. A single entry point that runs them all, with consistent output, keeps the experience simple for engineers who mostly work in one language.

                ## Milestones
                1. Every language and tool in the repo listed with its config location.
                2. One command, such as a make target or task runner script, that runs all formatters and linters.
                3. Hooks and CI calling that same command, scoped to changed files where possible.
                4. Shared settings such as line length aligned across tools where it makes sense.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One documented command runs every formatter and linter in the repo, and hooks and CI both use it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each language in the repo with its tools and config files"
                - "Write a single lint command that runs every tool"
                - "Point hooks and CI at that command"
                - "Align line length and other shared settings across tools"
            - name: Matching a client's standards as a contractor
              description: |-
                ## Purpose
                Contractors and agency engineers move between codebases with different rules every few months, and a pull request that ignores the client's style undermines trust on day one. A quick routine for adopting each client's tooling, and a per-client editor profile, makes your first change look like it came from the team.

                ## Milestones
                1. The client's style guide, lint config and contributing guide read before the first change.
                2. A separate editor profile or workspace for this client so your own defaults do not leak in.
                3. Your first pull request passing their checks with no style comments.
                4. Any unclear conventions clarified with the client's lead in writing.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your first pull request for a new client passes their checks with no style comments, using a client-specific editor profile."
                cadence: rolling
              tasks:
                - "Read the client's style guide and contributing guide before coding"
                - "Create a separate editor profile for this client's codebase"
                - "Run their full lint and format command before opening your first pull request"
                - "Ask the client's lead in writing about any convention that is unclear"
            - name: Holding AI-generated code to the same lint rules
              description: |-
                ## Purpose
                Code from AI assistants often compiles but ignores house conventions, uses deprecated helpers or adds suppressions to make a warning go away. Making sure generated code passes the same formatter, linter and type checks, and giving the assistant your conventions up front, keeps the codebase consistent however code is written.

                ## Milestones
                1. The team's assistant instructions or rules file pointing to the style guide and lint commands.
                2. A check that suggested code introducing new suppressions is flagged in review.
                3. Banned internal APIs listed in lint config so assistants' suggestions are caught automatically.
                4. A month of pull requests sampled for style issues that slipped through.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Assistant instructions reference the style guide and lint commands, and a one-month sample shows no new unexplained suppressions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add the style guide and lint command to the team's assistant instructions file"
                - "List banned internal APIs in the lint config with a message naming the replacement"
                - "Flag new suppressions in a pull request with a CI annotation"
                - "Sample a month of merged pull requests for style that slipped through"
            - name: Architecture boundary rules enforced by lint
              description: |-
                ## Purpose
                Layering rules such as the domain never importing from the web layer are usually written in a diagram and broken within weeks. Tools such as dependency-cruiser, eslint-plugin-boundaries or import-linter turn those rules into checks that fail the build when someone takes a shortcut.

                ## Milestones
                1. The intended layers or modules and their allowed dependencies written as a short table.
                2. A boundary tool configured to enforce that table.
                3. Existing violations baselined or fixed.
                4. A dependency graph generated from the tool and linked from the architecture docs.

                ## Notes
                Keep the rules coarse. Five layers enforced is worth more than fifty modules debated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Allowed module dependencies are enforced in CI by a boundary tool, with existing violations fixed or baselined."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the allowed dependencies between layers as a short table"
                - "Configure a boundary checking tool to enforce the table"
                - "Baseline or fix the violations it reports today"
                - "Generate a dependency graph and link it from the architecture docs"
            - name: Organisation-wide lint health dashboard
              description: |-
                ## Purpose
                Across dozens of repositories, nobody can tell which ones skipped the shared config or are three major versions behind. A dashboard collecting config version, finding counts and CI gate status from every repo shows platform and standards owners where to help.

                ## Milestones
                1. A script or job that collects shared config version, finding count and gate status from every repository.
                2. Results published to a dashboard or a regularly updated table.
                3. Repositories more than one major config version behind contacted with an offer of help.
                4. Results from lint jobs exported in a standard format such as SARIF where the platform supports it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dashboard shows config version, findings and gate status for every repository, refreshed at least monthly."
                cadence: rolling
              tasks:
                - "Write a job that reads shared config version and findings from each repo"
                - "Publish the results to a dashboard or shared table"
                - "Contact owners of repos more than one major version behind @recurring(monthly:20)"
                - "Export lint results as SARIF where the code host can display them"
            - name: Codemods to adopt a rule across many repositories
              description: |-
                ## Purpose
                Some rules, such as banning a deprecated API, produce thousands of findings no linter can autofix. A codemod written with a tool such as jscodeshift, ts-morph or LibCST fixes them mechanically, so the rule can go to error across every repo in days rather than quarters.

                ## Milestones
                1. One rule chosen whose findings follow a pattern a script can rewrite.
                2. A codemod written with tests covering the common and awkward cases.
                3. The codemod run on one repo and the diff reviewed by its owners.
                4. Codemod pull requests opened across the remaining repos, with the rule switched to error after merge.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tested codemod has cleared one rule's findings across all target repositories, and the rule is set to error."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one rule whose findings follow a mechanical pattern"
                - "Write the codemod and test it on sample inputs"
                - "Run it on one repository and have the owners review the diff"
                - "Open codemod pull requests across the remaining repositories"
            - name: Internal lint plugin with tests and releases
              description: |-
                ## Purpose
                Once a team has several custom rules, they need the same care as any other library: tests, documentation, versioning and a deprecation path. Packaging them as an internal plugin with a docs page per rule means every message links to an explanation and every change is reviewed.

                ## Milestones
                1. All custom rules moved into one plugin package with a rule tester suite.
                2. A docs page per rule with the reason, a bad example and a good example, linked from the rule's message.
                3. Semantic versioning and a changelog, with new rules shipped first as warnings.
                4. The plugin consumed through the shared config package.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Custom rules live in one versioned plugin with tests and a docs page per rule, consumed via the shared config."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Move existing custom rules into a single plugin package"
                - "Add rule tester cases for each rule to the plugin's CI"
                - "Write a docs page for each rule and link it from the rule message"
                - "Publish a versioned release consumed by the shared config"
---

# Coding Standards & Linting

This area is for engineers and teams who want style arguments settled once and enforced by tools, so code review can spend its attention on design and correctness. It starts with the foundations (an inventory of what each repo runs today, a formatter per language, a baseline rule set, a short written style guide and checks in hooks and CI), then the routines that keep the rules healthy, the skills behind configuring and writing rules, the decisions about severity, toolchains and legacy warnings, the dated cutovers, the situations a solo developer, a new joiner or a team lead faces, and finally the work of whoever maintains standards across many repositories.

What repeats is a monthly warning count and suppression audit, a monthly check of linter release notes and lint job speed, a weekly note of style nits left in review, a quarterly rule set review and style guide changelog, and a yearly standards retrospective. The Metrics log, Meeting notes, Operational checklist and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
