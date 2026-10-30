---
id: tech-certifications.linux-certification-rhcsa-lfcs
name: Linux Certification (RHCSA, LFCS)
description: "A route to a hands-on Linux credential such as RHCSA or LFCS: the current objectives, practice VMs, users, storage, services, SELinux, networking, timed mocks that survive a reboot, booking and exam day."
category: personal
version: 1.0.0
tags: [tech-certifications, linux-certification-rhcsa-lfcs, engineer, linux, rhcsa, lfcs, sysadmin, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - metrics-log
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Linux Certification (RHCSA, LFCS)
          description: "Studying for a hands-on Linux credential such as RHCSA or LFCS: users and permissions, storage, services, networking and practice in virtual machines."
          projects:
            - name: Choosing between RHCSA and LFCS
              description: |-
                ## Purpose
                Both exams test the same core administration hands-on, but RHCSA is built on Red Hat Enterprise Linux and carries weight with employers running RHEL, while LFCS is set by the Linux Foundation on the distribution its current rules name and is often chosen by teams on Ubuntu or mixed estates. Picking one before buying a course stops you studying dnf, SELinux and Podman for an exam that wants something else, or the reverse.

                ## Milestones
                1. Job adverts you would apply for in the next two years checked for which credential they name.
                2. The distribution each exam currently runs on, and how each is delivered, noted from the official pages.
                3. Cost, retake terms and certificate validity for both written side by side with today's date.
                4. One exam chosen and the reason written in two sentences.

                ## Notes
                Start from the **Purchase decision** template. If your employer runs RHEL, Rocky or Alma, RHCSA is usually the better fit; if they run Ubuntu or Debian, look hard at LFCS.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice of RHCSA or LFCS, backed by a dated comparison of distribution, delivery, cost, retakes and validity, plus five job adverts checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search five job adverts you would apply for and note which Linux credential each names"
                - "Note the distribution, delivery method and retake terms for RHCSA and LFCS from the official sites"
                - "Write the cost and validity period of each with today's date"
                - "Record your choice and the reason in two sentences"
            - name: Exam objectives and candidate rules folder
              description: |-
                ## Purpose
                Red Hat and the Linux Foundation each publish the objectives their exam tests, and those lists move when a new RHEL major version or a curriculum refresh arrives. Saving the current objectives, the candidate rules on ID and environment, and the date you checked them gives you one source to judge every book, video and lab against.

                ## Milestones
                1. The current objective list for your exam saved with the OS version it targets and the date downloaded.
                2. Each objective copied onto one page, grouped the way the official list groups them.
                3. Candidate rules on ID, allowed documentation, breaks and retakes saved and marked.
                4. Current fee, exam length and passing score noted from the official page with today's date.

                ## Notes
                Course videos often quote an older RHEL version or an old LFCS domain list. Trust the official page on the day you check, and check again before booking.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated objective list, a one-page objective map, the marked candidate rules and a dated note of fee, length and passing score."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current objective list for your exam from the official site"
                - "Copy every objective onto one page in the official grouping"
                - "Save the candidate rules and mark the parts on ID, documentation and retakes"
                - "Note the current fee, exam length and passing score with today's date"
            - name: Linux skills audit against the exam objectives
              description: |-
                ## Purpose
                Engineers who already run Linux at work usually have deep pockets of skill and blind spots they never touch, such as LVM resizing, SELinux port labels or resetting a lost root password. Rating yourself against every objective, after a two-minute practical check rather than a guess, shows where the study hours belong.

                ## Milestones
                1. Every objective listed as a row in one grid.
                2. Each objective rated from zero to three after trying it on a VM.
                3. The five weakest objectives marked as the first study targets.
                4. A column added for whether the result survives a reboot.

                ## Notes
                Start from the **Skills matrix** template. Rate an objective three only if you can do it from memory, using man pages alone, in under five minutes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills grid covers every exam objective with a tested rating from zero to three, a reboot column and the five weakest objectives named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy every objective from your objective map into a skills grid"
                - "Try each objective briefly on a VM and rate it from zero to three"
                - "Add a column for whether each result survives a reboot"
                - "Mark the five lowest-rated objectives as your first study targets"
            - name: Baseline timed task set on a fresh VM
              description: |-
                ## Purpose
                Knowing a command and finishing fifteen tasks against the clock on an unfamiliar machine are different skills. A timed baseline before any study, using a published practice set or one you write from the objectives, gives you a starting score and a time per task to measure progress against.

                ## Milestones
                1. A practice set of twelve to twenty tasks covering every objective group.
                2. The set attempted on a fresh VM under a fixed time limit with no internet.
                3. The VM rebooted and each task checked for whether it still works.
                4. A score, the time taken and the tasks skipped written in your study log.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score, checked after a reboot, with time taken and skipped tasks recorded in the study log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write or find a practice set of twelve to twenty tasks across all objectives"
                - "Attempt it on a fresh VM with a timer running and the network to the internet cut"
                - "Reboot the VM and check every task still works"
                - "Record the score, time taken and skipped tasks in your study log"
            - name: Practice VM set-up with snapshots
              description: |-
                ## Purpose
                Nearly every task in these exams is done on virtual machines, and breaking a boot loader or a volume group is only cheap if you can roll back in seconds. Two VMs on a hypervisor you know, running the distribution your exam uses, with clean snapshots and spare virtual disks, become the place where all practice happens.

                ## Milestones
                1. A hypervisor installed and tested on your own machine, or a small cloud budget agreed.
                2. Two VMs built on the exam's distribution, using a free developer subscription or a compatible rebuild where needed.
                3. Three spare virtual disks attached to one VM for partitioning and LVM practice.
                4. A clean snapshot of each VM taken and named with the date.

                ## Notes
                For RHCSA, Red Hat's no-cost developer subscription gives you real RHEL; Rocky Linux or AlmaLinux are close substitutes. For LFCS, use the distribution and version its current rules name.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two working VMs on the exam distribution, one with three spare disks, each with a dated clean snapshot you have restored at least once."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Install a hypervisor and confirm your CPU's virtualisation support is switched on"
                - "Register for the distribution's developer subscription or download a compatible rebuild"
                - "Build two VMs and add three small spare disks to the second"
                - "Take a clean snapshot of each, then restore one to prove it works"
                - "Apply updates to the base images and retake the clean snapshots @recurring(monthly:3)"
            - name: Study book and practice lab choice
              description: |-
                ## Purpose
                Material for these exams ranges from the official vendor course to a single paperback and free practice sets of very mixed quality. Choosing one main resource and one source of timed practice, judged against your objective map, stops the common pattern of three half-finished courses and no mocks.

                ## Milestones
                1. Three candidate resources listed, each checked against the current objective list and OS version.
                2. Sample chapters or free lessons tried for each.
                3. One main resource and one source of practice exams chosen.
                4. Total cost written down and anything else cancelled.

                ## Notes
                Start from the **Purchase decision** template. Reject anything written for an older RHEL major version unless the author has published an update.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main study resource and one practice exam source chosen against the current objectives, with total cost recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three study resources and the OS version each one targets"
                - "Try a sample chapter or free lesson from each"
                - "Pick one main resource and one practice exam source"
                - "Write the total cost in your study log"
            - name: Dated study calendar to exam week
              description: |-
                ## Purpose
                Without an end date, Linux study tends to drift into interesting side quests like kernel tuning while the objectives that carry the marks stay untouched. A calendar that works back from a target exam week, with the weakest objectives first and mocks placed in advance, turns the audit into a plan.

                ## Milestones
                1. A target exam week chosen, eight to fourteen weeks from now for most working engineers.
                2. Each objective group given a week, weakest first.
                3. Four timed mocks placed on the calendar, the last at least ten days before the exam.
                4. Two buffer weeks kept free for illness, work and travel.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar names a target exam week, assigns every objective group a week, and shows four mocks and two buffer weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a target exam week and write it at the top of the calendar"
                - "Give each objective group a week, starting with the weakest"
                - "Place four timed mocks, the last ten days before the exam"
                - "Compare progress against the calendar and move weeks if you are behind @recurring(monthly:28)"
            - name: Vim, shell and terminal fluency
              description: |-
                ## Purpose
                Time in a hands-on exam is lost less to not knowing an answer than to fumbling in an editor, mistyping paths and retyping long commands. An hour spent on vim basics, tab completion, history search and a few shell settings pays back on every lab you do afterwards.

                ## Milestones
                1. Vim used to open, edit, search, replace and save a config file without looking anything up.
                2. Tab completion, reverse history search and command line editing used by habit.
                3. Shell redirection and pipes used to check a result in one line.
                4. A short list of the shell settings you rely on, so you can recreate them on an exam machine.

                ## Notes
                Do not depend on a personal dotfile on exam day. Anything beyond the default shell must be something you can type in under a minute.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You can edit and save a system config file in vim and recall a previous command by search, timed at under one minute each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work through the built-in vim tutorial once"
                - "Practise reverse history search and tab completion on ten real commands"
                - "Write down the few shell settings you would set again on a new machine"
                - "Edit five config files in vim against a timer"
            - name: Finding answers with man pages and local docs
              description: |-
                ## Purpose
                Red Hat exams give you no internet, and other performance exams limit what you may open, so the man pages, info pages and files under the documentation directory are your reference. Learning to search them quickly, including the example sections many pages carry, is the safety net for every half-remembered option.

                ## Milestones
                1. The man page index rebuilt and keyword search used to find a page you did not know the name of.
                2. Examples found in the man pages for nmcli, firewall-cmd, semanage and lvcreate.
                3. Example config files under the documentation directory located for at least three services.
                4. A list of the pages you open most, with the section that holds the useful example.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the man pages you rely on, each with the example section noted, and the ability to find an unknown page by keyword in under a minute."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Rebuild the man page index and search for a page by keyword"
                - "Find the examples section in the nmcli and semanage man pages"
                - "Locate sample config files in the local documentation directory"
                - "Look up one command you used this week and read its options section @recurring(weekly:mon)"
            - name: Weekly Linux study blocks
              description: |-
                ## Purpose
                Most candidates pass on steady hours, not weekend marathons. Two protected weekday evenings plus one longer weekend session, each tied to the objective group on your calendar, keeps the hands-on practice frequent enough that commands stay in your fingers.

                ## Milestones
                1. Two weekday evenings and one weekend slot blocked in your calendar.
                2. Each session started with the objective group for that week written at the top of your notes.
                3. Every session ending at a VM, not a video.
                4. Hours studied logged each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Study hours logged every week, with at least three sessions completed in eight of the next ten weeks."
                cadence: rolling
              tasks:
                - "Block two weekday evenings and one weekend slot in your calendar"
                - "Write the week's objective group at the top of each session's notes"
                - "Run your study session on the current objective group @recurring(weekly:tue,thu)"
                - "Log the hours studied at the end of each session"
            - name: Daily fifteen-minute command drill
              description: |-
                ## Purpose
                Speed in a hands-on exam comes from recall without thinking: the right useradd flags, the lvextend option that grows the filesystem too, the semanage syntax for a port. Fifteen minutes a day on a short task card keeps those commands ready between longer study blocks.

                ## Milestones
                1. A deck of thirty short task cards written from the objectives.
                2. One card set of five tasks completed most days on a VM.
                3. Slow or failed cards marked and moved to the front of the deck.
                4. A visible streak kept for four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A thirty-card task deck exists and five cards are done on a VM on at least five days a week for four weeks."
                cadence: rolling
              tasks:
                - "Write thirty one-line task cards from the objective list"
                - "Do five task cards on a VM against a fifteen-minute timer @recurring(daily)"
                - "Move any slow or failed card to the front of the deck"
            - name: Weekly practice VM rebuild
              description: |-
                ## Purpose
                Exam machines start in a state you did not create, and a lab you have tuned for weeks hides gaps. Restoring to the clean snapshot each weekend and redoing the week's tasks from a blank system shows what you really know and keeps old configuration from masking mistakes.

                ## Milestones
                1. Both VMs restored to clean snapshots every weekend.
                2. The week's tasks redone from scratch without notes.
                3. Time taken compared with the first attempt.
                4. Anything you needed notes for added to the mistake log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "VMs are restored and the week's tasks redone from scratch on at least eight weekends, with times recorded."
                cadence: rolling
              tasks:
                - "Restore both VMs to their clean snapshots and redo the week's tasks @recurring(weekly:sat)"
                - "Compare this attempt's time with the first one"
                - "Add any step you needed notes for to the mistake log"
            - name: Reboot-survival check after each lab
              description: |-
                ## Purpose
                Graders on these exams typically check your machine after a reboot, so a mount missing from fstab, a service started but not enabled or a firewall rule added without being made permanent scores nothing. A deliberate reboot and checklist at the end of every lab makes persistence automatic.

                ## Milestones
                1. A checklist of persistence traps: fstab, enabled units, permanent firewall rules, SELinux contexts, network profiles and default target.
                2. Every lab ended with a reboot and the checklist.
                3. Any task that failed after reboot logged with the missing step.
                4. Three labs in a row passing the reboot check first time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written persistence checklist exists and the last three labs passed it after a reboot without fixes."
                cadence: rolling
              tasks:
                - "Write a persistence checklist covering fstab, units, firewall, SELinux and network"
                - "Reboot the VM after the session and run the persistence checklist @recurring(weekly:wed)"
                - "Log any task that failed after reboot with the step that was missing"
            - name: Mistake log and Sunday review
              description: |-
                ## Purpose
                Most failures on these exams come from a handful of repeated errors: a typo in fstab that drops the machine to emergency mode, a forgotten restorecon, a volume created in the wrong group. Writing every mistake down and reviewing the list weekly turns those errors into checks you run by habit.

                ## Milestones
                1. A mistake log with the date, objective, what went wrong and the fix.
                2. The log reviewed every week and repeated mistakes counted.
                3. Each repeated mistake turned into a one-line check added to your exam routine.
                4. No mistake appearing three times in a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The mistake log is reviewed weekly for eight weeks and every mistake seen twice has a matching check in the exam routine."
                cadence: rolling
              tasks:
                - "Start a mistake log with columns for date, objective, error and fix"
                - "Review the week's mistakes and count the repeats @recurring(weekly:sun)"
                - "Turn each repeated mistake into a one-line check in your exam routine"
            - name: Monthly timed mock exam
              description: |-
                ## Purpose
                Only a full timed run on a fresh machine shows whether you can finish, and whether your work survives the reboot that grading usually involves. One mock a month, scored honestly afterwards, tracks real readiness instead of how comfortable the study felt.

                ## Milestones
                1. A full mock taken under exam conditions each month: fresh VMs, timer, no internet.
                2. The VMs rebooted and every task scored after the timer ends.
                3. Score and time per task group recorded.
                4. The lowest-scoring group added to next month's study blocks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three monthly mocks scored after a reboot, with scores and weakest group recorded each time."
                cadence: rolling
              tasks:
                - "Take a full timed mock on fresh VMs with the internet cut @recurring(monthly:12)"
                - "Reboot and score every task after the timer ends"
                - "Add the weakest task group to next month's study blocks"
            - name: Objective coverage tracker
              description: |-
                ## Purpose
                Weeks of study can feel productive while two or three objectives never get practised at all. Updating a coverage log monthly, showing when each objective was last done hands-on and how it scored, makes the gaps visible long before mock exams do.

                ## Milestones
                1. A log listing every objective with the date last practised and the latest rating.
                2. The log updated monthly from your study notes and mock scores.
                3. Any objective untouched for six weeks flagged.
                4. All objectives practised at least twice before the readiness decision.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coverage log shows every objective with a practice date within the last six weeks before you book the exam."
                cadence: rolling
              tasks:
                - "Set up a log with each objective, last practised date and rating"
                - "Update the log from your notes and latest mock @recurring(monthly:20)"
                - "Flag any objective not practised in six weeks"
            - name: Objective and OS version watch
              description: |-
                ## Purpose
                New RHEL major releases and LFCS curriculum refreshes can change tools, defaults and objectives part way through your study. A quarterly look at the official pages catches the change while there is still time to adjust, rather than in the exam room.

                ## Milestones
                1. The official objectives page checked each quarter.
                2. Any change compared against your saved copy.
                3. Your calendar and lab VMs updated if the OS version moves.
                4. The check date recorded in your objectives folder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The official objectives are checked every quarter, with the date and any changes recorded in your objectives folder."
                cadence: rolling
              tasks:
                - "Compare the official objectives with your saved copy @recurring(quarterly)"
                - "Note any new, removed or reworded objective"
                - "Update your calendar and VM images if the OS version changed"
            - name: Users, groups and sudo rules
              description: |-
                ## Purpose
                Account tasks look easy and still cost marks: a user with the wrong supplementary group, an expiry date missed, a sudo rule that breaks the sudoers file. Working through every account objective, including password ageing and a drop-in sudoers file checked with visudo, makes them quick and safe.

                ## Milestones
                1. Users and groups created, modified and deleted with set UIDs, shells and supplementary groups.
                2. Password ageing and account expiry set and read back with chage.
                3. A sudo rule added as a drop-in file and validated before saving.
                4. Login defaults for new users changed and tested.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed set of ten account tasks, including ageing and a validated sudo drop-in, completed correctly in under fifteen minutes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create three users with set UIDs, shells and supplementary groups"
                - "Set password ageing and an expiry date, then read them back with chage"
                - "Add a sudo rule as a drop-in file and validate it with visudo"
                - "Run a timed set of ten account tasks"
            - name: Permissions, ACLs and special bits
              description: |-
                ## Purpose
                Shared directory tasks combine several ideas at once: group ownership, the setgid bit so new files inherit the group, a sticky bit so users cannot delete each other's work, and an ACL for one extra person. Practising them together is what the exam asks for.

                ## Milestones
                1. Numeric and symbolic chmod used fluently, including umask effects on new files.
                2. A shared group directory built with setgid and sticky bits.
                3. Default and named ACLs set and checked with getfacl.
                4. A ten-task permission set completed and verified as each test user.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A shared directory with setgid, sticky bit and a default ACL works correctly when tested as three different users."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a shared group directory with setgid and sticky bits"
                - "Add a named ACL and a default ACL, then read them with getfacl"
                - "Test file creation and deletion as three different users"
                - "Change the umask and note how new file permissions change"
            - name: Partitions, LVM and resizing volumes
              description: |-
                ## Purpose
                Storage tasks carry real weight and real risk: a wrong device name can wipe the system disk, and growing a logical volume without the filesystem leaves the space unused. Building and resizing a full LVM stack on spare virtual disks, again and again, makes the commands and the checks second nature.

                ## Milestones
                1. GPT partitions created on a spare disk and the partition table re-read.
                2. Physical volumes, a volume group and logical volumes built with set sizes and extents.
                3. A logical volume and its filesystem grown in one step and checked.
                4. A volume group extended with a new disk.
                5. The whole stack torn down and rebuilt against a timer.

                ## Notes
                Run lsblk before and after every storage command. Most exam disasters start with the wrong device.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An LVM stack built, grown and extended on spare disks, then rebuilt from bare disks in under twenty minutes and still mounted after reboot."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Partition a spare virtual disk and confirm the result with lsblk"
                - "Build a volume group and two logical volumes with set sizes"
                - "Grow one logical volume and its filesystem together, then verify"
                - "Tear down and rebuild the LVM stack from bare disks against a timer @recurring(monthly:25)"
            - name: Filesystems, fstab, swap and network mounts
              description: |-
                ## Purpose
                A filesystem that mounts by hand but not at boot is worth nothing to a grader, and a bad fstab line can stop the machine booting at all. Learning to create filesystems, mount them by UUID, add swap, and set up NFS and automounted home directories, then proving each with a reboot, closes one of the biggest sources of lost marks.

                ## Milestones
                1. XFS and ext4 filesystems created and mounted by UUID from fstab.
                2. fstab tested with a mount-all command before every reboot.
                3. A swap partition or file added and active after reboot.
                4. An NFS share mounted persistently and an automount map working for home directories.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two filesystems, swap, an NFS mount and an automount map all work after a reboot of the practice VM."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Create XFS and ext4 filesystems and add them to fstab by UUID"
                - "Test fstab with a mount-all command before rebooting"
                - "Add swap and confirm it is active after reboot"
                - "Set up an NFS export on one VM and an automount for it on the other"
            - name: systemd services and boot targets
              description: |-
                ## Purpose
                Starting a service is not the task; enabling it, checking it survived a reboot and reading why it failed are. Getting comfortable with systemctl, unit status, the default target and journal output for a single unit is the base for most other objectives, from web servers to containers.

                ## Milestones
                1. Services started, stopped, enabled, disabled and masked, and the difference understood.
                2. The default boot target changed and switched at runtime.
                3. A failing unit diagnosed from systemctl status and the journal.
                4. A small custom unit file written, loaded and enabled.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A custom unit file runs at boot and a deliberately broken service is diagnosed from its status and journal within ten minutes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Enable, mask and unmask a service and check each state with systemctl"
                - "Change the default target and confirm it after reboot"
                - "Break a service config on purpose and diagnose it from the journal"
                - "Write a small custom unit file and enable it"
            - name: Scheduled jobs with cron, at and timers
              description: |-
                ## Purpose
                Scheduling tasks are often worded precisely, such as every weekday at a set time for one user, and a cron field in the wrong column runs the job at the wrong hour without any error. Practising user crontabs, one-off at jobs and a systemd timer, and checking each actually ran, makes those tasks quick wins.

                ## Milestones
                1. A user crontab written for a weekday schedule and checked against the man page field order.
                2. A one-off job queued with at and confirmed after it ran.
                3. A systemd timer created for a unit and listed as active.
                4. Evidence that each scheduled job ran found in logs or output files.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A cron job, an at job and a systemd timer each ran on schedule, with the output or log line recorded as proof."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a user crontab entry for a weekday schedule"
                - "Queue a one-off job with at and check it ran"
                - "Create a systemd timer for a small unit and list it as active"
                - "Find the log line or output that proves each job ran"
            - name: Networking with nmcli and name resolution
              description: |-
                ## Purpose
                Network tasks usually mean setting a static address, gateway and DNS on a connection profile so it survives reboot, then setting the hostname and checking resolution. Doing it with nmcli from memory, and knowing how to recover when you lock yourself out of a VM, is essential for both exams on the distributions that use NetworkManager.

                ## Milestones
                1. A static IPv4 address, gateway and DNS set on a connection profile and active after reboot.
                2. An IPv6 address added to the same profile.
                3. The hostname set persistently and local name resolution checked.
                4. Network access recovered from the VM console after a deliberate misconfiguration.

                ## Notes
                Keep the hypervisor console open when changing networking. On an LFCS distribution that uses netplan instead, practise the same outcomes with its files.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A VM holds a static IPv4 and IPv6 configuration and hostname after reboot, and you have recovered it once from the console."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set a static IPv4 address, gateway and DNS with nmcli"
                - "Add an IPv6 address and confirm both after reboot"
                - "Set the hostname and test name resolution"
                - "Reconfigure a VM's network from scratch with nmcli from the console @recurring(monthly:14)"
            - name: Firewall zones, services and ports
              description: |-
                ## Purpose
                Any service that works locally but is blocked from the other VM fails the task, and a firewall rule added only at runtime disappears at reboot. Practising firewalld zones, services and ports, always with the permanent flag and a reload, removes a classic source of lost marks.

                ## Milestones
                1. The active zone identified and a service allowed permanently.
                2. A custom port opened and confirmed from the second VM.
                3. A source address bound to a different zone.
                4. Every rule still present after reboot.

                ## Notes
                On a distribution using ufw for LFCS, practise the same outcomes with ufw rules.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A web service on one VM is reachable from the other through a permanent firewall rule that survives reboot."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the active zone and its allowed services"
                - "Allow a service and a custom port permanently, then reload"
                - "Test the port from the second VM"
                - "Reboot and confirm every rule is still in place"
            - name: SELinux contexts, booleans and port labels
              description: |-
                ## Purpose
                SELinux is where many RHCSA candidates lose the most marks, often by disabling it, which can break the task itself. Learning to read denials, restore and set file contexts persistently, toggle booleans and label a non-standard port lets you fix the problem the task was set to test.

                ## Milestones
                1. SELinux mode checked and changed, with the persistent setting in its config file understood.
                2. A web server serving content from a non-default directory after setting a persistent file context.
                3. A boolean switched persistently and confirmed.
                4. A service moved to a non-standard port after labelling the port.
                5. A denial found in the audit log and traced to its fix.

                ## Notes
                Never set SELinux to disabled in an exam unless a task explicitly asks for it. LFCS candidates on a distribution using AppArmor should practise its profiles instead.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A web server runs from a custom directory on a non-standard port in enforcing mode, with persistent contexts and port labels that survive reboot."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the SELinux mode and read its config file"
                - "Serve web content from a custom directory using a persistent file context"
                - "Label a non-standard port and move the web service to it"
                - "Break and fix one SELinux scenario from the audit log @recurring(monthly:16)"
            - name: Packages and repositories with dnf or apt
              description: |-
                ## Purpose
                Exam machines may have no repositories configured, so a task can start with writing a repository file pointing at a provided URL before anything installs. Knowing how to add a repository, install, remove and query packages, and find which package provides a file, keeps those early tasks from blocking the rest.

                ## Milestones
                1. A repository file written by hand and used to install a package.
                2. Packages installed, removed, updated and queried for their files.
                3. The package that provides a given command found.
                4. Package history read and one transaction undone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-written repository file installs a package on a fresh VM, and a provides lookup and history undo are each done from memory."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a repository file by hand pointing at a local or mirror URL"
                - "Install a package from it and list the files it added"
                - "Find the package that provides a given command"
                - "Read the package history and undo one transaction"
            - name: Shell scripting for exam tasks
              description: |-
                ## Purpose
                Script tasks are usually short, such as looping over a list of users, testing an argument or finding files and copying them, but they have to run exactly as specified. Writing a dozen small scripts with arguments, conditionals, loops and exit codes builds the speed to finish them quickly and check the output.

                ## Milestones
                1. Scripts written that take arguments and exit with a usage message when they are missing.
                2. Loops over files and command output used correctly.
                3. find and grep output fed into a script and saved to a set file.
                4. A dozen practice scripts saved with a sample run for each.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve small scripts covering arguments, conditionals, loops and exit codes each run correctly on a fresh VM."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a script that checks for an argument and prints a usage message"
                - "Write a loop that processes every line of a file"
                - "Save find output for a set of files into a named file using a script"
                - "Write and test one new small script each week @recurring(weekly:fri)"
            - name: Boot process, GRUB and root password reset
              description: |-
                ## Purpose
                Breaking into a system to reset the root password, and fixing a machine that will not boot, are classic tasks that are impossible to work out under pressure if you have never done them. Rehearsing the boot loader interruption, the reset and the SELinux relabel step until you can do it blind protects one of the easiest marks to lose.

                ## Milestones
                1. The boot sequence from firmware to default target described in your notes.
                2. The root password reset from the boot loader, including the relabel step, done three times.
                3. A kernel argument changed persistently and the default kernel set.
                4. A machine stuck in emergency mode from a bad fstab line recovered.

                ## Notes
                Practise on a snapshot, and time yourself. The reset method differs between distributions, so follow the one documented for your exam's OS version.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The root password is reset from the boot loader in under five minutes on three separate occasions, and an emergency-mode boot is recovered once."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the boot sequence from firmware to target in your notes"
                - "Reset the root password from the boot loader on a snapshot VM"
                - "Break fstab on purpose and recover from emergency mode"
                - "Repeat the root password reset against a five-minute timer @recurring(monthly:8)"
            - name: Containers with Podman as systemd services
              description: |-
                ## Purpose
                Recent RHCSA objectives include running containers rootless with Podman, attaching persistent storage and starting them at boot through systemd, which trips up administrators who have only used Docker. Building one container service end to end as an ordinary user, then rebooting, covers the whole objective.

                ## Milestones
                1. Images searched, pulled and inspected from a registry, with registry login handled.
                2. A rootless container run with a published port and a host directory mounted with the right SELinux label.
                3. The container turned into a user systemd service that starts at boot with lingering enabled.
                4. The service still running after reboot without anyone logged in.

                ## Notes
                Check your exam's current objectives first: container content has changed between versions, and LFCS treats containers differently.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A rootless Podman container with persistent storage runs as a user systemd service and is up after reboot with no user logged in."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pull and inspect an image with Podman as an ordinary user"
                - "Run it with a published port and a labelled host directory"
                - "Create a user systemd service for it and enable lingering"
                - "Reboot and confirm the container is running"
            - name: Logs, journal persistence and time sync
              description: |-
                ## Purpose
                Tasks often ask you to make the journal survive reboots, find log entries for a unit or time range, or point the clock at a given time server. These are small configuration changes with a precise check, and practising them together keeps them from eating time on exam day.

                ## Milestones
                1. The journal made persistent and entries from a previous boot read.
                2. Log entries filtered by unit, priority and time range.
                3. A message sent to the system log and found again.
                4. Time sync pointed at a named server and its sources checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Journal entries from a previous boot are readable, and the clock is syncing from a named server, both confirmed after reboot."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Make the journal persistent and read entries from the last boot"
                - "Filter the journal by unit, priority and time range"
                - "Point time sync at a named server and list its sources"
                - "Send a test message to the system log and find it"
            - name: Processes, priorities and tuning profiles
              description: |-
                ## Purpose
                Process tasks ask you to find what is eating CPU, change its priority, end it cleanly and sometimes apply the recommended tuning profile. They are quick if you know ps, top, kill signals, nice and tuned, and slow if you guess.

                ## Milestones
                1. The heaviest processes found with ps and top and their owners identified.
                2. A process started with a set nice value and another reniced.
                3. Processes ended with the right signal and the difference between signals noted.
                4. The recommended tuning profile checked and applied.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A timed set of six process and tuning tasks is completed correctly in under ten minutes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the three heaviest processes with ps sorted by CPU"
                - "Start a process with a set nice value and renice another"
                - "End a test process with different signals and note the effect"
                - "Check the recommended tuning profile and apply it"
            - name: SSH keys, file transfer and archives
              description: |-
                ## Purpose
                Moving files between machines, setting up key-based login and creating compressed archives come up in both exams and in every real admin day. Practising key generation, secure copy, rsync and tar with each compression type means these tasks take a minute each.

                ## Milestones
                1. Key-based SSH login set up between the two VMs and password login tested.
                2. Files copied with scp and synchronised with rsync, preserving permissions.
                3. tar archives created and extracted with two compression types.
                4. Files found by owner, size and age and archived in one line.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Key-based login works between the VMs, and a compressed archive of files found by owner and age is created and extracted correctly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Generate an SSH key pair and copy it to the second VM"
                - "Synchronise a directory with rsync and check permissions survived"
                - "Create and extract tar archives with two compression types"
                - "Find files by owner and age and archive them in one command line"
            - name: Moving between RHEL and Ubuntu habits
              description: |-
                ## Purpose
                Engineers who use one family at work and sit an exam on the other lose time on small differences: dnf against apt, firewalld against ufw, SELinux against AppArmor, NetworkManager against netplan. A side-by-side sheet, practised on a VM of the exam's distribution, stops work habits leaking into the exam.

                ## Milestones
                1. A two-column sheet comparing package, firewall, network, security module and log tools.
                2. Each row practised once on the exam distribution.
                3. Default file locations that differ noted.
                4. A mixed task set done on the exam distribution without reaching for the other family's command.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A comparison sheet of at least ten tool differences exists and a mixed task set is completed on the exam distribution without errors from the wrong family."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List ten tasks you do at work and the command for each on both families"
                - "Practise each row once on the exam distribution"
                - "Note default file and log locations that differ"
                - "Run a mixed task set on the exam distribution"
            - name: Exam task triage and time strategy
              description: |-
                ## Purpose
                Candidates fail most often by spending forty minutes on one stubborn task while easy ones sit untouched. A fixed routine for the opening minutes, a rule for when to skip, and a final check pass gives every task a fair share of the clock.

                ## Milestones
                1. An opening routine written: read all tasks, note dependencies such as networking or repositories that others rely on.
                2. A skip rule agreed, such as moving on after ten minutes stuck.
                3. A final fifteen-minute check pass planned, including a reboot.
                4. The routine tested in two timed mocks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written triage routine with a skip rule and final reboot check, used in two mocks with no task left unattempted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write an opening routine that finds tasks other tasks depend on"
                - "Set a skip rule for tasks you are stuck on"
                - "Plan a final check pass that includes a reboot"
                - "Use the routine in your next two timed mocks"
            - name: Exam readiness decision from mock scores
              description: |-
                ## Purpose
                Booking too early wastes the fee, and booking late lets knowledge fade. Deciding from evidence, such as two consecutive mocks above a margin over the passing score with every task surviving reboot, turns a nervous guess into a clear yes or a dated delay.

                ## Milestones
                1. A readiness rule written before the next mock, for example two passes in a row with a set margin.
                2. The last three mock scores and the coverage log reviewed.
                3. A decision recorded: book now, or delay to a named date.
                4. If delayed, the weakest two objectives scheduled first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written readiness rule and a recorded decision to book or delay to a named date, based on the last three mock scores."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule before the next mock"
                - "Compare the last three mock scores with the rule"
                - "Record the decision to book or delay, with a date"
                - "Schedule the two weakest objectives first if you delay"
            - name: Remote or test centre exam setting
              description: |-
                ## Purpose
                Where an exam can be taken either at a test centre or remotely, each has trade-offs: a remote exam can require a particular webcam, a bootable USB or a cleared room, while a centre means travel and a fixed timetable. Choosing on facts, after checking the provider's current requirements, avoids a failed system check on the day.

                ## Milestones
                1. The delivery options currently offered for your exam listed from the official site.
                2. Remote hardware, network and room requirements checked against what you have.
                3. Nearest test centre, travel time and available dates noted, if centres are offered.
                4. A setting chosen and written down with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of remote or test centre delivery, made after checking the provider's current hardware and room requirements."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the delivery options the official site currently offers for your exam"
                - "Check your computer, webcam and network against the remote requirements"
                - "Find the nearest test centre and its travel time, if one exists"
                - "Write down the setting you chose and why"
            - name: Employer sponsorship case for a Linux exam
              description: |-
                ## Purpose
                Many employers pay for exams, courses or training subscriptions if asked with a clear link to the work. A one-page case naming the servers you look after, the incidents better Linux skills would shorten and the total cost makes approval much more likely.

                ## Milestones
                1. Your employer's training budget or policy checked.
                2. A one-page case written with cost, timeline and the work it supports.
                3. The case sent to your manager.
                4. The answer recorded, with any conditions such as a service commitment.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page sponsorship request with costs and work benefits sent to your manager, with the answer and any conditions recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's training budget or policy"
                - "Ask the agent to draft a one-page case from your costs and the servers you support"
                - "Edit the draft and send it to your manager"
                - "Record the answer and any conditions attached"
            - name: Booking the Linux exam slot
              description: |-
                ## Purpose
                Booking turns a plan into a date, and slots at popular times can fill weeks ahead. Booking once the readiness rule is met, with time left for one more mock, and checking ID names match exactly, removes the last avoidable risks.

                ## Milestones
                1. Any discount, bundle or employer voucher applied before payment.
                2. A slot booked at a time of day you study best.
                3. The name on your account checked against your ID.
                4. The confirmation, rules and reschedule deadline saved.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam slot is booked, the account name matches your ID, and the confirmation and reschedule deadline are saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check for discounts, bundles or an employer voucher before paying"
                - "Book a slot at the time of day you study best"
                - "Check the account name matches your ID exactly"
                - "Save the confirmation and note the reschedule deadline"
            - name: Remote exam machine and room check
              description: |-
                ## Purpose
                Remote Linux exams can depend on specific hardware, a live boot image or a provider app, plus a cleared desk and a stable connection. Running every published check a few weeks ahead leaves time to borrow a webcam or arrange another room.

                ## Milestones
                1. The provider's current remote requirements printed or saved.
                2. Any system test or boot media prepared and run on the exact machine you will use.
                3. The room cleared and lit to the stated rules.
                4. A backup plan for power and connection written down.

                ## Notes
                Skip this project if you chose a test centre. Run the system test again two days before the exam.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The provider's system test has passed on the exam machine, and the room and backup plan meet the written requirements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the provider's current remote exam requirements"
                - "Prepare any boot media or app and run the system test on your exam machine"
                - "Clear and light the room to the stated rules"
                - "Write a backup plan for power cuts and connection loss"
            - name: Final fourteen days before the Linux exam
              description: |-
                ## Purpose
                The last two weeks are for sharpening, not new topics. A short plan of one final mock, weak objectives only, daily command cards and earlier nights means you arrive with speed and sleep rather than a crammed list of half-learned features.

                ## Milestones
                1. A final full mock taken ten to fourteen days before the exam.
                2. Remaining study limited to the three weakest objectives and the mistake log.
                3. The exam routine and persistence checklist rehearsed until you can write them from memory.
                4. Normal sleep kept for the final four nights.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A final mock taken ten to fourteen days out, with study limited to three named weak objectives and the persistence checklist recited from memory."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Take the final full mock ten to fourteen days before the exam"
                - "Pick the three weakest objectives for the remaining days"
                - "Write the persistence checklist from memory and compare with the original"
                - "Stop new study two evenings before the exam"
            - name: Linux exam day run sheet
              description: |-
                ## Purpose
                Small things go wrong on the day: an expired ID, a late start, a forgotten reboot before submitting. A one-page run sheet covering the night before, arrival or check-in, the opening routine and the final reboot check keeps your attention on the tasks.

                ## Milestones
                1. ID, confirmation and travel or check-in timing on one page.
                2. Food, water and breaks planned within the rules.
                3. The opening triage routine and final reboot check written at the bottom.
                4. Run sheet followed and the exam completed.
              priority: high
              deadlineOffsetDays: 92
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat on the booked date using a one-page run sheet that includes ID, timing, triage routine and final reboot check."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your ID is valid and matches the booking"
                - "Write the timing for the night before, travel or check-in and the start"
                - "Add your triage routine and final reboot check to the sheet"
                - "Sit the exam using the run sheet"
            - name: Retake plan after a failed attempt
              description: |-
                ## Purpose
                Failing a hands-on Linux exam is common and usually traceable to two or three objectives or to persistence. Reading the score report the same week, while the tasks are fresh, and booking a retake within a set window keeps the work you have done from fading.

                ## Milestones
                1. The score report saved and objective areas below standard listed.
                2. Your memory of difficult tasks written down within two days, without breaching the exam agreement.
                3. A four to six week plan focused on the weak areas.
                4. A retake booked, using any included retake if your exam has one.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retake plan naming the weak objectives from the score report, with a retake date booked within eight weeks of the first attempt."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the score report and list the areas below standard"
                - "Note which kinds of task felt hard, without recording exam content"
                - "Write a four to six week plan for the weak areas"
                - "Book the retake and check whether one is included"
            - name: Certificate verification and profile update
              description: |-
                ## Purpose
                Passing is only useful once employers can see and verify it. Saving the certificate and its ID, adding the digital badge to your profiles and updating your CV the week results arrive takes an hour and is easy to forget once work takes over again.

                ## Milestones
                1. Certificate, certification ID and verification link saved.
                2. Digital badge accepted and added to your professional profile.
                3. CV and internal skills record updated.
                4. Expiry or renewal date written in your calendar.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Certificate and verification link saved, badge on your profile, CV updated and the expiry date in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save the certificate, certification ID and verification link"
                - "Accept the digital badge and add it to your profile"
                - "Update your CV and any internal skills record"
                - "Put the expiry or renewal date in your calendar"
            - name: RHCSA plan for a Windows administrator
              description: |-
                ## Purpose
                Administrators moving from Windows Server bring strong concepts in identity, storage and services but no muscle memory for the shell, file permissions or text config files. An extra four weeks of command line foundations before the main plan prevents the exam objectives from feeling like a foreign language.

                ## Milestones
                1. A map from familiar Windows concepts to their Linux equivalents written.
                2. Four weeks of shell, file system and editor practice done before objective study.
                3. Daily terminal use at work or home for small tasks.
                4. The skills audit retaken after the four weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A concept map from Windows to Linux exists and the skills audit shows no objective rated zero after four weeks of foundations."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map ten Windows Server tasks you know to their Linux equivalents"
                - "Do four weeks of shell, file system and vim practice before objective study"
                - "Use the terminal for one small real task each day"
                - "Retake the skills audit after the four weeks"
            - name: Linux exam study around shift work
              description: |-
                ## Purpose
                Operations engineers on rotas and on-call often cannot keep set evenings, and a missed week can undo a fortnight. Planning study against the rota, with short drills on busy days and longer lab sessions on rest days, keeps progress steady when the calendar keeps moving.

                ## Milestones
                1. The next two months of rota and on-call marked on the study calendar.
                2. Longer lab sessions placed on rest days, short drills on shift days.
                3. A portable practice set up, such as a laptop VM or cloud instance, for quiet on-call hours where allowed.
                4. Weekly hours tracked against a realistic lower target.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The study calendar matches the rota for two months, and weekly hours meet the lower target in at least six of eight weeks."
                cadence: rolling
              tasks:
                - "Mark the next two months of shifts and on-call on the study calendar"
                - "Place long lab sessions on rest days and drills on shift days"
                - "Set up a portable VM for quiet periods where your employer allows"
                - "Plan the coming week's sessions against the rota @recurring(weekly:mon)"
            - name: Studying from the Caribbean with power and internet backups
              description: |-
                ## Purpose
                Candidates in the Caribbean often face power cuts, variable broadband and few or no local test centres, so remote delivery and a reliable home set-up matter more. Planning backups, checking exam pricing in your region and finding local study partners removes problems that have nothing to do with Linux.

                ## Milestones
                1. Nearest test centres and remote delivery options for your country listed.
                2. A UPS or battery backup tested with your laptop and router for the exam length.
                3. A mobile hotspot tested as a second connection.
                4. A local or regional study group or user group found.

                ## Notes
                Remote exam rules may not allow switching networks mid-exam. Read them before relying on a hotspot.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan names your delivery option, a tested power backup for the exam length and a tested second connection."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List test centres and remote options available in your country"
                - "Test a UPS or battery with your laptop and router for the exam length"
                - "Test a mobile hotspot as a backup connection and read the rules on switching"
                - "Run the backup power and hotspot for ten minutes to check they still work @recurring(monthly:5)"
            - name: Running a Linux study group for a support team
              description: |-
                ## Purpose
                Team leads who want several engineers certified get better results from a weekly group than from handing out course licences. A short weekly session where members swap broken VMs and fix each other's faults builds skill and shared knowledge of the servers the team runs.

                ## Milestones
                1. Members, target exam and a shared calendar agreed.
                2. A weekly session where each person breaks a VM and another fixes it.
                3. Attendance and mock scores tracked privately with each member.
                4. At least half the group booked for the exam within six months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A weekly study group runs for at least ten sessions, and half its members have booked the exam within six months."
                cadence: rolling
              tasks:
                - "Ask the team who wants to join and agree a target exam"
                - "Set a weekly slot and a shared folder of practice tasks"
                - "Run the break-and-fix session for the group @recurring(weekly:wed)"
                - "Check each member's mock scores privately once a month"
            - name: Next step after RHCSA toward RHCE and Ansible
              description: |-
                ## Purpose
                For Red Hat holders, RHCE builds on RHCSA by automating the same administration with Ansible, and moving up can also keep the earlier credential current. Deciding whether and when to go further, while the RHCSA skills are fresh, makes the next year's study deliberate.

                ## Milestones
                1. The current RHCE objectives and prerequisites checked on the official site.
                2. The current rules on how holding a higher credential affects RHCSA validity noted.
                3. Three RHCSA tasks automated with a simple Ansible playbook as a trial.
                4. A decision recorded: go for RHCE now, later, or not at all.

                ## Notes
                LFCS holders can look at the Linux Foundation's other performance exams instead. Check each body's current renewal rules rather than relying on forum posts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on RHCE with a target date or reason, after automating three RHCSA tasks in a trial playbook."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the current RHCE objectives and prerequisites"
                - "Note how a higher credential affects your RHCSA validity under current rules"
                - "Automate three RHCSA tasks with a trial Ansible playbook"
                - "Record the decision and a target date"
            - name: Server build runbooks from lab notes
              description: |-
                ## Purpose
                After the exam, your lab notes hold tested procedures for storage, users, SELinux, networking and recovery that colleagues can use. Turning them into short runbooks for your team's real servers gets more value from the study hours and shows the credential in practice.

                ## Milestones
                1. Lab notes sorted into procedures worth keeping.
                2. Five runbooks written for real tasks, each with a check step.
                3. Each runbook tested on a non-production machine by a colleague.
                4. The runbooks stored where the team already keeps documentation.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Five tested runbooks with check steps are in the team's documentation store, each followed successfully by a colleague."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sort your lab notes into procedures your team would use"
                - "Write the first runbook with a check step at the end"
                - "Ask a colleague to follow it on a non-production machine"
                - "Write or revise one runbook from your lab notes @recurring(monthly:27)"
---

# Linux Certification (RHCSA, LFCS)

This area is for engineers studying for a performance-based Linux exam such as Red Hat's RHCSA or the Linux Foundation's LFCS, where you configure real machines at a terminal and a grader checks the result afterwards. It starts with foundations (choosing the exam, the official objectives, a skills audit, a baseline timed task set, practice VMs and a dated plan), then the weekly study, drill, rebuild and reboot-check machinery, the skills behind each objective from users and permissions to LVM, systemd, nmcli, firewalld, SELinux, boot recovery and Podman, the decisions about readiness and exam setting, booking and exam day, plans for Windows administrators, shift workers, Caribbean candidates and support team leads, and specialist steps toward RHCE and production runbooks.

The rhythm is study blocks on set weekdays, a short daily command drill, a weekly VM rebuild and reboot check, a weekly mistake review, a monthly timed mock, coverage update and set of break-and-fix sessions for storage, SELinux, networking and boot recovery, and a quarterly check for objective and version changes. The Skills matrix, Purchase decision and Metrics log templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
