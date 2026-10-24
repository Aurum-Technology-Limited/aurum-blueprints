---
id: software-engineering.containers-kubernetes
name: Containers & Kubernetes
description: "Lean, reproducible images, a registry with rules, clusters laid out and upgraded on schedule, requests, probes, secrets and policies set properly, and the habits that keep workloads healthy."
category: business
version: 1.0.0
tags: [software-engineering, containers-kubernetes, engineer, team, docker, kubernetes, helm, cluster-operations]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - course
    - metrics-log
    - skills-matrix
    - remediation-plan
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Containers & Kubernetes
          description: "Packaging applications in containers and running them on orchestration platforms, including scaling, configuration, secrets and cluster upkeep."
          projects:
            - name: Inventory of containerised workloads and clusters
              description: |-
                ## Purpose
                Most teams cannot say on demand how many clusters they run, which Kubernetes version each is on, or which images in production were built from a Dockerfile nobody has opened in two years. A single inventory of clusters, namespaces, workloads and their image sources turns guesswork into a list you can prioritise from.

                ## Milestones
                1. Every cluster listed with its provider, region, Kubernetes version and the date that version reaches end of support.
                2. Every production workload listed with its namespace, owning team, image repository and current tag or digest.
                3. Workloads running images from public registries or with the latest tag flagged.
                4. The five most worrying findings written at the top as candidate next projects.

                ## Notes
                Pull the data from the clusters themselves rather than from documentation. What is running is the truth; the wiki is a memory of intentions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared inventory lists every cluster with its version and support end date, and every production workload with its owner and image source."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every cluster and kubeconfig context you can reach in a shared sheet"
                - "Export deployments, statefulsets and daemonsets with their images from each cluster"
                - "Look up the end of support date for each cluster's Kubernetes version"
                - "Mark workloads using public images or the latest tag"
                - "Write the five most worrying findings at the top of the sheet"
            - name: Decision on whether Kubernetes is worth running
              description: |-
                ## Purpose
                Kubernetes solves scheduling, self-healing and multi-service networking at the price of a steep learning curve and a standing upgrade burden. For three services and a database, a managed container service or a couple of virtual machines running Compose is often cheaper in hours and money. Writing the decision down, with the trade-offs, saves a year of running a platform that nobody needed.

                ## Milestones
                1. The current and expected number of services, environments and engineers written down.
                2. Three options compared: a managed container service, a managed Kubernetes cluster and plain virtual machines with Compose.
                3. Each option scored on running cost, upgrade effort, team skills and what happens at three times today's scale.
                4. A recorded decision with the conditions that would make you revisit it.

                ## Notes
                Choosing not to adopt Kubernetes yet is a valid result. Record the trigger, such as a tenth service or a second region, that would reopen the question.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision compares three hosting options on cost, effort and skills, names the choice and lists the triggers for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count your services, environments and the engineers who will operate them"
                - "Estimate monthly running cost for each of the three hosting options"
                - "Ask each engineer how confident they are operating a cluster unaided"
                - "Write the decision and the triggers that would reopen it"
            - name: Production Dockerfile for the main service
              description: |-
                ## Purpose
                Tutorial Dockerfiles usually run as root, ship the compiler and test fixtures to production and rebuild every dependency on any code change. Rewriting the main service's Dockerfile as a multi-stage build with a pinned base image, a non-root user and a sensible layer order makes images smaller, faster to build and safer to run.

                ## Milestones
                1. A multi-stage Dockerfile where the final stage contains only the runtime and the built application.
                2. The base image pinned by version and digest, not by a floating tag.
                3. The container running as a named non-root user with a read-only root filesystem where the service allows it.
                4. Dependency installation placed before source copying so code changes reuse cached layers.
                5. A .dockerignore that keeps secrets, git history and local build output out of the build context.

                ## Notes
                Measure before and after: image size, cold build time and rebuild time after a one-line change. Those three numbers make the case for doing the same to every other service.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main service builds from a multi-stage Dockerfile with a pinned base, a non-root user and a .dockerignore, with before and after size and build times recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the current image size and cold and warm build times"
                - "Split the Dockerfile into a build stage and a minimal runtime stage"
                - "Pin the base image by version and digest"
                - "Add a non-root user and set it with the USER instruction"
                - "Write a .dockerignore covering secrets, git history and build output"
            - name: Approved base image standard
              description: |-
                ## Purpose
                When every team picks its own base image, you end up patching twelve operating system variants and debugging the same locale bug in four of them. A short list of approved base images per language, with a named owner and an update rule, cuts the patching surface and makes image behaviour predictable across services.

                ## Milestones
                1. The base images in use today counted, grouped by language and distribution.
                2. One or two approved bases per language chosen, such as a slim distribution image and a distroless runtime.
                3. A written rule for how often approved bases are refreshed and who owns that.
                4. The standard published where engineers look when they start a new service.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published base image standard names approved images per language, their owner and refresh rule, and covers every language in production."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Extract the FROM lines from every Dockerfile in your repositories"
                - "Group the base images by language and distribution and count each"
                - "Choose the approved bases with the engineers who maintain each language"
                - "Publish the standard with its owner and refresh rule"
                - "Review the approved base image list with the language owners @recurring(yearly)"
            - name: Container registry with access and retention rules
              description: |-
                ## Purpose
                Left open to every pusher and never pruned, a registry becomes slow, expensive and a place where an old vulnerable image can still be pulled into production. Setting up repositories per service, push rights limited to the build pipeline and a retention policy makes the registry something you can trust.

                ## Milestones
                1. One private registry chosen, with a repository per service or per team.
                2. Push rights limited to the build pipeline's identity and pull rights granted to the clusters.
                3. A retention policy that keeps release images and removes untagged and old branch images.
                4. Tag immutability switched on for release tags where the registry supports it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Production images live in a private registry where only the pipeline can push, release tags are immutable and a retention policy is active."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List who and what can currently push to your registry"
                - "Restrict push rights to the build pipeline's service identity"
                - "Write and enable a retention policy for untagged and branch images"
                - "Turn on tag immutability for release repositories"
                - "Review registry push and pull permissions against the team list @recurring(yearly)"
            - name: Image tagging and digest convention
              description: |-
                ## Purpose
                Deploying the latest tag means two pods in the same deployment can run different code, and a rollback might pull the image you were trying to escape. Agreeing that every image is tagged with the commit and release version, and that clusters deploy by digest, makes every running container traceable to exactly one build.

                ## Milestones
                1. A written tag scheme, such as the release version plus the short commit hash.
                2. The build pipeline producing tags in that scheme and recording the resulting digest.
                3. Production manifests referencing images by digest or by an immutable release tag.
                4. The latest tag removed from every production manifest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No production manifest uses the latest tag, and every running image maps to one commit through its tag or digest."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search production manifests for images using the latest tag"
                - "Write the tag scheme in one paragraph and agree it with the team"
                - "Change the pipeline to tag images with version and commit hash"
                - "Replace floating tags in production manifests with immutable references"
            - name: Local development with Compose that mirrors production
              description: |-
                ## Purpose
                If local development runs on a laptop install of the database and production runs a different major version in a container, the first sign of trouble is in production. A Compose file that starts the service with the same images, versions and environment variable names as the cluster closes most of that gap for a fraction of the cost of a local cluster.

                ## Milestones
                1. A Compose file that starts the service and its backing services with one command.
                2. Backing service images pinned to the same major and minor versions as production.
                3. Environment variable names matching the cluster's ConfigMaps, with local values in an untracked file.
                4. A new engineer able to run the service from a clean checkout in under 30 minutes.

                ## Notes
                Keep real credentials out of the Compose file. Commit an example environment file with placeholder values and ignore the real one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clean checkout starts the full service locally with one Compose command, using backing service versions that match production."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the backing services and versions the service uses in production"
                - "Write a Compose file with those images pinned to matching versions"
                - "Align environment variable names with the cluster ConfigMaps"
                - "Ask someone new to the repo to time a start from a clean checkout"
            - name: Namespace layout and naming conventions
              description: |-
                ## Purpose
                Namespaces are where quotas, network policies, role bindings and cost reports attach, so a layout chosen by accident makes every later control harder. Deciding up front whether namespaces map to teams, services or environments, and how labels are named, gives the cluster a structure that policy and tooling can rely on.

                ## Milestones
                1. A decision on what a namespace represents, recorded with the reasons.
                2. A required label set agreed, such as team, service, environment and cost centre.
                3. Existing workloads mapped to the new layout with a list of moves needed.
                4. The convention published and new namespaces created only through it.

                ## Notes
                Separate clusters for production and non-production are usually safer than separating them by namespace. Namespaces are a soft boundary, not a security wall.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published namespace and label convention exists, and every production workload carries the required labels."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List current namespaces with what each actually contains"
                - "Decide whether a namespace maps to a team, a service or an environment"
                - "Agree the required labels and write them in the convention"
                - "Add the missing labels to production workloads"
            - name: Least-privilege cluster access for engineers
              description: |-
                ## Purpose
                Passing a shared admin kubeconfig around in a chat message means anyone can delete production and nobody can tell who did. Moving engineers to single sign-on identities mapped to role bindings, with read access by default and write access by namespace, makes access auditable and mistakes smaller.

                ## Milestones
                1. Every way into each cluster listed, including static tokens and shared admin credentials.
                2. Engineers authenticating through the identity provider rather than shared kubeconfig files.
                3. A read-only role for most people and namespace-scoped write roles for owning teams.
                4. Cluster admin limited to a small named group, with shared admin credentials revoked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No shared admin kubeconfig remains in use, and every engineer reaches the cluster through a personal identity with a named role."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every credential that can reach each cluster today"
                - "Connect cluster authentication to your identity provider"
                - "Create read-only and namespace-scoped write roles and bind them to groups"
                - "Revoke shared admin credentials once everyone has moved"
                - "Review cluster role bindings against the current team list @recurring(quarterly)"
            - name: Cluster upgrade cadence and version tracking
              description: |-
                ## Purpose
                Kubernetes minor versions fall out of support roughly a year after release, and managed providers will eventually upgrade a cluster for you whether you are ready or not. A standing quarterly check of versions, deprecated APIs and add-on compatibility keeps upgrades small and planned instead of forced and frightening.

                ## Milestones
                1. Each cluster's control plane and node versions recorded alongside the provider's support dates.
                2. A scan for deprecated and removed APIs run against every cluster's manifests.
                3. An upgrade window booked for any cluster within six months of end of support.
                4. A repeatable upgrade checklist used for every upgrade, with lessons added afterwards.

                ## Notes
                Start from the **Operational checklist** template. Upgrade non-production first and let it soak for at least a week before production.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No cluster runs a Kubernetes version past its end of support, and every upgrade in the year followed the written checklist."
                cadence: cyclic
              tasks:
                - "Record control plane and node versions for each cluster with support dates"
                - "Run a deprecated API scan across all cluster manifests"
                - "Write the upgrade checklist from your last upgrade or the provider's guide"
                - "Check versions, support dates and deprecated APIs for every cluster @recurring(quarterly)"
            - name: Monthly base image refresh and rebuild
              description: |-
                ## Purpose
                An image built eight months ago carries eight months of unpatched operating system packages, even if the application code has not changed. Rebuilding every service image on a fixed monthly day against the refreshed approved bases, and redeploying, keeps patch age short without waiting for a feature release to trigger a build.

                ## Milestones
                1. Every service image tagged with its build date so its age is visible.
                2. A scheduled rebuild of all service images against the latest approved bases.
                3. Rebuilt images deployed to non-production automatically and promoted after checks pass.
                4. No production image older than 45 days, tracked month by month.

                ## Notes
                Start from the **Metrics log** template to record the oldest production image each month. A rising number is the early warning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six months running, no production image is older than 45 days, with the oldest image age logged each month."
                cadence: rolling
              tasks:
                - "Add a build date label to every service image"
                - "Schedule a monthly rebuild of all service images against the approved bases"
                - "Rebuild and redeploy every service image on refreshed bases @recurring(monthly:9)"
                - "Log the age of the oldest image in production @recurring(monthly:10)"
            - name: Resource requests and limits from real usage
              description: |-
                ## Purpose
                Requests copied from a sample manifest decide where pods are scheduled and how many nodes you pay for, while missing memory limits let one leaky pod evict its neighbours. Setting requests from observed usage, and reviewing them monthly, keeps nodes packed sensibly and stops both throttling and out-of-memory kills.

                ## Milestones
                1. Every production container listed with its CPU and memory requests and limits.
                2. Observed usage at the 95th percentile over two weeks set beside each request.
                3. Requests adjusted where usage is less than half or more than the request.
                4. Memory limits set on every container and CPU limits applied only where they are justified.

                ## Notes
                CPU limits cause throttling even when the node is idle. Many teams set CPU requests, memory requests and memory limits, and leave CPU limits off for latency-sensitive services.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production container has requests within a factor of two of its observed 95th percentile usage and a memory limit set."
                cadence: rolling
              tasks:
                - "Export requests and limits for every production container"
                - "Compare each with two weeks of observed CPU and memory usage"
                - "Adjust the five most oversized and five most undersized requests"
                - "Review requests against usage for the busiest namespaces @recurring(monthly:14)"
            - name: Node pool and capacity health check
              description: |-
                ## Purpose
                Clusters drift: a node pool sized for last year's traffic, nodes stuck on an old image, a pool of expensive machines running two tiny pods. A monthly look at node utilisation, pending pods and node image age catches capacity problems before the scheduler starts leaving pods in Pending at the worst moment.

                ## Milestones
                1. Every node pool listed with machine type, minimum and maximum size and current utilisation.
                2. Pods that sat in Pending in the past month counted with their reasons.
                3. Node image versions checked and pools on old images scheduled for rotation.
                4. Pools resized or consolidated where requested capacity is consistently below half.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's check records utilisation per pool, Pending pod counts and node image age, with any action taken noted."
                cadence: rolling
              tasks:
                - "List node pools with machine types, size bounds and requested utilisation"
                - "Find pods that went Pending last month and note why"
                - "Check node image versions and rotate pools on old images"
                - "Review node pool utilisation, Pending pods and node image age @recurring(monthly:21)"
            - name: Registry clean-up and storage hygiene
              description: |-
                ## Purpose
                Registries grow quietly by every branch build, and storage bills and listing times grow with them. A monthly clean-up that confirms the retention policy is working, removes abandoned repositories and checks that no cluster still pulls a deleted image keeps the registry small and honest.

                ## Milestones
                1. Registry storage size recorded each month.
                2. Repositories with no push in six months reviewed and archived or deleted with the owner's agreement.
                3. The retention policy's last run checked for errors.
                4. A check that every image running in the clusters still exists in the registry.

                ## Notes
                Never delete an image that any cluster, rollback plan or disaster recovery runbook still references. Check before removing, not after.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Registry size is logged monthly, abandoned repositories are resolved within a month of being found, and no running image is missing from the registry."
                cadence: rolling
              tasks:
                - "Record the registry's current storage size and repository count"
                - "List repositories with no push in the past six months"
                - "Confirm every image running in the clusters still exists in the registry"
                - "Check retention policy runs and review stale repositories @recurring(monthly:27)"
            - name: Secret rotation for cluster workloads
              description: |-
                ## Purpose
                Kubernetes Secrets are only base64 encoded by default, and the database password stored in one three years ago is probably still in use and in several people's shell history. A quarterly rotation of workload secrets, with encryption at rest switched on, limits how long a leaked credential stays useful.

                ## Milestones
                1. Encryption at rest for Secrets confirmed on every cluster.
                2. Every secret used by production workloads listed with its owner and last rotation date.
                3. A rotation procedure that updates the secret and restarts consumers without downtime.
                4. Each production secret rotated at least once in the past quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production workload secret has a recorded owner and was rotated within the past 90 days, on clusters with encryption at rest enabled."
                cadence: cyclic
              tasks:
                - "Check that Secret encryption at rest is enabled on each cluster"
                - "List production secrets with owner and last rotation date"
                - "Write the rotation steps for one secret and test them in non-production"
                - "Rotate production workload secrets due this quarter @recurring(quarterly)"
            - name: Cluster backup and restore drill
              description: |-
                ## Purpose
                A backup tool that reports success every night proves nothing until someone restores from it. Backing up cluster resources and persistent volumes, then restoring a namespace into a scratch cluster every quarter, tells you how long recovery really takes and which parts are missing.

                ## Milestones
                1. Cluster resources and persistent volume snapshots backed up on a schedule to storage outside the cluster.
                2. A written restore procedure for a single namespace and for a whole cluster.
                3. A namespace restored into a scratch cluster and its workloads confirmed working.
                4. The measured restore time and anything missing recorded after each drill.

                ## Notes
                If you keep cluster state in Git, the manifests are only half the story. Volumes, secrets and custom resources created at runtime still need backing up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly restore of a production namespace into a scratch cluster succeeds, with the restore time and gaps recorded each time."
                cadence: cyclic
              tasks:
                - "Confirm what your current backups include and where they are stored"
                - "Write the restore procedure for a single namespace"
                - "Restore one production namespace into a scratch cluster and time it @recurring(quarterly)"
                - "Record the restore time and missing pieces after the drill"
            - name: Certificate expiry watch for ingress and cluster components
              description: |-
                ## Purpose
                Expired certificates cause some of the most embarrassing outages, and clusters hide several kinds: ingress TLS, webhook certificates, internal component certificates and the kubelet's own. A monthly check of what expires in the next 60 days, plus automatic renewal wherever possible, makes certificate expiry a non-event.

                ## Milestones
                1. Every certificate in the cluster listed with issuer and expiry date, including webhooks and control plane where self-managed.
                2. Ingress certificates renewed automatically by a certificate controller.
                3. An alert or check that fires 30 days before any certificate expires.
                4. Certificates that cannot be renewed automatically listed with a named owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No certificate in any cluster expires unnoticed for 12 months, and every certificate that cannot auto-renew has a named owner."
                cadence: rolling
              tasks:
                - "List certificates across the clusters with their expiry dates"
                - "Move ingress certificates to automatic renewal"
                - "Set a check that warns 30 days before any certificate expires"
                - "Review certificates expiring in the next 60 days @recurring(monthly:3)"
            - name: Weekly review of crashlooping and evicted pods
              description: |-
                ## Purpose
                Restart counts climb quietly: a pod that restarts four times a day still serves traffic, so nobody looks until it starts restarting every minute. A short Monday review of pods with high restarts, out-of-memory kills, evictions and failed jobs turns slow-burning problems into tickets while they are cheap to fix.

                ## Milestones
                1. A saved query listing pods with restarts, out-of-memory kills and evictions in the past week.
                2. Each finding either fixed, ticketed with an owner or noted as expected.
                3. Repeat offenders tracked from week to week.
                4. The review taking under 20 minutes once the query is in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews are recorded, each with every high-restart or evicted pod resolved, ticketed or explained."
                cadence: rolling
              tasks:
                - "Write a saved query for restarts, out-of-memory kills and evictions"
                - "Run it once now and ticket the three worst offenders"
                - "Review crashlooping, evicted and out-of-memory pods @recurring(weekly:mon)"
                - "Keep a short list of repeat offenders across weeks"
            - name: Cluster add-on version register
              description: |-
                ## Purpose
                The ingress controller, certificate controller, DNS, storage drivers and metrics server are software you run, each with its own release cycle and compatibility matrix against Kubernetes versions. A register of every add-on with its version and supported range stops a cluster upgrade from breaking an add-on nobody remembered installing.

                ## Milestones
                1. Every add-on and Helm release in each cluster listed with its installed version.
                2. Each add-on's supported Kubernetes version range recorded from its documentation.
                3. Add-ons more than two minor versions behind scheduled for upgrade.
                4. The register checked as part of every cluster upgrade checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every cluster add-on with version and supported range, and no add-on is outside its supported range for the cluster it runs on."
                cadence: rolling
              tasks:
                - "List Helm releases and system add-ons in each cluster"
                - "Record each add-on's supported Kubernetes versions"
                - "Schedule upgrades for add-ons more than two minor versions behind"
                - "Check add-on release notes and update the register @recurring(monthly:17)"
            - name: Kubernetes core objects study plan
              description: |-
                ## Purpose
                Engineers who deploy to a cluster every day often treat it as a black box of YAML that someone else wrote. Working through pods, deployments, replica sets, services, ConfigMaps, Secrets and jobs on a throwaway local cluster, one object a week, builds the mental model that makes every later debugging session shorter.

                ## Milestones
                1. A local cluster running on your machine with a tool such as kind, minikube or k3d.
                2. Each core object created by hand from a manifest you wrote, not copied.
                3. A rolling update and a rollback performed on a deployment and watched with kubectl.
                4. A one-page summary of how deployments, replica sets and pods relate.

                ## Notes
                Start from the **Course** template. Write manifests by hand at first; generating them hides exactly the fields you need to learn.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every core object has been created from a hand-written manifest on a local cluster, and a rollback has been performed and explained in writing."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Install a local cluster tool and start a single-node cluster"
                - "Write a pod manifest by hand and apply it"
                - "Turn the pod into a deployment and perform a rolling update and rollback"
                - "Expose the deployment with a service and reach it from another pod"
            - name: Debugging a failing pod step by step
              description: |-
                ## Purpose
                Faced with a pod that will not start, people jump between logs and dashboards at random. A practised sequence of describe, events, logs, previous logs, exec and ephemeral debug containers finds most problems, from image pull errors to failed probes to missing ConfigMaps, in minutes rather than an hour.

                ## Milestones
                1. A written debugging sequence that covers Pending, ImagePullBackOff, CrashLoopBackOff and failing readiness.
                2. Each failure mode reproduced on purpose in a local cluster and diagnosed with the sequence.
                3. An ephemeral debug container used to inspect a distroless pod.
                4. The sequence shared with the team as a one-page guide.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four common pod failure modes have been reproduced and diagnosed using a written sequence that the team can follow."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the debugging sequence from describe through to ephemeral containers"
                - "Break a local deployment with a wrong image tag and diagnose it"
                - "Make a container exit on start and read its previous logs"
                - "Attach an ephemeral debug container to a distroless pod"
            - name: Container internals, namespaces, cgroups and layers
              description: |-
                ## Purpose
                Under the hood, a container is a Linux process with namespaces, cgroups and a layered filesystem, and knowing that explains most surprising behaviour: why a process sees all the host's memory, why PID 1 ignores signals, why a deleted file still bloats the image. A few evenings spent taking a container apart pays off in every Dockerfile and incident afterwards.

                ## Milestones
                1. A container's processes inspected from the host to see the namespaces it runs in.
                2. Cgroup memory and CPU limits observed changing as a container's limits change.
                3. An image's layers listed and the layer that adds most size identified.
                4. The PID 1 signal problem demonstrated and fixed with an init process or proper signal handling.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Namespaces, cgroup limits and image layers have each been inspected hands-on, and the PID 1 signal issue has been reproduced and fixed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run a container and find its process and namespaces from the host"
                - "Change a container's memory limit and read the cgroup value"
                - "List an image's layers and find the largest one"
                - "Reproduce a container that ignores the stop signal and fix it"
            - name: Writing a Helm chart from scratch
              description: |-
                ## Purpose
                Most engineers meet Helm through someone else's chart with four hundred lines of values and conditionals. Writing a small chart for one of your own services, with only the values you actually need, teaches templating, release history and rollback, and shows when a chart is the right tool and when plain manifests would do.

                ## Milestones
                1. A chart for one service with templates for deployment, service and ConfigMap.
                2. A values file with no more than the settings that genuinely differ between environments.
                3. The chart linted and rendered locally, with the output reviewed as plain YAML.
                4. An install, an upgrade and a rollback performed on a local cluster.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A working chart for one service has been installed, upgraded and rolled back, with a values file limited to settings that differ by environment."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Scaffold a new chart and delete the templates you do not need"
                - "Template the deployment, service and ConfigMap for one service"
                - "Render the chart locally and read the output"
                - "Install, upgrade and roll back the release on a local cluster"
            - name: Kustomize overlays for each environment
              description: |-
                ## Purpose
                Copying a whole directory of manifests per environment means a fix applied to staging silently misses production. A Kustomize base with thin overlays for each environment keeps the shared shape in one place and makes the differences, such as replica counts and resource sizes, visible at a glance.

                ## Milestones
                1. A base directory holding the manifests every environment shares.
                2. One overlay per environment containing only patches and environment-specific values.
                3. The rendered output for each environment compared with what is running today and matched.
                4. Duplicated per-environment manifest directories removed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One service's manifests live in a single base with per-environment overlays whose rendered output matches what each environment runs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Diff one service's manifests across environments to find what really differs"
                - "Move the shared parts into a base directory"
                - "Write an overlay per environment with only the differences"
                - "Render each overlay and compare it with the live objects"
            - name: Kubernetes networking with services, DNS and ingress
              description: |-
                ## Purpose
                Most cluster outages that look like application bugs turn out to be networking: a selector that matches nothing, DNS lookups timing out, an ingress rule pointing at the wrong port. Tracing one request from the load balancer through ingress, service and endpoints to the pod builds the picture needed to diagnose them.

                ## Milestones
                1. One request traced from the external load balancer to the pod, with each hop named.
                2. The differences between ClusterIP, NodePort, LoadBalancer and headless services written down.
                3. In-cluster DNS names resolved from a debug pod, including a headless service.
                4. A broken service selector reproduced and diagnosed from its empty endpoints.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written trace of one request from load balancer to pod exists, and a broken selector has been diagnosed from its endpoints."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the path of one request from the load balancer to a pod"
                - "Resolve service names from a debug pod inside the cluster"
                - "Break a service selector on purpose and inspect its endpoints"
                - "Write a short note on when to use each service type"
            - name: Liveness, readiness and startup probes done right
              description: |-
                ## Purpose
                Point a liveness probe at the database and it will restart every pod at once when the database blips, turning a small problem into an outage. Getting each probe's job straight, with readiness for taking traffic, liveness for a stuck process and startup for slow boots, makes deployments smoother and failures smaller.

                ## Milestones
                1. Every production workload's probes listed with what each one actually checks.
                2. Liveness probes changed to check only the process itself, never downstream dependencies.
                3. Readiness probes reflecting whether the pod can serve traffic now.
                4. Startup probes added for services that take more than a few seconds to boot.

                ## Notes
                A missing readiness probe means traffic arrives before the service is ready. A too-aggressive liveness probe is worse than none.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every production workload has a readiness probe, and no liveness probe depends on a database or other downstream service."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each production workload's probes and what endpoint they hit"
                - "Remove downstream dependency checks from liveness probes"
                - "Add readiness probes where they are missing"
                - "Add startup probes to services with slow boots"
            - name: Pod scheduling with affinity, taints and topology spread
              description: |-
                ## Purpose
                By default the scheduler is happy to put all three replicas of a service on the same node or in the same zone, which turns one node failure into a full outage. Learning topology spread constraints, anti-affinity, taints and tolerations lets you place pods deliberately across failure domains and onto the right hardware.

                ## Milestones
                1. Current replica placement checked for services with more than one replica.
                2. Topology spread constraints across zones and nodes added to critical services.
                3. A tainted node pool created for special workloads, with tolerations on the pods that belong there.
                4. A node drained in non-production and the service confirmed to stay available.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Critical services spread replicas across zones, and draining any single node in non-production leaves them serving traffic."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check which nodes and zones each critical service's replicas run on"
                - "Add topology spread constraints to one critical service"
                - "Taint a test node pool and schedule a pod onto it with a toleration"
                - "Drain a non-production node and watch the service stay up"
            - name: Image size reduction for the largest images
              description: |-
                ## Purpose
                Images of a gigabyte or more slow every deploy, every scale-up and every node replacement, because each new node has to pull them before pods can start. Taking the five largest images and cutting them with slimmer bases, multi-stage builds and fewer layers often halves pull times and makes autoscaling noticeably faster.

                ## Milestones
                1. The five largest production images listed with their size and pull time on a fresh node.
                2. The biggest layers in each image identified and explained.
                3. Each image rebuilt with a slimmer base or multi-stage build, and size recorded before and after.
                4. Pod start time on a fresh node measured again after the changes.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five largest production images are each at least 30 percent smaller, with before and after sizes and pull times recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the five largest production images by compressed size"
                - "Inspect the layers of each and note what makes them large"
                - "Rebuild the largest image with a multi-stage build and slimmer base"
                - "Measure pod start time on a fresh node before and after"
            - name: Managed Kubernetes provider and distribution choice
              description: |-
                ## Purpose
                Once Kubernetes is the answer, the next question is whose: a cloud provider's managed service, a lightweight distribution on your own machines or a self-built control plane. The choice decides who patches the control plane, how upgrades work and what an outage at 3am involves, so it deserves a written comparison rather than whatever the first tutorial used.

                ## Milestones
                1. Requirements listed, including regions, compliance needs, budget and the team's operations hours.
                2. Two or three options compared on control plane management, upgrade process, support and cost.
                3. A small proof of concept cluster run on the leading option for one week.
                4. A recorded choice with the reasons and the main risk accepted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two Kubernetes options exists, with a week-long proof of concept and a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements a cluster must meet in one page"
                - "Compare two or three options on management, upgrades, support and cost"
                - "Run a proof of concept cluster on the leading option for a week"
                - "Record the choice, the reasons and the main accepted risk"
            - name: GitOps controller for cluster state
              description: |-
                ## Purpose
                Hand-applied changes mean the cluster and the repository disagree within a week and nobody knows which is right. A GitOps controller that reconciles each cluster from a repository makes Git the single record of what should run, shows drift, and turns rebuilding a cluster into pointing a new one at the same repo.

                ## Milestones
                1. A GitOps controller chosen and installed in a non-production cluster.
                2. One namespace's workloads reconciled from a repository, with manual changes reverted automatically.
                3. Drift alerts showing when live state differs from the repository.
                4. Direct write access to production reduced once the controller manages it.

                ## Notes
                Keep the GitOps repository's structure simple: one directory per cluster, with shared bases. Clever layouts become hard to reason about in an incident.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one production namespace is reconciled from Git by a controller, with drift reported and manual changes reverted."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose a GitOps controller and install it in non-production"
                - "Create a cluster state repository with one directory per cluster"
                - "Move one namespace under the controller's management"
                - "Turn on drift notifications to the team channel"
            - name: Horizontal pod autoscaling on the right signal
              description: |-
                ## Purpose
                Autoscaling on CPU works for CPU-bound services and does nothing for one that waits on a queue or a database. Picking the signal that actually tracks load for each service, such as request rate, queue depth or CPU, and setting sensible minimums, maximums and scale-down behaviour makes autoscaling something you can rely on during a spike.

                ## Milestones
                1. Each scalable service listed with the signal that best tracks its load.
                2. Autoscalers configured with minimum and maximum replicas and a scale-down stabilisation window.
                3. Custom or external metrics wired in for services that scale on queue depth or request rate.
                4. A traffic increase in non-production showing the service scaling out and back without flapping.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every autoscaled production service scales on a documented signal with set bounds, and has been seen scaling out and in without flapping."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List scalable services and the signal that tracks each one's load"
                - "Set minimum and maximum replicas and a scale-down window on one service"
                - "Wire a queue depth or request rate metric into the autoscaler"
                - "Review autoscaler events for flapping or hitting the maximum @recurring(monthly:24)"
            - name: Ingress controller or Gateway API choice
              description: |-
                ## Purpose
                The ingress controller is the front door for every request, and changing it later touches every service's routing. Comparing the controllers you could run, and whether to adopt the Gateway API now, against your real needs for TLS, path routing, rate limits and traffic splitting gives you a front door you will not have to replace in a year.

                ## Milestones
                1. Current routing needs listed, including TLS, path and host rules, rate limits and canary splits.
                2. Two or three controllers compared, including their Gateway API support and maintenance status.
                3. A chosen controller running in non-production with two real services routed through it.
                4. A migration plan for the remaining routes, if a controller change is needed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the ingress controller and Gateway API stance, with two real services routed through it in non-production."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List routing features your services need today and next year"
                - "Compare two or three controllers on features and maintenance status"
                - "Route two real services through the chosen controller in non-production"
                - "Write the migration plan for the remaining routes"
            - name: External secrets operator in place of manual secrets
              description: |-
                ## Purpose
                Secrets created by hand with kubectl live only in the cluster, are rarely rotated and vanish when the cluster is rebuilt. Syncing them from a secrets manager through an operator means the manager is the source of truth, rotation happens in one place and a new cluster gets its secrets without anyone pasting values.

                ## Milestones
                1. Every manually created Secret in production listed with its consumer.
                2. A secrets operator installed and connected to your secrets manager with a narrowly scoped identity.
                3. Each manual Secret moved to the manager and synced by the operator.
                4. A rotation in the manager confirmed to reach the consuming pods.

                ## Notes
                Keep plain secret values out of Git even when encrypted manifests are allowed. If you use sealed or encrypted secrets instead, write down who holds the decryption key.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No production Secret is created by hand: each is synced from the secrets manager, and a rotation has been shown to reach its pods."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List manually created Secrets in production and what uses each"
                - "Install a secrets operator with a narrowly scoped identity"
                - "Move one service's secrets into the manager and sync them"
                - "Rotate one secret in the manager and confirm the pod picks it up"
            - name: Pod disruption budgets and graceful shutdown
              description: |-
                ## Purpose
                Node upgrades, autoscaler scale-downs and spot reclaims all evict pods, and a service without a disruption budget or a clean shutdown drops requests every time. Adding budgets, honouring the termination signal and draining connections makes routine cluster maintenance invisible to users.

                ## Milestones
                1. A disruption budget on every production service with more than one replica.
                2. Services handling the termination signal by finishing in-flight requests and closing cleanly.
                3. A pre-stop delay where the load balancer needs time to stop sending traffic.
                4. A node drain in non-production completed with no failed requests recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every multi-replica production service has a disruption budget and graceful shutdown, and a non-production node drain shows zero failed requests."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List production services with more than one replica and no disruption budget"
                - "Add a disruption budget to each of them"
                - "Check that each service finishes in-flight requests on the termination signal"
                - "Drain a non-production node while sending traffic and count failures"
            - name: Moving the first service onto the cluster
              description: |-
                ## Purpose
                The first service to move sets every pattern that follows: its manifests get copied, its logging becomes the default and its mistakes get repeated. Choosing a low-risk but real service, moving it with a rollback path and writing down what you learned turns one migration into the template for the rest.

                ## Milestones
                1. A first service chosen that is real, stateless and low risk if it misbehaves.
                2. The service running in non-production on the cluster with probes, requests and logging in place.
                3. Production traffic shifted gradually with the old hosting kept ready for rollback.
                4. The old hosting retired and a short lessons note written for the next migration.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first service serves all production traffic from the cluster for two weeks, its old hosting is retired and a lessons note exists."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Pick a stateless, low-risk service to move first"
                - "Deploy it to non-production on the cluster with probes and requests"
                - "Shift a small share of production traffic and watch errors and latency"
                - "Write the lessons note before starting the second migration"
            - name: Major Kubernetes version upgrade in production
              description: |-
                ## Purpose
                Some upgrades remove APIs your manifests or charts still use, and the cluster will not tell you until a deployment fails. Treating a version upgrade that removes APIs as a dated event, with a rehearsal in non-production, a freeze window and a rollback plan for node pools, gets it done without a weekend of firefighting.

                ## Milestones
                1. Removed and deprecated APIs found and migrated in every manifest, chart and add-on.
                2. The upgrade rehearsed on a non-production cluster and left to soak for a week.
                3. A production window agreed with teams, with a deploy freeze during it.
                4. Control plane and node pools upgraded, workloads verified and the checklist updated.

                ## Notes
                Start from the **Operational checklist** template. Upgrade node pools one at a time and keep the previous pool around until the new one is proven.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The production cluster runs the target version with all workloads healthy, and no removed API remains in any manifest or chart."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Scan manifests, charts and add-ons for APIs removed in the target version"
                - "Upgrade a non-production cluster and let it soak for a week"
                - "Agree the production window and deploy freeze with service owners"
                - "Upgrade production node pools one at a time and verify workloads"
            - name: Migrating workloads to a new cluster
              description: |-
                ## Purpose
                Sometimes an in-place upgrade is the wrong move: the cluster is several versions behind, built by hand, or in the wrong network. Building a new cluster from code and moving workloads across in waves, with DNS or load balancer weights for cutover, is slower to set up but far safer than surgery on a cluster nobody fully understands.

                ## Milestones
                1. The new cluster built from code, with add-ons, policies and access matching the old one.
                2. Workloads grouped into migration waves from least to most critical.
                3. Each wave cut over by shifting traffic, with the old cluster kept as rollback.
                4. The old cluster drained, backed up and scheduled for shutdown.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All workloads run on the new cluster, every wave had a tested rollback, and the old cluster is drained with a shutdown date set."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List every workload on the old cluster and group them into waves"
                - "Build the new cluster from code with matching add-ons and access"
                - "Cut over the first wave by shifting traffic weights"
                - "Set the shutdown date for the old cluster once the last wave is stable"
            - name: Cluster headroom review before a peak
              description: |-
                ## Purpose
                Ahead of a launch or seasonal peak, applications get attention while the cluster's own ceilings get forgotten: autoscaler maximums, cloud quotas for nodes and IP addresses, and the time it takes a new node to join. Checking those limits four to six weeks out means the cluster can actually grow when traffic arrives.

                ## Milestones
                1. Autoscaler maximums for node pools and key services compared with expected peak load.
                2. Cloud quotas for instances, IP addresses and load balancers checked and raised where needed.
                3. Time from scale-up trigger to a ready pod on a new node measured.
                4. Any extra warm capacity agreed and scheduled for the peak window.

                ## Notes
                Subnet IP exhaustion stops scaling as surely as a quota does, and it is slow to fix. Check free addresses per subnet as part of the review.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A headroom review shows node pools, quotas and subnets can reach the expected peak, with measured node join time and any warm capacity scheduled."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the expected peak and the date it starts"
                - "Compare autoscaler maximums with the capacity the peak needs"
                - "Check cloud quotas and free subnet addresses and request increases"
                - "Measure how long a new node takes to run a ready pod"
            - name: Retiring a cluster and its leftovers
              description: |-
                ## Purpose
                Clusters are rarely switched off cleanly: load balancers, persistent disks, DNS records and registry pull secrets outlive them and keep costing money or pointing at nothing. Retiring a cluster with a checklist, after confirming nothing still calls it, closes the books on it for good.

                ## Milestones
                1. Traffic to the cluster confirmed at zero for at least two weeks.
                2. A final backup taken and stored for the agreed retention period.
                3. The cluster deleted along with its load balancers, disks, DNS records and credentials.
                4. The inventory and any documentation updated to show it is gone.

                ## Notes
                Persistent volumes with a retain policy survive cluster deletion. List them first and decide on each, or they become orphaned disks.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The retired cluster and its load balancers, disks, DNS records and credentials no longer exist, and the inventory reflects it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check traffic and connections to the cluster over the past two weeks"
                - "List load balancers, disks, DNS records and credentials tied to it"
                - "Take and store a final backup"
                - "Delete the cluster and every leftover resource on the list"
            - name: Solo engineer running containers without a cluster
              description: |-
                ## Purpose
                Working alone, a developer or one-person infrastructure team rarely has the hours to babysit a cluster on top of shipping features. Running containers on a single virtual machine or a managed container service, with Compose, automatic restarts, a reverse proxy and scripted deploys, delivers most of the benefit with an evening of upkeep a month.

                ## Milestones
                1. Services running from versioned images under Compose or a managed container service with restart policies.
                2. A reverse proxy handling TLS with automatic certificate renewal.
                3. A scripted deploy that pulls a new image and restarts with one command.
                4. A monthly upkeep routine covering image updates, disk space and unused image pruning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All services run from versioned images with restart policies and automatic TLS, deploy with one command and get a monthly upkeep pass."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Move each service to a versioned image with a restart policy"
                - "Put a reverse proxy with automatic TLS renewal in front"
                - "Write a one-command deploy script"
                - "Update images, check disk space and prune unused images @recurring(monthly:6)"
            - name: Small team adopting Kubernetes without a platform specialist
              description: |-
                ## Purpose
                A product team of four or five that takes on Kubernetes without a dedicated platform engineer can burn a quarter on cluster plumbing. Keeping to a managed cluster, a short list of add-ons, one manifest approach and a shared rota for cluster chores lets the team get the benefits without it becoming everyone's second job.

                ## Milestones
                1. A managed cluster with only the add-ons the team needs, listed in one place.
                2. One manifest approach and one deployment path agreed for every service.
                3. Cluster chores such as upgrades and add-on updates assigned on a rotating basis.
                4. A limit agreed for hours spent on cluster work each sprint, reviewed after three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The team runs a managed cluster with a written add-on list, one deployment path and a chore rota, and reviewed its cluster hours after three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the add-ons you truly need and remove the rest"
                - "Agree one manifest approach and deployment path for every service"
                - "Set up a rotating owner for cluster chores"
                - "Track hours spent on cluster work for the next three sprints"
            - name: Kubernetes skills matrix for the team
              description: |-
                ## Purpose
                Teams often discover that only one person can debug networking or upgrade the cluster at the moment that person is on holiday. A skills matrix covering images, manifests, debugging, networking, upgrades and security shows where knowledge is thin and who should pair with whom.

                ## Milestones
                1. A list of eight to twelve container and cluster skills the team relies on.
                2. Each engineer's self-rated level recorded against each skill.
                3. Every skill with fewer than two capable people paired with a learning plan.
                4. The matrix revisited a year later to see what moved.

                ## Notes
                Start from the **Skills matrix** template. Keep levels simple, such as aware, can do with help, can do alone and can teach.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed skills matrix covers every engineer, and every skill with fewer than two capable people has a named learner."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List the container and cluster skills the team depends on"
                - "Ask each engineer to rate themselves against each skill"
                - "Pair a learner with an expert for each skill held by only one person"
                - "Refresh the skills matrix with the whole team @recurring(yearly)"
            - name: Inheriting a cluster nobody documented
              description: |-
                ## Purpose
                Taking over a cluster after its builder leaves usually means a mix of hand-applied objects, unexplained add-ons and credentials of unknown scope. Spending the first month mapping it, exporting its state to code and finding the risky pieces, before changing anything, avoids breaking something whose purpose nobody remembers.

                ## Milestones
                1. Every namespace, add-on and custom resource definition listed with a guessed or confirmed purpose.
                2. Live cluster state exported to a repository as a starting record.
                3. Credentials, service accounts with broad rights and external integrations identified.
                4. A ranked list of risks and a short plan agreed with your manager.

                ## Notes
                Change nothing in the first two weeks except to fix an active incident. Most things that look unused have one caller you have not found yet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of the inherited cluster exists, its live state is exported to a repository and a ranked risk list has been agreed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List namespaces, add-ons and custom resource definitions with their purpose"
                - "Export live cluster objects into a new repository"
                - "Find service accounts with cluster-wide rights and what uses them"
                - "Ask the agent to draft a ranked risk summary from your notes"
            - name: Quotas and tenancy on a cluster shared by teams
              description: |-
                ## Purpose
                Sharing a cluster between several teams means one team's runaway job can starve everyone else and one team's admin rights can break another's service. Resource quotas, limit ranges, namespace-scoped roles and a clear request route for new namespaces let teams share infrastructure without stepping on each other.

                ## Milestones
                1. Each team given its own namespaces with role bindings scoped to them.
                2. Resource quotas and limit ranges set per namespace from current usage plus headroom.
                3. A documented way for teams to request new namespaces or more quota.
                4. Quota usage shared with each team so they can see their own consumption.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every team namespace has quotas, limit ranges and scoped roles, and teams request changes through a documented route."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map teams to the namespaces they own"
                - "Set quotas and limit ranges from current usage plus headroom"
                - "Write the request route for new namespaces and quota increases"
                - "Review quota usage per team and adjust where needed @recurring(quarterly)"
            - name: Cluster help desk for product teams
              description: |-
                ## Purpose
                Whoever knows the cluster best gets interrupted all day with questions about failing deploys and missing permissions. A single channel, a short intake form and a weekly office hour, with answers turned into a growing FAQ, make help predictable for product teams and protect the cluster owners' focus.

                ## Milestones
                1. One channel and a short request form for cluster questions.
                2. A weekly office hour where product teams bring problems.
                3. The ten most common questions answered in a written FAQ.
                4. Repeat questions falling month by month as the FAQ grows.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Cluster questions arrive through one channel, a weekly office hour runs, and a FAQ answers at least ten common questions."
                cadence: rolling
              tasks:
                - "Create one channel and a short intake form for cluster questions"
                - "Book a weekly office hour with product teams"
                - "Write answers to the ten most frequent questions in a FAQ"
                - "Ask the agent to group last month's questions into themes for the FAQ"
            - name: Pod security standards and admission policies
              description: |-
                ## Purpose
                Without admission control, any manifest can run a privileged container, mount the host filesystem or pull from any registry. Applying the restricted pod security standard where possible, and an admission policy engine for rules like approved registries and required labels, stops unsafe workloads before they start rather than after an audit.

                ## Milestones
                1. Every namespace labelled with a pod security level, starting in warn mode.
                2. Violations found in warn mode listed per workload and fixed or justified.
                3. Enforcement switched on for the restricted or baseline level per namespace.
                4. Admission policies for approved registries and required labels running in enforce mode.

                ## Notes
                Start from the **Remediation plan** template to track violations. Move from audit to warn to enforce one namespace at a time so nothing breaks unannounced.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every production namespace enforces a pod security level, and policies blocking unapproved registries run in enforce mode."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Label every namespace with a pod security level in warn mode"
                - "List violations per workload and assign owners"
                - "Switch the first clean namespaces to enforce"
                - "Review new policy violations and exceptions @recurring(monthly:11)"
            - name: Default-deny network policies between workloads
              description: |-
                ## Purpose
                In a default cluster any pod can talk to any other pod, so one compromised service can reach the database of every other team. Moving to default-deny per namespace with explicit allow rules for real traffic shrinks the blast radius, but it needs a network plugin that enforces policies and a careful map of who talks to whom.

                ## Milestones
                1. The cluster's network plugin confirmed to enforce network policies.
                2. Real traffic between workloads mapped for one namespace from flow logs or observation.
                3. Default-deny plus explicit allow rules applied to that namespace without breaking traffic.
                4. The same pattern rolled out to every production namespace, including DNS and egress rules.

                ## Notes
                Remember DNS. A default-deny egress policy that forgets the cluster DNS service will break every lookup in the namespace.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every production namespace runs default-deny network policies with explicit allows, and the plugin is confirmed to enforce them."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm your network plugin enforces network policies"
                - "Map the real traffic in and out of one namespace"
                - "Apply default-deny and allow rules to that namespace in non-production"
                - "Review network policies against new services and traffic @recurring(quarterly)"
            - name: Stateful workloads on Kubernetes decision
              description: |-
                ## Purpose
                Running a database in the cluster is possible with StatefulSets, storage classes and an operator, but it moves backups, failover and upgrades onto your team. Deciding per data store whether it lives in the cluster or in a managed service, with honest numbers on effort and recovery time, avoids learning that lesson during an outage.

                ## Milestones
                1. Every stateful workload listed with its data size, recovery needs and current hosting.
                2. Storage classes, volume expansion and snapshot support checked for the cluster.
                3. In-cluster and managed options compared for each data store on effort, cost and recovery time.
                4. A recorded decision per data store, with an operator chosen for any that stay in the cluster.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each stateful workload has a recorded hosting decision with recovery time compared, and any in-cluster store runs under a chosen operator."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List stateful workloads with data size and recovery needs"
                - "Check storage class features such as expansion and snapshots"
                - "Compare in-cluster and managed hosting for each data store"
                - "Record the decision for each data store and its reasons"
            - name: Writing a custom operator or controller
              description: |-
                ## Purpose
                For teams that keep running the same sequence of kubectl steps to provision something, such as a tenant, a preview environment or a database user, a controller can encode that sequence as a custom resource. Building one well means understanding reconciliation loops, idempotency, finalizers and status, and knowing when a simpler script would do.

                ## Milestones
                1. A repeated manual procedure chosen and written as the desired state a custom resource would describe.
                2. A custom resource definition with a validated schema and status fields.
                3. A controller that reconciles the resource idempotently and cleans up with a finalizer.
                4. Tests that cover creation, update, deletion and a failed reconcile.

                ## Notes
                Most operators should start as a script. Build a controller only when the procedure needs continuous reconciliation, not a one-off run.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A custom resource and controller replace one manual procedure, with tests covering create, update, delete and failed reconciles."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the manual procedure as a desired state description"
                - "Define the custom resource schema and status fields"
                - "Scaffold the controller with an operator framework and implement reconcile"
                - "Add a finalizer and tests for deletion and failed reconciles"
            - name: Image signing and provenance checks at admission
              description: |-
                ## Purpose
                Any cluster that runs whatever image carries the right name trusts whoever can push to the registry. Signing images in the build pipeline and verifying signatures and build provenance at admission means only images your pipeline built can run in production, which closes a gap that registry permissions alone leave open.

                ## Milestones
                1. Images signed in the build pipeline using keyless or managed keys.
                2. Build provenance attached to each image showing the source commit and pipeline.
                3. An admission policy in audit mode reporting unsigned images in production.
                4. Enforcement switched on so only signed images from your pipeline run in production.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Production admission rejects unsigned images, and every running image carries a signature and provenance from your pipeline."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Add an image signing step to the build pipeline"
                - "Attach build provenance to each image"
                - "Run a signature verification policy in audit mode"
                - "Switch the policy to enforce once audit shows no unsigned images"
---

# Containers & Kubernetes

This area is for engineers and teams who package software in containers and run it on Kubernetes or a simpler container platform, whether that is one service on a managed cluster or dozens of workloads shared between teams. It starts with the foundations (an inventory, the honest question of whether you need Kubernetes at all, a production Dockerfile, base images, a registry, tagging, namespaces and access), then the routines that keep images and clusters healthy, the skills behind manifests, networking, scheduling and debugging, the decisions about providers, tooling, autoscaling and secrets, the dated events such as a first migration or a major upgrade, the situations a solo engineer, a small team or a cluster inheritor faces, and finally the specialist work of policy, network isolation, stateful workloads and operators.

What repeats is a weekly look at crashlooping and evicted pods, monthly base image rebuilds, requests reviews, node pool checks, registry clean-ups, certificate and add-on checks, quarterly upgrade planning, secret rotation and restore drills, and a yearly skills and base image review. The Operational checklist, Course, Metrics log, Skills matrix and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
