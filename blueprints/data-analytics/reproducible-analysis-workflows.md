---
id: data-analytics.reproducible-analysis-workflows
name: Reproducible Analysis Workflows
description: "Analysis projects anyone can rerun: a standard layout, git, pinned environments, read-only raw data and one-command rebuilds, the routines that keep them honest, and replication packages for papers and audits."
category: business
version: 1.0.0
tags: [data-analytics, reproducible-analysis-workflows, researcher, engineer, version-control, notebooks, software-environments, open-science]
author: Aurum Technology
starter_structure:
  templates:
    - course
    - operational-checklist
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Reproducible Analysis Workflows
          description: "Structuring notebooks and analysis code with version control, environments and documentation so results can be rerun and checked."
          projects:
            - name: Rerunning one of your own past results from scratch
              description: |-
                ## Purpose
                Pick one figure or table you shared at least six months ago and try to regenerate it on your current machine using only what is saved in the project folder. Most people hit a missing file, a changed package or a forgotten manual step within the first hour. That list of failures is the honest starting point for everything else in this area.

                ## Milestones
                1. One past output chosen, with the original file saved for comparison.
                2. A rerun attempted using only the saved code, data and notes.
                3. Every point where the rerun stalled written down with its cause.
                4. The regenerated output compared with the original, with differences explained or flagged.
                5. The three most common causes of failure ranked as the first fixes to make.

                ## Notes
                Do this before reorganising anything. Tidying first destroys the evidence of what actually goes wrong in your work.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written rerun report for one past output lists every failure point and states whether the regenerated result matched the original."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one chart or table you shared more than six months ago"
                - "Copy the original output somewhere safe for comparison"
                - "Rerun the analysis on your current machine without asking anyone for help"
                - "Write down every step that failed or needed a guess"
                - "Compare the regenerated output with the original and note any differences"
            - name: Standard folder layout for analysis projects
              description: |-
                ## Purpose
                When every project puts data, code, notebooks and outputs in different places, nobody, including you in a year, can tell which script made which file. One layout used everywhere, with raw data, processed data, source code, notebooks, outputs and docs in fixed folders, makes any project readable in minutes and lets tools and templates assume where things live.

                ## Milestones
                1. A written layout with a one-line purpose for each top-level folder.
                2. A template repository or project generator that creates the layout in one command.
                3. The layout applied to the project you are working on now.
                4. A rule recorded for where scratch work goes so it never mixes with results.

                ## Notes
                Keep it boring and shallow: six or seven top-level folders. Community templates exist for Python and R, and adopting one beats inventing your own.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A template creates the agreed folder layout in one command and at least one active project has been moved onto it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the folders your last three projects actually needed"
                - "Write a one-line purpose for each top-level folder"
                - "Turn the layout into a template repository or project generator"
                - "Move your current project onto the layout and fix broken paths"
            - name: Git repository for every analysis
              description: |-
                ## Purpose
                Analyses kept as folders of files named final, final2 and final_really lose the history of why a number changed. Putting each analysis under git from day one, with an ignore file that keeps out data, outputs and secrets, gives you a timeline you can return to and a single place colleagues can clone.

                ## Milestones
                1. Every active analysis in its own git repository with a remote copy.
                2. A shared ignore file covering data files, caches, outputs and credential files.
                3. Commit messages that say why, not only what, for the last ten commits.
                4. No analysis on your machine that exists only as untracked files.

                ## Notes
                Large or sensitive data does not belong in git. Decide where it goes separately, in the project on where analysis data is stored.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active analysis has a git repository with a remote copy and an ignore file that excludes data, outputs and secrets."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every analysis folder on your machine that is not under git"
                - "Create a shared ignore file for data, caches, outputs and credential files"
                - "Initialise a repository for each active analysis and push it to a remote"
                - "Write each new commit message so it states the reason for the change"
            - name: Pinned software environment with a lockfile
              description: |-
                ## Purpose
                Results change silently when a package updates, and the error often surfaces months later on someone else's laptop. Recording exact package versions in a lockfile (renv for R, uv, Poetry or pip-tools for Python, conda-lock for mixed stacks) means anyone can rebuild the environment the analysis was actually run in.

                ## Milestones
                1. One environment tool chosen for each language you use.
                2. A lockfile with exact versions committed in the current project.
                3. The environment rebuilt from the lockfile on a second machine or in a fresh folder.
                4. The interpreter version recorded alongside the packages.

                ## Notes
                A plain list of package names without versions is not a lockfile. Pin the interpreter too: a minor version change in R or Python can alter defaults.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The current project has a committed lockfile and the environment has been rebuilt from it once on a clean machine or folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every language and package your current project imports"
                - "Pick one environment tool per language and note why"
                - "Generate a lockfile and commit it with the code"
                - "Rebuild the environment from the lockfile in a fresh folder and run the analysis"
            - name: Read-only raw data with checksums
              description: |-
                ## Purpose
                The commonest irreproducible step is a raw file edited by hand, or overwritten by a newer export with the same name. Treating raw data as read-only, recording where each file came from and when, and storing a checksum for each one means you can prove the input never changed, or see exactly when it did.

                ## Milestones
                1. Raw files stored in one folder that scripts never write to.
                2. A data manifest listing source, extraction date, owner and checksum for each file.
                3. File permissions set so raw data cannot be overwritten by accident.
                4. A script that verifies checksums before the analysis runs.

                ## Notes
                Cleaning happens in code that writes to a separate processed folder, never in the raw file. If a source sends corrections, save the corrected file under a new name and update the manifest.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every raw input in the current project is listed in a manifest with a checksum that a script verifies before each run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Move all raw inputs of the current project into one raw data folder"
                - "Record source, extraction date and owner for each file in a manifest"
                - "Compute a checksum for every raw file and add it to the manifest"
                - "Add a check that stops the run if any checksum no longer matches"
                - "Set the raw data folder to read-only"
            - name: README that lets a stranger rerun the analysis
              description: |-
                ## Purpose
                Ask a colleague to rerun your project from the README alone and watch where they get stuck: that is the real test. A good analysis README says what question the work answers, where the data comes from and how to get access, how to build the environment, the one command to run, how long it takes and which outputs to expect.

                ## Milestones
                1. A README with sections for question, data access, setup, run command, run time and outputs.
                2. Known limitations and manual steps stated plainly rather than hidden.
                3. A colleague has followed it on their own machine and reported back.
                4. Every gap they hit fixed in the README or the code.

                ## Notes
                Write the access steps even for data you cannot ship, even if the answer is a named contact and an approval form.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A colleague has rerun the analysis from the README alone and every gap they reported has been fixed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a README skeleton from the project's folder tree and scripts"
                - "Fill in data access, setup, run command, expected run time and outputs"
                - "Ask a colleague to rerun the project using only the README"
                - "Fix every point where they got stuck"
                - "Reread each active project's README and correct what has drifted @recurring(quarterly)"
            - name: Credentials kept out of analysis code
              description: |-
                ## Purpose
                Database passwords and API tokens pasted into notebooks end up in git history, shared screenshots and published replication packages. Moving them into environment variables or the operating system's keychain, and scanning old history for anything already leaked, protects the systems you query and lets the code be shared safely.

                ## Milestones
                1. No password, token or connection string appears in any tracked file.
                2. Credentials read from environment variables, an untracked local file or a keychain.
                3. Git history scanned with a secret scanner and any hits rotated by their owners.
                4. A pre-commit check that blocks new secrets from being committed.

                ## Notes
                Deleting a secret in a new commit does not remove it from history. Treat any leaked credential as compromised and ask its owner to rotate it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A secret scan of every analysis repository returns no live credentials, and a pre-commit hook blocks new ones."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the current project for passwords, tokens and connection strings"
                - "Move every credential into environment variables or a keychain entry"
                - "Run a secret scanner over the full git history of each repository"
                - "Ask the owners of any leaked credential to rotate it"
                - "Rerun the secret scan across all analysis repositories @recurring(quarterly)"
            - name: Random seeds and session details recorded
              description: |-
                ## Purpose
                Bootstraps, simulations, train and test splits and sampling all depend on random numbers, so an unseeded run gives slightly different answers every time and a reviewer cannot tell a bug from noise. Setting seeds explicitly, and writing software versions, platform and run time alongside every output, closes that gap in an afternoon.

                ## Milestones
                1. Every random step in the current project uses an explicit, documented seed.
                2. Session details (interpreter, packages, operating system) written to a file on every run.
                3. Two consecutive runs produce identical outputs.
                4. A note on any step that stays non-deterministic, such as multi-threaded or GPU code.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two consecutive runs of the current project produce identical outputs, or each remaining difference is documented in the README."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find every call that draws random numbers in the current project"
                - "Set one documented seed at the top of the pipeline and pass it down"
                - "Write session and package details to a file at the end of each run"
                - "Run the analysis twice and compare the outputs file by file"
            - name: Single command that rebuilds every output
              description: |-
                ## Purpose
                If producing the final report means running seven scripts in an order only you remember, the analysis is not reproducible even with perfect code. A pipeline tool such as Make, targets for R or Snakemake records which outputs depend on which inputs, so one command rebuilds everything and only reruns the steps whose inputs changed.

                ## Milestones
                1. Every step from raw data to final output listed in order with its inputs and outputs.
                2. A pipeline definition that encodes those dependencies.
                3. The full analysis rebuilt from an empty outputs folder with one command.
                4. The run command written at the top of the README.

                ## Notes
                Start with the steps you already have. A pipeline that calls your existing scripts is better than a rewrite that never finishes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Deleting the outputs folder and running one command regenerates every figure, table and report in the current project."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draw the chain of steps from raw files to the final report"
                - "Write down each step's input files and output files"
                - "Choose a pipeline tool that fits the languages in the project"
                - "Encode the steps and rebuild everything from an empty outputs folder"
            - name: Weekly commit and push routine
              description: |-
                ## Purpose
                Work that sits uncommitted on one laptop for a fortnight is one spilled coffee from gone, and long gaps make commits too big to review or undo. A short end-of-week routine, committing in small logical pieces and pushing every branch to the remote, keeps history readable and the work backed up.

                ## Milestones
                1. A weekly slot in the calendar for the routine.
                2. No branch left unpushed at the end of any week for a month.
                3. Commits small enough that each one does a single thing.
                4. Stale branches merged or deleted once a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks end with every analysis branch committed and pushed to the remote."
                cadence: rolling
              tasks:
                - "Set a fifteen-minute end-of-week slot in your calendar"
                - "Commit outstanding work in small pieces and push every branch @recurring(weekly:fri)"
                - "Merge or delete branches that have sat untouched for a month"
            - name: Restart and run all before any notebook is shared
              description: |-
                ## Purpose
                Notebooks run out of order hold hidden state: a variable defined in a deleted cell, a dataframe filtered twice, an import that only exists in memory. Restarting the kernel and running every cell from top to bottom before anything leaves your hands catches these silently broken notebooks, and it takes minutes.

                ## Milestones
                1. A written rule that no notebook is shared without a clean top-to-bottom run.
                2. Execution counts in shared notebooks running in order from one.
                3. A short checklist kept beside the rule: clean run, outputs current, seed set.
                4. A month of shared notebooks that all passed the check.

                ## Notes
                If a notebook takes too long to run cleanly, its heavy steps belong in a script or a pipeline stage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every notebook shared in a month shows execution counts in order from one after a clean kernel restart."
                cadence: rolling
              tasks:
                - "Write the clean-run rule and checklist into the project README"
                - "Restart and run all on every notebook due to be shared that week @recurring(weekly:thu)"
                - "Move any step that makes a clean run too slow into a script"
            - name: Monthly rebuild on a clean machine
              description: |-
                ## Purpose
                An analysis that runs on your laptop may depend on a file in your home folder, a system library or an environment variable you set years ago. Rebuilding once a month in a fresh container, virtual machine or clean user account shows whether the project still runs for anyone but you.

                ## Milestones
                1. A clean environment chosen for the test: container, virtual machine or hosted runner.
                2. The project cloned and rebuilt there using only the README.
                3. Every hidden dependency found and either documented or removed.
                4. Three consecutive monthly rebuilds completed without manual fixes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly rebuilds on a clean machine complete from the README with no manual intervention."
                cadence: rolling
              tasks:
                - "Choose a clean environment you can create in minutes"
                - "Clone and rebuild the main active project there from the README @recurring(monthly:9)"
                - "Log each hidden dependency the rebuild exposes and fix it"
            - name: Analysis decision log beside the code
              description: |-
                ## Purpose
                Code records what was done but rarely why: which outliers were dropped, why one join replaced another, which definition the stakeholder chose. A dated decision log in the repository, one short entry per choice with the alternative considered, lets a reviewer follow the reasoning and stops the same argument being reopened.

                ## Milestones
                1. A decision log file in the repository with date, decision, reason and alternative columns.
                2. Each entry linked to the commit that implemented it.
                3. Every exclusion, filter and definition choice in the current project logged.
                4. A reviewer has read the log and found nothing missing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The current project's decision log covers every exclusion, filter and definition choice, each linked to a commit."
                cadence: rolling
              tasks:
                - "Create a decision log file in the repository"
                - "Back-fill the exclusions and definitions already made in the current project"
                - "Add the week's analysis decisions to the log with commit links @recurring(weekly:wed)"
                - "Ask a reviewer to check the log against the code"
            - name: Automated checks on every pull request
              description: |-
                ## Purpose
                Continuous integration is not only for software teams. A hosted runner that, on every pull request, builds the environment from the lockfile, runs the tests and pushes a small data sample through the pipeline catches broken dependencies and failing functions before they reach the main branch.

                ## Milestones
                1. A continuous integration workflow that builds the environment from the lockfile.
                2. Unit tests and a fast pipeline run on sample data in every pull request.
                3. The main branch protected so failing checks block merging.
                4. A monthly review of failures with any flaky check fixed or removed.

                ## Notes
                Use synthetic or sample data in CI if the real data is confidential. A ten-minute check that runs every time beats a two-hour one that people learn to skip.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pull request in the current project runs the environment build, tests and a sample pipeline, and failing checks block merging."
                cadence: rolling
              tasks:
                - "Write a workflow that builds the environment from the lockfile on each pull request"
                - "Add the unit tests and a sample-data pipeline run to the workflow"
                - "Turn on branch protection so failed checks block merging"
                - "Review the month's check failures and fix the flaky ones @recurring(monthly:14)"
            - name: Peer review rota for analysis pull requests
              description: |-
                ## Purpose
                Most analysis errors are found by a second person reading the code, not by the author rerunning it. A weekly rota where each analyst reviews one colleague's pull request, using a short checklist covering joins, filters, units and hard-coded values, spreads both the habit and the knowledge of each project.

                ## Milestones
                1. A review checklist of eight to ten items specific to analysis code.
                2. A rota naming who reviews whose work each week.
                3. Every merged change in a month reviewed by someone other than its author.
                4. Common review findings collected and turned into checklist items or tests.

                ## Notes
                Review the logic and the output together: open the diff and the changed chart side by side.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one month, every change merged into the main branch was reviewed against the checklist by someone other than its author."
                cadence: rolling
              tasks:
                - "Draft an analysis review checklist covering joins, filters, units and constants"
                - "Agree a weekly rota with the people who share the repositories"
                - "Review your assigned pull request against the checklist @recurring(weekly:tue)"
                - "Turn repeated findings into checklist items or automated tests"
            - name: Quarterly dependency update with output comparison
              description: |-
                ## Purpose
                Never updating packages leaves you stuck on versions with known bugs and security holes, while updating carelessly changes results without warning. A quarterly routine that refreshes the lockfile on a branch, reruns the pipeline and compares every output with the last release turns updates into a reviewed, deliberate change.

                ## Milestones
                1. A branch with refreshed package versions and an updated lockfile.
                2. The full pipeline rerun on the new versions.
                3. Every output compared with the previous release, numbers and figures alike.
                4. Differences explained in the changelog, or the update rolled back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's dependency update is merged only after a written comparison shows every output change is explained."
                cadence: cyclic
              tasks:
                - "Write a small script that compares outputs between two runs within a tolerance"
                - "Update packages on a branch and rerun the pipeline @recurring(quarterly)"
                - "Record every changed number or figure and its cause in the changelog"
            - name: Monthly snapshot of the data extracts in use
              description: |-
                ## Purpose
                Warehouse tables and live APIs change under you through late corrections, backfills and deleted rows. Freezing the exact extract an analysis used, with its query, timestamp and checksum, is what lets a result reported in March still be reproduced in September.

                ## Milestones
                1. A storage location for frozen extracts with retention agreed with the data owner.
                2. Each extract saved with the query that produced it, the timestamp and a checksum.
                3. Reported results pointed at frozen extracts rather than live tables.
                4. A monthly snapshot taken for every analysis that feeds a recurring report.

                ## Notes
                Check retention and access rules before copying personal data. A snapshot is still a copy, and the same governance rules apply to it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every result reported in the last three months can be traced to a frozen extract with its query, timestamp and checksum."
                cadence: rolling
              tasks:
                - "Agree where frozen extracts live and how long they are kept"
                - "Save the query text next to each extract it produced"
                - "Snapshot the extracts behind each recurring report with checksums @recurring(monthly:17)"
            - name: Close-out routine for finished analyses
              description: |-
                ## Purpose
                Analyses tend to end messily: the answer goes out by email and the repository is abandoned mid-branch. A close-out of under an hour, merging the final branch, tagging the release that produced the shared result, checking the environment and noting where the outputs went, makes finished work recoverable years later.

                ## Milestones
                1. A close-out checklist of no more than eight steps.
                2. The final shared result tied to a tagged release in the repository.
                3. Lockfile, data manifest and README checked against the tagged version.
                4. A note recording where the result was sent and to whom.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analysis finished in the last quarter has a tagged release, a current README and a note of where its results went."
                cadence: rolling
              tasks:
                - "Write a close-out checklist of no more than eight steps"
                - "Tag the commit that produced the most recent result you shared"
                - "Close out any analysis finished in the past month @recurring(monthly:26)"
            - name: Annual rerun audit of past analyses
              description: |-
                ## Purpose
                Reproducibility decays: hosted packages disappear, data access lapses and operating systems move on. Once a year, pick three finished analyses at random and try to rerun each from its tagged release, which measures how your practices are holding up and shows what to change next.

                ## Milestones
                1. Three finished analyses chosen at random from the past two years.
                2. Each rerun attempted from its tagged release on a clean machine.
                3. A pass, partial or fail result recorded for each, with the reason.
                4. One practice change agreed from the audit and written into your standard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An annual audit report records pass, partial or fail for three randomly chosen past analyses and names one practice change."
                cadence: cyclic
              tasks:
                - "List every analysis finished in the past two years"
                - "Pick three at random and rerun each from its tagged release @recurring(yearly)"
                - "Record the outcome and the cause of any failure"
                - "Agree one practice change and add it to your standard"
            - name: Git skills for analysts beyond commit and push
              description: |-
                ## Purpose
                Analysts who only know commit and push avoid branches, fear merge conflicts and cannot find when a number changed. A few weeks on branching, reading diffs, resolving conflicts, reverting safely and using bisect to find the commit that broke a result pays back on every project afterwards.

                ## Milestones
                1. Feature branches used for every change in one project for a month.
                2. A merge conflict resolved deliberately on a practice repository.
                3. A bad commit reverted without losing later work.
                4. Git bisect used to find the commit where an output changed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have used branches, resolved a conflict, reverted a commit and run git bisect on a real or practice analysis repository."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a practice repository with a small analysis script"
                - "Make two conflicting branches and resolve the merge by hand"
                - "Revert a deliberately bad commit and check later work survives"
                - "Use git bisect to find the commit where a test output changed"
            - name: Literate analysis documents in Quarto or R Markdown
              description: |-
                ## Purpose
                Reports assembled by pasting charts into slides break the link between code and result the moment anything changes. Writing the analysis as a literate document, prose and code together and rendered in one step to HTML, PDF or Word, keeps the narrative, the numbers in the text and the figures in step with the data.

                ## Milestones
                1. One existing report rebuilt as a Quarto or R Markdown document.
                2. Every number in the text computed inline rather than typed.
                3. The document rendered from the command line as part of the pipeline.
                4. Code folding or appendices used so readers see the prose first.

                ## Notes
                Typed numbers are the usual weak spot: a sentence saying 12 percent survives long after the data says 14.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real report is produced by rendering a literate document from the command line, with every number in its text computed inline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Install Quarto or R Markdown in the project environment"
                - "Rebuild one existing report as a literate document"
                - "Replace every typed number in the text with an inline computed value"
                - "Add the render step to the pipeline"
            - name: Notebook hygiene with paired scripts and stripped outputs
              description: |-
                ## Purpose
                Notebook files store outputs and metadata alongside code, so their diffs are unreadable and proper review is impossible. Pairing each notebook with a plain-text script version (jupytext does this for Jupyter), stripping outputs before commit and keeping heavy logic in importable modules makes notebooks reviewable like any other code.

                ## Milestones
                1. Notebooks paired with plain-text versions that git tracks.
                2. Outputs stripped automatically by a pre-commit hook.
                3. Reusable functions moved out of notebooks into a module the notebooks import.
                4. A pull request on a notebook reviewed using the text diff alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every notebook in the current project has a paired text version, commits carry no outputs and one notebook pull request has been reviewed from its text diff."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Install jupytext or an equivalent pairing tool in the environment"
                - "Pair each notebook in the current project with a text version"
                - "Add a pre-commit hook that strips notebook outputs"
                - "Move one block of reusable logic into a module and import it"
            - name: Unit tests for data cleaning and transformation functions
              description: |-
                ## Purpose
                Cleaning functions are where silent errors live: a date parsed in the wrong order, a join that duplicates rows, a filter that quietly drops nulls. Small tests on hand-made fixtures of five to ten rows (pytest for Python, testthat for R) pin down what each function should do and catch regressions when someone edits it.

                ## Milestones
                1. A test framework set up in the project with one passing test.
                2. Fixtures built by hand for the trickiest cleaning cases, including nulls and duplicates.
                3. Tests covering every function that changes row counts or column types.
                4. Tests run automatically before each commit or in continuous integration.

                ## Notes
                Test the functions, not the whole analysis. A test that needs the full dataset will not be run often.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every function in the current project that changes row counts or column types has at least one passing test on a hand-made fixture."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up pytest or testthat in the current project"
                - "Build a ten-row fixture with nulls, duplicates and awkward dates"
                - "Write tests for each function that changes row counts or types"
                - "Run the tests before every commit"
            - name: Containers for analysis environments
              description: |-
                ## Purpose
                Lockfiles pin packages but not the system libraries beneath them, such as geospatial libraries, database drivers or a particular maths library. A container image built from a short, versioned recipe file captures the whole stack, so the analysis runs the same on a laptop, a server and a reviewer's machine.

                ## Milestones
                1. A container recipe file in the repository that installs system libraries and the locked packages.
                2. The analysis run inside the container from a single command.
                3. The base image pinned by digest or dated tag rather than a floating one.
                4. The built image stored in a registry with a tag matching the release.

                ## Notes
                Pinning the base image to a name like latest defeats the purpose. Use a dated tag or a digest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The current analysis runs from a single command inside a container built from a committed recipe with a pinned base image."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work through a beginner container tutorial using a toy script"
                - "Write a recipe file that installs system libraries and locked packages"
                - "Pin the base image by digest and build it"
                - "Run the full analysis inside the container and compare outputs"
            - name: Caching expensive steps without stale results
              description: |-
                ## Purpose
                Analysts often cache slow steps by saving intermediate files, then forget which code produced them and report from stale data. Learning how pipeline tools decide when a cached result is out of date, by tracking code, inputs and parameters, keeps the speed of caching without the risk.

                ## Milestones
                1. Each cached intermediate in the current project listed with the code and inputs it depends on.
                2. Hand-saved cache files replaced by pipeline-managed targets.
                3. A deliberate change to an upstream step shown to invalidate the right downstream results.
                4. Cache folders excluded from git and safe to delete at any time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Changing an upstream step in the current project reruns exactly the downstream steps that depend on it, with no hand-managed cache files left."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every saved intermediate file and the code that made it"
                - "Read how your pipeline tool decides a target is out of date"
                - "Replace hand-saved caches with pipeline-managed targets"
                - "Change one upstream step and check which targets rebuild"
            - name: Parameterised reports for repeated analyses
              description: |-
                ## Purpose
                The same analysis rerun for each region, month or product often lives as twelve copies of one notebook that slowly drift apart. A single parameterised document or notebook (Quarto parameters, or papermill for Jupyter) run once per value keeps one source of truth and makes every variant reproducible.

                ## Milestones
                1. One family of copied notebooks identified and compared for drift.
                2. A single parameterised version that takes the varying values as inputs.
                3. All variants generated from the command line in one run.
                4. The old copies archived and removed from active use.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One set of copied notebooks has been replaced by a single parameterised version that generates every variant in one command."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a set of copied notebooks that differ only in a few values"
                - "Compare the copies to find where they have drifted apart"
                - "Build one parameterised version with the varying values as inputs"
                - "Generate every variant from the command line and archive the copies"
            - name: Numerical differences between runs and machines
              description: |-
                ## Purpose
                Even with seeds and pinned packages, results can differ in the fifth decimal place across machines because of multi-threaded maths libraries, GPU kernels, parallel random streams or the order of floating point sums. Knowing these sources lets you decide which differences are acceptable, set comparison tolerances and record what cannot be made exact.

                ## Milestones
                1. The known sources of non-determinism in your stack listed.
                2. Thread counts and parallel random number streams set explicitly.
                3. A tolerance agreed for comparing numeric outputs, with the reason.
                4. The remaining non-deterministic steps documented in the README.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The README states the comparison tolerance for numeric outputs and names every step that is not bit-for-bit reproducible."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run the same analysis on two machines and diff the numeric outputs"
                - "Set thread counts and parallel random streams explicitly"
                - "Agree a numeric tolerance for output comparisons and write down why"
                - "Document any step that still differs between runs"
            - name: Structured course on reproducible research practice
              description: |-
                ## Purpose
                Picking up reproducibility habits piecemeal leaves gaps, usually in testing, environments or data management. Working through one structured course or open textbook over six to eight weeks, and applying each module to a real project as you go, fills them in a sensible order.

                ## Milestones
                1. One course or open textbook chosen and its modules listed.
                2. A weekly study slot kept for the length of the course.
                3. Each module applied to a real project, with the change committed.
                4. A short note on which practices you will keep and which do not fit your work.

                ## Notes
                Start from the **Course** template. Several free options come from research software communities and university reproducibility networks.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every module of one reproducibility course has been completed and applied to a real project, with a closing note on what you kept."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one course or open textbook on reproducible research"
                - "List its modules in the course template with a target week for each"
                - "Work through one module and apply it to a real project @recurring(weekly:sun)"
                - "Write a closing note on the practices you will keep"
            - name: Choosing an environment manager for the team
              description: |-
                ## Purpose
                Teams where one person uses conda, another pip and a third nothing at all cannot share environments or debug each other's installs. Comparing two or three options against your languages, operating systems, cluster and security rules, then picking one default, saves hours of setup on every shared project.

                ## Milestones
                1. Requirements listed: languages, operating systems, cluster use and private package mirrors.
                2. Two or three tools tried on the same real project.
                3. Each scored on install speed, lockfile quality, cross-platform support and learning curve.
                4. One default chosen and written into the team standard with an exceptions rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names one default environment tool for the team, scored against agreed criteria, with an exceptions rule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the languages, operating systems and machines the team works on"
                - "Try two or three environment tools on the same real project"
                - "Score each tool against the agreed criteria"
                - "Record the chosen default and when exceptions are allowed"
            - name: Refactoring a long notebook into scripts and functions
              description: |-
                ## Purpose
                A 300-cell notebook that does extraction, cleaning, modelling and plotting is hard to test, review or rerun in part. Splitting it into a few scripts or modules with clear inputs and outputs, and leaving a short notebook for exploration and presentation, makes each stage checkable on its own.

                ## Milestones
                1. The notebook's stages mapped with the data passed between them.
                2. Each stage moved into a script or module with defined inputs and outputs.
                3. Outputs from the refactored code matched against the original notebook.
                4. A slim notebook kept only for exploration and presentation.

                ## Notes
                Compare outputs at every step of the refactor, not only at the end. A small drift is much easier to trace early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The refactored scripts reproduce the original notebook's outputs within tolerance, and the notebook holds no data processing logic."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to outline the notebook's stages and the data each passes on"
                - "Save the notebook's current outputs as a reference"
                - "Move one stage at a time into a script and compare outputs"
                - "Cut the notebook down to exploration and presentation"
            - name: Internal package for functions used across analyses
              description: |-
                ## Purpose
                When the same date-handling or fiscal calendar function is copied into a dozen projects, a fix in one never reaches the others. Collecting shared helpers into a small, versioned, tested internal package that projects install like any other dependency means one fix reaches everyone, and each project pins the version it used.

                ## Milestones
                1. Helpers duplicated across projects found and listed.
                2. A small package with tests and a version number created.
                3. Two projects switched to installing the package at a pinned version.
                4. A changelog kept so users know what each release changed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two projects install the shared helper package at a pinned version, and the package has tests and a changelog."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search your projects for functions copied between them"
                - "Create a package skeleton with tests for the three most copied helpers"
                - "Publish a first version to a private index or the git remote"
                - "Switch two projects to the package at a pinned version"
            - name: Deciding where analysis data is stored and versioned
              description: |-
                ## Purpose
                Git struggles with large or binary files and must never hold sensitive data, yet data kept outside version control drifts out of step with the code. Choosing between a data versioning tool, large file storage or object storage with checksums, judged against file sizes, sensitivity and team skills, settles the question once for the team.

                ## Milestones
                1. Data in current projects profiled by size, format, sensitivity and update frequency.
                2. Two or three storage and versioning options compared on the same project.
                3. A decision recorded with rules for what goes where.
                4. One project moved onto the chosen approach end to end.

                ## Notes
                Ask your data protection or security contact before choosing any external storage for personal data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written storage decision states what data goes in git, what goes elsewhere and how data versions link to code, and one project follows it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Profile the data in current projects by size, format and sensitivity"
                - "Try two storage and versioning options on the same project"
                - "Write the rules for which data goes where"
                - "Move one project onto the chosen approach"
            - name: Configuration file for paths, dates and parameters
              description: |-
                ## Purpose
                Hard-coded file paths, cut-off dates and thresholds scattered through scripts make an analysis run on only one machine and hide the choices that matter. Pulling them into one configuration file, read at the start of the pipeline, makes every assumption visible and the project portable.

                ## Milestones
                1. Every hard-coded path, date and threshold in the project found.
                2. A single configuration file holding them, with a comment for each.
                3. Paths made relative to the project root.
                4. The project run on a second machine without editing any script.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The current project runs on a second machine after editing only its configuration file, with no absolute paths left in code."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the code for absolute paths, dates and numeric thresholds"
                - "Create one configuration file with a comment on each value"
                - "Replace absolute paths with paths relative to the project root"
                - "Run the project on a second machine without editing any script"
            - name: Figures generated entirely from code
              description: |-
                ## Purpose
                Charts adjusted by hand in a graphics program, or exported from an interactive window, cannot be regenerated when the data updates. Producing every figure from a script with fixed size, fonts and file format, saved straight into the outputs folder, means a rerun refreshes the whole report without an afternoon of touching up.

                ## Milestones
                1. Each figure in the current report traced to the code that makes it.
                2. Manual edits replaced by plotting code, including labels and annotations.
                3. Size, resolution, fonts and file format set in code.
                4. All figures regenerated by the pipeline from an empty outputs folder.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every figure in the current report is produced by the pipeline with no manual editing, and regenerating them changes nothing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every figure in the current report and how it was made"
                - "Move hand-made labels and annotations into the plotting code"
                - "Set size, resolution, fonts and format in a shared plotting function"
                - "Regenerate all figures from an empty outputs folder"
            - name: Separating exploratory work from reported analysis
              description: |-
                ## Purpose
                Exploration should be fast and messy, but results that leave the team need a clean, reviewed path. Keeping a scratch area for exploration and a separate pipeline for anything reported, with a rule that a number is only shared once it comes out of the pipeline, protects both speed and trust.

                ## Milestones
                1. A scratch folder or branch clearly marked as unreviewed.
                2. A written rule that shared numbers come only from the pipeline.
                3. Each current shared result traced back to a pipeline output.
                4. A short path for promoting an exploratory finding into the pipeline.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every result shared in the last month can be traced to a pipeline output, and the promotion rule is written in the README."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a scratch area marked as unreviewed in the current project"
                - "Write the rule that shared numbers must come from the pipeline"
                - "Trace each result you shared this month back to a pipeline output"
                - "Document how an exploratory finding gets promoted into the pipeline"
            - name: Replication package for a journal submission
              description: |-
                ## Purpose
                A growing number of journals ask for code and data, and some have a data editor who reruns the package before acceptance. Assembling it before submission, with a README in a standard replication format, the environment, the data or its access route, and a run script that reproduces every table and figure, avoids a scramble during revisions.

                ## Milestones
                1. The journal's code and data policy read and its requirements listed.
                2. A package with README, licence, environment, code and data or access instructions.
                3. Every table and figure in the manuscript mapped to the script that produces it.
                4. The package rerun end to end by someone outside the project.
                5. The package deposited in a repository that issues a persistent identifier.

                ## Notes
                Start from the **Operational checklist** template. Check data licences and consent terms before depositing any data.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A deposited replication package reproduces every table and figure in the manuscript when rerun by someone outside the project."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Read the target journal's code and data policy and list its requirements"
                - "Map every manuscript table and figure to the script that makes it"
                - "Ask the agent to draft the replication README from the map and the run script"
                - "Have someone outside the project rerun the package on a clean machine"
                - "Deposit the package and record its persistent identifier"
            - name: Handover before leave or a role change
              description: |-
                ## Purpose
                Parental leave, a new job or a reorganisation often leaves running analyses with someone who has an afternoon to learn them. A handover two to four weeks ahead, with a recorded walkthrough, a clean rerun by the receiver and a list of open questions, means the work survives your absence.

                ## Milestones
                1. Every analysis you own listed with its status and stakeholders.
                2. Each one's README, decision log and run command brought up to date.
                3. The receiver has rerun each analysis on their own machine.
                4. Open questions and next steps written in a handover note.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The person taking over has rerun every handed-over analysis on their own machine before your last day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every analysis you own with its status and main stakeholder"
                - "Bring each README, decision log and run command up to date"
                - "Record a short screen walkthrough of each analysis"
                - "Watch the receiver rerun each analysis on their own machine"
                - "Write a handover note with open questions and next steps"
            - name: Independent rerun before a high-stakes report
              description: |-
                ## Purpose
                Numbers in a board pack, a regulatory filing or a funder report are expensive to retract. Having a colleague rerun the analysis from a fresh clone of the tagged release a few days before the deadline, and compare their outputs with yours, catches environment and data errors while there is still time to fix them.

                ## Milestones
                1. A cut-off date set several days before the report deadline.
                2. The analysis tagged at the version that will be reported.
                3. A colleague's rerun from a fresh clone matching your outputs.
                4. Any difference resolved and recorded before the report goes out.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The latest high-stakes report was preceded by an independent rerun from the tagged release that matched the reported numbers."
                cadence: cyclic
              tasks:
                - "Agree the rerun cut-off date with the report owner"
                - "Tag the release that will be used for the reported numbers"
                - "Ask a colleague to rerun from a fresh clone before each quarterly report @recurring(quarterly)"
                - "Record how any difference was resolved"
            - name: Freezing thesis analyses before submission
              description: |-
                ## Purpose
                Doctoral and master's students often rerun chapters months apart on different laptops, then discover near the viva that an early figure no longer reproduces. Freezing each chapter's analysis at a tagged release with its environment and data snapshot, well before submission, means examiners' questions can be answered from the exact version submitted.

                ## Milestones
                1. Each chapter's analysis mapped to a repository or folder.
                2. Every chapter tagged with its environment lockfile and data snapshot.
                3. All figures and tables in the thesis regenerated from the tagged versions.
                4. An archive copy stored where your supervisor or university can reach it.

                ## Notes
                Check your institution's rules on depositing code and data with the thesis, and agree the plan with your supervisor.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every thesis chapter has a tagged release with lockfile and data snapshot that regenerates its figures and tables."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map each thesis chapter to the code and data that produced it"
                - "Tag each chapter's analysis with its lockfile and data snapshot"
                - "Regenerate every thesis figure and table from the tagged versions"
                - "Store an archive copy where your supervisor can reach it"
            - name: Reproducibility workshop for colleagues
              description: |-
                ## Purpose
                Practices spread faster when someone shows them on real work than through a written standard. A two-hour hands-on session, where colleagues bring an analysis and leave with it under git with a lockfile and a README, does more than any slide deck on why reproducibility matters.

                ## Milestones
                1. A date, a room or call, and six to twelve attendees agreed.
                2. A practice repository and step-by-step exercise sheet prepared.
                3. Each attendee leaving with one of their own analyses under git with a lockfile.
                4. Feedback collected and the next session's changes noted.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A hands-on workshop has been run where each attendee left with an analysis under git with a lockfile and README."
                cadence: cyclic
              tasks:
                - "Agree a date and invite six to twelve colleagues"
                - "Prepare a practice repository and exercise sheet"
                - "Run the session with attendees working on their own analyses"
                - "Run a short refresher session for new joiners @recurring(yearly)"
            - name: Inheriting an analysis nobody can rerun
              description: |-
                ## Purpose
                Taking over a departed colleague's analysis usually means scripts with absolute paths, an unknown environment and outputs nobody can regenerate, while stakeholders keep asking for the next update. Treating it as a remediation, freezing the existing outputs as the reference and rebuilding step by step until they match, avoids silently changing numbers people already rely on.

                ## Milestones
                1. Existing outputs and every file found saved as the reference version.
                2. A list of gaps: missing data, unknown packages, manual steps.
                3. The analysis rerun under git with a lockfile, matching the reference within tolerance.
                4. Every unavoidable difference explained to stakeholders before the next update.

                ## Notes
                Start from the **Remediation plan** template. If the previous owner has not left yet, ask for an hour of their time now.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The inherited analysis reruns from its own repository and matches the reference outputs, with any differences explained to stakeholders."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Copy every file and output of the inherited analysis into a reference folder"
                - "Ask the previous owner or their manager for any missing context"
                - "List missing data, unknown packages and manual steps"
                - "Rebuild one step at a time until outputs match the reference"
                - "Tell stakeholders about any number that changes and why"
            - name: Shared reproducibility standard for a research group
              description: |-
                ## Purpose
                Principal investigators and team leads inherit the consequences when a student or analyst leaves and nobody can rerun their results. A one-page group standard covering layout, git, environments, data storage and the minimum required before results are shared gives everyone the same baseline without dictating every tool.

                ## Milestones
                1. A one-page standard drafted with the group, not imposed on it.
                2. Minimum requirements separated from recommended practices.
                3. Every active project checked against the minimum.
                4. The standard reviewed at a group meeting each year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page standard is agreed by the group and every active project meets its minimum requirements."
                cadence: cyclic
              tasks:
                - "Draft a one-page standard and circulate it to the group"
                - "Split the standard into minimum and recommended practices"
                - "Check every active project against the minimum and list gaps"
                - "Review the standard at a group meeting @recurring(yearly)"
            - name: Onboarding a new group member to the workflow
              description: |-
                ## Purpose
                New students, postdocs and analysts copy whatever they see in their first fortnight. A planned start, with the environment working on day one, the group standard walked through, a small task on a real repository and a first reviewed pull request, makes the group's workflow their default rather than an afterthought.

                ## Milestones
                1. A setup guide that gets a new machine running in under a day.
                2. A starter task on a real repository chosen in advance.
                3. The newcomer's first pull request reviewed and merged.
                4. Their feedback used to fix the setup guide.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new member has their environment working on day one and their first reviewed pull request merged within two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a setup guide for a new machine and test it yourself"
                - "Pick a small starter task on a real repository"
                - "Pair with the newcomer on their first pull request"
                - "Update the setup guide from their feedback"
            - name: Software engineer moving into research analysis
              description: |-
                ## Purpose
                Engineers bring strong habits around version control, tests and CI, but analysis work differs: questions change mid-stream, much code is exploratory, and correctness means the right statistical answer rather than passing tests. Adjusting those habits instead of importing them wholesale avoids both over-engineering throwaway work and under-checking the work that matters.

                ## Milestones
                1. The differences between product code and analysis code written down for your team.
                2. A lightweight standard for exploratory work agreed with the analysts.
                3. Tests focused on transformations and data assumptions rather than coverage targets.
                4. One analysis reviewed jointly, by an analyst for method and by you for code.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on how analysis code differs from product code is agreed with the analysts you work with, and one joint review is complete."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Shadow an analyst through one analysis from question to answer"
                - "Write down where your engineering habits help and where they slow exploration"
                - "Agree a lightweight standard for exploratory work with the analysts"
                - "Review one analysis together, covering both method and code"
            - name: Reproducible work on confidential data
              description: |-
                ## Purpose
                Health records, customer data and licensed datasets often cannot leave a secure environment, so reviewers and co-authors cannot rerun the work directly. A synthetic or dummy dataset with the same structure lets the code be shared, tested and run end to end, while the real run stays inside the secure environment with a full log.

                ## Milestones
                1. The real data's structure documented without revealing any values.
                2. A synthetic dataset with matching columns, types and edge cases.
                3. The full pipeline run on synthetic data outside the secure environment.
                4. A run log from the secure environment recording code version and outputs.

                ## Notes
                Synthetic data can still leak information if generated carelessly from real records. Agree the method with your data protection contact.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The pipeline runs end to end on synthetic data outside the secure environment, and each real run inside it is logged with the code version."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Document the real data's columns and types without any values"
                - "Agree a synthetic data method with your data protection contact"
                - "Generate synthetic data that covers the known edge cases"
                - "Run the full pipeline on the synthetic data outside the secure area"
            - name: Analyses on a shared computing cluster
              description: |-
                ## Purpose
                University and company clusters bring module systems, job schedulers and shared file systems, and environments that worked on a laptop often fail there. Setting the project up so the same lockfile or container runs on both, with job scripts kept in the repository, turns large runs into something reproducible rather than a one-off.

                ## Milestones
                1. The cluster's rules on software, storage and job limits read.
                2. The project environment built on the cluster from the lockfile or container.
                3. Job submission scripts committed to the repository.
                4. The same small run producing matching outputs on laptop and cluster.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A small run produces matching outputs on your laptop and on the cluster, with the job scripts committed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the cluster's documentation on software modules and storage limits"
                - "Build the project environment on the cluster from the lockfile or container"
                - "Commit the job submission scripts to the repository"
                - "Run a small job on both machines and compare outputs"
            - name: Provenance record attached to every output
              description: |-
                ## Purpose
                When a chart turns up in a slide deck months later, the question is which code, data and settings made it. A small provenance record written with each output, holding the commit hash, data checksums, lockfile hash and run time, answers that instantly and flags outputs made from uncommitted code.

                ## Milestones
                1. A provenance format chosen, as a sidecar file or embedded metadata.
                2. Every pipeline output written with its provenance record.
                3. Outputs made from uncommitted changes flagged automatically.
                4. A month-old output traced back to its exact code and data from the record alone.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every output of the current pipeline carries a provenance record with commit hash, data checksums and environment hash."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide whether provenance goes in a sidecar file or embedded metadata"
                - "Write a function that captures commit hash, data checksums and lockfile hash"
                - "Attach the record to every output the pipeline writes"
                - "Make the pipeline warn when it runs on uncommitted changes"
            - name: Independent reimplementation of a key result
              description: |-
                ## Purpose
                Rerunning the same code proves it runs, not that it is right. For a result that drives a major decision or a headline finding, having a second analyst rebuild it from the written methods alone, ideally in a different language or library, tests whether the description is complete and the code does what it claims.

                ## Milestones
                1. A key result chosen and its methods description written without code.
                2. A second analyst's rebuild of the result from the description alone.
                3. The two results compared, with differences traced to the code or the description.
                4. The methods description and code corrected where they disagreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A second analyst's independent rebuild of one key result matches the original, or every difference has been traced and fixed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose one result that drives a major decision or claim"
                - "Write the methods description without showing any code"
                - "Ask a second analyst to rebuild the result from the description alone"
                - "Compare the two results and trace every difference"
            - name: Audit trail for analyses in regulated settings
              description: |-
                ## Purpose
                Clinical trials, financial models and other regulated work can require every reported result to be traced to validated software, approved code and controlled changes. Signed commits, change records linked to reviews, a validated environment and retained run logs mean an auditor's question takes an afternoon rather than a month.

                ## Milestones
                1. The regulatory or internal quality requirements that apply listed with your quality team.
                2. Each code change linked to a reviewed and approved change record.
                3. The analysis environment documented and validated to the agreed standard.
                4. Run logs with code version, environment and inputs retained for the required period.

                ## Notes
                Your quality or compliance team decides what counts as validated. This work prepares the evidence; it does not set the standard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mock audit traces one reported result to its approved code change, validated environment and retained run log within one working day."
                cadence: cyclic
              tasks:
                - "Ask the quality team which requirements apply to your analyses"
                - "Link every code change to a reviewed change record"
                - "Document and validate the analysis environment with the quality team"
                - "Review the change-control log with the quality team @recurring(quarterly)"
            - name: Long-term archive that still runs in ten years
              description: |-
                ## Purpose
                Package repositories retire old versions, container formats change and proprietary file formats become unreadable. Archiving finished work with a saved container image, the source of every dependency, data in open formats and a persistent identifier in a research repository gives it the best chance of running long after its tools have moved on.

                ## Milestones
                1. Archive requirements set: formats, retention period and access rules.
                2. A saved container image and the source of every dependency stored with the code.
                3. Data converted to open formats such as CSV or Parquet with a codebook.
                4. The archive deposited with a persistent identifier and checked by restoring it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One finished analysis is archived with a saved image, its dependency sources, open-format data and a persistent identifier, and has been restored once."
                cadence: cyclic
              tasks:
                - "Choose one finished analysis worth keeping for ten years"
                - "Save its container image and the source of every dependency"
                - "Convert its data to open formats and write a codebook"
                - "Restore the archive on a clean machine and rerun it @recurring(yearly)"
---

# Reproducible Analysis Workflows

This area is for researchers and engineers who want every analysis they produce to be rerun and checked by someone else, or by themselves a year later. It starts with foundations (rerunning one of your own past results, a standard layout, git, a pinned environment, read-only raw data, a README a stranger can follow and a one-command rebuild), then the routines that keep projects reproducible, the skills from literate documents to containers and tests, improvements and decisions, dated events such as a journal replication package or a thesis freeze, situations from inheriting an analysis nobody can run to working with confidential data, and finally specialist work on provenance, independent reimplementation, regulated audit trails and long-term archives.

What repeats is a weekly commit and push, clean notebook runs, pull request reviews and decision log entries, monthly clean-machine rebuilds, data snapshots and close-outs, quarterly dependency updates and secret scans, and a yearly rerun audit of past work. The Course, Operational checklist, Remediation plan and Onboarding plan templates pair with the reproducibility course, the journal replication package, an inherited analysis and onboarding a new group member. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
