---
id: tech-certifications.ckad-kubernetes-developer
name: CKAD Kubernetes Developer
description: "A route to the CKAD: the current curriculum, a practice cluster and kubectl speed, labs for every application domain from Jobs to NetworkPolicies, timed task sets, simulator mocks and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, ckad-kubernetes-developer, engineer, kubernetes, kubectl, cncf, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CKAD Kubernetes Developer
          description: "Preparing for the CKAD exam: designing and deploying applications on Kubernetes, configuration, observability, services and timed hands-on tasks."
          projects:
            - name: CKAD curriculum and domain map
              description: |-
                ## Purpose
                The Linux Foundation and CNCF publish a CKAD curriculum that lists the domains and competencies, and it tracks a recent Kubernetes minor version, so last year's blog posts can be wrong. Copying the current curriculum onto one page and rating yourself against every line shows in an evening where the hours need to go and stops you studying cluster administration that belongs to a different exam.

                ## Milestones
                1. The current CKAD curriculum downloaded from the official open curriculum repository, with its version and date noted.
                2. Every domain and competency copied onto one page with a confidence rating from one to five.
                3. The Kubernetes version the exam currently runs on written at the top of the map.
                4. The exam length, format, fee, retake policy and passing score checked on the official exam page and recorded with the date checked.

                ## Notes
                At the time of writing the domains covered application design and build, deployment, observability and maintenance, environment, configuration and security, and services and networking. Trust the current curriculum, not this note.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page map lists every competency in the current CKAD curriculum with a confidence rating and the exam's Kubernetes version."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current CKAD curriculum from the official curriculum repository"
                - "Copy each domain and competency onto a single page"
                - "Rate your confidence on every competency from one to five"
                - "Record the exam format, fee, retake policy and passing score with today's date"
            - name: Cold baseline on ten timed CKAD-style tasks
              description: |-
                ## Purpose
                Developers who use Kubernetes daily through a pipeline often find they cannot write a Deployment from scratch in four minutes. Ten small tasks attempted cold, each with a strict time limit and no copying from your own repos, give an honest starting score and show whether the problem is knowledge or speed.

                ## Milestones
                1. Ten tasks chosen that span every curriculum domain, from a free task collection or written from the curriculum.
                2. Each task attempted with a timer and only the official documentation open.
                3. Every task marked as solved, solved late or not solved, with the minutes taken.
                4. The two slowest domains named on the curriculum map.

                ## Notes
                Do not warm up first. A deliberately cold score is the only one that tells you anything.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline records ten timed tasks with result and minutes taken, and names the two slowest domains."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick ten practice tasks that cover all five curriculum domains"
                - "Set a six-minute timer for each task and attempt it with docs only"
                - "Record solved, late or failed and the minutes for each task"
                - "Mark the two slowest domains on your curriculum map"
            - name: Local practice cluster with kind or minikube
              description: |-
                ## Purpose
                Every hour of CKAD study should end in typed commands, and that needs a cluster you can break and rebuild in two minutes. A local cluster on your laptop, with a known Kubernetes version close to the exam's, costs nothing and works on a train with no signal.

                ## Milestones
                1. A container runtime and kind, minikube or k3d installed and a cluster created.
                2. The cluster's Kubernetes version within one minor version of the exam's.
                3. A one-line command saved that deletes and recreates the cluster from scratch.
                4. A network plugin that enforces NetworkPolicies and an ingress controller installed, since the default set-up may not include either.

                ## Notes
                Check that your chosen tool enforces NetworkPolicies before you rely on it for that lab. Some defaults accept the objects and silently ignore them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A local cluster at or near the exam's Kubernetes version can be recreated with one saved command and enforces NetworkPolicies."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Install a container runtime and either kind or minikube on your laptop"
                - "Create a cluster pinned to the exam's Kubernetes minor version"
                - "Save a single command that deletes and recreates the cluster"
                - "Install a network plugin that enforces NetworkPolicies and an ingress controller"
            - name: Shell aliases, autocompletion and vim settings for speed
              description: |-
                ## Purpose
                Seconds lost to retyping kubectl and fighting YAML indentation add up to whole tasks lost in a two-hour exam. A small set-up you can type from memory in under a minute, an alias, completion, a dry-run variable and three vim settings, pays for itself on the first mock.

                ## Milestones
                1. The alias k for kubectl, with bash completion wired to the alias, working in your practice shell.
                2. A shell variable for the client dry-run YAML flags saved and used.
                3. Vim set to expand tabs to two spaces with sensible indentation.
                4. The whole set-up typed from memory in under ninety seconds.

                ## Notes
                Check what the exam environment already provides before memorising more. Recent environments have shipped with the alias and completion in place, which changes what you need to type.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The alias, completion, dry-run variable and vim settings can be typed from memory in under ninety seconds on a fresh shell."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the alias, completion and dry-run variable lines into a scratch file"
                - "Add tab expansion and two-space indentation to your vim settings"
                - "Type the whole set-up on a fresh shell and time yourself"
                - "Retype the set-up from memory on a clean shell @recurring(weekly:mon)"
            - name: Choosing a CKAD course and practice simulator
              description: |-
                ## Purpose
                Registration for the exam has, at the time of writing, included simulator sessions, but most candidates also want a structured course and a bank of timed tasks. Comparing two or three options against the same criteria, price, hands-on labs, how current the Kubernetes version is and refund terms, avoids paying twice.

                ## Milestones
                1. What the exam registration currently includes, simulator sessions and retake, confirmed on the official page.
                2. Two or three courses or task banks shortlisted with price and last update date.
                3. Each option scored on hands-on labs, currency of Kubernetes version and support.
                4. One course or bank chosen, or a decision recorded to study from free material only.

                ## Notes
                Start from the **Purchase decision** template. Watch for bundle discounts on the exam voucher at certain times of year, but do not buy a voucher before you have a target week.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two prep options exists, with the chosen option and its cost recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check what the current CKAD registration includes on the official page"
                - "Shortlist two or three courses or task banks with prices"
                - "Score each option on labs, Kubernetes version and refund terms"
                - "Record the chosen option and what it cost"
            - name: Study calendar to a target exam week
              description: |-
                ## Purpose
                Without a target week, CKAD study drifts for months because there is always one more lab to do. Counting back from a chosen week and placing each domain, the mocks and the buffer on a calendar turns a vague intention into sessions you can protect, and most working developers need eight to twelve weeks of steady practice.

                ## Milestones
                1. A target exam week chosen that falls inside your voucher's validity period.
                2. Each curriculum domain placed in the calendar, weakest domains first.
                3. Two full mock exams and a buffer week scheduled before the target.
                4. Study sessions blocked in your own calendar for the first four weeks.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar shows a target exam week, every domain scheduled, two mocks and a buffer week, with four weeks of sessions blocked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a target exam week and check it against voucher validity"
                - "Place each domain in the calendar with the weakest ones first"
                - "Schedule two full mocks and a buffer week before the target"
                - "Move the calendar forward to match real progress @recurring(monthly:28)"
            - name: Imperative commands and dry-run YAML scaffolding
              description: |-
                ## Purpose
                Writing manifests from a blank file is the slowest way to pass the CKAD. Generating Pods, Deployments, Services, Jobs, CronJobs, ConfigMaps and Secrets with kubectl create or run plus a client dry-run, then editing the YAML, is the single biggest speed gain most candidates make.

                ## Milestones
                1. A one-page list of the imperative generators for each common resource, written in your own words.
                2. Each generator used to produce YAML that was then edited and applied.
                3. kubectl explain with the recursive flag used to find field names without leaving the terminal.
                4. Ten resources created from generators in under fifteen minutes.

                ## Notes
                Learn which objects have no generator, such as PersistentVolumeClaims and NetworkPolicies, and bookmark a documentation example for each instead.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten different resources are generated, edited and applied from imperative commands in under fifteen minutes, timed and recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the kubectl create and run generators for each common resource"
                - "Generate a Deployment with a client dry-run and edit its YAML"
                - "Use kubectl explain recursively to find three fields you usually look up"
                - "Time yourself creating ten resources from generators"
            - name: Exam rules, proctoring and workspace check
              description: |-
                ## Purpose
                The CKAD is taken online in a locked-down remote desktop with a proctor watching, and candidates have lost their slot over a second monitor, a cluttered desk or an unsupported browser. Reading the current candidate handbook and running the system check weeks ahead removes those risks while there is still time to fix them.

                ## Milestones
                1. The current candidate handbook and exam rules read, with the allowed resources noted.
                2. The official system compatibility check passed on the computer you will use.
                3. A quiet room and clear desk identified that meet the room rules.
                4. Your ID checked to match the name on your exam account exactly.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The system check has passed on the exam computer, and the room, desk and ID have been checked against the current handbook."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current CKAD candidate handbook and note the allowed resources"
                - "Run the official system compatibility check on your exam computer"
                - "Choose the room and clear the desk to the stated rules"
                - "Compare your ID with the name on your exam account"
            - name: Documentation bookmarks for the exam browser
              description: |-
                ## Purpose
                Candidates may open the official Kubernetes documentation during the exam, but searching it under pressure is slow. Knowing exactly which pages hold the YAML you cannot generate, PVCs, probes, NetworkPolicies, Ingress, security contexts, turns the docs into a fast reference instead of a maze.

                ## Milestones
                1. A list of the fifteen documentation pages you reach for most, by title.
                2. The YAML example on each page located and copied once into a practice cluster.
                3. Each page found through the docs search in under thirty seconds.
                4. The current rules on what documentation sites are allowed checked against the handbook.

                ## Notes
                Browser bookmarks from your own machine do not carry into the exam environment, so practise finding pages by search terms rather than relying on saved links.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of fifteen documentation pages exists and each can be found by search in under thirty seconds, tested and recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the documentation pages you opened during the baseline tasks"
                - "Note the search words that find each page fastest"
                - "Copy the YAML example from each page into your practice cluster"
                - "Time yourself finding all fifteen pages by search"
            - name: Daily fifteen-minute kubectl drill
              description: |-
                ## Purpose
                Speed at the terminal is a motor skill, and it fades within a week of not typing. Fifteen minutes a day of small tasks, create a CronJob, expose a Deployment, add a probe, keeps the commands in your fingers between longer weekend sessions.

                ## Milestones
                1. A pool of at least forty short tasks written, spread across all domains.
                2. A drill completed on at least five days in most weeks.
                3. The average time per drill task falling over the first month.
                4. Drill tasks that keep failing moved into the mistake log.

                ## Notes
                Start from the **Habit tracker** template. Keep the drill short enough that you never skip it for lack of time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Drills are logged on at least five days a week for four consecutive weeks, with average task time recorded."
                cadence: rolling
              tasks:
                - "Write forty one-line drill tasks across the five domains"
                - "Do three drill tasks against a timer on the practice cluster @recurring(daily)"
                - "Mark each week's drill days in the habit tracker"
            - name: Weekly timed task set against the clock
              description: |-
                ## Purpose
                Individual drills build speed, but the exam rewards finishing many mixed tasks across several clusters and namespaces in one sitting. A weekly set of eight to twelve mixed tasks with a hard time limit practises switching context, reading the question carefully and skipping a stuck task.

                ## Milestones
                1. A weekly slot of about an hour protected in the calendar.
                2. Each set mixes at least four domains and two namespaces.
                3. The score and time for each set written in the tracker.
                4. A rule practised for skipping any task that passes its time budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A timed mixed task set is completed and scored in at least three weeks of every four."
                cadence: rolling
              tasks:
                - "Block one hour each week for a timed task set"
                - "Run a mixed set of ten tasks with a strict time limit @recurring(weekly:sat)"
                - "Flag any task skipped for time so it returns next week"
            - name: Mistake log of failed tasks and slow commands
              description: |-
                ## Purpose
                Most lost marks on the CKAD come from the same few slips: the wrong namespace, a missed label, a container port that does not match the Service. Writing every failed or slow task down with its real cause, and reviewing the pattern weekly, stops you making the same mistake in the exam.

                ## Milestones
                1. A log with columns for task, domain, what went wrong and the fix.
                2. Every failed or late task from drills and sets entered within a day.
                3. A weekly review that names the most repeated cause.
                4. A one-line habit written for each repeated cause, such as always setting the namespace first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The mistake log holds every failed task from the last four weeks with a cause, and a habit is written for each cause seen three times."
                cadence: rolling
              tasks:
                - "Set up a mistake log with task, domain, cause and fix columns"
                - "Enter each failed task from today's practice with its real cause"
                - "Review the log and name the most repeated cause @recurring(weekly:sun)"
            - name: Full mock exam in a simulator twice a month
              description: |-
                ## Purpose
                Nothing else tests stamina, time management and context switching like a full two-hour mock in an exam-like environment. Two full mocks a month in the second half of your plan, scored and reviewed, show whether you are ready long before the real date.

                ## Milestones
                1. A source of full-length mock exams chosen beyond the sessions included with registration.
                2. Each mock taken in one sitting with only the allowed documentation.
                3. Every mock scored by domain and the result logged.
                4. Every wrong task from each mock redone without help within three days.

                ## Notes
                Save the simulator sessions included with registration for the final weeks. They are often harder than the real exam, so read their score as a floor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two full mocks are taken and scored by domain each month in the second half of the plan, with every wrong task redone."
                cadence: rolling
              tasks:
                - "Choose where your full-length mocks will come from"
                - "Sit a full timed mock in one session @recurring(monthly:12)"
                - "Sit a second full timed mock and score it by domain @recurring(monthly:26)"
                - "Redo every wrong task from the last mock without notes"
            - name: Score and speed tracker by domain
              description: |-
                ## Purpose
                Feeling ready and being ready are different things in a timed practical exam. One page that records task set and mock scores by domain, plus the minutes per task, turns study into a trend you can read and gives the readiness decision real numbers.

                ## Milestones
                1. A tracker with date, source, score by domain and average minutes per task.
                2. The cold baseline entered as the first row.
                3. Every task set and mock added within a day of sitting it.
                4. A monthly note on which domain improved least.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The tracker holds the baseline and every scored set and mock since, with a monthly note on the weakest trend."
                cadence: rolling
              tasks:
                - "Create the tracker and enter your cold baseline as row one"
                - "Add the latest task set and mock scores to the tracker"
                - "Write the month's weakest domain trend in one sentence @recurring(monthly:14)"
            - name: Weekly practice cluster reset
              description: |-
                ## Purpose
                A practice cluster that collects months of leftover namespaces, policies and quotas starts giving misleading results, a NetworkPolicy from last month silently blocking this week's lab. Resetting it weekly to a clean state with a few standard namespaces keeps every lab honest.

                ## Milestones
                1. A reset script that recreates the cluster and the standard practice namespaces.
                2. Ingress controller and network plugin reinstalled by the same script.
                3. The cluster reset on a set day each week.
                4. Any lab that needs a long-lived set-up noted so the reset can recreate it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reset script recreates the cluster, namespaces and add-ons in under five minutes and is run weekly."
                cadence: rolling
              tasks:
                - "Write a reset script that recreates the cluster and practice namespaces"
                - "Add the ingress controller and network plugin to the script"
                - "Run the reset script before the week's labs @recurring(weekly:wed)"
            - name: Monthly curriculum and Kubernetes version check
              description: |-
                ## Purpose
                Kubernetes releases move the CKAD to newer versions over time, and the curriculum is revised every so often, which can change API versions, defaults and the topics in scope. A monthly look at the official curriculum and exam page catches a change before you spend weeks on something that has gone.

                ## Milestones
                1. The curriculum repository and exam page saved where you can find them in one click.
                2. A monthly check done and the date noted on the curriculum map.
                3. Any change in Kubernetes version or competencies reflected on the map and the calendar.
                4. Your practice cluster upgraded when the exam version moves.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The curriculum map shows a check date within the last month, and any version change is matched in the practice cluster."
                cadence: rolling
              tasks:
                - "Save the curriculum repository and exam page links together"
                - "Check the curriculum and exam Kubernetes version for changes @recurring(monthly:3)"
                - "Update the practice cluster if the exam version has moved"
            - name: Flashcards for field paths and resource short names
              description: |-
                ## Purpose
                Many slow moments come from not remembering where a field lives: is it spec.template.spec.containers, or does the securityContext go at pod or container level? A small deck of field paths, short names and API groups, reviewed for five minutes a day, removes trips to the documentation.

                ## Milestones
                1. A deck of at least sixty cards on field paths, short names and API groups.
                2. Cards added from the mistake log each week.
                3. A short daily review completed most days.
                4. The cards you keep missing turned into drill tasks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deck of at least sixty field-path cards exists and is reviewed on most days for four weeks."
                cadence: rolling
              tasks:
                - "Write sixty cards on field paths, short names and API groups"
                - "Review the day's due flashcards for five minutes @recurring(daily)"
                - "Add a card for each field path you looked up this week"
            - name: Building and saving container images
              description: |-
                ## Purpose
                Container images sit at the start of the curriculum: you are expected to define, build and modify them, and exam tasks have asked candidates to build from a Dockerfile and export the image to a file. Practising with docker or podman, tags and saving to an archive means a task that looks unfamiliar takes three minutes instead of fifteen.

                ## Milestones
                1. A small application image built from a Dockerfile you wrote.
                2. The same image tagged, rebuilt with a change and run locally.
                3. An image saved to a tar archive and loaded back, with both docker and podman.
                4. The image loaded into the local cluster and used in a Pod.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An image is built, tagged, saved to an archive, reloaded and run in a Pod on the local cluster, with the commands written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a Dockerfile for a tiny web application"
                - "Build, tag and run the image with docker or podman"
                - "Save the image to a tar archive and load it back"
                - "Load the image into the local cluster and run it in a Pod"
            - name: Jobs and CronJobs with completions and backoff
              description: |-
                ## Purpose
                Batch workloads are a favourite exam task because a small mistake, the wrong restart policy or a missing schedule field, leaves a Job that never completes. Learning completions, parallelism, backoff limits, deadlines and CronJob history limits with real runs makes these tasks quick marks.

                ## Milestones
                1. A Job created imperatively and edited to run five completions with two in parallel.
                2. A failing Job used to see backoffLimit and activeDeadlineSeconds in action.
                3. A CronJob created with a schedule and history limits, and a manual run triggered from it.
                4. The restart policies allowed for Jobs written in your notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A parallel Job, a deliberately failing Job and a CronJob with history limits have each been built and observed, with notes written."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a Job imperatively and set completions and parallelism"
                - "Break a Job on purpose and watch the backoff limit stop it"
                - "Create a CronJob with history limits and trigger a manual run"
                - "Write the allowed restart policies for Jobs in your notes"
            - name: Multi-container pods with init and sidecar containers
              description: |-
                ## Purpose
                Pods with more than one container come up often in CKAD tasks: an init container that waits for a dependency, a sidecar that ships logs, an adapter that reshapes output. Building each pattern with a shared volume shows how the containers start, share data and fail.

                ## Milestones
                1. A Pod with an init container that blocks until a Service resolves.
                2. A sidecar that reads a shared emptyDir log file written by the main container.
                3. The newer native sidecar pattern tried if the exam's Kubernetes version supports it.
                4. Logs pulled from a named container in a multi-container Pod.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An init container, a log sidecar and an adapter have each been built and their behaviour noted on the practice cluster."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a Pod whose init container waits for a Service to resolve"
                - "Add a sidecar that tails a shared emptyDir log file"
                - "Fetch logs from one named container in the Pod"
                - "Check whether native sidecars apply to the exam's Kubernetes version"
            - name: Volumes, PersistentVolumeClaims and mounts
              description: |-
                ## Purpose
                Storage tasks on the CKAD are about using storage from an application, not running it: an emptyDir shared between containers, a PersistentVolumeClaim bound and mounted, a ConfigMap mounted as files. Practising the YAML until the volume and volumeMount names line up without thinking saves a common failure.

                ## Milestones
                1. An emptyDir shared between two containers and the data seen from both.
                2. A PersistentVolumeClaim created, bound and mounted at a chosen path.
                3. A subPath mount used to place a single file.
                4. The difference between volume and volumeMount written in two lines.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An emptyDir, a bound PVC and a subPath mount have each been used by a Pod, with a two-line note on volume versus volumeMount."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Share an emptyDir between two containers and read from both"
                - "Create a PersistentVolumeClaim and mount it in a Pod"
                - "Mount a single file with subPath"
                - "Bookmark the PVC example page you will copy from in the exam"
            - name: Deployments, rolling updates and rollbacks
              description: |-
                ## Purpose
                Deployment tasks look easy but the marks hinge on details: maxSurge and maxUnavailable, recording a change, rolling back to a specific revision. Practising the full cycle until it takes under three minutes turns one of the largest domains into reliable points.

                ## Milestones
                1. A Deployment scaled, updated to a new image and rolled back to a named revision.
                2. maxSurge and maxUnavailable set and their effect watched during a rollout.
                3. Rollout status, history and pause and resume used in one session.
                4. The full update and rollback cycle done in under three minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Deployment update and rollback to a named revision is completed in under three minutes, timed and logged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a Deployment and update its image with kubectl set image"
                - "Set maxSurge and maxUnavailable and watch a rollout"
                - "Roll back to a named revision from the rollout history"
                - "Run one timed update and rollback drill @recurring(weekly:thu)"
            - name: Blue-green and canary releases with labels
              description: |-
                ## Purpose
                Deployment strategies such as blue-green and canary are in the curriculum, built from Kubernetes primitives without a service mesh. Doing both with two Deployments, careful labels and a Service selector shows how traffic shifts and why a mistyped label sends all traffic to the wrong version.

                ## Milestones
                1. A blue-green switch made by changing a Service selector from one Deployment to another.
                2. A canary built with replica counts that send roughly a fifth of traffic to the new version.
                3. Traffic share checked with repeated requests from a test Pod.
                4. The label scheme you will use in the exam written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A blue-green switch and a canary split have each been built and verified with test requests, with the label scheme recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create blue and green Deployments with distinct version labels"
                - "Switch a Service selector from blue to green and test it"
                - "Build a canary with replica counts and count responses"
                - "Write your standard label scheme for release tasks"
            - name: Helm charts for installing and upgrading apps
              description: |-
                ## Purpose
                Exam tasks have asked candidates to use Helm to deploy existing packages: add a repository, install a release with overridden values, upgrade it, find a release in another namespace. Practising the handful of Helm commands that matter beats reading about chart authoring you will not be asked for.

                ## Milestones
                1. A chart repository added and searched.
                2. A release installed with values overridden on the command line and from a file.
                3. A release upgraded, its history listed and rolled back.
                4. Releases listed across all namespaces and one uninstalled.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A Helm release is installed with overrides, upgraded, rolled back and found across namespaces, with the commands noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a public chart repository and search it"
                - "Install a release with values overridden from a file"
                - "Upgrade, list history and roll back the release"
                - "Repeat the full Helm cycle from memory @recurring(monthly:19)"
            - name: Kustomize overlays with apply -k
              description: |-
                ## Purpose
                Kustomize is built into kubectl and is a listed way to manage manifests, so a task may hand you a base and ask for an overlay. Building one base with a development and a production overlay teaches the kustomization file structure and how patches and name prefixes land.

                ## Milestones
                1. A base folder with a Deployment, a Service and a kustomization file.
                2. Two overlays that change replicas, image tag and a name prefix.
                3. Output previewed with kubectl kustomize before applying.
                4. One overlay applied with apply -k and checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A base and two overlays render different replicas and image tags, and one overlay is applied with apply -k."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a base with a Deployment, a Service and a kustomization file"
                - "Write development and production overlays with different replicas"
                - "Preview each overlay with kubectl kustomize"
                - "Apply one overlay with apply -k and check the result"
            - name: Liveness, readiness and startup probes
              description: |-
                ## Purpose
                Probes are among the most reliable CKAD marks once learned, and among the most common silent failures if the port or path is wrong. Building HTTP, TCP and command probes, then breaking each, shows the difference between a container that restarts and one that just stops getting traffic.

                ## Milestones
                1. An HTTP readiness probe and an exec liveness probe added to the same container.
                2. A startup probe used to protect a slow-starting container.
                3. Each probe broken on purpose and the effect seen in events and endpoints.
                4. The probe timing fields written with one line each on what they do.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "HTTP, exec and startup probes have each been built and broken, with the observed effect on restarts and endpoints noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add an HTTP readiness probe and an exec liveness probe to a container"
                - "Protect a slow-starting container with a startup probe"
                - "Break each probe and check events and Service endpoints"
                - "Write a one-line note on each probe timing field"
            - name: Debugging failing pods at the terminal
              description: |-
                ## Purpose
                A large part of real CKAD work is finding why a Pod will not start: a bad image name, a missing ConfigMap, a crashing command, a failing probe. Working through broken Pods with describe, events, logs including previous containers, exec and kubectl top builds a fixed order of checks that is fast under pressure.

                ## Milestones
                1. A written order of checks from get and describe through events, logs and exec.
                2. Ten deliberately broken Pods fixed, each with its cause noted.
                3. Logs from a previous crashed container read with the previous flag.
                4. Resource use checked with kubectl top once a metrics server is installed.

                ## Notes
                Keep the line between this and cluster troubleshooting clear: node, kubelet and control plane faults belong to the CKA, not here.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Ten broken Pods have been diagnosed and fixed using a written order of checks, with the cause of each recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write your order of checks for a Pod that will not run"
                - "Ask the agent to write ten broken Pod manifests with hidden faults"
                - "Read logs from a crashed container with the previous flag"
                - "Break and fix one Pod against a five-minute timer @recurring(weekly:fri)"
            - name: API versions, deprecations and kubectl explain
              description: |-
                ## Purpose
                Older manifests in a task may use an API version that no longer exists on the exam cluster, and the curriculum asks you to understand deprecations. Learning to check api-resources, api-versions and explain, and to update a manifest to a current version, turns an error message into a two-minute fix.

                ## Milestones
                1. kubectl api-resources and api-versions used to find a resource's current group and version.
                2. An old manifest with a removed API version updated so it applies.
                3. The official deprecation guide page located through the docs search.
                4. Three resources whose API version changed in recent years noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An outdated manifest has been updated to a current API version and applied, with the lookup commands noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List api-resources and find the group and version for Ingress"
                - "Fix an old manifest that uses a removed API version"
                - "Find the deprecation guide page through the docs search"
                - "Note three resources whose API version has changed"
            - name: ConfigMaps and Secrets as variables and files
              description: |-
                ## Purpose
                Configuration is part of the heaviest domain, and tasks ask for every way of getting it into a container: single keys as variables, a whole ConfigMap with envFrom, a Secret mounted as files. Practising each form, and checking the result from inside the container, avoids a typo in a key name that costs the whole task.

                ## Milestones
                1. A ConfigMap created from literals and from a file.
                2. One key injected as an environment variable and the whole map with envFrom.
                3. A Secret mounted as files and read from inside the container.
                4. The base64 encoding of Secrets explained in one sentence, including why it is not encryption.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "ConfigMaps and Secrets have been consumed as single variables, envFrom and mounted files, each checked from inside a container."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a ConfigMap from literals and another from a file"
                - "Inject one key as a variable and the whole map with envFrom"
                - "Mount a Secret as files and read them with exec"
                - "Write one sentence on why base64 is not encryption"
            - name: Requests, limits, LimitRanges and ResourceQuotas
              description: |-
                ## Purpose
                A Pod that will not schedule because a namespace quota needs requests set is a classic exam trap. Setting requests and limits, then adding a LimitRange and a ResourceQuota to a namespace and watching what gets rejected, makes the rules concrete.

                ## Milestones
                1. Requests and limits set on a container and seen in describe output.
                2. A ResourceQuota added to a namespace and a Pod without requests rejected.
                3. A LimitRange added that supplies defaults so the Pod is admitted.
                4. The error messages from each rejection copied into your notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A ResourceQuota has rejected a Pod and a LimitRange has fixed it, with both error messages recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set requests and limits on a container and check describe output"
                - "Add a ResourceQuota and watch a Pod without requests fail"
                - "Add a LimitRange that supplies default requests"
                - "Copy each rejection message into your notes"
            - name: SecurityContext, users and capabilities
              description: |-
                ## Purpose
                Security contexts appear in many CKAD tasks and the placement trips people up: runAsUser at pod level, capabilities only at container level. Building a Pod that runs as a non-root user, with a read-only root filesystem and a dropped capability, and checking each with exec, fixes the placement in memory.

                ## Milestones
                1. A Pod running as a chosen user and group, confirmed with the id command.
                2. A container with a read-only root filesystem and a writable emptyDir for temporary files.
                3. A capability added and another dropped at container level.
                4. A table of which securityContext fields live at pod level, container level or both.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A non-root Pod with a read-only root filesystem and adjusted capabilities runs, and a pod versus container field table is written."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Run a Pod as a set user and group and check with id"
                - "Make the root filesystem read-only and mount a writable emptyDir"
                - "Add one capability and drop another at container level"
                - "Write a table of pod-level and container-level fields"
            - name: ServiceAccounts and RBAC from the developer side
              description: |-
                ## Purpose
                Developers are asked to run an application under its own ServiceAccount and give it just enough access, not to design cluster-wide security. Creating a ServiceAccount, a Role and a RoleBinding, then testing with auth can-i, covers the tasks in this domain without straying into administration.

                ## Milestones
                1. A ServiceAccount created and assigned to a Deployment.
                2. A Role and RoleBinding granting read access to Pods in one namespace.
                3. Access tested with kubectl auth can-i as the ServiceAccount.
                4. Automatic token mounting turned off for a Pod that does not need it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Deployment runs under its own ServiceAccount with a namespaced Role, verified with auth can-i."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create a ServiceAccount and assign it to a Deployment"
                - "Grant read access to Pods with a Role and RoleBinding"
                - "Test the access with kubectl auth can-i as the ServiceAccount"
                - "Turn off automatic token mounting on one Pod"
            - name: Custom resources and operators as a user
              description: |-
                ## Purpose
                Extending Kubernetes appears in the curriculum as discovering and using resources someone else installed, a CRD and perhaps an operator, not writing a controller. Installing a small CRD, listing it with api-resources and creating an instance teaches the discovery steps a task will expect.

                ## Milestones
                1. A sample CustomResourceDefinition applied to the practice cluster.
                2. The new resource found with api-resources and described with explain.
                3. An instance of the custom resource created, listed and edited.
                4. A one-paragraph note on what an operator adds on top of a CRD.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A CRD has been installed, discovered with api-resources and explain, and an instance created and edited."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Apply the sample CRD from the Kubernetes documentation"
                - "Find the new resource with api-resources and explain"
                - "Create, list and edit an instance of the custom resource"
                - "Write a short note on what an operator adds to a CRD"
            - name: Services, ports and DNS names
              description: |-
                ## Purpose
                Selector or targetPort mismatches between a Service and its Pods are one of the most common reasons a CKAD task fails silently. Exposing Deployments as ClusterIP and NodePort Services, then testing them by DNS name from a temporary Pod in another namespace, builds the habit of checking endpoints every time.

                ## Milestones
                1. A Deployment exposed as ClusterIP and NodePort with kubectl expose.
                2. Endpoints checked and a selector mismatch fixed on purpose.
                3. The Service reached by its short and fully qualified DNS name from another namespace.
                4. A one-line temporary test Pod command memorised for curl checks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "ClusterIP and NodePort Services have been reached by DNS from another namespace, and a selector mismatch has been diagnosed through endpoints."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Expose a Deployment as ClusterIP and as NodePort"
                - "Break the selector and find the fault through endpoints"
                - "Reach the Service by full DNS name from another namespace"
                - "Memorise a one-line temporary Pod for curl tests"
            - name: Ingress rules for hosts and paths
              description: |-
                ## Purpose
                Ingress tasks reward exact YAML: the right pathType, the right backend Service name and port, the right host. Writing Ingress resources with path and host rules against a real controller, and testing each with a request, avoids an Ingress that applies cleanly but routes nowhere.

                ## Milestones
                1. An Ingress created imperatively with kubectl create ingress.
                2. Two paths routed to two Services and tested with requests.
                3. A host-based rule added and tested with a Host header.
                4. The pathType values and what each matches written in your notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An Ingress routes two paths and one host to the right Services, each verified with a test request."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create an Ingress imperatively with kubectl create ingress"
                - "Route two paths to two Services and test each one"
                - "Add a host rule and test it with a Host header"
                - "Write what each pathType value matches"
            - name: NetworkPolicies from default deny upward
              description: |-
                ## Purpose
                NetworkPolicies are where many candidates lose time, because there is no generator and a policy that looks right can block DNS or allow everything. Starting from a default deny, then opening exactly the traffic a task describes by pod and namespace labels, and testing each step, builds a method that holds under pressure.

                ## Milestones
                1. A default deny ingress and egress policy applied to a namespace.
                2. Egress to DNS reopened so name lookups still work.
                3. Traffic allowed from one labelled Pod and one labelled namespace, tested both ways.
                4. The difference between one rule with two selectors and two separate rules written down.

                ## Notes
                Confirm your practice cluster's network plugin enforces policies before trusting any result.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A namespace runs under default deny with DNS and two named sources allowed, each tested, and the selector combination rule written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Apply a default deny policy to a practice namespace"
                - "Reopen DNS egress and test a name lookup"
                - "Allow traffic from one labelled Pod and one labelled namespace"
                - "Write and test one new NetworkPolicy scenario @recurring(weekly:tue)"
            - name: Exam time strategy and question triage
              description: |-
                ## Purpose
                Marks on the CKAD are given per task, and tasks vary in weight and difficulty, so time spent stuck on one is taken from others. A written strategy, read the whole task, switch context first, a time budget per task, flag and move on, practised in every mock, keeps panic from deciding the result.

                ## Milestones
                1. A written per-task routine starting with the context switch command given in the task.
                2. A rule for when to flag and skip a task.
                3. The strategy used in two full mocks and adjusted.
                4. A plan for the last fifteen minutes written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page exam strategy exists and has been used and revised after at least two full mocks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a per-task routine that starts with switching context"
                - "Set a rule for when to flag a task and move on"
                - "Use the routine in the next full mock"
                - "Revise the strategy based on the mock's timing"
            - name: Closing your slowest domain after the first mock
              description: |-
                ## Purpose
                After the first full mock most candidates find one domain carrying most of the lost marks, often networking or security. Giving that domain two focused weeks, with fresh tasks and a re-test, usually moves the overall score more than more general practice.

                ## Milestones
                1. The domain with the most lost marks named from the first mock.
                2. Two weeks of sessions planned on that domain alone.
                3. Fifteen new tasks in that domain completed.
                4. A re-test of the domain scored and compared with the mock.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The weakest domain's score in a re-test is higher than in the first mock, with both recorded in the tracker."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Name the domain that lost the most marks in your first mock"
                - "Plan two weeks of sessions on that domain only"
                - "Complete fifteen new tasks in the domain"
                - "Re-test the domain and record the score"
            - name: CKAD or CKA first, and in what order
              description: |-
                ## Purpose
                Many developers wonder whether to take the CKAD, the CKA or both, and the answer depends on whether your job is shipping applications or running clusters. Writing down what your role needs, what your employer values and how the two curricula overlap gives a decision you can stop revisiting.

                ## Milestones
                1. Both current curricula compared and the overlap marked.
                2. Your role's daily Kubernetes work written in five lines.
                3. Your manager or a senior colleague asked which credential the team values.
                4. A decision recorded on order, with the reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on CKAD and CKA order exists, with the curriculum overlap and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay the current CKAD and CKA curricula side by side"
                - "Describe your daily Kubernetes work in five lines"
                - "Ask your manager which credential the team values more"
                - "Record the order you chose and why"
            - name: Readiness decision to book, hold or postpone
              description: |-
                ## Purpose
                Booking too early wastes an attempt, and waiting for perfect confidence wastes months. A dated decision made against your own rule, for example two full mocks above the pass mark with time to spare, takes emotion out of the call.

                ## Milestones
                1. A readiness rule written before the first full mock.
                2. The last two mocks and the weakest domain checked against the rule.
                3. A decision recorded: book, hold for two weeks or postpone.
                4. If postponing, a new target week set in the calendar.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated readiness decision is recorded against a rule written in advance, with the evidence used."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule before the first full mock"
                - "Check the last two mock scores against the rule"
                - "Record whether you will book, hold or postpone"
            - name: Booking the exam inside the voucher window
              description: |-
                ## Purpose
                CKAD vouchers have a validity period and exam slots at convenient times can fill up, so leaving booking to the last week causes needless stress. Booking a slot at a time of day you are sharp, with a buffer before the voucher runs out, fixes the end point of the plan.

                ## Milestones
                1. The voucher's expiry date and the retake rules confirmed in your account.
                2. A slot booked at a time of day you are usually most alert.
                3. The confirmation saved and the slot added to your calendar.
                4. A fallback date noted in case the first attempt needs a retake.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam slot is booked before the voucher expires, with the confirmation saved and a fallback retake date noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the voucher expiry and retake rules in your exam account"
                - "Book a slot at the time of day you are sharpest"
                - "Save the confirmation and add the slot to your calendar"
                - "Note a fallback retake date inside the voucher window"
            - name: Final fortnight with the included simulator sessions
              description: |-
                ## Purpose
                The last two weeks are for rehearsal, not new topics. Using the simulator sessions included with registration, redoing every missed task and practising the exact environment, a remote desktop with a terminal and one browser, settles nerves and catches any last gap.

                ## Milestones
                1. The first included simulator session taken about two weeks out and reviewed.
                2. Every missed simulator task redone from scratch.
                3. The second session taken in the final week.
                4. No new topics started in the final three days.
              priority: medium
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both included simulator sessions are taken and reviewed in the last fortnight, with every missed task redone."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Activate the first included simulator session two weeks before the exam"
                - "Redo each missed simulator task from a blank terminal"
                - "Take the second simulator session in the final week"
                - "Spend the last three days on the mistake log only"
            - name: Exam day check-in and workspace
              description: |-
                ## Purpose
                Online check-in can take a while and the proctor may ask to see the whole room, so a rushed start eats into focus. A written plan for the day, the desk cleared the night before, the system check rerun, ID ready and food and water sorted, means the first task starts calm.

                ## Milestones
                1. The desk and room cleared to the rules the night before.
                2. The system check rerun on the day and the computer restarted.
                3. ID and a clear water container ready, if allowed under the current rules.
                4. Check-in started at the earliest time the rules allow.
              priority: high
              deadlineOffsetDays: 115
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is started on time from a workspace that passed the proctor's check on the first attempt."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Clear the desk and room to the exam rules the night before"
                - "Rerun the system check on the morning of the exam"
                - "Put your ID within reach before starting check-in"
                - "Start check-in at the earliest time the rules allow"
            - name: Results, certificate and retake plan
              description: |-
                ## Purpose
                Results usually arrive by email within a day or two, and what you do next depends on the outcome. A pass means saving the certificate, adding the badge and noting the expiry date; a fail means using the retake while the practice is fresh rather than letting it lapse.

                ## Milestones
                1. The result received and the score report saved.
                2. On a pass, the certificate saved, the badge claimed and the expiry date recorded.
                3. On a fail, the weakest domains listed from memory the same day.
                4. On a fail, a retake booked within the voucher window with a four-week plan.

                ## Notes
                Write down everything that felt hard the same evening, before the memory fades. It is the best retake guide you will get.
              priority: medium
              deadlineOffsetDays: 130
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The result is recorded, and either the certificate and expiry date are saved or a retake is booked with a written plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every task that felt hard on the evening of the exam"
                - "Save the score report when it arrives"
                - "Claim the badge and record the certificate expiry date"
                - "Book the retake and a four-week plan if the result was a fail"
            - name: CKAD for a backend developer new to containers
              description: |-
                ## Purpose
                Developers who have deployed through a platform team or a managed service often know their language well but have never written a Dockerfile or read a Pod spec. A four-week container foundation before the CKAD plan, images, processes, ports, environment variables and logs, makes the Kubernetes material land far faster.

                ## Milestones
                1. Your own service containerised with a Dockerfile and run locally.
                2. Ports, environment variables and volumes used with plain containers first.
                3. The same service run as a Pod and then a Deployment.
                4. The main CKAD calendar started only after the service runs in the cluster.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A service you wrote runs as a container and then as a Deployment on the practice cluster before the main CKAD plan begins."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a Dockerfile for a service you already maintain"
                - "Run it locally with ports and environment variables set"
                - "Deploy the same service as a Pod and then a Deployment"
                - "Start the main CKAD calendar once the service runs in the cluster"
            - name: Studying in short sessions as a working parent
              description: |-
                ## Purpose
                Parents with young children rarely get a free two-hour block, but the CKAD rewards frequent short practice more than long weekend sessions. A plan built from twenty-minute drills on weekday evenings and one longer session when childcare allows can carry a parent to the exam in a few months.

                ## Milestones
                1. The week's realistic study windows written down with your partner or family.
                2. A set of twenty-minute session plans, one per domain.
                3. One longer session a fortnight agreed for full mocks.
                4. A target exam week set that allows for school holidays and illness.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly plan of short sessions and a fortnightly long session is followed for six weeks, logged in the tracker."
                cadence: rolling
              tasks:
                - "List the realistic study windows in an ordinary week"
                - "Write one twenty-minute session plan for each domain"
                - "Agree a fortnightly long session for mocks with your household"
                - "Plan the week's study windows around family plans @recurring(weekly:mon)"
            - name: Sitting the CKAD in a second language
              description: |-
                ## Purpose
                CKAD tasks are short but precise, and a misread word such as all, only or every can cost a whole task. Candidates working in a second language gain from practising task reading on its own and checking what language support the exam currently offers.

                ## Milestones
                1. The languages the exam is currently offered in checked on the official page.
                2. A list of the instruction words that change a task's meaning, with translations.
                3. Task statements practised by underlining the key requirement before typing.
                4. Mock tasks lost to misreading tracked and falling.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of task instruction words exists and tasks lost to misreading fall across three consecutive mocks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check which languages the CKAD is currently offered in"
                - "List twenty instruction words that change a task's meaning"
                - "Read five task statements and underline each requirement @recurring(weekly:sat)"
                - "Count tasks lost to misreading in each mock"
            - name: Running a CKAD study group for your team
              description: |-
                ## Purpose
                Teams that study together finish more often and leave with shared habits for manifests and reviews. Four to six developers meeting weekly, each taking a domain in turn and running a timed task for the others, spreads the preparation and the motivation.

                ## Milestones
                1. Four to six colleagues signed up with a shared target month.
                2. A weekly meeting slot booked and a domain rota agreed.
                3. Each member runs at least one timed task session for the group.
                4. The group's pass and retake results recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A team study group meets weekly for at least eight weeks, with each member leading one session and results recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Invite colleagues who want the CKAD within the next six months"
                - "Book a weekly slot and agree a domain rota"
                - "Run the week's timed task for the group @recurring(weekly:thu)"
                - "Record each member's exam result and retake plans"
            - name: Deploying a real side project to a cluster
              description: |-
                ## Purpose
                Exam tasks are small, but the skills only stick when they meet a real application with a database, configuration and traffic. Running one of your own projects on a small cluster, with probes, a ConfigMap, a Secret, an Ingress and a NetworkPolicy, connects every domain and gives you something to show an interviewer.

                ## Milestones
                1. A side project with at least two services running on a cluster.
                2. Probes, resource limits and a non-root security context on every container.
                3. Configuration in ConfigMaps and Secrets, and traffic through an Ingress.
                4. A short readme describing the manifests and the choices made.

                ## Notes
                A managed cluster costs money while it runs. Set a billing alert and tear it down when you are not using it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-service side project runs on a cluster with probes, limits, ConfigMaps, Secrets and an Ingress, documented in a readme."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a side project with at least two services"
                - "Write manifests with probes, limits and a security context"
                - "Add an Ingress and a NetworkPolicy and test them"
                - "Upgrade one service with a rolling update and record the steps @recurring(monthly:8)"
            - name: Choosing the next step after the CKAD
              description: |-
                ## Purpose
                Passing the CKAD opens several directions: the CKS security exam, the CKA for cluster operation, or deeper work in a platform team. Choosing deliberately, using the credential's expiry date and your next role, keeps momentum without starting an exam you do not need.

                ## Milestones
                1. The CKAD expiry date and the CKS prerequisites checked.
                2. Two or three next options written with what each would add to your work.
                3. A conversation held with your manager or a mentor about the options.
                4. A choice recorded, including the choice to stop here for now.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of next step after the CKAD exists, with the CKAD expiry date and the reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record your CKAD expiry date and check the CKS prerequisites"
                - "List two or three next options and what each would add"
                - "Talk the options through with your manager or a mentor"
                - "Record the next step you chose and why"
---

# CKAD Kubernetes Developer

This area is for developers who ship applications onto Kubernetes, or are about to, and want the CKAD to prove they can do it at a terminal against the clock. It starts with foundations (the curriculum map, a cold baseline, a practice cluster, shell set-up, imperative YAML scaffolding and the exam rules), then the practice machinery, hands-on labs across the application domains from images, Jobs and multi-container pods through deployments, Helm, probes, configuration, security and networking, the decisions about weak domains and readiness, booking and exam day, plans for backend developers, parents, second-language candidates and study groups, and specialist work after the pass.

The rhythm is a short daily kubectl drill and flashcard pass, a weekly timed task set, mistake review, cluster reset and rotating domain drills, a full mock exam twice a month, a monthly score update and a monthly check of the curriculum and Kubernetes version. The Purchase decision, Habit tracker and Metrics log templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
