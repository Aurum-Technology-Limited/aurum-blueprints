---
id: tech-certifications.certification-home-lab
name: Certification Home Lab
description: "A practice lab built for the exams you are sitting: a hypervisor host, an isolated lab network, cloud accounts with billing alerts, rebuildable images, lab notes tied to each objective and the routines that keep it cheap and safe."
category: personal
version: 1.0.0
tags: [tech-certifications, certification-home-lab, engineer, student, home-lab, virtualisation, cloud-free-tier, hands-on-practice]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - operational-checklist
    - skills-matrix
    - purchase-decision
    - risk-register
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Certification Home Lab
          description: "Building a home lab for certification practice: virtual machines, cloud free tiers, spare network gear, budget alerts and lab notes linked to each exam objective."
          projects:
            - name: Lab goals mapped to your next two exams
              description: |-
                ## Purpose
                A lab built without a target grows into a pile of half-finished virtual machines that never touch an exam objective. Writing down the next two exams you will sit, and which of their objectives actually need hands-on practice, decides what the lab must do in the next six months and what it can safely ignore.

                ## Milestones
                1. The next two exams named, with the exam code and planned month for each.
                2. The current official objectives for both downloaded from the awarding body's website.
                3. Every objective marked as needing a lab, needing reading only, or already practised at work.
                4. A one-paragraph lab brief saying what the lab must run to cover the marked objectives.

                ## Notes
                Performance-based exams such as CKA, RHCSA and the OffSec exams reward far more lab time than multiple-choice ones. Weight the lab towards those if they are on your list.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written lab brief naming two exams, their codes and the objectives that need hands-on practice, saved at the top of your lab notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the next two exams you plan to sit and the month for each"
                - "Download the current objectives for both from the awarding body's website"
                - "Mark every objective as lab, reading only, or already done at work"
                - "Write a one-paragraph brief of what the lab must run"
            - name: Inventory of kit you already own
              description: |-
                ## Purpose
                Most people already have enough for a first lab: an old laptop with 16 GB of memory, a retired desktop, a spare router or a Raspberry Pi in a drawer. Listing every device with its processor, memory, storage and network ports before buying anything stops you spending money on a capability already sitting on a shelf.

                ## Milestones
                1. Every candidate device listed with processor, memory, storage, network ports and age.
                2. Each device checked for hardware virtualisation support switched on in the firmware.
                3. Devices marked as lab host, lab client, network kit or not worth using.
                4. The gap between what you own and what the lab brief needs written in two or three lines.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A device inventory with specifications and a lab role for each item, plus a short written gap against the lab brief."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every spare laptop, desktop, router and single-board computer in one place"
                - "Record processor, memory, storage and ports for each device"
                - "Check each candidate host has virtualisation enabled in the firmware settings"
                - "Update the inventory with anything added, sold or broken @recurring(yearly)"
            - name: Home lab budget and monthly spending cap
              description: |-
                ## Purpose
                Lab spending leaks from three places at once: second-hand kit that looks cheap, cloud resources left running overnight, and the extra electricity of a server that never sleeps. Setting one figure for kit and one monthly cap for cloud and power, agreed before the first purchase, keeps the lab a study tool rather than a hobby that quietly eats the exam fee.

                ## Milestones
                1. A one-off kit budget and a monthly running cap written down.
                2. The cloud share of the monthly cap set lower than the alert threshold you will configure.
                3. A rough monthly electricity cost estimated for the lab host from its wattage and your tariff.
                4. A simple spending log started with the first entry recorded.

                ## Notes
                Students can often get cloud credits through a university programme or a student developer pack. Check what your institution offers before paying for anything.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written kit budget and monthly running cap, an electricity estimate for the host and a spending log with at least one entry."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide a one-off kit budget and a monthly running cap"
                - "Estimate the lab host's monthly electricity cost from its wattage and your tariff"
                - "Start a spending log with kit, cloud and power columns"
                - "Add the month's lab spending to the log and compare it with the cap @recurring(monthly:27)"
            - name: Choosing a hypervisor for the lab host
              description: |-
                ## Purpose
                Proxmox VE, Hyper-V, VirtualBox, VMware Workstation and KVM with libvirt all run labs well, but they differ in how they handle nested virtualisation, virtual switches, snapshots and the operating system underneath. Picking one deliberately, against the exams you are sitting, avoids rebuilding everything three months in when you discover it cannot run the network emulator or nested cluster you need.

                ## Milestones
                1. Three hypervisors shortlisted and compared on nested virtualisation, networking, snapshots and host operating system.
                2. Each one checked against the lab brief, for example nested virtualisation for a Kubernetes or Hyper-V objective.
                3. One hypervisor chosen and the reason recorded in the lab notes.
                4. The chosen hypervisor installed and a first test virtual machine booted.

                ## Notes
                A type 2 hypervisor on your everyday laptop is fine to start with. Move to a dedicated host running a type 1 hypervisor when the lab needs to stay up between sessions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded hypervisor choice with reasons tied to the lab brief, and a test virtual machine booted on it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List what the lab brief needs from a hypervisor in five lines"
                - "Compare three hypervisors against that list in a small table"
                - "Install the chosen hypervisor on the lab host"
                - "Boot a test virtual machine and take a first snapshot"
            - name: Isolating the lab network from the household
              description: |-
                ## Purpose
                Any lab running a rogue DHCP server, a vulnerable image or a misconfigured DNS forwarder can break the family's internet or expose a weak machine to everyone on the Wi-Fi. Putting the lab behind its own subnet or VLAN, with no inbound ports opened on the home router, means you can break anything inside it without anyone else noticing.

                ## Milestones
                1. A separate lab subnet or VLAN in place, with the household on a different one.
                2. Lab DHCP and DNS confined so they cannot answer requests from household devices.
                3. No port forwards from the home router into the lab, confirmed by checking the router settings.
                4. A small diagram of the household and lab networks saved in the lab notes.

                ## Notes
                If your router cannot do VLANs, an internal-only virtual switch on the hypervisor, with one virtual router doing NAT out, gives most of the same protection for free.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lab traffic runs on its own subnet or VLAN with no inbound port forwards, and a diagram of both networks is in the lab notes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check what your home router supports for VLANs, guest networks and port forwards"
                - "Create a separate lab subnet or internal virtual switch"
                - "Confirm the router has no port forwards pointing into the lab"
                - "Draw the household and lab networks and save the diagram"
            - name: Cloud account guardrails and budget alerts
              description: |-
                ## Purpose
                The classic lab disaster is a cloud bill for hundreds after a load balancer, NAT gateway or GPU instance was left running over a holiday, or after an access key was pushed to a public repository. Before the first cloud lab, lock down the account owner login, create a separate everyday user and set budget alerts well below what would hurt.

                ## Milestones
                1. Multi-factor authentication switched on for the owner or root login of every lab cloud account.
                2. A separate everyday user or role created so the owner login is not used for labs.
                3. Budget alerts set at a low figure and at your monthly cap, sent to an email you read.
                4. No long-lived access keys stored in code folders, confirmed by a search of your projects.

                ## Notes
                Free tier terms differ by provider and change, and many services are not covered at all. Read the current terms on each provider's site rather than trusting an old course video.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every lab cloud account has MFA on the owner login, a separate lab user and at least two budget alerts below your monthly cap."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn on multi-factor authentication for each cloud account owner login"
                - "Create a separate everyday lab user or role in each account"
                - "Set two budget alerts, one low and one at your monthly cap"
                - "Search your code folders for stored cloud access keys and remove any found"
            - name: Lab notes system linked to exam objectives
              description: |-
                ## Purpose
                Six weeks after a lab you will not remember which command fixed the broken route or why the pod would not schedule, and the exam will ask exactly that. A notes system where every lab entry is tagged with the objective it practised turns scattered sessions into revision material you can search the week before the exam.

                ## Milestones
                1. One place chosen for lab notes, with a folder or tag for each exam.
                2. A standard lab entry layout with objective, goal, steps, what broke and the fix.
                3. The objective codes from both exams available as tags.
                4. Three past or first lab sessions written up in the new layout.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lab notes space with an entry layout and objective tags for both target exams, holding at least three completed entries."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose where lab notes will live and create a section per exam"
                - "Write the standard entry layout as a reusable note"
                - "Add the objective codes from both exams as tags"
                - "Write up three lab sessions in the new layout"
            - name: IP plan, naming scheme and lab secrets vault
              description: |-
                ## Purpose
                By the third rebuild, labs with no address plan end up with two machines on the same IP and passwords scribbled in a text file on the desktop. Fixing an address range per purpose, a hostname pattern and one password manager vault for lab credentials makes every later build faster and keeps throwaway lab passwords away from your real accounts.

                ## Milestones
                1. Address ranges assigned for servers, clients, network kit and DHCP pools.
                2. A hostname pattern written down, for example role, site and number.
                3. A separate vault or folder in your password manager holding only lab credentials.
                4. Existing lab machines renamed or readdressed to fit the plan.

                ## Notes
                Never reuse a real password in the lab. Lab machines get snapshotted, exported and shared in write-ups, and anything typed into them should be treated as public.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written IP plan and hostname pattern in the lab notes, with every lab credential held in a dedicated password manager vault."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Assign address ranges for servers, clients, network kit and DHCP"
                - "Write a hostname pattern and an example for each role"
                - "Create a lab-only vault in your password manager"
                - "Move any lab passwords stored in plain text into the vault and delete the file"
            - name: Golden images and base virtual machine templates
              description: |-
                ## Purpose
                Installing an operating system from an ISO every time you need a fresh server burns the first forty minutes of a two-hour session. A small set of patched base templates, one per operating system the exams use, lets you clone a clean machine in a minute and spend the session on the objective.

                ## Milestones
                1. The operating systems needed by the target exams listed, for example a RHEL-compatible distribution, Ubuntu and a Windows Server evaluation.
                2. One base template built and patched for each, with a lab admin account and remote access enabled.
                3. Each template converted to a reusable template or exported image on the hypervisor.
                4. A clone of each template booted and checked in under five minutes.

                ## Notes
                Windows Server and some vendor images are offered as time-limited evaluations. Note the expiry date when you build the template and plan to rebuild before it runs out.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A patched base template exists for every operating system the target exams need, and a clone of each boots in under five minutes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the operating systems your target exams use"
                - "Build and patch one base machine for each operating system"
                - "Convert each base machine into a hypervisor template"
                - "Refresh each template with current patches and note the date @recurring(quarterly)"
            - name: Snapshot before every exercise routine
              description: |-
                ## Purpose
                Exam labs are about breaking things: misconfiguring SELinux, wiping a routing table, draining the wrong node. Taking a named snapshot before each exercise and rolling back afterwards means a mistake costs ten seconds instead of the rest of the evening, and you can repeat the same exercise until it is fast.

                ## Milestones
                1. A snapshot naming pattern agreed, for example the objective code and date.
                2. A pre-exercise snapshot taken at the start of the next five lab sessions.
                3. Old snapshots older than a month pruned so they do not fill the disk.
                4. One exercise repeated three times from the same snapshot with times recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five consecutive lab sessions begin with a named snapshot, and one exercise has three recorded attempts from the same restore point."
                cadence: rolling
              tasks:
                - "Write a snapshot naming pattern into your lab notes"
                - "Take a named snapshot before tonight's exercise"
                - "Delete snapshots more than a month old that you no longer need"
                - "Repeat one exercise three times from the same snapshot and log the times"
            - name: Two protected lab sessions every week
              description: |-
                ## Purpose
                Reading about a technology and configuring it are different skills, and the exam tests the second. Two fixed lab sessions a week, booked in the calendar like any other appointment and each tied to one objective, keep hands-on practice from being pushed out by video courses and practice questions.

                ## Milestones
                1. Two weekly lab slots of at least ninety minutes booked as repeating calendar events.
                2. Each session started with the objective it will cover written down.
                3. Eight weeks of sessions logged with a tick or a missed mark.
                4. A missed-session rule agreed, such as moving it within the same week rather than skipping.

                ## Notes
                Start from the **Habit tracker** template. A session that ends in a broken lab and a clear note of what broke still counts.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of lab sessions logged, with at least fourteen of sixteen held and each tied to an objective."
                cadence: rolling
              tasks:
                - "Book two repeating ninety-minute lab slots in your calendar"
                - "Pick the objective for the midweek session and write it down @recurring(weekly:tue)"
                - "Pick the objective for the weekend session and write it down @recurring(weekly:sat)"
                - "Decide what happens when a session is missed and write the rule down"
            - name: Monthly cloud bill and orphaned resource sweep
              description: |-
                ## Purpose
                Budget alerts tell you when money is already spent; a monthly sweep finds what will cost money next month. Elastic IPs, unattached disks, idle load balancers, old snapshots and forgotten storage buckets are the usual culprits, and they are easy to miss across several regions and providers.

                ## Milestones
                1. Last month's bill for every lab cloud account read line by line.
                2. Every region checked for running compute, unattached volumes, idle IP addresses and load balancers.
                3. Anything not needed this month deleted or stopped, with the action noted.
                4. The total compared with the cloud share of your monthly cap.

                ## Notes
                Tag every lab resource with the exam and the date you created it. The sweep then becomes a filter on old tags rather than an archaeology dig.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the cloud bill is reviewed, every region is checked for orphaned resources and the total is recorded against the cap."
                cadence: rolling
              tasks:
                - "Read last month's bill for every lab cloud account @recurring(monthly:3)"
                - "Check every region for unattached disks, idle IPs and stray load balancers"
                - "Delete or stop anything not needed this month and note it"
                - "Add a creation date and exam tag rule to your lab notes"
            - name: Patch and update cycle for lab hosts
              description: |-
                ## Purpose
                Lab hosts are often the least patched machine in the house: an old hypervisor, router firmware from three years ago and network emulator images nobody updates. A monthly patch slot for the host, the lab router and anything reachable from the household keeps the lab from becoming the weak point on your home network.

                ## Milestones
                1. A list of everything that needs patching: hypervisor, host firmware, lab router, management tools.
                2. A monthly patch evening scheduled and the first one completed.
                3. A snapshot or config backup taken before each patch run.
                4. Any device that can no longer receive updates flagged for retirement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A patch list exists and the hypervisor, host firmware and lab router have been patched within the last month, with backups taken first."
                cadence: rolling
              tasks:
                - "List everything in the lab that needs patching"
                - "Patch the hypervisor, host firmware and lab router @recurring(monthly:12)"
                - "Back up configurations before each patch run"
                - "Flag any device that no longer gets updates"
            - name: Lab configuration backup routine
              description: |-
                ## Purpose
                Rebuilding a lab is good practice once; losing three months of switch configs, cluster manifests and automation code to a dead SSD is just lost time. A backup routine that copies configs, code and notes off the lab host, and is tested by restoring one item, keeps the hard-won parts safe.

                ## Milestones
                1. The items worth backing up listed: device configs, manifests, automation code, notes and templates.
                2. A backup target off the lab host chosen, such as an external drive, a NAS or a private Git repository.
                3. The first full backup completed.
                4. One item restored from backup to prove it works.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Lab configs, code and notes are copied off the host each month, and at least one restore has been tested and noted."
                cadence: rolling
              tasks:
                - "List the lab items worth backing up"
                - "Choose a backup target that is not the lab host"
                - "Copy configs, code and notes to the backup target @recurring(monthly:20)"
                - "Restore one device config from backup to prove it works"
            - name: Cloud lab teardown checklist
              description: |-
                ## Purpose
                Most surprise bills come from a lab that was finished at midnight and not quite torn down. A short checklist run at the end of every cloud lab, plus a Sunday glance at the console for anything still running, closes the gap between finishing the exercise and stopping the meter.

                ## Milestones
                1. A teardown checklist written covering compute, storage, networking, IP addresses and keys.
                2. The checklist used at the end of three cloud labs in a row.
                3. Infrastructure code labs ending with a destroy command and a check that it succeeded.
                4. A weekly console check held for a month with nothing unexpected left running.

                ## Notes
                Start from the **Operational checklist** template. Keep it short enough to run when you are tired, because that is when you will need it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written teardown checklist used after three consecutive cloud labs, with four weekly console checks finding nothing unexpected."
                cadence: rolling
              tasks:
                - "Write a teardown checklist for compute, storage, networking and keys"
                - "Run the checklist at the end of your next cloud lab"
                - "Check every lab cloud console for anything still running @recurring(weekly:sun)"
                - "Add a destroy and verify step to every infrastructure code lab"
            - name: Friday lab write-up
              description: |-
                ## Purpose
                The details that matter in an exam, the exact flag, the file that held the setting, the error that pointed at the cause, fade within days. Ten minutes every Friday turning the week's lab sessions into short entries in your notes is the cheapest revision you will ever do.

                ## Milestones
                1. A Friday write-up slot in the calendar.
                2. Each week's sessions recorded with objective, commands used and what broke.
                3. One line per entry saying what you would do faster next time.
                4. Six weeks of write-ups completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive Fridays each have a lab write-up entry covering that week's sessions, tagged by objective."
                cadence: rolling
              tasks:
                - "Book a ten-minute Friday slot for lab notes"
                - "Write up the week's lab sessions with objective, commands and fixes @recurring(weekly:fri)"
                - "Add one line per entry on what you would do faster"
                - "Ask the agent to turn the month's write-ups into a one-page command summary"
            - name: Objective coverage map for the lab
              description: |-
                ## Purpose
                It is easy to spend four weekends perfecting one favourite topic while two objectives never get touched. A coverage map showing every lab-worthy objective, how many times you have practised it and when you last did, shows at a glance where the next session should go.

                ## Milestones
                1. Every lab-worthy objective from the lab brief listed in one table.
                2. Each objective given a count of sessions and a last-practised date.
                3. Objectives untouched for a month highlighted.
                4. The next month's sessions chosen from the gaps.

                ## Notes
                Start from the **Skills matrix** template. Three levels are enough: not yet, done once with notes, done from memory against the clock.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A coverage table of lab-worthy objectives with session counts and dates, updated monthly, with no objective untouched for more than two months."
                cadence: rolling
              tasks:
                - "Put every lab-worthy objective into one coverage table"
                - "Fill in session counts and last-practised dates from your notes"
                - "Update the coverage table and highlight objectives untouched for a month @recurring(monthly:25)"
                - "Choose next month's session topics from the gaps"
            - name: Free tier, trial and evaluation expiry calendar
              description: |-
                ## Purpose
                Cloud free tiers end, vendor trials stop after a fixed period, evaluation licences time out and student credits expire, often without much warning. One list of every time-limited thing in the lab, checked monthly, stops a working lab dying the week before the exam or a free account quietly starting to charge.

                ## Milestones
                1. Every free tier, trial, evaluation licence and credit balance listed with its start and end date.
                2. A calendar reminder set two weeks before each end date.
                3. A decision recorded for each: rebuild, pay, switch provider or let it lapse.
                4. The list reviewed monthly for new additions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated list of every time-limited lab resource with reminders two weeks before each expiry and a decision for each item."
                cadence: rolling
              tasks:
                - "List every free tier, trial, evaluation and credit with its dates"
                - "Set a reminder two weeks before each end date"
                - "Record whether you will rebuild, pay, switch or let each one lapse"
                - "Check the expiry list for new additions and upcoming dates @recurring(monthly:8)"
            - name: Power, heat and noise check for the lab
              description: |-
                ## Purpose
                Cheap rack-mount servers can draw more power than the fridge and sound like a hair dryer from the next room. Measuring the lab's real draw with a plug-in energy meter and checking heat and noise each quarter keeps the running cost honest and the household on side.

                ## Milestones
                1. A plug-in energy meter used to measure idle and busy draw of the lab host.
                2. The real monthly power cost worked out and compared with the budget estimate.
                3. Heat and noise noted at the lab location, with any complaints recorded.
                4. A shutdown or sleep schedule set for times the lab is not used.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Measured idle and busy power draw recorded, with the monthly cost compared with the budget and a sleep schedule in place."
                cadence: cyclic
              tasks:
                - "Borrow or buy a plug-in energy meter"
                - "Measure idle and busy draw of the lab host"
                - "Set the host to shut down or sleep when not used"
                - "Re-measure power draw and note heat and noise @recurring(quarterly)"
            - name: Quarterly lab review against the exam plan
              description: |-
                ## Purpose
                Exam plans move: a date slips, a new exam gets added, a pass means the CCNA topology can be retired. A short quarterly review of what the lab runs against what the next exams need frees resources, money and attention for what matters now.

                ## Milestones
                1. The lab brief compared with the current exam plan.
                2. Machines, topologies and cloud resources that serve no current exam listed.
                3. Each listed item archived, exported or deleted.
                4. The lab brief rewritten for the next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter the lab brief is updated against the exam plan and unused machines or resources are archived or removed."
                cadence: cyclic
              tasks:
                - "Compare the lab brief with your current exam plan @recurring(quarterly)"
                - "List machines and resources that serve no current exam"
                - "Archive, export or delete each listed item"
                - "Rewrite the lab brief for the coming quarter"
            - name: Hypervisor networking with bridges, NAT and internal switches
              description: |-
                ## Purpose
                Half of all lab problems are really virtual networking problems: a machine on NAT that cannot be reached, a bridge that leaks DHCP onto the home network, two VMs that cannot see each other. Learning how your hypervisor's bridged, NAT, host-only and internal networks behave makes every later build predictable.

                ## Milestones
                1. Bridged, NAT, host-only and internal network modes each tested with two virtual machines.
                2. A one-line summary of what each mode can and cannot reach written in the notes.
                3. A virtual router or firewall appliance routing between two internal networks.
                4. VLAN tagging tested on a virtual switch, if your hypervisor supports it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All four network modes tested and summarised in the notes, with a virtual router passing traffic between two internal networks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create two test machines on the same internal network"
                - "Test what each network mode can reach and note the result"
                - "Deploy a virtual router appliance between two internal networks"
                - "Try VLAN tags on a virtual switch and record what happened"
            - name: Rebuilding the lab from code
              description: |-
                ## Purpose
                Labs you can only rebuild by clicking through consoles are labs you will avoid breaking. Describing the core of it in code, with Vagrant, Terraform, Packer or the hypervisor's own API, means you can wipe it on Sunday and have it back before the coffee is cold, which is exactly the confidence performance exams need.

                ## Milestones
                1. One tool chosen for describing local machines and one for cloud resources.
                2. The base lab of three or four machines defined in code and stored in a repository.
                3. The lab destroyed and recreated from code with no manual steps.
                4. Rebuild time recorded and kept under thirty minutes.

                ## Notes
                Keep provider credentials and state files out of the repository. Add them to the ignore file before the first commit, not after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The base lab can be destroyed and rebuilt from code in a repository in under thirty minutes with no manual steps."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one tool for local machines and one for cloud resources"
                - "Create a private repository and add an ignore file for state and secrets"
                - "Define the base lab machines in code"
                - "Destroy and rebuild the lab from code and time it"
            - name: Configuring lab machines with Ansible or shell scripts
              description: |-
                ## Purpose
                Building the machines is only half of a rebuild: users, packages, services and firewall rules still have to be set up after first boot. Scripting that configuration once, with Ansible playbooks or plain shell, gives you the same starting point every time and doubles as practice for the automation objectives on Linux and networking exams.

                ## Milestones
                1. The post-install steps for each base machine listed.
                2. A playbook or script that applies them, stored with the lab code.
                3. The script run twice on the same machine with no errors or changes the second time.
                4. One network device or switch configured from a script, where the lab has one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A stored playbook or script configures each base machine from first boot and runs cleanly twice in a row."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the post-install steps for each base machine"
                - "Write a playbook or script that applies them"
                - "Run it twice and fix anything that changes on the second run"
                - "Ask the agent to review the playbook for steps that are not repeatable"
            - name: Containers and small clusters on the lab host
              description: |-
                ## Purpose
                Kubernetes and container objectives need a cluster you can break, but a full cloud cluster costs money every hour it exists. Running Docker or Podman and a small local cluster with kind, k3s or kubeadm on lab virtual machines gives you somewhere to drain nodes, break networking and restore etcd for nothing.

                ## Milestones
                1. A container runtime installed and a test container run on the lab host.
                2. A local multi-node cluster built with kind, k3s or kubeadm.
                3. The cluster torn down and rebuilt from your notes or code.
                4. Resource limits set so the cluster cannot starve the rest of the lab.

                ## Notes
                For the CKA, practise on a kubeadm cluster at some point, because the exam environment is closer to that than to a single-binary distribution.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A local multi-node cluster runs on lab virtual machines, has been rebuilt at least once and has resource limits set."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Install a container runtime and run a test container"
                - "Build a three-node local cluster on lab virtual machines"
                - "Set memory and processor limits on the cluster machines"
                - "Tear the cluster down and rebuild it from your notes"
            - name: Network emulation with GNS3, EVE-NG or Containerlab
              description: |-
                ## Purpose
                Packet Tracer covers a lot of CCNA, but routing protocols, automation and multi-vendor topologies need real network operating system images. Setting up an emulator on the lab host, with images you are licensed to use, lets you build a ten-router topology that would cost thousands in physical kit.

                ## Milestones
                1. One emulator chosen and installed on the lab host or in a dedicated virtual machine.
                2. Network operating system images obtained through a route you are licensed to use.
                3. A three-router topology built with a working routing protocol between them.
                4. The topology saved and exported so it can be reloaded later.

                ## Notes
                Images downloaded from random file-sharing sites are a licensing problem and a security risk. Use vendor developer programmes, free images or the emulator's own appliance library.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A network emulator runs a saved three-router topology using legitimately obtained images, with a routing protocol converged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose an emulator that suits your exams and host"
                - "Find a licensed source for the network images you need"
                - "Build a three-router topology with a working routing protocol"
                - "Export the topology so it can be reloaded"
            - name: Packet capture points in the lab
              description: |-
                ## Purpose
                Being able to see the traffic is what turns guessing into troubleshooting, and several networking and security exams expect you to read captures. Knowing where to capture in your lab, on a virtual switch, a bridge, a container interface or an emulator link, means Wireshark or tcpdump is one command away when something will not connect.

                ## Milestones
                1. Capture points identified for each lab network segment.
                2. A capture taken with tcpdump on a Linux machine and opened in Wireshark.
                3. A DHCP exchange, a DNS lookup and a TCP handshake each captured and labelled.
                4. Capture commands for each point saved in the lab notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Capture points documented for every lab segment, with labelled captures of DHCP, DNS and a TCP handshake saved."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List where traffic can be captured on each lab segment"
                - "Capture traffic with tcpdump and open it in Wireshark"
                - "Capture and label a DHCP exchange, a DNS lookup and a TCP handshake"
                - "Save the capture commands for each point in your notes"
            - name: Central logging and monitoring for the lab
              description: |-
                ## Purpose
                Without logs in one place, every lab fault means logging into five machines one at a time. A small syslog server or a Prometheus and Grafana stack collecting from the lab gives you one screen for faults, and doubles as practice for the monitoring and operations objectives that appear on most associate exams.

                ## Milestones
                1. A logging or monitoring virtual machine running on the lab network.
                2. Logs or metrics flowing from at least three lab machines and one network device.
                3. A dashboard showing host resources and service health.
                4. One alert configured, such as the lab host disk going above 85 percent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A monitoring machine collects from at least four lab sources, shows a dashboard and sends one working alert."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a logging and monitoring virtual machine"
                - "Send logs or metrics from three machines and one network device"
                - "Build a dashboard for host resources and service health"
                - "Glance at the lab dashboard and note anything odd @recurring(weekly:mon)"
            - name: Directory services lab with a domain controller
              description: |-
                ## Purpose
                Identity turns up across A+, Security+, Azure administrator and Linux exams, and it is hard to learn without a directory to join machines to. A small domain with an evaluation Windows Server domain controller or a Samba directory, plus one Windows and one Linux client, gives you group policy, DNS and authentication faults to fix.

                ## Milestones
                1. A domain controller running on the isolated lab network with its own DNS.
                2. One Windows client and one Linux client joined to the domain.
                3. Users, groups and one group policy or equivalent setting created and tested.
                4. A deliberate DNS or time fault introduced and fixed, with notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab domain with a controller and two joined clients exists, and one deliberate DNS or time fault has been fixed and written up."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a domain controller from your base template on the lab network"
                - "Join one Windows and one Linux client to the domain"
                - "Create users, groups and one policy setting and test them"
                - "Break DNS or time sync on purpose and fix it"
            - name: Monthly fault drill in the lab
              description: |-
                ## Purpose
                Troubleshooting under exam conditions is a skill of its own: reading the symptom, narrowing it down and fixing it without panicking at the clock. Once a month, have a friend or a script break something in the lab without telling you what, then find and fix it against a timer.

                ## Milestones
                1. A list of twenty possible faults covering networking, storage, services, permissions and DNS.
                2. A way to pick a fault at random, by a friend or a small script.
                3. Three drills completed with time to fix and root cause recorded.
                4. The slowest fault type turned into a lab session of its own.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twenty-fault list exists and three timed drills are recorded with root causes, the slowest followed by a dedicated session."
                cadence: rolling
              tasks:
                - "Write a list of twenty faults across networking, storage, services and permissions"
                - "Set up a way for a friend or script to pick one at random"
                - "Run a timed fault drill and record time and root cause @recurring(monthly:14)"
                - "Turn the slowest fault type into its own lab session"
            - name: Buying a used mini PC or server for the lab
              description: |-
                ## Purpose
                The usual choice is between a quiet, frugal used mini PC and a cheap, loud ex-enterprise server with far more memory. Comparing them on memory ceiling, power draw, noise and whether the processor supports what your hypervisor needs avoids a purchase that is either too small in six months or too loud to keep running.

                ## Milestones
                1. Requirements written: memory, cores, storage, network ports, noise limit and power ceiling.
                2. Three options compared on price, memory ceiling, measured or listed power draw and noise.
                3. Seller listings checked for included memory, drives and power supplies.
                4. One machine bought within the kit budget, or a decision recorded to wait.

                ## Notes
                Start from the **Purchase decision** template. Memory is usually the lab's real limit, so a machine that takes 64 GB later often beats a faster one capped at 32 GB.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded comparison of three lab host options against written requirements, ending in a purchase within budget or a decision to wait."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the lab host requirements including noise and power limits"
                - "Compare three used options on memory ceiling, power and noise"
                - "Check each listing for included memory, drives and power supplies"
                - "Buy the chosen machine or record why you are waiting"
            - name: Second-hand switches, routers and access points
              description: |-
                ## Purpose
                Emulators cover most routing and switching, but physical cabling, console access, power over Ethernet and wireless are easier to learn on real kit. Used enterprise switches and access points are cheap on resale sites, though older models may be out of support, loud or locked to a cloud controller you cannot use.

                ## Milestones
                1. The objectives that genuinely need physical kit listed.
                2. Models shortlisted that support those features and have software you can legally obtain.
                3. Each candidate checked for noise, power use and any cloud licence lock.
                4. Kit bought and factory reset, or a decision recorded to stay virtual.

                ## Notes
                Ask the seller to confirm the device has been removed from any cloud management account. Locked units can be impossible to reset.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of physical network kit tied to specific objectives, ending in a purchase and factory reset or a recorded decision to stay virtual."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List objectives that need physical network kit"
                - "Shortlist models with obtainable software and no cloud licence lock"
                - "Check noise and power use for each candidate"
                - "Factory reset any kit bought and note its firmware version"
            - name: Memory and storage upgrade for the lab host
              description: |-
                ## Purpose
                Once a lab outgrows its host, everything slows: clusters fail to start, emulators swap and snapshots fill the disk. A planned upgrade, checked against the motherboard's real limits and the hypervisor's storage layout, is usually the cheapest way to double what the lab can run.

                ## Milestones
                1. Current memory and disk use recorded during a busy lab session.
                2. Maximum memory, slot count and supported drive types confirmed from the manufacturer's documentation.
                3. An upgrade chosen that fits the kit budget.
                4. The upgrade installed and the hypervisor storage pool extended or migrated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The lab host runs with upgraded memory or storage that matches the manufacturer's supported limits, with the storage pool extended."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record memory and disk use during a busy lab session"
                - "Confirm the host's maximum memory and supported drives"
                - "Order an upgrade that fits the kit budget"
                - "Install it and extend the hypervisor storage pool"
            - name: Local lab versus cloud lab cost comparison
              description: |-
                ## Purpose
                Some objectives are cheaper and better practised on your own host, while others, managed databases, identity services, serverless and load balancers, only exist in the cloud. Costing both options per exam tells you where each lab hour should run and stops you buying hardware for things the exam tests on a provider's console.

                ## Milestones
                1. Each lab-worthy objective marked as local, cloud or either.
                2. A rough cost per session estimated for the cloud-only objectives.
                3. A rough cost for any hardware the local objectives need.
                4. A split recorded, such as eighty percent local and twenty percent cloud, with the reasons.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table marking each objective as local, cloud or either, with cost estimates and a recorded split between the two."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each lab-worthy objective as local, cloud or either"
                - "Estimate a per-session cloud cost using the provider's pricing calculator"
                - "Estimate the hardware cost of the local objectives"
                - "Record the split and your reasons in the lab brief"
            - name: Remote access to the lab without exposing it
              description: |-
                ## Purpose
                Being able to reach the lab from a work lunch break or a library doubles the practice time, but opening RDP or SSH to the internet is how lab machines get taken over. A VPN such as WireGuard or a mesh service like Tailscale gives you access with no open ports on the home router.

                ## Milestones
                1. A remote access method chosen that needs no inbound port forwards.
                2. Access tested from outside the house to one lab machine.
                3. Multi-factor or key-based authentication on every remote entry point.
                4. A list of devices allowed to connect kept in the lab notes.

                ## Notes
                Check your employer's policy before connecting a work laptop to your home lab VPN. Use a personal device if in doubt.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The lab is reachable from outside the house through a VPN or mesh service with no inbound port forwards and key or MFA authentication."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a VPN or mesh access method with no open ports"
                - "Set it up and test it from outside the house"
                - "Turn on key-based or multi-factor authentication for remote access"
                - "Review the list of devices allowed on the lab VPN @recurring(quarterly)"
            - name: Moving from a laptop lab to a dedicated host
              description: |-
                ## Purpose
                Running the lab on your everyday laptop is fine until the cluster needs to run overnight, the battery dies mid-exercise or the work laptop policy forbids hypervisors. Moving to a dedicated host is a migration with real steps: exporting machines, rebuilding networks and checking nothing was lost.

                ## Milestones
                1. Every machine and topology on the laptop listed with what it is for.
                2. Machines worth keeping exported, and the rest marked for rebuild from templates or code.
                3. Lab networks recreated on the new host to match the IP plan.
                4. The laptop's hypervisor and lab files removed once the new host is proven.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All kept lab machines run on the dedicated host on the planned networks, and the laptop no longer holds lab files."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every machine and topology on the laptop"
                - "Export the ones worth keeping"
                - "Recreate the lab networks on the new host"
                - "Remove the laptop's lab files once the new host works"
            - name: Retiring and wiping old lab kit
              description: |-
                ## Purpose
                Lab drives and switches hold configs, test credentials and sometimes copies of work data that slipped in. When kit is sold, given away or recycled, a proper wipe and factory reset, and a note in the inventory, protects you and the next owner.

                ## Milestones
                1. Kit to retire identified from the inventory.
                2. Drives securely wiped with the manufacturer's tool or a recognised wiping method.
                3. Network devices factory reset and removed from any management account.
                4. Each item sold, donated or taken to an electronics recycling point, and the inventory updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each retired item has been wiped or reset and its disposal recorded in the inventory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the kit to retire from the inventory"
                - "Wipe drives with a recognised method and note it"
                - "Factory reset network devices and remove them from any account"
                - "Sell, donate or recycle each item and update the inventory"
            - name: Lab security hardening review
              description: |-
                ## Purpose
                Labs run old images, default passwords and services left open for convenience, and they sit on the same internet connection as your banking. A short risk register for the lab, reviewed each quarter, keeps convenience shortcuts from turning into a real compromise.

                ## Milestones
                1. Known lab risks listed: default credentials, outdated images, exposed services, shared Wi-Fi, stored keys.
                2. Each risk given a likelihood, an impact and a simple control.
                3. The three highest risks fixed.
                4. A quarterly review held with the register updated.

                ## Notes
                Start from the **Risk register** template. Keep intentionally vulnerable machines on a network with no route to the household or the internet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A lab risk register exists with a control for each risk, the top three fixed, and a review held within the last quarter."
                cadence: cyclic
              tasks:
                - "List the security risks in your lab"
                - "Give each risk a likelihood, impact and control"
                - "Fix the three highest risks this month"
                - "Review and update the lab risk register @recurring(quarterly)"
            - name: First complete lab build weekend
              description: |-
                ## Purpose
                Foundations are easier to finish when there is a date for them. One blocked weekend to go from bare host to a working lab, hypervisor, isolated network, base templates, notes and a first objective practised, gives a clear finish line and a working lab on Monday.

                ## Milestones
                1. A weekend blocked in the calendar and the household told.
                2. Hypervisor, lab network and base templates in place by the end of day one.
                3. One objective from the lab brief practised end to end on day two.
                4. A build log written covering what took longer than expected.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By the end of the build weekend the lab runs on an isolated network with base templates, and one objective has been practised and logged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Block a weekend in the calendar for the lab build"
                - "Download installers and images before the weekend"
                - "Build hypervisor, network and templates on day one"
                - "Practise one objective on day two and write a build log"
            - name: Hands-on objective sprint before an exam
              description: |-
                ## Purpose
                In the month before a performance-based or lab-heavy exam, the lab should be working through every hands-on objective rather than building new toys. A four-week sprint that touches each marked objective at least twice, with the second attempt from memory, turns lab notes into muscle memory.

                ## Milestones
                1. Every lab-worthy objective for the exam scheduled into four weeks of sessions.
                2. Each objective completed once with notes and once from memory.
                3. Objectives that took more than twice the expected time repeated.
                4. No new lab building started during the sprint.

                ## Notes
                Freeze the lab design for the sprint. Upgrades and new tools can wait until after the exam.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every lab-worthy objective for the exam has been completed twice in four weeks, the second time from memory."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Schedule every lab-worthy objective into four weeks of sessions"
                - "Complete each objective once with notes"
                - "Repeat each objective from memory and time it"
                - "Repeat any objective that took more than twice the expected time"
            - name: Wipe and rebuild drill in a single day
              description: |-
                ## Purpose
                If the lab host died tonight, how long would it take to get back? A deliberate wipe and rebuild from backups, templates and code tests every routine in this area at once and finds the step that only works because you remember it.

                ## Milestones
                1. A rebuild target time set, such as four hours to a working base lab.
                2. The host wiped or a fresh host used, with backups confirmed beforehand.
                3. The lab rebuilt from backups, templates and code alone.
                4. Every step that needed memory rather than notes written down.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lab is rebuilt from backups and code in one day, with the rebuild time and every undocumented step recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a target time for rebuilding the base lab"
                - "Confirm backups and code are current before wiping"
                - "Rebuild the lab using only backups, templates and code"
                - "Write down every step you had to remember rather than read"
            - name: Timed performance task rehearsal in the lab
              description: |-
                ## Purpose
                CKA, CKAD, RHCSA, LFCS and similar exams are sat at a terminal against the clock, and nerves slow you down more than gaps in knowledge. A rehearsal in your own lab, with a set of tasks, a hard time limit and only the documentation the exam allows, shows how fast you really are.

                ## Milestones
                1. A set of fifteen to twenty tasks written from the exam's objectives.
                2. The awarding body's current rules on allowed documentation checked and copied.
                3. The rehearsal completed under a hard time limit with only allowed resources.
                4. Each task marked and the slowest three added to the next sessions.

                ## Notes
                Check the awarding body's site for the current exam duration and allowed resources rather than relying on forum posts, since both change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One timed rehearsal of at least fifteen tasks completed under exam rules, with scores and the three slowest tasks recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the exam's current duration and allowed documentation"
                - "Ask the agent to draft twenty practice tasks from the objectives list"
                - "Sit the rehearsal under a hard time limit"
                - "Mark each task and note the three slowest"
            - name: Lab build write-up for your portfolio
              description: |-
                ## Purpose
                Interviewers find a clear write-up of a lab you designed and broke more convincing than the certificate alone, especially for students and career changers. One polished piece, with a diagram, the problem it solved and what you learned from a fault, gives you something concrete to link from a CV.

                ## Milestones
                1. One lab build chosen that shows design, automation or troubleshooting.
                2. A network diagram redrawn cleanly with no real addresses or credentials.
                3. A write-up of 600 to 1,000 words covering goal, design, a fault and the fix.
                4. The write-up published or saved where an interviewer can see it.

                ## Notes
                Start from the **Portfolio piece** template. Scrub hostnames, public IPs, keys and anything from an employer before publishing.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One lab write-up with a clean diagram and a fault story is published or linked from your CV, with no secrets or real addresses."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the lab build that best shows your skill"
                - "Redraw its diagram with no real addresses or secrets"
                - "Write up the goal, design, a fault and its fix"
                - "Publish the write-up and link it from your CV"
            - name: Student lab on one laptop and almost no budget
              description: |-
                ## Purpose
                Even with one laptop and no spare money, a student can build a useful lab: a free hypervisor, lightweight Linux images, Packet Tracer, free cloud credits through the university and the free trial levels of each provider. The trick is choosing what to run at the same time so the laptop still works for coursework.

                ## Milestones
                1. Student cloud credits and software programmes from your institution checked and claimed.
                2. A free hypervisor installed with no more than two or three small machines running at once.
                3. Lab files kept on an external drive or a separate partition away from coursework.
                4. A rule written for closing lab machines before assignments or exams.

                ## Notes
                Ask your department whether it runs a lab network, a cloud sandbox or a cyber range students can use. Many do and few students ask.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working lab runs on the student's laptop alongside coursework, using claimed student credits and kept on separate storage."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check what student cloud credits and software your institution offers"
                - "Install a free hypervisor and two small Linux machines"
                - "Move lab files to an external drive or separate partition"
                - "Ask your department whether it has a lab or sandbox students can use"
            - name: Running a lab in a shared flat or family home
              description: |-
                ## Purpose
                Shared homes mean the lab has to live with other people's Wi-Fi, sleep, electricity bill and patience. Agreeing where the kit goes, when it runs and what happens if it breaks the internet keeps the peace and keeps the lab running.

                ## Milestones
                1. A location chosen with enough ventilation and away from bedrooms.
                2. Running hours agreed with the household, with noisy kit off at night.
                3. A way to restore household internet in one step if the lab breaks it.
                4. The household's share of extra power cost discussed, if bills are shared.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed lab location, running hours and a one-step internet restore are in place, with power costs settled if bills are shared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a lab location with ventilation away from bedrooms"
                - "Agree running hours with the people you live with"
                - "Write a one-step guide to restore household internet"
                - "Settle how extra power cost is shared"
            - name: Using an employer sandbox or training account
              description: |-
                ## Purpose
                Many employers provide cloud sandboxes, training subscriptions or spare kit for certification, which saves money but comes with rules. Reading the acceptable use policy and keeping employer and personal labs separate avoids breaching policy, mixing data or losing all your work when you change jobs.

                ## Milestones
                1. The employer's acceptable use policy for sandboxes and training accounts read.
                2. What you may and may not run there written in three lines.
                3. Lab code and notes stored somewhere you will still own after leaving.
                4. No employer data, credentials or configurations copied into the personal lab.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of the employer sandbox rules exists, and personal lab notes and code are stored outside employer systems."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your manager or IT team for the sandbox acceptable use policy"
                - "Write three lines on what you may run there"
                - "Keep personal lab notes and code in storage you own"
                - "Check the personal lab holds no employer data or credentials"
            - name: Career changer lab built from zero experience
              description: |-
                ## Purpose
                Someone moving into IT from teaching, retail or another engineering discipline often does not know what a lab should look like, and tutorials assume background they do not have. A deliberately small first lab, two Linux machines and a virtual router, built step by step and written up, gives confidence and something to talk about in a first interview.

                ## Milestones
                1. A minimal lab of two Linux machines and one virtual router built from a single guide.
                2. Every unfamiliar term from the build written in a glossary page.
                3. One exercise repeated until it can be done without the guide.
                4. A short summary of the build written in plain language for a non-technical reader.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A minimal three-machine lab is built, one exercise can be done without the guide, and a plain-language summary exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one beginner lab guide that matches your first exam"
                - "Build two Linux machines and a virtual router"
                - "Write every unfamiliar term into a glossary page"
                - "Repeat one exercise until you can do it without the guide"
            - name: Shared lab for a study group
              description: |-
                ## Purpose
                Study groups sitting the same exam can share one well-built lab or cloud organisation instead of each paying for their own. Clear rules about accounts, costs and who tears down what keep a shared lab useful and friendships intact.

                ## Milestones
                1. One person or a rota named as the lab owner.
                2. Separate accounts or namespaces for each member, with no shared passwords.
                3. A cost split agreed and recorded each month.
                4. A shared booking calendar so two people do not break the same thing at once.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A shared lab runs with named owner, individual accounts, a booking calendar and a monthly recorded cost split."
                cadence: rolling
              tasks:
                - "Agree who owns the shared lab and its billing"
                - "Create a separate account or namespace for each member"
                - "Set up a shared booking calendar for lab time"
                - "Send the group the monthly cost split @recurring(monthly:28)"
            - name: Isolated security practice range
              description: |-
                ## Purpose
                Security exams and penetration testing practice need intentionally vulnerable machines, which must never sit on a network that can reach the household or the internet. Building a closed range with its own attacker machine and targets, and snapshots to reset them, lets you practise exploitation safely and legally.

                ## Milestones
                1. A range network with no route to the household or the internet confirmed by testing.
                2. An attacker machine and three intentionally vulnerable targets running on it.
                3. Snapshots of every target so each one resets to a known state.
                4. A written rule that only machines you own are ever targeted.

                ## Notes
                Only attack machines you own or are explicitly authorised to test. Download vulnerable images from their official project pages, never from random mirrors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A closed range with an attacker and three targets runs with no route out, each target snapshotted, and the ownership rule written down."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a range network with no route out and test it"
                - "Deploy an attacker machine and three vulnerable targets"
                - "Snapshot every target in its clean state"
                - "Write down the rule that you only target machines you own"
            - name: Multi-site lab with simulated WAN and failover
              description: |-
                ## Purpose
                Professional and expert level networking and cloud exams expect you to reason about multiple sites, VPN tunnels, latency and failover. A lab with two or three simulated sites, a link you can degrade and a backup path shows how routing and applications really behave when a link fails.

                ## Milestones
                1. Two or three sites built as separate lab networks with their own routers.
                2. Site-to-site tunnels or routed links between them working.
                3. Latency and packet loss added to one link with a network emulation tool.
                4. A failover test run and convergence time recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lab with at least two connected sites runs, one link has been degraded and a failover test is recorded with convergence time."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build two lab sites with their own routers"
                - "Connect the sites with tunnels or routed links"
                - "Add latency and loss to one link"
                - "Run a failover test and record convergence time"
            - name: Self-hosted Git and CI pipeline for lab code
              description: |-
                ## Purpose
                Experienced lab owners treat the lab like a small production platform: code in Git, changes tested in a pipeline and rebuilds triggered automatically. A self-hosted Git server and CI runner in the lab, or a private hosted repository with a runner on the host, adds DevOps practice and stops lab changes breaking things silently.

                ## Milestones
                1. A Git server or private repository holding all lab code.
                2. A CI runner on the lab host able to run jobs on the lab network.
                3. A pipeline that lints and tests lab code on every change.
                4. One scheduled job that rebuilds a test environment and reports success or failure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All lab code lives in Git, a pipeline tests it on every change, and a scheduled rebuild job reports its result."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Move all lab code into one Git server or private repository"
                - "Install a CI runner on the lab host"
                - "Add a pipeline that lints and tests lab code on each change"
                - "Schedule a job that rebuilds a test environment and reports"
---

# Certification Home Lab

This area is for anyone who learns by breaking and fixing real systems: a student working towards a first cloud or networking exam on one laptop, or an engineer stacking CCNA, RHCSA, CKA and cloud associate exams who needs a lab that will not cost a fortune or take over the house. It starts with foundations (which exams the lab serves, what you already own, a budget, the hypervisor, an isolated network, cloud guardrails and a notes system), then the routines that keep it running, the skills that make it rebuildable, the kit and design decisions, a few dated build and rehearsal events, versions for different living and working situations, and specialist builds for experienced lab owners.

What repeats is two weekly lab sessions and a Friday write-up, a Sunday check for anything left running in the cloud, monthly cost, patch, backup, trial expiry and coverage reviews on different days, a monthly fault drill, and quarterly reviews of hardening, power and the lab against your exam plan. The Habit tracker, Operational checklist, Skills matrix, Purchase decision, Risk register and Portfolio piece templates pair with keeping sessions, tearing down cloud labs, mapping objectives, buying kit, recording lab risks and writing up builds. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
