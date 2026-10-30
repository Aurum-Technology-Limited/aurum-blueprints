---
id: tech-certifications.azure-administrator-az-104
name: Azure Administrator (AZ-104)
description: "A route to the Microsoft Azure Administrator Associate: the official study guide, a capped sandbox subscription, labs for identity, storage, compute, networking and monitoring, timed practice exams, booking and the yearly renewal."
category: personal
version: 1.0.0
tags: [tech-certifications, azure-administrator-az-104, engineer, microsoft, azure, cloud-administration, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Azure Administrator (AZ-104)
          description: "Studying for Azure Administrator: identity, storage, compute, virtual networking and monitoring, with hands-on labs and practice exams before booking."
          projects:
            - name: AZ-104 study guide and skills outline folder
              description: |-
                ## Purpose
                Microsoft writes AZ-104 from its published study guide on Microsoft Learn, which lists the skills measured and keeps a change log when the outline is revised. Saving that guide, the exam page and the current policies in one dated folder means every later choice about what to study is checked against the source, not a two-year-old video course.

                ## Milestones
                1. The current AZ-104 study guide saved with the date of its last revision.
                2. The five skill areas and their sub-skills copied onto one summary page.
                3. Current exam price for your country, retake policy and rescheduling rules noted from the Microsoft exam page.
                4. One folder holding the study guide, summary page and policy note.

                ## Notes
                Do not rely on percentages or question counts quoted in blog posts. Read them from the study guide on the day you check, and recheck before you book.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds the dated AZ-104 study guide, a one-page skills summary and a note of the current price, retake and rescheduling rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the AZ-104 exam page on Microsoft Learn and download the study guide"
                - "Copy the five skill areas and their sub-skills onto one summary page"
                - "Note the exam price, retake policy and rescheduling rules with today's date"
                - "Check the AZ-104 study guide change log for revised skills @recurring(quarterly)"
            - name: Readiness check of your Azure admin background
              description: |-
                ## Purpose
                AZ-104 assumes months of hands-on administration, not just reading, and Microsoft recommends comfort with the portal, PowerShell, the Azure CLI and ARM templates. Rating yourself against each sub-skill before you start tells you whether to aim for an exam in two months or six, and whether a refresher on cloud concepts would save time first.

                ## Milestones
                1. Every sub-skill in the study guide rated as done at work, done in a lab, read about, or new.
                2. A count of sub-skills in each rating.
                3. A written verdict on the realistic study length in weeks.
                4. A decision recorded on whether to revise cloud fundamentals before starting.

                ## Notes
                AZ-900 is not a prerequisite. If most of the outline is new, a week on fundamentals content is usually cheaper than a failed attempt.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated self-rating of every AZ-104 sub-skill exists, with a study length in weeks and a decision on fundamentals revision written beneath it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate each study guide sub-skill as work, lab, read or new"
                - "Count how many sub-skills sit in each rating"
                - "Estimate study weeks from the count of lab and new items"
                - "Write down whether you will revise cloud fundamentals first"
            - name: Azure sandbox subscription with budget alerts
              description: |-
                ## Purpose
                Every AZ-104 skill is easier to remember once you have broken it yourself, but a forgotten VPN gateway or premium disk can run up a bill in days. A dedicated practice subscription, with a budget, alerts to your phone and owner rights only for you, keeps labs separate from work and keeps the cost predictable.

                ## Milestones
                1. A practice subscription in place, from a free account, a monthly credit benefit or a pay-as-you-go plan you control.
                2. A monthly budget set in Cost Management with alerts at 50, 80 and 100 percent.
                3. Alert emails confirmed arriving on the device you check daily.
                4. The subscription kept apart from any employer tenant and production resources.

                ## Notes
                Microsoft Learn sandboxes cover many modules at no cost and expire on their own. Use them first and save your own subscription for labs that need more time.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A practice subscription exists with a monthly budget and three alert thresholds, and a test alert has reached your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide which subscription offer you will use for practice labs"
                - "Create a monthly budget in Cost Management for the subscription"
                - "Add alerts at 50, 80 and 100 percent of the budget"
                - "Confirm an alert email reaches the phone you check every day"
            - name: Microsoft Learn and certification profile set-up
              description: |-
                ## Purpose
                Exams are booked from your Microsoft certification profile, and the name on it has to match the photo ID you show on the day, or you can be turned away. Linking your Learn profile, checking the legal name and choosing which email receives renewal notices now avoids a mismatch weeks later.

                ## Milestones
                1. A Microsoft Learn profile signed in with the account you will keep after changing jobs.
                2. The certification profile created with your legal name exactly as on your ID.
                3. The contact email set to one you will still read in a year.
                4. Any employer discount or voucher code noted against the profile.

                ## Notes
                Use a personal Microsoft account rather than a work account. Certifications earned on a work account are awkward to move when you leave.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A certification profile exists under a personal account, with a legal name that matches your ID and a long-term contact email."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Sign in to Microsoft Learn with the personal account you will keep"
                - "Create the certification profile and enter your legal name as on your ID"
                - "Set the contact email to one you will read after any job change"
                - "Note any voucher or discount code you have against the profile"
            - name: Baseline score on the free Microsoft practice assessment
              description: |-
                ## Purpose
                Microsoft publishes a free practice assessment for AZ-104 on the exam page, built to the same skills outline. Taking it cold in the first fortnight gives you a score per skill area to measure progress against, and shows which domain to study first.

                ## Milestones
                1. The free practice assessment taken once in timed mode without notes.
                2. The overall score and the score for each skill area recorded with the date.
                3. The two weakest skill areas named.
                4. The exam sandbox demo opened so the question formats are familiar.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score for each of the five skill areas is recorded, with the two weakest areas named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Take the free AZ-104 practice assessment in timed mode"
                - "Record the overall score and each skill area score with the date"
                - "Name the two weakest skill areas at the top of your plan"
                - "Click through the exam sandbox demo to see each question format"
            - name: Choosing the main AZ-104 study resources
              description: |-
                ## Purpose
                Free Microsoft Learn paths cover the whole outline, while paid video courses, lab platforms and question banks vary widely in how current they are. Choosing one main course, one lab source and one question bank, checked against the study guide's last revision date, stops you buying four overlapping products.

                ## Milestones
                1. The free Microsoft Learn learning paths for AZ-104 listed as the default.
                2. Up to three paid options compared on update date, labs included, price and reviews.
                3. One main course, one lab source and one question bank chosen.
                4. Any purchase made with the receipt filed for an employer claim.

                ## Notes
                Start from the **Purchase decision** template. Avoid any question bank that claims to hold real exam questions: it breaks the exam agreement and can cost you the credential.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of one main course, one lab source and one question bank, each checked as updated after the study guide's last revision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the free Microsoft Learn paths for AZ-104 as your default resource"
                - "Compare up to three paid courses on update date, labs and price"
                - "Pick one question bank that was refreshed after the last study guide change"
                - "Write down the final set of three resources and why"
            - name: AZ-104 study calendar to a target exam week
              description: |-
                ## Purpose
                Without a date, study expands to fill whatever time is left after work. Working back from a target exam week, with each skill area given weeks in proportion to your readiness check, turns a vague intention into a plan you can fall behind on and notice.

                ## Milestones
                1. A target exam week chosen from your readiness verdict.
                2. Weeks allocated to each of the five skill areas, weakest first.
                3. Two buffer weeks and the final fortnight of review marked.
                4. The calendar shared with anyone whose evenings it affects.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written calendar names the target exam week and the weeks for each skill area, buffers and final review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target exam week from your study length estimate"
                - "Give each skill area a block of weeks, weakest area first"
                - "Mark two buffer weeks and the final two weeks of review"
                - "Share the calendar with the people whose evenings it changes"
            - name: Azure CLI, PowerShell and Cloud Shell set-up
              description: |-
                ## Purpose
                Exam questions expect you to recognise the right az command or Az PowerShell cmdlet, and labs go faster when you can script the boring parts. Installing both tools locally, configuring Cloud Shell storage and signing in to the sandbox subscription removes friction from every later lab.

                ## Milestones
                1. The Azure CLI and the Az PowerShell module installed and updated on your machine.
                2. Both tools signed in and pointed at the practice subscription by default.
                3. Cloud Shell opened with its storage created in the practice subscription.
                4. A code editor set up with the Bicep extension.

                ## Notes
                Check which subscription is active before every lab. Running a delete against the wrong context is the classic mistake for people who also hold work access.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The CLI, Az PowerShell and Cloud Shell all list resource groups in the practice subscription, and the editor validates a Bicep file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Install or update the Azure CLI and the Az PowerShell module"
                - "Sign in with both tools and set the practice subscription as default"
                - "Open Cloud Shell and create its storage in the practice subscription"
                - "Install the Bicep extension in your code editor"
            - name: Lab naming, tagging and teardown conventions
              description: |-
                ## Purpose
                After a month of labs, a practice subscription fills with resource groups nobody can explain and disks nobody remembers attaching. A naming pattern, two required tags and a rule that every lab lives in its own resource group make clean-up a single delete and teach the governance habits the exam tests.

                ## Milestones
                1. A naming pattern written down for resource groups and common resource types.
                2. Two tags chosen, such as skill area and delete-after date, and used on every lab.
                3. A rule recorded that each lab gets one resource group, deleted when done.
                4. A short script or saved command that lists resource groups with their tags.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page convention for names, two required tags and one resource group per lab exists, with a saved command that lists groups by tag."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a naming pattern for resource groups, VMs, VNets and storage"
                - "Choose two tags every lab resource group must carry"
                - "Save a CLI command that lists resource groups with their tags"
                - "Apply the convention to any lab resources that already exist"
            - name: Four study sessions a week routine
              description: |-
                ## Purpose
                Steady contact beats weekend marathons for AZ-104, because portal paths and command syntax fade within days. Two weekday evenings for reading, one for questions and a longer weekend lab keep all five skill areas warm without eating every evening.

                ## Milestones
                1. Four fixed study slots in the calendar, one of them at least two hours for labs.
                2. A rule for what happens when a slot is missed, such as moving it within 48 hours.
                3. Four consecutive weeks completed with at least three of four slots kept.
                4. The routine adjusted once after the first month based on what slipped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekly study slots are in the calendar and at least three were kept in each of four consecutive weeks."
                cadence: rolling
              tasks:
                - "Put four recurring study slots into your calendar this week"
                - "Study the current Microsoft Learn module for one hour @recurring(weekly:tue,thu)"
                - "Spend two hours on the weekend lab for this week's skill @recurring(weekly:sat)"
                - "Write your missed-slot rule at the top of your study plan"
            - name: One lab per learning module rule
              description: |-
                ## Purpose
                Reading that a peering is non-transitive is not the same as watching traffic fail between two spokes. Pairing every module with a small lab, done in the sandbox or your own subscription and written up in three lines, turns reading into memory that survives the exam's scenario questions.

                ## Milestones
                1. A lab list with one hands-on task for each module in your learning path.
                2. Each completed lab written up with what you built, what broke and the fix.
                3. Labs completed for every sub-skill rated new or read in your readiness check.
                4. Lab notes stored where you can search them during final review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every module in the learning path has a matching lab note recording what was built, what failed and how it was fixed."
                cadence: rolling
              tasks:
                - "List one hands-on task for each module in your learning path"
                - "Write three lines on what you built, broke and fixed after each lab"
                - "Check that this week's modules each have a lab note @recurring(weekly:sun)"
                - "Tick off labs against the new and read items in your readiness check"
            - name: Wrong answer log and weekly review
              description: |-
                ## Purpose
                Most people who fail AZ-104 keep missing the same handful of distinctions: service endpoint versus private endpoint, RBAC versus Entra roles, availability set versus zone. Logging every wrong practice answer with the reason and reviewing the log each Friday shows which confusions repeat.

                ## Milestones
                1. A log with columns for question topic, skill area, your answer, the right answer and why.
                2. Every wrong answer from practice sets added within a day.
                3. A weekly review naming the three most repeated confusions.
                4. Each repeated confusion closed with a lab or a one-paragraph explanation in your own words.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong answer log covers every practice set, and each weekly review names three repeated confusions with the action taken on each."
                cadence: rolling
              tasks:
                - "Set up the wrong answer log with topic, area, answers and reason columns"
                - "Review the log and name this week's three repeated confusions @recurring(weekly:fri)"
                - "Sort the log by skill area and compare it with last month @recurring(monthly:18)"
                - "Write a one-paragraph explanation for each repeated confusion"
            - name: Monthly timed practice exam
              description: |-
                ## Purpose
                Scenario questions and case studies punish slow reading, and the only way to learn your pace is under the clock. A full timed practice exam once a month, scored by skill area, shows whether study time is going to the right places and whether you are ready to book.

                ## Milestones
                1. One full-length timed practice exam completed each month in exam conditions.
                2. Scores by skill area recorded beside the previous month's.
                3. Time per question checked, with any case study overruns noted.
                4. Two consecutive months at or above your own readiness threshold before booking.

                ## Notes
                Set your own threshold comfortably above the pass mark Microsoft reports at the time. Practice banks are rarely harder than the real exam on scenarios.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A timed practice exam is taken monthly and its skill area scores and pacing are recorded beside the previous attempt."
                cadence: rolling
              tasks:
                - "Choose your personal readiness threshold and write it in your plan"
                - "Sit a full timed practice exam in exam conditions @recurring(monthly:12)"
                - "Retake the free Microsoft practice assessment in practice mode @recurring(monthly:26)"
                - "Record skill area scores and minutes per question after each attempt"
            - name: Lab spend review and resource clean-up
              description: |-
                ## Purpose
                Lab costs rarely come from what you meant to build; they come from public IPs, gateways, snapshots and Log Analytics data left behind. A weekly teardown and a monthly look at Cost Management keep the practice subscription inside budget and teach you where Azure charges hide.

                ## Milestones
                1. Every lab resource group past its delete-after tag removed each week.
                2. Orphaned disks, public IPs and snapshots checked for and deleted.
                3. A monthly cost review naming the three most expensive services.
                4. Three consecutive months inside the budget you set.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly spend on the practice subscription stays inside budget for three months, with each monthly review naming the top three costs."
                cadence: rolling
              tasks:
                - "Delete lab resource groups past their delete-after tag @recurring(weekly:sun)"
                - "Review Cost Management by service and note the top three costs @recurring(monthly:3)"
                - "Search the subscription for unattached disks and unused public IPs"
                - "Set a shutdown schedule on any VM you keep between labs"
            - name: Skills outline coverage tracker and monthly reset
              description: |-
                ## Purpose
                It is easy to spend three weeks on networking because it is interesting and leave monitoring untouched. A tracker listing every sub-skill with its status, lab done and latest practice score, reset once a month, keeps the whole outline in view and shows where the plan needs to move.

                ## Milestones
                1. Every sub-skill from the study guide listed in one tracker.
                2. Status, lab done and latest practice score filled in for each.
                3. A monthly reset that moves study weeks toward the lowest scores.
                4. No sub-skill left untouched by the start of the final fortnight.

                ## Notes
                Start from the **Metrics log** template, with one row per sub-skill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker shows every AZ-104 sub-skill with status, lab and score, updated monthly, and none untouched by the final two weeks."
                cadence: rolling
              tasks:
                - "Copy every sub-skill from the study guide into the tracker"
                - "Fill in status, lab done and latest score for each row"
                - "Update the tracker and move study weeks toward low scores @recurring(monthly:28)"
            - name: Microsoft Learn documentation lookup drill
              description: |-
                ## Purpose
                Access to Microsoft Learn has been allowed during some role-based exams, but searching costs time you may not have. A short weekly drill, finding a specific limit or setting in the docs against the clock, shows you whether lookups help or hurt, and the docs are where you will check answers at work anyway.

                ## Milestones
                1. The current exam rules on documentation access checked on the Microsoft exam page.
                2. A list of twenty facts to look up, such as peering limits or SAS options.
                3. Average lookup time recorded for a weekly set of five.
                4. A personal rule on when to search during the exam and when to move on.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The current documentation access rule is noted, and a written lookup rule is based on at least four weeks of timed lookups."
                cadence: rolling
              tasks:
                - "Check whether the current AZ-104 rules allow Microsoft Learn access"
                - "List twenty Azure limits and settings you might need to look up"
                - "Time yourself finding five of them in the docs @recurring(weekly:wed)"
                - "Write your rule for when to search and when to move on"
            - name: CLI command and portal path flashcards
              description: |-
                ## Purpose
                Questions often show four nearly identical commands, or ask which blade holds a setting, and recognition fades fast. A small deck of az commands, PowerShell cmdlets and portal paths, reviewed for five minutes a day, keeps syntax familiar without another full study session.

                ## Milestones
                1. A deck of at least sixty cards covering commands and portal paths across all five skill areas.
                2. New cards added from every lab and wrong answer.
                3. A daily five-minute review kept on most days for a month.
                4. Cards answered correctly ten times retired from daily review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A flashcard deck of at least sixty AZ-104 commands and portal paths exists and was reviewed on at least twenty days in a month."
                cadence: rolling
              tasks:
                - "Create a flashcard deck with sixty commands and portal paths"
                - "Review the AZ-104 flashcard deck for five minutes @recurring(daily)"
                - "Add a card for every command you looked up during a lab"
            - name: Microsoft Entra users, groups and licences
              description: |-
                ## Purpose
                Identity is where most Azure administration starts, and the exam expects you to manage it in Microsoft Entra ID rather than just recognise the name. Working through users, guest accounts, dynamic and assigned groups, group-based licensing and self-service password reset in a test tenant makes these questions routine.

                ## Milestones
                1. Users created singly and by bulk upload in a test tenant.
                2. An assigned group and a dynamic membership rule both working.
                3. A guest user invited and their access limited.
                4. Self-service password reset configured for one pilot group.
                5. Practice questions on identity answered at or above your target score.

                ## Notes
                Some features, such as dynamic groups, need a premium licence tier. Use a trial in a test tenant, never your employer's directory.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes show users, guests, assigned and dynamic groups and SSPR configured in a test tenant, with identity questions at your target score."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create a separate test tenant or use a Learn sandbox for identity labs"
                - "Bulk-create ten users from a CSV file"
                - "Build a dynamic group rule based on department"
                - "Configure self-service password reset for one pilot group"
            - name: Azure RBAC role assignments and scope
              description: |-
                ## Purpose
                The exam keeps testing who can do what, where: the difference between Azure roles and Entra roles, inheritance from management group to resource, and when a custom role is justified. Assigning, testing and removing roles at each scope with a second account makes the inheritance visible.

                ## Milestones
                1. Built-in Owner, Contributor and Reader assigned at different scopes and tested with a second account.
                2. Check access used to explain one user's effective permissions.
                3. A custom role created from JSON with a narrow set of actions.
                4. A one-page note on Azure roles versus Entra roles in your own words.
                5. RBAC practice questions answered at or above your target score.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes record role assignments tested at three scopes, a working custom role and a written comparison of Azure and Entra roles."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Assign Reader at subscription scope to a second test account"
                - "Assign Contributor on one resource group and test what changes"
                - "Write a custom role definition in JSON and assign it"
                - "Explain Azure roles versus Entra roles in one page"
            - name: Azure Policy, resource locks and tags
              description: |-
                ## Purpose
                Governance questions describe a rule, such as only allowing certain regions or requiring a cost-centre tag, and ask for the right tool. Building a policy assignment, an initiative, a delete lock and an inherited tag in your sandbox shows what each one stops and what it only reports.

                ## Milestones
                1. A built-in policy assigned that denies resources outside two regions.
                2. A policy that audits or adds a required tag, with its compliance report checked.
                3. A delete lock and a read-only lock each tested against a real change.
                4. A note on which policy effects block, which modify and which only audit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes show a deny policy, a tag policy with compliance results and two lock types tested, plus a written table of policy effects."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Assign the allowed locations policy to your lab resource group"
                - "Create a policy that requires a delete-after tag and check compliance"
                - "Apply a read-only lock and record what it blocks"
                - "Write a short table of policy effects and what each one does"
            - name: Management groups, subscriptions and cost controls
              description: |-
                ## Purpose
                Administrators are expected to organise subscriptions under management groups, move resources between groups and subscriptions, and keep spending visible. A small hierarchy in your sandbox, plus budgets and cost analysis views, covers the questions that sit between governance and finance.

                ## Milestones
                1. A two-level management group hierarchy created over your practice subscription.
                2. A resource moved between resource groups, with the move limits noted.
                3. A cost analysis view saved and grouped by tag.
                4. Advisor cost recommendations reviewed and one acted on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes record a management group hierarchy, a completed resource move and a saved cost view grouped by tag."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create two management groups and place your practice subscription under one"
                - "Move a storage account between resource groups and note what changed"
                - "Save a cost analysis view grouped by your skill area tag"
                - "Read the Advisor cost recommendations for the subscription"
            - name: Storage accounts, redundancy and access tiers
              description: |-
                ## Purpose
                Storage questions turn on small differences: LRS against ZRS, geo-redundant reads, hot against cool, cold or archive, and what can be changed after creation. Creating accounts with different settings and trying to change them afterwards gives you the answers from experience rather than tables.

                ## Milestones
                1. Storage accounts created with at least three redundancy options and compared.
                2. Blobs moved between access tiers, including a rehydration from archive.
                3. A note on which settings can be changed after creation and which cannot.
                4. Storage practice questions answered at or above your target score.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes compare three redundancy options and four access tiers, with a list of settings that cannot be changed after creation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create storage accounts with LRS, ZRS and GRS redundancy"
                - "Upload a blob and move it through hot, cool and archive tiers"
                - "Try to change each setting after creation and record the result"
                - "Write a one-page table of redundancy options and their trade-offs"
            - name: Securing storage with SAS, keys and network rules
              description: |-
                ## Purpose
                Exam scenarios often ask for the narrowest way to give an app or a partner access to a container. Practising account keys, the different shared access signatures, stored access policies, identity-based access and storage firewalls side by side shows which option revokes cleanly and which does not.

                ## Milestones
                1. A service SAS and a user delegation SAS each created and tested.
                2. A stored access policy used to revoke a SAS without rotating keys.
                3. Access keys rotated and the effect on existing connections noted.
                4. The storage firewall set to allow one virtual network and your own IP only.
                5. A note ranking the access options from broadest to narrowest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes show two SAS types, a revocation via stored access policy, a key rotation and a storage firewall rule, each tested."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Generate a service SAS for one container and test it in a browser"
                - "Create a stored access policy and revoke a SAS through it"
                - "Rotate an access key and note which connections break"
                - "Restrict the storage firewall to one virtual network and your IP"
            - name: Azure Files, Blob lifecycle and AzCopy lab
              description: |-
                ## Purpose
                Day-to-day storage administration means file shares people map as drives, rules that age data into cheaper tiers, and moving large amounts of data without the portal. One lab that builds a file share, a lifecycle policy, soft delete and versioning, then copies data with AzCopy and Storage Explorer, covers the practical end of the storage domain.

                ## Milestones
                1. An Azure file share created and mounted from a virtual machine.
                2. A lifecycle management rule that moves blobs to cool after a set number of days.
                3. Soft delete and versioning enabled and a deleted blob restored.
                4. A folder copied up and down with AzCopy using a SAS.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lab notes record a mounted file share, a working lifecycle rule, a restored soft-deleted blob and an AzCopy transfer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a file share and mount it from a lab virtual machine"
                - "Write a lifecycle rule that moves blobs to cool after 30 days"
                - "Delete a blob with soft delete on and restore it"
                - "Copy a test folder to a container with AzCopy"
            - name: ARM templates and Bicep for administrators
              description: |-
                ## Purpose
                Template questions expect you to read, modify and deploy ARM and Bicep files rather than write large ones from scratch. Exporting a template from a resource group, converting it to Bicep, adding a parameter and redeploying it teaches you the structure well enough to spot the broken line in a question.

                ## Milestones
                1. A template exported from an existing lab resource group and read section by section.
                2. The same deployment written in Bicep with at least two parameters.
                3. A deployment run from the CLI and from the portal's custom deployment page.
                4. A deliberate error introduced and the deployment failure read and fixed.

                ## Notes
                Keep templates for your recurring labs. Rebuilding a network from a file in two minutes makes the weekly teardown painless.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Bicep file with parameters deploys one of your labs from the CLI, and lab notes record one failed deployment read and fixed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export the template from one lab resource group"
                - "Convert the exported template to Bicep and add two parameters"
                - "Deploy the Bicep file with the Azure CLI"
                - "Break one property on purpose and read the deployment error"
            - name: Virtual machine availability, disks and scale sets
              description: |-
                ## Purpose
                Compute questions mix sizing, disks and availability: when to use an availability set or zones, how to resize, how to add and encrypt a data disk, and how a scale set grows. Building each of these on the smallest sizes your budget allows makes the trade-offs concrete.

                ## Milestones
                1. Two VMs placed in an availability set and two across availability zones, with the differences noted.
                2. A data disk added, initialised and encrypted on one VM.
                3. A VM resized and moved to another resource group.
                4. A scale set with an autoscale rule that adds an instance under load.
                5. Compute practice questions answered at or above your target score.

                ## Notes
                Use the smallest burstable sizes and delete the lab the same day. Scale sets and zonal VMs are the easiest way to blow a lab budget.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes cover an availability set, zonal VMs, an encrypted data disk, a resize and a scale set that autoscaled."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Deploy two small VMs into an availability set and note fault domains"
                - "Add and encrypt a data disk on one VM"
                - "Create a scale set with a CPU-based autoscale rule"
                - "Resize a VM and record whether it needed a restart"
            - name: App Service plans and container hosting basics
              description: |-
                ## Purpose
                Administrators are expected to provision and scale App Service and run simple containers, even if developers own the code. Deploying a sample web app with a staging slot, scaling its plan, and running the same container image in Container Instances and Container Apps covers the platform side of the compute domain.

                ## Milestones
                1. An App Service plan created, scaled up and scaled out, with costs noted.
                2. A deployment slot used to swap a new version into production.
                3. A custom domain or TLS setting configured on the sample app.
                4. One container image run in both Container Instances and Container Apps.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lab notes show an App Service plan scaled both ways, a slot swap and one container image running on two container services."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Deploy a sample web app to a new App Service plan"
                - "Add a staging slot and swap it into production"
                - "Run a public sample container image in Container Instances"
                - "Note which container service you would choose for three scenarios"
            - name: Virtual network, subnet and peering lab
              description: |-
                ## Purpose
                Networking is where many AZ-104 candidates lose most marks, because the questions need you to picture traffic. Building a hub and two spokes, peering them, and proving that spoke-to-spoke traffic fails until you add routing makes address spaces, peering and gateway transit stick.

                ## Milestones
                1. Three virtual networks with non-overlapping address spaces and named subnets.
                2. Hub-to-spoke peerings working, tested with a VM in each network.
                3. Spoke-to-spoke traffic shown to fail, then fixed with a route or a hub appliance.
                4. Azure Bastion used to reach a VM without a public IP.
                5. The whole lab saved as a Bicep file to rebuild later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hub and two spokes deploy from one Bicep file, with lab notes showing peering tests, the failed spoke-to-spoke test and its fix."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch a hub and two spokes with non-overlapping address ranges"
                - "Deploy the three virtual networks and peer each spoke to the hub"
                - "Test spoke-to-spoke traffic and record why it fails"
                - "Connect to a VM through Azure Bastion with no public IP"
            - name: NSG, ASG and effective route troubleshooting lab
              description: |-
                ## Purpose
                Troubleshooting questions describe a VM that cannot be reached and ask which rule or route is to blame. Deliberately blocking traffic with network security groups, grouping VMs with application security groups and a user-defined route, then finding the cause with Network Watcher, is the fastest way to get these right.

                ## Milestones
                1. NSGs applied at subnet and NIC level, with rule priority effects recorded.
                2. An application security group used in place of IP addresses in a rule.
                3. A user-defined route sending traffic somewhere unexpected.
                4. IP flow verify, next hop and effective security rules used to find each fault.

                ## Notes
                Ask a study partner, or the agent, to break your lab in a way you do not know about, then find the fault from the tools alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Lab notes record at least four deliberate network faults and the Network Watcher tool that identified each one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Apply NSGs at subnet and NIC level with conflicting rules"
                - "Replace IP-based rules with an application security group"
                - "Add a user-defined route that breaks one connection"
                - "Find each fault with IP flow verify, next hop and effective rules"
            - name: Load Balancer or Application Gateway decisions
              description: |-
                ## Purpose
                Exam scenarios ask which service distributes traffic for a given need: layer 4 or layer 7, public or internal, path-based routing or a web application firewall. Building a small Load Balancer and reading the Application Gateway setup side by side gives you a decision table you can apply in seconds.

                ## Milestones
                1. A public Standard Load Balancer with two backend VMs and a health probe working.
                2. An internal load balancer configured and tested from another subnet.
                3. Application Gateway features read and its listener, rule and backend pool mapped.
                4. A one-page decision table covering Load Balancer, Application Gateway and when each fits.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A working load balancer lab and a written decision table comparing Load Balancer and Application Gateway for at least five scenarios."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Deploy a Standard Load Balancer with two small backend VMs"
                - "Stop one backend and watch the health probe remove it"
                - "Map the parts of an Application Gateway against a load balancer"
                - "Write a decision table for five traffic scenarios"
            - name: Azure DNS, service endpoints and private endpoints lab
              description: |-
                ## Purpose
                Service endpoints and private endpoints both keep traffic off the public internet, but they behave differently for DNS, on-premises access and cost, and the exam knows people mix them up. Building both against the same storage account, with a private DNS zone, settles the difference.

                ## Milestones
                1. A public DNS zone and a private DNS zone created and linked to a virtual network.
                2. A service endpoint enabled on a subnet and the storage firewall restricted to it.
                3. A private endpoint added to the same storage account with name resolution checked.
                4. A side-by-side note on what each option changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Lab notes show a private DNS zone, a service endpoint and a private endpoint on one storage account, with a written comparison."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a private DNS zone and link it to your hub network"
                - "Enable a service endpoint for storage on one subnet"
                - "Add a private endpoint to the same storage account"
                - "Resolve the storage name from a VM and note the IP returned"
            - name: Same-day VPN gateway lab on a tight budget
              description: |-
                ## Purpose
                Hybrid connectivity appears in the outline, but a VPN gateway is billed by the hour and can take well over half an hour to deploy. Planning a VNet-to-VNet connection between two regions from a Bicep file, deploying it, testing it and deleting it the same day gives hands-on experience for the price of a coffee.

                ## Milestones
                1. The gateway subnet, SKU and connection settings written down before deploying.
                2. Two VPN gateways deployed and a VNet-to-VNet connection showing connected.
                3. Traffic tested between VMs in each network.
                4. Everything deleted the same day, confirmed in Cost Management the next morning.

                ## Notes
                Read about site-to-site, point-to-site and ExpressRoute alongside the lab; you need to recognise when each fits even without building them.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Lab notes record a working VNet-to-VNet VPN connection, and next-day cost data shows the gateways were deleted the same day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the gateway subnet, SKU and connection plan before deploying"
                - "Deploy both gateways from a template early in the day"
                - "Test traffic between the two networks once connected"
                - "Delete the gateways and check the next day's cost data"
            - name: Azure Monitor, Log Analytics and alert rules lab
              description: |-
                ## Purpose
                Monitoring is the domain people leave for last and then guess at. Sending VM and activity logs to a Log Analytics workspace, writing a few KQL queries, and building a metric alert with an action group that actually emails you covers what an administrator does when something goes wrong at 2 a.m.

                ## Milestones
                1. A Log Analytics workspace receiving VM and activity log data.
                2. Three KQL queries saved: failed sign-ins or operations, CPU over time and recent deletes.
                3. A metric alert and a log alert each firing to an action group that emails you.
                4. VM Insights or Network Watcher connection monitor enabled on one VM.

                ## Notes
                Set a daily cap on the workspace before you start. Log ingestion is a common surprise on lab bills.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A workspace with three saved KQL queries exists, and one metric and one log alert have each delivered an email to you."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a Log Analytics workspace and set a daily ingestion cap"
                - "Send a lab VM's logs and the activity log to the workspace"
                - "Write and save three KQL queries you would use in an incident"
                - "Build an alert rule and action group and make it fire"
            - name: Azure Backup and Site Recovery restore drills
              description: |-
                ## Purpose
                A backup you have never restored is a guess, and the exam asks about vaults, policies, file-level restore and failover to another region. Backing up a VM, restoring a single file and the whole machine, and running a test failover with Site Recovery shows the full cycle in a couple of evenings.

                ## Milestones
                1. A Recovery Services vault with a backup policy protecting one lab VM.
                2. A single file restored from a recovery point.
                3. A whole VM restored as a new machine.
                4. A Site Recovery test failover to a second region completed and cleaned up.

                ## Notes
                Stop protection and delete backup data before deleting the vault, or the vault will refuse to go. Soft delete keeps backup data for a period, so check before assuming it is gone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Lab notes record a file-level restore, a full VM restore and a completed Site Recovery test failover with clean-up."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a Recovery Services vault and protect one lab VM"
                - "Restore a single file from the first recovery point"
                - "Run a Site Recovery test failover to a second region"
                - "Stop protection and remove backup data before deleting the vault"
            - name: Closing the weakest domain after the first full practice exam
              description: |-
                ## Purpose
                The first timed practice exam nearly always shows one skill area well below the rest, often networking or monitoring. A focused two to three week block on that area, with its own labs and question sets and a retest at the end, is usually worth more than another lap of everything.

                ## Milestones
                1. The weakest skill area and its lowest sub-skills named from the first practice exam.
                2. A two to three week block planned with labs and question sets for those sub-skills.
                3. Every sub-skill in the block covered by at least one lab note.
                4. A retest on that skill area showing a measured improvement.

                ## Notes
                Start from the **Remediation plan** template if you like a written gap, action and check for each sub-skill.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The weakest skill area's score on a retest is higher than on the first full practice exam, with a lab note for each targeted sub-skill."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Name the weakest skill area and its three lowest sub-skills"
                - "Plan two to three weeks of labs and questions on those sub-skills"
                - "Complete a lab note for each targeted sub-skill"
                - "Retest that skill area and record the change in score"
            - name: Asking your employer to fund the exam
              description: |-
                ## Purpose
                Many employers will pay for an exam voucher, a lab platform or study time if the request ties the certification to work the team actually does. A short written case, naming the Azure tasks you would take on and the total cost, gets a clearer answer than a hallway question.

                ## Milestones
                1. The employer's training or certification policy found and read.
                2. Total cost listed: voucher, resources, possible retake and study hours.
                3. A one-page case linking AZ-104 skills to two or three real tasks at work.
                4. A decision from your manager recorded, including any conditions such as a stay period.

                ## Notes
                Check whether Microsoft events or training days currently offer exam discounts, and mention it in the case.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page funding case was sent to your manager and their decision, with any conditions, is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your employer's training and certification policy"
                - "List the total cost including one possible retake"
                - "Write one page linking AZ-104 skills to real tasks at work"
                - "Book a short slot with your manager to discuss it"
            - name: Online proctored or test centre decision
              description: |-
                ## Purpose
                Most candidates can take AZ-104 online from home or at a Pearson VUE test centre, and each has its own failure modes: a noisy house or a webcam check on one side, travel and limited slots on the other. Deciding early, with a check of your room, connection and local centres, avoids a scramble in the final fortnight.

                ## Milestones
                1. The current delivery options and online exam rules read on the exam page.
                2. The Pearson VUE system test run on the computer and network you would use.
                3. Nearby test centres and their available slots checked.
                4. A delivery mode chosen with the reason written down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of online or test centre delivery, backed by a passed system test or a named centre with suitable slots."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the current online proctored exam rules for Microsoft exams"
                - "Run the Pearson VUE system test on your exam computer"
                - "Check slots at the two nearest test centres"
                - "Write down your chosen delivery mode and why"
            - name: Exam readiness go or postpone decision
              description: |-
                ## Purpose
                Booking feels like progress, but sitting the exam a month early mostly buys a retake fee. A written go or postpone check, about three weeks before the target date, against your practice scores, coverage tracker and lab notes, makes the call on evidence rather than nerves.

                ## Milestones
                1. The last two timed practice scores compared with your readiness threshold.
                2. Every sub-skill in the tracker at least studied and labbed.
                3. Any skill area below threshold named with a plan.
                4. A go or postpone decision recorded, with a new date if postponing.

                ## Notes
                Check the rescheduling deadline before deciding. Moving an exam too close to the slot can forfeit the fee.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated go or postpone decision is recorded against the last two practice scores and the coverage tracker, with a new date if postponed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put your last two practice scores beside your readiness threshold"
                - "Check the coverage tracker for any untouched sub-skill"
                - "Check the rescheduling deadline for your booked slot"
                - "Record go or postpone and the new date if needed"
            - name: Booking the AZ-104 exam slot
              description: |-
                ## Purpose
                A booked slot turns the study calendar into a real deadline, and popular evening and weekend slots go first. Booking from your certification profile once practice scores are rising, at a time of day you are usually sharp, fixes the date and starts the final countdown.

                ## Milestones
                1. The exam booked from your certification profile with your chosen delivery mode.
                2. Confirmation email saved with the date, time, time zone and booking reference.
                3. The rescheduling and cancellation deadline put in your calendar.
                4. Any voucher or discount applied before payment.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An AZ-104 exam slot is booked, the confirmation is saved and the rescheduling deadline is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a date and time of day when you are usually sharp"
                - "Book the exam from your certification profile"
                - "Save the confirmation with date, time zone and booking reference"
                - "Add the rescheduling deadline to your calendar"
            - name: Final two weeks before the AZ-104 exam
              description: |-
                ## Purpose
                The last fortnight is for consolidation, not new material. Two final timed practice exams, a pass through the wrong answer log and flashcards, one rebuild of your network lab from its template and normal sleep do more for the score than a last-minute course.

                ## Milestones
                1. Two timed practice exams taken in the final fortnight, both at or above threshold.
                2. The wrong answer log reread and every repeated confusion explained aloud.
                3. The hub and spoke lab rebuilt from its template and torn down.
                4. No new resources started in the last three days.
              priority: medium
              deadlineOffsetDays: 110
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two final practice exams at or above threshold are recorded and the wrong answer log has been fully reviewed before exam day."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Book two timed practice exam sessions into the final fortnight"
                - "Reread the wrong answer log and explain each confusion aloud"
                - "Rebuild the network lab from its template once more"
                - "Stop starting new topics three days before the exam"
            - name: Exam day plan for case studies and timing
              description: |-
                ## Purpose
                Case studies and sections you cannot return to once submitted can appear on AZ-104, so pacing decisions matter on the day. A written plan for timing, flagging questions, using any documentation access and handling the check-in, rehearsed in your last practice exam, keeps panic out of the room.

                ## Milestones
                1. A pacing rule written: minutes per question and when to flag and move on.
                2. The rule on reviewing sections before submitting understood from the sandbox demo.
                3. Check-in steps listed: ID, arrival or log-in time, room scan or locker.
                4. The plan used once in a full practice exam and adjusted.

                ## Notes
                Start from the **Operational checklist** template so the check-in steps are ticked off on the morning.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page exam day plan covering pacing, flagging, section review and check-in exists and was rehearsed in a timed practice exam."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a pacing rule for standard questions and case studies"
                - "Check in the sandbox demo how sections lock once submitted"
                - "List every check-in step for your delivery mode"
                - "Rehearse the plan in your next timed practice exam"
            - name: Score report, certificate and Credly badge
              description: |-
                ## Purpose
                After the exam, the score report breaks performance down by skill area, and the certification and badge appear in your profile within days. Saving the report, claiming the badge and noting the expiry date while it is fresh makes the result usable and starts the renewal clock correctly.

                ## Milestones
                1. The score report downloaded and filed, with the weakest areas noted.
                2. The certification visible in your Microsoft Learn profile with its expiry date.
                3. The Credly badge claimed and shared where you choose.
                4. The expiry date added to your credentials record and calendar.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The score report is filed, the certification and its expiry date appear in your profile and the badge is claimed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Download the score report and note your weakest skill areas"
                - "Confirm the certification and expiry date in your Learn profile"
                - "Accept the Credly badge from the email invitation"
                - "Add the expiry date to your calendar and credentials record"
            - name: Retake plan after a below-pass score
              description: |-
                ## Purpose
                A fail on AZ-104 is common and the score report tells you exactly where marks went. A calm retake plan, built from the skill area breakdown within a week of the result and respecting Microsoft's waiting period rules, turns the first attempt into the most accurate diagnostic you will get.

                ## Milestones
                1. The score report breakdown copied into your coverage tracker.
                2. The current retake waiting period and fee checked on the Microsoft policy page.
                3. A four to six week plan aimed at the two lowest skill areas.
                4. A new exam date booked once practice scores clear your threshold.

                ## Notes
                Start from the **Remediation plan** template, one row per weak skill area.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written retake plan names the two lowest skill areas, the current retake rules and a new exam date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Copy the skill area breakdown from the score report into your tracker"
                - "Check the current retake waiting period and fee"
                - "Plan four to six weeks on the two lowest skill areas"
                - "Book the retake once two practice scores clear your threshold"
            - name: AZ-104 for an on-premises Windows Server administrator
              description: |-
                ## Purpose
                Engineers coming from Active Directory, Hyper-V and file servers already know the jobs, but the Azure versions have different names and limits. Mapping each familiar task to its Azure equivalent, and noting where the model really differs, lets you study the gaps instead of relearning what you know.

                ## Milestones
                1. A two-column map of on-premises tasks and their Azure equivalents.
                2. The main differences noted: Entra ID against domain services, NSGs against firewalls, managed disks against SANs.
                3. Hybrid identity sync and Azure Files with File Sync read as the bridges.
                4. The readiness self-rating revised with what transfers and what does not.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written map of at least fifteen on-premises tasks to their Azure equivalents, with the differences that matter for the exam noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List fifteen tasks you do today on Windows Server and Active Directory"
                - "Write the Azure service or feature that does each one"
                - "Note where the Azure model behaves differently"
                - "Update your readiness ratings with what carries over"
            - name: AZ-104 for an AWS engineer adding Azure
              description: |-
                ## Purpose
                AWS engineers often trip on Azure's resource groups, subscription and tenant model and the split between Azure RBAC and Entra roles. Translating the AWS concepts you know into Azure terms, and labbing the ones that do not translate, cuts weeks off the study plan.

                ## Milestones
                1. A translation table of at least twelve AWS services and their Azure counterparts.
                2. The concepts with no clean match listed, such as resource groups and management groups.
                3. Labs completed on the three concepts that differ most.
                4. Practice questions on identity and governance at or above your threshold.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A translation table of twelve AWS and Azure equivalents and lab notes on the three biggest differences are written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a table of twelve AWS services and their Azure counterparts"
                - "List the Azure concepts with no clean AWS match"
                - "Lab the three concepts that differ most from AWS"
                - "Retake identity and governance practice questions afterwards"
            - name: Studying for AZ-104 around on-call and family time
              description: |-
                ## Purpose
                Engineers on an on-call rota or with young children lose study slots without warning, and a plan built for perfect weeks collapses in the first bad one. Short portable sessions, a weekly plan made on Monday and a longer exam runway keep progress going when evenings are not your own.

                ## Milestones
                1. On-call weeks marked in the study calendar with a lighter target.
                2. A set of 20-minute sessions that need no lab, such as flashcards or question sets.
                3. A weekly plan set each Monday around known commitments.
                4. The target exam week moved out if the plan needs it, without guilt.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "On-call weeks are marked in the calendar with lighter targets, and a Monday weekly plan has been made for four weeks running."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark your on-call weeks in the study calendar with a lighter target"
                - "Write a list of 20-minute study sessions that need no lab"
                - "Plan this week's study around known commitments @recurring(weekly:mon)"
                - "Agree protected lab time with the people you live with"
            - name: Running an AZ-104 study group at work
              description: |-
                ## Purpose
                Teams moving workloads to Azure often have several engineers needing the same skills at once. A small study group with a shared lab subscription, a weekly session where one person teaches a sub-skill, and a target month for everyone to sit spreads the effort and raises the team's Azure skills together.

                ## Milestones
                1. Three to six engineers agreed with a shared target exam month.
                2. A shared lab subscription with a budget and per-person resource groups.
                3. A weekly session rota where each member teaches one sub-skill.
                4. Group practice scores tracked and members booked once ready.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A study group of three or more has a shared lab subscription, a teaching rota and a target month, with weekly sessions held."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask colleagues who need Azure skills whether they want to join"
                - "Set up a shared lab subscription with a budget and per-person groups"
                - "Run the weekly study group session from the rota @recurring(weekly:thu)"
                - "Track each member's practice scores in one shared sheet"
            - name: Admin runbook library from your AZ-104 labs
              description: |-
                ## Purpose
                Lab notes written for the exam are most of the way to runbooks a team can use at work. Turning the best of them into short, tested procedures, such as restoring a VM from backup or granting least-privilege access, keeps the skills alive after the exam and shows the certification in practice.

                ## Milestones
                1. Ten lab notes chosen that match tasks your team actually does.
                2. Each rewritten as a runbook with purpose, prerequisites, steps and rollback.
                3. Each runbook tested once in a non-production subscription.
                4. The library shared with your team where they keep procedures.

                ## Notes
                Ask the agent to turn a lab note into a first runbook draft, then test every step yourself before sharing it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten tested runbooks derived from AZ-104 labs, each with steps and rollback, are stored where your team keeps procedures."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick ten lab notes that match real tasks on your team"
                - "Ask the agent to draft a runbook from your first lab note"
                - "Test each runbook in a non-production subscription"
                - "Add one new tested runbook to the library @recurring(monthly:20)"
            - name: Choosing the next Microsoft certification after AZ-104
              description: |-
                ## Purpose
                AZ-104 is the usual prerequisite or stepping stone for Microsoft's expert and specialist credentials in architecture, security, networking and DevOps. Comparing the next options against the work you want to be doing in two years, rather than whichever exam colleagues took, gives the next round of study a purpose.

                ## Milestones
                1. Three next-step certifications listed with their prerequisites from Microsoft Learn.
                2. Each compared against the role you want and the work your team needs.
                3. One chosen, or a deliberate decision recorded to pause certifications for a year.
                4. A rough start month written in your plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the next certification after AZ-104, or a pause, with the reason and a start month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three next Microsoft certifications and their prerequisites"
                - "Compare each against the role you want in two years"
                - "Ask your manager which skills the team will need next"
                - "Record your choice and a rough start month"
            - name: Yearly AZ-104 renewal assessment
              description: |-
                ## Purpose
                Microsoft role-based certifications expire after a year unless renewed, and renewal is a free online assessment on Microsoft Learn that opens in the months before expiry. Putting the window in the calendar, revising what changed in Azure that year and renewing early means the credential never lapses into a full retake.

                ## Milestones
                1. The expiry date and renewal window noted from your certification profile.
                2. The renewal collection of Learn modules reviewed when the window opens.
                3. The renewal assessment passed before the expiry date.
                4. The new expiry date recorded and next year's reminder set.

                ## Notes
                Check the current renewal rules on Microsoft Learn each year. If the assessment is failed, it can usually be retaken after a short wait, so start early in the window.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The AZ-104 renewal assessment is passed before expiry each year and the new expiry date is recorded."
                cadence: cyclic
              tasks:
                - "Note the expiry date shown in your certification profile"
                - "Open the renewal assessment as soon as the window opens @recurring(yearly)"
                - "Work through the renewal collection of Learn modules"
                - "Record the new expiry date once renewed"
---

# Azure Administrator (AZ-104)

This area is for engineers who look after Azure, or are about to, and want the AZ-104 exam behind the Azure Administrator Associate title. It starts with foundations (the study guide, an honest readiness check, a sandbox subscription with a spending cap, a baseline practice score and a dated calendar), then the weekly study and lab machinery, the skills themselves across identity and governance, storage, compute, virtual networking and monitoring, the decisions about resources, delivery mode and readiness, booking and exam day, plans for Windows Server admins, AWS engineers and people studying around on-call, and specialist work such as a runbook library, the next credential and the yearly renewal.

The rhythm is four study sessions and a lab every week, a Friday wrong-answer review, a Sunday teardown of lab resources, a short daily command drill, a monthly timed practice exam, cost review and coverage reset, and quarterly checks of the study guide change log. The Purchase decision, Metrics log, Operational checklist and Remediation plan templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
