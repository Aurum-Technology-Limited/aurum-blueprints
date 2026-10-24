---
id: tech-certifications.cka-kubernetes-administrator
name: CKA Kubernetes Administrator
description: "A route to the CKA: the current curriculum, a kubeadm practice cluster, upgrades, etcd restores, RBAC, networking, storage, terminal troubleshooting, kubectl speed drills, timed mocks and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, cka-kubernetes-administrator, engineer, kubernetes, cka, cncf, exam-prep, devops]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - metrics-log
    - remediation-plan
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CKA Kubernetes Administrator
          description: "Preparing for the CKA performance-based exam: cluster setup and upgrades, workloads, networking, storage, troubleshooting at the terminal and speed with kubectl."
          projects:
            - name: CKA curriculum and candidate handbook folder
              description: |-
                ## Purpose
                The Linux Foundation and the CNCF publish the CKA curriculum as a list of domains and competencies, and the candidate handbook sets the rules on retakes, allowed documentation, ID and the exam environment. Both change, and the Kubernetes version the exam runs on moves forward several times a year. Saving the current versions with the date you checked them means every course, lab and mock is judged against the source rather than a forum post from two releases ago.

                ## Milestones
                1. The current CKA curriculum saved with the Kubernetes version it targets and the date you downloaded it.
                2. Each domain and its competencies copied onto a single page.
                3. The candidate handbook saved, with the rules on allowed documentation sites, ID and retakes highlighted.
                4. Current fee, exam length, passing score, included simulator sessions and certificate validity noted from the official pages with today's date.

                ## Notes
                Weightings, fees and durations quoted in course videos are often out of date. Copy them from the official pages on the day you check, and check again before you book.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated curriculum, a one-page domain map, the candidate handbook with key rules marked and a dated note of fees, duration and retake terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current CKA curriculum from the Linux Foundation training site"
                - "Copy each domain and its competencies onto one page"
                - "Save the candidate handbook and mark the rules on documentation, ID and retakes"
                - "Note the current fee, duration, passing score and validity period with today's date"
            - name: Kubernetes and Linux skills audit against the CKA domains
              description: |-
                ## Purpose
                Most candidates are strong in one corner, such as writing deployments or running Linux servers, and weak in another, such as etcd, certificates or CNI networking. Rating yourself against every competency in the curriculum, with one quick practical check for each, shows where the hours should go before you spend money on a course that repeats what you already know.

                ## Milestones
                1. Every curriculum competency listed in one grid.
                2. Each competency rated from zero to three after a short hands-on check, not a guess.
                3. The five weakest competencies marked as the first study priorities.
                4. Linux basics needed at the terminal, such as systemctl, journalctl, vim and file permissions, rated as their own row.

                ## Notes
                Start from the **Skills matrix** template. Rate a competency three only if you could do it from memory, with the documentation open, in under five minutes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills grid covers every CKA competency with a tested rating from zero to three and the five weakest areas named as priorities."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy every competency from your domain map into a skills grid"
                - "Try one small hands-on check for each competency and rate it"
                - "Add a row for Linux terminal skills and rate it honestly"
                - "Mark the five lowest-rated competencies as your first study targets"
            - name: Baseline timed task set before any study
              description: |-
                ## Purpose
                A CKA score depends on finishing tasks correctly within the time, so a knowledge quiz tells you little. Working through ten practical tasks against a timer on day one gives a speed and accuracy baseline you can compare every later mock against, and shows whether your problem is knowledge, speed or both.

                ## Milestones
                1. Ten practical tasks chosen that span every curriculum domain.
                2. All ten attempted against a fixed timer with only the allowed documentation open.
                3. Time taken and pass or fail recorded for each task.
                4. A short note written on whether slowness came from not knowing, from typing or from searching the docs.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline sheet records ten timed tasks across all domains with time, result and the main cause of each failure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick ten practical tasks from a free CKA question set covering every domain"
                - "Run all ten against a timer with only the allowed docs open"
                - "Record time and pass or fail for each task"
                - "Write two lines on whether knowledge, typing or searching cost you most"
            - name: Choosing a CKA practice cluster set-up
              description: |-
                ## Purpose
                Practice clusters built with kind or minikube are quick, but they hide the control plane static pods, kubelet services and certificates the CKA expects you to touch. A kubeadm cluster on local virtual machines or small cloud instances is closer to the exam. Deciding once, with cost and laptop limits in view, stops weeks of switching between tools.

                ## Milestones
                1. Three options compared: local virtual machines, small cloud instances and a lightweight tool such as kind for quick drills.
                2. Each option scored for exam realism, cost per month, rebuild time and laptop memory needed.
                3. One main kubeadm set-up chosen, with a lightweight tool kept for fast object practice.
                4. The decision and its reasons written down with a monthly spending limit.

                ## Notes
                Start from the **Purchase decision** template. If you choose cloud instances, set a billing alert before the first instance starts.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the main kubeadm practice set-up, a secondary quick-drill tool and a monthly spending limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check how much spare memory and CPU your laptop has for virtual machines"
                - "Price three small cloud instances for a month of evening use"
                - "Score local, cloud and lightweight options for realism, cost and rebuild time"
                - "Write down the chosen set-up and its monthly spending limit"
            - name: Three-node kubeadm practice cluster build
              description: |-
                ## Purpose
                Building a cluster by hand with kubeadm, one control plane and two workers, teaches the pieces the exam probes: the container runtime, kubelet, static pod manifests, certificates in the PKI folder and a CNI plugin. Doing it once slowly with notes makes every later rebuild faster and gives you a cluster to break on purpose.

                ## Milestones
                1. Three machines prepared with swap off, required kernel modules and a container runtime installed.
                2. kubeadm, kubelet and kubectl installed at matching versions close to the exam's target version.
                3. The control plane initialised and both workers joined with a fresh join token.
                4. A CNI plugin installed and a test pod reaching a pod on another node.
                5. Every command recorded in a build note you could follow again in under an hour.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-node kubeadm cluster runs with a CNI plugin and cross-node pod traffic, and a written build note reproduces it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create three virtual machines and turn swap off on each"
                - "Install the container runtime, kubeadm, kubelet and kubectl at one version"
                - "Initialise the control plane and join both workers"
                - "Install a CNI plugin and test pod traffic between nodes"
                - "Save every command you ran as a numbered build note"
            - name: Exam-speed terminal set-up
              description: |-
                ## Purpose
                Seconds lost retyping kubectl, fighting vim indentation or hunting for the namespace flag add up to whole tasks by the end of the exam. A small, memorised set-up of an alias, shell completion and three vim settings is something you can type in the first minute of the exam and use for every practice session until then.

                ## Milestones
                1. An alias for kubectl and completion that works with it set up in your practice shell.
                2. Vim settings for two-space indentation and expanded tabs written down and memorised.
                3. A shell variable for the dry-run output flags so new manifests are generated, not typed.
                4. The whole set-up typed from memory in under sixty seconds.

                ## Notes
                Keep it small. Anything you cannot type from memory on exam day is a crutch you will miss. Check the handbook for what the exam terminal already provides.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your kubectl alias, completion, vim indentation settings and dry-run variable can be typed from memory in under sixty seconds."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a kubectl alias and enable completion for it in your shell"
                - "Add vim settings for two-space indentation and expanded tabs"
                - "Create a shell variable for client dry-run YAML output"
                - "Time yourself typing the full set-up from memory"
            - name: Course and practice platform choice for the CKA
              description: |-
                ## Purpose
                CKA material ranges from free documentation walk-throughs to paid video courses with browser labs and exam simulators. Picking one main course and one practice platform, based on your skills audit and budget, avoids paying twice for the same content and leaves money for a retake if needed.

                ## Milestones
                1. Three courses or platforms compared on lab realism, curriculum version and price.
                2. Reviews checked for how recently each was updated to the current curriculum.
                3. One main course and one practice source chosen.
                4. The total spend written beside the exam fee in your study budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main course and one practice source are chosen in writing, with the curriculum version they cover and the total cost."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three CKA courses or lab platforms you are considering"
                - "Check when each was last updated against the current curriculum"
                - "Compare their hands-on lab time against your weakest domains"
                - "Record your choice and the total cost in your study budget"
            - name: Dated CKA study calendar
              description: |-
                ## Purpose
                Engineers with a day job usually need eight to fourteen weeks of steady practice for the CKA, and plans without dates slip quietly. A calendar that places each domain in a week, with mock exam dates and a target booking window, turns the skills audit into something you can check yourself against every Sunday.

                ## Milestones
                1. A target exam month chosen and written at the top of the plan.
                2. Each curriculum domain assigned to specific weeks, weakest first.
                3. Three timed mock dates placed in the final third of the plan.
                4. Two buffer weeks kept free for illness, work peaks or a slow domain.
                5. The calendar shared with anyone whose evenings it affects.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written calendar assigns every domain to dated weeks, places three mock exams and two buffer weeks, and names a target exam month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam month and write it at the top of the plan"
                - "Assign each curriculum domain to weeks, starting with your weakest"
                - "Place three timed mock exams in the last third of the plan"
                - "Block two buffer weeks and share the calendar with your household"
            - name: Kubernetes documentation navigation drills
              description: |-
                ## Purpose
                Candidates may open the official Kubernetes documentation during the exam, yet many still lose minutes finding the right page for a NetworkPolicy, a PersistentVolume or a kubeadm upgrade. Practising searches until you land on the right example in a few seconds turns the docs from a reference into a speed tool.

                ## Milestones
                1. A list of twenty pages you expect to need, such as network policies, volumes and upgrade steps.
                2. The search terms that find each page fastest written beside it.
                3. Each page found and its example copied in under thirty seconds.
                4. A weekly drill kept for the pages you were slowest to find.

                ## Notes
                Check the handbook for exactly which documentation sites are allowed. Practise with only those open, never with an outside blog or answer site.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty key documentation pages can each be found and their example copied in under thirty seconds using only the allowed sites."
                cadence: rolling
              tasks:
                - "List twenty documentation pages you expect to need in the exam"
                - "Find the quickest search term for each page and note it"
                - "Run a timed find-and-copy drill on five of the twenty pages @recurring(weekly:mon)"
                - "Move any page that takes over thirty seconds to the top of next week's drill"
            - name: Weekly CKA study blocks
              description: |-
                ## Purpose
                Kubernetes skills fade fast if practice is crammed into one weekend a month. Two fixed weekday evenings plus a longer weekend block, protected in the calendar like a meeting, give the steady hours a performance exam needs, and a short Sunday reset keeps the plan honest about what slipped.

                ## Milestones
                1. Two weekday blocks of at least ninety minutes fixed in the calendar.
                2. One longer weekend block reserved for labs and rebuilds.
                3. A Sunday check that compares hours done against the plan.
                4. Eight weeks in a row with at least three blocks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your calendar shows at least three completed CKA study blocks in each of eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Put two recurring weekday study blocks and one weekend block in your calendar"
                - "Spend a weekday block on the domain this week's plan names @recurring(weekly:tue,thu)"
                - "Compare hours done against the calendar and move what slipped @recurring(weekly:sun)"
                - "Tell your manager or household which evenings are blocked"
            - name: Daily ten-minute kubectl speed drill
              description: |-
                ## Purpose
                Speed with imperative kubectl commands is what lets strong candidates finish the CKA with time to check their work. Ten minutes a day creating, editing and inspecting objects from memory, against a stopwatch, builds the reflexes that make the exam feel like typing rather than thinking.

                ## Milestones
                1. A list of thirty common commands to drill, from creating deployments to exposing services.
                2. Daily drills done on a lightweight cluster that starts in under a minute.
                3. Your time for a standard set of ten commands recorded each week.
                4. Twenty-five drill days out of the last thirty.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your drill log shows at least 25 sessions in the last 30 days and a falling time for the standard set of ten commands."
                cadence: rolling
              tasks:
                - "Write a list of thirty kubectl commands worth drilling"
                - "Run ten kubectl commands from memory against a stopwatch @recurring(daily)"
                - "Record your time for the standard ten-command set at the end of each week"
                - "Replace commands you now know cold with harder ones"
            - name: Weekly practice cluster rebuild
              description: |-
                ## Purpose
                A practice cluster that lives for months collects fixes you forgot you made, and it never lets you practise bootstrapping. Tearing down and rebuilding from your build note once a week keeps the kubeadm steps fresh, catches drift in your notes and keeps cloud bills small if you use paid instances.

                ## Milestones
                1. The build note trimmed to the commands that matter.
                2. A full rebuild completed from the note without searching elsewhere.
                3. Rebuild time recorded each week and falling.
                4. Four weekly rebuilds done in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly rebuilds are logged, each completed from the build note alone, with rebuild time recorded."
                cadence: rolling
              tasks:
                - "Trim your build note to the commands you actually need"
                - "Tear down and rebuild the practice cluster from the build note @recurring(weekly:sat)"
                - "Record how long the rebuild took and where you got stuck"
                - "Fix the build note wherever a step was missing or wrong"
            - name: CKA mistake log and Friday review
              description: |-
                ## Purpose
                Wrong answers in a hands-on exam are usually small: the wrong namespace, a forgotten context switch, a label that did not match the selector. Writing each failure down with its real cause, and reviewing the log once a week, turns repeated slips into habits you can check for under pressure.

                ## Milestones
                1. A log with columns for task, domain, what went wrong and the root cause.
                2. Every failed practice task added the same day.
                3. Causes grouped weekly into knowledge, carelessness or speed.
                4. A personal pre-submit checklist built from the most common causes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mistake log has entries for every failed practice task and has produced a written pre-submit checklist of at least five checks."
                cadence: rolling
              tasks:
                - "Create a mistake log with task, domain, error and root cause columns"
                - "Add every failed practice task to the log on the day it happens"
                - "Group the week's mistakes by cause and pick one to drill @recurring(weekly:fri)"
                - "Turn the three most common causes into lines on a pre-submit checklist"
            - name: Monthly timed CKA mock exam
              description: |-
                ## Purpose
                Only a full timed mock shows whether you can hold speed and accuracy across a whole exam, including the dull tasks near the end. Sitting one each month in exam conditions, then logging the score by domain, gives a trend line you can trust when deciding whether to book.

                ## Milestones
                1. A source of full-length mocks chosen that matches the current curriculum.
                2. Each mock sat in one sitting with only the allowed documentation open.
                3. Score, time left and results by domain logged after each mock.
                4. Three monthly mocks on the log with a visible trend.

                ## Notes
                Start from the **Metrics log** template. Grade honestly: a task that would fail the exam's checker is a fail, even if it was nearly right.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log shows at least three monthly timed mocks with total score, time left and per-domain results."
                cadence: rolling
              tasks:
                - "Choose a full-length mock source that matches the current curriculum"
                - "Sit a full timed CKA mock with only the allowed docs open @recurring(monthly:12)"
                - "Log the score, time left and results by domain"
                - "Add the weakest domain from the mock to next week's study blocks"
            - name: Practice cluster bill and resource guard
              description: |-
                ## Purpose
                Cloud instances left running over a holiday or a load balancer created in a lab and forgotten can turn a cheap study plan into an unpleasant bill. A billing alert, a tag on every lab resource and a short monthly check keep the CKA practice cluster within the limit you set when you chose it.

                ## Milestones
                1. A billing alert set below your monthly spending limit.
                2. Every practice instance and volume tagged as CKA lab.
                3. A shutdown habit at the end of each session written into your build note.
                4. Monthly spend checked against the limit for three months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A billing alert is active, lab resources are tagged and three monthly bill checks show spending within your limit."
                cadence: rolling
              tasks:
                - "Set a billing alert just below your monthly practice limit"
                - "Tag every practice instance, disk and load balancer as CKA lab"
                - "Check this month's lab spend and delete anything left running @recurring(monthly:5)"
                - "Add a shutdown step to the end of your build note"
            - name: Curriculum and Kubernetes version watch
              description: |-
                ## Purpose
                Each CKA release tracks recent Kubernetes releases, and the curriculum itself has been revised to add topics such as Helm, Kustomize and the Gateway API. A quarterly check of the official pages, matched against your practice cluster's version, stops you from rehearsing commands or API versions the exam no longer uses.

                ## Milestones
                1. The Kubernetes version the exam currently uses noted with the date checked.
                2. Your practice cluster version compared against it.
                3. Any curriculum change since your last check written into the domain map.
                4. Your study calendar adjusted for any new or removed topic.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your domain map carries a dated note of the exam's Kubernetes version and any curriculum change from each quarterly check."
                cadence: rolling
              tasks:
                - "Check the exam's current Kubernetes version and curriculum on the official pages @recurring(quarterly)"
                - "Compare the exam version with your practice cluster's version"
                - "Write any curriculum change into your domain map with the date"
                - "Move study weeks around if a topic was added or dropped"
            - name: Weekly timed pairing with a study partner
              description: |-
                ## Purpose
                Explaining why a pod is pending or a service has no endpoints, out loud to another candidate, exposes gaps that solo practice hides. A weekly hour where partners set each other timed tasks and then swap keeps both of you honest about speed and makes the plan harder to drop.

                ## Milestones
                1. A study partner found through work, a meetup or an online Kubernetes community.
                2. A fixed weekly hour agreed for paired practice.
                3. A shared list of tasks each partner sets the other.
                4. Six paired sessions completed with times noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six paired practice sessions are logged with the tasks set, the times taken and one lesson from each."
                cadence: rolling
              tasks:
                - "Ask in a Kubernetes community or at work for a CKA study partner"
                - "Agree a fixed weekly hour and how you will share a screen"
                - "Set each other three timed tasks and swap roles @recurring(weekly:wed)"
                - "Write down one lesson from each session in your mistake log"
            - name: Monthly break-and-fix troubleshooting session
              description: |-
                ## Purpose
                Troubleshooting carries real weight in the CKA, and the hardest part is not knowing what has been broken. Once a month, a partner or a script breaks your cluster in ways you have not seen, such as a wrong kubelet flag or a corrupted static pod manifest, and you fix it against the clock.

                ## Milestones
                1. A list of at least fifteen faults a partner or script can introduce.
                2. A monthly session where three unknown faults are introduced.
                3. Each fault found and fixed with time taken recorded.
                4. Your diagnostic order written down as a short checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly break-and-fix sessions are logged with nine faults diagnosed, times recorded and a written diagnostic checklist."
                cadence: rolling
              tasks:
                - "Ask the agent to draft fifteen realistic cluster faults for a partner to introduce"
                - "Have a partner or script break your cluster in three unknown ways @recurring(monthly:20)"
                - "Fix each fault against a timer and note how you found it"
                - "Update your diagnostic checklist with any step you skipped"
            - name: Cluster architecture and control plane components
              description: |-
                ## Purpose
                Every troubleshooting and upgrade task assumes you know what the API server, scheduler, controller manager, etcd, kubelet and kube-proxy each do, and where their configuration lives on a kubeadm node. A short, hands-on study of each component, reading its manifest or service file, makes later faults much easier to place.

                ## Milestones
                1. A one-page diagram of the control plane and node components and how they talk.
                2. The static pod manifest of each control plane component opened and its key flags noted.
                3. The kubelet service file and config file located on a worker.
                4. Logs for each component found using kubectl, crictl or journalctl.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page component diagram exists and you can locate the config file and logs for every control plane and node component on your cluster."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw the control plane and node components and their connections on one page"
                - "Open each static pod manifest on the control plane and note key flags"
                - "Find the kubelet service file and config file on a worker node"
                - "Read the logs of every component using the right tool for each"
            - name: kubeadm cluster upgrade by one minor version
              description: |-
                ## Purpose
                Upgrading a cluster in the right order, control plane first, then each node drained, upgraded and uncordoned, is a classic CKA task and an easy one to get wrong under time pressure. Practising it on your own cluster until the order is automatic removes one of the biggest risks on the exam.

                ## Milestones
                1. The official kubeadm upgrade page found and bookmarked.
                2. The control plane upgraded by one minor version with kubeadm, kubelet and kubectl at the new version.
                3. Each worker drained, upgraded and uncordoned in turn with workloads still running.
                4. The full upgrade done three times, the last in under twenty minutes.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three logged kubeadm upgrades by one minor version, the last finished in under twenty minutes with workloads running throughout."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build your practice cluster one minor version below the current release"
                - "Upgrade the control plane following the official kubeadm upgrade page"
                - "Drain, upgrade and uncordon each worker node in turn"
                - "Repeat the upgrade on a fresh cluster against a timer @recurring(quarterly)"
            - name: Backing up and restoring etcd from a snapshot
              description: |-
                ## Purpose
                An etcd snapshot and restore touches certificates, the etcdctl tool, file paths and the etcd static pod manifest at once, which is why candidates fear it. Doing it end to end on your own cluster, then restoring and proving your objects came back, makes it a routine task rather than a gamble.

                ## Milestones
                1. The etcd certificate, key and CA paths found from the etcd manifest.
                2. A snapshot taken with etcdctl and its status checked.
                3. Test objects deleted, the snapshot restored to a new data directory and the manifest pointed at it.
                4. The deleted objects shown to be back, and the full drill done in under fifteen minutes.

                ## Notes
                Read the paths from the manifest every time rather than from memory. Exam clusters may not use the default locations.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A logged etcd backup and restore in under fifteen minutes, with deleted test objects shown to be restored."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the etcd certificate, key and CA paths in the etcd static pod manifest"
                - "Take an etcd snapshot with etcdctl and check its status"
                - "Restore the snapshot to a new data directory and repoint the manifest"
                - "Run the full etcd backup and restore drill against a timer @recurring(monthly:24)"
            - name: RBAC, service accounts and kubeconfig contexts
              description: |-
                ## Purpose
                CKA tasks often ask you to give one user or service account exactly the access it needs and nothing more, then prove it. Working through roles, cluster roles, bindings, certificate signing requests and kubeconfig contexts until you can check access with kubectl auth can-i makes these quick marks rather than slow ones.

                ## Milestones
                1. A role and a cluster role created imperatively and bound to a user and a service account.
                2. A new user added through a certificate signing request, approved and given a kubeconfig context.
                3. Access checked with kubectl auth can-i for allowed and denied actions.
                4. Ten RBAC tasks completed in a timed set, each in under four minutes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten timed RBAC and kubeconfig tasks are completed, each in under four minutes, with access verified using auth can-i."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Create a role and role binding for a service account imperatively"
                - "Add a user through a certificate signing request and approve it"
                - "Build a kubeconfig context for the new user and switch to it"
                - "Check allowed and denied actions with kubectl auth can-i"
            - name: Workloads and scheduling task set
              description: |-
                ## Purpose
                Deployments, rollouts and rollbacks, resource requests and limits, taints and tolerations, node affinity and static pods make up a large share of everyday CKA tasks. A focused set of timed exercises on each, generated imperatively and edited rather than typed from scratch, builds both the knowledge and the speed.

                ## Milestones
                1. A deployment created, scaled, updated with a new image and rolled back.
                2. A pod placed on a chosen node using a taint, a toleration and node affinity.
                3. Requests and limits set and a pod that will not schedule diagnosed from its events.
                4. A static pod created on a worker by placing its manifest in the right folder.
                5. Fifteen workload tasks completed in a timed set.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifteen timed workload and scheduling tasks are completed and logged, including a rollback, a taint and toleration, and a static pod."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create, scale, update and roll back a deployment from the command line"
                - "Taint a node and schedule a pod onto it with a toleration and affinity"
                - "Make a pod unschedulable with large requests and diagnose it from events"
                - "Create a static pod on a worker node and confirm the mirror pod appears"
            - name: Services, DNS, network policies and Gateway API
              description: |-
                ## Purpose
                Networking tasks test whether you understand how traffic actually reaches a pod: service types and selectors, CoreDNS names, network policies that allow only the right sources, and ingress or Gateway API routes. Building each on your cluster and testing it from a throwaway pod is the only way to be sure the rule does what you meant.

                ## Milestones
                1. ClusterIP, NodePort and headless services created and reached by DNS name.
                2. A default-deny network policy applied and then opened for one labelled source.
                3. An ingress or Gateway API route sending traffic to a service by path.
                4. Every rule tested from a temporary pod, with results recorded.

                ## Notes
                Network policies need a CNI plugin that enforces them. Check yours does before assuming your policy is wrong.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Services, a default-deny network policy with one allowed source and a path-based route are built and each is tested from a temporary pod."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create ClusterIP, NodePort and headless services and resolve each by DNS"
                - "Apply a default-deny network policy and allow one labelled source"
                - "Route traffic to a service by path with an ingress or Gateway API resource"
                - "Test every rule from a temporary busybox pod and record the result"
            - name: Persistent volumes, claims and storage classes
              description: |-
                ## Purpose
                Storage tasks look simple until a claim stays pending because its access mode, size or storage class does not match any volume. Practising static and dynamic provisioning, reclaim policies and mounting claims into pods teaches you to read why a binding failed rather than guessing.

                ## Milestones
                1. A hostPath persistent volume and a matching claim bound by hand.
                2. A storage class used to provision a volume dynamically.
                3. A pending claim diagnosed and fixed from its events.
                4. A claim mounted into a pod and data shown to survive a pod restart.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Static and dynamic provisioning both work on your cluster, a pending claim has been diagnosed and fixed, and data survives a pod restart."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a hostPath persistent volume and bind a matching claim"
                - "Install a simple provisioner and create a storage class"
                - "Break a claim with a wrong access mode and fix it from the events"
                - "Mount a claim into a pod and check data survives a restart"
            - name: Helm and Kustomize for administrator tasks
              description: |-
                ## Purpose
                Today's curriculum expects administrators to install and manage packaged components, which in practice means Helm charts and Kustomize overlays. Learning just enough of each to install, upgrade, list and roll back a release, or to patch a base with an overlay, covers what an exam task is likely to ask without becoming a packaging expert.

                ## Milestones
                1. A chart repository added and a chart installed into its own namespace with custom values.
                2. The release upgraded, listed and rolled back.
                3. A Kustomize overlay that changes replicas and labels applied with kubectl.
                4. Five timed Helm and Kustomize tasks completed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five timed Helm and Kustomize tasks are logged, including an install with custom values, a rollback and an overlay applied with kubectl."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add a chart repository and install a chart with a custom values file"
                - "Upgrade, list and roll back the Helm release"
                - "Write a Kustomize overlay that changes replicas and labels"
                - "Apply the overlay with kubectl and check the result"
            - name: Node and kubelet troubleshooting at the terminal
              description: |-
                ## Purpose
                A node marked NotReady is one of the most common CKA troubleshooting scenarios, and fixing it means leaving kubectl behind and using SSH, systemctl, journalctl and crictl. Practising the faults that cause it, a stopped kubelet, a wrong config path, an expired certificate or a dead container runtime, builds a calm, ordered way in.

                ## Milestones
                1. SSH to a node and back again done without losing track of which machine you are on.
                2. Four node faults introduced and fixed: stopped kubelet, bad kubelet config, stopped runtime and wrong CNI files.
                3. Container status and logs read with crictl when the API server is unavailable.
                4. A written order of checks for a NotReady node.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four distinct node faults have each been fixed from the terminal, and a written order of checks for a NotReady node exists."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Stop the kubelet on a worker and bring the node back to Ready"
                - "Break the kubelet config path and find the cause in journalctl"
                - "Read container logs with crictl while the API server is down"
                - "Write your order of checks for a NotReady node"
            - name: Application and control plane failure diagnosis
              description: |-
                ## Purpose
                Beyond broken nodes, CKA troubleshooting covers pods in CrashLoopBackOff, services with no endpoints, CoreDNS failures and control plane pods that will not start after a bad manifest edit. Working through each type with kubectl describe, logs, events and the static pod folder gives you a reliable first five minutes for any fault.

                ## Milestones
                1. A crashing pod diagnosed from its logs and previous container logs.
                2. A service with no endpoints fixed by correcting its selector.
                3. A CoreDNS fault found and fixed using a test pod lookup.
                4. A broken API server manifest repaired and the API server shown to be back.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Crashing pods, empty endpoints, a DNS fault and a broken API server manifest have each been diagnosed and fixed on your cluster."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Diagnose a crashing pod using current and previous container logs"
                - "Fix a service with no endpoints by correcting its selector"
                - "Break CoreDNS and find the fault from a test pod lookup"
                - "Introduce a typo in the API server manifest and repair it"
            - name: CNI plugins, CRDs and operators basics
              description: |-
                ## Purpose
                Recent curriculum revisions ask administrators to install and configure cluster components such as CNI plugins, and to understand custom resource definitions and the operators that use them. Installing a second CNI plugin on a fresh cluster and working with a small operator's custom resources gives enough depth for exam tasks.

                ## Milestones
                1. Two CNI plugins installed on separate fresh clusters and their pods checked.
                2. The CNI configuration folder on a node located and read.
                3. A custom resource definition installed and a custom resource created and listed.
                4. An operator installed and its custom resource used to create a workload.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two CNI plugins have been installed on fresh clusters and one operator's custom resource has been used to create a workload."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Install a different CNI plugin on a fresh cluster and check its pods"
                - "Read the CNI configuration files on a worker node"
                - "Install a custom resource definition and create a resource from it"
                - "Install a small operator and use its custom resource"
            - name: Imperative commands versus YAML from scratch
              description: |-
                ## Purpose
                Typing a full manifest by hand is slow and error-prone; generating one with kubectl and client dry-run, then editing only what the task needs, is much faster. Deciding which objects you will always generate, which you will copy from the docs and which you will create purely imperatively, then drilling that choice, settles one of the biggest speed questions.

                ## Milestones
                1. A list of objects split into generate and edit, copy from docs, or imperative only.
                2. Dry-run generation practised for deployments, services, pods, jobs and roles.
                3. Network policies and volumes practised by copying documentation examples.
                4. A timed comparison of hand-typed versus generated manifests recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list assigns each common object to generate, copy or imperative, backed by a timed comparison you recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the objects you expect to create in the exam"
                - "Time creating a deployment by hand versus with client dry-run output"
                - "Mark each object as generate, copy from docs or imperative only"
                - "Drill the three objects you were slowest to create"
            - name: Exam task triage and time strategy
              description: |-
                ## Purpose
                CKA tasks carry different weights and some are far quicker than others, so working strictly in order can leave easy marks untouched at the end. A simple rule for when to skip and flag a task, plus the habit of switching context at the start of every task, protects the score when one problem refuses to give way.

                ## Milestones
                1. A rule written for the maximum minutes on one task before flagging it.
                2. A habit of copying and running the context switch command at the start of every task.
                3. A plan for the final fifteen minutes: flagged tasks, then checks.
                4. The strategy used in two timed mocks and adjusted after each.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written time strategy with a skip rule and a final fifteen-minute plan has been used and adjusted in two timed mocks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide how many minutes you will spend on one task before flagging it"
                - "Practise running the context switch command at the start of every task"
                - "Write a plan for the last fifteen minutes of the exam"
                - "Use the strategy in your next mock and note what to change"
            - name: Exam readiness decision from mock scores
              description: |-
                ## Purpose
                Booking too early wastes a sitting and booking too late lets skills go stale while you wait to feel ready. Setting a clear threshold in advance, such as two consecutive mocks comfortably above the passing score with time left, makes the booking decision a check against evidence rather than nerves.

                ## Milestones
                1. A readiness threshold written down before the first full mock.
                2. Your last three mock results compared against the threshold.
                3. Any domain still below target named with a dated fix.
                4. A go or wait decision recorded with the date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or wait decision compares your last three mock results against a readiness threshold written in advance."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness threshold for score and time left"
                - "Compare your last three mock results against the threshold"
                - "Name any domain still below target and set a date to fix it"
                - "Record your go or wait decision with today's date"
            - name: Online proctored exam room and machine check
              description: |-
                ## Purpose
                The CKA is taken online under remote proctoring, and candidates lose sittings to webcams, blocked software, a second monitor or a cluttered desk. Running the official system check on the machine and connection you will use, and setting up the room to the handbook's rules weeks ahead, removes problems that have nothing to do with Kubernetes.

                ## Milestones
                1. The official system compatibility check passed on the exact machine and network you will use.
                2. Webcam, microphone and screen size confirmed to meet the handbook.
                3. The room cleared to the handbook's rules, with a plan for others in the house.
                4. Copy and paste shortcuts in the exam desktop practised in any practice environment offered.

                ## Notes
                Use a personal machine if you can. Work laptops often have security software or policies that block the proctoring app.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The official system check has passed on the machine and network you will use, and the room meets the handbook's rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run the official system compatibility check on your exam machine"
                - "Read the handbook's room and desk rules and clear the space to match"
                - "Check webcam, microphone and screen against the requirements"
                - "Agree with your household how the room stays private during the exam"
            - name: Exam purchase and discount timing
              description: |-
                ## Purpose
                Exam fees are significant, and the Linux Foundation often runs discounts and bundles with courses or other Kubernetes exams. Knowing the eligibility window after purchase and what the purchase includes, such as a retake or simulator sessions, lets you buy at a good price without starting a clock you are not ready for.

                ## Milestones
                1. The current fee and what it includes noted from the official page.
                2. The eligibility period after purchase written down.
                3. Any bundle or seasonal discount compared against buying the exam alone.
                4. A purchase date chosen that fits your study calendar.

                ## Notes
                Start from the **Purchase decision** template. Only buy a bundle with another exam if you have a real plan to sit it inside the eligibility window.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase date and option are recorded, with the fee, inclusions and eligibility window taken from the official page."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the current CKA fee and what the purchase includes"
                - "Write down the eligibility period that starts on purchase"
                - "Compare any current bundle or discount against the exam alone"
                - "Pick a purchase date that fits your study calendar"
            - name: Employer sponsorship case for the CKA
              description: |-
                ## Purpose
                Many employers pay for the CKA and give study time if someone asks with a clear link to the work. A one-page case naming the clusters you run or will run, the incidents the skills would shorten and the full cost, gives your manager something easy to approve.

                ## Milestones
                1. Your company's training budget or certification policy found.
                2. A one-page case written covering cost, time and the link to current platform work.
                3. The case discussed with your manager.
                4. The outcome and any conditions, such as a service commitment, written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page sponsorship case has been discussed with your manager and the decision and any conditions are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your company's training or certification policy"
                - "Ask the agent to draft a one-page case linking the CKA to your platform work"
                - "Edit the case to add the real cost and study hours"
                - "Book time with your manager to discuss it"
            - name: Using the official exam simulator sessions well
              description: |-
                ## Purpose
                Buying the CKA has typically included access to a simulator that is harder than the real exam, with a limited number of sessions that each stay open for a set time. Using the first session mid-plan to find gaps and the second close to the exam as a final check gets far more from it than burning both in the first week.

                ## Milestones
                1. What your purchase includes and how long each session stays open confirmed.
                2. The first session placed about two-thirds of the way through your plan.
                3. Every task in the first session reviewed against the provided solutions.
                4. The second session sat in the final ten days and its weak spots fixed.

                ## Notes
                Expect a lower score than in the real exam. The simulator is set hard on purpose; judge it by what you learn, not the number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Both simulator sessions are used at planned points, with every task reviewed against the solutions and the weak spots logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm how many simulator sessions you have and how long each stays open"
                - "Put the first session two-thirds of the way through your study calendar"
                - "Review every simulator task against the provided solution"
                - "Add each simulator weak spot to your mistake log"
            - name: Booking the CKA exam slot
              description: |-
                ## Purpose
                Popular weekend and evening slots fill early, and a booked date sharpens the last weeks of study. Booking once the readiness decision says go, at a time of day when you are usually sharp and the house is quiet, sets the end point for the final fortnight plan.

                ## Milestones
                1. The exam purchased and eligibility confirmed in your account.
                2. A slot booked at a time of day you are usually alert.
                3. The confirmation saved with the time converted to your local time zone.
                4. The date blocked in your work and family calendars.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A confirmed CKA exam slot is saved with the local time and blocked in work and family calendars."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your eligibility status in the exam portal"
                - "Book a slot at a time of day you usually feel sharp"
                - "Save the confirmation and check the time zone shown"
                - "Block the exam date in your work and family calendars"
            - name: Final fourteen days before the CKA
              description: |-
                ## Purpose
                The last two weeks are for sharpening, not new topics: daily short mocks, the weakest domains, the terminal set-up and the exam strategy. A written fortnight plan with lighter final days keeps you sharp without arriving exhausted.

                ## Milestones
                1. A day-by-day plan for the final fourteen days written down.
                2. A short timed task set done every day.
                3. The two weakest domains drilled with nothing new started.
                4. The last two days kept light, with the system check repeated.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fourteen-day plan is completed with a short timed set logged each day and the system check repeated in the final two days."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a day-by-day plan for the last fourteen days"
                - "Do a five-task timed set on your weakest domains @recurring(daily)"
                - "Repeat the official system check two days before the exam"
                - "Keep the last evening for rest and the terminal set-up only"
            - name: CKA exam day run sheet
              description: |-
                ## Purpose
                Exam day goes wrong in small ways: the ID does not match the booking name, the check-in takes longer than expected, or the first task is a hard one and nerves take over. A one-page run sheet covering check-in, the first minute of set-up and your time strategy gives you something to follow when adrenaline is high.

                ## Milestones
                1. ID checked against the name on the booking.
                2. A run sheet written covering check-in time, room set-up, first-minute terminal set-up and time strategy.
                3. Water, power and network backup arranged where the rules allow.
                4. The exam sat and the run sheet followed.
              priority: high
              deadlineOffsetDays: 92
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat following a written run sheet, with ID verified against the booking beforehand."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your ID name matches the name on the exam booking exactly"
                - "Write a one-page run sheet for check-in, set-up and time strategy"
                - "Plan to start check-in early, as the handbook advises"
                - "Clear the desk and test the connection an hour before the exam"
            - name: CKA retake plan after a failed attempt
              description: |-
                ## Purpose
                Plenty of strong engineers fail the CKA once, usually on time or on one domain rather than on general knowledge. Writing down what happened within a day, while the tasks are fresh and without breaking the exam's confidentiality rules, and booking the retake inside a sensible window, turns a fail into a short, targeted plan.

                ## Milestones
                1. Notes written within a day on which domains and task types cost the most time.
                2. The retake terms and window checked in your account.
                3. A focused four to six week plan written for the weak domains.
                4. The retake booked and sat.

                ## Notes
                Start from the **Remediation plan** template. Do not write down or share exam questions; the candidate agreement forbids it. Note domains and task types only.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written remediation plan targets the weak domains from the first attempt and the retake is booked within the allowed window."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Note which domains and task types cost you most, without recording questions"
                - "Check your retake terms and window in the exam portal"
                - "Write a four to six week plan aimed at those domains"
                - "Book the retake once two mocks pass your readiness threshold"
            - name: Certificate, badge and profile update after passing
              description: |-
                ## Purpose
                Results arrive by email some hours after the exam, with a certificate and a digital badge that employers can verify. Saving both, adding the credential ID and expiry date to your records and updating your CV and profiles the same week puts the effort to work.

                ## Milestones
                1. The certificate and badge saved with the credential ID.
                2. The expiry date added to your certification records with a reminder well before it.
                3. Your CV and professional profiles updated with the verifiable badge link.
                4. Your manager and team told, with one lesson you will apply at work.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The certificate and badge are saved, the expiry date is in your records and your CV and profiles show the verifiable credential."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the certificate and accept the digital badge"
                - "Record the credential ID and expiry date with a reminder before it"
                - "Add the badge link to your CV and professional profiles"
                - "Share one lesson from your study with your team"
            - name: CKA plan for a Linux sysadmin
              description: |-
                ## Purpose
                Sysadmins arrive with the terminal skills many CKA candidates lack, systemd, logs, networking and vim, but often think in servers rather than declarative objects and controllers. A plan that skims the node troubleshooting and spends the saved hours on workloads, RBAC and network policies uses that head start well.

                ## Milestones
                1. Your skills audit reviewed to confirm which Linux rows are already strong.
                2. Study weeks moved from node troubleshooting to workloads and RBAC.
                3. A habit of checking the desired state in objects before touching a node.
                4. Two mocks where object tasks are as fast as node tasks.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your study calendar has been rebalanced toward object tasks, and two mocks show object tasks as fast as node tasks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Mark the Linux rows in your skills audit that are already strong"
                - "Move study weeks from node faults to workloads, RBAC and policies"
                - "Practise reading object status and events before opening an SSH session"
                - "Compare your object and node task times in the next two mocks"
            - name: CKA plan for an application developer
              description: |-
                ## Purpose
                Developers who deploy to Kubernetes often know deployments, config maps and services well but have never seen a static pod manifest, an etcd certificate or a kubelet log. A plan that front-loads cluster architecture, kubeadm and node troubleshooting, with time to practise Linux terminal basics, closes the gap that usually sinks developer candidates.

                ## Milestones
                1. Cluster architecture, upgrades, etcd and node troubleshooting placed in the first half of the plan.
                2. Linux basics such as systemctl, journalctl, file permissions and vim practised weekly.
                3. Two full kubeadm builds done without help.
                4. A mock where cluster administration tasks score at least as well as workload tasks.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two unaided kubeadm builds are logged and a mock shows cluster administration tasks scoring at least as well as workload tasks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Move cluster architecture and node troubleshooting into the first half of the plan"
                - "Practise systemctl, journalctl and vim for half an hour"
                - "Build a kubeadm cluster twice without looking at a course"
                - "Compare cluster administration and workload scores in your next mock"
            - name: CKA study around young children and a full-time job
              description: |-
                ## Purpose
                Working parents rarely get the long evening blocks most CKA plans assume. A plan built on short early-morning or after-bedtime sessions, a browser-based lab that starts in a minute, and one protected longer block each weekend agreed with a partner, makes steady progress possible on real family time.

                ## Milestones
                1. Two realistic slots per weekday identified, even if only thirty minutes each.
                2. A lab set-up that is ready to type into within two minutes.
                3. One weekend block of at least two hours agreed with your partner or family.
                4. The exam date checked against school holidays and family events.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks show at least five short sessions and one agreed weekend block, with the exam date clear of family commitments."
                cadence: rolling
              tasks:
                - "Find two thirty-minute slots on weekdays that you can actually keep"
                - "Set up a lab you can start typing into within two minutes"
                - "Agree a two-hour weekend block with your partner or family"
                - "Run the agreed weekend lab block for rebuilds or mocks @recurring(weekly:sat)"
            - name: CKA from the Caribbean with power and internet backups
              description: |-
                ## Purpose
                Candidates in Trinidad and Tobago, Jamaica, Barbados, Guyana and the wider region sit the same online exam, but power cuts, upload speed and slot times shown in another time zone add risks a candidate elsewhere may not face. Planning a backup power source, testing the connection at the hour you will sit and checking card payment for the fee ahead of time removes them.

                ## Milestones
                1. Your upload and download speed tested at the same hour as your planned slot on three days.
                2. A backup for power, such as a UPS for the router and laptop, arranged.
                3. A backup connection, such as a mobile hotspot, tested against the system check.
                4. The booking time confirmed in your local time zone.
                5. Payment for the exam fee in foreign currency checked with your bank or card.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Connection tests at your slot hour, a power backup and a tested backup connection are in place, and the fee payment method is confirmed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Test your internet speed at the hour of day you plan to sit"
                - "Arrange a UPS or other backup power for the router and laptop"
                - "Run the system check over a mobile hotspot as a fallback"
                - "Check your card works for a foreign currency exam payment"
                - "Retest your connection speed at the planned exam hour @recurring(monthly:2)"
            - name: Sitting the CKA in a second language
              description: |-
                ## Purpose
                Reading a long task description quickly matters in a timed performance exam, and a misread instruction costs the whole task. Checking which languages the exam is offered in, and practising with English task wording and English documentation if that is your route, protects time for the actual work.

                ## Milestones
                1. The languages the exam is currently offered in checked on the official page.
                2. A choice made between your first language and English, with reasons.
                3. A glossary of thirty terms common in task wording, in both languages.
                4. Two mocks sat in the chosen language with reading time noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An exam language is chosen in writing, a thirty-term glossary exists and two mocks have been sat in that language."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check which languages the CKA is offered in on the official page"
                - "Choose your exam language and note why"
                - "Build a glossary of thirty common task-wording terms"
                - "Sit your next mock in the chosen language and note reading time"
            - name: Running a CKA study cohort for a platform team
              description: |-
                ## Purpose
                Team leads who want several engineers certified get better results from a shared cohort than from individual vouchers handed out and forgotten. A cohort with a shared cluster plan, a weekly session where members set each other tasks and a visible progress board keeps everyone moving and spreads cluster knowledge across the team.

                ## Milestones
                1. Three to eight engineers enrolled with a target exam month each.
                2. A shared practice environment with one namespace or cluster per member.
                3. A weekly cohort session where members set and solve timed tasks.
                4. A progress board showing mock scores and booking status.
                5. Every member booked or passed by the cohort's end date.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort of at least three engineers has met weekly for eight weeks and every member is booked or has passed by the end date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your team who wants to sit the CKA in the next six months"
                - "Set up one practice cluster or namespace for each member"
                - "Run the weekly cohort session of timed tasks @recurring(weekly:thu)"
                - "Update the progress board with mock scores and bookings"
            - name: Highly available control plane with stacked etcd
              description: |-
                ## Purpose
                Your practice cluster has one control plane, but production clusters usually run three behind a load balancer. Building a highly available kubeadm cluster with stacked etcd, then losing one control plane node on purpose, shows how quorum, certificates and upgrades behave once a cluster carries real traffic and prepares you for the work after the exam.

                ## Milestones
                1. A load balancer in front of three control plane nodes.
                2. The cluster built with kubeadm using a shared control plane endpoint.
                3. One control plane node stopped and the cluster shown to keep working.
                4. etcd member health checked before and after the failure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-control-plane kubeadm cluster survives the loss of one node, with etcd member health recorded before and after."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set up a simple load balancer for the control plane endpoint"
                - "Build a kubeadm cluster with three control plane nodes and stacked etcd"
                - "Stop one control plane node and check the cluster keeps serving"
                - "Check etcd member health before and after the failure"
            - name: Cluster hardening as a bridge toward CKS
              description: |-
                ## Purpose
                Once the CKA is passed, the security-focused CKS is the natural next step, and it requires a valid CKA. Applying a handful of hardening steps to your own cluster, such as pod security admission, audit logging, tighter RBAC and network policies by default, shows where your security gaps are before you commit to another exam.

                ## Milestones
                1. Pod security admission labels applied to two namespaces.
                2. API server audit logging turned on with a simple policy.
                3. Default-deny network policies applied across your workload namespaces.
                4. A short list of security gaps you would need to close for the CKS.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Pod security admission, audit logging and default-deny policies are running on your cluster and a written CKS gap list exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Apply pod security admission labels to two namespaces"
                - "Turn on API server audit logging with a simple policy"
                - "Apply default-deny network policies across workload namespaces"
                - "Write a list of security gaps to close before the CKS"
            - name: Production runbooks from CKA lab notes
              description: |-
                ## Purpose
                Troubleshooting checklists, upgrade steps and etcd restore drill you built for the exam are exactly what an on-call engineer needs at three in the morning. Turning them into reviewed runbooks for your team's real clusters, matched to your environment's paths and tools, keeps the knowledge useful after the certificate.

                ## Milestones
                1. Three lab notes chosen for conversion: node NotReady, cluster upgrade and etcd restore.
                2. Each adapted to your production clusters' paths, tools and change process.
                3. Each runbook reviewed by a colleague and tested in a non-production cluster.
                4. The runbooks stored where on-call engineers will find them.

                ## Notes
                Never test an etcd restore or upgrade runbook on a production cluster first. Use a staging or throwaway cluster and follow your change process.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three runbooks adapted from lab notes are peer reviewed, tested outside production and stored in the team's runbook location."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three lab notes worth turning into team runbooks"
                - "Adapt each to your production paths, tools and change process"
                - "Test each runbook in a non-production cluster with a colleague"
                - "Review the runbooks against the current cluster version @recurring(quarterly)"
---

# CKA Kubernetes Administrator

This area is for engineers preparing for the Certified Kubernetes Administrator exam, a hands-on test where you fix and build real clusters at a terminal against the clock. It starts with foundations (the curriculum and candidate handbook, a skills audit, a baseline timed task set, a practice cluster you built yourself, a fast terminal and a dated plan), then the weekly study, drill and rebuild machinery, the skills behind each curriculum domain from kubeadm upgrades and etcd restores to RBAC, network policies, storage and node troubleshooting, the decisions about speed technique, readiness and the exam room, booking and exam day, plans for sysadmins, developers, working parents, Caribbean candidates, second-language candidates and team leads, and specialist work such as highly available control planes and production runbooks.

The rhythm is study blocks on set weekdays, a short daily kubectl drill, a weekly cluster rebuild, a weekly mistake review and partner session, a monthly timed mock, bill check, break-and-fix session and etcd restore, and a quarterly look for curriculum and Kubernetes version changes. The Skills matrix, Purchase decision, Metrics log and Remediation plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
